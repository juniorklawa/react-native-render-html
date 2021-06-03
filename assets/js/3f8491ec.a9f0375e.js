(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2393],{8790:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var n=t(7560),a=t(8283),l=(t(2784),t(9037)),i=t(6785),d={id:"rendering",title:"Rendering",sidebar_position:4,description:"An overview of the rendering step in react-native-render-html."},o={unversionedId:"flow/rendering",id:"flow/rendering",isDocsHomePage:!1,title:"Rendering",description:"An overview of the rendering step in react-native-render-html.",source:"@site/docs/flow/rendering.mdx",sourceDirName:"flow",slug:"/flow/rendering",permalink:"/react-native-render-html/docs/flow/rendering",version:"current",sidebarPosition:4,frontMatter:{id:"rendering",title:"Rendering",sidebar_position:4,description:"An overview of the rendering step in react-native-render-html."},sidebar:"docSidebar",previous:{title:"CSS Processing",permalink:"/react-native-render-html/docs/flow/css-processing"},next:{title:"Migrating to v6",permalink:"/react-native-render-html/docs/migration-guide"}},p=[{value:"Three-layers Rendering Architecture",id:"three-layers-rendering-architecture",children:[]},{value:"Default TNode Renderers",id:"default-tnode-renderers",children:[]},{value:"Custom Renderers",id:"custom-renderers",children:[]},{value:"Internal Renderers",id:"internal-renderers",children:[]}],m={toc:p};function s(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"How ","\u200b",(0,l.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT")," is rendered?"),(0,l.kt)("h2",{id:"three-layers-rendering-architecture"},"Three-layers Rendering Architecture"),(0,l.kt)("p",null,"When you consume the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTML",url:"/react-native-render-html/api/renderhtml",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," component, you are actually using three distinct components. So this (",(0,l.kt)("strong",{parentName:"p"},"implicit 3 layers"),"):"),(0,l.kt)("div",{className:""},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<RenderHTML source={{ html }} />\n"))),(0,l.kt)("p",null,"is equivalent to this (",(0,l.kt)("strong",{parentName:"p"},"explicit 3 layers"),"):"),(0,l.kt)("div",{className:""},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<TRenderEngineProvider>\n  <RenderHTMLConfigProvider>\n    <RenderHTMLSource source={{ html }} />\n  </RenderHTMLConfigProvider>\n</TRenderEngineProvider>\n"))),(0,l.kt)("p",null,"You can actually use the ",(0,l.kt)("strong",{parentName:"p"},"explicit")," three-layer architecture by importing those components:"),(0,l.kt)("div",{className:""},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  TRenderEngineProvider,\n  RenderHTMLConfigProvider,\n  RenderHTMLSource\n} from 'react-native-render-html';\n"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The great benefit of using ",(0,l.kt)("strong",{parentName:"p"},"explicitly")," this three-layers rendering architecture is that the engine and configuration can be put near the top of your App to factor the cost of instantiating the engine. This is ",(0,l.kt)("strong",{parentName:"p"},"especially usefull")," for apps which will render hundreds to thousands of small snippets such as chat apps.\n"))),(0,l.kt)("p",null,"Note that props of the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTML",url:"/react-native-render-html/api/renderhtml",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," component are split between the three layers of the rendering architecture:"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("p",null,"\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"TRenderEngineProvider",url:"/react-native-render-html/api/trenderengineprovider",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Will take all ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTML",url:"/react-native-render-html/api/renderhtml",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," props pertaining to the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"Transient Render Engine",url:"/react-native-render-html/docs/flow/transient-render-engine",type:"doc",full:!1,mdxType:"Reference"})," layer such as ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"customHTMLElementModels",url:"/react-native-render-html/api/renderhtmlprops#customhtmlelementmodels",member:"customHTMLElementModels",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"classesStyles",url:"/react-native-render-html/api/renderhtmlprops#classesstyles",member:"classesStyles",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," (all styling props) and DOM related such as ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"domVisitors",url:"/react-native-render-html/api/renderhtmlprops#domvisitors",member:"domVisitors",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"selectDomRoot",url:"/react-native-render-html/api/renderhtmlprops#selectdomroot",member:"selectDomRoot",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),"... See ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"TRenderEngineConfig",url:"/react-native-render-html/api/trenderengineconfig",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," for a complete reference.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,"\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTMLConfigProvider",url:"/react-native-render-html/api/renderhtmlconfigprovider",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Will take all ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTML",url:"/react-native-render-html/api/renderhtml",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," props pertaining to the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"Rendering",url:"/react-native-render-html/docs/flow/rendering",type:"doc",full:!1,mdxType:"Reference"})," layer such as ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"renderers",url:"/react-native-render-html/api/renderhtmlprops#renderers",member:"renderers",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"renderersProps",url:"/react-native-render-html/api/renderhtmlprops#renderersprops",member:"renderersProps",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"computeEmbeddedMaxWidth",url:"/react-native-render-html/api/renderhtmlprops#computeembeddedmaxwidth",member:"computeEmbeddedMaxWidth",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),", ... See ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTMLConfig",url:"/react-native-render-html/api/renderhtmlconfig",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," for a complete reference.")),(0,l.kt)("dt",null,(0,l.kt)("p",null,"\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTMLSource",url:"/react-native-render-html/api/renderhtmlsource",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Will take all ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTML",url:"/react-native-render-html/api/renderhtml",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," props pertaining to the document such as ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"source",url:"/react-native-render-html/api/renderhtmlprops#source",member:"source",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"onTTreeChange",url:"/react-native-render-html/api/renderhtmlprops#onttreechange",member:"onTTreeChange",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"contentWidth",url:"/react-native-render-html/api/renderhtmlprops#contentwidth",member:"contentWidth",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"}),". See ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"RenderHTMLSourceProps",url:"/react-native-render-html/api/renderhtmlsourceprops",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," for a complete reference."))),(0,l.kt)("h2",{id:"default-tnode-renderers"},"Default TNode Renderers"),(0,l.kt)("p",null,"Each node of the ","\u200b",(0,l.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT")," is translated to a React component in the ",(0,l.kt)("inlineCode",{parentName:"p"},"TNodeRenderer")," component. Internally, ",(0,l.kt)("inlineCode",{parentName:"p"},"TNodeRenderer")," will map each type of ",(0,l.kt)("inlineCode",{parentName:"p"},"TNode")," to its dedicated component. ",(0,l.kt)("inlineCode",{parentName:"p"},"TDocumentRenderer")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"TDocument")," nodes, ",(0,l.kt)("inlineCode",{parentName:"p"},"TBlockRenderer")," for ","\u200b",(0,l.kt)(i.Z,{library:"@native-html/transient-render-engine",name:"TBlock",url:"/react-native-render-html/api/tblock",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," nodes, ",(0,l.kt)("inlineCode",{parentName:"p"},"TPhrasingRenderer")," for ","\u200b",(0,l.kt)(i.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," nodes and ",(0,l.kt)("inlineCode",{parentName:"p"},"TTextRenderer")," for ","\u200b",(0,l.kt)(i.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," nodes."),(0,l.kt)("p",null,"Under the hood, ",(0,l.kt)("inlineCode",{parentName:"p"},"TPhrasingRenderer")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TTextRenderer")," use React Native ","\u200b",(0,l.kt)(i.Z,{full:!1,name:"Text",url:"https://reactnative.dev/docs/Text",type:"rn-symbol",mdxType:"Reference"})," wrapper component, while ",(0,l.kt)("inlineCode",{parentName:"p"},"TBlockRenderer")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TDocumentRenderer")," use React Native ","\u200b",(0,l.kt)(i.Z,{full:!1,name:"View",url:"https://reactnative.dev/docs/View",type:"rn-symbol",mdxType:"Reference"})," wrapper component."),(0,l.kt)("p",null,"Each renderer will pass styles provided by its underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"TNode")," to its React Native wrapper. Children are rendered thanks to the ",(0,l.kt)("inlineCode",{parentName:"p"},"TChildrenRenderer")," component."),(0,l.kt)("h2",{id:"custom-renderers"},"Custom Renderers"),(0,l.kt)("p",null,"Custom renderers are components defined for specific tags. They can be specified with the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"renderers",url:"/react-native-render-html/api/renderhtmlprops#renderers",member:"renderers",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop, which is a mapping of tags with the corresponding components. See the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"Custom Rendering",url:"/react-native-render-html/docs/guides/custom-renderers",type:"doc",full:!1,mdxType:"Reference"})," page. Also note that props targeting those renderers can be passed to a custom renderer via the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"renderersProps",url:"/react-native-render-html/api/renderhtmlprops#renderersprops",member:"renderersProps",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop, which is a mapping of tag names with its corresponding props. Those props can be consumed from the custom renderer via ",(0,l.kt)("inlineCode",{parentName:"p"},"useRendererProps")," hook."),(0,l.kt)("h2",{id:"internal-renderers"},"Internal Renderers"),(0,l.kt)("p",null,"Some tags such as ","\u200b",(0,l.kt)(i.Z,{full:!1,name:"<img>",url:"https://mdn.io/img",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{full:!1,name:"<ol>",url:"https://mdn.io/ol",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{full:!1,name:"<ul>",url:"https://mdn.io/ul",type:"html-el",mdxType:"Reference"})," and ","\u200b",(0,l.kt)(i.Z,{full:!1,name:"<a>",url:"https://mdn.io/a",type:"html-el",mdxType:"Reference"})," are handled by special renderers, namely ",(0,l.kt)("strong",{parentName:"p"},"internal renderers"),". Those renderers can be thought of as ",'"',"internal custom renderers",'"',". See the ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"Images",url:"/react-native-render-html/docs/content/images",type:"doc",full:!1,mdxType:"Reference"}),", ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"Lists",url:"/react-native-render-html/docs/content/lists",type:"doc",full:!1,mdxType:"Reference"})," and ","\u200b",(0,l.kt)(i.Z,{library:"react-native-render-html",name:"Anchors",url:"/react-native-render-html/docs/content/anchors",type:"doc",full:!1,mdxType:"Reference"})," corresponding pages."))}s.isMDXComponent=!0}}]);