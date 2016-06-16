---
layout: docs
status: publish
published: true
title: Asking and Reporting the Smart Way
permalink: /docs/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2687
wordpress_url: http://kaosx.us/?page_id=2687
date: '2015-03-27 04:02:50 -0400'
date_gmt: '2015-03-27 04:02:50 -0400'
categories: []
tags: []
comments: []
---
It would be far easier when there are issues or questions, someone could just physically work on your system to see what is running, how it was installed and what hardware is in use.
But with FOSS that luxury is rarely there, so all need to rely on users providing comprehensive info for any issue they might have found, question they have or problems faced.
Here we'll try to give as many options as possible to let you ask and report the smart way.

### Sysinfo Tool in Octopi

KaOS provides you with an easy to use option to give very complete info about all of your system. Open Octopi and go to the "Tools" menu, there click on "Sysinfo", or you can use your keyboard in Octopi with shortcut:

```
Ctrl-Shift-S
```

It will take 10-20 seconds to gather all info and will return with a pop-up window. That window contains a link you can click on and will take you to gist at github. You can check the report there, or directly right click the link to copy and paste it in the forum, a bug report, a G+ post or provide it in IRC.

### Info to provide for Installation Issues

If for any reason you are faced with problems in Live mode or running the installer, first follow this check-list:

* How did you create the Live Media? Make sure to follow the tutorials to properly create installation media for KaOS. See [USB](http://kaosx.us/docs/usb) and [DVD](http://kaosx.us/docs/dvd) creation guides.
* Did you check the md5sum of the downloaded ISO?
  ```
  md5sum /path/to/the/downloaded/<kaOS>.iso
  ```
  compare the result with the md5sum provided on the Download page, make sure they match
* Are you using a GPT partition table on a BIOS system? If so, follow the instruction to set up properly since the installer cannot create such a setup yet. See [Create GPT on BIOS](http://kaosx.us/docs/gpt)
* Provide the installation log: 
  * Live Mode: `~/installation.log`
  * Installed System: `/var/log/installation.log`

Disk layout info is often needed. Many installation related errors are due to incompatible settings, wrong partition table for chosen settings, selecting an automated partitioning option while only the manual option is viable for a certain layout. To provide that info run:

```
sudo blkid
```

and:

```
sudo fdisk -l
```

### Using a Pastebin Service to Provide Info

All examples so far create text info that often is too large to add to a forum post, not possible supply in an IRC channel or hard to read when added to an email. It is much cleaner and easier to copy the output of any command and paste it into a service like:

[http://paste.kde.org/](http://paste.kde.org/)

[https://gist.github.com/](https://gist.github.com/)

[http://pastebin.com](http://pastebin.com/)

After pasting in your info, just hit "submit" or "paste", it will return a URL that you can use to link to.

### Creating a Pacman Log

The sysinfo tool in Octopi creates a very complete set of logs, but there are times it is easier to get individual logs or more details are needed.

Whenever there are update issues, always provide a pacman log. It often is not needed to use more of this log than one week prior to the current date of any update issue. To see the full log:

```
kate /var/log/pacman.log
```

Scroll down to the appropriate date and pastebin the relevant section.

### Using Systemd for Log Creation

Systemd has a very powerful tool called "journalctl" to create all kinds of logs and system info. The tool "systemctl" is not just for starting and stopping services, it can also provide you with valuable info. A few examples:

```
sudo journalctl -b -p err
```

This will provide a log with any error message since the last system boot.

```
sudo journalctl > log.txt
```

This will provide a text file in the user's home directory called "log.txt" with the complete log as large as your system settings have allowed for. Default settings in KaOS are 50 Mb, that usually means the full log shows info going 2-3 weeks back.

```
sudo journalctl -r -b
```

This will provide a full log in reverse order (newest entries first) since the last boot

```
sudo journalctl -b | grep nvidia
```

This will search the log since last boot for any instances of the word "nvidia". Replace nvidia with any other application/driver/process that you want to have specific info for.

```
sudo systemctl status sddm
```

This will show the status of the sddm service, when it started, if any errors occurred while it was executing.

For a far more complete list of what all these two tools can do read:

[http://0pointer.de/blog/projects/journalctl.html](http://0pointer.de/blog/projects/journalctl.html)

[http://www.freedesktop.org/wiki/Software/systemd/TipsAndTricks/](http://www.freedesktop.org/wiki/Software/systemd/TipsAndTricks/)
