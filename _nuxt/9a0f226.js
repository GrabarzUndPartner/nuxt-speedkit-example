(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{341:function(t,e,r){"use strict";(function(t){var n=r(9),o=r(42),c=r(50);r(231);t.IntersectionObserver=t.IntersectionObserver||function(){function t(){Object(o.a)(this,t)}return Object(c.a)(t,[{key:"observe",value:function(){}},{key:"unobserve",value:function(){}}]),t}(),e.a={abstract:!0,props:{root:{type:t.HTMLElement,default:null},rootMargin:{type:String,default:"0px"},threshold:{type:Array,default:function(){return[0]}},trackVisibility:{type:Boolean,default:!1},delay:{type:Number,default:0}},created:function(){var t,e=this;if(!this.$attrs.critical||!this.$options.critical){var r={root:(t=this).root,rootMargin:t.rootMargin,threshold:t.threshold,trackVisibility:t.trackVisibility,delay:t.delay};this.observer=new IntersectionObserver((function(t){var r=Object(n.a)(t,1)[0];return e.onIntersect(r)}),r)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(t){t.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(t){this.$emit("enter",t)}},render:function(){try{return this.$slots.default[0]}catch(t){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(16))},351:function(t,e,r){var content=r(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("110b373e",content,!0,{sourceMap:!1})},387:function(t,e,r){"use strict";r(351)},388:function(t,e,r){var n=r(60)((function(i){return i[1]}));n.push([t.i,".speedkit-iframe[data-v-67d6c4df]{position:relative}.speedkit-iframe .iframe[data-v-67d6c4df]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=n},391:function(t,e,r){"use strict";r.r(e);var n=r(341).a,o=r(28),c={components:{IntersectionObserver:Object(o.a)(n,undefined,undefined,!1,null,null,null).exports},props:{loading:{type:String,default:"lazy"},title:{type:String,default:null},src:{type:String,default:null},intersectionObserver:{type:Object,default:function(){return{trackVisibility:!0,delay:350}}}},data:function(){return{lazySrc:null}},methods:{onLoad:function(t){this.$emit("load",t)},onEnter:function(t){this.lazySrc=this.src,this.$emit("enter",t)}}},l={components:{SpeedkitIframe:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("intersection-observer",t._b({on:{enter:t.onEnter}},"intersection-observer",t.intersectionObserver,!1),[r("iframe",t._b({staticClass:"nuxt-speedkit__speedkit-iframe",attrs:{src:t.lazySrc,loading:t.loading,title:t.title},on:{load:t.onLoad}},"iframe",t.$attrs,!1))])}),[],!1,null,null,null).exports},data:function(){return{iframe:{src:"https://nuxt-speedkit.grabarzundpartner.dev/"}}}},d=(r(387),Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"speedkit-iframe",attrs:{id:"speedkit-iframe"}},[r("SpeedkitIframe",t._b({staticClass:"iframe"},"SpeedkitIframe",t.iframe,!1))],1)}),[],!1,null,"67d6c4df",null));e.default=d.exports}}]);