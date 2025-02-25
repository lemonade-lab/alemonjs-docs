---
sidebar_position: 3
---

# 接口

:::info

在特定事件或状态下调用，在特定的事件中扩展。

:::

## `useSend`

> 允许开发者在响应特定事件（如接收到消息）时，发送消息。
>
> 这种获取通常在一个特定的事件处理上下文中进行。

### Text

```ts title="src/apps/**/*/res.ts"
import { Text, useSend } from 'alemonjs'
export default OnResponse((event, next) => {
  // 创建
  const Send = useSend(event)

  Send(Text('这个'), Text('标题', { style: 'bold' }), Text('被加粗了'))

  Send(Text('这个'), Text('标题'), Text('没有变化'))

  Send(Text([`// 我的代码块 `, `const Send = useSend(event)`].join('\n'), { style: 'block' }))
}, 'message.create')
```

### Image

```ts title="src/apps/**/*/res.ts"
import { useSend, Text, Image, ImageFile, ImageURL } from 'alemonjs'
import { readFileSync } from 'fs'
import url from '@src/assets/test.jpeg'
export default OnResponse((event, next) => {
  const Send = useSend(event)
  // 发送本地图片文件
  const img = readFileSync(url)
  if (img) {
    Send(Image(img))
    // Send(Image(url))
    // Send(ImageURL("https://xxxx.png"))
  } else {
    Send(Text('图片不存在'))
  }
}, 'message.create')
```

### Mention

```ts title="apps/**/*/res.ts"
import { useSend, Text, Mention } from 'alemonjs'
export default OnResponse((event, next) => {
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

const useMentionsUserId = async event => {
  const Mentions = await useMention(event)
  if (!Mentions || Mentions.length === 0) {
    return // @ 提及为空
  }
  // 查找用户类型的 @ 提及，且不是 bot
  const User = Mentions.find(item => !item.IsBot)
  if (!User) {
    return // 未找到用户Id
  }
  return User
}

export default OnResponse(async (event, next) => {
  // 获得User
  const User = await useMentionsUserId(event)

  console.log('User:', User)

  // 处理被AT的用户...
}, 'message.create')
```

## `useObserver`

> 观察者模式，监听并响应某个事件。观察事件示例

> 不推荐在中间件触发后使用,具体了解下一章节的中间件机制

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

## `useSubscribe`

> 订阅模式，在某个事件周期中进行观察

```ts title="apps/**/*/res.ts"
// [创建之后，响应之前，响应之后]
const [create, monut, unmonut] = useSubscribe(event, <select event type>)
create(Res.current, [])
monut(Res.current, []) // 同Observer(SubscribeMount)
unmonut(Res.current, [])
```

```ts title="./login.ts"
import { Text, useSubscribe, useSend } from 'alemonjs'
const LoginRes = OnResponse(
  async (event, next) => {
    // 检验 并存储关系映射
  },
  ['message.create']
)
export default LoginRes
```

```ts title="mw/**/*/res.ts"
import { Text, useSubscribe, useSend } from 'alemonjs'
import LoginRes from './login'
// 中间件，在所有apps响应之前。
export default OnMiddleware((event, next) => {
  // 非约定前缀
  if (!/^#xx/.test(event.MessageText)) {
    next()
    return
  }

  // 不是
  if (!/^xx login/.test()) {
    // 根据userid/userkey请求获得email
    const email = ''
    if (!email) {
      next()
      return
    }
    // 拥有数据，携带字段
    event['xx_emeil'] = email
    next()
    return
  }

  // 创建
  const Send = useSend(event)
  Send(Text('请输入 #xx email,password '))

  // 在中间件响应之前，观察该用户
  const [subscribe] = useSubscribe(e, 'message.create')
  subscribe(LoginRes.current, ['UserId'])
}, 'message.create')
```

## `useState`

> 声明res/mw的状态,可用于管理是否启用

```ts title="apps/**/*/res.ts"
export name = 'login'  // 标记res名
export const regular = /^(#|\/)?login$/
export default OnResponse((event, next) => {
  // login code ...
}, 'message.create')
```

```ts title="apps/**/*/res.ts"
import { Text, useSend, useState } from 'alemonjs'
export const regular = /^(#|\/)?close:/
export default OnResponse((event, next) => {
  //   /close:login
  const name = event.MessageText.replace(regular, '')
  const [state, setState] = useState(name)
  if (state) {
    next()
    return
  }
  setState(false)
  const Send = useSend(event)
  Send(Text('关闭成功'))
  return
}, 'message.create')
```

> 可以在任意地方订阅状态的更改。

```ts title="apps/**/*/res.ts"
import { eventState, unEventState } from 'alemonjs'

const login = state => {}

eventState('login', login)
unEventState('login', login)
```
