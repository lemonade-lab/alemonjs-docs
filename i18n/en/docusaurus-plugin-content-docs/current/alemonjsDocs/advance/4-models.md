---
sidebar_position: 4
---

# Module

:::info

Use third-party modules or package modules to the npm platform

:::

## Usage

Define the `apps` variable and add the package

```yaml title="alemon.config.yaml"
apps:
  - 'my-modules-xiuxian'
```

AlemonJS will look for the corresponding package.json based on the configuration,

it will lock the module's entry file based on the main information.

Using the directory of the entry file as the project directory, collect all modules within the apps subdirectory.

```shell title="大致的目录结构"
node_modules/                 // Node.js dependencies
 ├── my-modules-xiuxian    // AlemonJS related modules
 │      ├── lib/           // Source code directory
 │      │    ├── apps/     // Development applications
 │      │    └── index.js  // Entry file
 │      └── package.json   // Project configuration file
```

## Publishing

```yaml title=".npmignore"
# Dependencies
node_modules
/*
!/lib
```

```json title="package.json"
{
  "name": "my-modules-xiuxian",
  "version": "0.0.1",
  "description": "xiuxian",
  "author": "ningmengchongshui",
  "type": "module",
  "main": "lib/index.js", // Required
  "types": "lib",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "types": "./lib/index.d.ts"
    }
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
```

```sh title="login"
npm login
```

```sh title="pack"
npm pack
```

```sh title="publish"
npm publish
```
