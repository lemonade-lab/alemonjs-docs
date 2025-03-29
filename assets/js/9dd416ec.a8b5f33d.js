"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[605],{8667:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=s(4848),t=s(8453);const o={sidebar_position:2},c="\u63a5\u53e3",l={id:"alemonjsDocs/basic/hook",title:"\u63a5\u53e3",description:"\u6355\u83b7\u4e8b\u4ef6\u540e\u53ef\u8fdb\u884c\u7684",source:"@site/docs/alemonjsDocs/basic/2-hook.md",sourceDirName:"alemonjsDocs/basic",slug:"/alemonjsDocs/basic/hook",permalink:"/docs/alemonjsDocs/basic/hook",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/basic/2-hook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u54cd\u5e94",permalink:"/docs/alemonjsDocs/basic/api"},next:{title:"\u6d88\u606f\u683c\u5f0f",permalink:"/docs/alemonjsDocs/basic/data-type"}},a={},i=[{value:"<code>useSend</code>",id:"usesend",level:2},{value:"<code>useMention</code>",id:"usemention",level:2},{value:"<code>useObserver</code>",id:"useobserver",level:2},{value:"<code>useSubscribe</code>",id:"usesubscribe",level:2},{value:"<code>useState</code>",id:"usestate",level:2}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u6355\u83b7\u4e8b\u4ef6\u540e\u53ef\u8fdb\u884c\u7684"})}),"\n",(0,r.jsx)(n.h2,{id:"usesend",children:(0,r.jsx)(n.code,{children:"useSend"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u54cd\u5e94\u4e8b\u4ef6\uff08\u5982\u6d88\u606f\u88ab\u521b\u5efa\uff09\u65f6\uff0c\u53d1\u9001\u6d88\u606f\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="src/response/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\nimport { Text, useSend } from 'alemonjs'\r\nexport const selects = createSelects(['message.create'])\r\nexport default onResponse(selects, (event, next) => {\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n  Send(Text('hello word !'))\r\n})\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="src/response/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\nimport { Text } from 'alemonjs'\r\nexport const selects = createSelects(['message.create'])\r\nexport default onResponse(selects, () => {\r\n  return {\r\n    // \u5373\u5c06\u8981\u53d1\u9001\u7684\u6570\u636e\uff0c\u7b49\u540c\u4e8e useSend(event)(...)\r\n    data: [Text('hello word !')]\r\n  }\r\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usemention",children:(0,r.jsx)(n.code,{children:"useMention"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u89e3\u6790\u5f97\u5230\u88ab\u63d0\u53ca\u7684\u6570\u636e"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="response/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\nimport { useMention } from 'alemonjs'\r\nexport const selects = createSelects(['message.create'])\r\nexport default onResponse(selects, async (event, next) => {\r\n  const [mention] = useMention(event)\r\n  // \u67e5\u627e\u7528\u6237\u7c7b\u578b\u7684 @ \u63d0\u53ca\uff0c\u4e14\u4e0d\u662f bot\r\n  const User = await mention.findOne()\r\n  if (!User) {\r\n    return // \u672a\u627e\u5230\u7528\u6237Id\r\n  }\r\n\r\n  console.log('User:', User)\r\n\r\n  // \u5904\u7406\u88abAT\u7684\u7528\u6237...\r\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"useobserver",children:(0,r.jsx)(n.code,{children:"useObserver"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u76d1\u542c\u5e76\u54cd\u5e94\u67d0\u4e2a\u4e8b\u4ef6\u3002\u89c2\u5bdf\u4e8b\u4ef6\u793a\u4f8b"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0d\u63a8\u8350\u5728\u4e2d\u95f4\u4ef6\u89e6\u53d1\u540e\u4f7f\u7528,\u5177\u4f53\u4e86\u89e3\u4e0b\u4e00\u7ae0\u8282\u7684\u4e2d\u95f4\u4ef6\u673a\u5236"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="response/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\nimport { Text, useObserver, useSend } from 'alemonjs'\r\nexport const selects = createSelects(['message.create'])\r\n\r\nconst response = onResponse(selects, (event, next) => {\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n  // \u83b7\u53d6\u6587\u672c\r\n  const text = event.MessageText\r\n  // \u68c0\u67e5\r\n  if (text === '123456') {\r\n    Send(Text('\u5bc6\u7801\u6b63\u786e'))\r\n    // \u7ed3\u675f\r\n  } else if (text == '/close') {\r\n    // \u7ed3\u675f\r\n    Send(Text('\u53d6\u6d88\u767b\u5f55'))\r\n  } else {\r\n    Send(Text('\u5bc6\u7801\u4e0d\u6b63\u786e'))\r\n    // \u7ee7\u7eed\u76d1\u542c\r\n    next()\r\n  }\r\n})\r\n\r\nexport default onResponse(selects, (event, next) => {\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n  Send(Text('\u8bf7\u8f93\u5165\u5bc6\u7801'))\r\n\r\n  // \u521b\u5efa\u89c2\u5bdf\u8005\r\n  const Observer = useObserver(event, selects)\r\n  Observer(response.current, [\r\n    // \u89c2\u5bdf\u6761\u4ef6\uff0c\u5f53\u524d\u7528\u6237\r\n    'UserId'\r\n    // \u53ef\u65b0\u589e\uff0c\u5982\uff1a\u5f53\u524d\u6240\u5728\u9891\u9053\u7684\u7528\u6237\uff0c\u6216\u8005\u5f53\u524d\u9891\u9053\u4e0b\u7684\u5f53\u524d\u7528\u6237\r\n  ])\r\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usesubscribe",children:(0,r.jsx)(n.code,{children:"useSubscribe"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8ba2\u9605\u6a21\u5f0f\uff0c\u5728\u67d0\u4e2a\u4e8b\u4ef6\u5468\u671f\u4e2d\u8fdb\u884c\u89c2\u5bdf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="response/**/*/res.ts"',children:"// [\u521b\u5efa\u4e4b\u540e\uff0c\u54cd\u5e94\u4e4b\u524d\uff0c\u54cd\u5e94\u4e4b\u540e]\r\nconst [create, monut, unmonut] = useSubscribe(event, <select event type>)\r\ncreate(Res.current, [])\r\nmonut(Res.current, []) // \u540cObserver(SubscribeMount)\r\nunmonut(Res.current, [])\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="./login.ts"',children:"import { createSelects } from 'alemonjs'\r\nimport { Text, useSubscribe, useSend } from 'alemonjs'\r\nexport const selects = createSelects(['message.create'])\r\nexport default onResponse(selects, async (event, next) => {\r\n  // \u68c0\u9a8c \u5e76\u5b58\u50a8\u5173\u7cfb\u6620\u5c04\r\n})\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="middleware/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\nimport { Text, useSubscribe, useSend } from 'alemonjs'\r\nimport LoginRes from './login'\r\nexport const selects = createSelects(['message.create'])\r\n// \u4e2d\u95f4\u4ef6\uff0c\u5728\u6240\u6709apps\u54cd\u5e94\u4e4b\u524d\u3002\r\nexport default onMiddleware(selects, (event, next) => {\r\n  // \u975e\u7ea6\u5b9a\u524d\u7f00\r\n  if (!/^#xx/.test(event.MessageText)) {\r\n    next()\r\n    return\r\n  }\r\n\r\n  // \u4e0d\u662f\r\n  if (!/^xx login/.test()) {\r\n    // \u6839\u636euserid/userkey\u8bf7\u6c42\u83b7\u5f97email\r\n    const email = ''\r\n    if (!email) {\r\n      next()\r\n      return\r\n    }\r\n    // \u62e5\u6709\u6570\u636e\uff0c\u643a\u5e26\u5b57\u6bb5\r\n    event['xx_emeil'] = email\r\n    next()\r\n    return\r\n  }\r\n\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n  Send(Text('\u8bf7\u8f93\u5165 #xx email,password '))\r\n\r\n  // \u5728\u4e2d\u95f4\u4ef6\u54cd\u5e94\u4e4b\u524d\uff0c\u89c2\u5bdf\u8be5\u7528\u6237\r\n  const [subscribe] = useSubscribe(e, 'message.create')\r\n  subscribe(LoginRes.current, ['UserId'])\r\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usestate",children:(0,r.jsx)(n.code,{children:"useState"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u58f0\u660eres/mw\u7684\u72b6\u6001,\u53ef\u7528\u4e8e\u7ba1\u7406\u662f\u5426\u542f\u7528"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u547d\u540d\u89c4\u5219 \u5b50\u5e94\u7528\u540d:response:\u6587\u4ef6\u59391:\u6587\u4ef6\u59392..."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u9ed8\u8ba4main\u4e3a\uff1a main:response",":login"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u54cd\u5e94\u6587\u4ef6\u5939\u7531",(0,r.jsx)(n.code,{children:"apps\uff08\u65e7\u7248\u672c\uff09"}),"\u547d\u540d\u4e3a",(0,r.jsx)(n.code,{children:"response"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="response/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\nimport { Text, useSend, useState } from 'alemonjs'\r\nexport const regular = /^(#|\\/)?close:/\r\nexport const selects = createSelects(['message.create'])\r\nexport default onResponse(selects, (event, next) => {\r\n  //   /close:login\r\n  const name = event.MessageText.replace(regular, '')\r\n  const [state, setState] = useState(name)\r\n  if (state) {\r\n    next()\r\n    return\r\n  }\r\n  setState(false)\r\n  const Send = useSend(event)\r\n  Send(Text('\u5173\u95ed\u6210\u529f'))\r\n  return\r\n})\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u4efb\u610f\u5730\u65b9\u8ba2\u9605\u72b6\u6001\u7684\u66f4\u6539\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="response/**/*/res.ts"',children:"import { onState, unState } from 'alemonjs'\r\nonState('main:response:login', state => {\r\n  //\r\n})\r\nunState('main:response:login')\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var r=s(6540);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);