---
sidebar_position: 2
show_giscus: 1
---

# 快速开始

:::tip

本文默认你已经了解并熟悉NodeJS编程，

如果你对NodeJS的部署和配置不熟悉，

同时也对JavaScript主流的打包工具不熟悉，

请前往[https://lvyjs.dev](https://lvyjs.dev/)了解

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="0" label="npmjs" default>
   
```sh title="文档统一采用yarn依赖工具"
npm install yarn -g 
```

```sh
npm init -y
yarn add alemonjs  @alemonjs/gui
```

  </TabItem>

  <TabItem value="1" label="npmmirror">
 
```sh title="文档统一采用yarn依赖工具"
npm install yarn -g --registry=https://registry.npmmirror.com
```

```sh
npm init -y
yarn add alemonjs  @alemonjs/gui --registry=https://registry.npmmirror.com
```

  </TabItem>
</Tabs>

## 启动模块

```json title="package.json"
{
  // pkg补充这一行
  "type": "module"
}
```

## 启动脚本

```js title="index.js"
import { start } from 'alemonjs'
start()
```

```json title="package.json"
{
  "scripts": {
    // pkg补充这一行
    "app": "node index.js"
  }
}
```

## 入口地址

```json title="package.json"
{
  // pkg补充这一行
  "main": "lib/index.js"
}
```

## 入口文件

```js title="lib/index.js"
export default defineChildren({
  onCreated() {
    console.info('开始创建')
  },
  onMounted() {
    console.info('创建完成')
  },
  unMounted() {
    console.info('卸载')
  }
})
```

## 启动

> 下载编辑器 [`Visual Studio Code`](https://code.visualstudio.com/)

- 启动服务

```sh
yarn app
```

> 下载编辑器扩展 [`ALemonJS GUI`](https://marketplace.visualstudio.com/items?itemName=lemonade-x.alemonjs-gui)

- 启动服务并登录gui

```sh
yarn app --login gui
```

## 配置文件

```yaml title="alemon.config.yaml"
port: 17117 # --port
input: 'lib/index.js' # --input
login: 'gui' # --login
# url参数。可连接 另一个 alemonjs 服务，并全量接收消息
url: 'ws://127.0.0.1:17117' # --url
# 不全量接收消息（当alemonjs被多个服务连接时，可进行动态分发消息。 请确保每个服务都具有相同的处理能力）
is_full_receive: false
```

## 环境变量

```ts
namespace NodeJS {
  interface ProcessEnv {
    login?: string
    platform?: string
    port?: string
    // development 模式下。可查看 logger.debug 记录
    NODE_ENV?: 'development' | 'production'
  }
}
```

## 对TS的支持

推进使用lvyjs开发构建工具，以支持ts环境

请前往[https://lvyjs.dev](https://lvyjs.dev/)了解
