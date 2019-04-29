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

[Release Notes]({{ site.baseurl }}/pages/release_notes) for KaOS 2019.04 ISO

<div id="wrapper4">
<p><b>SHA256SUM KaOS 2019.04:</b> <code>a921f7b5413fa51b2b3450df01adade2fa8574a34b085d1cd2213de49c332e93</code></p>
<p><b>SIZE: 2.0GiB</b></p>
</div>

### Current Version
{: .offset}
The April version ships with Plasma 5 as the default desktop, it includes non-free Nvidia drivers, KDE Applications 19.04.0, Linux kernel 5.0.9 (Linux-next is in the repo's, following the 5.0 series), GCC 8.3.0, Glibc 2.29, Systemd 242, Kmod 26, Xorg-server 1.21.4, Qt 5.12.3, Mesa 19.0.3, LibreOffice 6.2.3, Elisa and the latest versions of Falkon, Octopi, Kde-Telepathy, Seafile.
For those wondering about gtk apps, Firefox 66.0.3, Chrome 75, Thunderbird 60.6.1, GIMP 2.10.10, Ardour 5.12.0 are among the available in their latest version.

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
gpg --verify KaOS-2019.04-x86_64.iso.sig
```
