---
sidebar_position: 2
---

# 特殊接口

:::warning

实验性功能

:::

> (卡片|表态)不同于其他接口一般只需要通用子段

> 每个平台的数据格式皆不相同

### 一、qq-group

- embed

```js
import { QQGroupBotAPI } from 'chat-space'
const Client = new QQGroupBotAPI()
const cards = [
  {
    embed: {
      title: '新人任务',
      prompt: '新人任务',
      thumbnail: {
        url: 'http://tva1.sinaimg.cn/bmiddle/6af89bc8gw1f8ub7pm00oj202k022t8i.jpg'
      },
      fields: [
        {
          name: '一库一库'
        },
        {
          name: '😁继续努力'
        }
      ]
    }
  }
]
```

- emoji

```js
import { QQGroupBotAPI } from 'chat-space'
const Client = new QQGroupBotAPI()
```

### 二、qq-guild-bot

- markdown模版功能

:::warning

markdown 通用消息模版已被禁止申请

:::
