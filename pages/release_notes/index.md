---
layout: page
status: publish
published: true
title: Release Notes
permalink: /pages/release_notes/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2829
wordpress_url: http://kaosx.us/?page_id=2829
date: '2015-04-03 04:38:02 -0400'
date_gmt: '2015-04-03 04:38:02 -0400'
categories: []
tags: []
comments: []
---

### KaOS - 2024.07

KaOS is pleased to announce the availability of the July release of a new stable ISO.

For the Plasma desktop, the latest [Plasma (6.1.3)](https://kde.org/announcements/plasma/6/6.1.0/){:target="_blank"}, KDE Gear (24.05.2), and Frameworks (6.4.0) are included. All built on **Qt 6.7.2**. Among the many changes included in Plasma 6.1, is that you can now start up a remote desktop directly from the System Settings app, once enabled, you can connect to the remote desktop using a client such as KRDC. For customizing the visual aspect of Edit Mode has been overhauled and you will now see a slick animation when you activate it. The entire desktop zooms out smoothly, giving you a better overview of what is going on and allowing you to make your changes with ease. On Wayland now has a feature that *remembers* what you were doing in your last session like it did under X11.

More applications are now ready to use Qt6 and Frameworks 6 including Kooka, Qdirstat, KWave and Kaffeine

Support has been added **to install with the all new filesystem bcachefs**, it is still in experimental stage, but is included in the kernel build, and the needed bcachefs-tools are available in the repositories.  Calamares can use bcachefs when used in manual mode, though no specific settings for this filesystem have been implemented yet.

Updates to the base of the system included a move to LLVM/Clang 18.1.8, Libgcrypt 1.11.0, Nettle 3.10, kernel moved to Linux 6.9.9, Systemd 253.22, Dracut 103, Pipewire 1.2.1, OpenSSL 3.3, OpenCV 4.10.0, OpenSSH 98.p1 and Mesa 24.1.4.

A new Phonon sound backend is in use.  So far VLC was used, but there is no Qt6 porting for VLC yet.  Using **phonon-mpv** as default now, gives a fully Qt 6 ready backend.

New for this ISO  is to no longer include the kernel modesetting for all graphics cards, thus shaving roughly 700 Mb of the ISO size.

Four years after being end of life, **GTK2 is finally removed from the KaOS repositories**.  The one major application left that still required GTK2 was Ardour, but with 8.4.0, an internal YTK is used, thus GTK2 is now gone.

Among the new packages included is **Marknote**, a nicely in Plasma 6 integrated note management application.

Four years after being end of life, **GTK2 is finally removed from the KaOS repositories**.  The one major application left that had still required GTK2 was Ardour, but with 8.4.0, an internal YTK is used, thus GTK2 is now gone.

SDDM 0.20.0 added the option to run this display manager in Wayland mode, so KaOS is one step closer to being ready to move away from X11. The shell used to run in Wayland mode is kwin_wayland (upstream default is using Weston).

The automated partitioning option in the installer (Calamares) now offers the use of all popular filesystems, so no need to use manual partitioning to be able to choose XFS, EXT4, BTRFS, or ZFS.

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

After almost two years of testing IWD, it is now in such a good state that it has replaced Wpa_Suplicant as the default wireless daemon for KaOS.  
Similar, Pipewire has replaced PulseAudio as the default sound/low-level multimedia framework.

A shift has started as to how all Python packages are build.  Historically, just about all were build with setuptools though a setup.py script.  PEP17 is the new standard for building python packages, see https://peps.python.org/pep-0517/.  At this stage, KaOS is testing this transition with different new Python build tools, such as Python-flit & Python-build, with Python-wheel currently in use to install the build packages.

For Nvidia, longterm supported versions 390xx and 470xx are include, alongside the latest released version.

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt6/kf6 application.  LibreOffice has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included.  It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

There is an option to verify the authenticity of downloaded KaOS ISO files through GPG signature verification, see the Download page for further details and instructions.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability  of  various  tools to validate and repair metadata corruptions when they are found.  The  free  inode  btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

For UEFI installs, KaOS uses the simple, transparent but quite powerful systemd-boot as bootloader.

**Octopi** is becoming a very crucial part of full system maintenance for KaOS. It is not just a GUI frontend to pacman. Tools like making sure a mirror is synced before starting any update, looking at the pacman logs, an option to get a paste from a complete snapshot of all info of a system with the SysInfo tool are included. Also included are very simple ways to open files, like copy to clipboard the file path shown in Octopi. To make sure the system doesn't start using too much disk space for the pacman cache, but still giving the user the option to retain some recent packages, the cache-cleaner tool is a great addition. The built-in tool to access [KCP](https://github.com/KaOS-Community-Packages){:target="_blank"} has now a much clearer place with the addition of its own "foreign" icon in the menu-bar. When viewing package info it is now possible to click the depends of such a package. New added is the option to select custom icons for the systemtray.

For UEFI installs, KaOS uses the simple, transparent but quite powerful systemd-boot as bootloader.

To learn more about the goals and ideas behind KaOS, please read the [Home](https://kaosx.us/), [About](https://kaosx.us/about/) and [FAQ](https://kaosx.us/faq/) pages.

To avoid any misunderstanding and confusion, KaOS is **not based upon, derived of, or inspired by** any one particular distribution. It is completely independent, build entirely from scratch with its own repositories. To read more about this see [Based](https://kaosx.us/about/based/). A **rolling release distribution** never has a `final` release, every ISO is merely a snapshot of the current status of the repositories. An idea what is currently available:

The ISO ships with **Frameworks 6.4.0, Plasma 6.1.3, KDE Applications 24.05.2**, Linux 6.9.9, Systemd 253.22, Kmod 32, NetworkManager 1.46.4, LibreOffice 24.2.5, Elisa, Xorg-Server 1.21.13, Mesa 24.1.4, Glibc 2.39, GCC 13.2.1, non-free Nvidia 555 and Python3 3.11.9 to name a few.

The package manager is **Pacman 6.0.2**, with the simple but powerful Octopi 0.16.2 as GUI frontend. Falkon is the default, Qt based, web browser. **GFXboot** is included with KaOS artwork, Grub theme is Midna, Look &amp; Feel is a KaOS exclusive version Midna.

**Repositories** of KaOS will stay limited in size and expect it to stay at the current maximum of about 2100-2200 packages. A gist of what is available, besides the stable kernel there is Linux-next 6.10, Calligra 3.2.1, VLC, Vokoscreen, Blender, Kodi, Calibre, Sigil, Vulkan packages, a few games like 0ad and Knights.  
A limited number of the most well-known GTK applications are available, for example, Firefox 128, Chrome 128, Ardour 8.6.0, Inkscape 1.3, GIMP 2.99.18 and Thunderbird 128. Complete language packs are available for KDE, Calligra, Firefox, LibreOffice and Thunderbird. For IM, Fcitx 4.2.9.9 is available as a rather complete group.

**Known issues:**

 * Installing on RAID is currently not possible

**To create reliable** installation media, please follow the instructions from the [Download](https://kaosx.us/download/) page. KaOS's ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
