---
layout: news
title: KaOS 2018.12
permalink: /news/2018/kaos12/
date: '2018-12-28 05:23:31 -0500'
date_gmt: '2018-12-28 05:23:31 -0500'
---
KaOS is proud to announce the December release of a new stable ISO.

{% include image.html
            img="img/2018/sddm2.png"
            title="Midna SDDM"
            caption="Midna SDDM"
            url="img/2018/sddm2.png" %}

Two years after initially starting the move to **OpenSSL 1.1** has this update now been possible. All downstream libraries and applications have caught up, so the move was now smooth, without the need to have a mix of OpenSSL versions in the repositories. This move required a very large rebuild, combine that with a move to Perl 5.28.1, FFMPEG 4.1, LLVM/Clang 7.0.1 and Qt 5.12.0, it is clear a new ISO is needed.

The artwork saw an update to the Midna SDDM theme, gone are the QML sliding effects, instead a cleaner and simpler layout with the addition of several warnings when num lock or capslock are activated.

{% include image.html
            img="img/2018/package.png"
            title="GO-based Online Package Viewer"
            caption="GO-based Online Package Viewer"
            url="/img/2018/package.png" %}
            
The Online Package Viewer has undergone a complete rewrite, the backend is now a very modern **GO-based** API, with json files getting the needed output, thus all loads much faster. This include the mirror status page.     

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.53.0, Plasma 5.14.4 and [KDE Applications 18.12.0](https://www.kde.org/announcements/announce-applications-18.12.0.php){:target="_blank"}. All built on **Qt 5.12.0**.

KaOS' creation <strong>Croeso</strong> (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout. There was a complete redesign of the Midna theme for 2018. Some 2500 new icons in use, rewritten sddm login theme and a KaOS community selected new wallpaper (created by Jomada).

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

{% include image.html
            img="img/2018/croeso.png"
            title="First-run app Croeso"
            caption="First-run app Croeso"
            url="/img/2018/croeso.png" %}

## Base of the system
Most notable major updates to the base of the system are OpenSSL 1.1.1 , GCC 7.4.0, Linux 4.19.12, Perl 5.28.1, FFMPEG 4.1, GStreamer 1.14.4, ICU 62.1, Mesa 18.3.1, NetworkManager 1.14.4, Rust 1.31.1, Nano 3.2, Bison 3.2.3, Apache 2.4.37 and **Qt 5.12.0**.

KaOS repositories no longer provide Qt 4. It is a good four years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.2 series. Highlights of the changes and additions:

* For UEFI systems using the BTRFS filesystem Calamares now correctly adds the needed extra kernel line to the system-bootloader.
* The keyboard module now handles the (bogus) Austrian keymap for the system console properly.
* Various off-by-one-sector errors in the automatic partitioning mode have been corrected. In addition, swap space is calculated a little more conservatively.
* The search paths for QML files, branding descriptors, and module descriptors have been revamped and now self-document in the log.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
