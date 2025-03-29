---
sidebar_position: 5
---

# 事件

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
