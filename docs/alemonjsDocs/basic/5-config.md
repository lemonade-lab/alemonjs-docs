---
sidebar_position: 5
---

# 配置

:::info

读取框架配置

:::

```yaml title="alemon.config.yaml"
kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
```

```ts title="src/index.ts"
import { getConfig, getIoRedis } from 'alemonjs'
const cfg = getConfig()
console.log('alemon.config.yaml', config.value)
console.log('alemonjs package.json', config.package)
```
