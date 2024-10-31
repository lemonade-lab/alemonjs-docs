---
sidebar_position: 1
---

# Response

:::info

How to define the processing message body

:::

### `OnResponse`

A function used to handle specific events, which allows developers to define the operations that should be performed when the event occurs.

```ts title="apps/**/*/res.ts"
// OnResponse(("消息体","控制体")=>{},"消息类型","匹配正则")
export default OnResponse(
  (event, { next }) => {
    // Event message
    console.log('event', event)
    // Go to the next matching rule
    next()
  },
  'message.create', // Listening event type
  /^你好$/ // Matching regular expression
)
```

In the Apps directory, the newly -established folder and Res.TS file, the framework will be automatically searching for
