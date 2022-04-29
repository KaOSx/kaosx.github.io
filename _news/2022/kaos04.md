---
layout: news
title: KaOS 2022.04
permalink: /news/2022/kaos04/
date: '2022-04-29 01:23:31 -0500'
date_gmt: '2022-04-29 01:23:31 -0500'
---

{% include image.html
            img="img/2022/welcome.png"
            title="KaOS Welcome 2022"
            caption="KaOS Welcome 2022"
            url="/img/2022/welcome.png" %}
            

KaOS is pleased to announce the availability of the April release of a new stable ISO.

With the release of [KDE Gear 22.04](https://kde.org/announcements/gear/22.04.0/){:target="_blank"}, some nice new features and enhancements are introduced.  Konsole's completely new feature is Quick Commands: open a quick commands pane from Plugins > Show Quick Commands and you will be able to create short scripts you use frequently, Konsole's SSH plugin has been further enhanced and you can assign different visual profiles.  For Kdenlive, two new options stick out: you can create customized profiles so that your rendered movie adapts perfectly to your needs, and you can also render by zones, using the guides you set up on the timeline as references.
{% include image.html
            img="img/2022/kdenlive.webp"
            title="Kdenlive lets you create customized render profiles"
            caption="Kdenlive lets you create customized render profiles"
            url="/img/2022/kdenlive.webp" %}
Okular now alerts you immediately when you go to sign a document but have no valid digital certificates.  With Skanpage, you can now share scanned documents (including multi-page PDFs) using KDE’s general sharing system, which allows you to push documents to instant messaging apps, online cloud services, social services, and through Bluetooth to other devices.  
For the other KDE parts, the latest Frameworks (5.93.0) and Plasma (5.24.4) are included. All built on **Qt 5.15.3+**>.

After almost two years of testing IWD, it is now in such a good state that it has replaced Wpa_Suplicant as the default wireless daemon for KaOS.

{% include image.html
            img="img/2022/cala_log.png"
            title="Calmares Log View"
            caption="Calamares Log View"
            url="/img/2022/cala_log.png" %}
During the install, there now is an option to either view a slideshow with information about the distribution or watch what the installer Calamares is currently doing by selecting the Log View.

A shift has started as to how all Python packages are built.  Historically, just about all were built with setuptools through a setup.py script.  PEP17 is the new standard for building python packages, see [pep-0517](https://peps.python.org/pep-0517/){:target="_blank"}.  At this stage, KaOS is testing this transition with different new Python build tools, such as Python-flit & Python-build, with Python-wheel currently in use to install the build packages.

Updates to the base of this distribution included Glib2 2.72.1, kernel moved to Linux 5.17.5, Systemd 250.4, Boost 1.78.0, DBus 1.14.0, Mesa 22.0.2, Vulkan packages 1.3.212, Util-linux 2.38, Coreutils 9.1, and Libusb 1.0.26.  
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.4.

New applications added include [Skanpage](https://apps.kde.org/skanpage/), a simple scanning application designed for multi-page scanning and saving of documents and images.

For Nvidia, a new long-term support version is added to this ISO, 470xx. The move by Nvidia to 495 meant the end of support for Kepler-based cards, thus the need to add a new legacy version.

{% include image.html
            img="img/2022/rssguard_qt6.png"
            title="Rssguard ported to Qt6"
            caption="Rssguard ported to Qt6"
            url="/img/2022/rssguard_qt6.png" %}
Qt 6.3.0 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web-browsers. All of the PyQt packages are now available in a Qt6 version and QBittorrent. Plus the Kvantum theming has support for Qt6.

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight-year old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
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
