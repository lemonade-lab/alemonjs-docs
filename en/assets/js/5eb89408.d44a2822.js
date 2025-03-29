"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[3088],{8604:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var t=s(4848),i=s(8453);const o={sidebar_position:7},a="\u6269\u5c55",c={id:"alemonjsDocs/open/desktop",title:"\u6269\u5c55",description:"\u5982\u4f55\u5f00\u53d1\u6269\u5c55\u5e76\u63a8\u9001\u5230npmjs",source:"@site/docs/alemonjsDocs/open/8-desktop.md",sourceDirName:"alemonjsDocs/open",slug:"/alemonjsDocs/open/desktop",permalink:"/en/docs/alemonjsDocs/open/desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/open/8-desktop.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5757",permalink:"/en/docs/alemonjsDocs/open/models"},next:{title:"\u81ea\u5b9a\u4e49",permalink:"/en/docs/category/\u81ea\u5b9a\u4e49"}},l={},r=[{value:"\u5982\u4f55\u8bc6\u522b\u7684",id:"\u5982\u4f55\u8bc6\u522b\u7684",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5468\u671f",id:"\u5468\u671f",level:2},{value:"webview",id:"webview",level:2},{value:"\u6e32\u67d3",id:"\u6e32\u67d3",level:3},{value:"\u811a\u672c",id:"\u811a\u672c",level:3},{value:"\u8d44\u6e90\u8def\u5f84",id:"\u8d44\u6e90\u8def\u5f84",level:2},{value:"\u901a\u77e5\u63a8\u9001",id:"\u901a\u77e5\u63a8\u9001",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u6269\u5c55",children:"\u6269\u5c55"})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"\u5982\u4f55\u5f00\u53d1\u6269\u5c55\u5e76\u63a8\u9001\u5230npmjs"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5982\u4f55\u8bc6\u522b\u7684",children:"\u5982\u4f55\u8bc6\u522b\u7684"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",metastring:'title="\u5927\u81f4\u7684\u76ee\u5f55\u7ed3\u6784"',children:"node_modules/                 // Node.js \u4f9d\u8d56\u5305\n \u251c\u2500\u2500 pkg-name                 // \u76f8\u5173\u6a21\u5757\n \u2502      \u251c\u2500\u2500 lib/              // \u5de5\u7a0b\u76ee\u5f55\n \u2502      \u2502    \u251c\u2500\u2500 response/        // \u5e94\u7528\n \u2502      \u2502    \u251c\u2500\u2500 middleware/  // \u4e2d\u95f4\u4ef6\n \u2502      \u2502    \u2514\u2500\u2500 index.js     // \u5165\u53e3\u6587\u4ef6\n \u2502      \u2514\u2500\u2500 package.json      // \u5de5\u7a0b\u914d\u7f6e\u6587\u4ef6\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4f1a\u8bfb\u53d6",(0,t.jsx)(e.code,{children:"node_modules/pkg-name/package.json"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u89e3\u6790\u5e76\u5f97\u5230",(0,t.jsx)(e.code,{children:"main"})]}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u5165\u53e3\u6587\u4ef6\u7684\u76ee\u5f55\u4e3a\u5de5\u7a0b\u76ee\u5f55"}),"\n",(0,t.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  // \u5b98\u65b9 @alemonjs/XXX\n  // \u4e09\u65b9 alemonjs-XXX\n  "name": "@alemonjs/test", // *\n  "version": "0.0.1", // *\n  "author": {\n    "name": "ningmengchongshui",\n    "email": "ningmengchongshui@gmail.com",\n    "url": "https://github.com/ningmengchongshui"\n  },\n  "type": "module", // *\n  "main": "lib/index.js", // *\n  "scripts": {\n    "build": "npx lvy build"\n  },\n  "export": {\n    ".": "./lib/index.js", // *\n    "./package": "./package.json", // *\n    "./desktop": "./lib/desktop.js" // \u53ef\u9009\uff08\u684c\u9762\u6269\u5c55\u5165\u53e3\u811a\u672c)\n  },\n  "keywords": ["alemonjs"], // *\n  "publishConfig": {\n    "registry": "https://registry.npmjs.org", // *\n    "access": "public" // *\n  },\n  "alemonjs": {\n    "desktop": {\n      // \u56fe\u6807\uff08\u53ef\u9009\uff09\n      // \u652f\u6301antd\u56fe\u6807\uff0c\u5982 antd.OpenAIOutlined\n      // https://ant.design/components/icon-cn\n      "logo": "public/logo.png",\n      // \u6307\u4ee4\u8f93\u5165\u6846\n      "commond": [\n        {\n          "name": "test",\n          // \u56fe\u6807\uff08\u53ef\u9009\uff09\u652f\u6301antd\u56fe\u6807\n          "icon": "public/logo.png",\n          "commond": "open.test" // \u53d1\u9001\u6307\u4ee4\n        }\n      ],\n      // \u4fa7\u8fb9\u680f\n      "sidebars": [\n        {\n          // \u65e0\u56fe\u6807\u5219\u663e\u793a\n          "name": "test",\n          // \u56fe\u6807\uff08\u53ef\u9009\uff09 \u652f\u6301antd\u56fe\u6807\n          "icon": "public/logo.png",\n          "commond": "open.test" // \u53d1\u9001\u6307\u4ee4\n        }\n      ],\n      // \u5e73\u53f0\uff08\u62e5\u6709\u6b64\u914d\u7f6e\u5c06\u65e0\u6cd5\u88ab\u6dfb\u52a0\u81f3config.value.apps\uff09\n      "platform": [\n        {\n          "name": "test" // --login test\n        }\n      ]\n    }\n  }\n  // \u8981\u53d1\u5e03\u6a21\u5757\uff0c\u8bf7\u786e\u4fdd\u6ca1\u6709\u4ee5\u4e0b\u5185\u5bb9\u3002\n  // "private": true,\n  // "workspaces": ["packages/*"]\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5468\u671f",children:"\u5468\u671f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="package.js"',children:"// \u88ab\u6fc0\u6d3b\u7684\u65f6\u5019\u3002\nexport const activate = context => {}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"webview",children:"webview"}),"\n",(0,t.jsx)(e.h3,{id:"\u6e32\u67d3",children:"\u6e32\u67d3"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="desktop.js"',children:"import { readFileSync } from 'fs'\nimport { dirname, join } from 'path'\nimport { fileURLToPath } from 'url'\n// \u5f53\u524d\u76ee\u5f55\nconst __dirname = dirname(fileURLToPath(import.meta.url))\nexport const activate = context => {\n  // \u521b\u5efa\u4e00\u4e2a webview\u3002\n  const sidebarWebView = context.createSidebarWebView(context)\n  // \u5f53\u547d\u4ee4\u88ab\u89e6\u53d1\u7684\u65f6\u5019\u3002\n  context.onCommand('open.test', () => {\n    const dir = join(__dirname, 'assets', 'index.html')\n    // \u786e\u4fdd\u8def\u5f84\u5b58\u5728\n    const html = readFileSync(dir, 'utf-8')\n    // \u7acb\u5373\u6e32\u67d3 webview\n    sidebarWebView.loadWebView(html)\n  })\n}\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u63a5\u6536\u6d88\u606f"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="desktop.js"',children:"export const activate = context => {\n  // \u521b\u5efa\u4e00\u4e2a webview\u3002\n  const sidebarWebView = context.createSidebarWebView(context)\n  // \u76d1\u542c webview \u7684\u6d88\u606f\u3002\n  sidebarWebView.onMessage(data => {\n    // { type: 'pong',data: ''}\n  })\n}\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u53d1\u9001\u6d88\u606f"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="desktop.js"',children:"export const activate = context => {\n  // \u521b\u5efa\u4e00\u4e2a webview\u3002\n  const sidebarWebView = context.createSidebarWebView(context)\n  // \u53d1\u9001\u6d88\u606f\u5230webview\u3002\n  sidebarWebView.postMessage({\n    type: 'ping',\n    data: ''\n  })\n}\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4e3b\u9898\u53d8\u91cf"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-css",children:":root {\n  --alemonjs-primary-bg: #3498db;\n  /* \n    \u5185\u7f6e\u4e00\u5957\u4ee5--alemonjs\u5f00\u5934\u7684\u4e3b\u9898\u53d8\u91cf\uff0c\n    \u66f4\u591a\u53d8\u91cf\u8bf7\u5728\u684c\u9762\u7684\u4e3b\u9898\u914d\u7f6e\u4e2d\u67e5\u770b\u3002\n  */\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u811a\u672c",children:"\u811a\u672c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u53d1\u9001\u6d88\u606f"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="index.js"',children:"const API = createDesktopAPI()\n\nAPI.postMessage({\n  type: 'pong',\n  data: ''\n})\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u63a5\u6536\u6d88\u606f"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="index.js"',children:"const API = createDesktopAPI()\n\nAPI.onMessage(data => {\n  //  {  type: 'ping', data: '' }\n})\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u8d44\u6e90\u8def\u5f84",children:"\u8d44\u6e90\u8def\u5f84"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="desktop.js"',children:"import { dirname, join } from 'path'\nimport { fileURLToPath } from 'url'\n// \u5f53\u524d\u76ee\u5f55\nconst __dirname = dirname(fileURLToPath(import.meta.url))\nexport const activate = context => {\n  // \u521b\u5efa webview \u8def\u5f84\n  const styleUri = context.createExtensionDir(join(__dirname, 'assets', 'index.css'))\n  const scriptUri = context.createExtensionDir(join(__dirname, 'assets', 'index.js'))\n  // \u53ef\u66ff\u6362 html \u5185\u90e8\u8d44\u6e90\uff0c\u786e\u4fdd\u6b63\u786e\u52a0\u8f7d\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u901a\u77e5\u63a8\u9001",children:"\u901a\u77e5\u63a8\u9001"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="desktop.js"',children:"export const activate = context => {\n  context.notification('\u6269\u5c55\u52a0\u8f7d')\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>c});var t=s(6540);const i={},o=t.createContext(i);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);