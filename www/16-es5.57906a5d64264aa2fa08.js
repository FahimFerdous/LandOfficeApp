(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8k80":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),c=u("Ip0R"),a=u("mrSG"),s=u("X+KH"),b=function(){function n(n,l,u){this.alertCtrl=n,this.router=l,this.userData=u}return n.prototype.ngAfterViewInit=function(){this.getUsername()},n.prototype.updatePicture=function(){console.log("Clicked to update picture")},n.prototype.changeUsername=function(){return a.b(this,void 0,void 0,function(){var n=this;return a.e(this,function(l){switch(l.label){case 0:return[4,this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:function(l){n.userData.setUsername(l.username),n.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},n.prototype.getUsername=function(){var n=this;this.userData.getUsername().then(function(l){n.username=l})},n.prototype.changePassword=function(){console.log("Clicked to change password")},n.prototype.logout=function(){this.userData.logout(),this.router.navigateByUrl("/login")},n.prototype.support=function(){this.router.navigateByUrl("/support")},n}(),p=u("ZYCi"),h=t.rb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]],data:{}});function m(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,20,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(n()(),t.tb(1,0,null,null,0,"img",[["alt","avatar"],["src","https://www.gravatar.com/avatar?d=mm&s=140"]],null,null,null,null,null)),(n()(),t.tb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Mb(3,null,["",""])),(n()(),t.tb(4,0,null,null,16,"ion-list",[["inset",""]],null,null,null,r.sb,r.y)),t.sb(5,49152,null,0,i.Q,[t.h,t.k,t.z],{inset:[0,"inset"]},null),(n()(),t.tb(6,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.updatePicture()&&t),t},r.pb,r.r)),t.sb(7,49152,null,0,i.J,[t.h,t.k,t.z],null,null),(n()(),t.Mb(-1,0,["Update Picture"])),(n()(),t.tb(9,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.changeUsername()&&t),t},r.pb,r.r)),t.sb(10,49152,null,0,i.J,[t.h,t.k,t.z],null,null),(n()(),t.Mb(-1,0,["Change Username"])),(n()(),t.tb(12,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.changePassword()&&t),t},r.pb,r.r)),t.sb(13,49152,null,0,i.J,[t.h,t.k,t.z],null,null),(n()(),t.Mb(-1,0,["Change Password"])),(n()(),t.tb(15,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.support()&&t),t},r.pb,r.r)),t.sb(16,49152,null,0,i.J,[t.h,t.k,t.z],null,null),(n()(),t.Mb(-1,0,["Support"])),(n()(),t.tb(18,0,null,0,2,"ion-item",[],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.logout()&&t),t},r.pb,r.r)),t.sb(19,49152,null,0,i.J,[t.h,t.k,t.z],null,null),(n()(),t.Mb(-1,0,["Logout"]))],function(n,l){n(l,5,0,"")},function(n,l){n(l,3,0,l.component.username)})}function f(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,10,"ion-header",[],null,null,null,r.hb,r.o)),t.sb(1,49152,null,0,i.D,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Lb,r.S)),t.sb(3,49152,null,0,i.Db,[t.h,t.k,t.z],null,null),(n()(),t.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.X,r.e)),t.sb(5,49152,null,0,i.n,[t.h,t.k,t.z],null,null),(n()(),t.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.tb,r.B)),t.sb(7,49152,null,0,i.T,[t.h,t.k,t.z],null,null),(n()(),t.tb(8,0,null,0,2,"ion-title",[],null,null,null,r.Kb,r.R)),t.sb(9,49152,null,0,i.Bb,[t.h,t.k,t.z],null,null),(n()(),t.Mb(-1,0,["Account"])),(n()(),t.tb(11,0,null,null,3,"ion-content",[["class","outer-content"]],null,null,null,r.db,r.k)),t.sb(12,49152,null,0,i.w,[t.h,t.k,t.z],null,null),(n()(),t.ib(16777216,null,0,1,null,m)),t.sb(14,16384,null,0,c.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,14,0,l.component.username)},null)}function g(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,1,"page-account",[],null,null,null,f,h)),t.sb(1,4243456,null,0,b,[i.b,p.m,s.a],null,null)],null,null)}var k=t.pb("page-account",b,g,{},{},[]),d=function(){return function(){}}();u.d(l,"AccountModuleNgFactory",function(){return v});var v=t.qb(e,[],function(n){return t.Cb([t.Db(512,t.j,t.bb,[[8,[o.a,k]],[3,t.j],t.x]),t.Db(4608,c.m,c.l,[t.u,[2,c.v]]),t.Db(4608,i.c,i.c,[t.z,t.g]),t.Db(4608,i.Ib,i.Ib,[i.c,t.j,t.q]),t.Db(4608,i.Mb,i.Mb,[i.c,t.j,t.q]),t.Db(1073742336,c.b,c.b,[]),t.Db(1073742336,i.Fb,i.Fb,[]),t.Db(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),t.Db(1073742336,d,d,[]),t.Db(1073742336,e,e,[]),t.Db(1024,p.k,function(){return[[{path:"",component:b}]]},[])])})}}]);