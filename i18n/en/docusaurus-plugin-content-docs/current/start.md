---
sidebar_position: 3
show_giscus: 1
---

# Quick Start

:::tip Tip

[For more detailed recommendations, please visit the environment ecosystem to view the corresponding content](/docs/intro)

[If you have not ready for the development environment, please prepare the environment first, and then follow the steps below.](/docs/environment)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Initialization

```sh title="Switch mirror, can be ignored if already be OK"
npm config set registry https://registry.npmmirror.com
```

```sh title="Use yarn in the project"
npm install yarn@1.19.1 -g
yarn install
```

<Tabs>
  <TabItem value="start-a" label="Quick Start" default>

```sh title="Create a new project with the template"
npm create alemonjs
cd alemonb
```

  </TabItem>

  <TabItem value="start-b" label="Restart" default>

### Configure Environment

```ts title="./tsconfig.json"
{
  "include": ["src/**/*"],
  "extends": "lvyjs/tsconfig.json"
}
```

### Install Framework

```shell title="add"
yarn add alemonjs@2 -W
```

### Create File

```ts title="./src/index.ts"
import { defineChildren } from 'alemonjs'
export default defineChildren(() => {
  return {
    onCreated() {
      console.log('onCreated')
    }
  }
})
```

## Platform

```sh tiitle="Install kook"
yarn add @alemonjs/kook
```

> Login to the platform, you need to add the corresponding platform association package.

  </TabItem>
</Tabs>

```sh title="Development mode start"
npx alemonjs dev --login "kook" --token "xxxx"
```

--login selects the KOOK platform.

--token is the token needed for KOOK login.

--input defaults to `./src/index.ts`

## Configuration

```yaml title="lemon.config.yaml"
kook:
  token: 'xxxx'
  master_id:
    - '123456'
    - '654321'
```

## Compile

```sh titile="Run build"
npx alemonjs build
```

> Output directory：lib

## PM2

### Installation

```shell
yarn add pm2 -D
```

```yaml title="alemon.config.yaml"
pm2:
  name: 'kook'
  # Production mode, the entry can choose only to the bundled production file
  script: 'alemonjs start --input ./lib/index.js --login kook'
```

### Configuration

`pm2.config.cjs`

```js title="pm2.config.cjs"
const fs = require('fs')
const yaml = require('yaml')
const data = fs.readFileSync('./alemon.config.yaml', 'utf8')
const config = yaml.parse(data)
const app = config?.pm2 ?? {}
/**
 * @type {{ apps: import("pm2").StartOptions[] }}
 */
module.exports = {
  apps: [
    {
      ...app,
      env: {
        // Ensure it's in production environment
        NODE_ENV: 'production',
        ...(app?.env ?? {})
      }
    }
  ]
}
```

### Start

```sh
# start
npx pm2 startOrRestart pm2.config.cjs
# stop
npx pm2 stop pm2.config.cjs
# delete
npx pm2 delete pm2.config.cjs
# kill
npx pm2 kill
# logs
npx pm2 logs
```
