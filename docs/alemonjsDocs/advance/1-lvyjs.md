---
sidebar_position: 1
---

# lvyjs

:::tip lvyjs

基于 tsx、esbuld、rollup 所构建的，为 nodejs 应用设计的开发工具。

AlemonJS 默认统一使用 lvyjs 进行开发

:::

| Project | Status                | Description  |
| ------- | --------------------- | ------------ |
| [lvyjs] | [![lvyjs-s]][lvyjs-p] | 打包开发工具 |

[lvyjs]: https://github.com/lemonade-lab/alemonjs/tree/main/packages/lvyjs
[lvyjs-s]: https://img.shields.io/npm/v/lvyjs.svg
[lvyjs-p]: https://www.npmjs.com/package/lvyjs

```sh
yarn add lvyjs -D
```

## 配置示例

> typescript 配置

```json title="./tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@src/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "extends": "lvyjs/tsconfig.json"
}
```

> 编译打包配置

```ts title="./lvy.config.ts"
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

### 配置

```json title="./tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      // 设置别名，方便路径引用
      "@src/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "extends": "lvyjs/tsconfig.json"
}
```

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      // 编译时将 @src 别名替换为 src 保证路径正确
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

## 移除注释

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    },
    typescript: {
      // 打包时移除注释，如果需要其他配置，参考typeScript库的 CompilerOptions
      removeComments: true
    }
  }
})
```

## 压缩代码

```sh title="安装压缩插件"
yarn add rollup-plugin-terser -D
```

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// 导入压缩插件
import { terser } from 'rollup-plugin-terser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    alias: {
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    },
    typescript: {
      removeComments: true
    },
    plugins: [terser()] // 使用压缩插件压缩代码
  }
})
```
