---
sidebar_position: 1
---

# Function Overview

:::tip

Overview of the openness degree of platform API functions

✅ The platform has this API

❌ The platform does not have this API

🚩 Needs to apply to the platform
:::

### 一、Messaging Features (message)

### Operations

- Group

| Platform | Reply | Quote | Reaction | Pin | Broadcast | Update | Forward | Recall |
| -------- | ----- | ----- | -------- | --- | --------- | ------ | ------- | ------ |
| kook     | ✅    | ✅    | ✅       | ❌  | ❌        | ✅     | ❌      | ✅     |
| qq       | ✅    | ✅    | ✅       | ✅  | ✅        | ❌     | ❌      | 🚩     |
| ntqq     | ✅    | ❌    | ❌       | ❌  | ❌        | ❌     | ❌      | ❌     |

- Private

| Platform | Reply | Reaction | Update | Forward | Recall |
| -------- | ----- | -------- | ------ | ------- | ------ |
| kook     | ✅    | ✅       | ✅     | ❌      | ✅     |
| qq       | ✅    | ❌       | ❌     | ❌      | ❌     |
| ntqq     | ✅    | ❌       | ❌     | ❌      | ❌     |

### Mention/At

- Group

| Platform | All | Members | Sub-channel |
| -------- | --- | ------- | ----------- |
| kook     | ✅  | ✅      | ✅          |
| qq       | ✅  | ✅      | ✅          |
| ntqq     | 🚩  | 🚩      | ❌          |

### Rich Media

- Group

| Platform | Link | Text | Image | Graphic | Card | Button | Title Card | Article | File | Voice | Video |
| -------- | ---- | ---- | ----- | ------- | ---- | ------ | ---------- | ------- | ---- | ----- | ----- |
| kook     | ✅   | ✅   | ✅    | ❌      | ✅   | ✅     | ✅         | ❌      | ✅   | ✅    | ✅    |
| qq       | ✅   | ✅   | ✅    | ✅      | ✅   | 🚩     | ✅         | ❌      | ❌   | ❌    | ❌    |
| ntqq     | ❌   | ✅   | ✅    | ✅      | 🚩   | 🚩     | 🚩         | ❌      | ❌   | ✅    | ✅    |

- Private

| Platform | Link | Text | Image | File | Voice | Video |
| -------- | ---- | ---- | ----- | ---- | ----- | ----- |
| kook     | ✅   | ✅   | ✅    | ✅   | ✅    | ✅    |
| qq       | ❌   | ✅   | ✅    | ❌   | ❌    | ❌    |
| ntqq     | ❌   | ✅   | ✅    | ❌   | ✅    | ✅    |

### 二、 User Management

> Control: User entry and exit (channel) control
> Role: User grouping (role) control

### Administrator (admin)

| Platform | Check | Mute | Control | Role |
| -------- | ----- | ---- | ------- | ---- |
| kook     | ✅    | ❌   | ✅      | ✅   |
| qq       | ✅    | ✅   | ✅      | ✅   |
| ntqq     | ❌    | ❌   | ❌      | ❌   |

### Regular Member (member)

| Platform | Check | Mute | Control | Role |
| -------- | ----- | ---- | ------- | ---- |
| kook     | ✅    | ❌   | ❌      | ❌   |
| qq       | ❌    | ❌   | ❌      | ❌   |
| ntqq     | ❌    | ❌   | ❌      | ❌   |
