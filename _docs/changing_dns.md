---
layout: docs
status: publish
published: true
title: Changing/encrypting the DNS
permalink: /docs/changing_dns/
author:
  display_name: Even Becker
  login: evenbecker
  url: ''
author_login: demm
# Even Becker won't show his email address
# Feel free to add authors and to modify this file
#wordpress_id:
#wordpress_url:
date: '2024-05-01 10:06:56 +0200'
date_gmt: '2024-05-01 10:06:56 +0200'
categories: []
tags: []
comments: []
---

{:toc}



### Why changing the DNS server?
{: .offset}


Your ISP (Internet Service Provider) may not offer high-quality threat blocking, at least not without a charge. Everyday, many network attackers try to snoop on or even hijack your DNS queries to steal your financial and personal information. Using a different DNS service can be a good protection.


### Changing the DNS server
{: .offset}

Changing the DNS server is easy. First, check if systemd-resolved is running:
```
systemctl status systemd-resolved

```

If it is inactive, do:

```
sudo systemctl enable --now systemd-resolved

```
Then edit the following file: /etc/systemd/resolved.conf

For example, to use Google’s DNS server, copy these lines:
```
[Resolve]
DNS=8.8.8.8#dns.google 8.8.4.4#dns.google
```
If you want further security/privacy, you can use Quad9’s DNS server with:
```
[Resolve]
DNS=9.9.9.9#dns.quad9.net 149.112.112.112#dns.quad9.net
```

Quad9 has an exceptionally large list of known malicious domains and block them to help prevent users’ computers and smart devices from connecting to malware-ridden and phishing websites. In addition, Quad9 does not collect or sell user data. More info see this [Quad9 article](https://www.quad9.net/news/blog/why-should-i-switch-to-a-security-and-privacy-focused-dns-server/)

### DNS Encryption
{: .offset}

DNS over TLS (DoT) is a system-wide DNS encryption technique. It is an efficient protection against network attackers.
Government surveillance also involves collecting and analyzing DNS queries. A VPN subscription is probably the best protection but it is not free. In this case, DoT can be a good and free alternative. The DNS provided by your ISP may not support DoT, so Quad9 DNS is a good choice.

To use DoT, add this line in /etc/systemd/resolved.conf :
```
DNSOverTLS=yes
```

