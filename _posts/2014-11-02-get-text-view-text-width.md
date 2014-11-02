---
layout: post
title:  "获取TextView显示的字符串宽度"
date:   2014-11-02 11:47:43
categories: Android
---

工作上有业务需要判断textview是否换行，我的做法是判断textview要显示的字符串的宽度是否超过我设定的宽度，若超过则会执行换行。

项目中的其他地方也有这样的需求，故直接使用了那一块的代码。如下

	public float getTextWidth(Context Context, String text, int textSize){
		TextPaint paint = new TextPaint();
		float scaledDensity = Context.getResource().getDisplayMetrics().scaledDensity;
		paint.setTextSize(scaledDensity * textSize);
		return paint.measureText(text);
	}
	
这里是使用了TextPaint的measureText方法。

不过在项目实践上发现了这个方法存在一些问题。当字符串存在字母数字时，就会有1-2像素的误差。也正是这个误差，导致代码上判断换行错误，使得界面上显示出错。

为了解决这个问题，搜到了这篇文章 [戳我](http://blog.csdn.net/lizzy115/article/details/7513552)

这篇文章中使用了另外一个方法测量，没有new TextPaint，而是使用了TextView自己的TextPaint，这个Paint通过**TextView.getPaint()**方法获得。

---

最后给出一个例子来看这两种方法的差别。

测试机是MI4，xxdpi

代码如下

	public class MainActivity extends Activity {
	
	private final static String TAG = "MainActivity";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		// 测试字符串
		// 测试例子均用15sp的字体大小
		String text = "测试中文";
		
		TextView textView = (TextView) findViewById(R.id.test);
		textView.setText(text);
		
		int spec = MeasureSpec.makeMeasureSpec(0, MeasureSpec.UNSPECIFIED);
		textView.measure(spec, spec);
		
		// getMeasuredWidth
		int measuredWidth = textView.getMeasuredWidth();
		
		// new textpaint measureText
		TextPaint newPaint = new TextPaint();
		float textSize = getResources().getDisplayMetrics().scaledDensity * 15;
		newPaint.setTextSize(textSize);
		float newPaintWidth = newPaint.measureText(text);
		
		// textView getPaint measureText
		TextPaint textPaint = textView.getPaint();
		float textPaintWidth = textPaint.measureText(text);
		
		Log.i(TAG, "测试字符串:" + text);
		Log.i(TAG, "getMeasuredWidth:" + measuredWidth);
		Log.i(TAG, "newPaint measureText:" + newPaintWidth);
		Log.i(TAG, "textView getPaint measureText:" + textPaintWidth);
		
	}
}

当测试字符串为: "测试中文"时，结果如下
	
	测试字符串:测试中文
	getMeasuredWidth:180
	measureText:180.0
	getPaint measureText:180.0
	
当测试字符串为: "测试英文abcd"时，
	
	测试字符串:测试英文abcd
	getMeasuredWidth:279
	newPaint measureText:278.0
	textView getPaint measureText:279.0
	
可见使用textView的TextPaint调用measureText方法得到的宽度才是真正的宽度。
