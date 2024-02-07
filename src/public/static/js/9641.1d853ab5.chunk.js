"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[9641],{99641:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var s=t(29439),a=t(72791),r=t(89743),l=t(2677),c=t(75184),i=t(9140),o=t(43360),d=t(11087),u=t(84158),m=t(81724),h=t(61265),p=t(38459),x=t(80184),f=function(e){var n=e.selectedInfo,t=e.show,s=e.onHide,a=e.onSubmit,r=(0,h.X)(m.Ry().shape({name:m.Z_().required("Please enter name"),category:m.Z_().required("Please enter category"),location:m.Z_().required("Please enter location"),statusItem:m.Z_().required("Please enter status")}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(u.Z,{show:t,onHide:s,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,x.jsx)(u.Z.Header,{className:"bg-light",onHide:s,closeButton:!0,children:(0,x.jsxs)(u.Z.Title,{className:"m-0",children:[null!==n&&void 0!==n&&n.id?"Edit":"Add"," Leads"]})}),(0,x.jsx)(u.Z.Body,{className:"p-4",children:(0,x.jsxs)(p.J,{onSubmit:a,resolver:r,children:[(0,x.jsx)(p.y,{label:"Company Name",type:"text",name:"name",defaultValue:null===n||void 0===n?void 0:n.name,placeholder:"Enter company name",containerClass:"mb-3"}),(0,x.jsx)(p.y,{label:"Category",type:"text",name:"category",defaultValue:null===n||void 0===n?void 0:n.category,placeholder:"Enter category",containerClass:"mb-3"}),(0,x.jsx)(p.y,{label:"Location",type:"text",name:"location",defaultValue:null===n||void 0===n?void 0:n.location,placeholder:"Enter Location",containerClass:"mb-3"}),(0,x.jsx)(p.y,{label:"Date",type:"date",name:"date",defaultValue:null===n||void 0===n?void 0:n.date,placeholder:"Enter Date",containerClass:"mb-3"}),(0,x.jsxs)(p.y,{label:"Status",type:"select",name:"statusItem",defaultValue:(null===n||void 0===n?void 0:n.status)||"",placeholder:"Enter Status",containerClass:"mb-3",children:[(0,x.jsx)("option",{value:"Hot",children:"Hot"}),(0,x.jsx)("option",{value:"Cold",children:"Cold"}),(0,x.jsx)("option",{value:"Lost",children:"Lost"}),(0,x.jsx)("option",{value:"In-progress",children:"In-progress"}),(0,x.jsx)("option",{value:"Won",children:"Won"})]}),(0,x.jsxs)("div",{className:"text-end",children:[(0,x.jsx)(o.Z,{variant:"success",type:"submit",className:"waves-effect waves-light me-1",children:"Save"}),(0,x.jsx)(o.Z,{variant:"danger",className:"waves-effect waves-light",onClick:s,children:"Continue"})]})]})})]})})},v=t(15861),j=t(64687),y=t.n(j),b=t(9478),N="".concat(b.Z.API_URL,"/leads");function g(){return(g=(0,v.Z)(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/","GET",e.abrupt("return",L("/","GET"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,v.Z)(y().mark((function e(n){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/","POST",n.status=null===n||void 0===n?void 0:n.statusItem,e.abrupt("return",L("/","POST",n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return(Z=(0,v.Z)(y().mark((function e(n,t){var s;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="/".concat(n),"PUT",t.status=null===t||void 0===t?void 0:t.statusItem,e.abrupt("return",L(s,"PUT",t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=(0,v.Z)(y().mark((function e(n){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/".concat(n),"DELETE",e.abrupt("return",L(t,"DELETE"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,n){return E.apply(this,arguments)}function E(){return E=(0,v.Z)(y().mark((function e(n,t){var s,a,r,l,c,i=arguments;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.length>2&&void 0!==i[2]?i[2]:null,a="".concat(N).concat(n),r={method:t,headers:{"Content-Type":"application/json"},body:s?JSON.stringify(s):null},e.prev=3,e.next=6,fetch(a,r);case 6:return l=e.sent,e.next=9,l.json();case 9:return c=e.sent,e.abrupt("return",c);case 13:throw e.prev=13,e.t0=e.catch(3),console.error("Error:",e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[3,13]])}))),E.apply(this,arguments)}var I=function(e){var n=(0,a.useState)(e.companyInfo),t=(0,s.Z)(n,2),c=t[0],u=t[1],m=(0,a.useState)(!1),h=(0,s.Z)(m,2),p=h[0],v=h[1],j=(0,a.useState)({}),y=(0,s.Z)(j,2),b=y[0],N=y[1];(0,a.useEffect)((function(){return u(e.companyInfo)}),[e.companyInfo]);var g=function(){N({}),v(!1)},L=function(n){(function(e){return C.apply(this,arguments)})(null===n||void 0===n?void 0:n.id).then((function(){e.loadLeads()}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.Z,{className:"mb-2",children:(0,x.jsx)(i.Z.Body,{children:(0,x.jsxs)(r.Z,{className:"justify-content-between",children:[(0,x.jsx)(l.Z,{className:"col-auto",children:(0,x.jsxs)("form",{className:"d-flex flex-wrap align-items-center",children:[(0,x.jsx)("label",{htmlFor:"inputPassword2",className:"visually-hidden",children:"Search"}),(0,x.jsx)("div",{className:"me-3",children:(0,x.jsx)("input",{type:"search",className:"form-control my-1 my-md-0",id:"inputPassword2",placeholder:"Search...",onChange:function(n){return function(n){if(""===n)u(e.companyInfo);else{var t=e.companyInfo;t=t.filter((function(e){return e.name.toLowerCase().includes(n)||e.location.toLowerCase().includes(n)||e.category.toLowerCase().includes(n)})),u(t)}}(n.target.value)}})})]})}),(0,x.jsx)(l.Z,{md:4,children:(0,x.jsxs)("div",{className:"text-md-end mt-3 mt-md-0",children:[(0,x.jsx)(o.Z,{variant:"success",className:"waves-effect waves-light me-1",children:(0,x.jsx)("i",{className:"mdi mdi-cog"})}),(0,x.jsxs)(o.Z,{variant:"danger",className:"waves-effect waves-light",onClick:function(){return v(!0)},children:[(0,x.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Add New"]})]})})]})})}),(c||[]).map((function(e,n){return(0,x.jsx)(i.Z,{className:"mb-2",children:(0,x.jsx)(i.Z.Body,{children:(0,x.jsxs)(r.Z,{className:"align-items-center",children:[(0,x.jsx)(l.Z,{sm:4,children:(0,x.jsxs)("div",{className:"d-flex align-items-start",children:[(null===e||void 0===e?void 0:e.logo)&&(0,x.jsx)("img",{className:"d-flex align-self-center me-3 rounded-circle",src:e.logo,alt:"",height:"64"}),(0,x.jsxs)("div",{className:"w-100",children:[(0,x.jsx)("h4",{className:"mt-0 mb-2 font-16",children:e.name}),(0,x.jsxs)("p",{className:"mb-1",children:[(0,x.jsx)("b",{children:"Location:"})," ",e.location]}),(0,x.jsxs)("p",{className:"mb-0",children:[(0,x.jsx)("b",{children:"Category:"})," ",e.category]})]})]})}),(0,x.jsx)(l.Z,{sm:2,children:(0,x.jsx)("div",{className:"text-center my-3 my-sm-0",children:(0,x.jsx)("p",{className:"mb-0 text-muted",children:e.date})})}),(0,x.jsx)(l.Z,{sm:4,children:(0,x.jsxs)("div",{className:"text-center button-list",children:[(0,x.jsx)(d.rU,{to:"#",className:"btn btn-xs btn-primary waves-effect waves-light",children:"Assign"}),(0,x.jsx)(d.rU,{to:"#",className:"btn btn-xs btn-primary waves-effect waves-light",children:"Call"}),(0,x.jsx)(d.rU,{to:"#",className:"btn btn-xs btn-primary waves-effect waves-light",children:"Email"})]})}),(0,x.jsx)(l.Z,{sm:2,children:(0,x.jsxs)("div",{className:"text-sm-end",children:[(0,x.jsx)(d.rU,{to:"#",className:"action-icon",onClick:function(){return n=e,v(!0),void N(n);var n},children:(0,x.jsx)("i",{className:"mdi mdi-square-edit-outline"})}),(0,x.jsx)(d.rU,{to:"#",className:"action-icon",onClick:function(){return L(e)},children:(0,x.jsx)("i",{className:"mdi mdi-delete"})})]})})]})})},n)})),(0,x.jsx)("div",{className:"text-center my-4",children:(0,x.jsxs)(d.rU,{to:"#",className:"text-danger",children:[(0,x.jsx)("i",{className:"mdi mdi-spin mdi-loading me-1"})," Load more"," "]})}),(0,x.jsx)(f,{selectedInfo:b,show:p,onHide:g,onSubmit:function(n){null!==b&&void 0!==b&&b.id?function(e,n){return Z.apply(this,arguments)}(null===b||void 0===b?void 0:b.id,n).then((function(){g(),e.loadLeads()})):function(e){return w.apply(this,arguments)}(n).then((function(){g(),e.loadLeads()}))}})]})},S=function(){var e=(0,a.useState)([]),n=(0,s.Z)(e,2),t=n[0],i=n[1],o=function(){return function(){return g.apply(this,arguments)}().then(i)};return(0,a.useEffect)((function(){o()}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{breadCrumbItems:[{label:"CRM",path:"/apps/crm/leads"},{label:"Leads",path:"/apps/crm/leads",active:!0}],title:"Leads"}),(0,x.jsx)(r.Z,{children:(0,x.jsx)(l.Z,{lg:{span:12,order:1},xs:{span:12,order:2},children:(0,x.jsx)(I,{companyInfo:t,loadLeads:o})})})]})}}}]);
//# sourceMappingURL=9641.1d853ab5.chunk.js.map