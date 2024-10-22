---
sidebar_position: 2
---

# jsxp

:::tip jsxp

[jsxp](https://github.com/lemonade-lab/lvyjs/tree/main/packages/jsxp) 是一个可以在 tsx 环境中,使用 puppeteer 对 React （tsx） 组件进行截图的库

AlemonJS 默认统一使用 jsxp 调用 puppeteer 对 React 组件进行生成截图

:::

| Project | Status              | Description |
| ------- | ------------------- | ----------- |
| [jsxp]  | [![jsxp-s]][jsxp-p] | 打包工具    |

[jsxp]: https://github.com/lvyjs/core/tree/main/packages/jsxp
[jsxp-s]: https://img.shields.io/npm/v/jsxp.svg
[jsxp-p]: https://www.npmjs.com/package/jsxp

> 若使用VScode进行开发：安装插件 `ES7+ React/Redux/React-Native snippets`

## 安装

```sh
yarn add jsxp -W
```

## 配置

```js title=".puppeteerrc.cjs"
/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = require('jsxp/.puppeteerrc')
```

```ts title="lvy.config.ts"
import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
// add jsxp
import { createServer as useJSXP } from 'jsxp'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineConfig({
  plugins: [
    {
      name: 'jsxp',
      // use jsxp
      useApp: () => process.argv.include('--view') && useJSXP()
    }
  ]
})
```

## 组件

```tsx title="@src/image/component/Word.tsx"
import React from 'react'
export default ({ name }) => {
  return (
    <html>
      <body>
        <div> {name} </div>
      </body>
    </html>
  )
}
```

```tsx title="@src/image/index.tsx"
import React from 'react'
import { render, ObtainProps } from 'jsxp'
import Word from '@src/image/component/Word'
export const pictureRender = (Props: ObtainProps<typeof Word>) => {
  return render({
    // html/hello/uid.html
    path: 'hello',
    name: `${uid}.html`,
    component: <Word {...Props} />
  })
}
```

## 发送

```ts title="@src/apps/word/res.ts"
import { useSend, Image, Text } from 'alemonjs'
import { pictureRender } from '@/src/image/index'
export default OnResponse(
  async event => {
    const UID = event.UserID
    // pic
    const img = await pictureRender(UID, {
      name: 'Hello Word !'
    })
    // 创建
    const Send = useSend(event)
    if (typeof img == 'boolean') {
      Send(Text('生产失败'))
    } else {
      Send(Image(img))
    }
  },
  'message.create',
  /pic/
)
```

## 调试

```tsx title="jsxp.config.tsx"
import React from 'react'
import { join } from 'path'
import { defineConfig } from 'jsxp'
import { readFileSync } from 'fs'
import Word from '@src/image/conpomnent/Word'
export default defineConfig({
  routes: {
    '/AssMessage': {
      component: <Word />
    }
  }
})
```

```sh title="lvy启动"
npx lvy dev --view
```

## CSS

### tailwind

```js title="tailwind.config.js"
/**
 *  @type {import('tailwindcss').Config}
 */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}']
}
```

### postcss

> CSS预处理

```js title="postcss.config.cjs"
module.exports = {
  plugins: {
    // 允许使用import导入css文件
    'postcss-import': {},
    // 允许使用嵌套语法
    'postcss-simple-vars': {},
    // nested
    'postcss-nested': {},
    // tailwindcss
    'tailwindcss': {},
    // 增加浏览器前缀
    'autoprefixer': {},
    // 内联url资源
    'postcss-url': {
      url: 'inline'
    },
    // 压缩css
    'cssnano': {
      preset: 'default'
    }
  }
}
```

### 入口

```css title="@src/input.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  /* 默认边距 */
  margin: 0;
  padding: 0;
  /* margin重叠 */
  display: flex;
  flex-direction: column;
}
```

```tsx title="@src/image/component/Word.tsx"
import React from 'react'
import { LinkStyleSheet } from 'jsxp'
import css_output from '@src/input.css'
export default ({ name }) => {
  return (
    <html>
      <head>
        <LinkStyleSheet src={css_output} />
      </head>
      <body>
        <div> {name} </div>
      </body>
    </html>
  )
}
```
