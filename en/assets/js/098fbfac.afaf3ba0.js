"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[3976],{7166:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var s=o(4848),a=o(8453);const t={sidebar_position:6},c="\u914d\u7f6e",r={id:"alemonjsDocs/advance/config",title:"\u914d\u7f6e",description:"\u8bfb\u53d6\u6846\u67b6\u914d\u7f6e",source:"@site/docs/alemonjsDocs/advance/6-config.md",sourceDirName:"alemonjsDocs/advance",slug:"/alemonjsDocs/advance/config",permalink:"/en/docs/alemonjsDocs/advance/config",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/advance/6-config.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/en/docs/alemonjsDocs/advance/message-type"},next:{title:"\u9ad8\u9636",permalink:"/en/docs/category/\u9ad8\u9636"}},i={},l=[];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"\u8bfb\u53d6\u6846\u67b6\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:'title="alemon.config.yaml"',children:"gui:\r\n  port: 17127\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="src/index.ts"',children:"import { getConfigValue } from 'alemonjs'\r\nconst value = getConfigValue()\r\nconsole.log('port', value.gui.port) // port 17127\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u66f4\u591a\u8c03\u7528"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",metastring:'title="src/index.ts"',children:"import { getConfig, getConfigValue } from 'alemonjs'\r\nconst value = getConfigValue()\r\nconsole.log('alemon.config.yaml', value)\r\n\r\n// \u914d\u7f6e\u7c7b\r\nconst config = getConfig()\r\n// \u5305\u4fe1\u606f\r\nconsole.log('alemonjs/package.json', config.package)\r\n// \u73af\u5883\u53c2\u6570\r\nconsole.log('alemonjs process.argv', config.argv)\r\n// \u81ea\u5b9a\u4e49\u914d\u7f6e\r\nconsole.log('alemon.config.yaml', config.value)\r\n\r\n// \u4fee\u6539\u5e76\u4fdd\u5b58\u4e3a\u65b0\u914d\u7f6e\r\nconst val = config.value\r\nval.apps.push('@alemonjs/db')\r\nconfig.saveValue(val)\n"})})]})}function m(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>r});var s=o(6540);const a={},t=s.createContext(a);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);