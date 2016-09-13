---
layout: news
title: KaOS 2016.09
permalink: /news/2016/kaos09/
date: '2016-09-13 05:23:31 -0500'
date_gmt: '2016-09-13 05:23:31 -0500'
---
It is with great pleasure to present to you KaOS 2016.09. With this ISO KaOS has gone back to a fully integrated build of the different KDE parts. Instead of building Frameworks, Plasma and KDE Applications on their own separate release schedules all are now build the same day of any Frameworks release. To accomplish this Plasma 5 is now build from the **latest commits**, no longer [uses released tars](https://forum.kaosx.us/d/1588-plasma-5-bi-weekly-master-builds){:target="_blank"}.

## Desktop

[![](/img/2016/kaptan.png){: .news-img-right}](/img/2016/kaptan.png)

A new addition for KaOS is a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Another first on this ISO is a new tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.

[![](/img/2016/isowriter.png){: .news-img-left}](/img/2016/isowriter.png)

The Plasma Desktop includes Frameworks 5.26.0, **Plasma 5.7.90**, KDE Applications 16.08.1 & **not yet released ports of KDE Applications.** All built on **Qt 5.7.0.**
[![](/img/2016/tray_icons.png){: .news-horizontal-right}](/img/2016/tray_icons.png)
Changes in Plasma 5.8 include much improved support for multi-screen setups and docking stations, support for modifier-only shortcuts (default: Meta to open launcher menu), global shortcuts for launching applications and their jumplist actions, KWin now supports the llvmpipe driver for OpenGL, compositing removal of unredirect-fullscreen, replaced by compositing blocking and a rewritten Pager using less CPU and memory, shared back-end processing with the Task Manager.

For Plasma 5.8 the used Midna theme has been updated in many parts, this includes on all new SDDM theme, new gfxboot splashscreen, redone panel launchers, updated Logout and Lock screen, several new icons, including icons for the system tray.

The installer now automates setting your location on the world map and has improved volume scanning so it won't show live USB or optical drives as install options.

[![](/img/2016/sddm.png){: .news-img-left}](/img/2016/sddm.png)

## Base of the system
Most notable major updates to the base of the system are a Boost 1.61.0, FFMPEG 3.1.3, Linux 4.7.3, Systemd 231, Poppler 0.47.0, Python 3.5.2, Gstreamer 1.8.3, Protobuf 3.0.2 and MariaDB 10.1.17

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

It is possible for both the Live session and installed system to start a Plasma Wayland session right from the login manager. An X11 session is of course still default, but the drop-down menu has a Wayland entry too. With Plasma 5.8, the Wayland session is now possible on more systems.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 2.4 series. Highlights of the changes and additions:

* Fixed how the timezone setting is applied, so certain environments always obey the setting on first boot
* Fixed timezone selector behavior, so that a timezone changes affect the live system immediately.
* Rewritten large portions of the locale module, with new locale and timezone autodetection functionality and smarter management of locale.conf values
* Fixed a user name validation issue which could in some specific situations cause a failed installation.
* Added support for generating /etc/crypttab, this relies on a single master passphrase.

## Known issues:
* On systems running the Nouveau graphics driver, Qupzilla will not start. Either install the [non-free Nvidia driver](https://kaosx.us/docs/nvidia/){:target="_blank"} or use another browser. Nouveau is not compatible with QtWebEngine.
* If you do not want to install a bootloader, do not use any of the automated partitioning options, select manual for this.  See [the bug report for the installer](https://calamares.io/bugs/browse/CAL-388){:target="_blank"} regarding this.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following [BIOS GPT](https://kaosx.us/docs/bios_gpt/){:target="_blank"}, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or rufus**, and DVDs need a burn speed **no higher than 4x**.
