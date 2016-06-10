---
layout: docs
status: publish
published: true
title: GPT Partitioning
permalink: /docs/bios_gpt/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1563
wordpress_url: http://kaosx.us/?page_id=1563
date: '2014-06-18 00:06:36 -0400'
date_gmt: '2014-06-18 00:06:36 -0400'
categories: []
tags: []
comments: []
---
The default partition table in partitionmanager is GPT. This particular partition table has quite some advantages over the more common MS-Dos version, to read more about that please refer [http://www.rodsbooks.com/gdisk](http://www.rodsbooks.com/gdisk). One big advantage of GPT is the ability for numerous primary partitions, no need to use extended. However, at this stage of newly introducing the ability to install with GPT in the installer, there are a few extra steps needed to prepare the HDD for this.

These instructions are for BIOS systems only, setting up with UEFI no special steps are needed.

### Requirements

* Create a completely new partition table. This will remove all existing data, so back-up any needed data before starting.
* 8 MB partition of unformatted space, has to be the very first partition on the HDD.
* No seperate /boot partition.

#### Steps

It is best to prepare your HDD before starting the installer at this stage.

### From a command prompt

First check if gptfdisk is installed:

```
pacman -Q gptfdisk
```

If not available:

```
sudo pacman -S gptfdisk
```

To setup the GPT partition table, in this example an 8Gb USB-stick on /dev/sde is used (notice, need to be root):

```
# cgdisk /dev/sde
```

If no GPT partition table available yet, cgdisk will create one, so hit enter on the warning messages.


```
# cgdisk /dev/sde
Warning! Non-GPT or damaged disk detected! This program will attempt to
convert to GPT form or repair damage to GPT data structures, but may not
succeed. Use gdisk or another disk repair tool if you have a damaged GPT
disk. Press any key to continue....
```

Next view:

```
                                 cgdisk 0.8.0
                             Disk Drive: /dev/sde
                           Size: 15654912, 7.5 GiB
Part. #     Size        Partition Type            Partition Name
----------------------------------------------------------------
  1        7.5 GiB     Microsoft basic data      Microsoft basic data
   [ Align  ]  [ Backup ]  [ Delete ]  [  Help  ]  [  Info  ]  [  Load  ]
   [  naMe  ]  [  Quit  ]  [  Type  ]  [ Verify ]  [ Write  ]
                     Change the filesystem type code GUID
```

Select "delete", if any similar partition shows. Once your disk shows as "free-space", create the first partition as unallocated space, 8Mb minimum:

```
First sector (40-15654878, default = 40):
Size in sectors or {KMGTP} (default = 15654839): 8Mb
Current type is ef02 (Linux filesystem)
Hex code or GUID (L to show codes, Enter = 8300): ef02
Current partition name is
```

Enter new partition name, or  to use the current name:

```
BIOS boot
```

This example created an 8Mb efi boot partition Next select remaining free space, and that will become a 7.4Gb root partition, for a ext4 filesystem:

```
First sector (4194344-15654878, default = 4194344):
Size in sectors or {KMGTP} (default = 15654839): 7400Mb
Current type is 8300 (Linux filesystem)
Hex code or GUID (L to show codes, Enter = 8300):
Current partition name is
```

Enter new partition name, or  to use the current name:

```
Root
```

The partitions are setup at this point, so next select "write", and type "yes" to make the changes permanent. Then select "quit" to leave cgdisk. This only setup partition, no file systems created yet, so back in the normal console, create an ext4 filesystem for the root partition (sde2 in this example):

```
# mkfs.ext4 /dev/sde2
```

Make sure that the first partition is completely empty:

```
sudo dd if=/dev/zero of=/dev/sde1 bs=4M
```

And last, the 8Mb unallocated space on sde1, needs the bios_grub boot flags set:

```
sudo parted /dev/sde set 1 bios_grub on
```

Now you are set to start the installer, and of course you can change any disk setup to your liking, just make sure to have a minimum of about 5Gb available for root, with a DVD ISO install.

### Extra instructions for dual booting with a MacOS

Remove the Fat partition at the beginning (labelled EFI). - IF for some reasons you can not resize it.

Create a 32mb partition as the first one, unformatted and with the **bios_grub flag**.

Recreate the fat32 partition in the remaining space, labelled EFI as before.

Leave the HFS partitions untouched and partition the rest of the disk to your liking.

Run `gpt-sync`.

Install with the installer normally.

Reboot, then in refit chose the **Partitioning Tool** and confirmed ('y') for the syncing.
