import{B as ne,g as ye,n as qe,a as We,s as ze,m as $e,b as je,u as Ye,c as Ge,T as Ke,C as Ue,V as Xe,_ as Ze}from"./home-76cb8dae.js";import{p as ge,q as oe,r as ae,s as he,t as be,m as Je,v as Ce,w as Qe,f as et,x as Pe,y as tt,b as _e,M as nt,z as ot,A as at,_ as lt,B as it,l as rt}from"./VRow-cf69e8bd.js";import{S as Ae,T as Fe,p as Y,r as q,U as $,A as ce,x as L,V as W,W as st,c as P,X as te,d as N,w as pe,C as fe,Y as Te,i as Be,Z as ut,g as de,B as z,_ as ct,s as K,$ as ft,o as dt,a as Ve,b as vt,a0 as mt,y as yt,n as gt,l as Le,z as Re,q as ht,u as bt,t as pt,m as S,a1 as wt,a2 as xt,a3 as Et,a4 as St,J as ve,a5 as kt,a6 as Ot,a7 as Ct,v as Pt,a8 as _t,a9 as we,H as le,E as At,I as Ft,G as U,O as H}from"./index-2b44e3df.js";const Z=new WeakMap;function Tt(e,t){Object.keys(t).forEach(n=>{if(Ae(n)){const a=Fe(n),o=Z.get(e);if(t[n]==null)o==null||o.forEach(l=>{const[r,i]=l;r===a&&(e.removeEventListener(a,i),o.delete(l))});else if(!o||![...o].some(l=>l[0]===a&&l[1]===t[n])){e.addEventListener(a,t[n]);const l=o||new Set;l.add([a,t[n]]),Z.has(e)||Z.set(e,l)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Bt(e,t){Object.keys(t).forEach(n=>{if(Ae(n)){const a=Fe(n),o=Z.get(e);o==null||o.forEach(l=>{const[r,i]=l;r===a&&(e.removeEventListener(a,i),o.delete(l))})}else e.removeAttribute(n)})}function Me(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Lt(e):me(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(me(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Lt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Rt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ie(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Mt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function xe(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:a}=e,o=a==="left"?0:a==="center"?t.width/2:a==="right"?t.width:a,l=n==="top"?0:n==="bottom"?t.height:n;return ie({x:o,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:a}=e,o=n==="left"?0:n==="right"?t.width:n,l=a==="top"?0:a==="center"?t.height/2:a==="bottom"?t.height:a;return ie({x:o,y:l},t)}return ie({x:t.width/2,y:t.height/2},t)}const De={static:Nt,connected:qt},Dt=Y({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in De},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function It(e,t){const n=q({}),a=q();$&&(ce(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var r,i;L(()=>e.locationStrategy,l),W(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(r=e.locationStrategy(t,e,n))==null?void 0:r.updateLocation:a.value=(i=De[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation}),window.addEventListener("resize",o,{passive:!0}),W(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(l){var r;(r=a.value)==null||r.call(a,l)}return{contentStyles:n,updateLocation:a}}function Nt(){}function Ht(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=qe(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function qt(e,t,n){Rt(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:l}=st(()=>{const d=ge(t.location,e.isRtl.value),y=t.origin==="overlap"?d:t.origin==="auto"?oe(d):ge(t.origin,e.isRtl.value);return d.side===y.side&&d.align===ae(y).align?{preferredAnchor:he(d),preferredOrigin:he(y)}:{preferredAnchor:d,preferredOrigin:y}}),[r,i,c,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>P(()=>{const y=parseFloat(t[d]);return isNaN(y)?1/0:y})),v=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let h=!1;const m=new ResizeObserver(()=>{h&&F()});L([e.activatorEl,e.contentEl],(d,y)=>{let[B,_]=d,[w,s]=y;w&&m.unobserve(w),B&&m.observe(B),s&&m.unobserve(s),_&&m.observe(_)},{immediate:!0}),W(()=>{m.disconnect()});function F(){if(h=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>h=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),y=Ht(e.contentEl.value,e.isRtl.value),B=Q(e.contentEl.value),_=12;B.length||(B.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(y.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),y.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=B.reduce((x,O)=>{const g=O.getBoundingClientRect(),E=new ne({x:O===document.documentElement?0:g.x,y:O===document.documentElement?0:g.y,width:O.clientWidth,height:O.clientHeight});return x?new ne({x:Math.max(x.left,E.left),y:Math.max(x.top,E.top),width:Math.min(x.right,E.right)-Math.max(x.left,E.left),height:Math.min(x.bottom,E.bottom)-Math.max(x.top,E.top)}):E},void 0);w.x+=_,w.y+=_,w.width-=_*2,w.height-=_*2;let s={anchor:o.value,origin:l.value};function V(x){const O=new ne(y),g=xe(x.anchor,d),E=xe(x.origin,O);let{x:M,y:I}=Mt(g,E);switch(x.anchor.side){case"top":I-=v.value[0];break;case"bottom":I+=v.value[0];break;case"left":M-=v.value[0];break;case"right":M+=v.value[0];break}switch(x.anchor.align){case"top":I-=v.value[1];break;case"bottom":I+=v.value[1];break;case"left":M-=v.value[1];break;case"right":M+=v.value[1];break}return O.x+=M,O.y+=I,O.width=Math.min(O.width,c.value),O.height=Math.min(O.height,u.value),{overflows:ye(O,w),x:M,y:I}}let D=0,f=0;const p={x:0,y:0},A={x:!1,y:!1};let k=-1;for(;!(k++>10);){const{x,y:O,overflows:g}=V(s);D+=x,f+=O,y.x+=x,y.y+=O;{const E=be(s.anchor),M=g.x.before||g.x.after,I=g.y.before||g.y.after;let G=!1;if(["x","y"].forEach(T=>{if(T==="x"&&M&&!A.x||T==="y"&&I&&!A.y){const b={anchor:{...s.anchor},origin:{...s.origin}},R=T==="x"?E==="y"?ae:oe:E==="y"?oe:ae;b.anchor=R(b.anchor),b.origin=R(b.origin);const{overflows:j}=V(b);(j[T].before<=g[T].before&&j[T].after<=g[T].after||j[T].before+j[T].after<(g[T].before+g[T].after)/2)&&(s=b,G=A[T]=!0)}}),G)continue}g.x.before&&(D+=g.x.before,y.x+=g.x.before),g.x.after&&(D-=g.x.after,y.x-=g.x.after),g.y.before&&(f+=g.y.before,y.y+=g.y.before),g.y.after&&(f-=g.y.after,y.y-=g.y.after);{const E=ye(y,w);p.x=w.width-E.x.before-E.x.after,p.y=w.height-E.y.before-E.y.after,D+=E.x.before,y.x+=E.x.before,f+=E.y.before,y.y+=E.y.before}break}const C=be(s.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${s.anchor.side} ${s.anchor.align}`,transformOrigin:`${s.origin.side} ${s.origin.align}`,top:N(re(f)),left:e.isRtl.value?void 0:N(re(D)),right:e.isRtl.value?N(re(-D)):void 0,minWidth:N(C==="y"?Math.min(r.value,d.width):r.value),maxWidth:N(Ee(pe(p.x,r.value===1/0?0:r.value,c.value))),maxHeight:N(Ee(pe(p.y,i.value===1/0?0:i.value,u.value)))}),{available:p,contentBox:y}}return L(()=>[o.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>F()),te(()=>{const d=F();if(!d)return;const{available:y,contentBox:B}=d;B.height>y.y&&requestAnimationFrame(()=>{F(),requestAnimationFrame(()=>{F()})})}),{updateLocation:F}}function re(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let se=!0;const ee=[];function Wt(e){!se||ee.length?(ee.push(e),ue()):(se=!1,e(),ue())}let Se=-1;function ue(){cancelAnimationFrame(Se),Se=requestAnimationFrame(()=>{const e=ee.shift();e&&e(),ee.length?ue():se=!0})}const J={none:null,close:jt,block:Yt,reposition:Gt},zt=Y({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function $t(e,t){if(!$)return;let n;fe(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Te(),await te(),n.active&&n.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(a=J[e.scrollStrategy])==null||a.call(J,t,e,n)}))}),W(()=>{n==null||n.stop()})}function jt(e){function t(n){e.isActive.value=!1}Ie(e.activatorEl.value??e.contentEl.value,t)}function Yt(e,t){var r;const n=(r=e.root.value)==null?void 0:r.offsetParent,a=[...new Set([...Q(e.activatorEl.value,t.contained?n:void 0),...Q(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,l=(i=>me(i)&&i)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((i,c)=>{i.style.setProperty("--v-body-scroll-x",N(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",N(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",N(o)),i.classList.add("v-overlay-scroll-blocked")}),W(()=>{a.forEach((i,c)=>{const u=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),v=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-u,i.scrollTop=-v}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Gt(e,t,n){let a=!1,o=-1,l=-1;function r(i){Wt(()=>{var v,h;const c=performance.now();(h=(v=e.updateLocation).value)==null||h.call(v,i),a=(performance.now()-c)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{Ie(e.activatorEl.value??e.contentEl.value,i=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{r(i)})})):r(i)})})}),W(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(o)})}function Ie(e,t){const n=[document,...Q(e)];n.forEach(a=>{a.addEventListener("scroll",t,{passive:!0})}),W(()=>{n.forEach(a=>{a.removeEventListener("scroll",t)})})}const Kt=Symbol.for("vuetify:v-menu"),Ut=Y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Xt(e,t){const n={},a=o=>()=>{if(!$)return Promise.resolve(!0);const l=o==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(r=>{const i=parseInt(e[o]??0,10);n[o]=window.setTimeout(()=>{t==null||t(l),r(l)},i)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const Zt=Y({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Ut()},"VOverlay-activator");function Jt(e,t){let{isActive:n,isTop:a}=t;const o=q();let l=!1,r=!1,i=!0;const c=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),u=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:v,runCloseDelay:h}=Xt(e,s=>{s===(e.openOnHover&&l||c.value&&r)&&!(e.openOnHover&&n.value&&!a.value)&&(n.value!==s&&(i=!0),n.value=s)}),m={onClick:s=>{s.stopPropagation(),o.value=s.currentTarget||s.target,n.value=!n.value},onMouseenter:s=>{var V;(V=s.sourceCapabilities)!=null&&V.firesTouchEvents||(l=!0,o.value=s.currentTarget||s.target,v())},onMouseleave:s=>{l=!1,h()},onFocus:s=>{ct(s.target,":focus-visible")!==!1&&(r=!0,s.stopPropagation(),o.value=s.currentTarget||s.target,v())},onBlur:s=>{r=!1,s.stopPropagation(),h()}},F=P(()=>{const s={};return u.value&&(s.onClick=m.onClick),e.openOnHover&&(s.onMouseenter=m.onMouseenter,s.onMouseleave=m.onMouseleave),c.value&&(s.onFocus=m.onFocus,s.onBlur=m.onBlur),s}),d=P(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,v()},s.onMouseleave=()=>{l=!1,h()}),c.value&&(s.onFocusin=()=>{r=!0,v()},s.onFocusout=()=>{r=!1,h()}),e.closeOnContentClick){const V=Be(Kt,null);s.onClick=()=>{n.value=!1,V==null||V.closeParents()}}return s}),y=P(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{i&&(l=!0,i=!1,v())},s.onMouseleave=()=>{l=!1,h()}),s});L(a,s=>{s&&(e.openOnHover&&!l&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!l))&&(n.value=!1)});const B=q();fe(()=>{B.value&&te(()=>{o.value=ut(B.value)})});const _=de("useActivator");let w;return L(()=>!!e.activator,s=>{s&&$?(w=Te(),w.run(()=>{Qt(e,_,{activatorEl:o,activatorEvents:F})})):w&&w.stop()},{flush:"post",immediate:!0}),W(()=>{w==null||w.stop()}),{activatorEl:o,activatorRef:B,activatorEvents:F,contentEvents:d,scrimEvents:y}}function Qt(e,t,n){let{activatorEl:a,activatorEvents:o}=n;L(()=>e.activator,(c,u)=>{if(u&&c!==u){const v=i(u);v&&r(v)}c&&te(()=>l())},{immediate:!0}),L(()=>e.activatorProps,()=>{l()}),W(()=>{r()});function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Tt(c,z(o.value,u))}function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Bt(c,z(o.value,u))}function i(){var v,h;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(c)if(c==="parent"){let m=(h=(v=t==null?void 0:t.proxy)==null?void 0:v.$el)==null?void 0:h.parentNode;for(;m!=null&&m.hasAttribute("data-no-activator");)m=m.parentNode;u=m}else typeof c=="string"?u=document.querySelector(c):"$el"in c?u=c.$el:u=c;return a.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:null,a.value}}function en(){if(!$)return K(!1);const{ssr:e}=ft();if(e){const t=K(!1);return dt(()=>{t.value=!0}),t}else return K(!0)}const tn=Y({eager:Boolean},"lazy");function nn(e,t){const n=K(!1),a=P(()=>n.value||e.eager||t.value);L(t,()=>n.value=!0);function o(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:a,onAfterLeave:o}}function on(){const t=de("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const ke=Symbol.for("vuetify:stack"),X=Ve([]);function an(e,t,n){const a=de("useStack"),o=!n,l=Be(ke,void 0),r=Ve({activeChildren:new Set});vt(ke,r);const i=K(+t.value);ce(e,()=>{var h;const v=(h=X.at(-1))==null?void 0:h[1];i.value=v?v+10:+t.value,o&&X.push([a.uid,i.value]),l==null||l.activeChildren.add(a.uid),W(()=>{if(o){const m=mt(X).findIndex(F=>F[0]===a.uid);X.splice(m,1)}l==null||l.activeChildren.delete(a.uid)})});const c=K(!0);o&&fe(()=>{var h;const v=((h=X.at(-1))==null?void 0:h[0])===a.uid;setTimeout(()=>c.value=v)});const u=P(()=>!r.activeChildren.size);return{globalTop:yt(c),localTop:u,stackStyles:P(()=>({zIndex:i.value}))}}function ln(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!$)return;const a=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function rn(){return!0}function Ne(e,t,n){if(!e||He(e,n)===!1)return!1;const a=Me(t);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof n.value=="object"&&n.value.include||(()=>[]))();return o.push(t),!o.some(l=>l==null?void 0:l.contains(e.target))}function He(e,t){return(typeof t.value=="object"&&t.value.closeConditional||rn)(e)}function sn(e,t,n){const a=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ne(e,t,n)&&setTimeout(()=>{He(e,n)&&a&&a(e)},0)}function Oe(e,t){const n=Me(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const un={mounted(e,t){const n=o=>sn(o,e,t),a=o=>{e._clickOutside.lastMousedownWasOutside=Ne(o,e,t)};Oe(e,o=>{o.addEventListener("click",n,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:a}},unmounted(e,t){e._clickOutside&&(Oe(e,n=>{var l;if(!n||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[t.instance.$.uid])}};function cn(e){const{modelValue:t,color:n,...a}=e;return S(kt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&S("div",z({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const fn=Y({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Zt(),...Je(),...Ce(),...tn(),...Dt(),...zt(),...gt(),...Qe()},"VOverlay"),dn=Le()({name:"VOverlay",directives:{ClickOutside:un},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...fn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:a,emit:o}=t;const l=Re(e,"modelValue"),r=P({get:()=>l.value,set:b=>{b&&e.disabled||(l.value=b)}}),{teleportTarget:i}=ln(P(()=>e.attach||e.contained)),{themeClasses:c}=ht(e),{rtlClasses:u,isRtl:v}=bt(),{hasContent:h,onAfterLeave:m}=nn(e,r),F=et(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:y,stackStyles:B}=an(r,pt(e,"zIndex"),e._disableGlobalStack),{activatorEl:_,activatorRef:w,activatorEvents:s,contentEvents:V,scrimEvents:D}=Jt(e,{isActive:r,isTop:y}),{dimensionStyles:f}=Pe(e),p=en(),{scopeId:A}=on();L(()=>e.disabled,b=>{b&&(r.value=!1)});const k=q(),C=q(),{contentStyles:x,updateLocation:O}=It(e,{isRtl:v,contentEl:C,activatorEl:_,isActive:r});$t(e,{root:k,contentEl:C,activatorEl:_,isActive:r,updateLocation:O});function g(b){o("click:outside",b),e.persistent?T():r.value=!1}function E(){return r.value&&d.value}$&&L(r,b=>{b?window.addEventListener("keydown",M):window.removeEventListener("keydown",M)},{immediate:!0});function M(b){var R,j;b.key==="Escape"&&d.value&&(e.persistent?T():(r.value=!1,(R=C.value)!=null&&R.contains(document.activeElement)&&((j=_.value)==null||j.focus())))}const I=tt();ce(()=>e.closeOnBack,()=>{ot(I,b=>{d.value&&r.value?(b(!1),e.persistent?T():r.value=!1):b()})});const G=q();L(()=>r.value&&(e.absolute||e.contained)&&i.value==null,b=>{if(b){const R=Vt(k.value);R&&R!==document.scrollingElement&&(G.value=R.scrollTop)}});function T(){e.noClickAnimation||C.value&&We(C.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ze})}return _e(()=>{var b;return S(ve,null,[(b=n.activator)==null?void 0:b.call(n,{isActive:r.value,props:z({ref:w},s.value,e.activatorProps)}),p.value&&h.value&&S(wt,{disabled:!i.value,to:i.value},{default:()=>[S("div",z({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},c.value,u.value,e.class],style:[B.value,{top:N(G.value)},e.style],ref:k},A,a),[S(cn,z({color:F,modelValue:r.value&&!!e.scrim},D.value),null),S(nt,{appear:!0,persisted:!0,transition:e.transition,target:_.value,onAfterLeave:()=>{m(),o("afterLeave")}},{default:()=>{var R;return[xt(S("div",z({ref:C,class:["v-overlay__content",e.contentClass],style:[f.value,x.value]},V.value,e.contentProps),[(R=n.default)==null?void 0:R.call(n,{isActive:r})]),[[Et,r.value],[St("click-outside"),{handler:g,closeConditional:E,include:()=>[_.value]}]])]}})])]})])}),{activatorEl:_,animateClick:T,contentEl:C,globalTop:d,localTop:y,updateLocation:O}}}),vn=Y({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"text"},...Ce(),...$e(),...Ot(je({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),mn=Le()({name:"VOtpInput",props:vn(),emits:{finish:e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:a,slots:o}=t;const{dimensionStyles:l}=Pe(e),{isFocused:r,focus:i,blur:c}=Ye(e),u=Re(e,"modelValue","",f=>String(f).split(""),f=>f.join("")),{t:v}=Ct(),h=P(()=>Array(Number(e.length)).fill(0)),m=q(-1),F=q(),d=q([]),y=P(()=>d.value[m.value]);function B(){const f=u.value.slice(),p=y.value.value;f[m.value]=p,u.value=f;let A=null;m.value>u.value.length?A=u.value.length+1:m.value+1!==Number(e.length)?A="next":requestAnimationFrame(()=>{var k;return(k=y.value)==null?void 0:k.blur()}),A&&we(F.value,A)}function _(f){const p=u.value.slice(),A=m.value;let k=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(f.key)&&(f.preventDefault(),f.key==="ArrowLeft"?k="prev":f.key==="ArrowRight"?k="next":["Backspace","Delete"].includes(f.key)&&(p[m.value]="",u.value=p,m.value>0&&f.key==="Backspace"?k="prev":requestAnimationFrame(()=>{d.value[A].select()})),requestAnimationFrame(()=>{k!=null&&we(F.value,k)}))}function w(f,p){var A,k;p.preventDefault(),p.stopPropagation(),u.value=(((A=p==null?void 0:p.clipboardData)==null?void 0:A.getData("Text"))??"").split(""),(k=d.value)==null||k[f].blur()}function s(){u.value=[]}function V(f,p){i(),m.value=p}function D(){c(),m.value=-1}return Pt({VField:{disabled:P(()=>e.disabled),error:P(()=>e.error),variant:P(()=>e.variant)}},{scoped:!0}),L(u,f=>{f.length===e.length&&a("finish",f.join(""))},{deep:!0}),L(m,f=>{f<0||$&&window.requestAnimationFrame(()=>{d.value[f].select()})}),_e(()=>{var A;const[f,p]=_t(n);return S("div",z({class:["v-otp-input",{"v-otp-input--divided":!!e.divider},e.class],style:[e.style]},f),[S("div",{ref:F,class:"v-otp-input__content",style:[l.value]},[h.value.map((k,C)=>S(ve,null,[e.divider&&C!==0&&S("span",{class:"v-otp-input__divider"},[e.divider]),S(Ge,{focused:r.value&&e.focusAll||m.value===C,key:C},{...o,default:()=>S("input",{ref:x=>d.value[C]=x,"aria-label":v(e.label,C+1),autofocus:C===0&&e.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],inputmode:"text",min:e.type==="number"?0:void 0,maxlength:"1",placeholder:e.placeholder,type:e.type,value:u.value[C],onInput:B,onFocus:x=>V(x,C),onBlur:D,onKeydown:_,onPaste:x=>w(C,x)},null)})])),S("input",z({class:"v-otp-input-input",type:"hidden"},p,{value:u.value.join("")}),null),S(dn,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!e.loading,persistent:!0},{default:()=>{var k;return[((k=o.loader)==null?void 0:k.call(o))??S(at,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(A=o.default)==null?void 0:A.call(o)])])}),{blur:()=>{var f;(f=d.value)==null||f.some(p=>p.blur())},focus:()=>{var f;(f=d.value)==null||f[0].focus()},reset:s,isFocused:r}}});const yn={components:{Textfield:Ke,Card:Ue,Button:it,VOtpInput:mn},data(){return{showPassword:!1,otp:""}},computed:{isOTPDisabled(){return this.otp.length!==6}},methods:{verifyOTP(){this.otp.length===6&&this.$router.push("/password")}}},gn=H("div",{class:"video-background"},[H("video",{autoplay:"",muted:"",loop:""},[H("source",{src:Ze,type:"video/mp4"})]),H("div",{class:"overlay"})],-1),hn=H("div",{class:"text-center"},[H("span",{class:"text-h4 font-weight-bold text-white"},"Verify Your Email")],-1),bn=H("div",{class:"text-center mt-2"},[H("span",{class:"text-subtitle-2 text-white text-wrap"}," A verification code has been sent to your email ")],-1),pn={class:"d-flex mt-4 justify-center"},wn=H("span",{class:"text-white text-subtitle-2"},"Didn't receive the code?",-1);function xn(e,t,n,a,o,l){const r=le("VOtpInput"),i=le("Button"),c=le("Card");return At(),Ft(ve,null,[gn,S(Xe,{class:"fill-height"},{default:U(()=>[S(rt,{class:"justify-center"},{default:U(()=>[S(c,{width:"400",class:"pa-5 card-opacity"},{title:U(()=>[hn]),subtitle:U(()=>[bn]),text:U(()=>[S(r,{modelValue:o.otp,"onUpdate:modelValue":t[0]||(t[0]=u=>o.otp=u),variant:"solo",placeholder:"-"},null,8,["modelValue"]),S(i,{onClick:l.verifyOTP,disabled:l.isOTPDisabled,class:"mt-5",label:"Submit",block:""},null,8,["onClick","disabled"]),H("div",pn,[wn,S(i,{class:"pa-0 text-decoration-underline",size:"x-small",variant:"text",color:"white",label:"Resend"})])]),_:1})]),_:1})]),_:1})],64)}const On=lt(yn,[["render",xn]]);export{On as default};