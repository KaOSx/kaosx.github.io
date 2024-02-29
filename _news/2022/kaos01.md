---
layout: news
title: KaOS 2022.01
permalink: /news/2022/kaos01/
date: '2022-01-03 01:23:31 -0500'
date_gmt: '2022-01-03 01:23:31 -0500'
---

{% include image.html
            img="img/2022/welcome.png"
            title="KaOS Welcome 2022"
            caption="KaOS Welcome 2022"
            url="/img/2022/welcome.png" %}
            

Three days into the NewYear, KaOS is very proud to announce the availability of a first ISO for 2022.

For the installer Calamares there are three major changes. Biggest one is the addition of a bootloader selection module. For UEFI installs it is now possible to select between systemd-boot, rEFInd, or no bootloader, all presented in a nice, QML based GUI. Second change is the addition of an interactive keyboard preview in the keyboard setup page. And third is the porting of the License page to QML.

{% include image.html
            img="img/2021/bootloader.png"
            title="Calamares Bootloader Module"
            caption="Calamares Bootloader Module"
            url="/img/2021/bootloader.png" %}

Updates to the base of this distribution were numerous and they included a GCC 11.2/Binutils 2.73 based Toolchain (with a move to libxcrypt), complete updated libffi 3.4.2/Glib2 2.70.2 stack, ICU 70.1/Boost 1.77.0 stack, Python 3.9.9, Systemd 249.7, Curl 7.80.0, Mesa 21.3.3, Vulkan packages 1.2.203, Wayland 1.20.0, Sudo 1.9.8p2, and Openldap 2.6.0.  
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection). KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.3.

When KaOS started in 2013, there was some serious consideration to base this distro on Illumos. One of the biggest draws for Illumos was the ZFS filesystem.  
ZFS has been possible on Linux system for a few years now, but licensing issues and no installer support meant it was not an option to use in KaOS.  
Calamares received initial support for ZFS, and licensing issues should be no problem if the needed modules are not built into the kernel but distributed as separate modules instead, thus ZFS is added to the KaOS repositories.
For now, the only kernel that supports ZFS is the linux-next kernel, since Dracut is fully supported by ZFS, anything mkinitcpio based needs to come from downstream.

{% include image.html
            img="img/2022/nvidia.png"
            title="Nvidia warning"
            caption="Nvidia warning"
            url="/img/2022/nvidia.png" %}

For Nvidia, a new long-term support version is added to this ISO, 470xx. The move by Nvidia to 495 meant the end of support for Kepler-based cards, thus the need to add a new legacy version.

Qt 6.2.2 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web-browsers. All of the PyQt packages are now available in a Qt6 version too. Plus the Kvantum theming has support for Qt6.

{% include image.html
            img="img/2022/kdenlive.png"
            title="Kdenlive 21.12"
            caption="Kdenlive 21.12"
            url="/img/2022/kdenlive.png" %}
            
Highlights of [KDE Gear 21.12](https://kde.org/announcements/gear/21.12.0/){:target="_blank"} include Dolphin adding some clever features that allow you to locate and identify files and folders easily and quickly, and the option to choose a list or grid view for all apps, Spectacle has improved the look of the images as you drag and drop them from Spectacle’s preview panel to Dolphin to save them or to an online image storage site to share them, Kdenlive added the slip trimming mode or ripple trimming mode. Select a clip in the timeline and choose the Tool > Slip tool from the menu, click on a shortened version of your clip and drag it back and forth to place the exact portion of the clip between adjacent clips.

For the other KDE parts, the latest Frameworks (5.89.0) and Plasma 5.23.4 are included.  All built on **Qt 5.15.2+**.

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight-year old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).

{% include image.html
            img="img/2021/summaryq.png"
            title="New modules in Summary page"
            caption="New modules in Summary page"
            url="/img/2021/summaryq.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
{% include image.html
            img="img/2021/keyboardq.png"
            title="Calamares Keyboard Page with preview"
            caption="Calamares Keyboard Page with interactive preview"
            url="/img/2021/keyboardq.png" %}
Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
