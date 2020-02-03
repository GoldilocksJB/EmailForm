!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EmailsEditor=t():e.EmailsEditor=t()}(window,(function(){return function(e){var t=window.webpackHotUpdateEmailsEditor;window.webpackHotUpdateEmailsEditor=function(e,n){!function(e,t){if(x[e]&&y[e]){for(var n in y[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===g&&I()}}(e,n),t&&t(e,n)};var n,r=!0,i="381ba9b269d25680739a",o=1e4,a={},c=[],s=[];function l(e){var t=j[e];if(!t)return C;function r(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),C(r)}function i(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}}for(var o in C)Object.prototype.hasOwnProperty.call(C,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,i(o));return r.e=function(e){return"ready"===d&&p("prepare"),g++,C.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===d&&(b[e]||k(e),0===g&&0===v&&I())}},r.t=function(e,t){return 1&t&&(e=r(e)),C.t(e,-2&t)},r}var u=[],d="idle";function p(e){d=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,h,m,v=0,g=0,b={},y={},x={};function E(e){return+e+""===e?+e:e}function w(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=(t=o)||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=C.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(t){return void n(t)}e(t)}}}))).then((function(e){if(!e)return p("idle"),null;y={},b={},x=e.c,m=e.h,p("prepare");var t=new Promise((function(e,t){f={resolve:e,reject:t}}));return h={},k(0),"prepare"===d&&0===g&&0===v&&I(),t}));var t}function k(e){var t,n;x[e]?(y[e]=!0,v++,t=e,(n=document.createElement("script")).charset="utf-8",n.src=C.p+""+t+"."+i+".hot-update.js",document.head.appendChild(n)):b[e]=!0}function I(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then((function(){return O(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(E(n));e.resolve(t)}}function O(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,o,s,l;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));0<r.length;){var i=r.pop(),o=i.id,a=i.chain;if((s=j[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],u=j[l];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),f(n[l],[o])):(delete n[l],t.push(l),r.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}function v(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")}t=t||{};var g={},b=[],y={};for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var k;l=E(w);var I=!1,O=!1,_=!1,A="";switch((k=h[w]?u(l):{type:"disposed",moduleId:w}).chain&&(A="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(I=new Error("Aborted because of self decline: "+k.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(I=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(I=new Error("Aborted because "+l+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(k),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),_=!0;break;default:throw new Error("Unexception type "+k.type)}if(I)return p("abort"),Promise.reject(I);if(O)for(l in y[l]=h[l],f(b,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,l)&&(g[l]||(g[l]=[]),f(g[l],k.outdatedDependencies[l]));_&&(f(b,[k.moduleId]),y[l]=v)}var D,L=[];for(r=0;r<b.length;r++)l=b[r],j[l]&&j[l].hot._selfAccepted&&y[l]!==v&&L.push({module:l,errorHandler:j[l].hot._selfAccepted});p("dispose"),Object.keys(x).forEach((function(e){!1===x[e]&&delete installedChunks[e]}));for(var S,M,H=b.slice();0<H.length;)if(l=H.pop(),s=j[l]){var P={},N=s.hot._disposeHandlers;for(o=0;o<N.length;o++)(n=N[o])(P);for(a[l]=P,s.hot.active=!1,delete j[l],delete g[l],o=0;o<s.children.length;o++){var V=j[s.children[o]];V&&0<=(D=V.parents.indexOf(l))&&V.parents.splice(D,1)}}for(l in g)if(Object.prototype.hasOwnProperty.call(g,l)&&(s=j[l]))for(M=g[l],o=0;o<M.length;o++)S=M[o],0<=(D=s.children.indexOf(S))&&s.children.splice(D,1);for(l in p("apply"),i=m,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var z=null;for(l in g)if(Object.prototype.hasOwnProperty.call(g,l)&&(s=j[l])){M=g[l];var T=[];for(r=0;r<M.length;r++)if(S=M[r],n=s.hot._acceptedDependencies[S]){if(-1!==T.indexOf(n))continue;T.push(n)}for(r=0;r<T.length;r++){n=T[r];try{n(M)}catch(n){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:M[r],error:n}),t.ignoreErrored||(z=z||n)}}}for(r=0;r<L.length;r++){var U=L[r];l=U.module,c=[l];try{C(l)}catch(r){if("function"==typeof U.errorHandler)try{U.errorHandler(r)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:r}),t.ignoreErrored||(z=z||n),z=z||r}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:r}),t.ignoreErrored||(z=z||r)}}return z?(p("fail"),Promise.reject(z)):(p("idle"),new Promise((function(e){e(b)})))}var j={};function C(t){if(j[t])return j[t].exports;var r,i,o=j[t]={i:t,l:!1,exports:{},hot:(i={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==(r=t),active:!0,accept:function(e,t){if(void 0===e)i._selfAccepted=!0;else if("function"==typeof e)i._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)i._acceptedDependencies[e[n]]=t||function(){};else i._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)i._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)i._declinedDependencies[e[t]]=!0;else i._declinedDependencies[e]=!0},dispose:function(e){i._disposeHandlers.push(e)},addDisposeHandler:function(e){i._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=i._disposeHandlers.indexOf(e);0<=t&&i._disposeHandlers.splice(t,1)},check:w,apply:O,status:function(e){if(!e)return d;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);0<=t&&u.splice(t,1)},data:a[r]},n=void 0,i),parents:(s=c,c=[],s),children:[]};return e[t].call(o.exports,o,o.exports,l(t)),o.l=!0,o.exports}return C.m=e,C.c=j,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(C.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)C.d(n,r,function(t){return e[t]}.bind(null,r));return n},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="",C.h=function(){return i},l(4)(C.s=4)}([function(e,t,n){(t=e.exports=n(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);",""]),t.push([e.i,'body{font-family:Open Sans,sans-serif}.formContainer{max-width:540px;max-height:300px;height:100%;width:100%;background:#fff;box-shadow:0 8px 20px rgba(0,0,0,.2);overflow:hidden;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:8px}.headerContainer{height:204px;background:#f8f8f7;border-radius:8px;padding:0 50px}.header{font-size:20px;line-height:27px;margin:30px 0 24px}.inputContainer{overflow:auto;height:96px;border:1px solid #c3c2cf;box-sizing:border-box;border-radius:4px;background:#fff;font-size:14px;line-height:24px;padding:8px;position:relative;margin-bottom:24px}input{-webkit-appearance:none}input::-webkit-input-placeholder{color:#c3c2cf;font-size:14px;line-height:24px}input::-moz-placeholder{color:#c3c2cf;font-size:14px;line-height:24px}input:-ms-input-placeholder{color:#c3c2cf;font-size:14px;line-height:24px}input::-ms-input-placeholder{color:#c3c2cf;font-size:14px;line-height:24px}input::placeholder{color:#c3c2cf;font-size:14px;line-height:24px}.buttonsContainer{background-color:#fff;height:96px;padding:24px 50px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.clickButton{background:#4262ff;border-radius:6px;padding:0 16px;height:40px;border:none;font-size:14px;line-height:24px;color:#fff;margin-right:16px;outline:none;opacity:.93;-webkit-transition:.4s;transition:.4s}.clickButton:hover{opacity:1;cursor:pointer}.mainInput{border:0;outline:none;font-size:14px;line-height:24px}.mainInputContainer{position:relative}@-webkit-keyframes appear{1%{opacity:.5}to{opacity:1}}.inputInvalid{margin:0 20px 3px 0}.inputInvalid,.inputValid{display:inline-block;position:relative;-webkit-animation:appear .2s ease-out;animation:appear .2s ease-out}.inputValid{background-color:rgba(102,153,255,.2);border-radius:100px;padding:0 10px;margin:0 5px 3px 0}.fakeInputValid{padding:0 10px 0 0}.fakeInputInvalid{border-bottom:1px dashed #d14836}.closeValid{position:absolute;right:6px;top:14px;width:10px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer}.closeValid:after{width:9px;height:1px;margin-left:-4px}.closeValid:after,.closeValid:before{position:absolute;content:"";background:#000}.closeValid:before{width:1px;height:9px;margin-top:-4px}.closeInvalid{position:absolute;right:-13px;top:14px;width:10px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer}.closeInvalid:after{width:9px;height:1px;margin-left:-4px}.closeInvalid:after,.closeInvalid:before{position:absolute;content:"";background:#c3c2cf}.closeInvalid:before{width:1px;height:9px;margin-top:-4px}',""])},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var i=n(3)(r,{insert:"head",singleton:!1});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(0,(function(){var t=n(0);"string"==typeof t&&(t=[[e.i,t,""]]),i(t)})),e.hot.dispose((function(){i()}))},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";var r,i,o={},a=(i={},function(e){if(void 0===i[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}i[e]=t}return i[e]});function c(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function s(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(m(r.parts[a],t))}else{for(var c=[];a<r.parts.length;a++)c.push(m(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}var f=null,h=0;function m(e,t){var n,r,i;if(t.singleton){var o=h++;n=f=f||l(t),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=l(t),r=function(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&e.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),i=function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e,t);return s(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],l=o[a.id];l&&(l.refs--,r.push(l))}e&&s(c(e,t),t);for(var u=0;u<r.length;u++){var d=r[u];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete o[d.id]}}}}},function(e,t,n){"use strict";n.r(t);var r={deleteEmail:function(e){console.log("Cross.parentInput",e),console.log("Cross.parentInput.parentElement",e.parentElement),e.parentElement.removeChild(e)},generate:function(e,t,n){r.parentInput=e.parentElement;var i=document.createElement("span");i.setAttribute("class",t?"closeValid":"closeInvalid"),i.addEventListener("click",(function(){r.deleteEmail(e.parentElement),n(e.value)})),e.parentElement.append(i)}},i=r,o=function(e,t){var n=document.createElement("button");return n.setAttribute("class","clickButton"),n.innerHTML=e,n.onclick=t,n},a={min:3,max:0,setStringLength:function(e){return a.max=e,Math.random()*(a.max-a.min)+a.min},setString:function(e){for(var t="",n=0;n<e;n++)t+=Math.random().toString(36).substring(11);if(t.length>a.max){var r=t.length-a.max;return t.substring(r)}return t},generate:function(){var e=a.setStringLength(12),t=a.setString(e),n=a.setStringLength(4),r=a.setString(n);return"".concat(t,"@").concat(r,".ru")}},c=a,s={generateButtonContainer:function(e){var t=document.createElement("div");t.setAttribute("class","buttonsContainer");var n=o("Add email",(function(){return e.newInputCallback(c.generate())}));t.append(n);var r=o("Get emails count",(function(){return l(e.emails)}));return t.append(r),t}},l=function(e){alert("Valid emails: ".concat(e.length))},u=s,d=/^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,64}/i,p={emails:[],currentEmptyEmail:null,root:null,listener:function(){},setEmailsList:function(e){p.emails=e,p.listener(e)},defineListener:function(e){p.listener=e},generateNewInput:function(e,t){var n;if(p.root||(p.root=t),p.currentEmptyEmail?n=p.currentEmptyEmail:(n=g(n),p.root.append(n.parentNode),p.currentEmptyEmail=n),e)return n.value=e,void p.checkEmailValue(n);n.addEventListener("keypress",(function(e){return h(e,n)})),n.addEventListener("blur",(function(e){return m(e)})),n.addEventListener("paste",(function(e){return v(e)}))},checkEmailValue:function(e){var t=e.value.replace(/\s/g,"");if(-1!==t.indexOf(",")){var n=t.split(",");return e.value=n[0],p.createEmail(e),void n.shift().map((function(e){return p.generateNewInput(e,p.root)}))}e.value=t,p.createEmail(e),p.generateNewInput(null,p.root)},createEmail:function(e){var t=!!d.test(e.value),n=document.createElement("span");if(n.innerHTML=e.value,e.parentNode.appendChild(n),e.style.display="none",t){var r=p.emails;r.push(e.value),p.setEmailsList(r),e.parentNode.setAttribute("class","inputValid"),n.setAttribute("class","fakeInputValid")}else e.parentNode.setAttribute("class","inputInvalid"),n.setAttribute("class","fakeInputInvalid");i.generate(e,t,f),p.currentEmptyEmail=null},generate:function(e){var t=document.createElement("div");t.setAttribute("class","formContainer");var n=document.createElement("div");n.setAttribute("class","headerContainer"),t.append(n);var r=document.createElement("div");r.setAttribute("class","header"),r.innerHTML="Share <strong>Board name</strong> with others",n.append(r);var i=document.createElement("div");i.setAttribute("class","inputContainer"),n.append(i),p.generateNewInput(null,i);var o=u.generateButtonContainer({emails:p.emails,newInputCallback:p.generateNewInput});t.append(o),e.appendChild(t)},subscribeEmailChanges:function(e){p.defineListener(e)},setNewEmailList:function(e){if(e.isArray()){var t=e.join(",");p.currentEmptyEmail=t,p.checkEmailValue(p.currentEmptyEmail),p.setEmailsList(e)}else{p.currentEmptyEmail=e,p.checkEmailValue(p.currentEmptyEmail);var n=e.split(",");p.setEmailsList(n)}}},f=function(e){var t=p.emails.indexOf(e);p.emails.splice(t,1),p.setEmailsList(p.emails)},h=function(e){13!==e.keyCode&&44!==e.keyCode||p.checkEmailValue(e.target)},m=function(e){if(0<e.target.value.length){if("none"===e.target.style.display)return;p.checkEmailValue(e.target)}},v=function(e){var t=e.clipboardData.getData("text");if(0<t.length){if("none"===e.target.style.display)return;e.target.value=t,p.checkEmailValue(e.target)}},g=function(e){var t=document.createElement("span");return t.setAttribute("class","mainInputContainer"),(e=document.createElement("input")).setAttribute("class","mainInput"),e.setAttribute("type","text"),e.setAttribute("placeholder","add more people..."),t.append(e),e},b=p;function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=t}var t,n;return t=e,(n=[{key:"initEmailsEditor",value:function(){b.generate(this.root)}},{key:"subscribeEmailsChanges",value:function(e){b.defineListener(e)}},{key:"getEmailsList",value:function(){return b.emails}},{key:"setEmailsList",value:function(e){b.setNewEmailList(e)}}])&&y(t.prototype,n),e}();n(1),t.default=x}]).default}));