(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var r=a("q1tI"),n=a.n(r),l=a("Kvkj"),i=a("7Qib"),c=a("7vrA");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges||[],r=t.allFile.edges||[],u=i.b.getImageMap(r,/\/[projects].*\/|$/,!0,3);return n.a.createElement(l.c,null,n.a.createElement(i.a,{title:"Projects"}),n.a.createElement(l.d,{title:"Projects"}),n.a.createElement(c.a,{fluid:!0,className:"p-3 w-auto text-left d-flex flex-wrap justify-content-center"},n.a.createElement("section",null,a.map((function(e){var t=e.node;return n.a.createElement("div",{key:t.id,className:"p-3"},n.a.createElement(l.b,{to:t.fields.slug,featuredImage:u[t.fields.slug],title:t.frontmatter.title,tags:t.frontmatter.tags,excerpt:t.excerpt}),n.a.createElement("hr",null))})))))};var u="2777309509"},"7Qib":function(e,t,a){"use strict";a.d(t,"a",(function(){return r.a})),a.d(t,"b",(function(){return n}));var r=a("ElpU"),n=(a("BYIe"),{getImageMap:function(e,t,a,r){return void 0===a&&(a=!1),void 0===r&&(r=3),e.reduce((function(e,n){var l=n.node.relativePath.match(t)[0];if(a)if(e.hasOwnProperty(l))e[l].length<=r&&e[l].push(n.node.childImageSharp.fluid);else{var i=[];i.push(n.node.childImageSharp.fluid),e[l]=i}else e[l]=n.node.childImageSharp.fluid;return e}),{})}})}}]);
//# sourceMappingURL=component---src-pages-projects-js-7c623b3792729adf1f9e.js.map