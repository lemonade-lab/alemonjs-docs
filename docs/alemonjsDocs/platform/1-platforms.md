---
sidebar_position: 1
---

# 自定义平台

:::tip warning

可以自己定义平台，平台方法很简单，也提供了统一的类型提示

:::

## 导出

```js
import { Text, OnProcessor, AEvents, useParse, At, defineBot } from 'alemonjs'
export default defineBot(config => {
  // 登录标准化配置
  console.log('config', config)

  // 选择自定义时需要的私密信息，如token

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
