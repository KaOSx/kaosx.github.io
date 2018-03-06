---
layout: news
title: KaOS 2018.03
permalink: /news/2018/kaos03/
date: '2018-03-06 05:23:31 -0500'
date_gmt: '2018-03-06 05:23:31 -0500'
---
KaOS is proud to announce the availability of the March release of a new stable ISO.

{% include image.html
            img="img/2018/falkon.png"
            title="Falkon, default web browser"
            caption="Falkon web browser"
            url="/img/2018/falkon.png" %}

A GCC 7.3.0, Glibc 2.26 & Binutils 2.30 based new toolchain has moved to all users. This new toolchain required a rather large rebuild of many packages. Since this also includes new Systemd, Filesystem & Mkinitcpio. it is fair to say the whole base of your system will be replaced. Upstream has combined all the tiny, fully mature proto packages into one, `Xorgproto` package, which for KaOS users means replacing some twenty five proto packages with Xorgproto. There was also a move to Qt 5.10.1 and Plasma 5.12, thus it will be clear a new ISO is due.

[Falkon](http://davidrosca.blogspot.nl/2018/02/falkon-300-released.html){:target="_blank"} has replaced Qupzilla as the default web browser. Falkon is a continuation of Qupzilla, now developed on KDE development infrastructure.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.43.0, [Plasma 5.12.2](https://www.kde.org/announcements/plasma-5.12.2.php){:target="_blank"}, KDE Applications 17.12.2. All built on **Qt 5.10.1**.

New features with Plasma 5.12:

{% include image.html
            img="img/2018/window-shadows.png"
            title="Larger, horizontally-centered window shadows"
            caption="Larger, horizontally-centered window shadows"
            url="/img/2018/window-shadows.png" %}

* Night Color feature to reduce evening blue light expose
* Usability improvement for the global menu: adding a global menu panel or window decoration button enables it without needing an extra configuration step
* Accessibility fixes in KRunner: it can now be completely used with on-screen readers such as Orca
* Icon applet now uses website favicon
* Notification text selectable again including copy link feature
* Slim Kickoff application menu layout
* The weather applet can now optionally show temperature next to the weather status icon on the panel
* System Activity and System Monitor now show per-process graphs for the CPU usage
* Clock widget's text is now sized more appropriately
* Windows shadows are now horizontally centered, and larger by default
* Properties dialog now shows file metadata

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

Mesa includes experimental Nouveau patches so QtWebengine based applications and web-browsers can again be used on systems running the Nouveau driver. This fixes a long standing-bug going back to the middle of 2015.

## Base of the system
Most notable major updates to the base of the system are Systemd 237, Linux 4.15.7, GCC 7.3.2, Glibc 2.26, Binutils 2.30, Qt 5.10.1, Mesa 17.3.6, DBus 1.12.6, MPFR 4.0.1, Xorgproto 2018.4, Rust 1.24.1, Meson 0.45.0 and Libva 2.1.0.

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.2 series. Highlights of the changes and additions:

{% include image.html
            img="img/2018/cala_lvm.png"
            title="Calamares with experimental LVM"
            caption="Calamares with experimental LVM"
            url="/img/2018/cala_lvm.png" %}

* KPMCore 3.3 is now required. This adds support for LVM partitioning, thanks to the work of Andrius Štikonas.
* Better error reporting from Python modules.
* Python job-modules could not use pretty_name() for reporting the module status when the job was started.
* Improved guessing of keyboard layouts based on the system language. For example, Catalan and Hausa now select appropriate default keyboard mappings instead of their national defaults (Spanish and English, respectively).
* Use more support code from KPMCore, instead of doing it ourselves.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
