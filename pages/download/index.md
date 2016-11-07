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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2016.11 ISO

**MD5SUM KaOS 2016.11:**  `0f77dd6f579a1f1f62731fed16d14062`

### Current Version
{: .offset}
The September version ships with Plasma 5 as the default desktop, it includes non-free nvidia drivers, all language packs, KDE Applications 16.08.2, linux kernel 4.8.6 (linux-next is in the repo's, following the 4.8 series), glibc 2.23, systemd 232, kmod 23, xorg-server 1.18.4, Qt 5.7.0, mesa 13.0.0, calligra 3.0Alpha, Cantata and the latest versions of qupzilla, octopi, kde-telepathy, seafile, gcc 5.4.0.
For those wondering about gtk apps, firefox 49.0.2, chrome 56, thunderbird 45.4.0, ardour 5.4.0 are among the available in their latest version.

### Known Issues
{: .offset}

* If you do not want to install a bootloader, do not use any of the automated partitioning options, select manual for this.  See [the bug report for the installer](https://calamares.io/bugs/browse/CAL-388){:target="_blank"} regarding this.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a title="GPT on BIOS" href="{{ site.baseurl }}/docs/bios_gpt/">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID or LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create reliable Media for booting the Live ISO, please select USB or DVD and follow the instructions for either using a USB flash drive or DVD disc.
Though UEFI booting is supported, **Secure Boot is not at this time**.  See [this link](https://rol.im/securegoldenkeyboot/){:target="_blank"} for more on Secure Boot.
