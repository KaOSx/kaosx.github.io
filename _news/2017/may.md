---
layout: news
title: May '17 status
permalink: /news/2017/may/
date: '2017-05-10 01:23:31 -0500'
date_gmt: '2017-05-10 01:23:31 -0500'
---
After skipping last month status news due to the time coinciding with the April ISO release, it is back on track for one of these monthly reports.

{% include image.html
            img="img/2017/qgit.png"
            title="QGit"
            caption="GUI for git commands"
            url="/img/2017/qgit.png" %}
            
## Package Removals & Additions
A clean-up of old and complete unmaintained packages has happened over the last few weeks (along with a rebuild of packages older than one year).  This means the repositories are down to a total of under 2050 packages, thus there is some room to add a few new.  Goal remains to stay around 2100 packages.
First added is a GUI for git, something that was not in the repositories yet. QGit is a Qt5 based comprehensive application for this.

[![](/img/2017/browser_integration.png){: .news-img-right}](/img/2017/browser_integration.png)

Next addition is **plasma-browser-integration**.  This gives Google-Chrome (and soon Firefox too) a fully Plasma 5 integrated extension for media controls, using web images as desktop backgrounds, integration with KDE-Connect among others.

One well-known music player has finally left the KaOS repositories, Amarok.  It has been almost four years of waiting if maintenance will be picked up again, a completed port to kf5 will be implemented.  With the emergence of two new, very actively developed Plasma 5 based music players, it is time to remove Amarok (along with another, Tomahawk).  These new added are **Babe and Elisa**, no stable release for either one yet, but far enough along to be fully usable, thus git builds of both are available in KaOS.

[![](/img/2017/elisa.png){: .news-img-left}](/img/2017/elisa.png){:target="_blank"}

[![](/img/2017/babe.png){: .news-img-right}](/img/2017/babe.png){:target="_blank"}

Another added is [QDirStat](https://github.com/shundhammer/qdirstat/blob/master/README.md){:target="_blank"} is a graphical application to show where your disk space has gone and to help you to clean it up.

To help users to work with Windows Remote Desktop Services, [Rdesktop](http://www.rdesktop.org/){:target="_blank"} is now available.

## Repositories
A larger than usual amount of updates and rebuilds has taken place. The updates to Boost 1.63.0, Glib2 2.52.2, Protobuf 3.3.0, x265 2.4 among the many others triggered large needed rebuilds.  The Gstreamer packages moved to 1.12.0, FFMpeg 3.3 needed a few rebuilds.

Adding to that were the rebuilds of almost 200 packages which had not had an update or rebuild for over a year.

Today all of your Frameworks, Plasma 5 and KDE Applications will be updated too.  For the last week, the complete KDE set has been tested as Frameworks 5.34.0, Plasma 5.9.5.1 and [KDE Applications 17.04.1](https://www.kde.org/announcements/KDE Applications 17.04.1.php){:target="_blank"}

{% include image.html
            img="img/2017/latest_builds.png"
            title="Excerpt of the latest builds"
            caption="Excerpt of the latest builds"
            url="/img/2017/latest_builds.png" %}
            
As always when large amounts of packages move, make absolute sure your mirror is synced before starting an update.  Either open Octopi to start the update --it will automatically show you if your mirror is synced-- or run `mirror-check` before updating.

A new [German mirror](https://mirror.alpix.eu/kaos/) is added thanks to [Alpix](https://alpix.eu/).

## Website
To follow what is being worked on you now have the option to see an excerpt of the latest builds on the Home page with day and time stamp added.  A link to the full build repository is still available.

## ISO Verification
A new option is the addition to verify the authenticity of downloaded KaOS ISO files through GPG signature verification, see the [Download page](/pages/download/#authenticity-check) for further details and instructions.

## KDE-next Repository Reopened
And finally for this news item, Qt 5.9 beta plus Plasma 5.10 beta are up in the kde-next repository. This to get ready for the release of Qt 5.9.0 later this month. All of Frameworks 5.34.0 has been rebuild on this new Qt version, expect most of KDE Apps 17.04.1 to see a rebuild too. See [the forum]("https://forum.kaosx.us/d/1917-qt-5-9-beta3-and-plasma-5-9-95-up-in-kde-next/3") to participate in testing and getting all in as good a shape as possible before moving to all users in a few weeks.












