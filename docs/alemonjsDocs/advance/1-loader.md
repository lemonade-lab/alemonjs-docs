---
sidebar_position: 1
---

# 装载

:::info

了解如何在模块中引用非模块文件

:::

## 类型

```ts title="src/end.d.ts"
/// <reference types="alemonjs/env" />
```

## 示例

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## 编译

```ts title="lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { files } from 'lvyjs/plugins'
export default defineConfig({
  build: {
    // 请不要拦截css和scss文件，alemonjs已内置处理
    plugins: [files({ filter: /\.(png|jpg)$/ })]
  }
})
```

## loader

```sh title="支持在非alemonjs环境中使用本文功能"
node --loader lvyjs/loader --no-warnings index.js
# or
NODE_OPTIONS='--loader lvyjs/loader --no-warnings' node index.js
```

```sh title="禁用非模块文件加载"
nxp lvyjs dev --no-import-assets
```

```sh title="替换assets匹配规则"
nxp lvyjs dev --import-assets "/.(pm3|jpg|png|svg|icon)$/"
```

```sh title="禁用postcss预处理"
nxp lvyjs dev --no-import-css
```

```sh title="替换css匹配规则"
nxp lvyjs dev --import-css "/.(css|scss|less)$/"
```
