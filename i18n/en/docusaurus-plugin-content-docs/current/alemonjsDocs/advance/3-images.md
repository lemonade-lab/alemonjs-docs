---
sidebar_position: 3
---

# Image

:::info

Describe images using front-end technology stack

:::

## Installation

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

## Sending

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
    // Create
    const Send = useSend(event)
    if (typeof img == 'boolean') {
      Send(Text('Production failed'))
    } else {
      Send(Image(img))
    }
  },
  'message.create',
  /pic/
)
```

## Debugging

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

```sh title="Load with non -module files"
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
    // Allow importing CSS files using import
    'postcss-import': {},
    // Allow nested syntax
    'postcss-simple-vars': {},
    // nested
    'postcss-nested': {},
    // tailwindcss
    'tailwindcss': {},
    // Add browser prefixes
    'autoprefixer': {},
    // Inline URL resources
    'postcss-url': {
      url: 'inline'
    }
  }
}
```

### Entry

```css title="@src/input.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  /* Default margins */
  margin: 0;
  padding: 0;
  /* Margin overlap */
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

> Support for SCSS preprocessing
