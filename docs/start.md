---
sidebar_position: 3
show_giscus: 1
---

# 快速开始

:::tip 提示

[更多详细推荐前往环境生态查看对应内容](/docs/intro)

[如果未进行环境部署，请进行环境准备工作](/docs/environment)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 初始化

<Tabs>
  <TabItem value="0" label="npmjs" default>
   
   
```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g 
```

```sh title="使用模板"
npm create  lvyjs@latest -y
cd alemonjs
yarn install
```

  </TabItem>
  <TabItem value="1" label="npmmirror">
 
 
```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g --registry=https://registry.npmmirror.com
```

```sh title="使用模板"
npm create  lvyjs@latest -y --registry=https://registry.npmmirror.com
cd alemonjs
yarn install
```

  </TabItem>
</Tabs>
 
## 配置

```yaml title="alemon.config.yaml"
# 基本格式 [配置名]:[配置参数]
gui:
  port: 17127
# redis:
#   host: 'localhost'
#   port: '6379'
#   password: ''
#   db: '1'

# mysql:
#   host: 'localhost'
#   port: '3306'
#   user: 'root'
#   password: 'Mm002580!'
#   database: 'alemonjs_test'
```

## 启动

> 选择GUI体验效果

> 需要下载[`Visual Studio Code`](https://code.visualstudio.com/)

> 下载插件[`AlemonJS GUI`](https://marketplace.visualstudio.com/items?itemName=lemonade-x.alemonjs-gui)

> 选择底部 Status Bar AlemonJS 按钮以打开侧边栏

```sh title="以开发模式启动，并选择gui"
yarn dev --login gui
```

--login 登陆平台

## PM2

```shell title="安装PM2"
yarn add pm2 -D
```

> 需要了解 [lvyjs](https://lvyjs.dev) 如何编译得到 lib/index.js

```js title="index.js"
import { start } from 'alemonjs'
start('lib/index.js')
```

```yaml title="alemon.config.yaml"
pm2:
  apps:
    - name: 'gui'
      script: 'node index.js --login gui'
      env:
        NODE_ENV: 'production'
```

### 配置

`pm2.config.cjs`

```js title="pm2.config.cjs"
const fs = require('fs')
const yaml = require('yaml')

// Read and parse the YAML configuration file
const data = fs.readFileSync('./alemon.config.yaml', 'utf8')
const config = yaml.parse(data)

// Extracting PM2 configuration
const pm2 = config?.pm2 ?? {}

/**
 * @type {{ apps: import("pm2").StartOptions[] }}
 */
module.exports = {
  ...pm2
}
```

### 启动

```sh
# start
npx pm2 startOrRestart pm2.config.cjs
# stop
npx pm2 stop pm2.config.cjs
# delete
npx pm2 delete pm2.config.cjs
# kill
npx pm2 kill
# logs
npx pm2 logs
```
