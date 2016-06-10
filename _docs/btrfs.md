---
layout: docs
status: publish
published: true
title: Install KaOS on SSD using Btrfs
permalink: /docs/btrfs/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2648
wordpress_url: http://kaosx.us/?page_id=2648
date: '2015-03-26 21:03:17 -0400'
date_gmt: '2015-03-26 21:03:17 -0400'
categories: []
tags: []
comments: []
---
{:toc}

Explanations how and why to use BTRFS

### What is Btrfs?

> Btrfs is a new copy on write (CoW) filesystem for Linux aimed at implementing advanced features while focusing on fault tolerance, repair and easy administration. Jointly developed at Oracle, Red Hat, Fujitsu, Intel, SUSE, STRATO and many others, Btrfs is licensed under the GPL and open for contribution from anyone.

### Why Btrfs?

> * It is possible to dynamically resize mounted filesystems
> * filesystems can span physical volumes, with optional RAID support
> * physical volumes can be added to and removed from mounted filesystems
> * compression option
> * snapshots (including read-only and read-write) and seeds
> * has a mode that is optimized for solid-state drives

### Format as BTRFS

Current installer is ready to create Btrfs partitions so you can use it without any further instructions.

### Edit fstab

In case you want to fine tune the default setting used by the installer for fstab, you can use the following example:

```
$ kdesu kate /etc/fstab
```

And edit until it looks like this.

```
UUID=YOUROWNUUID / btrfs rw,noatime,compress=lzo,ssd,discard,space_cache,inode_cache 0 1
tmpfs   /tmp       tmpfs   defaults,noatime,mode=1777   0  0
tmpfs   /var/spool tmpfs   defaults,noatime,mode=1777   0  0
tmpfs   /var/tmp   tmpfs   defaults,noatime,mode=1777   0  0
```

Where:

* rw - Partition is mounted in read-write mode
* noatime - Don't update inode access times on the filesystem. Can help performance
* compress=lzo - Data compression enable
* Discard - Optional if you already use ssd option, enable TRIM.

All others options optimize cache and send temps to RAM.

### Recomendations

Verify if your SSD is align using `$ sudo blockdev --getalignoff /dev/sda4`

if the result is 0 then your SSD is correctly aligned.

### Creating a snapshot

```
# mount /media/btrfs
# cd /media/btrfs
# btrfs subvolume snapshot root root_snapshot_2011_01_11
# cd ~
# umount /media/btrfs
```

### Rolling back a snapshot

```
# mount /media/btrfs
# umount /home
# mount -o defaults,subvol=home_snapshot_A /dev/sda /home
# btrfs subvolume delete /media/btrfs/home                   # optional; this is so the
# mv /media/btrfs/home_snapshot_A /media/btrfs/home          # /etc/fstab need not change.
# umount /media/btrfs
```

[https://btrfs.wiki.kernel.org/index.php/SysadminGuide#Snapshots](https://btrfs.wiki.kernel.org/index.php/SysadminGuide#Snapshots)
