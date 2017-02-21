---
layout: news
title: KaOS 2017.02
permalink: /news/2017/kaos02/
date: '2017-02-20 20:23:31 -0500'
date_gmt: '2017-02-20 20:23:31 -0500'
---
KaOS is proud to announce the availability of the February release of a new stable ISO.

The policy is, once a first pacman -Syu becomes a major update, it is time for a new ISO so new users are not faced with a difficult first update. With the exceptional large amounts of updates the last four to five weeks a new ISO is needed a bit sooner than usual.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.31.0, [Plasma 5.9.2](https://www.kde.org/announcements/plasma-5.9.2.php){:target="_blank"}, KDE Applications 16.12.2 & **not yet released ports of KDE Applications**. All built on **Qt 5.8.0**.

[![](/img/2017/midna_2017.png){: .news-img-right}](/img/2017/midna_2017.png)

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right click the ISO file, select Actions then select Verify ISO Write 

[![](/img/2017/isow.png){: .news-img-right}](/img/2017/isow.png)

The installer has fixes for using passwords with non-Latin1 characters and now has a proper warning for missing features when doing an offline install.

Mesa includes experimental Nouveau patches so QtWebengine based applications and web-browsers can again be used on systems running the Nouveau driver. This fixes a long standing bug going back to the middle of 2015.

Some of the latest Qt 5/kf5 ported applications that moved into the KaOS repositories include [**Otter Browser**](https://www.otter-browser.org/){:target="_blank"}, a Qt5 based web-browser, using the light-weight qtwebkit-tp as backend

KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

## Base of the system
Most notable major updates to the base of the system are Qt 5.8.0, Readline 7.0, Bash 4.4 Perl 5.24.1, Systemd 232, Xorg-Server 1.19.1, Linux 4.9.10, Glibc 2.25, GCC 5.4.1, Binutils 2.27 Protobuf 3.2.0, Libwebp 0.6.0, Gstreamer 1.10.3 and a move to qtwebkit-tp replacing no longer maintained qt5-webkit.

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

{% include image.html
            img="img/2017/sddm_session.png"
            title="SDDM session selection"
            caption="SDDM session selection"
            url="/img/2017/sddm_session.png" %}

It is possible for both the Live session and installed system to start a Plasma Wayland session right from the login manager. An X11 session is of course still default, but the drop-down menu has a Wayland entry too. With Plasma 5.9, the Wayland session is possible on more systems.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.1 series. Highlights of the changes and additions:

[![](/img/2017/cala.png){: .news-img-right}](/img/2017/cala.png)

* Fix for an issue in the users module, which could break login if the chosen password had non-Latin1 characters
* Proper exception handling in the networkcfg module
* Fixed operating system detection for automatic dual boot setup in GRUB
* Improved check for internet connection availability
* Double-click as a way to edit a partition in the manual partitioning view
* Fixed an issue in the partition module to always set the correct flags for an EFI system partition
* Added Btrfs subvolumes setup for @ and @home in automated install modes (note: manual partitioning still doesn’t support Btrfs subvolumes, as this requires further work in both KPMcore and Calamares)

## Known issues:
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following [BIOS GPT](https://kaosx.us/docs/bios_gpt/){:target="_blank"}, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or rufus**, and DVDs need a burn speed **no higher than 4x**.
