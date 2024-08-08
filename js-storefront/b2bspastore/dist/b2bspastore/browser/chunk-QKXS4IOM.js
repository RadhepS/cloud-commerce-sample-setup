import{b as _}from"./chunk-SNQARJFE.js";import{$ as at,Y as rt,_ as ct}from"./chunk-F5NBEN52.js";import{Ae as et,Db as Z,Ea as A,Eb as C,Ee as T,Fa as L,Fc as h,Fd as I,Gb as M,Ib as z,N as F,Pc as G,Sa as u,Ta as P,Td as J,Vb as l,Wb as g,Xd as Q,_b as V,a as R,bb as f,cb as $,db as d,ee as X,gf as it,ia as N,ie as tt,jb as v,kb as k,lb as K,lg as nt,mb as x,mg as ot,na as O,nb as y,pb as B,qa as p,ra as c,rb as Y,s as w,sa as E,sb as m,sc as q,ta as a,tc as H,ua as b,ya as U,yc as W,za as s}from"./chunk-Q7YDE2H2.js";function St(e,t){if(e&1&&(v(0,"div",6),C(1),l(2,"cxTranslate"),k()),e&2){let o=t.$implicit;u(),z(" ",o.formattedDate," - ",g(2,3,"futureStockDropdown.quantity")," ",o.stock.stockLevel," ")}}function vt(e,t){if(e&1&&(x(0),f(1,St,3,5,"div",5),y()),e&2){let o=m(2).ngIf;u(),d("ngForOf",o.futureStocks)}}function kt(e,t){e&1&&(v(0,"div",6),C(1),l(2,"cxTranslate"),k()),e&2&&(u(),M(" ",g(2,1,"futureStockDropdown.noFutureStocks")," "))}function xt(e,t){if(e&1&&(x(0),f(1,vt,2,1,"ng-container",4)(2,kt,3,3,"ng-template",null,0,V),y()),e&2){let o=Z(3),n=m().ngIf;u(),d("ngIf",n==null||n.futureStocks==null?null:n.futureStocks.length)("ngIfElse",o)}}function yt(e,t){if(e&1){let o=B();x(0),v(1,"button",2),Y("click",function(){A(o);let i=m();return L(i.toggle())}),C(2),l(3,"cxTranslate"),K(4,"cx-icon",3),k(),f(5,xt,4,2,"ng-container",1),y()}if(e&2){let o=m();u(),$("aria-expanded",o.expanded),u(),M(" ",g(3,4,"futureStockDropdown.header")," "),u(2),d("type",o.expanded?o.iconType.CARET_UP:o.iconType.CARET_DOWN),u(),d("ngIf",o.expanded)}}var Ct=(()=>{let t=class t{constructor(n){this.futureStockService=n,this.futureStocks$=this.futureStockService.getFutureStock(),this.expanded=!1,this.iconType=rt}toggle(){this.expanded=!this.expanded}};t.\u0275fac=function(i){return new(i||t)(P(_))},t.\u0275cmp=U({type:t,selectors:[["cx-future-stock-accordion"]],decls:2,vars:3,consts:[["noStocks",""],[4,"ngIf"],["id","cx-future-stock-accordion-header","aria-controls","cx-future-stock-accordion-content",1,"cx-future-stock-accordion-header",3,"click"],["aria-hidden","true",3,"type"],[4,"ngIf","ngIfElse"],["id","cx-future-stock-accordion-content","class","cx-future-stock-accordion-content","aria-labelledby","cx-future-stock-accordion-header",4,"ngFor","ngForOf"],["id","cx-future-stock-accordion-content","aria-labelledby","cx-future-stock-accordion-header",1,"cx-future-stock-accordion-content"]],template:function(i,r){i&1&&(f(0,yt,6,6,"ng-container",1),l(1,"async")),i&2&&d("ngIf",g(1,1,r.futureStocks$))},dependencies:[q,H,ct,W,nt],encapsulation:2});let e=t;return e})(),It=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s({type:t}),t.\u0275inj=c({providers:[I({cmsComponents:{FutureStockComponent:{component:Ct}}})],imports:[h,ot,at]});let e=t;return e})(),ut=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s({type:t}),t.\u0275inj=c({imports:[h,It]});let e=t;return e})();var S=class{},pt=(()=>{let t=class t{constructor(n){this.adapter=n}getFutureStock(n,i){return this.adapter.getFutureStock(n,i)}getFutureStocks(n,i){return this.adapter.getFutureStocks(n,i)}};t.\u0275fac=function(i){return new(i||t)(a(S))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let e=t;return e})(),ft=new E("FutureStockNormalizer"),mt=new E("FutureStockListNormalizer"),dt=(()=>{let t=class t{getFutureStock(){return this.futureStockState$}constructor(n,i,r){this.userIdService=n,this.futureStockConnector=i,this.routingService=r,this.PRODUCT_KEY="productCode",this.futureStockState$=this.routingService.getRouterState().pipe(O(this.userIdService.takeUserId()),N(([{state:ht},j])=>j!==J?this.futureStockConnector.getFutureStock(j,ht.params[this.PRODUCT_KEY]):w(void 0)))}};t.\u0275fac=function(i){return new(i||t)(a(Q),a(pt),a(tt))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let e=t;return e})(),_t=[dt,{provide:_,useExisting:dt}],lt=(()=>{let t=class t{static forRoot(){return{ngModule:t}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s({type:t}),t.\u0275inj=c({providers:[..._t,pt]});let e=t;return e})();var Ft=(()=>{let t=class t{constructor(n,i,r){this.http=n,this.occEndpoints=i,this.converter=r,this.logger=b(X)}getFutureStock(n,i){return this.http.get(this.getFutureStockEndpoint(n,i)).pipe(F(r=>{throw T(r,this.logger)}),this.converter.pipeable(ft))}getFutureStocks(n,i){return this.http.get(this.getFutureStocksEndpoint(n,i)).pipe(F(r=>{throw T(r,this.logger)}),this.converter.pipeable(mt))}getFutureStockEndpoint(n,i){return this.occEndpoints.buildUrl("futureStock",{urlParams:{userId:n,productCode:i}})}getFutureStocksEndpoint(n,i){let r={};return r.productCodes=i,this.occEndpoints.buildUrl("futureStocks",{urlParams:{userId:n},queryParams:r})}};t.\u0275fac=function(i){return new(i||t)(a(G),a(et),a(it))},t.\u0275prov=p({token:t,factory:t.\u0275fac});let e=t;return e})(),Et={futureStock:"users/${userId}/futureStocks/${productCode}",futureStocks:"users/${userId}/futureStocks"},Mt={backend:{occ:{endpoints:R({},Et)}}},gt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s({type:t}),t.\u0275inj=c({providers:[I(Mt),{provide:S,useClass:Ft}],imports:[h]});let e=t;return e})();var ie=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s({type:t}),t.\u0275inj=c({imports:[lt.forRoot(),gt,ut]});let e=t;return e})();export{ie as FutureStockModule};
