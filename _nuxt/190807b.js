(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{318:function(e,t,r){"use strict";(function(e){var n=r(16),o=r(33),c=r(43);r(364);e.IntersectionObserver=e.IntersectionObserver||function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"observe",value:function(){}},{key:"unobserve",value:function(){}}]),e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:null},rootMargin:{type:String,default:"0px"},threshold:{type:Array,default:function(){return[0]}},trackVisibility:{type:Boolean,default:!1},delay:{type:Number,default:0}},created:function(){var e,t=this;if(!this.$attrs.critical||!this.$options.critical){var r={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold,trackVisibility:e.trackVisibility,delay:e.delay};this.observer=new IntersectionObserver((function(e){var r=Object(n.a)(e,1)[0];return t.onIntersect(r)}),r)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(18))},328:function(e,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("12bb36e9",content,!0,{sourceMap:!1})},364:function(e,t,r){"use strict";var n=r(11),o=r(4),c=r(78),l=r(20),f=r(13),d=r(55),h=r(142),v=r(76),y=r(5),m=r(60),I=r(77).f,N=r(40).f,k=r(15).f,E=r(219).trim,_="Number",O=o.Number,S=O.prototype,w=d(m(S))==_,A=function(e){var t,r,n,o,c,l,f,code,d=v(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=E(d)).charCodeAt(0))||45===t){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(_,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var $,x=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof x&&(w?y((function(){S.valueOf.call(r)})):d(r)!=_)?h(new O(A(t)),r,x):A(t)},M=n?I(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),V=0;M.length>V;V++)f(O,$=M[V])&&!f(x,$)&&k(x,$,N(O,$));x.prototype=S,S.constructor=x,l(o,_,x)}},365:function(e,t,r){"use strict";r(328)},366:function(e,t,r){var n=r(53)(!1);n.push([e.i,".speedkit-iframe[data-v-ba5ca706]{position:relative}.speedkit-iframe .iframe[data-v-ba5ca706]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),e.exports=n},369:function(e,t,r){"use strict";r.r(t);var n=r(318).a,o=r(23),c={components:{IntersectionObserver:Object(o.a)(n,undefined,undefined,!1,null,null,null).exports},props:{loading:{type:String,default:"lazy"},title:{type:String,default:null},src:{type:String,default:null},intersectionObserver:{type:Object,default:function(){return{trackVisibility:!0,delay:350}}}},data:function(){return{lazySrc:null}},methods:{onLoad:function(e){this.$emit("load",e)},onEnter:function(e){this.lazySrc=this.src,this.$emit("enter",e)}}},l={components:{SpeedkitIframe:Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("intersection-observer",e._b({on:{enter:e.onEnter}},"intersection-observer",e.intersectionObserver,!1),[r("iframe",e._b({staticClass:"nuxt-speedkit__speedkit-iframe",attrs:{src:e.lazySrc,loading:e.loading,title:e.title},on:{load:e.onLoad}},"iframe",e.$attrs,!1))])}),[],!1,null,null,null).exports},data:function(){return{iframe:{src:"https://nuxt-speedkit.grabarzundpartner.dev/"}}}},f=(r(365),Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"speedkit-iframe",attrs:{id:"speedkit-iframe"}},[r("SpeedkitIframe",e._b({staticClass:"iframe"},"SpeedkitIframe",e.iframe,!1))],1)}),[],!1,null,"ba5ca706",null));t.default=f.exports}}]);