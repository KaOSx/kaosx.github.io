---
layout: docs
status: publish
published: true
title: Switching between free and non-free Nvidia
permalink: /docs/nvidia/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2636
wordpress_url: http://kaosx.us/?page_id=2636
date: '2015-03-26 20:32:27 -0400'
date_gmt: '2015-03-26 20:32:27 -0400'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

When starting a KaOS live session you are presented with the option to run with free (default) or non-free graphics drivers. The choice made there, carries over to the installed system. There might be times you wish to switch to the other option than the one originally chosen (or if you missed the choice in Live). Please follow the steps needed as explained next (first section explains free to non-free, second the reverse order).

### Switching from free to non-free
{: .offset}

As always, before installing or changing packages, make sure your system is fully updated:

```
sudo pacman -Syu
```

Remove the nouveau package (if installed):

```
sudo pacman -R xf86-video-nouveau
```

Time to install the non-free packages:

```
sudo pacman -S nvidia
```

If you use the linux-next kernel:

```
sudo pacman -S nvidia nvidia-next
```

If you have an older card (GeForce 400/500 series cards `NVCx and NVDx` from around 2010-2011):

```
sudo pacman -S nvidia-390xx-next
```

If you use the linux-next kernel add:

```
sudo pacman -S nvidia-390xx
```

This will automatically install the needed nvidia-utils version too. If you want to use the GUI for nvidia, add nvidia-settings to what you install, this pulls in gtk2, so it is packaged separately.

After all is installed, reboot to load the new driver.

### Switch from non-free to free
{: .offset}

Especially with the changes in the kernel since 2015, it is strongly recommended to at least try the free Nouveau driver.

Remove the nvidia packages. Check what nvidia packages you have installed with `pacman -Qs nvidia`.

```
sudo pacman -R nvidia nvidia-utils
```

Add nvidia-next, nvidia-settings or any other nvidia version to the above line if the pacman -Qs nvidia command showed those too.

Install free Nouveau driver:

```
sudo pacman -S xf86-video-nouveau
```
Though the modesetting driver might be a better option. If you want to try the in-kernel modesetting driver, then there is nothing to install after removing nvidia packages.

Reboot to load the new drivers.
