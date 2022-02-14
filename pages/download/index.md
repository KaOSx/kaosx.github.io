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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2022.02 ISO

<div id="wrapper4">
<p><b>SHA256SUM KaOS 2022.02:</b> <code>d6e89c5d691ad14ca5070d43c27ed99fdadbca5d9b43748ce0a6632cafd6e23c</code></p>
<p><b>SIZE: 2.8GiB</b></p>
</div>

### Current Version
{: .offset}
The February version ships with Plasma 5 as the default desktop, it includes non-free Nvidia drivers, KDE Applications 21.12.2, Linux kernel 5.15.23 (Linux-next is in the repo's, following the 5.16 series), GCC 11.2.0, Glibc 2.33, Systemd 250.3, Kmod 29, Xorg-server 21.1.3, Qt 5.15.2+, Mesa 21.3.6, LibreOffice 7.3.0, Elisa and the latest versions of Falkon, Octopi, Kde-Telepathy.
For those wondering about gtk apps, Firefox 97.0, Chrome 100, Thunderbird 91.6, GIMP 2.10.30, Ardour 6.9.0 are among the available in their latest version.

### Known Issues
{: .offset}

* Installing on RAID is currently not possible

To create reliable Media for booting the Live ISO, please select USB or DVD and follow the instructions for either using a USB flash drive or DVD disc.
Though UEFI booting is supported, **Secure Boot is not at this time**.  See [this link](https://arstechnica.com/information-technology/2016/08/microsoft-secure-boot-firmware-snafu-leaks-golden-key/){:target="_blank"} for more on Secure Boot.

### Authenticity check
{: .offset}

Besides checking the integrity of the downloaded ISO, it is advised to also check the authenticity through the signature of the ISO.  For this download the KaOS Signing Key, linked left under GPG Verification.  Add this key to your keyring:
```
gpg --import KaOS.asc
```
Next download the ISO GPG Signature to the same directory as where you downloaded the ISO and verify with (adjust for correct year and date):
```
gpg --verify KaOS-2022.02-x86_64.iso.sig
```
