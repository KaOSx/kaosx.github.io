---
layout: news
title: KaOS 2022.06
permalink: /news/2022/kaos06/
date: '2022-06-22 01:23:31 -0500'
date_gmt: '2026-04-22 01:23:31 -0500'
---

{% include image.html
            img="img/2022/welcome.png"
            title="KaOS Welcome 2022"
            caption="KaOS Welcome 2022"
            url="/img/2022/welcome.png" %}
            

It is with great pleasure to present to you the June release of a new stable ISO.

Changes were numerous and all over the place, the base of the system for example, was built on a new Glibc 2.35, GCC 11.3.0, and Binutils 2.38 based Toolchain. Further updates in *Core* included DBus 1.14.0, Systemd 250.7, Nettle 3.8 and the kernel moved to 5.17.15.  
Midna, the Plasma theme used in KaOS received some changes (partly to get ready for Plasma 5.25), visual biggest change is the addition of a well-integrated virtual keyboard in the login & lock screen.  
{% include image.html
            img="img/2022/login.png"
            title="Updated login screen with integrated virtual keyboard"
            caption="Updated login screen with integrated virtual keyboard"
            url="/img/2022/login.png" %}
The installer **Calamares** now uses the 3.3 branch.  There are no releases with it yet, but it comes with enough improvements that it is a better fit for KaOS. The integration with KPMCore has improved, LUKS support is more robust and there is now an option to not encrypt the boot partition when encryption is chosen for the install. Some GUI improvements have been implemented too.

But for most, the biggest news for this release will be [Plasma 5.25](https://kde.org/announcements/plasma/5/5.25.0/){:target="_blank"}.  KDE Plasma 5.25 redesigns and enhances how you navigate between windows and workspaces. The Overview effect shows all of your open windows and virtual desktops. Gestures on touchpads and touchscreens put Plasma at your fingertips. The dominant color of your background picture can be applied to all components that use the accent color.
{% include image.html
            img="img/2022/floating.gif"
            title="Plasma 5.25 with Floating Panel and Custom Accent Colour"
            caption="Plasma 5.25 with Floating Panel and Custom Accent Colour"
            url="/img/2022/floating.gif" %}
Titlebars of KDE apps become taller when in Touch Mode, making it easier to press, drag, and close windows with touch. Floating Panels add a margin all around the panel to make it float, while animating it back to look normal when a window is maximized. And Plasma panels can now be navigated with the keyboard, and you can assign custom shortcuts to focus individual panels.  

For all the KDE parts, the latest Frameworks (5.95.0), Plasma (5.25.1), and KDE Gear (22.04.2) are included. All built on **Qt 5.15.5+**>.
{% include image.html
            img="img/2022/requirements.png"
            title="Installer's new Requirements screen"
            caption="Installer's new Requirements screen"
            url="/img/2022/requirements.png" %}
After almost two years of testing IWD, it is now in such a good state that it has replaced Wpa_Suplicant as the default wireless daemon for KaOS.

During the install, there now is an option to either view a slideshow with information about the distribution or watch what the installer Calamares is currently doing by selecting the Log View.

A shift has started as to how all Python packages are built.  Historically, just about all were built with setuptools through a setup.py script.  PEP17 is the new standard for building python packages, see [pep-0517](https://peps.python.org/pep-0517/){:target="_blank"}.  At this stage, KaOS is testing this transition with different new Python build tools, such as Python-flit & Python-build, with Python-wheel currently in use to install the build packages.
{% include image.html
            img="img/2022/cala_log.png"
            title="Calmares Log View"
            caption="Calamares Log View"
            url="/img/2022/cala_log.png" %}
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection){:target="_blank"}. KaOS now does a monthly patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.6.

For Nvidia, a new long-term support version is added to this ISO, 470xx. The move by Nvidia to 495 meant the end of support for Kepler-based cards, thus the need to add a new legacy version.

{% include image.html
            img="img/2022/focuswriter_qt6.png"
            title="Focuswriter ported to Qt6"
            caption="Focuswriter ported to Qt6"
            url="/img/2022/focuswriter_qt6.png" %}
Qt 6.3.1 is included and is now far more complete since many more are ported from Qt5, this includes qt6-location and the big one, qt6-webengine (plus all the Qt6 webengine depends on). A few test applications have been built on qt6-webengine, including some web-browsers. All of the PyQt packages are now available in a Qt6 version and QBittorrent. Plus the Kvantum theming has support for Qt6.

Big thanks goes to [Fosshost](https://fosshost.org/){:target="_blank"} for not only providing the default mirror (through the [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"} mirror network) but also providing a server for KaOS. This server is replacing an eight-year old server (used for package upload, ZNC bouncer, and the old PHP-based package viewer).

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.
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
