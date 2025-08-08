---
sidebar_position: 3
show_giscus: 1
---

# Quick start

:::tip

[For more detailed recommendations, please visit Environmental Ecology to view the corresponding content](/docs/intro)

[If no environment deployment has been carried out, please prepare for the environment](/docs/environment)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Init

<Tabs>
  <TabItem value="0" label="npmjs" default>
   
   
```sh title="The document adopts yarn dependency tool uniformly"
npm install yarn@1.19.1 -g 
```

```sh title="Using templates"
npm create  lvyjs@latest -y
cd alemonjs
yarn install
```

  </TabItem>
  <TabItem value="1" label="npmmirror">
 
 
```sh title="The document adopts yarn dependency tool uniformly"
npm install yarn@1.19.1 -g --registry=https://registry.npmmirror.com
```

```sh title="Using templates"
npm create  lvyjs@latest -y --registry=https://registry.npmmirror.com
cd alemonjs
yarn install
```

  </TabItem>
</Tabs>
 
## Config

```yaml title="alemon.config.yaml"
#Basic format [Configuration name]: [Configuration parameters]
gui:
  port: 17127
```

## Start

> Select TestOne experience effect

> download [`Visual Studio Code`](https://code.visualstudio.com/)

> download [`ALemonTestOne`](https://marketplace.visualstudio.com/items?itemName=lemonadex.alemonjs-testone)

> Select the Status Bar ALemonJS button at the bottom to open the sidebar

- start

```sh title="Start in development mode and select GUI"
yarn dev --login gui
```

- start

```yaml title="alemon.config.yaml"
login: 'gui'
```

- start

```ts title="index.js"
import { start } from 'alemonjs'
start('src/index.ts', 'gui')
// start('src/index.ts', '@alemonjs/gui')
```
