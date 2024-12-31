---
sidebar_position: 4
---

# 模块

:::info

使用第三方模块或打包模块至npm平台

:::

## 使用

定义apps变量，并添加包

```yaml title="alemon.config.yaml"
apps:
  - 'alemonjs-pkg'
```

alemonjs 会根据配置去找对应的 package.json。

并根据 main 信息锁定模块入口文件。

以入口文件的目录为工程目录，收集子目录 apps 内的所有模块

```shell title="大致的目录结构"
node_modules/                 // Node.js 依赖包
 ├── alemonjs-pkg       // 相关模块
 │      ├── lib/           // 源代码目录
 │      │    ├── apps/     // 开发应用
 │      │    └── index.js  // 文件入口
 │      └── package.json   // 工程配置文件
```

如果想要家把packages目录下的本地模块文件都视为模块依赖

```json title="package.json"
{
  "workspaces": ["packages/*"]
}
```

```sh
git clone --depth=1  [home-adress] ./packages/[pkg-name]
```

```sh
yarn install
```

```yaml title="alemon.config.yaml"
apps:
  - 'pkg-name'
```
