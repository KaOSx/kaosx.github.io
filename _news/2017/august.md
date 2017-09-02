---
layout: news
title: August '17 status
permalink: /news/2017/august/
date: '2017-08-14 01:23:31 -0500'
date_gmt: '2017-08-14 01:23:31 -0500'
---
With Frameworks 5.37.0 and Plasma 5.10.4.1 moving to all users yesterday, it is time to announce the many changes again.
Last week [KDE Applications 17.08RC](https://www.kde.org/announcements/announce-applications-17.08-rc.php){:target="_blank"} became available for all KaOS users, expect 17.08.0 final to move to all users this coming Thursday.
            
## Kernel moving to Hardened
The biggest change to announce is one that is being tested with the linux-next kernel.  This kernel has moved to the  [hardened patch set](https://github.com/copperhead/linux-hardened/){:target="_blank"}, which provides an improved implementation of Address Space Layout Randomization for userspace processes.  Linux-hardened started after grsecurity was no longer available as an open source option and is a supplement to upstream kernel hardening work by the Kernel Self Protection Project. See the [Linux ASLR comparison](https://gist.github.com/thestinger/b43b460cfccfade51b5a2220a0550c35){:target="_blank"} for more information.

{% include image.html
            img="img/2017/bash_prompt.png"
            title="Bash prompt"
            caption="Custom Bash Prompt"
            url="/img/2017/bash_prompt.png" %}

Testing is going well, so expect the next stable kernel to move to hardened too.  The plan is to have this happening in early September and with that, a new ISO will be released.
            
## Updates in Theming/Default Look
As requested by [KaOS users](https://forum.kaosx.us/d/1980-artwork-refresh){:target="_blank"}, the next ISO will also have a custom look for the bash prompt.  This can be added to current installs too by installing `powerline`

The Midna Splashscreen was rewritten.  It now uses a few QML effects, see the short demo:

<iframe width="560" height="315" src="https://kaosx.us/media/splash.mp4" frameborder="0"></iframe>

## New Additions to the Repositories
[![](/img/2017/nomad.png){: .news-img-right}](/img/2017/nomad.png){:target="_blank"}

It has been a few years, but finally there is an up to date (Qt5/kf5 based) firewall application available again.
Nomad-firewall is available in the KaOS repositories

A second scan application is added. Kooka, just ported to kf5.  This application has quite a few more options then skanlite, so it is nice to be able to add a second (Qt/kf5 based) option for scanning.

Testing has started for Krita 3.2, and with it the new option to use the G'MIC plugin.  For that gmic-qt is added to the repo.  With this, the options to add effects to any artwork/image are sheer endless.

[![](/img/2017/kooka.png){: .news-img-right}](/img/2017/kooka.png){:target="_blank"}

## Repositories
Over the last five weeks a large part of the base of the system has been updated, this included Systemd 234, CMake 3.9, DBus 1.10.22, Git 2.14, E2fsprogs 1.43.5, Expat 2.2.3, XFSprogs and BTRFS-progs 4.12, hwids 20170715, Mesa 17.1.6, Udisks2 2.7.2, Gutenprint 5.2.13, Glew 2.1.0, all Texlive packages updated to 2017 and Libqalculate 1.0.0.

{% include image.html
            img="img/2017/krita.png"
            title="Krita 3.2RC with the G'MIC plugin"
            caption="Krita 3.2RC with the G'MIC plugin"
            url="/img/2017/krita.png" %}
            
For the Application, in the updates were in the hundreds, most notable are Libreoffice 5.4, Chrome 62, Kexi 3.2.0, Firefox 55.0.1, Skrooge 2.9.0, MellowPlayer 3.0.0 (with a complete rewrite to QML), Inxi 2.3.35, Inkscape 0.92.2 and Micro 1.3.1.
