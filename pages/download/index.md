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

* This will become a table of contents (this text will be scraped).
{:toc}

KaOS makes regular ISO releases available, so any (new) user is not confronted with a large or complicated first update. Those who already have KaOS installed do not need to reinstall, a regular `sudo pacman -Syu` will always give you the latest.

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2018.04 ISO

<div id="wrapper4">
<p><b>SHA256SUM KaOS 2018.04:</b> <code>fbcc53f3f0aa4adda73a3a9ad054ce70573ab8f182d0402bfdd222582fd41bcd</code></p>
<p><b>SIZE: 1.8GiB</b></p>
</div>

### Current Version
{: .offset}
The April version ships with Plasma 5 as the default desktop, it includes non-free nvidia drivers, KDE Applications 18.04.0, linux kernel 4.15.7 (linux-next is in the repo's, following the 4.16 series), gcc 7.3.0, glibc 2.26, systemd 238, kmod 25, xorg-server 1.19.6, Qt 5.10.1, mesa 17.3.9, calligra 3.1.0, elisa and the latest versions of falkon, octopi, kde-telepathy, seafile.
For those wondering about gtk apps, firefox 59.0.3, chrome 68, thunderbird 52.7.0, gimp 2.10.0, ardour 5.12.0 are among the available in their latest version.

### Known Issues
{: .offset}

* Installing on RAID is currently not possible

To create reliable Media for booting the Live ISO, please select USB or DVD and follow the instructions for either using a USB flash drive or DVD disc.
Though UEFI booting is supported, **Secure Boot is not at this time**.  See [this link](https://arstechnica.com/information-technology/2016/08/microsoft-secure-boot-firmware-snafu-leaks-golden-key/){:target="_blank"} for more on Secure Boot.

### Authenticity check
{: .offset}

Besides checking the integrity of the downloaded ISO, it is adviced to also check the authenticity through the signature of the ISO.  For this download the KaOS Signing Key, linked left under GPG Verification.  Add this key to your keyring:
```
gpg --import KaOS.asc
```
Next download the ISO GPG Signature to the same directory as where you downloaded the ISO and verify with (adjust for correct year and date):
```
gpg --verify KaOS-2018.04-x86_64.iso.sig
```
