---
sidebar_position: 3
---

# 内置实例方法

:::warning

实验性功能

:::

### 数据 `Buffer`

```js
import { BufferData } from 'chat-space'
const BufferDB = new BufferData()
```

- 把字符串地址转换成二维码

```js
const img: Buffer | false = await BufferDB.qrcode('www.baidu.com')
```

- 读取指定路径的图片

```js
const img: Buffer | false = await BufferDB.getPath('xxx.png')
```

- 读取指定网址的图片

```js
const img: Buffer | false = await BufferDB.getUrl('https://xxxx.com/xxx.png')
```

- 写入数据并以文件存储

```js
BufferDB.set('/public/buffer.ini')
```

- 读取文件数据

```js
const img: Buffer | false = await BufferDB.get('/public/buffer.ini')
```

### 客户端 Client

用于直接调用接口的客户端对象

让开发框架不会因为兼容性导致接口缺失

同时能保持原生平台特有功能

```js title="FilesServer"
import { FilesServer } from 'chat-space'
const ClientFile = new FilesServer()
```

- 固定文件暴露

```js
const url = await ClientFile.getLocalFileUrl('/plugins/point/public/img/ionc.png')

// url   http://[::]:port/api/xxx?address=/plugins/point/public/img/ionc.png
```

- 动态文件暴露

```js
const img : Buffer = '<buffer-img xxx >'
const url = await ClientFile.getFileUrl(img)

// url   http://[::]:port/api/xxx/1234567890.png
```

### IP 地址

> 如果设备有公网地址，可通过如下方式获取

```js title="获取设备公网地址"
import { IP } from 'chat-space'
const ip:string : false = await IP.get()
```
