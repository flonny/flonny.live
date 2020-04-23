# react

## chapter-1

- react 声明式语法

- 生态圈

- 技术社区

- react-nactive

- ssr

## chapter-2

出现背景： facebook 简单功能一再出现Bug

- 传统（DOM-API）UI操作关注太多细节
  - react 开始的思想始终刷新整体页面
- 应用程序状态分散在各处，难以维护和追踪

- react 组件概念

- react 4个主要Api

- react 单项数据流

- react 完善的错误提示

flux 架构 单项数据流

![image-20200423101029851](I:\flonny\blog\docs\post\image-20200423101029851.png)

flux 衍生

redux mobx

## chanpter-3

以组件方式考虑UI构建

![image-20200423101312522](I:\flonny\blog\docs\post\image-20200423101312522.png)

```react
class CommentBox extends Component{
    render() {
        <div className="comment-box">
            <h1>Comments</h1>
            <CommentList/>
            <CommentForm/>
         </div>
    }
}
```

react 组件

props + state => view

1. React 组件一般不提供方法，而是某种状态机
2. React 组件可以理解为一个纯函数
3. 单向数据绑定

- 单一职责原则
- 组件复杂，应该拆分

数据状态管理：DRY原则

- 能计算得到的状态就不要存储
- 组件尽量无状态，所需数据通过props获取

## chanpter-4

JSX 在JavaScript代码中直接写HTML标记

```react
const name = 'Nate'
const element = <h1>hello {name}</h1>
React.createElement(
	'h1',
    null,
    'hello',
    name
)
```

1. jsx 式表达式
2. 在属性中使用表达式
3. 延展属性
4. 表达式可以作为子元素

react 优点

- 声明式创建界面
- 代码动态创建界面的灵活
- 无需学习新的模板语言

1. 自定义组件以大写字母开头

## cahnpter-5

![image-20200423103905031](I:\flonny\blog\docs\post\image-20200423103905031.png)

### constructor

1. 用于初始化内部状态，很少使用
2. 唯一可以直接修改state的地方

### getDerivedStateFromProps

1. 当state需要props初始化时使用
2. 尽量不要使用： 维护两者状态一致性会增加复杂度
3. 每次render 都会调用
4. 典型场景：表单默认值

### componentDidMount

1. UI渲染完成后调用
2. 只执行一次
3. 典型场景：获取外部资源

### componentWillUnMount

- 组件移除时调用
- 典型场景：释放资源

### getSnapshotBeforeUpdate

1. 在页面render之前调用

### componentDidUpdate

1. 每次UI更新都会调用

### shouldComponentUpdate

1. 决定Virtual DOM 是否需要重绘
2. 一般可以用PureComponent自动实现



6217002960101510185

6217002960101510

18397641354