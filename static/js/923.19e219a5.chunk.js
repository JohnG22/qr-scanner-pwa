/*! For license information please see 923.19e219a5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkqr_scanner_pwa=self.webpackChunkqr_scanner_pwa||[]).push([[923],{923:(t,e,o)=>{o.r(e),o.d(e,{iosTransitionAnimation:()=>f,shadow:()=>l});var n=o(507),r=o(903);const a=t=>document.querySelector(`${t}.ion-cloned-element`),l=t=>t.shadowRoot||t,s=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},i=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const r of n){const t=r.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&e||!a))return n}return null},c=(t,e,o,r,s,i,c,d,f)=>{var y,p;const u=e?`calc(100% - ${s.right+4}px)`:s.left-4+"px",b=e?"right":"left",g=e?"left":"right",h=e?"right":"left";let S=1,$=1,q=`scale(${$})`;const T="scale(1)";if(i&&c){const t=(null===(y=i.textContent)||void 0===y?void 0:y.trim())===(null===(p=d.textContent)||void 0===p?void 0:p.trim());S=f.width/c.width,$=(f.height-m)/c.height,q=t?`scale(${S}, ${$})`:`scale(${$})`}const x=l(r).querySelector("ion-icon").getBoundingClientRect(),v=e?x.width/2-(x.right-s.right)+"px":s.left-x.width/2+"px",X=e?`-${window.innerWidth-s.right}px`:`${s.left}px`,E=`${f.top}px`,A=`${s.top}px`,C=o?[{offset:0,transform:`translate3d(${X}, ${A}, 0)`},{offset:1,transform:`translate3d(${v}, ${E}, 0)`}]:[{offset:0,transform:`translate3d(${v}, ${E}, 0)`},{offset:1,transform:`translate3d(${X}, ${A}, 0)`}],w=o?[{offset:0,opacity:1,transform:T},{offset:1,opacity:0,transform:q}]:[{offset:0,opacity:0,transform:q},{offset:1,opacity:1,transform:T}],k=o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],B=(0,n.c)(),P=(0,n.c)(),R=(0,n.c)(),W=a("ion-back-button"),L=l(W).querySelector(".button-text"),N=l(W).querySelector("ion-icon");W.text=r.text,W.mode=r.mode,W.icon=r.icon,W.color=r.color,W.disabled=r.disabled,W.style.setProperty("display","block"),W.style.setProperty("position","fixed"),P.addElement(N),B.addElement(L),R.addElement(W),R.beforeStyles({position:"absolute",top:"0px",[h]:"0px"}).beforeAddWrite((()=>{r.style.setProperty("display","none"),W.style.setProperty(b,u)})).afterAddWrite((()=>{r.style.setProperty("display",""),W.style.setProperty("display","none"),W.style.removeProperty(b)})).keyframes(C),B.beforeStyles({"transform-origin":`${b} top`}).keyframes(w),P.beforeStyles({"transform-origin":`${g} center`}).keyframes(k),t.addAnimation([B,P,R])},d=(t,e,o,r,l,s,i,c,d)=>{var f,y;const p=e?"right":"left",u=e?`calc(100% - ${l.right}px)`:`${l.left}px`,b=`${l.top}px`;let g=e?`-${window.innerWidth-i.right-8}px`:`${i.x+8}px`,h=.5;const S="scale(1)";let $=`scale(${h})`;if(c&&d){g=e?`-${window.innerWidth-d.right-8}px`:d.x-8+"px";const t=(null===(f=c.textContent)||void 0===f?void 0:f.trim())===(null===(y=r.textContent)||void 0===y?void 0:y.trim()),o=d.width/s.width;h=d.height/(s.height-m),$=t?`scale(${o}, ${h})`:`scale(${h})`}const q=i.top+i.height/2-l.height*h/2+"px",T=o?[{offset:0,opacity:0,transform:`translate3d(${g}, ${q}, 0) ${$}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${b}, 0) ${S}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${b}, 0) ${S}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${g}, ${q}, 0) ${$}`}],x=a("ion-title"),v=(0,n.c)();x.innerText=r.innerText,x.size=r.size,x.color=r.color,v.addElement(x),v.beforeStyles({"transform-origin":`${p} top`,height:`${l.height}px`,display:"",position:"relative",[p]:u}).beforeAddWrite((()=>{r.style.setProperty("opacity","0")})).afterAddWrite((()=>{r.style.setProperty("opacity",""),x.style.setProperty("display","none")})).keyframes(T),t.addAnimation(v)},f=(t,e)=>{var o;try{const a="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",y="0%",p=.8,u="rtl"===t.ownerDocument.dir,b=u?"-99.5%":"99.5%",g=u?"33%":"-33%",h=e.enteringEl,S=e.leavingEl,$="back"===e.direction,q=h.querySelector(":scope > ion-content"),T=h.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),x=h.querySelectorAll(":scope > ion-header > ion-toolbar"),v=(0,n.c)(),X=(0,n.c)();if(v.addElement(h).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||a).fill("both").beforeRemoveClass("ion-page-invisible"),S&&null!==t&&void 0!==t){const e=(0,n.c)();e.addElement(t),v.addAnimation(e)}if(q||0!==x.length||0!==T.length?(X.addElement(q),X.addElement(T)):X.addElement(h.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(X),$?X.beforeClearStyles([f]).fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,p,1):X.beforeClearStyles([f]).fromTo("transform",`translateX(${b})`,`translateX(${y})`),q){const t=l(q).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),r=(0,n.c)(),a=(0,n.c)(),l=(0,n.c)();r.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(e).beforeClearStyles([f]).fromTo(f,0,.1),l.addElement(o).beforeClearStyles([f]).fromTo(f,.03,.7),r.addAnimation([a,l]),X.addAnimation([r])}}const E=h.querySelector("ion-header.header-collapse-condense"),{forward:A,backward:C}=((t,e,o,n,r)=>{const a=i(n,o),f=s(r),m=s(n),y=i(r,o),p=null!==a&&null!==f&&!o,u=null!==m&&null!==y&&o;if(p){const n=f.getBoundingClientRect(),r=a.getBoundingClientRect(),s=l(a).querySelector(".button-text"),i=null===s||void 0===s?void 0:s.getBoundingClientRect(),m=l(f).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,f,n,m,r,s,i),c(t,e,o,a,r,s,i,f,m)}else if(u){const n=m.getBoundingClientRect(),r=y.getBoundingClientRect(),a=l(y).querySelector(".button-text"),s=null===a||void 0===a?void 0:a.getBoundingClientRect(),i=l(m).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,m,n,i,r,a,s),c(t,e,o,y,r,a,s,m,i)}return{forward:p,backward:u}})(v,u,$,h,S);if(x.forEach((t=>{const e=(0,n.c)();e.addElement(t),v.addAnimation(e);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),s=t.closest("ion-header"),i=null===s||void 0===s?void 0:s.classList.contains("header-collapse-condense-inactive");let c;c=$?a.filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e})):a.filter((t=>!t.classList.contains("buttons-collapse"))),r.addElement(c);const d=(0,n.c)();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=(0,n.c)();m.addElement(l(t).querySelector(".toolbar-background"));const p=(0,n.c)(),h=t.querySelector("ion-back-button");if(h&&p.addElement(h),e.addAnimation([o,r,d,m,p]),r.fromTo(f,.01,1),d.fromTo(f,.01,1),$)i||o.fromTo("transform",`translateX(${g})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${g})`,`translateX(${y})`),p.fromTo(f,.01,1);else{E||o.fromTo("transform",`translateX(${b})`,`translateX(${y})`).fromTo(f,.01,1),d.fromTo("transform",`translateX(${b})`,`translateX(${y})`),m.beforeClearStyles([f,"transform"]);if((null===s||void 0===s?void 0:s.translucent)?m.fromTo("transform",u?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),A||p.fromTo(f,.01,1),h&&!A){const t=(0,n.c)();t.addElement(l(h).querySelector(".button-text")).fromTo("transform",u?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}}})),S){const t=(0,n.c)(),e=S.querySelector(":scope > ion-content"),o=S.querySelectorAll(":scope > ion-header > ion-toolbar"),a=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==a.length?(t.addElement(e),t.addElement(a)):t.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(t),$){t.beforeClearStyles([f]).fromTo("transform",`translateX(${y})`,u?"translateX(-100%)":"translateX(100%)");const e=(0,r.g)(S);v.afterAddWrite((()=>{"normal"===v.getDirection()&&e.style.setProperty("display","none")}))}else t.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,1,p);if(e){const o=l(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),a=(0,n.c)(),l=(0,n.c)(),s=(0,n.c)();a.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([f]).fromTo(f,.1,0),s.addElement(r).beforeClearStyles([f]).fromTo(f,.7,.03),a.addAnimation([l,s]),t.addAnimation([a])}}o.forEach((t=>{const e=(0,n.c)();e.addElement(t);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const r=(0,n.c)(),a=t.querySelectorAll("ion-buttons,[menuToggle]"),s=t.closest("ion-header"),i=null===s||void 0===s?void 0:s.classList.contains("header-collapse-condense-inactive"),c=Array.from(a).filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!i||!e}));r.addElement(c);const d=(0,n.c)(),p=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");p.length>0&&d.addElement(p);const b=(0,n.c)();b.addElement(l(t).querySelector(".toolbar-background"));const h=(0,n.c)(),S=t.querySelector("ion-back-button");if(S&&h.addElement(S),e.addAnimation([o,r,d,h,b]),v.addAnimation(e),h.fromTo(f,.99,0),r.fromTo(f,.99,0),d.fromTo(f,.99,0),$){i||o.fromTo("transform",`translateX(${y})`,u?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform",`translateX(${y})`,u?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([f,"transform"]);if((null===s||void 0===s?void 0:s.translucent)?b.fromTo("transform","translateX(0px)",u?"translateX(-100%)":"translateX(100%)"):b.fromTo(f,"var(--opacity)",0),S&&!C){const t=(0,n.c)();t.addElement(l(S).querySelector(".button-text")).fromTo("transform",`translateX(${y})`,`translateX(${(u?-124:124)+"px"})`),e.addAnimation(t)}}else i||o.fromTo("transform",`translateX(${y})`,`translateX(${g})`).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform",`translateX(${y})`,`translateX(${g})`).afterClearStyles([m,f]),h.afterClearStyles([f]),o.afterClearStyles([f]),r.afterClearStyles([f])}))}return v}catch(a){throw a}},m=10}}]);
//# sourceMappingURL=923.19e219a5.chunk.js.map