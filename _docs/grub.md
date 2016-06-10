---
layout: docs
status: publish
published: true
title: Re-install Grub
permalink: /docs/grub/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2642
wordpress_url: http://kaosx.us/?page_id=2642
date: '2015-03-26 20:51:34 -0400'
date_gmt: '2015-03-26 20:51:34 -0400'
categories: []
tags: []
comments: []
---
If you ever get into a situation were you lost grub, due to installing another OS that went wrong or just lost the Grub for KaOS, since another OS installed it's own version, here are some steps to recover.

### If you completely lost Grub

Then first follow the instructions to chroot into your KaOS install:

[Chrooting](http://kaosx.us/chrooting/)

Once you have come to the step of "Perform System Maintenance", follow these steps:

```
sudo pacman -Syu
sudo pacman -S grub-bios os-prober mtools
```

With those packages in place, it is time to install grub in the /boot section of the used partition for KaOS.  You can open kpartitionmanager to see what the name/number of the used partition is, in this example, we'll presume there is only one disc in use, so the device used will be sda, adjust to whatever disc you actually installed KaOS to.

```
sudo grub-install /dev/sda
```

Next make sure a correct grub.cfg is generated (having os-prober installed, will add any other OS to it):

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

After this, use the chroot tutorial again to properly close the chroot, and rebooting should offer you the correct grub again.

### If you just lost the grub from KaOS

But still can boot into it and would like to have the grub running from KaOS, then the steps are much simpler, just the 2 commands:

```
sudo grub-install /dev/sda
```

and

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Are needed, again, make sure to use the correct partition for sda.
