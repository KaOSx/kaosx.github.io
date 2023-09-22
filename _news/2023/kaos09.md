---
layout: news
title: KaOS 2023.09
permalink: /news/2023/kaos09/
date: '2023-09-22 01:23:31 -0500'
date_gmt: '2023-09-22 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/12.png"
            title="KaOS 2023"
            caption="KaOS 2023"
            url="/img/2022/cala/12.png" %}
            

It is with great pleasure to present to you the September release of a new stable ISO.

As you will note in this release announcement, work in KaOS is really shifting toward Plasma 6.  This ISO is still Plasma 5 based and includes all the latest updates, but Plasma 5 & Qt5 are not where upstream development is anymore. Plan is to have this or the November ISO be the last Plasma 5 based stable ISO, after that, it will be Plasma 6 only.

Major updates to the base of the system included a move to OpenSSL 3.1.3, fully updated Boost 1.82.0/ICU 73.2 stack, Alsa packages 1.2.10, kernel moved to Linux 6.4.16, Systemd 253.10, Python 3.10.13, Util-Linux 2.39.2, IWD 2.8, OpenEXR 3.2.0, and Libarchive 3.7.2.

For the Plasma desktop, the latest Plasma (5.27.8), [KDE Gear (23.08)](https://kde.org/announcements/gear/23.08.0/){:target="_blank"}, and Frameworks (5.111.0) are included. All built on **Qt 5.15.10+**. Among the many changes included in KDE Gear 23.08 are, Kate has added support for the GLSL language and Godot's game design engine in its LSP client, and includes a QML language server option when using Qt 6. NeoChat can now display location events and also a map with the location of all the users currently broadcasting their location using Itineray's Matrix integration. Skanpage, KDE's scanning utility, now lets you re-order multi-page scans using drag-and-drop and offers more adjustment options, like brightness, contrast, gamma, and color balance.

Not only is there a new stable ISO released, but there is also a new Plasma 6 preview ISO available.  This ISO is now also installable, the installer Calamares is almost ready for Qt 6/Plasma 6 (it builds and runs, but can't execute an installation yet), but the Qt5/kf5 version is included for now.  There are now many more KDE Applications also ready for Qt6/kf6, you will find quite a few on this ISO. Octopi is now also available in a Qt6/kf6 version.  This ISO is only linked in the [dedicated Forum post](https://forum.kaosx.us/d/3072-plasma-6-test-iso){:target="_blank"}, not available from the Download page.
{% include image.html
            img="img/2023/sddm_plasma6.png"
            title="SDDM Qt6/Plasma6"
            caption="SDDM Qt6/plasma6"
            url="/img/2023/plasma6.png" %}
The Midna theme is getting a complete overhaul for Plasma 6, major parts are included in this ISO.

SDDM 0.20.0 added the option to run this display manager in Wayland mode, so KaOS is one step closer to being to move away from X11. The shell used to run in Wayland mode is kwin_wayland (upstream default is using Weston).

The automated partitioning option in the installer (Calamares) now offers the use of all popular filesystems, so no need to use manual partitioning to be able to choose XFS, EXT4, BTRFS, or ZFS.
{% include image.html
            img="img/2023/cala_summary.png"
            title="Calamares"
            caption="Calamares"
            url="/img/2023/cala_summary.png" %}

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is now part of the default install)

{% include image.html
            img="../img/2023/apps6.png"
            title="KDE Application kf6 based"
            caption="KDE Applications kf6 based"
            url="/img/2023/apps6.png" %}
For the adventurous, the kde-next repository is used for a complete Qt6-based KDE stack, all Frameworks are built there on Qt6, most of Plasma and a decent amount of KDE Applications have also been ported to Qt6.

Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.11.

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd-provided Systemd-boot for UEFI installs.

Included is a KaOS-specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
{% include image.html
            img="img/2020/croeso_packages.png"
            title="Croeso Package Selection Page"
            caption="Croeso Package Selection Page"
            url="/img/2020/croeso_packages.png" %}
Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
