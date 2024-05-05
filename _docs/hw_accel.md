---
layout: docs
status: publish
published: true
title: Hardware Video Acceleration
permalink: /docs/hw_accel/
author:
  display_name: Even Becker
  login: evenbecker
  url: ''
author_login: demm
# Even Becker won't show his email address
# Feel free to add authors and to modify this file
#wordpress_id:
#wordpress_url:
date: '2024-05-01 10:06:56 +0200'
date_gmt: '2024-05-01 10:06:56 +0200'
categories: []
tags: []
comments: []
---

The video card can decode/encode video and render KDE Plasma effects. It reduces CPU usage and save power. Hardware video acceleration does not work out of the box for intel cards. This short tutorial focus on VA-API, which is the  most commonly used method for Intel.

The built-in kernel modesetting driver might provide direct rendering (DRI2 and DRI3) out of the box via the Glamor accelmethod. To check it, run:

```
$ cat /var/log/Xorg.0.log|grep DRI

```
If you don't see any driver name (iHD, i965, radeonsi) then DRI is not working and you need to install media-driver. If you see problems when playing videos with Intel graphics then remove media-driver and install libva-intel-driver.

To verify if VA-API works, install libva-utils and run:

```
$ vainfo
```

It should return the name of the driver and the supported codecs like MPEG2, H264, VP8, ...

Sometimes only DRI2 works. To check DRI3, run:
```
$ LIBGL_DEBUG=verbose glxinfo | grep libgl
```

More info see [wikipedia](https://en.wikipedia.org/wiki/Graphics_processing_unit#GPU_accelerated_video_decoding_and_encoding)
