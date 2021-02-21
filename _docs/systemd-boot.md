---
layout: docs
status: publish
published: true
title: Configuring systemd-boot
permalink: /docs/
author:
  display_name: shalokshalom
  login: shalokshalom
  email: shalokshalom@protonmail.ch
  url: ''
author_login: shalokshalom
author_email: shalokshalom@protnmail.ch
wordpress_id: 
wordpress_url: 
date: '2021-02-21 23:17:50 +0100'
date_gmt: '2021-02-21 23:17:50 +0100'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

Systemd-boot is the boot manager that replaces GRUB2 in the UEFI installations of KaOS. 
In order to configure it, edit the file ```/usr/lib/systemd/boot/loader/loader.conf```
By default, you see two values in this file: "timeout" and "default". 

### Reducing the timer
{: .offset}

In order to reduce the time at which the default selection does boot automatically, change the number next to "timeout". 

### Default boot selection
{: .offset}

The default selection is also pretty self explanatory. It defines the default boot selection. 

### Complete documentation
{: .offset}

In order to find more comprehensive documentation for the possible settings, visit [the Arch Wiki](https://wiki.archlinux.org/index.php/Systemd-boot#Configuration)
