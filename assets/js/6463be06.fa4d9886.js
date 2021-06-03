(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8845],{4105:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return v}});var a=n(7560),r=n(8283),l=n(2784),i=n(9037),d=n(6785),o=n(524),m="figure_bGOi",s="figure__caption_2D4m",p="figure__title_36_x",h="arrow_1ZYI";function c(e){var t=e.html,n=e.snapshot,a=e.caption,r=e.title,i=decodeURIComponent(t),d=decodeURIComponent(n);return l.createElement("figure",{className:m},r&&l.createElement("div",{className:p},r),l.createElement(o.Z,{className:"html"},i),l.createElement("div",{className:h},"\u2193"),l.createElement(o.Z,{className:"xml"},d),a&&l.createElement("figcaption",{className:s},a))}var u={id:"transient-render-engine",title:"Transient Render Engine",sidebar_position:3,description:"An overview of the transient render engine features in react-native-render-html."},f={unversionedId:"flow/transient-render-engine",id:"flow/transient-render-engine",isDocsHomePage:!1,title:"Transient Render Engine",description:"An overview of the transient render engine features in react-native-render-html.",source:"@site/docs/flow/transient-render-engine.mdx",sourceDirName:"flow",slug:"/flow/transient-render-engine",permalink:"/react-native-render-html/docs/flow/transient-render-engine",version:"current",sidebarPosition:3,frontMatter:{id:"transient-render-engine",title:"Transient Render Engine",sidebar_position:3,description:"An overview of the transient render engine features in react-native-render-html."},sidebar:"docSidebar",previous:{title:"DOM Tampering",permalink:"/react-native-render-html/docs/guides/dom-tampering"},next:{title:"CSS Processing",permalink:"/react-native-render-html/docs/flow/css-processing"}},v=[{value:"Element Models",id:"element-models",children:[{value:"HTMLElementModel",id:"htmlelementmodel",children:[]},{value:"HTMLContentModel",id:"htmlcontentmodel",children:[]}]},{value:"Steps",id:"steps",children:[{value:"Translation",id:"translation",children:[]},{value:"Hoisting",id:"hoisting",children:[]},{value:"Whitespace Collapsing",id:"whitespace-collapsing",children:[]}]},{value:"Anatomy of a TNode",id:"anatomy-of-a-tnode",children:[]},{value:"Markers",id:"markers",children:[]}],k={toc:v};function y(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article is an introduction to the ","\u200b",(0,i.kt)("abbr",{about:"A module capable of transforming a DOM tree into a Transient Render Tree",title:"Transient Render Engine"},"TRE")," architecture."),(0,i.kt)("h2",{id:"element-models"},"Element Models"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Element models")," form the building block of the engine. These models specify how a DOM element of a peculiar tag should be translated. You can tamper with those models and add you own models, making this library extremly customizable."),(0,i.kt)("h3",{id:"htmlelementmodel"},"HTMLElementModel"),(0,i.kt)("p",null,"To each standard tag is attached an ",(0,i.kt)("strong",{parentName:"p"},"element model"),", instance of the ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLElementModel",url:"/react-native-render-html/api/htmlelementmodel",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," class. Such model has multiple fields describing different behaviors related to translation of those DOM elements:"),(0,i.kt)("dl",null,(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLElementModel",url:"/react-native-render-html/api/htmlelementmodel#contentmodel",member:"contentModel",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"How should this tag be translated? See next chapter.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLElementModel",url:"/react-native-render-html/api/htmlelementmodel#isvoid",member:"isVoid",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"Will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for ",(0,i.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/syntax.html#void-elements"},"void elements")," , e.g. DOM elements which can","'","t have children.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLElementModel",url:"/react-native-render-html/api/htmlelementmodel#isopaque",member:"isOpaque",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"Will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for those elements which children should not be translated. Useful for ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<svg>",url:"https://mdn.io/svg",type:"html-el",mdxType:"Reference"})," and other custom markups.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLElementModel",url:"/react-native-render-html/api/htmlelementmodel#mixeduastyles",member:"mixedUAStyles",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"Mixed User-Agent styles, e.g. default styles for this element. This is how default styles are set for tags.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLElementModel",url:"/react-native-render-html/api/htmlelementmodel#getuaderivedstylefromattributes",member:"getUADerivedStyleFromAttributes",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"A function which returns mixed UA styles given the DOM node ",(0,i.kt)("strong",{parentName:"p"},"attributes")," and ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"Markers",url:"/react-native-render-html/api/markers",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),"."))),(0,i.kt)("h3",{id:"htmlcontentmodel"},"HTMLContentModel"),(0,i.kt)("p",null,"There are 4 content models that can be attached to a tag:"),(0,i.kt)("dl",null,(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLContentModel",url:"/react-native-render-html/api/htmlcontentmodel#textual",member:"textual",full:!0,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"For elements which can be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," or ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". Examples: ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<span>",url:"https://mdn.io/span",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<strong>",url:"https://mdn.io/strong",type:"html-el",mdxType:"Reference"})," ...")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLContentModel",url:"/react-native-render-html/api/htmlcontentmodel#block",member:"block",full:!0,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"For elements which can only be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TBlock",url:"/react-native-render-html/api/tblock",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". Examples: ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<div>",url:"https://mdn.io/div",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<p>",url:"https://mdn.io/p",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<article>",url:"https://mdn.io/article",type:"html-el",mdxType:"Reference"})," ...")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLContentModel",url:"/react-native-render-html/api/htmlcontentmodel#mixed",member:"mixed",full:!0,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"(rare) for elements which can be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," or ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TBlock",url:"/react-native-render-html/api/tblock",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". The sole mixed elements are ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<a>",url:"https://mdn.io/a",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<ins>",url:"https://mdn.io/ins",type:"html-el",mdxType:"Reference"})," and ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<del>",url:"https://mdn.io/del",type:"html-el",mdxType:"Reference"}),".")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"HTMLContentModel",url:"/react-native-render-html/api/htmlcontentmodel#none",member:"none",full:!0,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"For element which shall not be rendered and will be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TEmpty",url:"/react-native-render-html/api/tempty",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". Examples: ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<button>",url:"https://mdn.io/button",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<map>",url:"https://mdn.io/map",type:"html-el",mdxType:"Reference"})," ..."))),(0,i.kt)("p",null,"A powerful feature of the ",(0,i.kt)("strong",{parentName:"p"},"Foundry")," engine is that the models attached to a tag name can be customized! See the ","\u200b",(0,i.kt)(d.Z,{library:"react-native-render-html",name:"Custom Rendering",url:"/react-native-render-html/docs/guides/custom-renderers",type:"doc",full:!1,mdxType:"Reference"})," page."),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("p",null,"The ","\u200b",(0,i.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT")," construction is broadly comprised of three steps."),(0,i.kt)("h3",{id:"translation"},"Translation"),(0,i.kt)("p",null,"Each DOM element is translated to a ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". The translation will obide by the following rules:"),(0,i.kt)("ol",{style:{listStyleType:"disc"}},(0,i.kt)("li",null,(0,i.kt)("p",null,"The root of the document will be translated to a ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TDocument",url:"/react-native-render-html/api/tdocument",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," node. This node has a special ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," field which holds metadata harvested in the ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<head>",url:"https://mdn.io/head",type:"html-el",mdxType:"Reference"})," DOM element (see ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"DocumentMetadata",url:"/react-native-render-html/api/documentmetadata",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),").")),(0,i.kt)("li",null,(0,i.kt)("p",null,"Text nodes will be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),", and will be merged with a parent DOM element if the parent","'","s ",(0,i.kt)("strong",{parentName:"p"},"content model")," is ",(0,i.kt)("strong",{parentName:"p"},"textual")," or ",(0,i.kt)("strong",{parentName:"p"},"mixed")," when they are its only child. For example, a Text node with no siblings which parent is a ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<span>",url:"https://mdn.io/span",type:"html-el",mdxType:"Reference"})," will be merged into a ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," with ",(0,i.kt)("inlineCode",{parentName:"p"},"tagName")," set to ",'"',"span",'"',".")),(0,i.kt)("li",null,(0,i.kt)("p",null,"DOM elements which content model is ",(0,i.kt)("strong",{parentName:"p"},"textual")," with multiple children will be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," nodes.")),(0,i.kt)("li",null,(0,i.kt)("p",null,"DOM elements with children which ",(0,i.kt)("strong",{parentName:"p"},"content model")," is ",(0,i.kt)("strong",{parentName:"p"},"mixed")," will be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," if they only have ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," or ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," children, ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TBlock",url:"/react-native-render-html/api/tblock",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," otherwise.")),(0,i.kt)("li",null,(0,i.kt)("p",null,"DOM elements which ",(0,i.kt)("strong",{parentName:"p"},"content model")," is ",(0,i.kt)("strong",{parentName:"p"},"block")," will be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TBlock",url:"/react-native-render-html/api/tblock",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," nodes.")),(0,i.kt)("li",null,(0,i.kt)("p",null,"Finally, DOM elements which ",(0,i.kt)("strong",{parentName:"p"},"content model")," is ",(0,i.kt)("strong",{parentName:"p"},"none")," will be translated to ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TEmpty",url:"/react-native-render-html/api/tempty",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),".")),(0,i.kt)("li",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{full:!1,name:"<script>",url:"https://mdn.io/script",type:"html-el",mdxType:"Reference"}),", comments and ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<style>",url:"https://mdn.io/style",type:"html-el",mdxType:"Reference"})," DOM nodes will be ignored."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A DOM element might be untranslatable for a variety of reasons. For example, its name is not a standard HTML5 element and there is no custom HTML element model registered for it. An other reason is that it is an interactive element such as a form, input or button.\n"))),(0,i.kt)("p",null,"In addition, inline styles, User Agent styles and mixed styles are processed by the CSS Processor, see ","\u200b",(0,i.kt)(d.Z,{library:"react-native-render-html",name:"CSS Processing",url:"/react-native-render-html/docs/flow/css-processing",type:"doc",full:!1,mdxType:"Reference"})," for more details."),(0,i.kt)("p",null,"Below is an example of a ",(0,i.kt)("strong",{parentName:"p"},"translation")," transformation from HTML to ","\u200b",(0,i.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT"),":"),(0,i.kt)(c,{caption:"This flow depicts the translation step. The TRT is represented in a JSX-like format thanks to TNode.snapshot() method.",html:"%3Ca%20href%3D%22https%3A%2F%2Fdomain.com%22%3E%0AThis%20is%0A%3Cspan%3Ephrasing%20content%3C%2Fspan%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fdomain.com%2Flogo.jpg%22%20%2F%3E%0A%20%20%20%20and%20this%20is%20%3Cstrong%3Etoo%3C%2Fstrong%3E.%0A%3C%2Fa%3E",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTPhrasing%20tagName%3D%22a%22%20href%3D%22https%3A%2F%2Fdomain.com%22%3E%0A%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5CnThis%20is%5Cn%22%20%2F%3E%0A%20%20%20%20%20%20%3CTText%20tagName%3D%22span%22%20data%3D%22phrasing%20content%22%20%2F%3E%0A%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5Cn%22%20%2F%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22img%22%20src%3D%22https%3A%2F%2Fdomain.com%2Flogo.jpg%22%20%2F%3E%0A%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5Cn%20%20%20%20and%20this%20is%20%22%20%2F%3E%0A%20%20%20%20%20%20%3CTText%20tagName%3D%22strong%22%20data%3D%22too%22%20%2F%3E%0A%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22.%5Cn%22%20%2F%3E%0A%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"TNodeTransformDisplay"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will notice that a ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<body>",url:"https://mdn.io/body",type:"html-el",mdxType:"Reference"})," has been added, and the root is an instance of ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TDocument",url:"/react-native-render-html/api/tdocument",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". This process is called ",(0,i.kt)("strong",{parentName:"p"},"normalization"),", and is also performed by Web browsers.\n"))),(0,i.kt)("h3",{id:"hoisting"},"Hoisting"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"hoisting phase")," consists in enforcing a basic constraint:"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The Hoisting Constraint")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," node should only have ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," and ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TEmpty",url:"/react-native-render-html/api/tempty",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," nodes as children.\n"))),(0,i.kt)("p",null,"Therefore, any ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TBlock",url:"/react-native-render-html/api/tblock",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," child of a ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," node will be recursively ",(0,i.kt)("strong",{parentName:"p"},"hoisted")," to the parent, until it meets that constraint. This constraint must be enforced to insure that a React Native ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"Text",url:"https://reactnative.dev/docs/Text",type:"rn-symbol",mdxType:"Reference"})," elements have no ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"View",url:"https://reactnative.dev/docs/View",type:"rn-symbol",mdxType:"Reference"})," children, since it will break the default box model and might lead to bugs and inconsistencies. This constraint is depicted below:"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"The View Constraint")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"React Native ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"Text",url:"https://reactnative.dev/docs/Text",type:"rn-symbol",mdxType:"Reference"})," elements should not have ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"View",url:"https://reactnative.dev/docs/View",type:"rn-symbol",mdxType:"Reference"})," elements as children.\n"))),(0,i.kt)("p",null,"On one hand ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TBlock",url:"/react-native-render-html/api/tblock",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," will be translated to ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"View",url:"https://reactnative.dev/docs/View",type:"rn-symbol",mdxType:"Reference"})," elements and on the other hand ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TPhrasing",url:"/react-native-render-html/api/tphrasing",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," and ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TText",url:"/react-native-render-html/api/ttext",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," nodes will be translated to ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"Text",url:"https://reactnative.dev/docs/Text",type:"rn-symbol",mdxType:"Reference"})," elements. Therefore, enforcing ",(0,i.kt)("strong",{parentName:"p"},"The Hoisting Constraint")," in the ","\u200b",(0,i.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT")," results in enforcing ",(0,i.kt)("strong",{parentName:"p"},"The View Constraint")," at render time. You can disable ",(0,i.kt)("strong",{parentName:"p"},"hoisting")," via ","\u200b",(0,i.kt)(d.Z,{library:"react-native-render-html",name:"dangerouslyDisableHoisting",url:"/react-native-render-html/api/renderhtmlprops#dangerouslydisablehoisting",member:"dangerouslyDisableHoisting",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop, but be advised this is yet experimental."),(0,i.kt)("p",null,"Below is an example of ",(0,i.kt)("strong",{parentName:"p"},"translation + hoisting")," transformation from HTML to ","\u200b",(0,i.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT"),":"),(0,i.kt)(c,{caption:"Notice that contrary to the translate-only example, the <a> element is now wrapped in a TBlock. Also, text preceding and following the <img> tag are wrapped in an anonymous TPhrasing node.",html:"%3Ca%20href%3D%22https%3A%2F%2Fdomain.com%22%3E%0AThis%20is%0A%3Cspan%3Ephrasing%20content%3C%2Fspan%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fdomain.com%2Flogo.jpg%22%20%2F%3E%0A%20%20%20%20and%20this%20is%20%3Cstrong%3Etoo%3C%2Fstrong%3E.%0A%3C%2Fa%3E",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22a%22%20href%3D%22https%3A%2F%2Fdomain.com%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5CnThis%20is%5Cn%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22span%22%20data%3D%22phrasing%20content%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5Cn%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22img%22%20src%3D%22https%3A%2F%2Fdomain.com%2Flogo.jpg%22%20%2F%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22%5Cn%20%20%20%20and%20this%20is%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22strong%22%20data%3D%22too%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22.%5Cn%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"TNodeTransformDisplay"}),(0,i.kt)("h3",{id:"whitespace-collapsing"},"Whitespace Collapsing"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"whitespace collapsing phase")," consists in implementing the algorithm associated with the ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"white-space",url:"https://mdn.io/white-space",type:"css-prop",mdxType:"Reference"})," CSS property, depicted in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/css-text-3/"},"CSS Text Module Level 3")," standard, by which unsignificant white-spaces are removed from the ","\u200b",(0,i.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT"),". You can disable ",(0,i.kt)("strong",{parentName:"p"},"hoisting")," via ","\u200b",(0,i.kt)(d.Z,{library:"react-native-render-html",name:"dangerouslyDisableWhitespaceCollapsing",url:"/react-native-render-html/api/renderhtmlprops#dangerouslydisablewhitespacecollapsing",member:"dangerouslyDisableWhitespaceCollapsing",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop, but be advised this is yet experimental."),(0,i.kt)("p",null,"Below is an example of ",(0,i.kt)("strong",{parentName:"p"},"translating + hoisting + collapsing")," transformation from HTML to ","\u200b",(0,i.kt)("abbr",{about:"Structured data matching closely the React tree to render.",title:"Transient Render Tree"},"TRT"),":"),(0,i.kt)(c,{caption:"Notice when comparing with the previous example, the line returns and extraneous spaces have been removed.",html:"%3Ca%20href%3D%22https%3A%2F%2Fdomain.com%22%3E%0AThis%20is%0A%3Cspan%3Ephrasing%20content%3C%2Fspan%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fdomain.com%2Flogo.jpg%22%20%2F%3E%0A%20%20%20%20and%20this%20is%20%3Cstrong%3Etoo%3C%2Fstrong%3E.%0A%3C%2Fa%3E",snapshot:"%3CTDocument%20tagName%3D%22html%22%3E%0A%20%20%3CTBlock%20tagName%3D%22body%22%3E%0A%20%20%20%20%3CTBlock%20tagName%3D%22a%22%20href%3D%22https%3A%2F%2Fdomain.com%22%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22This%20is%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22span%22%20data%3D%22phrasing%20content%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%20%20%3CTBlock%20tagName%3D%22img%22%20src%3D%22https%3A%2F%2Fdomain.com%2Flogo.jpg%22%20%2F%3E%0A%20%20%20%20%20%20%3CTPhrasing%20anonymous%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22and%20this%20is%20%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20tagName%3D%22strong%22%20data%3D%22too%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTText%20anonymous%20data%3D%22.%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTPhrasing%3E%0A%20%20%20%20%3C%2FTBlock%3E%0A%20%20%3C%2FTBlock%3E%0A%3C%2FTDocument%3E",mdxType:"TNodeTransformDisplay"}),(0,i.kt)("h2",{id:"anatomy-of-a-tnode"},"Anatomy of a TNode"),(0,i.kt)("p",null,"A ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," has the following relevant fields (see ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," for a reference):"),(0,i.kt)("dl",null,(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#attributes",member:"attributes",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"The list of attributes attached to the underlying DOM Node.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#id",member:"id",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"The id attached to the underlying DOM Node.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#classes",member:"classes",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"An array of classes associated with the underlying DOM Node.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#domnode",member:"domNode",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"The underlying DOM Node, if present.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#tagname",member:"tagName",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"The tag name attached to the underlying DOM Node.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#parent",member:"parent",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"The parent ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),", if present, determined ",(0,i.kt)("strong",{parentName:"p"},"before hoisting"),".")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#nodeindex",member:"nodeIndex",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"The position of this element relative to its parent, ",(0,i.kt)("strong",{parentName:"p"},"before hoisting")," and ",(0,i.kt)("strong",{parentName:"p"},"after whitespace collapsing"),".")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#children",member:"children",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"An array of ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," descendents to this node.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#type",member:"type",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"type")," of this ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". Either ",(0,i.kt)("strong",{parentName:"p"},"text"),", ",(0,i.kt)("strong",{parentName:"p"},"phrasing"),", ",(0,i.kt)("strong",{parentName:"p"},"block"),", ",(0,i.kt)("strong",{parentName:"p"},"document")," or ",(0,i.kt)("strong",{parentName:"p"},"empty"),".")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#markers",member:"markers",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"A registry of markers for this ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}),". See explaination in below section.")),(0,i.kt)("dt",null,(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNodeShape",url:"/react-native-render-html/api/tnodeshape#snapshot",member:"snapshot",full:!1,type:"api-def",plural:void 0,mdxType:"Reference"}))),(0,i.kt)("dd",null,(0,i.kt)("p",null,"A utility function to create a JSX-like string representation of this node and its children. ",(0,i.kt)("strong",{parentName:"p"},"Very handy for debugging.")))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"styles")," field which is not listed here ",(0,i.kt)("strong",{parentName:"p"},"is not")," consumable as a React Native component ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," prop.\n"))),(0,i.kt)("h2",{id:"markers"},"Markers"),(0,i.kt)("p",null,"\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"Markers",url:"/react-native-render-html/api/markers",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," form an abstraction in which one ","\u200b",(0,i.kt)(d.Z,{library:"@native-html/transient-render-engine",name:"TNode",url:"/react-native-render-html/api/tnode",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," provides semantic information to itself and all its descendants. For example, ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<ins>",url:"https://mdn.io/ins",type:"html-el",mdxType:"Reference"})," elements, which stand for ",'"',"insertion",'"'," of content in the context of an edit will provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"edits")," marker with value ",(0,i.kt)("inlineCode",{parentName:"p"},'"ins"')," to all its descendants. Similarly, ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<a>",url:"https://mdn.io/a",type:"html-el",mdxType:"Reference"}),", ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<ol>",url:"https://mdn.io/ol",type:"html-el",mdxType:"Reference"})," and ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"<ul>",url:"https://mdn.io/ul",type:"html-el",mdxType:"Reference"})," elements will set their own markers. List markers such as ",(0,i.kt)("inlineCode",{parentName:"p"},"olNestLevel")," are integers which are incremented each time a list is nested."),(0,i.kt)("p",null,"Markers can also be derived from attributes. This is the case with ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"dir",url:"https://mdn.io/attribute/dir",type:"html-attr",mdxType:"Reference"})," and ","\u200b",(0,i.kt)(d.Z,{full:!1,name:"lang",url:"https://mdn.io/attribute/lang",type:"html-attr",mdxType:"Reference"})," attributes. Finally, you can customize the markers extraction logic with ","\u200b",(0,i.kt)(d.Z,{library:"react-native-render-html",name:"setMarkersForTNode",url:"/react-native-render-html/api/renderhtmlprops#setmarkersfortnode",member:"setMarkersForTNode",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop."))}y.isMDXComponent=!0}}]);