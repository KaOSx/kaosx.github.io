---
layout: news
title: KaOS 2019.04
permalink: /news/2019/kaos04/
date: '2019-04-28 05:23:31 -0500'
date_gmt: '2019-04-28 05:23:31 -0500'
---
A nice way of celebrating the sixth anniversary of this distribution is releasing KaOS 2019.04 with fully updated Midna theme, a new toolchain and Qt 5.12.3

{% include image.html
            img="img/2019/midna2019.png"
            title="KaOS 2019"
            caption="KaOS 2019"
            url="img/2019/midna2019.png" %}

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.57.0, Plasma 5.14.4 and KDE Applications 19.04.0. All built on Qt 5.12.3.

A new **Glibc 2.29/GCC 8.3.0/Binutils 2.32** based toolchain is among the many changes to the base of the system. Updates to Systemd, LLVM, MariaDB, Protobuf, Mesa, Polkit and Qt required the rebuild of a large percentage of the KaOS repositories. The removal of Python2 from the KaOS repositories is ongoing, many more packages are now build on Python3 exclusively, goal is to be Python2 free by fall/early winter 2019.
            
[Highlights of KDE Applications 19.04](https://kde.org/announcements/announce-applications-19.04.0.php) include an extensive re-write of Kdenlive as more than 60% of its internals has changed, improving its overall architecture, Dolphin introduces smarter tab placement and KMail comes with support for language tools (grammar checker).

{% include image.html
            img="img/2019/kdenlive.png"
            title="Kdenlive 2019"
            caption="Kdenlive 2019"
            url="/img/2019/kdenlive.png" %}
            
With **LibreOffice 6.2.0**, it is now possible to supply this as a pure Qt5/kf5 application. LibreOffice has thus replaced Calligra as the default Office Application for KaOS.
            
KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

{% include image.html
            img="img/2019/sddm.png"
            title="2019 SDDM theme"
            caption="2019 SDDM theme"
            url="/img/2019/sddm.png" %}
            
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.



## Base of the system
Most notable major updates to the base of the system are GCC 8.3.0 , Glibc 2.29, Linux 5.0.8, Systemd 242, MariaDB 10.3.14, LLVM 7.1.0, Mesa 19.0.3, NetworkManager 1.18.0, Rust 1.34.0, Nano 4.2, GStreamer 1.16.0, and **Qt 5.12.3**.

KaOS repositories no longer provide Qt 4. It is a good four years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.2.5 series. Highlights of the changes and additions:

* The calculation of required space – including swap – has been simplified, and Calamares no longer reserves 2GiB of space in calculations for internal use (this means that it no longer mysteriously drops swap when the disk size is close to the required installation size).
* Bootloader module: a serious bug introduced in 3.2.4 which prevents successful boot after installation on EFI machines, has been repaired.
* Partition module: the location that is selected for the bootloader, no longer changes when a new partition is created.
* Automated partitioning gained the option to choose a minimal swap, or swap space large enough to support hibernate.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
