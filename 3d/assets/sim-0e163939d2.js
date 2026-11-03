var ne=document.documentElement,Dt=(i,t=document)=>t.querySelector(i),ke=(i,t=document)=>[...t.querySelectorAll(i)],wn=(i,t)=>{try{localStorage.setItem(i,t)}catch{}},Pn=i=>{try{return localStorage.getItem(i)}catch{return null}},wh=0,Yn=i=>{let t=Dt("#duyuru");if(t){if(clearTimeout(wh),t.textContent!==i){t.textContent=i;return}t.textContent="",wh=setTimeout(()=>{t.textContent=i},100)}};var Ah="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";function Eh(i){if(!i)return;let t=()=>{i.classList.toggle("ayar-acik",!!i.querySelector(".ayarlar:not([hidden])")),i.classList.toggle("erisim-acik",!!i.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(i,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function Th(i){if(!(!i||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;i.classList.toggle("dar-640",e<=640),i.classList.toggle("dar-380",e<=380)}).observe(i)}}function Rh(i,t){if(!i)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){i.hidden=!0;return}i.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}function Ch(){let i=Dt("#ders-veri"),t=i?JSON.parse(i.textContent):null;ne.dataset.js="1";let e={veri:t,S:null,sinifDegisince:null,pencere:null,temaRengi:null},n=["5","6","7","8"];function s(_,m=!0){ne.dataset.sinif=_,ne.dataset.sinifSecili="1",m&&wn("bote-3d-sinif",_);let f=new URL(location.href);f.searchParams.set("sinif",_),history.replaceState(null,"",f);for(let v of ke("[data-sinif-yaz]"))v.textContent=`${_}. s\u0131n\u0131f`;for(let v of ke("a[data-ders-baglanti]")){let S=new URL(v.href,location.href);S.searchParams.set("sinif",_),v.href=S.pathname+S.search}for(let v of ke("[data-sinif-sec]"))v.setAttribute("aria-pressed",String(v.dataset.sinifSec===_));e.sinifDegisince?.()}let r=Dt("#sinif-penceresi"),a=new URLSearchParams(location.search).get("sinif");if(n.includes(a))s(a);else{let _=Pn("bote-3d-sinif");if(n.includes(_)){ne.dataset.sinif=_,ne.dataset.sinifSecili="1";for(let m of ke("[data-sinif-yaz]"))m.textContent=`${_}. s\u0131n\u0131f`;for(let m of ke("[data-sinif-sec]"))m.setAttribute("aria-pressed",String(m.dataset.sinifSec===_))}r&&t&&r.showModal?.()}document.addEventListener("click",_=>{let m=_.target.closest("[data-sinif-sec]");m&&(s(m.dataset.sinifSec),r?.open&&(r.close(),Dt(".adim.etkin h2")?.focus({preventScroll:!0})),t?Yn(`${m.dataset.sinifSec}. s\u0131n\u0131f anlat\u0131m\u0131 se\xE7ildi`):o())});function o(){let _=Dt("#dersler");if(!_)return;let m=_.getBoundingClientRect();(m.top<0||m.top>window.innerHeight*.55)&&_.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),Yn(`${ne.dataset.sinif}. s\u0131n\u0131f se\xE7ildi. \u015Eimdi dersi se\xE7in.`)}Dt("#sinif-dugme")?.addEventListener("click",()=>r?.showModal?.());let l=new URLSearchParams(location.search).get("mod")||Pn("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),c=window.matchMedia(Ah),u=l;function d(_,m){u=_,ne.dataset.mod=_==="tahta"&&c.matches?"normal":_,Dt("#tahta-dugme")?.setAttribute("aria-pressed",String(ne.dataset.mod==="tahta")),m&&(wn("bote-3d-mod",_),e.S?.guvenliYenile())}d(l,!1),c.addEventListener?.("change",()=>{let _=ne.dataset.mod;d(u,!1),ne.dataset.mod!==_&&e.S?.guvenliYenile()}),Dt("#tahta-dugme")?.addEventListener("click",()=>d(ne.dataset.mod==="tahta"?"normal":"tahta",!0));let h=()=>ne.dataset.theme==="dark"?"#17121f":"#e9e5f1";Dt("#tema-dugme")?.addEventListener("click",()=>{let _=ne.dataset.theme!=="dark";_?ne.dataset.theme="dark":delete ne.dataset.theme,wn("bote-theme",_?"dark":"light"),e.S?.arkaPlan(h())}),Rh(Dt("#tam-ekran"),ne);let p=Dt("#ogretmen-dugme");function g(_){ne.dataset.ek=_?"acik":"",p?.setAttribute("aria-expanded",String(_)),_&&Dt("#ogretmen")?.focus()}return p?.addEventListener("click",()=>g(ne.dataset.ek!=="acik")),Dt("#ogretmen-kapat")?.addEventListener("click",()=>{g(!1),p?.focus()}),document.addEventListener("keydown",_=>{_.key==="Escape"&&ne.dataset.ek==="acik"&&!r?.open&&(g(!1),p?.focus())}),document.addEventListener("click",_=>{let m=_.target.closest("[data-secenek]");if(!m)return;let f=m.closest(".soru");if(!f||f.dataset.cevaplandi)return;f.dataset.cevaplandi="1";let v=m.hasAttribute("data-dogru");m.classList.add(v?"dogru":"yanlis"),f.querySelector("[data-dogru]")?.classList.add("dogru");let S=f.querySelector(".aciklama");S&&(S.hidden=!1);let M=f.closest(".sinav"),A=ke(".soru[data-cevaplandi]",M),b=A.filter(y=>y.querySelector(".dogru[data-dogru]")&&!y.querySelector(".yanlis")),E=Dt(".sinav-sonuc",M);E&&A.length===ke(".soru",M).length&&(E.textContent=`${A.length} sorudan ${b.length} do\u011Fru.`),Yn(v?"Do\u011Fru cevap":"Yanl\u0131\u015F cevap; do\u011Fru se\xE7enek i\u015Faretlendi")}),e.pencere=r,e.temaRengi=h,e}var as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pd=0,ou=1,md=2;var Ia=1,dl=2,wr=3,ls=0,dn=1,hi=2,wi=0,Ar=1,Bn=2,lu=3,cu=4,gd=5;var Es=100,_d=101,xd=102,yd=103,vd=104,bd=200,Md=201,Sd=202,wd=203,uu=204,hu=205,Ad=206,Ed=207,Td=208,Rd=209,Cd=210,Id=211,Pd=212,kd=213,Ld=214,Co=0,Io=1,Po=2,rr=3,ko=4,Lo=5,Do=6,No=7,fl=0,Dd=1,Nd=2,di=0,du=1,fu=2,pu=3,mu=4,gu=5,_u=6,Pa=7;var xu=300,cs=301,Ts=302,pl=303,ml=304,ka=306,ar=1e3,vi=1001,Uo=1002,ln=1003,Ud=1004;var La=1005;var tn=1006,gl=1007;var Ai=1008;var Tn=1009,yu=1010,vu=1011,Er=1012,_l=1013,fi=1014,Zn=1015,pi=1016,xl=1017,yl=1018,Tr=1020,bu=35902,Mu=35899,Su=1021,wu=1022,$n=1023,Mi=1026,us=1027,vl=1028,bl=1029,hs=1030,Ml=1031;var Sl=1033,Da=33776,Na=33777,Ua=33778,Fa=33779,wl=35840,Al=35841,El=35842,Tl=35843,Rl=36196,Cl=37492,Il=37496,Pl=37488,kl=37489,Oa=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,zl=37814,Vl=37815,Gl=37816,Hl=37817,Wl=37818,Xl=37819,Yl=37820,ql=37821,Kl=36492,Zl=36494,$l=36495,Jl=36283,jl=36284,Ba=36285,Ql=36286;var $r=2300,Fo=2301,To=2302,Zc=2303,$c=2400,Jc=2401,jc=2402;var Fd=3200;var za=0,Od=1,mi="",Qe="srgb",Jr="srgb-linear",jr="linear",Re="srgb";var Ro=7680;var Bd=519,zd=512,Vd=513,Gd=514,tc=515,Hd=516,Wd=517,ec=518,Xd=519,Au=35044;var Eu="300 es",ri=2e3,or=2001;function Rp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Qr("canvas");return i.style.display="block",i}var Ih={},lr=null;function ta(...i){let t="THREE."+i.shift();lr?lr("log",t,...i):console.log(t,...i)}function qd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=qd(i);let t="THREE."+i.shift();if(lr)lr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=qd(i);let t="THREE."+i.shift();if(lr)lr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bs(...i){let t=i.join(" ");t in Ih||(Ih[t]=!0,ae(...i))}function Kd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zd={[Co]:Io,[Po]:Do,[ko]:No,[rr]:Lo,[Io]:Co,[Do]:Po,[No]:ko,[Lo]:rr},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,ir=Math.PI/180,cr=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function Tu(i,t){return(i%t+t)%t}function Ip(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Pp(i,t,e){return i!==t?(e-i)/(t-i):0}function qr(i,t,e){return(1-e)*i+e*t}function kp(i,t,e,n){return qr(i,t,1-Math.exp(-e*n))}function Lp(i,t=1){return t-Math.abs(Tu(i,t*2)-t)}function Dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Up(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fp(i,t){return i+Math.random()*(t-i)}function Op(i){return i*(.5-Math.random())}function Bp(i){i!==void 0&&(Ph=i);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zp(i){return i*ir}function Vp(i){return i*cr}function Gp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ru={DEG2RAD:ir,RAD2DEG:cr,generateUUID:bi,clamp:pe,euclideanModulo:Tu,mapLinear:Ip,inverseLerp:Pp,lerp:qr,damp:kp,pingpong:Lp,smoothstep:Dp,smootherstep:Np,randInt:Up,randFloat:Fp,randFloatSpread:Op,seededRandom:Bp,degToRad:zp,radToDeg:Vp,isPowerOfTwo:Gp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Wp,setQuaternionFromProperEuler:Xp,normalize:Ce,denormalize:si},Du=class Du{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Du.prototype.isVector2=!0;var lt=Du,An=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);f=Math.sin(f*v)/S,o=Math.sin(o*v)/S,l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+_*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*p-c*h,t[e+1]=l*g+u*h+c*d-o*p,t[e+2]=c*g+u*p+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Nu=class Nu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mc.copy(this).projectOnVector(t),this.sub(Mc)}reflect(t){return this.sub(Mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nu.prototype.isVector3=!0;var C=Nu,Mc=new C,kh=new An,Uu=class Uu{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],v=s[1],S=s[4],M=s[7],A=s[2],b=s[5],E=s[8];return r[0]=a*_+o*v+l*A,r[3]=a*m+o*S+l*b,r[6]=a*f+o*M+l*E,r[1]=c*_+u*v+d*A,r[4]=c*m+u*S+d*b,r[7]=c*f+u*M+d*E,r[2]=h*_+p*v+g*A,r[5]=h*m+p*S+g*b,r[8]=h*f+p*M+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=e*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Uu.prototype.isMatrix3=!0;var fe=Uu,Sc=new fe,Lh=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yp(){let i={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Re&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Re&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jr]:{primaries:t,whitePoint:n,transfer:jr,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Lh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}var ye=Yp();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,Oo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=Qr("canvas")),Bs.width=t.width,Bs.height=t.height;let s=Bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qp=0,ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wc(s[a].image)):r.push(wc(s[a]))}else r=wc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var Kp=0,Ac=new C,Mn=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=tn,a=Ai,o=$n,l=Tn,c=i.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=bi(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=xu;Mn.DEFAULT_ANISOTROPY=1;var Fu=class Fu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,M=(p+1)/2,A=(f+1)/2,b=(u+h)/4,E=(d+_)/4,y=(g+m)/4;return S>M&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=E/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fu.prototype.isVector4=!0;var Be=Fu,Bo=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Mn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ur(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ea=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var hl=class hl{constructor(t,e,n,s,r,a,o,l,c,u,d,h,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),a=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*d,g=c*u,_=c*d;e[0]=h+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*d,g=c*u,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+g,e[10]=h-_*d}else if(t.order==="XZY"){let h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=a*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,$p)}lookAt(t,e,n){let s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Xi.crossVectors(n,kn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Xi.crossVectors(n,kn)),Xi.normalize(),$a.crossVectors(kn,Xi),s[0]=Xi.x,s[4]=$a.x,s[8]=kn.x,s[1]=Xi.y,s[5]=$a.y,s[9]=kn.y,s[2]=Xi.z,s[6]=$a.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],S=n[7],M=n[11],A=n[15],b=s[0],E=s[4],y=s[8],T=s[12],P=s[1],D=s[5],O=s[9],H=s[13],k=s[2],W=s[6],j=s[10],tt=s[14],gt=s[3],et=s[7],ut=s[11],ht=s[15];return r[0]=a*b+o*P+l*k+c*gt,r[4]=a*E+o*D+l*W+c*et,r[8]=a*y+o*O+l*j+c*ut,r[12]=a*T+o*H+l*tt+c*ht,r[1]=u*b+d*P+h*k+p*gt,r[5]=u*E+d*D+h*W+p*et,r[9]=u*y+d*O+h*j+p*ut,r[13]=u*T+d*H+h*tt+p*ht,r[2]=g*b+_*P+m*k+f*gt,r[6]=g*E+_*D+m*W+f*et,r[10]=g*y+_*O+m*j+f*ut,r[14]=g*T+_*H+m*tt+f*ht,r[3]=v*b+S*P+M*k+A*gt,r[7]=v*E+S*D+M*W+A*et,r[11]=v*y+S*O+M*j+A*ut,r[15]=v*T+S*H+M*tt+A*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],v=l*p-c*h,S=o*p-c*d,M=o*h-l*d,A=a*p-c*u,b=a*h-l*u,E=a*d-o*u;return e*(_*v-m*S+f*M)-n*(g*v-m*A+f*b)+s*(g*S-_*A+f*E)-r*(g*M-_*b+m*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=e*o-n*a,S=e*l-s*a,M=e*c-r*a,A=n*l-s*o,b=n*c-r*o,E=s*c-r*l,y=u*_-d*g,T=u*m-h*g,P=u*f-p*g,D=d*m-h*_,O=d*f-p*_,H=h*f-p*m,k=v*H-S*O+M*D+A*P-b*T+E*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/k;return t[0]=(o*H-l*O+c*D)*W,t[1]=(s*O-n*H-r*D)*W,t[2]=(_*E-m*b+f*A)*W,t[3]=(h*b-d*E-p*A)*W,t[4]=(l*P-a*H-c*T)*W,t[5]=(e*H-s*P+r*T)*W,t[6]=(m*M-g*E-f*S)*W,t[7]=(u*E-h*M+p*S)*W,t[8]=(a*O-o*P+c*y)*W,t[9]=(n*P-e*O-r*y)*W,t[10]=(g*b-_*M+f*v)*W,t[11]=(d*M-u*b-p*v)*W,t[12]=(o*T-a*D-l*y)*W,t[13]=(e*D-n*T+s*y)*W,t[14]=(_*S-g*A-m*v)*W,t[15]=(u*A-d*S+h*v)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,g=r*d,_=a*u,m=a*d,f=o*d,v=l*c,S=l*u,M=l*d,A=n.x,b=n.y,E=n.z;return s[0]=(1-(_+f))*A,s[1]=(p+M)*A,s[2]=(g-S)*A,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(h+f))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+S)*E,s[9]=(m-v)*E,s[10]=(1-(h+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ei.copy(this);let c=1/a,u=1/o,d=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,e.setFromRotationMatrix(ei),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ri,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===ri)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===or)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ri,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===ri)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===or)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};hl.prototype.isMatrix4=!0;var ve=hl,zs=new C,ei=new ve,Zp=new C(0,0,0),$p=new C(1,1,1),Xi=new C,$a=new C,kn=new C,Nh=new ve,Uh=new An,oi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jp=0,Fh=new C,Vs=new An,Pi=new ve,Ja=new C,Ur=new C,jp=new C,Qp=new An,Oh=new C(1,0,0),Bh=new C(0,1,0),zh=new C(0,0,1),Vh={type:"added"},tm={type:"removed"},Gs={type:"childadded",child:null},Ec={type:"childremoved",child:null},ze=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new oi,n=new An,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new fe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ja.copy(t):Ja.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ur,Ja,this.up):Pi.lookAt(Ja,Ur,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vh),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tm),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vh),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new C(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},em={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(em)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=Tu(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Tc(a,r,t+1/3),this.g=Tc(a,r,t),this.b=Tc(a,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ye.workingToColorSpace(gn.copy(this),t),Math.round(pe(gn.r*255,0,255))*65536+Math.round(pe(gn.g*255,0,255))*256+Math.round(pe(gn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Qe){ye.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(ja);let n=qr(Yi.h,ja.h,e),s=qr(Yi.s,ja.s,e),r=qr(Yi.l,ja.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Qt;Qt.NAMES=$d;var Ms=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ni=new C,ki=new C,Rc=new C,Li=new C,Hs=new C,Ws=new C,Gh=new C,Cc=new C,Ic=new C,Pc=new C,kc=new Be,Lc=new Be,Dc=new Be,yi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ni.subVectors(t,e),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ni.subVectors(s,e),ki.subVectors(n,e),Rc.subVectors(t,e);let a=ni.dot(ni),o=ni.dot(ki),l=ni.dot(Rc),c=ki.dot(ki),u=ki.dot(Rc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return kc.setScalar(0),Lc.setScalar(0),Dc.setScalar(0),kc.fromBufferAttribute(t,e),Lc.fromBufferAttribute(t,n),Dc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(kc,r.x),a.addScaledVector(Lc,r.y),a.addScaledVector(Dc,r.z),a}static isFrontFacing(t,e,n,s){return ni.subVectors(n,e),ki.subVectors(t,e),ni.cross(ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ni.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),Ws.subVectors(r,n),Cc.subVectors(t,n);let l=Hs.dot(Cc),c=Ws.dot(Cc);if(l<=0&&c<=0)return e.copy(n);Ic.subVectors(t,s);let u=Hs.dot(Ic),d=Ws.dot(Ic);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Hs,a);Pc.subVectors(t,r);let p=Hs.dot(Pc),g=Ws.dot(Pc);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ws,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Gh.subVectors(r,s),o=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(Gh,o);let f=1/(m+_+h);return a=_*f,o=h*f,e.copy(n).addScaledVector(Hs,a).addScaledVector(Ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(t.matrixWorld),this.union(Qa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),to.subVectors(this.max,Fr),Xs.subVectors(t.a,Fr),Ys.subVectors(t.b,Fr),qs.subVectors(t.c,Fr),qi.subVectors(Ys,Xs),Ki.subVectors(qs,Ys),gs.subVectors(Xs,qs);let e=[0,-qi.z,qi.y,0,-Ki.z,Ki.y,0,-gs.z,gs.y,qi.z,0,-qi.x,Ki.z,0,-Ki.x,gs.z,0,-gs.x,-qi.y,qi.x,0,-Ki.y,Ki.x,0,-gs.y,gs.x,0];return!Nc(e,Xs,Ys,qs,to)||(e=[1,0,0,0,1,0,0,0,1],!Nc(e,Xs,Ys,qs,to))?!1:(eo.crossVectors(qi,Ki),e=[eo.x,eo.y,eo.z],Nc(e,Xs,Ys,qs,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new C,new C,new C,new C,new C,new C,new C,new C],ii=new C,Qa=new cn,Xs=new C,Ys=new C,qs=new C,qi=new C,Ki=new C,gs=new C,Fr=new C,to=new C,eo=new C,_s=new C;function Nc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_s.fromArray(i,r);let o=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),u=n.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ze=new C,no=new lt,nm=0,_n=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var na=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ia=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}},im=new cn,Or=new C,Uc=new C,Fi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):im.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(Uc)),this.expandByPoint(Or.copy(t.center).sub(Uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sm=0,qn=new ve,Fc=new ze,Ks=new C,Ln=new cn,Br=new cn,on=new C,Ge=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rp(t)?ia:na)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Fc.lookAt(t),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Ln.min,Br.min),Ln.expandByPoint(on),on.addVectors(Ln.max,Br.max),Ln.expandByPoint(on)):(Ln.expandByPoint(Br.min),Ln.expandByPoint(Br.max))}Ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)on.fromBufferAttribute(o,c),l&&(Ks.fromBufferAttribute(t,c),on.add(Ks)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;let c=new C,u=new C,d=new C,h=new lt,p=new lt,g=new lt,_=new C,m=new C;function f(y,T,P){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,y),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(c),d.sub(c),p.sub(h),g.sub(h);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[y].add(_),o[T].add(_),o[P].add(_),l[y].add(m),l[T].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,T=v.length;y<T;++y){let P=v[y],D=P.start,O=P.count;for(let H=D,k=D+O;H<k;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let S=new C,M=new C,A=new C,b=new C;function E(y){A.fromBufferAttribute(s,y),b.copy(A);let T=o[y];S.copy(T),S.sub(A.multiplyScalar(A.dot(T))).normalize(),M.crossVectors(b,T);let D=M.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,T=v.length;y<T;++y){let P=v[y],D=P.start,O=P.count;for(let H=D,k=D+O;H<k;H+=3)E(t.getX(H+0)),E(t.getX(H+1)),E(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new _n(h,u,d)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},sa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new C,fr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Oc=new C,rm=new C,am=new fe,Dn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Oc.subVectors(n,e).cross(rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||am.getNormalMatrix(t),s=this.coplanarPoint(Oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},om=0,Kn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Ar,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uu,this.blendDst=hu,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ss=class extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,zr=new C,$s=new C,Js=new C,js=new lt,Vr=new lt,Jd=new ve,io=new C,Gr=new C,so=new C,Hh=new lt,Bc=new lt,Wh=new lt,pr=class extends ze{constructor(t=new Ss){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sa(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new fr(n,3,0,!1)),Zs.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ro(io.set(-.5,-.5,0),Js,a,$s,s,r),ro(Gr.set(.5,-.5,0),Js,a,$s,s,r),ro(so.set(.5,.5,0),Js,a,$s,s,r),Hh.set(0,0),Bc.set(1,0),Wh.set(1,1);let o=t.ray.intersectTriangle(io,Gr,so,!1,zr);if(o===null&&(ro(Gr.set(-.5,.5,0),Js,a,$s,s,r),Bc.set(0,1),o=t.ray.intersectTriangle(io,so,Gr,!1,zr),o===null))return;let l=t.ray.origin.distanceTo(zr);l<t.near||l>t.far||e.push({distance:l,point:zr.clone(),uv:yi.getInterpolation(zr,io,Gr,so,Hh,Bc,Wh,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ro(i,t,e,n,s,r){js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vr.x=r*js.x-s*js.y,Vr.y=s*js.x+r*js.y):Vr.copy(js),i.copy(t),i.x+=Vr.x,i.y+=Vr.y,i.applyMatrix4(Jd)}var Ni=new C,zc=new C,ao=new C,oo=new C,$i=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),oo.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ao),o=oo.dot(this.direction),l=-oo.dot(ao),c=oo.lengthSq(),u=Math.abs(1-a*a),d,h,p,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zc).addScaledVector(ao,h),p}intersectSphere(t,e){if(t.radius<0)return null;Ni.subVectors(t.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,p=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,f=n.x-a.x,v=n.y-a.y,S=n.z-a.z,M=Math.abs(l),A=Math.abs(c),b=Math.abs(u),E,y,T,P,D,O,H,k,W,j,tt,gt;if(M>=A&&M>=b?(T=l,O=d,W=g,gt=f,l>=0?(E=c,y=u,P=h,D=p,H=_,k=m,j=v,tt=S):(E=u,y=c,P=p,D=h,H=m,k=_,j=S,tt=v)):A>=b?(T=c,O=h,W=_,gt=v,c>=0?(E=u,y=l,P=p,D=d,H=m,k=g,j=S,tt=f):(E=l,y=u,P=d,D=p,H=g,k=m,j=f,tt=S)):(T=u,O=p,W=m,gt=S,u>=0?(E=l,y=c,P=d,D=h,H=g,k=_,j=f,tt=v):(E=c,y=l,P=h,D=d,H=_,k=g,j=v,tt=f)),T===0)return null;let et=E/T,ut=y/T,ht=1/T,Ft=P-et*O,wt=D-ut*O,ue=H-et*W,le=k-ut*W,$t=j-et*gt,it=tt-ut*gt,ct=$t*le-it*ue,Mt=Ft*it-wt*$t,Z=ue*wt-le*Ft;if(s){if(ct<0||Mt<0||Z<0)return null}else if((ct<0||Mt<0||Z<0)&&(ct>0||Mt>0||Z>0))return null;let X=ct+Mt+Z;if(X===0)return null;let at=ht*(ct*O+Mt*W+Z*gt);return(X>0?at<0:at>0)?null:this.at(at/X,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nn=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xh=new ve,xs=new $i,lo=new Fi,Yh=new C,co=new C,uo=new C,ho=new C,Vc=new C,fo=new C,qh=new C,po=new C,Gt=class extends ze{constructor(t=new Ge,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Vc.fromBufferAttribute(d,t),a?fo.addScaledVector(Vc,u):fo.addScaledVector(Vc.sub(e),u))}e.add(fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),xs.copy(t.ray).recast(t.near),!(lo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(lo,Yh)===null||xs.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),xs.copy(t.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=S;M<A;M+=3){let b=o.getX(M),E=o.getX(M+1),y=o.getX(M+2);s=mo(this,f,t,n,c,u,d,b,E,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=mo(this,a,t,n,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=S;M<A;M+=3){let b=M,E=M+1,y=M+2;s=mo(this,f,t,n,c,u,d,b,E,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=m,S=m+1,M=m+2;s=mo(this,a,t,n,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function lm(i,t,e,n,s,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ls,o),l===null)return null;po.copy(o),po.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,co),i.getVertexPosition(l,uo),i.getVertexPosition(c,ho);let u=lm(i,t,e,n,co,uo,ho,qh);if(u){let d=new C;yi.getBarycoord(qh,co,uo,ho,d),s&&(u.uv=yi.getInterpolatedAttribute(s,o,l,c,d,new lt)),r&&(u.uv1=yi.getInterpolatedAttribute(r,o,l,c,d,new lt)),a&&(u.normal=yi.getInterpolatedAttribute(a,o,l,c,d,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new C,materialIndex:0};yi.getNormal(co,uo,ho,h.normal),u.face=h,u.barycoord=d}return u}var ra=class extends Mn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ln,u=ln,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=class extends _n{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new ve,Kh=new ve,go=[],Zh=new cn,cm=new ve,Hr=new Gt,Wr=new Fi,li=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Zh.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Wr.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),t.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),Kh.multiplyMatrices(n,Qs),Hr.matrixWorld=Kh,Hr.raycast(t,go);for(let a=0,o=go.length;a<o;a++){let l=go[a];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ra(new Float32Array(s*this.count),s,this.count,vl,Zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ys=new Fi,um=new lt(.5,.5),_o=new C,gr=class{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],v=r[12],S=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,p-u,f-g,A-v).normalize(),s[1].setComponents(c+a,p+u,f+g,A+v).normalize(),s[2].setComponents(c+o,p+d,f+_,A+S).normalize(),s[3].setComponents(c-o,p-d,f-_,A-S).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,p-h,f-m,A-M).normalize();else if(s[4].setComponents(c-l,p-h,f-m,A-M).normalize(),e===ri)s[5].setComponents(c+l,p+h,f+m,A+M).normalize();else if(e===or)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=um.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_o.x=s.normal.x>0?t.max.x:t.min.x,_o.y=s.normal.y>0?t.max.y:t.min.y,_o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vo=new C,Go=new C,$h=new ve,Xr=new $i,xo=new Fi,Gc=new C,Jh=new C,Ho=class extends ze{constructor(t=new Ge,e=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Vo.fromBufferAttribute(e,s-1),Go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Go);t.setAttribute("lineDistance",new be(n,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;$h.copy(s).invert(),Xr.copy(t.ray).applyMatrix4($h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=u.getX(_),v=u.getX(_+1),S=yo(this,t,Xr,l,f,v,_);S&&e.push(S)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(p),f=yo(this,t,Xr,l,_,m,g-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){let f=yo(this,t,Xr,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){let _=yo(this,t,Xr,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Vo.fromBufferAttribute(o,s),Go.fromBufferAttribute(o,r),e.distanceSqToSegment(Vo,Go,Gc,Jh)>n)return;Gc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gc);if(!(c<t.near||c>t.far))return{distance:c,point:Jh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var jh=new C,Qh=new C,aa=class extends Ho{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jh.fromBufferAttribute(e,s),Qh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jh.distanceTo(Qh);t.setAttribute("lineDistance",new be(n,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var oa=class extends Mn{constructor(t=[],e=cs,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ji=class extends Mn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends Mn{constructor(t,e,n=fi,s,r,a,o=ln,l=ln,c,u=Mi,d=1){if(u!==Mi&&u!==us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wo=class extends ji{constructor(t,e=fi,n=cs,s,r,a=ln,o=ln,l,c=Mi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},la=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ge=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(d,2));function g(_,m,f,v,S,M,A,b,E,y,T){let P=M/E,D=A/y,O=M/2,H=A/2,k=b/2,W=E+1,j=y+1,tt=0,gt=0,et=new C;for(let ut=0;ut<j;ut++){let ht=ut*D-H;for(let Ft=0;Ft<W;Ft++){let wt=Ft*P-O;et[_]=wt*v,et[m]=ht*S,et[f]=k,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[f]=b>0?1:-1,u.push(et.x,et.y,et.z),d.push(Ft/E),d.push(1-ut/y),tt+=1}}for(let ut=0;ut<y;ut++)for(let ht=0;ht<E;ht++){let Ft=h+ht+W*ut,wt=h+ht+W*(ut+1),ue=h+(ht+1)+W*(ut+1),le=h+(ht+1)+W*ut;l.push(Ft,wt,le),l.push(wt,ue,le),gt+=6}o.addGroup(p,gt,T),p+=gt,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ca=class i extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,u=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},un=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],g=0,_=[],m=n/2,f=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(p,2));function v(){let M=new C,A=new C,b=0,E=(e-t)/n;for(let y=0;y<=r;y++){let T=[],P=y/r,D=P*(e-t)+t;for(let O=0;O<=s;O++){let H=O/s,k=H*l+o,W=Math.sin(k),j=Math.cos(k);A.x=D*W,A.y=-P*n+m,A.z=D*j,d.push(A.x,A.y,A.z),M.set(W,E,j).normalize(),h.push(M.x,M.y,M.z),p.push(H,1-P),T.push(g++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let P=_[T][y],D=_[T+1][y],O=_[T+1][y+1],H=_[T][y+1];(t>0||T!==0)&&(u.push(P,D,H),b+=3),(e>0||T!==r-1)&&(u.push(D,O,H),b+=3)}c.addGroup(f,b,0),f+=b}function S(M){let A=g,b=new lt,E=new C,y=0,T=M===!0?t:e,P=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*P,0),h.push(0,P,0),p.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let k=O/s*l+o,W=Math.cos(k),j=Math.sin(k);E.x=T*j,E.y=m*P,E.z=T*W,d.push(E.x,E.y,E.z),h.push(0,P,0),b.x=W*.5+.5,b.y=j*.5*P+.5,p.push(b.x,b.y),g++}for(let O=0;O<s;O++){let H=A+O,k=D+O;M===!0?u.push(k,k+1,H):u.push(k+1,k,H),y+=3}c.addGroup(f,y,M===!0?1:2),f+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vo=new C,bo=new C,Hc=new C,Mo=new yi,ua=class extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ir*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:f}=Mo;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Mo.getNormal(Hc),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let S=(v+1)%3,M=d[v],A=d[S],b=Mo[u[v]],E=Mo[u[S]],y=`${M}_${A}`,T=`${A}_${M}`;T in h&&h[T]?(Hc.dot(h[T].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(E.x,E.y,E.z)),h[T]=null):y in h||(h[y]={index0:c[v],index1:c[S],normal:Hc.clone()})}}for(let g in h)if(h[g]){let{index0:_,index1:m}=h[g];vo.fromBufferAttribute(o,_),bo.fromBufferAttribute(o,m),p.push(vo.x,vo.y,vo.z),p.push(bo.x,bo.y,bo.z)}this.setAttribute("position",new be(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new ve;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends Un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xo=class extends xr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Cu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,p*=u,s(a,o,h,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var td=new C,ed=new C,Wc=new Cu,Xc=new Cu,Yc=new Cu,yr=class extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ed.subVectors(s[0],s[1]).add(s[0]),c=ed);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(td.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=td),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),Xc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),Yc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Xc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Yc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Wc.calc(l),Xc.calc(l),Yc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function hm(i,t){let e=1-i;return e*e*t}function dm(i,t){return 2*(1-i)*i*t}function fm(i,t){return i*i*t}function Kr(i,t,e,n){return hm(i,t)+dm(i,e)+fm(i,n)}function pm(i,t){let e=1-i;return e*e*e*t}function mm(i,t){let e=1-i;return 3*e*e*i*t}function gm(i,t){return 3*(1-i)*i*i*t}function _m(i,t){return i*i*i*t}function Zr(i,t,e,n,s){return pm(i,t)+mm(i,e)+gm(i,n)+_m(i,s)}var ha=class extends Un{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zr(t,s.x,r.x,a.x,o.x),Zr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends Un{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zr(t,s.x,r.x,a.x,o.x),Zr(t,s.y,r.y,a.y,o.y),Zr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends Un{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends Un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends Un{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Kr(t,s.x,r.x,a.x),Kr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Un{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Kr(t,s.x,r.x,a.x),Kr(t,s.y,r.y,a.y),Kr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(nd(o,l.x,c.x,u.x,d.x),nd(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},Ko=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:yr,CubicBezierCurve:ha,CubicBezierCurve3:Yo,EllipseCurve:xr,LineCurve:da,LineCurve3:qo,QuadraticBezierCurve:fa,QuadraticBezierCurve3:pa,SplineCurve:ma}),Zo=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}},Qi=class extends Zo{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new da(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fa(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ha(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new xr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ci=class extends Qi{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Qi().fromJSON(s))}return this}};function xm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=jd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){let p=i[h],g=i[h+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ga(r,a,e,o,l,c,0),a}function jd(i,t,e,n,s){let r;if(s===Dm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=id(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=id(a/n|0,i[a],i[a+1],r);return r&&vr(r,r.next)&&(xa(r),r=r.next),r}function ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vr(e,e.next)||Ve(e.prev,e,e.next)===0)){if(xa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ga(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Rm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?vm(i,n,s,r):ym(i)){t.push(l.i,i.i,c.i),xa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=bm(ws(i),t),ga(i,t,e,n,s,r,2)):a===2&&Mm(i,t,e,n,s,r):ga(ws(i),t,e,n,s,r,1);break}}}function ym(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&Yr(s,o,r,l,a,c,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ve(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,p=Math.min(o,l,c),g=Math.min(u,d,h),_=Math.max(o,l,c),m=Math.max(u,d,h),f=Qc(p,g,t,e,n),v=Qc(_,m,t,e,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=f&&M&&M.z<=v;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Yr(o,u,l,d,c,h,S.x,S.y)&&Ve(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Yr(o,u,l,d,c,h,M.x,M.y)&&Ve(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Yr(o,u,l,d,c,h,S.x,S.y)&&Ve(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Yr(o,u,l,d,c,h,M.x,M.y)&&Ve(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function bm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!vr(n,s)&&tf(n,e,e.next,s)&&_a(n,s)&&_a(s,n)&&(t.push(n.i,e.i,s.i),xa(e),xa(e.next),e=i=s),e=e.next}while(e!==i);return ws(e)}function Mm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pm(a,o)){let l=ef(a,o);a=ws(a,a.next),l=ws(l,l.next),ga(a,t,e,n,s,r,0),ga(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Sm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=jd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Im(c))}s.sort(wm);for(let r=0;r<s.length;r++)e=Am(s[r],e);return e}function wm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Am(i,t){let e=Em(i,t);if(!e)return t;let n=ef(e,i);return ws(n,n.next),ws(e,e.next)}function Em(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(vr(i,e))return e;do{if(vr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);_a(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Tm(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Tm(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function Rm(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cm(s)}function Cm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Im(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Yr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Qd(i,t,e,n,s,r,a,o)}function Pm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!km(i,t)&&(_a(i,t)&&_a(t,i)&&Lm(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||vr(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vr(i,t){return i.x===t.x&&i.y===t.y}function tf(i,t,e,n){let s=wo(Ve(i,t,e)),r=wo(Ve(i,t,n)),a=wo(Ve(e,n,i)),o=wo(Ve(e,n,t));return!!(s!==r&&a!==o||s===0&&So(i,e,t)||r===0&&So(i,n,t)||a===0&&So(e,i,n)||o===0&&So(e,t,n))}function So(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wo(i){return i>0?1:i<0?-1:0}function km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _a(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function Lm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ef(i,t){let e=tu(i.i,i.x,i.y),n=tu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function id(i,t,e,n){let s=tu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var eu=class{static triangulate(t,e,n=2){return xm(t,e,n)}},vs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];sd(t),rd(n,t);let a=t.length;e.forEach(sd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,rd(n,e[l]);let o=eu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function sd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ts=class i extends Ge{constructor(t=new ci([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new be(s,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Nm,S,M=!1,A,b,E,y;if(f){S=f.getSpacedPoints(u),M=!0,h=!1;let U=f.isCatmullRomCurve3?f.closed:!1;A=f.computeFrenetFrames(u,U),b=new C,E=new C,y=new C}h||(m=0,p=0,g=0,_=0);let T=o.extractPoints(c),P=T.shape,D=T.holes;if(!vs.isClockWise(P)){P=P.reverse();for(let U=0,G=D.length;U<G;U++){let V=D[U];vs.isClockWise(V)&&(D[U]=V.reverse())}}function H(U){let V=10000000000000001e-36,ot=U[0];for(let ft=1;ft<=U.length;ft++){let bt=ft%U.length,Rt=U[bt],Ot=Rt.x-ot.x,Bt=Rt.y-ot.y,L=Ot*Ot+Bt*Bt,he=Math.max(Math.abs(Rt.x),Math.abs(Rt.y),Math.abs(ot.x),Math.abs(ot.y)),te=V*he*he;if(L<=te){U.splice(bt,1),ft--;continue}ot=Rt}}H(P),D.forEach(H);let k=D.length,W=P;for(let U=0;U<k;U++){let G=D[U];P=P.concat(G)}function j(U,G,V){return G||oe("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(G,V)}let tt=P.length;function gt(U,G,V){let ot,ft,bt,Rt=U.x-G.x,Ot=U.y-G.y,Bt=V.x-U.x,L=V.y-U.y,he=Rt*Rt+Ot*Ot,te=Rt*L-Ot*Bt;if(Math.abs(te)>Number.EPSILON){let R=Math.sqrt(he),x=Math.sqrt(Bt*Bt+L*L),z=G.x-Ot/R,q=G.y+Rt/R,nt=V.x-L/x,yt=V.y+Bt/x,St=((nt-z)*L-(yt-q)*Bt)/(Rt*L-Ot*Bt);ot=z+Rt*St-U.x,ft=q+Ot*St-U.y;let rt=ot*ot+ft*ft;if(rt<=2)return new lt(ot,ft);bt=Math.sqrt(rt/2)}else{let R=!1;Rt>Number.EPSILON?Bt>Number.EPSILON&&(R=!0):Rt<-Number.EPSILON?Bt<-Number.EPSILON&&(R=!0):Math.sign(Ot)===Math.sign(L)&&(R=!0),R?(ot=-Ot,ft=Rt,bt=Math.sqrt(he)):(ot=Rt,ft=Ot,bt=Math.sqrt(he/2))}return new lt(ot/bt,ft/bt)}let et=[];for(let U=0,G=W.length,V=G-1,ot=U+1;U<G;U++,V++,ot++)V===G&&(V=0),ot===G&&(ot=0),et[U]=gt(W[U],W[V],W[ot]);let ut=[],ht,Ft=et.concat();for(let U=0,G=k;U<G;U++){let V=D[U];ht=[];for(let ot=0,ft=V.length,bt=ft-1,Rt=ot+1;ot<ft;ot++,bt++,Rt++)bt===ft&&(bt=0),Rt===ft&&(Rt=0),ht[ot]=gt(V[ot],V[bt],V[Rt]);ut.push(ht),Ft=Ft.concat(ht)}let wt;if(m===0)wt=vs.triangulateShape(W,D);else{let U=[],G=[];for(let V=0;V<m;V++){let ot=V/m,ft=p*Math.cos(ot*Math.PI/2),bt=g*Math.sin(ot*Math.PI/2)+_;for(let Rt=0,Ot=W.length;Rt<Ot;Rt++){let Bt=j(W[Rt],et[Rt],bt);Mt(Bt.x,Bt.y,-ft),ot===0&&U.push(Bt)}for(let Rt=0,Ot=k;Rt<Ot;Rt++){let Bt=D[Rt];ht=ut[Rt];let L=[];for(let he=0,te=Bt.length;he<te;he++){let R=j(Bt[he],ht[he],bt);Mt(R.x,R.y,-ft),ot===0&&L.push(R)}ot===0&&G.push(L)}}wt=vs.triangulateShape(U,G)}let ue=wt.length,le=g+_;for(let U=0;U<tt;U++){let G=h?j(P[U],Ft[U],le):P[U];M?(E.copy(A.normals[0]).multiplyScalar(G.x),b.copy(A.binormals[0]).multiplyScalar(G.y),y.copy(S[0]).add(E).add(b),Mt(y.x,y.y,y.z)):Mt(G.x,G.y,0)}for(let U=1;U<=u;U++)for(let G=0;G<tt;G++){let V=h?j(P[G],Ft[G],le):P[G];M?(E.copy(A.normals[U]).multiplyScalar(V.x),b.copy(A.binormals[U]).multiplyScalar(V.y),y.copy(S[U]).add(E).add(b),Mt(y.x,y.y,y.z)):Mt(V.x,V.y,d/u*U)}for(let U=m-1;U>=0;U--){let G=U/m,V=p*Math.cos(G*Math.PI/2),ot=g*Math.sin(G*Math.PI/2)+_;for(let ft=0,bt=W.length;ft<bt;ft++){let Rt=j(W[ft],et[ft],ot);Mt(Rt.x,Rt.y,d+V)}for(let ft=0,bt=D.length;ft<bt;ft++){let Rt=D[ft];ht=ut[ft];for(let Ot=0,Bt=Rt.length;Ot<Bt;Ot++){let L=j(Rt[Ot],ht[Ot],ot);M?Mt(L.x,L.y+S[u-1].y,S[u-1].x+V):Mt(L.x,L.y,d+V)}}}$t(),it();function $t(){let U=s.length/3;if(h){let G=0,V=tt*G;for(let ot=0;ot<ue;ot++){let ft=wt[ot];Z(ft[2]+V,ft[1]+V,ft[0]+V)}G=u+m*2,V=tt*G;for(let ot=0;ot<ue;ot++){let ft=wt[ot];Z(ft[0]+V,ft[1]+V,ft[2]+V)}}else{for(let G=0;G<ue;G++){let V=wt[G];Z(V[2],V[1],V[0])}for(let G=0;G<ue;G++){let V=wt[G];Z(V[0]+tt*u,V[1]+tt*u,V[2]+tt*u)}}n.addGroup(U,s.length/3-U,0)}function it(){let U=s.length/3,G=0;ct(W,G),G+=W.length;for(let V=0,ot=D.length;V<ot;V++){let ft=D[V];ct(ft,G),G+=ft.length}n.addGroup(U,s.length/3-U,1)}function ct(U,G){let V=U.length;for(;--V>=0;){let ot=V,ft=V-1;ft<0&&(ft=U.length-1);for(let bt=0,Rt=u+m*2;bt<Rt;bt++){let Ot=tt*bt,Bt=tt*(bt+1),L=G+ot+Ot,he=G+ft+Ot,te=G+ft+Bt,R=G+ot+Bt;X(L,he,te,R)}}}function Mt(U,G,V){l.push(U),l.push(G),l.push(V)}function Z(U,G,V){at(U),at(G),at(V);let ot=s.length/3,ft=v.generateTopUV(n,s,ot-3,ot-2,ot-1);vt(ft[0]),vt(ft[1]),vt(ft[2])}function X(U,G,V,ot){at(U),at(G),at(ot),at(G),at(V),at(ot);let ft=s.length/3,bt=v.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);vt(bt[0]),vt(bt[1]),vt(bt[3]),vt(bt[1]),vt(bt[2]),vt(bt[3])}function at(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function vt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Um(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ko[s.type]().fromJSON(s)),new i(n,t.options)}},Nm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-d),new lt(h,1-g),new lt(_,1-f)]:[new lt(o,1-l),new lt(u,1-d),new lt(p,1-g),new lt(m,1-f)]}};function Um(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Si=class i extends Ge{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new C,h=new lt,p=new C,g=new C,_=new C,m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=e;v++){let S=n+v*u*s,M=Math.sin(S),A=Math.cos(S);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*M,d.y=t[b].y,d.z=t[b].x*A,a.push(d.x,d.y,d.z),h.x=v/e,h.y=b/(t.length-1),o.push(h.x,h.y);let E=l[3*b+0]*M,y=l[3*b+1],T=l[3*b+0]*A;c.push(E,y,T)}}for(let v=0;v<e;v++)for(let S=0;S<t.length-1;S++){let M=S+v*t.length,A=M,b=M+t.length,E=M+t.length+1,y=M+1;r.push(A,b,y),r.push(E,y,b)}this.setIndex(r),this.setAttribute("position",new be(a,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ui=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){let v=f*h-a;for(let S=0;S<c;S++){let M=S*d-r;g.push(M,-v,0),_.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let S=v+c*f,M=v+c*(f+1),A=v+1+c*(f+1),b=v+1+c*f;p.push(S,M,b),p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var es=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new C,h=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let v=[],S=f/n,M=a+S*o,A=t*Math.cos(M),b=Math.sqrt(t*t-A*A),E=0;f===0&&a===0?E=.5/e:f===n&&l===Math.PI&&(E=-.5/e);for(let y=0;y<=e;y++){let T=y/e,P=s+T*r;d.x=-b*Math.cos(P),d.y=A,d.z=b*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+E,1-S),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let S=u[f][v+1],M=u[f][v],A=u[f+1][v],b=u[f+1][v+1];(f!==0||a>0)&&p.push(S,M,b),(f!==n-1||l<Math.PI)&&p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ya=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,p=new C,g=new C;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let f=0;f<=s;f++){let v=f/s*r;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let f=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(f,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ns=class i extends Ge{constructor(t=new pa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new lt,u=new C,d=[],h=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(p,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),v(),f()}function m(S){u=t.getPointAt(S/e,u);let M=a.normals[S],A=a.binormals[S];for(let b=0;b<=s;b++){let E=b/s*Math.PI*2,y=Math.sin(E),T=-Math.cos(E);l.x=T*M.x+y*A.x,l.y=T*M.y+y*A.y,l.z=T*M.z+y*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=e;S++)for(let M=1;M<=s;M++){let A=(s+1)*(S-1)+(M-1),b=(s+1)*S+(M-1),E=(s+1)*S+M,y=(s+1)*(S-1)+M;g.push(A,b,y),g.push(b,E,y)}}function v(){for(let S=0;S<=e;S++)for(let M=0;M<=s;M++)c.x=S/e,c.y=M/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ko[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var va=class extends Kn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ad(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ad(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var nf={clone:Rs,merge:xn},Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Se=class extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ba=class extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ma=class extends Kn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Jo=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function qc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qo=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jc:r=t,o=2*e-n;break;case jc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:a=t,l=2*n-e;break;case jc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-h*m+2*h*_-h*g,v=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+v*a[c+A]+S*a[l+A]+M*a[d+A];return r}},tl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},el=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nl=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let h=o*2,p=t-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],f=p*h+g*2,v=d[f],S=d[f+1],M=t*h+g*2,A=u[M],b=u[M+1],E=Vm(n,e,v,A,s);r[g]=sf(E,_,S,b,m)}return r}};function sf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function zm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=sf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=zm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),qc(t.settings)&&(n.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new nl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case Fo:e=this.InterpolantFactoryMethodLinear;break;case To:e=this.InterpolantFactoryMethodSmooth;break;case Zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ae("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return Zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;qc(this.settings)&&(od(this.settings.inTangents,t),od(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(oe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){oe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){oe("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Cp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){oe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===To,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,p=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[h+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,qc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function od(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Fo;var ss=class extends On{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=$r;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};il.prototype.ValueTypeName="color";var sl=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};sl.prototype.ValueTypeName="number";var rl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sa=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends On{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=$r;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};al.prototype.ValueTypeName="vector";var ol=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rf=new ol,ll=class{constructor(t){this.manager=t!==void 0?t:rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wa=class extends br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kc=new ve,ld=new C,cd=new C,Aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ld.setFromMatrixPosition(t.matrixWorld),e.position.copy(ld),cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ao=new C,Eo=new An,xi=new C,Ea=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ao,Eo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Eo,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ao,Eo,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Eo,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new C,ud=new lt,hd=new lt,hn=class extends Ea{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,ud,hd),e.subVectors(hd,ud)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var nu=class extends Aa{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},As=class extends br{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Mr=class extends Ea{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},iu=class extends Aa{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new iu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var er=-90,nr=1,cl=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new hn(er,nr,t,e);r.layers=this.layers,this.add(r);let a=new hn(er,nr,t,e);a.layers=this.layers,this.add(a);let o=new hn(er,nr,t,e);o.layers=this.layers,this.add(o);let l=new hn(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new hn(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ul=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Pu="\\[\\]\\.:\\/",Gm=new RegExp("["+Pu+"]","g"),ku="[^"+Pu+"]",Hm="[^"+Pu.replace("\\.","")+"]",Wm=/((?:WC+[\/:])*)/.source.replace("WC",ku),Xm=/(WCOD+)?/.source.replace("WCOD",Hm),Ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),Km=new RegExp("^"+Wm+Xm+Ym+qm+"$"),Zm=["material","materials","bones","map"],su=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(t){let e=Km.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=su;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wv=new Float32Array(1);var dd=new ve,Ra=class{constructor(t,e,n=0,s=1/0){this.ray=new $i(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dd),this}intersectObject(t,e=!0,n=[]){return ru(t,this,n,e),n.sort(fd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ru(t[s],this,n,e);return n.sort(fd),n}};function fd(i,t){return i.distance-t.distance}function ru(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ru(r[a],t,e,!0)}}var Sr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ou=class Ou{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ou.prototype.isMatrix2=!0;var au=Ou;var Ca=class extends ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Lu(i,t,e,n){let s=$m(n);switch(e){case Su:return i*t;case vl:return i*t/s.components*s.byteLength;case bl:return i*t/s.components*s.byteLength;case hs:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case wu:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:case Tl:return Math.max(i,16)*Math.max(t,8)/4;case wl:case El:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Cl:case Pl:case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Il:case Oa:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Zl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case Tn:case yu:return{byteLength:1,components:1};case Er:case vu:case pi:return{byteLength:2,components:1};case xl:case yl:return{byteLength:2,components:4};case fi:case _l:case Zn:return{byteLength:4,components:1};case bu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function eg(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
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
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
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
#endif`,cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ug=`#ifdef USE_BATCHING
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
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mg=`#ifdef USE_IRIDESCENCE
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
#endif`,gg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ag=`#define PI 3.141592653589793
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
} // validated`,Eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
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
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
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
#endif`,t0=`uniform sampler2D dfgLUT;
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
}`,e0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,c_=`#if DEPTH_PACKING == 3200
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
}`,u_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,v_=`#define MATCAP
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
}`,b_=`#define MATCAP
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
}`,M_=`#define NORMAL
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
}`,S_=`#define NORMAL
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
}`,w_=`#define PHONG
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
}`,A_=`#define PHONG
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
}`,E_=`#define STANDARD
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
}`,T_=`#define STANDARD
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
}`,R_=`#define TOON
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
}`,C_=`#define TOON
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
}`,P_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,L_=`uniform vec3 color;
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
}`,D_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:sg,alphamap_pars_fragment:rg,alphatest_fragment:ag,alphatest_pars_fragment:og,aomap_fragment:lg,aomap_pars_fragment:cg,batching_pars_vertex:ug,batching_vertex:hg,begin_vertex:dg,beginnormal_vertex:fg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:yg,clipping_planes_vertex:vg,color_fragment:bg,color_pars_fragment:Mg,color_pars_vertex:Sg,color_vertex:wg,common:Ag,cube_uv_reflection_fragment:Eg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Rg,displacementmap_vertex:Cg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Pg,colorspace_fragment:kg,colorspace_pars_fragment:Lg,envmap_fragment:Dg,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Ug,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:Kg,envmap_vertex:Og,fog_vertex:Bg,fog_pars_vertex:zg,fog_fragment:Vg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:Yg,lights_pars_begin:qg,lights_toon_fragment:Zg,lights_toon_pars_fragment:$g,lights_phong_fragment:Jg,lights_phong_pars_fragment:jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:u0,map_particle_fragment:h0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:_0,morphtarget_pars_vertex:x0,morphtarget_vertex:y0,normal_fragment_begin:v0,normal_fragment_maps:b0,normal_pars_fragment:M0,normal_pars_vertex:S0,normal_vertex:w0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:I0,packing:P0,premultiplied_alpha_fragment:k0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:N0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:B0,shadowmap_vertex:z0,shadowmask_pars_fragment:V0,skinbase_vertex:G0,skinning_pars_vertex:H0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:Y0,specularmap_pars_fragment:q0,tonemapping_fragment:K0,tonemapping_pars_fragment:Z0,transmission_fragment:$0,transmission_pars_fragment:J0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:t_,worldpos_vertex:e_,background_vert:n_,background_frag:i_,backgroundCube_vert:s_,backgroundCube_frag:r_,cube_vert:a_,cube_frag:o_,depth_vert:l_,depth_frag:c_,distance_vert:u_,distance_frag:h_,equirect_vert:d_,equirect_frag:f_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:x_,meshlambert_frag:y_,meshmatcap_vert:v_,meshmatcap_frag:b_,meshnormal_vert:M_,meshnormal_frag:S_,meshphong_vert:w_,meshphong_frag:A_,meshphysical_vert:E_,meshphysical_frag:T_,meshtoon_vert:R_,meshtoon_frag:C_,points_vert:I_,points_frag:P_,shadow_vert:k_,shadow_frag:L_,sprite_vert:D_,sprite_frag:N_},Ut={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ti={basic:{uniforms:xn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:xn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:xn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:xn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:xn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Qt(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:xn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:xn([Ut.points,Ut.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:xn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:xn([Ut.common,Ut.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:xn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:xn([Ut.sprite,Ut.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:xn([Ut.common,Ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:xn([Ut.lights,Ut.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ti.physical={uniforms:xn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var nc={r:0,b:0,g:0},U_=new ve,Rf=new fe;Rf.set(-1,0,0,0,1,0,0,0,1);function F_(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=t.get(S,M)}return S}function g(v){let S=!1,M=p(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){let M=p(S);M&&(M.isCubeTexture||M.mapping===ka)?(c===void 0&&(c=new Gt(new ge(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Rs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U_.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rf),c.material.toneMapped=ye.getTransfer(M.colorSpace)!==Re,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Gt(new ui(2,2),new Fn({name:"BackgroundMaterial",uniforms:Rs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ye.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(nc,Iu(i)),e.buffers.color.setClear(nc.r,nc.g,nc.b,S,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:f}}function O_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,O,H,k,W){let j=!1,tt=d(D,k,H,O);r!==tt&&(r=tt,c(r.object)),j=p(D,k,H,W),j&&g(D,k,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(D,O,H,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,O,H,k){let W=k.wireframe===!0,j=n[O.id];j===void 0&&(j={},n[O.id]=j);let tt=D.isInstancedMesh===!0?D.id:0,gt=j[tt];gt===void 0&&(gt={},j[tt]=gt);let et=gt[H.id];et===void 0&&(et={},gt[H.id]=et);let ut=et[W];return ut===void 0&&(ut=h(l()),et[W]=ut),ut}function h(D){let O=[],H=[],k=[];for(let W=0;W<e;W++)O[W]=0,H[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:k,object:D,attributes:{},index:null}}function p(D,O,H,k){let W=r.attributes,j=O.attributes,tt=0,gt=H.getAttributes();for(let et in gt)if(gt[et].location>=0){let ht=W[et],Ft=j[et];if(Ft===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Ft=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Ft=D.instanceColor)),ht===void 0||ht.attribute!==Ft||Ft&&ht.data!==Ft.data)return!0;tt++}return r.attributesNum!==tt||r.index!==k}function g(D,O,H,k){let W={},j=O.attributes,tt=0,gt=H.getAttributes();for(let et in gt)if(gt[et].location>=0){let ht=j[et];ht===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor));let Ft={};Ft.attribute=ht,ht&&ht.data&&(Ft.data=ht.data),W[et]=Ft,tt++}r.attributes=W,r.attributesNum=tt,r.index=k}function _(){let D=r.newAttributes;for(let O=0,H=D.length;O<H;O++)D[O]=0}function m(D){f(D,0)}function f(D,O){let H=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;H[D]=1,k[D]===0&&(i.enableVertexAttribArray(D),k[D]=1),W[D]!==O&&(i.vertexAttribDivisor(D,O),W[D]=O)}function v(){let D=r.newAttributes,O=r.enabledAttributes;for(let H=0,k=O.length;H<k;H++)O[H]!==D[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function S(D,O,H,k,W,j,tt){tt===!0?i.vertexAttribIPointer(D,O,H,W,j):i.vertexAttribPointer(D,O,H,k,W,j)}function M(D,O,H,k){_();let W=k.attributes,j=H.getAttributes(),tt=O.defaultAttributeValues;for(let gt in j){let et=j[gt];if(et.location>=0){let ut=W[gt];if(ut===void 0&&(gt==="instanceMatrix"&&D.instanceMatrix&&(ut=D.instanceMatrix),gt==="instanceColor"&&D.instanceColor&&(ut=D.instanceColor)),ut!==void 0){let ht=ut.normalized,Ft=ut.itemSize,wt=t.get(ut);if(wt===void 0)continue;let ue=wt.buffer,le=wt.type,$t=wt.bytesPerElement,it=le===i.INT||le===i.UNSIGNED_INT||ut.gpuType===_l;if(ut.isInterleavedBufferAttribute){let ct=ut.data,Mt=ct.stride,Z=ut.offset;if(ct.isInstancedInterleavedBuffer){for(let X=0;X<et.locationSize;X++)f(et.location+X,ct.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let X=0;X<et.locationSize;X++)m(et.location+X);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let X=0;X<et.locationSize;X++)S(et.location+X,Ft/et.locationSize,le,ht,Mt*$t,(Z+Ft/et.locationSize*X)*$t,it)}else{if(ut.isInstancedBufferAttribute){for(let ct=0;ct<et.locationSize;ct++)f(et.location+ct,ut.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ct=0;ct<et.locationSize;ct++)m(et.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ct=0;ct<et.locationSize;ct++)S(et.location+ct,Ft/et.locationSize,le,ht,Ft*$t,Ft/et.locationSize*ct*$t,it)}}else if(tt!==void 0){let ht=tt[gt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(et.location,ht);break;case 3:i.vertexAttrib3fv(et.location,ht);break;case 4:i.vertexAttrib4fv(et.location,ht);break;default:i.vertexAttrib1fv(et.location,ht)}}}}v()}function A(){T();for(let D in n){let O=n[D];for(let H in O){let k=O[H];for(let W in k){let j=k[W];for(let tt in j)u(j[tt].object),delete j[tt];delete k[W]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let H in O){let k=O[H];for(let W in k){let j=k[W];for(let tt in j)u(j[tt].object),delete j[tt];delete k[W]}}delete n[D.id]}function E(D){for(let O in n){let H=n[O];for(let k in H){let W=H[k];if(W[D.id]===void 0)continue;let j=W[D.id];for(let tt in j)u(j[tt].object),delete j[tt];delete W[D.id]}}}function y(D){for(let O in n){let H=n[O],k=D.isInstancedMesh===!0?D.id:0,W=H[k];if(W!==void 0){for(let j in W){let tt=W[j];for(let gt in tt)u(tt[gt].object),delete tt[gt];delete W[j]}delete H[k],Object.keys(H).length===0&&delete n[O]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function B_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function z_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==$n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let y=E===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Tn&&E!==Zn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(ae("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:b}}function V_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Dn,o=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,S=v*4,M=f.clippingState||null;l.value=M,M=u(g,h,S,p);for(let A=0;A!==S;++A)M[A]=e[A];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,M=p;S!==_;++S,M+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Cr=4,G_=6,H_=20,W_=256,Va=new Mr,af=new Qt,Bu=null,zu=0,Vu=0,Gu=!1,X_=new C,Cs=new C,Pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=X_}=r;Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bu,zu,Vu),this._renderer.xr.enabled=Gu,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:pi,format:$n,colorSpace:Jr,depthBuffer:!1},s=of(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Y_(r)),this._blurMaterial=K_(r,t,e),this._ggxMaterial=q_(r,t,e)}return s}_compileMaterial(t){let e=new Gt(new Ge,t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,s,r){let l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(af),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new ge,new Nn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,f=!0):(m.color.copy(af),f=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let A=this._cubeSize;Rr(s,M*A,S>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(_,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cs||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Va)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,p=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Cr?n-g+Cr:0),f=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Rr(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(o,Va),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Rr(t,m,f,3*_,2*_),s.setRenderTarget(t),s.render(o,Va)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Cr?s-this._lodMax+Cr:0),h=4*(this._cubeSize-u);Rr(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Va)}};function Y_(i){let t=[],e=[],n=i,s=i-Cr+1+G_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,p=3,g=new Float32Array(p*h*d),_=new Float32Array(p*h*d);for(let f=0;f<d;f++){let v=f%3*2/3-1,S=f>2?0:-1,M=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(M,p*h*f);for(let A=0;A<h;A++){let b=u[A*2]*2-1,E=u[A*2+1]*2-1;f===0?Cs.set(1,E,b):f===1?Cs.set(-b,1,-E):f===2?Cs.set(-b,E,1):f===3?Cs.set(-1,E,-b):f===4?Cs.set(-b,-1,E):Cs.set(b,E,-1),Cs.toArray(_,(f*h+A)*p)}}let m=new Ge;m.setAttribute("position",new _n(g,p)),m.setAttribute("outputDirection",new _n(_,p)),e.push(new Gt(m,null)),n>Cr&&n--}return{lodMeshes:e,sizeLods:t}}function of(i,t,e){let n=new En(i,t,e);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function q_(i,t,e){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function K_(i,t,e){return new Fn({name:"SphericalGaussianBlur",defines:{SAMPLES:H_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function lf(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function cf(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sc=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new oa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ge(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:wi});r.uniforms.tEquirect.value=e;let a=new Gt(s,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=tn),new cl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Z_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===pl||p===ml)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new sc(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,g=p===pl||p===ml,_=p===cs||p===Ts;if(g||_){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Pr(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Pr(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===pl?h.mapping=cs:p===ml&&(h.mapping=Ts),h}function l(h){let p=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function $_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function J_(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(p!==null){let v=p.array;_=p.version;for(let S=0,M=v.length;S<M;S+=3){let A=v[S+0],b=v[S+1],E=v[S+2];h.push(A,b,b,E,E,A)}}else{let v=g.array;_=g.version;for(let S=0,M=v.length/3-1;S<M;S+=3){let A=S+0,b=S+1,E=S+2;h.push(A,b,b,E,E,A)}}let m=new(g.count>=65535?ia:na)(h,1);m.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function j_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*a,p),e.update(h,n,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Q_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tx(i,t,e){let n=new WeakMap,s=new Be;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let M=o.attributes.position.count*S,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*A*4*d),E=new ea(b,M,A,d);E.type=Zn,E.needsUpdate=!0;let y=S*4;for(let P=0;P<d;P++){let D=m[P],O=f[P],H=v[P],k=M*A*4*P;for(let W=0;W<D.count;W++){let j=W*y;p===!0&&(s.fromBufferAttribute(D,W),b[k+j+0]=s.x,b[k+j+1]=s.y,b[k+j+2]=s.z,b[k+j+3]=0),g===!0&&(s.fromBufferAttribute(O,W),b[k+j+4]=s.x,b[k+j+5]=s.y,b[k+j+6]=s.z,b[k+j+7]=0),_===!0&&(s.fromBufferAttribute(H,W),b[k+j+8]=s.x,b[k+j+9]=s.y,b[k+j+10]=s.z,b[k+j+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:E,size:new lt(M,A)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ex(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var nx={[du]:"LINEAR_TONE_MAPPING",[fu]:"REINHARD_TONE_MAPPING",[pu]:"CINEON_TONE_MAPPING",[mu]:"ACES_FILMIC_TONE_MAPPING",[_u]:"AGX_TONE_MAPPING",[Pa]:"NEUTRAL_TONE_MAPPING",[gu]:"CUSTOM_TONE_MAPPING"};function ix(i,t,e,n,s,r){let a=new En(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ge;c.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new be([0,2,0,0,2,0],2));let u=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Gt(c,u),h=new Mr(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,f=null,v=[],S=!1;this.setSize=function(M,A){a.setSize(M,A),o!==null&&o.setSize(M,A),l!==null&&l.setSize(M,A);for(let b=0;b<v.length;b++){let E=v[b];E.setSize&&E.setSize(M,A)}},this.setEffects=function(M){v=M,S=v.length>0&&v[0].isRenderPass===!0;let A=a.width,b=a.height;v.length>0&&o===null&&(o=new En(A,b,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new En(A,b,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<v.length;E++){let y=v[E];y.setSize&&y.setSize(A,b)}},this.begin=function(M,A){if(_||M.toneMapping===di&&v.length===0)return!1;if(f=A,A!==null){let b=A.width,E=A.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return S===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=di,!0},this.hasRenderPass=function(){return S},this.end=function(M,A){M.toneMapping=m,_=!0;let b=a,E=o;for(let y=0;y<v.length;y++){let T=v[y];T.enabled!==!1&&(T.render(M,E,b,A),T.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,u.defines={},ye.getTransfer(p)===Re&&(u.defines.SRGB_TRANSFER="");let y=nx[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(f),M.render(d,h),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Cf=new Mn,Xu=new ji(1,1),If=new ea,Pf=new zo,kf=new oa,uf=[],hf=[],df=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function kr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oc(i,t){let e=hf[t];e===void 0&&(e=new Int32Array(t),hf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function lx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),nn(e,n)}}function cx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;ff.set(n),i.uniformMatrix3fv(this.addr,!1,ff),nn(e,n)}}function ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),nn(e,n)}}function hx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=Xu):r=Cf,e.setTexture2D(t||r,s)}function vx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pf,s)}function bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kf,s)}function Mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||If,s)}function Sx(i){switch(i){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return ux;case 5124:case 35670:return hx;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Mx}}function wx(i,t){i.uniform1fv(this.addr,t)}function Ax(i,t){let e=kr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ex(i,t){let e=kr(t,this.size,3);i.uniform3fv(this.addr,e)}function Tx(i,t){let e=kr(t,this.size,4);i.uniform4fv(this.addr,e)}function Rx(i,t){let e=kr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cx(i,t){let e=kr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ix(i,t){let e=kr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Px(i,t){i.uniform1iv(this.addr,t)}function kx(i,t){i.uniform2iv(this.addr,t)}function Lx(i,t){i.uniform3iv(this.addr,t)}function Dx(i,t){i.uniform4iv(this.addr,t)}function Nx(i,t){i.uniform1uiv(this.addr,t)}function Ux(i,t){i.uniform2uiv(this.addr,t)}function Fx(i,t){i.uniform3uiv(this.addr,t)}function Ox(i,t){i.uniform4uiv(this.addr,t)}function Bx(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xu:a=Cf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function zx(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pf,r[a])}function Vx(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||kf,r[a])}function Gx(i,t,e){let n=this.cache,s=t.length,r=oc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||If,r[a])}function Hx(i){switch(i){case 5126:return wx;case 35664:return Ax;case 35665:return Ex;case 35666:return Tx;case 35674:return Rx;case 35675:return Cx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return kx;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Nx;case 36294:return Ux;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}var Yu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sx(e.type)}},qu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hx(e.type)}},Ku=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function mf(i,t){i.seq.push(t),i.map[t.id]=t}function Wx(i,t,e){let n=i.name,s=n.length;for(Hu.lastIndex=0;;){let r=Hu.exec(n),a=Hu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mf(e,c===void 0?new Yu(o,i,t):new qu(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ku(o),mf(e,d)),e=d}}}var Ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xx=37297,Yx=0;function qx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _f=new fe;function Kx(i){ye._getMatrix(_f,ye.workingColorSpace,i);let t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qx(i.getShaderSource(t),o)}else return r}function Zx(i,t){let e=Kx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var $x={[du]:"Linear",[fu]:"Reinhard",[pu]:"Cineon",[mu]:"ACESFilmic",[_u]:"AgX",[Pa]:"Neutral",[gu]:"Custom"};function Jx(i,t){let e=$x[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new C;function jx(){ye.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function ty(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ey(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ha(i){return i!==""}function yf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(i){return i.replace(ny,sy)}var iy=new Map;function sy(i,t){let e=_e[t];if(e===void 0){let n=iy.get(t);if(n!==void 0)e=_e[n],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zu(e)}var ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(i){return i.replace(ry,ay)}function ay(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var oy={[Ia]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function ly(i){return oy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cy={[cs]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function uy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var hy={[Ts]:"ENVMAP_MODE_REFRACTION"};function dy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fy={[fl]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function py(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fy[i.combine]||"ENVMAP_BLENDING_NONE"}function my(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ly(e),c=uy(e),u=dy(e),d=py(e),h=my(e),p=Qx(e),g=ty(r),_=s.createProgram(),m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ha).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ha).join(`
`),f.length>0&&(f+=`
`)):(m=[Mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),f=[Mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?_e.tonemapping_pars_fragment:"",e.toneMapping!==di?Jx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Zx("linearToOutputTexel",e.outputColorSpace),jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Zu(a),a=yf(a,e),a=vf(a,e),o=Zu(o),o=yf(o,e),o=vf(o,e),a=bf(a),o=bf(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=v+m+a,M=v+f+o,A=gf(s,s.VERTEX_SHADER,S),b=gf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,A),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(b)||"",W=O.trim(),j=H.trim(),tt=k.trim(),gt=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,b);else{let ut=xf(s,A,"vertex"),ht=xf(s,b,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ut+`
`+ht)}else W!==""?ae("WebGLProgram: Program Info Log:",W):(j===""||tt==="")&&(et=!1);et&&(D.diagnostics={runnable:gt,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(A),s.deleteShader(b),y=new Ir(s,_),T=ey(s,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,Xx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}var _y=0,$u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ju(t),e.set(t,n)),n}},Ju=class{constructor(t){this.id=_y++,this.code=t,this.usedTimes=0}};function xy(i){return i===hs||i===Oa||i===Ba}function yy(i,t,e,n,s,r){let a=new hr,o=new $u,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,P,D,O,H){let k=D.fog,W=O.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,gt=t.get(y.envMap||j,tt),et=gt&&gt.mapping===ka?gt.image.height:null,ut=p[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&ae("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ft=ht!==void 0?ht.length:0,wt=0;W.morphAttributes.position!==void 0&&(wt=1),W.morphAttributes.normal!==void 0&&(wt=2),W.morphAttributes.color!==void 0&&(wt=3);let ue,le,$t,it;if(ut){let Me=Ti[ut];ue=Me.vertexShader,le=Me.fragmentShader}else{ue=y.vertexShader,le=y.fragmentShader;let Me=o.getVertexShaderStage(y),K=o.getFragmentShaderStage(y);o.update(y,Me,K),$t=Me.id,it=K.id}let ct=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Z=O.isInstancedMesh===!0,X=O.isBatchedMesh===!0,at=!!y.map,vt=!!y.matcap,U=!!gt,G=!!y.aoMap,V=!!y.lightMap,ot=!!y.bumpMap&&y.wireframe===!1,ft=!!y.normalMap,bt=!!y.displacementMap,Rt=!!y.emissiveMap,Ot=!!y.metalnessMap,Bt=!!y.roughnessMap,L=y.anisotropy>0,he=y.clearcoat>0,te=y.dispersion>0,R=y.retroreflectivity>0,x=y.iridescence>0,z=y.sheen>0,q=y.transmission>0,nt=L&&!!y.anisotropyMap,yt=he&&!!y.clearcoatMap,St=he&&!!y.clearcoatNormalMap,rt=he&&!!y.clearcoatRoughnessMap,mt=x&&!!y.iridescenceMap,Pt=x&&!!y.iridescenceThicknessMap,Zt=z&&!!y.sheenColorMap,Ct=z&&!!y.sheenRoughnessMap,At=!!y.specularMap,Jt=!!y.specularColorMap,se=!!y.specularIntensityMap,re=q&&!!y.transmissionMap,F=q&&!!y.thicknessMap,Et=!!y.gradientMap,dt=!!y.alphaMap,Tt=y.alphaTest>0,Lt=!!y.alphaHash,_t=!!y.extensions,Xt=di;y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Ht={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:ue,fragmentShader:le,defines:y.defines,customVertexShaderID:$t,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:X,batchingColor:X&&O._colorsTexture!==null,instancing:Z,instancingColor:Z&&O.instanceColor!==null,instancingMorph:Z&&O.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:vt,envMap:U,envMapMode:U&&gt.mapping,envMapCubeUVHeight:et,aoMap:G,lightMap:V,bumpMap:ot,normalMap:ft,displacementMap:bt,emissiveMap:Rt,normalMapObjectSpace:ft&&y.normalMapType===Od,normalMapTangentSpace:ft&&y.normalMapType===za,packedNormalMap:ft&&y.normalMapType===za&&xy(y.normalMap.format),metalnessMap:Ot,roughnessMap:Bt,anisotropy:L,anisotropyMap:nt,clearcoat:he,clearcoatMap:yt,clearcoatNormalMap:St,clearcoatRoughnessMap:rt,dispersion:te,retroreflection:R,iridescence:x,iridescenceMap:mt,iridescenceThicknessMap:Pt,sheen:z,sheenColorMap:Zt,sheenRoughnessMap:Ct,specularMap:At,specularColorMap:Jt,specularIntensityMap:se,transmission:q,transmissionMap:re,thicknessMap:F,gradientMap:Et,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:Tt,alphaHash:Lt,combine:y.combine,mapUv:at&&g(y.map.channel),aoMapUv:G&&g(y.aoMap.channel),lightMapUv:V&&g(y.lightMap.channel),bumpMapUv:ot&&g(y.bumpMap.channel),normalMapUv:ft&&g(y.normalMap.channel),displacementMapUv:bt&&g(y.displacementMap.channel),emissiveMapUv:Rt&&g(y.emissiveMap.channel),metalnessMapUv:Ot&&g(y.metalnessMap.channel),roughnessMapUv:Bt&&g(y.roughnessMap.channel),anisotropyMapUv:nt&&g(y.anisotropyMap.channel),clearcoatMapUv:yt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(y.sheenRoughnessMap.channel),specularMapUv:At&&g(y.specularMap.channel),specularColorMapUv:Jt&&g(y.specularColorMap.channel),specularIntensityMapUv:se&&g(y.specularIntensityMap.channel),transmissionMapUv:re&&g(y.transmissionMap.channel),thicknessMapUv:F&&g(y.thicknessMap.channel),alphaMapUv:dt&&g(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ft||L),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(at||dt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&ye.getTransfer(y.map.colorSpace)===Re,decodeVideoTextureEmissive:Rt&&y.emissiveMap.isVideoTexture===!0&&ye.getTransfer(y.emissiveMap.colorSpace)===Re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hi,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||X)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(f(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function f(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){let T=p[y.type],P;if(T){let D=Ti[T];P=nf.clone(D.uniforms)}else P=y.uniforms;return P}function M(y,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new gy(i,T,y,s),c.push(P),u.set(T,P)),P}function A(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:E}}function vy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function by(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,_,m,f){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:f},i[t]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=f),t++,v}function l(h,p,g,_,m,f,v){v.reversedDepth===!0&&(m=-m);let S=o(h,p,g,_,m,f);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function c(h,p,g,_,m,f){let v=o(h,p,g,_,m,f);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,p){e.length>1&&e.sort(h||by),n.length>1&&n.sort(p||Sf),s.length>1&&s.sort(p||Sf)}function d(){for(let h=t,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function My(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wf,i.set(n,[a])):s>=r.length?(a=new wf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Qt};break;case"SpotLight":e={position:new C,direction:new C,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function wy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ay=0;function Ey(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ty(i){let t=new Sy,e=wy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ve,a=new ve;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,S=0,M=0,A=0,b=0,E=0,y=0,T=0,P=0;c.sort(Ey);for(let O=0,H=c.length;O<H;O++){let k=c[O],W=k.color,j=k.intensity,tt=k.distance,gt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===hs?gt=k.shadow.map.texture:gt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=W.r*j,d+=W.g*j,h+=W.b*j;else if(k.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(k.sh.coefficients[et],j);P++}else if(k.isSunLight){let et=t.get(k);if(et.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ut=k.shadow,ht=e.get(k);ht.shadowIntensity=ut.intensity,ht.shadowBias=ut.bias,ht.shadowNormalBias=ut.normalBias,ht.shadowRadius=ut.radius,ht.shadowMapSize.copy(ut.mapSize).multiply(ut.getFrameExtents()),n.sunShadow[g]=ht,n.sunShadowMap[g]=gt;let Ft=ut.getViewportCount();for(let wt=0;wt<Ft;wt++)n.sunShadowMatrix[_+wt]=ut.getMatrix(wt),n.sunShadowCascade[_+wt]=ut._cascadeData[wt];_+=Ft,g++}n.sun[p]=et,p++}else if(k.isDirectionalLight){let et=t.get(k);if(et.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let ut=k.shadow,ht=e.get(k);ht.shadowIntensity=ut.intensity,ht.shadowBias=ut.bias,ht.shadowNormalBias=ut.normalBias,ht.shadowRadius=ut.radius,ht.shadowMapSize=ut.mapSize,n.directionalShadow[m]=ht,n.directionalShadowMap[m]=gt,n.directionalShadowMatrix[m]=k.shadow.matrix,A++}n.directional[m]=et,m++}else if(k.isSpotLight){let et=t.get(k);et.position.setFromMatrixPosition(k.matrixWorld),et.color.copy(W).multiplyScalar(j),et.distance=tt,et.coneCos=Math.cos(k.angle),et.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),et.decay=k.decay,n.spot[v]=et;let ut=k.shadow;if(k.map&&(n.spotLightMap[y]=k.map,y++,ut.updateMatrices(k),k.castShadow&&T++),n.spotLightMatrix[v]=ut.matrix,k.castShadow){let ht=e.get(k);ht.shadowIntensity=ut.intensity,ht.shadowBias=ut.bias,ht.shadowNormalBias=ut.normalBias,ht.shadowRadius=ut.radius,ht.shadowMapSize=ut.mapSize,n.spotShadow[v]=ht,n.spotShadowMap[v]=gt,E++}v++}else if(k.isRectAreaLight){let et=t.get(k);et.color.copy(W).multiplyScalar(j),et.halfWidth.set(k.width*.5,0,0),et.halfHeight.set(0,k.height*.5,0),n.rectArea[S]=et,S++}else if(k.isPointLight){let et=t.get(k);if(et.color.copy(k.color).multiplyScalar(k.intensity),et.distance=k.distance,et.decay=k.decay,k.castShadow){let ut=k.shadow,ht=e.get(k);ht.shadowIntensity=ut.intensity,ht.shadowBias=ut.bias,ht.shadowNormalBias=ut.normalBias,ht.shadowRadius=ut.radius,ht.shadowMapSize=ut.mapSize,ht.shadowCameraNear=ut.camera.near,ht.shadowCameraFar=ut.camera.far,n.pointShadow[f]=ht,n.pointShadowMap[f]=gt,n.pointShadowMatrix[f]=k.shadow.matrix,b++}n.point[f]=et,f++}else if(k.isHemisphereLight){let et=t.get(k);et.skyColor.copy(k.color).multiplyScalar(j),et.groundColor.copy(k.groundColor).multiplyScalar(j),n.hemi[M]=et,M++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==f||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==g||D.numDirectionalShadows!==A||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==y||D.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=f,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,D.sunLength=p,D.directionalLength=m,D.pointLength=f,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=g,D.numDirectionalShadows=A,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=y,D.numLightProbes=P,n.version=Ay++)}function l(c,u){let d=0,h=0,p=0,g=0,_=0,m=0,f=u.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(M.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let A=n.point[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Af(i){let t=new Ty(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ry(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Af(i),t.set(s,[o])):r>=a.length?(o=new Af(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
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
}`,Py=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],ky=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ef=new ve,Ga=new C,Wu=new C;function Ly(i,t,e){let n=new gr,s=new lt,r=new lt,a=new Be,o=new Jo,l=new jo,c={},u=e.maxTextureSize,d={[ls]:dn,[dn]:ls,[hi]:hi},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Cy,fragmentShader:Iy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Gt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let f=this.type;this.render=function(b,E,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===dl&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ia);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(wi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=f!==this.type;H&&E.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(W=>W.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,W=b.length;k<W;k++){let j=b[k],tt=j.shadow;if(tt===void 0){ae("WebGLShadowMap:",j,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let gt=tt.getFrameExtents();s.multiply(gt),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/gt.x),s.x=r.x*gt.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/gt.y),s.y=r.y*gt.y,tt.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=et,tt.map===null||H===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===wr){if(j.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new En(s.x,s.y,{format:hs,type:pi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),tt.map.texture.name=j.name+".shadowMap",tt.map.depthTexture=new ji(s.x,s.y,Zn),tt.map.depthTexture.name=j.name+".shadowMapDepth",tt.map.depthTexture.format=Mi,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=ln,tt.map.depthTexture.magFilter=ln}else j.isPointLight?(tt.map=new sc(s.x),tt.map.depthTexture=new Wo(s.x,fi)):(tt.map=new En(s.x,s.y),tt.map.depthTexture=new ji(s.x,s.y,fi)),tt.map.depthTexture.name=j.name+".shadowMap",tt.map.depthTexture.format=Mi,this.type===Ia?(tt.map.depthTexture.compareFunction=et?ec:tc,tt.map.depthTexture.minFilter=tn,tt.map.depthTexture.magFilter=tn):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=ln,tt.map.depthTexture.magFilter=ln);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==s.x||tt.map.height!==s.y)&&tt.map.setSize(s.x,s.y);let ut=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();j.isPointLight!==!0&&tt.updateMatrices(j,y);for(let ht=0;ht<ut;ht++){let Ft=tt.getCamera(ht);if(j.isPointLight){let wt=tt.camera,ue=tt.matrix,le=j.distance||wt.far;le!==wt.far&&(wt.far=le,wt.updateProjectionMatrix()),Ga.setFromMatrixPosition(j.matrixWorld),wt.position.copy(Ga),Wu.copy(wt.position),Wu.add(Py[ht]),wt.up.copy(ky[ht]),wt.lookAt(Wu),wt.updateMatrixWorld(),ue.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Ef.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(Ef,wt.coordinateSystem,wt.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)i.setRenderTarget(tt.map,ht),i.clear();else{ht===0&&(i.setRenderTarget(tt.map),i.clear());let wt=tt.getViewport(ht);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),O.viewport(a)}n=tt.getFrustum(ht),M(E,y,Ft,j,this.type)}tt.isPointLightShadow!==!0&&this.type===wr&&v(tt,y),tt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,D)};function v(b,E){let y=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new En(s.x,s.y,{format:hs,type:pi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,y,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,y,p,_,null)}function S(b,E,y,T){let P=null,D=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let O=P.uuid,H=E.uuid,k=c[O];k===void 0&&(k={},c[O]=k);let W=k[H];W===void 0&&(W=P.clone(),k[H]=W,E.addEventListener("dispose",A)),P=W}if(P.visible=E.visible,P.wireframe=E.wireframe,T===wr?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=y}return P}function M(b,E,y,T,P){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===wr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let H=t.update(b),k=b.material;if(Array.isArray(k)){let W=H.groups;for(let j=0,tt=W.length;j<tt;j++){let gt=W[j],et=k[gt.materialIndex];if(et&&et.visible){let ut=S(b,et,T,P);b.onBeforeShadow(i,b,E,y,H,ut,gt),i.renderBufferDirect(y,null,H,ut,b,gt),b.onAfterShadow(i,b,E,y,H,ut,gt)}}}else if(k.visible){let W=S(b,k,T,P);b.onBeforeShadow(i,b,E,y,H,W,null),i.renderBufferDirect(y,null,H,W,b,null),b.onAfterShadow(i,b,E,y,H,W,null)}}let O=b.children;for(let H=0,k=O.length;H<k;H++)M(O[H],E,y,T,P)}function A(b){b.target.removeEventListener("dispose",A);for(let y in c){let T=c[y],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Dy(i,t){function e(){let F=!1,Et=new Be,dt=null,Tt=new Be(0,0,0,0);return{setMask:function(Lt){dt!==Lt&&!F&&(i.colorMask(Lt,Lt,Lt,Lt),dt=Lt)},setLocked:function(Lt){F=Lt},setClear:function(Lt,_t,Xt,Ht,Me){Me===!0&&(Lt*=Ht,_t*=Ht,Xt*=Ht),Et.set(Lt,_t,Xt,Ht),Tt.equals(Et)===!1&&(i.clearColor(Lt,_t,Xt,Ht),Tt.copy(Et))},reset:function(){F=!1,dt=null,Tt.set(-1,0,0,0)}}}function n(){let F=!1,Et=!1,dt=null,Tt=null,Lt=null;return{setReversed:function(_t){if(Et!==_t){let Xt=t.get("EXT_clip_control");_t?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Et=_t;let Ht=Lt;Lt=null,this.setClear(Ht)}},getReversed:function(){return Et},setTest:function(_t){_t?ct(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(_t){dt!==_t&&!F&&(i.depthMask(_t),dt=_t)},setFunc:function(_t){if(Et&&(_t=Zd[_t]),Tt!==_t){switch(_t){case Co:i.depthFunc(i.NEVER);break;case Io:i.depthFunc(i.ALWAYS);break;case Po:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=_t}},setLocked:function(_t){F=_t},setClear:function(_t){Lt!==_t&&(Lt=_t,Et&&(_t=1-_t),i.clearDepth(_t))},reset:function(){F=!1,dt=null,Tt=null,Lt=null,Et=!1}}}function s(){let F=!1,Et=null,dt=null,Tt=null,Lt=null,_t=null,Xt=null,Ht=null,Me=null;return{setTest:function(K){F||(K?ct(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(K){Et!==K&&!F&&(i.stencilMask(K),Et=K)},setFunc:function(K,xt,I){(dt!==K||Tt!==xt||Lt!==I)&&(i.stencilFunc(K,xt,I),dt=K,Tt=xt,Lt=I)},setOp:function(K,xt,I){(_t!==K||Xt!==xt||Ht!==I)&&(i.stencilOp(K,xt,I),_t=K,Xt=xt,Ht=I)},setLocked:function(K){F=K},setClear:function(K){Me!==K&&(i.clearStencil(K),Me=K)},reset:function(){F=!1,Et=null,dt=null,Tt=null,Lt=null,_t=null,Xt=null,Ht=null,Me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,v=null,S=null,M=null,A=null,b=null,E=null,y=new Qt(0,0,0),T=0,P=!1,D=null,O=null,H=null,k=null,W=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,gt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(et)[1]),tt=gt>=1):et.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),tt=gt>=2);let ut=null,ht={},Ft=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),ue=new Be().fromArray(Ft),le=new Be().fromArray(wt);function $t(F,Et,dt,Tt){let Lt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(F,_t),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<dt;Xt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Et+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return _t}let it={};it[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(rr),ot(!1),ft(ou),ct(i.CULL_FACE),G(wi);function ct(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Mt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Z(F,Et){return h[F]!==Et?(i.bindFramebuffer(F,Et),h[F]=Et,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Et),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function X(F,Et){let dt=g,Tt=!1;if(F){dt=p.get(Et),dt===void 0&&(dt=[],p.set(Et,dt));let Lt=F.textures;if(dt.length!==Lt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Xt=Lt.length;_t<Xt;_t++)dt[_t]=i.COLOR_ATTACHMENT0+_t;dt.length=Lt.length,Tt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(dt)}function at(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let vt={[Es]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};vt[yd]=i.MIN,vt[vd]=i.MAX;let U={[bd]:i.ZERO,[Md]:i.ONE,[Sd]:i.SRC_COLOR,[uu]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[hu]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function G(F,Et,dt,Tt,Lt,_t,Xt,Ht,Me,K){if(F===wi){m===!0&&(Mt(i.BLEND),m=!1);return}if(m===!1&&(ct(i.BLEND),m=!0),F!==gd){if(F!==f||K!==P){if((v!==Es||A!==Es)&&(i.blendEquation(i.FUNC_ADD),v=Es,A=Es),K)switch(F){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",F);break}else switch(F){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lu:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cu:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",F);break}S=null,M=null,b=null,E=null,y.set(0,0,0),T=0,f=F,P=K}return}Lt=Lt||Et,_t=_t||dt,Xt=Xt||Tt,(Et!==v||Lt!==A)&&(i.blendEquationSeparate(vt[Et],vt[Lt]),v=Et,A=Lt),(dt!==S||Tt!==M||_t!==b||Xt!==E)&&(i.blendFuncSeparate(U[dt],U[Tt],U[_t],U[Xt]),S=dt,M=Tt,b=_t,E=Xt),(Ht.equals(y)===!1||Me!==T)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Me),y.copy(Ht),T=Me),f=F,P=!1}function V(F,Et){F.side===hi?Mt(i.CULL_FACE):ct(i.CULL_FACE);let dt=F.side===dn;Et&&(dt=!dt),ot(dt),F.blending===Ar&&F.transparent===!1?G(wi):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let Tt=F.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Rt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function ft(F){F!==pd?(ct(i.CULL_FACE),F!==O&&(F===ou?i.cullFace(i.BACK):F===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),O=F}function bt(F){F!==H&&(tt&&i.lineWidth(F),H=F)}function Rt(F,Et,dt){F?(ct(i.POLYGON_OFFSET_FILL),(k!==Et||W!==dt)&&(k=Et,W=dt,a.getReversed()&&(Et=-Et),i.polygonOffset(Et,dt))):Mt(i.POLYGON_OFFSET_FILL)}function Ot(F){F?ct(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Bt(F){F===void 0&&(F=i.TEXTURE0+j-1),ut!==F&&(i.activeTexture(F),ut=F)}function L(F,Et,dt){dt===void 0&&(ut===null?dt=i.TEXTURE0+j-1:dt=ut);let Tt=ht[dt];Tt===void 0&&(Tt={type:void 0,texture:void 0},ht[dt]=Tt),(Tt.type!==F||Tt.texture!==Et)&&(ut!==dt&&(i.activeTexture(dt),ut=dt),i.bindTexture(F,Et||it[F]),Tt.type=F,Tt.texture=Et)}function he(){let F=ht[ut];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function x(){try{i.texSubImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function yt(){try{i.texStorage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function St(){try{i.texStorage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function rt(){try{i.texImage2D(...arguments)}catch(F){oe("WebGLState:",F)}}function mt(){try{i.texImage3D(...arguments)}catch(F){oe("WebGLState:",F)}}function Pt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Zt(F,Et){d[F]!==Et&&(i.pixelStorei(F,Et),d[F]=Et)}function Ct(F){ue.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function At(F){le.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),le.copy(F))}function Jt(F,Et){let dt=c.get(Et);dt===void 0&&(dt=new WeakMap,c.set(Et,dt));let Tt=dt.get(F);Tt===void 0&&(Tt=i.getUniformBlockIndex(Et,F.name),dt.set(F,Tt))}function se(F,Et){let Tt=c.get(Et).get(F);l.get(Et)!==Tt&&(i.uniformBlockBinding(Et,Tt,F.__bindingPointIndex),l.set(Et,Tt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ut=null,ht={},h={},p=new WeakMap,g=[],_=null,m=!1,f=null,v=null,S=null,M=null,A=null,b=null,E=null,y=new Qt(0,0,0),T=0,P=!1,D=null,O=null,H=null,k=null,W=null,ue.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Mt,bindFramebuffer:Z,drawBuffers:X,useProgram:at,setBlending:G,setMaterial:V,setFlipSided:ot,setCullFace:ft,setLineWidth:bt,setPolygonOffset:Rt,setScissorTest:Ot,activeTexture:Bt,bindTexture:L,unbindTexture:he,compressedTexImage2D:te,compressedTexImage3D:R,texImage2D:rt,texImage3D:mt,pixelStorei:Zt,getParameter:Pt,updateUBOMapping:Jt,uniformBlockBinding:se,texStorage2D:yt,texStorage3D:St,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:nt,scissor:Ct,viewport:At,reset:re}}function Ny(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap,d=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return g?new OffscreenCanvas(R,x):Qr("canvas")}function m(R,x,z){let q=1,nt=te(R);if((nt.width>z||nt.height>z)&&(q=z/Math.max(nt.width,nt.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let yt=Math.floor(q*nt.width),St=Math.floor(q*nt.height);h===void 0&&(h=_(yt,St));let rt=x?_(yt,St):h;return rt.width=yt,rt.height=St,rt.getContext("2d").drawImage(R,0,0,yt,St),ae("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+yt+"x"+St+")."),rt}else return"data"in R&&ae("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function f(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,x,z,q,nt,yt=!1){if(R!==null){if(i[R]!==void 0)return i[R];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;q&&(St=t.get("EXT_texture_norm16"),St||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=x;if(x===i.RED&&(z===i.FLOAT&&(rt=i.R32F),z===i.HALF_FLOAT&&(rt=i.R16F),z===i.UNSIGNED_BYTE&&(rt=i.R8),z===i.UNSIGNED_SHORT&&St&&(rt=St.R16_EXT),z===i.SHORT&&St&&(rt=St.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.R8UI),z===i.UNSIGNED_SHORT&&(rt=i.R16UI),z===i.UNSIGNED_INT&&(rt=i.R32UI),z===i.BYTE&&(rt=i.R8I),z===i.SHORT&&(rt=i.R16I),z===i.INT&&(rt=i.R32I)),x===i.RG&&(z===i.FLOAT&&(rt=i.RG32F),z===i.HALF_FLOAT&&(rt=i.RG16F),z===i.UNSIGNED_BYTE&&(rt=i.RG8),z===i.UNSIGNED_SHORT&&St&&(rt=St.RG16_EXT),z===i.SHORT&&St&&(rt=St.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RG8UI),z===i.UNSIGNED_SHORT&&(rt=i.RG16UI),z===i.UNSIGNED_INT&&(rt=i.RG32UI),z===i.BYTE&&(rt=i.RG8I),z===i.SHORT&&(rt=i.RG16I),z===i.INT&&(rt=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),z===i.UNSIGNED_INT&&(rt=i.RGB32UI),z===i.BYTE&&(rt=i.RGB8I),z===i.SHORT&&(rt=i.RGB16I),z===i.INT&&(rt=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),z===i.UNSIGNED_INT&&(rt=i.RGBA32UI),z===i.BYTE&&(rt=i.RGBA8I),z===i.SHORT&&(rt=i.RGBA16I),z===i.INT&&(rt=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&St&&(rt=St.RGB16_EXT),z===i.SHORT&&St&&(rt=St.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),x===i.RGBA){let mt=yt?jr:ye.getTransfer(nt);z===i.FLOAT&&(rt=i.RGBA32F),z===i.HALF_FLOAT&&(rt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(rt=mt===Re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&St&&(rt=St.RGBA16_EXT),z===i.SHORT&&St&&(rt=St.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function A(R,x){let z;return R?x===null||x===fi||x===Tr?z=i.DEPTH24_STENCIL8:x===Zn?z=i.DEPTH32F_STENCIL8:x===Er&&(z=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===Tr?z=i.DEPTH_COMPONENT24:x===Zn?z=i.DEPTH_COMPONENT32F:x===Er&&(z=i.DEPTH_COMPONENT16),z}function b(R,x){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function E(R){let x=R.target;x.removeEventListener("dispose",E),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function y(R){let x=R.target;x.removeEventListener("dispose",y),D(x)}function T(R){let x=n.get(R);if(x.__webglInit===void 0)return;let z=R.source,q=p.get(z);if(q){let nt=q[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(R),Object.keys(q).length===0&&p.delete(z)}n.remove(R)}function P(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let z=R.source,q=p.get(z);delete q[x.__cacheKey],a.memory.textures--}function D(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let nt=0;nt<x.__webglFramebuffer[q].length;nt++)i.deleteFramebuffer(x.__webglFramebuffer[q][nt]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=R.textures;for(let q=0,nt=z.length;q<nt;q++){let yt=n.get(z[q]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(R)}let O=0;function H(){O=0}function k(){return O}function W(R){O=R}function j(){let R=O;return R>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function tt(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function gt(R,x){let z=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let q=R.image;if(q===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(z,R,x);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function et(R,x){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Mt(z,R,x);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function ut(R,x){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Mt(z,R,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function ht(R,x){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Z(z,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let Ft={[ar]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Uo]:i.MIRRORED_REPEAT},wt={[ln]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[La]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},ue={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Vd]:i.LESS,[tc]:i.LEQUAL,[Gd]:i.EQUAL,[ec]:i.GEQUAL,[Hd]:i.GREATER,[Wd]:i.NOTEQUAL};function le(R,x){if(x.type===Zn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===gl||x.magFilter===La||x.magFilter===Ai||x.minFilter===tn||x.minFilter===gl||x.minFilter===La||x.minFilter===Ai)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ft[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ft[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ft[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,wt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,wt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==La&&x.minFilter!==Ai||x.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(R,x){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",E));let q=x.source,nt=p.get(q);nt===void 0&&(nt={},p.set(q,nt));let yt=tt(x);if(yt!==R.__cacheKey){nt[yt]===void 0&&(nt[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),nt[yt].usedTimes++;let St=nt[R.__cacheKey];St!==void 0&&(nt[R.__cacheKey].usedTimes--,St.usedTimes===0&&P(x)),R.__cacheKey=yt,R.__webglTexture=nt[yt].texture}return z}function it(R,x,z){return Math.floor(Math.floor(R/z)/x)}function ct(R,x,z,q){let yt=R.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,q,x.data);else{yt.sort((Zt,Ct)=>Zt.start-Ct.start);let St=0;for(let Zt=1;Zt<yt.length;Zt++){let Ct=yt[St],At=yt[Zt],Jt=Ct.start+Ct.count,se=it(At.start,x.width,4),re=it(Ct.start,x.width,4);At.start<=Jt+1&&se===re&&it(At.start+At.count-1,x.width,4)===se?Ct.count=Math.max(Ct.count,At.start+At.count-Ct.start):(++St,yt[St]=At)}yt.length=St+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Zt=0,Ct=yt.length;Zt<Ct;Zt++){let At=yt[Zt],Jt=Math.floor(At.start/4),se=Math.ceil(At.count/4),re=Jt%x.width,F=Math.floor(Jt/x.width),Et=se,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,re,F,Et,dt,z,q,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Mt(R,x,z){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);let nt=$t(R,x),yt=x.source;e.bindTexture(q,R.__webglTexture,i.TEXTURE0+z);let St=n.get(yt);if(yt.version!==St.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let dt=ye.getPrimaries(ye.workingColorSpace),Tt=x.colorSpace===mi?null:ye.getPrimaries(x.colorSpace),Lt=x.colorSpace===mi||dt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let mt=m(x.image,!1,s.maxTextureSize);mt=he(x,mt);let Pt=r.convert(x.format,x.colorSpace),Zt=r.convert(x.type),Ct=M(x.internalFormat,Pt,Zt,x.normalized,x.colorSpace,x.isVideoTexture);le(q,x);let At,Jt=x.mipmaps,se=x.isVideoTexture!==!0,re=St.__version===void 0||nt===!0,F=yt.dataReady,Et=b(x,mt);if(x.isDepthTexture)Ct=A(x.format===us,x.type),re&&(se?e.texStorage2D(i.TEXTURE_2D,1,Ct,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,mt.width,mt.height,0,Pt,Zt,null));else if(x.isDataTexture)if(Jt.length>0){se&&re&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,Jt[0].width,Jt[0].height);for(let dt=0,Tt=Jt.length;dt<Tt;dt++)At=Jt[dt],se?F&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At.width,At.height,Pt,Zt,At.data):e.texImage2D(i.TEXTURE_2D,dt,Ct,At.width,At.height,0,Pt,Zt,At.data);x.generateMipmaps=!1}else se?(re&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,mt.width,mt.height),F&&ct(x,mt,Pt,Zt)):e.texImage2D(i.TEXTURE_2D,0,Ct,mt.width,mt.height,0,Pt,Zt,mt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,Jt[0].width,Jt[0].height,mt.depth);for(let dt=0,Tt=Jt.length;dt<Tt;dt++)if(At=Jt[dt],x.format!==$n)if(Pt!==null)if(se){if(F)if(x.layerUpdates.size>0){let Lt=Lu(At.width,At.height,x.format,x.type);for(let _t of x.layerUpdates){let Xt=At.data.subarray(_t*Lt/At.data.BYTES_PER_ELEMENT,(_t+1)*Lt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,_t,At.width,At.height,1,Pt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,At.width,At.height,mt.depth,Pt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ct,At.width,At.height,mt.depth,0,At.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,At.width,At.height,mt.depth,Pt,Zt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ct,At.width,At.height,mt.depth,0,Pt,Zt,At.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&re&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,Jt[0].width,Jt[0].height);for(let dt=0,Tt=Jt.length;dt<Tt;dt++)At=Jt[dt],x.format!==$n?Pt!==null?se?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ct,At.width,At.height,0,At.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?F&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At.width,At.height,Pt,Zt,At.data):e.texImage2D(i.TEXTURE_2D,dt,Ct,At.width,At.height,0,Pt,Zt,At.data)}else if(x.isDataArrayTexture)if(se){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,mt.width,mt.height,mt.depth),F)if(x.layerUpdates.size>0){let dt=Lu(mt.width,mt.height,x.format,x.type);for(let Tt of x.layerUpdates){let Lt=mt.data.subarray(Tt*dt/mt.data.BYTES_PER_ELEMENT,(Tt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,mt.width,mt.height,1,Pt,Zt,Lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Pt,Zt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,mt.width,mt.height,mt.depth,0,Pt,Zt,mt.data);else if(x.isData3DTexture)se?(re&&e.texStorage3D(i.TEXTURE_3D,Et,Ct,mt.width,mt.height,mt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Pt,Zt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,mt.width,mt.height,mt.depth,0,Pt,Zt,mt.data);else if(x.isFramebufferTexture){if(re)if(se)e.texStorage2D(i.TEXTURE_2D,Et,Ct,mt.width,mt.height);else{let dt=mt.width,Tt=mt.height;for(let Lt=0;Lt<Et;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Ct,dt,Tt,0,Pt,Zt,null),dt>>=1,Tt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),mt.parentNode!==dt){dt.appendChild(mt),d.add(x),dt.onpaint=Tt=>{let Lt=Tt.changedElements;for(let _t of d)Lt.includes(_t.image)&&(_t.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let Lt=i.RGBA,_t=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Lt,_t,Xt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(se&&re){let dt=te(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Ct,dt.width,dt.height)}for(let dt=0,Tt=Jt.length;dt<Tt;dt++)At=Jt[dt],se?F&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Pt,Zt,At):e.texImage2D(i.TEXTURE_2D,dt,Ct,Pt,Zt,At);x.generateMipmaps=!1}else if(se){if(re){let dt=te(mt);e.texStorage2D(i.TEXTURE_2D,Et,Ct,dt.width,dt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Zt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,Pt,Zt,mt);f(x)&&v(q),St.__version=yt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Z(R,x,z){if(x.image.length!==6)return;let q=$t(R,x),nt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let yt=n.get(nt);if(nt.version!==yt.__version||q===!0){e.activeTexture(i.TEXTURE0+z);let St=ye.getPrimaries(ye.workingColorSpace),rt=x.colorSpace===mi?null:ye.getPrimaries(x.colorSpace),mt=x.colorSpace===mi||St===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Pt=x.isCompressedTexture||x.image[0].isCompressedTexture,Zt=x.image[0]&&x.image[0].isDataTexture,Ct=[];for(let _t=0;_t<6;_t++)!Pt&&!Zt?Ct[_t]=m(x.image[_t],!0,s.maxCubemapSize):Ct[_t]=Zt?x.image[_t].image:x.image[_t],Ct[_t]=he(x,Ct[_t]);let At=Ct[0],Jt=r.convert(x.format,x.colorSpace),se=r.convert(x.type),re=M(x.internalFormat,Jt,se,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,Et=yt.__version===void 0||q===!0,dt=nt.dataReady,Tt=b(x,At);le(i.TEXTURE_CUBE_MAP,x);let Lt;if(Pt){F&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,re,At.width,At.height);for(let _t=0;_t<6;_t++){Lt=Ct[_t].mipmaps;for(let Xt=0;Xt<Lt.length;Xt++){let Ht=Lt[Xt];x.format!==$n?Jt!==null?F?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt,0,0,Ht.width,Ht.height,Jt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt,re,Ht.width,Ht.height,0,Ht.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt,0,0,Ht.width,Ht.height,Jt,se,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt,re,Ht.width,Ht.height,0,Jt,se,Ht.data)}}}else{if(Lt=x.mipmaps,F&&Et){Lt.length>0&&Tt++;let _t=te(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Zt){F?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ct[_t].width,Ct[_t].height,Jt,se,Ct[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Ct[_t].width,Ct[_t].height,0,Jt,se,Ct[_t].data);for(let Xt=0;Xt<Lt.length;Xt++){let Me=Lt[Xt].image[_t].image;F?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt+1,0,0,Me.width,Me.height,Jt,se,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt+1,re,Me.width,Me.height,0,Jt,se,Me.data)}}else{F?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Jt,se,Ct[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Jt,se,Ct[_t]);for(let Xt=0;Xt<Lt.length;Xt++){let Ht=Lt[Xt];F?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt+1,0,0,Jt,se,Ht.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Xt+1,re,Jt,se,Ht.image[_t])}}}f(x)&&v(i.TEXTURE_CUBE_MAP),yt.__version=nt.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function X(R,x,z,q,nt,yt){let St=r.convert(z.format,z.colorSpace),rt=r.convert(z.type),mt=M(z.internalFormat,St,rt,z.normalized,z.colorSpace),Pt=n.get(x),Zt=n.get(z);if(Zt.__renderTarget=x,!Pt.__hasExternalTextures){let Ct=Math.max(1,x.width>>yt),At=Math.max(1,x.height>>yt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,yt,mt,Ct,At,x.depth,0,St,rt,null):e.texImage2D(nt,yt,mt,Ct,At,0,St,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,nt,Zt.__webglTexture,0,Ot(x)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,nt,Zt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let q=x.depthTexture,nt=q&&q.isDepthTexture?q.type:null,yt=A(x.stencilBuffer,nt),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(x),yt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(x),yt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,yt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{let q=x.textures;for(let nt=0;nt<q.length;nt++){let yt=q[nt],St=r.convert(yt.format,yt.colorSpace),rt=r.convert(yt.type),mt=M(yt.internalFormat,St,rt,yt.normalized,yt.colorSpace);Bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(x),mt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(x),mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(R,x,z){let q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(x.depthTexture);if(nt.__renderTarget=x,(!nt.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),le(i.TEXTURE_CUBE_MAP,x.depthTexture);let Pt=r.convert(x.depthTexture.format),Zt=r.convert(x.depthTexture.type),Ct;x.depthTexture.format===Mi?Ct=i.DEPTH_COMPONENT24:x.depthTexture.format===us&&(Ct=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Ct,x.width,x.height,0,Pt,Zt,null)}}else gt(x.depthTexture,0);let yt=nt.__webglTexture,St=Ot(x),rt=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,mt=x.depthTexture.format===us?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Mi)Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,rt,yt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,mt,rt,yt,0);else if(x.depthTexture.format===us)Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,rt,yt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,mt,rt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(R){let x=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){let nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",nt)};q.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=q}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)vt(x.__webglFramebuffer[q],R,q);else{let q=R.texture.mipmaps;q&&q.length>0?vt(x.__webglFramebuffer[0],R,0):vt(x.__webglFramebuffer,R,0)}else if(z){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),at(x.__webglDepthbuffer[q],R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,yt)}}else{let q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(R,x,z){let q=n.get(R);x!==void 0&&X(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&U(R)}function V(R){let x=R.texture,z=n.get(R),q=n.get(x);R.addEventListener("dispose",y);let nt=R.textures,yt=R.isWebGLCubeRenderTarget===!0,St=nt.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),yt){z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[rt]=[];for(let mt=0;mt<x.mipmaps.length;mt++)z.__webglFramebuffer[rt][mt]=i.createFramebuffer()}else z.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)z.__webglFramebuffer[rt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(St)for(let rt=0,mt=nt.length;rt<mt;rt++){let Pt=n.get(nt[rt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Bt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let rt=0;rt<nt.length;rt++){let mt=nt[rt];z.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[rt]);let Pt=r.convert(mt.format,mt.colorSpace),Zt=r.convert(mt.type),Ct=M(mt.internalFormat,Pt,Zt,mt.normalized,mt.colorSpace,R.isXRRenderTarget===!0),At=Ot(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,z.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),at(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),le(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)X(z.__webglFramebuffer[rt][mt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt);else X(z.__webglFramebuffer[rt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);f(x)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let rt=0,mt=nt.length;rt<mt;rt++){let Pt=nt[rt],Zt=n.get(Pt),Ct=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Zt.__webglTexture),le(Ct,Pt),X(z.__webglFramebuffer,R,Pt,i.COLOR_ATTACHMENT0+rt,Ct,0),f(Pt)&&v(Ct)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),le(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)X(z.__webglFramebuffer[mt],R,x,i.COLOR_ATTACHMENT0,rt,mt);else X(z.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,rt,0);f(x)&&v(rt),e.unbindTexture()}R.depthBuffer&&U(R)}function ot(R){let x=R.textures;for(let z=0,q=x.length;z<q;z++){let nt=x[z];if(f(nt)){let yt=S(R),St=n.get(nt).__webglTexture;e.bindTexture(yt,St),v(yt),e.unbindTexture()}}}let ft=[],bt=[];function Rt(R){if(R.samples>0){if(Bt(R)===!1){let x=R.textures,z=R.width,q=R.height,nt=i.COLOR_BUFFER_BIT,yt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),rt=x.length>1;if(rt)for(let Pt=0;Pt<x.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let mt=R.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Pt=0;Pt<x.length;Pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let Zt=n.get(x[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,nt,i.NEAREST),l===!0&&(ft.length=0,bt.length=0,ft.push(i.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ft.push(yt),bt.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Pt=0;Pt<x.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let Zt=n.get(x[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ot(R){return Math.min(s.maxSamples,R.samples)}function Bt(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(R){let x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function he(R,x){let z=R.colorSpace,q=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Jr&&z!==mi&&(ye.getTransfer(z)===Re?(q!==$n||nt!==Tn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",z)),x}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.getTextureUnits=k,this.setTextureUnits=W,this.setTexture2D=gt,this.setTexture2DArray=et,this.setTexture3D=ut,this.setTextureCube=ht,this.rebindTextures=G,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Uy(i,t){function e(n,s=mi){let r,a=ye.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yu)return i.BYTE;if(n===vu)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===wu)return i.RGB;if(n===$n)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Da||n===Na||n===Ua||n===Fa)if(a===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Al||n===El||n===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Il||n===Pl||n===kl||n===Oa||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return a===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pl)return r.COMPRESSED_R11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Yl||n===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ol)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Zl||n===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kl)return a===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===jl||n===Ba||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
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

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new la(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:Fy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qu=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new ju,f={},v=e.getContextAttributes(),S=null,M=null,A=[],b=[],E=new lt,y=null,T=null,P=new hn;P.viewport=new Be;let D=new hn;D.viewport=new Be;let O=[P,D],H=new ul,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=A[it];return ct===void 0&&(ct=new dr,A[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=A[it];return ct===void 0&&(ct=new dr,A[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=A[it];return ct===void 0&&(ct=new dr,A[it]=ct),ct.getHandSpace()};function j(it){let ct=b.indexOf(it.inputSource);if(ct===-1)return;let Mt=A[ct];Mt!==void 0&&(Mt.update(it.inputSource,it.frame,c||a),Mt.dispatchEvent({type:it.type,data:it.inputSource}))}function tt(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",gt);for(let it=0;it<A.length;it++){let ct=b[it];ct!==null&&(b[it]=null,A[it].disconnect(ct))}k=null,W=null,m.reset();for(let it in f)delete f[it];if(t.setRenderTarget(S),p=null,h=null,d=null,s=null,M=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),T!==null){let it=T.camera;it.fov=T.fov,it.zoom=T.zoom,it.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",gt),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Z=null,X=null;v.depth&&(X=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=v.stencil?us:Mi,Z=v.stencil?Tr:fi);let at={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(at),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new En(h.textureWidth,h.textureHeight,{format:$n,type:Tn,depthTexture:new ji(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new En(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function gt(it){for(let ct=0;ct<it.removed.length;ct++){let Mt=it.removed[ct],Z=b.indexOf(Mt);Z>=0&&(b[Z]=null,A[Z].disconnect(Mt))}for(let ct=0;ct<it.added.length;ct++){let Mt=it.added[ct],Z=b.indexOf(Mt);if(Z===-1){for(let at=0;at<A.length;at++)if(at>=b.length){b.push(Mt),Z=at;break}else if(b[at]===null){b[at]=Mt,Z=at;break}if(Z===-1)break}let X=A[Z];X&&X.connect(Mt)}}let et=new C,ut=new C;function ht(it,ct,Mt){et.setFromMatrixPosition(ct.matrixWorld),ut.setFromMatrixPosition(Mt.matrixWorld);let Z=et.distanceTo(ut),X=ct.projectionMatrix.elements,at=Mt.projectionMatrix.elements,vt=X[14]/(X[10]-1),U=X[14]/(X[10]+1),G=(X[9]+1)/X[5],V=(X[9]-1)/X[5],ot=(X[8]-1)/X[0],ft=(at[8]+1)/at[0],bt=vt*ot,Rt=vt*ft,Ot=Z/(-ot+ft),Bt=Ot*-ot;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Bt),it.translateZ(Ot),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),X[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let L=vt+Ot,he=U+Ot,te=bt-Bt,R=Rt+(Z-Bt),x=G*U/he*L,z=V*U/he*L;it.projectionMatrix.makePerspective(te,R,x,z,L,he),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Ft(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ct=it.near,Mt=it.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),H.near=D.near=P.near=ct,H.far=D.far=P.far=Mt,(k!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,W=H.far),H.layers.mask=it.layers.mask|6,P.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let Z=it.parent,X=H.cameras;Ft(H,Z);for(let at=0;at<X.length;at++)Ft(X[at],Z);X.length===2?ht(H,P,D):H.projectionMatrix.copy(P.projectionMatrix),T===null&&it.isPerspectiveCamera&&(T={camera:it,fov:it.fov,zoom:it.zoom}),wt(it,H,Z)};function wt(it,ct,Mt){Mt===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(Mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=cr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(it){l=it,h!==null&&(h.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(it){return f[it]};let ue=null;function le(it,ct){if(u=ct.getViewerPose(c||a),g=ct,u!==null){let Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Z=!1;Mt.length!==H.cameras.length&&(H.cameras.length=0,Z=!0);for(let U=0;U<Mt.length;U++){let G=Mt[U],V=null;if(p!==null)V=p.getViewport(G);else{let ft=d.getViewSubImage(h,G);V=ft.viewport,U===0&&(t.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(M))}let ot=O[U];ot===void 0&&(ot=new hn,ot.layers.enable(U),ot.viewport=new Be,O[U]=ot),ot.matrix.fromArray(G.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(G.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(V.x,V.y,V.width,V.height),U===0&&(H.matrix.copy(ot.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Z===!0&&H.cameras.push(ot)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let U=d.getDepthInformation(Mt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(X&&X.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let U=0;U<Mt.length;U++){let G=Mt[U].camera;if(G){let V=f[G];V||(V=new la,f[G]=V);let ot=d.getCameraImage(G);V.sourceTexture=ot}}}}for(let Mt=0;Mt<A.length;Mt++){let Z=b[Mt],X=A[Mt];Z!==null&&X!==void 0&&X.update(Z,ct,c||a)}ue&&ue(it,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let $t=new Tf;$t.setAnimationLoop(le),this.setAnimationLoop=function(it){ue=it},this.dispose=function(){}}},By=new ve,Lf=new fe;Lf.set(-1,0,0,0,1,0,0,0,1);function zy(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Iu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,S,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f),S=v.envMap,M=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){let b=A.program;n.uniformBlockBinding(M,b)}function c(M,A){let b=s[M.id];b===void 0&&(m(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",v));let E=A.program;n.updateUBOMapping(M,E);let y=t.render.frame;r[M.id]!==y&&(h(M),r[M.id]=y)}function u(M){let A=d();M.__bindingPointIndex=A;let b=i.createBuffer(),E=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let A=s[M.id],b=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,T=b.length;y<T;y++){let P=b[y];if(Array.isArray(P))for(let D=0,O=P.length;D<O;D++)p(P[D],y,D,E);else p(P,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,A,b,E){if(_(M,A,b,E)===!0){let y=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let D=0;D<T.length;D++){let O=T[D],H=f(O);g(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,A,b){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,b)}function _(M,A,b,E){let y=M.value,T=A+"_"+b;if(E[T]===void 0)return typeof y=="number"||typeof y=="boolean"?E[T]=y:ArrayBuffer.isView(y)?E[T]=y.slice():E[T]=y.clone(),!0;{let P=E[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return E[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(M){let A=M.uniforms,b=0,E=16;for(let T=0,P=A.length;T<P;T++){let D=Array.isArray(A[T])?A[T]:[A[T]];for(let O=0,H=D.length;O<H;O++){let k=D[O],W=Array.isArray(k.value)?k.value:[k.value];for(let j=0,tt=W.length;j<tt;j++){let gt=W[j],et=f(gt),ut=b%E,ht=ut%et.boundary,Ft=ut+ht;b+=ht,Ft!==0&&E-Ft<et.storage&&(b+=E-Ft),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=et.storage}}}let y=b%E;return y>0&&(b+=E-y),M.__size=b,M.__cache={},this}function f(M){let A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",M),A}function v(M){let A=M.target;A.removeEventListener("dispose",v);let b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function S(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var Gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function Hy(){return Ei===null&&(Ei=new ra(Gy,16,16,hs,pi),Ei.name="DFG_LUT",Ei.minFilter=tn,Ei.magFilter=tn,Ei.wrapS=vi,Ei.wrapT=vi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var rc=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=p,m=new Set([Sl,Ml,bl]),f=new Set([Tn,fi,Er,Tr,xl,yl]),v=new Uint32Array(4),S=new Int32Array(4),M=new C,A=null,b=null,E=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,O=null,H=null,k=null,W=null;this._outputColorSpace=Qe;let j=0,tt=0,gt=null,et=-1,ut=null,ht=new Be,Ft=new Be,wt=null,ue=new Qt(0),le=0,$t=e.width,it=e.height,ct=1,Mt=null,Z=null,X=new Be(0,0,$t,it),at=new Be(0,0,$t,it),vt=!1,U=new gr,G=!1,V=!1,ot=new ve,ft=new C,bt=new Be,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function Bt(){return gt===null?ct:1}let L=n;function he(w,N){return e.getContext(w,N)}let te,R,x,z,q,nt,yt,St,rt,mt,Pt,Zt,Ct,At,Jt,se,re,F,Et,dt,Tt,Lt,_t;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){let N="webgl2";if(L=he(N,w),L===null)throw he(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(w){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),oe("WebGLRenderer: "+w.message),w}function Xt(){te=new $_(L),te.init(),Tt=new Uy(L,te),R=new z_(L,te,t,Tt),x=new Dy(L,te),R.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),H=L.createFramebuffer(),k=L.createFramebuffer(),W=L.createFramebuffer(),z=new Q_(L),q=new vy,nt=new Ny(L,te,x,q,R,Tt,z),yt=new Z_(P),St=new eg(L),Lt=new O_(L,St),rt=new J_(L,St,z,Lt),mt=new ex(L,rt,St,Lt,z),F=new tx(L,R,nt),Jt=new V_(q),Pt=new yy(P,yt,te,R,Lt,Jt),Zt=new zy(P,q),Ct=new My,At=new Ry(te),re=new F_(P,yt,x,mt,g,l),se=new Ly(P,mt,R),_t=new Vy(L,z,R,x),Et=new B_(L,te,z),dt=new j_(L,te,z),z.programs=Pt.programs,P.capabilities=R,P.extensions=te,P.properties=q,P.renderLists=Ct,P.shadowMap=se,P.state=x,P.info=z}_!==Tn&&(T=new ix(_,e.width,e.height,o,s,r));let Ht=new Qu(P,L);this.xr=Ht,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(w){w!==void 0&&(ct=w,this.setSize($t,it,!1))},this.getSize=function(w){return w.set($t,it)},this.setSize=function(w,N,J=!0){if(Ht.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=w,it=N,e.width=Math.floor(w*ct),e.height=Math.floor(N*ct),J===!0&&(e.style.width=w+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($t*ct,it*ct).floor()},this.setDrawingBufferSize=function(w,N,J){$t=w,it=N,ct=J,e.width=Math.floor(w*J),e.height=Math.floor(N*J),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(_===Tn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ht)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,N,J,$){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,N,J,$),x.viewport(ht.copy(X).multiplyScalar(ct).round())},this.getScissor=function(w){return w.copy(at)},this.setScissor=function(w,N,J,$){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,N,J,$),x.scissor(Ft.copy(at).multiplyScalar(ct).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(w){x.setScissorTest(vt=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,J=!0){let $=0;if(w){let Y=!1;if(gt!==null){let kt=gt.texture.format;Y=m.has(kt)}if(Y){let kt=gt.texture.type,Wt=f.has(kt),Nt=re.getClearColor(),qt=re.getClearAlpha(),ee=Nt.r,me=Nt.g,xe=Nt.b;Wt?(v[0]=ee,v[1]=me,v[2]=xe,v[3]=qt,L.clearBufferuiv(L.COLOR,0,v)):(S[0]=ee,S[1]=me,S[2]=xe,S[3]=qt,L.clearBufferiv(L.COLOR,0,S))}else $|=L.COLOR_BUFFER_BIT}N&&($|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),re.dispose(),Ct.dispose(),At.dispose(),q.dispose(),yt.dispose(),mt.dispose(),Lt.dispose(),_t.dispose(),Pt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Vt),Ht.removeEventListener("sessionend",ie),ce.stop()};function Me(w){w.preventDefault(),ta("WebGLRenderer: Context Lost."),D=!0}function K(){ta("WebGLRenderer: Context Restored."),D=!1;let w=z.autoReset,N=se.enabled,J=se.autoUpdate,$=se.needsUpdate,Y=se.type;Xt(),z.autoReset=w,se.enabled=N,se.autoUpdate=J,se.needsUpdate=$,se.type=Y}function xt(w){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function I(w){let N=w.target;N.removeEventListener("dispose",I),B(N)}function B(w){Q(w),q.remove(w)}function Q(w){let N=q.get(w).programs;N!==void 0&&(N.forEach(function(J){Pt.releaseProgram(J)}),w.isShaderMaterial&&Pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,J,$,Y,kt){N===null&&(N=Rt);let Wt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Nt=bc(w,N,J,$,Y);x.setMaterial($,Wt);let qt=J.index,ee=1;if($.wireframe===!0){if(qt=rt.getWireframeAttribute(J),qt===void 0)return;ee=2}let me=J.drawRange,xe=J.attributes.position,jt=me.start*ee,Te=(me.start+me.count)*ee;kt!==null&&(jt=Math.max(jt,kt.start*ee),Te=Math.min(Te,(kt.start+kt.count)*ee)),qt!==null?(jt=Math.max(jt,0),Te=Math.min(Te,qt.count)):xe!=null&&(jt=Math.max(jt,0),Te=Math.min(Te,xe.count));let Ke=Te-jt;if(Ke<0||Ke===1/0)return;Lt.setup(Y,$,Nt,J,qt);let Ne,Le=Et;if(qt!==null&&(Ne=St.get(qt),Le=dt,Le.setIndex(Ne)),Y.isMesh)$.wireframe===!0?(x.setLineWidth($.wireframeLinewidth*Bt()),Le.setMode(L.LINES)):Le.setMode(L.TRIANGLES);else if(Y.isLine){let pn=$.linewidth;pn===void 0&&(pn=1),x.setLineWidth(pn*Bt()),Y.isLineSegments?Le.setMode(L.LINES):Y.isLineLoop?Le.setMode(L.LINE_LOOP):Le.setMode(L.LINE_STRIP)}else Y.isPoints?Le.setMode(L.POINTS):Y.isSprite&&Le.setMode(L.TRIANGLES);if(Y.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Le.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let pn=Y._multiDrawStarts,Kt=Y._multiDrawCounts,vn=Y._multiDrawCount,Ee=qt?St.get(qt).bytesPerElement:1,Xn=q.get($).currentProgram.getUniforms();for(let _i=0;_i<vn;_i++)Xn.setValue(L,"_gl_DrawID",_i),Le.render(pn[_i]/Ee,Kt[_i])}else if(Y.isInstancedMesh)Le.renderInstances(jt,Ke,Y.count);else if(J.isInstancedBufferGeometry){let pn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Kt=Math.min(J.instanceCount,pn);Le.renderInstances(jt,Ke,Kt)}else Le.render(jt,Ke)};function pt(w,N,J,$){O!==null&&w.isNodeMaterial&&O.setObject($,w),G===!0&&Jt.setState(w,J,!1),w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,Je(w,N,$),w.side=ls,w.needsUpdate=!0,Je(w,N,$),w.side=hi):Je(w,N,$)}this.compile=function(w,N,J=null){J===null&&(J=w),O!==null&&O.renderStart(w,N,J),b=At.get(J),b.init(N),y.push(b),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),w!==J&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),V=this.localClippingEnabled,G=Jt.init(this.clippingPlanes,V),G===!0&&Jt.setGlobalState(this.clippingPlanes,N),O!==null&&se.render(b.state.shadowsArray,J,N);let $=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let kt=Y.material;if(kt)if(Array.isArray(kt))for(let Wt=0;Wt<kt.length;Wt++){let Nt=kt[Wt];pt(Nt,J,N,Y),$.add(Nt)}else pt(kt,J,N,Y),$.add(kt)}),b=y.pop(),O!==null&&O.renderEnd(),$},this.compileAsync=function(w,N,J=null){let $=this.compile(w,N,J);return new Promise(Y=>{function kt(){if($.forEach(function(Wt){let qt=q.get(Wt).currentProgram;(qt===void 0||qt.isReady())&&$.delete(Wt)}),$.size===0){Y(w);return}setTimeout(kt,10)}te.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let st=null;function Yt(w){st&&st(w)}function Vt(){ce.stop()}function ie(){ce.start()}let ce=new Tf;ce.setAnimationLoop(Yt),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(w){st=w,Ht.setAnimationLoop(w),w===null?ce.stop():ce.start()},Ht.addEventListener("sessionstart",Vt),Ht.addEventListener("sessionend",ie),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(w,N);let J=Ht.enabled===!0&&Ht.isPresenting===!0,$=T!==null&&(gt===null||J)&&T.begin(P,gt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(N),N=Ht.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,N,gt),b=At.get(w,y.length),b.init(N),b.state.textureUnits=nt.getTextureUnits(),y.push(b),ot.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),U.setFromProjectionMatrix(ot,ri,N.reversedDepth),V=this.localClippingEnabled,G=Jt.init(this.clippingPlanes,V),A=Ct.get(w,E.length),A.init(),E.push(A),Ht.enabled===!0&&Ht.isPresenting===!0){let Wt=P.xr.getDepthSensingMesh();Wt!==null&&de(Wt,N,-1/0,P.sortObjects)}de(w,N,0,P.sortObjects),A.finish(),O!==null&&O.updateLights(b.state.lightsArray),P.sortObjects===!0&&A.sort(Mt,Z),Ot=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Ot&&re.addToRenderList(A,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&Jt.beginShadows();let Y=b.state.shadowsArray;if(se.render(Y,w,N),G===!0&&Jt.endShadows(),($&&T.hasRenderPass())===!1){let Wt=A.opaque,Nt=A.transmissive;if(b.setupLights(),N.isArrayCamera){let qt=N.cameras;if(Nt.length>0)for(let ee=0,me=qt.length;ee<me;ee++){let xe=qt[ee];qe(Wt,Nt,w,xe)}Ot&&re.render(w);for(let ee=0,me=qt.length;ee<me;ee++){let xe=qt[ee];Ae(A,w,xe,xe.viewport)}}else Nt.length>0&&qe(Wt,Nt,w,N),Ot&&re.render(w),Ae(A,w,N)}gt!==null&&tt===0&&(nt.updateMultisampleRenderTarget(gt),nt.updateRenderTargetMipmap(gt)),$&&T.end(P),w.isScene===!0&&w.onAfterRender(P,w,N),Lt.resetDefaultState(),et=-1,ut=null,y.pop(),y.length>0?(b=y[y.length-1],nt.setTextureUnits(b.state.textureUnits),G===!0&&Jt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,O!==null&&O.renderEnd()};function de(w,N,J,$){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(U)){$&&bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);let Wt=mt.update(w),Nt=w.material;Nt.visible&&A.push(w,Wt,Nt,J,bt.z,null,N)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(U))){let Wt=mt.update(w),Nt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),bt.copy(w.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),bt.copy(Wt.boundingSphere.center)),bt.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(Nt)){let qt=Wt.groups;for(let ee=0,me=qt.length;ee<me;ee++){let xe=qt[ee],jt=Nt[xe.materialIndex];jt&&jt.visible&&A.push(w,Wt,jt,J,bt.z,xe,N)}}else Nt.visible&&A.push(w,Wt,Nt,J,bt.z,null,N)}}let kt=w.children;for(let Wt=0,Nt=kt.length;Wt<Nt;Wt++)de(kt[Wt],N,J,$)}function Ae(w,N,J,$){let{opaque:Y,transmissive:kt,transparent:Wt}=w;b.setupLightsView(J),G===!0&&Jt.setGlobalState(P.clippingPlanes,J),$&&x.viewport(ht.copy($)),Y.length>0&&Fe(Y,N,J),kt.length>0&&Fe(kt,N,J),Wt.length>0&&Fe(Wt,N,J),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function qe(w,N,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[$.id]===void 0){let jt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[$.id]=new En(1,1,{generateMipmaps:!0,type:jt?pi:Tn,minFilter:Ai,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let kt=b.state.transmissionRenderTarget[$.id],Wt=$.viewport||ht;kt.setSize(Wt.z*P.transmissionResolutionScale,Wt.w*P.transmissionResolutionScale);let Nt=P.getRenderTarget(),qt=P.getActiveCubeFace(),ee=P.getActiveMipmapLevel();P.setRenderTarget(kt),P.getClearColor(ue),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),Ot&&re.render(J);let me=P.toneMapping;P.toneMapping=di;let xe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),G===!0&&Jt.setGlobalState(P.clippingPlanes,$),Fe(w,J,$),nt.updateMultisampleRenderTarget(kt),nt.updateRenderTargetMipmap(kt),te.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Te=0,Ke=N.length;Te<Ke;Te++){let Ne=N[Te],{object:Le,geometry:pn,material:Kt,group:vn}=Ne;if(Kt.side===hi&&Le.layers.test($.layers)){let Ee=Kt.side;Kt.side=dn,Kt.needsUpdate=!0,Sn(Le,J,$,pn,Kt,vn),Kt.side=Ee,Kt.needsUpdate=!0,jt=!0}}jt===!0&&(nt.updateMultisampleRenderTarget(kt),nt.updateRenderTargetMipmap(kt))}P.setRenderTarget(Nt,qt,ee),P.setClearColor(ue,le),xe!==void 0&&($.viewport=xe),P.toneMapping=me}function Fe(w,N,J){let $=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,kt=w.length;Y<kt;Y++){let Wt=w[Y],{object:Nt,geometry:qt,group:ee}=Wt,me=Wt.material;me.allowOverride===!0&&$!==null&&(me=$),Nt.layers.test(J.layers)&&Sn(Nt,N,J,qt,me,ee)}}function Sn(w,N,J,$,Y,kt){O!==null&&Y.isNodeMaterial&&O.setObject(w,Y),w.onBeforeRender(P,N,J,$,Y,kt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(P,N,J,$,w,kt),Y.transparent===!0&&Y.side===hi&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,P.renderBufferDirect(J,N,$,Y,w,kt),Y.side=ls,Y.needsUpdate=!0,P.renderBufferDirect(J,N,$,Y,w,kt),Y.side=hi):P.renderBufferDirect(J,N,$,Y,w,kt),w.onAfterRender(P,N,J,$,Y,kt)}function Je(w,N,J){N.isScene!==!0&&(N=Rt);let $=q.get(w),Y=b.state.lights,kt=b.state.shadowsArray,Wt=Y.state.version,Nt=Pt.getParameters(w,Y.state,kt,N,J,b.state.lightProbeGridArray),qt=Pt.getProgramCacheKey(Nt),ee=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,$.fog=N.fog;let me=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=yt.get(w.envMap||$.environment,me),$.envMapRotation=$.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,ee===void 0&&(w.addEventListener("dispose",I),ee=new Map,$.programs=ee);let xe=ee.get(qt);if(xe!==void 0){if($.currentProgram===xe&&$.lightsStateVersion===Wt)return ps(w,Nt),xe}else Nt.uniforms=Pt.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,J,Nt),w.onBeforeCompile(Nt,P),xe=Pt.acquireProgram(Nt,qt),ee.set(qt,xe),$.uniforms=Nt.uniforms;let jt=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=Jt.uniform),ps(w,Nt),$.needsLights=je(w),$.lightsStateVersion=Wt,$.needsLights&&(jt.ambientLightColor.value=Y.state.ambient,jt.lightProbe.value=Y.state.probe,jt.sunLights.value=Y.state.sun,jt.sunLightShadows.value=Y.state.sunShadow,jt.directionalLights.value=Y.state.directional,jt.directionalLightShadows.value=Y.state.directionalShadow,jt.spotLights.value=Y.state.spot,jt.spotLightShadows.value=Y.state.spotShadow,jt.rectAreaLights.value=Y.state.rectArea,jt.ltc_1.value=Y.state.rectAreaLTC1,jt.ltc_2.value=Y.state.rectAreaLTC2,jt.pointLights.value=Y.state.point,jt.pointLightShadows.value=Y.state.pointShadow,jt.hemisphereLights.value=Y.state.hemi,jt.sunShadowMatrix.value=Y.state.sunShadowMatrix,jt.sunShadowCascade.value=Y.state.sunShadowCascade,jt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,jt.spotLightMatrix.value=Y.state.spotLightMatrix,jt.spotLightMap.value=Y.state.spotLightMap,jt.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=b.state.lightProbeGridArray.length>0,$.currentProgram=xe,$.uniformsList=null,xe}function yn(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Ir.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ps(w,N){let J=q.get(w);J.outputColorSpace=N.outputColorSpace,J.batching=N.batching,J.batchingColor=N.batchingColor,J.instancing=N.instancing,J.instancingColor=N.instancingColor,J.instancingMorph=N.instancingMorph,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function ms(w,N){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let J=0,$=w.length;J<$;J++){let Y=w[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function bc(w,N,J,$,Y){N.isScene!==!0&&(N=Rt),nt.resetTextureUnits();let kt=N.fog,Wt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?N.environment:null,Nt=gt===null?P.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ye.workingColorSpace,qt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,ee=yt.get($.envMap||Wt,qt),me=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,xe=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),jt=!!J.morphAttributes.position,Te=!!J.morphAttributes.normal,Ke=!!J.morphAttributes.color,Ne=di;$.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ne=P.toneMapping);let Le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pn=Le!==void 0?Le.length:0,Kt=q.get($),vn=b.state.lights;if(G===!0&&(V===!0||w!==ut)){let De=w===ut&&$.id===et;Jt.setState($,w,De)}let Ee=!1;$.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==vn.state.version||Kt.outputColorSpace!==Nt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==ee||$.fog===!0&&Kt.fog!==kt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Jt.numPlanes||Kt.numIntersection!==Jt.numIntersection)||Kt.vertexAlphas!==me||Kt.vertexTangents!==xe||Kt.morphTargets!==jt||Kt.morphNormals!==Te||Kt.morphColors!==Ke||Kt.toneMapping!==Ne||Kt.morphTargetsCount!==pn||!!Kt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Kt.__version=$.version);let Xn=Kt.currentProgram;Ee===!0&&(Xn=Je($,N,Y),O&&$.isNodeMaterial&&O.onUpdateProgram($,Xn,Kt));let _i=!1,Gi=!1,Fs=!1,Pe=Xn.getUniforms(),Xe=Kt.uniforms;if(x.useProgram(Xn.program)&&(_i=!0,Gi=!0,Fs=!0),$.id!==et&&(et=$.id,Gi=!0),Kt.needsLights){let De=ms(b.state.lightProbeGridArray,Y);Kt.lightProbeGrid!==De&&(Kt.lightProbeGrid=De,Gi=!0)}if(_i||ut!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Pe.setValue(L,"projectionMatrix",w.projectionMatrix),Pe.setValue(L,"viewMatrix",w.matrixWorldInverse);let Wi=Pe.map.cameraPosition;Wi!==void 0&&Wi.setValue(L,ft.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Pe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),ut!==w&&(ut=w,Gi=!0,Fs=!0)}if(Kt.needsLights&&(vn.state.sunShadowMap.length>0&&Pe.setValue(L,"sunShadowMap",vn.state.sunShadowMap,nt),vn.state.directionalShadowMap.length>0&&Pe.setValue(L,"directionalShadowMap",vn.state.directionalShadowMap,nt),vn.state.spotShadowMap.length>0&&Pe.setValue(L,"spotShadowMap",vn.state.spotShadowMap,nt),vn.state.pointShadowMap.length>0&&Pe.setValue(L,"pointShadowMap",vn.state.pointShadowMap,nt)),Y.isSkinnedMesh){Pe.setOptional(L,Y,"bindMatrix"),Pe.setOptional(L,Y,"bindMatrixInverse");let De=Y.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Pe.setValue(L,"boneTexture",De.boneTexture,nt))}Y.isBatchedMesh&&(Pe.setOptional(L,Y,"batchingTexture"),Pe.setValue(L,"batchingTexture",Y._matricesTexture,nt),Pe.setOptional(L,Y,"batchingIdTexture"),Pe.setValue(L,"batchingIdTexture",Y._indirectTexture,nt),Pe.setOptional(L,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pe.setValue(L,"batchingColorTexture",Y._colorsTexture,nt));let Hi=J.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&F.update(Y,J,Xn),(Gi||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Pe.setValue(L,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&N.environment!==null&&(Xe.envMapIntensity.value=N.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Hy()),Gi){if(Pe.setValue(L,"toneMappingExposure",P.toneMappingExposure),Kt.needsLights&&Za(Xe,Fs),kt&&$.fog===!0&&Zt.refreshFogUniforms(Xe,kt),Zt.refreshMaterialUniforms(Xe,$,ct,it,b.state.transmissionRenderTarget[w.id]),Kt.needsLights&&Kt.lightProbeGrid){let De=Kt.lightProbeGrid;Xe.probesSH.value=De.texture,Xe.probesMin.value.copy(De.boundingBox.min),Xe.probesMax.value.copy(De.boundingBox.max),Xe.probesResolution.value.copy(De.resolution)}Ir.upload(L,yn(Kt),Xe,nt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ir.upload(L,yn(Kt),Xe,nt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pe.setValue(L,"center",Y.center),Pe.setValue(L,"modelViewMatrix",Y.modelViewMatrix),Pe.setValue(L,"normalMatrix",Y.normalMatrix),Pe.setValue(L,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){let De=$.uniformsGroups;for(let Wi=0,Os=De.length;Wi<Os;Wi++){let Sh=De[Wi];_t.update(Sh,Xn),_t.bind(Sh,Xn)}}return Xn}function Za(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.sunLights.needsUpdate=N,w.sunLightShadows.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function je(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(w,N,J){let $=q.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),q.get(w.texture).__webglTexture=N,q.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){let J=q.get(w);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,J=0){gt=w,j=N,tt=J;let $=null,Y=!1,kt=!1;if(w){let Nt=q.get(w);if(Nt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,Nt.__webglFramebuffer),ht.copy(w.viewport),Ft.copy(w.scissor),wt=w.scissorTest,x.viewport(ht),x.scissor(Ft),x.setScissorTest(wt),et=-1;return}else if(Nt.__webglFramebuffer===void 0)nt.setupRenderTarget(w);else if(Nt.__hasExternalTextures)nt.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let me=w.depthTexture;if(Nt.__boundDepthTexture!==me){if(me!==null&&q.has(me)&&(w.width!==me.image.width||w.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(w)}}let qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(kt=!0);let ee=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[N])?$=ee[N][J]:$=ee[N],Y=!0):w.samples>0&&nt.useMultisampledRTT(w)===!1?$=q.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?$=ee[J]:$=ee,ht.copy(w.viewport),Ft.copy(w.scissor),wt=w.scissorTest}else ht.copy(X).multiplyScalar(ct).floor(),Ft.copy(at).multiplyScalar(ct).floor(),wt=vt;if(J!==0&&($=H),x.bindFramebuffer(L.FRAMEBUFFER,$)&&x.drawBuffers(w,$),x.viewport(ht),x.scissor(Ft),x.setScissorTest(wt),Y){let Nt=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Nt.__webglTexture,J)}else if(kt){let Nt=N;for(let qt=0;qt<w.textures.length;qt++){let ee=q.get(w.textures[qt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+qt,ee.__webglTexture,J,Nt)}}else if(w!==null&&J!==0){let Nt=q.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Nt.__webglTexture,J)}et=-1};function Wn(w){let N=q.get(w);return(N.__readFormat!==w.format||N.__readType!==w.type)&&(N.__readFormat=w.format,N.__readType=w.type,N.__formatReadable=R.textureFormatReadable(w.format),N.__typeReadable=R.textureTypeReadable(w.type)),N}this.readRenderTargetPixels=function(w,N,J,$,Y,kt,Wt,Nt=0){if(!(w&&w.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&(qt=qt[Wt]),qt){x.bindFramebuffer(L.FRAMEBUFFER,qt);try{let ee=w.textures[Nt],me=ee.format,xe=ee.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Nt);let jt=Wn(ee);if(jt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-$&&J>=0&&J<=w.height-Y&&L.readPixels(N,J,$,Y,Tt.convert(me),Tt.convert(xe),kt)}finally{let ee=gt!==null?q.get(gt).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(w,N,J,$,Y,kt,Wt,Nt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&(qt=qt[Wt]),qt)if(N>=0&&N<=w.width-$&&J>=0&&J<=w.height-Y){x.bindFramebuffer(L.FRAMEBUFFER,qt);let ee=w.textures[Nt],me=ee.format,xe=ee.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Nt);let jt=Wn(ee);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,kt.byteLength,L.STREAM_READ),L.readPixels(N,J,$,Y,Tt.convert(me),Tt.convert(xe),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ke=gt!==null?q.get(gt).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Ke);let Ne=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Kd(L,Ne,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,kt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Te),L.deleteSync(Ne),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,J=0){let $=Math.pow(2,-J),Y=Math.floor(w.image.width*$),kt=Math.floor(w.image.height*$),Wt=N!==null?N.x:0,Nt=N!==null?N.y:0;nt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,Wt,Nt,Y,kt),x.unbindTexture()},this.copyTextureToTexture=function(w,N,J=null,$=null,Y=0,kt=0){let Wt,Nt,qt,ee,me,xe,jt,Te,Ke,Ne=w.isCompressedTexture?w.mipmaps[kt]:w.image;if(J!==null)Wt=J.max.x-J.min.x,Nt=J.max.y-J.min.y,qt=J.isBox3?J.max.z-J.min.z:1,ee=J.min.x,me=J.min.y,xe=J.isBox3?J.min.z:0;else{let Xe=Math.pow(2,-Y);Wt=Math.floor(Ne.width*Xe),Nt=Math.floor(Ne.height*Xe),w.isDataArrayTexture?qt=Ne.depth:w.isData3DTexture?qt=Math.floor(Ne.depth*Xe):qt=1,ee=0,me=0,xe=0}$!==null?(jt=$.x,Te=$.y,Ke=$.z):(jt=0,Te=0,Ke=0);let Le=Tt.convert(N.format),pn=Tt.convert(N.type),Kt;N.isData3DTexture?(nt.setTexture3D(N,0),Kt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(nt.setTexture2DArray(N,0),Kt=L.TEXTURE_2D_ARRAY):(nt.setTexture2D(N,0),Kt=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let vn=x.getParameter(L.UNPACK_ROW_LENGTH),Ee=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Xn=x.getParameter(L.UNPACK_SKIP_PIXELS),_i=x.getParameter(L.UNPACK_SKIP_ROWS),Gi=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,Ne.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,ee),x.pixelStorei(L.UNPACK_SKIP_ROWS,me),x.pixelStorei(L.UNPACK_SKIP_IMAGES,xe);let Fs=w.isDataArrayTexture||w.isData3DTexture,Pe=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){let Xe=q.get(w),Hi=q.get(N),De=q.get(Xe.__renderTarget),Wi=q.get(Hi.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,De.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Os=0;Os<qt;Os++)Fs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(w).__webglTexture,Y,xe+Os),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,q.get(N).__webglTexture,kt,Ke+Os)),L.blitFramebuffer(ee,me,Wt,Nt,jt,Te,Wt,Nt,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||q.has(w)){let Xe=q.get(w),Hi=q.get(N);x.bindFramebuffer(L.READ_FRAMEBUFFER,k),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,W);for(let De=0;De<qt;De++)Fs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,Y,xe+De):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xe.__webglTexture,Y),Pe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Hi.__webglTexture,kt,Ke+De):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Hi.__webglTexture,kt),Y!==0?L.blitFramebuffer(ee,me,Wt,Nt,jt,Te,Wt,Nt,L.COLOR_BUFFER_BIT,L.NEAREST):Pe?L.copyTexSubImage3D(Kt,kt,jt,Te,Ke+De,ee,me,Wt,Nt):L.copyTexSubImage2D(Kt,kt,jt,Te,ee,me,Wt,Nt);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Pe?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Kt,kt,jt,Te,Ke,Wt,Nt,qt,Le,pn,Ne.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Kt,kt,jt,Te,Ke,Wt,Nt,qt,Le,Ne.data):L.texSubImage3D(Kt,kt,jt,Te,Ke,Wt,Nt,qt,Le,pn,Ne):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,kt,jt,Te,Wt,Nt,Le,pn,Ne.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,kt,jt,Te,Ne.width,Ne.height,Le,Ne.data):L.texSubImage2D(L.TEXTURE_2D,kt,jt,Te,Wt,Nt,Le,pn,Ne);x.pixelStorei(L.UNPACK_ROW_LENGTH,vn),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Xn),x.pixelStorei(L.UNPACK_SKIP_ROWS,_i),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Gi),kt===0&&N.generateMipmaps&&L.generateMipmap(Kt),x.unbindTexture()},this.initRenderTarget=function(w){q.get(w).__webglFramebuffer===void 0&&nt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?nt.setTextureCube(w,0):w.isData3DTexture?nt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?nt.setTexture2DArray(w,0):nt.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){j=0,tt=0,gt=null,x.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var Df={type:"change"},eh={type:"start"},Uf={type:"end"},lc=new $i,Nf=new Dn,Wy=Math.cos(70*Ru.DEG2RAD),sn=new C,Rn=2*Math.PI,Ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},th=1e-6,cc=class extends Ca{constructor(t,e=null){super(t,e),this.state=Ie.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new An,this._lastTargetPosition=new C,this._quat=new An().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sr,this._sphericalDelta=new Sr,this._scale=1,this._panOffset=new C,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new C,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yy.bind(this),this._onPointerDown=Xy.bind(this),this._onPointerUp=qy.bind(this),this._onContextMenu=tv.bind(this),this._onMouseWheel=$y.bind(this),this._onKeyDown=Jy.bind(this),this._onTouchStart=jy.bind(this),this._onTouchMove=Qy.bind(this),this._onMouseDown=Ky.bind(this),this._onMouseMove=Zy.bind(this),this._interceptControlDown=ev.bind(this),this._interceptControlUp=nv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ie.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=Ie.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rn:n>Math.PI&&(n-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=sn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<Wy?this.object.lookAt(this.target):(Nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(Nf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>th||this._lastTargetPosition.distanceToSquared(this.target)>th?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Xy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uf),this.state=Ie.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ky(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ie.DOLLY;break;case as.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}break;case as.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ie.PAN}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(eh)}function Zy(i){switch(this.state){case Ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $y(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ie.NONE||(i.preventDefault(),this.dispatchEvent(eh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Uf))}function Jy(i){this.enabled!==!1&&this._handleKeyDown(i)}function jy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ie.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ie.TOUCH_PAN;break;default:this.state=Ie.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ie.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ie.TOUCH_DOLLY_ROTATE;break;default:this.state=Ie.NONE}break;default:this.state=Ie.NONE}this.state!==Ie.NONE&&this.dispatchEvent(eh)}function Qy(i){switch(this._trackPointer(i),this.state){case Ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ie.NONE}}function tv(i){this.enabled!==!1&&i.preventDefault()}function ev(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var uc=class extends Ms{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ge;t.deleteAttribute("uv");let e=new Se({side:dn}),n=new Se,s=new As(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Gt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new li(t,n,6),o=new ze;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Gt(t,Lr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Gt(t,Lr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Gt(t,Lr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Gt(t,Lr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Gt(t,Lr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new Gt(t,Lr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Lr(i){return new Ma({color:0,emissive:16777215,emissiveIntensity:i})}var iv=42e5,nh=[1,.8,.65,.5],Ff=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),sv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Of(i,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:n=null}={}){let s=window.devicePixelRatio||1,r;try{r=new rc({canvas:i,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=Qe,r.toneMapping=Pa,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=dl,r.shadowMap.autoUpdate=!1,r.setClearColor(new Qt(t),1);let a=new Ms,o=new Pr(r);a.environment=o.fromScene(new uc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new hn(32,1,4,1500);l.position.set(0,160,150),a.add(new wa(16777215,13616860,.35));let c=new Ta(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new Gt(new ui(900,900),new va({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let d=new cc(l,i);d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),d.dampingFactor=.14,d.rotateSpeed=.75,d.zoomSpeed=.9,d.panSpeed=.8,d.screenSpacePanning=!0,d.minDistance=9,d.maxDistance=1200,d.minPolarAngle=.06,d.maxPolarAngle=1.32,d.zoomToCursor=!0,d.cursor.set(0,6,-3),d.maxTargetRadius=85,d.target.set(0,4,0);function h(){let K=l.position.distanceTo(d.target),xt=Math.min(4,Math.max(.4,K*.04));Math.abs(xt-l.near)>xt*.08&&(l.near=xt,l.far=Math.max(900,K*6),l.updateProjectionMatrix())}let p=0,g=0,_=!1,m=!0,f=new Set,v=new Set,S=[],M=new Set,A=1,b=0,E=0,y=0,T=0,P=[],D=0,O=0,H=0;function k(){!p&&!g&&(p=requestAnimationFrame(tt))}function W(){!p&&!g&&(g=setTimeout(()=>{g=0,k()},33))}function j(K){Math.abs(K-E)<.01||(E=K,r.setPixelRatio(K),r.setSize(i.clientWidth||1,i.clientHeight||1,!1))}function tt(K){p=0;let xt=d.update();for(let Q of M){let pt=Math.min(1,(K-(Q.bas??=K))/Q.sure);Q.adim(sv(pt)),Q.golge&&(m=!0),pt>=1?(M.delete(Q),Q.bitti?.()):xt=!0}for(let Q of f)Q(K)&&(xt=!0);let I=!1;for(let Q of v)Q(K,T?Math.min(100,K-T):33)&&(I=!0);T=I?K:0;let B=xt||I;clearTimeout(H),h(),j(A*nh[b]),m&&(r.shadowMap.needsUpdate=!0,m=!1),r.render(a,l),Zt(),xt?gt(K):(y=0,P=[]),xt?k():I&&W(),!B&&b>0&&(H=setTimeout(()=>{j(A),r.render(a,l),Zt()},300))}function gt(K){y&&P.push(K-y),y=K;let xt=P.length,I=P.reduce((pt,st)=>pt+st,0),B=xt>=6&&xt<24&&I>=450&&[...P].sort((pt,st)=>pt-st)[xt>>1]>50;if(xt<24&&!B)return;let Q=I/xt;P=[],!(K-O<(B?300:500))&&(Q>26&&b<nh.length-1?(b++,D=0,O=K,e("kalite",b)):Q<19&&b>0&&++D>=3&&(b--,D=0,O=K))}function et(){let K=i.clientWidth||1,xt=i.clientHeight||1;A=Math.max(.5,Math.min(s,2,Math.sqrt(iv/(K*xt)))),E=0,j(A*nh[b]),l.aspect=K/xt,ue();for(let I of S)I.w=0;te=0,R=null,!_&&$t&&V($t,!0),k()}let ut=0,ht=0;new ResizeObserver(()=>{clearTimeout(ut);let K=performance.now();if(document.documentElement.dataset.suruklenen&&K-ht>125){ht=K,et();return}ut=setTimeout(()=>{ht=performance.now(),et()},110)}).observe(i),window.addEventListener("bote-erisim",()=>{d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let K of S)K.w=0;k()});let wt=0;function ue(){let K=i.clientWidth||1,xt=i.clientHeight||1;wt>0?l.setViewOffset(K,xt,0,Math.min(wt,xt*.9)/2,K,xt):l.clearViewOffset(),l.updateProjectionMatrix()}function le(K,xt=!1){wt=Math.max(0,K||0),R=null,ue(),!_&&$t?V($t,xt):k()}d.addEventListener("change",k),d.addEventListener("start",()=>{_=!0,e("kamera-elle")});let $t=null,it=new C(0,1,0),ct=new C,Mt=new C,Z=new C,X=new C,at=new C,vt=K=>K.isBox3?K:new cn(new C(K[0],K[1],K[2]),new C(K[3],K[4],K[5]));function U(K,xt){let I=n?.()||{},B=Math.min(wt,xt*.9),Q=I.sol??16,pt=K-(I.sag??16),st=I.ust??16,Yt=xt-Math.max(I.alt??16,B+12);if(pt-Q<80){let Vt=K/2;Q=Vt-40,pt=Vt+40}if(Yt-st<80){let Vt=(Math.max(0,st)+Math.max(st+80,Yt))/2;st=Vt-40,Yt=Vt+40}return{x0:Q,y0:st,x1:pt,y1:Yt,engel:I.engel||[]}}function G(K,xt){let I=i.clientWidth||1,B=i.clientHeight||1,Q=vt(K),pt=new C(...xt).normalize();ct.crossVectors(it,pt).normalize(),Mt.crossVectors(pt,ct),Z.copy(pt).negate();let st=R=U(I,B),Yt=Math.tan(l.fov*Math.PI/360),Vt=Yt*(I/B),ie=Math.min(wt,B*.9)/B,ce=(st.x0/I*2-1)*Vt,de=(st.x1/I*2-1)*Vt,Ae=(1-st.y0/B*2-ie)*Yt,qe=(1-st.y1/B*2-ie)*Yt;Q.getCenter(X);let Fe=[],Sn=[],Je=[];for(let je=0;je<8;je++)at.set(je&1?Q.max.x:Q.min.x,je&2?Q.max.y:Q.min.y,je&4?Q.max.z:Q.min.z).sub(X),Fe.push(at.dot(ct)),Sn.push(at.dot(Mt)),Je.push(at.dot(Z));let yn=0;for(let je=0;je<8;je++){yn=Math.max(yn,2-Je[je]);for(let Wn=0;Wn<8;Wn++)yn=Math.max(yn,(Fe[je]-Fe[Wn]-de*Je[je]+ce*Je[Wn])/(de-ce),(Sn[je]-Sn[Wn]-Ae*Je[je]+qe*Je[Wn])/(Ae-qe))}yn=Math.min(d.maxDistance,Math.max(d.minDistance,yn));let ps=(je,Wn,w)=>{let N=-1/0,J=1/0;for(let Y=0;Y<8;Y++)N=Math.max(N,je[Y]-w*(Je[Y]+yn)),J=Math.min(J,je[Y]-Wn*(Je[Y]+yn));if(!(J>N))return(N+J)/2;let $=Y=>{let kt=-1/0,Wt=1/0;for(let Nt=0;Nt<8;Nt++){let qt=(je[Nt]-Y)/(Je[Nt]+yn);qt>kt&&(kt=qt),qt<Wt&&(Wt=qt)}return w-kt-(Wt-Wn)};for(let Y=0;Y<32;Y++){let kt=(N+J)/2;$(kt)>0?J=kt:N=kt}return(N+J)/2},ms=ps(Fe,ce,de),bc=ps(Sn,qe,Ae),Za=X.clone().addScaledVector(ct,ms).addScaledVector(Mt,bc);return{merkez:Za,konum:Za.clone().addScaledVector(pt,yn)}}function V(K,xt=!1){$t=K,_=!1;let{merkez:I,konum:B}=G(K.kutu,K.yon);if(xt||Ff())return l.position.copy(B),d.target.copy(I),d.update(),k(),Promise.resolve();let Q=l.position.clone(),pt=d.target.clone();return d.enabled=!1,ft(650,st=>{l.position.lerpVectors(Q,B,st),d.target.lerpVectors(pt,I,st),l.lookAt(d.target)}).then(()=>{d.enabled=!0,d.update()})}function ot(){if(!$t)return null;l.updateMatrixWorld();let K=i.clientWidth||1,xt=i.clientHeight||1,I=vt($t.kutu),B=1/0,Q=-1/0,pt=1/0,st=-1/0;for(let Yt=0;Yt<8;Yt++){at.set(Yt&1?I.max.x:I.min.x,Yt&2?I.max.y:I.min.y,Yt&4?I.max.z:I.min.z).project(l);let Vt=(at.x+1)/2*K,ie=(1-at.y)/2*xt;B=Math.min(B,Vt),Q=Math.max(Q,Vt),pt=Math.min(pt,ie),st=Math.max(st,ie)}return{kutu:{x0:B,y0:pt,x1:Q,y1:st},guvenli:U(K,xt),w:K,h:xt}}function ft(K,xt,I=!1){return Ff()?(xt(1),I&&(m=!0),k(),Promise.resolve()):new Promise(B=>{M.add({sure:K,adim:xt,bitti:B,golge:I}),k()})}let bt=i.parentElement.querySelector(".etiketler"),Rt=i.parentElement.querySelector(".isaretler")||bt,Ot="http://www.w3.org/2000/svg",Bt=document.createElementNS(Ot,"svg");Bt.setAttribute("class","cizgiler"),Bt.setAttribute("aria-hidden","true"),bt.appendChild(Bt);let L=[],he=[],te=0,R=null,x=new C,z=new C,q=new C,nt=K=>{for(let xt=K;xt;xt=xt.parent)if(!xt.visible)return!1;return!0};function yt(K){for(let xt of S)xt.el.remove(),xt.cizgi.remove(),xt.nokt.remove();S.length=0;for(let{nokta:xt,metin:I,tur:B}of K){let Q=document.createElement("div");Q.className="etiket"+(B?` etiket-${B}`:""),Q.textContent=I,bt.appendChild(Q);let pt=document.createElementNS(Ot,"line"),st=document.createElementNS(Ot,"circle");st.setAttribute("r","4.5"),Bt.append(pt,st),S.push({el:Q,nokta:xt,cizgi:pt,nokt:st,w:0,h:0})}k()}function St(K){for(let xt of L)xt.el.remove();L.length=0;for(let xt of K)xt.el.hidden=!0,Rt.appendChild(xt.el),L.push({...xt,acik:!1});he=L.map((xt,I)=>[xt,I]).sort((xt,I)=>(I[0].oncelik??1)-(xt[0].oncelik??1)||xt[1]-I[1]).map(([xt])=>xt),te=0,R=null,k()}function rt(K,xt){for(let I=L.length-1;I>=0;I--){let B=L[I].el;if(B.hidden)continue;let Q=B.getBoundingClientRect(),pt=Q.width/2;if(pt&&Math.hypot(K-Q.left-pt,xt-Q.top-Q.height/2)<=pt+2)return B}return null}function mt(K,xt){if(!L.length)return;te||(te=parseFloat(getComputedStyle(Rt).getPropertyValue("--isaret"))||44);let I=R||(R=U(K,xt)),B=te+4,Q=[],pt=document.activeElement,st=Math.tan(l.fov*Math.PI/360),Yt=L.some(Vt=>Vt.el===pt)?[...he].sort((Vt,ie)=>(ie.el===pt)-(Vt.el===pt)):he;for(let Vt of Yt){let ie=!1,ce=0,de=0;(!Vt.nesne||nt(Vt.nesne))&&(Vt.nesne?z.copy(Vt.yerel).applyMatrix4(Vt.nesne.matrixWorld):z.copy(Vt.nokta),q.copy(z).applyMatrix4(l.matrixWorldInverse),q.z<-l.near&&(x.copy(z).project(l),ce=(x.x+1)/2*K,de=(1-x.y)/2*xt,ie=ce>=I.x0&&ce<=I.x1&&de>=I.y0&&de<=I.y1&&!I.engel.some(Ae=>ce>Ae.x0-B/2&&ce<Ae.x1+B/2&&de>Ae.y0-B/2&&de<Ae.y1+B/2),ie&&Vt.adim&&(ie=Vt.adim*xt/(2*-q.z*st)>=te),ie&&Vt.el!==pt&&(ie=!Q.some(Ae=>Math.abs(Ae.x-ce)<B&&Math.abs(Ae.y-de)<B)))),ie&&(Q.push({x:ce,y:de}),Vt.el.style.transform=`translate3d(${Math.round(ce)}px,${Math.round(de)}px,0)`),Vt.acik!==ie&&(Vt.acik=ie,Vt.el.hidden=!ie)}}let Pt=(K,xt,I)=>(x.copy(K).project(l),{x:(x.x+1)/2*xt,y:(1-x.y)/2*I,gor:x.z<1&&Math.abs(x.x)<1.05&&Math.abs(x.y)<1.05});function Zt(){let K=i.clientWidth,xt=i.clientHeight;if(mt(K,xt),!S.length)return;Bt.setAttribute("width",K),Bt.setAttribute("height",xt);let I=[],B=8,Q=30,pt=S.map(st=>({e:st,p:Pt(st.nokta,K,xt)})).sort((st,Yt)=>Yt.p.y-st.p.y);for(let{e:st,p:Yt}of pt){st.w||(st.w=st.el.offsetWidth,st.h=st.el.offsetHeight);let Vt=Math.min(Math.max(Yt.x-st.w/2,6),K-st.w-6),ie=Yt.y-Q-st.h,ce=!1;for(let Ae=0;Ae<6;Ae++){let qe=I.find(Fe=>Vt<Fe.x+Fe.w+B&&Vt+st.w+B>Fe.x&&ie<Fe.y+Fe.h+B&&ie+st.h+B>Fe.y);if(!qe)break;if(ie=qe.y-st.h-B,ie<4){ie=Yt.y+Q,ce=!0,Vt=Math.min(Math.max(qe.x+qe.w+B,6),K-st.w-6);break}}I.push({x:Vt,y:ie,w:st.w,h:st.h});let de=Yt.gor?"1":"0";st.el.style.opacity=de,st.cizgi.style.opacity=de,st.nokt.style.opacity=de,st.el.style.transform=`translate3d(${Math.round(Vt)}px,${Math.round(ie)}px,0)`,st.cizgi.setAttribute("x1",Yt.x.toFixed(1)),st.cizgi.setAttribute("y1",Yt.y.toFixed(1)),st.cizgi.setAttribute("x2",(Vt+st.w/2).toFixed(1)),st.cizgi.setAttribute("y2",(ce?ie:ie+st.h).toFixed(1)),st.nokt.setAttribute("cx",Yt.x.toFixed(1)),st.nokt.setAttribute("cy",Yt.y.toFixed(1))}}let Ct=new Ra,At=new lt,Jt=[],se=new Set,re=new C,F=new C,Et=new C,dt=K=>!K.isMesh||K.isInstancedMesh||K===u||!nt(K)?!1:(Array.isArray(K.material)?K.material:[K.material]).some(I=>I&&I.visible!==!1&&I.blending!==Bn&&!(I.transparent&&I.opacity<.2));function Tt(K,xt,I=1){At.set(K,xt),Ct.setFromCamera(At,l);let B=Ct.intersectObjects(a.children,!0).find(de=>dt(de.object)),Q=B?B.point:null,pt=B?B.distance:1/0,st=i.clientHeight||1,Yt=Math.tan(l.fov*Math.PI/360),Vt=null,ie=1/0,ce=1/0;for(let de of Jt){let Ae=de.userData;if(Ae.etkin===!1||!nt(de))continue;let qe=!1;if(Q&&Ae.yari){re.copy(Q),de.worldToLocal(re),F.setFromMatrixScale(de.matrixWorld);let[Je,yn,ps]=Ae.yari,ms=.25;qe=Math.abs(re.x)<=Je+ms/F.x&&Math.abs(re.y)<=yn+ms/F.y&&Math.abs(re.z)<=ps+ms/F.z}if(!qe&&Ae.ince&&de.isMesh){let Je=Ct.intersectObject(de,!1)[0];qe=!!Je&&Je.distance<=pt+.5}if(!qe||(Et.setFromMatrixPosition(de.matrixWorld),Ae.minPx&&Ae.minAdim&&(q.copy(Et).applyMatrix4(l.matrixWorldInverse),Ae.minAdim*st/(2*Math.max(.01,-q.z)*Yt)<Ae.minPx*I)))continue;let Fe=Ae.hacim??1/0,Sn=Q?Et.distanceToSquared(Q):0;(Fe<ie*.99||Fe<=ie*1.01&&Sn<ce)&&(Vt=de,ie=Fe,ce=Sn)}return{vekil:Vt,nokta:Q?Q.clone():Vt?new C().setFromMatrixPosition(Vt.matrixWorld):null}}let Lt=new Set,_t=null,Xt=!1;i.addEventListener("pointerdown",K=>{if(Lt.add(K.pointerId),Lt.size>1){Xt=!0,_t=null;return}_t=Xt?null:{x:K.clientX,y:K.clientY,t:performance.now(),id:K.pointerId}}),i.addEventListener("pointerup",K=>{let xt=_t;if(Lt.delete(K.pointerId),Lt.size||(Xt=!1),!xt||xt.id!==K.pointerId||(_t=null,Math.hypot(K.clientX-xt.x,K.clientY-xt.y)>9||performance.now()-xt.t>600))return;let I=L.length?rt(K.clientX,K.clientY):null;if(I){I.click();return}let B=i.getBoundingClientRect(),Q=K.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,pt=Tt((K.clientX-B.left)/B.width*2-1,-((K.clientY-B.top)/B.height)*2+1,Q);for(let st of se)st(pt.vekil?pt.vekil.userData:null,pt.nokta,pt.vekil)}),i.addEventListener("pointercancel",K=>{Lt.delete(K.pointerId),Lt.size||(Xt=!1),_t=null});let Ht=null,Me=K=>{K!==Ht&&(Ht?.classList.remove("ustunde"),K?.classList.add("ustunde"),Ht=K,i.style.cursor=K?"pointer":"")};return i.addEventListener("pointermove",K=>{K.pointerType==="mouse"&&!K.buttons&&Me(L.length?rt(K.clientX,K.clientY):null)}),i.addEventListener("pointerleave",()=>Me(null)),i.addEventListener("contextmenu",K=>K.preventDefault()),i.addEventListener("webglcontextlost",K=>{K.preventDefault(),e("baglam-kaybi")}),i.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),m=!0,k()}),et(),{renderer:r,scene:a,camera:l,controls:d,hedefler:Jt,iste:k,kameraGit:V,tween:ft,etiketKoy:yt,isaretKoy:St,gorunurAlan:le,golgeYenile:()=>{m=!0,k()},kareGuncelleyici:K=>(f.add(K),k(),()=>f.delete(K)),yavasGuncelleyici:K=>(v.add(K),k(),()=>v.delete(K)),dokunmaDinle:K=>se.add(K),sec:Tt,kadrajOlc:ot,guvenliYenile:()=>{R=null,te=0,k()},yakinlas:K=>{let xt=l.position.clone().sub(d.target),I=Math.min(d.maxDistance,Math.max(d.minDistance,xt.length()*K)),B=l.position.clone(),Q=d.target.clone().addScaledVector(xt.normalize(),I);return _=!0,ft(260,pt=>l.position.lerpVectors(B,Q,pt))},arkaPlan:K=>{r.setClearColor(new Qt(K),1),k()},sonHedef:()=>$t,kalite:()=>({kademe:b,piksel:Math.round(E*100)/100,tam:Math.round(A*100)/100})}}function Bf(i,t){let{DERSLER:e,KAMERA:n}=i,s=t.veri,r=t.pencere,a=t.temaRengi,o=[["DERSLER","object"],["KAMERA","object"],["KESIF","object"],["KATEGORI","object"],["kategoriBul","function"],["sahneyiKur","function"]].filter(([I,B])=>!i[I]||typeof i[I]!==B).map(([I])=>I);e&&!e[s.slug]&&o.push(`DERSLER['${s.slug}']`),n&&!n.genel&&o.push("KAMERA.genel"),o.length&&console.error(`dersMotoru(${i.id||"?"}): aile tan\u0131m\u0131nda eksik zorunlu alan: ${o.join(", ")}. Sahne a\xE7\u0131lmad\u0131.`);let l=e?.[s.slug]||{adimlar:{}},c=i.KESIF||{},u=i.KATEGORI||{},d=typeof i.kategoriBul=="function"?i.kategoriBul:()=>null,h=new URLSearchParams(location.search).has("olcum"),p=ke(".adim"),g=new Map(ke("[data-eylem][aria-pressed]").map(I=>[I,I.getAttribute("aria-pressed")])),_=0,m=null,f=null,v=[],S=null,M=null;t.sinifDegisince=()=>{S&&M?.()};let A=()=>l.adimlar[p[_].dataset.id]||{};function b(I,B=!1){_=Math.max(0,Math.min(p.length-1,I)),p.forEach((Yt,Vt)=>Yt.classList.toggle("etkin",Vt===_));let Q=p[_];Dt("#adim-sayac").textContent=`${_+1} / ${p.length}`,Dt("#ilerleme").style.width=`${(_+1)/p.length*100}%`,Dt("#geri").disabled=_===0,Dt("#ileri").disabled=_===p.length-1;let pt=Dt("h2",Q).textContent;for(let[Yt,Vt]of[["#mini-sayac",`${_+1}/${p.length}`],["#mini-baslik",pt],["#kisa-baslik",pt]]){let ie=Dt(Yt);ie&&(ie.textContent=Vt)}for(let[Yt,Vt]of[["#mini-geri",_===0],["#mini-ileri",_===p.length-1]]){let ie=Dt(Yt);ie&&(ie.disabled=Vt)}let st=new URL(location.href);st.hash=Q.id,history.replaceState(null,"",st),Dt(".kart-govde")?.scrollTo(0,0),B||Yn(`Ad\u0131m ${_+1}: ${Dt("h2",Q).textContent}`),K(),m&&At(Q.dataset.id)}Dt("#geri").addEventListener("click",()=>b(_-1)),Dt("#ileri").addEventListener("click",()=>b(_+1)),document.addEventListener("keydown",I=>{I.target.closest("input, textarea, select")||r?.open||I.altKey||I.ctrlKey||I.metaKey||(["ArrowRight","PageDown"].includes(I.key)&&(I.preventDefault(),b(_+1)),["ArrowLeft","PageUp"].includes(I.key)&&(I.preventDefault(),b(_-1)))});let E=null,y=(I,B)=>{for(;I&&I!==B;I=I.parentElement)if(I.scrollWidth>I.clientWidth+1&&/auto|scroll/.test(getComputedStyle(I).overflowX))return!0;return!1};Dt(".kart-alani").addEventListener("touchstart",I=>{let B=I.touches[0];E=I.touches.length===1&&!I.target.closest?.("input, select, textarea, .ayarlar, .erisim-panel")&&!y(I.target,I.currentTarget)?{x:B.clientX,y:B.clientY}:null},{passive:!0}),Dt(".kart-alani").addEventListener("touchend",I=>{if(!E)return;let B=I.changedTouches[0],Q=B.clientX-E.x,pt=B.clientY-E.y;E=null,Math.abs(Q)>70&&Math.abs(pt)<40&&b(_+(Q<0?1:-1))},{passive:!0});let T=Dt(".ders"),P=Dt(".kart-alani"),D=Dt(".panel-kenar"),O=Dt("#panel-dugme");Eh(P),Th(Dt(".sahne-arac"));let H=window.matchMedia("(orientation: portrait), (max-width: 820px)");function k(I,B=!0){ne.dataset.panel=I?"acik":"kapali",O?.setAttribute("aria-expanded",String(I)),O?.setAttribute("aria-label",I?"Anlat\u0131m panelini kapat":"Anlat\u0131m panelini a\xE7"),P.inert=!I&&!H.matches,B&&(wn("bote-3d-panel",I?"acik":"kapali"),Yn(I?"Anlat\u0131m paneli a\xE7\u0131ld\u0131":"Anlat\u0131m paneli kapand\u0131; ad\u0131mlar alttaki \xE7ubuktan ge\xE7ilir"))}k(Pn("bote-3d-panel")!=="kapali",!1),O?.addEventListener("click",()=>k(ne.dataset.panel!=="acik")),Dt("#mini-ac")?.addEventListener("click",()=>k(!0)),Dt("#mini-geri")?.addEventListener("click",()=>b(_-1)),Dt("#mini-ileri")?.addEventListener("click",()=>b(_+1));let W=I=>{I?T.style.setProperty("--panel-w",`${Math.round(I)}px`):T.style.removeProperty("--panel-w")},j=I=>Math.max(300,Math.min(T.clientWidth*.62,I));W(Number(Pn("bote-3d-panel-w"))||0);let tt=()=>wn("bote-3d-panel-w",String(parseInt(T.style.getPropertyValue("--panel-w"),10)||"")),gt=null,et=110;D?.addEventListener("pointerdown",I=>{I.target.closest("#panel-dugme")||ne.dataset.panel!=="acik"||H.matches||(D.setPointerCapture(I.pointerId),gt={x:I.clientX,w:P.getBoundingClientRect().width,once:T.style.getPropertyValue("--panel-w")},ne.dataset.suruklenen="1")}),D?.addEventListener("pointermove",I=>{if(!gt)return;let B=I.clientX-gt.x,Q=gt.w+(ne.dataset.panelYan==="sol"?B:-B);Q<j(0)-et?ne.dataset.kapanacak="1":delete ne.dataset.kapanacak,W(j(Q))});let ut=I=>{if(!gt)return;let B=gt;if(gt=null,delete ne.dataset.suruklenen,ne.dataset.kapanacak&&(delete ne.dataset.kapanacak,B.once?T.style.setProperty("--panel-w",B.once):T.style.removeProperty("--panel-w"),I?.type==="pointerup")){k(!1);return}tt()};D?.addEventListener("pointerup",ut),D?.addEventListener("pointercancel",ut),D?.addEventListener("dblclick",I=>{I.target.closest("#panel-dugme")||(W(0),wn("bote-3d-panel-w",""))}),D?.addEventListener("keydown",I=>{if(I.target!==D||!["ArrowLeft","ArrowRight"].includes(I.key))return;I.preventDefault(),I.stopPropagation();let B=I.key==="ArrowLeft"==(ne.dataset.panelYan!=="sol");W(j(P.getBoundingClientRect().width+(B?40:-40))),tt()});function ht(I,B){ne.dataset.panelYan=I;for(let Q of ke("[data-yan]"))Q.setAttribute("aria-pressed",String(Q.dataset.yan===I));B&&wn("bote-3d-panel-yan",I)}ht(Pn("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);let Ft=Dt("#ayarlar"),wt=Dt("#ayar-dugme"),ue=Dt("#ayar-perde");function le(I,B=!1){Ft&&(Ft.hidden=!I,ue&&(ue.hidden=!I),wt.setAttribute("aria-expanded",String(I)),I?(U(),[...Ft.querySelectorAll("input, button")].find(Q=>Q.id!=="ayar-kapat"&&Q.offsetParent!==null)?.focus()):B&&wt.focus())}wt?.addEventListener("click",I=>{I.stopPropagation(),le(Ft.hidden)}),Dt("#ayar-kapat")?.addEventListener("click",()=>le(!1,!0)),document.addEventListener("click",I=>{Ft&&!Ft.hidden&&!I.target.closest("#ayarlar, #ayar-dugme")&&le(!1)}),document.addEventListener("keydown",I=>{I.key==="Escape"&&Ft&&!Ft.hidden&&le(!1,!0)});let $t=Dt("#panel-genislik"),it=Dt("#genislik-deger"),ct={dar:"Dar",orta:"Orta",genis:"Geni\u015F"},Mt={dar:0,orta:50,genis:100};function Z(){let I=window.innerWidth,B=(Q,pt,st)=>j(Math.max(Q,Math.min(pt*I,st)));return ne.dataset.mod==="tahta"?{dar:B(380,.29,1100),orta:B(440,.37,1500),genis:B(560,.5,1900)}:{dar:B(290,.26,440),orta:B(330,.34,560),genis:B(420,.46,900)}}function X(I){let B=Z();return I<=50?B.dar+(B.orta-B.dar)*I/50:B.orta+(B.genis-B.orta)*(I-50)/50}function at(I){let B=Z();return I<=B.orta?B.orta>B.dar?Math.max(0,(I-B.dar)/(B.orta-B.dar)*50):0:B.genis>B.orta?Math.min(100,50+(I-B.orta)/(B.genis-B.orta)*50):100}function vt(){if(!$t)return;let I=Number($t.value),B=X(I),Q=Object.keys(Mt).find(st=>Math.abs(Mt[st]-I)<=3)||"",pt=Math.round(B/Math.max(1,T.clientWidth)*100);it&&(it.textContent=Q?`${ct[Q]} \xB7 %${pt}`:`%${pt}`),$t.setAttribute("aria-valuetext",`${Q?`${ct[Q]}, `:""}ekran\u0131n y\xFCzde ${pt} kadar\u0131`),$t.style.setProperty("--dolu",`${I}%`);for(let st of ke("[data-panel-boyut]:not(html)"))st.setAttribute("aria-pressed",String(st.dataset.panelBoyut===Q))}function U(){$t&&($t.value=String(Math.round(at(P.getBoundingClientRect().width||Z().orta))),vt())}let G=()=>{ne.dataset.suruklenen&&!gt&&!x&&delete ne.dataset.suruklenen};$t?.addEventListener("pointerdown",()=>{ne.dataset.suruklenen="1"}),$t?.addEventListener("pointerup",G),$t?.addEventListener("input",()=>{ne.dataset.suruklenen="1",W(X(Number($t.value))),vt()}),$t?.addEventListener("change",()=>{G(),tt()});function V(I,B){ne.dataset.panelBoyut=I,B&&(W(0),wn("bote-3d-panel-w",""),wn("bote-3d-panel-boyut",I)),$t&&($t.value=String(Mt[I]),vt())}V(["dar","orta","genis"].includes(Pn("bote-3d-panel-boyut"))?Pn("bote-3d-panel-boyut"):"orta",!1);let ot=[.9,1,1.15,1.3,1.5],ft=Math.max(0,ot.indexOf(Number(Pn("bote-3d-yazi"))||1));function bt(I,B){ft=Math.max(0,Math.min(ot.length-1,I)),ne.style.setProperty("--yazi",String(ot[ft]));let Q=Dt("#yazi-deger");Q&&(Q.textContent=`%${Math.round(ot[ft]*100)}`),B&&wn("bote-3d-yazi",String(ot[ft]))}bt(ft,!1),document.addEventListener("click",I=>{let B=I.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");B&&(B.dataset.panelBoyut&&V(B.dataset.panelBoyut,!0),B.dataset.yazi&&bt(ft+Number(B.dataset.yazi),!0),B.dataset.yan&&ht(B.dataset.yan,!0))});let Rt=Dt("#tahmin-ayar");Rt&&(Rt.checked=Pn("bote-3d-tahmin")!=="hayir",Rt.addEventListener("change",()=>wn("bote-3d-tahmin",Rt.checked?"evet":"hayir")));let Ot={kisa:()=>{let I=Dt(".tutamac"),B=Dt(".kart-ust"),Q=Dt(".kart-alt"),pt=!!(Q&&B&&Q.offsetTop<B.offsetTop+B.offsetHeight);return(I?.offsetHeight||0)+Math.max(B?.offsetHeight||0,pt?Q.offsetHeight:0)+(pt?0:Q?.offsetHeight||0)+2},yarim:()=>T.clientHeight*.5,tam:()=>T.clientHeight*.92},Bt=88,L=()=>Ot.yarim()-Ot.kisa()+2>=Bt,he=I=>I==="yarim"&&!L()?"kisa":I,te=["kisa","yarim","tam"].includes(Pn("bote-3d-sayfa"))?Pn("bote-3d-sayfa"):"yarim";function R(I,B=!0,Q=!1){if(!H.matches){delete ne.dataset.sayfa,T.style.removeProperty("--sayfa-h"),m?.gorunurAlan(0,!0),k(ne.dataset.panel!=="kapali",!1);return}te=I;let pt=he(I);ne.dataset.sayfa=pt,P.inert=!1;let st=Math.round(Ot[pt]());Q&&(ne.dataset.suruklenen="1"),T.style.setProperty("--sayfa-h",`${st}px`),Q&&requestAnimationFrame(()=>delete ne.dataset.suruklenen),m?.gorunurAlan(st,Q),B&&wn("bote-3d-sayfa",I)}let x=null;for(let I of[Dt(".tutamac"),Dt(".kart-ust")].filter(Boolean)){I.addEventListener("pointerdown",Q=>{if(!H.matches||Q.target.closest("button"))return;I.setPointerCapture(Q.pointerId);let pt=performance.now();x={y:Q.clientY,h:P.getBoundingClientRect().height,sonY:Q.clientY,sonT:pt,hiz:0},ne.dataset.suruklenen="1"}),I.addEventListener("pointermove",Q=>{if(!x)return;let pt=performance.now(),st=Math.max(Ot.kisa(),Math.min(Ot.tam(),x.h+(x.y-Q.clientY)));T.style.setProperty("--sayfa-h",`${Math.round(st)}px`),x.hiz=(x.sonY-Q.clientY)/Math.max(1,pt-x.sonT),x.sonY=Q.clientY,x.sonT=pt});let B=Q=>{if(!x)return;let pt=x;x=null,delete ne.dataset.suruklenen;let st=P.getBoundingClientRect().height,Yt=Math.abs(Q.clientY-pt.y)>6,Vt=L(),ie=Vt?"yarim":"tam",ce;Yt?pt.hiz>.45?ce=st<Ot.yarim()?ie:"tam":pt.hiz<-.45?ce=Vt&&st>Ot.yarim()?"yarim":"kisa":ce=(Vt?["kisa","yarim","tam"]:["kisa","tam"]).sort((de,Ae)=>Math.abs(Ot[de]()-st)-Math.abs(Ot[Ae]()-st))[0]:ce=ne.dataset.sayfa==="kisa"?ie:"kisa",R(ce),Yn({kisa:"Kartlar k\xFC\xE7\xFCld\xFC",yarim:"Kartlar yar\u0131m ekran",tam:"Kartlar tam ekran"}[ce])};I.addEventListener("pointerup",B),I.addEventListener("pointercancel",B)}let z=()=>R(te,!1,!0);H.addEventListener?.("change",z);let q=0;window.addEventListener("resize",()=>{clearTimeout(q),q=setTimeout(()=>{H.matches&&R(te,!1,!0)},120)}),R(te,!1,!0),window.addEventListener("hashchange",()=>{let I=p.findIndex(B=>`#${B.id}`===location.hash);I>=0&&I!==_&&b(I)});let nt=p.findIndex(I=>`#${I.id}`===location.hash);b(nt>0?nt:0,!0),document.addEventListener("click",I=>{let B=I.target.closest("[data-eylem]");if(!B||!m||!f)return;let Q=f.eylem?.(B.dataset.eylem,B);typeof Q=="boolean"&&B.hasAttribute("aria-pressed")&&B.setAttribute("aria-pressed",String(Q)),m.iste()}),ke(".gorunum button").forEach(I=>I.addEventListener("click",()=>Ct(I.dataset.gorunum))),Dt("#yakinlas")?.addEventListener("click",()=>m?.yakinlas(.8)),Dt("#uzaklas")?.addEventListener("click",()=>m?.yakinlas(1.25)),window.addEventListener("pagehide",I=>{I.persisted||f?.durdur?.()});let yt=Dt(".sahne-alani");requestAnimationFrame(()=>setTimeout(St,20));function St(){if(o.length){ne.dataset.webgl="yok";return}if(m=Of(Dt("#sahne"),{arkaPlan:a(),olay:Pt,guvenliAlan:mt}),!m){ne.dataset.webgl="yok";return}t.S=m;try{if(f=i.sahneyiKur(m,{olay:rt,ders:l,veri:s}),typeof f?.adimUygula!="function")throw new Error("adapt\xF6r adimUygula vermedi")}catch(I){console.error(`dersMotoru(${i.id||"?"}): sahne kurulamad\u0131, yedek aray\xFCz a\xE7\u0131ld\u0131.`,I),m.scene.clear(),Dt("#sahne").style.visibility="hidden",m=t.S=f=null,ne.dataset.webgl="yok";return}m.dokunmaDinle(Lt),H.matches&&m.gorunurAlan(Math.round(Ot[he(te)]()),!0),At(p[_].dataset.id,!0),requestAnimationFrame(()=>yt.classList.add("hazir")),h&&(xt(),window.__3d={S:m,adaptor:f,adimaGit:b,kameraBul:Zt,gorunumSec:Ct,adim:()=>p[_].dataset.id,...f.olcumEk})}function rt(I,B){I==="duyur"&&Yn(B)}function mt(){let I=Dt("#sahne").getBoundingClientRect(),B=ne.dataset.mod==="tahta"?24:14,Q=B,pt=B,st=ke(".ipucu",yt).find(ce=>ce.offsetParent!==null);st&&(Q=Math.max(Q,st.getBoundingClientRect().bottom-I.top+8));let Yt=Dt(".sahne-arac",yt);Yt&&getComputedStyle(Yt).opacity!=="0"&&(pt=Math.max(pt,I.bottom-Yt.getBoundingClientRect().top+8));let Vt=[],ie=Dt("#lejant");if(ie&&ie.offsetParent!==null){let ce=ie.getBoundingClientRect();Vt.push({x0:ce.left-I.left,y0:ce.top-I.top,x1:ce.right-I.left,y1:ce.bottom-I.top})}return{ust:Q,alt:pt,sol:B,sag:B,engel:Vt}}function Pt(I){I==="baglam-kaybi"&&yt.classList.add("baglam-kaybi"),I==="baglam-geri"&&yt.classList.remove("baglam-kaybi")}Dt("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function Zt(I,B={}){let Q=f?.kameraBul?.(I,B);if(Q)return Q;let pt=n[I];if(pt)return{kutu:new cn(new C(pt.kutu[0],pt.kutu[1],pt.kutu[2]),new C(pt.kutu[3],pt.kutu[4],pt.kutu[5])),yon:pt.yon};let st=f?.kutuBul?.(I);return st&&n.genel?{kutu:st,yon:n.genel.yon}:I==="genel"?null:Zt("genel",B)}function Ct(I){let B=m&&Zt(A().kamera||"genel",A()),Q=i.GORUNUM?.[I];B&&m.kameraGit(Q?{...B,yon:Q}:B);for(let pt of ke(".gorunum button"))pt.setAttribute("aria-pressed",String(pt.dataset.gorunum===I))}function At(I,B=!1){let Q=l.adimlar[I]||{};for(let st of ke("[data-eylem][aria-pressed]"))st.setAttribute("aria-pressed",g.get(st)||"false");for(let st of ke(".gorunum button"))st.setAttribute("aria-pressed",String(st.dataset.gorunum==="egik"));f.adimUygula(I,Q,B);for(let st of v)m.scene.remove(st),st.traverse(Yt=>Yt.geometry?.dispose());v=i.vurguYap?(Q.vurgu||[]).map(st=>f.alanlar?.[st]?i.vurguYap(m.scene,f.alanlar[st]):null).filter(Boolean):[],yt.dataset.ipucu=f.ipucu?f.ipucu(Q):Q.dokun?"dokun":"";let pt=Zt(Q.kamera||"genel",Q);pt&&m.kameraGit(pt,B),ne.dataset.kesif==="acik"&&dt(),m.iste(),h&&Jt(I,Q)}function Jt(I,B){!B.etiket?.length||!f.noktaBul||setTimeout(()=>{if(!f||p[_].dataset.id!==I)return;let Q=B.etiket.map(pt=>pt[0]).filter(pt=>{try{return!f.noktaBul(pt)}catch{return!0}});Q.length&&console.warn(`[olcum] ${i.id}/${s.slug} ad\u0131m "${I}": noktaBul bo\u015F d\xF6nd\xFC, etiket \xE7izilmedi: ${Q.join(", ")}`)},2500)}let se=Dt("#kesif-sablon"),re=Dt("#lejant");re&&window.matchMedia("(min-width: 700px) and (min-height: 600px)").matches&&(re.open=!0),re?.addEventListener("toggle",()=>m?.guvenliYenile());let F=(I,B)=>{let Q=se?.content.querySelector(`[data-kat="${B}"] svg`);I&&Q&&I.replaceChildren(Q.cloneNode(!0))};function Et(I,B,Q,pt){let st=d(I);if(!st)return null;let Yt=document.createElement("button");Yt.type="button",Yt.className=pt?"kesif-isaret pin-isaret":"kesif-isaret",Yt.dataset.kat=st,Yt.dataset.id=I;let Vt=document.createElement("span");Vt.className="ki-daire",F(Vt,st);let ie=document.createElement("span");return ie.className="ki-no",ie.textContent=pt||String(B),ie.setAttribute("aria-hidden","true"),Yt.append(Vt,ie),Yt.setAttribute("aria-label",pt?`${Q}, ${u[st].ad} grubu`:`${B}. ke\u015Fif noktas\u0131, ${u[st].ad} grubu`),Yt.addEventListener("click",ce=>{ce.stopPropagation();for(let de of ke(".kesif-isaret[aria-current]"))de.removeAttribute("aria-current");Yt.setAttribute("aria-current","true"),Me(I,Rt?Rt.checked:!0,Q)}),{el:Yt,kat:st}}function dt(){if(!m||!f)return;let I=[],B=new Set,Q=0,pt=({id:st,ozel:Yt,rozet:Vt,adim:ie=0,...ce})=>{let de=Et(st,Q+1,Yt,Vt);de&&(Vt||Q++,B.add(de.kat),I.push({el:de.el,oncelik:c[st].oncelik,adim:ie,...ce}))};for(let st of f.kesifNoktalari||[])pt(st);for(let st of f.kesifEk?.(A())||[])pt(st);m.isaretKoy(I);for(let st of ke("li[data-kat]",re||document.createElement("i")))st.hidden=!B.has(st.dataset.kat)}let Tt=Dt("#kesif-dugme");Tt?.addEventListener("click",()=>{let I=ne.dataset.kesif!=="acik";ne.dataset.kesif=I?"acik":"",Tt.setAttribute("aria-pressed",String(I)),m?.guvenliYenile(),I?(dt(),Yn("Ke\u015Fif modu a\xE7\u0131k: i\u015Faretli par\xE7alara dokun. \u0130\u015Faretin rengi ve simgesi par\xE7an\u0131n grubunu g\xF6sterir.")):(m?.isaretKoy([]),K(),Yn("Ke\u015Fif modu kapand\u0131"))});function Lt(I,B){if(!I){K();return}if(f?.dokunuldu?.(I,B)){m.iste();return}I.kesif&&Me(I.kesif,ne.dataset.kesif==="acik"&&(Rt?Rt.checked:!0),I.ozel)}function _t(I){let B=s.kavramlar||{},Q=s.kesifIcerik||{},pt=c[I];return B[I]?{...B[I],ad:pt?.ad||B[I].ad}:Q[I]?{...Q[I],ad:Q[I].ad||pt?.ad||I}:pt?.kavram&&B[pt.kavram]?{...B[pt.kavram],ad:pt.ad}:pt?{ad:pt.ad,yalin:pt.kisa}:null}let Xt=!1,Ht="";function Me(I,B=!1,Q=""){let pt=Dt("#bilgi"),st=I?_t(I):null;if(!pt||!st)return;let Yt=ne.dataset.sinif||"6",Vt=I!==S||pt.hidden;B!=="koru"&&(Xt=!!B,Ht=Q||"");let ie=Dt("#kesif-soru"),ce=Dt("#bilgi-cevap");ie&&(ie.hidden=!Xt),ce&&(ce.hidden=Xt);let de=d(I),Ae=Dt("#bilgi-kat");Ae&&(Ae.hidden=!de,de&&(Ae.dataset.kat=de,Dt("#bilgi-kat-ad").textContent=u[de].ad,F(Dt(".ki-daire",Ae),de))),Dt("#bilgi-baslik").textContent=st.ad;let qe=Dt("#bilgi-ozel");if(qe&&(qe.textContent=Ht,qe.hidden=!Ht||Ht===st.ad),st.yalin?(Dt("#bilgi-teknik").textContent=st.yalin,Dt("#bilgi-sosyal").textContent="",pt.classList.add("yalin")):(Dt("#bilgi-teknik").innerHTML=st.teknik?.[Yt]||st.teknik?.["6"]||"",Dt("#bilgi-sosyal").innerHTML=st.sosyal?.[Yt]||"",pt.classList.toggle("yalin",!st.sosyal?.[Yt])),Vt){let Fe=Dt("#bilgi-gorsel");if(Fe){Fe.hidden=!0;let Sn=Dt("img",Fe);Sn&&(Sn.removeAttribute("src"),Sn.alt="")}}S=I,pt.hidden=!1,H.matches&&te==="tam"&&R("yarim"),Yn(Xt?"Sence bu nedir? Cevab\u0131 g\xF6r d\xFC\u011Fmesine bas":[st.ad,Ht].filter(Boolean).join(", ")),Vt&&document.dispatchEvent(new CustomEvent("3d:bilgi",{detail:{id:I}}))}M=()=>Me(S,"koru"),document.addEventListener("3d:kesif-ac",I=>{let B=I.detail?.id;B&&Me(B,Rt?Rt.checked:!0,I.detail.ozel)}),Dt("#kesif-gor")?.addEventListener("click",()=>{Xt=!1,Me(S,"koru"),Dt("#bilgi-baslik")?.focus?.()});function K(){let I=Dt("#bilgi");I&&(I.hidden=!0),S=null;for(let B of ke(".kesif-isaret[aria-current]"))B.removeAttribute("aria-current")}Dt("#bilgi-kapat")?.addEventListener("click",K);function xt(){let I=document.createElement("div");I.className="olcum",yt.appendChild(I);let B=0,Q=performance.now(),pt=Q,st=0;m.kareGuncelleyici(Yt=>(B++,st=Math.max(st,Yt-pt),pt=Yt,!1)),setInterval(()=>{let Yt=performance.now(),Vt=m.kalite();I.textContent=`${Math.round(B*1e3/(Yt-Q))} kare/sn \xB7 en uzun ${Math.round(st)} ms \xB7 \xF6l\xE7ek ${Vt.piksel} (tam ${Vt.tam}, kademe ${Vt.kademe})`,B=0,Q=Yt,st=0},1e3)}}function zn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ge,c=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let p=i[h].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=zf(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let _=0;_<a[u].length;++_)p.push(a[u][_][h]);let g=zf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function zf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new _n(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<e;g++){let _=u.getComponent(h,g);o.setComponent(h+d,g,_)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Wa=new C;function Jn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Wa.copy(t),Wa[n]=0,Wa.normalize();let c=.5*a/(a+o),u=1-Wa.angleTo(i)/l;return Math.sign(Wa[e])===1?u*c:o/(a+o)+c+c*(1-u)}var Cn=class i extends ge{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,u=new C(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=d.length/6,_=new C,m=.5/a;for(let f=0,v=0;f<d.length;f+=3,v+=2)switch(l.fromArray(d,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[f+0]=u.x*Math.sign(l.x)+c.x*r,d[f+1]=u.y*Math.sign(l.y)+c.y*r,d[f+2]=u.z*Math.sign(l.z)+c.z*r,h[f+0]=c.x,h[f+1]=c.y,h[f+2]=c.z,Math.floor(f/g)){case 0:_.set(1,0,0),p[v+0]=Jn(_,c,"z","y",r,n),p[v+1]=1-Jn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),p[v+0]=1-Jn(_,c,"z","y",r,n),p[v+1]=1-Jn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),p[v+0]=1-Jn(_,c,"x","z",r,t),p[v+1]=Jn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),p[v+0]=1-Jn(_,c,"x","z",r,t),p[v+1]=1-Jn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),p[v+0]=1-Jn(_,c,"x","y",r,t),p[v+1]=1-Jn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),p[v+0]=Jn(_,c,"x","y",r,t),p[v+1]=1-Jn(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var hc={x:45.2,z:21.6,a:6,arduinoZ:28,unoX:57.4,unoZ:21.9};function Vf(i,t,e){let{x:n,z:s,a:r}=hc;i.save(),i.strokeStyle=e,i.fillStyle=e,i.lineCap="round",i.lineJoin="round",i.lineWidth=1.05*t,i.beginPath();for(let u=0;u<=160;u++){let d=u/160*Math.PI*2,h=n+r*Math.cos(d),p=s+r*.62*Math.sin(2*d)*.92;u?i.lineTo(h*t,p*t):i.moveTo(h*t,p*t)}i.closePath(),i.stroke();let a=r*.2,o=.8*t,l=n-r*.52,c=n+r*.52;i.lineWidth=o,i.lineCap="butt",i.beginPath(),i.moveTo((l-a)*t,s*t),i.lineTo((l+a)*t,s*t),i.stroke(),i.beginPath(),i.moveTo((c-a)*t,s*t),i.lineTo((c+a)*t,s*t),i.moveTo(c*t,(s-a)*t),i.lineTo(c*t,(s+a)*t),i.stroke(),i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(n*t,hc.arduinoZ*t),i.scale(.92,1),i.font=`800 ${2.5*t}px "Arial Black", "Arial", Helvetica, sans-serif`,i.fillText("ARDUINO",0,0),i.restore(),i.save(),i.translate(hc.unoX*t,hc.unoZ*t),i.scale(.9,1),i.font=`800 ${4.6*t}px "Arial Black", "Arial", Helvetica, sans-serif`,i.fillText("UNO",0,0),i.restore(),i.restore()}function fc(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function jn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d",{willReadFrequently:!1})]}var rh={sade:{pcb:2048,pcbN:0,bb:1536,bbN:0,aniz:8},dusuk:{pcb:1536,pcbN:0,bb:1536,bbN:0,aniz:4},orta:{pcb:2048,pcbN:1024,bb:2048,bbN:1024,aniz:8},yuksek:{pcb:4096,pcbN:2048,bb:3072,bbN:1536,aniz:16}};function dc(i,t,e,n,s,r){let a=fc(n),o=Math.max(2,Math.round(t/s)),l=Math.max(2,Math.round(e/s)),[c,u]=jn(o,l),d=u.createImageData(o,l);for(let h=0;h<o*l;h++){let p=a()<.5?0:255;d.data[h*4]=d.data[h*4+1]=d.data[h*4+2]=p,d.data[h*4+3]=Math.round(a()*255*r)}u.putImageData(d,0,0),i.save(),i.imageSmoothingEnabled=!0,i.drawImage(c,0,0,t,e),i.restore()}function ah(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,[r,a]=jn(e,n),o=a.createImageData(e,n),l=o.data,c=(u,d)=>s[(Math.min(n-1,Math.max(0,d))*e+Math.min(e-1,Math.max(0,u)))*4];for(let u=0;u<n;u++)for(let d=0;d<e;d++){let h=(c(d-1,u)-c(d+1,u))*t/255,p=(c(d,u+1)-c(d,u-1))*t/255,g=1,_=Math.hypot(h,p,g);h/=_,p/=_,g/=_;let m=(u*e+d)*4;l[m]=(h*.5+.5)*255,l[m+1]=(p*.5+.5)*255,l[m+2]=(g*.5+.5)*255,l[m+3]=255}return a.putImageData(o,0,0),r}function Ri(i,t,e,n=!1){let s=new Ji(i);return s.colorSpace=t?Qe:mi,s.minFilter=Ai,s.magFilter=tn,s.anisotropy=e,n&&(s.wrapS=s.wrapT=ar),s}var ih={albedo:{maske:"#0d7783",iz:"#3fb0bb",ped:"#cfd3d8",altin:"#d9b04f",delik:"#101214",ipek:"#f2f7f7",izAlfa:.32},orm:{maske:"rgb(255,117,0)",iz:"rgb(255,105,0)",ped:"rgb(255,77,255)",altin:"rgb(255,70,255)",delik:"rgb(255,200,0)",ipek:"rgb(255,158,0)",izAlfa:1},yuk:{maske:"rgb(128,128,128)",iz:"rgb(150,150,150)",ped:"rgb(112,112,112)",altin:"rgb(110,110,110)",delik:"rgb(60,60,60)",ipek:"rgb(146,146,146)",izAlfa:1}},Xf=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],rv=[{k:[10.5,24.5,9.5,22.5],n:18},{k:[12,30,22.5,30.5],n:8},{k:[3,17,1.5,14],n:8},{k:[2,22,41,52],n:14},{k:[24,64,29,33],n:10},{k:[24,64,41.5,48],n:10},{k:[20,66,5,9.5],n:10}],av=[[20.07,45.47,1.27,3.81],[46.99,67.31,1.27,3.81],[25.15,45.47,49.53,52.07],[48.01,63.25,49.53,52.07],[-6.35,9.65,9.24,21.24],[-1.8,12.2,40.4,49.4],[25.75,63.25,32.2,41.4],[17.5,22.5,15,20],[15.75,26.25,24.8,29.2],[11.75,18.25,43.1,49.25],[9.85,16.15,28.35,34.65],[16.35,22.65,34.35,40.65],[4.4,10.4,2.2,8.2],[62.33,67.41,22.86,30.48],[27,30,9.6,16.4],[60,63,9.6,11.6],[37,53.5,16.5,29.6],[53.5,61.5,18.5,25.5],[30,62,9.4,11.8],[24,47,40.6,43.4],[47,64,40.6,43.4]];function Yf(i=1){let t=[],e=(n,s,r,a,o)=>av.some(([l,c,u,d])=>s+o>l&&n-o<c&&a+o>u&&r-o<d)||Xf.some(([l,c])=>Math.hypot((n+s)/2-l,(r+a)/2-c)<3.6)||t.some(l=>s+.4>l.x-l.w/2&&n-.4<l.x+l.w/2&&a+.4>l.z-l.d/2&&r-.4<l.z+l.d/2);return rv.forEach((n,s)=>{let r=fc(6221056+s),a=Math.round(n.n*i),o=0;for(let l=0;l<400&&o<a;l++){let c=r()<.62?"direnc":"kond",u=c==="direnc"?1.6:2,d=c==="direnc"?.8:1.25,h=r()<.5,p=h?u:d,g=h?d:u,_=Math.round((n.k[0]+r()*(n.k[1]-n.k[0]))/.8)*.8,m=Math.round((n.k[2]+r()*(n.k[3]-n.k[2]))/.8)*.8;_-p/2<n.k[0]||_+p/2>n.k[1]||m-g/2<n.k[2]||m+g/2>n.k[3]||e(_-p/2,_+p/2,m-g/2,m+g/2,.6)||(t.push({x:_,z:m,w:p,d:g,yatay:h,tur:c,ad:`${c==="direnc"?"R":"C"}${t.length+1}`}),o++)}}),t}function sh(i,t,e,n,{smd:s,logo:r,sus:a}){let o=t/Ye.w;i.fillStyle=n.maske,i.fillRect(0,0,t,e),i.save(),i.globalAlpha=n.izAlfa,i.strokeStyle=n.iz,i.lineWidth=.25*o,i.lineCap="round",i.lineJoin="round";let l=f=>{i.beginPath(),f.forEach(([v,S],M)=>M?i.lineTo(v*o,S*o):i.moveTo(v*o,S*o)),i.stroke()};for(let f=0;f<14;f++){let v=31.5+f*2.54>46?33+f*2.54:31.5+f*2.54,S=7+f%4*.8;l([[v,4.6],[v,S],[v-2.2,S+2.2],[v-2.2,30.5]])}for(let f=0;f<6;f++){let v=49.3+f*2.54;l([[v,48.4],[v,45.2-f*.3],[v-2.4,42.8-f*.3],[v-2.4,41.6]])}l([[10.5,13.5],[16,13.5],[18.5,16]]),l([[10.5,17.6],[15,17.6],[17.8,20.4],[21,20.4]]),l([[8,44],[13,44],[15.5,46.5]]),l([[36.5,48.4],[36.5,45.5],[33,42],[16,42]]),l([[39,48.4],[39,45.4],[29,45.4]]),l([[23,17.5],[26,17.5],[28.5,20],[28.5,30.5]]),l([[24.5,27],[27,27],[29.5,29.5]]),l([[3,30],[8,30],[10.5,27.5],[10.5,22]]),l([[57,28.5],[60,28.5],[62.4,26.1]]),i.restore(),i.fillStyle=n.ped;for(let f of s){let v=f.yatay?f.w*.3:f.w*1.08,S=f.yatay?f.d*1.08:f.d*.3;for(let M of[-1,1]){let A=f.x+(f.yatay?M*(f.w/2-v/2+.1):0),b=f.z+(f.yatay?0:M*(f.d/2-S/2+.1));i.fillRect((A-v/2)*o,(b-S/2)*o,v*o,S*o)}}for(let[f,v]of Xf)i.fillStyle=n.altin,i.beginPath(),i.arc(f*o,v*o,2.8*o,0,Math.PI*2),i.fill(),i.fillStyle=n.delik,i.beginPath(),i.arc(f*o,v*o,1.6*o,0,Math.PI*2),i.fill();let c=n.ipek;i.strokeStyle=c,i.fillStyle=c,i.lineWidth=.2*o;let u=(f,v,S,M)=>i.strokeRect(f*o,v*o,(S-f)*o,(M-v)*o);u(20,1.2,45.5,3.9),u(47,1.2,67.3,3.9),u(25.1,49.5,45.5,52.1),u(48,49.5,63.3,52.1);let d='"Arial Narrow", "Roboto Condensed", "Liberation Sans Narrow", Arial, Helvetica, sans-serif',h=(f,v,S,M,{don:A=0,hiza:b="center",kalin:E=700,dar:y=.84}={})=>{i.save(),i.translate(v*o,S*o),i.rotate(A),i.scale(y,1),i.font=`${E} ${M*o}px ${d}`,i.textAlign=b,i.textBaseline="middle",i.fillText(f,0,0),i.restore()},p=-Math.PI/2,g={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX\u21921",0:"RX\u21900"};for(let[f,v]of Object.entries(g))h(v,Ci[f],4.4,1.25,{don:p,hiza:"right"});h("DIGITAL (PWM~)",46,10.6,1.5);let _={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[f,v]of Object.entries(_))h(v,ds[f],48.3,1.2,{don:p,hiza:"left"});for(let[f,v]of Object.entries(fs))h(f,v,48.3,1.25,{don:p,hiza:"left"});h("POWER",35.3,42,1.5),h("ANALOG IN",55.6,42,1.5),h("L",26.6,10.6,1.2),h("TX",25.9,13.3,1),h("RX",25.9,15.4,1),h("ON",64.4,10.6,1.2),h("RESET",7.4,10.3,1.1),h("ICSP",64.9,21.9,1.1);let m=(f,v,S)=>{i.beginPath(),i.arc(f*o,v*o,S*o,0,Math.PI*2),i.fill()};m(62,24.1,.35),m(25.4,34.6,.35);for(let[f,v]of[[13,31.5],[19.5,37.5]])i.beginPath(),i.arc(f*o,v*o,3.5*o,0,Math.PI*2),i.stroke(),h("+",f+3.9,v-2.4,1.3);if(i.strokeRect((44.5-18.9)*o,(36.8-4.75)*o,37.8*o,9.5*o),a){h("C1",9.2,31.5,.8,{kalin:600}),h("C2",23.2,37.5,.8,{kalin:600}),h("Y1",21,29.9,.8,{kalin:600}),h("U1",44.5,43.6,.8,{kalin:600}),h("U3",20,21.2,.8,{kalin:600}),h("X1",5.2,38.6,.8,{kalin:600});for(let f of s.slice(0,26))f.x>4&&f.x<64&&h(f.ad,f.x,f.z+(f.yatay?1.15:1.55),.62,{kalin:600})}r&&Vf(i,o,c)}function qf(i,{smd:t,logo:e}){let n=rh[i],s=n.pcb,r=Math.round(s*Ye.d/Ye.w),[a,o]=jn(s,r);sh(o,s,r,ih.albedo,{smd:t,logo:e,sus:!0}),i!=="sade"&&(dc(o,s,r,45223,s/110,.05),dc(o,s,r,45224,s/420,.04));let l={albedo:Ri(a,!0,n.aniz)};if(n.pcbN){let c=n.pcbN,u=Math.round(c*Ye.d/Ye.w),[d,h]=jn(c,u);sh(h,c,u,ih.yuk,{smd:t,logo:e,sus:!0}),l.normal=Ri(ah(d,i==="yuksek"?2.2:1.6),!1,n.aniz);let[p,g]=jn(c,u);sh(g,c,u,ih.orm,{smd:t,logo:e,sus:!0}),l.orm=Ri(p,!1,n.aniz)}return l}var Gf={albedo:{govde:"#f1eee6",kanal:"#d9d4c9",kanalCizgi:"#c9c3b7",halka:"#dcd7cb",halkaKoyu:"#c7c1b4",delik:"#232327",kirmizi:"#d23b3b",mavi:"#2f62c9",yazi:"#8a8478"},yuk:{govde:"rgb(128,128,128)",kanal:"rgb(96,96,96)",kanalCizgi:"rgb(88,88,88)",halka:"rgb(104,104,104)",halkaKoyu:"rgb(92,92,92)",delik:"rgb(24,24,24)",kirmizi:"rgb(128,128,128)",mavi:"rgb(128,128,128)",yazi:"rgb(122,122,122)"}},Hf=i=>It.x-36.83+(i-1)*Vn;function Wf(i,t,e,n){let s=t/It.w,r=c=>(c-It.x+It.w/2)*s,a=c=>(c+It.d/2)*s;i.fillStyle=n.govde,i.fillRect(0,0,t,e),i.fillStyle=n.kanal,i.fillRect(0,a(-1.5),t,3*s),i.fillStyle=n.kanalCizgi,i.fillRect(0,a(-1.5),t,.25*s),i.fillRect(0,a(1.25),t,.25*s);let o=(c,u)=>{let d=r(c),h=a(u),p=1.55*s,g=1*s;i.fillStyle=n.halkaKoyu,i.fillRect(d-p/2,h-p/2,p,p),i.fillStyle=n.halka,i.fillRect(d-p/2+.22*s,h-p/2+.22*s,p-.22*s,p-.22*s),i.fillStyle=n.delik,i.fillRect(d-g/2,h-g/2,g,g)};for(let c=1;c<=30;c++)for(let u of Object.values(Is))o(Hf(c)-It.x,u);for(let c of Object.values(In))for(let u of Ps)o(Hf(u)-It.x,c);for(let c of[1,-1])i.fillStyle=n.kirmizi,i.fillRect(r(-37),a(c*23.6)-.3*s,r(37)-r(-37),.6*s),i.fillStyle=n.mavi,i.fillRect(r(-37),a(c*16.9)-.3*s,r(37)-r(-37),.6*s);let l='"Arial Narrow", "Roboto Condensed", Arial, Helvetica, sans-serif';i.textAlign="center",i.textBaseline="middle",i.font=`700 ${2.1*s}px ${l}`;for(let c of[1,-1])for(let u of[-39.4,39.4])i.fillStyle=n.kirmizi,i.fillText("+",r(u),a(c*In["yakin+"])),i.fillStyle=n.mavi,i.fillText("\u2212",r(u),a(c*In["yakin-"]));i.fillStyle=n.yazi,i.font=`700 ${1.45*s}px ${l}`;for(let[c,u]of Object.entries(Is))for(let d of[-39.3,39.3])i.fillText(c,r(d),a(u));for(let c of[1,5,10,15,20,25,30])for(let u of[1,-1])i.fillText(String(c),r(-36.83+(c-1)*Vn),a(u*15.45))}function Kf(i){let t=rh[i],e=t.bb,n=Math.round(e*It.d/It.w),[s,r]=jn(e,n);Wf(r,e,n,Gf.albedo),dc(r,e,n,47873,e/90,.035);let a={albedo:Ri(s,!0,t.aniz)};if(t.bbN){let o=t.bbN,l=Math.round(o*It.d/It.w),[c,u]=jn(o,l);Wf(u,o,l,Gf.yuk),a.normal=Ri(ah(c,2.4),!1,t.aniz)}return a}function ov(i){let[t,e]=jn(1024,216);return e.fillStyle="#17171a",e.fillRect(0,0,1024,216),dc(e,1024,216,3103,6,.06),e.fillStyle="#0b0b0d",e.beginPath(),e.arc(0,108,30,-Math.PI/2,Math.PI/2),e.fill(),e.strokeStyle="#26262b",e.lineWidth=3,e.beginPath(),e.arc(70,170,16,0,Math.PI*2),e.stroke(),e.fillStyle="#9ea2a9",e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(540,84),e.scale(.9,1),e.font='700 64px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("ATMEGA328P-PU",0,0),e.restore(),e.save(),e.translate(540,150),e.scale(.9,1),e.font='600 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillStyle="#80848b",e.fillText("AVR",0,0),e.restore(),Ri(t,!0,i)}function lv(i){let[t,e]=jn(256,96);return e.fillStyle="#c9ccd2",e.fillRect(0,0,256,96),e.fillStyle="#2a2a2e",e.textAlign="center",e.textBaseline="middle",e.font='700 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("16.000",128,50),Ri(t,!0,i)}function cv(i){let[t,e]=jn(256,64);e.fillStyle="#1c1d22",e.fillRect(0,0,256,64),e.fillStyle="#b9bdc4",e.fillRect(150,0,56,64),e.fillStyle="#1c1d22";for(let n of[12,30,48])e.fillRect(166,n-2,24,5);return Ri(t,!0,i)}function Zf(i,t,e,n){let[r,a]=jn(16,512);a.fillStyle="#d8c69c",a.fillRect(0,0,16,512);let o=fc(3358);for(let c=0;c<90;c++)a.fillStyle=o()<.5?"rgba(120,90,40,0.06)":"rgba(255,255,255,0.06)",a.fillRect(0,o()*512,16,2+o()*6);let l=4.6*24/256;return i.forEach((c,u)=>{let h=(1-(t[u]+e/2)/e)*512;a.fillStyle=oh[c],a.fillRect(0,h-l/e*512/2,16,l/e*512)}),Ri(r,!0,n)}function uv(){let[i,t]=jn(128,128),e=fc(3868);t.fillStyle="rgb(128,128,128)",t.fillRect(0,0,128,128);for(let s=0;s<260;s++){let r=110+Math.round(e()*36);t.fillStyle=`rgb(${r},${r},${r})`,t.fillRect(0,Math.floor(e()*128),128,1)}let n=Ri(ah(i,.8),!1,4,!0);return n.repeat.set(2,2),n}function pc(i,t){let e=rh[i],n=Math.min(e.aniz,t||1),s=i==="dusuk"||i==="sade",r=new Map,a=[],o=g=>(g&&a.push(g),g),l=g=>new Se(g),c={baslikPlastik:()=>l({color:1973794,roughness:.55}),baslikIc:()=>l({color:526346,roughness:.9}),metalCelik:()=>l({color:13619928,metalness:1,roughness:.32}),metalFirca:()=>l({color:13093584,metalness:1,roughness:.38,normalMap:s?null:o(uv()),normalScale:new lt(.35,.35)}),kalay:()=>l({color:12896462,metalness:1,roughness:.3}),altin:()=>l({color:14266447,metalness:1,roughness:.28}),kapAlu:()=>l({map:o(cv(n)),metalness:.55,roughness:.42}),kapUst:()=>l({color:12041154,metalness:.9,roughness:.35}),cipGovde:()=>l({color:1513242,roughness:.62}),cipUst:()=>l({map:o(ov(n)),roughness:.62}),kristal:()=>l({map:o(lv(n)),metalness:.95,roughness:.3}),kristalYan:()=>l({color:13225170,metalness:.95,roughness:.3}),resetTaban:()=>l({color:1710622,roughness:.55}),resetDugme:()=>l({color:14207392,roughness:.5}),ayak:()=>l({color:3487034,roughness:.85}),pcbKenar:()=>l({color:10723188,roughness:.7}),jak:()=>l({color:1579035,roughness:.5}),koyu:()=>l({color:657932,roughness:.95}),smdDirenc:()=>l({color:1776413,roughness:.5}),smdKond:()=>l({color:11045722,roughness:.55}),bbYan:()=>l({color:15526111,roughness:.62}),klips:()=>l({color:12094026,metalness:1,roughness:.38}),dupont:()=>l({color:2763312,roughness:.55}),butonKapak:()=>l({color:14172995,roughness:.42})};function u(g){if(!r.has(g)){let _=c[g];if(!_)throw new Error("bilinmeyen malzeme "+g);r.set(g,_())}return r.get(g)}function d(g){let _={color:new Qt(g).lerp(new Qt(16777215),.35),emissive:new Qt(g),emissiveIntensity:0,roughness:.16,metalness:0,transparent:!s,opacity:s?1:.8,depthWrite:!0};return p(i==="yuksek"?new ba({..._,clearcoat:1,clearcoatRoughness:.08}):l(_))}let h=[],p=g=>(h.push(g),g);return{duzey:i,aniz:n,mat:u,ledKubbe:d,kayit:o,kayitMat:p,ek:g=>(i==="sade"?{smd:!0}:{smd:!0,soket:i!=="dusuk",ledIc:i!=="dusuk"})[g]??!1,dispose(){for(let g of r.values())g.dispose();for(let g of h)g.dispose();for(let g of a)g.dispose()}}}var hv="uyumlu",dv={uyumlu:[[0,0],[66.38,0],[67.9,1.52],[67.9,14.3],[68.58,14.98],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],gercek:[[0,0],[64.52,0],[66.04,1.52],[66.04,12.95],[68.58,15.49],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],dikdortgen:[[0,0],[68.58,0],[68.58,53.34],[0,53.34]]},lh=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],rn=(i,t,e,n,s,r)=>{let a=new ge(i,t,e);return a.translate(n,s,r),a},Dr=(i,t,e,n,s,r,a)=>{let o=new Cn(i,t,e,2,n);return o.translate(s,r,a),o},ch=(i,t,e,n,s,r=16,a=i)=>{let o=new un(a,i,t,r);return o.translate(e,n,s),o},fv=i=>i.index?i.toNonIndexed():i;function an(i,t,e=!0){let n=new Gt(zn(i.map(fv),!1),t);return n.castShadow=n.receiveShadow=e,n}function uh(i,t,e,n=16){let s=new ts(i,{depth:t,bevelEnabled:!1,curveSegments:n});return s.rotateX(Math.PI/2),s.translate(0,e,0),s}var pv=(i,t,e,n=24)=>{let s=new Qi;return s.absarc(i,t,e,0,Math.PI*2,!0),s.curves.length&&(s.autoClose=!0),s};function mc(i,{logo:t=!0}={}){let e=new Oe;e.name="kart-fiziksel";let n=i.duzey,s=n!=="dusuk",r={sade:16,dusuk:16,orta:24,yuksek:32}[n],a=i.ek("smd")?Yf(n==="yuksek"?1.45:1):[],o=qf(n,{smd:a,logo:t});for(let U of Object.values(o))i.kayit(U);let l=Ye.x-Ye.w/2,c=Ye.z-Ye.d/2,u=new ci(dv[hv].map(([U,G])=>new lt(U,G)));for(let[U,G]of lh)u.holes.push(pv(U,G,1.6,r));let d=uh(u,1.6,0,r),h=d.attributes.position,p=d.attributes.uv;for(let U=0;U<h.count;U++)p.setXY(U,h.getX(U)/Ye.w,1-h.getZ(U)/Ye.d);d.translate(l,zt,c);let g=new Se({map:o.albedo,roughness:o.orm?1:.45,metalness:o.orm?1:0});o.normal&&(g.normalMap=o.normal,g.normalScale=new lt(n==="yuksek"?.8:.6,n==="yuksek"?.8:.6)),o.orm&&(g.roughnessMap=o.orm,g.metalnessMap=o.orm),i.kayitMat(g);let _=new Gt(d,[g,i.mat("pcbKenar")]);_.castShadow=_.receiveShadow=!0,e.add(_);let m=[];for(let[U,G]of lh){let V=we(U,G,zt-.8),ot=new un(1.6,1.6,1.6,r,1,!0);ot.translate(V.x,V.y,V.z),m.push(ot)}e.add(an(m,i.mat("altin"))),e.add(an(lh.map(([U,G])=>{let V=we(U,G,1.2);return ch(1.6,2.4,V.x,V.y,V.z,14)}),i.mat("ayak")));let f=[],v=[],S=[],M=(U,G,V)=>{let ot=U.map(x=>G[x]),ft=Math.min(...ot)-1.27,bt=Math.max(...ot)+1.27,Rt=V-1.27,Ot=V+1.27,Bt=7.1,L=we((ft+bt)/2,V,zt+Bt/2);f.push(Dr(bt-ft,Bt,2.54,.25,L.x,L.y,L.z));let he=we((ft+bt)/2,V,zt+Bt+.02);v.push(rn(bt-ft-.5,.04,2,he.x,he.y,he.z));let te=new ci([new lt(ft,Rt),new lt(bt,Rt),new lt(bt,Ot),new lt(ft,Ot)]);for(let x of ot){let q=new Qi([new lt(x-.53,V-.53),new lt(x-.53,V+.53),new lt(x+.53,V+.53),new lt(x+.53,V-.53)]);if(te.holes.push(q),s){let nt=we(x,V,zt+Bt+.25);S.push(rn(.42,.4,.22,nt.x,nt.y,nt.z-.3))}}let R=uh(te,1.4,ks,4);R.translate(l,0,c),f.push(R)};M(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],Ci,Nr),M(["7","6","5","4","3","2","1","0"],Ci,Nr),M(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],ds,Oi),M(["A0","A1","A2","A3","A4","A5"],fs,Oi);let A=[],b=we(64.87,26.67,zt+1.25);f.push(Dr(5.08,2.5,7.62,.2,b.x,b.y,b.z));for(let U of[63.6,66.14])for(let G of[24.13,26.67,29.21]){let V=we(U,G,zt+5.25);A.push(rn(.64,5.5,.64,V.x,V.y,V.z));let ot=new un(.06,.45,.5,4);ot.rotateY(Math.PI/4),ot.translate(V.x,zt+8.25,V.z),A.push(ot)}let E=[],y=[],T=[];b=we(1.65,15.24,zt+5.45),E.push(Dr(16,10.9,12,.5,b.x,b.y,b.z));let P=new ci([new lt(-4.2,-3.9),new lt(4.2,-3.9),new lt(4.2,2.6),new lt(3,3.9),new lt(-3,3.9),new lt(-4.2,2.6)]),D=new ts(P,{depth:.3,bevelEnabled:!1});D.rotateY(-Math.PI/2),b=we(-6.36,15.24,zt+5.45),D.translate(b.x+.25,b.y,b.z),y.push(D);let O=new ge(.14,3,5.2);b=we(-6.42,15.24,zt+5),O.translate(b.x,b.y,b.z);for(let U of[-6.2,6.2]){let G=we(4.5,15.24+U,zt-.4);E.push(rn(1.2,1.4,.3,G.x,G.y,G.z))}b=we(5.2,44.9,zt+5.5),T.push(Dr(14,11,9,.8,b.x,b.y,b.z));let H=new ya(3.2,.32,8,28);H.rotateY(Math.PI/2),b=we(-1.84,44.9,zt+5.8),H.translate(b.x,b.y,b.z),T.push(H);let k=new ca(3.15,28);k.rotateY(-Math.PI/2),k.translate(b.x-.03,b.y,b.z),y.push(k);let W=new un(1,1,1.2,16);W.rotateZ(Math.PI/2),W.translate(b.x+.4,b.y,b.z),E.push(W);let j=[],tt=[],gt=[[0,0],[3.1,0],[3.12,1],[2.95,1.2],[3.12,1.4],[3.15,4.9],[3.05,5.35],[2.85,5.5],[0,5.5]].map(([U,G])=>new lt(U,G)),et=[];for(let[U,G]of[[13,31.5],[19.5,37.5]]){let V=we(U,G,zt),ot=new Si(gt,s?32:20);ot.rotateY(Math.PI*.8),ot.translate(V.x,V.y+.35,V.z),et.push(ot);let ft=new un(2.75,2.75,.06,28);ft.translate(V.x,V.y+5.87,V.z),j.push(ft);for(let bt of[0,Math.PI/2]){let Rt=new ge(4.2,.1,.32);Rt.rotateY(bt+.3),Rt.translate(V.x,V.y+5.9,V.z),y.push(Rt)}tt.push(rn(6.3,.35,6.3,V.x,V.y+.175,V.z))}b=we(21,27,zt);let ut=new ci;ut.absarc(-3.05,0,2.2,Math.PI/2,Math.PI*1.5,!1),ut.absarc(3.05,0,2.2,-Math.PI/2,Math.PI/2,!1);let ht=uh(ut,3.4,3.5,12);ht.translate(b.x,b.y,b.z);let Ft=new ui(6,2.25);if(Ft.rotateX(-Math.PI/2),Ft.translate(b.x,b.y+3.54,b.z),y.push(rn(9.6,.15,3.6,b.x,b.y+.075,b.z)),b=we(44.5,36.8,zt+1.3),f.push(Dr(37.5,2.6,9.2,.3,b.x,b.y,b.z)),s)for(let U=0;U<14;U++)for(let G of[-1,1]){let V=we(27.99+U*2.54,36.8+G*4.35,zt+2.62);y.push(rn(1,.04,.5,V.x,V.y,V.z))}let wt=[];for(let U=0;U<14;U++)for(let G of[-1,1]){let V=27.99+U*2.54,ot=we(V,36.8+G*3.95,zt+4.1);wt.push(rn(.5,.3,.6,ot.x,ot.y,ot.z));let ft=we(V,36.8+G*4.15,zt+3.3);wt.push(rn(.5,1.6,.26,ft.x,ft.y,ft.z));let bt=we(V,36.8+G*4.15,zt+2.62);wt.push(rn(.28,.4,.26,bt.x,bt.y,bt.z))}let ue=i.mat("cipGovde"),le=i.mat("cipUst"),$t=new Gt(new Cn(35.56,3.3,7.4,2,.3),[ue,ue,le,ue,ue,ue]);$t.position.copy(we(44.5,36.8,zt+2.6+1.65)),$t.castShadow=$t.receiveShadow=!0,e.add($t);let it=[],ct=[];b=we(20,17.5,zt+.45),it.push(rn(5,.9,5,b.x,b.y,b.z));for(let[U,G,V,ot]of[[-2.6,0,.25,4.2],[2.6,0,.25,4.2],[0,-2.6,4.2,.25],[0,2.6,4.2,.25]])ct.push(rn(V,.2,ot,b.x+U,zt+.1,b.z+G));b=we(15,47.5,zt+.8),it.push(rn(6.5,1.6,3.5,b.x,b.y,b.z));for(let U of[-2.3,0,2.3])ct.push(rn(.7,.3,1.4,b.x+U,zt+.15,b.z+2.2));b=we(15,44.6,zt+.2),ct.push(rn(3.2,.3,3,b.x,b.y,b.z)),b=we(7.4,5.2,zt+1.6);let Mt=[Dr(6,3.2,6,.45,b.x,b.y,b.z)];E.push(rn(6.1,.3,6.1,b.x,zt+3.35,b.z));for(let U of[-2.4,2.4])for(let G of[-2.4,2.4])y.push(ch(.32,.06,b.x+U,zt+3.53,b.z+G,10));for(let U of[-3.3,3.3])for(let G of[-2.25,2.25])E.push(rn(.5,1.6,.7,b.x+U,zt+.8,b.z+G));let Z=new Gt(ch(1.7,1.3,b.x,zt+4.1,b.z,24),i.mat("resetDugme"));if(Z.castShadow=Z.receiveShadow=!0,e.add(an(f,i.mat("baslikPlastik")),an(v,i.mat("baslikIc")),an(A,i.mat("altin")),an(E,i.mat("metalFirca")),an(y,i.mat("koyu")),an(T,i.mat("jak")),an(et,i.mat("kapAlu")),an(j,i.mat("kapUst")),an(tt,i.mat("baslikPlastik")),an([ht],i.mat("kristalYan")),an([Ft],i.mat("kristal"),!1),an(wt,i.mat("metalCelik")),an(it,ue),an(ct,i.mat("kalay")),an(Mt,i.mat("resetTaban")),an([O],i.mat("baslikPlastik")),Z),S.length&&e.add(an(S,i.mat("altin"),!1)),a.length){let U=new ge(1,1,1),G=new ge(1,1,1),V=new Se({color:16777215,roughness:.5});i.kayitMat(V);let ot=new li(U,V,a.length),ft=new li(G,i.mat("kalay"),a.length*2),bt=new ze,Rt=new Qt(1776413),Ot=new Qt(11045722);a.forEach((Bt,L)=>{let he=Bt.tur==="direnc"?.45:.7,te=we(Bt.x,Bt.z,zt+he/2),R=Bt.yatay?Bt.w:Bt.d,x=Bt.yatay?Bt.d:Bt.w,z=R*.18;bt.position.copy(te),bt.rotation.set(0,Bt.yatay?0:Math.PI/2,0),bt.scale.set(R-2*z+.02,he,x),bt.updateMatrix(),ot.setMatrixAt(L,bt.matrix),ot.setColorAt(L,Bt.tur==="direnc"?Rt:Ot);for(let q of[-1,1])bt.position.set(te.x+(Bt.yatay?q*(R/2-z/2):0),te.y,te.z+(Bt.yatay?0:q*(R/2-z/2))),bt.scale.set(z,he+.02,x+.02),bt.updateMatrix(),ft.setMatrixAt(L*2+(q>0?1:0),bt.matrix)}),e.add(ot,ft)}let X=(U,G,V)=>{let ot=new Se({color:new Qt(V).multiplyScalar(.55),emissive:V,emissiveIntensity:0,roughness:.25,transparent:!1});i.kayitMat(ot);let ft=we(U,G,zt+.25),bt=new Gt(new ge(1,.5,.8),ot);bt.position.copy(ft),e.add(bt);let Rt=new Gt(zn([rn(.32,.42,.82,ft.x-.66,ft.y-.04,ft.z),rn(.32,.42,.82,ft.x+.66,ft.y-.04,ft.z)]),i.mat("kalay"));return e.add(Rt),Ot=>{ot.emissiveIntensity=Ot?1.1:0,ot.color.set(Ot?V:new Qt(V).multiplyScalar(.55))}},at=X(28.5,10.6,16754470),vt=X(61.5,10.6,4448378);return X(28.5,13.3,16766287),X(28.5,15.4,16766287),{grup:e,kanca:{ledL:at,ledOn:vt}}}var Ye={x:0,z:32,w:68.58,d:53.34},It={x:0,z:-38,w:82.5,d:54.5,h:8.5},zt=4,ks=zt+8.5,He=It.h,Vn=2.54,mv=i=>Ye.x-Ye.w/2+i,gv=i=>Ye.z-Ye.d/2+i,we=(i,t,e=zt)=>new C(mv(i),e,gv(t)),Ci={SCL:21.336,SDA:23.876,AREF:26.416,"GND-D":28.956,13:31.496,12:34.036,11:36.576,10:39.116,9:41.656,8:44.196,7:48.26,6:50.8,5:53.34,4:55.88,3:58.42,2:60.96,1:63.5,0:66.04},ds={NC:26.416,IOREF:28.956,RESET:31.496,"3.3V":34.036,"5V":36.576,GND1:39.116,GND2:41.656,VIN:44.196},fs={A0:49.276,A1:51.816,A2:54.356,A3:56.896,A4:59.436,A5:61.976},Nr=2.54,Oi=50.8;function gi(i){let t=String(i);if(t in Ci)return we(Ci[t],Nr,ks);if(t in ds)return we(ds[t],Oi,ks);if(t in fs)return we(fs[t],Oi,ks);throw new Error("bilinmeyen pin "+i)}var jf=["3","5","6","9","10","11"];function _v(i){let t=String(i);return t==="13"?"pin-13":t==="0"||t==="1"?"pin-rx-tx":jf.includes(t)?"pin-pwm":/^\d+$/.test(t)?"pin-dijital":t.startsWith("GND")?"pin-gnd":{"5V":"pin-5v","3.3V":"pin-3v3",VIN:"pin-vin",AREF:"pin-aref",IOREF:"pin-ioref",RESET:"pin-reset",SDA:"pin-sda-scl",SCL:"pin-sda-scl"}[t]||(/^A\d$/.test(t)?"pin-analog":null)}function $f(i){let t=String(i);return t==="0"?"0. pin (RX)":t==="1"?"1. pin (TX)":jf.includes(t)?`${t}. pin (~${t})`:/^\d+$/.test(t)?`${t}. pin`:t.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[t]||t}function Ls(i,t,e,n,s=0,r=0,a=0){let o=new ze;return o.position.set(s,r,a),o.userData={...i,yari:[t/2,e/2,n/2],hacim:i.hacim??t*e*n},o.updateMatrixWorld(),o}var Is={a:13.97,b:11.43,c:8.89,d:6.35,e:3.81,f:-3.81,g:-6.35,h:-8.89,i:-11.43,j:-13.97},fn=i=>It.x-36.83+(i-1)*Vn,We=(i,t,e=He)=>new C(fn(i),e,It.z+Is[t]),In={"yakin-":19.05,"yakin+":21.59,"uzak-":-19.05,"uzak+":-21.59},Ps=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];function Qn(i,t,e,n=He){let s=Ps.reduce((r,a)=>Math.abs(a-e)<Math.abs(r-e)?a:r,Ps[0]);return new C(fn(s),n,It.z+In[i+t])}function hh(i,t,e,n,s,r){let a=new ge(i,t,e);return a.translate(n,s,r),a}function Xa(i){i.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}function Jf(i,t){let e=new Gt(zn(i.map(n=>n.index?n.toNonIndexed():n),!1),t);return e.matrixAutoUpdate=!1,e}function fh(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}var ph=1;function Qf(i){let t=new Ji(i);return t.colorSpace=Qe,t.anisotropy=ph,t}var dh=(()=>{let i=null;return()=>{if(i)return i;let[t,e]=fh(64,64),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),i=new Ji(t),i}})(),$e={};function Ds(){return $e.hazir||Object.assign($e,{hazir:!0,pcbKenar:new Se({color:679785,roughness:.45}),siyah:new Se({color:2500140,roughness:.55}),koyu:new Nn({color:789519}),metal:new Se({color:14014686,metalness:1,roughness:.28}),altin:new Se({color:14858588,metalness:1,roughness:.32}),cip:new Se({color:1776416,roughness:.72}),ayak:new Se({color:3816e3,roughness:.9}),bbYan:new Se({color:15657955,roughness:.78}),bbDelik:new Nn({color:3421242}),serit:new Se({color:13225170,metalness:.9,roughness:.35}),vurgu:new Nn({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new _r({color:6962672}),secim:new Nn({color:1483594,transparent:!0,opacity:.85,depthWrite:!1}),gorunmez:new Nn({visible:!1})}),$e}function tp(i){Ds();let t=new Oe;t.name="kart";let e=mc(pc("sade",ph),{logo:!0});e.grup.traverse(v=>{v.isInstancedMesh&&(v.userData.park=!0)}),t.add(e.grup);let n=(v,S)=>{let M=v.map(A=>S[A]);return{x1:Math.min(...M)-1.27,x2:Math.max(...M)+1.27}},s=n(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],Ci),r=n(["7","6","5","4","3","2","1","0"],Ci),a=n(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],ds),o=n(["A0","A1","A2","A3","A4","A5"],fs),l=(v,S,M,A)=>{let b=new pr(new Ss({map:dh(),color:M,blending:Bn,depthWrite:!1,transparent:!0}));return b.scale.set(6,6,1),b.position.copy(we(v,S,zt+1.1)),b.visible=!1,t.add(b),E=>{A(E),b.visible=E}},c=l(28.5,10.6,16754470,e.kanca.ledL),u=l(61.5,10.6,4448378,e.kanca.ledOn),d=(v,S,M,A,b,E)=>{let y=we(v,S,M);return[y.x,y.y,y.z,A,b,E]},h={kart:[Ye.x,7,Ye.z,Ye.w,14,Ye.d],usb:d(1.65,15.24,zt+5.45,17,11.6,12.8),"guc-girisi":d(5.2,44.9,zt+5.5,15,11.8,9.8),mikrodenetleyici:d(44.5,36.8,zt+3,38.5,6.2,10.2),"dijital-pinler":d((s.x1+r.x2)/2,Nr,zt+4.3,r.x2-s.x1+1.2,9.4,3.6),"analog-pinler":d((o.x1+o.x2)/2,Oi,zt+4.3,o.x2-o.x1+1.2,9.4,3.6),"guc-pinleri":d((a.x1+a.x2)/2,Oi,zt+4.3,a.x2-a.x1+1.2,9.4,3.6),reset:d(7.4,5.2,zt+2.4,7,5,7)},p=[],g=(v,S)=>{let[M,A,b,E,y,T]=S,P=Ls({parca:v.kesif,...v},E,y,T,M,A,b);p.push(P),i.push(P)};g({kesif:"kart",parca:"kart"},h.kart);for(let v of["usb","guc-girisi","mikrodenetleyici","dijital-pinler","analog-pinler","guc-pinleri","reset"])g({kesif:v},h[v]);g({kesif:"usb-cipi"},d(20,17.5,zt+1.1,7,2.6,7)),g({kesif:"kristal"},d(21,27,zt+1.9,11.5,4.2,5.4)),g({kesif:"regulator"},d(15,46.2,zt+1.1,7.4,2.6,6.8));for(let[v,S]of[[13,31.5],[19.5,37.5]])g({kesif:"kondansator"},d(v,S,zt+2.9,7.2,6.2,7.2));g({kesif:"icsp"},d(64.87,26.67,zt+4.4,6.4,9.2,9)),g({kesif:"led-l"},d(27.6,10.6,zt+.8,4.6,1.8,2.3)),g({kesif:"led-txrx"},d(27.3,14.35,zt+.8,4.8,1.8,4.4)),g({kesif:"led-on"},d(62.9,10.6,zt+.8,5.4,1.8,2.3));for(let[v,S]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])g({kesif:"montaj-deligi"},d(v,S,zt+.3,4.4,1.6,4.4));let _=[];for(let[v,S]of[[Ci,Nr],[ds,Oi],[fs,Oi]])for(let[M,A]of Object.entries(v)){let b=_v(M);if(!b)continue;let E=ks+1.2-zt;g({kesif:b,parca:"pin",pin:M,ozel:$f(M),minAdim:Vn,minPx:12},d(A,S,zt+E/2,2.5,E,2.6)),_.push({ad:M,kesif:b,ozel:$f(M),nokta:we(A,S,ks+.6)})}let m=(v,S,M)=>we(v,S,M),f=[{id:"usb",nokta:m(1.65,15.24,zt+12)},{id:"guc-girisi",nokta:m(5.2,44.9,zt+12.2)},{id:"mikrodenetleyici",nokta:m(44.5,36.8,zt+6.6)},{id:"usb-cipi",nokta:m(20,17.5,zt+1.6)},{id:"kristal",nokta:m(21,27,zt+4.3)},{id:"regulator",nokta:m(15,46.5,zt+2.4)},{id:"kondansator",nokta:m(13,31.5,zt+6.2)},{id:"reset",nokta:m(7.4,5.2,zt+5.4)},{id:"icsp",nokta:m(64.87,26.67,zt+9.4)},{id:"led-l",nokta:m(28.5,10.6,zt+1)},{id:"led-txrx",nokta:m(28.5,14.35,zt+1)},{id:"led-on",nokta:m(61.5,10.6,zt+1)},{id:"dijital-pinler",nokta:m(46,10.6,zt+.8)},{id:"analog-pinler",nokta:m(55.6,42,zt+.8)},{id:"guc-pinleri",nokta:m(35.3,42,zt+.8)},{id:"montaj-deligi",nokta:m(66.04,17.78,zt+.8)}];return{grup:t,alanlar:h,ledL:c,ledOn:u,vekiller:p,pinler:_,kesifNoktalari:f}}function xv(){let t=Math.round(2048*It.d/It.w),e=2048/It.w,[n,s]=fh(2048,t),r=o=>(o+It.w/2)*e,a=o=>(o+It.d/2)*e;s.fillStyle="#f4f2ec",s.fillRect(0,0,2048,t),s.fillStyle="#dcd8cf",s.fillRect(0,a(-1.5),2048,3*e),s.fillStyle="#cfcac0",s.fillRect(0,a(-.35),2048,.7*e);for(let o of[1,-1])s.fillStyle="#d23b3b",s.fillRect(r(-37),a(o*23.6)-.3*e,r(37)-r(-37),.6*e),s.fillStyle="#2f62c9",s.fillRect(r(-37),a(o*16.9)-.3*e,r(37)-r(-37),.6*e);s.font=`700 ${2.1*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";for(let o of[1,-1])for(let l of[-39.4,39.4])s.fillStyle="#d23b3b",s.fillText("+",r(l),a(o*In["yakin+"])),s.fillStyle="#2f62c9",s.fillText("\u2212",r(l),a(o*In["yakin-"]));s.fillStyle="#8a8478",s.font=`600 ${1.45*e}px "DejaVu Sans", Arial, sans-serif`;for(let[o,l]of Object.entries(Is))for(let c of[-39.3,39.3])s.fillText(o,r(c),a(l));for(let o of[1,5,10,15,20,25,30])for(let l of[1,-1])s.fillText(String(o),r(-36.83+(o-1)*Vn),a(l*15.45));return Qf(n)}function ep(i){Ds();let t=new Oe;t.name="breadboard";let e=new Se({map:xv(),roughness:.78}),n=$e.bbYan.clone(),s=[n,n,e,n,n,n],r=new Gt(new Cn(It.w,It.h,It.d,3,1.1),s);r.position.set(It.x,It.h/2,It.z),t.add(r);let a=[],o=b=>a.push(hh(1.15,.04,1.15,b.x,He+.02,b.z));for(let b=1;b<=30;b++)for(let E of Object.keys(Is))o(We(b,E));for(let b of Object.keys(In))for(let E of Ps)o(new C(fn(E),0,It.z+In[b]));t.add(Jf(a,$e.bbDelik));let l=[];for(let b=1;b<=30;b++)for(let E of[1,-1])l.push(hh(1.5,1.1,11.4,fn(b),He-2.3,It.z+E*8.89));for(let b of Object.values(In))l.push(hh(fn(30)-fn(2)+1.6,1.1,1.5,It.x,He-2.3,It.z+b));let c=Jf(l,$e.serit);c.visible=!1,t.add(c),Xa(t);let u=new ge(1.7,.06,1.7),d=new li(u,$e.secim,25);d.count=0,d.frustumCulled=!1,t.add(d);let h=new ve;function p(b){d.count=b.length,b.forEach((E,y)=>{h.makeTranslation(E.x,He+.06,E.z),d.setMatrixAt(y,h)}),d.instanceMatrix.needsUpdate=!0}function g(b){let E=b.x-It.x,y=b.z-It.z,T=Math.round((E+36.83)/Vn)+1,P=null,D=1.6;for(let[O,H]of Object.entries(Is)){let k=Math.hypot(E-(-36.83+(T-1)*Vn),y-H);T>=1&&T<=30&&k<D&&(D=k,P={tur:"sutun",sutun:T,satir:O})}for(let[O,H]of Object.entries(In))Math.abs(y-H)<1.3&&Ps.some(k=>Math.abs(E-(-36.83+(k-1)*Vn))<1.3)&&(P={tur:"ray",ray:O});if(!P)return null;if(P.tur==="sutun"){let O="abcde".includes(P.satir)?"abcde":"fghij";return{...P,delikler:[...O].map(H=>We(P.sutun,H)),ad:`${P.sutun}. s\xFCtun, ${O[0]}-${O[4]} sat\u0131rlar\u0131`}}return{...P,delikler:Ps.map(O=>new C(fn(O),0,It.z+In[P.ray])),ad:P.ray.endsWith("+")?"Art\u0131 (+) ray\u0131":"Eksi (\u2212) ray\u0131"}}let _={breadboard:[It.x,It.h/2,It.z,It.w,It.h+1,It.d],"bb-yakin-raylar":[It.x,He,It.z+20.32,76,1.4,5.6],"bb-satirlar":[It.x,He,It.z,77,1.4,31],"bb-kanal":[It.x,He,It.z,80,1.2,3.2]},m=[],f=(b,E,y,T,P,D,O)=>{let H=Ls({parca:b.kesif,bb:!0,...b},E,y,T,P,D,O);m.push(H),i.push(H)},v=He-.1,S=.8;f({kesif:"breadboard"},It.w,It.h+1,It.d,It.x,It.h/2,It.z);for(let b=1;b<=30;b++)for(let[E,y]of[[1,"a-e"],[-1,"f-j"]])f({kesif:"serit",ozel:`${b}. s\xFCtun, ${y} sat\u0131rlar\u0131`,minAdim:Vn,minPx:12},2.5,S,12.7,fn(b),v,It.z+E*8.89);for(let b of[1,-1]){let E=b>0?"karta yak\u0131n taraf":"uzak taraf";f({kesif:"arti-ray",ozel:E,minAdim:Vn,minPx:8},81.2,S,4.08,It.x,v,It.z+b*22.36),f({kesif:"eksi-ray",ozel:E,minAdim:Vn,minPx:8},81.2,S,4.02,It.x,v,It.z+b*18.31),f({kesif:"koordinat",ozel:"s\xFCtun numaralar\u0131",minAdim:1.06,minPx:6},76.2,S,1.06,It.x,v,It.z+b*15.77),f({kesif:"koordinat",ozel:"sat\u0131r harfleri",minAdim:Vn,minPx:8},2.4,S,30.5,It.x+b*39.3,v,It.z)}f({kesif:"orta-kanal"},76.2,S,5,It.x,v,It.z);let M=(b,E,y=He+1)=>new C(b,y,E),A=[{id:"breadboard",nokta:M(fn(6),It.z-8.89)},{id:"serit",nokta:M(fn(20),It.z-8.89),ozel:"20. s\xFCtun, f-j sat\u0131rlar\u0131"},{id:"orta-kanal",nokta:M(fn(27),It.z,He+.6)},{id:"koordinat",nokta:M(It.x-39.3,It.z+8.89)},{id:"arti-ray",nokta:M(fn(28),It.z+21.59),ozel:"karta yak\u0131n taraf"},{id:"eksi-ray",nokta:M(fn(4),It.z+19.05),ozel:"karta yak\u0131n taraf"}];return{grup:t,alanlar:_,grupBul:g,grupGoster:p,vekiller:m,kesifNoktalari:A,rontgen(b){c.visible=b;for(let E of new Set(s))E.transparent=b,E.opacity=b?.3:1,E.depthWrite=!b,E.needsUpdate=!0;r.castShadow=!b}}}function np(i,t){Ds();let[e,n,s,r,a,o]=t,l=new Oe,c=new ge(r+1.2,a+1.2,o+1.2),u=new Gt(c,$e.vurgu);u.renderOrder=2;let d=new aa(new ua(c),$e.vurguCizgi);return l.add(u,d),l.position.set(e,n,s),i.add(l),l}var gc={kirmizi:15022389,sari:16498733,yesil:3126084};function ip(i="kirmizi"){Ds();let t=new Qt(gc[i]),e=t.clone().lerp(new Qt(3813430),.45),n=new Oe;n.name="led";let s=[[0,0],[2.95,0],[2.95,1],[2.5,1],[2.5,5.6]];for(let v=1;v<=8;v++){let S=v/8*(Math.PI/2);s.push([2.5*Math.cos(S),5.6+2.5*Math.sin(S)])}let r=new Se({color:e,emissive:t,emissiveIntensity:0,roughness:.14,metalness:0}),a=new Gt(new Si(s.map(([v,S])=>new lt(v,S)),20),r),o=4.2;a.position.y=o,n.add(a);let l=new Gt(new ge(.5,1,.5),$e.metal),c=new Gt(new ge(.5,1,.5),$e.metal);l.position.x=-1.27,c.position.x=1.27;let u=(v,S)=>{let M=new Gt(new ge(2.2,1,2.2),$e.gorunmez);return M.position.x=v,M.userData={kesif:S,ince:!0,yari:[1.1,.5,1.1],hacim:60},M},d=u(-1.27,"anot"),h=u(1.27,"katot"),p=v=>{let S=22+(o+5-22)*v,M=17+(o+5-17)*v;l.scale.y=S,l.position.y=o-S/2,c.scale.y=M,c.position.y=o-M/2,d.scale.y=S,d.position.y=l.position.y,h.scale.y=M,h.position.y=c.position.y};p(1),n.add(l,c,d,h);let g=Ls({kesif:"led"},6.6,8.8,6.6,0,o+4.1,0);n.add(g);let _=new pr(new Ss({map:dh(),color:t,blending:Bn,depthWrite:!1,transparent:!0}));_.scale.set(20,20,1),_.position.y=o+5.5,_.visible=!1,n.add(_);let m=new Gt(new ui(30,30),new Nn({map:dh(),color:t,blending:Bn,depthWrite:!1,transparent:!0,opacity:.6}));m.rotation.x=-Math.PI/2,m.position.y=.12,m.visible=!1,n.add(m);let f=new As(t,0,42,2);return f.position.y=o+6,n.add(f),Xa(n),n.userData={ac(v){let S=typeof v=="number"?v:v?1:0;n.userData.yanik=S>0,r.emissiveIntensity=1.05*S,r.color.copy(e).lerp(t,S),_.visible=m.visible=S>.02,_.material.opacity=Math.min(1,S*1.15),m.material.opacity=.6*S,f.intensity=380*S},bacak:p,tepe:new C(0,o+8.2,0),havuz:m,vekiller:[g,d,h],kesifYerleri:v=>[["led",new C(0,o+11.2,0)],["anot",new C(-1.27,v<.5?o-15:o-2,0)],["katot",new C(1.27,v<.5?o-6:o-2,0)]]},n}var oh={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"};function sp(i,t){Ds();let e=new Oe;e.name="direnc";let[n,s]=fh(8,256);s.fillStyle="#d8c69c",s.fillRect(0,0,8,256);let r=[.18,.33,.48,.8];i.forEach((h,p)=>{s.fillStyle=oh[h],s.fillRect(0,(1-r[p])*256-12,8,24)});let a=new un(1.1,1.1,4.6,16);a.rotateZ(Math.PI/2);let o=new Gt(a,new Se({map:Qf(n),roughness:.55})),l=new Se({color:14206620,roughness:.55}),c=3.4;o.position.y=c,e.add(o);for(let h of[-1,1]){let p=new Gt(new es(1.32,14,10),l);p.scale.set(.75,1,1),p.position.set(h*2.45,c,0),e.add(p);let g=new Gt(new ge(t/2-2.9,.5,.5),$e.metal);g.position.set(h*((t/2+2.9)/2),c,0);let _=new Gt(new ge(.5,c+7,.5),$e.metal);_.position.set(h*t/2,(c-7)/2,0),e.add(g,_)}Xa(e);let u=Ls({kesif:"direnc"},t+1.4,c+9,3.2,0,(c+1.8-7.2)/2,0),d=Ls({kesif:"renk-bantlari"},3.6,2.8,2.8,0,c,0);return e.add(u,d),e.userData={tepe:new C(0,c+1.4,0),uclar:[new C(-t/2,0,0),new C(t/2,0,0)],H:c,vekiller:[u,d],kesifYerleri:()=>[["direnc",new C(t/2-1.2,c+2.6,0)],["renk-bantlari",new C(-.6,c+2.2,0)]]},e}function rp(i,t,e){i.position.set((t.x+e.x)/2,He,(t.z+e.z)/2),i.rotation.set(0,-Math.atan2(e.z-t.z,e.x-t.x),0)}function ap(){Ds();let i=new Oe;i.name="buton";let t=new Gt(new Cn(6,3.4,6,2,.45),$e.siyah);t.position.y=1.7;let e=new Gt(new ge(6.2,.3,6.2),$e.metal);e.position.y=3.55;let n=new Gt(new un(1.8,1.8,1.7,24),new Se({color:14172995,roughness:.42}));n.position.y=4.55,i.add(t,e,n);for(let r of[-2.54,2.54])for(let a of[-3.81,3.81]){let o=new Gt(new ge(.6,7,.35),$e.metal);o.position.set(r,-3.2,a),i.add(o)}Xa(i);let s=Ls({kesif:"buton"},7.6,12.9,8.4,0,-.45,0);return i.add(s),i.userData={bas(r){n.position.y=r?3.95:4.55},tepe:new C(0,5.6,0),vekiller:[s],kesifYerleri:()=>[["buton",new C(0,8.6,0)]]},i}var mh={turuncu:16088064,siyah:2829104,kirmizi:13840175,sari:15909376,yesil:3054920,mavi:1994713,mor:8280002};function op(i,t,e){Ds();let n=new Oe;n.name="kablo";let s=mh[e]??e,r=(v,S)=>v.clone().add(new C(0,S,0)),a=r(i,6.2),o=r(t,6.2),l=a.distanceTo(o),c=new C((a.x+o.x)/2,Math.max(a.y,o.y)+7+l*.16,(a.z+o.z)/2),u=new yr([a,r(a,4),c,r(o,4),o],!1,"centripetal"),d=56,h=6,p=new Gt(new ns(u,d,.62,h,!1),new Se({color:s,roughness:.45}));n.add(p);let g=[];for(let v of[i,t]){let S=new Gt(new Cn(2.5,6,2.5,2,.3),new Se({color:2763312,roughness:.5}));S.position.copy(v).add(new C(0,3.1,0));let M=new Gt(new ge(.6,6,.6),$e.metal);M.position.copy(v).add(new C(0,-2.9,0)),n.add(S,M),g.push(S,M)}Xa(n);let _=new Gt(new ns(u,24,1.9,6,!1),$e.gorunmez);_.userData={kesif:"kablo",ince:!0,hacim:120},n.add(_);let m=[_];for(let v of[i,t]){let S=Ls({kesif:"kablo"},3.4,6.6,3.4,v.x,v.y+3.1,v.z);n.add(S),m.push(S)}let f=p.geometry.index.count;return n.userData={egri:u,vekiller:m,kesifYerleri:()=>[["kablo",u.getPoint(.5)]],buyut(v){p.geometry.setDrawRange(0,Math.floor(v*d)*h*6),g[2].visible=g[3].visible=v>=1,v>=1&&p.geometry.setDrawRange(0,f)},yol:u.getSpacedPoints(40)},n}function lp(i,t,e=30){let n=[0];for(let u=1;u<t.length;u++)n.push(n[u-1]+t[u].distanceTo(t[u-1]));let s=n[n.length-1],r=new li(new es(.85,8,6),new Nn({color:16764723}),e);r.frustumCulled=!1,r.renderOrder=3,i.add(r);let a=new ve,o=new C,l=0,c=()=>{for(let u=0;u<e;u++){let d=(l+u*s/e)%s,h=1;for(;h<n.length-1&&n[h]<d;)h++;let p=(d-n[h-1])/Math.max(1e-6,n[h]-n[h-1]);o.lerpVectors(t[h-1],t[h],Math.min(1,Math.max(0,p))),r.setMatrixAt(u,a.makeTranslation(o.x,o.y,o.z))}r.instanceMatrix.needsUpdate=!0};return c(),{nesne:r,ilerlet(u,d=28){l=(l+u/1e3*d)%s,c()},gorunur(u){r.visible=u},sil(){i.remove(r),r.geometry.dispose(),r.material.dispose()}}}function cp(i){ph=Math.max(1,Math.min(8,i))}var qa=["kirmizi","kirmizi","kahve","altin"],hp=["kahve","siyah","turuncu","altin"],gh=26,_h={kirmizi:"K\u0131rm\u0131z\u0131",sari:"Sar\u0131",yesil:"Ye\u015Fil",turuncu:"Turuncu",siyah:"Siyah",mavi:"Mavi",mor:"Mor",kahve:"Kahverengi",altin:"Alt\u0131n"},up={[qa.join()]:"220 \u03A9 diren\xE7",[hp.join()]:"10 k\u03A9 diren\xE7"};function yv(i,t,e,n={}){for(let s of i.nesne.userData.vekiller||[])s.userData.parca=t,n[s.userData.kesif]&&(s.userData.ozel=n[s.userData.kesif]),e.push(s)}function _c(i,t,e="e"){let n=ip(i);n.userData.renk=i;let s=We(t,e),r=We(t+1,e),a=new C((s.x+r.x)/2,He,s.z);n.position.copy(a);let o={led:`${_h[i]} LED`,anot:"uzun bacak",katot:"k\u0131sa bacak"};return{nesne:n,tur:"led",kavram:"led",anotSutun:t,satir:e,ozel:o,pozlar:{takili:a,havada:a.clone().add(new C(0,gh,0))}}}function Ya(i,t,e,n="direnc"){let s=sp(i,t.distanceTo(e));s.userData.bantlar=i,rp(s,t,e);let r=s.position.clone(),a={direnc:up[i.join()],"renk-bantlari":`${i.map(o=>_h[o].toLocaleLowerCase("tr")).join(", ")}: ${up[i.join()].replace(" diren\xE7","")}`};return{nesne:s,tur:"direnc",kavram:n,a:t,b:e,ozel:a,pozlar:{takili:r,havada:r.clone().add(new C(0,gh*.75,0))}}}function Bi(i,t,e,n=""){return{nesne:op(i,t,e),tur:"kablo",kavram:"kablo",bas:i,son:t,ozel:{kablo:`${_h[e]} kablo${n?`, ${n}`:""}`}}}function dp(i,t){let e={};if((i==="led"||i==="buton")&&(e.led1=_c("kirmizi",15),e.r1=Ya(qa,We(16,"c"),Qn("yakin","-",16)),e.k13=Bi(gi(13),We(15,"a"),"turuncu","13. pin ile 15a deli\u011Fi aras\u0131nda"),e.kgnd=Bi(gi("GND-D"),Qn("yakin","-",14),"siyah","GND pini ile eksi (\u2212) ray\u0131 aras\u0131nda")),i==="buton"){let n=ap(),s=new C((We(20,"e").x+We(22,"e").x)/2,He,It.z);n.position.copy(s),e.buton={nesne:n,tur:"buton",kavram:"buton",pozlar:{takili:s,havada:s.clone().add(new C(0,gh,0))}},e.r2=Ya(hp,We(22,"c"),Qn("yakin","-",22)),e.k5v=Bi(gi("5V"),Qn("yakin","+",24),"kirmizi","5V pini ile art\u0131 (+) ray\u0131 aras\u0131nda"),e.kplus=Bi(Qn("yakin","+",20),We(20,"a"),"kirmizi","art\u0131 (+) ray\u0131 ile 20a deli\u011Fi aras\u0131nda"),e.k2=Bi(gi(2),We(22,"d"),"sari","2. pin ile 22d deli\u011Fi aras\u0131nda")}i==="trafik"&&(e.ledK=_c("kirmizi",8),e.ledS=_c("sari",15),e.ledY=_c("yesil",22),e.rK=Ya(qa,We(9,"c"),Qn("yakin","-",9)),e.rS=Ya(qa,We(16,"c"),Qn("yakin","-",16)),e.rY=Ya(qa,We(23,"c"),Qn("yakin","-",23)),e.kK=Bi(gi(10),We(8,"a"),"kirmizi","10. pin ile 8a deli\u011Fi aras\u0131nda"),e.kS=Bi(gi(9),We(15,"a"),"sari","9. pin ile 15a deli\u011Fi aras\u0131nda"),e.kY=Bi(gi(8),We(22,"a"),"yesil","8. pin ile 22a deli\u011Fi aras\u0131nda"),e.kgnd=Bi(gi("GND-D"),Qn("yakin","-",14),"siyah","GND pini ile eksi (\u2212) ray\u0131 aras\u0131nda"));for(let[n,s]of Object.entries(e))yv(s,n,t,s.ozel);return e}function fp(i,t,e,n){let s=He+.8,r=He+6.2,a=He+e.nesne.userData.H,o=[i.bas.clone().setY(i.bas.y+.4),...i.nesne.userData.yol],l=We(t.anotSutun,t.satir,s),c=We(t.anotSutun+1,t.satir,s);return o.push(i.son.clone().setY(s),l,l.clone().setY(r),c.clone().setY(r),c),o.push(e.a.clone().setY(s),e.a.clone().setY(a),e.b.clone().setY(a),e.b.clone().setY(s),n.son.clone().setY(s)),o.push(...[...n.nesne.userData.yol].reverse(),n.bas.clone().setY(n.bas.y+.4)),o}var vv=[.1,.84,.54],xc={genel:{kutu:[-41.3,0,-65.3,41.3,15,58.7],yon:vv},kart:{kutu:[-40.7,0,5.3,34.3,15,58.7],yon:[.08,.86,.5]},usb:{kutu:[-41.2,3.5,13,-22,15.3,28],yon:[-.78,.48,.42]},"guc-girisi":{kutu:[-37,3.5,44,-20,15.5,57],yon:[-.7,.5,.52]},cip:{kutu:[-10,3.5,35.5,30.5,10.5,48.5],yon:[.05,.86,.5]},dijital:{kutu:[-15,3.6,4,33.8,13,15],yon:[.04,.72,.69]},analog:{kutu:[12.5,3.6,49,30.2,13,58.7],yon:[.08,.7,.71]},guc:{kutu:[-10.5,3.6,49,12.5,13,58.7],yon:[0,.62,.78]},bb:{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[.06,.86,.5]},"bb-ust":{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[0,.96,.27]},raylar:{kutu:[-41.3,0,-34,41.3,8.6,-10.7],yon:[.04,.8,.6]},devre:{kutu:[-14,0,-44,22,22,-14],yon:[.12,.8,.58]},"devre-genis":{kutu:[-41.3,0,-65.3,41.3,22,12],yon:[.07,.9,.43],kablolar:!0},"buton-yakin":{kutu:[5,0,-46,23,18,-16],yon:[.15,.72,.67]},trafik:{kutu:[-26,0,-44,26,22,-14],yon:[.05,.78,.62]}},Ka=["led1","r1","k13","kgnd"],Ns=["led1","r1","k13","kgnd","buton","r2","k5v","kplus","k2"],Us=["ledK","ledS","ledY","rK","rS","rY","kK","kS","kY","kgnd"],pp={"arduino-ve-breadboard":{no:1,devre:null,adimlar:{merak:{kamera:"genel"},arduino:{kamera:"kart",vurgu:["kart"],dokun:!0},usb:{kamera:"usb",vurgu:["usb"],etiket:[["alan:usb","USB giri\u015Fi"]]},"guc-girisi":{kamera:"guc-girisi",vurgu:["guc-girisi"],etiket:[["alan:guc-girisi","G\xFC\xE7 giri\u015Fi"]]},mikrodenetleyici:{kamera:"cip",vurgu:["mikrodenetleyici"],etiket:[["alan:mikrodenetleyici","Mikrodenetleyici"]]},"dijital-pinler":{kamera:"dijital",vurgu:["dijital-pinler"],etiket:[["pin:13","13"],["pin:0","0"],["pin:3","~3"]]},"analog-pinler":{kamera:"analog",vurgu:["analog-pinler"],etiket:[["pin:A0","A0"],["pin:A5","A5"]]},"guc-pinleri":{kamera:"guc",vurgu:["guc-pinleri"],etiket:[["pin:5V","5V","arti"],["pin:3.3V","3,3V","arti"],["pin:GND1","GND","eksi"]]},breadboard:{kamera:"bb",vurgu:["breadboard"]},"breadboard-baglanti":{kamera:"bb-ust",kontrol:["delik","rontgen"]},raylar:{kamera:"raylar",vurgu:["bb-yakin-raylar"],kontrol:["delik","rontgen"],etiket:[["ray:yakin+","Art\u0131 (+) ray\u0131","arti"],["ray:yakin-","Eksi (\u2212) ray\u0131","eksi"]]},ozet:{kamera:"genel",dokun:!0}}},"arduino-led-yakma":{no:2,devre:"led",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"devre",parca:["led1","r1"],poz:{led1:"havada",r1:"havada"},etiket:[["parca:led1","LED"],["parca:r1","220 \u03A9 diren\xE7"]]},led:{kamera:{parca:"led1",poz:"havada",yon:[.18,.22,.96],pay:3},parca:["led1"],poz:{led1:"havada"},etiket:[["led1:anot","Anot (+): uzun bacak","arti"],["led1:katot","Katot (\u2212): k\u0131sa bacak","eksi"]]},direnc:{kamera:{parca:"r1",poz:"havada",yon:[.6,.55,.58],pay:2.5},parca:["r1"],poz:{r1:"havada"},etiket:[["parca:r1","K\u0131rm\u0131z\u0131, k\u0131rm\u0131z\u0131, kahverengi: 220 \u03A9"]]},"kurulum-led":{kamera:"devre",parca:["led1"],etiket:[["delik:15:e","15"],["delik:16:e","16"]]},"kurulum-direnc":{kamera:"devre",parca:["led1","r1"],etiket:[["ray:yakin-","Eksi (\u2212) ray\u0131","eksi"]]},"kurulum-kablo":{kamera:"devre-genis",parca:Ka,etiket:[["pin:13","13. pin"],["pin:GND-D","GND","eksi"]]},kod:{kamera:"devre-genis",parca:Ka,kod:!0},calistir:{kamera:"devre-genis",parca:Ka,program:"blink",kontrol:["akim","hiz"],kod:!0},"tahmin-ters":{kamera:"devre",parca:Ka,program:"blink",kontrol:["ters"]},ozet:{kamera:"devre-genis",parca:Ka,program:"blink"}}},"arduino-buton-led":{no:3,devre:"buton",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"devre",parca:["buton","r2","led1","r1"],poz:{buton:"havada",r2:"havada",led1:"havada",r1:"havada"},etiket:[["parca:buton","Buton"],["parca:r2","10 k\u03A9"],["parca:r1","220 \u03A9"]]},buton:{kamera:{parca:"buton",poz:"havada",yon:[.3,.55,.78],pay:2.5},parca:["buton"],poz:{buton:"havada"},kontrol:["buton"]},"giris-cikis":{kamera:"devre-genis",parca:Ns,etiket:[["pin:2","2: giri\u015F"],["pin:13","13: \xE7\u0131k\u0131\u015F"]]},kurulum:{kamera:"devre-genis",parca:Ns,etiket:[["pin:5V","5V","arti"],["pin:GND-D","GND","eksi"],["parca:buton","Buton"]]},"pull-down":{kamera:"buton-yakin",parca:Ns,etiket:[["parca:r2","10 k\u03A9"]]},kod:{kamera:"devre-genis",parca:Ns,kod:!0},dene:{kamera:"devre",parca:Ns,program:"buton",kontrol:["buton","akim"],kod:!0},tahmin:{kamera:"devre",parca:Ns,program:"buton",kontrol:["buton","direnc-cikar"]},ozet:{kamera:"devre-genis",parca:Ns,program:"buton",kontrol:["buton"]}}},"arduino-trafik-isigi":{no:4,devre:"trafik",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"trafik",parca:["ledK","ledS","ledY","rK","rS","rY"],poz:{ledK:"havada",ledS:"havada",ledY:"havada",rK:"havada",rS:"havada",rY:"havada"}},sira:{kamera:"trafik",parca:["ledK","ledS","ledY"],program:"trafik"},kurulum:{kamera:"devre-genis",parca:Us,etiket:[["pin:10","10"],["pin:9","9"],["pin:8","8"]]},kod:{kamera:"devre-genis",parca:Us,kod:!0},calistir:{kamera:"devre-genis",parca:Us,program:"trafik",kontrol:["akim","sure"],kod:!0},algoritma:{kamera:"trafik",parca:Us,program:"trafik",kod:!0},tahmin:{kamera:"trafik",parca:Us,program:"trafik",kontrol:["delaysiz"]},ileri:{kamera:"devre-genis",parca:Us,program:"trafik"},ozet:{kamera:"devre-genis",parca:Us,program:"trafik"}}}};var xh={guc:{ad:"G\xFC\xE7",renk:"#d32f2f",ikon:"zap"},islem:{ad:"\u0130\u015Flem",renk:"#7c4dff",ikon:"cpu"},pin:{ad:"Pinler",renk:"#1e6fd9",ikon:"plug"},isik:{ad:"I\u015F\u0131klar",renk:"#e0a100",ikon:"lightbulb",koyu:!0},breadboard:{ad:"Breadboard",renk:"#2e9d48",ikon:"grid-3x3"},parca:{ad:"Par\xE7alar",renk:"#f57c00",ikon:"component",koyu:!0},kontrol:{ad:"Kontrol",renk:"#6b7280",ikon:"rotate-ccw"}},ti=3,zi=2,Vi=1,Gn=0,yc={kart:{kat:null,ad:"Arduino UNO kart\u0131",kavram:"arduino",oncelik:ti,kisa:"Mikrodenetleyiciyi ve onu kullanmay\u0131 kolayla\u015Ft\u0131ran giri\u015Fleri, pinleri ta\u015F\u0131yan geli\u015Ftirme kart\u0131."},usb:{kat:"guc",ad:"USB giri\u015Fi",oncelik:ti,kisa:"Kart bilgisayara buradan ba\u011Flan\u0131r: kod bu kabloyla y\xFCklenir, kart da bu kablodan elektrik alabilir."},"guc-girisi":{kat:"guc",ad:"G\xFC\xE7 giri\u015Fi",oncelik:ti,kisa:"Pil ya da adapt\xF6r buraya tak\u0131l\u0131r; b\xF6ylece kart bilgisayar olmadan da \xE7al\u0131\u015F\u0131r."},regulator:{kat:"guc",ad:"Voltaj reg\xFClat\xF6r\xFC",oncelik:zi,kisa:"G\xFC\xE7 giri\u015Finden gelen daha y\xFCksek gerilimi kart\u0131n kulland\u0131\u011F\u0131 5 volta d\xFC\u015F\xFCr\xFCr ve sabit tutar."},kondansator:{kat:"guc",ad:"Kondansat\xF6r",oncelik:zi,kisa:"Elektri\u011Fi k\u0131sa s\xFCre depolay\u0131p geri verir; gerilimdeki ani dalgalanmalar\u0131 yumu\u015Fatarak kart\u0131n kararl\u0131 \xE7al\u0131\u015Fmas\u0131na yard\u0131m eder."},"guc-pinleri":{kat:"guc",ad:"G\xFC\xE7 pinleri",kavram:"gerilim",oncelik:ti,kisa:"Devredeki par\xE7alara elektrik veren pinler: 5V, 3,3V, GND ve Vin."},mikrodenetleyici:{kat:"islem",ad:"Mikrodenetleyici",oncelik:ti,kisa:"Kart\u0131n beyni: y\xFCklenen kodu sat\u0131r sat\u0131r \xE7al\u0131\u015Ft\u0131r\u0131r, pinleri okur ve y\xF6netir."},"usb-cipi":{kat:"islem",ad:"USB \xE7ipi",oncelik:zi,kisa:"Bilgisayardan USB ile gelen veriyi mikrodenetleyicinin anlayaca\u011F\u0131 seri veriye \xE7evirir."},kristal:{kat:"islem",ad:"Kristal (16 MHz)",oncelik:zi,kisa:"Kart\u0131n saati gibidir: saniyede 16 milyon kez titre\u015Ferek i\u015Flemlerin s\u0131rayla yap\u0131laca\u011F\u0131 d\xFCzenli bir ritim verir."},"dijital-pinler":{kat:"pin",ad:"Dijital pinler",kavram:"dijital",oncelik:ti,kisa:"0 ile 13 aras\u0131 numaral\u0131 pinler. Her biri a\xE7\u0131k (HIGH) ya da kapal\u0131 (LOW) olur; LED yakmak, buton okumak i\xE7in kullan\u0131l\u0131r."},"analog-pinler":{kat:"pin",ad:"Analog giri\u015F pinleri",kavram:"analog",oncelik:ti,kisa:"A0 ile A5 aras\u0131 pinler. A\xE7\u0131k ya da kapal\u0131n\u0131n yan\u0131nda aradaki de\u011Ferleri de \xF6l\xE7er; \u0131\u015F\u0131k ve s\u0131cakl\u0131k alg\u0131lay\u0131c\u0131lar\u0131 burada okunur."},icsp:{kat:"pin",ad:"ICSP pinleri",oncelik:zi,kisa:"Mikrodenetleyiciye USB olmadan, \xF6zel bir programlay\u0131c\u0131yla do\u011Frudan kod y\xFCklemek i\xE7in kullan\u0131lan alt\u0131 pinlik ba\u015Fl\u0131k."},"led-l":{kat:"isik",ad:"L \u0131\u015F\u0131\u011F\u0131",oncelik:Vi,kisa:"13. pine ba\u011Fl\u0131 k\xFC\xE7\xFCk \u0131\u015F\u0131k. 13. pine HIGH verilince yanar; ek par\xE7a takmadan kodu denemeye yarar."},"led-on":{kat:"isik",ad:"ON \u0131\u015F\u0131\u011F\u0131",oncelik:Vi,kisa:"Karta elektrik gelince yanar. Yanm\u0131yorsa kart g\xFC\xE7 alm\u0131yordur."},"led-txrx":{kat:"isik",ad:"TX ve RX \u0131\u015F\u0131klar\u0131",oncelik:Vi,kisa:"Kart bilgisayarla veri al\u0131\u015Fveri\u015Fi yaparken yan\u0131p s\xF6ner: TX veri g\xF6nderirken, RX veri al\u0131rken yanar."},reset:{kat:"kontrol",ad:"Reset d\xFC\u011Fmesi",oncelik:ti,kisa:"Bas\u0131nca kart y\xFCkl\xFC kodu en ba\u015Ftan \xE7al\u0131\u015Ft\u0131r\u0131r. Kod silinmez."},"montaj-deligi":{kat:"kontrol",ad:"Montaj deli\u011Fi",oncelik:Vi,kisa:"Kart\u0131 vidayla bir kutuya ya da tabana sabitlemek i\xE7in a\xE7\u0131lm\u0131\u015F delik."},"pin-dijital":{kat:"pin",ad:"Dijital pin",kavram:"dijital",oncelik:Gn,kisa:"HIGH (5 volt) ya da LOW (0 volt) de\u011Ferini verir veya okur."},"pin-pwm":{kat:"pin",ad:"PWM pini (~)",kavram:"pwm",oncelik:Gn,kisa:"Yan\u0131nda ~ i\u015Fareti olan pin. \xC7ok h\u0131zl\u0131 a\xE7\u0131l\u0131p kapanarak LED'i yar\u0131 parlakl\u0131kta yakmak gibi ara de\u011Ferler \xFCretebilir."},"pin-rx-tx":{kat:"pin",ad:"RX ve TX pinleri",oncelik:Gn,kisa:"Seri haberle\u015Fme pinleri: 0 (RX) veri al\u0131r, 1 (TX) veri g\xF6nderir. Kod y\xFCklenirken de kullan\u0131ld\u0131klar\u0131 i\xE7in devrede bo\u015F b\u0131rak\u0131lmalar\u0131 \xF6nerilir."},"pin-13":{kat:"pin",ad:"13. pin",oncelik:Gn,kisa:"Karttaki L \u0131\u015F\u0131\u011F\u0131na ba\u011Fl\u0131d\u0131r: 13. pine HIGH verilince hem buraya ba\u011Fl\u0131 LED hem L \u0131\u015F\u0131\u011F\u0131 yanar."},"pin-gnd":{kat:"pin",ad:"GND pini",kavram:"gnd",oncelik:Gn,kisa:"Toprak, yani eksi u\xE7. Ak\u0131m devreyi dola\u015F\u0131p buradan karta d\xF6ner; devrenin 0 volt noktas\u0131d\u0131r."},"pin-5v":{kat:"guc",ad:"5V pini",oncelik:Gn,kisa:"Devredeki par\xE7alara 5 volt verir."},"pin-3v3":{kat:"guc",ad:"3,3V pini",oncelik:Gn,kisa:"Daha d\xFC\u015F\xFCk gerilimle \xE7al\u0131\u015Fan par\xE7alara 3,3 volt verir."},"pin-vin":{kat:"guc",ad:"Vin pini",oncelik:Gn,kisa:"G\xFC\xE7 giri\u015Fine tak\u0131lan adapt\xF6r\xFCn gerilimine bu pinden ula\u015F\u0131l\u0131r; karta bu pinden de g\xFC\xE7 verilebilir."},"pin-aref":{kat:"pin",ad:"AREF pini",oncelik:Gn,kisa:"Analog \xF6l\xE7\xFCmlerde kar\u015F\u0131la\u015Ft\u0131rma i\xE7in kullan\u0131lan ba\u015Fvuru (referans) gerilimi bu pine verilebilir."},"pin-ioref":{kat:"pin",ad:"IOREF pini",oncelik:Gn,kisa:"Kart\u0131n pinlerinin hangi gerilimle \xE7al\u0131\u015Ft\u0131\u011F\u0131n\u0131 (UNO'da 5 volt) \xFCst\xFCne tak\u0131lan ek kartlara bildirir."},"pin-reset":{kat:"pin",ad:"RESET pini",oncelik:Gn,kisa:"Bu pin GND'ye ba\u011Flan\u0131rsa kart, reset d\xFC\u011Fmesine bas\u0131lm\u0131\u015F gibi kodu ba\u015Ftan ba\u015Flat\u0131r."},"pin-sda-scl":{kat:"pin",ad:"SDA ve SCL pinleri",oncelik:Gn,kisa:"I2C haberle\u015Fmesinde kullan\u0131l\u0131r: SDA veriyi, SCL saat sinyalini ta\u015F\u0131r. UNO'da A4 ve A5 ile ayn\u0131 hatlara ba\u011Fl\u0131d\u0131r."},"pin-analog":{kat:"pin",ad:"Analog giri\u015F pini",kavram:"analog",oncelik:Gn,kisa:"0 ile 5 volt aras\u0131ndaki gerilimi \xF6l\xE7er ve 0 ile 1023 aras\u0131nda bir say\u0131ya \xE7evirir."},breadboard:{kat:"breadboard",ad:"Breadboard",oncelik:ti,kisa:"Lehim yapmadan devre kurmaya yarayan delikli tahta; deliklerin bir k\u0131sm\u0131 i\xE7eriden birbirine ba\u011Fl\u0131d\u0131r."},serit:{kat:"breadboard",ad:"\u015Eerit (5'li delik grubu)",oncelik:Vi,kisa:"Ayn\u0131 s\xFCtundaki be\u015F delik i\xE7eriden bir metal \u015Feritle ba\u011Fl\u0131d\u0131r; bu deliklere tak\u0131lan bacaklar birbirine ba\u011Flanm\u0131\u015F olur."},"arti-ray":{kat:"breadboard",ad:"Art\u0131 (+) ray\u0131",oncelik:zi,kisa:"K\u0131rm\u0131z\u0131 \xE7izgi boyunca uzanan s\u0131ra boydan boya ba\u011Fl\u0131d\u0131r; genellikle 5V buraya ba\u011Flan\u0131r."},"eksi-ray":{kat:"breadboard",ad:"Eksi (\u2212) ray\u0131",oncelik:zi,kisa:"Mavi \xE7izgi boyunca uzanan s\u0131ra boydan boya ba\u011Fl\u0131d\u0131r; genellikle GND buraya ba\u011Flan\u0131r."},"orta-kanal":{kat:"breadboard",ad:"Orta kanal",oncelik:zi,kisa:"Breadboard'u iki yar\u0131ya ay\u0131r\u0131r: iki yar\u0131daki delikler birbirine ba\u011Fl\u0131 de\u011Fildir. Buton gibi par\xE7alar bu kanal\u0131n \xFCst\xFCne tak\u0131l\u0131r."},koordinat:{kat:"breadboard",ad:"Koordinatlar",oncelik:Vi,kisa:"Harfler sat\u0131rlar\u0131 (a-j), say\u0131lar s\xFCtunlar\u0131 (1-30) g\xF6sterir. 15e gibi bir adres, deli\u011Fin yerini tam s\xF6yler."},led:{kat:"isik",ad:"LED",oncelik:ti,kisa:"Elektrik do\u011Fru y\xF6nde ge\xE7ince \u0131\u015F\u0131k veren par\xE7a."},anot:{kat:"parca",ad:"Anot (+)",oncelik:Vi,kisa:"LED'in uzun baca\u011F\u0131; art\u0131 uca ba\u011Flan\u0131r."},katot:{kat:"parca",ad:"Katot (\u2212)",oncelik:Vi,kisa:"LED'in k\u0131sa baca\u011F\u0131; eksi uca (GND) ba\u011Flan\u0131r."},direnc:{kat:"parca",ad:"Diren\xE7",oncelik:ti,kisa:"Ak\u0131m\u0131 s\u0131n\u0131rlar; LED'i fazla ak\u0131mdan korur."},"renk-bantlari":{kat:"parca",ad:"Renk bantlar\u0131",oncelik:Vi,kisa:"Direncin de\u011Feri renklerle yaz\u0131l\u0131r: ilk iki bant rakamlar\u0131, \xFC\xE7\xFCnc\xFCs\xFC eklenecek s\u0131f\u0131r say\u0131s\u0131n\u0131, sonuncusu hata pay\u0131n\u0131 g\xF6sterir."},buton:{kat:"parca",ad:"Buton",oncelik:ti,kisa:"Bas\u0131l\u0131nca iki ucunu birbirine ba\u011Flar, b\u0131rak\u0131nca ay\u0131r\u0131r."},kablo:{kat:"parca",ad:"Atlama kablosu",oncelik:zi,kisa:"Ucundaki i\u011Fnelerle karttaki pinleri breadboard'daki deliklere ba\u011Flar; elektrik kablonun i\xE7inden ge\xE7er."}},mp=i=>xh[yc[i]?.kat]?yc[i].kat:null;var yh=document.documentElement,bh="bote-3d-gorunum",gp=(i,t)=>{try{localStorage.setItem(i,t)}catch{}},bv=i=>{try{return localStorage.getItem(i)}catch{return null}},vh=i=>{let t=document.querySelector("#duyuru");t&&(t.textContent=i)},_p=["sanal","fiziksel"];function xp(){let i=new URLSearchParams(location.search).get("gorunum");return _p.includes(i)?i:bv(bh)==="fiziksel"?"fiziksel":"sanal"}var Mv=[".gorunum-gecis{display:inline-flex;flex:none;align-items:stretch;border:1px solid var(--line);border-radius:12px;background:var(--surface);overflow:hidden}",".gorunum-gecis button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:var(--btn);min-width:var(--btn);padding:0 13px;border:0;border-radius:0;background:transparent;color:var(--muted);font-weight:700;white-space:nowrap;cursor:pointer;touch-action:manipulation;user-select:none}",".gorunum-gecis button+button{border-left:1px solid var(--line)}",".gorunum-gecis button[aria-pressed=true]{background:var(--violet-soft);color:var(--violet);box-shadow:inset 0 -3px 0 var(--violet)}",".gorunum-gecis button[aria-busy=true]{cursor:progress}",".gorunum-gecis button:focus-visible{outline-offset:-4px}","@media (hover:hover) and (pointer:fine){.gorunum-gecis button:not([aria-pressed=true]):hover{background:var(--raised);color:var(--ink)}}","@media (max-width:900px){.gorunum-gecis .gg-yazi{display:none}.gorunum-gecis button{padding:0}}",":root[data-mod=tahta] .gorunum-gecis button[aria-pressed=false]{display:none}",":root[data-mod=tahta] .gorunum-gecis button{border-left:0}",".gorunum-gecis .gg-degis{display:none;width:.95em;height:.95em;opacity:.7}",":root[data-mod=tahta] .gorunum-gecis .gg-degis{display:inline-block}",":root[data-mod=tahta] .gorunum-gecis:has([aria-busy=true]) button{cursor:progress;opacity:.75}"].join(`
`),yp='<svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">',Sv={sanal:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',fiziksel:'<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'},wv=yp.replace('class="ico"','class="ico gg-degis"')+'<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>';function vp(i){let t="sanal",e="sanal",n=document.createElement("style");n.textContent=Mv,document.head.appendChild(n);let s=document.createElement("div");s.className="gorunum-gecis",s.setAttribute("role","group"),s.setAttribute("aria-label","G\xF6r\xFCn\xFCm");for(let[c,u,d]of[["sanal","Sanal","Sanal g\xF6r\xFCn\xFCm: sade 3D \xE7izim"],["fiziksel","Fiziksel","Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi"]]){let h=document.createElement("button");h.type="button",h.dataset.gorunumSec=c,h.title=d,h.setAttribute("aria-label",`${u} g\xF6r\xFCn\xFCm`),h.setAttribute("aria-pressed",String(c==="sanal")),h.innerHTML=`${yp}${Sv[c]}</svg><span class="gg-yazi">${u}</span>${wv}`,s.append(h)}let r=document.querySelector("#gorunum-yuva");r?r.append(s):document.querySelector(".ust-sag")?.prepend(s);let a=[...s.querySelectorAll("button")],o=()=>{for(let c of a)c.setAttribute("aria-pressed",String(c.dataset.gorunumSec===t))};async function l(c,{kaydet:u=!0,sessiz:d=!1}={}){if(!_p.includes(c))return;if(e=c,c===t){o();return}let h=a.find(g=>g.dataset.gorunumSec===c);h?.setAttribute("aria-busy","true"),c==="fiziksel"&&!d&&vh("Fiziksel g\xF6r\xFCn\xFCm haz\u0131rlan\u0131yor");let p=!0;try{await i(c)}catch(g){p=!1,console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131",g)}if(h?.removeAttribute("aria-busy"),e===c){if(!p){t="sanal",gp(bh,"sanal"),o(),vh("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor");return}if(t=c,yh.dataset.gorunumKip=c,o(),d||vh(c==="fiziksel"?"Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi":"Sanal g\xF6r\xFCn\xFCm"),document.dispatchEvent(new CustomEvent("3d:gorunum",{detail:{ad:c}})),u){gp(bh,c);let g=new URL(location.href);c==="fiziksel"?g.searchParams.set("gorunum","fiziksel"):g.searchParams.delete("gorunum"),history.replaceState(null,"",g)}}}return s.addEventListener("click",c=>{let u=c.target.closest("[data-gorunum-sec]");if(u){if(yh.dataset.mod==="tahta"){s.querySelector("[aria-busy=true]")||l(t==="sanal"?"fiziksel":"sanal");return}l(u.dataset.gorunumSec)}}),yh.dataset.gorunumKip="sanal",{ayarla:l,simdiki:()=>t,gecis:s,onIsit:c=>{for(let u of["pointerenter","focusin"])a[1].addEventListener(u,c,{once:!0})}}}var bp=(i,t,e,n,s,r)=>{let a=new ge(i,t,e);return a.translate(n,s,r),a};function Mp(i){let t=new Oe;t.name="breadboard-fiziksel";let e=Kf(i.duzey);for(let c of Object.values(e))i.kayit(c);let n=new Se({map:e.albedo,roughness:.58});e.normal&&(n.normalMap=e.normal,n.normalScale=new lt(.9,.9));let s=new Se({color:15526111,roughness:.62});i.kayitMat(n),i.kayitMat(s);let r=[s,s,n,s,s,s],a=new Gt(new Cn(It.w,It.h,It.d,3,1.1),r);a.position.set(It.x,It.h/2,It.z),a.castShadow=a.receiveShadow=!0,t.add(a);let o=[];for(let c=1;c<=30;c++)for(let u of[1,-1])o.push(bp(1.5,1.1,11.4,fn(c),He-2.3,It.z+u*8.89));for(let c of Object.values(In))o.push(bp(fn(30)-fn(2)+1.6,1.1,1.5,It.x,He-2.3,It.z+c));let l=new Gt(zn(o.map(c=>c.toNonIndexed())),i.mat("klips"));return l.visible=!1,t.add(l),{grup:t,kanca:{rontgen(c){l.visible=c;for(let u of[n,s])u.transparent=c,u.opacity=c?.3:1,u.depthWrite=!c,u.needsUpdate=!0;a.castShadow=!c}}}}var Hn=(i,t=!0)=>(i.castShadow=i.receiveShadow=t,i),Ii=i=>i.index?i.toNonIndexed():i;function Av(i,t){let e=new Oe;e.name="led-fiziksel";let n=new Qt(gc[t.userData.renk]??gc.kirmizi),s=4.2,r=i.ledKubbe(n),a=r.color.clone(),o=[[0,1],[2.5,1],[2.5,5.6]];for(let f=1;f<=12;f++){let v=f/12*(Math.PI/2);o.push([2.5*Math.cos(v),5.6+2.5*Math.sin(v)])}let l=new Si(o.map(([f,v])=>new lt(f,v)),i.duzey==="yuksek"?40:32),c=Math.acos(2.55/2.95),u=new ci;u.absarc(0,0,2.95,c,Math.PI*2-c,!1),u.lineTo(2.55,2.95*Math.sin(c));let d=new ts(u,{depth:1,bevelEnabled:!1,curveSegments:28});d.rotateX(Math.PI/2),d.translate(0,1,0);let h=new Gt(zn([Ii(l),Ii(d)]),r);if(h.position.y=s,h.renderOrder=-1,h.castShadow=!1,h.receiveShadow=!1,e.add(h),i.ek("ledIc")){let f=zn([Ii((()=>{let v=new ge(1.5,3.4,.45);return v.translate(.95,s+1.7,0),v})()),Ii((()=>{let v=new ge(.5,2.9,.45);return v.translate(-1.27,s+1.45,0),v})()),Ii((()=>{let v=new ge(2,.12,.12);return v.translate(-.2,s+3.5,0),v})())]);e.add(Hn(new Gt(f,i.mat("metalCelik")),!1))}let p=Hn(new Gt(new ge(.5,1,.5),i.mat("kalay"))),g=Hn(new Gt(new ge(.5,1,.5),i.mat("kalay")));p.position.x=-1.27,g.position.x=1.27,e.add(p,g);let _=f=>{let v=22+(s+5-22)*f,S=17+(s+5-17)*f;p.scale.y=v,p.position.y=s-v/2,g.scale.y=S,g.position.y=s-S/2};return _(1),{grup:e,kanca:{ac:f=>{let v=typeof f=="number"?f:f?1:0;r.color.copy(a).lerp(n,v),r.emissiveIntensity=1.05*v,r.transparent&&(r.opacity=.8+.15*v)},bacak:_}}}function Ev(i,t){let e=new Oe;e.name="direnc-fiziksel";let n=t.userData,s=n.H??3.4,r=n.uclar?n.uclar[1].x-n.uclar[0].x:10,a=n.bantlar||["kirmizi","kirmizi","kahve","altin"],o=6.88,l=46,c=[];for(let _=0;_<l;_++){let m=-o/2+_/(l-1)*o,f=Math.abs(m),v=1.3*Math.sqrt(Math.max(0,1-((f-2.45)/.99)**2)),S=_===0||_===l-1?0:Math.max(f<2.45?1.02:0,v);c.push(new lt(S,m))}let u=new Si(c,i.duzey==="dusuk"?16:24);u.rotateZ(-Math.PI/2);let d=[.18,.33,.48,.8].map(_=>2.3-4.6*_),h=new Se({map:i.kayit(Zf(a,d,o,i.aniz)),roughness:.45});i.kayitMat(h);let p=Hn(new Gt(u,h));p.position.y=s,e.add(p);let g=[];for(let _ of[-1,1]){let m=r/2-2.9;if(m>.05){let S=new un(.27,.27,m,10);S.rotateZ(Math.PI/2),S.translate(_*((r/2+2.9)/2),s,0),g.push(Ii(S))}let f=new un(.27,.27,s+7,10);f.translate(_*r/2,(s-7)/2,0),g.push(Ii(f));let v=new es(.27,10,8);v.translate(_*r/2,s,0),g.push(Ii(v))}return e.add(Hn(new Gt(zn(g),i.mat("kalay")))),{grup:e,kanca:{}}}function Tv(i){let t=new Oe;t.name="buton-fiziksel";let e=Hn(new Gt(new Cn(6,3.4,6,2,.45),i.mat("resetTaban")));e.position.y=1.7;let n=Hn(new Gt(new ge(6.2,.3,6.2),i.mat("metalFirca")));n.position.y=3.55;let s=Hn(new Gt(new un(1.65,1.8,1.7,28),i.mat("butonKapak")));s.position.y=4.55,t.add(e,n,s);let r=[];for(let o of[-2.54,2.54])for(let l of[-3.81,3.81]){let c=new ge(.6,7,.35);c.translate(o,-3.2,l),r.push(Ii(c))}let a=[];for(let o of[-2.5,2.5])for(let l of[-2.5,2.5]){let c=new un(.3,.3,.06,10);c.translate(o,3.73,l),a.push(Ii(c))}return t.add(Hn(new Gt(zn(r),i.mat("kalay"))),new Gt(zn(a),i.mat("koyu"))),{grup:t,kanca:{bas(o){s.position.y=o?3.95:4.55}}}}function Rv(i,t){let e=new Oe;e.name="kablo-fiziksel";let n=t.userData,s=n.egri;if(!s)return null;let r=t.children.find(m=>m.isMesh&&m.geometry?.type==="TubeGeometry"&&m.material.visible!==!1),a=r?r.material.color.getHex():mh.turuncu,o=56,l={dusuk:6,orta:8,yuksek:10}[i.duzey],c=new Se({color:a,roughness:.36});i.kayitMat(c);let u=Hn(new Gt(new ns(s,o,.62,l,!1),c));e.add(u);let d=u.geometry.index.count,h=s.points[0],p=s.points[s.points.length-1],g=[];for(let m of[h,p]){let f=new C(m.x,m.y-6.2,m.z),v=Hn(new Gt(new Cn(2.5,5.6,2.5,2,.25),i.mat("dupont")));v.position.set(f.x,f.y+2.9,f.z);let S=Hn(new Gt(new un(.72,1.12,.8,14),i.mat("dupont")));S.position.set(f.x,f.y+6.05,f.z);let M=Hn(new Gt(new ge(.62,5.6,.62),i.mat("kalay")));M.position.set(f.x,f.y-2.7,f.z),e.add(v,S,M),g.push([v,S,M])}return{grup:e,kanca:{buyut:m=>{u.geometry.setDrawRange(0,Math.floor(m*o)*l*6);for(let f of g[1])f.visible=m>=1;m>=1&&u.geometry.setDrawRange(0,d)}}}}function Sp(i,t,e){return t==="led"?Av(i,e):t==="direnc"?Ev(i,e):t==="buton"?Tv(i,e):t==="kablo"?Rv(i,e):null}var Cv=!0,Iv=2,Pv={yuksek:{env:1,hemi:.28,gunes:2.1,zemin:.26},orta:{env:.95,hemi:.3,gunes:2.2,zemin:.24},dusuk:{env:.85,hemi:.35,gunes:2.4,zemin:.2}},wp=Symbol("gercekci"),kv=i=>{try{return localStorage.getItem(i)}catch{return null}},Mh=["dusuk","orta","yuksek"];function vc(i,t,e){let n=i?.[t];if(typeof n!="function"||n[wp])return;let s=function(...r){let a=n.apply(this,r);return e(...r),a};s[wp]=!0,i[t]=s}function Lv(i,t){let e=new URLSearchParams(location.search).get("fizduzey");if(Mh.includes(e))return{duzey:e,neden:["adres"]};let n=2,s=[],r=(d,h)=>{d<n&&(n=d,s.push(h))},a=Mh.indexOf(kv("bote-3d-fizduzey"));a>=0&&r(a,"kayit");let o="";try{let d=i.getContext(),h=d.getExtension("WEBGL_debug_renderer_info");o=h?String(d.getParameter(h.UNMASKED_RENDERER_WEBGL)):""}catch{}let l=/nvidia|geforce|rtx|gtx|radeon rx|radeon pro|apple (m\d|gpu)|adreno.*(6[4-9]\d|[7-9]\d\d)|mali-g[789]|intel.*(arc|iris xe)/i.test(o);/swiftshader|llvmpipe|softpipe|software|basic render/i.test(o)&&r(0,"yazilim"),/intel.*(hd|uhd) graphics|gma|radeon (r[2-5]|hd)|mali-(4|t)|adreno.*[2-5]\d\d|vivante|powervr/i.test(o)&&r(1,"zayif");let c=i.capabilities.maxTextureSize||4096;c<4096?r(0,"doku-siniri"):c<8192&&r(1,"doku-siniri");let u=navigator.deviceMemory;return u&&u<=2?r(0,"bellek"):u&&u<=4&&r(1,"bellek"),(navigator.hardwareConcurrency||8)<=2&&r(1,"cekirdek"),innerWidth*innerHeight*(devicePixelRatio||1)**2>=6e6&&!l&&r(0,"4k"),(/iP(hone|ad|od)/.test(navigator.userAgent)||/Mac/.test(navigator.platform)&&navigator.maxTouchPoints>1)&&r(1,"ios"),o||r(1,"cizici-gizli"),t.kalite().kademe>0&&r(Math.max(0,n-1),"kademe"),n===2&&!(l&&c>=16384&&(!u||u>=8))&&r(1,"yuksek-sarti"),{duzey:Mh[n],neden:s,cizici:o}}function Ap({S:i,kart:t,bb:e,parcalar:n}){let s={kart:{},bb:{},parca:{}},r={duzey:null,neden:[],gorunum:"sanal",hazir:!1,istatistik:{}},a=null,o=null,l=null,c=[],u=(_,m,f)=>{let v=_?.kanca?.[m];v&&v(f)};vc(t,"ledL",_=>{s.kart.ledL=_,a&&u(a.kart,"ledL",_)}),vc(t,"ledOn",_=>{s.kart.ledOn=_,a&&u(a.kart,"ledOn",_)}),vc(e,"rontgen",_=>{s.bb.rontgen=_,a&&u(a.bb,"rontgen",_)});for(let[_,m]of Object.entries(n)){s.parca[_]={};for(let f of["ac","bacak","bas","buyut"])vc(m.nesne.userData,f,v=>{s.parca[_][f]=v,a&&u(a.parca[_],f,v)})}function d(){if(a)return a;let _=performance.now(),m=Lv(i.renderer,i),f=pc(m.duzey,i.renderer.capabilities.getMaxAnisotropy()),v=E=>(E&&(E.grup.visible=!1),E),S;try{S={sag:f,kart:v(mc(f,{logo:Cv})),bb:v(Mp(f)),parca:{},gruplar:[]};for(let[E,y]of Object.entries(n)){let T=v(Sp(f,y.tur,y.nesne));T&&(S.parca[E]=T)}}catch(E){try{f.dispose()}catch{}throw E}let M=[],A=E=>E.traverse(y=>{if(!y.isMesh||y.isInstancedMesh&&!y.userData.park)return;let T=y.material;!Array.isArray(T)&&(T.visible===!1||T.blending===Bn)||M.push({o:y,mask:y.layers.mask})});A(t.grup),A(e.grup);for(let E of Object.values(n))A(E.nesne);t.grup.add(S.kart.grup),e.grup.add(S.bb.grup),S.gruplar.push(S.kart.grup,S.bb.grup);for(let[E,y]of Object.entries(S.parca))n[E].nesne.add(y.grup),S.gruplar.push(y.grup);c.push(...M),r.duzey=m.duzey,r.neden=m.neden,a=S,"ledL"in s.kart&&u(S.kart,"ledL",s.kart.ledL),"ledOn"in s.kart&&u(S.kart,"ledOn",s.kart.ledOn),"rontgen"in s.bb&&u(S.bb,"rontgen",s.bb.rontgen);for(let[E,y]of Object.entries(s.parca))for(let[T,P]of Object.entries(y))u(S.parca[E],T,P);l={},i.scene.traverse(E=>{E.isHemisphereLight?l.hemi=E:E.isDirectionalLight?l.gunes=E:E.isMesh&&E.material?.isShadowMaterial&&(l.zemin=E)});let b=0;for(let E of S.gruplar)E.traverse(y=>{y.isMesh&&y.geometry&&(b+=(y.geometry.index?y.geometry.index.count:y.geometry.attributes.position.count)/3*(y.isInstancedMesh?y.count:1))});r.istatistik={kurmaMs:Math.round(performance.now()-_),ucgen:Math.round(b),park:c.length};try{i.renderer.compile(i.scene,i.camera);for(let E of S.gruplar)E.traverse(y=>{if(y.isMesh)for(let T of[].concat(y.material))for(let P of Object.values(T||{}))P?.isTexture&&i.renderer.initTexture(P)})}catch(E){console.warn("Fiziksel \u0131s\u0131nma atland\u0131",E)}return r.hazir=!0,new URLSearchParams(location.search).has("olcum")&&console.info("Fiziksel g\xF6r\xFCn\xFCm",r),S}function h(_){if(!l)return;o||(o={env:i.scene.environmentIntensity,hemi:l.hemi?.intensity,gunes:l.gunes?.intensity,zemin:l.zemin?.material.opacity});let m=_?Pv[r.duzey]:o;i.scene.environmentIntensity=m.env,l.hemi&&(l.hemi.intensity=m.hemi),l.gunes&&(l.gunes.intensity=m.gunes),l.zemin&&(l.zemin.material.opacity=m.zemin)}function p(_){let m=_==="fiziksel";if(m&&d(),!!a){for(let{o:f,mask:v}of c)m?f.layers.set(Iv):f.layers.mask=v;for(let f of a.gruplar)f.visible=m;h(m),r.gorunum=_,i.golgeYenile(),i.iste()}}let g=vp(async _=>{_==="fiziksel"&&!a&&await new Promise(m=>setTimeout(m,30)),p(_)});if(xp()==="fiziksel")try{p("fiziksel"),g.ayarla("fiziksel",{kaydet:!1,sessiz:!0})}catch(_){console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor",_),g.ayarla("sanal",{kaydet:!0,sessiz:!0})}return{durum:()=>({...r}),gorunum:_=>g.ayarla(_),kipUygula:p}}var Dv={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06]},Nv=i=>/^\d+$/.test(i)?["3","5","6","9","10","11"].includes(i)?`~${i}`:i:i.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[i]||i,j1=new ve,Ep={id:"arduino",DERSLER:pp,KAMERA:xc,KESIF:yc,KATEGORI:xh,kategoriBul:mp,GORUNUM:Dv,vurguYap:np,sahneyiKur:Uv};function Uv(i,{olay:t,ders:e,veri:n}){let s=Z=>t("duyur",Z),r={bekleme:1e3,ters:!1,akim:!1,basili:!1,direncCikti:!1,sureCarpan:1,delaysiz:!1},a=null,o=null,l=null,c=null,u=null,d={},h={};cp(i.renderer.capabilities.getMaxAnisotropy());let p=tp(i.hedefler);i.scene.add(p.grup);let g=ep(i.hedefler);i.scene.add(g.grup);let _=e.devre?dp(e.devre,i.hedefler):{};for(let Z of Object.values(_))Z.nesne.visible=!1,i.scene.add(Z.nesne),Z.kutular=v(Z);let m=Ap({S:i,kart:p,bb:g,parcalar:_,html:ne}),f=new ve;function v(Z){let X=Z.nesne,at={};for(let[vt,U]of Z.pozlar?[["takili",1],["havada",0]]:[["takili",1]]){X.userData.bacak?.(U);let G=new cn;for(let V of X.children)!V.isMesh||!V.material||V.material.visible===!1||V.material.blending===Bn||(V.updateMatrix(),V.geometry.boundingBox||V.geometry.computeBoundingBox(),G.union(V.geometry.boundingBox.clone().applyMatrix4(V.matrix)));at[vt]=G}return X.userData.bacak?.(1),at}function S(Z,X="takili"){let at=Z.nesne,vt=Z.pozlar?.[X]||Z.pozlar?.takili||at.position;return(Z.kutular[X]||Z.kutular.takili).clone().applyMatrix4(f.compose(vt,at.quaternion,at.scale))}function M(Z,X={}){if(typeof Z!="string"){let U=_[Z.parca];return{kutu:S(U,Z.poz||"takili").expandByScalar(Z.pay??3),yon:Z.yon}}let at=xc[Z]||xc.genel,vt=new cn(new C(at.kutu[0],at.kutu[1],at.kutu[2]),new C(at.kutu[3],at.kutu[4],at.kutu[5]));for(let U of X.parca||[]){let G=_[U];if(!G)continue;let V=X.poz&&X.poz[U]||"takili";(G.tur==="kablo"?at.kablolar:V!=="takili")&&vt.union(S(G,V))}return{kutu:vt,yon:at.yon}}function A(Z){let[X,at,vt]=Z.split(":");if(X==="alan"){let V=p.alanlar[at]||g.alanlar[at];return new C(V[0],V[1]+V[4]/2+1.5,V[2])}if(X==="pin")return gi(at).add(new C(0,2.4,0));if(X==="delik")return We(Number(at),vt).add(new C(0,1,0));if(X==="ray")return Qn(at.slice(0,-1),at.slice(-1),at.endsWith("+")?4:28).add(new C(0,1,0));if(X==="parca"){let V=_[at],ot=(d.poz||{})[at]||"takili";return(V.pozlar?V.pozlar[ot].clone():V.nesne.position.clone()).add(V.nesne.userData.tepe||new C(0,6,0))}let U=_[X],G=(d.poz||{})[X]||"takili";return U.pozlar[G].clone().add(new C(at==="anot"?-1.27:1.27,at==="anot"?-16.6:-11.6,0))}function b(Z,X,at=!1){d=X,O(),ht(!1),Object.assign(r,{ters:!1,basili:!1,direncCikti:!1,delaysiz:!1,bekleme:1e3,sureCarpan:1});for(let U of ke("[data-eylem]"))U.setAttribute("aria-pressed",String(["1000","1"].includes(U.dataset.deger)));_.led1&&(_.led1.nesne.rotation.y=0),g.rontgen(!1),g.grupGoster([]),H(),p.ledOn(!!X.program);let vt=new Set(X.parca||[]);for(let[U,G]of Object.entries(_)){if(!vt.has(U)){G.nesne.visible=!1,G.kutu&&(G.kutu.userData.etkin=!1);continue}if(G.kutu&&(G.kutu.userData.etkin=!0),G.tur==="kablo"){G.nesne.visible||(G.nesne.visible=!0,G.nesne.userData.buyut(at?1:0),at||i.tween(700,bt=>G.nesne.userData.buyut(bt),!0));continue}let V=X.poz&&X.poz[U]||"takili",ot=G.pozlar[V],ft=V==="takili"?1:0;if(G.nesne.visible||(G.nesne.visible=!0,G.nesne.position.copy(ot).add(new C(0,at?0:14,0)),G.tk=ft,G.nesne.userData.bacak?.(ft)),!G.nesne.position.equals(ot)){let bt=G.nesne.position.clone(),Rt=G.tk??ft;G.tk=ft,i.tween(650,Ot=>{G.nesne.position.lerpVectors(bt,ot,Ot),G.nesne.userData.bacak?.(Rt+(ft-Rt)*Ot)},!0)}}_.r2&&vt.has("r2")&&(_.r2.nesne.visible=!0),i.golgeYenile(),i.etiketKoy((X.etiket||[]).map(([U,G,V])=>({nokta:A(U),metin:G,tur:V}))),u=null,X.program&&k(X.program),i.iste()}let E=n.kod||[];function y(){let Z=E.findIndex(vt=>vt.startsWith("void loop")),X=[],at=[];for(let vt=Z+1;vt<E.length;vt++)E[vt].trim()&&at.push(vt+1),E[vt].includes("delay(")&&(X.push(at),at=[]);return X}let T=y();function P(Z){for(let X of ke(".kod-satir.calisiyor"))X.classList.remove("calisiyor");for(let X of Z||[])for(let at of ke(`.adim.etkin .kod-satir[data-no="${X}"]`))at.classList.add("calisiyor")}function D(Z,X=0){return E.findIndex((vt,U)=>U>=X&&vt.includes(Z))+1}function O(){clearTimeout(a),a=null,clearTimeout(o),o=null,P([])}function H(){for(let Z of Object.values(_))Z.tur==="led"&&Z.nesne.userData.ac(!1);p.ledL(!1);for(let Z of Object.values(h))Z.yanik=!1}function k(Z){if(O(),u=Z,Z==="blink"){let X=at=>{W(at),P(T[at?0:1]),a=setTimeout(()=>X(!at),r.bekleme)};X(!0)}Z==="buton"&&j(),Z==="trafik"&&gt(0)}function W(Z){p.ledL(Z);let X=Z&&!r.ters;_.led1?.nesne.userData.ac(X),ut("led1",X),i.iste()}function j(){if(!_.buton)return;_.buton.nesne.userData.bas(r.basili),clearTimeout(o),o=null;let Z=D("digitalRead"),X=D("HIGH",Z),at=D("else"),vt=D("LOW",at-1);if(r.direncCikti&&!r.basili){let U=()=>{let G=Math.random()<.5;W(G),P(G?[Z,X]:[Z,at,vt]),o=setTimeout(U,90+Math.random()*380)};U()}else W(r.basili),P(r.basili?[Z,X]:[Z,at,vt]);i.iste()}let tt={kirmizi:"ledK",sari:"ledS",yesil:"ledY"};function gt(Z){let X=n.trafikSirasi?.length?n.trafikSirasi:[{isiklar:["kirmizi"],sure:3e3},{isiklar:["yesil"],sure:3e3},{isiklar:["sari"],sure:1e3}];if(r.delaysiz){for(let[vt,U]of Object.entries(tt))_[U].nesne.userData.ac(.35),ut(U,!0);P(T.flat()),i.iste();return}let at=X[Z%X.length];for(let[vt,U]of Object.entries(tt)){let G=at.isiklar.includes(vt);_[U].nesne.userData.ac(G),ut(U,G)}P(T[Z%X.length]),i.iste(),a=setTimeout(()=>gt(Z+1),at.sure*r.sureCarpan)}function et(){if(Object.keys(h).length)return;let Z=(X,at,vt,U)=>{h[X]={akim:lp(i.scene,fp(_[at],_[vt],_[U],_.kgnd)),yanik:!1}};(e.devre==="led"||e.devre==="buton")&&Z("led1","k13","led1","r1"),e.devre==="trafik"&&(Z("ledK","kK","ledK","rK"),Z("ledS","kS","ledS","rS"),Z("ledY","kY","ledY","rY"))}function ut(Z,X){let at=h[Z];at&&(at.yanik=X,at.akim.gorunur(r.akim&&X))}function ht(Z){r.akim=Z,clearTimeout(c),Z?(et(),(e.devre==="led"||e.devre==="buton")&&(h.led1.yanik=_.led1.nesne.userData.yanik??h.led1.yanik),l??=i.yavasGuncelleyici((X,at)=>{if(!r.akim)return!1;let vt=!1;for(let U of Object.values(h))U.yanik&&(U.akim.ilerlet(at),vt=!0);return vt}),c=setTimeout(()=>{ht(!1);for(let X of ke('[data-eylem="akim"]'))X.setAttribute("aria-pressed","false")},45e3)):l&&(l(),l=null);for(let X of Object.values(h))X.akim.gorunur(Z&&X.yanik);i?.iste()}function Ft(Z,X){let at=vt=>X.setAttribute("aria-pressed",String(vt));if(Z==="akim"&&(ht(!r.akim),at(r.akim)),Z==="hiz"){r.bekleme=Number(X.dataset.deger);for(let vt of ke('[data-eylem="hiz"]',X.parentElement))vt.setAttribute("aria-pressed",String(vt===X));u==="blink"&&k("blink")}if(Z==="sure"){r.sureCarpan=Number(X.dataset.deger);for(let vt of ke('[data-eylem="sure"]',X.parentElement))vt.setAttribute("aria-pressed",String(vt===X));u==="trafik"&&k("trafik")}if(Z==="ters"&&(r.ters=!r.ters,at(r.ters),_.led1.nesne.rotation.y=r.ters?Math.PI:0,i.golgeYenile(),i.etiketKoy(r.ters?[{nokta:A("parca:led1"),metin:"Uzun bacak art\u0131k 16. s\xFCtunda"}]:[]),k(u)),Z==="rontgen"){let vt=X.getAttribute("aria-pressed")!=="true";at(vt),g.rontgen(vt),i.iste(),s(vt?"R\xF6ntgen a\xE7\u0131k: i\xE7teki metal \u015Feritler g\xF6r\xFCn\xFCyor":"R\xF6ntgen kapal\u0131")}Z==="direnc-cikar"&&(r.direncCikti=!r.direncCikti,at(r.direncCikti),_.r2.nesne.visible=!r.direncCikti,i.golgeYenile(),j()),Z==="delaysiz"&&(r.delaysiz=!r.delaysiz,at(r.delaysiz),k("trafik"))}let wt=Z=>{u!=="buton"&&!r.butonDene||(r.basili=Z,j())};document.addEventListener("pointerdown",Z=>{let X=Z.target.closest('[data-eylem="buton"]');X&&(X.setPointerCapture?.(Z.pointerId),wt(!0))});for(let Z of["pointerup","pointercancel","lostpointercapture"])document.addEventListener(Z,X=>{X.target.closest?.('[data-eylem="buton"]')&&r.basili&&wt(!1)});document.addEventListener("keydown",Z=>{(Z.key===" "||Z.key==="Enter")&&Z.target.closest?.('[data-eylem="buton"]')&&!Z.repeat&&(Z.preventDefault(),wt(!0))}),document.addEventListener("keyup",Z=>{(Z.key===" "||Z.key==="Enter")&&Z.target.closest?.('[data-eylem="buton"]')&&wt(!1)});function ue(Z){let X=[];for(let[at,vt]of Object.entries(_)){if(!(Z.parca||[]).includes(at))continue;let U=((Z.poz||{})[at]||"takili")==="takili"?1:0;for(let[G,V]of vt.nesne.userData.kesifYerleri?.(U)||[])X.push({id:G,nesne:vt.nesne,yerel:V,ozel:vt.ozel?.[G]})}for(let at of p.pinler)X.push({id:at.kesif,nokta:at.nokta,ozel:at.ozel,rozet:Nv(at.ad),adim:2.54});return X}function le(Z,X){let at=d;if(Z.bb&&X&&(at.kontrol||[]).includes("delik")){let vt=g.grupBul(X);if(vt)return g.grupGoster(vt.delikler),i.etiketKoy([{nokta:vt.delikler[0].clone().add(new C(0,1.5,0)),metin:`${vt.ad}: ba\u011Fl\u0131`,tur:"yesil"}]),s(`${vt.ad} birbirine ba\u011Fl\u0131`),!0}return Z.parca==="buton"&&u==="buton"?(r.basili=!0,j(),setTimeout(()=>{r.basili=!1,j()},700),!0):!1}let $t=Z=>(Z.kontrol||[]).includes("delik")?"delik":Z.dokun?"dokun":"",it={...g.alanlar,...p.alanlar},ct=Z=>{let X=it[Z];return X?new cn(new C(X[0]-X[3]/2,X[1]-X[4]/2,X[2]-X[5]/2),new C(X[0]+X[3]/2,X[1]+X[4]/2,X[2]+X[5]/2)):null},Mt=()=>{O(),ht(!1)};return{kesifNoktalari:[...p.kesifNoktalari,...g.kesifNoktalari],alanlar:it,noktaBul:A,kutuBul:ct,adimUygula:b,eylem:Ft,dokunuldu:le,durdur:Mt,kesifEk:ue,kameraBul:M,ipucu:$t,olcumEk:{kart:p,bb:g,parcalar:_,gercekci:m}}}var Tp=Ch();Tp.veri&&Bf(Ep,Tp);
