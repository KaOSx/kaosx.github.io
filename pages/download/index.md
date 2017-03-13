---
layout: page2
status: publish
published: true
title: Download
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 27
wordpress_url: http://www.kde-os.tk/?page_id=2
date: '2013-01-24 21:03:41 -0500'
date_gmt: '2013-01-24 21:03:41 -0500'
categories: []
tags: []
comments: []
---
KaOS makes regular ISO releases available, so any (new) user is not confronted with a large or complicated first update. Those who already have KaOS installed do not need to reinstall, a regular `sudo pacman -Syu` will always give you the latest.

* This will become a table of contents (this text will be scraped).
{:toc}

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2017.02 ISO

**MD5SUM KaOS 2017.02:**  `a9533c7a0ec43f1be5303a6ab8dedf43`

### Current Version
{: .offset}
The February version ships with Plasma 5 as the default desktop, it includes non-free nvidia drivers, all language packs, KDE Applications 16.12.2, linux kernel 4.9.10 (linux-next is in the repo's, following the 4.10 series), glibc 2.25, systemd 232, kmod 23, xorg-server 1.19.1, Qt 5.8.0, mesa 13.0.3, calligra 3.0.0.1, Cantata and the latest versions of qupzilla, octopi, kde-telepathy, seafile, gcc 5.4.1.
For those wondering about gtk apps, firefox 51.0.1, chrome 58, thunderbird 45.7.1, ardour 5.6.0 are among the available in their latest version.

### Known Issues
{: .offset}

* If you want to use a GPT partition table on a BIOS system, make sure to use manual partitioning, set it up with 8 MB of unformatted space as the start of your partition layout and set the bios_grub flag to it
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create reliable Media for booting the Live ISO, please select USB or DVD and follow the instructions for either using a USB flash drive or DVD disc.
Though UEFI booting is supported, **Secure Boot is not at this time**.  See [this link](https://rol.im/securegoldenkeyboot/){:target="_blank"} for more on Secure Boot.
