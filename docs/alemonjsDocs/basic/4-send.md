---
sidebar_position: 4
---

# 主动的

:::info

对指定事件类型的event进行修改并向下传递

:::

- 主动消息

> 部分平台可能仅支持有限或不支持主动消息机制

```ts
import { sendToChannel, sendToUser, Text } from 'alemonjs'
// 向指定频道发送消息
sendToChannel('ChannelID', [Text('hello word')])
// 向指定用户发送消息
sendToUser('UserID', [Text('hello word')])
```

- 数据格式

```ts
import { createDataFormat } from 'alemonjs'

const data = createDataFormat(Text('hello word'))

// 例1
sendToChannel('ChannelID', data)

// 例2
Send(...data)
```
