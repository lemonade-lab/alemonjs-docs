---
sidebar_position: 3
---

# 平台

:::tip

对接任意开放平台和框架

:::

## 导出

```js title="src/index.ts"
import { definePlatform } from 'alemonjs'
import { getConfigValue, User } from 'alemonjs'

const platform = 'bot-name'

class API {}

export { platform, API }

export default () => {
  // 得到自定义配置
  const value = getConfigValue() || {}
  const config = value[platform] || {}

  /**
   * 连接 dbp 服务器。推送标准信息。
   */
  const port = process.env?.port || 17117
  const url = `ws://127.0.0.1:${port}`
  const cbp = cbpPlatform(url)

  const onmessage = data => {
    // event
    dbp.send({
      name: 'message.create',
      value: data
      // ...
    })
  }

  cbp.onactions(async (data, consume) => {
    if (data.action === 'message.send') {
      const event = data.payload.event
      const paramFormat = data.payload.params.format
      // const res = await api.use.send(event, paramFormat)
      // consume(res)
    } else if (data.action === 'message.send.channel') {
      const channel_id = data.payload.ChannelId
      const val = data.payload.params.format
      // const res = await api.active.send.channel(channel_id, val)
      // consume(res)
    } else if (data.action === 'message.send.user') {
      const user_id = data.payload.UserId
      const val = data.payload.params.format
      // const res = await api.active.send.user(user_id, val)
      // consume(res)
    } else if (data.action === 'mention.get') {
      const event = data.payload.event
      // const res = await api.use.mention(event)
      // consume(res)
    }
  })

  // 处理 api 调用
  cbp.onapis(async (data, consume) => {
    const key = data.payload?.key
    if (client[key]) {
      // 如果 client 上有对应的 key，直接调用。
      const params = data.payload.params
      const res = await client[key](...params)
      consume([
        createResult(ResultCode.Ok, '请求完成', res)
      ])
    }
  })
}
```
