---
sidebar_position: 2
---

# Aliases

:::info

Simplify and standardize import formats

:::

## Tip

```json title="ts.config.json"
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

## Usage

```ts
import { readFileSync } from 'fs'
// Get the absolute path of the file, type string
import img_logo from '@src/asstes/img/logo.png'
const data = readFileSync(img_logo, 'utf-8')
```

## Compile

```ts title="alemon.config.ts"
import { defineConfig } from 'lvyjs'
import { alias } from 'lvyjs/plugins'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  build: {
    plugins: [
      alias({
        entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
      })
    ]
  }
})
```
