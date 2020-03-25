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

  

  

