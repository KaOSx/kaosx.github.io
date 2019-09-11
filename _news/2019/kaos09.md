---
layout: news
title: KaOS 2019.09
permalink: /news/2019/kaos09/
date: '2019-09-11 01:23:31 -0500'
date_gmt: '2019-07-11 01:23:31 -0500'
---
KaOS is pleased to announce the availability of the September release of a new stable ISO.

{% include image.html
            img="img/2019/cala_09.png"
            title="System Installer"
            caption="System Installer"
            url="img/2019/cala_09.png" %}

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.61.0, Plasma 5.16.5 and KDE Applications 19.08.1. All built on Qt 5.13.1.

With almost 60 % percent of the packages updated since the last ISO and the last release being over two months old, a new ISO is more than due. News for [KDE Applications 19.08](https://kde.org/announcements/announce-applications-19.08.0.php) included Dolphin's information panel has been improved in several ways. You can, for example, choose to auto-play media files when you highlight them in the main panel, and you can now select and copy the text displayed in the panel, Okular's support for EPub documents has also received a push in this version, Konsole had a boost to the tiling feature and Spectacle comes with several new features that regulate its Delay functionality.

{% include image.html
            img="img/2019/kde_apps.png"
            title="KDE Applications 19.08"
            caption="KDE Applications 19.08"
            url="/img/2019/kde_apps.png" %}

For the installer Calamares, two major CVE's were addressed among the many changes for 3.2.13. [CVE-2019-13178](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13178) and [CVE-2019-13179](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13179)
            
Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.
            
KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

{% include image.html
            img="img/2019/croeso.png"
            title="Croeso"
            caption="First run Wizard"
            url="/img/2019/croeso.png" %}
            
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.



## Base of the system
Most notable major updates to the base of the system are Go 1.13, Libevent 2.1.11, Python3 3.7.4, Linux 5.2.13, Kbd 2.2.0, Git 2.23.0, added Ldns for an extra Openssh option, Nettle 3.5.1, NetworkManager 1.20.0, Poppler 0.80.0, Nano 4.4, GStreamer 1.16.0, and **Qt 5.13.1**

KaOS repositories no longer provide Qt 4. It is a good four years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.2.13 series. Highlights of the changes and additions:

* *initramfs*: could create an initramfs with insecure permissions. Since the keyfile is included in the initramfs, an attacker could read the file from the initramfs (CVE-2019-13178 and CVE-2019-13179).
* The partition module now understands the units KB, MB, GB which are powers-of-ten sizes, alongside the powers-of-two sizes that it already used.
* The welcome module now supports a Donate button if showDonateUrl is set to a non-empty URL.
* *fstab*: A new configuration key efiMountOptions has been added, to allow setting filesystem options specifically for the EFI partition.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
