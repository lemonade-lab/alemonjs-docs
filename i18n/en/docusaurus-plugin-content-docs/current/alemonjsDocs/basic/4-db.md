---
sidebar_position: 3
---

# Data

:::info

Redis: configuration and call

:::

```yaml title="lemon.config.yaml"
redis:
  host: 'localhost'
  port: 6379
  password: ''
  db: 0
```

```ts title="src/index.ts"
import { getIoRedis } from 'alemonjs'
const ioRedis = getIoRedis()
// ioRedis.set("alemonjs:user","xxx")
```
