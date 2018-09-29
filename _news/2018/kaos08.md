---
layout: news
title: KaOS 2018.08
permalink: /news/2018/kaos08/
date: '2018-08-31 05:23:31 -0500'
date_gmt: '2018-08-31 05:23:31 -0500'
---
It is with great pleasure to present to you the August release of a new stable ISO.

{% include image.html
            img="img/2018/midna.png"
            title="Midna 2018"
            caption="Midna 2018"
            url="/img/2018/midna.png" %}

With almost 70 % percent of the packages updated since the last ISO and the last release being over two months old, a new ISO is more than due. No major changes this time to announce, as was with last ISO, just the usual large package movement. News for [KDE Applications 18.08](https://www.kde.org/announcements/announce-applications-18.08.0.php){:target="_blank"} included Dolphin updated context menu and a modernized 'Settings' dialog, Gwenview received a major overhaul, KMail has added support for travel data and Spectacle now has a magnifier to help you draw a selection rectangle.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.49.0, Plasma 5.13.4 and KDE Applications 18.08.0. All built on **Qt 5.11.1**.

{% include image.html
            img="img/2018/croeso.png"
            title="All new first-run app Croeso"
            caption="All new first-run app Croeso"
            url="/img/2018/croeso.png" %}

KaOS' creation <strong>Croeso</strong> (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout. There was a complete redesign of the Midna theme for 2018. Some 2500 new icons in use, rewritten sddm login theme and a KaOS community selected new wallpaper (created by Jomada).

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

{% include image.html
            img="img/2018/sddm.png"
            title="SDDM 2018"
            caption="SDDM 2018"
            url="/img/2018/sddm.png" %}

## Base of the system
Most notable major updates to the base of the system are **Xorg-Server 1.20.1**, Linux 4.17.17, Pacman 5.1.1, Wayland 1.16.0, Gstreamer 1.14.2, LLVM/Clang 6.0.1, Systemd 239, Mesa 18.1.7, NetworkManager 1.12.2, Rust 1.26.0, Protobuf 3.6.1, Intel-ucode 20180807, Openjdk 8u171 and Ruby 2.5.1

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

{% include image.html
            img="img/2018/croeso_wall.png"
            title="Croeso's wallpaper module"
            caption="Croeso's wallpaper module"
            url="/img/2018/croeso_wall.png" %}

## Common Notes
KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.2 series. Highlights of the changes and additions:

* The branding module has also seen an overhaul and the slideshow framework has been extended with some new classes which can be used.
* The GeoIP service provided by FreeGeoIP.net is closing down and a different API is being offered, including a free (gratis) service tier. KaOS has moved to using ipapi.co
* UI annoyances in the partitioning module were fixed; the mount-point selector is now more obvious when no mount-point has been chosen, and the mount-point and flags are preserved when (re)editing partitions.
* The list of languages on the welcome page, where the user can select which language to use for the installer, now displays languages in their native representation, rather than the English name for each language.
* The user shell is no longer hard-coded to /bin/bash but follows the default setting for useradd(8), e.g. those set in /etc/default/useradd.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
