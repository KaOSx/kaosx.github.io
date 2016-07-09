---
layout: news
status: publish
published: true
title: Early July '16 status
permalink: /news/2016/july/
date: '2016-07-09 01:23:31 -0500'
date_gmt: '2016-07-09 01:23:31 -0500'
---
This time a short status report.  Not because nothing has happened, but because all current work is not yet visible for users.

## Move to GCC 5
KaOS has waited a year to move to the new major version of GCC.  Last year it was clear it would take a good amount of time before the majority of the applications used here would be ready for this new compiler.  GCC 4.9 was still fully maintained so there was no need to rush to 5.
Now a year later all seems ready for GCC 5 and a complete rebuild of almost all packages in the KaOS repositories has started.  This is taking some time, plus all will be tested on some internal test ISOs too..
This means that after todays move of [**Frameworks 5.24.0**](https://www.kde.org/announcements/kde-frameworks-5.24.0.php){:target="_blank"} to all users, you will not see the regular daily to every other day updates as usual.  No updates have been build on GCC 4.9 for over a week now, all is now build on the GCC 5.4.0/Binutils 2.26.1 based Toolchain.

This is by far the biggest rebuild ever done for KaOS, once all is ready, most users can expect to see some thousand packages being updated.

## Repositories Updates
[![](/img/2016/tomahawk.png){: .news-img-right}](/img/2016/tomahawk.png)
[**Plasma 5.7.0**](https://www.kde.org/announcements/plasma-5.7.0.php){:target="_blank"} was made available to all users five days ago. Latest updates to Python 2 and 3, addition of qt5-virtualkeybaord (integrated in a Wayland session), new NSS, poppler, xf86-video-intel are some of the usual and ongoing moves in the repositories.
After [polling users](https://forum.kaosx.us/d/1515-music-player/){:target="_blank"}, two music players were added, one a returning kf5 based Amarok, the second is all new Qt 5 based Tomahawk

## July/August ISO
Because of the GCC 5 move a new ISO will be needed sooner then the more custom every 6-8 weeks release cycle.

