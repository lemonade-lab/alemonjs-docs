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
import { platform } from '@alemonjs/kook'
import kookResponse from './kook.res'
import { createSelects } from 'alemonjs'
export const selects = createSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  // 判断平台
  if (event.Platform == platform) {
    console.log('platform', platform)
    kookResponse.current(event, next)
  } else {
    const Send = useSend(event)
    Send(Text('该平台不支持此类消息'))
  }
})
```

```ts title="./kook.res.ts"
import { client } from '@alemonjs/kook'
import { createSelects } from 'alemonjs'
export const selects = createSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  // 使用.value获取原生数据
  const e = event.value
  //   client.postMessage ....
  console.log('event', e)
  console.log('client', client)
})
```

```ts
import { platform, client, type Client } from '@alemonjs/kook'
// platform 和 client 是平台包固定的两个变量, 具体可阅读“自定义平台”
```
