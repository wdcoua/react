(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{230:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var n=function(e){if(!(e&&e.length>0))return"required field"},r=function(e){return function(t){if(!(t.length<=e))return"max length ".concat(e," symbols")}},c=function(e){return function(t){if(!(t.length>=e))return"min length ".concat(e," symbols")}}},231:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return b})),a.d(t,"e",(function(){return f}));var n=a(2),r=a(238),c=a(0),l=a.n(c),o=a(232),u=a.n(o),i=a(112),m=(a(230),function(e){var t=e.input,a=e.meta,c=a.touched,o=a.error,i=e.elType,m=Object(r.a)(e,["input","meta","elType"]),s=c&&o;return l.a.createElement("div",{className:u.a.formControls+" "+(s&&u.a.error)},l.a.createElement("div",null,l.a.createElement(i,Object(n.a)(Object(n.a)({},t),m))),s&&l.a.createElement("span",null," ",o))}),s=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"textarea"}))},p=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"input"}))},h=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"input",type:"hidden"}))},b=function(e){return l.a.createElement(m,Object.assign({},e,{elType:"input",type:"file"}))},f=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return l.a.createElement("div",null,l.a.createElement(i.a,Object.assign({placeholder:e,component:t,name:a,validate:n},r))," ",c)}},232:function(e,t,a){e.exports={formControls:"FormsControls_formControls__MCv0m",error:"FormsControls_error__9lcue"}},236:function(e,t,a){e.exports={captchaDiv:"Login_captchaDiv__36ONs",noCaptcha:"Login_noCaptcha__nLUEK",error:"Login_error__17Wu6",noError:"Login_noError__3IZw_"}},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(113),l=a(13),o=a(19),u=a(7),i=a(17),m=a(231),s=a(230),p=a(236),h=a.n(p),b=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u044f"),r.a.createElement(E,Object.assign({onSubmit:function(t){var a=t.email,n=t.pass,c=t.rememberMe,l=t.captcha;if(!1!==e.auth.isAuth)return r.a.createElement(u.a,{to:"/index"});e.login(a,n,c,l)}},e)),r.a.createElement("br",null),r.a.createElement(g,Object.assign({onSubmit:function(t){var a=t.email,n=t.pass,c=t.rememberMe,l=t.captcha;if(console.log("email = "+a),!1!==e.auth.isAuth)return r.a.createElement(u.a,{to:"/index"});e.login(a,n,c,l)}},e)))},f=Object(s.a)(50),d=Object(s.b)(2),E=Object(c.a)({form:"auth"})((function(e){var t=e.auth,a=e.handleSubmit,n=e.error;return!1===t.isAuth?r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:(n?"":h.a.noError)+" "+h.a.error},n),Object(m.e)("email",m.c,"email",[s.c,f,d],{value:"test"}),Object(m.e)("pass",m.c,"pass",[s.c,f,d],{type:"password"}),r.a.createElement("div",{className:h.a.captchaDiv+" "+(t.capthaImg?"":h.a.noCaptcha)},r.a.createElement("div",null,r.a.createElement("img",{alt:"captcha",src:t.capthaImg?t.capthaImg:""})),Object(m.e)("cAp7cH4",m.c,"captcha",t.capthaImg?[s.c,f,d]:[])),Object(m.e)(null,m.c,"rememberMe",[],{type:"checkbox",checked:"checked"},"Remember me"),r.a.createElement("div",null,r.a.createElement("button",null,"Log in"))):r.a.createElement(u.a,{to:"/index"})})),g=Object(c.a)({form:"auth2"})((function(e){var t=e.auth,a=e.handleSubmit,n=e.error;return!1===t.isAuth?r.a.createElement("form",{onSubmit:a},r.a.createElement("div",{className:(n?"":h.a.noError)+" "+h.a.error},n),Object(m.e)(null,m.b,"email",[],{value:"free@samuraijs.com"}),Object(m.e)(null,m.b,"pass",[],{value:"free"}),r.a.createElement("div",{className:h.a.captchaDiv+" "+(t.capthaImg?"":h.a.noCaptcha)},r.a.createElement("div",null,r.a.createElement("img",{alt:"captcha",src:t.capthaImg?t.capthaImg:""})),Object(m.e)("cAp7cH4",m.c,"captcha",t.capthaImg?[s.c,f,d]:[])),Object(m.e)(null,m.b,"rememberMe",[],{value:!0}),r.a.createElement("div",null,r.a.createElement("button",null,"Log in for test"))):r.a.createElement(u.a,{to:"/index"})}));t.default=Object(i.d)(Object(l.b)((function(e){return{auth:e.auth}}),{login:o.d,checkAuthorization:o.a}))((function(e){return r.a.createElement(b,e)}))}}]);
//# sourceMappingURL=8.9f00194d.chunk.js.map