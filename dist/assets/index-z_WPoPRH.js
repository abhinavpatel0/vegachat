(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const nt="modulepreload",rt=function(e){return"/"+e},Se={},Oe=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");o=Promise.all(n.map(a=>{if(a=rt(a),a in Se)return;Se[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const f=s[m];if(f.href===a&&(!c||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":nt,c||(d.as="script",d.crossOrigin=""),d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},v={context:void 0,registry:void 0};function G(e){v.context=e}const ot=(e,t)=>e===t,he=Symbol("solid-proxy"),Z={equals:ot};let _e=Ue;const I=1,z=2,$e={owned:null,cleanups:null,context:null,owner:null},ce={};var y=null;let ue=null,st=null,w=null,C=null,j=null,re=0;function Te(e,t){const n=w,r=y,o=e.length===0,s=t===void 0?r:t,i=o?$e:{owned:null,cleanups:null,context:s?s.context:null,owner:s},l=o?e:()=>e(()=>L(()=>se(i)));y=i,w=null;try{return B(l,!0)}finally{w=n,y=r}}function N(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Me(n,o));return[De.bind(n),r]}function Ae(e,t,n){const r=oe(e,t,!0,I);K(r)}function H(e,t,n){const r=oe(e,t,!1,I);K(r)}function it(e,t,n){_e=pt;const r=oe(e,t,!1,I);(!n||!n.render)&&(r.user=!0),j?j.push(r):K(r)}function P(e,t,n){n=n?Object.assign({},Z,n):Z;const r=oe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,K(r),De.bind(r)}function lt(e){return e&&typeof e=="object"&&"then"in e}function at(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let i=null,l=ce,a=null,c=!1,u="initialValue"in s,h=typeof r=="function"&&P(r);const d=new Set,[m,f]=(s.storage||N)(s.initialValue),[g,b]=N(void 0),[x,U]=N(void 0,{equals:!1}),[R,$]=N(u?"ready":"unresolved");if(v.context){a=`${v.context.id}${v.context.count++}`;let S;s.ssrLoadFrom==="initial"?l=s.initialValue:v.load&&(S=v.load(a))&&(l=S)}function O(S,A,E,p){return i===S&&(i=null,p!==void 0&&(u=!0),(S===l||A===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(p,{value:A})),l=ce,ie(A,E)),A}function ie(S,A){B(()=>{A===void 0&&f(()=>S),$(A!==void 0?"errored":u?"ready":"unresolved"),b(A);for(const E of d.keys())E.decrement();d.clear()},!1)}function F(){const S=dt,A=m(),E=g();if(E!==void 0&&!i)throw E;return w&&!w.user&&S&&Ae(()=>{x(),i&&(S.resolved||d.has(S)||(S.increment(),d.add(S)))}),A}function W(S=!0){if(S!==!1&&c)return;c=!1;const A=h?h():r;if(A==null||A===!1){O(i,L(m));return}const E=l!==ce?l:L(()=>o(A,{value:m(),refetching:S}));return lt(E)?(i=E,"value"in E?(E.status==="success"?O(i,E.value,void 0,A):O(i,void 0,void 0,A),E):(c=!0,queueMicrotask(()=>c=!1),B(()=>{$(u?"refreshing":"pending"),U()},!1),E.then(p=>O(E,p,void 0,A),p=>O(E,void 0,qe(p),A)))):(O(i,E,void 0,A),E)}return Object.defineProperties(F,{state:{get:()=>R()},error:{get:()=>g()},loading:{get(){const S=R();return S==="pending"||S==="refreshing"}},latest:{get(){if(!u)return F();const S=g();if(S&&!i)throw S;return m()}}}),h?Ae(()=>W(!1)):W(!1),[F,{refetch:W,mutate:f}]}function L(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function Ne(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(s)return s=!1,i;const a=L(()=>t(l,o,i));return o=l,a}}function ct(e){it(()=>L(e))}function ye(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function je(){return y}function Be(e,t){const n=y,r=w;y=e,w=null;try{return B(t,!0)}catch(o){be(o)}finally{y=n,w=r}}function ut(e){const t=w,n=y;return Promise.resolve().then(()=>{w=t,y=n;let r;return B(e,!1),w=y=null,r?r.done:void 0})}function Ie(e,t){const n=Symbol("context");return{id:n,Provider:mt(n),defaultValue:e}}function ft(e){return y&&y.context&&y.context[e.id]!==void 0?y.context[e.id]:e.defaultValue}function we(e){const t=P(e),n=P(()=>ge(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let dt;function De(){if(this.sources&&this.state)if(this.state===I)K(this);else{const e=C;C=null,B(()=>te(this),!1),C=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Me(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=ue&&ue.running;i&&ue.disposed.has(s),(i?!s.tState:!s.state)&&(s.pure?C.push(s):j.push(s),s.observers&&Fe(s)),i||(s.state=I)}if(C.length>1e6)throw C=[],new Error},!1)),t}function K(e){if(!e.fn)return;se(e);const t=re;ht(e,e.value,t)}function ht(e,t,n){let r;const o=y,s=w;w=y=e;try{r=e.fn(t)}catch(i){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(se),e.owned=null),e.updatedAt=n+1,be(i)}finally{w=s,y=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Me(e,r):e.value=r,e.updatedAt=n)}function oe(e,t,n,r=I,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return y===null||y!==$e&&(y.owned?y.owned.push(s):y.owned=[s]),s}function ee(e){if(e.state===0)return;if(e.state===z)return te(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<re);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===I)K(e);else if(e.state===z){const r=C;C=null,B(()=>te(e,t[0]),!1),C=r}}function B(e,t){if(C)return e();let n=!1;t||(C=[]),j?n=!0:j=[],re++;try{const r=e();return gt(n),r}catch(r){n||(j=null),C=null,be(r)}}function gt(e){if(C&&(Ue(C),C=null),e)return;const t=j;j=null,t.length&&B(()=>_e(t),!1)}function Ue(e){for(let t=0;t<e.length;t++)ee(e[t])}function pt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ee(r)}if(v.context){if(v.count){v.effects||(v.effects=[]),v.effects.push(...e.slice(0,n));return}else v.effects&&(e=[...v.effects,...e],n+=v.effects.length,delete v.effects);G()}for(t=0;t<n;t++)ee(e[t])}function te(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===I?r!==t&&(!r.updatedAt||r.updatedAt<re)&&ee(r):o===z&&te(r,t)}}}function Fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=z,n.pure?C.push(n):j.push(n),n.observers&&Fe(n))}}function se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function qe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function be(e,t=y){throw qe(e)}function ge(e){if(typeof e=="function"&&!e.length)return ge(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ge(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function mt(e,t){return function(r){let o;return H(()=>o=L(()=>(y.context={...y.context,[e]:r.value},we(()=>r.children))),void 0),o}}function _(e,t){return L(()=>e(t||{}))}function J(){return!0}const yt={get(e,t,n){return t===he?n:e.get(t)},has(e,t){return t===he?!0:e.has(t)},set:J,deleteProperty:J,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:J,deleteProperty:J}},ownKeys(e){return e.keys()}};function fe(e){return(e=typeof e=="function"?e():e)?e:{}}function wt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function bt(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&he in l,e[i]=typeof l=="function"?(t=!0,P(l)):l}if(t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const a=fe(e[l])[i];if(a!==void 0)return a}},has(i){for(let l=e.length-1;l>=0;l--)if(i in fe(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys(fe(e[l])));return[...new Set(i)]}},yt);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const l=e[i];if(!l)continue;const a=Object.getOwnPropertyNames(l);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,u);if(!r[u])r[u]=h.get?{enumerable:!0,configurable:!0,get:wt.bind(n[u]=[h.get.bind(l)])}:h.value!==void 0?h:void 0;else{const d=n[u];d&&(h.get?d.push(h.get.bind(l)):h.value!==void 0&&d.push(()=>h.value))}}}const o={},s=Object.keys(r);for(let i=s.length-1;i>=0;i--){const l=s[i],a=r[l];a&&a.get?Object.defineProperty(o,l,a):o[l]=a?a.value:void 0}return o}function Ve(e){let t,n;const r=o=>{const s=v.context;if(s){const[l,a]=N();v.count||(v.count=0),v.count++,(n||(n=e())).then(c=>{G(s),v.count--,a(()=>c.default),G()}),t=l}else if(!t){const[l]=at(()=>(n||(n=e())).then(a=>a.default));t=l}let i;return P(()=>(i=t())&&L(()=>{if(!s)return i(o);const l=v.context;G(s);const a=i(o);return G(l),a}))};return r.preload=()=>n||((n=e()).then(o=>t=()=>o.default),n),r}const vt=e=>`Stale read from <${e}>.`;function He(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return P(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?L(()=>o(t?r:()=>{if(!L(n))throw vt("Show");return e.when})):o}return e.fallback},void 0,void 0)}function xt(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,a=t[o-1].nextSibling,c=null;for(;i<o||l<s;){if(t[i]===n[l]){i++,l++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const u=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],u)}else if(s===l)for(;i<o;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],u),t[o]=n[s]}else{if(!c){c=new Map;let h=l;for(;h<s;)c.set(n[h],h++)}const u=c.get(t[i]);if(u!=null)if(l<u&&u<s){let h=i,d=1,m;for(;++h<o&&h<s&&!((m=c.get(t[h]))==null||m!==u+d);)d++;if(d>u-l){const f=t[i];for(;l<u;)e.insertBefore(n[l++],f)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const ke="_$DX_DELEGATE";function St(e,t,n,r={}){let o;return Te(s=>{o=s,t===document?e():kt(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function Ke(e,t,n){let r;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},s=t?()=>L(()=>document.importNode(r||(r=o()),!0)):()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function We(e,t=window.document){const n=t[ke]||(t[ke]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,Et))}}function Ee(e,t,n){v.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function At(e,t){v.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function kt(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ne(e,t,r,n);H(o=>ne(e,t(),o,n),r)}function Et(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),v.registry&&!v.done&&(v.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ne(e,t,n,r,o){const s=!!v.context&&e.isConnected;if(s){!n&&(n=[...e.childNodes]);let a=[];for(let c=0;c<n.length;c++){const u=n[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():a.push(u)}n=a}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(s)return n;if(i==="number"&&(t=t.toString()),l){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=V(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(s)return n;n=V(e,n,r)}else{if(i==="function")return H(()=>{let a=t();for(;typeof a=="function";)a=a();n=ne(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[],c=n&&Array.isArray(n);if(pe(a,t,n,o))return H(()=>n=ne(e,a,n,r,!0)),()=>n;if(s){if(!a.length)return n;if(r===void 0)return[...e.childNodes];let u=a[0],h=[u];for(;(u=u.nextSibling)!==r;)h.push(u);return n=h}if(a.length===0){if(n=V(e,n,r),l)return n}else c?n.length===0?Pe(e,a,r):xt(e,n,a):(n&&V(e),Pe(e,a));n=a}else if(t.nodeType){if(s&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=V(e,n,r,t);V(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function pe(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let l=t[s],a=n&&n[e.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))o=pe(e,l,a)||o;else if(c==="function")if(r){for(;typeof l=="function";)l=l();o=pe(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return o}function Pe(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function V(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const a=l.parentNode===e;!s&&!i?a?e.replaceChild(o,l):e.insertBefore(o,n):a&&l.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const Pt=!1;function Xe(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(o,{...s,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let me;function ve(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),me=window.history.state._depth}ve();function Ct(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Lt(e,t){let n=!1;return()=>{const r=me;ve();const o=r==null?null:me-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const Rt=/^(?:[a-z0-9]+:)?\/\//i,Ot=/^\/+|(\/)\/+$/g,Ge="http://sr";function Y(e,t=!1){const n=e.replace(Ot,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Q(e,t,n){if(Rt.test(t))return;const r=Y(e),o=n&&Y(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+Y(t,!s)}function _t(e,t){return Y(e).replace(/\/*(\*.*)?$/g,"")+Y(t)}function Ye(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function $t(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return l=>{const a=l.split("/").filter(Boolean),c=a.length-i;if(c<0||c>0&&o===void 0&&!t)return null;const u={path:i?"":"/",params:{}},h=d=>n===void 0?void 0:n[d];for(let d=0;d<i;d++){const m=s[d],f=a[d],g=m[0]===":",b=g?m.slice(1):m;if(g&&de(f,h(b)))u.params[b]=f;else if(g||!de(f,m))return null;u.path+=`/${f}`}if(o){const d=c?a.slice(-c).join("/"):"";if(de(d,h(o)))u.params[o]=d;else return null}return u}}function de(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Tt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Je(e){const t=new Map,n=je();return new Proxy({},{get(r,o){return t.has(o)||Be(n,()=>t.set(o,P(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Qe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Qe(r).reduce((s,i)=>[...s,...o.map(l=>l+i)],[])}const Nt=100,jt=Ie(),Ze=Ie();function Bt(e,t=""){const{component:n,load:r,children:o,info:s}=e,i=!o||Array.isArray(o)&&!o.length,l={key:e,component:n,load:r,info:s};return ze(e.path).reduce((a,c)=>{for(const u of Qe(c)){const h=_t(t,u);let d=i?h:h.split("/*",1)[0];d=d.split("/").map(m=>m.startsWith(":")||m.startsWith("*")?m:encodeURIComponent(m)).join("/"),a.push({...l,originalPath:c,pattern:d,matcher:$t(d,!i,e.matchFilters)})}return a},[])}function It(e,t=0){return{routes:e,score:Tt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function ze(e){return Array.isArray(e)?e:[e]}function et(e,t="",n=[],r=[]){const o=ze(e);for(let s=0,i=o.length;s<i;s++){const l=o[s];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const a=Bt(l,t);for(const c of a){n.push(c);const u=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!u)et(l.children,c.pattern,n,r);else{const h=It([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((s,i)=>i.score-s.score)}function Ce(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Dt(e,t){const n=new URL(Ge),r=P(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),o=P(()=>r().pathname),s=P(()=>r().search,!0),i=P(()=>r().hash),l=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return i()},get state(){return t()},get key(){return l()},query:Je(Ne(s,()=>Ye(r())))}}let M;function Mt(e,t,n,r={}){const{signal:[o,s],utils:i={}}=e,l=i.parsePath||(p=>p),a=i.renderPath||(p=>p),c=i.beforeLeave||Xe(),u=Q("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[h,d]=N(!1),m=async p=>{d(!0);try{await ut(p)}finally{d(!1)}},[f,g]=N(o().value),[b,x]=N(o().state),U=Dt(f,b),R=[],$=N([]),O=P(()=>Ce(t(),U.pathname)),ie=Je(()=>{const p=O(),k={};for(let T=0;T<p.length;T++)Object.assign(k,p[T].params);return k}),F={pattern:u,path:()=>u,outlet:()=>null,resolvePath(p){return Q(u,p)}};return H(()=>{const{value:p,state:k}=o();L(()=>{p!==f()&&m(()=>{M="native",g(p),x(k),$[1]([])}).then(()=>{M=void 0})})}),{base:F,location:U,params:ie,isRouting:h,renderPath:a,parsePath:l,navigatorFactory:S,matches:O,beforeLeave:c,preloadRoute:E,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:$};function W(p,k,T){L(()=>{if(typeof k=="number"){k&&(i.go?i.go(k):console.warn("Router integration does not support relative routing"));return}const{replace:le,resolve:ae,scroll:q,state:X}={replace:!1,resolve:!0,scroll:!0,...T},D=ae?p.resolvePath(k):Q("",k);if(D===void 0)throw new Error(`Path '${k}' is not a routable path`);if(R.length>=Nt)throw new Error("Too many redirects");const xe=f();if((D!==xe||X!==b())&&!Pt){if(c.confirm(D,T)){const tt=R.push({value:xe,replace:le,scroll:q,state:b()});m(()=>{M="navigate",g(D),x(X),$[1]([])}).then(()=>{R.length===tt&&(M=void 0,A({value:D,state:X}))})}}})}function S(p){return p=p||ft(Ze)||F,(k,T)=>W(p,k,T)}function A(p){const k=R[0];k&&((p.value!==k.value||p.state!==k.state)&&s({...p,replace:k.replace,scroll:k.scroll}),R.length=0)}function E(p,k){const T=Ce(t(),p.pathname),le=M;M="preload";for(let ae in T){const{route:q,params:X}=T[ae];q.component&&q.component.preload&&q.component.preload();const{load:D}=q;k&&D&&Be(n(),()=>D({params:X,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:Ye(p),state:null,key:""},intent:"preload"}))}M=le}}function Ut(e,t,n,r){const{base:o,location:s,params:i}=e,{pattern:l,component:a,load:c}=r().route,u=P(()=>r().path);a&&a.preload&&a.preload();const h=c?c({params:i,location:s,intent:M||"initial"}):void 0;return{parent:t,pattern:l,path:u,outlet:()=>a?_(a,{params:i,location:s,data:h,get children(){return n()}}):n(),resolvePath(m){return Q(o.path(),m,u())}}}const Ft=e=>t=>{const{base:n}=t,r=we(()=>t.children),o=P(()=>et(r(),t.base||""));let s;const i=Mt(e,o,()=>s,{base:n,singleFlight:t.singleFlight});return e.create&&e.create(i),_(jt.Provider,{value:i,get children(){return _(qt,{routerState:i,get root(){return t.root},get load(){return t.rootLoad},get children(){return[P(()=>(s=je())&&null),_(Vt,{routerState:i,get branches(){return o()}})]}})}})};function qt(e){const t=e.routerState.location,n=e.routerState.params,r=P(()=>e.load&&L(()=>e.load({params:n,location:t,intent:"preload"})));return _(He,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>_(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Vt(e){const t=[];let n;const r=P(Ne(e.routerState.matches,(o,s,i)=>{let l=s&&o.length===s.length;const a=[];for(let c=0,u=o.length;c<u;c++){const h=s&&s[c],d=o[c];i&&h&&d.route.key===h.route.key?a[c]=i[c]:(l=!1,t[c]&&t[c](),Te(m=>{t[c]=m,a[c]=Ut(e.routerState,a[c-1]||e.routerState.base,Le(()=>r()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(o.length).forEach(c=>c()),i&&l?i:(n=a[0],a)}));return Le(()=>r()&&n)()}const Le=e=>()=>_(He,{get when(){return e()},keyed:!0,children:t=>_(Ze.Provider,{value:t,get children(){return t.outlet()}})}),Re=e=>{const t=we(()=>e.children);return bt(e,{get children(){return t()}})};function Ht([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Kt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Wt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Ht(N(n(e.get()),{equals:(o,s)=>o.value===s.value}),void 0,o=>(!t&&e.set(o),o));return e.init&&ye(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Ft({signal:r,create:e.create,utils:e.utils})}function Xt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Gt(e,t){const n=Kt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Yt=new Map;function Jt(e=!0,t=!1,n="/_server"){return r=>{const o=r.base.path(),s=r.navigatorFactory(r.base);let i={};function l(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function a(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const g=f.composedPath().find(O=>O instanceof Node&&O.nodeName.toUpperCase()==="A");if(!g||t&&!g.hasAttribute("link"))return;const b=l(g),x=b?g.href.baseVal:g.href;if((b?g.target.baseVal:g.target)||!x&&!g.hasAttribute("state"))return;const R=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||R&&R.includes("external"))return;const $=b?new URL(x,document.baseURI):new URL(x);if(!($.origin!==window.location.origin||o&&$.pathname&&!$.pathname.toLowerCase().startsWith(o.toLowerCase())))return[g,$]}function c(f){const g=a(f);if(!g)return;const[b,x]=g,U=r.parsePath(x.pathname+x.search+x.hash),R=b.getAttribute("state");f.preventDefault(),s(U,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:R&&JSON.parse(R)})}function u(f){const g=a(f);if(!g)return;const[b,x]=g;i[x.pathname]||r.preloadRoute(x,b.getAttribute("preload")!=="false")}function h(f){const g=a(f);if(!g)return;const[b,x]=g;i[x.pathname]||(i[x.pathname]=setTimeout(()=>{r.preloadRoute(x,b.getAttribute("preload")!=="false"),delete i[x.pathname]},200))}function d(f){const g=a(f);if(!g)return;const[,b]=g;i[b.pathname]&&(clearTimeout(i[b.pathname]),delete i[b.pathname])}function m(f){if(f.defaultPrevented)return;let g=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!g)return;if(!g.startsWith("https://action/")){const x=new URL(g,Ge);if(g=r.parsePath(x.pathname+x.search),!g.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const b=Yt.get(g);if(b){f.preventDefault();const x=new FormData(f.target);f.submitter&&f.submitter.name&&x.append(f.submitter.name,f.submitter.value),b.call({r,f:f.target},x)}}We(["click","submit"]),document.addEventListener("click",c),e&&(document.addEventListener("mouseover",h),document.addEventListener("mouseout",d),document.addEventListener("focusin",u),document.addEventListener("touchstart",u)),document.addEventListener("submit",m),ye(()=>{document.removeEventListener("click",c),e&&(document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",d),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",m)})}}function Qt(e){const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),n=Xe();return Wt({get:t,set({value:r,replace:o,scroll:s,state:i}){o?window.history.replaceState(Ct(i),"",r):window.history.pushState(i,"",r),Gt(window.location.hash.slice(1),s),ve()},init:r=>Xt(window,"popstate",Lt(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Jt(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const Zt="/assets/logo-BHl3PMIN.webp";var zt=Ke('<div class="fixed w-full z-20"><nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full "><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 "><a href=/ class="flex items-center space-x-3 rtl:space-x-reverse"><img class=" h-8 select-none "alt="Vegachat Logo"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vegachat</span></a><button type=button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"aria-controls=navbar-default><span class=sr-only>Open main menu</span><svg class="w-5 h-5"aria-hidden=true xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 17 14"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M1 1h15M1 7h15M1 13h15"></path></svg></button><div id=navbar-default><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"><li><a href=/ class="block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-white md:dark:text-pink-500"aria-current=page>Home</a></li><li><a href=/about class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a></li><li><a href=/services class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a></li><li><a href=/prices class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a></li><li><a href=/contact class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a></li></ul></div></div></nav><div class=h-96>');const en=()=>{const[e,t]=N(!1);ye(()=>{t(!1)}),ct(()=>{t(!1)});const n=()=>{t(!e())};return(()=>{var r=zt(),o=r.firstChild,s=o.firstChild,i=s.firstChild,l=i.firstChild,a=i.nextSibling,c=a.nextSibling;return Ee(l,"src",Zt),a.$$click=n,H(u=>{var h=e()?"true":"false",d=`${e()?"block":"hidden"} w-full md:block md:w-auto`;return h!==u.e&&Ee(a,"aria-expanded",u.e=h),d!==u.t&&At(c,u.t=d),u},{e:void 0,t:void 0}),r})()};We(["click"]);var tn=Ke("<h1>My Site with lots of pages");const nn=Ve(()=>Oe(()=>import("./services-DGVgSILo.js"),[])),rn=Ve(()=>Oe(()=>import("./home-xAUm7HIy.js"),[])),on=e=>[_(en,{}),tn(),P(()=>e.children)];St(()=>_(Qt,{root:on,get children(){return[_(Re,{path:"/services",component:nn}),_(Re,{path:"/",component:rn})]}}),document.getElementById("root"));export{_ as a,it as b,N as c,H as d,P as e,We as f,kt as i,en as n,Ee as s,Ke as t};