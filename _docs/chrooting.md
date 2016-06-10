---
layout: docs
status: publish
published: true
title: Chrooting
permalink: /docs/chrooting/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2638
wordpress_url: http://kaosx.us/?page_id=2638
date: '2015-03-26 20:40:59 -0400'
date_gmt: '2015-03-26 20:40:59 -0400'
categories: []
tags: []
comments: []
---
Changing Root (Chroot) is the process of changing of the apparent disk root directory (and the current running process and its children) to another root directory.  When you change root to another directory you cannot access files and commands outside that directory.  This directory is called a "chroot jail".  Changing root is commonly done for system maintenance for such tasks as reinstalling GRUB or resetting a forgotten password. Changing root is often done from from a LiveCD or LiveUSB into a mounted partition that contains an installed system.

### Requirements

* You'll need to boot to another working Linux environment (for example, to a LiveCD or USB flash disk).
* Root privileges are required in order to chroot.
* Be sure that the architectures of the Linux environment you have booted into matches the architecture of the root directory you wish to enter (i.e. i686, x86_64). You can find the architecture of your current environment by:
  `uname -m`
* If you need any kernel modules loaded in the chroot environment, load them before chrooting. It may also be useful to initialize your swap (`swapon /dev/<device-or-partition-name>`) and to connect to your network before chrooting.

### Mounting the device

The device or partition with the Linux system on it will need to be mounted.  To discover the kernel name of the storage device name, type:

```
fdisk -l
```

Create a directory where you would like to mount the device or partition, then mount it:

```
mkdir /mnt/kaos
mount /dev/device_or_partition_name /mnt/kaos
```

### Changing Root

Mount the temporary filesystems:
```
cd /mnt/kaos
mount -t proc proc proc/
mount -t sysfs sys sys/
mount -o bind /dev dev/
```

Mount other parts of your filesystem (e.g. /boot, /var, /usr...) that reside on separate partitions but which you need access to. For example:

```
mount /dev/device_or_partition_name boot/
```

It's possible to mount filesystems after you've chrooted, but it's more convenient to do so beforehand.  The reasoning for this is you'll have to unmount the temporary filesystems after you exit a chroot so this lets you umount all the filesystems in a single command.  This also allows a safer shutdown.  Because the external Linux environment knows all mounted partitions it can safely unmount them during shutdown.

If you've setup your network and want to use it in the chroot environment, copy over your DNS servers so that you will be connected to the network:

```
cp -L /etc/resolv.conf etc/resolv.conf
```

Now chroot to your installed device or partition and define your shell:

```
chroot . /bin/bash
```

If you see the error, `chroot: cannot run command '/bin/bash': Exec format error` it is likely the two architectures do not match.

If you'll be doing anything with GRUB inside the chroot environment, you'll need to be sure your _/etc/mtab_ is up-to-date:

```
rm /etc/mtab && grep -v rootfs /proc/mounts > /etc/mtab
```

 If you use bash, your root _$HOME/.bashrc_ will be sourced on login provided your _~/.bash_profile_ specifies it (_source ~/.bashrc_).  To source your chrooted, global bash configuration do:

```
source /etc/profile
```

If your bash configuration doesn't use a unique prompt, consider creating one to be able to differentiate your chroot environment:

```
export PS1="(chroot) $PS1"
```

### Perform System Maintenance

At this point you can perform whatever system maintenance you require inside the chroot environment, some common examples being:

* Upgrade or downgrade packages
* Rebuild your initcpio image
* Reset a forgotten password
* Fix your /etc/fstab
* Reinstall GRUB

### Exiting chroot

When you're finished with system maintenance, exit the chroot shell:

```
exit
```

Then unmount the temporary filesystems and any mounted devices:

```
umount {proc,sys,dev,boot...}
```

Finally attempt to unmount your hard drive:

```
cd ..
umount kaos/
```

If you get an error saying that /mnt (or any other partition) is busy, this can mean one of two things:

* A program was left running inside of the chroot.
* Or more frequently: a sub-mount still exists. For example, /mnt/kaos/usr within /mnt/kaos.

In the latter case, unmount the sub-mount mount point first. To get a reminder of all the current mount points, run `mount` with no parameters. If you still are unable to unmount a partition, use the force option:

```
umount -f /mnt
```

After this you will be able to safely reboot.
