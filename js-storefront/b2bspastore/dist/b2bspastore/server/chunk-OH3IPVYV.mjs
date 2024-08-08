import './polyfills.server.mjs';
import{$ as Me,Aa as Se,L as Pe,M as Ve,N as Ze,O as ce,Q as se,X as ze,Y as j,Zb as De,_ as Q,da as ke,na as me,oa as de,ya as G,za as Ee}from"./chunk-A7Q3BSDL.mjs";import{A as ye,J as oe,cb as be,db as re,jb as Te,kb as Y,ra as ae,rc as R,sc as we}from"./chunk-HIT2747W.mjs";import{$a as x,$b as w,Aa as V,Cc as he,Dd as N,F as U,Fb as ge,Ga as D,Ib as xe,Ic as u,J as W,Jc as p,Kb as fe,Kc as Ie,L as y,La as _e,Ld as Ce,Nc as ne,Pb as f,Qb as F,Ra as Z,Rb as c,Sa as B,Tb as q,X as ue,Xb as l,Yb as _,Zb as I,_a as g,_b as T,_c as ve,a as A,bc as v,ca as pe,dc as h,ec as r,fb as z,g as b,gb as L,hc as J,mc as M,nc as k,oc as E,pc as ee,q as le,qc as te,sc as ie,ta as K,wb as m,x as O,xa as S,xb as C,y as X,yd as $}from"./chunk-PGJP43LT.mjs";import"./chunk-GHFNAT2I.mjs";function Oe(i,n){if(i&1&&I(0,"cx-carousel",3),i&2){let o=r().ngIf;r();let e=ee(3);c("items",o)("hideIndicators",!1)("template",e)}}function Le(i,n){if(i&1&&(T(0),f(1,Oe,1,3,"cx-carousel",2),w()),i&2){let o=n.ngIf;m(),c("ngIf",o.length)}}function Fe(i,n){if(i&1){let o=v();l(0,"cx-media",4),u(1,"async"),h("focus",function(){let t=g(o).item,a=r();return x(a.openImage(t.container))}),_()}if(i&2){let o=n.item,e=r();q("is-active",p(1,3,e.isActive(o.container))),c("container",o.container)}}var $e=["defaultImage"],Ne=["zoomContainer"],Ye=["zoomedImage"],je=["zoomButton"];function Qe(i,n){if(i&1){let o=v();l(0,"button",12),h("click",function(){let t=g(o).ngIf,a=r(3);return x(a.openImage(t.container))}),I(1,"cx-icon",13),_()}if(i&2){let o=r(3);m(),c("type",o.iconType.CARET_LEFT)}}function Ge(i,n){if(i&1){let o=v();l(0,"cx-media",18,0),h("loaded",function(){g(o);let t=r(4);return x(t.onImageLoad())}),_()}if(i&2){let o=r(3).ngIf;c("container",o)}}function He(i,n){if(i&1){let o=v();l(0,"div",19,1)(2,"cx-media",20,2),h("mousemove",function(t){g(o);let a=r(4);return x(a.pointerMove(t))})("touchmove",function(t){g(o);let a=r(4);return x(a.touchMove(t))})("touchend",function(){g(o);let t=r(4);return x(t.clearTouch())})("loaded",function(){g(o);let t=r(4);return x(t.onImageLoad())}),_()()}if(i&2){let o=r(3).ngIf;m(2),c("container",o)}}function Xe(i,n){if(i&1&&I(0,"cx-icon",23),i&2){let o=r(5);c("type",o.iconType.SEARCH_PLUS)}}function Ue(i,n){if(i&1&&I(0,"cx-icon",23),i&2){let o=r(5);c("type",o.iconType.SEARCH_MINUS)}}function We(i,n){if(i&1){let o=v();l(0,"button",21,3),u(2,"cxTranslate"),u(3,"cxTranslate"),u(4,"cxTranslate"),u(5,"cxTranslate"),h("click",function(){g(o);let t=r(4);return x(t.zoom())}),f(6,Xe,1,1,"cx-icon",22)(7,Ue,1,1,"cx-icon",22),_()}if(i&2){let o=r(4);J("title",o.isZoomed?p(2,4,"common.zoomOut"):p(3,6,"common.zoomIn")),F("aria-label",o.isZoomed?p(4,8,"common.zoomOut"):p(5,10,"common.zoomIn")),m(6),c("ngIf",!o.isZoomed),m(),c("ngIf",o.isZoomed)}}function Ke(i,n){if(i&1&&(l(0,"div",14),f(1,Ge,2,1,"cx-media",15)(2,He,4,1,"div",16)(3,We,8,12,"button",17),u(4,"async"),_()),i&2){let o=r(3);m(),c("ngIf",!o.isZoomed),m(),c("ngIf",o.isZoomed),m(),c("ngIf",p(4,3,o.imageLoaded))}}function qe(i,n){if(i&1&&I(0,"cx-media",25,0),i&2){let o=r(3).ngIf;c("container",o)}}function Je(i,n){if(i&1){let o=v();l(0,"div",19,1)(2,"cx-media",26,2),h("mousemove",function(t){g(o);let a=r(4);return x(a.pointerMove(t))})("touchmove",function(t){g(o);let a=r(4);return x(a.touchMove(t))})("touchend",function(){g(o);let t=r(4);return x(t.clearTouch())}),_()()}if(i&2){let o=r(3).ngIf;m(2),c("container",o)}}function et(i,n){if(i&1&&(T(0),f(1,qe,2,1,"cx-media",24)(2,Je,4,1,"div",16),w()),i&2){let o=r(3);m(),c("ngIf",!o.isZoomed),m(),c("ngIf",o.isZoomed)}}function tt(i,n){if(i&1){let o=v();l(0,"button",12),h("click",function(){let t=g(o).ngIf,a=r(3);return x(a.openImage(t.container))}),I(1,"cx-icon",13),_()}if(i&2){let o=r(3);m(),c("type",o.iconType.CARET_RIGHT)}}function it(i,n){if(i&1&&(l(0,"div",7)(1,"div",8),f(2,Qe,2,1,"button",9),u(3,"async"),_(),f(4,Ke,5,5,"div",10)(5,et,3,2,"ng-container",11),l(6,"div",8),f(7,tt,2,1,"button",9),u(8,"async"),_()()),i&2){let o=n.ngIf,e=r(2);m(2),c("ngIf",p(3,4,e.getPreviousProduct(o))),m(2),c("cxFeature","a11yKeyboardAccessibleZoom"),m(),c("cxFeature","!a11yKeyboardAccessibleZoom"),m(2),c("ngIf",p(8,6,e.getNextProduct(o)))}}function nt(i,n){if(i&1&&(T(0),f(1,it,9,8,"div",6),u(2,"async"),w()),i&2){let o=r();m(),c("ngIf",p(2,1,o.thumbnails$))}}var ot=["expandButton"];function at(i,n){if(i&1){let o=v();l(0,"button",3,0),h("click",function(){g(o);let t=r();return x(t.triggerZoom())}),te(2),u(3,"cxTranslate"),I(4,"cx-icon",4),_()}if(i&2){let o=r();m(2),ie(" ",p(3,2,"productImageZoomTrigger.expand")," "),m(2),c("type",o.iconType.EXPAND_ARROWS)}}function rt(i,n){if(i&1){let o=v();l(0,"button",5,0),h("click",function(){g(o);let t=r();return x(t.triggerZoom())}),l(2,"span"),te(3),u(4,"cxTranslate"),I(5,"cx-icon",4),_()()}if(i&2){let o=r();m(3),ie(" ",p(4,2,"productImageZoomTrigger.expand")," "),m(2),c("type",o.iconType.EXPAND_ARROWS)}}var ct=i=>({product:i});function st(i,n){if(i&1){let o=v();T(0),l(1,"cx-media",2),h("click",function(){g(o);let t=r();return x(t.triggerZoom(!0))}),_(),l(2,"cx-product-image-zoom-trigger",3),h("dialogClose",function(){g(o);let t=r();return x(t.triggerZoom(!1))}),_(),w()}if(i&2){let o=n.ngIf,e=r();m(),c("container",o),m(),c("expandImage",e.expandImage.value)("galleryIndex",e.selectedIndex)}}function mt(i,n){if(i&1&&(I(0,"cx-carousel",5),u(1,"cxTranslate")),i&2){let o=r().ngIf,e=r().ngIf;r();let t=ee(5);c("items",e)("hideIndicators",!1)("template",t),F("aria-label",Ie(1,4,"carousel.carouselForProduct",he(7,ct,o.name)))}}function dt(i,n){if(i&1&&(T(0),f(1,mt,2,9,"cx-carousel",4),w()),i&2){let o=r().ngIf;m(),c("ngIf",o.length)}}function lt(i,n){if(i&1&&(T(0),f(1,dt,2,1,"ng-container",1),u(2,"async"),w()),i&2){let o=r();m(),c("ngIf",p(2,1,o.product$))}}function ut(i,n){if(i&1){let o=v();l(0,"cx-media",6),u(1,"async"),h("focus",function(){let t=g(o).item,a=r();return x(a.openImage(t.container))}),_()}if(i&2){let o=n.item,e=r();q("is-active",p(1,3,e.isActive(o.container))),c("container",o.container)}}var pt=(()=>{let n=class n{constructor(){this.mainMediaContainer=new b({}),this.productImage=new L,this.subscription=new A}ngOnInit(){this.subscription.add(this.activeThumb.subscribe(e=>{this.mainMediaContainer.next(e)}))}openImage(e){this.mainMediaContainer.next(e),typeof e.zoom?.galleryIndex=="number"&&this.productImage.emit({image:e,index:e.zoom.galleryIndex})}isActive(e){return this.mainMediaContainer.asObservable().pipe(y(ae),O(t=>t.zoom?.url&&e.zoom?.url&&t.zoom.url===e.zoom.url))}ngOnDestroy(){this.subscription.unsubscribe()}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=Z({type:n,selectors:[["cx-product-image-zoom-thumbnails"]],inputs:{thumbs$:"thumbs$",activeThumb:"activeThumb"},outputs:{productImage:"productImage"},decls:4,vars:3,consts:[["thumb",""],[4,"ngIf"],["class","thumbs","itemWidth","70px",3,"items","hideIndicators","template",4,"ngIf"],["itemWidth","70px",1,"thumbs",3,"items","hideIndicators","template"],["tabindex","0",3,"focus","container"]],template:function(t,a){t&1&&(f(0,Le,2,1,"ng-container",1),u(1,"async"),f(2,Fe,2,5,"ng-template",null,0,ne)),t&2&&c("ngIf",p(1,1,a.thumbs$))},dependencies:[de,$,G,N],encapsulation:2,changeDetection:0});let i=n;return i})(),_t=(()=>{let n=class n{get defaultImage(){return this._defaultImage}set defaultImage(e){e&&(this._defaultImage=e,this.defaultImageReady.next(!0))}get zoomImage(){return this._zoomImage}set zoomImage(e){e&&(this._zoomImage=e,this.zoomReady.next(!0))}constructor(e,t,a,s){this.currentProductService=e,this.renderer=t,this.cdRef=a,this.breakpointService=s,this.iconType=j,this.mainMediaContainer=new b(null),this.defaultImageReady=new b(!1),this.zoomReady=new b(!1),this.imageLoaded=new b(!1),this.subscription=new A,this.mainMediaContainer$=this.mainMediaContainer.asObservable(),this.defaultImageReady$=this.defaultImageReady.asObservable(),this.zoomReady$=this.zoomReady.asObservable(),this.featureConfigService=_e(be),this.activeThumb=new L,this.defaultImageClickHandler$=this.defaultImageReady$.pipe(y(Boolean),S(d=>W(...this.clickOrDoubleClick(this.defaultImage)).pipe(V(()=>this.zoom())))),this.zoomImageClickHandler$=this.zoomReady$.pipe(y(Boolean),S(d=>W(...this.clickOrDoubleClick(this.zoomImage)).pipe(V(()=>this.zoom())))),this.startCoords=null,this.left=0,this.top=0,this.isZoomed=!1,this.product$=this.currentProductService.getProduct().pipe(y(ae),pe(),V(d=>{if(this.galleryIndex){let P=Array.isArray(d.images?.GALLERY)?d.images?.GALLERY.find(H=>H.zoom?.galleryIndex===this.galleryIndex):d.images?.GALLERY;this.mainMediaContainer.next(P||null)}else this.mainMediaContainer.next(d.images?.PRIMARY?d.images.PRIMARY:{})}),K(1)),this.thumbnails$=this.product$.pipe(O(d=>this.createThumbs(d)),K(1)),this.mainImage$=X([this.product$,this.mainMediaContainer$]).pipe(O(([,d])=>d)),Y("a11yKeyboardAccessibleZoom")}ngOnInit(){this.subscription.add(this.defaultImageClickHandler$.subscribe()),this.subscription.add(this.zoomImageClickHandler$.subscribe())}openImage(e){this.mainMediaContainer.next(e),this.activeThumb.emit(e)}getActive(){return Array.isArray(this.mainMediaContainer.value)?this.mainMediaContainer.value[0].thumbnail?.galleryIndex||0:this.mainMediaContainer?.value?.thumbnail?.galleryIndex||0}getPreviousProduct(e){let t=this.getActive();return t===0?e[t]:e[t-1]}getNextProduct(e){let t=this.getActive();return t===e.length-1?e[t]:e[t+1]}zoom(){this.isZoomed=!this.isZoomed,this.startCoords=null,this.left=0,this.top=0,this.cdRef.markForCheck(),this.featureConfigService.isEnabled("a11yKeyboardAccessibleZoom")&&(this.imageLoaded.next(!1),this.imageLoaded.pipe(y(Boolean),ue(1)).subscribe(()=>{setTimeout(()=>{this.zoomButton.nativeElement.focus()})}))}touchMove(e){let t=e.touches[0]||e.changedTouches[0],a=this.zoomedImage?.nativeElement?.getBoundingClientRect(),s=this.zoomedImage?.nativeElement?.firstChild;this.startCoords||(this.startCoords={x:t.clientX,y:t.clientY}),this.left+=t.clientX-this.startCoords.x,this.top+=t.clientY-this.startCoords.y,this.moveImage(this.left,this.top,a,s),this.startCoords={x:t.clientX,y:t.clientY}}clearTouch(){this.startCoords=null}pointerMove(e){let t=this.zoomedImage.nativeElement.getBoundingClientRect(),a=this.zoomedImage.nativeElement.firstChild,{positionX:s,positionY:d}=this.calculatePointerMovePosition(this.zoomedImage,e.clientX,e.clientY);this.moveImage(s,d,t,a)}changeImage(e){this.mainMediaContainer.next(e.image)}moveImage(e,t,a,s){let{x:d,y:P}=this.handleOutOfBounds(e,t,s,a);s&&(this.renderer.setStyle(s,"left",d+"px"),this.renderer.setStyle(s,"top",P+"px"))}ngOnDestroy(){this.subscription.unsubscribe()}clickOrDoubleClick(e){return[U(e.nativeElement,"click").pipe(S(()=>this.breakpointService.isUp(ce.md)),y(Boolean)),U(e.nativeElement,"dblclick").pipe(S(()=>this.breakpointService.isDown(ce.lg)),y(Boolean))]}createThumbs(e){return!e.images||!e.images.GALLERY||Array.isArray(e.images.GALLERY)&&e.images.GALLERY.length<2?[]:e.images.GALLERY.map(a=>le({container:a}))}handleOutOfBounds(e,t,a,s){return t<=-a?.height+60&&(t=-a?.height+60),t>=s?.height-60&&(t=s?.height-60),e<=-a?.width-s?.width/2+60&&(e=-a?.width-s?.width/2+60),e>=a?.width+s?.width/2-60&&(e=a?.width+s?.width/2-60),{x:e,y:t}}calculatePointerMovePosition(e,t,a){let s=e.nativeElement.getBoundingClientRect(),d=t-s.left,P=a-s.top,H=-d+e.nativeElement.clientWidth/2,Re=-P+e.nativeElement.clientHeight/2;return{positionX:H,positionY:Re}}onImageLoad(){this.imageLoaded.next(!0)}};n.\u0275fac=function(t){return new(t||n)(C(me),C(ge),C(ve),C(ke))},n.\u0275cmp=Z({type:n,selectors:[["cx-product-image-zoom-view"]],viewQuery:function(t,a){if(t&1&&(M($e,5,z),M(Ne,5,z),M(Ye,5,z),M(je,5)),t&2){let s;k(s=E())&&(a.defaultImage=s.first),k(s=E())&&(a.zoomImage=s.first),k(s=E())&&(a.zoomedImage=s.first),k(s=E())&&(a.zoomButton=s.first)}},inputs:{galleryIndex:"galleryIndex"},decls:3,vars:5,consts:[["defaultImage",""],["zoomContainer",""],["zoomedImage",""],["zoomButton",""],[4,"ngIf"],[3,"productImage","thumbs$","activeThumb"],["class","cx-main-image-group",4,"ngIf"],[1,"cx-main-image-group"],[1,"cx-navigate-image"],["class","btn btn-link",3,"click",4,"ngIf"],["class","cx-image-container",4,"cxFeature"],[4,"cxFeature"],[1,"btn","btn-link",3,"click"],[3,"type"],[1,"cx-image-container"],["class","cx-default-image-zoom",3,"container","loaded",4,"ngIf"],["class","cx-zoom-container",4,"ngIf"],["class","btn btn-link cx-zoom-btn",3,"title","click",4,"ngIf"],[1,"cx-default-image-zoom",3,"loaded","container"],[1,"cx-zoom-container"],[1,"cx-image-zoomed",3,"mousemove","touchmove","touchend","loaded","container"],[1,"btn","btn-link","cx-zoom-btn",3,"click","title"],["class","cx-zoom-indicator",3,"type",4,"ngIf"],[1,"cx-zoom-indicator",3,"type"],["class","cx-default-image-zoom",3,"container",4,"ngIf"],[1,"cx-default-image-zoom",3,"container"],[1,"cx-image-zoomed",3,"mousemove","touchmove","touchend","container"]],template:function(t,a){t&1&&(f(0,nt,3,3,"ng-container",4),u(1,"async"),l(2,"cx-product-image-zoom-thumbnails",5),h("productImage",function(d){return a.changeImage(d)}),_()),t&2&&(c("ngIf",p(1,3,a.mainImage$)),m(2),c("thumbs$",a.thumbnails$)("activeThumb",a.activeThumb))},dependencies:[$,Q,G,re,pt,N,R],encapsulation:2,changeDetection:0});let i=n;return i})(),gt=(()=>{let n=class n{handleClick(e){e.target.tagName===this.el.nativeElement.tagName&&this.close("Cross click")}constructor(e,t){this.launchDialogService=e,this.el=t,this.iconType=j,this.focusConfig={trap:!0,block:!0,autofocus:"button",focusOnEscape:!0},Y("a11yCloseProductImageBtnFocus")}close(e=""){this.launchDialogService.closeDialog(e)}};n.\u0275fac=function(t){return new(t||n)(C(se),C(z))},n.\u0275cmp=Z({type:n,selectors:[["cx-product-image-zoom-dialog"]],hostBindings:function(t,a){t&1&&h("click",function(d){return a.handleClick(d)})},inputs:{galleryIndex:"galleryIndex"},decls:10,vars:9,consts:[["role","dialog",1,"cx-image-zoom-dialog",3,"cxFocus"],[1,"cx-dialog-content"],[1,"cx-dialog-header"],["type","button",1,"close",3,"click","title"],["aria-hidden","true"],[3,"type"],[1,"cx-dialog-body"],[3,"galleryIndex"]],template:function(t,a){t&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),u(4,"cxTranslate"),u(5,"cxTranslate"),h("click",function(){return a.close("cross click")}),l(6,"span",4),I(7,"cx-icon",5),_()()(),l(8,"div",6),I(9,"cx-product-image-zoom-view",7),_()()()),t&2&&(c("cxFocus",a.focusConfig),m(3),J("title",p(4,5,"productImageZoomDialog.close")),F("aria-label",p(5,7,"productImageZoomDialog.close")),m(4),c("type",a.iconType.CLOSE),m(2),c("galleryIndex",a.galleryIndex))},dependencies:[Q,Pe,_t,R],encapsulation:2,changeDetection:0});let i=n;return i})(),xt={launch:{PRODUCT_IMAGE_ZOOM:{inline:!0,component:gt,dialogType:Ze.DIALOG}}},ft=(()=>{let n=class n{set expandImage(e){e&&this.triggerZoom()}constructor(e,t){this.launchDialogService=e,this.vcr=t,this.iconType=j,this.subscriptions=new A,this.dialogClose=new L,Y("a11yLinkBtnsToTertiaryBtns")}triggerZoom(){let e=this.launchDialogService.launch("PRODUCT_IMAGE_ZOOM",this.vcr);e&&this.subscriptions.add(X([e,this.launchDialogService.dialogClose]).pipe(V(([t])=>{this.galleryIndex&&(t.instance.galleryIndex=this.galleryIndex)}),y(([,t])=>!!t),V(([t])=>{this.launchDialogService.clear("PRODUCT_IMAGE_ZOOM"),t?.destroy(),this.dialogClose.emit(),this.expandButton.nativeElement.focus()})).subscribe())}ngOnDestroy(){this.subscriptions.unsubscribe()}};n.\u0275fac=function(t){return new(t||n)(C(se),C(xe))},n.\u0275cmp=Z({type:n,selectors:[["cx-product-image-zoom-trigger"]],viewQuery:function(t,a){if(t&1&&M(ot,5),t&2){let s;k(s=E())&&(a.expandButton=s.first)}},inputs:{galleryIndex:"galleryIndex",expandImage:"expandImage"},outputs:{dialogClose:"dialogClose"},decls:2,vars:2,consts:[["expandButton",""],["class","btn btn-tertiary",3,"click",4,"cxFeature"],["class","btn btn-link cx-action-link",3,"click",4,"cxFeature"],[1,"btn","btn-tertiary",3,"click"],[3,"type"],[1,"btn","btn-link","cx-action-link",3,"click"]],template:function(t,a){t&1&&f(0,at,5,4,"button",1)(1,rt,6,4,"button",2),t&2&&(c("cxFeature","a11yLinkBtnsToTertiaryBtns"),m(),c("cxFeature","!a11yLinkBtnsToTertiaryBtns"))},dependencies:[Q,re,R],encapsulation:2,changeDetection:0});let i=n;return i})(),ht=(()=>{let n=class n extends De{constructor(e){super(e),this.currentProductService=e,this.expandImage=new b(!1),this.product$=this.product$}openImage(e){this.mainMediaContainer.next(e),this.selectedIndex=this.mainMediaContainer.value?.zoom?.galleryIndex}triggerZoom(e){this.expandImage.next(e)}};n.\u0275fac=function(t){return new(t||n)(C(me))},n.\u0275cmp=Z({type:n,selectors:[["cx-product-images"]],features:[fe],decls:6,vars:6,consts:[["thumb",""],[4,"ngIf"],[3,"click","container"],[3,"dialogClose","expandImage","galleryIndex"],["role","region","tabindex","-1","class","thumbs","itemWidth","120px",3,"items","hideIndicators","template",4,"ngIf"],["role","region","tabindex","-1","itemWidth","120px",1,"thumbs",3,"items","hideIndicators","template"],["tabindex","0","format","product",3,"focus","container"]],template:function(t,a){t&1&&(f(0,st,3,3,"ng-container",1),u(1,"async"),f(2,lt,3,3,"ng-container",1),u(3,"async"),f(4,ut,2,5,"ng-template",null,0,ne)),t&2&&(c("ngIf",p(1,2,a.mainImage$)),m(2),c("ngIf",p(3,4,a.thumbs$)))},dependencies:[de,$,G,ft,N,R],encapsulation:2,changeDetection:0});let i=n;return i})(),It=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=B({type:n}),n.\u0275inj=D({providers:[oe(xt),oe({cmsComponents:{ProductImagesComponent:{component:ht}}})],imports:[Se,Ce,we,Me,Ve,Ee,ze,ye,Te]});let i=n;return i})(),Be=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=B({type:n}),n.\u0275inj=D({imports:[It]});let i=n;return i})();var Lt=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=B({type:n}),n.\u0275inj=D({imports:[Be]});let i=n;return i})();export{Lt as ProductImageZoomModule};
