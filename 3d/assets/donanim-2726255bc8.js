var ue=document.documentElement,Ot=(n,t=document)=>t.querySelector(n),Mn=(n,t=document)=>[...t.querySelectorAll(n)],ci=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},mi=n=>{try{return localStorage.getItem(n)}catch{return null}},td=0,Ti=n=>{let t=Ot("#duyuru");if(t){if(clearTimeout(td),t.textContent!==n){t.textContent=n;return}t.textContent="",td=setTimeout(()=>{t.textContent=n},100)}};var ed="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";function nd(n){if(!n)return;let t=()=>{n.classList.toggle("ayar-acik",!!n.querySelector(".ayarlar:not([hidden])")),n.classList.toggle("erisim-acik",!!n.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function id(n){if(!(!n||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;n.classList.toggle("dar-640",e<=640),n.classList.toggle("dar-380",e<=380)}).observe(n)}}function sd(n,t){if(!n)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){n.hidden=!0;return}n.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}function rd(){let n=Ot("#ders-veri"),t=n?JSON.parse(n.textContent):null;ue.dataset.js="1";let e={veri:t,S:null,sinifDegisince:null,pencere:null,temaRengi:null},i=["5","6","7","8"];function s(y,m=!0){ue.dataset.sinif=y,ue.dataset.sinifSecili="1",m&&ci("bote-3d-sinif",y);let p=new URL(location.href);p.searchParams.set("sinif",y),history.replaceState(null,"",p);for(let M of Mn("[data-sinif-yaz]"))M.textContent=`${y}. s\u0131n\u0131f`;for(let M of Mn("a[data-ders-baglanti]")){let T=new URL(M.href,location.href);T.searchParams.set("sinif",y),M.href=T.pathname+T.search}for(let M of Mn("[data-sinif-sec]"))M.setAttribute("aria-pressed",String(M.dataset.sinifSec===y));e.sinifDegisince?.()}let r=Ot("#sinif-penceresi"),a=new URLSearchParams(location.search).get("sinif");if(i.includes(a))s(a);else{let y=mi("bote-3d-sinif");if(i.includes(y)){ue.dataset.sinif=y,ue.dataset.sinifSecili="1";for(let m of Mn("[data-sinif-yaz]"))m.textContent=`${y}. s\u0131n\u0131f`;for(let m of Mn("[data-sinif-sec]"))m.setAttribute("aria-pressed",String(m.dataset.sinifSec===y))}r&&t&&r.showModal?.()}document.addEventListener("click",y=>{let m=y.target.closest("[data-sinif-sec]");m&&(s(m.dataset.sinifSec),r?.open&&(r.close(),Ot(".adim.etkin h2")?.focus({preventScroll:!0})),t?Ti(`${m.dataset.sinifSec}. s\u0131n\u0131f anlat\u0131m\u0131 se\xE7ildi`):o())});function o(){let y=Ot("#dersler");if(!y)return;let m=y.getBoundingClientRect();(m.top<0||m.top>window.innerHeight*.55)&&y.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),Ti(`${ue.dataset.sinif}. s\u0131n\u0131f se\xE7ildi. \u015Eimdi dersi se\xE7in.`)}Ot("#sinif-dugme")?.addEventListener("click",()=>r?.showModal?.());let l=new URLSearchParams(location.search).get("mod")||mi("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),c=window.matchMedia(ed),u=l;function d(y,m){u=y,ue.dataset.mod=y==="tahta"&&c.matches?"normal":y,Ot("#tahta-dugme")?.setAttribute("aria-pressed",String(ue.dataset.mod==="tahta")),m&&(ci("bote-3d-mod",y),e.S?.guvenliYenile())}d(l,!1),c.addEventListener?.("change",()=>{let y=ue.dataset.mod;d(u,!1),ue.dataset.mod!==y&&e.S?.guvenliYenile()}),Ot("#tahta-dugme")?.addEventListener("click",()=>d(ue.dataset.mod==="tahta"?"normal":"tahta",!0));let h=()=>ue.dataset.theme==="dark"?"#17121f":"#e9e5f1";Ot("#tema-dugme")?.addEventListener("click",()=>{let y=ue.dataset.theme!=="dark";y?ue.dataset.theme="dark":delete ue.dataset.theme,ci("bote-theme",y?"dark":"light"),e.S?.arkaPlan(h())}),sd(Ot("#tam-ekran"),ue);let f=Ot("#ogretmen-dugme");function g(y){ue.dataset.ek=y?"acik":"",f?.setAttribute("aria-expanded",String(y)),y&&Ot("#ogretmen")?.focus()}return f?.addEventListener("click",()=>g(ue.dataset.ek!=="acik")),Ot("#ogretmen-kapat")?.addEventListener("click",()=>{g(!1),f?.focus()}),document.addEventListener("keydown",y=>{y.key==="Escape"&&ue.dataset.ek==="acik"&&!r?.open&&(g(!1),f?.focus())}),document.addEventListener("click",y=>{let m=y.target.closest("[data-secenek]");if(!m)return;let p=m.closest(".soru");if(!p||p.dataset.cevaplandi)return;p.dataset.cevaplandi="1";let M=m.hasAttribute("data-dogru");m.classList.add(M?"dogru":"yanlis"),p.querySelector("[data-dogru]")?.classList.add("dogru");let T=p.querySelector(".aciklama");T&&(T.hidden=!1);let b=p.closest(".sinav"),A=Mn(".soru[data-cevaplandi]",b),x=A.filter(v=>v.querySelector(".dogru[data-dogru]")&&!v.querySelector(".yanlis")),E=Ot(".sinav-sonuc",b);E&&A.length===Mn(".soru",b).length&&(E.textContent=`${A.length} sorudan ${x.length} do\u011Fru.`),Ti(M?"Do\u011Fru cevap":"Yanl\u0131\u015F cevap; do\u011Fru se\xE7enek i\u015Faretlendi")}),e.pencere=r,e.temaRengi=h,e}var Hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gd=0,Lu=1,Hd=2;var co=1,Bl=2,ia=3,Xs=0,Vn=1,wn=2,ls=0,sa=1,uo=2,Du=3,Nu=4,Wd=5;var hr=100,Xd=101,Yd=102,qd=103,Zd=104,Kd=200,$d=201,Jd=202,jd=203,Uu=204,Fu=205,Qd=206,tf=207,ef=208,nf=209,sf=210,rf=211,af=212,of=213,lf=214,rl=0,al=1,ol=2,zr=3,ll=4,cl=5,ul=6,hl=7,Vl=0,cf=1,uf=2,Yi=0,Ou=1,zu=2,Bu=3,Vu=4,Gu=5,Hu=6,ho=7;var Wu=300,Ys=301,dr=302,Gl=303,Hl=304,fo=306,xi=1e3,ns=1001,dl=1002,On=1003,hf=1004;var po=1005;var Sn=1006,Wl=1007;var Ri=1008;var hi=1009,Xu=1010,Yu=1011,ra=1012,Xl=1013,qi=1014,Ci=1015,Zi=1016,Yl=1017,ql=1018,aa=1020,qu=35902,Zu=35899,Ku=1021,$u=1022,Pi=1023,is=1026,qs=1027,Zl=1028,Kl=1029,Zs=1030,$l=1031;var Jl=1033,mo=33776,go=33777,yo=33778,_o=33779,jl=35840,Ql=35841,tc=35842,ec=35843,nc=36196,ic=37492,sc=37496,rc=37488,ac=37489,xo=37490,oc=37491,lc=37808,cc=37809,uc=37810,hc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,yc=37817,_c=37818,xc=37819,vc=37820,bc=37821,Mc=36492,Sc=36494,wc=36495,Ac=36283,Ec=36284,vo=36285,Tc=36286;var La=2300,fl=2301,il=2302,bu=2303,Mu=2400,Su=2401,wu=2402;var df=3200;var bo=0,ff=1,Ki="",dn="srgb",Da="srgb-linear",Na="linear",Ye="srgb";var sl=7680;var pf=519,mf=512,gf=513,yf=514,kc=515,_f=516,xf=517,Rc=518,vf=519,bf=35044;var Ju="300 es",Vi=2e3,Br=2001;function Tm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function km(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mf(){let n=Ua("canvas");return n.style.display="block",n}var ad={},Vr=null;function ju(...n){let t="THREE."+n.shift();Vr?Vr("log",t,...n):console.log(t,...n)}function Sf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function me(...n){n=Sf(n);let t="THREE."+n.shift();if(Vr)Vr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ye(...n){n=Sf(n);let t="THREE."+n.shift();if(Vr)Vr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function rr(...n){let t=n.join(" ");t in ad||(ad[t]=!0,me(...n))}function wf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Af={[rl]:al,[ol]:ul,[ll]:hl,[zr]:cl,[al]:rl,[ul]:ol,[hl]:ll,[cl]:zr},Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=1234567,Fr=Math.PI/180,Gr=180/Math.PI;function fr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xn[n&255]+Xn[n>>8&255]+Xn[n>>16&255]+Xn[n>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[e&63|128]+Xn[e>>8&255]+"-"+Xn[e>>16&255]+Xn[e>>24&255]+Xn[i&255]+Xn[i>>8&255]+Xn[i>>16&255]+Xn[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function Qu(n,t){return(n%t+t)%t}function Rm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Cm(n,t,e){return n!==t?(e-n)/(t-n):0}function Ca(n,t,e){return(1-e)*n+e*t}function Pm(n,t,e,i){return Ca(n,t,1-Math.exp(-e*i))}function Im(n,t=1){return t-Math.abs(Qu(n,t*2)-t)}function Lm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Dm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Nm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Um(n,t){return n+Math.random()*(t-n)}function Fm(n){return n*(.5-Math.random())}function Om(n){n!==void 0&&(od=n);let t=od+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zm(n){return n*Fr}function Bm(n){return n*Gr}function Vm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Gm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wm(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ur(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var th={DEG2RAD:Fr,RAD2DEG:Gr,generateUUID:fr,clamp:Te,euclideanModulo:Qu,mapLinear:Rm,inverseLerp:Cm,lerp:Ca,damp:Pm,pingpong:Im,smoothstep:Lm,smootherstep:Dm,randInt:Nm,randFloat:Um,randFloatSpread:Fm,seededRandom:Om,degToRad:zm,radToDeg:Bm,isPowerOfTwo:Vm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Wm,normalize:Qn,denormalize:Ur},ah=class ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;var kt=ah,Bn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oh=class oh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ld.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;var C=oh,Kc=new C,ld=new Bn,lh=class lh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],M=s[1],T=s[4],b=s[7],A=s[2],x=s[5],E=s[8];return r[0]=a*y+o*M+l*A,r[3]=a*m+o*T+l*x,r[6]=a*p+o*b+l*E,r[1]=c*y+u*M+d*A,r[4]=c*m+u*T+d*x,r[7]=c*p+u*b+d*E,r[2]=h*y+f*M+g*A,r[5]=h*m+f*T+g*x,r[8]=h*p+f*b+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var be=lh,$c=new be,cd=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xm(){let n={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ye&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(s.r=Or(s.r),s.g=Or(s.g),s.b=Or(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Da]:{primaries:t,whitePoint:i,transfer:Na,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:i,transfer:Ye,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}var Ie=Xm();function Ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mr,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Mr===void 0&&(Mr=Ua("canvas")),Mr.width=t.width,Mr.height=t.height;let s=Mr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Mr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ua("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ms(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ms(e[i]/255)*255):e[i]=Ms(e[i]);return{data:e,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ym=0,Hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}var qm=0,jc=new C,ti=class n extends Gi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ns,s=ns,r=Sn,a=Ri,o=Pi,l=hi,c=n.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=fr(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Wu;ti.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,b=(f+1)/2,A=(p+1)/2,x=(u+h)/4,E=(d+y)/4,v=(g+m)/4;return T>b&&T>A?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=x/i,r=E/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=x/s,r=v/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=v/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var on=ch,ml=class extends Gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new ti(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends ml{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fa=class extends ti{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends ti{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zl=class zl{constructor(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m)}set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Sr.setFromMatrixColumn(t,0).length(),r=1/Sr.setFromMatrixColumn(t,1).length(),a=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,y=c*d;e[0]=h+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-y*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zm,t,Km)}lookAt(t,e,i){let s=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Ls.crossVectors(i,gi),Ls.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Ls.crossVectors(i,gi)),Ls.normalize(),Co.crossVectors(gi,Ls),s[0]=Ls.x,s[4]=Co.x,s[8]=gi.x,s[1]=Ls.y,s[5]=Co.y,s[9]=gi.y,s[2]=Ls.z,s[6]=Co.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],M=i[3],T=i[7],b=i[11],A=i[15],x=s[0],E=s[4],v=s[8],w=s[12],P=s[1],N=s[5],F=s[9],G=s[13],L=s[2],z=s[6],X=s[10],j=s[14],ut=s[3],V=s[7],Y=s[11],K=s[15];return r[0]=a*x+o*P+l*L+c*ut,r[4]=a*E+o*N+l*z+c*V,r[8]=a*v+o*F+l*X+c*Y,r[12]=a*w+o*G+l*j+c*K,r[1]=u*x+d*P+h*L+f*ut,r[5]=u*E+d*N+h*z+f*V,r[9]=u*v+d*F+h*X+f*Y,r[13]=u*w+d*G+h*j+f*K,r[2]=g*x+y*P+m*L+p*ut,r[6]=g*E+y*N+m*z+p*V,r[10]=g*v+y*F+m*X+p*Y,r[14]=g*w+y*G+m*j+p*K,r[3]=M*x+T*P+b*L+A*ut,r[7]=M*E+T*N+b*z+A*V,r[11]=M*v+T*F+b*X+A*Y,r[15]=M*w+T*G+b*j+A*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],M=l*f-c*h,T=o*f-c*d,b=o*h-l*d,A=a*f-c*u,x=a*h-l*u,E=a*d-o*u;return e*(y*M-m*T+p*b)-i*(g*M-m*A+p*x)+s*(g*T-y*A+p*E)-r*(g*b-y*x+m*E)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],M=e*o-i*a,T=e*l-s*a,b=e*c-r*a,A=i*l-s*o,x=i*c-r*o,E=s*c-r*l,v=u*y-d*g,w=u*m-h*g,P=u*p-f*g,N=d*m-h*y,F=d*p-f*y,G=h*p-f*m,L=M*G-T*F+b*N+A*P-x*w+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(o*G-l*F+c*N)*z,t[1]=(s*F-i*G-r*N)*z,t[2]=(y*E-m*x+p*A)*z,t[3]=(h*x-d*E-f*A)*z,t[4]=(l*P-a*G-c*w)*z,t[5]=(e*G-s*P+r*w)*z,t[6]=(m*b-g*E-p*T)*z,t[7]=(u*E-h*b+f*T)*z,t[8]=(a*F-o*P+c*v)*z,t[9]=(i*P-e*F-r*v)*z,t[10]=(g*x-y*b+p*M)*z,t[11]=(d*b-u*x-f*M)*z,t[12]=(o*w-a*N-l*v)*z,t[13]=(e*N-i*w+s*v)*z,t[14]=(y*T-g*A-m*M)*z,t[15]=(u*A-d*T+h*M)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,y=a*u,m=a*d,p=o*d,M=l*c,T=l*u,b=l*d,A=i.x,x=i.y,E=i.z;return s[0]=(1-(y+p))*A,s[1]=(f+b)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(f-b)*x,s[5]=(1-(h+p))*x,s[6]=(m+M)*x,s[7]=0,s[8]=(g+T)*E,s[9]=(m-M)*E,s[10]=(1-(h+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Sr.set(s[0],s[1],s[2]).length(),o=Sr.set(s[4],s[5],s[6]).length(),l=Sr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Oi.copy(this);let c=1/a,u=1/o,d=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=d,Oi.elements[9]*=d,Oi.elements[10]*=d,e.setFromRotationMatrix(Oi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Vi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Vi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Br)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Vi,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Vi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Br)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};zl.prototype.isMatrix4=!0;var He=zl,Sr=new C,Oi=new He,Zm=new C(0,0,0),Km=new C(1,1,1),Ls=new C,Co=new C,gi=new C,hd=new He,dd=new Bn,ss=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dd.setFromEuler(this),this.setFromQuaternion(dd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$m=0,fd=new C,wr=new Bn,gs=new He,Po=new C,Ma=new C,Jm=new C,jm=new Bn,pd=new C(1,0,0),md=new C(0,1,0),gd=new C(0,0,1),yd={type:"added"},Qm={type:"removed"},Ar={type:"childadded",child:null},Qc={type:"childremoved",child:null},ln=class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new ss,i=new Bn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new be}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(pd,t)}rotateY(t){return this.rotateOnAxis(md,t)}rotateZ(t){return this.rotateOnAxis(gd,t)}translateOnAxis(t,e){return fd.copy(t).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pd,t)}translateY(t){return this.translateOnAxis(md,t)}translateZ(t){return this.translateOnAxis(gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Po.copy(t):Po.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(Ma,Po,this.up):gs.lookAt(Po,Ma,this.up),this.quaternion.setFromRotationMatrix(gs),s&&(gs.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(gs),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yd),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qm),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gs.multiply(t.parent.matrixWorld)),t.applyMatrix4(gs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yd),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,t,Jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ln.DEFAULT_UP=new C(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Io={h:0,s:0,l:0};function tu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ie.workingColorSpace){if(t=Qu(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=tu(a,r,t+1/3),this.g=tu(a,r,t),this.b=tu(a,r,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=dn){function i(r){r!==void 0&&parseFloat(r)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){let i=Ef[t.toLowerCase()];return i!==void 0?this.setHex(i,e):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Ie.workingToColorSpace(Yn.copy(this),t),Math.round(Te(Yn.r*255,0,255))*65536+Math.round(Te(Yn.g*255,0,255))*256+Math.round(Te(Yn.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(Yn.copy(this),e);let i=Yn.r,s=Yn.g,r=Yn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(Yn.copy(this),e),t.r=Yn.r,t.g=Yn.g,t.b=Yn.b,t}getStyle(t=dn){Ie.workingToColorSpace(Yn.copy(this),t);let e=Yn.r,i=Yn.g,s=Yn.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(Io);let i=Ca(Ds.h,Io.h,e),s=Ca(Ds.s,Io.s,e),r=Ca(Ds.l,Io.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yn=new le;le.NAMES=Ef;var ar=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zi=new C,ys=new C,eu=new C,_s=new C,Er=new C,Tr=new C,_d=new C,nu=new C,iu=new C,su=new C,ru=new on,au=new on,ou=new on,bs=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),zi.subVectors(t,e),s.cross(zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){zi.subVectors(s,e),ys.subVectors(i,e),eu.subVectors(t,e);let a=zi.dot(zi),o=zi.dot(ys),l=zi.dot(eu),c=ys.dot(ys),u=ys.dot(eu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(a,_s.y),l.addScaledVector(o,_s.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ru.setScalar(0),au.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(t,e),au.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ru,r.x),a.addScaledVector(au,r.y),a.addScaledVector(ou,r.z),a}static isFrontFacing(t,e,i,s){return zi.subVectors(i,e),ys.subVectors(t,e),zi.cross(ys).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),zi.cross(ys).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Er.subVectors(s,i),Tr.subVectors(r,i),nu.subVectors(t,i);let l=Er.dot(nu),c=Tr.dot(nu);if(l<=0&&c<=0)return e.copy(i);iu.subVectors(t,s);let u=Er.dot(iu),d=Tr.dot(iu);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Er,a);su.subVectors(t,r);let f=Er.dot(su),g=Tr.dot(su);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Tr,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return _d.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(_d,o);let p=1/(m+y+h);return a=y*p,o=h*p,e.copy(i).addScaledVector(Er,a).addScaledVector(Tr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bi):Bi.fromBufferAttribute(r,a),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sa),Do.subVectors(this.max,Sa),kr.subVectors(t.a,Sa),Rr.subVectors(t.b,Sa),Cr.subVectors(t.c,Sa),Ns.subVectors(Rr,kr),Us.subVectors(Cr,Rr),tr.subVectors(kr,Cr);let e=[0,-Ns.z,Ns.y,0,-Us.z,Us.y,0,-tr.z,tr.y,Ns.z,0,-Ns.x,Us.z,0,-Us.x,tr.z,0,-tr.x,-Ns.y,Ns.x,0,-Us.y,Us.x,0,-tr.y,tr.x,0];return!lu(e,kr,Rr,Cr,Do)||(e=[1,0,0,0,1,0,0,0,1],!lu(e,kr,Rr,Cr,Do))?!1:(No.crossVectors(Ns,Us),e=[No.x,No.y,No.z],lu(e,kr,Rr,Cr,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xs=[new C,new C,new C,new C,new C,new C,new C,new C],Bi=new C,Lo=new qn,kr=new C,Rr=new C,Cr=new C,Ns=new C,Us=new C,tr=new C,Sa=new C,Do=new C,No=new C,er=new C;function lu(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){er.fromArray(n,r);let o=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),l=t.dot(er),c=e.dot(er),u=i.dot(er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Cn=new C,Uo=new kt,e0=0,pn=class extends Gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bf,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix3(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),i=Qn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),i=Qn(i,this.array),s=Qn(s,this.array),r=Qn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Oa=class extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var za=class extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ze=class extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}},n0=new qn,wa=new C,cu=new C,Ss=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):n0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wa.subVectors(t,this.center);let e=wa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wa.copy(t.center).add(cu)),this.expandByPoint(wa.copy(t.center).sub(cu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},i0=0,ki=new He,uu=new ln,Pr=new C,yi=new qn,Aa=new qn,Fn=new C,_n=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?za:Oa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new be().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ki.makeRotationFromQuaternion(t),this.applyMatrix4(ki),this}rotateX(t){return ki.makeRotationX(t),this.applyMatrix4(ki),this}rotateY(t){return ki.makeRotationY(t),this.applyMatrix4(ki),this}rotateZ(t){return ki.makeRotationZ(t),this.applyMatrix4(ki),this}translate(t,e,i){return ki.makeTranslation(t,e,i),this.applyMatrix4(ki),this}scale(t,e,i){return ki.makeScale(t,e,i),this.applyMatrix4(ki),this}lookAt(t){return uu.lookAt(t),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];yi.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Fn.addVectors(yi.min,Aa.min),yi.expandByPoint(Fn),Fn.addVectors(yi.max,Aa.max),yi.expandByPoint(Fn)):(yi.expandByPoint(Aa.min),yi.expandByPoint(Aa.max))}yi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Fn.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(t,c),Fn.add(Pr)),s=Math.max(s,i.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new pn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new C,l[v]=new C;let c=new C,u=new C,d=new C,h=new kt,f=new kt,g=new kt,y=new C,m=new C;function p(v,w,P){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,P),h.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),o[v].add(y),o[w].add(y),o[P].add(y),l[v].add(m),l[w].add(m),l[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,w=M.length;v<w;++v){let P=M[v],N=P.start,F=P.count;for(let G=N,L=N+F;G<L;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let T=new C,b=new C,A=new C,x=new C;function E(v){A.fromBufferAttribute(s,v),x.copy(A);let w=o[v];T.copy(w),T.sub(A.multiplyScalar(A.dot(w))).normalize(),b.crossVectors(x,w);let N=b.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,N)}for(let v=0,w=M.length;v<w;++v){let P=M[v],N=P.start,F=P.count;for(let G=N,L=N+F;G<L;G+=3)E(t.getX(G+0)),E(t.getX(G+1)),E(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fn.fromBufferAttribute(t,e),Fn.normalize(),t.setXYZ(e,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new pn(h,u,d)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hu=new C,s0=new C,r0=new be,_i=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=hu.subVectors(i,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(hu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||r0.getNormalMatrix(t),s=this.coplanarPoint(hu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},a0=0,Hi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=sa,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Fu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new _i().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vs=new C,du=new C,Fo=new C,Oo=new C,Os=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,e),vs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){du.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(du);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Fo),o=Oo.dot(this.direction),l=-Oo.dot(Fo),c=Oo.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(du).addScaledVector(Fo,h),f}intersectSphere(t,e){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,M=i.y-a.y,T=i.z-a.z,b=Math.abs(l),A=Math.abs(c),x=Math.abs(u),E,v,w,P,N,F,G,L,z,X,j,ut;if(b>=A&&b>=x?(w=l,F=d,z=g,ut=p,l>=0?(E=c,v=u,P=h,N=f,G=y,L=m,X=M,j=T):(E=u,v=c,P=f,N=h,G=m,L=y,X=T,j=M)):A>=x?(w=c,F=h,z=y,ut=M,c>=0?(E=u,v=l,P=f,N=d,G=m,L=g,X=T,j=p):(E=l,v=u,P=d,N=f,G=g,L=m,X=p,j=T)):(w=u,F=f,z=m,ut=T,u>=0?(E=l,v=c,P=d,N=h,G=g,L=y,X=p,j=M):(E=c,v=l,P=h,N=d,G=y,L=g,X=M,j=p)),w===0)return null;let V=E/w,Y=v/w,K=1/w,Dt=P-V*F,St=N-Y*F,Gt=G-V*z,Xt=L-Y*z,Ut=X-V*ut,et=j-Y*ut,at=Ut*Xt-et*Gt,It=Dt*et-St*Ut,qt=Gt*St-Xt*Dt;if(s){if(at<0||It<0||qt<0)return null}else if((at<0||It<0||qt<0)&&(at>0||It>0||qt>0))return null;let Pt=at+It+qt;if(Pt===0)return null;let Rt=K*(at*F+It*z+qt*ut);return(Pt>0?Rt<0:Rt>0)?null:this.at(Rt/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xd=new He,nr=new Os,zo=new Ss,vd=new C,Bo=new C,Vo=new C,Go=new C,fu=new C,Ho=new C,bd=new C,Wo=new C,Ct=class extends ln{constructor(t=new _n,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(fu.fromBufferAttribute(d,t),a?Ho.addScaledVector(fu,u):Ho.addScaledVector(fu.sub(e),u))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),nr.copy(t.ray).recast(t.near),!(zo.containsPoint(nr.origin)===!1&&(nr.intersectSphere(zo,vd)===null||nr.origin.distanceToSquared(vd)>(t.far-t.near)**2))&&(xd.copy(r).invert(),nr.copy(t.ray).applyMatrix4(xd),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,nr)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){let x=o.getX(b),E=o.getX(b+1),v=o.getX(b+2);s=Xo(this,p,t,i,c,u,d,x,E,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=o.getX(m),T=o.getX(m+1),b=o.getX(m+2);s=Xo(this,a,t,i,c,u,d,M,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,A=T;b<A;b+=3){let x=b,E=b+1,v=b+2;s=Xo(this,p,t,i,c,u,d,x,E,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,T=m+1,b=m+2;s=Xo(this,a,t,i,c,u,d,M,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function o0(n,t,e,i,s,r,a,o){let l;if(t.side===Vn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Xs,o),l===null)return null;Wo.copy(o),Wo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Wo);return c<e.near||c>e.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Bo),n.getVertexPosition(l,Vo),n.getVertexPosition(c,Go);let u=o0(n,t,e,i,Bo,Vo,Go,bd);if(u){let d=new C;bs.getBarycoord(bd,Bo,Vo,Go,d),s&&(u.uv=bs.getInterpolatedAttribute(s,o,l,c,d,new kt)),r&&(u.uv1=bs.getInterpolatedAttribute(r,o,l,c,d,new kt)),a&&(u.normal=bs.getInterpolatedAttribute(a,o,l,c,d,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new C,materialIndex:0};bs.getNormal(Bo,Vo,Go,h.normal),u.face=h,u.barycoord=d}return u}var Ba=class extends ti{constructor(t=null,e=1,i=1,s,r,a,o,l,c=On,u=On,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yr=class extends pn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ir=new He,Md=new He,Yo=[],Sd=new qn,l0=new He,Ea=new Ct,Ta=new Ss,ws=class extends Ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,l0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ir),Sd.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(Sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ir),Ta.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(i),t.ray.intersectsSphere(Ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ir),Md.multiplyMatrices(i,Ir),Ea.matrixWorld=Md,Ea.raycast(t,Yo);for(let a=0,o=Yo.length;a<o;a++){let l=Yo[a];l.instanceId=r,l.object=this,e.push(l)}Yo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ba(new Float32Array(s*this.count),s,this.count,Zl,Ci));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ir=new Ss,c0=new kt(.5,.5),qo=new C,qr=class{constructor(t=new _i,e=new _i,i=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],T=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,p-g,A-M).normalize(),s[1].setComponents(c+a,f+u,p+g,A+M).normalize(),s[2].setComponents(c+o,f+d,p+y,A+T).normalize(),s[3].setComponents(c-o,f-d,p-y,A-T).normalize(),i)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,f-h,p-m,A-b).normalize();else if(s[4].setComponents(c-l,f-h,p-m,A-b).normalize(),e===Vi)s[5].setComponents(c+l,f+h,p+m,A+b).normalize();else if(e===Br)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){ir.center.set(0,0,0);let e=c0.distanceTo(t.center);return ir.radius=.7071067811865476+e,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(qo.x=s.normal.x>0?t.max.x:t.min.x,qo.y=s.normal.y>0?t.max.y:t.min.y,qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zr=class extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yl=new C,_l=new C,wd=new He,ka=new Os,Zo=new Ss,pu=new C,Ad=new C,xl=class extends ln{constructor(t=new _n,e=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)yl.fromBufferAttribute(e,s-1),_l.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=yl.distanceTo(_l);t.setAttribute("lineDistance",new ze(i,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;wd.copy(s).invert(),ka.copy(t.ray).applyMatrix4(wd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=u.getX(y),M=u.getX(y+1),T=Ko(this,t,ka,l,p,M,y);T&&e.push(T)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(f),p=Ko(this,t,ka,l,y,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=Ko(this,t,ka,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=Ko(this,t,ka,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ko(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(yl.fromBufferAttribute(o,s),_l.fromBufferAttribute(o,r),e.distanceSqToSegment(yl,_l,pu,Ad)>i)return;pu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(pu);if(!(c<t.near||c>t.far))return{distance:c,point:Ad.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Ed=new C,Td=new C,Va=class extends xl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ed.fromBufferAttribute(e,s),Td.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ed.distanceTo(Td);t.setAttribute("lineDistance",new ze(i,1))}else me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ga=class extends ti{constructor(t=[],e=Ys,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wi=class extends ti{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zs=class extends ti{constructor(t,e,i=qi,s,r,a,o=On,l=On,c,u=is,d=1){if(u!==is&&u!==qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},vl=class extends zs{constructor(t,e=qi,i=Ys,s,r,a=On,o=On,l,c=is){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ha=class extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xn=class n extends _n{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function g(y,m,p,M,T,b,A,x,E,v,w){let P=b/E,N=A/v,F=b/2,G=A/2,L=x/2,z=E+1,X=v+1,j=0,ut=0,V=new C;for(let Y=0;Y<X;Y++){let K=Y*N-G;for(let Dt=0;Dt<z;Dt++){let St=Dt*P-F;V[y]=St*M,V[m]=K*T,V[p]=L,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=x>0?1:-1,u.push(V.x,V.y,V.z),d.push(Dt/E),d.push(1-Y/v),j+=1}}for(let Y=0;Y<v;Y++)for(let K=0;K<E;K++){let Dt=h+K+z*Y,St=h+K+z*(Y+1),Gt=h+(K+1)+z*(Y+1),Xt=h+(K+1)+z*Y;l.push(Dt,St,Xt),l.push(St,Gt,Xt),ut+=6}o.addGroup(f,ut,w),f+=ut,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Kr=class n extends _n{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=i*2+r,y=s+1,m=new C,p=new C;for(let M=0;M<=g;M++){let T=0,b=0,A=0,x=0;if(M<=i){let w=M/i,P=w*Math.PI/2;b=-u-t*Math.cos(P),A=t*Math.sin(P),x=-t*Math.cos(P),T=w*d}else if(M<=i+r){let w=(M-i)/r;b=-u+w*e,A=t,x=0,T=d+w*h}else{let w=(M-i-r)/i,P=w*Math.PI/2;b=u+t*Math.sin(P),A=t*Math.cos(P),x=t*Math.sin(P),T=d+h+w*d}let E=Math.max(0,Math.min(1,T/f)),v=0;M===0?v=.5/s:M===g&&(v=-.5/s);for(let w=0;w<=s;w++){let P=w/s,N=P*Math.PI*2,F=Math.sin(N),G=Math.cos(N);p.x=-A*G,p.y=b,p.z=A*F,o.push(p.x,p.y,p.z),m.set(-A*G,x,A*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+v,E)}if(M>0){let w=(M-1)*y;for(let P=0;P<s;P++){let N=w+P,F=w+P+1,G=M*y+P,L=M*y+P+1;a.push(N,F,G),a.push(F,L,G)}}}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var $r=class n extends _n{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,y=[],m=i/2,p=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function M(){let b=new C,A=new C,x=0,E=(e-t)/i;for(let v=0;v<=r;v++){let w=[],P=v/r,N=P*(e-t)+t;for(let F=0;F<=s;F++){let G=F/s,L=G*l+o,z=Math.sin(L),X=Math.cos(L);A.x=N*z,A.y=-P*i+m,A.z=N*X,d.push(A.x,A.y,A.z),b.set(z,E,X).normalize(),h.push(b.x,b.y,b.z),f.push(G,1-P),w.push(g++)}y.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let P=y[w][v],N=y[w+1][v],F=y[w+1][v+1],G=y[w][v+1];(t>0||w!==0)&&(u.push(P,N,G),x+=3),(e>0||w!==r-1)&&(u.push(N,F,G),x+=3)}c.addGroup(p,x,0),p+=x}function T(b){let A=g,x=new kt,E=new C,v=0,w=b===!0?t:e,P=b===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let L=F/s*l+o,z=Math.cos(L),X=Math.sin(L);E.x=w*X,E.y=m*P,E.z=w*z,d.push(E.x,E.y,E.z),h.push(0,P,0),x.x=z*.5+.5,x.y=X*.5*P+.5,f.push(x.x,x.y),g++}for(let F=0;F<s;F++){let G=A+F,L=N+F;b===!0?u.push(L,L+1,G):u.push(L+1,L,G),v+=3}c.addGroup(p,v,b===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wa=class n extends $r{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $o=new C,Jo=new C,mu=new C,jo=new bs,Xa=class extends _n{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Fr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:p}=jo;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),jo.getNormal(mu),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){let T=(M+1)%3,b=d[M],A=d[T],x=jo[u[M]],E=jo[u[T]],v=`${b}_${A}`,w=`${A}_${b}`;w in h&&h[w]?(mu.dot(h[w].normal)<=r&&(f.push(x.x,x.y,x.z),f.push(E.x,E.y,E.z)),h[w]=null):v in h||(h[v]={index0:c[M],index1:c[T],normal:mu.clone()})}}for(let g in h)if(h[g]){let{index0:y,index1:m}=h[g];$o.fromBufferAttribute(o,y),Jo.fromBufferAttribute(o,m),f.push($o.x,$o.y,$o.z),f.push(Jo.x,Jo.y,Jo.z)}this.setAttribute("position",new ze(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new kt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new He;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Jr=class extends vi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new kt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends Jr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var kd=new C,Rd=new C,gu=new eh,yu=new eh,_u=new eh,rs=class extends vi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Rd.subVectors(s[0],s[1]).add(s[0]),c=Rd);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(kd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=kd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),gu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,y,m),yu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,y,m),_u.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(gu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),yu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_u.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(gu.calc(l),yu.calc(l),_u.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cd(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function u0(n,t){let e=1-n;return e*e*t}function h0(n,t){return 2*(1-n)*n*t}function d0(n,t){return n*n*t}function Pa(n,t,e,i){return u0(n,t)+h0(n,e)+d0(n,i)}function f0(n,t){let e=1-n;return e*e*e*t}function p0(n,t){let e=1-n;return 3*e*e*n*t}function m0(n,t){return 3*(1-n)*n*n*t}function g0(n,t){return n*n*n*t}function Ia(n,t,e,i,s){return f0(n,t)+p0(n,e)+m0(n,i)+g0(n,s)}var Ya=class extends vi{constructor(t=new kt,e=new kt,i=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new kt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ia(t,s.x,r.x,a.x,o.x),Ia(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends vi{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ia(t,s.x,r.x,a.x,o.x),Ia(t,s.y,r.y,a.y,o.y),Ia(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends vi{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},or=class extends vi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends vi{constructor(t=new kt,e=new kt,i=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new kt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Pa(t,s.x,r.x,a.x),Pa(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lr=class extends vi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Pa(t,s.x,r.x,a.x),Pa(t,s.y,r.y,a.y),Pa(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Cd(o,l.x,c.x,u.x,d.x),Cd(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new kt().fromArray(s))}return this}},Sl=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:rs,CubicBezierCurve:Ya,CubicBezierCurve3:Ml,EllipseCurve:Jr,LineCurve:qa,LineCurve3:or,QuadraticBezierCurve:Za,QuadraticBezierCurve3:lr,SplineCurve:Ka}),jr=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Sl[s.type]().fromJSON(s))}return this}},as=class extends jr{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new qa(this.currentPoint.clone(),new kt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Za(this.currentPoint.clone(),new kt(t,e),new kt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Ya(this.currentPoint.clone(),new kt(t,e),new kt(i,s),new kt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ka(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Jr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xi=class extends as{constructor(t){super(t),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new as().fromJSON(s))}return this}};function y0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Tf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=M0(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=n[h],g=n[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return $a(r,a,e,o,l,c,0),a}function Tf(n,t,e,i,s){let r;if(s===L0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Pd(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Pd(a/i|0,n[a],n[a+1],r);return r&&Qr(r,r.next)&&(ja(r),r=r.next),r}function cr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Qr(e,e.next)||fn(e.prev,e,e.next)===0)){if(ja(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function $a(n,t,e,i,s,r,a){if(!n)return;!a&&r&&T0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?x0(n,i,s,r):_0(n)){t.push(l.i,n.i,c.i),ja(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=v0(cr(n),t),$a(n,t,e,i,s,r,2)):a===2&&b0(n,t,e,i,s,r):$a(cr(n),t,e,i,s,r,1);break}}}function _0(n){let t=n.prev,e=n,i=n.next;if(fn(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Ra(s,o,r,l,a,c,g.x,g.y)&&fn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function x0(n,t,e,i){let s=n.prev,r=n,a=n.next;if(fn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),y=Math.max(o,l,c),m=Math.max(u,d,h),p=Au(f,g,t,e,i),M=Au(y,m,t,e,i),T=n.prevZ,b=n.nextZ;for(;T&&T.z>=p&&b&&b.z<=M;){if(T.x>=f&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ra(o,u,l,d,c,h,T.x,T.y)&&fn(T.prev,T,T.next)>=0||(T=T.prevZ,b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ra(o,u,l,d,c,h,b.x,b.y)&&fn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Ra(o,u,l,d,c,h,T.x,T.y)&&fn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;b&&b.z<=M;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ra(o,u,l,d,c,h,b.x,b.y)&&fn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function v0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Qr(i,s)&&Rf(i,e,e.next,s)&&Ja(i,s)&&Ja(s,i)&&(t.push(i.i,e.i,s.i),ja(e),ja(e.next),e=n=s),e=e.next}while(e!==n);return cr(e)}function b0(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&C0(a,o)){let l=Cf(a,o);a=cr(a,a.next),l=cr(l,l.next),$a(a,t,e,i,s,r,0),$a(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function M0(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Tf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(R0(c))}s.sort(S0);for(let r=0;r<s.length;r++)e=w0(s[r],e);return e}function S0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function w0(n,t){let e=A0(n,t);if(!e)return t;let i=Cf(e,n);return cr(i,i.next),cr(e,e.next)}function A0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Qr(n,e))return e;do{if(Qr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&kf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Ja(e,n)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&E0(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function E0(n,t){return fn(n.prev,n,t.prev)<0&&fn(t.next,n,n.next)<0}function T0(n,t,e,i){let s=n;do s.z===0&&(s.z=Au(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,k0(s)}function k0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Au(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function R0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function kf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ra(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&kf(n,t,e,i,s,r,a,o)}function C0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!P0(n,t)&&(Ja(n,t)&&Ja(t,n)&&I0(n,t)&&(fn(n.prev,n,t.prev)||fn(n,t.prev,t))||Qr(n,t)&&fn(n.prev,n,n.next)>0&&fn(t.prev,t,t.next)>0)}function fn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Qr(n,t){return n.x===t.x&&n.y===t.y}function Rf(n,t,e,i){let s=tl(fn(n,t,e)),r=tl(fn(n,t,i)),a=tl(fn(e,i,n)),o=tl(fn(e,i,t));return!!(s!==r&&a!==o||s===0&&Qo(n,e,t)||r===0&&Qo(n,i,t)||a===0&&Qo(e,n,i)||o===0&&Qo(e,t,i))}function Qo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function tl(n){return n>0?1:n<0?-1:0}function P0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Rf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ja(n,t){return fn(n.prev,n,n.next)<0?fn(n,t,n.next)>=0&&fn(n,n.prev,t)>=0:fn(n,t,n.prev)<0||fn(n,n.next,t)<0}function I0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Cf(n,t){let e=Eu(n.i,n.x,n.y),i=Eu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Pd(n,t,e,i){let s=Eu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ja(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Tu=class{static triangulate(t,e,i=2){return y0(t,e,i)}},sr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Id(t),Ld(i,t);let a=t.length;e.forEach(Id);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ld(i,e[l]);let o=Tu.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Id(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ld(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var os=class n extends _n{constructor(t=new Xi([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:D0,T,b=!1,A,x,E,v;if(p){T=p.getSpacedPoints(u),b=!0,h=!1;let lt=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,lt),x=new C,E=new C,v=new C}h||(m=0,f=0,g=0,y=0);let w=o.extractPoints(c),P=w.shape,N=w.holes;if(!sr.isClockWise(P)){P=P.reverse();for(let lt=0,ft=N.length;lt<ft;lt++){let xt=N[lt];sr.isClockWise(xt)&&(N[lt]=xt.reverse())}}function G(lt){let xt=10000000000000001e-36,_t=lt[0];for(let Et=1;Et<=lt.length;Et++){let Zt=Et%lt.length,Bt=lt[Zt],Kt=Bt.x-_t.x,se=Bt.y-_t.y,D=Kt*Kt+se*se,we=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(_t.x),Math.abs(_t.y)),oe=xt*we*we;if(D<=oe){lt.splice(Zt,1),Et--;continue}_t=Bt}}G(P),N.forEach(G);let L=N.length,z=P;for(let lt=0;lt<L;lt++){let ft=N[lt];P=P.concat(ft)}function X(lt,ft,xt){return ft||ye("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(ft,xt)}let j=P.length;function ut(lt,ft,xt){let _t,Et,Zt,Bt=lt.x-ft.x,Kt=lt.y-ft.y,se=xt.x-lt.x,D=xt.y-lt.y,we=Bt*Bt+Kt*Kt,oe=Bt*D-Kt*se;if(Math.abs(oe)>Number.EPSILON){let k=Math.sqrt(we),_=Math.sqrt(se*se+D*D),B=ft.x-Kt/k,q=ft.y+Bt/k,it=xt.x-D/_,Mt=xt.y+se/_,Lt=((it-B)*D-(Mt-q)*se)/(Bt*D-Kt*se);_t=B+Bt*Lt-lt.x,Et=q+Kt*Lt-lt.y;let rt=_t*_t+Et*Et;if(rt<=2)return new kt(_t,Et);Zt=Math.sqrt(rt/2)}else{let k=!1;Bt>Number.EPSILON?se>Number.EPSILON&&(k=!0):Bt<-Number.EPSILON?se<-Number.EPSILON&&(k=!0):Math.sign(Kt)===Math.sign(D)&&(k=!0),k?(_t=-Kt,Et=Bt,Zt=Math.sqrt(we)):(_t=Bt,Et=Kt,Zt=Math.sqrt(we/2))}return new kt(_t/Zt,Et/Zt)}let V=[];for(let lt=0,ft=z.length,xt=ft-1,_t=lt+1;lt<ft;lt++,xt++,_t++)xt===ft&&(xt=0),_t===ft&&(_t=0),V[lt]=ut(z[lt],z[xt],z[_t]);let Y=[],K,Dt=V.concat();for(let lt=0,ft=L;lt<ft;lt++){let xt=N[lt];K=[];for(let _t=0,Et=xt.length,Zt=Et-1,Bt=_t+1;_t<Et;_t++,Zt++,Bt++)Zt===Et&&(Zt=0),Bt===Et&&(Bt=0),K[_t]=ut(xt[_t],xt[Zt],xt[Bt]);Y.push(K),Dt=Dt.concat(K)}let St;if(m===0)St=sr.triangulateShape(z,N);else{let lt=[],ft=[];for(let xt=0;xt<m;xt++){let _t=xt/m,Et=f*Math.cos(_t*Math.PI/2),Zt=g*Math.sin(_t*Math.PI/2)+y;for(let Bt=0,Kt=z.length;Bt<Kt;Bt++){let se=X(z[Bt],V[Bt],Zt);It(se.x,se.y,-Et),_t===0&&lt.push(se)}for(let Bt=0,Kt=L;Bt<Kt;Bt++){let se=N[Bt];K=Y[Bt];let D=[];for(let we=0,oe=se.length;we<oe;we++){let k=X(se[we],K[we],Zt);It(k.x,k.y,-Et),_t===0&&D.push(k)}_t===0&&ft.push(D)}}St=sr.triangulateShape(lt,ft)}let Gt=St.length,Xt=g+y;for(let lt=0;lt<j;lt++){let ft=h?X(P[lt],Dt[lt],Xt):P[lt];b?(E.copy(A.normals[0]).multiplyScalar(ft.x),x.copy(A.binormals[0]).multiplyScalar(ft.y),v.copy(T[0]).add(E).add(x),It(v.x,v.y,v.z)):It(ft.x,ft.y,0)}for(let lt=1;lt<=u;lt++)for(let ft=0;ft<j;ft++){let xt=h?X(P[ft],Dt[ft],Xt):P[ft];b?(E.copy(A.normals[lt]).multiplyScalar(xt.x),x.copy(A.binormals[lt]).multiplyScalar(xt.y),v.copy(T[lt]).add(E).add(x),It(v.x,v.y,v.z)):It(xt.x,xt.y,d/u*lt)}for(let lt=m-1;lt>=0;lt--){let ft=lt/m,xt=f*Math.cos(ft*Math.PI/2),_t=g*Math.sin(ft*Math.PI/2)+y;for(let Et=0,Zt=z.length;Et<Zt;Et++){let Bt=X(z[Et],V[Et],_t);It(Bt.x,Bt.y,d+xt)}for(let Et=0,Zt=N.length;Et<Zt;Et++){let Bt=N[Et];K=Y[Et];for(let Kt=0,se=Bt.length;Kt<se;Kt++){let D=X(Bt[Kt],K[Kt],_t);b?It(D.x,D.y+T[u-1].y,T[u-1].x+xt):It(D.x,D.y,d+xt)}}}Ut(),et();function Ut(){let lt=s.length/3;if(h){let ft=0,xt=j*ft;for(let _t=0;_t<Gt;_t++){let Et=St[_t];qt(Et[2]+xt,Et[1]+xt,Et[0]+xt)}ft=u+m*2,xt=j*ft;for(let _t=0;_t<Gt;_t++){let Et=St[_t];qt(Et[0]+xt,Et[1]+xt,Et[2]+xt)}}else{for(let ft=0;ft<Gt;ft++){let xt=St[ft];qt(xt[2],xt[1],xt[0])}for(let ft=0;ft<Gt;ft++){let xt=St[ft];qt(xt[0]+j*u,xt[1]+j*u,xt[2]+j*u)}}i.addGroup(lt,s.length/3-lt,0)}function et(){let lt=s.length/3,ft=0;at(z,ft),ft+=z.length;for(let xt=0,_t=N.length;xt<_t;xt++){let Et=N[xt];at(Et,ft),ft+=Et.length}i.addGroup(lt,s.length/3-lt,1)}function at(lt,ft){let xt=lt.length;for(;--xt>=0;){let _t=xt,Et=xt-1;Et<0&&(Et=lt.length-1);for(let Zt=0,Bt=u+m*2;Zt<Bt;Zt++){let Kt=j*Zt,se=j*(Zt+1),D=ft+_t+Kt,we=ft+Et+Kt,oe=ft+Et+se,k=ft+_t+se;Pt(D,we,oe,k)}}}function It(lt,ft,xt){l.push(lt),l.push(ft),l.push(xt)}function qt(lt,ft,xt){Rt(lt),Rt(ft),Rt(xt);let _t=s.length/3,Et=M.generateTopUV(i,s,_t-3,_t-2,_t-1);de(Et[0]),de(Et[1]),de(Et[2])}function Pt(lt,ft,xt,_t){Rt(lt),Rt(ft),Rt(_t),Rt(ft),Rt(xt),Rt(_t);let Et=s.length/3,Zt=M.generateSideWallUV(i,s,Et-6,Et-3,Et-2,Et-1);de(Zt[0]),de(Zt[1]),de(Zt[3]),de(Zt[1]),de(Zt[2]),de(Zt[3])}function Rt(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function de(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return N0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Sl[s.type]().fromJSON(s)),new n(i,t.options)}},D0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new kt(r,a),new kt(o,l),new kt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new kt(a,1-l),new kt(c,1-d),new kt(h,1-g),new kt(y,1-p)]:[new kt(o,1-l),new kt(u,1-d),new kt(f,1-g),new kt(m,1-p)]}};function N0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gn=class n extends _n{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let M=p*h-a;for(let T=0;T<c;T++){let b=T*d-r;g.push(b,-M,0),y.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let T=M+c*p,b=M+c*(p+1),A=M+1+c*(p+1),x=M+1+c*p;f.push(T,b,x),f.push(b,A,x)}this.setIndex(f),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ur=class n extends _n{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=t,h=(e-t)/s,f=new C,g=new kt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let M=p+m,T=M,b=M+i+1,A=M+i+2,x=M+1;o.push(T,b,x),o.push(b,A,x)}}this.setIndex(o),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ei=class n extends _n{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,f=new C,g=new C;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,T=(s+1)*(y-1)+m,b=(s+1)*y+m;l.push(p,M,b),l.push(M,T,b)}this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var As=class n extends _n{constructor(t=new lr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new kt,u=new C,d=[],h=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(f,2));function y(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),M(),p()}function m(T){u=t.getPointAt(T/e,u);let b=a.normals[T],A=a.binormals[T];for(let x=0;x<=s;x++){let E=x/s*Math.PI*2,v=Math.sin(E),w=-Math.cos(E);l.x=w*b.x+v*A.x,l.y=w*b.y+v*A.y,l.z=w*b.z+v*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let b=1;b<=s;b++){let A=(s+1)*(T-1)+(b-1),x=(s+1)*T+(b-1),E=(s+1)*T+b,v=(s+1)*(T-1)+b;g.push(A,x,v),g.push(x,E,v)}}function M(){for(let T=0;T<=e;T++)for(let b=0;b<=s;b++)c.x=T/e,c.y=b/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Sl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Qa=class extends Hi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new le(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function pr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Dd(s))s.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Dd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Zn(n){let t={};for(let e=0;e<n.length;e++){let i=pr(n[e]);for(let s in i)t[s]=i[s]}return t}function Dd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function U0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}var Pf={clone:pr,merge:Zn},F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=U0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(s.value);break;case"v2":this.uniforms[i].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new on().fromArray(s.value);break;case"m3":this.uniforms[i].value=new be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new He().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wl=class extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Le=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var to=class extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Al=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Lr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function xu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Bs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tl=class extends Bs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Su:r=t,o=2*e-i;break;case wu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Su:a=t,l=2*i-e;break;case wu:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,M=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,T=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+M*a[c+A]+T*a[l+A]+b*a[d+A];return r}},kl=class extends Bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Rl=class extends Bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cl=class extends Bs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*h+g*2,M=d[p],T=d[p+1],b=t*h+g*2,A=u[b],x=u[b+1],E=B0(i,e,M,A,s);r[g]=If(E,y,T,x,m)}return r}};function If(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function z0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function B0(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=If(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=z0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Mi=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lr(e,this.TimeBufferType),this.values=Lr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Lr(t.times,Array),values:Lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),xu(t.settings)&&(i.settings={inTangents:Lr(t.settings.inTangents,Array),outTangents:Lr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Cl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case La:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case il:e=this.InterpolantFactoryMethodSmooth;break;case bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return me("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;xu(this.settings)&&(Nd(this.settings.inTangents,t),Nd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ye("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ye("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&km(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ye("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===il,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[h+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,xu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=fl;var Vs=class extends Mi{constructor(t,e,i){super(t,e,i)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=La;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Mi{constructor(t,e,i,s){super(t,e,i,s)}};Pl.prototype.ValueTypeName="color";var Il=class extends Mi{constructor(t,e,i,s){super(t,e,i,s)}};Il.prototype.ValueTypeName="number";var Ll=class extends Bs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},eo=class extends Mi{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Mi{constructor(t,e,i){super(t,e,i)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=La;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Mi{constructor(t,e,i,s){super(t,e,i,s)}};Dl.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lf=new Nl,Ul=class{constructor(t){this.manager=t!==void 0?t:Lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var ta=class extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},no=class extends ta{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vu=new He,Ud=new C,Fd=new C,io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ud),Fd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(vu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Br||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(vu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},el=new C,nl=new Bn,es=new C,so=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(el,nl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,nl,es.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(el,nl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,nl,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new C,Od=new kt,zd=new kt,zn=class extends so{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z)}getViewSize(t,e){return this.getViewBounds(t,Od,zd),e.subVectors(zd,Od)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ku=class extends io{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}},ro=class extends ta{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ku}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ea=class extends so{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ru=class extends io{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ao=class extends ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Dr=-90,Nr=1,Fl=class extends ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(Dr,Nr,t,e);s.layers=this.layers,this.add(s);let r=new zn(Dr,Nr,t,e);r.layers=this.layers,this.add(r);let a=new zn(Dr,Nr,t,e);a.layers=this.layers,this.add(a);let o=new zn(Dr,Nr,t,e);o.layers=this.layers,this.add(o);let l=new zn(Dr,Nr,t,e);l.layers=this.layers,this.add(l);let c=new zn(Dr,Nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ol=class extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ih="\\[\\]\\.:\\/",V0=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",G0="[^"+ih.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",sh),W0=/(WCOD+)?/.source.replace("WCOD",G0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),q0=new RegExp("^"+H0+W0+X0+Y0+"$"),Z0=["material","materials","bones","map"],Cu=class{constructor(t,e,i){let s=i||nn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},nn=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(t){let e=q0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Z0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){me("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Cu;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var db=new Float32Array(1);var Bd=new He,oo=class{constructor(t,e,i=0,s=1/0){this.ray=new Os(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bd),this}intersectObject(t,e=!0,i=[]){return Pu(t,this,i,e),i.sort(Vd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Pu(t[s],this,i,e);return i.sort(Vd),i}};function Vd(n,t){return n.distance-t.distance}function Pu(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Pu(r[a],t,e,!0)}}var na=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var uh=class uh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};uh.prototype.isMatrix2=!0;var Iu=uh;var lo=class extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function rh(n,t,e,i){let s=K0(i);switch(e){case Ku:return n*t;case Zl:return n*t/s.components*s.byteLength;case Kl:return n*t/s.components*s.byteLength;case Zs:return n*t*2/s.components*s.byteLength;case $l:return n*t*2/s.components*s.byteLength;case $u:return n*t*3/s.components*s.byteLength;case Pi:return n*t*4/s.components*s.byteLength;case Jl:return n*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:case ec:return Math.max(n,16)*Math.max(t,8)/4;case jl:case tc:return Math.max(n,8)*Math.max(t,8)/2;case nc:case ic:case rc:case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sc:case xo:case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Mc:case Sc:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ac:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vo:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K0(n){switch(n){case hi:case Xu:return{byteLength:1,components:1};case ra:case Yu:case Zi:return{byteLength:2,components:1};case Yl:case ql:return{byteLength:2,components:4};case qi:case Xl:case Ci:return{byteLength:4,components:1};case qu:case Zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ep(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ig(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ug=`#ifdef USE_AOMAP
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
#endif`,hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dg=`#ifdef USE_BATCHING
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
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,_g=`#ifdef USE_BUMPMAP
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tg=`#define PI 3.141592653589793
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
} // validated`,kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$g=`#ifdef USE_ENVMAP
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
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
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
#endif`,ny=`uniform sampler2D dfgLUT;
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
}`,iy=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,py=`#if defined( USE_POINTS_UV )
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
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ty=`#ifdef USE_NORMALMAP
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
#endif`,ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hy=`float getShadowMask() {
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
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xy=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r_=`uniform sampler2D t2D;
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
}`,d_=`#define DISTANCE
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
}`,f_=`#define DISTANCE
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
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`uniform float scale;
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
}`,y_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#define LAMBERT
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
}`,b_=`#define LAMBERT
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
}`,M_=`#define MATCAP
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
}`,S_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,A_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,T_=`#define PHONG
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
}`,k_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
}`,C_=`#define TOON
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
}`,P_=`#define TOON
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
}`,I_=`uniform float size;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,N_=`uniform vec3 color;
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
}`,U_=`uniform float rotation;
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
}`,F_=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:sg,alphahash_pars_fragment:rg,alphamap_fragment:ag,alphamap_pars_fragment:og,alphatest_fragment:lg,alphatest_pars_fragment:cg,aomap_fragment:ug,aomap_pars_fragment:hg,batching_pars_vertex:dg,batching_vertex:fg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:yg,bumpmap_pars_fragment:_g,clipping_planes_fragment:xg,clipping_planes_pars_fragment:vg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Mg,color_fragment:Sg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Eg,common:Tg,cube_uv_reflection_fragment:kg,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Pg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Lg,colorspace_fragment:Dg,colorspace_pars_fragment:Ng,envmap_fragment:Ug,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Og,envmap_pars_vertex:zg,envmap_physical_pars_fragment:$g,envmap_vertex:Bg,fog_vertex:Vg,fog_pars_vertex:Gg,fog_fragment:Hg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:Yg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Zg,lights_pars_begin:Kg,lights_toon_fragment:Jg,lights_toon_pars_fragment:jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:ty,lights_physical_fragment:ey,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:sy,lights_fragment_end:ry,lightprobes_pars_fragment:ay,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:uy,map_fragment:hy,map_pars_fragment:dy,map_particle_fragment:fy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:yy,morphcolor_vertex:_y,morphnormal_vertex:xy,morphtarget_pars_vertex:vy,morphtarget_vertex:by,normal_fragment_begin:My,normal_fragment_maps:Sy,normal_pars_fragment:wy,normal_pars_vertex:Ay,normal_vertex:Ey,normalmap_pars_fragment:Ty,clearcoat_normal_fragment_begin:ky,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Py,opaque_fragment:Iy,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:Vy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Hy,skinbase_vertex:Wy,skinning_pars_vertex:Xy,skinning_vertex:Yy,skinnormal_vertex:qy,specularmap_fragment:Zy,specularmap_pars_fragment:Ky,tonemapping_fragment:$y,tonemapping_pars_fragment:Jy,transmission_fragment:jy,transmission_pars_fragment:Qy,uv_pars_fragment:t_,uv_pars_vertex:e_,uv_vertex:n_,worldpos_vertex:i_,background_vert:s_,background_frag:r_,backgroundCube_vert:a_,backgroundCube_frag:o_,cube_vert:l_,cube_frag:c_,depth_vert:u_,depth_frag:h_,distance_vert:d_,distance_frag:f_,equirect_vert:p_,equirect_frag:m_,linedashed_vert:g_,linedashed_frag:y_,meshbasic_vert:__,meshbasic_frag:x_,meshlambert_vert:v_,meshlambert_frag:b_,meshmatcap_vert:M_,meshmatcap_frag:S_,meshnormal_vert:w_,meshnormal_frag:A_,meshphong_vert:E_,meshphong_frag:T_,meshphysical_vert:k_,meshphysical_frag:R_,meshtoon_vert:C_,meshtoon_frag:P_,points_vert:I_,points_frag:L_,shadow_vert:D_,shadow_frag:N_,sprite_vert:U_,sprite_frag:F_},Wt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},us={basic:{uniforms:Zn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Zn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Zn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Zn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Zn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Zn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Zn([Wt.points,Wt.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Zn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Zn([Wt.common,Wt.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Zn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Zn([Wt.sprite,Wt.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Zn([Wt.common,Wt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Zn([Wt.lights,Wt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};us.physical={uniforms:Zn([us.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Cc={r:0,b:0,g:0},O_=new He,np=new be;np.set(-1,0,0,0,1,0,0,0,1);function z_(n,t,e,i,s,r){let a=new le(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let b=M.backgroundBlurriness>0;T=t.get(T,b)}return T}function g(M){let T=!1,b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),T=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,T){let b=f(T);b&&(b.isCubeTexture||b.mapping===fo)?(c===void 0&&(c=new Ct(new xn(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:pr(us.backgroundCube.uniforms),vertexShader:us.backgroundCube.vertexShader,fragmentShader:us.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(np),c.material.toneMapped=Ie.getTransfer(b.colorSpace)!==Ye,(u!==b||d!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ct(new gn(2,2),new bi({name:"BackgroundMaterial",uniforms:pr(us.background.uniforms),vertexShader:us.background.vertexShader,fragmentShader:us.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(b.colorSpace)!==Ye,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(Cc,nh(n)),e.buffers.color.setClear(Cc.r,Cc.g,Cc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function B_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(N,F,G,L,z){let X=!1,j=d(N,L,G,F);r!==j&&(r=j,c(r.object)),X=f(N,L,G,z),X&&g(N,L,G,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(N,F,G,L),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function d(N,F,G,L){let z=L.wireframe===!0,X=i[F.id];X===void 0&&(X={},i[F.id]=X);let j=N.isInstancedMesh===!0?N.id:0,ut=X[j];ut===void 0&&(ut={},X[j]=ut);let V=ut[G.id];V===void 0&&(V={},ut[G.id]=V);let Y=V[z];return Y===void 0&&(Y=h(l()),V[z]=Y),Y}function h(N){let F=[],G=[],L=[];for(let z=0;z<e;z++)F[z]=0,G[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,F,G,L){let z=r.attributes,X=F.attributes,j=0,ut=G.getAttributes();for(let V in ut)if(ut[V].location>=0){let K=z[V],Dt=X[V];if(Dt===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(Dt=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(Dt=N.instanceColor)),K===void 0||K.attribute!==Dt||Dt&&K.data!==Dt.data)return!0;j++}return r.attributesNum!==j||r.index!==L}function g(N,F,G,L){let z={},X=F.attributes,j=0,ut=G.getAttributes();for(let V in ut)if(ut[V].location>=0){let K=X[V];K===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));let Dt={};Dt.attribute=K,K&&K.data&&(Dt.data=K.data),z[V]=Dt,j++}r.attributes=z,r.attributesNum=j,r.index=L}function y(){let N=r.newAttributes;for(let F=0,G=N.length;F<G;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){let G=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;G[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),z[N]!==F&&(n.vertexAttribDivisor(N,F),z[N]=F)}function M(){let N=r.newAttributes,F=r.enabledAttributes;for(let G=0,L=F.length;G<L;G++)F[G]!==N[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function T(N,F,G,L,z,X,j){j===!0?n.vertexAttribIPointer(N,F,G,z,X):n.vertexAttribPointer(N,F,G,L,z,X)}function b(N,F,G,L){y();let z=L.attributes,X=G.getAttributes(),j=F.defaultAttributeValues;for(let ut in X){let V=X[ut];if(V.location>=0){let Y=z[ut];if(Y===void 0&&(ut==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),ut==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){let K=Y.normalized,Dt=Y.itemSize,St=t.get(Y);if(St===void 0)continue;let Gt=St.buffer,Xt=St.type,Ut=St.bytesPerElement,et=Xt===n.INT||Xt===n.UNSIGNED_INT||Y.gpuType===Xl;if(Y.isInterleavedBufferAttribute){let at=Y.data,It=at.stride,qt=Y.offset;if(at.isInstancedInterleavedBuffer){for(let Pt=0;Pt<V.locationSize;Pt++)p(V.location+Pt,at.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Pt=0;Pt<V.locationSize;Pt++)m(V.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let Pt=0;Pt<V.locationSize;Pt++)T(V.location+Pt,Dt/V.locationSize,Xt,K,It*Ut,(qt+Dt/V.locationSize*Pt)*Ut,et)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)p(V.location+at,Y.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let at=0;at<V.locationSize;at++)T(V.location+at,Dt/V.locationSize,Xt,K,Dt*Ut,Dt/V.locationSize*at*Ut,et)}}else if(j!==void 0){let K=j[ut];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(V.location,K);break;case 3:n.vertexAttrib3fv(V.location,K);break;case 4:n.vertexAttrib4fv(V.location,K);break;default:n.vertexAttrib1fv(V.location,K)}}}}M()}function A(){w();for(let N in i){let F=i[N];for(let G in F){let L=F[G];for(let z in L){let X=L[z];for(let j in X)u(X[j].object),delete X[j];delete L[z]}}delete i[N]}}function x(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let G in F){let L=F[G];for(let z in L){let X=L[z];for(let j in X)u(X[j].object),delete X[j];delete L[z]}}delete i[N.id]}function E(N){for(let F in i){let G=i[F];for(let L in G){let z=G[L];if(z[N.id]===void 0)continue;let X=z[N.id];for(let j in X)u(X[j].object),delete X[j];delete z[N.id]}}}function v(N){for(let F in i){let G=i[F],L=N.isInstancedMesh===!0?N.id:0,z=G[L];if(z!==void 0){for(let X in z){let j=z[X];for(let ut in j)u(j[ut].object),delete j[ut];delete z[X]}delete G[L],Object.keys(G).length===0&&delete i[F]}}}function w(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:x,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function V_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function G_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Pi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let v=E===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==hi&&E!==Ci&&!v&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(me("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),x=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:A,samples:x}}function H_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new _i,o=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:i,T=M*4,b=p.clippingState||null;l.value=b,b=u(g,h,T,f);for(let A=0;A!==T;++A)b[A]=e[A];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,b=f;T!==y;++T,b+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var la=4,W_=6,X_=20,Y_=256,Mo=new ea,Df=new le,hh=null,dh=0,fh=0,ph=!1,q_=new C,mr=new C,ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=q_}=r;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,dh,fh),this._renderer.xr.enabled=ph,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Zi,format:Pi,colorSpace:Da,depthBuffer:!1},s=Nf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z_(r)),this._blurMaterial=$_(r,t,e),this._ggxMaterial=K_(r,t,e)}return s}_compileMaterial(t){let e=new Ct(new _n,t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,i,s,r){let l=new zn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Df),d.toneMapping=Yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new xn,new mn({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Df),p=!0);for(let T=0;T<6;T++){let b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));let A=this._cubeSize;oa(s,b*A,T>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ys||t.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;oa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Mo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-la?i-g+la:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,oa(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,oa(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Mo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-la?s-this._lodMax+la:0),h=4*(this._cubeSize-u);oa(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Mo)}};function Z_(n){let t=[],e=[],i=n,s=n-la+1+W_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),y=new Float32Array(f*h*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,T=p>2?0:-1,b=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];g.set(b,f*h*p);for(let A=0;A<h;A++){let x=u[A*2]*2-1,E=u[A*2+1]*2-1;p===0?mr.set(1,E,x):p===1?mr.set(-x,1,-E):p===2?mr.set(-x,E,1):p===3?mr.set(-1,E,-x):p===4?mr.set(-x,-1,E):mr.set(x,E,-1),mr.toArray(y,(p*h+A)*f)}}let m=new _n;m.setAttribute("position",new pn(g,f)),m.setAttribute("outputDirection",new pn(y,f)),e.push(new Ct(m,null)),i>la&&i--}return{lodMeshes:e,sizeLods:t}}function Nf(n,t,e){let i=new ui(n,t,e);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function K_(n,t,e){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function $_(n,t,e){return new bi({name:"SphericalGaussianBlur",defines:{SAMPLES:X_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Uf(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Ff(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ic=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ga(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:ls});r.uniforms.tEquirect.value=e;let a=new Ct(s,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Sn),new Fl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function J_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Gl||f===Hl)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new Ic(g.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Gl||f===Hl,y=f===Ys||f===dr;if(g||y){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new ua(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new ua(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Gl?h.mapping=Ys:f===Hl&&(h.mapping=dr),h}function l(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function j_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&rr("WebGLRenderer: "+i+" extension not supported."),s}}}function Q_(n,t,e,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let T=0,b=M.length;T<b;T+=3){let A=M[T+0],x=M[T+1],E=M[T+2];h.push(A,x,x,E,E,A)}}else{let M=g.array;y=g.version;for(let T=0,b=M.length/3-1;T<b;T+=3){let A=T+0,x=T+1,E=T+2;h.push(A,x,x,E,E,A)}}let m=new(g.count>=65535?za:Oa)(h,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function tx(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ex(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function nx(n,t,e){let i=new WeakMap,s=new on;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let w=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let b=o.attributes.position.count*T,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let x=new Float32Array(b*A*4*d),E=new Fa(x,b,A,d);E.type=Ci,E.needsUpdate=!0;let v=T*4;for(let P=0;P<d;P++){let N=m[P],F=p[P],G=M[P],L=b*A*4*P;for(let z=0;z<N.count;z++){let X=z*v;f===!0&&(s.fromBufferAttribute(N,z),x[L+X+0]=s.x,x[L+X+1]=s.y,x[L+X+2]=s.z,x[L+X+3]=0),g===!0&&(s.fromBufferAttribute(F,z),x[L+X+4]=s.x,x[L+X+5]=s.y,x[L+X+6]=s.z,x[L+X+7]=0),y===!0&&(s.fromBufferAttribute(G,z),x[L+X+8]=s.x,x[L+X+9]=s.y,x[L+X+10]=s.z,x[L+X+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:E,size:new kt(b,A)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function ix(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var sx={[Ou]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[Vu]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[ho]:"NEUTRAL_TONE_MAPPING",[Gu]:"CUSTOM_TONE_MAPPING"};function rx(n,t,e,i,s,r){let a=new ui(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new _n;c.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ze([0,2,0,0,2,0],2));let u=new wl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(c,u),h=new ea(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,M=[],T=!1;this.setSize=function(b,A){a.setSize(b,A),o!==null&&o.setSize(b,A),l!==null&&l.setSize(b,A);for(let x=0;x<M.length;x++){let E=M[x];E.setSize&&E.setSize(b,A)}},this.setEffects=function(b){M=b,T=M.length>0&&M[0].isRenderPass===!0;let A=a.width,x=a.height;M.length>0&&o===null&&(o=new ui(A,x,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(A,x,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let v=M[E];v.setSize&&v.setSize(A,x)}},this.begin=function(b,A){if(y||b.toneMapping===Yi&&M.length===0)return!1;if(p=A,A!==null){let x=A.width,E=A.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return T===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=Yi,!0},this.hasRenderPass=function(){return T},this.end=function(b,A){b.toneMapping=m,y=!0;let x=a,E=o;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(b,E,x,A),w.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,u.defines={},Ie.getTransfer(f)===Ye&&(u.defines.SRGB_TRANSFER="");let v=sx[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(p),b.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var ip=new ti,yh=new zs(1,1),sp=new Fa,rp=new gl,ap=new Ga,Of=[],zf=[],Bf=new Float32Array(16),Vf=new Float32Array(9),Gf=new Float32Array(4);function ha(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Of[s];if(r===void 0&&(r=new Float32Array(s),Of[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function In(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Nc(n,t){let e=zf[t];e===void 0&&(e=new Int32Array(t),zf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ax(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;n.uniform2fv(this.addr,t),Ln(e,t)}}function lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(In(e,t))return;n.uniform3fv(this.addr,t),Ln(e,t)}}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;n.uniform4fv(this.addr,t),Ln(e,t)}}function ux(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(In(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ln(e,t)}else{if(In(e,i))return;Gf.set(i),n.uniformMatrix2fv(this.addr,!1,Gf),Ln(e,i)}}function hx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(In(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ln(e,t)}else{if(In(e,i))return;Vf.set(i),n.uniformMatrix3fv(this.addr,!1,Vf),Ln(e,i)}}function dx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(In(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ln(e,t)}else{if(In(e,i))return;Bf.set(i),n.uniformMatrix4fv(this.addr,!1,Bf),Ln(e,i)}}function fx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;n.uniform2iv(this.addr,t),Ln(e,t)}}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;n.uniform3iv(this.addr,t),Ln(e,t)}}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;n.uniform4iv(this.addr,t),Ln(e,t)}}function yx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;n.uniform2uiv(this.addr,t),Ln(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;n.uniform3uiv(this.addr,t),Ln(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;n.uniform4uiv(this.addr,t),Ln(e,t)}}function bx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yh.compareFunction=e.isReversedDepthBuffer()?Rc:kc,r=yh):r=ip,e.setTexture2D(t||r,s)}function Mx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||rp,s)}function Sx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ap,s)}function wx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||sp,s)}function Ax(n){switch(n){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return ux;case 35675:return hx;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return yx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return wx}}function Ex(n,t){n.uniform1fv(this.addr,t)}function Tx(n,t){let e=ha(t,this.size,2);n.uniform2fv(this.addr,e)}function kx(n,t){let e=ha(t,this.size,3);n.uniform3fv(this.addr,e)}function Rx(n,t){let e=ha(t,this.size,4);n.uniform4fv(this.addr,e)}function Cx(n,t){let e=ha(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Px(n,t){let e=ha(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ix(n,t){let e=ha(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Lx(n,t){n.uniform1iv(this.addr,t)}function Dx(n,t){n.uniform2iv(this.addr,t)}function Nx(n,t){n.uniform3iv(this.addr,t)}function Ux(n,t){n.uniform4iv(this.addr,t)}function Fx(n,t){n.uniform1uiv(this.addr,t)}function Ox(n,t){n.uniform2uiv(this.addr,t)}function zx(n,t){n.uniform3uiv(this.addr,t)}function Bx(n,t){n.uniform4uiv(this.addr,t)}function Vx(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=yh:a=ip;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Gx(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rp,r[a])}function Hx(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ap,r[a])}function Wx(n,t,e){let i=this.cache,s=t.length,r=Nc(e,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sp,r[a])}function Xx(n){switch(n){case 5126:return Ex;case 35664:return Tx;case 35665:return kx;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Fx;case 36294:return Ox;case 36295:return zx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Wx}}var _h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ax(e.type)}},xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Hf(n,t){n.seq.push(t),n.map[t.id]=t}function Yx(n,t,e){let i=n.name,s=i.length;for(mh.lastIndex=0;;){let r=mh.exec(i),a=mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hf(e,c===void 0?new _h(o,n,t):new xh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new vh(o),Hf(e,d)),e=d}}}var ca=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Yx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Wf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var qx=37297,Zx=0;function Kx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Xf=new be;function $x(n){Ie._getMatrix(Xf,Ie.workingColorSpace,n);let t=`mat3( ${Xf.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Kx(n.getShaderSource(t),o)}else return r}function Jx(n,t){let e=$x(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var jx={[Ou]:"Linear",[zu]:"Reinhard",[Bu]:"Cineon",[Vu]:"ACESFilmic",[Hu]:"AgX",[ho]:"Neutral",[Gu]:"Custom"};function Qx(n,t){let e=jx[t];return e===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pc=new C;function tv(){Ie.getLuminanceCoefficients(Pc);let n=Pc.x.toFixed(4),t=Pc.y.toFixed(4),e=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function nv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function iv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function wo(n){return n!==""}function qf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(sv,av)}var rv=new Map;function av(n,t){let e=ke[t];if(e===void 0){let i=rv.get(t);if(i!==void 0)e=ke[i],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bh(e)}var ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(n){return n.replace(ov,lv)}function lv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $f(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var cv={[co]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function uv(n){return cv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hv={[Ys]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function dv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var fv={[dr]:"ENVMAP_MODE_REFRACTION"};function pv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mv={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[uf]:"ENVMAP_BLENDING_ADD"};function gv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mv[n.combine]||"ENVMAP_BLENDING_NONE"}function yv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _v(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=uv(e),c=dv(e),u=pv(e),d=gv(e),h=yv(e),f=ev(e),g=nv(r),y=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wo).join(`
`),p.length>0&&(p+=`
`)):(m=[$f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),p=[$f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?ke.tonemapping_pars_fragment:"",e.toneMapping!==Yi?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Jx("linearToOutputTexel",e.outputColorSpace),tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),a=bh(a),a=qf(a,e),a=Zf(a,e),o=bh(o),o=qf(o,e),o=Zf(o,e),a=Kf(a),o=Kf(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+m+a,b=M+p+o,A=Wf(s,s.VERTEX_SHADER,T),x=Wf(s,s.FRAGMENT_SHADER,b);s.attachShader(y,A),s.attachShader(y,x),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(N){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(A)||"",L=s.getShaderInfoLog(x)||"",z=F.trim(),X=G.trim(),j=L.trim(),ut=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ut=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,A,x);else{let Y=Yf(s,A,"vertex"),K=Yf(s,x,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+Y+`
`+K)}else z!==""?me("WebGLProgram: Program Info Log:",z):(X===""||j==="")&&(V=!1);V&&(N.diagnostics={runnable:ut,programLog:z,vertexShader:{log:X,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(A),s.deleteShader(x),v=new ca(s,y),w=iv(s,y)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,qx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=x,this}var xv=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sh(t),e.set(t,i)),i}},Sh=class{constructor(t){this.id=xv++,this.code=t,this.usedTimes=0}};function vv(n){return n===Zs||n===xo||n===vo}function bv(n,t,e,i,s,r){let a=new Wr,o=new Mh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,w,P,N,F,G){let L=N.fog,z=F.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ut=t.get(v.envMap||X,j),V=ut&&ut.mapping===fo?ut.image.height:null,Y=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&me("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Dt=K!==void 0?K.length:0,St=0;z.morphAttributes.position!==void 0&&(St=1),z.morphAttributes.normal!==void 0&&(St=2),z.morphAttributes.color!==void 0&&(St=3);let Gt,Xt,Ut,et;if(Y){let Se=us[Y];Gt=Se.vertexShader,Xt=Se.fragmentShader}else{Gt=v.vertexShader,Xt=v.fragmentShader;let Se=o.getVertexShaderStage(v),Z=o.getFragmentShaderStage(v);o.update(v,Se,Z),Ut=Se.id,et=Z.id}let at=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),qt=F.isInstancedMesh===!0,Pt=F.isBatchedMesh===!0,Rt=!!v.map,de=!!v.matcap,lt=!!ut,ft=!!v.aoMap,xt=!!v.lightMap,_t=!!v.bumpMap&&v.wireframe===!1,Et=!!v.normalMap,Zt=!!v.displacementMap,Bt=!!v.emissiveMap,Kt=!!v.metalnessMap,se=!!v.roughnessMap,D=v.anisotropy>0,we=v.clearcoat>0,oe=v.dispersion>0,k=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,q=v.transmission>0,it=D&&!!v.anisotropyMap,Mt=we&&!!v.clearcoatMap,Lt=we&&!!v.clearcoatNormalMap,rt=we&&!!v.clearcoatRoughnessMap,ht=_&&!!v.iridescenceMap,Nt=_&&!!v.iridescenceThicknessMap,Jt=B&&!!v.sheenColorMap,$=B&&!!v.sheenRoughnessMap,ct=!!v.specularMap,vt=!!v.specularColorMap,wt=!!v.specularIntensityMap,mt=q&&!!v.transmissionMap,I=q&&!!v.thicknessMap,yt=!!v.gradientMap,nt=!!v.alphaMap,At=v.alphaTest>0,Tt=!!v.alphaHash,gt=!!v.extensions,Yt=Yi;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Yt=n.toneMapping);let Ht={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Gt,fragmentShader:Xt,defines:v.defines,customVertexShaderID:Ut,customFragmentShaderID:et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Pt,batchingColor:Pt&&F._colorsTexture!==null,instancing:qt,instancingColor:qt&&F.instanceColor!==null,instancingMorph:qt&&F.morphTexture!==null,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Rt,matcap:de,envMap:lt,envMapMode:lt&&ut.mapping,envMapCubeUVHeight:V,aoMap:ft,lightMap:xt,bumpMap:_t,normalMap:Et,displacementMap:Zt,emissiveMap:Bt,normalMapObjectSpace:Et&&v.normalMapType===ff,normalMapTangentSpace:Et&&v.normalMapType===bo,packedNormalMap:Et&&v.normalMapType===bo&&vv(v.normalMap.format),metalnessMap:Kt,roughnessMap:se,anisotropy:D,anisotropyMap:it,clearcoat:we,clearcoatMap:Mt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:rt,dispersion:oe,retroreflection:k,iridescence:_,iridescenceMap:ht,iridescenceThicknessMap:Nt,sheen:B,sheenColorMap:Jt,sheenRoughnessMap:$,specularMap:ct,specularColorMap:vt,specularIntensityMap:wt,transmission:q,transmissionMap:mt,thicknessMap:I,gradientMap:yt,opaque:v.transparent===!1&&v.blending===sa&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:At,alphaHash:Tt,combine:v.combine,mapUv:Rt&&g(v.map.channel),aoMapUv:ft&&g(v.aoMap.channel),lightMapUv:xt&&g(v.lightMap.channel),bumpMapUv:_t&&g(v.bumpMap.channel),normalMapUv:Et&&g(v.normalMap.channel),displacementMapUv:Zt&&g(v.displacementMap.channel),emissiveMapUv:Bt&&g(v.emissiveMap.channel),metalnessMapUv:Kt&&g(v.metalnessMap.channel),roughnessMapUv:se&&g(v.roughnessMap.channel),anisotropyMapUv:it&&g(v.anisotropyMap.channel),clearcoatMapUv:Mt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:$&&g(v.sheenRoughnessMap.channel),specularMapUv:ct&&g(v.specularMap.channel),specularColorMapUv:vt&&g(v.specularColorMap.channel),specularIntensityMapUv:wt&&g(v.specularIntensityMap.channel),transmissionMapUv:mt&&g(v.transmissionMap.channel),thicknessMapUv:I&&g(v.thicknessMap.channel),alphaMapUv:nt&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Et||D),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Rt||nt),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&Et===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:It,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:St,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&Ie.getTransfer(v.map.colorSpace)===Ye,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(v.emissiveMap.colorSpace)===Ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wn,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(w,v),M(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){let w=f[v.type],P;if(w){let N=us[w];P=Pf.clone(N.uniforms)}else P=v.uniforms;return P}function b(v,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new _v(n,w,v,s),c.push(P),u.set(w,P)),P}function A(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function x(v){o.remove(v)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:T,acquireProgram:b,releaseProgram:A,releaseShaderCache:x,programs:c,dispose:E}}function Mv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Sv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Jf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function jf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,m,p){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=y,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function l(h,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let T=o(h,f,g,y,m,p);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(h,f,g,y,m,p){let M=o(h,f,g,y,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f){e.length>1&&e.sort(h||Sv),i.length>1&&i.sort(f||Jf),s.length>1&&s.sort(f||Jf)}function d(){for(let h=t,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function wv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new jf,n.set(i,[a])):s>=r.length?(a=new jf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Av(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new le};break;case"SpotLight":e={position:new C,direction:new C,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Ev(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Tv=0;function kv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Rv(n){let t=new Av,e=Ev(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new He,a=new He;function o(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,T=0,b=0,A=0,x=0,E=0,v=0,w=0,P=0;c.sort(kv);for(let F=0,G=c.length;F<G;F++){let L=c[F],z=L.color,X=L.intensity,j=L.distance,ut=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zs?ut=L.shadow.map.texture:ut=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*X,d+=z.g*X,h+=z.b*X;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],X);P++}else if(L.isSunLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,K=e.get(L);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[g]=K,i.sunShadowMap[g]=ut;let Dt=Y.getViewportCount();for(let St=0;St<Dt;St++)i.sunShadowMatrix[y+St]=Y.getMatrix(St),i.sunShadowCascade[y+St]=Y._cascadeData[St];y+=Dt,g++}i.sun[f]=V,f++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,K=e.get(L);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=ut,i.directionalShadowMatrix[m]=L.shadow.matrix,A++}i.directional[m]=V,m++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(z).multiplyScalar(X),V.distance=j,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[M]=V;let Y=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,Y.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[M]=Y.matrix,L.castShadow){let K=e.get(L);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.spotShadow[M]=K,i.spotShadowMap[M]=ut,E++}M++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(z).multiplyScalar(X),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=V,T++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let Y=L.shadow,K=e.get(L);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=ut,i.pointShadowMatrix[p]=L.shadow.matrix,x++}i.point[p]=V,p++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(X),V.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[b]=V,b++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==T||N.hemiLength!==b||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==x||N.numSpotShadows!==E||N.numSpotMaps!==v||N.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=T,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=x,i.pointShadowMap.length=x,i.pointShadowMatrix.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=M,N.rectAreaLength=T,N.hemiLength=b,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=x,N.numSpotShadows=E,N.numSpotMaps=v,N.numLightProbes=P,i.version=Tv++)}function l(c,u){let d=0,h=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let b=c[M];if(b.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(b.isSpotLight){let A=i.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Qf(n){let t=new Rv(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Cv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Qf(n),t.set(s,[o])):r>=a.length?(o=new Qf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`,Lv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Dv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],tp=new He,So=new C,gh=new C;function Nv(n,t,e){let i=new qr,s=new kt,r=new kt,a=new on,o=new Al,l=new El,c={},u=e.maxTextureSize,d={[Xs]:Vn,[Vn]:Xs,[wn]:wn},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Pv,fragmentShader:Iv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new _n;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ct(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let p=this.type;this.render=function(x,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===Bl&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=co);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ls),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=p!==this.type;G&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=x.length;L<z;L++){let X=x[L],j=X.shadow;if(j===void 0){me("WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ut=j.getFrameExtents();s.multiply(ut),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,j.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=V,j.map===null||G===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===ia){if(X.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ui(s.x,s.y,{format:Zs,type:Zi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),j.map.texture.name=X.name+".shadowMap",j.map.depthTexture=new zs(s.x,s.y,Ci),j.map.depthTexture.name=X.name+".shadowMapDepth",j.map.depthTexture.format=is,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=On,j.map.depthTexture.magFilter=On}else X.isPointLight?(j.map=new Ic(s.x),j.map.depthTexture=new vl(s.x,qi)):(j.map=new ui(s.x,s.y),j.map.depthTexture=new zs(s.x,s.y,qi)),j.map.depthTexture.name=X.name+".shadowMap",j.map.depthTexture.format=is,this.type===co?(j.map.depthTexture.compareFunction=V?Rc:kc,j.map.depthTexture.minFilter=Sn,j.map.depthTexture.magFilter=Sn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=On,j.map.depthTexture.magFilter=On);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let Y=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();X.isPointLight!==!0&&j.updateMatrices(X,v);for(let K=0;K<Y;K++){let Dt=j.getCamera(K);if(X.isPointLight){let St=j.camera,Gt=j.matrix,Xt=X.distance||St.far;Xt!==St.far&&(St.far=Xt,St.updateProjectionMatrix()),So.setFromMatrixPosition(X.matrixWorld),St.position.copy(So),gh.copy(St.position),gh.add(Lv[K]),St.up.copy(Dv[K]),St.lookAt(gh),St.updateMatrixWorld(),Gt.makeTranslation(-So.x,-So.y,-So.z),tp.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),j._frustum.setFromProjectionMatrix(tp,St.coordinateSystem,St.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,K),n.clear();else{K===0&&(n.setRenderTarget(j.map),n.clear());let St=j.getViewport(K);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(a)}i=j.getFrustum(K),b(E,v,Dt,X,this.type)}j.isPointLightShadow!==!0&&this.type===ia&&M(j,v),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,P,N)};function M(x,E){let v=t.update(y);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new ui(s.x,s.y,{format:Zs,type:Zi}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),h.uniforms.shadow_pass.value=x.map.depthTexture,h.uniforms.resolution.value.set(x.map.width,x.map.height),h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(E,null,v,h,y,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(E,null,v,f,y,null)}function T(x,E,v,w){let P=null,N=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(N!==void 0)P=N;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let F=P.uuid,G=E.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let z=L[G];z===void 0&&(z=P.clone(),L[G]=z,E.addEventListener("dispose",A)),P=z}if(P.visible=E.visible,P.wireframe=E.wireframe,w===ia?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=n.properties.get(P);F.light=v}return P}function b(x,E,v,w,P){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===ia)&&(!x.frustumCulled||x.intersectsFrustum(i))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);let G=t.update(x),L=x.material;if(Array.isArray(L)){let z=G.groups;for(let X=0,j=z.length;X<j;X++){let ut=z[X],V=L[ut.materialIndex];if(V&&V.visible){let Y=T(x,V,w,P);x.onBeforeShadow(n,x,E,v,G,Y,ut),n.renderBufferDirect(v,null,G,Y,x,ut),x.onAfterShadow(n,x,E,v,G,Y,ut)}}}else if(L.visible){let z=T(x,L,w,P);x.onBeforeShadow(n,x,E,v,G,z,null),n.renderBufferDirect(v,null,G,z,x,null),x.onAfterShadow(n,x,E,v,G,z,null)}}let F=x.children;for(let G=0,L=F.length;G<L;G++)b(F[G],E,v,w,P)}function A(x){x.target.removeEventListener("dispose",A);for(let v in c){let w=c[v],P=x.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function Uv(n,t){function e(){let I=!1,yt=new on,nt=null,At=new on(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!I&&(n.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){I=Tt},setClear:function(Tt,gt,Yt,Ht,Se){Se===!0&&(Tt*=Ht,gt*=Ht,Yt*=Ht),yt.set(Tt,gt,Yt,Ht),At.equals(yt)===!1&&(n.clearColor(Tt,gt,Yt,Ht),At.copy(yt))},reset:function(){I=!1,nt=null,At.set(-1,0,0,0)}}}function i(){let I=!1,yt=!1,nt=null,At=null,Tt=null;return{setReversed:function(gt){if(yt!==gt){let Yt=t.get("EXT_clip_control");gt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),yt=gt;let Ht=Tt;Tt=null,this.setClear(Ht)}},getReversed:function(){return yt},setTest:function(gt){gt?at(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(gt){nt!==gt&&!I&&(n.depthMask(gt),nt=gt)},setFunc:function(gt){if(yt&&(gt=Af[gt]),At!==gt){switch(gt){case rl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case zr:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=gt}},setLocked:function(gt){I=gt},setClear:function(gt){Tt!==gt&&(Tt=gt,yt&&(gt=1-gt),n.clearDepth(gt))},reset:function(){I=!1,nt=null,At=null,Tt=null,yt=!1}}}function s(){let I=!1,yt=null,nt=null,At=null,Tt=null,gt=null,Yt=null,Ht=null,Se=null;return{setTest:function(Z){I||(Z?at(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(Z){yt!==Z&&!I&&(n.stencilMask(Z),yt=Z)},setFunc:function(Z,bt,R){(nt!==Z||At!==bt||Tt!==R)&&(n.stencilFunc(Z,bt,R),nt=Z,At=bt,Tt=R)},setOp:function(Z,bt,R){(gt!==Z||Yt!==bt||Ht!==R)&&(n.stencilOp(Z,bt,R),gt=Z,Yt=bt,Ht=R)},setLocked:function(Z){I=Z},setClear:function(Z){Se!==Z&&(n.clearStencil(Z),Se=Z)},reset:function(){I=!1,yt=null,nt=null,At=null,Tt=null,gt=null,Yt=null,Ht=null,Se=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,T=null,b=null,A=null,x=null,E=null,v=new le(0,0,0),w=0,P=!1,N=null,F=null,G=null,L=null,z=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ut=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=ut>=1):V.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=ut>=2);let Y=null,K={},Dt=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Gt=new on().fromArray(Dt),Xt=new on().fromArray(St);function Ut(I,yt,nt,At){let Tt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(I,gt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<nt;Yt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(yt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return gt}let et={};et[n.TEXTURE_2D]=Ut(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=Ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=Ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=Ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(zr),_t(!1),Et(Lu),at(n.CULL_FACE),ft(ls);function at(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function It(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function qt(I,yt){return h[I]!==yt?(n.bindFramebuffer(I,yt),h[I]=yt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=yt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Pt(I,yt){let nt=g,At=!1;if(I){nt=f.get(yt),nt===void 0&&(nt=[],f.set(yt,nt));let Tt=I.textures;if(nt.length!==Tt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Yt=Tt.length;gt<Yt;gt++)nt[gt]=n.COLOR_ATTACHMENT0+gt;nt.length=Tt.length,At=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,At=!0);At&&n.drawBuffers(nt)}function Rt(I){return y!==I?(n.useProgram(I),y=I,!0):!1}let de={[hr]:n.FUNC_ADD,[Xd]:n.FUNC_SUBTRACT,[Yd]:n.FUNC_REVERSE_SUBTRACT};de[qd]=n.MIN,de[Zd]=n.MAX;let lt={[Kd]:n.ZERO,[$d]:n.ONE,[Jd]:n.SRC_COLOR,[Uu]:n.SRC_ALPHA,[sf]:n.SRC_ALPHA_SATURATE,[ef]:n.DST_COLOR,[Qd]:n.DST_ALPHA,[jd]:n.ONE_MINUS_SRC_COLOR,[Fu]:n.ONE_MINUS_SRC_ALPHA,[nf]:n.ONE_MINUS_DST_COLOR,[tf]:n.ONE_MINUS_DST_ALPHA,[rf]:n.CONSTANT_COLOR,[af]:n.ONE_MINUS_CONSTANT_COLOR,[of]:n.CONSTANT_ALPHA,[lf]:n.ONE_MINUS_CONSTANT_ALPHA};function ft(I,yt,nt,At,Tt,gt,Yt,Ht,Se,Z){if(I===ls){m===!0&&(It(n.BLEND),m=!1);return}if(m===!1&&(at(n.BLEND),m=!0),I!==Wd){if(I!==p||Z!==P){if((M!==hr||A!==hr)&&(n.blendEquation(n.FUNC_ADD),M=hr,A=hr),Z)switch(I){case sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uo:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ye("WebGLState: Invalid blending: ",I);break}else switch(I){case sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Du:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",I);break}T=null,b=null,x=null,E=null,v.set(0,0,0),w=0,p=I,P=Z}return}Tt=Tt||yt,gt=gt||nt,Yt=Yt||At,(yt!==M||Tt!==A)&&(n.blendEquationSeparate(de[yt],de[Tt]),M=yt,A=Tt),(nt!==T||At!==b||gt!==x||Yt!==E)&&(n.blendFuncSeparate(lt[nt],lt[At],lt[gt],lt[Yt]),T=nt,b=At,x=gt,E=Yt),(Ht.equals(v)===!1||Se!==w)&&(n.blendColor(Ht.r,Ht.g,Ht.b,Se),v.copy(Ht),w=Se),p=I,P=!1}function xt(I,yt){I.side===wn?It(n.CULL_FACE):at(n.CULL_FACE);let nt=I.side===Vn;yt&&(nt=!nt),_t(nt),I.blending===sa&&I.transparent===!1?ft(ls):ft(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let At=I.stencilWrite;o.setTest(At),At&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){N!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),N=I)}function Et(I){I!==Gd?(at(n.CULL_FACE),I!==F&&(I===Lu?n.cullFace(n.BACK):I===Hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),F=I}function Zt(I){I!==G&&(j&&n.lineWidth(I),G=I)}function Bt(I,yt,nt){I?(at(n.POLYGON_OFFSET_FILL),(L!==yt||z!==nt)&&(L=yt,z=nt,a.getReversed()&&(yt=-yt),n.polygonOffset(yt,nt))):It(n.POLYGON_OFFSET_FILL)}function Kt(I){I?at(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function se(I){I===void 0&&(I=n.TEXTURE0+X-1),Y!==I&&(n.activeTexture(I),Y=I)}function D(I,yt,nt){nt===void 0&&(Y===null?nt=n.TEXTURE0+X-1:nt=Y);let At=K[nt];At===void 0&&(At={type:void 0,texture:void 0},K[nt]=At),(At.type!==I||At.texture!==yt)&&(Y!==nt&&(n.activeTexture(nt),Y=nt),n.bindTexture(I,yt||et[I]),At.type=I,At.texture=yt)}function we(){let I=K[Y];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function _(){try{n.texSubImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function B(){try{n.texSubImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function it(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function Mt(){try{n.texStorage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function Lt(){try{n.texStorage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function rt(){try{n.texImage2D(...arguments)}catch(I){ye("WebGLState:",I)}}function ht(){try{n.texImage3D(...arguments)}catch(I){ye("WebGLState:",I)}}function Nt(I){return d[I]!==void 0?d[I]:n.getParameter(I)}function Jt(I,yt){d[I]!==yt&&(n.pixelStorei(I,yt),d[I]=yt)}function $(I){Gt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Gt.copy(I))}function ct(I){Xt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Xt.copy(I))}function vt(I,yt){let nt=c.get(yt);nt===void 0&&(nt=new WeakMap,c.set(yt,nt));let At=nt.get(I);At===void 0&&(At=n.getUniformBlockIndex(yt,I.name),nt.set(I,At))}function wt(I,yt){let At=c.get(yt).get(I);l.get(yt)!==At&&(n.uniformBlockBinding(yt,At,I.__bindingPointIndex),l.set(yt,At))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,K={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,T=null,b=null,A=null,x=null,E=null,v=new le(0,0,0),w=0,P=!1,N=null,F=null,G=null,L=null,z=null,Gt.set(0,0,n.canvas.width,n.canvas.height),Xt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:It,bindFramebuffer:qt,drawBuffers:Pt,useProgram:Rt,setBlending:ft,setMaterial:xt,setFlipSided:_t,setCullFace:Et,setLineWidth:Zt,setPolygonOffset:Bt,setScissorTest:Kt,activeTexture:se,bindTexture:D,unbindTexture:we,compressedTexImage2D:oe,compressedTexImage3D:k,texImage2D:rt,texImage3D:ht,pixelStorei:Jt,getParameter:Nt,updateUBOMapping:vt,uniformBlockBinding:wt,texStorage2D:Mt,texStorage3D:Lt,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:it,scissor:$,viewport:ct,reset:mt}}function Fv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,_){return g?new OffscreenCanvas(k,_):Ua("canvas")}function m(k,_,B){let q=1,it=oe(k);if((it.width>B||it.height>B)&&(q=B/Math.max(it.width,it.height)),q<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let Mt=Math.floor(q*it.width),Lt=Math.floor(q*it.height);h===void 0&&(h=y(Mt,Lt));let rt=_?y(Mt,Lt):h;return rt.width=Mt,rt.height=Lt,rt.getContext("2d").drawImage(k,0,0,Mt,Lt),me("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Mt+"x"+Lt+")."),rt}else return"data"in k&&me("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),k;return k}function p(k){return k.generateMipmaps}function M(k){n.generateMipmap(k)}function T(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(k,_,B,q,it,Mt=!1){if(k!==null){if(n[k]!==void 0)return n[k];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Lt;q&&(Lt=t.get("EXT_texture_norm16"),Lt||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=_;if(_===n.RED&&(B===n.FLOAT&&(rt=n.R32F),B===n.HALF_FLOAT&&(rt=n.R16F),B===n.UNSIGNED_BYTE&&(rt=n.R8),B===n.UNSIGNED_SHORT&&Lt&&(rt=Lt.R16_EXT),B===n.SHORT&&Lt&&(rt=Lt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.R8UI),B===n.UNSIGNED_SHORT&&(rt=n.R16UI),B===n.UNSIGNED_INT&&(rt=n.R32UI),B===n.BYTE&&(rt=n.R8I),B===n.SHORT&&(rt=n.R16I),B===n.INT&&(rt=n.R32I)),_===n.RG&&(B===n.FLOAT&&(rt=n.RG32F),B===n.HALF_FLOAT&&(rt=n.RG16F),B===n.UNSIGNED_BYTE&&(rt=n.RG8),B===n.UNSIGNED_SHORT&&Lt&&(rt=Lt.RG16_EXT),B===n.SHORT&&Lt&&(rt=Lt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.RG8UI),B===n.UNSIGNED_SHORT&&(rt=n.RG16UI),B===n.UNSIGNED_INT&&(rt=n.RG32UI),B===n.BYTE&&(rt=n.RG8I),B===n.SHORT&&(rt=n.RG16I),B===n.INT&&(rt=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),B===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),B===n.UNSIGNED_INT&&(rt=n.RGB32UI),B===n.BYTE&&(rt=n.RGB8I),B===n.SHORT&&(rt=n.RGB16I),B===n.INT&&(rt=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),B===n.UNSIGNED_INT&&(rt=n.RGBA32UI),B===n.BYTE&&(rt=n.RGBA8I),B===n.SHORT&&(rt=n.RGBA16I),B===n.INT&&(rt=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&Lt&&(rt=Lt.RGB16_EXT),B===n.SHORT&&Lt&&(rt=Lt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(rt=n.R11F_G11F_B10F)),_===n.RGBA){let ht=Mt?Na:Ie.getTransfer(it);B===n.FLOAT&&(rt=n.RGBA32F),B===n.HALF_FLOAT&&(rt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(rt=ht===Ye?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&Lt&&(rt=Lt.RGBA16_EXT),B===n.SHORT&&Lt&&(rt=Lt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function A(k,_){let B;return k?_===null||_===qi||_===aa?B=n.DEPTH24_STENCIL8:_===Ci?B=n.DEPTH32F_STENCIL8:_===ra&&(B=n.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qi||_===aa?B=n.DEPTH_COMPONENT24:_===Ci?B=n.DEPTH_COMPONENT32F:_===ra&&(B=n.DEPTH_COMPONENT16),B}function x(k,_){return p(k)===!0||k.isFramebufferTexture&&k.minFilter!==On&&k.minFilter!==Sn?Math.log2(Math.max(_.width,_.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?_.mipmaps.length:1}function E(k){let _=k.target;_.removeEventListener("dispose",E),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function v(k){let _=k.target;_.removeEventListener("dispose",v),N(_)}function w(k){let _=i.get(k);if(_.__webglInit===void 0)return;let B=k.source,q=f.get(B);if(q){let it=q[_.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(k),Object.keys(q).length===0&&f.delete(B)}i.remove(k)}function P(k){let _=i.get(k);n.deleteTexture(_.__webglTexture);let B=k.source,q=f.get(B);delete q[_.__cacheKey],a.memory.textures--}function N(k){let _=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let it=0;it<_.__webglFramebuffer[q].length;it++)n.deleteFramebuffer(_.__webglFramebuffer[q][it]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=k.textures;for(let q=0,it=B.length;q<it;q++){let Mt=i.get(B[q]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(k)}let F=0;function G(){F=0}function L(){return F}function z(k){F=k}function X(){let k=F;return k>=s.maxTextures&&me("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,k}function j(k){let _=[];return _.push(k.wrapS),_.push(k.wrapT),_.push(k.wrapR||0),_.push(k.magFilter),_.push(k.minFilter),_.push(k.anisotropy),_.push(k.internalFormat),_.push(k.format),_.push(k.type),_.push(k.generateMipmaps),_.push(k.premultiplyAlpha),_.push(k.flipY),_.push(k.unpackAlignment),_.push(k.colorSpace),_.join()}function ut(k,_){let B=i.get(k);if(k.isVideoTexture&&D(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&B.__version!==k.version){let q=k.image;if(q===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{It(B,k,_);return}}else k.isExternalTexture&&(B.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function V(k,_){let B=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&B.__version!==k.version){It(B,k,_);return}else k.isExternalTexture&&(B.__webglTexture=k.sourceTexture?k.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function Y(k,_){let B=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&B.__version!==k.version){It(B,k,_);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function K(k,_){let B=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&B.__version!==k.version){qt(B,k,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let Dt={[xi]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},St={[On]:n.NEAREST,[hf]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Wl]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Gt={[mf]:n.NEVER,[vf]:n.ALWAYS,[gf]:n.LESS,[kc]:n.LEQUAL,[yf]:n.EQUAL,[Rc]:n.GEQUAL,[_f]:n.GREATER,[xf]:n.NOTEQUAL};function Xt(k,_){if(_.type===Ci&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Sn||_.magFilter===Wl||_.magFilter===po||_.magFilter===Ri||_.minFilter===Sn||_.minFilter===Wl||_.minFilter===po||_.minFilter===Ri)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,Dt[_.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,Dt[_.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,Dt[_.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,St[_.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,St[_.minFilter]),_.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,Gt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===On||_.minFilter!==po&&_.minFilter!==Ri||_.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(k,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ut(k,_){let B=!1;k.__webglInit===void 0&&(k.__webglInit=!0,_.addEventListener("dispose",E));let q=_.source,it=f.get(q);it===void 0&&(it={},f.set(q,it));let Mt=j(_);if(Mt!==k.__cacheKey){it[Mt]===void 0&&(it[Mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),it[Mt].usedTimes++;let Lt=it[k.__cacheKey];Lt!==void 0&&(it[k.__cacheKey].usedTimes--,Lt.usedTimes===0&&P(_)),k.__cacheKey=Mt,k.__webglTexture=it[Mt].texture}return B}function et(k,_,B){return Math.floor(Math.floor(k/B)/_)}function at(k,_,B,q){let Mt=k.updateRanges;if(Mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,q,_.data);else{Mt.sort((Jt,$)=>Jt.start-$.start);let Lt=0;for(let Jt=1;Jt<Mt.length;Jt++){let $=Mt[Lt],ct=Mt[Jt],vt=$.start+$.count,wt=et(ct.start,_.width,4),mt=et($.start,_.width,4);ct.start<=vt+1&&wt===mt&&et(ct.start+ct.count-1,_.width,4)===wt?$.count=Math.max($.count,ct.start+ct.count-$.start):(++Lt,Mt[Lt]=ct)}Mt.length=Lt+1;let rt=e.getParameter(n.UNPACK_ROW_LENGTH),ht=e.getParameter(n.UNPACK_SKIP_PIXELS),Nt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Jt=0,$=Mt.length;Jt<$;Jt++){let ct=Mt[Jt],vt=Math.floor(ct.start/4),wt=Math.ceil(ct.count/4),mt=vt%_.width,I=Math.floor(vt/_.width),yt=wt,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,mt,I,yt,nt,B,q,_.data)}k.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,rt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Nt)}}function It(k,_,B){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let it=Ut(k,_),Mt=_.source;e.bindTexture(q,k.__webglTexture,n.TEXTURE0+B);let Lt=i.get(Mt);if(Mt.version!==Lt.__version||it===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let nt=Ie.getPrimaries(Ie.workingColorSpace),At=_.colorSpace===Ki?null:Ie.getPrimaries(_.colorSpace),Tt=_.colorSpace===Ki||nt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ht=m(_.image,!1,s.maxTextureSize);ht=we(_,ht);let Nt=r.convert(_.format,_.colorSpace),Jt=r.convert(_.type),$=b(_.internalFormat,Nt,Jt,_.normalized,_.colorSpace,_.isVideoTexture);Xt(q,_);let ct,vt=_.mipmaps,wt=_.isVideoTexture!==!0,mt=Lt.__version===void 0||it===!0,I=Mt.dataReady,yt=x(_,ht);if(_.isDepthTexture)$=A(_.format===qs,_.type),mt&&(wt?e.texStorage2D(n.TEXTURE_2D,1,$,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,$,ht.width,ht.height,0,Nt,Jt,null));else if(_.isDataTexture)if(vt.length>0){wt&&mt&&e.texStorage2D(n.TEXTURE_2D,yt,$,vt[0].width,vt[0].height);for(let nt=0,At=vt.length;nt<At;nt++)ct=vt[nt],wt?I&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ct.width,ct.height,Nt,Jt,ct.data):e.texImage2D(n.TEXTURE_2D,nt,$,ct.width,ct.height,0,Nt,Jt,ct.data);_.generateMipmaps=!1}else wt?(mt&&e.texStorage2D(n.TEXTURE_2D,yt,$,ht.width,ht.height),I&&at(_,ht,Nt,Jt)):e.texImage2D(n.TEXTURE_2D,0,$,ht.width,ht.height,0,Nt,Jt,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){wt&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,$,vt[0].width,vt[0].height,ht.depth);for(let nt=0,At=vt.length;nt<At;nt++)if(ct=vt[nt],_.format!==Pi)if(Nt!==null)if(wt){if(I)if(_.layerUpdates.size>0){let Tt=rh(ct.width,ct.height,_.format,_.type);for(let gt of _.layerUpdates){let Yt=ct.data.subarray(gt*Tt/ct.data.BYTES_PER_ELEMENT,(gt+1)*Tt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,gt,ct.width,ct.height,1,Nt,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,ht.depth,Nt,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,$,ct.width,ct.height,ht.depth,0,ct.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,ht.depth,Nt,Jt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,$,ct.width,ct.height,ht.depth,0,Nt,Jt,ct.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{wt&&mt&&e.texStorage2D(n.TEXTURE_2D,yt,$,vt[0].width,vt[0].height);for(let nt=0,At=vt.length;nt<At;nt++)ct=vt[nt],_.format!==Pi?Nt!==null?wt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,ct.width,ct.height,Nt,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,$,ct.width,ct.height,0,ct.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?I&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ct.width,ct.height,Nt,Jt,ct.data):e.texImage2D(n.TEXTURE_2D,nt,$,ct.width,ct.height,0,Nt,Jt,ct.data)}else if(_.isDataArrayTexture)if(wt){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,$,ht.width,ht.height,ht.depth),I)if(_.layerUpdates.size>0){let nt=rh(ht.width,ht.height,_.format,_.type);for(let At of _.layerUpdates){let Tt=ht.data.subarray(At*nt/ht.data.BYTES_PER_ELEMENT,(At+1)*nt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,ht.width,ht.height,1,Nt,Jt,Tt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Nt,Jt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$,ht.width,ht.height,ht.depth,0,Nt,Jt,ht.data);else if(_.isData3DTexture)wt?(mt&&e.texStorage3D(n.TEXTURE_3D,yt,$,ht.width,ht.height,ht.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Nt,Jt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,$,ht.width,ht.height,ht.depth,0,Nt,Jt,ht.data);else if(_.isFramebufferTexture){if(mt)if(wt)e.texStorage2D(n.TEXTURE_2D,yt,$,ht.width,ht.height);else{let nt=ht.width,At=ht.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,$,nt,At,0,Nt,Jt,null),nt>>=1,At>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),ht.parentNode!==nt){nt.appendChild(ht),d.add(_),nt.onpaint=At=>{let Tt=At.changedElements;for(let gt of d)Tt.includes(gt.image)&&(gt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ht);else{let Tt=n.RGBA,gt=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Tt,gt,Yt,ht)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(vt.length>0){if(wt&&mt){let nt=oe(vt[0]);e.texStorage2D(n.TEXTURE_2D,yt,$,nt.width,nt.height)}for(let nt=0,At=vt.length;nt<At;nt++)ct=vt[nt],wt?I&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Nt,Jt,ct):e.texImage2D(n.TEXTURE_2D,nt,$,Nt,Jt,ct);_.generateMipmaps=!1}else if(wt){if(mt){let nt=oe(ht);e.texStorage2D(n.TEXTURE_2D,yt,$,nt.width,nt.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,Jt,ht)}else e.texImage2D(n.TEXTURE_2D,0,$,Nt,Jt,ht);p(_)&&M(q),Lt.__version=Mt.version,_.onUpdate&&_.onUpdate(_)}k.__version=_.version}function qt(k,_,B){if(_.image.length!==6)return;let q=Ut(k,_),it=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+B);let Mt=i.get(it);if(it.version!==Mt.__version||q===!0){e.activeTexture(n.TEXTURE0+B);let Lt=Ie.getPrimaries(Ie.workingColorSpace),rt=_.colorSpace===Ki?null:Ie.getPrimaries(_.colorSpace),ht=_.colorSpace===Ki||Lt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Nt=_.isCompressedTexture||_.image[0].isCompressedTexture,Jt=_.image[0]&&_.image[0].isDataTexture,$=[];for(let gt=0;gt<6;gt++)!Nt&&!Jt?$[gt]=m(_.image[gt],!0,s.maxCubemapSize):$[gt]=Jt?_.image[gt].image:_.image[gt],$[gt]=we(_,$[gt]);let ct=$[0],vt=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),mt=b(_.internalFormat,vt,wt,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,yt=Mt.__version===void 0||q===!0,nt=it.dataReady,At=x(_,ct);Xt(n.TEXTURE_CUBE_MAP,_);let Tt;if(Nt){I&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,mt,ct.width,ct.height);for(let gt=0;gt<6;gt++){Tt=$[gt].mipmaps;for(let Yt=0;Yt<Tt.length;Yt++){let Ht=Tt[Yt];_.format!==Pi?vt!==null?I?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,Ht.width,Ht.height,vt,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,mt,Ht.width,Ht.height,0,Ht.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,Ht.width,Ht.height,vt,wt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,mt,Ht.width,Ht.height,0,vt,wt,Ht.data)}}}else{if(Tt=_.mipmaps,I&&yt){Tt.length>0&&At++;let gt=oe($[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,mt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Jt){I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,$[gt].width,$[gt].height,vt,wt,$[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,mt,$[gt].width,$[gt].height,0,vt,wt,$[gt].data);for(let Yt=0;Yt<Tt.length;Yt++){let Se=Tt[Yt].image[gt].image;I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Se.width,Se.height,vt,wt,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,mt,Se.width,Se.height,0,vt,wt,Se.data)}}else{I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,vt,wt,$[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,mt,vt,wt,$[gt]);for(let Yt=0;Yt<Tt.length;Yt++){let Ht=Tt[Yt];I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,vt,wt,Ht.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,mt,vt,wt,Ht.image[gt])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),Mt.__version=it.version,_.onUpdate&&_.onUpdate(_)}k.__version=_.version}function Pt(k,_,B,q,it,Mt){let Lt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),ht=b(B.internalFormat,Lt,rt,B.normalized,B.colorSpace),Nt=i.get(_),Jt=i.get(B);if(Jt.__renderTarget=_,!Nt.__hasExternalTextures){let $=Math.max(1,_.width>>Mt),ct=Math.max(1,_.height>>Mt);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,Mt,ht,$,ct,_.depth,0,Lt,rt,null):e.texImage2D(it,Mt,ht,$,ct,0,Lt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,k),se(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,it,Jt.__webglTexture,0,Kt(_)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,it,Jt.__webglTexture,Mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(k,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,k),_.depthBuffer){let q=_.depthTexture,it=q&&q.isDepthTexture?q.type:null,Mt=A(_.stencilBuffer,it),Lt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;se(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(_),Mt,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(_),Mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,k)}else{let q=_.textures;for(let it=0;it<q.length;it++){let Mt=q[it],Lt=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),ht=b(Mt.internalFormat,Lt,rt,Mt.normalized,Mt.colorSpace);se(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Kt(_),ht,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt(_),ht,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ht,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(k,_,B){let q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,k),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=i.get(_.depthTexture);if(it.__renderTarget=_,(!it.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(it.__webglInit===void 0&&(it.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),it.__webglTexture===void 0){it.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,_.depthTexture);let Nt=r.convert(_.depthTexture.format),Jt=r.convert(_.depthTexture.type),$;_.depthTexture.format===is?$=n.DEPTH_COMPONENT24:_.depthTexture.format===qs&&($=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,$,_.width,_.height,0,Nt,Jt,null)}}else ut(_.depthTexture,0);let Mt=it.__webglTexture,Lt=Kt(_),rt=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ht=_.depthTexture.format===qs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===is)se(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,rt,Mt,0,Lt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,rt,Mt,0);else if(_.depthTexture.format===qs)se(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,rt,Mt,0,Lt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,rt,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(k){let _=i.get(k),B=k.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==k.depthTexture){let q=k.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",it)};q.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=q}if(k.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)de(_.__webglFramebuffer[q],k,q);else{let q=k.texture.mipmaps;q&&q.length>0?de(_.__webglFramebuffer[0],k,0):de(_.__webglFramebuffer,k,0)}else if(B){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),Rt(_.__webglDepthbuffer[q],k,!1);else{let it=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,Mt)}}else{let q=k.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Rt(_.__webglDepthbuffer,k,!1);else{let it=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,Mt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(k,_,B){let q=i.get(k);_!==void 0&&Pt(q.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&lt(k)}function xt(k){let _=k.texture,B=i.get(k),q=i.get(_);k.addEventListener("dispose",v);let it=k.textures,Mt=k.isWebGLCubeRenderTarget===!0,Lt=it.length>1;if(Lt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),Mt){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let ht=0;ht<_.mipmaps.length;ht++)B.__webglFramebuffer[rt][ht]=n.createFramebuffer()}else B.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)B.__webglFramebuffer[rt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let rt=0,ht=it.length;rt<ht;rt++){let Nt=i.get(it[rt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),a.memory.textures++)}if(k.samples>0&&se(k)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<it.length;rt++){let ht=it[rt];B.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);let Nt=r.convert(ht.format,ht.colorSpace),Jt=r.convert(ht.type),$=b(ht.internalFormat,Nt,Jt,ht.normalized,ht.colorSpace,k.isXRRenderTarget===!0),ct=Kt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,$,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Rt(B.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)Pt(B.__webglFramebuffer[rt][ht],k,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else Pt(B.__webglFramebuffer[rt],k,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(_)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let rt=0,ht=it.length;rt<ht;rt++){let Nt=it[rt],Jt=i.get(Nt),$=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&($=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,Jt.__webglTexture),Xt($,Nt),Pt(B.__webglFramebuffer,k,Nt,n.COLOR_ATTACHMENT0+rt,$,0),p(Nt)&&M($)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(rt=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),Xt(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)Pt(B.__webglFramebuffer[ht],k,_,n.COLOR_ATTACHMENT0,rt,ht);else Pt(B.__webglFramebuffer,k,_,n.COLOR_ATTACHMENT0,rt,0);p(_)&&M(rt),e.unbindTexture()}k.depthBuffer&&lt(k)}function _t(k){let _=k.textures;for(let B=0,q=_.length;B<q;B++){let it=_[B];if(p(it)){let Mt=T(k),Lt=i.get(it).__webglTexture;e.bindTexture(Mt,Lt),M(Mt),e.unbindTexture()}}}let Et=[],Zt=[];function Bt(k){if(k.samples>0){if(se(k)===!1){let _=k.textures,B=k.width,q=k.height,it=n.COLOR_BUFFER_BIT,Mt=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(k),rt=_.length>1;if(rt)for(let Nt=0;Nt<_.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);let ht=k.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Nt=0;Nt<_.length;Nt++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);let Jt=i.get(_[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,it,n.NEAREST),l===!0&&(Et.length=0,Zt.length=0,Et.push(n.COLOR_ATTACHMENT0+Nt),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Et.push(Mt),Zt.push(Mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let Nt=0;Nt<_.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[Nt]);let Jt=i.get(_[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&l){let _=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Kt(k){return Math.min(s.maxSamples,k.samples)}function se(k){let _=i.get(k);return k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(k){let _=a.render.frame;u.get(k)!==_&&(u.set(k,_),k.update())}function we(k,_){let B=k.colorSpace,q=k.format,it=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||B!==Da&&B!==Ki&&(Ie.getTransfer(B)===Ye?(q!==Pi||it!==hi)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",B)),_}function oe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=ut,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=ft,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ov(n,t){function e(i,s=Ki){let r,a=Ie.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===Yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xu)return n.BYTE;if(i===Yu)return n.SHORT;if(i===ra)return n.UNSIGNED_SHORT;if(i===Xl)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Zi)return n.HALF_FLOAT;if(i===Ku)return n.ALPHA;if(i===$u)return n.RGB;if(i===Pi)return n.RGBA;if(i===is)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Zl)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===Zs)return n.RG;if(i===$l)return n.RG_INTEGER;if(i===Jl)return n.RGBA_INTEGER;if(i===mo||i===go||i===yo||i===_o)if(a===Ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Ql||i===tc||i===ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===sc||i===rc||i===ac||i===xo||i===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nc||i===ic)return a===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rc)return r.COMPRESSED_R11_EAC;if(i===ac)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xo)return r.COMPRESSED_RG11_EAC;if(i===oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===yc||i===_c||i===xc||i===vc||i===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===Sc||i===wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Mc)return a===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ac||i===Ec||i===vo||i===Tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ha(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new bi({vertexShader:zv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Gi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new wh,p={},M=e.getContextAttributes(),T=null,b=null,A=[],x=[],E=new kt,v=null,w=null,P=new zn;P.viewport=new on;let N=new zn;N.viewport=new on;let F=[P,N],G=new Ol,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let at=A[et];return at===void 0&&(at=new Xr,A[et]=at),at.getTargetRaySpace()},this.getControllerGrip=function(et){let at=A[et];return at===void 0&&(at=new Xr,A[et]=at),at.getGripSpace()},this.getHand=function(et){let at=A[et];return at===void 0&&(at=new Xr,A[et]=at),at.getHandSpace()};function X(et){let at=x.indexOf(et.inputSource);if(at===-1)return;let It=A[at];It!==void 0&&(It.update(et.inputSource,et.frame,c||a),It.dispatchEvent({type:et.type,data:et.inputSource}))}function j(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ut);for(let et=0;et<A.length;et++){let at=x[et];at!==null&&(x[et]=null,A[et].disconnect(at))}L=null,z=null,m.reset();for(let et in p)delete p[et];if(t.setRenderTarget(T),f=null,h=null,d=null,s=null,b=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),w!==null){let et=w.camera;et.fov=w.fov,et.zoom=w.zoom,et.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,i.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ut),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,qt=null,Pt=null;M.depth&&(Pt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=M.stencil?qs:is,qt=M.stencil?aa:qi);let Rt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Rt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new ui(h.textureWidth,h.textureHeight,{format:Pi,type:hi,depthTexture:new zs(h.textureWidth,h.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let It={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,It),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ui(f.framebufferWidth,f.framebufferHeight,{format:Pi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ut(et){for(let at=0;at<et.removed.length;at++){let It=et.removed[at],qt=x.indexOf(It);qt>=0&&(x[qt]=null,A[qt].disconnect(It))}for(let at=0;at<et.added.length;at++){let It=et.added[at],qt=x.indexOf(It);if(qt===-1){for(let Rt=0;Rt<A.length;Rt++)if(Rt>=x.length){x.push(It),qt=Rt;break}else if(x[Rt]===null){x[Rt]=It,qt=Rt;break}if(qt===-1)break}let Pt=A[qt];Pt&&Pt.connect(It)}}let V=new C,Y=new C;function K(et,at,It){V.setFromMatrixPosition(at.matrixWorld),Y.setFromMatrixPosition(It.matrixWorld);let qt=V.distanceTo(Y),Pt=at.projectionMatrix.elements,Rt=It.projectionMatrix.elements,de=Pt[14]/(Pt[10]-1),lt=Pt[14]/(Pt[10]+1),ft=(Pt[9]+1)/Pt[5],xt=(Pt[9]-1)/Pt[5],_t=(Pt[8]-1)/Pt[0],Et=(Rt[8]+1)/Rt[0],Zt=de*_t,Bt=de*Et,Kt=qt/(-_t+Et),se=Kt*-_t;if(at.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(se),et.translateZ(Kt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Pt[10]===-1)et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let D=de+Kt,we=lt+Kt,oe=Zt-se,k=Bt+(qt-se),_=ft*lt/we*D,B=xt*lt/we*D;et.projectionMatrix.makePerspective(oe,k,_,B,D,we),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Dt(et,at){at===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(at.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let at=et.near,It=et.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(It=m.depthFar)),G.near=N.near=P.near=at,G.far=N.far=P.far=It,(L!==G.near||z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,z=G.far),G.layers.mask=et.layers.mask|6,P.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let qt=et.parent,Pt=G.cameras;Dt(G,qt);for(let Rt=0;Rt<Pt.length;Rt++)Dt(Pt[Rt],qt);Pt.length===2?K(G,P,N):G.projectionMatrix.copy(P.projectionMatrix),w===null&&et.isPerspectiveCamera&&(w={camera:et,fov:et.fov,zoom:et.zoom}),St(et,G,qt)};function St(et,at,It){It===null?et.matrix.copy(at.matrixWorld):(et.matrix.copy(It.matrixWorld),et.matrix.invert(),et.matrix.multiply(at.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Gr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(et){l=et,h!==null&&(h.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(et){return p[et]};let Gt=null;function Xt(et,at){if(u=at.getViewerPose(c||a),g=at,u!==null){let It=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let qt=!1;It.length!==G.cameras.length&&(G.cameras.length=0,qt=!0);for(let lt=0;lt<It.length;lt++){let ft=It[lt],xt=null;if(f!==null)xt=f.getViewport(ft);else{let Et=d.getViewSubImage(h,ft);xt=Et.viewport,lt===0&&(t.setRenderTargetTextures(b,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(b))}let _t=F[lt];_t===void 0&&(_t=new zn,_t.layers.enable(lt),_t.viewport=new on,F[lt]=_t),_t.matrix.fromArray(ft.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(ft.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(xt.x,xt.y,xt.width,xt.height),lt===0&&(G.matrix.copy(_t.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),qt===!0&&G.cameras.push(_t)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let lt=d.getDepthInformation(It[0]);lt&&lt.isValid&&lt.texture&&m.init(lt,s.renderState)}if(Pt&&Pt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let lt=0;lt<It.length;lt++){let ft=It[lt].camera;if(ft){let xt=p[ft];xt||(xt=new Ha,p[ft]=xt);let _t=d.getCameraImage(ft);xt.sourceTexture=_t}}}}for(let It=0;It<A.length;It++){let qt=x[It],Pt=A[It];qt!==null&&Pt!==void 0&&Pt.update(qt,at,c||a)}Gt&&Gt(et,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),g=null}let Ut=new ep;Ut.setAnimationLoop(Xt),this.setAnimationLoop=function(et){Gt=et},this.dispose=function(){}}},Vv=new He,op=new be;op.set(-1,0,0,0,1,0,0,0,1);function Gv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),T=M.envMap,b=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(op),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hv(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let x=A.program;i.uniformBlockBinding(b,x)}function c(b,A){let x=s[b.id];x===void 0&&(m(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",M));let E=A.program;i.updateUBOMapping(b,E);let v=t.render.frame;r[b.id]!==v&&(h(b),r[b.id]=v)}function u(b){let A=d();b.__bindingPointIndex=A;let x=n.createBuffer(),E=b.__size,v=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,x),x}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let A=s[b.id],x=b.uniforms,E=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let v=0,w=x.length;v<w;v++){let P=x[v];if(Array.isArray(P))for(let N=0,F=P.length;N<F;N++)f(P[N],v,N,E);else f(P,v,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,A,x,E){if(y(b,A,x,E)===!0){let v=b.__offset,w=b.value;if(Array.isArray(w)){let P=0;for(let N=0;N<w.length;N++){let F=w[N],G=p(F);g(F,b.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,b.__data)}}function g(b,A,x){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,x)}function y(b,A,x,E){let v=b.value,w=A+"_"+x;if(E[w]===void 0)return typeof v=="number"||typeof v=="boolean"?E[w]=v:ArrayBuffer.isView(v)?E[w]=v.slice():E[w]=v.clone(),!0;{let P=E[w];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return E[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function m(b){let A=b.uniforms,x=0,E=16;for(let w=0,P=A.length;w<P;w++){let N=Array.isArray(A[w])?A[w]:[A[w]];for(let F=0,G=N.length;F<G;F++){let L=N[F],z=Array.isArray(L.value)?L.value:[L.value];for(let X=0,j=z.length;X<j;X++){let ut=z[X],V=p(ut),Y=x%E,K=Y%V.boundary,Dt=Y+K;x+=K,Dt!==0&&E-Dt<V.storage&&(x+=E-Dt),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=V.storage}}}let v=x%E;return v>0&&(x+=E-v),b.__size=x,b.__cache={},this}function p(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):me("WebGLRenderer: Unsupported uniform value type.",b),A}function M(b){let A=b.target;A.removeEventListener("dispose",M);let x=a.indexOf(A.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function T(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function Xv(){return cs===null&&(cs=new Ba(Wv,16,16,Zs,Zi),cs.name="DFG_LUT",cs.minFilter=Sn,cs.magFilter=Sn,cs.wrapS=ns,cs.wrapT=ns,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var Lc=class{constructor(t={}){let{canvas:e=Mf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=hi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Jl,$l,Kl]),p=new Set([hi,qi,ra,aa,Yl,ql]),M=new Uint32Array(4),T=new Int32Array(4),b=new C,A=null,x=null,E=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,F=null,G=null,L=null,z=null;this._outputColorSpace=dn;let X=0,j=0,ut=null,V=-1,Y=null,K=new on,Dt=new on,St=null,Gt=new le(0),Xt=0,Ut=e.width,et=e.height,at=1,It=null,qt=null,Pt=new on(0,0,Ut,et),Rt=new on(0,0,Ut,et),de=!1,lt=new qr,ft=!1,xt=!1,_t=new He,Et=new C,Zt=new on,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function se(){return ut===null?at:1}let D=i;function we(S,U){return e.getContext(S,U)}let oe,k,_,B,q,it,Mt,Lt,rt,ht,Nt,Jt,$,ct,vt,wt,mt,I,yt,nt,At,Tt,gt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",bt,!1),D===null){let U="webgl2";if(D=we(U,S),D===null)throw we(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(S){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),ye("WebGLRenderer: "+S.message),S}function Yt(){oe=new j_(D),oe.init(),At=new Ov(D,oe),k=new G_(D,oe,t,At),_=new Uv(D,oe),k.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),G=D.createFramebuffer(),L=D.createFramebuffer(),z=D.createFramebuffer(),B=new ex(D),q=new Mv,it=new Fv(D,oe,_,q,k,At,B),Mt=new J_(P),Lt=new ig(D),Tt=new B_(D,Lt),rt=new Q_(D,Lt,B,Tt),ht=new ix(D,rt,Lt,Tt,B),I=new nx(D,k,it),vt=new H_(q),Nt=new bv(P,Mt,oe,k,Tt,vt),Jt=new Gv(P,q),$=new wv,ct=new Cv(oe),mt=new z_(P,Mt,_,ht,g,l),wt=new Nv(P,ht,k),gt=new Hv(D,B,k,_),yt=new V_(D,oe,B),nt=new tx(D,oe,B),B.programs=Nt.programs,P.capabilities=k,P.extensions=oe,P.properties=q,P.renderLists=$,P.shadowMap=wt,P.state=_,P.info=B}y!==hi&&(w=new rx(y,e.width,e.height,o,s,r));let Ht=new Ah(P,D);this.xr=Ht,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(S){S!==void 0&&(at=S,this.setSize(Ut,et,!1))},this.getSize=function(S){return S.set(Ut,et)},this.setSize=function(S,U,tt=!0){if(Ht.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}Ut=S,et=U,e.width=Math.floor(S*at),e.height=Math.floor(U*at),tt===!0&&(e.style.width=S+"px",e.style.height=U+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Ut*at,et*at).floor()},this.setDrawingBufferSize=function(S,U,tt){Ut=S,et=U,at=tt,e.width=Math.floor(S*tt),e.height=Math.floor(U*tt),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(y===hi){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(K)},this.getViewport=function(S){return S.copy(Pt)},this.setViewport=function(S,U,tt,J){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,U,tt,J),_.viewport(K.copy(Pt).multiplyScalar(at).round())},this.getScissor=function(S){return S.copy(Rt)},this.setScissor=function(S,U,tt,J){S.isVector4?Rt.set(S.x,S.y,S.z,S.w):Rt.set(S,U,tt,J),_.scissor(Dt.copy(Rt).multiplyScalar(at).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){_.setScissorTest(de=S)},this.setOpaqueSort=function(S){It=S},this.setTransparentSort=function(S){qt=S},this.getClearColor=function(S){return S.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,tt=!0){let J=0;if(S){let W=!1;if(ut!==null){let Ft=ut.texture.format;W=m.has(Ft)}if(W){let Ft=ut.texture.type,$t=p.has(Ft),zt=mt.getClearColor(),Qt=mt.getClearAlpha(),ae=zt.r,Ee=zt.g,Ce=zt.b;$t?(M[0]=ae,M[1]=Ee,M[2]=Ce,M[3]=Qt,D.clearBufferuiv(D.COLOR,0,M)):(T[0]=ae,T[1]=Ee,T[2]=Ce,T[3]=Qt,D.clearBufferiv(D.COLOR,0,T))}else J|=D.COLOR_BUFFER_BIT}U&&(J|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),mt.dispose(),$.dispose(),ct.dispose(),q.dispose(),Mt.dispose(),ht.dispose(),Tt.dispose(),gt.dispose(),Nt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Vt),Ht.removeEventListener("sessionend",re),_e.stop()};function Se(S){S.preventDefault(),ju("WebGLRenderer: Context Lost."),N=!0}function Z(){ju("WebGLRenderer: Context Restored."),N=!1;let S=B.autoReset,U=wt.enabled,tt=wt.autoUpdate,J=wt.needsUpdate,W=wt.type;Yt(),B.autoReset=S,wt.enabled=U,wt.autoUpdate=tt,wt.needsUpdate=J,wt.type=W}function bt(S){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function R(S){let U=S.target;U.removeEventListener("dispose",R),O(U)}function O(S){Q(S),q.remove(S)}function Q(S){let U=q.get(S).programs;U!==void 0&&(U.forEach(function(tt){Nt.releaseProgram(tt)}),S.isShaderMaterial&&Nt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,tt,J,W,Ft){U===null&&(U=Bt);let $t=W.isMesh&&W.matrixWorld.determinantAffine()<0,zt=ve(S,U,tt,J,W);_.setMaterial(J,$t);let Qt=tt.index,ae=1;if(J.wireframe===!0){if(Qt=rt.getWireframeAttribute(tt),Qt===void 0)return;ae=2}let Ee=tt.drawRange,Ce=tt.attributes.position,ie=Ee.start*ae,Xe=(Ee.start+Ee.count)*ae;Ft!==null&&(ie=Math.max(ie,Ft.start*ae),Xe=Math.min(Xe,(Ft.start+Ft.count)*ae)),Qt!==null?(ie=Math.max(ie,0),Xe=Math.min(Xe,Qt.count)):Ce!=null&&(ie=Math.max(ie,0),Xe=Math.min(Xe,Ce.count));let Rn=Xe-ie;if(Rn<0||Rn===1/0)return;Tt.setup(W,J,zt,tt,Qt);let en,Qe=yt;if(Qt!==null&&(en=Lt.get(Qt),Qe=nt,Qe.setIndex(en)),W.isMesh)J.wireframe===!0?(_.setLineWidth(J.wireframeLinewidth*se()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(W.isLine){let Wn=J.linewidth;Wn===void 0&&(Wn=1),_.setLineWidth(Wn*se()),W.isLineSegments?Qe.setMode(D.LINES):W.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else W.isPoints?Qe.setMode(D.POINTS):W.isSprite&&Qe.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Wn=W._multiDrawStarts,te=W._multiDrawCounts,jn=W._multiDrawCount,Oe=Qt?Lt.get(Qt).bytesPerElement:1,Ei=q.get(J).currentProgram.getUniforms();for(let ts=0;ts<jn;ts++)Ei.setValue(D,"_gl_DrawID",ts),Qe.render(Wn[ts]/Oe,te[ts])}else if(W.isInstancedMesh)Qe.renderInstances(ie,Rn,W.count);else if(tt.isInstancedBufferGeometry){let Wn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,te=Math.min(tt.instanceCount,Wn);Qe.renderInstances(ie,Rn,te)}else Qe.render(ie,Rn)};function dt(S,U,tt,J){F!==null&&S.isNodeMaterial&&F.setObject(J,S),ft===!0&&vt.setState(S,tt,!1),S.transparent===!0&&S.side===wn&&S.forceSinglePass===!1?(S.side=Vn,S.needsUpdate=!0,H(S,U,J),S.side=Xs,S.needsUpdate=!0,H(S,U,J),S.side=wn):H(S,U,J)}this.compile=function(S,U,tt=null){tt===null&&(tt=S),F!==null&&F.renderStart(S,U,tt),x=ct.get(tt),x.init(U),v.push(x),tt.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),S!==tt&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights(),F!==null&&F.updateLights(x.state.lightsArray),xt=this.localClippingEnabled,ft=vt.init(this.clippingPlanes,xt),ft===!0&&vt.setGlobalState(this.clippingPlanes,U),F!==null&&wt.render(x.state.shadowsArray,tt,U);let J=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ft=W.material;if(Ft)if(Array.isArray(Ft))for(let $t=0;$t<Ft.length;$t++){let zt=Ft[$t];dt(zt,tt,U,W),J.add(zt)}else dt(Ft,tt,U,W),J.add(Ft)}),x=v.pop(),F!==null&&F.renderEnd(),J},this.compileAsync=function(S,U,tt=null){let J=this.compile(S,U,tt);return new Promise(W=>{function Ft(){if(J.forEach(function($t){let Qt=q.get($t).currentProgram;(Qt===void 0||Qt.isReady())&&J.delete($t)}),J.size===0){W(S);return}setTimeout(Ft,10)}oe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let st=null;function jt(S){st&&st(S)}function Vt(){_e.stop()}function re(){_e.start()}let _e=new ep;_e.setAnimationLoop(jt),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(S){st=S,Ht.setAnimationLoop(S),S===null?_e.stop():_e.start()},Ht.addEventListener("sessionstart",Vt),Ht.addEventListener("sessionend",re),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(S,U);let tt=Ht.enabled===!0&&Ht.isPresenting===!0,J=w!==null&&(ut===null||tt)&&w.begin(P,ut);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(U),U=Ht.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,ut),x=ct.get(S,v.length),x.init(U),x.state.textureUnits=it.getTextureUnits(),v.push(x),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),lt.setFromProjectionMatrix(_t,Vi,U.reversedDepth),xt=this.localClippingEnabled,ft=vt.init(this.clippingPlanes,xt),A=$.get(S,E.length),A.init(),E.push(A),Ht.enabled===!0&&Ht.isPresenting===!0){let $t=P.xr.getDepthSensingMesh();$t!==null&&xe($t,U,-1/0,P.sortObjects)}xe(S,U,0,P.sortObjects),A.finish(),F!==null&&F.updateLights(x.state.lightsArray),P.sortObjects===!0&&A.sort(It,qt),Kt=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Kt&&mt.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&vt.beginShadows();let W=x.state.shadowsArray;if(wt.render(W,S,U),ft===!0&&vt.endShadows(),(J&&w.hasRenderPass())===!1){let $t=A.opaque,zt=A.transmissive;if(x.setupLights(),U.isArrayCamera){let Qt=U.cameras;if(zt.length>0)for(let ae=0,Ee=Qt.length;ae<Ee;ae++){let Ce=Qt[ae];yn($t,zt,S,Ce)}Kt&&mt.render(S);for(let ae=0,Ee=Qt.length;ae<Ee;ae++){let Ce=Qt[ae];Pe(A,S,Ce,Ce.viewport)}}else zt.length>0&&yn($t,zt,S,U),Kt&&mt.render(S),Pe(A,S,U)}ut!==null&&j===0&&(it.updateMultisampleRenderTarget(ut),it.updateRenderTargetMipmap(ut)),J&&w.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),Tt.resetDefaultState(),V=-1,Y=null,v.pop(),v.length>0?(x=v[v.length-1],it.setTextureUnits(x.state.textureUnits),ft===!0&&vt.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,F!==null&&F.renderEnd()};function xe(S,U,tt,J){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)tt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)x.pushLightProbeGrid(S);else if(S.isLight)x.pushLight(S),S.castShadow&&x.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(lt)){J&&Zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_t);let $t=ht.update(S),zt=S.material;zt.visible&&A.push(S,$t,zt,tt,Zt.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(lt))){let $t=ht.update(S),zt=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Zt.copy(S.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),Zt.copy($t.boundingSphere.center)),Zt.applyMatrix4(S.matrixWorld).applyMatrix4(_t)),Array.isArray(zt)){let Qt=$t.groups;for(let ae=0,Ee=Qt.length;ae<Ee;ae++){let Ce=Qt[ae],ie=zt[Ce.materialIndex];ie&&ie.visible&&A.push(S,$t,ie,tt,Zt.z,Ce,U)}}else zt.visible&&A.push(S,$t,zt,tt,Zt.z,null,U)}}let Ft=S.children;for(let $t=0,zt=Ft.length;$t<zt;$t++)xe(Ft[$t],U,tt,J)}function Pe(S,U,tt,J){let{opaque:W,transmissive:Ft,transparent:$t}=S;x.setupLightsView(tt),ft===!0&&vt.setGlobalState(P.clippingPlanes,tt),J&&_.viewport(K.copy(J)),W.length>0&&je(W,U,tt),Ft.length>0&&je(Ft,U,tt),$t.length>0&&je($t,U,tt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function yn(S,U,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[J.id]===void 0){let ie=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[J.id]=new ui(1,1,{generateMipmaps:!0,type:ie?Zi:hi,minFilter:Ri,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}let Ft=x.state.transmissionRenderTarget[J.id],$t=J.viewport||K;Ft.setSize($t.z*P.transmissionResolutionScale,$t.w*P.transmissionResolutionScale);let zt=P.getRenderTarget(),Qt=P.getActiveCubeFace(),ae=P.getActiveMipmapLevel();P.setRenderTarget(Ft),P.getClearColor(Gt),Xt=P.getClearAlpha(),Xt<1&&P.setClearColor(16777215,.5),P.clear(),Kt&&mt.render(tt);let Ee=P.toneMapping;P.toneMapping=Yi;let Ce=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),x.setupLightsView(J),ft===!0&&vt.setGlobalState(P.clippingPlanes,J),je(S,tt,J),it.updateMultisampleRenderTarget(Ft),it.updateRenderTargetMipmap(Ft),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Xe=0,Rn=U.length;Xe<Rn;Xe++){let en=U[Xe],{object:Qe,geometry:Wn,material:te,group:jn}=en;if(te.side===wn&&Qe.layers.test(J.layers)){let Oe=te.side;te.side=Vn,te.needsUpdate=!0,Hn(Qe,tt,J,Wn,te,jn),te.side=Oe,te.needsUpdate=!0,ie=!0}}ie===!0&&(it.updateMultisampleRenderTarget(Ft),it.updateRenderTargetMipmap(Ft))}P.setRenderTarget(zt,Qt,ae),P.setClearColor(Gt,Xt),Ce!==void 0&&(J.viewport=Ce),P.toneMapping=Ee}function je(S,U,tt){let J=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Ft=S.length;W<Ft;W++){let $t=S[W],{object:zt,geometry:Qt,group:ae}=$t,Ee=$t.material;Ee.allowOverride===!0&&J!==null&&(Ee=J),zt.layers.test(tt.layers)&&Hn(zt,U,tt,Qt,Ee,ae)}}function Hn(S,U,tt,J,W,Ft){F!==null&&W.isNodeMaterial&&F.setObject(S,W),S.onBeforeRender(P,U,tt,J,W,Ft),S.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,U,tt,J,S,Ft),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=Vn,W.needsUpdate=!0,P.renderBufferDirect(tt,U,J,W,S,Ft),W.side=Xs,W.needsUpdate=!0,P.renderBufferDirect(tt,U,J,W,S,Ft),W.side=wn):P.renderBufferDirect(tt,U,J,W,S,Ft),S.onAfterRender(P,U,tt,J,W,Ft)}function H(S,U,tt){U.isScene!==!0&&(U=Bt);let J=q.get(S),W=x.state.lights,Ft=x.state.shadowsArray,$t=W.state.version,zt=Nt.getParameters(S,W.state,Ft,U,tt,x.state.lightProbeGridArray),Qt=Nt.getProgramCacheKey(zt),ae=J.programs;J.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,J.fog=U.fog;let Ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;J.envMap=Mt.get(S.envMap||J.environment,Ee),J.envMapRotation=J.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,ae===void 0&&(S.addEventListener("dispose",R),ae=new Map,J.programs=ae);let Ce=ae.get(Qt);if(Ce!==void 0){if(J.currentProgram===Ce&&J.lightsStateVersion===$t)return ne(S,zt),Ce}else zt.uniforms=Nt.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,tt,zt),S.onBeforeCompile(zt,P),Ce=Nt.acquireProgram(zt,Qt),ae.set(Qt,Ce),J.uniforms=zt.uniforms;let ie=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ie.clippingPlanes=vt.uniform),ne(S,zt),J.needsLights=We(S),J.lightsStateVersion=$t,J.needsLights&&(ie.ambientLightColor.value=W.state.ambient,ie.lightProbe.value=W.state.probe,ie.sunLights.value=W.state.sun,ie.sunLightShadows.value=W.state.sunShadow,ie.directionalLights.value=W.state.directional,ie.directionalLightShadows.value=W.state.directionalShadow,ie.spotLights.value=W.state.spot,ie.spotLightShadows.value=W.state.spotShadow,ie.rectAreaLights.value=W.state.rectArea,ie.ltc_1.value=W.state.rectAreaLTC1,ie.ltc_2.value=W.state.rectAreaLTC2,ie.pointLights.value=W.state.point,ie.pointLightShadows.value=W.state.pointShadow,ie.hemisphereLights.value=W.state.hemi,ie.sunShadowMatrix.value=W.state.sunShadowMatrix,ie.sunShadowCascade.value=W.state.sunShadowCascade,ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ie.spotLightMatrix.value=W.state.spotLightMatrix,ie.spotLightMap.value=W.state.spotLightMap,ie.pointShadowMatrix.value=W.state.pointShadowMatrix),J.lightProbeGrid=x.state.lightProbeGridArray.length>0,J.currentProgram=Ce,J.uniformsList=null,Ce}function ot(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=ca.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ne(S,U){let tt=q.get(S);tt.outputColorSpace=U.outputColorSpace,tt.batching=U.batching,tt.batchingColor=U.batchingColor,tt.instancing=U.instancing,tt.instancingColor=U.instancingColor,tt.instancingMorph=U.instancingMorph,tt.skinning=U.skinning,tt.morphTargets=U.morphTargets,tt.morphNormals=U.morphNormals,tt.morphColors=U.morphColors,tt.morphTargetsCount=U.morphTargetsCount,tt.numClippingPlanes=U.numClippingPlanes,tt.numIntersection=U.numClipIntersection,tt.vertexAlphas=U.vertexAlphas,tt.vertexTangents=U.vertexTangents,tt.toneMapping=U.toneMapping}function Me(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let tt=0,J=S.length;tt<J;tt++){let W=S[tt];if(W.texture!==null&&W.boundingBox.containsPoint(b))return W}return null}function ve(S,U,tt,J,W){U.isScene!==!0&&(U=Bt),it.resetTextureUnits();let Ft=U.fog,$t=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?U.environment:null,zt=ut===null?P.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ie.workingColorSpace,Qt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,ae=Mt.get(J.envMap||$t,Qt),Ee=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Ce=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ie=!!tt.morphAttributes.position,Xe=!!tt.morphAttributes.normal,Rn=!!tt.morphAttributes.color,en=Yi;J.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(en=P.toneMapping);let Qe=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Wn=Qe!==void 0?Qe.length:0,te=q.get(J),jn=x.state.lights;if(ft===!0&&(xt===!0||S!==Y)){let tn=S===Y&&J.id===V;vt.setState(J,S,tn)}let Oe=!1;J.version===te.__version?(te.needsLights&&te.lightsStateVersion!==jn.state.version||te.outputColorSpace!==zt||W.isBatchedMesh&&te.batching===!1||!W.isBatchedMesh&&te.batching===!0||W.isBatchedMesh&&te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&te.instancing===!1||!W.isInstancedMesh&&te.instancing===!0||W.isSkinnedMesh&&te.skinning===!1||!W.isSkinnedMesh&&te.skinning===!0||W.isInstancedMesh&&te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&te.instancingMorph===!1&&W.morphTexture!==null||te.envMap!==ae||J.fog===!0&&te.fog!==Ft||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==vt.numPlanes||te.numIntersection!==vt.numIntersection)||te.vertexAlphas!==Ee||te.vertexTangents!==Ce||te.morphTargets!==ie||te.morphNormals!==Xe||te.morphColors!==Rn||te.toneMapping!==en||te.morphTargetsCount!==Wn||!!te.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,te.__version=J.version);let Ei=te.currentProgram;Oe===!0&&(Ei=H(J,U,W),F&&J.isNodeMaterial&&F.onUpdateProgram(J,Ei,te));let ts=!1,Cs=!1,vr=!1,Je=Ei.getUniforms(),bn=te.uniforms;if(_.useProgram(Ei.program)&&(ts=!0,Cs=!0,vr=!0),J.id!==V&&(V=J.id,Cs=!0),te.needsLights){let tn=Me(x.state.lightProbeGridArray,W);te.lightProbeGrid!==tn&&(te.lightProbeGrid=tn,Cs=!0)}if(ts||Y!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Je.setValue(D,"projectionMatrix",S.projectionMatrix),Je.setValue(D,"viewMatrix",S.matrixWorldInverse);let Is=Je.map.cameraPosition;Is!==void 0&&Is.setValue(D,Et.setFromMatrixPosition(S.matrixWorld)),k.logarithmicDepthBuffer&&Je.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Je.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,Cs=!0,vr=!0)}if(te.needsLights&&(jn.state.sunShadowMap.length>0&&Je.setValue(D,"sunShadowMap",jn.state.sunShadowMap,it),jn.state.directionalShadowMap.length>0&&Je.setValue(D,"directionalShadowMap",jn.state.directionalShadowMap,it),jn.state.spotShadowMap.length>0&&Je.setValue(D,"spotShadowMap",jn.state.spotShadowMap,it),jn.state.pointShadowMap.length>0&&Je.setValue(D,"pointShadowMap",jn.state.pointShadowMap,it)),W.isSkinnedMesh){Je.setOptional(D,W,"bindMatrix"),Je.setOptional(D,W,"bindMatrixInverse");let tn=W.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Je.setValue(D,"boneTexture",tn.boneTexture,it))}W.isBatchedMesh&&(Je.setOptional(D,W,"batchingTexture"),Je.setValue(D,"batchingTexture",W._matricesTexture,it),Je.setOptional(D,W,"batchingIdTexture"),Je.setValue(D,"batchingIdTexture",W._indirectTexture,it),Je.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Je.setValue(D,"batchingColorTexture",W._colorsTexture,it));let Ps=tt.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&I.update(W,tt,Ei),(Cs||te.receiveShadow!==W.receiveShadow)&&(te.receiveShadow=W.receiveShadow,Je.setValue(D,"receiveShadow",W.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&U.environment!==null&&(bn.envMapIntensity.value=U.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=Xv()),Cs){if(Je.setValue(D,"toneMappingExposure",P.toneMappingExposure),te.needsLights&&vn(bn,vr),Ft&&J.fog===!0&&Jt.refreshFogUniforms(bn,Ft),Jt.refreshMaterialUniforms(bn,J,at,et,x.state.transmissionRenderTarget[S.id]),te.needsLights&&te.lightProbeGrid){let tn=te.lightProbeGrid;bn.probesSH.value=tn.texture,bn.probesMin.value.copy(tn.boundingBox.min),bn.probesMax.value.copy(tn.boundingBox.max),bn.probesResolution.value.copy(tn.resolution)}ca.upload(D,ot(te),bn,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ca.upload(D,ot(te),bn,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Je.setValue(D,"center",W.center),Je.setValue(D,"modelViewMatrix",W.modelViewMatrix),Je.setValue(D,"normalMatrix",W.normalMatrix),Je.setValue(D,"modelMatrix",W.matrixWorld),J.uniformsGroups!==void 0){let tn=J.uniformsGroups;for(let Is=0,br=tn.length;Is<br;Is++){let Qh=tn[Is];gt.update(Qh,Ei),gt.bind(Qh,Ei)}}return Ei}function vn(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function We(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(S,U,tt){let J=q.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=U,q.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:tt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let tt=q.get(S);tt.__webglFramebuffer=U,tt.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,tt=0){ut=S,X=U,j=tt;let J=null,W=!1,Ft=!1;if(S){let zt=q.get(S);if(zt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,zt.__webglFramebuffer),K.copy(S.viewport),Dt.copy(S.scissor),St=S.scissorTest,_.viewport(K),_.scissor(Dt),_.setScissorTest(St),V=-1;return}else if(zt.__webglFramebuffer===void 0)it.setupRenderTarget(S);else if(zt.__hasExternalTextures)it.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ee=S.depthTexture;if(zt.__boundDepthTexture!==Ee){if(Ee!==null&&q.has(Ee)&&(S.width!==Ee.image.width||S.height!==Ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(S)}}let Qt=S.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);let ae=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ae[U])?J=ae[U][tt]:J=ae[U],W=!0):S.samples>0&&it.useMultisampledRTT(S)===!1?J=q.get(S).__webglMultisampledFramebuffer:Array.isArray(ae)?J=ae[tt]:J=ae,K.copy(S.viewport),Dt.copy(S.scissor),St=S.scissorTest}else K.copy(Pt).multiplyScalar(at).floor(),Dt.copy(Rt).multiplyScalar(at).floor(),St=de;if(tt!==0&&(J=G),_.bindFramebuffer(D.FRAMEBUFFER,J)&&_.drawBuffers(S,J),_.viewport(K),_.scissor(Dt),_.setScissorTest(St),W){let zt=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,zt.__webglTexture,tt)}else if(Ft){let zt=U;for(let Qt=0;Qt<S.textures.length;Qt++){let ae=q.get(S.textures[Qt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Qt,ae.__webglTexture,tt,zt)}}else if(S!==null&&tt!==0){let zt=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,tt)}V=-1};function kn(S){let U=q.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=k.textureFormatReadable(S.format),U.__typeReadable=k.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,tt,J,W,Ft,$t,zt=0){if(!(S&&S.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&$t!==void 0&&(Qt=Qt[$t]),Qt){_.bindFramebuffer(D.FRAMEBUFFER,Qt);try{let ae=S.textures[zt],Ee=ae.format,Ce=ae.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+zt);let ie=kn(ae);if(ie.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ie.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-J&&tt>=0&&tt<=S.height-W&&D.readPixels(U,tt,J,W,At.convert(Ee),At.convert(Ce),Ft)}finally{let ae=ut!==null?q.get(ut).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(S,U,tt,J,W,Ft,$t,zt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&$t!==void 0&&(Qt=Qt[$t]),Qt)if(U>=0&&U<=S.width-J&&tt>=0&&tt<=S.height-W){_.bindFramebuffer(D.FRAMEBUFFER,Qt);let ae=S.textures[zt],Ee=ae.format,Ce=ae.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+zt);let ie=kn(ae);if(ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,Ft.byteLength,D.STREAM_READ),D.readPixels(U,tt,J,W,At.convert(Ee),At.convert(Ce),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Rn=ut!==null?q.get(ut).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Rn);let en=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await wf(D,en,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ft),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Xe),D.deleteSync(en),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,tt=0){let J=Math.pow(2,-tt),W=Math.floor(S.image.width*J),Ft=Math.floor(S.image.height*J),$t=U!==null?U.x:0,zt=U!==null?U.y:0;it.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,tt,0,0,$t,zt,W,Ft),_.unbindTexture()},this.copyTextureToTexture=function(S,U,tt=null,J=null,W=0,Ft=0){let $t,zt,Qt,ae,Ee,Ce,ie,Xe,Rn,en=S.isCompressedTexture?S.mipmaps[Ft]:S.image;if(tt!==null)$t=tt.max.x-tt.min.x,zt=tt.max.y-tt.min.y,Qt=tt.isBox3?tt.max.z-tt.min.z:1,ae=tt.min.x,Ee=tt.min.y,Ce=tt.isBox3?tt.min.z:0;else{let bn=Math.pow(2,-W);$t=Math.floor(en.width*bn),zt=Math.floor(en.height*bn),S.isDataArrayTexture?Qt=en.depth:S.isData3DTexture?Qt=Math.floor(en.depth*bn):Qt=1,ae=0,Ee=0,Ce=0}J!==null?(ie=J.x,Xe=J.y,Rn=J.z):(ie=0,Xe=0,Rn=0);let Qe=At.convert(U.format),Wn=At.convert(U.type),te;U.isData3DTexture?(it.setTexture3D(U,0),te=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(it.setTexture2DArray(U,0),te=D.TEXTURE_2D_ARRAY):(it.setTexture2D(U,0),te=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let jn=_.getParameter(D.UNPACK_ROW_LENGTH),Oe=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Ei=_.getParameter(D.UNPACK_SKIP_PIXELS),ts=_.getParameter(D.UNPACK_SKIP_ROWS),Cs=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,en.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,en.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,ae),_.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);let vr=S.isDataArrayTexture||S.isData3DTexture,Je=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let bn=q.get(S),Ps=q.get(U),tn=q.get(bn.__renderTarget),Is=q.get(Ps.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,tn.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let br=0;br<Qt;br++)vr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(S).__webglTexture,W,Ce+br),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(U).__webglTexture,Ft,Rn+br)),D.blitFramebuffer(ae,Ee,$t,zt,ie,Xe,$t,zt,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||q.has(S)){let bn=q.get(S),Ps=q.get(U);_.bindFramebuffer(D.READ_FRAMEBUFFER,L),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let tn=0;tn<Qt;tn++)vr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,W,Ce+tn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,W),Je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ps.__webglTexture,Ft,Rn+tn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ps.__webglTexture,Ft),W!==0?D.blitFramebuffer(ae,Ee,$t,zt,ie,Xe,$t,zt,D.COLOR_BUFFER_BIT,D.NEAREST):Je?D.copyTexSubImage3D(te,Ft,ie,Xe,Rn+tn,ae,Ee,$t,zt):D.copyTexSubImage2D(te,Ft,ie,Xe,ae,Ee,$t,zt);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Je?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(te,Ft,ie,Xe,Rn,$t,zt,Qt,Qe,Wn,en.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(te,Ft,ie,Xe,Rn,$t,zt,Qt,Qe,en.data):D.texSubImage3D(te,Ft,ie,Xe,Rn,$t,zt,Qt,Qe,Wn,en):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ft,ie,Xe,$t,zt,Qe,Wn,en.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ft,ie,Xe,en.width,en.height,Qe,en.data):D.texSubImage2D(D.TEXTURE_2D,Ft,ie,Xe,$t,zt,Qe,Wn,en);_.pixelStorei(D.UNPACK_ROW_LENGTH,jn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Oe),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ei),_.pixelStorei(D.UNPACK_SKIP_ROWS,ts),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Cs),Ft===0&&U.generateMipmaps&&D.generateMipmap(te),_.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&it.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?it.setTextureCube(S,0):S.isData3DTexture?it.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?it.setTexture2DArray(S,0):it.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){X=0,j=0,ut=null,_.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}};var lp={type:"change"},Th={type:"start"},up={type:"end"},Uc=new Os,cp=new _i,Yv=Math.cos(70*th.DEG2RAD),Dn=new C,di=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eh=1e-6,Fc=class extends lo{constructor(t,e=null){super(t,e),this.state=Ze.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Bn,this._lastTargetPosition=new C,this._quat=new Bn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new na,this._sphericalDelta=new na,this._scale=1,this._panOffset=new C,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new C,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zv.bind(this),this._onPointerDown=qv.bind(this),this._onPointerUp=Kv.bind(this),this._onContextMenu=n1.bind(this),this._onMouseWheel=jv.bind(this),this._onKeyDown=Qv.bind(this),this._onTouchStart=t1.bind(this),this._onTouchMove=e1.bind(this),this._onMouseDown=$v.bind(this),this._onMouseMove=Jv.bind(this),this._interceptControlDown=i1.bind(this),this._interceptControlUp=s1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ze.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lp),this.update(),this.state=Ze.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Dn.copy(e).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=di:i>Math.PI&&(i-=di),s<-Math.PI?s+=di:s>Math.PI&&(s-=di),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),e.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Dn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<Yv?this.object.lookAt(this.target):(cp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane(cp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eh||this._lastTargetPosition.distanceToSquared(this.target)>Eh?(this.dispatchEvent(lp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?di/60*this.autoRotateSpeed*t:di/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Dn.setFromMatrixColumn(e,0),Dn.multiplyScalar(-t),this._panOffset.add(Dn)}_panUp(t,e){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(e,1):(Dn.setFromMatrixColumn(e,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(t),this._panOffset.add(Dn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Dn.copy(s).sub(this.target);let r=Dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(di*this._rotateDelta.x/e.clientHeight),this._rotateUp(di*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(di*this._rotateDelta.x/e.clientHeight),this._rotateUp(di*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function qv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Zv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Kv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(up),this.state=Ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $v(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ze.DOLLY;break;case Hs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}break;case Hs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Th)}function Jv(n){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jv(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(n.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(up))}function Qv(n){this.enabled!==!1&&this._handleKeyDown(n)}function t1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ze.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ze.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Th)}function e1(n){switch(this._trackPointer(n),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ze.NONE}}function n1(n){this.enabled!==!1&&n.preventDefault()}function i1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Oc=class extends ar{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new xn;t.deleteAttribute("uv");let e=new Le({side:Vn}),i=new Le,s=new ro(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ws(t,i,6),o=new ln;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ct(t,da(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ct(t,da(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ct(t,da(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Ct(t,da(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Ct(t,da(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Ct(t,da(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function da(n){return new to({color:0,emissive:16777215,emissiveIntensity:n})}var r1=42e5,kh=[1,.8,.65,.5],hp=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),a1=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function dp(n,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:i=null}={}){let s=window.devicePixelRatio||1,r;try{r=new Lc({canvas:n,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=dn,r.toneMapping=ho,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=Bl,r.shadowMap.autoUpdate=!1,r.setClearColor(new le(t),1);let a=new ar,o=new ua(r);a.environment=o.fromScene(new Oc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new zn(32,1,4,1500);l.position.set(0,160,150),a.add(new no(16777215,13616860,.35));let c=new ao(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new Ct(new gn(900,900),new Qa({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let d=new Fc(l,n);d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),d.dampingFactor=.14,d.rotateSpeed=.75,d.zoomSpeed=.9,d.panSpeed=.8,d.screenSpacePanning=!0,d.minDistance=9,d.maxDistance=1200,d.minPolarAngle=.06,d.maxPolarAngle=1.32,d.zoomToCursor=!0,d.cursor.set(0,6,-3),d.maxTargetRadius=85,d.target.set(0,4,0);function h(){let Z=l.position.distanceTo(d.target),bt=Math.min(4,Math.max(.4,Z*.04));Math.abs(bt-l.near)>bt*.08&&(l.near=bt,l.far=Math.max(900,Z*6),l.updateProjectionMatrix())}let f=0,g=0,y=!1,m=!0,p=new Set,M=new Set,T=[],b=new Set,A=1,x=0,E=0,v=0,w=0,P=[],N=0,F=0,G=0;function L(){!f&&!g&&(f=requestAnimationFrame(j))}function z(){!f&&!g&&(g=setTimeout(()=>{g=0,L()},33))}function X(Z){Math.abs(Z-E)<.01||(E=Z,r.setPixelRatio(Z),r.setSize(n.clientWidth||1,n.clientHeight||1,!1))}function j(Z){f=0;let bt=d.update();for(let Q of b){let dt=Math.min(1,(Z-(Q.bas??=Z))/Q.sure);Q.adim(a1(dt)),Q.golge&&(m=!0),dt>=1?(b.delete(Q),Q.bitti?.()):bt=!0}for(let Q of p)Q(Z)&&(bt=!0);let R=!1;for(let Q of M)Q(Z,w?Math.min(100,Z-w):33)&&(R=!0);w=R?Z:0;let O=bt||R;clearTimeout(G),h(),X(A*kh[x]),m&&(r.shadowMap.needsUpdate=!0,m=!1),r.render(a,l),Jt(),bt?ut(Z):(v=0,P=[]),bt?L():R&&z(),!O&&x>0&&(G=setTimeout(()=>{X(A),r.render(a,l),Jt()},300))}function ut(Z){v&&P.push(Z-v),v=Z;let bt=P.length,R=P.reduce((dt,st)=>dt+st,0),O=bt>=6&&bt<24&&R>=450&&[...P].sort((dt,st)=>dt-st)[bt>>1]>50;if(bt<24&&!O)return;let Q=R/bt;P=[],!(Z-F<(O?300:500))&&(Q>26&&x<kh.length-1?(x++,N=0,F=Z,e("kalite",x)):Q<19&&x>0&&++N>=3&&(x--,N=0,F=Z))}function V(){let Z=n.clientWidth||1,bt=n.clientHeight||1;A=Math.max(.5,Math.min(s,2,Math.sqrt(r1/(Z*bt)))),E=0,X(A*kh[x]),l.aspect=Z/bt,Gt();for(let R of T)R.w=0;oe=0,k=null,!y&&Ut&&xt(Ut,!0),L()}let Y=0,K=0;new ResizeObserver(()=>{clearTimeout(Y);let Z=performance.now();if(document.documentElement.dataset.suruklenen&&Z-K>125){K=Z,V();return}Y=setTimeout(()=>{K=performance.now(),V()},110)}).observe(n),window.addEventListener("bote-erisim",()=>{d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let Z of T)Z.w=0;L()});let St=0;function Gt(){let Z=n.clientWidth||1,bt=n.clientHeight||1;St>0?l.setViewOffset(Z,bt,0,Math.min(St,bt*.9)/2,Z,bt):l.clearViewOffset(),l.updateProjectionMatrix()}function Xt(Z,bt=!1){St=Math.max(0,Z||0),k=null,Gt(),!y&&Ut?xt(Ut,bt):L()}d.addEventListener("change",L),d.addEventListener("start",()=>{y=!0,e("kamera-elle")});let Ut=null,et=new C(0,1,0),at=new C,It=new C,qt=new C,Pt=new C,Rt=new C,de=Z=>Z.isBox3?Z:new qn(new C(Z[0],Z[1],Z[2]),new C(Z[3],Z[4],Z[5]));function lt(Z,bt){let R=i?.()||{},O=Math.min(St,bt*.9),Q=R.sol??16,dt=Z-(R.sag??16),st=R.ust??16,jt=bt-Math.max(R.alt??16,O+12);if(dt-Q<80){let Vt=Z/2;Q=Vt-40,dt=Vt+40}if(jt-st<80){let Vt=(Math.max(0,st)+Math.max(st+80,jt))/2;st=Vt-40,jt=Vt+40}return{x0:Q,y0:st,x1:dt,y1:jt,engel:R.engel||[]}}function ft(Z,bt){let R=n.clientWidth||1,O=n.clientHeight||1,Q=de(Z),dt=new C(...bt).normalize();at.crossVectors(et,dt).normalize(),It.crossVectors(dt,at),qt.copy(dt).negate();let st=k=lt(R,O),jt=Math.tan(l.fov*Math.PI/360),Vt=jt*(R/O),re=Math.min(St,O*.9)/O,_e=(st.x0/R*2-1)*Vt,xe=(st.x1/R*2-1)*Vt,Pe=(1-st.y0/O*2-re)*jt,yn=(1-st.y1/O*2-re)*jt;Q.getCenter(Pt);let je=[],Hn=[],H=[];for(let We=0;We<8;We++)Rt.set(We&1?Q.max.x:Q.min.x,We&2?Q.max.y:Q.min.y,We&4?Q.max.z:Q.min.z).sub(Pt),je.push(Rt.dot(at)),Hn.push(Rt.dot(It)),H.push(Rt.dot(qt));let ot=0;for(let We=0;We<8;We++){ot=Math.max(ot,2-H[We]);for(let kn=0;kn<8;kn++)ot=Math.max(ot,(je[We]-je[kn]-xe*H[We]+_e*H[kn])/(xe-_e),(Hn[We]-Hn[kn]-Pe*H[We]+yn*H[kn])/(Pe-yn))}ot=Math.min(d.maxDistance,Math.max(d.minDistance,ot));let ne=(We,kn,S)=>{let U=-1/0,tt=1/0;for(let W=0;W<8;W++)U=Math.max(U,We[W]-S*(H[W]+ot)),tt=Math.min(tt,We[W]-kn*(H[W]+ot));if(!(tt>U))return(U+tt)/2;let J=W=>{let Ft=-1/0,$t=1/0;for(let zt=0;zt<8;zt++){let Qt=(We[zt]-W)/(H[zt]+ot);Qt>Ft&&(Ft=Qt),Qt<$t&&($t=Qt)}return S-Ft-($t-kn)};for(let W=0;W<32;W++){let Ft=(U+tt)/2;J(Ft)>0?tt=Ft:U=Ft}return(U+tt)/2},Me=ne(je,_e,xe),ve=ne(Hn,yn,Pe),vn=Pt.clone().addScaledVector(at,Me).addScaledVector(It,ve);return{merkez:vn,konum:vn.clone().addScaledVector(dt,ot)}}function xt(Z,bt=!1){Ut=Z,y=!1;let{merkez:R,konum:O}=ft(Z.kutu,Z.yon);if(bt||hp())return l.position.copy(O),d.target.copy(R),d.update(),L(),Promise.resolve();let Q=l.position.clone(),dt=d.target.clone();return d.enabled=!1,Et(650,st=>{l.position.lerpVectors(Q,O,st),d.target.lerpVectors(dt,R,st),l.lookAt(d.target)}).then(()=>{d.enabled=!0,d.update()})}function _t(){if(!Ut)return null;l.updateMatrixWorld();let Z=n.clientWidth||1,bt=n.clientHeight||1,R=de(Ut.kutu),O=1/0,Q=-1/0,dt=1/0,st=-1/0;for(let jt=0;jt<8;jt++){Rt.set(jt&1?R.max.x:R.min.x,jt&2?R.max.y:R.min.y,jt&4?R.max.z:R.min.z).project(l);let Vt=(Rt.x+1)/2*Z,re=(1-Rt.y)/2*bt;O=Math.min(O,Vt),Q=Math.max(Q,Vt),dt=Math.min(dt,re),st=Math.max(st,re)}return{kutu:{x0:O,y0:dt,x1:Q,y1:st},guvenli:lt(Z,bt),w:Z,h:bt}}function Et(Z,bt,R=!1){return hp()?(bt(1),R&&(m=!0),L(),Promise.resolve()):new Promise(O=>{b.add({sure:Z,adim:bt,bitti:O,golge:R}),L()})}let Zt=n.parentElement.querySelector(".etiketler"),Bt=n.parentElement.querySelector(".isaretler")||Zt,Kt="http://www.w3.org/2000/svg",se=document.createElementNS(Kt,"svg");se.setAttribute("class","cizgiler"),se.setAttribute("aria-hidden","true"),Zt.appendChild(se);let D=[],we=[],oe=0,k=null,_=new C,B=new C,q=new C,it=Z=>{for(let bt=Z;bt;bt=bt.parent)if(!bt.visible)return!1;return!0};function Mt(Z){for(let bt of T)bt.el.remove(),bt.cizgi.remove(),bt.nokt.remove();T.length=0;for(let{nokta:bt,metin:R,tur:O}of Z){let Q=document.createElement("div");Q.className="etiket"+(O?` etiket-${O}`:""),Q.textContent=R,Zt.appendChild(Q);let dt=document.createElementNS(Kt,"line"),st=document.createElementNS(Kt,"circle");st.setAttribute("r","4.5"),se.append(dt,st),T.push({el:Q,nokta:bt,cizgi:dt,nokt:st,w:0,h:0})}L()}function Lt(Z){for(let bt of D)bt.el.remove();D.length=0;for(let bt of Z)bt.el.hidden=!0,Bt.appendChild(bt.el),D.push({...bt,acik:!1});we=D.map((bt,R)=>[bt,R]).sort((bt,R)=>(R[0].oncelik??1)-(bt[0].oncelik??1)||bt[1]-R[1]).map(([bt])=>bt),oe=0,k=null,L()}function rt(Z,bt){for(let R=D.length-1;R>=0;R--){let O=D[R].el;if(O.hidden)continue;let Q=O.getBoundingClientRect(),dt=Q.width/2;if(dt&&Math.hypot(Z-Q.left-dt,bt-Q.top-Q.height/2)<=dt+2)return O}return null}function ht(Z,bt){if(!D.length)return;oe||(oe=parseFloat(getComputedStyle(Bt).getPropertyValue("--isaret"))||44);let R=k||(k=lt(Z,bt)),O=oe+4,Q=[],dt=document.activeElement,st=Math.tan(l.fov*Math.PI/360),jt=D.some(Vt=>Vt.el===dt)?[...we].sort((Vt,re)=>(re.el===dt)-(Vt.el===dt)):we;for(let Vt of jt){let re=!1,_e=0,xe=0;(!Vt.nesne||it(Vt.nesne))&&(Vt.nesne?B.copy(Vt.yerel).applyMatrix4(Vt.nesne.matrixWorld):B.copy(Vt.nokta),q.copy(B).applyMatrix4(l.matrixWorldInverse),q.z<-l.near&&(_.copy(B).project(l),_e=(_.x+1)/2*Z,xe=(1-_.y)/2*bt,re=_e>=R.x0&&_e<=R.x1&&xe>=R.y0&&xe<=R.y1&&!R.engel.some(Pe=>_e>Pe.x0-O/2&&_e<Pe.x1+O/2&&xe>Pe.y0-O/2&&xe<Pe.y1+O/2),re&&Vt.adim&&(re=Vt.adim*bt/(2*-q.z*st)>=oe),re&&Vt.el!==dt&&(re=!Q.some(Pe=>Math.abs(Pe.x-_e)<O&&Math.abs(Pe.y-xe)<O)))),re&&(Q.push({x:_e,y:xe}),Vt.el.style.transform=`translate3d(${Math.round(_e)}px,${Math.round(xe)}px,0)`),Vt.acik!==re&&(Vt.acik=re,Vt.el.hidden=!re)}}let Nt=(Z,bt,R)=>(_.copy(Z).project(l),{x:(_.x+1)/2*bt,y:(1-_.y)/2*R,gor:_.z<1&&Math.abs(_.x)<1.05&&Math.abs(_.y)<1.05});function Jt(){let Z=n.clientWidth,bt=n.clientHeight;if(ht(Z,bt),!T.length)return;se.setAttribute("width",Z),se.setAttribute("height",bt);let R=[],O=8,Q=30,dt=T.map(st=>({e:st,p:Nt(st.nokta,Z,bt)})).sort((st,jt)=>jt.p.y-st.p.y);for(let{e:st,p:jt}of dt){st.w||(st.w=st.el.offsetWidth,st.h=st.el.offsetHeight);let Vt=Math.min(Math.max(jt.x-st.w/2,6),Z-st.w-6),re=jt.y-Q-st.h,_e=!1;for(let Pe=0;Pe<6;Pe++){let yn=R.find(je=>Vt<je.x+je.w+O&&Vt+st.w+O>je.x&&re<je.y+je.h+O&&re+st.h+O>je.y);if(!yn)break;if(re=yn.y-st.h-O,re<4){re=jt.y+Q,_e=!0,Vt=Math.min(Math.max(yn.x+yn.w+O,6),Z-st.w-6);break}}R.push({x:Vt,y:re,w:st.w,h:st.h});let xe=jt.gor?"1":"0";st.el.style.opacity=xe,st.cizgi.style.opacity=xe,st.nokt.style.opacity=xe,st.el.style.transform=`translate3d(${Math.round(Vt)}px,${Math.round(re)}px,0)`,st.cizgi.setAttribute("x1",jt.x.toFixed(1)),st.cizgi.setAttribute("y1",jt.y.toFixed(1)),st.cizgi.setAttribute("x2",(Vt+st.w/2).toFixed(1)),st.cizgi.setAttribute("y2",(_e?re:re+st.h).toFixed(1)),st.nokt.setAttribute("cx",jt.x.toFixed(1)),st.nokt.setAttribute("cy",jt.y.toFixed(1))}}let $=new oo,ct=new kt,vt=[],wt=new Set,mt=new C,I=new C,yt=new C,nt=Z=>!Z.isMesh||Z.isInstancedMesh||Z===u||!it(Z)?!1:(Array.isArray(Z.material)?Z.material:[Z.material]).some(R=>R&&R.visible!==!1&&R.blending!==uo&&!(R.transparent&&R.opacity<.2));function At(Z,bt,R=1){ct.set(Z,bt),$.setFromCamera(ct,l);let O=$.intersectObjects(a.children,!0).find(xe=>nt(xe.object)),Q=O?O.point:null,dt=O?O.distance:1/0,st=n.clientHeight||1,jt=Math.tan(l.fov*Math.PI/360),Vt=null,re=1/0,_e=1/0;for(let xe of vt){let Pe=xe.userData;if(Pe.etkin===!1||!it(xe))continue;let yn=!1;if(Q&&Pe.yari){mt.copy(Q),xe.worldToLocal(mt),I.setFromMatrixScale(xe.matrixWorld);let[H,ot,ne]=Pe.yari,Me=.25;yn=Math.abs(mt.x)<=H+Me/I.x&&Math.abs(mt.y)<=ot+Me/I.y&&Math.abs(mt.z)<=ne+Me/I.z}if(!yn&&Pe.ince&&xe.isMesh){let H=$.intersectObject(xe,!1)[0];yn=!!H&&H.distance<=dt+.5}if(!yn||(yt.setFromMatrixPosition(xe.matrixWorld),Pe.minPx&&Pe.minAdim&&(q.copy(yt).applyMatrix4(l.matrixWorldInverse),Pe.minAdim*st/(2*Math.max(.01,-q.z)*jt)<Pe.minPx*R)))continue;let je=Pe.hacim??1/0,Hn=Q?yt.distanceToSquared(Q):0;(je<re*.99||je<=re*1.01&&Hn<_e)&&(Vt=xe,re=je,_e=Hn)}return{vekil:Vt,nokta:Q?Q.clone():Vt?new C().setFromMatrixPosition(Vt.matrixWorld):null}}let Tt=new Set,gt=null,Yt=!1;n.addEventListener("pointerdown",Z=>{if(Tt.add(Z.pointerId),Tt.size>1){Yt=!0,gt=null;return}gt=Yt?null:{x:Z.clientX,y:Z.clientY,t:performance.now(),id:Z.pointerId}}),n.addEventListener("pointerup",Z=>{let bt=gt;if(Tt.delete(Z.pointerId),Tt.size||(Yt=!1),!bt||bt.id!==Z.pointerId||(gt=null,Math.hypot(Z.clientX-bt.x,Z.clientY-bt.y)>9||performance.now()-bt.t>600))return;let R=D.length?rt(Z.clientX,Z.clientY):null;if(R){R.click();return}let O=n.getBoundingClientRect(),Q=Z.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,dt=At((Z.clientX-O.left)/O.width*2-1,-((Z.clientY-O.top)/O.height)*2+1,Q);for(let st of wt)st(dt.vekil?dt.vekil.userData:null,dt.nokta,dt.vekil)}),n.addEventListener("pointercancel",Z=>{Tt.delete(Z.pointerId),Tt.size||(Yt=!1),gt=null});let Ht=null,Se=Z=>{Z!==Ht&&(Ht?.classList.remove("ustunde"),Z?.classList.add("ustunde"),Ht=Z,n.style.cursor=Z?"pointer":"")};return n.addEventListener("pointermove",Z=>{Z.pointerType==="mouse"&&!Z.buttons&&Se(D.length?rt(Z.clientX,Z.clientY):null)}),n.addEventListener("pointerleave",()=>Se(null)),n.addEventListener("contextmenu",Z=>Z.preventDefault()),n.addEventListener("webglcontextlost",Z=>{Z.preventDefault(),e("baglam-kaybi")}),n.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),m=!0,L()}),V(),{renderer:r,scene:a,camera:l,controls:d,hedefler:vt,iste:L,kameraGit:xt,tween:Et,etiketKoy:Mt,isaretKoy:Lt,gorunurAlan:Xt,golgeYenile:()=>{m=!0,L()},kareGuncelleyici:Z=>(p.add(Z),L(),()=>p.delete(Z)),yavasGuncelleyici:Z=>(M.add(Z),L(),()=>M.delete(Z)),dokunmaDinle:Z=>wt.add(Z),sec:At,kadrajOlc:_t,guvenliYenile:()=>{k=null,oe=0,L()},yakinlas:Z=>{let bt=l.position.clone().sub(d.target),R=Math.min(d.maxDistance,Math.max(d.minDistance,bt.length()*Z)),O=l.position.clone(),Q=d.target.clone().addScaledVector(bt.normalize(),R);return y=!0,Et(260,dt=>l.position.lerpVectors(O,Q,dt))},arkaPlan:Z=>{r.setClearColor(new le(Z),1),L()},sonHedef:()=>Ut,kalite:()=>({kademe:x,piksel:Math.round(E*100)/100,tam:Math.round(A*100)/100})}}function fp(n,t){let{DERSLER:e,KAMERA:i}=n,s=t.veri,r=t.pencere,a=t.temaRengi,o=[["DERSLER","object"],["KAMERA","object"],["KESIF","object"],["KATEGORI","object"],["kategoriBul","function"],["sahneyiKur","function"]].filter(([R,O])=>!n[R]||typeof n[R]!==O).map(([R])=>R);e&&!e[s.slug]&&o.push(`DERSLER['${s.slug}']`),i&&!i.genel&&o.push("KAMERA.genel"),o.length&&console.error(`dersMotoru(${n.id||"?"}): aile tan\u0131m\u0131nda eksik zorunlu alan: ${o.join(", ")}. Sahne a\xE7\u0131lmad\u0131.`);let l=e?.[s.slug]||{adimlar:{}},c=n.KESIF||{},u=n.KATEGORI||{},d=typeof n.kategoriBul=="function"?n.kategoriBul:()=>null,h=new URLSearchParams(location.search).has("olcum"),f=Mn(".adim"),g=new Map(Mn("[data-eylem][aria-pressed]").map(R=>[R,R.getAttribute("aria-pressed")])),y=0,m=null,p=null,M=[],T=null,b=null;t.sinifDegisince=()=>{T&&b?.()};let A=()=>l.adimlar[f[y].dataset.id]||{};function x(R,O=!1){y=Math.max(0,Math.min(f.length-1,R)),f.forEach((jt,Vt)=>jt.classList.toggle("etkin",Vt===y));let Q=f[y];Ot("#adim-sayac").textContent=`${y+1} / ${f.length}`,Ot("#ilerleme").style.width=`${(y+1)/f.length*100}%`,Ot("#geri").disabled=y===0,Ot("#ileri").disabled=y===f.length-1;let dt=Ot("h2",Q).textContent;for(let[jt,Vt]of[["#mini-sayac",`${y+1}/${f.length}`],["#mini-baslik",dt],["#kisa-baslik",dt]]){let re=Ot(jt);re&&(re.textContent=Vt)}for(let[jt,Vt]of[["#mini-geri",y===0],["#mini-ileri",y===f.length-1]]){let re=Ot(jt);re&&(re.disabled=Vt)}let st=new URL(location.href);st.hash=Q.id,history.replaceState(null,"",st),Ot(".kart-govde")?.scrollTo(0,0),O||Ti(`Ad\u0131m ${y+1}: ${Ot("h2",Q).textContent}`),Z(),m&&ct(Q.dataset.id)}Ot("#geri").addEventListener("click",()=>x(y-1)),Ot("#ileri").addEventListener("click",()=>x(y+1)),document.addEventListener("keydown",R=>{R.target.closest("input, textarea, select")||r?.open||R.altKey||R.ctrlKey||R.metaKey||(["ArrowRight","PageDown"].includes(R.key)&&(R.preventDefault(),x(y+1)),["ArrowLeft","PageUp"].includes(R.key)&&(R.preventDefault(),x(y-1)))});let E=null,v=(R,O)=>{for(;R&&R!==O;R=R.parentElement)if(R.scrollWidth>R.clientWidth+1&&/auto|scroll/.test(getComputedStyle(R).overflowX))return!0;return!1};Ot(".kart-alani").addEventListener("touchstart",R=>{let O=R.touches[0];E=R.touches.length===1&&!R.target.closest?.("input, select, textarea, .ayarlar, .erisim-panel")&&!v(R.target,R.currentTarget)?{x:O.clientX,y:O.clientY}:null},{passive:!0}),Ot(".kart-alani").addEventListener("touchend",R=>{if(!E)return;let O=R.changedTouches[0],Q=O.clientX-E.x,dt=O.clientY-E.y;E=null,Math.abs(Q)>70&&Math.abs(dt)<40&&x(y+(Q<0?1:-1))},{passive:!0});let w=Ot(".ders"),P=Ot(".kart-alani"),N=Ot(".panel-kenar"),F=Ot("#panel-dugme");nd(P),id(Ot(".sahne-arac"));let G=window.matchMedia("(orientation: portrait), (max-width: 820px)");function L(R,O=!0){ue.dataset.panel=R?"acik":"kapali",F?.setAttribute("aria-expanded",String(R)),F?.setAttribute("aria-label",R?"Anlat\u0131m panelini kapat":"Anlat\u0131m panelini a\xE7"),P.inert=!R&&!G.matches,O&&(ci("bote-3d-panel",R?"acik":"kapali"),Ti(R?"Anlat\u0131m paneli a\xE7\u0131ld\u0131":"Anlat\u0131m paneli kapand\u0131; ad\u0131mlar alttaki \xE7ubuktan ge\xE7ilir"))}L(mi("bote-3d-panel")!=="kapali",!1),F?.addEventListener("click",()=>L(ue.dataset.panel!=="acik")),Ot("#mini-ac")?.addEventListener("click",()=>L(!0)),Ot("#mini-geri")?.addEventListener("click",()=>x(y-1)),Ot("#mini-ileri")?.addEventListener("click",()=>x(y+1));let z=R=>{R?w.style.setProperty("--panel-w",`${Math.round(R)}px`):w.style.removeProperty("--panel-w")},X=R=>Math.max(300,Math.min(w.clientWidth*.62,R));z(Number(mi("bote-3d-panel-w"))||0);let j=()=>ci("bote-3d-panel-w",String(parseInt(w.style.getPropertyValue("--panel-w"),10)||"")),ut=null,V=110;N?.addEventListener("pointerdown",R=>{R.target.closest("#panel-dugme")||ue.dataset.panel!=="acik"||G.matches||(N.setPointerCapture(R.pointerId),ut={x:R.clientX,w:P.getBoundingClientRect().width,once:w.style.getPropertyValue("--panel-w")},ue.dataset.suruklenen="1")}),N?.addEventListener("pointermove",R=>{if(!ut)return;let O=R.clientX-ut.x,Q=ut.w+(ue.dataset.panelYan==="sol"?O:-O);Q<X(0)-V?ue.dataset.kapanacak="1":delete ue.dataset.kapanacak,z(X(Q))});let Y=R=>{if(!ut)return;let O=ut;if(ut=null,delete ue.dataset.suruklenen,ue.dataset.kapanacak&&(delete ue.dataset.kapanacak,O.once?w.style.setProperty("--panel-w",O.once):w.style.removeProperty("--panel-w"),R?.type==="pointerup")){L(!1);return}j()};N?.addEventListener("pointerup",Y),N?.addEventListener("pointercancel",Y),N?.addEventListener("dblclick",R=>{R.target.closest("#panel-dugme")||(z(0),ci("bote-3d-panel-w",""))}),N?.addEventListener("keydown",R=>{if(R.target!==N||!["ArrowLeft","ArrowRight"].includes(R.key))return;R.preventDefault(),R.stopPropagation();let O=R.key==="ArrowLeft"==(ue.dataset.panelYan!=="sol");z(X(P.getBoundingClientRect().width+(O?40:-40))),j()});function K(R,O){ue.dataset.panelYan=R;for(let Q of Mn("[data-yan]"))Q.setAttribute("aria-pressed",String(Q.dataset.yan===R));O&&ci("bote-3d-panel-yan",R)}K(mi("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);let Dt=Ot("#ayarlar"),St=Ot("#ayar-dugme"),Gt=Ot("#ayar-perde");function Xt(R,O=!1){Dt&&(Dt.hidden=!R,Gt&&(Gt.hidden=!R),St.setAttribute("aria-expanded",String(R)),R?(lt(),[...Dt.querySelectorAll("input, button")].find(Q=>Q.id!=="ayar-kapat"&&Q.offsetParent!==null)?.focus()):O&&St.focus())}St?.addEventListener("click",R=>{R.stopPropagation(),Xt(Dt.hidden)}),Ot("#ayar-kapat")?.addEventListener("click",()=>Xt(!1,!0)),document.addEventListener("click",R=>{Dt&&!Dt.hidden&&!R.target.closest("#ayarlar, #ayar-dugme")&&Xt(!1)}),document.addEventListener("keydown",R=>{R.key==="Escape"&&Dt&&!Dt.hidden&&Xt(!1,!0)});let Ut=Ot("#panel-genislik"),et=Ot("#genislik-deger"),at={dar:"Dar",orta:"Orta",genis:"Geni\u015F"},It={dar:0,orta:50,genis:100};function qt(){let R=window.innerWidth,O=(Q,dt,st)=>X(Math.max(Q,Math.min(dt*R,st)));return ue.dataset.mod==="tahta"?{dar:O(380,.29,1100),orta:O(440,.37,1500),genis:O(560,.5,1900)}:{dar:O(290,.26,440),orta:O(330,.34,560),genis:O(420,.46,900)}}function Pt(R){let O=qt();return R<=50?O.dar+(O.orta-O.dar)*R/50:O.orta+(O.genis-O.orta)*(R-50)/50}function Rt(R){let O=qt();return R<=O.orta?O.orta>O.dar?Math.max(0,(R-O.dar)/(O.orta-O.dar)*50):0:O.genis>O.orta?Math.min(100,50+(R-O.orta)/(O.genis-O.orta)*50):100}function de(){if(!Ut)return;let R=Number(Ut.value),O=Pt(R),Q=Object.keys(It).find(st=>Math.abs(It[st]-R)<=3)||"",dt=Math.round(O/Math.max(1,w.clientWidth)*100);et&&(et.textContent=Q?`${at[Q]} \xB7 %${dt}`:`%${dt}`),Ut.setAttribute("aria-valuetext",`${Q?`${at[Q]}, `:""}ekran\u0131n y\xFCzde ${dt} kadar\u0131`),Ut.style.setProperty("--dolu",`${R}%`);for(let st of Mn("[data-panel-boyut]:not(html)"))st.setAttribute("aria-pressed",String(st.dataset.panelBoyut===Q))}function lt(){Ut&&(Ut.value=String(Math.round(Rt(P.getBoundingClientRect().width||qt().orta))),de())}let ft=()=>{ue.dataset.suruklenen&&!ut&&!_&&delete ue.dataset.suruklenen};Ut?.addEventListener("pointerdown",()=>{ue.dataset.suruklenen="1"}),Ut?.addEventListener("pointerup",ft),Ut?.addEventListener("input",()=>{ue.dataset.suruklenen="1",z(Pt(Number(Ut.value))),de()}),Ut?.addEventListener("change",()=>{ft(),j()});function xt(R,O){ue.dataset.panelBoyut=R,O&&(z(0),ci("bote-3d-panel-w",""),ci("bote-3d-panel-boyut",R)),Ut&&(Ut.value=String(It[R]),de())}xt(["dar","orta","genis"].includes(mi("bote-3d-panel-boyut"))?mi("bote-3d-panel-boyut"):"orta",!1);let _t=[.9,1,1.15,1.3,1.5],Et=Math.max(0,_t.indexOf(Number(mi("bote-3d-yazi"))||1));function Zt(R,O){Et=Math.max(0,Math.min(_t.length-1,R)),ue.style.setProperty("--yazi",String(_t[Et]));let Q=Ot("#yazi-deger");Q&&(Q.textContent=`%${Math.round(_t[Et]*100)}`),O&&ci("bote-3d-yazi",String(_t[Et]))}Zt(Et,!1),document.addEventListener("click",R=>{let O=R.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");O&&(O.dataset.panelBoyut&&xt(O.dataset.panelBoyut,!0),O.dataset.yazi&&Zt(Et+Number(O.dataset.yazi),!0),O.dataset.yan&&K(O.dataset.yan,!0))});let Bt=Ot("#tahmin-ayar");Bt&&(Bt.checked=mi("bote-3d-tahmin")!=="hayir",Bt.addEventListener("change",()=>ci("bote-3d-tahmin",Bt.checked?"evet":"hayir")));let Kt={kisa:()=>{let R=Ot(".tutamac"),O=Ot(".kart-ust"),Q=Ot(".kart-alt"),dt=!!(Q&&O&&Q.offsetTop<O.offsetTop+O.offsetHeight);return(R?.offsetHeight||0)+Math.max(O?.offsetHeight||0,dt?Q.offsetHeight:0)+(dt?0:Q?.offsetHeight||0)+2},yarim:()=>w.clientHeight*.5,tam:()=>w.clientHeight*.92},se=88,D=()=>Kt.yarim()-Kt.kisa()+2>=se,we=R=>R==="yarim"&&!D()?"kisa":R,oe=["kisa","yarim","tam"].includes(mi("bote-3d-sayfa"))?mi("bote-3d-sayfa"):"yarim";function k(R,O=!0,Q=!1){if(!G.matches){delete ue.dataset.sayfa,w.style.removeProperty("--sayfa-h"),m?.gorunurAlan(0,!0),L(ue.dataset.panel!=="kapali",!1);return}oe=R;let dt=we(R);ue.dataset.sayfa=dt,P.inert=!1;let st=Math.round(Kt[dt]());Q&&(ue.dataset.suruklenen="1"),w.style.setProperty("--sayfa-h",`${st}px`),Q&&requestAnimationFrame(()=>delete ue.dataset.suruklenen),m?.gorunurAlan(st,Q),O&&ci("bote-3d-sayfa",R)}let _=null;for(let R of[Ot(".tutamac"),Ot(".kart-ust")].filter(Boolean)){R.addEventListener("pointerdown",Q=>{if(!G.matches||Q.target.closest("button"))return;R.setPointerCapture(Q.pointerId);let dt=performance.now();_={y:Q.clientY,h:P.getBoundingClientRect().height,sonY:Q.clientY,sonT:dt,hiz:0},ue.dataset.suruklenen="1"}),R.addEventListener("pointermove",Q=>{if(!_)return;let dt=performance.now(),st=Math.max(Kt.kisa(),Math.min(Kt.tam(),_.h+(_.y-Q.clientY)));w.style.setProperty("--sayfa-h",`${Math.round(st)}px`),_.hiz=(_.sonY-Q.clientY)/Math.max(1,dt-_.sonT),_.sonY=Q.clientY,_.sonT=dt});let O=Q=>{if(!_)return;let dt=_;_=null,delete ue.dataset.suruklenen;let st=P.getBoundingClientRect().height,jt=Math.abs(Q.clientY-dt.y)>6,Vt=D(),re=Vt?"yarim":"tam",_e;jt?dt.hiz>.45?_e=st<Kt.yarim()?re:"tam":dt.hiz<-.45?_e=Vt&&st>Kt.yarim()?"yarim":"kisa":_e=(Vt?["kisa","yarim","tam"]:["kisa","tam"]).sort((xe,Pe)=>Math.abs(Kt[xe]()-st)-Math.abs(Kt[Pe]()-st))[0]:_e=ue.dataset.sayfa==="kisa"?re:"kisa",k(_e),Ti({kisa:"Kartlar k\xFC\xE7\xFCld\xFC",yarim:"Kartlar yar\u0131m ekran",tam:"Kartlar tam ekran"}[_e])};R.addEventListener("pointerup",O),R.addEventListener("pointercancel",O)}let B=()=>k(oe,!1,!0);G.addEventListener?.("change",B);let q=0;window.addEventListener("resize",()=>{clearTimeout(q),q=setTimeout(()=>{G.matches&&k(oe,!1,!0)},120)}),k(oe,!1,!0),window.addEventListener("hashchange",()=>{let R=f.findIndex(O=>`#${O.id}`===location.hash);R>=0&&R!==y&&x(R)});let it=f.findIndex(R=>`#${R.id}`===location.hash);x(it>0?it:0,!0),document.addEventListener("click",R=>{let O=R.target.closest("[data-eylem]");if(!O||!m||!p)return;let Q=p.eylem?.(O.dataset.eylem,O);typeof Q=="boolean"&&O.hasAttribute("aria-pressed")&&O.setAttribute("aria-pressed",String(Q)),m.iste()}),Mn(".gorunum button").forEach(R=>R.addEventListener("click",()=>$(R.dataset.gorunum))),Ot("#yakinlas")?.addEventListener("click",()=>m?.yakinlas(.8)),Ot("#uzaklas")?.addEventListener("click",()=>m?.yakinlas(1.25)),window.addEventListener("pagehide",R=>{R.persisted||p?.durdur?.()});let Mt=Ot(".sahne-alani");requestAnimationFrame(()=>setTimeout(Lt,20));function Lt(){if(o.length){ue.dataset.webgl="yok";return}if(m=dp(Ot("#sahne"),{arkaPlan:a(),olay:Nt,guvenliAlan:ht}),!m){ue.dataset.webgl="yok";return}t.S=m;try{if(p=n.sahneyiKur(m,{olay:rt,ders:l,veri:s}),typeof p?.adimUygula!="function")throw new Error("adapt\xF6r adimUygula vermedi")}catch(R){console.error(`dersMotoru(${n.id||"?"}): sahne kurulamad\u0131, yedek aray\xFCz a\xE7\u0131ld\u0131.`,R),m.scene.clear(),Ot("#sahne").style.visibility="hidden",m=t.S=p=null,ue.dataset.webgl="yok";return}m.dokunmaDinle(Tt),G.matches&&m.gorunurAlan(Math.round(Kt[we(oe)]()),!0),ct(f[y].dataset.id,!0),requestAnimationFrame(()=>Mt.classList.add("hazir")),h&&(bt(),window.__3d={S:m,adaptor:p,adimaGit:x,kameraBul:Jt,gorunumSec:$,adim:()=>f[y].dataset.id,...p.olcumEk})}function rt(R,O){R==="duyur"&&Ti(O)}function ht(){let R=Ot("#sahne").getBoundingClientRect(),O=ue.dataset.mod==="tahta"?24:14,Q=O,dt=O,st=Mn(".ipucu",Mt).find(_e=>_e.offsetParent!==null);st&&(Q=Math.max(Q,st.getBoundingClientRect().bottom-R.top+8));let jt=Ot(".sahne-arac",Mt);jt&&getComputedStyle(jt).opacity!=="0"&&(dt=Math.max(dt,R.bottom-jt.getBoundingClientRect().top+8));let Vt=[],re=Ot("#lejant");if(re&&re.offsetParent!==null){let _e=re.getBoundingClientRect();Vt.push({x0:_e.left-R.left,y0:_e.top-R.top,x1:_e.right-R.left,y1:_e.bottom-R.top})}return{ust:Q,alt:dt,sol:O,sag:O,engel:Vt}}function Nt(R){R==="baglam-kaybi"&&Mt.classList.add("baglam-kaybi"),R==="baglam-geri"&&Mt.classList.remove("baglam-kaybi")}Ot("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function Jt(R,O={}){let Q=p?.kameraBul?.(R,O);if(Q)return Q;let dt=i[R];if(dt)return{kutu:new qn(new C(dt.kutu[0],dt.kutu[1],dt.kutu[2]),new C(dt.kutu[3],dt.kutu[4],dt.kutu[5])),yon:dt.yon};let st=p?.kutuBul?.(R);return st&&i.genel?{kutu:st,yon:i.genel.yon}:R==="genel"?null:Jt("genel",O)}function $(R){let O=m&&Jt(A().kamera||"genel",A()),Q=n.GORUNUM?.[R];O&&m.kameraGit(Q?{...O,yon:Q}:O);for(let dt of Mn(".gorunum button"))dt.setAttribute("aria-pressed",String(dt.dataset.gorunum===R))}function ct(R,O=!1){let Q=l.adimlar[R]||{};for(let st of Mn("[data-eylem][aria-pressed]"))st.setAttribute("aria-pressed",g.get(st)||"false");for(let st of Mn(".gorunum button"))st.setAttribute("aria-pressed",String(st.dataset.gorunum==="egik"));p.adimUygula(R,Q,O);for(let st of M)m.scene.remove(st),st.traverse(jt=>jt.geometry?.dispose());M=n.vurguYap?(Q.vurgu||[]).map(st=>p.alanlar?.[st]?n.vurguYap(m.scene,p.alanlar[st]):null).filter(Boolean):[],Mt.dataset.ipucu=p.ipucu?p.ipucu(Q):Q.dokun?"dokun":"";let dt=Jt(Q.kamera||"genel",Q);dt&&m.kameraGit(dt,O),ue.dataset.kesif==="acik"&&nt(),m.iste(),h&&vt(R,Q)}function vt(R,O){!O.etiket?.length||!p.noktaBul||setTimeout(()=>{if(!p||f[y].dataset.id!==R)return;let Q=O.etiket.map(dt=>dt[0]).filter(dt=>{try{return!p.noktaBul(dt)}catch{return!0}});Q.length&&console.warn(`[olcum] ${n.id}/${s.slug} ad\u0131m "${R}": noktaBul bo\u015F d\xF6nd\xFC, etiket \xE7izilmedi: ${Q.join(", ")}`)},2500)}let wt=Ot("#kesif-sablon"),mt=Ot("#lejant");mt&&window.matchMedia("(min-width: 700px) and (min-height: 600px)").matches&&(mt.open=!0),mt?.addEventListener("toggle",()=>m?.guvenliYenile());let I=(R,O)=>{let Q=wt?.content.querySelector(`[data-kat="${O}"] svg`);R&&Q&&R.replaceChildren(Q.cloneNode(!0))};function yt(R,O,Q,dt){let st=d(R);if(!st)return null;let jt=document.createElement("button");jt.type="button",jt.className=dt?"kesif-isaret pin-isaret":"kesif-isaret",jt.dataset.kat=st,jt.dataset.id=R;let Vt=document.createElement("span");Vt.className="ki-daire",I(Vt,st);let re=document.createElement("span");return re.className="ki-no",re.textContent=dt||String(O),re.setAttribute("aria-hidden","true"),jt.append(Vt,re),jt.setAttribute("aria-label",dt?`${Q}, ${u[st].ad} grubu`:`${O}. ke\u015Fif noktas\u0131, ${u[st].ad} grubu`),jt.addEventListener("click",_e=>{_e.stopPropagation();for(let xe of Mn(".kesif-isaret[aria-current]"))xe.removeAttribute("aria-current");jt.setAttribute("aria-current","true"),Se(R,Bt?Bt.checked:!0,Q)}),{el:jt,kat:st}}function nt(){if(!m||!p)return;let R=[],O=new Set,Q=0,dt=({id:st,ozel:jt,rozet:Vt,adim:re=0,..._e})=>{let xe=yt(st,Q+1,jt,Vt);xe&&(Vt||Q++,O.add(xe.kat),R.push({el:xe.el,oncelik:c[st].oncelik,adim:re,..._e}))};for(let st of p.kesifNoktalari||[])dt(st);for(let st of p.kesifEk?.(A())||[])dt(st);m.isaretKoy(R);for(let st of Mn("li[data-kat]",mt||document.createElement("i")))st.hidden=!O.has(st.dataset.kat)}let At=Ot("#kesif-dugme");At?.addEventListener("click",()=>{let R=ue.dataset.kesif!=="acik";ue.dataset.kesif=R?"acik":"",At.setAttribute("aria-pressed",String(R)),m?.guvenliYenile(),R?(nt(),Ti("Ke\u015Fif modu a\xE7\u0131k: i\u015Faretli par\xE7alara dokun. \u0130\u015Faretin rengi ve simgesi par\xE7an\u0131n grubunu g\xF6sterir.")):(m?.isaretKoy([]),Z(),Ti("Ke\u015Fif modu kapand\u0131"))});function Tt(R,O){if(!R){Z();return}if(p?.dokunuldu?.(R,O)){m.iste();return}R.kesif&&Se(R.kesif,ue.dataset.kesif==="acik"&&(Bt?Bt.checked:!0),R.ozel)}function gt(R){let O=s.kavramlar||{},Q=s.kesifIcerik||{},dt=c[R];return O[R]?{...O[R],ad:dt?.ad||O[R].ad}:Q[R]?{...Q[R],ad:Q[R].ad||dt?.ad||R}:dt?.kavram&&O[dt.kavram]?{...O[dt.kavram],ad:dt.ad}:dt?{ad:dt.ad,yalin:dt.kisa}:null}let Yt=!1,Ht="";function Se(R,O=!1,Q=""){let dt=Ot("#bilgi"),st=R?gt(R):null;if(!dt||!st)return;let jt=ue.dataset.sinif||"6",Vt=R!==T||dt.hidden;O!=="koru"&&(Yt=!!O,Ht=Q||"");let re=Ot("#kesif-soru"),_e=Ot("#bilgi-cevap");re&&(re.hidden=!Yt),_e&&(_e.hidden=Yt);let xe=d(R),Pe=Ot("#bilgi-kat");Pe&&(Pe.hidden=!xe,xe&&(Pe.dataset.kat=xe,Ot("#bilgi-kat-ad").textContent=u[xe].ad,I(Ot(".ki-daire",Pe),xe))),Ot("#bilgi-baslik").textContent=st.ad;let yn=Ot("#bilgi-ozel");if(yn&&(yn.textContent=Ht,yn.hidden=!Ht||Ht===st.ad),st.yalin?(Ot("#bilgi-teknik").textContent=st.yalin,Ot("#bilgi-sosyal").textContent="",dt.classList.add("yalin")):(Ot("#bilgi-teknik").innerHTML=st.teknik?.[jt]||st.teknik?.["6"]||"",Ot("#bilgi-sosyal").innerHTML=st.sosyal?.[jt]||"",dt.classList.toggle("yalin",!st.sosyal?.[jt])),Vt){let je=Ot("#bilgi-gorsel");if(je){je.hidden=!0;let Hn=Ot("img",je);Hn&&(Hn.removeAttribute("src"),Hn.alt="")}}T=R,dt.hidden=!1,G.matches&&oe==="tam"&&k("yarim"),Ti(Yt?"Sence bu nedir? Cevab\u0131 g\xF6r d\xFC\u011Fmesine bas":[st.ad,Ht].filter(Boolean).join(", ")),Vt&&document.dispatchEvent(new CustomEvent("3d:bilgi",{detail:{id:R}}))}b=()=>Se(T,"koru"),document.addEventListener("3d:kesif-ac",R=>{let O=R.detail?.id;O&&Se(O,Bt?Bt.checked:!0,R.detail.ozel)}),Ot("#kesif-gor")?.addEventListener("click",()=>{Yt=!1,Se(T,"koru"),Ot("#bilgi-baslik")?.focus?.()});function Z(){let R=Ot("#bilgi");R&&(R.hidden=!0),T=null;for(let O of Mn(".kesif-isaret[aria-current]"))O.removeAttribute("aria-current")}Ot("#bilgi-kapat")?.addEventListener("click",Z);function bt(){let R=document.createElement("div");R.className="olcum",Mt.appendChild(R);let O=0,Q=performance.now(),dt=Q,st=0;m.kareGuncelleyici(jt=>(O++,st=Math.max(st,jt-dt),dt=jt,!1)),setInterval(()=>{let jt=performance.now(),Vt=m.kalite();R.textContent=`${Math.round(O*1e3/(jt-Q))} kare/sn \xB7 en uzun ${Math.round(st)} ms \xB7 \xF6l\xE7ek ${Vt.piksel} (tam ${Vt.tam}, kademe ${Vt.kademe})`,O=0,Q=jt,st=0},1e3)}}var o1=[.04,.58,.81],hs=(n,t,e,i,s,r)=>[n-86,t,e-23,i-86,s,r-23],pp={genel:{kutu:[-108,0,-76,108,91,56],yon:o1},giris:{kutu:[-64,0,-52,74,76,38],yon:[0,.64,.77]},klavye:{kutu:[-48,0,-50,48,66,36],yon:[0,.62,.78]},fare:{kutu:[-12,0,-50,80,64,34],yon:[0,.62,.78]},"mik-kam":{kutu:[-70,0,-52,26,78,44],yon:[0,.6,.8]},cikis:{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},ekran:{kutu:[-44,10,-50,52,68,-38],yon:[0,.2,.98]},"hop-yaz":{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},kulaklik:{kutu:[68,0,22,112,18,46],yon:[-.1,.52,.85]},kablolar:{kutu:[-108,0,-78,26,92,12],yon:[.12,.46,-.88]},"ic-kasa":{kutu:hs(-24,0,-44,21,102,44),yon:[-.8,.32,.5]},"ic-anakart":{kutu:hs(6,28,-43,21,80,21),yon:[-.9,.28,.32]},"ic-islemci":{kutu:hs(-24,48,-37,19,106,-6),yon:[-.86,.3,.4]},"ic-ram":{kutu:hs(-14,44,-14,19,79,3),yon:[-.62,.22,.75]},"ic-depolama":{kutu:hs(6,0,-28,20,44,44),yon:[-.86,.42,.3]},"ic-gpu":{kutu:hs(-6,36,-44,19,60,15),yon:[-.78,-.15,.6]},"ic-psu":{kutu:hs(-20,0,-44,13,28,-8),yon:[-.8,.5,.35]},"ic-sogutma":{kutu:hs(-24,0,-44,21,108,50),yon:[-.74,.4,.54]},"ic-sivi":{kutu:hs(-16,54,-43,19,98,24),yon:[-.95,.02,.3]},"ic-arka":{kutu:hs(-20,0,-60,20,104,-40),yon:[.5,.3,-.82]}},mp={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06],arkadan:[0,.3,-.96]};var l1={"tus-bas":{yazi:"Tu\u015Fa bas",ikon:"keyboard",tur:"dugme"},"fare-oynat":{yazi:"Fareyi oynat",ikon:"mouse",tur:"dugme"},"fare-tikla":{yazi:"Sol t\u0131kla",ikon:"pointer",tur:"dugme"},"fare-sag":{yazi:"Sa\u011F t\u0131kla",ikon:"mouse",tur:"dugme"},konus:{yazi:"Konu\u015F",ikon:"mic",tur:"dugme"},kamera:{yazi:"Kameray\u0131 a\xE7",ikon:"webcam",tur:"basili"},cozunurluk:{yazi:"\xC7\xF6z\xFCn\xFCrl\xFC\u011F\xFC de\u011Fi\u015Ftir",ikon:"monitor",tur:"dugme"},ses:{yazi:"Ses ver",ikon:"speaker",tur:"dugme"},yazdir:{yazi:"Yazd\u0131r",ikon:"printer",tur:"dugme"},"kulak-dinle":{yazi:"Sesi dinle",ikon:"headphones",tur:"dugme"},"kulak-konus":{yazi:"Mikrofona konu\u015F",ikon:"mic",tur:"dugme"},"kablo-sonraki":{yazi:"S\u0131radaki kablo",ikon:"cable",tur:"dugme"},kapak:{yazi:"Kapa\u011F\u0131 a\xE7",ikon:"door-open",tur:"basili"},"sogutucu-kaldir":{yazi:"So\u011Futucuyu kald\u0131r",ikon:"arrow-up",tur:"basili"},"ram-cikar":{yazi:"RAM'i \xE7\u0131kar",ikon:"memory-stick",tur:"basili"},calistir:{yazi:"Bilgisayar\u0131 \xE7al\u0131\u015Ft\u0131r",ikon:"power",tur:"basili"},"sogutma-turu":{yazi:"S\u0131v\u0131 so\u011Futmaya ge\xE7",ikon:"droplets",tur:"basili"}},M2=Object.fromEntries(Object.entries(l1).map(([n,t])=>[n,t.yazi])),gp={"girdi-cikti-birimleri":{no:1,devre:null,adimlar:{merak:{kamera:"genel",dokun:!0},donanim:{kamera:"genel",etiket:[["parca:kasa","Donan\u0131m","eksi"],["parca:klavye","Donan\u0131m","eksi"],["parca:monitor","Donan\u0131m","eksi"],["parca:ekran","Yaz\u0131l\u0131m","yesil"]]},giris:{kamera:"giris",vurgu:["klavye","fare","mikrofon","kamera"],etiket:[["parca:klavye","Klavye","eksi"],["parca:fare","Fare","eksi"],["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},klavye:{kamera:"klavye",mod:"yaz",yazi:"",kontrol:["tus-bas"],dokun:!0,etiket:[["tus:Esc","Esc"],["tus:Ctrl","Ctrl"],["tus:Shift","Shift"],["tus:Enter","Enter"],["tus:Bosluk","Bo\u015Fluk"]]},fare:{kamera:"fare",mod:"fare",kontrol:["fare-oynat","fare-tikla","fare-sag"],dokun:!0,etiket:[["parca:fare-sol","Sol d\xFC\u011Fme"],["parca:fare-sag","Sa\u011F d\xFC\u011Fme"],["parca:fare-tekerlek","Tekerlek"]]},"mikrofon-kamera":{kamera:"mik-kam",mod:"ses",kontrol:["konus","kamera"],etiket:[["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},cikis:{kamera:"cikis",vurgu:["monitor","hoparlor1","hoparlor2","yazici"],etiket:[["parca:monitor","Monit\xF6r","arti"],["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:hoparlor2","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},ekran:{kamera:"ekran",mod:"ekran",kontrol:["cozunurluk"],dokun:!0},"hoparlor-yazici":{kamera:"hop-yaz",kontrol:["ses","yazdir"],etiket:[["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},"ikisi-de":{kamera:"kulaklik",kontrol:["kulak-dinle","kulak-konus"],vurgu:["kulaklik"],etiket:[["parca:kulaklik-mikrofon","Mikrofon: girdi","eksi"],["parca:kulaklik-kup","Kulakl\u0131k: \xE7\u0131kt\u0131","arti"]]},kablolar:{kamera:"kablolar",mod:"kablo",kontrol:["kablo-sonraki"],dokun:!0,etiket:[["parca:arka-hdmi","HDMI"],["parca:arka-usb","USB"],["parca:arka-ses","Ses giri\u015Fleri"],["parca:arka-ag","A\u011F giri\u015Fi"],["parca:arka-guc","G\xFC\xE7 giri\u015Fi"]]},ozet:{kamera:"genel",etiket:[["parca:klavye","Girdi","eksi"],["parca:fare","Girdi","eksi"],["parca:mikrofon","Girdi","eksi"],["parca:kamera","Girdi","eksi"],["parca:monitor","\xC7\u0131kt\u0131","arti"],["parca:hoparlor1","\xC7\u0131kt\u0131","arti"],["parca:hoparlor2","\xC7\u0131kt\u0131","arti"],["parca:yazici","\xC7\u0131kt\u0131","arti"],["parca:kulaklik","Girdi ve \xE7\u0131kt\u0131","yesil"],["parca:usb-bellek","Depolama"]]}}},"kasanin-ici":{no:2,devre:null,adimlar:{merak:{kamera:"ic-kasa",mod:"ic-kapali",dokun:!0},kapak:{kamera:"ic-kasa",mod:"ic-kapali",kontrol:["kapak"],dokun:!0,etiket:[["parca:kasa","Kapal\u0131 kasa","yesil"]]},anakart:{kamera:"ic-anakart",mod:"ic",vurgu:["ic-anakart"],dokun:!0,etiket:[["parca:ic-anakart","Anakart","yesil"],["parca:ic-pil","BIOS pili"],["parca:ic-ram","RAM yuvalar\u0131"]]},islemci:{kamera:"ic-islemci",mod:"ic",kontrol:["sogutucu-kaldir"],dokun:!0,etiket:[["parca:ic-islemci","\u0130\u015Flemci","yesil"],["parca:ic-hava","Hava so\u011Futucu"]]},ram:{kamera:"ic-ram",mod:"ic",kontrol:["ram-cikar"],dokun:!0,etiket:[["parca:ic-ram","RAM \xE7ubuklar\u0131","yesil"]]},depolama:{kamera:"ic-depolama",mod:"ic",dokun:!0,etiket:[["parca:ic-m2","M.2 SSD","yesil"],["parca:ic-sata-ssd","SATA SSD","yesil"],["parca:ic-hdd","Sabit disk (HDD)","yesil"],["parca:ic-sata-kablo","SATA veri kablosu"]]},"ekran-karti":{kamera:"ic-gpu",mod:"ic",vurgu:["ic-gpu"],dokun:!0,etiket:[["parca:ic-gpu","Ekran kart\u0131","arti"]]},"guc-kaynagi":{kamera:"ic-psu",mod:"ic",vurgu:["ic-psu"],dokun:!0,etiket:[["parca:ic-psu","G\xFC\xE7 kayna\u011F\u0131","yesil"],["parca:ic-kablo24","Anakarta giden kablo"]]},sogutma:{kamera:"ic-sogutma",mod:"ic",kontrol:["calistir","sogutma-turu"],dokun:!0,etiket:[["parca:ic-hava","Hava so\u011Futucu"],["parca:ic-fan-egzoz","\xDCst fan"]]},"sivi-sogutma":{kamera:"ic-sivi",mod:"ic-sivi",kontrol:["calistir"],dokun:!0,etiket:[["parca:ic-pompa","Pompa blo\u011Fu"],["parca:ic-radyator","Radyat\xF6r"],["parca:ic-hortum","Hortum"]]},baglantilar:{kamera:"ic-arka",mod:"ic",dokun:!0,etiket:[["parca:ic-arka-hdmi","HDMI"],["parca:ic-arka-usb","USB"],["parca:ic-arka-ag","A\u011F giri\u015Fi (kablolu)"],["parca:ic-wifi-arka","Wi-Fi anteni (kablosuz)"],["parca:ic-arka-ses","Ses giri\u015Fleri"]]},ozet:{kamera:"ic-kasa",mod:"ic",etiket:[["parca:ic-anakart","Anakart","yesil"],["parca:ic-hava","So\u011Futucu"],["parca:ic-ram","RAM"],["parca:ic-hdd","Depolama"],["parca:ic-gpu","Ekran kart\u0131"],["parca:ic-psu","G\xFC\xE7 kayna\u011F\u0131"]]}}}};var Rh={girdi:{ad:"Girdi birimleri",renk:"#1e6fd9",ikon:"keyboard"},cikti:{ad:"\xC7\u0131kt\u0131 birimleri",renk:"#f57c00",ikon:"monitor",koyu:!0},ikisi:{ad:"Hem girdi hem \xE7\u0131kt\u0131",renk:"#7c4dff",ikon:"headphones"},depolama:{ad:"Depolama",renk:"#00897b",ikon:"hard-drive"},kasa:{ad:"Kasa ve ba\u011Flant\u0131lar",renk:"#6b7280",ikon:"plug"},ic:{ad:"Kasan\u0131n i\xE7i",renk:"#b0245e",ikon:"cpu"},sogutma:{ad:"So\u011Futma",renk:"#2e7d32",ikon:"fan"}},ni=3,An=2,ii=1,zc={klavye:{kat:"girdi",ad:"Klavye",oncelik:ni,kisa:"Harf, rakam ve komut tu\u015Flar\u0131yla bilgisayara yaz\u0131 yazd\u0131r\u0131r. Girdi birimidir."},"tus-harf":{kat:"girdi",ad:"Harf ve rakam tu\u015Flar\u0131",oncelik:ii,kisa:"Bas\u0131nca ekranda o harf, rakam ya da i\u015Faret belirir."},"tus-ozel":{kat:"girdi",ad:"\xD6zel tu\u015Flar",oncelik:ii,kisa:"Yaz\u0131 yazmak yerine bir i\u015F yapt\u0131ran tu\u015Flar: Tab, Caps Lock, Alt, ok tu\u015Flar\u0131, Delete ve F tu\u015Flar\u0131."},"tus-esc":{kat:"girdi",ad:"Esc tu\u015Fu",oncelik:ii,kisa:"Yap\u0131lan i\u015Ften vazge\xE7meyi ya da a\xE7\u0131k pencereyi kapatmay\u0131 sa\u011Flar."},"tus-shift":{kat:"girdi",ad:"Shift tu\u015Fu",oncelik:An,kisa:"Bas\u0131l\u0131 tutulurken harfler b\xFCy\xFCk \xE7\u0131kar, rakam tu\u015Flar\u0131n\u0131n \xFCst\xFCndeki i\u015Faretler yaz\u0131l\u0131r."},"tus-ctrl":{kat:"girdi",ad:"Ctrl tu\u015Fu",oncelik:An,kisa:"Ba\u015Fka bir tu\u015Fla birlikte bas\u0131l\u0131nca k\u0131sayol komutu verir. \xD6rne\u011Fin Ctrl ile C se\xE7ileni kopyalar."},"tus-enter":{kat:"girdi",ad:"Enter tu\u015Fu",oncelik:An,kisa:"Yazd\u0131\u011F\u0131m\u0131z\u0131 onaylar ya da imleci yeni sat\u0131ra ge\xE7irir."},"tus-bosluk":{kat:"girdi",ad:"Bo\u015Fluk tu\u015Fu",oncelik:An,kisa:"Kelimeler aras\u0131nda bo\u015Fluk b\u0131rak\u0131r. Klavyenin en uzun tu\u015Fudur."},fare:{kat:"girdi",ad:"Fare",oncelik:ni,kisa:"Ekrandaki imleci hareket ettirir; sol ve sa\u011F d\xFC\u011Fmeyle se\xE7me, a\xE7ma gibi komutlar verir. Girdi birimidir."},"fare-tekerlek":{kat:"girdi",ad:"Fare tekerle\u011Fi",oncelik:ii,kisa:"Sayfay\u0131 yukar\u0131 a\u015Fa\u011F\u0131 kayd\u0131r\u0131r. Bas\u0131l\u0131nca \xFC\xE7\xFCnc\xFC bir d\xFC\u011Fme gibi de \xE7al\u0131\u015Fabilir."},mikrofon:{kat:"girdi",ad:"Mikrofon",oncelik:ni,kisa:"Sesi elektrik sinyaline \xE7evirerek bilgisayara aktar\u0131r. Girdi birimidir."},"web-kamerasi":{kat:"girdi",ad:"Web kameras\u0131",oncelik:ni,kisa:"G\xF6r\xFCnt\xFCy\xFC al\u0131p bilgisayara aktar\u0131r; g\xF6r\xFCnt\xFCl\xFC g\xF6r\xFC\u015Fmede ve foto\u011Fraf \xE7ekmede kullan\u0131l\u0131r. Girdi birimidir."},monitor:{kat:"cikti",ad:"Monit\xF6r",oncelik:ni,kisa:"Bilgisayar\u0131n \xFCretti\u011Fi g\xF6r\xFCnt\xFCy\xFC g\xF6sterir. \xC7\u0131kt\u0131 birimidir."},ekran:{kat:"cikti",ad:"Ekran ve pikseller",oncelik:An,kisa:"G\xF6r\xFCnt\xFC, piksel denen \xE7ok k\xFC\xE7\xFCk renkli noktalardan olu\u015Fur. Nokta say\u0131s\u0131 artt\u0131k\xE7a g\xF6r\xFCnt\xFC keskinle\u015Fir."},hoparlor:{kat:"cikti",ad:"Hoparl\xF6r",oncelik:ni,kisa:"Bilgisayardaki sesi duyulabilir hale getirir. \xC7\u0131kt\u0131 birimidir."},yazici:{kat:"cikti",ad:"Yaz\u0131c\u0131",oncelik:ni,kisa:"Bilgisayardaki yaz\u0131 ve resmi k\xE2\u011F\u0131da basar. \xC7\u0131kt\u0131 birimidir."},kulaklik:{kat:"ikisi",ad:"Mikrofonlu kulakl\u0131k",oncelik:ni,kisa:"Sesi kula\u011Fa verir (\xE7\u0131kt\u0131), kolundaki mikrofon sesinizi bilgisayara iletir (girdi)."},"kulaklik-mikrofon":{kat:"ikisi",ad:"Kulakl\u0131\u011F\u0131n mikrofonu",oncelik:ii,kisa:"Kulakl\u0131\u011F\u0131n ucundaki k\xFC\xE7\xFCk mikrofon sesinizi bilgisayara ta\u015F\u0131r. Buras\u0131 girdi taraf\u0131d\u0131r."},"usb-bellek":{kat:"depolama",ad:"USB bellek",oncelik:An,kisa:"Dosyalar\u0131 saklayan, tak\u0131l\u0131p \xE7\u0131kar\u0131labilen k\xFC\xE7\xFCk depolama birimidir."},kasa:{kat:"kasa",ad:"Kasa",oncelik:ni,kisa:"Bilgisayar\u0131n ana par\xE7alar\u0131n\u0131 i\xE7inde ta\u015F\u0131yan ve koruyan kutudur. Birinci derste kapal\u0131 kal\u0131r; ikinci derste kapa\u011F\u0131 a\xE7\u0131p i\xE7ini geziyoruz."},"guc-dugmesi":{kat:"kasa",ad:"G\xFC\xE7 d\xFC\u011Fmesi",oncelik:An,kisa:"Bilgisayar\u0131 a\xE7ar ve kapat\u0131r."},"usb-girisi":{kat:"kasa",ad:"USB giri\u015Fi",oncelik:An,kisa:"Klavye, fare, yaz\u0131c\u0131 ve USB bellek gibi cihazlar\u0131n tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ses-jaklari":{kat:"kasa",ad:"Ses giri\u015Fleri",oncelik:An,kisa:"Kulakl\u0131k, mikrofon ve hoparl\xF6r kablolar\u0131n\u0131n tak\u0131ld\u0131\u011F\u0131 yuvalar. Yanlar\u0131ndaki simge ve renk hangisinin nereye tak\u0131laca\u011F\u0131n\u0131 g\xF6sterir."},"hdmi-girisi":{kat:"kasa",ad:"HDMI giri\u015Fi",oncelik:An,kisa:"G\xF6r\xFCnt\xFCy\xFC monit\xF6re ta\u015F\u0131yan kablonun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ag-girisi":{kat:"kasa",ad:"A\u011F giri\u015Fi",oncelik:ii,kisa:"\u0130nternet kablosunun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"guc-girisi":{kat:"kasa",ad:"G\xFC\xE7 kablosu giri\u015Fi",oncelik:An,kisa:"Prizden gelen elektri\u011Fin kasaya girdi\u011Fi yerdir."},"guc-kaynagi":{kat:"kasa",ad:"G\xFC\xE7 kayna\u011F\u0131",oncelik:An,kisa:"Prizdeki elektri\u011Fi bilgisayar par\xE7alar\u0131n\u0131n kullanabilece\u011Fi d\xFC\u015F\xFCk gerilime \xE7evirir."},"yan-kapak":{kat:"kasa",ad:"Yan kapak",oncelik:An,kisa:"Kasan\u0131n yan y\xFCz\xFCndeki kapakt\u0131r. A\xE7\u0131l\u0131nca i\xE7indeki par\xE7alar g\xF6r\xFCn\xFCr; kapal\u0131yken par\xE7alar\u0131 toz ve dokunmaktan korur."},anakart:{kat:"ic",ad:"Anakart",oncelik:ni,kisa:"Bilgisayar\u0131n b\xFCt\xFCn par\xE7alar\u0131n\u0131n tak\u0131ld\u0131\u011F\u0131 ya da kabloyla ba\u011Fland\u0131\u011F\u0131 ana kartt\u0131r. Par\xE7alar onun \xFCzerinden birbiriyle konu\u015Fur."},islemci:{kat:"ic",ad:"\u0130\u015Flemci",oncelik:ni,kisa:"Bilgisayar\u0131n beynidir. Hesaplar\u0131 yapar ve programlar\u0131 \xE7al\u0131\u015Ft\u0131r\u0131r. \xC7al\u0131\u015F\u0131rken \u0131s\u0131n\u0131r, bu y\xFCzden \xFCst\xFCne so\u011Futucu tak\u0131l\u0131r."},"termal-macun":{kat:"ic",ad:"Termal macun",oncelik:An,kisa:"\u0130\u015Flemci ile so\u011Futucu aras\u0131na s\xFCr\xFClen ince macundur. Aradaki bo\u015Fluklar\u0131 doldurarak \u0131s\u0131n\u0131n so\u011Futucuya ge\xE7mesini kolayla\u015Ft\u0131r\u0131r."},ram:{kat:"ic",ad:"RAM (bellek)",oncelik:ni,kisa:"Bilgisayar\u0131n \xE7al\u0131\u015Fma masas\u0131d\u0131r. A\xE7\u0131k program ve dosyalar ge\xE7ici olarak burada durur. Elektrik gidince i\xE7indekiler silinir."},"ekran-karti":{kat:"ic",ad:"Ekran kart\u0131",oncelik:ni,kisa:"Ekranda g\xF6rd\xFC\u011F\xFCm\xFCz g\xF6r\xFCnt\xFCy\xFC haz\u0131rlar. Kendi fanlar\u0131 vard\u0131r ve \xE7al\u0131\u015F\u0131rken \xE7ok \u0131s\u0131n\u0131r."},"pcie-yuvasi":{kat:"ic",ad:"PCIe yuvas\u0131",oncelik:ii,kisa:"Ekran kart\u0131 gibi ek kartlar\u0131n anakarta tak\u0131ld\u0131\u011F\u0131 uzun yuvad\u0131r."},"guc-kablolari":{kat:"ic",ad:"G\xFC\xE7 kablolar\u0131",oncelik:An,kisa:"G\xFC\xE7 kayna\u011F\u0131ndan anakarta ve ekran kart\u0131na elektrik ta\u015F\u0131yan kal\u0131n kablolard\u0131r."},"bios-pili":{kat:"ic",ad:"BIOS pili",oncelik:ii,kisa:"Anakart\u0131n \xFCzerindeki k\xFC\xE7\xFCk pildir. Bilgisayar kapal\u0131yken saati ve temel ayarlar\u0131 korur."},"arka-panel":{kat:"kasa",ad:"Arka panel",oncelik:ii,kisa:"Anakart\u0131n kasan\u0131n arkas\u0131na a\xE7\u0131lan giri\u015F paneli. USB, ses, g\xF6r\xFCnt\xFC ve a\u011F giri\u015Fleri burada toplan\u0131r."},"wifi-karti":{kat:"ic",ad:"Wi-Fi kart\u0131",oncelik:ii,kisa:"Bilgisayar\u0131n kablosuz a\u011Fa ba\u011Flanmas\u0131n\u0131 sa\u011Flayan kartt\u0131r. Antenleri kasan\u0131n arkas\u0131na \xE7\u0131kar."},"veri-kablosu":{kat:"ic",ad:"Veri kablosu",oncelik:ii,kisa:"Depolama birimi ile anakart aras\u0131nda bilgiyi ta\u015F\u0131yan kablodur."},"m2-ssd":{kat:"depolama",ad:"M.2 SSD",oncelik:An,kisa:"K\xFC\xE7\xFCk bir kart gibi do\u011Frudan anakarta tak\u0131lan h\u0131zl\u0131 depolama birimidir. Kablo gerektirmez."},"sata-ssd":{kat:"depolama",ad:"SATA SSD",oncelik:An,kisa:"\u0130nce bir kutu bi\xE7imindeki SSD. Veriyi SATA kablosuyla anakarta iletir; hareketli par\xE7as\u0131 yoktur."},hdd:{kat:"depolama",ad:"Sabit disk (HDD)",oncelik:An,kisa:"D\xF6nen disklerin \xFCzerine bilgi yazan depolama birimidir. B\xFCy\xFCk ve ucuzdur ama SSD kadar h\u0131zl\u0131 de\u011Fildir."},"hava-sogutucu":{kat:"sogutma",ad:"Hava so\u011Futucu",oncelik:ni,kisa:"\u0130\u015Flemcinin \u0131s\u0131s\u0131n\u0131 alan metal kanatl\u0131 so\u011Futucudur. \xDCzerindeki fan havay\u0131 kanatlar\u0131n aras\u0131ndan \xFCfleyerek \u0131s\u0131y\u0131 uzakla\u015Ft\u0131r\u0131r."},"isi-borusu":{kat:"sogutma",ad:"Is\u0131 borusu",oncelik:ii,kisa:"So\u011Futucudaki bak\u0131r borulard\u0131r. Is\u0131y\u0131 i\u015Flemcinin \xFCst\xFCnden kanatlara h\u0131zla ta\u015F\u0131r."},"sivi-sogutma":{kat:"sogutma",ad:"S\u0131v\u0131 so\u011Futma",oncelik:ni,kisa:"Is\u0131y\u0131 hava yerine s\u0131v\u0131yla ta\u015F\u0131yan sistemdir: pompa blo\u011Fu, iki hortum ve radyat\xF6r birlikte \xE7al\u0131\u015F\u0131r."},"pompa-blogu":{kat:"sogutma",ad:"Pompa blo\u011Fu",oncelik:An,kisa:"\u0130\u015Flemcinin \xFCst\xFCne oturur ve \u0131s\u0131y\u0131 s\u0131v\u0131ya verir. \u0130\xE7indeki pompa s\u0131v\u0131y\u0131 hortumlardan radyat\xF6re do\u011Fru d\xF6nd\xFCr\xFCr."},radyator:{kat:"sogutma",ad:"Radyat\xF6r",oncelik:An,kisa:"S\u0131cak s\u0131v\u0131n\u0131n ince borulardan ge\xE7erek so\u011Fudu\u011Fu kanatl\u0131 metal b\xF6l\xFCmd\xFCr. \xDCzerindeki fanlar \u0131s\u0131y\u0131 havaya atar."},"sogutma-hortumu":{kat:"sogutma",ad:"So\u011Futma hortumu",oncelik:ii,kisa:"S\u0131v\u0131y\u0131 pompadan radyat\xF6re ve geri ta\u015F\u0131yan iki esnek borudur. Biri s\u0131cak, biri so\u011Fumu\u015F s\u0131v\u0131y\u0131 ta\u015F\u0131r."},"kasa-fani":{kat:"sogutma",ad:"Kasa fan\u0131",oncelik:An,kisa:"Kasan\u0131n i\xE7ine serin hava alan ya da \u0131s\u0131nan havay\u0131 d\u0131\u015Far\u0131 atan fand\u0131r. \xD6nde hava girer, \xFCstte hava \xE7\u0131kar."},"hava-akisi":{kat:"sogutma",ad:"Hava ak\u0131\u015F\u0131",oncelik:ii,kisa:"Kasan\u0131n i\xE7indeki havan\u0131n yoludur: serin hava \xF6nden girer, par\xE7alar\u0131 ge\xE7erken \u0131s\u0131n\u0131r ve yukar\u0131dan \xE7\u0131kar."},"toz-filtresi":{kat:"sogutma",ad:"Toz filtresi",oncelik:ii,kisa:"Kasaya giren havadaki tozu tutan ince a\u011Fd\u0131r. Par\xE7alar\u0131n toz i\xE7inde kalmas\u0131n\u0131 \xF6nler."}};function fa(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new _n,c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=yp(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][h]);let g=yp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function yp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new pn(a,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let y=u.getComponent(h,g);o.setComponent(h+d,g,y)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Ao=new C;function Ii(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ao.copy(t),Ao[i]=0,Ao.normalize();let c=.5*a/(a+o),u=1-Ao.angleTo(n)/l;return Math.sign(Ao[e])===1?u*c:o/(a+o)+c+c*(1-u)}var Bc=class n extends xn{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,u=new C(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,y=new C,m=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),f[M+0]=Ii(y,c,"z","y",r,i),f[M+1]=1-Ii(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),f[M+0]=1-Ii(y,c,"z","y",r,i),f[M+1]=1-Ii(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),f[M+0]=1-Ii(y,c,"x","z",r,t),f[M+1]=Ii(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),f[M+0]=1-Ii(y,c,"x","z",r,t),f[M+1]=1-Ii(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),f[M+0]=1-Ii(y,c,"x","y",r,t),f[M+1]=1-Ii(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),f[M+0]=Ii(y,c,"x","y",r,t),f[M+1]=1-Ii(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var pt=(n,t,e,i=0,s=0,r=0)=>{let a=new xn(n,t,e);return a.translate(i,s,r),a};function De(n,t,e,i,s=0,r=0,a=0,o=2){let l=new Bc(n,t,e,o,Math.max(.05,Math.min(i,n/2-.01,t/2-.01,e/2-.01)));return l.translate(s,r,a),l}function he(n,t,e=0,i=0,s=0,{seg:r=20,eksen:a="y",rUst:o=n,acik:l=!1}={}){let c=new $r(o,n,t,r,1,l);return a==="x"?c.rotateZ(-Math.PI/2):a==="z"&&c.rotateX(Math.PI/2),c.translate(e,i,s),c}function Si(n,t){let e=new Ct(fa(n.map(i=>i.index?i.toNonIndexed():i),!1),t);return e.matrixAutoUpdate=!1,e}function qe(n,t){let e=new le(t),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new pn(s,3)),n}function _p(n,t=.22,e=10,i=6){let s=new rs(n.map(r=>r.isVector3?r:new C(...r)),!1,"catmullrom",.35);return new As(s,Math.max(6,Math.round(s.getLength()*e/10)),t,i,!1)}function xp(n,t,e,i){let s=new Xi;s.moveTo(-n/2,-t/2),s.lineTo(n/2,-t/2),s.lineTo(n/2,t/2),s.lineTo(-n/2,t/2),s.closePath();let r=new as;r.absarc(0,0,e,0,Math.PI*2,!0),s.holes.push(r);let a=new os(s,{depth:i,bevelEnabled:!1,curveSegments:20});return a.translate(0,0,-i/2),a}function si(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var c1=4;function Li(n,{tekrar:t=!1,aniso:e=!0}={}){let i=new Wi(n);return i.colorSpace=dn,e&&(i.anisotropy=c1),t&&(i.wrapS=i.wrapT=xi),i}var Ks='"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif',sn=(n,t=.6,e=0,i={})=>new Le({color:n,roughness:t,metalness:e,...i}),ee={};function Pn(){return ee.hazir||Object.assign(ee,{hazir:!0,kasa:sn(2961463,.5,.35),kasaIc:sn(1842723,.7,.2),plastik:sn(2237739,.55),plastikAcik:sn(7041144,.55),plastikBeyaz:sn(15330286,.5),alumin:sn(11975878,.38,.9),aluminKoyu:sn(4870234,.42,.85),celik:sn(13028049,.3,1),bakir:sn(13203258,.32,1),altin:sn(14726734,.3,1),cip:sn(1316122,.6),kagit:sn(16185074,.92),klavyeGovde:sn(4540754,.55),renkli:sn(16777215,.5,.3,{vertexColors:!0}),kablo:sn(1513500,.65),kabloKirmizi:sn(12858667,.6),kabloSari:sn(14262811,.6),kabloYesil:sn(3120727,.6),kabloMavi:sn(2909129,.6),fanKanat:sn(3159100,.55,0,{side:wn}),fanCerceve:sn(1908773,.6),cam:sn(724242,.08,.2),lensCam:sn(1053468,.05,.6),pcbKenar:sn(1002036,.5),soket:sn(2764083,.5),ledYesil:new mn({color:3264619}),ledKirmizi:new mn({color:16729144}),ledMavi:new mn({color:5088255}),ledKapali:new mn({color:2764342}),vurgu:new mn({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new Zr({color:6962672}),gorunmez:new mn({visible:!1})}),ee}function vp(n){n.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}var I2=new He;function Ke(n,t,e,i,s=0,r=0,a=0){let o=new ln;return o.position.set(s,r,a),o.userData={...n,yari:[t/2,e/2,i/2],hacim:n.hacim??t*e*i},o.updateMatrixWorld(),o}function ds(n,t,e,i,s,r=null){let a=new ln;return a.position.set(e,i,s),a.name="kesif-"+t,r&&(a.userData.yon=new C(...r).normalize()),n.add(a),{id:t,nesne:a,yerel:new C}}function bp(n,t){Pn();let[e,i,s,r,a,o]=t,l=new Re,c=new xn(r+1.2,a+1.2,o+1.2),u=new Ct(c,ee.vurgu);return u.renderOrder=2,l.add(u,new Va(new Xa(c),ee.vurguCizgi)),l.position.set(e,i,s),n.add(l),l}var Di={x0:-108,x1:108,z0:-76,z1:56,ust:-.2,kalin:5},Ne={x:-86,z:-23,w:40,h:90,d:86},cn={x:4,z:-46},ri=[{x:-53,z:-46},{x:61,z:-46}],wi={x:0,z:22},ai={x:58,z:22},Ai={x:88,z:-43},oi={x:-55,z:34},Nn={x:90,z:34},$i={x:-33,z:47,don:.5},Ni={x:4,y:66.6,z:-46};var fi=1024,li=576,u1=[[43,24],[85,48],[256,144],[fi,li]],Mp=[[80,45],[160,90],[480,270],[1920,1080]];function Ji(n,t,e,i,s,r,a,o){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath(),a&&(n.fillStyle=a,n.fill()),o&&(n.strokeStyle=o,n.lineWidth=2,n.stroke())}var Ph=(n,t)=>{n.beginPath(),t.forEach(([e,i],s)=>s?n.lineTo(e,i):n.moveTo(e,i)),n.closePath(),n.fill()},Es=(n,t,e,i,s,r,{kalin:a=!1,hiza:o="left"}={})=>{n.font=`${a?700:500} ${s}px ${Ks}`,n.fillStyle=r,n.textAlign=o,n.textBaseline="middle",n.fillText(t,e,i)};function Eo(n,t,e,i,s,r){n.save(),n.shadowColor="rgba(20,24,40,.25)",n.shadowBlur=22,n.shadowOffsetY=6,Ji(n,t,e,i,s,10,"#ffffff"),n.restore(),Ji(n,t,e,i,38,10,"#e7ebf2"),n.fillStyle="#e7ebf2",n.fillRect(t,e+24,i,14),Es(n,r,t+16,e+20,19,"#2b3342",{kalin:!0});for(let a=0;a<3;a++)n.fillStyle=["#b8c0cf","#b8c0cf","#e5654f"][a],n.beginPath(),n.arc(t+i-24-a*26,e+19,8,0,Math.PI*2),n.fill()}function Ch(n,t,e,i,s){i==="bilgisayar"&&(Ji(n,t+6,e+6,44,30,4,"#2b3342"),Ji(n,t+10,e+10,36,22,2,"#7fb4f5"),n.fillStyle="#2b3342",n.fillRect(t+22,e+36,12,6),n.fillRect(t+14,e+42,28,4)),i==="klasor"&&(Ji(n,t+6,e+14,44,30,4,"#f2b53e"),Ji(n,t+6,e+8,20,10,3,"#e29f25")),i==="cop"&&(n.fillStyle="#9aa4b6",Ph(n,[[t+14,e+14],[t+42,e+14],[t+38,e+46],[t+18,e+46]]),n.fillStyle="#7e889b",n.fillRect(t+10,e+8,36,6)),Es(n,s,t+28,e+62,15,"#1d2433",{kalin:!0,hiza:"center"})}function h1(n,t){if(t.mod==="kapali"){n.fillStyle="#0a0b0e",n.fillRect(0,0,fi,li);return}if(t.mod==="acilis"){n.fillStyle="#0c1018",n.fillRect(0,0,fi,li),n.strokeStyle="#7c8aa8",n.lineWidth=10,n.lineCap="round",n.beginPath(),n.arc(fi/2,li/2-20,46,-1.2,3.2),n.stroke(),Es(n,"Ba\u015Flat\u0131l\u0131yor",fi/2,li/2+70,26,"#aab4c8",{hiza:"center"});return}n.fillStyle="#d5e6fb",n.fillRect(0,0,fi,li),n.fillStyle="#a2c8f3",Ph(n,[[0,410],[170,320],[350,390],[560,290],[770,380],[1024,310],[1024,576],[0,576]]),n.fillStyle="#6ea4e8",Ph(n,[[0,470],[230,410],[430,460],[650,400],[870,460],[1024,420],[1024,576],[0,576]]),Ch(n,28,24,"bilgisayar","Bilgisayar"),Ch(n,28,120,"klasor","Belgeler"),Ch(n,28,216,"cop","\xC7\xF6p"),Eo(n,150,56,470,340,"Yaz\u0131 Defteri"),n.fillStyle="#2b3342",n.font=`500 26px ${Ks}`,n.textAlign="left",n.textBaseline="alphabetic";let e=t.yazi||"",i=[],s="";for(let l of e){if(l===`
`){i.push(s),s="";continue}n.measureText(s+l).width>420&&(i.push(s),s=""),s+=l}i.push(s);let r=i.slice(-7);r.forEach((l,c)=>n.fillText(l,174,130+c*40)),e||(n.fillStyle="#9aa4b6",n.fillText("Bir tu\u015Fa bas",174,130));let a=130+(r.length-1)*40;if(n.fillStyle="#7c4dff",n.fillRect(174+n.measureText(r[r.length-1]).width+3,a-24,3,32),t.kamera&&(Eo(n,650,70,330,270,"Kamera"),n.fillStyle="#26324a",n.fillRect(662,118,306,210),n.fillStyle="#8ea6d6",n.beginPath(),n.arc(815,205,40,0,Math.PI*2),n.fill(),n.fillStyle="#5f7fc2",n.beginPath(),n.ellipse(815,330,86,70,0,Math.PI,0),n.fill(),n.strokeStyle="#e5654f",n.lineWidth=4,n.strokeRect(670,126,290,194),n.fillStyle="#e5654f",n.beginPath(),n.arc(692,146,7,0,Math.PI*2),n.fill(),Es(n,"Kay\u0131t",708,147,15,"#ffffff",{kalin:!0})),t.ses!=null){Eo(n,650,360,330,150,"Ses Kayd\u0131");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*1.7+t.ses*9)*Math.cos(l*.6+t.ses*5))*66;n.fillStyle="#7c4dff",n.fillRect(668+l*10,450-c/2-8,6,c)}Es(n,"Dinleniyor",668,492,15,"#5b6579",{kalin:!0})}if(t.cal!=null){Eo(n,650,360,330,150,"M\xFCzik");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*.9+t.cal*7)*Math.cos(l*.4+t.cal*3))*66;n.fillStyle="#7c4dff",n.fillRect(668+l*10,450-c/2-8,6,c)}Es(n,"\xC7al\u0131yor",668,492,15,"#5b6579",{kalin:!0})}t.yazdir!=null&&(Eo(n,250,200,380,160,"Yazd\u0131r"),Es(n,t.yazdir>=1?"Yazd\u0131r\u0131ld\u0131":"Yaz\u0131c\u0131ya g\xF6nderiliyor",274,262,20,"#2b3342",{kalin:!0}),Ji(n,274,296,332,22,11,"#e1e6ef"),t.yazdir>0&&Ji(n,274,296,Math.max(22,332*Math.min(1,t.yazdir)),22,11,"#7c4dff")),n.fillStyle="#1f2533",n.fillRect(0,li-44,fi,44),Ji(n,12,li-38,32,32,7,"#7c4dff");for(let l=0;l<3;l++)Ji(n,62+l*46,li-36,36,28,6,l===0?"#3a4560":"#2d3548");if(Es(n,"10:24",fi-22,li-22,19,"#dfe5f1",{kalin:!0,hiza:"right"}),t.menu){let l=Math.min(t.imlec.x+6,fi-170),c=Math.min(t.imlec.y+26,li-150);n.save(),n.shadowColor="rgba(20,24,40,.3)",n.shadowBlur=16,n.shadowOffsetY=4,Ji(n,l,c,160,104,8,"#ffffff"),n.restore(),["Kes","Kopyala","Yap\u0131\u015Ft\u0131r"].forEach((u,d)=>Es(n,u,l+16,c+22+d*30,19,"#2b3342",{kalin:d===1}))}let o=t.imlec||{x:760,y:220};t.tik&&(n.strokeStyle="#7c4dff",n.lineWidth=4,n.beginPath(),n.arc(o.x,o.y,18+(t.tik-1)*20,0,Math.PI*2),n.stroke()),n.fillStyle="#ffffff",n.strokeStyle="#111827",n.lineWidth=2.5,n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(o.x,o.y+30),n.lineTo(o.x+8,o.y+23),n.lineTo(o.x+14,o.y+36),n.lineTo(o.x+20,o.y+33),n.lineTo(o.x+14,o.y+21),n.lineTo(o.x+24,o.y+21),n.closePath(),n.fill(),n.stroke()}function Sp(){let[n,t]=si(fi,li),[e,i]=si(fi,li),[s,r]=si(fi,li),a=Li(e,{aniso:!1}),o={mod:"masaustu",yazi:"",imlec:{x:760,y:230},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3};function l(){h1(t,o);let[c,u]=u1[o.kademe];c>=fi?(i.imageSmoothingEnabled=!0,i.drawImage(n,0,0)):(s.width=c,s.height=u,r.imageSmoothingEnabled=!0,r.drawImage(n,0,0,c,u),i.imageSmoothingEnabled=!1,i.drawImage(s,0,0,c,u,0,0,fi,li)),a.needsUpdate=!0}return l(),{tex:a,durum:o,guncelle:l}}function ko(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ep=(n,t)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]},Ih=n=>n<0?0:n>255?255:n,wp=n=>n*n*(3-2*n),Tp={},Vc=(n,t)=>{let e=performance.now(),i=t();return Tp[n]=Math.round((performance.now()-e)*10)/10,i};function d1(n,t,e,i,s){let r=ko(s),a=new Float32Array(e*i),o=new Float32Array(n*t);for(let d=0;d<a.length;d++)a[d]=r();let l=new Int32Array(n),c=new Int32Array(n),u=new Float32Array(n);for(let d=0;d<n;d++){let h=d*e/n,f=Math.floor(h);l[d]=f%e,c[d]=(f+1)%e,u[d]=wp(h-f)}for(let d=0;d<t;d++){let h=d*i/t,f=Math.floor(h),g=f%i*e,y=(f+1)%i*e,m=wp(h-f),p=d*n;for(let M=0;M<n;M++){let T=a[g+l[M]],b=a[g+c[M]],A=a[y+l[M]],x=a[y+c[M]],E=u[M];o[p+M]=(T+(b-T)*E)*(1-m)+(A+(x-A)*E)*m}}return o}function Gc(n,t,e,i){let s=new Float32Array(n*t),r=0;e.forEach(([a,o,l],c)=>{let u=d1(n,t,a,o,i+c*7919);for(let d=0;d<s.length;d++)s[d]+=u[d]*l;r+=l});for(let a=0;a<s.length;a++)s[a]/=r;return s}function Lh(n,t,e,i,s=!0){let[r,a]=Ep(t,e),o=a.createImageData(t,e),l=o.data,c=(u,d)=>(s?(u=(u+t)%t,d=(d+e)%e):(u=u<0?0:u>=t?t-1:u,d=d<0?0:d>=e?e-1:d),n[d*t+u]);for(let u=0;u<e;u++)for(let d=0;d<t;d++){let h=(c(d-1,u)-c(d+1,u))*i,f=(c(d,u+1)-c(d,u-1))*i,g=1,y=Math.hypot(h,f,g);h/=y,f/=y,g/=y;let m=(u*t+d)*4;l[m]=(h*.5+.5)*255,l[m+1]=(f*.5+.5)*255,l[m+2]=(g*.5+.5)*255,l[m+3]=255}return a.putImageData(o,0,0),r}var Ts=4;function pa(n,t,e=!1,i=Ts){let s=new Wi(n);return s.colorSpace=t?dn:Ki,s.minFilter=Ri,s.magFilter=Sn,s.anisotropy=i,e&&(s.wrapS=s.wrapT=xi),s}var f1=n=>new kt(n,n);function p1(n,t,e,i,s,r,a,o,l="0,0,0"){n.save(),n.shadowColor=`rgba(${l},${o})`,n.shadowBlur=a,n.shadowOffsetX=t+100,n.shadowOffsetY=0,n.fillStyle="#000",n.fillRect(e-s/2-t-100,i-r/2,s,r),n.restore()}function m1({x0:n,x1:t,z0:e,z1:i},s=[],r=Ts){let c=Vc("ahsap-damar",()=>{let h=Gc(1024,640,[[2,11,1],[4,23,.45]],2645),f=Gc(1024,640,[[28,220,1],[14,420,.7]],2746),g=Gc(1024,640,[[2,3,1],[6,9,.35]],2847),y=new Float32Array(1024*640),m=new Float32Array(1024*640);for(let p=0;p<y.length;p++){let M=.5+.5*Math.sin(h[p]*40+f[p]*1.6),T=Math.pow(M,1.8);m[p]=Math.min(1,Math.max(0,T*.5+f[p]*.3)),y[p]=.55*m[p]+.45*f[p]}return{ton:m,yuk:y,renk:g}}),u=Vc("ahsap-albedo",()=>{let[h,f]=Ep(1024,640),g=f.createImageData(1024,640),y=g.data,m=[203,172,131],p=[165,127,88];for(let b=0;b<1024*640;b++){let A=c.ton[b],x=(c.renk[b]-.5)*20,E=b*4;y[E]=Ih(m[0]+(p[0]-m[0])*A+x),y[E+1]=Ih(m[1]+(p[1]-m[1])*A+x*.85),y[E+2]=Ih(m[2]+(p[2]-m[2])*A+x*.6),y[E+3]=255}f.putImageData(g,0,0);let M=b=>(b-n)/(t-n)*1024,T=b=>(b-e)/(i-e)*640;for(let b of s)p1(f,1024,M(b.x),T(b.z),b.w/(t-n)*1024,b.d/(i-e)*640,b.bulanik??22,b.alfa??.34,"52,34,18");return h}),d=Vc("ahsap-normal",()=>Lh(c.yuk,1024,640,3.2,!1));return{map:pa(u,!0,!1,r),normalMap:pa(d,!1,!1,r),normalScale:f1(.55)}}function Ap(n,t,e,i,s=Ts){let r=Vc("mikro-"+i,()=>Gc(n,n,t,i)),a=Lh(r,n,n,e,!0);return pa(a,!1,!0,s)}function g1(n=Ts){let e=new Float32Array(16384),i=ko(3868);for(let s=0;s<128;s++){let r=.35+i()*.65;for(let a=0;a<128;a++)e[s*128+a]=r}return pa(Lh(e,128,128,.9,!0),!1,!0,n)}var To=null;function kp({aniz:n=4,izler:t=[],masa:e}){if(To)return To;Ts=Math.max(1,Math.min(8,n));let i=performance.now(),s={masa:m1(e,t,Ts),tozBoya:Ap(256,[[64,64,1],[128,128,.7]],1.1,31489,Ts),plastik:Ap(256,[[32,32,1],[96,96,.6]],.8,31490,Ts),firca:g1(Ts)};return Tp.toplam=Math.round((performance.now()-i)*10)/10,To=s,s}function Hc(){if(!To)throw new Error("dokuKur \xE7a\u011Fr\u0131lmad\u0131");return To}var fs=ds;function Rp(){Pn();let n=Hc().masa,t=new Le({map:n.map,normalMap:n.normalMap,normalScale:n.normalScale,roughness:.62}),e=new Ct(De(Di.x1-Di.x0,Di.kalin,Di.z1-Di.z0,1,0,Di.ust-Di.kalin/2,(Di.z0+Di.z1)/2,3),t);return e.name="masa",e.receiveShadow=!1,e.castShadow=!1,e}function Cp(){Pn();let n=new Re;n.name="monitor",n.position.set(cn.x,0,cn.z),n.add(Si([De(95,55,3.2,.9,0,39,0,3),De(64,38,3.6,1.8,0,40,-3.1,3)],ee.plastik)),n.add(Si([De(34,1.2,22,.5,0,.6,3,3),De(7.5,12.8,2.4,.5,0,7.6,-3.8,3),De(12,3.4,6.4,.9,0,12.6,-3.6,3)],ee.alumin)),n.add(Si([pt(7,3.6,.5,14,24,-4.9),pt(5.4,1.8,.5,-16,21.5,-4.9),pt(2.4,1.3,.4,-16,22.1,-5.2)],ee.cip));let t=Sp(),e=new Ct(new gn(92,51.8),new mn({map:t.tex,toneMapped:!1}));e.position.set(0,39.4,1.62),n.add(e);let i=new Ct(new xn(.9,.35,.2),ee.ledYesil);i.position.set(40.5,12.8,1.66),i.userData.dinamik=!0,n.add(i);let s=Ke({kesif:"monitor",parca:"monitor"},95,66,24,0,33,1),r=Ke({kesif:"ekran",parca:"monitor"},92,51.8,1.2,0,39.4,1.7,0);return n.add(s,r),{grup:n,ekran:t,led:i,kesif:[fs(n,"monitor",30,56,3,[0,.3,1]),fs(n,"ekran",-8,44,2.4,[0,0,1])],ledAyarla:a=>{i.material=a?ee.ledYesil:ee.ledKapali},arka:new C(cn.x-14,14.5,cn.z-4.9)}}function Pp(){Pn();let n=new Re;n.name="kamera",n.position.set(Ni.x,Ni.y,Ni.z),n.add(Si([De(4.2,1.2,3.2,.4,0,.6,-.4),De(8.4,3.4,3.4,1.3,0,2.9,.4,3)],ee.plastik));let t=new Ct(he(.95,.5,0,2.9,2.2,{eksen:"z",seg:20}),ee.lensCam);n.add(t);let e=new Ct(new ei(1.05,.14,8,24),ee.alumin);e.position.set(0,2.9,2.18),n.add(e);let i=new Ct(new xn(.5,.3,.15),ee.ledKapali);return i.position.set(2.6,3.7,2.15),i.userData.dinamik=!0,n.add(i),n.add(Ke({kesif:"web-kamerasi",parca:"kamera"},9,5,5,0,2.4,.3)),{grup:n,led:i,kesif:[fs(n,"web-kamerasi",0,5.2,1,[0,.3,1])],ledAyarla:s=>{i.material=s?ee.ledYesil:ee.ledKapali},ucu:new C(Ni.x,Ni.y+1,Ni.z-1.6)}}function ma(n,t,e,i){let s=[];for(let r=0;r<n.length;r++){let a=n[r],o=n[(r+1)%n.length],l=t*a[0]+e*a[1]-i,c=t*o[0]+e*o[1]-i;if(l<=0&&s.push(a),l<0&&c>0||l>0&&c<0){let u=l/(l-c);s.push([a[0]+(o[0]-a[0])*u,a[1]+(o[1]-a[1])*u])}}return s}function Dh(n,t,e){let i=new Xi;n.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.closePath();let s=new os(i,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});return s.rotateX(-Math.PI/2),s.translate(0,e,0),s}function Ip(){Pn();let n=new Re;n.name="fare",n.position.set(ai.x,0,ai.z);let t=5,e=9.6,i=2.7,s=[];for(let h=0;h<48;h++){let f=h/48*Math.PI*2,g=Math.cos(f),y=Math.sin(f);s.push([t*Math.sign(g)*Math.pow(Math.abs(g),2/i),e*Math.sign(y)*Math.pow(Math.abs(y),2/i)*(Math.sign(y)>0?.92:1)])}let r=new Ct(Dh(s,1.6,.9),new Le({color:15133166,roughness:.45}));n.add(r);let a=ma(ma(ma(s,1,0,-.1),0,-1,-1.2),0,1,9.99),o=ma(ma(ma(s,-1,0,-.1),0,-1,-1.2),0,1,9.99),l=new Le({color:15988216,roughness:.4}),c=new Ct(Dh(a.map(([h,f])=>[h*.97-.12,f*.97-.05]),.2,.85),l);c.position.y=.55;let u=new Ct(Dh(o.map(([h,f])=>[h*.97+.12,f*.97-.05]),.2,.85),l);u.position.y=.55,n.add(c,u);let d=new Ct(he(.85,1,0,3.55,-4.4,{eksen:"x",seg:16}),ee.fanCerceve);return n.add(d),n.rotation.y=0,n.add(Ke({kesif:"fare",parca:"fare"},12.2,4.2,20,0,2,0)),n.add(Ke({kesif:"fare-tekerlek",parca:"fare",tekerlek:!0},2.2,2.4,3.2,0,3.6,-4.4)),{grup:n,dSol:c,dSag:u,tekerlek:d,kesif:[fs(n,"fare",0,5.4,4),fs(n,"fare-tekerlek",0,4.8,-4.4)],tikla:h=>{(h?c:u).position.y=.3},birak:()=>{c.position.y=.55,u.position.y=.55},arka:new C(ai.x,1.2,ai.z-7.4)}}function Lp(){Pn();let n=new Re;n.name="hoparlorler";let t=[],e=[],i=new ur(.92,1,48),s=new Le({color:2830134,roughness:.7}),r=new Le({color:3488322,roughness:.55});return ri.forEach((a,o)=>{let l=new Re;l.position.set(a.x,0,a.z),l.name="hoparlor"+(o+1),l.add(new Ct(De(13,26,15,1.2,0,13.4,0,3),r)),l.add(Si([he(4.4,.7,0,8.5,7.5,{eksen:"z",seg:28,rUst:3.4}),he(1.7,.6,0,19.5,7.5,{eksen:"z",seg:20,rUst:1.5}),he(1.4,.8,0,8.5,7.9,{eksen:"z",seg:14,rUst:.9})],s));let c=(d,h,f)=>{let g=new Ct(new ei(d,h,8,32),ee.alumin);return g.position.set(0,f,7.5),g};if(l.add(c(4.6,.22,8.5),c(1.95,.16,19.5)),o===0){let d=new Ct(new xn(.7,.35,.2),ee.ledYesil);d.position.set(4,2.2,7.55),l.add(d),l.add(new Ct(he(.9,.7,-4,2.2,7.7,{eksen:"z",seg:14}),ee.alumin))}l.add(Ke({kesif:"hoparlor",parca:"hoparlor"},13.2,26.4,15.4,0,13.4,0)),n.add(l),t.push(l);let u=[];for(let d=0;d<3;d++){let h=new Ct(i,new mn({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:wn}));h.visible=!1,h.raycast=()=>{},h.userData.dinamik=!0,h.position.set(a.x,8.5,a.z+8),n.add(h),u.push(h)}e.push(u)}),{grup:n,tek:t,halkalar:e,kesif:ri.map((a,o)=>fs(t[o],"hoparlor",0,28.4,0)),arka:ri.map(a=>new C(a.x,3,a.z-7.2))}}function Dp(){Pn();let n=new Re;n.name="mikrofon",n.position.set(oi.x,0,oi.z);let[t,e]=si(128,128);e.fillStyle="#4a4f59",e.fillRect(0,0,128,128),e.fillStyle="#1b1d22";for(let o=0;o<128;o+=8)for(let l=0;l<128;l+=8)e.beginPath(),e.arc(o+4,l+4,2.1,0,Math.PI*2),e.fill();let i=Li(t,{tekrar:!0});i.repeat.set(6,4),n.add(Si([he(4.6,.9,0,.45,0,{seg:32,rUst:4.2}),he(.55,12,0,6.8,0)],ee.aluminKoyu));let s=new Re;s.position.set(0,14.6,0),s.rotation.x=.35,s.add(new Ct(new Kr(2.3,5.4,6,20),new Le({map:i,roughness:.45,metalness:.5})));let r=new Ct(new ei(2.36,.26,8,28),ee.alumin);r.rotation.x=Math.PI/2,s.add(r),n.add(s);let a=new Ct(new xn(.8,.3,.3),ee.ledKapali);return a.position.set(0,.9,4.3),a.userData.dinamik=!0,n.add(a),n.add(Ke({kesif:"mikrofon",parca:"mikrofon"},10,20,10,0,10,0)),{grup:n,led:a,kesif:[fs(n,"mikrofon",0,21.5,0)],ledAyarla:o=>{a.material=o?ee.ledKirmizi:ee.ledKapali},ucu:new C(oi.x,.5,oi.z-3.8),kafa:new C(oi.x,15.6,oi.z+1)}}function Np(){Pn();let n=new Re;n.name="kulaklik",n.position.set(Nn.x,0,Nn.z);let t=new Ct(new ei(7.6,.85,10,32,Math.PI),ee.plastik);t.position.y=4.2,n.add(t);let e=new Ct(new xn(6,.5,1.6),ee.plastikAcik);e.position.y=11.5,e.scale.set(1,1,1),n.add(e);let i=new Le({color:2237739,roughness:.55,emissive:8146431,emissiveIntensity:0}),s=new Le({color:2829878,roughness:.9,emissive:16088064,emissiveIntensity:0});for(let o of[-1,1]){n.add(new Ct(he(3.9,2.8,o*8.2,4.2,0,{eksen:"x",seg:28}),i));let l=new Ct(new ei(3.3,.95,8,28),new Le({color:3817031,roughness:.9}));l.rotation.y=Math.PI/2,l.position.set(o*6.6,4.2,0),n.add(l),n.add(new Ct(he(1.9,.4,o*9.7,4.2,0,{eksen:"x",seg:20}),ee.alumin))}let r=new Ct(_p([[-9.7,3.4,.4],[-10.6,2.2,2.6],[-9,1.2,6.2],[-5.6,1.5,8.4]],.28),ee.kablo);n.add(r);let a=new Ct(new Kr(.85,1.4,4,12),s);return a.rotation.z=Math.PI/2,a.rotation.y=.4,a.position.set(-4.7,1.6,8.6),n.add(a),n.add(Ke({kesif:"kulaklik",parca:"kulaklik"},22,14,7,0,7,0)),n.add(Ke({kesif:"kulaklik-mikrofon",parca:"kulaklik"},4,2.4,3,-4.7,1.7,8.6)),{grup:n,kupMal:i,ucMal:s,kesif:[fs(n,"kulaklik",0,15,0),fs(n,"kulaklik-mikrofon",-4.7,4,8.6)],ucu:new C(Nn.x+9.7,4.2,Nn.z)}}function Up(){Pn();let n=new Re;n.name="usb-bellek";let t=new Le({color:3107824,roughness:.4});n.add(new Ct(De(3.7,1.7,9,.6,0,0,3.4+4.5,2),t)),n.add(new Ct(pt(2.6,.8,3.6,0,0,1.8),ee.celik));let e=new Ct(new xn(.7,.18,.7),ee.ledKapali);return e.position.set(0,.88,10.2),e.userData.dinamik=!0,n.add(e),n.add(Ke({kesif:"usb-bellek",parca:"usb-bellek",minAdim:4,minPx:14},5.4,3.6,13,0,0,6.6)),{grup:n,led:e,kesif:[fs(n,"usb-bellek",0,3.4,8)],ledAyarla:i=>{e.material=i?ee.ledYesil:ee.ledKapali}}}var ga=ds,Gn=3.81,Wc=1.9,ya=2.2,y1=ya+.15,Fp=.07;function _1(){let n=[],t=(e,i,s,r=1,a=1,o="harf")=>n.push({ad:e,x:i,y:s,w:r,h:a,tur:o});return t("Esc",0,0,1,1,"ozel"),[2,3,4,5].forEach((e,i)=>t("F"+(i+1),e,0,1,1,"islev")),[6.5,7.5,8.5,9.5].forEach((e,i)=>t("F"+(i+5),e,0,1,1,"islev")),[11,12,13,14].forEach((e,i)=>t("F"+(i+9),e,0,1,1,"islev")),["PrtSc","ScrLk","Pause"].forEach((e,i)=>t(e,15.25+i,0,1,1,"islev")),['"',"1","2","3","4","5","6","7","8","9","0","*","-"].forEach((e,i)=>t(e,i,1.5,1,1,i===0||i>10?"harf":"rakam")),t("Geri",13,1.5,2,1,"ozel"),t("Tab",0,2.5,1.5,1,"ozel"),"QWERTYUIOP\u011E\xDC".split("").forEach((e,i)=>t(e,1.5+i,2.5)),t(",",13.5,2.5,1.5,1),t("Caps",0,3.5,1.75,1,"ozel"),"ASDFGHJKL\u015E\u0130".split("").forEach((e,i)=>t(e,1.75+i,3.5)),t("Enter",12.75,3.5,2.25,1,"ozel"),t("Shift",0,4.5,2.25,1,"ozel"),"ZXCVBNM\xD6\xC7.".split("").forEach((e,i)=>t(e,2.25+i,4.5)),t("Shift",12.25,4.5,2.75,1,"ozel"),t("Ctrl",0,5.5,1.25,1,"ozel"),t("",1.25,5.5,1.25,1,"ozel"),t("Alt",2.5,5.5,1.25,1,"ozel"),t(" ",3.75,5.5,6.25,1,"bosluk"),t("Alt",10,5.5,1.25,1,"ozel"),t("",11.25,5.5,1.25,1,"ozel"),t("Men\xFC",12.5,5.5,1.25,1,"ozel"),t("Ctrl",13.75,5.5,1.25,1,"ozel"),["Ins","Home","PgUp"].forEach((e,i)=>t(e,15.25+i,1.5,1,1,"ozel")),["Del","End","PgDn"].forEach((e,i)=>t(e,15.25+i,2.5,1,1,"ozel")),t("yukari",16.25,4.5,1,1,"ok"),t("sol",15.25,5.5,1,1,"ok"),t("asagi",16.25,5.5,1,1,"ok"),t("sag",17.25,5.5,1,1,"ok"),["Num","/","*","-"].forEach((e,i)=>t(e,18.5+i,1.5,1,1,i?"rakam":"ozel")),["7","8","9"].forEach((e,i)=>t(e,18.5+i,2.5,1,1,"rakam")),t("+",21.5,2.5,1,2,"rakam"),["4","5","6"].forEach((e,i)=>t(e,18.5+i,3.5,1,1,"rakam")),["1","2","3"].forEach((e,i)=>t(e,18.5+i,4.5,1,1,"rakam")),t("Enter",21.5,4.5,1,2,"ozel"),t("0",18.5,5.5,2,1,"rakam"),t(".",20.5,5.5,1,1,"rakam"),n}var x1={Esc:"tus-esc",Shift:"tus-shift",Ctrl:"tus-ctrl",Enter:"tus-enter"," ":"tus-bosluk"},v1=n=>x1[n.ad]||(n.tur==="harf"||n.tur==="rakam"?"tus-harf":"tus-ozel"),Nh=n=>n.tur==="harf"||n.tur==="rakam"||n.tur==="bosluk",Uh=3,ps=4*Uh;function Op(n,t,e){e=Math.max(.05,Math.min(e,n/2-.01,t/2-.01));let i=n/2-e,s=t/2-e,r=[];for(let[a,o,l]of[[i,s,0],[-i,s,90],[-i,-s,180],[i,-s,270]])for(let c=0;c<Uh;c++){let u=(l+c/(Uh-1)*90)*Math.PI/180;r.push([a+e*Math.cos(u),o+e*Math.sin(u)])}return r}var gr=[{y:-.3,ic:0,r:.55,ao:.72},{y:Wc*.66,ic:.1,r:.62,ao:.9},{y:Wc-.32,ic:.4,r:.78,ao:1},{y:Wc,ic:.6,r:.92,ao:1}],$s=ps*gr.length+ps+1,zp=(3*ps*2+ps)*3;function Bp(){Pn();let n=22.5*Gn,t=6.5*Gn,e=-n/2,i=-t/2,s=new Re;s.name="klavye",s.position.set(wi.x,(t+3)/2*Math.sin(Fp),wi.z),s.rotation.x=Fp,s.add(new Ct(De(n+3,ya,t+3,.9,0,ya/2,0,3),ee.klavyeGovde));for(let V=0;V<3;V++)s.add(new Ct(pt(1.3,.3,.5,e+(19+V)*Gn,ya+.1,i+.5*Gn),V===0?ee.ledYesil:ee.ledKapali));let r=_1(),a=2048,o=Math.round(a*t/n),l=a/n,[c,u]=si(a,o);u.fillStyle="#ffffff",u.fillRect(0,0,a,o),u.textAlign="center",u.textBaseline="middle",r.forEach(V=>{let Y=(V.x+V.w/2)*Gn*l,K=(V.y+V.h/2)*Gn*l;if(u.fillStyle="#20242c",u.strokeStyle="#20242c",V.tur==="ok"){let St=.95*l;u.beginPath();let Gt={yukari:[0,-1],asagi:[0,1],sol:[-1,0],sag:[1,0]}[V.ad],Xt=-Gt[1],Ut=Gt[0];u.moveTo(Y+Gt[0]*St,K+Gt[1]*St),u.lineTo(Y-Gt[0]*St*.7+Xt*St,K-Gt[1]*St*.7+Ut*St),u.lineTo(Y-Gt[0]*St*.7-Xt*St,K-Gt[1]*St*.7-Ut*St),u.closePath(),u.fill();return}if(V.ad==="Geri"){u.lineWidth=.32*l,u.lineCap="round",u.beginPath(),u.moveTo(Y+1.6*l,K),u.lineTo(Y-1.6*l,K),u.moveTo(Y-1.6*l,K),u.lineTo(Y-.6*l,K-.9*l),u.moveTo(Y-1.6*l,K),u.lineTo(Y-.6*l,K+.9*l),u.stroke();return}if(!V.ad.trim())return;let Dt=V.ad.length>2;u.font=`${Nh(V)?700:600} ${(Dt?1.05:1.55)*l}px ${Ks}`,u.fillText(V.ad,Y,K+.05*l)});let d=pa(c,!0,!1),h=r.length,f=new Float32Array(h*$s*3),g=new Float32Array(h*$s*3),y=new Float32Array(h*$s*2),m=new Float32Array(h*$s*3),p=new Uint16Array(h*zp),M=new Float32Array(h*$s),T=new Int32Array(h),b=new le(15658991),A=new le(11777724),x=new le(8146431);r.forEach((V,Y)=>{let K=V.w*Gn-.3,Dt=V.h*Gn-.3,St=e+(V.x+V.w/2)*Gn,Gt=i+(V.y+V.h/2)*Gn,Xt=Nh(V)?b:A,Ut=Y*$s,et=[],at=(Rt,de,lt,ft)=>{f[Ut*3]=St+Rt,f[Ut*3+1]=y1+lt,f[Ut*3+2]=Gt+de,y[Ut*2]=(St+Rt-e)/n,y[Ut*2+1]=1-(Gt+de-i)/t,M[Ut]=ft,m[Ut*3]=Xt.r*ft,m[Ut*3+1]=Xt.g*ft,m[Ut*3+2]=Xt.b*ft,Ut++};for(let Rt of gr){et.push(Ut);for(let[de,lt]of Op(K-2*Rt.ic,Dt-2*Rt.ic,Rt.r))at(de,lt,Rt.y,Rt.ao)}let It=Ut;for(let[Rt,de]of Op(K-2*gr[3].ic,Dt-2*gr[3].ic,gr[3].r))at(Rt,de,gr[3].y,1);let qt=Ut;at(0,0,gr[3].y,1);let Pt=Y*zp;for(let Rt=0;Rt<3;Rt++)for(let de=0;de<ps;de++){let lt=et[Rt]+de,ft=et[Rt]+(de+1)%ps,xt=et[Rt+1]+de,_t=et[Rt+1]+(de+1)%ps;p[Pt++]=lt,p[Pt++]=xt,p[Pt++]=ft,p[Pt++]=ft,p[Pt++]=xt,p[Pt++]=_t}for(let Rt=0;Rt<ps;Rt++)p[Pt++]=qt,p[Pt++]=It+(Rt+1)%ps,p[Pt++]=It+Rt;T[Y]=et[3]});let E=new _n,v=new pn(f,3),w=new pn(m,3);E.setAttribute("position",v),E.setAttribute("normal",new pn(g,3)),E.setAttribute("uv",new pn(y,2)),E.setAttribute("color",w),E.setIndex(new pn(p,1)),E.computeVertexNormals();let P=E.attributes.normal;r.forEach((V,Y)=>{for(let K=0;K<ps;K++){let Dt=T[Y]+K,St=P.getX(Dt),Gt=P.getY(Dt)+.9,Xt=P.getZ(Dt),Ut=Math.hypot(St,Gt,Xt);P.setXYZ(Dt,St/Ut,Gt/Ut,Xt/Ut)}});let N=f.slice(),F=Hc().plastik.clone();F.wrapS=F.wrapT=xi,F.repeat.set(14,4),F.needsUpdate=!0;let G=new Le({map:d,vertexColors:!0,roughness:.46,normalMap:F,normalScale:new kt(.35,.35)}),L=new Ct(E,G);L.name="tuslar",L.userData.dinamik=!0,s.add(L),r.forEach((V,Y)=>{s.add(Ke({kesif:v1(V),parca:"klavye",tus:V.ad,tusNo:Y,tusTur:V.tur},V.w*Gn-.3,2.4,V.h*Gn-.3,e+(V.x+V.w/2)*Gn,ya+1.1,i+(V.y+V.h/2)*Gn))}),s.add(Ke({kesif:"klavye",parca:"klavye"},n+3,5,t+3,0,2,0));let z=(V,Y)=>{let K=V*$s,Dt=K+$s,St=Y?x:Nh(r[V])?b:A;for(let Gt=K;Gt<Dt;Gt++)f[Gt*3+1]=N[Gt*3+1]-(Y?.6:0),m[Gt*3]=St.r*M[Gt],m[Gt*3+1]=St.g*M[Gt],m[Gt*3+2]=St.b*M[Gt];v.needsUpdate=!0,w.needsUpdate=!0},X=V=>r.findIndex(Y=>Y.ad===V),j=V=>{let Y=r[V];return new C(e+(Y.x+Y.w/2)*Gn,ya+Wc+1.2,i+(Y.y+Y.h/2)*Gn)},ut=V=>{let Y=X(V);return Y<0?new C:j(Y)};return{grup:s,tuslar:r,tusBas:z,ara:X,nokta:ut,noktaI:j,kesif:[ga(s,"klavye",0,7,12.5),ga(s,"tus-esc",...ut("Esc").toArray()),ga(s,"tus-shift",...ut("Shift").toArray()),ga(s,"tus-ctrl",...ut("Ctrl").toArray()),ga(s,"tus-enter",e+13.9*Gn,6,ut("Enter").z),ga(s,"tus-bosluk",0,6,ut(" ").z)],arka:new C(wi.x-8,3,wi.z-t/2-1.6)}}var b1=ds,M1=2.7,_a=65*Math.PI/180;function S1(){let[n,t]=si(192,96);return t.fillStyle="#17315f",t.fillRect(0,0,192,96),t.fillStyle="#8fb8ff",t.font=`700 38px ${Ks}`,t.textAlign="left",t.textBaseline="middle",t.fillText("Haz\u0131r",18,48),t.fillStyle="#8fb8ff",t.fillRect(142,28,30,40),t.fillStyle="#17315f",t.fillRect(147,33,20,30),t.fillStyle="#8fb8ff",t.fillRect(151,41,12,3),t.fillRect(151,49,12,3),Li(n)}function w1(){let[n,t]=si(512,700);t.fillStyle="#ffffff",t.fillRect(0,0,512,700),t.fillStyle="#7c4dff",t.fillRect(50,56,412,10),t.fillStyle="#20242c",t.font=`700 58px ${Ks}`,t.textAlign="left",t.textBaseline="alphabetic",t.fillText("Merhaba!",50,148),t.fillStyle="#6b7384";for(let e=0;e<6;e++)t.fillRect(50,200+e*38,e===5?220:412,12);return t.fillStyle="#a2c8f3",t.fillRect(50,450,412,190),t.fillStyle="#6ea4e8",t.beginPath(),t.moveTo(50,640),t.lineTo(200,540),t.lineTo(320,600),t.lineTo(400,530),t.lineTo(462,580),t.lineTo(462,640),t.closePath(),t.fill(),Li(n)}function Vp(){Pn();let n=new Re;n.name="yazici",n.position.set(Ai.x,0,Ai.z);let t=.6;for(let[f,g]of[[-14,-10],[14,-10],[-14,10],[14,10]])n.add(new Ct(he(1.2,t+.1,f,(t+.1)/2,g,{seg:12}),ee.plastik));n.add(new Ct(De(36,9,28,1.6,0,t+4.5,0,3),ee.plastikBeyaz)),n.add(new Ct(De(35.4,4.4,27.4,1.4,0,11.6,0,3),ee.plastikBeyaz)),n.add(new Ct(pt(28,1.6,.3,0,3.2,14.02),ee.cip)),n.add(new Ct(De(27,.6,12,.25,0,2.2,19.2,2),ee.plastikBeyaz));for(let f of[-1,1])n.add(new Ct(De(.6,1.2,10.4,.2,f*13.6,2.75,19.8,2),ee.plastikBeyaz));n.add(new Ct(he(.75,22,0,13.55,-13.1,{eksen:"x",seg:12}),ee.plastikBeyaz));let e=13,i=new C(0,Math.sin(_a),-Math.cos(_a)),r=new C(0,13.4,-13).clone().addScaledVector(i,e/2),a=new Ct(De(24,.5,e,.2,0,0,0,2),ee.plastikBeyaz);a.position.copy(r),a.rotation.x=_a,n.add(a);let o=new C(0,Math.cos(_a),Math.sin(_a)),l=new Ct(pt(21,.35,e-1.5),ee.kagit);l.position.copy(r).addScaledVector(o,.45),l.rotation.x=_a,n.add(l),n.add(new Ct(pt(2.6,1.7,.4,-10,4.2,-14.05),ee.cip));let c=new Re;c.position.set(8.5,13.95,8.4),c.rotation.x=-.18,c.add(new Ct(De(13,.6,6.2,.3,0,0,0,2),ee.plastik));let u=new Ct(new gn(6.2,3.1),new mn({map:S1(),toneMapped:!1}));u.rotation.x=-Math.PI/2,u.position.set(-2.4,.34,0),c.add(u);let d=new Ct(pt(.6,.12,.6),ee.ledKapali);d.position.set(4.2,.34,-1.2),d.userData.dinamik=!0,c.add(d);for(let f=0;f<2;f++)c.add(new Ct(he(.6,.14,3.2+f*1.6,.34,1.2,{seg:14}),ee.alumin));n.add(c);let h=new Ct(new gn(25,34.5),new Le({map:w1(),roughness:.9,side:wn}));return h.rotation.x=-Math.PI/2,h.position.set(0,M1,-3.75),h.visible=!1,h.userData.dinamik=!0,n.add(h),n.add(Ke({kesif:"yazici",parca:"yazici"},37,26,45,0,13,3.5)),{grup:n,kagit:h,led:d,kesif:[b1(n,"yazici",0,15.5,2)],ledAyarla:f=>{d.material=f?ee.ledYesil:ee.ledKapali},arka:new C(Ai.x-10,4.2,Ai.z-13)}}var Gp=n=>n&&n.getHex?n.getHex():0;function A1(n){return n.userData&&n.userData.dinamik?"u:"+n.uuid:[n.type,Gp(n.color),n.roughness,n.metalness,Gp(n.emissive),n.emissiveIntensity,n.map?n.map.uuid:"-",n.normalMap?n.normalMap.uuid:"-",n.normalScale?n.normalScale.x+","+n.normalScale.y:"-",n.vertexColors?1:0,n.side,n.transparent?1:0,n.opacity,n.toneMapped?1:0,n.depthWrite?1:0,n.depthTest?1:0,n.blending].join("|")}var E1=["position","normal","uv","color"];function Hp(n){n.updateMatrixWorld(!0);let t=[];n.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||a.userData.dinamik||a.userData.statik===!1||!a.visible||a.children.length)return;let o=a.material;if(!(!o||Array.isArray(o)||o.visible===!1)){for(let l=a.parent;l&&l!==n;l=l.parent)if(l.userData.dinamik||!l.visible)return;t.push(a)}});let e=new Map;for(let a of t){let o=a.geometry,l=E1.filter(u=>o.attributes[u]).join(","),c=[A1(a.material),a.castShadow?1:0,a.receiveShadow?1:0,a.renderOrder,l].join("#");e.has(c)||e.set(c,{liste:[],ad:l}),e.get(c).liste.push(a)}let i=t.length,s=0,r=0;for(let{liste:a,ad:o}of e.values()){if(a.length<2){s++;continue}let l=o.split(","),c=a.map(f=>{let g=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();for(let y of Object.keys(g.attributes))l.includes(y)||g.deleteAttribute(y);return g.applyMatrix4(f.matrixWorld),g}),u=fa(c,!1);for(let f of c)f.dispose();if(!u){s+=a.length,console.error("statik birle\u015Ftirme ba\u015Far\u0131s\u0131z, meshler oldu\u011Fu gibi kald\u0131");continue}let d=a[0],h=new Ct(u,d.material);h.name="birlesik",h.castShadow=d.castShadow,h.receiveShadow=d.receiveShadow,h.renderOrder=d.renderOrder,h.matrixAutoUpdate=!1;for(let f of a)f.parent&&f.parent.remove(f),f.geometry.dispose();n.add(h),s++,r+=a.length}return n.updateMatrixWorld(!0),{once:i,sonra:s,birlesen:r}}var Js=ds,ji=Ne.d/2,T1=-Ne.d/2,ge={hdmi:{x:15.4,y:74.55},usb:[{x:11,y:75.35},{x:11,y:73.75},{x:7.4,y:75.35},{x:7.4,y:73.75},{x:3.8,y:75.35},{x:3.8,y:73.75}],ag:{x:-.7,y:74.55},mavi:{x:-4.8,y:74.55},pembe:{x:-7.6,y:74.55},yesil:{x:-10.4,y:74.55},guc:{x:5.5,y:10.4}},Kn=80.4,un={guc:-12.5,usb1:-5,usb2:-.2,usbc:5,kulaklik:10.2,mikrofon:14};function Wp(n,t,e,i,s,r){let[a,o]=si(n,t);o.fillStyle=s,o.fillRect(0,0,n,t),o.fillStyle=r;for(let l=0;l*e*.866<t+e;l++)for(let c=0;c<n/e+1;c++)o.beginPath(),o.arc((c+(l%2?.5:0))*e,l*e*.866,e*i,0,Math.PI*2),o.fill();return a}function k1(){let[n,t]=si(512,64),e=512/34,i=a=>(a+17)*e;t.strokeStyle="rgba(222,226,234,0.92)",t.fillStyle="rgba(222,226,234,0.92)",t.lineWidth=2.4,t.lineCap="round",t.lineJoin="round";let s=i(un.guc),r=30;t.beginPath(),t.arc(s,r,11,-Math.PI/2+.6,-Math.PI/2-.6+Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(s,r-15),t.lineTo(s,r-2),t.stroke();for(let a of[un.usb1,un.usb2,un.usbc])s=i(a),t.beginPath(),t.moveTo(s-9,30),t.lineTo(s+9,30),t.stroke(),t.beginPath(),t.arc(s-11,30,3.2,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(s+9,30),t.lineTo(s+5,26.5),t.lineTo(s+5,33.5),t.closePath(),t.fill(),t.beginPath(),t.moveTo(s-3,30),t.lineTo(s,23),t.lineTo(s+3,23),t.stroke(),t.fillRect(s+2,20.5,4.4,4.4),t.beginPath(),t.moveTo(s-1,30),t.lineTo(s+2,37),t.lineTo(s+4.5,37),t.stroke(),t.beginPath(),t.arc(s+6.2,37,2.2,0,Math.PI*2),t.fill();return s=i(un.kulaklik),t.beginPath(),t.arc(s,34,10,Math.PI,0),t.stroke(),t.fillRect(s-12.5,33,5,11),t.fillRect(s+7.5,33,5,11),s=i(un.mikrofon),t.beginPath(),t.arc(s,20,4,Math.PI,0),t.arc(s,29,4,0,Math.PI),t.closePath(),t.fill(),t.beginPath(),t.arc(s,32,8,.15,Math.PI-.15),t.stroke(),t.beginPath(),t.moveTo(s,40),t.lineTo(s,47),t.moveTo(s-5,47),t.lineTo(s+5,47),t.stroke(),n}function Xp(){Pn();let n=Ne.w,t=Ne.h,e=Ne.d,i=1.6,s=new Re;s.name="kasa",s.position.set(Ne.x,0,Ne.z);let r=new Le({color:2961463,roughness:.46,metalness:.4}),a=new Ct(De(n,t-i,e,1.1,0,i+(t-i)/2,0,3),r);a.userData.statik=!1,a.name="kasa-govde",s.add(a),s.add(Si([[-15.5,-35.5],[15.5,-35.5],[-15.5,35.5],[15.5,35.5]].map(([b,A])=>he(2.3,i+.2,b,(i+.2)/2,A,{seg:14})),ee.plastik));let o=new Ct(new gn(36.4,62),new Le({map:Li(Wp(512,874,19.7,.3,"#2c2f37","#08090c"),{aniso:!0}),roughness:.55,metalness:.35}));o.position.set(0,38.5,ji+.05),s.add(o),s.add(new Ct(De(34,6.4,1.2,.5,0,Kn,ji+.1,2),ee.plastik));let l=ji+.7,c=[];c.push(qe(he(2.15,.7,un.guc,Kn,l+.35,{eksen:"z",seg:24}),12173e3)),c.push(qe(he(1.6,.9,un.guc,Kn,l+.45,{eksen:"z",seg:24}),15527666));for(let b of[un.usb1,un.usb2])c.push(qe(pt(3.2,1.5,.9,b,Kn,l+.3),1382171)),c.push(qe(pt(2.3,.45,.5,b,Kn-.15,l+.5),3107824));c.push(qe(De(2.3,.95,.9,.35,un.usbc,Kn,l+.3,2),1382171));for(let b of[un.kulaklik,un.mikrofon])c.push(qe(he(1.05,.6,b,Kn,l+.3,{eksen:"z",seg:18}),12173e3)),c.push(qe(he(.55,.7,b,Kn,l+.35,{eksen:"z",seg:14}),723983));s.add(Si(c,ee.renkli));let u=new Ct(new ei(1.85,.11,6,28),ee.ledMavi);u.position.set(un.guc,Kn,l+.8),s.add(u);let d=new Ct(new gn(34,4.25),new mn({map:Li(k1()),transparent:!0,depthWrite:!1}));d.position.set(0,Kn-4.6,ji+.08),s.add(d);let h=T1;s.add(new Ct(De(31,9.3,.9,.25,2.9,74.55,h-.15,2),ee.alumin));let f=[],g=(b,A,x,E,v=1316378,w=null,P=.45)=>{f.push(qe(pt(x,E,.5,b,A,h-.55),v)),w!=null&&f.push(qe(pt(x-.5,P,.4,b,A-E/2+P/2+.12,h-.8),w))};g(ge.hdmi.x,ge.hdmi.y,3,1.05,1053206),ge.usb.forEach((b,A)=>g(b.x,b.y,2.6,1.2,921620,A<2?3107824:10133674)),f.push(qe(pt(3.4,2.9,.6,ge.ag.x,ge.ag.y,h-.6),11449535)),f.push(qe(pt(2.6,1.9,.4,ge.ag.x,ge.ag.y-.1,h-.9),855826));for(let[b,A]of[["mavi",3832032],["pembe",14708890],["yesil",3781991]])f.push(qe(he(1.05,.7,ge[b].x,ge[b].y,h-.8,{eksen:"z",seg:18}),A)),f.push(qe(he(.5,.8,ge[b].x,ge[b].y,h-.85,{eksen:"z",seg:12}),723983));s.add(new Ct(De(30,17.2,.9,.3,-3.5,10.4,h-.15,2),ee.aluminKoyu)),f.push(qe(pt(3.9,2.8,.7,ge.guc.x,ge.guc.y,h-.65),1184535)),f.push(qe(pt(2.5,.9,.5,ge.guc.x,ge.guc.y+.2,h-1),2764083)),f.push(qe(pt(2,3,.7,9.4,14.2,h-.65),1382171)),f.push(qe(pt(1.5,1.4,.5,9.4,14.8,h-1),14278116)),s.add(Si(f,ee.renkli));let y=(()=>{let[b,A]=si(256,305);A.fillStyle="#20232a",A.fillRect(0,0,256,305);for(let x=0;x<7;x++){let E=x*43.57142857142857+3;A.fillStyle="#8f96a2",A.fillRect(4,E,248,305/7-6),A.fillStyle="#2a2d34";for(let v=0;v<17;v++)for(let w=0;w<2;w++)A.beginPath(),A.arc(22+v*13.4,E+12+w*14,3.1,0,Math.PI*2),A.fill();A.fillStyle="#c3c8d1",A.fillRect(4,E,248,2)}return b})(),m=new Ct(new gn(24,28.5),new Le({map:Li(y),roughness:.55,metalness:.5}));m.rotation.y=Math.PI,m.position.set(7,55.65,h-.62),s.add(m);let p=Wp(256,256,11,.3,"#3a3f49","#0a0b0e"),M=new Ct(new gn(19.4,14.2),new Le({map:Li(p),roughness:.6,metalness:.4}));M.rotation.y=Math.PI,M.position.set(-8.6,10.4,h-.62),s.add(M);let T={minAdim:4,minPx:14};return s.add(Ke({kesif:"kasa",parca:"kasa"},n,t,e,0,t/2,0)),s.add(Ke({kesif:"guc-dugmesi",parca:"kasa",...T},5,5,2.4,un.guc,Kn,ji+.9)),s.add(Ke({kesif:"usb-girisi",parca:"kasa",...T},9.2,3.4,2.4,(un.usb1+un.usb2)/2,Kn,ji+.9)),s.add(Ke({kesif:"ses-jaklari",parca:"kasa",...T},8.6,3.2,2.4,(un.kulaklik+un.mikrofon)/2,Kn,ji+.9)),s.add(Ke({kesif:"hdmi-girisi",parca:"kasa",...T},3.6,1.8,2.6,ge.hdmi.x,ge.hdmi.y,h-.9)),s.add(Ke({kesif:"usb-girisi",parca:"kasa",arka:!0,...T},11.2,3.6,2.6,7.4,74.55,h-.9)),s.add(Ke({kesif:"ag-girisi",parca:"kasa",...T},3.8,3.2,2.6,ge.ag.x,ge.ag.y,h-.9)),s.add(Ke({kesif:"ses-jaklari",parca:"kasa",arka:!0,...T},8.8,2.6,2.6,-7.6,74.55,h-.9)),s.add(Ke({kesif:"guc-girisi",parca:"kasa",...T},4.6,3.4,2.6,ge.guc.x,ge.guc.y,h-1)),s.add(Ke({kesif:"guc-kaynagi",parca:"kasa"},30,17.2,2.6,-3.5,10.4,h-.5)),{grup:s,halka:u,govde:a,kesif:[Js(s,"kasa",0,62,ji+1,[0,.2,1]),Js(s,"guc-dugmesi",un.guc,Kn,ji+1,[0,.15,1]),Js(s,"usb-girisi",(un.usb1+un.usb2)/2,Kn,ji+1,[0,.15,1]),Js(s,"ses-jaklari",(un.kulaklik+un.mikrofon)/2,Kn,ji+1,[0,.15,1]),Js(s,"hdmi-girisi",ge.hdmi.x,ge.hdmi.y,h-1,[0,.15,-1]),Js(s,"ag-girisi",ge.ag.x,ge.ag.y,h-1,[0,.15,-1]),Js(s,"guc-girisi",ge.guc.x,ge.guc.y,h-1.1,[0,.15,-1]),Js(s,"guc-kaynagi",-10.5,5,h-1,[0,.15,-1])]}}var qp=Ne.z-Ne.d/2,R1=n=>Ne.x+n,Yp=1776673,C1=8146431,Fh=12896463,Oh=1513500,P1=n=>-70.4-.65*n,ce=(n,t,e)=>new C(n,t,e);function zh(n,t){let e=n.map(r=>r.isVector3?r.clone():new C(...r)),i=new jr,s=e[0];for(let r=1;r<e.length-1;r++){let a=e[r-1],o=e[r],l=e[r+1],c=Math.min(t,a.distanceTo(o)/2,o.distanceTo(l)/2),u=o.clone().addScaledVector(a.clone().sub(o).normalize(),c),d=o.clone().addScaledVector(l.clone().sub(o).normalize(),c);s.distanceTo(u)>1e-4&&i.add(new or(s,u)),i.add(new lr(u,o,d)),s=d}return i.add(new or(s,e[e.length-1])),i}var Ui=qp-1,ks={usb:(n,t)=>({parcalar:[qe(pt(2.4,.95,1.1,n,t,Ui-.55),Fh),qe(pt(2.9,1.45,1.1,n,t,Ui-1.65),Oh)],uc:Ui-2.2}),hdmi:(n,t)=>({parcalar:[qe(pt(2.8,.85,1.2,n,t,Ui-.6),Fh),qe(pt(3.3,1.35,1.4,n,t,Ui-1.9),Oh)],uc:Ui-2.6}),jak:(n,t,e)=>({parcalar:[qe(he(.5,1,n,t,Ui-.5,{eksen:"z",seg:10}),Fh),qe(he(.8,1.5,n,t,Ui-1.75,{eksen:"z",seg:12}),e)],uc:Ui-2.5}),guc:(n,t)=>({parcalar:[qe(pt(3.6,2.5,2.6,n,t,Ui-1.5),Oh),qe(pt(2.2,1.2,.5,n,t,Ui-.3),3816773)],uc:Ui-2.8})};function Zp({klavye:n,fare:t,kamera:e,kulaklik:i,yazici:s,mikrofon:r,hoparlor:a,monitor:o}){Pn();let l=x=>R1(x),c=x=>P1(x),u=[],d=(x,E,v,w,P,N,F,G=.27,L=2.2)=>{let z=[...P,...N,...F,ce(w.x,w.y,w.uc)];u.push({id:x,ad:E,hedef:v,fis:w.parcalar,yol:zh(z,L),r:G})},h=(x,E)=>ce(x,E,qp);{let x=ge.usb[3],E=ks.usb(l(x.x),x.y);d("kulaklik","Kulakl\u0131k kablosu",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[i.ucu.clone(),ce(i.ucu.x+1.8,.35,i.ucu.z+4)],[ce(96,.35,48),ce(-64,.35,48),ce(-64,.35,c(0)),ce(l(x.x),.35,c(0))],[ce(l(x.x),x.y,c(0))],.27)}{let x=ge.pembe,E=ks.jak(l(x.x),x.y,14708890);d("mikrofon","Mikrofon kablosu",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[r.ucu.clone(),ce(r.ucu.x,.35,r.ucu.z-3)],[ce(-58,.35,24),ce(-63.1,.35,24),ce(-63.1,.35,c(1)),ce(l(x.x),.35,c(1))],[ce(l(x.x),x.y,c(1))],.24)}{let x=ge.usb[0],E=ks.usb(l(x.x),x.y);d("klavye","Klavye kablosu",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[n.arka.clone(),ce(n.arka.x-3,.35,n.arka.z-4)],[ce(-30,.35,2),ce(-62.2,.35,2),ce(-62.2,.35,c(2)),ce(l(x.x),.35,c(2))],[ce(l(x.x),x.y,c(2))],.27)}{let x=ge.usb[1],E=ks.usb(l(x.x),x.y);d("fare","Fare kablosu",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[t.arka.clone(),ce(t.arka.x,.35,t.arka.z-3)],[ce(58,.35,-6),ce(-61.3,.35,-6),ce(-61.3,.35,c(3)),ce(l(x.x),.35,c(3))],[ce(l(x.x),x.y,c(3))],.25)}{let x=ge.yesil,E=ks.jak(l(x.x),x.y,3781991);d("hoparlor","Hoparl\xF6r kablosu",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[a.arka[0].clone().add(ce(-2,0,0)),ce(-55,.35,-58.5)],[ce(-55,.35,c(4)),ce(l(x.x),.35,c(4))],[ce(l(x.x),x.y,c(4))],.27)}{let x=ge.hdmi,E=ks.hdmi(l(x.x),x.y);d("monitor","Ekran kablosu (HDMI)",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[o.arka.clone(),ce(o.arka.x,9,cn.z-10),ce(o.arka.x,.35,cn.z-13)],[ce(o.arka.x-1,.35,c(5)),ce(l(x.x),.35,c(5))],[ce(l(x.x),x.y,c(5))],.3)}{let x=ge.usb[2],E=ks.usb(l(x.x),x.y);d("kamera","Kamera kablosu",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[e.ucu.clone(),ce(6.5,66.2,cn.z-6),ce(6.5,30,cn.z-6.3),ce(6.5,2.4,cn.z-6.3),ce(6.5,.35,cn.z-10)],[ce(6.5,.35,c(6)),ce(l(x.x),.35,c(6))],[ce(l(x.x),x.y,c(6))],.22)}{let x=ge.usb[4],E=ks.usb(l(x.x),x.y);d("yazici","Yaz\u0131c\u0131 kablosu",h(l(x.x),x.y),{...E,x:l(x.x),y:x.y},[s.arka.clone(),ce(s.arka.x-1,.35,s.arka.z-3)],[ce(76,.35,c(7)),ce(l(x.x),.35,c(7))],[ce(l(x.x),x.y,c(7))],.27)}{let x=ks.guc(l(ge.guc.x),ge.guc.y);u.push({id:"guc",ad:"G\xFC\xE7 kablosu (prize)",hedef:h(l(ge.guc.x),ge.guc.y),fis:x.parcalar,r:.45,yol:zh([ce(l(ge.guc.x),ge.guc.y,x.uc),ce(l(ge.guc.x),ge.guc.y,-75.2),ce(l(ge.guc.x),ge.guc.y-3,-77.4),ce(l(ge.guc.x),-12,-77.6)],2.6)})}{let x=a.arka[0].clone().add(ce(2.2,0,0)),E=a.arka[1].clone();u.push({id:"hoparlor-arasi",ad:"Hoparl\xF6rler aras\u0131 kablo",hedef:x,fis:[],r:.22,yol:zh([x,ce(x.x,.35,-57.2),ce(0,.35,-57.2),ce(3,1.5,-57.2),ce(10,1.5,-57.2),ce(13,.35,-57.2),ce(E.x,.35,-57.2),E],2.2)})}let f=[],g={},y=0;for(let x of u){let E=Math.max(24,Math.round(x.yol.getLength()*.6)),v=qe(new As(x.yol,E,x.r,6,!1).toNonIndexed(),Yp),w=y;y+=v.attributes.position.count,g[x.id]=[w,y],f.push(v);for(let P of x.fis){let N=P.index?P.toNonIndexed():P;f.push(N),y+=N.attributes.position.count}}let m=new Ct(fa(f,!1),ee.renkli);m.name="kablolar",m.matrixAutoUpdate=!1,m.userData.dinamik=!0;let p=m.geometry.attributes.color,M=new le,T=(x,E)=>{let v=g[x];if(v){M.set(E);for(let w=v[0];w<v[1];w++)p.setXYZ(w,M.r,M.g,M.b);p.needsUpdate=!0}},b=null,A=x=>{b&&T(b,Yp),b=x,x&&T(x,C1)};return{mesh:m,kablolar:u.map(x=>({id:x.id,ad:x.ad,hedef:x.hedef})),izle:A,izlenen:()=>b}}var Tn={x0:18,kalin:.32,z0:-41.5,z1:19.5,y0:30,y1:78.8},Bh=19.6,fe={z:-20.5,y:63.8},Ve={z0:-9.5,adim:1.7,y0:49,y1:75.3,xAlt:16.6,xUst:9,dolu:[1,3]},Fi=n=>67.9-4.064*n,pe={y:Fi(5),x0:-4,x1:16,z0:-41.8,z1:13,alt:Fi(5)-10.8},Un={y:Fi(2),x0:3.2,x1:17,z0:-41,z1:-35.2},rn={x0:-18.5,x1:11.5,y0:1.8,y1:19,z0:-42.2,z1:-13.7},$e={z0:-26.5,z1:-10.5,y0:50,y1:54.4,x:17.4},Be={x0:13.2,x1:18.4,y0:2.6,y1:22.9,z0:7.5,z1:36.9},an={x0:17.1,x1:18.5,y0:26.5,y1:40.5,z0:21,z1:41},$n={z0:11.8,z1:15.4,y:n=>31+n*1.2},pi={z:-2,y:34.6},Jn={z0:17,z1:19.4,y0:52,y1:62.4,x0:14.8},Qi={z0:-30.5,z1:-25.9,y0:76.3,y1:78.7,x0:14.2},En={x0:-8.5,x1:12.4,z0:-26.8,z1:-17.4,y:19,fan:5,fanBoy:18.4,merkezY:fe.y,merkezZ:fe.z,fanZ:-14.9},Ae={pompaR:5,pompaX0:10.4,pompaX1:15.8,radX0:-12,radX1:12,radY0:84.2,radY1:89.6,radZ0:-38,radZ1:10},ms=[17.2,41.6,66],Vh=[{ad:"on-alt",grup:"sabit",m:[0,ms[0],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"on-orta",grup:"sabit",m:[0,ms[1],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"on-ust",grup:"sabit",m:[0,ms[2],39.7],eksen:"z",r:10.6,hiz:9,renk:9080988},{ad:"kule",grup:"hava",m:[(En.x0+En.x1)/2,fe.y,En.fanZ],eksen:"z",r:8.2,hiz:11,renk:7304577},{ad:"egzoz",grup:"egzoz",m:[0,87.1,-24],eksen:"y",r:10.6,hiz:10,renk:9080988},{ad:"rad1",grup:"sivi",m:[0,81.7,-26],eksen:"y",r:10.6,hiz:10,renk:9080988},{ad:"rad2",grup:"sivi",m:[0,81.7,-2],eksen:"y",r:10.6,hiz:10,renk:9080988},{ad:"gpu1",grup:"sabit",m:[6,pe.alt+2.6,-26],eksen:"y",r:8.2,hiz:8,renk:5593958},{ad:"gpu2",grup:"sabit",m:[6,pe.alt+2.6,-5],eksen:"y",r:8.2,hiz:8,renk:5593958},{ad:"psu",grup:"sabit",m:[-3.5,18.5,-28],eksen:"y",r:9.4,hiz:7,renk:5593958}],Kp={hava:[[[-11,66,52],[-11,66,34],[-11,66,8],[-11,66,-14],[-11,72,-30],[-11,94,-26]],[[-11,41.6,52],[-11,41.6,34],[-11,41.6,10],[-11,50,-12],[-11,66,-32],[-11,94,-26]],[[-11,17.2,52],[-11,17.2,34],[-11,24,8],[-11,36,-14],[-11,58,-34],[-11,94,-26]]],sivi:[[[-11,66,52],[-11,66,34],[-11,68,10],[-8,76,-2],[-7,86,-2],[-7,98,-2]],[[-11,41.6,52],[-11,41.6,34],[-11,41.6,10],[-10,56,-8],[-8,76,-22],[-7,86,-26],[-7,98,-26]],[[-11,17.2,52],[-11,17.2,34],[-11,24,8],[-11,36,-14],[-10,60,-32],[-9,80,-34],[-9,96,-30]]]};var I1='"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif',va={},Xc=2048,Yc=1024,L1={ram:[128,448],gpuArka:[144,352],pin24:[80,352],cpu:[224,272],hdd:[352,248],psu:[384,232],sata:[288,200],genel:[192,192],m2:[448,128],pil:[112,112],wifi:[192,80],radFin:[640,64],beyaz:[64,64]},D1=[["ram","gpuArka","pin24","cpu","hdd"],["psu","sata","genel"],["m2","pil","wifi"],["radFin","beyaz"]],Gh={pcb:[0,0,1024,832],gpuYan:[0,842,864,170]};(()=>{let n=0;for(let t of D1){let e=1032,i=0;for(let s of t){let[r,a]=L1[s];Gh[s]=[e,n,r,a],e+=r+8,i=Math.max(i,a)}n+=i+8}})();function $p(n,t){let e=Gh[t];if(!e)throw new Error("atlas yok: "+t);let i=(e[0]+.6)/Xc,s=(e[2]-1.2)/Xc,r=1-(e[1]+.6)/Yc,a=(e[3]-1.2)/Yc,o=n.attributes.uv;for(let l=0;l<o.count;l++)o.setXY(l,i+o.getX(l)*s,r-(1-o.getY(l))*a);return o.needsUpdate=!0,n}var Hh=(n,t)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]};function Fe(n,t,e,i,s,r,a="left",o=700,l=0){n.save(),n.translate(e,i),l&&n.rotate(l),n.font=`${o} ${s}px ${I1}`,n.fillStyle=r,n.textAlign=a,n.textBaseline="middle",n.fillText(t,0,0),n.restore()}var xa=(n,t,e,i,s,r,a=2)=>{n.strokeStyle=r,n.lineWidth=a,n.strokeRect(t,e,i,s)},Ue=n=>(n-Tn.z0)/(Tn.z1-Tn.z0)*1024,Ge=n=>(Tn.y1-n)/(Tn.y1-Tn.y0)*832;function N1(n){let t=ko(45182);n.fillStyle="#15181c",n.fillRect(0,0,1024,832),n.lineWidth=1.4;for(let a=0;a<520;a++){let o=t()*1024,l=t()*832,c=20+t()*90,u=t()<.5,d=t();n.strokeStyle=d<.7?"rgba(48,56,66,0.75)":"rgba(86,70,36,0.55)",n.beginPath(),n.moveTo(o,l),u?(n.lineTo(o+c,l),n.lineTo(o+c+c*.4,l+c*.4)):(n.lineTo(o,l+c),n.lineTo(o+c*.4,l+c+c*.4)),n.stroke()}let e=[[-40.2,31.4],[-40.2,66],[-40.2,77.6],[-3,31.4],[-3,53],[-3,77.6],[18.4,31.4],[18.4,54],[18.4,77.6]];for(let[a,o]of e)n.fillStyle="#b8944a",n.beginPath(),n.arc(Ue(a),Ge(o),15,0,7),n.fill(),n.fillStyle="#15181c",n.beginPath(),n.arc(Ue(a),Ge(o),8,0,7),n.fill();for(let a=0;a<26;a++){let o=-36+a%13*1.25,l=58+Math.floor(a/13)*14+a%5*.2;n.fillStyle=a%3?"#8d939e":"#2e3239",n.beginPath(),n.arc(Ue(o),Ge(l),9,0,7),n.fill()}for(let a=0;a<16;a++)n.fillStyle="#23262c",n.fillRect(Ue(-30+a*1.1),Ge(72.2),14,14),n.fillStyle="#3d424b",n.fillRect(Ue(-30+a*1.1)+2,Ge(72.2)+2,10,10);let i="rgba(224,229,238,0.88)",s="rgba(224,229,238,0.55)",r=(a,o,l,c,u)=>{xa(n,Ue(a),Ge(l+c/2),Ue(o)-Ue(a),c/(Tn.y1-Tn.y0)*832,i,2),Fe(n,u,Ue(a)+8,Ge(l+c/2)-12,14,i)};r(-40.6,-22.8,51.6,1,"PCIe x16"),r(-40.6,-35.6,59.8,1,"PCIe x1");for(let a=0;a<4;a++){let o=-9.5+1.7*a;n.strokeStyle=i,n.lineWidth=2,n.strokeRect(Ue(o-.5),Ge(74.8),.9/61*1024,(74.8-47.9)/48.8*832)}Fe(n,"DDR5  A1  A2  B1  B2",Ue(-9.5),Ge(46.8),13,s),xa(n,Ue(-25.3),Ge(68.2),Ue(-15.7)-Ue(-25.3),Ge(59.4)-Ge(68.2),i,2),Fe(n,"CPU",Ue(-20.5),Ge(63.8),20,s,"center"),xa(n,Ue(-26.8),Ge(38.4),Ue(-10.2)-Ue(-26.8),Ge(33.6)-Ge(38.4),i,2),Fe(n,"M.2",Ue(-26.4),Ge(39.6),13,i),xa(n,Ue(.6),Ge(41.2),Ue(8.4)-Ue(.6),Ge(32.8)-Ge(41.2),s,2),Fe(n,"\xC7\u0130P K\xDCMES\u0130",Ue(4.5),Ge(37),12,s,"center"),xa(n,Ue(16.8),Ge(62.6),Ue(19.2)-Ue(16.8),Ge(51.8)-Ge(62.6),i,2),Fe(n,"ATX",Ue(15.6),Ge(57.2),13,i,"center",700,-Math.PI/2);for(let a=0;a<4;a++)xa(n,Ue(11.8),Ge(31+a*1.2+1),Ue(15.5)-Ue(11.8),1/48.8*832,s,1.4);return Fe(n,"SATA",Ue(11.6),Ge(36.7),12,s),Fe(n,"CPU_FAN",Ue(-29.6),Ge(79-.8),12,s),Fe(n,"EATX12V",Ue(-30.5),Ge(75.6),11,s),Fe(n,"BAT",Ue(-2),Ge(37.4),11,s,"center"),Fe(n,"ANAKART  ATX",Ue(-14),Ge(44.6),26,"rgba(224,229,238,0.35)"),Fe(n,"G/\xC7",Ue(-38.5),Ge(65.5),17,s,"center",700,-Math.PI/2),n}function U1(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#dfe3e9"),i.addColorStop(.5,"#c4c9d1"),i.addColorStop(1,"#d9dde3"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(40,44,52,0.85)",Fe(n,"\u0130\u015ELEMC\u0130",t/2,e*.34,28,"rgba(46,50,58,0.9)","center",800),Fe(n,"\xC7EK\u0130RDEK 8",t/2,e*.5,17,"rgba(46,50,58,0.8)","center"),Fe(n,"4,2 GHz",t/2,e*.62,17,"rgba(46,50,58,0.8)","center");for(let s=0;s<10;s++)n.fillRect(16+s*8,e*.78,4,12+s%3*3);n.fillStyle="rgba(46,50,58,0.9)",n.beginPath(),n.moveTo(8,e-8),n.lineTo(28,e-8),n.lineTo(8,e-28),n.fill()}function F1(n,t,e){n.fillStyle="#3a3e46",n.fillRect(0,0,t,e);for(let i=0;i<28;i++)n.fillStyle=i%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.10)",n.fillRect(0,i*16,t,8);n.fillStyle="#2b2e35",n.fillRect(0,e*.18,t,e*.64),n.fillStyle="#7c4dff",n.fillRect(0,e*.18,t,6),n.fillRect(0,e*.82-6,t,6),Fe(n,"RAM  16 GB",t/2,e*.5-70,24,"#eef0f4","center",800,-Math.PI/2),Fe(n,"DDR5-5600",t/2+28,e*.5+30,17,"#c9ced8","center",700,-Math.PI/2)}function O1(n,t,e){n.fillStyle="#15171b",n.fillRect(0,0,t,e),n.fillStyle="#1c4a37",n.fillRect(4,4,t-8,e-8);let i=(s,r,a,o,l)=>{n.fillStyle="#0c0d10",n.fillRect(s,r,a,o),n.strokeStyle="#444a54",n.lineWidth=1.2,n.strokeRect(s+2,r+2,a-4,o-4),l&&Fe(n,l,s+a/2,r+o/2,11,"#8a909b","center")};i(60,20,120,88,"BELLEK"),i(200,20,120,88,"BELLEK"),i(340,36,70,56,"DENETLEY\u0130C\u0130"),n.fillStyle="#d8dce2",n.fillRect(12,8,38,112),Fe(n,"NVMe  1 TB",31,64,13,"#2a2d33","center",800,-Math.PI/2),n.fillStyle="#c9a24a";for(let s=0;s<20;s++)n.fillRect(t-10-s*2,e-9,1,6)}function z1(n,t,e){let i=n.createLinearGradient(0,0,t,e);i.addColorStop(0,"#a5abb5"),i.addColorStop(1,"#c4c9d1"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#20232a",n.fillRect(14,14,t-28,60),Fe(n,"SATA SSD",28,36,27,"#eef0f4","left",800),Fe(n,"500 GB  \xB7  2,5 in\xE7",28,60,14,"#b5bbc6"),Fe(n,"Kat\u0131 hal s\xFCr\xFCc\xFCs\xFC",22,e-28,14,"rgba(32,35,42,0.75)")}function B1(n,t,e){n.fillStyle="#aab0ba",n.fillRect(0,0,t,e),n.fillStyle="#d9dde3",n.fillRect(10,10,t-20,e-20),Fe(n,"HDD  1 TB",24,42,30,"#22252b","left",800),Fe(n,"7200 dev/dk  \xB7  3,5 in\xE7",24,74,15,"#3c4049"),Fe(n,"SATA 6 Gb/s",24,98,15,"#3c4049"),n.fillStyle="#22252b";for(let i=0;i<38;i++)n.fillRect(24+i*6.5,e-62,2+i%3,34);n.strokeStyle="#8f95a0",n.lineWidth=2,n.beginPath(),n.arc(t-74,e-70,40,0,7),n.stroke(),n.beginPath(),n.arc(t-74,e-70,8,0,7),n.stroke()}function V1(n,t,e){n.fillStyle="#16181c",n.fillRect(0,0,t,e),n.fillStyle="#e7eaee",n.fillRect(20,20,t-40,e-40),Fe(n,"G\xDC\xC7 KAYNA\u011EI",36,52,26,"#1a1c20","left",800),Fe(n,"650 W",t-40,54,34,"#1a1c20","right",800),Fe(n,"Giri\u015F 220-240 V  ~  50 Hz",36,92,14,"#3c4049"),[["+3,3 V","24 A"],["+5 V","20 A"],["+12 V","54 A"],["-12 V","0,3 A"]].forEach(([s,r],a)=>{let o=128+a*20;n.fillStyle=a%2?"#d5d9df":"#eceff3",n.fillRect(36,o-10,t-72,20),Fe(n,s,46,o,13,"#22252b"),Fe(n,r,t-46,o,13,"#22252b","right")}),n.fillStyle="#22252b";for(let s=0;s<30;s++)n.fillRect(36+s*4.4,e-38,2+s%2,18)}function G1(n,t,e){n.fillStyle="#ece7d9",n.fillRect(0,0,t,e);let i=12,s=e/i;for(let r=0;r<i;r++)for(let a=0;a<2;a++)n.fillStyle="#4a4b4f",n.fillRect(8+a*36,r*s+5,28,s-10),n.fillStyle="#16171a",n.fillRect(14+a*36,r*s+10,16,s-20)}function H1(n,t){let e=n.createRadialGradient(t*.4,t*.4,4,t/2,t/2,t/2);e.addColorStop(0,"#f2f4f7"),e.addColorStop(1,"#a9afb9"),n.fillStyle=e,n.fillRect(0,0,t,t),n.strokeStyle="#7c828d",n.lineWidth=2,n.beginPath(),n.arc(t/2,t/2,t*.38,0,7),n.stroke(),Fe(n,"CR2032",t/2,t/2-8,20,"#383c45","center",800),Fe(n,"3 V +",t/2,t/2+14,16,"#383c45","center")}function W1(n,t,e){n.fillStyle="#10242b",n.fillRect(0,0,t,e),n.fillStyle="#1c3b46",n.fillRect(4,4,t-8,e-8),n.fillStyle="#b9bfc9",n.fillRect(16,12,70,56),n.fillStyle="#8b919c",n.fillRect(22,18,58,44),Fe(n,"Wi-Fi",51,40,16,"#2a2d33","center",800),n.fillStyle="#0c0d10",n.fillRect(100,18,28,20),n.fillRect(136,18,28,20),n.fillStyle="#c9a24a";for(let i=0;i<16;i++)n.fillRect(100+i*4,e-12,2,8)}function X1(n,t,e){let i=ko(51966);n.fillStyle="#18201e",n.fillRect(0,0,t,e),n.lineWidth=1.5;for(let s=0;s<70;s++){let r=i()*t,a=i()*e,o=15+i()*50;n.strokeStyle=i()<.7?"rgba(60,76,72,0.8)":"rgba(120,98,50,0.55)",n.beginPath(),n.moveTo(r,a),n.lineTo(r+o,a),n.lineTo(r+o+10,a+10),n.stroke()}for(let s=0;s<40;s++)n.fillStyle=i()<.5?"#23282c":"#8d939e",n.fillRect(i()*t,i()*e,6+i()*8,4+i()*6)}function Y1(n,t,e){n.fillStyle="#16181c",n.fillRect(0,0,t,e);for(let i=0;i<t;i+=4)n.fillStyle=i%8?"#5d6470":"#2b2f36",n.fillRect(i,3,2,e-6);n.fillStyle="#7a8190",n.fillRect(0,0,t,2),n.fillRect(0,e-2,t,2)}function q1(n,t,e){n.fillStyle="#1b1e23",n.fillRect(0,0,t,e),n.fillStyle="#22262d",n.fillRect(0,8,t,e-16);for(let i=0;i<46;i++)n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(110+i*12,36,5,e-72);n.fillStyle="#7c4dff",n.fillRect(0,0,t,6),n.fillRect(0,e-6,t,6),Fe(n,"EKRAN KARTI",34,e/2,40,"#eef0f4","left",800)}function Z1(n,t,e){n.fillStyle="#2a2e35",n.fillRect(0,0,t,e);for(let i=0;i<44;i++)n.fillStyle=i%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.12)",n.fillRect(0,i*8,t,4);n.fillStyle="#7c4dff",n.fillRect(0,0,6,e),Fe(n,"ARKA PLAKA",t/2,e/2,22,"#cfd4de","center",800,-Math.PI/2)}function K1(n,t,e){n.fillStyle="#fff",n.fillRect(0,0,t,e)}var $1={pcb:n=>N1(n),gpuYan:q1,ram:F1,cpu:U1,m2:O1,sata:z1,hdd:B1,psu:V1,pin24:G1,pil:(n,t)=>H1(n,t),wifi:W1,genel:X1,radFin:Y1,gpuArka:Z1,beyaz:K1};function Jp(n=4){let t=performance.now(),[e,i]=Hh(Xc,Yc);i.fillStyle="#ffffff",i.fillRect(0,0,Xc,Yc);for(let[r,a]of Object.entries($1)){let[o,l,c,u]=Gh[r];i.save(),i.beginPath(),i.rect(o,l,c,u),i.clip(),i.translate(o,l),a(i,c,u),i.restore()}let s=new Wi(e);return s.colorSpace=dn,s.minFilter=Ri,s.magFilter=Sn,s.anisotropy=n,va.atlas=Math.round((performance.now()-t)*10)/10,s}function jp(n=4){let t=performance.now(),[e,i]=Hh(128,128);i.clearRect(0,0,128,128),i.fillStyle="#9ea4b0",i.fillRect(0,0,128,128),i.globalCompositeOperation="destination-out";let s=16,r=s*.866;for(let o=0;o<128/r+1;o++)for(let l=0;l<128/s+1;l++){i.beginPath();let c=(l+(o%2?.5:0))*s,u=o*r;for(let d=0;d<6;d++){let h=Math.PI/3*d+Math.PI/6;i.lineTo(c+Math.cos(h)*6.2,u+Math.sin(h)*6.2)}i.closePath(),i.fill()}let a=new Wi(e);return a.colorSpace=dn,a.wrapS=a.wrapT=xi,a.anisotropy=n,va.filtre=Math.round((performance.now()-t)*10)/10,a}function Qp(n,t=4){let[e,i]=Hh(128,64);i.fillStyle="#000",i.fillRect(0,0,128,64),i.strokeStyle=n,i.lineWidth=7,i.lineJoin="miter",i.lineCap="butt";for(let r=0;r<2;r++){let a=r*64;i.beginPath(),i.moveTo(a+14,8),i.lineTo(a+40,32),i.lineTo(a+14,56),i.stroke()}let s=new Wi(e);return s.colorSpace=dn,s.wrapS=s.wrapT=xi,s.anisotropy=t,s}var J1=(n,t,e)=>new C(n,t,e);function _r(n=[0,0,0]){let[t,e,i]=n,s={p:[],m:[],b:[]},r=(a,o,l,c)=>((t||e||i)&&o.translate(-t,-e,-i),$p(o,c||"beyaz"),qe(o,l),s[a].push(o),o);return{orijin:n,liste:s,p:(a,o=2237739,l)=>r("p",a,o,l),m:(a,o=11975878,l)=>r("m",a,o,l),b:(a,o=2369325,l)=>r("b",a,o,l)}}function xr(n,t,e){let i={};for(let s of["p","m","b"]){if(!n.liste[s].length)continue;let r=Si(n.liste[s],t[s]);r.name="ic-"+s,e.add(r),i[s]=r}return i}var j1=(n,t)=>(t==="y"?n.rotateX(-Math.PI/2):t==="x"&&n.rotateY(Math.PI/2),n),js=(n,t,e,i,s)=>{let r=new gn(n,t);return r.rotateY(-Math.PI/2),r.translate(e,i,s),r},tm=(n,t,e,i,s,r=!1)=>{let a=new gn(n,t);return r&&a.rotateY(Math.PI),a.translate(e,i,s),a};function Wh(n){let t=n.attributes.uv,e=1e9,i=1e9,s=-1e9,r=-1e9;for(let a=0;a<t.count;a++)e=Math.min(e,t.getX(a)),s=Math.max(s,t.getX(a)),i=Math.min(i,t.getY(a)),r=Math.max(r,t.getY(a));for(let a=0;a<t.count;a++)t.setXY(a,(t.getX(a)-e)/(s-e||1),(t.getY(a)-i)/(r-i||1));return n}function Xh(n,t,e=48,i=8,s=.4){let r=new rs(n.map(a=>a.isVector3?a:J1(...a)),!1,"catmullrom",s);return{geo:new As(r,e,t,i,!1),egri:r}}function Rs(n,t,e,i,{radyal:s=8,parca:r=40,gerginlik:a=.4}={}){let{geo:o,egri:l}=Xh(t,e,r,s,a);return n.p(o,i),l}function yr(n,t,e,i,s=15264494){let r=t.getPointAt(e),a=t.getTangentAt(e),o=new ei(i+.12,.17,5,12);o.lookAt(a),o.translate(r.x,r.y,r.z),n.p(o,s)}function im(n){n.b(pt(.4,88.4,86,19.8,45.8,0),3159100),n.b(pt(39.2,.4,86,0,1.8,0),2237739),n.b(pt(39.2,88.4,.4,0,45.8,42.8),2237739),n.b(pt(39.2,88.4,.4,0,45.8,-42.8),2237739),n.b(pt(2,.4,86,-18.6,89.8,0),2237739),n.b(pt(2,.4,86,18.6,89.8,0),2237739),n.b(pt(39.2,.4,2,0,89.8,41.9),2237739),n.b(pt(39.2,.4,2,0,89.8,-41.9),2237739);let i=3882823;n.b(pt(.9,1.2,86,-19.15,89,0),i),n.b(pt(.9,1.2,86,-19.15,2.6,0),i),n.b(pt(.9,88.4,1.2,-19.15,45.8,42.2),i),n.b(pt(.9,88.4,1.2,-19.15,45.8,-42.2),i);let s=657932,r=(a,o,l,c)=>{n.b(De(.5,c,l,.2,19.4,o,a,2),s),n.b(De(.3,c-1,l-1,.2,19.2,o,a,2),328966)};r(23.5,46.5,4.2,7.4),r(-39,86.5,6,3.2),r(3,13,6,5.4),n.b(pt(.1,14,14,19.5,fe.y,fe.z),1316378)}function sm(n){for(let e of[14,45,76])n.m(he(.55,4.4,-19.75,e,-43,{seg:12}),12173e3);let t=[[-40.2,31.4],[-40.2,66],[-40.2,77.6],[-3,31.4],[-3,53],[-3,77.6],[18.4,31.4],[18.4,54],[18.4,77.6]];for(let[e,i]of t)n.m(he(.5,Bh-18.32,0,0,0,{eksen:"x",seg:6}).translate((Bh+18.32)/2,i,e),13214282),n.m(he(.52,.16,17.92,i,e,{eksen:"x",seg:12}),13620186)}function rm(n){let t=Tn.x0,e=[t+Tn.kalin/2,(Tn.y0+Tn.y1)/2,(Tn.z0+Tn.z1)/2];n.p(pt(Tn.kalin,Tn.y1-Tn.y0,Tn.z1-Tn.z0,...e),16777215,"pcb");let i=fe.z,s=fe.y;n.p(pt(.7,10,9,17.65,s,i),2763825),n.m(pt(.35,.9,9.4,17.1,s+4.9,i),11844034),n.m(pt(.35,.9,9.4,17.1,s-4.9,i),11844034),n.m(pt(.35,10.8,.9,17.1,s,i-4.6),11844034),n.m(pt(.35,10.8,.9,17.1,s,i+4.6),11844034),n.m(he(.22,8.6,16.9,s+5.6,i+5.2,{eksen:"z",seg:8}),13685978),n.p(pt(.38,9,7.5,17,s,i),3103812),n.m(De(.5,7.4,6.2,.18,16.55,s,i,2),16777215),n.p(js(6.2,7.4,16.29,s,i),16777215,"cpu");let r=2895927,a=3817288,o=(d,h,f,g,y,m,p)=>{n.m(pt(y-14.4,g-f,h-d,(y+14.4)/2,(f+g)/2,(d+h)/2),r);for(let M=0;M<m;M++)p==="z"?n.m(pt(.35,g-f-.5,.45,14.3,(f+g)/2,d+(M+.5)*((h-d)/m)),a):n.m(pt(.35,.45,h-d-.5,14.3,f+(M+.5)*((g-f)/m),(d+h)/2),a)};o(-34.5,-28,56.5,71.5,17.9,6,"z"),o(-27,-12,72.5,76,17.9,7,"z"),n.m(pt(1.4,7.6,7.6,17.3,37,4.5),r);for(let d=0;d<5;d++)n.m(pt(.4,7.4,.4,16.5,37,1.7+d*1.5),a);n.p(De(6,9.2,7.6,.4,14.9,73.9,-37.8,2),2040103),n.m(pt(.3,9,7.2,11.8,73.9,-37.8),10133674);for(let d=0;d<4;d++)n.p(pt(1.7,1,$n.z1-$n.z0,17.1,$n.y(d)+.5,($n.z0+$n.z1)/2),1447707),n.p(pt(.1,.5,2.6,16.2,$n.y(d)+.5,$n.z1-1.4),328966);n.p(pt(18-Jn.x0,Jn.y1-Jn.y0,Jn.z1-Jn.z0,(18+Jn.x0)/2,(Jn.y0+Jn.y1)/2,(Jn.z0+Jn.z1)/2),15525849),n.p(js(2.4,10.4,Jn.x0-.02,(Jn.y0+Jn.y1)/2,(Jn.z0+Jn.z1)/2),16777215,"pin24"),n.p(pt(18-Qi.x0,Qi.y1-Qi.y0,Qi.z1-Qi.z0,(18+Qi.x0)/2,(Qi.y0+Qi.y1)/2,(Qi.z0+Qi.z1)/2),2105894),n.p(De(1.6,4.8,4.8,.5,17.2,pi.y,pi.z,2),1118741),n.m(he(2,1,16.4,pi.y,pi.z,{eksen:"x",seg:28}),11449534);{let d=new gn(4,4);d.rotateY(-Math.PI/2),d.translate(15.88,pi.y,pi.z),n.m(d,16777215,"pil")}let l=1710879,c=14726734,u=(d,h,f)=>{n.p(pt(2,1,h-d,17,f,(d+h)/2),l),n.m(pt(.1,.36,h-d-.8,15.98,f,(d+h)/2),c),n.p(pt(.5,.9,.6,16.6,f,h+.4),14672872)};u(-40.6,-22.8,Fi(5)),u(-40.6,-22.8,Fi(3)),u(-40.6,-35.6,Fi(2));for(let d=0;d<4;d++){let h=Ve.z0+Ve.adim*d,f=(Ve.y0+Ve.y1)/2,g=Ve.y1-Ve.y0;n.p(pt(1.6,g,1.4,17.2,f,h),l),n.m(pt(.1,g-1.2,.36,16.35,f,h),c);for(let y of[Ve.y0-.5,Ve.y1+.5])n.p(pt(1.5,1,1.1,17.2,y,h),13619928)}n.p(pt(.9,4.4,1,17.55,($e.y0+$e.y1)/2,$e.z0-.6),1447707),n.m(he(.45,.3,17.2,($e.y0+$e.y1)/2,$e.z1+.7,{eksen:"x",seg:10}),13620186)}function am(n){let t=fe.y,e=fe.z,i=16.2,s=11186878;n.m(he(2.5,.2,i,t,e,{eksen:"x",seg:24}),s),n.m(pt(.2,.5,6,i-.02,t,e),s),n.m(pt(.2,6,.5,i-.02,t,e),s),n.m(he(.9,.24,i-.03,t+1.6,e-1.4,{eksen:"x",seg:14}),s)}function om(n){let t=(Ve.y0+Ve.y1)/2+.4,e=Ve.y1-Ve.y0-.4,i=(Ve.xAlt+Ve.xUst)/2,s=Ve.xAlt-Ve.xUst;for(let r of Ve.dolu){let a=Ve.z0+Ve.adim*r;n.m(pt(s,e,1.5,i,t,a),3817030),n.m(pt(.5,e,1.7,Ve.xUst+.25,t,a),10133674),n.p(tm(s-.6,e-1.2,i,t,a+.77),16777215,"ram"),n.p(tm(s-.6,e-1.2,i,t,a-.77,!0),16777215,"ram"),n.m(pt(.5,e-.6,1,Ve.xAlt+.25,t,a),14726734),n.p(pt(.1,e-.6,1.1,Ve.xAlt-.1,t,a),1920312)}}function lm(n){let t=fe.y,e=fe.z,i=(En.z0+En.z1)/2,s=En.y,r=26;n.m(pt(.85,8.4,7.6,15.675,t,e),13225686),n.m(pt(.5,2.6,14,15,t,e),3027514),n.m(he(.6,.7,14.9,t,e-6.4,{eksen:"x",seg:10}),13620186),n.m(he(.6,.7,14.9,t,e+6.4,{eksen:"x",seg:10}),13620186);for(let l=0;l<r;l++){let c=En.x1-l*(En.x1-En.x0)/(r-1);n.m(pt(.14,s,En.z1-En.z0,c,t,i),l%2?12830928:13817564)}let a=[-3.2,-1.1,1.1,3.2],o=[1.4,-1.4,1.4,-1.4];a.forEach((l,c)=>{n.m(he(.6,25,3.2,t+o[c],i+l,{eksen:"x",seg:12}),13203258),n.m(he(.62,.2,En.x0-.8,t+o[c],i+l,{eksen:"x",seg:12}),14256714)}),n.p(pt(.5,s,En.z1-En.z0,En.x0-.45,t,i),1513500),Ro(n,[(En.x0+En.x1)/2,t,En.fanZ],"z",En.fanBoy,En.fan,8.6,1908773)}function Ro(n,t,e,i,s,r,a=1908773){let o=[xp(i,i,r,s),he(2.6,s*.7,0,0,0,{eksen:"z",seg:18})];for(let l=0;l<3;l++){let c=pt(r-2,.55,s*.35,(r+2)/2,0,0);c.rotateZ(l*2.094+.5),o.push(c)}for(let l of[-1,1])for(let c of[-1,1])o.push(he(.5,s+.12,l*(i/2-1.1),c*(i/2-1.1),0,{eksen:"z",seg:8}));o.forEach((l,c)=>{Wh(l),j1(l,e),l.translate(t[0],t[1],t[2]),n.p(l,c===1?2764083:a)})}function cm(n){let t=fe.y,e=fe.z,i=Ae.pompaR,s=(Ae.pompaX0+Ae.pompaX1)/2;n.p(he(i,Ae.pompaX1-Ae.pompaX0,s,t,e,{eksen:"x",seg:40}),1842723),n.m(he(i+.05,.3,Ae.pompaX0+.15,t,e,{eksen:"x",seg:40}),10133933),n.m(he(3.3,.3,15.95,t,e,{eksen:"x",seg:28}),13203258);for(let r of[-4.4,4.4])for(let a of[-4.4,4.4])n.m(he(.5,.9,15.6,t+r,e+a,{eksen:"x",seg:10}),13620186);for(let r of[-1.7,1.7])n.m(he(1,2.2,s,t+i+.3,e+r,{seg:14}),12962514),n.p(he(1.3,.7,s,t+i+1.1,e+r,{seg:14}),1118741)}var um=()=>he(Ae.pompaR-.55,.12,Ae.pompaX0-.05,fe.y,fe.z,{eksen:"x",seg:36});function hm(n){let t=(Ae.radY0+Ae.radY1)/2,e=(Ae.radX0+Ae.radX1)/2,i=Ae.radY1-Ae.radY0;n.m(pt(Ae.radX1-Ae.radX0,i,48,e,t,-14),16777215),n.p(js(48,i,Ae.radX0-.03,t,-14),16777215,"radFin"),n.m(pt(Ae.radX1-Ae.radX0,i,3.4,e,t,-39.7),2369325),n.m(pt(Ae.radX1-Ae.radX0,i,3.4,e,t,11.7),2369325);for(let s of[8,4])n.m(he(.95,1.8,s,86.9,14.3,{eksen:"z",seg:14}),12962514),n.p(he(1.3,.6,s,86.9,15.4,{eksen:"z",seg:14}),1118741);n.m(pt(.2,i+.1,.4,Ae.radX0-.05,t,-37.2),8028560),Ro(n,[0,81.7,-26],"y",24,5,11.4,1908773),Ro(n,[0,81.7,-2],"y",24,5,11.4,1908773)}var dm=1.05,qc=(Ae.pompaX0+Ae.pompaX1)/2,em=fe.z+1.7,nm=fe.z-1.7,Zc=fe.y+Ae.pompaR+1.8,Yh={A:[[qc,Zc,em],[qc-.1,Zc+3,em],[13,77.9,-17.6],[13,78.4,-9],[13,78.5,4],[13.4,79.6,13],[12,84.8,19.6],[8,87,18.6],[8,86.9,15.6]],B:[[4,86.9,15.6],[4,87,18.6],[10.5,85.6,22.2],[15.3,81.5,16],[15.3,77.6,6],[15.3,77,-6],[13.4,77.6,-13.5],[12.9,76.5,-20.5],[qc-.1,Zc+2.8,nm],[qc,Zc,nm]]};function fm(n){let t=pe.y,e=(pe.x0+pe.x1)/2,i=(pe.z0+pe.z1)/2;n.p(pt(pe.x1-pe.x0,.32,pe.z1-pe.z0,e,t,i),16777215,"genel"),n.m(pt(1,.34,17.8,17.1,t,-31.9),14726734);{let c=new Xi;c.moveTo(pe.x0+.2,-39.5),c.lineTo(pe.x1-.5,-39.5),c.lineTo(pe.x1-.5,12.5),c.lineTo(pe.x0+.2,12.5),c.closePath();let u=new as;u.absarc(e,-5,6.8,0,Math.PI*2,!0),c.holes.push(u);let d=new os(c,{depth:.45,bevelEnabled:!1,curveSegments:24});Wh(d),d.rotateX(Math.PI/2),d.translate(0,t+.2+.45,0),n.m(d,16777215,"gpuArka")}let s=pe.alt,r=t-.16,a=r-s,o=(s+r)/2,l=2040359;n.p(pt(.5,a,52,pe.x0+.25,o,-13.5),l),n.p(pt(.5,a,52,pe.x1-.25,o,-13.5),l),n.p(pt(pe.x1-pe.x0,a,.5,e,o,-39.25),l),n.p(pt(pe.x1-pe.x0,a,.5,e,o,12.25),l);{let c=new Xi;c.moveTo(pe.x0,-39.5),c.lineTo(pe.x1,-39.5),c.lineTo(pe.x1,12.5),c.lineTo(pe.x0,12.5),c.closePath();for(let d of[-26,-5]){let h=new as;h.absarc(e,d,8.6,0,Math.PI*2,!0),c.holes.push(h)}let u=new os(c,{depth:.6,bevelEnabled:!1,curveSegments:28});Wh(u),u.rotateX(Math.PI/2),u.translate(0,s+.6,0),n.p(u,1579550)}n.p(js(52,a-.8,pe.x0-.02,o,-13.5),16777215,"gpuYan");for(let c of[-26,-5]){let u=pe.alt+2.2;n.p(he(2.2,.8,e,u,c,{seg:16}),2764083);for(let d=0;d<3;d++){let h=pt(6.4,.3,.5,e+4.5,u,c);h.translate(-e,0,-c),h.rotateY(d*2.094+.4),h.translate(e,0,c),n.p(h,1579550)}}n.m(pt(pe.x1-pe.x0+.4,12.2,.2,e,t-.1,-42.3),13028307);for(let c of[11,7.4,3.8])n.m(pt(2.4,1,2.6,c,t+.6,-40.9),4869976);n.m(pt(2.8,1.1,2.6,-.4,t+.6,-40.9),4869976),n.p(pt(3.4,2.4,3.6,-2.9,t-1.6,10),1381914)}function pm(n){let t=Un.y,e=(Un.x0+Un.x1)/2,i=(Un.z0+Un.z1)/2;n.p(pt(Un.x1-Un.x0,.3,Un.z1-Un.z0,e,t,i),16777215,"genel"),n.p(pt(5.6,.32,3.8,e-2.2,t+.3,i),16777215,"wifi"),n.m(pt(.9,.2,5,17.1,t,-38.1),14726734),n.m(pt(Un.x1-Un.x0+.4,3.8,.2,e,t-.4,-42.3),13028307);for(let s of[5.2,8.4])n.m(he(.5,1.4,s,t-.4,-41.6,{eksen:"z",seg:10}),14726734);for(let[s,r]of[[5.2,0],[8.4,1]])Rs(n,[[s,t-.4,-41],[s+.6,t+.2,-39.5],[e+(r?.6:-.6),t+.5,-38.6]],.14,1381914,{radyal:5,parca:10})}function mm(n){let t=(rn.x0+rn.x1)/2,e=(rn.y0+rn.y1)/2,i=(rn.z0+rn.z1)/2;n.p(De(rn.x1-rn.x0,rn.y1-rn.y0,rn.z1-rn.z0,.5,t,e,i,2),1711136),n.p(js(rn.z1-rn.z0-1,rn.y1-rn.y0-1,rn.x0-.03,e,i),16777215,"psu");let s=-3.5,r=-28,a=rn.y1+.15;for(let o of[10.4,7.2,4]){let l=new ei(o,.22,5,36);l.rotateX(Math.PI/2),l.translate(s,a,r),n.m(l,3817030)}for(let o=0;o<3;o++){let l=pt(20.8,.3,.45,0,0,0);l.rotateY(o*Math.PI/3),l.translate(s,a,r),n.m(l,3817030)}n.p(pt(22.4,.3,22.4,s,rn.y1+.02,r),921362),n.p(he(2.4,.5,s,rn.y1-.4,r,{seg:16}),2764083);for(let o=0;o<4;o++)for(let l=0;l<2;l++)n.p(pt(4.6,2.6,.5,-13+o*6.2,5.6+l*8.6,rn.z1+.2),921362)}function gm(n){let t=($e.y0+$e.y1)/2,e=($e.z0+$e.z1)/2;n.p(pt(.32,$e.y1-$e.y0,$e.z1-$e.z0,$e.x,t,e),16777215,"genel"),n.p(js($e.z1-$e.z0,$e.y1-$e.y0,$e.x-.17,t,e),16777215,"m2");let i=(an.y0+an.y1)/2,s=(an.z0+an.z1)/2;n.m(De(an.x1-an.x0,an.y1-an.y0,an.z1-an.z0,.3,(an.x0+an.x1)/2,i,s,2),16777215),n.m(js(an.z1-an.z0-.4,an.y1-an.y0-.4,an.x0-.02,i,s),16777215,"sata"),n.b(pt(.4,an.y1-an.y0+2,an.z1-an.z0+1.2,19.1,i,s),1711136);for(let o of[-8.5,8.5])for(let l of[-5.5,5.5])n.m(he(.35,.3,an.x0-.1,i+l,s+o,{eksen:"x",seg:8}),13620186);n.p(pt(1.1,3.6,1.8,17.9,33.2,an.z0-.7),1381914);let r=(Be.y0+Be.y1)/2,a=(Be.z0+Be.z1)/2;n.m(pt(Be.x1-Be.x0,Be.y1-Be.y0,Be.z1-Be.z0,(Be.x0+Be.x1)/2,r,a),11449534),n.m(js(Be.z1-Be.z0-.5,Be.y1-Be.y0-.5,Be.x0-.02,r,a),16777215,"hdd"),n.p(pt(.5,Be.y1-Be.y0-1,1.4,17.8,r,Be.z0-.7),1002036),n.p(pt(2.4,5.4,1.4,16.2,6.8,Be.z0-.7),1184534),n.p(pt(2,3,1.4,16.2,11.8,Be.z0-.7),1184534),n.b(pt(.8,Be.y1-Be.y0+1.5,32,18.8,r,a),1711136),n.b(pt(6.2,.5,32,15.7,Be.y0-.45,a),1711136),n.b(pt(6.2,.5,32,15.7,Be.y1+.45,a),1711136);for(let o of[-12,12])for(let l of[Be.y0+2.5,Be.y1-2.5])n.m(he(.4,.4,Be.x0-.1,l,a+o,{eksen:"x",seg:8}),13620186)}function ym(n,t){n.m(pt(31,9.3,.15,2.9,74.55,-42.45),12173257);let i=(s,r,a,o)=>n.m(pt(a+.5,o+.3,3,s,r,-42.45+1.6),3817288);i(t.hdmi.x,t.hdmi.y,3,1.05),t.usb.forEach(s=>i(s.x,s.y,2.6,1.2)),i(t.ag.x,t.ag.y,3.4,2.9);for(let s of["mavi","pembe","yesil"])n.m(he(1.1,3,t[s].x,t[s].y,-42.45+1.6,{eksen:"z",seg:14}),s==="mavi"?3832032:s==="pembe"?14708890:3781991);for(let s=0;s<7;s++)s===2||s===4||s===5||s===6||(n.m(pt(23.6,3.7,.15,7,Fi(s),-42.45),9410210),n.m(he(.45,.3,-4.2,Fi(s),-42.45+.2,{eksen:"z",seg:10}),13620186))}function _m(n){let i=Rs(n,[[6,14.5,rn.z1+.5],[6,15.2,-9],[9,19,-3],[13,27,6],[14,38,14.2],[13,46,17.6],[13,51.6,18.2]],1.2,1776673,{radyal:10,parca:70});n.p(pt(3.6,10.8,2.6,13-.4,57.2,18.2),1381914),n.p(pt(.9,9,.5,11.3,57.2,18.2),2960947),yr(n,i,.18,1.2),yr(n,i,.36,1.2),yr(n,i,.56,1.2);let s=Rs(n,[[10.6,77.5,-28.2],[6,78.6,-33],[5,80.5,-38.8],[13.8,84,-39.2],[18.2,86.5,-39],[19.45,86.5,-39]],.85,1776673,{radyal:10,parca:40});n.p(pt(3.4,2.4,4.6,12.6,77.5,-28.2),1381914),yr(n,s,.5,.85);let r=Rs(n,[[-7.8,pe.y-1.6,10],[-9,pe.y+1,12.4],[-6,pe.y+5.5,17.5],[2,pe.y+6.5,21.5],[12,pe.y+1.5,23.2],[19.45,46.5,23.5]],.95,1776673,{radyal:10,parca:60});n.p(pt(3.6,2.4,3.8,-6.4,pe.y-1.6,10),1381914),yr(n,r,.55,.95),yr(n,r,.78,.95);let a=Rs(n,[[0,9.5,rn.z1+.5],[1,9.8,-9],[8,11,-2],[14,12.5,1],[19.45,13,3]],1,1776673,{radyal:10,parca:36});yr(n,a,.4,1),Rs(n,[[-8,5.6,rn.z1+.5],[-4,5.2,-7],[4,5.4,0],[11.5,7.2,5.4],[15,7.4,Be.z0-1.2]],.6,2303274,{radyal:6,parca:30}),Rs(n,[[15.8,$n.y(0)+.5,$n.z1+.2],[14.6,29,11.6],[13.4,24.6,7.8],[14.2,18.4,5.4],[15.4,12.2,Be.z0-1.3]],.34,12858667,{radyal:6,parca:40}),n.p(pt(1.7,1.1,1.8,16.9,$n.y(0)+.5,$n.z1+.9),1118741),n.p(pt(1.6,1.8,1,15.9,12.2,Be.z0-1.5),1118741),Rs(n,[[15.8,$n.y(1)+.5,$n.z1+.2],[15.6,33.4,17.4],[16.8,33.6,an.z0-1.4]],.34,12858667,{radyal:6,parca:20}),n.p(pt(1.7,1.1,1.8,16.9,$n.y(1)+.5,$n.z1+.9),1118741),ms.forEach((o,l)=>Rs(n,[[8,o+6,37.5],[11,o+8.5,33],[15.5,31+l*1.4+22,22]],.18,1381914,{radyal:5,parca:14}))}function xm(n){for(let t of ms)Ro(n,[0,t,39.7],"z",24,5,11.4,1908773)}function vm(n){Ro(n,[0,87.1,-24],"y",24,5,11.4,1908773)}var Qs=(n,t,e)=>new C(n,t,e),ba=n=>n*n*(3-2*n),bm={minAdim:4,minPx:14},Q1=1.75;function Mm(n,{aniz:t=4}={}){let e=n.govde,i=new Re;i.name="ic",i.visible=!1,n.grup.add(i);let s=new Re,r=new Re,a=new Re,o=new Re,l=new Re,c=new Re,u=new Re,d=new Re;s.name="ic-sabit",r.name="ic-hava",a.name="ic-egzoz",o.name="ic-sivi",l.name="ic-ram",c.name="ic-macun",u.name="ic-kapak",u.position.set(-19.75,0,-43),c.visible=!1,o.visible=!1,d.visible=!1,i.add(s,r,a,o,l,c,u,d);let h={hazir:!1,acik:!1,tur:"hava",kaldir:0,ram:0,calisiyor:!1,kapak:0,ms:{}},f=e.material,g=new Ct(De(.5,87,85.8,.2,0,45.5,43,2),f);g.castShadow=!1,g.receiveShadow=!0,u.add(g);let y=[],m=[],p=($,ct,vt,wt,mt,I,yt,nt,At={})=>{let Tt=Ke({kesif:ct,parca:"ic",...At},vt,wt,mt,I,yt,nt);return $.add(Tt),m.push(Tt),Tt},M=($,ct,vt,wt,mt)=>{y.push(ds($,ct,vt,wt,mt))};p(u,"yan-kapak",3,87,85.8,0,45.5,43),M(u,"yan-kapak",-1,56,58),p(s,"hava-akisi",38.9,87,84,.4,45.5,0),p(s,"anakart",1.2,48.8,61,17.9,54.4,-11),M(s,"anakart",17.2,70.6,12.5),p(s,"islemci",2.2,10.4,10,16.8,fe.y,fe.z),M(s,"islemci",16,fe.y+7.4,fe.z+5),p(s,"pcie-yuvasi",3,2.4,19,16.9,Fi(3),-31.7),M(s,"pcie-yuvasi",16,Fi(3),-26);let T=(pe.alt+pe.y)/2+.25,b=pe.y-pe.alt+1.3;p(s,"ekran-karti",pe.x1-pe.x0+.8,b,55.6,(pe.x0+pe.x1)/2,T,-14.4),M(s,"ekran-karti",pe.x0-.6,pe.y-1.4,6),p(s,"guc-kablolari",7,39,8.8,14.5,43.5,15.2),M(s,"guc-kablolari",13.2,44,16.5),p(s,"guc-kaynagi",31,17.7,29.5,-3.5,10.65,-27.75),M(s,"guc-kaynagi",-3.5,19.1,-28),p(s,"m2-ssd",2,5.6,17,17.4,($e.y0+$e.y1)/2,-18.5),M(s,"m2-ssd",16.4,($e.y0+$e.y1)/2,-18.5),p(s,"sata-ssd",2.6,15,21,17.9,33.5,31),M(s,"sata-ssd",16.4,36.8,31),p(s,"hdd",6.4,21.5,30.5,16,12.75,22.25),M(s,"hdd",12.6,12.8,22),p(s,"veri-kablosu",3.5,18.5,7.5,14.75,20.75,8.75),M(s,"veri-kablosu",13,20.5,8.5),p(s,"bios-pili",2.5,4.6,4.6,16.75,pi.y,pi.z,bm),M(s,"bios-pili",15.4,pi.y,pi.z),p(s,"arka-panel",31,9.3,1.6,2.9,74.55,-42.3),M(s,"arka-panel",2.9,74.55,-42.3),p(s,"wifi-karti",14.6,2.6,6.6,10.1,Un.y,-38.1),M(s,"wifi-karti",6.6,Un.y+1.4,-38.1),p(s,"toz-filtresi",35.2,1.5,80,0,89.65,0),M(s,"toz-filtresi",-9,90.4,28),ms.forEach($=>p(s,"kasa-fani",24.4,24.4,5.4,0,$,39.7)),M(s,"kasa-fani",-12.5,ms[1],39.7),p(r,"hava-sogutucu",26,19.4,14.4,3.5,fe.y,-19.6),M(r,"hava-sogutucu",-9.6,fe.y+7,-14.9),p(r,"isi-borusu",2.2,8,9,-8.9,fe.y,-22.1),p(r,"isi-borusu",4,8,9,14.1,fe.y,-22.1),M(r,"isi-borusu",-10,fe.y-1.4,-22.4),p(a,"kasa-fani",24.4,5.4,24.4,0,87.1,-24),M(a,"kasa-fani",-12.6,87.1,-24),p(c,"termal-macun",1.4,7,7,16.2,fe.y,fe.z,bm),M(c,"termal-macun",15.5,fe.y-4.2,fe.z-1);let A=(Ve.y0+Ve.y1)/2;p(s,"ram",9.4,27.4,7,13.4,A,-6.9),p(l,"ram",9,27.4,3.2,12.8,A,Ve.z0+Ve.adim*1),p(l,"ram",9,27.4,3.2,12.8,A,Ve.z0+Ve.adim*3),M(l,"ram",8.3,70,-6.1),p(o,"pompa-blogu",Ae.pompaX1-Ae.pompaX0+.4,2*Ae.pompaR+3.6,2*Ae.pompaR+.8,(Ae.pompaX0+Ae.pompaX1)/2,fe.y+1.3,fe.z),M(o,"pompa-blogu",Ae.pompaX0-.15,fe.y-2,fe.z+1.5),p(o,"radyator",25.2,6,55,0,87,-14),M(o,"radyator",-12.6,87,-26),p(o,"sogutma-hortumu",4.6,4.2,31,14.2,77.7,-2),p(o,"sogutma-hortumu",3,9,6,13.1,73.6,-20.5),M(o,"sogutma-hortumu",13,78.5,4),p(o,"sivi-sogutma",25.2,6,5.8,0,87,12.7),M(o,"sivi-sogutma",-12.6,87,12.5),p(o,"kasa-fani",24.4,5.4,24.4,0,81.7,-26),p(o,"kasa-fani",24.4,5.4,24.4,0,81.7,-2);let x=$=>{for(let ct=$;ct;ct=ct.parent)if(!ct.visible)return!1;return!0},E=($,ct,vt,wt)=>()=>x($)?$.localToWorld(Qs(ct,vt,wt)):null,v={"ic-kapak":E(u,-1,56,58),"ic-anakart":E(s,17,70.6,12.5),"ic-islemci":E(s,15.8,fe.y+5.6,fe.z),"ic-macun":E(c,15.5,fe.y-3.8,fe.z-1),"ic-hava":E(r,-9.6,fe.y+7.6,-14.9),"ic-isi-borusu":E(r,-10,fe.y-1.4,-22.4),"ic-ram":E(l,8.3,72,-6.1),"ic-m2":E(s,16.4,$e.y1+1.2,-18.5),"ic-sata-ssd":E(s,16.4,37.6,31),"ic-hdd":E(s,12.6,14.4,22),"ic-gpu":E(s,pe.x0-.6,pe.y-3,4),"ic-psu":E(s,-3.5,19.1,-28),"ic-pompa":E(o,Ae.pompaX0-.15,fe.y-2,fe.z+1.5),"ic-radyator":E(o,-12.6,87,-26),"ic-hortum":E(o,13,78.5,4),"ic-fan-on":E(s,-12.5,ms[1],39.7),"ic-fan-egzoz":E(a,-12.6,87.1,-24),"ic-fan-kule":E(r,-2,fe.y,-12.6),"ic-wifi":E(s,6.6,Un.y+1.4,-38.1),"ic-arka-panel":E(s,2.9,74.55,-42.3),"ic-pil":E(s,15.4,pi.y,pi.z),"ic-kablo24":E(s,13.2,44,16.5),"ic-sata-kablo":E(s,13,20.5,8.5),"ic-akis-giris":E(s,-11,66,46),"ic-akis-cikis":E(s,-11,94,-26),"ic-wifi-arka":E(s,6.8,Un.y,-44.6),"ic-arka-hdmi":E(n.grup,ge.hdmi.x,ge.hdmi.y+1.4,-44.8),"ic-arka-usb":E(n.grup,7.4,76.6,-44.8),"ic-arka-ag":E(n.grup,ge.ag.x,ge.ag.y+1.8,-44.8),"ic-arka-ses":E(n.grup,-7.6,76.3,-44.8),"ic-sivi-sicak":E(o,13,78.5,1),"ic-sivi-soguk":E(o,15.3,77,-5)},w=($,ct,vt,wt,mt,I)=>[Ne.x+($+wt)/2,(ct+mt)/2,Ne.z+(vt+I)/2,wt-$,mt-ct,I-vt],P={"ic-anakart":w(17.3,30,-41.5,18.5,78.8,19.5),"ic-islemci":w(15.6,fe.y-5.2,fe.z-5,18,fe.y+5.2,fe.z+5),"ic-ram":w(8.5,Ve.y0-.5,-10.5,17.5,Ve.y1+.2,-3.5),"ic-m2":w(16.8,$e.y0-.2,-26.8,18,$e.y1+.2,-10.2),"ic-sata-ssd":w(16.6,26,20.5,19,41,41.5),"ic-hdd":w(12.8,2,7,19,23.5,37.5),"ic-gpu":w(pe.x0-.5,pe.alt-.4,-42,pe.x1+.4,pe.y+.9,13.4),"ic-psu":w(-18.6,1.8,-42.3,11.6,19.1,-13.6),"ic-pompa":w(Ae.pompaX0-.2,fe.y-Ae.pompaR-.2,fe.z-Ae.pompaR-.2,Ae.pompaX1+.2,fe.y+Ae.pompaR+1.6,fe.z+Ae.pompaR+.2),"ic-radyator":w(-12.4,84,-41.5,12.4,89.8,13.5),"ic-wifi":w(3,Un.y-1.2,-41.4,17.4,Un.y+1.2,-34.8),"ic-arka-panel":w(-12.6,69.9,-43,18.4,79.2,-42)},N=null,F,G,L,z=null,X=null,j=null,ut=null,V=null,Y=null,K=null,Dt=null,St=[],Gt=Vh.map($=>({...$,aci:.7*($.m[0]+$.m[2]+1)%6.28,gor:!0})),Xt=[],Ut={};function et(){if(h.hazir)return;let $=performance.now();N=Jp(t),F=new Le({map:N,vertexColors:!0,roughness:.55,metalness:.05}),G=new Le({map:N,vertexColors:!0,roughness:.36,metalness:.9}),L=new Le({vertexColors:!0,roughness:.52,metalness:.32});let ct={p:F,m:G,b:L},vt={},wt=(mt,I)=>{let yt=performance.now();I(),vt[mt]=Math.round((performance.now()-yt)*10)/10};wt("sabit",()=>{let mt=_r();im(mt),sm(mt),rm(mt),gm(mt),mm(mt),fm(mt),pm(mt),ym(mt,ge),_m(mt),xm(mt);let I=xr(mt,ct,s);for(let yt of["p","m"])I[yt]&&(I[yt].castShadow=!0,I[yt].receiveShadow=!0);I.b&&(I.b.castShadow=!1,I.b.receiveShadow=!0)}),wt("hava",()=>{let mt=_r();lm(mt);let I=xr(mt,ct,r);for(let At of["p","m"])I[At]&&(I[At].castShadow=!0,I[At].receiveShadow=!0);let yt=_r();vm(yt);let nt=xr(yt,ct,a);nt.p&&(nt.p.castShadow=!0,nt.p.receiveShadow=!0)}),wt("ram",()=>{let mt=_r();om(mt);let I=xr(mt,ct,l);for(let yt of["p","m"])I[yt]&&(I[yt].castShadow=!0,I[yt].receiveShadow=!0)}),wt("macun",()=>{let mt=_r();am(mt),Dt=xr(mt,ct,c).m}),wt("sivi",()=>{let mt=_r();cm(mt),hm(mt);let I=xr(mt,ct,o);for(let yt of["p","m"])I[yt]&&(I[yt].castShadow=!0,I[yt].receiveShadow=!0);K=new Le({color:1184538,roughness:.4,metalness:.2,emissive:10189823,emissiveIntensity:0}),Y=new Ct(um(),K),o.add(Y);for(let[yt,nt,At]of[["A",Yh.A,"#ff8a3d"],["B",Yh.B,"#58b0ff"]]){let{geo:Tt,egri:gt}=Xh(nt,dm,80,10,.4),Yt=Qp(At,t);Yt.repeat.set(Math.max(2,Math.round(gt.getLength()/6)),1);let Ht=new Le({color:2895670,roughness:.55,metalness:.05,emissive:16777215,emissiveMap:Yt,emissiveIntensity:0}),Se=new Ct(Tt,Ht);Se.castShadow=!1,Se.receiveShadow=!0,Se.name="hortum-"+yt,o.add(Se),Xt.push({tex:Yt,mal:Ht,ad:yt})}}),wt("filtre",()=>{let mt=jp(t);mt.repeat.set(35.2/6,80/6);let I=new gn(35.2,80);I.rotateX(-Math.PI/2),j=new Ct(I,new Le({map:mt,alphaTest:.5,side:wn,roughness:.6,metalness:.5,color:13159636})),j.position.set(0,89.95,0),j.name="toz-filtresi",s.add(j)}),wt("rotor",It),wt("ok",Bt),h.hazir=!0,va.hazirla=Math.round((performance.now()-$)*10)/10,Object.assign(va,vt),Object.assign(h.ms,va),B(),_t()}let at=7;function It(){let $=new xn(1,3.2,.18);$.translate(.5,0,0),$.rotateX(.5);let ct=new Le({color:16777215,roughness:.55,metalness:.05,side:wn});z=new ws($,ct,Vh.length*at),z.frustumCulled=!1,z.name="fan-kanatlari",Gt.forEach((vt,wt)=>{for(let mt=0;mt<at;mt++)z.setColorAt(wt*at+mt,new le(vt.renk))}),z.instanceColor.needsUpdate=!0,i.add(z)}let qt=new ln,Pt=new Bn,Rt=new Bn,de=new C,lt=Qs(0,0,1),ft=new Bn().setFromAxisAngle(Qs(1,0,0),-Math.PI/2);function xt($){let ct=Qs($.m[0],$.m[1],$.m[2]);return $.grup==="hava"&&ct.add(r.position),ct}function _t(){z&&(Gt.forEach(($,ct)=>{let vt=xt($);Pt.identity(),$.eksen==="y"&&Pt.copy(ft);for(let wt=0;wt<at;wt++){Rt.setFromAxisAngle(lt,$.aci+wt*Math.PI*2/at),qt.quaternion.copy(Pt).multiply(Rt),de.set(2.4,0,0).applyQuaternion(qt.quaternion),qt.position.copy(vt).add(de);let mt=$.gor?1:0;qt.scale.set(($.r-2.4)*mt||1e-4,mt||1e-4,mt||1e-4),qt.updateMatrix(),z.setMatrixAt(ct*at+wt,qt.matrix)}}),z.instanceMatrix.needsUpdate=!0)}let Et=()=>{for(let $ of Gt)$.gor=$.grup==="sabit"||$.grup==="hava"&&h.tur==="hava"||$.grup==="egzoz"&&h.tur==="hava"||$.grup==="sivi"&&h.tur==="sivi"},Zt=7;function Bt(){for(let vt of["hava","sivi"])Ut[vt]=Kp[vt].map(wt=>new rs(wt.map(mt=>Qs(...mt)),!1,"catmullrom",.3));let $=new Wa(1.15,4.4,10);$.translate(0,2.2,0);let ct=new mn({color:16777215,transparent:!0,opacity:.94,depthWrite:!1});X=new ws($,ct,3*Zt),X.frustumCulled=!1,X.renderOrder=3,X.name="hava-oklari",X.raycast=()=>{};for(let vt=0;vt<3*Zt;vt++)X.setColorAt(vt,new le(5088255));d.add(X)}let Kt=new le(4168703),se=new le(16742959),D=new le,we=Qs(0,1,0),oe=Qs(0,0,0),k=Qs(0,0,0);function _($){if(!X)return;let ct=Ut[h.tur];for(let vt=0;vt<3;vt++)for(let wt=0;wt<Zt;wt++){let mt=(wt/Zt+$*.16+vt*.11)%1;ct[vt].getPointAt(mt,k),ct[vt].getTangentAt(mt,oe),qt.position.copy(k),qt.quaternion.setFromUnitVectors(we,oe);let I=Math.min(1,mt/.08),yt=Math.min(1,(1-mt)/.08),nt=ba(Math.min(I,yt));qt.scale.set(nt,nt,nt),qt.updateMatrix(),X.setMatrixAt(vt*Zt+wt,qt.matrix);let At=Math.min(1,Math.max(0,(mt-.38)/.4));D.copy(Kt).lerp(se,At),X.setColorAt(vt*Zt+wt,D)}X.instanceMatrix.needsUpdate=!0,X.instanceColor.needsUpdate=!0}function B(){r.visible=h.tur==="hava",a.visible=h.tur==="hava",o.visible=h.tur==="sivi",c.visible=h.tur==="hava"&&h.kaldir>.35,d.visible=h.calisiyor,Et()}function q($){h.kapak=$;let ct=$>5e-4;ct!==h.acik&&(h.acik=ct,e.visible=!ct,i.visible=ct,ct&&(et(),B())),u.rotation.y=-ba($)*Q1,u.updateMatrixWorld(!0)}function it($){h.tur=$,$!=="hava"&&(h.kaldir=0),r.position.set(0,0,0),c.visible=!1,h.hazir?(B(),_t()):B()}function Mt($){h.kaldir=$;let ct=Math.min(1,$/.45),vt=ba(Math.max(0,($-.45)/.55));r.position.set(-ba(ct)*13,vt*24,0),r.updateMatrixWorld(!0),c.visible=h.tur==="hava"&&$>.35,h.hazir&&_t()}function Lt($){h.ram=$,l.position.set(-ba($)*17,ba($)*3,0),l.updateMatrixWorld(!0)}function rt($){if(h.calisiyor=$,d.visible=$&&h.hazir,!$){for(let ct of Xt)ct.mal.emissiveIntensity=0;K&&(K.emissiveIntensity=0)}}function ht($,ct){if(!h.hazir||!h.calisiyor)return!1;for(let vt of Gt)vt.gor&&(vt.aci+=vt.hiz*$);if(_t(),_(ct),h.tur==="sivi"){for(let vt of Xt)vt.mal.emissiveIntensity=1.35,vt.tex.offset.x-=$*.55;K&&(K.emissiveIntensity=.75+.35*Math.sin(ct*5))}return!0}function Nt(){if(h.hazir&&(_t(),_(.25),h.tur==="sivi")){for(let $ of Xt)$.mal.emissiveIntensity=1.35;K&&(K.emissiveIntensity=.9)}}function Jt(){h.calisiyor=!1,h.kaldir=0,h.ram=0,r.position.set(0,0,0),l.position.set(0,0,0),c.visible=!1,d.visible=!1;for(let $ of Gt)$.aci=.7*($.m[0]+$.m[2]+1)%6.28;for(let $ of Xt)$.mal.emissiveIntensity=0,$.tex.offset.x=0;K&&(K.emissiveIntensity=0),h.hazir&&_t(),r.updateMatrixWorld(!0),l.updateMatrixWorld(!0)}return{grup:i,kapak:u,durum:h,kesif:y,vekiller:m,parca:v,alanlar:P,hazirla:et,kapakAyarla:q,turAyarla:it,kaldirAyarla:Mt,ramAyarla:Lt,calisiyorAyarla:rt,kare:ht,duragan:Nt,sifirla:Jt,gruplar:{sabit:s,hava:r,egzoz:a,sivi:o,ram:l,macun:c}}}var tb=[{x:Ne.x,z:Ne.z,w:Ne.w+4,d:Ne.d+4,bulanik:18,alfa:.55},{x:cn.x,z:cn.z+3,w:36,d:24,bulanik:10,alfa:.5},...ri.map(n=>({x:n.x,z:n.z,w:15,d:17,bulanik:9,alfa:.5})),{x:wi.x,z:wi.z,w:88,d:27,bulanik:16,alfa:.32},{x:ai.x,z:ai.z,w:12.5,d:21,bulanik:8,alfa:.4},{x:Ai.x,z:Ai.z,w:38,d:29,bulanik:14,alfa:.45},{x:oi.x,z:oi.z,w:10.5,d:10.5,bulanik:6,alfa:.5},{x:Nn.x,z:Nn.z,w:22,d:14,bulanik:8,alfa:.28},{x:$i.x,z:$i.z,w:6,d:15,bulanik:4,alfa:.35}];function Sm(n,{aniz:t=4}={}){kp({aniz:t,izler:tb,masa:Di}),Pn();let e={};e.masa=Rp(),e.kasa=Xp(),e.monitor=Cp(),e.kamera=Pp(),e.klavye=Bp(),e.fare=Ip(),e.hoparlor=Lp(),e.mikrofon=Dp(),e.kulaklik=Np(),e.yazici=Vp(),e.usb=Up(),e.usb.grup.position.set($i.x,.65,$i.z),e.usb.grup.rotation.y=$i.don,e.kablo=Zp({klavye:e.klavye,fare:e.fare,kamera:e.kamera,kulaklik:e.kulaklik,yazici:e.yazici,mikrofon:e.mikrofon,hoparlor:e.hoparlor,monitor:e.monitor});let i=new Re;i.name="donanim",i.add(e.masa,e.kasa.grup,e.monitor.grup,e.kamera.grup,e.klavye.grup,e.fare.grup,e.hoparlor.grup,e.mikrofon.grup,e.kulaklik.grup,e.yazici.grup,e.usb.grup,e.kablo.mesh),vp(i),e.masa.castShadow=!1,e.masa.receiveShadow=!1,e.masa.userData.statik=!1,e.fare.grup.userData.dinamik=!0,n.add(i),i.updateMatrixWorld(!0);let s=Hp(i);return e.ic=Mm(e.kasa,{aniz:t}),i.updateMatrixWorld(!0),{kok:i,p:e,birlesme:s}}var hn=(n,t,e)=>new C(n,t,e),eb={I:"\u0131",\u0130:"i",\u015E:"\u015F",\u011E:"\u011F",\u00DC:"\xFC",\u00D6:"\xF6",\u00C7:"\xE7"},nb=n=>eb[n]||n.toLowerCase(),qh=["M","E","R","H","A","B","A"," ","D","\xDC","N","Y","A"],Zh=[{x:760,y:230},{x:70,y:150},{x:330,y:86},{x:420,y:250},{x:800,y:430},{x:600,y:190}],Kh=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,"."),$h=n=>n*n*(3-2*n),Jh=["klavye","fare","mikrofon","kulaklik","hoparlor","monitor","kamera","yazici","guc"],ib={klavye:["parca:klavye","Klavye: USB giri\u015Fine ba\u011Fl\u0131"],fare:["parca:fare","Fare: USB giri\u015Fine ba\u011Fl\u0131"],mikrofon:["parca:mikrofon","Mikrofon: pembe ses giri\u015Fine ba\u011Fl\u0131"],kulaklik:["parca:kulaklik","Kulakl\u0131k: USB giri\u015Fine ba\u011Fl\u0131"],hoparlor:["parca:hoparlor1","Hoparl\xF6r: ye\u015Fil ses giri\u015Fine ba\u011Fl\u0131"],monitor:["parca:monitor","Monit\xF6r: HDMI giri\u015Fine ba\u011Fl\u0131"],kamera:["parca:kamera","Web kameras\u0131: USB giri\u015Fine ba\u011Fl\u0131"],yazici:["parca:yazici","Yaz\u0131c\u0131: USB giri\u015Fine ba\u011Fl\u0131"],guc:["kesif:guc-girisi","G\xFC\xE7 kablosu: prize gider"]},jh={klavye:"klavye",fare:"fare",mikrofon:"mikrofon",kulaklik:"kulaklik",hoparlor:"hoparlor",monitor:"monitor",kamera:"kamera",yazici:"yazici"};function wm(n,{olay:t=()=>{}}={}){let{kok:e,p:i,birlesme:s}=Sm(n.scene,{aniz:n.renderer.capabilities.getMaxAnisotropy()}),r=i.ic,a=i.monitor.ekran,o=a.durum,l=i.klavye,c=i.fare,u=i.hoparlor,d=i.mikrofon,h=i.kulaklik,f=i.yazici,g=i.kamera,y=i.kablo,m=H=>{try{t("duyur",H)}catch{}};e.traverse(H=>{H.userData&&H.userData.yari&&n.hedefler.push(H)}),n.controls.cursor.set(0,20,-10),n.controls.maxTargetRadius=170;let p=[],M=new Set;for(let H of[i.monitor,i.kamera,i.klavye,i.fare,i.hoparlor,i.mikrofon,i.kulaklik,i.yazici,i.usb,i.kasa,r])for(let ot of H.kesif)M.has(ot.id)||(M.add(ot.id),p.push(ot));let T=new Map(p.map(H=>[H.id,H])),b=Ne.z+Ne.d/2,A=Ne.z-Ne.d/2,x={monitor:[cn.x,34,cn.z-1,97,68,22],ekran:[cn.x,39.4,cn.z+1.7,92,52,1.5],klavye:[wi.x,3,wi.z,89,6.6,28],fare:[ai.x,2.4,ai.z,11.5,5,20.5],hoparlor1:[ri[0].x,13.4,ri[0].z,14,27,16],hoparlor2:[ri[1].x,13.4,ri[1].z,14,27,16],mikrofon:[oi.x,11.5,oi.z,10,23.5,12],kamera:[Ni.x,69.2,Ni.z,9.4,5.6,5],kulaklik:[Nn.x,7.5,Nn.z,22.6,15.2,12],yazici:[Ai.x,12,Ai.z+3.5,37,25,45],"usb-bellek":[$i.x,1.4,$i.z,13,3.2,13],kasa:[Ne.x,Ne.h/2,Ne.z,Ne.w,Ne.h,Ne.d],"kasa-on-seridi":[Ne.x,80.4,b+.6,34,6.6,2],"kasa-arka-paneli":[Ne.x+2.9,74.55,A-.5,31,9.4,2],"guc-kaynagi":[Ne.x-3.5,10.4,A-.5,30,17.2,2]};Object.assign(x,r.alanlar);let E=H=>{let ot=x[H];return ot?new qn(hn(ot[0]-ot[3]/2,ot[1]-ot[4]/2,ot[2]-ot[5]/2),hn(ot[0]+ot[3]/2,ot[1]+ot[4]/2,ot[2]+ot[5]/2)):null},v={monitor:()=>hn(cn.x,68.8,cn.z),ekran:()=>hn(cn.x+20,41,cn.z+1.9),klavye:()=>hn(wi.x,6.6,wi.z+3),fare:()=>hn(c.grup.position.x,5.4,c.grup.position.z),hoparlor1:()=>hn(ri[0].x,27.8,ri[0].z),hoparlor2:()=>hn(ri[1].x,27.8,ri[1].z),mikrofon:()=>hn(oi.x,23,oi.z+1),kamera:()=>hn(Ni.x,72.6,Ni.z),kulaklik:()=>hn(Nn.x,13,Nn.z),yazici:()=>hn(Ai.x,16.2,Ai.z),"usb-bellek":()=>hn($i.x,3.2,$i.z),kasa:()=>hn(Ne.x,91.5,Ne.z+6),"fare-sol":()=>hn(c.grup.position.x-2.6,3.8,c.grup.position.z-4.4),"fare-sag":()=>hn(c.grup.position.x+2.6,3.8,c.grup.position.z-4.4),"fare-tekerlek":()=>hn(c.grup.position.x,5,c.grup.position.z-4.4),"kulaklik-mikrofon":()=>hn(Nn.x-4.7,3.8,Nn.z+8.6),"kulaklik-kup":()=>hn(Nn.x-8.4,8.8,Nn.z)};Object.assign(v,r.parca),Object.assign(v,{"arka-hdmi":r.parca["ic-arka-hdmi"],"arka-usb":r.parca["ic-arka-usb"],"arka-ses":r.parca["ic-arka-ses"],"arka-ag":r.parca["ic-arka-ag"],"arka-guc":()=>w("kesif:guc-girisi")});function w(H){let ot=H.indexOf(":"),ne=H.slice(0,ot),Me=H.slice(ot+1);if(ne==="alan"){let ve=x[Me];return ve?hn(ve[0],ve[1]+ve[4]/2+1.5,ve[2]):null}if(ne==="parca")return v[Me]?v[Me]():null;if(ne==="tus"){let ve=l.ara(Me==="Bosluk"?" ":Me);return ve<0?null:l.noktaI(ve).applyMatrix4(l.grup.matrixWorld)}if(ne==="kesif"){let ve=T.get(Me);return ve?ve.yerel.clone().applyMatrix4(ve.nesne.matrixWorld):null}return null}let P=[],N=hn(0,0,0),F=hn(0,0,0);e.traverse(H=>{H.userData&&H.userData.yon&&P.push(H)}),n.kareGuncelleyici(()=>{let H=n.camera.position;for(let ot of P)ot.userData.yon&&(N.setFromMatrixPosition(ot.matrixWorld),F.copy(H).sub(N).normalize(),ot.visible=F.dot(ot.userData.yon)>.12);return!1});let G=[],L=[],z=()=>n.etiketKoy([...G,...L]),X=H=>{L=H.filter(ot=>ot.nokta),z()},j=new Map,ut=new Set,V=()=>document.documentElement.hasAttribute("data-e-hareketsiz")||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;n.yavasGuncelleyici(()=>{let H=!1;for(let[ot,ne]of j){let Me=!1;try{Me=ne(performance.now())}catch(ve){console.error(ve)}Me?H=!0:j.delete(ot)}return H});let Y=(H,ot)=>{j.set(H,ot),n.iste()};function K(H,ot,ne,Me=null){if(V())return Me==null?(ot(1),ne&&ne()):(ot(Me),Dt(2400,()=>{ne&&ne(),n.iste()})),n.iste(),()=>!1;let ve=null;return vn=>{ve??=vn;let We=Math.min(1,(vn-ve)/H);return ot(We,vn),We>=1?(ne&&ne(),!1):!0}}let Dt=(H,ot)=>{let ne=setTimeout(()=>{ut.delete(ne),ot()},H);ut.add(ne)},St=0,Gt=(H=0,ot=!1)=>{!ot&&H-St<70||(St=H,a.guncelle())},Xt=()=>{a.guncelle(),n.iste()},Ut=new ur(.92,1,48),et=[0,1,2].map(()=>{let H=new Ct(Ut,new mn({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:wn}));return H.visible=!1,H.renderOrder=3,H.raycast=()=>{},H.userData.dinamik=!0,e.add(H),H}),at=()=>{for(let H of et)H.visible=!1};function It(H,ot,ne,Me){et.forEach((ve,vn)=>{let We=(Me+vn/3)%1,kn=9.5-We*6.5;ve.visible=!0,ve.position.set(H,ot,ne+4+(1-We)*15),ve.scale.set(kn,kn,1),ve.material.opacity=Math.sin(Math.PI*We)*.55})}function qt(H){u.halkalar.forEach(ot=>ot.forEach((ne,Me)=>{let ve=(H+Me/3)%1;ne.visible=!0,ne.scale.set(3.2+ve*13,3.2+ve*13,1),ne.material.opacity=Math.pow(1-ve,1.4)*.5}))}let Pt=()=>u.halkalar.forEach(H=>H.forEach(ot=>{ot.visible=!1})),Rt=null;function de(){try{let H=window.AudioContext||window.webkitAudioContext;if(!H)return;Rt=Rt||new H,Rt.state==="suspended"&&Rt.resume();let ot=Rt.currentTime+.03;[[523.25,0],[659.25,.3],[783.99,.6]].forEach(([ne,Me])=>{let ve=Rt.createOscillator(),vn=Rt.createGain();ve.type="sine",ve.frequency.value=ne,vn.gain.setValueAtTime(1e-4,ot+Me),vn.gain.exponentialRampToValueAtTime(.07,ot+Me+.04),vn.gain.exponentialRampToValueAtTime(1e-4,ot+Me+.55),ve.connect(vn),vn.connect(Rt.destination),ve.start(ot+Me),ve.stop(ot+Me+.6)})}catch{}}let lt=null,ft="",xt=!1,_t=0,Et=0,Zt=3,Bt=!1,Kt=-1,se=new Set;function D(){j.clear();for(let H of ut)clearTimeout(H);ut.clear();for(let H of se)l.tusBas(H,!1);se.clear(),y.izle(null),Kt=-1,c.grup.position.set(ai.x,0,ai.z),c.birak(),c.tekerlek.rotation.x=0,d.ledAyarla(!1),g.ledAyarla(!1),f.ledAyarla(!1),i.monitor.ledAyarla(!0),f.kagit.visible=!1,f.kagit.position.z=-3.75,at(),Pt(),h.kupMal.emissiveIntensity=0,h.ucMal.emissiveIntensity=0,ft="",xt=!1,_t=0,Et=0,Zt=3,Bt=!1,Object.assign(o,{mod:"masaustu",yazi:"",imlec:{...Zh[0]},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3})}function we(H){l.tusBas(H,!0),se.add(H),Y("tus"+H,K(170,()=>{},()=>{l.tusBas(H,!1),se.delete(H)}))}function oe(H){let ot=l.tuslar[H];if(!ot||(we(H),lt!=="yaz"))return!1;let ne=!0;if(ot.ad==="Geri")ft=ft.slice(0,-1);else if(ot.ad==="Enter")ft+=`
`;else if(ot.tur==="bosluk")ft+=" ";else{if(ot.ad==="Shift")return xt=!0,X([{nokta:l.noktaI(H).applyMatrix4(l.grup.matrixWorld),metin:"Shift: s\u0131radaki harf b\xFCy\xFCk"}]),m("Shift bas\u0131ld\u0131, s\u0131radaki harf b\xFCy\xFCk yaz\u0131lacak"),!0;ot.tur==="harf"||ot.tur==="rakam"?(ft+=xt?ot.ad:nb(ot.ad),xt=!1):ne=!1}if(ne)if(o.yazi=ft,Xt(),ot.ad==="Enter"||ot.ad==="Geri"||ot.tur==="bosluk"){let Me=ot.ad==="Enter"?"Enter: yeni sat\u0131r":ot.ad==="Geri"?"Geri: son harfi siler":"Bo\u015Fluk";X([{nokta:l.noktaI(H).applyMatrix4(l.grup.matrixWorld),metin:Me}])}else L.length&&X([]);return ne}function k(H){let ot={...o.imlec},ne=c.grup.position.x,Me=c.grup.position.z,ve=ai.x+(H.x-512)/512*1.2,vn=ai.z+(H.y-288)/288*1.2;Y("fare-gez",K(520,We=>{let kn=$h(We);o.imlec.x=ot.x+(H.x-ot.x)*kn,o.imlec.y=ot.y+(H.y-ot.y)*kn,c.grup.position.x=ne+(ve-ne)*kn,c.grup.position.z=Me+(vn-Me)*kn,Gt(performance.now())},()=>{Xt(),n.golgeYenile()}))}let _=()=>{Et=(Et+1)%Zh.length,k(Zh[Et]),m("Fare hareket etti, imle\xE7 ekranda yer de\u011Fi\u015Ftirdi")};function B(H){c.tikla(H),o.menu=H?!1:!o.menu,Y("fare-tik",K(460,ot=>{o.tik=1+ot*2.2,ot>.35&&c.birak(),Gt(performance.now())},()=>{o.tik=0,c.birak(),Xt()})),m(H?"Sol t\u0131k yap\u0131ld\u0131":o.menu?"Sa\u011F t\u0131k men\xFCs\xFC a\xE7\u0131ld\u0131":"Sa\u011F t\u0131k men\xFCs\xFC kapand\u0131")}function q(){let H=c.tekerlek.rotation.x;Y("tekerlek",K(260,ot=>{c.tekerlek.rotation.x=H+$h(ot)*1.4})),X([{nokta:w("parca:fare-tekerlek"),metin:"Tekerlek: sayfay\u0131 kayd\u0131r\u0131r"}])}function it(){d.ledAyarla(!0),o.ses=0,Xt();let H=d.kafa;Y("konus",K(3600,(ot,ne)=>{o.ses=ot*3,It(H.x,H.y,H.z,ot*3.6/1.1%1),Gt(ne)},()=>{d.ledAyarla(!1),o.ses=null,at(),Xt()},.3)),m("Mikrofon sesi al\u0131yor, ekranda ses \xE7ubuklar\u0131 hareket ediyor")}function Mt(){return Bt=!Bt,o.kamera=Bt,g.ledAyarla(Bt),Xt(),m(Bt?"Web kameras\u0131 a\xE7\u0131ld\u0131, g\xF6r\xFCnt\xFC ekranda":"Web kameras\u0131 kapand\u0131"),Bt}function Lt(){Zt=Zt===3?0:Zt+1,o.kademe=Zt,Xt();let[H,ot]=Mp[Zt];X([{nokta:w("parca:ekran"),metin:`${Kh(H)} \xD7 ${Kh(ot)} = ${Kh(H*ot)} piksel`}]),m(`\xC7\xF6z\xFCn\xFCrl\xFCk ${H} \xE7arp\u0131 ${ot}, toplam ${H*ot} piksel`)}function rt(){o.cal=0,Xt(),de(),Y("ses",K(3400,(H,ot)=>{o.cal=H*3,qt(H*3.4/1%1),Gt(ot)},()=>{o.cal=null,Pt(),Xt()},.3)),m("Hoparl\xF6rden ses \xE7\u0131k\u0131yor")}function ht(){let H=f.kagit;H.visible=!0,H.position.z=-3.75,f.ledAyarla(!0),o.yazdir=0,Xt(),Y("yazdir",K(3600,(ot,ne)=>{o.yazdir=ot,H.position.z=-3.75+13.5*$h(Math.min(1,Math.max(0,(ot-.2)/.8))),Gt(ne)},()=>{f.ledAyarla(!1),o.yazdir=1,Xt(),n.golgeYenile(),Dt(1600,()=>{o.yazdir=null,Xt()})})),m("Yaz\u0131c\u0131 k\xE2\u011F\u0131da yazd\u0131r\u0131yor")}function Nt(){Y("kulak",K(2600,H=>{h.kupMal.emissiveIntensity=Math.max(0,Math.sin(H*Math.PI*5))*.85},()=>{h.kupMal.emissiveIntensity=0},.1)),de(),m("Ses kulakl\u0131ktan geliyor")}function Jt(){let H=hn(Nn.x-4.7,3.2,Nn.z+8.6);Y("kulak-konus",K(3e3,ot=>{h.ucMal.emissiveIntensity=Math.max(0,Math.sin(ot*Math.PI*5))*.9,It(H.x,H.y,H.z,ot*3/1.1%1)},()=>{h.ucMal.emissiveIntensity=0,at()},.1)),m("Kulakl\u0131\u011F\u0131n mikrofonu sesi al\u0131yor")}function $(H){if(y.izle(H),n.iste(),!H){X([]);return}let[ot,ne]=ib[H];X([{nokta:w(ot),metin:ne}]),m(ne)}function ct(){Kt=(Kt+1)%Jh.length,$(Jh[Kt])}let vt=null,wt=!1,mt=!1,I=!1,yt=!1,nt=!1,At=[],Tt=T.get("guc-kaynagi")?T.get("guc-kaynagi").nesne:null,gt=Tt?Tt.userData.yon:null,Yt=Tt?Tt.position.clone():null;function Ht(H){Tt&&(H?(Tt.position.set(-3.5,19.1,-28),Tt.userData.yon=null,Tt.visible=!0):(Tt.position.copy(Yt),Tt.userData.yon=gt),Tt.updateMatrixWorld(!0))}let Se=new Set(r.kesif.map(H=>H.id)),Z=p.filter(H=>H.nesne&&!Se.has(H.id)&&!H.nesne.userData.yon).map(H=>H.nesne),bt=H=>{for(let ot of Z)ot.visible=!H};function R(){G=At.map(([H,ot,ne])=>({nokta:w(H),metin:ot,tur:ne})).filter(H=>H.nokta),z()}function O(H){let ot=r.durum.acik;r.kapakAyarla(H),r.durum.acik!==ot&&(Ht(r.durum.acik),bt(r.durum.acik),n.golgeYenile())}function Q(H,ot,ne,Me,ve,vn){Y(H,K(ot,We=>ve(ne+(Me-ne)*We),()=>{ve(Me),n.golgeYenile(),R(),vn&&vn()}))}function dt(){return wt=!wt,wt||Vt(),Q("kapak",1100,r.durum.kapak,wt?1:0,O,()=>{At=At.map(H=>H[0]==="parca:kasa"&&/kasa$/.test(H[1])?[H[0],wt?"A\xE7\u0131k kasa":"Kapal\u0131 kasa",H[2]]:H),R()}),m(wt?"Yan kapak a\xE7\u0131ld\u0131, kasan\u0131n i\xE7i g\xF6r\xFCn\xFCyor":"Yan kapak kapand\u0131"),wt}function st(){return r.durum.tur!=="hava"||!r.durum.acik?!1:(mt=!mt,Vt(),Q("kaldir",1300,r.durum.kaldir,mt?1:0,H=>r.kaldirAyarla(H),()=>X(mt?[{nokta:w("parca:ic-macun"),metin:"Termal macun",tur:"yesil"}]:[])),m(mt?"So\u011Futucu kald\u0131r\u0131ld\u0131, i\u015Flemcinin \xFCst\xFCndeki termal macun g\xF6r\xFCn\xFCyor":"So\u011Futucu i\u015Flemcinin \xFCst\xFCne geri tak\u0131ld\u0131"),mt)}function jt(){return r.durum.acik?(I=!I,Vt(),Q("ram",900,r.durum.ram,I?1:0,H=>r.ramAyarla(H)),m(I?"RAM \xE7ubuklar\u0131 yuvalar\u0131ndan \xE7\u0131kar\u0131ld\u0131":"RAM \xE7ubuklar\u0131 yuvalara geri tak\u0131ld\u0131"),I):!1}function Vt(){yt&&(yt=!1,j.delete("ic-calis"),r.calisiyorAyarla(!1),X([]),n.iste())}function re(){if(!r.durum.acik)return!1;if(yt)return Vt(),m("Bilgisayar durdu, fanlar yava\u015Flad\u0131 ve durdu"),!1;yt=!0,r.calisiyorAyarla(!0),mt&&(mt=!1,r.kaldirAyarla(0)),I&&(I=!1,r.ramAyarla(0));let H=null;V()?(r.duragan(),n.iste()):Y("ic-calis",ne=>{let Me=H==null?0:Math.min(.1,(ne-H)/1e3);return H=ne,r.kare(Me,ne/1e3)});let ot=(ne,Me,ve)=>({nokta:w(ne),metin:Me,tur:ve});return X(r.durum.tur==="sivi"?[ot("parca:ic-pompa","Pompa s\u0131v\u0131y\u0131 d\xF6nd\xFCr\xFCr","yesil"),ot("parca:ic-sivi-sicak","S\u0131cak s\u0131v\u0131 radyat\xF6re gider","arti"),ot("parca:ic-sivi-soguk","So\u011Fuyan s\u0131v\u0131 geri d\xF6ner","eksi"),ot("parca:ic-akis-giris","So\u011Fuk hava girer","eksi"),ot("parca:ic-akis-cikis","S\u0131cak hava \xE7\u0131kar","arti")]:[ot("parca:ic-akis-giris","So\u011Fuk hava girer","eksi"),ot("parca:ic-akis-cikis","S\u0131cak hava \xE7\u0131kar","arti")]),m(r.durum.tur==="sivi"?"Fanlar d\xF6n\xFCyor, pompa s\u0131v\u0131y\u0131 d\xF6nd\xFCr\xFCyor; s\u0131cak s\u0131v\u0131 radyat\xF6re, so\u011Fuyan s\u0131v\u0131 i\u015Flemciye gidiyor":"Fanlar d\xF6n\xFCyor; so\u011Fuk hava \xF6nden girer, s\u0131cak hava yukar\u0131dan \xE7\u0131kar"),n.iste(),!0}function _e(){return r.durum.acik?(nt=!nt,mt=!1,r.kaldirAyarla(0),r.turAyarla(nt?"sivi":"hava"),yt&&(r.calisiyorAyarla(!0),V()&&r.duragan()),n.golgeYenile(),R(),n.iste(),m(nt?"S\u0131v\u0131 so\u011Futmaya ge\xE7ildi: i\u015Flemcinin \xFCst\xFCnde pompa blo\u011Fu, tavanda radyat\xF6r var":"Hava so\u011Futmaya ge\xE7ildi: i\u015Flemcinin \xFCst\xFCnde fanl\u0131 so\u011Futucu var"),nt):!1}function xe(H){vt=H&&H.indexOf("ic")===0?H:null,r.sifirla(),yt=!1,mt=!1,I=!1,nt=vt==="ic-sivi",r.turAyarla(nt?"sivi":"hava"),wt=vt==="ic"||vt==="ic-sivi",O(wt?1:0)}function Pe(H,ot){if(!H)return!1;if(lt==="kablo"&&jh[H.parca])return Kt=Jh.indexOf(jh[H.parca]),$(jh[H.parca]),!0;if(H.parca==="klavye"&&H.tusNo!=null)return oe(H.tusNo);if(lt==="fare"&&H.parca==="fare"){if(H.tekerlek)return q(),!0;let ne=c.grup.worldToLocal(ot?ot.clone():hn(0,0,0));return ot&&ne.z<-1.2?(B(ne.x<0),!0):(_(),!0)}return lt==="ekran"&&H.kesif==="ekran"?(Lt(),!0):!1}function yn(H){switch(H){case"tus-bas":{let ot=qh[_t%qh.length];_t%qh.length===0&&(ft="",o.yazi=""),_t++,oe(l.ara(ot));return}case"fare-oynat":_();return;case"fare-tikla":B(!0);return;case"fare-sag":B(!1);return;case"konus":it();return;case"kamera":return Mt();case"cozunurluk":Lt();return;case"ses":rt();return;case"yazdir":ht();return;case"kulak-dinle":Nt();return;case"kulak-konus":Jt();return;case"kablo-sonraki":ct();return;case"kapak":return dt();case"sogutucu-kaldir":return st();case"ram-cikar":return jt();case"calistir":return re();case"sogutma-turu":return _e();default:}}function je(H,ot={}){D(),lt=ot.mod||null,o.yazi=ot.yazi!=null?ot.yazi:"Merhaba!",xe(lt),At=ot.etiket||[],G=At.map(([ne,Me,ve])=>({nokta:w(ne),metin:Me,tur:ve})).filter(ne=>ne.nokta),L=[],z(),Xt(),n.golgeYenile()}function Hn(){j.clear();for(let H of ut)clearTimeout(H);ut.clear();try{Rt&&Rt.state!=="closed"&&Rt.close()}catch{}Rt=null,yt=!1,r.calisiyorAyarla(!1)}return je("merak",{}),n.golgeYenile(),n.iste(),{kesifNoktalari:p,alanlar:x,noktaBul:w,kutuBul:E,adimUygula:je,eylem:yn,durdur:Hn,dokunuldu:Pe,parcalar:i,durum:o,birlesme:s}}var sb=n=>Rh[zc[n]?.kat]?zc[n].kat:null,Am={id:"donanim",DERSLER:gp,KAMERA:pp,KESIF:zc,KATEGORI:Rh,kategoriBul:sb,GORUNUM:mp,vurguYap:bp,sahneyiKur:wm};var Em=rd();Em.veri&&fp(Am,Em);
