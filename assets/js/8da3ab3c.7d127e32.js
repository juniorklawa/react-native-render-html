(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[855],{2553:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var n=a(7560),i=a(8283),o=a(2784),r=a(7149),s=a.n(r),l=a(5277),m=a(8563),c=a(1846),d=a(9979),p=a(6097),u="expoIframe_3HcQ";var A=(0,o.memo)((function(e){var t=e.name,a=e.description,n=e.theme,i=e.code,r=e.version,s=(0,o.useRef)(Math.random().toString(36).substr(2,10)),l=(0,o.useRef)(null),m="https://snack.expo.io/embedded?"+(0,o.useMemo)((function(){return function(e){var t=e.name,a=e.description,n=e.theme;return[["iframeId",e.iframeId],["preview","true"],["platform","my device"],["supportedPlatforms","ios,android"],t?["name",encodeURIComponent(t)]:null,a?["description",encodeURIComponent(a)]:null,["theme",n],["verbose","false"],["waitForData","true"]].filter((function(e){return!!e})).map((function(e){return e[0]+"="+e[1]})).join("&")}({iframeId:s.current,name:t,theme:n,description:a})}),[a,t,n]);return(0,o.useEffect)((function(){return function(e){var t=e.iframe,a=e.iframeId,n=e.code,i=e.version,o=function(e){var o=e.data[0],r=e.data[1];"expoFrameLoaded"===o&&r.iframeId===a&&t.contentWindow.postMessage(["expoDataEvent",{iframeId:a,dependencies:"react-native-render-html@"+i+",domutils,domhandler,@jsamr/counter-style,@jsamr/counter-style/presets/thai",code:n,files:""}],"*")};return window.addEventListener("message",o),function(){return window.removeEventListener("message",o)}}({iframe:l.current,iframeId:s.current,code:i,version:r})}),[i,r]),o.createElement("iframe",{className:u,ref:l,src:m,frameBorder:"0",loading:"lazy","data-snack-iframe":!0})}));function h(e){var t=e.snippet,a=e.title,n=e.caption,i=e.version,r=e.className,s=(0,p.Z)().isDarkTheme,l={backgroundColor:s?"#212121":"#f9f9f9"};return o.createElement("div",{className:r,style:l},o.createElement(A,{code:t,theme:s?"dark":"light",name:a,description:n,version:i}))}var C={figure:"figure_37nT",figure__caption:"figure__caption_oWxo",caption:"caption_3Ai_",figure__title:"figure__title_2lyH",sourceContainer__code:"sourceContainer__code_1D3p",sourceContainer__fixRadius:"sourceContainer__fixRadius_3RJ4",notice:"notice_3QzH",expoBox:"expoBox_24U5",expoBox__button:"expoBox__button_1HUM",expoBox__span:"expoBox__span_3enc",modalContent:"modalContent_38sI",modalContainer:"modalContainer_m0wd",modal__closeButton:"modal__closeButton_2th1",overlay:"overlay_34SY"},f=function(e){var t=e.color,a=e.size;return o.createElement("svg",{width:"24",height:"26",viewBox:"0 0 24 26",style:{width:a,height:a},fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z",fill:t}))},g=[{label:"JSX Source",value:"jsx"},{label:"HTML Snippet",value:"html"},{label:"TRT Snapshot",value:"snapshot"}];function E(e){var t=e.isOpen,a=e.onModalClose,r=(0,i.Z)(e,["isOpen","onModalClose"]),l=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e=l.current;return e.node.addEventListener("click",a),function(){e.node.removeEventListener("click",a)}}),[a]),o.createElement(s(),{parentSelector:function(){return document.querySelector("body")},overlayClassName:C.overlay,portalClassName:C.portal,className:C.modalContainer,isOpen:t,onRequestClose:a,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,appElement:document.body,ref:l,contentLabel:"Expo Interactive Source"},o.createElement(h,(0,n.Z)({className:C.modalContent},r)),o.createElement("button",{className:C.modal__closeButton,onClick:a},"X"))}function v(e){var t=e.snippet,a=e.title,r=e.caption,s=e.html,p=e.preferHtmlSrc,u=e.snapshot,A=(0,i.Z)(e,["snippet","title","caption","html","preferHtmlSrc","snapshot"]),h=(0,o.useState)(!1),v=h[0],x=h[1],D=decodeURIComponent(t),_=decodeURIComponent(s),B=decodeURIComponent(u),T=(0,o.useCallback)((function(){return x(!1)}),[]);return o.createElement("figure",{className:C.figure},o.createElement("div",{className:C.sourceContainer},o.createElement("div",{className:C.sourceContainer__code},a&&o.createElement("div",{className:C.figure__title},a),o.createElement("div",{className:C.sourceContainer__fixRadius},o.createElement(m.Z,{defaultValue:p?"html":"jsx",title:a,values:g},o.createElement(c.Z,{value:"html"},o.createElement(l.Z,{className:"html"},_)),o.createElement(c.Z,{value:"jsx"},o.createElement(l.Z,{className:"jsx"},D)),o.createElement(c.Z,{value:"snapshot"},o.createElement(l.Z,{className:"xml"},B))))),o.createElement(d.Z,null,(function(){return o.createElement(E,(0,n.Z)({isOpen:v,onModalClose:T},A,{snippet:D,title:a,caption:r,preferHtmlSrc:p}))})),r&&o.createElement("figcaption",{className:C.caption},r),o.createElement("small",{style:r?{paddingTop:"var(--ifm-leading)"}:{},className:C.notice},"Press on the button below to show how this code renders on your device.")),o.createElement("div",{className:C.expoBox},o.createElement("button",{onClick:function(){return x(!0)},className:C.expoBox__button+" button button--outline button--primary",role:"button"},o.createElement(f,{color:"var(--ifm-button-color)",size:40}),o.createElement("span",{className:C.expoBox__span},"Run on Your Device with Expo"))))}},8650:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var n=a(7560),i=a(8283),o=(a(2784),a(9037)),r=a(2553),s={id:"textual",title:"Textual",sidebar_position:1,description:"An overview of textual contents in react-native-render-html."},l={unversionedId:"content/textual",id:"content/textual",isDocsHomePage:!1,title:"Textual",description:"An overview of textual contents in react-native-render-html.",source:"@site/docs/content/textual.mdx",sourceDirName:"content",slug:"/content/textual",permalink:"/react-native-render-html/docs/content/textual",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/content/textual.mdx",version:"current",sidebarPosition:1,frontMatter:{id:"textual",title:"Textual",sidebar_position:1,description:"An overview of textual contents in react-native-render-html."},sidebar:"tutorialSidebar",previous:{title:"Reinvent the Wheel",permalink:"/react-native-render-html/docs/reinvent-the-wheel"},next:{title:"Images",permalink:"/react-native-render-html/docs/content/images"}},m=[{value:"Paragraphs",id:"paragraphs",children:[]},{value:"Whitespace Collapsing",id:"whitespace-collapsing",children:[{value:"Example: &#39;white-space: normal&#39;",id:"example-white-space-normal",children:[]},{value:"Example: &#39;white-space: pre&#39;",id:"example-white-space-pre",children:[]}]},{value:"Preformatted Content",id:"preformatted-content",children:[]},{value:"Font Selection",id:"font-selection",children:[{value:"Example: Arial Font Selection",id:"example-arial-font-selection",children:[]},{value:"Example: Courier New Font Selection",id:"example-courier-new-font-selection",children:[]},{value:"Example: Space Mono Font Selection",id:"example-space-mono-font-selection",children:[]}]}],c={toc:m};function d(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"paragraphs"},"Paragraphs"),(0,o.kt)("p",null,"Paragraphs have a default top and bottom margin. If you use ",(0,o.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#enableexperimentalmargincollapsing"},"enableExperimentalMarginCollapsing")," prop, margins of adjacents blocks will collapse ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"},"as per the CSS standard"),"."),(0,o.kt)(r.Z,{title:"A paragraph",caption:"The first paragraph has a font size set in rem. The margins between first and second paragraphs are collapsed thanks to enableExperimentalMarginCollapsing prop.",version:"6.0.0-alpha.24",html:"%3Cp%20style%3D%22font-size%3A%201.2rem%3B%20padding%3A%200%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E%0A%3Cp%20style%3D%22color%3A%20purple%3B%20padding%3A%200%2010px%3B%22%3E%0A%20%20Duis%20aute%20irure%20dolor%20in%0A%20%20reprehenderit%20in%20voluptate%20velit%20esse%20cillum%20dolore%0A%20%20eu%20fugiat%20nulla%20pariatur.%20Excepteur%20sint%20occaecat%0A%20%20cupidatat%20non%20proident%2C%20sunt%20in%20culpa%20qui%20officia%0A%20%20deserunt%20mollit%20anim%20id%20est%20laborum.%0A%3C%2Fp%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Cp%20style%3D%22font-size%3A%201.2rem%3B%20padding%3A%200%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E%0A%3Cp%20style%3D%22color%3A%20purple%3B%20padding%3A%200%2010px%3B%22%3E%0A%20%20Duis%20aute%20irure%20dolor%20in%0A%20%20reprehenderit%20in%20voluptate%20velit%20esse%20cillum%20dolore%0A%20%20eu%20fugiat%20nulla%20pariatur.%20Excepteur%20sint%20occaecat%0A%20%20cupidatat%20non%20proident%2C%20sunt%20in%20culpa%20qui%20officia%0A%20%20deserunt%20mollit%20anim%20id%20est%20laborum.%0A%3C%2Fp%3E%60%0A%7D%3B%0A%0Aconst%20enableExperimentalMarginCollapsing%20%3D%20true%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20enableExperimentalMarginCollapsing%3D%7BenableExperimentalMarginCollapsing%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%20ex%20ea%20commodo%20consequat.%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Duis%20aute%20irure%20dolor%20in%20reprehenderit%20in%20voluptate%20velit%20esse%20cillum%20dolore%20eu%20fugiat%20nulla%20pariatur.%20Excepteur%20sint%20occaecat%20cupidatat%20non%20proident%2C%20sunt%20in%20culpa%20qui%20officia%20deserunt%20mollit%20anim%20id%20est%20laborum.%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#enableexperimentalmargincollapsing"},"enableExperimentalMarginCollapsing")," is considered experimental because the ","\u200b",(0,o.kt)("abbr",{about:"A module capable of transforming a DOM tree into a Transient Render Tree",title:"Transient Render Engine"},"TRE")," doesn","'","t support ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/display"},"display")," CSS property yet. However, margin collapsing should not apply to flex flows while this prop will apply margin collapsing indiscriminitly.\n"))),(0,o.kt)("h2",{id:"whitespace-collapsing"},"Whitespace Collapsing"),(0,o.kt)("p",null,"White space collasping occurs in the eponym phase of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/flow/transient-render-engine"},"Transient Render Engine")," processing step. Insignificant whitespaces are removed from the tree, as per the algorithm depicted in ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/css-text-3/"},"CSS Text Module Level 3"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ","\u200b",(0,o.kt)("abbr",{about:"A module capable of transforming a DOM tree into a Transient Render Tree",title:"Transient Render Engine"},"TRE")," strictly complies with this standard, although only ",(0,o.kt)("inlineCode",{parentName:"p"},"white-space:\xa0normal;")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"white-space:\xa0pre;")," are supported at the moment.\n"))),(0,o.kt)("h3",{id:"example-white-space-normal"},"Example: ","'","white-space: normal","'"),(0,o.kt)("p",null,"This is the default behavior, with the exception of a handful of tags such as ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/pre"},"<","pre",">"),"."),(0,o.kt)(r.Z,{title:"Whitespace Collapsing in Action",caption:"Notice that the four line breaks and the second space after the coma have been removed.",version:"6.0.0-alpha.24",html:"%3Cdiv%20style%3D%22white-space%3A%20normal%3B%20text-align%3A%20center%3B%22%3E%0A%3Cspan%3EThis%20is%20text!%3C%2Fspan%3E%0A%0AThis%20is%20%3Cstrong%3Ebold%3C%2Fstrong%3E%2C%20%20%3Cem%3Eitalics%3C%2Fem%3E.%0A%3C%2Fdiv%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Cdiv%20style%3D%22white-space%3A%20normal%3B%20text-align%3A%20center%3B%22%3E%0A%3Cspan%3EThis%20is%20text!%3C%2Fspan%3E%0A%0AThis%20is%20%3Cstrong%3Ebold%3C%2Fstrong%3E%2C%20%20%3Cem%3Eitalics%3C%2Fem%3E.%0A%3C%2Fdiv%3E%60%0A%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22div%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22span%22%20data%3D%22This%20is%20text!%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%20This%20is%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22strong%22%20data%3D%22bold%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%2C%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22em%22%20data%3D%22italics%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22.%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,o.kt)("h3",{id:"example-white-space-pre"},"Example: ","'","white-space: pre","'"),(0,o.kt)("p",null,"You can set the ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/white-space"},"white-space")," CSS property with inline styles ",(0,o.kt)("strong",{parentName:"p"},"or")," with classes, id and tags styles."),(0,o.kt)(r.Z,{title:"Whitespace Collapsing Disabled",caption:"Notice that the four line breaks and the second space after the coma have been preserved.",version:"6.0.0-alpha.24",html:"%3Cdiv%20style%3D%22white-space%3A%20pre%3B%20text-align%3A%20center%3B%22%3E%0A%3Cspan%3EThis%20is%20text!%3C%2Fspan%3E%0A%0AThis%20is%20%3Cstrong%3Ebold%3C%2Fstrong%3E%2C%20%3Cem%3Eitalics%3C%2Fem%3E.%0A%3C%2Fdiv%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Cdiv%20style%3D%22white-space%3A%20pre%3B%20text-align%3A%20center%3B%22%3E%0A%3Cspan%3EThis%20is%20text!%3C%2Fspan%3E%0A%0AThis%20is%20%3Cstrong%3Ebold%3C%2Fstrong%3E%2C%20%3Cem%3Eitalics%3C%2Fem%3E.%0A%3C%2Fdiv%3E%60%0A%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22div%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5Cn%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22span%22%20data%3D%22This%20is%20text!%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5Cn%5CnThis%20is%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22strong%22%20data%3D%22bold%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%2C%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22em%22%20data%3D%22italics%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22.%5Cn%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,o.kt)("h2",{id:"preformatted-content"},"Preformatted Content"),(0,o.kt)(r.Z,{title:"Preformatted Text",caption:"Notice that every white-space inside the <pre> tag is preserved while white-spaces outside are collapsed.",version:"6.0.0-alpha.24",html:"%0A%3Cfigure%3E%0A%20%20%3Cpre%3E%20%20___________________________%0A%3C%20I'm%20an%20expert%20in%20my%20field.%20%3E%0A%20%20---------------------------%0A%20%20%20%20%5C%20%20%20%5E__%5E%20%0A%20%20%20%20%5C%20%20(oo)%5C_______%0A%20%20%20%20%20%20%20(__)%5C%20%20%20%20%20%20%20)%5C%2F%5C%0A%20%20%20%20%20%20%20%20%20%20%20%7C%7C----w%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20%20%20%20%20%7C%7C%0A%20%20%3C%2Fpre%3E%0A%20%20%3Cfigcaption%3E%0A%20%20%20%20A%20cow%20saying%2C%20%22I'm%20an%20expert%20in%20my%20field.%22%20The%20cow%20is%20illustrated%20using%20preformatted%20text%20characters.%20%0A%20%20%3C%2Ffigcaption%3E%0A%3C%2Ffigure%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%0A%3Cfigure%3E%0A%20%20%3Cpre%3E%20%20___________________________%0A%3C%20I'm%20an%20expert%20in%20my%20field.%20%3E%0A%20%20---------------------------%0A%20%20%20%20%5C%20%20%20%5E__%5E%20%0A%20%20%20%20%5C%20%20(oo)%5C_______%0A%20%20%20%20%20%20%20(__)%5C%20%20%20%20%20%20%20)%5C%2F%5C%0A%20%20%20%20%20%20%20%20%20%20%20%7C%7C----w%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%7C%7C%20%20%20%20%20%7C%7C%0A%20%20%3C%2Fpre%3E%0A%20%20%3Cfigcaption%3E%0A%20%20%20%20A%20cow%20saying%2C%20%22I'm%20an%20expert%20in%20my%20field.%22%20The%20cow%20is%20illustrated%20using%20preformatted%20text%20characters.%20%0A%20%20%3C%2Ffigcaption%3E%0A%3C%2Ffigure%3E%60%0A%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22figure%22%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22pre%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22___________________________%20%3C%20I'm%20an%20expert%20in%20my%20field.%20%3E%20---------------------------%20%5C%5C%20%5E__%5E%20%5C%5C%20(oo)%5C%5C_______%20(__)%5C%5C%20)%5C%5C%2F%5C%5C%20%7C%7C----w%20%7C%20%7C%7C%20%7C%7C%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22figcaption%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22A%20cow%20saying%2C%20%5C%22I'm%20an%20expert%20in%20my%20field.%5C%22%20The%20cow%20is%20illustrated%20using%20preformatted%20text%20characters.%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default font for the ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/pre"},"<","pre",">")," tag is monospace and ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/white-space"},"white-space")," property is ",'"',"pre",'"',". These default styles are set via the ",(0,o.kt)("inlineCode",{parentName:"p"},"mixedUAStyles")," associated with this tag. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/flow/transient-render-engine"},"Transient Render Engine")," page, element model section.\n"))),(0,o.kt)("h2",{id:"font-selection"},"Font Selection"),(0,o.kt)("p",null,"CSS ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/font-family"},"font-family")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/font"},"font")," properties allow a comma-separated list of fonts, but React Native styles ",(0,o.kt)("inlineCode",{parentName:"p"},"fontFamily")," allows only one font name. With the ","\u200b",(0,o.kt)("abbr",{about:"A module capable of transforming a DOM tree into a Transient Render Tree",title:"Transient Render Engine"},"TRE"),", you can instruct which fonts are available in the system (or fonts you have added), and it will pick the first match! The prop to achieve that is ",(0,o.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#systemfonts"},"systemFonts"),"."),(0,o.kt)("p",null,"By default, a handful of fonts supported by the current platform are pre-registered (Android, iOS, MacOS and Windows). If you are using expo, just set this prop to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/constants/#constantssystemfonts"},"Constants.systemFonts"),". You can also define how ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name"},"generic font names")," are resolved with the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#fallbackfonts"},"fallbackFonts")," prop."),(0,o.kt)("h3",{id:"example-arial-font-selection"},"Example: Arial Font Selection"),(0,o.kt)(r.Z,{title:"Arial Font Selection",caption:'This paragraph font family is set to "Arial" (will match on iOS, MacOS and Windows) and should fallback to sans-serif otherwise.',version:"6.0.0-alpha.24",html:"%3Cp%20style%3D%22font-family%3A%20'Arial'%2C%20sans-serif%3B%20padding%3A%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Cp%20style%3D%22font-family%3A%20'Arial'%2C%20sans-serif%3B%20padding%3A%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E%60%0A%7D%3B%0A%0Aconst%20enableExperimentalMarginCollapsing%20%3D%20true%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20enableExperimentalMarginCollapsing%3D%7BenableExperimentalMarginCollapsing%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%20ex%20ea%20commodo%20consequat.%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,o.kt)("h3",{id:"example-courier-new-font-selection"},"Example: Courier New Font Selection"),(0,o.kt)(r.Z,{title:"Courier New Font Selection",caption:'This paragraph font family is set to "Courier New" (will match on iOS, MacOS and Windows) and should fallback to monospace otherwise.',version:"6.0.0-alpha.24",html:"%3Cp%20style%3D%22font-family%3A%20'Courier%20New'%2C%20monospace%3B%20padding%3A%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Cp%20style%3D%22font-family%3A%20'Courier%20New'%2C%20monospace%3B%20padding%3A%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E%60%0A%7D%3B%0A%0Aconst%20enableExperimentalMarginCollapsing%20%3D%20true%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20enableExperimentalMarginCollapsing%3D%7BenableExperimentalMarginCollapsing%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%20ex%20ea%20commodo%20consequat.%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,o.kt)("h3",{id:"example-space-mono-font-selection"},"Example: Space Mono Font Selection"),(0,o.kt)(r.Z,{title:"Space Mono Font Selection",caption:'This paragraph font family is set to "Space Mono", which has been loaded in this project and set with systemFonts prop.',version:"6.0.0-alpha.24",html:"%3Cp%20style%3D%22font-family%3A%20'space-mono'%3B%20padding%3A%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0A%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Cp%20style%3D%22font-family%3A%20'space-mono'%3B%20padding%3A%2010px%3B%22%3E%0A%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%0A%20%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%0A%20%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%0A%20%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%0A%20%20ex%20ea%20commodo%20consequat.%20%0A%3C%2Fp%3E%60%0A%7D%3B%0A%0Aconst%20enableExperimentalMarginCollapsing%20%3D%20true%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20enableExperimentalMarginCollapsing%3D%7BenableExperimentalMarginCollapsing%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam%2C%20quis%20nostrud%20exercitation%20ullamco%20laboris%20nisi%20ut%20aliquip%20ex%20ea%20commodo%20consequat.%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}))}d.isMDXComponent=!0}}]);