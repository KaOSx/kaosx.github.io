---
layout: news
title: KaOS 2021.10
permalink: /news/2021/kaos10/
date: '2021-10-14 01:23:31 -0500'
date_gmt: '2021-10-14 01:23:31 -0500'
---

{% include image.html
            img="img/2021/midna2021.png"
            title="KaOS Midna 2021"
            caption="KaOS Midna 2021"
            url="/img/2021/midna2021.png" %}
            
Today KDE is celebrating its [25th anniversary](https://25years.kde.org/){:target="_blank"}, to commemorate that event, KaOS is releasing the 2021.10 ISO, including the latest [Plasma 5.23.0](https://kde.org/announcements/plasma/5/5.23.0/){:target="_blank"}.

For installer Calamares there are three major changes. Biggest one is the addition of a bootloader selection module. For UEFI installs it is now possible to select between systemd-boot, rEFInd or no bootloader, all presented in a nice, QML based GUI. Second change is the addition of an interactive keyboard preview in the keyboard setup page. And third is the porting of the License page to QML.

{% include image.html
            img="img/2021/bootloader.png"
            title="Calamares Bootloader Module"
            caption="Calamares Bootloader Module"
            url="/img/2021/plasma_5.23" %}

Highlights of Plasma 5.23 include Kickoff receiving a code overhaul with improved performance & accessibility, and the option to choose a list or grid view for all apps, Systemsettings has easier find options, sorted screen refresh rates, and a timer to revert possible undesired display settings, for Wayland sessions there is a new screen rotation animation and, it is now possible to middle-click-paste between native Wayland and XWayland apps.

For the other KDE parts, the latest Frameworks (5.85.0) and KDE Applications 21.08.2 are included.  All built on **Qt 5.15.2+**.
{% include image.html
            img="img/2021/plasma_5.23.png"
            title="Plasma 5.23"
            caption="Plasma 5.23"
            url="/img/2021/plasma_5.23" %}
Updates to the base of this distribution include Systemd 249.4, Curl 7.79.1, Coreutils 9.0, NetworkManager 1.32.12, Mesa 21.2.3, Bison 3.8.2, Vulkan packages 1.2.195, Udisks 2.9.4, Sudo 1.9.8p2, and Pacman 6.0.1.  
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection). KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.3.

{% include image.html
            img="img/2021/pmanager.png"
            title="Online Package Viewer, Flag page"
            caption="Online Package Viewer, Flag page"
            url="/img/2021/pmanager.png" %}
**pmanager, the packages’ viewer used by KaOS**, was largely rewritten in its backend part. This was due to the migration of the old database based on json to the more consistent SQLite system. That permits the simplification of the flags management. Previously, flags & packages data were completely independent. Now a flag is linked to a package’s name &amp; version, so it can be automatically removed when the package is updated. The frontend got 2 minor changes: the URL of the package’s view was simplified (with the concatenation of the repo and the name/version of the package in one argument) and the flag button is replaced by a link to the build version of the package (if exists) if the package is not flagged. This is due because too many packages were flagged as outdated though an updated version was in build.

Qt 6.2.0 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been build on qt6-webengine, including some web-browsers.  
New applications added include FreeCAD, with the whole stack such a CAD application needs, like PySide, Shiboken, Coin, Soqt, VTK, and Opencascade. And a few Language Server Protocols have been added to use in Kate.

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight year old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).


{% include image.html
            img="img/2021/freecad.png"
            title="Newly added FreeCAD"
            caption="Newly added FreeCAD"
            url="/img/2021/freecad.png" %}

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

{% include image.html
            img="img/2021/summaryq.png"
            title="New modules in Summary page"
            caption="New modules in Summary page"
            url="/img/2021/summaryq.png" %}

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
