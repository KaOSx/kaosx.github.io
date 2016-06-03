---
layout: docs
status: publish
published: true
title: Pacman Guide
permalink: /docs/pacman/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1561
wordpress_url: http://kaosx.us/?page_id=1561
date: '2014-06-18 00:05:39 -0400'
date_gmt: '2014-06-18 00:05:39 -0400'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

Some very basic commands.

### To update the system
```
sudo pacman -Syu
```
Update the database:

```
sudo pacman -Syy
```

### Installing
To install a package (always run pacman -Syu, before installing):

```
sudo pacman -S package_name
```
To install a local package, or from a website:

```
sudo pacman -U /path/to/the/package
```
To re-install all packages (those from the repo's), in case of emergency:

```
sudo pacman -Sy $(pacman -Q | cut -d " " -f1 | grep -v "$(pacman -Qm | cut -d " " -f1)")
```

### Removing Packages
If you want to only remove the package, the following command is sufficient:
```
sudo pacman -R
```
To remove the package and those of its dependencies that aren't needed by any other application, do

```
sudo pacman -Rs
```
Finally, to remove the package, avoid orphaned dependencies and erase its global configuration, type

```
sudo pacman -Rns package_name```

which in most cases is the proper command to remove software.

### Searches/Queries
Info about an installed package:

```
pacman -Qi package_name
```
Queries the repo about a package:

```
pacman -Ss package_name
```
Queries the repo about a packages, and all that depend on it:

```
pacman -Sii package_nam
```

### Howto
List and Remove Installed Packages that are not in the Official Repositories:

If you want a list of the packages you installed and are not in the official repositories, you can run this script:

```
#! /bin/bash

installed=`pacman -Q | sed -e "s|(.*[^ ]*) .*|1|g" `
repos=`pacman -Sl | sed -e "s|[^ ]* (.*[^ ]*) .*|1|g"`

for pkg in $installed
do
found=`echo $repos | grep $pkg`
if [ "$found" == "" ]; then
echo $pkg
fi
done
# end
```

Save it in a file, give it execution permission (chmod +x file.sh) and run it:

```
./file.sh
```
It will print the packages you have installed which are not in the official repositories. You can also send the list to a text file:

```
./file.sh > foreignlist.txt
```
Then, you can edit the list (to remove from it the software you still want in your system), and once the list has only software packages you want to remove, you can run this command to remove those:

```
sudo pacman -R $(cat foreignlist.txt)
```

### Pacman is completely broken! How do I reinstall it?
In the case that pacman is broken beyond repair, manually download the necessary packages (openssl, libarchive, and pacman) and extract them. The pacman binary will be restored along with its default configuration file. Afterwards, reinstall these packages with pacman to maintain package database integrity. You can use this command to extract them.

```
sudo tar -xwvpf <i>package_name-version.tar.xz</i> -C / --exclude .PKGINFO --exclude .INSTALL
```

More info: [http://wiki.archlinux.org/index.php/Pacman](http://wiki.archlinux.org/index.php/Pacman">http://wiki.archlinux.org/index.php/Pacman)
