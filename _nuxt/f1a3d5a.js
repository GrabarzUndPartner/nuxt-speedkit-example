(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{370:function(t,e,r){var content=r(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("9e082fb6",content,!0,{sourceMap:!1})},371:function(t,e,r){var content=r(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("ca9ad0a4",content,!0,{sourceMap:!1})},409:function(t,e,r){"use strict";var n,o=r(0),c=r(4),f=r(124),l=r(157),h=r(245),d=r(410),m=r(17),v=r(249),x=r(48).enforce,w=r(247),_=!o.ActiveXObject&&"ActiveXObject"in o,k=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},y=h("WeakMap",k,d);if(w&&_){n=d.getConstructor(k,"WeakMap",!0),l.enable();var z=y.prototype,j=c(z.delete),S=c(z.has),O=c(z.get),E=c(z.set);f(z,{delete:function(t){if(m(t)&&!v(t)){var e=x(this);return e.frozen||(e.frozen=new n),j(this,t)||e.frozen.delete(t)}return j(this,t)},has:function(t){if(m(t)&&!v(t)){var e=x(this);return e.frozen||(e.frozen=new n),S(this,t)||e.frozen.has(t)}return S(this,t)},get:function(t){if(m(t)&&!v(t)){var e=x(this);return e.frozen||(e.frozen=new n),S(this,t)?O(this,t):e.frozen.get(t)}return O(this,t)},set:function(t,e){if(m(t)&&!v(t)){var r=x(this);r.frozen||(r.frozen=new n),S(this,t)?E(this,t,e):r.frozen.set(t,e)}else E(this,t,e);return this}})}},410:function(t,e,r){"use strict";var n=r(4),o=r(124),c=r(157).getWeakData,f=r(6),l=r(17),h=r(97),d=r(22),m=r(81),v=r(18),x=r(48),w=x.set,_=x.getterFor,k=m.find,y=m.findIndex,z=n([].splice),j=0,S=function(t){return t.frozen||(t.frozen=new O)},O=function(){this.entries=[]},E=function(t,e){return k(t.entries,(function(t){return t[0]===e}))};O.prototype={get:function(t){var e=E(this,t);if(e)return e[1]},has:function(t){return!!E(this,t)},set:function(t,e){var r=E(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=y(this.entries,(function(e){return e[0]===t}));return~e&&z(this.entries,e,1),!!~e}},t.exports={getConstructor:function(t,e,r,n){var m=t((function(t,o){h(t,x),w(t,{type:e,id:j++,frozen:void 0}),null!=o&&d(o,t[n],{that:t,AS_ENTRIES:r})})),x=m.prototype,k=_(e),y=function(t,e,r){var n=k(t),data=c(f(e),!0);return!0===data?S(n).set(e,r):data[n.id]=r,t};return o(x,{delete:function(t){var e=k(this);if(!l(t))return!1;var data=c(t);return!0===data?S(e).delete(t):data&&v(data,e.id)&&delete data[e.id]},has:function(t){var e=k(this);if(!l(t))return!1;var data=c(t);return!0===data?S(e).has(t):data&&v(data,e.id)}}),o(x,r?{get:function(t){var e=k(this);if(l(t)){var data=c(t);return!0===data?S(e).get(t):data?data[e.id]:void 0}},set:function(t,e){return y(this,t,e)}}:{add:function(t){return y(this,t,!0)}}),m}}},411:function(t,e,r){"use strict";r(3)({target:"WeakMap",proto:!0,real:!0,forced:!0},{deleteAll:r(246)})},412:function(t,e,r){r(159)("replace")},413:function(t,e,r){"use strict";var n=r(3),o=r(414),c=r(41),f=r(51),l=r(71),h=r(127);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=f(e),n=h(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:l(t)),n}})},414:function(t,e,r){"use strict";var n=r(0),o=r(98),c=r(51),f=r(23),l=n.TypeError,h=function(t,e,source,r,n,d,m,v){for(var element,x,w=n,_=0,k=!!m&&f(m,v);_<r;){if(_ in source){if(element=k?k(source[_],_,e):source[_],d>0&&o(element))x=c(element),w=h(t,e,element,x,w,d-1)-1;else{if(w>=9007199254740991)throw l("Exceed the acceptable array length");t[w]=element}w++}_++}return w};t.exports=h},415:function(t,e,r){r(125)("flat")},416:function(t,e,r){"use strict";r(370)},417:function(t,e,r){var n=r(67)((function(i){return i[1]}));n.push([t.i,".nuxt-speedkit__experimental__speedkit-picture[data-v-7097fb62]{width:100%;height:inherit;margin:0}",""]),n.locals={},t.exports=n},418:function(t,e,r){"use strict";r(371)},419:function(t,e,r){var n=r(67)((function(i){return i[1]}));n.push([t.i,".experimental-speedkit-picture[data-v-630404a8]{position:relative}.experimental-speedkit-picture .picture[data-v-630404a8]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),n.locals={},t.exports=n},422:function(t,e,r){"use strict";r.r(e);r(99),r(42),r(409),r(411),r(40),r(412),r(61),r(34),r(72),r(60);var n=r(58);function o(t,p){return o=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t},o(t,p)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}var f=r(12),l=r(7);r(8),r(33),r(38),r(413),r(415),r(24),r(342),r(47),r(28),r(15),r(100),r(59),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(358),r(359),r(360),r(361),r(362),r(363),r(364),r(365),r(39);function h(t,e){return Promise.all(t.map(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(source){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(source);case 2:return r=t.sent,n=Object(f.a)(r,2),o=n[0].url,c=n[1],t.abrupt("return",d(o,m(c)));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then(v)}function d(t,e){var r=e.min;return{size:e,media:r.media,breakpoint:r.breakpoint,width:e.max.width,url:t}}function m(t){var e=Array.from(t).sort((function(a,b){return a.width>b.width?1:-1})),r=e.shift();return{min:r,max:e.pop()||r}}function v(t){return t.sort((function(a,b){return a.width<b.width?1:-1}))}var x=r(343),w=r(57),_=r(373),k=r(374);function y(){y=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,n,c){var f=new RegExp(t,n);return e.set(f,c||e.get(t)),o(f,r.prototype)}function f(t,r){var g=e.get(r);return Object.keys(g).reduce((function(e,r){return e[r]=t[g[r]],e}),Object.create(null))}return c(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=f(r,this)),r},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var c=e.get(this);return t[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+c[e]})))}if("function"==typeof o){var l=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!=Object(n.a)(t[t.length-1])&&(t=[].slice.call(t)).push(f(t,l)),o.apply(this,t)}))}return t[Symbol.replace].call(this,r,o)},y.apply(this,arguments)}var z={components:{CustomPicture:_.a,CustomNoScript:k.a},props:{sources:{type:Array,default:function(){return[]}},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{placeholders:[],resolvedSources:this.getSources()}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchMeta();case 2:t.placeholders=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{noscript:[Object(w.c)(".nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}},computed:{hasSlot:function(){return this.$slots.caption}},watch:{sources:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchMeta();case 2:t.placeholders=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},methods:{fetchMeta:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=6;break;case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",h(t.sources,(function(e){var r=e.src,n=e.sizes;return Promise.all([t.$img(r,{width:30}),t.$img.sizes(r,n)])})));case 7:case"end":return e.stop()}}),e)})))()},getSources:function(){var t,e=this;return(t=this.sources,Array.from(new Set(["webp"].concat(t.map((function(source){return t=source.src,(e=t.match(y(/\.(png|jpe?g)/i,{ext:1})))&&e.groups.ext||"jpg";var t,e}))).map((function(t){return"jpeg"===t?"jpg":t}))))).map((function(t){return e.sources.map((function(source){return[source]})).map((function(r,n){var o=Object(f.a)(r,1)[0],c=o.src,l=o.sizes,h=e.$img.sizes(c,l,{format:t}),d=h.sort((function(a,b){return a.width>b.width?-1:1}));return{media:n<e.sources.length-1&&"(min-width: ".concat(h[h.length-1].width,"px)"),srcset:d.map((function(t){var e=t.width,r=t.url;return e?"".concat(r," ").concat(e,"w"):r})).join(", "),sizes:d.map((function(t){var e=t.width,r=t.media;return r?"".concat(r," ").concat(e,"px"):"".concat(e,"px")})).join(", "),type:Object(x.a)(h[0].format)}}))})).flat()}}},j=(r(416),r(32)),S={components:{ExperimentalSpeedkitPicture:Object(j.a)(z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__experimental__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.placeholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"7097fb62",null).exports},data:function(){return{picture:{sources:[{src:"https://grabarzundpartner.github.io/nuxt-speedkit-example/img/dark/1920.jpg",sizes:"1024:1024,1280:1280,1680:1680,1920:1920"},{src:"https://grabarzundpartner.github.io/nuxt-speedkit-example/img/dark/768.jpg",sizes:"768:768"},{src:"https://grabarzundpartner.github.io/nuxt-speedkit-example/img/dark/1920.jpg",sizes:"576:576"},{src:"https://grabarzundpartner.github.io/nuxt-speedkit-example/img/dark/768.jpg",sizes:"414"}]}}}},O=(r(418),Object(j.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"experimental-speedkit-picture",attrs:{id:"experimental-speedkit-picture"}},[r("ExperimentalSpeedkitPicture",t._b({staticClass:"picture"},"ExperimentalSpeedkitPicture",t.picture,!1))],1)}),[],!1,null,"630404a8",null));e.default=O.exports}}]);