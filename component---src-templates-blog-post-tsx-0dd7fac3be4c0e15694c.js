"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7],{2466:function(e,t,n){var l=n(2784),r=n(8447),a=n(6376);t.Z=function(e){var t,n=e.location,o=e.title,i=e.children;return t="/"===n.pathname?l.createElement("h1",{style:Object.assign({},(0,a.bA)(1.5),{marginBottom:(0,a.qZ)(1.5),marginTop:0})},l.createElement(r.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},o)):l.createElement("h3",{style:{marginTop:0}},l.createElement(r.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},o)),l.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:(0,a.qZ)(30),padding:(0,a.qZ)(1.5)+" "+(0,a.qZ)(3/4)}},l.createElement("header",null,t),l.createElement("main",null,i),l.createElement("footer",null,"© ",(new Date).getFullYear()," All Rights Reserved"))}},4341:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(2784),r=n(8447),a=n(745),o=n(2466),i=function(e){var t="https://github.com/mike-north/ts-fundamentals-v3/edit/main/packages/website/content/blog/"+e.chapter.replace("/course","").substr(1)+"index.md";return l.createElement("a",{href:t,target:"_blank"},l.createElement("div",{className:"edit-on-github-link"},l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACLElEQVR4AbSWA6weQRSFf9W2FTaubcVWbUW1FaMO6zao3agIa0S1bdt+Z5Lzksnm3lnNv8n3MPfcc+56M1G3enXq1gZjwBZwCXwG/8lnrm2hpnbG1waz1mAn+M2wKPxmT+s0wdXAevCPpkn4R49qSfb6Hk18cA+0jhreB3z0Fk7o2ScsvK3PcGWItlp4DXA/0HAN7E041Ef2XrPXmVFDGmCTYDKUtXK8vV4EbrtjxL4tX1Bbjr1DBd9NwfB2yl60Ee6MliAn7ECOtWqB9TaKdztbtE8RtffwHGmveO8rFdQHfxTRCA8DjJC8mVnfCCYogsegpocBaoJHSsYEI9ipFEd7fJyPVjJ2muI15fBU8zhANeU0XzPFb0LhYcbzZjyFnG8Z5dDcLsIAd6QsbYBPRRjgk5SlFkBdj+F11R3FjwtKcbjHAYYrGRdMcaNSvAgKHsIL9JIyNhrBIKlIVnoYYKXDf5ARVAFfHaLdoH6C4AbsFX2ZWaVUvNoqLAE9wXFr7RfYBcaBdiCvHOrOYCLYx57/DlbbzU3Bd+tDcjooB84JjftAVhggCw5Q44RZTYMGiwKiTqCF8CLp5jjsPSIOsEi7Wk9aoiNcrw7GgHlgAMg7BqgTFs6MgmZQP/DInBzzwqvuCqd3/TCTZuC21XQCzAQjwRxQPskA9GwW5yPikGJUPcEAh2J/3PCqHgtepRjgNW/dbJonWWXelrfAG1DOoS1HjdHOAJUzJRvsAADCkEdhn2JIcgAAAABJRU5ErkJggg==",alt:"GitHub"}),"Edit on GitHub"))},s=n(8977),c=n(6376),m=function(){var e=document.getElementById("twoslash-mouse-hover-info");e&&(e.style.display="none")},d=function e(t){if("pre"===t.nodeName.toLowerCase())return t.getBoundingClientRect();var n=t.parentElement;if(!n)throw new Error("No parentElement found for element");return e(n)},u=function(){var e=document.querySelectorAll(".shiki.twoslash");console.log(e);var t=function(e){var t=e.target;if("DATA-LSP"!==t.nodeName)return m();var n=t.getAttribute("lsp");if(null===n)throw new Error("no lsp attribute found");var l,r,a,o,i=(l=t,r=document.body.getBoundingClientRect(),{top:(a=l.getBoundingClientRect()).top-r.top,left:a.left-r.left}),s=((o=document.getElementById("twoslash-mouse-hover-info"))||((o=document.createElement("div")).style.position="absolute",o.id="twoslash-mouse-hover-info",document.body.appendChild(o)),o),c=document.createElement("textarea");c.innerHTML=n,s.innerHTML=c.value;s.style.display="block",s.style.fontSize="18px",s.style.top=i.top+20+"px",s.style.left=i.left+"px";var u=d(t),f=i.left-u.x;s.style.maxWidth=u.width-f+"px"};e.forEach((function(e){e.addEventListener("mouseover",t),e.addEventListener("mouseout",m)}))};var f=function(e){var t=e.data,n=e.pageContext,m=e.location,d=t.markdownRemark,f=t.site.siteMetadata.title,g=n.previous,p=n.next;(0,l.useEffect)(u,[]);var E,h=(E=d.html)&&E.replace(/<a class='playground-link' href='https:\/\/www.typescriptlang/g,"<a class='playground-link try-code-link' target=\"_blank\" href='https://www.typescriptlang");console.log(d);var A=t.site.siteMetadata.courses.find((function(e){return e.id===d.frontmatter.course}));if(!A)throw new Error("Undefined course: "+d.frontmatter.course);var b=!!d.tableOfContents&&""!==d.tableOfContents.trim()?l.createElement("div",{className:"post-toc"},l.createElement("div",{className:"post-toc__title"},"Table of Contents"),l.createElement("section",{className:"post-toc__content",dangerouslySetInnerHTML:{__html:d.tableOfContents}})):"";return l.createElement(o.Z,{location:m,title:f},l.createElement(s.Z,{title:d.frontmatter.title,description:d.frontmatter.description||d.excerpt}),l.createElement("article",{className:"blog-post"},l.createElement("header",null,l.createElement(r.Link,{style:{marginTop:(0,c.qZ)(1),marginBottom:0},to:"/course/"+A.id,rel:"next",className:"course-title-link"},l.createElement("span",{className:"course-title"},A.title)),l.createElement(i,{chapter:d.fields.slug}),l.createElement("h1",{className:"post-title"},d.frontmatter.title),l.createElement("p",{style:Object.assign({},(0,c.bA)(-.2),{display:"block",marginBottom:(0,c.qZ)(1)})},d.frontmatter.date)),l.createElement("nav",null,l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,g&&g.fields&&l.createElement(r.Link,{to:g.fields.slug,rel:"prev"},"← ",g.frontmatter.title)),l.createElement("li",null,p&&p.fields&&l.createElement(r.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))),b,l.createElement("section",{className:"post-body",dangerouslySetInnerHTML:{__html:h}}),l.createElement("hr",{style:{marginBottom:(0,c.qZ)(1)}}),l.createElement("nav",null,l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,g&&g.fields&&l.createElement(r.Link,{to:g.fields.slug,rel:"prev"},"← ",g.frontmatter.title)),l.createElement("li",null,p&&p.fields&&l.createElement(r.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))),l.createElement("hr",{style:{marginBottom:(0,c.qZ)(1)}}),l.createElement("footer",null,l.createElement(a.Z,null))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-0dd7fac3be4c0e15694c.js.map