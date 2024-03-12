---
layout: news
title: KaOS 2024.03
permalink: /news/2024/kaos03/
date: '2024-03-02 12:23:31 -0500'
date_gmt: '2024-03-12 01:23:31 -0500'
---

{% include image.html
            img="img/2024/midna2024.png"
            title="KaOS 2024"
            caption="KaOS 2024"
            url="/img/2024/midna2024.png" %}
            

KaOS is pleased to announce the availability of the March release of a new stable ISO.

[Plasma 6.0 (stable release)](https://kde.org/announcements/megarelease/6/){:target="_blank"} is of course to focal point of this release.  Highlights of this new version include two major upgrades: a transition to the latest version of our application framework, Qt, and a migration to the modern Linux graphics platform, Wayland. These under-the-hood upgrades benefit Plasma's security, efficiency, and performance, and improve support for modern hardware. Plasma on Wayland now has partial support for High Dynamic Range (HDR). On supported monitors and software, this will provide you with richer and deeper colors for your games, videos, and visual creations.

**New defaults** (configurable to whatever you prefer):
 * Files and folders are now selected with a single-click and opened with a double-click
 * Touchpad tap-to-click is enabled by default on Wayland
 * Wayland is the default graphical session
 * `Thumbnail Grid` is the new default Task Switcher style
 * Clicking on the scrollbar track now scrolls to the clicked location
 * Scrolling on the desktop no longer switches virtual desktops
 * Panels float by default
{% include image.html
            img="img/2024/sddm.png"
            title="SDDM for Midna 2024/Plasma 6"
            caption="SDDM for Midna 2024/Plasma 6"
            url="/img/2024/sddm.png" %}

On many settings pages, buttons have been relocated to the toolbar, enhancing consistency with our other applications and creating additional space for the actual content.

You now have the option to customize your sound theme, and a new default sound theme named `Ocean` has been introduced to replace the `Oxygen` sound theme.

The Look & Feel is also updated for the Plasma 6 move, with the Midna theme, exclusive to KaOS, fully redone.

For the rest of the Plasma 6 desktop, KDE Gear 24.02.0 and Frameworks 6.0.0 are included. Changes included in **KDE Gear 24.02** are KOrganizer now lets you send encrypted and signed email invitations — important if your work requires confidentiality. KMail now supports a few offline and open source AI features.  Kdenlive added support for replacing the audio or the video of a clip in a timeline and further enhanced its subtitle feature, allowing you to incorporate multiple subtitles onto a single track. All built on **Qt 6.6.2**.

Four years after being end of life, **GTK2 is finally removed from the KaOS repositories**.  The one major application left that had still required GTK2 was Ardour, but with 8.4.0, an internal YTK is used, thus GTK2 is now gone.

Updates to the base of the system included a move to a **GCC 13.2.1, Glibc 2.39 & Binutils 2.42 based toolchain**, Opencv 4.9.0, kernel moved to Linux 6.7.9, Systemd 253.17, ZFS 2.2.3, KMod 32, OpenSSL 3.2, Gstreamer 1.24.0, and Mesa 24.0.2.

{% include image.html
            img="img/2024/cube.png"
            title="The Cube is back for Plasma 6"
            caption="The Cube is back for Plasma 6"
            url="/img/2024/cube.png" %}

Among the new packages included is **Systemdgenie**, a nicely in Plasma 6 integrated GUI to manage systemd.

SDDM 0.20.0 added the option to run this display manager in Wayland mode, so KaOS is one step closer to being ready to move away from X11. The shell used to run in Wayland mode is kwin_wayland (upstream default is using Weston).

The automated partitioning option in the installer (Calamares) now offers the use of all popular filesystems, so no need to use manual partitioning to be able to choose XFS, EXT4, BTRFS, or ZFS.

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

{% include image.html
            img="img/2023/calamares_qt6.png"
            title="Calamares Qt6 based"
            caption="Calamares Qt6 based"
            url="/img/2023/calamares_qt6.png" %}

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is part of the default install)

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd-provided Systemd-boot for UEFI installs.

{% include image.html
            img="../img/2024/libreoffice_kf6.png"
            title="LibreOffice Qt6/Plasma 6 based"
            caption="LibreOffice Qt6/Plasma 6 based"
            url="/img/2024/libreoffice_kf6.png" %}
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
