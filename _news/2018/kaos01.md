---
layout: news
title: KaOS 2018.01
permalink: /news/2018/kaos01/
date: '2018-01-20 05:23:31 -0500'
date_gmt: '2018-01-20 05:23:31 -0500'
---
It is with great pleasure to present to you a first KaOS ISO for 2018.

{% include image.html
            img="img/2018/kget.png"
            title="KGet Download Manager"
            caption="KGet Download Manager"
            url="/img/2018/kget.png" %}

The policy is, once a first pacman -Syu becomes a major update, it is time for a new ISO so new users are not faced with a difficult first update. With the exceptional large amounts of updates the last six weeks most systems will see 70-80% of their install replaced by new packages so a new ISO is more than due.

All currently available patches and fixes for the [Spectre and Meltdown](https://meltdownattack.com/) vulnerabilities in modern processors are included. The Linux 4.14.14 kernel is built with [Retpoline enabled](https://security.googleblog.com/2018/01/more-details-about-mitigations-for-cpu_4.html), latest AMD & Intel ucodes are also built into this kernel.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.42.0, Plasma 5.11.5, [KDE Applications 17.12.1](https://www.kde.org/announcements/announce-applications-17.12.1.php){:target="_blank"}. All built on **Qt 5.10.0**.

It has been a few years, but KGet is finally ported to kf5, thus available again in the KaOS repositories. It replaces the now obsolete Fatrat as the default Download Manager for KaOS.

Besides running Plasma on KaOS, a new option is added, Liquidshell.  This is a lightweight environment currently in development, but already added so its progress can be followed.  For instruction how to use, see [this forum post](https://forum.kaosx.us/d/2066-liquidshell-added)

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.


{% include image.html
            img="img/2018/liquidshell.png"
            title="Liquidshell"
            caption="Liquidshell"
            url="/img/2018/liquidshell.png" %}

Mesa includes experimental Nouveau patches so QtWebengine based applications and web-browsers can again be used on systems running the Nouveau driver. This fixes a long standing-bug going back to the middle of 2015.

## Base of the system
Most notable major updates to the base of the system are Systemd 236, Linux 4.14.14, LLVM/Clang 5.0.1, Qt 5.10.0, Mesa 17.3.3, Boost 1.66.0, ICU 60.2, Protobuf 3.5.1, Glib2 2.54.3, Libcdio 2.0.0, OpenCV 3.4.0 and Ruby 2.5.0.

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
* Some poorly-configured systems cannot reliably set the hardware clock (RTC). Previously this was an error which would abort the entire installation. Calamares now ignores the error.
* Use more support code from KPMCore, instead of doing it ourselves.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
