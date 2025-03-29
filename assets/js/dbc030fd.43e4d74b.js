"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[9947],{2697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(4848),a=t(8453);const o={sidebar_position:5},r="\u4e8b\u4ef6",c={id:"alemonjsDocs/advance/message-type",title:"\u4e8b\u4ef6",description:"",source:"@site/docs/alemonjsDocs/advance/5-message-type.md",sourceDirName:"alemonjsDocs/advance",slug:"/alemonjsDocs/advance/message-type",permalink:"/docs/alemonjsDocs/advance/message-type",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/advance/5-message-type.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u8fdb\u9636",permalink:"/docs/category/\u8fdb\u9636"},next:{title:"\u914d\u7f6e",permalink:"/docs/alemonjsDocs/advance/config"}},i={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// \u643a\u5e26\u6709\u6d88\u606f\u4f53\u7684\nexport type AEventsMsg = {\n  // \u516c\u6709\u4e8b\u4ef6-\u6d88\u606f\u521b\u5efa\n  'message.create': PublicEventMessageCreate\n  // \u79c1\u6709\u4e8b\u4ef6-\u6d88\u606f\u521b\u5efa\n  'private.message.create': PrivateEventMessageCreate\n}\n\n//\nexport type AEvents = {\n  // \u6d88\u606f\u66f4\u65b0\uff08\u91cd\u7f16\u8f91\uff09\n  'message.update': PublicEventMessageUpdate\n  // \u6d88\u606f\u5220\u9664\uff08\u64a4\u56de\uff09\n  'message.delete': PublicEventMessageDelete\n  // \u6d88\u606f\u8868\u6001 \u6dfb\u52a0\n  'message.reaction.add': PublicEventMessageReactionAdd\n  // \u6d88\u606f\u8868\u6001 \u79fb\u9664\n  'message.reaction.remove': PublicEventMessageReactionRemove\n  // \u516c\u6709\u4e8b\u4ef6 - \u9891\u9053\u6210\u5458\u6dfb\u52a0\n  'member.add': PublicEventMemberAdd\n  // \u516c\u6709\u4e8b\u4ef6 - \u9891\u9053\u6210\u5458\u79fb\u9664\uff08\u9000\u51fa\uff09\n  'member.remove': PublicEventMemberRemove\n  // \u5b50\u9891\u9053\u521b\u5efa\n  'channal.create': PublicEventChannalCreate\n  // \u5b50\u9891\u9053\u5220\u9664\n  'channal.delete': PublicEventChannalDelete\n  // \u516c\u6709\u4e8b\u4ef6 - \u9891\u9053\u52a0\u5165\n  'guild.join': PublicEventGuildJoin\n  // \u516c\u6709\u4e8b\u4ef6 - \u9891\u9053\u9000\u51fa\n  'guild.exit': PublicEventGuildExit\n  // \u79c1\u6709\u4e8b\u4ef6 - \u6d88\u606f\u66f4\u65b0\n  'private.message.update': PrivateEventMessageUpdate\n  // \u79c1\u6709\u4e8b\u4ef6 - \u6d88\u606f\u5220\u9664\uff08\u64a4\u56de\uff09\n  'private.message.delete': PrivateEventMessageDelete\n  // \u79c1\u6709\u4e8b\u4ef6 - \u670b\u53cb\u6dfb\u52a0\u8bf7\u6c42\n  'private.friend.add': PrivateEventRequestFriendAdd\n  // \u79c1\u6709\u4e8b\u4ef6 - \u9891\u9053\u6dfb\u52a0\u8bf7\u6c42\n  'private.guild.add': PrivateEventRequestGuildAdd\n} & AEventsMsg\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);