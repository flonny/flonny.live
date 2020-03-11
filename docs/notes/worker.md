# PWA



## Worker 学习笔记

> 通过 Web Worker 可以在独立于主线程的后台线程中运行脚本任务
>
> 在后台线程中运行耗时的任务可以保障主线程（通常是 UI 渲染）不被堵塞

- Worker 运行在不同当前 window 的全局上下文中，可以通过self 来访问
  - 专用Worker 上下文 DedicatedWorkerGlobalScope
  - 共享Worker 上下文 SharedWorkerGlobalScope
- Worker 遵循同源策略
- Worker 中不可操作DOM
- Worker 无法调用所有的window 对象方法存在例外
- Worker 生命周期
  - 下载
  - 安装
  - 激活

## Offline Web Applications

> html5 通过一些 api 来实现 web 应用离线脱机工作，下面就是介绍这些 api 

1. 介绍
2. SQL
3. Offline Application Caching APIs
4. Related APIs

## Offline

> html5 通过一些 api 来实现 web 应用离线脱机工作，下面就是介绍这些 api 

1. 介绍
2. SQL
3. Offline Application Caching APIs
4. Related APIs

## Offline Web

> html5 通过一些 api 来实现 web 应用离线脱机工作，下面就是介绍这些 api 

1. 介绍
2. SQL
3. Offline Application Caching APIs
4. Related APIs
## OffliApplications

> html5 通过一些 api 来实现 web 应用离线脱机工作，下面就是介绍这些 api 

1. 介绍
2. SQL
3. Offline Application Caching APIs
4. Related APIs
