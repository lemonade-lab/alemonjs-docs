---
sidebar_position: 1
---

# lvyjs

:::tip lvyjs

Based on TSX, esBuild, and Rollup, it is a development tool for nodejs applications.

Alemonjs uses lvyjs for development by default

:::

| Project | Status                | Description                  |
| ------- | --------------------- | ---------------------------- |
| [lvyjs] | [![lvyjs-s]][lvyjs-p] | Packing and development tool |

[lvyjs]: https://github.com/lvyjs/core
[lvyjs-s]: https://img.shields.io/npm/v/lvyjs.svg
[lvyjs-p]: https://www.npmjs.com/package/lvyjs

```sh
yarn add lvyjs -D
```

## Configuration example

> typescript Configuration

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

> Compile and packaged configuration

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

## Non -module file

### type

```ts title="src/end.d.ts"
/// <reference types="alemonjs/env" />
```

### Exemplary example

```ts
import { readFileSync } from 'fs'
// 得到该文件的绝对路径，类型 string
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## Alias

:::info

Simplify and unified import format

:::

### Configuration

```json title="./tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      // Set alias, convenient path reference
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
      // When compiling, the @src aliases are replaced with src guarantee path correct
      entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
    }
  }
})
```

### Use alias

```ts
import { readFileSync } from 'fs'
// Get the absolute path of this file, Type string
import img_logo from '@src/asstes/img/logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## Removing annotation

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
      // Remove annotation when packing，If you need other configuration，reference TypeScript library's CompilerOptions
      removeComments: true
    }
  }
})
```

## Compression code

```sh title="Install compression plugin"
yarn add rollup-plugin-terser -D
```

```ts title="./lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// Import compression plugin
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
    plugins: [terser()] // Use compressed plugin compression code
  }
})
```
