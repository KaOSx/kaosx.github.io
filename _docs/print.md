---
layout: docs
status: publish
published: true
title: Printer Setup
permalink: /docs/print/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1565
wordpress_url: http://kaosx.us/?page_id=1565
date: '2014-06-18 00:07:08 -0400'
date_gmt: '2014-06-18 00:07:08 -0400'
categories: []
tags: []
comments: []
---
### Installing the needed packages

First, you'll need as a minimum cups. If you haven't it already installed, do it (with pacman):

```
sudo pacman -Syu
sudo pacman -S cups
```

For many printers, this is not enough. Packages to add (and try) are:

```
sudo pacman -S gutenprint system-config-printer cups-pdf
```

To have a printer entry in system-settings:

```
sudo pacman -S print-manager
```

Epson printer specific (again not all will need this step) add:

```
sudo pacman -S epson-inkjet-printer-escpr
```

And lastly, some printers will need the foomatic-filters package:

```
sudo pacman -S foomatic-filters
```

### Starting the printer installation

Once all is installed, **start cups** with:

```
sudo systemctl start org.cups.cupsd.socket
```

To make this auto-start on each boot:

```
sudo systemctl enable org.cups.cupsd.socket
```

If you are using a Hewlett-Packard printer, you'll need also hplip, so install it too in that case:

```
sudo pacman -S hplip
```

You might notice after installing hplip, there is mention of "optdepends". To get all features for hplip that you possibly can get, install all optdepends:

* dbus-python2, for dbus support
* sane, for scanner support
* rpcbind: for network support

Now you can open **[http://localhost:631](http://localhost:631)** and add your printer to CUPS. One note about log in, the name is actually "root" (without quotes), not your root username.

### Troubleshooting

**Epson-multi-functional printers**

When installing all the above mentioned packages does not result in cups recognizing your Epson printer, there is a chance that sane blocks this. To correct this issue, create a udev-rule for usb-printers as root, including a scanner entry called `/etc/udev/rules.d/10-usbprinter.rules`, with the following content:

```
ATTR{idVendor}=="04b8", ATTR{idProduct}=="0851", MODE:="0660", GROUP:="lp" ENV{libsane_matched}:="yes"
```

To get the needed idVendor and idProduct run:

```
lsusb
```

and look for the Epson printer line, example:

```
Bus 001 Device 004: ID 04b8:0851 Seiko Epson Corp. Stylus SX410
```

Where the first ID number is idVendor, second is idProduct.

Just having sane installed is not enough to get the scanner fuction to work for these devices. Easy solution is to edit `/etc/sane.d/epson2.conf` as root, uncomment the last (usb) line:

```
# For libusb support for unknown scanners use the following command
# usb
<product ID> <device ID>
# e.g.:
#usb 04b8 0851
```

And again use the correct idVendor and idProduct number for your device. Install skanlite with:

```
sudo pacman -S skanlite
```

to have an easy GUI for scanning.

### Extra Troubleshooting for scanning with Epson Stylus cx 5600

`/etc/sane.d/epson2.conf` stays the same as in example above

`/etc/sane.d/epson.conf` comment all lines

in `/etc/sane.d/dll.conf` uncomment the line epson2 all other lines remains commented

### Troubleshooting Samsung Printers

If the installed printer packages do not result in a working Samsung printer you probably will need to get the proprietary Samsung driver.

Go here: [http://www.samsungdrivers.net/samsung-ml-2160-driver/](http://www.samsungdrivers.net/samsung-ml-2160-driver/) and download linux unified driver, the driver archive is named:

```
UnifiedLinuxDriver_1.01.tar.gz
```

Copy this archive to /home/user/Downloads and extract there.

"user" is your username of your KaOS install.
Then open a terminal and type:

```
sudo /home/user/Downloads/cdroot/autorun
```

Follow the instructions to have a fully working Samsung printer.

Also see [Post of Feb 2015 in this thread](https://forum.kaosx.us/d/4-printer-setup/6).
