---
sidebar_position: 2
---

# 接口

:::info

捕获事件后可进行的

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `useMessage`

> 在响应事件（如消息被创建）时，发送消息。

```ts title="src/response/**/*/res.ts"
import { Text, useMessage } from 'alemonjs'
export const selects = onSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  // 创建
  const [message] = useMessage(event)
  message.send(format(Text('hello word !')))
})
```

```ts title="src/response/**/*/res.ts"
import { Text } from 'alemonjs'
export const selects = onSelects(['message.create'])
export default onResponse(selects, () => {
  return {
    // 即将要发送的数据
    data: format(Text('hello word !'))
  }
})
```

## `useMention`

> 解析得到被提及的数据

```ts title="response/**/*/res.ts"
import { useMention } from 'alemonjs'
export const selects = onSelects(['message.create'])
export default onResponse(selects, async (event, next) => {
  const [mention] = useMention(event)
  // 查找用户类型的 @ 提及，且不是 bot
  const user = await mention.findOne()
  if (!user) {
    return // 未找到用户Id
  }

  console.log('User:', user)

  // 处理被AT的用户...
})
```

## `useSubscribe`

> 订阅模式，在某个事件周期中进行观察

<Tabs>
  <TabItem value="0" label="V2.1+" default>

```ts title="response/**/*/res.ts"
import { Text, useMessage, useSubscribe } from 'alemonjs'
export const regular = /^(#|\/)?login$/
export const selects = onSelects([
  'message.create',
  'private.message.create'
])
export default onResponse(selects, event => {
  const [message] = useMessage(event)
  const [subscribe] = useSubscribe(event, selects)

  message.send(format(Text('请输入密码'), Text('123456')))

  // 订阅 res 挂载之前的
  const sub = subscribe.mount(
    (event, next) => {
      // 创建
      const [message] = useMessage(event)
      // 获取文本
      const text = event.MessageText
      // 检查
      if (text === '123456') {
        message.send(format(Text('密码正确')))
        clearTimeout(timeout)
      } else if (text == '/close') {
        message.send(format(Text('取消登录')))
        clearTimeout(timeout)
      } else {
        message.send(format(Text('密码不正确')))
        // 继续
        next()
      }
    },
    ['UserId']
  )

  const timeout = setTimeout(() => {
    // 取消订阅
    subscribe.cancel(sub)
    // 发送消息
    message.send(format(Text('登录超时')))
  }, 1000 * 10)
})
```

```ts title="response/**/*/res.ts"
const [subscribe] = useSubscribe(event, <select event type>)
subscribe.create(Res.current, []) // res 创建之后
subscribe.monut(Res.current, []) // res 响应之前
subscribe.unmonut(Res.current, []) // res 响应之后
```

```ts title="middleware/**/*/res.ts"
import { Text, useSubscribe, useMessage } from 'alemonjs'
import LoginRes from './login'
export const selects = onSelects(['message.create'])
// 中间件，在所有apps响应之前。
export default onMiddleware(selects, (event, next) => {
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
  const [message] = useMessage(event)
  message.send(format(Text('请输入 #xx email,password ')))

  // 在中间件响应之前，观察该用户
  const [subscribe] = useSubscribe(e, selects)
  subscribe.create(LoginRes.current, ['UserId'])
})
```

  </TabItem>
  <TabItem value="1" label="V2.0+" >

```ts title="response/**/*/res.ts"
// [创建之后，响应之前，响应之后]
const [create, monut, unmonut] = useSubscribe(event, <select event type>)
create(Res.current, [])
monut(Res.current, []) // const monut = useObserver(event, <select event type>)
unmonut(Res.current, [])
```

  </TabItem>
</Tabs>

## `useState`

> 声明res/mw的状态,可用于管理是否启用

> 命名规则 子应用名:response:文件夹1:文件夹2...

> 如默认main为： main:response:login

:::warning

响应文件夹由`apps（旧版本）`命名为`response`

:::

```ts title="response/**/*/res.ts"
import { Text, useSends, useState } from 'alemonjs'
export const regular = /^(#|\/)?close:/
export const selects = onSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  //   /close:login
  const name = event.MessageText.replace(regular, '')
  const [state, setState] = useState(name)
  if (state) {
    next()
    return
  }
  setState(false)
  const [send] = useSends(event)
  send(format(Text('关闭成功')))
  return
})
```

> 可以在任意地方订阅状态的更改。

```ts title="response/**/*/res.ts"
import { onState, unState } from 'alemonjs'
onState('main:response:login', state => {
  //
})
unState('main:response:login')
```
