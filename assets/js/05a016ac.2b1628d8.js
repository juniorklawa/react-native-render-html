(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[590],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return Se},kt:function(){return Ie}});var a=n(2784),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function l(e){var t={exports:{}};return e(t,t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},d=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")(),o=function(e){try{return!!e()}catch(e){return!0}},p=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),m={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,c={f:s&&!m.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:m},u=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},k={}.toString,h="".split,N=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return k.call(e).slice(8,-1)}(e)?h.call(e,""):Object(e)}:Object,f=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},g=function(e){return N(f(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!b(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!b(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!b(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!b(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,C=function(e,t){return y.call(e,t)},D=d.document,O=b(D)&&b(D.createElement),M=!p&&!o((function(){return 7!=Object.defineProperty(O?D.createElement("div"):{},"a",{get:function(){return 7}}).a})),x=Object.getOwnPropertyDescriptor,w={f:p?x:function(e,t){if(e=g(e),t=v(t,!0),M)try{return x(e,t)}catch(e){}if(C(e,t))return u(!c.f.call(e,t),e[t])}},_=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},T=Object.defineProperty,j={f:p?T:function(e,t,n){if(_(e),t=v(t,!0),_(n),M)try{return T(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},S=p?function(e,t,n){return j.f(e,t,u(1,n))}:function(e,t,n){return e[t]=n,e},P=function(e,t){try{S(d,e,t)}catch(l){d[e]=t}return t},E=d["__core-js_shared__"]||P("__core-js_shared__",{}),I=Function.toString;"function"!=typeof E.inspectSource&&(E.inspectSource=function(e){return I.call(e)});var R,W,A,F=E.inspectSource,L=d.WeakMap,q="function"==typeof L&&/native code/.test(F(L)),H=l((function(e){(e.exports=function(e,t){return E[e]||(E[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),z=0,X=Math.random(),Z=H("keys"),G={};if(q){var $=E.state||(E.state=new(0,d.WeakMap)),K=$.get,U=$.has,V=$.set;R=function(e,t){return t.facade=e,V.call($,e,t),t},W=function(e){return K.call($,e)||{}},A=function(e){return U.call($,e)}}else{var Y=Z.state||(Z.state="Symbol("+String("state")+")_"+(++z+X).toString(36));G[Y]=!0,R=function(e,t){return t.facade=e,S(e,Y,t),t},W=function(e){return C(e,Y)?e[Y]:{}},A=function(e){return C(e,Y)}}var B={set:R,get:W,has:A,enforce:function(e){return A(e)?W(e):R(e,{})},getterFor:function(e){return function(t){var n;if(!b(t)||(n=W(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=l((function(e){var t=B.get,n=B.enforce,a=String(String).split("String");(e.exports=function(e,t,r,l){var i,o=!!l&&!!l.unsafe,p=!!l&&!!l.enumerable,m=!!l&&!!l.noTargetGet;"function"==typeof r&&("string"!=typeof t||C(r,"name")||S(r,"name",t),(i=n(r)).source||(i.source=a.join("string"==typeof t?t:""))),e!==d?(o?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=r:S(e,t,r)):p?e[t]=r:P(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||F(this)}))})),Q=d,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},re=Math.min,le=Math.max,ie=Math.min,de=function(e){return function(t,n,a){var r,l,i=g(t),d=(r=i.length)>0?re(ae(r),9007199254740991):0,o=function(e,t){var n=ae(e);return n<0?le(n+t,0):ie(n,t)}(a,d);if(e&&n!=n){for(;d>o;)if((l=i[o++])!=l)return!0}else for(;d>o;o++)if((e||o in i)&&i[o]===n)return e||o||0;return!e&&-1}},oe=(de(!0),de(!1)),pe=function(e,t){var n,a=g(e),r=0,l=[];for(n in a)!C(G,n)&&C(a,n)&&l.push(n);for(;t.length>r;)C(a,n=t[r++])&&(~oe(l,n)||l.push(n));return l},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],se=me.concat("length","prototype"),ce={f:Object.getOwnPropertyNames||function(e){return pe(e,se)}},ue={f:Object.getOwnPropertySymbols},ke=function(e,t){return arguments.length<2?ee(Q[e])||ee(d[e]):Q[e]&&Q[e][t]||d[e]&&d[e][t]}("Reflect","ownKeys")||function(e){var t=ce.f(_(e)),n=ue.f;return n?t.concat(n(e)):t},he=function(e,t){for(var n=ke(t),a=j.f,r=w.f,l=0;l<n.length;l++){var i=n[l];C(e,i)||a(e,i,r(t,i))}},Ne=/#|\.prototype\./,fe=function(e,t){var n=be[ge(e)];return n==ye||n!=ve&&("function"==typeof t?o(t):!!t)},ge=fe.normalize=function(e){return String(e).replace(Ne,".").toLowerCase()},be=fe.data={},ve=fe.NATIVE="N",ye=fe.POLYFILL="P",Ce=fe,De=w.f,Oe=Object.keys||function(e){return pe(e,me)},Me=function(e){return Object(f(e))},xe=Object.assign,we=Object.defineProperty,_e=!xe||o((function(){if(p&&1!==xe({b:1},xe(we({},"a",{enumerable:!0,get:function(){we(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach((function(e){t[e]=e})),7!=xe({},e)[n]||Oe(xe({},t)).join("")!=a}))?function(e,t){for(var n=Me(e),a=arguments.length,r=1,l=ue.f,i=c.f;a>r;)for(var d,o=N(arguments[r++]),m=l?Oe(o).concat(l(o)):Oe(o),s=m.length,u=0;s>u;)d=m[u++],p&&!i.call(o,d)||(n[d]=o[d]);return n}:xe;!function(e,t){var n,a,r,l,i,o=e.target,p=e.global,m=e.stat;if(n=p?d:m?d[o]||P(o,{}):(d[o]||{}).prototype)for(a in t){if(l=t[a],r=e.noTargetGet?(i=De(n,a))&&i.value:n[a],!Ce(p?a:o+(m?".":"#")+a,e.forced)&&void 0!==r){if(typeof l==typeof r)continue;he(l,r)}(e.sham||r&&r.sham)&&S(l,"sham",!0),J(n,a,l,e)}}({target:"Object",stat:!0,forced:Object.assign!==_e},{assign:_e});const Te=a.createContext({}),je=e=>{const t=a.useContext(Te);return"function"==typeof e?e(t):Object.assign({},t,e)},Se=({components:e,children:t,disableParentContext:n})=>{let r=je(e);return n&&(r=e),a.createElement(Te.Provider,{value:r},t)},Pe={inlineCode:"code",wrapper:({children:e})=>a.createElement(a.Fragment,{},e)},Ee=a.forwardRef(((e,t)=>{const{components:n,mdxType:r,originalType:l,parentName:i}=e,d=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(n=l[a])>=0||(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),o=je(n);return a.createElement(o[`${i}.${r}`]||o[r]||Pe[r]||l,n?Object.assign({ref:t},d,{components:n}):Object.assign({ref:t},d))}));function Ie(e,t){const n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){const l=n.length,i=new Array(l);i[0]=Ee;const d={};for(let e in t)hasOwnProperty.call(t,e)&&(d[e]=t[e]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(let e=2;e<l;e++)i[e]=n[e];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}Ee.displayName="MDXCreateElement",Ie.Fragment=a.Fragment},6062:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return o},default:function(){return m}});var a=n(7560),r=n(8283),l=(n(2784),n(9037)),i={id:"domelement",title:"Class: DOMElement",sidebar_label:"DOMElement",custom_edit_url:null,hide_title:!0},d={unversionedId:"api/classes/domelement",id:"api/classes/domelement",isDocsHomePage:!1,title:"Class: DOMElement",description:"Hierarchy",source:"@site/docs/api/classes/domelement.md",sourceDirName:"api/classes",slug:"/api/classes/domelement",permalink:"/react-native-render-html/docs/api/classes/domelement",editUrl:null,version:"current",sidebar_label:"DOMElement",frontMatter:{id:"domelement",title:"Class: DOMElement",sidebar_label:"DOMElement",custom_edit_url:null,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Class: DOMDocument",permalink:"/react-native-render-html/docs/api/classes/domdocument"},next:{title:"Class: DOMNode",permalink:"/react-native-render-html/docs/api/classes/domnode"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"attribs",id:"attribs",children:[]},{value:"children",id:"children",children:[]},{value:"endIndex",id:"endindex",children:[]},{value:"name",id:"name",children:[]},{value:"next",id:"next",children:[]},{value:"parent",id:"parent",children:[]},{value:"prev",id:"prev",children:[]},{value:"startIndex",id:"startindex",children:[]},{value:"type",id:"type",children:[]},{value:"x-attribsNamespace",id:"x-attribsnamespace",children:[]},{value:"x-attribsPrefix",id:"x-attribsprefix",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"attributes",id:"attributes",children:[]},{value:"childNodes",id:"childnodes",children:[]},{value:"firstChild",id:"firstchild",children:[]},{value:"lastChild",id:"lastchild",children:[]},{value:"nextSibling",id:"nextsibling",children:[]},{value:"nodeType",id:"nodetype",children:[]},{value:"parentNode",id:"parentnode",children:[]},{value:"previousSibling",id:"previoussibling",children:[]},{value:"tagName",id:"tagname",children:[]}]},{value:"Methods",id:"methods",children:[{value:"cloneNode",id:"clonenode",children:[]}]}],p={toc:o};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},"DOMElement")))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"+"," ",(0,l.kt)("strong",{parentName:"p"},"new DOMElement"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,l.kt)("em",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"attribs"),": { ","[name: string]",": ",(0,l.kt)("em",{parentName:"p"},"string"),";  }, ",(0,l.kt)("inlineCode",{parentName:"p"},"children?"),": ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[], ",(0,l.kt)("inlineCode",{parentName:"p"},"type?"),": Script ","|"," Style ","|"," Tag): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domelement"},(0,l.kt)("em",{parentName:"a"},"DOMElement"))),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name of the tag, eg. ",(0,l.kt)("inlineCode",{parentName:"td"},"div"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"span"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"attribs")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object mapping attribute names to attribute values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"children?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Children of the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type?")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Script ","|"," Style ","|"," Tag"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domelement"},(0,l.kt)("em",{parentName:"a"},"DOMElement"))),(0,l.kt)("p",null,"Overrides: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:90"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"attribs"},"attribs"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"attribs"),": ",(0,l.kt)("em",{parentName:"p"},"object")),(0,l.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:88"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"children"},"children"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"children"),": ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren#children"},"children")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:65"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"endindex"},"endIndex"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"endIndex"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"The end index of the node. Requires ",(0,l.kt)("inlineCode",{parentName:"p"},"withEndIndices")," on the handler to be `true."),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren#endindex"},"endIndex")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:17"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"name"),": ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:87"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"next"},"next"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"next"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Next sibling"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren#next"},"next")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:13"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"parent"},"parent"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"parent"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",null,"Parent of the node"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren#parent"},"parent")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:9"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"prev"},"prev"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"prev"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Previous sibling"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren#prev"},"prev")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:11"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"startindex"},"startIndex"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"startIndex"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"The start index of the node. Requires ",(0,l.kt)("inlineCode",{parentName:"p"},"withStartIndices")," on the handler to be `true."),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren#startindex"},"startIndex")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:15"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"type"),": ElementType"),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren"),".",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren#type"},"type")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:7"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"x-attribsnamespace"},"x-attribsNamespace"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"x-attribsNamespace"),": ",(0,l.kt)("em",{parentName:"p"},"Record"),"<string, string",">"),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:101"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"x-attribsprefix"},"x-attribsPrefix"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"x-attribsPrefix"),": ",(0,l.kt)("em",{parentName:"p"},"Record"),"<string, string",">"),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:102"),(0,l.kt)("h2",{id:"accessors"},"Accessors"),(0,l.kt)("h3",{id:"attributes"},"attributes"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"attributes"),"(): Attribute[]"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," Attribute[]"),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:101"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"childnodes"},"childNodes"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"childNodes"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]"),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:73"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"childNodes"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"children"),": ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"children")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"[]")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:74"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"firstchild"},"firstChild"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"firstChild"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:71"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lastchild"},"lastChild"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"lastChild"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:72"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nextsibling"},"nextSibling"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"nextSibling"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:28"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"nextSibling"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"next"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"next")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:29"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nodetype"},"nodeType"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"nodeType"),"(): ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"number")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:23"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"parentnode"},"parentNode"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"parentNode"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:24"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"parentNode"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren")),"): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"parent")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},(0,l.kt)("em",{parentName:"a"},"DOMNodeWithChildren")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:25"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"previoussibling"},"previousSibling"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"previousSibling"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode"))),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:26"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"previousSibling"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"prev"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"prev")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:27"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tagname"},"tagName"),(0,l.kt)("p",null,"\u2022 get ",(0,l.kt)("strong",{parentName:"p"},"tagName"),"(): ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"string")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:99"),(0,l.kt)("p",null,"\u2022 set ",(0,l.kt)("strong",{parentName:"p"},"tagName"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,l.kt)("em",{parentName:"p"},"string"),"): ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"string"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("em",{parentName:"p"},"any")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:100"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"clonenode"},"cloneNode"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"cloneNode"),"<T",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"recursive?"),": ",(0,l.kt)("em",{parentName:"p"},"boolean"),"): T"),(0,l.kt)("p",null,"Clone this node, and optionally its children."),(0,l.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/react-native-render-html/docs/api/classes/domnode"},(0,l.kt)("em",{parentName:"a"},"DOMNode")),"<T",">")))),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"recursive?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Clone child nodes as well.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," T"),(0,l.kt)("p",null,"A clone of the node."),(0,l.kt)("p",null,"Inherited from: ",(0,l.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/classes/domnodewithchildren"},"DOMNodeWithChildren")),(0,l.kt)("p",null,"Defined in: node_modules/domhandler/lib/node.d.ts:36"))}m.isMDXComponent=!0}}]);