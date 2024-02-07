"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[6885],{99242:function(e,n,r){r.d(n,{Z:function(){return l}});var o=r(72791);var t=r(91683),i=Math.pow(2,31)-1;function a(e,n,r){var o=r-Date.now();e.current=o<=i?setTimeout(n,o):setTimeout((function(){return a(e,n,r)}),i)}function l(){var e=function(){var e=(0,o.useRef)(!0),n=(0,o.useRef)((function(){return e.current}));return(0,o.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}(),n=(0,o.useRef)();return(0,t.Z)((function(){return clearTimeout(n.current)})),(0,o.useMemo)((function(){var r=function(){return clearTimeout(n.current)};return{set:function(o,t){void 0===t&&(t=0),e()&&(r(),t<=i?n.current=setTimeout(o,t):a(n,o,Date.now()+t))},clear:r}}),[])}},83340:function(e,n,r){var o=r(72791),t=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};n.Z=function(e,n){return(0,o.useMemo)((function(){return function(e,n){var r=t(e),o=t(n);return function(e){r&&r(e),o&&o(e)}}(e,n)}),[e,n])}},39135:function(e,n,r){r.d(n,{Z:function(){return B}});var o=r(1413),t=r(45987),i=r(93433),a=r(29439),l=r(53189),s=r(72791),c=r(99242),u=(r(42391),r(32592)),p=r(73201),f=r(81694),d=r.n(f),v=r(54164),h=r(66068),Z=r(83340),w=r(49933),m=r(66595),g=r(90183),y=r(81012),b=r(80184),E=s.forwardRef((function(e,n){var r=e.flip,o=e.offset,t=e.placement,i=e.containerPadding,l=e.popperConfig,c=void 0===l?{}:l,u=e.transition,p=(0,h.Z)(),f=(0,a.Z)(p,2),d=f[0],E=f[1],x=(0,h.Z)(),C=(0,a.Z)(x,2),P=C[0],O=C[1],j=(0,Z.Z)(E,n),k=(0,g.Z)(e.container),N=(0,g.Z)(e.target),R=(0,s.useState)(!e.show),T=(0,a.Z)(R,2),_=T[0],S=T[1],F=(0,w.Z)(N,d,(0,y.ZP)({placement:t,enableEvents:!!e.show,containerPadding:i||5,flip:r,offset:o,arrowElement:P,popperConfig:c}));e.show?_&&S(!1):e.transition||_||S(!0);var M=e.show||u&&!_;if((0,m.Z)(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!M)return null;var B=e.children(Object.assign({},F.attributes.popper,{style:F.styles.popper,ref:j}),{popper:F,placement:t,show:!!e.show,arrowProps:Object.assign({},F.attributes.arrow,{style:F.styles.arrow,ref:O})});if(u){var D=e.onExit,H=e.onExiting,z=e.onEnter,A=e.onEntering,U=e.onEntered;B=(0,b.jsx)(u,{in:e.show,appear:!0,onExit:D,onExiting:H,onExited:function(){S(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:z,onEntering:A,onEntered:U,children:B})}return k?v.createPortal(B,k):null}));E.displayName="Overlay";var x=E,C=r(6755),P=r(10162),O=r(63739);var j=r(72709),k=r(37002),N=["children","transition","popperConfig"],R={transition:j.Z,rootClose:!1,show:!1,placement:"top"};var T=s.forwardRef((function(e,n){var r=e.children,i=e.transition,l=e.popperConfig,c=void 0===l?{}:l,u=(0,t.Z)(e,N),f=(0,s.useRef)({}),v=function(){var e=(0,s.useRef)(null),n=(0,P.vE)(void 0,"popover"),r=(0,s.useMemo)((function(){return{name:"offset",options:{offset:function(){return e.current&&(0,C.Z)(e.current,n)?O.Z.POPPER_OFFSET:[0,0]}}}}),[n]);return[e,[r]]}(),h=(0,a.Z)(v,2),Z=h[0],w=h[1],m=(0,p.Z)(n,Z),g=!0===i?j.Z:i||void 0;return(0,b.jsx)(x,(0,o.Z)((0,o.Z)({},u),{},{ref:m,popperConfig:(0,o.Z)((0,o.Z)({},c),{},{modifiers:w.concat(c.modifiers||[])}),transition:g,children:function(e,n){var t,a,l=n.arrowProps,c=n.placement,u=n.popper,p=n.show;!function(e,n){var r=e.ref,o=n.ref;e.ref=r.__wrapped||(r.__wrapped=function(e){return r((0,k.Z)(e))}),n.ref=o.__wrapped||(o.__wrapped=function(e){return o((0,k.Z)(e))})}(e,l);var v=Object.assign(f.current,{state:null==u?void 0:u.state,scheduleUpdate:null==u?void 0:u.update,placement:c,outOfBoundaries:(null==u||null==(t=u.state)||null==(a=t.modifiersData.hide)?void 0:a.isReferenceHidden)||!1});return"function"===typeof r?r((0,o.Z)((0,o.Z)((0,o.Z)({},e),{},{placement:c,show:p},!i&&p&&{className:"show"}),{},{popper:v,arrowProps:l})):s.cloneElement(r,(0,o.Z)((0,o.Z)({},e),{},{placement:c,arrowProps:l,popper:v,className:d()(r.props.className,!i&&p&&"show"),style:(0,o.Z)((0,o.Z)({},r.props.style),e.style)}))}}))}));T.displayName="Overlay",T.defaultProps=R;var _=T,S=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"];function F(e,n,r){var o=(0,a.Z)(n,1)[0],t=o.currentTarget,s=o.relatedTarget||o.nativeEvent[r];s&&s===t||(0,l.Z)(t,s)||e.apply(void 0,(0,i.Z)(n))}function M(e){var n=e.trigger,r=e.overlay,i=e.children,l=e.popperConfig,f=void 0===l?{}:l,d=e.show,v=e.defaultShow,h=void 0!==v&&v,Z=e.onToggle,w=e.delay,m=e.placement,g=e.flip,y=void 0===g?m&&-1!==m.indexOf("auto"):g,E=(0,t.Z)(e,S),x=(0,s.useRef)(null),C=(0,p.Z)(x,i.ref),P=(0,c.Z)(),O=(0,s.useRef)(""),j=(0,u.$c)(d,h,Z),N=(0,a.Z)(j,2),R=N[0],T=N[1],M=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(w),B="function"!==typeof i?s.Children.only(i).props:{},D=B.onFocus,H=B.onBlur,z=B.onClick,A=(0,s.useCallback)((function(){P.clear(),O.current="show",M.show?P.set((function(){"show"===O.current&&T(!0)}),M.show):T(!0)}),[M.show,T,P]),U=(0,s.useCallback)((function(){P.clear(),O.current="hide",M.hide?P.set((function(){"hide"===O.current&&T(!1)}),M.hide):T(!1)}),[M.hide,T,P]),$=(0,s.useCallback)((function(){A(),null==D||D.apply(void 0,arguments)}),[A,D]),q=(0,s.useCallback)((function(){U(),null==H||H.apply(void 0,arguments)}),[U,H]),G=(0,s.useCallback)((function(){T(!R),null==z||z.apply(void 0,arguments)}),[z,T,R]),I=(0,s.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];F(A,n,"fromElement")}),[A]),J=(0,s.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];F(U,n,"toElement")}),[U]),K=null==n?[]:[].concat(n),L={ref:function(e){C((0,k.Z)(e))}};return-1!==K.indexOf("click")&&(L.onClick=G),-1!==K.indexOf("focus")&&(L.onFocus=$,L.onBlur=q),-1!==K.indexOf("hover")&&(L.onMouseOver=I,L.onMouseOut=J),(0,b.jsxs)(b.Fragment,{children:["function"===typeof i?i(L):(0,s.cloneElement)(i,L),(0,b.jsx)(_,(0,o.Z)((0,o.Z)({},E),{},{show:R,onHide:U,flip:y,placement:m,popperConfig:f,target:x.current,children:r}))]})}M.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var B=M},63739:function(e,n,r){r.d(n,{Z:function(){return w}});var o=r(1413),t=r(29439),i=r(45987),a=r(81694),l=r.n(a),s=r(72791),c=r(10162),u=r(66543),p=(0,u.Z)("popover-header"),f=(0,u.Z)("popover-body"),d=r(57860),v=r(80184),h=["bsPrefix","placement","className","style","children","body","arrowProps","popper","show"],Z=s.forwardRef((function(e,n){var r=e.bsPrefix,a=e.placement,s=e.className,u=e.style,p=e.children,Z=e.body,w=e.arrowProps,m=(e.popper,e.show,(0,i.Z)(e,h)),g=(0,c.vE)(r,"popover"),y=(0,c.SC)(),b=(null==a?void 0:a.split("-"))||[],E=(0,t.Z)(b,1)[0],x=(0,d.z)(E,y);return(0,v.jsxs)("div",(0,o.Z)((0,o.Z)({ref:n,role:"tooltip",style:u,"x-placement":E,className:l()(s,g,E&&"bs-popover-".concat(x))},m),{},{children:[(0,v.jsx)("div",(0,o.Z)({className:"popover-arrow"},w)),Z?(0,v.jsx)(f,{children:p}):p]}))}));Z.defaultProps={placement:"right"};var w=Object.assign(Z,{Header:p,Body:f,POPPER_OFFSET:[0,8]})},12576:function(e,n,r){var o=r(1413),t=r(29439),i=r(45987),a=r(81694),l=r.n(a),s=r(72791),c=r(10162),u=r(57860),p=r(80184),f=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],d=s.forwardRef((function(e,n){var r=e.bsPrefix,a=e.placement,s=e.className,d=e.style,v=e.children,h=e.arrowProps,Z=(e.popper,e.show,(0,i.Z)(e,f));r=(0,c.vE)(r,"tooltip");var w=(0,c.SC)(),m=(null==a?void 0:a.split("-"))||[],g=(0,t.Z)(m,1)[0],y=(0,u.z)(g,w);return(0,p.jsxs)("div",(0,o.Z)((0,o.Z)({ref:n,style:d,role:"tooltip","x-placement":g,className:l()(s,r,"bs-tooltip-".concat(y))},Z),{},{children:[(0,p.jsx)("div",(0,o.Z)({className:"tooltip-arrow"},h)),(0,p.jsx)("div",{className:"".concat(r,"-inner"),children:v})]}))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",n.Z=d},57860:function(e,n,r){r.d(n,{z:function(){return a}});var o=r(15671),t=r(60136),i=r(29388);r(72791).Component;function a(e,n){var r=e;return"left"===e?r=n?"end":"start":"right"===e&&(r=n?"start":"end"),r}}}]);
//# sourceMappingURL=6885.f0c5d829.chunk.js.map