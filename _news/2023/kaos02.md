---
layout: news
title: KaOS 2023.02
permalink: /news/2023/kaos02/
date: '2023-02-14 01:23:31 -0500'
date_gmt: '2023-02-14 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/12.png"
            title="KaOS 2023"
            caption="KaOS 2023"
            url="/img/2022/cala/12.png" %}
            

It is with great pleasure to present to you the February release of a new stable ISO.

For the Plasma desktop, the latest [Plasma (5.27.0)](https://kde.org/announcements/plasma/5/5.27.0/){:target="_blank"}, KDE Gear (22.12.2), and Frameworks (5.103.0) are included. All built on <b>Qt 5.15.8+</b>. Among the many changes included in Plasma 5.27 are the Big Multi-monitor Refactor to make working with screens much more reliable. There is also a new fine grained control tools when the user has 3 or more screens connected. For those with a large monitor KWin has long been able to place one window on the left and one on the right. Now with Meta-T the quick tiling is launched allowing complete control of where your windows are placed. Drag windows with Shift pressed and it will stick to the tiled layout. And a new System Settings module has been added to easily control the settings for Flatpaks.

<video width="800" controls autoplay>
    <source src="https://cdn.kde.org/promo/Announcements/Plasma/5.27/tiling.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

Updates to the base of the system included a new IWD 2.3, OpenSSH 9.2p1, MPFR 4.2.0, CLang/LLVM 15.0.7, Libtiff 4.5.0, Sqlite 3.40.1, Networkmanager 1.42.0, kernel moved to Linux 6.1.11, Systemd 252.5, Python 3.10.10, Dracut 059, ZFS 2.1.9, Gnupg 2.4.0, and Busybox 1.36.0.

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

The move to include ZFS exposed a shortcoming in the installer Calamares.  A generated hostid for ZFS during the installation [did not copy over to the installed system](https://forum.kaosx.us/d/2990-zfs-boot-issue-after-kernel-image-regeneration){:target="_blank"}, thus the installed system failed to match the hostid on system updates where a new initramfs was created. This is now corrected by adding a new `zfshostid` module to Calamares. This module was presented to upstream Calamares, but is not included yet in a release, at this point it is a KaOS-only option.  
It is now also possible to select the EurKEY layout in the keyboard page.
{% include image.html
            img="img/2022/kjournald.png"
            title="Kjournald, GUI for systemd logs"
            caption="Kjournald, GUI for systemd logs"
            url="/img/2022/kjournald.png" %}
Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is now part of the default install)

New applications added include **Ghostwriter**, a dedicated Markdown editor. A start is also made to get ready for Plasma 6. For the adventurous, the kde-next repository is used for a complete Qt6-based KDE stack, all Frameworks are built there on Qt6, most of Plasma and a few KDE Applications have also been ported to Qt6.  Plasma 6 does boot but is not usable yet (so, of course not part of this ISO).
{% include image.html
            img="img/2022/ghostwriter.png"
            title="Ghostwriter, markdown editor"
            caption="Ghostwriter, markdown editor"
            url="/img/2022/ghostwriter.png" %}
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.9.

Qt 6.4.2 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web browsers. Latest applications that are now using Qt6 are OBS-studio & Qbittorrent. Plus the Kvantum theming has support for Qt6.
{% include image.html
            img="img/2022/plasma6.png"
            title="Plasma 6 preview"
            caption="Plasma 6 preview"
            url="/img/2022/plasma6.png" %}
## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd-provided Systemd-boot for UEFI installs.

Included is a KaOS-specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
{% include image.html
            img="img/2020/croeso_packages.png"
            title="Croeso Package Selection Page"
            caption="Croeso Package Selection Page"
            url="/img/2020/croeso_packages.png" %}
Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
