# 盒模型
##  css 盒模型分为两种

1. 标准盒模型

   标准盒模型中有四个部分组成

   - Content box 内容区域，通过height 和 width 设置
   - Padding box 内边距区域，处于边框和内容中间, 通过 padding 设置
   - Border box 边框区域 , 包裹 内容和内边距, 通过 border 设置
   - Margin box 盒外区域，盒模型外部所占面积，通过 margin 设置

   标准盒模型的实际面积 为 content + padding + border . 并不包括 margin 但盒模型的实际所占页面面积计算是需要加上的margin

   > **注**: margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到margin。
   >
   > 标准盒模型 box-sizing: content-box

   ```css
   /*
   .box 的盒模型宽度为 100+20*2+2*2 = 144px. 高度为：50+20*2+2*2=94px
   */
   .box {
       width: 100px;
       height: 50px;
       padding: 20px;
       margin: 10px;
       border: 2px solid #ddd;
   }
   ```

   

2. 代替盒模型（IE）

   代替盒模型需要熟悉 box-sizing: border-box 进行触发。

   它的盒模型高度就是height 所设定的数值度,宽度为 width 所设定

   ```css
   /*
   代替盒模型的高度即为 100px. 宽度为 200px .
   
   */
   .box{
       box-sizing: border-box;
       height: 100px;
       widht: 200px;
       padding: 20px;
       margin:10px;
       border: 2px solid #ddd;
   }
   ```

   