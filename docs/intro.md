---
sidebar_position: 1
---

# 简介

:::tip AlemonJS

[AlemonJS](https://github.com/lemonade-lab/alemonjs) ( 发音为 /əˈlemən/ ) 基于 JavaScript 所构建的聊天平台机器人开发框架

:::

框架通过定义响应函数来来描述不同事件将要执行的操作。

import Image from '@site/src/components/Image';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="0" label="res.tsx" >

```tsx title="发送消息的基础示例"
import React from 'react'
import { createSelects } from 'alemonjs'
import { Text, useSend } from 'alemonjs/jsx'
// 创建事件类型
export const selects = createSelects(['message.create'])
// 导出响应
export default onResponse(selects, event => {
  // 创建接口
  const Send = useSend(event)
  // 发送文本
  Send(<Text>hello</Text>)
})
```

  </TabItem>
  <TabItem value="1" label="res.ts" default>
 
 
```ts title="发送消息的基础示例"
import { createSelects } from 'alemonjs'
import { Text, useSend } from 'alemonjs'
// 创建事件类型
export const selects = createSelects(['message.create'])
// 导出响应
export default onResponse(selects, event => {
  // 创建接口
  const Send = useSend(event)
  // 发送文本
  Send(Text('hello'))
})
```

  </TabItem>
</Tabs>

<Image src={require('@site/static/img/model.png')} />
