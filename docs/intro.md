---
sidebar_position: 1
---

# 简介

:::tip ALemonJS

[ALemonJS](https://github.com/lemonade-lab/alemonjs) ( 发音为 /əˈlemən/ ) 基于 JavaScript 所构建的聊天平台机器人开发框架

:::

在本文中，描述ALemonJS都称为“框架”。

框架主要通过定义响应函数来描述不同类型的事件将要执行的内容。

import Image from '@site/src/components/Image';

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

<Image src={require('@site/static/img/model.png')} />
