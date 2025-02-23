---
sidebar_position: 1
---

# 简介

:::tip AlemonJS

[AlemonJS](https://github.com/lemonade-lab/alemonjs) ( 发音为 /əˈlemən/ ) 基于 JavaScript 所构建的聊天平台机器人开发框架

:::

框架通过定义响应函数来来描述不同事件将要执行的操作。

```ts title="发送消息的基础示例"
import { Text, useSend } from 'alemonjs'
// 导出响应
export default OnResponse((event, next) => {
  // 创建接口
  const Send = useSend(event)
  // 发送文本
  Send(Text('hello'))
  // 事件类型
}, 'message.create')
```

import Image from '@site/src/components/Image'

<Image src={require('@site/static/img/model.png')} />
