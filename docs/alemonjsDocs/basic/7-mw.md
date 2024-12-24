---
sidebar_position: 7
---

# 中间件

:::info

对指定事件类型的event进行修改并向下传递

:::

### `OnMiddleware`

```ts title="src/middleware/**/*/mw.ts"
// OnMiddleware((事件体,控制体)=>消息体,消息类型)
export default OnMiddleware(
  (event, next) => {
    // 新增字段
    event['user_id'] = event.UserID

    // 常用于兼容其他框架或增强event功能
    next()
  },
  'message.create' // 监听的事件类型
  //  ['message.create','private.message.create'] // 多选
)
```

:::info 重要提示

> OnEvent > OnMiddleware > OnObserver > OnResponse

不执行next()表示结束后续匹配。

:::
