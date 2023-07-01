---
layout: news
title: KaOS 2023.06
permalink: /news/2023/kaos06/
date: '2023-07-01 01:23:31 -0500'
date_gmt: '2023-07-01 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/12.png"
            title="KaOS 2023"
            caption="KaOS 2023"
            url="/img/2022/cala/12.png" %}
            

KaOS is pleased to announce the availability of the June release of a new stable ISO.

For the Plasma desktop, the latest Plasma (5.27.6), [KDE Gear (23.04.2)](https://kde.org/announcements/gear/23.04.0/){:target="_blank"}, and Frameworks (5.107.0) are included. All built on **Qt 5.15.10+**. Among the many changes included in KDE Gear 23.04, are the option to run Dolphin with kio-admin, thus giving the option again to run Dolphin with administrator rights from the menu.

Not only is there a new stable ISO released, but there is also a new Plasma 6 preview ISO available.  This ISO is not installable, only meant to test in Live mode.  The installer Calamares is not ready for Qt 6/Plasma 6, nor are there many KDE Applications available in their Qt6 version (about 25 have been build for KaOS).  This ISO is only linked in the [dedicated Forum post](https://forum.kaosx.us/d/3072-plasma-6-test-iso){:target="_blank"}, not available from the Download page.
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

Updates to the base of the system included a new GCC 12.3.0, Glibc 2.37, Binutils 2.40 based Toolchain, Glib2 stack all updated rebuild for 2.76.3, kernel moved to Linux 6.3.10, Systemd 253.5, Python 3.10.12, Util-Linux 2.39.1, ZFS 2.1.12, Gnupg 2.4.2, and Libssh2 1.11.0.

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is now part of the default install)

{% include image.html
            img="../img/2023/tokodon.png"
            title="Tokodon"
            caption="Tokodon"
            url="/img/2023/tokodon.png" %}
New applications added include **Tokodon**, which brings the Mastodon federated social media platform to your fingertips, allowing you to easily read, post, and message, plus **Signal Desktop**, a privacy-focused messenger application.

Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.11.

Qt 6.5.0 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web browsers. Latest applications that are now using Qt6 are OBS-studio & Qbittorrent. Plus the Kvantum theming has support for Qt6.

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
