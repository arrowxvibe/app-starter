"use strict";(self.webpackChunkubold_react=self.webpackChunkubold_react||[]).push([[6911],{96911:function(e,n,t){t.r(n);var r=t(72791),i=t(60364),o=t(11087),s=t(33168),a=t(50061),c=t(23397),u=t(80184),l=function(){return(0,u.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[" ",(0,u.jsx)("circle",{className:"path circle",fill:"none",stroke:"#4bd396",strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"})," ",(0,u.jsx)("polyline",{className:"path check",fill:"none",stroke:"#4bd396",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})," "]})},f=function(){var e=(0,s.$)().t;return(0,u.jsx)("footer",{className:"footer footer-alt",children:(0,u.jsxs)("p",{className:"text-muted",children:[e("Back to ")," ",(0,u.jsx)(o.rU,{to:"/auth/login2",className:"text-muted ms-1",children:(0,u.jsx)("b",{children:e("Sign In")})})]})})};n.default=function(){var e=(0,s.$)().t,n=(0,i.I0)();return(0,r.useEffect)((function(){n((0,a.Li)())}),[n]),(0,r.useEffect)((function(){n((0,a.TX)())}),[n]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(c.Z,{bottomLinks:(0,u.jsx)(f,{}),children:(0,u.jsxs)("div",{className:"text-center",children:[(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)("div",{className:"logout-checkmark",children:(0,u.jsx)(l,{})})}),(0,u.jsx)("h3",{children:e("See you again !")}),(0,u.jsxs)("p",{className:"text-muted",children:[" ",e("You are now successfully sign out.")," "]})]})})})}},33168:function(e,n,t){t.d(n,{$:function(){return p}});var r=t(29439),i=t(4942),o=t(72791),s=t(74909);function a(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),a.apply(void 0,n))}function l(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,i=(0,o.useContext)(s.OO)||{},a=i.i18n,c=i.defaultNS,f=t||a||(0,s.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new s.zv),!f){u("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[p,{},!1];return g.t=p,g.i18n={},g.ready=!1,g}f.options.react&&void 0!==f.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=d(d(d({},(0,s.JP)()),f.options.react),n),v=h.useSuspense,m=h.keyPrefix,b=e||c||f.options&&f.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(b);var y=(f.isInitialized||f.initializedStoreOnce)&&b.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return u("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],i=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var s=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!s(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!n.services.backendConnector.backend||!(!s(r,e)||i&&!s(o,e)))}(e,f,h)}));function x(){return f.getFixedT(null,"fallback"===h.nsMode?b:b[0],m)}var j=(0,o.useState)(x),w=(0,r.Z)(j,2),k=w[0],O=w[1],N=(0,o.useRef)(!0);(0,o.useEffect)((function(){var e=h.bindI18n,n=h.bindI18nStore;function t(){N.current&&O(x)}return N.current=!0,y||v||l(f,b,(function(){N.current&&O(x)})),e&&f&&f.on(e,t),n&&f&&f.store.on(n,t),function(){N.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,t)})),n&&f&&n.split(" ").forEach((function(e){return f.store.off(e,t)}))}}),[f,b.join()]);var I=(0,o.useRef)(!0);(0,o.useEffect)((function(){N.current&&!I.current&&O(x),I.current=!1}),[f]);var P=[k,f,y];if(P.t=k,P.i18n=f,P.ready=y,y)return P;if(!y&&!v)return P;throw new Promise((function(e){l(f,b,(function(){e()}))}))}}}]);
//# sourceMappingURL=6911.fc158389.chunk.js.map