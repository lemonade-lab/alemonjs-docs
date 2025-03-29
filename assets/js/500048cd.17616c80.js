"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[4225],{2227:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=r(4848),s=r(8453);r(1470),r(9365);const o={sidebar_position:1},a="\u54cd\u5e94",l={id:"alemonjsDocs/basic/api",title:"\u54cd\u5e94",description:"\u5b9a\u4e49\u54cd\u5e94\u51fd\u6570",source:"@site/docs/alemonjsDocs/basic/1-api.md",sourceDirName:"alemonjsDocs/basic",slug:"/alemonjsDocs/basic/api",permalink:"/docs/alemonjsDocs/basic/api",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/alemonjsDocs/basic/1-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/category/\u57fa\u7840"},next:{title:"\u63a5\u53e3",permalink:"/docs/alemonjsDocs/basic/hook"}},c={},i=[{value:"<code>onResponse</code>",id:"onresponse",level:2},{value:"\u5339\u914d",id:"\u5339\u914d",level:3},{value:"\u5206\u7ec4",id:"\u5206\u7ec4",level:3},{value:"\u8c03\u7528",id:"\u8c03\u7528",level:3}];function u(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u54cd\u5e94",children:"\u54cd\u5e94"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u5b9a\u4e49\u54cd\u5e94\u51fd\u6570"})}),"\n","\n",(0,t.jsx)(n.h2,{id:"onresponse",children:(0,t.jsx)(n.code,{children:"onResponse"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u5b9a\u4e49\u54cd\u5e94\u51fd\u6570\u6765\u63cf\u8ff0\u4e0d\u540c\u7c7b\u578b\u7684\u4e8b\u4ef6\u5c06\u8981\u6267\u884c\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/response/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\n// \u9009\u62e9\u4e8b\u4ef6\u7c7b\u578b\r\nexport const selects = createSelects(['message.create'])\r\n// \u5b9a\u4e49\u54cd\u5e94\u51fd\u6570\r\nexport default onResponse(selects, (event, next) => {\r\n  // \u524d\u5f80\u4e0b\u4e00\u4e2a\u54cd\u5e94,\u4e0d\u6267\u884c\u5219\u54cd\u5e94\u5230\u6b64\u5904\u540e\uff0c\u7acb\u5373\u505c\u6b62\u3002\r\n  next()\r\n})\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"response"}),"\u76ee\u5f55\u4e2d\u65b0\u5efa\u4efb\u610f\u540d\u6587\u4ef6\u5939\u548cres.ts\u6587\u4ef6\uff0c\u6846\u67b6\u4f1a\u5728\u542f\u52a8\u540e\u8bb0\u5f55\u6587\u4ef6\u7d22\u5f15"]})}),"\n",(0,t.jsx)(n.h3,{id:"\u5339\u914d",children:"\u5339\u914d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="src/response/**/*/res.ts"',children:"import { createSelects } from 'alemonjs'\r\n// \u4e0d\u5339\u914d\u8be5\u6b63\u5219\uff0c\u81ea\u52a8\u8fdb\u884cnext\r\nexport const regular = /^(#|\\/)?hello$/\r\nexport const selects = createSelects(['message.create'])\r\nexport default onResponse(selects, event => {\r\n  // your code\r\n})\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u7ec4",children:"\u5206\u7ec4"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5171\u7528\u4e00\u4e2anext"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createSelects } from 'alemonjs'\r\nexport const selects = createSelects(['message.create'])\r\n\r\nconst response$1 = onResponse(selects, (event, next) => {\r\n  console.log('step 1')\r\n  // \u5141\u8bb8\u5728\u540c\u7ec4\u54cd\u5e94\u4e2d\uff0c\u7ee7\u7eed\u540e\u7eed\u7684\u51fd\u6570\r\n  return true\r\n})\r\n\r\nconst response$2 = onResponse(selects, (event, next) => {\r\n  console.log('step 2')\r\n  return {\r\n    // \u5141\u8bb8\u5206\u7ec4\uff0c\u7b49\u540c\u4e8e return true\r\n    allowGrouping: true\r\n  }\r\n})\r\n\r\nconst response$3 = onResponse(selects, (event, next) => {\r\n  console.log('step 3')\r\n})\r\n\r\nconst response = onResponse(selects, [response$1.current, esponse$2.current, response$3.current])\r\n\r\nexport default response\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8c03\u7528",children:"\u8c03\u7528"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5return\u4efb\u610f\u5bf9\u8c61\uff0c\u9664\u4e86\u7ea6\u5b9a\u7684\u503c\u9700\u8981\u6ce8\u610f\u4e4b\u5916"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createSelects } from 'alemonjs'\r\nexport const selects = createSelects(['message.create'])\r\n\r\nconst response$1 = onResponse(selects, (event, next) => {\r\n  return {\r\n    id: 0\r\n  }\r\n})\r\n\r\nconst response = onResponse(selects, (event, next) => {\r\n  const res = response$1.current(event, next)\r\n  console.log('\u83b7\u5f97\u6307\u5b9ares\u7684id', res.id)\r\n})\r\n\r\nexport default response\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var o=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(6540),s=r(4164),o=r(3104),a=r(6347),l=r(205),c=r(7485),i=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=p(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[i,d]=h({queryString:r,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),x=(()=>{const e=i??f;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&c(x)}),[x]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(i(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);