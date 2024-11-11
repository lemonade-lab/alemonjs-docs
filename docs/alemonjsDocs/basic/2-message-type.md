---
sidebar_position: 2
---

# 类型

:::info

所有事件类型注释

:::

## 事件

```ts
// 携带有消息体的
export type AEventsMsg = {
  // 公有事件-消息创建
  'message.create': PublicEventMessageCreate
  // 私有事件-消息创建
  'private.message.create': PrivateEventMessageCreate
}

//
export type AEvents = {
  // 消息更新（重编辑）
  'message.update': PublicEventMessageUpdate
  // 消息删除（撤回）
  'message.delete': PublicEventMessageDelete
  // 消息表态 添加
  'message.reaction.add': PublicEventMessageReactionAdd
  // 消息表态 移除
  'message.reaction.remove': PublicEventMessageReactionRemove
  // 公有事件 - 频道成员添加
  'member.add': PublicEventMemberAdd
  // 公有事件 - 频道成员移除（退出）
  'member.remove': PublicEventMemberRemove
  // 子频道创建
  'channal.create': PublicEventChannalCreate
  // 子频道删除
  'channal.delete': PublicEventChannalDelete
  // 公有事件 - 频道加入
  'guild.join': PublicEventGuildJoin
  // 公有事件 - 频道退出
  'guild.exit': PublicEventGuildExit
  // 私有事件 - 消息更新
  'private.message.update': PrivateEventMessageUpdate
  // 私有事件 - 消息删除（撤回）
  'private.message.delete': PrivateEventMessageDelete
  // 私有事件 - 朋友添加请求
  'private.friend.add': PrivateEventRequestFriendAdd
  // 私有事件 - 频道添加请求
  'private.guild.add': PrivateEventRequestGuildAdd
} & AEventsMsg
```

## 对象

```ts title=""
export type Guild = {
  /**
   * 频道ID
   */
  GuildId: string
  /**
   * 频道名
   */
  GuildIdName: string
  /**
   * 频道头像
   */
  GuildIdAvatar: string
}

export type Channel = {
  /**
   * 子频道ID
   */
  ChannelId: string
  /**
   * 子频道名
   */
  ChannelName: string
}

export type Message = {
  /**
   * 消息编号
   */
  MsgId: string
  /**
   * 创建时间
   */
  CreateAt: number
}

export type MessageBody = {
  /**
   * 消息内容
   */
  Megs: any[]
}

export type Platform = {
  /**
   * 平台
   */
  Platform: string
  /**
   * 标记
   */
  tag: string
  /**
   * 原始消息
   */
  value: any
}

// 用户
export type User = {
  /**
   * 用户编号
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
   * 是否是主人
   */
  IsMaster: boolean
}

// 机器人
export type Bot = {
  /**
   * 机器人编号
   */
  BotId: string
  /**
   * 机器人昵称
   */
  BotName: string
  /**
   * 机器人头像
   */
  BotAvatar: string
}
```
