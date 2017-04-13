---
layout: news
title: KaOS 2017.04
permalink: /news/2017/kaos04/
date: '2017-04-11 12:23:31 -0500'
date_gmt: '2017-04-11 12:23:31 -0500'
---
A nice way of celebrating the fourth anniversary of this distribution is releasing KaOS 2017.04 in two flavors. This time a **Plasma Wayland** version is added **alongside** the regular X-based ISO.

{% include image.html
            img="img/2017/sddm_04.png"
            title="SDDM session selection"
            caption="SDDM session selection"
            url="/img/2017/sddm_04" %}

The Plasma Wayland version is a smaller ISO, ships with a more limited amount of applications than the regular Plasma version. At this stage, a Wayland session can only be run on free graphics drivers and the live mode (plus install) will automatically switch to a regular X-based Plasma session should the user select non-free drivers during boot-up of the Live session. A Wayland session will not run in VirtualBox.

Speaking of VirtualBox, this release is a first for KaOS to include all the needed modules to automatically scale to your desired monitor resolution (or set to full screen).

{% include image.html
            img="img/2017/vbox.png"
            title="Improved install options"
            caption="Improved Live mode and install options"
            url="/img/2017/vbox.png" %}
            
Fully working now is the option to install with **GPT on BIOS systems** and manual partitioning. A text box is added to Calamares to instruct how to set up for GPT once a BIOS setup is detected.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.33.0, Plasma 5.9.4, [KDE Applications 17.04RC](https://www.kde.org/announcements/announce-applications-17.04-rc.php){:target="_blank"} & **not yet released ports of KDE Applications**. All built on **Qt 5.8.0**.

Mesa includes experimental Nouveau patches so QtWebengine based applications and web browsers can again be used on systems running the Nouveau driver. This fixes a long standing bug going back to the middle of 2015.

[![](/img/2017/kopete.png){: .news-img-right}](/img/2017/kopete.png)

Some of the latest Qt 5/kf5 ported applications that moved into the KaOS repositories include Kopete, Basket, ClipGrab and kdesdk-kioslaves.

## Base of the system
Most notable major updates to the base of the system are Qt 5.8.0, **Python 3.6.1**, Systemd 233, Kmod 24, Mesa 17.0.3, Perl 5.24.1, Xorg-Server 1.19.3, Linux 4.10.9, DBus 1.10.16, GCC 5.4.1, Ruby 2.4.1, Poppler 0.53.0, PyQt 5.8.2 and a **move to qtwebkit-tp** replacing no longer maintained qt5-webkit

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

* Option to use a GPT partitiontable on BIOS system with needed documentation added
* When a VirtualBox system is detected, proper Guest Modules will be installed
* Fixed operating system detection for automatic dual boot setup in GRUB
* Improved check for internet connection availability
* Double-click as a way to edit a partition in the manual partitioning view
* Fixed an issue in the partition module to always set the correct flags for an EFI system partition

## Known issues:
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this
* Kaptan will crash on using a different wallpaper selection.  Please use the right click on desktop menu to select a different wallpaper

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
