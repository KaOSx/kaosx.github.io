---
layout: news
title: KaOS 2016.11
permalink: /news/2016/kaos11/
date: '2016-11-07 05:23:31 -0500'
date_gmt: '2016-11-07 05:23:31 -0500'
---
KaOS is pleased to announce the 2016.11 release. As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.27.0, [Plasma 5.8.3](https://www.kde.org/announcements/plasma-5.8.3.php){:target="_blank"}, KDE Applications 16.08.2 & **not yet released ports of KDE Applications**. All built on **Qt 5.7.0.**

{% include image.html
            img="img/2016/kshutdown.png"
            title="KShutdown kf5"
            caption="Freshly kf5 ported kshutdown with updated window decoration"
            url="/img/2016/kshutdown.png" %}
## Desktop

For Plasma 5.8 the used Window Decoration in the Midna theme has been updated to accommodate changes in a Wayland session. Aurorae based decoration cannot be used in Wayland thus this change was needed. You will also find an **updated wallpaper selection** as part of the artwork changes.

The installer now automates setting your location on the world map and has improved system requirements configuration checking.

Mesa includes experimental Nouveau patches so QtWebengine based applications and web-browsers can again be used on systems running the Nouveau driver. This fixes a long standing bug going back to the middle of 2015.

{% include image.html
            img="img/2016/ktouch.png"
            title="KTouch"
            caption="KTouch kf5"
            url="/img/2016/ktouch.png" %}

Some of the latest Qt 5/kf5 ported applications that moved into the KaOS repositories include KTouch, KShutdown and [**Now-Dock**](https://store.kde.org/p/1151047/){:target="_blank"}.

KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.
[![](/img/2016/isowriter2.png){: .news-img-right}](/img/2016/isowriter2.png)

## Base of the system
Most notable major updates to the base of the system are a Glib2 2.50.1, FFMPEG 3.2, Linux 4.8.6, Systemd 232, Mesa 13.0.0, Gstreamer 1.10.0, Poppler 0.48.0 and MariaDB 10.1.18.  Linux 4.8 has included support for many more ATI/Radeon cards to start using the amdgpu driver. 

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

{% include image.html
            img="img/2016/kwin_wayland.png"
            title="Wayland session"
            caption="KaOS running a Wayland session"
            url="/img/2016/kwin_wayland.png" %}

It is possible for both the Live session and installed system to start a Plasma Wayland session right from the login manager. An X11 session is of course still default, but the drop-down menu has a Wayland entry too. With Plasma 5.8.3, the Wayland session is now possible on more systems.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 2.4 series. Highlights of the changes and additions:

* Improved system requirements configuration checking
* Fixed user creation so it obeys the list of default groups for new users
* Fixed an issue which could cause a failed install with LUKS if other LUKS partitions are already present
* Added support for NVME devices to set correct ESP flag with UEFI installs
* Added support for generating /etc/crypttab, this relies on a single master passphrase.

## Known issues:
* If you do not want to install a bootloader, do not use any of the automated partitioning options, select manual for this.  See [the bug report for the installer](https://calamares.io/bugs/browse/CAL-388){:target="_blank"} regarding this.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following [BIOS GPT](https://kaosx.us/docs/bios_gpt/){:target="_blank"}, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or rufus**, and DVDs need a burn speed **no higher than 4x**.
