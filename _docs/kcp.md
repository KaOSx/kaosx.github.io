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

<a title="KaOS-Community-Packages" href="https://github.com/KaOS-Community-Packages">KaOS Community Packages</a> offers users the ability to submit working PKGBUILDs and supporting files in one central location, so all KaOS users can benefit with easy building of packages missing in the official repositories. Instead of writing all new scripts for this, Github is used as frontend. This gives a very powerful and secure interface, with good search functions, complete history for anything submitted and easy cooperation for anyone willing to maintain submitted packages.

### Applying for Membership
First you need to have a Github account, this is **completely independent from KaOS**. Any account you already have there is usable. To apply for a new account just fill in the form at <a title="Github" href="https://github.com/">Github</a>
Once you have that, request your membership by filling in this form: 

<form role="form" action="http://formspree.io/veritasfarm@gmail.com" method="POST">
    <div class="form-group">
        <label for="name">Name</label>
        <input name="name" id="name" placeholder="Name..." class="form-control" type="text">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input name="email" id="email" placeholder="Email..." class="form-control" type="email">
    </div>
    <div class="form-group">
        <label for="subject">Subject</label>
        <input name="subject" id="subject" placeholder="Subject..." class="form-control" type="text">
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea name="message" id="message" placeholder="Github username..." class="form-control" rows="3" cols="20"></textarea>
    </div>
    <div class="form-group">
        <input value="Send" class="form-control" type="submit">
    </div>
</form>

As soon as your name is added, you will have access to the <a href="https://github.com/organizations/KaOS-Community-Packages/">organization page</a>

### Installing git
For this, you will need to have git installed:
As always, make sure the system is fully up to date before installing any:
<code>sudo pacman -Syu</code>
Next:
<code>sudo pacman -S git</code>

### Submitting a Package
Once you have <a title="Packaging Guide" href="http://kaosx.us/packaging-guide/">build and <strong>TESTED</strong> your package</a> locally, it is time to upload to KCP.  Before doing so, run the validity checker:
<code>pckcp</code>
in the same directory where your PKGBUILD resides, fix any parts that show as non-compliant with KCP. <a href="http://kaosx.us/wp-content/uploads/2014/01/snapshot22.png"><img class="alignright size-thumbnail wp-image-1062" src="http://kaosx.us/wp-content/uploads/2014/01/snapshot22-150x150.png" alt="kcp1" width="150" height="150" /></a> If you are familiar with git, then most these instructions will not be needed for you, and you might have your own preferred git work-flow, but for this guide, we'll use the Github web-interface as much as possible.

Go to your <a href="https://github.com/organizations/KaOS-Community-Packages">main work page</a>, and select "new repository". Fill in the repository name, by using the Package name, give a short description of your <a href="http://kaosx.us/wp-content/uploads/2014/01/snapshot31.png"><img class="alignleft size-thumbnail wp-image-1063" src="http://kaosx.us/wp-content/uploads/2014/01/snapshot31-150x150.png" alt="kcp2" width="150" height="150" /></a>package, it will help users searching for certain type of packages, without having to know the actual package name.
Select "Initialize this repository with a README".

Once you selected "Create Repository", the next page will give you an <a href="http://kaosx.us/wp-content/uploads/2014/01/snapshot4.png"><img class="alignright size-thumbnail wp-image-1065" src="http://kaosx.us/wp-content/uploads/2014/01/snapshot4-150x150.png" alt="kcp3" width="150" height="150" /></a>overview of this.

Now it is time to get this repository as a local git entry. To do so, you need to clone it, here we'll use the https method, since it will just use your github user-name and password, no need to setup a SSH key. Copy the HTTPS address to the clipboard.

Next open your favorite terminal, and cd to the directory were you would like to create this, in this example we'll use ~/work:
<code>cd ~/work</code>
Now lets clone, using the copied entry on your clipbaord:
<code>git clone https://github.com/KaOS-Community-Packages/Package_name.git</code>

