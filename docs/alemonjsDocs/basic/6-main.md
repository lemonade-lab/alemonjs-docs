---
sidebar_position: 6
---

# 周期

:::info

在不同的时间段处理合适的回调

:::

```ts title="src/index.ts"
export default defineChildren(() => ({
  onCreated() {
    // 被创建时
  },
  onMounted() {
    // 模块索引识别完成时
  },
  unMounted() {
    // 出现意外被卸载，或者收到卸载时
  }
}))
```
