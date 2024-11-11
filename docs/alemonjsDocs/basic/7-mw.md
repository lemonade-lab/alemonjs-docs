---
sidebar_position: 7
---

# 中间件

:::info

对指定事件类型的event进行修改并向下传递

:::

### `OnMiddleware`

```ts title="middleware/**/*/mw.ts"
// OnMiddleware((消息体,控制体)=>消息体,消息类型)
export default OnMiddleware(
  event => {
    // 新增字段
    event['user_id'] = event.UserID

    // 常用于兼容其他框架或增强event功能

    return event
  },
  'message.create' // 监听的事件类型
)
```
