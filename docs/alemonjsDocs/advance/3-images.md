---
sidebar_position: 3
---

# 图片

:::info

使用前端技术栈描述图片

:::

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
import { render } from 'jsxp'
import Word from '@src/image/component/Word'
export const pictureRender = (Props: Parameters<typeof Word>[0]) => {
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

```tsx title="tsxp.config.tsx"
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

```sh title="使用非模块文件加载"
npx jsxp dev --node-options lvyjs/loader
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

> 支持使用SCSS预处理
