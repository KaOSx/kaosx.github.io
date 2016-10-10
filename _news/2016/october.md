---
layout: news
status: publish
published: true
title: Early October '16 status
permalink: /news/2016/october/
date: '2016-10-10 01:23:31 -0500'
date_gmt: '2016-10-10 01:23:31 -0500'
---
After skipping last month status news due to the time coinciding with the September ISO release, it is back on track for one of these monthly reports.

## Wayland
With the move to [**Plasma 5.8.0**](https://www.kde.org/announcements/plasma-5.8.0.php){:target="_blank"} and Frameworks 5.27.0, using a Wayland session for Plasma is getting much closer to being able to be used as default.  It won't replace X11 session yet for the next ISO, but during the test cycle an ISO that defaults to a Wayland session will be uploaded.  Adjustments for the Live session and the installer to exclude not supported non-free Nvidia have already been implemented and need to be tested.

One adjustment all current KaOS users will have to make to be able to run a Wayland session is to move away from any aurorea based window decoration.  Default used has been MidnaFlat for a while, this will no longer be the case.  The only window decoration that is fully Wayland ready is Breeze based, so make sure to switch to that one.  The Midna color scheme has been adjusted so Breeze will fit nicely with the rest of the Midna theme.

## Repositories
It is very slow going to get all of  Calligra to a stable kf5 based release.  Parts that were split off from the old Calligra are now kf5 based with a stable release.  Krita was released that way a few months ago, Kexi followed with stable kf5 based 3.0.0 release early this month.  Hopefully, the remaining parts of Calligra will see stable release soon too.

Packages added include the all new Kio-Gdrive.  This will give you an option to access your Google drive from Dolphin.  Re-added is KShutdown, freshly kf5 ported.  Image shows the new default window decoration too.
[![](/img/2016/kshutdown.png){: .news-img-right}](/img/2016/kshutdown.png)

Another new addition is [**Now-Dock**](https://store.kde.org/p/1151047/){:target="_blank"}, a Plank or Mac like launcher for Plasma 5.

Linux 4.8 has included support for many more ATI/Radeon cards to start using the amdgpu driver.  Linux-firmware has received many updates to for this.  So anyone with an ATI/Radeon card from about 2013 or newer can now try amdpgpu by adding the [**linux-next kernel**](https://kaosx.us/docs/kernels/){:target="_blank"}


