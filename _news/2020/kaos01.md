---
layout: news
title: KaOS 2020.01
permalink: /news/2020/kaos01/
date: '2020-01-03 01:23:31 -0500'
date_gmt: '2020-01-03 01:23:31 -0500'
---
A nice way of starting 2020 is to present to you the January release of a new stable ISO.

{% include image.html
            img="img/2020/midna2019.png"
            title="KaOS"
            caption="KaOS"
            url="/img/2020/midna2019.png" %}

For the many changes in this release, two stand out. First one is the addition of signed kernel modules for Linux 5.4. All internal modules are now automatically signed during the kernel build, out of tree modules like virtualbox-modules and NVIDIA packages have the signing added too. Building of those modules was adjusted to use the kernel specific signing files during each and every rebuild. You can harden your system by adding `module.sig_enforce=1` to your kernel boot line. To check if your systems contains any unsigned:
```
for mod in $(lsmod | tail -n +2 | cut -d' ' -f1); do modinfo ${mod} | grep -q "signature" || echo "no signature for module: ${mod}" ; done
```

{% include image.html
            img="img/2020/prime.png"
            title="Nvidia PRIME"
            caption="Nvidia PRIME"
            url="/img/2020/prime.png" %} 
            
Second: To better accommodate **hybrid systems** and non-free NVIDIA, there is now a move from libgl to vendor-neutral libglvnd. This will make the NVIDIA bumblebee packages obsolete. Xorg-server was updated to 1.20.6, so the needed patches to use Prime instead
of Bumblebee are included. The needed scripts for this are packaged as the *prime* package. The hardware-detection scripts and Calamares installer have their code adjusted to use the new Prime option. The availability of NVIDIA hybrid testing hardware was limited, so you might still encounter some issue with Prime.
            
Work has also continued last month to further remove python2. This time it was removed as makedepend from as many as possible.
{% include image.html
            img="img/2020/kdenlive.png"
            title="Kdenlive"
            caption="Kdenlive"
            url="/img/2020/kdenlive.png" %}
You will find [KDE Applications 19.12](https://kde.org/announcements/releases/2019-12-apps-update/){:target="_blank"} on this ISO. Highlights of 19.12 include Kdenlive now comes with a spectacular new sound mixer. Dolphin redesigned advanced search options and now you can go backward and forwards in the history of places you have already visited. KDE-Connect implemented a new Kirigami interface that provides new features for desktop-to-desktop users, such as media control, remote input, device ringing, file transfer and running commands. For Elisa, indexing music files has improved and now supports web radios and ships with a few examples for you to try. Frameworks is at 5.65.0, Plasma at 5.17.4 and KDE Applications at 19.12.0. All built on **Qt 5.14.0**.

For the installer Calamares, support for non-free NVIDIA with Prime has been added.

Most notable major updates to the base of the system are LLVM/Clang 9.0.1, Glib2 2.62.4, Bison 3.4.2, Python3 3.7.6, Linux 5.4.7, Protobuf 3.11.1, Mesa 19.2.8, NetworkManager 1.22.2, Nano 4.7, GStreamer 1.16.2 and Qt 5.14.0



## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

KaOS repositories no longer provide Qt 4. It is a good four years ago that development for Qt 4 stopped, late 2015 all support including security fixes ended. Any application that has not made the transition to Qt 5 in all this time can no longer be supported in KaOS. Either they actually are no longer maintained or their development is ignoring the implications of building on a possible insecure toolkit.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write 

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.
            
KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings and replaces the formerly used, PyQt based first run wizard Kaptan. It also includes a custom Wallpaper selector, distribution info, and news. It is written in QML and fits well with the Welcome application used in the Live system. The latter now includes a fully rewritten (also in QML) Installation Guide.
{% include image.html
            img="img/2020/cala_croeso.png"
            title="Installer and Croeso"
            caption="Installer and Croeso"
            url="/img/2020/cala_croeso.png" %}
This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Some Intel CPU systems might have an issue kernel’s entropy pool and have a long boot delay if encountered add **random.trust_cpu=1** to the kernel boot line.
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
