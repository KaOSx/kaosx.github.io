---
layout: docs
status: publish
published: true
title: Flatpak
permalink: /docs/flatpak/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
date: '2017-05-21 10:41:30 -0500'
date_gmt: '2017-05-21 10:41:30 -0500'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

### The Basics
{: .offset}

[Flatpak](http://flatpak.org/) (formerly xdg-app) is a software utility for software deployment, package management, and application virtualization for Linux desktop computers. It provides a sandbox environment in which users can run applications in isolation from the rest of the system. Applications using Flatpak need permission from the user to control hardware devices or access the user's files.

As of February 2017, some popular apps available as Flatpaks include Blender, Skype, Spotify, LibreOffice, Pitivi, KDE Applications and development versions of Mozilla Firefox.

### Installation
{: .offset}

As always, make sure the system is fully up to date before installing any:
```
sudo pacman -Syu
```
And install Flatpak with:
```
sudo pacman -S flatpak
```
Once installed enable the use of remote repositories by issuing the following command:
```
sudo flatpak remote-list
```

### Installing Flatpak Applications
{: .offset}
Currently, there is no GUI in KaOS to add Flatpak applications, but the cli option is easy to use.

Example to add Skype, run the following command:
```
flatpak install --from https://s3.amazonaws.com/alexlarsson/skype-repo/skype.flatpakref
```
This will add the needed remotes, asks you to add the needed runtime base and will get the Skype Flatpak.

To run the application without rebooting, run from cli with:
```
flatpak run com.skype.Client
```
After you reboot Skype will be added as a regular menu entry and can be run by just clicking on it in the menu.

To see more available applications, here are some links:  
[flatpak.org](http://flatpak.org/apps.html){:target="_blank"}  
[flathub.org](https://flathub.org/){:target="_blank"}  
[liri.io](https://liri.io/blog/2017/04/12/flatpak.html){:target="_blank"}  
[kde.org](https://community.kde.org/Guidelines_and_HOWTOs/Flatpak){:target="_blank"}  
[https://firefox-flatpak.mojefedora.cz/](https://firefox-flatpak.mojefedora.cz/){:target="_blank"}  


### Managing applications
{: .offset}

To **list all the Flatpak applications** that you have installed, run:
```
flatpak list
```
Once a Flatpak application has been installed, it can be **launched** in the usual way from your desktop. Flatpak applications can also be run from the command line, though:
```
flatpak run <APPLICATION>
```
`<APPLICATION>` should be replaced with the name of the application that you want to launch, in the standard reverse DNS format.


**Uninstalling** an application is a simple command very similar to the run command:
```
flatpak uninstall <APPLICATION>
```

**Updating** all your installed applications with FLatpak is a single command:
```
flatpak update
```
It is also possible to update an individual application by adding its name to the command:
```
flatpak update <APPLICATION>
```

With Flatpak, **repositories** can include one or many applications. They can either be added manually or as part of installing an application. To list the Flatpak repositories that you have added, run:
```
flatpak remote-list
```
It is then possible to list all the applications in each repository using:
```
flatpak remote-ls --app <REPOSITORY>
```
`<REPOSITORY>` should be replaced by the repository name given by `flatpak remote-list`. The `--app` option means that only applications will be listed. Without it, runtimes that are provided by the repository will also be listed.

Finally, it is possible to remove a repository using:
```
flatpak remote-delete <REPOSITORY>
```

**Runtimes** are collections of dependencies that are used by applications. They are provided by repositories, in much the same way as repositories of packages. When installing an application, Flatpak will automatically install any required runtimes if they are available. This does require that the repositories containing those runtimes are added first.

In most cases, the GNOME SDK repository contains all the runtimes you might need. To add it, run:
```
flatpak remote-add --if-not-exists gnome https://sdk.gnome.org/gnome.flatpakrepo
```
`--if-not-exists` means that the repository will only be added if it isn't there already and gnome is the name for the repository.
