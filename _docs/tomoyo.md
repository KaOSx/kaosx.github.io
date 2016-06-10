---
layout: docs
status: publish
published: true
title: Using tomoyo-tools for system security
permalink: /docs/tomoyo/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2684
wordpress_url: http://kaosx.us/?page_id=2684
date: '2015-03-27 02:30:37 -0400'
date_gmt: '2015-03-27 02:30:37 -0400'
categories: []
tags: []
comments: []
---
### Introduction

Tomoyo Linux is a Mandatory Access Control (MAC) implementation for Linux, used for system-analysis as well as system restriction for increased security.
It is not designed to offer protection "out of the box", but instead requires time and an understanding of the concepts and tools involved.

Focusing on the behavior of the system, where every process has its defined purpose, Tomoyo allows each process to declare the characteristic behavior and the resources it needs to achieve said purpose. With the protection enabled, Tomoyo then restricts each process to that set of behaviors and resources allowed by the administrator.

The main features of TOMOYO Linux include:
* System analysis
* Increased security through Mandatory Access Control
* Tools to aid in policy generation
* Simple syntax
* Easy to use
* Very few dependencies
* Requires no modification of existing binaries

`/etc/tomoyo/`
is the storage location of all policy information.

### Setup

Tomoyo, because of the way it works, needs to have some time spent on the system in a 'learning' setup. The more time you allow Tomoyo to learn how and what programs you use, the less likely you are to have it log things that are just normal for the given app and scenario. Tomoyo is primarily CLI based but with a well structured and easy to understand layout. It's not that hard to setup, since the KaOS kernel has Tomoyo support available by default. Tomoyo is part of a default KaOS install, but in case it was removed, install with:

```
sudo pacman -Syu
sudo pacman -S tomoyo-tools
```

### Initializing Configuration

Before you can make use of TOMOYO Linux, an initialization procedure must take place. This prepares the files in which policy information will be stored.

```
# /usr/lib/tomoyo/init_policy
```

### Configure Bootloader

To enable Tomoyo, you need to add `security=tomoyo` to the kernel commandline in either grub or gummiboot.
For grub:

```
kdesu kate /etc/default/grub
[...]
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash security=tomoyo"
[...]
```

As always, after editing Grub's configuration you need to run:

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

For systemd-boot:

```
kdesu kate /boot/loader/entries/KaOS.conf
options root=UUID=XXXXXXX-XXXX-XXXX-XXXX-XXXXXX quiet resume=UUID=XXXX-XXXX-XXXX-XXXX-XXXXXX rw security=tomoyo
```

and reboot.

### Setting to Learning Mode

The "Learning Mode" profile is the feature of TOMOYO Linux that makes developing policy very easy. This mode will automatically generate a policy for any domain that has this profile selected.
In order to set up the policy to "learning mode, you have to open the Domain Transition Editor:

```
# tomoyo-editpolicy
```

Now, the only thing that should be listed is the <kernel> domain. Now we need to set Tomoyo to learning mode on the kernel.
The <kernel> should be highlighted in green (if you don't use the arrow keys to select it). Once it is selected, press 'S' and you will be asked to "enter the profile number".

To set the <kernel> domain to 'learning' enter "1". The learning profile will also log all the boot time files and operations. There are four setup profiles to use within Tomoyo, but for now we only need to use the policy number 1.

You will notice the empty <kernel> entry from when we set up is now populated and should have the entries in profile '1' learning mode. Give yourself a pat on the back and go back to using the computer normally. For now you should just go about business as usual and allow Tomoyo to learn the apps you use in your daily routines.

### Disable Tomoyo Hardening

If you run into trouble with Tomoyo or just don't want it running anymore you can easily disable it by changing the bootline from "security=tomoyo" to "security=none". If your system is no longer booting due to problems with Tomoyo you can still fix this using the recovery boot option which should not have Tomoyo enabled.

### More Comprehensive Settings

This guide is here to explain how to get started with Tomoyo and once the system has gone through the "learning" it is time to use the very complete official documentation:

[Tomoyo Wiki](http://tomoyo.sourceforge.jp/2.5/)
