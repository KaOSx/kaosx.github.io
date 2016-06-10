---
layout: docs
status: publish
published: true
title: Vbox Guest-Additions
permalink: /docs/vbox/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 2646
wordpress_url: http://kaosx.us/?page_id=2646
date: '2015-03-26 20:59:22 -0400'
date_gmt: '2015-03-26 20:59:22 -0400'
categories: []
tags: []
comments: []
---
**Starting with the ISO KaOS 2015.04, this is no longer an issue, guest-addition can be installed with no additional steps needed.**

Currently there is an issue running a KaOS vbox install with the guest addition modules (needed for full screen, file sharing, etc).
This has been going on for a while and it looks to be an issue with sddm.
The work-around is not hard though, you just will have to manually start the plasma session.

For this tutorial, we'll start with the worst case scenario, you already installed the guest addition and are faced with a hanging vbox install, black screen with 3 lines of kernel messages. Skip to the next paragraph if you did not install guest additions yet.

When grub starts, hit 'e', that will give you the option to edit the kernel line used for booting.

Scroll down (arrow down key) to the line that ends with "quiet", use the right arrow key to get to that word, and replace "quiet" with "1".

Use Ctrl-x to let grub start the boot process. This will result now in an emergency shell were you login as root user. Here you need to disable sddm:

```
systemctl disable sddm
```

The following steps you can do here too, but might be easier to just reboot and edit the one needed file in GUI. Just type `reboot`.

For anyone else, after you installed the guest addition in the KaOS guest vbox system, do not reboot yet. You also need to disable sddm:

```
sudo systemctl disable sddm
```

Next open xinitrc:

```
kate ~/.xinitrc
```

On any recent KaOS install, this file will look like this:


```
#!/bin/sh
#
# ~/.xinitrc
#
# Executed by startx (run your window manager from here)
#
exec dbus-launch --exit-with-session startkde
```

Edit this file as shown:

```
#!/bin/sh
#
# ~/.xinitrc
#
# Executed by startx (run your window manager from here)
#
export QTDIR="/usr/lib/qt5"
export PATH="usr/bin:$QTDIR/bin:$PATH"
export QT_PLUGIN_PATH="/usr/lib/plugins:/usr/lib/qt5/plugins"
export QT_INCLUDE_PATH="/usr/include/qt5"
export QML2_IMPORT_PATH="/usr/lib/qml:/usr/lib/qt5/qml"
export QML_IMPORT_PATH="$QML2_IMPORT_PATH"
export KDE_SESSION_VERSION=5
export KDE_FULL_SESSION=true
exec dbus-launch --exit-with-session startkde
```

and save.

Now you are ready to reboot.

Since there is no login manager, you will boot into a shell, type your username and password to login, next type:
`startx`
to start the plasma session. As long as you want to use the guest additon modules and there is no fix for sddm, this is the way you will have to start on each boot.
But Plasma 5 will now run full screen in your vbox :)