Open Dolphin in split view mode and navigate to the newly created folder in your ~/work directory on the left side. On the right side open the the directory where the files you have for your package are located, we'll use ~/build/package_name for this example. Copy the files (PKGBUILD, and any other files you needed to build your package, like .install, .desktop and/or patches) to the left (~/work/package_name).

Back in the terminal, these changes will be seen right away. Presume you still are in ~/work, so lets cd to package_name in ~/work:
<code>cd package_name</code>
now run:
<code>git status</code>
This will return the list of packages you just copied.
Now commit these changes to Github:
<code>git add PKGBUILD</code>
and any other file like:
<code>git add package_name.install</code>
and/or:
<code>git add package_name.desktop</code>
and/or:
<code>git add some.patch</code>
Write a short and clear message what and why you are committing:
<code>git commit -am "initial commit of all files needed for package_name"</code>
And push your commit:
<code>git push</code>
This will ask for your username and password on Github, once pushed, all files will be visible in the repository page on Github.

### Formatting standards for KCP
To get to a reasonable standard in submitting, maintaining and contributing packages to KCP, use the following guidelines to get to a uniform way of providing PKGBUILD files, readme info and common courtesy in KCP.

<ul>
<li>Do not use names of maintainers or contributors in PKGBUILD, anyone can contribute, keep the header clean from this</li>
<li>Every package, application, support package or needed library has its own Github repository</li>
<li>KaOS has no i686, reflect that in arch=('x86_64') line</li>
<li>Avoid code with "if" for x86_64 and i686 sources/md5sum, just use the x86_64 version</li>
<li>Discuss in the issue section what you want to contribute or change to an existing package</li>
<li>Use the "star" button to vote for a package, packages with some votes will be moved to the KaOS repositories</li>
<li>Provide relative links in the readme to packages needed for your applications, which are not in the repositories, but need to be build from KCP also. And show the URL for the package.</li>
</ul>
Example for readme.md code, providing relative links:

<blockquote>owncloud-client
===============</p>
<p>Description:<br />
ownCloud is a software system for what is commonly termed cloud storage, for your personal Server.</p>
<p>http://owncloud.org/</p>
<p>Needed packages from KCP:</p>
<p>Download and run makepkg -si in the package directory (with Dolphin and F4):</p>
<p>[qtkeychain](../../../qtkeychain)</p>
<p>[iniparser](../../../iniparser)</p>
<p>[ocsync](../../../ocsync)</blockquote>

### Using kcp helper package or Octopi
Since May 2014 building, searching or getting the needed files from KaOS Community Packages has been simplified with the addition of the package "kcp". It comes pre-installed on any system that is installed with an ISO from June 2014 or later.
If not installed yet, get it with:
<code>sudo pacman -Syu<br />
sudo pacman -S base-devel kcp</code><br />
Select all for the base-devel group.

To use kcp
searches:
<code>kcp -s partial_package_name</code>
build and install:
<code>kcp -i package_name</code>
to get only the needed files to build the package yourself with makepkg:
<code>kcp -g package_name</code>
<p>The kcp helper package is build into Octopi, see this instructional video how to use:
<a class="fancybox-iframe" title="octopi kcp" href="http://kaosx.us/media/octopi_kcp.webm">Hands on with Octopi, part 3 - KCP</a>

<p>Remember though, simplifying this did not change any to the fact that <strong>you are the one building, installing and maintaining packages not supported by KaOS</strong>. These are all build from files submitted by other users, make sure to check the correctness of any such package, check for updates, and rebuild when changes in the KaOS repositories demands a rebuild of your package(s).

### Example PKGBUILD for use in KCP
<a title="PKGBUILD example" download="PKGBUILD.proto" href="http://kaosx.us/media/kaos-pkgbuild-proto.txt">PKGUILD.proto</a>

### Video tutorial KCP in Spanish
<a class="fancybox-youtube" title="Video KCP-Guide"  href="https://www.youtube.com/v/4DIMhgZpfqQ&autoplay=1">KCP video tutorial</a>
