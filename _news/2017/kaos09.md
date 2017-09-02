---
layout: news
title: KaOS 2017.09
permalink: /news/2017/kaos09/
date: '2017-09-02 10:23:31 -0500'
date_gmt: '2017-09-02 10:23:31 -0500'
---
KaOS is proud to announce the availability of the September release of a new stable ISO.

{% include image.html
            img="img/2017/kate.png"
            title="Kate with new preview option"
            caption="Kate with new preview option"
            url="/img/2017/kate.png" %}

The biggest change to announce is that the kernel has moved to the hardened patch set, which provides an improved implementation of Address Space Layout Randomization for userspace processes. Linux-hardened started after grsecurity was no longer available as an open source option and is a supplement to upstream kernel hardening work by the Kernel Self Protection Project. See the Linux ASLR comparison for more information.            

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.37.0, Plasma 5.10.5, [KDE Applications 17.08.0](https://www.kde.org/announcements/announce-applications-17.08.0.php){:target="_blank"} & **not yet released ports of KDE Applications**. All built on **Qt 5.9.1**.  New is the addition of preview plugins to Kate/Kwrite (also usable in KDevelop), which when enabled turns Kate into full fledged Markdown editor.

As requested by KaOS users, the next ISO will also have a custom look for the bash prompt. This can be added to current installs too by installing powerline.  The Midna Splashscreen was rewritten. It now uses a few QML effects instead of just one.

{% include image.html
            img="img/2017/nomad.png"
            title="Nomad Firewall"
            caption="Nomad Firewall"
            url="/img/2017/nomad.png" %}

It has been a few years, but finally there is an up to date (Qt5/kf5 based) firewall application available again. **Nomad-firewall** is available on this ISO.  A second scan application is added. **Kooka**, just ported to kf5. This application has quite a few more options than skanlite, so it is nice to be able to add a second (Qt/kf5 based) option for scanning.  Krita 3.2 has the new option to use the **G’MIC plugin**. For that gmic-qt is added to the repositories. With this, the options to add effects to any artwork/image are sheer endless.

A change in how printer packages are packaged makes it that now most printers are automatically recognized and setup, no need any longer to run any print wizard.  This counts for both Live mode and installed system.
            
There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

{% include image.html
            img="img/2017/krita.png"
            title="Krita 3.2 with the G'MIC plugin"
            caption="Krita 3.2 with the G'MIC plugin"
            url="/img/2017/krita.png" %}

Mesa includes experimental Nouveau patches so QtWebengine based applications and web browsers can again be used on systems running the Nouveau driver. This fixes a long standing bug going back to the middle of 2015.

## Base of the system
Most notable major updates to the base of the system are **Systemd 234, Linux 4.12.10**, LLVM/Clang 4.0.1, Qt 5.9.1, Mesa 17.1.8, Poppler 0.57.0, DBus 1.10.22, Porotobuf 3.4.0, Texlive packages 2017, Wayland 1.14.0 and Openjpeg 2.2.0.

KaOS repositories no longer provide Qt 4. It is a good three years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

{% include image.html
            img="img/2017/bash_prompt.png"
            title="Bash prompt"
            caption="Custom Bash Prompt"
            url="/img/2017/bash_prompt.png" %}

The Linux kernel has all the needed ucode built-in for a fully automated Early Microcode update. 

## Common Notes
The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through log out.

KaOS uses a **First Run Wizard**. It will run on the newly installed system and enables with just a few clicks to adjust mouse behavior, menu launcher, desktop theme, used wallpaper, color scheme, widget style, window decoration and virtual desktops used. With one click this Wizard will also link to KaOS Documentation and all contact info.

Also included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right click the ISO file, select Actions then select Verify ISO Write 

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

## Calamares
The used installer framework has moved to the 3.1.3 series. Highlights of the changes and additions:

* Summary page now shows language and number-formats information.
* The Quit and Done buttons now have a tooltip explaining what they will do.
* At the end of the install process, a notification appears in the system notification area.
* Fat32 filesystems are now handled correctly even when misspelled.
* Filesystem sizes are now shown with an MB suffix.

## Known issues:
* Installing on RAID or LVM is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
