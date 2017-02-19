---
layout: docs
status: publish
published: true
title: Encrypt home partition with dm-crypt and LUKS
permalink: /docs/dm_crypt-luks/
author:
  display_name: zynex
  login: zynex
  email: zynex@ezmail.se
  url: ''
author_login: zynex
author_email: zynex@ezmail.se
wordpress_id: 
wordpress_url: 
date: '2017-02-19 10:58:00 -0100'
date_gmt: '2017-02-19 10:58:00 -0100'
categories: []
tags: []
comments: []
---
For those of you that haven't encrypted your home partition, but would like to, here's a guide to do so using dm-crypt and LUKS without having to reinstall your entire system. What you have to do thou, is backing up /home before you start this guide. Note that this is block device level encryption, witch means that the entire partition will be encrypted. If you are unsure about the differences between block and filesystem stacked level encryption, google it first.

This guide assumes that you have a separate partition for your home folder.

### Back up home partition

While doing this, you have to logout all users and use the terminal. Open a new virtual console by pressing Ctrl+Alt+F2 and login with your root account.

First of all, make sure you back up your /home. I found rsync was the easiest way. Depending on it's size, it can take a while.
```
rsync -ah --progress /home <USB DRIVE>
```

### Create the encrypted partition

Now it's time to create the encrypted partition. **NOTE! This will erase the entire partition!** You also chose what passphrase to use in this step. Remember it, if you lose it you will not be able to get your stuff back!
```
cryptsetup -y -v luksFormat /dev/sdXX
```

Now it's time to open your new encrypted partition, and create a filesystem to use for it. Here we use btrfs, you can choose the file system of your liking. When opening the partition, it will ask you for the passphrase you created in earlier step. The dd step isn't necessary, but will give some extra protection to secure your data. Using dd will write zeros your partition, but it can take a long time depending on the size of the partition.
```
cryptsetup luksOpen /dev/sdXX home
dd if=/dev/zero of=/dev/mapper/home
mkfs.btrfs /dev/mapper/home
```

Now your drive is ready to use. If you want to encrypt your USB-stick/hard drive with LUKS, use the same procedure as above. To use the new encrypted partition as /home, you have to make some changes to both fstab and crypttab to make it mount correctly.

### Make it mount at boot

Edit /etc/crypttab and add the following line to it. If you don't want a timeout, remove that option.
```
home /dev/sdXX none luks,timeout=120
```

Locate the line in /etc/fstab that mounts /home, and change the UUID to /dev/mapper/home. In some guides I saw that you could use the UUID, but that didn't work for me. This is how mine looks like now.
```
/dev/mapper/home /home btrfs defaults,noatime,space_cache,autodefrag,compress=lzo 0 2
```

If you want to have a more human readable name of your partition, you can mount the partition and change the label of it. Note that all changes made to the partition (fx. in partition manager) must be made after you unlocked it, else you will wipe the encryption to.
```
cryptsetup luksOpen /dev/sdXX home
e2label /dev/mapper/home <name>
```

That's it. Now you can reboot your system and try it out. Note that the passphrase is entered before you get to the login screen. Personally I use auto login to skip the login part, /home is encrypted anyway 

All you have to do now is restore your previous backup.

Good luck.

0
