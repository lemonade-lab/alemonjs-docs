---
sidebar_position: 7
---

# 扩展

:::info

如何在桌面中加载扩展
:::

```json title="package.json"
{
  "name": "@alemonjs/test",
  "version": "0.0.1",
  "type": "module",
  "main": "lib/index.js",
  "scripts": {
    "build": "npx lvy build"
  },
  "export": {
    ".": "./lib/index.js",
    // 必须的
    "./package": "./package.json",
    // 必须的
    "./desktop": "./desktop.js"
  },
  // config
  "alemonjs": {
    // 桌面
    "desktop": {
      // 指令输入框
      "commond": [
        {
          "name": "test",
          // 发送指令
          "commond": "open.test"
        }
      ],
      // 侧边栏
      "sidebars": [
        {
          "name": "test",
          // 发送指令
          "commond": "open.test"
        }
      ]
    }
  }
}
```

```js title="package.js"
// 被激活的时候。
export const activate = context => {}
```

```js title="package.js"
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
// 当前目录
const __dirname = dirname(fileURLToPath(import.meta.url))
//
export const activate = context => {
  // 创建一个 webview。
  const webView = context.createSidebarWebView(context)

  // 监听 webview 的消息。
  webView.onMessage(data => {
    console.log(data)
  })

  // 当命令被触发的时候。
  context.onCommand('open.test', () => {
    const dir = join(__dirname, 'assets', 'index.html')
    // 确保路径存在
    const html = readFileSync(dir, 'utf-8')
    // 立即渲染 webview
    webView.loadWebView(html)
  })
}
```

- 创建资源路径

```ts
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
// 当前目录
const __dirname = dirname(fileURLToPath(import.meta.url))
export const activate = context => {
  // 创建 webview 路径
  const styleUri = context.createExtensionDir(join(__dirname, 'assets', 'index.css'))
  const scriptUri = context.createExtensionDir(join(__dirname, 'assets', 'index.js'))
  // 可替换 html 内部资源，确保正确加载
}
```
