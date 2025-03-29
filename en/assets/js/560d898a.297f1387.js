"use strict";(self.webpackChunkalemonjs_docs=self.webpackChunkalemonjs_docs||[]).push([[2210],{5132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=t(4848),r=t(8453),a=t(1470),l=t(9365);const o={sidebar_position:2},i="Prerequisites",c={id:"environment",title:"Prerequisites",description:"Platform registration",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/environment.md",sourceDirName:".",slug:"/environment",permalink:"/en/docs/environment",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/alemonjs-docs/docs/environment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/en/docs/intro"},next:{title:"Quick start",permalink:"/en/docs/start"}},d={},h=[{value:"Platform registration",id:"platform-registration",level:2},{value:"Environmental preparation",id:"environmental-preparation",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"prerequisites",children:"Prerequisites"})}),"\n",(0,s.jsx)(n.h2,{id:"platform-registration",children:"Platform registration"}),"\n",(0,s.jsx)(n.admonition,{title:"warning",type:"warning",children:(0,s.jsx)(n.p,{children:"Before developing, please prepare a platform account."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://q.qq.com/#/",children:"QQ Development platform"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.kookapp.cn/doc/",children:"KOOK Development platform"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://discord.com/developers/applications/",children:"DISCORD Development platform"})}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Registered tutorial",type:"tip",children:[(0,s.jsx)(n.p,{children:"Use the robot needs to get the account and Token key of the open platform in order to communicate with the message platform and then send and receive messages."}),(0,s.jsx)(n.p,{children:"Here are some commonly used instructions or tutorials for the use of robot open platforms. Please choose according to your needs."})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Robot name"}),(0,s.jsx)(n.th,{children:"Link"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"QQ/QQ-Guild Official Bot"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://bot.q.qq.com/wiki/",children:"Official documentation"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WeChat Bot"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://hiflow.tencent.com/docs/applications/wwx-robot/",children:"Official documentation"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Telegram Bot"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://core.telegram.org/bots",children:"Official documentation"}),"\uff0c ",(0,s.jsx)(n.a,{href:"https://telegrambots.github.io/book/1/quickstart.html",children:"Other tutorials"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Discord Bot"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://discord.com/developers/docs/intro",children:"Official documentation"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kook Bot"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://developer.kookapp.cn/",children:"Official documentation"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"environmental-preparation",children:"Environmental preparation"}),"\n","\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(l.A,{value:"MacOS",label:"MacOS",default:!0,children:[(0,s.jsx)(n.p,{children:"The system version must be at least MacOS12."}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Older versions of the system are not guaranteed to work successfully."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Check git version; will prompt to download common toolkits if not installed"',children:"git --version\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"Brew Official Website"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Doownload Brew"',children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Add environment variable"',children:"echo 'export PATH=\"/opt/homebrew/bin:$PATH\"' >> ~/.bash_profile\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Add environment variable"',children:"echo 'export PATH=\"/opt/homebrew/bin:$PATH\"' >> ~/.zshrc\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Refresh environment variable"',children:"source ~/.bash_profile && source ~/.zshrc\n"})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})," to install and manage Node.js versions, which makes it easier to switch versions for development."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Install nvm"',children:"brew install nvm\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Add environment variable for nvm"',children:'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.bash_profile\necho \'[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \\. "/opt/homebrew/opt/nvm/nvm.sh"\' >> ~/.bash_profile\necho \'[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \\. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"\' >> ~/.bash_profile\n'})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Add environment variable for zshrc"',children:'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.zshrc\n# This loads nvm\necho \'[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \\. "/opt/homebrew/opt/nvm/nvm.sh"\' >> ~/.zshrc\n# This loads nvm bash_completion\necho \'[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \\. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"\' >> ~/.zshrc\n'})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Refresh environment variable"',children:"source ~/.bash_profile && source ~/.zshrc\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Install NodeJS@18.20.3"',children:"nvm install 18.20.3\nnvm use 18.20.3\nnode -v\nnpm -v\n"})})]}),(0,s.jsxs)(l.A,{value:"Debian",label:"Ubuntu/Debian",children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Example system: Ubuntu 24.04 LTS / Debian 12.0 X86 2H2G"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'titile="Update System"',children:"sudo apt update\nsudo apt install wget -y\nsudo apt install curl -y\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Install nvm"',children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Add environment variable for nvm"',children:'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.bashrc\necho \'[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"\' >> ~/.bashrc\nsource ~/.bashrc\nnvm -v\n'})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Install NodeJS@18.20.3"',children:"nvm install 18.20.3\nnvm use 18.20.3\nnode -v\nnpm -v\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Install git"',children:"apt install git\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Install chromium"',children:"sudo apt install chromium-browser\n"})})]}),(0,s.jsxs)(l.A,{value:"Centos",label:"Centos",children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Example system: Centos 8.2 X86 2H2G"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Ensure YUM is up-to-date"',children:"sudo yum update -y\nsudo yum install wget -y\nsudo yum install curl -y\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Install NVM"',children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Add environment variable for nvm"',children:'echo \'export NVM_DIR="$HOME/.nvm"\' >> ~/.bashrc\necho \'[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"\' >> ~/.bashrc\nsource ~/.bashrc # \u5237\u65b0\u73af\u5883\nnvm -v # \u7248\u672c\n'})}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"CentOS 8 and below can't use Node V18,"}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"please use 16.14.0 instead."}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Install NodeJS@18.20.3"',children:"nvm install 18.20.3\nnvm use 18.20.3\nnode -v\nnpm -v\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Install git"',children:"yum install git\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Install Chromium"',children:"yum  install chromium -y\n"})})]}),(0,s.jsxs)(l.A,{value:"Windows",label:"Windows",children:[(0,s.jsxs)(n.p,{children:["Recommended system: ",(0,s.jsx)(n.code,{children:"Windows10"})," | ",(0,s.jsx)(n.code,{children:"Windows11"})]}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install a browser: If not using the recommended system, please install ",(0,s.jsx)(n.a,{href:"https://www.google.cn/intl/zh-CN/chrome/",children:"Google Chrome"})," / ",(0,s.jsx)(n.a,{href:"https://www.microsoft.com/zh-cn/edge",children:"Edge"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install Node.js\uff1a ",(0,s.jsx)(n.a,{href:"https://nodejs.org/zh-cn",children:"Node.js@18.20.3"})]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["It is recommended to use ",(0,s.jsx)(n.a,{href:"https://github.com/coreybutler/nvm-windows/releases",children:"nvm-setup.exe"})," to manage Node.js versions for easier version switching during development."]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The Node.js version must be greater than 16.14.0 and be an even version."}),"\n"]}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Install Git\uff1a ",(0,s.jsx)(n.a,{href:"https://git-scm.com/",children:"Git Download for Windows"})]}),"\n"]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"All options must be clicked as default to avoid Git corruption."}),"\n"]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(6540),r=t(4164),a=t(3104),l=t(6347),o=t(205),i=t(7485),c=t(1682),d=t(679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=u(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,h]=p({queryString:t,groupId:r}),[b,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=c??b;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),v(e)}),[h,v,a]),tabValues:a}}var v=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==s&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,j.jsx)(w,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);