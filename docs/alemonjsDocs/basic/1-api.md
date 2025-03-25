---
sidebar_position: 1
---

# 响应

:::info

如何定义处理消息体

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `onResponse`

一种用于处理特定事件的功能，它允许开发者定义在事件发生时应执行的操作。

```ts title="src/response/**/*/res.ts"
import { createSelects } from 'alemonjs'
export const selects = createSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  // 前往下一个响应,不执行则立即停止。
  next()
})
```

在`response`目录中新建任意名文件夹和res.ts文件，框架会自动搜索

### 匹配

```ts title="src/response/**/*/res.ts"
import { createSelects } from 'alemonjs'
// 不匹配该正则，自动进行next
export const regular = /^(#|\/)?hello$/
export const selects = createSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  //
})
```

### 分组

> 共用一个next

```ts
import { createSelects } from 'alemonjs'
export const selects = createSelects(['message.create'])

const response$1 = onResponse(selects, (event, next) => {
  console.log('return true')
  // 允许在同组响应中，继续后续的函数
  return true
})

const response$2 = onResponse(selects, (event, next) => {
  console.log('allowGrouping: true')
  return {
    // 允许分组，等同于 return true
    allowGrouping: true
  }
})

const response$3 = onResponse(selects, (event, next) => {
  console.log('完成')
})

export default onResponse(selects, [response$1.current, esponse$2.current, response$3.current])
```

### 复用

> 复用函数

```ts
import { createSelects } from 'alemonjs'
export const selects = createSelects(['message.create'])

const response$1 = onResponse(selects, (event, next) => {
  return {
    id: 0
  }
})

const response$2 = onResponse(selects, (event, next) => {
  const res = response$1.current(event, next)
  console.log('获得指定res的id', res.id)
})

export default response$2
```
