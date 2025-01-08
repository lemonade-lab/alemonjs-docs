---
sidebar_position: 1
---

# 响应

:::info

如何定义处理消息体

:::

## `OnResponse`

一种用于处理特定事件的功能，它允许开发者定义在事件发生时应执行的操作。

```ts title="src/apps/**/*/res.ts"
import { Text, useSend } from 'alemonjs'
export default OnResponse(
  (event, next) => {
    // 前往下一个响应,不执行则立即停止。
    next()
  },
  // 事件类型
  'message.create'
  // ['message.create','private.message.create']
)
```

在apps目录中新建任意名文件夹和res.ts文件，框架会自动搜索

### 匹配

```ts title="src/apps/**/*/res.ts"
// 不匹配该正则，自动进行next
export const regular = /^(#|\/)?hello$/
export default OnResponse((event, next) => {
  //
}, 'message.create')
```

### 分组

> 复用逻辑,共用一个next

```ts
const Res = OnResponse((event, next) => {
  console.log('text', event.MessageText)
  // 允许在同组响应中，继续后续的函数
  return true
}, 'message.create')

export default OnResponse(
  [
    // add
    Res.current,
    (event, next) => {
      console.log('完成')
    }
  ],
  'message.create'
)
```
