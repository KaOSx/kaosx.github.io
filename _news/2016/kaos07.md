---
layout: news
title: KaOS 2016.07
permalink: /news/2016/kaos07/
date: '2016-07-22 05:23:31 -0500'
date_gmt: '2016-07-22 05:23:31 -0500'
---
KaOS is proud to present the 2016.07 ISO. The policy is, once a first pacman -Syu becomes a major update, it is time for a new ISO so new users are not faced with a difficult first update. With all the needed rebuilds for the move to **GCC 5**, most systems will see 70-80% of their install replaced by new packages so a new ISO is more than due.

## Desktop
The Plasma Desktop includes Frameworks 5.24.0, [**Plasma 5.7.2**](https://www.kde.org/announcements/plasma-5.7.2.php){:target="_blank"}, KDE Applications 16.04.3 & **not yet released ports of KDE Applications**. All built on **Qt 5.7.0**. Changes in Plasma 5.7 include improved workflows, the return of the agenda view in the calendar, the Volume Control applet gained the ability to control volume on a per-application basis & allows you to move application output between devices using drag & drop, new System Tray & Task Manager, plus huge steps towards a Wayland-based windowing system

[![](/img/2016/k3b.png){: .news-img-right}](/img/2016/k3b.png)

K3b is back on this ISO as the default CD/DVD creator.  The port to Qt 5/Frameworks 5 has progressed to such a state that it is a fully functioning application again.

Some of the latest Qt 5 applications that just moved into the KaOS repositories include Amarok (back as a Frameworks 5 application),  Mediainfo and [Cryfs-Gui](http://mhogomchungu.github.io/cryfs-gui/){:target="_blank"}

## Kernel with build-in Microcode support
With the move to the Linux kernel 4.6, it is now possible to fully automate the Early Microcode update. This new kernel has all needed ucode build-in, thanks to commits like [**these**](https://lkml.org/lkml/2016/3/14/393){:target="_blank"}. For users, this means no need to install any ucode package, no need to adjust bootloaders or have an extra initrd just for Microcode loading. Many modern CPUs require loading microcode before everything else, as the update causes system instability otherwise.

## Base of the system
Encrypted file system support is included in the installer. **LUKS encryption** is available for both the automated install options as well as manual.

Most notable major updates to the base of the system are a GCC 5.4.0, Binutils 2.26.1 new toolchain, Linux 4.6.4, LLVM/Clang 3.8.1, Poppler 0.45.0, Python 3.5.2, Pulseaudio 9.0, Xorg-Server 1.18.4 and MariaDB 10.1.15

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

It is possible for both the Live session and installed system to start a Plasma Wayland session right from the login manager. An X11 session is of course still default, but the drop-down menu has a Wayland entry too. With Plasma 5.7, the Wayland session is now possible on more systems.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

[![](/img/2016/cala_encryption.png){: .news-img-right}](/img/2016/cala_encryption.png)

## Calamares
The used installer framework has moved to the 2.3 series. Highlights of the changes and additions:

* Fixed a long standing and hard to debug issue with occasional unwanted resize operations being executed
* Support for Alongside (i.e. shrink+autoinstall), Replace (i.e. replace+autoinstall) and Manual partitioning with LUKS.
* Implemented type to search support in the keyboard module
* Improved support for NVME devices in fstab.
* Added support for generating /etc/crypttab, this relies on a single master passphrase.
* Improved reboot configuration handling in the Finished module.
* Much improved mke2fs and e2fsck handling, which fixes a multitude of random (but not very frequent) install failures.

## Known issues:

* On systems running the Nouveau graphics driver, Qupzilla will not start. Either install the [non-free Nvidia driver](https://kaosx.us/docs/nvidia/){:target="_blank"} or use another browser. Nouveau is not compatible with QtWebEngine.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following [BIOS GPT](https://kaosx.us/docs/bios_gpt/){:target="_blank"}, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS's ISO's **do not support unetbootin or rufus**, and DVDs need a burn speed **no higher than 4x**.
