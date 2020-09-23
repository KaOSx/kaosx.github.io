---
layout: news
title: KaOS 2020.09
permalink: /news/2020/kaos09/
date: '2020-09-23 01:23:31 -0500'
date_gmt: '2020-09-23 01:23:31 -0500'
---

{% include image.html
            img="img/2020/midna2020.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2020/midna2020.png" %}
            
KaOS is pleased to announce the availability of the September release of a new stable ISO. 

With almost 60 % percent of the packages updated since the last ISO and the last release being over two months old, a new ISO is more than due. News for [KDE Applications 20.08](https://kde.org/announcements/releases/2020-08-apps-update/){:target="_blank"} included Dolphin adding thumbnails for 3D Manufacturing Format (3MF) files, you can also see previews of files and folders on encrypted file systems such as Plasma Vaults now remembers and restores the location you were viewing, as well as the open tabs, and split views you had open when you last closed it.Yakuake now lets you configure all the keyboard shortcuts that come from Konsole and there is a new system tray item that shows you when Yakuake is running. Elisa now lets you display all genres, artists, or albums in the sidebar, below other items.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.74.0, Plasma 5.19.5 and KDE Applications 20.08.1. All built on Qt 5.15.1.

{% include image.html
            img="img/2020/localeq.png"
            title="Preview of new Locale module"
            caption="New Locale module for installer"
            url="/img/2020/localeq.png" %}
For the installer Calamares, KaOS continues to **move modules to QML**. This release now features a complete rewrite Locale module with a real live, accurate map. This module is developed by and for KaOS, but has been accepted upstream. Using a real world map brings far greater accuracy of the location selections.  Coordinates are shown on hover, and translated to locale on click. The new keyboard QML module introduced in the last ISO is improved with better visibility.

New applications added include Kdiff3 and the Keysmith (for Two-factor authentication).
{% include image.html
            img="img/2020/dolphin.webp"
            title="Dolphin 20.08"
            caption="Dolphin 20.08"
            url="/img/2020/dolphin.webp" %}
            
Updates to the base of this distribution include Python3 3.8.5, ICU 67.1, Boost 1.73.0, Systemd 246, Git 2.28.0, LLVM/Clang 10 (10.0.1), Opencv 4.4.0, Gstreamer 1.18.0, Poppler 20.9.0, Mesa 20.1.8, NetworkManager 1.26.2, Perl 5.30.3, Xorg-server 1.20.9, Linux 5.7.19 and Qt 5.15.1. 


The Midna theme used for KaOS has been redone for 2020, biggest change there is the move from QtCurve to **Kvantum** for the application style.  Implemented is a custom Midna Kvantum theme, following the same style as used in Croeso and the Welcome application. 
Ksplash is simplified with less moving images, SDDM theme has better contrast.  Complete new is **theming for the systemd-bootloader**, gone is the standard black background with white text, instead, you will see a well-integrated option with the rest of the Midna theme.  The grub bootloader was updated to follow a similar look as the systemd-bootloader.

{% include image.html
            img="img/2020/keyboard.png"
            title="Calamares Keyboard QML Module"
            caption="Calamares Keyboard QML Module"
            url="/img/2020/keyboard.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

{% include image.html
            img="img/2020/croeso_packages.png"
            title="Package Group Selection"
            caption="Croeso Package Group Selection"
            url="/img/2020/croeso_packages.png" %}

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
