---
sidebar_position: 5
---

# 事件响应API

### `OnResponse`

- 一种用于处理特定事件的功能，它允许开发者定义在事件发生时应执行的操作。

```ts title="示例"
export default OnResponse(
  (_, { next }) => {
    // 即使完成了，也继续执行匹配
    next()
  },
  'message.create', // 监听的事件类型
  /^你好$/ // 匹配的正则表达式
)
```

### `ResponseConfig`

- 响应配置

```ts
export default ResponseConfig({
  // 可选：只响应特定平台
  platform: 'kook'
})
```
