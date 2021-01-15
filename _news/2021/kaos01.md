---
layout: news
title: KaOS 2021.01
permalink: /news/2021/kaos01/
date: '2021-01-15 01:23:31 -0500'
date_gmt: '2021-01-15 01:23:31 -0500'
---

{% include image.html
            img="img/2020/midna2020.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2020/midna2020.png" %}
            
Two weeks into the New Year, KaOS is pleased to present you with a first ISO for 2021

For the many changes in this release, a few stand out. This is a first ISO that ships with **Qt 6**. Not that Plasma is ready for Qt 6, but some are (Poppler, Strawberry, Qsynth, Qtkeychain for example), so to get this distribution in good shape for the eventual Qt 6 move, any that can be built with Qt 6 are done so now.  
The [KDE Applications release 20.12](https://kde.org/announcements/2020-12-apps-update/){:target="_blank"} saw the addition of almost a dozen new applications, some just moved from standalone releases to now a monthly release, but the addition of Itinerary (an app that provides you with all the information you need while on the road) and Spectacle using Kimageannotator for annotation tool are good improvements.  
There has been a search for quite some time for a good GUI to handle Systemd services, the used systemd-kcm has not been maintained for years. This replacement is now found and included in the ISO, **Stacer** (it can also be used as a system clean-up tool and handle startup applications). 

{% include image.html
            img="img/2021/strawberry_qt6.png"
            title="Strawberry Qt6 version"
            caption="Strawberry Qt6 version"
            url="/img/2021/strawberry_qt6.png" %}
As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.78.0, Plasma 5.20.5, and KDE Applications 20.12.1. All built on **Qt 5.15.2**.

News for those working on KaOS (probably and hopefully not visible at all to regular users) is the migration to a new, dedicated server. This is a real hardware server, running KaOS, so no longer using a VPS. Advantage is direct access to the hardware and much more powerful specs.

For the installer Calamares, there is now preliminary support for “split” encryption, where the boot partition is not encrypted, but the rest of the system is encrypted and the `users` module now has a more detailed way to specify user groups

{% include image.html
            img="img/2021/stacer.png"
            title="Stacer"
            caption="Stacer"
            url="/img/2021/stacer.png" %}
New applications added include the Matrix chat client Neochat (KDE maintained fork of Spectral), and Barrier, allowing the user to use a single keyboard and mouse to control multiple computers. New are also a PyQt 6 stack, including Sip 6, PyQt-Builder, PyQt6-sip, and PyQt 6.0.0.

Updates to the base of this distribution were numerous and include LLVM/Clang 11 (11.0.1), Python3 3.8.7, ICU 68.2, Boost 1.75.0, Git 2.30.0, Protobuf 3.14, Hdf5 1.12.0, Poppler 21.01.0, Mesa 20.3.3, NetworkManager 1.28.0, Libarchive 3.5.1, Samba 4.13.3. The maintenance of the Linux AUFS patches has started again, so the latest kernel can be included again in the ISO, 5.10.6.

{% include image.html
            img="img/2021/qsynth.png"
            title="Qsynth Qt 6 version"
            caption="Qsynth Qt 6 version"
            url="/img/2020/qsynth.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

{% include image.html
            img="img/2021/neochat.png"
            title="Matrix chat client Neochat"
            caption="Matrix chat client Neochat"
            url="/img/2021/neochat.png" %}

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
