---
layout: post
title:  "Yosemite上配置虚拟主机403 forbidden问题"
date:   2014-10-31 2:19:48
categories: web
---

之前在10.9的时候配置了apache的虚拟主机，如下

	  <VirtualHost *:80>
	      DocumentRoot "/Users/PurpleK/Programming/web/root"
	      ServerName localhost
	      ErrorLog "/private/var/log/apache2/sites-error_log"
	      CustomLog "/private/var/log/apache2/sites-access_log" common
	      <Directory />
	                  Options Indexes FollowSymLinks MultiViews
	                  AllowOverride None
	                  Order deny,allow
	                  Allow from all
	        </Directory>
	  </VirtualHost>
	  
我升级yosemite后，httpd.conf中的虚拟主机配置文件被注释了。

首先我把，include的#号去掉了。如下。

	# Virtual hosts
	Include /private/etc/apache2/extra/httpd-vhosts.conf
	
但是配置后，重启apache，出现了403的问题。

很奇怪，明明已经添加了allow from all了。

只好问google了。

最后找出这个帖子。 [戳我](http://forums.macrumors.com/showthread.php?t=1744944)

帖子中有这样一个回复：

	If you are using virtual hosts you will probably need to change your configuration files somewhat. In particular you will need to change the following:
	
	2.2 configuration:
	Order allow,deny
	Allow from all
	
	2.4 configuration:
	Require all granted
	
原来是2.4之后需要使用 **Require all granted** 来控制权限。

而yosemite上的apache是2.4.9版本。

最后在配置中添加上 **Require all granted** 就没有问题了。