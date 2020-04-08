## 为什么使用 *webpack*

从功能上说:

*webpack* 可以转化 *ES6* 的语法, 转化框架的语法糖如 *jsx*.  可以使用 *css* 预处理器 并且 *css* 自动添加前缀，解决部分兼容性问题. 进行代码的压缩. 进行文件处理

从生态上说:

*Webpack* 是目前最流行的前端构建工具，社区活跃, 官方插件和第三方插件丰富, 配置灵活，生态成熟



## *webpack* 基础

### 配置文件

*webpack* 的默认配置文件为 *webpack.config.js*

可以通过 *`webpack --config`* 制定 webpack 的默认配置文件。可以在不同场景使用不同的配置文件

```javascript
module.exports = {
  entry: './src/index.js', //入口文件
  output: './dist/main.js', //打包输出
  mode: 'production', //打包环境
  module: { //loader 配置
    rules: [
      {test: /\.txt$/,user: 'raw-loader'}
    ]
  },
  plugins:[ // 插件配置
    new HtmlwebpackPlugin({
       template: './src/index.html'
    })
  ]
}
```

*webpack 4.0* 零配置文件

> *webpack 4* 中 它将内核和 *cli* 进行了分割 所以安装的时候要分别安装

```javascript
module.exports = {
  entry: './src/index.js', //入口文件(默认)
  output: './dist/main.js', //打包输出(默认)
}
```

### 安装 *webpack*

