---
layout: news
status: publish
published: true
title: Early December '16 status
permalink: /news/2016/december/
date: '2016-12-06 01:23:31 -0500'
date_gmt: '2016-12-06 01:23:31 -0500'
---
For most, it will have looked like a quiet 4-5 weeks since the November ISO release. Work on KaOS as always is steadily continuing though. As usual, most efforts went into keeping the repositories in the best shape possible. Artwork got it's fair share of attention too.

## Repositories
To get ready for **KDE Applications 16.12**, the release candidate has entered the build repository. Most times the kde-next repository is used for this, but the exception is made because this week the final version will already be tagged plus almost all the remaining git builds of KDE Applications are now finally released as stable, kf5 based tars. It is for example no longer needed to create git builds of Okular, kde-baseapps (now split into four, shipped as applications like Konqueror, KFind and KDialog), KTouch and Kalzium. New for 16.12 will also be the final split of the **PIM group**.  Previous kdepimlibs and kdepim-runtime were split into about fifty new packages and libraries, now kdepim is no longer released as one tar and will be removed from your install once all moves to the stable repositories. In its place **KMail, KOrganizer, Akregator, KNotes, Kontacts, Kalarm, Kaddressbook and Blogilo** are now released as standalone applications.

{% include image.html
            img="img/2016/midna.png"
            title="Midna 2017"
            caption="Midna getting ready for 2017"
            url="/img/2016/midna.png" %}

The new KDE Applications are built on the latest Frameworks 5.29.0 and Plasma 5.8.4.1, expect to see these updates coming your way this weekend.

Linux-next has a change as to how the kernel image is created. Instead of using an install file that only gets called on kernel updates, a new **hook file** is used. Advantage of this is that image creation is now triggered for many more instances like filesystem and systemd updates, so you won't see the mismatched systemd version on systemd updates without manually updating the kernel image.  Expect to see this added in the regular kernel once it moves to linux 4.9.

New addition to the repositories is Muse, hopefully a Qt5 based equivalant to GTK based Ardour.
{% include image.html
            img="img/2016/muse.png"
            title="Muse"
            caption="Muse"
            url="/img/2016/muse.png" %}

Calligra's move to kf5 is now also complete, no longer needed to ship git checkouts. **Calligra 3.0.0** was just released as a first stable kf5 based version.

Curl and Wget had *Public Suffix List* support added through the addition of libpsl.  Major updates to Hunspell, Protobuf, Jasper, FFmpeg, Poppler, OCaml and Gpgme triggered needed rebuilds of close to two hundred packages.  This will increase by another two hundred for the just started icu/boost and llvm updates. The latter updates won't enter the build repository until Qt 5.7.1 is released and all can be build on that too. Expect to see all this done in 3-4 days.

As you see, this time a bit more details about repositories maintenance, it is the backbone of this distribution.....

[![](/img/2016/sddm_w.png){: .news-img-right}](/img/2016/sddm_w.png)

## Artwork
KaOS user **Pablo** has created a new wallpaper for use in 2017.  All of Midna is adjusted to fit this new wallpaper. SDDM now sports a very different, layered setup.  With this, the selection between a regular Plasma or Wayland session are much more obvious and an icon will show what session you will log into.

For many Amdgpu and ATI/radeon graphics cards, the Wayland session is now equal to regular Plasma. Most is quite complete for Intel and Nouveau too, except a major system hang when *Logout* is selected.





