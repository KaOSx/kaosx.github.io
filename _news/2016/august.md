---
layout: news
status: publish
published: true
title: Early August '16 status
permalink: /news/2016/august/
date: '2016-08-07 01:23:31 -0500'
date_gmt: '2016-08-07 01:23:31 -0500'
---
After the mass rebuild for GCC 5 last month, it has been a bit more quiet in the repositories.  The usual KDE related updates include [**Plasma 5.7.3**](https://www.kde.org/announcements/plasma-5.7.3.php){:target="_blank"} and Frameworks 5.25.0 has just entered the build repository (to be available for users in seven days).
The kde-next repository was reopened to get ready for [**KDE Applications 16.08**](https://www.kde.org/announcements/announce-applications-16.08-rc.php){:target="_blank"}. The beta release was build two weeks ago, now the Release Candidate is available.  This includes a further splitting of the kdepim group.  Kdepimlibs is no more, what was left of it is now split into another three new packages.

Updates to the base of the system included systemd 231, glew 2.0.0, protobuf 3.0.0 and libvpx 1.6.0 of which the last three required sizeable rebuilds of all depending on those three.

## First Run Settings Wizard
[![](/img/2016/kaptan.png){: .news-img-right}](/img/2016/kaptan.png)
A new addition for KaOS is a system settings wizard which will run on new installs.  This wizard will make it possible to customize the system in just a few clicks.  It will help new users of KaOS to set their system as they like.  Plus it gives the option to show some needed information as how to get help and to get in touch.
This application is **Kaptan** and is a fork of [**Pisi Linux Kaptan**](https://github.com/PisiLinuxNew/kaptan){:target="_blank"}.  Thanks goes out to the Pisi developers for creating this tool and porting it to (Py)Qt5.
Kaptan is adjusted for KaOS with new code added and more options are shown.  It is also available on [**Transifex**](https://www.transifex.com/kaos/kaos/kaptan_ents/){:target="_blank"}, so if you are interested in helping with translations, go and sign up at Transifex....

Expect to see Kaptan on the next ISO, probably around the middle of September.

## Vultr Sponsors KaOS
[Vultr](https://www.vultr.com/?ref=6828453){:target="_blank"} has provided KaOS with a generous sponsorship.  This made it possible to double the amount of servers used.  Plus the main server running KaOS (used for the website, forum, package mirror) is expanded and will be used as a build server too when needed.

The extra servers meant new mirrors in Sydney, Australia and Frankfurt, Germany.  Now the main server used to upload packages to and the default mirror set for all users are under full KaOS control.  So there no longer is a need to try and get in touch with the owner of a default mirror should issues arise.

