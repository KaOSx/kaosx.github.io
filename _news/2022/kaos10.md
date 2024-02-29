---
layout: news
title: KaOS 2022.10
permalink: /news/2022/kaos10/
date: '2022-10-06 01:23:31 -0500'
date_gmt: '2022-10-06 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/9.png"
            title="KaOS Installer with a virtualkeyboard"
            caption="KaOS Installer with a virtualkeyboard"
            url="/img/2022/cala/9.png" %}
            

It is with great pleasure to present to you the October release of a new stable ISO.

Many changes have been implemented to the installer **Calamares** in the last few months, so it is fitting to start with listing all that is new or has changed.  
It is now possible to do a typical install entirely from a touchpad or mouse, a keyboard is no longer needed. **A virtual keyboard** has been implemented for those modules that need text input.  
For those who prefer PulseAudio over Pipewire, a module has been added (KaOS only), that gives users the option to select which sound server they prefer (with Pipewire set as default).  
**Dracut is the new default** for the initramfs image creation (mkinitcpio is no longer in use for new installs). To accommodate that change, the Dracut module in Calamares had to be adjusted, so it now supports version-less kernels.
{% include image.html
            img="img/2022/cala/7.png"
            title="KaOS Installer with new Audio Module"
            caption="KaOS Installer with new Audio Module"
            url="/img/2022/cala/7.png" %}
The slideshow presented during the install had a complete overhaul, no  longer in use are complete different images for each slide, now it has one static background and animated text sliding & fading in & out. Corresponding images for each text are now fading in as slides too. Less jarring transition as was before, so now it is no longer needed to mouse click to advance the slides, it loops automatically.  
There now also is an option to either view the slideshow with information about the distribution or watch what the installer Calamares is currently doing by selecting the Log View.  
The layout has also been adjusted, so it is now more intuitive to move through the steps and is more in line visually with the other KaOS application presented in Live mode and first boot into the new system. Gone is the use of a ComboBox in the different modules, Drawer is in use instead (for a more consistent behavior).

As mentioned above, KaOS has moved to Dracut as the **new initramfs infrastructure**. Unlike other implementations, Dracut hard-codes as little as possible into the initramfs. The initramfs has (basically) one purpose in life -- getting the rootfs mounted so that transitioning to the real rootfs can be done. Dracut is distribution agnostic and used by many (examples Fedora, VOID, OpenSuse, Gentoo), plus the code-base is very actively maintained.

With Dracut in place, the move to **include ZFS as a new filesystem option** could also be implemented. Using ZFS has been a goal for KaOS, ever since it started in 2013.  ZFS is not default at this stage since it cannot be used (yet) for BIOS installs.  For UEFI installs, **only the systemd-boot bootloader** is ready for ZFS. rEfind adaptation needs to be done still.

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
            title="Locale fine-tuning with a Drawer"
            caption="Locale fine-tuning with a Drawer"
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
            img="img/2022/cala/14.png"
            title="Partition page with new ZFS option"
            caption="Partition page with new ZFS option"
            url="/img/2022/cala/14.png" %}
            
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
            img="img/2022/cala/12.png"
            title="Install phase with new Slideshow"
            caption="Install phase with new Slideshow"
            url="/img/2022/cala/11.png" %}
            
{% include cala.html
            img="img/2022/cala/13.png"
            title="Installation finished, note the Debug button when hovered"
            caption="Installation finished, note the Debug button when hovered"
            url="/img/2022/cala/13.png" %}

For the Plasma desktop, the latest [Plasma (5.25.90)](https://kde.org/announcements/plasma/5/5.25.90/), KDE Gear (22.08.1), and Frameworks (5.78.0) are included. All built on **Qt 5.15.6+**. Among the changes included in Plasma 5.25.90 is improved Wayland support with the possibility to select if apps will be scaled by the compositor or by themselves to avoid having blurry apps on Wayland.

**kcp**, the tool to help to manage Community packages, received a small update to list broken depends.
This was needed to make it possible to do a full rewriting of [KCP-Center](https://kaos-community-packages.github.io) (the online Community packages viewer).  
The backend of KCP-Center to update the database, **whelp**, was obsolete since Python2 was removed from the KaOS repositories.
Plus it took too long to update the database. It has been simplified to directly use the kcp features to get the database and is now Python3-compatible.  
The frontend was rewritten too, removing jQuery depends and unmaintained jQuery Plugins, and using the [Mithril framework](https://mithril.js.org) to create dynamic pages.

Updates to the base of this distribution included Gawk 5.2.0, Bash 5.2, kernel moved to Linux 5.19.13, Systemd 251.5, DBus 1.14.4, Git 2.38.0, Mesa 22.1.7, Texlive packages moved to 2022, Openssh 9.1.P1, Libssh 0.10.4, and ZFS 2.1.6.

Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.7.

{% include image.html
            img="img/2022/obs.png"
            title="Obs-studio, ported to Qt6"
            caption="Obs-studio, ported to Qt6"
            url="/img/2022/obs.png" %}
Qt 6.4.0 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web browsers. Latest applications that are now using Qt6 are Obs-studio & Avidemux. Plus the Kvantum theming has support for Qt6.

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
