!function(t){function e(e){for(var i,r,s=e[0],l=e[1],d=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(c&&c(e);p.length;)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={2:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;a.push([27,0]),n()}([,,,,function(t,e,n){"use strict";var i=n(5);e.a=i.a},function(t,e,n){"use strict";e.a={name:"Loading",data:()=>({showLoading:!1})}},function(t,e,n){var i=n(1),o=n(29);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);t.exports=o.locals||{}},,,,,,,,,function(t,e,n){"use strict";var i=n(19);n.d(e,"a",(function(){return i.a})),n.d(e,"b",(function(){return i.b}))},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],staticClass:"loading"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span")])}]},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(23),o=n(13),a=n.n(o);let r=null;const s=function(t){const e=a.a.extend(i.a),n=document.body;r?r.$mount().showLoading=t:t&&(r=new e,r.$mount().showLoading=t,n&&n.appendChild(r.$mount().$el))}},function(t,e,n){"use strict";var i=n(15),o=n(4),a=(n(28),n(0)),r=Object(a.a)(o.a,i.a,i.b,!1,null,"54b70b28",null);e.a=r.exports},function(t,e,n){"use strict";function i(t){const e=document.body,n=document.getElementById("app"),i=n.style,o=document.createElement("p");o.style="width: 100%; text-align: center; position: fixed; z-index: -1; left: 0; top: 0; font-size: 12px; line-height: 40px; color: #999; display: none;";const a=document.createElement("i");a.style="display: inline-block; width: 15px; height: 15px; margin-right: 5px; background: url('https://static.17xueba.com/test/mozi/image/2020/09/20200927200903394356.png'); background-size: 100% 100%; vertical-align: middle; animation: looprotate 2s linear infinite;";const r=document.createElement("span");a.style.opacity=0;let s=!1;const l=()=>!!navigator.userAgent.toLowerCase().match(/mqqbrowser|qzone|qqbrowser/i);return{init:()=>{if(l()||Tools.isWechatBrowser())return;let d,c;e.appendChild(o),o.appendChild(a),o.appendChild(r);n.addEventListener("touchstart",t=>{d=t.touches[0].pageY,n.style.transition="transform 0s"}),n.addEventListener("touchmove",t=>{c=t.touches[0].pageY-d,(t=>{const e=n.getBoundingClientRect().top;if(e>=0){if("none"===o.style.display&&(o.style.display="block"),t>0&&t<50)n.style.transform="translate(0, "+t+"px)";else if(t>=50&&t<100){const e=50+.6*(t-50);n.style.transform="translate(0, "+e+"px)"}else if(t>=100){const e=80+.2*(t-100);n.style.transform="translate(0, "+e+"px)"}e<50?(r.innerText="下拉即可刷新...",s=!1):(r.innerText="松开立即刷新...",s=!0)}})(c)}),n.addEventListener("touchend",e=>{n.getBoundingClientRect().top>0?s?(a.style.opacity=1,r.innerText="数据加载中...",t?t():window.location.reload(),n.style.transition="transform 0.4s",n.style.transform="translate(0, 40px)"):(n.style.transition="transform 0.4s",n.style.transform="translate(0, 0)",setTimeout(()=>{o.style.display="none",n.style=i},400)):(o.style.display="none",n.style=i)})},finish:()=>{l()||Tools.isWechatBrowser()||(a.style.opacity=0,r.innerText="刷新成功",setTimeout(()=>{n.style.transition="transform 0.2s",n.style.transform="translate(0, 0)",setTimeout(()=>{o.style.display="none",n.style=i},400)},500))}}}n.d(e,"a",(function(){return i}))},,,function(t,e,n){"use strict";n.r(e);var i=n(22),o=n(24);const a={osInfo:function(){const t=window.performance,e=(new Date).getTime()-t.timing.navigationStart;console.info("当前页面为"+{0:"url链接加载",1:"刷新加载或reload加载",2:"历史记录或前进后退操作加载",255:"其他方式加载"}[t.navigation.type]),console.info(`当前页面加载用时：${e}ms`)},loadingFun:i.a,listenBack:function(t){window.addEventListener("pageshow",e=>{(e.persisted||window.performance&&2==window.performance.navigation.type)&&t&&t()})},reOpenScreen:function(t){window.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState&&t&&t()})},remHandler:function(t=750){const e=()=>{const e=document.documentElement.clientWidth;document.documentElement.style.fontSize=e>t?"100px":e/t*100+"px"};e(),setTimeout(()=>{window.addEventListener("resize",e,!1)},200)},bdAudio:function(t){const e="http://tts.baidu.com/text2audio/text2audio?lan=zh&ie=UTF-8&spd=5&text=";let n=document.getElementById("bd_audio")||null;n?(console.log(n.src),n.src!==`${e}${t}`&&(n.src=`${e}${t}`),n.paused&&n.play&&n.play()):(n=document.createElement("audio"),n.id="bd_audio",n.src=`${e}${t}`,document.body.appendChild(n),n.addEventListener("canplay",()=>{n.paused&&n.play&&n.play()}))},pullRefresh:o.a};$.extend(window,{dog:a})},function(t,e,n){"use strict";var i=n(6);n.n(i).a},function(t,e,n){var i=n(30);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("f0a93ed6",i,!0,{})},function(t,e,n){(e=n(2)(!1)).push([t.i,".loading[data-v-54b70b28]{width:42px;height:42px;margin:100px auto 0;position:relative}.loading div[data-v-54b70b28]{width:100%;height:100%;position:absolute;-webkit-animation:load-data-v-54b70b28 2.08s linear infinite}.loading div[data-v-54b70b28]:nth-child(1){-webkit-animation-delay:0.2s}.loading div[data-v-54b70b28]:nth-child(2){-webkit-animation-delay:0.4s}.loading div[data-v-54b70b28]:nth-child(3){-webkit-animation-delay:0.6s}.loading div[data-v-54b70b28]:nth-child(4){-webkit-animation-delay:0.8s}.loading div span[data-v-54b70b28]{display:inline-block;width:10px;height:10px;border-radius:50%;background:lightgreen;position:absolute;left:50%;margin-top:-10px;margin-left:-10px}@-webkit-keyframes load-data-v-54b70b28{0%{-webkit-transform:rotate(0deg)}10%{-webkit-transform:rotate(45deg)}50%{opacity:1;-webkit-transform:rotate(160deg)}62%{opacity:0}65%{opacity:0;-webkit-transform:rotate(200deg)}90%{-webkit-transform:rotate(340deg)}100%{-webkit-transform:rotate(360deg)}}\n",""]),t.exports=e}]);