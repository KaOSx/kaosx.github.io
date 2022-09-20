---
layout: news
title: KaOS 2022.08
permalink: /news/2022/kaos08/
date: '2022-08-16 01:23:31 -0500'
date_gmt: '2022-08-16 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/9.png"
            title="KaOS Installer with a virtualkeyboard"
            caption="KaOS Installer with a virtualkeyboard"
            url="/img/2022/cala/9.png" %}
            

KaOS is pleased to announce the availability of the August release of a new stable ISO.

This is a release where quite a few changes that have long been wanted finally can be implemented.
The longest wanted of those is the final removal of Python2 from KaOS.  The default install has been Python2 free for quite some time, but some major packages had still required it to build, now the last one of those, QtWebEngine, has been patched to build against Python3, so now KaOS is completely Python2 free.

{% include image.html
            img="img/2022/cala/7.png"
            title="KaOS Installer with new Audio Module"
            caption="KaOS Installer with new Audio Module"
            url="/img/2022/cala/7.png" %}

Second is the move to Pipewire (away from PulseAudio) as the default sound/low-level multimedia framework.  A switch had been planned for a while, but there were some issues on a Wayland session, so it had to wait.  Those are now all resolved, and you will see Pipewire as the default on this ISO.  
For those who still prefer PulseAudio, the installer Calamares now has a module added (KaOS only), that gives users the option to select which sound server they prefer (with Pipewire set as default).

Third is the removal of QtWebKit.  Upstream Qt abandoned it some ten years ago, but a fork picked up maintenance.  Unfortunately, that maintenance stopped a few years ago, so it is time to move away from QtWebKit.  All that still depended on it are now ready to move to QtWebEngine.  A couple could not do that move, thus they were removed from the repositories.

The addition of an Audio module isn't the only change to the installer **Calamares**, it is now also possible to do a typical install entirely from a touchpad or mouse, a keyboard is no longer needed. A **virtual keyboard** has been implemented for those modules that need text input.  
The layout has also been adjusted, so it is now more intuitive to move through the steps and is more in line visually with the other KaOS application presented in Live mode and first boot into the new system.  
To completely finish the new UI, one module still needs porting to QML, the partition module, unfortunately, the move of the module is not done yet (a start is made, but not in a usable state at this point).  
A presentation of the new UI of the installer:

{% include cala.html
            img="img/2022/cala/1.png"
            title="Updated navigation and progress bar"
            caption="Updated navigation and progress bar"
            url="/img/2022/cala/1.png" %}

{% include cala.html
            img="img/2022/cala/2.png"
            title="Combobox removed from all modules, use of Drawer instead"
            caption="Combobox removed from all modules, use of Drawer instead"
            url="/img/2022/cala/2.png" %}

{% include cala.html
            img="img/2022/cala/4.png"
            title="Locale fine tuning with a Drawer"
            caption="Locale fine tuning with a Drawer"
            url="/img/2022/cala/4.png" %}

{% include cala.html
            img="img/2022/cala/5.png"
            title="Keyboard page with interactive keyboard"
            caption="Keyboard page with interactive keyboard"
            url="/img/2022/cala/5.png" %}
            
{% include cala.html
            img="img/2022/cala/6.png"
            title="Stackview & Combobox removed, again, moved to using a Drawer"
            caption="Stackview & Combobox removed, again, moved to using a Drawer"
            url="/img/2022/cala/6.png" %}
            
{% include cala.html
            img="img/2022/cala/8.png"
            title="Option to select a Bootloader"
            caption="Option to select a Bootloader"
            url="/img/2022/cala/8.png" %}
            
{% include cala.html
            img="img/2022/cala/9.png"
            title="User page with keyboard activated (optional)"
            caption="User page with keyboard activated (optional)"
            url="/img/2022/cala/9.png" %}
            
{% include cala.html
            img="img/2022/cala/10.png"
            title="Summary page in QML"
            caption="Summary page in QML"
            url="/img/2022/cala/10.png" %}
            
{% include cala.html
            img="img/2022/cala/11.png"
            title="Install phase with Log view"
            caption="Install phase with Log view"
            url="/img/2022/cala/11.png" %}
            
{% include cala.html
            img="img/2022/cala/13.png"
            title="Installation finished, note the Debug button when hovered"
            caption="Installation finished, note the Debug button when hovered"
            url="/img/2022/cala/13.png" %}

For the KDE parts, the just-released [KDE Gear 22.08](https://kde.org/announcements/gear/22.08/){:target="_blank"} is on this ISO.  Highlights of 22.08 include Spectacle, KDE's popular screen-capturing app, allows you to push your screencaps directly to social media, online image hosting services, instant messaging apps, and much more. Itinerary is KDE's travel assistant that helps you plan your trip, added an integrated barcode scanner that allows you to import paper tickets into the app, as well as support for flat rate tickets or discount program cards.  Both Kate and KWrite have recently incorporated a nifty new feature that allows you to place several cursors throughout a document and add text or code in various places simultaneously. Dolphin now lets you sort files also by file extension if you prefer that.  Elisa (KDE's elegant and compact music player), has improved its accessibility features in this version by making the playlist sidebar once again keyboard-navigable.  
For the rest of KDE, the latest Frameworks (5.97.0) and Plasma (5.25.4) are included. All built on **Qt 5.15.5+**.

Updates to the base of this distribution included ICU 71.1, Boost 1.79.0, kernel moved to Linux 5.18.17, Systemd 251.4,  KMod 30, Mesa 22.1.6, Vulkan packages 1.3.224, Libnl 3.7.0, Hdparm 9.64, and Upower 1.90.0.

Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.6.

For Nvidia, a new long-term support version is added to this ISO, 470xx. The move by Nvidia to 495 meant the end of support for Kepler-based cards, thus the need to add a new legacy version.

{% include image.html
            img="img/2022/qpwgraph.png"
            title="Qpwgraph, a GUI for Pipewire"
            caption="Qpwgraph, a GUI for Pipewire"
            url="/img/2022/qpwgraph.png" %}
Qt 6.3.1 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web browsers. Latest applications that are now using Qt6 are MKVToolNix & Avidemux. Plus the Kvantum theming has support for Qt6.

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight-year-old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

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
