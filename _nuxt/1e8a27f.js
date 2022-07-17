/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6,15],{183:function(t,e,n){var r=n(5);t.exports=function(t){return r(Set.prototype.values,t)}},226:function(t,e,n){"use strict";var r="bfred-it:object-fit-images",o=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,c="undefined"==typeof Image?{style:{"object-position":1}}:new Image,l="object-fit"in c.style,f="object-position"in c.style,d="background-size"in c.style,h="string"==typeof c.currentSrc,m=c.getAttribute,v=c.setAttribute,y=!1;function O(img,t,e){var n="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(e||0)+"'%3E%3C/svg%3E";m.call(img,"src")!==n&&v.call(img,"src",n)}function j(img,t){img.naturalWidth?t(img):setTimeout(j,100,img,t)}function w(t){var style=function(t){for(var e,style=getComputedStyle(t).fontFamily,n={};null!==(e=o.exec(style));)n[e[1]]=e[2];return n}(t),e=t[r];if(style["object-fit"]=style["object-fit"]||"fill",!e.img){if("fill"===style["object-fit"])return;if(!e.skipTest&&l&&!style["object-position"])return}if(!e.img){e.img=new Image(t.width,t.height),e.img.srcset=m.call(t,"data-ofi-srcset")||t.srcset,e.img.src=m.call(t,"data-ofi-src")||t.src,v.call(t,"data-ofi-src",t.src),t.srcset&&v.call(t,"data-ofi-srcset",t.srcset),O(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[r].img[e||"src"]},set:function(e,n){return t[r].img[n||"src"]=e,v.call(t,"data-ofi-"+n,e),w(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!h&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(e.img),t.style.backgroundImage='url("'+(e.img.currentSrc||e.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=style["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(style["object-fit"])?j(e.img,(function(){e.img.naturalWidth>t.width||e.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=style["object-fit"].replace("none","auto").replace("fill","100% 100%"),j(e.img,(function(img){O(t,img.naturalWidth,img.naturalHeight)}))}function S(t,e){var n=!y&&!t;if(e=e||{},t=t||"img",f&&!e.skipTest||!d)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var i=0;i<t.length;i++)t[i][r]=t[i][r]||{skipTest:e.skipTest},w(t[i]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&S(t.target,{skipTest:e.skipTest})}),!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",S.bind(null,t,{skipTest:e.skipTest}))}S.supportsObjectFit=l,S.supportsObjectPosition=f,function(){function t(t,e){return t[r]&&t[r].img&&("src"===e||"srcset"===e)?t[r].img:t}f||(HTMLImageElement.prototype.getAttribute=function(e){return m.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return v.call(t(this,e),e,String(n))})}(),t.exports=S},284:function(t,e){t.exports={getCrossorigin:function(t,e){return t=void 0===(t=!0===t?"anonymous":t)?e||"anonymous":t}}},285:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("31f464f1",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(170).default)("0130eecc",content,!0,{sourceMap:!1})},382:function(t,e,n){n(383)},383:function(t,e,n){"use strict";n(274)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(275))},384:function(t,e,n){"use strict";n(9)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:n(385)})},385:function(t,e,n){"use strict";var r=n(5),o=n(15),c=n(6);t.exports=function(){for(var t=c(this),e=o(t.add),n=0,l=arguments.length;n<l;n++)r(e,t,arguments[n]);return t}},386:function(t,e,n){"use strict";n(9)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:n(276)})},387:function(t,e,n){"use strict";var r=n(9),o=n(12),c=n(5),l=n(15),f=n(6),d=n(64),h=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=f(this),n=new(d(e,o("Set")))(e),r=l(n.delete);return h(t,(function(t){c(r,n,t)})),n}})},388:function(t,e,n){"use strict";var r=n(9),o=n(6),c=n(20),l=n(183),f=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),n=l(e),r=c(t,arguments.length>1?arguments[1]:void 0);return!f(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},389:function(t,e,n){"use strict";var r=n(9),o=n(12),c=n(5),l=n(15),f=n(6),d=n(20),h=n(64),m=n(183),v=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=f(this),n=m(e),r=d(t,arguments.length>1?arguments[1]:void 0),y=new(h(e,o("Set"))),O=l(y.add);return v(n,(function(t){r(t,t,e)&&c(O,y,t)}),{IS_ITERATOR:!0}),y}})},390:function(t,e,n){"use strict";var r=n(9),o=n(6),c=n(20),l=n(183),f=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),n=l(e),r=c(t,arguments.length>1?arguments[1]:void 0);return f(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},391:function(t,e,n){"use strict";var r=n(9),o=n(12),c=n(5),l=n(15),f=n(6),d=n(64),h=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=f(this),n=new(d(e,o("Set"))),r=l(e.has),m=l(n.add);return h(t,(function(t){c(r,e,t)&&c(m,n,t)})),n}})},392:function(t,e,n){"use strict";var r=n(9),o=n(5),c=n(15),l=n(6),f=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=l(this),n=c(e.has);return!f(t,(function(t,r){if(!0===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},393:function(t,e,n){"use strict";var r=n(9),o=n(12),c=n(5),l=n(15),f=n(1),d=n(6),h=n(74),m=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=h(this),n=d(t),r=n.has;return f(r)||(n=new(o("Set"))(t),r=l(n.has)),!m(e,(function(t,e){if(!1===c(r,n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},394:function(t,e,n){"use strict";var r=n(9),o=n(5),c=n(15),l=n(6),f=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=l(this),n=c(e.has);return!f(t,(function(t,r){if(!1===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},395:function(t,e,n){"use strict";var r=n(9),o=n(3),c=n(6),l=n(19),f=n(183),d=n(61),h=o([].join),m=[].push;r({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),n=f(e),r=void 0===t?",":l(t),o=[];return d(n,m,{that:o,IS_ITERATOR:!0}),h(o,r)}})},396:function(t,e,n){"use strict";var r=n(9),o=n(12),c=n(20),l=n(5),f=n(15),d=n(6),h=n(64),m=n(183),v=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=d(this),n=m(e),r=c(t,arguments.length>1?arguments[1]:void 0),y=new(h(e,o("Set"))),O=f(y.add);return v(n,(function(t){l(O,y,r(t,t,e))}),{IS_ITERATOR:!0}),y}})},397:function(t,e,n){"use strict";var r=n(9),o=n(15),c=n(6),l=n(183),f=n(61),d=TypeError;r({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),n=l(e),r=arguments.length<2,h=r?void 0:arguments[1];if(o(t),f(n,(function(n){r?(r=!1,h=n):h=t(h,n,n,e)}),{IS_ITERATOR:!0}),r)throw d("Reduce of empty set with no initial value");return h}})},398:function(t,e,n){"use strict";var r=n(9),o=n(6),c=n(20),l=n(183),f=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),n=l(e),r=c(t,arguments.length>1?arguments[1]:void 0);return f(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},399:function(t,e,n){"use strict";var r=n(9),o=n(12),c=n(5),l=n(15),f=n(6),d=n(64),h=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=f(this),n=new(d(e,o("Set")))(e),r=l(n.delete),m=l(n.add);return h(t,(function(t){c(r,n,t)||c(m,n,t)})),n}})},400:function(t,e,n){"use strict";var r=n(9),o=n(12),c=n(15),l=n(6),f=n(64),d=n(61);r({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=l(this),n=new(f(e,o("Set")))(e);return d(t,c(n.add),{that:n}),n}})},401:function(t,e,n){"use strict";var r=n(9),o=n(5);r({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return o(URL.prototype.toString,this)}})},402:function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h}));var o=n(188),c=n(63),l=(n(104),n(62),n(172),n(191),n(194),n(60),n(163),n(218),n(212),n(102),n(103),n(211)),f=["avif","webp","png","jpg","gif"],d=function(t){var e=Object(l.f)(t).pathname,n=/[.]/.exec(e)&&/[^.]+$/.exec(e)[0];return f.includes(n)?n:"jpg"},h=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(source,c,f){var d,h,m,v,y,O,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.Image){e.next=8;break}return source=source.modify({src:c}),e.next=4,new Promise((function(e){var img=new t.Image;img.onload=function(){return e(img)},img.src=source.src}));case 4:return d=e.sent,e.abrupt("return",source.modify({width:d.naturalWidth,height:d.naturalHeight}));case 8:return h=c,Object.entries(f||{}).length&&(h=Object.entries(f||{}).find((function(t){return Object(o.a)(t,2)[1].endsWith(h)}))[0]),source=source.modify({src:Object(l.c)(r.env.NUXT_SPEEDKIT_INTERAL_URL,h)}),e.next=13,fetch(source.src);case 13:return m=e.sent,e.next=16,n.e(7).then(n.t.bind(null,414,7));case 16:return v=e.sent.default,e.t0=v,e.next=20,m.buffer();case 20:return e.t1=e.sent,y=(0,e.t0)(e.t1),O=y.width,j=y.height,e.abrupt("return",source.modify({width:O,height:j}));case 25:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}).call(this,n(28),n(239))},403:function(t,e,n){"use strict";n(285)},404:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*! purgecss start ignore */.nuxt-speedkit-image[data-v-3be585ed]{content-visibility:auto;display:block;width:100%;height:auto;font-family:"object-fit:cover";-o-object-fit:cover;object-fit:cover}\n\n/*! purgecss end ignore */',""]),r.locals={},t.exports=r},405:function(t,e){const n=/(!?\(\s*min(-device-)?-width)(.|\n)+\(\s*max(-device)?-width/i,r=/(!?\(\s*max(-device)?-width)(.|\n)+\(\s*min(-device)?-width/i,o=j(n,r,/\(\s*min(-device)?-width/i),c=j(r,n,/\(\s*max(-device)?-width/i),l=/(!?\(\s*min(-device)?-height)(.|\n)+\(\s*max(-device)?-height/i,f=/(!?\(\s*max(-device)?-height)(.|\n)+\(\s*min(-device)?-height/i,d=j(l,f,/\(\s*min(-device)?-height/i),h=j(f,l,/\(\s*max(-device)?-height/i),m=/print/i,v=/^print$/i,y=Number.MAX_VALUE;function O(t){if(null===(t=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(t)))return y;let e=t[1];switch(t[2]){case"ch":e=8.8984375*parseFloat(e);break;case"em":case"rem":e=16*parseFloat(e);break;case"ex":e=8.296875*parseFloat(e);break;case"px":e=parseFloat(e)}return+e}function j(t,e,n){return function(r){return!!t.test(r)||!e.test(r)&&n.test(r)}}function w(a,b){const t=m.test(a),e=v.test(a),n=m.test(b),r=v.test(b);return t&&n?!e&&r?1:e&&!r?-1:a.localeCompare(b):t?1:n?-1:null}t.exports=function(t){const e=(t||{}).unitlessMqAlwaysFirst;function n(a,b){const t=w(a,b);if(null!==t)return t;const n=o(a)||d(a),r=c(a)||h(a),l=o(b)||d(b),f=c(b)||h(b);if(!e||(n||r)&&(l||f)){if(n&&f)return-1;if(r&&l)return 1;const t=O(a),e=O(b);return t===y&&e===y?a.localeCompare(b):t===y?1:e===y?-1:t>e?r?-1:1:t<e?r?1:-1:a.localeCompare(b)}return n||r||l||f?l||f?-1:1:a.localeCompare(b)}return n.desktopFirst=function(a,b){const t=w(a,b);if(null!==t)return t;const n=o(a)||d(a),r=c(a)||h(a),l=o(b)||d(b),f=c(b)||h(b);if(!e||(n||r)&&(l||f)){if(n&&f)return 1;if(r&&l)return-1;const t=O(a),e=O(b);return t===y&&e===y?a.localeCompare(b):t===y?1:e===y?-1:t>e?r?-1:1:t<e?r?1:-1:-a.localeCompare(b)}return n||r||l||f?l||f?-1:1:a.localeCompare(b)},n}},406:function(t,e,n){"use strict";n(286)},407:function(t,e,n){var r=n(169)((function(i){return i[1]}));r.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*! purgecss start ignore */.nuxt-speedkit-picture[data-v-0c9016bb]{position:relative;box-sizing:border-box;display:block;width:100%}.nuxt-speedkit-picture img[data-v-0c9016bb]{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.nuxt-speedkit-picture[data-v-0c9016bb]:before{position:relative;box-sizing:border-box;display:block;content:""}@supports (aspect-ratio:1){.nuxt-speedkit-picture[data-v-0c9016bb]{position:unset}.nuxt-speedkit-picture img[data-v-0c9016bb]{position:unset;top:unset;right:unset;bottom:unset;left:unset}.nuxt-speedkit-picture[data-v-0c9016bb]:before{display:none}}\n\n/*! purgecss end ignore */',""]),r.locals={},t.exports=r},426:function(t,e,n){"use strict";n(163),n(161),n(160),n(60),n(167),n(101),n(168);var r=n(165),o=n(280),c=n(63),l=(n(104),n(172),n(105),n(102),n(382),n(384),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(103),n(166),n(194),n(185),n(164),n(228)),f=n(173),d=n(174),h=n(186),m=n(187),v=(n(401),n(193)),y=n(402);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(m.a)("src"),S=Object(m.a)("sizes"),k=Object(m.a)("media"),x=Object(m.a)("width"),P=Object(m.a)("height"),T=Object(m.a)("format"),E=Object(m.a)("quality"),R=Object(m.a)("preload"),N=Object(m.a)("modifiers"),I=Object(m.a)("provider"),z=Object(m.a)("preset"),_=function(){function t(e){var n=e.src,r=e.sizes,o=e.width,c=e.height,l=e.media,d=void 0===l?"all":l,m=e.quality,v=void 0===m?70:m,y=e.format,O=void 0===y?null:y,j=e.preload,_=void 0!==j&&j,D=e.modifiers,A=void 0===D?{}:D,$=e.provider,M=void 0===$?void 0:$,C=e.preset,L=void 0===C?void 0:C;Object(f.a)(this,t),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,S,{writable:!0,value:null}),Object.defineProperty(this,k,{writable:!0,value:null}),Object.defineProperty(this,x,{writable:!0,value:null}),Object.defineProperty(this,P,{writable:!0,value:null}),Object.defineProperty(this,T,{writable:!0,value:null}),Object.defineProperty(this,E,{writable:!0,value:null}),Object.defineProperty(this,R,{writable:!0,value:!1}),Object.defineProperty(this,N,{writable:!0,value:{}}),Object.defineProperty(this,I,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object(h.a)(this,w)[w]=n,Object(h.a)(this,S)[S]=r,Object(h.a)(this,k)[k]=d,Object(h.a)(this,x)[x]=o,Object(h.a)(this,P)[P]=c,Object(h.a)(this,T)[T]=O,Object(h.a)(this,E)[E]=v,Object(h.a)(this,R)[R]=_,Object(h.a)(this,N)[N]=A,Object(h.a)(this,I)[I]=M,Object(h.a)(this,z)[z]=L}return Object(d.a)(t,[{key:"key",get:function(){return Object(v.a)(JSON.stringify(this.toJSON()))}},{key:"src",get:function(){return Object(h.a)(this,w)[w]}},{key:"sizes",get:function(){return Object(h.a)(this,S)[S]}},{key:"media",get:function(){return Object(h.a)(this,k)[k]}},{key:"width",get:function(){return Object(h.a)(this,x)[x]}},{key:"height",get:function(){return Object(h.a)(this,P)[P]}},{key:"ratio",get:function(){return Object(h.a)(this,x)[x]/Object(h.a)(this,P)[P]}},{key:"format",get:function(){var t,e=Object(y.a)(Object(h.a)(this,w)[w]);return null!==(t=Object(h.a)(this,T)[T])&&void 0!==t&&t.includes(e)?e:Object(h.a)(this,T)[T]||e}},{key:"quality",get:function(){return Object(h.a)(this,E)[E]}},{key:"preload",get:function(){return Object(h.a)(this,R)[R]}},{key:"modifiers",get:function(){return Object(h.a)(this,N)[N]}},{key:"provider",get:function(){return Object(h.a)(this,I)[I]}},{key:"preset",get:function(){return Object(h.a)(this,z)[z]}},{key:"className",get:function(){return"image-".concat(Object(v.a)(this.src))}},{key:"style",get:function(){return"\n      @supports (aspect-ratio: 1) {\n        @media ".concat(this.media," { .").concat(this.className," { aspect-ratio: ").concat(this.width," / ").concat(this.height,"; } }\n      }\n    ")}},{key:"getModifiers",value:function(){return j(j({},this.modifiers),{},{format:this.format,quality:this.quality})}},{key:"getOptions",value:function(){return{provider:this.provider,preset:this.preset}}},{key:"getMeta",value:function(e,n){return Object(y.b)(new t(j({},this.toJSON())),e,n)}},{key:"getPreload",value:function(t,e,n){var r={rel:"preload",as:"image",imagesrcset:t,imagesizes:e,media:this.media};return n&&(r.crossorigin=n),r}},{key:"modify",value:function(e){return new t(j(j({},this.toJSON()),e))}},{key:"toJSON",value:function(){return{src:Object(h.a)(this,w)[w],sizes:Object(h.a)(this,S)[S],media:Object(h.a)(this,k)[k],width:Object(h.a)(this,x)[x],height:Object(h.a)(this,P)[P],format:Object(h.a)(this,T)[T],quality:Object(h.a)(this,E)[E],preload:Object(h.a)(this,R)[R],modifiers:Object(h.a)(this,N)[N],provider:Object(h.a)(this,I)[I],preset:Object(h.a)(this,z)[z]}}}],[{key:"create",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(l.a)(this,e)}}]),t}(),D=n(225),A=n(284);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function M(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C,L={inheritAttrs:!1,props:{source:{type:[_,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}},loadingSpinner:{type:D.a,default:function(){return this.$speedkit.loader()}}},data:function(){return{className:null,loading:!0,config:null,meta:null}},fetchKey:function(){var t;return this.source?"image-".concat(null===(t=new _(this.source))||void 0===t?void 0:t.key):"image"},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,source,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.source){e.next=8;break}return source=new _(t.source),t.config=t.$img.getSizes(source.src,M({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions())),r=t.$nuxt.context.ssrContext,e.next=6,source.getMeta(t.config.src,(null==r||null===(n=r.nuxt)||void 0===n?void 0:n._img)||{});case 6:t.meta=e.sent,t.className=t.meta.className;case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames:function(){var t=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&t.push(this.loadingSpinner.className),t},srcset:function(){var t,e;return(null===(t=this.config)||void 0===t?void 0:t.srcset)||(null===(e=this.config)||void 0===e?void 0:e.src)},sizes:function(){var t;return null===(t=this.config)||void 0===t?void 0:t.sizes},width:function(){var t;return this.$attrs.width||(null===(t=this.meta)||void 0===t?void 0:t.width)},height:function(){var t;return this.$attrs.height||(null===(t=this.meta)||void 0===t?void 0:t.height)},loadingMode:function(){return this.isCritical?"eager":"lazy"},decodingMode:function(){return this.source&&"svg"===new _(this.source).format?"sync":"async"},style:function(){return[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},this.meta&&{hid:this.className,type:"text/css",cssText:new _(this.meta).style}].filter(Boolean)},preload:function(){return this.config&&this.isCritical?[new _(this.source).getPreload(this.config.srcset,this.config.sizes,Object(A.getCrossorigin)(this.crossorigin))]:[]}},mounted:function(){this.loading=!this.$el.complete},methods:{getCrossorigin:A.getCrossorigin,onLoad:function(t){this.loading=!1,this.$emit("load",t.target.currentSrc)}}},F=(n(403),n(162)),U=Object(F.a)(L,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",t._g(t._b({staticClass:"nuxt-speedkit-image",class:t.classNames,attrs:{srcset:t.srcset,sizes:t.sizes,width:t.width,height:t.height,title:t.title,alt:t.alt||t.title,loading:t.loadingMode,decoding:t.decodingMode,crossorigin:t.getCrossorigin(t.crossorigin)}},"img",t.$attrs,!1),Object.assign({},t.$listeners,{load:t.onLoad})))}),[],!1,null,"3be585ed",null).exports,J=(n(179),n(255),n(178),n(177),n(405));function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function H(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var W=n.n(J)()(),K=Object(m.a)("list");C=Symbol.iterator;var X=function(){function t(e){Object(f.a)(this,t),Object.defineProperty(this,K,{writable:!0,value:[]}),Object(h.a)(this,K)[K]=Object(h.a)(this,K)[K].concat(Array.from(e||Object(h.a)(this,K)[K]).map((function(t){return new _(t)})))}var e;return Object(d.a)(t,[{key:C,value:function(){return Object(h.a)(this,K)[K].values()}},{key:"key",get:function(){return Object(h.a)(this,K)[K].map((function(source){return source.key})).join("-")}},{key:"list",get:function(){return Object(h.a)(this,K)[K]}},{key:"sorted",get:function(){return Object(h.a)(this,K)[K].sort((function(a,b){return W(a.media,b.media)}))}},{key:"style",get:function(){var t=this;return Object(h.a)(this,K)[K].map((function(e){var n=e.media,r=e.width,o=e.height,c=e.style;return"\n      @media ".concat(n," { .").concat(t.className,"::before { padding-top: calc((1 / (").concat(r," / ").concat(o,")) * 100%); } }\n      @supports (aspect-ratio: 1) {\n        @media ").concat(n," { .").concat(t.className," { aspect-ratio: ").concat(r," / ").concat(o,"; } }\n      }\n      ").concat(c,"\n    ")})).reverse().join(" ")}},{key:"className",get:function(){return"picture-".concat(Object(v.a)(this.sorted.map((function(t){return t.src})).join(",")))}},{key:"classNames",get:function(){return{picture:this.className,image:Object(h.a)(this,K)[K].map((function(source){return source.className}))}}},{key:"getFormats",value:function(t,e,n){return this.sorted.reduce((function(r,source){return r.concat(t.map((function(t){return source.modify({format:t,preload:t.includes(e)&&n})})))}),[])}},{key:"getMeta",value:(e=Object(c.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.sorted.map((function(source){var t,e=n.getSizes(source.src,H({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));return source.getMeta(e.src,null==r||null===(t=r.nuxt)||void 0===t?void 0:t._img)})));case 2:return o=e.sent,e.abrupt("return",new t(o));case 4:case"end":return e.stop()}}),e,this)}))),function(t,n){return e.apply(this,arguments)})},{key:"toJSON",value:function(){return Object(h.a)(this,K)[K]}}],[{key:"create",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(l.a)(this,e)}}]),t}();n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208);function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var Q=new Map([["jpg","jpeg"]]),V={props:{source:{type:_,required:!0},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}}},data:function(){return{config:null}},fetchKey:function(){return"source-".concat(this.source.key)},fetch:function(){this.config=this.$img.getSizes(this.source.src,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({sizes:this.source.sizes,modifiers:this.source.getModifiers()},this.source.getOptions()))},head:function(){var t=new _(this.source);return this.config&&t.preload?{link:[t.getPreload(this.config.srcset,this.config.sizes,Object(A.getCrossorigin)(this.crossorigin))]}:{}},computed:{srcset:function(){return this.config.srcset||this.config.src},type:function(){return"image/".concat(Q.get(this.source.format)||this.source.format)}}},Y=V,Z=Object(F.a)(Y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("source",{attrs:{srcset:t.srcset,sizes:t.config.sizes,media:t.source.media,type:t.type}})}),[],!1,null,null,null).exports,tt=["avif","webp","png","jpg","gif"],et={components:{PictureSource:Z,BaseImage:U},props:{sources:{type:[Array,X],required:!0},formats:{type:Array,default:function(){return this.$speedkit.targetFormats}},loadingSpinner:{type:D.a,default:void 0},title:{type:String,default:null},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}}},data:function(){return{metaSources:{},classNames:{}}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$nuxt.context.ssrContext,e.next=3,t.sourceList.getMeta(t.$img,n);case 3:t.metaSources=e.sent,t.classNames=t.metaSources.classNames;case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style}},fetchKey:function(){return"picture-".concat(this.sourceList.key)},computed:{sourceList:function(){return X.create(this.sources)},formatSources:function(){var t=this,e=Array.from(new Set(tt.map((function(e){return t.formats.find((function(t){return t.includes(e)}))})))).filter(Boolean),n=tt.find((function(e){return t.formats.find((function(t){return t.includes(e)}))}));return this.sourceList.getFormats(e,n,this.isCritical)},style:function(){if(!this.metaSources)return[];var t=this.metaSources.length&&new X(this.metaSources)||this.metaSources;return[{hid:this.classNames.picture,type:"text/css",cssText:t.style}]}},methods:{onLoad:function(t){this.$emit("load",t)}}},nt=(n(406),Object(F.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",{staticClass:"nuxt-speedkit-picture",class:t.classNames.picture},[t._l(t.formatSources,(function(source){return n("picture-source",{key:source.key,attrs:{source:source,crossorigin:t.crossorigin}})})),t._v(" "),n("base-image",{class:t.classNames.image,attrs:{title:t.title,alt:t.alt,"loading-spinner":t.loadingSpinner,crossorigin:t.crossorigin,width:"0",height:"0"},on:{load:t.onLoad}})],2)}),[],!1,null,"0c9016bb",null).exports);function it(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function st(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?it(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):it(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var ot={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render:function(t){return this.hydrate?t(nt,{props:st(st({},this.$attrs),{},{critical:this.isCritical}),on:this.$listeners}):t(o.a,{props:{never:!0}},[t("noscript",{class:"nuxt-speedkit-picture-noscript"},[t(nt,{props:st(st({},this.$attrs),{},{critical:this.hydrate}),on:this.$listeners})])])}},ct=Object(F.a)(ot,undefined,undefined,!1,null,null,null);e.a=ct.exports}}]);