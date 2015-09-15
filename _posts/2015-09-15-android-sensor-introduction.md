---
layout: post
title:  "Android中传感器的values介绍"
date:   2015-09-15 18:39:40
categories: Android
tags:
- Android
- 传感器
---

###传感器

####类型
- TYPE_ACCELEROMETER 加速度传感器
- TYPE_AMBIENT_TEMPERATURE 温度传感器(测量室温)
- TYPE_GRAVITY 重力传感器
- TYPE_GYROSCOPE 陀螺仪
- TYPE_LIGHT 光传感器
- TYPE_LINEAR_ACCELERATION 线性加速器
- TYPE_MAGNETIC_FIELD 磁力传感器
- TYPE_ORIENTATION 方向传感器
- TYPE_PRESSURE 压力传感器
- TYPE_PROXIMITY 距离传感器
- TYPE_RELATIVE_HUMIDITY 相对湿度传感器
- TYPE_ROTATION_VECTOR 旋转向量
- TYPE_TEMPERATURE 温度传感器(设备温度)

####注意
以下使用到的所有坐标系均以下图为准
![坐标轴](http://developer.android.com/images/axis_device.png)

####加速度传感器(TYPE_ACCELEROMETER)

所有的数值都以(m/s^2)为单位:
- values[0]: x轴减去重力轴x的加速度
- values[1]: y轴减去重力轴y的加速度
- values[2]: z轴减去重力轴x的加速度

因此在手机静止平放时，values[0]和values[1]应该是0，而values[2]应该为-g。(g为重力加速度)

####磁力传感器(TYPE_MAGNETIC_FIELD)

所有的数值都是以微特斯拉(uT)为单位测量设备周围的x，y，z轴的磁力。

####陀螺仪传感器(TYPE_GYROSCOPE)

values以r/s为单位来测量设备x，y，z的旋转速率。规定逆时针为正方向。

####光传感器(TYPE_LIGHT)

values[0]: 以lux为单位表示周围的亮度

####气压传感器(TYPE_PRESSURE)

values[0]: 以hPa为单位表示周围的气压

####距离传感器(TYPE_PROXIMITY)

values[0]: 以cm为单位表示传感器到物体之间的距离

####重力传感器(TYPE_GRAVITY)

三维向量表示重力的方向和大小。单位为m/s^2。

当设备静止的时候，重力传感器的输出恒等于加速度传感器的输出。

####线性加速度传感器(TYPE_LINEAR_ACCELERATION)

三维向量表示设备x，y，z方向上的加速度但不包括重力。单位为m/s^2。

加速度传感器、重力传感器、线性加速度传感器的输出存在以下关系：

> 加速度传感器 = 重力传感器 + 线性加速度传感器

####旋转向量传感器(TYPE_ROTATION_VECTOR)

旋转矢量用角和轴的组合来代表设备的取向，即设备绕着轴（X、Y或Z）旋转角度θ。

values分别是x*sin(θ/2), y*sin(θ/2), z*sin(θ/2)

(这个我也不太懂

####方向传感器(TYPE_ORIENTATION)

方向传感器的值都是以度(degrees)为单位，

values[0]: Azimuth(向量的水平方向)。北极和y轴之间围绕z轴的角度。取值为0到359。0表示北方，90表示东方，180表示南方，270表示西方。

values[1]: Pitch(仰角)。绕x轴旋转的角度，z轴向y轴旋转为正方向。

values[2]: Roll。绕y轴旋转的角度，以设备顺势针旋转为正方向。

> 注意：该传感器为软件传感器，android已废弃。改为使用旋转矢量来计算。

####湿度传感器

values[0]: 设备周围空气的相对湿度。

> 当相对湿度和室温测量出来之后，可以计算露点(dew point)和绝对湿度(absolute humidity)。
> 计算方法详见 [此处](http://developer.android.com/reference/android/hardware/SensorEvent.html#values)

####室温传感器(TYPE_AMBIENT_TEMPERATURE)
values[0]: 室温，以摄氏度为单位。

