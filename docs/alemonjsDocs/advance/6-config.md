---
sidebar_position: 6
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
import { getConfig, getIoRedis, getConfigValue } from 'alemonjs'
const config = getConfig()
console.log('alemon.config.yaml', config.value)
console.log('alemonjs package.json', config.package)
console.log('alemonjs process.argv', config.argv)
const value = getConfigValue()
// 即可 config.value
```