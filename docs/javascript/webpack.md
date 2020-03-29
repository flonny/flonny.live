

# webpack

## 为什么使用 webpack

从功能上说:

转化 ES6 的语法

转化框架的语法糖如jsx

CSS自动添加前缀，使用css预处理器

代码混淆，压缩

图片的压缩，混淆

从生态上说

Webpack 是目前最流行的前端构建工具，

Webpack社区活跃

官方插件和第三方插件比较多

配置灵活，生态成熟

## webpack基础

### 配置文件

Webpack 的默认配置文件为 Webpack.config.js

可以通过 webpack --config 制定webpack 的默认配置文件。可以在不同场景使用不同的配置文件 

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

webpack 4.0 零配置文件

> webpack 4 中 它将内核和cli 进行了分割 所以安装的时候要分别安装

```javascript
module.exports = {
  entry: './src/index.js', //入口文件(默认)
  output: './dist/main.js', //打包输出(默认)
}
```

### 安装webpack

- 安装nvm[https://github.com/nvm-sh/nvm]

  ```javascript
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  ```

  或者

  ```javascript
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  ```

- 安装node

  ```javascript
  nvm install v10.15.3
  node -v 
  npm -v
  ```

- 安装webpack

  > -y 默认选yes
  >
  > --save-dev 依赖安装到 devDependencies 不是 dependencies. webpack 是开发依赖

  ```javascript
  npm init -y
  npm install webpack webpack-cli --save-dev
  ./node_modules/.bin/webpack -v
  ```



### 简单的 webpack 项目

- 在安装完webpack 的文件夹中新建目录src,并添加两个js 文件

  ```shell
  mkdir src
  cd src
  touch index.js
  touch helloworld.js
  ```

  helloworld.js

  ```javascript
  export defalut function helloworld() {
    return 'hello world'
  }
  ```

  Index.js

  ```javascript
  import helloworld from './helloworld'
  document.write(helloworld())
  ```

- 在根目录下新建 webpack.config.js 文件 并打包

  Webpack.config.js

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

  > 在 dist 下会出现bundle.js

  ```javascript
  ./node_modules/.bin/webpack
  ```

  在 dist 中新建index.html 并引入bundle.js ，在浏览器中打开index.html， 在页面中会显示hello world

  

  通过npm script 运行打包命令

  > 在项目局部安装依赖时，如果依赖会创建命令，那么便会在./node_modules/.bin/ 创建软链接
  >
  > package.json 默认会访问这个目录寻找命令执行
  >
  > 所以在 package.json 的scripts 中添加命令

  增加 build 命令，指定为webpack

  ```
    "scripts": {
      "build": "webpack",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
  ```

  ```javascript
  npm run build
  ```




### webpack 基础概念

- 多页面配置
  - entry 指定打包地址
  - output 指定打包输出地址

webpack 构建机制,所有资源都是模块,模块之间存在依赖关系,webpack 进行模块的打包.

模块的依赖关系形成依赖树,webpack 会遍历这个依赖树,将遇到的依赖模块加入到依赖图中,遍历完成之后进行打包并输出

webpack  多页面配置需要在webpack.config.js 中的 entry 和 output 进行配置

entry配置 与 output配置

> 在 entry 中使用键值对的方式来指定页面打包后的文件名
>
> output 中filename 需要使用[name] 占位符 进行命名
>
> 注: [name] 是固定写法 

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



- Loaders 概念

  由于webpack  原生只支持 js 和 json两种文件类型, 对于css , css预处理器,jsx ,vue ,typescript等需要通过Loaders 去将其转化为可用的模块,加入依赖图中

  Loaders 本身是一个函数,接收源文件作为参数,输出可用模块

- Plugins 概念

  增强loaders 功能, 代码优化,资源管理,环境注入

  Plugins 作用与整个构建过程

- mode 概念

  mode 用来指定webpack当前构建环境,webpack 4 新概念

  mode 有三个值,production development none

  设置成不同值会自动触发webpack的内置函数

  设置为none webpack不会对此作出响应



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



