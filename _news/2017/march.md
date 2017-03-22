---
layout: news
title: March '17 status
permalink: /news/2017/march/
date: '2017-03-21 01:23:31 -0500'
date_gmt: '2017-03-21 01:23:31 -0500'
---
It has been a while since one of these monthly status reports has been published. Part because of ISO releases coming at a time when these reports would usually be published, partly because of some time constraints.
There has been more news though then what needs reporting for a new ISO, so in this report, all changes of the last two and a half months will be added.

{% include image.html
            img="img/2017/package_viewer.png"
            title="Package Viewer"
            caption="Additional options in the Package Viewer"
            url="/img/2017/package_viewer.png" %}
            
## Online Package Viewer
When wanting to get info about the KaOS repositories there never is a need to have KaOS installed or all repositories enabled, the Online Package Viewer gives you the option to have very complete info about what is available.  So far you were always able to search for all packages, see what a package depends on, file listing, build date, size, upstream url, description, links to commits, PKGBUILD & bug reports, the option to flag a package as outdated and download a package.  Added now is the option to see which package(s) require the selected package, what the makedepends are and when applicable, see the opdepends.

## Repositories
Quite a lot of changes to report here for the last five weeks. A new major Systemd release (233) required changes in how the Live environment needs to run, it took a half dozen internal test ISOs to have all that working correctly again.  Mesa has moved to the 17 series (currently at 17.0.2), this looked for a little while that it would break the use of QtWebengine on Nouveau systems again, but luckily the three needed nouveau patches could be adjusted to have no such issues. New poppler, libbluray and libarchive required the usual sizeable rebuilds.  A major CVE caused a quicker than normal update of the stable kernel, Linux 4.9.12 was moved to all users shortly after receiving the 4.9.10 update.

[![](/img/2017/heaptrack.png){: .news-img-right}](/img/2017/heaptrack.png)

For KDE, all the latest is available, that means **Frameworks 5.32.0 and KDE Applications 16.12.3** for all users and [Plasma 5.9.4](https://www.kde.org/announcements/plasma-5.9.4.php){:target="_blank"} entered the build repository today so will move to all in about 3-4 days.

A few packages, mainly libraries no longer needed by any, left the repositories, thus some more was created to have a few additions.  KDE released a new tool, **Heaptrack** traces all memory allocations and annotates these events with stack traces.

In the search of a just working video/voice/chat client, that is cross-platform,  easy to use, full-featured and secure, another option is now available.
qTox had been up a while, but development for an android app, for example using tox is not really in a usable state (and not really easy to use either).

[![](https://cdn-images-1.medium.com/max/1000/1*v-BOzDuxo3nUXvw-tYbbtg.jpeg){: .news-img-right}](https://cdn-images-1.medium.com/max/1000/1*v-BOzDuxo3nUXvw-tYbbtg.jpeg)

That is why [wire-desktop](https://wire.com/en/) is added, easy to use, apps for all devices and platforms, secure & opensource, just not Qt based but gtk2/nodejs.  This should be a viable Skype replacement for most users.

**Clipgrab** left the repositories about a year ago, due to there not being a Qt5 port, that has changed so clipgrab is back (build from a Qt5 fork).

[![](/img/2017/clipgrab.png){: .news-img-right}](/img/2017/clipgrab.png)

Another addition is the return of **kde-dev-utils**, it finally has moved to kf5 and will be part of the upcoming KDE Applications 17.04.  Not added but now also fully moved to kf5 is **Basket**, the first port to Qt5 used in KaOS did not have any Plasma integration, now it fully integrates again.

## Installer and ISO changes

These changes you won't be able to see until the next stable ISO is released, but two rather big improvements to a KaOS install are implemented.  First the Live mode in a VirtualBox environment now automatically uses the correct display settings and can be scaled automatically too.  This will carry over to the installed system on VirtualBox.  Calamares has code added to detect such an install and a post install job will ensure the needed modules and drivers for this are installed.

{% include image.html
            img="img/2017/vbox.png"
            title="Improved install options"
            caption="Improved Live mode and install options"
            url="/img/2017/vbox.png" %}
            
Second, Calamares is now capable of using the superior GPT partitioning table on BIOS systems too.  This so far is only an option for manual partitioning, and an info box is added how to use GPT when you select manual partitioning on a BIOS system.
See the image, internal test ISO, this is the resolution it boots in without any adjusting.

Expect to see these improvements in the upcoming April ISO.﻿

A new, https US mirror is added, <https://mirror.math.princeton.edu/pub/kaoslinux/>
This should be just about the fastest mirror yet.﻿








