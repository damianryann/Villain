(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{20:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),l=t.n(n),r=t(21),c=t.n(r),o=t(22);function m(){return l.a.createElement("footer",null,"Made with"," ",l.a.createElement(c.a,{className:"footer__icon","aria-label":"love",path:o.c,size:.72,color:"#ff6b6b"})," ","for the web, no trackers, no ads!")}},23:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1),c=t(4),o=t(24);const m=Object.entries({"/":{name:"Home"},"/reader":{name:"Reader"},"/embed":{name:"Embed API"}}),s=l.a.memo(({active:e,href:a,children:t})=>l.a.createElement("li",null,l.a.createElement("a",{href:"#"+a,className:Object(o.a)("link",e&&"link--active")},t)));var u=l.a.memo((function(){const{path:e}=l.a.useMemo(()=>Object(c.a)(r.a.location),[r.a.location]);return l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",null,m.map(([a,t])=>l.a.createElement(s,{href:a,active:a===e,key:a},t.name))))})),i=t(20);function b(){return l.a.createElement("a",{href:"https://github.com/btzr-io/Villain",className:"github-corner","aria-label":"View source on GitHub"},l.a.createElement("svg",{viewBox:"0 0 250 250","aria-hidden":"true"},l.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),l.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm"}),l.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))}a.a=l.a.memo((function({children:e}){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(b,null),e,l.a.createElement(i.a,null))}))},26:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),l=t.n(n),r=t(21),c=t.n(r),o=t(22);function m({onChange:e,onSubmit:a,submit:t}){const[n,r]=l.a.useState(""),m=l.a.useCallback(a=>{const{value:t}=a.target;r(t),e&&e(t)},[e]),s=l.a.useCallback(e=>{"Enter"===e.key&&a&&a(n)},[n,a]),u=l.a.useCallback(e=>{a&&a(n)},[n,a]);return l.a.createElement("div",{className:"url-input"},l.a.createElement("input",{id:"url",type:"url",name:"url",value:n,onKeyPress:s,onChange:m,className:"input",pattern:"https://.*",placeholder:"http://example.com/files/archive.cbz"}),t&&l.a.createElement("button",{className:"button button--icon",onClick:u},l.a.createElement(c.a,{className:"footer__icon","aria-label":"love",path:o.b,size:.8,color:"currentColor"})))}},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t(26);const o="https://villain.js.org/#/reader?src=";function m({content:e}){const a=`<iframe\n  src="${o}${e}"\n  style="border: 0"\n  allowFullscreen\n/>`;return l.a.createElement("pre",{className:"code-block"},a)}var s=l.a.memo((function(){const[e,a]=l.a.useState(""),t=l.a.useCallback(e=>{a(e)});return l.a.createElement(r.a,null,l.a.createElement("div",{className:"landing"},l.a.createElement("div",{className:"landing__content"},l.a.createElement("div",{className:"landing__message"},l.a.createElement("h2",null,"Embed API"),l.a.createElement("p",null," ",l.a.createElement("b",null,"Enter")," a valid url of the comic book:"," ")),l.a.createElement(c.a,{onChange:t,submit:!1}),l.a.createElement(m,{content:e}))))}));a.default=async function(){return{title:"embed",chunks:["embed"],component:l.a.createElement(s,null)}}}}]);