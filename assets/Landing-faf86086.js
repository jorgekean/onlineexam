import{u as $,j as e,C as Me,c as L,a as He,b as Ue,d as Ke,e as Je,f as Ne,i as qe,o as Ye,g as Ve,l as Ge,h as fe,k as oe,m as ge,n as Qe,p as Xe,r as Ze,q as xe,s as we,t as l,v as et,w as tt,F as be,x as X,y as at,z as nt,A as rt,L as st,B as ot,D as lt,T as it,S as ct,E as dt,G as mt,N as ve,H as z,I as ht,J as F,K as M,M as le,R as C,O as m,P as j,Q as g,U as x,V as w}from"./main-032006a1.js";import{r as i,a as d}from"./chartjs-20842a94.js";import{R as ut,P as u}from"./googlemaps-815f2fd8.js";import"./apexcharts-042e6b4d.js";import"./vectormaps-f0da19f8.js";/* empty css              */function ke(t,n){return Array.isArray(t)?t.includes(n):t===n}const Oe=i.createContext({});Oe.displayName="AccordionContext";const q=Oe,Ee=i.forwardRef(({as:t="div",bsPrefix:n,className:a,children:r,eventKey:s,...o},c)=>{const{activeEventKey:p}=i.useContext(q);return n=$(n,"accordion-collapse"),e(Me,{ref:c,in:ke(p,s),...o,className:L(a,n),children:e(t,{children:i.Children.only(r)})})});Ee.displayName="AccordionCollapse";const Ce=Ee,je=i.createContext({eventKey:""});je.displayName="AccordionItemContext";const ie=je,Se=i.forwardRef(({as:t="div",bsPrefix:n,className:a,onEnter:r,onEntering:s,onEntered:o,onExit:c,onExiting:p,onExited:h,...b},N)=>{n=$(n,"accordion-body");const{eventKey:k}=i.useContext(ie);return e(Ce,{eventKey:k,onEnter:r,onEntering:s,onEntered:o,onExit:c,onExiting:p,onExited:h,children:e(t,{ref:N,...b,className:L(a,n)})})});Se.displayName="AccordionBody";const pt=Se;function ft(t,n){const{activeEventKey:a,onSelect:r,alwaysOpen:s}=i.useContext(q);return o=>{let c=t===a?null:t;s&&(Array.isArray(a)?a.includes(t)?c=a.filter(p=>p!==t):c=[...a,t]:c=[t]),r==null||r(c,o),n==null||n(o)}}const Ae=i.forwardRef(({as:t="button",bsPrefix:n,className:a,onClick:r,...s},o)=>{n=$(n,"accordion-button");const{eventKey:c}=i.useContext(ie),p=ft(c,r),{activeEventKey:h}=i.useContext(q);return t==="button"&&(s.type="button"),e(t,{ref:o,onClick:p,...s,"aria-expanded":Array.isArray(h)?h.includes(c):c===h,className:L(a,n,!ke(h,c)&&"collapsed")})});Ae.displayName="AccordionButton";const Re=Ae,Te=i.forwardRef(({as:t="h2",bsPrefix:n,className:a,children:r,onClick:s,...o},c)=>(n=$(n,"accordion-header"),e(t,{ref:c,...o,className:L(a,n),children:e(Re,{onClick:s,children:r})})));Te.displayName="AccordionHeader";const gt=Te,Be=i.forwardRef(({as:t="div",bsPrefix:n,className:a,eventKey:r,...s},o)=>{n=$(n,"accordion-item");const c=i.useMemo(()=>({eventKey:r}),[r]);return e(ie.Provider,{value:c,children:e(t,{ref:o,...s,className:L(a,n)})})});Be.displayName="AccordionItem";const bt=Be,De=i.forwardRef((t,n)=>{const{as:a="div",activeKey:r,bsPrefix:s,className:o,onSelect:c,flush:p,alwaysOpen:h,...b}=He(t,{activeKey:"onSelect"}),N=$(s,"accordion"),k=i.useMemo(()=>({activeEventKey:r,onSelect:c,alwaysOpen:h}),[r,c,h]);return e(q.Provider,{value:k,children:e(a,{ref:n,...b,className:L(o,N,p&&`${N}-flush`)})})});De.displayName="Accordion";const K=Object.assign(De,{Button:Re,Collapse:Ce,Item:bt,Header:gt,Body:pt}),Z=2**31-1;function Pe(t,n,a){const r=a-Date.now();t.current=r<=Z?setTimeout(n,r):setTimeout(()=>Pe(t,n,a),Z)}function vt(){const t=Ue(),n=i.useRef();return Ke(()=>clearTimeout(n.current)),i.useMemo(()=>{const a=()=>clearTimeout(n.current);function r(s,o=0){t()&&(a(),o<=Z?n.current=setTimeout(s,o):Pe(n,s,Date.now()+o))}return{set:r,clear:a}},[])}const yt=()=>{};function Nt(t,n,{disabled:a,clickTrigger:r}={}){const s=n||yt;Je(t,s,{disabled:a,clickTrigger:r});const o=Ne(c=>{qe(c)&&s(c)});i.useEffect(()=>{if(a||t==null)return;const c=Ye(Ve(t));let p=(c.defaultView||window).event;const h=Ge(c,"keyup",b=>{if(b===p){p=void 0;return}o(b)});return()=>{h()}},[t,a,o])}const _e=i.forwardRef((t,n)=>{const{flip:a,offset:r,placement:s,containerPadding:o,popperConfig:c={},transition:p,runTransition:h}=t,[b,N]=fe(),[k,A]=fe(),O=oe(N,n),y=ge(t.container),P=ge(t.target),[f,E]=i.useState(!t.show),v=Qe(P,b,Xe({placement:s,enableEvents:!!t.show,containerPadding:o||5,flip:a,offset:r,arrowElement:k,popperConfig:c}));t.show&&f&&E(!1);const _=(...V)=>{E(!0),t.onExited&&t.onExited(...V)},I=t.show||!f;if(Nt(b,t.onHide,{disabled:!t.rootClose||t.rootCloseDisabled,clickTrigger:t.rootCloseEvent}),!I)return null;const{onExit:H,onExiting:R,onEnter:T,onEntering:U,onEntered:Y}=t;let J=t.children(Object.assign({},v.attributes.popper,{style:v.styles.popper,ref:O}),{popper:v,placement:s,show:!!t.show,arrowProps:Object.assign({},v.attributes.arrow,{style:v.styles.arrow,ref:A})});return J=Ze(p,h,{in:!!t.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:J,onExit:H,onExiting:R,onExited:_,onEnter:T,onEntering:U,onEntered:Y}),y?ut.createPortal(J,y):null});_e.displayName="Overlay";const xt=_e,wt=xe("popover-header"),$e=xe("popover-body");function Le(t,n){let a=t;return t==="left"?a=n?"end":"start":t==="right"&&(a=n?"start":"end"),a}function ze(t="absolute"){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const kt=i.forwardRef(({bsPrefix:t,placement:n="right",className:a,style:r,children:s,body:o,arrowProps:c,hasDoneInitialMeasure:p,popper:h,show:b,...N},k)=>{const A=$(t,"popover"),O=we(),[y]=(n==null?void 0:n.split("-"))||[],P=Le(y,O);let f=r;return b&&!p&&(f={...r,...ze(h==null?void 0:h.strategy)}),l("div",{ref:k,role:"tooltip",style:f,"x-placement":y,className:L(a,A,y&&`bs-popover-${P}`),...N,children:[e("div",{className:"popover-arrow",...c}),o?e($e,{children:s}):s]})}),Ot=Object.assign(kt,{Header:wt,Body:$e,POPPER_OFFSET:[0,8]});function Et(t){const n=i.useRef(null),a=$(void 0,"popover"),r=i.useMemo(()=>({name:"offset",options:{offset:()=>n.current&&et(n.current,a)?t||Ot.POPPER_OFFSET:t||[0,0]}}),[t,a]);return[n,[r]]}function Ct(t,n){const{ref:a}=t,{ref:r}=n;t.ref=a.__wrapped||(a.__wrapped=s=>a(X(s))),n.ref=r.__wrapped||(r.__wrapped=s=>r(X(s)))}const Ie=i.forwardRef(({children:t,transition:n=be,popperConfig:a={},rootClose:r=!1,placement:s="top",show:o=!1,...c},p)=>{const h=i.useRef({}),[b,N]=i.useState(null),[k,A]=Et(c.offset),O=oe(p,k),y=n===!0?be:n||void 0,P=Ne(f=>{N(f),a==null||a.onFirstUpdate==null||a.onFirstUpdate(f)});return tt(()=>{b&&(h.current.scheduleUpdate==null||h.current.scheduleUpdate())},[b]),i.useEffect(()=>{o||N(null)},[o]),e(xt,{...c,ref:O,popperConfig:{...a,modifiers:A.concat(a.modifiers||[]),onFirstUpdate:P},transition:y,rootClose:r,placement:s,show:o,children:(f,{arrowProps:E,popper:v,show:_})=>{var I,H;Ct(f,E);const R=v==null?void 0:v.placement,T=Object.assign(h.current,{state:v==null?void 0:v.state,scheduleUpdate:v==null?void 0:v.update,placement:R,outOfBoundaries:(v==null||(I=v.state)==null||(H=I.modifiersData.hide)==null?void 0:H.isReferenceHidden)||!1,strategy:a.strategy}),U=!!b;return typeof t=="function"?t({...f,placement:R,show:_,...!n&&_&&{className:"show"},popper:T,arrowProps:E,hasDoneInitialMeasure:U}):i.cloneElement(t,{...f,placement:R,arrowProps:E,popper:T,hasDoneInitialMeasure:U,className:L(t.props.className,!n&&_&&"show"),style:{...t.props.style,...f.style}})}})});Ie.displayName="Overlay";const jt=Ie;function St(t){return t&&typeof t=="object"?t:{show:t,hide:t}}function ye(t,n,a){const[r]=n,s=r.currentTarget,o=r.relatedTarget||r.nativeEvent[a];(!o||o!==s)&&!rt(s,o)&&t(...n)}function B({trigger:t=["hover","focus"],overlay:n,children:a,popperConfig:r={},show:s,defaultShow:o=!1,onToggle:c,delay:p,placement:h,flip:b=h&&h.indexOf("auto")!==-1,...N}){const k=i.useRef(null),A=oe(k,a.ref),O=vt(),y=i.useRef(""),[P,f]=at(s,o,c),E=St(p),{onFocus:v,onBlur:_,onClick:I}=typeof a!="function"?i.Children.only(a).props:{},H=S=>{A(X(S))},R=i.useCallback(()=>{if(O.clear(),y.current="show",!E.show){f(!0);return}O.set(()=>{y.current==="show"&&f(!0)},E.show)},[E.show,f,O]),T=i.useCallback(()=>{if(O.clear(),y.current="hide",!E.hide){f(!1);return}O.set(()=>{y.current==="hide"&&f(!1)},E.hide)},[E.hide,f,O]),U=i.useCallback((...S)=>{R(),v==null||v(...S)},[R,v]),Y=i.useCallback((...S)=>{T(),_==null||_(...S)},[T,_]),J=i.useCallback((...S)=>{f(!P),I==null||I(...S)},[I,f,P]),V=i.useCallback((...S)=>{ye(R,S,"fromElement")},[R]),We=i.useCallback((...S)=>{ye(T,S,"toElement")},[T]),G=t==null?[]:[].concat(t),W={ref:H};return G.indexOf("click")!==-1&&(W.onClick=J),G.indexOf("focus")!==-1&&(W.onFocus=U,W.onBlur=Y),G.indexOf("hover")!==-1&&(W.onMouseOver=V,W.onMouseOut=We),l(nt,{children:[typeof a=="function"?a(W):i.cloneElement(a,W),e(jt,{...N,show:P,onHide:T,flip:b,placement:h,popperConfig:r,target:k.current,children:n})]})}const Fe=i.forwardRef(({bsPrefix:t,placement:n="right",className:a,style:r,children:s,arrowProps:o,hasDoneInitialMeasure:c,popper:p,show:h,...b},N)=>{t=$(t,"tooltip");const k=we(),[A]=(n==null?void 0:n.split("-"))||[],O=Le(A,k);let y=r;return h&&!c&&(y={...r,...ze(p==null?void 0:p.strategy)}),l("div",{ref:N,style:y,role:"tooltip","x-placement":A,className:L(a,t,`bs-tooltip-${O}`),...b,children:[e("div",{className:"tooltip-arrow",...o}),e("div",{className:`${t}-inner`,children:s})]})});Fe.displayName="Tooltip";const D=Fe;function ee(){return ee=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},ee.apply(this,arguments)}function At(t,n){if(t==null)return{};var a=Rt(t,n),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function Rt(t,n){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var ce=i.forwardRef(function(t,n){var a=t.color,r=a===void 0?"currentColor":a,s=t.size,o=s===void 0?24:s,c=At(t,["color","size"]);return d.createElement("svg",ee({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),d.createElement("polyline",{points:"16 18 22 12 16 6"}),d.createElement("polyline",{points:"8 6 2 12 8 18"}))});ce.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};ce.displayName="Code";const Tt=ce;function te(){return te=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},te.apply(this,arguments)}function Bt(t,n){if(t==null)return{};var a=Dt(t,n),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function Dt(t,n){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var de=i.forwardRef(function(t,n){var a=t.color,r=a===void 0?"currentColor":a,s=t.size,o=s===void 0?24:s,c=Bt(t,["color","size"]);return d.createElement("svg",te({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),d.createElement("polyline",{points:"8 17 12 21 16 17"}),d.createElement("line",{x1:"12",y1:"12",x2:"12",y2:"21"}),d.createElement("path",{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}))});de.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};de.displayName="DownloadCloud";const Pt=de;function ae(){return ae=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},ae.apply(this,arguments)}function _t(t,n){if(t==null)return{};var a=$t(t,n),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function $t(t,n){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var me=i.forwardRef(function(t,n){var a=t.color,r=a===void 0?"currentColor":a,s=t.size,o=s===void 0?24:s,c=_t(t,["color","size"]);return d.createElement("svg",ae({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),d.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),d.createElement("polyline",{points:"22,6 12,13 2,6"}))});me.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};me.displayName="Mail";const Lt=me;function ne(){return ne=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},ne.apply(this,arguments)}function zt(t,n){if(t==null)return{};var a=It(t,n),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function It(t,n){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var he=i.forwardRef(function(t,n){var a=t.color,r=a===void 0?"currentColor":a,s=t.size,o=s===void 0?24:s,c=zt(t,["color","size"]);return d.createElement("svg",ne({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),d.createElement("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),d.createElement("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),d.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),d.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),d.createElement("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),d.createElement("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),d.createElement("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),d.createElement("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),d.createElement("line",{x1:"17",y1:"16",x2:"23",y2:"16"}))});he.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};he.displayName="Sliders";const Ft=he;function re(){return re=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},re.apply(this,arguments)}function Wt(t,n){if(t==null)return{};var a=Mt(t,n),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function Mt(t,n){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var ue=i.forwardRef(function(t,n){var a=t.color,r=a===void 0?"currentColor":a,s=t.size,o=s===void 0?24:s,c=Wt(t,["color","size"]);return d.createElement("svg",re({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),d.createElement("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),d.createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}))});ue.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};ue.displayName="Smartphone";const Ht=ue;function se(){return se=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},se.apply(this,arguments)}function Ut(t,n){if(t==null)return{};var a=Kt(t,n),r,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function Kt(t,n){if(t==null)return{};var a={},r=Object.keys(t),s,o;for(o=0;o<r.length;o++)s=r[o],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var pe=i.forwardRef(function(t,n){var a=t.color,r=a===void 0?"currentColor":a,s=t.size,o=s===void 0?24:s,c=Ut(t,["color","size"]);return d.createElement("svg",se({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),d.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),d.createElement("circle",{cx:"9",cy:"7",r:"4"}),d.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),d.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))});pe.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};pe.displayName="Users";const Jt=pe,qt=()=>i.useContext(st),Yt="/onlineexam/assets/mixed.jpg",Vt="/onlineexam/assets/theme-default.jpg",Gt="/onlineexam/assets/theme-dark.jpg",Qt="/onlineexam/assets/theme-colored.jpg",Xt="/onlineexam/assets/theme-light.jpg",Zt="/onlineexam/assets/sidebar-compact.jpg",ea="/onlineexam/assets/sidebar-right.jpg",ta="/onlineexam/assets/theme-default.jpg",aa="/onlineexam/assets/dashboard-analytics.jpg",na="/onlineexam/assets/dashboard-saas.jpg",ra="/onlineexam/assets/dashboard-social.jpg",sa="/onlineexam/assets/dashboard-crypto.jpg",oa="/onlineexam/assets/pages-projects-list.jpg",Q="/onlineexam/assets/bootstrap.svg",la="/onlineexam/assets/react.svg",ia="/onlineexam/assets/redux.svg",ca="/onlineexam/assets/react-router.svg",da="/onlineexam/assets/firebase.svg",ma="/onlineexam/assets/cognito.svg",ha="/onlineexam/assets/auth0.svg",ua="/onlineexam/assets/jwt.svg",pa="/onlineexam/assets/eslint.svg",fa="/onlineexam/assets/javascript.svg",ga="/onlineexam/assets/typescript.svg",ba=()=>e(ve,{expand:"md",className:"landing-navbar",children:l(z,{children:[l(ve.Brand,{className:"landing-brand",href:"/",children:[e(ht,{})," AppStack"," ",e(F,{as:"sup",bg:"",className:"badge-soft-primary p-1",children:"React"})]}),l(M,{className:"ms-auto",navbar:!0,children:[e(M.Item,{className:"d-none d-md-inline-block",children:e(M.Link,{href:"/dashboard/default",target:"_blank",rel:"noreferrer",active:!0,className:"text-lg px-lg-3",children:"Live Preview"})}),e(M.Item,{children:e(M.Link,{href:"/docs/introduction",target:"_blank",rel:"noreferrer",active:!0,className:"text-lg px-lg-3",children:"Documentation"})}),e(M.Item,{className:"d-none d-md-inline-block",children:e(M.Link,{href:"mailto:support@bootlab.io",active:!0,className:"text-lg px-lg-3",children:"Support"})})]}),e(le,{href:"https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/",target:"_blank",rel:"noopener noreferrer",variant:"success",className:"ms-2 btn-pill",size:"lg",children:"Get AppStack"})]})}),va=()=>e("section",{className:"landing-intro pt-5 pt-lg-6 pb-5 pb-lg-7",children:e(z,{className:"landing-intro-content",children:l(C,{className:"align-items-center",children:[l(m,{lg:"5",className:"mx-auto",children:[e(F,{bg:"",className:"badge-soft-primary p-1",children:"v3.1.0"}),l("div",{className:"my-4",children:[e(B,{placement:"bottom",overlay:e(D,{children:"Available for JavaScript"}),children:e("img",{width:"40",height:"40",src:fa,alt:"JavaScript",className:"d-inline-block me-2"})}),e(B,{placement:"bottom",overlay:e(D,{children:"Available for TypeScript"}),children:e("img",{width:"40",height:"40",src:ga,alt:"TypeScript",className:"d-inline-block"})})]}),l("h1",{className:"my-4",children:["Fully-featured Dashboard Template based on"," ",e("span",{className:"text-primary",children:"React & Bootstrap"})]}),e("p",{className:"text-lg",children:"A professional package that comes with hundreds of UI components, forms, tables, charts, dashboards, pages and svg icons."}),l("div",{className:"my-4",children:[l("div",{className:"d-inline-block me-3",children:[e("h2",{className:"text-dark",children:"500+"}),e("span",{className:"text-muted",children:"UI Components"})]}),l("div",{className:"d-inline-block me-3",children:[e("h2",{className:"text-dark",children:"1500+"}),e("span",{className:"text-muted",children:"SVG Icons"})]}),l("div",{className:"d-inline-block",children:[e("h2",{className:"text-dark",children:"45+"}),e("span",{className:"text-muted",children:"Pages"})]})]}),l("div",{className:"my-4",children:[e("a",{href:"#demos",className:"btn btn-primary btn-pill btn-lg me-2",children:"Live Demo"}),e("a",{href:"https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/",target:"_blank",rel:"noreferrer",className:"btn btn-outline-primary btn-pill btn-lg me-1",children:"Purchase"})]})]}),e(m,{lg:"7",className:"d-none d-lg-flex mx-auto text-center",children:e("div",{className:"landing-intro-screenshot pb-3",children:e("img",{src:Yt,alt:"Dark/Light Bootstrap React Admin Template",className:"img-fluid"})})})]})})}),ya=()=>e("section",{className:"py-6 bg-white",children:e(z,{className:"position-relative z-3",children:e(C,{children:l(m,{md:"12",className:"mx-auto text-center",children:[e(C,{children:e("div",{className:"col-lg-10 col-xl-9 mx-auto",children:l("div",{className:"mb-4",children:[e("span",{className:"text-uppercase text-primary text-sm fw-medium mb-1 d-block",children:"Demos"}),e("h2",{className:"h1 mb-3",children:"Multiple color schemes & layouts"}),e("p",{className:"text-muted fs-lg",children:"4 Pre-built color schemes and multiple layout types are available to make this template your very own. All the color schemes can take variation in color and styling, that can easily be modified using Sass variables."})]})})}),l(C,{children:[l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/default?theme=default",children:e("img",{src:Vt,className:"img-fluid rounded-lg landing-img",alt:"Bootstrap 5 Dashboard Theme"})}),e("h4",{children:"Default"})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/default?sidebarBehavior=compact",children:e("img",{src:Zt,className:"img-fluid rounded-lg landing-img",alt:"Compact Sidebar Bootstrap 5 Dashboard Theme"})}),l("h4",{children:["Compact sidebar"," ",e("sup",{children:e(F,{as:"small",bg:"primary",children:"New"})})]})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/default?theme=dark",children:e("img",{src:Gt,className:"img-fluid rounded-lg landing-img",alt:"Dark Bootstrap 5 Dashboard Theme"})}),l("h4",{children:["Dark"," ",e("sup",{children:e(F,{as:"small",bg:"primary",children:"New"})})]})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/default?theme=colored",children:e("img",{src:Qt,className:"img-fluid rounded-lg landing-img",alt:"Colored Bootstrap 5 Dashboard Theme"})}),l("h4",{children:["Colored"," ",e("sup",{children:e(F,{as:"small",bg:"primary",children:"New"})})]})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/default?theme=light",children:e("img",{src:Xt,className:"img-fluid rounded-lg landing-img",alt:"Light Bootstrap 5 Dashboard Theme"})}),e("h4",{children:"Light"})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/default?sidebarPosition=right",children:e("img",{src:ea,className:"img-fluid rounded-lg landing-img",alt:"Right Sidebar Bootstrap 5 Dashboard Theme"})}),l("h4",{children:["Right sidebar"," ",e("sup",{children:e(F,{as:"small",bg:"primary",children:"New"})})]})]})]})]})})})}),Na=()=>e("section",{className:"pt-6",children:e(z,{children:e(C,{children:e(m,{md:"10",className:"mx-auto text-center",children:l("div",{className:"mb-5",children:[e("span",{className:"text-uppercase text-primary text-sm fw-medium mb-1 d-block",children:"Integrations"}),e("h2",{className:"h1",children:"Launch faster with ready-to-deploy integrations"}),e("p",{className:"text-muted fs-lg",children:"AppStack React includes multiple ready-to-deploy integrations, including Redux, ESLint, Prettier, Auth0, Firebase Authentication, Amazon Cognito & JSON Web Token Authentication."}),l("div",{className:"my-4",children:[e(B,{placement:"bottom",overlay:e(D,{children:"React v18"}),children:e("div",{className:"landing-integration",children:e("img",{src:la,alt:"React v18"})})}),e(B,{placement:"bottom",overlay:e(D,{children:"Redux"}),children:e("div",{className:"landing-integration",children:e("img",{src:ia,alt:"Redux"})})}),e(B,{placement:"bottom",overlay:e(D,{children:"React Router v6"}),children:e("div",{className:"landing-integration",children:e("img",{src:ca,alt:"React Router v6",height:"36",style:{margin:"2px 0"}})})}),e(B,{placement:"bottom",overlay:e(D,{children:"Firebase Authentication"}),children:e("div",{className:"landing-integration",children:e("img",{src:da,alt:"Firebase Authentication"})})}),e(B,{placement:"bottom",overlay:e(D,{children:"Amazon Cognito"}),children:e("div",{className:"landing-integration",children:e("img",{src:ma,alt:"Amazon Cognito"})})}),e(B,{placement:"bottom",overlay:e(D,{children:"Auth0"}),children:e("div",{className:"landing-integration",children:e("img",{src:ha,alt:"Auth0"})})}),e(B,{placement:"bottom",overlay:e(D,{children:"JSON Web Token"}),children:e("div",{className:"landing-integration",children:e("img",{src:ua,alt:"JSON Web Token"})})}),e(B,{placement:"bottom",overlay:e(D,{children:"ESLint"}),children:e("div",{className:"landing-integration",children:e("img",{src:pa,alt:"ESLint"})})})]}),e(le,{variant:"primary",size:"lg",as:"a",href:"/docs/introduction",target:"_blank",rel:"noreferrer",children:"Open documentation"})]})})})})}),xa=()=>e("section",{className:"py-6",children:l(z,{children:[l("div",{className:"mb-5 text-center",children:[e("span",{className:"text-uppercase text-primary text-sm fw-medium mb-1 d-block",children:"Reviews"}),e("h2",{className:"h1",children:"Developers love AppStack React"}),e("p",{className:"text-muted fs-lg",children:"Here's what some of our 5,000+ customers have to say about working with our products."})]}),l(C,{children:[e(m,{md:"6",lg:"4",children:e(g,{as:"blockquote",className:"landing-quote border",children:l(g.Body,{className:"p-4",children:[l("div",{className:"d-flex align-items-center mb-3",children:[e("div",{children:e("img",{src:Q,width:"48",height:"48",alt:"Bootstrap"})}),l("div",{className:"ps-3",children:[e("h5",{className:"mb-1 mt-2",children:"Nikita"}),e("small",{className:"d-block text-muted h5 fw-normal",children:"Head of Product"})]})]}),l("p",{className:"lead mb-2",children:["“We are totally amazed with a simplicity and the design of the template."," ",e("span",{children:"Probably saved us hundreds of hours of development."})," ","We are absolutely amazed with the support Bootlab has provided us.”"]}),l("div",{className:"landing-stars",children:[e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w})]})]})})}),e(m,{md:"6",lg:"4",children:e(g,{as:"blockquote",className:"landing-quote border",children:l(g.Body,{className:"p-4",children:[l("div",{className:"d-flex align-items-center mb-3",children:[e("div",{children:e("img",{src:Q,width:"48",height:"48",alt:"Bootstrap"})}),l("div",{className:"ps-3",children:[e("h5",{className:"mb-1 mt-2",children:"Alejandro"}),e("small",{className:"d-block text-muted h5 fw-normal",children:"Back-end Developer"})]})]}),l("p",{className:"lead mb-2",children:["“Everything is so properly set up that"," ",e("span",{children:"any new additions I'd make would feel like a native extension of the theme"})," ","versus a simple hack. I definitely feel like this will save me hundredths of hours I'd otherwise spend on designing.”"]}),l("div",{className:"landing-stars",children:[e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w})]})]})})}),e(m,{md:"6",lg:"4",className:"d-block d-md-none d-lg-block",children:e(g,{as:"blockquote",className:"landing-quote border",children:l(g.Body,{className:"p-4",children:[l("div",{className:"d-flex align-items-center mb-3",children:[e("div",{children:e("img",{src:Q,width:"48",height:"48",alt:"Bootstrap"})}),l("div",{className:"ps-3",children:[e("h5",{className:"mb-1 mt-2",children:"Jordi"}),e("small",{className:"d-block text-muted h5 fw-normal",children:"Front-end Developer"})]})]}),l("p",{className:"lead mb-2",children:["“I ran into a problem and contacted support. Within 24 hours, I not only received a response but even an updated version that solved my problem and works like a charm."," ",e("span",{children:"Fantastic customer service!"}),"”"]}),l("div",{className:"landing-stars",children:[e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w}),e(x,{icon:w})]})]})})})]})]})}),wa=()=>e("section",{className:"py-6 bg-white",id:"demos",children:e(z,{className:"position-relative z-3",children:e(C,{children:l(m,{md:"12",className:"mx-auto text-center",children:[e(C,{children:e("div",{className:"col-lg-10 col-xl-9 mx-auto",children:l("div",{className:"mb-4",children:[e("span",{className:"text-uppercase text-primary text-sm fw-medium mb-1 d-block",children:"Demos"}),e("h2",{className:"h1 mb-3",children:"Multiple dashboards & pages"}),e("p",{className:"text-muted fs-lg",children:"5 Dashboards and 40+ Pages featuring various components, giving you the freedom of choosing and combining. All components can take variation in color and styling, that can easily be modified using Sass."})]})})}),l(C,{children:[l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/default",children:e("img",{src:ta,className:"img-fluid rounded-lg landing-img",alt:"Bootstrap 5 Dashboard Theme"})}),e("h4",{children:"Default Dashboard"})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/analytics",children:e("img",{src:aa,className:"img-fluid rounded-lg landing-img",alt:"Analytics Bootstrap 5 Dashboard Theme"})}),e("h4",{children:"Analytics Dashboard"})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/saas",children:e("img",{src:na,className:"img-fluid rounded-lg landing-img",alt:"SaaS Bootstrap 5 Dashboard Theme"})}),e("h4",{children:"SaaS Dashboard"})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/social",children:e("img",{src:ra,className:"img-fluid rounded-lg landing-img",alt:"Social Bootstrap 5 Dashboard Theme"})}),e("h4",{children:"Social Dashboard"})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/dashboard/crypto",children:e("img",{src:sa,className:"img-fluid rounded-lg landing-img",alt:"Crypto Bootstrap 5 Dashboard Theme"})}),l("h4",{children:["Crypto Dashboard"," ",e("sup",{children:e(F,{as:"small",bg:"primary",children:"New"})})]})]}),l(m,{md:"4",className:"py-3",children:[e(j,{className:"d-block mb-3 mx-1",target:"_blank",rel:"noreferrer",to:"/pages/projects",children:e("img",{src:oa,className:"img-fluid rounded-lg landing-img",alt:"Projects Bootstrap 5 Dashboard Theme"})}),l("h4",{children:["Projects Dashboard"," ",e("sup",{children:e(F,{as:"small",bg:"primary",children:"New"})})]})]})]})]})})})}),ka=()=>e("section",{className:"py-6",children:e(z,{children:e(C,{children:l(m,{md:"10",className:"mx-auto text-center",children:[l("div",{className:"mb-5",children:[e("span",{className:"text-uppercase text-primary text-sm fw-medium mb-1 d-block",children:"Features"}),e("h2",{className:"h1",children:"Features you'll love"}),e("p",{className:"text-muted text-lg",children:"A responsive dashboard built for everyone who wants to create webapps on top of Bootstrap & React."})]}),l(C,{className:"text-start",children:[e(m,{md:"6",children:l("div",{className:"d-flex py-3",children:[e("div",{className:"landing-feature",children:e(Ft,{})}),l("div",{className:"flex-grow-1",children:[e("h4",{className:"mt-0",children:"Customizable"}),e("p",{className:"fs-lg",children:"You don't need to be an expert to customize our themes. Our code is very readable and well documented."})]})]})}),e(m,{md:"6",children:l("div",{className:"d-flex py-3",children:[e("div",{className:"landing-feature",children:e(Ht,{})}),l("div",{className:"flex-grow-1",children:[e("h4",{className:"mt-0",children:"Fully Responsive"}),e("p",{className:"fs-lg",children:"With mobile, tablet & desktop support it doesn't matter what device you're using. AdminKit is responsive in all browsers."})]})]})}),e(m,{md:"6",children:l("div",{className:"d-flex py-3",children:[e("div",{className:"landing-feature",children:e(Lt,{})}),l("div",{className:"flex-grow-1",children:[e("h4",{className:"mt-0",children:"Dev-to-dev Support"}),e("p",{className:"fs-lg",children:"Our themes are supported by specialists who provide quick and effective support. Usually an email reply takes <24h."})]})]})}),e(m,{md:"6",children:l("div",{className:"d-flex py-3",children:[e("div",{className:"landing-feature",children:e(Jt,{})}),l("div",{className:"flex-grow-1",children:[e("h4",{className:"mt-0",children:"Authentication Examples"}),e("p",{className:"fs-lg",children:"The package comes with fully working authentication examples, including Firebase, Auth0, AWS Cognito and JWT."})]})]})}),e(m,{md:"6",children:l("div",{className:"d-flex py-3",children:[e("div",{className:"landing-feature",children:e(Tt,{})}),l("div",{className:"flex-grow-1",children:[e("h4",{className:"mt-0",children:"Clean Code"}),e("p",{className:"fs-lg",children:"We strictly follow Bootstrap's guidelines to make your integration as easy as possible. All code is handwritten."})]})]})}),e(m,{md:"6",children:l("div",{className:"d-flex py-3",children:[l("div",{className:"landing-feature",children:[e("i",{"data-feather":"download-cloud"}),e(Pt,{})]}),l("div",{className:"flex-grow-1",children:[e("h4",{className:"mt-0",children:"Regular Updates"}),e("p",{className:"fs-lg",children:"From time to time you'll receive an update containing new components, improvements and bugfixes."})]})]})})]})]})})})}),Oa=()=>{const[t,n]=i.useState("0");return e("section",{className:"bg-white py-6",children:l(z,{children:[l("div",{className:"mb-5 text-center",children:[e("span",{className:"text-uppercase text-primary text-sm fw-medium mb-1 d-block",children:"AppStack"}),e("h2",{className:"h1",children:"Frequently Asked Questions"}),e("p",{className:"text-muted fs-lg",children:"Here are some of the answers you might be looking for."})]}),e(C,{children:e(m,{md:9,lg:8,className:"mx-auto",children:l(K,{activeKey:t,children:[l(g,{className:"border mb-3",children:[e(g.Header,{className:"cursor-pointer",onClick:()=>n("0"),children:e("h6",{className:"mb-0",children:"Does this product support TypeScript?"})}),e(K.Collapse,{eventKey:"0",children:e(g.Body,{className:"py-3",children:"Yes, the package includes two projects, based on JavaScript & TypeScript. Both projects are fully-featured, and contain all components, icons, pages, auth types and more."})})]}),l(g,{className:"border mb-3",children:[e(g.Header,{className:"cursor-pointer",onClick:()=>n("1"),children:e("h6",{className:"mb-0",children:"Is there any support included?"})}),e(K.Collapse,{eventKey:"1",children:l(g.Body,{className:"py-3",children:["You have access to the Software's online support services via email for six (6) months from the purchase date. Please contact us at"," ",e("a",{href:"mailto:support@bootlab.io",children:"support@bootlab.io"})," ","for any questions."]})})]}),l(g,{className:"border mb-3",children:[e(g.Header,{className:"cursor-pointer",onClick:()=>n("2"),children:e("h6",{className:"mb-0",children:"How do I get a receipt for my purchase?"})}),e(K.Collapse,{eventKey:"2",children:l(g.Body,{className:"py-3",children:["You'll receive an email from Bootstrap themes once your purchase is complete. More info can be found"," ",e("a",{href:"https://themes.zendesk.com/hc/en-us/articles/360000011052-How-do-I-get-a-receipt-for-my-purchase-",rel:"noopener noreferrer",target:"_blank",children:"here"}),"."]})})]}),l(g,{className:"border mb-3",children:[e(g.Header,{className:"cursor-pointer",onClick:()=>n("3"),children:e("h6",{className:"mb-0",children:"What methods of payments are supported?"})}),e(K.Collapse,{eventKey:"3",children:e(g.Body,{className:"py-3",children:"You can purchase the themes on Bootstrap Themes via any major credit/debit card (via Stripe) or with your Paypal account. We don't support cryptocurrencies or invoicing at this time."})})]}),l(g,{className:"border mb-3",children:[e(g.Header,{className:"cursor-pointer",onClick:()=>n("4"),children:e("h6",{className:"mb-0",children:"Does this product work with npm / yarn?"})}),e(K.Collapse,{eventKey:"4",children:e(g.Body,{className:"py-3",children:"Yes, AppStack React has been thoroughly tested with npm and yarn (LTS versions)."})})]})]})})})]})})},Ea=()=>e("section",{className:"landing-footer py-6",children:e(z,{className:"text-center landing-footer-container",children:e(C,{children:l(m,{md:"9",lg:"8",xl:"6",className:"mx-auto",children:[e("h2",{className:"h1 mb-3",children:"Join over 5,000 developers who are already working with our products"}),e(le,{variant:"success",size:"lg",href:"https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/",target:"_blank",rel:"noopener noreferrer",className:"mt-n1 btn-pill",children:"Get AppStack"})]})})})}),Ba=()=>{const{setTheme:t}=ot(),{setPosition:n,setBehavior:a}=lt(),{setLayout:r}=qt();return i.useEffect(()=>{t(it.DEFAULT),n(ct.LEFT),a(dt.STICKY),r(mt.FLUID)},[]),l(d.Fragment,{children:[e(ba,{}),e(va,{}),e(ya,{}),e(Na,{}),e(xa,{}),e(wa,{}),e(ka,{}),e(Oa,{}),e(Ea,{})]})};export{Ba as default};