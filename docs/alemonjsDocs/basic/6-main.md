---
sidebar_position: 6
---

# 周期

:::info

在不同的时间段处理合适的回调

:::

```ts title="src/index.ts"
export default defineChildren(() => {
  return {
    onCreated() {
      console.log('[@alemonjs/test]')
    }
  }
})
```
