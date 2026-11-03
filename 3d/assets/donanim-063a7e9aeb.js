var ue=document.documentElement,Ht=(n,t=document)=>t.querySelector(n),_n=(n,t=document)=>[...t.querySelectorAll(n)],ai=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},fi=n=>{try{return localStorage.getItem(n)}catch{return null}},ud=0,Ai=n=>{let t=Ht("#duyuru");if(t){if(clearTimeout(ud),t.textContent!==n){t.textContent=n;return}t.textContent="",ud=setTimeout(()=>{t.textContent=n},100)}};var hd="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";function dd(n){if(!n)return;let t=()=>{n.classList.toggle("ayar-acik",!!n.querySelector(".ayarlar:not([hidden])")),n.classList.toggle("erisim-acik",!!n.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function fd(n){if(!(!n||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;n.classList.toggle("dar-640",e<=640),n.classList.toggle("dar-380",e<=380)}).observe(n)}}function pd(n,t){if(!n)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){n.hidden=!0;return}n.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}function md(){let n=Ht("#ders-veri"),t=n?JSON.parse(n.textContent):null;ue.dataset.js="1";let e={veri:t,S:null,sinifDegisince:null,pencere:null,temaRengi:null},i=["5","6","7","8"];function s(y,g=!0){ue.dataset.sinif=y,ue.dataset.sinifSecili="1",g&&ai("bote-3d-sinif",y);let p=new URL(location.href);p.searchParams.set("sinif",y),history.replaceState(null,"",p);for(let M of _n("[data-sinif-yaz]"))M.textContent=`${y}. s\u0131n\u0131f`;for(let M of _n("a[data-ders-baglanti]")){let E=new URL(M.href,location.href);E.searchParams.set("sinif",y),M.href=E.pathname+E.search}for(let M of _n("[data-sinif-sec]"))M.setAttribute("aria-pressed",String(M.dataset.sinifSec===y));e.sinifDegisince?.()}let r=Ht("#sinif-penceresi"),a=new URLSearchParams(location.search).get("sinif");if(i.includes(a))s(a);else{let y=fi("bote-3d-sinif");if(i.includes(y)){ue.dataset.sinif=y,ue.dataset.sinifSecili="1";for(let g of _n("[data-sinif-yaz]"))g.textContent=`${y}. s\u0131n\u0131f`;for(let g of _n("[data-sinif-sec]"))g.setAttribute("aria-pressed",String(g.dataset.sinifSec===y))}r&&t&&r.showModal?.()}document.addEventListener("click",y=>{let g=y.target.closest("[data-sinif-sec]");g&&(s(g.dataset.sinifSec),r?.open&&(r.close(),Ht(".adim.etkin h2")?.focus({preventScroll:!0})),t?Ai(`${g.dataset.sinifSec}. s\u0131n\u0131f anlat\u0131m\u0131 se\xE7ildi`):o())});function o(){let y=Ht("#dersler");if(!y)return;let g=y.getBoundingClientRect();(g.top<0||g.top>window.innerHeight*.55)&&y.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),Ai(`${ue.dataset.sinif}. s\u0131n\u0131f se\xE7ildi. \u015Eimdi dersi se\xE7in.`)}Ht("#sinif-dugme")?.addEventListener("click",()=>r?.showModal?.());let l=new URLSearchParams(location.search).get("mod")||fi("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),c=window.matchMedia(hd),u=l;function d(y,g){u=y,ue.dataset.mod=y==="tahta"&&c.matches?"normal":y,Ht("#tahta-dugme")?.setAttribute("aria-pressed",String(ue.dataset.mod==="tahta")),g&&(ai("bote-3d-mod",y),e.S?.guvenliYenile())}d(l,!1),c.addEventListener?.("change",()=>{let y=ue.dataset.mod;d(u,!1),ue.dataset.mod!==y&&e.S?.guvenliYenile()}),Ht("#tahta-dugme")?.addEventListener("click",()=>d(ue.dataset.mod==="tahta"?"normal":"tahta",!0));let h=()=>ue.dataset.theme==="dark"?"#17121f":"#e9e5f1";Ht("#tema-dugme")?.addEventListener("click",()=>{let y=ue.dataset.theme!=="dark";y?ue.dataset.theme="dark":delete ue.dataset.theme,ai("bote-theme",y?"dark":"light"),e.S?.arkaPlan(h())}),pd(Ht("#tam-ekran"),ue);let f=Ht("#ogretmen-dugme");function m(y){ue.dataset.ek=y?"acik":"",f?.setAttribute("aria-expanded",String(y)),y&&Ht("#ogretmen")?.focus()}return f?.addEventListener("click",()=>m(ue.dataset.ek!=="acik")),Ht("#ogretmen-kapat")?.addEventListener("click",()=>{m(!1),f?.focus()}),document.addEventListener("keydown",y=>{y.key==="Escape"&&ue.dataset.ek==="acik"&&!r?.open&&(m(!1),f?.focus())}),document.addEventListener("click",y=>{let g=y.target.closest("[data-secenek]");if(!g)return;let p=g.closest(".soru");if(!p||p.dataset.cevaplandi)return;p.dataset.cevaplandi="1";let M=g.hasAttribute("data-dogru");g.classList.add(M?"dogru":"yanlis"),p.querySelector("[data-dogru]")?.classList.add("dogru");let E=p.querySelector(".aciklama");E&&(E.hidden=!1);let _=p.closest(".sinav"),w=_n(".soru[data-cevaplandi]",_),A=w.filter(v=>v.querySelector(".dogru[data-dogru]")&&!v.querySelector(".yanlis")),R=Ht(".sinav-sonuc",_);R&&w.length===_n(".soru",_).length&&(R.textContent=`${w.length} sorudan ${A.length} do\u011Fru.`),Ai(M?"Do\u011Fru cevap":"Yanl\u0131\u015F cevap; do\u011Fru se\xE7enek i\u015Faretlendi")}),e.pencere=r,e.temaRengi=h,e}var Xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jd=0,zu=1,Qd=2;var mr=1,tf=2,ca=3,qs=0,On=1,bn=2,os=0,ua=1,mo=2,Ou=3,Bu=4,ef=5;var gr=100,nf=101,sf=102,rf=103,af=104,of=200,lf=201,cf=202,uf=203,Gu=204,Vu=205,hf=206,df=207,ff=208,pf=209,mf=210,gf=211,yf=212,xf=213,_f=214,ul=0,hl=1,dl=2,Xr=3,fl=4,pl=5,ml=6,gl=7,Xl=0,vf=1,bf=2,Wi=0,Hu=1,Wu=2,Xu=3,Yu=4,qu=5,Zu=6,go=7;var Ku=300,Zs=301,yr=302,Yl=303,ql=304,yo=306,yi=1e3,ns=1001,yl=1002,Dn=1003,Mf=1004;var xo=1005;var vn=1006,Zl=1007;var Ti=1008;var li=1009,$u=1010,Ju=1011,ha=1012,Kl=1013,Xi=1014,ki=1015,Yi=1016,$l=1017,Jl=1018,da=1020,ju=35902,Qu=35899,th=1021,eh=1022,Ri=1023,is=1026,Ks=1027,jl=1028,Ql=1029,$s=1030,tc=1031;var ec=1033,_o=33776,vo=33777,bo=33778,Mo=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37488,uc=37489,So=37490,hc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,yc=37813,xc=37814,_c=37815,vc=37816,bc=37817,Mc=37818,Sc=37819,wc=37820,Ac=37821,Ec=36492,Tc=36494,kc=36495,Rc=36283,Cc=36284,wo=36285,Pc=36286;var za=2300,xl=2301,ll=2302,Eu=2303,Tu=2400,ku=2401,Ru=2402;var Sf=3200;var Ao=0,wf=1,qi="",pn="srgb",Oa="srgb-linear",Ba="linear",He="srgb";var cl=7680;var Af=519,Ef=512,Tf=513,kf=514,Ic=515,Rf=516,Cf=517,Lc=518,Pf=519,If=35044;var nh="300 es",Fi=2e3,Yr=2001;function zm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Om(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lf(){let n=Ga("canvas");return n.style.display="block",n}var gd={},qr=null;function ih(...n){let t="THREE."+n.shift();qr?qr("log",t,...n):console.log(t,...n)}function Df(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function fe(...n){n=Df(n);let t="THREE."+n.shift();if(qr)qr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ge(...n){n=Df(n);let t="THREE."+n.shift();if(qr)qr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function cr(...n){let t=n.join(" ");t in gd||(gd[t]=!0,fe(...n))}function Nf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Uf={[ul]:hl,[dl]:ml,[fl]:gl,[Xr]:pl,[hl]:ul,[ml]:dl,[gl]:fl,[pl]:Xr},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=1234567,Hr=Math.PI/180,Zr=180/Math.PI;function xr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function sh(n,t){return(n%t+t)%t}function Bm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Gm(n,t,e){return n!==t?(e-n)/(t-n):0}function Na(n,t,e){return(1-e)*n+e*t}function Vm(n,t,e,i){return Na(n,t,1-Math.exp(-e*i))}function Hm(n,t=1){return t-Math.abs(sh(n,t*2)-t)}function Wm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Xm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ym(n,t){return n+Math.floor(Math.random()*(t-n+1))}function qm(n,t){return n+Math.random()*(t-n)}function Zm(n){return n*(.5-Math.random())}function Km(n){n!==void 0&&(yd=n);let t=yd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $m(n){return n*Hr}function Jm(n){return n*Zr}function jm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Qm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function t0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function e0(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*m,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*m,o*c);break;case"ZYZ":n.set(l*m,l*f,o*u,o*c);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rh={DEG2RAD:Hr,RAD2DEG:Zr,generateUUID:xr,clamp:Te,euclideanModulo:sh,mapLinear:Bm,inverseLerp:Gm,lerp:Na,damp:Vm,pingpong:Hm,smoothstep:Wm,smootherstep:Xm,randInt:Ym,randFloat:qm,randFloatSpread:Zm,seededRandom:Km,degToRad:$m,radToDeg:Jm,isPowerOfTwo:jm,ceilPowerOfTwo:Qm,floorPowerOfTwo:t0,setQuaternionFromProperEuler:e0,normalize:$n,denormalize:Vr},hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var Rt=hh,zn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],m=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==m){let g=l*h+c*f+u*m+d*y;g<0&&(h=-h,f=-f,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+y*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*d+l*f-c*h,t[e+1]=l*m+u*h+c*d-o*f,t[e+2]=c*m+u*f+o*h-l*d,t[e+3]=u*m-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dh=class dh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tu.copy(this).projectOnVector(t),this.sub(tu)}reflect(t){return this.sub(tu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dh.prototype.isVector3=!0;var P=dh,tu=new P,xd=new zn,fh=class fh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],y=s[0],g=s[3],p=s[6],M=s[1],E=s[4],_=s[7],w=s[2],A=s[5],R=s[8];return r[0]=a*y+o*M+l*w,r[3]=a*g+o*E+l*A,r[6]=a*p+o*_+l*R,r[1]=c*y+u*M+d*w,r[4]=c*g+u*E+d*A,r[7]=c*p+u*_+d*R,r[2]=h*y+f*M+m*w,r[5]=h*g+f*E+m*A,r[8]=h*p+f*_+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,m=e*d+i*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eu.makeScale(t,e)),this}rotate(t){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eu.makeRotation(-t)),this}translate(t,e){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;var be=fh,eu=new be,_d=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vd=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n0(){let n={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===He&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===He&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Oa]:{primaries:t,whitePoint:i,transfer:Ba,toXYZ:_d,fromXYZ:vd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:i,transfer:He,toXYZ:_d,fromXYZ:vd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}var Pe=n0();function ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kr,_l=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{kr===void 0&&(kr=Ga("canvas")),kr.width=t.width,kr.height=t.height;let s=kr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=kr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ga("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ws(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ws(e[i]/255)*255):e[i]=ws(e[i]);return{data:e,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},i0=0,Kr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nu(s[a].image)):r.push(nu(s[a]))}else r=nu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function nu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_l.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}var s0=0,iu=new P,Jn=class n extends zi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ns,s=ns,r=vn,a=Ti,o=Ri,l=li,c=n.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=xr(),this.name="",this.source=new Kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){fe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yi:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yi:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Ku;Jn.DEFAULT_ANISOTROPY=1;var ph=class ph{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(f+1)/2,w=(p+1)/2,A=(u+h)/4,R=(d+y)/4,v=(m+g)/4;return E>_&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=R/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=v/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=v/r),this.set(i,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-y)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;var an=ph,vl=class extends zi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new an(0,0,t,e),this.scissorTest=!1,this.viewport=new an(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Jn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Kr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends vl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Va=class extends Jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends Jn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wl=class Wl{constructor(t,e,i,s,r,a,o,l,c,u,d,h,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,f,m,y,g)}set(t,e,i,s,r,a,o,l,c,u,d,h,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Rr.setFromMatrixColumn(t,0).length(),r=1/Rr.setFromMatrixColumn(t,1).length(),a=1/Rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,m=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,m=c*u,y=c*d;e[0]=h+y*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,m=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,m=o*u,y=o*d;e[0]=l*u,e[4]=m*c-f,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=m*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+m,e[10]=h-y*d}else if(t.order==="XZY"){let h=a*l,f=a*c,m=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(r0,t,a0)}lookAt(t,e,i){let s=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Ns.crossVectors(i,pi),Ns.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Ns.crossVectors(i,pi)),Ns.normalize(),No.crossVectors(pi,Ns),s[0]=Ns.x,s[4]=No.x,s[8]=pi.x,s[1]=Ns.y,s[5]=No.y,s[9]=pi.y,s[2]=Ns.z,s[6]=No.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],M=i[3],E=i[7],_=i[11],w=i[15],A=s[0],R=s[4],v=s[8],S=s[12],I=s[1],U=s[5],G=s[9],H=s[13],L=s[2],W=s[6],tt=s[10],J=s[14],ot=s[3],O=s[7],j=s[11],st=s[15];return r[0]=a*A+o*I+l*L+c*ot,r[4]=a*R+o*U+l*W+c*O,r[8]=a*v+o*G+l*tt+c*j,r[12]=a*S+o*H+l*J+c*st,r[1]=u*A+d*I+h*L+f*ot,r[5]=u*R+d*U+h*W+f*O,r[9]=u*v+d*G+h*tt+f*j,r[13]=u*S+d*H+h*J+f*st,r[2]=m*A+y*I+g*L+p*ot,r[6]=m*R+y*U+g*W+p*O,r[10]=m*v+y*G+g*tt+p*j,r[14]=m*S+y*H+g*J+p*st,r[3]=M*A+E*I+_*L+w*ot,r[7]=M*R+E*U+_*W+w*O,r[11]=M*v+E*G+_*tt+w*j,r[15]=M*S+E*H+_*J+w*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15],M=l*f-c*h,E=o*f-c*d,_=o*h-l*d,w=a*f-c*u,A=a*h-l*u,R=a*d-o*u;return e*(y*M-g*E+p*_)-i*(m*M-g*w+p*A)+s*(m*E-y*w+p*R)-r*(m*_-y*A+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],M=e*o-i*a,E=e*l-s*a,_=e*c-r*a,w=i*l-s*o,A=i*c-r*o,R=s*c-r*l,v=u*y-d*m,S=u*g-h*m,I=u*p-f*m,U=d*g-h*y,G=d*p-f*y,H=h*p-f*g,L=M*H-E*G+_*U+w*I-A*S+R*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return t[0]=(o*H-l*G+c*U)*W,t[1]=(s*G-i*H-r*U)*W,t[2]=(y*R-g*A+p*w)*W,t[3]=(h*A-d*R-f*w)*W,t[4]=(l*I-a*H-c*S)*W,t[5]=(e*H-s*I+r*S)*W,t[6]=(g*_-m*R-p*E)*W,t[7]=(u*R-h*_+f*E)*W,t[8]=(a*G-o*I+c*v)*W,t[9]=(i*I-e*G-r*v)*W,t[10]=(m*A-y*_+p*M)*W,t[11]=(d*_-u*A-f*M)*W,t[12]=(o*S-a*U-l*v)*W,t[13]=(e*U-i*S+s*v)*W,t[14]=(y*E-m*w-g*M)*W,t[15]=(u*w-d*E+h*M)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,m=r*d,y=a*u,g=a*d,p=o*d,M=l*c,E=l*u,_=l*d,w=i.x,A=i.y,R=i.z;return s[0]=(1-(y+p))*w,s[1]=(f+_)*w,s[2]=(m-E)*w,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(h+p))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(m+E)*R,s[9]=(g-M)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Rr.set(s[0],s[1],s[2]).length(),o=Rr.set(s[4],s[5],s[6]).length(),l=Rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Di.copy(this);let c=1/a,u=1/o,d=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,e.setFromRotationMatrix(Di),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Fi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===Fi)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Yr)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Fi,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===Fi)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Yr)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Wl.prototype.isMatrix4=!0;var Ge=Wl,Rr=new P,Di=new Ge,r0=new P(0,0,0),a0=new P(1,1,1),Ns=new P,No=new P,pi=new P,bd=new Ge,Md=new zn,ss=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Md.setFromEuler(this),this.setFromQuaternion(Md,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},o0=0,Sd=new P,Cr=new zn,xs=new Ge,Uo=new P,Ta=new P,l0=new P,c0=new zn,wd=new P(1,0,0),Ad=new P(0,1,0),Ed=new P(0,0,1),Td={type:"added"},u0={type:"removed"},Pr={type:"childadded",child:null},su={type:"childremoved",child:null},on=class n extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new ss,i=new zn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new be}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,e){return Cr.setFromAxisAngle(t,e),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(wd,t)}rotateY(t){return this.rotateOnAxis(Ad,t)}rotateZ(t){return this.rotateOnAxis(Ed,t)}translateOnAxis(t,e){return Sd.copy(t).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wd,t)}translateY(t){return this.translateOnAxis(Ad,t)}translateZ(t){return this.translateOnAxis(Ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Uo.copy(t):Uo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(Ta,Uo,this.up):xs.lookAt(Uo,Ta,this.up),this.quaternion.setFromRotationMatrix(xs),s&&(xs.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(xs),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Td),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u0),su.child=t,this.dispatchEvent(su),su.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xs.multiply(t.parent.matrixWorld)),t.applyMatrix4(xs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Td),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,c0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new P(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},h0={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function ru(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Pe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Pe.workingColorSpace){if(t=sh(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ru(a,r,t+1/3),this.g=ru(a,r,t),this.b=ru(a,r,t-1/3)}return Pe.colorSpaceToWorking(this,s),this}setStyle(t,e=pn){function i(r){r!==void 0&&parseFloat(r)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:fe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let i=Ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return Pe.workingToColorSpace(Hn.copy(this),t),Math.round(Te(Hn.r*255,0,255))*65536+Math.round(Te(Hn.g*255,0,255))*256+Math.round(Te(Hn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.workingToColorSpace(Hn.copy(this),e);let i=Hn.r,s=Hn.g,r=Hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Pe.workingColorSpace){return Pe.workingToColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=pn){Pe.workingToColorSpace(Hn.copy(this),t);let e=Hn.r,i=Hn.g,s=Hn.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Us),this.setHSL(Us.h+t,Us.s+e,Us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Us),t.getHSL(Fo);let i=Na(Us.h,Fo.h,e),s=Na(Us.s,Fo.s,e),r=Na(Us.l,Fo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new le;le.NAMES=Ff;var ur=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ni=new P,_s=new P,au=new P,vs=new P,Ir=new P,Lr=new P,kd=new P,ou=new P,lu=new P,cu=new P,uu=new an,hu=new an,du=new an,Ss=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ni.subVectors(t,e),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ni.subVectors(s,e),_s.subVectors(i,e),au.subVectors(t,e);let a=Ni.dot(Ni),o=Ni.dot(_s),l=Ni.dot(au),c=_s.dot(_s),u=_s.dot(au),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,vs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vs.x),l.addScaledVector(a,vs.y),l.addScaledVector(o,vs.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return uu.setScalar(0),hu.setScalar(0),du.setScalar(0),uu.fromBufferAttribute(t,e),hu.fromBufferAttribute(t,i),du.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(uu,r.x),a.addScaledVector(hu,r.y),a.addScaledVector(du,r.z),a}static isFrontFacing(t,e,i,s){return Ni.subVectors(i,e),_s.subVectors(t,e),Ni.cross(_s).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),_s.subVectors(this.a,this.b),Ni.cross(_s).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ir.subVectors(s,i),Lr.subVectors(r,i),ou.subVectors(t,i);let l=Ir.dot(ou),c=Lr.dot(ou);if(l<=0&&c<=0)return e.copy(i);lu.subVectors(t,s);let u=Ir.dot(lu),d=Lr.dot(lu);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Ir,a);cu.subVectors(t,r);let f=Ir.dot(cu),m=Lr.dot(cu);if(m>=0&&f<=m)return e.copy(r);let y=f*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Lr,o);let g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return kd.subVectors(r,s),o=(d-u)/(d-u+(f-m)),e.copy(s).addScaledVector(kd,o);let p=1/(g+y+h);return a=y*p,o=h*p,e.copy(i).addScaledVector(Ir,a).addScaledVector(Lr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ka),Oo.subVectors(this.max,ka),Dr.subVectors(t.a,ka),Nr.subVectors(t.b,ka),Ur.subVectors(t.c,ka),Fs.subVectors(Nr,Dr),zs.subVectors(Ur,Nr),sr.subVectors(Dr,Ur);let e=[0,-Fs.z,Fs.y,0,-zs.z,zs.y,0,-sr.z,sr.y,Fs.z,0,-Fs.x,zs.z,0,-zs.x,sr.z,0,-sr.x,-Fs.y,Fs.x,0,-zs.y,zs.x,0,-sr.y,sr.x,0];return!fu(e,Dr,Nr,Ur,Oo)||(e=[1,0,0,0,1,0,0,0,1],!fu(e,Dr,Nr,Ur,Oo))?!1:(Bo.crossVectors(Fs,zs),e=[Bo.x,Bo.y,Bo.z],fu(e,Dr,Nr,Ur,Oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bs=[new P,new P,new P,new P,new P,new P,new P,new P],Ui=new P,zo=new Wn,Dr=new P,Nr=new P,Ur=new P,Fs=new P,zs=new P,sr=new P,ka=new P,Oo=new P,Bo=new P,rr=new P;function fu(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){rr.fromArray(n,r);let o=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=t.dot(rr),c=e.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var An=new P,Go=new Rt,d0=0,je=class extends zi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=If,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix3(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),i=$n(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),i=$n(i,this.array),s=$n(s,this.array),r=$n(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=class extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Wa=class extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Fe=class extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}},f0=new Wn,Ra=new P,pu=new P,As=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):f0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ra.subVectors(t,this.center);let e=Ra.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ra,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ra.copy(t.center).add(pu)),this.expandByPoint(Ra.copy(t.center).sub(pu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},p0=0,Ei=new Ge,mu=new on,Fr=new P,mi=new Wn,Ca=new Wn,Ln=new P,Qe=class n extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zm(t)?Wa:Ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new be().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,i){return Ei.makeTranslation(t,e,i),this.applyMatrix4(Ei),this}scale(t,e,i){return Ei.makeScale(t,e,i),this.applyMatrix4(Ei),this}lookAt(t){return mu.lookAt(t),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Ln.addVectors(mi.min,Ca.min),mi.expandByPoint(Ln),Ln.addVectors(mi.max,Ca.max),mi.expandByPoint(Ln)):(mi.expandByPoint(Ca.min),mi.expandByPoint(Ca.max))}mi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ln.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ln));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ln.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(t,c),Ln.add(Fr)),s=Math.max(s,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new je(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new P,l[v]=new P;let c=new P,u=new P,d=new P,h=new Rt,f=new Rt,m=new Rt,y=new P,g=new P;function p(v,S,I){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,I),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,I),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(U),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(U),o[v].add(y),o[S].add(y),o[I].add(y),l[v].add(g),l[S].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,S=M.length;v<S;++v){let I=M[v],U=I.start,G=I.count;for(let H=U,L=U+G;H<L;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let E=new P,_=new P,w=new P,A=new P;function R(v){w.fromBufferAttribute(s,v),A.copy(w);let S=o[v];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),_.crossVectors(A,S);let U=_.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,U)}for(let v=0,S=M.length;v<S;++v){let I=M[v],U=I.start,G=I.count;for(let H=U,L=U+G;H<L;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(t)for(let h=0,f=t.count;h<f;h+=3){let m=t.getX(h+0),y=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ln.fromBufferAttribute(t,e),Ln.normalize(),t.setXYZ(e,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)h[m++]=c[f++]}return new je(h,u,d)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gu=new P,m0=new P,g0=new be,gi=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=gu.subVectors(i,e).cross(m0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(gu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||g0.getNormalMatrix(t),s=this.coplanarPoint(gu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},y0=0,Oi=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=ua,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Vu,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){fe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new gi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ms=new P,yu=new P,Vo=new P,Ho=new P,Bs=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ms)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ms.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ms.copy(this.origin).addScaledVector(this.direction,e),Ms.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yu.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Ho.copy(this.origin).sub(yu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Vo),o=Ho.dot(this.direction),l=-Ho.dot(Vo),c=Ho.lengthSq(),u=Math.abs(1-a*a),d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=r*u,d>=0)if(h>=-m)if(h<=m){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yu).addScaledVector(Vo,h),f}intersectSphere(t,e){if(t.radius<0)return null;Ms.subVectors(t.center,this.origin);let i=Ms.dot(this.direction),s=Ms.dot(Ms)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ms)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,m=e.x-a.x,y=e.y-a.y,g=e.z-a.z,p=i.x-a.x,M=i.y-a.y,E=i.z-a.z,_=Math.abs(l),w=Math.abs(c),A=Math.abs(u),R,v,S,I,U,G,H,L,W,tt,J,ot;if(_>=w&&_>=A?(S=l,G=d,W=m,ot=p,l>=0?(R=c,v=u,I=h,U=f,H=y,L=g,tt=M,J=E):(R=u,v=c,I=f,U=h,H=g,L=y,tt=E,J=M)):w>=A?(S=c,G=h,W=y,ot=M,c>=0?(R=u,v=l,I=f,U=d,H=g,L=m,tt=E,J=p):(R=l,v=u,I=d,U=f,H=m,L=g,tt=p,J=E)):(S=u,G=f,W=g,ot=E,u>=0?(R=l,v=c,I=d,U=h,H=m,L=y,tt=p,J=M):(R=c,v=l,I=h,U=d,H=y,L=m,tt=M,J=p)),S===0)return null;let O=R/S,j=v/S,st=1/S,zt=I-O*G,xt=U-j*G,Xt=H-O*W,ne=L-j*W,Lt=tt-O*ot,et=J-j*ot,rt=Lt*ne-et*Xt,Tt=zt*et-xt*Lt,Jt=Xt*xt-ne*zt;if(s){if(rt<0||Tt<0||Jt<0)return null}else if((rt<0||Tt<0||Jt<0)&&(rt>0||Tt>0||Jt>0))return null;let Dt=rt+Tt+Jt;if(Dt===0)return null;let kt=st*(rt*G+Tt*W+Jt*ot);return(Dt>0?kt<0:kt>0)?null:this.at(kt/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rd=new Ge,ar=new Bs,Wo=new As,Cd=new P,Xo=new P,Yo=new P,qo=new P,xu=new P,Zo=new P,Pd=new P,Ko=new P,Et=class extends on{constructor(t=new Qe,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(xu.fromBufferAttribute(d,t),a?Zo.addScaledVector(xu,u):Zo.addScaledVector(xu.sub(e),u))}e.add(Zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),ar.copy(t.ray).recast(t.near),!(Wo.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Wo,Cd)===null||ar.origin.distanceToSquared(Cd)>(t.far-t.near)**2))&&(Rd.copy(r).invert(),ar.copy(t.ray).applyMatrix4(Rd),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=h.length;m<y;m++){let g=h[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,w=E;_<w;_+=3){let A=o.getX(_),R=o.getX(_+1),v=o.getX(_+2);s=$o(this,p,t,i,c,u,d,A,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=o.getX(g),E=o.getX(g+1),_=o.getX(g+2);s=$o(this,a,t,i,c,u,d,M,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=h.length;m<y;m++){let g=h[m],p=a[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,w=E;_<w;_+=3){let A=_,R=_+1,v=_+2;s=$o(this,p,t,i,c,u,d,A,R,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=g,E=g+1,_=g+2;s=$o(this,a,t,i,c,u,d,M,E,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function x0(n,t,e,i,s,r,a,o){let l;if(t.side===On?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===qs,o),l===null)return null;Ko.copy(o),Ko.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ko);return c<e.near||c>e.far?null:{distance:c,point:Ko.clone(),object:n}}function $o(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Xo),n.getVertexPosition(l,Yo),n.getVertexPosition(c,qo);let u=x0(n,t,e,i,Xo,Yo,qo,Pd);if(u){let d=new P;Ss.getBarycoord(Pd,Xo,Yo,qo,d),s&&(u.uv=Ss.getInterpolatedAttribute(s,o,l,c,d,new Rt)),r&&(u.uv1=Ss.getInterpolatedAttribute(r,o,l,c,d,new Rt)),a&&(u.normal=Ss.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new P,materialIndex:0};Ss.getNormal(Xo,Yo,qo,h.normal),u.face=h,u.barycoord=d}return u}var Xa=class extends Jn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Dn,u=Dn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends je{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zr=new Ge,Id=new Ge,Jo=[],Ld=new Wn,_0=new Ge,Pa=new Et,Ia=new As,Es=class extends Et{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,_0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zr),Ld.copy(t.boundingBox).applyMatrix4(zr),this.boundingBox.union(Ld)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,zr),Ia.copy(t.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),t.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),Id.multiplyMatrices(i,zr),Pa.matrixWorld=Id,Pa.raycast(t,Jo);for(let a=0,o=Jo.length;a<o;a++){let l=Jo[a];l.instanceId=r,l.object=this,e.push(l)}Jo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(s*this.count),s,this.count,jl,ki));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},or=new As,v0=new Rt(.5,.5),jo=new P,Qr=class{constructor(t=new gi,e=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],E=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,p-m,w-M).normalize(),s[1].setComponents(c+a,f+u,p+m,w+M).normalize(),s[2].setComponents(c+o,f+d,p+y,w+E).normalize(),s[3].setComponents(c-o,f-d,p-y,w-E).normalize(),i)s[4].setComponents(l,h,g,_).normalize(),s[5].setComponents(c-l,f-h,p-g,w-_).normalize();else if(s[4].setComponents(c-l,f-h,p-g,w-_).normalize(),e===Fi)s[5].setComponents(c+l,f+h,p+g,w+_).normalize();else if(e===Yr)s[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){or.center.set(0,0,0);let e=v0.distanceTo(t.center);return or.radius=.7071067811865476+e,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(jo.x=s.normal.x>0?t.max.x:t.min.x,jo.y=s.normal.y>0?t.max.y:t.min.y,jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ta=class extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ml=new P,Sl=new P,Dd=new Ge,La=new Bs,Qo=new As,_u=new P,Nd=new P,wl=class extends on{constructor(t=new Qe,e=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ml.fromBufferAttribute(e,s-1),Sl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ml.distanceTo(Sl);t.setAttribute("lineDistance",new Fe(i,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;Dd.copy(s).invert(),La.copy(t.ray).applyMatrix4(Dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let y=f,g=m-1;y<g;y+=c){let p=u.getX(y),M=u.getX(y+1),E=tl(this,t,La,l,p,M,y);E&&e.push(E)}if(this.isLineLoop){let y=u.getX(m-1),g=u.getX(f),p=tl(this,t,La,l,y,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let y=f,g=m-1;y<g;y+=c){let p=tl(this,t,La,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=tl(this,t,La,l,m-1,f,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tl(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Ml.fromBufferAttribute(o,s),Sl.fromBufferAttribute(o,r),e.distanceSqToSegment(Ml,Sl,_u,Nd)>i)return;_u.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_u);if(!(c<t.near||c>t.far))return{distance:c,point:Nd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ud=new P,Fd=new P,Ya=class extends wl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ud.fromBufferAttribute(e,s),Fd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ud.distanceTo(Fd);t.setAttribute("lineDistance",new Fe(i,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qa=class extends Jn{constructor(t=[],e=Zs,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bi=class extends Jn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gs=class extends Jn{constructor(t,e,i=Xi,s,r,a,o=Dn,l=Dn,c,u=is,d=1){if(u!==is&&u!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Al=class extends Gs{constructor(t,e=Xi,i=Zs,s,r,a=Dn,o=Dn,l,c=is){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Za=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ln=class n extends Qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(d,2));function m(y,g,p,M,E,_,w,A,R,v,S){let I=_/R,U=w/v,G=_/2,H=w/2,L=A/2,W=R+1,tt=v+1,J=0,ot=0,O=new P;for(let j=0;j<tt;j++){let st=j*U-H;for(let zt=0;zt<W;zt++){let xt=zt*I-G;O[y]=xt*M,O[g]=st*E,O[p]=L,c.push(O.x,O.y,O.z),O[y]=0,O[g]=0,O[p]=A>0?1:-1,u.push(O.x,O.y,O.z),d.push(zt/R),d.push(1-j/v),J+=1}}for(let j=0;j<v;j++)for(let st=0;st<R;st++){let zt=h+st+W*j,xt=h+st+W*(j+1),Xt=h+(st+1)+W*(j+1),ne=h+(st+1)+W*j;l.push(zt,xt,ne),l.push(xt,Xt,ne),ot+=6}o.addGroup(f,ot,S),f+=ot,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ea=class n extends Qe{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,m=i*2+r,y=s+1,g=new P,p=new P;for(let M=0;M<=m;M++){let E=0,_=0,w=0,A=0;if(M<=i){let S=M/i,I=S*Math.PI/2;_=-u-t*Math.cos(I),w=t*Math.sin(I),A=-t*Math.cos(I),E=S*d}else if(M<=i+r){let S=(M-i)/r;_=-u+S*e,w=t,A=0,E=d+S*h}else{let S=(M-i-r)/i,I=S*Math.PI/2;_=u+t*Math.sin(I),w=t*Math.cos(I),A=t*Math.sin(I),E=d+h+S*d}let R=Math.max(0,Math.min(1,E/f)),v=0;M===0?v=.5/s:M===m&&(v=-.5/s);for(let S=0;S<=s;S++){let I=S/s,U=I*Math.PI*2,G=Math.sin(U),H=Math.cos(U);p.x=-w*H,p.y=_,p.z=w*G,o.push(p.x,p.y,p.z),g.set(-w*H,A,w*G),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+v,R)}if(M>0){let S=(M-1)*y;for(let I=0;I<s;I++){let U=S+I,G=S+I+1,H=M*y+I,L=M*y+I+1;a.push(U,G,H),a.push(G,L,H)}}}this.setIndex(a),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var na=class n extends Qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],m=0,y=[],g=i/2,p=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(f,2));function M(){let _=new P,w=new P,A=0,R=(e-t)/i;for(let v=0;v<=r;v++){let S=[],I=v/r,U=I*(e-t)+t;for(let G=0;G<=s;G++){let H=G/s,L=H*l+o,W=Math.sin(L),tt=Math.cos(L);w.x=U*W,w.y=-I*i+g,w.z=U*tt,d.push(w.x,w.y,w.z),_.set(W,R,tt).normalize(),h.push(_.x,_.y,_.z),f.push(H,1-I),S.push(m++)}y.push(S)}for(let v=0;v<s;v++)for(let S=0;S<r;S++){let I=y[S][v],U=y[S+1][v],G=y[S+1][v+1],H=y[S][v+1];(t>0||S!==0)&&(u.push(I,U,H),A+=3),(e>0||S!==r-1)&&(u.push(U,G,H),A+=3)}c.addGroup(p,A,0),p+=A}function E(_){let w=m,A=new Rt,R=new P,v=0,S=_===!0?t:e,I=_===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,g*I,0),h.push(0,I,0),f.push(.5,.5),m++;let U=m;for(let G=0;G<=s;G++){let L=G/s*l+o,W=Math.cos(L),tt=Math.sin(L);R.x=S*tt,R.y=g*I,R.z=S*W,d.push(R.x,R.y,R.z),h.push(0,I,0),A.x=W*.5+.5,A.y=tt*.5*I+.5,f.push(A.x,A.y),m++}for(let G=0;G<s;G++){let H=w+G,L=U+G;_===!0?u.push(L,L+1,H):u.push(L+1,L,H),v+=3}c.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ka=class n extends na{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var el=new P,nl=new P,vu=new P,il=new Ss,$a=class extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Hr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:y,b:g,c:p}=il;if(y.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),il.getNormal(vu),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let E=(M+1)%3,_=d[M],w=d[E],A=il[u[M]],R=il[u[E]],v=`${_}_${w}`,S=`${w}_${_}`;S in h&&h[S]?(vu.dot(h[S].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(R.x,R.y,R.z)),h[S]=null):v in h||(h[v]={index0:c[M],index1:c[E],normal:vu.clone()})}}for(let m in h)if(h[m]){let{index0:y,index1:g}=h[m];el.fromBufferAttribute(o,y),nl.fromBufferAttribute(o,g),f.push(el.x,el.y,el.z),f.push(nl.x,nl.y,nl.z)}this.setAttribute("position",new Fe(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Rt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new Ge;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ia=class extends xi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Rt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},El=class extends ia{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var zd=new P,Od=new P,bu=new ah,Mu=new ah,Su=new ah,Gi=class extends xi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Od.subVectors(s[0],s[1]).add(s[0]),c=Od);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),bu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,y,g),Mu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,y,g),Su.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(bu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Mu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Su.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(bu.calc(l),Mu.calc(l),Su.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bd(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function b0(n,t){let e=1-n;return e*e*t}function M0(n,t){return 2*(1-n)*n*t}function S0(n,t){return n*n*t}function Ua(n,t,e,i){return b0(n,t)+M0(n,e)+S0(n,i)}function w0(n,t){let e=1-n;return e*e*e*t}function A0(n,t){let e=1-n;return 3*e*e*n*t}function E0(n,t){return 3*(1-n)*n*n*t}function T0(n,t){return n*n*n*t}function Fa(n,t,e,i,s){return w0(n,t)+A0(n,e)+E0(n,i)+T0(n,s)}var Ja=class extends xi{constructor(t=new Rt,e=new Rt,i=new Rt,s=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Rt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fa(t,s.x,r.x,a.x,o.x),Fa(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tl=class extends xi{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fa(t,s.x,r.x,a.x,o.x),Fa(t,s.y,r.y,a.y,o.y),Fa(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends xi{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends xi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends xi{constructor(t=new Rt,e=new Rt,i=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Rt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ua(t,s.x,r.x,a.x),Ua(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dr=class extends xi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ua(t,s.x,r.x,a.x),Ua(t,s.y,r.y,a.y),Ua(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Bd(o,l.x,c.x,u.x,d.x),Bd(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}},kl=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:Gi,CubicBezierCurve:Ja,CubicBezierCurve3:Tl,EllipseCurve:ia,LineCurve:ja,LineCurve3:hr,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:dr,SplineCurve:to}),sa=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new kl[s.type]().fromJSON(s))}return this}},rs=class extends sa{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ja(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Qa(this.currentPoint.clone(),new Rt(t,e),new Rt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Ja(this.currentPoint.clone(),new Rt(t,e),new Rt(i,s),new Rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new to(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new ia(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vi=class extends rs{constructor(t){super(t),this.uuid=xr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new rs().fromJSON(s))}return this}};function k0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=zf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=L0(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=n[h],m=n[h+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return eo(r,a,e,o,l,c,0),a}function zf(n,t,e,i,s){let r;if(s===W0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Gd(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Gd(a/i|0,n[a],n[a+1],r);return r&&ra(r,r.next)&&(io(r),r=r.next),r}function fr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ra(e,e.next)||mn(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function eo(n,t,e,i,s,r,a){if(!n)return;!a&&r&&z0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?C0(n,i,s,r):R0(n)){t.push(l.i,n.i,c.i),io(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=P0(fr(n),t),eo(n,t,e,i,s,r,2)):a===2&&I0(n,t,e,i,s,r):eo(fr(n),t,e,i,s,r,1);break}}}function R0(n){let t=n.prev,e=n,i=n.next;if(mn(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&Da(s,o,r,l,a,c,m.x,m.y)&&mn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function C0(n,t,e,i){let s=n.prev,r=n,a=n.next;if(mn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),m=Math.min(u,d,h),y=Math.max(o,l,c),g=Math.max(u,d,h),p=Cu(f,m,t,e,i),M=Cu(y,g,t,e,i),E=n.prevZ,_=n.nextZ;for(;E&&E.z>=p&&_&&_.z<=M;){if(E.x>=f&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Da(o,u,l,d,c,h,E.x,E.y)&&mn(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Da(o,u,l,d,c,h,_.x,_.y)&&mn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Da(o,u,l,d,c,h,E.x,E.y)&&mn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&Da(o,u,l,d,c,h,_.x,_.y)&&mn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function P0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ra(i,s)&&Bf(i,e,e.next,s)&&no(i,s)&&no(s,i)&&(t.push(i.i,e.i,s.i),io(e),io(e.next),e=n=s),e=e.next}while(e!==n);return fr(e)}function I0(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&G0(a,o)){let l=Gf(a,o);a=fr(a,a.next),l=fr(l,l.next),eo(a,t,e,i,s,r,0),eo(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function L0(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=zf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(B0(c))}s.sort(D0);for(let r=0;r<s.length;r++)e=N0(s[r],e);return e}function D0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function N0(n,t){let e=U0(n,t);if(!e)return t;let i=Gf(e,n);return fr(i,i.next),fr(e,e.next)}function U0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(ra(n,e))return e;do{if(ra(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Of(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);no(e,n)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&F0(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function F0(n,t){return mn(n.prev,n,t.prev)<0&&mn(t.next,n,n.next)<0}function z0(n,t,e,i){let s=n;do s.z===0&&(s.z=Cu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,O0(s)}function O0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Cu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function B0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Of(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Da(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Of(n,t,e,i,s,r,a,o)}function G0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!V0(n,t)&&(no(n,t)&&no(t,n)&&H0(n,t)&&(mn(n.prev,n,t.prev)||mn(n,t.prev,t))||ra(n,t)&&mn(n.prev,n,n.next)>0&&mn(t.prev,t,t.next)>0)}function mn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ra(n,t){return n.x===t.x&&n.y===t.y}function Bf(n,t,e,i){let s=rl(mn(n,t,e)),r=rl(mn(n,t,i)),a=rl(mn(e,i,n)),o=rl(mn(e,i,t));return!!(s!==r&&a!==o||s===0&&sl(n,e,t)||r===0&&sl(n,i,t)||a===0&&sl(e,n,i)||o===0&&sl(e,t,i))}function sl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function rl(n){return n>0?1:n<0?-1:0}function V0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Bf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function no(n,t){return mn(n.prev,n,n.next)<0?mn(n,t,n.next)>=0&&mn(n,n.prev,t)>=0:mn(n,t,n.prev)<0||mn(n,n.next,t)<0}function H0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Gf(n,t){let e=Pu(n.i,n.x,n.y),i=Pu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Gd(n,t,e,i){let s=Pu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function io(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Pu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function W0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Iu=class{static triangulate(t,e,i=2){return k0(t,e,i)}},lr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Vd(t),Hd(i,t);let a=t.length;e.forEach(Vd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Hd(i,e[l]);let o=Iu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Vd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Hd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var as=class n extends Qe{constructor(t=new Vi([new Rt(.5,.5),new Rt(-.5,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:X0,E,_=!1,w,A,R,v;if(p){E=p.getSpacedPoints(u),_=!0,h=!1;let ht=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,ht),A=new P,R=new P,v=new P}h||(g=0,f=0,m=0,y=0);let S=o.extractPoints(c),I=S.shape,U=S.holes;if(!lr.isClockWise(I)){I=I.reverse();for(let ht=0,gt=U.length;ht<gt;ht++){let vt=U[ht];lr.isClockWise(vt)&&(U[ht]=vt.reverse())}}function H(ht){let vt=10000000000000001e-36,Mt=ht[0];for(let Ct=1;Ct<=ht.length;Ct++){let Qt=Ct%ht.length,Vt=ht[Qt],Yt=Vt.x-Mt.x,ie=Vt.y-Mt.y,N=Yt*Yt+ie*ie,Se=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(Mt.x),Math.abs(Mt.y)),re=vt*Se*Se;if(N<=re){ht.splice(Qt,1),Ct--;continue}Mt=Vt}}H(I),U.forEach(H);let L=U.length,W=I;for(let ht=0;ht<L;ht++){let gt=U[ht];I=I.concat(gt)}function tt(ht,gt,vt){return gt||ge("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(gt,vt)}let J=I.length;function ot(ht,gt,vt){let Mt,Ct,Qt,Vt=ht.x-gt.x,Yt=ht.y-gt.y,ie=vt.x-ht.x,N=vt.y-ht.y,Se=Vt*Vt+Yt*Yt,re=Vt*N-Yt*ie;if(Math.abs(re)>Number.EPSILON){let T=Math.sqrt(Se),x=Math.sqrt(ie*ie+N*N),V=gt.x-Yt/T,q=gt.y+Vt/T,nt=vt.x-N/x,At=vt.y+ie/x,Ut=((nt-V)*N-(At-q)*ie)/(Vt*N-Yt*ie);Mt=V+Vt*Ut-ht.x,Ct=q+Yt*Ut-ht.y;let ct=Mt*Mt+Ct*Ct;if(ct<=2)return new Rt(Mt,Ct);Qt=Math.sqrt(ct/2)}else{let T=!1;Vt>Number.EPSILON?ie>Number.EPSILON&&(T=!0):Vt<-Number.EPSILON?ie<-Number.EPSILON&&(T=!0):Math.sign(Yt)===Math.sign(N)&&(T=!0),T?(Mt=-Yt,Ct=Vt,Qt=Math.sqrt(Se)):(Mt=Vt,Ct=Yt,Qt=Math.sqrt(Se/2))}return new Rt(Mt/Qt,Ct/Qt)}let O=[];for(let ht=0,gt=W.length,vt=gt-1,Mt=ht+1;ht<gt;ht++,vt++,Mt++)vt===gt&&(vt=0),Mt===gt&&(Mt=0),O[ht]=ot(W[ht],W[vt],W[Mt]);let j=[],st,zt=O.concat();for(let ht=0,gt=L;ht<gt;ht++){let vt=U[ht];st=[];for(let Mt=0,Ct=vt.length,Qt=Ct-1,Vt=Mt+1;Mt<Ct;Mt++,Qt++,Vt++)Qt===Ct&&(Qt=0),Vt===Ct&&(Vt=0),st[Mt]=ot(vt[Mt],vt[Qt],vt[Vt]);j.push(st),zt=zt.concat(st)}let xt;if(g===0)xt=lr.triangulateShape(W,U);else{let ht=[],gt=[];for(let vt=0;vt<g;vt++){let Mt=vt/g,Ct=f*Math.cos(Mt*Math.PI/2),Qt=m*Math.sin(Mt*Math.PI/2)+y;for(let Vt=0,Yt=W.length;Vt<Yt;Vt++){let ie=tt(W[Vt],O[Vt],Qt);Tt(ie.x,ie.y,-Ct),Mt===0&&ht.push(ie)}for(let Vt=0,Yt=L;Vt<Yt;Vt++){let ie=U[Vt];st=j[Vt];let N=[];for(let Se=0,re=ie.length;Se<re;Se++){let T=tt(ie[Se],st[Se],Qt);Tt(T.x,T.y,-Ct),Mt===0&&N.push(T)}Mt===0&&gt.push(N)}}xt=lr.triangulateShape(ht,gt)}let Xt=xt.length,ne=m+y;for(let ht=0;ht<J;ht++){let gt=h?tt(I[ht],zt[ht],ne):I[ht];_?(R.copy(w.normals[0]).multiplyScalar(gt.x),A.copy(w.binormals[0]).multiplyScalar(gt.y),v.copy(E[0]).add(R).add(A),Tt(v.x,v.y,v.z)):Tt(gt.x,gt.y,0)}for(let ht=1;ht<=u;ht++)for(let gt=0;gt<J;gt++){let vt=h?tt(I[gt],zt[gt],ne):I[gt];_?(R.copy(w.normals[ht]).multiplyScalar(vt.x),A.copy(w.binormals[ht]).multiplyScalar(vt.y),v.copy(E[ht]).add(R).add(A),Tt(v.x,v.y,v.z)):Tt(vt.x,vt.y,d/u*ht)}for(let ht=g-1;ht>=0;ht--){let gt=ht/g,vt=f*Math.cos(gt*Math.PI/2),Mt=m*Math.sin(gt*Math.PI/2)+y;for(let Ct=0,Qt=W.length;Ct<Qt;Ct++){let Vt=tt(W[Ct],O[Ct],Mt);Tt(Vt.x,Vt.y,d+vt)}for(let Ct=0,Qt=U.length;Ct<Qt;Ct++){let Vt=U[Ct];st=j[Ct];for(let Yt=0,ie=Vt.length;Yt<ie;Yt++){let N=tt(Vt[Yt],st[Yt],Mt);_?Tt(N.x,N.y+E[u-1].y,E[u-1].x+vt):Tt(N.x,N.y,d+vt)}}}Lt(),et();function Lt(){let ht=s.length/3;if(h){let gt=0,vt=J*gt;for(let Mt=0;Mt<Xt;Mt++){let Ct=xt[Mt];Jt(Ct[2]+vt,Ct[1]+vt,Ct[0]+vt)}gt=u+g*2,vt=J*gt;for(let Mt=0;Mt<Xt;Mt++){let Ct=xt[Mt];Jt(Ct[0]+vt,Ct[1]+vt,Ct[2]+vt)}}else{for(let gt=0;gt<Xt;gt++){let vt=xt[gt];Jt(vt[2],vt[1],vt[0])}for(let gt=0;gt<Xt;gt++){let vt=xt[gt];Jt(vt[0]+J*u,vt[1]+J*u,vt[2]+J*u)}}i.addGroup(ht,s.length/3-ht,0)}function et(){let ht=s.length/3,gt=0;rt(W,gt),gt+=W.length;for(let vt=0,Mt=U.length;vt<Mt;vt++){let Ct=U[vt];rt(Ct,gt),gt+=Ct.length}i.addGroup(ht,s.length/3-ht,1)}function rt(ht,gt){let vt=ht.length;for(;--vt>=0;){let Mt=vt,Ct=vt-1;Ct<0&&(Ct=ht.length-1);for(let Qt=0,Vt=u+g*2;Qt<Vt;Qt++){let Yt=J*Qt,ie=J*(Qt+1),N=gt+Mt+Yt,Se=gt+Ct+Yt,re=gt+Ct+ie,T=gt+Mt+ie;Dt(N,Se,re,T)}}}function Tt(ht,gt,vt){l.push(ht),l.push(gt),l.push(vt)}function Jt(ht,gt,vt){kt(ht),kt(gt),kt(vt);let Mt=s.length/3,Ct=M.generateTopUV(i,s,Mt-3,Mt-2,Mt-1);jt(Ct[0]),jt(Ct[1]),jt(Ct[2])}function Dt(ht,gt,vt,Mt){kt(ht),kt(gt),kt(Mt),kt(gt),kt(vt),kt(Mt);let Ct=s.length/3,Qt=M.generateSideWallUV(i,s,Ct-6,Ct-3,Ct-2,Ct-1);jt(Qt[0]),jt(Qt[1]),jt(Qt[3]),jt(Qt[1]),jt(Qt[2]),jt(Qt[3])}function kt(ht){s.push(l[ht*3+0]),s.push(l[ht*3+1]),s.push(l[ht*3+2])}function jt(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Y0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kl[s.type]().fromJSON(s)),new n(i,t.options)}},X0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new Rt(r,a),new Rt(o,l),new Rt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],m=t[s*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Rt(a,1-l),new Rt(c,1-d),new Rt(h,1-m),new Rt(y,1-p)]:[new Rt(o,1-l),new Rt(u,1-d),new Rt(f,1-m),new Rt(g,1-p)]}};function Y0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ke=class n extends Qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<u;p++){let M=p*h-a;for(let E=0;E<c;E++){let _=E*d-r;m.push(_,-M,0),y.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let E=M+c*p,_=M+c*(p+1),w=M+1+c*(p+1),A=M+1+c*p;f.push(E,_,A),f.push(_,w,A)}this.setIndex(f),this.setAttribute("position",new Fe(m,3)),this.setAttribute("normal",new Fe(y,3)),this.setAttribute("uv",new Fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},pr=class n extends Qe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=t,h=(e-t)/s,f=new P,m=new Rt;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}d+=h}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let M=p+g,E=M,_=M+i+1,w=M+i+2,A=M+1;o.push(E,_,A),o.push(_,w,A)}}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var jn=class n extends Qe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new P,f=new P,m=new P;for(let y=0;y<=i;y++){let g=a+y/i*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,M=(s+1)*(y-1)+g-1,E=(s+1)*(y-1)+g,_=(s+1)*y+g;l.push(p,M,_),l.push(M,E,_)}this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Hi=class n extends Qe{constructor(t=new dr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Rt,u=new P,d=[],h=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(f,2));function y(){for(let E=0;E<e;E++)g(E);g(r===!1?e:0),M(),p()}function g(E){u=t.getPointAt(E/e,u);let _=a.normals[E],w=a.binormals[E];for(let A=0;A<=s;A++){let R=A/s*Math.PI*2,v=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+v*w.x,l.y=S*_.y+v*w.y,l.z=S*_.z+v*w.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){let w=(s+1)*(E-1)+(_-1),A=(s+1)*E+(_-1),R=(s+1)*E+_,v=(s+1)*(E-1)+_;m.push(w,A,v),m.push(A,R,v)}}function M(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new kl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var so=class extends Oi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new le(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function _r(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Wd(s))s.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Wd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Xn(n){let t={};for(let e=0;e<n.length;e++){let i=_r(n[e]);for(let s in i)t[s]=i[s]}return t}function Wd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function q0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function oh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}var Vf={clone:_r,merge:Xn},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=q0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new an().fromArray(s.value);break;case"m3":this.uniforms[i].value=new be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Rl=class extends _i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ie=class extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ro=class extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cl=class extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pl=class extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Or(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function wu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Vs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Il=class extends Vs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ku:r=t,o=2*e-i;break;case Ru:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:a=t,l=2*i-e;break;case Ru:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),y=m*m,g=y*m,p=-h*g+2*h*y-h*m,M=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*m+1,E=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+M*a[c+w]+E*a[l+w]+_*a[d+w];return r}},Ll=class extends Vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Dl=class extends Vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nl=class extends Vs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(i-e)/(s-e),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let h=o*2,f=t-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],p=f*h+m*2,M=d[p],E=d[p+1],_=t*h+m*2,w=u[_],A=u[_+1],R=J0(i,e,M,w,s);r[m]=Hf(R,y,E,A,g)}return r}};function Hf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function $0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function J0(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Hf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=$0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Or(e,this.TimeBufferType),this.values=Or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Or(t.times,Array),values:Or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),wu(t.settings)&&(i.settings={inTangents:Or(t.settings.inTangents,Array),outTangents:Or(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case za:e=this.InterpolantFactoryMethodDiscrete;break;case xl:e=this.InterpolantFactoryMethodLinear;break;case ll:e=this.InterpolantFactoryMethodSmooth;break;case Eu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return fe("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return ll;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;wu(this.settings)&&(Xd(this.settings.inTangents,t),Xd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ge("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ge("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ge("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Om(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ge("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ll,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let m=0;m!==i;++m){let y=e[d+m];if(y!==e[h+m]||y!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,wu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=xl;var Hs=class extends vi{constructor(t,e,i){super(t,e,i)}};Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=za;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}};Ul.prototype.ValueTypeName="color";var Fl=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}};Fl.prototype.ValueTypeName="number";var zl=class extends Vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ao=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends vi{constructor(t,e,i){super(t,e,i)}};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=za;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends vi{constructor(t,e,i,s){super(t,e,i,s)}};Ol.prototype.ValueTypeName="vector";var Bl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wf=new Bl,Gl=class{constructor(t){this.manager=t!==void 0?t:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var aa=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},oo=class extends aa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Au=new Ge,Yd=new P,qd=new P,lo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yd),qd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Au,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Yr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Au)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},al=new P,ol=new zn,es=new P,co=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(al,ol,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,es.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(al,ol,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new P,Zd=new Rt,Kd=new Rt,Fn=class extends co{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Os.x,Os.y).multiplyScalar(-t/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-t/Os.z)}getViewSize(t,e){return this.getViewBounds(t,Zd,Kd),e.subVectors(Kd,Zd)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Lu=class extends lo{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}},uo=class extends aa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},oa=class extends co{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Du=class extends lo{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ho=class extends aa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Du}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Br=-90,Gr=1,Vl=class extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Br,Gr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(Br,Gr,t,e);r.layers=this.layers,this.add(r);let a=new Fn(Br,Gr,t,e);a.layers=this.layers,this.add(a);let o=new Fn(Br,Gr,t,e);o.layers=this.layers,this.add(o);let l=new Fn(Br,Gr,t,e);l.layers=this.layers,this.add(l);let c=new Fn(Br,Gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Hl=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lh="\\[\\]\\.:\\/",j0=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",Q0="[^"+lh.replace("\\.","")+"]",tg=/((?:WC+[\/:])*)/.source.replace("WC",ch),eg=/(WCOD+)?/.source.replace("WCOD",Q0),ng=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),sg=new RegExp("^"+tg+eg+ng+ig+"$"),rg=["material","materials","bones","map"],Nu=class{constructor(t,e,i){let s=i||en.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},en=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(j0,"")}static parseTrackName(t){let e=sg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);rg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=Nu;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rb=new Float32Array(1);var $d=new Ge,fo=class{constructor(t,e,i=0,s=1/0){this.ray=new Bs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $d.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(t,e=!0,i=[]){return Uu(t,this,i,e),i.sort(Jd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Uu(t[s],this,i,e);return i.sort(Jd),i}};function Jd(n,t){return n.distance-t.distance}function Uu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Uu(r[a],t,e,!0)}}var la=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var mh=class mh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};mh.prototype.isMatrix2=!0;var Fu=mh;var po=class extends zi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function uh(n,t,e,i){let s=ag(i);switch(e){case th:return n*t;case jl:return n*t/s.components*s.byteLength;case Ql:return n*t/s.components*s.byteLength;case $s:return n*t*2/s.components*s.byteLength;case tc:return n*t*2/s.components*s.byteLength;case eh:return n*t*3/s.components*s.byteLength;case Ri:return n*t*4/s.components*s.byteLength;case ec:return n*t*4/s.components*s.byteLength;case _o:case vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case bo:case Mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(n,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(n,8)*Math.max(t,8)/2;case ac:case oc:case cc:case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lc:case So:case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ec:case Tc:case kc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case wo:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ag(n){switch(n){case li:case $u:return{byteLength:1,components:1};case ha:case Ju:case Yi:return{byteLength:2,components:1};case $l:case Jl:return{byteLength:2,components:4};case Xi:case Kl:case ki:return{byteLength:4,components:1};case ju:case Qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function dp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function pg(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ny=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,py=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,My=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ry=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:mg,alphahash_pars_fragment:gg,alphamap_fragment:yg,alphamap_pars_fragment:xg,alphatest_fragment:_g,alphatest_pars_fragment:vg,aomap_fragment:bg,aomap_pars_fragment:Mg,batching_pars_vertex:Sg,batching_vertex:wg,begin_vertex:Ag,beginnormal_vertex:Eg,bsdfs:Tg,iridescence_fragment:kg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Lg,color_fragment:Dg,color_pars_fragment:Ng,color_pars_vertex:Ug,color_vertex:Fg,common:zg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Vg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Wg,colorspace_fragment:Xg,colorspace_pars_fragment:Yg,envmap_fragment:qg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Kg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:oy,envmap_vertex:Jg,fog_vertex:jg,fog_pars_vertex:Qg,fog_fragment:ty,fog_pars_fragment:ey,gradientmap_pars_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_fragment:sy,lights_lambert_pars_fragment:ry,lights_pars_begin:ay,lights_toon_fragment:ly,lights_toon_pars_fragment:cy,lights_phong_fragment:uy,lights_phong_pars_fragment:hy,lights_physical_fragment:dy,lights_physical_pars_fragment:fy,lights_fragment_begin:py,lights_fragment_maps:my,lights_fragment_end:gy,lightprobes_pars_fragment:yy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:by,map_fragment:My,map_pars_fragment:Sy,map_particle_fragment:wy,map_particle_pars_fragment:Ay,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:Ty,morphinstance_vertex:ky,morphcolor_vertex:Ry,morphnormal_vertex:Cy,morphtarget_pars_vertex:Py,morphtarget_vertex:Iy,normal_fragment_begin:Ly,normal_fragment_maps:Dy,normal_pars_fragment:Ny,normal_pars_vertex:Uy,normal_vertex:Fy,normalmap_pars_fragment:zy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Vy,opaque_fragment:Hy,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:Yy,dithering_fragment:qy,dithering_pars_fragment:Zy,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:jy,shadowmap_vertex:Qy,shadowmask_pars_fragment:tx,skinbase_vertex:ex,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:sx,specularmap_fragment:rx,specularmap_pars_fragment:ax,tonemapping_fragment:ox,tonemapping_pars_fragment:lx,transmission_fragment:cx,transmission_pars_fragment:ux,uv_pars_fragment:hx,uv_pars_vertex:dx,uv_vertex:fx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:yx,backgroundCube_frag:xx,cube_vert:_x,cube_frag:vx,depth_vert:bx,depth_frag:Mx,distance_vert:Sx,distance_frag:wx,equirect_vert:Ax,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:kx,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Fx,meshphong_frag:zx,meshphysical_vert:Ox,meshphysical_frag:Bx,meshtoon_vert:Gx,meshtoon_frag:Vx,points_vert:Hx,points_frag:Wx,shadow_vert:Xx,shadow_frag:Yx,sprite_vert:qx,sprite_frag:Zx},Wt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},cs={basic:{uniforms:Xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xn([Wt.points,Wt.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xn([Wt.common,Wt.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xn([Wt.sprite,Wt.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Xn([Wt.common,Wt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Xn([Wt.lights,Wt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};cs.physical={uniforms:Xn([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Dc={r:0,b:0,g:0},Kx=new Ge,fp=new be;fp.set(-1,0,0,0,1,0,0,0,1);function $x(n,t,e,i,s,r){let a=new le(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let _=M.backgroundBlurriness>0;E=t.get(E,_)}return E}function m(M){let E=!1,_=f(M);_===null?g(a,o):_&&_.isColor&&(g(_,1),E=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===yo)?(c===void 0&&(c=new Et(new ln(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:_r(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fp),c.material.toneMapped=Pe.getTransfer(_.colorSpace)!==He,(u!==_||d!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Et(new Ke(2,2),new _i({name:"BackgroundMaterial",uniforms:_r(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Pe.getTransfer(_.colorSpace)!==He,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Dc,oh(n)),e.buffers.color.setClear(Dc.r,Dc.g,Dc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:y,dispose:p}}function Jx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(U,G,H,L,W){let tt=!1,J=d(U,L,H,G);r!==J&&(r=J,c(r.object)),tt=f(U,L,H,W),tt&&m(U,L,H,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,_(U,G,H,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function d(U,G,H,L){let W=L.wireframe===!0,tt=i[G.id];tt===void 0&&(tt={},i[G.id]=tt);let J=U.isInstancedMesh===!0?U.id:0,ot=tt[J];ot===void 0&&(ot={},tt[J]=ot);let O=ot[H.id];O===void 0&&(O={},ot[H.id]=O);let j=O[W];return j===void 0&&(j=h(l()),O[W]=j),j}function h(U){let G=[],H=[],L=[];for(let W=0;W<e;W++)G[W]=0,H[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,G,H,L){let W=r.attributes,tt=G.attributes,J=0,ot=H.getAttributes();for(let O in ot)if(ot[O].location>=0){let st=W[O],zt=tt[O];if(zt===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(zt=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(zt=U.instanceColor)),st===void 0||st.attribute!==zt||zt&&st.data!==zt.data)return!0;J++}return r.attributesNum!==J||r.index!==L}function m(U,G,H,L){let W={},tt=G.attributes,J=0,ot=H.getAttributes();for(let O in ot)if(ot[O].location>=0){let st=tt[O];st===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(st=U.instanceColor));let zt={};zt.attribute=st,st&&st.data&&(zt.data=st.data),W[O]=zt,J++}r.attributes=W,r.attributesNum=J,r.index=L}function y(){let U=r.newAttributes;for(let G=0,H=U.length;G<H;G++)U[G]=0}function g(U){p(U,0)}function p(U,G){let H=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;H[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),W[U]!==G&&(n.vertexAttribDivisor(U,G),W[U]=G)}function M(){let U=r.newAttributes,G=r.enabledAttributes;for(let H=0,L=G.length;H<L;H++)G[H]!==U[H]&&(n.disableVertexAttribArray(H),G[H]=0)}function E(U,G,H,L,W,tt,J){J===!0?n.vertexAttribIPointer(U,G,H,W,tt):n.vertexAttribPointer(U,G,H,L,W,tt)}function _(U,G,H,L){y();let W=L.attributes,tt=H.getAttributes(),J=G.defaultAttributeValues;for(let ot in tt){let O=tt[ot];if(O.location>=0){let j=W[ot];if(j===void 0&&(ot==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),ot==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let st=j.normalized,zt=j.itemSize,xt=t.get(j);if(xt===void 0)continue;let Xt=xt.buffer,ne=xt.type,Lt=xt.bytesPerElement,et=ne===n.INT||ne===n.UNSIGNED_INT||j.gpuType===Kl;if(j.isInterleavedBufferAttribute){let rt=j.data,Tt=rt.stride,Jt=j.offset;if(rt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<O.locationSize;Dt++)p(O.location+Dt,rt.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Dt=0;Dt<O.locationSize;Dt++)g(O.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let Dt=0;Dt<O.locationSize;Dt++)E(O.location+Dt,zt/O.locationSize,ne,st,Tt*Lt,(Jt+zt/O.locationSize*Dt)*Lt,et)}else{if(j.isInstancedBufferAttribute){for(let rt=0;rt<O.locationSize;rt++)p(O.location+rt,j.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let rt=0;rt<O.locationSize;rt++)g(O.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let rt=0;rt<O.locationSize;rt++)E(O.location+rt,zt/O.locationSize,ne,st,zt*Lt,zt/O.locationSize*rt*Lt,et)}}else if(J!==void 0){let st=J[ot];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(O.location,st);break;case 3:n.vertexAttrib3fv(O.location,st);break;case 4:n.vertexAttrib4fv(O.location,st);break;default:n.vertexAttrib1fv(O.location,st)}}}}M()}function w(){S();for(let U in i){let G=i[U];for(let H in G){let L=G[H];for(let W in L){let tt=L[W];for(let J in tt)u(tt[J].object),delete tt[J];delete L[W]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let G=i[U.id];for(let H in G){let L=G[H];for(let W in L){let tt=L[W];for(let J in tt)u(tt[J].object),delete tt[J];delete L[W]}}delete i[U.id]}function R(U){for(let G in i){let H=i[G];for(let L in H){let W=H[L];if(W[U.id]===void 0)continue;let tt=W[U.id];for(let J in tt)u(tt[J].object),delete tt[J];delete W[U.id]}}}function v(U){for(let G in i){let H=i[G],L=U.isInstancedMesh===!0?U.id:0,W=H[L];if(W!==void 0){for(let tt in W){let J=W[tt];for(let ot in J)u(J[ot].object),delete J[ot];delete W[tt]}delete H[L],Object.keys(H).length===0&&delete i[G]}}}function S(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function jx(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let v=R===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==li&&R!==ki&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:_,maxSamples:w,samples:A}}function t_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new gi,o=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let M=r?0:i,E=M*4,_=p.clippingState||null;l.value=_,_=u(m,h,E,f);for(let w=0;w!==E;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,_=f;E!==y;++E,_+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var pa=4,e_=6,n_=20,i_=256,Eo=new oa,Xf=new le,gh=null,yh=0,xh=0,_h=!1,s_=new P,vr=new P,ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=s_}=r;gh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gh,yh,xh),this._renderer.xr.enabled=_h,t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Yi,format:Ri,colorSpace:Oa,depthBuffer:!1},s=Yf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=r_(r)),this._blurMaterial=o_(r,t,e),this._ggxMaterial=a_(r,t,e)}return s}_compileMaterial(t){let e=new Et(new Qe,t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,i,s,r){let l=new Fn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Xf),d.toneMapping=Wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new ln,new tn({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(Xf),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let w=this._cubeSize;fa(s,_*w,E>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Zs||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;fa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Eo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-pa?i-m+pa:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,fa(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Eo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,fa(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Eo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-pa?s-this._lodMax+pa:0),h=4*(this._cubeSize-u);fa(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Eo)}};function r_(n){let t=[],e=[],i=n,s=n-pa+1+e_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,m=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,E=p>2?0:-1,_=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(_,f*h*p);for(let w=0;w<h;w++){let A=u[w*2]*2-1,R=u[w*2+1]*2-1;p===0?vr.set(1,R,A):p===1?vr.set(-A,1,-R):p===2?vr.set(-A,R,1):p===3?vr.set(-1,R,-A):p===4?vr.set(-A,-1,R):vr.set(A,R,-1),vr.toArray(y,(p*h+w)*f)}}let g=new Qe;g.setAttribute("position",new je(m,f)),g.setAttribute("outputDirection",new je(y,f)),e.push(new Et(g,null)),i>pa&&i--}return{lodMeshes:e,sizeLods:t}}function Yf(n,t,e){let i=new oi(n,t,e);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function a_(n,t,e){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:i_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function o_(n,t,e){return new _i({name:"SphericalGaussianBlur",defines:{SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function qf(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Zf(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uc=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ln(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:os});r.uniforms.tEquirect.value=e;let a=new Et(s,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=vn),new Vl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function l_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Yl||f===ql)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let y=new Uc(m.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,m=f===Yl||f===ql,y=f===Zs||f===yr;if(m||y){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new ga(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let M=h.image;return m&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new ga(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Yl?h.mapping=Zs:f===ql&&(h.mapping=yr),h}function l(h){let f=0,m=6;for(let y=0;y<m;y++)h[y]!==void 0&&f++;return f===m}function c(h){let f=h.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function c_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&cr("WebGLRenderer: "+i+" extension not supported."),s}}}function u_(n,t,e,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,m=d.attributes.position,y=0;if(m===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let E=0,_=M.length;E<_;E+=3){let w=M[E+0],A=M[E+1],R=M[E+2];h.push(w,A,A,R,R,w)}}else{let M=m.array;y=m.version;for(let E=0,_=M.length/3-1;E<_;E+=3){let w=E+0,A=E+1,R=E+2;h.push(w,A,A,R,R,w)}}let g=new(m.count>=65535?Wa:Ha)(h,1);g.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function h_(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=h[g];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function d_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function f_(n,t,e){let i=new WeakMap,s=new an;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),y===!0&&(E=3);let _=o.attributes.position.count*E,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*w*4*d),R=new Va(A,_,w,d);R.type=ki,R.needsUpdate=!0;let v=E*4;for(let I=0;I<d;I++){let U=g[I],G=p[I],H=M[I],L=_*w*4*I;for(let W=0;W<U.count;W++){let tt=W*v;f===!0&&(s.fromBufferAttribute(U,W),A[L+tt+0]=s.x,A[L+tt+1]=s.y,A[L+tt+2]=s.z,A[L+tt+3]=0),m===!0&&(s.fromBufferAttribute(G,W),A[L+tt+4]=s.x,A[L+tt+5]=s.y,A[L+tt+6]=s.z,A[L+tt+7]=0),y===!0&&(s.fromBufferAttribute(H,W),A[L+tt+8]=s.x,A[L+tt+9]=s.y,A[L+tt+10]=s.z,A[L+tt+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new Rt(_,w)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function p_(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var m_={[Hu]:"LINEAR_TONE_MAPPING",[Wu]:"REINHARD_TONE_MAPPING",[Xu]:"CINEON_TONE_MAPPING",[Yu]:"ACES_FILMIC_TONE_MAPPING",[Zu]:"AGX_TONE_MAPPING",[go]:"NEUTRAL_TONE_MAPPING",[qu]:"CUSTOM_TONE_MAPPING"};function g_(n,t,e,i,s,r){let a=new oi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qe;c.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fe([0,2,0,0,2,0],2));let u=new Rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Et(c,u),h=new oa(-1,1,1,-1,0,1),f=null,m=null,y=!1,g,p=null,M=[],E=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let A=0;A<M.length;A++){let R=M[A];R.setSize&&R.setSize(_,w)}},this.setEffects=function(_){M=_,E=M.length>0&&M[0].isRenderPass===!0;let w=a.width,A=a.height;M.length>0&&o===null&&(o=new oi(w,A,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),l=new oi(w,A,{type:Yi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let v=M[R];v.setSize&&v.setSize(w,A)}},this.begin=function(_,w){if(y||_.toneMapping===Wi&&M.length===0)return!1;if(p=w,w!==null){let A=w.width,R=w.height;(a.width!==A||a.height!==R)&&this.setSize(A,R)}return E===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Wi,!0},this.hasRenderPass=function(){return E},this.end=function(_,w){_.toneMapping=g,y=!0;let A=a,R=o;for(let v=0;v<M.length;v++){let S=M[v];S.enabled!==!1&&(S.render(_,R,A,w),S.needsSwap!==!1&&(A=R,R=R===o?l:o))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,u.defines={},Pe.getTransfer(f)===He&&(u.defines.SRGB_TRANSFER="");let v=m_[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(p),_.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var pp=new Jn,Mh=new Gs(1,1),mp=new Va,gp=new bl,yp=new qa,Kf=[],$f=[],Jf=new Float32Array(16),jf=new Float32Array(9),Qf=new Float32Array(4);function ya(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Kf[s];if(r===void 0&&(r=new Float32Array(s),Kf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function kn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Rn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Oc(n,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function y_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;n.uniform2fv(this.addr,t),Rn(e,t)}}function __(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(kn(e,t))return;n.uniform3fv(this.addr,t),Rn(e,t)}}function v_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;n.uniform4fv(this.addr,t),Rn(e,t)}}function b_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Rn(e,t)}else{if(kn(e,i))return;Qf.set(i),n.uniformMatrix2fv(this.addr,!1,Qf),Rn(e,i)}}function M_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Rn(e,t)}else{if(kn(e,i))return;jf.set(i),n.uniformMatrix3fv(this.addr,!1,jf),Rn(e,i)}}function S_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(kn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Rn(e,t)}else{if(kn(e,i))return;Jf.set(i),n.uniformMatrix4fv(this.addr,!1,Jf),Rn(e,i)}}function w_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function A_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;n.uniform2iv(this.addr,t),Rn(e,t)}}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;n.uniform3iv(this.addr,t),Rn(e,t)}}function T_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;n.uniform4iv(this.addr,t),Rn(e,t)}}function k_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(kn(e,t))return;n.uniform2uiv(this.addr,t),Rn(e,t)}}function C_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(kn(e,t))return;n.uniform3uiv(this.addr,t),Rn(e,t)}}function P_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(kn(e,t))return;n.uniform4uiv(this.addr,t),Rn(e,t)}}function I_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mh.compareFunction=e.isReversedDepthBuffer()?Lc:Ic,r=Mh):r=pp,e.setTexture2D(t||r,s)}function L_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gp,s)}function D_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yp,s)}function N_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mp,s)}function U_(n){switch(n){case 5126:return y_;case 35664:return x_;case 35665:return __;case 35666:return v_;case 35674:return b_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return k_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(n,t){n.uniform1fv(this.addr,t)}function z_(n,t){let e=ya(t,this.size,2);n.uniform2fv(this.addr,e)}function O_(n,t){let e=ya(t,this.size,3);n.uniform3fv(this.addr,e)}function B_(n,t){let e=ya(t,this.size,4);n.uniform4fv(this.addr,e)}function G_(n,t){let e=ya(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function V_(n,t){let e=ya(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function H_(n,t){let e=ya(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function W_(n,t){n.uniform1iv(this.addr,t)}function X_(n,t){n.uniform2iv(this.addr,t)}function Y_(n,t){n.uniform3iv(this.addr,t)}function q_(n,t){n.uniform4iv(this.addr,t)}function Z_(n,t){n.uniform1uiv(this.addr,t)}function K_(n,t){n.uniform2uiv(this.addr,t)}function $_(n,t){n.uniform3uiv(this.addr,t)}function J_(n,t){n.uniform4uiv(this.addr,t)}function j_(n,t,e){let i=this.cache,s=t.length,r=Oc(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Rn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Mh:a=pp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Q_(n,t,e){let i=this.cache,s=t.length,r=Oc(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Rn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gp,r[a])}function tv(n,t,e){let i=this.cache,s=t.length,r=Oc(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Rn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yp,r[a])}function ev(n,t,e){let i=this.cache,s=t.length,r=Oc(e,s);kn(i,r)||(n.uniform1iv(this.addr,r),Rn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mp,r[a])}function nv(n){switch(n){case 5126:return F_;case 35664:return z_;case 35665:return O_;case 35666:return B_;case 35674:return G_;case 35675:return V_;case 35676:return H_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return Y_;case 35669:case 35673:return q_;case 5125:return Z_;case 36294:return K_;case 36295:return $_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}var Sh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=U_(e.type)}},wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nv(e.type)}},Ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},vh=/(\w+)(\])?(\[|\.)?/g;function tp(n,t){n.seq.push(t),n.map[t.id]=t}function iv(n,t,e){let i=n.name,s=i.length;for(vh.lastIndex=0;;){let r=vh.exec(i),a=vh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){tp(e,c===void 0?new Sh(o,n,t):new wh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Ah(o),tp(e,d)),e=d}}}var ma=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);iv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function ep(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var sv=37297,rv=0;function av(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var np=new be;function ov(n){Pe._getMatrix(np,Pe.workingColorSpace,n);let t=`mat3( ${np.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(n)){case Ba:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ip(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+av(n.getShaderSource(t),o)}else return r}function lv(n,t){let e=ov(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var cv={[Hu]:"Linear",[Wu]:"Reinhard",[Xu]:"Cineon",[Yu]:"ACESFilmic",[Zu]:"AgX",[go]:"Neutral",[qu]:"Custom"};function uv(n,t){let e=cv[t];return e===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nc=new P;function hv(){Pe.getLuminanceCoefficients(Nc);let n=Nc.x.toFixed(4),t=Nc.y.toFixed(4),e=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function fv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ko(n){return n!==""}function sp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(n){return n.replace(mv,yv)}var gv=new Map;function yv(n,t){let e=ke[t];if(e===void 0){let i=gv.get(t);if(i!==void 0)e=ke[i],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eh(e)}var xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(n){return n.replace(xv,_v)}function _v(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function op(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var vv={[mr]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function bv(n){return vv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mv={[Zs]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function Sv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Mv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var wv={[yr]:"ENVMAP_MODE_REFRACTION"};function Av(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ev={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[vf]:"ENVMAP_BLENDING_MIX",[bf]:"ENVMAP_BLENDING_ADD"};function Tv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[n.combine]||"ENVMAP_BLENDING_NONE"}function kv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Rv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=bv(e),c=Sv(e),u=Av(e),d=Tv(e),h=kv(e),f=dv(e),m=fv(r),y=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ko).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ko).join(`
`),p.length>0&&(p+=`
`)):(g=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),p=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?ke.tonemapping_pars_fragment:"",e.toneMapping!==Wi?uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,lv("linearToOutputTexel",e.outputColorSpace),hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ko).join(`
`)),a=Eh(a),a=sp(a,e),a=rp(a,e),o=Eh(o),o=sp(o,e),o=rp(o,e),a=ap(a),o=ap(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+g+a,_=M+p+o,w=ep(s,s.VERTEX_SHADER,E),A=ep(s,s.FRAGMENT_SHADER,_);s.attachShader(y,w),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(U){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(A)||"",W=G.trim(),tt=H.trim(),J=L.trim(),ot=!0,O=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,A);else{let j=ip(s,w,"vertex"),st=ip(s,A,"fragment");ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+j+`
`+st)}else W!==""?fe("WebGLProgram: Program Info Log:",W):(tt===""||J==="")&&(O=!1);O&&(U.diagnostics={runnable:ot,programLog:W,vertexShader:{log:tt,prefix:g},fragmentShader:{log:J,prefix:p}})}s.deleteShader(w),s.deleteShader(A),v=new ma(s,y),S=pv(s,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,sv)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=A,this}var Cv=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kh(t),e.set(t,i)),i}},kh=class{constructor(t){this.id=Cv++,this.code=t,this.usedTimes=0}};function Pv(n){return n===$s||n===So||n===wo}function Iv(n,t,e,i,s,r){let a=new $r,o=new Th,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,S,I,U,G,H){let L=U.fog,W=G.geometry,tt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ot=t.get(v.envMap||tt,J),O=ot&&ot.mapping===yo?ot.image.height:null,j=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&fe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=st!==void 0?st.length:0,xt=0;W.morphAttributes.position!==void 0&&(xt=1),W.morphAttributes.normal!==void 0&&(xt=2),W.morphAttributes.color!==void 0&&(xt=3);let Xt,ne,Lt,et;if(j){let ye=cs[j];Xt=ye.vertexShader,ne=ye.fragmentShader}else{Xt=v.vertexShader,ne=v.fragmentShader;let ye=o.getVertexShaderStage(v),X=o.getFragmentShaderStage(v);o.update(v,ye,X),Lt=ye.id,et=X.id}let rt=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),Jt=G.isInstancedMesh===!0,Dt=G.isBatchedMesh===!0,kt=!!v.map,jt=!!v.matcap,ht=!!ot,gt=!!v.aoMap,vt=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,Ct=!!v.normalMap,Qt=!!v.displacementMap,Vt=!!v.emissiveMap,Yt=!!v.metalnessMap,ie=!!v.roughnessMap,N=v.anisotropy>0,Se=v.clearcoat>0,re=v.dispersion>0,T=v.retroreflectivity>0,x=v.iridescence>0,V=v.sheen>0,q=v.transmission>0,nt=N&&!!v.anisotropyMap,At=Se&&!!v.clearcoatMap,Ut=Se&&!!v.clearcoatNormalMap,ct=Se&&!!v.clearcoatRoughnessMap,mt=x&&!!v.iridescenceMap,Ot=x&&!!v.iridescenceThicknessMap,Kt=V&&!!v.sheenColorMap,Bt=V&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,it=!!v.specularColorMap,St=!!v.specularIntensityMap,Pt=q&&!!v.transmissionMap,D=q&&!!v.thicknessMap,ut=!!v.gradientMap,$=!!v.alphaMap,bt=v.alphaTest>0,It=!!v.alphaHash,dt=!!v.extensions,Gt=Wi;v.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let Nt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:Xt,fragmentShader:ne,defines:v.defines,customVertexShaderID:Lt,customFragmentShaderID:et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Dt,batchingColor:Dt&&G._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&G.instanceColor!==null,instancingMorph:Jt&&G.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:jt,envMap:ht,envMapMode:ht&&ot.mapping,envMapCubeUVHeight:O,aoMap:gt,lightMap:vt,bumpMap:Mt,normalMap:Ct,displacementMap:Qt,emissiveMap:Vt,normalMapObjectSpace:Ct&&v.normalMapType===wf,normalMapTangentSpace:Ct&&v.normalMapType===Ao,packedNormalMap:Ct&&v.normalMapType===Ao&&Pv(v.normalMap.format),metalnessMap:Yt,roughnessMap:ie,anisotropy:N,anisotropyMap:nt,clearcoat:Se,clearcoatMap:At,clearcoatNormalMap:Ut,clearcoatRoughnessMap:ct,dispersion:re,retroreflection:T,iridescence:x,iridescenceMap:mt,iridescenceThicknessMap:Ot,sheen:V,sheenColorMap:Kt,sheenRoughnessMap:Bt,specularMap:Ft,specularColorMap:it,specularIntensityMap:St,transmission:q,transmissionMap:Pt,thicknessMap:D,gradientMap:ut,opaque:v.transparent===!1&&v.blending===ua&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:bt,alphaHash:It,combine:v.combine,mapUv:kt&&m(v.map.channel),aoMapUv:gt&&m(v.aoMap.channel),lightMapUv:vt&&m(v.lightMap.channel),bumpMapUv:Mt&&m(v.bumpMap.channel),normalMapUv:Ct&&m(v.normalMap.channel),displacementMapUv:Qt&&m(v.displacementMap.channel),emissiveMapUv:Vt&&m(v.emissiveMap.channel),metalnessMapUv:Yt&&m(v.metalnessMap.channel),roughnessMapUv:ie&&m(v.roughnessMap.channel),anisotropyMapUv:nt&&m(v.anisotropyMap.channel),clearcoatMapUv:At&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&m(v.sheenRoughnessMap.channel),specularMapUv:Ft&&m(v.specularMap.channel),specularColorMapUv:it&&m(v.specularColorMap.channel),specularIntensityMapUv:St&&m(v.specularIntensityMap.channel),transmissionMapUv:Pt&&m(v.transmissionMap.channel),thicknessMapUv:D&&m(v.thicknessMap.channel),alphaMapUv:$&&m(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ct||N),vertexNormals:!!W.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(kt||$),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&Ct===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Tt,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:xt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&Pe.getTransfer(v.map.colorSpace)===He,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(v.emissiveMap.colorSpace)===He,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===On,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(S,v),M(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function p(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let S=f[v.type],I;if(S){let U=cs[S];I=Vf.clone(U.uniforms)}else I=v.uniforms;return I}function _(v,S){let I=u.get(S);return I!==void 0?++I.usedTimes:(I=new Rv(n,S,v,s),c.push(I),u.set(S,I)),I}function w(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:R}}function Lv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Dv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function lp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,y,g,p){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:p},n[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=m,M.materialVariant=a(h),M.groupOrder=y,M.renderOrder=h.renderOrder,M.z=g,M.group=p),t++,M}function l(h,f,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let E=o(h,f,m,y,g,p);m.transmission>0?i.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(h,f,m,y,g,p){let M=o(h,f,m,y,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f){e.length>1&&e.sort(h||Dv),i.length>1&&i.sort(f||lp),s.length>1&&s.sort(f||lp)}function d(){for(let h=t,f=n.length;h<f;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Nv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new cp,n.set(i,[a])):s>=r.length?(a=new cp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Uv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new le};break;case"SpotLight":e={position:new P,direction:new P,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Fv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var zv=0;function Ov(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Bv(n){let t=new Uv,e=Fv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Ge,a=new Ge;function o(c){let u=0,d=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,M=0,E=0,_=0,w=0,A=0,R=0,v=0,S=0,I=0;c.sort(Ov);for(let G=0,H=c.length;G<H;G++){let L=c[G],W=L.color,tt=L.intensity,J=L.distance,ot=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$s?ot=L.shadow.map.texture:ot=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=W.r*tt,d+=W.g*tt,h+=W.b*tt;else if(L.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],tt);I++}else if(L.isSunLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,st=e.get(L);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[m]=st,i.sunShadowMap[m]=ot;let zt=j.getViewportCount();for(let xt=0;xt<zt;xt++)i.sunShadowMatrix[y+xt]=j.getMatrix(xt),i.sunShadowCascade[y+xt]=j._cascadeData[xt];y+=zt,m++}i.sun[f]=O,f++}else if(L.isDirectionalLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,st=e.get(L);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,i.directionalShadow[g]=st,i.directionalShadowMap[g]=ot,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=O,g++}else if(L.isSpotLight){let O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(W).multiplyScalar(tt),O.distance=J,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[M]=O;let j=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,j.updateMatrices(L),L.castShadow&&S++),i.spotLightMatrix[M]=j.matrix,L.castShadow){let st=e.get(L);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,i.spotShadow[M]=st,i.spotShadowMap[M]=ot,R++}M++}else if(L.isRectAreaLight){let O=t.get(L);O.color.copy(W).multiplyScalar(tt),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=O,E++}else if(L.isPointLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){let j=L.shadow,st=e.get(L);st.shadowIntensity=j.intensity,st.shadowBias=j.bias,st.shadowNormalBias=j.normalBias,st.shadowRadius=j.radius,st.shadowMapSize=j.mapSize,st.shadowCameraNear=j.camera.near,st.shadowCameraFar=j.camera.far,i.pointShadow[p]=st,i.pointShadowMap[p]=ot,i.pointShadowMatrix[p]=L.shadow.matrix,A++}i.point[p]=O,p++}else if(L.isHemisphereLight){let O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(tt),O.groundColor.copy(L.groundColor).multiplyScalar(tt),i.hemi[_]=O,_++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==M||U.rectAreaLength!==E||U.hemiLength!==_||U.numSunShadows!==m||U.numDirectionalShadows!==w||U.numPointShadows!==A||U.numSpotShadows!==R||U.numSpotMaps!==v||U.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=g,i.spot.length=M,i.rectArea.length=E,i.point.length=p,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-S,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=I,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=M,U.rectAreaLength=E,U.hemiLength=_,U.numSunShadows=m,U.numDirectionalShadows=w,U.numPointShadows=A,U.numSpotShadows=R,U.numSpotMaps=v,U.numLightProbes=I,i.version=zv++)}function l(c,u){let d=0,h=0,f=0,m=0,y=0,g=0,p=u.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let _=c[M];if(_.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(_.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function up(n){let t=new Bv(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new up(n),t.set(s,[o])):r>=a.length?(o=new up(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Xv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],hp=new Ge,To=new P,bh=new P;function Yv(n,t,e){let i=new Qr,s=new Rt,r=new Rt,a=new an,o=new Cl,l=new Pl,c={},u=e.maxTextureSize,d={[qs]:On,[On]:qs,[bn]:bn},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Vv,fragmentShader:Hv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new Qe;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let p=this.type;this.render=function(A,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===tf&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let S=n.getRenderTarget(),I=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),G=n.state;G.setBlending(os),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let H=p!==this.type;H&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=A.length;L<W;L++){let tt=A[L],J=tt.shadow;if(J===void 0){fe("WebGLShadowMap:",tt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ot=J.getFrameExtents();s.multiply(ot),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,J.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=O,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ca){if(tt.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new oi(s.x,s.y,{format:$s,type:Yi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),J.map.texture.name=tt.name+".shadowMap",J.map.depthTexture=new Gs(s.x,s.y,ki),J.map.depthTexture.name=tt.name+".shadowMapDepth",J.map.depthTexture.format=is,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dn,J.map.depthTexture.magFilter=Dn}else tt.isPointLight?(J.map=new Uc(s.x),J.map.depthTexture=new Al(s.x,Xi)):(J.map=new oi(s.x,s.y),J.map.depthTexture=new Gs(s.x,s.y,Xi)),J.map.depthTexture.name=tt.name+".shadowMap",J.map.depthTexture.format=is,this.type===mr?(J.map.depthTexture.compareFunction=O?Lc:Ic,J.map.depthTexture.minFilter=vn,J.map.depthTexture.magFilter=vn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dn,J.map.depthTexture.magFilter=Dn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let j=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();tt.isPointLight!==!0&&J.updateMatrices(tt,v);for(let st=0;st<j;st++){let zt=J.getCamera(st);if(tt.isPointLight){let xt=J.camera,Xt=J.matrix,ne=tt.distance||xt.far;ne!==xt.far&&(xt.far=ne,xt.updateProjectionMatrix()),To.setFromMatrixPosition(tt.matrixWorld),xt.position.copy(To),bh.copy(xt.position),bh.add(Wv[st]),xt.up.copy(Xv[st]),xt.lookAt(bh),xt.updateMatrixWorld(),Xt.makeTranslation(-To.x,-To.y,-To.z),hp.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(hp,xt.coordinateSystem,xt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,st),n.clear();else{st===0&&(n.setRenderTarget(J.map),n.clear());let xt=J.getViewport(st);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),G.viewport(a)}i=J.getFrustum(st),_(R,v,zt,tt,this.type)}J.isPointLightShadow!==!0&&this.type===ca&&M(J,v),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,I,U)};function M(A,R){let v=t.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new oi(s.x,s.y,{format:$s,type:Yi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,v,h,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,v,f,y,null)}function E(A,R,v,S){let I=null,U=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)I=U;else if(I=v.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let G=I.uuid,H=R.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let W=L[H];W===void 0&&(W=I.clone(),L[H]=W,R.addEventListener("dispose",w)),I=W}if(I.visible=R.visible,I.wireframe=R.wireframe,S===ca?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let G=n.properties.get(I);G.light=v}return I}function _(A,R,v,S,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===ca)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let H=t.update(A),L=A.material;if(Array.isArray(L)){let W=H.groups;for(let tt=0,J=W.length;tt<J;tt++){let ot=W[tt],O=L[ot.materialIndex];if(O&&O.visible){let j=E(A,O,S,I);A.onBeforeShadow(n,A,R,v,H,j,ot),n.renderBufferDirect(v,null,H,j,A,ot),A.onAfterShadow(n,A,R,v,H,j,ot)}}}else if(L.visible){let W=E(A,L,S,I);A.onBeforeShadow(n,A,R,v,H,W,null),n.renderBufferDirect(v,null,H,W,A,null),A.onAfterShadow(n,A,R,v,H,W,null)}}let G=A.children;for(let H=0,L=G.length;H<L;H++)_(G[H],R,v,S,I)}function w(A){A.target.removeEventListener("dispose",w);for(let v in c){let S=c[v],I=A.target.uuid;I in S&&(S[I].dispose(),delete S[I])}}}function qv(n,t){function e(){let D=!1,ut=new an,$=null,bt=new an(0,0,0,0);return{setMask:function(It){$!==It&&!D&&(n.colorMask(It,It,It,It),$=It)},setLocked:function(It){D=It},setClear:function(It,dt,Gt,Nt,ye){ye===!0&&(It*=Nt,dt*=Nt,Gt*=Nt),ut.set(It,dt,Gt,Nt),bt.equals(ut)===!1&&(n.clearColor(It,dt,Gt,Nt),bt.copy(ut))},reset:function(){D=!1,$=null,bt.set(-1,0,0,0)}}}function i(){let D=!1,ut=!1,$=null,bt=null,It=null;return{setReversed:function(dt){if(ut!==dt){let Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),ut=dt;let Nt=It;It=null,this.setClear(Nt)}},getReversed:function(){return ut},setTest:function(dt){dt?rt(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(dt){$!==dt&&!D&&(n.depthMask(dt),$=dt)},setFunc:function(dt){if(ut&&(dt=Uf[dt]),bt!==dt){switch(dt){case ul:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case dl:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=dt}},setLocked:function(dt){D=dt},setClear:function(dt){It!==dt&&(It=dt,ut&&(dt=1-dt),n.clearDepth(dt))},reset:function(){D=!1,$=null,bt=null,It=null,ut=!1}}}function s(){let D=!1,ut=null,$=null,bt=null,It=null,dt=null,Gt=null,Nt=null,ye=null;return{setTest:function(X){D||(X?rt(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(X){ut!==X&&!D&&(n.stencilMask(X),ut=X)},setFunc:function(X,yt,k){($!==X||bt!==yt||It!==k)&&(n.stencilFunc(X,yt,k),$=X,bt=yt,It=k)},setOp:function(X,yt,k){(dt!==X||Gt!==yt||Nt!==k)&&(n.stencilOp(X,yt,k),dt=X,Gt=yt,Nt=k)},setLocked:function(X){D=X},setClear:function(X){ye!==X&&(n.clearStencil(X),ye=X)},reset:function(){D=!1,ut=null,$=null,bt=null,It=null,dt=null,Gt=null,Nt=null,ye=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,E=null,_=null,w=null,A=null,R=null,v=new le(0,0,0),S=0,I=!1,U=null,G=null,H=null,L=null,W=null,tt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ot=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(O)[1]),J=ot>=1):O.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),J=ot>=2);let j=null,st={},zt=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),Xt=new an().fromArray(zt),ne=new an().fromArray(xt);function Lt(D,ut,$,bt){let It=new Uint8Array(4),dt=n.createTexture();n.bindTexture(D,dt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<$;Gt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(ut+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return dt}let et={};et[n.TEXTURE_2D]=Lt(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=Lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=Lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=Lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(Xr),Mt(!1),Ct(zu),rt(n.CULL_FACE),gt(os);function rt(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Tt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Jt(D,ut){return h[D]!==ut?(n.bindFramebuffer(D,ut),h[D]=ut,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ut),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Dt(D,ut){let $=m,bt=!1;if(D){$=f.get(ut),$===void 0&&($=[],f.set(ut,$));let It=D.textures;if($.length!==It.length||$[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Gt=It.length;dt<Gt;dt++)$[dt]=n.COLOR_ATTACHMENT0+dt;$.length=It.length,bt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,bt=!0);bt&&n.drawBuffers($)}function kt(D){return y!==D?(n.useProgram(D),y=D,!0):!1}let jt={[gr]:n.FUNC_ADD,[nf]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};jt[rf]=n.MIN,jt[af]=n.MAX;let ht={[of]:n.ZERO,[lf]:n.ONE,[cf]:n.SRC_COLOR,[Gu]:n.SRC_ALPHA,[mf]:n.SRC_ALPHA_SATURATE,[ff]:n.DST_COLOR,[hf]:n.DST_ALPHA,[uf]:n.ONE_MINUS_SRC_COLOR,[Vu]:n.ONE_MINUS_SRC_ALPHA,[pf]:n.ONE_MINUS_DST_COLOR,[df]:n.ONE_MINUS_DST_ALPHA,[gf]:n.CONSTANT_COLOR,[yf]:n.ONE_MINUS_CONSTANT_COLOR,[xf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(D,ut,$,bt,It,dt,Gt,Nt,ye,X){if(D===os){g===!0&&(Tt(n.BLEND),g=!1);return}if(g===!1&&(rt(n.BLEND),g=!0),D!==ef){if(D!==p||X!==I){if((M!==gr||w!==gr)&&(n.blendEquation(n.FUNC_ADD),M=gr,w=gr),X)switch(D){case ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFunc(n.ONE,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ge("WebGLState: Invalid blending: ",D);break}else switch(D){case ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ou:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bu:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",D);break}E=null,_=null,A=null,R=null,v.set(0,0,0),S=0,p=D,I=X}return}It=It||ut,dt=dt||$,Gt=Gt||bt,(ut!==M||It!==w)&&(n.blendEquationSeparate(jt[ut],jt[It]),M=ut,w=It),($!==E||bt!==_||dt!==A||Gt!==R)&&(n.blendFuncSeparate(ht[$],ht[bt],ht[dt],ht[Gt]),E=$,_=bt,A=dt,R=Gt),(Nt.equals(v)===!1||ye!==S)&&(n.blendColor(Nt.r,Nt.g,Nt.b,ye),v.copy(Nt),S=ye),p=D,I=!1}function vt(D,ut){D.side===bn?Tt(n.CULL_FACE):rt(n.CULL_FACE);let $=D.side===On;ut&&($=!$),Mt($),D.blending===ua&&D.transparent===!1?gt(os):gt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let bt=D.stencilWrite;o.setTest(bt),bt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(D){U!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),U=D)}function Ct(D){D!==jd?(rt(n.CULL_FACE),D!==G&&(D===zu?n.cullFace(n.BACK):D===Qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),G=D}function Qt(D){D!==H&&(J&&n.lineWidth(D),H=D)}function Vt(D,ut,$){D?(rt(n.POLYGON_OFFSET_FILL),(L!==ut||W!==$)&&(L=ut,W=$,a.getReversed()&&(ut=-ut),n.polygonOffset(ut,$))):Tt(n.POLYGON_OFFSET_FILL)}function Yt(D){D?rt(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function ie(D){D===void 0&&(D=n.TEXTURE0+tt-1),j!==D&&(n.activeTexture(D),j=D)}function N(D,ut,$){$===void 0&&(j===null?$=n.TEXTURE0+tt-1:$=j);let bt=st[$];bt===void 0&&(bt={type:void 0,texture:void 0},st[$]=bt),(bt.type!==D||bt.texture!==ut)&&(j!==$&&(n.activeTexture($),j=$),n.bindTexture(D,ut||et[D]),bt.type=D,bt.texture=ut)}function Se(){let D=st[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(D){ge("WebGLState:",D)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(D){ge("WebGLState:",D)}}function x(){try{n.texSubImage2D(...arguments)}catch(D){ge("WebGLState:",D)}}function V(){try{n.texSubImage3D(...arguments)}catch(D){ge("WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){ge("WebGLState:",D)}}function nt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){ge("WebGLState:",D)}}function At(){try{n.texStorage2D(...arguments)}catch(D){ge("WebGLState:",D)}}function Ut(){try{n.texStorage3D(...arguments)}catch(D){ge("WebGLState:",D)}}function ct(){try{n.texImage2D(...arguments)}catch(D){ge("WebGLState:",D)}}function mt(){try{n.texImage3D(...arguments)}catch(D){ge("WebGLState:",D)}}function Ot(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Kt(D,ut){d[D]!==ut&&(n.pixelStorei(D,ut),d[D]=ut)}function Bt(D){Xt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Xt.copy(D))}function Ft(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function it(D,ut){let $=c.get(ut);$===void 0&&($=new WeakMap,c.set(ut,$));let bt=$.get(D);bt===void 0&&(bt=n.getUniformBlockIndex(ut,D.name),$.set(D,bt))}function St(D,ut){let bt=c.get(ut).get(D);l.get(ut)!==bt&&(n.uniformBlockBinding(ut,bt,D.__bindingPointIndex),l.set(ut,bt))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,st={},h={},f=new WeakMap,m=[],y=null,g=!1,p=null,M=null,E=null,_=null,w=null,A=null,R=null,v=new le(0,0,0),S=0,I=!1,U=null,G=null,H=null,L=null,W=null,Xt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:Jt,drawBuffers:Dt,useProgram:kt,setBlending:gt,setMaterial:vt,setFlipSided:Mt,setCullFace:Ct,setLineWidth:Qt,setPolygonOffset:Vt,setScissorTest:Yt,activeTexture:ie,bindTexture:N,unbindTexture:Se,compressedTexImage2D:re,compressedTexImage3D:T,texImage2D:ct,texImage3D:mt,pixelStorei:Kt,getParameter:Ot,updateUBOMapping:it,uniformBlockBinding:St,texStorage2D:At,texStorage3D:Ut,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:nt,scissor:Bt,viewport:Ft,reset:Pt}}function Zv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap,d=new Set,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,x){return m?new OffscreenCanvas(T,x):Ga("canvas")}function g(T,x,V){let q=1,nt=re(T);if((nt.width>V||nt.height>V)&&(q=V/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let At=Math.floor(q*nt.width),Ut=Math.floor(q*nt.height);h===void 0&&(h=y(At,Ut));let ct=x?y(At,Ut):h;return ct.width=At,ct.height=Ut,ct.getContext("2d").drawImage(T,0,0,At,Ut),fe("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+At+"x"+Ut+")."),ct}else return"data"in T&&fe("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function p(T){return T.generateMipmaps}function M(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,x,V,q,nt,At=!1){if(T!==null){if(n[T]!==void 0)return n[T];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Ut;q&&(Ut=t.get("EXT_texture_norm16"),Ut||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=x;if(x===n.RED&&(V===n.FLOAT&&(ct=n.R32F),V===n.HALF_FLOAT&&(ct=n.R16F),V===n.UNSIGNED_BYTE&&(ct=n.R8),V===n.UNSIGNED_SHORT&&Ut&&(ct=Ut.R16_EXT),V===n.SHORT&&Ut&&(ct=Ut.R16_SNORM_EXT)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ct=n.R8UI),V===n.UNSIGNED_SHORT&&(ct=n.R16UI),V===n.UNSIGNED_INT&&(ct=n.R32UI),V===n.BYTE&&(ct=n.R8I),V===n.SHORT&&(ct=n.R16I),V===n.INT&&(ct=n.R32I)),x===n.RG&&(V===n.FLOAT&&(ct=n.RG32F),V===n.HALF_FLOAT&&(ct=n.RG16F),V===n.UNSIGNED_BYTE&&(ct=n.RG8),V===n.UNSIGNED_SHORT&&Ut&&(ct=Ut.RG16_EXT),V===n.SHORT&&Ut&&(ct=Ut.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(ct=n.RG8UI),V===n.UNSIGNED_SHORT&&(ct=n.RG16UI),V===n.UNSIGNED_INT&&(ct=n.RG32UI),V===n.BYTE&&(ct=n.RG8I),V===n.SHORT&&(ct=n.RG16I),V===n.INT&&(ct=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(ct=n.RGB8UI),V===n.UNSIGNED_SHORT&&(ct=n.RGB16UI),V===n.UNSIGNED_INT&&(ct=n.RGB32UI),V===n.BYTE&&(ct=n.RGB8I),V===n.SHORT&&(ct=n.RGB16I),V===n.INT&&(ct=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(ct=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(ct=n.RGBA16UI),V===n.UNSIGNED_INT&&(ct=n.RGBA32UI),V===n.BYTE&&(ct=n.RGBA8I),V===n.SHORT&&(ct=n.RGBA16I),V===n.INT&&(ct=n.RGBA32I)),x===n.RGB&&(V===n.UNSIGNED_SHORT&&Ut&&(ct=Ut.RGB16_EXT),V===n.SHORT&&Ut&&(ct=Ut.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(ct=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(ct=n.R11F_G11F_B10F)),x===n.RGBA){let mt=At?Ba:Pe.getTransfer(nt);V===n.FLOAT&&(ct=n.RGBA32F),V===n.HALF_FLOAT&&(ct=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ct=mt===He?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&Ut&&(ct=Ut.RGBA16_EXT),V===n.SHORT&&Ut&&(ct=Ut.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(ct=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ct=n.RGB5_A1)}return(ct===n.R16F||ct===n.R32F||ct===n.RG16F||ct===n.RG32F||ct===n.RGBA16F||ct===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(T,x){let V;return T?x===null||x===Xi||x===da?V=n.DEPTH24_STENCIL8:x===ki?V=n.DEPTH32F_STENCIL8:x===ha&&(V=n.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xi||x===da?V=n.DEPTH_COMPONENT24:x===ki?V=n.DEPTH_COMPONENT32F:x===ha&&(V=n.DEPTH_COMPONENT16),V}function A(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dn&&T.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){let x=T.target;x.removeEventListener("dispose",R),S(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function v(T){let x=T.target;x.removeEventListener("dispose",v),U(x)}function S(T){let x=i.get(T);if(x.__webglInit===void 0)return;let V=T.source,q=f.get(V);if(q){let nt=q[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(T),Object.keys(q).length===0&&f.delete(V)}i.remove(T)}function I(T){let x=i.get(T);n.deleteTexture(x.__webglTexture);let V=T.source,q=f.get(V);delete q[x.__cacheKey],a.memory.textures--}function U(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let nt=0;nt<x.__webglFramebuffer[q].length;nt++)n.deleteFramebuffer(x.__webglFramebuffer[q][nt]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=T.textures;for(let q=0,nt=V.length;q<nt;q++){let At=i.get(V[q]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),a.memory.textures--),i.remove(V[q])}i.remove(T)}let G=0;function H(){G=0}function L(){return G}function W(T){G=T}function tt(){let T=G;return T>=s.maxTextures&&fe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,T}function J(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ot(T,x){let V=i.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){let q=T.image;if(q===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(V,T,x);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function O(T,x){let V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){Tt(V,T,x);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function j(T,x){let V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){Tt(V,T,x);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function st(T,x){let V=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&V.__version!==T.version){Jt(V,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}let zt={[yi]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[yl]:n.MIRRORED_REPEAT},xt={[Dn]:n.NEAREST,[Mf]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Zl]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},Xt={[Ef]:n.NEVER,[Pf]:n.ALWAYS,[Tf]:n.LESS,[Ic]:n.LEQUAL,[kf]:n.EQUAL,[Lc]:n.GEQUAL,[Rf]:n.GREATER,[Cf]:n.NOTEQUAL};function ne(T,x){if(x.type===ki&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===Zl||x.magFilter===xo||x.magFilter===Ti||x.minFilter===vn||x.minFilter===Zl||x.minFilter===xo||x.minFilter===Ti)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,zt[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,zt[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,zt[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,xt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dn||x.minFilter!==xo&&x.minFilter!==Ti||x.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Lt(T,x){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));let q=x.source,nt=f.get(q);nt===void 0&&(nt={},f.set(q,nt));let At=J(x);if(At!==T.__cacheKey){nt[At]===void 0&&(nt[At]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[At].usedTimes++;let Ut=nt[T.__cacheKey];Ut!==void 0&&(nt[T.__cacheKey].usedTimes--,Ut.usedTimes===0&&I(x)),T.__cacheKey=At,T.__webglTexture=nt[At].texture}return V}function et(T,x,V){return Math.floor(Math.floor(T/V)/x)}function rt(T,x,V,q){let At=T.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,V,q,x.data);else{At.sort((Kt,Bt)=>Kt.start-Bt.start);let Ut=0;for(let Kt=1;Kt<At.length;Kt++){let Bt=At[Ut],Ft=At[Kt],it=Bt.start+Bt.count,St=et(Ft.start,x.width,4),Pt=et(Bt.start,x.width,4);Ft.start<=it+1&&St===Pt&&et(Ft.start+Ft.count-1,x.width,4)===St?Bt.count=Math.max(Bt.count,Ft.start+Ft.count-Bt.start):(++Ut,At[Ut]=Ft)}At.length=Ut+1;let ct=e.getParameter(n.UNPACK_ROW_LENGTH),mt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Kt=0,Bt=At.length;Kt<Bt;Kt++){let Ft=At[Kt],it=Math.floor(Ft.start/4),St=Math.ceil(Ft.count/4),Pt=it%x.width,D=Math.floor(it/x.width),ut=St,$=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Pt,D,ut,$,V,q,x.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ct),e.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ot)}}function Tt(T,x,V){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);let nt=Lt(T,x),At=x.source;e.bindTexture(q,T.__webglTexture,n.TEXTURE0+V);let Ut=i.get(At);if(At.version!==Ut.__version||nt===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let $=Pe.getPrimaries(Pe.workingColorSpace),bt=x.colorSpace===qi?null:Pe.getPrimaries(x.colorSpace),It=x.colorSpace===qi||$===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let mt=g(x.image,!1,s.maxTextureSize);mt=Se(x,mt);let Ot=r.convert(x.format,x.colorSpace),Kt=r.convert(x.type),Bt=_(x.internalFormat,Ot,Kt,x.normalized,x.colorSpace,x.isVideoTexture);ne(q,x);let Ft,it=x.mipmaps,St=x.isVideoTexture!==!0,Pt=Ut.__version===void 0||nt===!0,D=At.dataReady,ut=A(x,mt);if(x.isDepthTexture)Bt=w(x.format===Ks,x.type),Pt&&(St?e.texStorage2D(n.TEXTURE_2D,1,Bt,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,mt.width,mt.height,0,Ot,Kt,null));else if(x.isDataTexture)if(it.length>0){St&&Pt&&e.texStorage2D(n.TEXTURE_2D,ut,Bt,it[0].width,it[0].height);for(let $=0,bt=it.length;$<bt;$++)Ft=it[$],St?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Ft.width,Ft.height,Ot,Kt,Ft.data):e.texImage2D(n.TEXTURE_2D,$,Bt,Ft.width,Ft.height,0,Ot,Kt,Ft.data);x.generateMipmaps=!1}else St?(Pt&&e.texStorage2D(n.TEXTURE_2D,ut,Bt,mt.width,mt.height),D&&rt(x,mt,Ot,Kt)):e.texImage2D(n.TEXTURE_2D,0,Bt,mt.width,mt.height,0,Ot,Kt,mt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){St&&Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Bt,it[0].width,it[0].height,mt.depth);for(let $=0,bt=it.length;$<bt;$++)if(Ft=it[$],x.format!==Ri)if(Ot!==null)if(St){if(D)if(x.layerUpdates.size>0){let It=uh(Ft.width,Ft.height,x.format,x.type);for(let dt of x.layerUpdates){let Gt=Ft.data.subarray(dt*It/Ft.data.BYTES_PER_ELEMENT,(dt+1)*It/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,dt,Ft.width,Ft.height,1,Ot,Gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ft.width,Ft.height,mt.depth,Ot,Ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Bt,Ft.width,Ft.height,mt.depth,0,Ft.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ft.width,Ft.height,mt.depth,Ot,Kt,Ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Bt,Ft.width,Ft.height,mt.depth,0,Ot,Kt,Ft.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{St&&Pt&&e.texStorage2D(n.TEXTURE_2D,ut,Bt,it[0].width,it[0].height);for(let $=0,bt=it.length;$<bt;$++)Ft=it[$],x.format!==Ri?Ot!==null?St?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ft.width,Ft.height,Ot,Ft.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Bt,Ft.width,Ft.height,0,Ft.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Ft.width,Ft.height,Ot,Kt,Ft.data):e.texImage2D(n.TEXTURE_2D,$,Bt,Ft.width,Ft.height,0,Ot,Kt,Ft.data)}else if(x.isDataArrayTexture)if(St){if(Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Bt,mt.width,mt.height,mt.depth),D)if(x.layerUpdates.size>0){let $=uh(mt.width,mt.height,x.format,x.type);for(let bt of x.layerUpdates){let It=mt.data.subarray(bt*$/mt.data.BYTES_PER_ELEMENT,(bt+1)*$/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,mt.width,mt.height,1,Ot,Kt,It)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ot,Kt,mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,mt.width,mt.height,mt.depth,0,Ot,Kt,mt.data);else if(x.isData3DTexture)St?(Pt&&e.texStorage3D(n.TEXTURE_3D,ut,Bt,mt.width,mt.height,mt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ot,Kt,mt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,mt.width,mt.height,mt.depth,0,Ot,Kt,mt.data);else if(x.isFramebufferTexture){if(Pt)if(St)e.texStorage2D(n.TEXTURE_2D,ut,Bt,mt.width,mt.height);else{let $=mt.width,bt=mt.height;for(let It=0;It<ut;It++)e.texImage2D(n.TEXTURE_2D,It,Bt,$,bt,0,Ot,Kt,null),$>>=1,bt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),mt.parentNode!==$){$.appendChild(mt),d.add(x),$.onpaint=bt=>{let It=bt.changedElements;for(let dt of d)It.includes(dt.image)&&(dt.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,mt);else{let It=n.RGBA,dt=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,It,dt,Gt,mt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(it.length>0){if(St&&Pt){let $=re(it[0]);e.texStorage2D(n.TEXTURE_2D,ut,Bt,$.width,$.height)}for(let $=0,bt=it.length;$<bt;$++)Ft=it[$],St?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Ot,Kt,Ft):e.texImage2D(n.TEXTURE_2D,$,Bt,Ot,Kt,Ft);x.generateMipmaps=!1}else if(St){if(Pt){let $=re(mt);e.texStorage2D(n.TEXTURE_2D,ut,Bt,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ot,Kt,mt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,Ot,Kt,mt);p(x)&&M(q),Ut.__version=At.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Jt(T,x,V){if(x.image.length!==6)return;let q=Lt(T,x),nt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);let At=i.get(nt);if(nt.version!==At.__version||q===!0){e.activeTexture(n.TEXTURE0+V);let Ut=Pe.getPrimaries(Pe.workingColorSpace),ct=x.colorSpace===qi?null:Pe.getPrimaries(x.colorSpace),mt=x.colorSpace===qi||Ut===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ot=x.isCompressedTexture||x.image[0].isCompressedTexture,Kt=x.image[0]&&x.image[0].isDataTexture,Bt=[];for(let dt=0;dt<6;dt++)!Ot&&!Kt?Bt[dt]=g(x.image[dt],!0,s.maxCubemapSize):Bt[dt]=Kt?x.image[dt].image:x.image[dt],Bt[dt]=Se(x,Bt[dt]);let Ft=Bt[0],it=r.convert(x.format,x.colorSpace),St=r.convert(x.type),Pt=_(x.internalFormat,it,St,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,ut=At.__version===void 0||q===!0,$=nt.dataReady,bt=A(x,Ft);ne(n.TEXTURE_CUBE_MAP,x);let It;if(Ot){D&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Pt,Ft.width,Ft.height);for(let dt=0;dt<6;dt++){It=Bt[dt].mipmaps;for(let Gt=0;Gt<It.length;Gt++){let Nt=It[Gt];x.format!==Ri?it!==null?D?$&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Nt.width,Nt.height,it,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Pt,Nt.width,Nt.height,0,Nt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Nt.width,Nt.height,it,St,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Pt,Nt.width,Nt.height,0,it,St,Nt.data)}}}else{if(It=x.mipmaps,D&&ut){It.length>0&&bt++;let dt=re(Bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,Pt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Kt){D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Bt[dt].width,Bt[dt].height,it,St,Bt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Pt,Bt[dt].width,Bt[dt].height,0,it,St,Bt[dt].data);for(let Gt=0;Gt<It.length;Gt++){let ye=It[Gt].image[dt].image;D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,ye.width,ye.height,it,St,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Pt,ye.width,ye.height,0,it,St,ye.data)}}else{D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,it,St,Bt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Pt,it,St,Bt[dt]);for(let Gt=0;Gt<It.length;Gt++){let Nt=It[Gt];D?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,it,St,Nt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Pt,it,St,Nt.image[dt])}}}p(x)&&M(n.TEXTURE_CUBE_MAP),At.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Dt(T,x,V,q,nt,At){let Ut=r.convert(V.format,V.colorSpace),ct=r.convert(V.type),mt=_(V.internalFormat,Ut,ct,V.normalized,V.colorSpace),Ot=i.get(x),Kt=i.get(V);if(Kt.__renderTarget=x,!Ot.__hasExternalTextures){let Bt=Math.max(1,x.width>>At),Ft=Math.max(1,x.height>>At);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,At,mt,Bt,Ft,x.depth,0,Ut,ct,null):e.texImage2D(nt,At,mt,Bt,Ft,0,Ut,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),ie(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,nt,Kt.__webglTexture,0,Yt(x)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,nt,Kt.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(T,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){let q=x.depthTexture,nt=q&&q.isDepthTexture?q.type:null,At=w(x.stencilBuffer,nt),Ut=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ie(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(x),At,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(x),At,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,At,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,T)}else{let q=x.textures;for(let nt=0;nt<q.length;nt++){let At=q[nt],Ut=r.convert(At.format,At.colorSpace),ct=r.convert(At.type),mt=_(At.internalFormat,Ut,ct,At.normalized,At.colorSpace);ie(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(x),mt,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(x),mt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,mt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(T,x,V){let q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=i.get(x.depthTexture);if(nt.__renderTarget=x,(!nt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),nt.__webglTexture===void 0){nt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),ne(n.TEXTURE_CUBE_MAP,x.depthTexture);let Ot=r.convert(x.depthTexture.format),Kt=r.convert(x.depthTexture.type),Bt;x.depthTexture.format===is?Bt=n.DEPTH_COMPONENT24:x.depthTexture.format===Ks&&(Bt=n.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Bt,x.width,x.height,0,Ot,Kt,null)}}else ot(x.depthTexture,0);let At=nt.__webglTexture,Ut=Yt(x),ct=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,mt=x.depthTexture.format===Ks?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===is)ie(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,ct,At,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,mt,ct,At,0);else if(x.depthTexture.format===Ks)ie(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,ct,At,0,Ut):n.framebufferTexture2D(n.FRAMEBUFFER,mt,ct,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(T){let x=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)jt(x.__webglFramebuffer[q],T,q);else{let q=T.texture.mipmaps;q&&q.length>0?jt(x.__webglFramebuffer[0],T,0):jt(x.__webglFramebuffer,T,0)}else if(V){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),kt(x.__webglDepthbuffer[q],T,!1);else{let nt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,At)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),kt(x.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(T,x,V){let q=i.get(T);x!==void 0&&Dt(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ht(T)}function vt(T){let x=T.texture,V=i.get(T),q=i.get(x);T.addEventListener("dispose",v);let nt=T.textures,At=T.isWebGLCubeRenderTarget===!0,Ut=nt.length>1;if(Ut||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),At){V.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ct]=[];for(let mt=0;mt<x.mipmaps.length;mt++)V.__webglFramebuffer[ct][mt]=n.createFramebuffer()}else V.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)V.__webglFramebuffer[ct]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let ct=0,mt=nt.length;ct<mt;ct++){let Ot=i.get(nt[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ie(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ct=0;ct<nt.length;ct++){let mt=nt[ct];V.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ct]);let Ot=r.convert(mt.format,mt.colorSpace),Kt=r.convert(mt.type),Bt=_(mt.internalFormat,Ot,Kt,mt.normalized,mt.colorSpace,T.isXRRenderTarget===!0),Ft=Yt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Bt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,V.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),kt(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ne(n.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)Dt(V.__webglFramebuffer[ct][mt],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else Dt(V.__webglFramebuffer[ct],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(x)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let ct=0,mt=nt.length;ct<mt;ct++){let Ot=nt[ct],Kt=i.get(Ot),Bt=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Bt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Bt,Kt.__webglTexture),ne(Bt,Ot),Dt(V.__webglFramebuffer,T,Ot,n.COLOR_ATTACHMENT0+ct,Bt,0),p(Ot)&&M(Bt)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),ne(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)Dt(V.__webglFramebuffer[mt],T,x,n.COLOR_ATTACHMENT0,ct,mt);else Dt(V.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ct,0);p(x)&&M(ct),e.unbindTexture()}T.depthBuffer&&ht(T)}function Mt(T){let x=T.textures;for(let V=0,q=x.length;V<q;V++){let nt=x[V];if(p(nt)){let At=E(T),Ut=i.get(nt).__webglTexture;e.bindTexture(At,Ut),M(At),e.unbindTexture()}}}let Ct=[],Qt=[];function Vt(T){if(T.samples>0){if(ie(T)===!1){let x=T.textures,V=T.width,q=T.height,nt=n.COLOR_BUFFER_BIT,At=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(T),ct=x.length>1;if(ct)for(let Ot=0;Ot<x.length;Ot++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);let mt=T.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ot=0;Ot<x.length;Ot++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ot]);let Kt=i.get(x[Ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Kt,0)}n.blitFramebuffer(0,0,V,q,0,0,V,q,nt,n.NEAREST),l===!0&&(Ct.length=0,Qt.length=0,Ct.push(n.COLOR_ATTACHMENT0+Ot),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Ct.push(At),Qt.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let Ot=0;Ot<x.length;Ot++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ot]);let Kt=i.get(x[Ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ot,n.TEXTURE_2D,Kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Yt(T){return Math.min(s.maxSamples,T.samples)}function ie(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(T){let x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Se(T,x){let V=T.colorSpace,q=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Oa&&V!==qi&&(Pe.getTransfer(V)===He?(q!==Ri||nt!==li)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",V)),x}function re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=H,this.getTextureUnits=L,this.setTextureUnits=W,this.setTexture2D=ot,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=st,this.rebindTextures=gt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kv(n,t){function e(i,s=qi){let r,a=Pe.getTransfer(s);if(i===li)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$u)return n.BYTE;if(i===Ju)return n.SHORT;if(i===ha)return n.UNSIGNED_SHORT;if(i===Kl)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===ki)return n.FLOAT;if(i===Yi)return n.HALF_FLOAT;if(i===th)return n.ALPHA;if(i===eh)return n.RGB;if(i===Ri)return n.RGBA;if(i===is)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===jl)return n.RED;if(i===Ql)return n.RED_INTEGER;if(i===$s)return n.RG;if(i===tc)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===_o||i===vo||i===bo||i===Mo)if(a===He)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===oc||i===lc||i===cc||i===uc||i===So||i===hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ac||i===oc)return a===He?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===lc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cc)return r.COMPRESSED_R11_EAC;if(i===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===So)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dc||i===fc||i===pc||i===mc||i===gc||i===yc||i===xc||i===_c||i===vc||i===bc||i===Mc||i===Sc||i===wc||i===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wc)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return a===He?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===Tc||i===kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ec)return a===He?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rc||i===Cc||i===wo||i===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var $v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Za(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new _i({vertexShader:$v,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Ke(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends zi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new Rh,p={},M=e.getContextAttributes(),E=null,_=null,w=[],A=[],R=new Rt,v=null,S=null,I=new Fn;I.viewport=new an;let U=new Fn;U.viewport=new an;let G=[I,U],H=new Hl,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let rt=w[et];return rt===void 0&&(rt=new Jr,w[et]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(et){let rt=w[et];return rt===void 0&&(rt=new Jr,w[et]=rt),rt.getGripSpace()},this.getHand=function(et){let rt=w[et];return rt===void 0&&(rt=new Jr,w[et]=rt),rt.getHandSpace()};function tt(et){let rt=A.indexOf(et.inputSource);if(rt===-1)return;let Tt=w[rt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,c||a),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function J(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ot);for(let et=0;et<w.length;et++){let rt=A[et];rt!==null&&(A[et]=null,w[et].disconnect(rt))}L=null,W=null,g.reset();for(let et in p)delete p[et];if(t.setRenderTarget(E),f=null,h=null,d=null,s=null,_=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),S!==null){let et=S.camera;et.fov=S.fov,et.zoom=S.zoom,et.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,i.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ot),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Jt=null,Dt=null;M.depth&&(Dt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=M.stencil?Ks:is,Jt=M.stencil?da:Xi);let kt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(kt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new oi(h.textureWidth,h.textureHeight,{format:Ri,type:li,depthTexture:new Gs(h.textureWidth,h.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Tt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new oi(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:li,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ot(et){for(let rt=0;rt<et.removed.length;rt++){let Tt=et.removed[rt],Jt=A.indexOf(Tt);Jt>=0&&(A[Jt]=null,w[Jt].disconnect(Tt))}for(let rt=0;rt<et.added.length;rt++){let Tt=et.added[rt],Jt=A.indexOf(Tt);if(Jt===-1){for(let kt=0;kt<w.length;kt++)if(kt>=A.length){A.push(Tt),Jt=kt;break}else if(A[kt]===null){A[kt]=Tt,Jt=kt;break}if(Jt===-1)break}let Dt=w[Jt];Dt&&Dt.connect(Tt)}}let O=new P,j=new P;function st(et,rt,Tt){O.setFromMatrixPosition(rt.matrixWorld),j.setFromMatrixPosition(Tt.matrixWorld);let Jt=O.distanceTo(j),Dt=rt.projectionMatrix.elements,kt=Tt.projectionMatrix.elements,jt=Dt[14]/(Dt[10]-1),ht=Dt[14]/(Dt[10]+1),gt=(Dt[9]+1)/Dt[5],vt=(Dt[9]-1)/Dt[5],Mt=(Dt[8]-1)/Dt[0],Ct=(kt[8]+1)/kt[0],Qt=jt*Mt,Vt=jt*Ct,Yt=Jt/(-Mt+Ct),ie=Yt*-Mt;if(rt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ie),et.translateZ(Yt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Dt[10]===-1)et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let N=jt+Yt,Se=ht+Yt,re=Qt-ie,T=Vt+(Jt-ie),x=gt*ht/Se*N,V=vt*ht/Se*N;et.projectionMatrix.makePerspective(re,T,x,V,N,Se),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function zt(et,rt){rt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(rt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let rt=et.near,Tt=et.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(Tt=g.depthFar)),H.near=U.near=I.near=rt,H.far=U.far=I.far=Tt,(L!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,W=H.far),H.layers.mask=et.layers.mask|6,I.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Jt=et.parent,Dt=H.cameras;zt(H,Jt);for(let kt=0;kt<Dt.length;kt++)zt(Dt[kt],Jt);Dt.length===2?st(H,I,U):H.projectionMatrix.copy(I.projectionMatrix),S===null&&et.isPerspectiveCamera&&(S={camera:et,fov:et.fov,zoom:et.zoom}),xt(et,H,Jt)};function xt(et,rt,Tt){Tt===null?et.matrix.copy(rt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(rt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Zr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(et){l=et,h!==null&&(h.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(et){return p[et]};let Xt=null;function ne(et,rt){if(u=rt.getViewerPose(c||a),m=rt,u!==null){let Tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Jt=!1;Tt.length!==H.cameras.length&&(H.cameras.length=0,Jt=!0);for(let ht=0;ht<Tt.length;ht++){let gt=Tt[ht],vt=null;if(f!==null)vt=f.getViewport(gt);else{let Ct=d.getViewSubImage(h,gt);vt=Ct.viewport,ht===0&&(t.setRenderTargetTextures(_,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(_))}let Mt=G[ht];Mt===void 0&&(Mt=new Fn,Mt.layers.enable(ht),Mt.viewport=new an,G[ht]=Mt),Mt.matrix.fromArray(gt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(gt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(vt.x,vt.y,vt.width,vt.height),ht===0&&(H.matrix.copy(Mt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Jt===!0&&H.cameras.push(Mt)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let ht=d.getDepthInformation(Tt[0]);ht&&ht.isValid&&ht.texture&&g.init(ht,s.renderState)}if(Dt&&Dt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let ht=0;ht<Tt.length;ht++){let gt=Tt[ht].camera;if(gt){let vt=p[gt];vt||(vt=new Za,p[gt]=vt);let Mt=d.getCameraImage(gt);vt.sourceTexture=Mt}}}}for(let Tt=0;Tt<w.length;Tt++){let Jt=A[Tt],Dt=w[Tt];Jt!==null&&Dt!==void 0&&Dt.update(Jt,rt,c||a)}Xt&&Xt(et,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Lt=new dp;Lt.setAnimationLoop(ne),this.setAnimationLoop=function(et){Xt=et},this.dispose=function(){}}},jv=new Ge,xp=new be;xp.set(-1,0,0,0,1,0,0,0,1);function Qv(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,oh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===On&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===On&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),E=M.envMap,_=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function t1(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let A=w.program;i.uniformBlockBinding(_,A)}function c(_,w){let A=s[_.id];A===void 0&&(g(_),A=u(_),s[_.id]=A,_.addEventListener("dispose",M));let R=w.program;i.updateUBOMapping(_,R);let v=t.render.frame;r[_.id]!==v&&(h(_),r[_.id]=v)}function u(_){let w=d();_.__bindingPointIndex=w;let A=n.createBuffer(),R=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,A),A}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let w=s[_.id],A=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,S=A.length;v<S;v++){let I=A[v];if(Array.isArray(I))for(let U=0,G=I.length;U<G;U++)f(I[U],v,U,R);else f(I,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,w,A,R){if(y(_,w,A,R)===!0){let v=_.__offset,S=_.value;if(Array.isArray(S)){let I=0;for(let U=0;U<S.length;U++){let G=S[U],H=p(G);m(G,_.__data,I),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function m(_,w,A){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,A)}function y(_,w,A,R){let v=_.value,S=w+"_"+A;if(R[S]===void 0)return typeof v=="number"||typeof v=="boolean"?R[S]=v:ArrayBuffer.isView(v)?R[S]=v.slice():R[S]=v.clone(),!0;{let I=R[S];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(_){let w=_.uniforms,A=0,R=16;for(let S=0,I=w.length;S<I;S++){let U=Array.isArray(w[S])?w[S]:[w[S]];for(let G=0,H=U.length;G<H;G++){let L=U[G],W=Array.isArray(L.value)?L.value:[L.value];for(let tt=0,J=W.length;tt<J;tt++){let ot=W[tt],O=p(ot),j=A%R,st=j%O.boundary,zt=j+st;A+=st,zt!==0&&R-zt<O.storage&&(A+=R-zt),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=O.storage}}}let v=A%R;return v>0&&(A+=R-v),_.__size=A,_.__cache={},this}function p(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",_),w}function M(_){let w=_.target;w.removeEventListener("dispose",M);let A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var e1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;function n1(){return ls===null&&(ls=new Xa(e1,16,16,$s,Yi),ls.name="DFG_LUT",ls.minFilter=vn,ls.magFilter=vn,ls.wrapS=ns,ls.wrapT=ns,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var Fc=class{constructor(t={}){let{canvas:e=Lf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=li}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let y=f,g=new Set([ec,tc,Ql]),p=new Set([li,Xi,ha,da,$l,Jl]),M=new Uint32Array(4),E=new Int32Array(4),_=new P,w=null,A=null,R=[],v=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,G=null,H=null,L=null,W=null;this._outputColorSpace=pn;let tt=0,J=0,ot=null,O=-1,j=null,st=new an,zt=new an,xt=null,Xt=new le(0),ne=0,Lt=e.width,et=e.height,rt=1,Tt=null,Jt=null,Dt=new an(0,0,Lt,et),kt=new an(0,0,Lt,et),jt=!1,ht=new Qr,gt=!1,vt=!1,Mt=new Ge,Ct=new P,Qt=new an,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function ie(){return ot===null?rt:1}let N=i;function Se(b,F){return e.getContext(b,F)}let re,T,x,V,q,nt,At,Ut,ct,mt,Ot,Kt,Bt,Ft,it,St,Pt,D,ut,$,bt,It,dt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",yt,!1),N===null){let F="webgl2";if(N=Se(F,b),N===null)throw Se(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(b){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ge("WebGLRenderer: "+b.message),b}function Gt(){re=new c_(N),re.init(),bt=new Kv(N,re),T=new Qx(N,re,t,bt),x=new qv(N,re),T.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),H=N.createFramebuffer(),L=N.createFramebuffer(),W=N.createFramebuffer(),V=new d_(N),q=new Lv,nt=new Zv(N,re,x,q,T,bt,V),At=new l_(I),Ut=new pg(N),It=new Jx(N,Ut),ct=new u_(N,Ut,V,It),mt=new p_(N,ct,Ut,It,V),D=new f_(N,T,nt),it=new t_(q),Ot=new Iv(I,At,re,T,It,it),Kt=new Qv(I,q),Bt=new Nv,Ft=new Gv(re),Pt=new $x(I,At,x,mt,m,l),St=new Yv(I,mt,T),dt=new t1(N,V,T,x),ut=new jx(N,re,V),$=new h_(N,re,V),V.programs=Ot.programs,I.capabilities=T,I.extensions=re,I.properties=q,I.renderLists=Bt,I.shadowMap=St,I.state=x,I.info=V}y!==li&&(S=new g_(y,e.width,e.height,o,s,r));let Nt=new Ch(I,N);this.xr=Nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(b){b!==void 0&&(rt=b,this.setSize(Lt,et,!1))},this.getSize=function(b){return b.set(Lt,et)},this.setSize=function(b,F,Q=!0){if(Nt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=b,et=F,e.width=Math.floor(b*rt),e.height=Math.floor(F*rt),Q===!0&&(e.style.width=b+"px",e.style.height=F+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Lt*rt,et*rt).floor()},this.setDrawingBufferSize=function(b,F,Q){Lt=b,et=F,rt=Q,e.width=Math.floor(b*Q),e.height=Math.floor(F*Q),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(y===li){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(st)},this.getViewport=function(b){return b.copy(Dt)},this.setViewport=function(b,F,Q,K){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,F,Q,K),x.viewport(st.copy(Dt).multiplyScalar(rt).round())},this.getScissor=function(b){return b.copy(kt)},this.setScissor=function(b,F,Q,K){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,F,Q,K),x.scissor(zt.copy(kt).multiplyScalar(rt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){x.setScissorTest(jt=b)},this.setOpaqueSort=function(b){Tt=b},this.setTransparentSort=function(b){Jt=b},this.getClearColor=function(b){return b.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,Q=!0){let K=0;if(b){let Y=!1;if(ot!==null){let C=ot.texture.format;Y=g.has(C)}if(Y){let C=ot.texture.type,z=p.has(C),at=Pt.getClearColor(),_t=Pt.getClearAlpha(),wt=at.r,ae=at.g,me=at.b;z?(M[0]=wt,M[1]=ae,M[2]=me,M[3]=_t,N.clearBufferuiv(N.COLOR,0,M)):(E[0]=wt,E[1]=ae,E[2]=me,E[3]=_t,N.clearBufferiv(N.COLOR,0,E))}else K|=N.COLOR_BUFFER_BIT}F&&(K|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),G=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Pt.dispose(),Bt.dispose(),Ft.dispose(),q.dispose(),At.dispose(),mt.dispose(),It.dispose(),dt.dispose(),Ot.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",qt),Nt.removeEventListener("sessionend",oe),xe.stop()};function ye(b){b.preventDefault(),ih("WebGLRenderer: Context Lost."),U=!0}function X(){ih("WebGLRenderer: Context Restored."),U=!1;let b=V.autoReset,F=St.enabled,Q=St.autoUpdate,K=St.needsUpdate,Y=St.type;Gt(),V.autoReset=b,St.enabled=F,St.autoUpdate=Q,St.needsUpdate=K,St.type=Y}function yt(b){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function k(b){let F=b.target;F.removeEventListener("dispose",k),B(F)}function B(b){Z(b),q.remove(b)}function Z(b){let F=q.get(b).programs;F!==void 0&&(F.forEach(function(Q){Ot.releaseProgram(Q)}),b.isShaderMaterial&&Ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,Q,K,Y,C){F===null&&(F=Vt);let z=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,at=Ps(b,F,Q,K,Y);x.setMaterial(K,z);let _t=Q.index,wt=1;if(K.wireframe===!0){if(_t=ct.getWireframeAttribute(Q),_t===void 0)return;wt=2}let ae=Q.drawRange,me=Q.attributes.position,Zt=ae.start*wt,ve=(ae.start+ae.count)*wt;C!==null&&(Zt=Math.max(Zt,C.start*wt),ve=Math.min(ve,(C.start+C.count)*wt)),_t!==null?(Zt=Math.max(Zt,0),ve=Math.min(ve,_t.count)):me!=null&&(Zt=Math.max(Zt,0),ve=Math.min(ve,me.count));let fn=ve-Zt;if(fn<0||fn===1/0)return;It.setup(Y,K,at,Q,_t);let qe,Ve=ut;if(_t!==null&&(qe=Ut.get(_t),Ve=$,Ve.setIndex(qe)),Y.isMesh)K.wireframe===!0?(x.setLineWidth(K.wireframeLinewidth*ie()),Ve.setMode(N.LINES)):Ve.setMode(N.TRIANGLES);else if(Y.isLine){let Tn=K.linewidth;Tn===void 0&&(Tn=1),x.setLineWidth(Tn*ie()),Y.isLineSegments?Ve.setMode(N.LINES):Y.isLineLoop?Ve.setMode(N.LINE_LOOP):Ve.setMode(N.LINE_STRIP)}else Y.isPoints?Ve.setMode(N.POINTS):Y.isSprite&&Ve.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Tn=Y._multiDrawStarts,te=Y._multiDrawCounts,Kn=Y._multiDrawCount,Ue=_t?Ut.get(_t).bytesPerElement:1,wi=q.get(K).currentProgram.getUniforms();for(let ts=0;ts<Kn;ts++)wi.setValue(N,"_gl_DrawID",ts),Ve.render(Tn[ts]/Ue,te[ts])}else if(Y.isInstancedMesh)Ve.renderInstances(Zt,fn,Y.count);else if(Q.isInstancedBufferGeometry){let Tn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,te=Math.min(Q.instanceCount,Tn);Ve.renderInstances(Zt,fn,te)}else Ve.render(Zt,fn)};function ft(b,F,Q,K){G!==null&&b.isNodeMaterial&&G.setObject(K,b),gt===!0&&it.setState(b,Q,!1),b.transparent===!0&&b.side===bn&&b.forceSinglePass===!1?(b.side=On,b.needsUpdate=!0,gn(b,F,K),b.side=qs,b.needsUpdate=!0,gn(b,F,K),b.side=bn):gn(b,F,K)}this.compile=function(b,F,Q=null){Q===null&&(Q=b),G!==null&&G.renderStart(b,F,Q),A=Ft.get(Q),A.init(F),v.push(A),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),b!==Q&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(),G!==null&&G.updateLights(A.state.lightsArray),vt=this.localClippingEnabled,gt=it.init(this.clippingPlanes,vt),gt===!0&&it.setGlobalState(this.clippingPlanes,F),G!==null&&St.render(A.state.shadowsArray,Q,F);let K=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let C=Y.material;if(C)if(Array.isArray(C))for(let z=0;z<C.length;z++){let at=C[z];ft(at,Q,F,Y),K.add(at)}else ft(C,Q,F,Y),K.add(C)}),A=v.pop(),G!==null&&G.renderEnd(),K},this.compileAsync=function(b,F,Q=null){let K=this.compile(b,F,Q);return new Promise(Y=>{function C(){if(K.forEach(function(z){let _t=q.get(z).currentProgram;(_t===void 0||_t.isReady())&&K.delete(z)}),K.size===0){Y(b);return}setTimeout(C,10)}re.get("KHR_parallel_shader_compile")!==null?C():setTimeout(C,10)})};let lt=null;function $t(b){lt&&lt(b)}function qt(){xe.stop()}function oe(){xe.start()}let xe=new dp;xe.setAnimationLoop($t),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(b){lt=b,Nt.setAnimationLoop(b),b===null?xe.stop():xe.start()},Nt.addEventListener("sessionstart",qt),Nt.addEventListener("sessionend",oe),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;G!==null&&G.renderStart(b,F);let Q=Nt.enabled===!0&&Nt.isPresenting===!0,K=S!==null&&(ot===null||Q)&&S.begin(I,ot);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(F),F=Nt.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,F,ot),A=Ft.get(b,v.length),A.init(F),A.state.textureUnits=nt.getTextureUnits(),v.push(A),Mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ht.setFromProjectionMatrix(Mt,Fi,F.reversedDepth),vt=this.localClippingEnabled,gt=it.init(this.clippingPlanes,vt),w=Bt.get(b,R.length),w.init(),R.push(w),Nt.enabled===!0&&Nt.isPresenting===!0){let z=I.xr.getDepthSensingMesh();z!==null&&_e(z,F,-1/0,I.sortObjects)}_e(b,F,0,I.sortObjects),w.finish(),G!==null&&G.updateLights(A.state.lightsArray),I.sortObjects===!0&&w.sort(Tt,Jt),Yt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Yt&&Pt.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&it.beginShadows();let Y=A.state.shadowsArray;if(St.render(Y,b,F),gt===!0&&it.endShadows(),(K&&S.hasRenderPass())===!1){let z=w.opaque,at=w.transmissive;if(A.setupLights(),F.isArrayCamera){let _t=F.cameras;if(at.length>0)for(let wt=0,ae=_t.length;wt<ae;wt++){let me=_t[wt];dn(z,at,b,me)}Yt&&Pt.render(b);for(let wt=0,ae=_t.length;wt<ae;wt++){let me=_t[wt];Ee(w,b,me,me.viewport)}}else at.length>0&&dn(z,at,b,F),Yt&&Pt.render(b),Ee(w,b,F)}ot!==null&&J===0&&(nt.updateMultisampleRenderTarget(ot),nt.updateRenderTargetMipmap(ot)),K&&S.end(I),b.isScene===!0&&b.onAfterRender(I,b,F),It.resetDefaultState(),O=-1,j=null,v.pop(),v.length>0?(A=v[v.length-1],nt.setTextureUnits(A.state.textureUnits),gt===!0&&it.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,G!==null&&G.renderEnd()};function _e(b,F,Q,K){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ht)){K&&Qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Mt);let z=mt.update(b),at=b.material;at.visible&&w.push(b,z,at,Q,Qt.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ht))){let z=mt.update(b),at=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qt.copy(b.boundingSphere.center)):(z.boundingSphere===null&&z.computeBoundingSphere(),Qt.copy(z.boundingSphere.center)),Qt.applyMatrix4(b.matrixWorld).applyMatrix4(Mt)),Array.isArray(at)){let _t=z.groups;for(let wt=0,ae=_t.length;wt<ae;wt++){let me=_t[wt],Zt=at[me.materialIndex];Zt&&Zt.visible&&w.push(b,z,Zt,Q,Qt.z,me,F)}}else at.visible&&w.push(b,z,at,Q,Qt.z,null,F)}}let C=b.children;for(let z=0,at=C.length;z<at;z++)_e(C[z],F,Q,K)}function Ee(b,F,Q,K){let{opaque:Y,transmissive:C,transparent:z}=b;A.setupLightsView(Q),gt===!0&&it.setGlobalState(I.clippingPlanes,Q),K&&x.viewport(st.copy(K)),Y.length>0&&Ye(Y,F,Q),C.length>0&&Ye(C,F,Q),z.length>0&&Ye(z,F,Q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function dn(b,F,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){let Zt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new oi(1,1,{generateMipmaps:!0,type:Zt?Yi:li,minFilter:Ti,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}let C=A.state.transmissionRenderTarget[K.id],z=K.viewport||st;C.setSize(z.z*I.transmissionResolutionScale,z.w*I.transmissionResolutionScale);let at=I.getRenderTarget(),_t=I.getActiveCubeFace(),wt=I.getActiveMipmapLevel();I.setRenderTarget(C),I.getClearColor(Xt),ne=I.getClearAlpha(),ne<1&&I.setClearColor(16777215,.5),I.clear(),Yt&&Pt.render(Q);let ae=I.toneMapping;I.toneMapping=Wi;let me=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),gt===!0&&it.setGlobalState(I.clippingPlanes,K),Ye(b,Q,K),nt.updateMultisampleRenderTarget(C),nt.updateRenderTargetMipmap(C),re.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ve=0,fn=F.length;ve<fn;ve++){let qe=F[ve],{object:Ve,geometry:Tn,material:te,group:Kn}=qe;if(te.side===bn&&Ve.layers.test(K.layers)){let Ue=te.side;te.side=On,te.needsUpdate=!0,Nn(Ve,Q,K,Tn,te,Kn),te.side=Ue,te.needsUpdate=!0,Zt=!0}}Zt===!0&&(nt.updateMultisampleRenderTarget(C),nt.updateRenderTargetMipmap(C))}I.setRenderTarget(at,_t,wt),I.setClearColor(Xt,ne),me!==void 0&&(K.viewport=me),I.toneMapping=ae}function Ye(b,F,Q){let K=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,C=b.length;Y<C;Y++){let z=b[Y],{object:at,geometry:_t,group:wt}=z,ae=z.material;ae.allowOverride===!0&&K!==null&&(ae=K),at.layers.test(Q.layers)&&Nn(at,F,Q,_t,ae,wt)}}function Nn(b,F,Q,K,Y,C){G!==null&&Y.isNodeMaterial&&G.setObject(b,Y),b.onBeforeRender(I,F,Q,K,Y,C),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(I,F,Q,K,b,C),Y.transparent===!0&&Y.side===bn&&Y.forceSinglePass===!1?(Y.side=On,Y.needsUpdate=!0,I.renderBufferDirect(Q,F,K,Y,b,C),Y.side=qs,Y.needsUpdate=!0,I.renderBufferDirect(Q,F,K,Y,b,C),Y.side=bn):I.renderBufferDirect(Q,F,K,Y,b,C),b.onAfterRender(I,F,Q,K,Y,C)}function gn(b,F,Q){F.isScene!==!0&&(F=Vt);let K=q.get(b),Y=A.state.lights,C=A.state.shadowsArray,z=Y.state.version,at=Ot.getParameters(b,Y.state,C,F,Q,A.state.lightProbeGridArray),_t=Ot.getProgramCacheKey(at),wt=K.programs;K.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,K.fog=F.fog;let ae=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;K.envMap=At.get(b.envMap||K.environment,ae),K.envMapRotation=K.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,wt===void 0&&(b.addEventListener("dispose",k),wt=new Map,K.programs=wt);let me=wt.get(_t);if(me!==void 0){if(K.currentProgram===me&&K.lightsStateVersion===z)return gs(b,at),me}else at.uniforms=Ot.getUniforms(b),G!==null&&b.isNodeMaterial&&G.build(b,Q,at),b.onBeforeCompile(at,I),me=Ot.acquireProgram(at,_t),wt.set(_t,me),K.uniforms=at.uniforms;let Zt=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=it.uniform),gs(b,at),K.needsLights=yn(b),K.lightsStateVersion=z,K.needsLights&&(Zt.ambientLightColor.value=Y.state.ambient,Zt.lightProbe.value=Y.state.probe,Zt.sunLights.value=Y.state.sun,Zt.sunLightShadows.value=Y.state.sunShadow,Zt.directionalLights.value=Y.state.directional,Zt.directionalLightShadows.value=Y.state.directionalShadow,Zt.spotLights.value=Y.state.spot,Zt.spotLightShadows.value=Y.state.spotShadow,Zt.rectAreaLights.value=Y.state.rectArea,Zt.ltc_1.value=Y.state.rectAreaLTC1,Zt.ltc_2.value=Y.state.rectAreaLTC2,Zt.pointLights.value=Y.state.point,Zt.pointLightShadows.value=Y.state.pointShadow,Zt.hemisphereLights.value=Y.state.hemi,Zt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Zt.sunShadowCascade.value=Y.state.sunShadowCascade,Zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Zt.spotLightMatrix.value=Y.state.spotLightMatrix,Zt.spotLightMap.value=Y.state.spotLightMap,Zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.lightProbeGrid=A.state.lightProbeGridArray.length>0,K.currentProgram=me,K.uniformsList=null,me}function Un(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=ma.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function gs(b,F){let Q=q.get(b);Q.outputColorSpace=F.outputColorSpace,Q.batching=F.batching,Q.batchingColor=F.batchingColor,Q.instancing=F.instancing,Q.instancingColor=F.instancingColor,Q.instancingMorph=F.instancingMorph,Q.skinning=F.skinning,Q.morphTargets=F.morphTargets,Q.morphNormals=F.morphNormals,Q.morphColors=F.morphColors,Q.morphTargetsCount=F.morphTargetsCount,Q.numClippingPlanes=F.numClippingPlanes,Q.numIntersection=F.numClipIntersection,Q.vertexAlphas=F.vertexAlphas,Q.vertexTangents=F.vertexTangents,Q.toneMapping=F.toneMapping}function ys(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let Q=0,K=b.length;Q<K;Q++){let Y=b[Q];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function Ps(b,F,Q,K,Y){F.isScene!==!0&&(F=Vt),nt.resetTextureUnits();let C=F.fog,z=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?F.environment:null,at=ot===null?I.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Pe.workingColorSpace,_t=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,wt=At.get(K.envMap||z,_t),ae=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,me=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Zt=!!Q.morphAttributes.position,ve=!!Q.morphAttributes.normal,fn=!!Q.morphAttributes.color,qe=Wi;K.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(qe=I.toneMapping);let Ve=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tn=Ve!==void 0?Ve.length:0,te=q.get(K),Kn=A.state.lights;if(gt===!0&&(vt===!0||b!==j)){let Je=b===j&&K.id===O;it.setState(K,b,Je)}let Ue=!1;K.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Kn.state.version||te.outputColorSpace!==at||Y.isBatchedMesh&&te.batching===!1||!Y.isBatchedMesh&&te.batching===!0||Y.isBatchedMesh&&te.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&te.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&te.instancing===!1||!Y.isInstancedMesh&&te.instancing===!0||Y.isSkinnedMesh&&te.skinning===!1||!Y.isSkinnedMesh&&te.skinning===!0||Y.isInstancedMesh&&te.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&te.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&te.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&te.instancingMorph===!1&&Y.morphTexture!==null||te.envMap!==wt||K.fog===!0&&te.fog!==C||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==it.numPlanes||te.numIntersection!==it.numIntersection)||te.vertexAlphas!==ae||te.vertexTangents!==me||te.morphTargets!==Zt||te.morphNormals!==ve||te.morphColors!==fn||te.toneMapping!==qe||te.morphTargetsCount!==Tn||!!te.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,te.__version=K.version);let wi=te.currentProgram;Ue===!0&&(wi=gn(K,F,Y),G&&K.isNodeMaterial&&G.onUpdateProgram(K,wi,te));let ts=!1,Is=!1,Er=!1,Ze=wi.getUniforms(),xn=te.uniforms;if(x.useProgram(wi.program)&&(ts=!0,Is=!0,Er=!0),K.id!==O&&(O=K.id,Is=!0),te.needsLights){let Je=ys(A.state.lightProbeGridArray,Y);te.lightProbeGrid!==Je&&(te.lightProbeGrid=Je,Is=!0)}if(ts||j!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ze.setValue(N,"projectionMatrix",b.projectionMatrix),Ze.setValue(N,"viewMatrix",b.matrixWorldInverse);let Ds=Ze.map.cameraPosition;Ds!==void 0&&Ds.setValue(N,Ct.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&Ze.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ze.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Is=!0,Er=!0)}if(te.needsLights&&(Kn.state.sunShadowMap.length>0&&Ze.setValue(N,"sunShadowMap",Kn.state.sunShadowMap,nt),Kn.state.directionalShadowMap.length>0&&Ze.setValue(N,"directionalShadowMap",Kn.state.directionalShadowMap,nt),Kn.state.spotShadowMap.length>0&&Ze.setValue(N,"spotShadowMap",Kn.state.spotShadowMap,nt),Kn.state.pointShadowMap.length>0&&Ze.setValue(N,"pointShadowMap",Kn.state.pointShadowMap,nt)),Y.isSkinnedMesh){Ze.setOptional(N,Y,"bindMatrix"),Ze.setOptional(N,Y,"bindMatrixInverse");let Je=Y.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ze.setValue(N,"boneTexture",Je.boneTexture,nt))}Y.isBatchedMesh&&(Ze.setOptional(N,Y,"batchingTexture"),Ze.setValue(N,"batchingTexture",Y._matricesTexture,nt),Ze.setOptional(N,Y,"batchingIdTexture"),Ze.setValue(N,"batchingIdTexture",Y._indirectTexture,nt),Ze.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ze.setValue(N,"batchingColorTexture",Y._colorsTexture,nt));let Ls=Q.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&D.update(Y,Q,wi),(Is||te.receiveShadow!==Y.receiveShadow)&&(te.receiveShadow=Y.receiveShadow,Ze.setValue(N,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&F.environment!==null&&(xn.envMapIntensity.value=F.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=n1()),Is){if(Ze.setValue(N,"toneMappingExposure",I.toneMappingExposure),te.needsLights&&ir(xn,Er),C&&K.fog===!0&&Kt.refreshFogUniforms(xn,C),Kt.refreshMaterialUniforms(xn,K,rt,et,A.state.transmissionRenderTarget[b.id]),te.needsLights&&te.lightProbeGrid){let Je=te.lightProbeGrid;xn.probesSH.value=Je.texture,xn.probesMin.value.copy(Je.boundingBox.min),xn.probesMax.value.copy(Je.boundingBox.max),xn.probesResolution.value.copy(Je.resolution)}ma.upload(N,Un(te),xn,nt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ma.upload(N,Un(te),xn,nt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ze.setValue(N,"center",Y.center),Ze.setValue(N,"modelViewMatrix",Y.modelViewMatrix),Ze.setValue(N,"normalMatrix",Y.normalMatrix),Ze.setValue(N,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){let Je=K.uniformsGroups;for(let Ds=0,Tr=Je.length;Ds<Tr;Ds++){let cd=Je[Ds];dt.update(cd,wi),dt.bind(cd,wi)}}return wi}function ir(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function yn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(b,F,Q){let K=q.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=F,q.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let Q=q.get(b);Q.__webglFramebuffer=F,Q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,Q=0){ot=b,tt=F,J=Q;let K=null,Y=!1,C=!1;if(b){let at=q.get(b);if(at.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,at.__webglFramebuffer),st.copy(b.viewport),zt.copy(b.scissor),xt=b.scissorTest,x.viewport(st),x.scissor(zt),x.setScissorTest(xt),O=-1;return}else if(at.__webglFramebuffer===void 0)nt.setupRenderTarget(b);else if(at.__hasExternalTextures)nt.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ae=b.depthTexture;if(at.__boundDepthTexture!==ae){if(ae!==null&&q.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(b)}}let _t=b.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(C=!0);let wt=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(wt[F])?K=wt[F][Q]:K=wt[F],Y=!0):b.samples>0&&nt.useMultisampledRTT(b)===!1?K=q.get(b).__webglMultisampledFramebuffer:Array.isArray(wt)?K=wt[Q]:K=wt,st.copy(b.viewport),zt.copy(b.scissor),xt=b.scissorTest}else st.copy(Dt).multiplyScalar(rt).floor(),zt.copy(kt).multiplyScalar(rt).floor(),xt=jt;if(Q!==0&&(K=H),x.bindFramebuffer(N.FRAMEBUFFER,K)&&x.drawBuffers(b,K),x.viewport(st),x.scissor(zt),x.setScissorTest(xt),Y){let at=q.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,at.__webglTexture,Q)}else if(C){let at=F;for(let _t=0;_t<b.textures.length;_t++){let wt=q.get(b.textures[_t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+_t,wt.__webglTexture,Q,at)}}else if(b!==null&&Q!==0){let at=q.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,at.__webglTexture,Q)}O=-1};function ri(b){let F=q.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=T.textureFormatReadable(b.format),F.__typeReadable=T.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,Q,K,Y,C,z,at=0){if(!(b&&b.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&z!==void 0&&(_t=_t[z]),_t){x.bindFramebuffer(N.FRAMEBUFFER,_t);try{let wt=b.textures[at],ae=wt.format,me=wt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+at);let Zt=ri(wt);if(Zt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Zt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-K&&Q>=0&&Q<=b.height-Y&&N.readPixels(F,Q,K,Y,bt.convert(ae),bt.convert(me),C)}finally{let wt=ot!==null?q.get(ot).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,F,Q,K,Y,C,z,at=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&z!==void 0&&(_t=_t[z]),_t)if(F>=0&&F<=b.width-K&&Q>=0&&Q<=b.height-Y){x.bindFramebuffer(N.FRAMEBUFFER,_t);let wt=b.textures[at],ae=wt.format,me=wt.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+at);let Zt=ri(wt);if(Zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.bufferData(N.PIXEL_PACK_BUFFER,C.byteLength,N.STREAM_READ),N.readPixels(F,Q,K,Y,bt.convert(ae),bt.convert(me),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let fn=ot!==null?q.get(ot).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,fn);let qe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nf(N,qe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,C),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ve),N.deleteSync(qe),C}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,Q=0){let K=Math.pow(2,-Q),Y=Math.floor(b.image.width*K),C=Math.floor(b.image.height*K),z=F!==null?F.x:0,at=F!==null?F.y:0;nt.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,z,at,Y,C),x.unbindTexture()},this.copyTextureToTexture=function(b,F,Q=null,K=null,Y=0,C=0){let z,at,_t,wt,ae,me,Zt,ve,fn,qe=b.isCompressedTexture?b.mipmaps[C]:b.image;if(Q!==null)z=Q.max.x-Q.min.x,at=Q.max.y-Q.min.y,_t=Q.isBox3?Q.max.z-Q.min.z:1,wt=Q.min.x,ae=Q.min.y,me=Q.isBox3?Q.min.z:0;else{let xn=Math.pow(2,-Y);z=Math.floor(qe.width*xn),at=Math.floor(qe.height*xn),b.isDataArrayTexture?_t=qe.depth:b.isData3DTexture?_t=Math.floor(qe.depth*xn):_t=1,wt=0,ae=0,me=0}K!==null?(Zt=K.x,ve=K.y,fn=K.z):(Zt=0,ve=0,fn=0);let Ve=bt.convert(F.format),Tn=bt.convert(F.type),te;F.isData3DTexture?(nt.setTexture3D(F,0),te=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(nt.setTexture2DArray(F,0),te=N.TEXTURE_2D_ARRAY):(nt.setTexture2D(F,0),te=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let Kn=x.getParameter(N.UNPACK_ROW_LENGTH),Ue=x.getParameter(N.UNPACK_IMAGE_HEIGHT),wi=x.getParameter(N.UNPACK_SKIP_PIXELS),ts=x.getParameter(N.UNPACK_SKIP_ROWS),Is=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,qe.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),x.pixelStorei(N.UNPACK_SKIP_ROWS,ae),x.pixelStorei(N.UNPACK_SKIP_IMAGES,me);let Er=b.isDataArrayTexture||b.isData3DTexture,Ze=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let xn=q.get(b),Ls=q.get(F),Je=q.get(xn.__renderTarget),Ds=q.get(Ls.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,Je.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Tr=0;Tr<_t;Tr++)Er&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(b).__webglTexture,Y,me+Tr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(F).__webglTexture,C,fn+Tr)),N.blitFramebuffer(wt,ae,z,at,Zt,ve,z,at,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||q.has(b)){let xn=q.get(b),Ls=q.get(F);x.bindFramebuffer(N.READ_FRAMEBUFFER,L),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let Je=0;Je<_t;Je++)Er?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,Y,me+Je):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,Y),Ze?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ls.__webglTexture,C,fn+Je):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ls.__webglTexture,C),Y!==0?N.blitFramebuffer(wt,ae,z,at,Zt,ve,z,at,N.COLOR_BUFFER_BIT,N.NEAREST):Ze?N.copyTexSubImage3D(te,C,Zt,ve,fn+Je,wt,ae,z,at):N.copyTexSubImage2D(te,C,Zt,ve,wt,ae,z,at);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ze?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(te,C,Zt,ve,fn,z,at,_t,Ve,Tn,qe.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(te,C,Zt,ve,fn,z,at,_t,Ve,qe.data):N.texSubImage3D(te,C,Zt,ve,fn,z,at,_t,Ve,Tn,qe):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,C,Zt,ve,z,at,Ve,Tn,qe.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,C,Zt,ve,qe.width,qe.height,Ve,qe.data):N.texSubImage2D(N.TEXTURE_2D,C,Zt,ve,z,at,Ve,Tn,qe);x.pixelStorei(N.UNPACK_ROW_LENGTH,Kn),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ue),x.pixelStorei(N.UNPACK_SKIP_PIXELS,wi),x.pixelStorei(N.UNPACK_SKIP_ROWS,ts),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Is),C===0&&F.generateMipmaps&&N.generateMipmap(te),x.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&nt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?nt.setTextureCube(b,0):b.isData3DTexture?nt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?nt.setTexture2DArray(b,0):nt.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){tt=0,J=0,ot=null,x.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}};var _p={type:"change"},Ih={type:"start"},bp={type:"end"},Bc=new Bs,vp=new gi,i1=Math.cos(70*rh.DEG2RAD),Cn=new P,ci=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ph=1e-6,Gc=class extends po{constructor(t,e=null){super(t,e),this.state=We.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new zn,this._lastTargetPosition=new P,this._quat=new zn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new la,this._sphericalDelta=new la,this._scale=1,this._panOffset=new P,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new P,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r1.bind(this),this._onPointerDown=s1.bind(this),this._onPointerUp=a1.bind(this),this._onContextMenu=f1.bind(this),this._onMouseWheel=c1.bind(this),this._onKeyDown=u1.bind(this),this._onTouchStart=h1.bind(this),this._onTouchMove=d1.bind(this),this._onMouseDown=o1.bind(this),this._onMouseMove=l1.bind(this),this._interceptControlDown=p1.bind(this),this._interceptControlUp=m1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=We.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_p),this.update(),this.state=We.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Cn.copy(e).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ci:i>Math.PI&&(i-=ci),s<-Math.PI?s+=ci:s>Math.PI&&(s-=ci),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),e.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Cn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Bc.origin.copy(this.object.position),Bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bc.direction))<i1?this.object.lookAt(this.target):(vp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bc.intersectPlane(vp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ph||this._lastTargetPosition.distanceToSquared(this.target)>Ph?(this.dispatchEvent(_p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ci/60*this.autoRotateSpeed*t:ci/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Cn.setFromMatrixColumn(e,0),Cn.multiplyScalar(-t),this._panOffset.add(Cn)}_panUp(t,e){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(e,1):(Cn.setFromMatrixColumn(e,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(t),this._panOffset.add(Cn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Cn.copy(s).sub(this.target);let r=Cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/e.clientHeight),this._rotateUp(ci*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/e.clientHeight),this._rotateUp(ci*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function s1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function r1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function a1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bp),this.state=We.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function o1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=We.DOLLY;break;case Xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}break;case Xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Ih)}function l1(n){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function c1(n){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(n.preventDefault(),this.dispatchEvent(Ih),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bp))}function u1(n){this.enabled!==!1&&this._handleKeyDown(n)}function h1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=We.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=We.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Ih)}function d1(n){switch(this._trackPointer(n),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=We.NONE}}function f1(n){this.enabled!==!1&&n.preventDefault()}function p1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vc=class extends ur{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ln;t.deleteAttribute("uv");let e=new Ie({side:On}),i=new Ie,s=new uo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Et(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Es(t,i,6),o=new on;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Et(t,xa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Et(t,xa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Et(t,xa(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Et(t,xa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Et(t,xa(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Et(t,xa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function xa(n){return new ro({color:0,emissive:16777215,emissiveIntensity:n})}var g1=42e5,Lh=[1,.8,.65,.5],Mp=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),y1=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Sp(n,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:i=null}={}){let s=window.devicePixelRatio||1,r;try{r=new Fc({canvas:n,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=pn,r.toneMapping=go,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=mr,r.shadowMap.autoUpdate=!1,r.setClearColor(new le(t),1);let a=new ur,o=new ga(r);a.environment=o.fromScene(new Vc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new Fn(32,1,4,1500);l.position.set(0,160,150),a.add(new oo(16777215,13616860,.35));let c=new ho(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new Et(new Ke(900,900),new so({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let d=new Gc(l,n);d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),d.dampingFactor=.14,d.rotateSpeed=.75,d.zoomSpeed=.9,d.panSpeed=.8,d.screenSpacePanning=!0,d.minDistance=9,d.maxDistance=1200,d.minPolarAngle=.06,d.maxPolarAngle=1.32,d.zoomToCursor=!0,d.cursor.set(0,6,-3),d.maxTargetRadius=85,d.target.set(0,4,0);function h(){let X=l.position.distanceTo(d.target),yt=Math.min(4,Math.max(.4,X*.04));Math.abs(yt-l.near)>yt*.08&&(l.near=yt,l.far=Math.max(900,X*6),l.updateProjectionMatrix())}let f=0,m=0,y=!1,g=!0,p=new Set,M=new Set,E=[],_=new Set,w=1,A=0,R=0,v=0,S=0,I=[],U=0,G=0,H=0;function L(){!f&&!m&&(f=requestAnimationFrame(J))}function W(){!f&&!m&&(m=setTimeout(()=>{m=0,L()},33))}function tt(X){Math.abs(X-R)<.01||(R=X,r.setPixelRatio(X),r.setSize(n.clientWidth||1,n.clientHeight||1,!1))}function J(X){f=0;let yt=d.update();for(let Z of _){let ft=Math.min(1,(X-(Z.bas??=X))/Z.sure);Z.adim(y1(ft)),Z.golge&&(g=!0),ft>=1?(_.delete(Z),Z.bitti?.()):yt=!0}for(let Z of p)Z(X)&&(yt=!0);let k=!1;for(let Z of M)Z(X,S?Math.min(100,X-S):33)&&(k=!0);S=k?X:0;let B=yt||k;clearTimeout(H),h(),tt(w*Lh[A]),g&&(r.shadowMap.needsUpdate=!0,g=!1),r.render(a,l),Kt(),yt?ot(X):(v=0,I=[]),yt?L():k&&W(),!B&&A>0&&(H=setTimeout(()=>{tt(w),r.render(a,l),Kt()},300))}function ot(X){v&&I.push(X-v),v=X;let yt=I.length,k=I.reduce((ft,lt)=>ft+lt,0),B=yt>=6&&yt<24&&k>=450&&[...I].sort((ft,lt)=>ft-lt)[yt>>1]>50;if(yt<24&&!B)return;let Z=k/yt;I=[],!(X-G<(B?300:500))&&(Z>26&&A<Lh.length-1?(A++,U=0,G=X,e("kalite",A)):Z<19&&A>0&&++U>=3&&(A--,U=0,G=X))}function O(){let X=n.clientWidth||1,yt=n.clientHeight||1;w=Math.max(.5,Math.min(s,2,Math.sqrt(g1/(X*yt)))),R=0,tt(w*Lh[A]),l.aspect=X/yt,Xt();for(let k of E)k.w=0;re=0,T=null,!y&&Lt&&vt(Lt,!0),L()}let j=0,st=0;new ResizeObserver(()=>{clearTimeout(j);let X=performance.now();if(document.documentElement.dataset.suruklenen&&X-st>125){st=X,O();return}j=setTimeout(()=>{st=performance.now(),O()},110)}).observe(n),window.addEventListener("bote-erisim",()=>{d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let X of E)X.w=0;L()});let xt=0;function Xt(){let X=n.clientWidth||1,yt=n.clientHeight||1;xt>0?l.setViewOffset(X,yt,0,Math.min(xt,yt*.9)/2,X,yt):l.clearViewOffset(),l.updateProjectionMatrix()}function ne(X,yt=!1){xt=Math.max(0,X||0),T=null,Xt(),!y&&Lt?vt(Lt,yt):L()}d.addEventListener("change",L),d.addEventListener("start",()=>{y=!0,e("kamera-elle")});let Lt=null,et=new P(0,1,0),rt=new P,Tt=new P,Jt=new P,Dt=new P,kt=new P,jt=X=>X.isBox3?X:new Wn(new P(X[0],X[1],X[2]),new P(X[3],X[4],X[5]));function ht(X,yt){let k=i?.()||{},B=Math.min(xt,yt*.9),Z=k.sol??16,ft=X-(k.sag??16),lt=k.ust??16,$t=yt-Math.max(k.alt??16,B+12);if(ft-Z<80){let qt=X/2;Z=qt-40,ft=qt+40}if($t-lt<80){let qt=(Math.max(0,lt)+Math.max(lt+80,$t))/2;lt=qt-40,$t=qt+40}return{x0:Z,y0:lt,x1:ft,y1:$t,engel:k.engel||[]}}function gt(X,yt){let k=n.clientWidth||1,B=n.clientHeight||1,Z=jt(X),ft=new P(...yt).normalize();rt.crossVectors(et,ft).normalize(),Tt.crossVectors(ft,rt),Jt.copy(ft).negate();let lt=T=ht(k,B),$t=Math.tan(l.fov*Math.PI/360),qt=$t*(k/B),oe=Math.min(xt,B*.9)/B,xe=(lt.x0/k*2-1)*qt,_e=(lt.x1/k*2-1)*qt,Ee=(1-lt.y0/B*2-oe)*$t,dn=(1-lt.y1/B*2-oe)*$t;Z.getCenter(Dt);let Ye=[],Nn=[],gn=[];for(let yn=0;yn<8;yn++)kt.set(yn&1?Z.max.x:Z.min.x,yn&2?Z.max.y:Z.min.y,yn&4?Z.max.z:Z.min.z).sub(Dt),Ye.push(kt.dot(rt)),Nn.push(kt.dot(Tt)),gn.push(kt.dot(Jt));let Un=0;for(let yn=0;yn<8;yn++){Un=Math.max(Un,2-gn[yn]);for(let ri=0;ri<8;ri++)Un=Math.max(Un,(Ye[yn]-Ye[ri]-_e*gn[yn]+xe*gn[ri])/(_e-xe),(Nn[yn]-Nn[ri]-Ee*gn[yn]+dn*gn[ri])/(Ee-dn))}Un=Math.min(d.maxDistance,Math.max(d.minDistance,Un));let gs=(yn,ri,b)=>{let F=-1/0,Q=1/0;for(let Y=0;Y<8;Y++)F=Math.max(F,yn[Y]-b*(gn[Y]+Un)),Q=Math.min(Q,yn[Y]-ri*(gn[Y]+Un));if(!(Q>F))return(F+Q)/2;let K=Y=>{let C=-1/0,z=1/0;for(let at=0;at<8;at++){let _t=(yn[at]-Y)/(gn[at]+Un);_t>C&&(C=_t),_t<z&&(z=_t)}return b-C-(z-ri)};for(let Y=0;Y<32;Y++){let C=(F+Q)/2;K(C)>0?Q=C:F=C}return(F+Q)/2},ys=gs(Ye,xe,_e),Ps=gs(Nn,dn,Ee),ir=Dt.clone().addScaledVector(rt,ys).addScaledVector(Tt,Ps);return{merkez:ir,konum:ir.clone().addScaledVector(ft,Un)}}function vt(X,yt=!1){Lt=X,y=!1;let{merkez:k,konum:B}=gt(X.kutu,X.yon);if(yt||Mp())return l.position.copy(B),d.target.copy(k),d.update(),L(),Promise.resolve();let Z=l.position.clone(),ft=d.target.clone();return d.enabled=!1,Ct(650,lt=>{l.position.lerpVectors(Z,B,lt),d.target.lerpVectors(ft,k,lt),l.lookAt(d.target)}).then(()=>{d.enabled=!0,d.update()})}function Mt(){if(!Lt)return null;l.updateMatrixWorld();let X=n.clientWidth||1,yt=n.clientHeight||1,k=jt(Lt.kutu),B=1/0,Z=-1/0,ft=1/0,lt=-1/0;for(let $t=0;$t<8;$t++){kt.set($t&1?k.max.x:k.min.x,$t&2?k.max.y:k.min.y,$t&4?k.max.z:k.min.z).project(l);let qt=(kt.x+1)/2*X,oe=(1-kt.y)/2*yt;B=Math.min(B,qt),Z=Math.max(Z,qt),ft=Math.min(ft,oe),lt=Math.max(lt,oe)}return{kutu:{x0:B,y0:ft,x1:Z,y1:lt},guvenli:ht(X,yt),w:X,h:yt}}function Ct(X,yt,k=!1){return Mp()?(yt(1),k&&(g=!0),L(),Promise.resolve()):new Promise(B=>{_.add({sure:X,adim:yt,bitti:B,golge:k}),L()})}let Qt=n.parentElement.querySelector(".etiketler"),Vt=n.parentElement.querySelector(".isaretler")||Qt,Yt="http://www.w3.org/2000/svg",ie=document.createElementNS(Yt,"svg");ie.setAttribute("class","cizgiler"),ie.setAttribute("aria-hidden","true"),Qt.appendChild(ie);let N=[],Se=[],re=0,T=null,x=new P,V=new P,q=new P,nt=X=>{for(let yt=X;yt;yt=yt.parent)if(!yt.visible)return!1;return!0};function At(X){for(let yt of E)yt.el.remove(),yt.cizgi.remove(),yt.nokt.remove();E.length=0;for(let{nokta:yt,metin:k,tur:B}of X){let Z=document.createElement("div");Z.className="etiket"+(B?` etiket-${B}`:""),Z.textContent=k,Qt.appendChild(Z);let ft=document.createElementNS(Yt,"line"),lt=document.createElementNS(Yt,"circle");lt.setAttribute("r","4.5"),ie.append(ft,lt),E.push({el:Z,nokta:yt,cizgi:ft,nokt:lt,w:0,h:0})}L()}function Ut(X){for(let yt of N)yt.el.remove();N.length=0;for(let yt of X)yt.el.hidden=!0,Vt.appendChild(yt.el),N.push({...yt,acik:!1});Se=N.map((yt,k)=>[yt,k]).sort((yt,k)=>(k[0].oncelik??1)-(yt[0].oncelik??1)||yt[1]-k[1]).map(([yt])=>yt),re=0,T=null,L()}function ct(X,yt){for(let k=N.length-1;k>=0;k--){let B=N[k].el;if(B.hidden)continue;let Z=B.getBoundingClientRect(),ft=Z.width/2;if(ft&&Math.hypot(X-Z.left-ft,yt-Z.top-Z.height/2)<=ft+2)return B}return null}function mt(X,yt){if(!N.length)return;re||(re=parseFloat(getComputedStyle(Vt).getPropertyValue("--isaret"))||44);let k=T||(T=ht(X,yt)),B=re+4,Z=[],ft=document.activeElement,lt=Math.tan(l.fov*Math.PI/360),$t=N.some(qt=>qt.el===ft)?[...Se].sort((qt,oe)=>(oe.el===ft)-(qt.el===ft)):Se;for(let qt of $t){let oe=!1,xe=0,_e=0;(!qt.nesne||nt(qt.nesne))&&(qt.nesne?V.copy(qt.yerel).applyMatrix4(qt.nesne.matrixWorld):V.copy(qt.nokta),q.copy(V).applyMatrix4(l.matrixWorldInverse),q.z<-l.near&&(x.copy(V).project(l),xe=(x.x+1)/2*X,_e=(1-x.y)/2*yt,oe=xe>=k.x0&&xe<=k.x1&&_e>=k.y0&&_e<=k.y1&&!k.engel.some(Ee=>xe>Ee.x0-B/2&&xe<Ee.x1+B/2&&_e>Ee.y0-B/2&&_e<Ee.y1+B/2),oe&&qt.adim&&(oe=qt.adim*yt/(2*-q.z*lt)>=re),oe&&qt.el!==ft&&(oe=!Z.some(Ee=>Math.abs(Ee.x-xe)<B&&Math.abs(Ee.y-_e)<B)))),oe&&(Z.push({x:xe,y:_e}),qt.el.style.transform=`translate3d(${Math.round(xe)}px,${Math.round(_e)}px,0)`),qt.acik!==oe&&(qt.acik=oe,qt.el.hidden=!oe)}}let Ot=(X,yt,k)=>(x.copy(X).project(l),{x:(x.x+1)/2*yt,y:(1-x.y)/2*k,gor:x.z<1&&Math.abs(x.x)<1.05&&Math.abs(x.y)<1.05});function Kt(){let X=n.clientWidth,yt=n.clientHeight;if(mt(X,yt),!E.length)return;ie.setAttribute("width",X),ie.setAttribute("height",yt);let k=[],B=8,Z=30,ft=E.map(lt=>({e:lt,p:Ot(lt.nokta,X,yt)})).sort((lt,$t)=>$t.p.y-lt.p.y);for(let{e:lt,p:$t}of ft){lt.w||(lt.w=lt.el.offsetWidth,lt.h=lt.el.offsetHeight);let qt=Math.min(Math.max($t.x-lt.w/2,6),X-lt.w-6),oe=$t.y-Z-lt.h,xe=!1;for(let Ee=0;Ee<6;Ee++){let dn=k.find(Ye=>qt<Ye.x+Ye.w+B&&qt+lt.w+B>Ye.x&&oe<Ye.y+Ye.h+B&&oe+lt.h+B>Ye.y);if(!dn)break;if(oe=dn.y-lt.h-B,oe<4){oe=$t.y+Z,xe=!0,qt=Math.min(Math.max(dn.x+dn.w+B,6),X-lt.w-6);break}}k.push({x:qt,y:oe,w:lt.w,h:lt.h});let _e=$t.gor?"1":"0";lt.el.style.opacity=_e,lt.cizgi.style.opacity=_e,lt.nokt.style.opacity=_e,lt.el.style.transform=`translate3d(${Math.round(qt)}px,${Math.round(oe)}px,0)`,lt.cizgi.setAttribute("x1",$t.x.toFixed(1)),lt.cizgi.setAttribute("y1",$t.y.toFixed(1)),lt.cizgi.setAttribute("x2",(qt+lt.w/2).toFixed(1)),lt.cizgi.setAttribute("y2",(xe?oe:oe+lt.h).toFixed(1)),lt.nokt.setAttribute("cx",$t.x.toFixed(1)),lt.nokt.setAttribute("cy",$t.y.toFixed(1))}}let Bt=new fo,Ft=new Rt,it=[],St=new Set,Pt=new P,D=new P,ut=new P,$=X=>!X.isMesh||X.isInstancedMesh||X===u||!nt(X)?!1:(Array.isArray(X.material)?X.material:[X.material]).some(k=>k&&k.visible!==!1&&k.blending!==mo&&!(k.transparent&&k.opacity<.2));function bt(X,yt,k=1){Ft.set(X,yt),Bt.setFromCamera(Ft,l);let B=Bt.intersectObjects(a.children,!0).find(_e=>$(_e.object)),Z=B?B.point:null,ft=B?B.distance:1/0,lt=n.clientHeight||1,$t=Math.tan(l.fov*Math.PI/360),qt=null,oe=1/0,xe=1/0;for(let _e of it){let Ee=_e.userData;if(Ee.etkin===!1||!nt(_e))continue;let dn=!1;if(Z&&Ee.yari){Pt.copy(Z),_e.worldToLocal(Pt),D.setFromMatrixScale(_e.matrixWorld);let[gn,Un,gs]=Ee.yari,ys=.25;dn=Math.abs(Pt.x)<=gn+ys/D.x&&Math.abs(Pt.y)<=Un+ys/D.y&&Math.abs(Pt.z)<=gs+ys/D.z}if(!dn&&Ee.ince&&_e.isMesh){let gn=Bt.intersectObject(_e,!1)[0];dn=!!gn&&gn.distance<=ft+.5}if(!dn||(ut.setFromMatrixPosition(_e.matrixWorld),Ee.minPx&&Ee.minAdim&&(q.copy(ut).applyMatrix4(l.matrixWorldInverse),Ee.minAdim*lt/(2*Math.max(.01,-q.z)*$t)<Ee.minPx*k)))continue;let Ye=Ee.hacim??1/0,Nn=Z?ut.distanceToSquared(Z):0;(Ye<oe*.99||Ye<=oe*1.01&&Nn<xe)&&(qt=_e,oe=Ye,xe=Nn)}return{vekil:qt,nokta:Z?Z.clone():qt?new P().setFromMatrixPosition(qt.matrixWorld):null}}let It=new Set,dt=null,Gt=!1;n.addEventListener("pointerdown",X=>{if(It.add(X.pointerId),It.size>1){Gt=!0,dt=null;return}dt=Gt?null:{x:X.clientX,y:X.clientY,t:performance.now(),id:X.pointerId}}),n.addEventListener("pointerup",X=>{let yt=dt;if(It.delete(X.pointerId),It.size||(Gt=!1),!yt||yt.id!==X.pointerId||(dt=null,Math.hypot(X.clientX-yt.x,X.clientY-yt.y)>9||performance.now()-yt.t>600))return;let k=N.length?ct(X.clientX,X.clientY):null;if(k){k.click();return}let B=n.getBoundingClientRect(),Z=X.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,ft=bt((X.clientX-B.left)/B.width*2-1,-((X.clientY-B.top)/B.height)*2+1,Z);for(let lt of St)lt(ft.vekil?ft.vekil.userData:null,ft.nokta,ft.vekil)}),n.addEventListener("pointercancel",X=>{It.delete(X.pointerId),It.size||(Gt=!1),dt=null});let Nt=null,ye=X=>{X!==Nt&&(Nt?.classList.remove("ustunde"),X?.classList.add("ustunde"),Nt=X,n.style.cursor=X?"pointer":"")};return n.addEventListener("pointermove",X=>{X.pointerType==="mouse"&&!X.buttons&&ye(N.length?ct(X.clientX,X.clientY):null)}),n.addEventListener("pointerleave",()=>ye(null)),n.addEventListener("contextmenu",X=>X.preventDefault()),n.addEventListener("webglcontextlost",X=>{X.preventDefault(),e("baglam-kaybi")}),n.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),g=!0,L()}),O(),{renderer:r,scene:a,camera:l,controls:d,hedefler:it,iste:L,kameraGit:vt,tween:Ct,etiketKoy:At,isaretKoy:Ut,gorunurAlan:ne,golgeYenile:()=>{g=!0,L()},kareGuncelleyici:X=>(p.add(X),L(),()=>p.delete(X)),yavasGuncelleyici:X=>(M.add(X),L(),()=>M.delete(X)),dokunmaDinle:X=>St.add(X),sec:bt,kadrajOlc:Mt,guvenliYenile:()=>{T=null,re=0,L()},yakinlas:X=>{let yt=l.position.clone().sub(d.target),k=Math.min(d.maxDistance,Math.max(d.minDistance,yt.length()*X)),B=l.position.clone(),Z=d.target.clone().addScaledVector(yt.normalize(),k);return y=!0,Ct(260,ft=>l.position.lerpVectors(B,Z,ft))},arkaPlan:X=>{r.setClearColor(new le(X),1),L()},sonHedef:()=>Lt,kalite:()=>({kademe:A,piksel:Math.round(R*100)/100,tam:Math.round(w*100)/100})}}function wp(n,t){let{DERSLER:e,KAMERA:i}=n,s=t.veri,r=t.pencere,a=t.temaRengi,o=[["DERSLER","object"],["KAMERA","object"],["KESIF","object"],["KATEGORI","object"],["kategoriBul","function"],["sahneyiKur","function"]].filter(([k,B])=>!n[k]||typeof n[k]!==B).map(([k])=>k);e&&!e[s.slug]&&o.push(`DERSLER['${s.slug}']`),i&&!i.genel&&o.push("KAMERA.genel"),o.length&&console.error(`dersMotoru(${n.id||"?"}): aile tan\u0131m\u0131nda eksik zorunlu alan: ${o.join(", ")}. Sahne a\xE7\u0131lmad\u0131.`);let l=e?.[s.slug]||{adimlar:{}},c=n.KESIF||{},u=n.KATEGORI||{},d=typeof n.kategoriBul=="function"?n.kategoriBul:()=>null,h=new URLSearchParams(location.search).has("olcum"),f=_n(".adim"),m=new Map(_n("[data-eylem][aria-pressed]").map(k=>[k,k.getAttribute("aria-pressed")])),y=0,g=null,p=null,M=[],E=null,_=null;t.sinifDegisince=()=>{E&&_?.()};let w=()=>l.adimlar[f[y].dataset.id]||{};function A(k,B=!1){y=Math.max(0,Math.min(f.length-1,k)),f.forEach(($t,qt)=>$t.classList.toggle("etkin",qt===y));let Z=f[y];Ht("#adim-sayac").textContent=`${y+1} / ${f.length}`,Ht("#ilerleme").style.width=`${(y+1)/f.length*100}%`,Ht("#geri").disabled=y===0,Ht("#ileri").disabled=y===f.length-1;let ft=Ht("h2",Z).textContent;for(let[$t,qt]of[["#mini-sayac",`${y+1}/${f.length}`],["#mini-baslik",ft],["#kisa-baslik",ft]]){let oe=Ht($t);oe&&(oe.textContent=qt)}for(let[$t,qt]of[["#mini-geri",y===0],["#mini-ileri",y===f.length-1]]){let oe=Ht($t);oe&&(oe.disabled=qt)}let lt=new URL(location.href);lt.hash=Z.id,history.replaceState(null,"",lt),Ht(".kart-govde")?.scrollTo(0,0),B||Ai(`Ad\u0131m ${y+1}: ${Ht("h2",Z).textContent}`),X(),g&&Ft(Z.dataset.id)}Ht("#geri").addEventListener("click",()=>A(y-1)),Ht("#ileri").addEventListener("click",()=>A(y+1)),document.addEventListener("keydown",k=>{k.target.closest("input, textarea, select")||r?.open||k.altKey||k.ctrlKey||k.metaKey||(["ArrowRight","PageDown"].includes(k.key)&&(k.preventDefault(),A(y+1)),["ArrowLeft","PageUp"].includes(k.key)&&(k.preventDefault(),A(y-1)))});let R=null,v=(k,B)=>{for(;k&&k!==B;k=k.parentElement)if(k.scrollWidth>k.clientWidth+1&&/auto|scroll/.test(getComputedStyle(k).overflowX))return!0;return!1};Ht(".kart-alani").addEventListener("touchstart",k=>{let B=k.touches[0];R=k.touches.length===1&&!k.target.closest?.("input, select, textarea, .ayarlar, .erisim-panel")&&!v(k.target,k.currentTarget)?{x:B.clientX,y:B.clientY}:null},{passive:!0}),Ht(".kart-alani").addEventListener("touchend",k=>{if(!R)return;let B=k.changedTouches[0],Z=B.clientX-R.x,ft=B.clientY-R.y;R=null,Math.abs(Z)>70&&Math.abs(ft)<40&&A(y+(Z<0?1:-1))},{passive:!0});let S=Ht(".ders"),I=Ht(".kart-alani"),U=Ht(".panel-kenar"),G=Ht("#panel-dugme");dd(I),fd(Ht(".sahne-arac"));let H=window.matchMedia("(orientation: portrait), (max-width: 820px)");function L(k,B=!0){ue.dataset.panel=k?"acik":"kapali",G?.setAttribute("aria-expanded",String(k)),G?.setAttribute("aria-label",k?"Anlat\u0131m panelini kapat":"Anlat\u0131m panelini a\xE7"),I.inert=!k&&!H.matches,B&&(ai("bote-3d-panel",k?"acik":"kapali"),Ai(k?"Anlat\u0131m paneli a\xE7\u0131ld\u0131":"Anlat\u0131m paneli kapand\u0131; ad\u0131mlar alttaki \xE7ubuktan ge\xE7ilir"))}L(fi("bote-3d-panel")!=="kapali",!1),G?.addEventListener("click",()=>L(ue.dataset.panel!=="acik")),Ht("#mini-ac")?.addEventListener("click",()=>L(!0)),Ht("#mini-geri")?.addEventListener("click",()=>A(y-1)),Ht("#mini-ileri")?.addEventListener("click",()=>A(y+1));let W=k=>{k?S.style.setProperty("--panel-w",`${Math.round(k)}px`):S.style.removeProperty("--panel-w")},tt=k=>Math.max(300,Math.min(S.clientWidth*.62,k));W(Number(fi("bote-3d-panel-w"))||0);let J=()=>ai("bote-3d-panel-w",String(parseInt(S.style.getPropertyValue("--panel-w"),10)||"")),ot=null,O=110;U?.addEventListener("pointerdown",k=>{k.target.closest("#panel-dugme")||ue.dataset.panel!=="acik"||H.matches||(U.setPointerCapture(k.pointerId),ot={x:k.clientX,w:I.getBoundingClientRect().width,once:S.style.getPropertyValue("--panel-w")},ue.dataset.suruklenen="1")}),U?.addEventListener("pointermove",k=>{if(!ot)return;let B=k.clientX-ot.x,Z=ot.w+(ue.dataset.panelYan==="sol"?B:-B);Z<tt(0)-O?ue.dataset.kapanacak="1":delete ue.dataset.kapanacak,W(tt(Z))});let j=k=>{if(!ot)return;let B=ot;if(ot=null,delete ue.dataset.suruklenen,ue.dataset.kapanacak&&(delete ue.dataset.kapanacak,B.once?S.style.setProperty("--panel-w",B.once):S.style.removeProperty("--panel-w"),k?.type==="pointerup")){L(!1);return}J()};U?.addEventListener("pointerup",j),U?.addEventListener("pointercancel",j),U?.addEventListener("dblclick",k=>{k.target.closest("#panel-dugme")||(W(0),ai("bote-3d-panel-w",""))}),U?.addEventListener("keydown",k=>{if(k.target!==U||!["ArrowLeft","ArrowRight"].includes(k.key))return;k.preventDefault(),k.stopPropagation();let B=k.key==="ArrowLeft"==(ue.dataset.panelYan!=="sol");W(tt(I.getBoundingClientRect().width+(B?40:-40))),J()});function st(k,B){ue.dataset.panelYan=k;for(let Z of _n("[data-yan]"))Z.setAttribute("aria-pressed",String(Z.dataset.yan===k));B&&ai("bote-3d-panel-yan",k)}st(fi("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);let zt=Ht("#ayarlar"),xt=Ht("#ayar-dugme"),Xt=Ht("#ayar-perde");function ne(k,B=!1){zt&&(zt.hidden=!k,Xt&&(Xt.hidden=!k),xt.setAttribute("aria-expanded",String(k)),k?(ht(),[...zt.querySelectorAll("input, button")].find(Z=>Z.id!=="ayar-kapat"&&Z.offsetParent!==null)?.focus()):B&&xt.focus())}xt?.addEventListener("click",k=>{k.stopPropagation(),ne(zt.hidden)}),Ht("#ayar-kapat")?.addEventListener("click",()=>ne(!1,!0)),document.addEventListener("click",k=>{zt&&!zt.hidden&&!k.target.closest("#ayarlar, #ayar-dugme")&&ne(!1)}),document.addEventListener("keydown",k=>{k.key==="Escape"&&zt&&!zt.hidden&&ne(!1,!0)});let Lt=Ht("#panel-genislik"),et=Ht("#genislik-deger"),rt={dar:"Dar",orta:"Orta",genis:"Geni\u015F"},Tt={dar:0,orta:50,genis:100};function Jt(){let k=window.innerWidth,B=(Z,ft,lt)=>tt(Math.max(Z,Math.min(ft*k,lt)));return ue.dataset.mod==="tahta"?{dar:B(380,.29,1100),orta:B(440,.37,1500),genis:B(560,.5,1900)}:{dar:B(290,.26,440),orta:B(330,.34,560),genis:B(420,.46,900)}}function Dt(k){let B=Jt();return k<=50?B.dar+(B.orta-B.dar)*k/50:B.orta+(B.genis-B.orta)*(k-50)/50}function kt(k){let B=Jt();return k<=B.orta?B.orta>B.dar?Math.max(0,(k-B.dar)/(B.orta-B.dar)*50):0:B.genis>B.orta?Math.min(100,50+(k-B.orta)/(B.genis-B.orta)*50):100}function jt(){if(!Lt)return;let k=Number(Lt.value),B=Dt(k),Z=Object.keys(Tt).find(lt=>Math.abs(Tt[lt]-k)<=3)||"",ft=Math.round(B/Math.max(1,S.clientWidth)*100);et&&(et.textContent=Z?`${rt[Z]} \xB7 %${ft}`:`%${ft}`),Lt.setAttribute("aria-valuetext",`${Z?`${rt[Z]}, `:""}ekran\u0131n y\xFCzde ${ft} kadar\u0131`),Lt.style.setProperty("--dolu",`${k}%`);for(let lt of _n("[data-panel-boyut]:not(html)"))lt.setAttribute("aria-pressed",String(lt.dataset.panelBoyut===Z))}function ht(){Lt&&(Lt.value=String(Math.round(kt(I.getBoundingClientRect().width||Jt().orta))),jt())}let gt=()=>{ue.dataset.suruklenen&&!ot&&!x&&delete ue.dataset.suruklenen};Lt?.addEventListener("pointerdown",()=>{ue.dataset.suruklenen="1"}),Lt?.addEventListener("pointerup",gt),Lt?.addEventListener("input",()=>{ue.dataset.suruklenen="1",W(Dt(Number(Lt.value))),jt()}),Lt?.addEventListener("change",()=>{gt(),J()});function vt(k,B){ue.dataset.panelBoyut=k,B&&(W(0),ai("bote-3d-panel-w",""),ai("bote-3d-panel-boyut",k)),Lt&&(Lt.value=String(Tt[k]),jt())}vt(["dar","orta","genis"].includes(fi("bote-3d-panel-boyut"))?fi("bote-3d-panel-boyut"):"orta",!1);let Mt=[.9,1,1.15,1.3,1.5],Ct=Math.max(0,Mt.indexOf(Number(fi("bote-3d-yazi"))||1));function Qt(k,B){Ct=Math.max(0,Math.min(Mt.length-1,k)),ue.style.setProperty("--yazi",String(Mt[Ct]));let Z=Ht("#yazi-deger");Z&&(Z.textContent=`%${Math.round(Mt[Ct]*100)}`),B&&ai("bote-3d-yazi",String(Mt[Ct]))}Qt(Ct,!1),document.addEventListener("click",k=>{let B=k.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");B&&(B.dataset.panelBoyut&&vt(B.dataset.panelBoyut,!0),B.dataset.yazi&&Qt(Ct+Number(B.dataset.yazi),!0),B.dataset.yan&&st(B.dataset.yan,!0))});let Vt=Ht("#tahmin-ayar");Vt&&(Vt.checked=fi("bote-3d-tahmin")!=="hayir",Vt.addEventListener("change",()=>ai("bote-3d-tahmin",Vt.checked?"evet":"hayir")));let Yt={kisa:()=>{let k=Ht(".tutamac"),B=Ht(".kart-ust"),Z=Ht(".kart-alt"),ft=!!(Z&&B&&Z.offsetTop<B.offsetTop+B.offsetHeight);return(k?.offsetHeight||0)+Math.max(B?.offsetHeight||0,ft?Z.offsetHeight:0)+(ft?0:Z?.offsetHeight||0)+2},yarim:()=>S.clientHeight*.5,tam:()=>S.clientHeight*.92},ie=88,N=()=>Yt.yarim()-Yt.kisa()+2>=ie,Se=k=>k==="yarim"&&!N()?"kisa":k,re=["kisa","yarim","tam"].includes(fi("bote-3d-sayfa"))?fi("bote-3d-sayfa"):"yarim";function T(k,B=!0,Z=!1){if(!H.matches){delete ue.dataset.sayfa,S.style.removeProperty("--sayfa-h"),g?.gorunurAlan(0,!0),L(ue.dataset.panel!=="kapali",!1);return}re=k;let ft=Se(k);ue.dataset.sayfa=ft,I.inert=!1;let lt=Math.round(Yt[ft]());Z&&(ue.dataset.suruklenen="1"),S.style.setProperty("--sayfa-h",`${lt}px`),Z&&requestAnimationFrame(()=>delete ue.dataset.suruklenen),g?.gorunurAlan(lt,Z),B&&ai("bote-3d-sayfa",k)}let x=null;for(let k of[Ht(".tutamac"),Ht(".kart-ust")].filter(Boolean)){k.addEventListener("pointerdown",Z=>{if(!H.matches||Z.target.closest("button"))return;k.setPointerCapture(Z.pointerId);let ft=performance.now();x={y:Z.clientY,h:I.getBoundingClientRect().height,sonY:Z.clientY,sonT:ft,hiz:0},ue.dataset.suruklenen="1"}),k.addEventListener("pointermove",Z=>{if(!x)return;let ft=performance.now(),lt=Math.max(Yt.kisa(),Math.min(Yt.tam(),x.h+(x.y-Z.clientY)));S.style.setProperty("--sayfa-h",`${Math.round(lt)}px`),x.hiz=(x.sonY-Z.clientY)/Math.max(1,ft-x.sonT),x.sonY=Z.clientY,x.sonT=ft});let B=Z=>{if(!x)return;let ft=x;x=null,delete ue.dataset.suruklenen;let lt=I.getBoundingClientRect().height,$t=Math.abs(Z.clientY-ft.y)>6,qt=N(),oe=qt?"yarim":"tam",xe;$t?ft.hiz>.45?xe=lt<Yt.yarim()?oe:"tam":ft.hiz<-.45?xe=qt&&lt>Yt.yarim()?"yarim":"kisa":xe=(qt?["kisa","yarim","tam"]:["kisa","tam"]).sort((_e,Ee)=>Math.abs(Yt[_e]()-lt)-Math.abs(Yt[Ee]()-lt))[0]:xe=ue.dataset.sayfa==="kisa"?oe:"kisa",T(xe),Ai({kisa:"Kartlar k\xFC\xE7\xFCld\xFC",yarim:"Kartlar yar\u0131m ekran",tam:"Kartlar tam ekran"}[xe])};k.addEventListener("pointerup",B),k.addEventListener("pointercancel",B)}let V=()=>T(re,!1,!0);H.addEventListener?.("change",V);let q=0;window.addEventListener("resize",()=>{clearTimeout(q),q=setTimeout(()=>{H.matches&&T(re,!1,!0)},120)}),T(re,!1,!0),window.addEventListener("hashchange",()=>{let k=f.findIndex(B=>`#${B.id}`===location.hash);k>=0&&k!==y&&A(k)});let nt=f.findIndex(k=>`#${k.id}`===location.hash);A(nt>0?nt:0,!0),document.addEventListener("click",k=>{let B=k.target.closest("[data-eylem]");if(!B||!g||!p)return;let Z=p.eylem?.(B.dataset.eylem,B);typeof Z=="boolean"&&B.hasAttribute("aria-pressed")&&B.setAttribute("aria-pressed",String(Z)),g.iste()}),_n(".gorunum button").forEach(k=>k.addEventListener("click",()=>Bt(k.dataset.gorunum))),Ht("#yakinlas")?.addEventListener("click",()=>g?.yakinlas(.8)),Ht("#uzaklas")?.addEventListener("click",()=>g?.yakinlas(1.25)),window.addEventListener("pagehide",k=>{k.persisted||p?.durdur?.()});let At=Ht(".sahne-alani");requestAnimationFrame(()=>setTimeout(Ut,20));function Ut(){if(o.length){ue.dataset.webgl="yok";return}if(g=Sp(Ht("#sahne"),{arkaPlan:a(),olay:Ot,guvenliAlan:mt}),!g){ue.dataset.webgl="yok";return}t.S=g;try{if(p=n.sahneyiKur(g,{olay:ct,ders:l,veri:s}),typeof p?.adimUygula!="function")throw new Error("adapt\xF6r adimUygula vermedi")}catch(k){console.error(`dersMotoru(${n.id||"?"}): sahne kurulamad\u0131, yedek aray\xFCz a\xE7\u0131ld\u0131.`,k),g.scene.clear(),Ht("#sahne").style.visibility="hidden",g=t.S=p=null,ue.dataset.webgl="yok";return}g.dokunmaDinle(It),H.matches&&g.gorunurAlan(Math.round(Yt[Se(re)]()),!0),Ft(f[y].dataset.id,!0),requestAnimationFrame(()=>At.classList.add("hazir")),h&&(yt(),window.__3d={S:g,adaptor:p,adimaGit:A,kameraBul:Kt,gorunumSec:Bt,adim:()=>f[y].dataset.id,...p.olcumEk})}function ct(k,B){k==="duyur"&&Ai(B)}function mt(){let k=Ht("#sahne").getBoundingClientRect(),B=ue.dataset.mod==="tahta"?24:14,Z=B,ft=B,lt=_n(".ipucu",At).find(xe=>xe.offsetParent!==null);lt&&(Z=Math.max(Z,lt.getBoundingClientRect().bottom-k.top+8));let $t=Ht(".sahne-arac",At);$t&&getComputedStyle($t).opacity!=="0"&&(ft=Math.max(ft,k.bottom-$t.getBoundingClientRect().top+8));let qt=[],oe=Ht("#lejant");if(oe&&oe.offsetParent!==null){let xe=oe.getBoundingClientRect();qt.push({x0:xe.left-k.left,y0:xe.top-k.top,x1:xe.right-k.left,y1:xe.bottom-k.top})}return{ust:Z,alt:ft,sol:B,sag:B,engel:qt}}function Ot(k){k==="baglam-kaybi"&&At.classList.add("baglam-kaybi"),k==="baglam-geri"&&At.classList.remove("baglam-kaybi")}Ht("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function Kt(k,B={}){let Z=p?.kameraBul?.(k,B);if(Z)return Z;let ft=i[k];if(ft)return{kutu:new Wn(new P(ft.kutu[0],ft.kutu[1],ft.kutu[2]),new P(ft.kutu[3],ft.kutu[4],ft.kutu[5])),yon:ft.yon};let lt=p?.kutuBul?.(k);return lt&&i.genel?{kutu:lt,yon:i.genel.yon}:k==="genel"?null:Kt("genel",B)}function Bt(k){let B=g&&Kt(w().kamera||"genel",w()),Z=n.GORUNUM?.[k];B&&g.kameraGit(Z?{...B,yon:Z}:B);for(let ft of _n(".gorunum button"))ft.setAttribute("aria-pressed",String(ft.dataset.gorunum===k))}function Ft(k,B=!1){let Z=l.adimlar[k]||{};for(let lt of _n("[data-eylem][aria-pressed]"))lt.setAttribute("aria-pressed",m.get(lt)||"false");for(let lt of _n(".gorunum button"))lt.setAttribute("aria-pressed",String(lt.dataset.gorunum==="egik"));p.adimUygula(k,Z,B);for(let lt of M)g.scene.remove(lt),lt.traverse($t=>$t.geometry?.dispose());M=n.vurguYap?(Z.vurgu||[]).map(lt=>p.alanlar?.[lt]?n.vurguYap(g.scene,p.alanlar[lt]):null).filter(Boolean):[],At.dataset.ipucu=p.ipucu?p.ipucu(Z):Z.dokun?"dokun":"";let ft=Kt(Z.kamera||"genel",Z);ft&&g.kameraGit(ft,B),ue.dataset.kesif==="acik"&&$(),g.iste(),h&&it(k,Z)}function it(k,B){!B.etiket?.length||!p.noktaBul||setTimeout(()=>{if(!p||f[y].dataset.id!==k)return;let Z=B.etiket.map(ft=>ft[0]).filter(ft=>{try{return!p.noktaBul(ft)}catch{return!0}});Z.length&&console.warn(`[olcum] ${n.id}/${s.slug} ad\u0131m "${k}": noktaBul bo\u015F d\xF6nd\xFC, etiket \xE7izilmedi: ${Z.join(", ")}`)},2500)}let St=Ht("#kesif-sablon"),Pt=Ht("#lejant");Pt&&window.matchMedia("(min-width: 700px) and (min-height: 600px)").matches&&(Pt.open=!0),Pt?.addEventListener("toggle",()=>g?.guvenliYenile());let D=(k,B)=>{let Z=St?.content.querySelector(`[data-kat="${B}"] svg`);k&&Z&&k.replaceChildren(Z.cloneNode(!0))};function ut(k,B,Z,ft){let lt=d(k);if(!lt)return null;let $t=document.createElement("button");$t.type="button",$t.className=ft?"kesif-isaret pin-isaret":"kesif-isaret",$t.dataset.kat=lt,$t.dataset.id=k;let qt=document.createElement("span");qt.className="ki-daire",D(qt,lt);let oe=document.createElement("span");return oe.className="ki-no",oe.textContent=ft||String(B),oe.setAttribute("aria-hidden","true"),$t.append(qt,oe),$t.setAttribute("aria-label",ft?`${Z}, ${u[lt].ad} grubu`:`${B}. ke\u015Fif noktas\u0131, ${u[lt].ad} grubu`),$t.addEventListener("click",xe=>{xe.stopPropagation();for(let _e of _n(".kesif-isaret[aria-current]"))_e.removeAttribute("aria-current");$t.setAttribute("aria-current","true"),ye(k,Vt?Vt.checked:!0,Z)}),{el:$t,kat:lt}}function $(){if(!g||!p)return;let k=[],B=new Set,Z=0,ft=({id:lt,ozel:$t,rozet:qt,adim:oe=0,...xe})=>{let _e=ut(lt,Z+1,$t,qt);_e&&(qt||Z++,B.add(_e.kat),k.push({el:_e.el,oncelik:c[lt].oncelik,adim:oe,...xe}))};for(let lt of p.kesifNoktalari||[])ft(lt);for(let lt of p.kesifEk?.(w())||[])ft(lt);g.isaretKoy(k);for(let lt of _n("li[data-kat]",Pt||document.createElement("i")))lt.hidden=!B.has(lt.dataset.kat)}let bt=Ht("#kesif-dugme");bt?.addEventListener("click",()=>{let k=ue.dataset.kesif!=="acik";ue.dataset.kesif=k?"acik":"",bt.setAttribute("aria-pressed",String(k)),g?.guvenliYenile(),k?($(),Ai("Ke\u015Fif modu a\xE7\u0131k: i\u015Faretli par\xE7alara dokun. \u0130\u015Faretin rengi ve simgesi par\xE7an\u0131n grubunu g\xF6sterir.")):(g?.isaretKoy([]),X(),Ai("Ke\u015Fif modu kapand\u0131"))});function It(k,B){if(!k){X();return}if(p?.dokunuldu?.(k,B)){g.iste();return}k.kesif&&ye(k.kesif,ue.dataset.kesif==="acik"&&(Vt?Vt.checked:!0),k.ozel)}function dt(k){let B=s.kavramlar||{},Z=s.kesifIcerik||{},ft=c[k];return B[k]?{...B[k],ad:ft?.ad||B[k].ad}:Z[k]?{...Z[k],ad:Z[k].ad||ft?.ad||k}:ft?.kavram&&B[ft.kavram]?{...B[ft.kavram],ad:ft.ad}:ft?{ad:ft.ad,yalin:ft.kisa}:null}let Gt=!1,Nt="";function ye(k,B=!1,Z=""){let ft=Ht("#bilgi"),lt=k?dt(k):null;if(!ft||!lt)return;let $t=ue.dataset.sinif||"6",qt=k!==E||ft.hidden;B!=="koru"&&(Gt=!!B,Nt=Z||"");let oe=Ht("#kesif-soru"),xe=Ht("#bilgi-cevap");oe&&(oe.hidden=!Gt),xe&&(xe.hidden=Gt);let _e=d(k),Ee=Ht("#bilgi-kat");Ee&&(Ee.hidden=!_e,_e&&(Ee.dataset.kat=_e,Ht("#bilgi-kat-ad").textContent=u[_e].ad,D(Ht(".ki-daire",Ee),_e))),Ht("#bilgi-baslik").textContent=lt.ad;let dn=Ht("#bilgi-ozel");if(dn&&(dn.textContent=Nt,dn.hidden=!Nt||Nt===lt.ad),lt.yalin?(Ht("#bilgi-teknik").textContent=lt.yalin,Ht("#bilgi-sosyal").textContent="",ft.classList.add("yalin")):(Ht("#bilgi-teknik").innerHTML=lt.teknik?.[$t]||lt.teknik?.["6"]||"",Ht("#bilgi-sosyal").innerHTML=lt.sosyal?.[$t]||"",ft.classList.toggle("yalin",!lt.sosyal?.[$t])),qt){let Ye=Ht("#bilgi-gorsel");if(Ye){Ye.hidden=!0;let Nn=Ht("img",Ye);Nn&&(Nn.removeAttribute("src"),Nn.alt="")}}E=k,ft.hidden=!1,H.matches&&re==="tam"&&T("yarim"),Ai(Gt?"Sence bu nedir? Cevab\u0131 g\xF6r d\xFC\u011Fmesine bas":[lt.ad,Nt].filter(Boolean).join(", ")),qt&&document.dispatchEvent(new CustomEvent("3d:bilgi",{detail:{id:k}}))}_=()=>ye(E,"koru"),document.addEventListener("3d:kesif-ac",k=>{let B=k.detail?.id;B&&ye(B,Vt?Vt.checked:!0,k.detail.ozel)}),Ht("#kesif-gor")?.addEventListener("click",()=>{Gt=!1,ye(E,"koru"),Ht("#bilgi-baslik")?.focus?.()});function X(){let k=Ht("#bilgi");k&&(k.hidden=!0),E=null;for(let B of _n(".kesif-isaret[aria-current]"))B.removeAttribute("aria-current")}Ht("#bilgi-kapat")?.addEventListener("click",X);function yt(){let k=document.createElement("div");k.className="olcum",At.appendChild(k);let B=0,Z=performance.now(),ft=Z,lt=0;g.kareGuncelleyici($t=>(B++,lt=Math.max(lt,$t-ft),ft=$t,!1)),setInterval(()=>{let $t=performance.now(),qt=g.kalite();k.textContent=`${Math.round(B*1e3/($t-Z))} kare/sn \xB7 en uzun ${Math.round(lt)} ms \xB7 \xF6l\xE7ek ${qt.piksel} (tam ${qt.tam}, kademe ${qt.kademe})`,B=0,Z=$t,lt=0},1e3)}}var x1=[.04,.58,.81],Zi=(n,t,e,i,s,r)=>[n-86,t,e-23,i-86,s,r-23],Ap={genel:{kutu:[-108,0,-76,108,91,56],yon:x1},giris:{kutu:[-64,0,-52,74,76,38],yon:[0,.64,.77]},klavye:{kutu:[-48,0,-50,48,66,36],yon:[0,.62,.78]},fare:{kutu:[-12,0,-50,80,64,34],yon:[0,.62,.78]},"mik-kam":{kutu:[-70,0,-52,26,78,44],yon:[0,.6,.8]},cikis:{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},ekran:{kutu:[-44,10,-50,52,68,-38],yon:[0,.2,.98]},"hop-yaz":{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},kulaklik:{kutu:[68,0,22,112,18,46],yon:[-.1,.52,.85]},kablolar:{kutu:[-108,0,-78,26,92,12],yon:[.12,.46,-.88]},"ic-kasa":{kutu:Zi(-24,0,-44,21,110,44),yon:[-.8,.32,.5]},"ic-anakart":{kutu:Zi(6,28,-43,21,80,21),yon:[-.9,.28,.32]},"ic-islemci":{kutu:Zi(-48,48,-37,19,98,-6),yon:[-.86,.3,.4]},"ic-ram":{kutu:Zi(-14,44,-14,19,79,3),yon:[-.62,.27,.74]},"ic-depolama":{kutu:Zi(6,0,-4,20,58,47),yon:[-.9,.42,.03]},"ic-gpu":{kutu:Zi(-6,36,-44,19,60,15),yon:[-.76,.27,.59]},"ic-psu":{kutu:Zi(-20,0,-44,13,28,1),yon:[-.8,.5,.35]},"ic-sogutma":{kutu:Zi(-20,20,-44,20,120,32),yon:[-.74,.4,.54]},"ic-ozet":{kutu:Zi(-20,0,-44,20,100,44),yon:[-.88,.3,.37]},"ic-sivi":{kutu:Zi(-16,54,-43,19,98,24),yon:[-.92,.27,.29]},"ic-arka":{kutu:Zi(-20,38,-60,20,110,-40),yon:[.5,.3,-.82]}},Ep={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06],arkadan:[0,.3,-.96]};var _1={"tus-bas":{yazi:"Tu\u015Fa bas",ikon:"keyboard",tur:"dugme"},"fare-oynat":{yazi:"Fareyi oynat",ikon:"mouse",tur:"dugme"},"fare-tikla":{yazi:"Sol t\u0131kla",ikon:"pointer",tur:"dugme"},"fare-sag":{yazi:"Sa\u011F t\u0131kla",ikon:"mouse",tur:"dugme"},konus:{yazi:"Konu\u015F",ikon:"mic",tur:"dugme"},kamera:{yazi:"Kameray\u0131 a\xE7",ikon:"webcam",tur:"basili"},cozunurluk:{yazi:"\xC7\xF6z\xFCn\xFCrl\xFC\u011F\xFC de\u011Fi\u015Ftir",ikon:"monitor",tur:"dugme"},ses:{yazi:"Ses ver",ikon:"speaker",tur:"dugme"},yazdir:{yazi:"Yazd\u0131r",ikon:"printer",tur:"dugme"},"kulak-dinle":{yazi:"Sesi dinle",ikon:"headphones",tur:"dugme"},"kulak-konus":{yazi:"Mikrofona konu\u015F",ikon:"mic",tur:"dugme"},"kablo-sonraki":{yazi:"S\u0131radaki kablo",ikon:"cable",tur:"dugme"},kapak:{yazi:"Kapa\u011F\u0131 a\xE7",ikon:"door-open",tur:"basili"},"sogutucu-kaldir":{yazi:"So\u011Futucuyu kald\u0131r",ikon:"arrow-up",tur:"basili"},"ram-cikar":{yazi:"RAM'i \xE7\u0131kar",ikon:"memory-stick",tur:"basili"},calistir:{yazi:"Bilgisayar\u0131 \xE7al\u0131\u015Ft\u0131r",ikon:"power",tur:"basili"},"sogutma-turu":{yazi:"S\u0131v\u0131 so\u011Futmaya ge\xE7",ikon:"droplets",tur:"basili"}},O2=Object.fromEntries(Object.entries(_1).map(([n,t])=>[n,t.yazi])),Tp={"girdi-cikti-birimleri":{no:1,devre:null,adimlar:{merak:{kamera:"genel",dokun:!0},donanim:{kamera:"genel",etiket:[["parca:kasa","Donan\u0131m","eksi"],["parca:klavye","Donan\u0131m","eksi"],["parca:monitor","Donan\u0131m","eksi"],["parca:ekran","Yaz\u0131l\u0131m","yesil"]]},giris:{kamera:"giris",vurgu:["klavye","fare","mikrofon","kamera"],etiket:[["parca:klavye","Klavye","eksi"],["parca:fare","Fare","eksi"],["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},klavye:{kamera:"klavye",mod:"yaz",yazi:"",kontrol:["tus-bas"],dokun:!0,etiket:[["tus:Esc","Esc"],["tus:Ctrl","Ctrl"],["tus:Shift","Shift"],["tus:Enter","Enter"],["tus:Bosluk","Bo\u015Fluk"]]},fare:{kamera:"fare",mod:"fare",kontrol:["fare-oynat","fare-tikla","fare-sag"],dokun:!0,etiket:[["parca:fare-sol","Sol d\xFC\u011Fme"],["parca:fare-sag","Sa\u011F d\xFC\u011Fme"],["parca:fare-tekerlek","Tekerlek"]]},"mikrofon-kamera":{kamera:"mik-kam",mod:"ses",kontrol:["konus","kamera"],etiket:[["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},cikis:{kamera:"cikis",vurgu:["monitor","hoparlor1","hoparlor2","yazici"],etiket:[["parca:monitor","Monit\xF6r","arti"],["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:hoparlor2","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},ekran:{kamera:"ekran",mod:"ekran",kontrol:["cozunurluk"],dokun:!0},"hoparlor-yazici":{kamera:"hop-yaz",kontrol:["ses","yazdir"],etiket:[["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},"ikisi-de":{kamera:"kulaklik",kontrol:["kulak-dinle","kulak-konus"],vurgu:["kulaklik"],etiket:[["parca:kulaklik-mikrofon","Mikrofon: girdi","eksi"],["parca:kulaklik-kup","Kulakl\u0131k: \xE7\u0131kt\u0131","arti"]]},kablolar:{kamera:"kablolar",mod:"kablo",kontrol:["kablo-sonraki"],dokun:!0,etiket:[["parca:arka-hdmi","HDMI"],["parca:arka-usb","USB"],["parca:arka-ses","Ses giri\u015Fleri"],["parca:arka-ag","A\u011F giri\u015Fi"],["parca:arka-guc","G\xFC\xE7 giri\u015Fi"]]},ozet:{kamera:"genel",etiket:[["parca:klavye","Girdi","eksi"],["parca:fare","Girdi","eksi"],["parca:mikrofon","Girdi","eksi"],["parca:kamera","Girdi","eksi"],["parca:monitor","\xC7\u0131kt\u0131","arti"],["parca:hoparlor1","\xC7\u0131kt\u0131","arti"],["parca:hoparlor2","\xC7\u0131kt\u0131","arti"],["parca:yazici","\xC7\u0131kt\u0131","arti"],["parca:kulaklik","Girdi ve \xE7\u0131kt\u0131","yesil"],["parca:usb-bellek","Depolama"]]}}},"kasanin-ici":{no:2,devre:null,gorunum:{yandan:[-.96,.3,.06]},adimlar:{merak:{kamera:"ic-kasa",mod:"ic-kapali",dokun:!0},kapak:{kamera:"ic-kasa",mod:"ic-kapali",kontrol:["kapak"],dokun:!0,etiket:[["parca:kasa","Kapal\u0131 kasa","yesil"]]},anakart:{kamera:"ic-anakart",mod:"ic",vurgu:["ic-anakart"],dokun:!0,etiket:[["parca:ic-anakart","Anakart","yesil"],["parca:ic-pil","BIOS pili"],["parca:ic-ram","RAM yuvalar\u0131"]]},islemci:{kamera:"ic-islemci",mod:"ic",kontrol:["sogutucu-kaldir"],dokun:!0,etiket:[["parca:ic-islemci","\u0130\u015Flemci","yesil"],["parca:ic-hava","Hava so\u011Futucu"]]},ram:{kamera:"ic-ram",mod:"ic",kontrol:["ram-cikar"],dokun:!0,etiket:[["parca:ic-ram","RAM \xE7ubuklar\u0131","yesil"]]},depolama:{kamera:"ic-depolama",mod:"ic",dokun:!0,etiket:[["parca:ic-m2","M.2 SSD","yesil"],["parca:ic-sata-ssd","SATA SSD","yesil"],["parca:ic-hdd","Sabit disk (HDD)","yesil"],["parca:ic-sata-kablo","SATA veri kablosu"]]},"ekran-karti":{kamera:"ic-gpu",mod:"ic",vurgu:["ic-gpu"],dokun:!0,etiket:[["parca:ic-gpu","Ekran kart\u0131","arti"]]},"guc-kaynagi":{kamera:"ic-psu",mod:"ic",vurgu:["ic-psu"],dokun:!0,etiket:[["parca:ic-psu","G\xFC\xE7 kayna\u011F\u0131","yesil"],["parca:ic-kablo24","Anakarta giden kablo"]]},sogutma:{kamera:"ic-sogutma",mod:"ic",kontrol:["calistir","sogutma-turu"],dokun:!0,etiket:[["parca:ic-hava","Hava so\u011Futucu"],["parca:ic-fan-egzoz","\xDCst fan"]],etiketSivi:[["parca:ic-pompa","Pompa blo\u011Fu"],["parca:ic-radyator","Radyat\xF6r"]]},"sivi-sogutma":{kamera:"ic-sivi",mod:"ic-sivi",kontrol:["calistir"],dokun:!0,etiket:[["parca:ic-pompa","Pompa blo\u011Fu"],["parca:ic-radyator","Radyat\xF6r"],["parca:ic-hortum","Hortum"]]},baglantilar:{kamera:"ic-arka",mod:"ic",dokun:!0,etiket:[["parca:ic-arka-gpu","HDMI (ekran kart\u0131)"],["parca:ic-arka-usb","USB"],["parca:ic-arka-ag","A\u011F giri\u015Fi (kablolu)"],["parca:ic-wifi-arka","Wi-Fi anteni (kablosuz)"],["parca:ic-arka-ses","Ses giri\u015Fleri"]]},ozet:{kamera:"ic-ozet",mod:"ic",etiket:[["parca:ic-anakart","Anakart","yesil"],["parca:ic-hava","So\u011Futucu"],["parca:ic-ram","RAM"],["parca:ic-hdd","Depolama"],["parca:ic-gpu","Ekran kart\u0131"],["parca:ic-psu","G\xFC\xE7 kayna\u011F\u0131"]]}}}};var Dh={girdi:{ad:"Girdi birimleri",renk:"#1e6fd9",ikon:"keyboard"},cikti:{ad:"\xC7\u0131kt\u0131 birimleri",renk:"#f57c00",ikon:"monitor",koyu:!0},ikisi:{ad:"Hem girdi hem \xE7\u0131kt\u0131",renk:"#7c4dff",ikon:"headphones"},depolama:{ad:"Depolama",renk:"#00897b",ikon:"hard-drive"},kasa:{ad:"Kasa ve ba\u011Flant\u0131lar",renk:"#6b7280",ikon:"plug"},ic:{ad:"Kasan\u0131n i\xE7i",renk:"#b0245e",ikon:"cpu"},sogutma:{ad:"So\u011Futma",renk:"#2e7d32",ikon:"fan"}},Qn=3,Mn=2,ti=1,Hc={klavye:{kat:"girdi",ad:"Klavye",oncelik:Qn,kisa:"Harf, rakam ve komut tu\u015Flar\u0131yla bilgisayara yaz\u0131 yazd\u0131r\u0131r. Girdi birimidir."},"tus-harf":{kat:"girdi",ad:"Harf ve rakam tu\u015Flar\u0131",oncelik:ti,kisa:"Bas\u0131nca ekranda o harf, rakam ya da i\u015Faret belirir."},"tus-ozel":{kat:"girdi",ad:"\xD6zel tu\u015Flar",oncelik:ti,kisa:"Yaz\u0131 yazmak yerine bir i\u015F yapt\u0131ran tu\u015Flar: Tab, Caps Lock, Alt, ok tu\u015Flar\u0131, Delete ve F tu\u015Flar\u0131."},"tus-esc":{kat:"girdi",ad:"Esc tu\u015Fu",oncelik:ti,kisa:"Yap\u0131lan i\u015Ften vazge\xE7meyi ya da a\xE7\u0131k pencereyi kapatmay\u0131 sa\u011Flar."},"tus-shift":{kat:"girdi",ad:"Shift tu\u015Fu",oncelik:Mn,kisa:"Bas\u0131l\u0131 tutulurken harfler b\xFCy\xFCk \xE7\u0131kar, rakam tu\u015Flar\u0131n\u0131n \xFCst\xFCndeki i\u015Faretler yaz\u0131l\u0131r."},"tus-ctrl":{kat:"girdi",ad:"Ctrl tu\u015Fu",oncelik:Mn,kisa:"Ba\u015Fka bir tu\u015Fla birlikte bas\u0131l\u0131nca k\u0131sayol komutu verir. \xD6rne\u011Fin Ctrl ile C se\xE7ileni kopyalar."},"tus-enter":{kat:"girdi",ad:"Enter tu\u015Fu",oncelik:Mn,kisa:"Yazd\u0131\u011F\u0131m\u0131z\u0131 onaylar ya da imleci yeni sat\u0131ra ge\xE7irir."},"tus-bosluk":{kat:"girdi",ad:"Bo\u015Fluk tu\u015Fu",oncelik:Mn,kisa:"Kelimeler aras\u0131nda bo\u015Fluk b\u0131rak\u0131r. Klavyenin en uzun tu\u015Fudur."},fare:{kat:"girdi",ad:"Fare",oncelik:Qn,kisa:"Ekrandaki imleci hareket ettirir; sol ve sa\u011F d\xFC\u011Fmeyle se\xE7me, a\xE7ma gibi komutlar verir. Girdi birimidir."},"fare-tekerlek":{kat:"girdi",ad:"Fare tekerle\u011Fi",oncelik:ti,kisa:"Sayfay\u0131 yukar\u0131 a\u015Fa\u011F\u0131 kayd\u0131r\u0131r. Bas\u0131l\u0131nca \xFC\xE7\xFCnc\xFC bir d\xFC\u011Fme gibi de \xE7al\u0131\u015Fabilir."},mikrofon:{kat:"girdi",ad:"Mikrofon",oncelik:Qn,kisa:"Sesi elektrik sinyaline \xE7evirerek bilgisayara aktar\u0131r. Girdi birimidir."},"web-kamerasi":{kat:"girdi",ad:"Web kameras\u0131",oncelik:Qn,kisa:"G\xF6r\xFCnt\xFCy\xFC al\u0131p bilgisayara aktar\u0131r; g\xF6r\xFCnt\xFCl\xFC g\xF6r\xFC\u015Fmede ve foto\u011Fraf \xE7ekmede kullan\u0131l\u0131r. Girdi birimidir."},monitor:{kat:"cikti",ad:"Monit\xF6r",oncelik:Qn,kisa:"Bilgisayar\u0131n \xFCretti\u011Fi g\xF6r\xFCnt\xFCy\xFC g\xF6sterir. \xC7\u0131kt\u0131 birimidir."},ekran:{kat:"cikti",ad:"Ekran ve pikseller",oncelik:Mn,kisa:"G\xF6r\xFCnt\xFC, piksel denen \xE7ok k\xFC\xE7\xFCk renkli noktalardan olu\u015Fur. Nokta say\u0131s\u0131 artt\u0131k\xE7a g\xF6r\xFCnt\xFC keskinle\u015Fir."},hoparlor:{kat:"cikti",ad:"Hoparl\xF6r",oncelik:Qn,kisa:"Bilgisayardaki sesi duyulabilir hale getirir. \xC7\u0131kt\u0131 birimidir."},yazici:{kat:"cikti",ad:"Yaz\u0131c\u0131",oncelik:Qn,kisa:"Bilgisayardaki yaz\u0131 ve resmi k\xE2\u011F\u0131da basar. \xC7\u0131kt\u0131 birimidir."},kulaklik:{kat:"ikisi",ad:"Mikrofonlu kulakl\u0131k",oncelik:Qn,kisa:"Sesi kula\u011Fa verir (\xE7\u0131kt\u0131), kolundaki mikrofon sesinizi bilgisayara iletir (girdi)."},"kulaklik-mikrofon":{kat:"ikisi",ad:"Kulakl\u0131\u011F\u0131n mikrofonu",oncelik:ti,kisa:"Kulakl\u0131\u011F\u0131n ucundaki k\xFC\xE7\xFCk mikrofon sesinizi bilgisayara ta\u015F\u0131r. Buras\u0131 girdi taraf\u0131d\u0131r."},"usb-bellek":{kat:"depolama",ad:"USB bellek",oncelik:Mn,kisa:"Dosyalar\u0131 saklayan, tak\u0131l\u0131p \xE7\u0131kar\u0131labilen k\xFC\xE7\xFCk depolama birimidir."},kasa:{kat:"kasa",ad:"Kasa",oncelik:Qn,kisa:"Bilgisayar\u0131n ana par\xE7alar\u0131n\u0131 i\xE7inde ta\u015F\u0131yan ve koruyan kutudur. Birinci derste kapal\u0131 kal\u0131r; ikinci derste kapa\u011F\u0131 a\xE7\u0131p i\xE7ini geziyoruz."},"guc-dugmesi":{kat:"kasa",ad:"G\xFC\xE7 d\xFC\u011Fmesi",oncelik:Mn,kisa:"Bilgisayar\u0131 a\xE7ar ve kapat\u0131r."},"usb-girisi":{kat:"kasa",ad:"USB giri\u015Fi",oncelik:Mn,kisa:"Klavye, fare, yaz\u0131c\u0131 ve USB bellek gibi cihazlar\u0131n tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ses-jaklari":{kat:"kasa",ad:"Ses giri\u015Fleri",oncelik:Mn,kisa:"Kulakl\u0131k, mikrofon ve hoparl\xF6r kablolar\u0131n\u0131n tak\u0131ld\u0131\u011F\u0131 yuvalar. Yanlar\u0131ndaki simge ve renk hangisinin nereye tak\u0131laca\u011F\u0131n\u0131 g\xF6sterir."},"hdmi-girisi":{kat:"kasa",ad:"HDMI giri\u015Fi",oncelik:Mn,kisa:"G\xF6r\xFCnt\xFCy\xFC monit\xF6re ta\u015F\u0131yan kablonun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ag-girisi":{kat:"kasa",ad:"A\u011F giri\u015Fi",oncelik:ti,kisa:"\u0130nternet kablosunun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"guc-girisi":{kat:"kasa",ad:"G\xFC\xE7 kablosu giri\u015Fi",oncelik:Mn,kisa:"Prizden gelen elektri\u011Fin kasaya girdi\u011Fi yerdir."},"guc-kaynagi":{kat:"kasa",ad:"G\xFC\xE7 kayna\u011F\u0131",oncelik:Mn,kisa:"Prizdeki elektri\u011Fi bilgisayar par\xE7alar\u0131n\u0131n kullanabilece\u011Fi d\xFC\u015F\xFCk gerilime \xE7evirir."},"yan-kapak":{kat:"kasa",ad:"Yan kapak",oncelik:Mn,kisa:"Kasan\u0131n yan y\xFCz\xFCndeki kapakt\u0131r. A\xE7\u0131l\u0131nca i\xE7indeki par\xE7alar g\xF6r\xFCn\xFCr; kapal\u0131yken par\xE7alar\u0131 toz ve dokunmaktan korur."},anakart:{kat:"ic",ad:"Anakart",oncelik:Qn,kisa:"Bilgisayar\u0131n b\xFCt\xFCn par\xE7alar\u0131n\u0131n tak\u0131ld\u0131\u011F\u0131 ya da kabloyla ba\u011Fland\u0131\u011F\u0131 ana kartt\u0131r. Par\xE7alar onun \xFCzerinden birbiriyle konu\u015Fur."},islemci:{kat:"ic",ad:"\u0130\u015Flemci",oncelik:Qn,kisa:"Bilgisayar\u0131n beynidir. Hesaplar\u0131 yapar ve programlar\u0131 \xE7al\u0131\u015Ft\u0131r\u0131r. \xC7al\u0131\u015F\u0131rken \u0131s\u0131n\u0131r, bu y\xFCzden \xFCst\xFCne so\u011Futucu tak\u0131l\u0131r."},"termal-macun":{kat:"ic",ad:"Termal macun",oncelik:Mn,kisa:"\u0130\u015Flemci ile so\u011Futucu aras\u0131na s\xFCr\xFClen ince macundur. Aradaki bo\u015Fluklar\u0131 doldurarak \u0131s\u0131n\u0131n so\u011Futucuya ge\xE7mesini kolayla\u015Ft\u0131r\u0131r."},ram:{kat:"ic",ad:"RAM (bellek)",oncelik:Qn,kisa:"Bilgisayar\u0131n \xE7al\u0131\u015Fma masas\u0131d\u0131r. A\xE7\u0131k program ve dosyalar ge\xE7ici olarak burada durur. Elektrik gidince i\xE7indekiler silinir."},"ekran-karti":{kat:"ic",ad:"Ekran kart\u0131",oncelik:Qn,kisa:"Ekranda g\xF6rd\xFC\u011F\xFCm\xFCz g\xF6r\xFCnt\xFCy\xFC haz\u0131rlar. Kendi fanlar\u0131 vard\u0131r ve \xE7al\u0131\u015F\u0131rken \xE7ok \u0131s\u0131n\u0131r."},"pcie-yuvasi":{kat:"ic",ad:"PCIe yuvas\u0131",oncelik:ti,kisa:"Ekran kart\u0131 gibi ek kartlar\u0131n anakarta tak\u0131ld\u0131\u011F\u0131 uzun yuvad\u0131r."},"guc-kablolari":{kat:"ic",ad:"G\xFC\xE7 kablolar\u0131",oncelik:Mn,kisa:"G\xFC\xE7 kayna\u011F\u0131ndan anakarta ve ekran kart\u0131na elektrik ta\u015F\u0131yan kal\u0131n kablolard\u0131r."},"bios-pili":{kat:"ic",ad:"BIOS pili",oncelik:ti,kisa:"Anakart\u0131n \xFCzerindeki k\xFC\xE7\xFCk pildir. Bilgisayar kapal\u0131yken saati ve temel ayarlar\u0131 korur."},"arka-panel":{kat:"kasa",ad:"Arka panel",oncelik:ti,kisa:"Anakart\u0131n kasan\u0131n arkas\u0131na a\xE7\u0131lan giri\u015F paneli. USB, ses, g\xF6r\xFCnt\xFC ve a\u011F giri\u015Fleri burada toplan\u0131r."},"wifi-karti":{kat:"ic",ad:"Wi-Fi kart\u0131",oncelik:ti,kisa:"Bilgisayar\u0131n kablosuz a\u011Fa ba\u011Flanmas\u0131n\u0131 sa\u011Flayan kartt\u0131r. Antenleri kasan\u0131n arkas\u0131na \xE7\u0131kar."},"veri-kablosu":{kat:"ic",ad:"Veri kablosu",oncelik:ti,kisa:"Depolama birimi ile anakart aras\u0131nda bilgiyi ta\u015F\u0131yan kablodur."},"m2-ssd":{kat:"depolama",ad:"M.2 SSD",oncelik:Mn,kisa:"K\xFC\xE7\xFCk bir kart gibi do\u011Frudan anakarta tak\u0131lan h\u0131zl\u0131 depolama birimidir. Kablo gerektirmez."},"sata-ssd":{kat:"depolama",ad:"SATA SSD",oncelik:Mn,kisa:"\u0130nce bir kutu bi\xE7imindeki SSD. Veriyi SATA kablosuyla anakarta iletir; hareketli par\xE7as\u0131 yoktur."},hdd:{kat:"depolama",ad:"Sabit disk (HDD)",oncelik:Mn,kisa:"D\xF6nen disklerin \xFCzerine bilgi yazan depolama birimidir. B\xFCy\xFCk ve ucuzdur ama SSD kadar h\u0131zl\u0131 de\u011Fildir."},"hava-sogutucu":{kat:"sogutma",ad:"Hava so\u011Futucu",oncelik:Qn,kisa:"\u0130\u015Flemcinin \u0131s\u0131s\u0131n\u0131 alan metal kanatl\u0131 so\u011Futucudur. \xDCzerindeki fan havay\u0131 kanatlar\u0131n aras\u0131ndan \xFCfleyerek \u0131s\u0131y\u0131 uzakla\u015Ft\u0131r\u0131r."},"isi-borusu":{kat:"sogutma",ad:"Is\u0131 borusu",oncelik:ti,kisa:"So\u011Futucudaki bak\u0131r borulard\u0131r. Is\u0131y\u0131 i\u015Flemcinin \xFCst\xFCnden kanatlara h\u0131zla ta\u015F\u0131r."},"sivi-sogutma":{kat:"sogutma",ad:"S\u0131v\u0131 so\u011Futma",oncelik:Qn,kisa:"Is\u0131y\u0131 hava yerine s\u0131v\u0131yla ta\u015F\u0131yan sistemdir: pompa blo\u011Fu, iki hortum ve radyat\xF6r birlikte \xE7al\u0131\u015F\u0131r."},"pompa-blogu":{kat:"sogutma",ad:"Pompa blo\u011Fu",oncelik:Mn,kisa:"\u0130\u015Flemcinin \xFCst\xFCne oturur ve \u0131s\u0131y\u0131 s\u0131v\u0131ya verir. \u0130\xE7indeki pompa s\u0131v\u0131y\u0131 hortumlardan radyat\xF6re do\u011Fru d\xF6nd\xFCr\xFCr."},radyator:{kat:"sogutma",ad:"Radyat\xF6r",oncelik:Mn,kisa:"S\u0131cak s\u0131v\u0131n\u0131n ince borulardan ge\xE7erek so\u011Fudu\u011Fu kanatl\u0131 metal b\xF6l\xFCmd\xFCr. \xDCzerindeki fanlar \u0131s\u0131y\u0131 havaya atar."},"sogutma-hortumu":{kat:"sogutma",ad:"So\u011Futma hortumu",oncelik:ti,kisa:"S\u0131v\u0131y\u0131 pompadan radyat\xF6re ve geri ta\u015F\u0131yan iki esnek borudur. Biri s\u0131cak, biri so\u011Fumu\u015F s\u0131v\u0131y\u0131 ta\u015F\u0131r."},"kasa-fani":{kat:"sogutma",ad:"Kasa fan\u0131",oncelik:Mn,kisa:"Kasan\u0131n i\xE7ine serin hava alan ya da \u0131s\u0131nan havay\u0131 d\u0131\u015Far\u0131 atan fand\u0131r. \xD6nde hava girer, \xFCstte hava \xE7\u0131kar."},"hava-akisi":{kat:"sogutma",ad:"Hava ak\u0131\u015F\u0131",oncelik:ti,kisa:"Kasan\u0131n i\xE7indeki havan\u0131n yoludur: serin hava \xF6nden girer, par\xE7alar\u0131 ge\xE7erken \u0131s\u0131n\u0131r ve yukar\u0131dan \xE7\u0131kar."},"toz-filtresi":{kat:"sogutma",ad:"Toz filtresi",oncelik:ti,kisa:"Kasaya giren havadaki tozu tutan ince a\u011Fd\u0131r. Par\xE7alar\u0131n toz i\xE7inde kalmas\u0131n\u0131 \xF6nler."}};function Js(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Qe,c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=kp(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][h]);let m=kp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function kp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new je(a,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,f=u.count;h<f;h++)for(let m=0;m<e;m++){let y=u.getComponent(h,m);o.setComponent(h+d,m,y)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Ro=new P;function Ci(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ro.copy(t),Ro[i]=0,Ro.normalize();let c=.5*a/(a+o),u=1-Ro.angleTo(n)/l;return Math.sign(Ro[e])===1?u*c:o/(a+o)+c+c*(1-u)}var Wc=class n extends ln{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,u=new P(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,y=new P,g=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),f[M+0]=Ci(y,c,"z","y",r,i),f[M+1]=1-Ci(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[M+0]=1-Ci(y,c,"z","y",r,i),f[M+1]=1-Ci(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[M+0]=1-Ci(y,c,"x","z",r,t),f[M+1]=Ci(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[M+0]=1-Ci(y,c,"x","z",r,t),f[M+1]=1-Ci(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[M+0]=1-Ci(y,c,"x","y",r,t),f[M+1]=1-Ci(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[M+0]=Ci(y,c,"x","y",r,t),f[M+1]=1-Ci(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var pt=(n,t,e,i=0,s=0,r=0)=>{let a=new ln(n,t,e);return a.translate(i,s,r),a};function Le(n,t,e,i,s=0,r=0,a=0,o=2){let l=new Wc(n,t,e,o,Math.max(.05,Math.min(i,n/2-.01,t/2-.01,e/2-.01)));return l.translate(s,r,a),l}function se(n,t,e=0,i=0,s=0,{seg:r=20,eksen:a="y",rUst:o=n,acik:l=!1}={}){let c=new na(o,n,t,r,1,l);return a==="x"?c.rotateZ(-Math.PI/2):a==="z"&&c.rotateX(Math.PI/2),c.translate(e,i,s),c}function bi(n,t){let e=new Et(Js(n.map(i=>i.index?i.toNonIndexed():i),!1),t);return e.matrixAutoUpdate=!1,e}function Ae(n,t){let e=new le(t),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new je(s,3)),n}function Rp(n,t=.22,e=10,i=6){let s=new Gi(n.map(r=>r.isVector3?r:new P(...r)),!1,"catmullrom",.35);return new Hi(s,Math.max(6,Math.round(s.getLength()*e/10)),t,i,!1)}function Cp(n,t,e,i){let s=new Vi;s.moveTo(-n/2,-t/2),s.lineTo(n/2,-t/2),s.lineTo(n/2,t/2),s.lineTo(-n/2,t/2),s.closePath();let r=new rs;r.absarc(0,0,e,0,Math.PI*2,!0),s.holes.push(r);let a=new as(s,{depth:i,bevelEnabled:!1,curveSegments:20});return a.translate(0,0,-i/2),a}function Bn(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var v1=4;function ui(n,{tekrar:t=!1,aniso:e=!0}={}){let i=new Bi(n);return i.colorSpace=pn,e&&(i.anisotropy=v1),t&&(i.wrapS=i.wrapT=yi),i}var us='"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif',nn=(n,t=.6,e=0,i={})=>new Ie({color:n,roughness:t,metalness:e,...i}),ee={};function En(){return ee.hazir||Object.assign(ee,{hazir:!0,kasa:nn(2961463,.5,.35),kasaIc:nn(1842723,.7,.2),plastik:nn(2237739,.55),plastikAcik:nn(7041144,.55),plastikBeyaz:nn(15330286,.5),alumin:nn(11975878,.38,.9),aluminKoyu:nn(4870234,.42,.85),celik:nn(13028049,.3,1),bakir:nn(13203258,.32,1),altin:nn(14726734,.3,1),cip:nn(1316122,.6),kagit:nn(16185074,.92),klavyeGovde:nn(4540754,.55),renkli:nn(16777215,.5,.3,{vertexColors:!0}),kablo:nn(1513500,.65),kabloKirmizi:nn(12858667,.6),kabloSari:nn(14262811,.6),kabloYesil:nn(3120727,.6),kabloMavi:nn(2909129,.6),fanKanat:nn(3159100,.55,0,{side:bn}),fanCerceve:nn(1908773,.6),cam:nn(724242,.08,.2),lensCam:nn(1053468,.05,.6),pcbKenar:nn(1002036,.5),soket:nn(2764083,.5),ledYesil:new tn({color:3264619}),ledKirmizi:new tn({color:16729144}),ledMavi:new tn({color:5088255}),ledKapali:new tn({color:2764342}),vurgu:new tn({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new ta({color:6962672}),gorunmez:new tn({visible:!1})}),ee}function Pp(n){n.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}var K2=new Ge;function Xe(n,t,e,i,s=0,r=0,a=0){let o=new on;return o.position.set(s,r,a),o.userData={...n,yari:[t/2,e/2,i/2],hacim:n.hacim??t*e*i},o.updateMatrixWorld(),o}function hs(n,t,e,i,s,r=null){let a=new on;return a.position.set(e,i,s),a.name="kesif-"+t,r&&(a.userData.yon=new P(...r).normalize()),n.add(a),{id:t,nesne:a,yerel:new P}}function Ip(n,t){En();let[e,i,s,r,a,o]=t,l=new Ce,c=new ln(r+1.2,a+1.2,o+1.2),u=new Et(c,ee.vurgu);return u.renderOrder=2,l.add(u,new Ya(new $a(c),ee.vurguCizgi)),l.position.set(e,i,s),n.add(l),l}var Pi={x0:-108,x1:108,z0:-76,z1:56,ust:-.2,kalin:5},Me={x:-86,z:-23,w:40,h:90,d:86},cn={x:4,z:-46},ei=[{x:-53,z:-46},{x:61,z:-46}],Mi={x:0,z:22},ni={x:58,z:22},Si={x:88,z:-43},ii={x:-55,z:34},Pn={x:90,z:34},Ki={x:-33,z:47,don:.5},Ii={x:4,y:66.6,z:-46};var hi=1024,si=576,b1=[[43,24],[85,48],[256,144],[hi,si]],Lp=[[80,45],[160,90],[480,270],[1920,1080]];function $i(n,t,e,i,s,r,a,o){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath(),a&&(n.fillStyle=a,n.fill()),o&&(n.strokeStyle=o,n.lineWidth=2,n.stroke())}var Uh=(n,t)=>{n.beginPath(),t.forEach(([e,i],s)=>s?n.lineTo(e,i):n.moveTo(e,i)),n.closePath(),n.fill()},Ts=(n,t,e,i,s,r,{kalin:a=!1,hiza:o="left"}={})=>{n.font=`${a?700:500} ${s}px ${us}`,n.fillStyle=r,n.textAlign=o,n.textBaseline="middle",n.fillText(t,e,i)};function Co(n,t,e,i,s,r){n.save(),n.shadowColor="rgba(20,24,40,.25)",n.shadowBlur=22,n.shadowOffsetY=6,$i(n,t,e,i,s,10,"#ffffff"),n.restore(),$i(n,t,e,i,38,10,"#e7ebf2"),n.fillStyle="#e7ebf2",n.fillRect(t,e+24,i,14),Ts(n,r,t+16,e+20,19,"#2b3342",{kalin:!0});for(let a=0;a<3;a++)n.fillStyle=["#b8c0cf","#b8c0cf","#e5654f"][a],n.beginPath(),n.arc(t+i-24-a*26,e+19,8,0,Math.PI*2),n.fill()}function Nh(n,t,e,i,s){i==="bilgisayar"&&($i(n,t+6,e+6,44,30,4,"#2b3342"),$i(n,t+10,e+10,36,22,2,"#7fb4f5"),n.fillStyle="#2b3342",n.fillRect(t+22,e+36,12,6),n.fillRect(t+14,e+42,28,4)),i==="klasor"&&($i(n,t+6,e+14,44,30,4,"#f2b53e"),$i(n,t+6,e+8,20,10,3,"#e29f25")),i==="cop"&&(n.fillStyle="#9aa4b6",Uh(n,[[t+14,e+14],[t+42,e+14],[t+38,e+46],[t+18,e+46]]),n.fillStyle="#7e889b",n.fillRect(t+10,e+8,36,6)),Ts(n,s,t+28,e+62,15,"#1d2433",{kalin:!0,hiza:"center"})}function M1(n,t){if(t.mod==="kapali"){n.fillStyle="#0a0b0e",n.fillRect(0,0,hi,si);return}if(t.mod==="acilis"){n.fillStyle="#0c1018",n.fillRect(0,0,hi,si),n.strokeStyle="#7c8aa8",n.lineWidth=10,n.lineCap="round",n.beginPath(),n.arc(hi/2,si/2-20,46,-1.2,3.2),n.stroke(),Ts(n,"Ba\u015Flat\u0131l\u0131yor",hi/2,si/2+70,26,"#aab4c8",{hiza:"center"});return}n.fillStyle="#d5e6fb",n.fillRect(0,0,hi,si),n.fillStyle="#a2c8f3",Uh(n,[[0,410],[170,320],[350,390],[560,290],[770,380],[1024,310],[1024,576],[0,576]]),n.fillStyle="#6ea4e8",Uh(n,[[0,470],[230,410],[430,460],[650,400],[870,460],[1024,420],[1024,576],[0,576]]),Nh(n,28,24,"bilgisayar","Bilgisayar"),Nh(n,28,120,"klasor","Belgeler"),Nh(n,28,216,"cop","\xC7\xF6p"),Co(n,150,56,470,340,"Yaz\u0131 Defteri"),n.fillStyle="#2b3342",n.font=`500 26px ${us}`,n.textAlign="left",n.textBaseline="alphabetic";let e=t.yazi||"",i=[],s="";for(let l of e){if(l===`
`){i.push(s),s="";continue}n.measureText(s+l).width>420&&(i.push(s),s=""),s+=l}i.push(s);let r=i.slice(-7);r.forEach((l,c)=>n.fillText(l,174,130+c*40)),e||(n.fillStyle="#9aa4b6",n.fillText("Bir tu\u015Fa bas",174,130));let a=130+(r.length-1)*40;if(n.fillStyle="#7c4dff",n.fillRect(174+n.measureText(r[r.length-1]).width+3,a-24,3,32),t.kamera&&(Co(n,650,70,330,270,"Kamera"),n.fillStyle="#26324a",n.fillRect(662,118,306,210),n.fillStyle="#8ea6d6",n.beginPath(),n.arc(815,205,40,0,Math.PI*2),n.fill(),n.fillStyle="#5f7fc2",n.beginPath(),n.ellipse(815,330,86,70,0,Math.PI,0),n.fill(),n.strokeStyle="#e5654f",n.lineWidth=4,n.strokeRect(670,126,290,194),n.fillStyle="#e5654f",n.beginPath(),n.arc(692,146,7,0,Math.PI*2),n.fill(),Ts(n,"Kay\u0131t",708,147,15,"#ffffff",{kalin:!0})),t.ses!=null){Co(n,650,360,330,150,"Ses Kayd\u0131");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*1.7+t.ses*9)*Math.cos(l*.6+t.ses*5))*66;n.fillStyle="#7c4dff",n.fillRect(668+l*10,450-c/2-8,6,c)}Ts(n,"Dinleniyor",668,492,15,"#5b6579",{kalin:!0})}if(t.cal!=null){Co(n,650,360,330,150,"M\xFCzik");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*.9+t.cal*7)*Math.cos(l*.4+t.cal*3))*66;n.fillStyle="#7c4dff",n.fillRect(668+l*10,450-c/2-8,6,c)}Ts(n,"\xC7al\u0131yor",668,492,15,"#5b6579",{kalin:!0})}t.yazdir!=null&&(Co(n,250,200,380,160,"Yazd\u0131r"),Ts(n,t.yazdir>=1?"Yazd\u0131r\u0131ld\u0131":"Yaz\u0131c\u0131ya g\xF6nderiliyor",274,262,20,"#2b3342",{kalin:!0}),$i(n,274,296,332,22,11,"#e1e6ef"),t.yazdir>0&&$i(n,274,296,Math.max(22,332*Math.min(1,t.yazdir)),22,11,"#7c4dff")),n.fillStyle="#1f2533",n.fillRect(0,si-44,hi,44),$i(n,12,si-38,32,32,7,"#7c4dff");for(let l=0;l<3;l++)$i(n,62+l*46,si-36,36,28,6,l===0?"#3a4560":"#2d3548");if(Ts(n,"10:24",hi-22,si-22,19,"#dfe5f1",{kalin:!0,hiza:"right"}),t.menu){let l=Math.min(t.imlec.x+6,hi-170),c=Math.min(t.imlec.y+26,si-150);n.save(),n.shadowColor="rgba(20,24,40,.3)",n.shadowBlur=16,n.shadowOffsetY=4,$i(n,l,c,160,104,8,"#ffffff"),n.restore(),["Kes","Kopyala","Yap\u0131\u015Ft\u0131r"].forEach((u,d)=>Ts(n,u,l+16,c+22+d*30,19,"#2b3342",{kalin:d===1}))}let o=t.imlec||{x:760,y:220};t.tik&&(n.strokeStyle="#7c4dff",n.lineWidth=4,n.beginPath(),n.arc(o.x,o.y,18+(t.tik-1)*20,0,Math.PI*2),n.stroke()),n.fillStyle="#ffffff",n.strokeStyle="#111827",n.lineWidth=2.5,n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(o.x,o.y+30),n.lineTo(o.x+8,o.y+23),n.lineTo(o.x+14,o.y+36),n.lineTo(o.x+20,o.y+33),n.lineTo(o.x+14,o.y+21),n.lineTo(o.x+24,o.y+21),n.closePath(),n.fill(),n.stroke()}function Dp(){let[n,t]=Bn(hi,si),[e,i]=Bn(hi,si),[s,r]=Bn(hi,si),a=ui(e,{aniso:!1}),o={mod:"masaustu",yazi:"",imlec:{x:760,y:230},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3};function l(){M1(t,o);let[c,u]=b1[o.kademe];c>=hi?(i.imageSmoothingEnabled=!0,i.drawImage(n,0,0)):(s.width=c,s.height=u,r.imageSmoothingEnabled=!0,r.drawImage(n,0,0,c,u),i.imageSmoothingEnabled=!1,i.drawImage(s,0,0,c,u,0,0,hi,si)),a.needsUpdate=!0}return l(),{tex:a,durum:o,guncelle:l}}function Io(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Fp=(n,t)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]},Fh=n=>n<0?0:n>255?255:n,Np=n=>n*n*(3-2*n),zp={},Xc=(n,t)=>{let e=performance.now(),i=t();return zp[n]=Math.round((performance.now()-e)*10)/10,i};function S1(n,t,e,i,s){let r=Io(s),a=new Float32Array(e*i),o=new Float32Array(n*t);for(let d=0;d<a.length;d++)a[d]=r();let l=new Int32Array(n),c=new Int32Array(n),u=new Float32Array(n);for(let d=0;d<n;d++){let h=d*e/n,f=Math.floor(h);l[d]=f%e,c[d]=(f+1)%e,u[d]=Np(h-f)}for(let d=0;d<t;d++){let h=d*i/t,f=Math.floor(h),m=f%i*e,y=(f+1)%i*e,g=Np(h-f),p=d*n;for(let M=0;M<n;M++){let E=a[m+l[M]],_=a[m+c[M]],w=a[y+l[M]],A=a[y+c[M]],R=u[M];o[p+M]=(E+(_-E)*R)*(1-g)+(w+(A-w)*R)*g}}return o}function Yc(n,t,e,i){let s=new Float32Array(n*t),r=0;e.forEach(([a,o,l],c)=>{let u=S1(n,t,a,o,i+c*7919);for(let d=0;d<s.length;d++)s[d]+=u[d]*l;r+=l});for(let a=0;a<s.length;a++)s[a]/=r;return s}function zh(n,t,e,i,s=!0){let[r,a]=Fp(t,e),o=a.createImageData(t,e),l=o.data,c=(u,d)=>(s?(u=(u+t)%t,d=(d+e)%e):(u=u<0?0:u>=t?t-1:u,d=d<0?0:d>=e?e-1:d),n[d*t+u]);for(let u=0;u<e;u++)for(let d=0;d<t;d++){let h=(c(d-1,u)-c(d+1,u))*i,f=(c(d,u+1)-c(d,u-1))*i,m=1,y=Math.hypot(h,f,m);h/=y,f/=y,m/=y;let g=(u*t+d)*4;l[g]=(h*.5+.5)*255,l[g+1]=(f*.5+.5)*255,l[g+2]=(m*.5+.5)*255,l[g+3]=255}return a.putImageData(o,0,0),r}var ks=4;function _a(n,t,e=!1,i=ks){let s=new Bi(n);return s.colorSpace=t?pn:qi,s.minFilter=Ti,s.magFilter=vn,s.anisotropy=i,e&&(s.wrapS=s.wrapT=yi),s}var w1=n=>new Rt(n,n);function A1(n,t,e,i,s,r,a,o,l="0,0,0"){n.save(),n.shadowColor=`rgba(${l},${o})`,n.shadowBlur=a,n.shadowOffsetX=t+100,n.shadowOffsetY=0,n.fillStyle="#000",n.fillRect(e-s/2-t-100,i-r/2,s,r),n.restore()}function E1({x0:n,x1:t,z0:e,z1:i},s=[],r=ks){let c=Xc("ahsap-damar",()=>{let h=Yc(1024,640,[[2,11,1],[4,23,.45]],2645),f=Yc(1024,640,[[28,220,1],[14,420,.7]],2746),m=Yc(1024,640,[[2,3,1],[6,9,.35]],2847),y=new Float32Array(1024*640),g=new Float32Array(1024*640);for(let p=0;p<y.length;p++){let M=.5+.5*Math.sin(h[p]*40+f[p]*1.6),E=Math.pow(M,1.8);g[p]=Math.min(1,Math.max(0,E*.5+f[p]*.3)),y[p]=.55*g[p]+.45*f[p]}return{ton:g,yuk:y,renk:m}}),u=Xc("ahsap-albedo",()=>{let[h,f]=Fp(1024,640),m=f.createImageData(1024,640),y=m.data,g=[203,172,131],p=[165,127,88];for(let _=0;_<1024*640;_++){let w=c.ton[_],A=(c.renk[_]-.5)*20,R=_*4;y[R]=Fh(g[0]+(p[0]-g[0])*w+A),y[R+1]=Fh(g[1]+(p[1]-g[1])*w+A*.85),y[R+2]=Fh(g[2]+(p[2]-g[2])*w+A*.6),y[R+3]=255}f.putImageData(m,0,0);let M=_=>(_-n)/(t-n)*1024,E=_=>(_-e)/(i-e)*640;for(let _ of s)A1(f,1024,M(_.x),E(_.z),_.w/(t-n)*1024,_.d/(i-e)*640,_.bulanik??22,_.alfa??.34,"52,34,18");return h}),d=Xc("ahsap-normal",()=>zh(c.yuk,1024,640,3.2,!1));return{map:_a(u,!0,!1,r),normalMap:_a(d,!1,!1,r),normalScale:w1(.55)}}function Up(n,t,e,i,s=ks){let r=Xc("mikro-"+i,()=>Yc(n,n,t,i)),a=zh(r,n,n,e,!0);return _a(a,!1,!0,s)}function T1(n=ks){let e=new Float32Array(16384),i=Io(3868);for(let s=0;s<128;s++){let r=.35+i()*.65;for(let a=0;a<128;a++)e[s*128+a]=r}return _a(zh(e,128,128,.9,!0),!1,!0,n)}var Po=null;function Op({aniz:n=4,izler:t=[],masa:e}){if(Po)return Po;ks=Math.max(1,Math.min(8,n));let i=performance.now(),s={masa:E1(e,t,ks),tozBoya:Up(256,[[64,64,1],[128,128,.7]],1.1,31489,ks),plastik:Up(256,[[32,32,1],[96,96,.6]],.8,31490,ks),firca:T1(ks)};return zp.toplam=Math.round((performance.now()-i)*10)/10,Po=s,s}function qc(){if(!Po)throw new Error("dokuKur \xE7a\u011Fr\u0131lmad\u0131");return Po}var ds=hs;function Bp(){En();let n=qc().masa,t=new Ie({map:n.map,normalMap:n.normalMap,normalScale:n.normalScale,roughness:.62}),e=new Et(Le(Pi.x1-Pi.x0,Pi.kalin,Pi.z1-Pi.z0,1,0,Pi.ust-Pi.kalin/2,(Pi.z0+Pi.z1)/2,3),t);return e.name="masa",e.receiveShadow=!1,e.castShadow=!1,e}function Gp(){En();let n=new Ce;n.name="monitor",n.position.set(cn.x,0,cn.z),n.add(bi([Le(95,55,3.2,.9,0,39,0,3),Le(64,38,3.6,1.8,0,40,-3.1,3)],ee.plastik)),n.add(bi([Le(34,1.2,22,.5,0,.6,3,3),Le(7.5,12.8,2.4,.5,0,7.6,-3.8,3),Le(12,3.4,6.4,.9,0,12.6,-3.6,3)],ee.alumin)),n.add(bi([pt(7,3.6,.5,14,24,-4.9),pt(5.4,1.8,.5,-16,21.5,-4.9),pt(2.4,1.3,.4,-16,22.1,-5.2)],ee.cip));let t=Dp(),e=new Et(new Ke(92,51.8),new tn({map:t.tex,toneMapped:!1}));e.position.set(0,39.4,1.62),n.add(e);let i=new Et(new ln(.9,.35,.2),ee.ledYesil);i.position.set(40.5,12.8,1.66),i.userData.dinamik=!0,n.add(i);let s=Xe({kesif:"monitor",parca:"monitor"},95,66,24,0,33,1),r=Xe({kesif:"ekran",parca:"monitor"},92,51.8,1.2,0,39.4,1.7,0);return n.add(s,r),{grup:n,ekran:t,led:i,kesif:[ds(n,"monitor",30,56,3,[0,.3,1]),ds(n,"ekran",-8,44,2.4,[0,0,1])],ledAyarla:a=>{i.material=a?ee.ledYesil:ee.ledKapali},arka:new P(cn.x-14,14.5,cn.z-4.9)}}function Vp(){En();let n=new Ce;n.name="kamera",n.position.set(Ii.x,Ii.y,Ii.z),n.add(bi([Le(4.2,1.2,3.2,.4,0,.6,-.4),Le(8.4,3.4,3.4,1.3,0,2.9,.4,3)],ee.plastik));let t=new Et(se(.95,.5,0,2.9,2.2,{eksen:"z",seg:20}),ee.lensCam);n.add(t);let e=new Et(new jn(1.05,.14,8,24),ee.alumin);e.position.set(0,2.9,2.18),n.add(e);let i=new Et(new ln(.5,.3,.15),ee.ledKapali);return i.position.set(2.6,3.7,2.15),i.userData.dinamik=!0,n.add(i),n.add(Xe({kesif:"web-kamerasi",parca:"kamera"},9,5,5,0,2.4,.3)),{grup:n,led:i,kesif:[ds(n,"web-kamerasi",0,5.2,1,[0,.3,1])],ledAyarla:s=>{i.material=s?ee.ledYesil:ee.ledKapali},ucu:new P(Ii.x,Ii.y+1,Ii.z-1.6)}}function va(n,t,e,i){let s=[];for(let r=0;r<n.length;r++){let a=n[r],o=n[(r+1)%n.length],l=t*a[0]+e*a[1]-i,c=t*o[0]+e*o[1]-i;if(l<=0&&s.push(a),l<0&&c>0||l>0&&c<0){let u=l/(l-c);s.push([a[0]+(o[0]-a[0])*u,a[1]+(o[1]-a[1])*u])}}return s}function Oh(n,t,e){let i=new Vi;n.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.closePath();let s=new as(i,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});return s.rotateX(-Math.PI/2),s.translate(0,e,0),s}function Hp(){En();let n=new Ce;n.name="fare",n.position.set(ni.x,0,ni.z);let t=5,e=9.6,i=2.7,s=[];for(let h=0;h<48;h++){let f=h/48*Math.PI*2,m=Math.cos(f),y=Math.sin(f);s.push([t*Math.sign(m)*Math.pow(Math.abs(m),2/i),e*Math.sign(y)*Math.pow(Math.abs(y),2/i)*(Math.sign(y)>0?.92:1)])}let r=new Et(Oh(s,1.6,.9),new Ie({color:15133166,roughness:.45}));n.add(r);let a=va(va(va(s,1,0,-.1),0,-1,-1.2),0,1,9.99),o=va(va(va(s,-1,0,-.1),0,-1,-1.2),0,1,9.99),l=new Ie({color:15988216,roughness:.4}),c=new Et(Oh(a.map(([h,f])=>[h*.97-.12,f*.97-.05]),.2,.85),l);c.position.y=.55;let u=new Et(Oh(o.map(([h,f])=>[h*.97+.12,f*.97-.05]),.2,.85),l);u.position.y=.55,n.add(c,u);let d=new Et(se(.85,1,0,3.55,-4.4,{eksen:"x",seg:16}),ee.fanCerceve);return n.add(d),n.rotation.y=0,n.add(Xe({kesif:"fare",parca:"fare"},12.2,4.2,20,0,2,0)),n.add(Xe({kesif:"fare-tekerlek",parca:"fare",tekerlek:!0},2.2,2.4,3.2,0,3.6,-4.4)),{grup:n,dSol:c,dSag:u,tekerlek:d,kesif:[ds(n,"fare",0,5.4,4),ds(n,"fare-tekerlek",0,4.8,-4.4)],tikla:h=>{(h?c:u).position.y=.3},birak:()=>{c.position.y=.55,u.position.y=.55},arka:new P(ni.x,1.2,ni.z-7.4)}}function Wp(){En();let n=new Ce;n.name="hoparlorler";let t=[],e=[],i=new pr(.92,1,48),s=new Ie({color:2830134,roughness:.7}),r=new Ie({color:3488322,roughness:.55});return ei.forEach((a,o)=>{let l=new Ce;l.position.set(a.x,0,a.z),l.name="hoparlor"+(o+1),l.add(new Et(Le(13,26,15,1.2,0,13.4,0,3),r)),l.add(bi([se(4.4,.7,0,8.5,7.5,{eksen:"z",seg:28,rUst:3.4}),se(1.7,.6,0,19.5,7.5,{eksen:"z",seg:20,rUst:1.5}),se(1.4,.8,0,8.5,7.9,{eksen:"z",seg:14,rUst:.9})],s));let c=(d,h,f)=>{let m=new Et(new jn(d,h,8,32),ee.alumin);return m.position.set(0,f,7.5),m};if(l.add(c(4.6,.22,8.5),c(1.95,.16,19.5)),o===0){let d=new Et(new ln(.7,.35,.2),ee.ledYesil);d.position.set(4,2.2,7.55),l.add(d),l.add(new Et(se(.9,.7,-4,2.2,7.7,{eksen:"z",seg:14}),ee.alumin))}l.add(Xe({kesif:"hoparlor",parca:"hoparlor"},13.2,26.4,15.4,0,13.4,0)),n.add(l),t.push(l);let u=[];for(let d=0;d<3;d++){let h=new Et(i,new tn({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:bn}));h.visible=!1,h.raycast=()=>{},h.userData.dinamik=!0,h.position.set(a.x,8.5,a.z+8),n.add(h),u.push(h)}e.push(u)}),{grup:n,tek:t,halkalar:e,kesif:ei.map((a,o)=>ds(t[o],"hoparlor",0,28.4,0)),arka:ei.map(a=>new P(a.x,3,a.z-7.2))}}function Xp(){En();let n=new Ce;n.name="mikrofon",n.position.set(ii.x,0,ii.z);let[t,e]=Bn(128,128);e.fillStyle="#4a4f59",e.fillRect(0,0,128,128),e.fillStyle="#1b1d22";for(let o=0;o<128;o+=8)for(let l=0;l<128;l+=8)e.beginPath(),e.arc(o+4,l+4,2.1,0,Math.PI*2),e.fill();let i=ui(t,{tekrar:!0});i.repeat.set(6,4),n.add(bi([se(4.6,.9,0,.45,0,{seg:32,rUst:4.2}),se(.55,12,0,6.8,0)],ee.aluminKoyu));let s=new Ce;s.position.set(0,14.6,0),s.rotation.x=.35,s.add(new Et(new ea(2.3,5.4,6,20),new Ie({map:i,roughness:.45,metalness:.5})));let r=new Et(new jn(2.36,.26,8,28),ee.alumin);r.rotation.x=Math.PI/2,s.add(r),n.add(s);let a=new Et(new ln(.8,.3,.3),ee.ledKapali);return a.position.set(0,.9,4.3),a.userData.dinamik=!0,n.add(a),n.add(Xe({kesif:"mikrofon",parca:"mikrofon"},10,20,10,0,10,0)),{grup:n,led:a,kesif:[ds(n,"mikrofon",0,21.5,0)],ledAyarla:o=>{a.material=o?ee.ledKirmizi:ee.ledKapali},ucu:new P(ii.x,.5,ii.z-3.8),kafa:new P(ii.x,15.6,ii.z+1)}}function Yp(){En();let n=new Ce;n.name="kulaklik",n.position.set(Pn.x,0,Pn.z);let t=new Et(new jn(7.6,.85,10,32,Math.PI),ee.plastik);t.position.y=4.2,n.add(t);let e=new Et(new ln(6,.5,1.6),ee.plastikAcik);e.position.y=11.5,e.scale.set(1,1,1),n.add(e);let i=new Ie({color:2237739,roughness:.55,emissive:8146431,emissiveIntensity:0}),s=new Ie({color:2829878,roughness:.9,emissive:16088064,emissiveIntensity:0});for(let o of[-1,1]){n.add(new Et(se(3.9,2.8,o*8.2,4.2,0,{eksen:"x",seg:28}),i));let l=new Et(new jn(3.3,.95,8,28),new Ie({color:3817031,roughness:.9}));l.rotation.y=Math.PI/2,l.position.set(o*6.6,4.2,0),n.add(l),n.add(new Et(se(1.9,.4,o*9.7,4.2,0,{eksen:"x",seg:20}),ee.alumin))}let r=new Et(Rp([[-9.7,3.4,.4],[-10.6,2.2,2.6],[-9,1.2,6.2],[-5.6,1.5,8.4]],.28),ee.kablo);n.add(r);let a=new Et(new ea(.85,1.4,4,12),s);return a.rotation.z=Math.PI/2,a.rotation.y=.4,a.position.set(-4.7,1.6,8.6),n.add(a),n.add(Xe({kesif:"kulaklik",parca:"kulaklik"},22,14,7,0,7,0)),n.add(Xe({kesif:"kulaklik-mikrofon",parca:"kulaklik"},4,2.4,3,-4.7,1.7,8.6)),{grup:n,kupMal:i,ucMal:s,kesif:[ds(n,"kulaklik",0,15,0),ds(n,"kulaklik-mikrofon",-4.7,4,8.6)],ucu:new P(Pn.x+9.7,4.2,Pn.z)}}function qp(){En();let n=new Ce;n.name="usb-bellek";let t=new Ie({color:3107824,roughness:.4});n.add(new Et(Le(3.7,1.7,9,.6,0,0,3.4+4.5,2),t)),n.add(new Et(pt(2.6,.8,3.6,0,0,1.8),ee.celik));let e=new Et(new ln(.7,.18,.7),ee.ledKapali);return e.position.set(0,.88,10.2),e.userData.dinamik=!0,n.add(e),n.add(Xe({kesif:"usb-bellek",parca:"usb-bellek",minAdim:4,minPx:14},5.4,3.6,13,0,0,6.6)),{grup:n,led:e,kesif:[ds(n,"usb-bellek",0,3.4,8)],ledAyarla:i=>{e.material=i?ee.ledYesil:ee.ledKapali}}}var ba=hs,Gn=3.81,Zc=1.9,Ma=2.2,k1=Ma+.15,Zp=.07;function R1(){let n=[],t=(e,i,s,r=1,a=1,o="harf")=>n.push({ad:e,x:i,y:s,w:r,h:a,tur:o});return t("Esc",0,0,1,1,"ozel"),[2,3,4,5].forEach((e,i)=>t("F"+(i+1),e,0,1,1,"islev")),[6.5,7.5,8.5,9.5].forEach((e,i)=>t("F"+(i+5),e,0,1,1,"islev")),[11,12,13,14].forEach((e,i)=>t("F"+(i+9),e,0,1,1,"islev")),["PrtSc","ScrLk","Pause"].forEach((e,i)=>t(e,15.25+i,0,1,1,"islev")),['"',"1","2","3","4","5","6","7","8","9","0","*","-"].forEach((e,i)=>t(e,i,1.5,1,1,i===0||i>10?"harf":"rakam")),t("Geri",13,1.5,2,1,"ozel"),t("Tab",0,2.5,1.5,1,"ozel"),"QWERTYUIOP\u011E\xDC".split("").forEach((e,i)=>t(e,1.5+i,2.5)),t(",",13.5,2.5,1.5,1),t("Caps",0,3.5,1.75,1,"ozel"),"ASDFGHJKL\u015E\u0130".split("").forEach((e,i)=>t(e,1.75+i,3.5)),t("Enter",12.75,3.5,2.25,1,"ozel"),t("Shift",0,4.5,2.25,1,"ozel"),"ZXCVBNM\xD6\xC7.".split("").forEach((e,i)=>t(e,2.25+i,4.5)),t("Shift",12.25,4.5,2.75,1,"ozel"),t("Ctrl",0,5.5,1.25,1,"ozel"),t("",1.25,5.5,1.25,1,"ozel"),t("Alt",2.5,5.5,1.25,1,"ozel"),t(" ",3.75,5.5,6.25,1,"bosluk"),t("Alt",10,5.5,1.25,1,"ozel"),t("",11.25,5.5,1.25,1,"ozel"),t("Men\xFC",12.5,5.5,1.25,1,"ozel"),t("Ctrl",13.75,5.5,1.25,1,"ozel"),["Ins","Home","PgUp"].forEach((e,i)=>t(e,15.25+i,1.5,1,1,"ozel")),["Del","End","PgDn"].forEach((e,i)=>t(e,15.25+i,2.5,1,1,"ozel")),t("yukari",16.25,4.5,1,1,"ok"),t("sol",15.25,5.5,1,1,"ok"),t("asagi",16.25,5.5,1,1,"ok"),t("sag",17.25,5.5,1,1,"ok"),["Num","/","*","-"].forEach((e,i)=>t(e,18.5+i,1.5,1,1,i?"rakam":"ozel")),["7","8","9"].forEach((e,i)=>t(e,18.5+i,2.5,1,1,"rakam")),t("+",21.5,2.5,1,2,"rakam"),["4","5","6"].forEach((e,i)=>t(e,18.5+i,3.5,1,1,"rakam")),["1","2","3"].forEach((e,i)=>t(e,18.5+i,4.5,1,1,"rakam")),t("Enter",21.5,4.5,1,2,"ozel"),t("0",18.5,5.5,2,1,"rakam"),t(".",20.5,5.5,1,1,"rakam"),n}var C1={Esc:"tus-esc",Shift:"tus-shift",Ctrl:"tus-ctrl",Enter:"tus-enter"," ":"tus-bosluk"},P1=n=>C1[n.ad]||(n.tur==="harf"||n.tur==="rakam"?"tus-harf":"tus-ozel"),Bh=n=>n.tur==="harf"||n.tur==="rakam"||n.tur==="bosluk",Gh=3,fs=4*Gh;function Kp(n,t,e){e=Math.max(.05,Math.min(e,n/2-.01,t/2-.01));let i=n/2-e,s=t/2-e,r=[];for(let[a,o,l]of[[i,s,0],[-i,s,90],[-i,-s,180],[i,-s,270]])for(let c=0;c<Gh;c++){let u=(l+c/(Gh-1)*90)*Math.PI/180;r.push([a+e*Math.cos(u),o+e*Math.sin(u)])}return r}var br=[{y:-.3,ic:0,r:.55,ao:.72},{y:Zc*.66,ic:.1,r:.62,ao:.9},{y:Zc-.32,ic:.4,r:.78,ao:1},{y:Zc,ic:.6,r:.92,ao:1}],js=fs*br.length+fs+1,$p=(3*fs*2+fs)*3;function Jp(){En();let n=22.5*Gn,t=6.5*Gn,e=-n/2,i=-t/2,s=new Ce;s.name="klavye",s.position.set(Mi.x,(t+3)/2*Math.sin(Zp),Mi.z),s.rotation.x=Zp,s.add(new Et(Le(n+3,Ma,t+3,.9,0,Ma/2,0,3),ee.klavyeGovde));for(let O=0;O<3;O++)s.add(new Et(pt(1.3,.3,.5,e+(19+O)*Gn,Ma+.1,i+.5*Gn),O===0?ee.ledYesil:ee.ledKapali));let r=R1(),a=2048,o=Math.round(a*t/n),l=a/n,[c,u]=Bn(a,o);u.fillStyle="#ffffff",u.fillRect(0,0,a,o),u.textAlign="center",u.textBaseline="middle",r.forEach(O=>{let j=(O.x+O.w/2)*Gn*l,st=(O.y+O.h/2)*Gn*l;if(u.fillStyle="#20242c",u.strokeStyle="#20242c",O.tur==="ok"){let xt=.95*l;u.beginPath();let Xt={yukari:[0,-1],asagi:[0,1],sol:[-1,0],sag:[1,0]}[O.ad],ne=-Xt[1],Lt=Xt[0];u.moveTo(j+Xt[0]*xt,st+Xt[1]*xt),u.lineTo(j-Xt[0]*xt*.7+ne*xt,st-Xt[1]*xt*.7+Lt*xt),u.lineTo(j-Xt[0]*xt*.7-ne*xt,st-Xt[1]*xt*.7-Lt*xt),u.closePath(),u.fill();return}if(O.ad==="Geri"){u.lineWidth=.32*l,u.lineCap="round",u.beginPath(),u.moveTo(j+1.6*l,st),u.lineTo(j-1.6*l,st),u.moveTo(j-1.6*l,st),u.lineTo(j-.6*l,st-.9*l),u.moveTo(j-1.6*l,st),u.lineTo(j-.6*l,st+.9*l),u.stroke();return}if(!O.ad.trim())return;let zt=O.ad.length>2;u.font=`${Bh(O)?700:600} ${(zt?1.05:1.55)*l}px ${us}`,u.fillText(O.ad,j,st+.05*l)});let d=_a(c,!0,!1),h=r.length,f=new Float32Array(h*js*3),m=new Float32Array(h*js*3),y=new Float32Array(h*js*2),g=new Float32Array(h*js*3),p=new Uint16Array(h*$p),M=new Float32Array(h*js),E=new Int32Array(h),_=new le(15658991),w=new le(11777724),A=new le(8146431);r.forEach((O,j)=>{let st=O.w*Gn-.3,zt=O.h*Gn-.3,xt=e+(O.x+O.w/2)*Gn,Xt=i+(O.y+O.h/2)*Gn,ne=Bh(O)?_:w,Lt=j*js,et=[],rt=(kt,jt,ht,gt)=>{f[Lt*3]=xt+kt,f[Lt*3+1]=k1+ht,f[Lt*3+2]=Xt+jt,y[Lt*2]=(xt+kt-e)/n,y[Lt*2+1]=1-(Xt+jt-i)/t,M[Lt]=gt,g[Lt*3]=ne.r*gt,g[Lt*3+1]=ne.g*gt,g[Lt*3+2]=ne.b*gt,Lt++};for(let kt of br){et.push(Lt);for(let[jt,ht]of Kp(st-2*kt.ic,zt-2*kt.ic,kt.r))rt(jt,ht,kt.y,kt.ao)}let Tt=Lt;for(let[kt,jt]of Kp(st-2*br[3].ic,zt-2*br[3].ic,br[3].r))rt(kt,jt,br[3].y,1);let Jt=Lt;rt(0,0,br[3].y,1);let Dt=j*$p;for(let kt=0;kt<3;kt++)for(let jt=0;jt<fs;jt++){let ht=et[kt]+jt,gt=et[kt]+(jt+1)%fs,vt=et[kt+1]+jt,Mt=et[kt+1]+(jt+1)%fs;p[Dt++]=ht,p[Dt++]=vt,p[Dt++]=gt,p[Dt++]=gt,p[Dt++]=vt,p[Dt++]=Mt}for(let kt=0;kt<fs;kt++)p[Dt++]=Jt,p[Dt++]=Tt+(kt+1)%fs,p[Dt++]=Tt+kt;E[j]=et[3]});let R=new Qe,v=new je(f,3),S=new je(g,3);R.setAttribute("position",v),R.setAttribute("normal",new je(m,3)),R.setAttribute("uv",new je(y,2)),R.setAttribute("color",S),R.setIndex(new je(p,1)),R.computeVertexNormals();let I=R.attributes.normal;r.forEach((O,j)=>{for(let st=0;st<fs;st++){let zt=E[j]+st,xt=I.getX(zt),Xt=I.getY(zt)+.9,ne=I.getZ(zt),Lt=Math.hypot(xt,Xt,ne);I.setXYZ(zt,xt/Lt,Xt/Lt,ne/Lt)}});let U=f.slice(),G=qc().plastik.clone();G.wrapS=G.wrapT=yi,G.repeat.set(14,4),G.needsUpdate=!0;let H=new Ie({map:d,vertexColors:!0,roughness:.46,normalMap:G,normalScale:new Rt(.35,.35)}),L=new Et(R,H);L.name="tuslar",L.userData.dinamik=!0,s.add(L),r.forEach((O,j)=>{s.add(Xe({kesif:P1(O),parca:"klavye",tus:O.ad,tusNo:j,tusTur:O.tur},O.w*Gn-.3,2.4,O.h*Gn-.3,e+(O.x+O.w/2)*Gn,Ma+1.1,i+(O.y+O.h/2)*Gn))}),s.add(Xe({kesif:"klavye",parca:"klavye"},n+3,5,t+3,0,2,0));let W=(O,j)=>{let st=O*js,zt=st+js,xt=j?A:Bh(r[O])?_:w;for(let Xt=st;Xt<zt;Xt++)f[Xt*3+1]=U[Xt*3+1]-(j?.6:0),g[Xt*3]=xt.r*M[Xt],g[Xt*3+1]=xt.g*M[Xt],g[Xt*3+2]=xt.b*M[Xt];v.needsUpdate=!0,S.needsUpdate=!0},tt=O=>r.findIndex(j=>j.ad===O),J=O=>{let j=r[O];return new P(e+(j.x+j.w/2)*Gn,Ma+Zc+1.2,i+(j.y+j.h/2)*Gn)},ot=O=>{let j=tt(O);return j<0?new P:J(j)};return{grup:s,tuslar:r,tusBas:W,ara:tt,nokta:ot,noktaI:J,kesif:[ba(s,"klavye",0,7,12.5),ba(s,"tus-esc",...ot("Esc").toArray()),ba(s,"tus-shift",...ot("Shift").toArray()),ba(s,"tus-ctrl",...ot("Ctrl").toArray()),ba(s,"tus-enter",e+13.9*Gn,6,ot("Enter").z),ba(s,"tus-bosluk",0,6,ot(" ").z)],arka:new P(Mi.x-8,3,Mi.z-t/2-1.6)}}var I1=hs,L1=2.7,Sa=65*Math.PI/180;function D1(){let[n,t]=Bn(192,96);return t.fillStyle="#17315f",t.fillRect(0,0,192,96),t.fillStyle="#8fb8ff",t.font=`700 38px ${us}`,t.textAlign="left",t.textBaseline="middle",t.fillText("Haz\u0131r",18,48),t.fillStyle="#8fb8ff",t.fillRect(142,28,30,40),t.fillStyle="#17315f",t.fillRect(147,33,20,30),t.fillStyle="#8fb8ff",t.fillRect(151,41,12,3),t.fillRect(151,49,12,3),ui(n)}function N1(){let[n,t]=Bn(512,700);t.fillStyle="#ffffff",t.fillRect(0,0,512,700),t.fillStyle="#7c4dff",t.fillRect(50,56,412,10),t.fillStyle="#20242c",t.font=`700 58px ${us}`,t.textAlign="left",t.textBaseline="alphabetic",t.fillText("Merhaba!",50,148),t.fillStyle="#6b7384";for(let e=0;e<6;e++)t.fillRect(50,200+e*38,e===5?220:412,12);return t.fillStyle="#a2c8f3",t.fillRect(50,450,412,190),t.fillStyle="#6ea4e8",t.beginPath(),t.moveTo(50,640),t.lineTo(200,540),t.lineTo(320,600),t.lineTo(400,530),t.lineTo(462,580),t.lineTo(462,640),t.closePath(),t.fill(),ui(n)}function jp(){En();let n=new Ce;n.name="yazici",n.position.set(Si.x,0,Si.z);let t=.6;for(let[f,m]of[[-14,-10],[14,-10],[-14,10],[14,10]])n.add(new Et(se(1.2,t+.1,f,(t+.1)/2,m,{seg:12}),ee.plastik));n.add(new Et(Le(36,9,28,1.6,0,t+4.5,0,3),ee.plastikBeyaz)),n.add(new Et(Le(35.4,4.4,27.4,1.4,0,11.6,0,3),ee.plastikBeyaz)),n.add(new Et(pt(28,1.6,.3,0,3.2,14.02),ee.cip)),n.add(new Et(Le(27,.6,12,.25,0,2.2,19.2,2),ee.plastikBeyaz));for(let f of[-1,1])n.add(new Et(Le(.6,1.2,10.4,.2,f*13.6,2.75,19.8,2),ee.plastikBeyaz));n.add(new Et(se(.75,22,0,13.55,-13.1,{eksen:"x",seg:12}),ee.plastikBeyaz));let e=13,i=new P(0,Math.sin(Sa),-Math.cos(Sa)),r=new P(0,13.4,-13).clone().addScaledVector(i,e/2),a=new Et(Le(24,.5,e,.2,0,0,0,2),ee.plastikBeyaz);a.position.copy(r),a.rotation.x=Sa,n.add(a);let o=new P(0,Math.cos(Sa),Math.sin(Sa)),l=new Et(pt(21,.35,e-1.5),ee.kagit);l.position.copy(r).addScaledVector(o,.45),l.rotation.x=Sa,n.add(l),n.add(new Et(pt(2.6,1.7,.4,-10,4.2,-14.05),ee.cip));let c=new Ce;c.position.set(8.5,13.95,8.4),c.rotation.x=-.18,c.add(new Et(Le(13,.6,6.2,.3,0,0,0,2),ee.plastik));let u=new Et(new Ke(6.2,3.1),new tn({map:D1(),toneMapped:!1}));u.rotation.x=-Math.PI/2,u.position.set(-2.4,.34,0),c.add(u);let d=new Et(pt(.6,.12,.6),ee.ledKapali);d.position.set(4.2,.34,-1.2),d.userData.dinamik=!0,c.add(d);for(let f=0;f<2;f++)c.add(new Et(se(.6,.14,3.2+f*1.6,.34,1.2,{seg:14}),ee.alumin));n.add(c);let h=new Et(new Ke(25,34.5),new Ie({map:N1(),roughness:.9,side:bn}));return h.rotation.x=-Math.PI/2,h.position.set(0,L1,-3.75),h.visible=!1,h.userData.dinamik=!0,n.add(h),n.add(Xe({kesif:"yazici",parca:"yazici"},37,26,45,0,13,3.5)),{grup:n,kagit:h,led:d,kesif:[I1(n,"yazici",0,15.5,2)],ledAyarla:f=>{d.material=f?ee.ledYesil:ee.ledKapali},arka:new P(Si.x-10,4.2,Si.z-13)}}var Qp=n=>n&&n.getHex?n.getHex():0;function U1(n){return n.userData&&n.userData.dinamik?"u:"+n.uuid:[n.type,Qp(n.color),n.roughness,n.metalness,Qp(n.emissive),n.emissiveIntensity,n.map?n.map.uuid:"-",n.normalMap?n.normalMap.uuid:"-",n.normalScale?n.normalScale.x+","+n.normalScale.y:"-",n.vertexColors?1:0,n.side,n.transparent?1:0,n.opacity,n.toneMapped?1:0,n.depthWrite?1:0,n.depthTest?1:0,n.blending].join("|")}var F1=["position","normal","uv","color"];function tm(n){n.updateMatrixWorld(!0);let t=[];n.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||a.userData.dinamik||a.userData.statik===!1||!a.visible||a.children.length)return;let o=a.material;if(!(!o||Array.isArray(o)||o.visible===!1)){for(let l=a.parent;l&&l!==n;l=l.parent)if(l.userData.dinamik||!l.visible)return;t.push(a)}});let e=new Map;for(let a of t){let o=a.geometry,l=F1.filter(u=>o.attributes[u]).join(","),c=[U1(a.material),a.castShadow?1:0,a.receiveShadow?1:0,a.renderOrder,l].join("#");e.has(c)||e.set(c,{liste:[],ad:l}),e.get(c).liste.push(a)}let i=t.length,s=0,r=0;for(let{liste:a,ad:o}of e.values()){if(a.length<2){s++;continue}let l=o.split(","),c=a.map(f=>{let m=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();for(let y of Object.keys(m.attributes))l.includes(y)||m.deleteAttribute(y);return m.applyMatrix4(f.matrixWorld),m}),u=Js(c,!1);for(let f of c)f.dispose();if(!u){s+=a.length,console.error("statik birle\u015Ftirme ba\u015Far\u0131s\u0131z, meshler oldu\u011Fu gibi kald\u0131");continue}let d=a[0],h=new Et(u,d.material);h.name="birlesik",h.castShadow=d.castShadow,h.receiveShadow=d.receiveShadow,h.renderOrder=d.renderOrder,h.matrixAutoUpdate=!1;for(let f of a)f.parent&&f.parent.remove(f),f.geometry.dispose();n.add(h),s++,r+=a.length}return n.updateMatrixWorld(!0),{once:i,sonra:s,birlesen:r}}var Vh=30,Hh=15,z1=-20.03,Wh=24;function O1(){let[n,t]=Bn(512,256),e="rgba(176,182,194,0.78)";t.fillStyle=e,t.strokeStyle=e,t.lineCap="round",t.lineJoin="round";let i=.38,s=62,r=70,a=(f,m)=>[s+f*i,r+m*i];t.beginPath(),t.moveTo(...a(150,10)),t.lineTo(...a(270,42)),t.lineTo(...a(150,76)),t.lineTo(...a(30,42)),t.closePath(),t.fill(),t.beginPath(),t.moveTo(...a(78,62)),t.lineTo(...a(78,112)),t.quadraticCurveTo(...a(150,130),...a(222,112)),t.lineTo(...a(222,62)),t.lineTo(...a(150,82)),t.closePath(),t.fill(),t.lineWidth=11*i,t.beginPath(),t.moveTo(...a(40,48)),t.lineTo(...a(40,130)),t.stroke();let[o,l]=a(150,192),c=90*i;t.lineWidth=12*i,t.beginPath(),t.arc(o,l,c,0,Math.PI*2),t.stroke(),t.beginPath(),t.ellipse(o,l,c*.42,c,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(o,l-c),t.lineTo(o,l+c),t.moveTo(o-c,l),t.lineTo(o+c,l),t.stroke(),t.beginPath(),t.moveTo(o-c*.86,l-c*.5),t.lineTo(o+c*.86,l-c*.5),t.moveTo(o-c*.86,l+c*.5),t.lineTo(o+c*.86,l+c*.5),t.stroke(),t.textBaseline="middle",t.textAlign="left",t.font=`600 56px ${us}`,t.fillStyle=e;let u=l-4,d=162;t.fillText("bote",d,u);let h=t.measureText("bote").width;return t.fillStyle="rgba(176,182,194,0.55)",t.fillText(".web.tr",d+h,u),n}function em(n,t=43){let e=ui(O1(),{aniso:!0}),i=new tn({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new Ke(Vh,Hh),a=((l,c,u)=>{let d=new Et(s,i);return d.rotation.y=-Math.PI/2,d.position.set(l,c,u),d.castShadow=!1,d.receiveShadow=!1,d.raycast=()=>{},d.name="kasa-logo",d})(z1,Wh,0);n.add(a);let o=new Et(B1(t),i);return o.castShadow=!1,o.receiveShadow=!1,o.raycast=()=>{},o.name="kasa-logo",{kapali:a,acik:o}}function B1(n){let t=new Ke(Vh,Hh).rotateY(-Math.PI/2).translate(-.28,Wh,n),e=new Ke(Vh,Hh).rotateY(Math.PI/2).translate(.28,Wh,n),i=new Qe;for(let l of["position","normal","uv"]){let c=t.attributes[l],u=e.attributes[l],d=new Float32Array(c.array.length+u.array.length);d.set(c.array),d.set(u.array,c.array.length),i.setAttribute(l,new je(d,c.itemSize))}let s=t.attributes.position.count,r=t.index.array,a=e.index.array,o=new Uint16Array(r.length+a.length);o.set(r);for(let l=0;l<a.length;l++)o[r.length+l]=a[l]+s;return i.setIndex(new je(o,1)),t.dispose(),e.dispose(),i}var Qs=hs,Ji=Me.d/2,G1=-Me.d/2,pe={hdmi:{x:15.4,y:74.55},usb:[{x:11,y:75.35},{x:11,y:73.75},{x:7.4,y:75.35},{x:7.4,y:73.75},{x:3.8,y:75.35},{x:3.8,y:73.75}],ag:{x:-.7,y:74.55},mavi:{x:-4.8,y:74.55},pembe:{x:-7.6,y:74.55},yesil:{x:-10.4,y:74.55},guc:{x:5.5,y:10.4}},Yn=80.4,un={guc:-12.5,usb1:-5,usb2:-.2,usbc:5,kulaklik:10.2,mikrofon:14};function nm(n,t,e,i,s,r){let[a,o]=Bn(n,t);o.fillStyle=s,o.fillRect(0,0,n,t),o.fillStyle=r;for(let l=0;l*e*.866<t+e;l++)for(let c=0;c<n/e+1;c++)o.beginPath(),o.arc((c+(l%2?.5:0))*e,l*e*.866,e*i,0,Math.PI*2),o.fill();return a}function V1(){let[n,t]=Bn(512,64),e=512/34,i=a=>(a+17)*e;t.strokeStyle="rgba(222,226,234,0.92)",t.fillStyle="rgba(222,226,234,0.92)",t.lineWidth=2.4,t.lineCap="round",t.lineJoin="round";let s=i(un.guc),r=30;t.beginPath(),t.arc(s,r,11,-Math.PI/2+.6,-Math.PI/2-.6+Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(s,r-15),t.lineTo(s,r-2),t.stroke();for(let a of[un.usb1,un.usb2,un.usbc])s=i(a),t.beginPath(),t.moveTo(s-9,30),t.lineTo(s+9,30),t.stroke(),t.beginPath(),t.arc(s-11,30,3.2,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(s+9,30),t.lineTo(s+5,26.5),t.lineTo(s+5,33.5),t.closePath(),t.fill(),t.beginPath(),t.moveTo(s-3,30),t.lineTo(s,23),t.lineTo(s+3,23),t.stroke(),t.fillRect(s+2,20.5,4.4,4.4),t.beginPath(),t.moveTo(s-1,30),t.lineTo(s+2,37),t.lineTo(s+4.5,37),t.stroke(),t.beginPath(),t.arc(s+6.2,37,2.2,0,Math.PI*2),t.fill();return s=i(un.kulaklik),t.beginPath(),t.arc(s,34,10,Math.PI,0),t.stroke(),t.fillRect(s-12.5,33,5,11),t.fillRect(s+7.5,33,5,11),s=i(un.mikrofon),t.beginPath(),t.arc(s,20,4,Math.PI,0),t.arc(s,29,4,0,Math.PI),t.closePath(),t.fill(),t.beginPath(),t.arc(s,32,8,.15,Math.PI-.15),t.stroke(),t.beginPath(),t.moveTo(s,40),t.lineTo(s,47),t.moveTo(s-5,47),t.lineTo(s+5,47),t.stroke(),n}function im(){En();let n=Me.w,t=Me.h,e=Me.d,i=1.6,s=new Ce;s.name="kasa",s.position.set(Me.x,0,Me.z);let r=new Ie({color:2961463,roughness:.46,metalness:.4}),a=new Et(Le(n,t-i,e,1.1,0,i+(t-i)/2,0,3),r);a.userData.statik=!1,a.name="kasa-govde",s.add(a),a.userData.logoAcik=em(a).acik,s.add(bi([[-15.5,-35.5],[15.5,-35.5],[-15.5,35.5],[15.5,35.5]].map(([_,w])=>se(2.3,i+.2,_,(i+.2)/2,w,{seg:14})),ee.plastik));let o=new Et(new Ke(36.4,62),new Ie({map:ui(nm(512,874,19.7,.3,"#2c2f37","#08090c"),{aniso:!0}),roughness:.55,metalness:.35}));o.position.set(0,38.5,Ji+.05),s.add(o),s.add(new Et(Le(34,6.4,1.2,.5,0,Yn,Ji+.1,2),ee.plastik));let l=Ji+.7,c=[];c.push(Ae(se(2.15,.7,un.guc,Yn,l+.35,{eksen:"z",seg:24}),12173e3)),c.push(Ae(se(1.6,.9,un.guc,Yn,l+.45,{eksen:"z",seg:24}),15527666));for(let _ of[un.usb1,un.usb2])c.push(Ae(pt(3.2,1.5,.9,_,Yn,l+.3),1382171)),c.push(Ae(pt(2.3,.45,.5,_,Yn-.15,l+.5),3107824));c.push(Ae(Le(2.3,.95,.9,.35,un.usbc,Yn,l+.3,2),1382171));for(let _ of[un.kulaklik,un.mikrofon])c.push(Ae(se(1.05,.6,_,Yn,l+.3,{eksen:"z",seg:18}),12173e3)),c.push(Ae(se(.55,.7,_,Yn,l+.35,{eksen:"z",seg:14}),723983));s.add(bi(c,ee.renkli));let u=new Et(new jn(1.85,.11,6,28),ee.ledMavi);u.position.set(un.guc,Yn,l+.8),s.add(u);let d=new Et(new Ke(34,4.25),new tn({map:ui(V1()),transparent:!0,depthWrite:!1}));d.position.set(0,Yn-4.6,Ji+.08),s.add(d);let h=G1;s.add(new Et(Le(31,9.3,.9,.25,2.9,74.55,h-.15,2),ee.alumin));let f=[],m=(_,w,A,R,v=1316378,S=null,I=.45)=>{f.push(Ae(pt(A,R,.5,_,w,h-.55),v)),S!=null&&f.push(Ae(pt(A-.5,I,.4,_,w-R/2+I/2+.12,h-.8),S))};m(pe.hdmi.x,pe.hdmi.y,3,1.05,1053206),pe.usb.forEach((_,w)=>m(_.x,_.y,2.6,1.2,921620,w<2?3107824:10133674)),f.push(Ae(pt(3.4,2.9,.6,pe.ag.x,pe.ag.y,h-.6),11449535)),f.push(Ae(pt(2.6,1.9,.4,pe.ag.x,pe.ag.y-.1,h-.9),855826));for(let[_,w]of[["mavi",3832032],["pembe",14708890],["yesil",3781991]])f.push(Ae(se(1.05,.7,pe[_].x,pe[_].y,h-.8,{eksen:"z",seg:18}),w)),f.push(Ae(se(.5,.8,pe[_].x,pe[_].y,h-.85,{eksen:"z",seg:12}),723983));s.add(new Et(Le(30,17.2,.9,.3,-3.5,10.4,h-.15,2),ee.aluminKoyu)),f.push(Ae(pt(3.9,2.8,.7,pe.guc.x,pe.guc.y,h-.65),1184535)),f.push(Ae(pt(2.5,.9,.5,pe.guc.x,pe.guc.y+.2,h-1),2764083)),f.push(Ae(pt(2,3,.7,9.4,14.2,h-.65),1382171)),f.push(Ae(pt(1.5,1.4,.5,9.4,14.8,h-1),14278116)),s.add(bi(f,ee.renkli));let y=(()=>{let[_,w]=Bn(256,305);w.fillStyle="#20232a",w.fillRect(0,0,256,305);for(let A=0;A<7;A++){let R=A*43.57142857142857+3;w.fillStyle="#8f96a2",w.fillRect(4,R,248,305/7-6),w.fillStyle="#2a2d34";for(let v=0;v<17;v++)for(let S=0;S<2;S++)w.beginPath(),w.arc(22+v*13.4,R+12+S*14,3.1,0,Math.PI*2),w.fill();w.fillStyle="#c3c8d1",w.fillRect(4,R,248,2)}return _})(),g=new Et(new Ke(24,28.5),new Ie({map:ui(y),roughness:.55,metalness:.5}));g.rotation.y=Math.PI,g.position.set(7,55.65,h-.62),s.add(g);let p=nm(256,256,11,.3,"#3a3f49","#0a0b0e"),M=new Et(new Ke(19.4,14.2),new Ie({map:ui(p),roughness:.6,metalness:.4}));M.rotation.y=Math.PI,M.position.set(-8.6,10.4,h-.62),s.add(M);let E={minAdim:4,minPx:14};return s.add(Xe({kesif:"kasa",parca:"kasa"},n,t,e,0,t/2,0)),s.add(Xe({kesif:"guc-dugmesi",parca:"kasa",...E},5,5,2.4,un.guc,Yn,Ji+.9)),s.add(Xe({kesif:"usb-girisi",parca:"kasa",...E},9.2,3.4,2.4,(un.usb1+un.usb2)/2,Yn,Ji+.9)),s.add(Xe({kesif:"ses-jaklari",parca:"kasa",...E},8.6,3.2,2.4,(un.kulaklik+un.mikrofon)/2,Yn,Ji+.9)),s.add(Xe({kesif:"hdmi-girisi",parca:"kasa",...E},3.6,1.8,2.6,pe.hdmi.x,pe.hdmi.y,h-.9)),s.add(Xe({kesif:"usb-girisi",parca:"kasa",arka:!0,...E},11.2,3.6,2.6,7.4,74.55,h-.9)),s.add(Xe({kesif:"ag-girisi",parca:"kasa",...E},3.8,3.2,2.6,pe.ag.x,pe.ag.y,h-.9)),s.add(Xe({kesif:"ses-jaklari",parca:"kasa",arka:!0,...E},8.8,2.6,2.6,-7.6,74.55,h-.9)),s.add(Xe({kesif:"guc-girisi",parca:"kasa",...E},4.6,3.4,2.6,pe.guc.x,pe.guc.y,h-1)),s.add(Xe({kesif:"guc-kaynagi",parca:"kasa"},30,17.2,2.6,-3.5,10.4,h-.5)),{grup:s,halka:u,govde:a,kesif:[Qs(s,"kasa",0,62,Ji+1,[0,.2,1]),Qs(s,"guc-dugmesi",un.guc,Yn,Ji+1,[0,.15,1]),Qs(s,"usb-girisi",(un.usb1+un.usb2)/2,Yn,Ji+1,[0,.15,1]),Qs(s,"ses-jaklari",(un.kulaklik+un.mikrofon)/2,Yn,Ji+1,[0,.15,1]),Qs(s,"hdmi-girisi",pe.hdmi.x,pe.hdmi.y,h-1,[0,.15,-1]),Qs(s,"ag-girisi",pe.ag.x,pe.ag.y,h-1,[0,.15,-1]),Qs(s,"guc-girisi",pe.guc.x,pe.guc.y,h-1.1,[0,.15,-1]),Qs(s,"guc-kaynagi",-10.5,5,h-1,[0,.15,-1])]}}var wn={x0:18,kalin:.32,z0:-41.5,z1:19.5,y0:30,y1:78.8},Xh=19.6,de={z:-20.5,y:63.8},Oe={z0:-9.5,adim:1.7,y0:49,y1:75.3,xAlt:16.6,xUst:9,dolu:[1,3]},$e=n=>67.9-4.064*n,he={y:$e(5),x0:-4,x1:16,z0:-41.8,z1:13,alt:$e(5)-10.8},In={y:$e(2),x0:3.2,x1:17,z0:-41,z1:-35.2},wa={x0:-4.5,x1:18.5,levha:-43.78,yuz:-44,yuva:4.064},ji={dp:[11,7.4,3.8],hdmi:-.4,y:he.y+.6,y0:$e(6)-2.032,y1:$e(4)+2.032},Lo={sma:[5.2,8.4],y:In.y,y0:$e(2)-2.032,y1:$e(2)+2.032},sn={x0:-18.5,x1:11.5,y0:1.8,y1:19,z0:-42.2,z1:-13.7},Re={z0:-1,z1:15,y0:50,y1:54.4,x:17.4},ze={x0:13.2,x1:18.4,y0:2.6,y1:22.9,z0:7.5,z1:36.9},rn={x0:17.1,x1:18.5,y0:26.5,y1:40.5,z0:21,z1:41},qn={z0:11.8,z1:15.4,y:n=>31+n*1.2},di={z:8,y:61.5},Zn={z0:17,z1:19.4,y0:52,y1:62.4,x0:14.8},Qi={z0:-30.5,z1:-25.9,y0:76.3,y1:78.7,x0:14.2},Sn={x0:-8.5,x1:12.4,z0:-26.8,z1:-17.4,y:19,fan:5,fanBoy:18.4,merkezY:de.y,merkezZ:de.z,fanZ:-14.9},we={pompaR:5,pompaX0:10.4,pompaX1:15.8,radX0:-12,radX1:12,radY0:84.2,radY1:89.6,radZ0:-38,radZ1:10},ps=[17.2,41.6,66],Yh=[{ad:"on-alt",grup:"sabit",m:[0,ps[0],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"on-orta",grup:"sabit",m:[0,ps[1],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"on-ust",grup:"sabit",m:[0,ps[2],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"kule",grup:"hava",m:[(Sn.x0+Sn.x1)/2,de.y,Sn.fanZ],eksen:"z",r:8.2,hiz:11,renk:7304577},{ad:"egzoz",grup:"egzoz",m:[0,87.1,-24],eksen:"y",r:10.6,hiz:-10,renk:9080988},{ad:"rad1",grup:"sivi",m:[0,81.7,-26],eksen:"y",r:10.6,hiz:-10,renk:9080988},{ad:"rad2",grup:"sivi",m:[0,81.7,-2],eksen:"y",r:10.6,hiz:-10,renk:9080988},{ad:"gpu1",grup:"sabit",m:[6,he.alt+2.6,-26],eksen:"y",r:8.2,hiz:-8,renk:5593958},{ad:"gpu2",grup:"sabit",m:[6,he.alt+2.6,-5],eksen:"y",r:8.2,hiz:-8,renk:5593958},{ad:"psu",grup:"sabit",m:[-3.5,18.5,-28],eksen:"y",r:9.4,hiz:7,renk:5593958}],sm={hava:[[[-11,66,52],[-11,66,34],[-11,66,8],[-11,66,-14],[-11,72,-30],[-11,94,-26]],[[-11,41.6,52],[-11,41.6,34],[-11,41.6,10],[-11,50,-12],[-11,66,-32],[-11,94,-26]],[[-11,17.2,52],[-11,17.2,34],[-11,24,8],[-11,36,-14],[-11,58,-34],[-11,94,-26]]],sivi:[[[-11,66,52],[-11,66,34],[-11,68,10],[-8,76,-2],[-7,86,-2],[-7,98,-2]],[[-11,41.6,52],[-11,41.6,34],[-11,41.6,10],[-10,56,-8],[-8,76,-22],[-7,86,-26],[-7,98,-26]],[[-11,17.2,52],[-11,17.2,34],[-11,24,8],[-11,36,-14],[-10,60,-32],[-9,80,-34],[-9,96,-30]]]};var $h=Me.z-Me.d/2,ms=n=>Me.x+n,rm=1776673,H1=8146431,qh=12896463,Zh=1513500,W1=n=>-70.4-.65*n,ce=(n,t,e)=>new P(n,t,e);function Kh(n,t){let e=n.map(r=>r.isVector3?r.clone():new P(...r)),i=new sa,s=e[0];for(let r=1;r<e.length-1;r++){let a=e[r-1],o=e[r],l=e[r+1],c=Math.min(t,a.distanceTo(o)/2,o.distanceTo(l)/2),u=o.clone().addScaledVector(a.clone().sub(o).normalize(),c),d=o.clone().addScaledVector(l.clone().sub(o).normalize(),c);s.distanceTo(u)>1e-4&&i.add(new hr(s,u)),i.add(new dr(u,o,d)),s=d}return i.add(new hr(s,e[e.length-1])),i}var Li=$h-1,Rs={usb:(n,t)=>({parcalar:[Ae(pt(2.4,.95,1.1,n,t,Li-.55),qh),Ae(pt(2.9,1.45,1.1,n,t,Li-1.65),Zh)],uc:Li-2.2}),hdmi:(n,t)=>({parcalar:[Ae(pt(2.8,.85,1.2,n,t,Li-.6),qh),Ae(pt(3.3,1.35,1.4,n,t,Li-1.9),Zh)],uc:Li-2.6}),jak:(n,t,e)=>({parcalar:[Ae(se(.5,1,n,t,Li-.5,{eksen:"z",seg:10}),qh),Ae(se(.8,1.5,n,t,Li-1.75,{eksen:"z",seg:12}),e)],uc:Li-2.5}),guc:(n,t)=>({parcalar:[Ae(pt(3.6,2.5,2.6,n,t,Li-1.5),Zh),Ae(pt(2.2,1.2,.5,n,t,Li-.3),3816773)],uc:Li-2.8})},tr=n=>$h+(n+43);function X1(){let n=[],t=ms(7),e=23.6,i=tr(wa.levha),s=13028307,r=8357264,a=1053206,o=10133674;n.push(Ae(pt(e,3*wa.yuva,.3,t,$e(5),i),s)),n.push(Ae(pt(e,wa.yuva,.3,t,$e(2),i),s));for(let c of[$e(5)-wa.yuva/2,$e(5)+wa.yuva/2])n.push(Ae(pt(e,.14,.34,t,c,i),r));for(let c of[-4,18])for(let u of[$e(5)+5,$e(5)-5,$e(2)])n.push(Ae(se(.42,.12,ms(c),u,i-.2,{eksen:"z",seg:10}),13620186));let l=(c,u,d,h)=>{n.push(Ae(pt(d,h,.4,ms(c),u,tr(-43.82)),a)),n.push(Ae(pt(d-.5,.4,.46,ms(c),u-h/2+.32,tr(-43.82)),o))};for(let c of ji.dp)l(c,ji.y,2.4,1);l(ji.hdmi,ji.y,2.8,1.1);for(let c of[13.8,15.6,17.4])for(let u of[-3.8,-1.9,0,1.9,3.8])n.push(Ae(pt(1.3,.5,.36,ms(c),ji.y+u,tr(-43.8)),a));for(let c of Lo.sma)n.push(Ae(se(.6,.9,ms(c),$e(2),tr(-44.2),{eksen:"z",seg:6}),14726734)),n.push(Ae(se(.52,1.1,ms(c),$e(2),tr(-45.2),{eksen:"z",seg:10}),1381914)),n.push(Ae(se(.36,8,ms(c),$e(2)+4,tr(-45.4),{eksen:"y",seg:10}),1711136)),n.push(Ae(se(.4,.5,ms(c),$e(2)+8.1,tr(-45.4),{eksen:"y",seg:10}),2764083));return n}function Y1({klavye:n,fare:t,kamera:e,kulaklik:i,yazici:s,mikrofon:r,hoparlor:a,monitor:o},l){let c=m=>ms(m),u=m=>W1(m),d=[],h=(m,y,g,p,M,E,_,w=.27,A=2.2)=>{let R=[...M,...E,..._,ce(p.x,p.y,p.uc)];d.push({id:m,ad:y,hedef:g,fis:p.parcalar,yol:Kh(R,A),r:w})},f=(m,y)=>ce(m,y,$h);{let m=pe.usb[3],y=Rs.usb(c(m.x),m.y);h("kulaklik","Kulakl\u0131k kablosu",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[i.ucu.clone(),ce(i.ucu.x+1.8,.35,i.ucu.z+4)],[ce(96,.35,48),ce(-64,.35,48),ce(-64,.35,u(0)),ce(c(m.x),.35,u(0))],[ce(c(m.x),m.y,u(0))],.27)}{let m=pe.pembe,y=Rs.jak(c(m.x),m.y,14708890);h("mikrofon","Mikrofon kablosu",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[r.ucu.clone(),ce(r.ucu.x,.35,r.ucu.z-3)],[ce(-58,.35,24),ce(-63.1,.35,24),ce(-63.1,.35,u(1)),ce(c(m.x),.35,u(1))],[ce(c(m.x),m.y,u(1))],.24)}{let m=pe.usb[0],y=Rs.usb(c(m.x),m.y);h("klavye","Klavye kablosu",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[n.arka.clone(),ce(n.arka.x-3,.35,n.arka.z-4)],[ce(-30,.35,2),ce(-62.2,.35,2),ce(-62.2,.35,u(2)),ce(c(m.x),.35,u(2))],[ce(c(m.x),m.y,u(2))],.27)}{let m=pe.usb[1],y=Rs.usb(c(m.x),m.y);h("fare","Fare kablosu",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[t.arka.clone(),ce(t.arka.x,.35,t.arka.z-3)],[ce(58,.35,-6),ce(-61.3,.35,-6),ce(-61.3,.35,u(3)),ce(c(m.x),.35,u(3))],[ce(c(m.x),m.y,u(3))],.25)}{let m=pe.yesil,y=Rs.jak(c(m.x),m.y,3781991);h("hoparlor","Hoparl\xF6r kablosu",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[a.arka[0].clone().add(ce(-2,0,0)),ce(-55,.35,-58.5)],[ce(-55,.35,u(4)),ce(c(m.x),.35,u(4))],[ce(c(m.x),m.y,u(4))],.27)}{let m=l?{x:ji.hdmi,y:ji.y}:pe.hdmi,y=Rs.hdmi(c(m.x),m.y);h("monitor","Ekran kablosu (HDMI)",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[o.arka.clone(),ce(o.arka.x,9,cn.z-10),ce(o.arka.x,.35,cn.z-13)],[ce(o.arka.x-1,.35,u(5)),ce(c(m.x),.35,u(5))],[ce(c(m.x),m.y,u(5))],.3)}{let m=pe.usb[2],y=Rs.usb(c(m.x),m.y);h("kamera","Kamera kablosu",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[e.ucu.clone(),ce(6.5,66.2,cn.z-6),ce(6.5,30,cn.z-6.3),ce(6.5,2.4,cn.z-6.3),ce(6.5,.35,cn.z-10)],[ce(6.5,.35,u(6)),ce(c(m.x),.35,u(6))],[ce(c(m.x),m.y,u(6))],.22)}{let m=pe.usb[4],y=Rs.usb(c(m.x),m.y);h("yazici","Yaz\u0131c\u0131 kablosu",f(c(m.x),m.y),{...y,x:c(m.x),y:m.y},[s.arka.clone(),ce(s.arka.x-1,.35,s.arka.z-3)],[ce(76,.35,u(7)),ce(c(m.x),.35,u(7))],[ce(c(m.x),m.y,u(7))],.27)}{let m=Rs.guc(c(pe.guc.x),pe.guc.y);d.push({id:"guc",ad:"G\xFC\xE7 kablosu (prize)",hedef:f(c(pe.guc.x),pe.guc.y),fis:m.parcalar,r:.45,yol:Kh([ce(c(pe.guc.x),pe.guc.y,m.uc),ce(c(pe.guc.x),pe.guc.y,-75.2),ce(c(pe.guc.x),pe.guc.y-3,-77.4),ce(c(pe.guc.x),-12,-77.6)],2.6)})}{let m=a.arka[0].clone().add(ce(2.2,0,0)),y=a.arka[1].clone();d.push({id:"hoparlor-arasi",ad:"Hoparl\xF6rler aras\u0131 kablo",hedef:m,fis:[],r:.22,yol:Kh([m,ce(m.x,.35,-57.2),ce(0,.35,-57.2),ce(3,1.5,-57.2),ce(10,1.5,-57.2),ce(13,.35,-57.2),ce(y.x,.35,-57.2),y],2.2)})}return d}function am(n){En();let t={},e=new le,i=d=>{let h=Y1(n,d),f=[],m={},y=0;for(let g of h){let p=Math.max(24,Math.round(g.yol.getLength()*.6)),M=Ae(new Hi(g.yol,p,g.r,6,!1).toNonIndexed(),rm),E=y;y+=M.attributes.position.count,m[g.id]=[E,y],f.push(M);for(let _ of g.fis){let w=_.index?_.toNonIndexed():_;f.push(w),y+=w.attributes.position.count}}if(d)for(let g of X1()){let p=g.index?g.toNonIndexed():g;f.push(p),y+=p.attributes.position.count}return{geo:Js(f,!1),aralik:m,kablolar:h.map(g=>({id:g.id,ad:g.ad,hedef:g.hedef}))}};t[1]=i(!1);let s=1,r=t[1],a=new Et(r.geo,ee.renkli);a.name="kablolar",a.matrixAutoUpdate=!1,a.userData.dinamik=!0;let o=(d,h)=>{let f=r.aralik[d];if(!f)return;e.set(h);let m=r.geo.attributes.color;for(let y=f[0];y<f[1];y++)m.setXYZ(y,e.r,e.g,e.b);m.needsUpdate=!0},l=null,c=d=>{l&&o(l,rm),l=d,d&&o(d,H1)},u=d=>{d!==s&&(c(null),s=d,t[d]||(t[d]=i(d===2)),r=t[d],a.geometry=r.geo)};return{mesh:a,kablolar:t[1].kablolar,izle:c,dersAyarla:u,izlenen:()=>l}}var q1='"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif',Ea={},Kc=2048,$c=1024,Z1={ram:[128,448],gpuArka:[144,352],pin24:[80,352],cpu:[224,272],hdd:[352,248],psu:[384,232],sata:[288,200],genel:[192,192],m2:[448,128],pil:[112,112],wifi:[192,80],radFin:[640,64],beyaz:[64,64]},K1=[["ram","gpuArka","pin24","cpu","hdd"],["psu","sata","genel"],["m2","pil","wifi"],["radFin","beyaz"]],Jh={pcb:[0,0,1024,832],gpuYan:[0,842,864,170]};(()=>{let n=0;for(let t of K1){let e=1032,i=0;for(let s of t){let[r,a]=Z1[s];Jh[s]=[e,n,r,a],e+=r+8,i=Math.max(i,a)}n+=i+8}})();function om(n,t){let e=Jh[t];if(!e)throw new Error("atlas yok: "+t);let i=(e[0]+.6)/Kc,s=(e[2]-1.2)/Kc,r=1-(e[1]+.6)/$c,a=(e[3]-1.2)/$c,o=n.attributes.uv;for(let l=0;l<o.count;l++)o.setXY(l,i+o.getX(l)*s,r-(1-o.getY(l))*a);return o.needsUpdate=!0,n}var jh=(n,t)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]};function Ne(n,t,e,i,s,r,a="left",o=700,l=0){n.save(),n.translate(e,i),l&&n.rotate(l),n.font=`${o} ${s}px ${q1}`,n.fillStyle=r,n.textAlign=a,n.textBaseline="middle",n.fillText(t,0,0),n.restore()}var Aa=(n,t,e,i,s,r,a=2)=>{n.strokeStyle=r,n.lineWidth=a,n.strokeRect(t,e,i,s)},De=n=>(n-wn.z0)/(wn.z1-wn.z0)*1024,Be=n=>(wn.y1-n)/(wn.y1-wn.y0)*832;function $1(n){let t=Io(45182);n.fillStyle="#15181c",n.fillRect(0,0,1024,832),n.lineWidth=1.4;for(let a=0;a<520;a++){let o=t()*1024,l=t()*832,c=20+t()*90,u=t()<.5,d=t();n.strokeStyle=d<.7?"rgba(48,56,66,0.75)":"rgba(86,70,36,0.55)",n.beginPath(),n.moveTo(o,l),u?(n.lineTo(o+c,l),n.lineTo(o+c+c*.4,l+c*.4)):(n.lineTo(o,l+c),n.lineTo(o+c*.4,l+c+c*.4)),n.stroke()}let e=[[-40.2,31.4],[-40.2,66],[-40.2,77.6],[-3,31.4],[-3,53],[-3,77.6],[18.4,31.4],[18.4,54],[18.4,77.6]];for(let[a,o]of e)n.fillStyle="#b8944a",n.beginPath(),n.arc(De(a),Be(o),15,0,7),n.fill(),n.fillStyle="#15181c",n.beginPath(),n.arc(De(a),Be(o),8,0,7),n.fill();for(let a=0;a<26;a++){let o=-36+a%13*1.25,l=58+Math.floor(a/13)*14+a%5*.2;n.fillStyle=a%3?"#8d939e":"#2e3239",n.beginPath(),n.arc(De(o),Be(l),9,0,7),n.fill()}for(let a=0;a<16;a++)n.fillStyle="#23262c",n.fillRect(De(-30+a*1.1),Be(72.2),14,14),n.fillStyle="#3d424b",n.fillRect(De(-30+a*1.1)+2,Be(72.2)+2,10,10);let i="rgba(224,229,238,0.88)",s="rgba(224,229,238,0.55)",r=(a,o,l,c,u)=>{Aa(n,De(a),Be(l+c/2),De(o)-De(a),c/(wn.y1-wn.y0)*832,i,2),Ne(n,u,De(a)+8,Be(l+c/2)-12,14,i)};r(-40.6,-22.8,51.6,1,"PCIe x16"),r(-40.6,-35.6,59.8,1,"PCIe x1");for(let a=0;a<4;a++){let o=-9.5+1.7*a;n.strokeStyle=i,n.lineWidth=2,n.strokeRect(De(o-.5),Be(74.8),.9/61*1024,(74.8-47.9)/48.8*832)}Ne(n,"DDR5  A1  A2  B1  B2",De(-9.5),Be(46.8),13,s),Aa(n,De(-25.3),Be(68.2),De(-15.7)-De(-25.3),Be(59.4)-Be(68.2),i,2),Ne(n,"CPU",De(-20.5),Be(63.8),20,s,"center"),Aa(n,De(-26.8),Be(38.4),De(-10.2)-De(-26.8),Be(33.6)-Be(38.4),i,2),Ne(n,"M.2",De(-26.4),Be(39.6),13,i),Aa(n,De(.6),Be(41.2),De(8.4)-De(.6),Be(32.8)-Be(41.2),s,2),Ne(n,"\xC7\u0130P K\xDCMES\u0130",De(4.5),Be(37),12,s,"center"),Aa(n,De(16.8),Be(62.6),De(19.2)-De(16.8),Be(51.8)-Be(62.6),i,2),Ne(n,"ATX",De(15.6),Be(57.2),13,i,"center",700,-Math.PI/2);for(let a=0;a<4;a++)Aa(n,De(11.8),Be(31+a*1.2+1),De(15.5)-De(11.8),1/48.8*832,s,1.4);return Ne(n,"SATA",De(11.6),Be(36.7),12,s),Ne(n,"CPU_FAN",De(-29.6),Be(79-.8),12,s),Ne(n,"EATX12V",De(-30.5),Be(75.6),11,s),Ne(n,"BAT",De(-2),Be(37.4),11,s,"center"),Ne(n,"ANAKART  ATX",De(-14),Be(44.6),26,"rgba(224,229,238,0.35)"),Ne(n,"G/\xC7",De(-38.5),Be(65.5),17,s,"center",700,-Math.PI/2),n}function J1(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#dfe3e9"),i.addColorStop(.5,"#c4c9d1"),i.addColorStop(1,"#d9dde3"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(40,44,52,0.85)",Ne(n,"\u0130\u015ELEMC\u0130",t/2,e*.34,28,"rgba(46,50,58,0.9)","center",800),Ne(n,"\xC7EK\u0130RDEK 8",t/2,e*.5,17,"rgba(46,50,58,0.8)","center"),Ne(n,"4,2 GHz",t/2,e*.62,17,"rgba(46,50,58,0.8)","center");for(let s=0;s<10;s++)n.fillRect(16+s*8,e*.78,4,12+s%3*3);n.fillStyle="rgba(46,50,58,0.9)",n.beginPath(),n.moveTo(8,e-8),n.lineTo(28,e-8),n.lineTo(8,e-28),n.fill()}function j1(n,t,e){n.fillStyle="#3a3e46",n.fillRect(0,0,t,e);for(let i=0;i<28;i++)n.fillStyle=i%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.10)",n.fillRect(0,i*16,t,8);n.fillStyle="#2b2e35",n.fillRect(0,e*.18,t,e*.64),n.fillStyle="#7c4dff",n.fillRect(0,e*.18,t,6),n.fillRect(0,e*.82-6,t,6),Ne(n,"RAM  16 GB",t/2,e*.5-70,24,"#eef0f4","center",800,-Math.PI/2),Ne(n,"DDR5-5600",t/2+28,e*.5+30,17,"#c9ced8","center",700,-Math.PI/2)}function Q1(n,t,e){n.fillStyle="#15171b",n.fillRect(0,0,t,e),n.fillStyle="#1c4a37",n.fillRect(4,4,t-8,e-8);let i=(s,r,a,o,l)=>{n.fillStyle="#0c0d10",n.fillRect(s,r,a,o),n.strokeStyle="#444a54",n.lineWidth=1.2,n.strokeRect(s+2,r+2,a-4,o-4),l&&Ne(n,l,s+a/2,r+o/2,11,"#8a909b","center")};i(60,20,120,88,"BELLEK"),i(200,20,120,88,"BELLEK"),i(340,36,70,56,"DENETLEY\u0130C\u0130"),n.fillStyle="#d8dce2",n.fillRect(12,8,38,112),Ne(n,"NVMe  1 TB",31,64,13,"#2a2d33","center",800,-Math.PI/2),n.fillStyle="#c9a24a";for(let s=0;s<20;s++)n.fillRect(t-10-s*2,e-9,1,6)}function tb(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#a5abb5"),i.addColorStop(1,"#c4c9d1"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#20232a",n.fillRect(14,14,t-28,60),Ne(n,"SATA SSD",28,36,27,"#eef0f4","left",800),Ne(n,"500 GB  \xB7  2,5 in\xE7",28,60,14,"#b5bbc6"),Ne(n,"Kat\u0131 hal s\xFCr\xFCc\xFCs\xFC",22,e-28,14,"rgba(32,35,42,0.75)")}function eb(n,t,e){n.fillStyle="#aab0ba",n.fillRect(0,0,t,e),n.fillStyle="#d9dde3",n.fillRect(10,10,t-20,e-20),Ne(n,"HDD  1 TB",24,42,30,"#22252b","left",800),Ne(n,"7200 dev/dk  \xB7  3,5 in\xE7",24,74,15,"#3c4049"),Ne(n,"SATA 6 Gb/s",24,98,15,"#3c4049"),n.fillStyle="#22252b";for(let i=0;i<38;i++)n.fillRect(24+i*6.5,e-62,2+i%3,34);n.strokeStyle="#8f95a0",n.lineWidth=2,n.beginPath(),n.arc(t-74,e-70,40,0,7),n.stroke(),n.beginPath(),n.arc(t-74,e-70,8,0,7),n.stroke()}function nb(n,t,e){n.fillStyle="#16181c",n.fillRect(0,0,t,e),n.fillStyle="#e7eaee",n.fillRect(20,20,t-40,e-40),Ne(n,"G\xDC\xC7 KAYNA\u011EI",36,52,26,"#1a1c20","left",800),Ne(n,"650 W",t-40,54,34,"#1a1c20","right",800),Ne(n,"Giri\u015F 220-240 V  ~  50 Hz",36,92,14,"#3c4049"),[["+3,3 V","24 A"],["+5 V","20 A"],["+12 V","54 A"],["-12 V","0,3 A"]].forEach(([s,r],a)=>{let o=128+a*20;n.fillStyle=a%2?"#d5d9df":"#eceff3",n.fillRect(36,o-10,t-72,20),Ne(n,s,46,o,13,"#22252b"),Ne(n,r,t-46,o,13,"#22252b","right")}),n.fillStyle="#22252b";for(let s=0;s<30;s++)n.fillRect(36+s*4.4,e-38,2+s%2,18)}function ib(n,t,e){n.fillStyle="#ece7d9",n.fillRect(0,0,t,e);let i=12,s=e/i;for(let r=0;r<i;r++)for(let a=0;a<2;a++)n.fillStyle="#4a4b4f",n.fillRect(8+a*36,r*s+5,28,s-10),n.fillStyle="#16171a",n.fillRect(14+a*36,r*s+10,16,s-20)}function sb(n,t){let e=n.createRadialGradient(t*.4,t*.4,4,t/2,t/2,t/2);e.addColorStop(0,"#f2f4f7"),e.addColorStop(1,"#a9afb9"),n.fillStyle=e,n.fillRect(0,0,t,t),n.strokeStyle="#7c828d",n.lineWidth=2,n.beginPath(),n.arc(t/2,t/2,t*.38,0,7),n.stroke(),Ne(n,"CR2032",t/2,t/2-8,20,"#383c45","center",800),Ne(n,"3 V +",t/2,t/2+14,16,"#383c45","center")}function rb(n,t,e){n.fillStyle="#10242b",n.fillRect(0,0,t,e),n.fillStyle="#1c3b46",n.fillRect(4,4,t-8,e-8),n.fillStyle="#b9bfc9",n.fillRect(16,12,70,56),n.fillStyle="#8b919c",n.fillRect(22,18,58,44),Ne(n,"Wi-Fi",51,40,16,"#2a2d33","center",800),n.fillStyle="#0c0d10",n.fillRect(100,18,28,20),n.fillRect(136,18,28,20),n.fillStyle="#c9a24a";for(let i=0;i<16;i++)n.fillRect(100+i*4,e-12,2,8)}function ab(n,t,e){let i=Io(51966);n.fillStyle="#18201e",n.fillRect(0,0,t,e),n.lineWidth=1.5;for(let s=0;s<70;s++){let r=i()*t,a=i()*e,o=15+i()*50;n.strokeStyle=i()<.7?"rgba(60,76,72,0.8)":"rgba(120,98,50,0.55)",n.beginPath(),n.moveTo(r,a),n.lineTo(r+o,a),n.lineTo(r+o+10,a+10),n.stroke()}for(let s=0;s<40;s++)n.fillStyle=i()<.5?"#23282c":"#8d939e",n.fillRect(i()*t,i()*e,6+i()*8,4+i()*6)}function ob(n,t,e){n.fillStyle="#16181c",n.fillRect(0,0,t,e);for(let i=0;i<t;i+=4)n.fillStyle=i%8?"#5d6470":"#2b2f36",n.fillRect(i,3,2,e-6);n.fillStyle="#7a8190",n.fillRect(0,0,t,2),n.fillRect(0,e-2,t,2)}function lb(n,t,e){n.fillStyle="#1b1e23",n.fillRect(0,0,t,e),n.fillStyle="#22262d",n.fillRect(0,8,t,e-16);for(let i=0;i<46;i++)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(110+i*12,36,5,e-72);n.fillStyle="#7c4dff",n.fillRect(0,0,t,6),n.fillRect(0,e-6,t,6),Ne(n,"EKRAN KARTI",34,e/2,40,"#eef0f4","left",800)}function cb(n,t,e){n.fillStyle="#2a2e35",n.fillRect(0,0,t,e);for(let i=0;i<44;i++)n.fillStyle=i%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",n.fillRect(0,i*8,t,4);n.fillStyle="#7c4dff",n.fillRect(0,0,6,e),Ne(n,"ARKA PLAKA",t/2,e/2,22,"#cfd4de","center",800,-Math.PI/2)}function ub(n,t,e){n.fillStyle="#fff",n.fillRect(0,0,t,e)}var hb={pcb:n=>$1(n),gpuYan:lb,ram:j1,cpu:J1,m2:Q1,sata:tb,hdd:eb,psu:nb,pin24:ib,pil:(n,t)=>sb(n,t),wifi:rb,genel:ab,radFin:ob,gpuArka:cb,beyaz:ub};function lm(n=4){let t=performance.now(),[e,i]=jh(Kc,$c);i.fillStyle="#ffffff",i.fillRect(0,0,Kc,$c);for(let[r,a]of Object.entries(hb)){let[o,l,c,u]=Jh[r];i.save(),i.beginPath(),i.rect(o,l,c,u),i.clip(),i.translate(o,l),a(i,c,u),i.restore()}let s=new Bi(e);return s.colorSpace=pn,s.minFilter=Ti,s.magFilter=vn,s.anisotropy=n,Ea.atlas=Math.round((performance.now()-t)*10)/10,s}function cm(n=4){let t=performance.now(),[e,i]=jh(128,128);i.clearRect(0,0,128,128),i.fillStyle="#5a606a",i.fillRect(0,0,128,128),i.globalCompositeOperation="destination-out";let s=16,r=s*.866;for(let o=0;o<128/r+1;o++)for(let l=0;l<128/s+1;l++){i.beginPath();let c=(l+(o%2?.5:0))*s,u=o*r;for(let d=0;d<6;d++){let h=Math.PI/3*d+Math.PI/6;i.lineTo(c+Math.cos(h)*7.45,u+Math.sin(h)*7.45)}i.closePath(),i.fill()}let a=new Bi(e);return a.colorSpace=pn,a.wrapS=a.wrapT=yi,a.anisotropy=n,Ea.filtre=Math.round((performance.now()-t)*10)/10,a}function um(n,t=4){let[e,i]=jh(128,64*n.length);i.fillStyle="#000",i.fillRect(0,0,128,64*n.length),i.lineWidth=7,i.lineJoin="miter",i.lineCap="butt",n.forEach((r,a)=>{i.strokeStyle=r;let o=a*64;for(let l=0;l<2;l++){let c=l*64;i.beginPath(),i.moveTo(c+14,o+8),i.lineTo(c+40,o+32),i.lineTo(c+14,o+56),i.stroke()}});let s=new Bi(e);return s.colorSpace=pn,s.wrapS=s.wrapT=yi,s.anisotropy=t,s}var db=(n,t,e)=>new P(n,t,e);function Sr(n=[0,0,0]){let[t,e,i]=n,s={p:[],m:[],b:[]},r=(a,o,l,c)=>((t||e||i)&&o.translate(-t,-e,-i),om(o,c||"beyaz"),Ae(o,l),s[a].push(o),o);return{orijin:n,liste:s,p:(a,o=2237739,l)=>r("p",a,o,l),m:(a,o=11975878,l)=>r("m",a,o,l),b:(a,o=2369325,l)=>r("b",a,o,l)}}function wr(n,t,e){let i={};for(let s of["p","m","b"]){if(!n.liste[s].length)continue;let r=bi(n.liste[s],t[s]);r.name="ic-"+s,e.add(r),i[s]=r}return i}var fb=(n,t)=>(t==="y"?n.rotateX(-Math.PI/2):t==="x"&&n.rotateY(Math.PI/2),n),er=(n,t,e,i,s)=>{let r=new Ke(n,t);return r.rotateY(-Math.PI/2),r.translate(e,i,s),r},hm=(n,t,e,i,s,r=!1)=>{let a=new Ke(n,t);return r&&a.rotateY(Math.PI),a.translate(e,i,s),a};function Qh(n){let t=n.attributes.uv,e=1e9,i=1e9,s=-1e9,r=-1e9;for(let a=0;a<t.count;a++)e=Math.min(e,t.getX(a)),s=Math.max(s,t.getX(a)),i=Math.min(i,t.getY(a)),r=Math.max(r,t.getY(a));for(let a=0;a<t.count;a++)t.setXY(a,(t.getX(a)-e)/(s-e||1),(t.getY(a)-i)/(r-i||1));return n}function td(n,t,e=48,i=8,s=.4){let r=new Gi(n.map(a=>a.isVector3?a:db(...a)),!1,"catmullrom",s);return{geo:new Hi(r,e,t,i,!1),egri:r}}function Cs(n,t,e,i,{radyal:s=8,parca:r=40,gerginlik:a=.4}={}){let{geo:o,egri:l}=td(t,e,r,s,a);return n.p(o,i),l}function Mr(n,t,e,i,s=15264494){let r=t.getPointAt(e),a=t.getTangentAt(e),o=Math.max(.3,i*.2),l=new jn(i+o*.45,o,6,18);l.scale(1,1,1.9),l.lookAt(a),l.translate(r.x,r.y,r.z),n.p(l,s);let c=new ln(o*2.6,o*2.2,o*2.6),u=new P(0,1,0).cross(a);u.lengthSq()<1e-4&&u.set(1,0,0),u.normalize(),c.lookAt(a),c.translate(r.x+u.x*(i+o*1.1),r.y+u.y*(i+o*1.1),r.z+u.z*(i+o*1.1)),n.p(c,s)}function pm(n){n.b(pt(.4,88.4,86,19.8,45.8,0),3159100),n.b(pt(39.2,.4,86,0,1.8,0),2237739),n.b(pt(39.2,88.4,.4,0,45.8,42.8),2237739),n.b(pt(39.2,88.4,.4,0,45.8,-42.8),2237739),n.b(pt(2,.4,86,-18.6,89.8,0),2237739),n.b(pt(2,.4,86,18.6,89.8,0),2237739),n.b(pt(39.2,.4,2,0,89.8,41.9),2237739),n.b(pt(39.2,.4,2,0,89.8,-41.9),2237739);let i=3882823;n.b(pt(.9,1.2,86,-19.15,89,0),i),n.b(pt(.9,1.2,86,-19.15,2.6,0),i),n.b(pt(.9,88.4,1.2,-19.15,45.8,42.2),i),n.b(pt(.9,88.4,1.2,-19.15,45.8,-42.2),i);let s=657932,r=(a,o,l,c)=>{n.b(Le(.5,c,l,.2,19.4,o,a,2),s),n.b(Le(.3,c-1,l-1,.2,19.2,o,a,2),328966)};r(23.5,46.5,4.2,7.4),r(-39,86.5,6,3.2),r(3,13,6,5.4),n.b(pt(.1,14,14,19.5,de.y,de.z),1316378)}function mm(n){for(let e of[14,45,76])n.m(se(.55,4.4,-19.75,e,-43,{seg:12}),12173e3);let t=[[-40.2,31.4],[-40.2,66],[-40.2,77.6],[-3,31.4],[-3,53],[-3,77.6],[18.4,31.4],[18.4,54],[18.4,77.6]];for(let[e,i]of t)n.m(se(.5,Xh-18.32,0,0,0,{eksen:"x",seg:6}).translate((Xh+18.32)/2,i,e),13214282),n.m(se(.52,.16,17.92,i,e,{eksen:"x",seg:12}),13620186)}function gm(n){let t=wn.x0,e=[t+wn.kalin/2,(wn.y0+wn.y1)/2,(wn.z0+wn.z1)/2];n.p(pt(wn.kalin,wn.y1-wn.y0,wn.z1-wn.z0,...e),16777215,"pcb");let i=de.z,s=de.y;n.p(pt(.7,10,9,17.65,s,i),2763825),n.m(pt(.35,.9,9.4,17.1,s+4.9,i),11844034),n.m(pt(.35,.9,9.4,17.1,s-4.9,i),11844034),n.m(pt(.35,10.8,.9,17.1,s,i-4.6),11844034),n.m(pt(.35,10.8,.9,17.1,s,i+4.6),11844034),n.m(se(.22,8.6,16.9,s+5.6,i+5.2,{eksen:"z",seg:8}),13685978),n.p(pt(.38,9,7.5,17,s,i),3103812),n.m(Le(.5,7.4,6.2,.18,16.55,s,i,2),16777215),n.p(er(6.2,7.4,16.29,s,i),16777215,"cpu");let r=2895927,a=3817288,o=(d,h,f,m,y,g,p)=>{n.m(pt(y-14.4,m-f,h-d,(y+14.4)/2,(f+m)/2,(d+h)/2),r);for(let M=0;M<g;M++)p==="z"?n.m(pt(.35,m-f-.5,.45,14.3,(f+m)/2,d+(M+.5)*((h-d)/g)),a):n.m(pt(.35,.45,h-d-.5,14.3,f+(M+.5)*((m-f)/g),(d+h)/2),a)};o(-34.5,-28,56.5,71.5,17.9,6,"z"),o(-27,-12,72.5,76,17.9,7,"z"),n.m(pt(1.4,7.6,7.6,17.3,37,4.5),r);for(let d=0;d<5;d++)n.m(pt(.4,7.4,.4,16.5,37,1.7+d*1.5),a);n.p(Le(6,9.2,7.6,.4,14.9,73.9,-37.8,2),2040103),n.m(pt(.3,9,7.2,11.8,73.9,-37.8),10133674);for(let d=0;d<4;d++)n.p(pt(1.7,1,qn.z1-qn.z0,17.1,qn.y(d)+.5,(qn.z0+qn.z1)/2),1447707),n.p(pt(.1,.5,2.6,16.2,qn.y(d)+.5,qn.z1-1.4),328966);n.p(pt(18-Zn.x0,Zn.y1-Zn.y0,Zn.z1-Zn.z0,(18+Zn.x0)/2,(Zn.y0+Zn.y1)/2,(Zn.z0+Zn.z1)/2),15525849),n.p(er(2.4,10.4,Zn.x0-.02,(Zn.y0+Zn.y1)/2,(Zn.z0+Zn.z1)/2),16777215,"pin24"),n.p(pt(18-Qi.x0,Qi.y1-Qi.y0,Qi.z1-Qi.z0,(18+Qi.x0)/2,(Qi.y0+Qi.y1)/2,(Qi.z0+Qi.z1)/2),2105894),n.p(Le(1.6,4.8,4.8,.5,17.2,di.y,di.z,2),1118741),n.m(se(2,1,16.4,di.y,di.z,{eksen:"x",seg:28}),11449534);{let d=new Ke(4,4);d.rotateY(-Math.PI/2),d.translate(15.88,di.y,di.z),n.m(d,16777215,"pil")}let l=1710879,c=14726734,u=(d,h,f)=>{n.p(pt(2,1,h-d,17,f,(d+h)/2),l),n.m(pt(.1,.36,h-d-.8,15.98,f,(d+h)/2),c),n.p(pt(.5,.9,.6,16.6,f,h+.4),14672872)};u(-40.6,-22.8,$e(5)),u(-40.6,-22.8,$e(3)),u(-40.6,-35.6,$e(2));for(let d=0;d<4;d++){let h=Oe.z0+Oe.adim*d,f=(Oe.y0+Oe.y1)/2,m=Oe.y1-Oe.y0;n.p(pt(1.6,m,1.4,17.2,f,h),l),n.m(pt(.1,m-1.2,.36,16.35,f,h),c);for(let y of[Oe.y0-.5,Oe.y1+.5])n.p(pt(1.5,1,1.1,17.2,y,h),13619928)}n.p(pt(.9,4.4,1,17.55,(Re.y0+Re.y1)/2,Re.z0-.6),1447707),n.m(se(.45,.3,17.2,(Re.y0+Re.y1)/2,Re.z1+.7,{eksen:"x",seg:10}),13620186)}function ym(n){let t=de.y,e=de.z,i=16.2,s=11186878;n.m(se(2.5,.2,i,t,e,{eksen:"x",seg:24}),s),n.m(pt(.2,.5,6,i-.02,t,e),s),n.m(pt(.2,6,.5,i-.02,t,e),s),n.m(se(.9,.24,i-.03,t+1.6,e-1.4,{eksen:"x",seg:14}),s)}function xm(n){let t=(Oe.y0+Oe.y1)/2+.4,e=Oe.y1-Oe.y0-.4,i=(Oe.xAlt+Oe.xUst)/2,s=Oe.xAlt-Oe.xUst;for(let r of Oe.dolu){let a=Oe.z0+Oe.adim*r;n.m(pt(s,e,1.5,i,t,a),3817030),n.m(pt(.5,e,1.7,Oe.xUst+.25,t,a),10133674),n.p(hm(s-.6,e-1.2,i,t,a+.77),16777215,"ram"),n.p(hm(s-.6,e-1.2,i,t,a-.77,!0),16777215,"ram"),n.m(pt(.5,e-.6,1,Oe.xAlt+.25,t,a),14726734),n.p(pt(.1,e-.6,1.1,Oe.xAlt-.1,t,a),1920312)}}function _m(n){let t=de.y,e=de.z,i=(Sn.z0+Sn.z1)/2,s=Sn.y,r=26;n.m(pt(.85,8.4,7.6,15.675,t,e),13225686),n.m(pt(.5,2.6,14,15,t,e),3027514),n.m(se(.6,.7,14.9,t,e-6.4,{eksen:"x",seg:10}),13620186),n.m(se(.6,.7,14.9,t,e+6.4,{eksen:"x",seg:10}),13620186);for(let l=0;l<r;l++){let c=Sn.x1-l*(Sn.x1-Sn.x0)/(r-1);n.m(pt(.14,s,Sn.z1-Sn.z0,c,t,i),l%2?12830928:13817564)}let a=[-3.2,-1.1,1.1,3.2],o=[1.4,-1.4,1.4,-1.4];a.forEach((l,c)=>{n.m(se(.6,25,3.2,t+o[c],i+l,{eksen:"x",seg:12}),13203258),n.m(se(.62,.2,Sn.x0-.8,t+o[c],i+l,{eksen:"x",seg:12}),14256714)}),n.p(pt(.5,s,Sn.z1-Sn.z0,Sn.x0-.45,t,i),1513500),Do(n,[(Sn.x0+Sn.x1)/2,t,Sn.fanZ],"z",Sn.fanBoy,Sn.fan,8.6,1908773)}function Do(n,t,e,i,s,r,a=1908773){let o=[Cp(i,i,r,s),se(2.6,s*.7,0,0,0,{eksen:"z",seg:18})];for(let l=0;l<3;l++){let c=pt(r-2,.55,s*.35,(r+2)/2,0,0);c.rotateZ(l*2.094+.5),o.push(c)}for(let l of[-1,1])for(let c of[-1,1])o.push(se(.5,s+.12,l*(i/2-1.1),c*(i/2-1.1),0,{eksen:"z",seg:8}));o.forEach((l,c)=>{Qh(l),fb(l,e),l.translate(t[0],t[1],t[2]),n.p(l,c===1?2764083:a)})}function vm(n){let t=de.y,e=de.z,i=we.pompaR,s=(we.pompaX0+we.pompaX1)/2;n.p(se(i,we.pompaX1-we.pompaX0,s,t,e,{eksen:"x",seg:40}),1842723),n.m(se(i+.05,.3,we.pompaX0+.15,t,e,{eksen:"x",seg:40}),10133933),n.m(se(3.3,.3,15.95,t,e,{eksen:"x",seg:28}),13203258);for(let r of[-4.4,4.4])for(let a of[-4.4,4.4])n.m(se(.5,.9,15.6,t+r,e+a,{eksen:"x",seg:10}),13620186);for(let r of[-1.7,1.7])n.m(se(1,2.2,s,t+i+.3,e+r,{seg:14}),12962514),n.p(se(1.3,.7,s,t+i+1.1,e+r,{seg:14}),1118741)}var bm=()=>se(we.pompaR-.55,.12,we.pompaX0-.05,de.y,de.z,{eksen:"x",seg:36});function Mm(n){let t=(we.radY0+we.radY1)/2,e=(we.radX0+we.radX1)/2,i=we.radY1-we.radY0;n.m(pt(we.radX1-we.radX0,i,48,e,t,-14),16777215),n.p(er(48,i,we.radX0-.03,t,-14),16777215,"radFin");{let s=new Ke(48,we.radX1-we.radX0);s.rotateX(-Math.PI/2),s.rotateY(Math.PI/2),s.translate(e,we.radY1+.03,-14),n.p(s,16777215,"radFin")}n.m(pt(we.radX1-we.radX0,i,3.4,e,t,-39.7),2369325),n.m(pt(we.radX1-we.radX0,i,3.4,e,t,11.7),2369325);for(let s of[8,4])n.m(se(.95,1.8,s,86.9,14.3,{eksen:"z",seg:14}),12962514),n.p(se(1.3,.6,s,86.9,15.4,{eksen:"z",seg:14}),1118741);n.m(pt(.2,i+.1,.4,we.radX0-.05,t,-37.2),8028560),Do(n,[0,81.7,-26],"y",24,5,11.4,1908773),Do(n,[0,81.7,-2],"y",24,5,11.4,1908773)}var Sm=1.05,Jc=(we.pompaX0+we.pompaX1)/2,dm=de.z+1.7,fm=de.z-1.7,jc=de.y+we.pompaR+1.8,ed={A:[[Jc,jc,dm],[Jc-.1,jc+2.4,dm],[10.4,74.2,-16.4],[7.2,73.2,-10],[6.6,72.9,0],[6.8,73.3,8.5],[7.6,77.2,15.6],[8,83.6,19],[8,86.6,18.4],[8,86.9,15.6]],B:[[4,86.9,15.6],[4,86.7,18.8],[4,82.2,21.4],[5,74.4,17.6],[5.8,70.8,8],[6,70.5,-2],[6.6,70.7,-12],[9.2,71.6,-19.4],[11.8,72.4,-21.8],[Jc-.1,jc+1.6,fm],[Jc,jc,fm]]};function wm(n){let t=he.y,e=(he.x0+he.x1)/2,i=(he.z0+he.z1)/2;n.p(pt(he.x1-he.x0,.32,he.z1-he.z0,e,t,i),16777215,"genel"),n.m(pt(1,.34,17.8,17.1,t,-31.9),14726734);{let c=new Vi;c.moveTo(he.x0+.2,-39.5),c.lineTo(he.x1-.5,-39.5),c.lineTo(he.x1-.5,12.5),c.lineTo(he.x0+.2,12.5),c.closePath();let u=new rs;u.absarc(e,-5,6.8,0,Math.PI*2,!0),c.holes.push(u);let d=new as(c,{depth:.45,bevelEnabled:!1,curveSegments:24});Qh(d),d.rotateX(Math.PI/2),d.translate(0,t+.2+.45,0),n.m(d,16777215,"gpuArka")}let s=he.alt,r=t-.16,a=r-s,o=(s+r)/2,l=2040359;n.p(pt(.5,a,52,he.x0+.25,o,-13.5),l),n.p(pt(.5,a,52,he.x1-.25,o,-13.5),l),n.p(pt(he.x1-he.x0,a,.5,e,o,-39.25),l),n.p(pt(he.x1-he.x0,a,.5,e,o,12.25),l);{let c=new Vi;c.moveTo(he.x0,-39.5),c.lineTo(he.x1,-39.5),c.lineTo(he.x1,12.5),c.lineTo(he.x0,12.5),c.closePath();for(let d of[-26,-5]){let h=new rs;h.absarc(e,d,8.6,0,Math.PI*2,!0),c.holes.push(h)}let u=new as(c,{depth:.6,bevelEnabled:!1,curveSegments:28});Qh(u),u.rotateX(Math.PI/2),u.translate(0,s+.6,0),n.p(u,1579550)}n.p(er(52,a-.8,he.x0-.02,o,-13.5),16777215,"gpuYan");for(let c of[-26,-5]){let u=he.alt+2.2;n.p(se(2.2,.8,e,u,c,{seg:16}),2764083);for(let d=0;d<3;d++){let h=pt(6.4,.3,.5,e+4.5,u,c);h.translate(-e,0,-c),h.rotateY(d*2.094+.4),h.translate(e,0,c),n.p(h,1579550)}}n.m(pt(he.x1-he.x0+.4,12.2,.2,e,t-.1,-42.3),13028307);for(let c of[11,7.4,3.8])n.m(pt(2.4,1,2.6,c,t+.6,-40.9),4869976);n.m(pt(2.8,1.1,2.6,-.4,t+.6,-40.9),4869976),n.p(pt(3.4,2.4,3.6,-2.9,t-1.6,10),1381914)}function Am(n){let t=In.y,e=(In.x0+In.x1)/2,i=(In.z0+In.z1)/2;n.p(pt(In.x1-In.x0,.3,In.z1-In.z0,e,t,i),16777215,"genel"),n.p(pt(5.6,.32,3.8,e-2.2,t+.3,i),16777215,"wifi"),n.m(pt(.9,.2,5,17.1,t,-38.1),14726734),n.m(pt(In.x1-In.x0+.4,3.8,.2,e,t-.4,-42.3),13028307);for(let s of[5.2,8.4])n.m(se(.5,1.4,s,t-.4,-41.6,{eksen:"z",seg:10}),14726734);for(let[s,r]of[[5.2,0],[8.4,1]])Cs(n,[[s,t-.4,-41],[s+.6,t+.2,-39.5],[e+(r?.6:-.6),t+.5,-38.6]],.14,1381914,{radyal:5,parca:10})}function Em(n){let t=(sn.x0+sn.x1)/2,e=(sn.y0+sn.y1)/2,i=(sn.z0+sn.z1)/2;n.p(Le(sn.x1-sn.x0,sn.y1-sn.y0,sn.z1-sn.z0,.5,t,e,i,2),1711136),n.p(er(sn.z1-sn.z0-1,sn.y1-sn.y0-1,sn.x0-.03,e,i),16777215,"psu");let s=-3.5,r=-28,a=sn.y1+.15;for(let o of[10.4,7.2,4]){let l=new jn(o,.22,5,36);l.rotateX(Math.PI/2),l.translate(s,a,r),n.m(l,3817030)}for(let o=0;o<3;o++){let l=pt(20.8,.3,.45,0,0,0);l.rotateY(o*Math.PI/3),l.translate(s,a,r),n.m(l,3817030)}n.p(pt(22.4,.3,22.4,s,sn.y1+.02,r),921362),n.p(se(2.4,.5,s,sn.y1-.4,r,{seg:16}),2764083);for(let o=0;o<4;o++)for(let l=0;l<2;l++)n.p(pt(4.6,2.6,.5,-13+o*6.2,5.6+l*8.6,sn.z1+.2),921362)}function Tm(n){let t=(Re.y0+Re.y1)/2,e=(Re.z0+Re.z1)/2;n.p(pt(.32,Re.y1-Re.y0,Re.z1-Re.z0,Re.x,t,e),16777215,"genel"),n.p(er(Re.z1-Re.z0,Re.y1-Re.y0,Re.x-.17,t,e),16777215,"m2");let i=(rn.y0+rn.y1)/2,s=(rn.z0+rn.z1)/2;n.m(Le(rn.x1-rn.x0,rn.y1-rn.y0,rn.z1-rn.z0,.3,(rn.x0+rn.x1)/2,i,s,2),16777215),n.m(er(rn.z1-rn.z0-.4,rn.y1-rn.y0-.4,rn.x0-.02,i,s),16777215,"sata"),n.b(pt(.4,rn.y1-rn.y0+2,rn.z1-rn.z0+1.2,19.1,i,s),1711136);for(let o of[-8.5,8.5])for(let l of[-5.5,5.5])n.m(se(.35,.3,rn.x0-.1,i+l,s+o,{eksen:"x",seg:8}),13620186);n.p(pt(1.1,3.6,1.8,17.9,33.2,rn.z0-.7),1381914);let r=(ze.y0+ze.y1)/2,a=(ze.z0+ze.z1)/2;n.m(pt(ze.x1-ze.x0,ze.y1-ze.y0,ze.z1-ze.z0,(ze.x0+ze.x1)/2,r,a),11449534),n.m(er(ze.z1-ze.z0-.5,ze.y1-ze.y0-.5,ze.x0-.02,r,a),16777215,"hdd"),n.p(pt(.5,ze.y1-ze.y0-1,1.4,17.8,r,ze.z0-.7),1002036),n.p(pt(2.4,5.4,1.4,16.2,6.8,ze.z0-.7),1184534),n.p(pt(2,3,1.4,16.2,11.8,ze.z0-.7),1184534),n.b(pt(.8,ze.y1-ze.y0+1.5,32,18.8,r,a),1711136),n.b(pt(6.2,.5,32,15.7,ze.y0-.45,a),1711136),n.b(pt(6.2,.5,32,15.7,ze.y1+.45,a),1711136);for(let o of[-12,12])for(let l of[ze.y0+2.5,ze.y1-2.5])n.m(se(.4,.4,ze.x0-.1,l,a+o,{eksen:"x",seg:8}),13620186)}function km(n,t){n.m(pt(31,9.3,.15,2.9,74.55,-42.45),12173257);let i=(s,r,a,o)=>n.m(pt(a+.5,o+.3,3,s,r,-42.45+1.6),3817288);i(t.hdmi.x,t.hdmi.y,3,1.05),t.usb.forEach(s=>i(s.x,s.y,2.6,1.2)),i(t.ag.x,t.ag.y,3.4,2.9);for(let s of["mavi","pembe","yesil"])n.m(se(1.1,3,t[s].x,t[s].y,-42.45+1.6,{eksen:"z",seg:14}),s==="mavi"?3832032:s==="pembe"?14708890:3781991);for(let s=0;s<7;s++)s===2||s===4||s===5||s===6||(n.m(pt(23.6,3.7,.15,7,$e(s),-42.45),9410210),n.m(se(.45,.3,-4.2,$e(s),-42.45+.2,{eksen:"z",seg:10}),13620186))}function Rm(n){let i=Cs(n,[[6,14.5,sn.z1+.5],[6,15.2,-9],[9,19,-3],[13,27,6],[14,38,14.2],[13,46,17.6],[13,51.6,18.2]],1.2,1776673,{radyal:10,parca:70});n.p(pt(3.6,10.8,2.6,13-.4,57.2,18.2),1381914),n.p(pt(.9,9,.5,11.3,57.2,18.2),2960947),Mr(n,i,.18,1.2),Mr(n,i,.36,1.2),Mr(n,i,.56,1.2);let s=Cs(n,[[10.6,77.5,-28.2],[6,78.6,-33],[5,80.5,-38.8],[13.8,84,-39.2],[18.2,86.5,-39],[19.45,86.5,-39]],.85,1776673,{radyal:10,parca:40});n.p(pt(3.4,2.4,4.6,12.6,77.5,-28.2),1381914),Mr(n,s,.5,.85);let r=Cs(n,[[-7.8,he.y-1.6,10],[-9,he.y+1,12.4],[-6,he.y+5.5,17.5],[2,he.y+6.5,21.5],[12,he.y+1.5,23.2],[19.45,46.5,23.5]],.95,1776673,{radyal:10,parca:60});n.p(pt(3.6,2.4,3.8,-6.4,he.y-1.6,10),1381914),Mr(n,r,.55,.95),Mr(n,r,.78,.95);let a=Cs(n,[[0,9.5,sn.z1+.5],[1,9.8,-9],[8,11,-2],[14,12.5,1],[19.45,13,3]],1,1776673,{radyal:10,parca:36});Mr(n,a,.4,1),Cs(n,[[-8,5.6,sn.z1+.5],[-4,5.2,-7],[4,5.4,0],[11.5,7.2,5.4],[15,7.4,ze.z0-1.2]],.6,2303274,{radyal:6,parca:30}),Cs(n,[[15.8,qn.y(0)+.5,qn.z1+.2],[14.6,29,11.6],[13.4,24.6,7.8],[14.2,18.4,5.4],[15.4,12.2,ze.z0-1.3]],.34,12858667,{radyal:6,parca:40}),n.p(pt(1.7,1.1,1.8,16.9,qn.y(0)+.5,qn.z1+.9),1118741),n.p(pt(1.6,1.8,1,15.9,12.2,ze.z0-1.5),1118741),Cs(n,[[15.8,qn.y(1)+.5,qn.z1+.2],[15.6,33.4,17.4],[16.8,33.6,rn.z0-1.4]],.34,12858667,{radyal:6,parca:20}),n.p(pt(1.7,1.1,1.8,16.9,qn.y(1)+.5,qn.z1+.9),1118741),ps.forEach((o,l)=>{let c=31+l*1.4+22,u=o+6,d=(u+c)/2;Cs(n,[[8,u,37.5],[12.4,u+1.2,35],[16.6,d+1,31.5],[17.5,d-1.4,27.5],[17,c+.8,24],[15.5,c,22]],.18,1381914,{radyal:5,parca:28})})}function Cm(n){for(let t of ps)Do(n,[0,t,39.7],"z",24,5,11.4,1908773)}function Pm(n){Do(n,[0,87.1,-24],"y",24,5,11.4,1908773)}var nr=(n,t,e)=>new P(n,t,e),nd=(Re.z0+Re.z1)/2,Ar=n=>n*n*(3-2*n),Im={minAdim:4,minPx:14},pb=1.75,Qc={cek:5,cik:33,yuk:10,geri:6},mb=3,gb=new tn({visible:!1});function Lm(n,{aniz:t=4}={}){let e=n.govde,i=new Ce;i.name="ic",i.visible=!1,n.grup.add(i);let s=new Ce,r=new Ce,a=new Ce,o=new Ce,l=new Ce,c=new Ce,u=new Ce,d=new Ce;s.name="ic-sabit",r.name="ic-hava",a.name="ic-egzoz",o.name="ic-sivi",l.name="ic-ram",c.name="ic-macun",u.name="ic-kapak",u.position.set(-19.75,0,-43),c.visible=!1,o.visible=!1,d.visible=!1,i.add(s,r,a,o,l,c,u,d);let h={hazir:!1,acik:!1,tur:"hava",kaldir:0,ram:0,calisiyor:!1,kapak:0,ms:{}},f=e.material,m=new Et(Le(.5,87,85.8,.2,0,45.5,43,2),f);m.castShadow=!1,m.receiveShadow=!0,u.add(m),e.userData.logoAcik&&u.add(e.userData.logoAcik);let y=[],g=[],p=(it,St,Pt,D,ut,$,bt,It,dt={})=>{let Gt=Xe({kesif:St,parca:"ic",...dt},Pt,D,ut,$,bt,It);return it.add(Gt),g.push(Gt),Gt},M=(it,St,Pt,D,ut)=>{y.push(hs(it,St,Pt,D,ut))};p(u,"yan-kapak",3,87,85.8,0,45.5,43),M(u,"yan-kapak",-1,56,58),p(s,"hava-akisi",38.9,87,84,.4,45.5,0),p(s,"anakart",1.2,48.8,61,17.9,54.4,-11),M(s,"anakart",17.2,70.6,12.5),p(s,"islemci",2.2,10.4,10,16.8,de.y,de.z),M(s,"islemci",16,de.y+7.4,de.z+5),p(s,"pcie-yuvasi",3,2.4,19,16.9,$e(3),-31.7),M(s,"pcie-yuvasi",16,$e(3),-26);let E=(he.alt+he.y)/2+.25,_=he.y-he.alt+1.3;p(s,"ekran-karti",he.x1-he.x0+.8,_,55.6,(he.x0+he.x1)/2,E,-14.4),M(s,"ekran-karti",he.x0-.6,he.y-1.4,6),p(s,"guc-kablolari",7,39,8.8,14.5,43.5,15.2),M(s,"guc-kablolari",13.2,44,16.5),p(s,"guc-kablolari",10,15,19,9.5,20.5,-3.5),p(s,"guc-kaynagi",31,17.7,29.5,-3.5,10.65,-27.75),M(s,"guc-kaynagi",-3.5,19.1,-28),p(s,"m2-ssd",2,Re.y1-Re.y0+1.2,Re.z1-Re.z0+1,Re.x,(Re.y0+Re.y1)/2,nd),M(s,"m2-ssd",16.4,(Re.y0+Re.y1)/2,nd),p(s,"sata-ssd",2.6,15,21,17.9,33.5,31),M(s,"sata-ssd",16.4,36.8,31),p(s,"hdd",6.4,21.5,30.5,16,12.75,22.25),M(s,"hdd",12.6,12.8,22),p(s,"veri-kablosu",3.5,18.5,7.5,14.75,20.75,8.75),M(s,"veri-kablosu",13,20.5,8.5),p(s,"bios-pili",2.5,4.6,4.6,16.75,di.y,di.z,Im),M(s,"bios-pili",15.4,di.y,di.z),p(s,"arka-panel",31,9.3,1.6,2.9,74.55,-42.3),M(s,"arka-panel",2.9,74.55,-42.3),p(s,"wifi-karti",14.6,2.6,6.6,10.1,In.y,-38.1),M(s,"wifi-karti",6.6,In.y+1.4,-38.1),p(s,"toz-filtresi",35.2,1.5,80,0,89.65,0),M(s,"toz-filtresi",-9,90.4,28),ps.forEach(it=>p(s,"kasa-fani",38,24.4,6.6,0,it,40.3)),M(s,"kasa-fani",-12.5,ps[1],39.7),p(r,"hava-sogutucu",26,19.4,14.4,3.5,de.y,-19.6),M(r,"hava-sogutucu",-9.6,de.y+7,-14.9);let w={minAdim:8,minPx:14};p(r,"isi-borusu",2.2,8,9,-8.9,de.y,-22.1,w),p(r,"isi-borusu",4,8,9,14.1,de.y,-22.1,w),M(r,"isi-borusu",-10,de.y-1.4,-22.4),p(a,"kasa-fani",24.4,5.4,24.4,0,87.1,-24),M(a,"kasa-fani",-12.6,87.1,-24),p(c,"termal-macun",1.4,7,7,16.2,de.y,de.z,Im),M(c,"termal-macun",15.5,de.y-4.2,de.z-1);let A=(Oe.y0+Oe.y1)/2;p(s,"ram",9.4,27.4,16,13.4,A,-5.4,{hacim:3500}),p(l,"ram",9,27.4,3.2,12.8,A,Oe.z0+Oe.adim*1),p(l,"ram",9,27.4,3.2,12.8,A,Oe.z0+Oe.adim*3),M(l,"ram",8.3,70,-6.1),p(o,"pompa-blogu",we.pompaX1-we.pompaX0+.4,2*we.pompaR+3.6,2*we.pompaR+.8,(we.pompaX0+we.pompaX1)/2,de.y+1.3,de.z),M(o,"pompa-blogu",we.pompaX0-.15,de.y-2,de.z+1.5),p(o,"radyator",25.2,6,55,0,87,-14,{hacim:3e3}),M(o,"radyator",-12.6,87,-26),p(o,"sogutma-hortumu",4.4,6.6,26,6.5,71.9,-1),M(o,"sogutma-hortumu",5.5,72.9,3);let R=["A","B"].map(()=>{let it=new Et(new Qe,gb);return it.name="hortum-vekili",it.userData={kesif:"sogutma-hortumu",parca:"ic",ince:!0,hacim:300},o.add(it),g.push(it),it});p(o,"sivi-sogutma",25.2,6,5.8,0,87,12.7),M(o,"sivi-sogutma",-12.6,87,12.5),p(o,"kasa-fani",24.4,5.4,24.4,0,81.7,-26),p(o,"kasa-fani",24.4,5.4,24.4,0,81.7,-2);let v=it=>{for(let St=it;St;St=St.parent)if(!St.visible)return!1;return!0},S=(it,St,Pt,D)=>()=>v(it)?it.localToWorld(nr(St,Pt,D)):null,I={"ic-kapak":S(u,-1,56,58),"ic-anakart":S(s,17,70.6,12.5),"ic-islemci":S(s,15.8,de.y+5.6,de.z),"ic-macun":S(c,15.5,de.y-3.8,de.z-1),"ic-hava":S(r,-9.6,de.y+7.6,-14.9),"ic-isi-borusu":S(r,-10,de.y-1.4,-22.4),"ic-ram":S(l,8.3,72,-6.1),"ic-m2":S(s,16.4,(Re.y0+Re.y1)/2,nd),"ic-sata-ssd":S(s,16.4,37.6,31),"ic-hdd":S(s,12.6,14.4,22),"ic-gpu":S(s,he.x0-.6,he.y-3,4),"ic-psu":S(s,-3.5,19.1,-28),"ic-pompa":S(o,we.pompaX0-.15,de.y-2,de.z+1.5),"ic-radyator":S(o,-12.6,87,-26),"ic-hortum":S(o,5.5,72.9,3),"ic-fan-on":S(s,-12.5,ps[1],39.7),"ic-fan-egzoz":S(a,-12.6,87.1,-24),"ic-fan-kule":S(r,-2,de.y,-12.6),"ic-wifi":S(s,6.6,In.y+1.4,-38.1),"ic-arka-panel":S(s,2.9,74.55,-42.3),"ic-pil":S(s,15.4,di.y,di.z),"ic-kablo24":S(s,8,19.2,-3),"ic-sata-kablo":S(s,13,20.5,8.5),"ic-akis-giris":S(s,-11,66,30),"ic-akis-cikis":S(s,-11,94,-26),"ic-wifi-arka":S(n.grup,Lo.sma[0],Lo.y+5,-45.4),"ic-arka-gpu":S(n.grup,ji.hdmi,ji.y+1,-45.4),"ic-arka-hdmi":S(n.grup,pe.hdmi.x,pe.hdmi.y+1.4,-44.8),"ic-arka-usb":S(n.grup,7.4,76.6,-44.8),"ic-arka-ag":S(n.grup,pe.ag.x,pe.ag.y+1.8,-44.8),"ic-arka-ses":S(n.grup,-7.6,76.3,-44.8),"ic-sivi-sicak":S(o,6.6,78,16.2),"ic-sivi-soguk":S(o,4.9,70.5,-5)},U=(it,St,Pt,D,ut,$)=>[Me.x+(it+D)/2,(St+ut)/2,Me.z+(Pt+$)/2,D-it,ut-St,$-Pt],G={"ic-anakart":U(17.3,30,-41.5,18.5,78.8,19.5),"ic-islemci":U(15.6,de.y-5.2,de.z-5,18,de.y+5.2,de.z+5),"ic-ram":U(8.5,Oe.y0-.5,-10.5,17.5,Oe.y1+.2,-3.5),"ic-m2":U(16.8,Re.y0-.2,Re.z0-.3,18,Re.y1+.2,Re.z1+.3),"ic-sata-ssd":U(16.6,26,20.5,19,41,41.5),"ic-hdd":U(12.8,2,7,19,23.5,37.5),"ic-gpu":U(he.x0-.5,he.alt-.4,-42,he.x1+.4,he.y+.9,13.4),"ic-psu":U(-18.6,1.8,-42.3,11.6,19.1,-13.6),"ic-pompa":U(we.pompaX0-.2,de.y-we.pompaR-.2,de.z-we.pompaR-.2,we.pompaX1+.2,de.y+we.pompaR+1.6,de.z+we.pompaR+.2),"ic-radyator":U(-12.4,84,-41.5,12.4,89.8,13.5),"ic-wifi":U(3,In.y-1.2,-41.4,17.4,In.y+1.2,-34.8),"ic-arka-panel":U(-12.6,69.9,-43,18.4,79.2,-42)},H=null,L,W,tt,J=null,ot=null,O=null,j=null,st=null,zt=null,xt=null,Xt=null,ne=[],Lt=Yh.map(it=>({...it,aci:.7*(it.m[0]+it.m[2]+1)%6.28,gor:!0})),et=[],rt={};function Tt(){if(h.hazir)return;let it=performance.now();H=lm(t),L=new Ie({map:H,vertexColors:!0,roughness:.55,metalness:.05}),W=new Ie({map:H,vertexColors:!0,roughness:.36,metalness:.9}),tt=new Ie({vertexColors:!0,roughness:.52,metalness:.32});let St={p:L,m:W,b:tt},Pt={},D=(ut,$)=>{let bt=performance.now();$(),Pt[ut]=Math.round((performance.now()-bt)*10)/10};D("sabit",()=>{let ut=Sr();pm(ut),mm(ut),gm(ut),Tm(ut),Em(ut),wm(ut),Am(ut),km(ut,pe),Rm(ut),Cm(ut);let $=wr(ut,St,s);for(let bt of["p","m"])$[bt]&&($[bt].castShadow=!0,$[bt].receiveShadow=!0);$.b&&($.b.castShadow=!1,$.b.receiveShadow=!0)}),D("hava",()=>{let ut=Sr();_m(ut);let $=wr(ut,St,r);for(let dt of["p","m"])$[dt]&&($[dt].castShadow=!0,$[dt].receiveShadow=!0);let bt=Sr();Pm(bt);let It=wr(bt,St,a);It.p&&(It.p.castShadow=!0,It.p.receiveShadow=!0)}),D("ram",()=>{let ut=Sr();xm(ut);let $=wr(ut,St,l);for(let bt of["p","m"])$[bt]&&($[bt].castShadow=!0,$[bt].receiveShadow=!0)}),D("macun",()=>{let ut=Sr();ym(ut),Xt=wr(ut,St,c).m}),D("sivi",()=>{let ut=Sr();vm(ut),Mm(ut);let $=wr(ut,St,o);for(let Nt of["p","m"])$[Nt]&&($[Nt].castShadow=!0,$[Nt].receiveShadow=!0);xt=new Ie({color:1184538,roughness:.4,metalness:.2,emissive:10189823,emissiveIntensity:0}),zt=new Et(bm(),xt),o.add(zt);let bt=um(["#ff8a3d","#58b0ff"],t),It=[ed.A,ed.B].map((Nt,ye)=>{let{geo:X,egri:yt}=td(Nt,Sm,80,10,.4),k=Math.max(2,Math.round(yt.getLength()/6)),B=X.attributes.uv;for(let ft=0;ft<B.count;ft++)B.setXY(ft,B.getX(ft)*k,(ye===0?.5:0)+B.getY(ft)*.5);let Z=new Gi(yt.getSpacedPoints(40).slice(6,35));return R[ye].geometry.dispose(),R[ye].geometry=new Hi(Z,30,mb,6,!1),X}),dt=new Ie({color:5067355,roughness:.42,metalness:.12,emissive:16777215,emissiveMap:bt,emissiveIntensity:0}),Gt=new Et(Js(It,!1),dt);Gt.castShadow=!0,Gt.receiveShadow=!0,Gt.name="hortumlar",o.add(Gt);for(let Nt of It)Nt.dispose();et.push({tex:bt,mal:dt,ad:"AB"})}),D("filtre",()=>{let ut=cm(t);ut.repeat.set(35.2/6,80/6);let $=new Ke(35.2,80);$.rotateX(-Math.PI/2),O=new Et($,new Ie({map:ut,transparent:!0,depthWrite:!1,side:bn,forceSinglePass:!0,roughness:.7,metalness:.3})),O.position.set(0,89.95,0),O.name="toz-filtresi",s.add(O)}),D("rotor",Dt),D("ok",ie),h.hazir=!0,Ea.hazirla=Math.round((performance.now()-it)*10)/10,Object.assign(Ea,Pt),Object.assign(h.ms,Ea),nt(),Qt()}let Jt=7;function Dt(){let it=new ln(1,3.2,.18);it.translate(.5,0,0),it.rotateX(.5);let St=new Ie({color:16777215,roughness:.55,metalness:.05,side:bn});J=new Es(it,St,Yh.length*Jt),J.frustumCulled=!1,J.name="fan-kanatlari",Lt.forEach((Pt,D)=>{for(let ut=0;ut<Jt;ut++)J.setColorAt(D*Jt+ut,new le(Pt.renk))}),J.instanceColor.needsUpdate=!0,i.add(J)}let kt=new on,jt=new zn,ht=new zn,gt=new P,vt=nr(0,0,1),Mt=new zn().setFromAxisAngle(nr(1,0,0),-Math.PI/2);function Ct(it){let St=nr(it.m[0],it.m[1],it.m[2]);return it.grup==="hava"&&St.add(r.position),St}function Qt(){J&&(Lt.forEach((it,St)=>{let Pt=Ct(it);jt.identity(),it.eksen==="y"&&jt.copy(Mt);for(let D=0;D<Jt;D++){ht.setFromAxisAngle(vt,it.aci+D*Math.PI*2/Jt),kt.quaternion.copy(jt).multiply(ht),gt.set(2.4,0,0).applyQuaternion(kt.quaternion),kt.position.copy(Pt).add(gt);let ut=it.gor?1:0;kt.scale.set((it.r-2.4)*ut||1e-4,ut||1e-4,ut||1e-4),kt.updateMatrix(),J.setMatrixAt(St*Jt+D,kt.matrix)}}),J.instanceMatrix.needsUpdate=!0)}let Vt=()=>{for(let it of Lt)it.gor=it.grup==="sabit"||it.grup==="hava"&&h.tur==="hava"||it.grup==="egzoz"&&h.tur==="hava"||it.grup==="sivi"&&h.tur==="sivi"},Yt=7;function ie(){for(let Pt of["hava","sivi"])rt[Pt]=sm[Pt].map(D=>new Gi(D.map(ut=>nr(...ut)),!1,"catmullrom",.3));let it=new Ka(1.15,4.4,10);it.translate(0,2.2,0);let St=new tn({color:16777215,transparent:!0,opacity:.94,depthWrite:!1});ot=new Es(it,St,3*Yt),ot.frustumCulled=!1,ot.renderOrder=3,ot.name="hava-oklari",ot.raycast=()=>{};for(let Pt=0;Pt<3*Yt;Pt++)ot.setColorAt(Pt,new le(5088255));d.add(ot)}let N=new le(4168703),Se=new le(16742959),re=new le,T=nr(0,1,0),x=nr(0,0,0),V=nr(0,0,0);function q(it){if(!ot)return;let St=rt[h.tur];for(let Pt=0;Pt<3;Pt++)for(let D=0;D<Yt;D++){let ut=(D/Yt+it*.16+Pt*.11)%1;St[Pt].getPointAt(ut,V),St[Pt].getTangentAt(ut,x),kt.position.copy(V),kt.quaternion.setFromUnitVectors(T,x);let $=Math.min(1,ut/.08),bt=Math.min(1,(1-ut)/.08),It=Ar(Math.min($,bt));kt.scale.set(It,It,It),kt.updateMatrix(),ot.setMatrixAt(Pt*Yt+D,kt.matrix);let dt=Math.min(1,Math.max(0,(ut-.38)/.4));re.copy(N).lerp(Se,dt),ot.setColorAt(Pt*Yt+D,re)}ot.instanceMatrix.needsUpdate=!0,ot.instanceColor.needsUpdate=!0}function nt(){r.visible=h.tur==="hava",a.visible=h.tur==="hava",o.visible=h.tur==="sivi",c.visible=h.tur==="hava"&&h.kaldir>.35,d.visible=h.calisiyor,Vt()}function At(it){h.kapak=it;let St=it>5e-4;St!==h.acik&&(h.acik=St,e.visible=!St,i.visible=St,St&&(Tt(),nt())),u.rotation.y=-Ar(it)*pb,u.updateMatrixWorld(!0)}function Ut(it){h.tur=it,it!=="hava"&&(h.kaldir=0),r.position.set(0,0,0),c.visible=!1,h.hazir?(nt(),Qt()):nt()}function ct(it){h.kaldir=it;let St=Ar(Math.min(1,it/.2)),Pt=Ar(Math.min(1,Math.max(0,(it-.2)/.5))),D=Ar(Math.max(0,(it-.7)/.3));r.position.set(-(St*Qc.cek+Pt*Qc.cik),D*Qc.yuk,-D*Qc.geri),r.updateMatrixWorld(!0),c.visible=h.tur==="hava"&&it>.35,h.hazir&&Qt()}function mt(it){h.ram=it,l.position.set(-Ar(it)*17,Ar(it)*3,0),l.updateMatrixWorld(!0)}function Ot(it){if(h.calisiyor=it,d.visible=it&&h.hazir,!it){for(let St of et)St.mal.emissiveIntensity=0;xt&&(xt.emissiveIntensity=0)}}function Kt(it,St){if(!h.hazir||!h.calisiyor)return!1;for(let Pt of Lt)Pt.gor&&(Pt.aci+=Pt.hiz*it);if(Qt(),q(St),h.tur==="sivi"){for(let Pt of et)Pt.mal.emissiveIntensity=1.35,Pt.tex.offset.x-=it*.55;xt&&(xt.emissiveIntensity=.75+.35*Math.sin(St*5))}return!0}function Bt(){if(h.hazir&&(Qt(),q(.25),h.tur==="sivi")){for(let it of et)it.mal.emissiveIntensity=1.35;xt&&(xt.emissiveIntensity=.9)}}function Ft(){h.calisiyor=!1,h.kaldir=0,h.ram=0,r.position.set(0,0,0),l.position.set(0,0,0),c.visible=!1,d.visible=!1;for(let it of Lt)it.aci=.7*(it.m[0]+it.m[2]+1)%6.28;for(let it of et)it.mal.emissiveIntensity=0,it.tex.offset.x=0;xt&&(xt.emissiveIntensity=0),h.hazir&&Qt(),r.updateMatrixWorld(!0),l.updateMatrixWorld(!0)}return{grup:i,kapak:u,durum:h,kesif:y,vekiller:g,parca:I,alanlar:G,hazirla:Tt,kapakAyarla:At,turAyarla:Ut,kaldirAyarla:ct,ramAyarla:mt,calisiyorAyarla:Ot,kare:Kt,duragan:Bt,sifirla:Ft,gruplar:{sabit:s,hava:r,egzoz:a,sivi:o,ram:l,macun:c}}}var yb=[{x:Me.x,z:Me.z,w:Me.w+4,d:Me.d+4,bulanik:18,alfa:.55},{x:cn.x,z:cn.z+3,w:36,d:24,bulanik:10,alfa:.5},...ei.map(n=>({x:n.x,z:n.z,w:15,d:17,bulanik:9,alfa:.5})),{x:Mi.x,z:Mi.z,w:88,d:27,bulanik:16,alfa:.32},{x:ni.x,z:ni.z,w:12.5,d:21,bulanik:8,alfa:.4},{x:Si.x,z:Si.z,w:38,d:29,bulanik:14,alfa:.45},{x:ii.x,z:ii.z,w:10.5,d:10.5,bulanik:6,alfa:.5},{x:Pn.x,z:Pn.z,w:22,d:14,bulanik:8,alfa:.28},{x:Ki.x,z:Ki.z,w:6,d:15,bulanik:4,alfa:.35}];function Dm(n,{aniz:t=4}={}){Op({aniz:t,izler:yb,masa:Pi}),En();let e={};e.masa=Bp(),e.kasa=im(),e.monitor=Gp(),e.kamera=Vp(),e.klavye=Jp(),e.fare=Hp(),e.hoparlor=Wp(),e.mikrofon=Xp(),e.kulaklik=Yp(),e.yazici=jp(),e.usb=qp(),e.usb.grup.position.set(Ki.x,.65,Ki.z),e.usb.grup.rotation.y=Ki.don,e.kablo=am({klavye:e.klavye,fare:e.fare,kamera:e.kamera,kulaklik:e.kulaklik,yazici:e.yazici,mikrofon:e.mikrofon,hoparlor:e.hoparlor,monitor:e.monitor});let i=new Ce;i.name="donanim",i.add(e.masa,e.kasa.grup,e.monitor.grup,e.kamera.grup,e.klavye.grup,e.fare.grup,e.hoparlor.grup,e.mikrofon.grup,e.kulaklik.grup,e.yazici.grup,e.usb.grup,e.kablo.mesh),Pp(i),e.masa.castShadow=!1,e.masa.receiveShadow=!1,e.masa.userData.statik=!1,e.fare.grup.userData.dinamik=!0,n.add(i),i.updateMatrixWorld(!0);let s=tm(i);return e.ic=Lm(e.kasa,{aniz:t}),i.updateMatrixWorld(!0),{kok:i,p:e,birlesme:s}}var hn=(n,t,e)=>new P(n,t,e),xb={I:"\u0131",\u0130:"i",\u015E:"\u015F",\u011E:"\u011F",\u00DC:"\xFC",\u00D6:"\xF6",\u00C7:"\xE7"},_b=n=>xb[n]||n.toLowerCase(),id=["M","E","R","H","A","B","A"," ","D","\xDC","N","Y","A"],sd=[{x:760,y:230},{x:70,y:150},{x:330,y:86},{x:420,y:250},{x:800,y:430},{x:600,y:190}],rd=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ad=n=>n*n*(3-2*n),od=["klavye","fare","mikrofon","kulaklik","hoparlor","monitor","kamera","yazici","guc"],vb={klavye:["parca:klavye","Klavye: USB giri\u015Fine ba\u011Fl\u0131"],fare:["parca:fare","Fare: USB giri\u015Fine ba\u011Fl\u0131"],mikrofon:["parca:mikrofon","Mikrofon: pembe ses giri\u015Fine ba\u011Fl\u0131"],kulaklik:["parca:kulaklik","Kulakl\u0131k: USB giri\u015Fine ba\u011Fl\u0131"],hoparlor:["parca:hoparlor1","Hoparl\xF6r: ye\u015Fil ses giri\u015Fine ba\u011Fl\u0131"],monitor:["parca:monitor","Monit\xF6r: HDMI giri\u015Fine ba\u011Fl\u0131"],kamera:["parca:kamera","Web kameras\u0131: USB giri\u015Fine ba\u011Fl\u0131"],yazici:["parca:yazici","Yaz\u0131c\u0131: USB giri\u015Fine ba\u011Fl\u0131"],guc:["kesif:guc-girisi","G\xFC\xE7 kablosu: prize gider"]},ld={klavye:"klavye",fare:"fare",mikrofon:"mikrofon",kulaklik:"kulaklik",hoparlor:"hoparlor",monitor:"monitor",kamera:"kamera",yazici:"yazici"};function Nm(n,{olay:t=()=>{}}={}){let{kok:e,p:i,birlesme:s}=Dm(n.scene,{aniz:n.renderer.capabilities.getMaxAnisotropy()}),r=i.ic,a=i.monitor.ekran,o=a.durum,l=i.klavye,c=i.fare,u=i.hoparlor,d=i.mikrofon,h=i.kulaklik,f=i.yazici,m=i.kamera,y=i.kablo,g=C=>{try{t("duyur",C)}catch{}};e.traverse(C=>{C.userData&&(C.userData.yari||C.userData.ince)&&n.hedefler.push(C)}),n.controls.cursor.set(0,20,-10),n.controls.maxTargetRadius=170;let p=[],M=new Set;for(let C of[i.monitor,i.kamera,i.klavye,i.fare,i.hoparlor,i.mikrofon,i.kulaklik,i.yazici,i.usb,i.kasa,r])for(let z of C.kesif)M.has(z.id)||(M.add(z.id),p.push(z));let E=new Map(p.map(C=>[C.id,C])),_=Me.z+Me.d/2,w=Me.z-Me.d/2,A={monitor:[cn.x,34,cn.z-1,97,68,22],ekran:[cn.x,39.4,cn.z+1.7,92,52,1.5],klavye:[Mi.x,3,Mi.z,89,6.6,28],fare:[ni.x,2.4,ni.z,11.5,5,20.5],hoparlor1:[ei[0].x,13.4,ei[0].z,14,27,16],hoparlor2:[ei[1].x,13.4,ei[1].z,14,27,16],mikrofon:[ii.x,11.5,ii.z,10,23.5,12],kamera:[Ii.x,69.2,Ii.z,9.4,5.6,5],kulaklik:[Pn.x,7.5,Pn.z,22.6,15.2,12],yazici:[Si.x,12,Si.z+3.5,37,25,45],"usb-bellek":[Ki.x,1.4,Ki.z,13,3.2,13],kasa:[Me.x,Me.h/2,Me.z,Me.w,Me.h,Me.d],"kasa-on-seridi":[Me.x,80.4,_+.6,34,6.6,2],"kasa-arka-paneli":[Me.x+2.9,74.55,w-.5,31,9.4,2],"guc-kaynagi":[Me.x-3.5,10.4,w-.5,30,17.2,2]};Object.assign(A,r.alanlar);let R=C=>{let z=A[C];return z?new Wn(hn(z[0]-z[3]/2,z[1]-z[4]/2,z[2]-z[5]/2),hn(z[0]+z[3]/2,z[1]+z[4]/2,z[2]+z[5]/2)):null},v={monitor:()=>hn(cn.x,68.8,cn.z),ekran:()=>hn(cn.x+20,41,cn.z+1.9),klavye:()=>hn(Mi.x,6.6,Mi.z+3),fare:()=>hn(c.grup.position.x,5.4,c.grup.position.z),hoparlor1:()=>hn(ei[0].x,27.8,ei[0].z),hoparlor2:()=>hn(ei[1].x,27.8,ei[1].z),mikrofon:()=>hn(ii.x,23,ii.z+1),kamera:()=>hn(Ii.x,72.6,Ii.z),kulaklik:()=>hn(Pn.x,13,Pn.z),yazici:()=>hn(Si.x,16.2,Si.z),"usb-bellek":()=>hn(Ki.x,3.2,Ki.z),kasa:()=>hn(Me.x,91.5,Me.z+6),"fare-sol":()=>hn(c.grup.position.x-2.6,3.8,c.grup.position.z-4.4),"fare-sag":()=>hn(c.grup.position.x+2.6,3.8,c.grup.position.z-4.4),"fare-tekerlek":()=>hn(c.grup.position.x,5,c.grup.position.z-4.4),"kulaklik-mikrofon":()=>hn(Pn.x-4.7,3.8,Pn.z+8.6),"kulaklik-kup":()=>hn(Pn.x-8.4,8.8,Pn.z)};Object.assign(v,r.parca),Object.assign(v,{"arka-hdmi":r.parca["ic-arka-hdmi"],"arka-usb":r.parca["ic-arka-usb"],"arka-ses":r.parca["ic-arka-ses"],"arka-ag":r.parca["ic-arka-ag"],"arka-guc":()=>S("kesif:guc-girisi")});function S(C){let z=C.indexOf(":"),at=C.slice(0,z),_t=C.slice(z+1);if(at==="alan"){let wt=A[_t];return wt?hn(wt[0],wt[1]+wt[4]/2+1.5,wt[2]):null}if(at==="parca")return v[_t]?v[_t]():null;if(at==="tus"){let wt=l.ara(_t==="Bosluk"?" ":_t);return wt<0?null:l.noktaI(wt).applyMatrix4(l.grup.matrixWorld)}if(at==="kesif"){let wt=E.get(_t);return wt?wt.yerel.clone().applyMatrix4(wt.nesne.matrixWorld):null}return null}let I=[],U=hn(0,0,0),G=hn(0,0,0);e.traverse(C=>{C.userData&&C.userData.yon&&I.push(C)}),n.kareGuncelleyici(()=>{let C=n.camera.position;for(let z of I)z.userData.yon&&(U.setFromMatrixPosition(z.matrixWorld),G.copy(C).sub(U).normalize(),z.visible=G.dot(z.userData.yon)>.12);return!1});let H=[],L=[],W="",tt=[Me.x-Me.w/2,0,Me.z-Me.d/2],J=[Me.x+Me.w/2,Me.h,Me.z+Me.d/2],ot=[0,0,0],O=[0,0,0],j=(C,z)=>!(C===0&&!z||C===1&&z);function st(C){let z=n.camera.position;ot[0]=C.x,ot[1]=C.y,ot[2]=C.z,O[0]=z.x-C.x,O[1]=z.y-C.y,O[2]=z.z-C.z;let at=-1/0,_t=1/0,wt=0,ae=0,me=!1,Zt=!1;for(let ve=0;ve<3;ve++){if(Math.abs(O[ve])<1e-9){if(ot[ve]<tt[ve]||ot[ve]>J[ve])return!1;continue}let fn=(tt[ve]-ot[ve])/O[ve],qe=(J[ve]-ot[ve])/O[ve],Ve=Math.min(fn,qe),Tn=Math.max(fn,qe);Ve>at&&(at=Ve,wt=ve,me=O[ve]<0),Tn<_t&&(_t=Tn,ae=ve,Zt=O[ve]>0)}return Math.max(at,1e-6)>=Math.min(_t,1)?!1:at>1e-6&&j(wt,me)||_t<1&&j(ae,Zt)}let zt=C=>{let z=dt!=null&&r.durum.acik;return C.map(at=>z&&st(at.nokta)?"0":"1").join("")};function xt(){let C=[...H,...L],z=zt(C);W=z,n.etiketKoy(C.filter((at,_t)=>z[_t]==="1"))}let Xt=C=>{L=C.filter(z=>z.nokta),xt()};n.kareGuncelleyici(()=>((dt!=null||W.indexOf("0")>=0)&&zt([...H,...L])!==W&&xt(),!1));let ne=new Map,Lt=new Set,et=()=>document.documentElement.hasAttribute("data-e-hareketsiz")||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;n.yavasGuncelleyici(()=>{let C=!1;for(let[z,at]of ne){let _t=!1;try{_t=at(performance.now())}catch(wt){console.error(wt)}_t?C=!0:ne.delete(z)}return C});let rt=(C,z)=>{ne.set(C,z),n.iste()};function Tt(C,z,at,_t=null){if(et())return _t==null?(z(1),at&&at()):(z(_t),Jt(2400,()=>{at&&at(),n.iste()})),n.iste(),()=>!1;let wt=null;return ae=>{wt??=ae;let me=Math.min(1,(ae-wt)/C);return z(me,ae),me>=1?(at&&at(),!1):!0}}let Jt=(C,z)=>{let at=setTimeout(()=>{Lt.delete(at),z()},C);Lt.add(at)},Dt=0,kt=(C=0,z=!1)=>{!z&&C-Dt<70||(Dt=C,a.guncelle())},jt=()=>{a.guncelle(),n.iste()},ht=new pr(.92,1,48),gt=[0,1,2].map(()=>{let C=new Et(ht,new tn({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:bn}));return C.visible=!1,C.renderOrder=3,C.raycast=()=>{},C.userData.dinamik=!0,e.add(C),C}),vt=()=>{for(let C of gt)C.visible=!1};function Mt(C,z,at,_t){gt.forEach((wt,ae)=>{let me=(_t+ae/3)%1,Zt=9.5-me*6.5;wt.visible=!0,wt.position.set(C,z,at+4+(1-me)*15),wt.scale.set(Zt,Zt,1),wt.material.opacity=Math.sin(Math.PI*me)*.55})}function Ct(C){u.halkalar.forEach(z=>z.forEach((at,_t)=>{let wt=(C+_t/3)%1;at.visible=!0,at.scale.set(3.2+wt*13,3.2+wt*13,1),at.material.opacity=Math.pow(1-wt,1.4)*.5}))}let Qt=()=>u.halkalar.forEach(C=>C.forEach(z=>{z.visible=!1})),Vt=null;function Yt(){try{let C=window.AudioContext||window.webkitAudioContext;if(!C)return;Vt=Vt||new C,Vt.state==="suspended"&&Vt.resume();let z=Vt.currentTime+.03;[[523.25,0],[659.25,.3],[783.99,.6]].forEach(([at,_t])=>{let wt=Vt.createOscillator(),ae=Vt.createGain();wt.type="sine",wt.frequency.value=at,ae.gain.setValueAtTime(1e-4,z+_t),ae.gain.exponentialRampToValueAtTime(.07,z+_t+.04),ae.gain.exponentialRampToValueAtTime(1e-4,z+_t+.55),wt.connect(ae),ae.connect(Vt.destination),wt.start(z+_t),wt.stop(z+_t+.6)})}catch{}}let ie=null,N="",Se=!1,re=0,T=0,x=3,V=!1,q=-1,nt=new Set;function At(){ne.clear();for(let C of Lt)clearTimeout(C);Lt.clear();for(let C of nt)l.tusBas(C,!1);nt.clear(),y.izle(null),q=-1,c.grup.position.set(ni.x,0,ni.z),c.birak(),c.tekerlek.rotation.x=0,d.ledAyarla(!1),m.ledAyarla(!1),f.ledAyarla(!1),i.monitor.ledAyarla(!0),f.kagit.visible=!1,f.kagit.position.z=-3.75,vt(),Qt(),h.kupMal.emissiveIntensity=0,h.ucMal.emissiveIntensity=0,N="",Se=!1,re=0,T=0,x=3,V=!1,Object.assign(o,{mod:"masaustu",yazi:"",imlec:{...sd[0]},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3})}function Ut(C){l.tusBas(C,!0),nt.add(C),rt("tus"+C,Tt(170,()=>{},()=>{l.tusBas(C,!1),nt.delete(C)}))}function ct(C){let z=l.tuslar[C];if(!z||(Ut(C),ie!=="yaz"))return!1;let at=!0;if(z.ad==="Geri")N=N.slice(0,-1);else if(z.ad==="Enter")N+=`
`;else if(z.tur==="bosluk")N+=" ";else{if(z.ad==="Shift")return Se=!0,Xt([{nokta:l.noktaI(C).applyMatrix4(l.grup.matrixWorld),metin:"Shift: s\u0131radaki harf b\xFCy\xFCk"}]),g("Shift bas\u0131ld\u0131, s\u0131radaki harf b\xFCy\xFCk yaz\u0131lacak"),!0;z.tur==="harf"||z.tur==="rakam"?(N+=Se?z.ad:_b(z.ad),Se=!1):at=!1}if(at)if(o.yazi=N,jt(),z.ad==="Enter"||z.ad==="Geri"||z.tur==="bosluk"){let _t=z.ad==="Enter"?"Enter: yeni sat\u0131r":z.ad==="Geri"?"Geri: son harfi siler":"Bo\u015Fluk";Xt([{nokta:l.noktaI(C).applyMatrix4(l.grup.matrixWorld),metin:_t}])}else L.length&&Xt([]);return at}function mt(C){let z={...o.imlec},at=c.grup.position.x,_t=c.grup.position.z,wt=ni.x+(C.x-512)/512*1.2,ae=ni.z+(C.y-288)/288*1.2;rt("fare-gez",Tt(520,me=>{let Zt=ad(me);o.imlec.x=z.x+(C.x-z.x)*Zt,o.imlec.y=z.y+(C.y-z.y)*Zt,c.grup.position.x=at+(wt-at)*Zt,c.grup.position.z=_t+(ae-_t)*Zt,kt(performance.now())},()=>{jt(),n.golgeYenile()}))}let Ot=()=>{T=(T+1)%sd.length,mt(sd[T]),g("Fare hareket etti, imle\xE7 ekranda yer de\u011Fi\u015Ftirdi")};function Kt(C){c.tikla(C),o.menu=C?!1:!o.menu,rt("fare-tik",Tt(460,z=>{o.tik=1+z*2.2,z>.35&&c.birak(),kt(performance.now())},()=>{o.tik=0,c.birak(),jt()})),g(C?"Sol t\u0131k yap\u0131ld\u0131":o.menu?"Sa\u011F t\u0131k men\xFCs\xFC a\xE7\u0131ld\u0131":"Sa\u011F t\u0131k men\xFCs\xFC kapand\u0131")}function Bt(){let C=c.tekerlek.rotation.x;rt("tekerlek",Tt(260,z=>{c.tekerlek.rotation.x=C+ad(z)*1.4})),Xt([{nokta:S("parca:fare-tekerlek"),metin:"Tekerlek: sayfay\u0131 kayd\u0131r\u0131r"}])}function Ft(){d.ledAyarla(!0),o.ses=0,jt();let C=d.kafa;rt("konus",Tt(3600,(z,at)=>{o.ses=z*3,Mt(C.x,C.y,C.z,z*3.6/1.1%1),kt(at)},()=>{d.ledAyarla(!1),o.ses=null,vt(),jt()},.3)),g("Mikrofon sesi al\u0131yor, ekranda ses \xE7ubuklar\u0131 hareket ediyor")}function it(){return V=!V,o.kamera=V,m.ledAyarla(V),jt(),g(V?"Web kameras\u0131 a\xE7\u0131ld\u0131, g\xF6r\xFCnt\xFC ekranda":"Web kameras\u0131 kapand\u0131"),V}function St(){x=x===3?0:x+1,o.kademe=x,jt();let[C,z]=Lp[x];Xt([{nokta:S("parca:ekran"),metin:`${rd(C)} \xD7 ${rd(z)} = ${rd(C*z)} piksel`}]),g(`\xC7\xF6z\xFCn\xFCrl\xFCk ${C} \xE7arp\u0131 ${z}, toplam ${C*z} piksel`)}function Pt(){o.cal=0,jt(),Yt(),rt("ses",Tt(3400,(C,z)=>{o.cal=C*3,Ct(C*3.4/1%1),kt(z)},()=>{o.cal=null,Qt(),jt()},.3)),g("Hoparl\xF6rden ses \xE7\u0131k\u0131yor")}function D(){let C=f.kagit;C.visible=!0,C.position.z=-3.75,f.ledAyarla(!0),o.yazdir=0,jt(),rt("yazdir",Tt(3600,(z,at)=>{o.yazdir=z,C.position.z=-3.75+13.5*ad(Math.min(1,Math.max(0,(z-.2)/.8))),kt(at)},()=>{f.ledAyarla(!1),o.yazdir=1,jt(),n.golgeYenile(),Jt(1600,()=>{o.yazdir=null,jt()})})),g("Yaz\u0131c\u0131 k\xE2\u011F\u0131da yazd\u0131r\u0131yor")}function ut(){rt("kulak",Tt(2600,C=>{h.kupMal.emissiveIntensity=Math.max(0,Math.sin(C*Math.PI*5))*.85},()=>{h.kupMal.emissiveIntensity=0},.1)),Yt(),g("Ses kulakl\u0131ktan geliyor")}function $(){let C=hn(Pn.x-4.7,3.2,Pn.z+8.6);rt("kulak-konus",Tt(3e3,z=>{h.ucMal.emissiveIntensity=Math.max(0,Math.sin(z*Math.PI*5))*.9,Mt(C.x,C.y,C.z,z*3/1.1%1)},()=>{h.ucMal.emissiveIntensity=0,vt()},.1)),g("Kulakl\u0131\u011F\u0131n mikrofonu sesi al\u0131yor")}function bt(C){if(y.izle(C),n.iste(),!C){Xt([]);return}let[z,at]=vb[C];Xt([{nokta:S(z),metin:at}]),g(at)}function It(){q=(q+1)%od.length,bt(od[q])}let dt=null,Gt=!1,Nt=!1,ye=!1,X=!1,yt=!1,k=[],B=null,Z=E.get("guc-kaynagi")?E.get("guc-kaynagi").nesne:null,ft=Z?Z.userData.yon:null,lt=Z?Z.position.clone():null;function $t(C){Z&&(C?(Z.position.set(-3.5,19.1,-28),Z.userData.yon=null,Z.visible=!0):(Z.position.copy(lt),Z.userData.yon=ft),Z.updateMatrixWorld(!0))}let qt=new Set(r.kesif.map(C=>C.id)),oe=p.filter(C=>C.nesne&&!qt.has(C.id)&&!C.nesne.userData.yon).map(C=>C.nesne),xe=C=>{for(let z of oe)z.visible=!C},_e=()=>yt&&B?X?[]:B:k;function Ee(){H=_e().map(([C,z,at])=>({nokta:S(C),metin:z,tur:at})).filter(C=>C.nokta),xt()}function dn(C){let z=r.durum.acik;r.kapakAyarla(C),r.durum.acik!==z&&($t(r.durum.acik),xe(r.durum.acik),n.golgeYenile())}function Ye(C,z,at,_t,wt,ae){rt(C,Tt(z,me=>wt(at+(_t-at)*me),()=>{wt(_t),n.golgeYenile(),Ee(),ae&&ae()}))}function Nn(){ne.delete("kaldir")&&r.kaldirAyarla(Nt?1:0),ne.delete("ram")&&r.ramAyarla(ye?1:0)}let gn=()=>Nt?[{nokta:S("parca:ic-macun"),metin:"Termal macun",tur:"yesil"}]:[];function Un(){return Gt=!Gt,Gt||Ps(),Nn(),Ye("kapak",1100,r.durum.kapak,Gt?1:0,dn,()=>{k=k.map(C=>C[0]==="parca:kasa"&&/kasa$/.test(C[1])?[C[0],Gt?"A\xE7\u0131k kasa":"Kapal\u0131 kasa",C[2]]:C),Ee()}),g(Gt?"Yan kapak a\xE7\u0131ld\u0131, kasan\u0131n i\xE7i g\xF6r\xFCn\xFCyor":"Yan kapak kapand\u0131"),Gt}function gs(){return r.durum.tur!=="hava"||!r.durum.acik?!1:(Nt=!Nt,Ps(),Ye("kaldir",1300,r.durum.kaldir,Nt?1:0,C=>r.kaldirAyarla(C),()=>Xt(gn())),g(Nt?"So\u011Futucu kald\u0131r\u0131ld\u0131, i\u015Flemcinin \xFCst\xFCndeki termal macun g\xF6r\xFCn\xFCyor":"So\u011Futucu i\u015Flemcinin \xFCst\xFCne geri tak\u0131ld\u0131"),Nt)}function ys(){return r.durum.acik?(ye=!ye,Ps(),Ye("ram",900,r.durum.ram,ye?1:0,C=>r.ramAyarla(C)),g(ye?"RAM \xE7ubuklar\u0131 yuvalar\u0131ndan \xE7\u0131kar\u0131ld\u0131":"RAM \xE7ubuklar\u0131 yuvalara geri tak\u0131ld\u0131"),ye):!1}function Ps(){X&&(X=!1,ne.delete("ic-calis"),r.calisiyorAyarla(!1),L=[],Ee(),n.iste())}function ir(){let C=(z,at,_t)=>({nokta:S(z),metin:at,tur:_t});return r.durum.tur==="sivi"?[C("parca:ic-pompa","Pompa s\u0131v\u0131y\u0131 d\xF6nd\xFCr\xFCr","yesil"),C("parca:ic-sivi-sicak","S\u0131cak s\u0131v\u0131 radyat\xF6re gider","arti"),C("parca:ic-sivi-soguk","So\u011Fuyan s\u0131v\u0131 geri d\xF6ner","eksi"),C("parca:ic-akis-giris","So\u011Fuk hava girer","eksi"),C("parca:ic-akis-cikis","S\u0131cak hava \xE7\u0131kar","arti")]:[C("parca:ic-akis-giris","So\u011Fuk hava girer","eksi"),C("parca:ic-akis-cikis","S\u0131cak hava \xE7\u0131kar","arti")]}function yn(){if(!r.durum.acik)return!1;if(X)return Ps(),g("Bilgisayar durdu, fanlar yava\u015Flad\u0131 ve durdu"),!1;X=!0,r.calisiyorAyarla(!0),Nn(),Nt&&(Nt=!1,r.kaldirAyarla(0)),ye&&(ye=!1,r.ramAyarla(0));let C=null;return et()?(r.duragan(),n.iste()):rt("ic-calis",z=>{let at=C==null?0:Math.min(.1,(z-C)/1e3);return C=z,r.kare(at,z/1e3)}),L=ir().filter(z=>z.nokta),Ee(),g(r.durum.tur==="sivi"?"Fanlar d\xF6n\xFCyor, pompa s\u0131v\u0131y\u0131 d\xF6nd\xFCr\xFCyor; s\u0131cak s\u0131v\u0131 radyat\xF6re, so\u011Fuyan s\u0131v\u0131 i\u015Flemciye gidiyor":"Fanlar d\xF6n\xFCyor; so\u011Fuk hava \xF6nden girer, s\u0131cak hava yukar\u0131dan \xE7\u0131kar"),n.iste(),!0}function ri(){return r.durum.acik?(yt=!yt,ne.delete("kaldir"),Nt=!1,r.kaldirAyarla(0),r.turAyarla(yt?"sivi":"hava"),X&&(r.calisiyorAyarla(!0),et()&&r.duragan()),L=(X?ir():[]).filter(C=>C.nokta),n.golgeYenile(),Ee(),n.iste(),g(yt?"S\u0131v\u0131 so\u011Futmaya ge\xE7ildi: i\u015Flemcinin \xFCst\xFCnde pompa blo\u011Fu, tavanda radyat\xF6r var":"Hava so\u011Futmaya ge\xE7ildi: i\u015Flemcinin \xFCst\xFCnde fanl\u0131 so\u011Futucu var"),yt):!1}function b(C){dt=C&&C.indexOf("ic")===0?C:null,y.dersAyarla(dt!=null?2:1),r.sifirla(),X=!1,Nt=!1,ye=!1,yt=dt==="ic-sivi",r.turAyarla(yt?"sivi":"hava"),Gt=dt==="ic"||dt==="ic-sivi",dn(Gt?1:0)}function F(C,z){if(!C)return!1;if(ie==="kablo"&&ld[C.parca])return q=od.indexOf(ld[C.parca]),bt(ld[C.parca]),!0;if(C.parca==="klavye"&&C.tusNo!=null)return ct(C.tusNo);if(ie==="fare"&&C.parca==="fare"){if(C.tekerlek)return Bt(),!0;let at=c.grup.worldToLocal(z?z.clone():hn(0,0,0));return z&&at.z<-1.2?(Kt(at.x<0),!0):(Ot(),!0)}return ie==="ekran"&&C.kesif==="ekran"?(St(),!0):!1}function Q(C){switch(C){case"tus-bas":{let z=id[re%id.length];re%id.length===0&&(N="",o.yazi=""),re++,ct(l.ara(z));return}case"fare-oynat":Ot();return;case"fare-tikla":Kt(!0);return;case"fare-sag":Kt(!1);return;case"konus":Ft();return;case"kamera":return it();case"cozunurluk":St();return;case"ses":Pt();return;case"yazdir":D();return;case"kulak-dinle":ut();return;case"kulak-konus":$();return;case"kablo-sonraki":It();return;case"kapak":return Un();case"sogutucu-kaldir":return gs();case"ram-cikar":return ys();case"calistir":return yn();case"sogutma-turu":return ri();default:}}function K(C,z={}){At(),ie=z.mod||null,o.yazi=z.yazi!=null?z.yazi:"Merhaba!",b(ie),k=z.etiket||[],B=z.etiketSivi||null,H=_e().map(([at,_t,wt])=>({nokta:S(at),metin:_t,tur:wt})).filter(at=>at.nokta),L=[],xt(),jt(),n.golgeYenile()}function Y(){ne.clear();for(let C of Lt)clearTimeout(C);Lt.clear();try{Vt&&Vt.state!=="closed"&&Vt.close()}catch{}Vt=null,X=!1,r.calisiyorAyarla(!1)}return K("merak",{}),n.golgeYenile(),n.iste(),{kesifNoktalari:p,alanlar:A,noktaBul:S,kutuBul:R,adimUygula:K,eylem:Q,durdur:Y,dokunuldu:F,parcalar:i,durum:o,birlesme:s}}var bb=n=>Dh[Hc[n]?.kat]?Hc[n].kat:null,Um={id:"donanim",DERSLER:Tp,KAMERA:Ap,KESIF:Hc,KATEGORI:Dh,kategoriBul:bb,GORUNUM:Ep,vurguYap:Ip,sahneyiKur:Nm};var Fm=md();Fm.veri&&wp(Um,Fm);
