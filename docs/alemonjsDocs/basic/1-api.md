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
export default OnResponse((event, next) => {
  // 函数内匹配规则
  if (!/^(#|\/)?hello$/.test(event.MessageText)) {
    next()
  }
}, 'message.create')
```

```ts title="src/apps/**/*/res.ts"
// 不匹配该正则，自动进行next
export const regular = /^(#|\/)?hello$/
export default OnResponse((event, next) => {
  //
}, 'message.create')
```

### 嵌套

> 封装OnResponse来复用逻辑

```ts
import { Next, PrivateEventMessageCreate, PublicEventMessageCreate } from 'alemonjs'
type EventMessageCreate = PrivateEventMessageCreate | PublicEventMessageCreate
/**
 * 定义响应
 * @param current
 * @returns
 */
const OnMyResponse = (current: (event: EventMessageCreate, next: Next) => void) => {
  // 不是/my开头的都不做处理
  return OnResponse(
    (event, next) => {
      if (!/^(\/|#)my/.test(event.MessageText)) {
        return next()
      }
      current(event, next)
    },
    ['message.create', 'private.message.create']
  )
}

export default OnMyResponse((event, next) => {
  console.log('消息:', event.MessageText)
})
```
