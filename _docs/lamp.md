---
layout: docs
status: publish
published: true
title: Initial Server Setup with LAMP
permalink: /docs/lamp/
author:
  display_name: demm
  login: demm
  email: demm@kaosx.us
  url: ''
author_login: demm
author_email: demm@kaosx.us
date: '2016-11-28 11:41:30 -0500'
date_gmt: '2016-11-28 11:41:30 -0500'
categories: []
tags: []
comments: []
---
* This will become a table of contents (this text will be scraped).
{:toc}

### The Basics
{: .offset}

When you first begin to access your KaOS install for use as a server, there are a few early steps you should take to make it more secure. Some of the first tasks can include configuring SSH.

The LAMP stack is a group of open source software used to get web servers up and running. The acronym stands for Linux, Apache, MySQL, and PHP.

### Configure SSH
{: .offset}

Time first to make accessing the server over SSH more secure.

Open the configuration file. The default cli editor for KaOS will be used in this Guide, replace micro with nano or vim to your liking.

```
sudo micro /etc/ssh/sshd_config
```

Find the following sections and change the information where applicable. Be sure to uncomment the lines as well, otherwise the changes will not take effect. (You can find words and phrases in the file by pressing Control-F)

```
Port 25000
PermitRootLogin no
```

Port: Although port 22 is the default, you can change this to any number between 1025 and 65536. In this example, I am using port 25000. Make sure you make a note of the new port number. You will need it to log in in the future. This change will make it more difficult for unauthorized people to log in.

PermitRootLogin: change this from yes to no to stop future root login. You will now only be logging on as the new user.

Reload SSH, and it will implement the new ports and settings.

```
sudo systemctl restart sshd
```

To test the new settings, open a new terminal window and login as your user.

You can find your IP address with hostname -i

Don’t forget to include the new port number.

```
ssh -p 25000 exampleuser@123.45.67.890
```

Your prompt should now say:

```
[exampleuser@yourhostname ~]$
```

## Installing LAMP
{: .offset}

### Install Apache
{: .offset}
Apache is a free open source software that runs over 50% of the world’s web servers.

As always, make sure the system is fully up to date before installing any:

```
sudo pacman -Syu
```

Once the update is complete, we can install Apache:

```
sudo pacman -S apache
```
After Apache is installed, we need to make a couple of changes in the configuration.

Open up the apache configuration file:

```
sudo micro /etc/httpd/conf/httpd.conf
```

Comment out the unique_id_module (you can use ctrl F to find it quickly):

~~#LoadModule unique_id_module modules/mod_unique_id.so~~

```
LoadModule unique_id_module modules/mod_unique_id.so
```

Restart Apache:

```
sudo systemctl restart httpd
```

During the apache restart, you may get a notice that says the following:

```
httpd: apr_sockaddr_info_get() failed for droplet1
httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1 for ServerName
                                                                         [DONE]
```

Although this alert does not interfere with the apache launch, you can easily eliminate it if you like by adding your hostname to your configuration.

Open up the hosts file:

```
sudo micro /etc/hosts
```

Add your hostname to the end of the line beginning with 127.0.0.1:

```
127.0.0.1       localhost.localdomain   localhost server1
```
Subsequent restarts of Apache will no longer display that message. With that, Apache is now installed on your server. Directing your browser to your server’s IP address (http://12.34.56.789) will display an auto-index directory. You can quickly try out a sample page by adding an index.html file to KaOS’s document root directory, located within “srv/http”:

```
sudo micro /srv/http/index.html
```

```
<html>
<title>Welcome</title>
<body>
<h2>Hello, Welcome to KaOS</h2>
</body>
</html>
```

You can visit the placeholder page by going to your server’s IP address in your browser.


### How to Find your Server’s IP address
{: .offset}

You can run the following command to reveal your server’s IP address.

```
curl -s icanhazip.com
```

### Install MariaDB
{: .offset}

MariaDB is a powerful database management system used for organizing and retrieving data.  It is a drop in replacement of MySQL.
Many commands will still use `mysql`

To install MariaDB, open terminal and type in these commands:

```
sudo pacman -S mariadb
```

Hit enter if it asks you anything, unless you know you don't want the defaults.

Once you have installed MariaDB, start it by running

```
sudo systemctl start mariadb
```

Finish up by running the MariaDB set up script:

```
sudo mysql_secure_installation
```

The process will ask you for your current MySQL root password (not to be confused with your server password) and, since it has not yet been set, simply press enter.

When prompted, “Set root password?” type Y, and afterwards enter in your new MySQL root password.

After that it’s easiest just to say Yes to all the options. At the end, MySQL will reload and implement the new changes.

```
By default, a MySQL installation has an anonymous user, allowing anyone
to log into MySQL without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y                                            
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] y
... Success!

By default, MySQL comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] y
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...
```

Once you're done installing MariaDB, finish the LAMP stack by installing PHP.

### Install PHP
{: .offset}

PHP is an open source web scripting language that is widely used to build dynamic webpages.

To install PHP, open terminal and type in this command.

```
sudo pacman -S php php-apache
```

PHP should also be added to the apache configuration file:

```
sudo  micro /etc/httpd/conf/httpd.conf
```

Paste in this text block within the config.

```
# Use for PHP 7.x:
LoadModule php7_module       modules/libphp7.so
AddHandler php7-script php
Include conf/extra/php7_module.conf
```

When loading php7_module the httpd.service often fails with this error in the journal:

```
Apache is running a threaded MPM, but your PHP Module is not compiled to be threadsafe.  You need to recompile PHP.
```

For this you need to replace mpm_event_module with mpm_prefork_module:

~~LoadModule mpm_event_module modules/mod_mpm_event.so~~

```
LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
```
Now you should be done configuring `/etc/httpd/conf/httpd.conf` so save this file and restart Apache:

```
sudo systemctl restart httpd
```

### See your PHP Config and Add Programs to Startup
{: .offset}

After LAMP is completely installed, we can take a look and see the PHP details by creating a quick php info page

To set this up, first create a new blank file:

```
sudo micro /srv/http/info.php
```

Add in the following line:

```
<?php
phpinfo();
?>
```

Then Save and Exit.

Visit your php info page (make sure you replace the example ip address with your correct one): http://12.34.56.789/info.php

To close out the LAMP installation, add the apache server and MySQL daemons to the list of programs that run upon server startup:

```
sudo systemctl enable mariadb httpd
```

Congratulations, you have now installed the LAMP server on KaOS!
