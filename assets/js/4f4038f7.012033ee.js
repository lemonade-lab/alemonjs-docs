"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[3893],{8320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(4848),r=t(8453);const i={title:"V2.0.0-rc.74",description:"\u66f4\u65b0",authors:"ningmengchongshui",tags:["\u66f4\u65b0"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},c="\u66f4\u65b0\u8bb0\u5f55",l={permalink:"/blog/2024/12/24/releases/2.0.0-rc.74",source:"@site/blog/releases/2024/12/24/2.0.0-rc.74.md",title:"V2.0.0-rc.74",description:"\u66f4\u65b0",date:"2024-12-24T00:00:00.000Z",tags:[{inline:!0,label:"\u66f4\u65b0",permalink:"/blog/tags/\u66f4\u65b0"}],readingTime:1.11,hasTruncateMarker:!1,authors:[{namne:"ningmengchongshui",title:"Co-creator of yunzaijs 1",url:"https://github.com/ningmengchongshui",email:"ningmengchongshui@gmail.com",socials:{github:"https://github.com/ningmengchongshui"},imageURL:"https://avatars.githubusercontent.com/u/110824794?v=4",key:"ningmengchongshui",page:null}],frontMatter:{title:"V2.0.0-rc.74",description:"\u66f4\u65b0",authors:"ningmengchongshui",tags:["\u66f4\u65b0"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"V2.0.0-rc.76",permalink:"/blog/2024/12/28/releases/2.0.0-rc.76"},nextItem:{title:"V2.0.0-rc.54",permalink:"/blog/2024/11/18/releases/2.0.0-rc.54"}},o={authorsImageUrls:[void 0]},a=[];function d(e){const n={a:"a",code:"code",img:"img",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Project"}),(0,s.jsx)(n.th,{children:"Status"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/alemonjs/core",children:"alemonjs"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/alemonjs",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/npm/v/alemonjs.svg",alt:"alemonjs-s"})})}),(0,s.jsx)(n.td,{children:"\u673a\u5668\u4eba\u6a21\u5757"})]})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f18\u5316",(0,s.jsx)(n.code,{children:"OnMiddleware"}),"\u5199\u6cd5"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/middleware/**/*/mw.ts"',children:"// OnMiddleware((\u4e8b\u4ef6\u4f53,\u63a7\u5236\u4f53)=>\u6d88\u606f\u4f53,\u6d88\u606f\u7c7b\u578b)\nexport default OnMiddleware((event, next) => {\n  // \u65b0\u589e\u5b57\u6bb5\n  event['user_id'] = event.UserId\n  // \u5e38\u7528\u4e8e\u517c\u5bb9\u5176\u4ed6\u6846\u67b6\u6216\u589e\u5f3aevent\u529f\u80fd\n  next()\n}, 'message.create')\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65b0\u589e ",(0,s.jsx)(n.code,{children:"useMention"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="apps/**/*/res.ts"',children:"import { useMention } from 'alemonjs'\nexport default OnResponse(async (event, next) => {\n  if (!/^(#|\\/)?test$/.test(event.MessageText)) {\n    next()\n    return\n  }\n\n  const Mentions = await useMention(event)\n  if (!Mentions || Mentions.length === 0) {\n    return // @ \u63d0\u53ca\u4e3a\u7a7a\n  }\n\n  // \u67e5\u627e\u7528\u6237\u7c7b\u578b\u7684 @ \u63d0\u53ca\uff0c\u4e14\u4e0d\u662f bot\n  const User = Mentions.find(item => !item.IsBot)\n  if (!User) {\n    return // \u672a\u627e\u5230\u7528\u6237Id\n  }\n\n  console.log('User:', User)\n\n  // \u5904\u7406\u88abAT\u7684\u7528\u6237...\n}, 'message.create')\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7528\u6237\u5934\u50cf\u83b7\u53d6\u65b9\u5f0f\u66f4\u6539\u4e3a\u5f02\u6b65"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const url = await e.UserAvatar.toURL()\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u65b0\u589e",(0,s.jsx)(n.code,{children:"Text style"}),"\u3001",(0,s.jsx)(n.code,{children:"Mention options"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getConfig"})," \u652f\u6301\u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"argv"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onstart"})," \u66f4\u6539\u4e3a ",(0,s.jsx)(n.code,{children:"start"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5220\u9664 ",(0,s.jsx)(n.code,{children:"useParse"}),"\u3001"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5220\u9664 ",(0,s.jsx)(n.code,{children:"MessageBody"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);