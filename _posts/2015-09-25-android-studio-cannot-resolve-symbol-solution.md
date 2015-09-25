---
layout: post
title:  "Android Studio cannot resolve symbol 解决办法"
date:   2015-09-25 11:26:39
categories: Android
tags:
- Android
- Android Studio
---

###背景故事

上班中，渣渣电脑给我蓝屏了。蓝屏也就算了，还不自动重启。不重启也就算了，Android Studio还直接傻了。

能编译能运行，就是所有的类都提示"cannot resolve symbol"。

###解决方法

重启了几次Android Studio都不行，然后就clean项目，再build，还是不行。

最后找到了这个方法:

> 点击菜单中的 “File” -> “Invalidate Caches / Restart”，然后点击对话框中的 “Invalidate and Restart”，清空 cache 并且重启。语法就会正确的高亮了。

记下来。方便以后找~
