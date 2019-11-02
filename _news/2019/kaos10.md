---
layout: news
title: KaOS 2019.10
permalink: /news/2019/kaos10/
date: '2019-10-31 01:23:31 -0500'
date_gmt: '2019-10-31 01:23:31 -0500'
---
It is with great pleasure to present to you the October release of a new stable ISO.

{% include image.html
            img="img/2019/midna2019.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2019/midna2019.png" %}

Quite a few big changes for this release, probably the biggest news for this release is for the first time the default install is **python2 free**. Python2 will be depreciated by the end of this year, so it is time to get this distribution ready for this change.  The repositories still contain python2 packages, but those are in the process of being phased out too.

Next change is a new **GCC 9.2.0/Glibc 2.30 based Toolchain**.  Normally KaOS stays about one year behind major new GCC versions, but the changes between 8 and 9 are not as big as usual and all in the repositories have caught up to GCC 9, thus it is now available six months after the initial release.  
A big part of the core repository was rebuild in this new Toolchain, plus the whole Glib2 and Boost stacks were updated.  This meant moving to Glib2 2.62.2, Boost 1.71.0, Gobject-Introspection 1.6.20 among the many moved to their latest version.  Systemd is now also available in the most recent release, 243.  
Libarchive gained ZSTD support, a needed feature for upcoming Pacman changes.

{% include image.html
            img="img/2019/plasma_5.17.png"
            title="Plasma 5.17"
            caption="Plasma 5.17"
            url="/img/2019/plasma_5.17.png" %} 
            
You will find [Plasma 5.17](https://kde.org/announcements/plasma-5.17.0.php){:target="_blank"} on this ISO already. Highlights of Plasma 5.17 include start-up scripts have been converted from Bash (a slow, interpreted language) to C++ (a fast, compiled language) and now run asynchronously. Night Color, the color-grading system that relaxes your eyes when the sun sets, has landed for X11. For Wayland, Plasma now comes with fractional scaling, which means that you can adjust the size of all your desktop elements, windows, fonts, and panels perfectly to your HiDPI monitor. The Settings interface itself has been overhauled in general, and the user interfaces for the Displays, Energy, Activities, Boot Splash, Desktop Effects, Screen Locking, Screen Edges, Touch Screen, and Window Behavior configuration dialogs have all been improved and updated. 
Frameworks is at 5.63.0, Plasma at 5.17.2 and KDE Applications at 19.08.2. All built on Qt 5.13.1.

Non-free Nvidia gained a complete new feature, no longer needing Bumblebee for hybrid systems, instead, it now can also use [PRIME](http://download.nvidia.com/XFree86/Linux-x86_64/435.21/README/primerenderoffload.html){:target="_blank"}, just like (free) Nouveau & AmdGPU hybrid systems.  For this Nvidia-utils 435 has GLVND support fully enabled but Xorg-Server will need to include 3 needed commits to include Nvidia PRIME, scheduled to be included in Xorg-Server 1.20.6.

Most notable major updates to the base of the system are GCC 9.2.0, Glibc 2.30, Systemd 243, Bison 3.4.2, Python3 3.7.5, Linux 5.3.8, Protobuf 3.9.2, Mesa 19.2.2, NetworkManager 1.20.4, FFMPEG 4.2.1, Nano 4.5 and GStreamer 1.16.1.

{% include image.html
            img="img/2019/cala_09.png"
            title="System Installer"
            caption="System Installer"
            url="/img/2019/cala_09.png" %}

## Calamares
For the installer Calamares, two major CVE's were addressed among the many changes for 3.2.14. [CVE-2019-13178](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13178) and [CVE-2019-13179](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13179)
Highlights of the changes and additions:

* *initramfs*: could create an initramfs with insecure permissions. Since the keyfile is included in the initramfs, an attacker could read the file from the initramfs (CVE-2019-13178 and CVE-2019-13179).
* The partition module now understands the units KB, MB, GB which are powers-of-ten sizes, alongside the powers-of-two sizes that it already used.
* The welcome module now supports a Donate button if showDonateUrl is set to a non-empty URL.
* *fstab*: A new configuration key efiMountOptions has been added, to allow setting filesystem options specifically for the EFI partition.

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

KaOS repositories no longer provide Qt 4. It is a good four years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.
            
KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Some Intel CPU systems might have an issue kernel’s entropy pool and have a long boot delay, if encountered add **random.trust_cpu=1** to the kernel boot line.
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
