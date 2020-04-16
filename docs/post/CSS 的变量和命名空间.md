# CSS 的变量和命名空间

![image-20200416093633057](I:\flonny\blog\docs\post\image-20200416093633057.png)

目前 *CSS* 变量标准处于 *Candidate Recommendation* 状态，目前大部份浏览器版本都已经支持这一特性，具体细节可以访问 [*caniuse.com*](https://caniuse.com/#search=var) 去查询

*CSS* 变量的语法

```css
/*定义自定义属性*/
--*
/*使用自定义属性*/
var(--*)
```

使用示例

```css
.container {
  --colorred:red;

}
.container .box{
  height:100px;
  background: var(--colorred)
}
```

CSS Variables 的继承特性