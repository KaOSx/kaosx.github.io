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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2023.04 ISO

<div id="wrapper4">
<p><b>SHA256SUM KaOS 2023.04:</b> <code>1126895cb8fa11c7acf37d10e82993c52363e1939ed1c53f1fb05a872b454556</code></p>
<p><b>SIZE: 2.9GiB</b></p>
</div>

### Current Version
{: .offset}
The April version ships with Plasma 5 as the default desktop, it includes non-free Nvidia drivers, KDE Applications 23.04.0, Linux kernel 6.2.11 (Linux-next is in the repo's, following the 6.2 series), GCC 12.2.0, Glibc 2.36, Systemd 253.3, Kmod 30, Xorg-server 21.1.8, Qt 5.15.9+, Mesa 23.0.2, LibreOffice 7.5.2, Elisa and the latest versions of Falkon, Octopi, Kde-Telepathy.
For those wondering about gtk apps, Firefox 112.0.1, Chrome 114, Thunderbird 102.10, GIMP 2.99.14, Ardour 7.3.0 are among the available in their latest version.

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
gpg --verify KaOS-2023.04-x86_64.iso.sig
```
