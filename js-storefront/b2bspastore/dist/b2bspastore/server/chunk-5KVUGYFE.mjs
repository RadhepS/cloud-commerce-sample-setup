import './polyfills.server.mjs';
import{a as Ht}from"./chunk-F7T2KNEM.mjs";import{g as Se,i as Dt,j as Mt}from"./chunk-XOVLCZWR.mjs";import"./chunk-EZ4NF7L4.mjs";import{b as te,c as Vt}from"./chunk-OBP5V4RC.mjs";import{s as Le,v as Ut}from"./chunk-SZSNQ45Q.mjs";import{c as Bt}from"./chunk-D7WZB62B.mjs";import"./chunk-HQTFSEH2.mjs";import"./chunk-RYNWBM55.mjs";import"./chunk-FWN422PK.mjs";import{R as wt}from"./chunk-LMNX2PFK.mjs";import{$ as Ct,E as Ce,H as xt,Na as Et,Qa as Ft,Sa as It,Ta as Tt,Y as bt,_ as Ot,b as vt,d as yt,e as ft,f as Oe,i as ee,l as _t,p as ht,s as gt,ua as Lt,xa as St}from"./chunk-L3T7QQFM.mjs";import{$ as ot,A as _e,Ha as st,J as K,La as he,Nb as ge,Q as rt,R as nt,Ta as dt,Ua as ct,Ub as ut,V as F,Vb as mt,Xa as X,dc as xe,f as We,g as se,h as Q,i as Je,j as Ke,ka as lt,m as de,n as Xe,nb as pt,o as ce,oa as q,p as et,uc as be,vc as pe,xa as at,y as tt,z as it}from"./chunk-MYZEKFYU.mjs";import{$a as f,$b as H,$d as Ye,Aa as W,Bc as Qe,Cc as R,Ed as fe,Fa as B,Fb as Ge,Ga as I,Ia as Pe,Jc as a,Ka as C,Kc as s,L as S,La as je,Lc as qe,Md as N,Oc as ze,Pb as E,Qb as O,Ra as le,Rb as u,S as ye,Sa as T,Tb as J,Xb as d,Yb as c,Zb as h,_a as y,_b as M,bc as V,ca as Ne,dc as g,ec as b,fb as P,gb as $e,hc as w,mc as j,nc as $,oc as G,pc as U,q as Z,qc as m,rc as D,sc as _,ta as Ae,wb as o,x,xa as Y,xb as k,y as A,yd as Ze,zd as ae}from"./chunk-IDQ3VQP7.mjs";import{a as Re,b as ke}from"./chunk-GHFNAT2I.mjs";var ie=class{},Nt=(()=>{let e=class e{constructor(t){this.adapter=t}getUnitOrderHistory(t,i,n,p,v){return this.adapter.loadUnitOrderHistory(t,i,n,p,v)}getUnitOrderDetail(t,i){return this.adapter.loadUnitOrderDetail(t,i)}};e.\u0275fac=function(i){return new(i||e)(C(ie))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),re=(()=>{let e=class e{constructor(t,i,n){this.userAccountFacade=t,this.routingService=i,this.globalMessageService=n}canActivate(){return this.userAccountFacade.get().pipe(S(t=>!!t&&Object.keys(t).length>0),x(t=>t.roles),x(t=>{let i=Array.isArray(t)&&(t.includes(nt.UNITORDERVIEWER)||t.includes(rt.ADMIN));return i||(this.routingService.go({cxRoute:"home"}),this.globalMessageService.add({key:"organization.notification.noSufficientPermissions"},dt.MSG_TYPE_WARNING)),i}))}};e.\u0275fac=function(i){return new(i||e)(C(Bt),C(q),C(ct))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),At="unit order",ne="[Unit Order] Unit Orders",oe="[Unit Order] Order Details",Pt="[Unit Order] Load Unit Orders",jt="[Unit Order] Load Unit Orders Fail",$t="[Unit Order] Load Unit Orders Success",Jt="[Unit Order] Clear Unit Orders",He="[Unit Order] Load Unit Order Details",Gt="[Unit Order] Load Unit Order Details Fail",Qt="[Unit Order] Load Unit Order Details Success",Kt="[Unit Order] Clear Unit Order Details",Fe=class extends F.LoaderLoadAction{constructor(e){super(ne),this.payload=e,this.type=Pt}},Ie=class extends F.LoaderFailAction{constructor(e){super(ne,e),this.payload=e,this.type=jt}},Te=class extends F.LoaderSuccessAction{constructor(e){super(ne),this.payload=e,this.type=$t}},ue=class extends F.LoaderResetAction{constructor(){super(ne),this.type=Jt}},Be=class extends F.LoaderLoadAction{constructor(e){super(oe),this.payload=e,this.type=He}},we=class extends F.LoaderFailAction{constructor(e){super(oe,e),this.payload=e,this.type=Gt}},Ue=class extends F.LoaderSuccessAction{constructor(e){super(oe),this.payload=e,this.type=Qt}},De=class extends F.LoaderResetAction{constructor(){super(oe),this.type=Kt}};var Xt=(()=>{let e=class e{constructor(t,i){this.actions$=t,this.orderConnector=i,this.logger=je(lt),this.loadUnitOrders$=de(()=>this.actions$.pipe(ce(Pt),x(n=>n.payload),Y(n=>this.orderConnector.getUnitOrderHistory(n.userId,n.pageSize,n.currentPage,n.filters,n.sort).pipe(x(p=>new Te(p)),ye(p=>Z(new Ie(he(p,this.logger)))))))),this.resetUserOrders$=de(()=>this.actions$.pipe(ce(at.LANGUAGE_CHANGE),x(()=>new ue))),this.loadOrderDetails$=de(()=>this.actions$.pipe(ce(He),x(n=>n.payload),Y(n=>this.orderConnector.getUnitOrderDetail(n.userId,n.orderCode).pipe(x(p=>new Ue(p)),ye(p=>Z(new we(he(p,this.logger))))))))}};e.\u0275fac=function(i){return new(i||e)(C(Xe),C(Nt))},e.\u0275prov=B({token:e,factory:e.\u0275fac});let r=e;return r})(),ei=[Xt],Ee={orders:[],pagination:{},sorts:[]},Rt={};function ti(r=Ee,e){switch(e.type){case $t:return e.payload?e.payload:Ee;case jt:return Ee}return r}function ii(r=Rt,e){switch(e.type){case Qt:return e.payload;case Gt:case He:return Rt}return r}function ri(){return{orders:F.loaderReducer(ne,ti),orderDetail:F.loaderReducer(oe,ii)}}var qt=new Pe("UnitOrderReducers"),ni={provide:qt,useFactory:ri},zt=Je(At),Ve=Q(zt,r=>r.orders),oi=Q(Ve,r=>F.loaderSuccessSelector(r)),ir=Q(Ve,r=>F.loaderValueSelector(r)),li=Q(zt,r=>r.orderDetail),ai=Q(li,r=>F.loaderValueSelector(r));var si=(()=>{let e=class e{constructor(t,i,n){this.store=t,this.userIdService=i,this.routingService=n}getOrderHistoryList(t){return this.store.pipe(se(Ve),W(i=>{i.loading||i.success||i.error||this.loadOrderList(t)}),x(i=>i.value))}getOrderHistoryListLoaded(){return this.store.pipe(se(oi))}loadOrderList(t,i,n,p){this.userIdService.takeUserId(!0).subscribe({next:v=>{this.store.dispatch(new Fe({userId:v,pageSize:t,currentPage:i,filters:n,sort:p}))},error:()=>{}})}clearOrderList(){this.store.dispatch(new ue)}getOrderDetails(){return this.store.pipe(se(ai))}loadOrderDetails(t){this.userIdService.takeUserId().subscribe(i=>{this.store.dispatch(new Be({userId:i,orderCode:t}))})}clearOrderDetails(){this.store.dispatch(new De)}};e.\u0275fac=function(i){return new(i||e)(C(We),C(ot),C(q))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),di=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({providers:[ni],imports:[Ke.forFeature(At,qt),et.forFeature(ei)]});let r=e;return r})(),Zt=(()=>{let e=class e{static forRoot(){return{ngModule:e,providers:[{provide:te,useExisting:si},Nt]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({imports:[di]});let r=e;return r})();var ci=["filterNav"],pi=["filterNavUnit"],ui=["filterNavBuyer"],mi=["buyerFilterMobileId"],vi=["unitFilterMobileId"];function yi(r,e){if(r&1&&(d(0,"span"),m(1),c()),r&2){let l=b(2);o(),_('"',l.buyerFilterMobileValue,'"')}}function fi(r,e){r&1&&(d(0,"span"),m(1),a(2,"cxTranslate"),c()),r&2&&(o(),D(s(2,1,"unitLevelOrderHistory.and")))}function _i(r,e){if(r&1&&(d(0,"span"),m(1),c()),r&2){let l=b(2);o(),_('"',l.unitFilterMobileValue,'"')}}function hi(r,e){if(r&1){let l=V();d(0,"div",42)(1,"div",43),m(2),a(3,"cxTranslate"),E(4,yi,2,1,"span",44)(5,fi,3,3,"span",44)(6,_i,2,1,"span",44),c(),d(7,"div",45)(8,"button",46),g("click",function(){y(l);let i=b();return f(i.clearAll())}),m(9),a(10,"cxTranslate"),c()()()}if(r&2){let l=b();o(2),_(" ",s(3,5,"unitLevelOrderHistory.yourFilters")," "),o(2),u("ngIf",l.buyerFilterMobileValue),o(),u("ngIf",l.buyerFilterMobileValue&&l.unitFilterMobileValue),o(),u("ngIf",l.unitFilterMobileValue),o(3),_(" ",s(10,7,"unitLevelOrderHistory.removeAppliedFilters")," ")}}var gi=r=>({orderHistory:r}),z=r=>({cxRoute:"unitLevelOrderDetail",params:r}),xi=()=>({cxRoute:"home"});function bi(r,e){if(r&1){let l=V();d(0,"div",16)(1,"cx-pagination",17),g("viewPageEvent",function(i){y(l);let n=b(4);return f(n.pageChange(i))}),c()()}if(r&2){let l=b(2).ngIf;o(),u("pagination",l==null?null:l.pagination)}}function Oi(r,e){if(r&1){let l=V();d(0,"tr",18),g("click",function(){let i=y(l).$implicit,n=b(4);return f(n.goToOrderDetail(i))}),d(1,"td",19)(2,"div",20),m(3),a(4,"cxTranslate"),c(),d(5,"a",21),a(6,"cxUrl"),m(7),c()(),d(8,"td",22)(9,"div",20),m(10),a(11,"cxTranslate"),c(),d(12,"a",21),a(13,"cxUrl"),m(14),a(15,"cxDate"),c()(),d(16,"td",23)(17,"div",20),m(18),a(19,"cxTranslate"),c(),d(20,"a",21),a(21,"cxUrl"),m(22),a(23,"cxTranslate"),c()(),d(24,"td",24)(25,"div",20),m(26),a(27,"cxTranslate"),c(),d(28,"a",21),a(29,"cxUrl"),m(30),d(31,"span",25),m(32),c()()(),d(33,"td",26)(34,"div",20),m(35),a(36,"cxTranslate"),c(),d(37,"a",21),a(38,"cxUrl"),m(39),c()(),d(40,"td",27)(41,"div",20),m(42),a(43,"cxTranslate"),c(),d(44,"a",21),a(45,"cxUrl"),m(46),c()()()}if(r&2){let l=e.$implicit;o(3),_(" ",s(4,19,"unitLevelOrderHistory.orderId")," "),o(2),u("routerLink",s(6,21,R(48,z,l))),o(2),_(" ",l==null?null:l.code,""),o(3),_(" ",s(11,23,"unitLevelOrderHistory.date")," "),o(2),u("routerLink",s(13,25,R(50,z,l))),o(2),_(" ",qe(15,27,l==null?null:l.placed,"longDate")," "),o(4),_(" ",s(19,30,"unitLevelOrderHistory.status")," "),o(2),u("routerLink",s(21,32,R(52,z,l))),o(2),_(" ",s(23,34,"orderDetails.statusDisplay_"+(l==null?null:l.statusDisplay)),""),o(4),_(" ",s(27,36,"unitLevelOrderHistory.buyer")," "),o(2),u("routerLink",s(29,38,R(54,z,l))),o(2),_(" ",l==null||l.orgCustomer==null?null:l.orgCustomer.name," "),o(2),D(l==null||l.orgCustomer==null?null:l.orgCustomer.email),o(3),_(" ",s(36,40,"unitLevelOrderHistory.unit")," "),o(2),u("routerLink",s(38,42,R(56,z,l))),o(2),_(" ",l==null||l.orgUnit==null?null:l.orgUnit.name,""),o(3),_(" ",s(43,44,"unitLevelOrderHistory.total")," "),o(2),u("routerLink",s(45,46,R(58,z,l))),o(2),_(" ",l==null||l.total==null?null:l.total.formattedValue,"")}}function Ci(r,e){if(r&1){let l=V();d(0,"div",16)(1,"cx-pagination",17),g("viewPageEvent",function(i){y(l);let n=b(4);return f(n.pageChange(i))}),c()()}if(r&2){let l=b(2).ngIf;o(),u("pagination",l==null?null:l.pagination)}}function Li(r,e){if(r&1){let l=V();M(0),d(1,"div",5)(2,"label",6)(3,"span"),m(4),a(5,"cxTranslate"),c(),d(6,"cx-sorting",7),a(7,"cxTranslate"),a(8,"async"),a(9,"cxTranslate"),g("sortListEvent",function(i){y(l);let n=b(3);return f(n.changeSortCode(i))}),c()(),d(10,"div",8),h(11,"cx-total",9),c(),E(12,bi,2,1,"div",10),c(),d(13,"table",11)(14,"thead",12)(15,"th",13),m(16),a(17,"cxTranslate"),c(),d(18,"th",13),m(19),a(20,"cxTranslate"),c(),d(21,"th",13),m(22),a(23,"cxTranslate"),c(),d(24,"th",13),m(25),a(26,"cxTranslate"),c(),d(27,"th",13),m(28),a(29,"cxTranslate"),c(),d(30,"th",13),m(31),a(32,"cxTranslate"),c()(),d(33,"tbody"),E(34,Oi,47,60,"tr",14),c()(),d(35,"div",15)(36,"label",6)(37,"span"),m(38),a(39,"cxTranslate"),c(),d(40,"cx-sorting",7),a(41,"cxTranslate"),a(42,"async"),a(43,"cxTranslate"),g("sortListEvent",function(i){y(l);let n=b(3);return f(n.changeSortCode(i))}),c()(),d(44,"div",8),h(45,"cx-total",9),c(),E(46,Ci,2,1,"div",10),c(),H()}if(r&2){let l,t,i=b().ngIf,n=b(2);o(4),_(" ",s(5,23,"unitLevelOrderHistory.sortBy")," "),o(2),w("placeholder",s(7,25,"unitLevelOrderHistory.sortBy")),u("sortOptions",i==null?null:i.sorts)("sortLabels",s(8,27,n.getSortLabels()))("selectedOption",i==null||i.pagination==null?null:i.pagination.sort)("ariaLabel",s(9,29,"unitLevelOrderHistory.sortOrders")),o(5),u("pagination",i==null?null:i.pagination),o(),u("ngIf",(l=i==null||i.pagination==null?null:i.pagination.totalPages)!==null&&l!==void 0?l:!1),o(4),_(" ",s(17,31,"unitLevelOrderHistory.orderId")," "),o(3),_(" ",s(20,33,"unitLevelOrderHistory.date")," "),o(3),_(" ",s(23,35,"unitLevelOrderHistory.status")," "),o(3),_(" ",s(26,37,"unitLevelOrderHistory.buyer")," "),o(3),_(" ",s(29,39,"unitLevelOrderHistory.unit")," "),o(3),_(" ",s(32,41,"unitLevelOrderHistory.total")," "),o(3),u("ngForOf",i==null?null:i.orders),o(4),_(" ",s(39,43,"unitLevelOrderHistory.sortBy")," "),o(2),w("placeholder",s(41,45,"unitLevelOrderHistory.sortBy")),u("sortOptions",i==null?null:i.sorts)("sortLabels",s(42,47,n.getSortLabels()))("selectedOption",i==null||i.pagination==null?null:i.pagination.sort)("ariaLabel",s(43,49,"unitLevelOrderHistory.sortOrders")),o(5),u("pagination",i==null?null:i.pagination),o(),u("ngIf",(t=i==null||i.pagination==null?null:i.pagination.totalPages)!==null&&t!==void 0?t:!1)}}function Si(r,e){r&1&&(d(0,"div",29)(1,"div")(2,"div"),m(3),a(4,"cxTranslate"),c(),d(5,"a",30),a(6,"cxUrl"),m(7),a(8,"cxTranslate"),c()()()),r&2&&(o(3),D(s(4,3,"unitLevelOrderHistory.noOrders")),o(2),u("routerLink",s(6,5,Qe(9,xi))),o(2),D(s(8,7,"unitLevelOrderHistory.startShopping")))}function Ei(r,e){if(r&1&&(E(0,Si,9,10,"div",28),a(1,"async")),r&2){let l=b(3);u("ngIf",s(1,1,l.isLoaded$))}}function Fi(r,e){if(r&1){let l=V();M(0),d(1,"div")(2,"cx-unit-level-order-history-filter",2),g("filterListEvent",function(i){y(l);let n=b(2);return f(n.filterChange(i))}),c(),d(3,"div",3),E(4,Li,47,51,"ng-container",4)(5,Ei,2,3,"ng-template",null,0,ze),c()(),H()}if(r&2){let l,t=e.ngIf,i=U(6);o(4),u("ngIf",(l=t.pagination==null?null:t.pagination.totalResults)!==null&&l!==void 0?l:!1)("ngIfElse",i)}}function Ii(r,e){if(r&1&&(M(0),E(1,Fi,7,2,"ng-container",1),H()),r&2){let l=e.ngIf;o(),u("ngIf",l.orderHistory)}}function Ti(r,e){if(r&1&&(M(0),h(1,"cx-card",4),a(2,"async"),H()),r&2){let l=b().ngIf,t=b();o(),u("content",s(2,1,t.getCostCenterCardContent(l.costCenter)))}}function Bi(r,e){if(r&1&&(M(0),h(1,"cx-card",4),a(2,"async"),H()),r&2){let l=b().ngIf,t=b();o(),u("content",s(2,1,t.getAddressCardContent(l.deliveryAddress)))}}function wi(r,e){if(r&1&&(M(0),h(1,"cx-card",4),a(2,"async"),H()),r&2){let l=b().ngIf,t=b();o(),u("content",s(2,1,t.getDeliveryModeCardContent(l.deliveryMode)))}}function Ui(r,e){if(r&1&&(M(0),d(1,"div",3),h(2,"cx-card",4),a(3,"async"),h(4,"cx-card",4),a(5,"async"),c(),H()),r&2){let l=b().ngIf,t=b();o(2),u("content",s(3,2,t.getPaymentInfoCardContent(l.paymentInfo))),o(2),u("content",s(5,4,t.getBillingAddressCardContent(l.paymentInfo==null?null:l.paymentInfo.billingAddress)))}}function Di(r,e){if(r&1&&(d(0,"div",1)(1,"div",2)(2,"div",3),h(3,"cx-card",4),a(4,"async"),h(5,"cx-card",4),a(6,"cxDate"),a(7,"async"),h(8,"cx-card",4),a(9,"async"),h(10,"cx-card",5),a(11,"async"),c(),d(12,"div",3),h(13,"cx-card",4),a(14,"async"),h(15,"cx-card",4),a(16,"async"),h(17,"cx-card",4),a(18,"async"),E(19,Ti,3,3,"ng-container",6),c(),d(20,"div",3),E(21,Bi,3,3,"ng-container",6)(22,wi,3,3,"ng-container",6),c(),E(23,Ui,6,6,"ng-container",6),c()()),r&2){let l=e.ngIf,t=b();o(3),u("content",s(4,11,t.getOrderCodeCardContent(l.code))),o(2),u("content",s(7,15,t.getOrderCurrentDateCardContent(s(6,13,l.created)))),o(3),u("content",s(9,17,t.getOrderStatusCardContent(l.statusDisplay))),o(2),u("content",s(11,19,t.getBuyerNameCardContent(l.orgCustomer))),o(3),u("content",s(14,21,t.getUnitNameCardContent(l.orgUnit==null?null:l.orgUnit.name))),o(2),u("content",s(16,23,t.getPurchaseOrderNumber(l.purchaseOrderNumber))),o(2),u("content",s(18,25,t.getMethodOfPaymentCardContent(l.paymentInfo))),o(2),u("ngIf",l.costCenter),o(2),u("ngIf",l.deliveryAddress),o(),u("ngIf",l.deliveryMode),o(),u("ngIf",l.paymentInfo)}}var Mi=(()=>{let e=class e{constructor(t){this.renderer=t,this.iconTypes=bt,this.filterForm=new Oe({buyerFilter:new ee,unitFilter:new ee}),this.filterFormMobile=new Oe({buyerFilterMobile:new ee,unitFilterMobile:new ee}),this.filterByBuyer="filterByBuyer",this.filterByUnit="filterByUnit",this.filterListEvent=new $e}searchUnitLevelOrders(){let t=this.filterForm.get("buyerFilter")?.value,i=this.filterForm.get("unitFilter")?.value;this.filterFormMobile.setValue({buyerFilterMobile:t,unitFilterMobile:i}),this.emitFilterEvent(t,i),this.buyerFilterMobileValue=t,this.unitFilterMobileValue=i}emitFilterEvent(t,i){let n=[];t?.length&&n.push("user:"+t),i?.length&&n.push("unit:"+i),n.unshift(n.length?":":""),this.encodedFilter=n.join(":"),this.filterListEvent.emit({currentPage:0,filters:this.encodedFilter})}clearAll(){let t=this.filterForm.get("buyerFilter")?.value,i=this.filterForm.get("unitFilter")?.value,n=this.buyerFilterMobileId?.nativeElement.value,p=this.unitFilterMobileId?.nativeElement.value;(t||i||n||p)&&(this.filterForm.reset(),this.filterFormMobile.reset(),this.searchUnitLevelOrders()),this.unitFilterMobileValue=null,this.buyerFilterMobileValue=null}launchMobileFilters(){this.renderer.setStyle(this.filterNav.nativeElement,"display","flex"),this.renderer.setStyle(this.filterNav.nativeElement,"width","100%"),this.renderer.setStyle(document.body,"overflow","hidden")}searchUnitLevelOrdersForMobile(){this.getFormValuesForMobileAndEmitFilterEvent(),this.closeFilterNav()}getFormValuesForMobileAndEmitFilterEvent(){let t=this.filterFormMobile.get("buyerFilterMobile")?.value;this.buyerFilterMobileValue=t;let i=this.filterFormMobile.get("unitFilterMobile")?.value;this.unitFilterMobileValue=i,this.filterForm.setValue({buyerFilter:t,unitFilter:i}),this.emitFilterEvent(t,i)}closeFilterNav(){this.renderer.setStyle(this.filterNav.nativeElement,"display","none"),this.renderer.setStyle(document.body,"overflow",""),this.renderer.setStyle(this.filterNavUnit.nativeElement,"display","none"),this.renderer.setStyle(this.filterNavBuyer.nativeElement,"display","none"),this.renderer.setStyle(this.filterNav.nativeElement,"width","0"),this.filterFormMobile.patchValue({buyerFilterMobile:this.buyerFilterMobileValue,unitFilterMobile:this.unitFilterMobileValue})}backFilterSubNav(){this.renderer.setStyle(this.filterNavUnit.nativeElement,"display","none"),this.renderer.setStyle(this.filterNavBuyer.nativeElement,"display","none"),this.renderer.setStyle(this.filterNav.nativeElement,"display","flex"),this.filterFormMobile.patchValue({buyerFilterMobile:this.buyerFilterMobileValue,unitFilterMobile:this.unitFilterMobileValue})}launchSubNav(t){this.renderer.setStyle(this.filterNav.nativeElement,"display","none"),t===this.filterByUnit?this.renderer.setStyle(this.filterNavUnit.nativeElement,"display","block"):t===this.filterByBuyer&&this.renderer.setStyle(this.filterNavBuyer.nativeElement,"display","block")}clearUnit(){this.filterForm.get("unitFilter")?.reset(),this.searchUnitLevelOrders()}clearBuyer(){this.filterForm.get("buyerFilter")?.reset(),this.searchUnitLevelOrders()}clearUnitMobile(){this.filterFormMobile.get("unitFilterMobile")?.reset(),this.renderer.setStyle(document.body,"overflow",""),this.unitFilterMobileValue=null,this.getFormValuesForMobileAndEmitFilterEvent()}clearBuyerMobile(){this.filterFormMobile.get("buyerFilterMobile")?.reset(),this.renderer.setStyle(document.body,"overflow",""),this.buyerFilterMobileValue=null,this.getFormValuesForMobileAndEmitFilterEvent()}searchBuyer(t){let i=t.value;(!i||i==="")&&this.clearBuyer()}searchUnit(t){let i=t.value;(!i||i==="")&&this.clearUnit()}};e.\u0275fac=function(i){return new(i||e)(k(Ge))},e.\u0275cmp=le({type:e,selectors:[["cx-unit-level-order-history-filter"]],viewQuery:function(i,n){if(i&1&&(j(ci,5,P),j(pi,5,P),j(ui,5,P),j(mi,5,P),j(vi,5,P)),i&2){let p;$(p=G())&&(n.filterNav=p.first),$(p=G())&&(n.filterNavUnit=p.first),$(p=G())&&(n.filterNavBuyer=p.first),$(p=G())&&(n.buyerFilterMobileId=p.first),$(p=G())&&(n.unitFilterMobileId=p.first)}},outputs:{filterListEvent:"filterListEvent"},decls:132,vars:138,consts:[["filterNav",""],["filterNavBuyer",""],["buyerFilterMobileId",""],["filterNavUnit",""],["unitFilterMobileId",""],["buyerFilterId",""],["unitFilterId",""],[1,"cx-filter"],[1,"cx-filter-list"],["id","closeFilterNavBtn","type","button",3,"click","title"],["aria-hidden","true",3,"type"],[1,"cx-filter-list","cx-filter-list-border",3,"click"],["type","button"],[3,"formGroup"],["id","cx-unit-level-order-history-filter-nav-sub-buyer",1,"cx-filter-nav"],[1,"cx-filter-nav-div"],[1,"cx-filter-back-button",3,"click"],["type","button",3,"click","title"],["formControlName","buyerFilterMobile",1,"form-control","buyer-filter-mobile",3,"input","keydown.enter","placeholder"],["id","clearBuyerMobileBtn",1,"reset","cx-unit-level-order-history-filter-reset-button",3,"mousedown","keydown.enter"],[3,"type"],["role","presentation",1,"search-icon"],[1,"search-icon-filter",3,"type"],[1,"cx-clear-btn-container"],["type","button",1,"cx-action-link","cx-clear-btn",3,"click"],["id","cx-unit-level-order-history-filter-nav-sub-unit",1,"cx-filter-nav"],["formControlName","unitFilterMobile",1,"form-control","unit-filter-mobile",3,"input","keydown.enter","placeholder"],["id","clearUnitMobileBtn",1,"reset","cx-unit-level-order-history-filter-reset-button",3,"mousedown","keydown.enter"],[3,"keydown.enter","formGroup"],[1,"cx-unit-level-order-history-filter-div-wrapper"],["role","search",1,"cx-unit-level-order-history-filter-label-wrapper"],[1,"cx-unit-level-order-history-filter-label"],["formControlName","buyerFilter",1,"form-control","cx-unit-level-order-history-filter-input",3,"input","placeholder"],["id","clearBuyerBtn",1,"reset","cx-unit-level-order-history-filter-reset-button",3,"mousedown","keydown.enter"],["formControlName","unitFilter",1,"form-control","cx-unit-level-order-history-filter-input",3,"input","placeholder"],["id","clearUnitBtn","type","button",1,"reset","cx-unit-level-order-history-filter-reset-button",3,"mousedown","keydown.enter"],[1,"cx-unit-level-order-history-filter-form-button-block"],["id","clearAllBtn","type","button",1,"cx-action-link","cx-clear-btn",3,"click"],["id","searchUnitLevelOrdersBtn","type","button",1,"btn","btn-primary","unit-level-order-history-search",3,"click"],[1,"cx-unit-level-order-history-filter-form-mobile"],["id","filterByBtn",1,"btn","btn-action","btn-block","dialog-trigger",3,"click"],["class","cx-unit-level-order-history-filters-show-and-remove",4,"ngIf"],[1,"cx-unit-level-order-history-filters-show-and-remove"],[1,"cx-selected-filters"],[4,"ngIf"],[1,"cx-clear-filter"],["id","removeAppliedFiltersBtn","type","button",1,"cx-action-link","cx-clear-btn",3,"click"]],template:function(i,n){if(i&1){let p=V();d(0,"div",7,0),a(2,"cxTranslate"),d(3,"div",8)(4,"span"),m(5),a(6,"cxTranslate"),c(),d(7,"button",9),a(8,"cxTranslate"),a(9,"cxTranslate"),g("click",function(){return y(p),f(n.closeFilterNav())}),h(10,"cx-icon",10),c()(),d(11,"div",11),g("click",function(){return y(p),f(n.launchSubNav(n.filterByBuyer))}),d(12,"span"),m(13),a(14,"cxTranslate"),c(),d(15,"button",12),a(16,"cxTranslate"),h(17,"cx-icon",10),c()(),d(18,"div",11),g("click",function(){return y(p),f(n.launchSubNav(n.filterByUnit))}),d(19,"span"),m(20),a(21,"cxTranslate"),c(),d(22,"button",12),a(23,"cxTranslate"),h(24,"cx-icon",10),c()()(),d(25,"form",13)(26,"div",14,1),a(28,"cxTranslate"),d(29,"div",15)(30,"div",8)(31,"div",16),g("click",function(){return y(p),f(n.backFilterSubNav())}),d(32,"button",12),h(33,"cx-icon",10),c(),d(34,"span"),m(35),a(36,"cxTranslate"),c()(),d(37,"button",17),a(38,"cxTranslate"),a(39,"cxTranslate"),g("click",function(){return y(p),f(n.closeFilterNav())}),h(40,"cx-icon",10),c()(),d(41,"label")(42,"input",18,2),a(44,"cxTranslate"),a(45,"cxTranslate"),g("input",function(){y(p);let L=U(43);return f(n.searchBuyer(L))})("keydown.enter",function(){return y(p),f(n.searchUnitLevelOrdersForMobile())}),c(),d(46,"button",19),a(47,"cxTranslate"),g("mousedown",function(){return y(p),f(n.clearBuyerMobile())})("keydown.enter",function(){return y(p),f(n.clearBuyerMobile())}),h(48,"cx-icon",20),c(),d(49,"div",21),h(50,"cx-icon",22),c()(),d(51,"div",23)(52,"button",24),g("click",function(){return y(p),f(n.clearBuyerMobile())}),m(53),a(54,"cxTranslate"),c()()()(),d(55,"div",25,3),a(57,"cxTranslate"),d(58,"div",15)(59,"div",8)(60,"div",16),g("click",function(){return y(p),f(n.backFilterSubNav())}),d(61,"button",12),h(62,"cx-icon",10),c(),d(63,"span"),m(64),a(65,"cxTranslate"),c()(),d(66,"button",17),a(67,"cxTranslate"),a(68,"cxTranslate"),g("click",function(){return y(p),f(n.closeFilterNav())}),h(69,"cx-icon",10),c()(),d(70,"label")(71,"input",26,4),a(73,"cxTranslate"),a(74,"cxTranslate"),g("input",function(){y(p);let L=U(72);return f(n.searchUnit(L))})("keydown.enter",function(){return y(p),f(n.searchUnitLevelOrdersForMobile())}),c(),d(75,"button",27),a(76,"cxTranslate"),g("mousedown",function(){return y(p),f(n.clearUnitMobile())})("keydown.enter",function(){return y(p),f(n.clearUnitMobile())}),h(77,"cx-icon",20),c(),d(78,"div",21),h(79,"cx-icon",22),c()(),d(80,"div",23)(81,"button",24),g("click",function(){return y(p),f(n.clearUnitMobile())}),m(82),a(83,"cxTranslate"),c()()()()(),d(84,"form",28),g("keydown.enter",function(){return y(p),f(n.searchUnitLevelOrders())}),d(85,"div")(86,"div",29)(87,"div")(88,"span"),m(89),a(90,"cxTranslate"),c(),d(91,"div",30),a(92,"cxTranslate"),d(93,"label",31)(94,"input",32,5),a(96,"cxTranslate"),a(97,"cxTranslate"),g("input",function(){y(p);let L=U(95);return f(n.searchBuyer(L))}),c(),d(98,"button",33),a(99,"cxTranslate"),g("mousedown",function(){return y(p),f(n.clearBuyer())})("keydown.enter",function(){return y(p),f(n.clearBuyer())}),h(100,"cx-icon",20),c(),d(101,"div",21),h(102,"cx-icon",22),c()()()(),d(103,"div")(104,"span"),m(105),a(106,"cxTranslate"),c(),d(107,"div",30),a(108,"cxTranslate"),d(109,"label",31)(110,"input",34,6),a(112,"cxTranslate"),a(113,"cxTranslate"),g("input",function(){y(p);let L=U(111);return f(n.searchUnit(L))}),c(),d(114,"button",35),a(115,"cxTranslate"),g("mousedown",function(){return y(p),f(n.clearUnit())})("keydown.enter",function(){return y(p),f(n.clearUnit())}),h(116,"cx-icon",20),c(),d(117,"div",21),h(118,"cx-icon",22),c()()()()(),d(119,"div",36)(120,"button",37),g("click",function(){return y(p),f(n.clearAll())}),m(121),a(122,"cxTranslate"),c(),d(123,"button",38),g("click",function(){return y(p),f(n.searchUnitLevelOrders())}),m(124),a(125,"cxTranslate"),c()()()(),d(126,"div",39)(127,"button",40),g("click",function(){return y(p),f(n.launchMobileFilters())}),h(128,"cx-icon",20),m(129),a(130,"cxTranslate"),c(),E(131,hi,11,9,"div",41),c()}if(i&2){let p=U(43),v=U(72),L=U(95),ve=U(111);O("aria-label",s(2,64,"unitLevelOrderHistory.filterBy")),o(5),D(s(6,66,"unitLevelOrderHistory.filterBy")),o(2),w("title",s(8,68,"common.close")),O("aria-label",s(9,70,"common.close")),o(3),u("type",n.iconTypes.CLOSE),o(3),D(s(14,72,"unitLevelOrderHistory.buyer")),o(2),O("aria-label",s(16,74,"unitLevelOrderHistory.filterByBuyerLabel")),o(2),u("type",n.iconTypes.CARET_RIGHT),o(3),D(s(21,76,"unitLevelOrderHistory.unit")),o(2),O("aria-label",s(23,78,"unitLevelOrderHistory.filterByUnitLabel")),o(2),u("type",n.iconTypes.CARET_RIGHT),o(),u("formGroup",n.filterFormMobile),o(),O("aria-label",s(28,80,"unitLevelOrderHistory.filterBy")),o(7),u("type",n.iconTypes.CARET_LEFT),o(2),D(s(36,82,"unitLevelOrderHistory.filterByBuyer")),o(2),w("title",s(38,84,"common.close")),O("aria-label",s(39,86,"common.close")),o(3),u("type",n.iconTypes.CLOSE),o(),J("dirty",!!p.value),o(),w("placeholder",s(44,88,"unitLevelOrderHistory.filterByBuyerPlaceholder")),O("aria-label",s(45,90,"unitLevelOrderHistory.filterByBuyerPlaceholder")),o(4),O("aria-label",s(47,92,"common.reset")),o(2),u("type",n.iconTypes.RESET),o(2),u("type",n.iconTypes.SEARCH),o(3),_(" ",s(54,94,"unitLevelOrderHistory.clearAll")," "),o(2),O("aria-label",s(57,96,"unitLevelOrderHistory.filterBy")),o(7),u("type",n.iconTypes.CARET_LEFT),o(2),D(s(65,98,"unitLevelOrderHistory.filterByUnit")),o(2),w("title",s(67,100,"common.close")),O("aria-label",s(68,102,"common.close")),o(3),u("type",n.iconTypes.CLOSE),o(),J("dirty",!!v.value),o(),w("placeholder",s(73,104,"unitLevelOrderHistory.filterByUnitPlaceholder")),O("aria-label",s(74,106,"unitLevelOrderHistory.filterByUnitPlaceholder")),o(4),O("aria-label",s(76,108,"common.reset")),o(2),u("type",n.iconTypes.RESET),o(2),u("type",n.iconTypes.SEARCH),o(3),_(" ",s(83,110,"unitLevelOrderHistory.clearAll")," "),o(2),u("formGroup",n.filterForm),o(5),_(" ",s(90,112,"unitLevelOrderHistory.buyer")," "),o(2),O("aria-label",s(92,114,"unitLevelOrderHistory.filterByBuyerAriaLabel")),o(2),J("dirty",!!L.value),o(),w("placeholder",s(96,116,"unitLevelOrderHistory.filterByBuyerPlaceholder")),O("aria-label",s(97,118,"unitLevelOrderHistory.filterByBuyerPlaceholder")),o(4),O("aria-label",s(99,120,"common.reset")),o(2),u("type",n.iconTypes.RESET),o(2),u("type",n.iconTypes.SEARCH),o(3),_(" ",s(106,122,"unitLevelOrderHistory.unit")," "),o(2),O("aria-label",s(108,124,"unitLevelOrderHistory.filterByUnitAriaLabel")),o(2),J("dirty",!!ve.value),o(),w("placeholder",s(112,126,"unitLevelOrderHistory.filterByUnitPlaceholder")),O("aria-label",s(113,128,"unitLevelOrderHistory.filterByUnitPlaceholder")),o(4),O("aria-label",s(115,130,"common.reset")),o(2),u("type",n.iconTypes.RESET),o(2),u("type",n.iconTypes.SEARCH),o(3),_(" ",s(122,132,"unitLevelOrderHistory.clearAll")," "),o(3),_(" ",s(125,134,"unitLevelOrderHistory.search")," "),o(4),u("type",n.iconTypes.FILTER),o(),_(" ",s(130,136,"unitLevelOrderHistory.filterBy")," "),o(2),u("ngIf",n.buyerFilterMobileValue||n.unitFilterMobileValue)}},dependencies:[ae,_t,vt,yt,ft,ht,gt,Ot,be],encapsulation:2});let r=e;return r})(),Hi=(()=>{let e=class e{constructor(t,i,n){this.routing=t,this.unitOrdersFacade=i,this.translation=n,this.PAGE_SIZE=5,this.queryParams={currentPage:0,sortCode:"",filters:""},this.orders$=this.unitOrdersFacade.getOrderHistoryList(this.PAGE_SIZE).pipe(W(p=>{p?.pagination?.sort&&(this.sortType=p.pagination.sort,this.queryParams.sortCode=this.sortType)})),this.isLoaded$=this.unitOrdersFacade.getOrderHistoryListLoaded()}ngOnDestroy(){this.unitOrdersFacade.clearOrderList()}filterChange(t){this.updateQueryParams(ke(Re({},t),{currentPage:0})),this.fetchOrders(this.queryParams)}updateQueryParams(t){Object.entries(t).forEach(i=>this.queryParams[i[0]]=i[1])}changeSortCode(t){this.updateQueryParams({sortCode:t,currentPage:0}),this.sortType=t,this.fetchOrders(this.queryParams)}pageChange(t){this.updateQueryParams({currentPage:t}),this.fetchOrders(this.queryParams)}goToOrderDetail(t){this.routing.go({cxRoute:"unitLevelOrderDetail",params:t})}getSortLabels(){return A([this.translation.translate("sorting.date"),this.translation.translate("sorting.orderNumber"),this.translation.translate("unitLevelOrderHistorySorting.orgUnit"),this.translation.translate("unitLevelOrderHistorySorting.buyer"),this.translation.translate("unitLevelOrderHistorySorting.orgUnitDesc"),this.translation.translate("unitLevelOrderHistorySorting.buyerDesc")]).pipe(x(([t,i,n,p,v,L])=>({byDate:t,byOrderNumber:i,byOrgUnit:n,byBuyer:p,byOrgUnitDesc:v,byBuyerDesc:L})))}fetchOrders(t){this.unitOrdersFacade.loadOrderList(this.PAGE_SIZE,t.currentPage,t.filters,t.sortCode)}};e.\u0275fac=function(i){return new(i||e)(k(q),k(te),k(ge))},e.\u0275cmp=le({type:e,selectors:[["cx-unit-level-order-history"]],decls:2,vars:5,consts:[["noOrder",""],[4,"ngIf"],[3,"filterListEvent"],[1,"cx-unit-level-order-history-body"],[4,"ngIf","ngIfElse"],[1,"cx-unit-level-order-history-sort","top"],[1,"cx-unit-level-order-history-form-group","form-group"],["ariaControls","order-history-table",3,"sortListEvent","sortOptions","sortLabels","selectedOption","placeholder","ariaLabel"],[1,"cx-unit-level-order-history-total-result"],[3,"pagination"],["class","cx-unit-level-order-history-pagination",4,"ngIf"],["id","order-history-table",1,"table","cx-unit-level-order-history-table"],[1,"cx-unit-level-order-history-thead-mobile"],["scope","col"],[3,"click",4,"ngFor","ngForOf"],[1,"cx-unit-level-order-history-sort","bottom"],[1,"cx-unit-level-order-history-pagination"],[3,"viewPageEvent","pagination"],[3,"click"],[1,"cx-unit-level-order-history-code"],[1,"cx-unit-level-order-history-label"],[1,"cx-unit-level-order-history-value",3,"routerLink"],[1,"cx-unit-level-order-history-placed"],[1,"cx-unit-level-order-history-status"],[1,"cx-unit-level-order-history-buyer"],[1,"text-ellipsis"],[1,"cx-unit-level-order-history-unit"],[1,"cx-unit-level-order-history-total"],["class","cx-unit-level-order-history-no-order",4,"ngIf"],[1,"cx-unit-level-order-history-no-order"],["routerLinkActive","active",1,"btn","btn-primary","btn-block",3,"routerLink"]],template:function(i,n){i&1&&(E(0,Ii,2,1,"ng-container",1),a(1,"async")),i&2&&u("ngIf",R(3,gi,s(1,1,n.orders$)))},dependencies:[Ze,ae,tt,it,Et,Ft,It,Mi,fe,ut,be,xe],encapsulation:2,changeDetection:0});let r=e;return r})(),Vi=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({imports:[N,Ce,pe,Ct]});let r=e;return r})(),Ri=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({providers:[K({cmsComponents:{UnitLevelOrderHistoryComponent:{component:Hi,guards:[X,re]}}})],imports:[N,_e,Ce,xt,Tt,mt,pe,Vi]});let r=e;return r})(),me=(()=>{let e=class e{constructor(t,i){this.unitOrderFacade=t,this.routingService=i,this.orderCode$=this.routingService.getRouterState().pipe(x(n=>n.state.params.orderCode),Ne()),this.orderLoad$=this.orderCode$.pipe(W(n=>{n?this.unitOrderFacade.loadOrderDetails(n):this.unitOrderFacade.clearOrderDetails()}),Ae({bufferSize:1,refCount:!0}))}getOrderDetails(){return this.orderLoad$.pipe(Y(()=>this.unitOrderFacade.getOrderDetails()))}};e.\u0275fac=function(i){return new(i||e)(C(te),C(q))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),ki=(()=>{let e=class e{constructor(t,i){this.translation=t,this.unitLevelOrderDetailsService=i}ngOnInit(){this.order$=this.unitLevelOrderDetailsService.getOrderDetails()}getOrderCodeCardContent(t){return this.translation.translate("orderDetails.orderNumber").pipe(S(()=>!!t),x(i=>({title:i,text:[t]})))}getOrderCurrentDateCardContent(t){return this.translation.translate("orderDetails.placedOn").pipe(S(()=>!!t),x(i=>({title:i,text:[t]})))}getOrderStatusCardContent(t){return A([this.translation.translate("orderDetails.status"),t?this.translation.translate("orderDetails.statusDisplay_"+t):Z("")]).pipe(S(()=>!!t),x(([i,n])=>({title:i,text:[n]})))}getPurchaseOrderNumber(t){return A([this.translation.translate("orderDetails.purchaseOrderNumber"),this.translation.translate("orderDetails.emptyPurchaseOrderId")]).pipe(S(()=>!!t),x(([i,n])=>({title:i,text:[t||n]})))}getMethodOfPaymentCardContent(t){return A([this.translation.translate("orderDetails.methodOfPayment"),this.translation.translate("paymentTypes.paymentType_ACCOUNT"),this.translation.translate("paymentTypes.paymentType_CARD")]).pipe(S(()=>!!t),x(([i,n,p])=>({title:i,text:[t?p:n]})))}getCostCenterCardContent(t){return this.translation.translate("orderDetails.costCenter").pipe(S(()=>!!t),x(i=>({title:i,textBold:t?.name,text:[`(${t?.unit?.name})`]})))}getAddressCardContent(t){return this.translation.translate("addressCard.shipTo").pipe(S(()=>!!t),x(i=>{let n=this.normalizeFormattedAddress(t?.formattedAddress??"");return{title:i,textBold:`${t?.firstName} ${t?.lastName}`,text:[n,t?.country?.name]}}))}getDeliveryModeCardContent(t){return this.translation.translate("orderDetails.shippingMethod").pipe(S(()=>!!t),x(i=>({title:i,textBold:t?.name,text:[t?.description,t?.deliveryCost?.formattedValue?t.deliveryCost?.formattedValue:""]})))}getPaymentInfoCardContent(t){return A([this.translation.translate("paymentForm.payment"),this.translation.translate("paymentCard.expires",{month:t?t.expiryMonth:"",year:t?t.expiryYear:""})]).pipe(S(()=>!!t),x(([i,n])=>({title:i,textBold:t?.accountHolderName,text:[t?.cardNumber,n]})))}getBillingAddressCardContent(t){return this.translation.translate("paymentForm.billingAddress").pipe(S(()=>!!t),x(i=>({title:i,textBold:`${t?.firstName} ${t?.lastName}`,text:[t?.formattedAddress,t?.country?.name]})))}getBuyerNameCardContent(t){return this.translation.translate("unitLevelOrderDetails.buyer").pipe(S(()=>!!t),x(i=>({title:i,text:[t?.name,`(${t?.email})`]})))}getUnitNameCardContent(t){return this.translation.translate("orderDetails.unit").pipe(S(()=>!!t),x(i=>({title:i,text:[t]})))}normalizeFormattedAddress(t){return t.split(",").map(n=>n.trim()).filter(Boolean).join(", ")}};e.\u0275fac=function(i){return new(i||e)(k(ge),k(me))},e.\u0275cmp=le({type:e,selectors:[["cx-unit-level-order-overview"]],decls:2,vars:3,consts:[["class","cx-order-summary",4,"ngIf"],[1,"cx-order-summary"],[1,"container"],[1,"cx-summary-card"],[3,"content"],[1,"cx-display-inline",3,"content"],[4,"ngIf"]],template:function(i,n){i&1&&(E(0,Di,24,27,"div",0),a(1,"async")),i&2&&u("ngIf",s(1,1,n.order$))},dependencies:[ae,Lt,fe,xe],encapsulation:2,changeDetection:0});let r=e;return r})(),Ni=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({imports:[N,pe,St]});let r=e;return r})(),Ai=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({providers:[K({cmsComponents:{UnitLevelOrderDetailsOverviewComponent:{component:ki,guards:[X,re]},UnitLevelOrderDetailsItemsComponent:{component:Dt,guards:[X,re],providers:[{provide:Se,useExisting:me}]},UnitLevelOrderDetailsTotalsComponent:{component:Mt,guards:[X,re],providers:[{provide:Se,useExisting:me}]}}})],imports:[N,Ni]});let r=e;return r})(),Pi=(()=>{let e=class e{constructor(t){this.unitLevelOrderDetailService=t,this.type=wt.UNIT_ORDER_DETAILS}getEntries(){return this.unitLevelOrderDetailService.getOrderDetails().pipe(x(t=>t?.entries??[]))}};e.\u0275fac=function(i){return new(i||e)(C(me))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),Yt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({providers:[{provide:Vt,useExisting:Pi}],imports:[_e,Ri,Ai]});let r=e;return r})();var ji=(()=>{let e=class e{constructor(t,i,n){this.http=t,this.occEndpoints=i,this.converter=n}loadUnitOrderHistory(t,i,n,p,v){let L={};i&&(L.pageSize=i.toString()),n&&(L.currentPage=n.toString()),p&&(L.filters=p.toString()),v&&(L.sort=v.toString());let ve=this.occEndpoints.buildUrl("unitLevelOrderHistory",{urlParams:{userId:t},queryParams:L});return this.http.get(ve).pipe(this.converter.pipeable(Ut))}loadUnitOrderDetail(t,i){let n=this.occEndpoints.buildUrl("unitLevelOrderDetail",{urlParams:{userId:t,orderId:i}});return this.http.get(n).pipe(this.converter.pipeable(Le))}};e.\u0275fac=function(i){return new(i||e)(C(Ye),C(st),C(pt))},e.\u0275prov=B({token:e,factory:e.\u0275fac});let r=e;return r})(),$i={backend:{occ:{endpoints:{unitLevelOrderHistory:"/orgUsers/${userId}/orgUnits/orders",unitLevelOrderDetail:"orgUsers/${userId}/orgUnits/orders/${orderId}?fields=FULL"}}}},Wt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({providers:[K($i),{provide:ie,useClass:ji},{provide:Le,useExisting:Ht,multi:!0}],imports:[N]});let r=e;return r})();var Ar=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=T({type:e}),e.\u0275inj=I({imports:[Zt.forRoot(),Wt,Yt]});let r=e;return r})();export{Ar as UnitOrderModule};
