(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{w4GT:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("oBZk"),s=u("ZZ/e"),b=u("s7LF"),r=u("mrSG");class a{constructor(l,n){this.alertCtrl=l,this.toastCtrl=n,this.submitted=!1}ionViewDidEnter(){return r.b(this,void 0,void 0,function*(){const l=yield this.toastCtrl.create({message:"This does not actually send a support request.",duration:3e3});yield l.present()})}submit(l){return r.b(this,void 0,void 0,function*(){if(this.submitted=!0,l.valid){this.supportMessage="",this.submitted=!1;const l=yield this.toastCtrl.create({message:"Your support request has been sent.",duration:3e3});yield l.present()}})}}var d=t.pb({encapsulation:0,styles:[[".support-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.support-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function p(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,10,"ion-header",[],null,null,null,i.hb,i.o)),t.qb(1,49152,null,0,s.D,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.Lb,i.S)),t.qb(3,49152,null,0,s.Db,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.X,i.e)),t.qb(5,49152,null,0,s.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.tb,i.B)),t.qb(7,49152,null,0,s.T,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"ion-title",[],null,null,null,i.Kb,i.R)),t.qb(9,49152,null,0,s.Bb,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Support"])),(l()(),t.rb(11,0,null,null,32,"ion-content",[],null,null,null,i.db,i.k)),t.qb(12,49152,null,0,s.w,[t.h,t.k,t.x],null,null),(l()(),t.rb(13,0,null,0,1,"div",[["class","support-logo"]],null,null,null,null,null)),(l()(),t.rb(14,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(l()(),t.rb(15,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t.Db(l,17).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Db(l,17).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.submit(t.Db(l,17))&&e),e},null,null)),t.qb(16,16384,null,0,b.m,[],null,null),t.qb(17,4210688,[["submitForm",4]],0,b.h,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Hb(2048,null,b.a,null,[b.h]),t.qb(19,16384,null,0,b.g,[[4,b.a]],null,null),(l()(),t.rb(20,0,null,null,15,"ion-list",[["lines","none"]],null,null,null,i.sb,i.y)),t.qb(21,49152,null,0,s.Q,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.rb(22,0,null,0,13,"ion-item",[],null,null,null,i.pb,i.r)),t.qb(23,49152,null,0,s.J,[t.h,t.k,t.x],null,null),(l()(),t.rb(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,i.qb,i.x)),t.qb(25,49152,null,0,s.P,[t.h,t.k,t.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),t.Kb(-1,0,["Enter your support message below"])),(l()(),t.rb(27,0,null,0,8,"ion-textarea",[["name","supportQuestion"],["required",""],["rows","6"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Db(l,30)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.Db(l,30)._handleInputEvent(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.supportMessage=u)&&e),e},i.Jb,i.Q)),t.qb(28,16384,null,0,b.j,[],{required:[0,"required"]},null),t.Hb(1024,null,b.c,function(l){return[l]},[b.j]),t.qb(30,16384,null,0,s.Pb,[t.k],null,null),t.Hb(1024,null,b.d,function(l){return[l]},[s.Pb]),t.qb(32,671744,[["supportQuestion",4]],0,b.i,[[2,b.a],[6,b.c],[8,null],[6,b.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Hb(2048,null,b.e,null,[b.i]),t.qb(34,16384,null,0,b.f,[[4,b.e]],null,null),t.qb(35,49152,null,0,s.zb,[t.h,t.k,t.x],{name:[0,"name"],required:[1,"required"],rows:[2,"rows"]},null),(l()(),t.rb(36,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,i.Ib,i.P)),t.qb(37,49152,null,0,s.yb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(38,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t.Kb(-1,null,[" Support message is required "])),(l()(),t.rb(40,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),t.rb(41,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,null,null,i.W,i.d)),t.qb(42,49152,null,0,s.m,[t.h,t.k,t.x],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),t.Kb(-1,0,["Submit"]))],function(l,n){var u=n.component;l(n,21,0,"none"),l(n,25,0,"primary","stacked"),l(n,28,0,""),l(n,32,0,"supportQuestion",u.supportMessage),l(n,35,0,"supportQuestion","","6"),l(n,37,0,"danger"),l(n,42,0,"block","submit")},function(l,n){var u=n.component;l(n,15,0,t.Db(n,19).ngClassUntouched,t.Db(n,19).ngClassTouched,t.Db(n,19).ngClassPristine,t.Db(n,19).ngClassDirty,t.Db(n,19).ngClassValid,t.Db(n,19).ngClassInvalid,t.Db(n,19).ngClassPending),l(n,27,0,t.Db(n,28).required?"":null,t.Db(n,34).ngClassUntouched,t.Db(n,34).ngClassTouched,t.Db(n,34).ngClassPristine,t.Db(n,34).ngClassDirty,t.Db(n,34).ngClassValid,t.Db(n,34).ngClassInvalid,t.Db(n,34).ngClassPending),l(n,38,0,t.Db(n,32).valid||!1===u.submitted)})}function g(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"page-support",[],null,null,null,p,d)),t.qb(1,49152,null,0,a,[s.b,s.Qb],null,null)],null,null)}var c=t.nb("page-support",a,g,{},{},[]),m=u("SVse"),h=u("iInd");class q{}u.d(n,"SupportModuleNgFactory",function(){return v});var v=t.ob(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[o.a,c]],[3,t.j],t.v]),t.Bb(4608,m.m,m.l,[t.s,[2,m.v]]),t.Bb(4608,b.l,b.l,[]),t.Bb(4608,s.c,s.c,[t.x,t.g]),t.Bb(4608,s.Ib,s.Ib,[s.c,t.j,t.p]),t.Bb(4608,s.Mb,s.Mb,[s.c,t.j,t.p]),t.Bb(1073742336,m.b,m.b,[]),t.Bb(1073742336,b.k,b.k,[]),t.Bb(1073742336,b.b,b.b,[]),t.Bb(1073742336,s.Fb,s.Fb,[]),t.Bb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),t.Bb(1073742336,q,q,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,h.k,function(){return[[{path:"",component:a}]]},[])])})}}]);