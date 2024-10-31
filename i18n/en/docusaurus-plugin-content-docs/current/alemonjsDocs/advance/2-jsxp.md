---
sidebar_position: 2
---

# jsxp

:::tip jsxp

[jsxp](https://github.com/lemonade-lab/lvyjs/tree/main/packages/jsxp) It is a library that can use Puppeteer to take a screenshot of the React (TSX) component in the TSX environment

Alemonjs uses JSXP to call Puppeteer to generate screenshots to react components

:::

| Project | Status              | Description  |
| ------- | ------------------- | ------------ |
| [jsxp]  | [![jsxp-s]][jsxp-p] | Packing tool |

[jsxp]: https://github.com/lvyjs/core/tree/main/packages/jsxp
[jsxp-s]: https://img.shields.io/npm/v/jsxp.svg
[jsxp-p]: https://www.npmjs.com/package/jsxp

> If you use VSCODE for development：Installation plugin `ES7+ React/Redux/React-Native snippets`

## Install

```sh
yarn add jsxp -W
```

## Configuration

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

## Component

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

## send

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
    // create
    const Send = useSend(event)
    if (typeof img == 'boolean') {
      Send(Text('Production failure'))
    } else {
      Send(Image(img))
    }
  },
  'message.create',
  /pic/
)
```

## debug

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

```sh title="lvy start up"
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

> CSS Pre-processing

```js title="postcss.config.cjs"
module.exports = {
  plugins: {
    // Allow the use of Import to import CSS file
    'postcss-import': {},
    // Allow the use of nested syntax
    'postcss-simple-vars': {},
    // nested
    'postcss-nested': {},
    // tailwindcss
    'tailwindcss': {},
    // Increase the browser prefix
    'autoprefixer': {},
    // Inner Union URL Resources
    'postcss-url': {
      url: 'inline'
    },
    // Compressed CSS
    'cssnano': {
      preset: 'default'
    }
  }
}
```

### Entrance

```css title="@src/input.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  /* Default border */
  margin: 0;
  padding: 0;
  /*margin overlap */
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
