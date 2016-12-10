---
layout: docs
status: publish
published: true
title: Initial Server Setup with LAMP
permalink: /docs/lemp/
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

The LEMP stack is a group of open source software used to get web servers up and running. The acronym stands for Linux, Nginx (say “Engine-X”!), MySQL, and PHP.

### Why use Nginx?
Nginx is a powerful app to provide a web server as same as Apache. It can also be used as a reverse proxy for many protocols (http(s) of course but also imap, udp, tcp, smtp, etc.). It has very good performances for serving static files or dynamics files (to serve php files it doesn’t use php directly but php-fpm (php through the FastCGI protocol)).

The architecture and the config’s syntax of Nginx and Apache are a bit different. For Nginx the entire configuration is server-side: it doesn’t use .htaccess files. That means that the settings are completely and statically loaded at Nginx’s startup. Only the server’s owner can modify the configuration and not the website’s owner. Syntax is different, too. For example the URL rewriting instructions for Apache (often wrotten in a .htaccess) could looks like this (Drupal example):

```
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php?q=$1 [L,QSA]
```

The similar instruction for Nginx is:

```
try_files $uri $uri/ /index.php$is_args$args;
```

to put in a _Location_ block.

Using Nginx or Apache is a personnal choice. If you’re the owner of the server and need very good performances, Nginx is probably a better choice. But if your website is on a shared server, it mostly uses Apache because you haven’t the right to configure the server and you need to use .htaccess files to configure specific rules for your website.

### Configure SSH
{: .offset}

Read the __Configure SSH__ part of the [LAMP documentation](/docs/lamp). It is exactly the same thing.

## Installing LEMP
{: .offset}

### Install Nginx
{: .offset}
As always, make sure the system is fully up to date before installing any:

```
sudo pacman -Syu
```

Once the update is complete, we can install Nginx:

```
sudo pacman -S nginx
```

After Nginx  is installed, we need to make some changes in the configuration.

Open up the nginx configuration file:

```
sudo micro /etc/nginx/conf/nginx.conf
```

_Notice: the original configuration is saved to `/etc/nginx/conf/nginx.default`. **Never remove or modify this file!** If you completely broke your nginx configuration you could have to copy the `nginx.conf.default` to restore the initial settings._

Modify the `worker_processes` value as this:

```
worker_processes auto;
```

It permits to Nginx to use all CPU cores if necessary.

Now, let’s modify the how the activities are registred to the logs. By default only the `access.log` is set and it is not very readable. If there’s an error, we would know why. To do that, we’ll activate the logs for the errors. Uncomment:

```
#error_log  /var/log/nginx/error.log;
```

Replace it by:

```
error_log  /var/log/nginx/error.log;
```

Now we’ll make a human-readable access.log. Uncomment:

```
#log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
#                  '$status $body_bytes_sent "$http_referer" '
#                  '"$http_user_agent" "$http_x_forwarded_for"';

#access_log  logs/access.log  main;
```

Replace it by:

```
log_format  main  'When   : $time_local\n'
                  'From   : $remote_addr "$http_user_agent"\n'
                  'To     : $host\n'
                  'Referer: $http_referer\n'
                  'Request: "$request" ($status)\n'
                  'Sent   : $body_bytes_sent b\n'
                  '----------------------------------\n';

access_log  /var/log/nginx/access.log  main;
```

Now it’s time to launch nginx:

```
sudo systemctl start nginx
```

Directing your browser to your server’s IP address (http://12.34.56.789) will display the default welcome page of Nginx. To check if your server work, we will modify the `/usr/share/nginx/html/index.html` file:

```
sudo micro /usr/share/nginx/http/index.html
```

Replace all by:

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

Read the __Install MariaDB__ part of the [LAMP documentation](/docs/lamp). It is exactly the same thing.

### Install PHP
{: .offset}

PHP is an open source web scripting language that is widely used to build dynamic webpages.

To install PHP, open terminal and type in this command.

```
sudo pacman -S php
```

To use PHP, Nginx will need to use the php-fpm service. Let’s start it:

```
sudo systemctl start php-fpm
```

The configuration of the php-fpm service is on the file `/etc/php/php-fpm.d/www.conf`. We won’t modify it but Nginx needs to know which is the socket address of php-fpm service. It is the value of the `listen` variable:

```
cat www.conf | grep "listen ="
```

You should see something like:

```
listen = /run/php-fpm/php-fpm.sock
```

Here, the address of the socket is `/run/php-fpm/php-fpm.sock` that nginx will need to use to provide php files. Time to modify the nginx configuration:

```
sudo micro /etc/nginx/conf/nginx.conf
```

We’ll need to add a specific **Location** block for php files inside the **server** block. Find the following line (you can use CTRL+F):

```
location = /50x.html {
```

Just after this block (ie. after the next closing bracket `}` following this line), add this:

```
location ~ \.php$ {
  root /usr/share/nginx/html;

  # regex to split $uri to $fastcgi_script_name and $fastcgi_path;
  fastcgi_split_path_info ^(.+\.php)(/.+)$;

  # Check that the PHP script exists before passing it
  try_files $fastcgi_script_name =404;

  # Bypass the fact that try_files resets $fastcgi_path_info
  set $path_info $fastcgi_path_info;

  fastcgi_param  PATH_INFO $path_info;
  fastcgi_index  index.php;
  include        fastcgi.conf;

  # The address of the php-fpm socket
  fastcgi_pass   unix:/run/php-fpm/php-fpm.sock;
}
```

Now you should be done configuring `/etc/nginx/conf/nginx.conf` so save this file and restart Nginx:

```
sudo systemctl restart nginx
```

### See your PHP Config and Add Programs to Startup
{: .offset}

After LEMP is completely installed, we can take a look and see the PHP details by creating a quick php info page

To set this up, first create a new blank file:

```
sudo micro /usr/share/nginx/http/info.php
```

Add in the following line:

```
<?php
phpinfo();
```

Then Save and Exit.

Visit your php info page (make sure you replace the example ip address with your correct one): http://12.34.56.789/info.php

To close out the LEMP installation, add the Nginx server, php-fpm and MySQL daemons to the list of programs that run upon server startup:

```
sudo systemctl enable mysqld php-fpm nginx
```

Congratulations, you have now installed the LEMP server on KaOS!

### More Comprehensive Settings

This guide is here is here to explain how to get started with LEMP and once the system has gone through the “learning” it is time to use the very complete official documentation, mostly for Nginx:

* [Nginx Wiki](https://www.nginx.com/resources/wiki/)
* [Some configs’ “recipes” for famous website apps](https://www.nginx.com/resources/wiki/start/#pre-canned-configurations)
* [php-fpm configuration directives](http://php.net/manual/en/install.fpm.configuration.php)

