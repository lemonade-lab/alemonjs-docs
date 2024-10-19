---
sidebar_position: 4
---

# 模块

:::info

使用第三方模块或打包模块至npm平台

:::

## 使用

定义apps变量，并添加包

```yaml title="alemon.config.yaml"
apps:
  - '@alemonjs/xiuxian'
```

alemonjs 会根据配置去找对应的 package.json。

并根据 main 信息锁定模块入口文件。

以入口文件的目录为工程目录，收集子目录 apps 内的所有模块

```shell title="大致的目录结构"
node_modules/                 // Node.js 依赖包
 ├── @alemonjs/               // AlemonJS 相关模块
 │    └── xixian/             // xixian 模块
 │         ├── lib/           // 源代码目录
 │         │    ├── apps/     // 开发应用
 │         │    └── index.js  // 文件入口
 │         └── package.json   // 工程配置文件
```

## 发布

```yaml title=".npmignore"
# 依赖
node_modules
/*
!/lib
```

```json title="package.json"
{
  "name": "@alemonjs/xiuxian",
  "version": "0.0.1",
  "description": "xiuxian",
  "author": "ningmengchongshui",
  "type": "module",
  "types": "lib",
  "main": "lib/index.js",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
```

```sh title="登录"
npm login
```

```sh title="本地"
npm pack
```

```sh title="发布"
npm publish
```
