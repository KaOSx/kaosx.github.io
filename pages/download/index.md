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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2017.06 ISO

**MD5SUM KaOS 2017.06:**  `595c07cf74e54dc462399a0d59acb08d`

### Current Version
{: .offset}
The June version ships with Plasma 5 as the default desktop, it includes non-free nvidia drivers, KDE Applications 17.04.1, linux kernel 4.10.9 (linux-next is in the repo's, following the 4.11 series), glibc 2.25, systemd 233, kmod 24, xorg-server 1.19.3, Qt 5.9.0, mesa 17.0.3, calligra 3.0.1, Babe and the latest versions of qupzilla, octopi, kde-telepathy, seafile, gcc 5.4.1.
For those wondering about gtk apps, firefox 53.0.2, chrome 60, thunderbird 52.1.1, ardour 5.9.0 are among the available in their latest version.

### Known Issues
{: .offset}

* Installing on RAID or LVM is currently not possible

To create reliable Media for booting the Live ISO, please select USB or DVD and follow the instructions for either using a USB flash drive or DVD disc.
Though UEFI booting is supported, **Secure Boot is not at this time**.  See [this link](https://rol.im/securegoldenkeyboot/){:target="_blank"} for more on Secure Boot.

### Authenticity check
{: .offset}

Besides checking the integrity of the downloaded ISO, it is adviced to also check the authenticity through the signature of the ISO.  For this download the KaOS Signing Key, linked left under GPG Verification.  Add this key to your keyring:
```
gpg --import KaOS.asc
```
Next download the ISO GPG Signature to the same directory as where you downloaded the ISO and verify with (adjust for correct year and date):
```
gpg --verify KaOS-2017.06-x86_64.iso.sig
```
