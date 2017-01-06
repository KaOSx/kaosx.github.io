---
layout: news
title: KaOS 2017.01
permalink: /news/2017/kaos01/
date: '2017-01-05 05:23:31 -0500'
date_gmt: '2017-01-05 05:23:31 -0500'
---
It is with great pleasure to present to you a first KaOS ISO for 2017.

[![](/img/2017/sddm_w.png){: .news-img-right}](/img/2017/sddm_w.png)

Starting the New Year with a fresh new look. All parts of the Midna artwork have been updated, most notably a new sddm theme that uses a layered QML model. This makes selecting between the default regular Plasma session or optional Wayland much clearer. New is also a move to a right vertical panel as default.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.29.0, Plasma 5.8.5, [KDE Applications 16.12.0](https://www.kde.org/announcements/announce-applications-16.12.0.php){:target="_blank"} & **not yet released ports of KDE Applications**. All built on **Qt 5.7.1**.

[![](/img/2017/midna_2017.png){: .news-img-right}](/img/2017/midna_2017.png)

Linux 4.8.15 has a change as to how the kernel image is created. Instead of using an install file that only gets called on kernel updates, a new hook file is used. Advantage of this is that image creation is now triggered for many more instances like filesystem and systemd updates, so you won’t see the mismatched systemd version on systemd updates without manually updating the kernel image.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right click the ISO file, select Actions then select Verify ISO Write 

[![](/img/2017/isow.png){: .news-img-right}](/img/2017/isow.png)

The installer has more robust support for operating system detection with automatic dual boot setup in GRUB

Mesa includes experimental Nouveau patches so QtWebengine based applications and web-browsers can again be used on systems running the Nouveau driver. This fixes a long standing bug going back to the middle of 2015.


{% include image.html
            img="img/2017/krename.png"
            title="KRename"
            caption="KRename kf5"
            url="/img/2017/krename.png" %}

Some of the latest Qt 5/kf5 ported applications that moved into the KaOS repositories include KRename and [**Muse**](http://muse-sequencer.org/){:target="_blank"}.

KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

## Base of the system
Most notable major updates to the base of the system are Boost 1.62.0, ICU 58.2, Ruby 2.4.0, Systemd 232, FFMPEG 3.2, Linux 4.8.15, Mesa 13.0.2, Hunspell 1.6.0, Gpgme 1.8.0, Gstreamer 1.10.2 and a move to Openjpeg 2 (2.1.2)

[![](/img/2017/updates.png){: .news-img-right}](/img/2017/updates.png)

New is the use of a GUI warning on system updates that require user action. Adding such notices to a News item or having an install message included in (at time large) pacman output is too easily missed. A rolling distribution will have to make such changes over the lifetime of an install.  Thus the need for a better way to communicate is now implemented, see an example for the upcoming OpenVPN update for all users.

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

It is possible for both the Live session and installed system to start a Plasma Wayland session right from the login manager. An X11 session is of course still default, but the drop-down menu has a Wayland entry too. With Plasma 5.8.5, the Wayland session is possible on more systems.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 2.5 series. Highlights of the changes and additions:

* Improved system requirements configuration checking
* Fixed a path handling issue which could sometimes occur when reusing an existing EFI system partition
* Fixed operating system detection for automatic dual boot setup in GRUB
* Added support for NVME devices to set correct ESP flag with UEFI installs
* Added Btrfs subvolumes setup for @ and @home in automated install modes (note: manual partitioning still doesn’t support Btrfs subvolumes, as this requires further work in both KPMcore and Calamares)

## Known issues:
* If you do not want to install a bootloader, do not use any of the automated partitioning options, select manual for this.  See [the bug report for the installer](https://calamares.io/bugs/browse/CAL-388){:target="_blank"} regarding this.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following [BIOS GPT](https://kaosx.us/docs/bios_gpt/){:target="_blank"}, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or rufus**, and DVDs need a burn speed **no higher than 4x**.
