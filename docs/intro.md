---
sidebar_position: 1
---

# 简介

:::warning 测试中

框架从2022年8月开始设计,当前处于2.0长期研发阶段。全新版本将在从构建打包、执行性能、开发效率、编程模型等多方面进行升级。

:::

:::tip AlemonJS

[AlemonJS](https://github.com/lemonade-lab/alemonjs) ( 发音为 /əˈlemən/ ) 基于 JavaScript 所构建的聊天平台开发框架

:::

它将会让你通过一个个简单的文件来描述不同的消息将要反馈的结果。他提供了像`中间件`、`订阅`、`周期`等概念去支持你的应用程序。无论你是初学者还是资深工程师，他都能让你轻松的组合其他的应用去丰富自己的业务。随着框架的发展，还衍生出了为机器人开发而设计的`lvyjs`打包构建工具，以及使用React组件绘制图片的`jsxp`库。

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