- 安装 *nvm*[https://github.com/nvm-sh/nvm]

  ```javascript
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  ```

  或者

  ```javascript
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  ```

- 安装 *node*

  ```javascript
  nvm install v10.15.3
  node -v 
  npm -v
  ```

- 安装 *webpack*

  > *`-y`*  是所有选项选择 *yes*
  >
  > *`--save-dev`* 依赖安装到 *devDependencies(开发依赖)* 不是 *dependencies(运行依赖)*. 

  ```javascript
  npm init -y
  npm install webpack webpack-cli --save-dev
  ./node_modules/.bin/webpack -v
  ```



### 简单的 *webpack* 项目

- 在安装完 *webpack* 的文件夹中新建目录 *src*,并添加两个 *js* 文件

  ```shell
  mkdir src
  cd src
  touch index.js
  touch helloworld.js
  ```

  *helloworld.js*

  ```javascript
  export defalut function helloworld() {
    return 'hello world'
  }
  ```

  *Index.js*

  ```javascript
  import helloworld from './helloworld'
  document.write(helloworld())
  ```

- 在根目录下新建 *webpack.config.js* 文件 并打包

  *webpack.config.js* 配置

  ```javascript
  "use strict";
  
  const path = require('path');
  module.exports ={
    entry: './src/index.js',
    output: {
      path: path.join(__dirname,'dist'),
      filename: 'bundle.js'
    }
  }
  ```

  打包

  使用下面👇的命令开始打包

  ```javascript
  ./node_modules/.bin/webpack
  ```

  在 *webpack.config.js* 中, 设置了dist 为输出目录, 输出文件名叫做 *bundle.js*, 所以打包成功的话会在dist 文件夹中生成 *bundle.js* 文件

  如果想要 **执行** *bundle.js* 文件, 可以在 dist 中新建 *index.html* 并引入 *bundle.js* 

  在**浏览器 **中打开*index.html*， 在页面中会显示 *hello world*

  
  
  通过 *npm script* 运行打包命令
  
  > 在项目局部安装依赖时，如果依赖会**创建命令**，那么便会在  *./node_modules/.bin/*  创建**软链接**
>
  > *package.json* 默认会访问这个目录寻找命令执行
>
  > 所以在 *package.json* 的 *scripts* 中添加命令
  
  增加 *build* 命令，指定为 *webpack*
  
  ```
    "scripts": {
    "build": "webpack",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
  ```
  
  ```javascript
  npm run build
  ```




### *webpack* 基础概念

- 多页面配置
  - *entry* 指定打包地址
  - *output* 指定打包输出地址

*webpack* **构建机制**,所有资源都是**模块**, 模块之间存在**依赖关系**, *webpack* 对模块进行打包.

模块的依赖关系形成**依赖树**,  *webpack* 会遍历这个依赖树, **将遇到的依赖模块加入到依赖图中**,  遍历完成之后进行打包并输出

*webpack*  多页面配置需要在 *webpack.config.js* 中的 *entry* 和 *output* 进行配置

*entry* 配置 与 *output*配置

> 在 *entry* 中使用键值对的方式来指定页面打包后的文件名
>
> *output* 中 *filename* 需要使用 *[name]* 占位符 进行命名
>
> 注: *[name]* 是固定写法 

```javascript
const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: "[name].js"
  }
}

```

- *Loaders* 概念

  由于*webpack*  原生只支持 *js* 和 *json*两种文件类型, 对于*css* , *css*预处理器,  *jsx* ,*vue* ,*typescript*等需要通过*Loaders* 去将其转化为可用的模块,加入依赖图中

  *Loaders* 本身是一个函数,接收源文件作为参数,输出可用模块

- *Plugins* 概念

  增强 *loaders* 功能, 代码优化,资源管理,环境注入

  *Plugins* 作用与整个构建过程

- *mode* 概念

  *mode* 用来指定*webpack*当前构建环境, *webpack 4* 新概念

  *mode* 有三个值, *production* *development* *none*

  设置成不同值会自动触发 *webpack* 的内置函数

  设置为 *none* *webpack* 不会对此作出响应



### webpack 实践

#### 解析es6 和 jsx

解析es6 代码需要用的 babel-loader 和 @babel/perset-env 预设

babel-loader  的配置文件为 .babelrc 

```javascript
npm i @babel/core @babel/preset-env babel-loader
```

```javascript
{
  "presets": ["@babel/preset-env"]
}
```

简析react 需要@babel/preset-react 预设

```javascript
npm install react react-dom
```

```json
{
  "presets":[
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

在webpack 配置

```javascript
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};

```



配置完成之后便能使用react 进行开发了

### webpack 处理css less

css-loader

加载 .css 文件,再代码中遇到引用css文件,css-loader 会加载css文件并转化为commonjs 对象

将样式

style-loader 是将css 文件插入到dom中

> 注⚠️: loader 是链式调用,调用顺序从右到左

安装css-loader 和 style-loader

```shell
npm i css-loader style-loader -D
```

webpack 配置

```javascript
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
};

```

处理less 需要安装less-loader 并添加到配置文件当中

```javascript
{
  test: /\.less$/,
  use: {
    'style-loader',
    'css-loader',
    'less-loader', 
  }
}
```

执行顺序为 less-loader => css-loader => style-loader

### webpack 处理图片和字体

使用 flie-loader 解析图片和字体(都不是代码文件)

```javascript
// other code
rules: [
  // other code
  {
    test: /\.(jpg|png|gif)$/,
    use: 'file-loader'
  },
  {
    test: /\.(eot|woff|tff|woff2)$/,
    use: 'file-loader'
  }
]
```

### webpack 文件监听

webpack 文件监听主要有两种方式

​	这两种方式浏览器都不会自动涮刷新

1. 在webpack 命令后加上 --watch 指令

   ```json
   {
     "script":{
       "build": "webpack --watch"
     }
   }
   ```

   

2. 在webpack.config.js中添加watch配置项

```javascript
module.exports ={
  watch: true
}
```

webpack 会轮询的判断文件最后编辑世界是否发生变化

文件第一次发生变化,webpack 并不会直接重新构造,它会等待一段时间 aggregateTimeout(默认300ms),在这期间文件发生的改变都会被webpack缓存起来,等到aggregateTimeout 之后一起汇总重新构造

watchOption 可配置watch 的一些行为

```javascript
module.exports = {
  watch: true,
  // 必须watch 为true
  watchOption: {
    ignored: /node_modules/, // 忽略监听文件,提高性能
    aggregateTimeout: 300, // 缓冲时间 节流时间
    poll: 1000 //每秒轮询次数
  }
}
```

### webpack 热更新

使用 webpack-dev-server

需要安装 webpack-dev-server

```javascript
npm i webpack-dev-server -D
```

使用 WDS可以不刷新浏览器,更新内容

WDS 没有磁盘iO 他构建的文件放在内存中,而不是和build watch 那样放到硬盘中

WDS 在开发环境使用, 不在生产环境使用 

WDS 需要配合 webpck 自带的插件 HotModuleReplacementPlugin 使用

package.json 配置

```json
"scripts": {
  "dev": "webpack-dev-server --open" // --open 自动打开浏览器
}
```

webpack.config.js

```javascript

const webpack = require('webpack');
module.exports ={
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
```

webpack 还可以使用webpack-dev-middleware

更加灵活,需要自己创建node-server 

webpack-dec-middleware 可以将构建文件传给服务器

- [ ] #### webpack 热更新原理

### 文件指纹

通常用来作为版本管理, 缓存优化

文件指纹

1. hash

    和整个项目构建相关, 只要项目文件有修改,整个项目构建的hash值就会更改

2. chunkhash 

   > chunkhash 不能和插件 HotModuleReplacementPlugin 一起使用
   >
   > 一起使用会保报错
   >
   > 报错信息

   ```javascript
   Cannot use [chunkhash] or [contenthash] for chunk in '[name]_[chunkhash:8].js' (use [hash] instead)
   ```

   

   和webpack打包的chunk相关,不同的entry会生成不同的chunkhash值

3. contenthash

   根据内容定义hash文件内容不变,则contenthash不变

#### 占位符

| 占位符名称    | 含义                        |
| :------------ | --------------------------- |
| [ext]         | 资源后缀名                  |
| [name]        | 文件名称                    |
| [path]        | 文件的相对路径              |
| [floder]      | 文件所在文件夹              |
| [contenthash] | 文件内容的hash, 默认md5生成 |
| [hash]        | 项目构建hash                |
| [emoji]       | 一个随机内容的emoji         |
| [chunkhash]   | 和webpack 打包相关的hash    |

#### js 的hash 设置

```javascript
output: {
  path: path.join(__dirname,'dist'),
  name: "[name]_[chunkhash:8].js"
}
```

#### 文件的hash设置

```javascript
module.exports ={
  module: [
    {
      test: /\.(woff|woff2|eot|jpg|png|gif|svg)$/,
      use: {
        loader: "file-loader",
        name: "[name][hash:8].[ext]"
      }
    }
  ]
}
```

#### css 的hash 设置

如果要设置css 的文件指纹,那么需要一个插件 mini-css-extract-plugin来进行css 文件提取. 只能在webpack 4 中运行, 而且MiniCssExtractPlugin 功能和 style-loader 功能冲突,所以如果需要使用MiniCssExtractPlugin 那么需要将style-loader 在配置中删除

>  官方描述: 该插件将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件

文件配置

```javascript
npm i mini-css-extarct-plugin cssnano -D
```

```javascript
const MiniCssExtractPlugin = require('mini-css-extarct-plugin')
module.exports = {
  module: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }
  ],
  plugins: [
    new MiniCssExtarctPlugin({
       filename: "[name]_[contenthash:8].css"
    })
  ]
}
```



### 代码压缩 HTML CSS JAVASCRIPT

减少打包体积

#### JavaScript 压缩

webpack4 内置的 uglifyjs-webpack-plugin ,默认打包的文件是压缩过的

#### CSS 代码压缩

使用 optimize-css-assets-webpack-plugin 同时使用 cssnano

```javascript
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  plugins: {
    new optimizeCssAssetsPlugin({
    	assetNameRegExp: /\.css$/g,
    	cssProccesor: 'cssnano'
  	})
  }
}
```



#### HTML 代码压缩

使用 html-webpack-plugin, 设置压缩参数

配置

```javascript
npm i html-webpack-plugin -D
```

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: true
    })
  ]
}
```

## webpack 进阶



### 自动清理构建目录

使用 *clean-webpack-plugin* 自动清理构建目录

使用 *clean-webpack-plugin*

```javascript
const { cleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugin: {
    new cleanWebpackPlugin()
  }
}
```

### 自动添加 *css* 前缀

使用 *PostCSS* *autoprefixer* 自动添加 *css* 前缀

安装 *postcss-loader* 和 *autoprefixer*

```javascript
npm i postcss-loader autoperfixer -D
```

配置

```javascript
module.exports = {
  module: [
    {
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader(),
        'css-loader',
        'less-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')({
                overrideBrowserslist: [
                  'last 2 version',
                  ">1%",
                ]
              })
            ]
          }
        }
      ]
    }
  ],
  plugin: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
}
```

### *css pxtorem*

方案: *lib-flexible* *pxtorem*