(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8108],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return Pe},kt:function(){return Le}});var r=n(2784),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function o(e){var t={exports:{}};return e(t,t.exports),t.exports}var a=function(e){return e&&e.Math==Math&&e},s=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof i&&i)||function(){return this}()||Function("return this")(),l=function(e){try{return!!e()}catch(e){return!0}},c=!l((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),p={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,d={f:u&&!p.call({1:2},1)?function(e){var t=u(this,e);return!!t&&t.enumerable}:p},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,f="".split,v=l((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?f.call(e,""):Object(e)}:Object,g=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},y=function(e){return v(g(e))},k=function(e){return"object"==typeof e?null!==e:"function"==typeof e},w=function(e,t){if(!k(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!k(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!k(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!k(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,N=function(e,t){return b.call(e,t)},x=s.document,T=k(x)&&k(x.createElement),S=!c&&!l((function(){return 7!=Object.defineProperty(T?x.createElement("div"):{},"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,j={f:c?O:function(e,t){if(e=y(e),t=w(t,!0),S)try{return O(e,t)}catch(e){}if(N(e,t))return h(!d.f.call(e,t),e[t])}},C=function(e){if(!k(e))throw TypeError(String(e)+" is not an object");return e},M=Object.defineProperty,E={f:c?M:function(e,t,n){if(C(e),t=w(t,!0),C(n),S)try{return M(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=c?function(e,t,n){return E.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},D=function(e,t){try{P(s,e,t)}catch(o){s[e]=t}return t},R=s["__core-js_shared__"]||D("__core-js_shared__",{}),L=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return L.call(e)});var H,V,_,I=R.inspectSource,W=s.WeakMap,z="function"==typeof W&&/native code/.test(I(W)),F=o((function(e){(e.exports=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),A=0,U=Math.random(),q=F("keys"),B={};if(z){var X=R.state||(R.state=new(0,s.WeakMap)),Y=X.get,Z=X.has,G=X.set;H=function(e,t){return t.facade=e,G.call(X,e,t),t},V=function(e){return Y.call(X,e)||{}},_=function(e){return Z.call(X,e)}}else{var $=q.state||(q.state="Symbol("+String("state")+")_"+(++A+U).toString(36));B[$]=!0,H=function(e,t){return t.facade=e,P(e,$,t),t},V=function(e){return N(e,$)?e[$]:{}},_=function(e){return N(e,$)}}var K={set:H,get:V,has:_,enforce:function(e){return _(e)?V(e):H(e,{})},getterFor:function(e){return function(t){var n;if(!k(t)||(n=V(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=o((function(e){var t=K.get,n=K.enforce,r=String(String).split("String");(e.exports=function(e,t,i,o){var a,l=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,p=!!o&&!!o.noTargetGet;"function"==typeof i&&("string"!=typeof t||N(i,"name")||P(i,"name",t),(a=n(i)).source||(a.source=r.join("string"==typeof t?t:""))),e!==s?(l?!p&&e[t]&&(c=!0):delete e[t],c?e[t]=i:P(e,t,i)):c?e[t]=i:D(t,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||I(this)}))})),Q=s,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},ie=Math.min,oe=Math.max,ae=Math.min,se=function(e){return function(t,n,r){var i,o,a=y(t),s=(i=a.length)>0?ie(re(i),9007199254740991):0,l=function(e,t){var n=re(e);return n<0?oe(n+t,0):ae(n,t)}(r,s);if(e&&n!=n){for(;s>l;)if((o=a[l++])!=o)return!0}else for(;s>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}},le=(se(!0),se(!1)),ce=function(e,t){var n,r=y(e),i=0,o=[];for(n in r)!N(B,n)&&N(r,n)&&o.push(n);for(;t.length>i;)N(r,n=t[i++])&&(~le(o,n)||o.push(n));return o},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ue=pe.concat("length","prototype"),de={f:Object.getOwnPropertyNames||function(e){return ce(e,ue)}},he={f:Object.getOwnPropertySymbols},me=function(e,t){return arguments.length<2?ee(Q[e])||ee(s[e]):Q[e]&&Q[e][t]||s[e]&&s[e][t]}("Reflect","ownKeys")||function(e){var t=de.f(C(e)),n=he.f;return n?t.concat(n(e)):t},fe=function(e,t){for(var n=me(t),r=E.f,i=j.f,o=0;o<n.length;o++){var a=n[o];N(e,a)||r(e,a,i(t,a))}},ve=/#|\.prototype\./,ge=function(e,t){var n=ke[ye(e)];return n==be||n!=we&&("function"==typeof t?l(t):!!t)},ye=ge.normalize=function(e){return String(e).replace(ve,".").toLowerCase()},ke=ge.data={},we=ge.NATIVE="N",be=ge.POLYFILL="P",Ne=ge,xe=j.f,Te=Object.keys||function(e){return ce(e,pe)},Se=function(e){return Object(g(e))},Oe=Object.assign,je=Object.defineProperty,Ce=!Oe||l((function(){if(c&&1!==Oe({b:1},Oe(je({},"a",{enumerable:!0,get:function(){je(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=Oe({},e)[n]||Te(Oe({},t)).join("")!=r}))?function(e,t){for(var n=Se(e),r=arguments.length,i=1,o=he.f,a=d.f;r>i;)for(var s,l=v(arguments[i++]),p=o?Te(l).concat(o(l)):Te(l),u=p.length,h=0;u>h;)s=p[h++],c&&!a.call(l,s)||(n[s]=l[s]);return n}:Oe;!function(e,t){var n,r,i,o,a,l=e.target,c=e.global,p=e.stat;if(n=c?s:p?s[l]||D(l,{}):(s[l]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(a=xe(n,r))&&a.value:n[r],!Ne(c?r:l+(p?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;fe(o,i)}(e.sham||i&&i.sham)&&P(o,"sham",!0),J(n,r,o,e)}}({target:"Object",stat:!0,forced:Object.assign!==Ce},{assign:Ce});const Me=r.createContext({}),Ee=e=>{const t=r.useContext(Me);return"function"==typeof e?e(t):Object.assign({},t,e)},Pe=({components:e,children:t,disableParentContext:n})=>{let i=Ee(e);return n&&(i=e),r.createElement(Me.Provider,{value:i},t)},De={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},Re=r.forwardRef(((e,t)=>{const{components:n,mdxType:i,originalType:o,parentName:a}=e,s=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(e,["components","mdxType","originalType","parentName"]),l=Ee(n);return r.createElement(l[`${a}.${i}`]||l[i]||De[i]||o,n?Object.assign({ref:t},s,{components:n}):Object.assign({ref:t},s))}));function Le(e,t){const n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){const o=n.length,a=new Array(o);a[0]=Re;const s={};for(let e in t)hasOwnProperty.call(t,e)&&(s[e]=t[e]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(let e=2;e<o;e++)a[e]=n[e];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}Re.displayName="MDXCreateElement",Le.Fragment=r.Fragment},5317:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(7560),i=n(8283),o=(n(2784),n(9037)),a={id:"reinvent-the-wheel",title:"Reinvent the Wheel",sidebar_position:1,description:"How to implement a super simple HTML renderer in React Native?"},s={unversionedId:"reinvent-the-wheel",id:"reinvent-the-wheel",isDocsHomePage:!1,title:"Reinvent the Wheel",description:"How to implement a super simple HTML renderer in React Native?",source:"@site/docs/reinvent-the-wheel.mdx",sourceDirName:".",slug:"/reinvent-the-wheel",permalink:"/react-native-render-html/docs/reinvent-the-wheel",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reinvent-the-wheel.mdx",version:"current",sidebarPosition:1,frontMatter:{id:"reinvent-the-wheel",title:"Reinvent the Wheel",sidebar_position:1,description:"How to implement a super simple HTML renderer in React Native?"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/react-native-render-html/docs/architecture"},next:{title:"Textual",permalink:"/react-native-render-html/docs/content/textual"}},l=[{value:"Implementation",id:"implementation",children:[]},{value:"Discussion",id:"discussion",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To understand how this library works, we propose a teeny, tiny implementation of an HTML renderer in just about ",(0,o.kt)("strong",{parentName:"p"},"40 lines of code"),". Of course, it has many limitations that are overcomed by ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-render-html"),", but it will give you a good glimpse at how things work internally."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"To do so, we will need an HTML parsing library which will give us some sort of proxy DOM representation of the HTML source. In this very example, we will use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fb55/htmlparser2#readme"},"htmlparser2")," libarary:"),(0,o.kt)("div",{className:"codeblock--with-line-numbers"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="RenderHtml.jsx"',title:'"RenderHtml.jsx"'},"import {Text, View} from 'react-native';\nimport {parseDocument, ElementType} from 'htmlparser2';\nimport React, {PureComponent} from 'react';\n\nexport default class RenderHtml extends PureComponent {\n  ignoredTags = ['head'];\n  textTags = ['span', 'strong', 'em'];\n\n  renderTextNode(textNode, index) {\n    return <Text key={index}>{textNode.data}</Text>;\n  }\n\n  renderElement(element, index) {\n    if (this.ignoredTags.indexOf(element.name) > -1) {\n      return null;\n    }\n    const Wrapper = this.textTags.indexOf(element.name) > -1 ? Text : View;\n    return (\n      <Wrapper key={index}>\n        {element.children.map((c, i) => this.renderNode(c, i))}\n      </Wrapper>\n    );\n  }\n\n  renderNode(node, index) {\n    switch (node.type) {\n      case ElementType.Text:\n        return this.renderTextNode(node, index);\n      case ElementType.Tag:\n        return this.renderElement(node, index);\n    }\n    return null;\n  }\n\n  render() {\n    const document = parseDocument(this.props.html);\n    return document.children.map((c, i) => this.renderNode(c, i));\n  }\n}\n"))),(0,o.kt)("p",null,"Below is an overview of the component","'","s ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," method invocation:"),(0,o.kt)("ol",{style:{listStyleType:"decimal"}},(0,o.kt)("li",null,(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Line 36")," invokes ",(0,o.kt)("inlineCode",{parentName:"p"},"parseDocument")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fb55/htmlparser2#readme"},"htmlparser2")," which returns the root DOM node of the document.")),(0,o.kt)("li",null,(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Line 37")," returns the mapping of the root","'","s children with the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"renderNode")," method.")),(0,o.kt)("li",null,(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Line 25"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"renderNode")," method returns: the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"renderTextNode")," when provided with a DOM ",(0,o.kt)("inlineCode",{parentName:"p"},"TextNode"),", the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"renderElement")," when the provided node is an ",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," otherwise, such as when the provided node is a comment, script, or stylesheet."))),(0,o.kt)("p",null,"Although the ",(0,o.kt)("inlineCode",{parentName:"p"},"renderTextNode")," implementation is pretty straightforward,",(0,o.kt)("inlineCode",{parentName:"p"},"renderElement")," has some conditional logic to render the element either in a React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/Text"},"Text")," or ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/View"},"View"),". This is to bypass rendering glitches when embedding ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/View"},"View")," inside ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/Text"},"Text"),", such as discussed in more details in the below section (hoisting)."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We allude to the DOM an DOM nodes while ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fb55/htmlparser2#readme"},"htmlparser2")," only provides a substet of the DOM API for lightweightness sake!\n"))),(0,o.kt)("h2",{id:"discussion"},"Discussion"),(0,o.kt)("p",null,"Perhaps your requirements are so simple that this might actually be sufficient for your use-case. You could try to extend this naive implementation with the below, easy to implement features:"),(0,o.kt)("ol",{style:{listStyleType:"decimal"}},(0,o.kt)("li",null,(0,o.kt)("p",null,"Add custom renderers for specific tags such as ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/img"},"<","img",">"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/ul"},"<","ul",">"),"...")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Add styles for specific tags and classes."))),(0,o.kt)("p",null,"However, you will get involved in a much substantial and complex task if you have requirements such as: "),(0,o.kt)("ol",{style:{listStyleType:"decimal"}},(0,o.kt)("li",null,(0,o.kt)("p",null,"Support ",(0,o.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#the-style-attribute"},"inline styles"),". You would need to transform those styles into React Native compatible styles. Beware that unsupported styles on the native side could easily crash your app.")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Support ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"},"whitespace collapsing")," such as in ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/white-space"},"white-space")," CSS property.")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Support ",(0,o.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/multipage/urls-and-fetching.html#resolving-urls"},"URL resolutions"),", such as relative URLs, ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/base"},"<","base",">")," elements... etc.")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Support ",(0,o.kt)("strong",{parentName:"p"},"hoisting"),". Because React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/View"},"View")," elements are not well handled inside ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/Text"},"Text")," elements, these should be hoisted up in the tree to be rendered inside ",(0,o.kt)("inlineCode",{parentName:"p"},"Views"),".")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Support full ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance"},"CSS inheritance"),". For example, a ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/div"},"<","div",">")," element could have a style with text properties such as ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/color"},"color"),", but a React Native ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/View"},"View")," element which is the default mapping for ",(0,o.kt)("a",{parentName:"p",href:"https://mdn.io/div"},"<","div",">")," will not support such style property. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/flow/css-processing"},"CSS Processing")," page."))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-native-render-html")," overcomes all of those caveats and more out of the box!"))}p.isMDXComponent=!0}}]);