"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[1355],{4379:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(4848),s=t(8453);const r={sidebar_position:3},a="\u5e73\u53f0",i={id:"alemonjsDocs/sdk/platforms",title:"\u5e73\u53f0",description:"\u5bf9\u63a5\u4efb\u610f\u5f00\u653e\u5e73\u53f0\u548c\u6846\u67b6",source:"@site/docs/alemonjsDocs/sdk/3-platforms.md",sourceDirName:"alemonjsDocs/sdk",slug:"/alemonjsDocs/sdk/platforms",permalink:"/docs/alemonjsDocs/sdk/platforms",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/sdk/3-platforms.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49",permalink:"/docs/category/\u81ea\u5b9a\u4e49"},next:{title:"\u767b\u5f55\u8d26\u6237",permalink:"/docs/environment"}},l={},c=[{value:"\u5bfc\u51fa",id:"\u5bfc\u51fa",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u5e73\u53f0",children:"\u5e73\u53f0"})}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"\u5bf9\u63a5\u4efb\u610f\u5f00\u653e\u5e73\u53f0\u548c\u6846\u67b6"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5bfc\u51fa",children:"\u5bfc\u51fa"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:'title="src/index.ts"',children:"import { definePlatform } from 'alemonjs'\nimport { getConfigValue, User } from 'alemonjs'\n\nexport const platform = 'bot-name'\nexport type Client = {}\nexport const client = {}\n\nexport default definePlatform(() => {\n  // \u5f97\u5230\u81ea\u5b9a\u4e49\u914d\u7f6e\n  const value = getConfigValue()\n  const botName = value[platform]\n\n  // \u521b\u5efa\u5b9e\u4f8b\u540e\u3002\n\n  // \u8fd4\u56de\u5176\u63a5\u53e3\u8bbe\u8ba1\u3002\n\n  // \u8fd4\u56de\u5904\u7406\u6807\u51c6\u5bf9\u8c61\n  return {\n    // \u63a5\u53e3\n    api: {\n      // useSend()\n      use: {\n        send: (e, data) => {\n          // \u6570\u636e\u5305 data\n          if (data.length < 0) return Promise.all([])\n          const event = e.value\n          console.log('event', event)\n          return Promise.all([])\n        },\n        // useMention\n        mention: async event => {\n          const Mentions: User[] = []\n          return Mentions\n        }\n      }\n    }\n  }\n})\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function a(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);