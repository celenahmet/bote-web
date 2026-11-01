var ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mf=0,ju=1,gf=2;var ja=1,Vl=2,Wr=3,bs=0,hn=1,ui=2,Ei=0,Xr=1,Ai=2,Qu=3,th=4,_f=5;var Ys=100,xf=101,yf=102,vf=103,bf=104,Mf=200,Sf=201,wf=202,Ef=203,eh=204,nh=205,Af=206,Tf=207,Rf=208,Cf=209,If=210,Pf=211,Lf=212,Df=213,kf=214,sl=0,rl=1,al=2,Rr=3,ol=4,ll=5,cl=6,ul=7,Gl=0,Nf=1,Uf=2,hi=0,ih=1,sh=2,rh=3,ah=4,oh=5,lh=6,Qa=7;var ch=300,Ms=301,$s=302,Hl=303,Wl=304,to=306,hl=1e3,bi=1001,dl=1002,an=1003,Ff=1004;var eo=1005;var un=1006,Xl=1007;var Ss=1008;var Rn=1009,uh=1010,hh=1011,Yr=1012,Yl=1013,di=1014,$n=1015,fi=1016,$l=1017,ql=1018,$r=1020,dh=35902,fh=35899,ph=1021,mh=1022,qn=1023,Mi=1026,ws=1027,Zl=1028,Kl=1029,Es=1030,Jl=1031;var jl=1033,no=33776,io=33777,so=33778,ro=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,ac=37488,oc=37489,ao=37490,lc=37491,cc=37808,uc=37809,hc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,xc=37817,yc=37818,vc=37819,bc=37820,Mc=37821,Sc=36492,wc=36494,Ec=36495,Ac=36283,Tc=36284,oo=36285,Rc=36286;var Ca=2300,fl=2301,nl=2302,Hu=2303,Wu=2400,Xu=2401,Yu=2402;var Of=3200;var lo=0,Bf=1,Xi="",Je="srgb",Ia="srgb-linear",Pa="linear",Se="srgb";var il=7680;var zf=519,Vf=512,Gf=513,Hf=514,Cc=515,Wf=516,Xf=517,Ic=518,Yf=519,gh=35044;var _h="300 es",oi=2e3,Cr=2001;function eg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ng(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $f(){let n=La("canvas");return n.style.display="block",n}var Fd={},Ir=null;function Da(...n){let t="THREE."+n.shift();Ir?Ir("log",t,...n):console.log(t,...n)}function qf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=qf(n);let t="THREE."+n.shift();if(Ir)Ir("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=qf(n);let t="THREE."+n.shift();if(Ir)Ir("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Bs(...n){let t=n.join(" ");t in Fd||(Fd[t]=!0,Ht(...n))}function Zf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Kf={[sl]:rl,[al]:cl,[ol]:ul,[Rr]:ll,[rl]:sl,[cl]:al,[ul]:ol,[ll]:Rr},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=1234567,Ea=Math.PI/180,Pr=180/Math.PI;function Gi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function xh(n,t){return(n%t+t)%t}function ig(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function sg(n,t,e){return n!==t?(e-n)/(t-n):0}function Aa(n,t,e){return(1-e)*n+e*t}function rg(n,t,e,i){return Aa(n,t,1-Math.exp(-e*i))}function ag(n,t=1){return t-Math.abs(xh(n,t*2)-t)}function og(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function lg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function cg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ug(n,t){return n+Math.random()*(t-n)}function hg(n){return n*(.5-Math.random())}function dg(n){n!==void 0&&(Od=n);let t=Od+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fg(n){return n*Ea}function pg(n){return n*Pr}function mg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function gg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _g(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xg(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),d=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*d,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yh={DEG2RAD:Ea,RAD2DEG:Pr,generateUUID:Gi,clamp:ee,euclideanModulo:xh,mapLinear:ig,inverseLerp:sg,lerp:Aa,damp:rg,pingpong:ag,smoothstep:og,smootherstep:lg,randInt:cg,randFloat:ug,randFloatSpread:hg,seededRandom:dg,degToRad:fg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:_g,setQuaternionFromProperEuler:xg,normalize:Ee,denormalize:ai},Eh=class Eh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eh.prototype.isVector2=!0;var ot=Eh,An=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],m=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*y;g<0&&(u=-u,d=-d,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let M=Math.acos(g),R=Math.sin(M);p=Math.sin(p*M)/R,o=Math.sin(o*M)/R,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+y*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ah=class Ah{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xu.copy(this).projectOnVector(t),this.sub(xu)}reflect(t){return this.sub(xu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ah.prototype.isVector3=!0;var C=Ah,xu=new C,Bd=new An,Th=class Th{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],y=s[0],g=s[3],p=s[6],M=s[1],R=s[4],S=s[7],w=s[2],b=s[5],A=s[8];return r[0]=a*y+o*M+l*w,r[3]=a*g+o*R+l*b,r[6]=a*p+o*S+l*A,r[1]=c*y+h*M+f*w,r[4]=c*g+h*R+f*b,r[7]=c*p+h*S+f*A,r[2]=u*y+d*M+m*w,r[5]=u*g+d*R+m*b,r[8]=u*p+d*S+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=f*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yu.makeScale(t,e)),this}rotate(t){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yu.makeRotation(-t)),this}translate(t,e){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;var Kt=Th,yu=new Kt,zd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yg(){let n={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=Tr(s.r),s.g=Tr(s.g),s.b=Tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ia]:{primaries:t,whitePoint:i,transfer:Pa,toXYZ:zd,fromXYZ:Vd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:zd,fromXYZ:Vd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}var ue=yg();function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var cr,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cr===void 0&&(cr=La("canvas")),cr.width=t.width,cr.height=t.height;let s=cr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hi(e[i]/255)*255):e[i]=Hi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vg=0,Lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vu(s[a].image)):r.push(vu(s[a]))}else r=vu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function vu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var bg=0,bu=new C,wn=class n extends li{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=bi,s=bi,r=un,a=Ss,o=qn,l=Rn,c=n.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Gi(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bu).x}get height(){return this.source.getSize(bu).y}get depth(){return this.source.getSize(bu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=ch;wn.DEFAULT_ANISOTROPY=1;var Rh=class Rh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,S=(d+1)/2,w=(p+1)/2,b=(h+u)/4,A=(f+y)/4,x=(m+g)/4;return R>S&&R>w?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=b/i,r=A/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=b/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rh.prototype.isVector4=!0;var Be=Rh,ml=class extends li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new wn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends ml{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ka=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var zl=class zl{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,m,y,g)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ur.setFromMatrixColumn(t,0).length(),r=1/ur.setFromMatrixColumn(t,1).length(),a=1/ur.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,m=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,y=c*f;e[0]=u+y*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,y=c*f;e[0]=u-y*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,m=o*h,y=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*l,d=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,Sg)}lookAt(t,e,i){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),rs.crossVectors(i,Dn),rs.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),rs.crossVectors(i,Dn)),rs.normalize(),Do.crossVectors(Dn,rs),s[0]=rs.x,s[4]=Do.x,s[8]=Dn.x,s[1]=rs.y,s[5]=Do.y,s[9]=Dn.y,s[2]=rs.z,s[6]=Do.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],y=i[6],g=i[10],p=i[14],M=i[3],R=i[7],S=i[11],w=i[15],b=s[0],A=s[4],x=s[8],E=s[12],P=s[1],L=s[5],k=s[9],N=s[13],I=s[2],O=s[6],Y=s[10],W=s[14],j=s[3],$=s[7],Q=s[11],B=s[15];return r[0]=a*b+o*P+l*I+c*j,r[4]=a*A+o*L+l*O+c*$,r[8]=a*x+o*k+l*Y+c*Q,r[12]=a*E+o*N+l*W+c*B,r[1]=h*b+f*P+u*I+d*j,r[5]=h*A+f*L+u*O+d*$,r[9]=h*x+f*k+u*Y+d*Q,r[13]=h*E+f*N+u*W+d*B,r[2]=m*b+y*P+g*I+p*j,r[6]=m*A+y*L+g*O+p*$,r[10]=m*x+y*k+g*Y+p*Q,r[14]=m*E+y*N+g*W+p*B,r[3]=M*b+R*P+S*I+w*j,r[7]=M*A+R*L+S*O+w*$,r[11]=M*x+R*k+S*Y+w*Q,r[15]=M*E+R*N+S*W+w*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],y=t[7],g=t[11],p=t[15],M=l*d-c*u,R=o*d-c*f,S=o*u-l*f,w=a*d-c*h,b=a*u-l*h,A=a*f-o*h;return e*(y*M-g*R+p*S)-i*(m*M-g*w+p*b)+s*(m*R-y*w+p*A)-r*(m*S-y*b+g*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],y=t[13],g=t[14],p=t[15],M=e*o-i*a,R=e*l-s*a,S=e*c-r*a,w=i*l-s*o,b=i*c-r*o,A=s*c-r*l,x=h*y-f*m,E=h*g-u*m,P=h*p-d*m,L=f*g-u*y,k=f*p-d*y,N=u*p-d*g,I=M*N-R*k+S*L+w*P-b*E+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(o*N-l*k+c*L)*O,t[1]=(s*k-i*N-r*L)*O,t[2]=(y*A-g*b+p*w)*O,t[3]=(u*b-f*A-d*w)*O,t[4]=(l*P-a*N-c*E)*O,t[5]=(e*N-s*P+r*E)*O,t[6]=(g*S-m*A-p*R)*O,t[7]=(h*A-u*S+d*R)*O,t[8]=(a*k-o*P+c*x)*O,t[9]=(i*P-e*k-r*x)*O,t[10]=(m*b-y*S+p*M)*O,t[11]=(f*S-h*b-d*M)*O,t[12]=(o*E-a*L-l*x)*O,t[13]=(e*L-i*E+s*x)*O,t[14]=(y*R-m*w-g*M)*O,t[15]=(h*w-f*R+u*M)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,y=a*h,g=a*f,p=o*f,M=l*c,R=l*h,S=l*f,w=i.x,b=i.y,A=i.z;return s[0]=(1-(y+p))*w,s[1]=(d+S)*w,s[2]=(m-R)*w,s[3]=0,s[4]=(d-S)*b,s[5]=(1-(u+p))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(m+R)*A,s[9]=(g-M)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ur.set(s[0],s[1],s[2]).length(),o=ur.set(s[4],s[5],s[6]).length(),l=ur.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ii.copy(this);let c=1/a,h=1/o,f=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,e.setFromRotationMatrix(ii),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=oi,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===oi)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Cr)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=oi,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===oi)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Cr)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};zl.prototype.isMatrix4=!0;var ge=zl,ur=new C,ii=new ge,Mg=new C(0,0,0),Sg=new C(1,1,1),rs=new C,Do=new C,Dn=new C,Gd=new ge,Hd=new An,ci=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wg=0,Wd=new C,hr=new An,Ui=new ge,ko=new C,ga=new C,Eg=new C,Ag=new An,Xd=new C(1,0,0),Yd=new C(0,1,0),$d=new C(0,0,1),qd={type:"added"},Tg={type:"removed"},dr={type:"childadded",child:null},Mu={type:"childremoved",child:null},Xe=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new ci,i=new An,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Kt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Xd,t)}rotateY(t){return this.rotateOnAxis(Yd,t)}rotateZ(t){return this.rotateOnAxis($d,t)}translateOnAxis(t,e){return Wd.copy(t).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xd,t)}translateY(t){return this.translateOnAxis(Yd,t)}translateZ(t){return this.translateOnAxis($d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ko.copy(t):ko.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ga,ko,this.up):Ui.lookAt(ko,ga,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Ui),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qd),dr.child=t,this.dispatchEvent(dr),dr.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tg),Mu.child=t,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qd),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,Eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new C(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},No={h:0,s:0,l:0};function Su(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=xh(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Su(a,r,t+1/3),this.g=Su(a,r,t),this.b=Su(a,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=Jf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ue.workingToColorSpace(gn.copy(this),t),Math.round(ee(gn.r*255,0,255))*65536+Math.round(ee(gn.g*255,0,255))*256+Math.round(ee(gn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(gn.copy(this),e);let i=gn.r,s=gn.g,r=gn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Je){ue.workingToColorSpace(gn.copy(this),t);let e=gn.r,i=gn.g,s=gn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(as),this.setHSL(as.h+t,as.s+e,as.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(as),t.getHSL(No);let i=Aa(as.h,No.h,e),s=Aa(as.s,No.s,e),r=Aa(as.l,No.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Wt;Wt.NAMES=Jf;var zs=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},si=new C,Fi=new C,wu=new C,Oi=new C,fr=new C,pr=new C,Zd=new C,Eu=new C,Au=new C,Tu=new C,Ru=new Be,Cu=new Be,Iu=new Be,Vi=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),si.subVectors(t,e),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){si.subVectors(s,e),Fi.subVectors(i,e),wu.subVectors(t,e);let a=si.dot(si),o=si.dot(Fi),l=si.dot(wu),c=Fi.dot(Fi),h=Fi.dot(wu),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ru.setScalar(0),Cu.setScalar(0),Iu.setScalar(0),Ru.fromBufferAttribute(t,e),Cu.fromBufferAttribute(t,i),Iu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ru,r.x),a.addScaledVector(Cu,r.y),a.addScaledVector(Iu,r.z),a}static isFrontFacing(t,e,i,s){return si.subVectors(i,e),Fi.subVectors(t,e),si.cross(Fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),si.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;fr.subVectors(s,i),pr.subVectors(r,i),Eu.subVectors(t,i);let l=fr.dot(Eu),c=pr.dot(Eu);if(l<=0&&c<=0)return e.copy(i);Au.subVectors(t,s);let h=fr.dot(Au),f=pr.dot(Au);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(fr,a);Tu.subVectors(t,r);let d=fr.dot(Tu),m=pr.dot(Tu);if(m>=0&&d<=m)return e.copy(r);let y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(pr,o);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Zd.subVectors(r,s),o=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Zd,o);let p=1/(g+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(fr,a).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uo.copy(i.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_a),Fo.subVectors(this.max,_a),mr.subVectors(t.a,_a),gr.subVectors(t.b,_a),_r.subVectors(t.c,_a),os.subVectors(gr,mr),ls.subVectors(_r,gr),Ns.subVectors(mr,_r);let e=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Ns.z,Ns.y,os.z,0,-os.x,ls.z,0,-ls.x,Ns.z,0,-Ns.x,-os.y,os.x,0,-ls.y,ls.x,0,-Ns.y,Ns.x,0];return!Pu(e,mr,gr,_r,Fo)||(e=[1,0,0,0,1,0,0,0,1],!Pu(e,mr,gr,_r,Fo))?!1:(Oo.crossVectors(os,ls),e=[Oo.x,Oo.y,Oo.z],Pu(e,mr,gr,_r,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bi=[new C,new C,new C,new C,new C,new C,new C,new C],ri=new C,Uo=new Wn,mr=new C,gr=new C,_r=new C,os=new C,ls=new C,Ns=new C,_a=new C,Fo=new C,Oo=new C,Us=new C;function Pu(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Us.fromArray(n,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=t.dot(Us),c=e.dot(Us),h=i.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $e=new C,Bo=new ot,Cg=0,xn=class extends li{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Na=class extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ua=class extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ye=class extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ig=new Wn,xa=new C,Lu=new C,us=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ig.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xa.subVectors(t,this.center);let e=xa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xa.copy(t.center).add(Lu)),this.expandByPoint(xa.copy(t.center).sub(Lu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pg=0,Hn=new ge,Du=new Xe,xr=new C,kn=new Wn,ya=new Wn,rn=new C,je=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eg(t)?Ua:Na)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,i){return Hn.makeTranslation(t,e,i),this.applyMatrix4(Hn),this}scale(t,e,i){return Hn.makeScale(t,e,i),this.applyMatrix4(Hn),this}lookAt(t){return Du.lookAt(t),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(kn.min,ya.min),kn.expandByPoint(rn),rn.addVectors(kn.max,ya.max),kn.expandByPoint(rn)):(kn.expandByPoint(ya.min),kn.expandByPoint(ya.max))}kn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rn.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(t,c),rn.add(xr)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new C,l[x]=new C;let c=new C,h=new C,f=new C,u=new ot,d=new ot,m=new ot,y=new C,g=new C;function p(x,E,P){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,P),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[x].add(y),o[E].add(y),o[P].add(y),l[x].add(g),l[E].add(g),l[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,E=M.length;x<E;++x){let P=M[x],L=P.start,k=P.count;for(let N=L,I=L+k;N<I;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let R=new C,S=new C,w=new C,b=new C;function A(x){w.fromBufferAttribute(s,x),b.copy(w);let E=o[x];R.copy(E),R.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(b,E);let L=S.dot(l[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,L)}for(let x=0,E=M.length;x<E;++x){let P=M[x],L=P.start,k=P.count;for(let N=L,I=L+k;N<I;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new xn(u,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gh,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new C,Nr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ee(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),i=Ee(i,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ku=new C,Lg=new C,Dg=new Kt,Sn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ku.subVectors(i,e).cross(Lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ku),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Dg.getNormalMatrix(t),s=this.coplanarPoint(ku).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},kg=0,Xn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Xr,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Sn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hs=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yr,va=new C,vr=new C,br=new C,Mr=new ot,ba=new ot,jf=new ge,zo=new C,Ma=new C,Vo=new C,Kd=new ot,Nu=new ot,Jd=new ot,Vs=class extends Xe{constructor(t=new hs){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fa(e,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Nr(i,3,0,!1)),yr.setAttribute("uv",new Nr(i,2,3,!1))}this.geometry=yr,this.material=t,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),jf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-br.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Go(zo.set(-.5,-.5,0),br,a,vr,s,r),Go(Ma.set(.5,-.5,0),br,a,vr,s,r),Go(Vo.set(.5,.5,0),br,a,vr,s,r),Kd.set(0,0),Nu.set(1,0),Jd.set(1,1);let o=t.ray.intersectTriangle(zo,Ma,Vo,!1,va);if(o===null&&(Go(Ma.set(-.5,.5,0),br,a,vr,s,r),Nu.set(0,1),o=t.ray.intersectTriangle(zo,Vo,Ma,!1,va),o===null))return;let l=t.ray.origin.distanceTo(va);l<t.near||l>t.far||e.push({distance:l,point:va.clone(),uv:Vi.getInterpolation(va,zo,Ma,Vo,Kd,Nu,Jd,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Go(n,t,e,i,s,r){Mr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ba.x=r*Mr.x-s*Mr.y,ba.y=s*Mr.x+r*Mr.y):ba.copy(Mr),n.copy(t),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(jf)}var zi=new C,Uu=new C,Ho=new C,Wo=new C,Gs=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Uu.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),Wo.copy(this.origin).sub(Uu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ho),o=Wo.dot(this.direction),l=-Wo.dot(Ho),c=Wo.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Uu).addScaledVector(Ho,u),d}intersectSphere(t,e){if(t.radius<0)return null;zi.subVectors(t.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,y=e.y-a.y,g=e.z-a.z,p=i.x-a.x,M=i.y-a.y,R=i.z-a.z,S=Math.abs(l),w=Math.abs(c),b=Math.abs(h),A,x,E,P,L,k,N,I,O,Y,W,j;if(S>=w&&S>=b?(E=l,k=f,O=m,j=p,l>=0?(A=c,x=h,P=u,L=d,N=y,I=g,Y=M,W=R):(A=h,x=c,P=d,L=u,N=g,I=y,Y=R,W=M)):w>=b?(E=c,k=u,O=y,j=M,c>=0?(A=h,x=l,P=d,L=f,N=g,I=m,Y=R,W=p):(A=l,x=h,P=f,L=d,N=m,I=g,Y=p,W=R)):(E=h,k=d,O=g,j=R,h>=0?(A=l,x=c,P=f,L=u,N=m,I=y,Y=p,W=M):(A=c,x=l,P=u,L=f,N=y,I=m,Y=M,W=p)),E===0)return null;let $=A/E,Q=x/E,B=1/E,rt=P-$*k,gt=L-Q*k,qt=N-$*O,zt=I-Q*O,oe=Y-$*j,Z=W-Q*j,nt=oe*zt-Z*qt,Mt=rt*Z-gt*oe,Gt=qt*gt-zt*rt;if(s){if(nt<0||Mt<0||Gt<0)return null}else if((nt<0||Mt<0||Gt<0)&&(nt>0||Mt>0||Gt>0))return null;let vt=nt+Mt+Gt;if(vt===0)return null;let Jt=B*(nt*k+Mt*O+Gt*j);return(vt>0?Jt<0:Jt>0)?null:this.at(Jt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jd=new ge,Fs=new Gs,Xo=new us,Qd=new C,Yo=new C,$o=new C,qo=new C,Fu=new C,Zo=new C,tf=new C,Ko=new C,Bt=class extends Xe{constructor(t=new je,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Fu.fromBufferAttribute(f,t),a?Zo.addScaledVector(Fu,h):Zo.addScaledVector(Fu.sub(e),h))}e.add(Zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Xo.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Xo,Qd)===null||Fs.origin.distanceToSquared(Qd)>(t.far-t.near)**2))&&(jd.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(jd),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),R=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,w=R;S<w;S+=3){let b=o.getX(S),A=o.getX(S+1),x=o.getX(S+2);s=Jo(this,p,t,i,c,h,f,b,A,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){let M=o.getX(g),R=o.getX(g+1),S=o.getX(g+2);s=Jo(this,a,t,i,c,h,f,M,R,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),R=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,w=R;S<w;S+=3){let b=S,A=S+1,x=S+2;s=Jo(this,p,t,i,c,h,f,b,A,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){let M=g,R=g+1,S=g+2;s=Jo(this,a,t,i,c,h,f,M,R,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Ng(n,t,e,i,s,r,a,o){let l;if(t.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===bs,o),l===null)return null;Ko.copy(o),Ko.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ko);return c<e.near||c>e.far?null:{distance:c,point:Ko.clone(),object:n}}function Jo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Yo),n.getVertexPosition(l,$o),n.getVertexPosition(c,qo);let h=Ng(n,t,e,i,Yo,$o,qo,tf);if(h){let f=new C;Vi.getBarycoord(tf,Yo,$o,qo,f),s&&(h.uv=Vi.getInterpolatedAttribute(s,o,l,c,f,new ot)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,l,c,f,new ot)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Vi.getNormal(Yo,$o,qo,u.normal),h.face=u,h.barycoord=f}return h}var Oa=class extends wn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=an,h=an,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ur=class extends xn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Sr=new ge,ef=new ge,jo=[],nf=new Wn,Ug=new ge,Sa=new Bt,wa=new us,Si=class extends Bt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ur(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Sr),nf.copy(t.boundingBox).applyMatrix4(Sr),this.boundingBox.union(nf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Sr),wa.copy(t.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(wa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(i),t.ray.intersectsSphere(wa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),ef.multiplyMatrices(i,Sr),Sa.matrixWorld=ef,Sa.raycast(t,jo);for(let a=0,o=jo.length;a<o;a++){let l=jo[a];l.instanceId=r,l.object=this,e.push(l)}jo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Oa(new Float32Array(s*this.count),s,this.count,Zl,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Os=new us,Fg=new ot(.5,.5),Qo=new C,Fr=class{constructor(t=new Sn,e=new Sn,i=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=oi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],y=r[9],g=r[10],p=r[11],M=r[12],R=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-m,w-M).normalize(),s[1].setComponents(c+a,d+h,p+m,w+M).normalize(),s[2].setComponents(c+o,d+f,p+y,w+R).normalize(),s[3].setComponents(c-o,d-f,p-y,w-R).normalize(),i)s[4].setComponents(l,u,g,S).normalize(),s[5].setComponents(c-l,d-u,p-g,w-S).normalize();else if(s[4].setComponents(c-l,d-u,p-g,w-S).normalize(),e===oi)s[5].setComponents(c+l,d+u,p+g,w+S).normalize();else if(e===Cr)s[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=Fg.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Qo.x=s.normal.x>0?t.max.x:t.min.x,Qo.y=s.normal.y>0?t.max.y:t.min.y,Qo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ba=class extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};var za=class extends wn{constructor(t=[],e=Ms,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ds=class extends wn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fs=class extends wn{constructor(t,e,i=di,s,r,a,o=an,l=an,c,h=Mi,f=1){if(h!==Mi&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_l=class extends fs{constructor(t,e=di,i=Ms,s,r,a=an,o=an,l,c=Mi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Va=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ue=class n extends je{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(f,2));function m(y,g,p,M,R,S,w,b,A,x,E){let P=S/A,L=w/x,k=S/2,N=w/2,I=b/2,O=A+1,Y=x+1,W=0,j=0,$=new C;for(let Q=0;Q<Y;Q++){let B=Q*L-N;for(let rt=0;rt<O;rt++){let gt=rt*P-k;$[y]=gt*M,$[g]=B*R,$[p]=I,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[p]=b>0?1:-1,h.push($.x,$.y,$.z),f.push(rt/A),f.push(1-Q/x),W+=1}}for(let Q=0;Q<x;Q++)for(let B=0;B<A;B++){let rt=u+B+O*Q,gt=u+B+O*(Q+1),qt=u+(B+1)+O*(Q+1),zt=u+(B+1)+O*Q;l.push(rt,gt,zt),l.push(gt,qt,zt),j+=6}o.addGroup(d,j,E),d+=j,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Hs=class n extends je{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wi=class n extends je{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,y=[],g=i/2,p=0;M(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function M(){let S=new C,w=new C,b=0,A=(e-t)/i;for(let x=0;x<=r;x++){let E=[],P=x/r,L=P*(e-t)+t;for(let k=0;k<=s;k++){let N=k/s,I=N*l+o,O=Math.sin(I),Y=Math.cos(I);w.x=L*O,w.y=-P*i+g,w.z=L*Y,f.push(w.x,w.y,w.z),S.set(O,A,Y).normalize(),u.push(S.x,S.y,S.z),d.push(N,1-P),E.push(m++)}y.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let P=y[E][x],L=y[E+1][x],k=y[E+1][x+1],N=y[E][x+1];(t>0||E!==0)&&(h.push(P,L,N),b+=3),(e>0||E!==r-1)&&(h.push(L,k,N),b+=3)}c.addGroup(p,b,0),p+=b}function R(S){let w=m,b=new ot,A=new C,x=0,E=S===!0?t:e,P=S===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*P,0),u.push(0,P,0),d.push(.5,.5),m++;let L=m;for(let k=0;k<=s;k++){let I=k/s*l+o,O=Math.cos(I),Y=Math.sin(I);A.x=E*Y,A.y=g*P,A.z=E*O,f.push(A.x,A.y,A.z),u.push(0,P,0),b.x=O*.5+.5,b.y=Y*.5*P+.5,d.push(b.x,b.y),m++}for(let k=0;k<s;k++){let N=w+k,I=L+k;S===!0?h.push(I,I+1,N):h.push(I+1,I,N),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new ge;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ee(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ee(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ga=class extends Yn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xl=class extends Ga{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var sf=new C,rf=new C,Ou=new vh,Bu=new vh,zu=new vh,Or=class extends Yn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(rf.subVectors(s[0],s[1]).add(s[0]),c=rf);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(sf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=sf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Ou.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,y,g),Bu.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,y,g),zu.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Ou.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Bu.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),zu.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Ou.calc(l),Bu.calc(l),zu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function af(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Og(n,t){let e=1-n;return e*e*t}function Bg(n,t){return 2*(1-n)*n*t}function zg(n,t){return n*n*t}function Ta(n,t,e,i){return Og(n,t)+Bg(n,e)+zg(n,i)}function Vg(n,t){let e=1-n;return e*e*e*t}function Gg(n,t){let e=1-n;return 3*e*e*n*t}function Hg(n,t){return 3*(1-n)*n*n*t}function Wg(n,t){return n*n*n*t}function Ra(n,t,e,i,s){return Vg(n,t)+Gg(n,e)+Hg(n,i)+Wg(n,s)}var yl=class extends Yn{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vl=class extends Yn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y),Ra(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bl=class extends Yn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ml=class extends Yn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sl=class extends Yn{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ta(t,s.x,r.x,a.x),Ta(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends Yn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ta(t,s.x,r.x,a.x),Ta(t,s.y,r.y,a.y),Ta(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(af(o,l.x,c.x,h.x,f.x),af(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Xg=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:Or,CubicBezierCurve:yl,CubicBezierCurve3:vl,EllipseCurve:Ga,LineCurve:bl,LineCurve3:Ml,QuadraticBezierCurve:Sl,QuadraticBezierCurve3:Ha,SplineCurve:wl});var Br=class n extends je{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ee(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new C,u=new ot,d=new C,m=new C,y=new C,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(m)}for(let M=0;M<=e;M++){let R=i+M*h*s,S=Math.sin(R),w=Math.cos(R);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*S,f.y=t[b].y,f.z=t[b].x*w,a.push(f.x,f.y,f.z),u.x=M/e,u.y=b/(t.length-1),o.push(u.x,u.y);let A=l[3*b+0]*S,x=l[3*b+1],E=l[3*b+0]*w;c.push(A,x,E)}}for(let M=0;M<e;M++)for(let R=0;R<t.length-1;R++){let S=R+M*t.length,w=S,b=S+t.length,A=S+t.length+1,x=S+1;r.push(w,b,x),r.push(A,x,b)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var wi=class n extends je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let M=p*u-a;for(let R=0;R<c;R++){let S=R*f-r;m.push(S,-M,0),y.push(0,0,1),g.push(R/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let R=M+c*p,S=M+c*(p+1),w=M+1+c*(p+1),b=M+1+c*p;d.push(R,S,b),d.push(S,w,b)}this.setIndex(d),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},zr=class n extends je{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new C,m=new ot;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let M=p+g,R=M,S=M+i+1,w=M+i+2,b=M+1;o.push(R,S,b),o.push(S,w,b)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ws=class n extends je{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new C,u=new C,d=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let M=[],R=p/i,S=a+R*o,w=t*Math.cos(S),b=Math.sqrt(t*t-w*w),A=0;p===0&&a===0?A=.5/e:p===i&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let E=x/e,P=s+E*r;f.x=-b*Math.cos(P),f.y=w,f.z=b*Math.sin(P),m.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),g.push(E+A,1-R),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let R=h[p][M+1],S=h[p][M],w=h[p+1][M],b=h[p+1][M+1];(p!==0||a>0)&&d.push(R,S,b),(p!==i-1||l<Math.PI)&&d.push(S,w,b)}this.setIndex(d),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ps=class n extends je{constructor(t=new Ha(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new ot,h=new C,f=[],u=[],d=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function y(){for(let R=0;R<e;R++)g(R);g(r===!1?e:0),M(),p()}function g(R){h=t.getPointAt(R/e,h);let S=a.normals[R],w=a.binormals[R];for(let b=0;b<=s;b++){let A=b/s*Math.PI*2,x=Math.sin(A),E=-Math.cos(A);l.x=E*S.x+x*w.x,l.y=E*S.y+x*w.y,l.z=E*S.z+x*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=e;R++)for(let S=1;S<=s;S++){let w=(s+1)*(R-1)+(S-1),b=(s+1)*R+(S-1),A=(s+1)*R+S,x=(s+1)*(R-1)+S;m.push(w,b,x),m.push(b,A,x)}}function M(){for(let R=0;R<=e;R++)for(let S=0;S<=s;S++)c.x=R/e,c.y=S/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Xg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Wa=class extends Xn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Wt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function qs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(of(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(of(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function vn(n){let t={};for(let e=0;e<n.length;e++){let i=qs(n[e]);for(let s in i)t[s]=i[s]}return t}function of(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Qf={clone:qs,merge:vn},$g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=Yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},El=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},we=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xa=class extends Xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Gl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Al=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tl=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Vu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rl=class extends ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wu,endingEnd:Wu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xu:r=t,o=2*e-i;break;case Yu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xu:a=t,l=2*i-e;break;case Yu:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,M=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,R=(-1-d)*g+(1.5+d)*y+.5*m,S=d*g-d*y;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+M*a[c+w]+R*a[l+w]+S*a[f+w];return r}},Cl=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Il=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pl=class extends ms{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-e)/(s-e),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],p=d*u+m*2,M=f[p],R=f[p+1],S=t*u+m*2,w=h[S],b=h[S+1],A=Kg(i,e,M,w,s);r[m]=tp(A,y,R,b,g)}return r}};function tp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Zg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Kg(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=tp(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Zg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Vu(t.settings)&&(i.settings={inTangents:wr(t.settings.inTangents,Array),outTangents:wr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ca:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break;case Hu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return nl;case this.InterpolantFactoryMethodBezier:return Hu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Vu(this.settings)&&(lf(this.settings.inTangents,t),lf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ng(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let y=e[f+m];if(y!==e[u+m]||y!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=fl;var gs=class extends Un{constructor(t,e,i){super(t,e,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ca;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}};Ll.prototype.ValueTypeName="color";var Dl=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}};Dl.prototype.ValueTypeName="number";var kl=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ya=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends Un{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ca;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Un{constructor(t,e,i,s){super(t,e,i,s)}};Nl.prototype.ValueTypeName="vector";var Ul=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new Ul,Fl=class{constructor(t){this.manager=t!==void 0?t:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$a=class extends Vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gu=new ge,cf=new C,uf=new C,qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(cf),uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Gu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Gu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Cr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},tl=new C,el=new An,vi=new C,Za=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tl,el,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,el,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(tl,el,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,el,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new C,hf=new ot,df=new ot,cn=class extends Za{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,hf,df),e.subVectors(df,hf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $u=class extends qa{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},xs=class extends Vr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $u}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gr=class extends Za{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qu=class extends qa{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new qu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Er=-90,Ar=1,Ol=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Er,Ar,t,e);s.layers=this.layers,this.add(s);let r=new cn(Er,Ar,t,e);r.layers=this.layers,this.add(r);let a=new cn(Er,Ar,t,e);a.layers=this.layers,this.add(a);let o=new cn(Er,Ar,t,e);o.layers=this.layers,this.add(o);let l=new cn(Er,Ar,t,e);l.layers=this.layers,this.add(l);let c=new cn(Er,Ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Bl=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Mh="\\[\\]\\.:\\/",Jg=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",jg="[^"+Mh.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",Sh),t0=/(WCOD+)?/.source.replace("WCOD",jg),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),i0=new RegExp("^"+Qg+t0+e0+n0+"$"),s0=["material","materials","bones","map"],Zu=class{constructor(t,e,i){let s=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jg,"")}static parseTrackName(t){let e=i0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);s0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Zu;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vM=new Float32Array(1);var ff=new ge,Xs=class{constructor(t,e,i=0,s=1/0){this.ray=new Gs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ff.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ff),this}intersectObject(t,e=!0,i=[]){return Ku(t,this,i,e),i.sort(pf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ku(t[s],this,i,e);return i.sort(pf),i}};function pf(n,t){return n.distance-t.distance}function Ku(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Ku(r[a],t,e,!0)}}var Hr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ch=class Ch{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ch.prototype.isMatrix2=!0;var Ju=Ch;var Ja=class extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function wh(n,t,e,i){let s=r0(i);switch(e){case ph:return n*t;case Zl:return n*t/s.components*s.byteLength;case Kl:return n*t/s.components*s.byteLength;case Es:return n*t*2/s.components*s.byteLength;case Jl:return n*t*2/s.components*s.byteLength;case mh:return n*t*3/s.components*s.byteLength;case qn:return n*t*4/s.components*s.byteLength;case jl:return n*t*4/s.components*s.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(n,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(n,8)*Math.max(t,8)/2;case ic:case sc:case ac:case oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rc:case ao:case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Sc:case wc:case Ec:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ac:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oo:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r0(n){switch(n){case Rn:case uh:return{byteLength:1,components:1};case Yr:case hh:case fi:return{byteLength:2,components:1};case $l:case ql:return{byteLength:2,components:4};case di:case Yl:case $n:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function d0(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let y=f[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
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
}`,e_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,r_=`#ifdef USE_ENVMAP
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
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u_=`PhysicalMaterial material;
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
#endif`,h_=`uniform sampler2D dfgLUT;
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
}`,d_=`
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
#endif`,f_=`#if defined( RE_IndirectDiffuse )
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,g_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S_=`#if defined( USE_POINTS_UV )
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
#endif`,w_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
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
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j_=`float getShadowMask() {
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
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#define LAMBERT
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
}`,Px=`#define MATCAP
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,kx=`#define NORMAL
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
}`,Nx=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Fx=`#define STANDARD
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
}`,Ox=`#define STANDARD
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
}`,Bx=`#define TOON
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
}`,zx=`#define TOON
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
}`,Vx=`uniform float size;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Wx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:x0,aomap_fragment:y0,aomap_pars_fragment:v0,batching_pars_vertex:b0,batching_vertex:M0,begin_vertex:S0,beginnormal_vertex:w0,bsdfs:E0,iridescence_fragment:A0,bumpmap_pars_fragment:T0,clipping_planes_fragment:R0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:P0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:k0,color_vertex:N0,common:U0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:V0,emissivemap_pars_fragment:G0,colorspace_fragment:H0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:$0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:r_,envmap_vertex:Z0,fog_vertex:K0,fog_pars_vertex:J0,fog_fragment:j0,fog_pars_fragment:Q0,gradientmap_pars_fragment:t_,lightmap_pars_fragment:e_,lights_lambert_fragment:n_,lights_lambert_pars_fragment:i_,lights_pars_begin:s_,lights_toon_fragment:a_,lights_toon_pars_fragment:o_,lights_phong_fragment:l_,lights_phong_pars_fragment:c_,lights_physical_fragment:u_,lights_physical_pars_fragment:h_,lights_fragment_begin:d_,lights_fragment_maps:f_,lights_fragment_end:p_,lightprobes_pars_fragment:m_,logdepthbuf_fragment:g_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:y_,map_fragment:v_,map_pars_fragment:b_,map_particle_fragment:M_,map_particle_pars_fragment:S_,metalnessmap_fragment:w_,metalnessmap_pars_fragment:E_,morphinstance_vertex:A_,morphcolor_vertex:T_,morphnormal_vertex:R_,morphtarget_pars_vertex:C_,morphtarget_vertex:I_,normal_fragment_begin:P_,normal_fragment_maps:L_,normal_pars_fragment:D_,normal_pars_vertex:k_,normal_vertex:N_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:O_,clearcoat_pars_fragment:B_,iridescence_pars_fragment:z_,opaque_fragment:V_,packing:G_,premultiplied_alpha_fragment:H_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:Y_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:q_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:K_,shadowmap_vertex:J_,shadowmask_pars_fragment:j_,skinbase_vertex:Q_,skinning_pars_vertex:tx,skinning_vertex:ex,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ax,transmission_fragment:ox,transmission_pars_fragment:lx,uv_pars_fragment:cx,uv_pars_vertex:ux,uv_vertex:hx,worldpos_vertex:dx,background_vert:fx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:_x,cube_frag:xx,depth_vert:yx,depth_frag:vx,distance_vert:bx,distance_frag:Mx,equirect_vert:Sx,equirect_frag:wx,linedashed_vert:Ex,linedashed_frag:Ax,meshbasic_vert:Tx,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Ix,meshmatcap_vert:Px,meshmatcap_frag:Lx,meshnormal_vert:Dx,meshnormal_frag:kx,meshphong_vert:Nx,meshphong_frag:Ux,meshphysical_vert:Fx,meshphysical_frag:Ox,meshtoon_vert:Bx,meshtoon_frag:zx,points_vert:Vx,points_frag:Gx,shadow_vert:Hx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:Yx},bt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Ri={basic:{uniforms:vn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:vn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:vn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:vn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:vn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:vn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:vn([bt.points,bt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:vn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:vn([bt.common,bt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:vn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:vn([bt.sprite,bt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:vn([bt.common,bt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:vn([bt.lights,bt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Ri.physical={uniforms:vn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Pc={r:0,b:0,g:0},$x=new ge,wp=new Kt;wp.set(-1,0,0,0,1,0,0,0,1);function qx(n,t,e,i,s,r){let a=new Wt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let S=M.backgroundBlurriness>0;R=t.get(R,S)}return R}function m(M){let R=!1,S=d(M);S===null?g(a,o):S&&S.isColor&&(g(S,1),R=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,R){let S=d(R);S&&(S.isCubeTexture||S.mapping===to)?(c===void 0&&(c=new Bt(new Ue(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:qs(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wp),c.material.toneMapped=ue.getTransfer(S.colorSpace)!==Se,(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Bt(new wi(2,2),new Nn({name:"BackgroundMaterial",uniforms:qs(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ue.getTransfer(S.colorSpace)!==Se,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,R){M.getRGB(Pc,bh(n)),e.buffers.color.setClear(Pc.r,Pc.g,Pc.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,R=1){a.set(M),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:y,dispose:p}}function Zx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,k,N,I,O){let Y=!1,W=f(L,I,N,k);r!==W&&(r=W,c(r.object)),Y=d(L,I,N,O),Y&&m(L,I,N,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(L,k,N,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,k,N,I){let O=I.wireframe===!0,Y=i[k.id];Y===void 0&&(Y={},i[k.id]=Y);let W=L.isInstancedMesh===!0?L.id:0,j=Y[W];j===void 0&&(j={},Y[W]=j);let $=j[N.id];$===void 0&&($={},j[N.id]=$);let Q=$[O];return Q===void 0&&(Q=u(l()),$[O]=Q),Q}function u(L){let k=[],N=[],I=[];for(let O=0;O<e;O++)k[O]=0,N[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:N,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,k,N,I){let O=r.attributes,Y=k.attributes,W=0,j=N.getAttributes();for(let $ in j)if(j[$].location>=0){let B=O[$],rt=Y[$];if(rt===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),B===void 0||B.attribute!==rt||rt&&B.data!==rt.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function m(L,k,N,I){let O={},Y=k.attributes,W=0,j=N.getAttributes();for(let $ in j)if(j[$].location>=0){let B=Y[$];B===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(B=L.instanceColor));let rt={};rt.attribute=B,B&&B.data&&(rt.data=B.data),O[$]=rt,W++}r.attributes=O,r.attributesNum=W,r.index=I}function y(){let L=r.newAttributes;for(let k=0,N=L.length;k<N;k++)L[k]=0}function g(L){p(L,0)}function p(L,k){let N=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;N[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),O[L]!==k&&(n.vertexAttribDivisor(L,k),O[L]=k)}function M(){let L=r.newAttributes,k=r.enabledAttributes;for(let N=0,I=k.length;N<I;N++)k[N]!==L[N]&&(n.disableVertexAttribArray(N),k[N]=0)}function R(L,k,N,I,O,Y,W){W===!0?n.vertexAttribIPointer(L,k,N,O,Y):n.vertexAttribPointer(L,k,N,I,O,Y)}function S(L,k,N,I){y();let O=I.attributes,Y=N.getAttributes(),W=k.defaultAttributeValues;for(let j in Y){let $=Y[j];if($.location>=0){let Q=O[j];if(Q===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let B=Q.normalized,rt=Q.itemSize,gt=t.get(Q);if(gt===void 0)continue;let qt=gt.buffer,zt=gt.type,oe=gt.bytesPerElement,Z=zt===n.INT||zt===n.UNSIGNED_INT||Q.gpuType===Yl;if(Q.isInterleavedBufferAttribute){let nt=Q.data,Mt=nt.stride,Gt=Q.offset;if(nt.isInstancedInterleavedBuffer){for(let vt=0;vt<$.locationSize;vt++)p($.location+vt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let vt=0;vt<$.locationSize;vt++)g($.location+vt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let vt=0;vt<$.locationSize;vt++)R($.location+vt,rt/$.locationSize,zt,B,Mt*oe,(Gt+rt/$.locationSize*vt)*oe,Z)}else{if(Q.isInstancedBufferAttribute){for(let nt=0;nt<$.locationSize;nt++)p($.location+nt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let nt=0;nt<$.locationSize;nt++)g($.location+nt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let nt=0;nt<$.locationSize;nt++)R($.location+nt,rt/$.locationSize,zt,B,rt*oe,rt/$.locationSize*nt*oe,Z)}}else if(W!==void 0){let B=W[j];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv($.location,B);break;case 3:n.vertexAttrib3fv($.location,B);break;case 4:n.vertexAttrib4fv($.location,B);break;default:n.vertexAttrib1fv($.location,B)}}}}M()}function w(){E();for(let L in i){let k=i[L];for(let N in k){let I=k[N];for(let O in I){let Y=I[O];for(let W in Y)h(Y[W].object),delete Y[W];delete I[O]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;let k=i[L.id];for(let N in k){let I=k[N];for(let O in I){let Y=I[O];for(let W in Y)h(Y[W].object),delete Y[W];delete I[O]}}delete i[L.id]}function A(L){for(let k in i){let N=i[k];for(let I in N){let O=N[I];if(O[L.id]===void 0)continue;let Y=O[L.id];for(let W in Y)h(Y[W].object),delete Y[W];delete O[L.id]}}}function x(L){for(let k in i){let N=i[k],I=L.isInstancedMesh===!0?L.id:0,O=N[I];if(O!==void 0){for(let Y in O){let W=O[Y];for(let j in W)h(W[j].object),delete W[j];delete O[Y]}delete N[I],Object.keys(N).length===0&&delete i[k]}}}function E(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function Kx(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==qn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Rn&&A!==$n&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:S,maxSamples:w,samples:b}}function jx(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Sn,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:i,R=M*4,S=p.clippingState||null;l.value=S,S=h(m,u,R,d);for(let w=0;w!==R;++w)S[w]=e[w];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,m){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=d+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,S=d;R!==y;++R,S+=4)a.copy(f[R]).applyMatrix4(M,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Zr=4,Qx=6,ty=20,ey=256,co=new Gr,np=new Wt,Ih=null,Ph=0,Lh=0,Dh=!1,ny=new C,Zs=new C,Jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=ny}=r;Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ih,Ph,Lh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:fi,format:qn,colorSpace:Ia,depthBuffer:!1},s=ip(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ip(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=iy(r)),this._blurMaterial=ry(r,t,e),this._ggxMaterial=sy(r,t,e)}return s}_compileMaterial(t){let e=new Bt(new je,t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,i,s,r){let l=new cn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(np),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Ue,new yn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(np),p=!0);for(let R=0;R<6;R++){let S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let w=this._cubeSize;qr(s,S*w,R>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ms||t.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,co)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-Zr?i-m+Zr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,qr(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(o,co),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,qr(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(o,co)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Zr?s-this._lodMax+Zr:0),u=4*(this._cubeSize-h);qr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,co)}};function iy(n){let t=[],e=[],i=n,s=n-Zr+1+Qx;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,R=p>2?0:-1,S=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];m.set(S,d*u*p);for(let w=0;w<u;w++){let b=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?Zs.set(1,A,b):p===1?Zs.set(-b,1,-A):p===2?Zs.set(-b,A,1):p===3?Zs.set(-1,A,-b):p===4?Zs.set(-b,-1,A):Zs.set(b,A,-1),Zs.toArray(y,(p*u+w)*d)}}let g=new je;g.setAttribute("position",new xn(m,d)),g.setAttribute("outputDirection",new xn(y,d)),e.push(new Bt(g,null)),i>Zr&&i--}return{lodMeshes:e,sizeLods:t}}function ip(n,t,e){let i=new Tn(n,t,e);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function sy(n,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ry(n,t,e){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:ty,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function sp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function rp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dc=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ei});r.uniforms.tEquirect.value=e;let a=new Bt(s,r),o=e.minFilter;return e.minFilter===Ss&&(e.minFilter=un),new Ol(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function ay(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Hl||d===Wl)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new Dc(m.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,m=d===Hl||d===Wl,y=d===Ms||d===$s;if(m||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Jr(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return m&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new Jr(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Hl?u.mapping=Ms:d===Wl&&(u.mapping=$s),u}function l(u){let d=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function oy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Bs("WebGLRenderer: "+i+" extension not supported."),s}}}function ly(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,y=0;if(m===void 0)return;if(d!==null){let M=d.array;y=d.version;for(let R=0,S=M.length;R<S;R+=3){let w=M[R+0],b=M[R+1],A=M[R+2];u.push(w,b,b,A,A,w)}}else{let M=m.array;y=m.version;for(let R=0,S=M.length/3-1;R<S;R+=3){let w=R+0,b=R+1,A=R+2;u.push(w,b,b,A,A,w)}}let g=new(m.count>=65535?Ua:Na)(u,1);g.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function cy(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let g=0;g<d;g++)y+=u[g];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hy(n,t,e){let i=new WeakMap,s=new Be;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],R=0;d===!0&&(R=1),m===!0&&(R=2),y===!0&&(R=3);let S=o.attributes.position.count*R,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let b=new Float32Array(S*w*4*f),A=new ka(b,S,w,f);A.type=$n,A.needsUpdate=!0;let x=R*4;for(let P=0;P<f;P++){let L=g[P],k=p[P],N=M[P],I=S*w*4*P;for(let O=0;O<L.count;O++){let Y=O*x;d===!0&&(s.fromBufferAttribute(L,O),b[I+Y+0]=s.x,b[I+Y+1]=s.y,b[I+Y+2]=s.z,b[I+Y+3]=0),m===!0&&(s.fromBufferAttribute(k,O),b[I+Y+4]=s.x,b[I+Y+5]=s.y,b[I+Y+6]=s.z,b[I+Y+7]=0),y===!0&&(s.fromBufferAttribute(N,O),b[I+Y+8]=s.x,b[I+Y+9]=s.y,b[I+Y+10]=s.z,b[I+Y+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new ot(S,w)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function dy(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var fy={[ih]:"LINEAR_TONE_MAPPING",[sh]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[lh]:"AGX_TONE_MAPPING",[Qa]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function py(n,t,e,i,s,r){let a=new Tn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new je;c.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ye([0,2,0,0,2,0],2));let h=new El({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(c,h),u=new Gr(-1,1,1,-1,0,1),d=null,m=null,y=!1,g,p=null,M=[],R=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let b=0;b<M.length;b++){let A=M[b];A.setSize&&A.setSize(S,w)}},this.setEffects=function(S){M=S,R=M.length>0&&M[0].isRenderPass===!0;let w=a.width,b=a.height;M.length>0&&o===null&&(o=new Tn(w,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(w,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(w,b)}},this.begin=function(S,w){if(y||S.toneMapping===hi&&M.length===0)return!1;if(p=w,w!==null){let b=w.width,A=w.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return R===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=hi,!0},this.hasRenderPass=function(){return R},this.end=function(S,w){S.toneMapping=g,y=!0;let b=a,A=o;for(let x=0;x<M.length;x++){let E=M[x];E.enabled!==!1&&(E.render(S,A,b,w),E.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(d!==S.outputColorSpace||m!==S.toneMapping){d=S.outputColorSpace,m=S.toneMapping,h.defines={},ue.getTransfer(d)===Se&&(h.defines.SRGB_TRANSFER="");let x=fy[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(f,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ep=new wn,Uh=new fs(1,1),Ap=new ka,Tp=new gl,Rp=new za,ap=[],op=[],lp=new Float32Array(16),cp=new Float32Array(9),up=new Float32Array(4);function jr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ap[s];if(r===void 0&&(r=new Float32Array(s),ap[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Uc(n,t){let e=op[t];e===void 0&&(e=new Int32Array(t),op[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function my(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function gy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function _y(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function xy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function yy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;up.set(i),n.uniformMatrix2fv(this.addr,!1,up),tn(e,i)}}function vy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;cp.set(i),n.uniformMatrix3fv(this.addr,!1,cp),tn(e,i)}}function by(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;lp.set(i),n.uniformMatrix4fv(this.addr,!1,lp),tn(e,i)}}function My(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function Ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function Ay(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function Ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function Cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function Iy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Uh.compareFunction=e.isReversedDepthBuffer()?Ic:Cc,r=Uh):r=Ep,e.setTexture2D(t||r,s)}function Py(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Tp,s)}function Ly(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Rp,s)}function Dy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ap,s)}function ky(n){switch(n){case 5126:return my;case 35664:return gy;case 35665:return _y;case 35666:return xy;case 35674:return yy;case 35675:return vy;case 35676:return by;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return wy;case 35669:case 35673:return Ey;case 5125:return Ay;case 36294:return Ty;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}function Ny(n,t){n.uniform1fv(this.addr,t)}function Uy(n,t){let e=jr(t,this.size,2);n.uniform2fv(this.addr,e)}function Fy(n,t){let e=jr(t,this.size,3);n.uniform3fv(this.addr,e)}function Oy(n,t){let e=jr(t,this.size,4);n.uniform4fv(this.addr,e)}function By(n,t){let e=jr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zy(n,t){let e=jr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vy(n,t){let e=jr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Gy(n,t){n.uniform1iv(this.addr,t)}function Hy(n,t){n.uniform2iv(this.addr,t)}function Wy(n,t){n.uniform3iv(this.addr,t)}function Xy(n,t){n.uniform4iv(this.addr,t)}function Yy(n,t){n.uniform1uiv(this.addr,t)}function $y(n,t){n.uniform2uiv(this.addr,t)}function qy(n,t){n.uniform3uiv(this.addr,t)}function Zy(n,t){n.uniform4uiv(this.addr,t)}function Ky(n,t,e){let i=this.cache,s=t.length,r=Uc(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Uh:a=Ep;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Jy(n,t,e){let i=this.cache,s=t.length,r=Uc(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tp,r[a])}function jy(n,t,e){let i=this.cache,s=t.length,r=Uc(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Rp,r[a])}function Qy(n,t,e){let i=this.cache,s=t.length,r=Uc(e,s);Qe(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ap,r[a])}function tv(n){switch(n){case 5126:return Ny;case 35664:return Uy;case 35665:return Fy;case 35666:return Oy;case 35674:return By;case 35675:return zy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return Yy;case 36294:return $y;case 36295:return qy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Qy}}var Fh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ky(e.type)}},Oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tv(e.type)}},Bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},kh=/(\w+)(\])?(\[|\.)?/g;function hp(n,t){n.seq.push(t),n.map[t.id]=t}function ev(n,t,e){let i=n.name,s=i.length;for(kh.lastIndex=0;;){let r=kh.exec(i),a=kh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hp(e,c===void 0?new Fh(o,n,t):new Oh(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Bh(o),hp(e,f)),e=f}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ev(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function dp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var nv=37297,iv=0;function sv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var fp=new Kt;function rv(n){ue._getMatrix(fp,ue.workingColorSpace,n);let t=`mat3( ${fp.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case Pa:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+sv(n.getShaderSource(t),o)}else return r}function av(n,t){let e=rv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ov={[ih]:"Linear",[sh]:"Reinhard",[rh]:"Cineon",[ah]:"ACESFilmic",[lh]:"AgX",[Qa]:"Neutral",[oh]:"Custom"};function lv(n,t){let e=ov[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lc=new C;function cv(){ue.getLuminanceCoefficients(Lc);let n=Lc.x.toFixed(4),t=Lc.y.toFixed(4),e=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function hv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ho(n){return n!==""}function mp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(n){return n.replace(fv,mv)}var pv=new Map;function mv(n,t){let e=re[t];if(e===void 0){let i=pv.get(t);if(i!==void 0)e=re[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zh(e)}var gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(n){return n.replace(gv,_v)}function _v(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var xv={[ja]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function yv(n){return xv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vv={[Ms]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function bv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Mv={[$s]:"ENVMAP_MODE_REFRACTION"};function Sv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Mv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wv={[Gl]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function Ev(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wv[n.combine]||"ENVMAP_BLENDING_NONE"}function Av(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Tv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=yv(e),c=bv(e),h=Sv(e),f=Ev(e),u=Av(e),d=uv(e),m=hv(r),y=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(g=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?re.tonemapping_pars_fragment:"",e.toneMapping!==hi?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,av("linearToOutputTexel",e.outputColorSpace),cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),a=zh(a),a=mp(a,e),a=gp(a,e),o=zh(o),o=mp(o,e),o=gp(o,e),a=_p(a),o=_p(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=M+g+a,S=M+p+o,w=dp(s,s.VERTEX_SHADER,R),b=dp(s,s.FRAGMENT_SHADER,S);s.attachShader(y,w),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(L){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(b)||"",O=k.trim(),Y=N.trim(),W=I.trim(),j=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,b);else{let Q=pp(s,w,"vertex"),B=pp(s,b,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+Q+`
`+B)}else O!==""?Ht("WebGLProgram: Program Info Log:",O):(Y===""||W==="")&&($=!1);$&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:Y,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(b),x=new Kr(s,y),E=dv(s,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,nv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}var Rv=0,Vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gh(t),e.set(t,i)),i}},Gh=class{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}};function Cv(n){return n===Es||n===ao||n===oo}function Iv(n,t,e,i,s,r){let a=new Dr,o=new Vh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,E,P,L,k,N){let I=L.fog,O=k.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||Y,W),$=j&&j.mapping===to?j.image.height:null,Q=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let B=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=B!==void 0?B.length:0,gt=0;O.morphAttributes.position!==void 0&&(gt=1),O.morphAttributes.normal!==void 0&&(gt=2),O.morphAttributes.color!==void 0&&(gt=3);let qt,zt,oe,Z;if(Q){let X=Ri[Q];qt=X.vertexShader,zt=X.fragmentShader}else{qt=x.vertexShader,zt=x.fragmentShader;let X=o.getVertexShaderStage(x),it=o.getFragmentShaderStage(x);o.update(x,X,it),oe=X.id,Z=it.id}let nt=n.getRenderTarget(),Mt=n.state.buffers.depth.getReversed(),Gt=k.isInstancedMesh===!0,vt=k.isBatchedMesh===!0,Jt=!!x.map,De=!!x.matcap,ne=!!j,ae=!!x.aoMap,xe=!!x.lightMap,Qt=!!x.bumpMap&&x.wireframe===!1,be=!!x.normalMap,Oe=!!x.displacementMap,Ge=!!x.emissiveMap,ce=!!x.metalnessMap,Xt=!!x.roughnessMap,U=x.anisotropy>0,Ce=x.clearcoat>0,ie=x.dispersion>0,T=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,H=x.transmission>0,K=U&&!!x.anisotropyMap,at=Ce&&!!x.clearcoatMap,ut=Ce&&!!x.clearcoatNormalMap,J=Ce&&!!x.clearcoatRoughnessMap,et=_&&!!x.iridescenceMap,ht=_&&!!x.iridescenceThicknessMap,Pt=z&&!!x.sheenColorMap,_t=z&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Dt=!!x.specularColorMap,Ut=!!x.specularIntensityMap,$t=H&&!!x.transmissionMap,F=H&&!!x.thicknessMap,ft=!!x.gradientMap,tt=!!x.alphaMap,lt=x.alphaTest>0,xt=!!x.alphaHash,st=!!x.extensions,kt=hi;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(kt=n.toneMapping);let Tt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:zt,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:vt,batchingColor:vt&&k._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&k.instanceColor!==null,instancingMorph:Gt&&k.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Jt,matcap:De,envMap:ne,envMapMode:ne&&j.mapping,envMapCubeUVHeight:$,aoMap:ae,lightMap:xe,bumpMap:Qt,normalMap:be,displacementMap:Oe,emissiveMap:Ge,normalMapObjectSpace:be&&x.normalMapType===Bf,normalMapTangentSpace:be&&x.normalMapType===lo,packedNormalMap:be&&x.normalMapType===lo&&Cv(x.normalMap.format),metalnessMap:ce,roughnessMap:Xt,anisotropy:U,anisotropyMap:K,clearcoat:Ce,clearcoatMap:at,clearcoatNormalMap:ut,clearcoatRoughnessMap:J,dispersion:ie,retroreflection:T,iridescence:_,iridescenceMap:et,iridescenceThicknessMap:ht,sheen:z,sheenColorMap:Pt,sheenRoughnessMap:_t,specularMap:dt,specularColorMap:Dt,specularIntensityMap:Ut,transmission:H,transmissionMap:$t,thicknessMap:F,gradientMap:ft,opaque:x.transparent===!1&&x.blending===Xr&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:lt,alphaHash:xt,combine:x.combine,mapUv:Jt&&m(x.map.channel),aoMapUv:ae&&m(x.aoMap.channel),lightMapUv:xe&&m(x.lightMap.channel),bumpMapUv:Qt&&m(x.bumpMap.channel),normalMapUv:be&&m(x.normalMap.channel),displacementMapUv:Oe&&m(x.displacementMap.channel),emissiveMapUv:Ge&&m(x.emissiveMap.channel),metalnessMapUv:ce&&m(x.metalnessMap.channel),roughnessMapUv:Xt&&m(x.roughnessMap.channel),anisotropyMapUv:K&&m(x.anisotropyMap.channel),clearcoatMapUv:at&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(x.sheenRoughnessMap.channel),specularMapUv:dt&&m(x.specularMap.channel),specularColorMapUv:Dt&&m(x.specularColorMap.channel),specularIntensityMapUv:Ut&&m(x.specularIntensityMap.channel),transmissionMapUv:$t&&m(x.transmissionMap.channel),thicknessMapUv:F&&m(x.thicknessMap.channel),alphaMapUv:tt&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(be||U),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(Jt||tt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:gt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Jt&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===Se,decodeVideoTextureEmissive:Ge&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===Se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ui,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(E,x),M(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let E=d[x.type],P;if(E){let L=Ri[E];P=Qf.clone(L.uniforms)}else P=x.uniforms;return P}function S(x,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new Tv(n,E,x,s),c.push(P),h.set(E,P)),P}function w(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:A}}function Pv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Lv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function yp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,y,g,p){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},n[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=g,M.group=p),t++,M}function l(u,d,m,y,g,p,M){M.reversedDepth===!0&&(g=-g);let R=o(u,d,m,y,g,p);m.transmission>0?i.push(R):m.transparent===!0?s.push(R):e.push(R)}function c(u,d,m,y,g,p){let M=o(u,d,m,y,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||Lv),i.length>1&&i.sort(d||yp),s.length>1&&s.sort(d||yp)}function f(){for(let u=t,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Dv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new vp,n.set(i,[a])):s>=r.length?(a=new vp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function kv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Wt};break;case"SpotLight":e={position:new C,direction:new C,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Nv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Uv=0;function Fv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ov(n){let t=new kv,e=Nv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new ge,a=new ge;function o(c){let h=0,f=0,u=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let d=0,m=0,y=0,g=0,p=0,M=0,R=0,S=0,w=0,b=0,A=0,x=0,E=0,P=0;c.sort(Fv);for(let k=0,N=c.length;k<N;k++){let I=c[k],O=I.color,Y=I.intensity,W=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Es?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*Y,f+=O.g*Y,u+=O.b*Y;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],Y);P++}else if(I.isSunLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=B,i.sunShadowMap[m]=j;let rt=Q.getViewportCount();for(let gt=0;gt<rt;gt++)i.sunShadowMatrix[y+gt]=Q.getMatrix(gt),i.sunShadowCascade[y+gt]=Q._cascadeData[gt];y+=rt,m++}i.sun[d]=$,d++}else if(I.isDirectionalLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=I.shadow.matrix,w++}i.directional[g]=$,g++}else if(I.isSpotLight){let $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(O).multiplyScalar(Y),$.distance=W,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[M]=$;let Q=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[M]=Q.matrix,I.castShadow){let B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=j,A++}M++}else if(I.isRectAreaLight){let $=t.get(I);$.color.copy(O).multiplyScalar(Y),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[R]=$,R++}else if(I.isPointLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let Q=I.shadow,B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=$,p++}else if(I.isHemisphereLight){let $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(Y),$.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[S]=$,S++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==R||L.hemiLength!==S||L.numSunShadows!==m||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=g,i.spot.length=M,i.rectArea.length=R,i.point.length=p,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.sunLength=d,L.directionalLength=g,L.pointLength=p,L.spotLength=M,L.rectAreaLength=R,L.hemiLength=S,L.numSunShadows=m,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=P,i.version=Uv++)}function l(c,h){let f=0,u=0,d=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let S=c[M];if(S.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),f++}else if(S.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(S.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function bp(n){let t=new Ov(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Bv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bp(n),t.set(s,[o])):r>=a.length?(o=new bp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vv=`uniform sampler2D shadow_pass;
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
}`,Gv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Hv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Mp=new ge,uo=new C,Nh=new C;function Wv(n,t,e){let i=new Fr,s=new ot,r=new ot,a=new Be,o=new Al,l=new Tl,c={},h=e.maxTextureSize,f={[bs]:hn,[hn]:bs,[ui]:ui},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:zv,fragmentShader:Vv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new je;m.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let p=this.type;this.render=function(b,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Vl&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ja);let E=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ei),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let N=p!==this.type;N&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=b.length;I<O;I++){let Y=b[I],W=Y.shadow;if(W===void 0){Ht("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let j=W.getFrameExtents();s.multiply(j),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,W.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=$,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Wr){if(Y.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Tn(s.x,s.y,{format:Es,type:fi,minFilter:un,magFilter:un,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new fs(s.x,s.y,$n),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=Mi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an}else Y.isPointLight?(W.map=new Dc(s.x),W.map.depthTexture=new _l(s.x,di)):(W.map=new Tn(s.x,s.y),W.map.depthTexture=new fs(s.x,s.y,di)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=Mi,this.type===ja?(W.map.depthTexture.compareFunction=$?Ic:Cc,W.map.depthTexture.minFilter=un,W.map.depthTexture.magFilter=un):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,x);for(let B=0;B<Q;B++){let rt=W.getCamera(B);if(Y.isPointLight){let gt=W.camera,qt=W.matrix,zt=Y.distance||gt.far;zt!==gt.far&&(gt.far=zt,gt.updateProjectionMatrix()),uo.setFromMatrixPosition(Y.matrixWorld),gt.position.copy(uo),Nh.copy(gt.position),Nh.add(Gv[B]),gt.up.copy(Hv[B]),gt.lookAt(Nh),gt.updateMatrixWorld(),qt.makeTranslation(-uo.x,-uo.y,-uo.z),Mp.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Mp,gt.coordinateSystem,gt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,B),n.clear();else{B===0&&(n.setRenderTarget(W.map),n.clear());let gt=W.getViewport(B);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),k.viewport(a)}i=W.getFrustum(B),S(A,x,rt,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Wr&&M(W,x),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,P,L)};function M(b,A){let x=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(s.x,s.y,{format:Es,type:fi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,x,u,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,x,d,y,null)}function R(b,A,x,E){let P=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let k=P.uuid,N=A.uuid,I=c[k];I===void 0&&(I={},c[k]=I);let O=I[N];O===void 0&&(O=P.clone(),I[N]=O,A.addEventListener("dispose",w)),P=O}if(P.visible=A.visible,P.wireframe=A.wireframe,E===Wr?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let k=n.properties.get(P);k.light=x}return P}function S(b,A,x,E,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Wr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let N=t.update(b),I=b.material;if(Array.isArray(I)){let O=N.groups;for(let Y=0,W=O.length;Y<W;Y++){let j=O[Y],$=I[j.materialIndex];if($&&$.visible){let Q=R(b,$,E,P);b.onBeforeShadow(n,b,A,x,N,Q,j),n.renderBufferDirect(x,null,N,Q,b,j),b.onAfterShadow(n,b,A,x,N,Q,j)}}}else if(I.visible){let O=R(b,I,E,P);b.onBeforeShadow(n,b,A,x,N,O,null),n.renderBufferDirect(x,null,N,O,b,null),b.onAfterShadow(n,b,A,x,N,O,null)}}let k=b.children;for(let N=0,I=k.length;N<I;N++)S(k[N],A,x,E,P)}function w(b){b.target.removeEventListener("dispose",w);for(let x in c){let E=c[x],P=b.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Xv(n,t){function e(){let F=!1,ft=new Be,tt=null,lt=new Be(0,0,0,0);return{setMask:function(xt){tt!==xt&&!F&&(n.colorMask(xt,xt,xt,xt),tt=xt)},setLocked:function(xt){F=xt},setClear:function(xt,st,kt,Tt,X){X===!0&&(xt*=Tt,st*=Tt,kt*=Tt),ft.set(xt,st,kt,Tt),lt.equals(ft)===!1&&(n.clearColor(xt,st,kt,Tt),lt.copy(ft))},reset:function(){F=!1,tt=null,lt.set(-1,0,0,0)}}}function i(){let F=!1,ft=!1,tt=null,lt=null,xt=null;return{setReversed:function(st){if(ft!==st){let kt=t.get("EXT_clip_control");st?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),ft=st;let Tt=xt;xt=null,this.setClear(Tt)}},getReversed:function(){return ft},setTest:function(st){st?nt(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(st){tt!==st&&!F&&(n.depthMask(st),tt=st)},setFunc:function(st){if(ft&&(st=Kf[st]),lt!==st){switch(st){case sl:n.depthFunc(n.NEVER);break;case rl:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=st}},setLocked:function(st){F=st},setClear:function(st){xt!==st&&(xt=st,ft&&(st=1-st),n.clearDepth(st))},reset:function(){F=!1,tt=null,lt=null,xt=null,ft=!1}}}function s(){let F=!1,ft=null,tt=null,lt=null,xt=null,st=null,kt=null,Tt=null,X=null;return{setTest:function(it){F||(it?nt(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(it){ft!==it&&!F&&(n.stencilMask(it),ft=it)},setFunc:function(it,pt,At){(tt!==it||lt!==pt||xt!==At)&&(n.stencilFunc(it,pt,At),tt=it,lt=pt,xt=At)},setOp:function(it,pt,At){(st!==it||kt!==pt||Tt!==At)&&(n.stencilOp(it,pt,At),st=it,kt=pt,Tt=At)},setLocked:function(it){F=it},setClear:function(it){X!==it&&(n.clearStencil(it),X=it)},reset:function(){F=!1,ft=null,tt=null,lt=null,xt=null,st=null,kt=null,Tt=null,X=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],y=null,g=!1,p=null,M=null,R=null,S=null,w=null,b=null,A=null,x=new Wt(0,0,0),E=0,P=!1,L=null,k=null,N=null,I=null,O=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),W=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=j>=2);let Q=null,B={},rt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),qt=new Be().fromArray(rt),zt=new Be().fromArray(gt);function oe(F,ft,tt,lt){let xt=new Uint8Array(4),st=n.createTexture();n.bindTexture(F,st),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<tt;kt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(ft+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return st}let Z={};Z[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(n.DEPTH_TEST),a.setFunc(Rr),Qt(!1),be(ju),nt(n.CULL_FACE),ae(Ei);function nt(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Mt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Gt(F,ft){return u[F]!==ft?(n.bindFramebuffer(F,ft),u[F]=ft,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ft),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function vt(F,ft){let tt=m,lt=!1;if(F){tt=d.get(ft),tt===void 0&&(tt=[],d.set(ft,tt));let xt=F.textures;if(tt.length!==xt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let st=0,kt=xt.length;st<kt;st++)tt[st]=n.COLOR_ATTACHMENT0+st;tt.length=xt.length,lt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,lt=!0);lt&&n.drawBuffers(tt)}function Jt(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let De={[Ys]:n.FUNC_ADD,[xf]:n.FUNC_SUBTRACT,[yf]:n.FUNC_REVERSE_SUBTRACT};De[vf]=n.MIN,De[bf]=n.MAX;let ne={[Mf]:n.ZERO,[Sf]:n.ONE,[wf]:n.SRC_COLOR,[eh]:n.SRC_ALPHA,[If]:n.SRC_ALPHA_SATURATE,[Rf]:n.DST_COLOR,[Af]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[nh]:n.ONE_MINUS_SRC_ALPHA,[Cf]:n.ONE_MINUS_DST_COLOR,[Tf]:n.ONE_MINUS_DST_ALPHA,[Pf]:n.CONSTANT_COLOR,[Lf]:n.ONE_MINUS_CONSTANT_COLOR,[Df]:n.CONSTANT_ALPHA,[kf]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(F,ft,tt,lt,xt,st,kt,Tt,X,it){if(F===Ei){g===!0&&(Mt(n.BLEND),g=!1);return}if(g===!1&&(nt(n.BLEND),g=!0),F!==_f){if(F!==p||it!==P){if((M!==Ys||w!==Ys)&&(n.blendEquation(n.FUNC_ADD),M=Ys,w=Ys),it)switch(F){case Xr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFunc(n.ONE,n.ONE);break;case Qu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",F);break}else switch(F){case Xr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qu:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",F);break}R=null,S=null,b=null,A=null,x.set(0,0,0),E=0,p=F,P=it}return}xt=xt||ft,st=st||tt,kt=kt||lt,(ft!==M||xt!==w)&&(n.blendEquationSeparate(De[ft],De[xt]),M=ft,w=xt),(tt!==R||lt!==S||st!==b||kt!==A)&&(n.blendFuncSeparate(ne[tt],ne[lt],ne[st],ne[kt]),R=tt,S=lt,b=st,A=kt),(Tt.equals(x)===!1||X!==E)&&(n.blendColor(Tt.r,Tt.g,Tt.b,X),x.copy(Tt),E=X),p=F,P=!1}function xe(F,ft){F.side===ui?Mt(n.CULL_FACE):nt(n.CULL_FACE);let tt=F.side===hn;ft&&(tt=!tt),Qt(tt),F.blending===Xr&&F.transparent===!1?ae(Ei):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let lt=F.stencilWrite;o.setTest(lt),lt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ge(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function be(F){F!==mf?(nt(n.CULL_FACE),F!==k&&(F===ju?n.cullFace(n.BACK):F===gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),k=F}function Oe(F){F!==N&&(W&&n.lineWidth(F),N=F)}function Ge(F,ft,tt){F?(nt(n.POLYGON_OFFSET_FILL),(I!==ft||O!==tt)&&(I=ft,O=tt,a.getReversed()&&(ft=-ft),n.polygonOffset(ft,tt))):Mt(n.POLYGON_OFFSET_FILL)}function ce(F){F?nt(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function Xt(F){F===void 0&&(F=n.TEXTURE0+Y-1),Q!==F&&(n.activeTexture(F),Q=F)}function U(F,ft,tt){tt===void 0&&(Q===null?tt=n.TEXTURE0+Y-1:tt=Q);let lt=B[tt];lt===void 0&&(lt={type:void 0,texture:void 0},B[tt]=lt),(lt.type!==F||lt.texture!==ft)&&(Q!==tt&&(n.activeTexture(tt),Q=tt),n.bindTexture(F,ft||Z[F]),lt.type=F,lt.texture=ft)}function Ce(){let F=B[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{n.compressedTexImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function _(){try{n.texSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function z(){try{n.texSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function at(){try{n.texStorage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function ut(){try{n.texStorage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function J(){try{n.texImage2D(...arguments)}catch(F){Yt("WebGLState:",F)}}function et(){try{n.texImage3D(...arguments)}catch(F){Yt("WebGLState:",F)}}function ht(F){return f[F]!==void 0?f[F]:n.getParameter(F)}function Pt(F,ft){f[F]!==ft&&(n.pixelStorei(F,ft),f[F]=ft)}function _t(F){qt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),qt.copy(F))}function dt(F){zt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),zt.copy(F))}function Dt(F,ft){let tt=c.get(ft);tt===void 0&&(tt=new WeakMap,c.set(ft,tt));let lt=tt.get(F);lt===void 0&&(lt=n.getUniformBlockIndex(ft,F.name),tt.set(F,lt))}function Ut(F,ft){let lt=c.get(ft).get(F);l.get(ft)!==lt&&(n.uniformBlockBinding(ft,lt,F.__bindingPointIndex),l.set(ft,lt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,B={},u={},d=new WeakMap,m=[],y=null,g=!1,p=null,M=null,R=null,S=null,w=null,b=null,A=null,x=new Wt(0,0,0),E=0,P=!1,L=null,k=null,N=null,I=null,O=null,qt.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Mt,bindFramebuffer:Gt,drawBuffers:vt,useProgram:Jt,setBlending:ae,setMaterial:xe,setFlipSided:Qt,setCullFace:be,setLineWidth:Oe,setPolygonOffset:Ge,setScissorTest:ce,activeTexture:Xt,bindTexture:U,unbindTexture:Ce,compressedTexImage2D:ie,compressedTexImage3D:T,texImage2D:J,texImage3D:et,pixelStorei:Pt,getParameter:ht,updateUBOMapping:Dt,uniformBlockBinding:Ut,texStorage2D:at,texStorage3D:ut,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:_t,viewport:dt,reset:$t}}function Yv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,_){return m?new OffscreenCanvas(T,_):La("canvas")}function g(T,_,z){let H=1,K=ie(T);if((K.width>z||K.height>z)&&(H=z/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(H*K.width),ut=Math.floor(H*K.height);u===void 0&&(u=y(at,ut));let J=_?y(at,ut):u;return J.width=at,J.height=ut,J.getContext("2d").drawImage(T,0,0,at,ut),Ht("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+ut+")."),J}else return"data"in T&&Ht("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps}function M(T){n.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,_,z,H,K,at=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ut;H&&(ut=t.get("EXT_texture_norm16"),ut||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),z===n.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),_===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),z===n.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),z===n.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){let et=at?Pa:ue.getTransfer(K);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=et===Se?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),z===n.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function w(T,_){let z;return T?_===null||_===di||_===$r?z=n.DEPTH24_STENCIL8:_===$n?z=n.DEPTH32F_STENCIL8:_===Yr&&(z=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===$r?z=n.DEPTH_COMPONENT24:_===$n?z=n.DEPTH_COMPONENT32F:_===Yr&&(z=n.DEPTH_COMPONENT16),z}function b(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){let _=T.target;_.removeEventListener("dispose",A),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(T){let _=T.target;_.removeEventListener("dispose",x),L(_)}function E(T){let _=i.get(T);if(_.__webglInit===void 0)return;let z=T.source,H=d.get(z);if(H){let K=H[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(T),Object.keys(H).length===0&&d.delete(z)}i.remove(T)}function P(T){let _=i.get(T);n.deleteTexture(_.__webglTexture);let z=T.source,H=d.get(z);delete H[_.__cacheKey],a.memory.textures--}function L(T){let _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let K=0;K<_.__webglFramebuffer[H].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[H][K]);else n.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)n.deleteFramebuffer(_.__webglFramebuffer[H]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let H=0,K=z.length;H<K;H++){let at=i.get(z[H]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(z[H])}i.remove(T)}let k=0;function N(){k=0}function I(){return k}function O(T){k=T}function Y(){let T=k;return T>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,T}function W(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){let z=i.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let H=T.image;if(H===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function $(T,_){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Mt(z,T,_);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function Q(T,_){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){Mt(z,T,_);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function B(T,_){let z=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){Gt(z,T,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let rt={[hl]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},gt={[an]:n.NEAREST,[Ff]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Xl]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},qt={[Vf]:n.NEVER,[Yf]:n.ALWAYS,[Gf]:n.LESS,[Cc]:n.LEQUAL,[Hf]:n.EQUAL,[Ic]:n.GEQUAL,[Wf]:n.GREATER,[Xf]:n.NOTEQUAL};function zt(T,_){if(_.type===$n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===Xl||_.magFilter===eo||_.magFilter===Ss||_.minFilter===un||_.minFilter===Xl||_.minFilter===eo||_.minFilter===Ss)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,rt[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,rt[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,rt[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,gt[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,gt[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,qt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==eo&&_.minFilter!==Ss||_.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function oe(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));let H=_.source,K=d.get(H);K===void 0&&(K={},d.set(H,K));let at=W(_);if(at!==T.__cacheKey){K[at]===void 0&&(K[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[at].usedTimes++;let ut=K[T.__cacheKey];ut!==void 0&&(K[T.__cacheKey].usedTimes--,ut.usedTimes===0&&P(_)),T.__cacheKey=at,T.__webglTexture=K[at].texture}return z}function Z(T,_,z){return Math.floor(Math.floor(T/z)/_)}function nt(T,_,z,H){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,H,_.data);else{at.sort((Pt,_t)=>Pt.start-_t.start);let ut=0;for(let Pt=1;Pt<at.length;Pt++){let _t=at[ut],dt=at[Pt],Dt=_t.start+_t.count,Ut=Z(dt.start,_.width,4),$t=Z(_t.start,_.width,4);dt.start<=Dt+1&&Ut===$t&&Z(dt.start+dt.count-1,_.width,4)===Ut?_t.count=Math.max(_t.count,dt.start+dt.count-_t.start):(++ut,at[ut]=dt)}at.length=ut+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),ht=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,_t=at.length;Pt<_t;Pt++){let dt=at[Pt],Dt=Math.floor(dt.start/4),Ut=Math.ceil(dt.count/4),$t=Dt%_.width,F=Math.floor(Dt/_.width),ft=Ut,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,$t,F,ft,tt,z,H,_.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,ht)}}function Mt(T,_,z){let H=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=n.TEXTURE_3D);let K=oe(T,_),at=_.source;e.bindTexture(H,T.__webglTexture,n.TEXTURE0+z);let ut=i.get(at);if(at.version!==ut.__version||K===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let tt=ue.getPrimaries(ue.workingColorSpace),lt=_.colorSpace===Xi?null:ue.getPrimaries(_.colorSpace),xt=_.colorSpace===Xi||tt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let et=g(_.image,!1,s.maxTextureSize);et=Ce(_,et);let ht=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),_t=S(_.internalFormat,ht,Pt,_.normalized,_.colorSpace,_.isVideoTexture);zt(H,_);let dt,Dt=_.mipmaps,Ut=_.isVideoTexture!==!0,$t=ut.__version===void 0||K===!0,F=at.dataReady,ft=b(_,et);if(_.isDepthTexture)_t=w(_.format===ws,_.type),$t&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,_t,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,_t,et.width,et.height,0,ht,Pt,null));else if(_.isDataTexture)if(Dt.length>0){Ut&&$t&&e.texStorage2D(n.TEXTURE_2D,ft,_t,Dt[0].width,Dt[0].height);for(let tt=0,lt=Dt.length;tt<lt;tt++)dt=Dt[tt],Ut?F&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,ht,Pt,dt.data):e.texImage2D(n.TEXTURE_2D,tt,_t,dt.width,dt.height,0,ht,Pt,dt.data);_.generateMipmaps=!1}else Ut?($t&&e.texStorage2D(n.TEXTURE_2D,ft,_t,et.width,et.height),F&&nt(_,et,ht,Pt)):e.texImage2D(n.TEXTURE_2D,0,_t,et.width,et.height,0,ht,Pt,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ut&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,_t,Dt[0].width,Dt[0].height,et.depth);for(let tt=0,lt=Dt.length;tt<lt;tt++)if(dt=Dt[tt],_.format!==qn)if(ht!==null)if(Ut){if(F)if(_.layerUpdates.size>0){let xt=wh(dt.width,dt.height,_.format,_.type);for(let st of _.layerUpdates){let kt=dt.data.subarray(st*xt/dt.data.BYTES_PER_ELEMENT,(st+1)*xt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,st,dt.width,dt.height,1,ht,kt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,et.depth,ht,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,_t,dt.width,dt.height,et.depth,0,dt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,et.depth,ht,Pt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,_t,dt.width,dt.height,et.depth,0,ht,Pt,dt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ut&&$t&&e.texStorage2D(n.TEXTURE_2D,ft,_t,Dt[0].width,Dt[0].height);for(let tt=0,lt=Dt.length;tt<lt;tt++)dt=Dt[tt],_.format!==qn?ht!==null?Ut?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,ht,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,_t,dt.width,dt.height,0,dt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?F&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt.width,dt.height,ht,Pt,dt.data):e.texImage2D(n.TEXTURE_2D,tt,_t,dt.width,dt.height,0,ht,Pt,dt.data)}else if(_.isDataArrayTexture)if(Ut){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,_t,et.width,et.height,et.depth),F)if(_.layerUpdates.size>0){let tt=wh(et.width,et.height,_.format,_.type);for(let lt of _.layerUpdates){let xt=et.data.subarray(lt*tt/et.data.BYTES_PER_ELEMENT,(lt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,et.width,et.height,1,ht,Pt,xt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Pt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,et.width,et.height,et.depth,0,ht,Pt,et.data);else if(_.isData3DTexture)Ut?($t&&e.texStorage3D(n.TEXTURE_3D,ft,_t,et.width,et.height,et.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Pt,et.data)):e.texImage3D(n.TEXTURE_3D,0,_t,et.width,et.height,et.depth,0,ht,Pt,et.data);else if(_.isFramebufferTexture){if($t)if(Ut)e.texStorage2D(n.TEXTURE_2D,ft,_t,et.width,et.height);else{let tt=et.width,lt=et.height;for(let xt=0;xt<ft;xt++)e.texImage2D(n.TEXTURE_2D,xt,_t,tt,lt,0,ht,Pt,null),tt>>=1,lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),f.add(_),tt.onpaint=lt=>{let xt=lt.changedElements;for(let st of f)xt.includes(st.image)&&(st.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{let xt=n.RGBA,st=n.RGBA,kt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,st,kt,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ut&&$t){let tt=ie(Dt[0]);e.texStorage2D(n.TEXTURE_2D,ft,_t,tt.width,tt.height)}for(let tt=0,lt=Dt.length;tt<lt;tt++)dt=Dt[tt],Ut?F&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht,Pt,dt):e.texImage2D(n.TEXTURE_2D,tt,_t,ht,Pt,dt);_.generateMipmaps=!1}else if(Ut){if($t){let tt=ie(et);e.texStorage2D(n.TEXTURE_2D,ft,_t,tt.width,tt.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Pt,et)}else e.texImage2D(n.TEXTURE_2D,0,_t,ht,Pt,et);p(_)&&M(H),ut.__version=at.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Gt(T,_,z){if(_.image.length!==6)return;let H=oe(T,_),K=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);let at=i.get(K);if(K.version!==at.__version||H===!0){e.activeTexture(n.TEXTURE0+z);let ut=ue.getPrimaries(ue.workingColorSpace),J=_.colorSpace===Xi?null:ue.getPrimaries(_.colorSpace),et=_.colorSpace===Xi||ut===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ht=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let st=0;st<6;st++)!ht&&!Pt?_t[st]=g(_.image[st],!0,s.maxCubemapSize):_t[st]=Pt?_.image[st].image:_.image[st],_t[st]=Ce(_,_t[st]);let dt=_t[0],Dt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),$t=S(_.internalFormat,Dt,Ut,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,ft=at.__version===void 0||H===!0,tt=K.dataReady,lt=b(_,dt);zt(n.TEXTURE_CUBE_MAP,_);let xt;if(ht){F&&ft&&e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,$t,dt.width,dt.height);for(let st=0;st<6;st++){xt=_t[st].mipmaps;for(let kt=0;kt<xt.length;kt++){let Tt=xt[kt];_.format!==qn?Dt!==null?F?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,0,0,Tt.width,Tt.height,Dt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,$t,Tt.width,Tt.height,0,Tt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,0,0,Tt.width,Tt.height,Dt,Ut,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt,$t,Tt.width,Tt.height,0,Dt,Ut,Tt.data)}}}else{if(xt=_.mipmaps,F&&ft){xt.length>0&&lt++;let st=ie(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,lt,$t,st.width,st.height)}for(let st=0;st<6;st++)if(Pt){F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,_t[st].width,_t[st].height,Dt,Ut,_t[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,_t[st].width,_t[st].height,0,Dt,Ut,_t[st].data);for(let kt=0;kt<xt.length;kt++){let X=xt[kt].image[st].image;F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,0,0,X.width,X.height,Dt,Ut,X.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,$t,X.width,X.height,0,Dt,Ut,X.data)}}else{F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,Ut,_t[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,$t,Dt,Ut,_t[st]);for(let kt=0;kt<xt.length;kt++){let Tt=xt[kt];F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,0,0,Dt,Ut,Tt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt+1,$t,Dt,Ut,Tt.image[st])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),at.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function vt(T,_,z,H,K,at){let ut=r.convert(z.format,z.colorSpace),J=r.convert(z.type),et=S(z.internalFormat,ut,J,z.normalized,z.colorSpace),ht=i.get(_),Pt=i.get(z);if(Pt.__renderTarget=_,!ht.__hasExternalTextures){let _t=Math.max(1,_.width>>at),dt=Math.max(1,_.height>>at);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,at,et,_t,dt,_.depth,0,ut,J,null):e.texImage2D(K,at,et,_t,dt,0,ut,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,K,Pt.__webglTexture,0,ce(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,K,Pt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(T,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){let H=_.depthTexture,K=H&&H.isDepthTexture?H.type:null,at=w(_.stencilBuffer,K),ut=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(_),at,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(_),at,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,at,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,T)}else{let H=_.textures;for(let K=0;K<H.length;K++){let at=H[K],ut=r.convert(at.format,at.colorSpace),J=r.convert(at.type),et=S(at.internalFormat,ut,J,at.normalized,at.colorSpace);Xt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(_),et,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(_),et,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,et,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(T,_,z){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),zt(n.TEXTURE_CUBE_MAP,_.depthTexture);let ht=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type),_t;_.depthTexture.format===Mi?_t=n.DEPTH_COMPONENT24:_.depthTexture.format===ws&&(_t=n.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,_t,_.width,_.height,0,ht,Pt,null)}}else j(_.depthTexture,0);let at=K.__webglTexture,ut=ce(_),J=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,et=_.depthTexture.format===ws?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Mi)Xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,J,at,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,et,J,at,0);else if(_.depthTexture.format===ws)Xt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,J,at,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,et,J,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(T){let _=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let H=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=H}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)De(_.__webglFramebuffer[H],T,H);else{let H=T.texture.mipmaps;H&&H.length>0?De(_.__webglFramebuffer[0],T,0):De(_.__webglFramebuffer,T,0)}else if(z){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=n.createRenderbuffer(),Jt(_.__webglDepthbuffer[H],T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,at)}}else{let H=T.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Jt(_.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(T,_,z){let H=i.get(T);_!==void 0&&vt(H.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ne(T)}function xe(T){let _=T.texture,z=i.get(T),H=i.get(_);T.addEventListener("dispose",x);let K=T.textures,at=T.isWebGLCubeRenderTarget===!0,ut=K.length>1;if(ut||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,a.memory.textures++),at){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let et=0;et<_.mipmaps.length;et++)z.__webglFramebuffer[J][et]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ut)for(let J=0,et=K.length;J<et;J++){let ht=i.get(K[J]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Xt(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let et=K[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let ht=r.convert(et.format,et.colorSpace),Pt=r.convert(et.type),_t=S(et.internalFormat,ht,Pt,et.normalized,et.colorSpace,T.isXRRenderTarget===!0),dt=ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,_t,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Jt(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),zt(n.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)vt(z.__webglFramebuffer[J][et],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,et);else vt(z.__webglFramebuffer[J],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let J=0,et=K.length;J<et;J++){let ht=K[J],Pt=i.get(ht),_t=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_t=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,Pt.__webglTexture),zt(_t,ht),vt(z.__webglFramebuffer,T,ht,n.COLOR_ATTACHMENT0+J,_t,0),p(ht)&&M(_t)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,H.__webglTexture),zt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)vt(z.__webglFramebuffer[et],T,_,n.COLOR_ATTACHMENT0,J,et);else vt(z.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,J,0);p(_)&&M(J),e.unbindTexture()}T.depthBuffer&&ne(T)}function Qt(T){let _=T.textures;for(let z=0,H=_.length;z<H;z++){let K=_[z];if(p(K)){let at=R(T),ut=i.get(K).__webglTexture;e.bindTexture(at,ut),M(at),e.unbindTexture()}}}let be=[],Oe=[];function Ge(T){if(T.samples>0){if(Xt(T)===!1){let _=T.textures,z=T.width,H=T.height,K=n.COLOR_BUFFER_BIT,at=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(T),J=_.length>1;if(J)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let et=T.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Pt=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,z,H,0,0,z,H,K,n.NEAREST),l===!0&&(be.length=0,Oe.length=0,be.push(n.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(be.push(at),Oe.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Pt=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ce(T){return Math.min(s.maxSamples,T.samples)}function Xt(T){let _=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(T){let _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Ce(T,_){let z=T.colorSpace,H=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Ia&&z!==Xi&&(ue.getTransfer(z)===Se?(H!==qn||K!==Rn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",z)),_}function ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=ae,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $v(n,t){function e(i,s=Xi){let r,a=ue.getTransfer(s);if(i===Rn)return n.UNSIGNED_BYTE;if(i===$l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uh)return n.BYTE;if(i===hh)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===Yl)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===ph)return n.ALPHA;if(i===mh)return n.RGB;if(i===qn)return n.RGBA;if(i===Mi)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===Zl)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===Es)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===jl)return n.RGBA_INTEGER;if(i===no||i===io||i===so||i===ro)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===tc||i===ec||i===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===sc||i===rc||i===ac||i===oc||i===ao||i===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ic||i===sc)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ac)return r.COMPRESSED_R11_EAC;if(i===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ao)return r.COMPRESSED_RG11_EAC;if(i===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===xc||i===yc||i===vc||i===bc||i===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===wc||i===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Sc)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ac||i===Tc||i===oo||i===Rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zv=`
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

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Nn({vertexShader:qv,fragmentShader:Zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends li{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,y=typeof XRWebGLBinding<"u",g=new Hh,p={},M=e.getContextAttributes(),R=null,S=null,w=[],b=[],A=new ot,x=null,E=null,P=new cn;P.viewport=new Be;let L=new cn;L.viewport=new Be;let k=[P,L],N=new Bl,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=w[Z];return nt===void 0&&(nt=new kr,w[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=w[Z];return nt===void 0&&(nt=new kr,w[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=w[Z];return nt===void 0&&(nt=new kr,w[Z]=nt),nt.getHandSpace()};function Y(Z){let nt=b.indexOf(Z.inputSource);if(nt===-1)return;let Mt=w[nt];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,c||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<w.length;Z++){let nt=b[Z];nt!==null&&(b[Z]=null,w[Z].disconnect(nt))}I=null,O=null,g.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(R),d=null,u=null,f=null,s=null,S=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Gt=null,vt=null;M.depth&&(vt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=M.stencil?ws:Mi,Gt=M.stencil?$r:di);let Jt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Jt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Tn(u.textureWidth,u.textureHeight,{format:qn,type:Rn,depthTexture:new fs(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Tn(d.framebufferWidth,d.framebufferHeight,{format:qn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Z){for(let nt=0;nt<Z.removed.length;nt++){let Mt=Z.removed[nt],Gt=b.indexOf(Mt);Gt>=0&&(b[Gt]=null,w[Gt].disconnect(Mt))}for(let nt=0;nt<Z.added.length;nt++){let Mt=Z.added[nt],Gt=b.indexOf(Mt);if(Gt===-1){for(let Jt=0;Jt<w.length;Jt++)if(Jt>=b.length){b.push(Mt),Gt=Jt;break}else if(b[Jt]===null){b[Jt]=Mt,Gt=Jt;break}if(Gt===-1)break}let vt=w[Gt];vt&&vt.connect(Mt)}}let $=new C,Q=new C;function B(Z,nt,Mt){$.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(Mt.matrixWorld);let Gt=$.distanceTo(Q),vt=nt.projectionMatrix.elements,Jt=Mt.projectionMatrix.elements,De=vt[14]/(vt[10]-1),ne=vt[14]/(vt[10]+1),ae=(vt[9]+1)/vt[5],xe=(vt[9]-1)/vt[5],Qt=(vt[8]-1)/vt[0],be=(Jt[8]+1)/Jt[0],Oe=De*Qt,Ge=De*be,ce=Gt/(-Qt+be),Xt=ce*-Qt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xt),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),vt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let U=De+ce,Ce=ne+ce,ie=Oe-Xt,T=Ge+(Gt-Xt),_=ae*ne/Ce*U,z=xe*ne/Ce*U;Z.projectionMatrix.makePerspective(ie,T,_,z,U,Ce),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function rt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let nt=Z.near,Mt=Z.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),N.near=L.near=P.near=nt,N.far=L.far=P.far=Mt,(I!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,O=N.far),N.layers.mask=Z.layers.mask|6,P.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let Gt=Z.parent,vt=N.cameras;rt(N,Gt);for(let Jt=0;Jt<vt.length;Jt++)rt(vt[Jt],Gt);vt.length===2?B(N,P,L):N.projectionMatrix.copy(P.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),gt(Z,N,Gt)};function gt(Z,nt,Mt){Mt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let qt=null;function zt(Z,nt){if(h=nt.getViewerPose(c||a),m=nt,h!==null){let Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Gt=!1;Mt.length!==N.cameras.length&&(N.cameras.length=0,Gt=!0);for(let ne=0;ne<Mt.length;ne++){let ae=Mt[ne],xe=null;if(d!==null)xe=d.getViewport(ae);else{let be=f.getViewSubImage(u,ae);xe=be.viewport,ne===0&&(t.setRenderTargetTextures(S,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(S))}let Qt=k[ne];Qt===void 0&&(Qt=new cn,Qt.layers.enable(ne),Qt.viewport=new Be,k[ne]=Qt),Qt.matrix.fromArray(ae.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ae.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(xe.x,xe.y,xe.width,xe.height),ne===0&&(N.matrix.copy(Qt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Gt===!0&&N.cameras.push(Qt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let ne=f.getDepthInformation(Mt[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,s.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let ne=0;ne<Mt.length;ne++){let ae=Mt[ne].camera;if(ae){let xe=p[ae];xe||(xe=new Va,p[ae]=xe);let Qt=f.getCameraImage(ae);xe.sourceTexture=Qt}}}}for(let Mt=0;Mt<w.length;Mt++){let Gt=b[Mt],vt=w[Mt];Gt!==null&&vt!==void 0&&vt.update(Gt,nt,c||a)}qt&&qt(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),m=null}let oe=new Sp;oe.setAnimationLoop(zt),this.setAnimationLoop=function(Z){qt=Z},this.dispose=function(){}}},Kv=new ge,Cp=new Kt;Cp.set(-1,0,0,0,1,0,0,0,1);function Jv(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,bh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,R,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),R=M.envMap,S=M.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=R*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jv(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let b=w.program;i.uniformBlockBinding(S,b)}function c(S,w){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",M));let A=w.program;i.updateUBOMapping(S,A);let x=t.render.frame;r[S.id]!==x&&(u(S),r[S.id]=x)}function h(S){let w=f();S.__bindingPointIndex=w;let b=n.createBuffer(),A=S.__size,x=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let w=s[S.id],b=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,E=b.length;x<E;x++){let P=b[x];if(Array.isArray(P))for(let L=0,k=P.length;L<k;L++)d(P[L],x,L,A);else d(P,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,w,b,A){if(y(S,w,b,A)===!0){let x=S.__offset,E=S.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){let k=E[L],N=p(k);m(k,S.__data,P),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,S.__data)}}function m(S,w,b){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,b)}function y(S,w,b,A){let x=S.value,E=w+"_"+b;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{let P=A[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(S){let w=S.uniforms,b=0,A=16;for(let E=0,P=w.length;E<P;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let k=0,N=L.length;k<N;k++){let I=L[k],O=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,W=O.length;Y<W;Y++){let j=O[Y],$=p(j),Q=b%A,B=Q%$.boundary,rt=Q+B;b+=B,rt!==0&&A-rt<$.storage&&(b+=A-rt),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=$.storage}}}let x=b%A;return x>0&&(b+=A-x),S.__size=b,S.__cache={},this}function p(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",S),w}function M(S){let w=S.target;w.removeEventListener("dispose",M);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var Qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function tb(){return Ti===null&&(Ti=new Oa(Qv,16,16,Es,fi),Ti.name="DFG_LUT",Ti.minFilter=un,Ti.magFilter=un,Ti.wrapS=bi,Ti.wrapT=bi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var kc=class{constructor(t={}){let{canvas:e=$f(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Rn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let y=d,g=new Set([jl,Jl,Kl]),p=new Set([Rn,di,Yr,$r,$l,ql]),M=new Uint32Array(4),R=new Int32Array(4),S=new C,w=null,b=null,A=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,k=null,N=null,I=null,O=null;this._outputColorSpace=Je;let Y=0,W=0,j=null,$=-1,Q=null,B=new Be,rt=new Be,gt=null,qt=new Wt(0),zt=0,oe=e.width,Z=e.height,nt=1,Mt=null,Gt=null,vt=new Be(0,0,oe,Z),Jt=new Be(0,0,oe,Z),De=!1,ne=new Fr,ae=!1,xe=!1,Qt=new ge,be=new C,Oe=new Be,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function Xt(){return j===null?nt:1}let U=i;function Ce(v,D){return e.getContext(v,D)}let ie,T,_,z,H,K,at,ut,J,et,ht,Pt,_t,dt,Dt,Ut,$t,F,ft,tt,lt,xt,st;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){let D="webgl2";if(U=Ce(D,v),U===null)throw Ce(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(v){throw e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Yt("WebGLRenderer: "+v.message),v}function kt(){ie=new oy(U),ie.init(),lt=new $v(U,ie),T=new Jx(U,ie,t,lt),_=new Xv(U,ie),T.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),N=U.createFramebuffer(),I=U.createFramebuffer(),O=U.createFramebuffer(),z=new uy(U),H=new Pv,K=new Yv(U,ie,_,H,T,lt,z),at=new ay(P),ut=new d0(U),xt=new Zx(U,ut),J=new ly(U,ut,z,xt),et=new dy(U,J,ut,xt,z),F=new hy(U,T,K),Dt=new jx(H),ht=new Iv(P,at,ie,T,xt,Dt),Pt=new Jv(P,H),_t=new Dv,dt=new Bv(ie),$t=new qx(P,at,_,et,m,l),Ut=new Wv(P,et,T),st=new jv(U,z,T,_),ft=new Kx(U,ie,z),tt=new cy(U,ie,z),z.programs=ht.programs,P.capabilities=T,P.extensions=ie,P.properties=H,P.renderLists=_t,P.shadowMap=Ut,P.state=_,P.info=z}y!==Rn&&(E=new py(y,e.width,e.height,o,s,r));let Tt=new Wh(P,U);this.xr=Tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=ie.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ie.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(v){v!==void 0&&(nt=v,this.setSize(oe,Z,!1))},this.getSize=function(v){return v.set(oe,Z)},this.setSize=function(v,D,q=!0){if(Tt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=v,Z=D,e.width=Math.floor(v*nt),e.height=Math.floor(D*nt),q===!0&&(e.style.width=v+"px",e.style.height=D+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(oe*nt,Z*nt).floor()},this.setDrawingBufferSize=function(v,D,q){oe=v,Z=D,nt=q,e.width=Math.floor(v*q),e.height=Math.floor(D*q),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(y===Rn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(B)},this.getViewport=function(v){return v.copy(vt)},this.setViewport=function(v,D,q,V){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,D,q,V),_.viewport(B.copy(vt).multiplyScalar(nt).round())},this.getScissor=function(v){return v.copy(Jt)},this.setScissor=function(v,D,q,V){v.isVector4?Jt.set(v.x,v.y,v.z,v.w):Jt.set(v,D,q,V),_.scissor(rt.copy(Jt).multiplyScalar(nt).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(v){_.setScissorTest(De=v)},this.setOpaqueSort=function(v){Mt=v},this.setTransparentSort=function(v){Gt=v},this.getClearColor=function(v){return v.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,q=!0){let V=0;if(v){let G=!1;if(j!==null){let yt=j.texture.format;G=g.has(yt)}if(G){let yt=j.texture.type,St=p.has(yt),mt=$t.getClearColor(),Ct=$t.getClearAlpha(),Nt=mt.r,se=mt.g,le=mt.b;St?(M[0]=Nt,M[1]=se,M[2]=le,M[3]=Ct,U.clearBufferuiv(U.COLOR,0,M)):(R[0]=Nt,R[1]=se,R[2]=le,R[3]=Ct,U.clearBufferiv(U.COLOR,0,R))}else V|=U.COLOR_BUFFER_BIT}D&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),k=v},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),$t.dispose(),_t.dispose(),dt.dispose(),H.dispose(),at.dispose(),et.dispose(),xt.dispose(),st.dispose(),ht.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",de),Tt.removeEventListener("sessionend",He),he.stop()};function X(v){v.preventDefault(),Da("WebGLRenderer: Context Lost."),L=!0}function it(){Da("WebGLRenderer: Context Restored."),L=!1;let v=z.autoReset,D=Ut.enabled,q=Ut.autoUpdate,V=Ut.needsUpdate,G=Ut.type;kt(),z.autoReset=v,Ut.enabled=D,Ut.autoUpdate=q,Ut.needsUpdate=V,Ut.type=G}function pt(v){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function At(v){let D=v.target;D.removeEventListener("dispose",At),Ft(D)}function Ft(v){te(v),H.remove(v)}function te(v){let D=H.get(v).programs;D!==void 0&&(D.forEach(function(q){ht.releaseProgram(q)}),v.isShaderMaterial&&ht.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,q,V,G,yt){D===null&&(D=Ge);let St=G.isMesh&&G.matrixWorld.determinantAffine()<0,mt=Lo(v,D,q,V,G);_.setMaterial(V,St);let Ct=q.index,Nt=1;if(V.wireframe===!0){if(Ct=J.getWireframeAttribute(q),Ct===void 0)return;Nt=2}let se=q.drawRange,le=q.attributes.position,It=se.start*Nt,Me=(se.start+se.count)*Nt;yt!==null&&(It=Math.max(It,yt.start*Nt),Me=Math.min(Me,(yt.start+yt.count)*Nt)),Ct!==null?(It=Math.max(It,0),Me=Math.min(Me,Ct.count)):le!=null&&(It=Math.max(It,0),Me=Math.min(Me,le.count));let Ye=Me-It;if(Ye<0||Ye===1/0)return;xt.setup(G,V,mt,q,Ct);let ke,Ie=ft;if(Ct!==null&&(ke=ut.get(Ct),Ie=tt,Ie.setIndex(ke)),G.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Xt()),Ie.setMode(U.LINES)):Ie.setMode(U.TRIANGLES);else if(G.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),_.setLineWidth(pn*Xt()),G.isLineSegments?Ie.setMode(U.LINES):G.isLineLoop?Ie.setMode(U.LINE_LOOP):Ie.setMode(U.LINE_STRIP)}else G.isPoints?Ie.setMode(U.POINTS):G.isSprite&&Ie.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let pn=G._multiDrawStarts,wt=G._multiDrawCounts,bn=G._multiDrawCount,me=Ct?ut.get(Ct).bytesPerElement:1,Gn=H.get(V).currentProgram.getUniforms();for(let yi=0;yi<bn;yi++)Gn.setValue(U,"_gl_DrawID",yi),Ie.render(pn[yi]/me,wt[yi])}else if(G.isInstancedMesh)Ie.renderInstances(It,Ye,G.count);else if(q.isInstancedBufferGeometry){let pn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wt=Math.min(q.instanceCount,pn);Ie.renderInstances(It,Ye,wt)}else Ie.render(It,Ye)};function Rt(v,D,q,V){k!==null&&v.isNodeMaterial&&k.setObject(V,v),ae===!0&&Dt.setState(v,q,!1),v.transparent===!0&&v.side===ui&&v.forceSinglePass===!1?(v.side=hn,v.needsUpdate=!0,ln(v,D,V),v.side=bs,v.needsUpdate=!0,ln(v,D,V),v.side=ui):ln(v,D,V)}this.compile=function(v,D,q=null){q===null&&(q=v),k!==null&&k.renderStart(v,D,q),b=dt.get(q),b.init(D),x.push(b),q.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),v!==q&&v.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),xe=this.localClippingEnabled,ae=Dt.init(this.clippingPlanes,xe),ae===!0&&Dt.setGlobalState(this.clippingPlanes,D),k!==null&&Ut.render(b.state.shadowsArray,q,D);let V=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let yt=G.material;if(yt)if(Array.isArray(yt))for(let St=0;St<yt.length;St++){let mt=yt[St];Rt(mt,q,D,G),V.add(mt)}else Rt(yt,q,D,G),V.add(yt)}),b=x.pop(),k!==null&&k.renderEnd(),V},this.compileAsync=function(v,D,q=null){let V=this.compile(v,D,q);return new Promise(G=>{function yt(){if(V.forEach(function(St){let Ct=H.get(St).currentProgram;(Ct===void 0||Ct.isReady())&&V.delete(St)}),V.size===0){G(v);return}setTimeout(yt,10)}ie.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let pe=null;function jt(v){pe&&pe(v)}function de(){he.stop()}function He(){he.start()}let he=new Sp;he.setAnimationLoop(jt),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(v){pe=v,Tt.setAnimationLoop(v),v===null?he.stop():he.start()},Tt.addEventListener("sessionstart",de),Tt.addEventListener("sessionend",He),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;k!==null&&k.renderStart(v,D);let q=Tt.enabled===!0&&Tt.isPresenting===!0,V=E!==null&&(j===null||q)&&E.begin(P,j);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(D),D=Tt.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,D,j),b=dt.get(v,x.length),b.init(D),b.state.textureUnits=K.getTextureUnits(),x.push(b),Qt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ne.setFromProjectionMatrix(Qt,oi,D.reversedDepth),xe=this.localClippingEnabled,ae=Dt.init(this.clippingPlanes,xe),w=_t.get(v,A.length),w.init(),A.push(w),Tt.enabled===!0&&Tt.isPresenting===!0){let St=P.xr.getDepthSensingMesh();St!==null&&Te(St,D,-1/0,P.sortObjects)}Te(v,D,0,P.sortObjects),w.finish(),k!==null&&k.updateLights(b.state.lightsArray),P.sortObjects===!0&&w.sort(Mt,Gt),ce=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ce&&$t.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Dt.beginShadows();let G=b.state.shadowsArray;if(Ut.render(G,v,D),ae===!0&&Dt.endShadows(),(V&&E.hasRenderPass())===!1){let St=w.opaque,mt=w.transmissive;if(b.setupLights(),D.isArrayCamera){let Ct=D.cameras;if(mt.length>0)for(let Nt=0,se=Ct.length;Nt<se;Nt++){let le=Ct[Nt];sn(St,mt,v,le)}ce&&$t.render(v);for(let Nt=0,se=Ct.length;Nt<se;Nt++){let le=Ct[Nt];fn(w,v,le,le.viewport)}}else mt.length>0&&sn(St,mt,v,D),ce&&$t.render(v),fn(w,v,D)}j!==null&&W===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),V&&E.end(P),v.isScene===!0&&v.onAfterRender(P,v,D),xt.resetDefaultState(),$=-1,Q=null,x.pop(),x.length>0?(b=x[x.length-1],K.setTextureUnits(b.state.textureUnits),ae===!0&&Dt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,k!==null&&k.renderEnd()};function Te(v,D,q,V){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ne)){V&&Oe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Qt);let St=et.update(v),mt=v.material;mt.visible&&w.push(v,St,mt,q,Oe.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ne))){let St=et.update(v),mt=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Oe.copy(v.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Oe.copy(St.boundingSphere.center)),Oe.applyMatrix4(v.matrixWorld).applyMatrix4(Qt)),Array.isArray(mt)){let Ct=St.groups;for(let Nt=0,se=Ct.length;Nt<se;Nt++){let le=Ct[Nt],It=mt[le.materialIndex];It&&It.visible&&w.push(v,St,It,q,Oe.z,le,D)}}else mt.visible&&w.push(v,St,mt,q,Oe.z,null,D)}}let yt=v.children;for(let St=0,mt=yt.length;St<mt;St++)Te(yt[St],D,q,V)}function fn(v,D,q,V){let{opaque:G,transmissive:yt,transparent:St}=v;b.setupLightsView(q),ae===!0&&Dt.setGlobalState(P.clippingPlanes,q),V&&_.viewport(B.copy(V)),G.length>0&&Vn(G,D,q),yt.length>0&&Vn(yt,D,q),St.length>0&&Vn(St,D,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function sn(v,D,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let It=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Tn(1,1,{generateMipmaps:!0,type:It?fi:Rn,minFilter:Ss,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let yt=b.state.transmissionRenderTarget[V.id],St=V.viewport||B;yt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);let mt=P.getRenderTarget(),Ct=P.getActiveCubeFace(),Nt=P.getActiveMipmapLevel();P.setRenderTarget(yt),P.getClearColor(qt),zt=P.getClearAlpha(),zt<1&&P.setClearColor(16777215,.5),P.clear(),ce&&$t.render(q);let se=P.toneMapping;P.toneMapping=hi;let le=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),ae===!0&&Dt.setGlobalState(P.clippingPlanes,V),Vn(v,q,V),K.updateMultisampleRenderTarget(yt),K.updateRenderTargetMipmap(yt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Me=0,Ye=D.length;Me<Ye;Me++){let ke=D[Me],{object:Ie,geometry:pn,material:wt,group:bn}=ke;if(wt.side===ui&&Ie.layers.test(V.layers)){let me=wt.side;wt.side=hn,wt.needsUpdate=!0,on(Ie,q,V,pn,wt,bn),wt.side=me,wt.needsUpdate=!0,It=!0}}It===!0&&(K.updateMultisampleRenderTarget(yt),K.updateRenderTargetMipmap(yt))}P.setRenderTarget(mt,Ct,Nt),P.setClearColor(qt,zt),le!==void 0&&(V.viewport=le),P.toneMapping=se}function Vn(v,D,q){let V=D.isScene===!0?D.overrideMaterial:null;for(let G=0,yt=v.length;G<yt;G++){let St=v[G],{object:mt,geometry:Ct,group:Nt}=St,se=St.material;se.allowOverride===!0&&V!==null&&(se=V),mt.layers.test(q.layers)&&on(mt,D,q,Ct,se,Nt)}}function on(v,D,q,V,G,yt){k!==null&&G.isNodeMaterial&&k.setObject(v,G),v.onBeforeRender(P,D,q,V,G,yt),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(P,D,q,V,v,yt),G.transparent===!0&&G.side===ui&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,P.renderBufferDirect(q,D,V,G,v,yt),G.side=bs,G.needsUpdate=!0,P.renderBufferDirect(q,D,V,G,v,yt),G.side=ui):P.renderBufferDirect(q,D,V,G,v,yt),v.onAfterRender(P,D,q,V,G,yt)}function ln(v,D,q){D.isScene!==!0&&(D=Ge);let V=H.get(v),G=b.state.lights,yt=b.state.shadowsArray,St=G.state.version,mt=ht.getParameters(v,G.state,yt,D,q,b.state.lightProbeGridArray),Ct=ht.getProgramCacheKey(mt),Nt=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;let se=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=at.get(v.envMap||V.environment,se),V.envMapRotation=V.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Nt===void 0&&(v.addEventListener("dispose",At),Nt=new Map,V.programs=Nt);let le=Nt.get(Ct);if(le!==void 0){if(V.currentProgram===le&&V.lightsStateVersion===St)return es(v,mt),le}else mt.uniforms=ht.getUniforms(v),k!==null&&v.isNodeMaterial&&k.build(v,q,mt),v.onBeforeCompile(mt,P),le=ht.acquireProgram(mt,Ct),Nt.set(Ct,le),V.uniforms=mt.uniforms;let It=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(It.clippingPlanes=Dt.uniform),es(v,mt),V.needsLights=ni(v),V.lightsStateVersion=St,V.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.sunLights.value=G.state.sun,It.sunLightShadows.value=G.state.sunShadow,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.sunShadowMatrix.value=G.state.sunShadowMatrix,It.sunShadowCascade.value=G.state.sunShadowCascade,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=le,V.uniformsList=null,le}function ks(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Kr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function es(v,D){let q=H.get(v);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function _u(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let q=0,V=v.length;q<V;q++){let G=v[q];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Lo(v,D,q,V,G){D.isScene!==!0&&(D=Ge),K.resetTextureUnits();let yt=D.fog,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,mt=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ue.workingColorSpace,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Nt=at.get(V.envMap||St,Ct),se=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,le=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!q.morphAttributes.position,Me=!!q.morphAttributes.normal,Ye=!!q.morphAttributes.color,ke=hi;V.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=P.toneMapping);let Ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pn=Ie!==void 0?Ie.length:0,wt=H.get(V),bn=b.state.lights;if(ae===!0&&(xe===!0||v!==Q)){let Pe=v===Q&&V.id===$;Dt.setState(V,v,Pe)}let me=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==bn.state.version||wt.outputColorSpace!==mt||G.isBatchedMesh&&wt.batching===!1||!G.isBatchedMesh&&wt.batching===!0||G.isBatchedMesh&&wt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&wt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&wt.instancing===!1||!G.isInstancedMesh&&wt.instancing===!0||G.isSkinnedMesh&&wt.skinning===!1||!G.isSkinnedMesh&&wt.skinning===!0||G.isInstancedMesh&&wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&wt.instancingMorph===!1&&G.morphTexture!==null||wt.envMap!==Nt||V.fog===!0&&wt.fog!==yt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Dt.numPlanes||wt.numIntersection!==Dt.numIntersection)||wt.vertexAlphas!==se||wt.vertexTangents!==le||wt.morphTargets!==It||wt.morphNormals!==Me||wt.morphColors!==Ye||wt.toneMapping!==ke||wt.morphTargetsCount!==pn||!!wt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,wt.__version=V.version);let Gn=wt.currentProgram;me===!0&&(Gn=ln(V,D,G),k&&V.isNodeMaterial&&k.onUpdateProgram(V,Gn,wt));let yi=!1,ns=!1,or=!1,Re=Gn.getUniforms(),We=wt.uniforms;if(_.useProgram(Gn.program)&&(yi=!0,ns=!0,or=!0),V.id!==$&&($=V.id,ns=!0),wt.needsLights){let Pe=_u(b.state.lightProbeGridArray,G);wt.lightProbeGrid!==Pe&&(wt.lightProbeGrid=Pe,ns=!0)}if(yi||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Re.setValue(U,"projectionMatrix",v.projectionMatrix),Re.setValue(U,"viewMatrix",v.matrixWorldInverse);let ss=Re.map.cameraPosition;ss!==void 0&&ss.setValue(U,be.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&Re.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Re.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,ns=!0,or=!0)}if(wt.needsLights&&(bn.state.sunShadowMap.length>0&&Re.setValue(U,"sunShadowMap",bn.state.sunShadowMap,K),bn.state.directionalShadowMap.length>0&&Re.setValue(U,"directionalShadowMap",bn.state.directionalShadowMap,K),bn.state.spotShadowMap.length>0&&Re.setValue(U,"spotShadowMap",bn.state.spotShadowMap,K),bn.state.pointShadowMap.length>0&&Re.setValue(U,"pointShadowMap",bn.state.pointShadowMap,K)),G.isSkinnedMesh){Re.setOptional(U,G,"bindMatrix"),Re.setOptional(U,G,"bindMatrixInverse");let Pe=G.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Re.setValue(U,"boneTexture",Pe.boneTexture,K))}G.isBatchedMesh&&(Re.setOptional(U,G,"batchingTexture"),Re.setValue(U,"batchingTexture",G._matricesTexture,K),Re.setOptional(U,G,"batchingIdTexture"),Re.setValue(U,"batchingIdTexture",G._indirectTexture,K),Re.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Re.setValue(U,"batchingColorTexture",G._colorsTexture,K));let is=q.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&F.update(G,q,Gn),(ns||wt.receiveShadow!==G.receiveShadow)&&(wt.receiveShadow=G.receiveShadow,Re.setValue(U,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(We.envMapIntensity.value=D.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=tb()),ns){if(Re.setValue(U,"toneMappingExposure",P.toneMappingExposure),wt.needsLights&&Ke(We,or),yt&&V.fog===!0&&Pt.refreshFogUniforms(We,yt),Pt.refreshMaterialUniforms(We,V,nt,Z,b.state.transmissionRenderTarget[v.id]),wt.needsLights&&wt.lightProbeGrid){let Pe=wt.lightProbeGrid;We.probesSH.value=Pe.texture,We.probesMin.value.copy(Pe.boundingBox.min),We.probesMax.value.copy(Pe.boundingBox.max),We.probesResolution.value.copy(Pe.resolution)}Kr.upload(U,ks(wt),We,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Kr.upload(U,ks(wt),We,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Re.setValue(U,"center",G.center),Re.setValue(U,"modelViewMatrix",G.modelViewMatrix),Re.setValue(U,"normalMatrix",G.normalMatrix),Re.setValue(U,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Pe=V.uniformsGroups;for(let ss=0,lr=Pe.length;ss<lr;ss++){let Ud=Pe[ss];st.update(Ud,Gn),st.bind(Ud,Gn)}}return Gn}function Ke(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function ni(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(v,D,q){let V=H.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=D,H.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let q=H.get(v);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,q=0){j=v,Y=D,W=q;let V=null,G=!1,yt=!1;if(v){let mt=H.get(v);if(mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,mt.__webglFramebuffer),B.copy(v.viewport),rt.copy(v.scissor),gt=v.scissorTest,_.viewport(B),_.scissor(rt),_.setScissorTest(gt),$=-1;return}else if(mt.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(mt.__hasExternalTextures)K.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let se=v.depthTexture;if(mt.__boundDepthTexture!==se){if(se!==null&&H.has(se)&&(v.width!==se.image.width||v.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}let Ct=v.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(yt=!0);let Nt=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?V=Nt[D][q]:V=Nt[D],G=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?V=H.get(v).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[q]:V=Nt,B.copy(v.viewport),rt.copy(v.scissor),gt=v.scissorTest}else B.copy(vt).multiplyScalar(nt).floor(),rt.copy(Jt).multiplyScalar(nt).floor(),gt=De;if(q!==0&&(V=N),_.bindFramebuffer(U.FRAMEBUFFER,V)&&_.drawBuffers(v,V),_.viewport(B),_.scissor(rt),_.setScissorTest(gt),G){let mt=H.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,mt.__webglTexture,q)}else if(yt){let mt=D;for(let Ct=0;Ct<v.textures.length;Ct++){let Nt=H.get(v.textures[Ct]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ct,Nt.__webglTexture,q,mt)}}else if(v!==null&&q!==0){let mt=H.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mt.__webglTexture,q)}$=-1};function ma(v){let D=H.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=T.textureFormatReadable(v.format),D.__typeReadable=T.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,q,V,G,yt,St,mt=0){if(!(v&&v.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){_.bindFramebuffer(U.FRAMEBUFFER,Ct);try{let Nt=v.textures[mt],se=Nt.format,le=Nt.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt);let It=ma(Nt);if(It.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-V&&q>=0&&q<=v.height-G&&U.readPixels(D,q,V,G,lt.convert(se),lt.convert(le),yt)}finally{let Nt=j!==null?H.get(j).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(v,D,q,V,G,yt,St,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct)if(D>=0&&D<=v.width-V&&q>=0&&q<=v.height-G){_.bindFramebuffer(U.FRAMEBUFFER,Ct);let Nt=v.textures[mt],se=Nt.format,le=Nt.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt);let It=ma(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,yt.byteLength,U.STREAM_READ),U.readPixels(D,q,V,G,lt.convert(se),lt.convert(le),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ye=j!==null?H.get(j).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ye);let ke=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zf(U,ke,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,yt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Me),U.deleteSync(ke),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,q=0){let V=Math.pow(2,-q),G=Math.floor(v.image.width*V),yt=Math.floor(v.image.height*V),St=D!==null?D.x:0,mt=D!==null?D.y:0;K.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,St,mt,G,yt),_.unbindTexture()},this.copyTextureToTexture=function(v,D,q=null,V=null,G=0,yt=0){let St,mt,Ct,Nt,se,le,It,Me,Ye,ke=v.isCompressedTexture?v.mipmaps[yt]:v.image;if(q!==null)St=q.max.x-q.min.x,mt=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,se=q.min.y,le=q.isBox3?q.min.z:0;else{let We=Math.pow(2,-G);St=Math.floor(ke.width*We),mt=Math.floor(ke.height*We),v.isDataArrayTexture?Ct=ke.depth:v.isData3DTexture?Ct=Math.floor(ke.depth*We):Ct=1,Nt=0,se=0,le=0}V!==null?(It=V.x,Me=V.y,Ye=V.z):(It=0,Me=0,Ye=0);let Ie=lt.convert(D.format),pn=lt.convert(D.type),wt;D.isData3DTexture?(K.setTexture3D(D,0),wt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),wt=U.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),wt=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let bn=_.getParameter(U.UNPACK_ROW_LENGTH),me=_.getParameter(U.UNPACK_IMAGE_HEIGHT),Gn=_.getParameter(U.UNPACK_SKIP_PIXELS),yi=_.getParameter(U.UNPACK_SKIP_ROWS),ns=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,ke.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ke.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),_.pixelStorei(U.UNPACK_SKIP_ROWS,se),_.pixelStorei(U.UNPACK_SKIP_IMAGES,le);let or=v.isDataArrayTexture||v.isData3DTexture,Re=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let We=H.get(v),is=H.get(D),Pe=H.get(We.__renderTarget),ss=H.get(is.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,Pe.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let lr=0;lr<Ct;lr++)or&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(v).__webglTexture,G,le+lr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(D).__webglTexture,yt,Ye+lr)),U.blitFramebuffer(Nt,se,St,mt,It,Me,St,mt,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||H.has(v)){let We=H.get(v),is=H.get(D);_.bindFramebuffer(U.READ_FRAMEBUFFER,I),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let Pe=0;Pe<Ct;Pe++)or?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,G,le+Pe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,We.__webglTexture,G),Re?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,is.__webglTexture,yt,Ye+Pe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,is.__webglTexture,yt),G!==0?U.blitFramebuffer(Nt,se,St,mt,It,Me,St,mt,U.COLOR_BUFFER_BIT,U.NEAREST):Re?U.copyTexSubImage3D(wt,yt,It,Me,Ye+Pe,Nt,se,St,mt):U.copyTexSubImage2D(wt,yt,It,Me,Nt,se,St,mt);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Re?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(wt,yt,It,Me,Ye,St,mt,Ct,Ie,pn,ke.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,yt,It,Me,Ye,St,mt,Ct,Ie,ke.data):U.texSubImage3D(wt,yt,It,Me,Ye,St,mt,Ct,Ie,pn,ke):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,yt,It,Me,St,mt,Ie,pn,ke.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,yt,It,Me,ke.width,ke.height,Ie,ke.data):U.texSubImage2D(U.TEXTURE_2D,yt,It,Me,St,mt,Ie,pn,ke);_.pixelStorei(U.UNPACK_ROW_LENGTH,bn),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Gn),_.pixelStorei(U.UNPACK_SKIP_ROWS,yi),_.pixelStorei(U.UNPACK_SKIP_IMAGES,ns),yt===0&&D.generateMipmaps&&U.generateMipmap(wt),_.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){Y=0,W=0,j=null,_.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var Ip={type:"change"},Yh={type:"start"},Lp={type:"end"},Fc=new Gs,Pp=new Sn,eb=Math.cos(70*yh.DEG2RAD),en=new C,Cn=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xh=1e-6,Oc=class extends Ja{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new An,this._lastTargetPosition=new C,this._quat=new An().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hr,this._sphericalDelta=new Hr,this._scale=1,this._panOffset=new C,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new C,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ib.bind(this),this._onPointerDown=nb.bind(this),this._onPointerUp=sb.bind(this),this._onContextMenu=hb.bind(this),this._onMouseWheel=ob.bind(this),this._onKeyDown=lb.bind(this),this._onTouchStart=cb.bind(this),this._onTouchMove=ub.bind(this),this._onMouseDown=rb.bind(this),this._onMouseMove=ab.bind(this),this._interceptControlDown=db.bind(this),this._interceptControlUp=fb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ae.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ip),this.update(),this.state=Ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;en.copy(e).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),s<-Math.PI?s+=Cn:s>Math.PI&&(s-=Cn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),e.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=en.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fc.origin.copy(this.object.position),Fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fc.direction))<eb?this.object.lookAt(this.target):(Pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fc.intersectPlane(Pp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xh||this._lastTargetPosition.distanceToSquared(this.target)>Xh?(this.dispatchEvent(Ip),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Cn/60*this.autoRotateSpeed*t:Cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){en.setFromMatrixColumn(e,0),en.multiplyScalar(-t),this._panOffset.add(en)}_panUp(t,e){this.screenSpacePanning===!0?en.setFromMatrixColumn(e,1):(en.setFromMatrixColumn(e,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(t),this._panOffset.add(en)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;en.copy(s).sub(this.target);let r=en.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function nb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ib(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lp),this.state=Ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rb(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ae.DOLLY;break;case ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ae.ROTATE}break;case ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Yh)}function ab(n){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ob(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(n.preventDefault(),this.dispatchEvent(Yh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Lp))}function lb(n){this.enabled!==!1&&this._handleKeyDown(n)}function cb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ae.TOUCH_ROTATE;break;case vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ae.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Yh)}function ub(n){switch(this._trackPointer(n),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ae.NONE}}function hb(n){this.enabled!==!1&&n.preventDefault()}function db(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Bc=class extends zs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ue;t.deleteAttribute("uv");let e=new we({side:hn}),i=new we,s=new xs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Si(t,i,6),o=new Xe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Bt(t,Qr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Bt(t,Qr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Bt(t,Qr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Bt(t,Qr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Bt(t,Qr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Bt(t,Qr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Qr(n){return new Xa({color:0,emissive:16777215,emissiveIntensity:n})}var pb=42e5,$h=[1,.8,.65,.5],Dp=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,mb=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function kp(n,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:i=null}={}){let s=window.devicePixelRatio||1,r;try{r=new kc({canvas:n,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=Je,r.toneMapping=Qa,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=Vl,r.shadowMap.autoUpdate=!1,r.setClearColor(new Wt(t),1);let a=new zs,o=new Jr(r);a.environment=o.fromScene(new Bc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new cn(32,1,4,1500);l.position.set(0,160,150),a.add(new $a(16777215,13616860,.35));let c=new Ka(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let h=new Bt(new wi(900,900),new Wa({opacity:.2}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,a.add(h);let f=new Oc(l,n);f.enableDamping=!0,f.dampingFactor=.14,f.rotateSpeed=.75,f.zoomSpeed=.9,f.panSpeed=.8,f.screenSpacePanning=!0,f.minDistance=9,f.maxDistance=1200,f.minPolarAngle=.06,f.maxPolarAngle=1.32,f.zoomToCursor=!0,f.cursor.set(0,6,-3),f.maxTargetRadius=85,f.target.set(0,4,0);function u(){let X=l.position.distanceTo(f.target),it=Math.min(4,Math.max(.4,X*.04));Math.abs(it-l.near)>it*.08&&(l.near=it,l.far=Math.max(900,X*6),l.updateProjectionMatrix())}let d=0,m=0,y=!1,g=!0,p=new Set,M=new Set,R=[],S=new Set,w=1,b=0,A=0,x=0,E=0,P=[],L=0,k=0,N=0;function I(){!d&&!m&&(d=requestAnimationFrame(W))}function O(){!d&&!m&&(m=setTimeout(()=>{m=0,I()},33))}function Y(X){Math.abs(X-A)<.01||(A=X,r.setPixelRatio(X),r.setSize(n.clientWidth||1,n.clientHeight||1,!1))}function W(X){d=0;let it=f.update();for(let Ft of S){let te=Math.min(1,(X-(Ft.bas??=X))/Ft.sure);Ft.adim(mb(te)),Ft.golge&&(g=!0),te>=1?(S.delete(Ft),Ft.bitti?.()):it=!0}for(let Ft of p)Ft(X)&&(it=!0);let pt=!1;for(let Ft of M)Ft(X,E?Math.min(100,X-E):33)&&(pt=!0);E=pt?X:0;let At=it||pt;clearTimeout(N),u(),Y(w*$h[b]),g&&(r.shadowMap.needsUpdate=!0,g=!1),r.render(a,l),ht(),it?j(X):(x=0,P=[]),it?I():pt&&O(),!At&&b>0&&(N=setTimeout(()=>{Y(w),r.render(a,l),ht()},300))}function j(X){if(x&&P.push(X-x),x=X,P.length<24)return;let it=P.reduce((pt,At)=>pt+At,0)/P.length;P=[],!(X-k<500)&&(it>26&&b<$h.length-1?(b++,L=0,k=X,e("kalite",b)):it<19&&b>0&&++L>=3&&(b--,L=0,k=X))}function $(){let X=n.clientWidth||1,it=n.clientHeight||1;w=Math.max(.5,Math.min(s,2,Math.sqrt(pb/(X*it)))),A=0,Y(w*$h[b]),l.aspect=X/it,gt();for(let pt of R)pt.w=0;Ce=0,ie=null,!y&&zt&&ae(zt,!0),I()}let Q=0;new ResizeObserver(()=>{clearTimeout(Q),Q=setTimeout($,110)}).observe(n);let rt=0;function gt(){let X=n.clientWidth||1,it=n.clientHeight||1;rt>0?l.setViewOffset(X,it,0,Math.min(rt,it*.9)/2,X,it):l.clearViewOffset(),l.updateProjectionMatrix()}function qt(X,it=!1){rt=Math.max(0,X||0),ie=null,gt(),!y&&zt?ae(zt,it):I()}f.addEventListener("change",I),f.addEventListener("start",()=>{y=!0,e("kamera-elle")});let zt=null,oe=new C(0,1,0),Z=new C,nt=new C,Mt=new C,Gt=new C,vt=new C,Jt=X=>X.isBox3?X:new Wn(new C(X[0],X[1],X[2]),new C(X[3],X[4],X[5]));function De(X,it){let pt=i?.()||{},At=Math.min(rt,it*.9),Ft=pt.sol??16,te=X-(pt.sag??16),Rt=pt.ust??16,pe=it-Math.max(pt.alt??16,At+12);if(te-Ft<80){let jt=X/2;Ft=jt-40,te=jt+40}if(pe-Rt<80){let jt=(Math.max(0,Rt)+Math.max(Rt+80,pe))/2;Rt=jt-40,pe=jt+40}return{x0:Ft,y0:Rt,x1:te,y1:pe,engel:pt.engel||[]}}function ne(X,it){let pt=n.clientWidth||1,At=n.clientHeight||1,Ft=Jt(X),te=new C(...it).normalize();Z.crossVectors(oe,te).normalize(),nt.crossVectors(te,Z),Mt.copy(te).negate();let Rt=ie=De(pt,At),pe=Math.tan(l.fov*Math.PI/360),jt=pe*(pt/At),de=Math.min(rt,At*.9)/At,He=(Rt.x0/pt*2-1)*jt,he=(Rt.x1/pt*2-1)*jt,Te=(1-Rt.y0/At*2-de)*pe,fn=(1-Rt.y1/At*2-de)*pe;Ft.getCenter(Gt);let sn=[],Vn=[],on=[];for(let Ke=0;Ke<8;Ke++)vt.set(Ke&1?Ft.max.x:Ft.min.x,Ke&2?Ft.max.y:Ft.min.y,Ke&4?Ft.max.z:Ft.min.z).sub(Gt),sn.push(vt.dot(Z)),Vn.push(vt.dot(nt)),on.push(vt.dot(Mt));let ln=0;for(let Ke=0;Ke<8;Ke++){ln=Math.max(ln,2-on[Ke]);for(let ni=0;ni<8;ni++)ln=Math.max(ln,(sn[Ke]-sn[ni]-he*on[Ke]+He*on[ni])/(he-He),(Vn[Ke]-Vn[ni]-Te*on[Ke]+fn*on[ni])/(Te-fn))}ln=Math.min(f.maxDistance,Math.max(f.minDistance,ln));let ks=(Ke,ni,ma)=>{let v=-1/0,D=1/0;for(let V=0;V<8;V++)v=Math.max(v,Ke[V]-ma*(on[V]+ln)),D=Math.min(D,Ke[V]-ni*(on[V]+ln));if(!(D>v))return(v+D)/2;let q=V=>{let G=-1/0,yt=1/0;for(let St=0;St<8;St++){let mt=(Ke[St]-V)/(on[St]+ln);mt>G&&(G=mt),mt<yt&&(yt=mt)}return ma-G-(yt-ni)};for(let V=0;V<32;V++){let G=(v+D)/2;q(G)>0?D=G:v=G}return(v+D)/2},es=ks(sn,He,he),_u=ks(Vn,fn,Te),Lo=Gt.clone().addScaledVector(Z,es).addScaledVector(nt,_u);return{merkez:Lo,konum:Lo.clone().addScaledVector(te,ln)}}function ae(X,it=!1){zt=X,y=!1;let{merkez:pt,konum:At}=ne(X.kutu,X.yon);if(it||Dp())return l.position.copy(At),f.target.copy(pt),f.update(),I(),Promise.resolve();let Ft=l.position.clone(),te=f.target.clone();return f.enabled=!1,Qt(650,Rt=>{l.position.lerpVectors(Ft,At,Rt),f.target.lerpVectors(te,pt,Rt),l.lookAt(f.target)}).then(()=>{f.enabled=!0,f.update()})}function xe(){if(!zt)return null;l.updateMatrixWorld();let X=n.clientWidth||1,it=n.clientHeight||1,pt=Jt(zt.kutu),At=1/0,Ft=-1/0,te=1/0,Rt=-1/0;for(let pe=0;pe<8;pe++){vt.set(pe&1?pt.max.x:pt.min.x,pe&2?pt.max.y:pt.min.y,pe&4?pt.max.z:pt.min.z).project(l);let jt=(vt.x+1)/2*X,de=(1-vt.y)/2*it;At=Math.min(At,jt),Ft=Math.max(Ft,jt),te=Math.min(te,de),Rt=Math.max(Rt,de)}return{kutu:{x0:At,y0:te,x1:Ft,y1:Rt},guvenli:De(X,it),w:X,h:it}}function Qt(X,it,pt=!1){return Dp()?(it(1),pt&&(g=!0),I(),Promise.resolve()):new Promise(At=>{S.add({sure:X,adim:it,bitti:At,golge:pt}),I()})}let be=n.parentElement.querySelector(".etiketler"),Oe=n.parentElement.querySelector(".isaretler")||be,Ge="http://www.w3.org/2000/svg",ce=document.createElementNS(Ge,"svg");ce.setAttribute("class","cizgiler"),ce.setAttribute("aria-hidden","true"),be.appendChild(ce);let Xt=[],U=[],Ce=0,ie=null,T=new C,_=new C,z=new C,H=X=>{for(let it=X;it;it=it.parent)if(!it.visible)return!1;return!0};function K(X){for(let it of R)it.el.remove(),it.cizgi.remove(),it.nokt.remove();R.length=0;for(let{nokta:it,metin:pt,tur:At}of X){let Ft=document.createElement("div");Ft.className="etiket"+(At?` etiket-${At}`:""),Ft.textContent=pt,be.appendChild(Ft);let te=document.createElementNS(Ge,"line"),Rt=document.createElementNS(Ge,"circle");Rt.setAttribute("r","4.5"),ce.append(te,Rt),R.push({el:Ft,nokta:it,cizgi:te,nokt:Rt,w:0,h:0})}I()}function at(X){for(let it of Xt)it.el.remove();Xt.length=0;for(let it of X)it.el.hidden=!0,Oe.appendChild(it.el),Xt.push({...it,acik:!1});U=Xt.map((it,pt)=>[it,pt]).sort((it,pt)=>(pt[0].oncelik??1)-(it[0].oncelik??1)||it[1]-pt[1]).map(([it])=>it),Ce=0,ie=null,I()}function ut(X,it){for(let pt=Xt.length-1;pt>=0;pt--){let At=Xt[pt].el;if(At.hidden)continue;let Ft=At.getBoundingClientRect(),te=Ft.width/2;if(te&&Math.hypot(X-Ft.left-te,it-Ft.top-Ft.height/2)<=te+2)return At}return null}function J(X,it){if(!Xt.length)return;Ce||(Ce=parseFloat(getComputedStyle(Oe).getPropertyValue("--isaret"))||44);let pt=ie||(ie=De(X,it)),At=Ce+4,Ft=[],te=document.activeElement,Rt=Math.tan(l.fov*Math.PI/360),pe=Xt.some(jt=>jt.el===te)?[...U].sort((jt,de)=>(de.el===te)-(jt.el===te)):U;for(let jt of pe){let de=!1,He=0,he=0;(!jt.nesne||H(jt.nesne))&&(jt.nesne?_.copy(jt.yerel).applyMatrix4(jt.nesne.matrixWorld):_.copy(jt.nokta),z.copy(_).applyMatrix4(l.matrixWorldInverse),z.z<-l.near&&(T.copy(_).project(l),He=(T.x+1)/2*X,he=(1-T.y)/2*it,de=He>=pt.x0&&He<=pt.x1&&he>=pt.y0&&he<=pt.y1&&!pt.engel.some(Te=>He>Te.x0-At/2&&He<Te.x1+At/2&&he>Te.y0-At/2&&he<Te.y1+At/2),de&&jt.adim&&(de=jt.adim*it/(2*-z.z*Rt)>=Ce),de&&jt.el!==te&&(de=!Ft.some(Te=>Math.abs(Te.x-He)<At&&Math.abs(Te.y-he)<At)))),de&&(Ft.push({x:He,y:he}),jt.el.style.transform=`translate3d(${Math.round(He)}px,${Math.round(he)}px,0)`),jt.acik!==de&&(jt.acik=de,jt.el.hidden=!de)}}let et=(X,it,pt)=>(T.copy(X).project(l),{x:(T.x+1)/2*it,y:(1-T.y)/2*pt,gor:T.z<1&&Math.abs(T.x)<1.05&&Math.abs(T.y)<1.05});function ht(){let X=n.clientWidth,it=n.clientHeight;if(J(X,it),!R.length)return;ce.setAttribute("width",X),ce.setAttribute("height",it);let pt=[],At=8,Ft=30,te=R.map(Rt=>({e:Rt,p:et(Rt.nokta,X,it)})).sort((Rt,pe)=>pe.p.y-Rt.p.y);for(let{e:Rt,p:pe}of te){Rt.w||(Rt.w=Rt.el.offsetWidth,Rt.h=Rt.el.offsetHeight);let jt=Math.min(Math.max(pe.x-Rt.w/2,6),X-Rt.w-6),de=pe.y-Ft-Rt.h,He=!1;for(let Te=0;Te<6;Te++){let fn=pt.find(sn=>jt<sn.x+sn.w+At&&jt+Rt.w+At>sn.x&&de<sn.y+sn.h+At&&de+Rt.h+At>sn.y);if(!fn)break;if(de=fn.y-Rt.h-At,de<4){de=pe.y+Ft,He=!0,jt=Math.min(Math.max(fn.x+fn.w+At,6),X-Rt.w-6);break}}pt.push({x:jt,y:de,w:Rt.w,h:Rt.h});let he=pe.gor?"1":"0";Rt.el.style.opacity=he,Rt.cizgi.style.opacity=he,Rt.nokt.style.opacity=he,Rt.el.style.transform=`translate3d(${Math.round(jt)}px,${Math.round(de)}px,0)`,Rt.cizgi.setAttribute("x1",pe.x.toFixed(1)),Rt.cizgi.setAttribute("y1",pe.y.toFixed(1)),Rt.cizgi.setAttribute("x2",(jt+Rt.w/2).toFixed(1)),Rt.cizgi.setAttribute("y2",(He?de:de+Rt.h).toFixed(1)),Rt.nokt.setAttribute("cx",pe.x.toFixed(1)),Rt.nokt.setAttribute("cy",pe.y.toFixed(1))}}let Pt=new Xs,_t=new ot,dt=[],Dt=new Set,Ut=new C,$t=new C,F=new C,ft=X=>!X.isMesh||X.isInstancedMesh||X===h||!H(X)?!1:(Array.isArray(X.material)?X.material:[X.material]).some(pt=>pt&&pt.visible!==!1&&pt.blending!==Ai&&!(pt.transparent&&pt.opacity<.2));function tt(X,it,pt=1){_t.set(X,it),Pt.setFromCamera(_t,l);let At=Pt.intersectObjects(a.children,!0).find(he=>ft(he.object)),Ft=At?At.point:null,te=At?At.distance:1/0,Rt=n.clientHeight||1,pe=Math.tan(l.fov*Math.PI/360),jt=null,de=1/0,He=1/0;for(let he of dt){let Te=he.userData;if(Te.etkin===!1||!H(he))continue;let fn=!1;if(Ft&&Te.yari){Ut.copy(Ft),he.worldToLocal(Ut),$t.setFromMatrixScale(he.matrixWorld);let[on,ln,ks]=Te.yari,es=.25;fn=Math.abs(Ut.x)<=on+es/$t.x&&Math.abs(Ut.y)<=ln+es/$t.y&&Math.abs(Ut.z)<=ks+es/$t.z}if(!fn&&Te.ince&&he.isMesh){let on=Pt.intersectObject(he,!1)[0];fn=!!on&&on.distance<=te+.5}if(!fn||(F.setFromMatrixPosition(he.matrixWorld),Te.minPx&&Te.minAdim&&(z.copy(F).applyMatrix4(l.matrixWorldInverse),Te.minAdim*Rt/(2*Math.max(.01,-z.z)*pe)<Te.minPx*pt)))continue;let sn=Te.hacim??1/0,Vn=Ft?F.distanceToSquared(Ft):0;(sn<de*.99||sn<=de*1.01&&Vn<He)&&(jt=he,de=sn,He=Vn)}return{vekil:jt,nokta:Ft?Ft.clone():jt?new C().setFromMatrixPosition(jt.matrixWorld):null}}let lt=new Set,xt=null,st=!1;n.addEventListener("pointerdown",X=>{if(lt.add(X.pointerId),lt.size>1){st=!0,xt=null;return}xt=st?null:{x:X.clientX,y:X.clientY,t:performance.now(),id:X.pointerId}}),n.addEventListener("pointerup",X=>{let it=xt;if(lt.delete(X.pointerId),lt.size||(st=!1),!it||it.id!==X.pointerId||(xt=null,Math.hypot(X.clientX-it.x,X.clientY-it.y)>9||performance.now()-it.t>600))return;let pt=Xt.length?ut(X.clientX,X.clientY):null;if(pt){pt.click();return}let At=n.getBoundingClientRect(),Ft=X.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,te=tt((X.clientX-At.left)/At.width*2-1,-((X.clientY-At.top)/At.height)*2+1,Ft);for(let Rt of Dt)Rt(te.vekil?te.vekil.userData:null,te.nokta,te.vekil)}),n.addEventListener("pointercancel",X=>{lt.delete(X.pointerId),lt.size||(st=!1),xt=null});let kt=null,Tt=X=>{X!==kt&&(kt?.classList.remove("ustunde"),X?.classList.add("ustunde"),kt=X,n.style.cursor=X?"pointer":"")};return n.addEventListener("pointermove",X=>{X.pointerType==="mouse"&&!X.buttons&&Tt(Xt.length?ut(X.clientX,X.clientY):null)}),n.addEventListener("pointerleave",()=>Tt(null)),n.addEventListener("contextmenu",X=>X.preventDefault()),n.addEventListener("webglcontextlost",X=>{X.preventDefault(),e("baglam-kaybi")}),n.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),g=!0,I()}),$(),{renderer:r,scene:a,camera:l,controls:f,hedefler:dt,iste:I,kameraGit:ae,tween:Qt,etiketKoy:K,isaretKoy:at,gorunurAlan:qt,golgeYenile:()=>{g=!0,I()},kareGuncelleyici:X=>(p.add(X),I(),()=>p.delete(X)),yavasGuncelleyici:X=>(M.add(X),I(),()=>M.delete(X)),dokunmaDinle:X=>Dt.add(X),sec:tt,kadrajOlc:xe,guvenliYenile:()=>{ie=null,Ce=0,I()},yakinlas:X=>{let it=l.position.clone().sub(f.target),pt=Math.min(f.maxDistance,Math.max(f.minDistance,it.length()*X)),At=l.position.clone(),Ft=f.target.clone().addScaledVector(it.normalize(),pt);return y=!0,Qt(260,te=>l.position.lerpVectors(At,Ft,te))},arkaPlan:X=>{r.setClearColor(new Wt(X),1),I()},sonHedef:()=>zt,kalite:()=>({kademe:b,piksel:Math.round(A*100)/100,tam:Math.round(w*100)/100})}}function Up(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new je,c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Np(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][u]);let m=Np(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Np(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new xn(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let y=h.getComponent(u,m);o.setComponent(u+f,m,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var fo=new C;function Zn(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;fo.copy(t),fo[i]=0,fo.normalize();let c=.5*a/(a+o),h=1-fo.angleTo(n)/l;return Math.sign(fo[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Yi=class n extends Ue{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,h=new C(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,y=new C,g=.5/a;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),d[M+0]=Zn(y,c,"z","y",r,i),d[M+1]=1-Zn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[M+0]=1-Zn(y,c,"z","y",r,i),d[M+1]=1-Zn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[M+0]=1-Zn(y,c,"x","z",r,t),d[M+1]=Zn(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),d[M+0]=1-Zn(y,c,"x","z",r,t),d[M+1]=1-Zn(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),d[M+0]=1-Zn(y,c,"x","y",r,t),d[M+1]=1-Zn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[M+0]=Zn(y,c,"x","y",r,t),d[M+1]=1-Zn(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var En={x:0,z:32,w:68.58,d:53.34},Lt={x:0,z:-38,w:82.5,d:54.5,h:8.5},Ot=4,pi=Ot+8.5,qe=Lt.h,Ci=2.54,gb=n=>En.x-En.w/2+n,_b=n=>En.z-En.d/2+n,Fe=(n,t,e=Ot)=>new C(gb(n),e,_b(t)),ta={SCL:21.336,SDA:23.876,AREF:26.416,"GND-D":28.956,13:31.496,12:34.036,11:36.576,10:39.116,9:41.656,8:44.196,7:48.26,6:50.8,5:53.34,4:55.88,3:58.42,2:60.96,1:63.5,0:66.04},_o={NC:26.416,IOREF:28.956,RESET:31.496,"3.3V":34.036,"5V":36.576,GND1:39.116,GND2:41.656,VIN:44.196},xo={A0:49.276,A1:51.816,A2:54.356,A3:56.896,A4:59.436,A5:61.976},mo=2.54,As=50.8;function qh(n){let t=String(n);if(t in ta)return Fe(ta[t],mo,pi);if(t in _o)return Fe(_o[t],As,pi);if(t in xo)return Fe(xo[t],As,pi);throw new Error("bilinmeyen pin "+n)}var Op=["3","5","6","9","10","11"];function xb(n){let t=String(n);return t==="13"?"pin-13":t==="0"||t==="1"?"pin-rx-tx":Op.includes(t)?"pin-pwm":/^\d+$/.test(t)?"pin-dijital":t.startsWith("GND")?"pin-gnd":{"5V":"pin-5v","3.3V":"pin-3v3",VIN:"pin-vin",AREF:"pin-aref",IOREF:"pin-ioref",RESET:"pin-reset",SDA:"pin-sda-scl",SCL:"pin-sda-scl"}[t]||(/^A\d$/.test(t)?"pin-analog":null)}function Fp(n){let t=String(n);return t==="0"?"0. pin (RX)":t==="1"?"1. pin (TX)":Op.includes(t)?`${t}. pin (~${t})`:/^\d+$/.test(t)?`${t}. pin`:t.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[t]||t}function ea(n,t,e,i,s=0,r=0,a=0){let o=new Xe;return o.position.set(s,r,a),o.userData={...n,yari:[t/2,e/2,i/2],hacim:n.hacim??t*e*i},o.updateMatrixWorld(),o}var Vc={a:13.97,b:11.43,c:8.89,d:6.35,e:3.81,f:-3.81,g:-6.35,h:-8.89,i:-11.43,j:-13.97},Fn=n=>Lt.x-36.83+(n-1)*Ci,Js=(n,t,e=qe)=>new C(Fn(n),e,Lt.z+Vc[t]),Ts={"yakin-":19.05,"yakin+":21.59,"uzak-":-19.05,"uzak+":-21.59},go=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];function Bp(n,t,e,i=qe){let s=go.reduce((r,a)=>Math.abs(a-e)<Math.abs(r-e)?a:r,go[0]);return new C(Fn(s),i,Lt.z+Ts[n+t])}function On(n,t,e,i,s,r){let a=new Ue(n,t,e);return a.translate(i,s,r),a}function po(n,t,e,i,s,r,a){let o=new Yi(n,t,e,2,i);return o.translate(s,r,a),o}function Rs(n){n.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}function zc(n,t,e,i,s,r=16){let a=new Wi(n,n,t,r);return a.translate(e,i,s),a}function Ks(n,t){let e=new Bt(Up(n.map(i=>i.index?i.toNonIndexed():i),!1),t);return e.matrixAutoUpdate=!1,e}function yo(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var zp=1;function Gc(n){let t=new ds(n);return t.colorSpace=Je,t.anisotropy=zp,t}var vo=(()=>{let n=null;return()=>{if(n)return n;let[t,e]=yo(64,64),i=e.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),n=new ds(t),n}})(),_e={};function bo(){return _e.hazir||Object.assign(_e,{hazir:!0,pcbKenar:new we({color:679785,roughness:.45}),siyah:new we({color:2500140,roughness:.55}),koyu:new yn({color:789519}),metal:new we({color:14014686,metalness:1,roughness:.28}),altin:new we({color:14858588,metalness:1,roughness:.32}),cip:new we({color:1776416,roughness:.72}),ayak:new we({color:3816e3,roughness:.9}),bbYan:new we({color:15657955,roughness:.78}),bbDelik:new yn({color:3421242}),serit:new we({color:13225170,metalness:.9,roughness:.35}),vurgu:new yn({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new Ba({color:6962672}),secim:new yn({color:1483594,transparent:!0,opacity:.85,depthWrite:!1}),gorunmez:new yn({visible:!1})}),_e}function yb(){let t=Math.round(2048*En.d/En.w),e=2048/En.w,[i,s]=yo(2048,t);s.fillStyle="#0d7783",s.fillRect(0,0,2048,t),s.strokeStyle="rgba(160,235,235,0.16)",s.lineWidth=.32*e,s.lineCap="round";let r=u=>{s.beginPath(),u.forEach(([d,m],y)=>y?s.lineTo(d*e,m*e):s.moveTo(d*e,m*e)),s.stroke()};for(let u=0;u<14;u++){let d=31.5+u*2.54>46?33+u*2.54:31.5+u*2.54;r([[d,4.5],[d,9+u%4],[30+u*2.2,30],[30+u*2.2,33]])}for(let u=0;u<6;u++)r([[49.3+u*2.54,48.5],[49.3+u*2.54,44],[46+u*2.6,40.6]]);r([[12,15],[18,15],[20,17]]),r([[12,18],[17,22],[21,24]]),r([[8,44],[14,44],[16,47]]),r([[36.5,48.5],[36.5,44],[24,40],[14,40]]),r([[39,48.5],[39,45],[28,45]]);let a="#f2f7f7";s.strokeStyle=a,s.fillStyle=a,s.lineWidth=.22*e;let o=(u,d,m,y)=>s.strokeRect(u*e,d*e,(m-u)*e,(y-d)*e);o(20,1.2,45.5,3.9),o(47,1.2,67.3,3.9),o(25.1,49.5,45.5,52.1),o(48,49.5,63.3,52.1);let l=(u,d,m,y,{don:g=0,hiza:p="center",kalin:M=!0}={})=>{s.save(),s.translate(d*e,m*e),s.rotate(g),s.font=`${M?700:500} ${y*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign=p,s.textBaseline="middle",s.fillText(u,0,0),s.restore()},c=-Math.PI/2,h={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX 1",0:"RX 0"};for(let[u,d]of Object.entries(h))l(d,ta[u],4.4,1.25,{don:c,hiza:"right"});l("DIGITAL (PWM~)",46,10.6,1.5);let f={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[u,d]of Object.entries(f))l(d,_o[u],48.3,1.2,{don:c,hiza:"left"});for(let[u,d]of Object.entries(xo))l(u,d,48.3,1.25,{don:c,hiza:"left"});l("POWER",35.3,42,1.5),l("ANALOG IN",55.6,42,1.5),l("L",26.6,10.6,1.2),l("TX",25.9,13.3,1),l("RX",25.9,15.4,1),l("ON",64.4,10.6,1.2),l("RESET",7.4,10.3,1.1),l("ICSP",64.9,21.9,1.1);for(let[u,d]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])s.fillStyle="#d9b75f",s.beginPath(),s.arc(u*e,d*e,1.75*e,0,Math.PI*2),s.fill(),s.fillStyle="#16191b",s.beginPath(),s.arc(u*e,d*e,1.15*e,0,Math.PI*2),s.fill();return Gc(i)}function vb(){let[n,t]=yo(512,108);return t.fillStyle="#1c1c21",t.fillRect(0,0,512,108),t.fillStyle="#9da2aa",t.font='600 34px "DejaVu Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("ATMEGA328P",270,56),t.beginPath(),t.arc(22,54,12,-Math.PI/2,Math.PI/2),t.fillStyle="#0e0e11",t.fill(),Gc(n)}function Vp(n){bo();let t=new _n;t.name="kart";let e=new we({map:yb(),roughness:.4}),i=new Bt(new Yi(En.w,1.6,En.d,2,.5),[_e.pcbKenar,_e.pcbKenar,e,_e.pcbKenar,_e.pcbKenar,_e.pcbKenar]);i.position.set(En.x,Ot-.8,En.z),t.add(i);let s=[],r=[],a=[],o=[],l=[];for(let[N,I]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]]){let O=Fe(N,I,1.2);l.push(zc(1.6,2.4,O.x,O.y,O.z,10))}let c=(N,I,O)=>{let Y=N.map(Q=>I[Q]),W=Math.min(...Y)-1.27,j=Math.max(...Y)+1.27,$=Fe((W+j)/2,O,Ot+4.25);s.push(po(j-W,8.5,2.54,.35,$.x,$.y,$.z));for(let Q of Y){let B=Fe(Q,O,pi+.02);r.push(On(1,.04,1,B.x,B.y,B.z))}return{x1:W,x2:j,bz:O}},h=c(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],ta,mo),f=c(["7","6","5","4","3","2","1","0"],ta,mo),u=c(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],_o,As),d=c(["A0","A1","A2","A3","A4","A5"],xo,As),m=Fe(1.65,15.24,Ot+5.45);a.push(po(16,10.9,12,.6,m.x,m.y,m.z)),m=Fe(-6.37,15.24,Ot+5.3),r.push(On(.04,7.2,8.2,m.x,m.y,m.z)),m=Fe(5.2,44.9,Ot+5.5),s.push(po(14,11,9,1,m.x,m.y,m.z));let y=new Hs(3.1,20);y.rotateY(-Math.PI/2),m=Fe(-1.83,44.9,Ot+5.8),y.translate(m.x,m.y,m.z),r.push((y.toNonIndexed,y)),m=Fe(44.5,36.8,Ot+1.3),s.push(po(37.5,2.6,9.2,.4,m.x,m.y,m.z));for(let N=0;N<14;N++)for(let I of[-1,1]){let O=Fe(27.99+N*2.54,36.8+I*3.85,Ot+3.2);a.push(On(.55,1.6,.35,O.x,O.y,O.z))}let g=new Bt(new Yi(35.56,3.3,7.4,2,.4),[_e.cip,_e.cip,new we({map:vb(),roughness:.72}),_e.cip,_e.cip,_e.cip]);g.position.copy(Fe(44.5,36.8,Ot+2.6+1.65)),t.add(g),m=Fe(20,17.5,Ot+.45),s.push(On(5,.9,5,m.x,m.y,m.z)),m=Fe(21,27,Ot+1.8),a.push(On(10.5,3.5,4.4,m.x,m.y,m.z)),m=Fe(15,47.5,Ot+.8),s.push(On(6.5,1.6,3.5,m.x,m.y,m.z)),m=Fe(15,44.6,Ot+.2),a.push(On(3.2,.3,3,m.x,m.y,m.z));for(let[N,I]of[[13,31.5],[19.5,37.5]]){let O=Fe(N,I,Ot+2.75);s.push(zc(3.15,5.5,O.x,O.y,O.z,18)),a.push(zc(3,.2,O.x,Ot+5.55,O.z,18))}m=Fe(7.4,5.2,Ot+1.6),s.push(po(6,3.2,6,.5,m.x,m.y,m.z)),a.push(On(6.1,.3,6.1,m.x,Ot+3.35,m.z));let p=zc(1.7,1.3,m.x,Ot+4.1,m.z,18);m=Fe(64.87,26.67,Ot+1.25),s.push(On(5.08,2.5,7.62,m.x,m.y,m.z));for(let N of[63.6,66.14])for(let I of[24.13,26.67,29.21]){let O=Fe(N,I,Ot+5.5);o.push(On(.64,6,.64,O.x,O.y,O.z))}t.add(Ks(l,_e.ayak),Ks(s,_e.siyah),Ks(r,_e.koyu),Ks(a,_e.metal),Ks(o,_e.altin));let M=new Bt(p,new we({color:14207392,roughness:.5}));t.add(M);let R=(N,I,O)=>{let Y=new we({color:new Wt(O).multiplyScalar(.45),emissive:O,emissiveIntensity:0,roughness:.3}),W=new Bt(new Ue(1.6,.6,.85),Y);W.position.copy(Fe(N,I,Ot+.3)),t.add(W);let j=new Vs(new hs({map:vo(),color:O,blending:Ai,depthWrite:!1,transparent:!0}));return j.scale.set(6,6,1),j.position.copy(W.position).add(new C(0,.8,0)),j.visible=!1,t.add(j),$=>{Y.emissiveIntensity=$?1:0,Y.color.set($?O:new Wt(O).multiplyScalar(.45)),j.visible=$}},S=R(28.5,10.6,16754470),w=R(61.5,10.6,4448378);R(28.5,13.3,16766287),R(28.5,15.4,16766287),Rs(t);let b=(N,I,O,Y,W,j)=>{let $=Fe(N,I,O);return[$.x,$.y,$.z,Y,W,j]},A={kart:[En.x,7,En.z,En.w,14,En.d],usb:b(1.65,15.24,Ot+5.45,17,11.6,12.8),"guc-girisi":b(5.2,44.9,Ot+5.5,15,11.8,9.8),mikrodenetleyici:b(44.5,36.8,Ot+3,38.5,6.2,10.2),"dijital-pinler":b((h.x1+f.x2)/2,mo,Ot+4.3,f.x2-h.x1+1.2,9.4,3.6),"analog-pinler":b((d.x1+d.x2)/2,As,Ot+4.3,d.x2-d.x1+1.2,9.4,3.6),"guc-pinleri":b((u.x1+u.x2)/2,As,Ot+4.3,u.x2-u.x1+1.2,9.4,3.6),reset:b(7.4,5.2,Ot+2.4,7,5,7)},x=[],E=(N,I)=>{let[O,Y,W,j,$,Q]=I,B=ea({parca:N.kesif,...N},j,$,Q,O,Y,W);x.push(B),n.push(B)};E({kesif:"kart",parca:"kart"},A.kart);for(let N of["usb","guc-girisi","mikrodenetleyici","dijital-pinler","analog-pinler","guc-pinleri","reset"])E({kesif:N},A[N]);E({kesif:"usb-cipi"},b(20,17.5,Ot+1.1,7,2.6,7)),E({kesif:"kristal"},b(21,27,Ot+1.9,11.5,4.2,5.4)),E({kesif:"regulator"},b(15,46.2,Ot+1.1,7.4,2.6,6.8));for(let[N,I]of[[13,31.5],[19.5,37.5]])E({kesif:"kondansator"},b(N,I,Ot+2.9,7.2,6.2,7.2));E({kesif:"icsp"},b(64.87,26.67,Ot+4.4,6.4,9.2,9)),E({kesif:"led-l"},b(27.6,10.6,Ot+.8,4.6,1.8,2.3)),E({kesif:"led-txrx"},b(27.3,14.35,Ot+.8,4.8,1.8,4.4)),E({kesif:"led-on"},b(62.9,10.6,Ot+.8,5.4,1.8,2.3));for(let[N,I]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])E({kesif:"montaj-deligi"},b(N,I,Ot+.3,4.4,1.6,4.4));let P=[];for(let[N,I]of[[ta,mo],[_o,As],[xo,As]])for(let[O,Y]of Object.entries(N)){let W=xb(O);if(!W)continue;let j=pi+1.2-Ot;E({kesif:W,parca:"pin",pin:O,ozel:Fp(O),minAdim:Ci,minPx:12},b(Y,I,Ot+j/2,2.5,j,2.6)),P.push({ad:O,kesif:W,ozel:Fp(O),nokta:Fe(Y,I,pi+.6)})}let L=(N,I,O)=>Fe(N,I,O),k=[{id:"usb",nokta:L(1.65,15.24,Ot+12)},{id:"guc-girisi",nokta:L(5.2,44.9,Ot+12.2)},{id:"mikrodenetleyici",nokta:L(44.5,36.8,Ot+6.6)},{id:"usb-cipi",nokta:L(20,17.5,Ot+1.6)},{id:"kristal",nokta:L(21,27,Ot+4.3)},{id:"regulator",nokta:L(15,46.5,Ot+2.4)},{id:"kondansator",nokta:L(13,31.5,Ot+6.2)},{id:"reset",nokta:L(7.4,5.2,Ot+5.4)},{id:"icsp",nokta:L(64.87,26.67,Ot+9.4)},{id:"led-l",nokta:L(28.5,10.6,Ot+1)},{id:"led-txrx",nokta:L(28.5,14.35,Ot+1)},{id:"led-on",nokta:L(61.5,10.6,Ot+1)},{id:"dijital-pinler",nokta:L(46,10.6,Ot+.8)},{id:"analog-pinler",nokta:L(55.6,42,Ot+.8)},{id:"guc-pinleri",nokta:L(35.3,42,Ot+.8)},{id:"montaj-deligi",nokta:L(66.04,17.78,Ot+.8)}];return{grup:t,alanlar:A,ledL:S,ledOn:w,vekiller:x,pinler:P,kesifNoktalari:k}}function bb(){let t=Math.round(2048*Lt.d/Lt.w),e=2048/Lt.w,[i,s]=yo(2048,t),r=o=>(o+Lt.w/2)*e,a=o=>(o+Lt.d/2)*e;s.fillStyle="#f4f2ec",s.fillRect(0,0,2048,t),s.fillStyle="#dcd8cf",s.fillRect(0,a(-1.5),2048,3*e),s.fillStyle="#cfcac0",s.fillRect(0,a(-.35),2048,.7*e);for(let o of[1,-1])s.fillStyle="#d23b3b",s.fillRect(r(-37),a(o*23.6)-.3*e,r(37)-r(-37),.6*e),s.fillStyle="#2f62c9",s.fillRect(r(-37),a(o*16.9)-.3*e,r(37)-r(-37),.6*e);s.font=`700 ${2.1*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";for(let o of[1,-1])for(let l of[-39.4,39.4])s.fillStyle="#d23b3b",s.fillText("+",r(l),a(o*Ts["yakin+"])),s.fillStyle="#2f62c9",s.fillText("\u2212",r(l),a(o*Ts["yakin-"]));s.fillStyle="#8a8478",s.font=`600 ${1.45*e}px "DejaVu Sans", Arial, sans-serif`;for(let[o,l]of Object.entries(Vc))for(let c of[-39.3,39.3])s.fillText(o,r(c),a(l));for(let o of[1,5,10,15,20,25,30])for(let l of[1,-1])s.fillText(String(o),r(-36.83+(o-1)*Ci),a(l*15.45));return Gc(i)}function Gp(n){bo();let t=new _n;t.name="breadboard";let e=new we({map:bb(),roughness:.78}),i=_e.bbYan.clone(),s=[i,i,e,i,i,i],r=new Bt(new Yi(Lt.w,Lt.h,Lt.d,3,1.1),s);r.position.set(Lt.x,Lt.h/2,Lt.z),t.add(r);let a=[],o=b=>a.push(On(1.15,.04,1.15,b.x,qe+.02,b.z));for(let b=1;b<=30;b++)for(let A of Object.keys(Vc))o(Js(b,A));for(let b of Object.keys(Ts))for(let A of go)o(new C(Fn(A),0,Lt.z+Ts[b]));t.add(Ks(a,_e.bbDelik));let l=[];for(let b=1;b<=30;b++)for(let A of[1,-1])l.push(On(1.5,1.1,11.4,Fn(b),qe-2.3,Lt.z+A*8.89));for(let b of Object.values(Ts))l.push(On(Fn(30)-Fn(2)+1.6,1.1,1.5,Lt.x,qe-2.3,Lt.z+b));let c=Ks(l,_e.serit);c.visible=!1,t.add(c),Rs(t);let h=new Ue(1.7,.06,1.7),f=new Si(h,_e.secim,25);f.count=0,f.frustumCulled=!1,t.add(f);let u=new ge;function d(b){f.count=b.length,b.forEach((A,x)=>{u.makeTranslation(A.x,qe+.06,A.z),f.setMatrixAt(x,u)}),f.instanceMatrix.needsUpdate=!0}function m(b){let A=b.x-Lt.x,x=b.z-Lt.z,E=Math.round((A+36.83)/Ci)+1,P=null,L=1.6;for(let[k,N]of Object.entries(Vc)){let I=Math.hypot(A-(-36.83+(E-1)*Ci),x-N);E>=1&&E<=30&&I<L&&(L=I,P={tur:"sutun",sutun:E,satir:k})}for(let[k,N]of Object.entries(Ts))Math.abs(x-N)<1.3&&go.some(I=>Math.abs(A-(-36.83+(I-1)*Ci))<1.3)&&(P={tur:"ray",ray:k});if(!P)return null;if(P.tur==="sutun"){let k="abcde".includes(P.satir)?"abcde":"fghij";return{...P,delikler:[...k].map(N=>Js(P.sutun,N)),ad:`${P.sutun}. s\xFCtun, ${k[0]}-${k[4]} sat\u0131rlar\u0131`}}return{...P,delikler:go.map(k=>new C(Fn(k),0,Lt.z+Ts[P.ray])),ad:P.ray.endsWith("+")?"Art\u0131 (+) ray\u0131":"Eksi (\u2212) ray\u0131"}}let y={breadboard:[Lt.x,Lt.h/2,Lt.z,Lt.w,Lt.h+1,Lt.d],"bb-yakin-raylar":[Lt.x,qe,Lt.z+20.32,76,1.4,5.6],"bb-satirlar":[Lt.x,qe,Lt.z,77,1.4,31],"bb-kanal":[Lt.x,qe,Lt.z,80,1.2,3.2]},g=[],p=(b,A,x,E,P,L,k)=>{let N=ea({parca:b.kesif,bb:!0,...b},A,x,E,P,L,k);g.push(N),n.push(N)},M=qe-.1,R=.8;p({kesif:"breadboard"},Lt.w,Lt.h+1,Lt.d,Lt.x,Lt.h/2,Lt.z);for(let b=1;b<=30;b++)for(let[A,x]of[[1,"a-e"],[-1,"f-j"]])p({kesif:"serit",ozel:`${b}. s\xFCtun, ${x} sat\u0131rlar\u0131`,minAdim:Ci,minPx:12},2.5,R,12.7,Fn(b),M,Lt.z+A*8.89);for(let b of[1,-1]){let A=b>0?"karta yak\u0131n taraf":"uzak taraf";p({kesif:"arti-ray",ozel:A,minAdim:Ci,minPx:8},81.2,R,4.08,Lt.x,M,Lt.z+b*22.36),p({kesif:"eksi-ray",ozel:A,minAdim:Ci,minPx:8},81.2,R,4.02,Lt.x,M,Lt.z+b*18.31),p({kesif:"koordinat",ozel:"s\xFCtun numaralar\u0131",minAdim:1.06,minPx:6},76.2,R,1.06,Lt.x,M,Lt.z+b*15.77),p({kesif:"koordinat",ozel:"sat\u0131r harfleri",minAdim:Ci,minPx:8},2.4,R,30.5,Lt.x+b*39.3,M,Lt.z)}p({kesif:"orta-kanal"},76.2,R,5,Lt.x,M,Lt.z);let S=(b,A,x=qe+1)=>new C(b,x,A),w=[{id:"breadboard",nokta:S(Fn(6),Lt.z-8.89)},{id:"serit",nokta:S(Fn(20),Lt.z-8.89),ozel:"20. s\xFCtun, f-j sat\u0131rlar\u0131"},{id:"orta-kanal",nokta:S(Fn(27),Lt.z,qe+.6)},{id:"koordinat",nokta:S(Lt.x-39.3,Lt.z+8.89)},{id:"arti-ray",nokta:S(Fn(28),Lt.z+21.59),ozel:"karta yak\u0131n taraf"},{id:"eksi-ray",nokta:S(Fn(4),Lt.z+19.05),ozel:"karta yak\u0131n taraf"}];return{grup:t,alanlar:y,grupBul:m,grupGoster:d,vekiller:g,kesifNoktalari:w,rontgen(b){c.visible=b;for(let A of new Set(s))A.transparent=b,A.opacity=b?.3:1,A.depthWrite=!b,A.needsUpdate=!0;r.castShadow=!b}}}var Mb={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"};function Hp(n,t){bo();let e=new _n;e.name="direnc";let[i,s]=yo(8,256);s.fillStyle="#d8c69c",s.fillRect(0,0,8,256);let r=[.18,.33,.48,.8];n.forEach((u,d)=>{s.fillStyle=Mb[u],s.fillRect(0,(1-r[d])*256-12,8,24)});let a=new Wi(1.1,1.1,4.6,16);a.rotateZ(Math.PI/2);let o=new Bt(a,new we({map:Gc(i),roughness:.55})),l=new we({color:14206620,roughness:.55}),c=3.4;o.position.y=c,e.add(o);for(let u of[-1,1]){let d=new Bt(new Ws(1.32,14,10),l);d.scale.set(.75,1,1),d.position.set(u*2.45,c,0),e.add(d);let m=new Bt(new Ue(t/2-2.9,.5,.5),_e.metal);m.position.set(u*((t/2+2.9)/2),c,0);let y=new Bt(new Ue(.5,c+7,.5),_e.metal);y.position.set(u*t/2,(c-7)/2,0),e.add(m,y)}Rs(e);let h=ea({kesif:"direnc"},t+1.4,c+9,3.2,0,(c+1.8-7.2)/2,0),f=ea({kesif:"renk-bantlari"},3.6,2.8,2.8,0,c,0);return e.add(h,f),e.userData={tepe:new C(0,c+1.4,0),uclar:[new C(-t/2,0,0),new C(t/2,0,0)],H:c,vekiller:[h,f],kesifYerleri:()=>[["direnc",new C(t/2-1.2,c+2.6,0)],["renk-bantlari",new C(-.6,c+2.2,0)]]},e}function Zh(n,t,e){n.position.set((t.x+e.x)/2,qe,(t.z+e.z)/2),n.rotation.set(0,-Math.atan2(e.z-t.z,e.x-t.x),0)}function Wp(){bo();let n=new _n;n.name="buton";let t=new Bt(new Yi(6,3.4,6,2,.45),_e.siyah);t.position.y=1.7;let e=new Bt(new Ue(6.2,.3,6.2),_e.metal);e.position.y=3.55;let i=new Bt(new Wi(1.8,1.8,1.7,24),new we({color:14172995,roughness:.42}));i.position.y=4.55,n.add(t,e,i);for(let r of[-2.54,2.54])for(let a of[-3.81,3.81]){let o=new Bt(new Ue(.6,7,.35),_e.metal);o.position.set(r,-3.2,a),n.add(o)}Rs(n);let s=ea({kesif:"buton"},7.6,12.9,8.4,0,-.45,0);return n.add(s),n.userData={bas(r){i.position.y=r?3.95:4.55},tepe:new C(0,5.6,0),vekiller:[s],kesifYerleri:()=>[["buton",new C(0,8.6,0)]]},n}var Sb={turuncu:16088064,siyah:2829104,kirmizi:13840175,sari:15909376,yesil:3054920,mavi:1994713,mor:8280002};function Xp(n,t,e){bo();let i=new _n;i.name="kablo";let s=Sb[e]??e,r=(M,R)=>M.clone().add(new C(0,R,0)),a=r(n,6.2),o=r(t,6.2),l=a.distanceTo(o),c=new C((a.x+o.x)/2,Math.max(a.y,o.y)+7+l*.16,(a.z+o.z)/2),h=new Or([a,r(a,4),c,r(o,4),o],!1,"centripetal"),f=56,u=6,d=new Bt(new ps(h,f,.62,u,!1),new we({color:s,roughness:.45}));i.add(d);let m=[];for(let M of[n,t]){let R=new Bt(new Yi(2.5,6,2.5,2,.3),new we({color:2763312,roughness:.5}));R.position.copy(M).add(new C(0,3.1,0));let S=new Bt(new Ue(.6,6,.6),_e.metal);S.position.copy(M).add(new C(0,-2.9,0)),i.add(R,S),m.push(R,S)}Rs(i);let y=new Bt(new ps(h,24,1.9,6,!1),_e.gorunmez);y.userData={kesif:"kablo",ince:!0,hacim:120},i.add(y);let g=[y];for(let M of[n,t]){let R=ea({kesif:"kablo"},3.4,6.6,3.4,M.x,M.y+3.1,M.z);i.add(R),g.push(R)}let p=d.geometry.index.count;return i.userData={egri:h,vekiller:g,kesifYerleri:()=>[["kablo",h.getPoint(.5)]],buyut(M){d.geometry.setDrawRange(0,Math.floor(M*f)*u*6),m[2].visible=m[3].visible=M>=1,M>=1&&d.geometry.setDrawRange(0,p)},yol:h.getSpacedPoints(40)},i}function Yp(n){zp=Math.max(1,Math.min(8,n))}var wb=[.1,.84,.54],Hc={genel:{kutu:[-41.3,0,-65.3,41.3,15,58.7],yon:wb},kart:{kutu:[-40.7,0,5.3,34.3,15,58.7],yon:[.08,.86,.5]},usb:{kutu:[-41.2,3.5,13,-22,15.3,28],yon:[-.78,.48,.42]},"guc-girisi":{kutu:[-37,3.5,44,-20,15.5,57],yon:[-.7,.5,.52]},cip:{kutu:[-10,3.5,35.5,30.5,10.5,48.5],yon:[.05,.86,.5]},dijital:{kutu:[-15,3.6,4,33.8,13,15],yon:[.04,.72,.69]},analog:{kutu:[12.5,3.6,49,30.2,13,58.7],yon:[.08,.7,.71]},guc:{kutu:[-10.5,3.6,49,12.5,13,58.7],yon:[0,.62,.78]},bb:{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[.06,.86,.5]},"bb-ust":{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[0,.96,.27]},raylar:{kutu:[-41.3,0,-34,41.3,8.6,-10.7],yon:[.04,.8,.6]},devre:{kutu:[-14,0,-44,22,22,-14],yon:[.12,.8,.58]},"devre-genis":{kutu:[-41.3,0,-65.3,41.3,22,12],yon:[.07,.9,.43],kablolar:!0},"buton-yakin":{kutu:[5,0,-46,23,18,-16],yon:[.15,.72,.67]},trafik:{kutu:[-26,0,-44,26,22,-14],yon:[.05,.78,.62]}};var $p={kirmizi:15022389,sari:16498733,yesil:3126084},Eb={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"},qp={220:["kirmizi","kirmizi","kahve","altin"],1e4:["kahve","siyah","turuncu","altin"]},Ii=4.2,Kh=new yn({visible:!1}),Zp=null,Kp=()=>_e.metal||(Zp??=new we({color:14014686,metalness:1,roughness:.28}));function Jh(n,t,e,i,s,r,a){let o=new Bt(new Ue(t,e,i),Kh);return o.position.set(s,r,a),n.add(o),n.userData.hedef=o,o}var Jp=(n,t)=>Math.hypot(t.x-n.x,t.z-n.z);function jh(n,t,e){let i=new Wt($p[n]??$p.kirmizi),s=i.clone().lerp(new Wt(3813430),.45),r=new _n;r.name="led";let a=[[0,0],[2.95,0],[2.95,1],[2.5,1],[2.5,5.6]];for(let d=1;d<=8;d++){let m=d/8*(Math.PI/2);a.push([2.5*Math.cos(m),5.6+2.5*Math.sin(m)])}let o=new we({color:s,emissive:i,emissiveIntensity:0,roughness:.14,metalness:0}),l=new Bt(new Br(a.map(([d,m])=>new ot(d,m)),20),o);l.position.y=Ii,r.add(l);let c=Math.max(1.27,Jp(t,e)/2),h=1.3;for(let d of[-1,1]){let m=d*1.27,y=d*c,g=(p,M,R,S)=>{let w=new Bt(new Ue(p,M,.5),Kp());w.position.set(R,S,0),r.add(w)};if(y===m){g(.5,Ii+5,m,Ii-(Ii+5)/2);continue}g(.5,Ii-h,m,(Ii+h)/2),g(Math.abs(y-m)+.5,.5,(m+y)/2,h),g(.5,h+5,y,(h-5)/2)}let f=new Vs(new hs({map:vo(),color:i,blending:Ai,depthWrite:!1,transparent:!0}));f.scale.set(20,20,1),f.position.y=Ii+5.5,f.visible=!1,r.add(f);let u=new Bt(new wi(30,30),new yn({map:vo(),color:i,blending:Ai,depthWrite:!1,transparent:!0,opacity:.6}));return u.rotation.x=-Math.PI/2,u.position.y=.12,u.visible=!1,r.add(u),Rs(r),Jh(r,Math.max(7,c*2+1.5),12,7,0,Ii+3.5,0),Object.assign(r.userData,{ac(d){let m=typeof d=="number"?d:d?1:0;r.userData.yanik=m>0,o.emissiveIntensity=1.05*m,o.color.copy(s).lerp(i,m),f.visible=u.visible=m>.02,f.material.opacity=Math.min(1,m*1.15),u.material.opacity=.6*m},renk:i,lambaY:Ii+6,tepe:new C(0,Ii+8.2,0)}),Zh(r,t,e),r}function jp(n,t,e){let i=qp[n]||qp[220],s=Jp(t,e),r=s>=7?Hp(i,s):Ab(i,s),a=r.userData.H;return Jh(r,Math.max(7.5,s+2),a+3,4.5,0,a/2+.5,0),Zh(r,t,e),r}function Ab(n,t){let e=new _n;e.name="direnc";let i=document.createElement("canvas");i.width=8,i.height=256;let s=i.getContext("2d");s.fillStyle="#d8c69c",s.fillRect(0,0,8,256),[.18,.33,.48,.8].forEach((d,m)=>{s.fillStyle=Eb[n[m]],s.fillRect(0,(1-d)*256-12,8,24)});let r=new ds(i);r.colorSpace=Je;let a=-t/2,o=1.5,l=4.6,c=o+l+2.3,h=new Bt(new Wi(1.1,1.1,l,16),new we({map:r,roughness:.55}));h.position.set(a,o+l/2,0),e.add(h);let f=new we({color:14206620,roughness:.55});for(let d of[o,o+l]){let m=new Bt(new Ws(1.32,14,10),f);m.scale.set(1,.75,1),m.position.set(a,d,0),e.add(m)}let u=(d,m,y,g)=>{let p=new Bt(new Ue(d,m,.5),Kp());p.position.set(y,g,0),e.add(p)};return u(.5,o+5,a,(o-5)/2),u(.5,c-o-l,a,(o+l+c)/2),u(t+.5,.5,0,c),u(.5,c+5,-a,(c-5)/2),Rs(e),e.userData={tepe:new C(0,c+1.4,0),H:c},e}function Qp(n){let t=Wp();return t.position.copy(n),Jh(t,9,8,10,0,2.5,0),t}function tm(n,t,e){let i=Xp(n,t,e),s=new Bt(new ps(i.userData.egri,24,2.3,6,!1),Kh);return i.add(s),i.userData.hedef=s,i}function Wc(n){let t=new Set(Object.values(_e)),e=vo();n.traverse(i=>{i.geometry?.dispose();let s=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(let r of s)t.has(r)||r===Kh||r===Zp||(r.map&&r.map!==e&&r.map.dispose(),r.dispose())})}var Xc={kirmizi:"#e53935",sari:"#fbc02d",yesil:"#2fb344"},Qh={turuncu:"#f57c00",kirmizi:"#d32f2f",siyah:"#2b2b30",sari:"#f2c200",yesil:"#2e9d48",mavi:"#1e6fd9",mor:"#7e57c2"},em={220:["#d32f2f","#d32f2f","#7a4a24","#c9a33a"],1e4:["#7a4a24","#1d1d1d","#f57c00","#c9a33a"]},Yc='<svg class="parca-ikon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">',td='stroke="#8a8f99" stroke-width="1.6" stroke-linecap="round" fill="none"';function Tb(n){let t=Xc[n]||Xc.kirmizi;return`${Yc}<path d="M13 23v7M19 23v5" ${td}/><path d="M10 15a6 6 0 0 1 12 0v6H10z" fill="${t}" stroke="#0006"/><rect x="8.5" y="20.5" width="15" height="2.8" rx="1" fill="${t}" stroke="#0006"/></svg>`}function Rb(n){let t=em[n]||em[220];return`${Yc}<path d="M1 16h6M25 16h6" ${td}/><rect x="7" y="11" width="18" height="10" rx="4" fill="#d8c69c" stroke="#0005"/>${t.map((e,i)=>`<rect x="${[10,13.2,16.4,21][i]}" y="11" width="2" height="10" fill="${e}"/>`).join("")}</svg>`}var Cb=()=>`${Yc}<path d="M10 25v5M22 25v5M10 7V2M22 7V2" ${td}/><rect x="6" y="7" width="20" height="18" rx="3" fill="#2b2b30"/><circle cx="16" cy="16" r="5" fill="#d84343"/></svg>`;function Ib(n){let t=Qh[n]||"var(--kablo,#f57c00)";return`${Yc}<path d="M6 27C7 9 25 9 26 27" fill="none" style="stroke:${t}" stroke-width="3.2" stroke-linecap="round"/><rect x="3.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/><rect x="23.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/></svg>`}function nm(n){return n.tur==="led"?Tb(n.renk):n.tur==="direnc"?Rb(n.deger):n.tur==="buton"?Cb():Ib(n.renk)}var Kc="abcde",Pb="fghij",Lb=["uzak+","uzak-","yakin-","yakin+"],Mo=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30],ad={a:5.5,b:4.5,c:3.5,d:2.5,e:1.5,f:-1.5,g:-2.5,h:-3.5,i:-4.5,j:-5.5},od={"yakin-":7.5,"yakin+":8.5,"uzak-":-7.5,"uzak+":-8.5},ld=["SCL","SDA","AREF","GND-D","13","12","11","10","9","8","7","6","5","4","3","2","1","0"],cd=["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],ud=["A0","A1","A2","A3","A4","A5"],Jc=[...ld,...cd,...ud],qi=[2,3,4,5,6,7,8,9,10,11,12,13],Db=[1e3,500,200],ia={kirmizi:{ad:"k\u0131rm\u0131z\u0131",esik:2},sari:{ad:"sar\u0131",esik:2.05},yesil:{ad:"ye\u015Fil",esik:2.1}},jc={220:"220 \u03A9",1e4:"10 k\u03A9"},Qc={turuncu:"Turuncu",kirmizi:"K\u0131rm\u0131z\u0131",siyah:"Siyah",sari:"Sar\u0131",yesil:"Ye\u015Fil",mavi:"Mavi",mor:"Mor"},um=[1,4],hm=[2,6],kb=5,im=2,Nb=1e-9,$c=1e-4,Ub=.002,sm=.03,Fb=.013,Ob=3,Bb=1.5,hd={"GND-D":"GND",GND1:"GND",GND2:"GND","5V":"5V",IOREF:"5V","3.3V":"3V3",SDA:"A4",A4:"A4",SCL:"A5",A5:"A5"},zb=new Set(["GND-D","GND1","GND2","5V","3.3V","IOREF"]),dd=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1);function Ze(n){let[t,e,i,s]=String(n??"").split(":");if(s!==void 0)return null;if(t==="h"){let r=Number(e);if(Number.isInteger(r)&&r>=1&&r<=30&&typeof i=="string"&&i.length===1&&"abcdefghij".includes(i))return{tur:"delik",sutun:r,satir:i}}if(t==="r"){let r=Number(i);if(Lb.includes(e)&&Mo.includes(r))return{tur:"ray",ray:e,sutun:r}}return t==="p"&&i===void 0&&Jc.includes(e)?{tur:"pin",pin:e}:null}var qc=n=>{let t=Ze(n);return!!(t&&t.tur!=="pin")};function rm(n){let t=Ze(n);return!t||t.tur==="pin"?null:[t.sutun,t.tur==="delik"?ad[t.satir]:od[t.ray]]}function id(n,t){let e=rm(n),i=rm(t);return e&&i?Math.hypot(e[0]-i[0],e[1]-i[1]):1/0}function In(n){let t=Ze(n);return t?t.tur==="delik"?`s:${t.sutun}:${Kc.includes(t.satir)?"y":"u"}`:t.tur==="ray"?`r:${t.ray}`:`k:${hd[t.pin]||t.pin}`:null}function dm(n){let t=Ze(n);if(!t)return[];if(t.tur==="delik")return[...Kc.includes(t.satir)?Kc:Pb].map(i=>`h:${t.sutun}:${i}`);if(t.tur==="ray")return Mo.map(i=>`r:${t.ray}:${i}`);let e=In(n);return Jc.filter(i=>In(`p:${i}`)===e).map(i=>`p:${i}`)}function na(n){return/^\d+$/.test(n)?n==="0"?"0. pin (RX)":n==="1"?"1. pin (TX)":`${n}. pin`:{"GND-D":"GND",GND1:"GND",GND2:"GND","3.3V":"3,3V",VIN:"Vin",NC:"bo\u015F pin (NC)"}[n]||n}function sd(n){return`${n.startsWith("yakin")?"alt":"\xFCst"} ${n.endsWith("+")?"+":"\u2212"} ray\u0131`}function Ve(n,t=!1){let e=Ze(n);return e?e.tur==="delik"?`${e.sutun}${e.satir}`:e.tur==="ray"?t?`${sd(e.ray)}, ${e.sutun}. s\xFCtun`:sd(e.ray):na(e.pin):""}function sa(n){let t=Ze(n);if(!t)return"";if(t.tur==="delik"){let i=Kc.includes(t.satir)?"a-e":"f-j";return`${t.sutun}. s\xFCtun, ${i} sat\u0131rlar\u0131`}return t.tur==="ray"?dd(sd(t.ray)):hd[t.pin]==="GND"?"GND pinleri (kart i\xE7inde birbirine ba\u011Fl\u0131)":na(t.pin)}function js(n){return n?n.tur==="led"?[n.anot,n.katot]:n.tur==="direnc"?[n.a,n.b]:n.tur==="kablo"?[n.bas,n.son]:n.tur==="buton"?[`h:${n.sutun}:e`,`h:${n.sutun+2}:e`,`h:${n.sutun}:f`,`h:${n.sutun+2}:f`]:[]:[]}function Pi(n){return n.tur==="led"?`${dd(ia[n.renk]?.ad||"")} LED (${Ve(n.anot)})`:n.tur==="direnc"?`${jc[n.deger]||""} diren\xE7 (${Ve(n.a)})`:n.tur==="buton"?`Buton (${n.sutun}. ve ${n.sutun+2}. s\xFCtun)`:n.tur==="kablo"?`Kablo (${Ve(n.bas)} \u2192 ${Ve(n.son)})`:""}function tu(n){return n.tur==="led"?`Anot (uzun bacak) ${Ve(n.anot,!0)}, katot (k\u0131sa bacak) ${Ve(n.katot,!0)}`:n.tur==="direnc"?`Bacaklar ${Ve(n.a,!0)} ve ${Ve(n.b,!0)}`:n.tur==="buton"?`Bacaklar ${n.sutun}e, ${n.sutun+2}e, ${n.sutun}f, ${n.sutun+2}f (kanal\u0131n \xFCst\xFCnde)`:n.tur==="kablo"?`${dd(Ve(n.bas,!0))} ile ${Ve(n.son,!0)} aras\u0131nda`:""}function Vb(n){return!n||typeof n!="object"||typeof n.id!="string"||!n.id?!1:n.tur==="led"?!!ia[n.renk]&&qc(n.anot)&&qc(n.katot)&&n.anot!==n.katot:n.tur==="direnc"?!!jc[n.deger]&&qc(n.a)&&qc(n.b)&&n.a!==n.b:n.tur==="buton"?Number.isInteger(n.sutun)&&n.sutun>=1&&n.sutun<=28:n.tur==="kablo"?!!Qc[n.renk]&&!!Ze(n.bas)&&!!Ze(n.son)&&n.bas!==n.son:!1}function fd(n){let t=(e,i)=>qi.includes(Number(e))?Number(e):i;if(n?.tur==="buton"){let e=t(n.giris,2),i=t(n.cikis,13);return i===e&&(i=e===13?12:13),{tur:"buton",giris:e,cikis:i}}if(n?.tur==="elle"){let e={};for(let i of qi)n.seviyeler?.[i]&&(e[i]=!0);return{tur:"elle",seviyeler:e}}return{tur:"blink",pin:t(n?.pin,13),bekleme:Db.includes(Number(n?.bekleme))?Number(n.bekleme):1e3}}function ra(n){let t=new Set,e=new Set,i=[];for(let s of Array.isArray(n?.parcalar)?n.parcalar:[]){if(!Vb(s)||e.has(s.id))continue;let r=js(s);if(r.some(o=>t.has(o))||s.tur==="led"&&!rd(id(s.anot,s.katot),um)||s.tur==="direnc"&&!rd(id(s.a,s.b),hm))continue;r.forEach(o=>t.add(o)),e.add(s.id);let a={id:s.id,tur:s.tur};for(let o of["renk","anot","katot","deger","a","b","sutun","bas","son"])s[o]!==void 0&&(a[o]=s[o]);i.push(a)}return{parcalar:i,program:fd(n?.program)}}var rd=(n,[t,e])=>n>=t-.01&&n<=e+.01;function eu(n,t=null){let e=new Map;for(let i of n)if(i.id!==t)for(let s of js(i))e.set(s,i.id);return e}function Gb(n){let t=Ze(n);return!t||t.tur!=="delik"||!"ef".includes(t.satir)?null:t.sutun+2<=30?t.sutun:t.sutun-2}function So(n,t,e,i,s=null){let r=Ze(i);if(!r)return{gecerli:!1,neden:"Burada delik yok"};let a=eu(n,s),o={led:"LED",direnc:"Diren\xE7",buton:"Buton"}[t];if(t!=="kablo"&&r.tur==="pin")return{gecerli:!1,neden:`${o} breadboard'a tak\u0131l\u0131r: bir delik se\xE7`};if(t==="buton"){let u=Gb(i);return u==null?{gecerli:!1,neden:"Butonu kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131na koy"}:js({tur:"buton",sutun:u}).some(m=>a.has(m))?{gecerli:!1,neden:"Butonun bacaklar\u0131 dolu deliklere geliyor"}:{gecerli:!0,sutun:u}}if(a.has(i))return{gecerli:!1,neden:r.tur==="pin"?"Bu pinde zaten kablo var":"Bu delik dolu"};if(!e)return{gecerli:!0};if(e===i)return{gecerli:!1,neden:"\u0130ki u\xE7 ayn\u0131 yere tak\u0131lamaz"};if(t==="kablo")return{gecerli:!0};let l=id(e,i),c=t==="led"?um:hm,h=Math.round(l*10)/10,f=String(h).replace(".",",");return rd(l,c)?{gecerli:!0,mesafe:l}:{gecerli:!1,mesafe:l,neden:`${f} ad\u0131m: ${o} bacaklar\u0131 en az ${c[0]}, en \xE7ok ${c[1]} ad\u0131m arayla tak\u0131l\u0131r`}}var pd={"ders-2":{ad:"Ders 2: LED Yakal\u0131m",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"blink",pin:13,bekleme:1e3}},"ders-3":{ad:"Ders 3: Butonla LED",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"},{id:"buton",tur:"buton",sutun:20},{id:"r2",tur:"direnc",deger:1e4,a:"h:22:c",b:"r:yakin-:22"},{id:"k5v",tur:"kablo",renk:"kirmizi",bas:"p:5V",son:"r:yakin+:24"},{id:"kplus",tur:"kablo",renk:"kirmizi",bas:"r:yakin+:20",son:"h:20:a"},{id:"k2",tur:"kablo",renk:"sari",bas:"p:2",son:"h:22:d"}],program:{tur:"buton",giris:2,cikis:13}},"ders-4":{ad:"Ders 4: Trafik I\u015F\u0131\u011F\u0131",parcalar:[{id:"ledK",tur:"led",renk:"kirmizi",anot:"h:8:e",katot:"h:9:e"},{id:"ledS",tur:"led",renk:"sari",anot:"h:15:e",katot:"h:16:e"},{id:"ledY",tur:"led",renk:"yesil",anot:"h:22:e",katot:"h:23:e"},{id:"rK",tur:"direnc",deger:220,a:"h:9:c",b:"r:yakin-:9"},{id:"rS",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"rY",tur:"direnc",deger:220,a:"h:23:c",b:"r:yakin-:23"},{id:"kK",tur:"kablo",renk:"kirmizi",bas:"p:10",son:"h:8:a"},{id:"kS",tur:"kablo",renk:"sari",bas:"p:9",son:"h:15:a"},{id:"kY",tur:"kablo",renk:"yesil",bas:"p:8",son:"h:22:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"elle",seviyeler:{10:!0}}}};function ed(n,t){let e=new Map,i=r=>{if(!e.has(r))return e.set(r,r),r;let a=r;for(;e.get(a)!==a;)a=e.get(a);let o=r;for(;e.get(o)!==a;){let l=e.get(o);e.set(o,a),o=l}return a},s=(r,a)=>{let o=i(r),l=i(a);o!==l&&e.set(o,l)};for(let r of n){let a=js(r).map(In);a.forEach(i),r.tur==="kablo"&&s(a[0],a[1]),r.tur==="buton"&&(s(a[0],a[2]),s(a[1],a[3]),(t===!0||t?.has?.(r.id))&&s(a[0],a[1]))}return{bul:i}}var $i=n=>`k:${hd[n]||n}`;function am(n,t){let e=new Map,i=(s,r)=>{let a=n.bul(s);e.has(a)||e.set(a,[]),e.get(a).push(r)};i("k:GND","GND"),i("k:5V","5V"),i("k:3V3","3V3");for(let s of t)i($i(String(s)),String(s));return[...e.entries()].filter(([,s])=>s.length>1).map(([s,r])=>({kok:s,suruculer:r}))}function Zc(n,t,e){let i=new Map([[t.bul("k:GND"),0],[t.bul("k:5V"),5],[t.bul("k:3V3"),3.3]]),s=[],r=[],a=[];for(let M of n){if(M.tur==="direnc"){let R=t.bul(In(M.a)),S=t.bul(In(M.b));R!==S&&s.push({a:R,b:S,G:1/M.deger})}if(M.tur==="led"){let R=t.bul(In(M.anot)),S=t.bul(In(M.katot));R!==S&&r.push({id:M.id,a:R,k:S,vf:ia[M.renk].esik})}}for(let[M,R]of Object.entries(e)){let S=t.bul($i(M)),w=`v:${M}`;i.set(w,R),a.push({a:S,b:w,G:1/kb})}let o=new Map,l=M=>{!i.has(M)&&!o.has(M)&&o.set(M,o.size)};for(let M of[...s,...r.map(R=>({a:R.a,b:R.k})),...a])l(M.a),l(M.b);let c=o.size,h=new Map(r.map(M=>[M.id,!1])),f=new Float64Array(c),u=M=>i.has(M)?i.get(M):o.has(M)?f[o.get(M)]:0;for(let M=0;M<40;M++){let R=Array.from({length:c},()=>new Float64Array(c)),S=new Float64Array(c);for(let A=0;A<c;A++)R[A][A]=Nb;let w=(A,x,E,P)=>{let L=o.get(A),k=o.get(x);L!==void 0&&(R[L][L]+=E,S[L]+=E*P,k!==void 0?R[L][k]-=E:S[L]+=E*i.get(x)),k!==void 0&&(R[k][k]+=E,S[k]-=E*P,L!==void 0?R[k][L]-=E:S[k]+=E*i.get(A))};for(let A of s)w(A.a,A.b,A.G,0);for(let A of a)w(A.a,A.b,A.G,0);for(let A of r)h.get(A.id)&&w(A.a,A.k,1/im,A.vf);f=Hb(R,S);let b=!1;for(let A of r){let x=u(A.a)-u(A.k);!h.get(A.id)&&x>A.vf+1e-9?(h.set(A.id,!0),b=!0):h.get(A.id)&&x<A.vf-1e-9&&(h.set(A.id,!1),b=!0)}if(!b)break}let d=new Map(r.map(M=>[M.id,h.get(M.id)?Math.max(0,(u(M.a)-u(M.k)-M.vf)/im):0])),m=new Map,y=(M,R)=>{m.has(M)||m.set(M,[]),m.get(M).push(R)};for(let M of[...s,...a])y(M.a,M.b),y(M.b,M.a);let g=new Set(i.keys()),p=[...g];for(;p.length;)for(let M of m.get(p.shift())||[])g.has(M)||(g.add(M),p.push(M));return{V:u,akim:d,tanimli:g,ledler:r,direncler:s}}function Hb(n,t){let e=t.length;for(let s=0;s<e;s++){let r=s;for(let o=s+1;o<e;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);r!==s&&([n[r],n[s]]=[n[s],n[r]],[t[r],t[s]]=[t[s],t[r]]);let a=n[s][s]||1e-30;for(let o=s+1;o<e;o++){let l=n[o][s]/a;if(l){for(let c=s;c<e;c++)n[o][c]-=l*n[s][c];t[o]-=l*t[s]}}}let i=new Float64Array(e);for(let s=e-1;s>=0;s--){let r=t[s];for(let a=s+1;a<e;a++)r-=n[s][a]*i[a];i[s]=r/(n[s][s]||1e-30)}return i}function nd(n,t){if(!n.tanimli.has(t))return{deger:"KARARSIZ",bosta:!0,gerilim:null};let e=n.V(t);return{deger:e>=Ob?"HIGH":e<=Bb?"LOW":"KARARSIZ",bosta:!1,gerilim:e}}function om(n,t,e){let i=new Map,s=(o,l)=>{i.has(o)||i.set(o,[]),i.get(o).push(l)};for(let o of n.direncler)s(o.a,o.b),s(o.b,o.a);for(let o of n.ledler)o.id!==e&&(s(o.a,o.k),s(o.k,o.a));let r=new Set([t]),a=[t];for(;a.length;)for(let o of i.get(a.shift())||[])r.has(o)||(r.add(o),a.push(o));return r}function Qs(n){let t=new Set;for(let e of n)if(e.tur==="kablo")for(let i of[e.bas,e.son]){let s=Ze(i);s?.tur==="pin"&&t.add(s.pin)}return t}function Wb(n,t){if(n.tur==="blink")return{cikislar:[String(n.pin)],giris:null};if(n.tur==="buton")return{cikislar:[String(n.cikis)],giris:String(n.giris)};let e=Qs(t);return{cikislar:qi.map(String).filter(i=>e.has(i)||n.seviyeler[i]),giris:null}}var lm={hata:0,uyari:1,bilgi:2};function fm(n,t={}){let{parcalar:e,program:i}=ra(n),s=t.calisiyor!==!1,r=new Set(t.basili||[]),{cikislar:a,giris:o}=Wb(i,e),l=e.filter(B=>B.tur==="led"),c=e.filter(B=>B.tur==="buton"),h=[],f=(B,rt,gt,qt={})=>h.push({tur:B,seviye:rt,metin:gt,parcalar:[],...qt}),u=ed(e,r),d=ed(e,!0),m=ed(e,null),y=am(u,a),g=am(d,a),p=(B,rt,gt=!1)=>e.filter(qt=>qt.tur==="kablo"&&!gt||qt.tur==="buton").filter(qt=>js(qt).some(zt=>B.bul(In(zt))===rt)).map(qt=>qt.id);for(let B of y)f("kisa-devre","hata",`${cm(B.suruculer)} K\u0131sa devre giderilene kadar devre \xE7al\u0131\u015Fmaz.`,{parcalar:p(u,B.kok)});let M=new Set(y.map(B=>B.suruculer.slice().sort().join("+")));for(let B of g)M.has(B.suruculer.slice().sort().join("+"))||f("kisa-devre","hata",`Butona bas\u0131l\u0131nca k\u0131sa devre olur. ${cm(B.suruculer)}`,{parcalar:p(d,B.kok,!0)});let R=B=>e.filter(rt=>rt.tur==="kablo"&&(rt.bas===`p:${B}`||rt.son===`p:${B}`)).map(rt=>rt.id),S=u.bul("k:RESET")===u.bul("k:GND");S&&f("reset","hata","RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fmaz. Kabloyu RESET pininden \xE7\u0131kar.",{parcalar:R("RESET")});let w=Qs(e),b=new Set([...a,...o?[o]:[]]);i.tur==="elle"&&qi.forEach(B=>b.add(String(B)));let A=new Set;for(let B of w){if(zb.has(B)||b.has(B)||B==="RESET")continue;A.add(B);let rt=i.tur==="blink"&&qi.includes(Number(B))?{tur:"blink-pin",pin:Number(B),metin:`Programda ${B}. pini se\xE7`}:null;f("pin-kullanilmiyor","uyari",Xb(B,i),{parcalar:R(B),pin:B,eylem:rt})}let x={},E=null,P=s&&!y.length&&!S,L=null;if(P){if(i.tur==="blink"&&(x[i.pin]=t.faz===!1?0:5),i.tur==="elle")for(let B of a)x[B]=i.seviyeler[B]?5:0;if(i.tur==="buton"){let B=Zc(e,u,{[i.cikis]:0});E=nd(B,u.bul($i(o)));let rt=E.deger==="HIGH"||E.deger==="KARARSIZ"&&!!t.kararsiz;x[i.cikis]=rt?5:0}L=Zc(e,u,x)}let k=g.length?null:Zc(e,d,Object.fromEntries(a.map(B=>[B,5]))),N=g.length?null:Zc(e,m,Object.fromEntries(a.map(B=>[B,0]))),I={},O=[],Y=0;for(let B of l){let rt=Pi(B),gt=L?.akim.get(B.id)??0,qt=k?.akim.get(B.id)??0,zt=N?.akim.get(B.id)??0,oe=Math.max(gt,qt,zt)>sm,Z=L?gt>$c&&gt<=sm:!1;if(I[B.id]={yanik:Z,parlaklik:Z?Math.max(.12,Math.min(1,Math.sqrt(gt/Fb))):0,akim:gt*1e3,enCok:Math.max(qt,zt,gt)*1e3},!k)continue;if(d.bul(In(B.anot))===d.bul(In(B.katot))){f("tamamlanmamis","uyari",`${rt}: iki bacak ayn\u0131 ba\u011Flant\u0131 grubunda (${sa(B.anot)}). Elektrik LED'e u\u011Framadan ge\xE7er; bacaklar\u0131 farkl\u0131 s\xFCtunlara tak.`,{parcalar:[B.id]});continue}if(oe){f("direncsiz","hata",`${rt}: diren\xE7 yok. Ger\xE7ek devrede a\u015F\u0131r\u0131 ak\u0131m LED'i ya da pini bozar; sim\xFClasyon bu LED'i yakm\u0131yor. LED ile GND aras\u0131na 220 \u03A9 diren\xE7 ekle.`,{parcalar:[B.id]});continue}let Mt=qt>$c,Gt=zt>$c,vt=gt>$c;if(Mt||Gt||vt){Y++,Mt!==Gt&&O.push(B.id),Mt&&Gt&&a.length&&f("sabit","bilgi",`${rt} programdan ba\u011F\u0131ms\u0131z, hep yan\u0131yor: anot taraf\u0131 do\u011Frudan 5V'a ba\u011Fl\u0131. Programla yan\u0131p s\xF6nmesi i\xE7in anot taraf\u0131n\u0131 bir \xE7\u0131k\u0131\u015F pinine ba\u011Fla.`,{parcalar:[B.id]});let Xt=Math.max(qt,zt,gt);Xt<Ub&&f("sonuk","bilgi",`${rt} \xE7ok s\xF6n\xFCk yan\u0131yor: b\xFCy\xFCk diren\xE7 ak\u0131m\u0131 \xE7ok azalt\u0131yor. LED i\xE7in 220 \u03A9 diren\xE7 kullan.`,{parcalar:[B.id],akim:Xt*1e3});continue}let Jt=d.bul(In(B.anot)),De=d.bul(In(B.katot));if([[k,d],[N,m]].some(([Xt,U])=>{let Ce=U.bul(In(B.anot)),ie=U.bul(In(B.katot));return Xt.tanimli.has(Ce)&&Xt.tanimli.has(ie)&&Xt.V(ie)-Xt.V(Ce)>ia[B.renk].esik-.05})){f("led-ters","uyari",`${rt} ters tak\u0131l\u0131: uzun bacak (anot) art\u0131 tarafa, k\u0131sa bacak (katot) GND taraf\u0131na gelmeli. LED'e dokunup Ters \xE7evir'i se\xE7.`,{parcalar:[B.id]});continue}let ae=om(k,Jt,B.id),xe=om(k,De,B.id);if([...A].some(Xt=>ae.has(d.bul($i(Xt)))||xe.has(d.bul($i(Xt)))))continue;let Qt=[d.bul("k:5V"),d.bul("k:3V3"),...a.map(Xt=>d.bul($i(Xt)))],be=[d.bul("k:GND"),...a.map(Xt=>d.bul($i(Xt)))],Oe=Qt.some(Xt=>ae.has(Xt)),Ge=be.some(Xt=>xe.has(Xt)),ce;!Oe&&!Ge?ce=`${rt} devreye ba\u011Fl\u0131 de\u011Fil: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a, katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fmal\u0131.`:Oe?Ge?ce=`${rt} yanacak kadar elektrik alm\u0131yor: devrenin yolunu kontrol et.`:ce=`${rt}: katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fm\u0131yor. Direnci ya da kabloyu GND'ye giden eksi raya ba\u011Fla.`:ce=`${rt}: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a ula\u015Fm\u0131yor.`,f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${ce}`,{parcalar:[B.id]})}l.length||f("tamamlanmamis","bilgi","Devrede LED yok: panelden bir LED se\xE7ip breadboard'a yerle\u015Ftir.");let W=null,j=null;if(i.tur==="buton"&&k&&N){let B=m.bul($i(o)),rt=d.bul($i(o));W=nd(N,B),j=nd(k,rt);let gt=`${o}. pin`,qt=`${o}. pine`,zt=c.map(oe=>oe.id);c.length?w.has(o)?W.bosta&&j.bosta?f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca da ${gt} hi\xE7bir yere ba\u011Flanm\u0131yor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${qt} ba\u011Flanmal\u0131.`,{pin:o,parcalar:zt}):W.bosta?f("cekme-yok","uyari",`${gt} bo\u015Fta kal\u0131yor: butona bas\u0131lmad\u0131\u011F\u0131nda pin ne HIGH ne LOW okur, LED kendi kendine yan\u0131p s\xF6ner. ${gt} ile GND aras\u0131na 10 k\u03A9 \xE7ekme direnci ekle.`,{pin:o,parcalar:zt}):(j.bosta||j.deger===W.deger)&&f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca ${gt} de\u011Fi\u015Fmiyor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${qt} ba\u011Flanmal\u0131.`,{pin:o,parcalar:zt}):f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${gt} (giri\u015F) devreye ba\u011Fl\u0131 de\u011Fil: butonun baca\u011F\u0131ndan ${qt} kablo \xE7ek.`,{pin:o}):f("tamamlanmamis","uyari","Devre tamamlanmam\u0131\u015F. Devrede buton yok: panelden butonu se\xE7ip kanal\u0131n \xFCst\xFCne yerle\u015Ftir.")}h.sort((B,rt)=>lm[B.seviye]-lm[rt.seviye]);let $=h.some(B=>B.seviye!=="bilgi"),Q=null;return!$&&O.length&&(i.tur==="blink"&&(Q=`Devre do\u011Fru: ${i.pin}. pin LED'i yak\u0131p s\xF6nd\xFCr\xFCyor.`),i.tur==="elle"&&(Q="Devre do\u011Fru: HIGH yapt\u0131\u011F\u0131n pinlerdeki LED'ler yan\u0131yor."),i.tur==="buton"&&W&&j&&W.deger!==j.deger&&(Q=W.deger==="LOW"?"Devre do\u011Fru: butona bas\u0131nca LED yan\u0131yor, b\u0131rak\u0131nca s\xF6n\xFCyor.":"Devre do\u011Fru: \xE7ekme direnci 5V'a ba\u011Fl\u0131; buton b\u0131rak\u0131l\u0131nca LED yan\u0131yor, bas\u0131nca s\xF6n\xFCyor.")),{calisiyor:P,durdu:s?y.length?"kisa-devre":S?"reset":null:"kapali",ledler:I,cikislar:Object.fromEntries(Object.entries(x).map(([B,rt])=>[B,rt>0?"HIGH":"LOW"])),giris:i.tur==="buton"?{pin:Number(o),...E||{deger:"LOW",bosta:!1,gerilim:0},basiliOkur:j?.deger??null,birakikOkur:W?.deger??null}:null,l13:P&&x[13]===5,uyarilar:h,tamam:Q,program:i}}function cm(n){let t=i=>n.includes(i),e=n.filter(i=>!["GND","5V","3V3"].includes(i));return t("5V")&&t("GND")?"5V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor. Ger\xE7ek kartta koruma sigortas\u0131 devreyi keser ve kart kapan\u0131r.":t("3V3")&&t("GND")?"3,3V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor.":t("5V")&&t("3V3")?"5V ile 3,3V do\u011Frudan birbirine ba\u011Fl\u0131: iki farkl\u0131 gerilim \xE7ak\u0131\u015F\u0131yor.":e.length>=2?`${e[0]}. ve ${e[1]}. pin do\u011Frudan birbirine ba\u011Fl\u0131: biri HIGH, \xF6teki LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:t("GND")?`${e[0]}. pin do\u011Frudan GND'ye ba\u011Fl\u0131: pin HIGH olunca elektrik hi\xE7bir par\xE7aya u\u011Framadan akar ve pin bozulabilir.`:t("5V")?`${e[0]}. pin do\u011Frudan 5V'a ba\u011Fl\u0131: pin LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:`${e[0]}. pin do\u011Frudan 3,3V'a ba\u011Fl\u0131: pin HIGH ya da LOW olunca k\u0131sa devre olur.`}function Xb(n,t){if(n==="VIN")return"Vin pini, kart USB ile \xE7al\u0131\u015F\u0131rken g\xFC\xE7 vermez. G\xFC\xE7 i\xE7in 5V pinini kullan.";if(n==="NC")return"Bu pin kartta hi\xE7bir yere ba\u011Fl\u0131 de\u011Fil (NC). Kabloyu ba\u015Fka bir pine ta\u015F\u0131.";if(n==="0"||n==="1")return`${na(n)} bilgisayarla haberle\u015Fmede kullan\u0131l\u0131r; bu programda kullan\u0131lm\u0131yor. 2-13 aras\u0131ndan bir pin se\xE7.`;if(/^\d+$/.test(n)){if(t.tur==="blink")return`${n}. pine kablo ba\u011Fl\u0131 ama program ${t.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor. Kabloyu ${t.pin}. pine ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden ${n}. pini se\xE7.`;if(t.tur==="buton")return`${n}. pin programda kullan\u0131lm\u0131yor: giri\u015F ${t.giris}. pin, \xE7\u0131k\u0131\u015F ${t.cikis}. pin. Kabloyu ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden pini de\u011Fi\u015Ftir.`}return`${na(n)} pini bu programda kullan\u0131lm\u0131yor. Kabloyu 2-13 aras\u0131ndaki bir pine ta\u015F\u0131.`}var pm={1e3:["1000 milisaniye, yani 1 saniye bekle.","1 saniye daha bekle."],500:["500 milisaniye, yani yar\u0131m saniye bekle.","Yar\u0131m saniye daha bekle."],200:["200 milisaniye, yani 0,2 saniye bekle.","0,2 saniye daha bekle."]};function mm(n,t=[]){let e=[],i=(r,a="")=>(e.push({k:r,t:a}),e.length),s={yuksek:[],dusuk:[]};if(n.tur==="buton"){let r=n.giris,a=n.cikis;i(`const int buton = ${r};`,`Butonun ba\u011Fl\u0131 oldu\u011Fu pine ad verelim: buton = ${r} (const, bu de\u011Fer de\u011Fi\u015Fmez demek).`),i(`const int led = ${a};`,`LED'in ba\u011Fl\u0131 oldu\u011Fu pine de ad verelim: led = ${a}.`),i(""),i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r."),i("pinMode(buton, INPUT);",`Buton pinini (${r}) giri\u015F yap: bu pin bilgi okuyacak.`),i("pinMode(led, OUTPUT);",`LED pinini (${a}) \xE7\u0131k\u0131\u015F yap: bu pin elektrik verecek.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: durmadan d\xF6ner.");let o=i("if (digitalRead(buton) == HIGH) {","E\u011Fer buton pini HIGH okunuyorsa, yani butona bas\u0131l\u0131ysa:"),l=i("digitalWrite(led, HIGH);","LED'i yak."),c=i("} else {","De\u011Filse, yani butona bas\u0131l\u0131 de\u011Filse:"),h=i("digitalWrite(led, LOW);","LED'i s\xF6nd\xFCr.");i("}","Karar b\xF6l\xFCm\xFC bitti."),i("}","Tekrar b\xF6l\xFCm\xFC bitti; ba\u015Fa d\xF6n ve butonu yeniden oku."),s.yuksek=[o,l],s.dusuk=[o,c,h]}else if(n.tur==="elle"){let r=Qs(t),a=qi.filter(o=>r.has(String(o))||n.seviyeler?.[o]).reverse();i("void setup() {",a.length?"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r.":"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: hen\xFCz kablo tak\u0131l\u0131 ya da HIGH yap\u0131lm\u0131\u015F pin yok.");for(let o of a){i(`pinMode(${o}, OUTPUT);`,`${o} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap.`);let l=n.seviyeler?.[o],c=i(`digitalWrite(${o}, ${l?"HIGH":"LOW"});`,l?`${o}. pine elektrik ver (5 volt).`:`${o}. pinin elektri\u011Fini kes (0 volt).`);s.yuksek.push(c),s.dusuk.push(c)}i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: burada komut yok, pinler haz\u0131rl\u0131kta ayarland\u0131\u011F\u0131 gibi kal\u0131r."),i("}","Tekrar b\xF6l\xFCm\xFC bitti.")}else{let r=n.pin,[a,o]=pm[n.bekleme]||pm[1e3];i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar kart a\xE7\u0131l\u0131nca yaln\u0131z bir kez \xE7al\u0131\u015F\u0131r."),i(`pinMode(${r}, OUTPUT);`,`${r} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap: bu pin art\u0131k elektrik verebilir.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar s\u0131rayla \xE7al\u0131\u015F\u0131r, bitince en ba\u015Fa d\xF6ner."),s.yuksek.push(i(`digitalWrite(${r}, HIGH);`,`${r}. pine elektrik ver (5 volt): LED yanar.`)),s.yuksek.push(i(`delay(${n.bekleme});`,a)),s.dusuk.push(i(`digitalWrite(${r}, LOW);`,`${r}. pinin elektri\u011Fini kes (0 volt): LED s\xF6ner.`)),s.dusuk.push(i(`delay(${n.bekleme});`,o)),i("}","Tekrar b\xF6l\xFCm\xFC bitti; en ba\u015Fa d\xF6n ve yeniden ba\u015Fla.")}return{satirlar:e,vurgu:s}}function gm(n){let t=0;return n.map(({k:e})=>{let i=e.trim();i.startsWith("}")&&(t=Math.max(0,t-1));let s="  ".repeat(t)+i;return i.endsWith("{")&&t++,s})}var fe=document.documentElement,ct=(n,t=document)=>t.querySelector(n),dn=(n,t=document)=>[...t.querySelectorAll(n)],Qn=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},_i=n=>{try{return localStorage.getItem(n)}catch{return null}},_m=0,ze=n=>{let t=ct("#duyuru");t&&(clearTimeout(_m),t.textContent="",_m=setTimeout(()=>{t.textContent=n},40))},Jn=(n="")=>String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Yb=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1),gd=(n,t=1)=>n.toFixed(t).replace(".",","),Bn=(()=>{try{return JSON.parse(ct("#ozgur-ikon")?.textContent||"{}")}catch{return{}}})(),fu={hata:"Hata",uyari:"Uyar\u0131",bilgi:"Bilgi"};fe.dataset.js="1";var Zt=null,cu=null,er=null,xm=["5","6","7","8"],uu=ct("#sinif-penceresi");function $b(n,t=!0){fe.dataset.sinif=n,t&&Qn("bote-3d-sinif",n);let e=new URL(location.href);e.searchParams.set("sinif",n),history.replaceState(null,"",e);for(let i of dn("[data-sinif-yaz]"))i.textContent=`${n}. s\u0131n\u0131f`;for(let i of dn("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===n));ca(!0)}{let n=new URLSearchParams(location.search).get("sinif"),t=_i("bote-3d-sinif"),e=xm.includes(n)?n:xm.includes(t)?t:null;if(e){fe.dataset.sinif=e;for(let i of dn("[data-sinif-yaz]"))i.textContent=`${e}. s\u0131n\u0131f`;for(let i of dn("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===e))}}document.addEventListener("click",n=>{let t=n.target.closest("[data-sinif-sec]");t&&($b(t.dataset.sinifSec),uu?.open&&(uu.close(),ct("#sinif-dugme")?.focus()),ze(`${t.dataset.sinifSec}. s\u0131n\u0131f se\xE7ildi`))});ct("#sinif-dugme")?.addEventListener("click",()=>uu?.showModal?.());var qb=new URLSearchParams(location.search).get("mod")||_i("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal");function Tm(n,t){fe.dataset.mod=n,ct("#tahta-dugme")?.setAttribute("aria-pressed",String(n==="tahta")),t&&Qn("bote-3d-mod",n),Nd()}Tm(qb,!1);ct("#tahta-dugme")?.addEventListener("click",()=>Tm(fe.dataset.mod==="tahta"?"normal":"tahta",!0));var Rm=()=>fe.dataset.theme==="dark"?"#17121f":"#e9e5f1";ct("#tema-dugme")?.addEventListener("click",()=>{let n=fe.dataset.theme!=="dark";n?fe.dataset.theme="dark":delete fe.dataset.theme,Qn("bote-theme",n?"dark":"light"),Zt?.arkaPlan(Rm())});var _d=ct("#tam-ekran");_d&&!document.fullscreenEnabled&&(_d.hidden=!0);_d?.addEventListener("click",()=>document.fullscreenElement?document.exitFullscreen():fe.requestFullscreen?.().catch(()=>{}));ct("#ogretmen-dugme")?.addEventListener("click",()=>{fe.dataset.ek=fe.dataset.ek==="acik"?"":"acik",fe.dataset.ek&&ct("#ogretmen")?.focus()});ct("#ogretmen-kapat")?.addEventListener("click",()=>{fe.dataset.ek="",ct("#ogretmen-dugme")?.focus()});var ji=ct(".ders"),ha=ct(".kart-alani"),Ps=ct(".panel-kenar"),xd=ct("#panel-dugme"),Ln=window.matchMedia("(orientation: portrait), (max-width: 820px)");function pu(n,t=!0){fe.dataset.panel=n?"acik":"kapali",xd?.setAttribute("aria-expanded",String(n)),xd?.setAttribute("aria-label",n?"Paneli kapat":"Paneli a\xE7"),ha.inert=!n&&!Ln.matches,t&&(Qn("bote-3d-panel",n?"acik":"kapali"),ze(n?"Panel a\xE7\u0131ld\u0131":"Panel kapand\u0131"))}pu(_i("bote-3d-panel")!=="kapali",!1);xd?.addEventListener("click",()=>pu(fe.dataset.panel!=="acik"));var Po=n=>{n?ji.style.setProperty("--panel-w",`${Math.round(n)}px`):ji.style.removeProperty("--panel-w")},Cm=n=>Math.max(300,Math.min(ji.clientWidth*.62,n));Po(Number(_i("bote-3d-panel-w"))||0);var Im=()=>Qn("bote-3d-panel-w",String(parseInt(ji.style.getPropertyValue("--panel-w"),10)||"")),ua=null;Ps?.addEventListener("pointerdown",n=>{n.target.closest("#panel-dugme")||fe.dataset.panel!=="acik"||Ln.matches||(Ps.setPointerCapture(n.pointerId),ua={x:n.clientX,w:ha.getBoundingClientRect().width},fe.dataset.suruklenen="1")});Ps?.addEventListener("pointermove",n=>{ua&&Po(Cm(ua.w+(fe.dataset.panelYan==="sol"?1:-1)*(n.clientX-ua.x)))});var Pm=()=>{ua&&(ua=null,delete fe.dataset.suruklenen,Im())};Ps?.addEventListener("pointerup",Pm);Ps?.addEventListener("pointercancel",Pm);Ps?.addEventListener("dblclick",n=>{n.target.closest("#panel-dugme")||(Po(0),Qn("bote-3d-panel-w",""))});Ps?.addEventListener("keydown",n=>{if(n.target!==Ps||!["ArrowLeft","ArrowRight"].includes(n.key))return;n.preventDefault(),n.stopPropagation();let t=n.key==="ArrowLeft"==(fe.dataset.panelYan!=="sol");Po(Cm(ha.getBoundingClientRect().width+(t?40:-40))),Im()});function Lm(n,t){fe.dataset.panelYan=n;for(let e of dn("[data-yan]"))e.setAttribute("aria-pressed",String(e.dataset.yan===n));t&&Qn("bote-3d-panel-yan",n)}Lm(_i("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);var Io=ct("#ayarlar"),Dm=ct("#ayar-dugme"),km=n=>{Io.hidden=!n,Dm.setAttribute("aria-expanded",String(n)),n&&Io.querySelector("button")?.focus()};Dm?.addEventListener("click",n=>{n.stopPropagation(),km(Io.hidden)});document.addEventListener("click",n=>{Io&&!Io.hidden&&!n.target.closest("#ayarlar, #ayar-dugme")&&km(!1)});function Nm(n,t){fe.dataset.panelBoyut=n;for(let e of dn("[data-panel-boyut]"))e.setAttribute("aria-pressed",String(e.dataset.panelBoyut===n));t&&(Po(0),Qn("bote-3d-panel-w",""),Qn("bote-3d-panel-boyut",n))}Nm(["dar","orta","genis"].includes(_i("bote-3d-panel-boyut"))?_i("bote-3d-panel-boyut"):"orta",!1);var Ao=[.9,1,1.15,1.3,1.5],la=Math.max(0,Ao.indexOf(Number(_i("bote-3d-yazi"))||1));function Um(n,t){la=Math.max(0,Math.min(Ao.length-1,n)),fe.style.setProperty("--yazi",String(Ao[la]));let e=ct("#yazi-deger");e&&(e.textContent=`%${Math.round(Ao[la]*100)}`),t&&Qn("bote-3d-yazi",String(Ao[la]))}Um(la,!1);document.addEventListener("click",n=>{let t=n.target.closest("[data-panel-boyut], [data-yazi], [data-yan]");t&&(t.dataset.panelBoyut&&Nm(t.dataset.panelBoyut,!0),t.dataset.yazi&&Um(la+Number(t.dataset.yazi),!0),t.dataset.yan&&Lm(t.dataset.yan,!0))});var Cs={kisa:()=>(ct(".tutamac")?.offsetHeight||0)+(ct(".kart-ust")?.offsetHeight||0)+(ct(".kart-alt")?.offsetHeight||0)+2,yarim:()=>ji.clientHeight*.5,tam:()=>ji.clientHeight*.92},ti=["kisa","yarim","tam"].includes(_i("bote-3d-sayfa"))?_i("bote-3d-sayfa"):"yarim";function Ni(n,t=!0,e=!1){if(!Ln.matches){delete fe.dataset.sayfa,ji.style.removeProperty("--sayfa-h"),Zt?.gorunurAlan(0,!0),pu(fe.dataset.panel!=="kapali",!1);return}ti=n,fe.dataset.sayfa=n,ha.inert=!1;let i=Math.round(Cs[n]());e&&(fe.dataset.suruklenen="1"),ji.style.setProperty("--sayfa-h",`${i}px`),e&&requestAnimationFrame(()=>delete fe.dataset.suruklenen),Zt?.gorunurAlan(i,e),t&&Qn("bote-3d-sayfa",n)}var Kn=null;for(let n of[ct(".tutamac"),ct(".kart-ust")].filter(Boolean)){n.addEventListener("pointerdown",e=>{if(!Ln.matches||e.target.closest("button"))return;n.setPointerCapture(e.pointerId);let i=performance.now();Kn={y:e.clientY,h:ha.getBoundingClientRect().height,sonY:e.clientY,sonT:i,hiz:0},fe.dataset.suruklenen="1"}),n.addEventListener("pointermove",e=>{if(!Kn)return;let i=performance.now();ji.style.setProperty("--sayfa-h",`${Math.round(Math.max(Cs.kisa(),Math.min(Cs.tam(),Kn.h+(Kn.y-e.clientY))))}px`),Kn.hiz=(Kn.sonY-e.clientY)/Math.max(1,i-Kn.sonT),Kn.sonY=e.clientY,Kn.sonT=i});let t=e=>{if(!Kn)return;let i=Kn;Kn=null,delete fe.dataset.suruklenen;let s=ha.getBoundingClientRect().height,r=Math.abs(e.clientY-i.y)>6,a;r?i.hiz>.45?a=s<Cs.yarim()?"yarim":"tam":i.hiz<-.45?a=s>Cs.yarim()?"yarim":"kisa":a=["kisa","yarim","tam"].sort((o,l)=>Math.abs(Cs[o]()-s)-Math.abs(Cs[l]()-s))[0]:a=ti==="kisa"?"yarim":"kisa",Ni(a),ze({kisa:"Panel k\xFC\xE7\xFCld\xFC",yarim:"Panel yar\u0131m ekran",tam:"Panel tam ekran"}[a])};n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t)}Ln.addEventListener?.("change",()=>Ni(ti,!1,!0));var ym=0;window.addEventListener("resize",()=>{clearTimeout(ym),ym=setTimeout(()=>{Ln.matches&&Ni(ti,!1,!0)},120)});Ni(ti,!1,!0);var au=null,Zb=()=>{Ln.matches&&ti!=="kisa"&&(au=ti,Ni("kisa",!1))},Fm=()=>{au&&Ln.matches&&Ni(au,!1),au=null},oa=["kur","program","durum"];function wd(n,t=!1){for(let e of oa){let i=ct(`#sekme-${e}`),s=ct(`#bolum-${e}`),r=e===n;i.setAttribute("aria-selected",String(r)),i.tabIndex=r?0:-1,s.hidden=!r}t&&ct(`#sekme-${n}`).focus(),ct(".kart-govde")?.scrollTo(0,0),Ln.matches&&ti==="kisa"&&Ni("yarim")}ct(".sekmeler").addEventListener("click",n=>{let t=n.target.closest("[role=tab]");t&&wd(t.id.slice(6))});ct(".sekmeler").addEventListener("keydown",n=>{let t=oa.indexOf(document.activeElement?.id?.slice(6));if(t<0)return;let e={ArrowRight:t+1,ArrowLeft:t-1,Home:0,End:oa.length-1}[n.key];e!==void 0&&(n.preventDefault(),n.stopPropagation(),wd(oa[(e+oa.length)%oa.length],!0))});var Om="bote-3d-ozgur-devre",nr="turuncu";function Kb(){try{let n=JSON.parse(_i(Om)||"null");if(n&&n.surum===1)return Qc[n.kabloRengi]&&(nr=n.kabloRengi),ra(n)}catch{}return ra(pd["ders-2"])}var Vt=Kb(),ei=!1,Ro=!0,Bm=!1,ve=null,Ki=null,Ls=new Set,Et=null,Di=null,mu=[],tr=[],Ed=()=>JSON.stringify({parcalar:Vt.parcalar,program:Vt.program}),vm=0;function Ad(){clearTimeout(vm),vm=setTimeout(()=>{let n=Et?.tasinan?JSON.parse(Et.onceki):Vt;Qn(Om,JSON.stringify({surum:1,parcalar:n.parcalar,program:n.program,kabloRengi:nr}))},300)}function fa(n=Ed()){tr[tr.length-1]!==n&&(tr.push(n),tr.length>60&&tr.shift(),ct("#geri-al").disabled=!1)}function zm(){Et&&ir(!0);let n=tr.pop();ct("#geri-al").disabled=!tr.length,n&&(Vt=ra(JSON.parse(n)),ts(!1),Ds(),ze("Son de\u011Fi\u015Fiklik geri al\u0131nd\u0131"))}var sr=n=>Vt.parcalar.find(t=>t.id===n);function Jb(n){let t={led:"led",direnc:"r",buton:"buton",kablo:"k"}[n],e=new Set(Vt.parcalar.map(s=>s.id)),i=1;for(;e.has(`${t}-${i}`);)i++;return`${t}-${i}`}var Pn=ct("#sahne"),ou=ct(".sahne-alani"),mi=new Map,Vm=[],gi=null,Li=null,Ji=null,Is=null,hu=2.54,nn=(n,t)=>{let e=Ze(n);return e?e.tur==="delik"?Js(e.sutun,e.satir,t):e.tur==="ray"?Bp(e.ray.slice(0,-1),e.ray.slice(-1),e.sutun,t):qh(e.pin):null},wo=n=>(Ze(n)?.tur==="pin"?pi:qe)+.09,jb=Jc.map(n=>({id:`p:${n}`,v:qh(n)})),nu=n=>Mo.map(t=>`r:${n}:${t}`),Qb=n=>Array.from({length:30},(t,e)=>`h:${e+1}:${n}`),lu=[nu("uzak+"),nu("uzak-"),...[..."jihgf",..."edcba"].map(Qb),nu("yakin-"),nu("yakin+")],To=[...lu,ld.map(n=>`p:${n}`),[...cd,...ud].map(n=>`p:${n}`)],tM=n=>{let t=Ze(n[0]);return t.tur==="ray"?`${t.ray.startsWith("yakin")?"alt":"\xFCst"} ${t.ray.endsWith("+")?"+":"\u2212"}`:t.satir};function eM(){if(Zt=kp(Pn,{arkaPlan:Rm(),olay:n=>{n==="baglam-kaybi"&&ou.classList.add("baglam-kaybi"),n==="baglam-geri"&&ou.classList.remove("baglam-kaybi")}}),!Zt){fe.dataset.webgl="yok";for(let n of dn("[data-arac]"))n.disabled=!0;da(!0);return}Yp(Zt.renderer.capabilities.getMaxAnisotropy()),cu=Vp(Zt.hedefler),Zt.scene.add(cu.grup),er=Gp(Zt.hedefler),Zt.scene.add(er.grup);for(let n=0;n<3;n++){let t=new xs(16777215,0,42,2);Zt.scene.add(t),Vm.push(t)}nM(),Gm(),iM(),Ln.matches&&Zt.gorunurAlan(Math.round(Cs[ti]()),!0),Zt.kameraGit(Hc.genel,!0),uM(),ki(),Qi(),requestAnimationFrame(()=>ou.classList.add("hazir")),tg&&Zt.kareGuncelleyici(()=>(Ym++,!1))}ct("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function nM(){let n=e=>(e.rotateX(-Math.PI/2),e),t=(e,i=.96)=>new yn({color:e,transparent:!0,opacity:i,depthWrite:!1});gi=new Bt(n(new zr(1.2,1.9,32)),t(9133302)),gi.renderOrder=4,gi.visible=!1,Li=new Bt(n(new Hs(1.15,24)),t(8141549)),Li.renderOrder=4,Li.visible=!1,Ji=new Si(new Ue(2.1,.05,2.1),t(1483594,.9),4),Ji.count=0,Ji.frustumCulled=!1,Is=new Si(n(new zr(.95,1.55,24)),t(8141549),24),Is.count=0,Is.frustumCulled=!1,Is.renderOrder=4,Zt.scene.add(gi,Li,Ji,Is)}function iM(){let n=jh("kirmizi",new C(-150,qe,60),new C(-147.46,qe,60));n.userData.ac(1),Zt.scene.add(n);let t=[gi,Li].map(e=>e.visible);gi.visible=Li.visible=!0;try{Zt.renderer.compile(Zt.scene,Zt.camera)}catch{}Zt.scene.remove(n),Wc(n),[gi.visible,Li.visible]=t}var sM=n=>JSON.stringify([n.tur,n.renk,n.deger,n.anot,n.katot,n.a,n.b,n.sutun,n.bas,n.son]);function rM(n){if(n.tur==="led")return jh(n.renk,nn(n.anot),nn(n.katot));if(n.tur==="direnc")return jp(n.deger,nn(n.a),nn(n.b));if(n.tur==="buton"){let t=Js(n.sutun,"e"),e=Js(n.sutun+2,"e");return Qp(new C((t.x+e.x)/2,qe,Lt.z))}return tm(nn(n.bas),nn(n.son),n.renk)}function Gm(){if(!Zt)return;let n=new Set,t=!1;for(let e of Vt.parcalar){n.add(e.id);let i=sM(e),s=mi.get(e.id);if(s&&s.anahtar===i)continue;s&&(Zt.scene.remove(s.nesne),Wc(s.nesne));let r=rM(e);r.userData.parcaId=e.id,r.updateMatrixWorld(!0),Zt.scene.add(r),mi.set(e.id,{nesne:r,anahtar:i}),t=!0}for(let[e,i]of mi)n.has(e)||(Zt.scene.remove(i.nesne),Wc(i.nesne),mi.delete(e),t=!0);for(let e of Ls)mi.get(e)?.nesne.userData.bas?.(!0);t&&Zt.golgeYenile()}function Hm(n){let t=mi.get(n),e=sr(n);return!t||!e?null:e.tur==="kablo"?t.nesne.userData.egri.getPoint(.5).add(new C(0,2.5,0)):t.nesne.localToWorld((t.nesne.userData.tepe||new C(0,6,0)).clone().add(new C(0,2,0)))}var du=new Xs,bm=new ot,iu=new Sn(new C(0,1,0),0),Eo=new C;function Wm(n,t){let e=Pn.getBoundingClientRect();bm.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),du.setFromCamera(bm,Zt.camera)}function Co(n){let t=n.clone().project(Zt.camera),e=Pn.getBoundingClientRect();return{x:e.left+(t.x+1)/2*e.width,y:e.top+(1-t.y)/2*e.height}}function Xm(n){let t=Co(n),e=Co(n.clone().add(new C(hu,0,0))),i=Co(n.clone().add(new C(0,0,hu)));return Math.min(Math.hypot(e.x-t.x,e.y-t.y),Math.hypot(i.x-t.x,i.y-t.y))}var aM=Js(1,"a").x,oM=[...Object.entries(ad).map(([n,t])=>({tur:"satir",r:n,z:t})),...Object.entries(od).map(([n,t])=>({tur:"ray",r:n,z:t}))];function lM(n){let t=(n.x-aM)/hu+1,e=(n.z-Lt.z)/hu,i=null,s=.55;for(let a of oM){let o=Math.abs(e-a.z);o<s&&(s=o,i=a)}if(!i)return null;let r=Math.round(t);return Math.abs(t-r)>.55?null:i.tur==="satir"?r>=1&&r<=30?`h:${r}:${i.r}`:null:Mo.includes(r)?`r:${i.r}:${r}`:null}function yd(n,t){if(Wm(n,t),iu.constant=-pi,du.ray.intersectPlane(iu,Eo)){let e=null,i=1.9;for(let s of jb){let r=Math.hypot(s.v.x-Eo.x,s.v.z-Eo.z);r<i&&(i=r,e=s.id)}if(e)return e}return iu.constant=-qe,du.ray.intersectPlane(iu,Eo)?lM(Eo):null}function cM(n,t){Wm(n,t);let e=[];for(let r of mi.values())r.nesne.userData.hedef&&e.push(r.nesne.userData.hedef);let s=du.intersectObjects(e,!1)[0]?.object;for(;s&&!s.userData.parcaId;)s=s.parent;return s?sr(s.userData.parcaId):null}var Le=null,jn=null,Ym=0;function uM(){let n=new Set,t=!1,e=null,i=null,s=0;Pn.addEventListener("pointerdown",a=>{n.size||(t=!1),n.add(a.pointerId),n.size>1&&(t=!0),e={x:a.clientX,y:a.clientY,t:performance.now(),tur:a.pointerType}});let r=a=>{if(n.delete(a.pointerId),!e||t){n.size||(e=null);return}let o=e;e=null,!(a.type!=="pointerup"||Math.hypot(a.clientX-o.x,a.clientY-o.y)>9||performance.now()-o.t>600)&&hM(a.clientX,a.clientY,o.tur)};Pn.addEventListener("pointerup",r),Pn.addEventListener("pointercancel",r),Pn.addEventListener("pointermove",a=>{a.pointerType==="mouse"&&(i={x:a.clientX,y:a.clientY,tus:a.buttons},s||(s=requestAnimationFrame(()=>{s=0,i&&!i.tus&&zn(yd(i.x,i.y),"fare")})))}),Pn.addEventListener("pointerleave",()=>{i=null,jn==="fare"&&zn(null,null)}),Pn.addEventListener("focus",()=>{(!Le||jn!=="klavye")&&zn(Le||"h:15:e","klavye",!0)}),Pn.addEventListener("blur",()=>{jn==="klavye"&&zn(null,null)}),Pn.addEventListener("keydown",dM)}function hM(n,t,e){if(!Zt)return;if(ar(),Et){let r=yd(n,t);if(!r){$m("Burada delik yok: breadboard'daki bir deli\u011Fe ya da Arduino'nun bir pinine dokun");return}if(Xm(nn(r))<(e==="mouse"?7:26)){mM(r);return}zn(r,e==="mouse"?"fare":"dokunma"),Cd(r);return}let i=cM(n,t);if(i){if(i.tur==="buton"&&ei&&Vt.program.tur==="buton"){xM(i.id);return}pa(i.id);return}ts();let s=yd(n,t);zn(s,s?"dokunma":null),s&&ze(`${Ve(s,!0)}: ${sa(s)} birbirine ba\u011Fl\u0131`)}function zn(n,t,e=!1){n===Le&&t===jn&&!e||(Le=n,jn=n?t:null,Pn&&(Pn.style.cursor=n?"pointer":Et?"crosshair":""),Qi())}function dM(n){if(!Zt)return;let t=n.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(t)){n.preventDefault();let e=Le||"h:15:e",i=To.findIndex(o=>o.includes(e));i<0&&(i=8);let s=To[i],r=s.indexOf(e),a=e;if(t==="ArrowLeft"&&(a=s[Math.max(0,r-1)]),t==="ArrowRight"&&(a=s[Math.min(s.length-1,r+1)]),t==="Home"&&(a=s[0]),t==="End"&&(a=s[s.length-1]),t==="ArrowUp"||t==="ArrowDown"){let o=To[Math.max(0,Math.min(To.length-1,i+(t==="ArrowUp"?-1:1)))],l=nn(e).x;a=o.reduce((c,h)=>Math.abs(nn(h).x-l)<Math.abs(nn(c).x-l)?h:c,o[0])}zn(a,"klavye"),ze(fM(a));return}if(t==="Enter"||t===" "){n.preventDefault();let e=Le||"h:15:e";if(Et){Cd(e);return}let i=eu(Vt.parcalar).get(e);if(i){pa(i);return}zn(e,"klavye",!0),ze(`${Ve(e,!0)}: ${sa(e)} birbirine ba\u011Fl\u0131`);return}(t==="Delete"||t==="Backspace")&&Di&&!Et&&(n.preventDefault(),Id(Di))}function fM(n){let t=Ve(n,!0),e=eu(Vt.parcalar).get(n);if(e&&(t+=`, burada ${Pi(sr(e))}`),Et){let i=So(Vt.parcalar,Et.tur,Et.ilk,n);i.gecerli||(t+=`. Olmaz: ${i.neden}`)}return t}document.addEventListener("keydown",n=>{if(!(n.target.closest?.("input[type=text], textarea")||uu?.open)){if((n.ctrlKey||n.metaKey)&&!n.shiftKey&&!n.altKey&&(n.key==="z"||n.key==="Z")){n.preventDefault(),zm();return}if(n.key==="Escape"){if(!ct("#secici").hidden){ar(),Pn.focus({preventScroll:!0});return}if(Et){ir(!0);return}Di&&ts()}}});var su=new ge,md=Object.assign(document.createElement("div"),{className:"imlec-etiket"}),Mm=Object.assign(document.createElement("div"),{className:"imlec-etiket ilk"}),vd=new Map;function Qi(){if(!Zt)return;let n=[],t=!0,e="";if(Le){if(Et){let o=So(Vt.parcalar,Et.tur,Et.ilk,Le);t=o.gecerli,e=o.neden||""}gi.position.copy(nn(Le)).setY(wo(Le)),gi.material.color.setHex(t?9133302:14427686),gi.visible=!0;let r=dm(Le);if(Ze(Le).tur==="pin"){er.grupGoster([]);let o=r.filter(l=>l!==Le).slice(0,4);Ji.count=o.length,o.forEach((l,c)=>{let h=nn(l);su.makeTranslation(h.x,pi+.06,h.z),Ji.setMatrixAt(c,su)}),Ji.instanceMatrix.needsUpdate=!0}else Ji.count=0,er.grupGoster(r.map(o=>nn(o)));let a;Et?a=t?Ve(Le,!0):`${Ve(Le)}: ${e}`:a=Ze(Le).tur==="delik"?`${Ve(Le)} \xB7 ${sa(Le)}`:sa(Le),md.textContent=a,md.classList.toggle("gecersiz",!t),n.push({nokta:nn(Le).setY(wo(Le)),el:md})}else gi.visible=!1,Ji.count=0,er.grupGoster([]);Et?.ilk?(Li.position.copy(nn(Et.ilk)).setY(wo(Et.ilk)+.01),Li.visible=!0,Mm.textContent=`${Et.tur==="led"?"Anot":"1. u\xE7"}: ${Ve(Et.ilk)}`,Et.ilk!==Le&&n.push({nokta:nn(Et.ilk).setY(wo(Et.ilk)),el:Mm})):Li.visible=!1;let s=[...new Set([Di,...mu].filter(Boolean))].map(sr).filter(Boolean).flatMap(r=>js(r)).slice(0,24);Is.count=s.length,s.forEach((r,a)=>{let o=nn(r);su.makeTranslation(o.x,wo(r)+.02,o.z),Is.setMatrixAt(a,su)}),Is.instanceMatrix.needsUpdate=!0;for(let[r,a]of vd){let o=Hm(r);o&&n.push({nokta:o,el:a})}Zt.isaretKoy(n)}function bd(){let n=new Map;for(let e of ve.uyarilar)if(e.seviye!=="bilgi")for(let i of e.parcalar)(!n.has(i)||e.seviye==="hata"&&n.get(i).seviye!=="hata")&&n.set(i,e);let t=JSON.stringify([...n].map(([e,i])=>[e,i.seviye,i.metin]));if(t===bd.imza)return!1;bd.imza=t,vd.clear();for(let[e,i]of n){let s=document.createElement("button");s.type="button",s.tabIndex=-1,s.className=`rozet-isaret ${i.seviye}`,s.innerHTML=`<span>${Bn[i.seviye]||""}</span>`,s.setAttribute("aria-label",`${fu[i.seviye]}: ${i.metin}`),s.title=i.metin,s.addEventListener("click",r=>{r.stopPropagation(),pa(e),Qm()}),vd.set(e,s)}return!0}var pM=n=>n.tur==="led"?`${Yb(ia[n.renk].ad)} LED`:n.tur==="direnc"?`${jc[n.deger]} diren\xE7`:n.tur==="buton"?"Buton":`${Qc[n.renk]} kablo`;function Td(){if(!Et)return"";let n=Et.tasinan?`${Pi(Et.tasinan.parca)} ta\u015F\u0131n\u0131yor. `:`${pM(Et)}: `;return Et.tur==="buton"?`${n}orta kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131nda bir deli\u011Fe dokun; buton kanal\u0131n \xFCst\xFCne oturur.`:Et.tur==="led"?Et.ilk?"\u015Eimdi k\u0131sa baca\u011F\u0131n (katot, eksi) deli\u011Fine dokun: anottan en \xE7ok 4 ad\u0131m \xF6tede.":`${n}\xF6nce uzun baca\u011F\u0131n (anot, art\u0131) deli\u011Fine dokun.`:Et.tur==="direnc"?Et.ilk?"\u015Eimdi ikinci baca\u011F\u0131n deli\u011Fine dokun: ilk bacaktan 2 ile 6 ad\u0131m \xF6tede.":`${n}birinci baca\u011F\u0131n deli\u011Fine dokun.`:Et.ilk?"\u015Eimdi kablonun \xF6b\xFCr ucunun tak\u0131laca\u011F\u0131 pine ya da deli\u011Fe dokun.":`${n}kablonun ba\u015Flayaca\u011F\u0131 pine ya da deli\u011Fe dokun.`}var Sm=0;function rr(n=""){let t=ct("#yonerge");t.hidden=!Et,Et&&(clearTimeout(Sm),t.classList.toggle("gecersiz",!!n),ct("#yonerge-ikon").innerHTML=n?Bn.hata||"":Bn.sec||"",ct("#yonerge-metin").textContent=n?`Olmaz: ${n}`:Td(),n&&(Sm=setTimeout(()=>rr(),3200)))}function $m(n){rr(n),ze(`Olmaz: ${n}`)}function qm(n,t={}){Zt&&(Et&&ir(!0),ts(!1),ar(),Et={tur:n,renk:t.renk,deger:t.deger,ilk:null,tasinan:t.tasinan||null,onceki:t.onceki||Ed()},Rd(),Zb(),rr(),zn(jn==="fare"||jn==="klavye"?Le:null,jn,!0),ze(Td()))}function ir(n){if(!Et)return;let t=Et.tasinan;n&&t&&(Vt.parcalar.splice(Math.min(t.indeks,Vt.parcalar.length),0,t.parca),Ds(!1)),Et=null,ar(),Rd(),rr(),Fm(),zn(jn==="dokunma"?null:Le,jn,!0),n&&ze(t?"Ta\u015F\u0131ma iptal edildi; par\xE7a eski yerinde":"Yerle\u015Ftirme iptal edildi")}function Rd(){for(let n of dn("[data-arac]")){let t=n.dataset.deger||"",e=Et&&!Et.tasinan&&n.dataset.arac===Et.tur&&(Et.tur==="led"?t===Et.renk:Et.tur==="direnc"?Number(t)===Et.deger:!0);n.setAttribute("aria-pressed",String(!!e))}}function Cd(n){if(!Et)return;let t=So(Vt.parcalar,Et.tur,Et.ilk,n);if(!t.gecerli){$m(t.neden),Qi();return}if(Et.tur==="buton"){wm({tur:"buton",sutun:t.sutun});return}if(!Et.ilk){Et.ilk=n,rr(),Qi(),ze(`${Ve(n,!0)} se\xE7ildi. ${Td()}`);return}let e=Et;wm(e.tur==="led"?{tur:"led",renk:e.renk,anot:e.ilk,katot:n}:e.tur==="direnc"?{tur:"direnc",deger:e.deger,a:e.ilk,b:n}:{tur:"kablo",renk:e.renk,bas:e.ilk,son:n})}function wm(n){let t=Et.tasinan,e=Et.onceki,i={id:t?t.parca.id:Jb(n.tur),...n};t?Vt.parcalar.splice(Math.min(t.indeks,Vt.parcalar.length),0,i):Vt.parcalar.push(i),fa(e),Et=null,ar(),Rd(),rr(),Fm(),zn(jn==="dokunma"?null:Le,jn,!0),Ds();let s=ve.uyarilar.find(r=>r.seviye!=="bilgi"&&r.parcalar.includes(i.id));ze(`${Pi(i)} ${t?"ta\u015F\u0131nd\u0131":"tak\u0131ld\u0131"}.${s?` ${fu[s.seviye]}: ${s.metin}`:""}`)}function mM(n){let t=Ze(n),e=ct("#secici-izgara"),i=(r,a)=>{let o=So(Vt.parcalar,Et.tur,Et.ilk,r),l=Ze(r),c=o.gecerli?"":/dolu|kablo var/.test(o.neden)?"dolu":/aynı yere/.test(o.neden)?"ayn\u0131":o.mesafe!==void 0?o.mesafe<2?"yak\u0131n":"uzak":"olmaz",h=l.tur==="pin"?na(l.pin).replace(". pin","").replace(" (RX)","").replace(" (TX)","").replace("bo\u015F pin (NC)","NC"):l.tur==="delik"?`${l.sutun}${l.satir}`:String(l.sutun);return`<button type="button" data-secici="${r}"${o.gecerli?"":" disabled"}${a?' class="yakin-hedef"':""} aria-label="${Jn(Ve(r,!0)+(o.gecerli?"":`: ${o.neden}`))}">${Jn(h)}${c?`<small>${c}</small>`:""}</button>`},s="";if(t.tur==="pin"){let r=To.find(l=>l.includes(n)),a=r.indexOf(n),o=Math.max(0,Math.min(r.length-5,a-2));e.style.gridTemplateColumns="repeat(5,minmax(0,1fr))",s=r.slice(o,o+5).map(l=>i(l,l===n)).join(""),ct("#secici-baslik").textContent="Hangi pin? Dokundu\u011Fun yerin \xE7evresi"}else{let r=lu.findIndex(l=>l.includes(n)),a=Math.max(0,Math.min(lu.length-3,r-1)),o=Math.max(1,Math.min(26,t.sutun-2));e.style.gridTemplateColumns="52px repeat(5,minmax(0,1fr))",s='<span class="bas"></span>'+[0,1,2,3,4].map(l=>`<span class="bas">${o+l}</span>`).join("");for(let l of lu.slice(a,a+3)){s+=`<span class="bas">${tM(l)}</span>`;for(let c=0;c<5;c++){let h=l.find(f=>Ze(f).sutun===o+c);s+=h?i(h,h===n):'<span class="bosluk" aria-hidden="true"></span>'}}ct("#secici-baslik").textContent="Hangi delik? Dokundu\u011Fun yerin \xE7evresi"}e.innerHTML=s,ct("#secici").hidden=!1,zn(n,"dokunma"),(e.querySelector(".yakin-hedef:not(:disabled)")||e.querySelector("button:not(:disabled)")||ct("#secici-kapat")).focus({preventScroll:!0}),ze(`Dokundu\u011Fun yerin \xE7evresi a\xE7\u0131ld\u0131: ${t.tur==="pin"?"pini":"deli\u011Fi"} listeden se\xE7`)}function ar(){let n=ct("#secici");n&&!n.hidden&&(n.hidden=!0,ct("#secici-izgara").innerHTML="")}ct("#secici-izgara").addEventListener("click",n=>{let t=n.target.closest("[data-secici]");if(!t||t.disabled)return;let e=t.dataset.secici;ar(),zn(e,"dokunma"),Cd(e)});ct("#secici-kapat").addEventListener("click",()=>{ar(),Qi()});ct("#yonerge-iptal").addEventListener("click",()=>ir(!0));var Md=null;document.addEventListener("pointerdown",n=>{Md=n.target},!0);document.addEventListener("click",n=>{if(n.detail===0)return;let t=n.target.closest?.("#secici, #secim-kart, .rozet-isaret");t&&!(Md&&t.contains(Md))&&(n.stopPropagation(),n.preventDefault())},!0);function pa(n){let t=sr(n);if(!t){ts();return}Di=n,mu=[],ct("#secim-ad").textContent=Pi(t),ct("#secim-acik").textContent=tu(t),ct('[data-secim="ters"]').hidden=t.tur!=="led",ct("#secim-kart").hidden=!1,Pd(),Qi(),ze(`${Pi(t)} se\xE7ildi. ${tu(t)}.`)}function ts(n=!0){Di=null,mu=[];let t=ct("#secim-kart");t&&(t.hidden=!0),Pd(),n&&Qi()}function Zm(n){let t=Vt.parcalar.findIndex(s=>s.id===n);if(t<0||!Zt)return;let e=Ed(),i=Vt.parcalar[t];Vt.parcalar.splice(t,1),Ds(!1),qm(i.tur,{renk:i.renk,deger:i.deger,tasinan:{parca:i,indeks:t},onceki:e})}function Km(n){let t=sr(n);!t||t.tur!=="led"||(fa(),[t.anot,t.katot]=[t.katot,t.anot],Ds(),pa(n),ze(`LED ters \xE7evrildi: anot (uzun bacak) art\u0131k ${Ve(t.anot)}, katot ${Ve(t.katot)}`))}function Id(n){let t=sr(n);t&&(fa(),Vt.parcalar=Vt.parcalar.filter(e=>e.id!==n),Ls.delete(n),ts(!1),Ds(),ze(`${Pi(t)} kald\u0131r\u0131ld\u0131. Geri al ile geri getirebilirsin.`))}ct("#secim-kart").addEventListener("click",n=>{let t=n.target.closest("[data-secim]");if(!t||!Di)return;let e=Di,i=t.dataset.secim;i==="tasi"&&Zm(e),i==="ters"&&Km(e),i==="sil"&&Id(e),i==="kapat"&&ts()});document.addEventListener("click",n=>{let t=n.target.closest("[data-hazir]");if(t){let s=pd[t.dataset.hazir];Et&&ir(!0),fa(),Vt=ra(s),ts(!1),Ds(),Zt?.kameraGit(Hc.genel),ze(`${s.ad} devresi y\xFCklendi. Geri al ile \xF6nceki devrene d\xF6nebilirsin.`);return}let e=n.target.closest("[data-arac]");if(e&&!e.disabled){if(e.getAttribute("aria-pressed")==="true"){ir(!0);return}let s=e.dataset.arac,r=e.dataset.deger;qm(s,s==="led"?{renk:r}:s==="direnc"?{deger:Number(r)}:s==="kablo"?{renk:nr}:{});return}let i=n.target.closest("[data-liste]");if(i){let s=i.dataset.id,r=i.dataset.liste;r==="sec"&&(pa(s),Ln.matches&&ti!=="kisa"&&Ni("kisa")),r==="tasi"&&Zm(s),r==="ters"&&Km(s),r==="sil"&&Id(s)}});function Jm(){for(let t of dn('input[name="kablo-renk"]'))t.checked=t.value===nr;let n=ct('[data-arac="kablo"]');n&&n.style.setProperty("--kablo",Qh[nr])}function da(n=!1){let t=new Map;for(let o of ve?.uyarilar||[])if(o.seviye!=="bilgi")for(let l of o.parcalar)t.get(l)!=="hata"&&t.set(l,o.seviye);let e=!Zt,i=JSON.stringify([Vt.parcalar,[...t],e]);if(!n&&i===da.imza)return;da.imza=i;let s=ct("#parca-listesi");ct("#parca-sayi").textContent=`(${Vt.parcalar.length})`;let r=document.activeElement?.closest?.("[data-liste]"),a=r&&s.contains(r)?[r.dataset.liste,r.dataset.id]:null;Vt.parcalar.length?s.innerHTML=Vt.parcalar.map(o=>{let l=Jn(Pi(o)),c=t.get(o.id);return`<li data-id="${o.id}">${nm(o)}<span class="parca-ad">${l}${c?`<span class="parca-sorun ${c}">${Bn[c]||""}${fu[c]}</span>`:""}</span><span class="parca-acik">${Jn(tu(o))}</span><div class="parca-dugmeler"><button type="button" class="dugme kucuk" data-liste="sec" data-id="${o.id}" aria-label="Se\xE7: ${l}">Se\xE7</button>`+(e?"":`<button type="button" class="dugme kucuk" data-liste="tasi" data-id="${o.id}" aria-label="Ta\u015F\u0131: ${l}">${Bn.tasi||""}Ta\u015F\u0131</button>`)+(o.tur==="led"?`<button type="button" class="dugme kucuk" data-liste="ters" data-id="${o.id}" aria-label="Ters \xE7evir: ${l}">${Bn.ters||""}Ters \xE7evir</button>`:"")+`<button type="button" class="dugme kucuk" data-liste="sil" data-id="${o.id}" aria-label="Sil: ${l}">${Bn.sil||""}Sil</button></div></li>`}).join(""):s.innerHTML='<li class="bos-mesaj">Breadboard bo\u015F. Haz\u0131r devre y\xFCkle ya da yukar\u0131dan bir par\xE7a se\xE7.</li>',Pd(),a&&(s.querySelector(`[data-liste="${a[0]}"][data-id="${a[1]}"]`)||s.querySelector("[data-liste]")||ct("#sekme-kur"))?.focus({preventScroll:!0})}function Pd(){for(let n of dn("#parca-listesi li[data-id]"))n.dataset.id===Di?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")}function Ld(){let n=Vt.program,t=Qs(Vt.parcalar);for(let i of dn('input[name="program"]'))i.checked=i.value===n.tur;for(let i of dn("[data-program-ayar]"))i.hidden=i.dataset.programAyar!==n.tur;let e=(i,s,r)=>{for(let a of dn(`input[name="${i}"]`))a.checked=Number(a.value)===s,a.disabled=Number(a.value)===r};n.tur==="blink"&&(e("blink-pin",n.pin),e("bekleme",n.bekleme)),n.tur==="buton"&&(e("buton-giris",n.giris,n.cikis),e("buton-cikis",n.cikis,n.giris));for(let i of dn("[data-elle]")){let s=Number(i.dataset.elle),r=!!(n.tur==="elle"&&n.seviyeler[s]),a=t.has(String(s));i.setAttribute("aria-pressed",String(r)),i.querySelector("span").textContent=r?"HIGH":"LOW",i.classList.toggle("kablolu",a),i.setAttribute("aria-label",`${s}. pin: ${r?"HIGH":"LOW"}${a?", kablo tak\u0131l\u0131":""}`)}}function Zi(n,t){fa(),Vt.program=fd(n),Ld(),Dd(),kd(!0),ki(),Ad(),t&&ze(t)}document.addEventListener("change",n=>{let t=n.target,e=Vt.program;if(t.name==="program"){let i=e.tur==="blink"?e.pin:e.tur==="buton"?e.cikis:13;t.value==="blink"&&Zi({tur:"blink",pin:i,bekleme:1e3},`Program: yan\u0131p s\xF6nen LED, ${i}. pin`),t.value==="buton"&&Zi({tur:"buton",giris:i===2?3:2,cikis:i},"Program: butonla LED"),t.value==="elle"&&Zi({tur:"elle",seviyeler:{}},"Program: elle; pinleri HIGH ya da LOW yap")}t.name==="blink-pin"&&Zi({...e,pin:Number(t.value)},`LED pini ${t.value}`),t.name==="bekleme"&&Zi({...e,bekleme:Number(t.value)},`Bekleme ${gd(Number(t.value)/1e3,Number(t.value)%1e3?1:0)} saniye`),t.name==="buton-giris"&&Zi({...e,giris:Number(t.value)},`Giri\u015F pini ${t.value}`),t.name==="buton-cikis"&&Zi({...e,cikis:Number(t.value)},`\xC7\u0131k\u0131\u015F pini ${t.value}`),t.name==="kablo-renk"&&(nr=t.value,Jm(),Ad(),Et?.tur==="kablo"&&!Et.tasinan&&(Et.renk=nr,rr()))});document.addEventListener("click",n=>{let t=n.target.closest("[data-elle]");if(!t||Vt.program.tur!=="elle")return;let e=Number(t.dataset.elle),i={...Vt.program.seviyeler};i[e]?delete i[e]:i[e]=!0,Zi({tur:"elle",seviyeler:i},`${e}. pin ${i[e]?"HIGH":"LOW"}`)});function Dd(){Ki=mm(Vt.program,Vt.parcalar);let n=gm(Ki.satirlar);ct("#kod-satirlar").innerHTML=Ki.satirlar.map((t,e)=>`<li class="kod-satir${t.k.trim()?"":" bos"}" data-no="${e+1}"><code>${Jn(n[e])}</code><span class="tr">${Jn(t.t)}</span></li>`).join(""),jm()}function jm(){let n=[];if(ei&&ve?.calisiyor&&Ki){let e=Vt.program;e.tur==="blink"?n=Ro?Ki.vurgu.yuksek:Ki.vurgu.dusuk:e.tur==="buton"?n=ve.cikislar[e.cikis]==="HIGH"?Ki.vurgu.yuksek:Ki.vurgu.dusuk:n=Ki.vurgu.yuksek}let t=new Set(n);for(let e of dn("#kod-satirlar .kod-satir"))e.classList.toggle("calisiyor",t.has(Number(e.dataset.no)))}var ru=0,Em="",aa=0;function kd(n=!1){let t=Vt.program,e=ei&&t.tur==="blink"?`b${t.bekleme}:${t.pin}`:"";if(e===Em&&!n||(Em=e,clearTimeout(ru),ru=0,Ro=!0,!e))return;let i=()=>{Ro=!Ro,ki(),ru=setTimeout(i,Vt.program.bekleme)};ru=setTimeout(i,t.bekleme)}function gM(){let n=ei&&ve?.calisiyor&&ve.giris?.deger==="KARARSIZ";n&&!aa&&(aa=setTimeout(function(){Bm=Math.random()<.5,aa=0,ki()},90+Math.random()*380)),!n&&aa&&(clearTimeout(aa),aa=0)}function _M(n){ei=n;let t=ct("#calistir");t.toggleAttribute("data-calisiyor",n),t.innerHTML=`${n?Bn.dur||"":Bn.oynat||""}<span>${n?"Durdur":"\xC7al\u0131\u015Ft\u0131r"}</span>`,kd(!0),ki(),ze(n?ve.durdu==="kisa-devre"?"K\u0131sa devre var: devre \xE7al\u0131\u015Fm\u0131yor. Durum b\xF6l\xFCm\xFCne bak.":ve.durdu==="reset"?"RESET pini GND'ye ba\u011Fl\u0131: program \xE7al\u0131\u015Fm\u0131yor":`Program \xE7al\u0131\u015F\u0131yor. ${ve.tamam||""}`:"Program durdu")}ct("#calistir").addEventListener("click",()=>_M(!ei));ct("#geri-al").addEventListener("click",zm);ct("#sifirla").addEventListener("click",()=>{if(Et&&ir(!0),!Vt.parcalar.length){ze("Breadboard zaten bo\u015F");return}fa(),Vt.parcalar=[],Ls.clear(),ts(!1),Ds(),ze("Breadboard bo\u015Falt\u0131ld\u0131. Geri al ile geri d\xF6nebilirsin.")});var xi=ct("#buton-bas");function gu(n){Ls.clear();for(let t of Vt.parcalar)t.tur==="buton"&&(n&&Ls.add(t.id),mi.get(t.id)?.nesne.userData.bas?.(n));xi.toggleAttribute("data-basili",n),ki(),n&&!ei&&ze("Program \xE7al\u0131\u015Fm\u0131yor: \xF6nce \xC7al\u0131\u015Ft\u0131r'a bas")}function xM(n){Ls.add(n),mi.get(n)?.nesne.userData.bas?.(!0),ki(),setTimeout(()=>{Ls.delete(n),mi.get(n)?.nesne.userData.bas?.(!1),ki()},700)}xi.addEventListener("pointerdown",n=>{xi.setPointerCapture?.(n.pointerId),gu(!0)});for(let n of["pointerup","pointercancel","lostpointercapture"])xi.addEventListener(n,()=>{xi.hasAttribute("data-basili")&&gu(!1)});xi.addEventListener("keydown",n=>{(n.key===" "||n.key==="Enter")&&!n.repeat&&(n.preventDefault(),gu(!0))});xi.addEventListener("keyup",n=>{(n.key===" "||n.key==="Enter")&&gu(!1)});xi.addEventListener("contextmenu",n=>n.preventDefault());function Ds(n=!0){Gm(),Ld(),Dd(),kd(),ki(),da();let t=!Vt.parcalar.some(e=>e.tur==="buton");xi.hidden!==t&&(xi.hidden=t,Nd()),n&&Ad()}function ki(){if(ve=fm(Vt,{calisiyor:ei,faz:Ro,basili:[...Ls],kararsiz:Bm}),Zt){let t=[];for(let e of Vt.parcalar){if(e.tur!=="led")continue;let i=mi.get(e.id),s=ve.ledler[e.id],r=s?.yanik?s.parlaklik:0;i?.nesne.userData.ac(r),i&&r>0&&t.push([i.nesne,r])}t.sort((e,i)=>i[1]-e[1]),Vm.forEach((e,i)=>{let s=t[i];if(!s){e.intensity=0;return}e.color.copy(s[0].userData.renk),e.position.set(s[0].position.x,s[0].position.y+s[0].userData.lambaY,s[0].position.z),e.intensity=380*s[1]}),cu.ledOn(ei&&ve.durdu!=="kisa-devre"),cu.ledL(!!ve.l13)}jm(),ca();let n=Zt?bd():!1;da(),gM(),n&&Qi(),Zt?.iste()}function yM(){let n=ve.uyarilar,t=n.filter(r=>r.seviye==="hata").length,e=n.filter(r=>r.seviye==="uyari").length,i=t+e,s=t?"hata":e?"uyari":null;return ei?ve.durdu==="kisa-devre"?{sinif:"hata",ikon:"hata",kisa:"K\u0131sa devre: devre durdu",uzun:"K\u0131sa devre var: devre durdu. A\u015Fa\u011F\u0131daki uyar\u0131y\u0131 d\xFCzelt; d\xFCzelince devre kendili\u011Finden yeniden \xE7al\u0131\u015F\u0131r."}:ve.durdu==="reset"?{sinif:"hata",ikon:"hata",kisa:"RESET: program durdu",uzun:"RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fm\u0131yor."}:i?{sinif:s,ikon:s,kisa:`\xC7al\u0131\u015F\u0131yor \xB7 ${i} sorun`,uzun:`Devre \xE7al\u0131\u015F\u0131yor ama ${i} sorun var.`}:ve.tamam?{sinif:"tamam",ikon:"tamam",kisa:"Devre do\u011Fru, \xE7al\u0131\u015F\u0131yor",uzun:ve.tamam}:{sinif:"bekliyor",ikon:"oynat",kisa:"\xC7al\u0131\u015F\u0131yor",uzun:"Devre \xE7al\u0131\u015F\u0131yor."}:{sinif:s||"bekliyor",ikon:s||"bekliyor",kisa:i?`Durdu \xB7 ${i} sorun`:"Durdu: \xC7al\u0131\u015Ft\u0131r'a bas",uzun:`Devre durdu. \xC7al\u0131\u015Ft\u0131r'a bas\u0131nca program \xE7al\u0131\u015F\u0131r.${i?` \xC7al\u0131\u015Ft\u0131rmadan \xF6nce a\u015Fa\u011F\u0131daki ${i} soruna bak.`:""}`}}function ca(n=!1){if(!ve)return;let t=yM(),e=ve.uyarilar,i=fe.dataset.sinif||"6",s=e.filter(y=>y.seviye!=="bilgi"),r=s.some(y=>y.seviye==="hata"),a=JSON.stringify([t,e.map(y=>[y.seviye,y.metin,y.eylem?.metin,y.parcalar.length]),i,ve.ledler,ve.cikislar,ve.giris,Vt.program,ei]);if(!n&&a===ca.imza)return;ca.imza=a;let o=ct("#durum-cip");o.className=`durum-cip ${t.sinif}`,o.innerHTML=`${Bn[t.ikon]||""}<span>${Jn(t.kisa)}</span>`,o.setAttribute("aria-label",`Devre durumu: ${t.uzun} Ayr\u0131nt\u0131 i\xE7in dokun.`);let l=ct("#durum-rozet");l.textContent=s.length?String(s.length):"",l.className=`rozet${r?"":" uyari"}`,ct("#sekme-durum").setAttribute("aria-label",s.length?`Durum: ${s.length} sorun`:"Durum"),ct("#durum-ozet").className=`ozet-kutu ${t.sinif}`,ct("#durum-ozet").innerHTML=`${Bn[t.ikon]||""}<span>${Jn(t.uzun)}</span>`;let c=JSON.stringify(e.map(y=>[y.seviye,y.metin,y.eylem?.metin,y.parcalar]));(n||c!==ca.ui)&&(ca.ui=c,ct("#uyarilar").innerHTML=e.length?e.map((y,g)=>`<li class="${y.seviye}">${Bn[y.seviye]||""}<div><span class="seviye-ad">${fu[y.seviye]}</span><p class="uyari-metin">${Jn(y.metin)}</p></div>${y.parcalar.length||y.eylem?`<div class="uyari-dugmeler">${y.parcalar.length&&Zt?`<button type="button" class="dugme kucuk" data-goster="${g}">Sahnede g\xF6ster</button>`:""}${y.eylem?`<button type="button" class="dugme kucuk birincil" data-uyari-eylem="${g}">${Jn(y.eylem.metin)}</button>`:""}</div>`:""}</li>`).join(""):`<li class="bilgi">${Bn.tamam||""}<div><span class="seviye-ad">Tamam</span><p class="uyari-metin">Uyar\u0131 yok.</p></div></li>`);let h=Vt.program,f=[];if(h.tur==="blink"&&f.push([h.pin,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),h.tur==="buton"&&f.push([h.giris,"Giri\u015F (INPUT)"],[h.cikis,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),h.tur==="elle"){let y=Qs(Vt.parcalar);for(let g of qi.slice().reverse())(y.has(String(g))||h.seviyeler[g])&&f.push([g,"\xC7\u0131k\u0131\u015F (OUTPUT)"])}let u=i==="7"||i==="8",d=(y,g)=>{if(!ve.calisiyor)return"Program \xE7al\u0131\u015Fm\u0131yor";if(g.startsWith("Giri\u015F")){let p=ve.giris;return p?p.deger==="KARARSIZ"?"Bo\u015Fta: ne HIGH ne LOW okuyor":`${p.deger} okuyor${u&&Number.isFinite(p.gerilim)?` (${gd(p.gerilim)} V)`:""}`:""}return ve.cikislar[y]==="HIGH"?"HIGH (5 V)":"LOW (0 V)"};ct("#pin-tablo tbody").innerHTML=f.length?f.map(([y,g])=>`<tr><td>${y}. pin</td><td>${g}</td><td>${Jn(d(y,g))}</td></tr>`).join(""):'<tr><td colspan="3">Programda kullan\u0131lan pin yok.</td></tr>';let m=Vt.parcalar.filter(y=>y.tur==="led");ct("#led-liste").innerHTML=m.length?m.map(y=>{let g=ve.ledler[y.id]||{},p=g.yanik?g.parlaklik<.3?"\xC7ok s\xF6n\xFCk yan\u0131yor":"Yan\u0131yor":"Yanm\u0131yor",M=u&&g.yanik?` \xB7 ${gd(g.akim)} mA`:"";return`<li><span class="led-nokta" style="background:${Xc[y.renk]}" aria-hidden="true"></span><span>${Jn(Pi(y))}</span><span class="durum-yazi">${p}${M}</span></li>`}).join(""):"<li>Devrede LED yok.</li>"}function Qm(){wd("durum"),!Ln.matches&&fe.dataset.panel==="kapali"&&pu(!0),Ln.matches&&ti==="kisa"&&Ni("yarim")}ct("#durum-cip").addEventListener("click",()=>{Qm(),ct("#sekme-durum").focus({preventScroll:!0})});ct("#uyarilar").addEventListener("click",n=>{let t=n.target.closest("[data-goster]"),e=n.target.closest("[data-uyari-eylem]");if(t){let i=ve.uyarilar[Number(t.dataset.goster)];if(!i)return;pa(i.parcalar[0]),mu=i.parcalar.slice(1),Qi(),Ln.matches&&ti!=="kisa"&&Ni("kisa")}if(e){let i=ve.uyarilar[Number(e.dataset.uyariEylem)];i?.eylem?.tur==="blink-pin"&&Zi({...Vt.program,pin:i.eylem.pin},`Program art\u0131k ${i.eylem.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor`)}});var Am={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06]};for(let n of dn(".gorunum button"))n.addEventListener("click",()=>{let t=n.dataset.gorunum,e=Hc.genel;Zt?.kameraGit(Am[t]?{...e,yon:Am[t],yaricap:e.yaricap*(t==="ustten"?1:1.08)}:e);for(let i of dn(".gorunum button"))i.setAttribute("aria-pressed",String(i===n))});ct("#yakinlas")?.addEventListener("click",()=>Zt?.yakinlas(.8));ct("#uzaklas")?.addEventListener("click",()=>Zt?.yakinlas(1.25));ct("#rontgen-dugme").addEventListener("click",n=>{if(!er)return;let t=n.currentTarget.getAttribute("aria-pressed")!=="true";n.currentTarget.setAttribute("aria-pressed",String(t)),er.rontgen(t),Zt.golgeYenile(),ze(t?"R\xF6ntgen a\xE7\u0131k: breadboard'un i\xE7indeki metal \u015Feritler g\xF6r\xFCn\xFCyor":"R\xF6ntgen kapal\u0131")});function Nd(){let n=ct(".sahne-alani"),t=ct(".sahne-arac");!n||!t||(n.classList.remove("dar"),t.scrollWidth>t.clientWidth+1&&n.classList.add("dar"))}"ResizeObserver"in window&&new ResizeObserver(()=>Nd()).observe(ou);var tg=new URLSearchParams(location.search).has("test");Jm();Ld();Dd();ki();da(!0);xi.hidden=!Vt.parcalar.some(n=>n.tur==="buton");requestAnimationFrame(()=>setTimeout(eM,20));tg&&(window.ozgurTest={ekran(n){if(!Zt)return null;if(n.startsWith("parca:")){let e=Hm(n.slice(6));return e?Co(e.sub(new C(0,3.5,0))):null}let t=nn(n,n.startsWith("p:")?pi:qe);return t?Co(t):null},adimPiksel:n=>Zt?Xm(nn(n)):null,durum:()=>JSON.parse(JSON.stringify({parcalar:Vt.parcalar,program:Vt.program,calisiyor:ei,sonuc:ve,arac:Et&&{tur:Et.tur,ilk:Et.ilk},secici:!ct("#secici").hidden,secili:Di,imlec:Le,kare:Ym,kalite:Zt?.kalite()}))});
