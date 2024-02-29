---
layout: docs
status: publish
published: true
title: Additional Kernels
permalink: /docs/kernels/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2634
wordpress_url: http://kaosx.us/?page_id=2634
date: '2015-03-26 20:29:20 -0400'
date_gmt: '2015-03-26 20:29:20 -0400'
categories: []
tags: []
comments: []
---
{:toc}

KaOS does not fully roll the stable kernel, once a new kernel is tested well and makes it to stable, it usually stays at the same version for about six weeks. It only is updated once a new major version reaches about 6.xx.7 or 6.xx.8. The kernel is about the biggest cause for breakage in a rolling distribution, that is why this policy. That does not mean you can't have the latest kernel in KaOS, linux-next is fully rolling and is always at the latest version. Please follow these instructions to add this kernel to your install (and you will be helping to get the next stable kernel up in as good a shape as possible):

### Linux-next

As always, update first:

```
sudo pacman -Syu
```

Next check what all depends on linux in your system:

```
pacman -Qi linux
```

Look for the line "required by=", anything there needs the -next version, ignore only tomoyo-tools, there is no need for an extra -next version for tomoyo.

To install the latest kernel:

```
sudo pacman -S linux-next
```

and add any other -next version you had of packages in the "required by" line, examples linux-next-headers, nvidia-next.

After all is installed regenerate grub (for BIOS installs):

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

On reboot, linux-next will be the default kernel to boot into, stable kernel is still an available choice. Do not remove the stable kernel, much better to always have two options for kernels to boot into.

For **UEFI installs**, add a new file to /boot/loader/entries by opening Dolphin and navigate to /boot/loader/entries.

Select `KaOS_<year>.<month>.conf` to open in `Kate`

and edit the linux and initrd line to read as:

```
linux  /vmlinuz-linux-next
initrd /initramfs-linux-next.img
```

Save as **KaOS-next.conf** (or add the <year>.<month> part to it too), and you will have the choice to boot from linux-next in the systemd-boot menu. To make it default, edit:

```
kate /boot/loader/loader.conf
```

change KaOS to KaOS-next.  Or highlight the linux-next entry in the bootloader menu and type `d` to make it default.
