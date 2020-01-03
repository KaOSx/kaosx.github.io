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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2020.01 ISO

<div id="wrapper4">
<p><b>SHA256SUM KaOS 2020.01:</b> <code>b22a217add9c11e47bcca6dc5c4cb430cb605a7684c6ca1a3eba50f2c42a4c60</code></p>
<p><b>SIZE: 2.1GiB</b></p>
</div>

### Current Version
{: .offset}
The January version ships with Plasma 5 as the default desktop, it includes non-free Nvidia drivers, KDE Applications 19.12.0, Linux kernel 5.4.7 (Linux-next is in the repo's, following the 5.4 series), GCC 9.2.0, Glibc 2.30, Systemd 243, Kmod 26, Xorg-server 1.21.6, Qt 5.14.0, Mesa 19.2.8, LibreOffice 6.3.4, Elisa and the latest versions of Falkon, Octopi, Kde-Telepathy.
For those wondering about gtk apps, Firefox 71.0, Chrome 81, Thunderbird 68.3.1, GIMP 2.10.14, Ardour 5.12.0 are among the available in their latest version.

### Known Issues
{: .offset}

* Some Intel CPU systems might have an issue with the kernel’s entropy pool and have a long boot delay, if encountered add **random.trust_cpu=1** to the kernel boot line.
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
gpg --verify KaOS-2020.01-x86_64.iso.sig
```
