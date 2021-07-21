---
layout: news
title: KaOS 2021.06
permalink: /news/2021/kaos06/
date: '2021-06-29 01:23:31 -0500'
date_gmt: '2021-06-29 01:23:31 -0500'
---

{% include image.html
            img="img/2021/packagechooserq.png"
            title="All new Packagechooser QML Module"
            caption="All new Packagechooser QML Module"
            url="/img/2021/packagechooserq.png" %}
            
KaOS is pleased to announce the availability of the June release of a new stable ISO.

You will find [Plasma 5.22](https://kde.org/announcements/plasma/5/5.22.0/){:target="_blank"} on this ISO. Highlights of this latest major version include the big new feature Adaptive Transparency: This means the panel and panel widgets will usually be pleasantly translucent, but will become entirely opaque if there are any maximized window, a transition to Plasma System Monitor from the older KSysguard as the default system monitoring app and Plasma Wayland session now supports Activities: a classic feature unique to the Plasma desktop that allows you to have completely different environments for different aspects of your computing life, other KWin Wayland improvements include the Present Windows effect. New in Plasma 5.22, System Settings opens up on a speed dial page that gives you direct access to the most commonly used settings, as well as to the ones you have accessed most.

{% include image.html
            img="img/2021/systemsettings.png"
            title="Systemsettings layout for Plasma 5.22"
            caption="Systemsettings layout for Plasma 5.22"
            url="/img/2021/systemsettings.png" %}

The installer Calamares has two new QML modules.  KaOS has ported the **Packagechooser** to QML, resulting in a clearer and more consistent layout, and giving the option to fully translate this module in the normal Transifex location.  The offline Locale module is now also ready for QML. The regular Locale module uses an interactive map, needing a network connection, so it is good to have to offline QML option also fully working. 

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.83.0, Plasma 5.22.2, and KDE Applications 21.04.2.  All built on **Qt 5.15.2+**.

The default mirror used for all KaOS installs is provided by [Fosshost](https://fosshost.org/){:target="_blank"}. Big change with Fosshost is that with just one mirror users will have access to a worldwide network of mirrors through [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"}. No longer is there a need to adjust a mirrorlist, you will always be connected to the fastest mirror in your area.

{% include image.html
            img="img/2021/maliit_kcm.png"
            title="Virtualkeyboard KCM"
            caption="Virtualkeyboard KCM"
            url="/img/2021/maliit_kcm.png" %}

New applications added include Maliit virtualkeyboard packages. Also new is support for [JPEG XL](https://jpeg.org/jpegxl/){:target="_blank"}, a modern option (and probable future replacement) for JPEG. Integration in the system is provided by **qt-jpegxl-image-plugin**, this allows you to open & view .jxl files seamlessly in Gwenview.

Updates to the base of this distribution were numerous and include a new ICU 69.1 & Boost 1.76.0 stack, Systemd 248.3, Glib2 2.68.3 with the whole glib/gobject group updated, Grub 2.06, Git 2.32.0, Hwids 20210613, Protobuf 3.17, Dracut 055, Poppler 21.06.1, Mesa 21.1.3, NetworkManager 1.32.0, ZSTD 1.5.0, Kmod 29.  
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection). KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.3.

{% include image.html
            img="img/2021/offline_qml.png"
            title="Locale QML module in offline mode"
            caption="Locale QML module in offline mode"
            url="/img/2021/offline_qml.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

{% include image.html
            img="img/2021/systemmonitor.png"
            title="Plasma 5.21 Systemmonitor"
            caption="Plasma 5.21 Systemmonitor"
            url="/img/2021/systemmonitor.png" %}

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
