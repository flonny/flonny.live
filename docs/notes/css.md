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

## 2020/3/20

### 块格式化上下文（Block Formatting Context）

- 块格式化上下文是容器对于其子项的排版行为的一种规则

- 在块格式化上下文中，其盒模型是从上到下排列，并且其外边距会出现折叠的情况

- 两个拥有块格式化上下文容器不存在外边距折叠（可以利用这个特性创建块格式化上下文容器解决外边距折叠问题）

#### 如何创建块格式上下文

1. `float` 元素
2. 绝对定位元素（`display` 为 `absolute` 和 `fixed` ）
3. `display` 为(`inline-blocks`, `table-cells`, `table-captions`) 等的块容器
4. `display` 为 `flow-root`
5. `display: block` 的块容器的`overflow`不是`visible`
6. `html`(所以在页面中的元素都遵守块格式上下文)

#### mdn 的完整列表

> - 根元素(``)
> - 浮动元素（元素的 `float` 不是 `none`）
> - 绝对定位元素（元素的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `absolute` 或 `fixed`）
> - 行内块元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `inline-block`）
> - 表格单元格（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `table-cell`，HTML表格单元格默认为该值）
> - 表格标题（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table-caption`，HTML表格标题默认为该值）
> - 匿名表格单元格元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `table、``table-row`、 `table-row-group、``table-header-group、``table-footer-group`（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 `inline-table`）
> - [`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow) 值不为 `visible` 的块元素
> - [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 值为 `flow-root` 的元素
> - [`contain`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain) 值为 `layout`、`content`或 paint 的元素
> - 弹性元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `flex` 或 `inline-flex`元素的直接子元素）
> - 网格元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `grid` 或 `inline-grid` 元素的直接子元素）
> - 多列容器（元素的 [`column-count`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count) 或 [`column-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-width) 不为 `auto，包括 ``column-count` 为 `1`）
> - `column-span` 为 `all` 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（[标准变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)，[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362)）