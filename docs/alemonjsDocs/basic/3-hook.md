---
sidebar_position: 3
---

# 钩子

:::info 钩子（Hook）

在特定事件或状态下调用，允许开发者在特定的生命周期或事件发生时插入自定义行为。

:::

AlemonJS 提供了以下几种钩子：

## `useSend`

> 允许开发者在响应特定事件（如接收到消息）时，发送消息。
>
> 这种获取通常在一个特定的事件处理上下文中进行。

### Text

```ts title="src/apps/**/*/res.ts"
import { Text, useSend } from 'alemonjs'
export default OnResponse((event, next) => {
  if (!/^(#|\/)?text$/.test(event.MessageText)) {
    next()
    return
  }

  // 创建
  const Send = useSend(event)

  Send(Text('这个'), Text('标题', { style: 'bold' }), Text('被加粗了'))

  Send(Text('这个'), Text('标题'), Text('没有变化'))

  Send(
    Text(
      [
        `const Send = useSend(event)`,
        `Send(Text('这个'), Text('标题', { style: 'bold' }), Text('被加粗了'))`,
        `Send(Text('这个'), Text('标题'), Text('没有变化'))`
      ].join('\n'),
      {
        style: 'block'
      }
    )
  )
}, 'message.create')
```

### Image

```ts title="src/apps/**/*/res.ts"
import { useSend, Text, Image } from 'alemonjs'
import { readFileSync } from 'fs'
import url from '@src/assets/test.jpeg'
export default OnResponse((event, next) => {
  if (!/^(#|\/)?image$/.test(event.MessageText)) {
    next()
    return
  }
  const Send = useSend(event)
  // 发送本地图片文件
  const img = readFileSync(url)
  if (img) {
    // Send(Image(img), Image(img))
    Send(Image(img))
  } else {
    Send(Text('图片不存在'))
  }
}, 'message.create')
```

### Mention

```ts title="apps/**/*/res.ts"
import { useSend, Text, Mention } from 'alemonjs'
export default OnResponse((event, next) => {
  if (!/^(#|\/)?mention$/.test(event.MessageText)) {
    next()
    return
  }

  const Send = useSend(event)

  // 发送多种类型的消息
  Send(Text('Hello '), Mention(event.UserId), Text(', How are things going?'))

  // @ 所有人
  // Send(Mention())

  // @ channel
  // Send(Mention(event.ChannelId, { belong: 'channel' }))
}, 'message.create')
```

## `useMention`

> 解析得到被提及的数据

```ts title="apps/**/*/res.ts"
import { useMention } from 'alemonjs'
export default OnResponse(async (event, next) => {
  if (!/^(#|\/)?test$/.test(event.MessageText)) {
    next()
    return
  }

  const Mentions = await useMention(event)
  if (!Mentions || Mentions.length === 0) {
    return // @ 提及为空
  }

  // 查找用户类型的 @ 提及，且不是 bot
  const User = Mentions.find(item => !item.IsBot)
  if (!User) {
    return // 未找到用户Id
  }

  console.log('User:', User)

  // 使用${Platform}:${UserId}哈希所得，长度为11的字符串
  // 这是用户的唯一标识，可用作数据库表的主键
  // User.UserKey

  const text = event.MessageText
  if (!text || text == '') {
    return // 消息为空
  }

  console.log('text:', text)

  // 处理被AT的用户...
}, 'message.create')
```

## `useObserver`

> 观察者模式，监听并响应某个事件。观察事件示例

```ts title="apps/**/*/res.ts"
import { Text, useObserver, useSend } from 'alemonjs'

const Res = OnResponse((event, next) => {
  // 创建
  const Send = useSend(event)
  // 获取文本
  const text = event.MessageText
  // 检查
  if (text === '123456') {
    Send(Text('密码正确'))
    // 结束
  } else if (text == '/close') {
    // 结束
    Send(Text('取消登录'))
  } else {
    Send(Text('密码不正确'))
    // 继续监听
    next()
  }
}, 'message.create')

export default OnResponse((event, next) => {
  if (!/^(#|\/)?login$/.test(event.MessageText)) {
    next()
    return
  }

  // 创建
  const Send = useSend(event)
  Send(Text('请输入密码'))

  // 创建观察者
  const Observer = useObserver(event, 'message.create')
  Observer(Res.current, [
    // 观察条件，当前用户
    'UserId'
    // 可新增，如：当前所在频道的用户，或者当前频道下的当前用户
  ])
}, 'message.create')
```
