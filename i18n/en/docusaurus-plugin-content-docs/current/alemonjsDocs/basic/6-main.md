---
sidebar_position: 6
---

# Cycle

:::info

Processing appropriate callbacks in different time periods

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
