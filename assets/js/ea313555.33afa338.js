(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7937],{4975:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var n=r(7560),a=r(8283),o=(r(2784),r(9037)),i=r(6785),s={id:"faq",title:"FAQ",sidebar_position:7,description:"Frequently Asked Questions"},l={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Frequently Asked Questions",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/react-native-render-html/docs/faq",version:"current",sidebarPosition:7,frontMatter:{id:"faq",title:"FAQ",sidebar_position:7,description:"Frequently Asked Questions"},sidebar:"docSidebar",previous:{title:"Rendering",permalink:"/react-native-render-html/docs/flow/rendering"},next:{title:"Migrating to v6",permalink:"/react-native-render-html/docs/migration-guide"}},d=[{value:"How To",id:"how-to",children:[{value:"How to intercept press events on links?",id:"how-to-intercept-press-events-on-links",children:[]},{value:"I want to use a custom component to render some tags, how to do that?",id:"i-want-to-use-a-custom-component-to-render-some-tags-how-to-do-that",children:[]},{value:"How to access the raw HTML from a custom renderer?",id:"how-to-access-the-raw-html-from-a-custom-renderer",children:[]},{value:"How to render iframes?",id:"how-to-render-iframes",children:[]},{value:"How to set the default font size and family?",id:"how-to-set-the-default-font-size-and-family",children:[]},{value:"How to render inline images?",id:"how-to-render-inline-images",children:[]},{value:"Aren&#39;t there better renderers for tables?",id:"arent-there-better-renderers-for-tables",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Some props such as styling props don&#39;t cause a re-render, what&#39;s wrong?",id:"some-props-such-as-styling-props-dont-cause-a-re-render-whats-wrong",children:[]},{value:"Custom font families don&#39;t work, what&#39;s happening?",id:"custom-font-families-dont-work-whats-happening",children:[]},{value:"The application crashes on Android with react-native-screens",id:"the-application-crashes-on-android-with-react-native-screens",children:[]},{value:"Unable to resolve XXX from node_modules/YYY",id:"unable-to-resolve-xxx-from-node_modulesyyy",children:[]},{value:"Long image can not show in full screen on Android",id:"long-image-can-not-show-in-full-screen-on-android",children:[]}]}],p={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to"},"How To"),(0,o.kt)("h3",{id:"how-to-intercept-press-events-on-links"},"How to intercept press events on links?"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"renderersProps.a.onPress"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63114501/2779871"},"Stack Overflow | How to open the browser when a link is pressed?")," and ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"RenderersProps",url:"/react-native-render-html/api/renderersprops#a",member:"a",full:!0,type:"api-def",plural:void 0,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"i-want-to-use-a-custom-component-to-render-some-tags-how-to-do-that"},"I want to use a custom component to render some tags, how to do that?"),(0,o.kt)("p",null,"You can define custom renderers for that purpose. See ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"Custom Rendering",url:"/react-native-render-html/docs/guides/custom-renderers",type:"doc",full:!1,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"how-to-access-the-raw-html-from-a-custom-renderer"},"How to access the raw HTML from a custom renderer?"),(0,o.kt)("p",null,"Use ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"domNodeToHTMLString",url:"/react-native-render-html/api/domnodetohtmlstring",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," utility. See ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63979897/2779871"},"Stack Overflow | Extract raw HTML in react-native-render-html custom renderers"),"."),(0,o.kt)("h3",{id:"how-to-render-iframes"},"How to render iframes?"),(0,o.kt)("p",null,"That","'","s really a piece of cake. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/native-html/plugins/tree/master/packages/iframe-plugin#readme"},"@native-html/iframe-plugin"),"."),(0,o.kt)("h3",{id:"how-to-set-the-default-font-size-and-family"},"How to set the default font size and family?"),(0,o.kt)("p",null,"You should use ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"baseStyle",url:"/react-native-render-html/api/renderhtmlprops#basestyle",member:"baseStyle",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop."),(0,o.kt)("h3",{id:"how-to-render-inline-images"},"How to render inline images?"),(0,o.kt)("p",null,"See this example from the docs: ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"Example: Displaying Inline Images",url:"/react-native-render-html/docs/guides/custom-renderers#example-displaying-inline-images",type:"doc",full:!1,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"arent-there-better-renderers-for-tables"},"Aren","'","t there better renderers for tables?"),(0,o.kt)("p",null,"Sure! The default renderer is very limitted. Check-out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/native-html/plugins/tree/master/packages/table-plugin#readme"},"@native-html/table-plugin")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/native-html/plugins/tree/master/packages/heuristic-table-plugin#readme"},"@native-html/heuristic-table-plugin"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"some-props-such-as-styling-props-dont-cause-a-re-render-whats-wrong"},"Some props such as styling props don","'","t cause a re-render, what","'","s wrong?"),(0,o.kt)("p",null,"Props for the ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"TRenderEngineConfig",url:"/react-native-render-html/api/trenderengineconfig",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," component such as styling props are ",'"',"cold",'"',", because a rebuild of the engine is costly. To circumvent the issue, you can whitelist props which should be reactive via ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"triggerTREInvalidationPropNames",url:"/react-native-render-html/api/renderhtmlprops#triggertreinvalidationpropnames",member:"triggerTREInvalidationPropNames",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop."),(0,o.kt)("h3",{id:"custom-font-families-dont-work-whats-happening"},"Custom font families don","'","t work, what","'","s happening?"),(0,o.kt)("p",null,"You must register fonts available in your app with ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"systemFonts",url:"/react-native-render-html/api/renderhtmlprops#systemfonts",member:"systemFonts",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop. This feature is called ",(0,o.kt)("strong",{parentName:"p"},"font selection")," and prevents native crashes caused by missing fonts! See ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"Font Selection",url:"/react-native-render-html/docs/content/textual#font-selection",type:"doc",full:!1,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"the-application-crashes-on-android-with-react-native-screens"},"The application crashes on Android with react-native-screens"),(0,o.kt)("p",null,"Likely a bug between ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-webview")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-screens"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63171131/2779871"},"Stack Overflow | When rendering iframes, Android crashes while navigating back to stack screen"),"."),(0,o.kt)("h3",{id:"unable-to-resolve-xxx-from-node_modulesyyy"},"Unable to resolve XXX from node_modules/YYY"),(0,o.kt)("p",null,"Probably an issue with your package manager. See ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63053425/2779871"},"Stack Overflow | Unable to resolve XXX from module YYY"),"."),(0,o.kt)("h3",{id:"long-image-can-not-show-in-full-screen-on-android"},"Long image can not show in full screen on Android"),(0,o.kt)("p",null,"This is a limitation of FaceBook","'","s fresco library and React Native ","\u200b",(0,o.kt)(i.Z,{full:!1,name:"Image",url:"https://reactnative.dev/docs/Image",type:"rn-symbol",mdxType:"Reference"})," component. You need to downsize the image."))}c.isMDXComponent=!0}}]);