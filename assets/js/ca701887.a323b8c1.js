(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2941],{9037:function(e,t,n){"use strict";n.d(t,{Zo:function(){return Ce},kt:function(){return Te}});var r=n(2784),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function i(e){var t={exports:{}};return e(t,t.exports),t.exports}var s=function(e){return e&&e.Math==Math&&e},p=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof a&&a)||function(){return this}()||Function("return this")(),l=function(e){try{return!!e()}catch(e){return!0}},o=!l((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,u={f:m&&!c.call({1:2},1)?function(e){var t=m(this,e);return!!t&&t.enumerable}:c},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,f="".split,k=l((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?f.call(e,""):Object(e)}:Object,g=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},b=function(e){return k(g(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},N=function(e,t){if(!y(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!y(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!y(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},v={}.hasOwnProperty,I=function(e,t){return v.call(e,t)},P=p.document,w=y(P)&&y(P.createElement),O=!o&&!l((function(){return 7!=Object.defineProperty(w?P.createElement("div"):{},"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,j={f:o?E:function(e,t){if(e=b(e),t=N(t,!0),O)try{return E(e,t)}catch(e){}if(I(e,t))return h(!u.f.call(e,t),e[t])}},M=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},S=Object.defineProperty,D={f:o?S:function(e,t,n){if(M(e),t=N(t,!0),M(n),O)try{return S(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},C=o?function(e,t,n){return D.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},x=function(e,t){try{C(p,e,t)}catch(i){p[e]=t}return t},G=p["__core-js_shared__"]||x("__core-js_shared__",{}),T=Function.toString;"function"!=typeof G.inspectSource&&(G.inspectSource=function(e){return T.call(e)});var L,_,W,U=G.inspectSource,F=p.WeakMap,R="function"==typeof F&&/native code/.test(U(F)),z=i((function(e){(e.exports=function(e,t){return G[e]||(G[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})})),A=0,H=Math.random(),X=z("keys"),Z={};if(R){var q=G.state||(G.state=new(0,p.WeakMap)),$=q.get,B=q.has,K=q.set;L=function(e,t){return t.facade=e,K.call(q,e,t),t},_=function(e){return $.call(q,e)||{}},W=function(e){return B.call(q,e)}}else{var V=X.state||(X.state="Symbol("+String("state")+")_"+(++A+H).toString(36));Z[V]=!0,L=function(e,t){return t.facade=e,C(e,V,t),t},_=function(e){return I(e,V)?e[V]:{}},W=function(e){return I(e,V)}}var Y={set:L,get:_,has:W,enforce:function(e){return W(e)?_(e):L(e,{})},getterFor:function(e){return function(t){var n;if(!y(t)||(n=_(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=i((function(e){var t=Y.get,n=Y.enforce,r=String(String).split("String");(e.exports=function(e,t,a,i){var s,l=!!i&&!!i.unsafe,o=!!i&&!!i.enumerable,c=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||I(a,"name")||C(a,"name",t),(s=n(a)).source||(s.source=r.join("string"==typeof t?t:""))),e!==p?(l?!c&&e[t]&&(o=!0):delete e[t],o?e[t]=a:C(e,t,a)):o?e[t]=a:x(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||U(this)}))})),Q=p,ee=function(e){return"function"==typeof e?e:void 0},te=Math.ceil,ne=Math.floor,re=function(e){return isNaN(e=+e)?0:(e>0?ne:te)(e)},ae=Math.min,ie=Math.max,se=Math.min,pe=function(e){return function(t,n,r){var a,i,s=b(t),p=(a=s.length)>0?ae(re(a),9007199254740991):0,l=function(e,t){var n=re(e);return n<0?ie(n+t,0):se(n,t)}(r,p);if(e&&n!=n){for(;p>l;)if((i=s[l++])!=i)return!0}else for(;p>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}},le=(pe(!0),pe(!1)),oe=function(e,t){var n,r=b(e),a=0,i=[];for(n in r)!I(Z,n)&&I(r,n)&&i.push(n);for(;t.length>a;)I(r,n=t[a++])&&(~le(i,n)||i.push(n));return i},ce=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=ce.concat("length","prototype"),ue={f:Object.getOwnPropertyNames||function(e){return oe(e,me)}},he={f:Object.getOwnPropertySymbols},de=function(e,t){return arguments.length<2?ee(Q[e])||ee(p[e]):Q[e]&&Q[e][t]||p[e]&&p[e][t]}("Reflect","ownKeys")||function(e){var t=ue.f(M(e)),n=he.f;return n?t.concat(n(e)):t},fe=function(e,t){for(var n=de(t),r=D.f,a=j.f,i=0;i<n.length;i++){var s=n[i];I(e,s)||r(e,s,a(t,s))}},ke=/#|\.prototype\./,ge=function(e,t){var n=ye[be(e)];return n==ve||n!=Ne&&("function"==typeof t?l(t):!!t)},be=ge.normalize=function(e){return String(e).replace(ke,".").toLowerCase()},ye=ge.data={},Ne=ge.NATIVE="N",ve=ge.POLYFILL="P",Ie=ge,Pe=j.f,we=Object.keys||function(e){return oe(e,ce)},Oe=function(e){return Object(g(e))},Ee=Object.assign,je=Object.defineProperty,Me=!Ee||l((function(){if(o&&1!==Ee({b:1},Ee(je({},"a",{enumerable:!0,get:function(){je(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=Ee({},e)[n]||we(Ee({},t)).join("")!=r}))?function(e,t){for(var n=Oe(e),r=arguments.length,a=1,i=he.f,s=u.f;r>a;)for(var p,l=k(arguments[a++]),c=i?we(l).concat(i(l)):we(l),m=c.length,h=0;m>h;)p=c[h++],o&&!s.call(l,p)||(n[p]=l[p]);return n}:Ee;!function(e,t){var n,r,a,i,s,l=e.target,o=e.global,c=e.stat;if(n=o?p:c?p[l]||x(l,{}):(p[l]||{}).prototype)for(r in t){if(i=t[r],a=e.noTargetGet?(s=Pe(n,r))&&s.value:n[r],!Ie(o?r:l+(c?".":"#")+r,e.forced)&&void 0!==a){if(typeof i==typeof a)continue;fe(i,a)}(e.sham||a&&a.sham)&&C(i,"sham",!0),J(n,r,i,e)}}({target:"Object",stat:!0,forced:Object.assign!==Me},{assign:Me});const Se=r.createContext({}),De=e=>{const t=r.useContext(Se);return"function"==typeof e?e(t):Object.assign({},t,e)},Ce=({components:e,children:t,disableParentContext:n})=>{let a=De(e);return n&&(a=e),r.createElement(Se.Provider,{value:a},t)},xe={inlineCode:"code",wrapper:({children:e})=>r.createElement(r.Fragment,{},e)},Ge=r.forwardRef(((e,t)=>{const{components:n,mdxType:a,originalType:i,parentName:s}=e,p=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),l=De(n);return r.createElement(l[`${s}.${a}`]||l[a]||xe[a]||i,n?Object.assign({ref:t},p,{components:n}):Object.assign({ref:t},p))}));function Te(e,t){const n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){const i=n.length,s=new Array(i);s[0]=Ge;const p={};for(let e in t)hasOwnProperty.call(t,e)&&(p[e]=t[e]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(let e=2;e<i;e++)s[e]=n[e];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}Ge.displayName="MDXCreateElement",Te.Fragment=r.Fragment},6979:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(7560),a=n(8283),i=(n(2784),n(9037)),s={id:"imgelementprops",title:"Interface: IMGElementProps",sidebar_label:"IMGElementProps",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/imgelementprops",id:"api/interfaces/imgelementprops",isDocsHomePage:!1,title:"Interface: IMGElementProps",description:"Hierarchy",source:"@site/docs/api/interfaces/imgelementprops.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/imgelementprops",permalink:"/react-native-render-html/docs/api/interfaces/imgelementprops",editUrl:null,version:"current",sidebar_label:"IMGElementProps",frontMatter:{id:"imgelementprops",title:"Interface: IMGElementProps",sidebar_label:"IMGElementProps",custom_edit_url:null,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Interface: ImageDimensions",permalink:"/react-native-render-html/docs/api/interfaces/imagedimensions"},next:{title:"Interface: IMGElementStateBase",permalink:"/react-native-render-html/docs/api/interfaces/imgelementstatebase"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"alt",id:"alt",children:[]},{value:"altColor",id:"altcolor",children:[]},{value:"cachedNaturalDimensions",id:"cachednaturaldimensions",children:[]},{value:"computeMaxWidth",id:"computemaxwidth",children:[]},{value:"contentWidth",id:"contentwidth",children:[]},{value:"enableExperimentalPercentWidth",id:"enableexperimentalpercentwidth",children:[]},{value:"height",id:"height",children:[]},{value:"initialDimensions",id:"initialdimensions",children:[]},{value:"objectFit",id:"objectfit",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"source",id:"source",children:[]},{value:"style",id:"style",children:[]},{value:"testID",id:"testid",children:[]},{value:"width",id:"width",children:[]}]}],o={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},(0,i.kt)("em",{parentName:"a"},"UseIMGElementStateProps"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"IMGElementProps")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"alt"},"alt"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"alt"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#alt"},"alt")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L15"},"packages/render-html/src/elements/img-types.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"altcolor"},"altColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"altColor"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#altcolor"},"altColor")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L16"},"packages/render-html/src/elements/img-types.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cachednaturaldimensions"},"cachedNaturalDimensions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cachedNaturalDimensions"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/imagedimensions"},(0,i.kt)("em",{parentName:"a"},"ImageDimensions"))),(0,i.kt)("p",null,'When the natural ("physical") dimensions for this image are accessible a\npriori, these should be passed. It will save some API calls and filesytem\naccess via React Native Image.getSize.'),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#cachednaturaldimensions"},"cachedNaturalDimensions")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L34"},"packages/render-html/src/elements/img-types.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"computemaxwidth"},"computeMaxWidth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"computeMaxWidth"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"containerWidth"),": ",(0,i.kt)("em",{parentName:"p"},"number"),") => ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"containerWidth"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"): ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"containerWidth")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"number"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L22"},"packages/render-html/src/elements/img-types.ts:22")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#computemaxwidth"},"computeMaxWidth")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L22"},"packages/render-html/src/elements/img-types.ts:22")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contentwidth"},"contentWidth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"contentWidth"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#contentwidth"},"contentWidth")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L23"},"packages/render-html/src/elements/img-types.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enableexperimentalpercentwidth"},"enableExperimentalPercentWidth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"enableExperimentalPercentWidth"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#enableexperimentalpercentwidth"},"enableExperimentalPercentWidth")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L41"},"packages/render-html/src/elements/img-types.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"height"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#height"},"height")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L18"},"packages/render-html/src/elements/img-types.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initialdimensions"},"initialDimensions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"initialDimensions"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/imagedimensions"},(0,i.kt)("em",{parentName:"a"},"ImageDimensions"))),(0,i.kt)("p",null,"Rendered dimensions prior to retrieving natural dimensions of the image."),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#initialdimensions"},"initialDimensions")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L42"},"packages/render-html/src/elements/img-types.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"objectfit"},"objectFit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"objectFit"),": ObjectFit"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#objectfit"},"objectFit")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L21"},"packages/render-html/src/elements/img-types.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onpress"},"onPress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onPress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,i.kt)("em",{parentName:"p"},"GestureResponderEvent"),") => ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L40"},"packages/render-html/src/elements/img-types.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"source"),": ImageURISource"),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#source"},"source")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L17"},"packages/render-html/src/elements/img-types.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"style"},"style"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"style"),": ",(0,i.kt)("em",{parentName:"p"},"StyleProp"),"<ImageStyle",">"),(0,i.kt)("p",null,"Overrides: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#style"},"style")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L38"},"packages/render-html/src/elements/img-types.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"testID"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L39"},"packages/render-html/src/elements/img-types.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("em",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Inherited from: ",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops"},"UseIMGElementStateProps"),".",(0,i.kt)("a",{parentName:"p",href:"/react-native-render-html/docs/api/interfaces/useimgelementstateprops#width"},"width")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/archriss/react-native-render-html/blob/25ca599/packages/render-html/src/elements/img-types.ts#L19"},"packages/render-html/src/elements/img-types.ts:19")))}c.isMDXComponent=!0}}]);