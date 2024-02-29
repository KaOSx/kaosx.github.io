---
layout: news
title: Ten years of KaOS
permalink: /news/2023/kaos04/
date: '2023-04-20 01:23:31 -0500'
date_gmt: '2023-04-20 01:23:31 -0500'
---

{% include image.html
            img="img/2022/cala/12.png"
            title="KaOS 2023"
            caption="KaOS 2023"
            url="/img/2022/cala/12.png" %}
            

April 2013 is when KaOS started, a nice way to celebrate ten years of KaOS is by releasing KaOS 2023.04.

Not only is there a new stable ISO released, but to look forward to the next ten years, there is also a Plasma 6 preview ISO available.  This ISO is not installable, only meant to test in Live mode.  The installer Calamares is not ready for Qt 6/Plasma 6, nor are there many KDE Applications available in their Qt6 version.
{% include image.html
            img="img/2023/plasma6.png"
            title="Plasma 6"
            caption="Plasma 6"
            url="/img/2023/plasma6.png" %}
This ISO is only linked in the News item, not available from the Download page.  Autologin is not enabled, since it varies greatly, depending on hardware whether X or Wayland is the better session. So, sddm will show you an empty username. **Login name & password are live/live**. Download [Plasma 6 ISO](https://sourceforge.net/projects/kaos-test/files/iso/KaOS_Plasma6-2023.04.20-x86_64.iso/).

And to look back, there is an option added to play music during the installation phase.  This was a common feature some 10-15 years ago but has never been available in KaOS, thus available this one time, ten years later.
{% include image.html
            img="img/2023/cala_slide.png"
            title="Installer slideshow with music"
            caption="Installer slideshow with optional music"
            url="/img/2023/cala_slide.png" %}
For the Plasma desktop, the latest Plasma (5.27.4), [KDE Gear (22.12.2)](https://kde.org/announcements/gear/23.04.0/){:target="_blank"}, and Frameworks (5.105.0) are included. All built on <b>Qt 5.15.9+</b>.

Among the many changes included in KDE Gear 23.04 are the option to run Dolphin with kio-admin, thus giving the option again to run Dolphin with administrator rights from the menu, Spectacle, the KDE screenshot app, added built-in screen recording functionality on Wayland and a total redesign of the user interface. For Kdenlive, KDE's powerful video editor, support was added for nested timelines. This new feature allows you to select several clips from your tracks, group them together, and then treat the group as one single sequence.

Updates to the base of the system included a new OpenSSL 3.0.8, CLang/LLVM 16.0.1, Libtiff 4.5.0, Sqlite 3.41.2, kernel moved to Linux 6.2.11, Systemd 253.3, Python 3.10.11, Dracut 059, ZFS 2.1.10, Gnupg 2.4.0, and Libarchive 3.6.2.

<video width="800" loop="true" muted="true" autoplay="true" controls="false">
    <source src="https://invent.kde.org/websites/kde-org/-/raw/master/static/announcements/gear/23.04.0/kdenlive_timelines.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
###### Kdenlive 23.04

Big thanks goes to [YourHostingSolutions](https://yourhostingsolutions.com/){:target="_blank"} for not only providing a mirror but also providing a server for KaOS. With the discontinuation of Fosshost, a new server was sorely needed.

Getting good logs has always been a bit of a challenge since you have to know what `journalctl` commands to use. That is now a thing of the past, **Kjournald** gives the option to view the logs from a nice GUI, with all kinds of filter options in the left-hand pane (it is now part of the default install)

{% include image.html
            img="../img/2023/tokodon.png"
            title="Tokodon"
            caption="Tokodon"
            url="/img/2023/tokodon.png" %}
New applications added include **Tokodon**, which brings the Mastodon federated social media platform to your fingertips, allowing you to easily read, post, and message, plus **Signal Desktop**, a privacy-focused messenger application.

Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.10.

Qt 6.5.0 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web browsers. Latest applications that are now using Qt6 are OBS-studio & Qbittorrent. Plus the Kvantum theming has support for Qt6.

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
