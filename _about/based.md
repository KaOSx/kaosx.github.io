---
layout: about
status: publish
published: true
permalink: /about/based/
title: Independent
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 28
wordpress_url: http://www.kde-os.tk/?page_id=22
date: '2013-04-27 21:38:53 -0400'
date_gmt: '2013-04-27 21:38:53 -0400'
categories: []
tags: []
comments: []
---
### KaOS is NOT another Arch based distribution, right?
Any time a new distribution is announced, the question always comes, why another one? A distribution like KaOS does not start building roughly 2000 packages from scratch, sets up all infrastructure for repositories, code, website, forum, build-system, ISO releases, if another distribution fulfilled the need. It takes a lot of time and effort, so this only happens because no other distribution offers what those behind KaOS want. Explaining the goals of KaOS in contrast to other distributions does in no way mean there is a right or wrong way, each distribution will be able to tell you why they think their goals are the best, that is why the diversity.

Reading <a title="kaosx.us" href="http://kaosx.us/">the home page</a> where the focus is explained, shows the big difference with Arch Linux. Arch Linux does not want to make choices, it is up to the user to set up a system like they want, everything is packaged so any and all Desktop Environments (or none) are supported. Arch Linux is also bleeding edge rolling, whereas KaOS is a bit more conservative. Packages that are still maintained in an older version and were many in KDE depend on, will not move to the latest, until most upstream projects have caught up with the newer version (examples gcc 8 is still fully maintained, while gcc 9 is the latest, same for php 7.2, or opencv 3.4.8).

After the choice of KaOS to use the Linux kernel for this rolling distribution, it was decided the best fit for package management was pacman. Does using pacman mean a distribution is based on Arch? What about the other tools and packages used from a variety of distributions? First thing you see when booting a KaOS ISO is gfxboot, a tool from OpenSuse. Other important packages used from OpenSuse are hwinfo and imagewriter, does this make KaOS based on OpenSuse? Or the hardware database, a package from the Gentoo developers, systemd came originally from Fedora. As KaOS sees it, try to find the best available tools for this distribution and keep evaluating what comes available, and the best for this distribution will come forward.

When stating a distribution is based on another, that means in 99% of the cases, that distribution uses the repositories of the distribution it is based on (mostly 90% plus is from upstream then, added with some repositories for specific settings). For KaOS there are no "upstream" repositories, every package in every repository is build from scratch by and for KaOS.

When comparing to any other distribution, you might want to check some of these points. KaOS is rolling, all packages. No package will be older than one year, even if no updates, it will be rebuilt, so everything integrates as good as possible. KaOS has set a clear and primary focus on packaging from the start, developing new tools (new package manager for example) are not part of the goals, neither is creating and maintaining the infrastructure for a community repository, KCP is fully using any and all that github offers to have such a repository. KaOS wants to keep all as simple as possible. Users are offered a GTK free base after the initial install, but there is no separation to use any GTK after that start.

The model used for the rolling kernel is quite different too. There are two versions available in KaOS, the stable "linux" kernel, and the latest, fully rolling "linux-next" kernel. Any new major kernel release is tested at least 6 weeks as linux-next, once the upstream update rate and amount of patches used in every update (usually around x.x.8 or above) slows down and all tests well, that linux-next version moves to be the new stable kernel.

In KaOS there are just three repositories in use, this greatly increases transparency and ease of use for the user and from a development point of view, significantly simplifies things.

Splitting of packages is held to minimum in KaOS too, with one toolkit, one DE there is no need, another way of simplifying things. Filesystem used follows mainstream Linux distributions and application development as much as possible. This means that /lib, /bin, /sbin, /usr/sbin contain regular files and binaries, these are not filled with symlinks. A move to get all those in /usr might be best in the future, but at this stage, needing thousands of symlinks to make that work is not what KaOS sees as a clean and simple solution.
