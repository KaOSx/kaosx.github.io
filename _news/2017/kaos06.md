---
layout: news
title: KaOS 2017.06
permalink: /news/2017/kaos06/
date: '2017-06-05 10:23:31 -0500'
date_gmt: '2017-06-05 10:23:31 -0500'
---
KaOS is pleased to announce the 2017.06 release.

{% include image.html
            img="img/2017/lockscreen.png"
            title="virtual keyboard in lock screen"
            caption="Virtual keyboard in lock screen"
            url="/img/2017/lockscreen.png" %}

Just days after **Qt 5.9.0 and Plasma 5.10.0** were announced, can you already see both on this new release. Highlights of [Plasma 5.10.0](https://www.kde.org/announcements/plasma-5.10.0.php) include Task Manager gaining options for middle mouse click such as grouping and ungrouping applications, media controls and virtual keyboard on lock screen, revamped password dialogs for network authentication, performance optimizations in Pager and Task Manager, the security of the lock screen architecture was reworked and simplified and file copying notifications have a context menu on previews

{% include image.html
            img="img/2017/babe.png"
            title="Babe Music Player"
            caption="Babe Music Player"
            url="/img/2017/babe.png" %}
            
Plasma developers are working on two new Music Players, now included in the KaOS repositories are both. **Babe** has become the default player on this ISO, **Elisa** is available as another option.  
Other recent additions include a GUI for git [QGit](http://libre.tibirna.org/projects/qgit/wiki/QGit){:target="_blank"} and [QDirStat](https://github.com/shundhammer/qdirstat/blob/master/README.md){:target="_blank"}, a graphical application to show where your disk space has gone.

For those who do not want to build packages they miss from the repositories the option to use **Flatpak** has been added to KaOS. Discover is added as the GUI for Flatpak.

A new option is the addition to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

{% include image.html
            img="img/2017/discover.png"
            title="Discover to handle Flatpaks"
            caption="Discover to handle Flatpaks"
            url="/img/2017/discover.png" %}

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.34.0, Plasma 5.10.0, [KDE Applications 17.04.1](https://www.kde.org/announcements/announce-applications-17.04.1.php){:target="_blank"} & **not yet released ports of KDE Applications**. All built on **Qt 5.9.0**.

Mesa includes experimental Nouveau patches so QtWebengine based applications and web browsers can again be used on systems running the Nouveau driver. This fixes a long standing bug going back to the middle of 2015.

## Base of the system
Most notable major updates to the base of the system are Qt 5.9.0, Boost 1.63.0, Glib2 2.52.2, Kmod 24, **Mesa 17.1.1**, x265 2.4, FFMpeg 3.3, DBus 1.10.18, Ruby 2.4.1, Protobuf 3.3.1, PyQt 5.8.2 and a move to qtwebkit-tp replacing no longer maintained qt5-webkit

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode built-in for a fully automated Early Microcode update. 

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through log out.

KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.1 series. Highlights of the changes and additions:

* Fixed Hibernate on LUKS enabled swap partitions
* Option to use a GPT partitiontable on BIOS system with needed documentation added
* When a VirtualBox system is detected, proper Guest Modules will be installed
* Fixed an issue in the partition module to always set the correct flags for an EFI system partition

## Known issues:
* Installing on RAID or LVM is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
