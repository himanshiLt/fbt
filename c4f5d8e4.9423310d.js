(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(182),c=a.n(r),o=a(185),s=a(183),i=a(178),m=a(184),u=a(126),d=a.n(u),b=a(1),E=(a(205),a(198)),f=function(e){var t=e.code;return l.a.createElement(E.a,Object(b.a)({},E.b,{code:t,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,c=e.getTokenProps;return l.a.createElement("pre",{className:t,style:Object.assign({},a,{textAlign:"left"})},n.map((function(e,t){return l.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return l.a.createElement("span",c({token:e,key:t}))})))})))}))},p=a(194),g=[{title:l.a.createElement(l.a.Fragment,null,"Inlined translatable text"),description:l.a.createElement(l.a.Fragment,null,"Compose translatable text inline with your source:",l.a.createElement(f,{code:'<button>\n  <fbt desc="Canonical intro text">\n    Hello World!\n  </fbt>\n</button>'}))},{title:l.a.createElement(l.a.Fragment,null,"Seamless text collection"),description:l.a.createElement(l.a.Fragment,null,"Collect your translatable source texts with ease:",l.a.createElement(f,{code:'{\n  "hashToText":{\n    "ni7kanCF2RfGZAS9mDOToQ==":\n    "Hello, World!"\n  },\n  ...,\n  "desc": "Canonical intro text"\n}'}))},{title:l.a.createElement(l.a.Fragment,null,"Integrated translations"),description:l.a.createElement(l.a.Fragment,null,"Easily pull translations into your app",l.a.createElement(f,{code:"<button>Hello, Byd!</button>"}))}],h=function(){return g&&g.length?l.a.createElement("section",{className:d.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},g.map((function(e,t){var a=e.title,n=e.description;return l.a.createElement("div",{key:t,className:c()("col col--4",d.a.featureBlock)},l.a.createElement("h3",null,a),l.a.createElement("p",null,n))}))))):null},v=function(){return l.a.createElement("section",{className:d.a.description},l.a.createElement("div",{className:c()("row",d.a.row)},l.a.createElement("div",{className:c()("col",d.a.column)},l.a.createElement("h2",null,"Why FBT?"),l.a.createElement("div",null,"FBT is a framework for internationalizing user interfaces in JavaScript. It is designed to be not only powerful and flexible, but also simple and intuitive. Getting grammatically correct translated texts in dynamic applications is hard. Let FBT do the hard work for you.")),l.a.createElement("div",{className:c()("col",d.a.column)},l.a.createElement("div",{className:"splash_image"},l.a.createElement("img",{className:d.a.descriptionImage,src:Object(m.a)("img/fbt.png")})))))};t.default=function(){var e=Object(i.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(o.a,{title:t.title+" - "+t.tagline,description:t.tagline},l.a.createElement("header",{className:c()("hero hero--primary",d.a.heroBanner)},l.a.createElement("div",{className:c()("container",d.a.topContainer)},l.a.createElement("div",null,l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("div",{className:d.a.sections},l.a.createElement("div",null,l.a.createElement("p",{className:"hero__subtitle"},"An internationalization framework"),l.a.createElement("div",{className:d.a.buttons},l.a.createElement(s.a,{className:c()("button button--secondary button--lg",d.a.button),to:"https://github.com/facebookincubator/fbt"},"Try it out"))))),l.a.createElement("div",{className:"splash_image"},l.a.createElement("img",{className:d.a.splashImage,src:Object(m.a)("img/fbt.png")})))),l.a.createElement("main",null,l.a.createElement(h,null),l.a.createElement(v,null),l.a.createElement(p.a,null)))}},194:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(182),c=a.n(r),o=a(183),s=a(178),i=a(184),m=a(126),u=a.n(m);t.a=function(e){var t=e.showAll,a=void 0!==t&&t,n=Object(s.a)().siteConfig,r=void 0===n?{}:n,m=r.customFields.users,d=(a?m:m.filter((function(e){return e.pinned}))).map((function(e,t){return l.a.createElement("a",{key:t,className:u.a.showcaseLogo,href:e.infoUrl},l.a.createElement("img",{src:Object(i.a)(e.imageUrl),title:e.caption}))}));return l.a.createElement("section",{className:c()("text--center margin-top--xl",u.a.showcase)},l.a.createElement("h2",{className:c()("showcaseHeading",u.a.showcaseHeadingColored)},"Who's Using This?"),l.a.createElement("div",{className:u.a.showcaseLogos},d),a&&l.a.createElement("p",null,"Are you using this project?"),l.a.createElement("div",{className:"more-users"},a?l.a.createElement(o.a,{className:c()("button button--primary button--outline",u.a.button),href:"https://github.com/facebookincubator/fbt/edit/master/website/docusaurus.config.js"},"Add your company/project"):l.a.createElement(o.a,{className:c()("button button--primary button--outline",u.a.button),to:Object(i.a)("users")},"More ",r.title," Users")))}},205:function(e,t,a){var n=a(17);n(n.S+n.F,"Object",{assign:a(206)})},206:function(e,t,a){"use strict";var n=a(12),l=a(24),r=a(207),c=a(78),o=a(52),s=a(76),i=Object.assign;e.exports=!i||a(18)((function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach((function(e){t[e]=e})),7!=i({},e)[a]||Object.keys(i({},t)).join("")!=n}))?function(e,t){for(var a=o(e),i=arguments.length,m=1,u=r.f,d=c.f;i>m;)for(var b,E=s(arguments[m++]),f=u?l(E).concat(u(E)):l(E),p=f.length,g=0;p>g;)b=f[g++],n&&!d.call(E,b)||(a[b]=E[b]);return a}:i},207:function(e,t){t.f=Object.getOwnPropertySymbols}}]);