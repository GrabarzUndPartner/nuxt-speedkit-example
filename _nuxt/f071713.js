!function(e){function n(data){for(var n,r,d=data[0],f=data[1],l=data[2],i=0,v=[];i<d.length;i++)r=d[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(m&&m(data);v.length;)v.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,i=0;i<c.length;i++){for(var n=c[i],t=!0,r=1;r<n.length;r++){var f=n[r];0!==o[f]&&(t=!1)}t&&(c.splice(i--,1),e=d(d.s=n[0]))}return e}var r={},o={0:0},c=[];function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,d.nc&&script.setAttribute("nonce",d.nc),script.src=function(e){return d.p+""+{2:"f53e6c5",3:"c5524ad",4:"ddd1767",5:"f57fb34",6:"bb6a36c",7:"683a74e",8:"04650a6",9:"3d009ce",10:"9a6aef8",11:"381962b",12:"fbc6ac0",13:"34676e0",14:"e807273",15:"2e43927",16:"27f63bb",17:"16ee163"}[e]+".js"}(e);var f=new Error;c=function(n){script.onerror=script.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(n,"a",n),n},d.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},d.p="/nuxt-speedkit-example/_nuxt/",d.oe=function(e){throw console.error(e),e};var f=window.webpackJsonp=window.webpackJsonp||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var i=0;i<f.length;i++)n(f[i]);var m=l;c.push([123,1]),t()}({123:function(e,n,t){e.exports=t(124)},124:function(e,n,t){"use strict";t.r(n),function(e){var n=t(56),r=(t(69),t(129),t(138),t(140),t(96),t(54),t(94),t(68),t(55),t(58),t(93),t(95),t(23)),o=t(91),c=!1;function d(){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=2;break}return e.abrupt("return");case 2:return c=!0,e.next=5,new Promise((function(e){return l(e)}));case 5:return e.abrupt("return",Promise.all([t.e(3),t.e(4),t.e(5)]).then(t.bind(null,144)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(n){"requestIdleCallback"in e?e.requestIdleCallback((function(e){e.timeRemaining()>10||e.didTimeout?n():l(n)}),{timeout:2e3}):n()}function m(){e.document.querySelectorAll("[data-font]").forEach((function(e){e.classList.add("font-active")}))}function v(button,e){button&&button.addEventListener("click",e,{capture:!0,once:!0,passive:!0})}function y(n){n.style.display="block",e.document.querySelector("#nuxt-speedkit-speedkit-layer").className+=" nuxt-speedkit-speedkit-layer-visible"}var _=Object(o.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(12[_.]2|12[_.]([3-9]|\\d{2,})|12[_.]5|12[_.]([6-9]|\\d{2,})|(1[3-9]|[2-9]\\d|\\d{3,})[_.]\\d+|14[_.]0|14[_.]([1-9]|\\d{2,})|14[_.]4|14[_.]([5-9]|\\d{2,})|14[_.]8|14[_.](9|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})[_.]\\d+|15[_.]0|15[_.]([1-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|(Opera Mini(?:\\/att)?\\/?(\\d+)?(?:\\.\\d+)?(?:\\.\\d+)?)|(Opera\\/.+Opera Mobi.+Version\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|(Opera\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+.+Opera Mobi)|(Opera Mobi.+Opera(?:\\/|\\s+)(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|((?:Chrome).*OPR\\/(82|(8[3-9]|9\\d|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(15|(1[6-9]|[2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(97|(9[8-9]|\\d{3,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(96|(9[7-9]|\\d{3,}))\\.\\d+(?:\\.\\d+)?)|(Version\\/(14\\.1|14\\.([2-9]|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})\\.\\d+|15\\.2|15\\.([3-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})\\.\\d+)(?:\\.\\d+)? Safari\\/)|(Trident\\/7\\.0)|(Firefox\\/(91|(9[2-9]|\\d{3,})|96|(9[7-9]|\\d{3,}))\\.\\d+\\.\\d+)|(Firefox\\/(91|(9[2-9]|\\d{3,})|96|(9[7-9]|\\d{3,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)|(([MS]?IE) (11|(1[2-9]|[2-9]\\d|\\d{3,}))\\.\\d+)","")});document.getElementById("nuxt-speedkit-speedkit-layer")?(Object(r.d)({device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:800,dcl:1200}}),function(n,t){t||y(e.document.getElementById("nuxt-speedkit-button-unsupported-browser")),Object(r.b)()||y(e.document.getElementById("nuxt-speedkit-button-outdated-device")),Object(r.a)()||y(e.document.getElementById("nuxt-speedkit-button-slow-connection")),v(e.document.getElementById("nuxt-speedkit-button-init-app"),n)}(d,_),("__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(r.c)()&&_)&&d(),v(e.document.getElementById("nuxt-speedkit-button-init-font"),m),"__NUXT_SPEEDKIT_FONT_INIT__"in e&&e.__NUXT_SPEEDKIT_FONT_INIT__&&m()):d()}.call(this,t(24))},23:function(e,n,t){"use strict";(function(e){t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return v}));t(54);var r={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800}},o=r,c=f(o);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o={device:Object.assign({},r.device,e.device||{}),timing:Object.assign({},r.timing,e.timing||{})},o=Object.assign({},r,e),c=f(o)}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.navigator||{};return{hardwareConcurrency:t.hardwareConcurrency||n.device.hardwareConcurrency.min,deviceMemory:t.deviceMemory||n.device.deviceMemory.min,userAgent:t.userAgent||""}}function l(){return v()&&m()&&!0}function m(){return c.hardwareConcurrency>=o.device.hardwareConcurrency.min&&c.hardwareConcurrency<=o.device.hardwareConcurrency.max&&c.deviceMemory>=o.device.deviceMemory.min}function v(){if(e.performance){var n=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(n.length)return n[0].startTime<o.timing.fcp;if(t.length)return t.reduce((function(e,n){return(!e||e<n.responseEnd)&&(e=n.responseEnd),e}),null)<o.timing.dcl}return!1}}).call(this,t(24))},91:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return r}));t(55),t(68),t(58);function r(n){return new RegExp(n.regex).test(e.navigator.userAgent)}}).call(this,t(24))}});