---
sidebar_position: 2
---

# Prerequisites

## Platform registration

:::warning warning

Before developing, please prepare a platform account.

:::

- [QQ Development platform](https://q.qq.com/#/)
- [KOOK Development platform](https://developer.kookapp.cn/doc/)
- [DISCORD Development platform](https://discord.com/developers/applications/)

:::tip Registered tutorial

Use the robot needs to get the account and Token key of the open platform in order to communicate with the message platform and then send and receive messages.

Here are some commonly used instructions or tutorials for the use of robot open platforms. Please choose according to your needs.

:::

| Robot name               | Link                                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| QQ/QQ-Guild Official Bot | [Official documentation](https://bot.q.qq.com/wiki/)                                                                                |
| WeChat Bot               | [Official documentation](https://hiflow.tencent.com/docs/applications/wwx-robot/)                                                   |
| Telegram Bot             | [Official documentation](https://core.telegram.org/bots)， [Other tutorials](https://telegrambots.github.io/book/1/quickstart.html) |
| Discord Bot              | [Official documentation](https://discord.com/developers/docs/intro)                                                                 |
| kook Bot                 | [Official documentation](https://developer.kookapp.cn/)                                                                             |

## Environmental preparation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
 
  <TabItem value="MacOS" label="MacOS" default>

The system version must be at least MacOS12.

> Older versions of the system are not guaranteed to work successfully.

```bash title="Check git version; will prompt to download common toolkits if not installed"
git --version
```

[Brew Official Website](https://brew.sh/)

```bash title="Doownload Brew"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

```bash title="Add environment variable"
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.bash_profile
```

```bash title="Add environment variable"
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
```

```bash title="Refresh environment variable"
source ~/.bash_profile && source ~/.zshrc
```

> Use [nvm](https://github.com/nvm-sh/nvm) to install and manage Node.js versions, which makes it easier to switch versions for development.

```bash title="Install nvm"
brew install nvm
```

```bash title="Add environment variable for nvm"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.bash_profile
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.bash_profile
```

```bash title="Add environment variable for zshrc"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
# This loads nvm
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
# This loads nvm bash_completion
echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zshrc
```

```bash title="Refresh environment variable"
source ~/.bash_profile && source ~/.zshrc
```

```bash title="Install NodeJS@18.20.3"
nvm install 18.20.3
nvm use 18.20.3
node -v
npm -v
```

  </TabItem>

<TabItem value="Debian" label="Ubuntu/Debian">

> Example system: Ubuntu 24.04 LTS / Debian 12.0 X86 2H2G

```sh titile="Update System"
sudo apt update
sudo apt install wget -y
sudo apt install curl -y
```

```sh title="Install nvm"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

```sh title="Add environment variable for nvm"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc
nvm -v
```

```bash title="Install NodeJS@18.20.3"
nvm install 18.20.3
nvm use 18.20.3
node -v
npm -v
```

```sh title="Install git"
apt install git
```

```sh title="Install chromium"
sudo apt install chromium-browser
```

  </TabItem>

  <TabItem value="Centos" label="Centos">

> Example system: Centos 8.2 X86 2H2G

```sh title="Ensure YUM is up-to-date"
sudo yum update -y
sudo yum install wget -y
sudo yum install curl -y
```

```sh title="Install NVM"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

```sh title="Add environment variable for nvm"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc # 刷新环境
nvm -v # 版本
```

> CentOS 8 and below can't use Node V18,

> please use 16.14.0 instead.

```bash title="Install NodeJS@18.20.3"
nvm install 18.20.3
nvm use 18.20.3
node -v
npm -v
```

```sh title="Install git"
yum install git
```

```sh title="Install Chromium"
yum  install chromium -y
```

  </TabItem>

   <TabItem value="Windows" label="Windows" >
  
Recommended system: `Windows10` | `Windows11`

1. Install a browser: If not using the recommended system, please install [Google Chrome](https://www.google.cn/intl/zh-CN/chrome/) / [Edge](https://www.microsoft.com/zh-cn/edge)

2. Install Node.js： [Node.js@18.20.3](https://nodejs.org/zh-cn)

> It is recommended to use [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases) to manage Node.js versions for easier version switching during development.

> The Node.js version must be greater than 16.14.0 and be an even version.

3. Install Git： [Git Download for Windows](https://git-scm.com/)

> All options must be clicked as default to avoid Git corruption.

  </TabItem>

</Tabs>
