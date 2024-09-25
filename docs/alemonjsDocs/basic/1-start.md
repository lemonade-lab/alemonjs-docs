---
sidebar_position: 1
---

# 如何开始

:::tip 提示

更多详细推荐前往 Status 中的 npm 查看对应内容

:::

| Project                  | Status                                                  | Description       |
| ------------------------ | ------------------------------------------------------- | ----------------- |
| [alemonjs]               | [![alemonjs-s]][alemonjs-p]                             | 标准应用解析器    |
| [@alemonjs/kook]         | [![@alemonjs/kook-s]][@alemonjs/kook-p]                 | KOOK 机器人连接   |
| [@alemonjs/discord]      | [![@alemonjs/discord-s]][@alemonjs/discord-p]           | DC 公会机器人连接 |
| [@alemonjs/qq-group-bot] | [![@alemonjs/qq-group-bot-s]][@alemonjs/qq-group-bot-p] | QQ 群机器人连接   |
| [@alemonjs/qq-guild-bot] | [![@alemonjs/qq-guild-bot-s]][@alemonjs/qq-guild-bot-p] | QQ 频道机器人连接 |
| [@alemonjs/qq]           | [![@alemonjs/qq-s]][@alemonjs/qq-p]                     | QQ 机器人连接     |

[alemonjs]: https://github.com/ningmengchongshui/alemonjs
[alemonjs-s]: https://img.shields.io/npm/v/alemonjs.svg
[alemonjs-p]: https://www.npmjs.com/package/alemonjs
[@alemonjs/kook]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/kook
[@alemonjs/kook-s]: https://img.shields.io/npm/v/@alemonjs/kook.svg
[@alemonjs/kook-p]: https://www.npmjs.com/package/@alemonjs/kook
[@alemonjs/discord]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/discord
[@alemonjs/discord-s]: https://img.shields.io/npm/v/@alemonjs/discord.svg
[@alemonjs/discord-p]: https://www.npmjs.com/package/@alemonjs/discord
[@alemonjs/qq-group-bot]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/qq-group-bot
[@alemonjs/qq-group-bot-s]: https://img.shields.io/npm/v/@alemonjs/qq-group-bot.svg
[@alemonjs/qq-group-bot-p]: https://www.npmjs.com/package/@alemonjs/qq-group-bot
[@alemonjs/qq-guild-bot]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/qq-guild-bot
[@alemonjs/qq-guild-bot-s]: https://img.shields.io/npm/v/@alemonjs/qq-guild-bot.svg
[@alemonjs/qq-guild-bot-p]: https://www.npmjs.com/package/@alemonjs/qq-guild-bot
[@alemonjs/qq]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/qq
[@alemonjs/qq-s]: https://img.shields.io/npm/v/@alemonjs/qq.svg
[@alemonjs/qq-p]: https://www.npmjs.com/package/@alemonjs/qq

## 初始化环境

- 使用 yarn

```shell
npm install yarn@1.19.1 -g
```

- 安装 ts 环境

```shell
yarn add tsx -D
```

创建文件 `./tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "extends": "alemonjs/tsconfig.json"
}
```

- 安装 alemonjs

```shell
yarn add alemonjs@2 -W
```

创建文件 `./index.ts`

```ts
import { createBot } from 'alemonjs'
createBot()
```

- 启动

```shell title="--login 即要选择登录的平台"
npx tsx index.ts --login "xxx"
```

## 登录平台

> 登录平台，需要增加对应平台的关联包

- 例如：安装 kook 平台

```shell
yarn add @alemonjs/kook
```

- 启动

```shell title="-token 即登录需要的 token ，不同平台要求不同"
npx tsx index.ts --login "kook" --token "xxxx"
```

## 热更新配置

`alemon.config.yaml`

```yaml
# @alemonjs/kook

kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
# kook end

# 不使用 --login 时将尝试读取此配置内容以启动机器人
login: 'kook'

# pm2
pm2:
  name: 'kook'
  script: 'npx tsx index.ts --login kook'
```

## PM2

```shell title="安装 pm2"
yarn add pm2 -D
```

`alemon.config.yaml`

```yaml
pm2:
  name: 'kook'
  script: 'npx tsx index.ts --login kook'
  env:
    NODE_ENV: 'production'
```

`pm2.config.cjs`

```js
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
      ...app
    }
  ]
}
```

```shell title="使用 pm2 启动"
npx pm2 start --config pm2.condig.cjs
```
