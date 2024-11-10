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

```sh title="国内镜像，已安装可忽视"
npm config set registry https://registry.npmmirror.com
```

```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g
yarn install
```

```sh title="使用模板"
npm create lvyjs@latest -y # 选择 alemonjs
cd alemonb
yarn install
```

## 配置

```yaml title="lemon.config.yaml"
kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
```

## 启动

```sh title="以开发模式启动，并登录kook"
yarn dev --login kook
```

## 编译

```sh title="编译代码"
npx lvys build
```

> 输出目录 lib

## PM2

```shell title="安装PM2"
yarn add pm2 -D
```

```yaml title="alemon.config.yaml"
pm2:
  name: 'kook'
  # 生产模式，入口可选择只向打包生产后的文件
  script: 'alemonjs start --input ./lib/index.js --login kook'
```

### 配置

`pm2.config.cjs`

```js title="pm2.config.cjs"
const fs = require('fs')
const yaml = require('yaml')
const data = fs.readFileSync('./alemon.config.yaml', 'utf8')
const config = yaml.parse(data)
const app = config?.pm2 ?? {}
/**
 * @type {{ apps: import("pm2").StartOptions[] }}
 */
module.exports = {
  apps: [
    {
      ...app,
      env: {
        // 确保是生产环境
        NODE_ENV: 'production',
        ...(app?.env ?? {})
      }
    }
  ]
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
