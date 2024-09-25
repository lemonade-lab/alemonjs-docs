---
sidebar_position: 3
---

# 事件类型

## 消息创建：`message.create`

```js
export type AEventByMessageCreate = {
  /**
   * 平台
   */
  Platform: string
  /**
   * 服务器ID
   */
  GuildId: string
  /**
   * 频道ID
   */
  ChannelId: string
  /**
   * 是否是主人，是则ture
   */
  IsMaster: boolean
  /**
   * 消息内容
   */
  UserId: string
  /**
   * 用户名
   */
  UserName: string
  /**
   * 用户头像地址
   */
  UserAvatar: string
  /**
   * 消息ID
   */
  MsgId: string
  /**
   * 消息内容
   */
  Megs: any[]
  /**
   * 消息内容
   */
  OpenID: string
  /**
   * 创建时间
   */
  CreateAt: number
  /**
   * 捕获原始消息格式
   */
  value: any
}
```
