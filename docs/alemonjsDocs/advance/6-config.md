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
import { getConfig, getConfigValue } from 'alemonjs'
const value = getConfigValue()
console.log('alemon.config.yaml', value)

// 配置类
const config = getConfig()
console.log('alemonjs/package.json', config.package)
console.log('alemonjs process.argv', config.argv)
console.log('alemon.config.yaml', config.value)

// 修改并保存为新配置
const val = config.value
val.apps.push('@alemonjs/db')
config.saveValue(val)
```
