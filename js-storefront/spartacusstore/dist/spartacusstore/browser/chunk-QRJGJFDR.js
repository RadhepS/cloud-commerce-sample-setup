import{Ad as g,Ae as v,Ce as l,Ee as m,Fe as h,f,gg as a,pa as o,qa as r,sa as s,ya as c,ze as p}from"./chunk-M6I5A6DT.js";var C=(()=>{let e=class e{constructor(i,n){this.eventService=i,this.globalMessageService=n,this.subscriptions=new f,this.onAuth()}onAuth(){this.subscriptions.add(this.eventService.get(v).subscribe(()=>{this.globalMessageService.add({key:"authMessages.signedOutSuccessfully"},m.MSG_TYPE_CONFIRMATION)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)(s(l),s(h))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),M=(()=>{let e=class e{constructor(i){}};e.\u0275fac=function(n){return new(n||e)(s(C))},e.\u0275mod=c({type:e}),e.\u0275inj=r({});let t=e;return t})(),y="userAccount",u="userAccountCore";function b(){return{featureModules:{[y]:{cmsComponents:["LoginComponent","ReturningCustomerLoginComponent","VerifyOTPTokenComponent","ReturningCustomerRegisterComponent","MyAccountViewUserComponent","ReturningCustomerOTPLoginComponent"]},[u]:y}}}var T=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c({type:e}),e.\u0275inj=r({providers:[g(b)],imports:[M]});let t=e;return t})(),E=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=o({token:e,factory:()=>a({facade:e,feature:u,methods:["get","getById"]}),providedIn:"root"});let t=e;return t})(),F=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=o({token:e,factory:()=>a({facade:e,feature:u,methods:["createVerificationToken"]}),providedIn:"root"});let t=e;return t})(),D=function(t){return t.OK="OK",t}(D||{}),d=class extends p{},R=(()=>{let e=class e extends d{};e.type="UserAccountChangedEvent";let t=e;return t})();export{y as a,T as b,E as c,F as d,D as e,R as f};
