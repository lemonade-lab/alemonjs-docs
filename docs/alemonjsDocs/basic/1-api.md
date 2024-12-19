---
sidebar_position: 1
---

# 响应

:::info

如何定义处理消息体

:::

### `OnResponse`

一种用于处理特定事件的功能，它允许开发者定义在事件发生时应执行的操作。

```ts title="src/apps/**/*/res.ts"
// OnResponse((消息体,控制体)=>{},消息类型,匹配正则)
export default OnResponse(
  (event, next) => {
    // 事件消息体
    console.log('event', event)
    // 前往下一个响应
    next()
  },
  'message.create' // 监听的事件类型
  //  ['message.create','private.message.create'] // 多选
)
```

在apps目录中新建任意名文件夹和res.ts文件，框架会自动搜索
