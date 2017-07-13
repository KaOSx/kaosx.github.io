---
layout: news
title: KaOS 2017.07
permalink: /news/2017/kaos07/
date: '2017-07-13 10:23:31 -0500'
date_gmt: '2017-07-13 10:23:31 -0500'
---
It is with great pleasure to present to you the July release of a new stable ISO.

{% include image.html
            img="img/2017/welcome.png"
            title="QML based Welcome application"
            caption="QML based Welcome application"
            url="/img/2017/welcome.png" %}

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.36.0, Plasma 5.10.3, [KDE Applications 17.04.3](https://www.kde.org/announcements/announce-applications-17.04.3.php){:target="_blank"} & **not yet released ports of KDE Applications**. All built on **Qt 5.9.1**.

Systems installed by **Calamares up to and including Calamares 3.1 have a weaker password salt** than they should. This weakness does not weaken the password security for logins on a single system. It does weaken the password if an attacker can obtain the password hash through some other means. With [Calamares 3.1.1](https://calamares.io/calamares-cve/){:target="_blank"} this issue is corrected thus it is vital to get this new ISO out.

{% include image.html
            img="img/2017/kaptan.png"
            title="First Run Wizard"
            caption="First Run Wizard"
            url="/img/2017/kaptan.png" %}
            
Two KaOS specific tools have been updated. The **Welcome application received a complete rewrite in QML**, the used first run wizard was adjusted for Qt/PyQt 5.9 and received a more modern GUI.  
Dolphin has its default look adjusted so more of it's powerful options are directly visible.

A few more QML based applications have been added to the KaOS repositories. **Koko**, new Image Gallery application and **Kube**, a modern Communication and Collaboration Client that might some day replace KMail in KaOS.

A new option is the addition to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

{% include image.html
            img="img/2017/kube.png"
            title="Kube communication & collaboration client"
            caption="Kube communication & collaboration client"
            url="/img/2017/kube.png" %}

Mesa includes experimental Nouveau patches so QtWebengine based applications and web browsers can again be used on systems running the Nouveau driver. This fixes a long standing bug going back to the middle of 2015.

## Base of the system
Most notable major updates to the base of the system are **GCC 6.4.0, Binutils 2.28, Linux 4.11.9, LLVM/Clang 4.0.1, Qt 5.9.1**, Kmod 24, Mesa 17.1.4, Glib2 2.52.3, DBus 1.10.20, Porotobuf 3.3.2 and PyQt 5.9

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

{% include image.html
            img="img/2017/koko.png"
            title="QML based Image Gallery application, Koko"
            caption="QML based Image Gallery application, Koko"
            url="/img/2017/koko.png" %}

The Linux kernel has all the needed ucode built-in for a fully automated Early Microcode update. 

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through log out.

KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.1.1 series. Highlights of the changes and additions:

* Improved salting for user passwords
* Crash on startup when no installation-devices are found has been fixed
* System language, locale settings, and keyboard are now guessed based on installer language and location
* Hostnames may be up to 63 characters in length, conforming to RFC1123 and various LDAP schemas

## Known issues:
* Installing on RAID or LVM is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
