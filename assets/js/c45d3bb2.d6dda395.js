(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7335],{2553:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7560),r=n(8283),i=n(2784),o=n(7149),s=n.n(o),l=n(5277),d=n(8563),m=n(1846),c=n(9979),p=n(6097),u="expoIframe_3HcQ";var h=(0,i.memo)((function(e){var t=e.name,n=e.description,a=e.theme,r=e.code,o=e.version,s=(0,i.useRef)(Math.random().toString(36).substr(2,10)),l=(0,i.useRef)(null),d="https://snack.expo.io/embedded?"+(0,i.useMemo)((function(){return function(e){var t=e.name,n=e.description,a=e.theme;return[["iframeId",e.iframeId],["preview","true"],["platform","my device"],["supportedPlatforms","ios,android"],t?["name",encodeURIComponent(t)]:null,n?["description",encodeURIComponent(n)]:null,["theme",a],["verbose","false"],["waitForData","true"]].filter((function(e){return!!e})).map((function(e){return e[0]+"="+e[1]})).join("&")}({iframeId:s.current,name:t,theme:a,description:n})}),[n,t,a]);return(0,i.useEffect)((function(){return function(e){var t=e.iframe,n=e.iframeId,a=e.code,r=e.version,i=function(e){var i=e.data[0],o=e.data[1];"expoFrameLoaded"===i&&o.iframeId===n&&t.contentWindow.postMessage(["expoDataEvent",{iframeId:n,dependencies:"react-native-render-html@"+r+",domutils,domhandler,@jsamr/counter-style,@jsamr/counter-style/presets/thai",code:a,files:""}],"*")};return window.addEventListener("message",i),function(){return window.removeEventListener("message",i)}}({iframe:l.current,iframeId:s.current,code:r,version:o})}),[r,o]),i.createElement("iframe",{className:u,ref:l,src:d,frameBorder:"0",loading:"lazy","data-snack-iframe":!0})}));function g(e){var t=e.snippet,n=e.title,a=e.caption,r=e.version,o=e.className,s=(0,p.Z)().isDarkTheme,l={backgroundColor:s?"#212121":"#f9f9f9"};return i.createElement("div",{className:o,style:l},i.createElement(h,{code:t,theme:s?"dark":"light",name:n,description:a,version:r}))}var A={figure:"figure_37nT",figure__caption:"figure__caption_oWxo",caption:"caption_3Ai_",figure__title:"figure__title_2lyH",sourceContainer__code:"sourceContainer__code_1D3p",sourceContainer__fixRadius:"sourceContainer__fixRadius_3RJ4",notice:"notice_3QzH",expoBox:"expoBox_24U5",expoBox__button:"expoBox__button_1HUM",expoBox__span:"expoBox__span_3enc",modalContent:"modalContent_38sI",modalContainer:"modalContainer_m0wd",modal__closeButton:"modal__closeButton_2th1",overlay:"overlay_34SY"},C=function(e){var t=e.color,n=e.size;return i.createElement("svg",{width:"24",height:"26",viewBox:"0 0 24 26",style:{width:n,height:n},fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M22.069 10.075a2.273 2.273 0 00-.887-.74 2.296 2.296 0 00-2.237.16 2.265 2.265 0 00-.77.859 2.016 2.016 0 00.392 2.274 3.342 3.342 0 002.23-.63 3.289 3.289 0 001.271-1.923zM15.3 1.3l-1.45-.788-6.31 3.481.503.27.957.498 1.732-.954 4.569-2.523-.001.016zm.584-.24a.225.225 0 01.16.15l2.114 6.182a.205.205 0 01-.1.269 4.063 4.063 0 00-1.798 1.974 4.017 4.017 0 00-.175 2.655 4.283 4.283 0 001.755 2.332c.842.55 1.852.79 2.854.68a.269.269 0 01.262.16l2.184 6.345a.256.256 0 01-.101.278l-6.712 3.89a.253.253 0 01-.101.02.27.27 0 01-.181-.03L13.69 24.5a.234.234 0 01-.1-.1l-4.6-10.483-7.005 3.95a.327.327 0 01-.272.01l-1.592-.898a.23.23 0 01-.1-.299l6.805-12.8a.243.243 0 01.11-.099L13.721.03a.259.259 0 01.241 0l1.923 1.03zM7.47 4.499L7.14 4.33.58 16.71l1.197.668 5.657-7.335a.275.275 0 01.231-.1.282.282 0 01.201.149l6.16 14.066 1.646 1.007L9.06 6.005l-.281-.798-1.318-.718.01.01zm10.145 7.382a2.51 2.51 0 01.12-1.663 2.54 2.54 0 011.138-1.23 2.798 2.798 0 013.261.4 2.513 2.513 0 01.073 3.568l-.073.073a2.77 2.77 0 01-3.788.01 2.719 2.719 0 01-.731-1.158z",fill:t}))},k=[{label:"JSX Source",value:"jsx"},{label:"HTML Snippet",value:"html"},{label:"TRT Snapshot",value:"snapshot"}];function v(e){var t=e.isOpen,n=e.onModalClose,o=(0,r.Z)(e,["isOpen","onModalClose"]),l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=l.current;return e.node.addEventListener("click",n),function(){e.node.removeEventListener("click",n)}}),[n]),i.createElement(s(),{parentSelector:function(){return document.querySelector("body")},overlayClassName:A.overlay,portalClassName:A.portal,className:A.modalContainer,isOpen:t,onRequestClose:n,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,appElement:document.body,ref:l,contentLabel:"Expo Interactive Source"},i.createElement(g,(0,a.Z)({className:A.modalContent},o)),i.createElement("button",{className:A.modal__closeButton,onClick:n},"X"))}function f(e){var t=e.snippet,n=e.title,o=e.caption,s=e.html,p=e.preferHtmlSrc,u=e.snapshot,h=(0,r.Z)(e,["snippet","title","caption","html","preferHtmlSrc","snapshot"]),g=(0,i.useState)(!1),f=g[0],E=g[1],N=decodeURIComponent(t),D=decodeURIComponent(s),T=decodeURIComponent(u),w=(0,i.useCallback)((function(){return E(!1)}),[]);return i.createElement("figure",{className:A.figure},i.createElement("div",{className:A.sourceContainer},i.createElement("div",{className:A.sourceContainer__code},n&&i.createElement("div",{className:A.figure__title},n),i.createElement("div",{className:A.sourceContainer__fixRadius},i.createElement(d.Z,{defaultValue:p?"html":"jsx",title:n,values:k},i.createElement(m.Z,{value:"html"},i.createElement(l.Z,{className:"html"},D)),i.createElement(m.Z,{value:"jsx"},i.createElement(l.Z,{className:"jsx"},N)),i.createElement(m.Z,{value:"snapshot"},i.createElement(l.Z,{className:"xml"},T))))),i.createElement(c.Z,null,(function(){return i.createElement(v,(0,a.Z)({isOpen:f,onModalClose:w},h,{snippet:N,title:n,caption:o,preferHtmlSrc:p}))})),o&&i.createElement("figcaption",{className:A.caption},o),i.createElement("small",{style:o?{paddingTop:"var(--ifm-leading)"}:{},className:A.notice},"Press on the button below to show how this code renders on your device.")),i.createElement("div",{className:A.expoBox},i.createElement("button",{onClick:function(){return E(!0)},className:A.expoBox__button+" button button--outline button--primary",role:"button"},i.createElement(C,{color:"var(--ifm-button-color)",size:40}),i.createElement("span",{className:A.expoBox__span},"Run on Your Device with Expo"))))}},895:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=n(7560),r=n(8283),i=(n(2784),n(9037)),o=n(2553),s={id:"custom-renderers",title:"Custom Rendering",sidebar_position:2,description:"How to implement custom renderers in react-native-render-html?"},l={unversionedId:"guides/custom-renderers",id:"guides/custom-renderers",isDocsHomePage:!1,title:"Custom Rendering",description:"How to implement custom renderers in react-native-render-html?",source:"@site/docs/guides/custom-renderers.mdx",sourceDirName:"guides",slug:"/guides/custom-renderers",permalink:"/react-native-render-html/docs/guides/custom-renderers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/custom-renderers.mdx",version:"current",sidebarPosition:2,frontMatter:{id:"custom-renderers",title:"Custom Rendering",sidebar_position:2,description:"How to implement custom renderers in react-native-render-html?"},sidebar:"tutorialSidebar",previous:{title:"Anchors",permalink:"/react-native-render-html/docs/content/anchors"},next:{title:"Styling",permalink:"/react-native-render-html/docs/guides/styling"}},d=[{value:"Options for Custom Rendering",id:"options-for-custom-rendering",children:[]},{value:"Model-based Custom Rendering",id:"model-based-custom-rendering",children:[{value:"Example: Registering a New Tag",id:"example-registering-a-new-tag",children:[]},{value:"Example: Displaying Inline Images",id:"example-displaying-inline-images",children:[]}]},{value:"Component-based Custom Rendering",id:"component-based-custom-rendering",children:[{value:"Minimal Example",id:"minimal-example",children:[]},{value:"Children Tampering",id:"children-tampering",children:[]},{value:"Renderer Props Summary",id:"renderer-props-summary",children:[]}]}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The renderer API shipped since ",(0,i.kt)("strong",{parentName:"p"},"Foundry")," (v6) is at the same time more strict and more flexible. To get ready for this new API, you must understand some basics of the transient render tree produced by the ","\u200b",(0,i.kt)("abbr",{about:"A module capable of transforming a DOM tree into a Transient Render Tree",title:"Transient Render Engine"},"TRE"),":"),(0,i.kt)("ol",{style:{listStyleType:"decimal"}},(0,i.kt)("li",null,(0,i.kt)("p",null,"During the transient render tree generation, every DOM node is translated to a ",(0,i.kt)("inlineCode",{parentName:"p"},"TNode"),".")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TText")," nodes correspond to DOM text nodes (",(0,i.kt)("strong",{parentName:"p"},"anonymous")," ",(0,i.kt)("inlineCode",{parentName:"p"},"TText")," nodes) or DOM elements which children are DOM text nodes (",(0,i.kt)("strong",{parentName:"p"},"named")," ",(0,i.kt)("inlineCode",{parentName:"p"},"TText")," nodes). So a ",(0,i.kt)("inlineCode",{parentName:"p"},"TText")," node cannot have children, and its content is a string accessible with the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field.")),(0,i.kt)("li",null,(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("strong",{parentName:"p"},"hoisting"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TPhrasing")," nodes can only have ",(0,i.kt)("inlineCode",{parentName:"p"},"TText")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TPhrasing")," nodes as children.")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TBlock")," nodes can have any children."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You are kindly advised to read ",(0,i.kt)("a",{parentName:"p",href:"/docs/flow/transient-render-engine"},"Transient Render Engine")," page before continuing!\n"))),(0,i.kt)("h2",{id:"options-for-custom-rendering"},"Options for Custom Rendering"),(0,i.kt)("p",null,"You can customize rendering at two steps of the flow:"),(0,i.kt)("ol",{style:{listStyleType:"decimal"}},(0,i.kt)("li",null,(0,i.kt)("p",null,"During ","\u200b",(0,i.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT"),"generation. via HTML model definition.")),(0,i.kt)("li",null,(0,i.kt)("p",null,"At (React) render time via custom renderers."))),(0,i.kt)("p",null,"These customizations are not exclusive, so you can use both approaches at the same time."),(0,i.kt)("h2",{id:"model-based-custom-rendering"},"Model-based Custom Rendering"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You are kindly advised to read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/flow/transient-render-engine"},"Transient Render Engine")," page before continuing, especially the chapter related to elements models.\n"))),(0,i.kt)("h3",{id:"example-registering-a-new-tag"},"Example: Registering a New Tag"),(0,i.kt)("p",null,"Let","'","s say we have defined an advanced, powerful ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;bluecircle&gt;")," Web Component for our website and we need to register a custom renderer for this tag. If we don","'","t, the ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;bluecircle&gt;")," elements will be translated to ",(0,i.kt)("inlineCode",{parentName:"p"},"TEmpty")," and won","'","t be rendered."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We ",(0,i.kt)("strong",{parentName:"p"},"must")," register an ",(0,i.kt)("strong",{parentName:"p"},"element model")," for this tag because it is non-standard.\n"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We ",(0,i.kt)("strong",{parentName:"p"},"may")," register a custom component renderer, but this is not mandatory (see next chapter).\n"))),(0,i.kt)(o.Z,{title:"A Custom Tag Example",caption:"A Custom Tag rendered by defining an element model for this tag via HTMLElementModel.fromCustomModel.",version:"6.0.0-alpha.24",html:"%3Cbluecircle%3E%3C%2Fbluecircle%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0Aimport%20%7B%20HTMLElementModel%2C%20HTMLContentModel%20%7D%20from%20'react-native-render-html'%3B%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20'%3Cbluecircle%3E%3C%2Fbluecircle%3E'%0A%7D%3B%0A%0Aconst%20customHTMLElementModels%20%3D%20%7B%0A%20%20%20%20bluecircle%3A%20HTMLElementModel.fromCustomModel(%7B%0A%20%20%20%20%20%20tagName%3A%20'bluecircle'%2C%0A%20%20%20%20%20%20mixedUAStyles%3A%20%7B%0A%20%20%20%20%20%20%20%20width%3A%2050%2C%0A%20%20%20%20%20%20%20%20height%3A%2050%2C%0A%20%20%20%20%20%20%20%20borderRadius%3A%2025%2C%0A%20%20%20%20%20%20%20%20alignSelf%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20'blue'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20contentModel%3A%20HTMLContentModel.block%0A%20%20%20%20%7D)%0A%20%20%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20customHTMLElementModels%3D%7BcustomHTMLElementModels%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTEmpty%20tagName%3D%22bluecircle%22%20unregistered%20%2F%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,i.kt)("h3",{id:"example-displaying-inline-images"},"Example: Displaying Inline Images"),(0,i.kt)("p",null,"In the below example, we are changing the element model of the",(0,i.kt)("a",{parentName:"p",href:"https://mdn.io/img"},"<","img",">")," tag to support inline rendering. For this purpose, we take advantage of the ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#customhtmlelementmodels"},"customHTMLElementModels")," prop!"),(0,i.kt)(o.Z,{title:"Customizing Content Model",caption:'A usage of customHTMLElementModels prop to change the content model of <img> tags thanks to "extend" method of HTMLElementModel.',version:"6.0.0-alpha.24",html:"%3Cp%20style%3D%22text-align%3Acenter%22%3E%0A%20%20Those%20are%20inline%20images!%3Cbr%2F%3E%3Cbr%2F%3E%0A%20%20%3Cstrong%3Ebefore%3C%2Fstrong%3E%0A%20%20%3Cimg%20src%3D%22https%3A%2F%2Fwww.fillmurray.com%2F50%2F50%22%20width%3D%2250%22%20height%3D%2250%22%20%2F%3E%26nbsp%3B%0A%20%20%3Cimg%20src%3D%22https%3A%2F%2Fwww.fillmurray.com%2F70%2F50%22%20width%3D%2270%22%20height%3D%2250%22%20%2F%3E%26nbsp%3B%0A%20%20%3Cstrong%3Eafter%3C%2Fstrong%3E%0A%3C%2Fp%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0Aimport%20%7B%0A%20%20HTMLContentModel%2C%0A%20%20defaultHTMLElementModels%0A%7D%20from%20'react-native-render-html'%3B%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Cp%20style%3D%22text-align%3Acenter%22%3E%0A%20%20Those%20are%20inline%20images!%3Cbr%2F%3E%3Cbr%2F%3E%0A%20%20%3Cstrong%3Ebefore%3C%2Fstrong%3E%0A%20%20%3Cimg%20src%3D%22https%3A%2F%2Fwww.fillmurray.com%2F50%2F50%22%20width%3D%2250%22%20height%3D%2250%22%20%2F%3E%26nbsp%3B%0A%20%20%3Cimg%20src%3D%22https%3A%2F%2Fwww.fillmurray.com%2F70%2F50%22%20width%3D%2270%22%20height%3D%2250%22%20%2F%3E%26nbsp%3B%0A%20%20%3Cstrong%3Eafter%3C%2Fstrong%3E%0A%3C%2Fp%3E%60%0A%7D%3B%0A%0Aconst%20customHTMLElementModels%20%3D%20%7B%0A%20%20%20%20img%3A%20defaultHTMLElementModels.img.extend(%7B%0A%20%20%20%20%20%20contentModel%3A%20HTMLContentModel.mixed%0A%20%20%20%20%7D)%0A%20%20%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20customHTMLElementModels%3D%7BcustomHTMLElementModels%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Those%20are%20inline%20images!%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22br%22%20data%3D%22%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22br%22%20data%3D%22%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22strong%22%20data%3D%22before%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22img%22%20src%3D%22https%3A%2F%2Fwww.fillmurray.com%2F50%2F50%22%20%2F%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%C2%A0%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22img%22%20src%3D%22https%3A%2F%2Fwww.fillmurray.com%2F70%2F50%22%20%2F%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%C2%A0%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22strong%22%20data%3D%22after%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We used ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElementModel.extend()")," method to change the ",(0,i.kt)("strong",{parentName:"p"},"content model")," for the ",(0,i.kt)("a",{parentName:"p",href:"https://mdn.io/img"},"<","img",">")," tag. This method is immutable: it creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElementModel")," instance. It","'","s thus safe to use this method to create models for new tags derived from models of existing tags.\n"))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You cannot set the ",(0,i.kt)("inlineCode",{parentName:"p"},"contentModel")," dynamically. This is currently a limitation of the ","\u200b",(0,i.kt)("abbr",{about:"A module capable of transforming a DOM tree into a Transient Render Tree",title:"Transient Render Engine"},"TRE"),".\n"))),(0,i.kt)("h2",{id:"component-based-custom-rendering"},"Component-based Custom Rendering"),(0,i.kt)("h3",{id:"minimal-example"},"Minimal Example"),(0,i.kt)("p",null,"You can register custom renderers components with the ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#renderers"},"renderers")," prop."),(0,i.kt)("p",null,"Stop talking, let","'","s try it out. We","'","re going to define a renderer for the ",(0,i.kt)("a",{parentName:"p",href:"https://mdn.io/h1"},"<","h1",">")," element which supports press interactions:"),(0,i.kt)(o.Z,{title:"A Custom Renderer Making H1 Interactive",caption:"A custom renderer taking advantage of onPress prop available in TDefaultRenderer passed component.",version:"6.0.0-alpha.24",html:"%0A%3Carticle%3E%0A%20%20%3Ch1%3EPress%20me!%3C%2Fh1%3E%0A%20%20%3Cp%3E%0A%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%0A%20%20%20%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%0A%20%20%20%20Ut%20enim%20ad%20minim%20veniam.%0A%20%20%3C%2Fp%3E%0A%3C%2Farticle%3E%0A",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0Aimport%20%7B%20Alert%20%7D%20from%20'react-native'%3B%0A%0Afunction%20H1Renderer(%7B%0A%20%20TDefaultRenderer%2C%0A%20%20...props%0A%7D)%20%7B%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20Alert.alert('pressed!')%3B%0A%20%20return%20(%0A%20%20%20%20%3CTDefaultRenderer%0A%20%20%20%20%20%20%7B...props%7D%0A%20%20%20%20%20%20onPress%3D%7BonPress%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20tagsStyles%20%3D%20%7B%0A%20%20article%3A%20%7B%0A%20%20%20%20marginHorizontal%3A%2010%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%0A%3Carticle%3E%0A%20%20%3Ch1%3EPress%20me!%3C%2Fh1%3E%0A%20%20%3Cp%3E%0A%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%0A%20%20%20%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%0A%20%20%20%20Ut%20enim%20ad%20minim%20veniam.%0A%20%20%3C%2Fp%3E%0A%3C%2Farticle%3E%0A%60%0A%7D%3B%0A%0Aconst%20renderers%20%3D%20%7B%0A%20%20h1%3A%20H1Renderer%0A%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20tagsStyles%3D%7BtagsStyles%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20renderers%3D%7Brenderers%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22article%22%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22h1%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Press%20me!%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Lorem%20ipsum%20dolor%20sit%20amet%2C%20consectetur%20adipiscing%20elit%2C%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore%20et%20dolore%20magna%20aliqua.%20Ut%20enim%20ad%20minim%20veniam.%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The wrapper component injected when handling ",(0,i.kt)("inlineCode",{parentName:"p"},"onPress")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"TBlock")," nodes is defined by the ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#genericpressable"},"GenericPressable")," prop. You can also customize the highlight color with ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/renderhtmlprops#pressablehightlightcolor"},"pressableHightlightColor"),". Also note that ",(0,i.kt)("inlineCode",{parentName:"p"},"onPress")," works with textual nodes, in which case the eponym prop of React Native ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/Text"},"Text")," element will be used instead.\n"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"TDefaultRenderer")," can receive ",(0,i.kt)("inlineCode",{parentName:"p"},"textProps")," prop which will be used when rendering a ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," element, and ",(0,i.kt)("inlineCode",{parentName:"p"},"viewProps")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," elements.\n"))),(0,i.kt)("h3",{id:"children-tampering"},"Children Tampering"),(0,i.kt)("p",null,"Let","'","s continue with a common requirement: injecting ads in the body of an article. More precisely, after the 2d and 4th children. To achieve our goal, we are going to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"TChildrenRenderer")," component:"),(0,i.kt)(o.Z,{title:"Inserting Elements at Render Time",caption:'A custom renderer taking advantage of "TChildrenRenderer" component. When "TDefaultRenderer" is given children, those will replace the default children rendering logic, allowing great customizability.',version:"6.0.0-alpha.24",html:"%3Carticle%3E%0A%20%20%20%20%3Cp%3EParagraph%201%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%202%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%203%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%204%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%205%3C%2Fp%3E%0A%20%20%3C%2Farticle%3E",snippet:"import%20React%20from%20'react'%3B%0Aimport%20%7B%20useWindowDimensions%20%7D%20from%20'react-native'%3B%0Aimport%20RenderHtml%20from%20'react-native-render-html'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20TChildrenRenderer%20%7D%20from%20'react-native-render-html'%3B%0A%0Afunction%20AdComponent()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%20backgroundColor%3A%20'purple'%2C%20padding%3A%2010%2C%20alignSelf%3A%20'stretch'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'white'%20%7D%7D%3E%F0%9F%98%88%F0%9F%A4%91%F0%9F%98%88%F0%9F%A4%91%F0%9F%98%88%F0%9F%A4%91%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Afunction%20ArticleWithAds(%7B%0A%20%20TDefaultRenderer%2C%0A%20%20tnode%2C%0A%20%20...defaultRendererProps%0A%7D)%20%7B%0A%20%20const%20firstChildrenChunk%20%3D%20tnode.children.slice(0%2C%202)%3B%0A%20%20const%20secondChildrenChunk%20%3D%20tnode.children.slice(2%2C%204)%3B%0A%20%20const%20thirdChildrenChunk%20%3D%20tnode.children.slice(4)%3B%0A%20%20return%20(%0A%20%20%20%20%3CTDefaultRenderer%20tnode%3D%7Btnode%7D%20%7B...defaultRendererProps%7D%3E%0A%20%20%20%20%20%20%3CTChildrenRenderer%20tchildren%3D%7BfirstChildrenChunk%7D%20%2F%3E%0A%20%20%20%20%20%20%7BfirstChildrenChunk.length%20%3D%3D%3D%202%20%3F%20%3CAdComponent%20%2F%3E%20%3A%20null%7D%0A%20%20%20%20%20%20%3CTChildrenRenderer%20tchildren%3D%7BsecondChildrenChunk%7D%20%2F%3E%0A%20%20%20%20%20%20%7BsecondChildrenChunk.length%20%3D%3D%3D%202%20%3F%20%3CAdComponent%20%2F%3E%20%3A%20null%7D%0A%20%20%20%20%20%20%3CTChildrenRenderer%20tchildren%3D%7BthirdChildrenChunk%7D%20%2F%3E%0A%20%20%20%20%3C%2FTDefaultRenderer%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20source%20%3D%20%7B%0A%20%20html%3A%20%60%3Carticle%3E%0A%20%20%20%20%3Cp%3EParagraph%201%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%202%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%203%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%204%3C%2Fp%3E%0A%20%20%20%20%3Cp%3EParagraph%205%3C%2Fp%3E%0A%20%20%3C%2Farticle%3E%60%0A%7D%3B%0A%0Aconst%20tagsStyles%20%3D%20%7B%0A%20%20article%3A%20%7B%0A%20%20%20%20marginHorizontal%3A%2010%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20renderers%20%3D%20%7B%0A%20%20article%3A%20ArticleWithAds%0A%7D%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%7B%20width%20%7D%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CRenderHtml%0A%20%20%20%20%20%20contentWidth%3D%7Bwidth%7D%0A%20%20%20%20%20%20source%3D%7Bsource%7D%0A%20%20%20%20%20%20tagsStyles%3D%7BtagsStyles%7D%0A%20%20%20%20%20%20renderers%3D%7Brenderers%7D%0A%20%20%20%20%2F%3E%0A%20%20)%3B%0A%7D",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22article%22%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Paragraph%201%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Paragraph%202%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Paragraph%203%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Paragraph%204%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22p%22%3E%0A%20%20%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22Paragraph%205%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3C%2FTBlock%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"RenderHTMLCard"}),(0,i.kt)("p",null,"The foundry API is powerful in terms of rendering customization. It is very easy to insert child elements, while preserving the internal rendering logic."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"TChildrenRenderer")," can receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"renderChild")," prop to customize the rendering logic for each child.\n"))),(0,i.kt)("h3",{id:"renderer-props-summary"},"Renderer Props Summary"),(0,i.kt)("p",null,"A custom renderer will receive the below props:"),(0,i.kt)("ol",{style:{listStyleType:"disc"}},(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tnode"),": the ",(0,i.kt)("inlineCode",{parentName:"p"},"TNode")," to render;")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TDefaultRenderer"),": the default renderer for this ",(0,i.kt)("inlineCode",{parentName:"p"},"TNode"),";")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"InternalRenderer"),": the internal renderer for this ",(0,i.kt)("inlineCode",{parentName:"p"},"tagName"),". An internal renderer is like a custom renderer, but registered internally. If there is no internal renderer registered for this tag, ",(0,i.kt)("inlineCode",{parentName:"p"},"InternalRenderer")," will be equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"TDefaultRenderer"),".")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"style"),": the flatten style object which should be passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TDefaultRenderer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"InternalRenderer"),"element returned by this component;")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"key"),": the key which shall be passed to the root element returned by this component;")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"textProps"),": to use when you render a ",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),"-based element;")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"viewProps"),": to use when you render a ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),"-based element.")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type"),": to check whether a ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," is expected as the root element returned by this component.")),(0,i.kt)("li",null,(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"propsFromParent"),": props passed directly by the parent renderer."))))}c.isMDXComponent=!0}}]);