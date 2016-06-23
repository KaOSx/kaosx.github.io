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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2016.04 ISO

**MD5SUM KaOS 2016.04:**  `4cd68c9664f8309002dde91cebf333d4`

### Current Version <a id="Current_Version"></a>
The April version ships with Plasma 5 as the default desktop, it includes non-free nvidia drivers, all language packs, KDE Applications 16.04.0, linux kernel 4.4.5 (linux-next is in the repo's, following the 4.5 series), glibc 2.23, systemd 229, kmod 22, xorg-server 1.18.3, Qt 5.6.0 &amp; Qt 4.8.7, mesa 11.2.1, calligra 3.0Alpha, Cantata and the latest versions of qupzilla, octopi, kde-telepathy, seafile, gcc 4.9.3.
For those wondering about gtk apps, firefox 45.0.2, chrome 51, thunderbird 45.0, ardour 4.7.0 are among the available in their latest version.

### Known Issues <a id="Known_Issues"></a>

* On systems running the Nouveau graphics driver, Qupzilla will not start.  Either install the <a class="fancybox-iframe" href="{{ site.baseurl }}/docs/nvidia/" title="non-free nvidia">non-free nvidia driver</a> or use another browser.  Nouveau is not compatible with QtWebEngine.
* If you want to use a GPT partition table on a BIOS system, make sure to set it up following <a title="GPT on BIOS" href="{{ site.baseurl }}/docs/bios_gpt/">this Guide</a>, the installer's partitioner can only handle GPT correctly for UEFI
* Installing on RAID, LVM, LUKS is currently not possible

To create reliable Media for booting the Live ISO, please select USB or DVD and follow the instructions for either using a USB flash drive or DVD disc.
Though UEFI booting is supported, **Secure Boot is not at this time**.
<p><small>KaOS Torrents provided by Prathamesh Deshpande.</small></p>
