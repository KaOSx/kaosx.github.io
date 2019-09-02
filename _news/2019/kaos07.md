---
layout: news
title: KaOS 2019.07
permalink: /news/2019/kaos07/
date: '2019-07-01 01:23:31 -0500'
date_gmt: '2019-07-01 01:23:31 -0500'
---
KaOS is proud to announce the availability of the July release of a new stable ISO.

{% include image.html
            img="img/2019/plasma_5.16.png"
            title="Plasma 5.16"
            caption="Plasma 5.16"
            url="img/2019/Plasma 5.16.png" %}

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.59.0, Plasma 5.16.2 and KDE Applications 19.04.2. All built on Qt 5.13.0.

Just days after [Plasma 5.16.2 was announced](https://kde.org/announcements/plasma-5.16.2.php){:target="_blank"} can you already see it on this new release. **Highlights of Plasma 5.16** include a completely rewritten notification system that comes with a Do Not Disturb mode, a more intelligent history which groups notifications together, and critical notifications in fullscreen apps. The Task Manager has better-organized context menus, and you can configure it to move a window from a different virtual desktop to the current one with a middle click. Wayland now features drag-and-drop between XWayland and Wayland native windows. Plasma 5.16 protects your privacy, too. When any app is recording audio, a microphone icon will appear in the System Tray warning you of the fact. You can then raise or lower the volume using the wheel on your mouse, or mute and unmute the mic with a middle click.
            
The installer **Calamares** has undergone extensive changes. Among those, to avoid any legal issues, it is no longer needed to click on the NVidia license for use in non-free install mode, the License page was changed to display the needed licenses directly. The Welcome module can now do GeoIP lookups, which can help with language selections. The Partition module has additional checks for validity partition layouts.

{% include image.html
            img="img/2019/license.png"
            title="License Page Calamares"
            caption="License Page Calamares"
            url="/img/2019/license.png" %}
            
With **LibreOffice 6.2.0**, it is now possible to supply this as a pure Qt5/kf5 application. LibreOffice has thus replaced Calligra as the default Office Application for KaOS.
            
KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.

{% include image.html
            img="img/2019/midna2019.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2019/midna2019.png" %}
            
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.



## Base of the system
Most notable major updates to the base of the system are ICU 64.2, 1.69.0 , Glib2 2.60.4, Linux 5.1.15, Krb5 1.17, Iptables 1.8.3, Xorg-server 1.20.5, Proj 6.0.0, NetworkManager 1.18.1, Poppler 0.78.0, Nano 4.3, GStreamer 1.16.0, and **Qt 5.13.0**

KaOS repositories no longer provide Qt 4. It is a good four years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.2.9 series. Highlights of the changes and additions:

* libcalamares: The utils/ subdirectory has been hugely refactored, with functionality split out into separate files. C++ modules will need to have their #include names updated.
* All user-visible texts referring to “MB” and “GB” now use the standard “MiB” and “GiB” wording, which matches what we were actually calculating with (i.e. 2^20 and 2^30 respectively).
* Welcome module can now do GeoIP lookups as well. This will let Calamares select a starting language that matches where it is – which might not be useful at all.
* License module can now display local files inline, and scrolls to allow longer lists of licenses and to support long license texts displayed inline.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
