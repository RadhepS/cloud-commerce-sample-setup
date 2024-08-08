import{Rb as D,ga as N,ha as h}from"./chunk-F5NBEN52.js";import{Fd as l,Gd as E,N as d,Oc as c,Qc as p,a as u,b as f,be as C,ia as m,qa as a,ra as s,ua as i,ug as v,xd as A,za as g}from"./chunk-Q7YDE2H2.js";var R="organization/account-summary",y={routing:{routes:{orgAccountSummary:{paths:[`${R}`]},orgAccountSummaryDetails:{paths:[`${R}/details/:orgUnit`],paramsMapping:{orgUnit:"uid"}}}}},M="organizationAccountSummary";var S=(()=>{let e=class e{constructor(){this.fileReaderService=i(D),this.windowRef=i(C)}intercept(r,o){return o.handle(r).pipe(d(n=>{if(this.windowRef.isBrowser()&&n instanceof c&&n.error instanceof Blob&&n.error.type==="application/json")return this.fileReaderService.loadTextFile(n.error).pipe(m(T=>{let U=JSON.parse(T);throw new c(f(u({},n),{error:U,url:n.url??void 0}))}));throw n}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function I(){return{featureModules:{[M]:{cmsComponents:["ManageAccountSummaryListComponent","AccountSummaryHeaderComponent","AccountSummaryDocumentComponent"]}}}}var Y=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=g({type:e}),e.\u0275inj=s({providers:[l(y),E(I),{provide:p,useExisting:S,multi:!0}],imports:[A.forChild([{path:null,canActivate:[h],component:N,data:{cxRoute:"orgAccountSummaryDetails"}}])]});let t=e;return t})(),k=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=a({token:e,factory:()=>v({facade:e,feature:M,methods:["getAccountSummary","getDocumentList","getDocumentAttachment"]}),providedIn:"root"});let t=e;return t})(),w=function(t){return t.ALL="all",t.OPEN="open",t.CLOSED="closed",t}(w||{}),L=function(t){return t.BASIC="BASIC",t.DEFAULT="DEFAULT",t.FULL="FULL",t}(L||{}),O=function(t){return t.DOCUMENT_NUMBER="orgDocumentId",t.DOCUMENT_NUMBER_RANGE="orgDocumentIdRange",t.DOCUMENT_TYPE="orgDocumentType",t.DATE_RANGE="createdAtDateRange",t.DUE_DATE_RANGE="dueAtDateRange",t.AMOUNT_RANGE="amountRange",t.OPEN_AMOUNT_RANGE="openAmountRange",t}(O||{});export{M as a,Y as b,k as c,w as d,L as e,O as f};
