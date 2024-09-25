---
sidebar_position: 4
---

# 钩子

:::info 钩子（Hook）

在特定事件或状态下调用，允许开发者在特定的生命周期或事件发生时插入自定义行为。

:::

Alemon.js 提供了以下几种钩子：

### `useSend`

> - `useSend` 允许开发者在响应特定事件（如接收到消息）时，发送消息。
> - 通过调用 `useSend`，开发者能够获取发送消息的功能，这种获取通常在一个特定的事件处理上下文中进行。

```ts title="发送消息示例"
import { useSend, Text, At, Image } from 'alemonjs'

export default OnResponse(
  async e => {
    const Send = useSend(e)

    // 发送文本
    Send(Text('Hello World!'))

    // 发送 @ 提及
    Send(At('123456'))

    // 发送多种类型的消息
    Send(Text('Hello '), At('123456'), Text(', How are things going?'))

    // 发送图片
    const img: Buffer = null // 这里需要正确初始化 Buffer
    Send(Image(img))

    // 发送本地图片文件
    Send(Image('./public/test.jpg', 'file'))
  },
  'message.create',
  /^(#|\/)?炼丹师学徒$/
)
```

### `usePrase`

> - `useParse` 用于解析和提取接收到的消息内容。
> - 在特定的事件处理过程中（例如收到一条消息时），开发者可以调用 `useParse` 来获取消息的具体内容。

```ts tltle="解析消息示例"
import { useParse } from 'alemonjs'

export default OnResponse(
  async e => {
    // 解析用户消息
    const text = useParse(e.Msgs, 'Text')
    if (!text) {
      return // 消息为空
    }

    const ats = useParse(e.Msgs, 'At')
    if (!ats || ats.length === 0) {
      return // @ 提及为空
    }

    // 查找用户类型的 @ 提及，且不是 bot
    const UserID = ats.find(item => item.typing === 'user' && !item.bot)?.value
    if (!UserID) {
      return // 未找到用户ID
    }

    // 处理用户ID逻辑
  },
  'message.create',
  /^(#|\/)?炼丹师学徒$/
)
```

## `useObserver`

> 观察者模式，监听并响应某个事件。观察事件示例

```ts
import { Text, useObserver, useParse, useSend } from 'alemonjs'

export default OnResponse(
  event => {
    const Send = useSend(event)
    Send(Text('请输入密码'))

    // 创建观察者
    const Observer = useObserver(event, 'message.create')
    Observer(
      (event, { next }) => {
        const Send = useSend(event)
        const text = useParse(event.Megs, 'Text')

        if (text === '123456') {
          Send(Text('密码正确'))
        } else {
          Send(Text('密码不正确'))
          next() // 继续监听下一个消息
        }
      },
      ['UserId'] // 监听当前用户的下一个消息
    )
  },
  'message.create',
  /测试/
)
```
