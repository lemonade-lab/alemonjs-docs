---
sidebar_position: 7
---

# 模块

:::info

如果进行模块化和模块化处理仓库
:::

## 本地模块化

> 安装仓库到`packages`目录下

```sh
git clone --depth=1  [git-url] ./packages/[pkg-name]
git clone --depth=1  [git-url2] ./packages/[pkg-name2]
git clone --depth=1  [git-url3] ./packages/[pkg-name3]
```

> 把packages目录下的本地模块都视为模块依赖

```json title="package.json"
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

> 重新安装依赖

```sh
yarn install
```

> 框架配置设置`apps`

```yaml title="alemon.config.yaml"
apps:
  - 'pkg-name'
```

> 如果拉取到仓库分支属于源码，你可能还需要进行编译

```json
{
  "name": "pkg-name",
  "scripts": {
    // 需要确保该仓库pkg配置了build
    "build": "npx lvyjs build"
  }
}
```

> 安装工具`lerna`

```sh
npm install lerna -g
```

> 配置

```json title="lerna.json"
{
  "version": "independent",
  "packages": ["packages/*"],
  "$schema": "node_modules/lerna/schemas/lerna-schema.json"
}
```

> 全部打包

```sh
npx lerna run build
```

## 如何识别模块文件的

```shell title="大致的目录结构"
node_modules/                 // Node.js 依赖包
 ├── pkg-name                 // 相关模块
 │      ├── lib/              // 工程目录
 │      │    ├── apps/        // 应用
 │      │    ├── middleware/  // 中间件
 │      │    └── index.js     // 入口文件
 │      └── package.json      // 工程配置文件
```

会读取`node_modules/pkg-name/package.json`

解析并得到`main`

以入口文件的目录为工程目录

收集子目录 apps 内的所有模块

包配置可能类似于下面的信息

```json title="package.json"
{
  "name": "pkg-name",
  "version": "0.0.1",
  "type": "module", // 必须的
  "main": "lib/index.js", // 必须的
  "scripts": {
    "build": "npx lvy build"
  },
  "export": {
    ".": "./lib/index.js", // 必须的
    "./package": "./package.json" // 必须的
  }
}
```
