---
layout: post
title:  "Android中资源文件夹res/raw和assets"
date:   2013-12-28 01:17:57
categories: Android
tags:
- Android
---

####res/raw和assets的相同点：

- 两者下的文件在打包后会原封不动的保存在apk包中，不会被编译成二进制。

####res/raw和assets的不同点：
- res/raw中的文件会被映射到R.java文件中，访问的时候直接使用资源ID即R.id.filename；assets文件夹下的文件不会被映射到R.java中，访问的时候需要AssetManager类。
- res/raw不可以有目录结构，而assets则可以有目录结构，也就是assets目录下可以再建立文件夹。

####res/raw和assets的读取方法：
- 读取res/raw下的文件资源，通过以下方式获取输入流来进行写操作
{% highlight java %}
InputStream is = getResources().openRawResource(R.id.filename);
{% endhighlight %}
- 读取assets下的文件资源，通过以下方式获取输入流来进行写操作
{% highlight java %}
AssetManager am = null;  
am = getAssets();  
InputStream is = am.open("filename");
{% endhighlight %}