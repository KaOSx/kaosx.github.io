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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2016.06 ISO

**MD5SUM KaOS 2016.06:**  `47c3e2f05dd02a4545b7d5e97d879f53`

### Current Version <a id="Current_Version"></a>
The June version ships with Plasma 5 as the default desktop, it includes non-free nvidia drivers, all language packs, KDE Applications 16.04.2, linux kernel 4.6.2 (linux-next is in the repo's, following the 4.6 series), glibc 2.23, systemd 230, kmod 22, xorg-server 1.18.3, Qt 5.7.0, mesa 11.2.2, calligra 3.0Alpha, Cantata and the latest versions of qupzilla, octopi, kde-telepathy, seafile, gcc 4.9.3.
For those wondering about gtk apps, firefox 47.0, chrome 53, thunderbird 45.1.1, ardour 4.7.0 are among the available in their latest version.

### Known Issues <a id="Known_Issues"></a>

* On systems running the Nouveau graphics driver, Qupzilla will not start.  Either install the <a class="fancybox-iframe" href="{{ site.baseurl }}/docs/nvidia/" title="non-free nvidia">non-free nvidia driver</a> or use another browser.  Nouveau is not compatible with QtWebEngine.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a title="GPT on BIOS" href="{{ site.baseurl }}/docs/bios_gpt/">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAIDor LVM is currently not possible
* Hibernate on LUKS enabled swap partitions needs manual intervention, the installer misses some settings to fully support this

To create reliable Media for booting the Live ISO, please select USB or DVD and follow the instructions for either using a USB flash drive or DVD disc.
Though UEFI booting is supported, **Secure Boot is not at this time**.
<p><small>KaOS Torrents provided by Prathamesh Deshpande.</small></p>
