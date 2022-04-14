"use strict";(self.webpackChunkdrDolittle=self.webpackChunkdrDolittle||[]).push([[579],{9579:(ct,f,c)=>{c.r(f),c.d(f,{AdlistModule:()=>at});var s=c(9808),d=c(1734),h=c(9841),A=c(5577),t=c(1223),_=c(8103),m=c(8204);let b=(()=>{class n{constructor(){this.dialogResolution=new t.vpe}ngOnInit(){}onDelBtnPressed(){this.dialogResolution.emit("yes")}onCancelBtnPressed(){this.dialogResolution.emit("cancel")}onBkgrdPressed(){this.dialogResolution.emit("cancel")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["confirm-dialog"]],inputs:{message:"message"},outputs:{dialogResolution:"dialogResolution"},decls:9,vars:1,consts:[[1,"dialog-container",3,"click"],[1,"dialog-content"],[1,"btn-container"],[1,"confirm",3,"click"],[1,"cancel",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.onBkgrdPressed()}),t.TgZ(1,"div",1)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"button",3),t.NdJ("click",function(){return o.onDelBtnPressed()}),t._uU(6,"\u0414\u0430"),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return o.onCancelBtnPressed()}),t._uU(8,"\u041e\u0442\u043a\u0430\u0437"),t.qZA()()()()),2&e&&(t.xp6(3),t.Oqu(o.message))},styles:[".dialog-container[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:#0000004d;z-index:2;cursor:pointer;display:flex;align-items:center;justify-content:center}.dialog-content[_ngcontent-%COMP%]{background-color:var(--color-cards-bgrd);padding:2em;border-radius:var(--border-radius);box-shadow:3px 5px 9px -4px #07004d}.btn-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}button[_ngcontent-%COMP%]{border:none;border-radius:var(--border-radius);color:#fff;font-size:.8em;padding:.5em 1em}button[_ngcontent-%COMP%]:hover{cursor:pointer;opacity:.2}button.confirm[_ngcontent-%COMP%]{background-color:var(--color-link-default)}button.cancel[_ngcontent-%COMP%]{background-color:#020258}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2em}"]}),n})();function x(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).handleEdit()}),t._uU(2,"\u0420\u0435\u0434\u0430\u043a\u0446\u0438\u044f"),t.qZA(),t.TgZ(3,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).openDialog()}),t._uU(4,"\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043d\u0435"),t.qZA()()}}function Z(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"confirm-dialog",9),t.NdJ("dialogResolution",function(i){return t.CHM(e),t.oxw(2).handleDialog(i)}),t.qZA()}}function M(n,u){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"div",4)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p")(9,"span"),t._uU(10,"\u0417\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438:"),t.qZA(),t._uU(11),t.qZA(),t.TgZ(12,"p")(13,"span"),t._uU(14,"\u0442\u0435\u043b.:"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"p")(17,"span"),t._uU(18,"e-mail:"),t.qZA(),t._uU(19),t.qZA(),t.TgZ(20,"p")(21,"span"),t._uU(22,"\u0421\u044a\u0437\u0434\u0430\u0434\u0435\u043d\u0430:"),t.qZA(),t._uU(23),t.ALo(24,"date"),t.qZA(),t.TgZ(25,"p")(26,"span"),t._uU(27,"\u041e\u0431\u043d\u043e\u0432\u0435\u043d\u0430:"),t.qZA(),t._uU(28),t.ALo(29,"date"),t.qZA(),t.YNc(30,x,5,0,"div",5),t.YNc(31,Z,1,0,"confirm-dialog",6),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.currentAd.adImage,t.LSH),t.xp6(3),t.Oqu(e.currentAd.category),t.xp6(2),t.Oqu(e.currentAd.description),t.xp6(4),t.hij(" ",e.currentAd.contactName,""),t.xp6(4),t.hij(" ",e.currentAd.contactPhone,""),t.xp6(4),t.hij(" ",e.currentAd.contactEmail||"\u043d\u0435 \u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d",""),t.xp6(4),t.hij(" ",t.xi3(24,10,e.currentAd.createdAt,"d MMMM yyyy \u0433."),""),t.xp6(5),t.hij(" ",t.xi3(29,13,e.currentAd.updatedAt,"d MMMM yyyy \u0433."),""),t.xp6(2),t.Q6J("ngIf",e.isAdmin||e.isOwner||e.isModerator),t.xp6(1),t.Q6J("ngIf",e.showDialog)}}let P=(()=>{class n{constructor(e,o,i,a){this.adService=e,this.tokenService=o,this.activatedRoute=i,this.router=a,this.showDialog=!1,this.confirmation=!1,this.isOwner=!1,this.isAdmin=!1,this.isModerator=!1,this.isLoggedIn=this.tokenService.isLoggedIn$}ngOnInit(){(0,h.a)([this.activatedRoute.params.pipe((0,A.z)(e=>this.adService.getAdById(e.adId))),this.tokenService.currentUser$]).subscribe(([e,o])=>{this.currentAd=e,o&&(this.currentUser=o,this.isAdmin=o.roles.includes("ROLE_ADMIN"),this.isModerator=o.roles.includes("ROLE_MODERATOR"),this.isOwner=this.currentUser.id===this.currentAd.owner)})}handleEdit(){this.router.navigate([`/adlist//edit/${this.currentAd._id}`])}openDialog(){this.showDialog=!0}handleDialog(e){"yes"===e?(console.log(this.currentAd._id),this.showDialog=!1,this.adService.deleteAd(this.currentAd._id).subscribe({next:()=>this.router.navigate(["/adlist"])})):"cancel"===e&&(console.log("cancelled deletion"),this.showDialog=!1)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.F),t.Y36(m.i),t.Y36(d.gz),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ad-detail"]],decls:1,vars:1,consts:[["class","ad-data",4,"ngIf"],[1,"ad-data"],[1,"img-container"],["alt","ad-image",3,"src"],[1,"data-container"],["class","buttons",4,"ngIf"],["message","\u0421\u0438\u0433\u0443\u0440\u043d\u0438 \u043b\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 \u043e\u0431\u044f\u0432\u0430\u0442\u0430?",3,"dialogResolution",4,"ngIf"],[1,"buttons"],[3,"click"],["message","\u0421\u0438\u0433\u0443\u0440\u043d\u0438 \u043b\u0438 \u0441\u0442\u0435, \u0447\u0435 \u0438\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 \u043e\u0431\u044f\u0432\u0430\u0442\u0430?",3,"dialogResolution"]],template:function(e,o){1&e&&t.YNc(0,M,32,16,"div",0),2&e&&t.Q6J("ngIf",o.currentAd)},directives:[s.O5,b],pipes:[s.uU],styles:['.ad-data[_ngcontent-%COMP%]{position:relative;display:flex;margin:2em;background-color:var(--color-cards-bgrd);border-radius:var(--border-radius);padding:2em 1em}.img-container[_ngcontent-%COMP%]{width:500px;height:400px;object-fit:cover;overflow:hidden;margin:5em 1em 1em;border:15px solid white}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.data-container[_ngcontent-%COMP%]{margin-left:3em}.data-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:inline-block;font-weight:700;font-size:2.5em;position:relative;margin:1.5em 0}.data-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{position:absolute;content:"";background-color:var(--color-link-default);width:100%;height:.2em;top:100%;left:0}.data-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em}.data-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}button[_ngcontent-%COMP%]{background-color:var(--color-link-default);border:none;border-radius:var(--border-radius);color:#fff;font-size:1em;padding:1em 2em}button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--color-link-hover)}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2em}.dialog-component-container[_ngcontent-%COMP%]{position:relative}']}),n})();var r=c(2382);class T{static checkPhoneNumber(u){return e=>{var o;const i=e.get(u);return/^08\d{8}$/.test(null==i?void 0:i.value)?null:(null===(o=e.get(u))||void 0===o||o.setErrors({nrInvalid:!0}),{nrInvalid:!0})}}}function F(n,u){1&n&&(t.TgZ(0,"h2"),t._uU(1,"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u044f\u0432\u0430"),t.qZA())}function w(n,u){1&n&&(t.TgZ(0,"h2"),t._uU(1,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u044f\u0432\u0430"),t.qZA())}function y(n,u){1&n&&(t.TgZ(0,"div"),t._uU(1,"\u041c\u043e\u043b\u044f \u0438\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043e\u0442 \u043c\u0435\u043d\u044e\u0442\u043e!"),t.qZA())}function I(n,u){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,y,2,0,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.category.errors.required)}}function E(n,u){1&n&&(t.TgZ(0,"div"),t._uU(1,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0442\u043e \u0435 \u043c\u0435\u0436\u0434\u0443 10 \u0438 500 \u0441\u0438\u043c\u0432\u043e\u043b\u0430."),t.qZA())}function N(n,u){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,E,2,0,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.description.errors.minlength||e.f.description.errors.maxlength)}}function k(n,u){1&n&&(t.TgZ(0,"div"),t._uU(1,"\u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043b\u0438\u0446\u0435 \u0437\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442!"),t.qZA())}function U(n,u){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,k,2,0,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.contactName.errors.required)}}function q(n,u){1&n&&(t.TgZ(0,"div"),t._uU(1,"\u041d\u0435\u0432\u0430\u043b\u0438\u0434\u0435\u043d email \u0430\u0434\u0440\u0435\u0441!"),t.qZA())}function D(n,u){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,q,2,0,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.contactEmail.errors.contactEmail)}}function J(n,u){1&n&&(t.TgZ(0,"div"),t._uU(1,"\u041d\u043e\u043c\u0435\u0440\u044a\u0442 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0441 08 \u0438 \u0434\u0430 \u0435 \u043e\u0431\u0449\u043e 10 \u0441\u0438\u043c\u0432\u043e\u043b\u0430."),t.qZA())}function S(n,u){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,J,2,0,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.contactPhone.errors.nrInvalid)}}function Y(n,u){1&n&&(t.TgZ(0,"div"),t._uU(1,"\u0421\u043d\u0438\u043c\u043a\u0430\u0442\u0430 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0435 \u0442\u0438\u043f img \u0438\u043b\u0438 png."),t.qZA())}function L(n,u){if(1&n&&(t.TgZ(0,"div",21),t.YNc(1,Y,2,0,"div",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.f.adImage.errors.requiredFileType)}}const p=function(n){return{"input-error":n}};let v=(()=>{class n{constructor(e){this.formBuilder=e,this.dataCollected=new t.vpe,this.form=new r.cw({category:new r.NI(""),description:new r.NI(""),contactName:new r.NI(""),contactPhone:new r.NI(""),contactEmail:new r.NI(""),adImage:new r.NI("")})}ngOnInit(){this.form=this.formBuilder.group({category:[this.currentAd.category,[r.kI.required]],description:[this.currentAd.description,[r.kI.minLength(10),r.kI.maxLength(500)]],contactName:[this.currentAd.contactName,[r.kI.required]],contactPhone:[this.currentAd.contactPhone],contactEmail:[this.currentAd.contactEmail,[r.kI.email]],adImage:[null,[function(n){const u=n.value;if(u){const e=u.split(".")[1].trim().toLowerCase();return"png"!==e&&"jpg"!==e?(n.setErrors({requiredFileType:!0}),{requiredFileType:!0}):null}return null}]]},{validators:[T.checkPhoneNumber("contactPhone")]})}get f(){return this.form.controls}onFileSelect(e){const o=e.target;console.log(o);let i=o.files;i.length>0&&(this.file=i[0])}onSubmitButtonPressed(){const e=this.form.value,o=new FormData,i=this.currentUser.id;o.append("category",e.category),o.append("description",e.description),o.append("contactPhone",e.contactPhone),o.append("contactEmail",e.contactEmail),o.append("contactName",e.contactName),o.append("adImage",this.file),o.append("owner",i),this.dataCollected.emit(o)}checkValidity(){console.log(this.form.invalid)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ad-form"]],inputs:{currentAd:"currentAd",currentUser:"currentUser",viewMode:"viewMode"},outputs:{dataCollected:"dataCollected"},decls:40,vars:25,consts:[[1,"ad-form",3,"formGroup","ngSubmit"],[1,"heading"],[4,"ngIf"],["for","category"],["formControlName","category",3,"ngClass"],["selected","","value",""],["value","\u0422\u044a\u0440\u0441\u044f"],["value","\u041f\u0440\u043e\u0434\u0430\u0432\u0430\u043c"],["value","\u041f\u043e\u0434\u0430\u0440\u044f\u0432\u0430\u043c"],["class","error",4,"ngIf"],["for","description"],["formControlName","description","rows","5","cols","10",3,"ngClass"],["for","contactName"],["type","text","formControlName","contactName","placeholder","\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432",3,"ngClass"],["for","email"],["type","email","formControlName","contactEmail","placeholder","ivan@abv.bg",3,"ngClass"],["for","contactPhone"],["type","text","formControlName","contactPhone","placeholder","0888888888",3,"ngClass"],["for","adImage"],["type","file","formControlName","adImage",3,"change"],[1,"ad-btn",3,"disabled"],[1,"error"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmitButtonPressed()}),t.TgZ(1,"div",1),t.YNc(2,F,2,0,"h2",2),t.YNc(3,w,2,0,"h2",2),t.qZA(),t.TgZ(4,"label",3),t._uU(5,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f*:"),t.qZA(),t.TgZ(6,"select",4),t._uU(7," > "),t.TgZ(8,"option",5),t._uU(9,"\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043e\u0442:"),t.qZA(),t.TgZ(10,"option",6),t._uU(11,"\u0422\u044a\u0440\u0441\u044f"),t.qZA(),t.TgZ(12,"option",7),t._uU(13,"\u041f\u0440\u043e\u0434\u0430\u0432\u0430\u043c"),t.qZA(),t.TgZ(14,"option",8),t._uU(15,"\u041f\u043e\u0434\u0430\u0440\u044f\u0432\u0430\u043c"),t.qZA()(),t.YNc(16,I,2,1,"div",9),t.TgZ(17,"label",10),t._uU(18,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435*:"),t.qZA(),t.TgZ(19,"textarea",11),t._uU(20,"        >"),t.qZA(),t.YNc(21,N,2,1,"div",9),t.TgZ(22,"label",12),t._uU(23,"\u041b\u0438\u0446\u0435 \u0437\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442*:"),t.qZA(),t._UZ(24,"input",13),t.YNc(25,U,2,1,"div",9),t.TgZ(26,"label",14),t._uU(27,"E-mail:"),t.qZA(),t._UZ(28,"input",15),t.YNc(29,D,2,1,"div",9),t.TgZ(30,"label",16),t._uU(31,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0437\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442*:"),t.qZA(),t._UZ(32,"input",17),t.YNc(33,S,2,1,"div",9),t.TgZ(34,"label",18),t._uU(35,"\u0414\u043e\u0431\u0430\u0432\u0435\u0442\u0435 \u0441\u043d\u0438\u043c\u043a\u0430 \u043f\u043e \u0436\u0435\u043b\u0430\u043d\u0438\u0435:"),t.qZA(),t.TgZ(36,"input",19),t.NdJ("change",function(a){return o.onFileSelect(a)}),t.qZA(),t.YNc(37,L,2,1,"div",9),t.TgZ(38,"button",20),t._uU(39," \u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0435 "),t.qZA()()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("ngIf","new"===o.viewMode),t.xp6(1),t.Q6J("ngIf","edit"===o.viewMode),t.xp6(3),t.Q6J("ngClass",t.VKq(15,p,o.f.category.touched&&o.f.category.invalid)),t.xp6(10),t.Q6J("ngIf",o.f.category.touched&&o.f.category.errors),t.xp6(3),t.Q6J("ngClass",t.VKq(17,p,o.f.description.touched&&o.f.description.invalid)),t.xp6(2),t.Q6J("ngIf",o.f.description.touched&&o.f.description.errors),t.xp6(3),t.Q6J("ngClass",t.VKq(19,p,o.f.contactName.touched&&o.f.contactName.invalid)),t.xp6(1),t.Q6J("ngIf",o.f.contactName.touched&&o.f.contactName.errors),t.xp6(3),t.Q6J("ngClass",t.VKq(21,p,o.f.contactEmail.touched&&o.f.contactEmail.invalid)),t.xp6(1),t.Q6J("ngIf",o.f.contactEmail.touched&&o.f.contactEmail.errors),t.xp6(3),t.Q6J("ngClass",t.VKq(23,p,o.f.contactPhone.touched&&o.f.contactPhone.invalid)),t.xp6(1),t.Q6J("ngIf",o.f.contactPhone.touched&&o.f.contactPhone.errors),t.xp6(4),t.Q6J("ngIf",o.f.adImage.touched&&o.f.adImage.errors),t.xp6(1),t.Q6J("disabled",o.form.invalid))},directives:[r._Y,r.JL,r.sg,s.O5,r.EJ,r.JJ,r.u,s.mk,r.YN,r.Kr,r.Fj],styles:['.ad-form[_ngcontent-%COMP%]{padding:2em;border:none;border-radius:.4em;box-shadow:3px 5px 9px -4px #07004d}.ad-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:inline-block;font-weight:700;position:relative}.ad-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{position:absolute;content:"";top:100%;left:0;background-color:var(--color-link-default);width:100%;height:.2em}.ad-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:none}.ad-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ad-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .ad-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:none;border-radius:.4em;background-color:#07004d1a;padding:.2em;resize:none}.ad-btn[_ngcontent-%COMP%]{background-color:var(--color-link-default);width:100%;padding:1em 7em;color:#fff;border:none;border-radius:.4em;font-size:1.2em;margin:2em auto}.ad-btn[_ngcontent-%COMP%]:not([disabled]):hover{cursor:pointer;opacity:.8}.ad-btn[_ngcontent-%COMP%]:disabled{background-color:gray}.text-center[_ngcontent-%COMP%]{text-align:center;font-size:.8em}.text-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-link-default)}']}),n})();function Q(n,u){if(1&n&&(t.TgZ(0,"div",4)(1,"p"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.errorMessage)}}function B(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"ad-form",5),t.NdJ("dataCollected",function(i){return t.CHM(e),t.oxw().onSubmit(i)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("currentAd",e.currentAd)("currentUser",e.currentUser)}}let z=(()=>{class n{constructor(e,o,i,a){this.adService=e,this.activatedRoute=o,this.router=i,this.tokenService=a,this.isSuccessful=!1,this.isSubmitted=!1,this.errorMessage="",this.viewMode="edit"}ngOnInit(){(0,h.a)([this.activatedRoute.params.pipe((0,A.z)(e=>this.adService.getAdById(e.adId))),this.tokenService.currentUser$]).subscribe(([e,o])=>{o&&(this.currentUser=o,this.currentAd=e)})}onSubmit(e){this.adService.updateAd(this.currentAd._id,e).subscribe({next:o=>{this.isSubmitted=!0,console.log(o),400===o.status&&(this.isSuccessful=!1,this.errorMessage=o.error.message,setTimeout(()=>this.hideAlert(),2e3)),this.isSuccessful=!0,this.router.navigate(["/adlist"])},error:o=>{this.errorMessage=o.error.message,this.isSubmitted=!0,this.isSuccessful=!1,setTimeout(()=>this.hideAlert(),3e3)}})}hideAlert(){this.isSubmitted=!1,this.isSuccessful=!1,this.errorMessage=""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.F),t.Y36(d.gz),t.Y36(d.F0),t.Y36(m.i))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ad-edit"]],decls:4,vars:2,consts:[["id","ad-form-section"],["class","server-error",4,"ngIf"],[1,"ad-form-container"],[3,"currentAd","currentUser","dataCollected",4,"ngIf"],[1,"server-error"],[3,"currentAd","currentUser","dataCollected"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0),t.YNc(1,Q,3,1,"div",1),t.TgZ(2,"div",2),t.YNc(3,B,1,2,"ad-form",3),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.isSubmitted&&!o.isSuccessful),t.xp6(2),t.Q6J("ngIf",o.currentAd))},directives:[s.O5,v],styles:[""]}),n})();var l=c(1777),R=c(831);function j(n,u){1&n&&(t.TgZ(0,"p"),t._uU(1,"\u041c\u043e\u0438\u0442\u0435 \u043e\u0431\u044f\u0432\u0438"),t.qZA())}function $(n,u){1&n&&(t.TgZ(0,"p"),t._uU(1,"\u0412\u0441\u0438\u0447\u043a\u0438 \u043e\u0431\u044f\u0432\u0438"),t.qZA())}function H(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",5)(1,"button",6)(2,"a",7),t._uU(3," \u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u0439 \u043d\u043e\u0432\u0430 \u043e\u0431\u044f\u0432\u0430 "),t.qZA()(),t.TgZ(4,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw().showMyAds()}),t.YNc(5,j,2,0,"p",9),t.YNc(6,$,2,0,"p",9),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",!e.userId),t.xp6(1),t.Q6J("ngIf",e.userId)}}function V(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"select",11),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw().category=i}),t.TgZ(2,"option",12),t._uU(3,"\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:"),t.qZA(),t.TgZ(4,"option",13),t._uU(5,"\u0422\u044a\u0440\u0441\u044f"),t.qZA(),t.TgZ(6,"option",14),t._uU(7,"\u041f\u043e\u0434\u0430\u0440\u044f\u0432\u0430\u043c"),t.qZA(),t.TgZ(8,"option",15),t._uU(9,"\u041f\u0440\u043e\u0434\u0430\u0432\u0430\u043c"),t.qZA()(),t.TgZ(10,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().searchCategory()}),t.TgZ(11,"p"),t._uU(12," \u0424\u0438\u043b\u0442\u044a\u0440 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.category)}}function X(n,u){1&n&&t._UZ(0,"ad-item",21),2&n&&t.Q6J("ad",u.$implicit)}function G(n,u){if(1&n&&(t.TgZ(0,"div",19),t.YNc(1,X,1,1,"ad-item",20),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("@adItemAnimation",void 0),t.xp6(1),t.Q6J("ngForOf",e.adList)}}function K(n,u){if(1&n&&(t.TgZ(0,"div",17)(1,"h1"),t._uU(2,"\u041e\u0431\u044f\u0432\u0438 \u0437\u0430 \u0434\u043e\u043c\u0430\u0448\u043d\u0438 \u043b\u044e\u0431\u0438\u043c\u0446\u0438"),t.qZA(),t.YNc(3,G,2,2,"div",18),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",e.adList.length>0)}}function W(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"li",25),t.NdJ("click",function(i){return t.CHM(e),t.oxw(2).gotoPage(i)}),t._uU(1),t.qZA()}if(2&n){const e=u.$implicit,o=t.oxw(2);t.ekj("highlighted",e===o.page-1),t.xp6(1),t.hij(" ",e+1," ")}}function tt(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",22)(1,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().gotoPrev()}),t._uU(2,"\u041f\u0440\u0435\u0434\u0438\u0448\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),t.qZA(),t.TgZ(3,"ul"),t.YNc(4,W,2,3,"li",24),t.qZA(),t.TgZ(5,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().gotoNext()}),t._uU(6,"\u0421\u043b\u0435\u0434\u0432\u0430\u0449\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("disabled",1===e.page),t.xp6(3),t.Q6J("ngForOf",e.totPages),t.xp6(1),t.Q6J("disabled",e.page>=e.totPages.length)}}let et=(()=>{class n{constructor(e,o,i){this.adService=e,this.router=o,this.tokenStorageService=i,this.isLoggedIn$=this.tokenStorageService.isLoggedIn$,this.category="",this.page=1,this.count=0,this.totPages=[0],this.pageSize=6,this.userId=""}ngOnInit(){this.retrievePaginatedAds()}gotoNew(){this.router.navigate(["/adlist/new"])}getRequestParams(e,o,i,a){let g={};return e&&(g.category=e),o&&(g.page=o-1),i&&(g.size=i),a&&(g.owner=a),g}retrievePaginatedAds(){const e=this.getRequestParams(this.category,this.page,this.pageSize,this.userId);this.adService.getAllAds(e).subscribe({next:o=>{const{Ads:i,totalItems:a,totalPages:g}=o;this.adList=i,this.count=a,this.totPages=Array.from(Array(g).keys())},error:o=>{console.log(o)}})}gotoPage(e){this.page=Number(e.target.innerText),this.retrievePaginatedAds()}gotoPrev(){this.page-=1,this.retrievePaginatedAds()}gotoNext(){this.page+=1,this.retrievePaginatedAds()}removeAllAds(){this.adService.deleteAll().subscribe({next:e=>{console.log(e),this.retrievePaginatedAds()},error:e=>console.error(e)})}searchCategory(){console.log(this.category),this.page=1,this.retrievePaginatedAds()}showMyAds(){const e=this.tokenStorageService.getUser();this.userId=this.userId?"":e.id,this.retrievePaginatedAds()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.F),t.Y36(d.F0),t.Y36(m.i))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ad-list"]],decls:6,vars:6,consts:[[1,"ads-dashboard"],["class","add-new",4,"ngIf"],["class","search-group",4,"ngIf"],["class","ad-list",4,"ngIf"],["class","pagination",4,"ngIf"],[1,"add-new"],[1,"add-new-ad"],["routerLink","/adlist/new"],[1,"my-ads-btn",3,"click"],[4,"ngIf"],[1,"search-group"],[3,"ngModel","ngModelChange"],["selected","","value",""],["value","\u0422\u044a\u0440\u0441\u044f"],["value","\u041f\u043e\u0434\u0430\u0440\u044f\u0432\u0430\u043c"],["value","\u041f\u0440\u043e\u0434\u0430\u0432\u0430\u043c"],["type","button",1,"search-btn",3,"click"],[1,"ad-list"],["class","ad-list-items",4,"ngIf"],[1,"ad-list-items"],["class","ad-item",3,"ad",4,"ngFor","ngForOf"],[1,"ad-item",3,"ad"],[1,"pagination"],[3,"disabled","click"],[3,"highlighted","click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,H,7,2,"div",1),t.ALo(2,"async"),t.YNc(3,V,13,1,"div",2),t.YNc(4,K,4,1,"div",3),t.YNc(5,tt,7,3,"div",4),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,4,o.isLoggedIn$)),t.xp6(2),t.Q6J("ngIf",o.adList&&o.adList.length>0),t.xp6(1),t.Q6J("ngIf",o.adList&&o.adList.length>0),t.xp6(1),t.Q6J("ngIf",o.adList&&o.adList.length>0))},directives:[s.O5,d.yS,r.EJ,r.JJ,r.On,r.YN,r.Kr,s.sg,R.F],pipes:[s.Ov],styles:['.ads-dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.search-group[_ngcontent-%COMP%]{display:flex;margin:3em 0 2em;justify-content:center;align-items:center}.search-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:300px;height:50px;margin:1em;padding:.5em 1em}.search-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;height:50px;border-radius:var(--border-radius);background-color:var(--color-link-default);font-size:1em;color:#fff;padding:0 5em}.search-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--color-link-hover)}.search-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0}.add-new[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around}.add-new[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;color:#fff;font-size:2em;margin:5em 2em;text-align:center}.add-new[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#040447;color:#fff;border:none;border-radius:var(--border-radius);font-size:1em;margin-top:5em;padding:1em}.add-new[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#29295c}.add-new[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2em;padding:0 2em}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2em}.ad-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:block;max-width:800px;margin:0 auto;position:relative;text-align:center}.ad-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after{position:absolute;content:"";top:100%;left:0;width:100%;height:.15em;background-color:var(--color-link-default)}.ad-list-items[_ngcontent-%COMP%]{width:80vw;display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));grid-gap:1em;gap:1em;align-items:center}.pagination[_ngcontent-%COMP%]{margin:1em auto;display:flex;align-items:center;justify-content:center}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1em;border:none;padding:1em;background-color:#fff}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}.pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-decoration:none;list-style-type:none;margin:0 .2em;padding:1em}.pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.highlighted[_ngcontent-%COMP%]{background:var(--color-link-default)}'],data:{animation:[(0,l.X$)("adItemAnimation",[(0,l.eR)(":enter",[(0,l.IO)(".ad-item",[(0,l.oB)({opacity:0,transform:"translateY(-100px)"}),(0,l.EY)(300,[(0,l.jt)("1000ms cubic-bezier(0.35, 0, 0.25, 1)",(0,l.oB)({opacity:1,transform:"none"}))])])])])]}}),n})();function nt(n,u){if(1&n&&(t.TgZ(0,"div",4)(1,"p"),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.errorMessage)}}let ot=(()=>{class n{constructor(e,o,i){this.adService=e,this.router=o,this.tokenService=i,this.isSuccessful=!1,this.isSubmitted=!1,this.errorMessage="",this.viewMode="new",this.currentAd={_id:"",category:"",description:"",contactName:"",contactPhone:"",contactEmail:"",owner:"",adImage:"",createdAt:new Date,updatedAt:new Date}}ngOnInit(){this.tokenService.currentUser$.subscribe({next:e=>{e&&(this.currentUser=e)}})}onSubmit(e){this.adService.createAd(e).subscribe({next:o=>{this.isSubmitted=!0,console.log(o),400===o.status&&(this.isSuccessful=!1,this.errorMessage=o.error.message,setTimeout(()=>this.hideAlert(),2e3)),this.isSuccessful=!0,this.router.navigate(["/adlist"])},error:o=>{this.errorMessage=o.error.message,this.isSubmitted=!0,this.isSuccessful=!1,setTimeout(()=>this.hideAlert(),3e3)}})}hideAlert(){this.isSubmitted=!1,this.isSuccessful=!1,this.errorMessage=""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.F),t.Y36(d.F0),t.Y36(m.i))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ad-new"]],decls:4,vars:3,consts:[["id","ad-form-section"],["class","server-error",4,"ngIf"],[1,"ad-form-container"],[3,"currentAd","currentUser","dataCollected"],[1,"server-error"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0),t.YNc(1,nt,3,1,"div",1),t.TgZ(2,"div",2)(3,"ad-form",3),t.NdJ("dataCollected",function(a){return o.onSubmit(a)}),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.isSubmitted&&!o.isSuccessful),t.xp6(2),t.Q6J("currentAd",o.currentAd)("currentUser",o.currentUser))},directives:[s.O5,v],styles:[".ad-form-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:5em}"]}),n})(),C=(()=>{class n{constructor(e,o){this.tokenService=e,this.router=o}canActivate(e){return!!this.tokenService.getUser()||(this.router.navigate(["/adlist"]),!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.i),t.LFG(d.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const it=d.Bz.forChild([{path:"",pathMatch:"full",component:et},{path:"new",canActivate:[C],component:ot},{path:"edit/:adId",canActivate:[C],component:z},{path:":adId",component:P}]);var rt=c(8221);let at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,it,r.UX,rt.I]]}),n})()}}]);