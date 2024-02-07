"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[994],{83349:function(e,t,n){n.d(t,{$L:function(){return d},Rp:function(){return u},mW:function(){return o},th:function(){return p},ty:function(){return l}});var r=n(15861),s=n(64687),c=n.n(s),a=n(9478),i="".concat(a.Z.API_URL,"/project"),o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},10994:function(e,t,n){n.r(t);var r=n(29439),s=n(72791),c=n(9140),a=n(55353),i=n(89743),o=n(2677),u=n(11087),d=n(81694),l=n.n(d),p=n(75184),m=n(83349),h=n(80184),f=function(e){var t=e.project||{};return(0,h.jsx)(c.Z,{className:"project-box",children:(0,h.jsxs)(c.Z.Body,{children:[(0,h.jsxs)(a.Z,{className:"card-widgets",align:"end",children:[(0,h.jsx)(a.Z.Toggle,{as:"a",className:"cursor-pointer card-drop p-0 shadow-none",children:(0,h.jsx)("i",{className:"mdi mdi-dots-horizontal m-0 text-muted h3"})}),(0,h.jsxs)(a.Z.Menu,{children:[(0,h.jsx)(a.Z.Item,{children:(0,h.jsxs)(u.rU,{to:"/apps/projects/".concat(t.id,"/edit"),className:"text-dark",children:[(0,h.jsx)("i",{className:"mdi mdi-pencil me-1"}),"Edit"]})}),(0,h.jsxs)(a.Z.Item,{onClick:function(){return e.deleteProjectById(null===t||void 0===t?void 0:t.id)},children:[(0,h.jsx)("i",{className:"mdi mdi-delete me-1"}),"Delete"]})]})]}),(0,h.jsx)("h4",{className:"mt-0",children:(0,h.jsx)(u.rU,{to:"/apps/projects/".concat(t.id,"/details"),className:"text-dark",children:t.title})}),(0,h.jsxs)("p",{className:"text-muted text-uppercase",children:[(0,h.jsx)("i",{className:"mdi mdi-account-circle"})," ",(0,h.jsx)("small",{children:t.companyName})]}),(0,h.jsx)("div",{className:l()("badge",{"bg-soft-success text-primary":"Planning"===t.state,"bg-soft-success text-success":"Finished"===t.state,"bg-soft-secondary text-secondary":"Ongoing"===t.state},"mb-3"),children:t.state}),(0,h.jsxs)("p",{className:"text-muted font-13 mb-3 sp-line-2",children:[t.shortDesc,"...",(0,h.jsx)(u.rU,{to:"#",className:"fw-bold text-muted",children:"view more"})]})]})})};t.default=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],c=t[1];(0,s.useEffect)((function(){(0,m.mW)().then(c)}),[]);var a=function(e){(0,m.th)(e).then((function(){return(0,m.mW)().then(c)}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.Z,{breadCrumbItems:[{label:"Projects",path:"/apps/projects/list"},{label:"Projects List",path:"/apps/projects/list",active:!0}],title:"Projects List"}),(0,h.jsxs)(i.Z,{className:"mb-2",children:[(0,h.jsx)(o.Z,{sm:4,children:(0,h.jsxs)(u.rU,{to:"/apps/projects/create",className:"btn btn-danger rounded-pill waves-effect waves-light mb-3",children:[(0,h.jsx)("i",{className:"mdi mdi-plus"})," Create Project"]})}),(0,h.jsx)(o.Z,{sm:8,children:(0,h.jsx)("div",{className:"text-sm-end"})})]}),(0,h.jsx)(i.Z,{children:(n||[]).map((function(e,t){return(0,h.jsx)(o.Z,{lg:4,children:(0,h.jsx)(f,{project:e,deleteProjectById:a})},"proj-"+e.id)}))})]})}}}]);
//# sourceMappingURL=994.5b97119f.chunk.js.map