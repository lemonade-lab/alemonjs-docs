---
sidebar_position: 1
---

# Loading

:::info

Learn how to reference non-module files in a module

:::

## Type

```ts title="src/end.d.ts"
/// <reference types="alemonjs/env" />
```

## Example

```ts
import { readFileSync } from 'fs'
// Get the absolute path of the file, type string.
import img_logo from '../logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## Compile

```ts title="lvy.config.ts"
import { defineConfig } from 'lvyjs'
export default defineConfig({
  build: {
    // Please do not intercept CSS and SCSS files. Alemonjs has built -in processing
    files: { filter: /\.(png|jpg)$/ }
  }
})
```
