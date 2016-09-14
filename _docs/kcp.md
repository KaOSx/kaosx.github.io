---
layout: docs
status: publish
published: true
title: KCP Guide
permalink: /docs/kcp/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
wordpress_id: 1051
wordpress_url: http://kaosx.us/?page_id=1051
date: '2014-01-09 18:41:30 -0500'
date_gmt: '2014-01-09 18:41:30 -0500'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

[KaOS-Community-Packages](https://github.com/KaOS-Community-Packages) offers users the ability to submit working PKGBUILDs and supporting files in one central location, so all KaOS users can benefit with easy building of packages missing in the official repositories. Instead of writing all new scripts for this, Github is used as frontend. This gives a very powerful and secure interface, with good search functions, complete history for anything submitted and easy cooperation for anyone willing to maintain submitted packages.

### Applying for Membership
{: .offset}

First you need to have a Github account, this is **completely independent from KaOS**. Any account you already have there is usable. To apply for a new account just fill in the form at [Github](https://github.com/).
Once you have that, request your membership by filling in this form: 

<form class="form-group" role="form" action="https://formspree.io/veritasfarm@gmail.com" method="POST">
    <div class="form-group">
        <label for="name">Name</label>
        <input name="name" id="name" placeholder="Name..." class="form-control" type="text" required>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input name="email" id="email" placeholder="Email..." class="form-control" type="email" required>
    </div>
    <div class="form-group">
        <label for="subject">Subject</label>
        <input name="subject" id="subject" placeholder="Subject..." class="form-control" type="text" required>
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea name="message" id="message" placeholder="Github username..." class="form-control" rows="3" cols="20"></textarea>
    </div>
    <div class="form-group">
        <input value="Send" class="form-control" type="submit">
        <input type="hidden" name="_next" value="/docs/kcp_submit/" />
    </div>
    <div>
        <input type="text" name="_gotcha" style="display:none" />
    </div>
</form>

As soon as your name is added, you will have access to the [organization page](https://github.com/organizations/KaOS-Community-Packages/).

### Installing git
{: .offset}

For this, you will need to have git installed:
As always, make sure the system is fully up to date before installing any:

```
sudo pacman -Syu
```

Next:

```
sudo pacman -S git
```

### Submitting a Package
{: .offset}

Only submit packages that were adjusted for KaOS or you created yourself for KaOS. Blindly copying any existing PKGBUILD and submitting it to KCP is not the reason it was created for. If you can find working PKGBUILDs elsewhere, use them.

Once you have [build and **TESTED** your package](/docs/package/) locally, it is time to upload to KCP.  Before doing so, run the validity checker:

```
pckcp
```

in the same directory where your PKGBUILD resides, fix any parts that show as non-compliant with KCP. 
[![](/wp-content/uploads/2014/01/snapshot22.png){: .kcp-img-right}](/wp-content/uploads/2014/01/snapshot22.png) 
If you are familiar with git, then most these instructions will not be needed for you, and you might have your own preferred git work-flow, but for this guide, we'll use the Github web-interface as much as possible.

Go to your [main work page](https://github.com/organizations/KaOS-Community-Packages), and select "new repository". Fill in the repository name, by using the Package name, give a short description of your package, it will help users searching for certain type of packages, without having to know the actual package name.
[![](/wp-content/uploads/2014/01/snapshot31.png){: .kcp-img-right}](/wp-content/uploads/2014/01/snapshot31.png)
Select "Initialize this repository with a README".

Once you selected "Create Repository", the next page will give you an overview of this.

Now it is time to get this repository as a local git entry. To do so, you need to clone it, here we'll use the https method, since it will just use your github user-name and password, no need to setup a SSH key. Copy the HTTPS address to the clipboard.
[![](/wp-content/uploads/2014/01/snapshot4.png){: .kcp-img-right}](/wp-content/uploads/2014/01/snapshot4.png)

Next open your favorite terminal, and cd to the directory were you would like to create this, in this example we'll use ~/work:

```
cd ~/work
```

Now lets clone, using the copied entry on your clipbaord:

```
git clone https://github.com/KaOS-Community-Packages/Package_name.git
```

Open Dolphin in split view mode and navigate to the newly created folder in your ~/work directory on the left side. On the right side open the the directory where the files you have for your package are located, we'll use ~/build/package_name for this example. Copy the files (PKGBUILD, and any other files you needed to build your package, like .install, .desktop and/or patches) to the left (~/work/package_name).

Back in the terminal, these changes will be seen right away. Presume you still are in ~/work, so lets cd to package_name in ~/work:

```
cd package_name
```

now run:

```
git status
```

This will return the list of packages you just copied.
Now commit these changes to Github:

```
git add PKGBUILD
```

and any other file like:

```
git add package_name.install
```

and/or:

```
git add package_name.desktop
```

and/or:

```
git add some.patch
```

Write a short and clear message what and why you are committing:

```
git commit -am "initial commit of all files needed for package_name"
```

And push your commit:

```
git push
```

This will ask for your username and password on Github, once pushed, all files will be visible in the repository page on Github.

### Formatting standards for KCP
{: .offset}

To get to a reasonable standard in submitting, maintaining and contributing packages to KCP, use the following guidelines to get to a uniform way of providing PKGBUILD files, readme info and common courtesy in KCP.


* Only submit packages that were adjusted for KaOS or you created yourself for KaOS
* Do not use names of maintainers or contributors in PKGBUILD, anyone can contribute, keep the header clean from this
* Every package, application, support package or needed library has its own Github repository
* KaOS has no i686, reflect that in arch=('x86_64') line
* Avoid code with "if" for x86_64 and i686 sources/md5sum, just use the x86_64 version
* Discuss in the issue section what you want to contribute or change to an existing package
* Use the "star" button to vote for a package, packages with some votes will be moved to the KaOS repositories
* Provide relative links in the readme to packages needed for your applications, which are not in the repositories, but need to be build from KCP also. And show the URL for the package.

Example for readme.md code, providing relative links:

```markdown
owncloud-client
===============
Description:
ownCloud is a software system for what is commonly termed cloud storage, for your personal Server.
http://owncloud.org/
Needed packages from KCP:
Download and run makepkg -si in the package directory (with Dolphin and F4):
[qtkeychain](../../../qtkeychain)
[iniparser](../../../iniparser)
[ocsync](../../../ocsync)
```

### Using kcp helper package or Octopi
{: .offset}

Since May 2014 building, searching or getting the needed files from KaOS Community Packages has been simplified with the addition of the package "kcp". It comes pre-installed on any system that is installed with an ISO from June 2014 or later.
If not installed yet, get it with:

```
sudo pacman -Syu
sudo pacman -S base-devel kcp
```

Select all for the base-devel group.

To use kcp
searches:

```
kcp -s partial_package_name<
```

build and install:

```
kcp -i package_name
```

to get only the needed files to build the package yourself with makepkg:

```
kcp -g package_name
```

The kcp helper package is build into Octopi, see this instructional video how to use:

[Hands on with Octopi, part 3 - KCP](http://kaosx.us/media/octopi_kcp.webm)

Remember though, simplifying this did not change any to the fact that **you are the one building, installing and maintaining packages not supported by KaOS**. These are all build from files submitted by other users, make sure to check the correctness of any such package, check for updates, and rebuild when changes in the KaOS repositories demands a rebuild of your package(s).

### Example PKGBUILD for use in KCP
{: .offset}

[PKGBUILD.proto](http://kaosx.us/media/kaos-pkgbuild-proto.txt)

### Video tutorial KCP in Spanish
{: .offset}

[KCP video tutorial](https://www.youtube.com/v/4DIMhgZpfqQ&autoplay=1)
