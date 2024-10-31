---
sidebar_position: 2
---

# 类型

:::info

所有事件类型注释

:::

## 公共消息创建

```ts title="message.create"
export type AEventByMessageCreate = {
  // 平台
  Platform: string
  // 服务器ID
  GuildId: string
  // 频道ID
  ChannelId: string
  // 是否是主人，是则ture
  IsMaster: boolean
  // 消息内容
  UserId: string
  // 用户名
  UserName: string
  // 用户头像地址
  UserAvatar: string
  // 消息ID
  MsgId: string
  // 消息内容
  Megs: any[]
  // 开放平台 ID
  OpenID: string
  // 创建时间
  CreateAt: number
  // 捕获原始消息格式
  value: any
}
```
