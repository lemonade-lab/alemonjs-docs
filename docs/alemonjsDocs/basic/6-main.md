---
sidebar_position: 6
---

# 周期

:::info

在不同的时间段处理合适的回调

:::

```ts title="src/index.ts"
export default defineChildren({
  onCreated() {
    /**
     * 把所有在创建时要执行的内容放置在此处
     */
  },
  onMounted() {
    // 模块索引识别完成时。也就是 onCreated 执行完之后。
  },
  unMounted() {
    // 当onCreated和onMounted出现意外被卸载，或者收到卸载时
  }
})
```
