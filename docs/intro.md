---
sidebar_position: 1
---

# 简介

:::tip ALemonJS

[ALemonJS](https://github.com/lemonade-lab/alemonjs) ( 发音为 /əˈlemən/ ) 基于 JavaScript 所构建的聊天平台机器人开发框架

:::

在本文中，描述ALemonJS 都称为“框架”。

框架主要通过定义响应函数来描述不同类型的事件将要执行的内容。

import Image from '@site/src/components/Image';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="0" label="V2.1+" default>
   
```ts title="Hello Word!"
import { Text, useMessage } from 'alemonjs'
// 创建事件类型
export const selects = onSelects(['message.create'])
// 导出响应
export default onResponse(selects, event => {
  // 使用发送函数
  const [message] = useMessage(event)
  // 发送文本
  message.send(format(Text('Hello Word!')))
})
```

  </TabItem>
  <TabItem value="1" label="V2.0.16" >
   
```ts title="Hello Word!"
import { Text, useSends } from 'alemonjs'
// 创建事件类型
export const selects = onSelects(['message.create'])
// 导出响应
export default onResponse(selects, event => {
  // 使用发送函数
  const [send] = useSends(event)
  // 发送文本
  send(format(Text('Hello Word!')))
})
```

  </TabItem>
  <TabItem value="2" label="V2.0.4" >
   
```ts title="Hello Word!"
import { Text, useSend } from 'alemonjs'
// 创建事件类型
export const selects = onSelects(['message.create'])
// 导出响应
export default onResponse(selects, event => {
  // 使用发送函数
  const send = useSend(event)
  // 发送文本
  send(Text('Hello Word!'))
})
```

  </TabItem>
</Tabs>

<Image src={require('@site/static/img/model.png')} />
