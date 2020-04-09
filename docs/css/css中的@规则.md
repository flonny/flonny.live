# 探寻css 的@规则

@charset

一般不用设置, 跟随 `html` 的编码格式, 当 `css` 文件需要设置不同编码时才需要

```css
@charset "charset-name"
```

 `@charset` 要设置 在css 文件的顶端, 文件保存格式也需要和这个设置相同

> **重要提示：**由于HTTP标头的优先级高于文档内`@charset`声明的优先级，因此应始终考虑是否已在HTTP标头中声明字符编码。如果是，则`@charset`必须设置为声明相同的编码，并且只有在没有HTTP标头（例如，从本地驱动器）的上下文中读取样式表时才会起作用。
>
> https://www.w3.org/International/questions/qa-css-charset

而由于http

@media

​	@media print{}

​	@media (max-width:)

@import

@page

@document



@namespace

@keyframes

@font-size

@supports

@viewport 