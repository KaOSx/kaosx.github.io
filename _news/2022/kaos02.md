---
layout: news
title: KaOS 2022.02
permalink: /news/2022/kaos02/
date: '2022-02-14 01:23:31 -0500'
date_gmt: '2022-02-14 01:23:31 -0500'
---

{% include image.html
            img="img/2022/welcome.png"
            title="KaOS Welcome 2022"
            caption="KaOS Welcome 2022"
            url="/img/2022/welcome.png" %}
            

It is with great pleasure to present to you the February release of a new stable ISO.

With the release of Plasma 5.24, a first for KaOS can be announced.  Wayland on Plasma is in such a good shape that it now can be the default session for KaOS.  For Virtualbox, this means some intervention is needed for auto-resize, upstream does not support this yet for a Wayland session, so you will need to set the desired screen resolution in Systemsettings.  When you choose to use non-free Nvidia during the boot-up of the Live session, then Wayland won't be used, for Nvidia, it is still better to use an X session.  
The one application that is not ready for Wayland, is SMplayer, used in KaOS for many years as the default media player. From the many bug reports for Wayland support & SMplayer (dating back to 2017), it seems SMplayer is unable to move to Wayland, thus can no longer be the default.  
Haruna is the replacement. It is developed for Plasma, is QML based, has yt-dlp support, subtitle feature, and a rich set of configuration options.

{% include image.html
            img="img/2022/haruna.png"
            title="Haruna Media Player"
            caption="Haruna Media PLayer"
            url="/img/2022/haruna.png" %}

Other news regarding [Plasma 5.24](https://kde.org/announcements/plasma/5/5.24.0/){:target="_blank"} includes a new Configure Display Settings item. This lets you adjust your screens' resolution, orientation, scaling, and position relative to other monitors. Desktop Panels are now easier to move around and stick to any edge you want, as you can now drag them from anywhere on their toolbar while in Edit Mode. To make critically important Plasma notifications stand out, they now come with an orange strip on the side to visually distinguish them from less urgent messages. The Task Manager’s context menus have been clarified and simplified. The Add a keyboard layout dialog has been redesigned for simplicity and ease of use. And the Cover Flip and Flip Switch effects are back, you can find them in the System Settings Window Management > Task Switcher page.  
For the other KDE parts, the latest Frameworks (5.91.0) and KDE Gear (21.12.2) are included. All built on **Qt 5.15.2+**.

{% include image.html
            img="img/2022/overview.png"
            title="Plasma 5.24 Overview Effect"
            caption="Plasma 5.24 Overview Effect"
            url="/img/2022/overview.png" %}

Updates to the base of this distribution were very large and they included an updated Toolchain, due to numerous CVE fixes in Glibc 2.33 and almost six months worth of commits for GCC 11.2, a move to Perl 5.34.0, PHP move to 8.1.2 (PHP 7 is still available, to make the transition easier), GStreamer stack moving to 1.20.0, kernel moved to Linux 5.15.23 (lts release), Systemd 250.3, Curl 7.81.0, Mesa 21.3.6, Vulkan packages 1.3.205, Wayland 1.20.0, Sudo 1.9.9, and Openldap 2.6.1.  
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.3.

The installer Calamares now prints a warning when the partition module has a conflicting configuration for the swap choices, rather than always using “suspend” and always sets bigtime option on XFS filesystems.

{% include image.html
            img="img/2021/summaryq.png"
            title="Calamares"
            caption="Calamares"
            url="/img/2021/summaryq.png" %}

New applications added include [Kalendar](https://claudiocambra.com/2022/02/12/kalendar-1-0-is-out/), a calendar application that allows you to manage your tasks and events. Kalendar supports both local calendars as well as a multitude of online calendars: Nextcloud, Google® Calendar, Outlook®, Caldav, and many more.

For Nvidia, a new long-term support version is added to this ISO, 470xx. The move by Nvidia to 495 meant the end of support for Kepler-based cards, thus the need to add a new legacy version.

Qt 6.2.3 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web-browsers. All of the PyQt packages are now available in a Qt6 version and QBittorrent. Plus the Kvantum theming has support for Qt6.

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight-year old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).

{% include image.html
            img="img/2022/kalendar.png"
            title="Kalendar"
            caption="Kalendar"
            url="/img/2022/kalendar.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
{% include image.html
            img="img/2021/keyboardq.png"
            title="Calamares Keyboard Page with preview"
            caption="Calamares Keyboard Page with interactive preview"
            url="/img/2021/keyboardq.png" %}
Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
