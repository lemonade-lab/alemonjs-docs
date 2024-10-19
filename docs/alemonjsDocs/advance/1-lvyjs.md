---
sidebar_position: 1
---

# lvyjs

:::tip lvyjs

基于 tsx、esbuld、rollup 所构建的，为 nodejs 应用设计的开发工具。

YunzaiJS 默认统一使用 lvyjs 进行开发

:::

| Project | Status                | Description  |
| ------- | --------------------- | ------------ |
| [lvyjs] | [![lvyjs-s]][lvyjs-p] | 打包开发工具 |

[lvyjs]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/lvyjs
[lvyjs-s]: https://img.shields.io/npm/v/lvyjs.svg
[lvyjs-p]: https://www.npmjs.com/package/lvyjs

```sh
yarn add lvyjs-D
```

## 配置

```ts title="lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    }
  }
})
```

```json title="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "extends": "lvyjs/tsconfig.json"
}
```

## 非模块文件

### 类型

```ts title="src/end.d.ts"
/// <reference types="alemonjs/env" />
```

### 示例

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## 别名

:::info

简化和统一导入格式

:::

### 提示

### 编译

```ts title="lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    }
  }
})
```

### 使用

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '@src/asstes/img/logo.png'
const data = readFileSync(img_logo, 'utf-8')
```
