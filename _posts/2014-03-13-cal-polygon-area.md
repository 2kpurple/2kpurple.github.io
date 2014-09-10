---
layout: post
title:  "给出一凸多边形的坐标，计算其面积"
date:   2014-03-13 18:44:27
categories: 杂
---

这条是去笔试时做的题目。当时想的太复杂。其实十分简单。

题目要求，坐标是顺时针给出。题目要求使用海伦公式来计算三角形面积。

每次添加一个点，即相当于添加了一个新的三角形。

用一个循环即可计算出。

{% highlight java %}
public class Test {
 
    public static double getArea( Point p1, Point p2, Point p3 ){
        double a = Math.sqrt((p1.x - p2.x)*(p1.x - p2.x) + (p1.y - p2.y)*(p1.y - p2.y));
        double b = Math.sqrt((p2.x - p3.x)*(p2.x - p3.x) + (p2.y - p3.y)*(p2.y - p3.y));
        double c = Math.sqrt((p1.x - p3.x)*(p1.x - p3.x) + (p1.y - p3.y)*(p1.y - p3.y));
        double p = (a + b + c) / 2;
        double s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        System.out.println("这是小三角形的面积 " + s);
        return s;
    }
 
    public static double get(Point[] points){
        double s = 0;
        //每当添加一个点，相当于添加了一个三角形，把每次增加的三角形都加起来就是最后答案
        for (int i = 2 ; i < points.length ; i++){
            s += getArea(points[0], points[i-1], points[i]);
        }
        return s;
    }
 
    public static void main(String args[]) {
        Point[] points = {
                new Point(0, 0),
                new Point(1, 0),
                new Point(2, 0),
                new Point(2, 1),
                new Point(2, 2),
                new Point(1, 2),
                new Point(0, 1)
        };
 
        System.out.println(get(points));
    }
}
{% endhighlight %}