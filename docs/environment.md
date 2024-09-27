---
sidebar_position: 2
---

# 开发前准备

## 准备环境

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning 注意事项

进行开发之前，请准备好如下所需环境和平台账户。

:::

<Tabs>
  <TabItem value="q" label="Windows" default>
  
推荐系统 `Windows10` | `Windows11`

1. 安装浏览器： 非推荐系统请自行安装 [Google Chrome](https://www.google.cn/intl/zh-CN/chrome/) / [Edge](https://www.microsoft.com/zh-cn/edge)

2. 安装 Node.js： [Node.js@18.20.3](https://nodejs.org/zh-cn)

> 推荐使用[nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)对Node.js进行版本管理，方便切换版本进行开发

> Node.js 版本必须大于16.14.0且双数版本

3. 安装 Git： [Git Download for Windows](https://git-scm.com/)

> git必须全部点击默认next，其他地址可能会造成git损坏

  </TabItem>
  <TabItem value="2" label="MacOS">

推荐系统 MacOS12 | MacOS14

> 非最新的系统不保证其成功性

1. 必要工具 Git 一般 MacOS 自带

```bash
git --version # 校验git版本，未安装会提示下载常用工具包
```

必要工具 [brew](https://brew.sh/)

```bash
# 下载
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```bash
# 添加环境环境
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.bash_profile
```

```bash
# 添加环境环境
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
```

```bash
# 刷新环境
source ~/.bash_profile && source ~/.zshrc
```

2. 安装工具 npm

> 使用[nvm](https://github.com/nvm-sh/nvm)对Node.js进行安装和版本管理，方便切换版本进行开发

```bash title="安装nvm"
brew install nvm
```

```bash
# 添加环境
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
# This loads nvm
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.bash_profile
# This loads nvm bash_completion
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.bash_profile
```

```bash
# 添加环境
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
# This loads nvm
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
# This loads nvm bash_completion
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zshrc
```

```bash
# 刷新环境
source ~/.bash_profile && source ~/.zshrc
```

3. 安装环境 Node.js@18.20.3

```bash
# 安装
nvm install 18.20.3
# 使用
nvm use 18.20.3
# 校验版本
node -v
npm -v
```

  </TabItem>

<TabItem value="3" label="Ubuntu/Debian">

> 示例系统 Ubuntu 24.04 LTS / Debian 12.0 X86 2H2G

- 确保apt包是最新的

```sh
sudo apt update
sudo apt install wget -y
sudo apt install curl -y
```

- 安装NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

- 添加NVM环境环境

`~/.bashrc`

```sh
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc # 刷新环境
nvm -v # 版本
```

- 安装 Node.js@18.20.3

```bash
# 安装
nvm install 18.20.3
# 使用
nvm use 18.20.3
# 校验版本
node -v
npm -v
```

- 安装git

```sh
apt install git
```

- 安装chromium

```sh
sudo apt install chromium-browser
```

  </TabItem>

  <TabItem value="4" label="Centos">

> 示例系统 Centos 8.2 X86 2H2G

- 确保yum包是最新的

```sh
sudo yum update -y
sudo yum install wget -y
sudo yum install curl -y
```

- 安装NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

- 添加NVM环境环境

`~/.bashrc`

```sh
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc # 刷新环境
nvm -v # 版本
```

- 安装 Node.js@18.20.3

> Centos8以下无法使用官方源的Node V18

> 请改用 16.14.0

```bash
# 安装
nvm install 18.20.3
# 使用
nvm use 18.20.3
# 校验版本
node -v
npm -v
```

- 安装git

```sh
yum install git
```

- 安装 Chromium

```sh
yum  install chromium -y
```

  </TabItem>
</Tabs>

## 准备平台账户

请提前准备好开发对接的平台账户：

- [QQ 开放平台](https://q.qq.com/#/)

- [KOOK 平台](https://developer.kookapp.cn/doc/)

- [DISCORD 平台](https://discord.com/developers/applications/)

出现意外？阅读[常见问题](./x-other/3-common-problem.md)
