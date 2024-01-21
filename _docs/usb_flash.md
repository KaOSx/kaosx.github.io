---
layout: docs
status: publish
published: true
permalink: /docs/usb_flash/
title: Bootable USB Flash Drive Creation
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 362
wordpress_url: http://www.kde-os.tk/?page_id=362
date: '2013-07-16 15:50:31 -0400'
date_gmt: '2013-07-16 15:50:31 -0400'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

![USB stick](/wp-content/uploads/2013/07/Drive-USB-150x150.png){: .alignleft .size-thumbnail}

In order to put a KaOS ISO image onto an USB flash drive, you will need a drive capable of storing 3.3 Gb, a system with USB ports and some specialized software.

Make sure the system where you will boot the USB flash drive from, has USB ports and can boot USB flash drives.  Before following any steps, make sure the device is plugged in but not mounted.

```fix
Unetbootin and Rufus are NOT compatible with KaOS.
```

### Windows
{: .offset}

#### Universal USB Installer (correct EFI installation for modern hardware)
{: .offset}

[Universal USB Installer](https://pendrivelinux.com/downloads/Universal-USB-Installer/Universal-USB-Installer-2.0.2.0.exe){:target="_blank"}

Option for Windows is Universal USB Installer. Open the Universal USB Installer executable.  
Step 1, Select your USB disk.  
Step 2, Select the "Reinstall or Update?" tick box, this will initilize the disk.  
Step 3, Select the option that states "Select a Distrubution to put on..." from here select "Try and unlisted ISO..."  
Step 4, Click on the "Browse" button, select your downloaded KaOS ISO file, then Click the "Create" button.

You can now boot into this USB via the EFI options in your BIOS.

#### From Windows command line
{: .offset}
[dd](http://www.chrysocome.net/downloads/dd-0.5.zip){:target="_blank"}

You need to download dd which is a common program with the primary purpose of low-level copying of raw data.

Once installed, open the command prompt and type (substitute the correct path):

```
dd.exe if=/path/to/the/downloaded/iso of=/path/to/the/USB/device
```

### Linux Distributions
{: .offset}

#### IsoWriter
{: .offset}

The application to use is [IsoWriter](/packages/index.php?act=search&amp;subdir=&amp;sortby=date&amp;order=descending&amp;searchpattern=isowriter){:target="_blank"}, available in the KaOS repository and installed by default. After opening IsoWriter:

* Click the folder icon and browse to the directory containing the ISO
* Click write

From Dolphin:

* Right click the ISO file, select **Actions**
* Select **Write ISO to USB using IsoWriter**
* Right click again, Actions and select **Compute md5sum** to verify the downloaded ISO, compare the md5sum with the one on the Download page

If you are not on KaOS, you can get [IsoWriter here](https://github.com/KaOSx/isowriter){:target="_blank"}, see the [README](https://github.com/KaOSx/isowriter/blob/master/README.md){:target="_blank"} how to build and use. 

#### ISO ImageWriter
{: .offset}

[ISOImageWriter](https://apps.kde.org/isoimagewriter/){:target="_blank"}

If your distribution provides ISOImageWriter then that is a well tested alternative GUI to use.

* Click the folder icon and browse to the directory containing the ISO
* Select the USB Drive to use and click Create

#### Using the command line
{: .offset}

In order to create a bootable USB flash drive, you will need `coreutils` (which provides `dd`). Most GNU distributions have `coreutils` already installed.

To use dd, open a terminal and write (substitute the correct path):

```
sudo dd if=/path/to/the/downloaded/iso of=/path/to/the/USB/device
```

To check if the creation of the bootable USB stick was successful, use `fdisk` as root to check it. You should see an asterisk (*) like this in your USB line:

```
Device Boot Start End Blocks Id System
/dev/sdb1 * 1 697 713728 17 Hidden HPFS/NTFS
```

Again, **Unetbootin and Rufus are NOT compatible with KaOS.**
