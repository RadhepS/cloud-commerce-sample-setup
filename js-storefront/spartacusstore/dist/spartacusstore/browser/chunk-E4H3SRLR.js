import{R as F,S as ye,a as te}from"./chunk-OB3MC34I.js";import{B as Je,Ba as ge,C as Ze,Ca as at,Db as st,Eb as _e,I as et,J as tt,K as it,N as q,V as de,Vb as ee,X as fe,Y as nt,Za as ve,b as Ke,c as O,d as se,dc as pt,e as pe,g as ce,ga as rt,j as U,l as me,o as le,p as ue,s as Ye,w as Xe,ya as xe,za as ot}from"./chunk-OOBMFFZN.js";import{$a as Me,Ab as R,Ac as K,Bb as f,Cb as ke,Da as y,Db as x,Ea as h,Ee as ze,Fe as Qe,I as re,If as J,Ja as W,Jb as je,Lb as H,Q as oe,Ra as a,Rb as m,Sa as g,Sb as u,Tb as I,Wb as A,We as X,Y as Te,Ye as We,Zf as $,_f as Z,a as V,ab as v,b as N,bb as $e,cb as s,f as Ie,ga as we,gb as Ve,h as Se,ha as Q,i as De,ib as p,jb as c,ka as Fe,kb as E,lb as P,mb as B,ob as C,oc as Le,pa as L,pc as w,qa as D,qb as _,qc as Re,rb as l,rc as Ae,rd as Ue,s as k,sa as M,sc as Ge,tf as He,ub as Ne,uc as G,v as j,vd as qe,w as be,xa as b,xb as Pe,ya as T,yb as Be,zb as Oe,zd as Y,zf as ae}from"./chunk-M6I5A6DT.js";var ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=L({token:e,factory:function(n){let o=null;return n?o=new(n||e):o=M(qe),o},providedIn:"root"});let i=e;return i})(),z=function(i){return i.FILE_NAME="fileName",i.DATE_TIME="dateTime",i}(z||{}),vt={cartImportExport:{file:{separator:","},import:{fileValidity:{maxSize:1,maxEntries:{[F.NEW_SAVED_CART]:100,[F.SAVED_CART]:100,[F.ACTIVE_CART]:10,[F.QUICK_ORDER]:10},allowedTypes:["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","text/csv",".csv"]},cartNameGeneration:{source:z.FILE_NAME}},export:{additionalColumns:[{name:{key:"name"},value:"product.name"},{name:{key:"price"},value:"totalPrice.formattedValue"}],messageEnabled:!0,downloadDelay:1e3,maxEntries:1e3,fileOptions:{fileName:"cart",extension:"csv",type:"text/csv"}}}},mt=(()=>{let e=class e{static forRoot(){return{ngModule:e,providers:[Y(vt)]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({});let i=e;return i})();function yt(i,e){if(i&1){let r=C();p(0,"button",1),_("click",function(){let n=y(r).ngIf,o=l();return h(o.exportCsv(n))}),f(1),m(2,"cxTranslate"),c()}i&2&&(a(),x(" ",u(2,1,"exportEntries.exportProductToCsv"),`
`))}var ht=["open"];function Et(i,e){if(i&1){let r=C();p(0,"button",1),_("click",function(){let n=y(r).ngIf,o=l();return h(o.openDialog(n))}),f(1),m(2,"cxTranslate"),c()}i&2&&(a(),x(" ",u(2,1,"importEntries.importProducts"),`
`))}function Ct(i,e){if(i&1){let r=C();p(0,"form",1),_("submit",function(){y(r);let n=l();return h(n.formSubmitSubject$.next(void 0))}),p(1,"p",2),f(2),m(3,"cxTranslate"),c(),p(4,"p"),f(5),m(6,"cxTranslate"),c(),p(7,"label")(8,"cx-file-upload",3),f(9),m(10,"cxTranslate"),c(),E(11,"cx-form-errors",4),c(),p(12,"div",5)(13,"button",6),_("click",function(){y(r);let n=l();return h(n.close("Close Import Products Dialog"))}),f(14),m(15,"cxTranslate"),c(),p(16,"button",7),f(17),m(18,"cxTranslate"),c()()()}if(i&2){let r,t=l();s("formGroup",t.form),a(2),x(" ",u(3,10,"importEntriesDialog.importProductsSubtitle")," "),a(3),x(" ",u(6,12,"importEntriesDialog.importProductFileDetails")," "),a(3),s("formControl",t.form.get("file"))("accept",t.allowedTypes),a(),x(" ",u(10,14,"importEntriesDialog.selectFile")," "),a(2),s("control",t.form.get("file")),a(3),x(" ",u(15,16,"importEntriesDialog.cancel")," "),a(2),s("disabled",((r=t.form.get("file"))==null?null:r.status)==="PENDING"),a(),x(" ",u(18,18,"importEntriesDialog.upload")," ")}}var he=i=>({count:i});function It(i,e){if(i&1&&(P(0),f(1),m(2,"cxTranslate"),B()),i&2){let r=l(2);a(),x(" ",I(2,1,"importEntriesDialog.summary.loaded",r.summary)," ")}}function St(i,e){if(i&1&&(P(0),f(1),m(2,"cxTranslate"),B()),i&2){let r=l(2);a(),x(" ",I(2,1,"importEntriesDialog.summary.loadedToCart",r.summary)," ")}}function Dt(i,e){if(i&1&&(p(0,"p",9),v(1,It,3,4,"ng-container",10)(2,St,3,4,"ng-container",11),c()),i&2){let r=l();s("ngSwitch",r.type),a(),s("ngSwitchCase",r.orderEntriesSource.QUICK_ORDER)}}function bt(i,e){if(i&1&&(p(0,"p"),f(1),m(2,"cxTranslate"),c()),i&2){let r=l();a(),x(" ",I(2,1,"importEntriesDialog.summary.loading",r.summary)," ")}}function Tt(i,e){if(i&1&&(p(0,"p",12),E(1,"cx-icon",13),f(2),m(3,"cxTranslate"),c()),i&2){let r=l();a(),s("type",r.iconTypes.SUCCESS),a(),x(" ",I(3,2,"importEntriesDialog.summary.successes",r.summary),`
`)}}function wt(i,e){if(i&1&&(p(0,"li"),f(1),m(2,"cxTranslate"),c()),i&2){let r=e.$implicit;a(),x(" ",I(2,1,"importEntriesDialog.summary.messages."+r.statusCode,r)," ")}}function Ft(i,e){if(i&1&&(p(0,"ul"),v(1,wt,3,4,"li",18),c()),i&2){let r=l(2);a(),s("ngForOf",r.summary.warningMessages)}}function Mt(i,e){if(i&1){let r=C();p(0,"div",14)(1,"p"),E(2,"cx-icon",15),f(3),m(4,"cxTranslate"),p(5,"button",16),_("click",function(){y(r);let n=l();return h(n.toggleWarningList())}),f(6),m(7,"cxTranslate"),c()(),v(8,Ft,2,1,"ul",17),c()}if(i&2){let r=l();a(2),s("type",r.iconTypes.ERROR),a(),x(" ",I(4,4,"importEntriesDialog.summary.warning",H(9,he,r.summary.warningMessages.length))," "),a(3),x(" ",u(7,7,r.warningDetailsOpened?"importEntriesDialog.summary.hide":"importEntriesDialog.summary.show")," "),a(2),s("ngIf",r.warningDetailsOpened)}}function $t(i,e){if(i&1&&(p(0,"li"),f(1),m(2,"cxTranslate"),c()),i&2){let r=e.$implicit;a(),x(" ",I(2,1,"importEntriesDialog.summary.messages."+r.statusCode,r)," ")}}function Vt(i,e){if(i&1&&(p(0,"ul"),v(1,$t,3,4,"li",18),c()),i&2){let r=l(2);a(),s("ngForOf",r.summary.errorMessages)}}function Nt(i,e){if(i&1){let r=C();p(0,"div",19)(1,"p"),E(2,"cx-icon",20),f(3),m(4,"cxTranslate"),p(5,"button",16),_("click",function(){y(r);let n=l();return h(n.toggleErrorList())}),f(6),m(7,"cxTranslate"),c()(),v(8,Vt,2,1,"ul",17),c()}if(i&2){let r=l();a(2),s("type",r.iconTypes.RESET),a(),x(" ",I(4,4,"importEntriesDialog.summary.error",H(9,he,r.summary.errorMessages.length))," "),a(3),x(" ",u(7,7,r.errorDetailsOpened?"importEntriesDialog.summary.hide":"importEntriesDialog.summary.show")," "),a(2),s("ngIf",r.errorDetailsOpened)}}function Pt(i,e){if(i&1){let r=C();p(0,"button",21),_("click",function(){y(r);let n=l();return h(n.close("Close Import Products Dialog"))}),f(1),m(2,"cxTranslate"),c()}i&2&&(a(),x(" ",u(2,1,"importEntriesDialog.close")," "))}function Bt(i,e){i&1&&(p(0,"p"),f(1),m(2,"cxTranslate"),c()),i&2&&(a(),ke(u(2,1,"importEntriesDialog.summary.info")))}function Ot(i,e){if(i&1){let r=C();p(0,"form",1),_("submit",function(){y(r);let n=l();return h(n.formSubmitSubject$.next(void 0))}),p(1,"p",2),f(2),m(3,"cxTranslate"),c(),p(4,"p"),f(5),m(6,"cxTranslate"),c(),p(7,"label")(8,"cx-file-upload",3),_("update",function(){y(r);let n=l();return h(n.updateCartName())}),f(9),m(10,"cxTranslate"),c(),E(11,"cx-form-errors",4),c(),p(12,"div",5)(13,"label")(14,"span",6),f(15),m(16,"cxTranslate"),c(),E(17,"input",7)(18,"cx-form-errors",8),c()(),p(19,"div",5)(20,"label")(21,"span",6),f(22),m(23,"cxTranslate"),p(24,"span",9),f(25),m(26,"cxTranslate"),c()(),E(27,"textarea",10)(28,"cx-form-errors",8),p(29,"p",11),f(30),m(31,"cxTranslate"),c()()(),p(32,"div",12)(33,"button",13),_("click",function(){y(r);let n=l();return h(n.close("Close Import Products Dialog"))}),f(34),m(35,"cxTranslate"),c(),p(36,"button",14),f(37),m(38,"cxTranslate"),c()()()}if(i&2){let r,t=l();s("formGroup",t.form),a(2),x(" ",u(3,18,"importEntriesDialog.importProductsNewSavedCartSubtitle")," "),a(3),x(" ",u(6,20,"importEntriesDialog.importProductFileDetails")," "),a(3),s("formControl",t.form.get("file"))("accept",t.allowedTypes),a(),x(" ",u(10,22,"importEntriesDialog.selectFile")," "),a(2),s("control",t.form.get("file")),a(4),x(" ",u(16,24,"importEntriesDialog.savedCartName")," "),a(2),s("maxLength",t.nameMaxLength),a(),s("control",t.form.get("name")),a(4),x(" ",u(23,26,"importEntriesDialog.savedCartDescription")," "),a(3),x(" (",u(26,28,"importEntriesDialog.optional"),") "),a(2),s("maxLength",t.descriptionMaxLength),a(),s("control",t.form.get("description")),a(2),x(" ",I(31,30,"importEntriesDialog.charactersLeft",H(37,he,t.descriptionsCharacterLeft))," "),a(4),x(" ",u(35,33,"importEntriesDialog.cancel")," "),a(2),s("disabled",((r=t.form.get("file"))==null?null:r.status)==="PENDING"),a(),x(" ",u(38,35,"importEntriesDialog.upload")," ")}}function kt(i,e){if(i&1){let r=C();p(0,"cx-import-to-new-saved-cart-form",12),_("submitEvent",function(n){y(r);let o=l(2).ngIf,d=l();return h(d.importProducts(o,n))}),c()}if(i&2){let r=l(2).ngIf;s("type",r.type)}}function jt(i,e){if(i&1){let r=C();p(0,"cx-import-entries-form",12),_("submitEvent",function(n){y(r);let o=l(2).ngIf,d=l();return h(d.importProducts(o,n))}),c()}if(i&2){let r=l(2).ngIf;s("type",r.type)}}function Lt(i,e){if(i&1&&(P(0),v(1,kt,1,1,"cx-import-to-new-saved-cart-form",11)(2,jt,1,1,"ng-template",null,1,A),B()),i&2){let r=R(3),t=l().ngIf,n=l();a(),s("ngIf",n.isNewCartForm(t))("ngIfElse",r)}}function Rt(i,e){if(i&1){let r=C();p(0,"cx-import-entries-summary",13),m(1,"async"),_("closeEvent",function(){y(r);let n=l(2);return h(n.close("Close Import Products Dialog"))}),c()}if(i&2){let r=l().ngIf,t=l();s("summary",u(1,2,t.summary$))("type",r.type)}}function At(i,e){if(i&1&&(P(0),v(1,Lt,4,2,"ng-container",10)(2,Rt,2,4,"ng-template",null,0,A),B()),i&2){let r=R(3),t=l();a(),s("ngIf",t.formState)("ngIfElse",r)}}function Gt(i,e){i&1&&E(0,"cx-import-order-entries")}function Ut(i,e){i&1&&E(0,"cx-export-order-entries")}var qt=(()=>{let e=class e{constructor(t,n,o,d){this.exportCsvFileService=t,this.importExportConfig=n,this.globalMessageService=o,this.translationService=d,this.columns=[{name:{key:"code"},value:"product.code"},{name:{key:"quantity"},value:"quantity"},...this.exportConfig?.additionalColumns??[]]}get exportConfig(){return this.importExportConfig.cartImportExport?.export}get separator(){return this.importExportConfig.cartImportExport?.file.separator}downloadCsv(t){this.getResolvedEntries(t).pipe(oe(1)).subscribe(n=>this.download(n))}resolveValue(t,n){return t.split(".").reduce((o,d)=>o?o[d]:"",n)?.toString()??""}resolveValues(t){return t.map(n=>this.columns.map(o=>this.resolveValue(o.value,n)))}getTranslatedColumnHeaders(){return be(this.columns.map(t=>this.translationService.translate(`exportEntries.columnNames.${t.name.key}`)))}displayExportMessage(){this.globalMessageService.add({key:"exportEntries.exportMessage"},ze.MSG_TYPE_INFO)}limitValues(t){return this.exportConfig?.maxEntries?t.splice(0,this.exportConfig?.maxEntries):t}getResolvedEntries(t){let n=this.limitValues(this.resolveValues(t));return this.getTranslatedColumnHeaders().pipe(j(o=>[o,...n]))}download(t){this.exportConfig?.messageEnabled&&this.displayExportMessage(),setTimeout(()=>{this.exportConfig!==void 0&&this.separator!==void 0&&this.exportCsvFileService.download(t,this.separator,this.exportConfig.fileOptions)},this.exportConfig?.downloadDelay??0)}};e.\u0275fac=function(n){return new(n||e)(M(st),M(ie),M(Qe),M(He))},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),lt=(()=>{let e=class e{constructor(t,n){this.exportEntriesService=t,this.contextService=n,this.styles="container",this.orderEntriesContext$=this.contextService.get(te),this.entries$=this.orderEntriesContext$.pipe(Q(o=>o?.getEntries?.()??k(void 0)))}exportCsv(t){this.exportEntriesService.downloadCsv(t)}};e.\u0275fac=function(n){return new(n||e)(g(qt),g(ee))},e.\u0275cmp=b({type:e,selectors:[["cx-export-order-entries"]],hostVars:2,hostBindings:function(n,o){n&2&&Ve(o.styles)},decls:3,vars:5,consts:[["class","btn btn-tertiary cx-export-btn",3,"click",4,"ngIf"],[1,"btn","btn-tertiary","cx-export-btn",3,"click"]],template:function(n,o){if(n&1&&(v(0,yt,3,3,"button",0),m(1,"async"),m(2,"async")),n&2){let d;s("ngIf",((d=u(1,1,o.entries$))==null?null:d.length)>0&&u(2,3,o.entries$))}},dependencies:[w,G,$],encapsulation:2,changeDetection:0});let i=e;return i})(),Ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({imports:[K,Ue,Z,ae,X.withConfig({cmsComponents:{ExportOrderEntriesComponent:{component:lt}}})]});let i=e;return i})(),ut=(()=>{let e=class e{constructor(t,n){this.launchDialogService=t,this.contextService=n,this.subscription=new Ie,this.orderEntriesContext$=this.contextService.get(te)}openDialog(t){this.launchDialogService.openDialogAndSubscribe("IMPORT_TO_CART",this.element,{orderEntriesContext:t})}};e.\u0275fac=function(n){return new(n||e)(g(q),g(ee))},e.\u0275cmp=b({type:e,selectors:[["cx-import-order-entries"]],viewQuery:function(n,o){if(n&1&&Pe(ht,5),n&2){let d;Be(d=Oe())&&(o.element=d.first)}},decls:2,vars:3,consts:[["class","btn btn-tertiary cx-import-btn",3,"click",4,"ngIf"],[1,"btn","btn-tertiary","cx-import-btn",3,"click"]],template:function(n,o){n&1&&(v(0,Et,3,3,"button",0),m(1,"async")),n&2&&s("ngIf",u(1,1,o.orderEntriesContext$))},dependencies:[w,G,$],encapsulation:2,changeDetection:0});let i=e;return i})(),dt=(()=>{let e=class e{constructor(){}csvDataToProduct(t){return t.map(n=>({productCode:n[0],quantity:Number(n[1])}))}isDataParsableToProducts(t){let n=new RegExp(/(?:\s|^)\d+(?=\s|$)/);return t.length>0&&t.every(o=>n.test(o[1]))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ft=(()=>{let e=class e{constructor(t,n,o,d,S){this.launchDialogService=t,this.importToCartService=n,this.importCsvService=o,this.filesFormValidators=d,this.importExportConfig=S,this.formSubmitSubject$=new Se,this.submitEvent=new W}ngOnInit(){this.form=this.buildForm(),this.formSubmitSubject$.pipe(Fe(()=>{this.form.invalid&&(this.form.markAllAsTouched(),pt.deepUpdateValueAndValidity(this.form))}),Q(()=>this.form.statusChanges.pipe(we(this.form.get("file")?.status),re(t=>t!=="PENDING"),oe(1))),re(t=>t==="VALID")).subscribe(()=>{this.save()})}close(t){this.launchDialogService.closeDialog(t)}save(){let t=this.form.get("file")?.value?.[0];this.separator!==void 0&&this.importCsvService.loadFile(t,this.separator).subscribe(n=>{this.submitEvent.emit({products:this.importToCartService.csvDataToProduct(n)})})}buildForm(){let t=new ce({});return t.setControl("file",new U("",[O.required,this.filesFormValidators.maxSize(this.maxSize)],[n=>this.separator!==void 0?this.importCsvService.validateFile(n.value[0],{separator:this.separator,isDataParsable:this.importToCartService.isDataParsableToProducts,maxEntries:this.maxEntries}):k(null)])),t}get allowedTypes(){return this.importExportConfig.cartImportExport?.import?.fileValidity?.allowedTypes}get maxSize(){return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxSize}get maxEntries(){return this.importExportConfig.cartImportExport?.import?.fileValidity?.maxEntries?.[this.type]}get separator(){return this.importExportConfig.cartImportExport?.file.separator}};e.\u0275fac=function(n){return new(n||e)(g(q),g(dt),g(_e),g(ve),g(ie))},e.\u0275cmp=b({type:e,selectors:[["cx-import-entries-form"]],inputs:{type:"type"},outputs:{submitEvent:"submitEvent"},decls:1,vars:1,consts:[[3,"formGroup","submit",4,"ngIf"],[3,"submit","formGroup"],[1,"cx-import-entries-subtitle"],[3,"formControl","accept"],["prefix","formErrors.file",3,"control"],[1,"cx-import-entries-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(n,o){n&1&&v(0,Ct,19,20,"form",0),n&2&&s("ngIf",o.form)},dependencies:[w,me,se,pe,le,ue,xe,ge,$],encapsulation:2,changeDetection:0});let i=e;return i})(),zt=(()=>{let e=class e{constructor(){this.iconTypes=de,this.orderEntriesSource=F,this.warningDetailsOpened=!1,this.errorDetailsOpened=!1,this.closeEvent=new W}close(t){this.closeEvent.emit(t)}toggleWarningList(){this.warningDetailsOpened=!this.warningDetailsOpened}toggleErrorList(){this.errorDetailsOpened=!this.errorDetailsOpened}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b({type:e,selectors:[["cx-import-entries-summary"]],inputs:{type:"type",summary:"summary"},outputs:{closeEvent:"closeEvent"},decls:11,vars:7,consts:[["loading",""],["info",""],[1,"cx-import-entries-summary-status"],[3,"ngSwitch",4,"ngIf","ngIfElse"],["class","cx-import-entries-summary-successes",4,"ngIf"],["class","cx-import-entries-summary-warnings",4,"ngIf"],["class","cx-import-entries-summary-errors",4,"ngIf"],[1,"cx-import-entries-summary-footer"],["class","btn btn-secondary","type","button",3,"click",4,"ngIf","ngIfElse"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"cx-import-entries-summary-successes"],[1,"success",3,"type"],[1,"cx-import-entries-summary-warnings"],[1,"warning",3,"type"],[1,"btn","btn-tertiary",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"cx-import-entries-summary-errors"],[1,"error",3,"type"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(n,o){if(n&1&&(p(0,"div",2),v(1,Dt,3,2,"p",3)(2,bt,3,4,"ng-template",null,0,A),c(),v(4,Tt,4,5,"p",4)(5,Mt,9,11,"div",5)(6,Nt,9,11,"div",6),p(7,"div",7),v(8,Pt,3,3,"button",8)(9,Bt,3,3,"ng-template",null,1,A),c()),n&2){let d=R(3),S=R(10);a(),s("ngIf",!o.summary.loading)("ngIfElse",d),a(3),s("ngIf",o.summary.successesCount>0),a(),s("ngIf",o.summary.warningMessages.length>0),a(),s("ngIf",o.summary.errorMessages.length>0),a(2),s("ngIf",!o.summary.loading)("ngIfElse",S)}},dependencies:[Le,w,Re,Ae,Ge,fe,$],encapsulation:2,changeDetection:0});let i=e;return i})(),Qt=(()=>{let e=class e extends ft{get descriptionsCharacterLeft(){return this.descriptionMaxLength-(this.form.get("description")?.value?.length||0)}constructor(t,n,o,d,S,ne){super(t,n,o,d,S),this.launchDialogService=t,this.importToCartService=n,this.importCsvService=o,this.filesFormValidators=d,this.importExportConfig=S,this.datePipe=ne,this.descriptionMaxLength=250,this.nameMaxLength=50,this.submitEvent=new W}save(){let t=this.form.get("file")?.value?.[0];this.separator!==void 0&&this.importCsvService.loadFile(t,this.separator).subscribe(n=>{this.submitEvent.emit({products:this.importToCartService.csvDataToProduct(n),savedCartInfo:{name:this.form.get("name")?.value,description:this.form.get("description")?.value}})})}buildForm(){let t=new ce({});return t.setControl("file",new U("",[O.required,this.filesFormValidators.maxSize(this.maxSize)],[n=>this.separator!==void 0?this.importCsvService.validateFile(n.value[0],{separator:this.separator,isDataParsable:this.importToCartService.isDataParsableToProducts,maxEntries:this.maxEntries}):k(null)])),t.setControl("name",new U("",[O.required,O.maxLength(this.nameMaxLength)])),t.setControl("description",new U("",[O.maxLength(this.descriptionMaxLength)])),t}updateCartName(){let t=this.form.get("name");if(t&&!t?.value&&this.cartNameGeneration?.source)switch(this.cartNameGeneration.source){case z.FILE_NAME:{this.setFieldValueByFileName(t);break}case z.DATE_TIME:{this.setFieldValueByDatetime(t);break}default:break}}setFieldValueByFileName(t){let n=this.form.get("file")?.value?.[0]?.name?.replace(/\.[^/.]+$/,"");t.setValue(n)}setFieldValueByDatetime(t){let n=new Date,o=this.cartNameGeneration?.fromDateOptions,d=o?.mask,S=o?.prefix??"",ne=o?.suffix??"",gt=d?this.datePipe.transform(n,d):this.datePipe.transform(n);t.setValue(`${S}${gt}${ne}`)}get cartNameGeneration(){return this.importExportConfig.cartImportExport?.import?.cartNameGeneration}};e.\u0275fac=function(n){return new(n||e)(g(q),g(dt),g(_e),g(ve),g(ie),g(J))},e.\u0275cmp=b({type:e,selectors:[["cx-import-to-new-saved-cart-form"]],outputs:{submitEvent:"submitEvent"},features:[je([J]),Me],decls:1,vars:1,consts:[[3,"formGroup","submit",4,"ngIf"],[3,"submit","formGroup"],[1,"cx-import-entries-subtitle"],[3,"update","formControl","accept"],["prefix","formErrors.file",3,"control"],[1,"cx-import-entries-row"],[1,"cx-import-entries-label","label-content"],["formControlName","name","required","","type","text",1,"form-control",3,"maxLength"],[3,"control"],[1,"cx-import-entries-label-optional"],["formControlName","description","rows","5",1,"form-control",3,"maxLength"],[1,"cx-import-entries-input-hint"],[1,"cx-import-entries-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(n,o){n&1&&v(0,Ot,39,39,"form",0),n&2&&s("ngIf",o.form)},dependencies:[w,me,Ke,se,pe,Xe,le,ue,Ye,xe,ge,$],encapsulation:2,changeDetection:0});let i=e;return i})(),Wt=(()=>{let e=class e{constructor(t){this.launchDialogService=t,this.iconTypes=de,this.focusConfig={trap:!0,block:!0,autofocus:"button",focusOnEscape:!0},this.formState=!0,this.summary$=new De({loading:!1,cartName:"",count:0,total:0,successesCount:0,warningMessages:[],errorMessages:[]}),this.context$=this.launchDialogService.data$.pipe(j(n=>n.orderEntriesContext)),We("a11yVisibleFocusOverflows")}isNewCartForm(t){return t.type===F.NEW_SAVED_CART}close(t){this.launchDialogService.closeDialog(t)}importProducts(t,{products:n,savedCartInfo:o}){this.formState=!1,this.summary$.next(N(V({},this.summary$.value),{loading:!0,total:n.length,cartName:o?.name})),t.addEntries(n,o).pipe(Te(()=>{this.summary$.next(N(V({},this.summary$.value),{loading:!1}))})).subscribe(d=>{this.populateSummary(d)})}populateSummary(t){t.statusCode===ye.SUCCESS?this.summary$.next(N(V({},this.summary$.value),{count:this.summary$.value.count+1,successesCount:this.summary$.value.successesCount+1})):t.statusCode===ye.LOW_STOCK?this.summary$.next(N(V({},this.summary$.value),{count:this.summary$.value.count+1,warningMessages:[...this.summary$.value.warningMessages,t]})):this.summary$.next(N(V({},this.summary$.value),{count:this.summary$.value.count+1,errorMessages:[...this.summary$.value.errorMessages,t]}))}};e.\u0275fac=function(n){return new(n||e)(g(q))},e.\u0275cmp=b({type:e,selectors:[["cx-import-entries-dialog"]],decls:15,vars:17,consts:[["importSummary",""],["reducedForm",""],["role","dialog",1,"cx-import-entries-dialog",3,"esc","cxFocus"],[1,"cx-import-entries-container"],[1,"modal-header","cx-import-entries-header"],[1,"cx-import-entries-title","modal-title"],["type","button",1,"cx-import-entries-close","close",3,"click","title","disabled"],["aria-hidden","true"],[3,"type"],[4,"ngIf"],[4,"ngIf","ngIfElse"],[3,"type","submitEvent",4,"ngIf","ngIfElse"],[3,"submitEvent","type"],[3,"closeEvent","summary","type"]],template:function(n,o){if(n&1&&(p(0,"div",2),_("esc",function(){return o.close("Escape clicked")}),p(1,"div",3)(2,"div",4),P(3),p(4,"div",5),f(5),m(6,"cxTranslate"),c(),B(),p(7,"button",6),m(8,"cxTranslate"),m(9,"async"),m(10,"cxTranslate"),_("click",function(){return o.close("Close Import Products Dialog")}),p(11,"span",7),E(12,"cx-icon",8),c()()(),v(13,At,4,2,"ng-container",9),m(14,"async"),c()()),n&2){let d;s("cxFocus",o.focusConfig),a(5),x(" ",u(6,7,"importEntriesDialog.importProducts")," "),a(2),Ne("title",u(8,9,"importEntriesDialog.close")),s("disabled",(d=u(9,11,o.summary$))==null?null:d.loading),$e("aria-label",u(10,13,"importEntriesDialog.close")),a(5),s("type",o.iconTypes.CLOSE),a(),s("ngIf",u(14,15,o.context$))}},dependencies:[w,fe,et,ft,zt,Qt,G,$],encapsulation:2,changeDetection:0});let i=e;return i})(),Ht={launch:{IMPORT_TO_CART:{inlineRoot:!0,component:Wt,dialogType:it.DIALOG}}},Ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({providers:[Y(Ht)],imports:[K,Je,Ze,ot,nt,tt,at,Z,X.withConfig({cmsComponents:{ImportOrderEntriesComponent:{component:ut}}})]});let i=e;return i})(),Kt=(()=>{let e=class e{constructor(t){this.contextService=t,this.context$=this.contextService.get(te),this.shouldDisplayImport$=this.context$.pipe(j(n=>!!n?.addEntries)),this.shouldDisplayExport$=this.context$.pipe(Q(n=>n?.getEntries?.()??k([])),j(n=>!!n?.length))}};e.\u0275fac=function(n){return new(n||e)(g(ee))},e.\u0275cmp=b({type:e,selectors:[["cx-import-export-order-entries"]],decls:4,vars:6,consts:[[4,"ngIf"]],template:function(n,o){n&1&&(v(0,Gt,1,0,"cx-import-order-entries",0),m(1,"async"),v(2,Ut,1,0,"cx-export-order-entries",0),m(3,"async")),n&2&&(s("ngIf",u(1,2,o.shouldDisplayImport$)),a(2),s("ngIf",u(3,4,o.shouldDisplayExport$)))},dependencies:[ut,lt,w,G],encapsulation:2,changeDetection:0});let i=e;return i})(),xt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({imports:[rt,X.withConfig({cmsComponents:{ImportExportOrderEntriesComponent:{component:Kt}}}),Z,ae,Ce,Ee,K]});let i=e;return i})();var Si=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=D({imports:[mt.forRoot(),Ee,Ce,xt]});let i=e;return i})();export{Si as ImportExportModule};
