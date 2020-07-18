---
layout: news
title: KaOS 2020.07
permalink: /news/2020/kaos07/
date: '2020-07-18 01:23:31 -0500'
date_gmt: '2020-07-18 01:23:31 -0500'
---

{% include image.html
            img="img/2020/midna2020.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2020/midna2020.png" %}
            
It is with great pleasure to present to you the July release of a new stable ISO. 

You will find [Plasma 5.19](https://kde.org/announcements/plasma-5.19.0){:target="_blank"} on this ISO. Highlights of 5.19 include incorporation of a consistent design and header area for system tray applets as well as notifications, refreshed look of the media playback applet in the System Tray, System monitor widgets have all been rewritten from scratch and Sticky notes get several usability improvements and if you use Wayland, you will also appreciate the new option that lets you configure the mouse and touchpad scroll speed.             Frameworks is at 5.72.0, Plasma at 5.19.3, and KDE Applications at 20.04.3. All built on **Qt 5.15.0**.
{% include image.html
            img="img/2020/plasma519.png"
            title="Plasma 5.19"
            caption="Plasma 5.19"
            url="/img/2020/plasma519.png" %}
For the installer Calamares, KaOS has started a move to using as many QML modules as possible. For the Welcome screen that means any text or needed info can now be shown as a qml file within the Calamares window, no need for pop-ups or external applications. The keyboard module is also rewritten in QML, which now gives a much clearer overview of possible keyboard models, languages and variants.

A few new firmwares/modules have been added to the repositories, this include sof-firmware (needed for newer sound-cards, will move to linux-firmware soon according to upstream reports) and two new rtl wifi modules (rtl8723de & rtl8821ce). New applications added include Photoflare, the musicplayer VVave (the successor of Babe) and Kdiff3.
{% include image.html
            img="img/2020/cala_welcomeqml.png"
            title="Calamares Welcome QML Module"
            caption="Calamares Welcome QML Module"
            url="/img/2020/cala_welcomeqml.png" %}
            
Updates to the base of this distribution include Cfitiso 3.480, Poppler 0.90.1, Pciutils 3.7.0, Git 2.27.0, Libacp 2.39, Pam 1.4.0. Other rebuilds were needed for ICU 66.1, Boost 1.72.0, Krb5 1.18, Glib2 2.64.3 based stack, Guile 2.2.6, Mesa 20.1.3, NetworkManager 1.26.0, Perl 5.30.3, Linux 5.7.8 and Qt 5.15.0. 


The Midna theme used for KaOS has been redone for 2020, biggest change there is the move from QtCurve to **Kvantum** for the application style.  Implemented is a custom Midna Kvantum theme, following the same style as used in Croeso and the Welcome application. 
{% include image.html
            img="img/2020/cala_keyboardqml.png"
            title="Calamares Keyboard QML Module"
            caption="Calamares Keyboard QML Module"
            url="/img/2020/cala_keyboardqml.png" %}
Ksplash is simplified with less moving images, SDDM theme has better contrast.  Complete new is **theming for the systemd-bootloader**, gone is the standard black background with white text, instead, you will see a well-integrated option with the rest of the Midna theme.  The grub bootloader was updated to follow a similar look as the systemd-bootloader.

KaOS is working on a complete rewrite of the Locale module for the installer.  It will feature a modern look (based on QML) with a real live, accurate map.  Once fully working, it will be presented to upstream Calamares for inclusion there.

{% include image.html
            img="img/2020/croeso_packages.png"
            title="Package Group Selection"
            caption="Package Group Selection"
            url="/img/2020/croeso_packages.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.
{% include image.html
            img="img/2020/localeq.png"
            title="Preview of new Locale module"
            caption="Preview of new Locale module for installer"
            url="/img/2020/localeq.png" %}
This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Some Intel CPU systems might have an issue kernel’s entropy pool and have a long boot delay if encountered add **random.trust_cpu=1** to the kernel boot line.
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
