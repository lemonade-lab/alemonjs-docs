"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[459],{3274:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(4848),t=r(8453);const o={sidebar_position:3},a="\u63a5\u53e3",i={id:"alemonjsDocs/basic/hook",title:"\u63a5\u53e3",description:"\u5728\u7279\u5b9a\u4e8b\u4ef6\u6216\u72b6\u6001\u4e0b\u8c03\u7528\uff0c\u5728\u7279\u5b9a\u7684\u4e8b\u4ef6\u4e2d\u6269\u5c55\u3002",source:"@site/docs/alemonjsDocs/basic/3-hook.md",sourceDirName:"alemonjsDocs/basic",slug:"/alemonjsDocs/basic/hook",permalink:"/docs/alemonjsDocs/basic/hook",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/basic/3-hook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u54cd\u5e94",permalink:"/docs/alemonjsDocs/basic/api"},next:{title:"\u4e2d\u95f4\u4ef6",permalink:"/docs/alemonjsDocs/basic/mw"}},c={},l=[{value:"<code>useSend</code>",id:"usesend",level:2},{value:"Text",id:"text",level:3},{value:"Image",id:"image",level:3},{value:"Mention",id:"mention",level:3},{value:"<code>useMention</code>",id:"usemention",level:2},{value:"<code>useObserver</code>",id:"useobserver",level:2},{value:"<code>useSubscribe</code>",id:"usesubscribe",level:2},{value:"<code>useState</code>",id:"usestate",level:2}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5728\u7279\u5b9a\u4e8b\u4ef6\u6216\u72b6\u6001\u4e0b\u8c03\u7528\uff0c\u5728\u7279\u5b9a\u7684\u4e8b\u4ef6\u4e2d\u6269\u5c55\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"usesend",children:(0,s.jsx)(n.code,{children:"useSend"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5141\u8bb8\u5f00\u53d1\u8005\u5728\u54cd\u5e94\u7279\u5b9a\u4e8b\u4ef6\uff08\u5982\u63a5\u6536\u5230\u6d88\u606f\uff09\u65f6\uff0c\u53d1\u9001\u6d88\u606f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u83b7\u53d6\u901a\u5e38\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u4e8b\u4ef6\u5904\u7406\u4e0a\u4e0b\u6587\u4e2d\u8fdb\u884c\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"text",children:"Text"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/apps/**/*/res.ts"',children:"import { Text, useSend } from 'alemonjs'\r\nexport default OnResponse((event, next) => {\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n\r\n  Send(Text('\u8fd9\u4e2a'), Text('\u6807\u9898', { style: 'bold' }), Text('\u88ab\u52a0\u7c97\u4e86'))\r\n\r\n  Send(Text('\u8fd9\u4e2a'), Text('\u6807\u9898'), Text('\u6ca1\u6709\u53d8\u5316'))\r\n\r\n  Send(\r\n    Text(\r\n      [\r\n        `const Send = useSend(event)`,\r\n        `Send(Text('\u8fd9\u4e2a'), Text('\u6807\u9898', { style: 'bold' }), Text('\u88ab\u52a0\u7c97\u4e86'))`,\r\n        `Send(Text('\u8fd9\u4e2a'), Text('\u6807\u9898'), Text('\u6ca1\u6709\u53d8\u5316'))`\r\n      ].join('\\n'),\r\n      {\r\n        style: 'block'\r\n      }\r\n    )\r\n  )\r\n}, 'message.create')\n"})}),"\n",(0,s.jsx)(n.h3,{id:"image",children:"Image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/apps/**/*/res.ts"',children:"import { useSend, Text, Image } from 'alemonjs'\r\nimport { readFileSync } from 'fs'\r\nimport url from '@src/assets/test.jpeg'\r\nexport default OnResponse((event, next) => {\r\n  const Send = useSend(event)\r\n  // \u53d1\u9001\u672c\u5730\u56fe\u7247\u6587\u4ef6\r\n  const img = readFileSync(url)\r\n  if (img) {\r\n    // Send(Image(img), Image(img))\r\n    Send(Image(img))\r\n  } else {\r\n    Send(Text('\u56fe\u7247\u4e0d\u5b58\u5728'))\r\n  }\r\n}, 'message.create')\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mention",children:"Mention"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { useSend, Text, Mention } from 'alemonjs'\r\nexport default OnResponse((event, next) => {\r\n  const Send = useSend(event)\r\n\r\n  // \u53d1\u9001\u591a\u79cd\u7c7b\u578b\u7684\u6d88\u606f\r\n  Send(Text('Hello '), Mention(event.UserId), Text(', How are things going?'))\r\n\r\n  // @ \u6240\u6709\u4eba\r\n  // Send(Mention())\r\n\r\n  // @ channel\r\n  // Send(Mention(event.ChannelId, { belong: 'channel' }))\r\n}, 'message.create')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usemention",children:(0,s.jsx)(n.code,{children:"useMention"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u89e3\u6790\u5f97\u5230\u88ab\u63d0\u53ca\u7684\u6570\u636e"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { useMention } from 'alemonjs'\r\n\r\nconst useMentionsUserId = async event => {\r\n  const Mentions = await useMention(event)\r\n  if (!Mentions || Mentions.length === 0) {\r\n    return // @ \u63d0\u53ca\u4e3a\u7a7a\r\n  }\r\n  // \u67e5\u627e\u7528\u6237\u7c7b\u578b\u7684 @ \u63d0\u53ca\uff0c\u4e14\u4e0d\u662f bot\r\n  const User = Mentions.find(item => !item.IsBot)\r\n  if (!User) {\r\n    return // \u672a\u627e\u5230\u7528\u6237Id\r\n  }\r\n  return User\r\n}\r\n\r\nexport default OnResponse(async (event, next) => {\r\n  // \u83b7\u5f97User\r\n  const User = await useMentionsUserId(event)\r\n\r\n  console.log('User:', User)\r\n\r\n  // \u5904\u7406\u88abAT\u7684\u7528\u6237...\r\n}, 'message.create')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"useobserver",children:(0,s.jsx)(n.code,{children:"useObserver"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u76d1\u542c\u5e76\u54cd\u5e94\u67d0\u4e2a\u4e8b\u4ef6\u3002\u89c2\u5bdf\u4e8b\u4ef6\u793a\u4f8b"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0d\u63a8\u8350\u5728\u4e2d\u95f4\u4ef6\u89e6\u53d1\u540e\u4f7f\u7528,\u5177\u4f53\u4e86\u89e3\u4e0b\u4e00\u7ae0\u8282\u7684\u4e2d\u95f4\u4ef6\u673a\u5236"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { Text, useObserver, useSend } from 'alemonjs'\r\n\r\nconst Res = OnResponse((event, next) => {\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n  // \u83b7\u53d6\u6587\u672c\r\n  const text = event.MessageText\r\n  // \u68c0\u67e5\r\n  if (text === '123456') {\r\n    Send(Text('\u5bc6\u7801\u6b63\u786e'))\r\n    // \u7ed3\u675f\r\n  } else if (text == '/close') {\r\n    // \u7ed3\u675f\r\n    Send(Text('\u53d6\u6d88\u767b\u5f55'))\r\n  } else {\r\n    Send(Text('\u5bc6\u7801\u4e0d\u6b63\u786e'))\r\n    // \u7ee7\u7eed\u76d1\u542c\r\n    next()\r\n  }\r\n}, 'message.create')\r\n\r\nexport default OnResponse((event, next) => {\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n  Send(Text('\u8bf7\u8f93\u5165\u5bc6\u7801'))\r\n\r\n  // \u521b\u5efa\u89c2\u5bdf\u8005\r\n  const Observer = useObserver(event, 'message.create')\r\n  Observer(Res.current, [\r\n    // \u89c2\u5bdf\u6761\u4ef6\uff0c\u5f53\u524d\u7528\u6237\r\n    'UserId'\r\n    // \u53ef\u65b0\u589e\uff0c\u5982\uff1a\u5f53\u524d\u6240\u5728\u9891\u9053\u7684\u7528\u6237\uff0c\u6216\u8005\u5f53\u524d\u9891\u9053\u4e0b\u7684\u5f53\u524d\u7528\u6237\r\n  ])\r\n}, 'message.create')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usesubscribe",children:(0,s.jsx)(n.code,{children:"useSubscribe"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8ba2\u9605\u6a21\u5f0f\uff0c\u5728\u67d0\u4e2a\u4e8b\u4ef6\u5468\u671f\u4e2d\u8fdb\u884c\u89c2\u5bdf"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// [\u4e8b\u4ef6\u521b\u5efa\u4e4b\u540e\uff0c\u4e8b\u4ef6\u88ab\u4e2d\u95f4\u4ef6\u5904\u7406\u4e4b\u540e\uff0c\u4e8b\u4ef6\u88ab\u5904\u7406\u5b8c\u6210\u4e4b\u540e,]\r\nconst [create, monut, unmonut] = useSubscribe(event, <select event type>)\r\ncreate(Res.current, [])\r\n// \u7b49\u540c\u4e8e Observer \uff0c\u5b83\u6b63\u662f SubscribeMount \u7684\u7b80\u5199\r\nmonut(Res.current, [])\r\nunmonut(Res.current, [])\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { Text, useSubscribe, useSend } from 'alemonjs'\r\n\r\nconst CodeRes = OnResponse(async (e, next) => {\r\n  if (!/^(\\/|#)?code\\d{6}$/.test(e.MessageText)) {\r\n    next()\r\n    return\r\n  }\r\n\r\n  // \u5c1d\u8bd5\u8bfb\u53d6\u51facode\r\n  const match = e.MessageText.match(/\\d+/g)\r\n  const code = match ? match[0] : null\r\n  if (!code) {\r\n    next()\r\n    return\r\n  }\r\n\r\n  const email = await Email.getEmail(e.UserKey, code)\r\n\r\n  if (!email) {\r\n    Send(Text('\u9a8c\u8bc1\u7801\u9519\u8bef'))\r\n    next()\r\n    return\r\n  }\r\n\r\n  Email.delEmail(e.UserKey, code)\r\n\r\n  // \u5148\u5efa\u7acb\u7d22\u5f15\r\n  await user_email.create({\r\n    email: email,\r\n    uid: e.UserKey\r\n  } as any)\r\n\r\n  // \u67e5\u770b\u8be5\u90ae\u7bb1\u662f\u5426\u6ce8\u518c\u6e38\u620f\u4fe1\u606f\u3002\u6ca1\u6709\u5219\u521b\u5efa\u3002\r\n\r\n  const data = await user.findOneValue({\r\n    where: {\r\n      uid: email\r\n    }\r\n  })\r\n\r\n  if (!data) {\r\n    // \u5f00\u59cb\u521b\u5efa\u5b58\u6863\r\n    createPlayer(email)\r\n  }\r\n\r\n  // \u53d1\u9001\u6d88\u606f\r\n  Send(Text('\u767b\u5f55\u6210\u529f'))\r\n\r\n  //\r\n}, 'message.create')\r\n\r\nconst EmailRes = OnResponse(\r\n  async (e, next) => {\r\n    // \u6bcf\u6b21\u6765\u7684\u65f6\u5019\u3002\u53ea\u5141\u8bb8\u8be5\u64cd\u4f5c\u53ef\u8fdb\u884c\u540e\u7eed\u3002\r\n    if (!/^(\\/|#)?login[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}.*$/.test(e.MessageText)) {\r\n      next()\r\n      return\r\n    }\r\n\r\n    // \u5f97\u5230\u90ae\u7bb1\r\n    const email = e.MessageText.replace(/^(\\/|#)?login/, '')\r\n\r\n    // \u521b\u5efa\u9a8c\u8bc1\u7801\r\n    Email.createEmail(e.UserKey, email)\r\n\r\n    Send(Text('\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\u81f3\u90ae\u7bb1\uff0c\u8bf7\u67e5\u6536\u540e\u56de\u590d[/codeXXXXX]'))\r\n\r\n    // \u5f00\u59cb\u65b0\u7684\u8be2\u95ee\u3002\r\n    const [Subscribe] = useSubscribe(e, 'message.create')\r\n    Subscribe(CodeRes.current, ['UserId'])\r\n  },\r\n  ['message.create']\r\n)\r\n\r\nexport default OnMiddleware((event, next) => {\r\n  // \u6839\u636e\r\n  const email = getUserEmail(e.User_key)\r\n\r\n  // \u5df2\u767b\u5f55\u8d26\u53f7\r\n  if (email) {\r\n    next()\r\n    return\r\n  }\r\n\r\n  // \u521b\u5efa\r\n  const Send = useSend(event)\r\n  Send(Text('\u8bf7\u53d1\u9001[/login+email]\u4ee5\u767b\u5f55\u8d26\u6237'))\r\n\r\n  // \u6ca1\u6709\u67e5\u8be2\u5230\u7528\u6237\u90ae\u7bb1\u3002\u9700\u8981\u63d0\u793a\u7528\u6237\u8fdb\u884c\u90ae\u7bb1\u7ed1\u5b9a\u3002\r\n  const [subscribe] = useSubscribe(e, 'message.create')\r\n  subscribe(LoginRes.current, ['UserId'])\r\n}, 'message.create')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usestate",children:(0,s.jsx)(n.code,{children:"useState"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u58f0\u660eres/mw\u7684\u72b6\u6001,\u53ef\u7528\u4e8e\u7ba1\u7406\u662f\u5426\u542f\u7528"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"export name = 'login'  // \u6807\u8bb0res\u540d\r\nexport const regular = /^(#|\\/)?login$/\r\nexport default OnResponse((event, next) => {\r\n  // login code ...\r\n}, 'message.create')\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { Text, useSend, useState } from 'alemonjs'\r\nexport const regular = /^(#|\\/)?close:/\r\nexport default OnResponse((event, next) => {\r\n  //   /close:login\r\n  const name = event.MessageText.replace(regular, '')\r\n  const [state, setState] = useState(name)\r\n  if (state) {\r\n    next()\r\n    return\r\n  }\r\n  setState(false)\r\n  const Send = useSend(event)\r\n  Send(Text('\u5173\u95ed\u6210\u529f'))\r\n  return\r\n}, 'message.create')\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u4efb\u610f\u5730\u65b9\u8ba2\u9605\u72b6\u6001\u7684\u66f4\u6539\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { eventState, unEventState } from 'alemonjs'\r\n\r\nconst login = state => {}\r\n\r\neventState('login', login)\r\nunEventState('login', login)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);