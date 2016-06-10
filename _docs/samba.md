---
layout: docs
status: publish
published: true
title: Network Sharing with SAMBA
permalink: /docs/samba/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 277175
wordpress_url: http://kaosx.us/?page_id=277175
date: '2016-04-26 14:56:53 -0400'
date_gmt: '2016-04-26 14:56:53 -0400'
categories: []
tags: []
comments: []
---
Howto start with SAMBA in KaOS.

Samba comes by default in the ISO, to verify it is installed we will use the following command:

```
pacman -Q samba
```

That should return the installed version of samba, if not we install it with:

```
sudo pacman -Syu
sudo pacman -S samba
```

To start using samba we must create the configuration file, or we can copy the default one:

```
sudo cp /etc/samba/smb.conf.default /etc/samba/smb.conf
```

Then start the samba services:

```
sudo systemctl start smbd
sudo systemctl start nmbd
```

And to start samba with the system:

```
sudo systemctl enable smbd
sudo systemctl enable nmbd
```

We already have Samba running.
You can see the shared resources in Dolphin -> Places -> Network -> samba shared Resources.

I leave an example of the smb.conf file with few restrictions and sharing a data partition mounted on /media/data:

```
[global]
workgroup = WORKGROUP
server string = %h Server
security = user
map to guest = Bad User
load printers = yes
log file = /var/log/samba/%m.log
max log size = 50
dns proxy = no

[homes]
comment = Home Directories
path = /home/dago
browseable = yes
writable = no
public = no

[printers]
comment = All Printers
path = /var/spool/samba
browseable = yes
guest ok = yes
writable = no
printable = yes

[Data]
comment = Data in KaOS
path = /media/data
browseable = yes
public = yes
writable = yes
```
