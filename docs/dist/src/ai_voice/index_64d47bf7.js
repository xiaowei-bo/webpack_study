!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={1:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([38,0]),n()}([,,,,,,,function(t,e,n){"use strict";var r=n(8);e.a=r.a},function(t,e,n){"use strict";e.a={data:()=>({message:""}),methods:{playAudio(){dog.bdAudio(this.message)}},created(){}}},function(t,e,n){var r=n(1),a=n(40);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},function(t,e,n){"use strict";var r=n(11);e.a=r.a},function(t,e,n){"use strict";e.a={data:()=>({message:"edit_food"}),methods:{},created(){}}},function(t,e,n){var r=n(1),a=n(43);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},,,,,function(t,e,n){"use strict";var r=n(20);n.d(e,"a",(function(){return r.a})),n.d(e,"b",(function(){return r.b}))},function(t,e,n){"use strict";var r=n(21);n.d(e,"a",(function(){return r.a})),n.d(e,"b",(function(){return r.b}))},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ai_voice"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"common_input",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("p",[t._v("jhefuiehi")]),t._v(" "),n("button",{staticClass:"common_btn",on:{click:t.playAudio}},[t._v("OOp")])])},a=[]},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"edit-page"},[this._v(this._s(this.message))])},a=[]},,,,function(t,e,n){"use strict";var r=n(17),a=n(7),o=(n(39),n(0)),i=Object(o.a)(a.a,r.a,r.b,!1,null,"544f47a8",null);e.a=i.exports},function(t,e,n){"use strict";var r=n(18),a=n(10),o=(n(42),n(0)),i=Object(o.a)(a.a,r.a,r.b,!1,null,"400a0c50",null);e.a=i.exports},,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(25),a=n(26),o=n(13);new(n.n(o).a)({data:()=>({}),components:{IndexMain:r.a,EditFood:a.a}}).$mount("#app")},function(t,e,n){"use strict";var r=n(9);n.n(r).a},function(t,e,n){var r=n(41);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(3).default)("ab947e12",r,!0,{})},function(t,e,n){(e=n(2)(!1)).push([t.i,".ai_voice .common_input[data-v-544f47a8]{display:block;margin:0 auto}.ai_voice .common_btn[data-v-544f47a8]{display:block;margin:.5rem auto}\n",""]),t.exports=e},function(t,e,n){"use strict";var r=n(12);n.n(r).a},function(t,e,n){var r=n(44);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(3).default)("7a1c6cee",r,!0,{})},function(t,e,n){(e=n(2)(!1)).push([t.i,".edit-page[data-v-400a0c50]{width:500px;height:200px;background-color:#77c553}\n",""]),t.exports=e}]);