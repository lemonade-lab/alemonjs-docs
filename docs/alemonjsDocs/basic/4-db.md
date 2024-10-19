---
sidebar_position: 3
---

# 数据

:::info

Redis配置及调用

:::

```yaml title="alemon.config.yaml"
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
