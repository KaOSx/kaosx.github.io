---
layout: news
title: KaOS 2020.05
permalink: /news/2020/kaos05/
date: '2020-05-03 01:23:31 -0500'
date_gmt: '2020-05-03 01:23:31 -0500'
---

{% include image.html
            img="img/2020/midna2020.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2020/midna2020.png" %}
            
KaOS is very proud to announce the availability of the May release of a new stable ISO. 

This release is unlike the February version, not about many new features, but rather about updates and rebuilds. Most of the base of this distribution has been rebuild on a new GCC 9.3.0, Glibc 2.31 & Binutils 2.34 based **Toolchain**. Other rebuilds were needed for ICU 66.1, Boost 1.72.0, Krb5 1.18, Glib2 2.64.2 based stack, Guile 2.2.6, Mesa 20.0.6, NetworkManager 1.22.10, Perl 5.30.2, Linux 5.6.8 and Qt 5.14.2.
            
The new features from the last, major, release were numerous, so repeated here one more time.  
It starts with the installer, there it is  now possible **to select whether or not to install** an OfficeSuite (current choice is limited to LibreOffice, future might see the addition of Calligra as option).  
You can also opt to do a minimal install. 
{% include image.html
            img="img/2020/cala_packages.png"
            title="Installer wirh Package Chooser"
            caption="Installer with Package Chooser"
            url="/img/2020/cala_packages.png" %}
This means opting for a fully functional Plasma Desktop with a filemanager, texteditor, and simple web-browser, but no further applications.  So there won't be a music player, image viewer, office suite and so on. You as a user can decide once the system is installed what to add when the minimal install was chosen.

That brings us to the next new feature. To help with selecting what to add to your new install, the first run wizard Croeso has the option added **to install packages** from six commonly used groups. For example, one group will give a choice of four different web-browsers to add, so it is now very simple to add Chrome or Firefox. Since KaOS has never installed an email client by default, there naturally is now a group for that too. {% include image.html
            img="img/2020/croeso_packages.png"
            title="Package Group Selection"
            caption="Package Group Selection"
            url="/img/2020/croeso_packages.png" %}
The above new feature makes it no longer needed to ship as many applications by default on the ISO, thus the number of installed packages has been reduced from roughly 980 to a little over 900.
            
A smaller change is done for the Welcome application as seen in Live mode. The installed package list is now part of the main window with its own tab in the slideview.  No longer is there a need to open a new window for this list.
            
The Midna theme used for KaOS has been redone for 2020, biggest change there is the move from QtCurve to **Kvantum** for the application style.  Implemented is a custom Midna Kvantum theme, following the same style as used in Croeso and the Welcome application. {% include image.html
            img="img/2020/kvantum.png"
            title="Kvantum Application Style"
            caption="Kvantum Application Style"
            url="/img/2020/kvantum.png" %}Ksplash is simplified with less moving images, SDDM theme has better contrast.  Complete new is **theming for the systemd-bootloader**, gone is the standard black background with white text, instead, you will see a well-intgrated option with the rest of the Midna theme.  The grub bootloader was updated to follow a similar look as the systemd-bootloader.

For the installer Calamares, a second new feature was added.  The Release Notes are now shown in a QML module, so there no longer is a need to work around sandboxing issues with QtWebengine or having to use the depreciated QtWebkit.

{% include image.html
            img="img/2020/sddm.png"
            title="Midna SDDM"
            caption="Midna SDDM"
            url="/img/2020/sddm.png" %}

Highlights of You will find [KDE Applications 20.04.0](https://kde.org/announcements/releases/2020-04-apps-update/){:target="_blank"} on this ISO already. Highlights of 20.04 include Okular now implements smooth scrolling both when you are using the mouse wheel and the keyboard, Elisa added visual shuffle mode, it’s much easier to rearrange your music in the playlists. Now you can start watching movies stored on remote sites without having to download them and instead stream them directly from the cloud to your player through <strong>Dolphin</strong>, which also added the new Duplicate function. One of KDE Connects newest features shipped with this release is the ability to start new conversations with the SMS app.  
Frameworks is at 5.69.0, Plasma at 5.18.4 and KDE Applications at 20.04.0. All built on **Qt 5.14.2**

Last new feature you will see on this ISO is the change of package compression standard from tar.xz to tar.zst. ZSTD brings a significant improvement of decompression speed over XZ, while bringing only a marginal larger package size.

KaOS is working on a complete rewrite of the Locale module for the installer.  It will feature a modern look (based on QML) with a real live, accurate map.  A preview is included in this ISO, but not ready to be used as default yet (to preview, you will need to edit `/usr/share/calamares/settings.conf` and replace `locale` with `localeq` before starting the installer). Once fully working, it will be presented to upstream Calamares for inclusion there.

{% include image.html
            img="img/2020/croeso_browser.png"
            title="Croeso Browser Selection Page"
            caption="Croeso Browser Selection Page"
            url="/img/2020/croeso_browser.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.
{% include image.html
            img="img/2020/systemd_boot.png"
            title="Styled Systemd Bootloader"
            caption="Styled Systemd Bootloader"
            url="/img/2020/systemd_boot.png" %}
This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

{% include image.html
            img="img/2020/localeq.png"
            title="Preview of new Locale module"
            caption="Preview of new Locale module for installer"
            url="/img/2020/localeq.png" %}

## Known issues:
* Some Intel CPU systems might have an issue kernel’s entropy pool and have a long boot delay if encountered add **random.trust_cpu=1** to the kernel boot line.
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
