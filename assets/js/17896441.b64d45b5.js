(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{1510:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(8283),r=n(2784),i=n(7933),l=n(1344),s=n(1263),o=(0,r.createContext)({collectLink:function(){}}),c=n(77);var d=function(e){var t,n,d,u=e.isNavLink,m=e.to,v=e.href,f=e.activeClassName,p=e.isActive,h=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,g=void 0===E||E,b=(0,a.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),L=(0,c.C)().withBaseUrl,w=(0,r.useContext)(o),_=m||v,N=(0,l.Z)(_),U=null==_?void 0:_.replace("pathname://",""),k=void 0!==U?(n=U,g&&function(e){return e.startsWith("/")}(n)?L(n):n):void 0,Z=(0,r.useRef)(!1),y=u?i.OL:i.rU,C=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!C&&N&&null!=k&&window.docusaurus.prefetch(k),function(){C&&d&&d.disconnect()}}),[k,C,N]);var T=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,A=!k||!N||T;return k&&N&&!T&&!h&&w.collectLink(k),A?r.createElement("a",Object.assign({href:k},_&&!N&&{target:"_blank",rel:"noopener noreferrer"},b)):r.createElement(y,Object.assign({},b,{onMouseEnter:function(){Z.current||null==k||(window.docusaurus.preload(k),Z.current=!0)},innerRef:function(e){var t,n;C&&e&&N&&(t=e,n=function(){null!=k&&window.docusaurus.prefetch(k)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:k||""},u&&{isActive:p,activeClassName:f}))}},1344:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},77:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(7614),r=n(1344);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,s=void 0!==l&&l,o=i.absolute,c=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2240:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(2784),r=n(1510),i=n(7921);var l=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(r.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},s=n(7614),o=n(5200),c=n(1395);function d(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u(e){var t=e.siteTitle,n=e.versionLabel;return a.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("strong",null,n)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function m(e){var t=e.versionLabel,n=e.to,l=e.onClick;return a.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:a.createElement("strong",null,a.createElement(r.Z,{to:n,onClick:l},a.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var v=function(){var e=(0,s.Z)().siteConfig.title,t=(0,o.gA)({failfast:!0}).pluginId,n=(0,c.J)(t).savePreferredVersionName,r=(0,o.zu)(t),i=(0,o.Jo)(t),l=i.latestDocSuggestion,v=i.latestVersionSuggestion;if(!v)return a.createElement(a.Fragment,null);var f,p=null!=l?l:(f=v).docs.find((function(e){return e.id===f.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,"current"===r.name?a.createElement(d,{siteTitle:e,versionLabel:r.label}):a.createElement(u,{siteTitle:e,versionLabel:r.label})),a.createElement("div",{className:"margin-top--md"},a.createElement(m,{versionLabel:v.label,to:p.path,onClick:function(){return n(v.name)}})))},f=n(759),p="lastUpdatedDate_30Eh";function h(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:p},n)}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("strong",null,t)}}," by {user}")}function g(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("div",{className:"col text--right"},a.createElement("em",null,a.createElement("small",null,a.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)))}var b=n(3561),L=n(5329),w=n(6277),_="docTitle_eZEF",N="docItemContainer_1YW1",U="docItemCol_1cpl";var k=function(e){var t,n=e.content,r=n.metadata,i=n.frontMatter,s=i.image,c=i.keywords,d=i.hide_title,u=i.hide_table_of_contents,m=r.description,p=r.title,h=r.editUrl,E=r.lastUpdatedAt,k=r.formattedLastUpdatedAt,Z=r.lastUpdatedBy,y=(0,o.gA)({failfast:!0}).pluginId,C=(0,o.gB)(y),T=(0,o.zu)(y),A=C.length>1,B=i.title||p;return a.createElement(a.Fragment,null,a.createElement(f.Z,{title:B,description:m,keywords:c,image:s}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,w.Z)("col",(t={},t[U]=!u,t))},a.createElement(v,null),a.createElement("div",{className:N},a.createElement("article",null,A&&a.createElement("div",null,a.createElement("span",{className:"badge badge--secondary"},"Version: ",T.label)),!d&&a.createElement("header",null,a.createElement("h1",{className:_},p)),a.createElement("div",{className:"markdown"},a.createElement(n,null))),(h||E||Z)&&a.createElement("div",{className:"margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},h&&a.createElement(L.Z,{editUrl:h})),(E||Z)&&a.createElement(g,{lastUpdatedAt:E,formattedLastUpdatedAt:k,lastUpdatedBy:Z}))),a.createElement("div",{className:"margin-vert--lg"},a.createElement(l,{metadata:r})))),!u&&n.toc&&a.createElement("div",{className:"col col--3"},a.createElement(b.Z,{toc:n.toc}))))}},5329:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(2784),r=n(7921),i=n(7560),l=n(8283),s=n(6277),o="iconEdit_2nOl",c=function(e){var t=e.className,n=(0,l.Z)(e,["className"]);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-label":"Edit page"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(c,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},759:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(2784),r=n(6566),i=n(1395),l=n(77);function s(e){var t=e.title,n=e.description,s=e.keywords,o=e.image,c=(0,i.LU)().image,d=(0,i.pe)(t),u=(0,l.Z)(o||c,{absolute:!0});return a.createElement(r.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),s&&a.createElement("meta",{name:"keywords",content:Array.isArray(s)?s.join(","):s}),u&&a.createElement("meta",{property:"og:image",content:u}),u&&a.createElement("meta",{name:"twitter:image",content:u}),u&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},3561:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(2784),r=n(6277);var i=function(e,t,n){var r=(0,a.useState)(void 0),i=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,s=!1,o=document.getElementsByClassName(e);r<o.length&&!s;){var c=o[r],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),s=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_2Tf-",s="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return i(s,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(o,{toc:t}))}}}]);