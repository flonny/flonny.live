# 总结

> 在看面试题的时候很多题目都半桶水,能讲出一些点,但讲的不是很透彻

## css 兼容性有哪几种处理方案

1. css hack
2. 添加浏览器前缀,目前一般使用postcss 中的auto-prefixes

## css3的新属性

CSS3 所分的模块

 - color module

 - font module

 - box module

 - border and background module

 - selector module

   

## 怎么理解margin越界的问题

margin 越界应该指的是 margin 合并中的父子元素的外边距重叠问题

上边界越界怎么造成的：

- [x] 子元素和父元素之间没有行内内容
- [x] 父元素没有设置了border
- [x] 父元素没有设置了padding
- [x] 父元素没有形成了块格式化上下文
- [x] 父元素没有使用清除浮动来分割父元素上边界和其子元素上边界

这五点都没有设置，那就会上边界外边距越界的问题

下边界外边距越界：

- [x] 父元素没有设置了border
- [x] 父元素没有设置了padding
- [x] 子元素margin-bottom和父元素margin-bottom之间没有行内内容

### 追问， 如何使用清楚浮动来解决这个问题

> 使用伪类元素

```
.clear::before{
	content: '';
	display:table;
	clear: both;
}
```

# es6 参数解构

```javascript
const sum = (...args) {
	return args.reduce((a,b) => {
       return a+b 
    },0)
}
```

