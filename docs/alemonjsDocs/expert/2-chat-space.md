---
sidebar_position: 2
---

# chat-space

:::warning

实验性功能

:::

## 内置接口

### 数据 `Buffer`

```ts title="src/apps/**/*/res.ts"
import { BufferData } from 'chat-space'
const BufferDB = new BufferData()
```

- 把字符串地址转换成二维码

```ts title="src/apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.qrcode('www.baidu.com')
```

- 读取指定路径的图片

```ts title="src/apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.getPath('xxx.png')
```

- 读取指定网址的图片

```ts title="src/apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.getUrl('https://xxxx.com/xxx.png')
```

- 写入数据并以文件存储

```ts title="src/apps/**/*/res.ts"
BufferDB.set('/public/buffer.ini')
```

- 读取文件数据

```ts title="src/apps/**/*/res.ts"
const img: Buffer | false = await BufferDB.get('/public/buffer.ini')
```

### 客户端 Client

用于直接调用接口的客户端对象

让开发框架不会因为兼容性导致接口缺失

同时能保持原生平台特有功能

```ts title="apps/**/*/res.ts"
import { FilesServer } from 'chat-space'
const ClientFile = new FilesServer()
```

- 固定文件暴露

```ts title="src/apps/**/*/res.ts"
const url = await ClientFile.getLocalFileUrl('/plugins/point/public/img/ionc.png')

// url   http://[::]:port/api/xxx?address=/plugins/point/public/img/ionc.png
```

- 动态文件暴露

```ts title="src/apps/**/*/res.ts"
const img: Buffer = '<buffer-img xxx >'
const url = await ClientFile.getFileUrl(img)

// url   http://[::]:port/api/xxx/1234567890.png
```

### IP 地址

> 如果设备有公网地址，可通过如下方式获取

```ts title="src/apps/**/*/res.ts"
import { IP } from 'chat-space'
const ip:string : false = await IP.get()
```

## 特殊接口

> (卡片|表态)不同于其他接口一般只需要通用子段

> 每个平台的数据格式皆不相同

### qq-group

- embed

```js title="src/apps/**/*/res.ts"
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

```js title="src/apps/**/*/res.ts"
import { QQGroupBotAPI } from 'chat-space'
const Client = new QQGroupBotAPI()
```

### qq-guild-bot

- markdown模版功能

:::warning

markdown 通用消息模版已被禁止申请

:::
