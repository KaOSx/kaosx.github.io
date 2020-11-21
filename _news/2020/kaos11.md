---
layout: news
title: KaOS 2020.11
permalink: /news/2020/kaos11/
date: '2020-11-21 01:23:31 -0500'
date_gmt: '2020-11-21 01:23:31 -0500'
---

{% include image.html
            img="img/2020/midna2020.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2020/midna2020.png" %}
            
It is with great pleasure to present to you the November release of a new stable ISO. 

Big change for this release is a new GCC 10.2.0, Glibc 2.32 & Binutils 2.35.1 Toolchain.  A big part of the distribution was rebuild on this new Toolchain, including an updated to 2.66 Glib2 stack.  Mesa moved to the 20.2 series and for the kernel, it was possible again to update (moved to 5.8.18), due to the creation of some custom AUFS patches.  The upstream AUFS maintainer has not resumed development yet....

{% include image.html
            img="img/2020/plasma5.20.png"
            title="Plasma5.20"
            caption="Plasma5.20"
            url="/img/2020/plasma5.20.png" %}
As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.76.0, Plasma 5.20.3, and KDE Applications 20.08.3. All built on Qt 5.15.1.
Changes for [Plasma 5.20](https://kde.org/announcements/plasma-5.20.0/){:target="_blank"} include new grouping behavior for the Task Manager, the Notifications will notify now when your system is about to run out of space on your disk even if your home directory is on a different partition and the System Settings has added the Highlight Changed Settings feature. New added to Plasma for KaOS is plasma-disk, it will give you a new option in kinfocenter to see the status of all your hard-drives/sdd.

For the installer Calamares, there is now an option to use a swap file instead of a swap partition (default is still swap partition). Work is still continuing on moving most modules to QML, latest is usersq, it is almost ready for use, but not included yet in this release.

{% include image.html
            img="img/2020/krita.jpg"
            title="Krita with SeExpr"
            caption="Krita with SeExpr"
            url="/img/2020/krita.jpg" %}
New applications added include Walt Disney Animation Studios SeExpr, an embeddable expression, used by Krita 4.4, Stellarsolver, an Astrometric Plate Solver used by Kstars, and Plasma-systemmonitor, a future, QML based replacement for Ksysguard.

Updates to the base of this distribution include Glib2 2.66.3, GMP 6.2.1, Cmake 3.19.0, Ruby 2.7.2, Git 2.29.2, Opencv 4.5.0, Poppler 20.11.0, Mesa 20.2.2, NetworkManager 1.26.4, Openvpn 2.5.0, Texlive packages for 2020, Linux 5.8.18 and Qt 5.15.2. 


The Midna theme used for KaOS has been redone for 2020, biggest change there is the move from QtCurve to **Kvantum** for the application style.  Implemented is a custom Midna Kvantum theme, following the same style as used in Croeso and the Welcome application. 
Ksplash is simplified with less moving images, SDDM theme has better contrast.  Complete new is **theming for the systemd-bootloader**, gone is the standard black background with white text, instead, you will see a well-integrated option with the rest of the Midna theme.  The grub bootloader was updated to follow a similar look as the systemd-bootloader.

{% include image.html
            img="img/2020/usersq.png"
            title="Preview of the new Users module"
            caption="Preview of the new Users module"
            url="/img/2020/usersq.png" %}

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
