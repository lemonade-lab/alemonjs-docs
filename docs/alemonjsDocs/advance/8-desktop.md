---
sidebar_position: 7
---

# 扩展

:::info

如何在桌面中开发扩展
:::

## 配置

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

## 周期

```js title="package.js"
// 被激活的时候。
export const activate = context => {}
```

## webview

### 渲染

```js title="desktop.js"
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
// 当前目录
const __dirname = dirname(fileURLToPath(import.meta.url))
export const activate = context => {
  // 创建一个 webview。
  const sidebarWebView = context.createSidebarWebView(context)
  // 当命令被触发的时候。
  context.onCommand('open.test', () => {
    const dir = join(__dirname, 'assets', 'index.html')
    // 确保路径存在
    const html = readFileSync(dir, 'utf-8')
    // 立即渲染 webview
    sidebarWebView.loadWebView(html)
  })
}
```

- 接收消息

```js title="desktop.js"
export const activate = context => {
  // 创建一个 webview。
  const sidebarWebView = context.createSidebarWebView(context)
  // 监听 webview 的消息。
  sidebarWebView.onMessage(data => {
    // { type: 'pong',data: ''}
  })
}
```

- 发送消息

```js title="desktop.js"
export const activate = context => {
  // 创建一个 webview。
  const sidebarWebView = context.createSidebarWebView(context)
  // 监听 webview 的消息。
  sidebarWebView.postMessage({
    type: 'ping',
    data: ''
  })
}
```

### 脚本

- 发送消息

```js title="index.js"
const API = createDesktopAPI()

API.postMessage({
  type: 'pong',
  data: ''
})
```

- 接收消息

```js title="index.js"
const API = createDesktopAPI()

API.onMessage(data => {
  //  {  type: 'ping', data: '' }
})
```

## 资源路径

```js title="desktop.js"
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

## 通知推送

```js title="desktop.js"
export const activate = context => {
  context.notification('扩展加载')
}
```
