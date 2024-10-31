---
sidebar_position: 3
---

# Hook

:::info Hook

Demanding in specific events or status, allowing developers to insert custom behavior when a specific life cycle or event occurs.

:::

Alemonjs provides the following hooks:

### `useSend`

> Allow developers to send messages when responding to specific events (such as receiving messages).
>
> This acquisition is usually performed in a specific event processing context.

```ts title="apps/**/*/res.ts"
import { useSend, Text, At, Image } from 'alemonjs'
export default OnResponse(
  event => {
    const Send = useSend(event)

    // Send text
    Send(Text('Hello World!'))

    // Send @ mension
    Send(At('123456'))

    // Send multiple types of messages
    Send(Text('Hello '), At('123456'), Text(', How are things going?'))

    // Send pictures
    const img: Buffer = null // You need to properly initialize the buffer here
    Send(Image(img))

    // Send local picture files
    Send(Image('src/assets/img/test.jpg', 'file'))
  },
  'message.create',
  /^(#|\/)?Hello$/
)
```

### `usePrase`

> Utilized and extract the receiving message content,
>
> during a specific event processing (e.g. when receiving a message),
>
> Developers can get the specific content of the message.

```ts title="apps/**/*/res.ts"
import { useParse } from 'alemonjs'
export default OnResponse(
  event => {
    // Parse user messages
    const text = useParse(event.Msgs, 'Text')
    if (!text) {
      return // Massage content is empty
    }

    const ats = useParse(event.Msgs, 'At')
    if (!ats || ats.length === 0) {
      return // @ Mention not found
    }

    // Find the user type @ mension, and not BOT
    const UserID = ats.find(item => item.typing === 'user' && !item.bot)?.value
    if (!UserID) {
      return // No user ID is found
    }

    // Processing users who are AT...
  },
  'message.create',
  /^(#|\/)?Hello$/
)
```

## `useObserver`

> Observer mode, monitor and respond to an event. Observation event example

```ts title="apps/**/*/res.ts"
import { Text, useObserver, useParse, useSend } from 'alemonjs'
export default OnResponse(
  event => {
    // create
    const Send = useSend(event)
    Send(Text('Please enter the password'))

    // Create an Observer
    const Observer = useObserver(event, 'message.create')

    Observer(
      (event, { next }) => {
        // Create
        const Send = useSend(event)
        const text = useParse(event.Megs, 'Text')
        // Check
        if (text === '123456') {
          Send(Text('The password is correct'))
          // finish
        } else if (text == 'close') {
          // finish
          Send(Text('Cancel login'))
        } else {
          Send(Text('The password is incorrect'))
          // Continue to listen to the next message
          next()
        }
      },
      ['UserId'] // Supervise the next news of the current user
    )

    //
  },
  'message.create',
  /Login/
)
```
