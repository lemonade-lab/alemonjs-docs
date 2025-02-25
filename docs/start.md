---
sidebar_position: 3
show_giscus: 1
---

# 快速开始

:::tip 提示

[更多详细推荐前往环境生态查看对应内容](/docs/intro)

[如果未进行环境部署，请进行环境准备工作](/docs/environment)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 初始化

<Tabs>
  <TabItem value="0" label="npmjs" default>
   
   
```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g 
```

```sh title="使用模板"
npm create  lvyjs@latest -y
cd alemonjs
yarn install
```

  </TabItem>
  <TabItem value="1" label="npmmirror">
 
 
```sh title="文档统一采用yarn依赖工具"
npm install yarn@1.19.1 -g --registry=https://registry.npmmirror.com
```

```sh title="使用模板"
npm create  lvyjs@latest -y --registry=https://registry.npmmirror.com
cd alemonjs
yarn install
```

  </TabItem>
</Tabs>
 
## 配置

```yaml title="alemon.config.yaml"
# 基本格式 [配置名]:[配置参数]
gui:
  port: 17127
```

## 启动

> 选择GUI体验效果

> 下载应用[`Visual Studio Code`](https://code.visualstudio.com/)

> 下载扩展[`AlemonJS GUI`](https://marketplace.visualstudio.com/items?itemName=lemonade-x.alemonjs-gui)

> 选择底部 Status Bar AlemonJS 按钮以打开侧边栏

- 指令启动

```sh title="以开发模式启动，并选择gui"
yarn dev --login gui
```

- 配置中启动

```yaml title="alemon.config.yaml"
# 也可以在配置中固定login
login: 'gui'
```

- 函数中启动

```ts title="index.js"
import { start } from 'alemonjs'
start('src/index.ts', 'gui')
// start('src/index.ts', '@alemonjs/gui')
```
