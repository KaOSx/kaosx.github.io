---
layout: news
title: KaOS 2021.08
permalink: /news/2021/kaos08/
date: '2021-08-18 01:23:31 -0500'
date_gmt: '2021-08-18 01:23:31 -0500'
---

{% include image.html
            img="img/2021/midna2021.png"
            title="KaOS Midna 2021"
            caption="KaOS Midna 2021"
            url="/img/2021/midna2021.png" %}
            
It is with great pleasure to present to you the August release of a new stable ISO.

Biggest news for this release are major changes in the aesthetics. The Midna theme has been redone, 
this includes a uniform look for SDDM and lockscreen with a (darker) transparent sidebar, cleaner splash-screen, and darker logout look. The application menu has moved from the long-used cascading menu option to the all-new **Application Launcher** introduced with Plasma 5.22.  
About eighteen months ago, KaOS set out to overhaul all the Calamares view modules into QML, this has now been just about completed (just one left, the partitioning module). This release adds another two new QML converted modules, the **Users and Summary** pages.  It took a while, but now some other distributions are starting to use the KaOS converted modules too. The QML move gives Calamares a much more modern and uniform look with the other KaOS QML applications.

{% include image.html
            img="img/2021/sddm.png"
            title="Midna Login screen 2021"
            caption="Midna Login screen 2021"
            url="/img/2021/sddm.png" %}

Of course, it is not just aesthetics for this release, the updates to packages are numerous, some 70 %
are new.  
You will find [KDE Applications 21.08](https://kde.org/announcements/gear/21.08.0/){:target="_blank"} on this ISO. Highlights of this new major version include animated sequence of previews in Dolphin if a folder contains a lot of previewable files. Easier to rename several files in Dolphin with `F2` and `TAB`. Konsole has color and image previews added, just typing a color will show it on hovering and it has an SSH plugin added to work with machines you regularly connect to. In Kdenlive, changing the speed of a clip is now a keyframeable effect.  
{% include image.html
            img="img/2021/summary.png"
            title="Calamares Summary page in QML"
            caption="Calamares Summary page in QML"
            url="/img/2021/summary.png" %}
For the Plasma desktop, the latest Plasma (5.22.4) and Frameworks (5.85.0) are included.  All built on **Qt 5.15.2+**.  
Updates to the base of this distribution include Systemd 249.3, Curl 7.78.0, IWD 1.16, NetworkManager 1.32.8, Mesa 21.1.7, Poppler 21.08.0, Vulkan packages 1.2.187, Udisks 2.9.3, MLT 7.0.1, and Openexr 3.1.1.  
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection). KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.3.

The installer Calamares has the ability added to **carry over the network settings** from the Live system, so no longer a need to enter the Wifi password again on booting into the newly installed system. There now also is an option to select the preferred filesystem when using the automated partitioning.
{% include image.html
            img="img/2021/users.png"
            title="Calamares Users page in QML"
            caption="Calamares Users page in QML"
            url="/img/2021/users.png" %}
New applications added include speedtest-cli, mauikit-accounts, and bibletime. Biggest change here is the addition of Plasma Mobile Apps, which are very suitable for desktop use. They include Angelfish (web-browser), Kasts (pocasts), Kalk (calculator), and Koko (image viewer).

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight year old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).


{% include image.html
            img="img/2021/bibletime.png"
            title="Newly added Bibletime"
            caption="Newly added Bibletime"
            url="/img/2021/bibletime.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
{% include image.html
            img="img/2021/splash.png"
            title="Midna Splash screen 2021"
            caption="Midna Splash screen 2021"
            url="/img/2021/splash.png" %}
Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

{% include image.html
            img="img/2021/lock_screen.png"
            title="Midna Lock screen 2021"
            caption="Midna Lock screen 2021"
            url="/img/2021/lock_screen.png" %}

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
