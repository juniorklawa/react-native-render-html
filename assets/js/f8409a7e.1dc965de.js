(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3206],{2553:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(7560),o=n(8283),r=n(2784),i=n(7149),s=n.n(i),l=n(5277),c=n(8563),m=n(1846),d=n(9979),p=n(6097),u="expoIframe_3HcQ";var h=(0,r.memo)((function(e){var t=e.name,n=e.description,a=e.theme,o=e.code,i=e.version,s=(0,r.useRef)(Math.random().toString(36).substr(2,10)),l=(0,r.useRef)(null),c="https://snack.expo.io/embedded?"+(0,r.useMemo)((function(){return function(e){var t=e.name,n=e.description,a=e.theme;return[["iframeId",e.iframeId],["preview","true"],["platform","my device"],["supportedPlatforms","ios,android"],t?["name",encodeURIComponent(t)]:null,n?["description",encodeURIComponent(n)]:null,["theme",a],["verbose","false"],["waitForData","true"]].filter((function(e){return!!e})).map((function(e){return e[0]+"="+e[1]})).join("&")}({iframeId:s.current,name:t,theme:a,description:n})}),[n,t,a]);return(0,r.useEffect)((function(){return function(e){var t=e.iframe,n=e.iframeId,a=e.code,o=e.version,r=function(e){var r=e.data[0],i=e.data[1];"expoFrameLoaded"===r&&i.iframeId===n&&t.contentWindow.postMessage(["expoDataEvent",{iframeId:n,dependencies:"react-native-render-html@"+o+",domutils,domhandler,@jsamr/counter-style,@jsamr/counter-style/presets/thai",code:a,files:""}],"*")};return window.addEventListener("message",r),function(){return window.removeEventListener("message",r)}}({iframe:l.current,iframeId:s.current,code:o,version:i})}),[o,i]),r.createElement("iframe",{className:u,ref:l,src:c,frameBorder:"0",loading:"lazy","data-snack-iframe":!0})}));function v(e){var t=e.snippet,n=e.title,a=e.caption,o=e.version,i=e.className,s=(0,p.Z)().isDarkTheme,l={backgroundColor:s?"#212121":"#f9f9f9"};return r.createElement("div",{className:i,style:l},r.createElement(h,{code:t,theme:s?"dark":"light",name:n,description:a,version:o}))}var f={figure:"figure_37nT",figure__caption:"figure__caption_oWxo",caption:"caption_3Ai_",figure__title:"figure__title_2lyH",sourceContainer__code:"sourceContainer__code_1D3p",sourceContainer__fixRadius:"sourceContainer__fixRadius_3RJ4",notice:"notice_3QzH",expoBox:"expoBox_24U5",expoBox__button:"expoBox__button_1HUM",expoBox__span:"expoBox__span_3enc",modalContent:"modalContent_38sI",modalContainer:"modalContainer_m0wd",modal__closeButton:"modal__closeButton_2th1",overlay:"overlay_34SY"},g=function(e){var t=e.color,n=e.size;return r.createElement("svg",{width:"24",height:"26",viewBox:"0 0 24 26",style:{width:n,height:n},fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z",fill:t}))},k=[{label:"JSX Source",value:"jsx"},{label:"HTML Snippet",value:"html"},{label:"TRT Snapshot",value:"snapshot"}];function N(e){var t=e.isOpen,n=e.onModalClose,i=(0,o.Z)(e,["isOpen","onModalClose"]),l=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=l.current;return e.node.addEventListener("click",n),function(){e.node.removeEventListener("click",n)}}),[n]),r.createElement(s(),{parentSelector:function(){return document.querySelector("body")},overlayClassName:f.overlay,portalClassName:f.portal,className:f.modalContainer,isOpen:t,onRequestClose:n,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,appElement:document.body,ref:l,contentLabel:"Expo Interactive Source"},r.createElement(v,(0,a.Z)({className:f.modalContent},i)),r.createElement("button",{className:f.modal__closeButton,onClick:n},"X"))}function w(e){var t=e.snippet,n=e.title,i=e.caption,s=e.html,p=e.preferHtmlSrc,u=e.snapshot,h=(0,o.Z)(e,["snippet","title","caption","html","preferHtmlSrc","snapshot"]),v=(0,r.useState)(!1),w=v[0],C=v[1],x=decodeURIComponent(t),y=decodeURIComponent(s),_=decodeURIComponent(u),b=(0,r.useCallback)((function(){return C(!1)}),[]);return r.createElement("figure",{className:f.figure},r.createElement("div",{className:f.sourceContainer},r.createElement("div",{className:f.sourceContainer__code},n&&r.createElement("div",{className:f.figure__title},n),r.createElement("div",{className:f.sourceContainer__fixRadius},r.createElement(c.Z,{defaultValue:p?"html":"jsx",title:n,values:k},r.createElement(m.Z,{value:"html"},r.createElement(l.Z,{className:"html"},y)),r.createElement(m.Z,{value:"jsx"},r.createElement(l.Z,{className:"jsx"},x)),r.createElement(m.Z,{value:"snapshot"},r.createElement(l.Z,{className:"xml"},_))))),r.createElement(d.Z,null,(function(){return r.createElement(N,(0,a.Z)({isOpen:w,onModalClose:b},h,{snippet:x,title:n,caption:i,preferHtmlSrc:p}))})),i&&r.createElement("figcaption",{className:f.caption},i),r.createElement("small",{style:i?{paddingTop:"var(--ifm-leading)"}:{},className:f.notice},"Press on the button below to show how this code renders on your device.")),r.createElement("div",{className:f.expoBox},r.createElement("button",{onClick:function(){return C(!0)},className:f.expoBox__button+" button button--outline button--primary",role:"button"},r.createElement(g,{color:"var(--ifm-button-color)",size:40}),r.createElement("span",{className:f.expoBox__span},"Run on Your Device with Expo"))))}},4586:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(7560),o=n(8283),r=(n(2784),n(9037)),i=n(2553),s={id:"intro",title:"Introduction",sidebar_position:0,description:"An introduction to react-native-render-html library."},l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"An introduction to react-native-render-html library.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/react-native-render-html/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.mdx",version:"current",sidebarPosition:0,frontMatter:{id:"intro",title:"Introduction",sidebar_position:0,description:"An introduction to react-native-render-html library."},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/react-native-render-html/docs/architecture"}},c=[{value:"Should I use?",id:"should-i-use",children:[]},{value:"Install",id:"install",children:[]},{value:"Simple Usage",id:"simple-usage",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"should-i-use"},"Should I use?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pros")),(0,r.kt)("ol",{style:{listStyleType:"disc"}},(0,r.kt)("li",null,(0,r.kt)("p",null,"HTML markup is translated into React Native views. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture"},"Architecture")," page for more details.")),(0,r.kt)("li",null,(0,r.kt)("p",null,"Its design balances compliance to HTML and CSS standards and lightweightness, despite some limitations and caveats.")),(0,r.kt)("li",null,(0,r.kt)("p",null,"It aims at being extremely customizable. For example, you can ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/custom-renderers"},"define custom renderers")," targetting specific tags with a mean to define children rendering, provide ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/styling"},"styles for tags, classes and ids"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/dom-tampering"},"tamper with the DOM"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cons")),(0,r.kt)("ol",{style:{listStyleType:"disc"}},(0,r.kt)("li",null,(0,r.kt)("p",null,"If your use-case is pretty straightforward, you might implement ",(0,r.kt)("a",{parentName:"p",href:"/docs/reinvent-the-wheel"},"your own, lightweight HTML renderer."))),(0,r.kt)("li",null,(0,r.kt)("p",null,"This is not a Web engine! If you need to load JavaScript along, you should use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-webview/react-native-webview"},"react-native-webview")," instead. Beware that it will certainly have a bigger impact on your App","'","s performances, since it will use the system","'","s Web View."))),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-render-html")," on your project:"),(0,r.kt)("div",{className:""},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev react-native-render-html\n"))),(0,r.kt)("h2",{id:"simple-usage"},"Simple Usage"),(0,r.kt)("p",null,"Let","'","s start with a simple example:"),(0,r.kt)(i.Z,{title:"Minimal working example",caption:"This example shows the rendering of simple HTML code snippet.",version:"6.0.0-alpha.24",html:"%0A%3Cp%20style%3D'text-align%3Acenter%3B'%3E%0A%20%20Hello%20World!%0A%3C%2Fp%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%0A%3Cp%20style%3D'text-align%3Acenter%3B'%3E%0A%20%20Hello%20World!%0A%3C%2Fp%3E%60%0A%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Hello%20World!%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Press the ",'"',"Run on Your Device with Expo",'"'," button to try it out on your device, and change the HTML from the Expo editor.\n"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Inspect the pre-render tree representation with the ",'"',"TRT Snapshot",'"'," tab.\n"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#source"},"source")," prop specifies the HTML content to load. This prop also supports an ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," field for remote loading and a ",(0,r.kt)("inlineCode",{parentName:"p"},"dom")," field for asynchronous DOM pre-processing (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/dom-tampering"},"DOM Tampering"),")."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#contentwidth"},"contentWidth")," prop allows proper image scaling. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/content/images"},"Images")," page for more details.\n"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You won","'","t be able to load external resources such as with ",(0,r.kt)("inlineCode",{parentName:"p"},"source.uri")," prop from the Expo playground Web preview because of CORS restrictions, but you can try it out on your device, just press the ",'"',"My Device",'"'," button.\n"))))}d.isMDXComponent=!0}}]);