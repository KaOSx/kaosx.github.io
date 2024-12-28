---
layout: news
title: KaOS 2024.11
//description: Not directly ISO related, but needing a News mention anyway is the complete overhaul of the KaOS website. After almost nine years of using the same
permalink: /news/2024/kaos11/
date: "2024-11-19 01:23:31 -0500"
date_gmt: "2024-11-19 01:23:31 -0500"
//heroImage: "/2024/website.png"
---

KaOS is pleased to announce the availability of the November release of a new stable ISO.
![](/2024/midna2024.png "Midna 2024")
For the Plasma desktop, the latest [Plasma (6.2.3)](https://kde.org/announcements/plasma/6/6.2.0/), KDE Gear (24.08.3), and Frameworks (6.8.0) are included. All built on **Qt 6.8.0**. Among the many changes included in Plasma 6.2, is a more complete support for the Wayland color management protocol, improved brightness handling for HDR and ICC profiles, a new tone mapping feature built into Plasma’s KWin compositor will help improve the look of images and you can now override misbehaving applications that block the system from going to sleep or locking the screen (and thus prevent saving power).

More application are now ready to use Qt6 and Frameworks 6 including Freecad, Sqlitebrowser, Cantor, Kalzium, Webacmoid and Liquidshell.

![](https://kde.org/announcements/plasma/6/6.2.0/fullscreen_with_apps.png "Plasma 6.2")
<sub>Plasma 6.2</sub>

Not directly ISO related, but needing a News mention anyway is the complete overhaul of the KaOS website. After almost nine years of using the same, Jekyll based website, it was time for an update/upgrade. A much newer and very active developed framework is now used. The new site is Astro.js based.
New are a light and dark mode option, responsiveness is much improved, Lighthouse score is way better, and the documentation has its own layout.
![](/2024/website.png "Updated website")
<sub>Updated website</sub>

Updates to the base of the system were numerous and included a new GCC 14.2.0/Glibc 2.40/Binutils 2.43.1 based toolchain, updated Glib2 2.82 stack, LLVM/Clang 19.1.3, Poppler 24.11.0, kernel moved to Linux 6.11.9, Systemd 253.26, ZFS 2.2.6, KMod 33, OpenSSL 3.4, Botan 3.6.1, Protobuf 28.3 and Mesa 24.2.7.

Among the new packages included is [Harper](https://writewithharper.com/), an open source grammar & spellchecker.
![](https://writewithharper.com/images/example_nvim.webp)
Support has been added for the new filesystem **bcachefs**, it is still in experimental stage, but is included in the kernel build, and the needed bcachefs-tools are available in the repositories. Calamares can use bcachefs when used in manual mode, though no specific settings for this filesystem have been implemented yet.
![](/2024/bcachefs_install.png "Bcachefs used for an installation")
<sub>Bcachefs used for an installation</sub>

A new Phonon sound backend is in use. So far VLC was used, but there is no Qt6 porting for VLC yet. Using **phonon-mpv** as default now gives a fully Qt6-ready backend.

Four years after being end of life, **GTK2 is finally removed from the KaOS repositories**. The one major application left that still required GTK2 was Ardour, but with 8.4.0, an internal YTK is used, thus GTK2 is now gone.

SDDM 0.20.0 added the option to run this display manager in Wayland mode, so KaOS is one step closer to being ready to move away from X11. The shell used to run in Wayland mode is kwin_wayland (upstream default is using Weston).
![](/2024/freecad.png "FreeCAD Qt6 based")
<sub>FreeCAD Qt6 based</sub>

The automated partitioning option in the installer (Calamares) offers the use of all popular filesystems, so no need to use manual partitioning to be able to choose XFS, EXT4, BTRFS, or ZFS.

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/) for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is part of the default install)

## Common Notes

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update.

KaOS uses the Systemd-provided Systemd-boot for UEFI installs.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new installation is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups. It is written in QML and fits well with the Welcome application used in the Live system. The latter includes an Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.
![](/2024/bootloader.png "Bootloader Selection")
<sub>Bootloader Selection</sub>
The artwork includes custom icon themes for light and dark themes. Midna creates a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](/download/#authenticity-check) for further details and instructions.

## Known issues:

- Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](/download/#media_creation) page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
