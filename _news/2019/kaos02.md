---
layout: news
title: KaOS 2019.02
permalink: /news/2019/kaos02/
date: '2019-02-28 05:23:31 -0500'
date_gmt: '2019-02-28 05:23:31 -0500'
---
It is with great pleasure to present to you a first KaOS ISO for 2019.

{% include image.html
            img="img/2019/midna.png"
            title="KaOS 2019"
            caption="KaOS 2019"
            url="img/2019/midna.png" %}

The policy is, once a first pacman -Syu becomes a major update, it is time for a new ISO so new users are not faced with a difficult first update. Major updates included a move to Python 3.7 (3.7.2), Readline 8.0.0, Glib2 2.58.3, Qt 5.12.1, PHP 7.2 besides the usual full Frameworks, Plasma & KDE Applications replacements, so most systems will see 70-80% of their install replaced by new packages so a new ISO is more than due.
            
[Plasma 5.15](https://kde.org/announcements/plasma-5.15.0.php) is included in this ISO. Highlights of this version include changes to the configuration interfaces, including more options for complex network configurations, integration with third-party technologies like GTK, Wayland now supports virtual desktops, and Firefox 64 can now optionally use native KDE open/save dialogs.
{% include image.html
            img="img/2019/firefox.png"
            title="Firefox with native KDE open/save dialogs"
            caption="Firefox with native KDE open/save dialogs"
            url="/img/2019/firefox.png" %}
This is a bleeding-edge functionality that is included in KaOS, it can be enabled by installing the xdg-desktop-portal and xdg-desktop-portal-kde packages and setting GTK_USE_PORTAL=1 in Firefox's .desktop file.
            
With **LibreOffice 6.2.0**, it is now possible to supply this as a pure Qt5/kf5 application. LibreOffice has thus replaced Calligra as the default Office Application on this ISO.
            
KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

{% include image.html
            img="img/2019/libreoffice.png"
            title="Qt/kf5 based LibreOffice"
            caption="Qt/kf5 based LibreOffice"
            url="/img/2019/libreoffice.png" %}
            
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.



## Base of the system
Most notable major updates to the base of the system are Python 3.7.2 , Glib2 2.58.3, Linux 4.20.13, Readline 8.0.0, Libvpx 1.8.0, ICU 62.1, Mesa 18.3.4, NetworkManager 1.14.6, Rust 1.32.0, Nano 3.2, Bison 3.2.4, PHP 7.2.15 and **Qt 5.12.1**.

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
* The currently-selected disk device is remembered between manual partitioning and the partitioning-overview pages.
* The mount module now handles missing extraMounts and extraMountsEfi keys gracefully (this is probably a misconfiguration, though, and gives a warning).
* Automated partitioning gained the option to choose a minimal swap, or swap space large enough to support hibernate.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
