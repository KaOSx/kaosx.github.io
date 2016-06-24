---
layout: news
title: KaOS 2016.06
permalink: /news/2016/kaos06/
date: '2016-06-24 2:23:31 -0500'
date_gmt: '2016-06-24 2:23:31 -0500'
---
It is with great pleasure to present to you KaOS 2016.06.  This time three major changes to announce.

## Kernel with build-in Microcode support
With the move to the Linux kernel 4.6 it is now possible to fully automate the Early Microcode update. This new kernel now has all needed ucode build-in, thanks to commits like [**these**](https://lkml.org/lkml/2016/3/14/393){:target="_blank"}. For users, this means no need to install any ucode package, no need to adjust bootloaders or have an extra initrd just for Microcode loading. Many modern CPUs require loading microcode before everything else, as the update causes system instability otherwise.

## Desktop
The Plasma Desktop includes Frameworks 5.23.0, [**Plasma 5.6.95**](https://www.kde.org/announcements/plasma-5.6.95.php){:target="_blank"}, KDE Applications 16.04.2 & **not yet released ports of KDE Applications**. All built on **Qt 5.7.0**. Changes in Plasma 5.6.95 include improved workflows, the return of the agenda view in the calendar, the Volume Control applet gained the ability to control volume on a per-application basis & allows you to move application output between devices using drag & drop, new System Tray & Task Manager, plus huge steps towards a Wayland-based windowing system

[![](/img/2016/cala_encryption.png){: .news-img-right}](/img/2016/cala_encryption.png)

## Full Disk Encryption
Complete new for KaOS is the inclusion of encrypted file system support in the installer. LUKS encryption is available for both the automated install options as well as manual.

## End of Qt 4
Third major change is the end of Qt 4 in the KaOS repositories. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.
[![](/img/2016/vbox_qt5.png){: .news-img-right}](/img/2016/vbox_qt5.png)
Some of the latest packages that just moved to Qt 5 include Kaffeine and VirtualBox

## Common Notes
The artwork received a redesign in many elements. A new icon theme for light and dark themes has arrived. The Midna Dark theme received a complete overhaul with a new plasma theme, window decorations, color scheme and new sddm & splash themes. The new work brings to Midna Dark a complete unified look.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS specific settings for kinit make it possible to start a Plasma Wayland session right from the login manager. An X11 session is of course still default, but the drop-down menu has a Wayland entry too. With Plasma 5.6.95, the Wayland session is now possible on more systems.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 2.3 series. Highlights of the changes and additions:

* Support for full-disk autoinstall with LUKS
* Support for LUKS filesystem creation in the Manual partitioning interface.
* Support for Alongside (i.e. shrink+autoinstall) and Replace (i.e. replace+autoinstall) with LUKS.
* Automated Breakpad and GDB-based crash reporting with libcrashreporter-qt
* Added support for NVME device naming scheme in fstab module.
* Added support for generating /etc/crypttab, this relies on a single master passphrase.
* Improved reboot configuration handling in the Finished module.
* Fixed an issue which caused zram devices to be included in the devices list.

## Known issues:

* On systems running the Nouveau graphics driver, Qupzilla will not start. Either install the [non-free Nvidia driver](https://kaosx.us/docs/nvidia/){:target="_blank"} or use another browser. Nouveau is not compatible with QtWebEngine.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following [BIOS GPT](https://kaosx.us/docs/bios_gpt/){:target="_blank"}, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS's ISO's **do not support unetbootin**, and DVDs need a burn speed **no higher than 4x**.
