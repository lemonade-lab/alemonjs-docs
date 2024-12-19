---
sidebar_position: 1
---

# 自定义

:::tip

对接任意开放平台和框架

:::

## 导出

```js title="src/index.ts"
import { Text, OnProcessor, getConfigValue , AEvents, useParse, At } from 'alemonjs'
import { defineBot } from 'alemonjs';
export default defineBot(() => {
  // 得到自定义配置
  const value = getConfigValue()
  const mybot  = value.mybot

  // 创建实例后。

  // 返回其接口设计。

  // 返回处理标准对象
  return {
    // 接口
    api: {
      // useSend()
      use: {
        send: (event: AEvents['message.create'], data: any[]) => {
          // 数据包 data
          if (data.length < 0) return Promise.all([])
          //
          return Promise.all([])
        }
      }
    }
  }
})
```
