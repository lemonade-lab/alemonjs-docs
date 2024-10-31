---
sidebar_position: 2
---

# Type

:::info

All events type notes

:::

## Create public message

```ts title="message.create"
export type AEventByMessageCreate = {
  // platform
  Platform: string
  // Server ID
  GuildId: string
  // Channel ID
  ChannelId: string
  // Whether it is the master, when it is, to be true
  IsMaster: boolean
  // THe message content
  UserId: string
  // User name
  UserName: string
  // User avatar address
  UserAvatar: string
  // Message ID
  MsgId: string
  // Content
  Megs: any[]
  // Open ID
  OpenID: string
  // Creation time
  CreateAt: number
  // Capture the original message format
  value: any
}
```
