# CSS

## 2020/3/19

### css 盒模型

#### css 盒模型分为两种

1. 标准盒模型
2. 代替（IE）盒模型

标准盒模型的高度计算为 padding + border + height

代替盒模型高度计算为 height

盒模型在页面上实际所占空间都需要加上 margin

#### margin （外边距）的折叠

margin 的折叠出现在以下情况中

1. **文档流**中的页面上**相邻的上下**两个元素，这两个元素不能为行内元素(display不能为 inline、inline-block、inline-flex、inline-table).
2. 没有内容将父元素和子元素隔离
3. 空的块级元素的上下外边距