---
layout: docs
status: publish
published: true
title: Packaging Guide
permalink: /docs/package/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 469
wordpress_url: http://www.kde-os.tk/?page_id=469
date: '2013-08-14 16:37:37 -0400'
date_gmt: '2013-08-14 16:37:37 -0400'
categories: []
tags: []
comments: []
---
KaOS has limited repositories, for many users the options available will be plenty. When that is not the case, one of the reasons why Pacman was chosen for package manager comes into play. It offers about the easiest solution available to build your own packages (through makepkg). Plus there are tens of thousands readily available package scripts (PKGBUILD) through the many distributions that use pacman.

* This will become a table of contents (this text will be scraped).
{:toc}

Debian based distributions (for example), offer the option to add PPA's, but those are binary packages, so there is no control over what exactly is added, and on what dependencies they were build. A much cleaner and safer way to add your missing packages is build them locally.

This tutorial will cover how to get the needed package scripts from various GIT archives and community repositories many distributions use.

### Preparation
It is easiest to set up a build directory within /home. Throughout this tutorial we'll be using <strong>GUI options</strong> whenever possible, so for adding the directory, open Dolphin.<a href="http://kaosx.us/wp-content/uploads/2013/08/new_folder1.png"><img src="http://kaosx.us/wp-content/uploads/2013/08/new_folder1-150x150.png" alt="new_folder" width="150" height="150" class="alignright size-thumbnail wp-image-655" /></a> Right click in your home directory and select <strong>"Create new"</strong> &rarr; <strong>"Folder"</strong>. For this example we'll call the folder <strong>"build"</strong>.

Next make sure all the needed packages for compiling are installed. Those needed are in a group called "base-devel":
<code>sudo pacman -Syu</code>
<code>sudo pacman -S base-devel</code>
And select default to install the whole group.

### Getting package scripts

#### KaOS Community Packages
<a href="https://github.com/KaOS-Community-Packages" title="KaOS Community Packages">KCP</a> is where KaOS users can share their created package <a href="http://kaosx.us/wp-content/uploads/2013/08/snapshot5.png"><img src="http://kaosx.us/wp-content/uploads/2013/08/snapshot5-150x150.png" alt="split_full" width="150" height="150" class="alignright size-thumbnail wp-image-1086" /></a>scripts.  You can search by package name or by description, once you found your desired package, click on "Download ZIP".<br />
Going back to dolphin, and the newly created "build" directory, click on <strong>"split"</strong>, and navigate in the right, newly opened panel to the directory where your downloads go.

Click the just downloaded package zip, this will open the zip file in Ark. select "Action" &rarr; "Extract" &rarr; "Extract to", and select your download directory.<a href="http://kaosx.us/wp-content/uploads/2013/08/snapshot6.png"><img src="http://kaosx.us/wp-content/uploads/2013/08/snapshot6-150x150.png" alt="snapshot6" width="150" height="150" class="alignright size-thumbnail wp-image-1088" /></a> This will create a folder in the current directory, with the PKGBUILD and needed support files. Back in Dolphin, drag this folder to your "build" directory in the left pane.

#### ABS
The package <strong>ABS</strong> (Arch Build System) is available in the KaOS repository:
<code>sudo pacman -S abs</code>
This package contains a configuration script, /etc/abs.conf
To edit it you need root access to the file:
<code>kdesu kate /etc/abs.conf</code>
Edit so it shows:
<code>ARCH="x86_64"</code>
and in the <strong>REPOS=</strong> section enable or disable desired repo's by removing or adding "!".
Next run:
<code>sudo abs core</code>
Followed by:
<code>sudo abs</code>
Now you have all the needed files in the /var/abs directory (make sure to run sudo abs regularly, as to have the latest versions).<a href="http://kaosx.us/wp-content/uploads/2013/08/split.png"><img src="http://kaosx.us/wp-content/uploads/2013/08/split-150x150.png" alt="split" width="150" height="150" class="alignright size-thumbnail wp-image-658" /></a>
Going back to dolphin, and the newly created "build" directory, click on <strong>"split"</strong>, and navigate in the right, newly opened panel to /var/abs.
For this example, we'll get the "kile" folder from "extra". So in /var/abs, click on "extra", look for the "kile" folder, then drag that folder to you left panel, which is your build folder.

#### AUR &amp; CCR
These are user/community maintained repositories, the quality of the packages varies greatly so use <strong>extra precaution when using these</strong>, and always thoroughly check the PKGBUILD.
<a title="AUR" href="https://aur.archlinux.org/">https://aur.archlinux.org/</a>
<a title="CCR" href="http://chakraos.org/ccr/">http://chakraos.org/ccr/</a>
Search for your desired package, click on "Download tarball" or "Tarball". In dolphin, have the split pane setup again, and in the right pane<a href="http://kaosx.us/wp-content/uploads/2013/08/untar.png"><img src="http://kaosx.us/wp-content/uploads/2013/08/untar-150x150.png" alt="untar" width="150" height="150" class="alignright size-thumbnail wp-image-660" /></a> navigate to the directory where your downloads go. Right click the just downloaded package tar, select "Extract" &rarr; "Extract Archive Here". This will create a folder in the current directory, with the PKGBUILD and needed support files. Drag this folder to your "build" directory in the left pane.

