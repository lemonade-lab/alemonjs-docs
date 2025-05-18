---
sidebar_position: 2
---

# 接口

:::info

捕获事件后可进行的

:::

## `useSends`

> 在响应事件（如消息被创建）时，发送消息。

```ts title="src/response/**/*/res.ts"
import { Text, useSends } from 'alemonjs'
export const selects = onSelects(['message.create'])
export default onResponse(selects, (event, next) => {
  // 创建
  const [send] = useSends(event)
  send(format(Text('hello word !')))
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

### `观察`

> 观察者模式，监听并响应某个事件。观察事件示例

> 不推荐在中间件触发后使用,具体了解下一章节的中间件机制

```ts title="response/**/*/res.ts"
import { Text, useSends, useSubscribe } from 'alemonjs'
export const selects = onSelects(['message.create'])

const response = onResponse(selects, (event, next) => {
  // 创建
  const [send] = useSends(event)
  // 获取文本
  const text = event.MessageText
  // 检查
  if (text === '123456') {
    send(format(Text('密码正确')))
    // 结束
  } else if (text == '/close') {
    // 结束
    send(format(Text('取消登录')))
  } else {
    send(format(Text('密码不正确')))
    // 继续监听
    next()
  }
})

export default onResponse(selects, (event, next) => {
  // 创建
  const [send] = useSends(event)
  send(format(Text('请输入密码')))
  // 创建观察者
  const [_, observer] = useSubscribe(event, selects)
  // 观察
  observer(response.current, [
    // 观察条件，当前用户
    'UserId'
    // 可新增，
    // 当前所在频道的用户，
    // 或当前频道下的当前用户
  ])
})
```

### 订阅

> 订阅模式，在某个事件周期中进行观察

```ts title="response/**/*/res.ts"
// [创建之后，响应之前，响应之后]
const [create, monut, unmonut] = useSubscribe(event, <select event type>)
create(Res.current, [])
monut(Res.current, []) // observer
unmonut(Res.current, [])
```

```ts title="./login.ts"
import { useSubscribe } from 'alemonjs'
export const selects = onSelects(['message.create'])
export default onResponse(selects, async (event, next) => {
  // 检验 并存储关系映射
})
```

```ts title="middleware/**/*/res.ts"
import { Text, useSubscribe, useSends } from 'alemonjs'
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
  const [send] = useSends(event)
  send(format(Text('请输入 #xx email,password ')))

  // 在中间件响应之前，观察该用户
  const [subscribe] = useSubscribe(e, 'message.create')
  subscribe(LoginRes.current, ['UserId'])
})
```

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
