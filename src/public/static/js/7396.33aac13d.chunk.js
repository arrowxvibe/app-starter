"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[7396],{97396:function(t,e,n){n.r(e);n(72791);var i=n(3221),s=n(89743),o=n(2677),c=n(9140),l=n(75184),r=n(87812),a=n(80184),u=(0,i.$L)((function(t){var e,n=t.swal;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{breadCrumbItems:[{label:"Extended UI",path:"/extended-ui/sweet-alert"},{label:"Sweet Alerts",path:"/extended-ui/sweet-alert",active:!0}],title:"Sweet Alerts"}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(o.Z,{children:(0,a.jsx)(c.Z,{children:(0,a.jsxs)(c.Z.Body,{children:[(0,a.jsx)("h4",{className:"header-title",children:"Examples"}),(0,a.jsx)("p",{className:"sub-header",children:"A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes"}),(0,a.jsxs)("table",{className:"table table-borderless table-centered mb-0",children:[(0,a.jsx)("thead",{className:"table-light",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{style:{width:"50%"},children:"Alert Type"}),(0,a.jsx)("th",{children:"Example"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A basic message"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-basic",onClick:function(){return n.fire({title:"Any fool can use a computer!"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A title with a text under"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-title",onClick:function(){return n.fire({title:"The Internet?",text:"That thing is still around?",icon:"question"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A success message!"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-success",onClick:function(){return n.fire({title:"Good job!",text:"You clicked the button!",icon:"success"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A modal window with a long content inside:"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-long-content",onClick:function(){return n.fire({imageUrl:"https://placeholder.pics/svg/300x1500",imageHeight:1500,imageAlt:"A tall image"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A custom positioned dialog"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-custom-position",onClick:function(){return n.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A modal with a title, an error icon, a text, and a footer"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-error",onClick:function(){return n.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:'A confirm dialog, with a function attached to the "Confirm"-button...'}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-warning",onClick:function(){return n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#28bb4b",cancelButtonColor:"#f34e4e",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&n.fire("Deleted!","Your file has been deleted.","success")}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:'By passing a parameter, you can execute something else for "Cancel".'}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-params",onClick:function(){return n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",confirmButtonClass:"btn btn-success mt-2",cancelButtonClass:"btn btn-danger ms-2 mt-2",buttonsStyling:!1}).then((function(t){t.value?n.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",confirmButtonColor:"#4a4fea"}):t.dismiss===n.DismissReason.cancel&&n.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",confirmButtonColor:"#4a4fea"})}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with custom Image Header"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-image",onClick:function(){return n.fire({title:"Arita",text:"Responsive Bootstrap 4 Admin Dashboard",imageUrl:r,imageHeight:50,confirmButtonColor:"#4a4fea",animation:!1})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with auto close timer"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-close",onClick:function(){return n.fire({title:"Auto close alert!",html:"I will close in <strong></strong> seconds.",timer:2e3,onBeforeOpen:function(){n.showLoading(),e=setInterval((function(){n.getContent().querySelector("strong").textContent=n.getTimerLeft()}),100)},onClose:function(){clearInterval(e)}}).then((function(t){t.dismiss===n.DismissReason.timer&&console.log("I was closed by the timer")}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Custom HTML description and buttons"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-html-alert",onClick:function(){return n.fire({title:"<i>HTML</i> <u>example</u>",icon:"info",html:'You can use <b>bold text</b>, <a href="//coderthemes.com/">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,confirmButtonClass:"btn btn-confirm",cancelButtonClass:"btn btn-cancel ms-1",confirmButtonText:'<i class="mdi mdi-thumb-up-outline"></i> Great!',cancelButtonText:'<i class="mdi mdi-thumb-down-outline"></i>'})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with custom width, padding and background"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-padding-width-alert",onClick:function(){return n.fire({title:"Custom width, padding, background.",width:600,padding:100,background:"#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Ajax request example"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"ajax-alert",onClick:function(){return n.fire({title:"Submit email to run ajax request",input:"email",showCancelButton:!0,confirmButtonText:"Submit",showLoaderOnConfirm:!0,confirmButtonColor:"#4a4fea",cancelButtonColor:"#f34e4e",preConfirm:function(t){return new Promise((function(e,n){setTimeout((function(){"taken@example.com"===t?n("This email is already taken."):e()}),2e3)}))},allowOutsideClick:!1}).then((function(t){n.fire({icon:"success",title:"Ajax request finished!",confirmButtonColor:"#4a4fea",html:"Submitted email: "+t})}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Chaining modals (queue) example"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"chaining-alert",onClick:function(){return n.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,confirmButtonColor:"#4a4fea",cancelButtonColor:"#74788d",progressSteps:["1","2","3"]}).queue([{title:"Question 1",text:"Chaining swal2 modals is easy"},"Question 2","Question 3"]).then((function(t){t.value&&n.fire({title:"All done!",confirmButtonColor:"#4a4fea",html:"Your answers: <pre><code>"+JSON.stringify(t.value)+"</code></pre>",confirmButtonText:"Lovely!"})}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Dynamic queue example"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"dynamic-alert",onClick:function(){return n.queue([{title:"Your public IP",confirmButtonColor:"#4a4fea",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:function(){return new Promise((function(t){fetch("https://api.ipify.org?format=json").then((function(t){return t.json()})).then((function(e){n.insertQueueStep(e.ip),t()}))}))}}]).catch(n.noop)},children:"Click me"})})]})]})]})]})})})})]})}));e.default=u},87812:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABMCAYAAAAoVToVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4MjYzQUJCMDgzMjExRUFBMzk2QzcwN0VCODRGMTIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4MjYzQUJDMDgzMjExRUFBMzk2QzcwN0VCODRGMTIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjgyNjNBQjkwODMyMTFFQUEzOTZDNzA3RUI4NEYxMjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjgyNjNBQkEwODMyMTFFQUEzOTZDNzA3RUI4NEYxMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zHGo0AAALwklEQVR42syc328cVxXH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"}}]);
//# sourceMappingURL=7396.33aac13d.chunk.js.map