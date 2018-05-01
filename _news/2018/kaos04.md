---
layout: news
title: KaOS 2018.04
permalink: /news/2018/kaos04/
date: '2018-03-06 05:23:31 -0500'
date_gmt: '2018-03-06 05:23:31 -0500'
---
To celebrate the first lustrum of KaOS a new ISO is released.

{% include image.html
            img="img/2018/midna.png"
            title="Midna 2018"
            caption="Midna 2018"
            url="/img/2018/midna.png" %}

It is five years ago this month that KaOS started, a nice way to commemorate is with releasing 2018.04. This ISO has a complete redesign of the Midna theme for 2018. Some 2500 new icons in use, rewritten sddm login theme and a KaOS community selected new wallpaper (created by **Jomada**).

Also new is KaOS' creation Croeso (Welsh for welcome) for helping with configuring a new install. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

{% include image.html
            img="img/2018/croeso.png"
            title="All new first-run app Croeso"
            caption="All new first-run app Croeso"
            url="/img/2018/croeso.png" %}

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.45.0, [Plasma 5.12.4](https://www.kde.org/announcements/plasma-5.12.4.php){:target="_blank"}, KDE Applications 18.04.0. All built on **Qt 5.10.1**.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

Mesa includes experimental Nouveau patches so QtWebengine based applications and web-browsers can again be used on systems running the Nouveau driver. This fixes a long standing-bug going back to the middle of 2015.

{% include image.html
            img="img/2018/sddm.png"
            title="SDDM 2018"
            caption="SDDM 2018"
            url="/img/2018/sddm.png" %}

## Base of the system
Most notable major updates to the base of the system are Systemd 238, Wayland 1.15.0, GStreamer 1.14.0, Cfitsio 3.44.0, Openmpi 3.0.1, Mesa 17.3.9, NetworkManager 1.10.6, Rust 1.25.0, Protobuf 3.5.2, Intel-ucode 20180312, OpenJDK 8u161, OpenCV 3.4.1 and Ruby 2.5.1

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

{% include image.html
            img="img/2018/croeso_wall.png"
            title="Croeso's wallpaper module"
            caption="Croeso's wallpaper module"
            url="/img/2018/croeso_wall.png" %}

## Common Notes
KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.2 series. Highlights of the changes and additions:

* The branding module has also seen an overhaul and the slideshow framework has been extended with some new classes which can be used.
* The GeoIP service provided by FreeGeoIP.net is closing down and a different API is being offered, including a free (gratis) service tier. KaOS has moved to using ipapi.co
* Translations have been expanded, with many strings not-previously localized now available for translation (this mostly applies to error messages which we hope you don’t encounter).
* The debugging framework has seen an overhaul so that debugging information can be more easily understood.
* Python jobs can now issue warnings through the API.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
