---
layout: news
title: Early June '16 status
permalink: /news/2016/
---
In contrast to last months status report, this time a much more upbeat announcement with lots of changes that have happened to report.

## New Website and Forum
This part is of course the most visible news of last month.  What you see now is a complete symplification of the design, no more CMS use, no more database for the site, just plain **HTML & CSS with Jekyll** used as generator.
The result is a faster site, way less resources needed for the server used.  Design goal too was to get to a very natural navigation.  No more submenus, all is a simple flat menu, with a simple way of reading any info by letting every page flow to the next.
[![](/img/2016/new_site.png){: .news-img-right}](/img/2016/new_site.png)
What is not visible is that all has moved to a new server too.  Previous server was already in use before KaOS started. That server is now End of Life.  And instead of going again with a major, fixed release based distro, this time a rolling distro was much preferred.  Since KaOS has been in use as the OS for the **Buildserver** since August 2013 (which has run for these almost 3 years without a single issue, even doing the complete KDE4 to KF5 switch over SSH), the same is chosen now for the main server.

Normally you never see a company name mentioned in these reports, this time an exception though.
The second server KaOS uses, this one is the main mirror for all packages runs on a [**Vultr**](https://www.vultr.com/?ref=6828453){:target="_blank"} VPS.  Now that a custom ISO was needed to be able to use KaOS as the main server, it should be pointed out that Vultr is one of the very few that lets you upload any system you like and deploy in a very simple way. Should you be in need of a server and wish to support KaOS then please use the Vultr link above, it will give KaOS credit should you sign up.

Next of the infrastructure move is the forum.  For a long time an alternative was thought for the used forum software, old was a ton of work to maintain, updates meant manually moving roughly 150 files each time, was heavy on resources and slow for lower powered systems. 
[![](/img/2016/touch.png){: .news-img-left}](/img/2016/touch.png)
Reason the move was not done sooner was issues with database migration to preferrer new forum options.
A brand new option became available though [**Flarum**](https://discuss.flarum.org/){:target="_blank"} is still in Beta, but offers all that was looked for.  Easy database migration, simple maintenance, intuitive extension system, modern use of Tags, unlimited scrolling, floating composer and very fast & light on resources.

## Kernel
A major change is coming with the Linux kernel 4.6.  Early Microcode loading has been a needed feature for many newer CPUs.  But has not have a simple implementation for Intel CPUs yet.  This is now changed with the kernel currently used as linux-next in KaOS. A complete new way of building all needed microcode right into the kernel and let the system update the microcode early complete seemless without any user intervention needed is now working for both AMD & Intel CPUs.  Expect this kernel to move to all users in the next week or two.

## Calamares
The KaOS used installer has a major new feature added, LUKS encryption is now available for both the automated full disk & automated replace a partition option.  It is still in Alpha status, but has been tested as working well.
[![](/img/2016/cala_luks.png){: .news-img-right}](/img/2016/cala_luks.png)

## Repo moves
Updates in Core include Glib2 move to 2.48 and all of the Glib2 stack rebuild for that.  [Systemd](https://github.com/systemd/systemd/blob/master/NEWS) moved to 230 with lots of changes, though KaOS is not using the new kill-user-processes option.  Waiting for more feedback before implementing that feature.
The usual KDE moves include updated to Frameworks 5.22.0, Plasma 5.6.4 & KDE Applications 16.04.1.

Qt 4 will leave the repos this month, luckily a few more have made the move to Qt 5/kf5 so won't have to be removed with this Qt 4 removal.  One example is [Kaffeine](https://blogs.s-osg.org/watching-digital-tv-via-kaffeine/)

## June ISO
Probably clear from all the above, but a new ISO will be needed this month.  Test cycle for the June ISO will start in 24-48 hours, expect this ISO to be released around the third week of June

