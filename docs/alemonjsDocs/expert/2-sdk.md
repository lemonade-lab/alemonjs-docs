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

```ts title="src/response/**/*/res.ts"
import { Text, useMessage } from 'alemonjs'
import { platform } from '@alemonjs/kook'
import kookResponse from './kook.res'
export const selects = onSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  // 判断平台
  if (event.Platform == platform) {
    console.log('platform', platform)
    kookResponse.current(event, next)
  } else {
    const [message] = useMessage(event)
    message.send(format(Text('该平台不支持此类消息')))
  }
})
```
