var he=document.documentElement,zt=(n,t=document)=>t.querySelector(n),Mn=(n,t=document)=>[...t.querySelectorAll(n)],ci=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},gi=n=>{try{return localStorage.getItem(n)}catch{return null}},td=0,ki=n=>{let t=zt("#duyuru");if(t){if(clearTimeout(td),t.textContent!==n){t.textContent=n;return}t.textContent="",td=setTimeout(()=>{t.textContent=n},100)}};var ed="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";function nd(n){if(!n)return;let t=()=>{n.classList.toggle("ayar-acik",!!n.querySelector(".ayarlar:not([hidden])")),n.classList.toggle("erisim-acik",!!n.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function id(n){if(!(!n||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;n.classList.toggle("dar-640",e<=640),n.classList.toggle("dar-380",e<=380)}).observe(n)}}function sd(n,t){if(!n)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){n.hidden=!0;return}n.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}function rd(){let n=zt("#ders-veri"),t=n?JSON.parse(n.textContent):null;he.dataset.js="1";let e={veri:t,S:null,sinifDegisince:null,pencere:null,temaRengi:null},i=["5","6","7","8"];function s(y,m=!0){he.dataset.sinif=y,he.dataset.sinifSecili="1",m&&ci("bote-3d-sinif",y);let p=new URL(location.href);p.searchParams.set("sinif",y),history.replaceState(null,"",p);for(let S of Mn("[data-sinif-yaz]"))S.textContent=`${y}. s\u0131n\u0131f`;for(let S of Mn("a[data-ders-baglanti]")){let E=new URL(S.href,location.href);E.searchParams.set("sinif",y),S.href=E.pathname+E.search}for(let S of Mn("[data-sinif-sec]"))S.setAttribute("aria-pressed",String(S.dataset.sinifSec===y));e.sinifDegisince?.()}let r=zt("#sinif-penceresi"),a=new URLSearchParams(location.search).get("sinif");if(i.includes(a))s(a);else{let y=gi("bote-3d-sinif");if(i.includes(y)){he.dataset.sinif=y,he.dataset.sinifSecili="1";for(let m of Mn("[data-sinif-yaz]"))m.textContent=`${y}. s\u0131n\u0131f`;for(let m of Mn("[data-sinif-sec]"))m.setAttribute("aria-pressed",String(m.dataset.sinifSec===y))}r&&t&&r.showModal?.()}document.addEventListener("click",y=>{let m=y.target.closest("[data-sinif-sec]");m&&(s(m.dataset.sinifSec),r?.open&&(r.close(),zt(".adim.etkin h2")?.focus({preventScroll:!0})),t?ki(`${m.dataset.sinifSec}. s\u0131n\u0131f anlat\u0131m\u0131 se\xE7ildi`):o())});function o(){let y=zt("#dersler");if(!y)return;let m=y.getBoundingClientRect();(m.top<0||m.top>window.innerHeight*.55)&&y.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),ki(`${he.dataset.sinif}. s\u0131n\u0131f se\xE7ildi. \u015Eimdi dersi se\xE7in.`)}zt("#sinif-dugme")?.addEventListener("click",()=>r?.showModal?.());let l=new URLSearchParams(location.search).get("mod")||gi("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),c=window.matchMedia(ed),u=l;function d(y,m){u=y,he.dataset.mod=y==="tahta"&&c.matches?"normal":y,zt("#tahta-dugme")?.setAttribute("aria-pressed",String(he.dataset.mod==="tahta")),m&&(ci("bote-3d-mod",y),e.S?.guvenliYenile())}d(l,!1),c.addEventListener?.("change",()=>{let y=he.dataset.mod;d(u,!1),he.dataset.mod!==y&&e.S?.guvenliYenile()}),zt("#tahta-dugme")?.addEventListener("click",()=>d(he.dataset.mod==="tahta"?"normal":"tahta",!0));let h=()=>he.dataset.theme==="dark"?"#17121f":"#e9e5f1";zt("#tema-dugme")?.addEventListener("click",()=>{let y=he.dataset.theme!=="dark";y?he.dataset.theme="dark":delete he.dataset.theme,ci("bote-theme",y?"dark":"light"),e.S?.arkaPlan(h())}),sd(zt("#tam-ekran"),he);let f=zt("#ogretmen-dugme");function g(y){he.dataset.ek=y?"acik":"",f?.setAttribute("aria-expanded",String(y)),y&&zt("#ogretmen")?.focus()}return f?.addEventListener("click",()=>g(he.dataset.ek!=="acik")),zt("#ogretmen-kapat")?.addEventListener("click",()=>{g(!1),f?.focus()}),document.addEventListener("keydown",y=>{y.key==="Escape"&&he.dataset.ek==="acik"&&!r?.open&&(g(!1),f?.focus())}),document.addEventListener("click",y=>{let m=y.target.closest("[data-secenek]");if(!m)return;let p=m.closest(".soru");if(!p||p.dataset.cevaplandi)return;p.dataset.cevaplandi="1";let S=m.hasAttribute("data-dogru");m.classList.add(S?"dogru":"yanlis"),p.querySelector("[data-dogru]")?.classList.add("dogru");let E=p.querySelector(".aciklama");E&&(E.hidden=!1);let b=p.closest(".sinav"),A=Mn(".soru[data-cevaplandi]",b),x=A.filter(v=>v.querySelector(".dogru[data-dogru]")&&!v.querySelector(".yanlis")),k=zt(".sinav-sonuc",b);k&&A.length===Mn(".soru",b).length&&(k.textContent=`${A.length} sorudan ${x.length} do\u011Fru.`),ki(S?"Do\u011Fru cevap":"Yanl\u0131\u015F cevap; do\u011Fru se\xE7enek i\u015Faretlendi")}),e.pencere=r,e.temaRengi=h,e}var Ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gd=0,Lu=1,Hd=2;var dr=1,Wd=2,aa=3,Ys=0,Vn=1,wn=2,us=0,oa=1,uo=2,Du=3,Nu=4,Xd=5;var fr=100,Yd=101,qd=102,Zd=103,Kd=104,$d=200,Jd=201,jd=202,Qd=203,Uu=204,Fu=205,tf=206,ef=207,nf=208,sf=209,rf=210,af=211,of=212,lf=213,cf=214,rl=0,al=1,ol=2,Gr=3,ll=4,cl=5,ul=6,hl=7,Bl=0,uf=1,hf=2,Zi=0,Ou=1,zu=2,Bu=3,Vu=4,Gu=5,Hu=6,ho=7;var Wu=300,qs=301,pr=302,Vl=303,Gl=304,fo=306,vi=1e3,rs=1001,dl=1002,On=1003,df=1004;var po=1005;var Sn=1006,Hl=1007;var Ci=1008;var hi=1009,Xu=1010,Yu=1011,la=1012,Wl=1013,Ki=1014,Pi=1015,$i=1016,Xl=1017,Yl=1018,ca=1020,qu=35902,Zu=35899,Ku=1021,$u=1022,Ii=1023,as=1026,Zs=1027,ql=1028,Zl=1029,Ks=1030,Kl=1031;var $l=1033,mo=33776,go=33777,yo=33778,_o=33779,Jl=35840,jl=35841,Ql=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37488,rc=37489,xo=37490,ac=37491,oc=37808,lc=37809,cc=37810,uc=37811,hc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,yc=37818,_c=37819,xc=37820,vc=37821,bc=36492,Mc=36494,Sc=36495,wc=36283,Ac=36284,vo=36285,Ec=36286;var Da=2300,fl=2301,il=2302,bu=2303,Mu=2400,Su=2401,wu=2402;var ff=3200;var bo=0,pf=1,Ji="",mn="srgb",Na="srgb-linear",Ua="linear",Ye="srgb";var sl=7680;var mf=519,gf=512,yf=513,_f=514,Tc=515,xf=516,vf=517,kc=518,bf=519,Mf=35044;var Ju="300 es",Vi=2e3,Hr=2001;function Cm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sf(){let n=Fa("canvas");return n.style.display="block",n}var ad={},Wr=null;function ju(...n){let t="THREE."+n.shift();Wr?Wr("log",t,...n):console.log(t,...n)}function wf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function me(...n){n=wf(n);let t="THREE."+n.shift();if(Wr)Wr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ye(...n){n=wf(n);let t="THREE."+n.shift();if(Wr)Wr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ar(...n){let t=n.join(" ");t in ad||(ad[t]=!0,me(...n))}function Af(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ef={[rl]:al,[ol]:ul,[ll]:hl,[Gr]:cl,[al]:rl,[ul]:ol,[hl]:ll,[cl]:Gr},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=1234567,Br=Math.PI/180,Xr=180/Math.PI;function mr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yn[n&255]+Yn[n>>8&255]+Yn[n>>16&255]+Yn[n>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[e&63|128]+Yn[e>>8&255]+"-"+Yn[e>>16&255]+Yn[e>>24&255]+Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function Qu(n,t){return(n%t+t)%t}function Im(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Lm(n,t,e){return n!==t?(e-n)/(t-n):0}function Pa(n,t,e){return(1-e)*n+e*t}function Dm(n,t,e,i){return Pa(n,t,1-Math.exp(-e*i))}function Nm(n,t=1){return t-Math.abs(Qu(n,t*2)-t)}function Um(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Fm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Om(n,t){return n+Math.floor(Math.random()*(t-n+1))}function zm(n,t){return n+Math.random()*(t-n)}function Bm(n){return n*(.5-Math.random())}function Vm(n){n!==void 0&&(od=n);let t=od+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gm(n){return n*Br}function Hm(n){return n*Xr}function Wm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ym(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qm(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var th={DEG2RAD:Br,RAD2DEG:Xr,generateUUID:mr,clamp:Te,euclideanModulo:Qu,mapLinear:Im,inverseLerp:Lm,lerp:Pa,damp:Dm,pingpong:Nm,smoothstep:Um,smootherstep:Fm,randInt:Om,randFloat:zm,randFloatSpread:Bm,seededRandom:Vm,degToRad:Gm,radToDeg:Hm,isPowerOfTwo:Wm,ceilPowerOfTwo:Xm,floorPowerOfTwo:Ym,setQuaternionFromProperEuler:qm,normalize:ti,denormalize:zr},ah=class ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;var kt=ah,Bn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oh=class oh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ld.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;var C=oh,Kc=new C,ld=new Bn,lh=class lh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],S=s[1],E=s[4],b=s[7],A=s[2],x=s[5],k=s[8];return r[0]=a*y+o*S+l*A,r[3]=a*m+o*E+l*x,r[6]=a*p+o*b+l*k,r[1]=c*y+u*S+d*A,r[4]=c*m+u*E+d*x,r[7]=c*p+u*b+d*k,r[2]=h*y+f*S+g*A,r[5]=h*m+f*E+g*x,r[8]=h*p+f*b+g*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(t,e)),this}rotate(t){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-t)),this}translate(t,e){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var be=lh,$c=new be,cd=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zm(){let n={enabled:!0,workingColorSpace:Na,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ye&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(s.r=Vr(s.r),s.g=Vr(s.g),s.b=Vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?Ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Na]:{primaries:t,whitePoint:i,transfer:Ua,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:i,transfer:Ye,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}var Ie=Zm();function ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ar,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ar===void 0&&(Ar=Fa("canvas")),Ar.width=t.width,Ar.height=t.height;let s=Ar.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ar}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ws(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ws(e[i]/255)*255):e[i]=ws(e[i]);return{data:e,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Km=0,Yr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=mr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}var $m=0,jc=new C,ei=class n extends Gi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rs,s=rs,r=Sn,a=Ci,o=Ii,l=hi,c=n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=mr(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vi:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vi:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Wu;ei.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,b=(f+1)/2,A=(p+1)/2,x=(u+h)/4,k=(d+y)/4,v=(g+m)/4;return E>b&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=x/i,r=k/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=x/s,r=v/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=k/r,s=v/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var cn=ch,ml=class extends Gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new cn(0,0,t,e),this.scissorTest=!1,this.viewport=new cn(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new ei(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends ml{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Oa=class extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends ei{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zl=class zl{constructor(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m)}set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Er.setFromMatrixColumn(t,0).length(),r=1/Er.setFromMatrixColumn(t,1).length(),a=1/Er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,y=c*d;e[0]=h+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-y*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jm,t,jm)}lookAt(t,e,i){let s=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Ds.crossVectors(i,yi),Ds.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Ds.crossVectors(i,yi)),Ds.normalize(),Co.crossVectors(yi,Ds),s[0]=Ds.x,s[4]=Co.x,s[8]=yi.x,s[1]=Ds.y,s[5]=Co.y,s[9]=yi.y,s[2]=Ds.z,s[6]=Co.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],E=i[7],b=i[11],A=i[15],x=s[0],k=s[4],v=s[8],M=s[12],P=s[1],D=s[5],O=s[9],V=s[13],L=s[2],G=s[6],J=s[10],K=s[14],at=s[3],z=s[7],q=s[11],Q=s[15];return r[0]=a*x+o*P+l*L+c*at,r[4]=a*k+o*D+l*G+c*z,r[8]=a*v+o*O+l*J+c*q,r[12]=a*M+o*V+l*K+c*Q,r[1]=u*x+d*P+h*L+f*at,r[5]=u*k+d*D+h*G+f*z,r[9]=u*v+d*O+h*J+f*q,r[13]=u*M+d*V+h*K+f*Q,r[2]=g*x+y*P+m*L+p*at,r[6]=g*k+y*D+m*G+p*z,r[10]=g*v+y*O+m*J+p*q,r[14]=g*M+y*V+m*K+p*Q,r[3]=S*x+E*P+b*L+A*at,r[7]=S*k+E*D+b*G+A*z,r[11]=S*v+E*O+b*J+A*q,r[15]=S*M+E*V+b*K+A*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],S=l*f-c*h,E=o*f-c*d,b=o*h-l*d,A=a*f-c*u,x=a*h-l*u,k=a*d-o*u;return e*(y*S-m*E+p*b)-i*(g*S-m*A+p*x)+s*(g*E-y*A+p*k)-r*(g*b-y*x+m*k)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],S=e*o-i*a,E=e*l-s*a,b=e*c-r*a,A=i*l-s*o,x=i*c-r*o,k=s*c-r*l,v=u*y-d*g,M=u*m-h*g,P=u*p-f*g,D=d*m-h*y,O=d*p-f*y,V=h*p-f*m,L=S*V-E*O+b*D+A*P-x*M+k*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return t[0]=(o*V-l*O+c*D)*G,t[1]=(s*O-i*V-r*D)*G,t[2]=(y*k-m*x+p*A)*G,t[3]=(h*x-d*k-f*A)*G,t[4]=(l*P-a*V-c*M)*G,t[5]=(e*V-s*P+r*M)*G,t[6]=(m*b-g*k-p*E)*G,t[7]=(u*k-h*b+f*E)*G,t[8]=(a*O-o*P+c*v)*G,t[9]=(i*P-e*O-r*v)*G,t[10]=(g*x-y*b+p*S)*G,t[11]=(d*b-u*x-f*S)*G,t[12]=(o*M-a*D-l*v)*G,t[13]=(e*D-i*M+s*v)*G,t[14]=(y*E-g*A-m*S)*G,t[15]=(u*A-d*E+h*S)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,y=a*u,m=a*d,p=o*d,S=l*c,E=l*u,b=l*d,A=i.x,x=i.y,k=i.z;return s[0]=(1-(y+p))*A,s[1]=(f+b)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(f-b)*x,s[5]=(1-(h+p))*x,s[6]=(m+S)*x,s[7]=0,s[8]=(g+E)*k,s[9]=(m-S)*k,s[10]=(1-(h+y))*k,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Er.set(s[0],s[1],s[2]).length(),o=Er.set(s[4],s[5],s[6]).length(),l=Er.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Oi.copy(this);let c=1/a,u=1/o,d=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=d,Oi.elements[9]*=d,Oi.elements[10]*=d,e.setFromRotationMatrix(Oi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Vi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Vi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Hr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Vi,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Vi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Hr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};zl.prototype.isMatrix4=!0;var He=zl,Er=new C,Oi=new He,Jm=new C(0,0,0),jm=new C(1,1,1),Ds=new C,Co=new C,yi=new C,hd=new He,dd=new Bn,os=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dd.setFromEuler(this),this.setFromQuaternion(dd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qm=0,fd=new C,Tr=new Bn,_s=new He,Po=new C,Sa=new C,t0=new C,e0=new Bn,pd=new C(1,0,0),md=new C(0,1,0),gd=new C(0,0,1),yd={type:"added"},n0={type:"removed"},kr={type:"childadded",child:null},Qc={type:"childremoved",child:null},un=class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new os,i=new Bn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new be}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(pd,t)}rotateY(t){return this.rotateOnAxis(md,t)}rotateZ(t){return this.rotateOnAxis(gd,t)}translateOnAxis(t,e){return fd.copy(t).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pd,t)}translateY(t){return this.translateOnAxis(md,t)}translateZ(t){return this.translateOnAxis(gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Po.copy(t):Po.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(Sa,Po,this.up):_s.lookAt(Po,Sa,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(_s),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yd),kr.child=t,this.dispatchEvent(kr),kr.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n0),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_s.multiply(t.parent.matrixWorld)),t.applyMatrix4(_s),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yd),kr.child=t,this.dispatchEvent(kr),kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,t0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new C(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},i0={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},Io={h:0,s:0,l:0};function tu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ie.workingColorSpace){if(t=Qu(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=tu(a,r,t+1/3),this.g=tu(a,r,t),this.b=tu(a,r,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=mn){function i(r){r!==void 0&&parseFloat(r)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let i=Tf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return Ie.workingToColorSpace(qn.copy(this),t),Math.round(Te(qn.r*255,0,255))*65536+Math.round(Te(qn.g*255,0,255))*256+Math.round(Te(qn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(qn.copy(this),e);let i=qn.r,s=qn.g,r=qn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(qn.copy(this),e),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=mn){Ie.workingToColorSpace(qn.copy(this),t);let e=qn.r,i=qn.g,s=qn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ns),this.setHSL(Ns.h+t,Ns.s+e,Ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ns),t.getHSL(Io);let i=Pa(Ns.h,Io.h,e),s=Pa(Ns.s,Io.s,e),r=Pa(Ns.l,Io.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qn=new le;le.NAMES=Tf;var or=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zi=new C,xs=new C,eu=new C,vs=new C,Rr=new C,Cr=new C,_d=new C,nu=new C,iu=new C,su=new C,ru=new cn,au=new cn,ou=new cn,Ss=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),zi.subVectors(t,e),s.cross(zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){zi.subVectors(s,e),xs.subVectors(i,e),eu.subVectors(t,e);let a=zi.dot(zi),o=zi.dot(xs),l=zi.dot(eu),c=xs.dot(xs),u=xs.dot(eu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,vs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vs.x),l.addScaledVector(a,vs.y),l.addScaledVector(o,vs.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ru.setScalar(0),au.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(t,e),au.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ru,r.x),a.addScaledVector(au,r.y),a.addScaledVector(ou,r.z),a}static isFrontFacing(t,e,i,s){return zi.subVectors(i,e),xs.subVectors(t,e),zi.cross(xs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),zi.cross(xs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Rr.subVectors(s,i),Cr.subVectors(r,i),nu.subVectors(t,i);let l=Rr.dot(nu),c=Cr.dot(nu);if(l<=0&&c<=0)return e.copy(i);iu.subVectors(t,s);let u=Rr.dot(iu),d=Cr.dot(iu);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Rr,a);su.subVectors(t,r);let f=Rr.dot(su),g=Cr.dot(su);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Cr,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return _d.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(_d,o);let p=1/(m+y+h);return a=y*p,o=h*p,e.copy(i).addScaledVector(Rr,a).addScaledVector(Cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bi):Bi.fromBufferAttribute(r,a),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wa),Do.subVectors(this.max,wa),Pr.subVectors(t.a,wa),Ir.subVectors(t.b,wa),Lr.subVectors(t.c,wa),Us.subVectors(Ir,Pr),Fs.subVectors(Lr,Ir),er.subVectors(Pr,Lr);let e=[0,-Us.z,Us.y,0,-Fs.z,Fs.y,0,-er.z,er.y,Us.z,0,-Us.x,Fs.z,0,-Fs.x,er.z,0,-er.x,-Us.y,Us.x,0,-Fs.y,Fs.x,0,-er.y,er.x,0];return!lu(e,Pr,Ir,Lr,Do)||(e=[1,0,0,0,1,0,0,0,1],!lu(e,Pr,Ir,Lr,Do))?!1:(No.crossVectors(Us,Fs),e=[No.x,No.y,No.z],lu(e,Pr,Ir,Lr,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bs=[new C,new C,new C,new C,new C,new C,new C,new C],Bi=new C,Lo=new Zn,Pr=new C,Ir=new C,Lr=new C,Us=new C,Fs=new C,er=new C,wa=new C,Do=new C,No=new C,nr=new C;function lu(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){nr.fromArray(n,r);let o=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=t.dot(nr),c=e.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Cn=new C,Uo=new kt,s0=0,yn=class extends Gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mf,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix3(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ti(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array),s=ti(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),i=ti(i,this.array),s=ti(s,this.array),r=ti(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var za=class extends yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ba=class extends yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ze=class extends yn{constructor(t,e,i){super(new Float32Array(t),e,i)}},r0=new Zn,Aa=new C,cu=new C,As=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):r0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Aa.subVectors(t,this.center);let e=Aa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Aa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Aa.copy(t.center).add(cu)),this.expandByPoint(Aa.copy(t.center).sub(cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},a0=0,Ri=new He,uu=new un,Dr=new C,_i=new Zn,Ea=new Zn,Fn=new C,hn=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cm(t)?Ba:za)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new be().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,i){return Ri.makeTranslation(t,e,i),this.applyMatrix4(Ri),this}scale(t,e,i){return Ri.makeScale(t,e,i),this.applyMatrix4(Ri),this}lookAt(t){return uu.lookAt(t),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Fn.addVectors(_i.min,Ea.min),_i.expandByPoint(Fn),Fn.addVectors(_i.max,Ea.max),_i.expandByPoint(Fn)):(_i.expandByPoint(Ea.min),_i.expandByPoint(Ea.max))}_i.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Fn.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(t,c),Fn.add(Dr)),s=Math.max(s,i.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new C,l[v]=new C;let c=new C,u=new C,d=new C,h=new kt,f=new kt,g=new kt,y=new C,m=new C;function p(v,M,P){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,P),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[v].add(y),o[M].add(y),o[P].add(y),l[v].add(m),l[M].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,M=S.length;v<M;++v){let P=S[v],D=P.start,O=P.count;for(let V=D,L=D+O;V<L;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let E=new C,b=new C,A=new C,x=new C;function k(v){A.fromBufferAttribute(s,v),x.copy(A);let M=o[v];E.copy(M),E.sub(A.multiplyScalar(A.dot(M))).normalize(),b.crossVectors(x,M);let D=b.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,M=S.length;v<M;++v){let P=S[v],D=P.start,O=P.count;for(let V=D,L=D+O;V<L;V+=3)k(t.getX(V+0)),k(t.getX(V+1)),k(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fn.fromBufferAttribute(t,e),Fn.normalize(),t.setXYZ(e,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new yn(h,u,d)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hu=new C,o0=new C,l0=new be,xi=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=hu.subVectors(i,e).cross(o0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||l0.getNormalMatrix(t),s=this.coplanarPoint(hu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},c0=0,Hi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=oa,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Fu,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ms=new C,du=new C,Fo=new C,Oo=new C,zs=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ms)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ms.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ms.copy(this.origin).addScaledVector(this.direction,e),Ms.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){du.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(du);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fo),o=Oo.dot(this.direction),l=-Oo.dot(Fo),c=Oo.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(du).addScaledVector(Fo,h),f}intersectSphere(t,e){if(t.radius<0)return null;Ms.subVectors(t.center,this.origin);let i=Ms.dot(this.direction),s=Ms.dot(Ms)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ms)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,S=i.y-a.y,E=i.z-a.z,b=Math.abs(l),A=Math.abs(c),x=Math.abs(u),k,v,M,P,D,O,V,L,G,J,K,at;if(b>=A&&b>=x?(M=l,O=d,G=g,at=p,l>=0?(k=c,v=u,P=h,D=f,V=y,L=m,J=S,K=E):(k=u,v=c,P=f,D=h,V=m,L=y,J=E,K=S)):A>=x?(M=c,O=h,G=y,at=S,c>=0?(k=u,v=l,P=f,D=d,V=m,L=g,J=E,K=p):(k=l,v=u,P=d,D=f,V=g,L=m,J=p,K=E)):(M=u,O=f,G=m,at=E,u>=0?(k=l,v=c,P=d,D=h,V=g,L=y,J=p,K=S):(k=c,v=l,P=h,D=d,V=y,L=g,J=S,K=p)),M===0)return null;let z=k/M,q=v/M,Q=1/M,Dt=P-z*O,yt=D-q*O,qt=V-z*G,Kt=L-q*G,Nt=J-z*at,nt=K-q*at,ut=Nt*Kt-nt*qt,Rt=Dt*nt-yt*Nt,jt=qt*yt-Kt*Dt;if(s){if(ut<0||Rt<0||jt<0)return null}else if((ut<0||Rt<0||jt<0)&&(ut>0||Rt>0||jt>0))return null;let Ct=ut+Rt+jt;if(Ct===0)return null;let bt=Q*(ut*O+Rt*G+jt*at);return(Ct>0?bt<0:bt>0)?null:this.at(bt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xd=new He,ir=new zs,zo=new As,vd=new C,Bo=new C,Vo=new C,Go=new C,fu=new C,Ho=new C,bd=new C,Wo=new C,Et=class extends un{constructor(t=new hn,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(fu.fromBufferAttribute(d,t),a?Ho.addScaledVector(fu,u):Ho.addScaledVector(fu.sub(e),u))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),ir.copy(t.ray).recast(t.near),!(zo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(zo,vd)===null||ir.origin.distanceToSquared(vd)>(t.far-t.near)**2))&&(xd.copy(r).invert(),ir.copy(t.ray).applyMatrix4(xd),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ir)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,A=E;b<A;b+=3){let x=o.getX(b),k=o.getX(b+1),v=o.getX(b+2);s=Xo(this,p,t,i,c,u,d,x,k,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=Xo(this,a,t,i,c,u,d,S,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,A=E;b<A;b+=3){let x=b,k=b+1,v=b+2;s=Xo(this,p,t,i,c,u,d,x,k,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,E=m+1,b=m+2;s=Xo(this,a,t,i,c,u,d,S,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function u0(n,t,e,i,s,r,a,o){let l;if(t.side===Vn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ys,o),l===null)return null;Wo.copy(o),Wo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Bo),n.getVertexPosition(l,Vo),n.getVertexPosition(c,Go);let u=u0(n,t,e,i,Bo,Vo,Go,bd);if(u){let d=new C;Ss.getBarycoord(bd,Bo,Vo,Go,d),s&&(u.uv=Ss.getInterpolatedAttribute(s,o,l,c,d,new kt)),r&&(u.uv1=Ss.getInterpolatedAttribute(r,o,l,c,d,new kt)),a&&(u.normal=Ss.getInterpolatedAttribute(a,o,l,c,d,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new C,materialIndex:0};Ss.getNormal(Bo,Vo,Go,h.normal),u.face=h,u.barycoord=d}return u}var Va=class extends ei{constructor(t=null,e=1,i=1,s,r,a,o,l,c=On,u=On,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=class extends yn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Nr=new He,Md=new He,Yo=[],Sd=new Zn,h0=new He,Ta=new Et,ka=new As,Es=class extends Et{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,h0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Nr),Sd.copy(t.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Nr),ka.copy(t.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(ka)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(i),t.ray.intersectsSphere(ka)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Nr),Md.multiplyMatrices(i,Nr),Ta.matrixWorld=Md,Ta.raycast(t,Yo);for(let a=0,o=Yo.length;a<o;a++){let l=Yo[a];l.instanceId=r,l.object=this,e.push(l)}Yo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Va(new Float32Array(s*this.count),s,this.count,ql,Pi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sr=new As,d0=new kt(.5,.5),qo=new C,$r=class{constructor(t=new xi,e=new xi,i=new xi,s=new xi,r=new xi,a=new xi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,p-g,A-S).normalize(),s[1].setComponents(c+a,f+u,p+g,A+S).normalize(),s[2].setComponents(c+o,f+d,p+y,A+E).normalize(),s[3].setComponents(c-o,f-d,p-y,A-E).normalize(),i)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,f-h,p-m,A-b).normalize();else if(s[4].setComponents(c-l,f-h,p-m,A-b).normalize(),e===Vi)s[5].setComponents(c+l,f+h,p+m,A+b).normalize();else if(e===Hr)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){sr.center.set(0,0,0);let e=d0.distanceTo(t.center);return sr.radius=.7071067811865476+e,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jr=class extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yl=new C,_l=new C,wd=new He,Ra=new zs,Zo=new As,pu=new C,Ad=new C,xl=class extends un{constructor(t=new hn,e=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)yl.fromBufferAttribute(e,s-1),_l.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=yl.distanceTo(_l);t.setAttribute("lineDistance",new ze(i,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;wd.copy(s).invert(),Ra.copy(t.ray).applyMatrix4(wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=u.getX(y),S=u.getX(y+1),E=Ko(this,t,Ra,l,p,S,y);E&&e.push(E)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(f),p=Ko(this,t,Ra,l,y,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=Ko(this,t,Ra,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=Ko(this,t,Ra,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ko(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(yl.fromBufferAttribute(o,s),_l.fromBufferAttribute(o,r),e.distanceSqToSegment(yl,_l,pu,Ad)>i)return;pu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(pu);if(!(c<t.near||c>t.far))return{distance:c,point:Ad.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ed=new C,Td=new C,Ga=class extends xl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ed.fromBufferAttribute(e,s),Td.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ed.distanceTo(Td);t.setAttribute("lineDistance",new ze(i,1))}else me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ha=class extends ei{constructor(t=[],e=qs,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wi=class extends ei{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bs=class extends ei{constructor(t,e,i=Ki,s,r,a,o=On,l=On,c,u=as,d=1){if(u!==as&&u!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},vl=class extends Bs{constructor(t,e=Ki,i=qs,s,r,a=On,o=On,l,c=as){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wa=class extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xn=class n extends hn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function g(y,m,p,S,E,b,A,x,k,v,M){let P=b/k,D=A/v,O=b/2,V=A/2,L=x/2,G=k+1,J=v+1,K=0,at=0,z=new C;for(let q=0;q<J;q++){let Q=q*D-V;for(let Dt=0;Dt<G;Dt++){let yt=Dt*P-O;z[y]=yt*S,z[m]=Q*E,z[p]=L,c.push(z.x,z.y,z.z),z[y]=0,z[m]=0,z[p]=x>0?1:-1,u.push(z.x,z.y,z.z),d.push(Dt/k),d.push(1-q/v),K+=1}}for(let q=0;q<v;q++)for(let Q=0;Q<k;Q++){let Dt=h+Q+G*q,yt=h+Q+G*(q+1),qt=h+(Q+1)+G*(q+1),Kt=h+(Q+1)+G*q;l.push(Dt,yt,Kt),l.push(yt,qt,Kt),at+=6}o.addGroup(f,at,M),f+=at,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},jr=class n extends hn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=i*2+r,y=s+1,m=new C,p=new C;for(let S=0;S<=g;S++){let E=0,b=0,A=0,x=0;if(S<=i){let M=S/i,P=M*Math.PI/2;b=-u-t*Math.cos(P),A=t*Math.sin(P),x=-t*Math.cos(P),E=M*d}else if(S<=i+r){let M=(S-i)/r;b=-u+M*e,A=t,x=0,E=d+M*h}else{let M=(S-i-r)/i,P=M*Math.PI/2;b=u+t*Math.sin(P),A=t*Math.cos(P),x=t*Math.sin(P),E=d+h+M*d}let k=Math.max(0,Math.min(1,E/f)),v=0;S===0?v=.5/s:S===g&&(v=-.5/s);for(let M=0;M<=s;M++){let P=M/s,D=P*Math.PI*2,O=Math.sin(D),V=Math.cos(D);p.x=-A*V,p.y=b,p.z=A*O,o.push(p.x,p.y,p.z),m.set(-A*V,x,A*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+v,k)}if(S>0){let M=(S-1)*y;for(let P=0;P<s;P++){let D=M+P,O=M+P+1,V=S*y+P,L=S*y+P+1;a.push(D,O,V),a.push(O,L,V)}}}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Qr=class n extends hn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,y=[],m=i/2,p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function S(){let b=new C,A=new C,x=0,k=(e-t)/i;for(let v=0;v<=r;v++){let M=[],P=v/r,D=P*(e-t)+t;for(let O=0;O<=s;O++){let V=O/s,L=V*l+o,G=Math.sin(L),J=Math.cos(L);A.x=D*G,A.y=-P*i+m,A.z=D*J,d.push(A.x,A.y,A.z),b.set(G,k,J).normalize(),h.push(b.x,b.y,b.z),f.push(V,1-P),M.push(g++)}y.push(M)}for(let v=0;v<s;v++)for(let M=0;M<r;M++){let P=y[M][v],D=y[M+1][v],O=y[M+1][v+1],V=y[M][v+1];(t>0||M!==0)&&(u.push(P,D,V),x+=3),(e>0||M!==r-1)&&(u.push(D,O,V),x+=3)}c.addGroup(p,x,0),p+=x}function E(b){let A=g,x=new kt,k=new C,v=0,M=b===!0?t:e,P=b===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let L=O/s*l+o,G=Math.cos(L),J=Math.sin(L);k.x=M*J,k.y=m*P,k.z=M*G,d.push(k.x,k.y,k.z),h.push(0,P,0),x.x=G*.5+.5,x.y=J*.5*P+.5,f.push(x.x,x.y),g++}for(let O=0;O<s;O++){let V=A+O,L=D+O;b===!0?u.push(L,L+1,V):u.push(L+1,L,V),v+=3}c.addGroup(p,v,b===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xa=class n extends Qr{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $o=new C,Jo=new C,mu=new C,jo=new Ss,Ya=class extends hn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Br*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:p}=jo;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),jo.getNormal(mu),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){let E=(S+1)%3,b=d[S],A=d[E],x=jo[u[S]],k=jo[u[E]],v=`${b}_${A}`,M=`${A}_${b}`;M in h&&h[M]?(mu.dot(h[M].normal)<=r&&(f.push(x.x,x.y,x.z),f.push(k.x,k.y,k.z)),h[M]=null):v in h||(h[v]={index0:c[S],index1:c[E],normal:mu.clone()})}}for(let g in h)if(h[g]){let{index0:y,index1:m}=h[g];$o.fromBufferAttribute(o,y),Jo.fromBufferAttribute(o,m),f.push($o.x,$o.y,$o.z),f.push(Jo.x,Jo.y,Jo.z)}this.setAttribute("position",new ze(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new kt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new He;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ta=class extends bi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new kt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends ta{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var kd=new C,Rd=new C,gu=new eh,yu=new eh,_u=new eh,Xi=class extends bi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Rd.subVectors(s[0],s[1]).add(s[0]),c=Rd);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(kd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=kd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),gu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,y,m),yu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,y,m),_u.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(gu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),yu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_u.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(gu.calc(l),yu.calc(l),_u.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cd(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function f0(n,t){let e=1-n;return e*e*t}function p0(n,t){return 2*(1-n)*n*t}function m0(n,t){return n*n*t}function Ia(n,t,e,i){return f0(n,t)+p0(n,e)+m0(n,i)}function g0(n,t){let e=1-n;return e*e*e*t}function y0(n,t){let e=1-n;return 3*e*e*n*t}function _0(n,t){return 3*(1-n)*n*n*t}function x0(n,t){return n*n*n*t}function La(n,t,e,i,s){return g0(n,t)+y0(n,e)+_0(n,i)+x0(n,s)}var qa=class extends bi{constructor(t=new kt,e=new kt,i=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new kt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(La(t,s.x,r.x,a.x,o.x),La(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends bi{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(La(t,s.x,r.x,a.x,o.x),La(t,s.y,r.y,a.y,o.y),La(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Za=class extends bi{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lr=class extends bi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends bi{constructor(t=new kt,e=new kt,i=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new kt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ia(t,s.x,r.x,a.x),Ia(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cr=class extends bi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ia(t,s.x,r.x,a.x),Ia(t,s.y,r.y,a.y),Ia(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Cd(o,l.x,c.x,u.x,d.x),Cd(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new kt().fromArray(s))}return this}},Sl=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Xi,CubicBezierCurve:qa,CubicBezierCurve3:Ml,EllipseCurve:ta,LineCurve:Za,LineCurve3:lr,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:cr,SplineCurve:$a}),ea=class extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Sl[s.type]().fromJSON(s))}return this}},ls=class extends ea{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Za(this.currentPoint.clone(),new kt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ka(this.currentPoint.clone(),new kt(t,e),new kt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new qa(this.currentPoint.clone(),new kt(t,e),new kt(i,s),new kt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new $a(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new ta(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yi=class extends ls{constructor(t){super(t),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ls().fromJSON(s))}return this}};function v0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=kf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=A0(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=n[h],g=n[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Ja(r,a,e,o,l,c,0),a}function kf(n,t,e,i,s){let r;if(s===U0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Pd(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Pd(a/i|0,n[a],n[a+1],r);return r&&na(r,r.next)&&(Qa(r),r=r.next),r}function ur(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(na(e,e.next)||gn(e.prev,e,e.next)===0)){if(Qa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ja(n,t,e,i,s,r,a){if(!n)return;!a&&r&&C0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?M0(n,i,s,r):b0(n)){t.push(l.i,n.i,c.i),Qa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=S0(ur(n),t),Ja(n,t,e,i,s,r,2)):a===2&&w0(n,t,e,i,s,r):Ja(ur(n),t,e,i,s,r,1);break}}}function b0(n){let t=n.prev,e=n,i=n.next;if(gn(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Ca(s,o,r,l,a,c,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function M0(n,t,e,i){let s=n.prev,r=n,a=n.next;if(gn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),y=Math.max(o,l,c),m=Math.max(u,d,h),p=Au(f,g,t,e,i),S=Au(y,m,t,e,i),E=n.prevZ,b=n.nextZ;for(;E&&E.z>=p&&b&&b.z<=S;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ca(o,u,l,d,c,h,E.x,E.y)&&gn(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ca(o,u,l,d,c,h,b.x,b.y)&&gn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ca(o,u,l,d,c,h,E.x,E.y)&&gn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ca(o,u,l,d,c,h,b.x,b.y)&&gn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function S0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!na(i,s)&&Cf(i,e,e.next,s)&&ja(i,s)&&ja(s,i)&&(t.push(i.i,e.i,s.i),Qa(e),Qa(e.next),e=n=s),e=e.next}while(e!==n);return ur(e)}function w0(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&L0(a,o)){let l=Pf(a,o);a=ur(a,a.next),l=ur(l,l.next),Ja(a,t,e,i,s,r,0),Ja(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function A0(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=kf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(I0(c))}s.sort(E0);for(let r=0;r<s.length;r++)e=T0(s[r],e);return e}function E0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function T0(n,t){let e=k0(n,t);if(!e)return t;let i=Pf(e,n);return ur(i,i.next),ur(e,e.next)}function k0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(na(n,e))return e;do{if(na(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Rf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);ja(e,n)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&R0(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function R0(n,t){return gn(n.prev,n,t.prev)<0&&gn(t.next,n,n.next)<0}function C0(n,t,e,i){let s=n;do s.z===0&&(s.z=Au(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,P0(s)}function P0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Au(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function I0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Rf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ca(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Rf(n,t,e,i,s,r,a,o)}function L0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!D0(n,t)&&(ja(n,t)&&ja(t,n)&&N0(n,t)&&(gn(n.prev,n,t.prev)||gn(n,t.prev,t))||na(n,t)&&gn(n.prev,n,n.next)>0&&gn(t.prev,t,t.next)>0)}function gn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function na(n,t){return n.x===t.x&&n.y===t.y}function Cf(n,t,e,i){let s=tl(gn(n,t,e)),r=tl(gn(n,t,i)),a=tl(gn(e,i,n)),o=tl(gn(e,i,t));return!!(s!==r&&a!==o||s===0&&Qo(n,e,t)||r===0&&Qo(n,i,t)||a===0&&Qo(e,n,i)||o===0&&Qo(e,t,i))}function Qo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function tl(n){return n>0?1:n<0?-1:0}function D0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Cf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ja(n,t){return gn(n.prev,n,n.next)<0?gn(n,t,n.next)>=0&&gn(n,n.prev,t)>=0:gn(n,t,n.prev)<0||gn(n,n.next,t)<0}function N0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Pf(n,t){let e=Eu(n.i,n.x,n.y),i=Eu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Pd(n,t,e,i){let s=Eu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Qa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function U0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Tu=class{static triangulate(t,e,i=2){return v0(t,e,i)}},rr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Id(t),Ld(i,t);let a=t.length;e.forEach(Id);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ld(i,e[l]);let o=Tu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Id(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ld(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var cs=class n extends hn{constructor(t=new Yi([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:F0,E,b=!1,A,x,k,v;if(p){E=p.getSpacedPoints(u),b=!0,h=!1;let ct=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,ct),x=new C,k=new C,v=new C}h||(m=0,f=0,g=0,y=0);let M=o.extractPoints(c),P=M.shape,D=M.holes;if(!rr.isClockWise(P)){P=P.reverse();for(let ct=0,pt=D.length;ct<pt;ct++){let xt=D[ct];rr.isClockWise(xt)&&(D[ct]=xt.reverse())}}function V(ct){let xt=10000000000000001e-36,vt=ct[0];for(let Tt=1;Tt<=ct.length;Tt++){let Yt=Tt%ct.length,Vt=ct[Yt],Ht=Vt.x-vt.x,se=Vt.y-vt.y,N=Ht*Ht+se*se,we=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(vt.x),Math.abs(vt.y)),oe=xt*we*we;if(N<=oe){ct.splice(Yt,1),Tt--;continue}vt=Vt}}V(P),D.forEach(V);let L=D.length,G=P;for(let ct=0;ct<L;ct++){let pt=D[ct];P=P.concat(pt)}function J(ct,pt,xt){return pt||ye("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(pt,xt)}let K=P.length;function at(ct,pt,xt){let vt,Tt,Yt,Vt=ct.x-pt.x,Ht=ct.y-pt.y,se=xt.x-ct.x,N=xt.y-ct.y,we=Vt*Vt+Ht*Ht,oe=Vt*N-Ht*se;if(Math.abs(oe)>Number.EPSILON){let T=Math.sqrt(we),_=Math.sqrt(se*se+N*N),B=pt.x-Ht/T,Y=pt.y+Vt/T,it=xt.x-N/_,At=xt.y+se/_,Pt=((it-B)*N-(At-Y)*se)/(Vt*N-Ht*se);vt=B+Vt*Pt-ct.x,Tt=Y+Ht*Pt-ct.y;let ot=vt*vt+Tt*Tt;if(ot<=2)return new kt(vt,Tt);Yt=Math.sqrt(ot/2)}else{let T=!1;Vt>Number.EPSILON?se>Number.EPSILON&&(T=!0):Vt<-Number.EPSILON?se<-Number.EPSILON&&(T=!0):Math.sign(Ht)===Math.sign(N)&&(T=!0),T?(vt=-Ht,Tt=Vt,Yt=Math.sqrt(we)):(vt=Vt,Tt=Ht,Yt=Math.sqrt(we/2))}return new kt(vt/Yt,Tt/Yt)}let z=[];for(let ct=0,pt=G.length,xt=pt-1,vt=ct+1;ct<pt;ct++,xt++,vt++)xt===pt&&(xt=0),vt===pt&&(vt=0),z[ct]=at(G[ct],G[xt],G[vt]);let q=[],Q,Dt=z.concat();for(let ct=0,pt=L;ct<pt;ct++){let xt=D[ct];Q=[];for(let vt=0,Tt=xt.length,Yt=Tt-1,Vt=vt+1;vt<Tt;vt++,Yt++,Vt++)Yt===Tt&&(Yt=0),Vt===Tt&&(Vt=0),Q[vt]=at(xt[vt],xt[Yt],xt[Vt]);q.push(Q),Dt=Dt.concat(Q)}let yt;if(m===0)yt=rr.triangulateShape(G,D);else{let ct=[],pt=[];for(let xt=0;xt<m;xt++){let vt=xt/m,Tt=f*Math.cos(vt*Math.PI/2),Yt=g*Math.sin(vt*Math.PI/2)+y;for(let Vt=0,Ht=G.length;Vt<Ht;Vt++){let se=J(G[Vt],z[Vt],Yt);Rt(se.x,se.y,-Tt),vt===0&&ct.push(se)}for(let Vt=0,Ht=L;Vt<Ht;Vt++){let se=D[Vt];Q=q[Vt];let N=[];for(let we=0,oe=se.length;we<oe;we++){let T=J(se[we],Q[we],Yt);Rt(T.x,T.y,-Tt),vt===0&&N.push(T)}vt===0&&pt.push(N)}}yt=rr.triangulateShape(ct,pt)}let qt=yt.length,Kt=g+y;for(let ct=0;ct<K;ct++){let pt=h?J(P[ct],Dt[ct],Kt):P[ct];b?(k.copy(A.normals[0]).multiplyScalar(pt.x),x.copy(A.binormals[0]).multiplyScalar(pt.y),v.copy(E[0]).add(k).add(x),Rt(v.x,v.y,v.z)):Rt(pt.x,pt.y,0)}for(let ct=1;ct<=u;ct++)for(let pt=0;pt<K;pt++){let xt=h?J(P[pt],Dt[pt],Kt):P[pt];b?(k.copy(A.normals[ct]).multiplyScalar(xt.x),x.copy(A.binormals[ct]).multiplyScalar(xt.y),v.copy(E[ct]).add(k).add(x),Rt(v.x,v.y,v.z)):Rt(xt.x,xt.y,d/u*ct)}for(let ct=m-1;ct>=0;ct--){let pt=ct/m,xt=f*Math.cos(pt*Math.PI/2),vt=g*Math.sin(pt*Math.PI/2)+y;for(let Tt=0,Yt=G.length;Tt<Yt;Tt++){let Vt=J(G[Tt],z[Tt],vt);Rt(Vt.x,Vt.y,d+xt)}for(let Tt=0,Yt=D.length;Tt<Yt;Tt++){let Vt=D[Tt];Q=q[Tt];for(let Ht=0,se=Vt.length;Ht<se;Ht++){let N=J(Vt[Ht],Q[Ht],vt);b?Rt(N.x,N.y+E[u-1].y,E[u-1].x+xt):Rt(N.x,N.y,d+xt)}}}Nt(),nt();function Nt(){let ct=s.length/3;if(h){let pt=0,xt=K*pt;for(let vt=0;vt<qt;vt++){let Tt=yt[vt];jt(Tt[2]+xt,Tt[1]+xt,Tt[0]+xt)}pt=u+m*2,xt=K*pt;for(let vt=0;vt<qt;vt++){let Tt=yt[vt];jt(Tt[0]+xt,Tt[1]+xt,Tt[2]+xt)}}else{for(let pt=0;pt<qt;pt++){let xt=yt[pt];jt(xt[2],xt[1],xt[0])}for(let pt=0;pt<qt;pt++){let xt=yt[pt];jt(xt[0]+K*u,xt[1]+K*u,xt[2]+K*u)}}i.addGroup(ct,s.length/3-ct,0)}function nt(){let ct=s.length/3,pt=0;ut(G,pt),pt+=G.length;for(let xt=0,vt=D.length;xt<vt;xt++){let Tt=D[xt];ut(Tt,pt),pt+=Tt.length}i.addGroup(ct,s.length/3-ct,1)}function ut(ct,pt){let xt=ct.length;for(;--xt>=0;){let vt=xt,Tt=xt-1;Tt<0&&(Tt=ct.length-1);for(let Yt=0,Vt=u+m*2;Yt<Vt;Yt++){let Ht=K*Yt,se=K*(Yt+1),N=pt+vt+Ht,we=pt+Tt+Ht,oe=pt+Tt+se,T=pt+vt+se;Ct(N,we,oe,T)}}}function Rt(ct,pt,xt){l.push(ct),l.push(pt),l.push(xt)}function jt(ct,pt,xt){bt(ct),bt(pt),bt(xt);let vt=s.length/3,Tt=S.generateTopUV(i,s,vt-3,vt-2,vt-1);ue(Tt[0]),ue(Tt[1]),ue(Tt[2])}function Ct(ct,pt,xt,vt){bt(ct),bt(pt),bt(vt),bt(pt),bt(xt),bt(vt);let Tt=s.length/3,Yt=S.generateSideWallUV(i,s,Tt-6,Tt-3,Tt-2,Tt-1);ue(Yt[0]),ue(Yt[1]),ue(Yt[3]),ue(Yt[1]),ue(Yt[2]),ue(Yt[3])}function bt(ct){s.push(l[ct*3+0]),s.push(l[ct*3+1]),s.push(l[ct*3+2])}function ue(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return O0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sl[s.type]().fromJSON(s)),new n(i,t.options)}},F0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new kt(r,a),new kt(o,l),new kt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new kt(a,1-l),new kt(c,1-d),new kt(h,1-g),new kt(y,1-p)]:[new kt(o,1-l),new kt(u,1-d),new kt(f,1-g),new kt(m,1-p)]}};function O0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var nn=class n extends hn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let S=p*h-a;for(let E=0;E<c;E++){let b=E*d-r;g.push(b,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let E=S+c*p,b=S+c*(p+1),A=S+1+c*(p+1),x=S+1+c*p;f.push(E,b,x),f.push(b,A,x)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},hr=class n extends hn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=t,h=(e-t)/s,f=new C,g=new kt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let S=p+m,E=S,b=S+i+1,A=S+i+2,x=S+1;o.push(E,b,x),o.push(b,A,x)}}this.setIndex(o),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ni=class n extends hn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,f=new C,g=new C;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,b=(s+1)*y+m;l.push(p,S,b),l.push(S,E,b)}this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var qi=class n extends hn{constructor(t=new cr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new kt,u=new C,d=[],h=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),S(),p()}function m(E){u=t.getPointAt(E/e,u);let b=a.normals[E],A=a.binormals[E];for(let x=0;x<=s;x++){let k=x/s*Math.PI*2,v=Math.sin(k),M=-Math.cos(k);l.x=M*b.x+v*A.x,l.y=M*b.y+v*A.y,l.z=M*b.z+v*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let b=1;b<=s;b++){let A=(s+1)*(E-1)+(b-1),x=(s+1)*E+(b-1),k=(s+1)*E+b,v=(s+1)*(E-1)+b;g.push(A,x,v),g.push(x,k,v)}}function S(){for(let E=0;E<=e;E++)for(let b=0;b<=s;b++)c.x=E/e,c.y=b/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Sl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var to=class extends Hi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new le(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function gr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Dd(s))s.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Dd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Kn(n){let t={};for(let e=0;e<n.length;e++){let i=gr(n[e]);for(let s in i)t[s]=i[s]}return t}function Dd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function z0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}var If={clone:gr,merge:Kn},B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new cn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new He().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wl=class extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Le=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var eo=class extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Bl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Al=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ur(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function xu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Vs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tl=class extends Vs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Su:r=t,o=2*e-i;break;case wu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Su:a=t,l=2*i-e;break;case wu:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,E=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+S*a[c+A]+E*a[l+A]+b*a[d+A];return r}},kl=class extends Vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Rl=class extends Vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cl=class extends Vs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*h+g*2,S=d[p],E=d[p+1],b=t*h+g*2,A=u[b],x=u[b+1],k=H0(i,e,S,A,s);r[g]=Lf(k,y,E,x,m)}return r}};function Lf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function G0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function H0(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Lf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=G0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Si=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),xu(t.settings)&&(i.settings={inTangents:Ur(t.settings.inTangents,Array),outTangents:Ur(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Da:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case il:e=this.InterpolantFactoryMethodSmooth;break;case bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return me("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;xu(this.settings)&&(Nd(this.settings.inTangents,t),Nd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ye("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ye("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Pm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ye("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===il,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[h+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,xu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Si.prototype.ValueTypeName="";Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=fl;var Gs=class extends Si{constructor(t,e,i){super(t,e,i)}};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Da;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Si{constructor(t,e,i,s){super(t,e,i,s)}};Pl.prototype.ValueTypeName="color";var Il=class extends Si{constructor(t,e,i,s){super(t,e,i,s)}};Il.prototype.ValueTypeName="number";var Ll=class extends Vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},no=class extends Si{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends Si{constructor(t,e,i){super(t,e,i)}};Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Da;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Si{constructor(t,e,i,s){super(t,e,i,s)}};Dl.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Df=new Nl,Ul=class{constructor(t){this.manager=t!==void 0?t:Df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var ia=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},io=class extends ia{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vu=new He,Ud=new C,Fd=new C,so=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ud),Fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(vu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(vu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},el=new C,nl=new Bn,ss=new C,ro=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(el,nl,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,nl,ss.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(el,nl,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,nl,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new C,Od=new kt,zd=new kt,zn=class extends ro{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Os.x,Os.y).multiplyScalar(-t/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-t/Os.z)}getViewSize(t,e){return this.getViewBounds(t,Od,zd),e.subVectors(zd,Od)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Br*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ku=class extends so{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}},ao=class extends ia{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ku}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},sa=class extends ro{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ru=class extends so{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Fr=-90,Or=1,Fl=class extends un{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(Fr,Or,t,e);s.layers=this.layers,this.add(s);let r=new zn(Fr,Or,t,e);r.layers=this.layers,this.add(r);let a=new zn(Fr,Or,t,e);a.layers=this.layers,this.add(a);let o=new zn(Fr,Or,t,e);o.layers=this.layers,this.add(o);let l=new zn(Fr,Or,t,e);l.layers=this.layers,this.add(l);let c=new zn(Fr,Or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ol=class extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ih="\\[\\]\\.:\\/",W0=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",X0="[^"+ih.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",sh),q0=/(WCOD+)?/.source.replace("WCOD",X0),Z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),$0=new RegExp("^"+Y0+q0+Z0+K0+"$"),J0=["material","materials","bones","map"],Cu=class{constructor(t,e,i){let s=i||rn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},rn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W0,"")}static parseTrackName(t){let e=$0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);J0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){me("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=Cu;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bb=new Float32Array(1);var Bd=new He,lo=class{constructor(t,e,i=0,s=1/0){this.ray=new zs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bd),this}intersectObject(t,e=!0,i=[]){return Pu(t,this,i,e),i.sort(Vd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Pu(t[s],this,i,e);return i.sort(Vd),i}};function Vd(n,t){return n.distance-t.distance}function Pu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Pu(r[a],t,e,!0)}}var ra=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var uh=class uh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};uh.prototype.isMatrix2=!0;var Iu=uh;var co=class extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function rh(n,t,e,i){let s=j0(i);switch(e){case Ku:return n*t;case ql:return n*t/s.components*s.byteLength;case Zl:return n*t/s.components*s.byteLength;case Ks:return n*t*2/s.components*s.byteLength;case Kl:return n*t*2/s.components*s.byteLength;case $u:return n*t*3/s.components*s.byteLength;case Ii:return n*t*4/s.components*s.byteLength;case $l:return n*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:case tc:return Math.max(n,16)*Math.max(t,8)/4;case Jl:case Ql:return Math.max(n,8)*Math.max(t,8)/2;case ec:case nc:case sc:case rc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ic:case xo:case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case bc:case Mc:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case wc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vo:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function j0(n){switch(n){case hi:case Xu:return{byteLength:1,components:1};case la:case Yu:case $i:return{byteLength:2,components:1};case Xl:case Yl:return{byteLength:2,components:4};case Ki:case Wl:case Pi:return{byteLength:4,components:1};case qu:case Zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function np(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ag(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
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
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vg=`#ifdef USE_IRIDESCENCE
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
#endif`,bg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
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
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`uniform sampler2D dfgLUT;
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
}`,ay=`
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,by=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,p_=`#if DEPTH_PACKING == 3200
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
}`,m_=`#define DISTANCE
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
}`,g_=`#define DISTANCE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
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
}`,v_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
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
}`,A_=`#define MATCAP
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
}`,E_=`#define MATCAP
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
}`,T_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,P_=`#define STANDARD
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
}`,I_=`#define STANDARD
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
}`,L_=`#define TOON
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
}`,D_=`#define TOON
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
}`,N_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 color;
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
}`,z_=`uniform float rotation;
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
}`,B_=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:og,alphahash_pars_fragment:lg,alphamap_fragment:cg,alphamap_pars_fragment:ug,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:yg,beginnormal_vertex:_g,bsdfs:xg,iridescence_fragment:vg,bumpmap_pars_fragment:bg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Ag,color_fragment:Eg,color_pars_fragment:Tg,color_pars_vertex:kg,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Lg,displacementmap_vertex:Dg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Ug,colorspace_fragment:Fg,colorspace_pars_fragment:Og,envmap_fragment:zg,envmap_common_pars_fragment:Bg,envmap_pars_fragment:Vg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Qg,envmap_vertex:Hg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:Yg,fog_pars_fragment:qg,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Kg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Jg,lights_pars_begin:jg,lights_toon_fragment:ty,lights_toon_pars_fragment:ey,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:ay,lights_fragment_maps:oy,lights_fragment_end:ly,lightprobes_pars_fragment:cy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:dy,logdepthbuf_vertex:fy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:yy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:xy,morphinstance_vertex:vy,morphcolor_vertex:by,morphnormal_vertex:My,morphtarget_pars_vertex:Sy,morphtarget_vertex:wy,normal_fragment_begin:Ay,normal_fragment_maps:Ey,normal_pars_fragment:Ty,normal_pars_vertex:ky,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Ny,packing:Uy,premultiplied_alpha_fragment:Fy,project_vertex:Oy,dithering_fragment:zy,dithering_pars_fragment:By,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:Zy,skinning_vertex:Ky,skinnormal_vertex:$y,specularmap_fragment:Jy,specularmap_pars_fragment:jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:t_,transmission_fragment:e_,transmission_pars_fragment:n_,uv_pars_fragment:i_,uv_pars_vertex:s_,uv_vertex:r_,worldpos_vertex:a_,background_vert:o_,background_frag:l_,backgroundCube_vert:c_,backgroundCube_frag:u_,cube_vert:h_,cube_frag:d_,depth_vert:f_,depth_frag:p_,distance_vert:m_,distance_frag:g_,equirect_vert:y_,equirect_frag:__,linedashed_vert:x_,linedashed_frag:v_,meshbasic_vert:b_,meshbasic_frag:M_,meshlambert_vert:S_,meshlambert_frag:w_,meshmatcap_vert:A_,meshmatcap_frag:E_,meshnormal_vert:T_,meshnormal_frag:k_,meshphong_vert:R_,meshphong_frag:C_,meshphysical_vert:P_,meshphysical_frag:I_,meshtoon_vert:L_,meshtoon_frag:D_,points_vert:N_,points_frag:U_,shadow_vert:F_,shadow_frag:O_,sprite_vert:z_,sprite_frag:B_},Xt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},ds={basic:{uniforms:Kn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Kn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Kn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Kn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Kn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Kn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Kn([Xt.points,Xt.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Kn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Kn([Xt.common,Xt.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Kn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Kn([Xt.sprite,Xt.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Kn([Xt.common,Xt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Kn([Xt.lights,Xt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ds.physical={uniforms:Kn([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Rc={r:0,b:0,g:0},V_=new He,ip=new be;ip.set(-1,0,0,0,1,0,0,0,1);function G_(n,t,e,i,s,r){let a=new le(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let b=S.backgroundBlurriness>0;E=t.get(E,b)}return E}function g(S){let E=!1,b=f(S);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,E){let b=f(E);b&&(b.isCubeTexture||b.mapping===fo)?(c===void 0&&(c=new Et(new xn(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:gr(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,x,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V_.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ip),c.material.toneMapped=Ie.getTransfer(b.colorSpace)!==Ye,(u!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Et(new nn(2,2),new Mi({name:"BackgroundMaterial",uniforms:gr(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(b.colorSpace)!==Ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(Rc,nh(n)),e.buffers.color.setClear(Rc.r,Rc.g,Rc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function H_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,O,V,L,G){let J=!1,K=d(D,L,V,O);r!==K&&(r=K,c(r.object)),J=f(D,L,V,G),J&&g(D,L,V,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(D,O,V,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,O,V,L){let G=L.wireframe===!0,J=i[O.id];J===void 0&&(J={},i[O.id]=J);let K=D.isInstancedMesh===!0?D.id:0,at=J[K];at===void 0&&(at={},J[K]=at);let z=at[V.id];z===void 0&&(z={},at[V.id]=z);let q=z[G];return q===void 0&&(q=h(l()),z[G]=q),q}function h(D){let O=[],V=[],L=[];for(let G=0;G<e;G++)O[G]=0,V[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,O,V,L){let G=r.attributes,J=O.attributes,K=0,at=V.getAttributes();for(let z in at)if(at[z].location>=0){let Q=G[z],Dt=J[z];if(Dt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(Dt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(Dt=D.instanceColor)),Q===void 0||Q.attribute!==Dt||Dt&&Q.data!==Dt.data)return!0;K++}return r.attributesNum!==K||r.index!==L}function g(D,O,V,L){let G={},J=O.attributes,K=0,at=V.getAttributes();for(let z in at)if(at[z].location>=0){let Q=J[z];Q===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Dt={};Dt.attribute=Q,Q&&Q.data&&(Dt.data=Q.data),G[z]=Dt,K++}r.attributes=G,r.attributesNum=K,r.index=L}function y(){let D=r.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){let V=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;V[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),G[D]!==O&&(n.vertexAttribDivisor(D,O),G[D]=O)}function S(){let D=r.newAttributes,O=r.enabledAttributes;for(let V=0,L=O.length;V<L;V++)O[V]!==D[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function E(D,O,V,L,G,J,K){K===!0?n.vertexAttribIPointer(D,O,V,G,J):n.vertexAttribPointer(D,O,V,L,G,J)}function b(D,O,V,L){y();let G=L.attributes,J=V.getAttributes(),K=O.defaultAttributeValues;for(let at in J){let z=J[at];if(z.location>=0){let q=G[at];if(q===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){let Q=q.normalized,Dt=q.itemSize,yt=t.get(q);if(yt===void 0)continue;let qt=yt.buffer,Kt=yt.type,Nt=yt.bytesPerElement,nt=Kt===n.INT||Kt===n.UNSIGNED_INT||q.gpuType===Wl;if(q.isInterleavedBufferAttribute){let ut=q.data,Rt=ut.stride,jt=q.offset;if(ut.isInstancedInterleavedBuffer){for(let Ct=0;Ct<z.locationSize;Ct++)p(z.location+Ct,ut.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ct=0;Ct<z.locationSize;Ct++)m(z.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Ct=0;Ct<z.locationSize;Ct++)E(z.location+Ct,Dt/z.locationSize,Kt,Q,Rt*Nt,(jt+Dt/z.locationSize*Ct)*Nt,nt)}else{if(q.isInstancedBufferAttribute){for(let ut=0;ut<z.locationSize;ut++)p(z.location+ut,q.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ut=0;ut<z.locationSize;ut++)m(z.location+ut);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let ut=0;ut<z.locationSize;ut++)E(z.location+ut,Dt/z.locationSize,Kt,Q,Dt*Nt,Dt/z.locationSize*ut*Nt,nt)}}else if(K!==void 0){let Q=K[at];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(z.location,Q);break;case 3:n.vertexAttrib3fv(z.location,Q);break;case 4:n.vertexAttrib4fv(z.location,Q);break;default:n.vertexAttrib1fv(z.location,Q)}}}}S()}function A(){M();for(let D in i){let O=i[D];for(let V in O){let L=O[V];for(let G in L){let J=L[G];for(let K in J)u(J[K].object),delete J[K];delete L[G]}}delete i[D]}}function x(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let V in O){let L=O[V];for(let G in L){let J=L[G];for(let K in J)u(J[K].object),delete J[K];delete L[G]}}delete i[D.id]}function k(D){for(let O in i){let V=i[O];for(let L in V){let G=V[L];if(G[D.id]===void 0)continue;let J=G[D.id];for(let K in J)u(J[K].object),delete J[K];delete G[D.id]}}}function v(D){for(let O in i){let V=i[O],L=D.isInstancedMesh===!0?D.id:0,G=V[L];if(G!==void 0){for(let J in G){let K=G[J];for(let at in K)u(K[at].object),delete K[at];delete G[J]}delete V[L],Object.keys(V).length===0&&delete i[O]}}}function M(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:x,releaseStatesOfObject:v,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function W_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function X_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let k=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(k){return!(k!==Ii&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(k){let v=k===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==hi&&k!==Pi&&!v&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(me("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),x=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:x}}function Y_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new xi,o=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:i,E=S*4,b=p.clippingState||null;l.value=b,b=u(g,h,E,f);for(let A=0;A!==E;++A)b[A]=e[A];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==y;++E,b+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ha=4,q_=6,Z_=20,K_=256,Mo=new sa,Nf=new le,hh=null,dh=0,fh=0,ph=!1,$_=new C,yr=new C,fa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=$_}=r;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,dh,fh),this._renderer.xr.enabled=ph,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:$i,format:Ii,colorSpace:Na,depthBuffer:!1},s=Uf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J_(r)),this._blurMaterial=Q_(r,t,e),this._ggxMaterial=j_(r,t,e)}return s}_compileMaterial(t){let e=new Et(new hn,t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,i,s,r){let l=new zn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Nf),d.toneMapping=Zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new xn,new en({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Nf),p=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let A=this._cubeSize;ua(s,b*A,E>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===qs||t.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ff());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ua(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Mo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-ha?i-g+ha:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ua(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ua(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Mo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ha?s-this._lodMax+ha:0),h=4*(this._cubeSize-u);ua(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Mo)}};function J_(n){let t=[],e=[],i=n,s=n-ha+1+q_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,E=p>2?0:-1,b=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(b,f*h*p);for(let A=0;A<h;A++){let x=u[A*2]*2-1,k=u[A*2+1]*2-1;p===0?yr.set(1,k,x):p===1?yr.set(-x,1,-k):p===2?yr.set(-x,k,1):p===3?yr.set(-1,k,-x):p===4?yr.set(-x,-1,k):yr.set(x,k,-1),yr.toArray(y,(p*h+A)*f)}}let m=new hn;m.setAttribute("position",new yn(g,f)),m.setAttribute("outputDirection",new yn(y,f)),e.push(new Et(m,null)),i>ha&&i--}return{lodMeshes:e,sizeLods:t}}function Uf(n,t,e){let i=new ui(n,t,e);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function j_(n,t,e){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Q_(n,t,e){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:Z_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Ff(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Of(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pc=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ha(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:us});r.uniforms.tEquirect.value=e;let a=new Et(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Sn),new Fl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function tx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Vl||f===Gl)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Pc(g.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Vl||f===Gl,y=f===qs||f===pr;if(g||y){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new fa(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new fa(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Vl?h.mapping=qs:f===Gl&&(h.mapping=pr),h}function l(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function ex(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ar("WebGLRenderer: "+i+" extension not supported."),s}}}function nx(n,t,e,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let E=0,b=S.length;E<b;E+=3){let A=S[E+0],x=S[E+1],k=S[E+2];h.push(A,x,x,k,k,A)}}else{let S=g.array;y=g.version;for(let E=0,b=S.length/3-1;E<b;E+=3){let A=E+0,x=E+1,k=E+2;h.push(A,x,x,k,k,A)}}let m=new(g.count>=65535?Ba:za)(h,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ix(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function rx(n,t,e){let i=new WeakMap,s=new cn;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let M=function(){k.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let b=o.attributes.position.count*E,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let x=new Float32Array(b*A*4*d),k=new Oa(x,b,A,d);k.type=Pi,k.needsUpdate=!0;let v=E*4;for(let P=0;P<d;P++){let D=m[P],O=p[P],V=S[P],L=b*A*4*P;for(let G=0;G<D.count;G++){let J=G*v;f===!0&&(s.fromBufferAttribute(D,G),x[L+J+0]=s.x,x[L+J+1]=s.y,x[L+J+2]=s.z,x[L+J+3]=0),g===!0&&(s.fromBufferAttribute(O,G),x[L+J+4]=s.x,x[L+J+5]=s.y,x[L+J+6]=s.z,x[L+J+7]=0),y===!0&&(s.fromBufferAttribute(V,G),x[L+J+8]=s.x,x[L+J+9]=s.y,x[L+J+10]=s.z,x[L+J+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:k,size:new kt(b,A)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function ax(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var ox={[Ou]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[Vu]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[ho]:"NEUTRAL_TONE_MAPPING",[Gu]:"CUSTOM_TONE_MAPPING"};function lx(n,t,e,i,s,r){let a=new ui(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new hn;c.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ze([0,2,0,0,2,0],2));let u=new wl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Et(c,u),h=new sa(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],E=!1;this.setSize=function(b,A){a.setSize(b,A),o!==null&&o.setSize(b,A),l!==null&&l.setSize(b,A);for(let x=0;x<S.length;x++){let k=S[x];k.setSize&&k.setSize(b,A)}},this.setEffects=function(b){S=b,E=S.length>0&&S[0].isRenderPass===!0;let A=a.width,x=a.height;S.length>0&&o===null&&(o=new ui(A,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new ui(A,x,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<S.length;k++){let v=S[k];v.setSize&&v.setSize(A,x)}},this.begin=function(b,A){if(y||b.toneMapping===Zi&&S.length===0)return!1;if(p=A,A!==null){let x=A.width,k=A.height;(a.width!==x||a.height!==k)&&this.setSize(x,k)}return E===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Zi,!0},this.hasRenderPass=function(){return E},this.end=function(b,A){b.toneMapping=m,y=!0;let x=a,k=o;for(let v=0;v<S.length;v++){let M=S[v];M.enabled!==!1&&(M.render(b,k,x,A),M.needsSwap!==!1&&(x=k,k=k===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,u.defines={},Ie.getTransfer(f)===Ye&&(u.defines.SRGB_TRANSFER="");let v=ox[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(p),b.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var sp=new ei,yh=new Bs(1,1),rp=new Oa,ap=new gl,op=new Ha,zf=[],Bf=[],Vf=new Float32Array(16),Gf=new Float32Array(9),Hf=new Float32Array(4);function pa(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function In(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dc(n,t){let e=Bf[t];e===void 0&&(e=new Int32Array(t),Bf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;n.uniform2fv(this.addr,t),Ln(e,t)}}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(In(e,t))return;n.uniform3fv(this.addr,t),Ln(e,t)}}function dx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;n.uniform4fv(this.addr,t),Ln(e,t)}}function fx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(In(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ln(e,t)}else{if(In(e,i))return;Hf.set(i),n.uniformMatrix2fv(this.addr,!1,Hf),Ln(e,i)}}function px(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(In(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ln(e,t)}else{if(In(e,i))return;Gf.set(i),n.uniformMatrix3fv(this.addr,!1,Gf),Ln(e,i)}}function mx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(In(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ln(e,t)}else{if(In(e,i))return;Vf.set(i),n.uniformMatrix4fv(this.addr,!1,Vf),Ln(e,i)}}function gx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;n.uniform2iv(this.addr,t),Ln(e,t)}}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;n.uniform3iv(this.addr,t),Ln(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;n.uniform4iv(this.addr,t),Ln(e,t)}}function vx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;n.uniform2uiv(this.addr,t),Ln(e,t)}}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;n.uniform3uiv(this.addr,t),Ln(e,t)}}function Sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;n.uniform4uiv(this.addr,t),Ln(e,t)}}function wx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yh.compareFunction=e.isReversedDepthBuffer()?kc:Tc,r=yh):r=sp,e.setTexture2D(t||r,s)}function Ax(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ap,s)}function Ex(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||op,s)}function Tx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||rp,s)}function kx(n){switch(n){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return yx;case 35668:case 35672:return _x;case 35669:case 35673:return xx;case 5125:return vx;case 36294:return bx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}function Rx(n,t){n.uniform1fv(this.addr,t)}function Cx(n,t){let e=pa(t,this.size,2);n.uniform2fv(this.addr,e)}function Px(n,t){let e=pa(t,this.size,3);n.uniform3fv(this.addr,e)}function Ix(n,t){let e=pa(t,this.size,4);n.uniform4fv(this.addr,e)}function Lx(n,t){let e=pa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dx(n,t){let e=pa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Nx(n,t){let e=pa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ux(n,t){n.uniform1iv(this.addr,t)}function Fx(n,t){n.uniform2iv(this.addr,t)}function Ox(n,t){n.uniform3iv(this.addr,t)}function zx(n,t){n.uniform4iv(this.addr,t)}function Bx(n,t){n.uniform1uiv(this.addr,t)}function Vx(n,t){n.uniform2uiv(this.addr,t)}function Gx(n,t){n.uniform3uiv(this.addr,t)}function Hx(n,t){n.uniform4uiv(this.addr,t)}function Wx(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=yh:a=sp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Xx(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ap,r[a])}function Yx(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||op,r[a])}function qx(n,t,e){let i=this.cache,s=t.length,r=Dc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rp,r[a])}function Zx(n){switch(n){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Lx;case 35675:return Dx;case 35676:return Nx;case 5124:case 35670:return Ux;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return zx;case 5125:return Bx;case 36294:return Vx;case 36295:return Gx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return qx}}var _h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kx(e.type)}},xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Wf(n,t){n.seq.push(t),n.map[t.id]=t}function Kx(n,t,e){let i=n.name,s=i.length;for(mh.lastIndex=0;;){let r=mh.exec(i),a=mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wf(e,c===void 0?new _h(o,n,t):new xh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new vh(o),Wf(e,d)),e=d}}}var da=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Kx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Xf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var $x=37297,Jx=0;function jx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Yf=new be;function Qx(n){Ie._getMatrix(Yf,Ie.workingColorSpace,n);let t=`mat3( ${Yf.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(n)){case Ua:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jx(n.getShaderSource(t),o)}else return r}function tv(n,t){let e=Qx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ev={[Ou]:"Linear",[zu]:"Reinhard",[Bu]:"Cineon",[Vu]:"ACESFilmic",[Hu]:"AgX",[ho]:"Neutral",[Gu]:"Custom"};function nv(n,t){let e=ev[t];return e===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cc=new C;function iv(){Ie.getLuminanceCoefficients(Cc);let n=Cc.x.toFixed(4),t=Cc.y.toFixed(4),e=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function rv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function av(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function wo(n){return n!==""}function Zf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(ov,cv)}var lv=new Map;function cv(n,t){let e=ke[t];if(e===void 0){let i=lv.get(t);if(i!==void 0)e=ke[i],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bh(e)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(n){return n.replace(uv,hv)}function hv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var dv={[dr]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function fv(n){return dv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pv={[qs]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function mv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var gv={[pr]:"ENVMAP_MODE_REFRACTION"};function yv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _v={[Bl]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[hf]:"ENVMAP_BLENDING_ADD"};function xv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_v[n.combine]||"ENVMAP_BLENDING_NONE"}function vv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function bv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=fv(e),c=mv(e),u=yv(e),d=xv(e),h=vv(e),f=sv(e),g=rv(r),y=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),p.length>0&&(p+=`
`)):(m=[Jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),p=[Jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?ke.tonemapping_pars_fragment:"",e.toneMapping!==Zi?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,tv("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),a=bh(a),a=Zf(a,e),a=Kf(a,e),o=bh(o),o=Zf(o,e),o=Kf(o,e),a=$f(a),o=$f(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=S+m+a,b=S+p+o,A=Xf(s,s.VERTEX_SHADER,E),x=Xf(s,s.FRAGMENT_SHADER,b);s.attachShader(y,A),s.attachShader(y,x),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function k(D){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(x)||"",G=O.trim(),J=V.trim(),K=L.trim(),at=!0,z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,A,x);else{let q=qf(s,A,"vertex"),Q=qf(s,x,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+q+`
`+Q)}else G!==""?me("WebGLProgram: Program Info Log:",G):(J===""||K==="")&&(z=!1);z&&(D.diagnostics={runnable:at,programLog:G,vertexShader:{log:J,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(x),v=new da(s,y),M=av(s,y)}let v;this.getUniforms=function(){return v===void 0&&k(this),v};let M;this.getAttributes=function(){return M===void 0&&k(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,$x)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=x,this}var Mv=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sh(t),e.set(t,i)),i}},Sh=class{constructor(t){this.id=Mv++,this.code=t,this.usedTimes=0}};function Sv(n){return n===Ks||n===xo||n===vo}function wv(n,t,e,i,s,r){let a=new qr,o=new Mh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,M,P,D,O,V){let L=D.fog,G=O.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||J,K),z=at&&at.mapping===fo?at.image.height:null,q=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&me("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Dt=Q!==void 0?Q.length:0,yt=0;G.morphAttributes.position!==void 0&&(yt=1),G.morphAttributes.normal!==void 0&&(yt=2),G.morphAttributes.color!==void 0&&(yt=3);let qt,Kt,Nt,nt;if(q){let Ae=ds[q];qt=Ae.vertexShader,Kt=Ae.fragmentShader}else{qt=v.vertexShader,Kt=v.fragmentShader;let Ae=o.getVertexShaderStage(v),X=o.getFragmentShaderStage(v);o.update(v,Ae,X),Nt=Ae.id,nt=X.id}let ut=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),jt=O.isInstancedMesh===!0,Ct=O.isBatchedMesh===!0,bt=!!v.map,ue=!!v.matcap,ct=!!at,pt=!!v.aoMap,xt=!!v.lightMap,vt=!!v.bumpMap&&v.wireframe===!1,Tt=!!v.normalMap,Yt=!!v.displacementMap,Vt=!!v.emissiveMap,Ht=!!v.metalnessMap,se=!!v.roughnessMap,N=v.anisotropy>0,we=v.clearcoat>0,oe=v.dispersion>0,T=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,Y=v.transmission>0,it=N&&!!v.anisotropyMap,At=we&&!!v.clearcoatMap,Pt=we&&!!v.clearcoatNormalMap,ot=we&&!!v.clearcoatRoughnessMap,ft=_&&!!v.iridescenceMap,Ut=_&&!!v.iridescenceThicknessMap,$t=B&&!!v.sheenColorMap,It=B&&!!v.sheenRoughnessMap,Lt=!!v.specularMap,et=!!v.specularColorMap,gt=!!v.specularIntensityMap,wt=Y&&!!v.transmissionMap,I=Y&&!!v.thicknessMap,st=!!v.gradientMap,Z=!!v.alphaMap,_t=v.alphaTest>0,Mt=!!v.alphaHash,dt=!!v.extensions,Gt=Zi;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let Ot={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:qt,fragmentShader:Kt,defines:v.defines,customVertexShaderID:Nt,customFragmentShaderID:nt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Ct,batchingColor:Ct&&O._colorsTexture!==null,instancing:jt,instancingColor:jt&&O.instanceColor!==null,instancingMorph:jt&&O.morphTexture!==null,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:bt,matcap:ue,envMap:ct,envMapMode:ct&&at.mapping,envMapCubeUVHeight:z,aoMap:pt,lightMap:xt,bumpMap:vt,normalMap:Tt,displacementMap:Yt,emissiveMap:Vt,normalMapObjectSpace:Tt&&v.normalMapType===pf,normalMapTangentSpace:Tt&&v.normalMapType===bo,packedNormalMap:Tt&&v.normalMapType===bo&&Sv(v.normalMap.format),metalnessMap:Ht,roughnessMap:se,anisotropy:N,anisotropyMap:it,clearcoat:we,clearcoatMap:At,clearcoatNormalMap:Pt,clearcoatRoughnessMap:ot,dispersion:oe,retroreflection:T,iridescence:_,iridescenceMap:ft,iridescenceThicknessMap:Ut,sheen:B,sheenColorMap:$t,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:et,specularIntensityMap:gt,transmission:Y,transmissionMap:wt,thicknessMap:I,gradientMap:st,opaque:v.transparent===!1&&v.blending===oa&&v.alphaToCoverage===!1,alphaMap:Z,alphaTest:_t,alphaHash:Mt,combine:v.combine,mapUv:bt&&g(v.map.channel),aoMapUv:pt&&g(v.aoMap.channel),lightMapUv:xt&&g(v.lightMap.channel),bumpMapUv:vt&&g(v.bumpMap.channel),normalMapUv:Tt&&g(v.normalMap.channel),displacementMapUv:Yt&&g(v.displacementMap.channel),emissiveMapUv:Vt&&g(v.emissiveMap.channel),metalnessMapUv:Ht&&g(v.metalnessMap.channel),roughnessMapUv:se&&g(v.roughnessMap.channel),anisotropyMapUv:it&&g(v.anisotropyMap.channel),clearcoatMapUv:At&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(v.sheenRoughnessMap.channel),specularMapUv:Lt&&g(v.specularMap.channel),specularColorMapUv:et&&g(v.specularColorMap.channel),specularIntensityMapUv:gt&&g(v.specularIntensityMap.channel),transmissionMapUv:wt&&g(v.transmissionMap.channel),thicknessMapUv:I&&g(v.thicknessMap.channel),alphaMapUv:Z&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Tt||N),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(bt||Z),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&Tt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:yt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&Ie.getTransfer(v.map.colorSpace)===Ye,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(v.emissiveMap.colorSpace)===Ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(M,v),S(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let M=f[v.type],P;if(M){let D=ds[M];P=If.clone(D.uniforms)}else P=v.uniforms;return P}function b(v,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new bv(n,M,v,s),c.push(P),u.set(M,P)),P}function A(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function x(v){o.remove(v)}function k(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:b,releaseProgram:A,releaseShaderCache:x,programs:c,dispose:k}}function Av(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ev(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function jf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,m,p){let S=n[t];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[t]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function l(h,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let E=o(h,f,g,y,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(h,f,g,y,m,p){let S=o(h,f,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,f){e.length>1&&e.sort(h||Ev),i.length>1&&i.sort(f||jf),s.length>1&&s.sort(f||jf)}function d(){for(let h=t,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Tv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Qf,n.set(i,[a])):s>=r.length?(a=new Qf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function kv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new le};break;case"SpotLight":e={position:new C,direction:new C,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Rv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Cv=0;function Pv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Iv(n){let t=new kv,e=Rv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new He,a=new He;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,E=0,b=0,A=0,x=0,k=0,v=0,M=0,P=0;c.sort(Pv);for(let O=0,V=c.length;O<V;O++){let L=c[O],G=L.color,J=L.intensity,K=L.distance,at=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ks?at=L.shadow.map.texture:at=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=G.r*J,d+=G.g*J,h+=G.b*J;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],J);P++}else if(L.isSunLight){let z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,Q=e.get(L);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=at;let Dt=q.getViewportCount();for(let yt=0;yt<Dt;yt++)i.sunShadowMatrix[y+yt]=q.getMatrix(yt),i.sunShadowCascade[y+yt]=q._cascadeData[yt];y+=Dt,g++}i.sun[f]=z,f++}else if(L.isDirectionalLight){let z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,Q=e.get(L);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=L.shadow.matrix,A++}i.directional[m]=z,m++}else if(L.isSpotLight){let z=t.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(G).multiplyScalar(J),z.distance=K,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[S]=z;let q=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,q.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[S]=q.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,i.spotShadow[S]=Q,i.spotShadowMap[S]=at,k++}S++}else if(L.isRectAreaLight){let z=t.get(L);z.color.copy(G).multiplyScalar(J),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=z,E++}else if(L.isPointLight){let z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let q=L.shadow,Q=e.get(L);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=at,i.pointShadowMatrix[p]=L.shadow.matrix,x++}i.point[p]=z,p++}else if(L.isHemisphereLight){let z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(J),z.groundColor.copy(L.groundColor).multiplyScalar(J),i.hemi[b]=z,b++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xt.LTC_FLOAT_1,i.rectAreaLTC2=Xt.LTC_FLOAT_2):(i.rectAreaLTC1=Xt.LTC_HALF_1,i.rectAreaLTC2=Xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==E||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==x||D.numSpotShadows!==k||D.numSpotMaps!==v||D.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=S,i.rectArea.length=E,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=x,i.pointShadowMap.length=x,i.pointShadowMatrix.length=x,i.spotShadow.length=k,i.spotShadowMap.length=k,i.spotLightMatrix.length=k+v-M,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=P,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=E,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=x,D.numSpotShadows=k,D.numSpotMaps=v,D.numLightProbes=P,i.version=Cv++)}function l(c,u){let d=0,h=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let b=c[S];if(b.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(b.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function tp(n){let t=new Iv(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Lv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tp(n),t.set(s,[o])):r>=a.length?(o=new tp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
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
}`,Uv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Fv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],ep=new He,So=new C,gh=new C;function Ov(n,t,e){let i=new $r,s=new kt,r=new kt,a=new cn,o=new Al,l=new El,c={},u=e.maxTextureSize,d={[Ys]:Vn,[Vn]:Ys,[wn]:wn},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Dv,fragmentShader:Nv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new hn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let p=this.type;this.render=function(x,k,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Wd&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dr);let M=n.getRenderTarget(),P=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(us),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&k.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=x.length;L<G;L++){let J=x[L],K=J.shadow;if(K===void 0){me("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let at=K.getFrameExtents();s.multiply(at),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,K.mapSize.y=r.y));let z=n.state.buffers.depth.getReversed();if(K.camera._reversedDepth=z,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===aa){if(J.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ui(s.x,s.y,{format:Ks,type:$i,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new Bs(s.x,s.y,Pi),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=as,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=On,K.map.depthTexture.magFilter=On}else J.isPointLight?(K.map=new Pc(s.x),K.map.depthTexture=new vl(s.x,Ki)):(K.map=new ui(s.x,s.y),K.map.depthTexture=new Bs(s.x,s.y,Ki)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=as,this.type===dr?(K.map.depthTexture.compareFunction=z?kc:Tc,K.map.depthTexture.minFilter=Sn,K.map.depthTexture.magFilter=Sn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=On,K.map.depthTexture.magFilter=On);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let q=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();J.isPointLight!==!0&&K.updateMatrices(J,v);for(let Q=0;Q<q;Q++){let Dt=K.getCamera(Q);if(J.isPointLight){let yt=K.camera,qt=K.matrix,Kt=J.distance||yt.far;Kt!==yt.far&&(yt.far=Kt,yt.updateProjectionMatrix()),So.setFromMatrixPosition(J.matrixWorld),yt.position.copy(So),gh.copy(yt.position),gh.add(Uv[Q]),yt.up.copy(Fv[Q]),yt.lookAt(gh),yt.updateMatrixWorld(),qt.makeTranslation(-So.x,-So.y,-So.z),ep.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(ep,yt.coordinateSystem,yt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)n.setRenderTarget(K.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(K.map),n.clear());let yt=K.getViewport(Q);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),O.viewport(a)}i=K.getFrustum(Q),b(k,v,Dt,J,this.type)}K.isPointLightShadow!==!0&&this.type===aa&&S(K,v),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,P,D)};function S(x,k){let v=t.update(y);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new ui(s.x,s.y,{format:Ks,type:$i}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),h.uniforms.shadow_pass.value=x.map.depthTexture,h.uniforms.resolution.value.set(x.map.width,x.map.height),h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(k,null,v,h,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(k,null,v,f,y,null)}function E(x,k,v,M){let P=null,D=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(D!==void 0)P=D;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){let O=P.uuid,V=k.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let G=L[V];G===void 0&&(G=P.clone(),L[V]=G,k.addEventListener("dispose",A)),P=G}if(P.visible=k.visible,P.wireframe=k.wireframe,M===aa?P.side=k.shadowSide!==null?k.shadowSide:k.side:P.side=k.shadowSide!==null?k.shadowSide:d[k.side],P.alphaMap=k.alphaMap,P.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,P.map=k.map,P.clipShadows=k.clipShadows,P.clippingPlanes=k.clippingPlanes,P.clipIntersection=k.clipIntersection,P.displacementMap=k.displacementMap,P.displacementScale=k.displacementScale,P.displacementBias=k.displacementBias,P.wireframeLinewidth=k.wireframeLinewidth,P.linewidth=k.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=v}return P}function b(x,k,v,M,P){if(x.visible===!1)return;if(x.layers.test(k.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===aa)&&(!x.frustumCulled||x.intersectsFrustum(i))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);let V=t.update(x),L=x.material;if(Array.isArray(L)){let G=V.groups;for(let J=0,K=G.length;J<K;J++){let at=G[J],z=L[at.materialIndex];if(z&&z.visible){let q=E(x,z,M,P);x.onBeforeShadow(n,x,k,v,V,q,at),n.renderBufferDirect(v,null,V,q,x,at),x.onAfterShadow(n,x,k,v,V,q,at)}}}else if(L.visible){let G=E(x,L,M,P);x.onBeforeShadow(n,x,k,v,V,G,null),n.renderBufferDirect(v,null,V,G,x,null),x.onAfterShadow(n,x,k,v,V,G,null)}}let O=x.children;for(let V=0,L=O.length;V<L;V++)b(O[V],k,v,M,P)}function A(x){x.target.removeEventListener("dispose",A);for(let v in c){let M=c[v],P=x.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function zv(n,t){function e(){let I=!1,st=new cn,Z=null,_t=new cn(0,0,0,0);return{setMask:function(Mt){Z!==Mt&&!I&&(n.colorMask(Mt,Mt,Mt,Mt),Z=Mt)},setLocked:function(Mt){I=Mt},setClear:function(Mt,dt,Gt,Ot,Ae){Ae===!0&&(Mt*=Ot,dt*=Ot,Gt*=Ot),st.set(Mt,dt,Gt,Ot),_t.equals(st)===!1&&(n.clearColor(Mt,dt,Gt,Ot),_t.copy(st))},reset:function(){I=!1,Z=null,_t.set(-1,0,0,0)}}}function i(){let I=!1,st=!1,Z=null,_t=null,Mt=null;return{setReversed:function(dt){if(st!==dt){let Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),st=dt;let Ot=Mt;Mt=null,this.setClear(Ot)}},getReversed:function(){return st},setTest:function(dt){dt?ut(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!I&&(n.depthMask(dt),Z=dt)},setFunc:function(dt){if(st&&(dt=Ef[dt]),_t!==dt){switch(dt){case rl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=dt}},setLocked:function(dt){I=dt},setClear:function(dt){Mt!==dt&&(Mt=dt,st&&(dt=1-dt),n.clearDepth(dt))},reset:function(){I=!1,Z=null,_t=null,Mt=null,st=!1}}}function s(){let I=!1,st=null,Z=null,_t=null,Mt=null,dt=null,Gt=null,Ot=null,Ae=null;return{setTest:function(X){I||(X?ut(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(X){st!==X&&!I&&(n.stencilMask(X),st=X)},setFunc:function(X,St,R){(Z!==X||_t!==St||Mt!==R)&&(n.stencilFunc(X,St,R),Z=X,_t=St,Mt=R)},setOp:function(X,St,R){(dt!==X||Gt!==St||Ot!==R)&&(n.stencilOp(X,St,R),dt=X,Gt=St,Ot=R)},setLocked:function(X){I=X},setClear:function(X){Ae!==X&&(n.clearStencil(X),Ae=X)},reset:function(){I=!1,st=null,Z=null,_t=null,Mt=null,dt=null,Gt=null,Ot=null,Ae=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,b=null,A=null,x=null,k=null,v=new le(0,0,0),M=0,P=!1,D=null,O=null,V=null,L=null,G=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,at=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=at>=1):z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=at>=2);let q=null,Q={},Dt=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),qt=new cn().fromArray(Dt),Kt=new cn().fromArray(yt);function Nt(I,st,Z,_t){let Mt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(I,dt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<Z;Gt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(st,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(st+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return dt}let nt={};nt[n.TEXTURE_2D]=Nt(n.TEXTURE_2D,n.TEXTURE_2D,1),nt[n.TEXTURE_CUBE_MAP]=Nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[n.TEXTURE_2D_ARRAY]=Nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),nt[n.TEXTURE_3D]=Nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),a.setFunc(Gr),vt(!1),Tt(Lu),ut(n.CULL_FACE),pt(us);function ut(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Rt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function jt(I,st){return h[I]!==st?(n.bindFramebuffer(I,st),h[I]=st,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=st),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(I,st){let Z=g,_t=!1;if(I){Z=f.get(st),Z===void 0&&(Z=[],f.set(st,Z));let Mt=I.textures;if(Z.length!==Mt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Gt=Mt.length;dt<Gt;dt++)Z[dt]=n.COLOR_ATTACHMENT0+dt;Z.length=Mt.length,_t=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,_t=!0);_t&&n.drawBuffers(Z)}function bt(I){return y!==I?(n.useProgram(I),y=I,!0):!1}let ue={[fr]:n.FUNC_ADD,[Yd]:n.FUNC_SUBTRACT,[qd]:n.FUNC_REVERSE_SUBTRACT};ue[Zd]=n.MIN,ue[Kd]=n.MAX;let ct={[$d]:n.ZERO,[Jd]:n.ONE,[jd]:n.SRC_COLOR,[Uu]:n.SRC_ALPHA,[rf]:n.SRC_ALPHA_SATURATE,[nf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[Fu]:n.ONE_MINUS_SRC_ALPHA,[sf]:n.ONE_MINUS_DST_COLOR,[ef]:n.ONE_MINUS_DST_ALPHA,[af]:n.CONSTANT_COLOR,[of]:n.ONE_MINUS_CONSTANT_COLOR,[lf]:n.CONSTANT_ALPHA,[cf]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(I,st,Z,_t,Mt,dt,Gt,Ot,Ae,X){if(I===us){m===!0&&(Rt(n.BLEND),m=!1);return}if(m===!1&&(ut(n.BLEND),m=!0),I!==Xd){if(I!==p||X!==P){if((S!==fr||A!==fr)&&(n.blendEquation(n.FUNC_ADD),S=fr,A=fr),X)switch(I){case oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uo:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ye("WebGLState: Invalid blending: ",I);break}else switch(I){case oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Du:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",I);break}E=null,b=null,x=null,k=null,v.set(0,0,0),M=0,p=I,P=X}return}Mt=Mt||st,dt=dt||Z,Gt=Gt||_t,(st!==S||Mt!==A)&&(n.blendEquationSeparate(ue[st],ue[Mt]),S=st,A=Mt),(Z!==E||_t!==b||dt!==x||Gt!==k)&&(n.blendFuncSeparate(ct[Z],ct[_t],ct[dt],ct[Gt]),E=Z,b=_t,x=dt,k=Gt),(Ot.equals(v)===!1||Ae!==M)&&(n.blendColor(Ot.r,Ot.g,Ot.b,Ae),v.copy(Ot),M=Ae),p=I,P=!1}function xt(I,st){I.side===wn?Rt(n.CULL_FACE):ut(n.CULL_FACE);let Z=I.side===Vn;st&&(Z=!Z),vt(Z),I.blending===oa&&I.transparent===!1?pt(us):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let _t=I.stencilWrite;o.setTest(_t),_t&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function Tt(I){I!==Gd?(ut(n.CULL_FACE),I!==O&&(I===Lu?n.cullFace(n.BACK):I===Hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),O=I}function Yt(I){I!==V&&(K&&n.lineWidth(I),V=I)}function Vt(I,st,Z){I?(ut(n.POLYGON_OFFSET_FILL),(L!==st||G!==Z)&&(L=st,G=Z,a.getReversed()&&(st=-st),n.polygonOffset(st,Z))):Rt(n.POLYGON_OFFSET_FILL)}function Ht(I){I?ut(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function se(I){I===void 0&&(I=n.TEXTURE0+J-1),q!==I&&(n.activeTexture(I),q=I)}function N(I,st,Z){Z===void 0&&(q===null?Z=n.TEXTURE0+J-1:Z=q);let _t=Q[Z];_t===void 0&&(_t={type:void 0,texture:void 0},Q[Z]=_t),(_t.type!==I||_t.texture!==st)&&(q!==Z&&(n.activeTexture(Z),q=Z),n.bindTexture(I,st||nt[I]),_t.type=I,_t.texture=st)}function we(){let I=Q[q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function _(){try{n.texSubImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function B(){try{n.texSubImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function it(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function At(){try{n.texStorage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function Pt(){try{n.texStorage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function ot(){try{n.texImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function ft(){try{n.texImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function Ut(I){return d[I]!==void 0?d[I]:n.getParameter(I)}function $t(I,st){d[I]!==st&&(n.pixelStorei(I,st),d[I]=st)}function It(I){qt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),qt.copy(I))}function Lt(I){Kt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Kt.copy(I))}function et(I,st){let Z=c.get(st);Z===void 0&&(Z=new WeakMap,c.set(st,Z));let _t=Z.get(I);_t===void 0&&(_t=n.getUniformBlockIndex(st,I.name),Z.set(I,_t))}function gt(I,st){let _t=c.get(st).get(I);l.get(st)!==_t&&(n.uniformBlockBinding(st,_t,I.__bindingPointIndex),l.set(st,_t))}function wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},q=null,Q={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,b=null,A=null,x=null,k=null,v=new le(0,0,0),M=0,P=!1,D=null,O=null,V=null,L=null,G=null,qt.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Rt,bindFramebuffer:jt,drawBuffers:Ct,useProgram:bt,setBlending:pt,setMaterial:xt,setFlipSided:vt,setCullFace:Tt,setLineWidth:Yt,setPolygonOffset:Vt,setScissorTest:Ht,activeTexture:se,bindTexture:N,unbindTexture:we,compressedTexImage2D:oe,compressedTexImage3D:T,texImage2D:ot,texImage3D:ft,pixelStorei:$t,getParameter:Ut,updateUBOMapping:et,uniformBlockBinding:gt,texStorage2D:At,texStorage3D:Pt,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:Y,compressedTexSubImage3D:it,scissor:It,viewport:Lt,reset:wt}}function Bv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,_){return g?new OffscreenCanvas(T,_):Fa("canvas")}function m(T,_,B){let Y=1,it=oe(T);if((it.width>B||it.height>B)&&(Y=B/Math.max(it.width,it.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let At=Math.floor(Y*it.width),Pt=Math.floor(Y*it.height);h===void 0&&(h=y(At,Pt));let ot=_?y(At,Pt):h;return ot.width=At,ot.height=Pt,ot.getContext("2d").drawImage(T,0,0,At,Pt),me("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+At+"x"+Pt+")."),ot}else return"data"in T&&me("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function p(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,_,B,Y,it,At=!1){if(T!==null){if(n[T]!==void 0)return n[T];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Pt;Y&&(Pt=t.get("EXT_texture_norm16"),Pt||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=_;if(_===n.RED&&(B===n.FLOAT&&(ot=n.R32F),B===n.HALF_FLOAT&&(ot=n.R16F),B===n.UNSIGNED_BYTE&&(ot=n.R8),B===n.UNSIGNED_SHORT&&Pt&&(ot=Pt.R16_EXT),B===n.SHORT&&Pt&&(ot=Pt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ot=n.R8UI),B===n.UNSIGNED_SHORT&&(ot=n.R16UI),B===n.UNSIGNED_INT&&(ot=n.R32UI),B===n.BYTE&&(ot=n.R8I),B===n.SHORT&&(ot=n.R16I),B===n.INT&&(ot=n.R32I)),_===n.RG&&(B===n.FLOAT&&(ot=n.RG32F),B===n.HALF_FLOAT&&(ot=n.RG16F),B===n.UNSIGNED_BYTE&&(ot=n.RG8),B===n.UNSIGNED_SHORT&&Pt&&(ot=Pt.RG16_EXT),B===n.SHORT&&Pt&&(ot=Pt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(ot=n.RG8UI),B===n.UNSIGNED_SHORT&&(ot=n.RG16UI),B===n.UNSIGNED_INT&&(ot=n.RG32UI),B===n.BYTE&&(ot=n.RG8I),B===n.SHORT&&(ot=n.RG16I),B===n.INT&&(ot=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),B===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),B===n.UNSIGNED_INT&&(ot=n.RGB32UI),B===n.BYTE&&(ot=n.RGB8I),B===n.SHORT&&(ot=n.RGB16I),B===n.INT&&(ot=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),B===n.UNSIGNED_INT&&(ot=n.RGBA32UI),B===n.BYTE&&(ot=n.RGBA8I),B===n.SHORT&&(ot=n.RGBA16I),B===n.INT&&(ot=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&Pt&&(ot=Pt.RGB16_EXT),B===n.SHORT&&Pt&&(ot=Pt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),_===n.RGBA){let ft=At?Ua:Ie.getTransfer(it);B===n.FLOAT&&(ot=n.RGBA32F),B===n.HALF_FLOAT&&(ot=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ot=ft===Ye?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&Pt&&(ot=Pt.RGBA16_EXT),B===n.SHORT&&Pt&&(ot=Pt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function A(T,_){let B;return T?_===null||_===Ki||_===ca?B=n.DEPTH24_STENCIL8:_===Pi?B=n.DEPTH32F_STENCIL8:_===la&&(B=n.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ki||_===ca?B=n.DEPTH_COMPONENT24:_===Pi?B=n.DEPTH_COMPONENT32F:_===la&&(B=n.DEPTH_COMPONENT16),B}function x(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==On&&T.minFilter!==Sn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function k(T){let _=T.target;_.removeEventListener("dispose",k),M(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function v(T){let _=T.target;_.removeEventListener("dispose",v),D(_)}function M(T){let _=i.get(T);if(_.__webglInit===void 0)return;let B=T.source,Y=f.get(B);if(Y){let it=Y[_.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(T),Object.keys(Y).length===0&&f.delete(B)}i.remove(T)}function P(T){let _=i.get(T);n.deleteTexture(_.__webglTexture);let B=T.source,Y=f.get(B);delete Y[_.__cacheKey],a.memory.textures--}function D(T){let _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let it=0;it<_.__webglFramebuffer[Y].length;it++)n.deleteFramebuffer(_.__webglFramebuffer[Y][it]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=T.textures;for(let Y=0,it=B.length;Y<it;Y++){let At=i.get(B[Y]);At.__webglTexture&&(n.deleteTexture(At.__webglTexture),a.memory.textures--),i.remove(B[Y])}i.remove(T)}let O=0;function V(){O=0}function L(){return O}function G(T){O=T}function J(){let T=O;return T>=s.maxTextures&&me("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function K(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function at(T,_){let B=i.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let Y=T.image;if(Y===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(B,T,_);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function z(T,_){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Rt(B,T,_);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function q(T,_){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Rt(B,T,_);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function Q(T,_){let B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){jt(B,T,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let Dt={[vi]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},yt={[On]:n.NEAREST,[df]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Hl]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},qt={[gf]:n.NEVER,[bf]:n.ALWAYS,[yf]:n.LESS,[Tc]:n.LEQUAL,[_f]:n.EQUAL,[kc]:n.GEQUAL,[xf]:n.GREATER,[vf]:n.NOTEQUAL};function Kt(T,_){if(_.type===Pi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Sn||_.magFilter===Hl||_.magFilter===po||_.magFilter===Ci||_.minFilter===Sn||_.minFilter===Hl||_.minFilter===po||_.minFilter===Ci)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Dt[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Dt[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Dt[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,yt[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,yt[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,qt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===On||_.minFilter!==po&&_.minFilter!==Ci||_.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Nt(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",k));let Y=_.source,it=f.get(Y);it===void 0&&(it={},f.set(Y,it));let At=K(_);if(At!==T.__cacheKey){it[At]===void 0&&(it[At]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),it[At].usedTimes++;let Pt=it[T.__cacheKey];Pt!==void 0&&(it[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&P(_)),T.__cacheKey=At,T.__webglTexture=it[At].texture}return B}function nt(T,_,B){return Math.floor(Math.floor(T/B)/_)}function ut(T,_,B,Y){let At=T.updateRanges;if(At.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,Y,_.data);else{At.sort(($t,It)=>$t.start-It.start);let Pt=0;for(let $t=1;$t<At.length;$t++){let It=At[Pt],Lt=At[$t],et=It.start+It.count,gt=nt(Lt.start,_.width,4),wt=nt(It.start,_.width,4);Lt.start<=et+1&&gt===wt&&nt(Lt.start+Lt.count-1,_.width,4)===gt?It.count=Math.max(It.count,Lt.start+Lt.count-It.start):(++Pt,At[Pt]=Lt)}At.length=Pt+1;let ot=e.getParameter(n.UNPACK_ROW_LENGTH),ft=e.getParameter(n.UNPACK_SKIP_PIXELS),Ut=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let $t=0,It=At.length;$t<It;$t++){let Lt=At[$t],et=Math.floor(Lt.start/4),gt=Math.ceil(Lt.count/4),wt=et%_.width,I=Math.floor(et/_.width),st=gt,Z=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,wt,I,st,Z,B,Y,_.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ot),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ut)}}function Rt(T,_,B){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);let it=Nt(T,_),At=_.source;e.bindTexture(Y,T.__webglTexture,n.TEXTURE0+B);let Pt=i.get(At);if(At.version!==Pt.__version||it===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Z=Ie.getPrimaries(Ie.workingColorSpace),_t=_.colorSpace===Ji?null:Ie.getPrimaries(_.colorSpace),Mt=_.colorSpace===Ji||Z===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ft=m(_.image,!1,s.maxTextureSize);ft=we(_,ft);let Ut=r.convert(_.format,_.colorSpace),$t=r.convert(_.type),It=b(_.internalFormat,Ut,$t,_.normalized,_.colorSpace,_.isVideoTexture);Kt(Y,_);let Lt,et=_.mipmaps,gt=_.isVideoTexture!==!0,wt=Pt.__version===void 0||it===!0,I=At.dataReady,st=x(_,ft);if(_.isDepthTexture)It=A(_.format===Zs,_.type),wt&&(gt?e.texStorage2D(n.TEXTURE_2D,1,It,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,It,ft.width,ft.height,0,Ut,$t,null));else if(_.isDataTexture)if(et.length>0){gt&&wt&&e.texStorage2D(n.TEXTURE_2D,st,It,et[0].width,et[0].height);for(let Z=0,_t=et.length;Z<_t;Z++)Lt=et[Z],gt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Ut,$t,Lt.data):e.texImage2D(n.TEXTURE_2D,Z,It,Lt.width,Lt.height,0,Ut,$t,Lt.data);_.generateMipmaps=!1}else gt?(wt&&e.texStorage2D(n.TEXTURE_2D,st,It,ft.width,ft.height),I&&ut(_,ft,Ut,$t)):e.texImage2D(n.TEXTURE_2D,0,It,ft.width,ft.height,0,Ut,$t,ft.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){gt&&wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,It,et[0].width,et[0].height,ft.depth);for(let Z=0,_t=et.length;Z<_t;Z++)if(Lt=et[Z],_.format!==Ii)if(Ut!==null)if(gt){if(I)if(_.layerUpdates.size>0){let Mt=rh(Lt.width,Lt.height,_.format,_.type);for(let dt of _.layerUpdates){let Gt=Lt.data.subarray(dt*Mt/Lt.data.BYTES_PER_ELEMENT,(dt+1)*Mt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,dt,Lt.width,Lt.height,1,Ut,Gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Lt.width,Lt.height,ft.depth,Ut,Lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,It,Lt.width,Lt.height,ft.depth,0,Lt.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Lt.width,Lt.height,ft.depth,Ut,$t,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,It,Lt.width,Lt.height,ft.depth,0,Ut,$t,Lt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{gt&&wt&&e.texStorage2D(n.TEXTURE_2D,st,It,et[0].width,et[0].height);for(let Z=0,_t=et.length;Z<_t;Z++)Lt=et[Z],_.format!==Ii?Ut!==null?gt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,It,Lt.width,Lt.height,0,Lt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Lt.width,Lt.height,Ut,$t,Lt.data):e.texImage2D(n.TEXTURE_2D,Z,It,Lt.width,Lt.height,0,Ut,$t,Lt.data)}else if(_.isDataArrayTexture)if(gt){if(wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,st,It,ft.width,ft.height,ft.depth),I)if(_.layerUpdates.size>0){let Z=rh(ft.width,ft.height,_.format,_.type);for(let _t of _.layerUpdates){let Mt=ft.data.subarray(_t*Z/ft.data.BYTES_PER_ELEMENT,(_t+1)*Z/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,ft.width,ft.height,1,Ut,$t,Mt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ut,$t,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,ft.width,ft.height,ft.depth,0,Ut,$t,ft.data);else if(_.isData3DTexture)gt?(wt&&e.texStorage3D(n.TEXTURE_3D,st,It,ft.width,ft.height,ft.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ut,$t,ft.data)):e.texImage3D(n.TEXTURE_3D,0,It,ft.width,ft.height,ft.depth,0,Ut,$t,ft.data);else if(_.isFramebufferTexture){if(wt)if(gt)e.texStorage2D(n.TEXTURE_2D,st,It,ft.width,ft.height);else{let Z=ft.width,_t=ft.height;for(let Mt=0;Mt<st;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,It,Z,_t,0,Ut,$t,null),Z>>=1,_t>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let Z=n.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),ft.parentNode!==Z){Z.appendChild(ft),d.add(_),Z.onpaint=_t=>{let Mt=_t.changedElements;for(let dt of d)Mt.includes(dt.image)&&(dt.needsUpdate=!0)},Z.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ft);else{let Mt=n.RGBA,dt=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Mt,dt,Gt,ft)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(et.length>0){if(gt&&wt){let Z=oe(et[0]);e.texStorage2D(n.TEXTURE_2D,st,It,Z.width,Z.height)}for(let Z=0,_t=et.length;Z<_t;Z++)Lt=et[Z],gt?I&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ut,$t,Lt):e.texImage2D(n.TEXTURE_2D,Z,It,Ut,$t,Lt);_.generateMipmaps=!1}else if(gt){if(wt){let Z=oe(ft);e.texStorage2D(n.TEXTURE_2D,st,It,Z.width,Z.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ut,$t,ft)}else e.texImage2D(n.TEXTURE_2D,0,It,Ut,$t,ft);p(_)&&S(Y),Pt.__version=At.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function jt(T,_,B){if(_.image.length!==6)return;let Y=Nt(T,_),it=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);let At=i.get(it);if(it.version!==At.__version||Y===!0){e.activeTexture(n.TEXTURE0+B);let Pt=Ie.getPrimaries(Ie.workingColorSpace),ot=_.colorSpace===Ji?null:Ie.getPrimaries(_.colorSpace),ft=_.colorSpace===Ji||Pt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ut=_.isCompressedTexture||_.image[0].isCompressedTexture,$t=_.image[0]&&_.image[0].isDataTexture,It=[];for(let dt=0;dt<6;dt++)!Ut&&!$t?It[dt]=m(_.image[dt],!0,s.maxCubemapSize):It[dt]=$t?_.image[dt].image:_.image[dt],It[dt]=we(_,It[dt]);let Lt=It[0],et=r.convert(_.format,_.colorSpace),gt=r.convert(_.type),wt=b(_.internalFormat,et,gt,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,st=At.__version===void 0||Y===!0,Z=it.dataReady,_t=x(_,Lt);Kt(n.TEXTURE_CUBE_MAP,_);let Mt;if(Ut){I&&st&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,wt,Lt.width,Lt.height);for(let dt=0;dt<6;dt++){Mt=It[dt].mipmaps;for(let Gt=0;Gt<Mt.length;Gt++){let Ot=Mt[Gt];_.format!==Ii?et!==null?I?Z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Ot.width,Ot.height,et,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,wt,Ot.width,Ot.height,0,Ot.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Ot.width,Ot.height,et,gt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,wt,Ot.width,Ot.height,0,et,gt,Ot.data)}}}else{if(Mt=_.mipmaps,I&&st){Mt.length>0&&_t++;let dt=oe(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,wt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if($t){I?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,It[dt].width,It[dt].height,et,gt,It[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,wt,It[dt].width,It[dt].height,0,et,gt,It[dt].data);for(let Gt=0;Gt<Mt.length;Gt++){let Ae=Mt[Gt].image[dt].image;I?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,Ae.width,Ae.height,et,gt,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,wt,Ae.width,Ae.height,0,et,gt,Ae.data)}}else{I?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,et,gt,It[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,wt,et,gt,It[dt]);for(let Gt=0;Gt<Mt.length;Gt++){let Ot=Mt[Gt];I?Z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,et,gt,Ot.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,wt,et,gt,Ot.image[dt])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),At.__version=it.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Ct(T,_,B,Y,it,At){let Pt=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),ft=b(B.internalFormat,Pt,ot,B.normalized,B.colorSpace),Ut=i.get(_),$t=i.get(B);if($t.__renderTarget=_,!Ut.__hasExternalTextures){let It=Math.max(1,_.width>>At),Lt=Math.max(1,_.height>>At);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,At,ft,It,Lt,_.depth,0,Pt,ot,null):e.texImage2D(it,At,ft,It,Lt,0,Pt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),se(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,it,$t.__webglTexture,0,Ht(_)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,it,$t.__webglTexture,At),e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(T,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){let Y=_.depthTexture,it=Y&&Y.isDepthTexture?Y.type:null,At=A(_.stencilBuffer,it),Pt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;se(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht(_),At,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht(_),At,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,At,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,T)}else{let Y=_.textures;for(let it=0;it<Y.length;it++){let At=Y[it],Pt=r.convert(At.format,At.colorSpace),ot=r.convert(At.type),ft=b(At.internalFormat,Pt,ot,At.normalized,At.colorSpace);se(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht(_),ft,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht(_),ft,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ft,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(T,_,B){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(_.depthTexture);if(it.__renderTarget=_,(!it.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(it.__webglInit===void 0&&(it.__webglInit=!0,_.depthTexture.addEventListener("dispose",k)),it.__webglTexture===void 0){it.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,_.depthTexture);let Ut=r.convert(_.depthTexture.format),$t=r.convert(_.depthTexture.type),It;_.depthTexture.format===as?It=n.DEPTH_COMPONENT24:_.depthTexture.format===Zs&&(It=n.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,It,_.width,_.height,0,Ut,$t,null)}}else at(_.depthTexture,0);let At=it.__webglTexture,Pt=Ht(_),ot=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ft=_.depthTexture.format===Zs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===as)se(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,ot,At,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,ft,ot,At,0);else if(_.depthTexture.format===Zs)se(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,ot,At,0,Pt):n.framebufferTexture2D(n.FRAMEBUFFER,ft,ot,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(T){let _=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",it)};Y.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=Y}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let Y=0;Y<6;Y++)ue(_.__webglFramebuffer[Y],T,Y);else{let Y=T.texture.mipmaps;Y&&Y.length>0?ue(_.__webglFramebuffer[0],T,0):ue(_.__webglFramebuffer,T,0)}else if(B){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),bt(_.__webglDepthbuffer[Y],T,!1);else{let it=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,At)}}else{let Y=T.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),bt(_.__webglDepthbuffer,T,!1);else{let it=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,At),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,At)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(T,_,B){let Y=i.get(T);_!==void 0&&Ct(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ct(T)}function xt(T){let _=T.texture,B=i.get(T),Y=i.get(_);T.addEventListener("dispose",v);let it=T.textures,At=T.isWebGLCubeRenderTarget===!0,Pt=it.length>1;if(Pt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,a.memory.textures++),At){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let ft=0;ft<_.mipmaps.length;ft++)B.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else B.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)B.__webglFramebuffer[ot]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let ot=0,ft=it.length;ot<ft;ot++){let Ut=i.get(it[ot]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&se(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<it.length;ot++){let ft=it[ot];B.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);let Ut=r.convert(ft.format,ft.colorSpace),$t=r.convert(ft.type),It=b(ft.internalFormat,Ut,$t,ft.normalized,ft.colorSpace,T.isXRRenderTarget===!0),Lt=Ht(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,It,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),bt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(At){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Ct(B.__webglFramebuffer[ot][ft],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else Ct(B.__webglFramebuffer[ot],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(_)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ot=0,ft=it.length;ot<ft;ot++){let Ut=it[ot],$t=i.get(Ut),It=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(It=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(It,$t.__webglTexture),Kt(It,Ut),Ct(B.__webglFramebuffer,T,Ut,n.COLOR_ATTACHMENT0+ot,It,0),p(Ut)&&S(It)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Kt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)Ct(B.__webglFramebuffer[ft],T,_,n.COLOR_ATTACHMENT0,ot,ft);else Ct(B.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,ot,0);p(_)&&S(ot),e.unbindTexture()}T.depthBuffer&&ct(T)}function vt(T){let _=T.textures;for(let B=0,Y=_.length;B<Y;B++){let it=_[B];if(p(it)){let At=E(T),Pt=i.get(it).__webglTexture;e.bindTexture(At,Pt),S(At),e.unbindTexture()}}}let Tt=[],Yt=[];function Vt(T){if(T.samples>0){if(se(T)===!1){let _=T.textures,B=T.width,Y=T.height,it=n.COLOR_BUFFER_BIT,At=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(T),ot=_.length>1;if(ot)for(let Ut=0;Ut<_.length;Ut++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);let ft=T.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ut=0;Ut<_.length;Ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ut]);let $t=i.get(_[Ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$t,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,it,n.NEAREST),l===!0&&(Tt.length=0,Yt.length=0,Tt.push(n.COLOR_ATTACHMENT0+Ut),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Tt.push(At),Yt.push(At),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Ut=0;Ut<_.length;Ut++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ut]);let $t=i.get(_[Ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ut,n.TEXTURE_2D,$t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ht(T){return Math.min(s.maxSamples,T.samples)}function se(T){let _=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(T){let _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function we(T,_){let B=T.colorSpace,Y=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Na&&B!==Ji&&(Ie.getTransfer(B)===Ye?(Y!==Ii||it!==hi)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",B)),_}function oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=V,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=at,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=pt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vv(n,t){function e(i,s=Ji){let r,a=Ie.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===Xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xu)return n.BYTE;if(i===Yu)return n.SHORT;if(i===la)return n.UNSIGNED_SHORT;if(i===Wl)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===$i)return n.HALF_FLOAT;if(i===Ku)return n.ALPHA;if(i===$u)return n.RGB;if(i===Ii)return n.RGBA;if(i===as)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===ql)return n.RED;if(i===Zl)return n.RED_INTEGER;if(i===Ks)return n.RG;if(i===Kl)return n.RG_INTEGER;if(i===$l)return n.RGBA_INTEGER;if(i===mo||i===go||i===yo||i===_o)if(a===Ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jl||i===jl||i===Ql||i===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===nc||i===ic||i===sc||i===rc||i===xo||i===ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ec||i===nc)return a===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ic)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===sc)return r.COMPRESSED_R11_EAC;if(i===rc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xo)return r.COMPRESSED_RG11_EAC;if(i===ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===oc||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===yc||i===_c||i===xc||i===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===oc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_c)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===Mc||i===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===bc)return a===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wc||i===Ac||i===vo||i===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Wa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mi({vertexShader:Gv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Gi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new wh,p={},S=e.getContextAttributes(),E=null,b=null,A=[],x=[],k=new kt,v=null,M=null,P=new zn;P.viewport=new cn;let D=new zn;D.viewport=new cn;let O=[P,D],V=new Ol,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=A[nt];return ut===void 0&&(ut=new Zr,A[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=A[nt];return ut===void 0&&(ut=new Zr,A[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=A[nt];return ut===void 0&&(ut=new Zr,A[nt]=ut),ut.getHandSpace()};function J(nt){let ut=x.indexOf(nt.inputSource);if(ut===-1)return;let Rt=A[ut];Rt!==void 0&&(Rt.update(nt.inputSource,nt.frame,c||a),Rt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function K(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",at);for(let nt=0;nt<A.length;nt++){let ut=x[nt];ut!==null&&(x[nt]=null,A[nt].disconnect(ut))}L=null,G=null,m.reset();for(let nt in p)delete p[nt];if(t.setRenderTarget(E),f=null,h=null,d=null,s=null,b=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(k.width,k.height,!1),M!==null){let nt=M.camera;nt.fov=M.fov,nt.zoom=M.zoom,nt.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",K),s.addEventListener("inputsourceschange",at),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(k),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,jt=null,Ct=null;S.depth&&(Ct=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=S.stencil?Zs:as,jt=S.stencil?ca:Ki);let bt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(bt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new ui(h.textureWidth,h.textureHeight,{format:Ii,type:hi,depthTexture:new Bs(h.textureWidth,h.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ui(f.framebufferWidth,f.framebufferHeight,{format:Ii,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(nt){for(let ut=0;ut<nt.removed.length;ut++){let Rt=nt.removed[ut],jt=x.indexOf(Rt);jt>=0&&(x[jt]=null,A[jt].disconnect(Rt))}for(let ut=0;ut<nt.added.length;ut++){let Rt=nt.added[ut],jt=x.indexOf(Rt);if(jt===-1){for(let bt=0;bt<A.length;bt++)if(bt>=x.length){x.push(Rt),jt=bt;break}else if(x[bt]===null){x[bt]=Rt,jt=bt;break}if(jt===-1)break}let Ct=A[jt];Ct&&Ct.connect(Rt)}}let z=new C,q=new C;function Q(nt,ut,Rt){z.setFromMatrixPosition(ut.matrixWorld),q.setFromMatrixPosition(Rt.matrixWorld);let jt=z.distanceTo(q),Ct=ut.projectionMatrix.elements,bt=Rt.projectionMatrix.elements,ue=Ct[14]/(Ct[10]-1),ct=Ct[14]/(Ct[10]+1),pt=(Ct[9]+1)/Ct[5],xt=(Ct[9]-1)/Ct[5],vt=(Ct[8]-1)/Ct[0],Tt=(bt[8]+1)/bt[0],Yt=ue*vt,Vt=ue*Tt,Ht=jt/(-vt+Tt),se=Ht*-vt;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(se),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let N=ue+Ht,we=ct+Ht,oe=Yt-se,T=Vt+(jt-se),_=pt*ct/we*N,B=xt*ct/we*N;nt.projectionMatrix.makePerspective(oe,T,_,B,N,we),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Dt(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ut=nt.near,Rt=nt.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),V.near=D.near=P.near=ut,V.far=D.far=P.far=Rt,(L!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,G=V.far),V.layers.mask=nt.layers.mask|6,P.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let jt=nt.parent,Ct=V.cameras;Dt(V,jt);for(let bt=0;bt<Ct.length;bt++)Dt(Ct[bt],jt);Ct.length===2?Q(V,P,D):V.projectionMatrix.copy(P.projectionMatrix),M===null&&nt.isPerspectiveCamera&&(M={camera:nt,fov:nt.fov,zoom:nt.zoom}),yt(nt,V,jt)};function yt(nt,ut,Rt){Rt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(Rt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Xr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(nt){l=nt,h!==null&&(h.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(nt){return p[nt]};let qt=null;function Kt(nt,ut){if(u=ut.getViewerPose(c||a),g=ut,u!==null){let Rt=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let jt=!1;Rt.length!==V.cameras.length&&(V.cameras.length=0,jt=!0);for(let ct=0;ct<Rt.length;ct++){let pt=Rt[ct],xt=null;if(f!==null)xt=f.getViewport(pt);else{let Tt=d.getViewSubImage(h,pt);xt=Tt.viewport,ct===0&&(t.setRenderTargetTextures(b,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(b))}let vt=O[ct];vt===void 0&&(vt=new zn,vt.layers.enable(ct),vt.viewport=new cn,O[ct]=vt),vt.matrix.fromArray(pt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(pt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(xt.x,xt.y,xt.width,xt.height),ct===0&&(V.matrix.copy(vt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),jt===!0&&V.cameras.push(vt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let ct=d.getDepthInformation(Rt[0]);ct&&ct.isValid&&ct.texture&&m.init(ct,s.renderState)}if(Ct&&Ct.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let ct=0;ct<Rt.length;ct++){let pt=Rt[ct].camera;if(pt){let xt=p[pt];xt||(xt=new Wa,p[pt]=xt);let vt=d.getCameraImage(pt);xt.sourceTexture=vt}}}}for(let Rt=0;Rt<A.length;Rt++){let jt=x[Rt],Ct=A[Rt];jt!==null&&Ct!==void 0&&Ct.update(jt,ut,c||a)}qt&&qt(nt,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Nt=new np;Nt.setAnimationLoop(Kt),this.setAnimationLoop=function(nt){qt=nt},this.dispose=function(){}}},Wv=new He,lp=new be;lp.set(-1,0,0,0,1,0,0,0,1);function Xv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),E=S.envMap,b=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yv(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let x=A.program;i.uniformBlockBinding(b,x)}function c(b,A){let x=s[b.id];x===void 0&&(m(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",S));let k=A.program;i.updateUBOMapping(b,k);let v=t.render.frame;r[b.id]!==v&&(h(b),r[b.id]=v)}function u(b){let A=d();b.__bindingPointIndex=A;let x=n.createBuffer(),k=b.__size,v=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,k,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,x),x}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let A=s[b.id],x=b.uniforms,k=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let v=0,M=x.length;v<M;v++){let P=x[v];if(Array.isArray(P))for(let D=0,O=P.length;D<O;D++)f(P[D],v,D,k);else f(P,v,0,k)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,A,x,k){if(y(b,A,x,k)===!0){let v=b.__offset,M=b.value;if(Array.isArray(M)){let P=0;for(let D=0;D<M.length;D++){let O=M[D],V=p(O);g(O,b.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,b.__data)}}function g(b,A,x){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,x)}function y(b,A,x,k){let v=b.value,M=A+"_"+x;if(k[M]===void 0)return typeof v=="number"||typeof v=="boolean"?k[M]=v:ArrayBuffer.isView(v)?k[M]=v.slice():k[M]=v.clone(),!0;{let P=k[M];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return k[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(b){let A=b.uniforms,x=0,k=16;for(let M=0,P=A.length;M<P;M++){let D=Array.isArray(A[M])?A[M]:[A[M]];for(let O=0,V=D.length;O<V;O++){let L=D[O],G=Array.isArray(L.value)?L.value:[L.value];for(let J=0,K=G.length;J<K;J++){let at=G[J],z=p(at),q=x%k,Q=q%z.boundary,Dt=q+Q;x+=Q,Dt!==0&&k-Dt<z.storage&&(x+=k-Dt),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=z.storage}}}let v=x%k;return v>0&&(x+=k-v),b.__size=x,b.__cache={},this}function p(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):me("WebGLRenderer: Unsupported uniform value type.",b),A}function S(b){let A=b.target;A.removeEventListener("dispose",S);let x=a.indexOf(A.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function E(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hs=null;function Zv(){return hs===null&&(hs=new Va(qv,16,16,Ks,$i),hs.name="DFG_LUT",hs.minFilter=Sn,hs.magFilter=Sn,hs.wrapS=rs,hs.wrapT=rs,hs.generateMipmaps=!1,hs.needsUpdate=!0),hs}var Ic=class{constructor(t={}){let{canvas:e=Sf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=hi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([$l,Kl,Zl]),p=new Set([hi,Ki,la,ca,Xl,Yl]),S=new Uint32Array(4),E=new Int32Array(4),b=new C,A=null,x=null,k=[],v=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,O=null,V=null,L=null,G=null;this._outputColorSpace=mn;let J=0,K=0,at=null,z=-1,q=null,Q=new cn,Dt=new cn,yt=null,qt=new le(0),Kt=0,Nt=e.width,nt=e.height,ut=1,Rt=null,jt=null,Ct=new cn(0,0,Nt,nt),bt=new cn(0,0,Nt,nt),ue=!1,ct=new $r,pt=!1,xt=!1,vt=new He,Tt=new C,Yt=new cn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function se(){return at===null?ut:1}let N=i;function we(w,U){return e.getContext(w,U)}let oe,T,_,B,Y,it,At,Pt,ot,ft,Ut,$t,It,Lt,et,gt,wt,I,st,Z,_t,Mt,dt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",St,!1),N===null){let U="webgl2";if(N=we(U,w),N===null)throw we(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(w){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",St,!1),ye("WebGLRenderer: "+w.message),w}function Gt(){oe=new ex(N),oe.init(),_t=new Vv(N,oe),T=new X_(N,oe,t,_t),_=new zv(N,oe),T.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),V=N.createFramebuffer(),L=N.createFramebuffer(),G=N.createFramebuffer(),B=new sx(N),Y=new Av,it=new Bv(N,oe,_,Y,T,_t,B),At=new tx(P),Pt=new ag(N),Mt=new H_(N,Pt),ot=new nx(N,Pt,B,Mt),ft=new ax(N,ot,Pt,Mt,B),I=new rx(N,T,it),et=new Y_(Y),Ut=new wv(P,At,oe,T,Mt,et),$t=new Xv(P,Y),It=new Tv,Lt=new Lv(oe),wt=new G_(P,At,_,ft,g,l),gt=new Ov(P,ft,T),dt=new Yv(N,B,T,_),st=new W_(N,oe,B),Z=new ix(N,oe,B),B.programs=Ut.programs,P.capabilities=T,P.extensions=oe,P.properties=Y,P.renderLists=It,P.shadowMap=gt,P.state=_,P.info=B}y!==hi&&(M=new lx(y,e.width,e.height,o,s,r));let Ot=new Ah(P,N);this.xr=Ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(w){w!==void 0&&(ut=w,this.setSize(Nt,nt,!1))},this.getSize=function(w){return w.set(Nt,nt)},this.setSize=function(w,U,tt=!0){if(Ot.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=w,nt=U,e.width=Math.floor(w*ut),e.height=Math.floor(U*ut),tt===!0&&(e.style.width=w+"px",e.style.height=U+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Nt*ut,nt*ut).floor()},this.setDrawingBufferSize=function(w,U,tt){Nt=w,nt=U,ut=tt,e.width=Math.floor(w*tt),e.height=Math.floor(U*tt),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(y===hi){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,U,tt,$){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,U,tt,$),_.viewport(Q.copy(Ct).multiplyScalar(ut).round())},this.getScissor=function(w){return w.copy(bt)},this.setScissor=function(w,U,tt,$){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,U,tt,$),_.scissor(Dt.copy(bt).multiplyScalar(ut).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(w){_.setScissorTest(ue=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){jt=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,tt=!0){let $=0;if(w){let W=!1;if(at!==null){let Ft=at.texture.format;W=m.has(Ft)}if(W){let Ft=at.texture.type,Zt=p.has(Ft),Bt=wt.getClearColor(),Qt=wt.getClearAlpha(),ae=Bt.r,Ee=Bt.g,Ce=Bt.b;Zt?(S[0]=ae,S[1]=Ee,S[2]=Ce,S[3]=Qt,N.clearBufferuiv(N.COLOR,0,S)):(E[0]=ae,E[1]=Ee,E[2]=Ce,E[3]=Qt,N.clearBufferiv(N.COLOR,0,E))}else $|=N.COLOR_BUFFER_BIT}U&&($|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",St,!1),wt.dispose(),It.dispose(),Lt.dispose(),Y.dispose(),At.dispose(),ft.dispose(),Mt.dispose(),dt.dispose(),Ut.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Wt),Ot.removeEventListener("sessionend",re),_e.stop()};function Ae(w){w.preventDefault(),ju("WebGLRenderer: Context Lost."),D=!0}function X(){ju("WebGLRenderer: Context Restored."),D=!1;let w=B.autoReset,U=gt.enabled,tt=gt.autoUpdate,$=gt.needsUpdate,W=gt.type;Gt(),B.autoReset=w,gt.enabled=U,gt.autoUpdate=tt,gt.needsUpdate=$,gt.type=W}function St(w){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function R(w){let U=w.target;U.removeEventListener("dispose",R),F(U)}function F(w){j(w),Y.remove(w)}function j(w){let U=Y.get(w).programs;U!==void 0&&(U.forEach(function(tt){Ut.releaseProgram(tt)}),w.isShaderMaterial&&Ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,tt,$,W,Ft){U===null&&(U=Vt);let Zt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Bt=ve(w,U,tt,$,W);_.setMaterial($,Zt);let Qt=tt.index,ae=1;if($.wireframe===!0){if(Qt=ot.getWireframeAttribute(tt),Qt===void 0)return;ae=2}let Ee=tt.drawRange,Ce=tt.attributes.position,ie=Ee.start*ae,Xe=(Ee.start+Ee.count)*ae;Ft!==null&&(ie=Math.max(ie,Ft.start*ae),Xe=Math.min(Xe,(Ft.start+Ft.count)*ae)),Qt!==null?(ie=Math.max(ie,0),Xe=Math.min(Xe,Qt.count)):Ce!=null&&(ie=Math.max(ie,0),Xe=Math.min(Xe,Ce.count));let Rn=Xe-ie;if(Rn<0||Rn===1/0)return;Mt.setup(W,$,Bt,tt,Qt);let sn,Qe=st;if(Qt!==null&&(sn=Pt.get(Qt),Qe=Z,Qe.setIndex(sn)),W.isMesh)$.wireframe===!0?(_.setLineWidth($.wireframeLinewidth*se()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(W.isLine){let Xn=$.linewidth;Xn===void 0&&(Xn=1),_.setLineWidth(Xn*se()),W.isLineSegments?Qe.setMode(N.LINES):W.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else W.isPoints?Qe.setMode(N.POINTS):W.isSprite&&Qe.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Xn=W._multiDrawStarts,te=W._multiDrawCounts,Qn=W._multiDrawCount,Oe=Qt?Pt.get(Qt).bytesPerElement:1,Ti=Y.get($).currentProgram.getUniforms();for(let is=0;is<Qn;is++)Ti.setValue(N,"_gl_DrawID",is),Qe.render(Xn[is]/Oe,te[is])}else if(W.isInstancedMesh)Qe.renderInstances(ie,Rn,W.count);else if(tt.isInstancedBufferGeometry){let Xn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,te=Math.min(tt.instanceCount,Xn);Qe.renderInstances(ie,Rn,te)}else Qe.render(ie,Rn)};function ht(w,U,tt,$){O!==null&&w.isNodeMaterial&&O.setObject($,w),pt===!0&&et.setState(w,tt,!1),w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=Vn,w.needsUpdate=!0,H(w,U,$),w.side=Ys,w.needsUpdate=!0,H(w,U,$),w.side=wn):H(w,U,$)}this.compile=function(w,U,tt=null){tt===null&&(tt=w),O!==null&&O.renderStart(w,U,tt),x=Lt.get(tt),x.init(U),v.push(x),tt.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),w!==tt&&w.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights(),O!==null&&O.updateLights(x.state.lightsArray),xt=this.localClippingEnabled,pt=et.init(this.clippingPlanes,xt),pt===!0&&et.setGlobalState(this.clippingPlanes,U),O!==null&&gt.render(x.state.shadowsArray,tt,U);let $=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ft=W.material;if(Ft)if(Array.isArray(Ft))for(let Zt=0;Zt<Ft.length;Zt++){let Bt=Ft[Zt];ht(Bt,tt,U,W),$.add(Bt)}else ht(Ft,tt,U,W),$.add(Ft)}),x=v.pop(),O!==null&&O.renderEnd(),$},this.compileAsync=function(w,U,tt=null){let $=this.compile(w,U,tt);return new Promise(W=>{function Ft(){if($.forEach(function(Zt){let Qt=Y.get(Zt).currentProgram;(Qt===void 0||Qt.isReady())&&$.delete(Zt)}),$.size===0){W(w);return}setTimeout(Ft,10)}oe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let rt=null;function Jt(w){rt&&rt(w)}function Wt(){_e.stop()}function re(){_e.start()}let _e=new np;_e.setAnimationLoop(Jt),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(w){rt=w,Ot.setAnimationLoop(w),w===null?_e.stop():_e.start()},Ot.addEventListener("sessionstart",Wt),Ot.addEventListener("sessionend",re),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(w,U);let tt=Ot.enabled===!0&&Ot.isPresenting===!0,$=M!==null&&(at===null||tt)&&M.begin(P,at);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(U),U=Ot.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,U,at),x=Lt.get(w,v.length),x.init(U),x.state.textureUnits=it.getTextureUnits(),v.push(x),vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ct.setFromProjectionMatrix(vt,Vi,U.reversedDepth),xt=this.localClippingEnabled,pt=et.init(this.clippingPlanes,xt),A=It.get(w,k.length),A.init(),k.push(A),Ot.enabled===!0&&Ot.isPresenting===!0){let Zt=P.xr.getDepthSensingMesh();Zt!==null&&xe(Zt,U,-1/0,P.sortObjects)}xe(w,U,0,P.sortObjects),A.finish(),O!==null&&O.updateLights(x.state.lightsArray),P.sortObjects===!0&&A.sort(Rt,jt),Ht=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Ht&&wt.addToRenderList(A,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&et.beginShadows();let W=x.state.shadowsArray;if(gt.render(W,w,U),pt===!0&&et.endShadows(),($&&M.hasRenderPass())===!1){let Zt=A.opaque,Bt=A.transmissive;if(x.setupLights(),U.isArrayCamera){let Qt=U.cameras;if(Bt.length>0)for(let ae=0,Ee=Qt.length;ae<Ee;ae++){let Ce=Qt[ae];_n(Zt,Bt,w,Ce)}Ht&&wt.render(w);for(let ae=0,Ee=Qt.length;ae<Ee;ae++){let Ce=Qt[ae];Pe(A,w,Ce,Ce.viewport)}}else Bt.length>0&&_n(Zt,Bt,w,U),Ht&&wt.render(w),Pe(A,w,U)}at!==null&&K===0&&(it.updateMultisampleRenderTarget(at),it.updateRenderTargetMipmap(at)),$&&M.end(P),w.isScene===!0&&w.onAfterRender(P,w,U),Mt.resetDefaultState(),z=-1,q=null,v.pop(),v.length>0?(x=v[v.length-1],it.setTextureUnits(x.state.textureUnits),pt===!0&&et.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,k.pop(),k.length>0?A=k[k.length-1]:A=null,O!==null&&O.renderEnd()};function xe(w,U,tt,$){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)x.pushLightProbeGrid(w);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ct)){$&&Yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);let Zt=ft.update(w),Bt=w.material;Bt.visible&&A.push(w,Zt,Bt,tt,Yt.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ct))){let Zt=ft.update(w),Bt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Yt.copy(w.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),Yt.copy(Zt.boundingSphere.center)),Yt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(Bt)){let Qt=Zt.groups;for(let ae=0,Ee=Qt.length;ae<Ee;ae++){let Ce=Qt[ae],ie=Bt[Ce.materialIndex];ie&&ie.visible&&A.push(w,Zt,ie,tt,Yt.z,Ce,U)}}else Bt.visible&&A.push(w,Zt,Bt,tt,Yt.z,null,U)}}let Ft=w.children;for(let Zt=0,Bt=Ft.length;Zt<Bt;Zt++)xe(Ft[Zt],U,tt,$)}function Pe(w,U,tt,$){let{opaque:W,transmissive:Ft,transparent:Zt}=w;x.setupLightsView(tt),pt===!0&&et.setGlobalState(P.clippingPlanes,tt),$&&_.viewport(Q.copy($)),W.length>0&&je(W,U,tt),Ft.length>0&&je(Ft,U,tt),Zt.length>0&&je(Zt,U,tt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function _n(w,U,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[$.id]===void 0){let ie=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[$.id]=new ui(1,1,{generateMipmaps:!0,type:ie?$i:hi,minFilter:Ci,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}let Ft=x.state.transmissionRenderTarget[$.id],Zt=$.viewport||Q;Ft.setSize(Zt.z*P.transmissionResolutionScale,Zt.w*P.transmissionResolutionScale);let Bt=P.getRenderTarget(),Qt=P.getActiveCubeFace(),ae=P.getActiveMipmapLevel();P.setRenderTarget(Ft),P.getClearColor(qt),Kt=P.getClearAlpha(),Kt<1&&P.setClearColor(16777215,.5),P.clear(),Ht&&wt.render(tt);let Ee=P.toneMapping;P.toneMapping=Zi;let Ce=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),pt===!0&&et.setGlobalState(P.clippingPlanes,$),je(w,tt,$),it.updateMultisampleRenderTarget(Ft),it.updateRenderTargetMipmap(Ft),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Xe=0,Rn=U.length;Xe<Rn;Xe++){let sn=U[Xe],{object:Qe,geometry:Xn,material:te,group:Qn}=sn;if(te.side===wn&&Qe.layers.test($.layers)){let Oe=te.side;te.side=Vn,te.needsUpdate=!0,Wn(Qe,tt,$,Xn,te,Qn),te.side=Oe,te.needsUpdate=!0,ie=!0}}ie===!0&&(it.updateMultisampleRenderTarget(Ft),it.updateRenderTargetMipmap(Ft))}P.setRenderTarget(Bt,Qt,ae),P.setClearColor(qt,Kt),Ce!==void 0&&($.viewport=Ce),P.toneMapping=Ee}function je(w,U,tt){let $=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Ft=w.length;W<Ft;W++){let Zt=w[W],{object:Bt,geometry:Qt,group:ae}=Zt,Ee=Zt.material;Ee.allowOverride===!0&&$!==null&&(Ee=$),Bt.layers.test(tt.layers)&&Wn(Bt,U,tt,Qt,Ee,ae)}}function Wn(w,U,tt,$,W,Ft){O!==null&&W.isNodeMaterial&&O.setObject(w,W),w.onBeforeRender(P,U,tt,$,W,Ft),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(P,U,tt,$,w,Ft),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=Vn,W.needsUpdate=!0,P.renderBufferDirect(tt,U,$,W,w,Ft),W.side=Ys,W.needsUpdate=!0,P.renderBufferDirect(tt,U,$,W,w,Ft),W.side=wn):P.renderBufferDirect(tt,U,$,W,w,Ft),w.onAfterRender(P,U,tt,$,W,Ft)}function H(w,U,tt){U.isScene!==!0&&(U=Vt);let $=Y.get(w),W=x.state.lights,Ft=x.state.shadowsArray,Zt=W.state.version,Bt=Ut.getParameters(w,W.state,Ft,U,tt,x.state.lightProbeGridArray),Qt=Ut.getProgramCacheKey(Bt),ae=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,$.fog=U.fog;let Ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=At.get(w.envMap||$.environment,Ee),$.envMapRotation=$.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,ae===void 0&&(w.addEventListener("dispose",R),ae=new Map,$.programs=ae);let Ce=ae.get(Qt);if(Ce!==void 0){if($.currentProgram===Ce&&$.lightsStateVersion===Zt)return ne(w,Bt),Ce}else Bt.uniforms=Ut.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,tt,Bt),w.onBeforeCompile(Bt,P),Ce=Ut.acquireProgram(Bt,Qt),ae.set(Qt,Ce),$.uniforms=Bt.uniforms;let ie=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ie.clippingPlanes=et.uniform),ne(w,Bt),$.needsLights=We(w),$.lightsStateVersion=Zt,$.needsLights&&(ie.ambientLightColor.value=W.state.ambient,ie.lightProbe.value=W.state.probe,ie.sunLights.value=W.state.sun,ie.sunLightShadows.value=W.state.sunShadow,ie.directionalLights.value=W.state.directional,ie.directionalLightShadows.value=W.state.directionalShadow,ie.spotLights.value=W.state.spot,ie.spotLightShadows.value=W.state.spotShadow,ie.rectAreaLights.value=W.state.rectArea,ie.ltc_1.value=W.state.rectAreaLTC1,ie.ltc_2.value=W.state.rectAreaLTC2,ie.pointLights.value=W.state.point,ie.pointLightShadows.value=W.state.pointShadow,ie.hemisphereLights.value=W.state.hemi,ie.sunShadowMatrix.value=W.state.sunShadowMatrix,ie.sunShadowCascade.value=W.state.sunShadowCascade,ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ie.spotLightMatrix.value=W.state.spotLightMatrix,ie.spotLightMap.value=W.state.spotLightMap,ie.pointShadowMatrix.value=W.state.pointShadowMatrix),$.lightProbeGrid=x.state.lightProbeGridArray.length>0,$.currentProgram=Ce,$.uniformsList=null,Ce}function lt(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=da.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ne(w,U){let tt=Y.get(w);tt.outputColorSpace=U.outputColorSpace,tt.batching=U.batching,tt.batchingColor=U.batchingColor,tt.instancing=U.instancing,tt.instancingColor=U.instancingColor,tt.instancingMorph=U.instancingMorph,tt.skinning=U.skinning,tt.morphTargets=U.morphTargets,tt.morphNormals=U.morphNormals,tt.morphColors=U.morphColors,tt.morphTargetsCount=U.morphTargetsCount,tt.numClippingPlanes=U.numClippingPlanes,tt.numIntersection=U.numClipIntersection,tt.vertexAlphas=U.vertexAlphas,tt.vertexTangents=U.vertexTangents,tt.toneMapping=U.toneMapping}function Me(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let tt=0,$=w.length;tt<$;tt++){let W=w[tt];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function ve(w,U,tt,$,W){U.isScene!==!0&&(U=Vt),it.resetTextureUnits();let Ft=U.fog,Zt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?U.environment:null,Bt=at===null?P.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ie.workingColorSpace,Qt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,ae=At.get($.envMap||Zt,Qt),Ee=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Ce=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ie=!!tt.morphAttributes.position,Xe=!!tt.morphAttributes.normal,Rn=!!tt.morphAttributes.color,sn=Zi;$.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(sn=P.toneMapping);let Qe=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Xn=Qe!==void 0?Qe.length:0,te=Y.get($),Qn=x.state.lights;if(pt===!0&&(xt===!0||w!==q)){let tn=w===q&&$.id===z;et.setState($,w,tn)}let Oe=!1;$.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Qn.state.version||te.outputColorSpace!==Bt||W.isBatchedMesh&&te.batching===!1||!W.isBatchedMesh&&te.batching===!0||W.isBatchedMesh&&te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&te.instancing===!1||!W.isInstancedMesh&&te.instancing===!0||W.isSkinnedMesh&&te.skinning===!1||!W.isSkinnedMesh&&te.skinning===!0||W.isInstancedMesh&&te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&te.instancingMorph===!1&&W.morphTexture!==null||te.envMap!==ae||$.fog===!0&&te.fog!==Ft||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==et.numPlanes||te.numIntersection!==et.numIntersection)||te.vertexAlphas!==Ee||te.vertexTangents!==Ce||te.morphTargets!==ie||te.morphNormals!==Xe||te.morphColors!==Rn||te.toneMapping!==sn||te.morphTargetsCount!==Xn||!!te.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,te.__version=$.version);let Ti=te.currentProgram;Oe===!0&&(Ti=H($,U,W),O&&$.isNodeMaterial&&O.onUpdateProgram($,Ti,te));let is=!1,Ps=!1,Sr=!1,Je=Ti.getUniforms(),bn=te.uniforms;if(_.useProgram(Ti.program)&&(is=!0,Ps=!0,Sr=!0),$.id!==z&&(z=$.id,Ps=!0),te.needsLights){let tn=Me(x.state.lightProbeGridArray,W);te.lightProbeGrid!==tn&&(te.lightProbeGrid=tn,Ps=!0)}if(is||q!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Je.setValue(N,"projectionMatrix",w.projectionMatrix),Je.setValue(N,"viewMatrix",w.matrixWorldInverse);let Ls=Je.map.cameraPosition;Ls!==void 0&&Ls.setValue(N,Tt.setFromMatrixPosition(w.matrixWorld)),T.logarithmicDepthBuffer&&Je.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Je.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,Ps=!0,Sr=!0)}if(te.needsLights&&(Qn.state.sunShadowMap.length>0&&Je.setValue(N,"sunShadowMap",Qn.state.sunShadowMap,it),Qn.state.directionalShadowMap.length>0&&Je.setValue(N,"directionalShadowMap",Qn.state.directionalShadowMap,it),Qn.state.spotShadowMap.length>0&&Je.setValue(N,"spotShadowMap",Qn.state.spotShadowMap,it),Qn.state.pointShadowMap.length>0&&Je.setValue(N,"pointShadowMap",Qn.state.pointShadowMap,it)),W.isSkinnedMesh){Je.setOptional(N,W,"bindMatrix"),Je.setOptional(N,W,"bindMatrixInverse");let tn=W.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Je.setValue(N,"boneTexture",tn.boneTexture,it))}W.isBatchedMesh&&(Je.setOptional(N,W,"batchingTexture"),Je.setValue(N,"batchingTexture",W._matricesTexture,it),Je.setOptional(N,W,"batchingIdTexture"),Je.setValue(N,"batchingIdTexture",W._indirectTexture,it),Je.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&Je.setValue(N,"batchingColorTexture",W._colorsTexture,it));let Is=tt.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&I.update(W,tt,Ti),(Ps||te.receiveShadow!==W.receiveShadow)&&(te.receiveShadow=W.receiveShadow,Je.setValue(N,"receiveShadow",W.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&U.environment!==null&&(bn.envMapIntensity.value=U.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=Zv()),Ps){if(Je.setValue(N,"toneMappingExposure",P.toneMappingExposure),te.needsLights&&vn(bn,Sr),Ft&&$.fog===!0&&$t.refreshFogUniforms(bn,Ft),$t.refreshMaterialUniforms(bn,$,ut,nt,x.state.transmissionRenderTarget[w.id]),te.needsLights&&te.lightProbeGrid){let tn=te.lightProbeGrid;bn.probesSH.value=tn.texture,bn.probesMin.value.copy(tn.boundingBox.min),bn.probesMax.value.copy(tn.boundingBox.max),bn.probesResolution.value.copy(tn.resolution)}da.upload(N,lt(te),bn,it)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(da.upload(N,lt(te),bn,it),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Je.setValue(N,"center",W.center),Je.setValue(N,"modelViewMatrix",W.modelViewMatrix),Je.setValue(N,"normalMatrix",W.normalMatrix),Je.setValue(N,"modelMatrix",W.matrixWorld),$.uniformsGroups!==void 0){let tn=$.uniformsGroups;for(let Ls=0,wr=tn.length;Ls<wr;Ls++){let Qh=tn[Ls];dt.update(Qh,Ti),dt.bind(Qh,Ti)}}return Ti}function vn(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function We(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(w,U,tt){let $=Y.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Y.get(w.texture).__webglTexture=U,Y.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let tt=Y.get(w);tt.__webglFramebuffer=U,tt.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,tt=0){at=w,J=U,K=tt;let $=null,W=!1,Ft=!1;if(w){let Bt=Y.get(w);if(Bt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,Bt.__webglFramebuffer),Q.copy(w.viewport),Dt.copy(w.scissor),yt=w.scissorTest,_.viewport(Q),_.scissor(Dt),_.setScissorTest(yt),z=-1;return}else if(Bt.__webglFramebuffer===void 0)it.setupRenderTarget(w);else if(Bt.__hasExternalTextures)it.rebindTextures(w,Y.get(w.texture).__webglTexture,Y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ee=w.depthTexture;if(Bt.__boundDepthTexture!==Ee){if(Ee!==null&&Y.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(w)}}let Qt=w.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);let ae=Y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ae[U])?$=ae[U][tt]:$=ae[U],W=!0):w.samples>0&&it.useMultisampledRTT(w)===!1?$=Y.get(w).__webglMultisampledFramebuffer:Array.isArray(ae)?$=ae[tt]:$=ae,Q.copy(w.viewport),Dt.copy(w.scissor),yt=w.scissorTest}else Q.copy(Ct).multiplyScalar(ut).floor(),Dt.copy(bt).multiplyScalar(ut).floor(),yt=ue;if(tt!==0&&($=V),_.bindFramebuffer(N.FRAMEBUFFER,$)&&_.drawBuffers(w,$),_.viewport(Q),_.scissor(Dt),_.setScissorTest(yt),W){let Bt=Y.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Bt.__webglTexture,tt)}else if(Ft){let Bt=U;for(let Qt=0;Qt<w.textures.length;Qt++){let ae=Y.get(w.textures[Qt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Qt,ae.__webglTexture,tt,Bt)}}else if(w!==null&&tt!==0){let Bt=Y.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Bt.__webglTexture,tt)}z=-1};function kn(w){let U=Y.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=T.textureFormatReadable(w.format),U.__typeReadable=T.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,tt,$,W,Ft,Zt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt){_.bindFramebuffer(N.FRAMEBUFFER,Qt);try{let ae=w.textures[Bt],Ee=ae.format,Ce=ae.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt);let ie=kn(ae);if(ie.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ie.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-$&&tt>=0&&tt<=w.height-W&&N.readPixels(U,tt,$,W,_t.convert(Ee),_t.convert(Ce),Ft)}finally{let ae=at!==null?Y.get(at).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(w,U,tt,$,W,Ft,Zt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=Y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt)if(U>=0&&U<=w.width-$&&tt>=0&&tt<=w.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Qt);let ae=w.textures[Bt],Ee=ae.format,Ce=ae.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Bt);let ie=kn(ae);if(ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,Ft.byteLength,N.STREAM_READ),N.readPixels(U,tt,$,W,_t.convert(Ee),_t.convert(Ce),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Rn=at!==null?Y.get(at).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Rn);let sn=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Af(N,sn,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ft),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Xe),N.deleteSync(sn),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,tt=0){let $=Math.pow(2,-tt),W=Math.floor(w.image.width*$),Ft=Math.floor(w.image.height*$),Zt=U!==null?U.x:0,Bt=U!==null?U.y:0;it.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,tt,0,0,Zt,Bt,W,Ft),_.unbindTexture()},this.copyTextureToTexture=function(w,U,tt=null,$=null,W=0,Ft=0){let Zt,Bt,Qt,ae,Ee,Ce,ie,Xe,Rn,sn=w.isCompressedTexture?w.mipmaps[Ft]:w.image;if(tt!==null)Zt=tt.max.x-tt.min.x,Bt=tt.max.y-tt.min.y,Qt=tt.isBox3?tt.max.z-tt.min.z:1,ae=tt.min.x,Ee=tt.min.y,Ce=tt.isBox3?tt.min.z:0;else{let bn=Math.pow(2,-W);Zt=Math.floor(sn.width*bn),Bt=Math.floor(sn.height*bn),w.isDataArrayTexture?Qt=sn.depth:w.isData3DTexture?Qt=Math.floor(sn.depth*bn):Qt=1,ae=0,Ee=0,Ce=0}$!==null?(ie=$.x,Xe=$.y,Rn=$.z):(ie=0,Xe=0,Rn=0);let Qe=_t.convert(U.format),Xn=_t.convert(U.type),te;U.isData3DTexture?(it.setTexture3D(U,0),te=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(it.setTexture2DArray(U,0),te=N.TEXTURE_2D_ARRAY):(it.setTexture2D(U,0),te=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Qn=_.getParameter(N.UNPACK_ROW_LENGTH),Oe=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Ti=_.getParameter(N.UNPACK_SKIP_PIXELS),is=_.getParameter(N.UNPACK_SKIP_ROWS),Ps=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,sn.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,sn.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,ae),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce);let Sr=w.isDataArrayTexture||w.isData3DTexture,Je=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let bn=Y.get(w),Is=Y.get(U),tn=Y.get(bn.__renderTarget),Ls=Y.get(Is.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let wr=0;wr<Qt;wr++)Sr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(w).__webglTexture,W,Ce+wr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,Ft,Rn+wr)),N.blitFramebuffer(ae,Ee,Zt,Bt,ie,Xe,Zt,Bt,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||Y.has(w)){let bn=Y.get(w),Is=Y.get(U);_.bindFramebuffer(N.READ_FRAMEBUFFER,L),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let tn=0;tn<Qt;tn++)Sr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bn.__webglTexture,W,Ce+tn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bn.__webglTexture,W),Je?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Is.__webglTexture,Ft,Rn+tn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Is.__webglTexture,Ft),W!==0?N.blitFramebuffer(ae,Ee,Zt,Bt,ie,Xe,Zt,Bt,N.COLOR_BUFFER_BIT,N.NEAREST):Je?N.copyTexSubImage3D(te,Ft,ie,Xe,Rn+tn,ae,Ee,Zt,Bt):N.copyTexSubImage2D(te,Ft,ie,Xe,ae,Ee,Zt,Bt);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Je?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(te,Ft,ie,Xe,Rn,Zt,Bt,Qt,Qe,Xn,sn.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(te,Ft,ie,Xe,Rn,Zt,Bt,Qt,Qe,sn.data):N.texSubImage3D(te,Ft,ie,Xe,Rn,Zt,Bt,Qt,Qe,Xn,sn):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ft,ie,Xe,Zt,Bt,Qe,Xn,sn.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ft,ie,Xe,sn.width,sn.height,Qe,sn.data):N.texSubImage2D(N.TEXTURE_2D,Ft,ie,Xe,Zt,Bt,Qe,Xn,sn);_.pixelStorei(N.UNPACK_ROW_LENGTH,Qn),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Oe),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ti),_.pixelStorei(N.UNPACK_SKIP_ROWS,is),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Ps),Ft===0&&U.generateMipmaps&&N.generateMipmap(te),_.unbindTexture()},this.initRenderTarget=function(w){Y.get(w).__webglFramebuffer===void 0&&it.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?it.setTextureCube(w,0):w.isData3DTexture?it.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?it.setTexture2DArray(w,0):it.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){J=0,K=0,at=null,_.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}};var cp={type:"change"},Th={type:"start"},hp={type:"end"},Nc=new zs,up=new xi,Kv=Math.cos(70*th.DEG2RAD),Dn=new C,di=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eh=1e-6,Uc=class extends co{constructor(t,e=null){super(t,e),this.state=Ze.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Bn,this._lastTargetPosition=new C,this._quat=new Bn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ra,this._sphericalDelta=new ra,this._scale=1,this._panOffset=new C,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new C,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jv.bind(this),this._onPointerDown=$v.bind(this),this._onPointerUp=jv.bind(this),this._onContextMenu=r1.bind(this),this._onMouseWheel=e1.bind(this),this._onKeyDown=n1.bind(this),this._onTouchStart=i1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=Qv.bind(this),this._onMouseMove=t1.bind(this),this._interceptControlDown=a1.bind(this),this._interceptControlUp=o1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ze.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cp),this.update(),this.state=Ze.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Dn.copy(e).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=di:i>Math.PI&&(i-=di),s<-Math.PI?s+=di:s>Math.PI&&(s-=di),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),e.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Dn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Nc.origin.copy(this.object.position),Nc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nc.direction))<Kv?this.object.lookAt(this.target):(up.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nc.intersectPlane(up,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eh||this._lastTargetPosition.distanceToSquared(this.target)>Eh?(this.dispatchEvent(cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?di/60*this.autoRotateSpeed*t:di/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Dn.setFromMatrixColumn(e,0),Dn.multiplyScalar(-t),this._panOffset.add(Dn)}_panUp(t,e){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(e,1):(Dn.setFromMatrixColumn(e,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(t),this._panOffset.add(Dn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Dn.copy(s).sub(this.target);let r=Dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(di*this._rotateDelta.x/e.clientHeight),this._rotateUp(di*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(di*this._rotateDelta.x/e.clientHeight),this._rotateUp(di*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function $v(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Jv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function jv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hp),this.state=Ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Qv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ze.DOLLY;break;case Ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}break;case Ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Th)}function t1(n){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function e1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(n.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(hp))}function n1(n){this.enabled!==!1&&this._handleKeyDown(n)}function i1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ze.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ze.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Th)}function s1(n){switch(this._trackPointer(n),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ze.NONE}}function r1(n){this.enabled!==!1&&n.preventDefault()}function a1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fc=class extends or{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new xn;t.deleteAttribute("uv");let e=new Le({side:Vn}),i=new Le,s=new ao(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Et(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Es(t,i,6),o=new un;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Et(t,ma(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Et(t,ma(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Et(t,ma(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Et(t,ma(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Et(t,ma(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Et(t,ma(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ma(n){return new eo({color:0,emissive:16777215,emissiveIntensity:n})}var l1=42e5,kh=[1,.8,.65,.5],dp=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),c1=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function fp(n,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:i=null}={}){let s=window.devicePixelRatio||1,r;try{r=new Ic({canvas:n,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=mn,r.toneMapping=ho,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=dr,r.shadowMap.autoUpdate=!1,r.setClearColor(new le(t),1);let a=new or,o=new fa(r);a.environment=o.fromScene(new Fc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new zn(32,1,4,1500);l.position.set(0,160,150),a.add(new io(16777215,13616860,.35));let c=new oo(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new Et(new nn(900,900),new to({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let d=new Uc(l,n);d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),d.dampingFactor=.14,d.rotateSpeed=.75,d.zoomSpeed=.9,d.panSpeed=.8,d.screenSpacePanning=!0,d.minDistance=9,d.maxDistance=1200,d.minPolarAngle=.06,d.maxPolarAngle=1.32,d.zoomToCursor=!0,d.cursor.set(0,6,-3),d.maxTargetRadius=85,d.target.set(0,4,0);function h(){let X=l.position.distanceTo(d.target),St=Math.min(4,Math.max(.4,X*.04));Math.abs(St-l.near)>St*.08&&(l.near=St,l.far=Math.max(900,X*6),l.updateProjectionMatrix())}let f=0,g=0,y=!1,m=!0,p=new Set,S=new Set,E=[],b=new Set,A=1,x=0,k=0,v=0,M=0,P=[],D=0,O=0,V=0;function L(){!f&&!g&&(f=requestAnimationFrame(K))}function G(){!f&&!g&&(g=setTimeout(()=>{g=0,L()},33))}function J(X){Math.abs(X-k)<.01||(k=X,r.setPixelRatio(X),r.setSize(n.clientWidth||1,n.clientHeight||1,!1))}function K(X){f=0;let St=d.update();for(let j of b){let ht=Math.min(1,(X-(j.bas??=X))/j.sure);j.adim(c1(ht)),j.golge&&(m=!0),ht>=1?(b.delete(j),j.bitti?.()):St=!0}for(let j of p)j(X)&&(St=!0);let R=!1;for(let j of S)j(X,M?Math.min(100,X-M):33)&&(R=!0);M=R?X:0;let F=St||R;clearTimeout(V),h(),J(A*kh[x]),m&&(r.shadowMap.needsUpdate=!0,m=!1),r.render(a,l),$t(),St?at(X):(v=0,P=[]),St?L():R&&G(),!F&&x>0&&(V=setTimeout(()=>{J(A),r.render(a,l),$t()},300))}function at(X){v&&P.push(X-v),v=X;let St=P.length,R=P.reduce((ht,rt)=>ht+rt,0),F=St>=6&&St<24&&R>=450&&[...P].sort((ht,rt)=>ht-rt)[St>>1]>50;if(St<24&&!F)return;let j=R/St;P=[],!(X-O<(F?300:500))&&(j>26&&x<kh.length-1?(x++,D=0,O=X,e("kalite",x)):j<19&&x>0&&++D>=3&&(x--,D=0,O=X))}function z(){let X=n.clientWidth||1,St=n.clientHeight||1;A=Math.max(.5,Math.min(s,2,Math.sqrt(l1/(X*St)))),k=0,J(A*kh[x]),l.aspect=X/St,qt();for(let R of E)R.w=0;oe=0,T=null,!y&&Nt&&xt(Nt,!0),L()}let q=0,Q=0;new ResizeObserver(()=>{clearTimeout(q);let X=performance.now();if(document.documentElement.dataset.suruklenen&&X-Q>125){Q=X,z();return}q=setTimeout(()=>{Q=performance.now(),z()},110)}).observe(n),window.addEventListener("bote-erisim",()=>{d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let X of E)X.w=0;L()});let yt=0;function qt(){let X=n.clientWidth||1,St=n.clientHeight||1;yt>0?l.setViewOffset(X,St,0,Math.min(yt,St*.9)/2,X,St):l.clearViewOffset(),l.updateProjectionMatrix()}function Kt(X,St=!1){yt=Math.max(0,X||0),T=null,qt(),!y&&Nt?xt(Nt,St):L()}d.addEventListener("change",L),d.addEventListener("start",()=>{y=!0,e("kamera-elle")});let Nt=null,nt=new C(0,1,0),ut=new C,Rt=new C,jt=new C,Ct=new C,bt=new C,ue=X=>X.isBox3?X:new Zn(new C(X[0],X[1],X[2]),new C(X[3],X[4],X[5]));function ct(X,St){let R=i?.()||{},F=Math.min(yt,St*.9),j=R.sol??16,ht=X-(R.sag??16),rt=R.ust??16,Jt=St-Math.max(R.alt??16,F+12);if(ht-j<80){let Wt=X/2;j=Wt-40,ht=Wt+40}if(Jt-rt<80){let Wt=(Math.max(0,rt)+Math.max(rt+80,Jt))/2;rt=Wt-40,Jt=Wt+40}return{x0:j,y0:rt,x1:ht,y1:Jt,engel:R.engel||[]}}function pt(X,St){let R=n.clientWidth||1,F=n.clientHeight||1,j=ue(X),ht=new C(...St).normalize();ut.crossVectors(nt,ht).normalize(),Rt.crossVectors(ht,ut),jt.copy(ht).negate();let rt=T=ct(R,F),Jt=Math.tan(l.fov*Math.PI/360),Wt=Jt*(R/F),re=Math.min(yt,F*.9)/F,_e=(rt.x0/R*2-1)*Wt,xe=(rt.x1/R*2-1)*Wt,Pe=(1-rt.y0/F*2-re)*Jt,_n=(1-rt.y1/F*2-re)*Jt;j.getCenter(Ct);let je=[],Wn=[],H=[];for(let We=0;We<8;We++)bt.set(We&1?j.max.x:j.min.x,We&2?j.max.y:j.min.y,We&4?j.max.z:j.min.z).sub(Ct),je.push(bt.dot(ut)),Wn.push(bt.dot(Rt)),H.push(bt.dot(jt));let lt=0;for(let We=0;We<8;We++){lt=Math.max(lt,2-H[We]);for(let kn=0;kn<8;kn++)lt=Math.max(lt,(je[We]-je[kn]-xe*H[We]+_e*H[kn])/(xe-_e),(Wn[We]-Wn[kn]-Pe*H[We]+_n*H[kn])/(Pe-_n))}lt=Math.min(d.maxDistance,Math.max(d.minDistance,lt));let ne=(We,kn,w)=>{let U=-1/0,tt=1/0;for(let W=0;W<8;W++)U=Math.max(U,We[W]-w*(H[W]+lt)),tt=Math.min(tt,We[W]-kn*(H[W]+lt));if(!(tt>U))return(U+tt)/2;let $=W=>{let Ft=-1/0,Zt=1/0;for(let Bt=0;Bt<8;Bt++){let Qt=(We[Bt]-W)/(H[Bt]+lt);Qt>Ft&&(Ft=Qt),Qt<Zt&&(Zt=Qt)}return w-Ft-(Zt-kn)};for(let W=0;W<32;W++){let Ft=(U+tt)/2;$(Ft)>0?tt=Ft:U=Ft}return(U+tt)/2},Me=ne(je,_e,xe),ve=ne(Wn,_n,Pe),vn=Ct.clone().addScaledVector(ut,Me).addScaledVector(Rt,ve);return{merkez:vn,konum:vn.clone().addScaledVector(ht,lt)}}function xt(X,St=!1){Nt=X,y=!1;let{merkez:R,konum:F}=pt(X.kutu,X.yon);if(St||dp())return l.position.copy(F),d.target.copy(R),d.update(),L(),Promise.resolve();let j=l.position.clone(),ht=d.target.clone();return d.enabled=!1,Tt(650,rt=>{l.position.lerpVectors(j,F,rt),d.target.lerpVectors(ht,R,rt),l.lookAt(d.target)}).then(()=>{d.enabled=!0,d.update()})}function vt(){if(!Nt)return null;l.updateMatrixWorld();let X=n.clientWidth||1,St=n.clientHeight||1,R=ue(Nt.kutu),F=1/0,j=-1/0,ht=1/0,rt=-1/0;for(let Jt=0;Jt<8;Jt++){bt.set(Jt&1?R.max.x:R.min.x,Jt&2?R.max.y:R.min.y,Jt&4?R.max.z:R.min.z).project(l);let Wt=(bt.x+1)/2*X,re=(1-bt.y)/2*St;F=Math.min(F,Wt),j=Math.max(j,Wt),ht=Math.min(ht,re),rt=Math.max(rt,re)}return{kutu:{x0:F,y0:ht,x1:j,y1:rt},guvenli:ct(X,St),w:X,h:St}}function Tt(X,St,R=!1){return dp()?(St(1),R&&(m=!0),L(),Promise.resolve()):new Promise(F=>{b.add({sure:X,adim:St,bitti:F,golge:R}),L()})}let Yt=n.parentElement.querySelector(".etiketler"),Vt=n.parentElement.querySelector(".isaretler")||Yt,Ht="http://www.w3.org/2000/svg",se=document.createElementNS(Ht,"svg");se.setAttribute("class","cizgiler"),se.setAttribute("aria-hidden","true"),Yt.appendChild(se);let N=[],we=[],oe=0,T=null,_=new C,B=new C,Y=new C,it=X=>{for(let St=X;St;St=St.parent)if(!St.visible)return!1;return!0};function At(X){for(let St of E)St.el.remove(),St.cizgi.remove(),St.nokt.remove();E.length=0;for(let{nokta:St,metin:R,tur:F}of X){let j=document.createElement("div");j.className="etiket"+(F?` etiket-${F}`:""),j.textContent=R,Yt.appendChild(j);let ht=document.createElementNS(Ht,"line"),rt=document.createElementNS(Ht,"circle");rt.setAttribute("r","4.5"),se.append(ht,rt),E.push({el:j,nokta:St,cizgi:ht,nokt:rt,w:0,h:0})}L()}function Pt(X){for(let St of N)St.el.remove();N.length=0;for(let St of X)St.el.hidden=!0,Vt.appendChild(St.el),N.push({...St,acik:!1});we=N.map((St,R)=>[St,R]).sort((St,R)=>(R[0].oncelik??1)-(St[0].oncelik??1)||St[1]-R[1]).map(([St])=>St),oe=0,T=null,L()}function ot(X,St){for(let R=N.length-1;R>=0;R--){let F=N[R].el;if(F.hidden)continue;let j=F.getBoundingClientRect(),ht=j.width/2;if(ht&&Math.hypot(X-j.left-ht,St-j.top-j.height/2)<=ht+2)return F}return null}function ft(X,St){if(!N.length)return;oe||(oe=parseFloat(getComputedStyle(Vt).getPropertyValue("--isaret"))||44);let R=T||(T=ct(X,St)),F=oe+4,j=[],ht=document.activeElement,rt=Math.tan(l.fov*Math.PI/360),Jt=N.some(Wt=>Wt.el===ht)?[...we].sort((Wt,re)=>(re.el===ht)-(Wt.el===ht)):we;for(let Wt of Jt){let re=!1,_e=0,xe=0;(!Wt.nesne||it(Wt.nesne))&&(Wt.nesne?B.copy(Wt.yerel).applyMatrix4(Wt.nesne.matrixWorld):B.copy(Wt.nokta),Y.copy(B).applyMatrix4(l.matrixWorldInverse),Y.z<-l.near&&(_.copy(B).project(l),_e=(_.x+1)/2*X,xe=(1-_.y)/2*St,re=_e>=R.x0&&_e<=R.x1&&xe>=R.y0&&xe<=R.y1&&!R.engel.some(Pe=>_e>Pe.x0-F/2&&_e<Pe.x1+F/2&&xe>Pe.y0-F/2&&xe<Pe.y1+F/2),re&&Wt.adim&&(re=Wt.adim*St/(2*-Y.z*rt)>=oe),re&&Wt.el!==ht&&(re=!j.some(Pe=>Math.abs(Pe.x-_e)<F&&Math.abs(Pe.y-xe)<F)))),re&&(j.push({x:_e,y:xe}),Wt.el.style.transform=`translate3d(${Math.round(_e)}px,${Math.round(xe)}px,0)`),Wt.acik!==re&&(Wt.acik=re,Wt.el.hidden=!re)}}let Ut=(X,St,R)=>(_.copy(X).project(l),{x:(_.x+1)/2*St,y:(1-_.y)/2*R,gor:_.z<1&&Math.abs(_.x)<1.05&&Math.abs(_.y)<1.05});function $t(){let X=n.clientWidth,St=n.clientHeight;if(ft(X,St),!E.length)return;se.setAttribute("width",X),se.setAttribute("height",St);let R=[],F=8,j=30,ht=E.map(rt=>({e:rt,p:Ut(rt.nokta,X,St)})).sort((rt,Jt)=>Jt.p.y-rt.p.y);for(let{e:rt,p:Jt}of ht){rt.w||(rt.w=rt.el.offsetWidth,rt.h=rt.el.offsetHeight);let Wt=Math.min(Math.max(Jt.x-rt.w/2,6),X-rt.w-6),re=Jt.y-j-rt.h,_e=!1;for(let Pe=0;Pe<6;Pe++){let _n=R.find(je=>Wt<je.x+je.w+F&&Wt+rt.w+F>je.x&&re<je.y+je.h+F&&re+rt.h+F>je.y);if(!_n)break;if(re=_n.y-rt.h-F,re<4){re=Jt.y+j,_e=!0,Wt=Math.min(Math.max(_n.x+_n.w+F,6),X-rt.w-6);break}}R.push({x:Wt,y:re,w:rt.w,h:rt.h});let xe=Jt.gor?"1":"0";rt.el.style.opacity=xe,rt.cizgi.style.opacity=xe,rt.nokt.style.opacity=xe,rt.el.style.transform=`translate3d(${Math.round(Wt)}px,${Math.round(re)}px,0)`,rt.cizgi.setAttribute("x1",Jt.x.toFixed(1)),rt.cizgi.setAttribute("y1",Jt.y.toFixed(1)),rt.cizgi.setAttribute("x2",(Wt+rt.w/2).toFixed(1)),rt.cizgi.setAttribute("y2",(_e?re:re+rt.h).toFixed(1)),rt.nokt.setAttribute("cx",Jt.x.toFixed(1)),rt.nokt.setAttribute("cy",Jt.y.toFixed(1))}}let It=new lo,Lt=new kt,et=[],gt=new Set,wt=new C,I=new C,st=new C,Z=X=>!X.isMesh||X.isInstancedMesh||X===u||!it(X)?!1:(Array.isArray(X.material)?X.material:[X.material]).some(R=>R&&R.visible!==!1&&R.blending!==uo&&!(R.transparent&&R.opacity<.2));function _t(X,St,R=1){Lt.set(X,St),It.setFromCamera(Lt,l);let F=It.intersectObjects(a.children,!0).find(xe=>Z(xe.object)),j=F?F.point:null,ht=F?F.distance:1/0,rt=n.clientHeight||1,Jt=Math.tan(l.fov*Math.PI/360),Wt=null,re=1/0,_e=1/0;for(let xe of et){let Pe=xe.userData;if(Pe.etkin===!1||!it(xe))continue;let _n=!1;if(j&&Pe.yari){wt.copy(j),xe.worldToLocal(wt),I.setFromMatrixScale(xe.matrixWorld);let[H,lt,ne]=Pe.yari,Me=.25;_n=Math.abs(wt.x)<=H+Me/I.x&&Math.abs(wt.y)<=lt+Me/I.y&&Math.abs(wt.z)<=ne+Me/I.z}if(!_n&&Pe.ince&&xe.isMesh){let H=It.intersectObject(xe,!1)[0];_n=!!H&&H.distance<=ht+.5}if(!_n||(st.setFromMatrixPosition(xe.matrixWorld),Pe.minPx&&Pe.minAdim&&(Y.copy(st).applyMatrix4(l.matrixWorldInverse),Pe.minAdim*rt/(2*Math.max(.01,-Y.z)*Jt)<Pe.minPx*R)))continue;let je=Pe.hacim??1/0,Wn=j?st.distanceToSquared(j):0;(je<re*.99||je<=re*1.01&&Wn<_e)&&(Wt=xe,re=je,_e=Wn)}return{vekil:Wt,nokta:j?j.clone():Wt?new C().setFromMatrixPosition(Wt.matrixWorld):null}}let Mt=new Set,dt=null,Gt=!1;n.addEventListener("pointerdown",X=>{if(Mt.add(X.pointerId),Mt.size>1){Gt=!0,dt=null;return}dt=Gt?null:{x:X.clientX,y:X.clientY,t:performance.now(),id:X.pointerId}}),n.addEventListener("pointerup",X=>{let St=dt;if(Mt.delete(X.pointerId),Mt.size||(Gt=!1),!St||St.id!==X.pointerId||(dt=null,Math.hypot(X.clientX-St.x,X.clientY-St.y)>9||performance.now()-St.t>600))return;let R=N.length?ot(X.clientX,X.clientY):null;if(R){R.click();return}let F=n.getBoundingClientRect(),j=X.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,ht=_t((X.clientX-F.left)/F.width*2-1,-((X.clientY-F.top)/F.height)*2+1,j);for(let rt of gt)rt(ht.vekil?ht.vekil.userData:null,ht.nokta,ht.vekil)}),n.addEventListener("pointercancel",X=>{Mt.delete(X.pointerId),Mt.size||(Gt=!1),dt=null});let Ot=null,Ae=X=>{X!==Ot&&(Ot?.classList.remove("ustunde"),X?.classList.add("ustunde"),Ot=X,n.style.cursor=X?"pointer":"")};return n.addEventListener("pointermove",X=>{X.pointerType==="mouse"&&!X.buttons&&Ae(N.length?ot(X.clientX,X.clientY):null)}),n.addEventListener("pointerleave",()=>Ae(null)),n.addEventListener("contextmenu",X=>X.preventDefault()),n.addEventListener("webglcontextlost",X=>{X.preventDefault(),e("baglam-kaybi")}),n.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),m=!0,L()}),z(),{renderer:r,scene:a,camera:l,controls:d,hedefler:et,iste:L,kameraGit:xt,tween:Tt,etiketKoy:At,isaretKoy:Pt,gorunurAlan:Kt,golgeYenile:()=>{m=!0,L()},kareGuncelleyici:X=>(p.add(X),L(),()=>p.delete(X)),yavasGuncelleyici:X=>(S.add(X),L(),()=>S.delete(X)),dokunmaDinle:X=>gt.add(X),sec:_t,kadrajOlc:vt,guvenliYenile:()=>{T=null,oe=0,L()},yakinlas:X=>{let St=l.position.clone().sub(d.target),R=Math.min(d.maxDistance,Math.max(d.minDistance,St.length()*X)),F=l.position.clone(),j=d.target.clone().addScaledVector(St.normalize(),R);return y=!0,Tt(260,ht=>l.position.lerpVectors(F,j,ht))},arkaPlan:X=>{r.setClearColor(new le(X),1),L()},sonHedef:()=>Nt,kalite:()=>({kademe:x,piksel:Math.round(k*100)/100,tam:Math.round(A*100)/100})}}function pp(n,t){let{DERSLER:e,KAMERA:i}=n,s=t.veri,r=t.pencere,a=t.temaRengi,o=[["DERSLER","object"],["KAMERA","object"],["KESIF","object"],["KATEGORI","object"],["kategoriBul","function"],["sahneyiKur","function"]].filter(([R,F])=>!n[R]||typeof n[R]!==F).map(([R])=>R);e&&!e[s.slug]&&o.push(`DERSLER['${s.slug}']`),i&&!i.genel&&o.push("KAMERA.genel"),o.length&&console.error(`dersMotoru(${n.id||"?"}): aile tan\u0131m\u0131nda eksik zorunlu alan: ${o.join(", ")}. Sahne a\xE7\u0131lmad\u0131.`);let l=e?.[s.slug]||{adimlar:{}},c=n.KESIF||{},u=n.KATEGORI||{},d=typeof n.kategoriBul=="function"?n.kategoriBul:()=>null,h=new URLSearchParams(location.search).has("olcum"),f=Mn(".adim"),g=new Map(Mn("[data-eylem][aria-pressed]").map(R=>[R,R.getAttribute("aria-pressed")])),y=0,m=null,p=null,S=[],E=null,b=null;t.sinifDegisince=()=>{E&&b?.()};let A=()=>l.adimlar[f[y].dataset.id]||{};function x(R,F=!1){y=Math.max(0,Math.min(f.length-1,R)),f.forEach((Jt,Wt)=>Jt.classList.toggle("etkin",Wt===y));let j=f[y];zt("#adim-sayac").textContent=`${y+1} / ${f.length}`,zt("#ilerleme").style.width=`${(y+1)/f.length*100}%`,zt("#geri").disabled=y===0,zt("#ileri").disabled=y===f.length-1;let ht=zt("h2",j).textContent;for(let[Jt,Wt]of[["#mini-sayac",`${y+1}/${f.length}`],["#mini-baslik",ht],["#kisa-baslik",ht]]){let re=zt(Jt);re&&(re.textContent=Wt)}for(let[Jt,Wt]of[["#mini-geri",y===0],["#mini-ileri",y===f.length-1]]){let re=zt(Jt);re&&(re.disabled=Wt)}let rt=new URL(location.href);rt.hash=j.id,history.replaceState(null,"",rt),zt(".kart-govde")?.scrollTo(0,0),F||ki(`Ad\u0131m ${y+1}: ${zt("h2",j).textContent}`),X(),m&&Lt(j.dataset.id)}zt("#geri").addEventListener("click",()=>x(y-1)),zt("#ileri").addEventListener("click",()=>x(y+1)),document.addEventListener("keydown",R=>{R.target.closest("input, textarea, select")||r?.open||R.altKey||R.ctrlKey||R.metaKey||(["ArrowRight","PageDown"].includes(R.key)&&(R.preventDefault(),x(y+1)),["ArrowLeft","PageUp"].includes(R.key)&&(R.preventDefault(),x(y-1)))});let k=null,v=(R,F)=>{for(;R&&R!==F;R=R.parentElement)if(R.scrollWidth>R.clientWidth+1&&/auto|scroll/.test(getComputedStyle(R).overflowX))return!0;return!1};zt(".kart-alani").addEventListener("touchstart",R=>{let F=R.touches[0];k=R.touches.length===1&&!R.target.closest?.("input, select, textarea, .ayarlar, .erisim-panel")&&!v(R.target,R.currentTarget)?{x:F.clientX,y:F.clientY}:null},{passive:!0}),zt(".kart-alani").addEventListener("touchend",R=>{if(!k)return;let F=R.changedTouches[0],j=F.clientX-k.x,ht=F.clientY-k.y;k=null,Math.abs(j)>70&&Math.abs(ht)<40&&x(y+(j<0?1:-1))},{passive:!0});let M=zt(".ders"),P=zt(".kart-alani"),D=zt(".panel-kenar"),O=zt("#panel-dugme");nd(P),id(zt(".sahne-arac"));let V=window.matchMedia("(orientation: portrait), (max-width: 820px)");function L(R,F=!0){he.dataset.panel=R?"acik":"kapali",O?.setAttribute("aria-expanded",String(R)),O?.setAttribute("aria-label",R?"Anlat\u0131m panelini kapat":"Anlat\u0131m panelini a\xE7"),P.inert=!R&&!V.matches,F&&(ci("bote-3d-panel",R?"acik":"kapali"),ki(R?"Anlat\u0131m paneli a\xE7\u0131ld\u0131":"Anlat\u0131m paneli kapand\u0131; ad\u0131mlar alttaki \xE7ubuktan ge\xE7ilir"))}L(gi("bote-3d-panel")!=="kapali",!1),O?.addEventListener("click",()=>L(he.dataset.panel!=="acik")),zt("#mini-ac")?.addEventListener("click",()=>L(!0)),zt("#mini-geri")?.addEventListener("click",()=>x(y-1)),zt("#mini-ileri")?.addEventListener("click",()=>x(y+1));let G=R=>{R?M.style.setProperty("--panel-w",`${Math.round(R)}px`):M.style.removeProperty("--panel-w")},J=R=>Math.max(300,Math.min(M.clientWidth*.62,R));G(Number(gi("bote-3d-panel-w"))||0);let K=()=>ci("bote-3d-panel-w",String(parseInt(M.style.getPropertyValue("--panel-w"),10)||"")),at=null,z=110;D?.addEventListener("pointerdown",R=>{R.target.closest("#panel-dugme")||he.dataset.panel!=="acik"||V.matches||(D.setPointerCapture(R.pointerId),at={x:R.clientX,w:P.getBoundingClientRect().width,once:M.style.getPropertyValue("--panel-w")},he.dataset.suruklenen="1")}),D?.addEventListener("pointermove",R=>{if(!at)return;let F=R.clientX-at.x,j=at.w+(he.dataset.panelYan==="sol"?F:-F);j<J(0)-z?he.dataset.kapanacak="1":delete he.dataset.kapanacak,G(J(j))});let q=R=>{if(!at)return;let F=at;if(at=null,delete he.dataset.suruklenen,he.dataset.kapanacak&&(delete he.dataset.kapanacak,F.once?M.style.setProperty("--panel-w",F.once):M.style.removeProperty("--panel-w"),R?.type==="pointerup")){L(!1);return}K()};D?.addEventListener("pointerup",q),D?.addEventListener("pointercancel",q),D?.addEventListener("dblclick",R=>{R.target.closest("#panel-dugme")||(G(0),ci("bote-3d-panel-w",""))}),D?.addEventListener("keydown",R=>{if(R.target!==D||!["ArrowLeft","ArrowRight"].includes(R.key))return;R.preventDefault(),R.stopPropagation();let F=R.key==="ArrowLeft"==(he.dataset.panelYan!=="sol");G(J(P.getBoundingClientRect().width+(F?40:-40))),K()});function Q(R,F){he.dataset.panelYan=R;for(let j of Mn("[data-yan]"))j.setAttribute("aria-pressed",String(j.dataset.yan===R));F&&ci("bote-3d-panel-yan",R)}Q(gi("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);let Dt=zt("#ayarlar"),yt=zt("#ayar-dugme"),qt=zt("#ayar-perde");function Kt(R,F=!1){Dt&&(Dt.hidden=!R,qt&&(qt.hidden=!R),yt.setAttribute("aria-expanded",String(R)),R?(ct(),[...Dt.querySelectorAll("input, button")].find(j=>j.id!=="ayar-kapat"&&j.offsetParent!==null)?.focus()):F&&yt.focus())}yt?.addEventListener("click",R=>{R.stopPropagation(),Kt(Dt.hidden)}),zt("#ayar-kapat")?.addEventListener("click",()=>Kt(!1,!0)),document.addEventListener("click",R=>{Dt&&!Dt.hidden&&!R.target.closest("#ayarlar, #ayar-dugme")&&Kt(!1)}),document.addEventListener("keydown",R=>{R.key==="Escape"&&Dt&&!Dt.hidden&&Kt(!1,!0)});let Nt=zt("#panel-genislik"),nt=zt("#genislik-deger"),ut={dar:"Dar",orta:"Orta",genis:"Geni\u015F"},Rt={dar:0,orta:50,genis:100};function jt(){let R=window.innerWidth,F=(j,ht,rt)=>J(Math.max(j,Math.min(ht*R,rt)));return he.dataset.mod==="tahta"?{dar:F(380,.29,1100),orta:F(440,.37,1500),genis:F(560,.5,1900)}:{dar:F(290,.26,440),orta:F(330,.34,560),genis:F(420,.46,900)}}function Ct(R){let F=jt();return R<=50?F.dar+(F.orta-F.dar)*R/50:F.orta+(F.genis-F.orta)*(R-50)/50}function bt(R){let F=jt();return R<=F.orta?F.orta>F.dar?Math.max(0,(R-F.dar)/(F.orta-F.dar)*50):0:F.genis>F.orta?Math.min(100,50+(R-F.orta)/(F.genis-F.orta)*50):100}function ue(){if(!Nt)return;let R=Number(Nt.value),F=Ct(R),j=Object.keys(Rt).find(rt=>Math.abs(Rt[rt]-R)<=3)||"",ht=Math.round(F/Math.max(1,M.clientWidth)*100);nt&&(nt.textContent=j?`${ut[j]} \xB7 %${ht}`:`%${ht}`),Nt.setAttribute("aria-valuetext",`${j?`${ut[j]}, `:""}ekran\u0131n y\xFCzde ${ht} kadar\u0131`),Nt.style.setProperty("--dolu",`${R}%`);for(let rt of Mn("[data-panel-boyut]:not(html)"))rt.setAttribute("aria-pressed",String(rt.dataset.panelBoyut===j))}function ct(){Nt&&(Nt.value=String(Math.round(bt(P.getBoundingClientRect().width||jt().orta))),ue())}let pt=()=>{he.dataset.suruklenen&&!at&&!_&&delete he.dataset.suruklenen};Nt?.addEventListener("pointerdown",()=>{he.dataset.suruklenen="1"}),Nt?.addEventListener("pointerup",pt),Nt?.addEventListener("input",()=>{he.dataset.suruklenen="1",G(Ct(Number(Nt.value))),ue()}),Nt?.addEventListener("change",()=>{pt(),K()});function xt(R,F){he.dataset.panelBoyut=R,F&&(G(0),ci("bote-3d-panel-w",""),ci("bote-3d-panel-boyut",R)),Nt&&(Nt.value=String(Rt[R]),ue())}xt(["dar","orta","genis"].includes(gi("bote-3d-panel-boyut"))?gi("bote-3d-panel-boyut"):"orta",!1);let vt=[.9,1,1.15,1.3,1.5],Tt=Math.max(0,vt.indexOf(Number(gi("bote-3d-yazi"))||1));function Yt(R,F){Tt=Math.max(0,Math.min(vt.length-1,R)),he.style.setProperty("--yazi",String(vt[Tt]));let j=zt("#yazi-deger");j&&(j.textContent=`%${Math.round(vt[Tt]*100)}`),F&&ci("bote-3d-yazi",String(vt[Tt]))}Yt(Tt,!1),document.addEventListener("click",R=>{let F=R.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");F&&(F.dataset.panelBoyut&&xt(F.dataset.panelBoyut,!0),F.dataset.yazi&&Yt(Tt+Number(F.dataset.yazi),!0),F.dataset.yan&&Q(F.dataset.yan,!0))});let Vt=zt("#tahmin-ayar");Vt&&(Vt.checked=gi("bote-3d-tahmin")!=="hayir",Vt.addEventListener("change",()=>ci("bote-3d-tahmin",Vt.checked?"evet":"hayir")));let Ht={kisa:()=>{let R=zt(".tutamac"),F=zt(".kart-ust"),j=zt(".kart-alt"),ht=!!(j&&F&&j.offsetTop<F.offsetTop+F.offsetHeight);return(R?.offsetHeight||0)+Math.max(F?.offsetHeight||0,ht?j.offsetHeight:0)+(ht?0:j?.offsetHeight||0)+2},yarim:()=>M.clientHeight*.5,tam:()=>M.clientHeight*.92},se=88,N=()=>Ht.yarim()-Ht.kisa()+2>=se,we=R=>R==="yarim"&&!N()?"kisa":R,oe=["kisa","yarim","tam"].includes(gi("bote-3d-sayfa"))?gi("bote-3d-sayfa"):"yarim";function T(R,F=!0,j=!1){if(!V.matches){delete he.dataset.sayfa,M.style.removeProperty("--sayfa-h"),m?.gorunurAlan(0,!0),L(he.dataset.panel!=="kapali",!1);return}oe=R;let ht=we(R);he.dataset.sayfa=ht,P.inert=!1;let rt=Math.round(Ht[ht]());j&&(he.dataset.suruklenen="1"),M.style.setProperty("--sayfa-h",`${rt}px`),j&&requestAnimationFrame(()=>delete he.dataset.suruklenen),m?.gorunurAlan(rt,j),F&&ci("bote-3d-sayfa",R)}let _=null;for(let R of[zt(".tutamac"),zt(".kart-ust")].filter(Boolean)){R.addEventListener("pointerdown",j=>{if(!V.matches||j.target.closest("button"))return;R.setPointerCapture(j.pointerId);let ht=performance.now();_={y:j.clientY,h:P.getBoundingClientRect().height,sonY:j.clientY,sonT:ht,hiz:0},he.dataset.suruklenen="1"}),R.addEventListener("pointermove",j=>{if(!_)return;let ht=performance.now(),rt=Math.max(Ht.kisa(),Math.min(Ht.tam(),_.h+(_.y-j.clientY)));M.style.setProperty("--sayfa-h",`${Math.round(rt)}px`),_.hiz=(_.sonY-j.clientY)/Math.max(1,ht-_.sonT),_.sonY=j.clientY,_.sonT=ht});let F=j=>{if(!_)return;let ht=_;_=null,delete he.dataset.suruklenen;let rt=P.getBoundingClientRect().height,Jt=Math.abs(j.clientY-ht.y)>6,Wt=N(),re=Wt?"yarim":"tam",_e;Jt?ht.hiz>.45?_e=rt<Ht.yarim()?re:"tam":ht.hiz<-.45?_e=Wt&&rt>Ht.yarim()?"yarim":"kisa":_e=(Wt?["kisa","yarim","tam"]:["kisa","tam"]).sort((xe,Pe)=>Math.abs(Ht[xe]()-rt)-Math.abs(Ht[Pe]()-rt))[0]:_e=he.dataset.sayfa==="kisa"?re:"kisa",T(_e),ki({kisa:"Kartlar k\xFC\xE7\xFCld\xFC",yarim:"Kartlar yar\u0131m ekran",tam:"Kartlar tam ekran"}[_e])};R.addEventListener("pointerup",F),R.addEventListener("pointercancel",F)}let B=()=>T(oe,!1,!0);V.addEventListener?.("change",B);let Y=0;window.addEventListener("resize",()=>{clearTimeout(Y),Y=setTimeout(()=>{V.matches&&T(oe,!1,!0)},120)}),T(oe,!1,!0),window.addEventListener("hashchange",()=>{let R=f.findIndex(F=>`#${F.id}`===location.hash);R>=0&&R!==y&&x(R)});let it=f.findIndex(R=>`#${R.id}`===location.hash);x(it>0?it:0,!0),document.addEventListener("click",R=>{let F=R.target.closest("[data-eylem]");if(!F||!m||!p)return;let j=p.eylem?.(F.dataset.eylem,F);typeof j=="boolean"&&F.hasAttribute("aria-pressed")&&F.setAttribute("aria-pressed",String(j)),m.iste()}),Mn(".gorunum button").forEach(R=>R.addEventListener("click",()=>It(R.dataset.gorunum))),zt("#yakinlas")?.addEventListener("click",()=>m?.yakinlas(.8)),zt("#uzaklas")?.addEventListener("click",()=>m?.yakinlas(1.25)),window.addEventListener("pagehide",R=>{R.persisted||p?.durdur?.()});let At=zt(".sahne-alani");requestAnimationFrame(()=>setTimeout(Pt,20));function Pt(){if(o.length){he.dataset.webgl="yok";return}if(m=fp(zt("#sahne"),{arkaPlan:a(),olay:Ut,guvenliAlan:ft}),!m){he.dataset.webgl="yok";return}t.S=m;try{if(p=n.sahneyiKur(m,{olay:ot,ders:l,veri:s}),typeof p?.adimUygula!="function")throw new Error("adapt\xF6r adimUygula vermedi")}catch(R){console.error(`dersMotoru(${n.id||"?"}): sahne kurulamad\u0131, yedek aray\xFCz a\xE7\u0131ld\u0131.`,R),m.scene.clear(),zt("#sahne").style.visibility="hidden",m=t.S=p=null,he.dataset.webgl="yok";return}m.dokunmaDinle(Mt),V.matches&&m.gorunurAlan(Math.round(Ht[we(oe)]()),!0),Lt(f[y].dataset.id,!0),requestAnimationFrame(()=>At.classList.add("hazir")),h&&(St(),window.__3d={S:m,adaptor:p,adimaGit:x,kameraBul:$t,gorunumSec:It,adim:()=>f[y].dataset.id,...p.olcumEk})}function ot(R,F){R==="duyur"&&ki(F)}function ft(){let R=zt("#sahne").getBoundingClientRect(),F=he.dataset.mod==="tahta"?24:14,j=F,ht=F,rt=Mn(".ipucu",At).find(_e=>_e.offsetParent!==null);rt&&(j=Math.max(j,rt.getBoundingClientRect().bottom-R.top+8));let Jt=zt(".sahne-arac",At);Jt&&getComputedStyle(Jt).opacity!=="0"&&(ht=Math.max(ht,R.bottom-Jt.getBoundingClientRect().top+8));let Wt=[],re=zt("#lejant");if(re&&re.offsetParent!==null){let _e=re.getBoundingClientRect();Wt.push({x0:_e.left-R.left,y0:_e.top-R.top,x1:_e.right-R.left,y1:_e.bottom-R.top})}return{ust:j,alt:ht,sol:F,sag:F,engel:Wt}}function Ut(R){R==="baglam-kaybi"&&At.classList.add("baglam-kaybi"),R==="baglam-geri"&&At.classList.remove("baglam-kaybi")}zt("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function $t(R,F={}){let j=p?.kameraBul?.(R,F);if(j)return j;let ht=i[R];if(ht)return{kutu:new Zn(new C(ht.kutu[0],ht.kutu[1],ht.kutu[2]),new C(ht.kutu[3],ht.kutu[4],ht.kutu[5])),yon:ht.yon};let rt=p?.kutuBul?.(R);return rt&&i.genel?{kutu:rt,yon:i.genel.yon}:R==="genel"?null:$t("genel",F)}function It(R){let F=m&&$t(A().kamera||"genel",A()),j=n.GORUNUM?.[R];F&&m.kameraGit(j?{...F,yon:j}:F);for(let ht of Mn(".gorunum button"))ht.setAttribute("aria-pressed",String(ht.dataset.gorunum===R))}function Lt(R,F=!1){let j=l.adimlar[R]||{};for(let rt of Mn("[data-eylem][aria-pressed]"))rt.setAttribute("aria-pressed",g.get(rt)||"false");for(let rt of Mn(".gorunum button"))rt.setAttribute("aria-pressed",String(rt.dataset.gorunum==="egik"));p.adimUygula(R,j,F);for(let rt of S)m.scene.remove(rt),rt.traverse(Jt=>Jt.geometry?.dispose());S=n.vurguYap?(j.vurgu||[]).map(rt=>p.alanlar?.[rt]?n.vurguYap(m.scene,p.alanlar[rt]):null).filter(Boolean):[],At.dataset.ipucu=p.ipucu?p.ipucu(j):j.dokun?"dokun":"";let ht=$t(j.kamera||"genel",j);ht&&m.kameraGit(ht,F),he.dataset.kesif==="acik"&&Z(),m.iste(),h&&et(R,j)}function et(R,F){!F.etiket?.length||!p.noktaBul||setTimeout(()=>{if(!p||f[y].dataset.id!==R)return;let j=F.etiket.map(ht=>ht[0]).filter(ht=>{try{return!p.noktaBul(ht)}catch{return!0}});j.length&&console.warn(`[olcum] ${n.id}/${s.slug} ad\u0131m "${R}": noktaBul bo\u015F d\xF6nd\xFC, etiket \xE7izilmedi: ${j.join(", ")}`)},2500)}let gt=zt("#kesif-sablon"),wt=zt("#lejant");wt&&window.matchMedia("(min-width: 700px) and (min-height: 600px)").matches&&(wt.open=!0),wt?.addEventListener("toggle",()=>m?.guvenliYenile());let I=(R,F)=>{let j=gt?.content.querySelector(`[data-kat="${F}"] svg`);R&&j&&R.replaceChildren(j.cloneNode(!0))};function st(R,F,j,ht){let rt=d(R);if(!rt)return null;let Jt=document.createElement("button");Jt.type="button",Jt.className=ht?"kesif-isaret pin-isaret":"kesif-isaret",Jt.dataset.kat=rt,Jt.dataset.id=R;let Wt=document.createElement("span");Wt.className="ki-daire",I(Wt,rt);let re=document.createElement("span");return re.className="ki-no",re.textContent=ht||String(F),re.setAttribute("aria-hidden","true"),Jt.append(Wt,re),Jt.setAttribute("aria-label",ht?`${j}, ${u[rt].ad} grubu`:`${F}. ke\u015Fif noktas\u0131, ${u[rt].ad} grubu`),Jt.addEventListener("click",_e=>{_e.stopPropagation();for(let xe of Mn(".kesif-isaret[aria-current]"))xe.removeAttribute("aria-current");Jt.setAttribute("aria-current","true"),Ae(R,Vt?Vt.checked:!0,j)}),{el:Jt,kat:rt}}function Z(){if(!m||!p)return;let R=[],F=new Set,j=0,ht=({id:rt,ozel:Jt,rozet:Wt,adim:re=0,..._e})=>{let xe=st(rt,j+1,Jt,Wt);xe&&(Wt||j++,F.add(xe.kat),R.push({el:xe.el,oncelik:c[rt].oncelik,adim:re,..._e}))};for(let rt of p.kesifNoktalari||[])ht(rt);for(let rt of p.kesifEk?.(A())||[])ht(rt);m.isaretKoy(R);for(let rt of Mn("li[data-kat]",wt||document.createElement("i")))rt.hidden=!F.has(rt.dataset.kat)}let _t=zt("#kesif-dugme");_t?.addEventListener("click",()=>{let R=he.dataset.kesif!=="acik";he.dataset.kesif=R?"acik":"",_t.setAttribute("aria-pressed",String(R)),m?.guvenliYenile(),R?(Z(),ki("Ke\u015Fif modu a\xE7\u0131k: i\u015Faretli par\xE7alara dokun. \u0130\u015Faretin rengi ve simgesi par\xE7an\u0131n grubunu g\xF6sterir.")):(m?.isaretKoy([]),X(),ki("Ke\u015Fif modu kapand\u0131"))});function Mt(R,F){if(!R){X();return}if(p?.dokunuldu?.(R,F)){m.iste();return}R.kesif&&Ae(R.kesif,he.dataset.kesif==="acik"&&(Vt?Vt.checked:!0),R.ozel)}function dt(R){let F=s.kavramlar||{},j=s.kesifIcerik||{},ht=c[R];return F[R]?{...F[R],ad:ht?.ad||F[R].ad}:j[R]?{...j[R],ad:j[R].ad||ht?.ad||R}:ht?.kavram&&F[ht.kavram]?{...F[ht.kavram],ad:ht.ad}:ht?{ad:ht.ad,yalin:ht.kisa}:null}let Gt=!1,Ot="";function Ae(R,F=!1,j=""){let ht=zt("#bilgi"),rt=R?dt(R):null;if(!ht||!rt)return;let Jt=he.dataset.sinif||"6",Wt=R!==E||ht.hidden;F!=="koru"&&(Gt=!!F,Ot=j||"");let re=zt("#kesif-soru"),_e=zt("#bilgi-cevap");re&&(re.hidden=!Gt),_e&&(_e.hidden=Gt);let xe=d(R),Pe=zt("#bilgi-kat");Pe&&(Pe.hidden=!xe,xe&&(Pe.dataset.kat=xe,zt("#bilgi-kat-ad").textContent=u[xe].ad,I(zt(".ki-daire",Pe),xe))),zt("#bilgi-baslik").textContent=rt.ad;let _n=zt("#bilgi-ozel");if(_n&&(_n.textContent=Ot,_n.hidden=!Ot||Ot===rt.ad),rt.yalin?(zt("#bilgi-teknik").textContent=rt.yalin,zt("#bilgi-sosyal").textContent="",ht.classList.add("yalin")):(zt("#bilgi-teknik").innerHTML=rt.teknik?.[Jt]||rt.teknik?.["6"]||"",zt("#bilgi-sosyal").innerHTML=rt.sosyal?.[Jt]||"",ht.classList.toggle("yalin",!rt.sosyal?.[Jt])),Wt){let je=zt("#bilgi-gorsel");if(je){je.hidden=!0;let Wn=zt("img",je);Wn&&(Wn.removeAttribute("src"),Wn.alt="")}}E=R,ht.hidden=!1,V.matches&&oe==="tam"&&T("yarim"),ki(Gt?"Sence bu nedir? Cevab\u0131 g\xF6r d\xFC\u011Fmesine bas":[rt.ad,Ot].filter(Boolean).join(", ")),Wt&&document.dispatchEvent(new CustomEvent("3d:bilgi",{detail:{id:R}}))}b=()=>Ae(E,"koru"),document.addEventListener("3d:kesif-ac",R=>{let F=R.detail?.id;F&&Ae(F,Vt?Vt.checked:!0,R.detail.ozel)}),zt("#kesif-gor")?.addEventListener("click",()=>{Gt=!1,Ae(E,"koru"),zt("#bilgi-baslik")?.focus?.()});function X(){let R=zt("#bilgi");R&&(R.hidden=!0),E=null;for(let F of Mn(".kesif-isaret[aria-current]"))F.removeAttribute("aria-current")}zt("#bilgi-kapat")?.addEventListener("click",X);function St(){let R=document.createElement("div");R.className="olcum",At.appendChild(R);let F=0,j=performance.now(),ht=j,rt=0;m.kareGuncelleyici(Jt=>(F++,rt=Math.max(rt,Jt-ht),ht=Jt,!1)),setInterval(()=>{let Jt=performance.now(),Wt=m.kalite();R.textContent=`${Math.round(F*1e3/(Jt-j))} kare/sn \xB7 en uzun ${Math.round(rt)} ms \xB7 \xF6l\xE7ek ${Wt.piksel} (tam ${Wt.tam}, kademe ${Wt.kademe})`,F=0,j=Jt,rt=0},1e3)}}var u1=[.04,.58,.81],ji=(n,t,e,i,s,r)=>[n-86,t,e-23,i-86,s,r-23],mp={genel:{kutu:[-108,0,-76,108,91,56],yon:u1},giris:{kutu:[-64,0,-52,74,76,38],yon:[0,.64,.77]},klavye:{kutu:[-48,0,-50,48,66,36],yon:[0,.62,.78]},fare:{kutu:[-12,0,-50,80,64,34],yon:[0,.62,.78]},"mik-kam":{kutu:[-70,0,-52,26,78,44],yon:[0,.6,.8]},cikis:{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},ekran:{kutu:[-44,10,-50,52,68,-38],yon:[0,.2,.98]},"hop-yaz":{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},kulaklik:{kutu:[68,0,22,112,18,46],yon:[-.1,.52,.85]},kablolar:{kutu:[-108,0,-78,26,92,12],yon:[.12,.46,-.88]},"ic-kasa":{kutu:ji(-24,0,-44,21,110,44),yon:[-.8,.32,.5]},"ic-anakart":{kutu:ji(6,28,-43,21,80,21),yon:[-.9,.28,.32]},"ic-islemci":{kutu:ji(-48,48,-37,19,98,-6),yon:[-.86,.3,.4]},"ic-ram":{kutu:ji(-14,44,-14,19,79,3),yon:[-.62,.27,.74]},"ic-depolama":{kutu:ji(6,0,-28,20,64,44),yon:[-.86,.42,.3]},"ic-gpu":{kutu:ji(-6,36,-44,19,60,15),yon:[-.76,.27,.59]},"ic-psu":{kutu:ji(-20,0,-44,13,28,1),yon:[-.8,.5,.35]},"ic-sogutma":{kutu:ji(-20,4,-44,20,104,48),yon:[-.74,.4,.54]},"ic-ozet":{kutu:ji(-20,0,-44,20,100,44),yon:[-.88,.3,.37]},"ic-sivi":{kutu:ji(-16,54,-43,19,98,24),yon:[-.92,.27,.29]},"ic-arka":{kutu:ji(-20,52,-60,20,120,-40),yon:[.5,.3,-.82]}},gp={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06],arkadan:[0,.3,-.96]};var h1={"tus-bas":{yazi:"Tu\u015Fa bas",ikon:"keyboard",tur:"dugme"},"fare-oynat":{yazi:"Fareyi oynat",ikon:"mouse",tur:"dugme"},"fare-tikla":{yazi:"Sol t\u0131kla",ikon:"pointer",tur:"dugme"},"fare-sag":{yazi:"Sa\u011F t\u0131kla",ikon:"mouse",tur:"dugme"},konus:{yazi:"Konu\u015F",ikon:"mic",tur:"dugme"},kamera:{yazi:"Kameray\u0131 a\xE7",ikon:"webcam",tur:"basili"},cozunurluk:{yazi:"\xC7\xF6z\xFCn\xFCrl\xFC\u011F\xFC de\u011Fi\u015Ftir",ikon:"monitor",tur:"dugme"},ses:{yazi:"Ses ver",ikon:"speaker",tur:"dugme"},yazdir:{yazi:"Yazd\u0131r",ikon:"printer",tur:"dugme"},"kulak-dinle":{yazi:"Sesi dinle",ikon:"headphones",tur:"dugme"},"kulak-konus":{yazi:"Mikrofona konu\u015F",ikon:"mic",tur:"dugme"},"kablo-sonraki":{yazi:"S\u0131radaki kablo",ikon:"cable",tur:"dugme"},kapak:{yazi:"Kapa\u011F\u0131 a\xE7",ikon:"door-open",tur:"basili"},"sogutucu-kaldir":{yazi:"So\u011Futucuyu kald\u0131r",ikon:"arrow-up",tur:"basili"},"ram-cikar":{yazi:"RAM'i \xE7\u0131kar",ikon:"memory-stick",tur:"basili"},calistir:{yazi:"Bilgisayar\u0131 \xE7al\u0131\u015Ft\u0131r",ikon:"power",tur:"basili"},"sogutma-turu":{yazi:"S\u0131v\u0131 so\u011Futmaya ge\xE7",ikon:"droplets",tur:"basili"}},P2=Object.fromEntries(Object.entries(h1).map(([n,t])=>[n,t.yazi])),yp={"girdi-cikti-birimleri":{no:1,devre:null,adimlar:{merak:{kamera:"genel",dokun:!0},donanim:{kamera:"genel",etiket:[["parca:kasa","Donan\u0131m","eksi"],["parca:klavye","Donan\u0131m","eksi"],["parca:monitor","Donan\u0131m","eksi"],["parca:ekran","Yaz\u0131l\u0131m","yesil"]]},giris:{kamera:"giris",vurgu:["klavye","fare","mikrofon","kamera"],etiket:[["parca:klavye","Klavye","eksi"],["parca:fare","Fare","eksi"],["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},klavye:{kamera:"klavye",mod:"yaz",yazi:"",kontrol:["tus-bas"],dokun:!0,etiket:[["tus:Esc","Esc"],["tus:Ctrl","Ctrl"],["tus:Shift","Shift"],["tus:Enter","Enter"],["tus:Bosluk","Bo\u015Fluk"]]},fare:{kamera:"fare",mod:"fare",kontrol:["fare-oynat","fare-tikla","fare-sag"],dokun:!0,etiket:[["parca:fare-sol","Sol d\xFC\u011Fme"],["parca:fare-sag","Sa\u011F d\xFC\u011Fme"],["parca:fare-tekerlek","Tekerlek"]]},"mikrofon-kamera":{kamera:"mik-kam",mod:"ses",kontrol:["konus","kamera"],etiket:[["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},cikis:{kamera:"cikis",vurgu:["monitor","hoparlor1","hoparlor2","yazici"],etiket:[["parca:monitor","Monit\xF6r","arti"],["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:hoparlor2","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},ekran:{kamera:"ekran",mod:"ekran",kontrol:["cozunurluk"],dokun:!0},"hoparlor-yazici":{kamera:"hop-yaz",kontrol:["ses","yazdir"],etiket:[["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},"ikisi-de":{kamera:"kulaklik",kontrol:["kulak-dinle","kulak-konus"],vurgu:["kulaklik"],etiket:[["parca:kulaklik-mikrofon","Mikrofon: girdi","eksi"],["parca:kulaklik-kup","Kulakl\u0131k: \xE7\u0131kt\u0131","arti"]]},kablolar:{kamera:"kablolar",mod:"kablo",kontrol:["kablo-sonraki"],dokun:!0,etiket:[["parca:arka-hdmi","HDMI"],["parca:arka-usb","USB"],["parca:arka-ses","Ses giri\u015Fleri"],["parca:arka-ag","A\u011F giri\u015Fi"],["parca:arka-guc","G\xFC\xE7 giri\u015Fi"]]},ozet:{kamera:"genel",etiket:[["parca:klavye","Girdi","eksi"],["parca:fare","Girdi","eksi"],["parca:mikrofon","Girdi","eksi"],["parca:kamera","Girdi","eksi"],["parca:monitor","\xC7\u0131kt\u0131","arti"],["parca:hoparlor1","\xC7\u0131kt\u0131","arti"],["parca:hoparlor2","\xC7\u0131kt\u0131","arti"],["parca:yazici","\xC7\u0131kt\u0131","arti"],["parca:kulaklik","Girdi ve \xE7\u0131kt\u0131","yesil"],["parca:usb-bellek","Depolama"]]}}},"kasanin-ici":{no:2,devre:null,adimlar:{merak:{kamera:"ic-kasa",mod:"ic-kapali",dokun:!0},kapak:{kamera:"ic-kasa",mod:"ic-kapali",kontrol:["kapak"],dokun:!0,etiket:[["parca:kasa","Kapal\u0131 kasa","yesil"]]},anakart:{kamera:"ic-anakart",mod:"ic",vurgu:["ic-anakart"],dokun:!0,etiket:[["parca:ic-anakart","Anakart","yesil"],["parca:ic-pil","BIOS pili"],["parca:ic-ram","RAM yuvalar\u0131"]]},islemci:{kamera:"ic-islemci",mod:"ic",kontrol:["sogutucu-kaldir"],dokun:!0,etiket:[["parca:ic-islemci","\u0130\u015Flemci","yesil"],["parca:ic-hava","Hava so\u011Futucu"]]},ram:{kamera:"ic-ram",mod:"ic",kontrol:["ram-cikar"],dokun:!0,etiket:[["parca:ic-ram","RAM \xE7ubuklar\u0131","yesil"]]},depolama:{kamera:"ic-depolama",mod:"ic",dokun:!0,etiket:[["parca:ic-m2","M.2 SSD","yesil"],["parca:ic-sata-ssd","SATA SSD","yesil"],["parca:ic-hdd","Sabit disk (HDD)","yesil"],["parca:ic-sata-kablo","SATA veri kablosu"]]},"ekran-karti":{kamera:"ic-gpu",mod:"ic",vurgu:["ic-gpu"],dokun:!0,etiket:[["parca:ic-gpu","Ekran kart\u0131","arti"]]},"guc-kaynagi":{kamera:"ic-psu",mod:"ic",vurgu:["ic-psu"],dokun:!0,etiket:[["parca:ic-psu","G\xFC\xE7 kayna\u011F\u0131","yesil"],["parca:ic-kablo24","Anakarta giden kablo"]]},sogutma:{kamera:"ic-sogutma",mod:"ic",kontrol:["calistir","sogutma-turu"],dokun:!0,etiket:[["parca:ic-hava","Hava so\u011Futucu"],["parca:ic-fan-egzoz","\xDCst fan"]]},"sivi-sogutma":{kamera:"ic-sivi",mod:"ic-sivi",kontrol:["calistir"],dokun:!0,etiket:[["parca:ic-pompa","Pompa blo\u011Fu"],["parca:ic-radyator","Radyat\xF6r"],["parca:ic-hortum","Hortum"]]},baglantilar:{kamera:"ic-arka",mod:"ic",dokun:!0,etiket:[["parca:ic-arka-hdmi","HDMI"],["parca:ic-arka-usb","USB"],["parca:ic-arka-ag","A\u011F giri\u015Fi (kablolu)"],["parca:ic-wifi-arka","Wi-Fi anteni (kablosuz)"],["parca:ic-arka-ses","Ses giri\u015Fleri"]]},ozet:{kamera:"ic-ozet",mod:"ic",etiket:[["parca:ic-anakart","Anakart","yesil"],["parca:ic-hava","So\u011Futucu"],["parca:ic-ram","RAM"],["parca:ic-hdd","Depolama"],["parca:ic-gpu","Ekran kart\u0131"],["parca:ic-psu","G\xFC\xE7 kayna\u011F\u0131"]]}}}};var Rh={girdi:{ad:"Girdi birimleri",renk:"#1e6fd9",ikon:"keyboard"},cikti:{ad:"\xC7\u0131kt\u0131 birimleri",renk:"#f57c00",ikon:"monitor",koyu:!0},ikisi:{ad:"Hem girdi hem \xE7\u0131kt\u0131",renk:"#7c4dff",ikon:"headphones"},depolama:{ad:"Depolama",renk:"#00897b",ikon:"hard-drive"},kasa:{ad:"Kasa ve ba\u011Flant\u0131lar",renk:"#6b7280",ikon:"plug"},ic:{ad:"Kasan\u0131n i\xE7i",renk:"#b0245e",ikon:"cpu"},sogutma:{ad:"So\u011Futma",renk:"#2e7d32",ikon:"fan"}},ii=3,An=2,si=1,Oc={klavye:{kat:"girdi",ad:"Klavye",oncelik:ii,kisa:"Harf, rakam ve komut tu\u015Flar\u0131yla bilgisayara yaz\u0131 yazd\u0131r\u0131r. Girdi birimidir."},"tus-harf":{kat:"girdi",ad:"Harf ve rakam tu\u015Flar\u0131",oncelik:si,kisa:"Bas\u0131nca ekranda o harf, rakam ya da i\u015Faret belirir."},"tus-ozel":{kat:"girdi",ad:"\xD6zel tu\u015Flar",oncelik:si,kisa:"Yaz\u0131 yazmak yerine bir i\u015F yapt\u0131ran tu\u015Flar: Tab, Caps Lock, Alt, ok tu\u015Flar\u0131, Delete ve F tu\u015Flar\u0131."},"tus-esc":{kat:"girdi",ad:"Esc tu\u015Fu",oncelik:si,kisa:"Yap\u0131lan i\u015Ften vazge\xE7meyi ya da a\xE7\u0131k pencereyi kapatmay\u0131 sa\u011Flar."},"tus-shift":{kat:"girdi",ad:"Shift tu\u015Fu",oncelik:An,kisa:"Bas\u0131l\u0131 tutulurken harfler b\xFCy\xFCk \xE7\u0131kar, rakam tu\u015Flar\u0131n\u0131n \xFCst\xFCndeki i\u015Faretler yaz\u0131l\u0131r."},"tus-ctrl":{kat:"girdi",ad:"Ctrl tu\u015Fu",oncelik:An,kisa:"Ba\u015Fka bir tu\u015Fla birlikte bas\u0131l\u0131nca k\u0131sayol komutu verir. \xD6rne\u011Fin Ctrl ile C se\xE7ileni kopyalar."},"tus-enter":{kat:"girdi",ad:"Enter tu\u015Fu",oncelik:An,kisa:"Yazd\u0131\u011F\u0131m\u0131z\u0131 onaylar ya da imleci yeni sat\u0131ra ge\xE7irir."},"tus-bosluk":{kat:"girdi",ad:"Bo\u015Fluk tu\u015Fu",oncelik:An,kisa:"Kelimeler aras\u0131nda bo\u015Fluk b\u0131rak\u0131r. Klavyenin en uzun tu\u015Fudur."},fare:{kat:"girdi",ad:"Fare",oncelik:ii,kisa:"Ekrandaki imleci hareket ettirir; sol ve sa\u011F d\xFC\u011Fmeyle se\xE7me, a\xE7ma gibi komutlar verir. Girdi birimidir."},"fare-tekerlek":{kat:"girdi",ad:"Fare tekerle\u011Fi",oncelik:si,kisa:"Sayfay\u0131 yukar\u0131 a\u015Fa\u011F\u0131 kayd\u0131r\u0131r. Bas\u0131l\u0131nca \xFC\xE7\xFCnc\xFC bir d\xFC\u011Fme gibi de \xE7al\u0131\u015Fabilir."},mikrofon:{kat:"girdi",ad:"Mikrofon",oncelik:ii,kisa:"Sesi elektrik sinyaline \xE7evirerek bilgisayara aktar\u0131r. Girdi birimidir."},"web-kamerasi":{kat:"girdi",ad:"Web kameras\u0131",oncelik:ii,kisa:"G\xF6r\xFCnt\xFCy\xFC al\u0131p bilgisayara aktar\u0131r; g\xF6r\xFCnt\xFCl\xFC g\xF6r\xFC\u015Fmede ve foto\u011Fraf \xE7ekmede kullan\u0131l\u0131r. Girdi birimidir."},monitor:{kat:"cikti",ad:"Monit\xF6r",oncelik:ii,kisa:"Bilgisayar\u0131n \xFCretti\u011Fi g\xF6r\xFCnt\xFCy\xFC g\xF6sterir. \xC7\u0131kt\u0131 birimidir."},ekran:{kat:"cikti",ad:"Ekran ve pikseller",oncelik:An,kisa:"G\xF6r\xFCnt\xFC, piksel denen \xE7ok k\xFC\xE7\xFCk renkli noktalardan olu\u015Fur. Nokta say\u0131s\u0131 artt\u0131k\xE7a g\xF6r\xFCnt\xFC keskinle\u015Fir."},hoparlor:{kat:"cikti",ad:"Hoparl\xF6r",oncelik:ii,kisa:"Bilgisayardaki sesi duyulabilir hale getirir. \xC7\u0131kt\u0131 birimidir."},yazici:{kat:"cikti",ad:"Yaz\u0131c\u0131",oncelik:ii,kisa:"Bilgisayardaki yaz\u0131 ve resmi k\xE2\u011F\u0131da basar. \xC7\u0131kt\u0131 birimidir."},kulaklik:{kat:"ikisi",ad:"Mikrofonlu kulakl\u0131k",oncelik:ii,kisa:"Sesi kula\u011Fa verir (\xE7\u0131kt\u0131), kolundaki mikrofon sesinizi bilgisayara iletir (girdi)."},"kulaklik-mikrofon":{kat:"ikisi",ad:"Kulakl\u0131\u011F\u0131n mikrofonu",oncelik:si,kisa:"Kulakl\u0131\u011F\u0131n ucundaki k\xFC\xE7\xFCk mikrofon sesinizi bilgisayara ta\u015F\u0131r. Buras\u0131 girdi taraf\u0131d\u0131r."},"usb-bellek":{kat:"depolama",ad:"USB bellek",oncelik:An,kisa:"Dosyalar\u0131 saklayan, tak\u0131l\u0131p \xE7\u0131kar\u0131labilen k\xFC\xE7\xFCk depolama birimidir."},kasa:{kat:"kasa",ad:"Kasa",oncelik:ii,kisa:"Bilgisayar\u0131n ana par\xE7alar\u0131n\u0131 i\xE7inde ta\u015F\u0131yan ve koruyan kutudur. Birinci derste kapal\u0131 kal\u0131r; ikinci derste kapa\u011F\u0131 a\xE7\u0131p i\xE7ini geziyoruz."},"guc-dugmesi":{kat:"kasa",ad:"G\xFC\xE7 d\xFC\u011Fmesi",oncelik:An,kisa:"Bilgisayar\u0131 a\xE7ar ve kapat\u0131r."},"usb-girisi":{kat:"kasa",ad:"USB giri\u015Fi",oncelik:An,kisa:"Klavye, fare, yaz\u0131c\u0131 ve USB bellek gibi cihazlar\u0131n tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ses-jaklari":{kat:"kasa",ad:"Ses giri\u015Fleri",oncelik:An,kisa:"Kulakl\u0131k, mikrofon ve hoparl\xF6r kablolar\u0131n\u0131n tak\u0131ld\u0131\u011F\u0131 yuvalar. Yanlar\u0131ndaki simge ve renk hangisinin nereye tak\u0131laca\u011F\u0131n\u0131 g\xF6sterir."},"hdmi-girisi":{kat:"kasa",ad:"HDMI giri\u015Fi",oncelik:An,kisa:"G\xF6r\xFCnt\xFCy\xFC monit\xF6re ta\u015F\u0131yan kablonun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ag-girisi":{kat:"kasa",ad:"A\u011F giri\u015Fi",oncelik:si,kisa:"\u0130nternet kablosunun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"guc-girisi":{kat:"kasa",ad:"G\xFC\xE7 kablosu giri\u015Fi",oncelik:An,kisa:"Prizden gelen elektri\u011Fin kasaya girdi\u011Fi yerdir."},"guc-kaynagi":{kat:"kasa",ad:"G\xFC\xE7 kayna\u011F\u0131",oncelik:An,kisa:"Prizdeki elektri\u011Fi bilgisayar par\xE7alar\u0131n\u0131n kullanabilece\u011Fi d\xFC\u015F\xFCk gerilime \xE7evirir."},"yan-kapak":{kat:"kasa",ad:"Yan kapak",oncelik:An,kisa:"Kasan\u0131n yan y\xFCz\xFCndeki kapakt\u0131r. A\xE7\u0131l\u0131nca i\xE7indeki par\xE7alar g\xF6r\xFCn\xFCr; kapal\u0131yken par\xE7alar\u0131 toz ve dokunmaktan korur."},anakart:{kat:"ic",ad:"Anakart",oncelik:ii,kisa:"Bilgisayar\u0131n b\xFCt\xFCn par\xE7alar\u0131n\u0131n tak\u0131ld\u0131\u011F\u0131 ya da kabloyla ba\u011Fland\u0131\u011F\u0131 ana kartt\u0131r. Par\xE7alar onun \xFCzerinden birbiriyle konu\u015Fur."},islemci:{kat:"ic",ad:"\u0130\u015Flemci",oncelik:ii,kisa:"Bilgisayar\u0131n beynidir. Hesaplar\u0131 yapar ve programlar\u0131 \xE7al\u0131\u015Ft\u0131r\u0131r. \xC7al\u0131\u015F\u0131rken \u0131s\u0131n\u0131r, bu y\xFCzden \xFCst\xFCne so\u011Futucu tak\u0131l\u0131r."},"termal-macun":{kat:"ic",ad:"Termal macun",oncelik:An,kisa:"\u0130\u015Flemci ile so\u011Futucu aras\u0131na s\xFCr\xFClen ince macundur. Aradaki bo\u015Fluklar\u0131 doldurarak \u0131s\u0131n\u0131n so\u011Futucuya ge\xE7mesini kolayla\u015Ft\u0131r\u0131r."},ram:{kat:"ic",ad:"RAM (bellek)",oncelik:ii,kisa:"Bilgisayar\u0131n \xE7al\u0131\u015Fma masas\u0131d\u0131r. A\xE7\u0131k program ve dosyalar ge\xE7ici olarak burada durur. Elektrik gidince i\xE7indekiler silinir."},"ekran-karti":{kat:"ic",ad:"Ekran kart\u0131",oncelik:ii,kisa:"Ekranda g\xF6rd\xFC\u011F\xFCm\xFCz g\xF6r\xFCnt\xFCy\xFC haz\u0131rlar. Kendi fanlar\u0131 vard\u0131r ve \xE7al\u0131\u015F\u0131rken \xE7ok \u0131s\u0131n\u0131r."},"pcie-yuvasi":{kat:"ic",ad:"PCIe yuvas\u0131",oncelik:si,kisa:"Ekran kart\u0131 gibi ek kartlar\u0131n anakarta tak\u0131ld\u0131\u011F\u0131 uzun yuvad\u0131r."},"guc-kablolari":{kat:"ic",ad:"G\xFC\xE7 kablolar\u0131",oncelik:An,kisa:"G\xFC\xE7 kayna\u011F\u0131ndan anakarta ve ekran kart\u0131na elektrik ta\u015F\u0131yan kal\u0131n kablolard\u0131r."},"bios-pili":{kat:"ic",ad:"BIOS pili",oncelik:si,kisa:"Anakart\u0131n \xFCzerindeki k\xFC\xE7\xFCk pildir. Bilgisayar kapal\u0131yken saati ve temel ayarlar\u0131 korur."},"arka-panel":{kat:"kasa",ad:"Arka panel",oncelik:si,kisa:"Anakart\u0131n kasan\u0131n arkas\u0131na a\xE7\u0131lan giri\u015F paneli. USB, ses, g\xF6r\xFCnt\xFC ve a\u011F giri\u015Fleri burada toplan\u0131r."},"wifi-karti":{kat:"ic",ad:"Wi-Fi kart\u0131",oncelik:si,kisa:"Bilgisayar\u0131n kablosuz a\u011Fa ba\u011Flanmas\u0131n\u0131 sa\u011Flayan kartt\u0131r. Antenleri kasan\u0131n arkas\u0131na \xE7\u0131kar."},"veri-kablosu":{kat:"ic",ad:"Veri kablosu",oncelik:si,kisa:"Depolama birimi ile anakart aras\u0131nda bilgiyi ta\u015F\u0131yan kablodur."},"m2-ssd":{kat:"depolama",ad:"M.2 SSD",oncelik:An,kisa:"K\xFC\xE7\xFCk bir kart gibi do\u011Frudan anakarta tak\u0131lan h\u0131zl\u0131 depolama birimidir. Kablo gerektirmez."},"sata-ssd":{kat:"depolama",ad:"SATA SSD",oncelik:An,kisa:"\u0130nce bir kutu bi\xE7imindeki SSD. Veriyi SATA kablosuyla anakarta iletir; hareketli par\xE7as\u0131 yoktur."},hdd:{kat:"depolama",ad:"Sabit disk (HDD)",oncelik:An,kisa:"D\xF6nen disklerin \xFCzerine bilgi yazan depolama birimidir. B\xFCy\xFCk ve ucuzdur ama SSD kadar h\u0131zl\u0131 de\u011Fildir."},"hava-sogutucu":{kat:"sogutma",ad:"Hava so\u011Futucu",oncelik:ii,kisa:"\u0130\u015Flemcinin \u0131s\u0131s\u0131n\u0131 alan metal kanatl\u0131 so\u011Futucudur. \xDCzerindeki fan havay\u0131 kanatlar\u0131n aras\u0131ndan \xFCfleyerek \u0131s\u0131y\u0131 uzakla\u015Ft\u0131r\u0131r."},"isi-borusu":{kat:"sogutma",ad:"Is\u0131 borusu",oncelik:si,kisa:"So\u011Futucudaki bak\u0131r borulard\u0131r. Is\u0131y\u0131 i\u015Flemcinin \xFCst\xFCnden kanatlara h\u0131zla ta\u015F\u0131r."},"sivi-sogutma":{kat:"sogutma",ad:"S\u0131v\u0131 so\u011Futma",oncelik:ii,kisa:"Is\u0131y\u0131 hava yerine s\u0131v\u0131yla ta\u015F\u0131yan sistemdir: pompa blo\u011Fu, iki hortum ve radyat\xF6r birlikte \xE7al\u0131\u015F\u0131r."},"pompa-blogu":{kat:"sogutma",ad:"Pompa blo\u011Fu",oncelik:An,kisa:"\u0130\u015Flemcinin \xFCst\xFCne oturur ve \u0131s\u0131y\u0131 s\u0131v\u0131ya verir. \u0130\xE7indeki pompa s\u0131v\u0131y\u0131 hortumlardan radyat\xF6re do\u011Fru d\xF6nd\xFCr\xFCr."},radyator:{kat:"sogutma",ad:"Radyat\xF6r",oncelik:An,kisa:"S\u0131cak s\u0131v\u0131n\u0131n ince borulardan ge\xE7erek so\u011Fudu\u011Fu kanatl\u0131 metal b\xF6l\xFCmd\xFCr. \xDCzerindeki fanlar \u0131s\u0131y\u0131 havaya atar."},"sogutma-hortumu":{kat:"sogutma",ad:"So\u011Futma hortumu",oncelik:si,kisa:"S\u0131v\u0131y\u0131 pompadan radyat\xF6re ve geri ta\u015F\u0131yan iki esnek borudur. Biri s\u0131cak, biri so\u011Fumu\u015F s\u0131v\u0131y\u0131 ta\u015F\u0131r."},"kasa-fani":{kat:"sogutma",ad:"Kasa fan\u0131",oncelik:An,kisa:"Kasan\u0131n i\xE7ine serin hava alan ya da \u0131s\u0131nan havay\u0131 d\u0131\u015Far\u0131 atan fand\u0131r. \xD6nde hava girer, \xFCstte hava \xE7\u0131kar."},"hava-akisi":{kat:"sogutma",ad:"Hava ak\u0131\u015F\u0131",oncelik:si,kisa:"Kasan\u0131n i\xE7indeki havan\u0131n yoludur: serin hava \xF6nden girer, par\xE7alar\u0131 ge\xE7erken \u0131s\u0131n\u0131r ve yukar\u0131dan \xE7\u0131kar."},"toz-filtresi":{kat:"sogutma",ad:"Toz filtresi",oncelik:si,kisa:"Kasaya giren havadaki tozu tutan ince a\u011Fd\u0131r. Par\xE7alar\u0131n toz i\xE7inde kalmas\u0131n\u0131 \xF6nler."}};function $s(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new hn,c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=_p(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][h]);let g=_p(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function _p(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new yn(a,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let y=u.getComponent(h,g);o.setComponent(h+d,g,y)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Ao=new C;function Li(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ao.copy(t),Ao[i]=0,Ao.normalize();let c=.5*a/(a+o),u=1-Ao.angleTo(n)/l;return Math.sign(Ao[e])===1?u*c:o/(a+o)+c+c*(1-u)}var zc=class n extends xn{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,u=new C(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,y=new C,m=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),f[S+0]=Li(y,c,"z","y",r,i),f[S+1]=1-Li(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[S+0]=1-Li(y,c,"z","y",r,i),f[S+1]=1-Li(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[S+0]=1-Li(y,c,"x","z",r,t),f[S+1]=Li(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[S+0]=1-Li(y,c,"x","z",r,t),f[S+1]=1-Li(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[S+0]=1-Li(y,c,"x","y",r,t),f[S+1]=1-Li(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[S+0]=Li(y,c,"x","y",r,t),f[S+1]=1-Li(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var mt=(n,t,e,i=0,s=0,r=0)=>{let a=new xn(n,t,e);return a.translate(i,s,r),a};function De(n,t,e,i,s=0,r=0,a=0,o=2){let l=new zc(n,t,e,o,Math.max(.05,Math.min(i,n/2-.01,t/2-.01,e/2-.01)));return l.translate(s,r,a),l}function de(n,t,e=0,i=0,s=0,{seg:r=20,eksen:a="y",rUst:o=n,acik:l=!1}={}){let c=new Qr(o,n,t,r,1,l);return a==="x"?c.rotateZ(-Math.PI/2):a==="z"&&c.rotateX(Math.PI/2),c.translate(e,i,s),c}function wi(n,t){let e=new Et($s(n.map(i=>i.index?i.toNonIndexed():i),!1),t);return e.matrixAutoUpdate=!1,e}function qe(n,t){let e=new le(t),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new yn(s,3)),n}function xp(n,t=.22,e=10,i=6){let s=new Xi(n.map(r=>r.isVector3?r:new C(...r)),!1,"catmullrom",.35);return new qi(s,Math.max(6,Math.round(s.getLength()*e/10)),t,i,!1)}function vp(n,t,e,i){let s=new Yi;s.moveTo(-n/2,-t/2),s.lineTo(n/2,-t/2),s.lineTo(n/2,t/2),s.lineTo(-n/2,t/2),s.closePath();let r=new ls;r.absarc(0,0,e,0,Math.PI*2,!0),s.holes.push(r);let a=new cs(s,{depth:i,bevelEnabled:!1,curveSegments:20});return a.translate(0,0,-i/2),a}function Gn(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var d1=4;function fi(n,{tekrar:t=!1,aniso:e=!0}={}){let i=new Wi(n);return i.colorSpace=mn,e&&(i.anisotropy=d1),t&&(i.wrapS=i.wrapT=vi),i}var fs='"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif',an=(n,t=.6,e=0,i={})=>new Le({color:n,roughness:t,metalness:e,...i}),ee={};function Pn(){return ee.hazir||Object.assign(ee,{hazir:!0,kasa:an(2961463,.5,.35),kasaIc:an(1842723,.7,.2),plastik:an(2237739,.55),plastikAcik:an(7041144,.55),plastikBeyaz:an(15330286,.5),alumin:an(11975878,.38,.9),aluminKoyu:an(4870234,.42,.85),celik:an(13028049,.3,1),bakir:an(13203258,.32,1),altin:an(14726734,.3,1),cip:an(1316122,.6),kagit:an(16185074,.92),klavyeGovde:an(4540754,.55),renkli:an(16777215,.5,.3,{vertexColors:!0}),kablo:an(1513500,.65),kabloKirmizi:an(12858667,.6),kabloSari:an(14262811,.6),kabloYesil:an(3120727,.6),kabloMavi:an(2909129,.6),fanKanat:an(3159100,.55,0,{side:wn}),fanCerceve:an(1908773,.6),cam:an(724242,.08,.2),lensCam:an(1053468,.05,.6),pcbKenar:an(1002036,.5),soket:an(2764083,.5),ledYesil:new en({color:3264619}),ledKirmizi:new en({color:16729144}),ledMavi:new en({color:5088255}),ledKapali:new en({color:2764342}),vurgu:new en({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new Jr({color:6962672}),gorunmez:new en({visible:!1})}),ee}function bp(n){n.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}var V2=new He;function Ke(n,t,e,i,s=0,r=0,a=0){let o=new un;return o.position.set(s,r,a),o.userData={...n,yari:[t/2,e/2,i/2],hacim:n.hacim??t*e*i},o.updateMatrixWorld(),o}function ps(n,t,e,i,s,r=null){let a=new un;return a.position.set(e,i,s),a.name="kesif-"+t,r&&(a.userData.yon=new C(...r).normalize()),n.add(a),{id:t,nesne:a,yerel:new C}}function Mp(n,t){Pn();let[e,i,s,r,a,o]=t,l=new Re,c=new xn(r+1.2,a+1.2,o+1.2),u=new Et(c,ee.vurgu);return u.renderOrder=2,l.add(u,new Ga(new Ya(c),ee.vurguCizgi)),l.position.set(e,i,s),n.add(l),l}var Di={x0:-108,x1:108,z0:-76,z1:56,ust:-.2,kalin:5},Ne={x:-86,z:-23,w:40,h:90,d:86},dn={x:4,z:-46},ri=[{x:-53,z:-46},{x:61,z:-46}],Ai={x:0,z:22},ai={x:58,z:22},Ei={x:88,z:-43},oi={x:-55,z:34},Nn={x:90,z:34},Qi={x:-33,z:47,don:.5},Ni={x:4,y:66.6,z:-46};var pi=1024,li=576,f1=[[43,24],[85,48],[256,144],[pi,li]],Sp=[[80,45],[160,90],[480,270],[1920,1080]];function ts(n,t,e,i,s,r,a,o){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath(),a&&(n.fillStyle=a,n.fill()),o&&(n.strokeStyle=o,n.lineWidth=2,n.stroke())}var Ph=(n,t)=>{n.beginPath(),t.forEach(([e,i],s)=>s?n.lineTo(e,i):n.moveTo(e,i)),n.closePath(),n.fill()},Ts=(n,t,e,i,s,r,{kalin:a=!1,hiza:o="left"}={})=>{n.font=`${a?700:500} ${s}px ${fs}`,n.fillStyle=r,n.textAlign=o,n.textBaseline="middle",n.fillText(t,e,i)};function Eo(n,t,e,i,s,r){n.save(),n.shadowColor="rgba(20,24,40,.25)",n.shadowBlur=22,n.shadowOffsetY=6,ts(n,t,e,i,s,10,"#ffffff"),n.restore(),ts(n,t,e,i,38,10,"#e7ebf2"),n.fillStyle="#e7ebf2",n.fillRect(t,e+24,i,14),Ts(n,r,t+16,e+20,19,"#2b3342",{kalin:!0});for(let a=0;a<3;a++)n.fillStyle=["#b8c0cf","#b8c0cf","#e5654f"][a],n.beginPath(),n.arc(t+i-24-a*26,e+19,8,0,Math.PI*2),n.fill()}function Ch(n,t,e,i,s){i==="bilgisayar"&&(ts(n,t+6,e+6,44,30,4,"#2b3342"),ts(n,t+10,e+10,36,22,2,"#7fb4f5"),n.fillStyle="#2b3342",n.fillRect(t+22,e+36,12,6),n.fillRect(t+14,e+42,28,4)),i==="klasor"&&(ts(n,t+6,e+14,44,30,4,"#f2b53e"),ts(n,t+6,e+8,20,10,3,"#e29f25")),i==="cop"&&(n.fillStyle="#9aa4b6",Ph(n,[[t+14,e+14],[t+42,e+14],[t+38,e+46],[t+18,e+46]]),n.fillStyle="#7e889b",n.fillRect(t+10,e+8,36,6)),Ts(n,s,t+28,e+62,15,"#1d2433",{kalin:!0,hiza:"center"})}function p1(n,t){if(t.mod==="kapali"){n.fillStyle="#0a0b0e",n.fillRect(0,0,pi,li);return}if(t.mod==="acilis"){n.fillStyle="#0c1018",n.fillRect(0,0,pi,li),n.strokeStyle="#7c8aa8",n.lineWidth=10,n.lineCap="round",n.beginPath(),n.arc(pi/2,li/2-20,46,-1.2,3.2),n.stroke(),Ts(n,"Ba\u015Flat\u0131l\u0131yor",pi/2,li/2+70,26,"#aab4c8",{hiza:"center"});return}n.fillStyle="#d5e6fb",n.fillRect(0,0,pi,li),n.fillStyle="#a2c8f3",Ph(n,[[0,410],[170,320],[350,390],[560,290],[770,380],[1024,310],[1024,576],[0,576]]),n.fillStyle="#6ea4e8",Ph(n,[[0,470],[230,410],[430,460],[650,400],[870,460],[1024,420],[1024,576],[0,576]]),Ch(n,28,24,"bilgisayar","Bilgisayar"),Ch(n,28,120,"klasor","Belgeler"),Ch(n,28,216,"cop","\xC7\xF6p"),Eo(n,150,56,470,340,"Yaz\u0131 Defteri"),n.fillStyle="#2b3342",n.font=`500 26px ${fs}`,n.textAlign="left",n.textBaseline="alphabetic";let e=t.yazi||"",i=[],s="";for(let l of e){if(l===`
`){i.push(s),s="";continue}n.measureText(s+l).width>420&&(i.push(s),s=""),s+=l}i.push(s);let r=i.slice(-7);r.forEach((l,c)=>n.fillText(l,174,130+c*40)),e||(n.fillStyle="#9aa4b6",n.fillText("Bir tu\u015Fa bas",174,130));let a=130+(r.length-1)*40;if(n.fillStyle="#7c4dff",n.fillRect(174+n.measureText(r[r.length-1]).width+3,a-24,3,32),t.kamera&&(Eo(n,650,70,330,270,"Kamera"),n.fillStyle="#26324a",n.fillRect(662,118,306,210),n.fillStyle="#8ea6d6",n.beginPath(),n.arc(815,205,40,0,Math.PI*2),n.fill(),n.fillStyle="#5f7fc2",n.beginPath(),n.ellipse(815,330,86,70,0,Math.PI,0),n.fill(),n.strokeStyle="#e5654f",n.lineWidth=4,n.strokeRect(670,126,290,194),n.fillStyle="#e5654f",n.beginPath(),n.arc(692,146,7,0,Math.PI*2),n.fill(),Ts(n,"Kay\u0131t",708,147,15,"#ffffff",{kalin:!0})),t.ses!=null){Eo(n,650,360,330,150,"Ses Kayd\u0131");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*1.7+t.ses*9)*Math.cos(l*.6+t.ses*5))*66;n.fillStyle="#7c4dff",n.fillRect(668+l*10,450-c/2-8,6,c)}Ts(n,"Dinleniyor",668,492,15,"#5b6579",{kalin:!0})}if(t.cal!=null){Eo(n,650,360,330,150,"M\xFCzik");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*.9+t.cal*7)*Math.cos(l*.4+t.cal*3))*66;n.fillStyle="#7c4dff",n.fillRect(668+l*10,450-c/2-8,6,c)}Ts(n,"\xC7al\u0131yor",668,492,15,"#5b6579",{kalin:!0})}t.yazdir!=null&&(Eo(n,250,200,380,160,"Yazd\u0131r"),Ts(n,t.yazdir>=1?"Yazd\u0131r\u0131ld\u0131":"Yaz\u0131c\u0131ya g\xF6nderiliyor",274,262,20,"#2b3342",{kalin:!0}),ts(n,274,296,332,22,11,"#e1e6ef"),t.yazdir>0&&ts(n,274,296,Math.max(22,332*Math.min(1,t.yazdir)),22,11,"#7c4dff")),n.fillStyle="#1f2533",n.fillRect(0,li-44,pi,44),ts(n,12,li-38,32,32,7,"#7c4dff");for(let l=0;l<3;l++)ts(n,62+l*46,li-36,36,28,6,l===0?"#3a4560":"#2d3548");if(Ts(n,"10:24",pi-22,li-22,19,"#dfe5f1",{kalin:!0,hiza:"right"}),t.menu){let l=Math.min(t.imlec.x+6,pi-170),c=Math.min(t.imlec.y+26,li-150);n.save(),n.shadowColor="rgba(20,24,40,.3)",n.shadowBlur=16,n.shadowOffsetY=4,ts(n,l,c,160,104,8,"#ffffff"),n.restore(),["Kes","Kopyala","Yap\u0131\u015Ft\u0131r"].forEach((u,d)=>Ts(n,u,l+16,c+22+d*30,19,"#2b3342",{kalin:d===1}))}let o=t.imlec||{x:760,y:220};t.tik&&(n.strokeStyle="#7c4dff",n.lineWidth=4,n.beginPath(),n.arc(o.x,o.y,18+(t.tik-1)*20,0,Math.PI*2),n.stroke()),n.fillStyle="#ffffff",n.strokeStyle="#111827",n.lineWidth=2.5,n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(o.x,o.y+30),n.lineTo(o.x+8,o.y+23),n.lineTo(o.x+14,o.y+36),n.lineTo(o.x+20,o.y+33),n.lineTo(o.x+14,o.y+21),n.lineTo(o.x+24,o.y+21),n.closePath(),n.fill(),n.stroke()}function wp(){let[n,t]=Gn(pi,li),[e,i]=Gn(pi,li),[s,r]=Gn(pi,li),a=fi(e,{aniso:!1}),o={mod:"masaustu",yazi:"",imlec:{x:760,y:230},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3};function l(){p1(t,o);let[c,u]=f1[o.kademe];c>=pi?(i.imageSmoothingEnabled=!0,i.drawImage(n,0,0)):(s.width=c,s.height=u,r.imageSmoothingEnabled=!0,r.drawImage(n,0,0,c,u),i.imageSmoothingEnabled=!1,i.drawImage(s,0,0,c,u,0,0,pi,li)),a.needsUpdate=!0}return l(),{tex:a,durum:o,guncelle:l}}function ko(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Tp=(n,t)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]},Ih=n=>n<0?0:n>255?255:n,Ap=n=>n*n*(3-2*n),kp={},Bc=(n,t)=>{let e=performance.now(),i=t();return kp[n]=Math.round((performance.now()-e)*10)/10,i};function m1(n,t,e,i,s){let r=ko(s),a=new Float32Array(e*i),o=new Float32Array(n*t);for(let d=0;d<a.length;d++)a[d]=r();let l=new Int32Array(n),c=new Int32Array(n),u=new Float32Array(n);for(let d=0;d<n;d++){let h=d*e/n,f=Math.floor(h);l[d]=f%e,c[d]=(f+1)%e,u[d]=Ap(h-f)}for(let d=0;d<t;d++){let h=d*i/t,f=Math.floor(h),g=f%i*e,y=(f+1)%i*e,m=Ap(h-f),p=d*n;for(let S=0;S<n;S++){let E=a[g+l[S]],b=a[g+c[S]],A=a[y+l[S]],x=a[y+c[S]],k=u[S];o[p+S]=(E+(b-E)*k)*(1-m)+(A+(x-A)*k)*m}}return o}function Vc(n,t,e,i){let s=new Float32Array(n*t),r=0;e.forEach(([a,o,l],c)=>{let u=m1(n,t,a,o,i+c*7919);for(let d=0;d<s.length;d++)s[d]+=u[d]*l;r+=l});for(let a=0;a<s.length;a++)s[a]/=r;return s}function Lh(n,t,e,i,s=!0){let[r,a]=Tp(t,e),o=a.createImageData(t,e),l=o.data,c=(u,d)=>(s?(u=(u+t)%t,d=(d+e)%e):(u=u<0?0:u>=t?t-1:u,d=d<0?0:d>=e?e-1:d),n[d*t+u]);for(let u=0;u<e;u++)for(let d=0;d<t;d++){let h=(c(d-1,u)-c(d+1,u))*i,f=(c(d,u+1)-c(d,u-1))*i,g=1,y=Math.hypot(h,f,g);h/=y,f/=y,g/=y;let m=(u*t+d)*4;l[m]=(h*.5+.5)*255,l[m+1]=(f*.5+.5)*255,l[m+2]=(g*.5+.5)*255,l[m+3]=255}return a.putImageData(o,0,0),r}var ks=4;function ga(n,t,e=!1,i=ks){let s=new Wi(n);return s.colorSpace=t?mn:Ji,s.minFilter=Ci,s.magFilter=Sn,s.anisotropy=i,e&&(s.wrapS=s.wrapT=vi),s}var g1=n=>new kt(n,n);function y1(n,t,e,i,s,r,a,o,l="0,0,0"){n.save(),n.shadowColor=`rgba(${l},${o})`,n.shadowBlur=a,n.shadowOffsetX=t+100,n.shadowOffsetY=0,n.fillStyle="#000",n.fillRect(e-s/2-t-100,i-r/2,s,r),n.restore()}function _1({x0:n,x1:t,z0:e,z1:i},s=[],r=ks){let c=Bc("ahsap-damar",()=>{let h=Vc(1024,640,[[2,11,1],[4,23,.45]],2645),f=Vc(1024,640,[[28,220,1],[14,420,.7]],2746),g=Vc(1024,640,[[2,3,1],[6,9,.35]],2847),y=new Float32Array(1024*640),m=new Float32Array(1024*640);for(let p=0;p<y.length;p++){let S=.5+.5*Math.sin(h[p]*40+f[p]*1.6),E=Math.pow(S,1.8);m[p]=Math.min(1,Math.max(0,E*.5+f[p]*.3)),y[p]=.55*m[p]+.45*f[p]}return{ton:m,yuk:y,renk:g}}),u=Bc("ahsap-albedo",()=>{let[h,f]=Tp(1024,640),g=f.createImageData(1024,640),y=g.data,m=[203,172,131],p=[165,127,88];for(let b=0;b<1024*640;b++){let A=c.ton[b],x=(c.renk[b]-.5)*20,k=b*4;y[k]=Ih(m[0]+(p[0]-m[0])*A+x),y[k+1]=Ih(m[1]+(p[1]-m[1])*A+x*.85),y[k+2]=Ih(m[2]+(p[2]-m[2])*A+x*.6),y[k+3]=255}f.putImageData(g,0,0);let S=b=>(b-n)/(t-n)*1024,E=b=>(b-e)/(i-e)*640;for(let b of s)y1(f,1024,S(b.x),E(b.z),b.w/(t-n)*1024,b.d/(i-e)*640,b.bulanik??22,b.alfa??.34,"52,34,18");return h}),d=Bc("ahsap-normal",()=>Lh(c.yuk,1024,640,3.2,!1));return{map:ga(u,!0,!1,r),normalMap:ga(d,!1,!1,r),normalScale:g1(.55)}}function Ep(n,t,e,i,s=ks){let r=Bc("mikro-"+i,()=>Vc(n,n,t,i)),a=Lh(r,n,n,e,!0);return ga(a,!1,!0,s)}function x1(n=ks){let e=new Float32Array(16384),i=ko(3868);for(let s=0;s<128;s++){let r=.35+i()*.65;for(let a=0;a<128;a++)e[s*128+a]=r}return ga(Lh(e,128,128,.9,!0),!1,!0,n)}var To=null;function Rp({aniz:n=4,izler:t=[],masa:e}){if(To)return To;ks=Math.max(1,Math.min(8,n));let i=performance.now(),s={masa:_1(e,t,ks),tozBoya:Ep(256,[[64,64,1],[128,128,.7]],1.1,31489,ks),plastik:Ep(256,[[32,32,1],[96,96,.6]],.8,31490,ks),firca:x1(ks)};return kp.toplam=Math.round((performance.now()-i)*10)/10,To=s,s}function Gc(){if(!To)throw new Error("dokuKur \xE7a\u011Fr\u0131lmad\u0131");return To}var ms=ps;function Cp(){Pn();let n=Gc().masa,t=new Le({map:n.map,normalMap:n.normalMap,normalScale:n.normalScale,roughness:.62}),e=new Et(De(Di.x1-Di.x0,Di.kalin,Di.z1-Di.z0,1,0,Di.ust-Di.kalin/2,(Di.z0+Di.z1)/2,3),t);return e.name="masa",e.receiveShadow=!1,e.castShadow=!1,e}function Pp(){Pn();let n=new Re;n.name="monitor",n.position.set(dn.x,0,dn.z),n.add(wi([De(95,55,3.2,.9,0,39,0,3),De(64,38,3.6,1.8,0,40,-3.1,3)],ee.plastik)),n.add(wi([De(34,1.2,22,.5,0,.6,3,3),De(7.5,12.8,2.4,.5,0,7.6,-3.8,3),De(12,3.4,6.4,.9,0,12.6,-3.6,3)],ee.alumin)),n.add(wi([mt(7,3.6,.5,14,24,-4.9),mt(5.4,1.8,.5,-16,21.5,-4.9),mt(2.4,1.3,.4,-16,22.1,-5.2)],ee.cip));let t=wp(),e=new Et(new nn(92,51.8),new en({map:t.tex,toneMapped:!1}));e.position.set(0,39.4,1.62),n.add(e);let i=new Et(new xn(.9,.35,.2),ee.ledYesil);i.position.set(40.5,12.8,1.66),i.userData.dinamik=!0,n.add(i);let s=Ke({kesif:"monitor",parca:"monitor"},95,66,24,0,33,1),r=Ke({kesif:"ekran",parca:"monitor"},92,51.8,1.2,0,39.4,1.7,0);return n.add(s,r),{grup:n,ekran:t,led:i,kesif:[ms(n,"monitor",30,56,3,[0,.3,1]),ms(n,"ekran",-8,44,2.4,[0,0,1])],ledAyarla:a=>{i.material=a?ee.ledYesil:ee.ledKapali},arka:new C(dn.x-14,14.5,dn.z-4.9)}}function Ip(){Pn();let n=new Re;n.name="kamera",n.position.set(Ni.x,Ni.y,Ni.z),n.add(wi([De(4.2,1.2,3.2,.4,0,.6,-.4),De(8.4,3.4,3.4,1.3,0,2.9,.4,3)],ee.plastik));let t=new Et(de(.95,.5,0,2.9,2.2,{eksen:"z",seg:20}),ee.lensCam);n.add(t);let e=new Et(new ni(1.05,.14,8,24),ee.alumin);e.position.set(0,2.9,2.18),n.add(e);let i=new Et(new xn(.5,.3,.15),ee.ledKapali);return i.position.set(2.6,3.7,2.15),i.userData.dinamik=!0,n.add(i),n.add(Ke({kesif:"web-kamerasi",parca:"kamera"},9,5,5,0,2.4,.3)),{grup:n,led:i,kesif:[ms(n,"web-kamerasi",0,5.2,1,[0,.3,1])],ledAyarla:s=>{i.material=s?ee.ledYesil:ee.ledKapali},ucu:new C(Ni.x,Ni.y+1,Ni.z-1.6)}}function ya(n,t,e,i){let s=[];for(let r=0;r<n.length;r++){let a=n[r],o=n[(r+1)%n.length],l=t*a[0]+e*a[1]-i,c=t*o[0]+e*o[1]-i;if(l<=0&&s.push(a),l<0&&c>0||l>0&&c<0){let u=l/(l-c);s.push([a[0]+(o[0]-a[0])*u,a[1]+(o[1]-a[1])*u])}}return s}function Dh(n,t,e){let i=new Yi;n.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.closePath();let s=new cs(i,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});return s.rotateX(-Math.PI/2),s.translate(0,e,0),s}function Lp(){Pn();let n=new Re;n.name="fare",n.position.set(ai.x,0,ai.z);let t=5,e=9.6,i=2.7,s=[];for(let h=0;h<48;h++){let f=h/48*Math.PI*2,g=Math.cos(f),y=Math.sin(f);s.push([t*Math.sign(g)*Math.pow(Math.abs(g),2/i),e*Math.sign(y)*Math.pow(Math.abs(y),2/i)*(Math.sign(y)>0?.92:1)])}let r=new Et(Dh(s,1.6,.9),new Le({color:15133166,roughness:.45}));n.add(r);let a=ya(ya(ya(s,1,0,-.1),0,-1,-1.2),0,1,9.99),o=ya(ya(ya(s,-1,0,-.1),0,-1,-1.2),0,1,9.99),l=new Le({color:15988216,roughness:.4}),c=new Et(Dh(a.map(([h,f])=>[h*.97-.12,f*.97-.05]),.2,.85),l);c.position.y=.55;let u=new Et(Dh(o.map(([h,f])=>[h*.97+.12,f*.97-.05]),.2,.85),l);u.position.y=.55,n.add(c,u);let d=new Et(de(.85,1,0,3.55,-4.4,{eksen:"x",seg:16}),ee.fanCerceve);return n.add(d),n.rotation.y=0,n.add(Ke({kesif:"fare",parca:"fare"},12.2,4.2,20,0,2,0)),n.add(Ke({kesif:"fare-tekerlek",parca:"fare",tekerlek:!0},2.2,2.4,3.2,0,3.6,-4.4)),{grup:n,dSol:c,dSag:u,tekerlek:d,kesif:[ms(n,"fare",0,5.4,4),ms(n,"fare-tekerlek",0,4.8,-4.4)],tikla:h=>{(h?c:u).position.y=.3},birak:()=>{c.position.y=.55,u.position.y=.55},arka:new C(ai.x,1.2,ai.z-7.4)}}function Dp(){Pn();let n=new Re;n.name="hoparlorler";let t=[],e=[],i=new hr(.92,1,48),s=new Le({color:2830134,roughness:.7}),r=new Le({color:3488322,roughness:.55});return ri.forEach((a,o)=>{let l=new Re;l.position.set(a.x,0,a.z),l.name="hoparlor"+(o+1),l.add(new Et(De(13,26,15,1.2,0,13.4,0,3),r)),l.add(wi([de(4.4,.7,0,8.5,7.5,{eksen:"z",seg:28,rUst:3.4}),de(1.7,.6,0,19.5,7.5,{eksen:"z",seg:20,rUst:1.5}),de(1.4,.8,0,8.5,7.9,{eksen:"z",seg:14,rUst:.9})],s));let c=(d,h,f)=>{let g=new Et(new ni(d,h,8,32),ee.alumin);return g.position.set(0,f,7.5),g};if(l.add(c(4.6,.22,8.5),c(1.95,.16,19.5)),o===0){let d=new Et(new xn(.7,.35,.2),ee.ledYesil);d.position.set(4,2.2,7.55),l.add(d),l.add(new Et(de(.9,.7,-4,2.2,7.7,{eksen:"z",seg:14}),ee.alumin))}l.add(Ke({kesif:"hoparlor",parca:"hoparlor"},13.2,26.4,15.4,0,13.4,0)),n.add(l),t.push(l);let u=[];for(let d=0;d<3;d++){let h=new Et(i,new en({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:wn}));h.visible=!1,h.raycast=()=>{},h.userData.dinamik=!0,h.position.set(a.x,8.5,a.z+8),n.add(h),u.push(h)}e.push(u)}),{grup:n,tek:t,halkalar:e,kesif:ri.map((a,o)=>ms(t[o],"hoparlor",0,28.4,0)),arka:ri.map(a=>new C(a.x,3,a.z-7.2))}}function Np(){Pn();let n=new Re;n.name="mikrofon",n.position.set(oi.x,0,oi.z);let[t,e]=Gn(128,128);e.fillStyle="#4a4f59",e.fillRect(0,0,128,128),e.fillStyle="#1b1d22";for(let o=0;o<128;o+=8)for(let l=0;l<128;l+=8)e.beginPath(),e.arc(o+4,l+4,2.1,0,Math.PI*2),e.fill();let i=fi(t,{tekrar:!0});i.repeat.set(6,4),n.add(wi([de(4.6,.9,0,.45,0,{seg:32,rUst:4.2}),de(.55,12,0,6.8,0)],ee.aluminKoyu));let s=new Re;s.position.set(0,14.6,0),s.rotation.x=.35,s.add(new Et(new jr(2.3,5.4,6,20),new Le({map:i,roughness:.45,metalness:.5})));let r=new Et(new ni(2.36,.26,8,28),ee.alumin);r.rotation.x=Math.PI/2,s.add(r),n.add(s);let a=new Et(new xn(.8,.3,.3),ee.ledKapali);return a.position.set(0,.9,4.3),a.userData.dinamik=!0,n.add(a),n.add(Ke({kesif:"mikrofon",parca:"mikrofon"},10,20,10,0,10,0)),{grup:n,led:a,kesif:[ms(n,"mikrofon",0,21.5,0)],ledAyarla:o=>{a.material=o?ee.ledKirmizi:ee.ledKapali},ucu:new C(oi.x,.5,oi.z-3.8),kafa:new C(oi.x,15.6,oi.z+1)}}function Up(){Pn();let n=new Re;n.name="kulaklik",n.position.set(Nn.x,0,Nn.z);let t=new Et(new ni(7.6,.85,10,32,Math.PI),ee.plastik);t.position.y=4.2,n.add(t);let e=new Et(new xn(6,.5,1.6),ee.plastikAcik);e.position.y=11.5,e.scale.set(1,1,1),n.add(e);let i=new Le({color:2237739,roughness:.55,emissive:8146431,emissiveIntensity:0}),s=new Le({color:2829878,roughness:.9,emissive:16088064,emissiveIntensity:0});for(let o of[-1,1]){n.add(new Et(de(3.9,2.8,o*8.2,4.2,0,{eksen:"x",seg:28}),i));let l=new Et(new ni(3.3,.95,8,28),new Le({color:3817031,roughness:.9}));l.rotation.y=Math.PI/2,l.position.set(o*6.6,4.2,0),n.add(l),n.add(new Et(de(1.9,.4,o*9.7,4.2,0,{eksen:"x",seg:20}),ee.alumin))}let r=new Et(xp([[-9.7,3.4,.4],[-10.6,2.2,2.6],[-9,1.2,6.2],[-5.6,1.5,8.4]],.28),ee.kablo);n.add(r);let a=new Et(new jr(.85,1.4,4,12),s);return a.rotation.z=Math.PI/2,a.rotation.y=.4,a.position.set(-4.7,1.6,8.6),n.add(a),n.add(Ke({kesif:"kulaklik",parca:"kulaklik"},22,14,7,0,7,0)),n.add(Ke({kesif:"kulaklik-mikrofon",parca:"kulaklik"},4,2.4,3,-4.7,1.7,8.6)),{grup:n,kupMal:i,ucMal:s,kesif:[ms(n,"kulaklik",0,15,0),ms(n,"kulaklik-mikrofon",-4.7,4,8.6)],ucu:new C(Nn.x+9.7,4.2,Nn.z)}}function Fp(){Pn();let n=new Re;n.name="usb-bellek";let t=new Le({color:3107824,roughness:.4});n.add(new Et(De(3.7,1.7,9,.6,0,0,3.4+4.5,2),t)),n.add(new Et(mt(2.6,.8,3.6,0,0,1.8),ee.celik));let e=new Et(new xn(.7,.18,.7),ee.ledKapali);return e.position.set(0,.88,10.2),e.userData.dinamik=!0,n.add(e),n.add(Ke({kesif:"usb-bellek",parca:"usb-bellek",minAdim:4,minPx:14},5.4,3.6,13,0,0,6.6)),{grup:n,led:e,kesif:[ms(n,"usb-bellek",0,3.4,8)],ledAyarla:i=>{e.material=i?ee.ledYesil:ee.ledKapali}}}var _a=ps,Hn=3.81,Hc=1.9,xa=2.2,v1=xa+.15,Op=.07;function b1(){let n=[],t=(e,i,s,r=1,a=1,o="harf")=>n.push({ad:e,x:i,y:s,w:r,h:a,tur:o});return t("Esc",0,0,1,1,"ozel"),[2,3,4,5].forEach((e,i)=>t("F"+(i+1),e,0,1,1,"islev")),[6.5,7.5,8.5,9.5].forEach((e,i)=>t("F"+(i+5),e,0,1,1,"islev")),[11,12,13,14].forEach((e,i)=>t("F"+(i+9),e,0,1,1,"islev")),["PrtSc","ScrLk","Pause"].forEach((e,i)=>t(e,15.25+i,0,1,1,"islev")),['"',"1","2","3","4","5","6","7","8","9","0","*","-"].forEach((e,i)=>t(e,i,1.5,1,1,i===0||i>10?"harf":"rakam")),t("Geri",13,1.5,2,1,"ozel"),t("Tab",0,2.5,1.5,1,"ozel"),"QWERTYUIOP\u011E\xDC".split("").forEach((e,i)=>t(e,1.5+i,2.5)),t(",",13.5,2.5,1.5,1),t("Caps",0,3.5,1.75,1,"ozel"),"ASDFGHJKL\u015E\u0130".split("").forEach((e,i)=>t(e,1.75+i,3.5)),t("Enter",12.75,3.5,2.25,1,"ozel"),t("Shift",0,4.5,2.25,1,"ozel"),"ZXCVBNM\xD6\xC7.".split("").forEach((e,i)=>t(e,2.25+i,4.5)),t("Shift",12.25,4.5,2.75,1,"ozel"),t("Ctrl",0,5.5,1.25,1,"ozel"),t("",1.25,5.5,1.25,1,"ozel"),t("Alt",2.5,5.5,1.25,1,"ozel"),t(" ",3.75,5.5,6.25,1,"bosluk"),t("Alt",10,5.5,1.25,1,"ozel"),t("",11.25,5.5,1.25,1,"ozel"),t("Men\xFC",12.5,5.5,1.25,1,"ozel"),t("Ctrl",13.75,5.5,1.25,1,"ozel"),["Ins","Home","PgUp"].forEach((e,i)=>t(e,15.25+i,1.5,1,1,"ozel")),["Del","End","PgDn"].forEach((e,i)=>t(e,15.25+i,2.5,1,1,"ozel")),t("yukari",16.25,4.5,1,1,"ok"),t("sol",15.25,5.5,1,1,"ok"),t("asagi",16.25,5.5,1,1,"ok"),t("sag",17.25,5.5,1,1,"ok"),["Num","/","*","-"].forEach((e,i)=>t(e,18.5+i,1.5,1,1,i?"rakam":"ozel")),["7","8","9"].forEach((e,i)=>t(e,18.5+i,2.5,1,1,"rakam")),t("+",21.5,2.5,1,2,"rakam"),["4","5","6"].forEach((e,i)=>t(e,18.5+i,3.5,1,1,"rakam")),["1","2","3"].forEach((e,i)=>t(e,18.5+i,4.5,1,1,"rakam")),t("Enter",21.5,4.5,1,2,"ozel"),t("0",18.5,5.5,2,1,"rakam"),t(".",20.5,5.5,1,1,"rakam"),n}var M1={Esc:"tus-esc",Shift:"tus-shift",Ctrl:"tus-ctrl",Enter:"tus-enter"," ":"tus-bosluk"},S1=n=>M1[n.ad]||(n.tur==="harf"||n.tur==="rakam"?"tus-harf":"tus-ozel"),Nh=n=>n.tur==="harf"||n.tur==="rakam"||n.tur==="bosluk",Uh=3,gs=4*Uh;function zp(n,t,e){e=Math.max(.05,Math.min(e,n/2-.01,t/2-.01));let i=n/2-e,s=t/2-e,r=[];for(let[a,o,l]of[[i,s,0],[-i,s,90],[-i,-s,180],[i,-s,270]])for(let c=0;c<Uh;c++){let u=(l+c/(Uh-1)*90)*Math.PI/180;r.push([a+e*Math.cos(u),o+e*Math.sin(u)])}return r}var _r=[{y:-.3,ic:0,r:.55,ao:.72},{y:Hc*.66,ic:.1,r:.62,ao:.9},{y:Hc-.32,ic:.4,r:.78,ao:1},{y:Hc,ic:.6,r:.92,ao:1}],Js=gs*_r.length+gs+1,Bp=(3*gs*2+gs)*3;function Vp(){Pn();let n=22.5*Hn,t=6.5*Hn,e=-n/2,i=-t/2,s=new Re;s.name="klavye",s.position.set(Ai.x,(t+3)/2*Math.sin(Op),Ai.z),s.rotation.x=Op,s.add(new Et(De(n+3,xa,t+3,.9,0,xa/2,0,3),ee.klavyeGovde));for(let z=0;z<3;z++)s.add(new Et(mt(1.3,.3,.5,e+(19+z)*Hn,xa+.1,i+.5*Hn),z===0?ee.ledYesil:ee.ledKapali));let r=b1(),a=2048,o=Math.round(a*t/n),l=a/n,[c,u]=Gn(a,o);u.fillStyle="#ffffff",u.fillRect(0,0,a,o),u.textAlign="center",u.textBaseline="middle",r.forEach(z=>{let q=(z.x+z.w/2)*Hn*l,Q=(z.y+z.h/2)*Hn*l;if(u.fillStyle="#20242c",u.strokeStyle="#20242c",z.tur==="ok"){let yt=.95*l;u.beginPath();let qt={yukari:[0,-1],asagi:[0,1],sol:[-1,0],sag:[1,0]}[z.ad],Kt=-qt[1],Nt=qt[0];u.moveTo(q+qt[0]*yt,Q+qt[1]*yt),u.lineTo(q-qt[0]*yt*.7+Kt*yt,Q-qt[1]*yt*.7+Nt*yt),u.lineTo(q-qt[0]*yt*.7-Kt*yt,Q-qt[1]*yt*.7-Nt*yt),u.closePath(),u.fill();return}if(z.ad==="Geri"){u.lineWidth=.32*l,u.lineCap="round",u.beginPath(),u.moveTo(q+1.6*l,Q),u.lineTo(q-1.6*l,Q),u.moveTo(q-1.6*l,Q),u.lineTo(q-.6*l,Q-.9*l),u.moveTo(q-1.6*l,Q),u.lineTo(q-.6*l,Q+.9*l),u.stroke();return}if(!z.ad.trim())return;let Dt=z.ad.length>2;u.font=`${Nh(z)?700:600} ${(Dt?1.05:1.55)*l}px ${fs}`,u.fillText(z.ad,q,Q+.05*l)});let d=ga(c,!0,!1),h=r.length,f=new Float32Array(h*Js*3),g=new Float32Array(h*Js*3),y=new Float32Array(h*Js*2),m=new Float32Array(h*Js*3),p=new Uint16Array(h*Bp),S=new Float32Array(h*Js),E=new Int32Array(h),b=new le(15658991),A=new le(11777724),x=new le(8146431);r.forEach((z,q)=>{let Q=z.w*Hn-.3,Dt=z.h*Hn-.3,yt=e+(z.x+z.w/2)*Hn,qt=i+(z.y+z.h/2)*Hn,Kt=Nh(z)?b:A,Nt=q*Js,nt=[],ut=(bt,ue,ct,pt)=>{f[Nt*3]=yt+bt,f[Nt*3+1]=v1+ct,f[Nt*3+2]=qt+ue,y[Nt*2]=(yt+bt-e)/n,y[Nt*2+1]=1-(qt+ue-i)/t,S[Nt]=pt,m[Nt*3]=Kt.r*pt,m[Nt*3+1]=Kt.g*pt,m[Nt*3+2]=Kt.b*pt,Nt++};for(let bt of _r){nt.push(Nt);for(let[ue,ct]of zp(Q-2*bt.ic,Dt-2*bt.ic,bt.r))ut(ue,ct,bt.y,bt.ao)}let Rt=Nt;for(let[bt,ue]of zp(Q-2*_r[3].ic,Dt-2*_r[3].ic,_r[3].r))ut(bt,ue,_r[3].y,1);let jt=Nt;ut(0,0,_r[3].y,1);let Ct=q*Bp;for(let bt=0;bt<3;bt++)for(let ue=0;ue<gs;ue++){let ct=nt[bt]+ue,pt=nt[bt]+(ue+1)%gs,xt=nt[bt+1]+ue,vt=nt[bt+1]+(ue+1)%gs;p[Ct++]=ct,p[Ct++]=xt,p[Ct++]=pt,p[Ct++]=pt,p[Ct++]=xt,p[Ct++]=vt}for(let bt=0;bt<gs;bt++)p[Ct++]=jt,p[Ct++]=Rt+(bt+1)%gs,p[Ct++]=Rt+bt;E[q]=nt[3]});let k=new hn,v=new yn(f,3),M=new yn(m,3);k.setAttribute("position",v),k.setAttribute("normal",new yn(g,3)),k.setAttribute("uv",new yn(y,2)),k.setAttribute("color",M),k.setIndex(new yn(p,1)),k.computeVertexNormals();let P=k.attributes.normal;r.forEach((z,q)=>{for(let Q=0;Q<gs;Q++){let Dt=E[q]+Q,yt=P.getX(Dt),qt=P.getY(Dt)+.9,Kt=P.getZ(Dt),Nt=Math.hypot(yt,qt,Kt);P.setXYZ(Dt,yt/Nt,qt/Nt,Kt/Nt)}});let D=f.slice(),O=Gc().plastik.clone();O.wrapS=O.wrapT=vi,O.repeat.set(14,4),O.needsUpdate=!0;let V=new Le({map:d,vertexColors:!0,roughness:.46,normalMap:O,normalScale:new kt(.35,.35)}),L=new Et(k,V);L.name="tuslar",L.userData.dinamik=!0,s.add(L),r.forEach((z,q)=>{s.add(Ke({kesif:S1(z),parca:"klavye",tus:z.ad,tusNo:q,tusTur:z.tur},z.w*Hn-.3,2.4,z.h*Hn-.3,e+(z.x+z.w/2)*Hn,xa+1.1,i+(z.y+z.h/2)*Hn))}),s.add(Ke({kesif:"klavye",parca:"klavye"},n+3,5,t+3,0,2,0));let G=(z,q)=>{let Q=z*Js,Dt=Q+Js,yt=q?x:Nh(r[z])?b:A;for(let qt=Q;qt<Dt;qt++)f[qt*3+1]=D[qt*3+1]-(q?.6:0),m[qt*3]=yt.r*S[qt],m[qt*3+1]=yt.g*S[qt],m[qt*3+2]=yt.b*S[qt];v.needsUpdate=!0,M.needsUpdate=!0},J=z=>r.findIndex(q=>q.ad===z),K=z=>{let q=r[z];return new C(e+(q.x+q.w/2)*Hn,xa+Hc+1.2,i+(q.y+q.h/2)*Hn)},at=z=>{let q=J(z);return q<0?new C:K(q)};return{grup:s,tuslar:r,tusBas:G,ara:J,nokta:at,noktaI:K,kesif:[_a(s,"klavye",0,7,12.5),_a(s,"tus-esc",...at("Esc").toArray()),_a(s,"tus-shift",...at("Shift").toArray()),_a(s,"tus-ctrl",...at("Ctrl").toArray()),_a(s,"tus-enter",e+13.9*Hn,6,at("Enter").z),_a(s,"tus-bosluk",0,6,at(" ").z)],arka:new C(Ai.x-8,3,Ai.z-t/2-1.6)}}var w1=ps,A1=2.7,va=65*Math.PI/180;function E1(){let[n,t]=Gn(192,96);return t.fillStyle="#17315f",t.fillRect(0,0,192,96),t.fillStyle="#8fb8ff",t.font=`700 38px ${fs}`,t.textAlign="left",t.textBaseline="middle",t.fillText("Haz\u0131r",18,48),t.fillStyle="#8fb8ff",t.fillRect(142,28,30,40),t.fillStyle="#17315f",t.fillRect(147,33,20,30),t.fillStyle="#8fb8ff",t.fillRect(151,41,12,3),t.fillRect(151,49,12,3),fi(n)}function T1(){let[n,t]=Gn(512,700);t.fillStyle="#ffffff",t.fillRect(0,0,512,700),t.fillStyle="#7c4dff",t.fillRect(50,56,412,10),t.fillStyle="#20242c",t.font=`700 58px ${fs}`,t.textAlign="left",t.textBaseline="alphabetic",t.fillText("Merhaba!",50,148),t.fillStyle="#6b7384";for(let e=0;e<6;e++)t.fillRect(50,200+e*38,e===5?220:412,12);return t.fillStyle="#a2c8f3",t.fillRect(50,450,412,190),t.fillStyle="#6ea4e8",t.beginPath(),t.moveTo(50,640),t.lineTo(200,540),t.lineTo(320,600),t.lineTo(400,530),t.lineTo(462,580),t.lineTo(462,640),t.closePath(),t.fill(),fi(n)}function Gp(){Pn();let n=new Re;n.name="yazici",n.position.set(Ei.x,0,Ei.z);let t=.6;for(let[f,g]of[[-14,-10],[14,-10],[-14,10],[14,10]])n.add(new Et(de(1.2,t+.1,f,(t+.1)/2,g,{seg:12}),ee.plastik));n.add(new Et(De(36,9,28,1.6,0,t+4.5,0,3),ee.plastikBeyaz)),n.add(new Et(De(35.4,4.4,27.4,1.4,0,11.6,0,3),ee.plastikBeyaz)),n.add(new Et(mt(28,1.6,.3,0,3.2,14.02),ee.cip)),n.add(new Et(De(27,.6,12,.25,0,2.2,19.2,2),ee.plastikBeyaz));for(let f of[-1,1])n.add(new Et(De(.6,1.2,10.4,.2,f*13.6,2.75,19.8,2),ee.plastikBeyaz));n.add(new Et(de(.75,22,0,13.55,-13.1,{eksen:"x",seg:12}),ee.plastikBeyaz));let e=13,i=new C(0,Math.sin(va),-Math.cos(va)),r=new C(0,13.4,-13).clone().addScaledVector(i,e/2),a=new Et(De(24,.5,e,.2,0,0,0,2),ee.plastikBeyaz);a.position.copy(r),a.rotation.x=va,n.add(a);let o=new C(0,Math.cos(va),Math.sin(va)),l=new Et(mt(21,.35,e-1.5),ee.kagit);l.position.copy(r).addScaledVector(o,.45),l.rotation.x=va,n.add(l),n.add(new Et(mt(2.6,1.7,.4,-10,4.2,-14.05),ee.cip));let c=new Re;c.position.set(8.5,13.95,8.4),c.rotation.x=-.18,c.add(new Et(De(13,.6,6.2,.3,0,0,0,2),ee.plastik));let u=new Et(new nn(6.2,3.1),new en({map:E1(),toneMapped:!1}));u.rotation.x=-Math.PI/2,u.position.set(-2.4,.34,0),c.add(u);let d=new Et(mt(.6,.12,.6),ee.ledKapali);d.position.set(4.2,.34,-1.2),d.userData.dinamik=!0,c.add(d);for(let f=0;f<2;f++)c.add(new Et(de(.6,.14,3.2+f*1.6,.34,1.2,{seg:14}),ee.alumin));n.add(c);let h=new Et(new nn(25,34.5),new Le({map:T1(),roughness:.9,side:wn}));return h.rotation.x=-Math.PI/2,h.position.set(0,A1,-3.75),h.visible=!1,h.userData.dinamik=!0,n.add(h),n.add(Ke({kesif:"yazici",parca:"yazici"},37,26,45,0,13,3.5)),{grup:n,kagit:h,led:d,kesif:[w1(n,"yazici",0,15.5,2)],ledAyarla:f=>{d.material=f?ee.ledYesil:ee.ledKapali},arka:new C(Ei.x-10,4.2,Ei.z-13)}}var Hp=n=>n&&n.getHex?n.getHex():0;function k1(n){return n.userData&&n.userData.dinamik?"u:"+n.uuid:[n.type,Hp(n.color),n.roughness,n.metalness,Hp(n.emissive),n.emissiveIntensity,n.map?n.map.uuid:"-",n.normalMap?n.normalMap.uuid:"-",n.normalScale?n.normalScale.x+","+n.normalScale.y:"-",n.vertexColors?1:0,n.side,n.transparent?1:0,n.opacity,n.toneMapped?1:0,n.depthWrite?1:0,n.depthTest?1:0,n.blending].join("|")}var R1=["position","normal","uv","color"];function Wp(n){n.updateMatrixWorld(!0);let t=[];n.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||a.userData.dinamik||a.userData.statik===!1||!a.visible||a.children.length)return;let o=a.material;if(!(!o||Array.isArray(o)||o.visible===!1)){for(let l=a.parent;l&&l!==n;l=l.parent)if(l.userData.dinamik||!l.visible)return;t.push(a)}});let e=new Map;for(let a of t){let o=a.geometry,l=R1.filter(u=>o.attributes[u]).join(","),c=[k1(a.material),a.castShadow?1:0,a.receiveShadow?1:0,a.renderOrder,l].join("#");e.has(c)||e.set(c,{liste:[],ad:l}),e.get(c).liste.push(a)}let i=t.length,s=0,r=0;for(let{liste:a,ad:o}of e.values()){if(a.length<2){s++;continue}let l=o.split(","),c=a.map(f=>{let g=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();for(let y of Object.keys(g.attributes))l.includes(y)||g.deleteAttribute(y);return g.applyMatrix4(f.matrixWorld),g}),u=$s(c,!1);for(let f of c)f.dispose();if(!u){s+=a.length,console.error("statik birle\u015Ftirme ba\u015Far\u0131s\u0131z, meshler oldu\u011Fu gibi kald\u0131");continue}let d=a[0],h=new Et(u,d.material);h.name="birlesik",h.castShadow=d.castShadow,h.receiveShadow=d.receiveShadow,h.renderOrder=d.renderOrder,h.matrixAutoUpdate=!1;for(let f of a)f.parent&&f.parent.remove(f),f.geometry.dispose();n.add(h),s++,r+=a.length}return n.updateMatrixWorld(!0),{once:i,sonra:s,birlesen:r}}var C1=30,P1=15,I1=-20.03,Xp=24;function L1(){let[n,t]=Gn(512,256),e="rgba(176,182,194,0.78)";t.fillStyle=e,t.strokeStyle=e,t.lineCap="round",t.lineJoin="round";let i=.38,s=62,r=70,a=(f,g)=>[s+f*i,r+g*i];t.beginPath(),t.moveTo(...a(150,10)),t.lineTo(...a(270,42)),t.lineTo(...a(150,76)),t.lineTo(...a(30,42)),t.closePath(),t.fill(),t.beginPath(),t.moveTo(...a(78,62)),t.lineTo(...a(78,112)),t.quadraticCurveTo(...a(150,130),...a(222,112)),t.lineTo(...a(222,62)),t.lineTo(...a(150,82)),t.closePath(),t.fill(),t.lineWidth=11*i,t.beginPath(),t.moveTo(...a(40,48)),t.lineTo(...a(40,130)),t.stroke();let[o,l]=a(150,192),c=90*i;t.lineWidth=12*i,t.beginPath(),t.arc(o,l,c,0,Math.PI*2),t.stroke(),t.beginPath(),t.ellipse(o,l,c*.42,c,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(o,l-c),t.lineTo(o,l+c),t.moveTo(o-c,l),t.lineTo(o+c,l),t.stroke(),t.beginPath(),t.moveTo(o-c*.86,l-c*.5),t.lineTo(o+c*.86,l-c*.5),t.moveTo(o-c*.86,l+c*.5),t.lineTo(o+c*.86,l+c*.5),t.stroke(),t.textBaseline="middle",t.textAlign="left",t.font=`600 56px ${fs}`,t.fillStyle=e;let u=l-4,d=162;t.fillText("bote",d,u);let h=t.measureText("bote").width;return t.fillStyle="rgba(176,182,194,0.55)",t.fillText(".web.tr",d+h,u),n}function Yp(n,t=43){let e=fi(L1(),{aniso:!0}),i=new en({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new nn(C1,P1),r=(l,c,u)=>{let d=new Et(s,i);return d.rotation.y=-Math.PI/2,d.position.set(l,c,u),d.castShadow=!1,d.receiveShadow=!1,d.raycast=()=>{},d.name="kasa-logo",d},a=r(I1,Xp,0);n.add(a);let o=r(-.28,Xp,t);return{kapali:a,acik:o}}var js=ps,es=Ne.d/2,D1=-Ne.d/2,ge={hdmi:{x:15.4,y:74.55},usb:[{x:11,y:75.35},{x:11,y:73.75},{x:7.4,y:75.35},{x:7.4,y:73.75},{x:3.8,y:75.35},{x:3.8,y:73.75}],ag:{x:-.7,y:74.55},mavi:{x:-4.8,y:74.55},pembe:{x:-7.6,y:74.55},yesil:{x:-10.4,y:74.55},guc:{x:5.5,y:10.4}},$n=80.4,fn={guc:-12.5,usb1:-5,usb2:-.2,usbc:5,kulaklik:10.2,mikrofon:14};function qp(n,t,e,i,s,r){let[a,o]=Gn(n,t);o.fillStyle=s,o.fillRect(0,0,n,t),o.fillStyle=r;for(let l=0;l*e*.866<t+e;l++)for(let c=0;c<n/e+1;c++)o.beginPath(),o.arc((c+(l%2?.5:0))*e,l*e*.866,e*i,0,Math.PI*2),o.fill();return a}function N1(){let[n,t]=Gn(512,64),e=512/34,i=a=>(a+17)*e;t.strokeStyle="rgba(222,226,234,0.92)",t.fillStyle="rgba(222,226,234,0.92)",t.lineWidth=2.4,t.lineCap="round",t.lineJoin="round";let s=i(fn.guc),r=30;t.beginPath(),t.arc(s,r,11,-Math.PI/2+.6,-Math.PI/2-.6+Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(s,r-15),t.lineTo(s,r-2),t.stroke();for(let a of[fn.usb1,fn.usb2,fn.usbc])s=i(a),t.beginPath(),t.moveTo(s-9,30),t.lineTo(s+9,30),t.stroke(),t.beginPath(),t.arc(s-11,30,3.2,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(s+9,30),t.lineTo(s+5,26.5),t.lineTo(s+5,33.5),t.closePath(),t.fill(),t.beginPath(),t.moveTo(s-3,30),t.lineTo(s,23),t.lineTo(s+3,23),t.stroke(),t.fillRect(s+2,20.5,4.4,4.4),t.beginPath(),t.moveTo(s-1,30),t.lineTo(s+2,37),t.lineTo(s+4.5,37),t.stroke(),t.beginPath(),t.arc(s+6.2,37,2.2,0,Math.PI*2),t.fill();return s=i(fn.kulaklik),t.beginPath(),t.arc(s,34,10,Math.PI,0),t.stroke(),t.fillRect(s-12.5,33,5,11),t.fillRect(s+7.5,33,5,11),s=i(fn.mikrofon),t.beginPath(),t.arc(s,20,4,Math.PI,0),t.arc(s,29,4,0,Math.PI),t.closePath(),t.fill(),t.beginPath(),t.arc(s,32,8,.15,Math.PI-.15),t.stroke(),t.beginPath(),t.moveTo(s,40),t.lineTo(s,47),t.moveTo(s-5,47),t.lineTo(s+5,47),t.stroke(),n}function Zp(){Pn();let n=Ne.w,t=Ne.h,e=Ne.d,i=1.6,s=new Re;s.name="kasa",s.position.set(Ne.x,0,Ne.z);let r=new Le({color:2961463,roughness:.46,metalness:.4}),a=new Et(De(n,t-i,e,1.1,0,i+(t-i)/2,0,3),r);a.userData.statik=!1,a.name="kasa-govde",s.add(a),a.userData.logoAcik=Yp(a).acik,s.add(wi([[-15.5,-35.5],[15.5,-35.5],[-15.5,35.5],[15.5,35.5]].map(([b,A])=>de(2.3,i+.2,b,(i+.2)/2,A,{seg:14})),ee.plastik));let o=new Et(new nn(36.4,62),new Le({map:fi(qp(512,874,19.7,.3,"#2c2f37","#08090c"),{aniso:!0}),roughness:.55,metalness:.35}));o.position.set(0,38.5,es+.05),s.add(o),s.add(new Et(De(34,6.4,1.2,.5,0,$n,es+.1,2),ee.plastik));let l=es+.7,c=[];c.push(qe(de(2.15,.7,fn.guc,$n,l+.35,{eksen:"z",seg:24}),12173e3)),c.push(qe(de(1.6,.9,fn.guc,$n,l+.45,{eksen:"z",seg:24}),15527666));for(let b of[fn.usb1,fn.usb2])c.push(qe(mt(3.2,1.5,.9,b,$n,l+.3),1382171)),c.push(qe(mt(2.3,.45,.5,b,$n-.15,l+.5),3107824));c.push(qe(De(2.3,.95,.9,.35,fn.usbc,$n,l+.3,2),1382171));for(let b of[fn.kulaklik,fn.mikrofon])c.push(qe(de(1.05,.6,b,$n,l+.3,{eksen:"z",seg:18}),12173e3)),c.push(qe(de(.55,.7,b,$n,l+.35,{eksen:"z",seg:14}),723983));s.add(wi(c,ee.renkli));let u=new Et(new ni(1.85,.11,6,28),ee.ledMavi);u.position.set(fn.guc,$n,l+.8),s.add(u);let d=new Et(new nn(34,4.25),new en({map:fi(N1()),transparent:!0,depthWrite:!1}));d.position.set(0,$n-4.6,es+.08),s.add(d);let h=D1;s.add(new Et(De(31,9.3,.9,.25,2.9,74.55,h-.15,2),ee.alumin));let f=[],g=(b,A,x,k,v=1316378,M=null,P=.45)=>{f.push(qe(mt(x,k,.5,b,A,h-.55),v)),M!=null&&f.push(qe(mt(x-.5,P,.4,b,A-k/2+P/2+.12,h-.8),M))};g(ge.hdmi.x,ge.hdmi.y,3,1.05,1053206),ge.usb.forEach((b,A)=>g(b.x,b.y,2.6,1.2,921620,A<2?3107824:10133674)),f.push(qe(mt(3.4,2.9,.6,ge.ag.x,ge.ag.y,h-.6),11449535)),f.push(qe(mt(2.6,1.9,.4,ge.ag.x,ge.ag.y-.1,h-.9),855826));for(let[b,A]of[["mavi",3832032],["pembe",14708890],["yesil",3781991]])f.push(qe(de(1.05,.7,ge[b].x,ge[b].y,h-.8,{eksen:"z",seg:18}),A)),f.push(qe(de(.5,.8,ge[b].x,ge[b].y,h-.85,{eksen:"z",seg:12}),723983));s.add(new Et(De(30,17.2,.9,.3,-3.5,10.4,h-.15,2),ee.aluminKoyu)),f.push(qe(mt(3.9,2.8,.7,ge.guc.x,ge.guc.y,h-.65),1184535)),f.push(qe(mt(2.5,.9,.5,ge.guc.x,ge.guc.y+.2,h-1),2764083)),f.push(qe(mt(2,3,.7,9.4,14.2,h-.65),1382171)),f.push(qe(mt(1.5,1.4,.5,9.4,14.8,h-1),14278116)),s.add(wi(f,ee.renkli));let y=(()=>{let[b,A]=Gn(256,305);A.fillStyle="#20232a",A.fillRect(0,0,256,305);for(let x=0;x<7;x++){let k=x*43.57142857142857+3;A.fillStyle="#8f96a2",A.fillRect(4,k,248,305/7-6),A.fillStyle="#2a2d34";for(let v=0;v<17;v++)for(let M=0;M<2;M++)A.beginPath(),A.arc(22+v*13.4,k+12+M*14,3.1,0,Math.PI*2),A.fill();A.fillStyle="#c3c8d1",A.fillRect(4,k,248,2)}return b})(),m=new Et(new nn(24,28.5),new Le({map:fi(y),roughness:.55,metalness:.5}));m.rotation.y=Math.PI,m.position.set(7,55.65,h-.62),s.add(m);let p=qp(256,256,11,.3,"#3a3f49","#0a0b0e"),S=new Et(new nn(19.4,14.2),new Le({map:fi(p),roughness:.6,metalness:.4}));S.rotation.y=Math.PI,S.position.set(-8.6,10.4,h-.62),s.add(S);let E={minAdim:4,minPx:14};return s.add(Ke({kesif:"kasa",parca:"kasa"},n,t,e,0,t/2,0)),s.add(Ke({kesif:"guc-dugmesi",parca:"kasa",...E},5,5,2.4,fn.guc,$n,es+.9)),s.add(Ke({kesif:"usb-girisi",parca:"kasa",...E},9.2,3.4,2.4,(fn.usb1+fn.usb2)/2,$n,es+.9)),s.add(Ke({kesif:"ses-jaklari",parca:"kasa",...E},8.6,3.2,2.4,(fn.kulaklik+fn.mikrofon)/2,$n,es+.9)),s.add(Ke({kesif:"hdmi-girisi",parca:"kasa",...E},3.6,1.8,2.6,ge.hdmi.x,ge.hdmi.y,h-.9)),s.add(Ke({kesif:"usb-girisi",parca:"kasa",arka:!0,...E},11.2,3.6,2.6,7.4,74.55,h-.9)),s.add(Ke({kesif:"ag-girisi",parca:"kasa",...E},3.8,3.2,2.6,ge.ag.x,ge.ag.y,h-.9)),s.add(Ke({kesif:"ses-jaklari",parca:"kasa",arka:!0,...E},8.8,2.6,2.6,-7.6,74.55,h-.9)),s.add(Ke({kesif:"guc-girisi",parca:"kasa",...E},4.6,3.4,2.6,ge.guc.x,ge.guc.y,h-1)),s.add(Ke({kesif:"guc-kaynagi",parca:"kasa"},30,17.2,2.6,-3.5,10.4,h-.5)),{grup:s,halka:u,govde:a,kesif:[js(s,"kasa",0,62,es+1,[0,.2,1]),js(s,"guc-dugmesi",fn.guc,$n,es+1,[0,.15,1]),js(s,"usb-girisi",(fn.usb1+fn.usb2)/2,$n,es+1,[0,.15,1]),js(s,"ses-jaklari",(fn.kulaklik+fn.mikrofon)/2,$n,es+1,[0,.15,1]),js(s,"hdmi-girisi",ge.hdmi.x,ge.hdmi.y,h-1,[0,.15,-1]),js(s,"ag-girisi",ge.ag.x,ge.ag.y,h-1,[0,.15,-1]),js(s,"guc-girisi",ge.guc.x,ge.guc.y,h-1.1,[0,.15,-1]),js(s,"guc-kaynagi",-10.5,5,h-1,[0,.15,-1])]}}var $p=Ne.z-Ne.d/2,U1=n=>Ne.x+n,Kp=1776673,F1=8146431,Fh=12896463,Oh=1513500,O1=n=>-70.4-.65*n,ce=(n,t,e)=>new C(n,t,e);function zh(n,t){let e=n.map(r=>r.isVector3?r.clone():new C(...r)),i=new ea,s=e[0];for(let r=1;r<e.length-1;r++){let a=e[r-1],o=e[r],l=e[r+1],c=Math.min(t,a.distanceTo(o)/2,o.distanceTo(l)/2),u=o.clone().addScaledVector(a.clone().sub(o).normalize(),c),d=o.clone().addScaledVector(l.clone().sub(o).normalize(),c);s.distanceTo(u)>1e-4&&i.add(new lr(s,u)),i.add(new cr(u,o,d)),s=d}return i.add(new lr(s,e[e.length-1])),i}var Ui=$p-1,Rs={usb:(n,t)=>({parcalar:[qe(mt(2.4,.95,1.1,n,t,Ui-.55),Fh),qe(mt(2.9,1.45,1.1,n,t,Ui-1.65),Oh)],uc:Ui-2.2}),hdmi:(n,t)=>({parcalar:[qe(mt(2.8,.85,1.2,n,t,Ui-.6),Fh),qe(mt(3.3,1.35,1.4,n,t,Ui-1.9),Oh)],uc:Ui-2.6}),jak:(n,t,e)=>({parcalar:[qe(de(.5,1,n,t,Ui-.5,{eksen:"z",seg:10}),Fh),qe(de(.8,1.5,n,t,Ui-1.75,{eksen:"z",seg:12}),e)],uc:Ui-2.5}),guc:(n,t)=>({parcalar:[qe(mt(3.6,2.5,2.6,n,t,Ui-1.5),Oh),qe(mt(2.2,1.2,.5,n,t,Ui-.3),3816773)],uc:Ui-2.8})};function Jp({klavye:n,fare:t,kamera:e,kulaklik:i,yazici:s,mikrofon:r,hoparlor:a,monitor:o}){Pn();let l=x=>U1(x),c=x=>O1(x),u=[],d=(x,k,v,M,P,D,O,V=.27,L=2.2)=>{let G=[...P,...D,...O,ce(M.x,M.y,M.uc)];u.push({id:x,ad:k,hedef:v,fis:M.parcalar,yol:zh(G,L),r:V})},h=(x,k)=>ce(x,k,$p);{let x=ge.usb[3],k=Rs.usb(l(x.x),x.y);d("kulaklik","Kulakl\u0131k kablosu",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[i.ucu.clone(),ce(i.ucu.x+1.8,.35,i.ucu.z+4)],[ce(96,.35,48),ce(-64,.35,48),ce(-64,.35,c(0)),ce(l(x.x),.35,c(0))],[ce(l(x.x),x.y,c(0))],.27)}{let x=ge.pembe,k=Rs.jak(l(x.x),x.y,14708890);d("mikrofon","Mikrofon kablosu",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[r.ucu.clone(),ce(r.ucu.x,.35,r.ucu.z-3)],[ce(-58,.35,24),ce(-63.1,.35,24),ce(-63.1,.35,c(1)),ce(l(x.x),.35,c(1))],[ce(l(x.x),x.y,c(1))],.24)}{let x=ge.usb[0],k=Rs.usb(l(x.x),x.y);d("klavye","Klavye kablosu",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[n.arka.clone(),ce(n.arka.x-3,.35,n.arka.z-4)],[ce(-30,.35,2),ce(-62.2,.35,2),ce(-62.2,.35,c(2)),ce(l(x.x),.35,c(2))],[ce(l(x.x),x.y,c(2))],.27)}{let x=ge.usb[1],k=Rs.usb(l(x.x),x.y);d("fare","Fare kablosu",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[t.arka.clone(),ce(t.arka.x,.35,t.arka.z-3)],[ce(58,.35,-6),ce(-61.3,.35,-6),ce(-61.3,.35,c(3)),ce(l(x.x),.35,c(3))],[ce(l(x.x),x.y,c(3))],.25)}{let x=ge.yesil,k=Rs.jak(l(x.x),x.y,3781991);d("hoparlor","Hoparl\xF6r kablosu",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[a.arka[0].clone().add(ce(-2,0,0)),ce(-55,.35,-58.5)],[ce(-55,.35,c(4)),ce(l(x.x),.35,c(4))],[ce(l(x.x),x.y,c(4))],.27)}{let x=ge.hdmi,k=Rs.hdmi(l(x.x),x.y);d("monitor","Ekran kablosu (HDMI)",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[o.arka.clone(),ce(o.arka.x,9,dn.z-10),ce(o.arka.x,.35,dn.z-13)],[ce(o.arka.x-1,.35,c(5)),ce(l(x.x),.35,c(5))],[ce(l(x.x),x.y,c(5))],.3)}{let x=ge.usb[2],k=Rs.usb(l(x.x),x.y);d("kamera","Kamera kablosu",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[e.ucu.clone(),ce(6.5,66.2,dn.z-6),ce(6.5,30,dn.z-6.3),ce(6.5,2.4,dn.z-6.3),ce(6.5,.35,dn.z-10)],[ce(6.5,.35,c(6)),ce(l(x.x),.35,c(6))],[ce(l(x.x),x.y,c(6))],.22)}{let x=ge.usb[4],k=Rs.usb(l(x.x),x.y);d("yazici","Yaz\u0131c\u0131 kablosu",h(l(x.x),x.y),{...k,x:l(x.x),y:x.y},[s.arka.clone(),ce(s.arka.x-1,.35,s.arka.z-3)],[ce(76,.35,c(7)),ce(l(x.x),.35,c(7))],[ce(l(x.x),x.y,c(7))],.27)}{let x=Rs.guc(l(ge.guc.x),ge.guc.y);u.push({id:"guc",ad:"G\xFC\xE7 kablosu (prize)",hedef:h(l(ge.guc.x),ge.guc.y),fis:x.parcalar,r:.45,yol:zh([ce(l(ge.guc.x),ge.guc.y,x.uc),ce(l(ge.guc.x),ge.guc.y,-75.2),ce(l(ge.guc.x),ge.guc.y-3,-77.4),ce(l(ge.guc.x),-12,-77.6)],2.6)})}{let x=a.arka[0].clone().add(ce(2.2,0,0)),k=a.arka[1].clone();u.push({id:"hoparlor-arasi",ad:"Hoparl\xF6rler aras\u0131 kablo",hedef:x,fis:[],r:.22,yol:zh([x,ce(x.x,.35,-57.2),ce(0,.35,-57.2),ce(3,1.5,-57.2),ce(10,1.5,-57.2),ce(13,.35,-57.2),ce(k.x,.35,-57.2),k],2.2)})}let f=[],g={},y=0;for(let x of u){let k=Math.max(24,Math.round(x.yol.getLength()*.6)),v=qe(new qi(x.yol,k,x.r,6,!1).toNonIndexed(),Kp),M=y;y+=v.attributes.position.count,g[x.id]=[M,y],f.push(v);for(let P of x.fis){let D=P.index?P.toNonIndexed():P;f.push(D),y+=D.attributes.position.count}}let m=new Et($s(f,!1),ee.renkli);m.name="kablolar",m.matrixAutoUpdate=!1,m.userData.dinamik=!0;let p=m.geometry.attributes.color,S=new le,E=(x,k)=>{let v=g[x];if(v){S.set(k);for(let M=v[0];M<v[1];M++)p.setXYZ(M,S.r,S.g,S.b);p.needsUpdate=!0}},b=null,A=x=>{b&&E(b,Kp),b=x,x&&E(x,F1)};return{mesh:m,kablolar:u.map(x=>({id:x.id,ad:x.ad,hedef:x.hedef})),izle:A,izlenen:()=>b}}var Tn={x0:18,kalin:.32,z0:-41.5,z1:19.5,y0:30,y1:78.8},Bh=19.6,fe={z:-20.5,y:63.8},Ve={z0:-9.5,adim:1.7,y0:49,y1:75.3,xAlt:16.6,xUst:9,dolu:[1,3]},Fi=n=>67.9-4.064*n,pe={y:Fi(5),x0:-4,x1:16,z0:-41.8,z1:13,alt:Fi(5)-10.8},Un={y:Fi(2),x0:3.2,x1:17,z0:-41,z1:-35.2},on={x0:-18.5,x1:11.5,y0:1.8,y1:19,z0:-42.2,z1:-13.7},$e={z0:-26.5,z1:-10.5,y0:50,y1:54.4,x:17.4},Be={x0:13.2,x1:18.4,y0:2.6,y1:22.9,z0:7.5,z1:36.9},ln={x0:17.1,x1:18.5,y0:26.5,y1:40.5,z0:21,z1:41},Jn={z0:11.8,z1:15.4,y:n=>31+n*1.2},mi={z:-2,y:34.6},jn={z0:17,z1:19.4,y0:52,y1:62.4,x0:14.8},ns={z0:-30.5,z1:-25.9,y0:76.3,y1:78.7,x0:14.2},En={x0:-8.5,x1:12.4,z0:-26.8,z1:-17.4,y:19,fan:5,fanBoy:18.4,merkezY:fe.y,merkezZ:fe.z,fanZ:-14.9},Se={pompaR:5,pompaX0:10.4,pompaX1:15.8,radX0:-12,radX1:12,radY0:84.2,radY1:89.6,radZ0:-38,radZ1:10},ys=[17.2,41.6,66],Vh=[{ad:"on-alt",grup:"sabit",m:[0,ys[0],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"on-orta",grup:"sabit",m:[0,ys[1],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"on-ust",grup:"sabit",m:[0,ys[2],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"kule",grup:"hava",m:[(En.x0+En.x1)/2,fe.y,En.fanZ],eksen:"z",r:8.2,hiz:11,renk:7304577},{ad:"egzoz",grup:"egzoz",m:[0,87.1,-24],eksen:"y",r:10.6,hiz:10,renk:9080988},{ad:"rad1",grup:"sivi",m:[0,81.7,-26],eksen:"y",r:10.6,hiz:10,renk:9080988},{ad:"rad2",grup:"sivi",m:[0,81.7,-2],eksen:"y",r:10.6,hiz:10,renk:9080988},{ad:"gpu1",grup:"sabit",m:[6,pe.alt+2.6,-26],eksen:"y",r:8.2,hiz:8,renk:5593958},{ad:"gpu2",grup:"sabit",m:[6,pe.alt+2.6,-5],eksen:"y",r:8.2,hiz:8,renk:5593958},{ad:"psu",grup:"sabit",m:[-3.5,18.5,-28],eksen:"y",r:9.4,hiz:7,renk:5593958}],jp={hava:[[[-11,66,52],[-11,66,34],[-11,66,8],[-11,66,-14],[-11,72,-30],[-11,94,-26]],[[-11,41.6,52],[-11,41.6,34],[-11,41.6,10],[-11,50,-12],[-11,66,-32],[-11,94,-26]],[[-11,17.2,52],[-11,17.2,34],[-11,24,8],[-11,36,-14],[-11,58,-34],[-11,94,-26]]],sivi:[[[-11,66,52],[-11,66,34],[-11,68,10],[-8,76,-2],[-7,86,-2],[-7,98,-2]],[[-11,41.6,52],[-11,41.6,34],[-11,41.6,10],[-10,56,-8],[-8,76,-22],[-7,86,-26],[-7,98,-26]],[[-11,17.2,52],[-11,17.2,34],[-11,24,8],[-11,36,-14],[-10,60,-32],[-9,80,-34],[-9,96,-30]]]};var z1='"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif',Ma={},Wc=2048,Xc=1024,B1={ram:[128,448],gpuArka:[144,352],pin24:[80,352],cpu:[224,272],hdd:[352,248],psu:[384,232],sata:[288,200],genel:[192,192],m2:[448,128],pil:[112,112],wifi:[192,80],radFin:[640,64],beyaz:[64,64]},V1=[["ram","gpuArka","pin24","cpu","hdd"],["psu","sata","genel"],["m2","pil","wifi"],["radFin","beyaz"]],Gh={pcb:[0,0,1024,832],gpuYan:[0,842,864,170]};(()=>{let n=0;for(let t of V1){let e=1032,i=0;for(let s of t){let[r,a]=B1[s];Gh[s]=[e,n,r,a],e+=r+8,i=Math.max(i,a)}n+=i+8}})();function Qp(n,t){let e=Gh[t];if(!e)throw new Error("atlas yok: "+t);let i=(e[0]+.6)/Wc,s=(e[2]-1.2)/Wc,r=1-(e[1]+.6)/Xc,a=(e[3]-1.2)/Xc,o=n.attributes.uv;for(let l=0;l<o.count;l++)o.setXY(l,i+o.getX(l)*s,r-(1-o.getY(l))*a);return o.needsUpdate=!0,n}var Hh=(n,t)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]};function Fe(n,t,e,i,s,r,a="left",o=700,l=0){n.save(),n.translate(e,i),l&&n.rotate(l),n.font=`${o} ${s}px ${z1}`,n.fillStyle=r,n.textAlign=a,n.textBaseline="middle",n.fillText(t,0,0),n.restore()}var ba=(n,t,e,i,s,r,a=2)=>{n.strokeStyle=r,n.lineWidth=a,n.strokeRect(t,e,i,s)},Ue=n=>(n-Tn.z0)/(Tn.z1-Tn.z0)*1024,Ge=n=>(Tn.y1-n)/(Tn.y1-Tn.y0)*832;function G1(n){let t=ko(45182);n.fillStyle="#15181c",n.fillRect(0,0,1024,832),n.lineWidth=1.4;for(let a=0;a<520;a++){let o=t()*1024,l=t()*832,c=20+t()*90,u=t()<.5,d=t();n.strokeStyle=d<.7?"rgba(48,56,66,0.75)":"rgba(86,70,36,0.55)",n.beginPath(),n.moveTo(o,l),u?(n.lineTo(o+c,l),n.lineTo(o+c+c*.4,l+c*.4)):(n.lineTo(o,l+c),n.lineTo(o+c*.4,l+c+c*.4)),n.stroke()}let e=[[-40.2,31.4],[-40.2,66],[-40.2,77.6],[-3,31.4],[-3,53],[-3,77.6],[18.4,31.4],[18.4,54],[18.4,77.6]];for(let[a,o]of e)n.fillStyle="#b8944a",n.beginPath(),n.arc(Ue(a),Ge(o),15,0,7),n.fill(),n.fillStyle="#15181c",n.beginPath(),n.arc(Ue(a),Ge(o),8,0,7),n.fill();for(let a=0;a<26;a++){let o=-36+a%13*1.25,l=58+Math.floor(a/13)*14+a%5*.2;n.fillStyle=a%3?"#8d939e":"#2e3239",n.beginPath(),n.arc(Ue(o),Ge(l),9,0,7),n.fill()}for(let a=0;a<16;a++)n.fillStyle="#23262c",n.fillRect(Ue(-30+a*1.1),Ge(72.2),14,14),n.fillStyle="#3d424b",n.fillRect(Ue(-30+a*1.1)+2,Ge(72.2)+2,10,10);let i="rgba(224,229,238,0.88)",s="rgba(224,229,238,0.55)",r=(a,o,l,c,u)=>{ba(n,Ue(a),Ge(l+c/2),Ue(o)-Ue(a),c/(Tn.y1-Tn.y0)*832,i,2),Fe(n,u,Ue(a)+8,Ge(l+c/2)-12,14,i)};r(-40.6,-22.8,51.6,1,"PCIe x16"),r(-40.6,-35.6,59.8,1,"PCIe x1");for(let a=0;a<4;a++){let o=-9.5+1.7*a;n.strokeStyle=i,n.lineWidth=2,n.strokeRect(Ue(o-.5),Ge(74.8),.9/61*1024,(74.8-47.9)/48.8*832)}Fe(n,"DDR5  A1  A2  B1  B2",Ue(-9.5),Ge(46.8),13,s),ba(n,Ue(-25.3),Ge(68.2),Ue(-15.7)-Ue(-25.3),Ge(59.4)-Ge(68.2),i,2),Fe(n,"CPU",Ue(-20.5),Ge(63.8),20,s,"center"),ba(n,Ue(-26.8),Ge(38.4),Ue(-10.2)-Ue(-26.8),Ge(33.6)-Ge(38.4),i,2),Fe(n,"M.2",Ue(-26.4),Ge(39.6),13,i),ba(n,Ue(.6),Ge(41.2),Ue(8.4)-Ue(.6),Ge(32.8)-Ge(41.2),s,2),Fe(n,"\xC7\u0130P K\xDCMES\u0130",Ue(4.5),Ge(37),12,s,"center"),ba(n,Ue(16.8),Ge(62.6),Ue(19.2)-Ue(16.8),Ge(51.8)-Ge(62.6),i,2),Fe(n,"ATX",Ue(15.6),Ge(57.2),13,i,"center",700,-Math.PI/2);for(let a=0;a<4;a++)ba(n,Ue(11.8),Ge(31+a*1.2+1),Ue(15.5)-Ue(11.8),1/48.8*832,s,1.4);return Fe(n,"SATA",Ue(11.6),Ge(36.7),12,s),Fe(n,"CPU_FAN",Ue(-29.6),Ge(79-.8),12,s),Fe(n,"EATX12V",Ue(-30.5),Ge(75.6),11,s),Fe(n,"BAT",Ue(-2),Ge(37.4),11,s,"center"),Fe(n,"ANAKART  ATX",Ue(-14),Ge(44.6),26,"rgba(224,229,238,0.35)"),Fe(n,"G/\xC7",Ue(-38.5),Ge(65.5),17,s,"center",700,-Math.PI/2),n}function H1(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#dfe3e9"),i.addColorStop(.5,"#c4c9d1"),i.addColorStop(1,"#d9dde3"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(40,44,52,0.85)",Fe(n,"\u0130\u015ELEMC\u0130",t/2,e*.34,28,"rgba(46,50,58,0.9)","center",800),Fe(n,"\xC7EK\u0130RDEK 8",t/2,e*.5,17,"rgba(46,50,58,0.8)","center"),Fe(n,"4,2 GHz",t/2,e*.62,17,"rgba(46,50,58,0.8)","center");for(let s=0;s<10;s++)n.fillRect(16+s*8,e*.78,4,12+s%3*3);n.fillStyle="rgba(46,50,58,0.9)",n.beginPath(),n.moveTo(8,e-8),n.lineTo(28,e-8),n.lineTo(8,e-28),n.fill()}function W1(n,t,e){n.fillStyle="#3a3e46",n.fillRect(0,0,t,e);for(let i=0;i<28;i++)n.fillStyle=i%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.10)",n.fillRect(0,i*16,t,8);n.fillStyle="#2b2e35",n.fillRect(0,e*.18,t,e*.64),n.fillStyle="#7c4dff",n.fillRect(0,e*.18,t,6),n.fillRect(0,e*.82-6,t,6),Fe(n,"RAM  16 GB",t/2,e*.5-70,24,"#eef0f4","center",800,-Math.PI/2),Fe(n,"DDR5-5600",t/2+28,e*.5+30,17,"#c9ced8","center",700,-Math.PI/2)}function X1(n,t,e){n.fillStyle="#15171b",n.fillRect(0,0,t,e),n.fillStyle="#1c4a37",n.fillRect(4,4,t-8,e-8);let i=(s,r,a,o,l)=>{n.fillStyle="#0c0d10",n.fillRect(s,r,a,o),n.strokeStyle="#444a54",n.lineWidth=1.2,n.strokeRect(s+2,r+2,a-4,o-4),l&&Fe(n,l,s+a/2,r+o/2,11,"#8a909b","center")};i(60,20,120,88,"BELLEK"),i(200,20,120,88,"BELLEK"),i(340,36,70,56,"DENETLEY\u0130C\u0130"),n.fillStyle="#d8dce2",n.fillRect(12,8,38,112),Fe(n,"NVMe  1 TB",31,64,13,"#2a2d33","center",800,-Math.PI/2),n.fillStyle="#c9a24a";for(let s=0;s<20;s++)n.fillRect(t-10-s*2,e-9,1,6)}function Y1(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#a5abb5"),i.addColorStop(1,"#c4c9d1"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#20232a",n.fillRect(14,14,t-28,60),Fe(n,"SATA SSD",28,36,27,"#eef0f4","left",800),Fe(n,"500 GB  \xB7  2,5 in\xE7",28,60,14,"#b5bbc6"),Fe(n,"Kat\u0131 hal s\xFCr\xFCc\xFCs\xFC",22,e-28,14,"rgba(32,35,42,0.75)")}function q1(n,t,e){n.fillStyle="#aab0ba",n.fillRect(0,0,t,e),n.fillStyle="#d9dde3",n.fillRect(10,10,t-20,e-20),Fe(n,"HDD  1 TB",24,42,30,"#22252b","left",800),Fe(n,"7200 dev/dk  \xB7  3,5 in\xE7",24,74,15,"#3c4049"),Fe(n,"SATA 6 Gb/s",24,98,15,"#3c4049"),n.fillStyle="#22252b";for(let i=0;i<38;i++)n.fillRect(24+i*6.5,e-62,2+i%3,34);n.strokeStyle="#8f95a0",n.lineWidth=2,n.beginPath(),n.arc(t-74,e-70,40,0,7),n.stroke(),n.beginPath(),n.arc(t-74,e-70,8,0,7),n.stroke()}function Z1(n,t,e){n.fillStyle="#16181c",n.fillRect(0,0,t,e),n.fillStyle="#e7eaee",n.fillRect(20,20,t-40,e-40),Fe(n,"G\xDC\xC7 KAYNA\u011EI",36,52,26,"#1a1c20","left",800),Fe(n,"650 W",t-40,54,34,"#1a1c20","right",800),Fe(n,"Giri\u015F 220-240 V  ~  50 Hz",36,92,14,"#3c4049"),[["+3,3 V","24 A"],["+5 V","20 A"],["+12 V","54 A"],["-12 V","0,3 A"]].forEach(([s,r],a)=>{let o=128+a*20;n.fillStyle=a%2?"#d5d9df":"#eceff3",n.fillRect(36,o-10,t-72,20),Fe(n,s,46,o,13,"#22252b"),Fe(n,r,t-46,o,13,"#22252b","right")}),n.fillStyle="#22252b";for(let s=0;s<30;s++)n.fillRect(36+s*4.4,e-38,2+s%2,18)}function K1(n,t,e){n.fillStyle="#ece7d9",n.fillRect(0,0,t,e);let i=12,s=e/i;for(let r=0;r<i;r++)for(let a=0;a<2;a++)n.fillStyle="#4a4b4f",n.fillRect(8+a*36,r*s+5,28,s-10),n.fillStyle="#16171a",n.fillRect(14+a*36,r*s+10,16,s-20)}function $1(n,t){let e=n.createRadialGradient(t*.4,t*.4,4,t/2,t/2,t/2);e.addColorStop(0,"#f2f4f7"),e.addColorStop(1,"#a9afb9"),n.fillStyle=e,n.fillRect(0,0,t,t),n.strokeStyle="#7c828d",n.lineWidth=2,n.beginPath(),n.arc(t/2,t/2,t*.38,0,7),n.stroke(),Fe(n,"CR2032",t/2,t/2-8,20,"#383c45","center",800),Fe(n,"3 V +",t/2,t/2+14,16,"#383c45","center")}function J1(n,t,e){n.fillStyle="#10242b",n.fillRect(0,0,t,e),n.fillStyle="#1c3b46",n.fillRect(4,4,t-8,e-8),n.fillStyle="#b9bfc9",n.fillRect(16,12,70,56),n.fillStyle="#8b919c",n.fillRect(22,18,58,44),Fe(n,"Wi-Fi",51,40,16,"#2a2d33","center",800),n.fillStyle="#0c0d10",n.fillRect(100,18,28,20),n.fillRect(136,18,28,20),n.fillStyle="#c9a24a";for(let i=0;i<16;i++)n.fillRect(100+i*4,e-12,2,8)}function j1(n,t,e){let i=ko(51966);n.fillStyle="#18201e",n.fillRect(0,0,t,e),n.lineWidth=1.5;for(let s=0;s<70;s++){let r=i()*t,a=i()*e,o=15+i()*50;n.strokeStyle=i()<.7?"rgba(60,76,72,0.8)":"rgba(120,98,50,0.55)",n.beginPath(),n.moveTo(r,a),n.lineTo(r+o,a),n.lineTo(r+o+10,a+10),n.stroke()}for(let s=0;s<40;s++)n.fillStyle=i()<.5?"#23282c":"#8d939e",n.fillRect(i()*t,i()*e,6+i()*8,4+i()*6)}function Q1(n,t,e){n.fillStyle="#16181c",n.fillRect(0,0,t,e);for(let i=0;i<t;i+=4)n.fillStyle=i%8?"#5d6470":"#2b2f36",n.fillRect(i,3,2,e-6);n.fillStyle="#7a8190",n.fillRect(0,0,t,2),n.fillRect(0,e-2,t,2)}function tb(n,t,e){n.fillStyle="#1b1e23",n.fillRect(0,0,t,e),n.fillStyle="#22262d",n.fillRect(0,8,t,e-16);for(let i=0;i<46;i++)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(110+i*12,36,5,e-72);n.fillStyle="#7c4dff",n.fillRect(0,0,t,6),n.fillRect(0,e-6,t,6),Fe(n,"EKRAN KARTI",34,e/2,40,"#eef0f4","left",800)}function eb(n,t,e){n.fillStyle="#2a2e35",n.fillRect(0,0,t,e);for(let i=0;i<44;i++)n.fillStyle=i%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",n.fillRect(0,i*8,t,4);n.fillStyle="#7c4dff",n.fillRect(0,0,6,e),Fe(n,"ARKA PLAKA",t/2,e/2,22,"#cfd4de","center",800,-Math.PI/2)}function nb(n,t,e){n.fillStyle="#fff",n.fillRect(0,0,t,e)}var ib={pcb:n=>G1(n),gpuYan:tb,ram:W1,cpu:H1,m2:X1,sata:Y1,hdd:q1,psu:Z1,pin24:K1,pil:(n,t)=>$1(n,t),wifi:J1,genel:j1,radFin:Q1,gpuArka:eb,beyaz:nb};function tm(n=4){let t=performance.now(),[e,i]=Hh(Wc,Xc);i.fillStyle="#ffffff",i.fillRect(0,0,Wc,Xc);for(let[r,a]of Object.entries(ib)){let[o,l,c,u]=Gh[r];i.save(),i.beginPath(),i.rect(o,l,c,u),i.clip(),i.translate(o,l),a(i,c,u),i.restore()}let s=new Wi(e);return s.colorSpace=mn,s.minFilter=Ci,s.magFilter=Sn,s.anisotropy=n,Ma.atlas=Math.round((performance.now()-t)*10)/10,s}function em(n=4){let t=performance.now(),[e,i]=Hh(128,128);i.clearRect(0,0,128,128),i.fillStyle="#5a606a",i.fillRect(0,0,128,128),i.globalCompositeOperation="destination-out";let s=16,r=s*.866;for(let o=0;o<128/r+1;o++)for(let l=0;l<128/s+1;l++){i.beginPath();let c=(l+(o%2?.5:0))*s,u=o*r;for(let d=0;d<6;d++){let h=Math.PI/3*d+Math.PI/6;i.lineTo(c+Math.cos(h)*7.45,u+Math.sin(h)*7.45)}i.closePath(),i.fill()}let a=new Wi(e);return a.colorSpace=mn,a.wrapS=a.wrapT=vi,a.anisotropy=n,Ma.filtre=Math.round((performance.now()-t)*10)/10,a}function nm(n,t=4){let[e,i]=Hh(128,64*n.length);i.fillStyle="#000",i.fillRect(0,0,128,64*n.length),i.lineWidth=7,i.lineJoin="miter",i.lineCap="butt",n.forEach((r,a)=>{i.strokeStyle=r;let o=a*64;for(let l=0;l<2;l++){let c=l*64;i.beginPath(),i.moveTo(c+14,o+8),i.lineTo(c+40,o+32),i.lineTo(c+14,o+56),i.stroke()}});let s=new Wi(e);return s.colorSpace=mn,s.wrapS=s.wrapT=vi,s.anisotropy=t,s}var sb=(n,t,e)=>new C(n,t,e);function vr(n=[0,0,0]){let[t,e,i]=n,s={p:[],m:[],b:[]},r=(a,o,l,c)=>((t||e||i)&&o.translate(-t,-e,-i),Qp(o,c||"beyaz"),qe(o,l),s[a].push(o),o);return{orijin:n,liste:s,p:(a,o=2237739,l)=>r("p",a,o,l),m:(a,o=11975878,l)=>r("m",a,o,l),b:(a,o=2369325,l)=>r("b",a,o,l)}}function br(n,t,e){let i={};for(let s of["p","m","b"]){if(!n.liste[s].length)continue;let r=wi(n.liste[s],t[s]);r.name="ic-"+s,e.add(r),i[s]=r}return i}var rb=(n,t)=>(t==="y"?n.rotateX(-Math.PI/2):t==="x"&&n.rotateY(Math.PI/2),n),Qs=(n,t,e,i,s)=>{let r=new nn(n,t);return r.rotateY(-Math.PI/2),r.translate(e,i,s),r},im=(n,t,e,i,s,r=!1)=>{let a=new nn(n,t);return r&&a.rotateY(Math.PI),a.translate(e,i,s),a};function Wh(n){let t=n.attributes.uv,e=1e9,i=1e9,s=-1e9,r=-1e9;for(let a=0;a<t.count;a++)e=Math.min(e,t.getX(a)),s=Math.max(s,t.getX(a)),i=Math.min(i,t.getY(a)),r=Math.max(r,t.getY(a));for(let a=0;a<t.count;a++)t.setXY(a,(t.getX(a)-e)/(s-e||1),(t.getY(a)-i)/(r-i||1));return n}function Xh(n,t,e=48,i=8,s=.4){let r=new Xi(n.map(a=>a.isVector3?a:sb(...a)),!1,"catmullrom",s);return{geo:new qi(r,e,t,i,!1),egri:r}}function Cs(n,t,e,i,{radyal:s=8,parca:r=40,gerginlik:a=.4}={}){let{geo:o,egri:l}=Xh(t,e,r,s,a);return n.p(o,i),l}function xr(n,t,e,i,s=15264494){let r=t.getPointAt(e),a=t.getTangentAt(e),o=new ni(i+.12,.17,5,12);o.lookAt(a),o.translate(r.x,r.y,r.z),n.p(o,s)}function am(n){n.b(mt(.4,88.4,86,19.8,45.8,0),3159100),n.b(mt(39.2,.4,86,0,1.8,0),2237739),n.b(mt(39.2,88.4,.4,0,45.8,42.8),2237739),n.b(mt(39.2,88.4,.4,0,45.8,-42.8),2237739),n.b(mt(2,.4,86,-18.6,89.8,0),2237739),n.b(mt(2,.4,86,18.6,89.8,0),2237739),n.b(mt(39.2,.4,2,0,89.8,41.9),2237739),n.b(mt(39.2,.4,2,0,89.8,-41.9),2237739);let i=3882823;n.b(mt(.9,1.2,86,-19.15,89,0),i),n.b(mt(.9,1.2,86,-19.15,2.6,0),i),n.b(mt(.9,88.4,1.2,-19.15,45.8,42.2),i),n.b(mt(.9,88.4,1.2,-19.15,45.8,-42.2),i);let s=657932,r=(a,o,l,c)=>{n.b(De(.5,c,l,.2,19.4,o,a,2),s),n.b(De(.3,c-1,l-1,.2,19.2,o,a,2),328966)};r(23.5,46.5,4.2,7.4),r(-39,86.5,6,3.2),r(3,13,6,5.4),n.b(mt(.1,14,14,19.5,fe.y,fe.z),1316378)}function om(n){for(let e of[14,45,76])n.m(de(.55,4.4,-19.75,e,-43,{seg:12}),12173e3);let t=[[-40.2,31.4],[-40.2,66],[-40.2,77.6],[-3,31.4],[-3,53],[-3,77.6],[18.4,31.4],[18.4,54],[18.4,77.6]];for(let[e,i]of t)n.m(de(.5,Bh-18.32,0,0,0,{eksen:"x",seg:6}).translate((Bh+18.32)/2,i,e),13214282),n.m(de(.52,.16,17.92,i,e,{eksen:"x",seg:12}),13620186)}function lm(n){let t=Tn.x0,e=[t+Tn.kalin/2,(Tn.y0+Tn.y1)/2,(Tn.z0+Tn.z1)/2];n.p(mt(Tn.kalin,Tn.y1-Tn.y0,Tn.z1-Tn.z0,...e),16777215,"pcb");let i=fe.z,s=fe.y;n.p(mt(.7,10,9,17.65,s,i),2763825),n.m(mt(.35,.9,9.4,17.1,s+4.9,i),11844034),n.m(mt(.35,.9,9.4,17.1,s-4.9,i),11844034),n.m(mt(.35,10.8,.9,17.1,s,i-4.6),11844034),n.m(mt(.35,10.8,.9,17.1,s,i+4.6),11844034),n.m(de(.22,8.6,16.9,s+5.6,i+5.2,{eksen:"z",seg:8}),13685978),n.p(mt(.38,9,7.5,17,s,i),3103812),n.m(De(.5,7.4,6.2,.18,16.55,s,i,2),16777215),n.p(Qs(6.2,7.4,16.29,s,i),16777215,"cpu");let r=2895927,a=3817288,o=(d,h,f,g,y,m,p)=>{n.m(mt(y-14.4,g-f,h-d,(y+14.4)/2,(f+g)/2,(d+h)/2),r);for(let S=0;S<m;S++)p==="z"?n.m(mt(.35,g-f-.5,.45,14.3,(f+g)/2,d+(S+.5)*((h-d)/m)),a):n.m(mt(.35,.45,h-d-.5,14.3,f+(S+.5)*((g-f)/m),(d+h)/2),a)};o(-34.5,-28,56.5,71.5,17.9,6,"z"),o(-27,-12,72.5,76,17.9,7,"z"),n.m(mt(1.4,7.6,7.6,17.3,37,4.5),r);for(let d=0;d<5;d++)n.m(mt(.4,7.4,.4,16.5,37,1.7+d*1.5),a);n.p(De(6,9.2,7.6,.4,14.9,73.9,-37.8,2),2040103),n.m(mt(.3,9,7.2,11.8,73.9,-37.8),10133674);for(let d=0;d<4;d++)n.p(mt(1.7,1,Jn.z1-Jn.z0,17.1,Jn.y(d)+.5,(Jn.z0+Jn.z1)/2),1447707),n.p(mt(.1,.5,2.6,16.2,Jn.y(d)+.5,Jn.z1-1.4),328966);n.p(mt(18-jn.x0,jn.y1-jn.y0,jn.z1-jn.z0,(18+jn.x0)/2,(jn.y0+jn.y1)/2,(jn.z0+jn.z1)/2),15525849),n.p(Qs(2.4,10.4,jn.x0-.02,(jn.y0+jn.y1)/2,(jn.z0+jn.z1)/2),16777215,"pin24"),n.p(mt(18-ns.x0,ns.y1-ns.y0,ns.z1-ns.z0,(18+ns.x0)/2,(ns.y0+ns.y1)/2,(ns.z0+ns.z1)/2),2105894),n.p(De(1.6,4.8,4.8,.5,17.2,mi.y,mi.z,2),1118741),n.m(de(2,1,16.4,mi.y,mi.z,{eksen:"x",seg:28}),11449534);{let d=new nn(4,4);d.rotateY(-Math.PI/2),d.translate(15.88,mi.y,mi.z),n.m(d,16777215,"pil")}let l=1710879,c=14726734,u=(d,h,f)=>{n.p(mt(2,1,h-d,17,f,(d+h)/2),l),n.m(mt(.1,.36,h-d-.8,15.98,f,(d+h)/2),c),n.p(mt(.5,.9,.6,16.6,f,h+.4),14672872)};u(-40.6,-22.8,Fi(5)),u(-40.6,-22.8,Fi(3)),u(-40.6,-35.6,Fi(2));for(let d=0;d<4;d++){let h=Ve.z0+Ve.adim*d,f=(Ve.y0+Ve.y1)/2,g=Ve.y1-Ve.y0;n.p(mt(1.6,g,1.4,17.2,f,h),l),n.m(mt(.1,g-1.2,.36,16.35,f,h),c);for(let y of[Ve.y0-.5,Ve.y1+.5])n.p(mt(1.5,1,1.1,17.2,y,h),13619928)}n.p(mt(.9,4.4,1,17.55,($e.y0+$e.y1)/2,$e.z0-.6),1447707),n.m(de(.45,.3,17.2,($e.y0+$e.y1)/2,$e.z1+.7,{eksen:"x",seg:10}),13620186)}function cm(n){let t=fe.y,e=fe.z,i=16.2,s=11186878;n.m(de(2.5,.2,i,t,e,{eksen:"x",seg:24}),s),n.m(mt(.2,.5,6,i-.02,t,e),s),n.m(mt(.2,6,.5,i-.02,t,e),s),n.m(de(.9,.24,i-.03,t+1.6,e-1.4,{eksen:"x",seg:14}),s)}function um(n){let t=(Ve.y0+Ve.y1)/2+.4,e=Ve.y1-Ve.y0-.4,i=(Ve.xAlt+Ve.xUst)/2,s=Ve.xAlt-Ve.xUst;for(let r of Ve.dolu){let a=Ve.z0+Ve.adim*r;n.m(mt(s,e,1.5,i,t,a),3817030),n.m(mt(.5,e,1.7,Ve.xUst+.25,t,a),10133674),n.p(im(s-.6,e-1.2,i,t,a+.77),16777215,"ram"),n.p(im(s-.6,e-1.2,i,t,a-.77,!0),16777215,"ram"),n.m(mt(.5,e-.6,1,Ve.xAlt+.25,t,a),14726734),n.p(mt(.1,e-.6,1.1,Ve.xAlt-.1,t,a),1920312)}}function hm(n){let t=fe.y,e=fe.z,i=(En.z0+En.z1)/2,s=En.y,r=26;n.m(mt(.85,8.4,7.6,15.675,t,e),13225686),n.m(mt(.5,2.6,14,15,t,e),3027514),n.m(de(.6,.7,14.9,t,e-6.4,{eksen:"x",seg:10}),13620186),n.m(de(.6,.7,14.9,t,e+6.4,{eksen:"x",seg:10}),13620186);for(let l=0;l<r;l++){let c=En.x1-l*(En.x1-En.x0)/(r-1);n.m(mt(.14,s,En.z1-En.z0,c,t,i),l%2?12830928:13817564)}let a=[-3.2,-1.1,1.1,3.2],o=[1.4,-1.4,1.4,-1.4];a.forEach((l,c)=>{n.m(de(.6,25,3.2,t+o[c],i+l,{eksen:"x",seg:12}),13203258),n.m(de(.62,.2,En.x0-.8,t+o[c],i+l,{eksen:"x",seg:12}),14256714)}),n.p(mt(.5,s,En.z1-En.z0,En.x0-.45,t,i),1513500),Ro(n,[(En.x0+En.x1)/2,t,En.fanZ],"z",En.fanBoy,En.fan,8.6,1908773)}function Ro(n,t,e,i,s,r,a=1908773){let o=[vp(i,i,r,s),de(2.6,s*.7,0,0,0,{eksen:"z",seg:18})];for(let l=0;l<3;l++){let c=mt(r-2,.55,s*.35,(r+2)/2,0,0);c.rotateZ(l*2.094+.5),o.push(c)}for(let l of[-1,1])for(let c of[-1,1])o.push(de(.5,s+.12,l*(i/2-1.1),c*(i/2-1.1),0,{eksen:"z",seg:8}));o.forEach((l,c)=>{Wh(l),rb(l,e),l.translate(t[0],t[1],t[2]),n.p(l,c===1?2764083:a)})}function dm(n){let t=fe.y,e=fe.z,i=Se.pompaR,s=(Se.pompaX0+Se.pompaX1)/2;n.p(de(i,Se.pompaX1-Se.pompaX0,s,t,e,{eksen:"x",seg:40}),1842723),n.m(de(i+.05,.3,Se.pompaX0+.15,t,e,{eksen:"x",seg:40}),10133933),n.m(de(3.3,.3,15.95,t,e,{eksen:"x",seg:28}),13203258);for(let r of[-4.4,4.4])for(let a of[-4.4,4.4])n.m(de(.5,.9,15.6,t+r,e+a,{eksen:"x",seg:10}),13620186);for(let r of[-1.7,1.7])n.m(de(1,2.2,s,t+i+.3,e+r,{seg:14}),12962514),n.p(de(1.3,.7,s,t+i+1.1,e+r,{seg:14}),1118741)}var fm=()=>de(Se.pompaR-.55,.12,Se.pompaX0-.05,fe.y,fe.z,{eksen:"x",seg:36});function pm(n){let t=(Se.radY0+Se.radY1)/2,e=(Se.radX0+Se.radX1)/2,i=Se.radY1-Se.radY0;n.m(mt(Se.radX1-Se.radX0,i,48,e,t,-14),16777215),n.p(Qs(48,i,Se.radX0-.03,t,-14),16777215,"radFin");{let s=new nn(48,Se.radX1-Se.radX0);s.rotateX(-Math.PI/2),s.rotateY(Math.PI/2),s.translate(e,Se.radY1+.03,-14),n.p(s,16777215,"radFin")}n.m(mt(Se.radX1-Se.radX0,i,3.4,e,t,-39.7),2369325),n.m(mt(Se.radX1-Se.radX0,i,3.4,e,t,11.7),2369325);for(let s of[8,4])n.m(de(.95,1.8,s,86.9,14.3,{eksen:"z",seg:14}),12962514),n.p(de(1.3,.6,s,86.9,15.4,{eksen:"z",seg:14}),1118741);n.m(mt(.2,i+.1,.4,Se.radX0-.05,t,-37.2),8028560),Ro(n,[0,81.7,-26],"y",24,5,11.4,1908773),Ro(n,[0,81.7,-2],"y",24,5,11.4,1908773)}var mm=1.05,Yc=(Se.pompaX0+Se.pompaX1)/2,sm=fe.z+1.7,rm=fe.z-1.7,qc=fe.y+Se.pompaR+1.8,Yh={A:[[Yc,qc,sm],[Yc-.1,qc+2.4,sm],[10.4,74.2,-16.4],[7.2,73.2,-10],[6.6,72.9,0],[6.8,73.3,8.5],[7.6,77.2,15.6],[8,83.6,19],[8,86.6,18.4],[8,86.9,15.6]],B:[[4,86.9,15.6],[4,86.7,18.8],[4,82.2,21.4],[5,74.4,17.6],[5.8,70.8,8],[6,70.5,-2],[6.6,70.7,-12],[9.2,71.6,-19.4],[11.8,72.4,-21.8],[Yc-.1,qc+1.6,rm],[Yc,qc,rm]]};function gm(n){let t=pe.y,e=(pe.x0+pe.x1)/2,i=(pe.z0+pe.z1)/2;n.p(mt(pe.x1-pe.x0,.32,pe.z1-pe.z0,e,t,i),16777215,"genel"),n.m(mt(1,.34,17.8,17.1,t,-31.9),14726734);{let c=new Yi;c.moveTo(pe.x0+.2,-39.5),c.lineTo(pe.x1-.5,-39.5),c.lineTo(pe.x1-.5,12.5),c.lineTo(pe.x0+.2,12.5),c.closePath();let u=new ls;u.absarc(e,-5,6.8,0,Math.PI*2,!0),c.holes.push(u);let d=new cs(c,{depth:.45,bevelEnabled:!1,curveSegments:24});Wh(d),d.rotateX(Math.PI/2),d.translate(0,t+.2+.45,0),n.m(d,16777215,"gpuArka")}let s=pe.alt,r=t-.16,a=r-s,o=(s+r)/2,l=2040359;n.p(mt(.5,a,52,pe.x0+.25,o,-13.5),l),n.p(mt(.5,a,52,pe.x1-.25,o,-13.5),l),n.p(mt(pe.x1-pe.x0,a,.5,e,o,-39.25),l),n.p(mt(pe.x1-pe.x0,a,.5,e,o,12.25),l);{let c=new Yi;c.moveTo(pe.x0,-39.5),c.lineTo(pe.x1,-39.5),c.lineTo(pe.x1,12.5),c.lineTo(pe.x0,12.5),c.closePath();for(let d of[-26,-5]){let h=new ls;h.absarc(e,d,8.6,0,Math.PI*2,!0),c.holes.push(h)}let u=new cs(c,{depth:.6,bevelEnabled:!1,curveSegments:28});Wh(u),u.rotateX(Math.PI/2),u.translate(0,s+.6,0),n.p(u,1579550)}n.p(Qs(52,a-.8,pe.x0-.02,o,-13.5),16777215,"gpuYan");for(let c of[-26,-5]){let u=pe.alt+2.2;n.p(de(2.2,.8,e,u,c,{seg:16}),2764083);for(let d=0;d<3;d++){let h=mt(6.4,.3,.5,e+4.5,u,c);h.translate(-e,0,-c),h.rotateY(d*2.094+.4),h.translate(e,0,c),n.p(h,1579550)}}n.m(mt(pe.x1-pe.x0+.4,12.2,.2,e,t-.1,-42.3),13028307);for(let c of[11,7.4,3.8])n.m(mt(2.4,1,2.6,c,t+.6,-40.9),4869976);n.m(mt(2.8,1.1,2.6,-.4,t+.6,-40.9),4869976),n.p(mt(3.4,2.4,3.6,-2.9,t-1.6,10),1381914)}function ym(n){let t=Un.y,e=(Un.x0+Un.x1)/2,i=(Un.z0+Un.z1)/2;n.p(mt(Un.x1-Un.x0,.3,Un.z1-Un.z0,e,t,i),16777215,"genel"),n.p(mt(5.6,.32,3.8,e-2.2,t+.3,i),16777215,"wifi"),n.m(mt(.9,.2,5,17.1,t,-38.1),14726734),n.m(mt(Un.x1-Un.x0+.4,3.8,.2,e,t-.4,-42.3),13028307);for(let s of[5.2,8.4])n.m(de(.5,1.4,s,t-.4,-41.6,{eksen:"z",seg:10}),14726734);for(let[s,r]of[[5.2,0],[8.4,1]])Cs(n,[[s,t-.4,-41],[s+.6,t+.2,-39.5],[e+(r?.6:-.6),t+.5,-38.6]],.14,1381914,{radyal:5,parca:10})}function _m(n){let t=(on.x0+on.x1)/2,e=(on.y0+on.y1)/2,i=(on.z0+on.z1)/2;n.p(De(on.x1-on.x0,on.y1-on.y0,on.z1-on.z0,.5,t,e,i,2),1711136),n.p(Qs(on.z1-on.z0-1,on.y1-on.y0-1,on.x0-.03,e,i),16777215,"psu");let s=-3.5,r=-28,a=on.y1+.15;for(let o of[10.4,7.2,4]){let l=new ni(o,.22,5,36);l.rotateX(Math.PI/2),l.translate(s,a,r),n.m(l,3817030)}for(let o=0;o<3;o++){let l=mt(20.8,.3,.45,0,0,0);l.rotateY(o*Math.PI/3),l.translate(s,a,r),n.m(l,3817030)}n.p(mt(22.4,.3,22.4,s,on.y1+.02,r),921362),n.p(de(2.4,.5,s,on.y1-.4,r,{seg:16}),2764083);for(let o=0;o<4;o++)for(let l=0;l<2;l++)n.p(mt(4.6,2.6,.5,-13+o*6.2,5.6+l*8.6,on.z1+.2),921362)}function xm(n){let t=($e.y0+$e.y1)/2,e=($e.z0+$e.z1)/2;n.p(mt(.32,$e.y1-$e.y0,$e.z1-$e.z0,$e.x,t,e),16777215,"genel"),n.p(Qs($e.z1-$e.z0,$e.y1-$e.y0,$e.x-.17,t,e),16777215,"m2");let i=(ln.y0+ln.y1)/2,s=(ln.z0+ln.z1)/2;n.m(De(ln.x1-ln.x0,ln.y1-ln.y0,ln.z1-ln.z0,.3,(ln.x0+ln.x1)/2,i,s,2),16777215),n.m(Qs(ln.z1-ln.z0-.4,ln.y1-ln.y0-.4,ln.x0-.02,i,s),16777215,"sata"),n.b(mt(.4,ln.y1-ln.y0+2,ln.z1-ln.z0+1.2,19.1,i,s),1711136);for(let o of[-8.5,8.5])for(let l of[-5.5,5.5])n.m(de(.35,.3,ln.x0-.1,i+l,s+o,{eksen:"x",seg:8}),13620186);n.p(mt(1.1,3.6,1.8,17.9,33.2,ln.z0-.7),1381914);let r=(Be.y0+Be.y1)/2,a=(Be.z0+Be.z1)/2;n.m(mt(Be.x1-Be.x0,Be.y1-Be.y0,Be.z1-Be.z0,(Be.x0+Be.x1)/2,r,a),11449534),n.m(Qs(Be.z1-Be.z0-.5,Be.y1-Be.y0-.5,Be.x0-.02,r,a),16777215,"hdd"),n.p(mt(.5,Be.y1-Be.y0-1,1.4,17.8,r,Be.z0-.7),1002036),n.p(mt(2.4,5.4,1.4,16.2,6.8,Be.z0-.7),1184534),n.p(mt(2,3,1.4,16.2,11.8,Be.z0-.7),1184534),n.b(mt(.8,Be.y1-Be.y0+1.5,32,18.8,r,a),1711136),n.b(mt(6.2,.5,32,15.7,Be.y0-.45,a),1711136),n.b(mt(6.2,.5,32,15.7,Be.y1+.45,a),1711136);for(let o of[-12,12])for(let l of[Be.y0+2.5,Be.y1-2.5])n.m(de(.4,.4,Be.x0-.1,l,a+o,{eksen:"x",seg:8}),13620186)}function vm(n,t){n.m(mt(31,9.3,.15,2.9,74.55,-42.45),12173257);let i=(s,r,a,o)=>n.m(mt(a+.5,o+.3,3,s,r,-42.45+1.6),3817288);i(t.hdmi.x,t.hdmi.y,3,1.05),t.usb.forEach(s=>i(s.x,s.y,2.6,1.2)),i(t.ag.x,t.ag.y,3.4,2.9);for(let s of["mavi","pembe","yesil"])n.m(de(1.1,3,t[s].x,t[s].y,-42.45+1.6,{eksen:"z",seg:14}),s==="mavi"?3832032:s==="pembe"?14708890:3781991);for(let s=0;s<7;s++)s===2||s===4||s===5||s===6||(n.m(mt(23.6,3.7,.15,7,Fi(s),-42.45),9410210),n.m(de(.45,.3,-4.2,Fi(s),-42.45+.2,{eksen:"z",seg:10}),13620186))}function bm(n){let i=Cs(n,[[6,14.5,on.z1+.5],[6,15.2,-9],[9,19,-3],[13,27,6],[14,38,14.2],[13,46,17.6],[13,51.6,18.2]],1.2,1776673,{radyal:10,parca:70});n.p(mt(3.6,10.8,2.6,13-.4,57.2,18.2),1381914),n.p(mt(.9,9,.5,11.3,57.2,18.2),2960947),xr(n,i,.18,1.2),xr(n,i,.36,1.2),xr(n,i,.56,1.2);let s=Cs(n,[[10.6,77.5,-28.2],[6,78.6,-33],[5,80.5,-38.8],[13.8,84,-39.2],[18.2,86.5,-39],[19.45,86.5,-39]],.85,1776673,{radyal:10,parca:40});n.p(mt(3.4,2.4,4.6,12.6,77.5,-28.2),1381914),xr(n,s,.5,.85);let r=Cs(n,[[-7.8,pe.y-1.6,10],[-9,pe.y+1,12.4],[-6,pe.y+5.5,17.5],[2,pe.y+6.5,21.5],[12,pe.y+1.5,23.2],[19.45,46.5,23.5]],.95,1776673,{radyal:10,parca:60});n.p(mt(3.6,2.4,3.8,-6.4,pe.y-1.6,10),1381914),xr(n,r,.55,.95),xr(n,r,.78,.95);let a=Cs(n,[[0,9.5,on.z1+.5],[1,9.8,-9],[8,11,-2],[14,12.5,1],[19.45,13,3]],1,1776673,{radyal:10,parca:36});xr(n,a,.4,1),Cs(n,[[-8,5.6,on.z1+.5],[-4,5.2,-7],[4,5.4,0],[11.5,7.2,5.4],[15,7.4,Be.z0-1.2]],.6,2303274,{radyal:6,parca:30}),Cs(n,[[15.8,Jn.y(0)+.5,Jn.z1+.2],[14.6,29,11.6],[13.4,24.6,7.8],[14.2,18.4,5.4],[15.4,12.2,Be.z0-1.3]],.34,12858667,{radyal:6,parca:40}),n.p(mt(1.7,1.1,1.8,16.9,Jn.y(0)+.5,Jn.z1+.9),1118741),n.p(mt(1.6,1.8,1,15.9,12.2,Be.z0-1.5),1118741),Cs(n,[[15.8,Jn.y(1)+.5,Jn.z1+.2],[15.6,33.4,17.4],[16.8,33.6,ln.z0-1.4]],.34,12858667,{radyal:6,parca:20}),n.p(mt(1.7,1.1,1.8,16.9,Jn.y(1)+.5,Jn.z1+.9),1118741),ys.forEach((o,l)=>Cs(n,[[8,o+6,37.5],[11,o+8.5,33],[15.5,31+l*1.4+22,22]],.18,1381914,{radyal:5,parca:14}))}function Mm(n){for(let t of ys)Ro(n,[0,t,39.7],"z",24,5,11.4,1908773)}function Sm(n){Ro(n,[0,87.1,-24],"y",24,5,11.4,1908773)}var tr=(n,t,e)=>new C(n,t,e),Mr=n=>n*n*(3-2*n),wm={minAdim:4,minPx:14},ab=1.75,Zc={cek:5,cik:33,yuk:10,geri:6},ob=3,lb=new en({visible:!1});function Am(n,{aniz:t=4}={}){let e=n.govde,i=new Re;i.name="ic",i.visible=!1,n.grup.add(i);let s=new Re,r=new Re,a=new Re,o=new Re,l=new Re,c=new Re,u=new Re,d=new Re;s.name="ic-sabit",r.name="ic-hava",a.name="ic-egzoz",o.name="ic-sivi",l.name="ic-ram",c.name="ic-macun",u.name="ic-kapak",u.position.set(-19.75,0,-43),c.visible=!1,o.visible=!1,d.visible=!1,i.add(s,r,a,o,l,c,u,d);let h={hazir:!1,acik:!1,tur:"hava",kaldir:0,ram:0,calisiyor:!1,kapak:0,ms:{}},f=e.material,g=new Et(De(.5,87,85.8,.2,0,45.5,43,2),f);g.castShadow=!1,g.receiveShadow=!0,u.add(g),e.userData.logoAcik&&u.add(e.userData.logoAcik);let y=[],m=[],p=(et,gt,wt,I,st,Z,_t,Mt,dt={})=>{let Gt=Ke({kesif:gt,parca:"ic",...dt},wt,I,st,Z,_t,Mt);return et.add(Gt),m.push(Gt),Gt},S=(et,gt,wt,I,st)=>{y.push(ps(et,gt,wt,I,st))};p(u,"yan-kapak",3,87,85.8,0,45.5,43),S(u,"yan-kapak",-1,56,58),p(s,"hava-akisi",38.9,87,84,.4,45.5,0),p(s,"anakart",1.2,48.8,61,17.9,54.4,-11),S(s,"anakart",17.2,70.6,12.5),p(s,"islemci",2.2,10.4,10,16.8,fe.y,fe.z),S(s,"islemci",16,fe.y+7.4,fe.z+5),p(s,"pcie-yuvasi",3,2.4,19,16.9,Fi(3),-31.7),S(s,"pcie-yuvasi",16,Fi(3),-26);let E=(pe.alt+pe.y)/2+.25,b=pe.y-pe.alt+1.3;p(s,"ekran-karti",pe.x1-pe.x0+.8,b,55.6,(pe.x0+pe.x1)/2,E,-14.4),S(s,"ekran-karti",pe.x0-.6,pe.y-1.4,6),p(s,"guc-kablolari",7,39,8.8,14.5,43.5,15.2),S(s,"guc-kablolari",13.2,44,16.5),p(s,"guc-kablolari",10,15,19,9.5,20.5,-3.5),p(s,"guc-kaynagi",31,17.7,29.5,-3.5,10.65,-27.75),S(s,"guc-kaynagi",-3.5,19.1,-28),p(s,"m2-ssd",2,5.6,17,17.4,($e.y0+$e.y1)/2,-18.5),S(s,"m2-ssd",16.4,($e.y0+$e.y1)/2,-18.5),p(s,"sata-ssd",2.6,15,21,17.9,33.5,31),S(s,"sata-ssd",16.4,36.8,31),p(s,"hdd",6.4,21.5,30.5,16,12.75,22.25),S(s,"hdd",12.6,12.8,22),p(s,"veri-kablosu",3.5,18.5,7.5,14.75,20.75,8.75),S(s,"veri-kablosu",13,20.5,8.5),p(s,"bios-pili",2.5,4.6,4.6,16.75,mi.y,mi.z,wm),S(s,"bios-pili",15.4,mi.y,mi.z),p(s,"arka-panel",31,9.3,1.6,2.9,74.55,-42.3),S(s,"arka-panel",2.9,74.55,-42.3),p(s,"wifi-karti",14.6,2.6,6.6,10.1,Un.y,-38.1),S(s,"wifi-karti",6.6,Un.y+1.4,-38.1),p(s,"toz-filtresi",35.2,1.5,80,0,89.65,0),S(s,"toz-filtresi",-9,90.4,28),ys.forEach(et=>p(s,"kasa-fani",38,24.4,6.6,0,et,40.3)),S(s,"kasa-fani",-12.5,ys[1],39.7),p(r,"hava-sogutucu",26,19.4,14.4,3.5,fe.y,-19.6),S(r,"hava-sogutucu",-9.6,fe.y+7,-14.9);let A={minAdim:8,minPx:14};p(r,"isi-borusu",2.2,8,9,-8.9,fe.y,-22.1,A),p(r,"isi-borusu",4,8,9,14.1,fe.y,-22.1,A),S(r,"isi-borusu",-10,fe.y-1.4,-22.4),p(a,"kasa-fani",24.4,5.4,24.4,0,87.1,-24),S(a,"kasa-fani",-12.6,87.1,-24),p(c,"termal-macun",1.4,7,7,16.2,fe.y,fe.z,wm),S(c,"termal-macun",15.5,fe.y-4.2,fe.z-1);let x=(Ve.y0+Ve.y1)/2;p(s,"ram",9.4,27.4,16,13.4,x,-5.4,{hacim:3500}),p(l,"ram",9,27.4,3.2,12.8,x,Ve.z0+Ve.adim*1),p(l,"ram",9,27.4,3.2,12.8,x,Ve.z0+Ve.adim*3),S(l,"ram",8.3,70,-6.1),p(o,"pompa-blogu",Se.pompaX1-Se.pompaX0+.4,2*Se.pompaR+3.6,2*Se.pompaR+.8,(Se.pompaX0+Se.pompaX1)/2,fe.y+1.3,fe.z),S(o,"pompa-blogu",Se.pompaX0-.15,fe.y-2,fe.z+1.5),p(o,"radyator",25.2,6,55,0,87,-14,{hacim:3e3}),S(o,"radyator",-12.6,87,-26),p(o,"sogutma-hortumu",4.4,6.6,26,6.5,71.9,-1),S(o,"sogutma-hortumu",5.5,72.9,3);let k=["A","B"].map(()=>{let et=new Et(new hn,lb);return et.name="hortum-vekili",et.userData={kesif:"sogutma-hortumu",parca:"ic",ince:!0,hacim:300},o.add(et),m.push(et),et});p(o,"sivi-sogutma",25.2,6,5.8,0,87,12.7),S(o,"sivi-sogutma",-12.6,87,12.5),p(o,"kasa-fani",24.4,5.4,24.4,0,81.7,-26),p(o,"kasa-fani",24.4,5.4,24.4,0,81.7,-2);let v=et=>{for(let gt=et;gt;gt=gt.parent)if(!gt.visible)return!1;return!0},M=(et,gt,wt,I)=>()=>v(et)?et.localToWorld(tr(gt,wt,I)):null,P={"ic-kapak":M(u,-1,56,58),"ic-anakart":M(s,17,70.6,12.5),"ic-islemci":M(s,15.8,fe.y+5.6,fe.z),"ic-macun":M(c,15.5,fe.y-3.8,fe.z-1),"ic-hava":M(r,-9.6,fe.y+7.6,-14.9),"ic-isi-borusu":M(r,-10,fe.y-1.4,-22.4),"ic-ram":M(l,8.3,72,-6.1),"ic-m2":M(s,16.4,$e.y1+1.2,-18.5),"ic-sata-ssd":M(s,16.4,37.6,31),"ic-hdd":M(s,12.6,14.4,22),"ic-gpu":M(s,pe.x0-.6,pe.y-3,4),"ic-psu":M(s,-3.5,19.1,-28),"ic-pompa":M(o,Se.pompaX0-.15,fe.y-2,fe.z+1.5),"ic-radyator":M(o,-12.6,87,-26),"ic-hortum":M(o,5.5,72.9,3),"ic-fan-on":M(s,-12.5,ys[1],39.7),"ic-fan-egzoz":M(a,-12.6,87.1,-24),"ic-fan-kule":M(r,-2,fe.y,-12.6),"ic-wifi":M(s,6.6,Un.y+1.4,-38.1),"ic-arka-panel":M(s,2.9,74.55,-42.3),"ic-pil":M(s,15.4,mi.y,mi.z),"ic-kablo24":M(s,8,19.2,-3),"ic-sata-kablo":M(s,13,20.5,8.5),"ic-akis-giris":M(s,-11,66,46),"ic-akis-cikis":M(s,-11,94,-26),"ic-wifi-arka":M(s,6.8,Un.y,-44.6),"ic-arka-hdmi":M(n.grup,ge.hdmi.x,ge.hdmi.y+1.4,-44.8),"ic-arka-usb":M(n.grup,7.4,76.6,-44.8),"ic-arka-ag":M(n.grup,ge.ag.x,ge.ag.y+1.8,-44.8),"ic-arka-ses":M(n.grup,-7.6,76.3,-44.8),"ic-sivi-sicak":M(o,6.6,78,16.2),"ic-sivi-soguk":M(o,4.9,70.5,-5)},D=(et,gt,wt,I,st,Z)=>[Ne.x+(et+I)/2,(gt+st)/2,Ne.z+(wt+Z)/2,I-et,st-gt,Z-wt],O={"ic-anakart":D(17.3,30,-41.5,18.5,78.8,19.5),"ic-islemci":D(15.6,fe.y-5.2,fe.z-5,18,fe.y+5.2,fe.z+5),"ic-ram":D(8.5,Ve.y0-.5,-10.5,17.5,Ve.y1+.2,-3.5),"ic-m2":D(16.8,$e.y0-.2,-26.8,18,$e.y1+.2,-10.2),"ic-sata-ssd":D(16.6,26,20.5,19,41,41.5),"ic-hdd":D(12.8,2,7,19,23.5,37.5),"ic-gpu":D(pe.x0-.5,pe.alt-.4,-42,pe.x1+.4,pe.y+.9,13.4),"ic-psu":D(-18.6,1.8,-42.3,11.6,19.1,-13.6),"ic-pompa":D(Se.pompaX0-.2,fe.y-Se.pompaR-.2,fe.z-Se.pompaR-.2,Se.pompaX1+.2,fe.y+Se.pompaR+1.6,fe.z+Se.pompaR+.2),"ic-radyator":D(-12.4,84,-41.5,12.4,89.8,13.5),"ic-wifi":D(3,Un.y-1.2,-41.4,17.4,Un.y+1.2,-34.8),"ic-arka-panel":D(-12.6,69.9,-43,18.4,79.2,-42)},V=null,L,G,J,K=null,at=null,z=null,q=null,Q=null,Dt=null,yt=null,qt=null,Kt=[],Nt=Vh.map(et=>({...et,aci:.7*(et.m[0]+et.m[2]+1)%6.28,gor:!0})),nt=[],ut={};function Rt(){if(h.hazir)return;let et=performance.now();V=tm(t),L=new Le({map:V,vertexColors:!0,roughness:.55,metalness:.05}),G=new Le({map:V,vertexColors:!0,roughness:.36,metalness:.9}),J=new Le({vertexColors:!0,roughness:.52,metalness:.32});let gt={p:L,m:G,b:J},wt={},I=(st,Z)=>{let _t=performance.now();Z(),wt[st]=Math.round((performance.now()-_t)*10)/10};I("sabit",()=>{let st=vr();am(st),om(st),lm(st),xm(st),_m(st),gm(st),ym(st),vm(st,ge),bm(st),Mm(st);let Z=br(st,gt,s);for(let _t of["p","m"])Z[_t]&&(Z[_t].castShadow=!0,Z[_t].receiveShadow=!0);Z.b&&(Z.b.castShadow=!1,Z.b.receiveShadow=!0)}),I("hava",()=>{let st=vr();hm(st);let Z=br(st,gt,r);for(let dt of["p","m"])Z[dt]&&(Z[dt].castShadow=!0,Z[dt].receiveShadow=!0);let _t=vr();Sm(_t);let Mt=br(_t,gt,a);Mt.p&&(Mt.p.castShadow=!0,Mt.p.receiveShadow=!0)}),I("ram",()=>{let st=vr();um(st);let Z=br(st,gt,l);for(let _t of["p","m"])Z[_t]&&(Z[_t].castShadow=!0,Z[_t].receiveShadow=!0)}),I("macun",()=>{let st=vr();cm(st),qt=br(st,gt,c).m}),I("sivi",()=>{let st=vr();dm(st),pm(st);let Z=br(st,gt,o);for(let Ot of["p","m"])Z[Ot]&&(Z[Ot].castShadow=!0,Z[Ot].receiveShadow=!0);yt=new Le({color:1184538,roughness:.4,metalness:.2,emissive:10189823,emissiveIntensity:0}),Dt=new Et(fm(),yt),o.add(Dt);let _t=nm(["#ff8a3d","#58b0ff"],t),Mt=[Yh.A,Yh.B].map((Ot,Ae)=>{let{geo:X,egri:St}=Xh(Ot,mm,80,10,.4),R=Math.max(2,Math.round(St.getLength()/6)),F=X.attributes.uv;for(let ht=0;ht<F.count;ht++)F.setXY(ht,F.getX(ht)*R,(Ae===0?.5:0)+F.getY(ht)*.5);let j=new Xi(St.getSpacedPoints(40).slice(6,35));return k[Ae].geometry.dispose(),k[Ae].geometry=new qi(j,30,ob,6,!1),X}),dt=new Le({color:5067355,roughness:.42,metalness:.12,emissive:16777215,emissiveMap:_t,emissiveIntensity:0}),Gt=new Et($s(Mt,!1),dt);Gt.castShadow=!0,Gt.receiveShadow=!0,Gt.name="hortumlar",o.add(Gt);for(let Ot of Mt)Ot.dispose();nt.push({tex:_t,mal:dt,ad:"AB"})}),I("filtre",()=>{let st=em(t);st.repeat.set(35.2/6,80/6);let Z=new nn(35.2,80);Z.rotateX(-Math.PI/2),z=new Et(Z,new Le({map:st,transparent:!0,depthWrite:!1,side:wn,forceSinglePass:!0,roughness:.7,metalness:.3})),z.position.set(0,89.95,0),z.name="toz-filtresi",s.add(z)}),I("rotor",Ct),I("ok",se),h.hazir=!0,Ma.hazirla=Math.round((performance.now()-et)*10)/10,Object.assign(Ma,wt),Object.assign(h.ms,Ma),it(),Yt()}let jt=7;function Ct(){let et=new xn(1,3.2,.18);et.translate(.5,0,0),et.rotateX(.5);let gt=new Le({color:16777215,roughness:.55,metalness:.05,side:wn});K=new Es(et,gt,Vh.length*jt),K.frustumCulled=!1,K.name="fan-kanatlari",Nt.forEach((wt,I)=>{for(let st=0;st<jt;st++)K.setColorAt(I*jt+st,new le(wt.renk))}),K.instanceColor.needsUpdate=!0,i.add(K)}let bt=new un,ue=new Bn,ct=new Bn,pt=new C,xt=tr(0,0,1),vt=new Bn().setFromAxisAngle(tr(1,0,0),-Math.PI/2);function Tt(et){let gt=tr(et.m[0],et.m[1],et.m[2]);return et.grup==="hava"&&gt.add(r.position),gt}function Yt(){K&&(Nt.forEach((et,gt)=>{let wt=Tt(et);ue.identity(),et.eksen==="y"&&ue.copy(vt);for(let I=0;I<jt;I++){ct.setFromAxisAngle(xt,et.aci+I*Math.PI*2/jt),bt.quaternion.copy(ue).multiply(ct),pt.set(2.4,0,0).applyQuaternion(bt.quaternion),bt.position.copy(wt).add(pt);let st=et.gor?1:0;bt.scale.set((et.r-2.4)*st||1e-4,st||1e-4,st||1e-4),bt.updateMatrix(),K.setMatrixAt(gt*jt+I,bt.matrix)}}),K.instanceMatrix.needsUpdate=!0)}let Vt=()=>{for(let et of Nt)et.gor=et.grup==="sabit"||et.grup==="hava"&&h.tur==="hava"||et.grup==="egzoz"&&h.tur==="hava"||et.grup==="sivi"&&h.tur==="sivi"},Ht=7;function se(){for(let wt of["hava","sivi"])ut[wt]=jp[wt].map(I=>new Xi(I.map(st=>tr(...st)),!1,"catmullrom",.3));let et=new Xa(1.15,4.4,10);et.translate(0,2.2,0);let gt=new en({color:16777215,transparent:!0,opacity:.94,depthWrite:!1});at=new Es(et,gt,3*Ht),at.frustumCulled=!1,at.renderOrder=3,at.name="hava-oklari",at.raycast=()=>{};for(let wt=0;wt<3*Ht;wt++)at.setColorAt(wt,new le(5088255));d.add(at)}let N=new le(4168703),we=new le(16742959),oe=new le,T=tr(0,1,0),_=tr(0,0,0),B=tr(0,0,0);function Y(et){if(!at)return;let gt=ut[h.tur];for(let wt=0;wt<3;wt++)for(let I=0;I<Ht;I++){let st=(I/Ht+et*.16+wt*.11)%1;gt[wt].getPointAt(st,B),gt[wt].getTangentAt(st,_),bt.position.copy(B),bt.quaternion.setFromUnitVectors(T,_);let Z=Math.min(1,st/.08),_t=Math.min(1,(1-st)/.08),Mt=Mr(Math.min(Z,_t));bt.scale.set(Mt,Mt,Mt),bt.updateMatrix(),at.setMatrixAt(wt*Ht+I,bt.matrix);let dt=Math.min(1,Math.max(0,(st-.38)/.4));oe.copy(N).lerp(we,dt),at.setColorAt(wt*Ht+I,oe)}at.instanceMatrix.needsUpdate=!0,at.instanceColor.needsUpdate=!0}function it(){r.visible=h.tur==="hava",a.visible=h.tur==="hava",o.visible=h.tur==="sivi",c.visible=h.tur==="hava"&&h.kaldir>.35,d.visible=h.calisiyor,Vt()}function At(et){h.kapak=et;let gt=et>5e-4;gt!==h.acik&&(h.acik=gt,e.visible=!gt,i.visible=gt,gt&&(Rt(),it())),u.rotation.y=-Mr(et)*ab,u.updateMatrixWorld(!0)}function Pt(et){h.tur=et,et!=="hava"&&(h.kaldir=0),r.position.set(0,0,0),c.visible=!1,h.hazir?(it(),Yt()):it()}function ot(et){h.kaldir=et;let gt=Mr(Math.min(1,et/.2)),wt=Mr(Math.min(1,Math.max(0,(et-.2)/.5))),I=Mr(Math.max(0,(et-.7)/.3));r.position.set(-(gt*Zc.cek+wt*Zc.cik),I*Zc.yuk,-I*Zc.geri),r.updateMatrixWorld(!0),c.visible=h.tur==="hava"&&et>.35,h.hazir&&Yt()}function ft(et){h.ram=et,l.position.set(-Mr(et)*17,Mr(et)*3,0),l.updateMatrixWorld(!0)}function Ut(et){if(h.calisiyor=et,d.visible=et&&h.hazir,!et){for(let gt of nt)gt.mal.emissiveIntensity=0;yt&&(yt.emissiveIntensity=0)}}function $t(et,gt){if(!h.hazir||!h.calisiyor)return!1;for(let wt of Nt)wt.gor&&(wt.aci+=wt.hiz*et);if(Yt(),Y(gt),h.tur==="sivi"){for(let wt of nt)wt.mal.emissiveIntensity=1.35,wt.tex.offset.x-=et*.55;yt&&(yt.emissiveIntensity=.75+.35*Math.sin(gt*5))}return!0}function It(){if(h.hazir&&(Yt(),Y(.25),h.tur==="sivi")){for(let et of nt)et.mal.emissiveIntensity=1.35;yt&&(yt.emissiveIntensity=.9)}}function Lt(){h.calisiyor=!1,h.kaldir=0,h.ram=0,r.position.set(0,0,0),l.position.set(0,0,0),c.visible=!1,d.visible=!1;for(let et of Nt)et.aci=.7*(et.m[0]+et.m[2]+1)%6.28;for(let et of nt)et.mal.emissiveIntensity=0,et.tex.offset.x=0;yt&&(yt.emissiveIntensity=0),h.hazir&&Yt(),r.updateMatrixWorld(!0),l.updateMatrixWorld(!0)}return{grup:i,kapak:u,durum:h,kesif:y,vekiller:m,parca:P,alanlar:O,hazirla:Rt,kapakAyarla:At,turAyarla:Pt,kaldirAyarla:ot,ramAyarla:ft,calisiyorAyarla:Ut,kare:$t,duragan:It,sifirla:Lt,gruplar:{sabit:s,hava:r,egzoz:a,sivi:o,ram:l,macun:c}}}var cb=[{x:Ne.x,z:Ne.z,w:Ne.w+4,d:Ne.d+4,bulanik:18,alfa:.55},{x:dn.x,z:dn.z+3,w:36,d:24,bulanik:10,alfa:.5},...ri.map(n=>({x:n.x,z:n.z,w:15,d:17,bulanik:9,alfa:.5})),{x:Ai.x,z:Ai.z,w:88,d:27,bulanik:16,alfa:.32},{x:ai.x,z:ai.z,w:12.5,d:21,bulanik:8,alfa:.4},{x:Ei.x,z:Ei.z,w:38,d:29,bulanik:14,alfa:.45},{x:oi.x,z:oi.z,w:10.5,d:10.5,bulanik:6,alfa:.5},{x:Nn.x,z:Nn.z,w:22,d:14,bulanik:8,alfa:.28},{x:Qi.x,z:Qi.z,w:6,d:15,bulanik:4,alfa:.35}];function Em(n,{aniz:t=4}={}){Rp({aniz:t,izler:cb,masa:Di}),Pn();let e={};e.masa=Cp(),e.kasa=Zp(),e.monitor=Pp(),e.kamera=Ip(),e.klavye=Vp(),e.fare=Lp(),e.hoparlor=Dp(),e.mikrofon=Np(),e.kulaklik=Up(),e.yazici=Gp(),e.usb=Fp(),e.usb.grup.position.set(Qi.x,.65,Qi.z),e.usb.grup.rotation.y=Qi.don,e.kablo=Jp({klavye:e.klavye,fare:e.fare,kamera:e.kamera,kulaklik:e.kulaklik,yazici:e.yazici,mikrofon:e.mikrofon,hoparlor:e.hoparlor,monitor:e.monitor});let i=new Re;i.name="donanim",i.add(e.masa,e.kasa.grup,e.monitor.grup,e.kamera.grup,e.klavye.grup,e.fare.grup,e.hoparlor.grup,e.mikrofon.grup,e.kulaklik.grup,e.yazici.grup,e.usb.grup,e.kablo.mesh),bp(i),e.masa.castShadow=!1,e.masa.receiveShadow=!1,e.masa.userData.statik=!1,e.fare.grup.userData.dinamik=!0,n.add(i),i.updateMatrixWorld(!0);let s=Wp(i);return e.ic=Am(e.kasa,{aniz:t}),i.updateMatrixWorld(!0),{kok:i,p:e,birlesme:s}}var pn=(n,t,e)=>new C(n,t,e),ub={I:"\u0131",\u0130:"i",\u015E:"\u015F",\u011E:"\u011F",\u00DC:"\xFC",\u00D6:"\xF6",\u00C7:"\xE7"},hb=n=>ub[n]||n.toLowerCase(),qh=["M","E","R","H","A","B","A"," ","D","\xDC","N","Y","A"],Zh=[{x:760,y:230},{x:70,y:150},{x:330,y:86},{x:420,y:250},{x:800,y:430},{x:600,y:190}],Kh=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,"."),$h=n=>n*n*(3-2*n),Jh=["klavye","fare","mikrofon","kulaklik","hoparlor","monitor","kamera","yazici","guc"],db={klavye:["parca:klavye","Klavye: USB giri\u015Fine ba\u011Fl\u0131"],fare:["parca:fare","Fare: USB giri\u015Fine ba\u011Fl\u0131"],mikrofon:["parca:mikrofon","Mikrofon: pembe ses giri\u015Fine ba\u011Fl\u0131"],kulaklik:["parca:kulaklik","Kulakl\u0131k: USB giri\u015Fine ba\u011Fl\u0131"],hoparlor:["parca:hoparlor1","Hoparl\xF6r: ye\u015Fil ses giri\u015Fine ba\u011Fl\u0131"],monitor:["parca:monitor","Monit\xF6r: HDMI giri\u015Fine ba\u011Fl\u0131"],kamera:["parca:kamera","Web kameras\u0131: USB giri\u015Fine ba\u011Fl\u0131"],yazici:["parca:yazici","Yaz\u0131c\u0131: USB giri\u015Fine ba\u011Fl\u0131"],guc:["kesif:guc-girisi","G\xFC\xE7 kablosu: prize gider"]},jh={klavye:"klavye",fare:"fare",mikrofon:"mikrofon",kulaklik:"kulaklik",hoparlor:"hoparlor",monitor:"monitor",kamera:"kamera",yazici:"yazici"};function Tm(n,{olay:t=()=>{}}={}){let{kok:e,p:i,birlesme:s}=Em(n.scene,{aniz:n.renderer.capabilities.getMaxAnisotropy()}),r=i.ic,a=i.monitor.ekran,o=a.durum,l=i.klavye,c=i.fare,u=i.hoparlor,d=i.mikrofon,h=i.kulaklik,f=i.yazici,g=i.kamera,y=i.kablo,m=H=>{try{t("duyur",H)}catch{}};e.traverse(H=>{H.userData&&(H.userData.yari||H.userData.ince)&&n.hedefler.push(H)}),n.controls.cursor.set(0,20,-10),n.controls.maxTargetRadius=170;let p=[],S=new Set;for(let H of[i.monitor,i.kamera,i.klavye,i.fare,i.hoparlor,i.mikrofon,i.kulaklik,i.yazici,i.usb,i.kasa,r])for(let lt of H.kesif)S.has(lt.id)||(S.add(lt.id),p.push(lt));let E=new Map(p.map(H=>[H.id,H])),b=Ne.z+Ne.d/2,A=Ne.z-Ne.d/2,x={monitor:[dn.x,34,dn.z-1,97,68,22],ekran:[dn.x,39.4,dn.z+1.7,92,52,1.5],klavye:[Ai.x,3,Ai.z,89,6.6,28],fare:[ai.x,2.4,ai.z,11.5,5,20.5],hoparlor1:[ri[0].x,13.4,ri[0].z,14,27,16],hoparlor2:[ri[1].x,13.4,ri[1].z,14,27,16],mikrofon:[oi.x,11.5,oi.z,10,23.5,12],kamera:[Ni.x,69.2,Ni.z,9.4,5.6,5],kulaklik:[Nn.x,7.5,Nn.z,22.6,15.2,12],yazici:[Ei.x,12,Ei.z+3.5,37,25,45],"usb-bellek":[Qi.x,1.4,Qi.z,13,3.2,13],kasa:[Ne.x,Ne.h/2,Ne.z,Ne.w,Ne.h,Ne.d],"kasa-on-seridi":[Ne.x,80.4,b+.6,34,6.6,2],"kasa-arka-paneli":[Ne.x+2.9,74.55,A-.5,31,9.4,2],"guc-kaynagi":[Ne.x-3.5,10.4,A-.5,30,17.2,2]};Object.assign(x,r.alanlar);let k=H=>{let lt=x[H];return lt?new Zn(pn(lt[0]-lt[3]/2,lt[1]-lt[4]/2,lt[2]-lt[5]/2),pn(lt[0]+lt[3]/2,lt[1]+lt[4]/2,lt[2]+lt[5]/2)):null},v={monitor:()=>pn(dn.x,68.8,dn.z),ekran:()=>pn(dn.x+20,41,dn.z+1.9),klavye:()=>pn(Ai.x,6.6,Ai.z+3),fare:()=>pn(c.grup.position.x,5.4,c.grup.position.z),hoparlor1:()=>pn(ri[0].x,27.8,ri[0].z),hoparlor2:()=>pn(ri[1].x,27.8,ri[1].z),mikrofon:()=>pn(oi.x,23,oi.z+1),kamera:()=>pn(Ni.x,72.6,Ni.z),kulaklik:()=>pn(Nn.x,13,Nn.z),yazici:()=>pn(Ei.x,16.2,Ei.z),"usb-bellek":()=>pn(Qi.x,3.2,Qi.z),kasa:()=>pn(Ne.x,91.5,Ne.z+6),"fare-sol":()=>pn(c.grup.position.x-2.6,3.8,c.grup.position.z-4.4),"fare-sag":()=>pn(c.grup.position.x+2.6,3.8,c.grup.position.z-4.4),"fare-tekerlek":()=>pn(c.grup.position.x,5,c.grup.position.z-4.4),"kulaklik-mikrofon":()=>pn(Nn.x-4.7,3.8,Nn.z+8.6),"kulaklik-kup":()=>pn(Nn.x-8.4,8.8,Nn.z)};Object.assign(v,r.parca),Object.assign(v,{"arka-hdmi":r.parca["ic-arka-hdmi"],"arka-usb":r.parca["ic-arka-usb"],"arka-ses":r.parca["ic-arka-ses"],"arka-ag":r.parca["ic-arka-ag"],"arka-guc":()=>M("kesif:guc-girisi")});function M(H){let lt=H.indexOf(":"),ne=H.slice(0,lt),Me=H.slice(lt+1);if(ne==="alan"){let ve=x[Me];return ve?pn(ve[0],ve[1]+ve[4]/2+1.5,ve[2]):null}if(ne==="parca")return v[Me]?v[Me]():null;if(ne==="tus"){let ve=l.ara(Me==="Bosluk"?" ":Me);return ve<0?null:l.noktaI(ve).applyMatrix4(l.grup.matrixWorld)}if(ne==="kesif"){let ve=E.get(Me);return ve?ve.yerel.clone().applyMatrix4(ve.nesne.matrixWorld):null}return null}let P=[],D=pn(0,0,0),O=pn(0,0,0);e.traverse(H=>{H.userData&&H.userData.yon&&P.push(H)}),n.kareGuncelleyici(()=>{let H=n.camera.position;for(let lt of P)lt.userData.yon&&(D.setFromMatrixPosition(lt.matrixWorld),O.copy(H).sub(D).normalize(),lt.visible=O.dot(lt.userData.yon)>.12);return!1});let V=[],L=[],G=()=>n.etiketKoy([...V,...L]),J=H=>{L=H.filter(lt=>lt.nokta),G()},K=new Map,at=new Set,z=()=>document.documentElement.hasAttribute("data-e-hareketsiz")||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;n.yavasGuncelleyici(()=>{let H=!1;for(let[lt,ne]of K){let Me=!1;try{Me=ne(performance.now())}catch(ve){console.error(ve)}Me?H=!0:K.delete(lt)}return H});let q=(H,lt)=>{K.set(H,lt),n.iste()};function Q(H,lt,ne,Me=null){if(z())return Me==null?(lt(1),ne&&ne()):(lt(Me),Dt(2400,()=>{ne&&ne(),n.iste()})),n.iste(),()=>!1;let ve=null;return vn=>{ve??=vn;let We=Math.min(1,(vn-ve)/H);return lt(We,vn),We>=1?(ne&&ne(),!1):!0}}let Dt=(H,lt)=>{let ne=setTimeout(()=>{at.delete(ne),lt()},H);at.add(ne)},yt=0,qt=(H=0,lt=!1)=>{!lt&&H-yt<70||(yt=H,a.guncelle())},Kt=()=>{a.guncelle(),n.iste()},Nt=new hr(.92,1,48),nt=[0,1,2].map(()=>{let H=new Et(Nt,new en({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:wn}));return H.visible=!1,H.renderOrder=3,H.raycast=()=>{},H.userData.dinamik=!0,e.add(H),H}),ut=()=>{for(let H of nt)H.visible=!1};function Rt(H,lt,ne,Me){nt.forEach((ve,vn)=>{let We=(Me+vn/3)%1,kn=9.5-We*6.5;ve.visible=!0,ve.position.set(H,lt,ne+4+(1-We)*15),ve.scale.set(kn,kn,1),ve.material.opacity=Math.sin(Math.PI*We)*.55})}function jt(H){u.halkalar.forEach(lt=>lt.forEach((ne,Me)=>{let ve=(H+Me/3)%1;ne.visible=!0,ne.scale.set(3.2+ve*13,3.2+ve*13,1),ne.material.opacity=Math.pow(1-ve,1.4)*.5}))}let Ct=()=>u.halkalar.forEach(H=>H.forEach(lt=>{lt.visible=!1})),bt=null;function ue(){try{let H=window.AudioContext||window.webkitAudioContext;if(!H)return;bt=bt||new H,bt.state==="suspended"&&bt.resume();let lt=bt.currentTime+.03;[[523.25,0],[659.25,.3],[783.99,.6]].forEach(([ne,Me])=>{let ve=bt.createOscillator(),vn=bt.createGain();ve.type="sine",ve.frequency.value=ne,vn.gain.setValueAtTime(1e-4,lt+Me),vn.gain.exponentialRampToValueAtTime(.07,lt+Me+.04),vn.gain.exponentialRampToValueAtTime(1e-4,lt+Me+.55),ve.connect(vn),vn.connect(bt.destination),ve.start(lt+Me),ve.stop(lt+Me+.6)})}catch{}}let ct=null,pt="",xt=!1,vt=0,Tt=0,Yt=3,Vt=!1,Ht=-1,se=new Set;function N(){K.clear();for(let H of at)clearTimeout(H);at.clear();for(let H of se)l.tusBas(H,!1);se.clear(),y.izle(null),Ht=-1,c.grup.position.set(ai.x,0,ai.z),c.birak(),c.tekerlek.rotation.x=0,d.ledAyarla(!1),g.ledAyarla(!1),f.ledAyarla(!1),i.monitor.ledAyarla(!0),f.kagit.visible=!1,f.kagit.position.z=-3.75,ut(),Ct(),h.kupMal.emissiveIntensity=0,h.ucMal.emissiveIntensity=0,pt="",xt=!1,vt=0,Tt=0,Yt=3,Vt=!1,Object.assign(o,{mod:"masaustu",yazi:"",imlec:{...Zh[0]},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3})}function we(H){l.tusBas(H,!0),se.add(H),q("tus"+H,Q(170,()=>{},()=>{l.tusBas(H,!1),se.delete(H)}))}function oe(H){let lt=l.tuslar[H];if(!lt||(we(H),ct!=="yaz"))return!1;let ne=!0;if(lt.ad==="Geri")pt=pt.slice(0,-1);else if(lt.ad==="Enter")pt+=`
`;else if(lt.tur==="bosluk")pt+=" ";else{if(lt.ad==="Shift")return xt=!0,J([{nokta:l.noktaI(H).applyMatrix4(l.grup.matrixWorld),metin:"Shift: s\u0131radaki harf b\xFCy\xFCk"}]),m("Shift bas\u0131ld\u0131, s\u0131radaki harf b\xFCy\xFCk yaz\u0131lacak"),!0;lt.tur==="harf"||lt.tur==="rakam"?(pt+=xt?lt.ad:hb(lt.ad),xt=!1):ne=!1}if(ne)if(o.yazi=pt,Kt(),lt.ad==="Enter"||lt.ad==="Geri"||lt.tur==="bosluk"){let Me=lt.ad==="Enter"?"Enter: yeni sat\u0131r":lt.ad==="Geri"?"Geri: son harfi siler":"Bo\u015Fluk";J([{nokta:l.noktaI(H).applyMatrix4(l.grup.matrixWorld),metin:Me}])}else L.length&&J([]);return ne}function T(H){let lt={...o.imlec},ne=c.grup.position.x,Me=c.grup.position.z,ve=ai.x+(H.x-512)/512*1.2,vn=ai.z+(H.y-288)/288*1.2;q("fare-gez",Q(520,We=>{let kn=$h(We);o.imlec.x=lt.x+(H.x-lt.x)*kn,o.imlec.y=lt.y+(H.y-lt.y)*kn,c.grup.position.x=ne+(ve-ne)*kn,c.grup.position.z=Me+(vn-Me)*kn,qt(performance.now())},()=>{Kt(),n.golgeYenile()}))}let _=()=>{Tt=(Tt+1)%Zh.length,T(Zh[Tt]),m("Fare hareket etti, imle\xE7 ekranda yer de\u011Fi\u015Ftirdi")};function B(H){c.tikla(H),o.menu=H?!1:!o.menu,q("fare-tik",Q(460,lt=>{o.tik=1+lt*2.2,lt>.35&&c.birak(),qt(performance.now())},()=>{o.tik=0,c.birak(),Kt()})),m(H?"Sol t\u0131k yap\u0131ld\u0131":o.menu?"Sa\u011F t\u0131k men\xFCs\xFC a\xE7\u0131ld\u0131":"Sa\u011F t\u0131k men\xFCs\xFC kapand\u0131")}function Y(){let H=c.tekerlek.rotation.x;q("tekerlek",Q(260,lt=>{c.tekerlek.rotation.x=H+$h(lt)*1.4})),J([{nokta:M("parca:fare-tekerlek"),metin:"Tekerlek: sayfay\u0131 kayd\u0131r\u0131r"}])}function it(){d.ledAyarla(!0),o.ses=0,Kt();let H=d.kafa;q("konus",Q(3600,(lt,ne)=>{o.ses=lt*3,Rt(H.x,H.y,H.z,lt*3.6/1.1%1),qt(ne)},()=>{d.ledAyarla(!1),o.ses=null,ut(),Kt()},.3)),m("Mikrofon sesi al\u0131yor, ekranda ses \xE7ubuklar\u0131 hareket ediyor")}function At(){return Vt=!Vt,o.kamera=Vt,g.ledAyarla(Vt),Kt(),m(Vt?"Web kameras\u0131 a\xE7\u0131ld\u0131, g\xF6r\xFCnt\xFC ekranda":"Web kameras\u0131 kapand\u0131"),Vt}function Pt(){Yt=Yt===3?0:Yt+1,o.kademe=Yt,Kt();let[H,lt]=Sp[Yt];J([{nokta:M("parca:ekran"),metin:`${Kh(H)} \xD7 ${Kh(lt)} = ${Kh(H*lt)} piksel`}]),m(`\xC7\xF6z\xFCn\xFCrl\xFCk ${H} \xE7arp\u0131 ${lt}, toplam ${H*lt} piksel`)}function ot(){o.cal=0,Kt(),ue(),q("ses",Q(3400,(H,lt)=>{o.cal=H*3,jt(H*3.4/1%1),qt(lt)},()=>{o.cal=null,Ct(),Kt()},.3)),m("Hoparl\xF6rden ses \xE7\u0131k\u0131yor")}function ft(){let H=f.kagit;H.visible=!0,H.position.z=-3.75,f.ledAyarla(!0),o.yazdir=0,Kt(),q("yazdir",Q(3600,(lt,ne)=>{o.yazdir=lt,H.position.z=-3.75+13.5*$h(Math.min(1,Math.max(0,(lt-.2)/.8))),qt(ne)},()=>{f.ledAyarla(!1),o.yazdir=1,Kt(),n.golgeYenile(),Dt(1600,()=>{o.yazdir=null,Kt()})})),m("Yaz\u0131c\u0131 k\xE2\u011F\u0131da yazd\u0131r\u0131yor")}function Ut(){q("kulak",Q(2600,H=>{h.kupMal.emissiveIntensity=Math.max(0,Math.sin(H*Math.PI*5))*.85},()=>{h.kupMal.emissiveIntensity=0},.1)),ue(),m("Ses kulakl\u0131ktan geliyor")}function $t(){let H=pn(Nn.x-4.7,3.2,Nn.z+8.6);q("kulak-konus",Q(3e3,lt=>{h.ucMal.emissiveIntensity=Math.max(0,Math.sin(lt*Math.PI*5))*.9,Rt(H.x,H.y,H.z,lt*3/1.1%1)},()=>{h.ucMal.emissiveIntensity=0,ut()},.1)),m("Kulakl\u0131\u011F\u0131n mikrofonu sesi al\u0131yor")}function It(H){if(y.izle(H),n.iste(),!H){J([]);return}let[lt,ne]=db[H];J([{nokta:M(lt),metin:ne}]),m(ne)}function Lt(){Ht=(Ht+1)%Jh.length,It(Jh[Ht])}let et=null,gt=!1,wt=!1,I=!1,st=!1,Z=!1,_t=[],Mt=E.get("guc-kaynagi")?E.get("guc-kaynagi").nesne:null,dt=Mt?Mt.userData.yon:null,Gt=Mt?Mt.position.clone():null;function Ot(H){Mt&&(H?(Mt.position.set(-3.5,19.1,-28),Mt.userData.yon=null,Mt.visible=!0):(Mt.position.copy(Gt),Mt.userData.yon=dt),Mt.updateMatrixWorld(!0))}let Ae=new Set(r.kesif.map(H=>H.id)),X=p.filter(H=>H.nesne&&!Ae.has(H.id)&&!H.nesne.userData.yon).map(H=>H.nesne),St=H=>{for(let lt of X)lt.visible=!H};function R(){V=_t.map(([H,lt,ne])=>({nokta:M(H),metin:lt,tur:ne})).filter(H=>H.nokta),G()}function F(H){let lt=r.durum.acik;r.kapakAyarla(H),r.durum.acik!==lt&&(Ot(r.durum.acik),St(r.durum.acik),n.golgeYenile())}function j(H,lt,ne,Me,ve,vn){q(H,Q(lt,We=>ve(ne+(Me-ne)*We),()=>{ve(Me),n.golgeYenile(),R(),vn&&vn()}))}function ht(){return gt=!gt,gt||Wt(),j("kapak",1100,r.durum.kapak,gt?1:0,F,()=>{_t=_t.map(H=>H[0]==="parca:kasa"&&/kasa$/.test(H[1])?[H[0],gt?"A\xE7\u0131k kasa":"Kapal\u0131 kasa",H[2]]:H),R()}),m(gt?"Yan kapak a\xE7\u0131ld\u0131, kasan\u0131n i\xE7i g\xF6r\xFCn\xFCyor":"Yan kapak kapand\u0131"),gt}function rt(){return r.durum.tur!=="hava"||!r.durum.acik?!1:(wt=!wt,Wt(),j("kaldir",1300,r.durum.kaldir,wt?1:0,H=>r.kaldirAyarla(H),()=>J(wt?[{nokta:M("parca:ic-macun"),metin:"Termal macun",tur:"yesil"}]:[])),m(wt?"So\u011Futucu kald\u0131r\u0131ld\u0131, i\u015Flemcinin \xFCst\xFCndeki termal macun g\xF6r\xFCn\xFCyor":"So\u011Futucu i\u015Flemcinin \xFCst\xFCne geri tak\u0131ld\u0131"),wt)}function Jt(){return r.durum.acik?(I=!I,Wt(),j("ram",900,r.durum.ram,I?1:0,H=>r.ramAyarla(H)),m(I?"RAM \xE7ubuklar\u0131 yuvalar\u0131ndan \xE7\u0131kar\u0131ld\u0131":"RAM \xE7ubuklar\u0131 yuvalara geri tak\u0131ld\u0131"),I):!1}function Wt(){st&&(st=!1,K.delete("ic-calis"),r.calisiyorAyarla(!1),J([]),n.iste())}function re(){if(!r.durum.acik)return!1;if(st)return Wt(),m("Bilgisayar durdu, fanlar yava\u015Flad\u0131 ve durdu"),!1;st=!0,r.calisiyorAyarla(!0),wt&&(wt=!1,r.kaldirAyarla(0)),I&&(I=!1,r.ramAyarla(0));let H=null;z()?(r.duragan(),n.iste()):q("ic-calis",ne=>{let Me=H==null?0:Math.min(.1,(ne-H)/1e3);return H=ne,r.kare(Me,ne/1e3)});let lt=(ne,Me,ve)=>({nokta:M(ne),metin:Me,tur:ve});return J(r.durum.tur==="sivi"?[lt("parca:ic-pompa","Pompa s\u0131v\u0131y\u0131 d\xF6nd\xFCr\xFCr","yesil"),lt("parca:ic-sivi-sicak","S\u0131cak s\u0131v\u0131 radyat\xF6re gider","arti"),lt("parca:ic-sivi-soguk","So\u011Fuyan s\u0131v\u0131 geri d\xF6ner","eksi"),lt("parca:ic-akis-giris","So\u011Fuk hava girer","eksi"),lt("parca:ic-akis-cikis","S\u0131cak hava \xE7\u0131kar","arti")]:[lt("parca:ic-akis-giris","So\u011Fuk hava girer","eksi"),lt("parca:ic-akis-cikis","S\u0131cak hava \xE7\u0131kar","arti")]),m(r.durum.tur==="sivi"?"Fanlar d\xF6n\xFCyor, pompa s\u0131v\u0131y\u0131 d\xF6nd\xFCr\xFCyor; s\u0131cak s\u0131v\u0131 radyat\xF6re, so\u011Fuyan s\u0131v\u0131 i\u015Flemciye gidiyor":"Fanlar d\xF6n\xFCyor; so\u011Fuk hava \xF6nden girer, s\u0131cak hava yukar\u0131dan \xE7\u0131kar"),n.iste(),!0}function _e(){return r.durum.acik?(Z=!Z,wt=!1,r.kaldirAyarla(0),r.turAyarla(Z?"sivi":"hava"),st&&(r.calisiyorAyarla(!0),z()&&r.duragan()),n.golgeYenile(),R(),n.iste(),m(Z?"S\u0131v\u0131 so\u011Futmaya ge\xE7ildi: i\u015Flemcinin \xFCst\xFCnde pompa blo\u011Fu, tavanda radyat\xF6r var":"Hava so\u011Futmaya ge\xE7ildi: i\u015Flemcinin \xFCst\xFCnde fanl\u0131 so\u011Futucu var"),Z):!1}function xe(H){et=H&&H.indexOf("ic")===0?H:null,r.sifirla(),st=!1,wt=!1,I=!1,Z=et==="ic-sivi",r.turAyarla(Z?"sivi":"hava"),gt=et==="ic"||et==="ic-sivi",F(gt?1:0)}function Pe(H,lt){if(!H)return!1;if(ct==="kablo"&&jh[H.parca])return Ht=Jh.indexOf(jh[H.parca]),It(jh[H.parca]),!0;if(H.parca==="klavye"&&H.tusNo!=null)return oe(H.tusNo);if(ct==="fare"&&H.parca==="fare"){if(H.tekerlek)return Y(),!0;let ne=c.grup.worldToLocal(lt?lt.clone():pn(0,0,0));return lt&&ne.z<-1.2?(B(ne.x<0),!0):(_(),!0)}return ct==="ekran"&&H.kesif==="ekran"?(Pt(),!0):!1}function _n(H){switch(H){case"tus-bas":{let lt=qh[vt%qh.length];vt%qh.length===0&&(pt="",o.yazi=""),vt++,oe(l.ara(lt));return}case"fare-oynat":_();return;case"fare-tikla":B(!0);return;case"fare-sag":B(!1);return;case"konus":it();return;case"kamera":return At();case"cozunurluk":Pt();return;case"ses":ot();return;case"yazdir":ft();return;case"kulak-dinle":Ut();return;case"kulak-konus":$t();return;case"kablo-sonraki":Lt();return;case"kapak":return ht();case"sogutucu-kaldir":return rt();case"ram-cikar":return Jt();case"calistir":return re();case"sogutma-turu":return _e();default:}}function je(H,lt={}){N(),ct=lt.mod||null,o.yazi=lt.yazi!=null?lt.yazi:"Merhaba!",xe(ct),_t=lt.etiket||[],V=_t.map(([ne,Me,ve])=>({nokta:M(ne),metin:Me,tur:ve})).filter(ne=>ne.nokta),L=[],G(),Kt(),n.golgeYenile()}function Wn(){K.clear();for(let H of at)clearTimeout(H);at.clear();try{bt&&bt.state!=="closed"&&bt.close()}catch{}bt=null,st=!1,r.calisiyorAyarla(!1)}return je("merak",{}),n.golgeYenile(),n.iste(),{kesifNoktalari:p,alanlar:x,noktaBul:M,kutuBul:k,adimUygula:je,eylem:_n,durdur:Wn,dokunuldu:Pe,parcalar:i,durum:o,birlesme:s}}var fb=n=>Rh[Oc[n]?.kat]?Oc[n].kat:null,km={id:"donanim",DERSLER:yp,KAMERA:mp,KESIF:Oc,KATEGORI:Rh,kategoriBul:fb,GORUNUM:gp,vurguYap:Mp,sahneyiKur:Tm};var Rm=rd();Rm.veri&&pp(km,Rm);
