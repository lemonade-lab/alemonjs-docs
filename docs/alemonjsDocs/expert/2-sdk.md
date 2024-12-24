---
sidebar_position: 1
---

# 个性化

:::tip

如何有效的为某一平台定制不同的逻辑

:::

## KOOK

非所有的平台都能描述完所有的功能

因此，你需要根据不同的平台来进行调整

以下使用kook作为例子，学习如何发送一个md

```ts title="src/apps/**/*/res.ts"
import { Text, useSend } from 'alemonjs'
import { client, platform } from '@alemonjs/kook'

const kookResponse = OnResponse((event, next) => {
  // 使用.value获取原生数据
  const e = event.value

  //   client.postMessage ....
}, 'message.create')

export default OnResponse((event, next) => {
  // 匹配规则
  if (!/^(#|\/)?hello$/.test(event.MessageText)) {
    // 前往下一个响应
    next()
  }
  // 判断平台
  if (event.Platform == platform) {
    kookResponse.current(e, next)
  }
}, 'message.create')
```
