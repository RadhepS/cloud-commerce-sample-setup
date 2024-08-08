import{a as C,z as A}from"./chunk-OM5F6SG5.js";import{ga as a,ha as s,sc as N}from"./chunk-F5NBEN52.js";import{Fd as h,Gd as D,He as R,Qe as d,qa as c,ra as O,sa as i,ug as l,xd as E,za as g}from"./chunk-Q7YDE2H2.js";var p=class extends R{},V=(()=>{let e=class e extends p{};e.type="OrderPlacedEvent";let t=e;return t})(),K=(()=>{let e=class e extends p{};e.type="ReplenishmentOrderScheduledEvent";let t=e;return t})(),Q=(()=>{let e=class e extends R{};e.type="DownloadOrderInvoicesEvent";let t=e;return t})(),I="order",u="orderCore";function M(){return l({facade:v,feature:u,methods:["getOrderDetails","loadOrderDetails","clearOrderDetails","getOrderHistoryList","getOrderHistoryListLoaded","loadOrderList","clearOrderList","getConsignmentTracking","loadConsignmentTracking","clearConsignmentTracking","cancelOrder","getCancelOrderLoading","getCancelOrderSuccess","resetCancelOrderProcessState","getOrderDetailsLoading"],async:!0})}var v=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>M(),providedIn:"root"});let t=e;return t})();function T(){return l({facade:S,feature:u,methods:["createOrderReturnRequest","getOrderReturnRequest","getOrderReturnRequestList","loadOrderReturnRequestDetail","loadOrderReturnRequestList","clearOrderReturnRequestList","getReturnRequestLoading","getReturnRequestSuccess","clearOrderReturnRequestDetail","cancelOrderReturnRequest","getCancelReturnRequestLoading","getCancelReturnRequestSuccess","resetCancelReturnRequestProcessState"],async:!0})}var S=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>T(),providedIn:"root"});let t=e;return t})(),X=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>l({facade:e,feature:u,methods:["getOrderDetails","clearPlacedOrder","setPlacedOrder","placeOrder","getPickupEntries","getDeliveryEntries"]}),providedIn:"root"});let t=e;return t})(),J=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>l({facade:e,feature:u,methods:["reorder"]}),providedIn:"root"});let t=e;return t})();function x(){return l({facade:y,feature:u,methods:["loadReplenishmentOrderDetails","getReplenishmentOrderDetails","getReplenishmentOrderDetailsLoading","getReplenishmentOrderDetailsSuccess","getReplenishmentOrderDetailsError","clearReplenishmentOrderDetails","cancelReplenishmentOrder","getCancelReplenishmentOrderLoading","getCancelReplenishmentOrderSuccess","getCancelReplenishmentOrderError","clearCancelReplenishmentOrderProcessState","getReplenishmentOrderHistoryList","getReplenishmentOrderHistoryListLoading","getReplenishmentOrderHistoryListError","getReplenishmentOrderHistoryListSuccess","loadReplenishmentOrderList","clearReplenishmentOrderList"],async:!0})}var y=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>x(),providedIn:"root"});let t=e;return t})(),$=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=c({token:e,factory:()=>l({facade:e,feature:u,methods:["scheduleReplenishmentOrder"]}),providedIn:"root"});let t=e;return t})(),w=function(t){return t.ORDER_CONSIGNMENT="cx-order-consignment",t.CONSIGNMENT_DELIVERY_INFO="cx-order-consignment-delivery-info",t.SERVICE_DETAILS="cx-service-details-card",t}(w||{}),W={DAILY:"DAILY",WEEKLY:"WEEKLY",MONTHLY:"MONTHLY"},H=function(t){return t.MONDAY="MONDAY",t.TUESDAY="TUESDAY",t.WEDNESDAY="WEDNESDAY",t.THURSDAY="THURSDAY",t.FRIDAY="FRIDAY",t.SATURDAY="SATURDAY",t.SUNDAY="SUNDAY",t}(H||{}),Y=function(t){return t.PLACE_ORDER="PLACE_ORDER",t.SCHEDULE_REPLENISHMENT_ORDER="SCHEDULE_REPLENISHMENT_ORDER",t}(Y||{}),q={routing:{routes:{orders:{paths:["my-account/orders"]},orderDetails:{paths:["my-account/order/:orderCode"],paramsMapping:{orderCode:"code"}},orderGuest:{paths:["guest/order/:orderCode"],paramsMapping:{orderCode:"code"}},orderReturn:{paths:["my-account/order/return/:orderCode"],paramsMapping:{orderCode:"code"}},orderReturnConfirmation:{paths:["my-account/order/return/confirmation/:orderCode"],paramsMapping:{orderCode:"code"}},orderCancel:{paths:["my-account/order/cancel/:orderCode"],paramsMapping:{orderCode:"code"}},orderCancelConfirmation:{paths:["my-account/order/cancel/confirmation/:orderCode"],paramsMapping:{orderCode:"code"}},returnRequestDetails:{paths:["my-account/return-request/:returnCode"],paramsMapping:{returnCode:"rma"}},replenishmentOrders:{paths:["my-account/my-replenishments"]},replenishmentDetails:{paths:["my-account/my-replenishment/:replenishmentOrderCode"],paramsMapping:{replenishmentOrderCode:"replenishmentOrderCode"}},replenishmentConfirmation:{paths:["replenishment/confirmation"]},orderConfirmation:{paths:["order-confirmation"]}}}},U=new i("OrderDetailsOrderEntriesContext"),b=new i("OrderConfirmationOrderEntriesContext"),ee=new i("feature flag to enable enhanced UI for Order related pages under My-Account",{providedIn:"root",factory:()=>!1});function F(){return{featureModules:{[I]:{cmsComponents:["CancelOrderComponent","CancelOrderConfirmationComponent","ReturnOrderComponent","ReturnOrderConfirmationComponent","AccountOrderDetailsActionsComponent","AccountOrderDetailsItemsComponent","AccountOrderDetailsTotalsComponent","AccountOrderDetailsOverviewComponent","AccountOrderDetailsBillingComponent","AccountOrderDetailsGroupedItemsComponent","AccountOrderDetailsSimpleOverviewComponent","AccountOrderHistoryComponent","ReplenishmentDetailItemsComponent","AccountOrderDetailsReorderComponent","ReplenishmentDetailTotalsComponent","ReplenishmentDetailShippingComponent","ReplenishmentDetailActionsComponent","ReplenishmentDetailOrderHistoryComponent","AccountReplenishmentHistoryComponent","ReturnRequestOverviewComponent","ReturnRequestItemsComponent","ReturnRequestTotalsComponent","OrderReturnRequestListComponent","OrderConfirmationThankMessageComponent","OrderConfirmationItemsComponent","OrderConfirmationTotalsComponent","OrderConfirmationOverviewComponent","OrderConfirmationShippingComponent","OrderConfirmationBillingComponent","OrderConfirmationContinueButtonComponent","ReplenishmentConfirmationMessageComponent","ReplenishmentConfirmationOverviewComponent","ReplenishmentConfirmationItemsComponent","ReplenishmentConfirmationTotalsComponent","MyAccountViewOrderComponent"],dependencies:[A]},[u]:I}}}var te=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=O({providers:[D(F),h(q)],imports:[E.forChild([{path:null,canActivate:[d,s],component:a,data:{pageLabel:"order",cxRoute:"orderGuest"}},{path:null,canActivate:[d,s],component:a,data:{cxRoute:"orderDetails",cxContext:{[C]:U}}},{path:null,canActivate:[s],component:a,data:{cxRoute:"orderCancel"}},{path:null,canActivate:[s],component:a,data:{cxRoute:"orderCancelConfirmation"}},{path:null,canActivate:[s],component:a,data:{cxRoute:"orderReturn"}},{path:null,canActivate:[s],component:a,data:{cxRoute:"orderReturnConfirmation"}},{path:null,canActivate:[d,s],component:a,data:{cxRoute:"orders"}},{path:null,canActivate:[d,s],component:a,data:{cxRoute:"replenishmentDetails"}},{path:null,canActivate:[d,s],component:a,data:{cxRoute:"replenishmentOrders"}},{path:null,canActivate:[d,s],component:a,data:{cxRoute:"returnRequestDetails"}},{path:null,canActivate:[s],component:a,data:{cxRoute:"orderConfirmation",cxContext:{[C]:b}}}])]});let t=e;return t})(),ne=new i("OrderNormalizer"),re=new i("ReplenishmentOrderNormalizer"),oe=new i("ReorderOrderNormalizer"),ie=new i("OrderHistoryNormalizer"),ae=new i("ConsignmentTrackingNormalizer"),se=new i("OrderReturnRequestNormalizer"),ce=new i("OrderReturnRequestInputSerializer"),de=new i("OrderReturnsNormalizer"),le=new i("ReplenishmentOrderHistoryNormalizer"),ue=new i("ReplenishmentOrderFormSerializer");function me(t,e,o,n,r){r||(r=n?.country?.name);let f="";n&&n.region&&n.region.isocode&&(f=n.region.isocode+", ");let L=N(n,e,o),m;return n.firstName&&n.lastName?m=n.firstName+" "+n.lastName:n.firstName?m=n.firstName:n.lastName&&(m=n.lastName),{title:t,textBold:m,text:[n.line1,n.line2,n.town+", "+f+r,n.postalCode,L]}}function pe(t,e){return{title:t,textBold:e.name,text:[e.description,e.deliveryCost?.formattedValue?e.deliveryCost?.formattedValue:""]}}function Re(t,e,o){return{title:t,text:[o.cardType?.name,o.accountHolderName,o.cardNumber,e]}}function Ce(t,e,o){let n=o.billingAddress?.region?.isocode?o.billingAddress?.region?.isocode+", ":"";return{title:t,text:[e,o.billingAddress?.firstName+" "+o.billingAddress?.lastName,o.billingAddress?.line1,o.billingAddress?.town+", "+n+o.billingAddress?.country?.isocode,o.billingAddress?.postalCode]}}export{V as a,K as b,Q as c,I as d,v as e,S as f,X as g,J as h,y as i,$ as j,w as k,W as l,H as m,Y as n,U as o,b as p,ee as q,te as r,ne as s,re as t,oe as u,ie as v,ae as w,se as x,ce as y,de as z,le as A,ue as B,me as C,pe as D,Re as E,Ce as F};
