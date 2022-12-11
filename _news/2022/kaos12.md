---
layout: news
title: KaOS 2022.12
permalink: /news/2022/kaos12/
date: '2022-12-10 01:23:31 -0500'
date_gmt: '2022-12-10 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/12.png"
            title="KaOS 2022"
            caption="KaOS 2022"
            url="/img/2022/cala/12.png" %}
            

KaOS is pleased to announce the availability of the December release of a new stable ISO.

With over 70% of the distribution rebuilt, a new ISO is more than due. Updates to the base of the system included a new GCC 12.2.0, Glibc 2.36 and Binutils 2.39 based toolchain, CLang/LLVM 15.0, ICU 72.1, Boost 1.80.0, kernel moved to Linux 6.0.12, Systemd 252.3, Libffi 3.4.4/Glib2 2.74.3 stack, Python 3.10.9, Texlive packages moved to 2022, Bash 5.2, Gawk 5.2, and Shadow 4.13.

The move to include ZFS exposed a shortcoming in the installer Calamares.  A generated hostid for ZFS during the installation [did not copy over to the installed system](https://forum.kaosx.us/d/2990-zfs-boot-issue-after-kernel-image-regeneration){:target="_blank"}, thus the installed system failed to match the hostid on system updates where a new initramfs was created. This is now corrected by adding a new `zfshostid` module to Calamares. This module was presented to upstream Calamares, but is not included yet in a release, at this point it is a KaOS-only option.  
It is now also possible to select the EurKEY layout in the keyboard page.
{% include image.html
            img="img/2022/kjournald.png"
            title="Kjournald, GUI for systemd logs"
            caption="Kjournald, GUI for systemd logs"
            url="/img/2022/kjournald.png" %}
To get good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is now part of the default install)

For the Plasma desktop, the latest Plasma (5.26.4), KDE Gear (22.12.0), and Frameworks (5.101.0) are included. All built on **Qt 5.15.7+**. Among the changes included in [KDE Gear 22.12](https://kde.org/announcements/plasma/5/5.26.4/){:target="_blank"} are, Dolphin added Selection Mode, you can now click or tap files and folders and quickly and easily select the ones you want to work with, Gwenview now also lets you adjust the brightness, contrast, and gamma of your pictures as you preview them, Kate/Kwrite added the Keyboard Macro tool, with it you can record a long sequence of key presses you need to type often and then hit Ctrl + Alt + K and Kate will type the sequence for you. and Kalendar, the new calendaring app from KDE, now uses pop-up windows for displaying events, making it easier and more convenient to view and manage your schedule.
{% include image.html
            img="img/2022/ghostwriter.png"
            title="Ghostwriter, markdown editor"
            caption="Ghostwriter, markdown editor"
            url="/img/2022/ghostwriter.png" %}
New applications added include **Ghostwriter**, a dedicated Markdown editor. A start is also made to get ready for Plasma 6. For the adventurous, the kde-next repository is used for a complete Qt6-based KDE stack, all Frameworks are built there on Qt6, most of Plasma and a few KDE Applications have also been ported to Qt6.  Plasma 6 does boot but is not usable yet (so, of course not part of this ISO).

Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.7.

{% include image.html
            img="img/2022/plasma6.png"
            title="Plasma 6 preview"
            caption="Plasma 6 preview"
            url="/img/2022/plasma6.png" %}
Qt 6.4.1 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web browsers. Latest applications that are now using Qt6 are Obs-studio & Avidemux. Plus the Kvantum theming has support for Qt6.

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight-year-old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).

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
