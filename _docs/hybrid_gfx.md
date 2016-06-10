---
layout: docs
status: publish
published: true
title: Hybrid Graphic Systems
permalink: /docs/hybrid_gfx/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 3116
wordpress_url: http://kaosx.us/?page_id=3116
date: '2015-06-16 19:06:56 -0400'
date_gmt: '2015-06-16 19:06:56 -0400'
categories: []
tags: []
comments: []
---
{:toc}

**Hybrid Graphics, what's that?**

Manufacturers developed technologies involving **two graphic cards in a single computer**, enabling both high performance and power saving usages. This technology is well supported on Windows but it's still quite experimental with Linux distributions.

We call hybrid graphics a set of two graphic cards with different abilities and power consumption. It has nothing to do with other technologies like SLI or CrossFire, intended to improve only the computing power of a system without taking care of power consumption.

The aim of using two graphic cards is mainly to provide a good compromise between a powerful card whose power is needed only when running demanding programs, and an integrated card, which would not be well suited for those usages. On Windows, the load between the discrete and the integrated card is automatically balanced, when the right drivers are installed.

For KaOS there are two options to make this technology work, though for ATI/Radeon systems only PRIME is an option.

### PRIME

'PRIME GPU offloading' and 'Reverse PRIME' is an attempt to support muxless hybrid graphics in the Linux kernel. All needed requirements, DRI2, updated graphic stack (Kernel, xserver and mesa), GPU drivers are available on a default KaOS install setup with free drivers.

To check if your system supports PRIME run:

```
$ xrandr --listproviders
```

If the output shows two providers, your system will work with PRIME, example output:

```
Provider 0: id: 0x8d cap: 0xb, Source Output, Sink Output,
Sink Offload crtcs: 4 outputs: 5 associated providers: 0 name:Intel
Provider 1: id: 0x64 cap: 0x7, Source Output, Sink Output,
Source Offload crtcs: 4 outputs: 1 associated providers: 0 name:nouveau
```

To use the Nouveau card in this example for offloading the Intel card:

```
xrandr --setprovideroffloadsink nouveau Intel
```

If you have an ATI/Radeon system, replace nouveau with the output --listproviders showed for your card.

When this is done, it becomes very easy to select which card should be used. If you want to offload an application to a GPU, use DRI_PRIME=1. When the application is launched, it will use the second card to do its rendering. If you want to use the "regular" GPU, set DRI_PRIME to 0 or omit it. The behavior can be seen in the following example:

```
$ DRI_PRIME=0 glxinfo | grep "OpenGL vendor string"
OpenGL vendor string: Intel Open Source Technology Center
$ DRI_PRIME=1 glxinfo | grep "OpenGL vendor string"
OpenGL vendor string: nouveau
```

The offloading command needs to be redone after each boot or you can add it to systemsettings --> Startup and Shutdown as a start-up script containing "xrandr --setprovideroffloadsink nouveau Intel".

More info see:
[http://nouveau.freedesktop.org/wiki/Optimus/](http://nouveau.freedesktop.org/wiki/Optimus/)

### Bumblebee for Nvidia cards

If you prefer to use the non-free Nvidia drivers PRIME is not an option, for those you will need to install all needed bumblebee packages.  As always, make sure your system is fully updated before installing any.

```
sudo pacman -Syu
sudo pacman -S nvidia-bumblebee bumblebee bbswitch
```

The free driver is no longer needed:

```
sudo pacman -R xf86-video-nouveau
```

Creating an xorg.conf should not be needed, but some users had booting issues without it.  To create an xorg.conf:

```
nvidia-xconfig
```

After all is installed enable the needed systemd service so bumblebee runs on start-up from now on:

```
sudo systemctl enable bumblebeed.service
```

Add your user to the bumblebee group:

```
sudo usermod -a -G bumblebee user_name
```

Substitute user_name with your actual name.

After rebooting you can check if all works as expected:

```
optirun --status
```

This should show the nvidia card is off.

Any application can be started with "optirun" to use the nvidia card

```
optirun glxgears
```

More info:
[https://github.com/Bumblebee-Project/Bumblebee/wiki](https://github.com/Bumblebee-Project/Bumblebee/wiki)

There is an option to only run with the proprietary nvidia driver, see this forum post at # 8:
[https://forum.kaosx.us/d/1380-error-switching-between-free-to-non-free-nvidia-drivers#8](https://forum.kaosx.us/d/1380-error-switching-between-free-to-non-free-nvidia-drivers#8)
