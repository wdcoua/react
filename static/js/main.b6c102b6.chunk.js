(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{139:function(e,t,n){e.exports=n(229)},141:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O}));var r=n(3),a=n.n(r),u=n(5),c=n(2),o=n(6),i=n(45),s=n(25),l="samurai_project/auth/SET_USER_DATA",f="samurai_project/auth/SET_USER_IMG",p="samurai_project/auth/SET_CAPTCHA_IMG",d="samurai_project/auth/SET_CAPTCHA_ANS",m={userID:null,email:null,login:null,userImg:null,isAuth:!1,capthaImg:null,captchaAnswer:null,loginError:null};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),t.payload);case f:return Object(c.a)(Object(c.a)({},e),{},{userImg:t.img});case p:return Object(c.a)(Object(c.a)({},e),{},{capthaImg:t.img});case d:return Object(c.a)(Object(c.a)({},e),{},{captchaAnswer:t.ans});default:return e}};var h=function(e,t,n,r,a,u,c){return{type:l,payload:{userID:e,email:t,login:n,isAuth:r,capthaImg:a,captchaAnswer:u,loginError:c}}},b=function(e){return{type:f,img:e}},g=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,i,l,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.authMe();case 2:if(0!==(n=e.sent).resultCode){e.next=14;break}return r=n.data,u=r.id,c=r.login,i=r.email,t(h(u,i,c,!0,null,null,null)),e.next=8,o.a.getProfile(u);case 8:return l=e.sent,t(Object(s.e)(l.data)),e.next=12,o.a.getStatus(u);case 12:f=e.sent,t(Object(s.f)(f));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logOut();case 2:console.warn("logout2"),t(h(null,null,null,!1,null,null,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e,t,n,r){return function(){var c=Object(u.a)(a.a.mark((function u(c){var s,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.auth(e,t,n,r);case 2:if(s=a.sent,console.log(s),0!==s.resultCode){a.next=9;break}console.log("login +"),c(g()),a.next=15;break;case 9:if(c(Object(i.a)("auth",{_error:s.messages.join("<br/>")})),10!==s.resultCode){a.next=15;break}return a.next=13,o.a.getCaptcha();case 13:l=a.sent,c((u=l.url,{type:p,img:u}));case 15:case"end":return a.stop()}var u}),u)})));return function(e){return c.apply(this,arguments)}}()}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"j",(function(){return O})),n.d(t,"h",(function(){return E})),n.d(t,"i",(function(){return _})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return w})),n.d(t,"d",(function(){return P})),n.d(t,"c",(function(){return y}));var r=n(3),a=n.n(r),u=n(5),c=n(15),o=n(2),i=n(6),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l="samurai_project/users/SET_USERS",f="samurai_project/users/SET_INITIAL",p="samurai_project/users/SET_PAGE_WITH_ME",d="samurai_project/users/SET_TOTAL_USERS",m="samurai_project/users/SET_CURRENT_PAGE",h="samurai_project/users/CHANGE_FETCHING_STATUS",b="samurai_project/users/FOLLOWING_IN_PROGRESS",g={usersList:[],usersPerPage:20,totalUsers:0,currentPage:30,isFetching:!0,followingIsInProgress:[],fake:0,initial:1,pageWithMe:0,myId:11583},j=(t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return Object(o.a)(Object(o.a)({},e),{},{fake:e.fake+1});case"samurai_project/users/CHANGE_USER_FOLLOW_STATUS":return Object(o.a)(Object(o.a)({},e),{},{usersList:s(e.usersList,t.user_id,"id",{followed:1===t.followStatus})});case l:return Object(o.a)(Object(o.a)({},e),{},{usersList:Object(c.a)(t.users)});case p:return Object(o.a)(Object(o.a)({},e),{},{pageWithMe:t.pageWithMe});case f:return Object(o.a)(Object(o.a)({},e),{},{initial:t.initial});case d:return Object(o.a)(Object(o.a)({},e),{},{totalUsers:t.total});case m:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case h:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case b:return Object(o.a)(Object(o.a)({},e),{},{followingIsInProgress:t.followingIsInProgress?[].concat(Object(c.a)(e.followingIsInProgress),[t.userId]):e.followingIsInProgress.filter((function(e){return e!==t.userId}))});default:return e}},function(e,t){return{type:"samurai_project/users/CHANGE_USER_FOLLOW_STATUS",user_id:e,followStatus:t}}),O=function(e){return{type:l,users:e}},E=function(e){return{type:p,pageWithMe:e}},_=function(e){return{type:d,total:e}},v=function(e){return{type:m,currentPage:e}},x=function(e){return{type:h,isFetching:e}},w=function(e,t){return{type:b,followingIsInProgress:e,userId:t}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),0===t?t=1:r(v(t)),n.next=4,i.a.getUsers(e,t);case 4:u=n.sent,r(x(!1)),r(O(u.items)),r(_(u.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u,c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(w(!0,e)),!t){n.next=8;break}return n.next=4,i.a.follow(e);case 4:0===(u=n.sent).resultCode&&(r(j(e,1)),r(w(!1,e)),console.log(u)),n.next=14;break;case 8:return n.next=10,i.a.unfollow(e);case 10:c=n.sent,r(j(e,0)),r(w(!1,e)),console.log(c);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},223:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(141),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(17),c=n(42),o=n(75),i=n(3),s=n.n(i),l=n(5),f=n(15),p=n(2),d=n(6),m={examplesList:[]},h="samurai_project/examples/SET_EXAMPLES",b="samurai_project/examples/DEL_EXAMPLE",g="samurai_project/examples/ADD_EXAMPLE",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(Object(p.a)({},e),{},{examplesList:Object(f.a)(t.examples)});case b:return Object(p.a)(Object(p.a)({},e),{},{examplesList:e.examplesList.filter((function(e){return e.id!==t.id}))});case g:return Object(p.a)(Object(p.a)({},e),{},{examplesList:[].concat(Object(f.a)(e.examplesList),[t.example])});default:return e}},O=function(){return function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getExamples();case 2:n=e.sent,t((r=n.items,{type:h,examples:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},E=n(21),_=n(25),v=n(19),x=n(82),w=n(81),P="samurai_project/app/SET_INITIALIZED",y={initialized:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},T=Object(u.c)({gb:c.b,chat:o.b,examples:j,users:E.b,profilePage:_.a,auth:v.b,form:w.a,app:S}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,I=Object(u.e)(T,A(Object(u.a)(x.a)));window.__store__=I;var k=I,C=n(43),L=n.n(C),U=(n(223),n(55)),N=n.n(U),M=n(16),G=function(e){var t=e.href,n=e.text;return a.a.createElement("div",{className:N.a.menu},a.a.createElement(M.b,{to:t,activeClassName:N.a.active},n))},D=function(){return a.a.createElement("nav",null,a.a.createElement(G,{text:"Main",href:"/index"}),a.a.createElement(G,{text:"Examples",href:"/examples"}),a.a.createElement(G,{text:"Guest Book",href:"/gb"}),a.a.createElement(G,{text:"Chat",href:"/chat"}),a.a.createElement(G,{text:"Users",href:"/users"}),a.a.createElement(G,{text:"Profile",href:"/profile"}),a.a.createElement(G,{text:"...",href:"/out/14"}))},W=n(85),z=n.n(W),R=n(7),H=n(13),F=n(87),B=n.n(F),J=function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438 \u043c\u043e\u0457\u0445 \u0440\u043e\u0431\u0456\u0442"),e.examples.map((function(e){return a.a.createElement("div",{key:e.id,className:B.a.example},a.a.createElement("a",{href:e.link,title:e.descr},e.title))})))},X=Object(H.b)((function(e){return{examples:e.examples}}),{getExamples:O})((function(e){var t=e.getExamples,n=e.examples;return Object(r.useEffect)((function(){t()}),[]),a.a.createElement(J,{examples:n.examplesList})})),K=n(33),Y=n(23),V=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,305))})),$=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,306))})),Z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,303))})),q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,307))})),Q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,308))})),ee=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,304))})),te=function(){return a.a.createElement("div",{className:z.a.main},a.a.createElement(R.b,{path:"/examples",render:function(){return a.a.createElement(X,null)}}),a.a.createElement(R.b,{path:"/index",render:function(){return a.a.createElement(X,null)}}),a.a.createElement(R.b,{path:"/gb",render:Object(Y.a)($)}),a.a.createElement(R.b,{path:"/chat",render:Object(Y.a)(V)}),a.a.createElement(R.b,{path:"/users",render:Object(Y.a)(ee)}),a.a.createElement(R.b,{path:"/profile/:userID?",render:Object(Y.a)(Q)}),a.a.createElement(R.b,{path:"/myprofile",render:Object(Y.a)(q)}),a.a.createElement(R.b,{path:"/login",render:Object(Y.a)(Z)}),a.a.createElement(R.b,{path:"/reg",render:Object(Y.a)(Z)}))},ne=n(89),re=n.n(ne),ae=function(){return a.a.createElement("footer",null,a.a.createElement("div",{className:re.a.copy},"\xa9 wd",a.a.createElement("br",null),"- 2020 -"))},ue=n(44),ce=n.n(ue),oe=n(90),ie=n.n(oe),se=function(e){var t=e.logOut,n=e.auth;return a.a.createElement("header",null,a.a.createElement("img",{src:"https://wd.co.ua/pic/wd_logo.jpg",className:ce.a.logo,alt:"alt"}),a.a.createElement("div",{className:ce.a.auth},n.isAuth?a.a.createElement("div",null,a.a.createElement(M.b,{to:"/myprofile"},n.login),a.a.createElement("img",{src:ie.a,alt:"logout",title:"\u0432\u0438\u0439\u0442\u0438",className:ce.a.logout,onClick:t})):a.a.createElement("div",null,a.a.createElement(M.b,{to:"/reg"},a.a.createElement("button",{id:"reg"},"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"))," ",a.a.createElement(M.b,{to:"/login"},a.a.createElement("button",{id:"enter"},"\u0412\u0445\u0456\u0434")))))},le=Object(H.b)((function(e){return{auth:e.auth}}),{setUserAuthData:v.e,setUserAuthImg:v.f,checkAuthorization:v.a,logOut:v.c})((function(e){return a.a.createElement(se,e)})),fe=Object(u.d)(R.f,Object(H.b)((function(e){return{initialized:e.app.initialized,initial:e.users.initial,pageWithMe:e.users.pageWithMe,myId:e.users.myId,total:e.users.totalUsers,usersPerPage:e.users.usersPerPage,currentPage:e.users.currentPage}}),{initializeApp:function(){return function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,a,u,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(Object(v.a)()),r=t(Object(c.c)()),a=t(Object(E.d)()),u=t(O()),o=t(Object(_.b)()),e.next=7,Promise.all([n,r,a,u,o]).then((function(){t({type:P})}));case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getUsers:E.d,setPageWithMe:E.h}))((function(e){var t=e.initializeApp,n=e.initialized,u=e.total,c=e.usersPerPage,o=e.getUsers;e.setPageWithMe;return Object(r.useEffect)((function(){if(0!==u){var e=Math.ceil((u-6590)/c);o(c,e)}else t()}),[u]),n?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(le,null),a.a.createElement(D,null),a.a.createElement(te,null),a.a.createElement(ae,null)):a.a.createElement(K.a,null)})),pe=function(){return a.a.createElement(M.a,null,a.a.createElement(H.a,{store:k},a.a.createElement(fe,null)))};L.a.render(a.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),u=(n(13),n(33)),c=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(u.a,null)},a.a.createElement(e,t))}}},25:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"g",(function(){return b}));var r=n(3),a=n.n(r),u=n(5),c=n(2),o=n(6),i="samurai_project/profile/SET_USER_PROFILE",s="samurai_project/profile/SET_USER_STATUS",l={profile:null,status:""};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case s:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}};var f=function(e){return{type:i,profile:e}},p=function(e){return{type:s,status:e}},d=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getProfile(e||11583);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getStatus(e||11583);case 2:r=t.sent,n(p(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("setStatus - "+e),t.next=3,o.a.setStatus(e);case 3:t.sent,n(p(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updateProfile - "),e.next=3,o.a.updateProfile();case 3:n=e.sent,console.log("updateProfile + "+n.resultCode),console.log("updateProfile + "+n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},29:function(e,t,n){e.exports=n.p+"static/media/kotigoroshko.70d84a67.jpg"},33:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(13),c=n(88),o=n.n(c);t.a=Object(u.b)()((function(){return a.a.createElement("div",null,a.a.createElement("img",{src:o.a,alt:"loading...",style:{width:"150px"}}))}))},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return b}));var r=n(3),a=n.n(r),u=n(5),c=n(15),o=n(2),i=n(6),s="samurai_project/gb/NEW_GB_POST_CHANGE",l="samurai_project/gb/ADD_GB_POST",f="samurai_project/gb/SET_GB_POSTS",p="samurai_project/gb/DEL_GB_POST",d={gbPosts:[],newPostText:"hi how are u?))"};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n=new Date,r=parseInt(n.getTime()/1e3),a={answer:"",answer_time:"0",email:"ddddd@mail.com",id:e.gbPosts.length+1,ip:"",login:"\u041c\u0430\u0440\u0456\u0447\u043a\u0430",status:"1",text:t.text,time:r,ua:""};return Object(o.a)(Object(o.a)({},e),{},{gbPosts:[].concat(Object(c.a)(e.gbPosts),[a]),newPostText:""});case s:return Object(o.a)(Object(o.a)({},e),{},{newPostText:t.changedText});case f:return Object(o.a)(Object(o.a)({},e),{},{gbPosts:Object(c.a)(t.posts)});case p:return Object(o.a)(Object(o.a)({},e),{},{gbPosts:e.gbPosts.filter((function(e){return e.id!==t.post_id}))});default:return e}};var m=function(e){return{type:l,text:e}},h=function(e){return{type:s,changedText:e}},b=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getGbPosts();case 2:n=e.sent,t((r=n.items,{type:f,posts:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()}},44:function(e,t,n){e.exports={logo:"Header_logo__3_SJs",auth:"Header_auth__22ubL",logout:"Header_logout__1UGPC"}},53:function(e,t,n){e.exports=n.p+"static/media/zloy_admin.565b4950.png"},55:function(e,t,n){e.exports={menu:"Menu_menu__rbGTo",active:"Menu_active__1zJuV"}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),a=n.n(r),u=n(5),c=n(52),o=(n(21),c.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ada3692f-cdc4-4c82-9079-5847319d88fc"}})),i=c.create({withCredentials:!0,baseURL:"https://wd.co.ua/api.php",headers:{"API-KEY":"ada3692f-cdc4-4c82-9079-5847319d88fc"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return o.get("users/?count="+e+"&page="+t).then((function(e){return e.data}))},follow:function(e){return o.post("follow/"+e).then((function(e){return e.data}))},unfollow:function(e){return o.delete("follow/"+e).then((function(e){return e.data}))},authMe:function(){return Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},getProfile:function(e){return o.get("profile/"+e).then((function(e){return e}))},getStatus:function(e){return o.get("profile/status/"+e).then((function(e){return e.data}))},setStatus:function(e){return o.put("profile/status/",{status:e}).then((function(e){return e.data}))},updateProfile:function(){return o.put("profile",{userId:11583,lookingForAJob:!1,lookingForAJobDescription:"\u0443\u0436\u0435 \u0435\u0441\u0442\u044c",fullName:"WD",aboutMe:"\u0414\u0438\u043c\u044b\u0447, \u043a\u0443\u0440\u0441\u044b - \u0430\u0433\u043e\u043d\u044c!!!",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"localhost.com",youtube:"",mainLink:""}}).then((function(e){return e.data}))},updateProfilePhoto:function(e){return Object(u.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.put("profile/photo",{image:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},auth:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return console.log(e,t,n,r),o.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logOut:function(){return console.log("logout1"),o.delete("auth/login").then((function(e){return console.log("logout"),e.data}))},getCaptcha:function(){return o.get("security/get-captcha-url").then((function(e){return e.data}))},getExamples:function(){return i.get("?action=get_examples").then((function(e){return e.data}))},getGbPosts:function(){return i.get("?action=get_gb_posts").then((function(e){return e.data}))}}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return m}));var r=n(15),a=n(2),u=n(29),c=n.n(u),o=n(53),i=n.n(o),s="samurai_project/chat/ADD_CHAT_POST",l="samurai_project/chat/DEL_CHAT_POST",f="samurai_project/chat/NEW_CHAT_POST_CHANGE",p={chatPosts:[{id:1,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u041f\u0440\u0438\u0432\u0456\u0442, \u0442\u0438 \u0442\u0443\u0442?",date:"15:25 17-08-2020"},{id:2,author:"Admin",authorAva:i.a,text:"\u041f\u0440\u0438\u0432\u0456\u0442, \u0442\u0430\u043a",date:"15:26 17-08-2020"},{id:3,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u0430 \u0442\u0438 \u043c\u043e\u0436\u0435\u0448 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043c\u0435\u043d\u0456 \u0441\u0430\u0439\u0442 \u0432\u0456\u0437\u0438\u0442\u043a\u0443?",date:"15:27 17-08-2020"},{id:4,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u0456 \u0444\u043e\u0440\u0443\u043c... \u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0442\u043e \u0431\u0443\u0434\u0435 \u043a\u043e\u0448\u0442\u0443\u0432\u0430\u0442\u0438?",date:"15:28 17-08-2020"},{id:5,author:"Admin",authorAva:i.a,text:"$17 000",date:"15:29 17-08-2020"},{id:6,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:"\u041d\u043e\u0440\u043c, \u0434\u0430\u0432\u0430\u0439 \u0440\u0435\u043a\u0432\u0456\u0437\u0438\u0442\u0438, \u0441\u043a\u0438\u043d\u0443 \u0430\u0432\u0430\u043d\u0441 ;)",date:"15:33 17-08-2020"}],newChatPostText:"this is Sparta!"};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.chatPosts.length+1,author:"\u041a\u043e\u0442\u0438\u0433\u043e\u0440\u043e\u0448\u043a\u043e",authorAva:c.a,text:t.text,date:"15:25 17-09-2020"};return Object(a.a)(Object(a.a)({},e),{},{chatPosts:[].concat(Object(r.a)(e.chatPosts),[n]),newChatPostText:""});case f:return Object(a.a)(Object(a.a)({},e),{},{newChatPostText:t.changedText});case l:return Object(a.a)(Object(a.a)({},e),{},{chatPosts:e.chatPosts.filter((function(e){return e.id!==t.id}))});default:return e}};var d=function(e){return{type:s,text:e}},m=function(e){return{type:f,changedText:e}}},85:function(e,t,n){e.exports={main:"Main_main__3de2d"}},87:function(e,t,n){e.exports={example:"Example_example__3UoYE"}},88:function(e,t,n){e.exports=n.p+"static/media/rings.5fe3cf7c.svg"},89:function(e,t,n){e.exports={copy:"Footer_copy__33kv9"}},90:function(e,t,n){e.exports=n.p+"static/media/logout.264a22fb.png"}},[[139,2,3]]]);
//# sourceMappingURL=main.b6c102b6.chunk.js.map