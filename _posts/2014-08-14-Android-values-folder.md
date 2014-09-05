---
layout: post
title:  "Android资源文件夹dpi的匹配顺序"
date:   2014-08-14 15:17:57
categories: Android
tags:
- values文件夹
---

相信对于Android适配，各个开发者都会觉得十分头疼。

今天在作values文件夹的dpi适配时，发生了一点小问题，故研究了一下dpi的匹配顺序。

测试机：nexus 4(xhdpi)

方法如下：

1. 在res目录下创建values、values-ldpi、values-mdpi、values-hdpi、values-xhdpi、values-xxhdpi文件夹，并创建strings.xml。添加一个string资源，名为test，数据分别为empty、ldpi、mdpi、hdpi、xhdpi、xxhdpi。
2. 用一个textview来显示该string。运行。
3. 注释掉values-xhdpi的string。运行。
4. 注释掉values-xxhdpi的string。运行。
5. 注释掉values-hdpi的string。运行。
6. 注释掉values-mdpi的string。运行。
7. 注释掉values的string。运行。
	
textview显示结果的顺序如下：

1.  xhdpi
2.  xxhdpi
3.  hdpi
4.  mdpi
5.  empty
6.  ldpi
据此结果，我认为，dpi的匹配顺序是先匹配自身的dpi，如果没有，则向大一级的dpi匹配；如果没有比自身大的dpi，则会向小一级的dpi匹配。最后才匹配values文件夹。

注意：在比ldpi大的dpi中，默认文件夹是比ldpi优先级更高的。