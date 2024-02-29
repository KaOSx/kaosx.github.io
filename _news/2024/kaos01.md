---
layout: news
title: KaOS 2024.01
permalink: /news/2024/kaos01/
date: '2024-02-02 01:23:31 -0500'
date_gmt: '2024-02-02 01:23:31 -0500'
---

{% include image.html
            img="img/2024/midna2024.png"
            title="KaOS 2024"
            caption="KaOS 2024"
            url="/img/2024/midna2024.png" %}
            

It is a great pleasure to present to you the January release of a new stable ISO.

This release marks the end of Plasma 5 as the default Desktop Environment for KaOS. Almost fifteen months ago work started to fully migrate to a Frameworks 6, Plasma 6 based distribution, and with the release of [Plasma 6 Release Candidate 2)](https://kde.org/announcements/megarelease/6/rc2/){:target="_blank"} this migration is now deemed ready to bring a better user experience than Plasma 5. From the onset of this migration, there was never a plan to mix the two environments. What you will see on this ISO is a pure Plasma 6 based environment.

KaOS though has been shipping all ported applications from their Frameworks 6 branch in the many snapshot ISOs it has released to get ready for this migration. Just about all applications that users have become used to seeing in a Frameworks 5 / Plasma 5 version are available as a Frameworks 6 / Plasma 6 port.  
For the few applications that are not ready yet, Frameworks 5 is still packaged, so they can be used in a Plasma 6 environment.  Those that rely on parts of Plasma 5 will be missing from the KaOS repositories until their ports are ready for daily use.
{% include image.html
            img="img/2024/sddm.png"
            title="SDDM for Midna 2024/Plasma 6"
            caption="SDDM for Midna 2024/Plasma 6"
            url="/img/2024/sddm.png" %}
The Look & Feel is also updated for the Plasma 6 move, with the Midna theme, exclusive to KaOS, fully redone.

Once this ISO is released, all Plasma 5 packages will be removed from the repositories, and KaOS will once again go back to focusing on one Desktop Environment.

Updates to the base of the system included a move to FFMPEG 6, fully updated Boost 1.83.0/ICU 74.1 stack, LLVM/Clang 17.0.6, kernel moved to Linux 6.6.14, Systemd 254.9, Python 3.10.13, Util-Linux 2.39.3, IWD 2.13, MariaDB 11, and Postgresql 16.

For the Plasma 6 desktop, the latest Plasma (5.93.0), KDE Gear (24.01.95)], and Frameworks (5.249.0) are included. All built on **Qt 6.6.1**.

{% include image.html
            img="img/2024/cube.png"
            title="The Cube is back for Plasma 6"
            caption="The Cube is back for Plasma 6"
            url="/img/2024/cube.png" %}

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

Included is a KaOS-specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
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
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
