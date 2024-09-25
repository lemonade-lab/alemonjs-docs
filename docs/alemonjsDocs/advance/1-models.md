---
sidebar_position: 1
---

# 模块

:::warning

实验性功能

:::

## 使用包

- `alemon.config.yaml`

```yaml title="定义apps变量，并添加包名"
apps:
  - '@alemonjs/xiuxian'
```

alemonjs 会根据配置去找对应的 package.json。

并根据 main 信息锁定模块入口文件。

以入口文件的目录为工程目录，收集子目录 apps 内的所有模块

```shell title="目录结构"
node_modules/                 // Node.js 依赖包
 ├── @alemonjs/               // AlemonJS 相关模块
 │    └── xixian/             // Xixian 模块
 │         ├── src/           // 源代码目录
 │         │    ├── apps/     // 开发应用
 │         │    └── index.ts  // 文件入口
 │         └── package.json   // 工程配置文件
 └── alemon.config.yaml       // 机器运行配置文件
```

## 配置

- `.npmignore`

```yaml
# 依赖
node_modules
/*
!/src
```

- `package.json`

```json
{
  "name": "@alemonjs/xiuxian",
  "version": "0.0.1",
  "description": "xiuxian",
  "author": "ningmengchongshui",
  "type": "module",
  "main": "src/index.js",
  "private": true,
  "types": "src",
  "exports": {
    ".": {
      "import": "./src/index.js",
      "types": "./src/index.d.ts"
    }
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
```

- `src/index.ts`

```js
import { defineChildren } from 'alemonjs'
export default defineChildren(config => {
  console.log('config', config)
  return {
    onCreated() {
      console.log('onCreated')
    }
  }
})
```
