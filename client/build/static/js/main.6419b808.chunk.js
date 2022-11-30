(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(34),s=n.n(r),o=(n(99),n(4)),i=n(37),l=n(8),j=n(89),u=n(123),b=n(124),d=n(120),O=n.p+"static/media/mern-logo.0e1fd87c.png",m=n(2);var h=function(){return Object(m.jsx)("header",{className:"d-flex",children:Object(m.jsxs)("div",{className:"d-flex row",children:[Object(m.jsx)("div",{className:"logo-div mx-3 m-1",children:Object(m.jsx)("img",{className:"mern-logo",src:O,alt:"MERN Logo"})}),Object(m.jsx)("div",{className:"mern-trivia",children:Object(m.jsx)("h1",{className:"m-0",children:"MERN Trivia"})})]})})};var x=function(){return Object(m.jsx)("footer",{className:"page-footer"})},p=n(6),f=n(19),v=n(20),g=n(69),w=new(function(){function e(){Object(f.a)(this,e)}return Object(v.a)(e,[{key:"getProfile",value:function(){return Object(g.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(g.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var N,S,C,k=function(){console.log(w.loggedIn());var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(l.m)();return Object(c.useEffect)((function(){var e=w.getProfile().data.username;return a(e),e}),[]),Object(m.jsxs)("main",{className:"page-main d-flex justify-content-center align-items-center",children:[Object(m.jsxs)("div",{className:"text-center",children:["Welcome, ",n,"!"]}),Object(m.jsxs)("div",{className:"home-buttons m-5",children:[Object(m.jsx)("button",{className:"btn",onClick:function(){r("/select")},children:"Quizzes"}),Object(m.jsx)("button",{className:"btn",onClick:function(){r("/profile")},children:"Profile"}),w.loggedIn()?Object(m.jsx)("button",{className:"btn",onClick:w.logout,children:"Logout"}):Object(m.jsx)("button",{className:"btn",onClick:function(){r("/login")},children:"Login"})]})]})},y=n(10),q=n(18),_=n(13),E=n(122),T=n(121),A=n(117),I=n(116),G=n(48),L=n(51),$=Object(L.a)(N||(N=Object(G.a)(["\nmutation loginUser($username: String!, $password: String!) {\n  login(username: $username, password: $password) {\n    token\n    user {\n      _id\n    }\n  }\n}\n"]))),D=Object(L.a)(S||(S=Object(G.a)(["\nmutation addUser($username: String!, $password: String!) {\n  addUser(username: $username, password: $password) { \n    user {\n      _id\n      username\n    }\n    token\n  }\n}\n"]))),P=Object(L.a)(C||(C=Object(G.a)(["\nmutation updateUser ($username: String!, $questionsAnswered: Int!, $questionsCorrect: Int!) {\n  updateUser(username: $username, questionsAnswered: $questionsAnswered, questionsCorrect: $questionsCorrect) {\n    _id\n  }\n}\n"]))),F=function(){var e=Object(c.useState)({username:"",password:""}),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(p.a)(r,1)[0],i=Object(c.useState)(!1),l=Object(p.a)(i,2),j=l[0],u=l[1],b=Object(I.a)($),d=Object(p.a)(b,2),O=d[0],h=(d[1].error,function(e){var t=e.target,c=t.name,r=t.value;a(Object(o.a)(Object(o.a)({},n),{},Object(_.a)({},c,r)))}),x=function(){var e=Object(q.a)(Object(y.a)().mark((function e(t){var c,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,O({variables:Object(o.a)({},n)});case 6:c=e.sent,r=c.data,w.login(r.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),u(!0);case 15:a({username:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:"Login"}),Object(m.jsxs)(E.a,{noValidate:!0,validated:s,onSubmit:x,children:[Object(m.jsx)(T.a,{dismissible:!0,onClose:function(){return u(!1)},show:j,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(m.jsxs)(E.a.Group,{children:[Object(m.jsx)(E.a.Label,{htmlFor:"username",children:"Username"}),Object(m.jsx)(E.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:n.username,required:!0}),Object(m.jsx)(E.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(m.jsxs)(E.a.Group,{children:[Object(m.jsx)(E.a.Label,{htmlFor:"password",children:"Password"}),Object(m.jsx)(E.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(m.jsx)(E.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(m.jsx)(A.a,{disabled:!(n.username&&n.password),type:"submit",variant:"success",children:"Submit"})]})]})},U=function(){var e=Object(c.useState)({username:"",password:""}),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(p.a)(r,1)[0],i=Object(c.useState)(!1),l=Object(p.a)(i,2),j=l[0],u=l[1],b=Object(I.a)(D),d=Object(p.a)(b,1)[0],O=function(e){var t=e.target,c=t.name,r=t.value;a(Object(o.a)(Object(o.a)({},n),{},Object(_.a)({},c,r)))},h=function(){var e=Object(q.a)(Object(y.a)().mark((function e(t){var c,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),console.log("after propogation"),e.prev=5,e.next=8,d({variables:Object(o.a)({},n)});case 8:c=e.sent,r=c.data,console.log("data",r),w.login(r.addUser.token),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),console.error(e.t0),u(!0);case 18:console.log("after Auth login"),a({username:"",password:""});case 20:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:"Signup"}),Object(m.jsxs)(E.a,{noValidate:!0,validated:s,onSubmit:h,children:[Object(m.jsx)(T.a,{dismissible:!0,onClose:function(){return u(!1)},show:j,variant:"danger",children:"Something went wrong with your signup!"}),Object(m.jsxs)(E.a.Group,{children:[Object(m.jsx)(E.a.Label,{htmlFor:"username",children:"Username"}),Object(m.jsx)(E.a.Control,{type:"text",placeholder:"Create username",name:"username",onChange:O,value:n.username,required:!0}),Object(m.jsx)(E.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(m.jsxs)(E.a.Group,{children:[Object(m.jsx)(E.a.Label,{htmlFor:"password",children:"Password"}),Object(m.jsx)(E.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:O,value:n.password,required:!0}),Object(m.jsx)(E.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(m.jsx)(A.a,{disabled:!(n.username&&n.password),type:"submit",variant:"success",children:"Submit"})]})]})};var H=function(){var e=Object(l.m)();return Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)(F,{}),Object(m.jsx)(U,{}),Object(m.jsx)("div",{className:"home-buttons",children:Object(m.jsx)("button",{className:"btn",onClick:function(){e("/")},children:"Home"})})]})},z=n(25);var M=function(e){var t=Object(l.m)(),n=Object(z.c)((function(e){return e.options.question_category})),c=Object(z.b)(),a=function(e){c({type:"CHANGE_LOADING",loading:e})},r=function(){var e=Object(q.a)(Object(y.a)().mark((function e(){var r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?amount=10",n.length&&(r=r.concat("&category=".concat(n))),a(!0),e.next=5,fetch(r).then((function(e){return e.json()})).then((function(e){var t;t=e.results,c({type:"SET_QUESTIONS",questions:t}),a(!1)}));case 5:c({type:"SET_INDEX",index:0}),c({type:"SET_SCORE",score:0}),t("/quiz");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("button",{onClick:r,className:"btn",children:e.text})};var R,Q=function(){var e=Object(l.m)(),t=Object(c.useState)(null),n=Object(p.a)(t,2),a=n[0],r=n[1],s=Object(z.c)((function(e){return e.options.loading})),o=Object(z.c)((function(e){return e.options.question_category})),i=Object(z.b)();if(Object(c.useEffect)((function(){var e=function(e){i({type:"CHANGE_LOADING",loading:e})};e(!0),fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(t){e(!1),r(t.trivia_categories)}))}),[r,i]),!s)return Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h2",{children:"Select Category:"}),Object(m.jsxs)("select",{value:o,onChange:function(e){i({type:"CHANGE_CATEGORY",value:e.target.value})},className:"w-75",children:[Object(m.jsx)("option",{children:"All"}),a&&a.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),Object(m.jsxs)("div",{className:"select-buttons",children:[Object(m.jsx)(M,{text:"Start!"}),Object(m.jsx)("button",{onClick:function(){e("/")},className:"btn",children:"Home"})]})]})},Y=Object(L.a)(R||(R=Object(G.a)(["\n{\n    me {\n      _id\n      username\n      questionsAnswered\n      questionsCorrect\n      correctPercent\n      title\n    }\n  }\n"]))),V=n(126);var X=function(){var e=Object(l.m)(),t=Object(V.a)(Y),n=t.loading,c=t.data,a=(null===c||void 0===c?void 0:c.me)||{};return console.log(a),Object(m.jsxs)("main",{className:"page-main d-flex justify-content-center align-items-center",children:[Object(m.jsx)("div",{className:"text-center",children:"Profile"}),Object(m.jsx)("div",{className:"spacer2"}),n?Object(m.jsx)("div",{children:"LOADING..."}):Object(m.jsxs)("div",{className:"profile-container text-center",children:[Object(m.jsx)("h2",{children:a.username}),Object(m.jsx)("div",{className:"spacer"}),Object(m.jsx)("div",{children:a.title}),Object(m.jsx)("div",{className:"spacer"}),Object(m.jsxs)("div",{children:["Total Questions: ",a.questionsAnswered]}),Object(m.jsxs)("div",{children:["Correct Answers: ",a.correctPercent,"%"]}),Object(m.jsx)("div",{className:"spacer2"})]}),Object(m.jsx)("div",{className:"home-buttons",children:Object(m.jsx)("button",{className:"btn",onClick:function(){e("/")},children:"Home"})})]})};var B=function(){return Object(m.jsx)("main",{className:"page-main d-flex justify-content-center align-items-center",children:Object(m.jsx)("div",{className:"text-center",children:"Not Found"})})},J=(n(107),n(21)),W=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value};var K=function(){var e=Object(I.a)(P),t=Object(p.a)(e,2),n=t[0],a=(t[1].error,Object(V.a)(Y)),r=(a.loading,a.data),s=Object(l.m)(),i=Object(c.useState)([]),j=Object(p.a)(i,2),u=j[0],b=j[1],d=Object(c.useState)(!1),O=Object(p.a)(d,2),h=O[0],x=O[1],f=Object(c.useState)(null),v=Object(p.a)(f,2),g=v[0],w=v[1],N=Object(c.useState)([]),S=Object(p.a)(N,2),C=S[0],k=S[1],_=Object(z.c)((function(e){return e.score})),E=Object(z.c)((function(e){return e.questions}));Object(c.useEffect)((function(){var e=E.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{question:W(e.question),correct_answer:W(e.correct_answer),incorrect_answers:e.incorrect_answers.map((function(e){return W(e)}))})}));b(e)}),[E]);var T=Object(z.c)((function(e){return e.index})),A=Object(z.b)(),G=u[T],L=G&&G.correct_answer,$=function(){var e=Object(q.a)(Object(y.a)().mark((function e(){var t,c,a,o,i,l;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(null===r||void 0===r?void 0:r.me)||{},console.log(t.questionsAnswered),c=t.username,a=t.questionsCorrect+_,o=t.questionsAnswered+10,console.log(o),console.log(a),console.log(c),e.next=10,n({variables:{username:c,questionsAnswered:o,questionsCorrect:a}});case 10:i=e.sent,l=i.updatedData,console.log(l),s("/final");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){if(T>=2&&(console.log(T),$()),G){var e,t=Object(J.a)(G.incorrect_answers);t.splice((e=G.incorrect_answers.length,Math.floor(Math.random()*Math.floor(e))),0,G.correct_answer),k(t)}}),[G]);var D=function(e){x(!0),w(e.target.textContent),e.target.textContent===L&&A({type:"SET_SCORE",score:_+1}),T+1<=u.length&&setTimeout((function(){x(!1),w(null),A({type:"SET_INDEX",index:T+1})}),2500)},F=function(e){return h?e===L?"correct disabled":e===g?"selected disabled":"disabled":""};return G?Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Question ",T+1]}),Object(m.jsx)("h3",{children:G.question}),Object(m.jsx)("ul",{children:C.map((function(e,t){return Object(m.jsx)("li",{onClick:D,className:F(e),children:e},t)}))}),Object(m.jsxs)("div",{children:["Score: ",_," / ",u.length]})]}):Object(m.jsx)("div",{children:"Loading"})};var Z=function(){var e=Object(l.m)(),t=Object(z.c)((function(e){return e.score}));return Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsx)("div",{className:"spacer2"}),Object(m.jsxs)("h3",{className:"text-center",children:["Final Score: ",t]}),Object(m.jsx)("div",{className:"spacer2"}),Object(m.jsxs)("div",{className:"select-buttons",children:[Object(m.jsx)("button",{onClick:function(){e("/profile")},className:"btn",children:"Profile"}),Object(m.jsx)("button",{onClick:function(){e("/")},className:"btn",children:"Home"})]})]})},ee=n(86);var te=function(e){var t=e.children;return w.loggedIn()?t:Object(m.jsx)(l.a,{to:"/login"})},ne=Object(j.a)({uri:"/graphql"}),ce=Object(ee.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),ae=new u.a({link:ce.concat(ne),cache:new b.a});var re=function(){return Object(m.jsxs)(d.a,{client:ae,children:[Object(m.jsx)("div",{}),Object(m.jsx)(h,{}),Object(m.jsx)(i.a,{children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/",element:Object(m.jsx)(k,{})}),Object(m.jsx)(l.b,{path:"/login",element:Object(m.jsx)(H,{})}),Object(m.jsx)(l.b,{path:"/select",element:Object(m.jsx)(te,{children:Object(m.jsx)(Q,{})})}),Object(m.jsx)(l.b,{path:"/quiz",element:Object(m.jsx)(K,{})}),Object(m.jsx)(l.b,{path:"/final",element:Object(m.jsx)(Z,{})}),Object(m.jsx)(l.b,{path:"/profile",element:Object(m.jsx)(te,{children:Object(m.jsx)(X,{})})}),Object(m.jsx)(l.b,{path:"*",element:Object(m.jsx)(B,{})})]})}),Object(m.jsx)(x,{})]})},se={options:{loading:!1,question_category:"",index:0,score:0}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOADING":return Object(o.a)(Object(o.a)({},e),{},{options:Object(o.a)(Object(o.a)({},e.options),{},{loading:t.value})});case"CHANGE_CATEGORY":return Object(o.a)(Object(o.a)({},e),{},{options:Object(o.a)(Object(o.a)({},e.options),{},{question_category:t.value})});case"SET_QUESTIONS":return Object(o.a)(Object(o.a)({},e),{},{questions:t.questions});case"SET_INDEX":return console.log("action.index",t.index),Object(o.a)(Object(o.a)({},e),{},{index:t.index});case"SET_SCORE":return Object(o.a)(Object(o.a)({},e),{},{score:t.score});default:return e}},ie=n(88),le=Object(ie.a)(oe);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(z.a,{store:le,children:Object(m.jsx)(re,{})})}),document.getElementById("root"))},99:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.6419b808.chunk.js.map