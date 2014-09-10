---
layout: post
title:  "Mac下MySql卸载方法"
date:   2014-05-23 14:29:07
categories: Mac
tags:
- Mysql
- Mac
---

先停止所有mysql有关进程。

{% highlight bash %}
sudo rm /usr/local/mysql
sudo rm -rf /usr/local/mysql*
sudo rm -rf /Library/StartupItems/MySQLCOM
sudo rm -rf /Library/PreferencePanes/My*
vim /etc/hostconfig and removed the line MYSQLCOM=-YES-
rm -rf ~/Library/PreferencePanes/My*
sudo rm -rf /Library/Receipts/mysql*
sudo rm -rf /Library/Receipts/MySQL*
sudo rm -rf /var/db/receipts/com.mysql.*
{% endhighlight %}
