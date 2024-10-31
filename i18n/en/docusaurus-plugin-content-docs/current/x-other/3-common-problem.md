---
sidebar_position: 3
---

# Common Questions

:::tip Tip

Encourage developers to provide more solutions. To edit this article, please click "Edit this page" at the bottom.

:::

## Github

If you often cannot access github.com, a common solution in Windows is to modify the hosts file.

Open CMD with administrator privileges.

- Switch to the directory

```sh
cd C:\Windows\System32\drivers\etc
```

- Append content

Replace `0.0.0.1` with the IP address resolved for github.com.

Use a search engine to find the resolution tool.

```sh
echo "0.0.0.1 github.com" >> hosts
```

## Memory

:::tip User Tip

The V8 engine automatically adjusts the heap memory size based on available system memory and other factors. On 32-bit systems, the default heap memory limit for the V8 engine is usually between 700MB and 1.4GB. On 64-bit systems, the default heap memory limit for the V8 engine is generally higher, usually between 1.4GB and 1.8GB.

:::

- Customize the heap memory size

> Here, 4096 means allocating 4GB of heap memory.

```sh
node --max-old-space-size=4096 src/main.js
```

- View the current heap memory limit

```sh
node -e "console.log(v8.getHeapStatistics().heap_size_limit / 1024 / 1024)"
```

## AllOS

### Headless Browser

:::tip User Tip

`puppeteer` requires a minimum Node version of `Node.js V16.14.0`

:::

If you encounter related exceptions, please check whether the Node version meets expectations.

If you cannot find a browser for ARM architecture, please try using command-line verification to see if you have a browser installed, or configure the browser path.

- If there is no browser path prompt and screenshots do not respond

You need to modify `.puppeteerrc.cjs`

```js
const cfg = require('react-puppeteer/.puppeteerrc')

// Input the absolute path of the browser
cfg.executablePath = ''

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = cfg
```

### "CXXABI_1.3.8" not found

Download [libstdc++.so.6.0.29.zip](https://baiyin1314.lanzouq.com/i8Nr21ig8hyf) nd place the extracted file in /usr/lib64/.

```sh
cd /usr/lib64/
```

```sh
sudo mv libstdc++.so.6 libstdc++.so.6.bak
```

```sh
sudo ln -s libstdc++.so.6.0.29 libstdc++.so.6
```

## Centos

### Dependency Libraries

```sh
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
yum install libdrm libgbm libxshmfence -y
yum install nss -y
yum update nss -y
```

### Font Garbled

```sh
yum groupinstall fonts -y
```

## Ubuntu/Debian

### Font Garbled

```sh
apt install -y --force-yes --no-install-recommends fonts-wqy-microhei
```

### Community Answers

[打开 Issues](https://github.com/lemonade-lab/alemonjs/issues)

### Group Chat Feedback

AlemonJS Group Chat：806943302
