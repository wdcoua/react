(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{230:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=function(e){if(!(e&&e.length>0))return"required field"},a=function(e){return function(t){if(!(t.length<=e))return"max length ".concat(e," symbols")}},o=function(e){return function(t){if(!(t.length>=e))return"min length ".concat(e," symbols")}}},231:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return d}));var r=n(2),a=n(238),o=n(0),c=n.n(o),l=n(232),u=n.n(l),i=n(112),s=(n(230),function(e){var t=e.input,n=e.meta,o=n.touched,l=n.error,i=e.elType,s=Object(a.a)(e,["input","meta","elType"]),m=o&&l;return c.a.createElement("div",{className:u.a.formControls+" "+(m&&u.a.error)},c.a.createElement("div",null,c.a.createElement(i,Object(r.a)(Object(r.a)({},t),s))),m&&c.a.createElement("span",null," ",l))}),m=function(e){return c.a.createElement(s,Object.assign({},e,{elType:"textarea"}))},f=function(e){return c.a.createElement(s,Object.assign({},e,{elType:"input"}))},p=function(e){return c.a.createElement(s,Object.assign({},e,{elType:"input",type:"file"}))},d=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,component:t,name:n,validate:r},a))," ",o)}},232:function(e,t,n){e.exports={formControls:"FormsControls_formControls__MCv0m",error:"FormsControls_error__9lcue"}},233:function(e,t,n){e.exports=n.p+"static/media/user.d961d73a.png"},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(7),c=n(13),l=function(e){return{isAuth:e.auth.isAuth}},u=function(e){return Object(c.b)(l)((function(t){return t.isAuth?a.a.createElement(e,t):a.a.createElement(o.a,{to:"/login"})}))}},236:function(e,t,n){e.exports={captchaDiv:"Login_captchaDiv__36ONs",noCaptcha:"Login_noCaptcha__nLUEK",error:"Login_error__17Wu6",noError:"Login_noError__3IZw_"}},244:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(13),c=n(112),l=n(113),u=n(236),i=n.n(u),s=n(231),m=n(230),f=function(e){return a.a.createElement("div",null,a.a.createElement(p,Object.assign({onSubmit:function(e){console.log(e)}},e)))},p=Object(l.a)({form:"photoUpload"})((function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement("div",{className:(e.error?"":i.a.noError)+" "+i.a.error},e.error),a.a.createElement("div",null,a.a.createElement(c.a,{placeholder:"photo",component:s.a,name:"photo",validate:[m.c]})),a.a.createElement("div",null,a.a.createElement("button",null,"\u0410\u043f\u043b\u043e\u0430\u0434")))}));t.a=Object(o.b)()((function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:e.photo,alt:""}),a.a.createElement(f,null))}))},308:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),c=n(25),l=n(33),u=n(7),i=n(233),s=n.n(i),m=(n(244),a.a.memo((function(e){var t=e.profile,n=e.status;return a.a.createElement("div",null,a.a.createElement("img",{src:t.photos.large?t.photos.large:s.a,alt:""}),a.a.createElement("div",null,a.a.createElement("b",null,t.fullName)),a.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0443\u0441: ",n),a.a.createElement("div",null,'\u041e\u0431\u043e \u043c\u043d\u0435: "',t.aboutMe,'"'),a.a.createElement("br",null),"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ",a.a.createElement("br",null),a.a.createElement("div",null,t.contacts.facebook),a.a.createElement("div",null,t.contacts.github),a.a.createElement("div",null,t.contacts.instagram),a.a.createElement("div",null,t.contacts.vk))}))),f=n(234),p=n(17);t.default=Object(p.d)(u.f,Object(o.b)((function(e){var t=e.auth,n=e.profilePage;return{userID:t.userID,profile:n.profile,status:n.status}}),{getProfile:c.b,getStatus:c.c}),f.a)((function(e){return Object(r.useEffect)((function(){console.log("PC test");var t=e.getStatus,n=e.getProfile,r=e.userID,a=e.history,o=e.match.params.userID;!o&&r&&(o=r),o?(t(o),n(o),console.log("PC test2 - "+o)):a.push("/login")}),[e.userID]),e.profile?a.a.createElement(m,e):a.a.createElement(l.a,null)}))}}]);
//# sourceMappingURL=7.dfc65ec6.chunk.js.map