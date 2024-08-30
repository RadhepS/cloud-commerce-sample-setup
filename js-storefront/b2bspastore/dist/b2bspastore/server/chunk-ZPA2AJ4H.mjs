import './polyfills.server.mjs';
import{d as B}from"./chunk-HQTFSEH2.mjs";import{c as x,d as k,h as Q,k as Z,l as q,m as J}from"./chunk-RYNWBM55.mjs";import"./chunk-FWN422PK.mjs";import{T as f,U as w,V as E,W as H}from"./chunk-LMNX2PFK.mjs";import"./chunk-L3T7QQFM.mjs";import{Ca as T,Fa as O,Ha as C,K as j,La as V,X as U,Z as $,db as A,fb as L,ka as N,nb as m,sb as F}from"./chunk-MYZEKFYU.mjs";import{$d as P,Fa as l,Ga as b,Ka as c,La as h,Md as R,S as g,Sa as D,Td as u,Vd as S,x as y}from"./chunk-IDQ3VQP7.mjs";import{a as v,b as M}from"./chunk-GHFNAT2I.mjs";var K=(()=>{let r=class r{constructor(t){this.converter=t}convert(t,e){return e===void 0&&(e=v({},t)),this.removeDuplicatePromotions(t,e),this.handleQuoteCode(t,e),t.entries&&(e.entries=t.entries.map(i=>M(v({},i),{product:this.converter.convert(i.product,F),promotions:this.converter.convert({item:i,promotions:e?.appliedProductPromotions},w)}))),e}handleQuoteCode(t,e){t.sapQuote&&(e.quoteCode=t.sapQuote.code)}removeDuplicatePromotions(t,e){t&&t.potentialOrderPromotions&&(e.potentialOrderPromotions=this.removeDuplicateItems(t.potentialOrderPromotions)),t&&t.potentialProductPromotions&&(e.potentialProductPromotions=this.removeDuplicateItems(t.potentialProductPromotions)),t&&t.appliedOrderPromotions&&(e.appliedOrderPromotions=this.removeDuplicateItems(t.appliedOrderPromotions)),t&&t.appliedProductPromotions&&(e.appliedProductPromotions=this.removeDuplicateItems(t.appliedProductPromotions))}removeDuplicateItems(t){return t.filter((e,i,o)=>{let s=o.map(a=>JSON.stringify(a));return i===s.indexOf(JSON.stringify(e))})}};r.\u0275fac=function(e){return new(e||r)(c(m))},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})(),G=(()=>{let r=class r{convert(t,e){return e=this.getProductPromotion(t.item,t.promotions),e}getProductPromotion(t,e){let i=[];return e?.forEach(o=>{if(o.description&&o.consumedEntries)for(let s of o.consumedEntries)this.isConsumedByEntry(s,t)&&i.push(o)}),i}isConsumedByEntry(t,e){let i=t.orderEntryNumber;if(e&&e.entries&&e.entries.length>0){for(let o of e.entries)if(o.entryNumber===i)return!0;return!1}else return i===e?.entryNumber}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})(),X=(()=>{let r=class r{constructor(t,e,i){this.http=t,this.occEndpointsService=e,this.converterService=i}add(t,e,i,o=1,s){let a=this.occEndpointsService.buildUrl("addEntries",{urlParams:{userId:t,cartId:e,quantity:o}});if(a.includes(`quantity=${o}`)){let I=new u({"Content-Type":"application/x-www-form-urlencoded"});return this.http.post(a,{},{headers:I,params:{code:i}}).pipe(this.converterService.pipeable(E))}let d=v({quantity:o,product:{code:i}},s&&{deliveryPointOfService:{name:s}}),p=new u({"Content-Type":"application/json"});return this.http.post(a,d,{headers:p}).pipe(this.converterService.pipeable(E))}update(t,e,i,o,s,a=!1){let d=new u({"Content-Type":"application/json"}),p=this.occEndpointsService.buildUrl("updateEntries",{urlParams:{userId:t,cartId:e,entryNumber:i}});if(s===void 0&&a)return this.http.put(p,{quantity:o},{headers:d}).pipe(this.converterService.pipeable(E));let I={};return s&&(I={deliveryPointOfService:{name:s}}),this.http.patch(p,v({quantity:o},I),{headers:d}).pipe(this.converterService.pipeable(E))}remove(t,e,i){let o=new u({"Content-Type":"application/x-www-form-urlencoded"}),s=this.occEndpointsService.buildUrl("removeEntries",{urlParams:{userId:t,cartId:e,entryNumber:i}});return this.http.delete(s,{headers:o})}};r.\u0275fac=function(e){return new(e||r)(c(P),c(C),c(m))},r.\u0275prov=l({token:r,factory:r.\u0275fac});let n=r;return n})(),z=(()=>{let r=class r{constructor(t,e,i){this.http=t,this.occEndpoints=e,this.converter=i,this.logger=h(N)}getCartVoucherEndpoint(t,e){return this.occEndpoints.buildUrl("cartVoucher",{urlParams:{userId:t,cartId:e}})}getHeaders(t){let e=new u({"Content-Type":"application/json"});return t===U&&(e=O.createHeader(T,!0,e)),e}add(t,e,i){let o=this.getCartVoucherEndpoint(t,e),s=JSON.stringify({}),a=new S().set("voucherId",i),d=this.getHeaders(t);return this.http.post(o,s,{headers:d,params:a}).pipe(g(p=>{throw V(p,this.logger)}),this.converter.pipeable(H))}remove(t,e,i){let o=this.getCartVoucherEndpoint(t,e)+"/"+encodeURIComponent(i),s=this.getHeaders(t);return this.http.delete(o,{headers:s}).pipe(g(a=>{throw V(a,this.logger)}))}};r.\u0275fac=function(e){return new(e||r)(c(P),c(C),c(m))},r.\u0275prov=l({token:r,factory:r.\u0275fac});let n=r;return n})(),_=(()=>{let r=class r{constructor(t,e,i){this.http=t,this.occEndpointsService=e,this.converterService=i,this.featureConfigService=h(A)}loadAll(t){return this.http.get(this.occEndpointsService.buildUrl("carts",{urlParams:{userId:t}})).pipe(y(e=>e.carts??[]),this.converterService.pipeableMany(f))}load(t,e){return e===$?this.loadAll(t).pipe(y(i=>i.find(o=>o.saveTime===void 0))):this.http.get(this.occEndpointsService.buildUrl("cart",{urlParams:{userId:t,cartId:e}})).pipe(this.converterService.pipeable(f))}create(t,e,i){let o=JSON.stringify({}),s={};return e&&(s.oldCartId=e),i&&(s.toMergeCartGuid=i),this.http.post(this.occEndpointsService.buildUrl("createCart",{urlParams:{userId:t},queryParams:s}),o).pipe(this.converterService.pipeable(f))}delete(t,e){let i=new u;return t===U&&(i=O.createHeader(T,!0,i)),this.http.delete(this.occEndpointsService.buildUrl("deleteCart",{urlParams:{userId:t,cartId:e}}),{headers:i})}save(t,e,i,o){let s=this.occEndpointsService.buildUrl("saveCart",{urlParams:{userId:t,cartId:e,saveCartName:i,saveCartDescription:o}}),a=new S;return this.featureConfigService?.isEnabled("occCartNameAndDescriptionInHttpRequestBody")&&(a=a.set("saveCartName",i).set("saveCartDescription",o)),this.http.patch(s,a).pipe(y(d=>d.savedCartData),this.converterService.pipeable(f))}addEmail(t,e,i){let o=new u({"Content-Type":"application/x-www-form-urlencoded"});o=O.createHeader(T,!0,o);let s=new S().set("email",i),a=this.occEndpointsService.buildUrl("addEmail",{urlParams:{userId:t,cartId:e}});return this.http.put(a,s,{headers:o})}};r.\u0275fac=function(e){return new(e||r)(c(P),c(C),c(m))},r.\u0275prov=l({token:r,factory:r.\u0275fac});let n=r;return n})(),ee=(()=>{let r=class r{constructor(t,e,i){this.http=t,this.occEndpoints=e,this.converter=i,this.logger=h(N)}validate(t,e){let i=this.occEndpoints.buildUrl("validate",{urlParams:{cartId:t,userId:e}});return this.http.post(i,null).pipe(g(o=>{throw V(o,this.logger)}),this.converter.pipeable(J))}};r.\u0275fac=function(e){return new(e||r)(c(P),c(C),c(m))},r.\u0275prov=l({token:r,factory:r.\u0275fac});let n=r;return n})();function te(){return{backend:{occ:{endpoints:{carts:"users/${userId}/carts?fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description)",cart:"users/${userId}/carts/${cartId}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description",createCart:"users/${userId}/carts?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user",addEntries:"users/${userId}/carts/${cartId}/entries",updateEntries:"users/${userId}/carts/${cartId}/entries/${entryNumber}",removeEntries:"users/${userId}/carts/${cartId}/entries/${entryNumber}",addEmail:"users/${userId}/carts/${cartId}/email",deleteCart:"users/${userId}/carts/${cartId}",cartVoucher:"users/${userId}/carts/${cartId}/vouchers",saveCart:h(L).occCartNameAndDescriptionInHttpRequestBody?"/users/${userId}/carts/${cartId}/save":"/users/${userId}/carts/${cartId}/save?saveCartName=${saveCartName}&saveCartDescription=${saveCartDescription}",validate:"users/${userId}/carts/${cartId}/validate?fields=DEFAULT"}}}}}var W=(()=>{let r=class r{};r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=D({type:r}),r.\u0275inj=b({providers:[j(te),{provide:Q,useClass:_},{provide:f,useExisting:K,multi:!0},{provide:w,useExisting:G,multi:!0},{provide:x,useClass:X},{provide:k,useClass:z},{provide:Z,useClass:ee}],imports:[R]});let n=r;return n})();var Ce=(()=>{let r=class r{};r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=D({type:r}),r.\u0275inj=b({imports:[q,W,B]});let n=r;return n})();export{Ce as CartBaseModule};
