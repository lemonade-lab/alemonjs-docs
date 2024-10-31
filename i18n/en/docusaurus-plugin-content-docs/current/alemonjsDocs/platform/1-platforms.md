---
sidebar_position: 1
---

# Customization

:::tip

Integrate with any open platform and framework

:::

## Export

```js title="src/index.ts"
import { Text, OnProcessor, AEvents, useParse, At } from 'alemonjs'
import { defineBot } from 'alemonjs';
export default defineBot(() => {
  // After creating an instance.

  // Return its API design.

  // Return the standard processing object
  return {
    // API
    api: {
      // useSend()
      use: {
        send: (event: AEvents['message.create'], data: any[]) => {
          // Data packet data
          if (data.length < 0) return Promise.all([])
          //
          return Promise.all([])
        }
      }
    }
  }
})
```
