---
sidebar_position: 2
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

/**
 * client 客户端api
 * platform 平台标识
 */

const kookResponse = OnResponse((event, next) => {
  // 使用.value获取原生数据
  const e = event.value
  //   client.postMessage ....
  console.log('event', e)
  console.log('client', client)
  console.log('platform', platform)
}, 'message.create')

export default OnResponse((event, next) => {
  // 匹配规则
  if (!/^(#|\/)?card$/.test(event.MessageText)) {
    // 前往下一个响应
    next()
  }
  // 判断平台
  if (event.Platform == platform) {
    kookResponse.current(event, next)
  } else {
    const Send = useSend(event)
    Send(Text('该平台不支持此类消息'))
  }
}, 'message.create')
```
