---
layout: news
title: KaOS 2024.05
permalink: /news/2024/kaos05/
date: '2024-05-27 12:23:31 -0500'
date_gmt: '2024-05-27 01:23:31 -0500'
---

{% include image.html
            img="img/2024/midna2024.png"
            title="KaOS 2024"
            caption="KaOS 2024"
            url="/img/2024/midna2024.png" %}
            

It is a great pleasure to present to you the May release of a new stable ISO.

For the Plasma desktop, the latest Plasma (6.0.5), [KDE Gear (24.05.0)](https://kde.org/announcements/gear/24.05.0/){:target="_blank"}, and Frameworks (6.2.0) are included. All built on **Qt 6.7.1**. Among the many changes included in KDE Gear 24.05 are, Dolphin provides a more tailored and informative insights into specific folders by default, so when browsing through recently used files and folders, users will find modification times listed by default and have streamlined access to the most recent items. Itinerary now shows more information about your train and coach facilities. This includes general comfort features such as air conditioning or Wi-Fi, as well as things specifically relevant if you are traveling with young children, a bicycle or a wheelchair. Kdenlive 24.05 added group effects, effects that can be added to clips grouped together all at the same time.

More applications are now ready to use Qt6 and Frameworks 6 including Gcompris, Calligra, KWave, and Kaffeine

{% include image.html
            img="img/2024/bcachefs.png"
            title="Bcachefs options in Partionmanager"
            caption="Bcachefs options in Partionmanager"
            url="/img/2024/bcachefs.png" %}

Support has been added for the all-new filesystem **bcachefs**, it is still in experimental stage but is included in the kernel build, and the needed bcachefs-tools are available in the repositories.

A new Phonon sound backend is added.  So far VLC was used, but there is no Qt6 porting for VLC yet.  Using **phonon-mpv** as default now, gives a fully Qt 6 ready backend.

New for this ISO  is to no longer include the kernel modesetting for all graphics cards, thus shaving roughly 700 Mb of the ISO size.

Four years after being end of life, **GTK2 is finally removed from the KaOS repositories**.  The one major application left that still required GTK2 was Ardour, but with 8.4.0, an internal YTK is used, thus GTK2 is now gone.

Updates to the base of the system included a move to Python 3.11, Glib2 2.80 stack, kernel moved to Linux 6.8.10, Systemd 253.19, ZFS 2.2.4, KMod 32, OpenSSL 3.3, FFMPEG 6.1, OpenJDK 17 and Mesa 24.0.7.

{% include image.html
            img="img/2024/gcompris.png"
            title="GCompris ported to Qt6"
            caption="GCompris ported to Qt6"
            url="/img/2024/gcompris.png" %}

Among the new packages included is **Marknote**, a nicely in Plasma 6 integrated note management application.

SDDM 0.20.0 added the option to run this display manager in Wayland mode, so KaOS is one step closer to being ready to move away from X11. The shell used to run in Wayland mode is kwin_wayland (upstream default is using Weston).

The automated partitioning option in the installer (Calamares) now offers the use of all popular filesystems, so no need to use manual partitioning to be able to choose XFS, EXT4, BTRFS, or ZFS.

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

{% include image.html
            img="img/2024/calamares.png"
            title="Calamares updated locale page"
            caption="Calamares updated locale page"
            url="/img/2024/calamares.png" %}

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is part of the default install)

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd-provided Systemd-boot for UEFI installs.

{% include image.html
            img="../img/2024/kwave.png"
            title="Kwave Qt6/Plasma 6 based"
            caption="Kwave Qt6/Plasma 6 based"
            url="/img/2024/kwave.png" %}
Since LibreOffice 6.2, it is now possible to supply this as a pure Qt6/kf6 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.
{% include image.html
            img="img/2020/croeso_packages.png"
            title="Croeso Package Selection Page"
            caption="Croeso Package Selection Page"
            url="/img/2020/croeso_packages.png" %}
The artwork includes custom icon themes for light and dark themes. Midna creates a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
