---
layout: docs
status: publish
published: true
title: Moving the Home Partition
permalink: /docs/moving_home/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2640
wordpress_url: http://kaosx.us/?page_id=2640
date: '2015-03-26 20:43:57 -0400'
date_gmt: '2015-03-26 20:43:57 -0400'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

There are times after installing software, drivers or patches, problems occur which are sometimes hard to figure, what causes them, and hard to solve. Sometimes some lose their beloved configuration which they have spent a long time to tweak and perfectionize. ...Frustrating!

Others end up running out of room for all their data.

If you have a free disk or a partition to play around with a good choice is to make a separate /home partition. By having a separate /home partition you don't have to worry that much about your files and folders anymore. If everything breaks down and you get to the point of an upgrade or a reinstall, you can do so and just leave your files where they are.

This is what to do:

Warning: Be careful, do this at your own risk, if you do something wrong you can end up losing files or configuration. Again, if you do this correct, you hopefully never end up losing anything again. And as always when working with partitions, make sure you make a back-up of your important files.

### Creating the filesystem
{: .offset}

Use KDE Partition Manager, or any other partitioner you feel comfortable with, and create a partition or format your drive to a Linux filesystem. Ext4 is good, some prefer ReiserFS or Ext3, but this is your own choice. If you don't know the difference, choose Ext4.

### Finding the exact name and uuid address of the target partition
{: .offset}

To I.D. the partition correctly, and later on, being able to edit the fstab file, it is important to know the exact info of the chosen partition. For that run:

```
sudo blkid
```

You will see some output like this (three hard drives in this case):

```
/dev/sda1: UUID="6EF05FD5F05FA1DF" TYPE="ntfs"
/dev/sda2: UUID="1C58753058750A32" TYPE="ntfs"
/dev/sda3: UUID="132ce1c5-b558-4d7d-a151-1dd28106d99f" TYPE="ext4"
/dev/sda5: UUID="6d1a8534-3276-42d5-8676-5451373a22df" TYPE="swap"
/dev/sdc5: UUID="75ed4243-4987-4f37-a193-5067c94bd2d5" TYPE="ext4"
/dev/sdb5: UUID="5be73596-5f60-4c49-bff4-5272d5e4ef5d" TYPE="ext4"
/dev/sdb2: UUID="2026332c-4b95-41f3-8de5-40bb262165c9" TYPE="ext4"
/dev/loop0: TYPE="squashfs"
/dev/sdb3: UUID="53a88ab1-e8bc-449b-b17d-36a138a8a9c0" TYPE="ext4"
```

In this example, the last line is the partition chosen for the move. Please save this output in a text file, or open a new tab in yakuake for the rest of this tutorial, so you can go back and copy/paste the correct info.

### Moving the /home
{: .offset}

In yakuake, type "su" to permanently become root. Then type:

```
# mkdir /mnt/home
# mount -t ext4 /dev/sdb3 /mnt/home
```

Note: In this case I use sdb3, which is my third partition on my second hard drive, this needs to be changed to your correct partition number. Also when I mount the partition I tell the command which type of filesystem I'm mounting (Ext4). This also needs to be changed to the correct file system of your choice.

Then you need to copy all the files from your /home directory, this may take a while since you probably have a lot of documents to move:

```
# cp -a /home/* /mnt/home
```

### Understanding the fstab
{: .offset}

Before editing the `/etc/fstab` to point the direction to the new home drive, a little about fstab.

`/etc/fstab` is the configuration document that tells KaOS where to find your disks. Next you need to understand the disk structure. If you have one hard drive, that will most likely be named sda, if you have a second hard drive to, that will most likely be named sdb. If you partition your disk, sda will turn into sda1, sda2, sda5 and so on, the number is individual depending how your disk is partitioned. Ex.: /dev/sda1 ...means: dev = the device directory. Your device information is stored in the /dev.

### Editing /etc/fstab
{: .offset}

```
$ kdesu kate /etc/fstab
```

Will bring up something like this in Kate Text Editor:

```
#
# /etc/fstab: static file system information
#
# <file system>        <dir>         <type>
<options>          <dump>
<pass>
devpts                 /dev/pts      devpts    defaults            0      0
shm                    /dev/shm      tmpfs     nodev,nosuid        0      0
UUID=75ed4243-4987-4f37-a193-5067c94bd2d5 / ext4 defaults 0 0
UUID=6d1a8534-3276-42d5-8676-5451373a22df swap swap defaults 0 0
```

Note: You need to add a line like this, again changing the (ext4) filesystem of your choice and the (sdb3) the disk / partition you have moved your /home to:

```
UUID=53a88ab1-e8bc-449b-b17d-36a138a8a9c0 /home ext4 defaults 0 0
```

Note: Remember to use the correct UUID, created in step 2 from this tutorial.

Then rename the old /home, remove the mounted home dir and mount the new /home by:

```
# mv /home /homeOLD
# mkdir /home
# umount /mnt/home
# mount -a
```

### Final steps
{: .offset}

Check that all your files and configuration is correct in your new /home Log in and see that everything is as it should be, and if it is, you are now ready to delete your old home directory.

Open yakuake and type (Without the $):

```
$ sudo rm -rf /homeOLD
```
