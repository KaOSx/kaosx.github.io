---
layout: news
title: KaOS 2017.11
permalink: /news/2017/kaos11/
date: '2017-11-14 12:23:31 -0500'
date_gmt: '2017-11-14 12:23:31 -0500'
---
KaOS is pleased to announce the 2017.11 release.

{% include image.html
            img="img/2017/elisa.png"
            title="Elisa music player"
            caption="Elisa music player"
            url="/img/2017/elisa.png" %}

Just days after [Plasma 5.11.3](https://www.kde.org/announcements/plasma-5.11.3.php){:target="_blank"}, KDE Applications 17.08.3 and Frameworks 5.40.0 where announced can you already see these on this new release. Highlights of Plasma 5.11.3 include making sure passwords are stored for all users when kwallet is disabled, sync xwayland DPI font to wayland dpi, notifications optionally stores missed and expired notifications in a history, the new Plasma Vault offers strong encryption features presented in a user-friendly way, Window title logic has been unified between X and Wayland windows, default X font DPI to 96 on wayland. All built on **Qt 5.9.2**.            

This release introduces Elisa as the default music player.  KaOS users have chosen this option during a recent  [poll](https://plus.google.com/u/0/115793168478540780255/posts/P3suFTfBCr7). It has been a few years, but the Juk music player is finally ported to kf5, thus available again in the KaOS repositories.

{% include image.html
            img="img/2017/juk.png"
            title="kf5 based Juk"
            caption="kf5 based Juk"
            url="/img/2017/juk.png" %}
            
There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

Mesa includes experimental Nouveau patches so QtWebengine based applications and web browsers can again be used on systems running the Nouveau driver. This fixes a long-standing bug going back to the middle of 2015.

## Base of the system
Most notable major updates to the base of the system are **Systemd 235, Linux 4.13.12**, Perl 5.26, Qt 5.9.2, Mesa 17.2.5, Poppler 0.61.1, DBus 1.12.2, Porotobuf 3.4.0, Texlive packages 2017, PHP 7.0.25 and OpenCV 3.3.1.

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

A new function was added to the Online Package Viewer, now you can check [the status of all mirrors too](http://kaosx.tk/packages/mirrors.php){:target="_blank"}

{% include image.html
            img="img/2017/mirror.png"
            title="Mirror Status"
            caption="Mirror Status"
            url="/img/2017/mirror.png" %}

The Linux kernel has all the needed ucode built-in for a fully automated Early Microcode update. 

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through log out.

KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to 3.1.7. Highlights of the changes and additions:

* The crashreporter module has been dropped.
* Encrypted swap is now correctly configured.
* Fixed were the installation-is-done notification could hang Calamares when the installation failed.
* Translations in the partitioning module have been improved.
* Licensing information about Calamares and included third-party code is now up-to-date and SPDX-encoded.

## Known issues:
* Installing on RAID or LVM is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
