(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{X3zk:function(t,r,o){"use strict";o.r(r),o.d(r,"LoginModule",function(){return h});var n=o("ofXK"),e=o("tyNb"),b=o("3Pt+"),i=o("AytR"),s=o("z8ke"),c=o("fXoL"),a=o("5eHb"),u=o("JqCM");function d(t,r){1&t&&(c.Rb(0,"div"),c.sc(1,"Username is required"),c.Qb())}function l(t,r){if(1&t&&(c.Rb(0,"div",21),c.rc(1,d,2,0,"div",22),c.Qb()),2&t){const t=c.ac();c.Bb(1),c.gc("ngIf",t.f.username.errors.required)}}function m(t,r){1&t&&(c.Rb(0,"div"),c.sc(1,"Password is required"),c.Qb())}function p(t,r){1&t&&(c.Rb(0,"div"),c.sc(1,"Password must be at least 4 characters"),c.Qb())}function f(t,r){if(1&t&&(c.Rb(0,"div",21),c.rc(1,m,2,0,"div",22),c.rc(2,p,2,0,"div",22),c.Qb()),2&t){const t=c.ac();c.Bb(1),c.gc("ngIf",t.f.password.errors.required),c.Bb(1),c.gc("ngIf",t.f.password.errors.minlength)}}const g=function(t){return{"is-invalid":t}},R=[{path:"",component:(()=>{class t{constructor(t,r,o,n,e){this.formBuilder=t,this.toastr=r,this.loginService=o,this.router=n,this.spinnerService=e,this.baseUrl=i.a.baseUrl,this.formSubmitted=!1}ngOnInit(){this._initForm()}_initForm(){this.myForm=this.formBuilder.group({username:["",b.j.required],password:["",[b.j.minLength(4),b.j.required]]})}get f(){return this.myForm.controls}onSubmit(){}}return t.\u0275fac=function(r){return new(r||t)(c.Mb(b.b),c.Mb(a.b),c.Mb(s.a),c.Mb(e.c),c.Mb(u.c))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-login"]],decls:31,vars:10,consts:[[1,"account-content"],[1,"container"],[1,"account-logo"],["href","javascript:"],["src","assets/img/logo2.png","alt","Walton Digi-Tech Industries Ltd "],[1,"account-box"],[1,"account-wrapper"],[1,"account-title"],[1,"account-subtitle"],[3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","username","type","text",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"row"],[1,"col"],["formControlName","password","formControlName","password","type","password",1,"form-control",3,"ngClass"],[1,"form-group","text-center"],["type","submit",1,"btn","btn-primary","account-btn","custom-button"],[1,"account-footer"],["bdColor","rgba(255,255,255,0.5)","size","medium","color","#667eea","type","ball-clip-rotate",3,"fullScreen"],[2,"color","black"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,r){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"a",3),c.Nb(4,"img",4),c.Qb(),c.Qb(),c.Rb(5,"div",5),c.Rb(6,"div",6),c.Rb(7,"h3",7),c.sc(8,"Login"),c.Qb(),c.Rb(9,"p",8),c.sc(10,"Welcome to Cencus Ticket Support"),c.Qb(),c.Rb(11,"form",9),c.Yb("ngSubmit",function(){return r.onSubmit()}),c.Rb(12,"div",10),c.Rb(13,"label"),c.sc(14,"Username"),c.Qb(),c.Nb(15,"input",11),c.rc(16,l,2,1,"div",12),c.Qb(),c.Rb(17,"div",10),c.Rb(18,"div",13),c.Rb(19,"div",14),c.Rb(20,"label"),c.sc(21,"Password"),c.Qb(),c.Qb(),c.Qb(),c.Nb(22,"input",15),c.rc(23,f,3,2,"div",12),c.Qb(),c.Rb(24,"div",16),c.Rb(25,"button",17),c.sc(26,"Login"),c.Qb(),c.Qb(),c.Nb(27,"div",18),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(28,"ngx-spinner",19),c.Rb(29,"p",20),c.sc(30," Processing... "),c.Qb(),c.Qb()),2&t&&(c.Bb(11),c.gc("formGroup",r.myForm),c.Bb(4),c.gc("ngClass",c.ic(6,g,r.formSubmitted&&r.f.username.errors)),c.Bb(1),c.gc("ngIf",r.formSubmitted&&r.f.username.errors),c.Bb(6),c.gc("ngClass",c.ic(8,g,r.formSubmitted&&r.f.password.errors)),c.Bb(1),c.gc("ngIf",r.formSubmitted&&r.f.password.errors),c.Bb(5),c.gc("fullScreen",!1))},directives:[b.k,b.g,b.d,b.a,b.f,b.c,n.i,n.k,u.a],styles:[".custom-button[_ngcontent-%COMP%]{background:linear-gradient(90deg,#0a6323 0,#de0f0f)}"]}),t})()},{path:"register",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-register"]],decls:35,vars:0,consts:[[1,"main-wrapper"],[1,"account-content"],["routerLink","/login/joblist",1,"btn","btn-primary","apply-btn"],[1,"container"],[1,"account-logo"],["routerLink","/dashboard"],["src","assets/img/logo2.png","alt","Dreamguy's Technologies"],[1,"account-box"],[1,"account-wrapper"],[1,"account-title"],[1,"account-subtitle"],["action","dashboard"],[1,"form-group"],["type","text",1,"form-control"],["type","password",1,"form-control"],[1,"form-group","text-center"],["type","submit",1,"btn","btn-primary","account-btn"],[1,"account-footer"],["routerLink","/login/login"]],template:function(t,r){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"a",2),c.sc(3,"Apply Job"),c.Qb(),c.Rb(4,"div",3),c.Rb(5,"div",4),c.Rb(6,"a",5),c.Nb(7,"img",6),c.Qb(),c.Qb(),c.Rb(8,"div",7),c.Rb(9,"div",8),c.Rb(10,"h3",9),c.sc(11,"Register"),c.Qb(),c.Rb(12,"p",10),c.sc(13,"Access to our dashboard"),c.Qb(),c.Rb(14,"form",11),c.Rb(15,"div",12),c.Rb(16,"label"),c.sc(17,"Email"),c.Qb(),c.Nb(18,"input",13),c.Qb(),c.Rb(19,"div",12),c.Rb(20,"label"),c.sc(21,"Password"),c.Qb(),c.Nb(22,"input",14),c.Qb(),c.Rb(23,"div",12),c.Rb(24,"label"),c.sc(25,"Repeat Password"),c.Qb(),c.Nb(26,"input",14),c.Qb(),c.Rb(27,"div",15),c.Rb(28,"button",16),c.sc(29,"Register"),c.Qb(),c.Qb(),c.Rb(30,"div",17),c.Rb(31,"p"),c.sc(32,"Already have an account? "),c.Rb(33,"a",18),c.sc(34,"Login"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb())},directives:[e.e,b.k,b.g,b.h],styles:[""]}),t})()}];let Q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[e.f.forChild(R)],e.f]}),t})();var v=o("tk/3");let h=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[n.b,Q,v.c,u.b,b.e,b.i]]}),t})()}}]);