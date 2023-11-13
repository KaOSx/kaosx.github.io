---
layout: news
title: KaOS 2023.11
permalink: /news/2023/kaos11/
date: '2023-11-13 01:23:31 -0500'
date_gmt: '2023-11-13 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/12.png"
            title="KaOS 2023"
            caption="KaOS 2023"
            url="/img/2022/cala/12.png" %}
            

KaOS is pleased to announce the availability of the November release of a new stable ISO.

This will be the final Plasma 5 release for KaOS and includes all the latest updates, but Plasma 5 & Qt5 are not where upstream development is anymore, so it is time to fully focus on Qt6/kf6/Plasma 6.  To see what the future holds, there is also a Plasma 6 Alpha ISO available. This ISO is installable, with the installer Calamares fully moved to Qt 6/Plasma 6.  There are now many more KDE Applications also ready for Qt6/kf6, you will find quite a few on this ISO. Everything is now packaged in such a way that just about all kf5-based KDE Applications can also run on Plasma 6, so Plasma 6 is almost ready to fully replace Plasma 5 in KaOS. This ISO is only linked in the [dedicated Forum post](https://forum.kaosx.us/d/3072-plasma-6-test-iso){:target="_blank"}, not available from the Download page. The Midna theme is getting a complete overhaul for Plasma 6, major parts are included in this ISO.

Updates to the base of the system included a move to OpenSSL 3.1.4, fully updated Glib2 2.78.1 stack, LLVM/Clang 17.0.4 , kernel moved to Linux 6.5.11, Systemd 254.6, Protobuf 25.0, KMod 31, IWD 2.8, OpenEXR 3.2.0, and ZFS 2.2.0.

For the Plasma 5 desktop, the latest Plasma (5.27.9), [KDE Gear (23.08.3)](https://kde.org/announcements/gear/23.08.0/){:target="_blank"}, and Frameworks (5.112.0) are included. All built on **Qt 5.15.11+**.

{% include image.html
            img="img/2023/plasma6_cube.png"
            title="The Cube is back for Plasma 6"
            caption="The Cube is back for Plasma 6"
            url="/img/2023/plasma6Cube.png" %}
The Midna theme is getting a complete overhaul for Plasma 6, major parts are included in this ISO.

SDDM 0.20.0 added the option to run this display manager in Wayland mode, so KaOS is one step closer to being to move away from X11. The shell used to run in Wayland mode is kwin_wayland (upstream default is using Weston).

The automated partitioning option in the installer (Calamares) now offers the use of all popular filesystems, so no need to use manual partitioning to be able to choose XFS, EXT4, BTRFS, or ZFS.
{% include image.html
            img="img/2023/calamares_qt6.png"
            title="Calamares Qt6 based"
            caption="Calamares Qt6 based"
            url="/img/2023/calamares_qt6.png" %}

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is now part of the default install)

For the adventurous, the kde-next repository is used for a complete Qt6-based KDE stack, all Frameworks & Plasma are built there on Qt6, and a decent amount of KDE Applications have also been ported to Qt6.
{% include image.html
            img="../img/2023/cala_summary.png"
            title="Calamares Qt5"
            caption="Calamares Qt5"
            url="/img/2023/cala_summary.png" %}

Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.12.

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