#### Git Archives
Most distributions have public archives of all package build files in <strong>git</strong> (can be gitorious or github or any other variation). There you can access individual files, or download an entire repositories build files in one zip. For this example we'll use KaOS apps github:
<a title="apps" href="https://github.com/kaosx/apps">https://github.com/KaOSx/apps</a>
You can click on an individual package &rarr; click on a file or PKGBUILD &rarr; click on "Raw", then copy/paste the file in kate. Create a folder in your "build" directory with that package name, and save the file in that folder. Repeat for all files from that package.
Or you can download the entire repository by clicking on the "Download zip" button. And repeat the steps for untarring and moving as explained in the <a title="AUR &amp; CCR" href="#AUR_038_CCR">AUR &amp; CCR</a> section.
Exmple links to git(hub):
<a title="antergos" href="https://github.com/antergos">https://github.com/antergos</a>
<a title="Frugalware" href="http://git.frugalware.org/">http://git.frugalware.org/</a>
<a title="Parabola" href="https://projects.parabolagnulinux.org/">https://projects.parabolagnulinux.org/</a>

### Building a package
With the sources in place, build tools added, it is time to start building a package. Now we have to leave GUI, and work in the console. Let's use Yakuake for this. Hit F12 to roll out Yakuake, and change directory (cd) to your build folder with the desired package. Let's again use kile.
<code>cd build/kile</code>
the call to start to build, and install the needed dependencies:
<code>makepkg -s</code>
or you can choose to build, and once the build is finished, install:
<code>makepkg -si</code>
Once the dependency checks have finished, this build will fail,<a href="http://kaosx.us/wp-content/uploads/2013/08/error.png"><img src="http://kaosx.us/wp-content/uploads/2013/08/error-150x150.png" alt="error" width="150" height="150" class="alignright size-thumbnail wp-image-661" /></a> since the PKGBUILD calls for Arch-Linux specific packages "kdebase-runtime" and "kdebase-katepart". Open the PKGBUILD file, and in the <strong>depends=</strong> line, edit kdebase-runtime and change to kde-runtime, edit kdebase-katepart and change to kdesdk-kate (both are what upstream uses) and run the makepkg command again.

If you know a newer version of a package is available, or prefer to use an older version, edit the <strong>pkgver=</strong> line, and change to your desired version. If you decide to get a different version, you'll need to get the correct md5sum (sha1sum) from the new tar.<a href="http://kaosx.us/wp-content/uploads/2013/08/sha1.png"><img src="http://kaosx.us/wp-content/uploads/2013/08/sha1-150x150.png" alt="sha1" width="150" height="150" class="alignright size-thumbnail wp-image-662" /></a> Safest is to get this directly from the upstream source, but since it is not always easily available or published, you can use makepkg for this too:
<code>makepkg -g</code>
Edit the md5sums= or sha1sum= with the hash numbers generated by that call.

If a depency of a package you are trying to build is not available in the KaOS repository, you'll need to build and install that dependency first. Different distributions use different names for the same packages as you saw in the example of kile, so check the KdeOS repository if a needed dependency is available under a <strong>different name</strong>, and use that name in the depend= or makedepends= line. KaOS tries to follow <strong>upstream naming as much as possible</strong>, and keeps splitting of packages to a minimum, which ends up introducing many new names in other distributions.

#### Installing the newly build package
If you choose not to use makepkg -i, then install your just build package (which is created in the current directory) with:
<code>sudo pacman -U package_name</code>

### List of Common Renames
In this section you'll find regularly updated, known different package names, and what conversion name to use.

One big difference to note, not a name change, but file system structure.  KaOS keeps more in line with most mainstream distributions (and most package development), to have regular files and binaries in /bin, /lib, /sbin, /usr/sbin.  There is no use of thousands of symlinks to try and move all to /usr.  So whenever you see a configuration mentioning "sbin=/usr/bin", remove that line.  Kernel is packaged in /lib, so for linux-kernel packaging, do not use /usr/lib with symlinks back to /lib.

KaOS uses versioned names for python, namely python2 and python3, make sure the package you are trying to build does not fall back to just python, since that might mean it needs python3.

Starting with Qt5 KaOS will use unique names for Qt versions, this won't change in Qt4, so make sure to use qt when a PKGBUILD mentions qt4. Also the qmake call for Qt5 needs to be specified, since it is packaged so it does not conflict with Qt4 (or any other Qt version for that matter). Make sure to replace "qmake" with "/usr/lib/qt5/bin/qmake" for any package that needs Qt5 to build.

Python Qt binding packages are called, "pyqt-python2" or "pyqt-python3" for Qt4 versions, for Qt5 there is "pyqt5-python3".

KDE developers abandoned the "kdebase" prefix for many of their packages two years ago, instead it is just "kde" as in "kde-workspace", kde-runtime". That naming scheme is followed in KaOS.
