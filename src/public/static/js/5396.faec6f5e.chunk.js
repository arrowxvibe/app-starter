"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[5396],{25396:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var s=a(72791),l=a(15803),i=a(93433),t=a(29439),c=a(89743),u=a(2677),m=a(11087),r=a(57689),d=a(81694),o=a.n(d),h=a(74330),v=a.n(h),x=a(45037),k=a(95078),p=a(80184),N=function e(n){var a=n.item,l=n.tag,i=n.linkClassName,r=n.className,d=n.subMenuClassNames,h=n.activeMenuItems,N=n.toggleMenu,f=l,y=(0,k.S)().width,b=(0,s.useState)(h.includes(a.key)),C=(0,t.Z)(b,2),w=C[0],M=C[1],I=y<=768&&w,F=a.children&&(a.children||[]).filter((function(e){var n;return(null===(n=e.children)||void 0===n?void 0:n.length)&&e.children})),Z=!(F.length>0&&F)&&a.children.length>=15,S=Z?(0,x.C1)(a.children,7):[];(0,s.useEffect)((function(){M(h.includes(a.key))}),[h,a]);return(0,p.jsxs)(f,{className:o()(r,h.includes(a.key)?"manuitem-active":""),children:[(0,p.jsxs)(m.rU,{to:"/#",onClick:function(e){e.preventDefault();var n=!w;return M(n),N&&N(a,n),!1},"data-menu-key":a.key,className:o()("menu-link",i,{active:h.includes(a.key)}),id:a.key,role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":w,children:[a.icon&&(0,p.jsx)("span",{className:"menu-icon",children:(0,p.jsx)(v(),{icon:a.icon,className:"hori-icon me-1"})}),(0,p.jsxs)("span",{className:"menu-text",children:[" ",a.label," "]}),(0,p.jsx)("span",{className:"menu-arrow"})]}),a.children&&(Z?(0,p.jsx)("div",{className:o()(d,"collapse collapse-lg",{show:I}),"aria-labelledby":a.key,children:(0,p.jsx)(c.Z,{children:(S||[]).map((function(e,n){return(0,p.jsx)(u.Z,{lg:4,children:(0,p.jsx)(g,{item:e,activeMenuItems:h})},n)}))})}):(0,p.jsx)("ul",{className:o()("collapse sub-menu",d,{show:I}),"aria-labelledby":a.key,children:(a.children||[]).map((function(n,a){return(0,p.jsx)(s.Fragment,{children:n.children?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(e,{item:n,tag:"li",linkClassName:o()("dropdown-item",h.includes(n.key)?"menuitem-active":""),activeMenuItems:h,className:"menu-item",subMenuClassNames:"dropdown-menu",toggleMenu:N})}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(j,{item:n,className:o()("dropdown-item",{active:h.includes(n.key)})})})},a)}))}))]})},f=function(e){var n=e.item,a=e.className,s=e.linkClassName;return(0,p.jsx)("li",{className:o()("menu-item",a),children:(0,p.jsx)(j,{item:n,className:s})})},j=function(e){var n=e.item,a=e.className;return(0,p.jsx)("li",{className:o()("menu-item",a),children:(0,p.jsxs)(m.rU,{to:n.url,target:n.target,className:"menu-link","data-menu-key":n.key,children:[n.icon&&(0,p.jsx)("span",{className:"menu-icon",children:(0,p.jsx)(v(),{icon:n.icon,className:"hori-icon me-1"})}),(0,p.jsxs)("span",{className:"menu-text",children:[" ",n.label," "]})]})})},g=function(e){var n=e.item,a=e.activeMenuItems;return(0,p.jsx)(p.Fragment,{children:n.map((function(e,n){return(0,p.jsx)(j,{item:e,className:o()("dropdown-item",{active:a.includes(e.key)})},n)}))})},y=function(e){var n=e.menuItems,a=(0,r.TH)(),c=(0,s.useRef)(null),u=(0,s.useState)(n),m=(0,t.Z)(u,1)[0],d=(0,s.useState)([]),h=(0,t.Z)(d,2),v=h[0],x=h[1],k=function(e,n){n&&x([e.key].concat((0,i.Z)((0,l.Sh)(m,e))))},j=(0,s.useCallback)((function(){var e=document.getElementById("main-side-menu"),n=null;if(e){for(var s=e.getElementsByTagName("a"),t=0;t<s.length;++t){var c,u,r;if((null===a||void 0===a||null===(c=a.pathname)||void 0===c?void 0:c.replaceAll("",""))===(null===(u=s[t])||void 0===u||null===(r=u.pathname)||void 0===r?void 0:r.replaceAll("",""))){n=s[t];break}}if(n){var d=n.getAttribute("data-menu-key"),o=(0,l.tD)(m,d);o&&x([o.key].concat((0,i.Z)((0,l.Sh)(m,o))))}}}),[a.pathname,m]);return(0,s.useEffect)((function(){m&&m.length>0&&j()}),[j,m]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:"menu",ref:c,id:"main-side-menu",children:(m||[]).map((function(e,n){return(0,p.jsx)(s.Fragment,{children:e.children?(0,p.jsx)(N,{item:e,tag:"li",className:"menu-item",subMenuClassNames:"dropdown-menu",activeMenuItems:v,linkClassName:"nav-link",toggleMenu:k}):(0,p.jsx)(f,{item:e,className:o()({"menuitem-active":v.includes(e.key)}),linkClassName:o()({"menuitem-active":v.includes(e.key)})})},n)}))})})},b=function(e){e.isMenuOpened;return(0,p.jsx)(s.Fragment,{children:(0,p.jsx)("div",{className:"app-menu",children:(0,p.jsx)(y,{menuItems:(0,l.A7)()})})})}}}]);
//# sourceMappingURL=5396.faec6f5e.chunk.js.map