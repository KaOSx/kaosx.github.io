---
layout: news
title: KaOS 2021.04
permalink: /news/2021/kaos04/
date: '2021-04-27 01:23:31 -0500'
date_gmt: '2021-04-27 01:23:31 -0500'
---

{% include image.html
            img="img/2021/cala_welcomeq.png"
            title="Calamares in QML"
            caption="Calamares in QML"
            url="/img/2021/cala_welcomeq.png" %}
            
Time goes fast, it is eight years ago this week that KaOS started, so this is kind of an April anniversary release.

It has also been eight years that the same initramfs creation tool has been used (Mkinitcpio), but with **Dracut** being the more widely used and constantly maintained, it is time to move to this new tool for KaOS. For almost two years Mkinitcpio did not have a maintainer and upstream had talks about abandoning this tool. This will be a major change and will require lots of work for the ISO creation, but a start has been made, the **linux-next kernel already defaults to Dracut** for initramfs creation.

The tool to manage, search, and install **KaOS Community Packages, kcp** has been completely rewritten (still in Go) in order to support the main new feature: the configuration. 
Now, you can adapt kcp/pckcp to your needs in editing the configuration files (located in `$HOME/.config/kcp/` directory). Notable options : 
* You can use another temporary directory (for installations through kcp) than /tmp 
* kcp can use a third organization for package management. The only constraint is the organization should be on Github 
* For install or download operations, the clone method can use either ssh or https 
* You can define a locale different from the system 
* You can use a custom PKGBUILD prototype to use for PKGBUILD generation through pcpkcp 
* You can add packages to ignore for depends when you check a PKGBUILD with pckcp 
{% include image.html
            img="img/2021/kcp.png"
            title="Rewritten kcp"
            caption="Rewritten kcp"
            url="/img/2021/kcp.png" %}
Other notable changes: 
* Improved performances on updating the database (which needed to completely refactor the database). The operation should be significantly faster. 
* Improved performances for the PKGBUILD parser. The scanner is more accurate and faster. Plus it is designed as an API in order to be usable for a third party app. 
* Some PKGBUILD checkers were added/modified/merged. 
* Added is a man page for pckcp. The man page for kcp was updated 

The installer Calamares has picked up the transition to QML again. All navigation is now done in QML for KaOS. The **Finished module** was also ported to QML, this gives a simpler end page, with clear buttons showing two options. It also opened the way to give users a clear message regarding installation logs once the install is completed. Usersq is another module being ported to QML, a preview is included in this release, but is not the default users module yet. 

{% include image.html
            img="img/2021/kontact.png"
            title="Kontact 21.04"
            caption="Kontact 21.04"
            url="/img/2021/kontact.png" %}

The default mirror used for all KaOS installs is provided by [Fosshost](https://fosshost.org/){:target="_blank"}. Big change with Fosshost is that with just one mirror users will have access to a worldwide network of mirrors through [Fastly CDN](https://fosshost.org/news/fosshost-mirror-service-changes){:target="_blank"}. No longer is there a need to adjust a mirrorlist, you will always be connected to the fastest mirror in your area.

As always with this rolling distribution, you will find the very latest packages for the Plasma Desktop, this includes Frameworks 5.81.0, Plasma 5.21.3, and [KDE Applications 21.04.0](https://kde.org/announcements/gear/21.04/){:target="_blank"}.  All built on **Qt 5.15.2+**.

{% include image.html
            img="img/2021/vscodium.png"
            title="VSCodium"
            caption="VSCodium"
            url="/img/2021/vscodium.png" %}
This ISO means the end of the non-free Nvidia 340xx support in KaOS. This driver needed to be heavily patched since Linux 5.6, but now with Linux 5.11, loading the module completely fails SDDM. Since upstream pretty much abandoned this driver, it is time to remove from KaOS. Users with Nvidia cards prior to 2014 will need to switch over to the in-kernel modesetting driver or install nouveau. 

New applications added include VSCodium. Also new is support for [JPEG XL](https://jpeg.org/jpegxl/){:target="_blank"}, a modern option (and probable future replacement) for JPEG. Integration in the system is provided by **qt-jpegxl-image-plugin**, this allows you to open & view .jxl files seamlessly in Gwenview.

Updates to the base of this distribution were numerous and include a new GCC 10.3.0, Glibc 2.33 & Binutils 2.36.1 based Toolchain, with most of the core being rebuild on this new Toolchain, Systemd 247.6, Proj 8.0.0, Git 2.30.1, LLVM/Clang 11.1.0, Protobuf 3.15, Krb5 1.19.1, Poppler 21.04.0, Mesa 21.0.3, NetworkManager 1.30.4, ZSTD 1.4.9, Samba 4.14.3.  
Qt 5.15 does not receive updates or maintenance from the Qt company (only closed source, paid support is available). KDE has stepped up though and published [a maintained 5.15 fork](https://dot.kde.org/2021/04/06/announcing-kdes-qt-5-patch-collection). KaOS now regularly does a patch update from this fork for all of Qt 5.15, so it basically is now at 5.15.3.

{% include image.html
            img="img/2021/cala_finishedq.png"
            title="Installer final page in QML"
            caption="Installer final page in QML"
            url="/img/2021/cala_finishedq.png" %}

## Common Notes
The Linux kernel has all the needed ucode build-in for a fully automated Early Microcode update. 

KaOS uses the Systemd provided Systemd-boot for UEFI installs.

Included is a KaOS specific tool to write ISO files to USB. Not only does **IsoWriter** write to USB it also gives the option to recover your USB stick after using it for an ISO, something that regular dd copy or the previously used Imagewriter were not able to do.  New in this version is the ability to **verify the integrity of the written USB flash drive** in comparison to the downloaded ISO file.  This can be done in Dolphin too, right-click the ISO file, select Actions then select Verify ISO Write.

Since LibreOffice 6.2, it is now possible to supply this as a pure Qt5/kf5 application. **LibreOffice** has thus replaced Calligra as the default Office Application for KaOS.

KaOS' creation **Croeso** (Welsh for welcome) for helping with configuring a new install is included. It will run on the newly installed system and offers to adjust some 15 commonly used settings, includes a custom Wallpaper selector, distribution info, and the option to select packages to install from six different groups.  It is written in QML and fits well with the Welcome application used in the Live system.  The latter includes an Installation Guide.

{% include image.html
            img="img/2021/systemmonitor.webp"
            title="Plasma 5.21 Systemmonitor"
            caption="Plasma 5.21 Systemmonitor"
            url="/img/2021/systemmonitor.webp" %}

This ISO uses the **CRC and finobt enabled** XFS filesystem as default. CRCs enable enhanced error detection due to hardware issues, whilst the format changes also improves crash recovery algorithms and the ability of various tools to validate and repair metadata corruptions when they are found. The free inode btree does not index used inodes, allowing faster, more consistent inode allocation performance as filesystems age.

The artwork includes custom icon themes for light and dark themes. Midna and Midna Dark both create a complete unified look from boot-up all the way through logout.

There is an option to verify the authenticity of downloaded KaOS ISO files **through GPG signature verification**, see the [Download page](https://kaosx.us/pages/download/#authenticity-check){:target="_blank"} for further details and instructions.

## Known issues:
* Installing on RAID is currently not possible

To create **reliable** installation media, please follow the instructions from the [Download](http://kaosx.us/download/){:target="_blank"} page. KaOS ISO's **do not support Unetbootin or Rufus**, and DVDs need a burn speed **no higher than 4x**.
