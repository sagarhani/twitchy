(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(14),r=n.n(c),o=n(6),l=n(5),u=n(36),s=n(35),m=function(){return i.a.createElement("div",null,"StreamCreate")},d=function(){return i.a.createElement("div",null,"StreamEdit")},g=function(){return i.a.createElement("div",null,"StreamList")},h=function(){return i.a.createElement("div",null,"StreamDelete")},p=function(){return i.a.createElement("div",null,"StreamShow")},E=n(34),I=n(16),f=n(17),S=n(20),O=n(18),w=n(21),v=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(i)))).onAuthChange=function(e){e?(console.log("Your Google ID is : ".concat(n.auth.currentUser.get().getId())),n.props.signIn(n.auth.currentUser.get().getId())):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(w.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"618231325075-md6i33po75m7fe76p5j7cdgfsbf3f5nq.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?i.a.createElement("div",null,"I don't know if we are signed in"):this.props.isSignedIn?i.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign Out"):i.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderAuthButton())}}]),t}(i.a.Component),b=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(v),N=function(){return i.a.createElement("div",{className:"ui secondary pointing menu"},i.a.createElement(E.a,{to:"/",className:"item"},"Twitchy"),i.a.createElement("div",{className:"right menu"},i.a.createElement(E.a,{to:"/",className:"item"},"All Streams"),i.a.createElement(b,null)))},y=function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement("div",null,i.a.createElement(N,null),i.a.createElement(s.a,{path:"/",exact:!0,component:g}),i.a.createElement(s.a,{path:"/streams/new",exact:!0,component:m}),i.a.createElement(s.a,{path:"/streams/edit",exact:!0,component:d}),i.a.createElement(s.a,{path:"/streams/delete",exact:!0,component:h}),i.a.createElement(s.a,{path:"/streams/show",exact:!0,component:p}))))},j=n(10),k={isSignedIn:null,userId:null},C=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(j.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(j.a)({},e,{isSignedIn:!1,userId:null});default:return e}}}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,A=Object(l.e)(C,_(Object(l.a)()));r.a.render(i.a.createElement(o.a,{store:A},i.a.createElement(y,null)),document.querySelector("#root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.2c2b96aa.chunk.js.map