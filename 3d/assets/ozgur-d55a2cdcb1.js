var vs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,Qu=1,vf=2;var ja=1,Gl=2,$r=3,Ss=0,hn=1,di=2,Ri=0,qr=1,Ci=2,th=3,eh=4,bf=5;var $s=100,Sf=101,Mf=102,wf=103,Ef=104,Af=200,Tf=201,Rf=202,Cf=203,nh=204,ih=205,If=206,Pf=207,Lf=208,Df=209,kf=210,Nf=211,Uf=212,Ff=213,Of=214,rl=0,al=1,ol=2,Pr=3,ll=4,cl=5,ul=6,hl=7,Hl=0,Bf=1,zf=2,fi=0,sh=1,rh=2,ah=3,oh=4,lh=5,ch=6,Qa=7;var uh=300,Ms=301,qs=302,Wl=303,Xl=304,to=306,dl=1e3,wi=1001,fl=1002,ln=1003,Vf=1004;var eo=1005;var un=1006,Yl=1007;var ws=1008;var Cn=1009,hh=1010,dh=1011,Zr=1012,$l=1013,pi=1014,qn=1015,mi=1016,ql=1017,Zl=1018,Kr=1020,fh=35902,ph=35899,mh=1021,gh=1022,Zn=1023,Ei=1026,Es=1027,Kl=1028,Jl=1029,As=1030,jl=1031;var Ql=1033,no=33776,io=33777,so=33778,ro=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,ac=37496,oc=37488,lc=37489,ao=37490,cc=37491,uc=37808,hc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,yc=37817,vc=37818,bc=37819,Sc=37820,Mc=37821,wc=36492,Ec=36494,Ac=36495,Tc=36283,Rc=36284,oo=36285,Cc=36286;var Ca=2300,pl=2301,il=2302,Wu=2303,Xu=2400,Yu=2401,$u=2402;var Gf=3200;var lo=0,Hf=1,qi="",tn="srgb",Ia="srgb-linear",Pa="linear",Me="srgb";var sl=7680;var Wf=519,Xf=512,Yf=513,$f=514,Ic=515,qf=516,Zf=517,Pc=518,Kf=519,_h=35044;var xh="300 es",ci=2e3,Lr=2001;function fg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function pg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jf(){let n=La("canvas");return n.style.display="block",n}var Vd={},Dr=null;function Da(...n){let t="THREE."+n.shift();Dr?Dr("log",t,...n):console.log(t,...n)}function jf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Gt(...n){n=jf(n);let t="THREE."+n.shift();if(Dr)Dr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Wt(...n){n=jf(n);let t="THREE."+n.shift();if(Dr)Dr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function zs(...n){let t=n.join(" ");t in Vd||(Vd[t]=!0,Gt(...n))}function Qf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var tp={[rl]:al,[ol]:ul,[ll]:hl,[Pr]:cl,[al]:rl,[ul]:ol,[hl]:ll,[cl]:Pr},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=1234567,Ea=Math.PI/180,kr=180/Math.PI;function Xi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function ne(n,t,e){return Math.max(t,Math.min(e,n))}function yh(n,t){return(n%t+t)%t}function mg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function gg(n,t,e){return n!==t?(e-n)/(t-n):0}function Aa(n,t,e){return(1-e)*n+e*t}function _g(n,t,e,i){return Aa(n,t,1-Math.exp(-e*i))}function xg(n,t=1){return t-Math.abs(yh(n,t*2)-t)}function yg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function vg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function bg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Sg(n,t){return n+Math.random()*(t-n)}function Mg(n){return n*(.5-Math.random())}function wg(n){n!==void 0&&(Gd=n);let t=Gd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eg(n){return n*Ea}function Ag(n){return n*kr}function Tg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Rg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ig(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),d=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*d,o*h,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vh={DEG2RAD:Ea,RAD2DEG:kr,generateUUID:Xi,clamp:ne,euclideanModulo:yh,mapLinear:mg,inverseLerp:gg,lerp:Aa,damp:_g,pingpong:xg,smoothstep:yg,smootherstep:vg,randInt:bg,randFloat:Sg,randFloatSpread:Mg,seededRandom:wg,degToRad:Eg,radToDeg:Ag,isPowerOfTwo:Tg,ceilPowerOfTwo:Rg,floorPowerOfTwo:Cg,setQuaternionFromProperEuler:Ig,normalize:Ae,denormalize:li},Ah=class Ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ah.prototype.isVector2=!0;var at=Ah,Tn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],m=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*y;g<0&&(u=-u,d=-d,m=-m,y=-y,g=-g);let p=1-o;if(g<.9995){let S=Math.acos(g),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+y*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-o*d,t[e+2]=c*m+h*d+o*u-l*f,t[e+3]=h*m-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Th=class Th{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yu.copy(this).projectOnVector(t),this.sub(yu)}reflect(t){return this.sub(yu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Th.prototype.isVector3=!0;var C=Th,yu=new C,Hd=new Tn,Rh=class Rh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],y=s[0],g=s[3],p=s[6],S=s[1],T=s[4],M=s[7],w=s[2],v=s[5],A=s[8];return r[0]=a*y+o*S+l*w,r[3]=a*g+o*T+l*v,r[6]=a*p+o*M+l*A,r[1]=c*y+h*S+f*w,r[4]=c*g+h*T+f*v,r[7]=c*p+h*M+f*A,r[2]=u*y+d*S+m*w,r[5]=u*g+d*T+m*v,r[8]=u*p+d*M+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=e*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=f*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vu.makeScale(t,e)),this}rotate(t){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vu.makeRotation(-t)),this}translate(t,e){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rh.prototype.isMatrix3=!0;var jt=Rh,vu=new jt,Wd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pg(){let n={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ia]:{primaries:t,whitePoint:i,transfer:Pa,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:i,transfer:Me,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}var ue=Pg();function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var dr,ml=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dr===void 0&&(dr=La("canvas")),dr.width=t.width,dr.height=t.height;let s=dr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=dr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yi(e[i]/255)*255):e[i]=Yi(e[i]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lg=0,Nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bu(s[a].image)):r.push(bu(s[a]))}else r=bu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ml.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Dg=0,Su=new C,En=class n extends ui{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wi,s=wi,r=un,a=ws,o=Zn,l=Cn,c=n.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Xi(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=uh;En.DEFAULT_ANISOTROPY=1;var Ch=class Ch{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(d+1)/2,w=(p+1)/2,v=(h+u)/4,A=(f+y)/4,x=(m+g)/4;return T>M&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=v/i,r=A/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=v/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=x/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(f-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;var ze=Ch,gl=class extends ui{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new En(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends gl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ka=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends En{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Vl=class Vl{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,m,y,g)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/fr.setFromMatrixColumn(t,0).length(),r=1/fr.setFromMatrixColumn(t,1).length(),a=1/fr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,m=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,y=c*f;e[0]=u+y*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,y=c*f;e[0]=u-y*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,m=o*h,y=o*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=y-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*l,d=a*c,m=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kg,t,Ng)}lookAt(t,e,i){let s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),as.crossVectors(i,kn),as.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),as.crossVectors(i,kn)),as.normalize(),ko.crossVectors(kn,as),s[0]=as.x,s[4]=ko.x,s[8]=kn.x,s[1]=as.y,s[5]=ko.y,s[9]=kn.y,s[2]=as.z,s[6]=ko.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],y=i[6],g=i[10],p=i[14],S=i[3],T=i[7],M=i[11],w=i[15],v=s[0],A=s[4],x=s[8],E=s[12],P=s[1],L=s[5],N=s[9],U=s[13],I=s[2],O=s[6],q=s[10],X=s[14],j=s[3],$=s[7],Q=s[11],B=s[15];return r[0]=a*v+o*P+l*I+c*j,r[4]=a*A+o*L+l*O+c*$,r[8]=a*x+o*N+l*q+c*Q,r[12]=a*E+o*U+l*X+c*B,r[1]=h*v+f*P+u*I+d*j,r[5]=h*A+f*L+u*O+d*$,r[9]=h*x+f*N+u*q+d*Q,r[13]=h*E+f*U+u*X+d*B,r[2]=m*v+y*P+g*I+p*j,r[6]=m*A+y*L+g*O+p*$,r[10]=m*x+y*N+g*q+p*Q,r[14]=m*E+y*U+g*X+p*B,r[3]=S*v+T*P+M*I+w*j,r[7]=S*A+T*L+M*O+w*$,r[11]=S*x+T*N+M*q+w*Q,r[15]=S*E+T*U+M*X+w*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],y=t[7],g=t[11],p=t[15],S=l*d-c*u,T=o*d-c*f,M=o*u-l*f,w=a*d-c*h,v=a*u-l*h,A=a*f-o*h;return e*(y*S-g*T+p*M)-i*(m*S-g*w+p*v)+s*(m*T-y*w+p*A)-r*(m*M-y*v+g*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],y=t[13],g=t[14],p=t[15],S=e*o-i*a,T=e*l-s*a,M=e*c-r*a,w=i*l-s*o,v=i*c-r*o,A=s*c-r*l,x=h*y-f*m,E=h*g-u*m,P=h*p-d*m,L=f*g-u*y,N=f*p-d*y,U=u*p-d*g,I=S*U-T*N+M*L+w*P-v*E+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(o*U-l*N+c*L)*O,t[1]=(s*N-i*U-r*L)*O,t[2]=(y*A-g*v+p*w)*O,t[3]=(u*v-f*A-d*w)*O,t[4]=(l*P-a*U-c*E)*O,t[5]=(e*U-s*P+r*E)*O,t[6]=(g*M-m*A-p*T)*O,t[7]=(h*A-u*M+d*T)*O,t[8]=(a*N-o*P+c*x)*O,t[9]=(i*P-e*N-r*x)*O,t[10]=(m*v-y*M+p*S)*O,t[11]=(f*M-h*v-d*S)*O,t[12]=(o*E-a*L-l*x)*O,t[13]=(e*L-i*E+s*x)*O,t[14]=(y*T-m*w-g*S)*O,t[15]=(h*w-f*T+u*S)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,y=a*h,g=a*f,p=o*f,S=l*c,T=l*h,M=l*f,w=i.x,v=i.y,A=i.z;return s[0]=(1-(y+p))*w,s[1]=(d+M)*w,s[2]=(m-T)*w,s[3]=0,s[4]=(d-M)*v,s[5]=(1-(u+p))*v,s[6]=(g+S)*v,s[7]=0,s[8]=(m+T)*A,s[9]=(g-S)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=fr.set(s[0],s[1],s[2]).length(),o=fr.set(s[4],s[5],s[6]).length(),l=fr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ri.copy(this);let c=1/a,h=1/o,f=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,e.setFromRotationMatrix(ri),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=ci,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===ci)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Lr)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ci,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===ci)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Lr)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Vl.prototype.isMatrix4=!0;var me=Vl,fr=new C,ri=new me,kg=new C(0,0,0),Ng=new C(1,1,1),as=new C,ko=new C,kn=new C,Yd=new me,$d=new Tn,hi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $d.setFromEuler(this),this.setFromQuaternion($d,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ug=0,qd=new C,pr=new Tn,Bi=new me,No=new C,ga=new C,Fg=new C,Og=new Tn,Zd=new C(1,0,0),Kd=new C(0,1,0),Jd=new C(0,0,1),jd={type:"added"},Bg={type:"removed"},mr={type:"childadded",child:null},Mu={type:"childremoved",child:null},Xe=class n extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new hi,i=new Tn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new jt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(Zd,t)}rotateY(t){return this.rotateOnAxis(Kd,t)}rotateZ(t){return this.rotateOnAxis(Jd,t)}translateOnAxis(t,e){return qd.copy(t).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zd,t)}translateY(t){return this.translateOnAxis(Kd,t)}translateZ(t){return this.translateOnAxis(Jd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?No.copy(t):No.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ga,No,this.up):Bi.lookAt(No,ga,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Bi),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jd),mr.child=t,this.dispatchEvent(mr),mr.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bg),Mu.child=t,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jd),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,Fg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Og,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new C(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function wu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=yh(t,1),e=ne(e,0,1),i=ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=wu(a,r,t+1/3),this.g=wu(a,r,t),this.b=wu(a,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function i(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let i=ep[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ue.workingToColorSpace(gn.copy(this),t),Math.round(ne(gn.r*255,0,255))*65536+Math.round(ne(gn.g*255,0,255))*256+Math.round(ne(gn.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(gn.copy(this),e);let i=gn.r,s=gn.g,r=gn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=tn){ue.workingToColorSpace(gn.copy(this),t);let e=gn.r,i=gn.g,s=gn.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(Uo);let i=Aa(os.h,Uo.h,e),s=Aa(os.s,Uo.s,e),r=Aa(os.l,Uo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Ht;Ht.NAMES=ep;var Vs=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new C,zi=new C,Eu=new C,Vi=new C,gr=new C,_r=new C,Qd=new C,Au=new C,Tu=new C,Ru=new C,Cu=new ze,Iu=new ze,Pu=new ze,Wi=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ai.subVectors(s,e),zi.subVectors(i,e),Eu.subVectors(t,e);let a=ai.dot(ai),o=ai.dot(zi),l=ai.dot(Eu),c=zi.dot(zi),h=zi.dot(Eu),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Cu.setScalar(0),Iu.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(t,e),Iu.fromBufferAttribute(t,i),Pu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Cu,r.x),a.addScaledVector(Iu,r.y),a.addScaledVector(Pu,r.z),a}static isFrontFacing(t,e,i,s){return ai.subVectors(i,e),zi.subVectors(t,e),ai.cross(zi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ai.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,i),_r.subVectors(r,i),Au.subVectors(t,i);let l=gr.dot(Au),c=_r.dot(Au);if(l<=0&&c<=0)return e.copy(i);Tu.subVectors(t,s);let h=gr.dot(Tu),f=_r.dot(Tu);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(gr,a);Ru.subVectors(t,r);let d=gr.dot(Ru),m=_r.dot(Ru);if(m>=0&&d<=m)return e.copy(r);let y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(_r,o);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Qd.subVectors(r,s),o=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Qd,o);let p=1/(g+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(gr,a).addScaledVector(_r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_a),Oo.subVectors(this.max,_a),xr.subVectors(t.a,_a),yr.subVectors(t.b,_a),vr.subVectors(t.c,_a),ls.subVectors(yr,xr),cs.subVectors(vr,yr),Us.subVectors(xr,vr);let e=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Us.z,Us.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Us.z,0,-Us.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Us.y,Us.x,0];return!Lu(e,xr,yr,vr,Oo)||(e=[1,0,0,0,1,0,0,0,1],!Lu(e,xr,yr,vr,Oo))?!1:(Bo.crossVectors(ls,cs),e=[Bo.x,Bo.y,Bo.z],Lu(e,xr,yr,vr,Oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new C,new C,new C,new C,new C,new C,new C,new C],oi=new C,Fo=new Xn,xr=new C,yr=new C,vr=new C,ls=new C,cs=new C,Us=new C,_a=new C,Oo=new C,Bo=new C,Fs=new C;function Lu(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Fs.fromArray(n,r);let o=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=t.dot(Fs),c=e.dot(Fs),h=i.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ze=new C,zo=new at,Vg=0,xn=class extends ui{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Na=class extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ua=class extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ye=class extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Gg=new Xn,xa=new C,Du=new C,hs=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Gg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xa.subVectors(t,this.center);let e=xa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Du.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xa.copy(t.center).add(Du)),this.expandByPoint(xa.copy(t.center).sub(Du))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hg=0,Wn=new me,ku=new Xe,br=new C,Nn=new Xn,ya=new Xn,on=new C,en=class n extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fg(t)?Ua:Na)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,i){return Wn.makeTranslation(t,e,i),this.applyMatrix4(Wn),this}scale(t,e,i){return Wn.makeScale(t,e,i),this.applyMatrix4(Wn),this}lookAt(t){return ku.lookAt(t),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Nn.min,ya.min),Nn.expandByPoint(on),on.addVectors(Nn.max,ya.max),Nn.expandByPoint(on)):(Nn.expandByPoint(ya.min),Nn.expandByPoint(ya.max))}Nn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)on.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(on));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(t,c),on.add(br)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new C,l[x]=new C;let c=new C,h=new C,f=new C,u=new at,d=new at,m=new at,y=new C,g=new C;function p(x,E,P){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,P),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),o[x].add(y),o[E].add(y),o[P].add(y),l[x].add(g),l[E].add(g),l[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,E=S.length;x<E;++x){let P=S[x],L=P.start,N=P.count;for(let U=L,I=L+N;U<I;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let T=new C,M=new C,w=new C,v=new C;function A(x){w.fromBufferAttribute(s,x),v.copy(w);let E=o[x];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(v,E);let L=M.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,L)}for(let x=0,E=S.length;x<E;++x){let P=S[x],L=P.start,N=P.count;for(let U=L,I=L+N;U<I;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new xn(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new C,Or=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=li(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nu=new C,Wg=new C,Xg=new jt,wn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Nu.subVectors(i,e).cross(Wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Xg.getNormalMatrix(t),s=this.coplanarPoint(Nu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yg=0,Yn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=qr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new wn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ds=class extends Yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sr,va=new C,Mr=new C,wr=new C,Er=new at,ba=new at,np=new me,Vo=new C,Sa=new C,Go=new C,tf=new at,Uu=new at,ef=new at,Gs=class extends Xe{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new en;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fa(e,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Or(i,3,0,!1)),Sr.setAttribute("uv",new Or(i,2,3,!1))}this.geometry=Sr,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),np.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-wr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ho(Vo.set(-.5,-.5,0),wr,a,Mr,s,r),Ho(Sa.set(.5,-.5,0),wr,a,Mr,s,r),Ho(Go.set(.5,.5,0),wr,a,Mr,s,r),tf.set(0,0),Uu.set(1,0),ef.set(1,1);let o=t.ray.intersectTriangle(Vo,Sa,Go,!1,va);if(o===null&&(Ho(Sa.set(-.5,.5,0),wr,a,Mr,s,r),Uu.set(0,1),o=t.ray.intersectTriangle(Vo,Go,Sa,!1,va),o===null))return;let l=t.ray.origin.distanceTo(va);l<t.near||l>t.far||e.push({distance:l,point:va.clone(),uv:Wi.getInterpolation(va,Vo,Sa,Go,tf,Uu,ef,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ho(n,t,e,i,s,r){Er.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ba.x=r*Er.x-s*Er.y,ba.y=s*Er.x+r*Er.y):ba.copy(Er),n.copy(t),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(np)}var Hi=new C,Fu=new C,Wo=new C,Xo=new C,Hs=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fu.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),Xo.copy(this.origin).sub(Fu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wo),o=Xo.dot(this.direction),l=-Xo.dot(Wo),c=Xo.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fu).addScaledVector(Wo,u),d}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,y=e.y-a.y,g=e.z-a.z,p=i.x-a.x,S=i.y-a.y,T=i.z-a.z,M=Math.abs(l),w=Math.abs(c),v=Math.abs(h),A,x,E,P,L,N,U,I,O,q,X,j;if(M>=w&&M>=v?(E=l,N=f,O=m,j=p,l>=0?(A=c,x=h,P=u,L=d,U=y,I=g,q=S,X=T):(A=h,x=c,P=d,L=u,U=g,I=y,q=T,X=S)):w>=v?(E=c,N=u,O=y,j=S,c>=0?(A=h,x=l,P=d,L=f,U=g,I=m,q=T,X=p):(A=l,x=h,P=f,L=d,U=m,I=g,q=p,X=T)):(E=h,N=d,O=g,j=T,h>=0?(A=l,x=c,P=f,L=u,U=m,I=y,q=p,X=S):(A=c,x=l,P=u,L=f,U=y,I=m,q=S,X=p)),E===0)return null;let $=A/E,Q=x/E,B=1/E,lt=P-$*N,ct=L-Q*N,$t=U-$*O,qt=I-Q*O,Qt=q-$*j,K=X-Q*j,nt=Qt*qt-K*$t,bt=lt*K-ct*Qt,Vt=$t*ct-qt*lt;if(s){if(nt<0||bt<0||Vt<0)return null}else if((nt<0||bt<0||Vt<0)&&(nt>0||bt>0||Vt>0))return null;let St=nt+bt+Vt;if(St===0)return null;let Xt=B*(nt*N+bt*O+Vt*j);return(St>0?Xt<0:Xt>0)?null:this.at(Xt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nf=new me,Os=new Hs,Yo=new hs,sf=new C,$o=new C,qo=new C,Zo=new C,Ou=new C,Ko=new C,rf=new C,Jo=new C,Ot=class extends Xe{constructor(t=new en,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Ou.fromBufferAttribute(f,t),a?Ko.addScaledVector(Ou,h):Ko.addScaledVector(Ou.sub(e),h))}e.add(Ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),Os.copy(t.ray).recast(t.near),!(Yo.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Yo,sf)===null||Os.origin.distanceToSquared(sf)>(t.far-t.near)**2))&&(nf.copy(r).invert(),Os.copy(t.ray).applyMatrix4(nf),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Os)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),T=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=S,w=T;M<w;M+=3){let v=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);s=jo(this,p,t,i,c,h,f,v,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){let S=o.getX(g),T=o.getX(g+1),M=o.getX(g+2);s=jo(this,a,t,i,c,h,f,S,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=S,w=T;M<w;M+=3){let v=M,A=M+1,x=M+2;s=jo(this,p,t,i,c,h,f,v,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){let S=g,T=g+1,M=g+2;s=jo(this,a,t,i,c,h,f,S,T,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function $g(n,t,e,i,s,r,a,o){let l;if(t.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ss,o),l===null)return null;Jo.copy(o),Jo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Jo);return c<e.near||c>e.far?null:{distance:c,point:Jo.clone(),object:n}}function jo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,$o),n.getVertexPosition(l,qo),n.getVertexPosition(c,Zo);let h=$g(n,t,e,i,$o,qo,Zo,rf);if(h){let f=new C;Wi.getBarycoord(rf,$o,qo,Zo,f),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,f,new at)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,f,new at)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};Wi.getNormal($o,qo,Zo,u.normal),h.face=u,h.barycoord=f}return h}var Oa=class extends En{constructor(t=null,e=1,i=1,s,r,a,o,l,c=ln,h=ln,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Br=class extends xn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ar=new me,af=new me,Qo=[],of=new Xn,qg=new me,Ma=new Ot,wa=new hs,Ai=class extends Ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Br(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ar),of.copy(t.boundingBox).applyMatrix4(Ar),this.boundingBox.union(of)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ar),wa.copy(t.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(wa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(i),t.ray.intersectsSphere(wa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),af.multiplyMatrices(i,Ar),Ma.matrixWorld=af,Ma.raycast(t,Qo);for(let a=0,o=Qo.length;a<o;a++){let l=Qo[a];l.instanceId=r,l.object=this,e.push(l)}Qo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Oa(new Float32Array(s*this.count),s,this.count,Kl,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bs=new hs,Zg=new at(.5,.5),tl=new C,zr=class{constructor(t=new wn,e=new wn,i=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],y=r[9],g=r[10],p=r[11],S=r[12],T=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-m,w-S).normalize(),s[1].setComponents(c+a,d+h,p+m,w+S).normalize(),s[2].setComponents(c+o,d+f,p+y,w+T).normalize(),s[3].setComponents(c-o,d-f,p-y,w-T).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(c-l,d-u,p-g,w-M).normalize();else if(s[4].setComponents(c-l,d-u,p-g,w-M).normalize(),e===ci)s[5].setComponents(c+l,d+u,p+g,w+M).normalize();else if(e===Lr)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);let e=Zg.distanceTo(t.center);return Bs.radius=.7071067811865476+e,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(tl.x=s.normal.x>0?t.max.x:t.min.x,tl.y=s.normal.y>0?t.max.y:t.min.y,tl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ba=class extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};var za=class extends En{constructor(t=[],e=Ms,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fs=class extends En{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends En{constructor(t,e,i=pi,s,r,a,o=ln,l=ln,c,h=Ei,f=1){if(h!==Ei&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xl=class extends ps{constructor(t,e=pi,i=Ms,s,r,a=ln,o=ln,l,c=Ei){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Va=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class n extends en{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(f,2));function m(y,g,p,S,T,M,w,v,A,x,E){let P=M/A,L=w/x,N=M/2,U=w/2,I=v/2,O=A+1,q=x+1,X=0,j=0,$=new C;for(let Q=0;Q<q;Q++){let B=Q*L-U;for(let lt=0;lt<O;lt++){let ct=lt*P-N;$[y]=ct*S,$[g]=B*T,$[p]=I,c.push($.x,$.y,$.z),$[y]=0,$[g]=0,$[p]=v>0?1:-1,h.push($.x,$.y,$.z),f.push(lt/A),f.push(1-Q/x),X+=1}}for(let Q=0;Q<x;Q++)for(let B=0;B<A;B++){let lt=u+B+O*Q,ct=u+B+O*(Q+1),$t=u+(B+1)+O*(Q+1),qt=u+(B+1)+O*Q;l.push(lt,ct,qt),l.push(ct,$t,qt),j+=6}o.addGroup(d,j,E),d+=j,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ws=class n extends en{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class n extends en{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,y=[],g=i/2,p=0;S(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function S(){let M=new C,w=new C,v=0,A=(e-t)/i;for(let x=0;x<=r;x++){let E=[],P=x/r,L=P*(e-t)+t;for(let N=0;N<=s;N++){let U=N/s,I=U*l+o,O=Math.sin(I),q=Math.cos(I);w.x=L*O,w.y=-P*i+g,w.z=L*q,f.push(w.x,w.y,w.z),M.set(O,A,q).normalize(),u.push(M.x,M.y,M.z),d.push(U,1-P),E.push(m++)}y.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let P=y[E][x],L=y[E+1][x],N=y[E+1][x+1],U=y[E][x+1];(t>0||E!==0)&&(h.push(P,L,U),v+=3),(e>0||E!==r-1)&&(h.push(L,N,U),v+=3)}c.addGroup(p,v,0),p+=v}function T(M){let w=m,v=new at,A=new C,x=0,E=M===!0?t:e,P=M===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,g*P,0),u.push(0,P,0),d.push(.5,.5),m++;let L=m;for(let N=0;N<=s;N++){let I=N/s*l+o,O=Math.cos(I),q=Math.sin(I);A.x=E*q,A.y=g*P,A.z=E*O,f.push(A.x,A.y,A.z),u.push(0,P,0),v.x=O*.5+.5,v.y=q*.5*P+.5,d.push(v.x,v.y),m++}for(let N=0;N<s;N++){let U=w+N,I=L+N;M===!0?h.push(I,I+1,U):h.push(I+1,I,U),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new me;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ga=class extends $n{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends Ga{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var lf=new C,cf=new C,Bu=new bh,zu=new bh,Vu=new bh,Vr=class extends $n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(cf.subVectors(s[0],s[1]).add(s[0]),c=cf);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Bu.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,y,g),zu.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,y,g),Vu.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(Bu.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),zu.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Vu.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Bu.calc(l),zu.calc(l),Vu.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uf(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Kg(n,t){let e=1-n;return e*e*t}function Jg(n,t){return 2*(1-n)*n*t}function jg(n,t){return n*n*t}function Ta(n,t,e,i){return Kg(n,t)+Jg(n,e)+jg(n,i)}function Qg(n,t){let e=1-n;return e*e*e*t}function t0(n,t){let e=1-n;return 3*e*e*n*t}function e0(n,t){return 3*(1-n)*n*n*t}function n0(n,t){return n*n*n*t}function Ra(n,t,e,i,s){return Qg(n,t)+t0(n,e)+e0(n,i)+n0(n,s)}var vl=class extends $n{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bl=class extends $n{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y),Ra(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sl=class extends $n{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ml=class extends $n{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wl=class extends $n{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ta(t,s.x,r.x,a.x),Ta(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends $n{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ta(t,s.x,r.x,a.x),Ta(t,s.y,r.y,a.y),Ta(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(uf(o,l.x,c.x,h.x,f.x),uf(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},i0=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:Vr,CubicBezierCurve:vl,CubicBezierCurve3:bl,EllipseCurve:Ga,LineCurve:Sl,LineCurve3:Ml,QuadraticBezierCurve:wl,QuadraticBezierCurve3:Ha,SplineCurve:El});var Gr=class n extends en{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=ne(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new C,u=new at,d=new C,m=new C,y=new C,g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-g,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(m)}for(let S=0;S<=e;S++){let T=i+S*h*s,M=Math.sin(T),w=Math.cos(T);for(let v=0;v<=t.length-1;v++){f.x=t[v].x*M,f.y=t[v].y,f.z=t[v].x*w,a.push(f.x,f.y,f.z),u.x=S/e,u.y=v/(t.length-1),o.push(u.x,u.y);let A=l[3*v+0]*M,x=l[3*v+1],E=l[3*v+0]*w;c.push(A,x,E)}}for(let S=0;S<e;S++)for(let T=0;T<t.length-1;T++){let M=T+S*t.length,w=M,v=M+t.length,A=M+t.length+1,x=M+1;r.push(w,v,x),r.push(A,x,v)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Ti=class n extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],m=[],y=[],g=[];for(let p=0;p<h;p++){let S=p*u-a;for(let T=0;T<c;T++){let M=T*f-r;m.push(M,-S,0),y.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let T=S+c*p,M=S+c*(p+1),w=S+1+c*(p+1),v=S+1+c*p;d.push(T,M,v),d.push(M,w,v)}this.setIndex(d),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Hr=class n extends en{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new C,m=new at;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let S=p+g,T=S,M=S+i+1,w=S+i+2,v=S+1;o.push(T,M,v),o.push(M,w,v)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Xs=class n extends en{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new C,u=new C,d=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let S=[],T=p/i,M=a+T*o,w=t*Math.cos(M),v=Math.sqrt(t*t-w*w),A=0;p===0&&a===0?A=.5/e:p===i&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let E=x/e,P=s+E*r;f.x=-v*Math.cos(P),f.y=w,f.z=v*Math.sin(P),m.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),g.push(E+A,1-T),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let T=h[p][S+1],M=h[p][S],w=h[p+1][S],v=h[p+1][S+1];(p!==0||a>0)&&d.push(T,M,v),(p!==i-1||l<Math.PI)&&d.push(M,w,v)}this.setIndex(d),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ms=class n extends en{constructor(t=new Ha(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new at,h=new C,f=[],u=[],d=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(d,2));function y(){for(let T=0;T<e;T++)g(T);g(r===!1?e:0),S(),p()}function g(T){h=t.getPointAt(T/e,h);let M=a.normals[T],w=a.binormals[T];for(let v=0;v<=s;v++){let A=v/s*Math.PI*2,x=Math.sin(A),E=-Math.cos(A);l.x=E*M.x+x*w.x,l.y=E*M.y+x*w.y,l.z=E*M.z+x*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let M=1;M<=s;M++){let w=(s+1)*(T-1)+(M-1),v=(s+1)*T+(M-1),A=(s+1)*T+M,x=(s+1)*(T-1)+M;m.push(w,v,x),m.push(v,A,x)}}function S(){for(let T=0;T<=e;T++)for(let M=0;M<=s;M++)c.x=T/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new i0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Wa=class extends Yn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ht(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Zs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(hf(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function vn(n){let t={};for(let e=0;e<n.length;e++){let i=Zs(n[e]);for(let s in i)t[s]=i[s]}return t}function hf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function s0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var ip={clone:Zs,merge:vn},r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new at().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Al=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},we=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xa=class extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Hl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Tl=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rl=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Tr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Gu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var gs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cl=class extends gs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yu:r=t,o=2*e-i;break;case $u:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yu:a=t,l=2*i-e;break;case $u:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,S=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,T=(-1-d)*g+(1.5+d)*y+.5*m,M=d*g-d*y;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+S*a[c+w]+T*a[l+w]+M*a[f+w];return r}},Il=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Pl=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ll=class extends gs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-e)/(s-e),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],p=d*u+m*2,S=f[p],T=f[p+1],M=t*u+m*2,w=h[M],v=h[M+1],A=l0(i,e,S,w,s);r[m]=sp(A,y,T,v,g)}return r}};function sp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function o0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function l0(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=sp(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=o0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Fn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Tr(e,this.TimeBufferType),this.values=Tr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Tr(t.times,Array),values:Tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Gu(t.settings)&&(i.settings={inTangents:Tr(t.settings.inTangents,Array),outTangents:Tr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ll(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ca:e=this.InterpolantFactoryMethodDiscrete;break;case pl:e=this.InterpolantFactoryMethodLinear;break;case il:e=this.InterpolantFactoryMethodSmooth;break;case Wu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Gt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return Wu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Gu(this.settings)&&(df(this.settings.inTangents,t),df(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&pg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===il,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let y=e[f+m];if(y!==e[u+m]||y!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Gu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function df(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=pl;var _s=class extends Fn{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Ca;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};Dl.prototype.ValueTypeName="color";var kl=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};kl.prototype.ValueTypeName="number";var Nl=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ya=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends Fn{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ca;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Fn{constructor(t,e,i,s){super(t,e,i,s)}};Ul.prototype.ValueTypeName="vector";var Fl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new Fl,Ol=class{constructor(t){this.manager=t!==void 0?t:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$a=class extends Wr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Hu=new me,ff=new C,pf=new C,qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ff.setFromMatrixPosition(t.matrixWorld),e.position.copy(ff),pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Hu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Lr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Hu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},el=new C,nl=new Tn,Mi=new C,Za=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(el,nl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,nl,Mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(el,nl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(el,nl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new C,mf=new at,gf=new at,cn=class extends Za{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,mf,gf),e.subVectors(gf,mf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qu=class extends qa{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},ys=class extends Wr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Xr=class extends Za{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zu=class extends qa{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ka=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new Zu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rr=-90,Cr=1,Bl=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Rr,Cr,t,e);s.layers=this.layers,this.add(s);let r=new cn(Rr,Cr,t,e);r.layers=this.layers,this.add(r);let a=new cn(Rr,Cr,t,e);a.layers=this.layers,this.add(a);let o=new cn(Rr,Cr,t,e);o.layers=this.layers,this.add(o);let l=new cn(Rr,Cr,t,e);l.layers=this.layers,this.add(l);let c=new cn(Rr,Cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},zl=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Mh="\\[\\]\\.:\\/",c0=new RegExp("["+Mh+"]","g"),wh="[^"+Mh+"]",u0="[^"+Mh.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",wh),d0=/(WCOD+)?/.source.replace("WCOD",u0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),p0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),m0=new RegExp("^"+h0+d0+f0+p0+"$"),g0=["material","materials","bones","map"],Ku=class{constructor(t,e,i){let s=i||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(t){let e=m0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);g0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Ku;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kS=new Float32Array(1);var _f=new me,Ys=class{constructor(t,e,i=0,s=1/0){this.ray=new Hs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _f.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_f),this}intersectObject(t,e=!0,i=[]){return Ju(t,this,i,e),i.sort(xf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ju(t[s],this,i,e);return i.sort(xf),i}};function xf(n,t){return n.distance-t.distance}function Ju(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Ju(r[a],t,e,!0)}}var Yr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ih=class Ih{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ih.prototype.isMatrix2=!0;var ju=Ih;var Ja=class extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Eh(n,t,e,i){let s=_0(i);switch(e){case mh:return n*t;case Kl:return n*t/s.components*s.byteLength;case Jl:return n*t/s.components*s.byteLength;case As:return n*t*2/s.components*s.byteLength;case jl:return n*t*2/s.components*s.byteLength;case gh:return n*t*3/s.components*s.byteLength;case Zn:return n*t*4/s.components*s.byteLength;case Ql:return n*t*4/s.components*s.byteLength;case no:case io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(n,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(n,8)*Math.max(t,8)/2;case sc:case rc:case oc:case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ac:case ao:case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case wc:case Ec:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tc:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oo:case Cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _0(n){switch(n){case Cn:case hh:return{byteLength:1,components:1};case Zr:case dh:case mi:return{byteLength:2,components:1};case ql:case Zl:return{byteLength:2,components:4};case pi:case $l:case qn:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Tp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function w0(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let y=f[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
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
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,q0=`#define PI 3.141592653589793
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
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
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
#endif`,M_=`uniform sampler2D dfgLUT;
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
}`,w_=`
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
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
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,R_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N_=`#if defined( USE_POINTS_UV )
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
#endif`,U_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`#ifdef USE_MORPHTARGETS
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
#endif`,G_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Lx=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,Vx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
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
}`,Hx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,Yx=`#define NORMAL
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
}`,$x=`#define PHONG
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
}`,qx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,Kx=`#define STANDARD
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
}`,Jx=`#define TOON
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
}`,jx=`#define TOON
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
}`,Qx=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:E0,alphahash_pars_fragment:A0,alphamap_fragment:T0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:I0,aomap_fragment:P0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:k0,begin_vertex:N0,beginnormal_vertex:U0,bsdfs:F0,iridescence_fragment:O0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:H0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:Y0,color_vertex:$0,common:q0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:K0,displacementmap_pars_vertex:J0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:__,envmap_vertex:o_,fog_vertex:l_,fog_pars_vertex:c_,fog_fragment:u_,fog_pars_fragment:h_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:f_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:x_,lights_toon_pars_fragment:y_,lights_phong_fragment:v_,lights_phong_pars_fragment:b_,lights_physical_fragment:S_,lights_physical_pars_fragment:M_,lights_fragment_begin:w_,lights_fragment_maps:E_,lights_fragment_end:A_,lightprobes_pars_fragment:T_,logdepthbuf_fragment:R_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:P_,map_fragment:L_,map_pars_fragment:D_,map_particle_fragment:k_,map_particle_pars_fragment:N_,metalnessmap_fragment:U_,metalnessmap_pars_fragment:F_,morphinstance_vertex:O_,morphcolor_vertex:B_,morphnormal_vertex:z_,morphtarget_pars_vertex:V_,morphtarget_vertex:G_,normal_fragment_begin:H_,normal_fragment_maps:W_,normal_pars_fragment:X_,normal_pars_vertex:Y_,normal_vertex:$_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:j_,opaque_fragment:Q_,packing:tx,premultiplied_alpha_fragment:ex,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:ux,skinbase_vertex:hx,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:xx,transmission_fragment:yx,transmission_pars_fragment:vx,uv_pars_fragment:bx,uv_pars_vertex:Sx,uv_vertex:Mx,worldpos_vertex:wx,background_vert:Ex,background_frag:Ax,backgroundCube_vert:Tx,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Ix,depth_vert:Px,depth_frag:Lx,distance_vert:Dx,distance_frag:kx,equirect_vert:Nx,equirect_frag:Ux,linedashed_vert:Fx,linedashed_frag:Ox,meshbasic_vert:Bx,meshbasic_frag:zx,meshlambert_vert:Vx,meshlambert_frag:Gx,meshmatcap_vert:Hx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:Yx,meshphong_vert:$x,meshphong_frag:qx,meshphysical_vert:Zx,meshphysical_frag:Kx,meshtoon_vert:Jx,meshtoon_frag:jx,points_vert:Qx,points_frag:ty,shadow_vert:ey,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},vt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Pi={basic:{uniforms:vn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:vn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:vn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:vn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:vn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:vn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:vn([vt.points,vt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:vn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:vn([vt.common,vt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:vn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:vn([vt.sprite,vt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:vn([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:vn([vt.lights,vt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Pi.physical={uniforms:vn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Lc={r:0,b:0,g:0},ry=new me,Rp=new jt;Rp.set(-1,0,0,0,1,0,0,0,1);function ay(n,t,e,i,s,r){let a=new Ht(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let M=S.backgroundBlurriness>0;T=t.get(T,M)}return T}function m(S){let T=!1,M=d(S);M===null?g(a,o):M&&M.isColor&&(g(M,1),T=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,T){let M=d(T);M&&(M.isCubeTexture||M.mapping===to)?(c===void 0&&(c=new Ot(new Fe(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Zs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rp),c.material.toneMapped=ue.getTransfer(M.colorSpace)!==Me,(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ot(new Ti(2,2),new Un({name:"BackgroundMaterial",uniforms:Zs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ue.getTransfer(M.colorSpace)!==Me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,T){S.getRGB(Lc,Sh(n)),e.buffers.color.setClear(Lc.r,Lc.g,Lc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:y,dispose:p}}function oy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,N,U,I,O){let q=!1,X=f(L,I,U,N);r!==X&&(r=X,c(r.object)),q=d(L,I,U,O),q&&m(L,I,U,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(L,N,U,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,N,U,I){let O=I.wireframe===!0,q=i[N.id];q===void 0&&(q={},i[N.id]=q);let X=L.isInstancedMesh===!0?L.id:0,j=q[X];j===void 0&&(j={},q[X]=j);let $=j[U.id];$===void 0&&($={},j[U.id]=$);let Q=$[O];return Q===void 0&&(Q=u(l()),$[O]=Q),Q}function u(L){let N=[],U=[],I=[];for(let O=0;O<e;O++)N[O]=0,U[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,N,U,I){let O=r.attributes,q=N.attributes,X=0,j=U.getAttributes();for(let $ in j)if(j[$].location>=0){let B=O[$],lt=q[$];if(lt===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),B===void 0||B.attribute!==lt||lt&&B.data!==lt.data)return!0;X++}return r.attributesNum!==X||r.index!==I}function m(L,N,U,I){let O={},q=N.attributes,X=0,j=U.getAttributes();for(let $ in j)if(j[$].location>=0){let B=q[$];B===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(B=L.instanceColor));let lt={};lt.attribute=B,B&&B.data&&(lt.data=B.data),O[$]=lt,X++}r.attributes=O,r.attributesNum=X,r.index=I}function y(){let L=r.newAttributes;for(let N=0,U=L.length;N<U;N++)L[N]=0}function g(L){p(L,0)}function p(L,N){let U=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;U[L]=1,I[L]===0&&(n.enableVertexAttribArray(L),I[L]=1),O[L]!==N&&(n.vertexAttribDivisor(L,N),O[L]=N)}function S(){let L=r.newAttributes,N=r.enabledAttributes;for(let U=0,I=N.length;U<I;U++)N[U]!==L[U]&&(n.disableVertexAttribArray(U),N[U]=0)}function T(L,N,U,I,O,q,X){X===!0?n.vertexAttribIPointer(L,N,U,O,q):n.vertexAttribPointer(L,N,U,I,O,q)}function M(L,N,U,I){y();let O=I.attributes,q=U.getAttributes(),X=N.defaultAttributeValues;for(let j in q){let $=q[j];if($.location>=0){let Q=O[j];if(Q===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let B=Q.normalized,lt=Q.itemSize,ct=t.get(Q);if(ct===void 0)continue;let $t=ct.buffer,qt=ct.type,Qt=ct.bytesPerElement,K=qt===n.INT||qt===n.UNSIGNED_INT||Q.gpuType===$l;if(Q.isInterleavedBufferAttribute){let nt=Q.data,bt=nt.stride,Vt=Q.offset;if(nt.isInstancedInterleavedBuffer){for(let St=0;St<$.locationSize;St++)p($.location+St,nt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<$.locationSize;St++)g($.location+St);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let St=0;St<$.locationSize;St++)T($.location+St,lt/$.locationSize,qt,B,bt*Qt,(Vt+lt/$.locationSize*St)*Qt,K)}else{if(Q.isInstancedBufferAttribute){for(let nt=0;nt<$.locationSize;nt++)p($.location+nt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let nt=0;nt<$.locationSize;nt++)g($.location+nt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let nt=0;nt<$.locationSize;nt++)T($.location+nt,lt/$.locationSize,qt,B,lt*Qt,lt/$.locationSize*nt*Qt,K)}}else if(X!==void 0){let B=X[j];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv($.location,B);break;case 3:n.vertexAttrib3fv($.location,B);break;case 4:n.vertexAttrib4fv($.location,B);break;default:n.vertexAttrib1fv($.location,B)}}}}S()}function w(){E();for(let L in i){let N=i[L];for(let U in N){let I=N[U];for(let O in I){let q=I[O];for(let X in q)h(q[X].object),delete q[X];delete I[O]}}delete i[L]}}function v(L){if(i[L.id]===void 0)return;let N=i[L.id];for(let U in N){let I=N[U];for(let O in I){let q=I[O];for(let X in q)h(q[X].object),delete q[X];delete I[O]}}delete i[L.id]}function A(L){for(let N in i){let U=i[N];for(let I in U){let O=U[I];if(O[L.id]===void 0)continue;let q=O[L.id];for(let X in q)h(q[X].object),delete q[X];delete O[L.id]}}}function x(L){for(let N in i){let U=i[N],I=L.isInstancedMesh===!0?L.id:0,O=U[I];if(O!==void 0){for(let q in O){let X=O[q];for(let j in X)h(X[j].object),delete X[j];delete O[q]}delete U[I],Object.keys(U).length===0&&delete i[N]}}}function E(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:v,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:S}}function ly(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Zn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Cn&&A!==qn&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),v=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:v}}function uy(n){let t=this,e=null,i=0,s=!1,r=!1,a=new wn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let S=r?0:i,T=S*4,M=p.clippingState||null;l.value=M,M=h(m,u,T,d);for(let w=0;w!==T;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,m){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=d+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,M=d;T!==y;++T,M+=4)a.copy(f[T]).applyMatrix4(S,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var jr=4,hy=6,dy=20,fy=256,co=new Xr,ap=new Ht,Ph=null,Lh=0,Dh=0,kh=!1,py=new C,Ks=new C,ta=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=py}=r;Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Lh,Dh),this._renderer.xr.enabled=kh,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:mi,format:Zn,colorSpace:Ia,depthBuffer:!1},s=op(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=my(r)),this._blurMaterial=_y(r,t,e),this._ggxMaterial=gy(r,t,e)}return s}_compileMaterial(t){let e=new Ot(new en,t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,i,s,r){let l=new cn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ap),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new Fe,new yn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(ap),p=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;Jr(s,M*w,T>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ms||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,co)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-jr?i-m+jr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Jr(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(o,co),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Jr(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(o,co)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-jr?s-this._lodMax+jr:0),u=4*(this._cubeSize-h);Jr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,co)}};function my(n){let t=[],e=[],i=n,s=n-jr+1+hy;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,T=p>2?0:-1,M=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];m.set(M,d*u*p);for(let w=0;w<u;w++){let v=h[w*2]*2-1,A=h[w*2+1]*2-1;p===0?Ks.set(1,A,v):p===1?Ks.set(-v,1,-A):p===2?Ks.set(-v,A,1):p===3?Ks.set(-1,A,-v):p===4?Ks.set(-v,-1,A):Ks.set(v,A,-1),Ks.toArray(y,(p*u+w)*d)}}let g=new en;g.setAttribute("position",new xn(m,d)),g.setAttribute("outputDirection",new xn(y,d)),e.push(new Ot(g,null)),i>jr&&i--}return{lodMeshes:e,sizeLods:t}}function op(n,t,e){let i=new Rn(n,t,e);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function gy(n,t,e){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function _y(n,t,e){return new Un({name:"SphericalGaussianBlur",defines:{SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function lp(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function cp(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var kc=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ri});r.uniforms.tEquirect.value=e;let a=new Ot(s,r),o=e.minFilter;return e.minFilter===ws&&(e.minFilter=un),new Bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function xy(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Wl||d===Xl)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new kc(m.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,m=d===Wl||d===Xl,y=d===Ms||d===qs;if(m||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new ta(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return m&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new ta(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Wl?u.mapping=Ms:d===Xl&&(u.mapping=qs),u}function l(u){let d=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function yy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&zs("WebGLRenderer: "+i+" extension not supported."),s}}}function vy(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,y=0;if(m===void 0)return;if(d!==null){let S=d.array;y=d.version;for(let T=0,M=S.length;T<M;T+=3){let w=S[T+0],v=S[T+1],A=S[T+2];u.push(w,v,v,A,A,w)}}else{let S=m.array;y=m.version;for(let T=0,M=S.length/3-1;T<M;T+=3){let w=T+0,v=T+1,A=T+2;u.push(w,v,v,A,A,w)}}let g=new(m.count>=65535?Ua:Na)(u,1);g.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function by(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let g=0;g<d;g++)y+=u[g];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sy(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function My(n,t,e){let i=new WeakMap,s=new ze;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),y===!0&&(T=3);let M=o.attributes.position.count*T,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let v=new Float32Array(M*w*4*f),A=new ka(v,M,w,f);A.type=qn,A.needsUpdate=!0;let x=T*4;for(let P=0;P<f;P++){let L=g[P],N=p[P],U=S[P],I=M*w*4*P;for(let O=0;O<L.count;O++){let q=O*x;d===!0&&(s.fromBufferAttribute(L,O),v[I+q+0]=s.x,v[I+q+1]=s.y,v[I+q+2]=s.z,v[I+q+3]=0),m===!0&&(s.fromBufferAttribute(N,O),v[I+q+4]=s.x,v[I+q+5]=s.y,v[I+q+6]=s.z,v[I+q+7]=0),y===!0&&(s.fromBufferAttribute(U,O),v[I+q+8]=s.x,v[I+q+9]=s.y,v[I+q+10]=s.z,v[I+q+11]=U.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new at(M,w)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function wy(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ey={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[Qa]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function Ay(n,t,e,i,s,r){let a=new Rn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new en;c.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ye([0,2,0,0,2,0],2));let h=new Al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ot(c,h),u=new Xr(-1,1,1,-1,0,1),d=null,m=null,y=!1,g,p=null,S=[],T=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let v=0;v<S.length;v++){let A=S[v];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){S=M,T=S.length>0&&S[0].isRenderPass===!0;let w=a.width,v=a.height;S.length>0&&o===null&&(o=new Rn(w,v,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(w,v,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let x=S[A];x.setSize&&x.setSize(w,v)}},this.begin=function(M,w){if(y||M.toneMapping===fi&&S.length===0)return!1;if(p=w,w!==null){let v=w.width,A=w.height;(a.width!==v||a.height!==A)&&this.setSize(v,A)}return T===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=fi,!0},this.hasRenderPass=function(){return T},this.end=function(M,w){M.toneMapping=g,y=!0;let v=a,A=o;for(let x=0;x<S.length;x++){let E=S[x];E.enabled!==!1&&(E.render(M,A,v,w),E.needsSwap!==!1&&(v=A,A=A===o?l:o))}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,h.defines={},ue.getTransfer(d)===Me&&(h.defines.SRGB_TRANSFER="");let x=Ey[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(p),M.render(f,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cp=new En,Fh=new ps(1,1),Ip=new ka,Pp=new _l,Lp=new za,up=[],hp=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function ea(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=up[s];if(r===void 0&&(r=new Float32Array(s),up[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function nn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fc(n,t){let e=hp[t];e===void 0&&(e=new Int32Array(t),hp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ty(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2fv(this.addr,t),sn(e,t)}}function Cy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;n.uniform3fv(this.addr,t),sn(e,t)}}function Iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4fv(this.addr,t),sn(e,t)}}function Py(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;pp.set(i),n.uniformMatrix2fv(this.addr,!1,pp),sn(e,i)}}function Ly(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;fp.set(i),n.uniformMatrix3fv(this.addr,!1,fp),sn(e,i)}}function Dy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(nn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,i))return;dp.set(i),n.uniformMatrix4fv(this.addr,!1,dp),sn(e,i)}}function ky(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2iv(this.addr,t),sn(e,t)}}function Uy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3iv(this.addr,t),sn(e,t)}}function Fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4iv(this.addr,t),sn(e,t)}}function Oy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function By(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;n.uniform2uiv(this.addr,t),sn(e,t)}}function zy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;n.uniform3uiv(this.addr,t),sn(e,t)}}function Vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;n.uniform4uiv(this.addr,t),sn(e,t)}}function Gy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fh.compareFunction=e.isReversedDepthBuffer()?Pc:Ic,r=Fh):r=Cp,e.setTexture2D(t||r,s)}function Hy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pp,s)}function Wy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Lp,s)}function Xy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ip,s)}function Yy(n){switch(n){case 5126:return Ty;case 35664:return Ry;case 35665:return Cy;case 35666:return Iy;case 35674:return Py;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return ky;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return By;case 36295:return zy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}function $y(n,t){n.uniform1fv(this.addr,t)}function qy(n,t){let e=ea(t,this.size,2);n.uniform2fv(this.addr,e)}function Zy(n,t){let e=ea(t,this.size,3);n.uniform3fv(this.addr,e)}function Ky(n,t){let e=ea(t,this.size,4);n.uniform4fv(this.addr,e)}function Jy(n,t){let e=ea(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jy(n,t){let e=ea(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Qy(n,t){let e=ea(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function tv(n,t){n.uniform1iv(this.addr,t)}function ev(n,t){n.uniform2iv(this.addr,t)}function nv(n,t){n.uniform3iv(this.addr,t)}function iv(n,t){n.uniform4iv(this.addr,t)}function sv(n,t){n.uniform1uiv(this.addr,t)}function rv(n,t){n.uniform2uiv(this.addr,t)}function av(n,t){n.uniform3uiv(this.addr,t)}function ov(n,t){n.uniform4uiv(this.addr,t)}function lv(n,t,e){let i=this.cache,s=t.length,r=Fc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fh:a=Cp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function cv(n,t,e){let i=this.cache,s=t.length,r=Fc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pp,r[a])}function uv(n,t,e){let i=this.cache,s=t.length,r=Fc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Lp,r[a])}function hv(n,t,e){let i=this.cache,s=t.length,r=Fc(e,s);nn(i,r)||(n.uniform1iv(this.addr,r),sn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ip,r[a])}function dv(n){switch(n){case 5126:return $y;case 35664:return qy;case 35665:return Zy;case 35666:return Ky;case 35674:return Jy;case 35675:return jy;case 35676:return Qy;case 5124:case 35670:return tv;case 35667:case 35671:return ev;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return hv}}var Oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yy(e.type)}},Bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dv(e.type)}},zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function mp(n,t){n.seq.push(t),n.map[t.id]=t}function fv(n,t,e){let i=n.name,s=i.length;for(Nh.lastIndex=0;;){let r=Nh.exec(i),a=Nh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mp(e,c===void 0?new Oh(o,n,t):new Bh(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new zh(o),mp(e,f)),e=f}}}var Qr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);fv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function gp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var pv=37297,mv=0;function gv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var _p=new jt;function _v(n){ue._getMatrix(_p,ue.workingColorSpace,n);let t=`mat3( ${_p.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case Pa:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+gv(n.getShaderSource(t),o)}else return r}function xv(n,t){let e=_v(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var yv={[sh]:"Linear",[rh]:"Reinhard",[ah]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[Qa]:"Neutral",[lh]:"Custom"};function vv(n,t){let e=yv[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dc=new C;function bv(){ue.getLuminanceCoefficients(Dc);let n=Dc.x.toFixed(4),t=Dc.y.toFixed(4),e=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Mv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ho(n){return n!==""}function yp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(n){return n.replace(Ev,Tv)}var Av=new Map;function Tv(n,t){let e=ae[t];if(e===void 0){let i=Av.get(t);if(i!==void 0)e=ae[i],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vh(e)}var Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(n){return n.replace(Rv,Cv)}function Cv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Iv={[ja]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function Pv(n){return Iv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lv={[Ms]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE_UV"};function Dv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Lv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var kv={[qs]:"ENVMAP_MODE_REFRACTION"};function Nv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Uv={[Hl]:"ENVMAP_BLENDING_MULTIPLY",[Bf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function Fv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Uv[n.combine]||"ENVMAP_BLENDING_NONE"}function Ov(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Bv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Pv(e),c=Dv(e),h=Nv(e),f=Fv(e),u=Ov(e),d=Sv(e),m=Mv(r),y=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(g=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ae.tonemapping_pars_fragment:"",e.toneMapping!==fi?vv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,xv("linearToOutputTexel",e.outputColorSpace),bv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),a=Vh(a),a=yp(a,e),a=vp(a,e),o=Vh(o),o=yp(o,e),o=vp(o,e),a=bp(a),o=bp(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+g+a,M=S+p+o,w=gp(s,s.VERTEX_SHADER,T),v=gp(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,v),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(L){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",U=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(v)||"",O=N.trim(),q=U.trim(),X=I.trim(),j=!0,$=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,v);else{let Q=xp(s,w,"vertex"),B=xp(s,v,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+Q+`
`+B)}else O!==""?Gt("WebGLProgram: Program Info Log:",O):(q===""||X==="")&&($=!1);$&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(v),x=new Qr(s,y),E=wv(s,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,pv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=v,this}var zv=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Hh(t),e.set(t,i)),i}},Hh=class{constructor(t){this.id=zv++,this.code=t,this.usedTimes=0}};function Vv(n){return n===As||n===ao||n===oo}function Gv(n,t,e,i,s,r){let a=new Ur,o=new Gh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,E,P,L,N,U){let I=L.fog,O=N.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||q,X),$=j&&j.mapping===to?j.image.height:null,Q=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Gt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let B=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,lt=B!==void 0?B.length:0,ct=0;O.morphAttributes.position!==void 0&&(ct=1),O.morphAttributes.normal!==void 0&&(ct=2),O.morphAttributes.color!==void 0&&(ct=3);let $t,qt,Qt,K;if(Q){let Ee=Pi[Q];$t=Ee.vertexShader,qt=Ee.fragmentShader}else{$t=x.vertexShader,qt=x.fragmentShader;let Ee=o.getVertexShaderStage(x),H=o.getFragmentShaderStage(x);o.update(x,Ee,H),Qt=Ee.id,K=H.id}let nt=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Vt=N.isInstancedMesh===!0,St=N.isBatchedMesh===!0,Xt=!!x.map,Be=!!x.matcap,ee=!!j,le=!!x.aoMap,de=!!x.lightMap,ie=!!x.bumpMap&&x.wireframe===!1,be=!!x.normalMap,ke=!!x.displacementMap,Ye=!!x.emissiveMap,fe=!!x.metalnessMap,Kt=!!x.roughnessMap,k=x.anisotropy>0,Ge=x.clearcoat>0,se=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,W=x.transmission>0,Z=k&&!!x.anisotropyMap,rt=Ge&&!!x.clearcoatMap,dt=Ge&&!!x.clearcoatNormalMap,J=Ge&&!!x.clearcoatRoughnessMap,et=_&&!!x.iridescenceMap,mt=_&&!!x.iridescenceThicknessMap,Lt=z&&!!x.sheenColorMap,gt=z&&!!x.sheenRoughnessMap,ft=!!x.specularMap,Dt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,Yt=W&&!!x.transmissionMap,F=W&&!!x.thicknessMap,ut=!!x.gradientMap,tt=!!x.alphaMap,pt=x.alphaTest>0,yt=!!x.alphaHash,it=!!x.extensions,It=fi;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(It=n.toneMapping);let Rt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:$t,fragmentShader:qt,defines:x.defines,customVertexShaderID:Qt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:St,batchingColor:St&&N._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&N.instanceColor!==null,instancingMorph:Vt&&N.morphTexture!==null,outputColorSpace:nt===null?n.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Xt,matcap:Be,envMap:ee,envMapMode:ee&&j.mapping,envMapCubeUVHeight:$,aoMap:le,lightMap:de,bumpMap:ie,normalMap:be,displacementMap:ke,emissiveMap:Ye,normalMapObjectSpace:be&&x.normalMapType===Hf,normalMapTangentSpace:be&&x.normalMapType===lo,packedNormalMap:be&&x.normalMapType===lo&&Vv(x.normalMap.format),metalnessMap:fe,roughnessMap:Kt,anisotropy:k,anisotropyMap:Z,clearcoat:Ge,clearcoatMap:rt,clearcoatNormalMap:dt,clearcoatRoughnessMap:J,dispersion:se,retroreflection:R,iridescence:_,iridescenceMap:et,iridescenceThicknessMap:mt,sheen:z,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:ft,specularColorMap:Dt,specularIntensityMap:Bt,transmission:W,transmissionMap:Yt,thicknessMap:F,gradientMap:ut,opaque:x.transparent===!1&&x.blending===qr&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:yt,combine:x.combine,mapUv:Xt&&m(x.map.channel),aoMapUv:le&&m(x.aoMap.channel),lightMapUv:de&&m(x.lightMap.channel),bumpMapUv:ie&&m(x.bumpMap.channel),normalMapUv:be&&m(x.normalMap.channel),displacementMapUv:ke&&m(x.displacementMap.channel),emissiveMapUv:Ye&&m(x.emissiveMap.channel),metalnessMapUv:fe&&m(x.metalnessMap.channel),roughnessMapUv:Kt&&m(x.roughnessMap.channel),anisotropyMapUv:Z&&m(x.anisotropyMap.channel),clearcoatMapUv:rt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(x.sheenRoughnessMap.channel),specularMapUv:ft&&m(x.specularMap.channel),specularColorMapUv:Dt&&m(x.specularColorMap.channel),specularIntensityMapUv:Bt&&m(x.specularIntensityMap.channel),transmissionMapUv:Yt&&m(x.transmissionMap.channel),thicknessMapUv:F&&m(x.thicknessMap.channel),alphaMapUv:tt&&m(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(be||k),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Xt||tt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:ct,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:Xt&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===Me,decodeVideoTextureEmissive:Ye&&x.emissiveMap.isVideoTexture===!0&&ue.getTransfer(x.emissiveMap.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(E,x),S(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let E=d[x.type],P;if(E){let L=Pi[E];P=ip.clone(L.uniforms)}else P=x.uniforms;return P}function M(x,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new Bv(n,E,x,s),c.push(P),h.set(E,P)),P}function w(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function v(x){o.remove(x)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:M,releaseProgram:w,releaseShaderCache:v,programs:c,dispose:A}}function Hv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Wv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Mp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,y,g,p){let S=n[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},n[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=m,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=g,S.group=p),t++,S}function l(u,d,m,y,g,p,S){S.reversedDepth===!0&&(g=-g);let T=o(u,d,m,y,g,p);m.transmission>0?i.push(T):m.transparent===!0?s.push(T):e.push(T)}function c(u,d,m,y,g,p){let S=o(u,d,m,y,g,p);m.transmission>0?i.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||Wv),i.length>1&&i.sort(d||Mp),s.length>1&&s.sort(d||Mp)}function f(){for(let u=t,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Xv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new wp,n.set(i,[a])):s>=r.length?(a=new wp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Yv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Ht};break;case"SpotLight":e={position:new C,direction:new C,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function $v(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var qv=0;function Zv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Kv(n){let t=new Yv,e=$v(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new me,a=new me;function o(c){let h=0,f=0,u=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,m=0,y=0,g=0,p=0,S=0,T=0,M=0,w=0,v=0,A=0,x=0,E=0,P=0;c.sort(Zv);for(let N=0,U=c.length;N<U;N++){let I=c[N],O=I.color,q=I.intensity,X=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===As?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*q,f+=O.g*q,u+=O.b*q;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],q);P++}else if(I.isSunLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=B,i.sunShadowMap[m]=j;let lt=Q.getViewportCount();for(let ct=0;ct<lt;ct++)i.sunShadowMatrix[y+ct]=Q.getMatrix(ct),i.sunShadowCascade[y+ct]=Q._cascadeData[ct];y+=lt,m++}i.sun[d]=$,d++}else if(I.isDirectionalLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=I.shadow.matrix,w++}i.directional[g]=$,g++}else if(I.isSpotLight){let $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(O).multiplyScalar(q),$.distance=X,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[S]=$;let Q=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[S]=Q.matrix,I.castShadow){let B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[S]=B,i.spotShadowMap[S]=j,A++}S++}else if(I.isRectAreaLight){let $=t.get(I);$.color.copy(O).multiplyScalar(q),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=$,T++}else if(I.isPointLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let Q=I.shadow,B=e.get(I);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=$,p++}else if(I.isHemisphereLight){let $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(q),$.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[M]=$,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==T||L.hemiLength!==M||L.numSunShadows!==m||L.numDirectionalShadows!==w||L.numPointShadows!==v||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=g,i.spot.length=S,i.rectArea.length=T,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.sunLength=d,L.directionalLength=g,L.pointLength=p,L.spotLength=S,L.rectAreaLength=T,L.hemiLength=M,L.numSunShadows=m,L.numDirectionalShadows=w,L.numPointShadows=v,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=P,i.version=qv++)}function l(c,h){let f=0,u=0,d=0,m=0,y=0,g=0,p=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let M=c[S];if(M.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(M.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Ep(n){let t=new Kv(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Jv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ep(n),t.set(s,[o])):r>=a.length?(o=new Ep(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`,tb=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],eb=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ap=new me,uo=new C,Uh=new C;function nb(n,t,e){let i=new zr,s=new at,r=new at,a=new ze,o=new Tl,l=new Rl,c={},h=e.maxTextureSize,f={[Ss]:hn,[hn]:Ss,[di]:di},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:jv,fragmentShader:Qv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new en;m.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ot(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let p=this.type;this.render=function(v,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===Gl&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ja);let E=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ri),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=p!==this.type;U&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=v.length;I<O;I++){let q=v[I],X=q.shadow;if(X===void 0){Gt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let j=X.getFrameExtents();s.multiply(j),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,X.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||U===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===$r){if(q.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Rn(s.x,s.y,{format:As,type:mi,minFilter:un,magFilter:un,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new ps(s.x,s.y,qn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Ei,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ln,X.map.depthTexture.magFilter=ln}else q.isPointLight?(X.map=new kc(s.x),X.map.depthTexture=new xl(s.x,pi)):(X.map=new Rn(s.x,s.y),X.map.depthTexture=new ps(s.x,s.y,pi)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Ei,this.type===ja?(X.map.depthTexture.compareFunction=$?Pc:Ic,X.map.depthTexture.minFilter=un,X.map.depthTexture.magFilter=un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ln,X.map.depthTexture.magFilter=ln);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,x);for(let B=0;B<Q;B++){let lt=X.getCamera(B);if(q.isPointLight){let ct=X.camera,$t=X.matrix,qt=q.distance||ct.far;qt!==ct.far&&(ct.far=qt,ct.updateProjectionMatrix()),uo.setFromMatrixPosition(q.matrixWorld),ct.position.copy(uo),Uh.copy(ct.position),Uh.add(tb[B]),ct.up.copy(eb[B]),ct.lookAt(Uh),ct.updateMatrixWorld(),$t.makeTranslation(-uo.x,-uo.y,-uo.z),Ap.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ap,ct.coordinateSystem,ct.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,B),n.clear();else{B===0&&(n.setRenderTarget(X.map),n.clear());let ct=X.getViewport(B);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),N.viewport(a)}i=X.getFrustum(B),M(A,x,lt,q,this.type)}X.isPointLightShadow!==!0&&this.type===$r&&S(X,x),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,P,L)};function S(v,A){let x=t.update(y);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null?v.mapPass=new Rn(s.x,s.y,{format:As,type:mi}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),u.uniforms.shadow_pass.value=v.map.depthTexture,u.uniforms.resolution.value.set(v.map.width,v.map.height),u.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(A,null,x,u,y,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(A,null,x,d,y,null)}function T(v,A,x,E){let P=null,L=x.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=P.uuid,U=A.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let O=I[U];O===void 0&&(O=P.clone(),I[U]=O,A.addEventListener("dispose",w)),P=O}if(P.visible=A.visible,P.wireframe=A.wireframe,E===$r?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=n.properties.get(P);N.light=x}return P}function M(v,A,x,E,P){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===$r)&&(!v.frustumCulled||v.intersectsFrustum(i))){v.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,v.matrixWorld);let U=t.update(v),I=v.material;if(Array.isArray(I)){let O=U.groups;for(let q=0,X=O.length;q<X;q++){let j=O[q],$=I[j.materialIndex];if($&&$.visible){let Q=T(v,$,E,P);v.onBeforeShadow(n,v,A,x,U,Q,j),n.renderBufferDirect(x,null,U,Q,v,j),v.onAfterShadow(n,v,A,x,U,Q,j)}}}else if(I.visible){let O=T(v,I,E,P);v.onBeforeShadow(n,v,A,x,U,O,null),n.renderBufferDirect(x,null,U,O,v,null),v.onAfterShadow(n,v,A,x,U,O,null)}}let N=v.children;for(let U=0,I=N.length;U<I;U++)M(N[U],A,x,E,P)}function w(v){v.target.removeEventListener("dispose",w);for(let x in c){let E=c[x],P=v.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function ib(n,t){function e(){let F=!1,ut=new ze,tt=null,pt=new ze(0,0,0,0);return{setMask:function(yt){tt!==yt&&!F&&(n.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){F=yt},setClear:function(yt,it,It,Rt,Ee){Ee===!0&&(yt*=Rt,it*=Rt,It*=Rt),ut.set(yt,it,It,Rt),pt.equals(ut)===!1&&(n.clearColor(yt,it,It,Rt),pt.copy(ut))},reset:function(){F=!1,tt=null,pt.set(-1,0,0,0)}}}function i(){let F=!1,ut=!1,tt=null,pt=null,yt=null;return{setReversed:function(it){if(ut!==it){let It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let Rt=yt;yt=null,this.setClear(Rt)}},getReversed:function(){return ut},setTest:function(it){it?nt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(it){tt!==it&&!F&&(n.depthMask(it),tt=it)},setFunc:function(it){if(ut&&(it=tp[it]),pt!==it){switch(it){case rl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=it}},setLocked:function(it){F=it},setClear:function(it){yt!==it&&(yt=it,ut&&(it=1-it),n.clearDepth(it))},reset:function(){F=!1,tt=null,pt=null,yt=null,ut=!1}}}function s(){let F=!1,ut=null,tt=null,pt=null,yt=null,it=null,It=null,Rt=null,Ee=null;return{setTest:function(H){F||(H?nt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(H){ut!==H&&!F&&(n.stencilMask(H),ut=H)},setFunc:function(H,st,_t){(tt!==H||pt!==st||yt!==_t)&&(n.stencilFunc(H,st,_t),tt=H,pt=st,yt=_t)},setOp:function(H,st,_t){(it!==H||It!==st||Rt!==_t)&&(n.stencilOp(H,st,_t),it=H,It=st,Rt=_t)},setLocked:function(H){F=H},setClear:function(H){Ee!==H&&(n.clearStencil(H),Ee=H)},reset:function(){F=!1,ut=null,tt=null,pt=null,yt=null,it=null,It=null,Rt=null,Ee=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],y=null,g=!1,p=null,S=null,T=null,M=null,w=null,v=null,A=null,x=new Ht(0,0,0),E=0,P=!1,L=null,N=null,U=null,I=null,O=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,j=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),X=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=j>=2);let Q=null,B={},lt=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),$t=new ze().fromArray(lt),qt=new ze().fromArray(ct);function Qt(F,ut,tt,pt){let yt=new Uint8Array(4),it=n.createTexture();n.bindTexture(F,it),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<tt;It++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(ut+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return it}let K={};K[n.TEXTURE_2D]=Qt(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(n.DEPTH_TEST),a.setFunc(Pr),ie(!1),be(Qu),nt(n.CULL_FACE),le(Ri);function nt(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function bt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Vt(F,ut){return u[F]!==ut?(n.bindFramebuffer(F,ut),u[F]=ut,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function St(F,ut){let tt=m,pt=!1;if(F){tt=d.get(ut),tt===void 0&&(tt=[],d.set(ut,tt));let yt=F.textures;if(tt.length!==yt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let it=0,It=yt.length;it<It;it++)tt[it]=n.COLOR_ATTACHMENT0+it;tt.length=yt.length,pt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,pt=!0);pt&&n.drawBuffers(tt)}function Xt(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let Be={[$s]:n.FUNC_ADD,[Sf]:n.FUNC_SUBTRACT,[Mf]:n.FUNC_REVERSE_SUBTRACT};Be[wf]=n.MIN,Be[Ef]=n.MAX;let ee={[Af]:n.ZERO,[Tf]:n.ONE,[Rf]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[kf]:n.SRC_ALPHA_SATURATE,[Lf]:n.DST_COLOR,[If]:n.DST_ALPHA,[Cf]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[Df]:n.ONE_MINUS_DST_COLOR,[Pf]:n.ONE_MINUS_DST_ALPHA,[Nf]:n.CONSTANT_COLOR,[Uf]:n.ONE_MINUS_CONSTANT_COLOR,[Ff]:n.CONSTANT_ALPHA,[Of]:n.ONE_MINUS_CONSTANT_ALPHA};function le(F,ut,tt,pt,yt,it,It,Rt,Ee,H){if(F===Ri){g===!0&&(bt(n.BLEND),g=!1);return}if(g===!1&&(nt(n.BLEND),g=!0),F!==bf){if(F!==p||H!==P){if((S!==$s||w!==$s)&&(n.blendEquation(n.FUNC_ADD),S=$s,w=$s),H)switch(F){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ci:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",F);break}else switch(F){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ci:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case th:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",F);break}T=null,M=null,v=null,A=null,x.set(0,0,0),E=0,p=F,P=H}return}yt=yt||ut,it=it||tt,It=It||pt,(ut!==S||yt!==w)&&(n.blendEquationSeparate(Be[ut],Be[yt]),S=ut,w=yt),(tt!==T||pt!==M||it!==v||It!==A)&&(n.blendFuncSeparate(ee[tt],ee[pt],ee[it],ee[It]),T=tt,M=pt,v=it,A=It),(Rt.equals(x)===!1||Ee!==E)&&(n.blendColor(Rt.r,Rt.g,Rt.b,Ee),x.copy(Rt),E=Ee),p=F,P=!1}function de(F,ut){F.side===di?bt(n.CULL_FACE):nt(n.CULL_FACE);let tt=F.side===hn;ut&&(tt=!tt),ie(tt),F.blending===qr&&F.transparent===!1?le(Ri):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let pt=F.stencilWrite;o.setTest(pt),pt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function be(F){F!==yf?(nt(n.CULL_FACE),F!==N&&(F===Qu?n.cullFace(n.BACK):F===vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),N=F}function ke(F){F!==U&&(X&&n.lineWidth(F),U=F)}function Ye(F,ut,tt){F?(nt(n.POLYGON_OFFSET_FILL),(I!==ut||O!==tt)&&(I=ut,O=tt,a.getReversed()&&(ut=-ut),n.polygonOffset(ut,tt))):bt(n.POLYGON_OFFSET_FILL)}function fe(F){F?nt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function Kt(F){F===void 0&&(F=n.TEXTURE0+q-1),Q!==F&&(n.activeTexture(F),Q=F)}function k(F,ut,tt){tt===void 0&&(Q===null?tt=n.TEXTURE0+q-1:tt=Q);let pt=B[tt];pt===void 0&&(pt={type:void 0,texture:void 0},B[tt]=pt),(pt.type!==F||pt.texture!==ut)&&(Q!==tt&&(n.activeTexture(tt),Q=tt),n.bindTexture(F,ut||K[F]),pt.type=F,pt.texture=ut)}function Ge(){let F=B[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{n.compressedTexImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function _(){try{n.texSubImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function z(){try{n.texSubImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function rt(){try{n.texStorage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function dt(){try{n.texStorage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function J(){try{n.texImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function et(){try{n.texImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function mt(F){return f[F]!==void 0?f[F]:n.getParameter(F)}function Lt(F,ut){f[F]!==ut&&(n.pixelStorei(F,ut),f[F]=ut)}function gt(F){$t.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),$t.copy(F))}function ft(F){qt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),qt.copy(F))}function Dt(F,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let pt=tt.get(F);pt===void 0&&(pt=n.getUniformBlockIndex(ut,F.name),tt.set(F,pt))}function Bt(F,ut){let pt=c.get(ut).get(F);l.get(ut)!==pt&&(n.uniformBlockBinding(ut,pt,F.__bindingPointIndex),l.set(ut,pt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,B={},u={},d=new WeakMap,m=[],y=null,g=!1,p=null,S=null,T=null,M=null,w=null,v=null,A=null,x=new Ht(0,0,0),E=0,P=!1,L=null,N=null,U=null,I=null,O=null,$t.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:bt,bindFramebuffer:Vt,drawBuffers:St,useProgram:Xt,setBlending:le,setMaterial:de,setFlipSided:ie,setCullFace:be,setLineWidth:ke,setPolygonOffset:Ye,setScissorTest:fe,activeTexture:Kt,bindTexture:k,unbindTexture:Ge,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:J,texImage3D:et,pixelStorei:Lt,getParameter:mt,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:rt,texStorage3D:dt,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:gt,viewport:ft,reset:Yt}}function sb(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,_){return m?new OffscreenCanvas(R,_):La("canvas")}function g(R,_,z){let W=1,Z=se(R);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let rt=Math.floor(W*Z.width),dt=Math.floor(W*Z.height);u===void 0&&(u=y(rt,dt));let J=_?y(rt,dt):u;return J.width=rt,J.height=dt,J.getContext("2d").drawImage(R,0,0,rt,dt),Gt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+dt+")."),J}else return"data"in R&&Gt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function S(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,_,z,W,Z,rt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;W&&(dt=t.get("EXT_texture_norm16"),dt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8),z===n.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),z===n.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),_===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8),z===n.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),z===n.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),z===n.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){let et=rt?Pa:ue.getTransfer(Z);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=et===Me?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),z===n.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function w(R,_){let z;return R?_===null||_===pi||_===Kr?z=n.DEPTH24_STENCIL8:_===qn?z=n.DEPTH32F_STENCIL8:_===Zr&&(z=n.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===Kr?z=n.DEPTH_COMPONENT24:_===qn?z=n.DEPTH_COMPONENT32F:_===Zr&&(z=n.DEPTH_COMPONENT16),z}function v(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function A(R){let _=R.target;_.removeEventListener("dispose",A),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(R){let _=R.target;_.removeEventListener("dispose",x),L(_)}function E(R){let _=i.get(R);if(_.__webglInit===void 0)return;let z=R.source,W=d.get(z);if(W){let Z=W[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(R),Object.keys(W).length===0&&d.delete(z)}i.remove(R)}function P(R){let _=i.get(R);n.deleteTexture(_.__webglTexture);let z=R.source,W=d.get(z);delete W[_.__cacheKey],a.memory.textures--}function L(R){let _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Z=0;Z<_.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=R.textures;for(let W=0,Z=z.length;W<Z;W++){let rt=i.get(z[W]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(z[W])}i.remove(R)}let N=0;function U(){N=0}function I(){return N}function O(R){N=R}function q(){let R=N;return R>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function X(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function j(R,_){let z=i.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let W=R.image;if(W===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,R,_);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function $(R,_){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){bt(z,R,_);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function Q(R,_){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){bt(z,R,_);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function B(R,_){let z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Vt(z,R,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let lt={[dl]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},ct={[ln]:n.NEAREST,[Vf]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},$t={[Xf]:n.NEVER,[Kf]:n.ALWAYS,[Yf]:n.LESS,[Ic]:n.LEQUAL,[$f]:n.EQUAL,[Pc]:n.GEQUAL,[qf]:n.GREATER,[Zf]:n.NOTEQUAL};function qt(R,_){if(_.type===qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===Yl||_.magFilter===eo||_.magFilter===ws||_.minFilter===un||_.minFilter===Yl||_.minFilter===eo||_.minFilter===ws)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,lt[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,lt[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,lt[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ct[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,$t[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==eo&&_.minFilter!==ws||_.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Qt(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",A));let W=_.source,Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));let rt=X(_);if(rt!==R.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[rt].usedTimes++;let dt=Z[R.__cacheKey];dt!==void 0&&(Z[R.__cacheKey].usedTimes--,dt.usedTimes===0&&P(_)),R.__cacheKey=rt,R.__webglTexture=Z[rt].texture}return z}function K(R,_,z){return Math.floor(Math.floor(R/z)/_)}function nt(R,_,z,W){let rt=R.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,W,_.data);else{rt.sort((Lt,gt)=>Lt.start-gt.start);let dt=0;for(let Lt=1;Lt<rt.length;Lt++){let gt=rt[dt],ft=rt[Lt],Dt=gt.start+gt.count,Bt=K(ft.start,_.width,4),Yt=K(gt.start,_.width,4);ft.start<=Dt+1&&Bt===Yt&&K(ft.start+ft.count-1,_.width,4)===Bt?gt.count=Math.max(gt.count,ft.start+ft.count-gt.start):(++dt,rt[dt]=ft)}rt.length=dt+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Lt=0,gt=rt.length;Lt<gt;Lt++){let ft=rt[Lt],Dt=Math.floor(ft.start/4),Bt=Math.ceil(ft.count/4),Yt=Dt%_.width,F=Math.floor(Dt/_.width),ut=Bt,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Yt,F,ut,tt,z,W,_.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,mt)}}function bt(R,_,z){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);let Z=Qt(R,_),rt=_.source;e.bindTexture(W,R.__webglTexture,n.TEXTURE0+z);let dt=i.get(rt);if(rt.version!==dt.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let tt=ue.getPrimaries(ue.workingColorSpace),pt=_.colorSpace===qi?null:ue.getPrimaries(_.colorSpace),yt=_.colorSpace===qi||tt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let et=g(_.image,!1,s.maxTextureSize);et=Ge(_,et);let mt=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),gt=M(_.internalFormat,mt,Lt,_.normalized,_.colorSpace,_.isVideoTexture);qt(W,_);let ft,Dt=_.mipmaps,Bt=_.isVideoTexture!==!0,Yt=dt.__version===void 0||Z===!0,F=rt.dataReady,ut=v(_,et);if(_.isDepthTexture)gt=w(_.format===Es,_.type),Yt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,gt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,gt,et.width,et.height,0,mt,Lt,null));else if(_.isDataTexture)if(Dt.length>0){Bt&&Yt&&e.texStorage2D(n.TEXTURE_2D,ut,gt,Dt[0].width,Dt[0].height);for(let tt=0,pt=Dt.length;tt<pt;tt++)ft=Dt[tt],Bt?F&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ft.width,ft.height,mt,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,tt,gt,ft.width,ft.height,0,mt,Lt,ft.data);_.generateMipmaps=!1}else Bt?(Yt&&e.texStorage2D(n.TEXTURE_2D,ut,gt,et.width,et.height),F&&nt(_,et,mt,Lt)):e.texImage2D(n.TEXTURE_2D,0,gt,et.width,et.height,0,mt,Lt,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,gt,Dt[0].width,Dt[0].height,et.depth);for(let tt=0,pt=Dt.length;tt<pt;tt++)if(ft=Dt[tt],_.format!==Zn)if(mt!==null)if(Bt){if(F)if(_.layerUpdates.size>0){let yt=Eh(ft.width,ft.height,_.format,_.type);for(let it of _.layerUpdates){let It=ft.data.subarray(it*yt/ft.data.BYTES_PER_ELEMENT,(it+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,it,ft.width,ft.height,1,mt,It)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,et.depth,mt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,gt,ft.width,ft.height,et.depth,0,ft.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ft.width,ft.height,et.depth,mt,Lt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,gt,ft.width,ft.height,et.depth,0,mt,Lt,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Bt&&Yt&&e.texStorage2D(n.TEXTURE_2D,ut,gt,Dt[0].width,Dt[0].height);for(let tt=0,pt=Dt.length;tt<pt;tt++)ft=Dt[tt],_.format!==Zn?mt!==null?Bt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,gt,ft.width,ft.height,0,ft.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?F&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ft.width,ft.height,mt,Lt,ft.data):e.texImage2D(n.TEXTURE_2D,tt,gt,ft.width,ft.height,0,mt,Lt,ft.data)}else if(_.isDataArrayTexture)if(Bt){if(Yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,gt,et.width,et.height,et.depth),F)if(_.layerUpdates.size>0){let tt=Eh(et.width,et.height,_.format,_.type);for(let pt of _.layerUpdates){let yt=et.data.subarray(pt*tt/et.data.BYTES_PER_ELEMENT,(pt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pt,et.width,et.height,1,mt,Lt,yt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(_.isData3DTexture)Bt?(Yt&&e.texStorage3D(n.TEXTURE_3D,ut,gt,et.width,et.height,et.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)):e.texImage3D(n.TEXTURE_3D,0,gt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(_.isFramebufferTexture){if(Yt)if(Bt)e.texStorage2D(n.TEXTURE_2D,ut,gt,et.width,et.height);else{let tt=et.width,pt=et.height;for(let yt=0;yt<ut;yt++)e.texImage2D(n.TEXTURE_2D,yt,gt,tt,pt,0,mt,Lt,null),tt>>=1,pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),f.add(_),tt.onpaint=pt=>{let yt=pt.changedElements;for(let it of f)yt.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{let yt=n.RGBA,it=n.RGBA,It=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,yt,it,It,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Bt&&Yt){let tt=se(Dt[0]);e.texStorage2D(n.TEXTURE_2D,ut,gt,tt.width,tt.height)}for(let tt=0,pt=Dt.length;tt<pt;tt++)ft=Dt[tt],Bt?F&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,mt,Lt,ft):e.texImage2D(n.TEXTURE_2D,tt,gt,mt,Lt,ft);_.generateMipmaps=!1}else if(Bt){if(Yt){let tt=se(et);e.texStorage2D(n.TEXTURE_2D,ut,gt,tt.width,tt.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Lt,et)}else e.texImage2D(n.TEXTURE_2D,0,gt,mt,Lt,et);p(_)&&S(W),dt.__version=rt.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Vt(R,_,z){if(_.image.length!==6)return;let W=Qt(R,_),Z=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);let rt=i.get(Z);if(Z.version!==rt.__version||W===!0){e.activeTexture(n.TEXTURE0+z);let dt=ue.getPrimaries(ue.workingColorSpace),J=_.colorSpace===qi?null:ue.getPrimaries(_.colorSpace),et=_.colorSpace===qi||dt===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let mt=_.isCompressedTexture||_.image[0].isCompressedTexture,Lt=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!mt&&!Lt?gt[it]=g(_.image[it],!0,s.maxCubemapSize):gt[it]=Lt?_.image[it].image:_.image[it],gt[it]=Ge(_,gt[it]);let ft=gt[0],Dt=r.convert(_.format,_.colorSpace),Bt=r.convert(_.type),Yt=M(_.internalFormat,Dt,Bt,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,ut=rt.__version===void 0||W===!0,tt=Z.dataReady,pt=v(_,ft);qt(n.TEXTURE_CUBE_MAP,_);let yt;if(mt){F&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Yt,ft.width,ft.height);for(let it=0;it<6;it++){yt=gt[it].mipmaps;for(let It=0;It<yt.length;It++){let Rt=yt[It];_.format!==Zn?Dt!==null?F?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Yt,Rt.width,Rt.height,0,Rt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Rt.width,Rt.height,Dt,Bt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Yt,Rt.width,Rt.height,0,Dt,Bt,Rt.data)}}}else{if(yt=_.mipmaps,F&&ut){yt.length>0&&pt++;let it=se(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Yt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Dt,Bt,gt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,gt[it].width,gt[it].height,0,Dt,Bt,gt[it].data);for(let It=0;It<yt.length;It++){let Ee=yt[It].image[it].image;F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Ee.width,Ee.height,Dt,Bt,Ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Yt,Ee.width,Ee.height,0,Dt,Bt,Ee.data)}}else{F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Bt,gt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,Dt,Bt,gt[it]);for(let It=0;It<yt.length;It++){let Rt=yt[It];F?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Dt,Bt,Rt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Yt,Dt,Bt,Rt.image[it])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),rt.__version=Z.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function St(R,_,z,W,Z,rt){let dt=r.convert(z.format,z.colorSpace),J=r.convert(z.type),et=M(z.internalFormat,dt,J,z.normalized,z.colorSpace),mt=i.get(_),Lt=i.get(z);if(Lt.__renderTarget=_,!mt.__hasExternalTextures){let gt=Math.max(1,_.width>>rt),ft=Math.max(1,_.height>>rt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,et,gt,ft,_.depth,0,dt,J,null):e.texImage2D(Z,rt,et,gt,ft,0,dt,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Kt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Lt.__webglTexture,0,fe(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Lt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(R,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){let W=_.depthTexture,Z=W&&W.isDepthTexture?W.type:null,rt=w(_.stencilBuffer,Z),dt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Kt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(_),rt,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(_),rt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,rt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,R)}else{let W=_.textures;for(let Z=0;Z<W.length;Z++){let rt=W[Z],dt=r.convert(rt.format,rt.colorSpace),J=r.convert(rt.type),et=M(rt.internalFormat,dt,J,rt.normalized,rt.colorSpace);Kt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe(_),et,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe(_),et,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,et,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(R,_,z){let W=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),qt(n.TEXTURE_CUBE_MAP,_.depthTexture);let mt=r.convert(_.depthTexture.format),Lt=r.convert(_.depthTexture.type),gt;_.depthTexture.format===Ei?gt=n.DEPTH_COMPONENT24:_.depthTexture.format===Es&&(gt=n.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,gt,_.width,_.height,0,mt,Lt,null)}}else j(_.depthTexture,0);let rt=Z.__webglTexture,dt=fe(_),J=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,et=_.depthTexture.format===Es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ei)Kt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,J,rt,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,et,J,rt,0);else if(_.depthTexture.format===Es)Kt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,J,rt,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,et,J,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){let _=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=W}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Be(_.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?Be(_.__webglFramebuffer[0],R,0):Be(_.__webglFramebuffer,R,0)}else if(z){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),Xt(_.__webglDepthbuffer[W],R,!1);else{let Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Xt(_.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function le(R,_,z){let W=i.get(R);_!==void 0&&St(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ee(R)}function de(R){let _=R.texture,z=i.get(R),W=i.get(_);R.addEventListener("dispose",x);let Z=R.textures,rt=R.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,a.memory.textures++),rt){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let et=0;et<_.mipmaps.length;et++)z.__webglFramebuffer[J][et]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(dt)for(let J=0,et=Z.length;J<et;J++){let mt=i.get(Z[J]);mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Kt(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let et=Z[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let mt=r.convert(et.format,et.colorSpace),Lt=r.convert(et.type),gt=M(et.internalFormat,mt,Lt,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),ft=fe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,gt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),qt(n.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)St(z.__webglFramebuffer[J][et],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,et);else St(z.__webglFramebuffer[J],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let J=0,et=Z.length;J<et;J++){let mt=Z[J],Lt=i.get(mt),gt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(gt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,Lt.__webglTexture),qt(gt,mt),St(z.__webglFramebuffer,R,mt,n.COLOR_ATTACHMENT0+J,gt,0),p(mt)&&S(gt)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),qt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)St(z.__webglFramebuffer[et],R,_,n.COLOR_ATTACHMENT0,J,et);else St(z.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,J,0);p(_)&&S(J),e.unbindTexture()}R.depthBuffer&&ee(R)}function ie(R){let _=R.textures;for(let z=0,W=_.length;z<W;z++){let Z=_[z];if(p(Z)){let rt=T(R),dt=i.get(Z).__webglTexture;e.bindTexture(rt,dt),S(rt),e.unbindTexture()}}}let be=[],ke=[];function Ye(R){if(R.samples>0){if(Kt(R)===!1){let _=R.textures,z=R.width,W=R.height,Z=n.COLOR_BUFFER_BIT,rt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(R),J=_.length>1;if(J)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let et=R.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Lt=i.get(_[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,Z,n.NEAREST),l===!0&&(be.length=0,ke.length=0,be.push(n.COLOR_ATTACHMENT0+mt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(be.push(rt),ke.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Lt=i.get(_[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function fe(R){return Math.min(s.maxSamples,R.samples)}function Kt(R){let _=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function k(R){let _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Ge(R,_){let z=R.colorSpace,W=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ia&&z!==qi&&(ue.getTransfer(z)===Me?(W!==Zn||Z!==Cn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",z)),_}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=le,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function rb(n,t){function e(i,s=qi){let r,a=ue.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hh)return n.BYTE;if(i===dh)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===mi)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===Zn)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===Kl)return n.RED;if(i===Jl)return n.RED_INTEGER;if(i===As)return n.RG;if(i===jl)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===no||i===io||i===so||i===ro)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===rc||i===ac||i===oc||i===lc||i===ao||i===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sc||i===rc)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===oc)return r.COMPRESSED_R11_EAC;if(i===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ao)return r.COMPRESSED_RG11_EAC;if(i===cc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===xc||i===yc||i===vc||i===bc||i===Sc||i===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Ec||i===Ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wc)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===Rc||i===oo||i===Cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Un({vertexShader:ab,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends ui{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,y=typeof XRWebGLBinding<"u",g=new Wh,p={},S=e.getContextAttributes(),T=null,M=null,w=[],v=[],A=new at,x=null,E=null,P=new cn;P.viewport=new ze;let L=new cn;L.viewport=new ze;let N=[P,L],U=new zl,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=w[K];return nt===void 0&&(nt=new Fr,w[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=w[K];return nt===void 0&&(nt=new Fr,w[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=w[K];return nt===void 0&&(nt=new Fr,w[K]=nt),nt.getHandSpace()};function q(K){let nt=v.indexOf(K.inputSource);if(nt===-1)return;let bt=w[nt];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||a),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let K=0;K<w.length;K++){let nt=v[K];nt!==null&&(v[K]=null,w[K].disconnect(nt))}I=null,O=null,g.reset();for(let K in p)delete p[K];if(t.setRenderTarget(T),d=null,u=null,f=null,s=null,M=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,St=null;S.depth&&(St=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=S.stencil?Es:Ei,Vt=S.stencil?Kr:pi);let Xt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Rn(u.textureWidth,u.textureHeight,{format:Zn,type:Cn,depthTexture:new ps(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Rn(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(K){for(let nt=0;nt<K.removed.length;nt++){let bt=K.removed[nt],Vt=v.indexOf(bt);Vt>=0&&(v[Vt]=null,w[Vt].disconnect(bt))}for(let nt=0;nt<K.added.length;nt++){let bt=K.added[nt],Vt=v.indexOf(bt);if(Vt===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=v.length){v.push(bt),Vt=Xt;break}else if(v[Xt]===null){v[Xt]=bt,Vt=Xt;break}if(Vt===-1)break}let St=w[Vt];St&&St.connect(bt)}}let $=new C,Q=new C;function B(K,nt,bt){$.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);let Vt=$.distanceTo(Q),St=nt.projectionMatrix.elements,Xt=bt.projectionMatrix.elements,Be=St[14]/(St[10]-1),ee=St[14]/(St[10]+1),le=(St[9]+1)/St[5],de=(St[9]-1)/St[5],ie=(St[8]-1)/St[0],be=(Xt[8]+1)/Xt[0],ke=Be*ie,Ye=Be*be,fe=Vt/(-ie+be),Kt=fe*-ie;if(nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Kt),K.translateZ(fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),St[10]===-1)K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let k=Be+fe,Ge=ee+fe,se=ke-Kt,R=Ye+(Vt-Kt),_=le*ee/Ge*k,z=de*ee/Ge*k;K.projectionMatrix.makePerspective(se,R,_,z,k,Ge),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function lt(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let nt=K.near,bt=K.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),U.near=L.near=P.near=nt,U.far=L.far=P.far=bt,(I!==U.near||O!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,O=U.far),U.layers.mask=K.layers.mask|6,P.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Vt=K.parent,St=U.cameras;lt(U,Vt);for(let Xt=0;Xt<St.length;Xt++)lt(St[Xt],Vt);St.length===2?B(U,P,L):U.projectionMatrix.copy(P.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),ct(K,U,Vt)};function ct(K,nt,bt){bt===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=kr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let $t=null;function qt(K,nt){if(h=nt.getViewerPose(c||a),m=nt,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Vt=!1;bt.length!==U.cameras.length&&(U.cameras.length=0,Vt=!0);for(let ee=0;ee<bt.length;ee++){let le=bt[ee],de=null;if(d!==null)de=d.getViewport(le);else{let be=f.getViewSubImage(u,le);de=be.viewport,ee===0&&(t.setRenderTargetTextures(M,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(M))}let ie=N[ee];ie===void 0&&(ie=new cn,ie.layers.enable(ee),ie.viewport=new ze,N[ee]=ie),ie.matrix.fromArray(le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(de.x,de.y,de.width,de.height),ee===0&&(U.matrix.copy(ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Vt===!0&&U.cameras.push(ie)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let ee=f.getDepthInformation(bt[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let ee=0;ee<bt.length;ee++){let le=bt[ee].camera;if(le){let de=p[le];de||(de=new Va,p[le]=de);let ie=f.getCameraImage(le);de.sourceTexture=ie}}}}for(let bt=0;bt<w.length;bt++){let Vt=v[bt],St=w[bt];Vt!==null&&St!==void 0&&St.update(Vt,nt,c||a)}$t&&$t(K,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),m=null}let Qt=new Tp;Qt.setAnimationLoop(qt),this.setAnimationLoop=function(K){$t=K},this.dispose=function(){}}},lb=new me,Dp=new jt;Dp.set(-1,0,0,0,1,0,0,0,1);function cb(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Sh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===hn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===hn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),T=S.envMap,M=S.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Dp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ub(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let v=w.program;i.uniformBlockBinding(M,v)}function c(M,w){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",S));let A=w.program;i.updateUBOMapping(M,A);let x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let w=f();M.__bindingPointIndex=w;let v=n.createBuffer(),A=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=s[M.id],v=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,E=v.length;x<E;x++){let P=v[x];if(Array.isArray(P))for(let L=0,N=P.length;L<N;L++)d(P[L],x,L,A);else d(P,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,v,A){if(y(M,w,v,A)===!0){let x=M.__offset,E=M.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){let N=E[L],U=p(N);m(N,M.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function m(M,w,v){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,v)}function y(M,w,v,A){let x=M.value,E=w+"_"+v;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{let P=A[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(M){let w=M.uniforms,v=0,A=16;for(let E=0,P=w.length;E<P;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let N=0,U=L.length;N<U;N++){let I=L[N],O=Array.isArray(I.value)?I.value:[I.value];for(let q=0,X=O.length;q<X;q++){let j=O[q],$=p(j),Q=v%A,B=Q%$.boundary,lt=Q+B;v+=B,lt!==0&&A-lt<$.storage&&(v+=A-lt),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=$.storage}}}let x=v%A;return x>0&&(v+=A-x),M.__size=v,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",M),w}function S(M){let w=M.target;w.removeEventListener("dispose",S);let v=a.indexOf(w.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var hb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function db(){return Ii===null&&(Ii=new Oa(hb,16,16,As,mi),Ii.name="DFG_LUT",Ii.minFilter=un,Ii.magFilter=un,Ii.wrapS=wi,Ii.wrapT=wi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var Nc=class{constructor(t={}){let{canvas:e=Jf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Cn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let y=d,g=new Set([Ql,jl,Jl]),p=new Set([Cn,pi,Zr,Kr,ql,Zl]),S=new Uint32Array(4),T=new Int32Array(4),M=new C,w=null,v=null,A=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,N=null,U=null,I=null,O=null;this._outputColorSpace=tn;let q=0,X=0,j=null,$=-1,Q=null,B=new ze,lt=new ze,ct=null,$t=new Ht(0),qt=0,Qt=e.width,K=e.height,nt=1,bt=null,Vt=null,St=new ze(0,0,Qt,K),Xt=new ze(0,0,Qt,K),Be=!1,ee=new zr,le=!1,de=!1,ie=new me,be=new C,ke=new ze,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function Kt(){return j===null?nt:1}let k=i;function Ge(b,D){return e.getContext(b,D)}let se,R,_,z,W,Z,rt,dt,J,et,mt,Lt,gt,ft,Dt,Bt,Yt,F,ut,tt,pt,yt,it;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",H,!1),e.addEventListener("webglcontextcreationerror",st,!1),k===null){let D="webgl2";if(k=Ge(D,b),k===null)throw Ge(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(b){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",H,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Wt("WebGLRenderer: "+b.message),b}function It(){se=new yy(k),se.init(),pt=new rb(k,se),R=new cy(k,se,t,pt),_=new ib(k,se),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),U=k.createFramebuffer(),I=k.createFramebuffer(),O=k.createFramebuffer(),z=new Sy(k),W=new Hv,Z=new sb(k,se,_,W,R,pt,z),rt=new xy(P),dt=new w0(k),yt=new oy(k,dt),J=new vy(k,dt,z,yt),et=new wy(k,J,dt,yt,z),F=new My(k,R,Z),Dt=new uy(W),mt=new Gv(P,rt,se,R,yt,Dt),Lt=new cb(P,W),gt=new Xv,ft=new Jv(se),Yt=new ay(P,rt,_,et,m,l),Bt=new nb(P,et,R),it=new ub(k,z,R,_),ut=new ly(k,se,z),tt=new by(k,se,z),z.programs=mt.programs,P.capabilities=R,P.extensions=se,P.properties=W,P.renderLists=gt,P.shadowMap=Bt,P.state=_,P.info=z}y!==Cn&&(E=new Ay(y,e.width,e.height,o,s,r));let Rt=new Xh(P,k);this.xr=Rt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize(Qt,K,!1))},this.getSize=function(b){return b.set(Qt,K)},this.setSize=function(b,D,Y=!0){if(Rt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=b,K=D,e.width=Math.floor(b*nt),e.height=Math.floor(D*nt),Y===!0&&(e.style.width=b+"px",e.style.height=D+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Qt*nt,K*nt).floor()},this.setDrawingBufferSize=function(b,D,Y){Qt=b,K=D,nt=Y,e.width=Math.floor(b*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(y===Cn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,D,Y,G){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,D,Y,G),_.viewport(B.copy(St).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,D,Y,G){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,D,Y,G),_.scissor(lt.copy(Xt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(b){_.setScissorTest(Be=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Vt=b},this.getClearColor=function(b){return b.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,Y=!0){let G=0;if(b){let V=!1;if(j!==null){let ht=j.texture.format;V=g.has(ht)}if(V){let ht=j.texture.type,Mt=p.has(ht),xt=Yt.getClearColor(),Et=Yt.getClearAlpha(),Nt=xt.r,re=xt.g,ce=xt.b;Mt?(S[0]=Nt,S[1]=re,S[2]=ce,S[3]=Et,k.clearBufferuiv(k.COLOR,0,S)):(T[0]=Nt,T[1]=re,T[2]=ce,T[3]=Et,k.clearBufferiv(k.COLOR,0,T))}else G|=k.COLOR_BUFFER_BIT}D&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",H,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Yt.dispose(),gt.dispose(),ft.dispose(),W.dispose(),rt.dispose(),et.dispose(),yt.dispose(),it.dispose(),mt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",te),Rt.removeEventListener("sessionend",he),Pe.stop()};function Ee(b){b.preventDefault(),Da("WebGLRenderer: Context Lost."),L=!0}function H(){Da("WebGLRenderer: Context Restored."),L=!1;let b=z.autoReset,D=Bt.enabled,Y=Bt.autoUpdate,G=Bt.needsUpdate,V=Bt.type;It(),z.autoReset=b,Bt.enabled=D,Bt.autoUpdate=Y,Bt.needsUpdate=G,Bt.type=V}function st(b){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _t(b){let D=b.target;D.removeEventListener("dispose",_t),Ut(D)}function Ut(b){kt(b),W.remove(b)}function kt(b){let D=W.get(b).programs;D!==void 0&&(D.forEach(function(Y){mt.releaseProgram(Y)}),b.isShaderMaterial&&mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,Y,G,V,ht){D===null&&(D=Ye);let Mt=V.isMesh&&V.matrixWorld.determinantAffine()<0,xt=xu(b,D,Y,G,V);_.setMaterial(G,Mt);let Et=Y.index,Nt=1;if(G.wireframe===!0){if(Et=J.getWireframeAttribute(Y),Et===void 0)return;Nt=2}let re=Y.drawRange,ce=Y.attributes.position,Ct=re.start*Nt,Se=(re.start+re.count)*Nt;ht!==null&&(Ct=Math.max(Ct,ht.start*Nt),Se=Math.min(Se,(ht.start+ht.count)*Nt)),Et!==null?(Ct=Math.max(Ct,0),Se=Math.min(Se,Et.count)):ce!=null&&(Ct=Math.max(Ct,0),Se=Math.min(Se,ce.count));let qe=Se-Ct;if(qe<0||qe===1/0)return;yt.setup(V,G,xt,Y,Et);let Ne,Ie=ut;if(Et!==null&&(Ne=dt.get(Et),Ie=tt,Ie.setIndex(Ne)),V.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Kt()),Ie.setMode(k.LINES)):Ie.setMode(k.TRIANGLES);else if(V.isLine){let pn=G.linewidth;pn===void 0&&(pn=1),_.setLineWidth(pn*Kt()),V.isLineSegments?Ie.setMode(k.LINES):V.isLineLoop?Ie.setMode(k.LINE_LOOP):Ie.setMode(k.LINE_STRIP)}else V.isPoints?Ie.setMode(k.POINTS):V.isSprite&&Ie.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Ie.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let pn=V._multiDrawStarts,At=V._multiDrawCounts,Sn=V._multiDrawCount,pe=Et?dt.get(Et).bytesPerElement:1,Hn=W.get(G).currentProgram.getUniforms();for(let Si=0;Si<Sn;Si++)Hn.setValue(k,"_gl_DrawID",Si),Ie.render(pn[Si]/pe,At[Si])}else if(V.isInstancedMesh)Ie.renderInstances(Ct,qe,V.count);else if(Y.isInstancedBufferGeometry){let pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,At=Math.min(Y.instanceCount,pn);Ie.renderInstances(Ct,qe,At)}else Ie.render(Ct,qe)};function Zt(b,D,Y,G){N!==null&&b.isNodeMaterial&&N.setObject(G,b),le===!0&&Dt.setState(b,Y,!1),b.transparent===!0&&b.side===di&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,je(b,D,G),b.side=Ss,b.needsUpdate=!0,je(b,D,G),b.side=di):je(b,D,G)}this.compile=function(b,D,Y=null){Y===null&&(Y=b),N!==null&&N.renderStart(b,D,Y),v=ft.get(Y),v.init(D),x.push(v),Y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights(),N!==null&&N.updateLights(v.state.lightsArray),de=this.localClippingEnabled,le=Dt.init(this.clippingPlanes,de),le===!0&&Dt.setGlobalState(this.clippingPlanes,D),N!==null&&Bt.render(v.state.shadowsArray,Y,D);let G=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ht=V.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){let xt=ht[Mt];Zt(xt,Y,D,V),G.add(xt)}else Zt(ht,Y,D,V),G.add(ht)}),v=x.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(b,D,Y=null){let G=this.compile(b,D,Y);return new Promise(V=>{function ht(){if(G.forEach(function(Mt){let Et=W.get(Mt).currentProgram;(Et===void 0||Et.isReady())&&G.delete(Mt)}),G.size===0){V(b);return}setTimeout(ht,10)}se.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let wt=null;function _e(b){wt&&wt(b)}function te(){Pe.stop()}function he(){Pe.start()}let Pe=new Tp;Pe.setAnimationLoop(_e),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(b){wt=b,Rt.setAnimationLoop(b),b===null?Pe.stop():Pe.start()},Rt.addEventListener("sessionstart",te),Rt.addEventListener("sessionend",he),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(b,D);let Y=Rt.enabled===!0&&Rt.isPresenting===!0,G=E!==null&&(j===null||Y)&&E.begin(P,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(D),D=Rt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,D,j),v=ft.get(b,x.length),v.init(D),v.state.textureUnits=Z.getTextureUnits(),x.push(v),ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ee.setFromProjectionMatrix(ie,ci,D.reversedDepth),de=this.localClippingEnabled,le=Dt.init(this.clippingPlanes,de),w=gt.get(b,A.length),w.init(),A.push(w),Rt.enabled===!0&&Rt.isPresenting===!0){let Mt=P.xr.getDepthSensingMesh();Mt!==null&&xe(Mt,D,-1/0,P.sortObjects)}xe(b,D,0,P.sortObjects),w.finish(),N!==null&&N.updateLights(v.state.lightsArray),P.sortObjects===!0&&w.sort(bt,Vt),fe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,fe&&Yt.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Dt.beginShadows();let V=v.state.shadowsArray;if(Bt.render(V,b,D),le===!0&&Dt.endShadows(),(G&&E.hasRenderPass())===!1){let Mt=w.opaque,xt=w.transmissive;if(v.setupLights(),D.isArrayCamera){let Et=D.cameras;if(xt.length>0)for(let Nt=0,re=Et.length;Nt<re;Nt++){let ce=Et[Nt];fn(Mt,xt,b,ce)}fe&&Yt.render(b);for(let Nt=0,re=Et.length;Nt<re;Nt++){let ce=Et[Nt];Ce(w,b,ce,ce.viewport)}}else xt.length>0&&fn(Mt,xt,b,D),fe&&Yt.render(b),Ce(w,b,D)}j!==null&&X===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),G&&E.end(P),b.isScene===!0&&b.onAfterRender(P,b,D),yt.resetDefaultState(),$=-1,Q=null,x.pop(),x.length>0?(v=x[x.length-1],Z.setTextureUnits(v.state.textureUnits),le===!0&&Dt.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,N!==null&&N.renderEnd()};function xe(b,D,Y,G){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)v.pushLightProbeGrid(b);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ee)){G&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);let Mt=et.update(b),xt=b.material;xt.visible&&w.push(b,Mt,xt,Y,ke.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ee))){let Mt=et.update(b),xt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ke.copy(Mt.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ie)),Array.isArray(xt)){let Et=Mt.groups;for(let Nt=0,re=Et.length;Nt<re;Nt++){let ce=Et[Nt],Ct=xt[ce.materialIndex];Ct&&Ct.visible&&w.push(b,Mt,Ct,Y,ke.z,ce,D)}}else xt.visible&&w.push(b,Mt,xt,Y,ke.z,null,D)}}let ht=b.children;for(let Mt=0,xt=ht.length;Mt<xt;Mt++)xe(ht[Mt],D,Y,G)}function Ce(b,D,Y,G){let{opaque:V,transmissive:ht,transparent:Mt}=b;v.setupLightsView(Y),le===!0&&Dt.setGlobalState(P.clippingPlanes,Y),G&&_.viewport(B.copy(G)),V.length>0&&$e(V,D,Y),ht.length>0&&$e(ht,D,Y),Mt.length>0&&$e(Mt,D,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function fn(b,D,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[G.id]===void 0){let Ct=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[G.id]=new Rn(1,1,{generateMipmaps:!0,type:Ct?mi:Cn,minFilter:ws,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let ht=v.state.transmissionRenderTarget[G.id],Mt=G.viewport||B;ht.setSize(Mt.z*P.transmissionResolutionScale,Mt.w*P.transmissionResolutionScale);let xt=P.getRenderTarget(),Et=P.getActiveCubeFace(),Nt=P.getActiveMipmapLevel();P.setRenderTarget(ht),P.getClearColor($t),qt=P.getClearAlpha(),qt<1&&P.setClearColor(16777215,.5),P.clear(),fe&&Yt.render(Y);let re=P.toneMapping;P.toneMapping=fi;let ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),v.setupLightsView(G),le===!0&&Dt.setGlobalState(P.clippingPlanes,G),$e(b,Y,G),Z.updateMultisampleRenderTarget(ht),Z.updateRenderTargetMipmap(ht),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Se=0,qe=D.length;Se<qe;Se++){let Ne=D[Se],{object:Ie,geometry:pn,material:At,group:Sn}=Ne;if(At.side===di&&Ie.layers.test(G.layers)){let pe=At.side;At.side=hn,At.needsUpdate=!0,bi(Ie,Y,G,pn,At,Sn),At.side=pe,At.needsUpdate=!0,Ct=!0}}Ct===!0&&(Z.updateMultisampleRenderTarget(ht),Z.updateRenderTargetMipmap(ht))}P.setRenderTarget(xt,Et,Nt),P.setClearColor($t,qt),ce!==void 0&&(G.viewport=ce),P.toneMapping=re}function $e(b,D,Y){let G=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ht=b.length;V<ht;V++){let Mt=b[V],{object:xt,geometry:Et,group:Nt}=Mt,re=Mt.material;re.allowOverride===!0&&G!==null&&(re=G),xt.layers.test(Y.layers)&&bi(xt,D,Y,Et,re,Nt)}}function bi(b,D,Y,G,V,ht){N!==null&&V.isNodeMaterial&&N.setObject(b,V),b.onBeforeRender(P,D,Y,G,V,ht),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(P,D,Y,G,b,ht),V.transparent===!0&&V.side===di&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,P.renderBufferDirect(Y,D,G,V,b,ht),V.side=Ss,V.needsUpdate=!0,P.renderBufferDirect(Y,D,G,V,b,ht),V.side=di):P.renderBufferDirect(Y,D,G,V,b,ht),b.onAfterRender(P,D,Y,G,V,ht)}function je(b,D,Y){D.isScene!==!0&&(D=Ye);let G=W.get(b),V=v.state.lights,ht=v.state.shadowsArray,Mt=V.state.version,xt=mt.getParameters(b,V.state,ht,D,Y,v.state.lightProbeGridArray),Et=mt.getProgramCacheKey(xt),Nt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=rt.get(b.envMap||G.environment,re),G.envMapRotation=G.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",_t),Nt=new Map,G.programs=Nt);let ce=Nt.get(Et);if(ce!==void 0){if(G.currentProgram===ce&&G.lightsStateVersion===Mt)return ks(b,xt),ce}else xt.uniforms=mt.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,Y,xt),b.onBeforeCompile(xt,P),ce=mt.acquireProgram(xt,Et),Nt.set(Et,ce),G.uniforms=xt.uniforms;let Ct=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=Dt.uniform),ks(b,xt),G.needsLights=Qe(b),G.lightsStateVersion=Mt,G.needsLights&&(Ct.ambientLightColor.value=V.state.ambient,Ct.lightProbe.value=V.state.probe,Ct.sunLights.value=V.state.sun,Ct.sunLightShadows.value=V.state.sunShadow,Ct.directionalLights.value=V.state.directional,Ct.directionalLightShadows.value=V.state.directionalShadow,Ct.spotLights.value=V.state.spot,Ct.spotLightShadows.value=V.state.spotShadow,Ct.rectAreaLights.value=V.state.rectArea,Ct.ltc_1.value=V.state.rectAreaLTC1,Ct.ltc_2.value=V.state.rectAreaLTC2,Ct.pointLights.value=V.state.point,Ct.pointLightShadows.value=V.state.pointShadow,Ct.hemisphereLights.value=V.state.hemi,Ct.sunShadowMatrix.value=V.state.sunShadowMatrix,Ct.sunShadowCascade.value=V.state.sunShadowCascade,Ct.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ct.spotLightMatrix.value=V.state.spotLightMatrix,Ct.spotLightMap.value=V.state.spotLightMap,Ct.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=v.state.lightProbeGridArray.length>0,G.currentProgram=ce,G.uniformsList=null,ce}function bn(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Qr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function ks(b,D){let Y=W.get(b);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Ns(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let Y=0,G=b.length;Y<G;Y++){let V=b[Y];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function xu(b,D,Y,G,V){D.isScene!==!0&&(D=Ye),Z.resetTextureUnits();let ht=D.fog,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,xt=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ue.workingColorSpace,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Nt=rt.get(G.envMap||Mt,Et),re=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ce=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!Y.morphAttributes.position,Se=!!Y.morphAttributes.normal,qe=!!Y.morphAttributes.color,Ne=fi;G.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=P.toneMapping);let Ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pn=Ie!==void 0?Ie.length:0,At=W.get(G),Sn=v.state.lights;if(le===!0&&(de===!0||b!==Q)){let Le=b===Q&&G.id===$;Dt.setState(G,b,Le)}let pe=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Sn.state.version||At.outputColorSpace!==xt||V.isBatchedMesh&&At.batching===!1||!V.isBatchedMesh&&At.batching===!0||V.isBatchedMesh&&At.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&At.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&At.instancing===!1||!V.isInstancedMesh&&At.instancing===!0||V.isSkinnedMesh&&At.skinning===!1||!V.isSkinnedMesh&&At.skinning===!0||V.isInstancedMesh&&At.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&At.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&At.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&At.instancingMorph===!1&&V.morphTexture!==null||At.envMap!==Nt||G.fog===!0&&At.fog!==ht||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Dt.numPlanes||At.numIntersection!==Dt.numIntersection)||At.vertexAlphas!==re||At.vertexTangents!==ce||At.morphTargets!==Ct||At.morphNormals!==Se||At.morphColors!==qe||At.toneMapping!==Ne||At.morphTargetsCount!==pn||!!At.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,At.__version=G.version);let Hn=At.currentProgram;pe===!0&&(Hn=je(G,D,V),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Hn,At));let Si=!1,is=!1,ur=!1,Re=Hn.getUniforms(),We=At.uniforms;if(_.useProgram(Hn.program)&&(Si=!0,is=!0,ur=!0),G.id!==$&&($=G.id,is=!0),At.needsLights){let Le=Ns(v.state.lightProbeGridArray,V);At.lightProbeGrid!==Le&&(At.lightProbeGrid=Le,is=!0)}if(Si||Q!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Re.setValue(k,"projectionMatrix",b.projectionMatrix),Re.setValue(k,"viewMatrix",b.matrixWorldInverse);let rs=Re.map.cameraPosition;rs!==void 0&&rs.setValue(k,be.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&Re.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,is=!0,ur=!0)}if(At.needsLights&&(Sn.state.sunShadowMap.length>0&&Re.setValue(k,"sunShadowMap",Sn.state.sunShadowMap,Z),Sn.state.directionalShadowMap.length>0&&Re.setValue(k,"directionalShadowMap",Sn.state.directionalShadowMap,Z),Sn.state.spotShadowMap.length>0&&Re.setValue(k,"spotShadowMap",Sn.state.spotShadowMap,Z),Sn.state.pointShadowMap.length>0&&Re.setValue(k,"pointShadowMap",Sn.state.pointShadowMap,Z)),V.isSkinnedMesh){Re.setOptional(k,V,"bindMatrix"),Re.setOptional(k,V,"bindMatrixInverse");let Le=V.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Re.setValue(k,"boneTexture",Le.boneTexture,Z))}V.isBatchedMesh&&(Re.setOptional(k,V,"batchingTexture"),Re.setValue(k,"batchingTexture",V._matricesTexture,Z),Re.setOptional(k,V,"batchingIdTexture"),Re.setValue(k,"batchingIdTexture",V._indirectTexture,Z),Re.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&Re.setValue(k,"batchingColorTexture",V._colorsTexture,Z));let ss=Y.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&F.update(V,Y,Hn),(is||At.receiveShadow!==V.receiveShadow)&&(At.receiveShadow=V.receiveShadow,Re.setValue(k,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(We.envMapIntensity.value=D.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=db()),is){if(Re.setValue(k,"toneMappingExposure",P.toneMappingExposure),At.needsLights&&Do(We,ur),ht&&G.fog===!0&&Lt.refreshFogUniforms(We,ht),Lt.refreshMaterialUniforms(We,G,nt,K,v.state.transmissionRenderTarget[b.id]),At.needsLights&&At.lightProbeGrid){let Le=At.lightProbeGrid;We.probesSH.value=Le.texture,We.probesMin.value.copy(Le.boundingBox.min),We.probesMax.value.copy(Le.boundingBox.max),We.probesResolution.value.copy(Le.resolution)}Qr.upload(k,bn(At),We,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qr.upload(k,bn(At),We,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(k,"center",V.center),Re.setValue(k,"modelViewMatrix",V.modelViewMatrix),Re.setValue(k,"normalMatrix",V.normalMatrix),Re.setValue(k,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let Le=G.uniformsGroups;for(let rs=0,hr=Le.length;rs<hr;rs++){let zd=Le[rs];it.update(zd,Hn),it.bind(zd,Hn)}}return Hn}function Do(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Qe(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,D,Y){let G=W.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=D,W.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let Y=W.get(b);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,Y=0){j=b,q=D,X=Y;let G=null,V=!1,ht=!1;if(b){let xt=W.get(b);if(xt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(k.FRAMEBUFFER,xt.__webglFramebuffer),B.copy(b.viewport),lt.copy(b.scissor),ct=b.scissorTest,_.viewport(B),_.scissor(lt),_.setScissorTest(ct),$=-1;return}else if(xt.__webglFramebuffer===void 0)Z.setupRenderTarget(b);else if(xt.__hasExternalTextures)Z.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let re=b.depthTexture;if(xt.__boundDepthTexture!==re){if(re!==null&&W.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(b)}}let Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ht=!0);let Nt=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?G=Nt[D][Y]:G=Nt[D],V=!0):b.samples>0&&Z.useMultisampledRTT(b)===!1?G=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?G=Nt[Y]:G=Nt,B.copy(b.viewport),lt.copy(b.scissor),ct=b.scissorTest}else B.copy(St).multiplyScalar(nt).floor(),lt.copy(Xt).multiplyScalar(nt).floor(),ct=Be;if(Y!==0&&(G=U),_.bindFramebuffer(k.FRAMEBUFFER,G)&&_.drawBuffers(b,G),_.viewport(B),_.scissor(lt),_.setScissorTest(ct),V){let xt=W.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,Y)}else if(ht){let xt=D;for(let Et=0;Et<b.textures.length;Et++){let Nt=W.get(b.textures[Et]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Et,Nt.__webglTexture,Y,xt)}}else if(b!==null&&Y!==0){let xt=W.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xt.__webglTexture,Y)}$=-1};function Gn(b){let D=W.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=R.textureFormatReadable(b.format),D.__typeReadable=R.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,Y,G,V,ht,Mt,xt=0){if(!(b&&b.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){_.bindFramebuffer(k.FRAMEBUFFER,Et);try{let Nt=b.textures[xt],re=Nt.format,ce=Nt.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+xt);let Ct=Gn(Nt);if(Ct.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-G&&Y>=0&&Y<=b.height-V&&k.readPixels(D,Y,G,V,pt.convert(re),pt.convert(ce),ht)}finally{let Nt=j!==null?W.get(j).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,D,Y,G,V,ht,Mt,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et)if(D>=0&&D<=b.width-G&&Y>=0&&Y<=b.height-V){_.bindFramebuffer(k.FRAMEBUFFER,Et);let Nt=b.textures[xt],re=Nt.format,ce=Nt.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+xt);let Ct=Gn(Nt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Se),k.bufferData(k.PIXEL_PACK_BUFFER,ht.byteLength,k.STREAM_READ),k.readPixels(D,Y,G,V,pt.convert(re),pt.convert(ce),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let qe=j!==null?W.get(j).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,qe);let Ne=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Qf(k,Ne,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Se),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ht),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Se),k.deleteSync(Ne),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,Y=0){let G=Math.pow(2,-Y),V=Math.floor(b.image.width*G),ht=Math.floor(b.image.height*G),Mt=D!==null?D.x:0,xt=D!==null?D.y:0;Z.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,Mt,xt,V,ht),_.unbindTexture()},this.copyTextureToTexture=function(b,D,Y=null,G=null,V=0,ht=0){let Mt,xt,Et,Nt,re,ce,Ct,Se,qe,Ne=b.isCompressedTexture?b.mipmaps[ht]:b.image;if(Y!==null)Mt=Y.max.x-Y.min.x,xt=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,re=Y.min.y,ce=Y.isBox3?Y.min.z:0;else{let We=Math.pow(2,-V);Mt=Math.floor(Ne.width*We),xt=Math.floor(Ne.height*We),b.isDataArrayTexture?Et=Ne.depth:b.isData3DTexture?Et=Math.floor(Ne.depth*We):Et=1,Nt=0,re=0,ce=0}G!==null?(Ct=G.x,Se=G.y,qe=G.z):(Ct=0,Se=0,qe=0);let Ie=pt.convert(D.format),pn=pt.convert(D.type),At;D.isData3DTexture?(Z.setTexture3D(D,0),At=k.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Z.setTexture2DArray(D,0),At=k.TEXTURE_2D_ARRAY):(Z.setTexture2D(D,0),At=k.TEXTURE_2D),_.activeTexture(k.TEXTURE0),_.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(k.UNPACK_ALIGNMENT,D.unpackAlignment);let Sn=_.getParameter(k.UNPACK_ROW_LENGTH),pe=_.getParameter(k.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(k.UNPACK_SKIP_PIXELS),Si=_.getParameter(k.UNPACK_SKIP_ROWS),is=_.getParameter(k.UNPACK_SKIP_IMAGES);_.pixelStorei(k.UNPACK_ROW_LENGTH,Ne.width),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ne.height),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Nt),_.pixelStorei(k.UNPACK_SKIP_ROWS,re),_.pixelStorei(k.UNPACK_SKIP_IMAGES,ce);let ur=b.isDataArrayTexture||b.isData3DTexture,Re=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let We=W.get(b),ss=W.get(D),Le=W.get(We.__renderTarget),rs=W.get(ss.__renderTarget);_.bindFramebuffer(k.READ_FRAMEBUFFER,Le.__webglFramebuffer),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let hr=0;hr<Et;hr++)ur&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(b).__webglTexture,V,ce+hr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,W.get(D).__webglTexture,ht,qe+hr)),k.blitFramebuffer(Nt,re,Mt,xt,Ct,Se,Mt,xt,k.DEPTH_BUFFER_BIT,k.NEAREST);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||W.has(b)){let We=W.get(b),ss=W.get(D);_.bindFramebuffer(k.READ_FRAMEBUFFER,I),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let Le=0;Le<Et;Le++)ur?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.__webglTexture,V,ce+Le):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,We.__webglTexture,V),Re?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ss.__webglTexture,ht,qe+Le):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ss.__webglTexture,ht),V!==0?k.blitFramebuffer(Nt,re,Mt,xt,Ct,Se,Mt,xt,k.COLOR_BUFFER_BIT,k.NEAREST):Re?k.copyTexSubImage3D(At,ht,Ct,Se,qe+Le,Nt,re,Mt,xt):k.copyTexSubImage2D(At,ht,Ct,Se,Nt,re,Mt,xt);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Re?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(At,ht,Ct,Se,qe,Mt,xt,Et,Ie,pn,Ne.data):D.isCompressedArrayTexture?k.compressedTexSubImage3D(At,ht,Ct,Se,qe,Mt,xt,Et,Ie,Ne.data):k.texSubImage3D(At,ht,Ct,Se,qe,Mt,xt,Et,Ie,pn,Ne):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ht,Ct,Se,Mt,xt,Ie,pn,Ne.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ht,Ct,Se,Ne.width,Ne.height,Ie,Ne.data):k.texSubImage2D(k.TEXTURE_2D,ht,Ct,Se,Mt,xt,Ie,pn,Ne);_.pixelStorei(k.UNPACK_ROW_LENGTH,Sn),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(k.UNPACK_SKIP_ROWS,Si),_.pixelStorei(k.UNPACK_SKIP_IMAGES,is),ht===0&&D.generateMipmaps&&k.generateMipmap(At),_.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Z.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Z.setTextureCube(b,0):b.isData3DTexture?Z.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Z.setTexture2DArray(b,0):Z.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,j=null,_.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var kp={type:"change"},$h={type:"start"},Up={type:"end"},Oc=new Hs,Np=new wn,fb=Math.cos(70*vh.DEG2RAD),rn=new C,In=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6,Bc=class extends Ja{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vs.ROTATE,MIDDLE:vs.DOLLY,RIGHT:vs.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Tn,this._lastTargetPosition=new C,this._quat=new Tn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yr,this._sphericalDelta=new Yr,this._scale=1,this._panOffset=new C,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new C,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mb.bind(this),this._onPointerDown=pb.bind(this),this._onPointerUp=gb.bind(this),this._onContextMenu=Mb.bind(this),this._onMouseWheel=yb.bind(this),this._onKeyDown=vb.bind(this),this._onTouchStart=bb.bind(this),this._onTouchMove=Sb.bind(this),this._onMouseDown=_b.bind(this),this._onMouseMove=xb.bind(this),this._interceptControlDown=wb.bind(this),this._interceptControlUp=Eb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Te.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kp),this.update(),this.state=Te.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;rn.copy(e).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),e.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=rn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Oc.origin.copy(this.object.position),Oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oc.direction))<fb?this.object.lookAt(this.target):(Np.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oc.intersectPlane(Np,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent(kp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){rn.setFromMatrixColumn(e,0),rn.multiplyScalar(-t),this._panOffset.add(rn)}_panUp(t,e){this.screenSpacePanning===!0?rn.setFromMatrixColumn(e,1):(rn.setFromMatrixColumn(e,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(t),this._panOffset.add(rn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;rn.copy(s).sub(this.target);let r=rn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function pb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Up),this.state=Te.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _b(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Te.DOLLY;break;case vs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Te.ROTATE}break;case vs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent($h)}function xb(n){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(n.preventDefault(),this.dispatchEvent($h),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Up))}function vb(n){this.enabled!==!1&&this._handleKeyDown(n)}function bb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Te.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Te.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent($h)}function Sb(n){switch(this._trackPointer(n),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Te.NONE}}function Mb(n){this.enabled!==!1&&n.preventDefault()}function wb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Eb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var zc=class extends Vs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Fe;t.deleteAttribute("uv");let e=new we({side:hn}),i=new we,s=new ys(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ot(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ai(t,i,6),o=new Xe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ot(t,na(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ot(t,na(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ot(t,na(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Ot(t,na(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Ot(t,na(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Ot(t,na(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function na(n){return new Xa({color:0,emissive:16777215,emissiveIntensity:n})}var Ab=42e5,qh=[1,.8,.65,.5],Fp=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),Tb=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Op(n,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:i=null}={}){let s=window.devicePixelRatio||1,r;try{r=new Nc({canvas:n,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=tn,r.toneMapping=Qa,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=Gl,r.shadowMap.autoUpdate=!1,r.setClearColor(new Ht(t),1);let a=new Vs,o=new ta(r);a.environment=o.fromScene(new zc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new cn(32,1,4,1500);l.position.set(0,160,150),a.add(new $a(16777215,13616860,.35));let c=new Ka(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let h=new Ot(new Ti(900,900),new Wa({opacity:.2}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,a.add(h);let f=new Bc(l,n);f.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),f.dampingFactor=.14,f.rotateSpeed=.75,f.zoomSpeed=.9,f.panSpeed=.8,f.screenSpacePanning=!0,f.minDistance=9,f.maxDistance=1200,f.minPolarAngle=.06,f.maxPolarAngle=1.32,f.zoomToCursor=!0,f.cursor.set(0,6,-3),f.maxTargetRadius=85,f.target.set(0,4,0);function u(){let H=l.position.distanceTo(f.target),st=Math.min(4,Math.max(.4,H*.04));Math.abs(st-l.near)>st*.08&&(l.near=st,l.far=Math.max(900,H*6),l.updateProjectionMatrix())}let d=0,m=0,y=!1,g=!0,p=new Set,S=new Set,T=[],M=new Set,w=1,v=0,A=0,x=0,E=0,P=[],L=0,N=0,U=0;function I(){!d&&!m&&(d=requestAnimationFrame(X))}function O(){!d&&!m&&(m=setTimeout(()=>{m=0,I()},33))}function q(H){Math.abs(H-A)<.01||(A=H,r.setPixelRatio(H),r.setSize(n.clientWidth||1,n.clientHeight||1,!1))}function X(H){d=0;let st=f.update();for(let kt of M){let Zt=Math.min(1,(H-(kt.bas??=H))/kt.sure);kt.adim(Tb(Zt)),kt.golge&&(g=!0),Zt>=1?(M.delete(kt),kt.bitti?.()):st=!0}for(let kt of p)kt(H)&&(st=!0);let _t=!1;for(let kt of S)kt(H,E?Math.min(100,H-E):33)&&(_t=!0);E=_t?H:0;let Ut=st||_t;clearTimeout(U),u(),q(w*qh[v]),g&&(r.shadowMap.needsUpdate=!0,g=!1),r.render(a,l),Lt(),st?j(H):(x=0,P=[]),st?I():_t&&O(),!Ut&&v>0&&(U=setTimeout(()=>{q(w),r.render(a,l),Lt()},300))}function j(H){x&&P.push(H-x),x=H;let st=P.length,_t=P.reduce((Zt,wt)=>Zt+wt,0),Ut=st>=6&&st<24&&_t>=450&&[...P].sort((Zt,wt)=>Zt-wt)[st>>1]>50;if(st<24&&!Ut)return;let kt=_t/st;P=[],!(H-N<(Ut?300:500))&&(kt>26&&v<qh.length-1?(v++,L=0,N=H,e("kalite",v)):kt<19&&v>0&&++L>=3&&(v--,L=0,N=H))}function $(){let H=n.clientWidth||1,st=n.clientHeight||1;w=Math.max(.5,Math.min(s,2,Math.sqrt(Ab/(H*st)))),A=0,q(w*qh[v]),l.aspect=H/st,$t();for(let _t of T)_t.w=0;se=0,R=null,!y&&Qt&&de(Qt,!0),I()}let Q=0,B=0;new ResizeObserver(()=>{clearTimeout(Q);let H=performance.now();if(document.documentElement.dataset.suruklenen&&H-B>125){B=H,$();return}Q=setTimeout(()=>{B=performance.now(),$()},110)}).observe(n),window.addEventListener("bote-erisim",()=>{f.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let H of T)H.w=0;I()});let ct=0;function $t(){let H=n.clientWidth||1,st=n.clientHeight||1;ct>0?l.setViewOffset(H,st,0,Math.min(ct,st*.9)/2,H,st):l.clearViewOffset(),l.updateProjectionMatrix()}function qt(H,st=!1){ct=Math.max(0,H||0),R=null,$t(),!y&&Qt?de(Qt,st):I()}f.addEventListener("change",I),f.addEventListener("start",()=>{y=!0,e("kamera-elle")});let Qt=null,K=new C(0,1,0),nt=new C,bt=new C,Vt=new C,St=new C,Xt=new C,Be=H=>H.isBox3?H:new Xn(new C(H[0],H[1],H[2]),new C(H[3],H[4],H[5]));function ee(H,st){let _t=i?.()||{},Ut=Math.min(ct,st*.9),kt=_t.sol??16,Zt=H-(_t.sag??16),wt=_t.ust??16,_e=st-Math.max(_t.alt??16,Ut+12);if(Zt-kt<80){let te=H/2;kt=te-40,Zt=te+40}if(_e-wt<80){let te=(Math.max(0,wt)+Math.max(wt+80,_e))/2;wt=te-40,_e=te+40}return{x0:kt,y0:wt,x1:Zt,y1:_e,engel:_t.engel||[]}}function le(H,st){let _t=n.clientWidth||1,Ut=n.clientHeight||1,kt=Be(H),Zt=new C(...st).normalize();nt.crossVectors(K,Zt).normalize(),bt.crossVectors(Zt,nt),Vt.copy(Zt).negate();let wt=R=ee(_t,Ut),_e=Math.tan(l.fov*Math.PI/360),te=_e*(_t/Ut),he=Math.min(ct,Ut*.9)/Ut,Pe=(wt.x0/_t*2-1)*te,xe=(wt.x1/_t*2-1)*te,Ce=(1-wt.y0/Ut*2-he)*_e,fn=(1-wt.y1/Ut*2-he)*_e;kt.getCenter(St);let $e=[],bi=[],je=[];for(let Qe=0;Qe<8;Qe++)Xt.set(Qe&1?kt.max.x:kt.min.x,Qe&2?kt.max.y:kt.min.y,Qe&4?kt.max.z:kt.min.z).sub(St),$e.push(Xt.dot(nt)),bi.push(Xt.dot(bt)),je.push(Xt.dot(Vt));let bn=0;for(let Qe=0;Qe<8;Qe++){bn=Math.max(bn,2-je[Qe]);for(let Gn=0;Gn<8;Gn++)bn=Math.max(bn,($e[Qe]-$e[Gn]-xe*je[Qe]+Pe*je[Gn])/(xe-Pe),(bi[Qe]-bi[Gn]-Ce*je[Qe]+fn*je[Gn])/(Ce-fn))}bn=Math.min(f.maxDistance,Math.max(f.minDistance,bn));let ks=(Qe,Gn,b)=>{let D=-1/0,Y=1/0;for(let V=0;V<8;V++)D=Math.max(D,Qe[V]-b*(je[V]+bn)),Y=Math.min(Y,Qe[V]-Gn*(je[V]+bn));if(!(Y>D))return(D+Y)/2;let G=V=>{let ht=-1/0,Mt=1/0;for(let xt=0;xt<8;xt++){let Et=(Qe[xt]-V)/(je[xt]+bn);Et>ht&&(ht=Et),Et<Mt&&(Mt=Et)}return b-ht-(Mt-Gn)};for(let V=0;V<32;V++){let ht=(D+Y)/2;G(ht)>0?Y=ht:D=ht}return(D+Y)/2},Ns=ks($e,Pe,xe),xu=ks(bi,fn,Ce),Do=St.clone().addScaledVector(nt,Ns).addScaledVector(bt,xu);return{merkez:Do,konum:Do.clone().addScaledVector(Zt,bn)}}function de(H,st=!1){Qt=H,y=!1;let{merkez:_t,konum:Ut}=le(H.kutu,H.yon);if(st||Fp())return l.position.copy(Ut),f.target.copy(_t),f.update(),I(),Promise.resolve();let kt=l.position.clone(),Zt=f.target.clone();return f.enabled=!1,be(650,wt=>{l.position.lerpVectors(kt,Ut,wt),f.target.lerpVectors(Zt,_t,wt),l.lookAt(f.target)}).then(()=>{f.enabled=!0,f.update()})}function ie(){if(!Qt)return null;l.updateMatrixWorld();let H=n.clientWidth||1,st=n.clientHeight||1,_t=Be(Qt.kutu),Ut=1/0,kt=-1/0,Zt=1/0,wt=-1/0;for(let _e=0;_e<8;_e++){Xt.set(_e&1?_t.max.x:_t.min.x,_e&2?_t.max.y:_t.min.y,_e&4?_t.max.z:_t.min.z).project(l);let te=(Xt.x+1)/2*H,he=(1-Xt.y)/2*st;Ut=Math.min(Ut,te),kt=Math.max(kt,te),Zt=Math.min(Zt,he),wt=Math.max(wt,he)}return{kutu:{x0:Ut,y0:Zt,x1:kt,y1:wt},guvenli:ee(H,st),w:H,h:st}}function be(H,st,_t=!1){return Fp()?(st(1),_t&&(g=!0),I(),Promise.resolve()):new Promise(Ut=>{M.add({sure:H,adim:st,bitti:Ut,golge:_t}),I()})}let ke=n.parentElement.querySelector(".etiketler"),Ye=n.parentElement.querySelector(".isaretler")||ke,fe="http://www.w3.org/2000/svg",Kt=document.createElementNS(fe,"svg");Kt.setAttribute("class","cizgiler"),Kt.setAttribute("aria-hidden","true"),ke.appendChild(Kt);let k=[],Ge=[],se=0,R=null,_=new C,z=new C,W=new C,Z=H=>{for(let st=H;st;st=st.parent)if(!st.visible)return!1;return!0};function rt(H){for(let st of T)st.el.remove(),st.cizgi.remove(),st.nokt.remove();T.length=0;for(let{nokta:st,metin:_t,tur:Ut}of H){let kt=document.createElement("div");kt.className="etiket"+(Ut?` etiket-${Ut}`:""),kt.textContent=_t,ke.appendChild(kt);let Zt=document.createElementNS(fe,"line"),wt=document.createElementNS(fe,"circle");wt.setAttribute("r","4.5"),Kt.append(Zt,wt),T.push({el:kt,nokta:st,cizgi:Zt,nokt:wt,w:0,h:0})}I()}function dt(H){for(let st of k)st.el.remove();k.length=0;for(let st of H)st.el.hidden=!0,Ye.appendChild(st.el),k.push({...st,acik:!1});Ge=k.map((st,_t)=>[st,_t]).sort((st,_t)=>(_t[0].oncelik??1)-(st[0].oncelik??1)||st[1]-_t[1]).map(([st])=>st),se=0,R=null,I()}function J(H,st){for(let _t=k.length-1;_t>=0;_t--){let Ut=k[_t].el;if(Ut.hidden)continue;let kt=Ut.getBoundingClientRect(),Zt=kt.width/2;if(Zt&&Math.hypot(H-kt.left-Zt,st-kt.top-kt.height/2)<=Zt+2)return Ut}return null}function et(H,st){if(!k.length)return;se||(se=parseFloat(getComputedStyle(Ye).getPropertyValue("--isaret"))||44);let _t=R||(R=ee(H,st)),Ut=se+4,kt=[],Zt=document.activeElement,wt=Math.tan(l.fov*Math.PI/360),_e=k.some(te=>te.el===Zt)?[...Ge].sort((te,he)=>(he.el===Zt)-(te.el===Zt)):Ge;for(let te of _e){let he=!1,Pe=0,xe=0;(!te.nesne||Z(te.nesne))&&(te.nesne?z.copy(te.yerel).applyMatrix4(te.nesne.matrixWorld):z.copy(te.nokta),W.copy(z).applyMatrix4(l.matrixWorldInverse),W.z<-l.near&&(_.copy(z).project(l),Pe=(_.x+1)/2*H,xe=(1-_.y)/2*st,he=Pe>=_t.x0&&Pe<=_t.x1&&xe>=_t.y0&&xe<=_t.y1&&!_t.engel.some(Ce=>Pe>Ce.x0-Ut/2&&Pe<Ce.x1+Ut/2&&xe>Ce.y0-Ut/2&&xe<Ce.y1+Ut/2),he&&te.adim&&(he=te.adim*st/(2*-W.z*wt)>=se),he&&te.el!==Zt&&(he=!kt.some(Ce=>Math.abs(Ce.x-Pe)<Ut&&Math.abs(Ce.y-xe)<Ut)))),he&&(kt.push({x:Pe,y:xe}),te.el.style.transform=`translate3d(${Math.round(Pe)}px,${Math.round(xe)}px,0)`),te.acik!==he&&(te.acik=he,te.el.hidden=!he)}}let mt=(H,st,_t)=>(_.copy(H).project(l),{x:(_.x+1)/2*st,y:(1-_.y)/2*_t,gor:_.z<1&&Math.abs(_.x)<1.05&&Math.abs(_.y)<1.05});function Lt(){let H=n.clientWidth,st=n.clientHeight;if(et(H,st),!T.length)return;Kt.setAttribute("width",H),Kt.setAttribute("height",st);let _t=[],Ut=8,kt=30,Zt=T.map(wt=>({e:wt,p:mt(wt.nokta,H,st)})).sort((wt,_e)=>_e.p.y-wt.p.y);for(let{e:wt,p:_e}of Zt){wt.w||(wt.w=wt.el.offsetWidth,wt.h=wt.el.offsetHeight);let te=Math.min(Math.max(_e.x-wt.w/2,6),H-wt.w-6),he=_e.y-kt-wt.h,Pe=!1;for(let Ce=0;Ce<6;Ce++){let fn=_t.find($e=>te<$e.x+$e.w+Ut&&te+wt.w+Ut>$e.x&&he<$e.y+$e.h+Ut&&he+wt.h+Ut>$e.y);if(!fn)break;if(he=fn.y-wt.h-Ut,he<4){he=_e.y+kt,Pe=!0,te=Math.min(Math.max(fn.x+fn.w+Ut,6),H-wt.w-6);break}}_t.push({x:te,y:he,w:wt.w,h:wt.h});let xe=_e.gor?"1":"0";wt.el.style.opacity=xe,wt.cizgi.style.opacity=xe,wt.nokt.style.opacity=xe,wt.el.style.transform=`translate3d(${Math.round(te)}px,${Math.round(he)}px,0)`,wt.cizgi.setAttribute("x1",_e.x.toFixed(1)),wt.cizgi.setAttribute("y1",_e.y.toFixed(1)),wt.cizgi.setAttribute("x2",(te+wt.w/2).toFixed(1)),wt.cizgi.setAttribute("y2",(Pe?he:he+wt.h).toFixed(1)),wt.nokt.setAttribute("cx",_e.x.toFixed(1)),wt.nokt.setAttribute("cy",_e.y.toFixed(1))}}let gt=new Ys,ft=new at,Dt=[],Bt=new Set,Yt=new C,F=new C,ut=new C,tt=H=>!H.isMesh||H.isInstancedMesh||H===h||!Z(H)?!1:(Array.isArray(H.material)?H.material:[H.material]).some(_t=>_t&&_t.visible!==!1&&_t.blending!==Ci&&!(_t.transparent&&_t.opacity<.2));function pt(H,st,_t=1){ft.set(H,st),gt.setFromCamera(ft,l);let Ut=gt.intersectObjects(a.children,!0).find(xe=>tt(xe.object)),kt=Ut?Ut.point:null,Zt=Ut?Ut.distance:1/0,wt=n.clientHeight||1,_e=Math.tan(l.fov*Math.PI/360),te=null,he=1/0,Pe=1/0;for(let xe of Dt){let Ce=xe.userData;if(Ce.etkin===!1||!Z(xe))continue;let fn=!1;if(kt&&Ce.yari){Yt.copy(kt),xe.worldToLocal(Yt),F.setFromMatrixScale(xe.matrixWorld);let[je,bn,ks]=Ce.yari,Ns=.25;fn=Math.abs(Yt.x)<=je+Ns/F.x&&Math.abs(Yt.y)<=bn+Ns/F.y&&Math.abs(Yt.z)<=ks+Ns/F.z}if(!fn&&Ce.ince&&xe.isMesh){let je=gt.intersectObject(xe,!1)[0];fn=!!je&&je.distance<=Zt+.5}if(!fn||(ut.setFromMatrixPosition(xe.matrixWorld),Ce.minPx&&Ce.minAdim&&(W.copy(ut).applyMatrix4(l.matrixWorldInverse),Ce.minAdim*wt/(2*Math.max(.01,-W.z)*_e)<Ce.minPx*_t)))continue;let $e=Ce.hacim??1/0,bi=kt?ut.distanceToSquared(kt):0;($e<he*.99||$e<=he*1.01&&bi<Pe)&&(te=xe,he=$e,Pe=bi)}return{vekil:te,nokta:kt?kt.clone():te?new C().setFromMatrixPosition(te.matrixWorld):null}}let yt=new Set,it=null,It=!1;n.addEventListener("pointerdown",H=>{if(yt.add(H.pointerId),yt.size>1){It=!0,it=null;return}it=It?null:{x:H.clientX,y:H.clientY,t:performance.now(),id:H.pointerId}}),n.addEventListener("pointerup",H=>{let st=it;if(yt.delete(H.pointerId),yt.size||(It=!1),!st||st.id!==H.pointerId||(it=null,Math.hypot(H.clientX-st.x,H.clientY-st.y)>9||performance.now()-st.t>600))return;let _t=k.length?J(H.clientX,H.clientY):null;if(_t){_t.click();return}let Ut=n.getBoundingClientRect(),kt=H.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,Zt=pt((H.clientX-Ut.left)/Ut.width*2-1,-((H.clientY-Ut.top)/Ut.height)*2+1,kt);for(let wt of Bt)wt(Zt.vekil?Zt.vekil.userData:null,Zt.nokta,Zt.vekil)}),n.addEventListener("pointercancel",H=>{yt.delete(H.pointerId),yt.size||(It=!1),it=null});let Rt=null,Ee=H=>{H!==Rt&&(Rt?.classList.remove("ustunde"),H?.classList.add("ustunde"),Rt=H,n.style.cursor=H?"pointer":"")};return n.addEventListener("pointermove",H=>{H.pointerType==="mouse"&&!H.buttons&&Ee(k.length?J(H.clientX,H.clientY):null)}),n.addEventListener("pointerleave",()=>Ee(null)),n.addEventListener("contextmenu",H=>H.preventDefault()),n.addEventListener("webglcontextlost",H=>{H.preventDefault(),e("baglam-kaybi")}),n.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),g=!0,I()}),$(),{renderer:r,scene:a,camera:l,controls:f,hedefler:Dt,iste:I,kameraGit:de,tween:be,etiketKoy:rt,isaretKoy:dt,gorunurAlan:qt,golgeYenile:()=>{g=!0,I()},kareGuncelleyici:H=>(p.add(H),I(),()=>p.delete(H)),yavasGuncelleyici:H=>(S.add(H),I(),()=>S.delete(H)),dokunmaDinle:H=>Bt.add(H),sec:pt,kadrajOlc:ie,guvenliYenile:()=>{R=null,se=0,I()},yakinlas:H=>{let st=l.position.clone().sub(f.target),_t=Math.min(f.maxDistance,Math.max(f.minDistance,st.length()*H)),Ut=l.position.clone(),kt=f.target.clone().addScaledVector(st.normalize(),_t);return y=!0,be(260,Zt=>l.position.lerpVectors(Ut,kt,Zt))},arkaPlan:H=>{r.setClearColor(new Ht(H),1),I()},sonHedef:()=>Qt,kalite:()=>({kademe:v,piksel:Math.round(A*100)/100,tam:Math.round(w*100)/100})}}function zp(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new en,c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Bp(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][u]);let m=Bp(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Bp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new xn(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){let y=h.getComponent(u,m);o.setComponent(u+f,m,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var fo=new C;function Kn(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;fo.copy(t),fo[i]=0,fo.normalize();let c=.5*a/(a+o),h=1-fo.angleTo(n)/l;return Math.sign(fo[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Zi=class n extends Fe{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,h=new C(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,y=new C,g=.5/a;for(let p=0,S=0;p<f.length;p+=3,S+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),d[S+0]=Kn(y,c,"z","y",r,i),d[S+1]=1-Kn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[S+0]=1-Kn(y,c,"z","y",r,i),d[S+1]=1-Kn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[S+0]=1-Kn(y,c,"x","z",r,t),d[S+1]=Kn(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),d[S+0]=1-Kn(y,c,"x","z",r,t),d[S+1]=1-Kn(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),d[S+0]=1-Kn(y,c,"x","y",r,t),d[S+1]=1-Kn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[S+0]=Kn(y,c,"x","y",r,t),d[S+1]=1-Kn(y,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var An={x:0,z:32,w:68.58,d:53.34},Pt={x:0,z:-38,w:82.5,d:54.5,h:8.5},Ft=4,gi=Ft+8.5,Ke=Pt.h,Li=2.54,Rb=n=>An.x-An.w/2+n,Cb=n=>An.z-An.d/2+n,Oe=(n,t,e=Ft)=>new C(Rb(n),e,Cb(t)),ia={SCL:21.336,SDA:23.876,AREF:26.416,"GND-D":28.956,13:31.496,12:34.036,11:36.576,10:39.116,9:41.656,8:44.196,7:48.26,6:50.8,5:53.34,4:55.88,3:58.42,2:60.96,1:63.5,0:66.04},_o={NC:26.416,IOREF:28.956,RESET:31.496,"3.3V":34.036,"5V":36.576,GND1:39.116,GND2:41.656,VIN:44.196},xo={A0:49.276,A1:51.816,A2:54.356,A3:56.896,A4:59.436,A5:61.976},mo=2.54,Ts=50.8;function Zh(n){let t=String(n);if(t in ia)return Oe(ia[t],mo,gi);if(t in _o)return Oe(_o[t],Ts,gi);if(t in xo)return Oe(xo[t],Ts,gi);throw new Error("bilinmeyen pin "+n)}var Gp=["3","5","6","9","10","11"];function Ib(n){let t=String(n);return t==="13"?"pin-13":t==="0"||t==="1"?"pin-rx-tx":Gp.includes(t)?"pin-pwm":/^\d+$/.test(t)?"pin-dijital":t.startsWith("GND")?"pin-gnd":{"5V":"pin-5v","3.3V":"pin-3v3",VIN:"pin-vin",AREF:"pin-aref",IOREF:"pin-ioref",RESET:"pin-reset",SDA:"pin-sda-scl",SCL:"pin-sda-scl"}[t]||(/^A\d$/.test(t)?"pin-analog":null)}function Vp(n){let t=String(n);return t==="0"?"0. pin (RX)":t==="1"?"1. pin (TX)":Gp.includes(t)?`${t}. pin (~${t})`:/^\d+$/.test(t)?`${t}. pin`:t.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[t]||t}function sa(n,t,e,i,s=0,r=0,a=0){let o=new Xe;return o.position.set(s,r,a),o.userData={...n,yari:[t/2,e/2,i/2],hacim:n.hacim??t*e*i},o.updateMatrixWorld(),o}var Gc={a:13.97,b:11.43,c:8.89,d:6.35,e:3.81,f:-3.81,g:-6.35,h:-8.89,i:-11.43,j:-13.97},On=n=>Pt.x-36.83+(n-1)*Li,js=(n,t,e=Ke)=>new C(On(n),e,Pt.z+Gc[t]),Rs={"yakin-":19.05,"yakin+":21.59,"uzak-":-19.05,"uzak+":-21.59},go=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];function Hp(n,t,e,i=Ke){let s=go.reduce((r,a)=>Math.abs(a-e)<Math.abs(r-e)?a:r,go[0]);return new C(On(s),i,Pt.z+Rs[n+t])}function Bn(n,t,e,i,s,r){let a=new Fe(n,t,e);return a.translate(i,s,r),a}function po(n,t,e,i,s,r,a){let o=new Zi(n,t,e,2,i);return o.translate(s,r,a),o}function Cs(n){n.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}function Vc(n,t,e,i,s,r=16){let a=new $i(n,n,t,r);return a.translate(e,i,s),a}function Js(n,t){let e=new Ot(zp(n.map(i=>i.index?i.toNonIndexed():i),!1),t);return e.matrixAutoUpdate=!1,e}function yo(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var Wp=1;function Hc(n){let t=new fs(n);return t.colorSpace=tn,t.anisotropy=Wp,t}var vo=(()=>{let n=null;return()=>{if(n)return n;let[t,e]=yo(64,64),i=e.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),n=new fs(t),n}})(),ge={};function bo(){return ge.hazir||Object.assign(ge,{hazir:!0,pcbKenar:new we({color:679785,roughness:.45}),siyah:new we({color:2500140,roughness:.55}),koyu:new yn({color:789519}),metal:new we({color:14014686,metalness:1,roughness:.28}),altin:new we({color:14858588,metalness:1,roughness:.32}),cip:new we({color:1776416,roughness:.72}),ayak:new we({color:3816e3,roughness:.9}),bbYan:new we({color:15657955,roughness:.78}),bbDelik:new yn({color:3421242}),serit:new we({color:13225170,metalness:.9,roughness:.35}),vurgu:new yn({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new Ba({color:6962672}),secim:new yn({color:1483594,transparent:!0,opacity:.85,depthWrite:!1}),gorunmez:new yn({visible:!1})}),ge}function Pb(){let t=Math.round(2048*An.d/An.w),e=2048/An.w,[i,s]=yo(2048,t);s.fillStyle="#0d7783",s.fillRect(0,0,2048,t),s.strokeStyle="rgba(160,235,235,0.16)",s.lineWidth=.32*e,s.lineCap="round";let r=u=>{s.beginPath(),u.forEach(([d,m],y)=>y?s.lineTo(d*e,m*e):s.moveTo(d*e,m*e)),s.stroke()};for(let u=0;u<14;u++){let d=31.5+u*2.54>46?33+u*2.54:31.5+u*2.54;r([[d,4.5],[d,9+u%4],[30+u*2.2,30],[30+u*2.2,33]])}for(let u=0;u<6;u++)r([[49.3+u*2.54,48.5],[49.3+u*2.54,44],[46+u*2.6,40.6]]);r([[12,15],[18,15],[20,17]]),r([[12,18],[17,22],[21,24]]),r([[8,44],[14,44],[16,47]]),r([[36.5,48.5],[36.5,44],[24,40],[14,40]]),r([[39,48.5],[39,45],[28,45]]);let a="#f2f7f7";s.strokeStyle=a,s.fillStyle=a,s.lineWidth=.22*e;let o=(u,d,m,y)=>s.strokeRect(u*e,d*e,(m-u)*e,(y-d)*e);o(20,1.2,45.5,3.9),o(47,1.2,67.3,3.9),o(25.1,49.5,45.5,52.1),o(48,49.5,63.3,52.1);let l=(u,d,m,y,{don:g=0,hiza:p="center",kalin:S=!0}={})=>{s.save(),s.translate(d*e,m*e),s.rotate(g),s.font=`${S?700:500} ${y*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign=p,s.textBaseline="middle",s.fillText(u,0,0),s.restore()},c=-Math.PI/2,h={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX 1",0:"RX 0"};for(let[u,d]of Object.entries(h))l(d,ia[u],4.4,1.25,{don:c,hiza:"right"});l("DIGITAL (PWM~)",46,10.6,1.5);let f={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[u,d]of Object.entries(f))l(d,_o[u],48.3,1.2,{don:c,hiza:"left"});for(let[u,d]of Object.entries(xo))l(u,d,48.3,1.25,{don:c,hiza:"left"});l("POWER",35.3,42,1.5),l("ANALOG IN",55.6,42,1.5),l("L",26.6,10.6,1.2),l("TX",25.9,13.3,1),l("RX",25.9,15.4,1),l("ON",64.4,10.6,1.2),l("RESET",7.4,10.3,1.1),l("ICSP",64.9,21.9,1.1);for(let[u,d]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])s.fillStyle="#d9b75f",s.beginPath(),s.arc(u*e,d*e,1.75*e,0,Math.PI*2),s.fill(),s.fillStyle="#16191b",s.beginPath(),s.arc(u*e,d*e,1.15*e,0,Math.PI*2),s.fill();return Hc(i)}function Lb(){let[n,t]=yo(512,108);return t.fillStyle="#1c1c21",t.fillRect(0,0,512,108),t.fillStyle="#9da2aa",t.font='600 34px "DejaVu Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("ATMEGA328P",270,56),t.beginPath(),t.arc(22,54,12,-Math.PI/2,Math.PI/2),t.fillStyle="#0e0e11",t.fill(),Hc(n)}function Xp(n){bo();let t=new _n;t.name="kart";let e=new we({map:Pb(),roughness:.4}),i=new Ot(new Zi(An.w,1.6,An.d,2,.5),[ge.pcbKenar,ge.pcbKenar,e,ge.pcbKenar,ge.pcbKenar,ge.pcbKenar]);i.position.set(An.x,Ft-.8,An.z),t.add(i);let s=[],r=[],a=[],o=[],l=[];for(let[U,I]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]]){let O=Oe(U,I,1.2);l.push(Vc(1.6,2.4,O.x,O.y,O.z,10))}let c=(U,I,O)=>{let q=U.map(Q=>I[Q]),X=Math.min(...q)-1.27,j=Math.max(...q)+1.27,$=Oe((X+j)/2,O,Ft+4.25);s.push(po(j-X,8.5,2.54,.35,$.x,$.y,$.z));for(let Q of q){let B=Oe(Q,O,gi+.02);r.push(Bn(1,.04,1,B.x,B.y,B.z))}return{x1:X,x2:j,bz:O}},h=c(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],ia,mo),f=c(["7","6","5","4","3","2","1","0"],ia,mo),u=c(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],_o,Ts),d=c(["A0","A1","A2","A3","A4","A5"],xo,Ts),m=Oe(1.65,15.24,Ft+5.45);a.push(po(16,10.9,12,.6,m.x,m.y,m.z)),m=Oe(-6.37,15.24,Ft+5.3),r.push(Bn(.04,7.2,8.2,m.x,m.y,m.z)),m=Oe(5.2,44.9,Ft+5.5),s.push(po(14,11,9,1,m.x,m.y,m.z));let y=new Ws(3.1,20);y.rotateY(-Math.PI/2),m=Oe(-1.83,44.9,Ft+5.8),y.translate(m.x,m.y,m.z),r.push((y.toNonIndexed,y)),m=Oe(44.5,36.8,Ft+1.3),s.push(po(37.5,2.6,9.2,.4,m.x,m.y,m.z));for(let U=0;U<14;U++)for(let I of[-1,1]){let O=Oe(27.99+U*2.54,36.8+I*3.85,Ft+3.2);a.push(Bn(.55,1.6,.35,O.x,O.y,O.z))}let g=new Ot(new Zi(35.56,3.3,7.4,2,.4),[ge.cip,ge.cip,new we({map:Lb(),roughness:.72}),ge.cip,ge.cip,ge.cip]);g.position.copy(Oe(44.5,36.8,Ft+2.6+1.65)),t.add(g),m=Oe(20,17.5,Ft+.45),s.push(Bn(5,.9,5,m.x,m.y,m.z)),m=Oe(21,27,Ft+1.8),a.push(Bn(10.5,3.5,4.4,m.x,m.y,m.z)),m=Oe(15,47.5,Ft+.8),s.push(Bn(6.5,1.6,3.5,m.x,m.y,m.z)),m=Oe(15,44.6,Ft+.2),a.push(Bn(3.2,.3,3,m.x,m.y,m.z));for(let[U,I]of[[13,31.5],[19.5,37.5]]){let O=Oe(U,I,Ft+2.75);s.push(Vc(3.15,5.5,O.x,O.y,O.z,18)),a.push(Vc(3,.2,O.x,Ft+5.55,O.z,18))}m=Oe(7.4,5.2,Ft+1.6),s.push(po(6,3.2,6,.5,m.x,m.y,m.z)),a.push(Bn(6.1,.3,6.1,m.x,Ft+3.35,m.z));let p=Vc(1.7,1.3,m.x,Ft+4.1,m.z,18);m=Oe(64.87,26.67,Ft+1.25),s.push(Bn(5.08,2.5,7.62,m.x,m.y,m.z));for(let U of[63.6,66.14])for(let I of[24.13,26.67,29.21]){let O=Oe(U,I,Ft+5.5);o.push(Bn(.64,6,.64,O.x,O.y,O.z))}t.add(Js(l,ge.ayak),Js(s,ge.siyah),Js(r,ge.koyu),Js(a,ge.metal),Js(o,ge.altin));let S=new Ot(p,new we({color:14207392,roughness:.5}));t.add(S);let T=(U,I,O)=>{let q=new we({color:new Ht(O).multiplyScalar(.45),emissive:O,emissiveIntensity:0,roughness:.3}),X=new Ot(new Fe(1.6,.6,.85),q);X.position.copy(Oe(U,I,Ft+.3)),t.add(X);let j=new Gs(new ds({map:vo(),color:O,blending:Ci,depthWrite:!1,transparent:!0}));return j.scale.set(6,6,1),j.position.copy(X.position).add(new C(0,.8,0)),j.visible=!1,t.add(j),$=>{q.emissiveIntensity=$?1:0,q.color.set($?O:new Ht(O).multiplyScalar(.45)),j.visible=$}},M=T(28.5,10.6,16754470),w=T(61.5,10.6,4448378);T(28.5,13.3,16766287),T(28.5,15.4,16766287),Cs(t);let v=(U,I,O,q,X,j)=>{let $=Oe(U,I,O);return[$.x,$.y,$.z,q,X,j]},A={kart:[An.x,7,An.z,An.w,14,An.d],usb:v(1.65,15.24,Ft+5.45,17,11.6,12.8),"guc-girisi":v(5.2,44.9,Ft+5.5,15,11.8,9.8),mikrodenetleyici:v(44.5,36.8,Ft+3,38.5,6.2,10.2),"dijital-pinler":v((h.x1+f.x2)/2,mo,Ft+4.3,f.x2-h.x1+1.2,9.4,3.6),"analog-pinler":v((d.x1+d.x2)/2,Ts,Ft+4.3,d.x2-d.x1+1.2,9.4,3.6),"guc-pinleri":v((u.x1+u.x2)/2,Ts,Ft+4.3,u.x2-u.x1+1.2,9.4,3.6),reset:v(7.4,5.2,Ft+2.4,7,5,7)},x=[],E=(U,I)=>{let[O,q,X,j,$,Q]=I,B=sa({parca:U.kesif,...U},j,$,Q,O,q,X);x.push(B),n.push(B)};E({kesif:"kart",parca:"kart"},A.kart);for(let U of["usb","guc-girisi","mikrodenetleyici","dijital-pinler","analog-pinler","guc-pinleri","reset"])E({kesif:U},A[U]);E({kesif:"usb-cipi"},v(20,17.5,Ft+1.1,7,2.6,7)),E({kesif:"kristal"},v(21,27,Ft+1.9,11.5,4.2,5.4)),E({kesif:"regulator"},v(15,46.2,Ft+1.1,7.4,2.6,6.8));for(let[U,I]of[[13,31.5],[19.5,37.5]])E({kesif:"kondansator"},v(U,I,Ft+2.9,7.2,6.2,7.2));E({kesif:"icsp"},v(64.87,26.67,Ft+4.4,6.4,9.2,9)),E({kesif:"led-l"},v(27.6,10.6,Ft+.8,4.6,1.8,2.3)),E({kesif:"led-txrx"},v(27.3,14.35,Ft+.8,4.8,1.8,4.4)),E({kesif:"led-on"},v(62.9,10.6,Ft+.8,5.4,1.8,2.3));for(let[U,I]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])E({kesif:"montaj-deligi"},v(U,I,Ft+.3,4.4,1.6,4.4));let P=[];for(let[U,I]of[[ia,mo],[_o,Ts],[xo,Ts]])for(let[O,q]of Object.entries(U)){let X=Ib(O);if(!X)continue;let j=gi+1.2-Ft;E({kesif:X,parca:"pin",pin:O,ozel:Vp(O),minAdim:Li,minPx:12},v(q,I,Ft+j/2,2.5,j,2.6)),P.push({ad:O,kesif:X,ozel:Vp(O),nokta:Oe(q,I,gi+.6)})}let L=(U,I,O)=>Oe(U,I,O),N=[{id:"usb",nokta:L(1.65,15.24,Ft+12)},{id:"guc-girisi",nokta:L(5.2,44.9,Ft+12.2)},{id:"mikrodenetleyici",nokta:L(44.5,36.8,Ft+6.6)},{id:"usb-cipi",nokta:L(20,17.5,Ft+1.6)},{id:"kristal",nokta:L(21,27,Ft+4.3)},{id:"regulator",nokta:L(15,46.5,Ft+2.4)},{id:"kondansator",nokta:L(13,31.5,Ft+6.2)},{id:"reset",nokta:L(7.4,5.2,Ft+5.4)},{id:"icsp",nokta:L(64.87,26.67,Ft+9.4)},{id:"led-l",nokta:L(28.5,10.6,Ft+1)},{id:"led-txrx",nokta:L(28.5,14.35,Ft+1)},{id:"led-on",nokta:L(61.5,10.6,Ft+1)},{id:"dijital-pinler",nokta:L(46,10.6,Ft+.8)},{id:"analog-pinler",nokta:L(55.6,42,Ft+.8)},{id:"guc-pinleri",nokta:L(35.3,42,Ft+.8)},{id:"montaj-deligi",nokta:L(66.04,17.78,Ft+.8)}];return{grup:t,alanlar:A,ledL:M,ledOn:w,vekiller:x,pinler:P,kesifNoktalari:N}}function Db(){let t=Math.round(2048*Pt.d/Pt.w),e=2048/Pt.w,[i,s]=yo(2048,t),r=o=>(o+Pt.w/2)*e,a=o=>(o+Pt.d/2)*e;s.fillStyle="#f4f2ec",s.fillRect(0,0,2048,t),s.fillStyle="#dcd8cf",s.fillRect(0,a(-1.5),2048,3*e),s.fillStyle="#cfcac0",s.fillRect(0,a(-.35),2048,.7*e);for(let o of[1,-1])s.fillStyle="#d23b3b",s.fillRect(r(-37),a(o*23.6)-.3*e,r(37)-r(-37),.6*e),s.fillStyle="#2f62c9",s.fillRect(r(-37),a(o*16.9)-.3*e,r(37)-r(-37),.6*e);s.font=`700 ${2.1*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";for(let o of[1,-1])for(let l of[-39.4,39.4])s.fillStyle="#d23b3b",s.fillText("+",r(l),a(o*Rs["yakin+"])),s.fillStyle="#2f62c9",s.fillText("\u2212",r(l),a(o*Rs["yakin-"]));s.fillStyle="#8a8478",s.font=`600 ${1.45*e}px "DejaVu Sans", Arial, sans-serif`;for(let[o,l]of Object.entries(Gc))for(let c of[-39.3,39.3])s.fillText(o,r(c),a(l));for(let o of[1,5,10,15,20,25,30])for(let l of[1,-1])s.fillText(String(o),r(-36.83+(o-1)*Li),a(l*15.45));return Hc(i)}function Yp(n){bo();let t=new _n;t.name="breadboard";let e=new we({map:Db(),roughness:.78}),i=ge.bbYan.clone(),s=[i,i,e,i,i,i],r=new Ot(new Zi(Pt.w,Pt.h,Pt.d,3,1.1),s);r.position.set(Pt.x,Pt.h/2,Pt.z),t.add(r);let a=[],o=v=>a.push(Bn(1.15,.04,1.15,v.x,Ke+.02,v.z));for(let v=1;v<=30;v++)for(let A of Object.keys(Gc))o(js(v,A));for(let v of Object.keys(Rs))for(let A of go)o(new C(On(A),0,Pt.z+Rs[v]));t.add(Js(a,ge.bbDelik));let l=[];for(let v=1;v<=30;v++)for(let A of[1,-1])l.push(Bn(1.5,1.1,11.4,On(v),Ke-2.3,Pt.z+A*8.89));for(let v of Object.values(Rs))l.push(Bn(On(30)-On(2)+1.6,1.1,1.5,Pt.x,Ke-2.3,Pt.z+v));let c=Js(l,ge.serit);c.visible=!1,t.add(c),Cs(t);let h=new Fe(1.7,.06,1.7),f=new Ai(h,ge.secim,25);f.count=0,f.frustumCulled=!1,t.add(f);let u=new me;function d(v){f.count=v.length,v.forEach((A,x)=>{u.makeTranslation(A.x,Ke+.06,A.z),f.setMatrixAt(x,u)}),f.instanceMatrix.needsUpdate=!0}function m(v){let A=v.x-Pt.x,x=v.z-Pt.z,E=Math.round((A+36.83)/Li)+1,P=null,L=1.6;for(let[N,U]of Object.entries(Gc)){let I=Math.hypot(A-(-36.83+(E-1)*Li),x-U);E>=1&&E<=30&&I<L&&(L=I,P={tur:"sutun",sutun:E,satir:N})}for(let[N,U]of Object.entries(Rs))Math.abs(x-U)<1.3&&go.some(I=>Math.abs(A-(-36.83+(I-1)*Li))<1.3)&&(P={tur:"ray",ray:N});if(!P)return null;if(P.tur==="sutun"){let N="abcde".includes(P.satir)?"abcde":"fghij";return{...P,delikler:[...N].map(U=>js(P.sutun,U)),ad:`${P.sutun}. s\xFCtun, ${N[0]}-${N[4]} sat\u0131rlar\u0131`}}return{...P,delikler:go.map(N=>new C(On(N),0,Pt.z+Rs[P.ray])),ad:P.ray.endsWith("+")?"Art\u0131 (+) ray\u0131":"Eksi (\u2212) ray\u0131"}}let y={breadboard:[Pt.x,Pt.h/2,Pt.z,Pt.w,Pt.h+1,Pt.d],"bb-yakin-raylar":[Pt.x,Ke,Pt.z+20.32,76,1.4,5.6],"bb-satirlar":[Pt.x,Ke,Pt.z,77,1.4,31],"bb-kanal":[Pt.x,Ke,Pt.z,80,1.2,3.2]},g=[],p=(v,A,x,E,P,L,N)=>{let U=sa({parca:v.kesif,bb:!0,...v},A,x,E,P,L,N);g.push(U),n.push(U)},S=Ke-.1,T=.8;p({kesif:"breadboard"},Pt.w,Pt.h+1,Pt.d,Pt.x,Pt.h/2,Pt.z);for(let v=1;v<=30;v++)for(let[A,x]of[[1,"a-e"],[-1,"f-j"]])p({kesif:"serit",ozel:`${v}. s\xFCtun, ${x} sat\u0131rlar\u0131`,minAdim:Li,minPx:12},2.5,T,12.7,On(v),S,Pt.z+A*8.89);for(let v of[1,-1]){let A=v>0?"karta yak\u0131n taraf":"uzak taraf";p({kesif:"arti-ray",ozel:A,minAdim:Li,minPx:8},81.2,T,4.08,Pt.x,S,Pt.z+v*22.36),p({kesif:"eksi-ray",ozel:A,minAdim:Li,minPx:8},81.2,T,4.02,Pt.x,S,Pt.z+v*18.31),p({kesif:"koordinat",ozel:"s\xFCtun numaralar\u0131",minAdim:1.06,minPx:6},76.2,T,1.06,Pt.x,S,Pt.z+v*15.77),p({kesif:"koordinat",ozel:"sat\u0131r harfleri",minAdim:Li,minPx:8},2.4,T,30.5,Pt.x+v*39.3,S,Pt.z)}p({kesif:"orta-kanal"},76.2,T,5,Pt.x,S,Pt.z);let M=(v,A,x=Ke+1)=>new C(v,x,A),w=[{id:"breadboard",nokta:M(On(6),Pt.z-8.89)},{id:"serit",nokta:M(On(20),Pt.z-8.89),ozel:"20. s\xFCtun, f-j sat\u0131rlar\u0131"},{id:"orta-kanal",nokta:M(On(27),Pt.z,Ke+.6)},{id:"koordinat",nokta:M(Pt.x-39.3,Pt.z+8.89)},{id:"arti-ray",nokta:M(On(28),Pt.z+21.59),ozel:"karta yak\u0131n taraf"},{id:"eksi-ray",nokta:M(On(4),Pt.z+19.05),ozel:"karta yak\u0131n taraf"}];return{grup:t,alanlar:y,grupBul:m,grupGoster:d,vekiller:g,kesifNoktalari:w,rontgen(v){c.visible=v;for(let A of new Set(s))A.transparent=v,A.opacity=v?.3:1,A.depthWrite=!v,A.needsUpdate=!0;r.castShadow=!v}}}var kb={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"};function $p(n,t){bo();let e=new _n;e.name="direnc";let[i,s]=yo(8,256);s.fillStyle="#d8c69c",s.fillRect(0,0,8,256);let r=[.18,.33,.48,.8];n.forEach((u,d)=>{s.fillStyle=kb[u],s.fillRect(0,(1-r[d])*256-12,8,24)});let a=new $i(1.1,1.1,4.6,16);a.rotateZ(Math.PI/2);let o=new Ot(a,new we({map:Hc(i),roughness:.55})),l=new we({color:14206620,roughness:.55}),c=3.4;o.position.y=c,e.add(o);for(let u of[-1,1]){let d=new Ot(new Xs(1.32,14,10),l);d.scale.set(.75,1,1),d.position.set(u*2.45,c,0),e.add(d);let m=new Ot(new Fe(t/2-2.9,.5,.5),ge.metal);m.position.set(u*((t/2+2.9)/2),c,0);let y=new Ot(new Fe(.5,c+7,.5),ge.metal);y.position.set(u*t/2,(c-7)/2,0),e.add(m,y)}Cs(e);let h=sa({kesif:"direnc"},t+1.4,c+9,3.2,0,(c+1.8-7.2)/2,0),f=sa({kesif:"renk-bantlari"},3.6,2.8,2.8,0,c,0);return e.add(h,f),e.userData={tepe:new C(0,c+1.4,0),uclar:[new C(-t/2,0,0),new C(t/2,0,0)],H:c,vekiller:[h,f],kesifYerleri:()=>[["direnc",new C(t/2-1.2,c+2.6,0)],["renk-bantlari",new C(-.6,c+2.2,0)]]},e}function Kh(n,t,e){n.position.set((t.x+e.x)/2,Ke,(t.z+e.z)/2),n.rotation.set(0,-Math.atan2(e.z-t.z,e.x-t.x),0)}function qp(){bo();let n=new _n;n.name="buton";let t=new Ot(new Zi(6,3.4,6,2,.45),ge.siyah);t.position.y=1.7;let e=new Ot(new Fe(6.2,.3,6.2),ge.metal);e.position.y=3.55;let i=new Ot(new $i(1.8,1.8,1.7,24),new we({color:14172995,roughness:.42}));i.position.y=4.55,n.add(t,e,i);for(let r of[-2.54,2.54])for(let a of[-3.81,3.81]){let o=new Ot(new Fe(.6,7,.35),ge.metal);o.position.set(r,-3.2,a),n.add(o)}Cs(n);let s=sa({kesif:"buton"},7.6,12.9,8.4,0,-.45,0);return n.add(s),n.userData={bas(r){i.position.y=r?3.95:4.55},tepe:new C(0,5.6,0),vekiller:[s],kesifYerleri:()=>[["buton",new C(0,8.6,0)]]},n}var Nb={turuncu:16088064,siyah:2829104,kirmizi:13840175,sari:15909376,yesil:3054920,mavi:1994713,mor:8280002};function Zp(n,t,e){bo();let i=new _n;i.name="kablo";let s=Nb[e]??e,r=(S,T)=>S.clone().add(new C(0,T,0)),a=r(n,6.2),o=r(t,6.2),l=a.distanceTo(o),c=new C((a.x+o.x)/2,Math.max(a.y,o.y)+7+l*.16,(a.z+o.z)/2),h=new Vr([a,r(a,4),c,r(o,4),o],!1,"centripetal"),f=56,u=6,d=new Ot(new ms(h,f,.62,u,!1),new we({color:s,roughness:.45}));i.add(d);let m=[];for(let S of[n,t]){let T=new Ot(new Zi(2.5,6,2.5,2,.3),new we({color:2763312,roughness:.5}));T.position.copy(S).add(new C(0,3.1,0));let M=new Ot(new Fe(.6,6,.6),ge.metal);M.position.copy(S).add(new C(0,-2.9,0)),i.add(T,M),m.push(T,M)}Cs(i);let y=new Ot(new ms(h,24,1.9,6,!1),ge.gorunmez);y.userData={kesif:"kablo",ince:!0,hacim:120},i.add(y);let g=[y];for(let S of[n,t]){let T=sa({kesif:"kablo"},3.4,6.6,3.4,S.x,S.y+3.1,S.z);i.add(T),g.push(T)}let p=d.geometry.index.count;return i.userData={egri:h,vekiller:g,kesifYerleri:()=>[["kablo",h.getPoint(.5)]],buyut(S){d.geometry.setDrawRange(0,Math.floor(S*f)*u*6),m[2].visible=m[3].visible=S>=1,S>=1&&d.geometry.setDrawRange(0,p)},yol:h.getSpacedPoints(40)},i}function Kp(n){Wp=Math.max(1,Math.min(8,n))}var Ub=[.1,.84,.54],Wc={genel:{kutu:[-41.3,0,-65.3,41.3,15,58.7],yon:Ub},kart:{kutu:[-40.7,0,5.3,34.3,15,58.7],yon:[.08,.86,.5]},usb:{kutu:[-41.2,3.5,13,-22,15.3,28],yon:[-.78,.48,.42]},"guc-girisi":{kutu:[-37,3.5,44,-20,15.5,57],yon:[-.7,.5,.52]},cip:{kutu:[-10,3.5,35.5,30.5,10.5,48.5],yon:[.05,.86,.5]},dijital:{kutu:[-15,3.6,4,33.8,13,15],yon:[.04,.72,.69]},analog:{kutu:[12.5,3.6,49,30.2,13,58.7],yon:[.08,.7,.71]},guc:{kutu:[-10.5,3.6,49,12.5,13,58.7],yon:[0,.62,.78]},bb:{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[.06,.86,.5]},"bb-ust":{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[0,.96,.27]},raylar:{kutu:[-41.3,0,-34,41.3,8.6,-10.7],yon:[.04,.8,.6]},devre:{kutu:[-14,0,-44,22,22,-14],yon:[.12,.8,.58]},"devre-genis":{kutu:[-41.3,0,-65.3,41.3,22,12],yon:[.07,.9,.43],kablolar:!0},"buton-yakin":{kutu:[5,0,-46,23,18,-16],yon:[.15,.72,.67]},trafik:{kutu:[-26,0,-44,26,22,-14],yon:[.05,.78,.62]}};var Jp={kirmizi:15022389,sari:16498733,yesil:3126084},Fb={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"},jp={220:["kirmizi","kirmizi","kahve","altin"],1e4:["kahve","siyah","turuncu","altin"]},Di=4.2,Jh=new yn({visible:!1}),Qp=null,tm=()=>ge.metal||(Qp??=new we({color:14014686,metalness:1,roughness:.28}));function jh(n,t,e,i,s,r,a){let o=new Ot(new Fe(t,e,i),Jh);return o.position.set(s,r,a),n.add(o),n.userData.hedef=o,o}var em=(n,t)=>Math.hypot(t.x-n.x,t.z-n.z);function Qh(n,t,e){let i=new Ht(Jp[n]??Jp.kirmizi),s=i.clone().lerp(new Ht(3813430),.45),r=new _n;r.name="led";let a=[[0,0],[2.95,0],[2.95,1],[2.5,1],[2.5,5.6]];for(let d=1;d<=8;d++){let m=d/8*(Math.PI/2);a.push([2.5*Math.cos(m),5.6+2.5*Math.sin(m)])}let o=new we({color:s,emissive:i,emissiveIntensity:0,roughness:.14,metalness:0}),l=new Ot(new Gr(a.map(([d,m])=>new at(d,m)),20),o);l.position.y=Di,r.add(l);let c=Math.max(1.27,em(t,e)/2),h=1.3;for(let d of[-1,1]){let m=d*1.27,y=d*c,g=(p,S,T,M)=>{let w=new Ot(new Fe(p,S,.5),tm());w.position.set(T,M,0),r.add(w)};if(y===m){g(.5,Di+5,m,Di-(Di+5)/2);continue}g(.5,Di-h,m,(Di+h)/2),g(Math.abs(y-m)+.5,.5,(m+y)/2,h),g(.5,h+5,y,(h-5)/2)}let f=new Gs(new ds({map:vo(),color:i,blending:Ci,depthWrite:!1,transparent:!0}));f.scale.set(20,20,1),f.position.y=Di+5.5,f.visible=!1,r.add(f);let u=new Ot(new Ti(30,30),new yn({map:vo(),color:i,blending:Ci,depthWrite:!1,transparent:!0,opacity:.6}));return u.rotation.x=-Math.PI/2,u.position.y=.12,u.visible=!1,r.add(u),Cs(r),jh(r,Math.max(7,c*2+1.5),12,7,0,Di+3.5,0),Object.assign(r.userData,{ac(d){let m=typeof d=="number"?d:d?1:0;r.userData.yanik=m>0,o.emissiveIntensity=1.05*m,o.color.copy(s).lerp(i,m),f.visible=u.visible=m>.02,f.material.opacity=Math.min(1,m*1.15),u.material.opacity=.6*m},renk:i,lambaY:Di+6,tepe:new C(0,Di+8.2,0)}),Kh(r,t,e),r}function nm(n,t,e){let i=jp[n]||jp[220],s=em(t,e),r=s>=7?$p(i,s):Ob(i,s),a=r.userData.H;return jh(r,Math.max(7.5,s+2),a+3,4.5,0,a/2+.5,0),Kh(r,t,e),r}function Ob(n,t){let e=new _n;e.name="direnc";let i=document.createElement("canvas");i.width=8,i.height=256;let s=i.getContext("2d");s.fillStyle="#d8c69c",s.fillRect(0,0,8,256),[.18,.33,.48,.8].forEach((d,m)=>{s.fillStyle=Fb[n[m]],s.fillRect(0,(1-d)*256-12,8,24)});let r=new fs(i);r.colorSpace=tn;let a=-t/2,o=1.5,l=4.6,c=o+l+2.3,h=new Ot(new $i(1.1,1.1,l,16),new we({map:r,roughness:.55}));h.position.set(a,o+l/2,0),e.add(h);let f=new we({color:14206620,roughness:.55});for(let d of[o,o+l]){let m=new Ot(new Xs(1.32,14,10),f);m.scale.set(1,.75,1),m.position.set(a,d,0),e.add(m)}let u=(d,m,y,g)=>{let p=new Ot(new Fe(d,m,.5),tm());p.position.set(y,g,0),e.add(p)};return u(.5,o+5,a,(o-5)/2),u(.5,c-o-l,a,(o+l+c)/2),u(t+.5,.5,0,c),u(.5,c+5,-a,(c-5)/2),Cs(e),e.userData={tepe:new C(0,c+1.4,0),H:c},e}function im(n){let t=qp();return t.position.copy(n),jh(t,9,8,10,0,2.5,0),t}function sm(n,t,e){let i=Zp(n,t,e),s=new Ot(new ms(i.userData.egri,24,2.3,6,!1),Jh);return i.add(s),i.userData.hedef=s,i}function Xc(n){let t=new Set(Object.values(ge)),e=vo();n.traverse(i=>{i.geometry?.dispose();let s=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(let r of s)t.has(r)||r===Jh||r===Qp||(r.map&&r.map!==e&&r.map.dispose(),r.dispose())})}var Yc={kirmizi:"#e53935",sari:"#fbc02d",yesil:"#2fb344"},td={turuncu:"#f57c00",kirmizi:"#d32f2f",siyah:"#2b2b30",sari:"#f2c200",yesil:"#2e9d48",mavi:"#1e6fd9",mor:"#7e57c2"},rm={220:["#d32f2f","#d32f2f","#7a4a24","#c9a33a"],1e4:["#7a4a24","#1d1d1d","#f57c00","#c9a33a"]},$c='<svg class="parca-ikon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">',ed='stroke="#8a8f99" stroke-width="1.6" stroke-linecap="round" fill="none"';function Bb(n){let t=Yc[n]||Yc.kirmizi;return`${$c}<path d="M13 23v7M19 23v5" ${ed}/><path d="M10 15a6 6 0 0 1 12 0v6H10z" fill="${t}" stroke="#0006"/><rect x="8.5" y="20.5" width="15" height="2.8" rx="1" fill="${t}" stroke="#0006"/></svg>`}function zb(n){let t=rm[n]||rm[220];return`${$c}<path d="M1 16h6M25 16h6" ${ed}/><rect x="7" y="11" width="18" height="10" rx="4" fill="#d8c69c" stroke="#0005"/>${t.map((e,i)=>`<rect x="${[10,13.2,16.4,21][i]}" y="11" width="2" height="10" fill="${e}"/>`).join("")}</svg>`}var Vb=()=>`${$c}<path d="M10 25v5M22 25v5M10 7V2M22 7V2" ${ed}/><rect x="6" y="7" width="20" height="18" rx="3" fill="#2b2b30"/><circle cx="16" cy="16" r="5" fill="#d84343"/></svg>`;function Gb(n){let t=td[n]||"var(--kablo,#f57c00)";return`${$c}<path d="M6 27C7 9 25 9 26 27" fill="none" style="stroke:${t}" stroke-width="3.2" stroke-linecap="round"/><rect x="3.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/><rect x="23.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/></svg>`}function am(n){return n.tur==="led"?Bb(n.renk):n.tur==="direnc"?zb(n.deger):n.tur==="buton"?Vb():Gb(n.renk)}var Jc="abcde",Hb="fghij",Wb=["uzak+","uzak-","yakin-","yakin+"],So=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30],od={a:5.5,b:4.5,c:3.5,d:2.5,e:1.5,f:-1.5,g:-2.5,h:-3.5,i:-4.5,j:-5.5},ld={"yakin-":7.5,"yakin+":8.5,"uzak-":-7.5,"uzak+":-8.5},cd=["SCL","SDA","AREF","GND-D","13","12","11","10","9","8","7","6","5","4","3","2","1","0"],ud=["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],hd=["A0","A1","A2","A3","A4","A5"],jc=[...cd,...ud,...hd],Ji=[2,3,4,5,6,7,8,9,10,11,12,13],Xb=[1e3,500,200],aa={kirmizi:{ad:"k\u0131rm\u0131z\u0131",esik:2},sari:{ad:"sar\u0131",esik:2.05},yesil:{ad:"ye\u015Fil",esik:2.1}},Qc={220:"220 \u03A9",1e4:"10 k\u03A9"},tu={turuncu:"Turuncu",kirmizi:"K\u0131rm\u0131z\u0131",siyah:"Siyah",sari:"Sar\u0131",yesil:"Ye\u015Fil",mavi:"Mavi",mor:"Mor"},pm=[1,4],mm=[2,6],Yb=5,om=2,$b=1e-9,qc=1e-4,qb=.002,lm=.03,Zb=.013,Kb=3,Jb=1.5,dd={"GND-D":"GND",GND1:"GND",GND2:"GND","5V":"5V",IOREF:"5V","3.3V":"3V3",SDA:"A4",A4:"A4",SCL:"A5",A5:"A5"},jb=new Set(["GND-D","GND1","GND2","5V","3.3V","IOREF"]),fd=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1);function Je(n){let[t,e,i,s]=String(n??"").split(":");if(s!==void 0)return null;if(t==="h"){let r=Number(e);if(Number.isInteger(r)&&r>=1&&r<=30&&typeof i=="string"&&i.length===1&&"abcdefghij".includes(i))return{tur:"delik",sutun:r,satir:i}}if(t==="r"){let r=Number(i);if(Wb.includes(e)&&So.includes(r))return{tur:"ray",ray:e,sutun:r}}return t==="p"&&i===void 0&&jc.includes(e)?{tur:"pin",pin:e}:null}var Zc=n=>{let t=Je(n);return!!(t&&t.tur!=="pin")};function cm(n){let t=Je(n);return!t||t.tur==="pin"?null:[t.sutun,t.tur==="delik"?od[t.satir]:ld[t.ray]]}function sd(n,t){let e=cm(n),i=cm(t);return e&&i?Math.hypot(e[0]-i[0],e[1]-i[1]):1/0}function Pn(n){let t=Je(n);return t?t.tur==="delik"?`s:${t.sutun}:${Jc.includes(t.satir)?"y":"u"}`:t.tur==="ray"?`r:${t.ray}`:`k:${dd[t.pin]||t.pin}`:null}function gm(n){let t=Je(n);if(!t)return[];if(t.tur==="delik")return[...Jc.includes(t.satir)?Jc:Hb].map(i=>`h:${t.sutun}:${i}`);if(t.tur==="ray")return So.map(i=>`r:${t.ray}:${i}`);let e=Pn(n);return jc.filter(i=>Pn(`p:${i}`)===e).map(i=>`p:${i}`)}function ra(n){return/^\d+$/.test(n)?n==="0"?"0. pin (RX)":n==="1"?"1. pin (TX)":`${n}. pin`:{"GND-D":"GND",GND1:"GND",GND2:"GND","3.3V":"3,3V",VIN:"Vin",NC:"bo\u015F pin (NC)"}[n]||n}function rd(n){return`${n.startsWith("yakin")?"alt":"\xFCst"} ${n.endsWith("+")?"+":"\u2212"} ray\u0131`}function He(n,t=!1){let e=Je(n);return e?e.tur==="delik"?`${e.sutun}${e.satir}`:e.tur==="ray"?t?`${rd(e.ray)}, ${e.sutun}. s\xFCtun`:rd(e.ray):ra(e.pin):""}function oa(n){let t=Je(n);if(!t)return"";if(t.tur==="delik"){let i=Jc.includes(t.satir)?"a-e":"f-j";return`${t.sutun}. s\xFCtun, ${i} sat\u0131rlar\u0131`}return t.tur==="ray"?fd(rd(t.ray)):dd[t.pin]==="GND"?"GND pinleri (kart i\xE7inde birbirine ba\u011Fl\u0131)":ra(t.pin)}function Qs(n){return n?n.tur==="led"?[n.anot,n.katot]:n.tur==="direnc"?[n.a,n.b]:n.tur==="kablo"?[n.bas,n.son]:n.tur==="buton"?[`h:${n.sutun}:e`,`h:${n.sutun+2}:e`,`h:${n.sutun}:f`,`h:${n.sutun+2}:f`]:[]:[]}function ki(n){return n.tur==="led"?`${fd(aa[n.renk]?.ad||"")} LED (${He(n.anot)})`:n.tur==="direnc"?`${Qc[n.deger]||""} diren\xE7 (${He(n.a)})`:n.tur==="buton"?`Buton (${n.sutun}. ve ${n.sutun+2}. s\xFCtun)`:n.tur==="kablo"?`Kablo (${He(n.bas)} \u2192 ${He(n.son)})`:""}function eu(n){return n.tur==="led"?`Anot (uzun bacak) ${He(n.anot,!0)}, katot (k\u0131sa bacak) ${He(n.katot,!0)}`:n.tur==="direnc"?`Bacaklar ${He(n.a,!0)} ve ${He(n.b,!0)}`:n.tur==="buton"?`Bacaklar ${n.sutun}e, ${n.sutun+2}e, ${n.sutun}f, ${n.sutun+2}f (kanal\u0131n \xFCst\xFCnde)`:n.tur==="kablo"?`${fd(He(n.bas,!0))} ile ${He(n.son,!0)} aras\u0131nda`:""}function Qb(n){return!n||typeof n!="object"||typeof n.id!="string"||!n.id?!1:n.tur==="led"?!!aa[n.renk]&&Zc(n.anot)&&Zc(n.katot)&&n.anot!==n.katot:n.tur==="direnc"?!!Qc[n.deger]&&Zc(n.a)&&Zc(n.b)&&n.a!==n.b:n.tur==="buton"?Number.isInteger(n.sutun)&&n.sutun>=1&&n.sutun<=28:n.tur==="kablo"?!!tu[n.renk]&&!!Je(n.bas)&&!!Je(n.son)&&n.bas!==n.son:!1}function pd(n){let t=(e,i)=>Ji.includes(Number(e))?Number(e):i;if(n?.tur==="buton"){let e=t(n.giris,2),i=t(n.cikis,13);return i===e&&(i=e===13?12:13),{tur:"buton",giris:e,cikis:i}}if(n?.tur==="elle"){let e={};for(let i of Ji)n.seviyeler?.[i]&&(e[i]=!0);return{tur:"elle",seviyeler:e}}return{tur:"blink",pin:t(n?.pin,13),bekleme:Xb.includes(Number(n?.bekleme))?Number(n.bekleme):1e3}}function la(n){let t=new Set,e=new Set,i=[];for(let s of Array.isArray(n?.parcalar)?n.parcalar:[]){if(!Qb(s)||e.has(s.id))continue;let r=Qs(s);if(r.some(o=>t.has(o))||s.tur==="led"&&!ad(sd(s.anot,s.katot),pm)||s.tur==="direnc"&&!ad(sd(s.a,s.b),mm))continue;r.forEach(o=>t.add(o)),e.add(s.id);let a={id:s.id,tur:s.tur};for(let o of["renk","anot","katot","deger","a","b","sutun","bas","son"])s[o]!==void 0&&(a[o]=s[o]);i.push(a)}return{parcalar:i,program:pd(n?.program)}}var ad=(n,[t,e])=>n>=t-.01&&n<=e+.01;function nu(n,t=null){let e=new Map;for(let i of n)if(i.id!==t)for(let s of Qs(i))e.set(s,i.id);return e}function tS(n){let t=Je(n);return!t||t.tur!=="delik"||!"ef".includes(t.satir)?null:t.sutun+2<=30?t.sutun:t.sutun-2}function Mo(n,t,e,i,s=null){let r=Je(i);if(!r)return{gecerli:!1,neden:"Burada delik yok"};let a=nu(n,s),o={led:"LED",direnc:"Diren\xE7",buton:"Buton"}[t];if(t!=="kablo"&&r.tur==="pin")return{gecerli:!1,neden:`${o} breadboard'a tak\u0131l\u0131r: bir delik se\xE7`};if(t==="buton"){let u=tS(i);return u==null?{gecerli:!1,neden:"Butonu kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131na koy"}:Qs({tur:"buton",sutun:u}).some(m=>a.has(m))?{gecerli:!1,neden:"Butonun bacaklar\u0131 dolu deliklere geliyor"}:{gecerli:!0,sutun:u}}if(a.has(i))return{gecerli:!1,neden:r.tur==="pin"?"Bu pinde zaten kablo var":"Bu delik dolu"};if(!e)return{gecerli:!0};if(e===i)return{gecerli:!1,neden:"\u0130ki u\xE7 ayn\u0131 yere tak\u0131lamaz"};if(t==="kablo")return{gecerli:!0};let l=sd(e,i),c=t==="led"?pm:mm,h=Math.round(l*10)/10,f=String(h).replace(".",",");return ad(l,c)?{gecerli:!0,mesafe:l}:{gecerli:!1,mesafe:l,neden:`${f} ad\u0131m: ${o} bacaklar\u0131 en az ${c[0]}, en \xE7ok ${c[1]} ad\u0131m arayla tak\u0131l\u0131r`}}var md={"ders-2":{ad:"Ders 2: LED Yakal\u0131m",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"blink",pin:13,bekleme:1e3}},"ders-3":{ad:"Ders 3: Butonla LED",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"},{id:"buton",tur:"buton",sutun:20},{id:"r2",tur:"direnc",deger:1e4,a:"h:22:c",b:"r:yakin-:22"},{id:"k5v",tur:"kablo",renk:"kirmizi",bas:"p:5V",son:"r:yakin+:24"},{id:"kplus",tur:"kablo",renk:"kirmizi",bas:"r:yakin+:20",son:"h:20:a"},{id:"k2",tur:"kablo",renk:"sari",bas:"p:2",son:"h:22:d"}],program:{tur:"buton",giris:2,cikis:13}},"ders-4":{ad:"Ders 4: Trafik I\u015F\u0131\u011F\u0131",parcalar:[{id:"ledK",tur:"led",renk:"kirmizi",anot:"h:8:e",katot:"h:9:e"},{id:"ledS",tur:"led",renk:"sari",anot:"h:15:e",katot:"h:16:e"},{id:"ledY",tur:"led",renk:"yesil",anot:"h:22:e",katot:"h:23:e"},{id:"rK",tur:"direnc",deger:220,a:"h:9:c",b:"r:yakin-:9"},{id:"rS",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"rY",tur:"direnc",deger:220,a:"h:23:c",b:"r:yakin-:23"},{id:"kK",tur:"kablo",renk:"kirmizi",bas:"p:10",son:"h:8:a"},{id:"kS",tur:"kablo",renk:"sari",bas:"p:9",son:"h:15:a"},{id:"kY",tur:"kablo",renk:"yesil",bas:"p:8",son:"h:22:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"elle",seviyeler:{10:!0}}}};function nd(n,t){let e=new Map,i=r=>{if(!e.has(r))return e.set(r,r),r;let a=r;for(;e.get(a)!==a;)a=e.get(a);let o=r;for(;e.get(o)!==a;){let l=e.get(o);e.set(o,a),o=l}return a},s=(r,a)=>{let o=i(r),l=i(a);o!==l&&e.set(o,l)};for(let r of n){let a=Qs(r).map(Pn);a.forEach(i),r.tur==="kablo"&&s(a[0],a[1]),r.tur==="buton"&&(s(a[0],a[2]),s(a[1],a[3]),(t===!0||t?.has?.(r.id))&&s(a[0],a[1]))}return{bul:i}}var Ki=n=>`k:${dd[n]||n}`;function um(n,t){let e=new Map,i=(s,r)=>{let a=n.bul(s);e.has(a)||e.set(a,[]),e.get(a).push(r)};i("k:GND","GND"),i("k:5V","5V"),i("k:3V3","3V3");for(let s of t)i(Ki(String(s)),String(s));return[...e.entries()].filter(([,s])=>s.length>1).map(([s,r])=>({kok:s,suruculer:r}))}function Kc(n,t,e){let i=new Map([[t.bul("k:GND"),0],[t.bul("k:5V"),5],[t.bul("k:3V3"),3.3]]),s=[],r=[],a=[];for(let S of n){if(S.tur==="direnc"){let T=t.bul(Pn(S.a)),M=t.bul(Pn(S.b));T!==M&&s.push({a:T,b:M,G:1/S.deger})}if(S.tur==="led"){let T=t.bul(Pn(S.anot)),M=t.bul(Pn(S.katot));T!==M&&r.push({id:S.id,a:T,k:M,vf:aa[S.renk].esik})}}for(let[S,T]of Object.entries(e)){let M=t.bul(Ki(S)),w=`v:${S}`;i.set(w,T),a.push({a:M,b:w,G:1/Yb})}let o=new Map,l=S=>{!i.has(S)&&!o.has(S)&&o.set(S,o.size)};for(let S of[...s,...r.map(T=>({a:T.a,b:T.k})),...a])l(S.a),l(S.b);let c=o.size,h=new Map(r.map(S=>[S.id,!1])),f=new Float64Array(c),u=S=>i.has(S)?i.get(S):o.has(S)?f[o.get(S)]:0;for(let S=0;S<40;S++){let T=Array.from({length:c},()=>new Float64Array(c)),M=new Float64Array(c);for(let A=0;A<c;A++)T[A][A]=$b;let w=(A,x,E,P)=>{let L=o.get(A),N=o.get(x);L!==void 0&&(T[L][L]+=E,M[L]+=E*P,N!==void 0?T[L][N]-=E:M[L]+=E*i.get(x)),N!==void 0&&(T[N][N]+=E,M[N]-=E*P,L!==void 0?T[N][L]-=E:M[N]+=E*i.get(A))};for(let A of s)w(A.a,A.b,A.G,0);for(let A of a)w(A.a,A.b,A.G,0);for(let A of r)h.get(A.id)&&w(A.a,A.k,1/om,A.vf);f=eS(T,M);let v=!1;for(let A of r){let x=u(A.a)-u(A.k);!h.get(A.id)&&x>A.vf+1e-9?(h.set(A.id,!0),v=!0):h.get(A.id)&&x<A.vf-1e-9&&(h.set(A.id,!1),v=!0)}if(!v)break}let d=new Map(r.map(S=>[S.id,h.get(S.id)?Math.max(0,(u(S.a)-u(S.k)-S.vf)/om):0])),m=new Map,y=(S,T)=>{m.has(S)||m.set(S,[]),m.get(S).push(T)};for(let S of[...s,...a])y(S.a,S.b),y(S.b,S.a);let g=new Set(i.keys()),p=[...g];for(;p.length;)for(let S of m.get(p.shift())||[])g.has(S)||(g.add(S),p.push(S));return{V:u,akim:d,tanimli:g,ledler:r,direncler:s}}function eS(n,t){let e=t.length;for(let s=0;s<e;s++){let r=s;for(let o=s+1;o<e;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);r!==s&&([n[r],n[s]]=[n[s],n[r]],[t[r],t[s]]=[t[s],t[r]]);let a=n[s][s]||1e-30;for(let o=s+1;o<e;o++){let l=n[o][s]/a;if(l){for(let c=s;c<e;c++)n[o][c]-=l*n[s][c];t[o]-=l*t[s]}}}let i=new Float64Array(e);for(let s=e-1;s>=0;s--){let r=t[s];for(let a=s+1;a<e;a++)r-=n[s][a]*i[a];i[s]=r/(n[s][s]||1e-30)}return i}function id(n,t){if(!n.tanimli.has(t))return{deger:"KARARSIZ",bosta:!0,gerilim:null};let e=n.V(t);return{deger:e>=Kb?"HIGH":e<=Jb?"LOW":"KARARSIZ",bosta:!1,gerilim:e}}function hm(n,t,e){let i=new Map,s=(o,l)=>{i.has(o)||i.set(o,[]),i.get(o).push(l)};for(let o of n.direncler)s(o.a,o.b),s(o.b,o.a);for(let o of n.ledler)o.id!==e&&(s(o.a,o.k),s(o.k,o.a));let r=new Set([t]),a=[t];for(;a.length;)for(let o of i.get(a.shift())||[])r.has(o)||(r.add(o),a.push(o));return r}function tr(n){let t=new Set;for(let e of n)if(e.tur==="kablo")for(let i of[e.bas,e.son]){let s=Je(i);s?.tur==="pin"&&t.add(s.pin)}return t}function nS(n,t){if(n.tur==="blink")return{cikislar:[String(n.pin)],giris:null};if(n.tur==="buton")return{cikislar:[String(n.cikis)],giris:String(n.giris)};let e=tr(t);return{cikislar:Ji.map(String).filter(i=>e.has(i)||n.seviyeler[i]),giris:null}}var dm={hata:0,uyari:1,bilgi:2};function _m(n,t={}){let{parcalar:e,program:i}=la(n),s=t.calisiyor!==!1,r=new Set(t.basili||[]),{cikislar:a,giris:o}=nS(i,e),l=e.filter(B=>B.tur==="led"),c=e.filter(B=>B.tur==="buton"),h=[],f=(B,lt,ct,$t={})=>h.push({tur:B,seviye:lt,metin:ct,parcalar:[],...$t}),u=nd(e,r),d=nd(e,!0),m=nd(e,null),y=um(u,a),g=um(d,a),p=(B,lt,ct=!1)=>e.filter($t=>$t.tur==="kablo"&&!ct||$t.tur==="buton").filter($t=>Qs($t).some(qt=>B.bul(Pn(qt))===lt)).map($t=>$t.id);for(let B of y)f("kisa-devre","hata",`${fm(B.suruculer)} K\u0131sa devre giderilene kadar devre \xE7al\u0131\u015Fmaz.`,{parcalar:p(u,B.kok)});let S=new Set(y.map(B=>B.suruculer.slice().sort().join("+")));for(let B of g)S.has(B.suruculer.slice().sort().join("+"))||f("kisa-devre","hata",`Butona bas\u0131l\u0131nca k\u0131sa devre olur. ${fm(B.suruculer)}`,{parcalar:p(d,B.kok,!0)});let T=B=>e.filter(lt=>lt.tur==="kablo"&&(lt.bas===`p:${B}`||lt.son===`p:${B}`)).map(lt=>lt.id),M=u.bul("k:RESET")===u.bul("k:GND");M&&f("reset","hata","RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fmaz. Kabloyu RESET pininden \xE7\u0131kar.",{parcalar:T("RESET")});let w=tr(e),v=new Set([...a,...o?[o]:[]]);i.tur==="elle"&&Ji.forEach(B=>v.add(String(B)));let A=new Set;for(let B of w){if(jb.has(B)||v.has(B)||B==="RESET")continue;A.add(B);let lt=i.tur==="blink"&&Ji.includes(Number(B))?{tur:"blink-pin",pin:Number(B),metin:`Programda ${B}. pini se\xE7`}:null;f("pin-kullanilmiyor","uyari",iS(B,i),{parcalar:T(B),pin:B,eylem:lt})}let x={},E=null,P=s&&!y.length&&!M,L=null;if(P){if(i.tur==="blink"&&(x[i.pin]=t.faz===!1?0:5),i.tur==="elle")for(let B of a)x[B]=i.seviyeler[B]?5:0;if(i.tur==="buton"){let B=Kc(e,u,{[i.cikis]:0});E=id(B,u.bul(Ki(o)));let lt=E.deger==="HIGH"||E.deger==="KARARSIZ"&&!!t.kararsiz;x[i.cikis]=lt?5:0}L=Kc(e,u,x)}let N=g.length?null:Kc(e,d,Object.fromEntries(a.map(B=>[B,5]))),U=g.length?null:Kc(e,m,Object.fromEntries(a.map(B=>[B,0]))),I={},O=[],q=0;for(let B of l){let lt=ki(B),ct=L?.akim.get(B.id)??0,$t=N?.akim.get(B.id)??0,qt=U?.akim.get(B.id)??0,Qt=Math.max(ct,$t,qt)>lm,K=L?ct>qc&&ct<=lm:!1;if(I[B.id]={yanik:K,parlaklik:K?Math.max(.12,Math.min(1,Math.sqrt(ct/Zb))):0,akim:ct*1e3,enCok:Math.max($t,qt,ct)*1e3},!N)continue;if(d.bul(Pn(B.anot))===d.bul(Pn(B.katot))){f("tamamlanmamis","uyari",`${lt}: iki bacak ayn\u0131 ba\u011Flant\u0131 grubunda (${oa(B.anot)}). Elektrik LED'e u\u011Framadan ge\xE7er; bacaklar\u0131 farkl\u0131 s\xFCtunlara tak.`,{parcalar:[B.id]});continue}if(Qt){f("direncsiz","hata",`${lt}: diren\xE7 yok. Ger\xE7ek devrede a\u015F\u0131r\u0131 ak\u0131m LED'i ya da pini bozar; sim\xFClasyon bu LED'i yakm\u0131yor. LED ile GND aras\u0131na 220 \u03A9 diren\xE7 ekle.`,{parcalar:[B.id]});continue}let bt=$t>qc,Vt=qt>qc,St=ct>qc;if(bt||Vt||St){q++,bt!==Vt&&O.push(B.id),bt&&Vt&&a.length&&f("sabit","bilgi",`${lt} programdan ba\u011F\u0131ms\u0131z, hep yan\u0131yor: anot taraf\u0131 do\u011Frudan 5V'a ba\u011Fl\u0131. Programla yan\u0131p s\xF6nmesi i\xE7in anot taraf\u0131n\u0131 bir \xE7\u0131k\u0131\u015F pinine ba\u011Fla.`,{parcalar:[B.id]});let Kt=Math.max($t,qt,ct);Kt<qb&&f("sonuk","bilgi",`${lt} \xE7ok s\xF6n\xFCk yan\u0131yor: b\xFCy\xFCk diren\xE7 ak\u0131m\u0131 \xE7ok azalt\u0131yor. LED i\xE7in 220 \u03A9 diren\xE7 kullan.`,{parcalar:[B.id],akim:Kt*1e3});continue}let Xt=d.bul(Pn(B.anot)),Be=d.bul(Pn(B.katot));if([[N,d],[U,m]].some(([Kt,k])=>{let Ge=k.bul(Pn(B.anot)),se=k.bul(Pn(B.katot));return Kt.tanimli.has(Ge)&&Kt.tanimli.has(se)&&Kt.V(se)-Kt.V(Ge)>aa[B.renk].esik-.05})){f("led-ters","uyari",`${lt} ters tak\u0131l\u0131: uzun bacak (anot) art\u0131 tarafa, k\u0131sa bacak (katot) GND taraf\u0131na gelmeli. LED'e dokunup Ters \xE7evir'i se\xE7.`,{parcalar:[B.id]});continue}let le=hm(N,Xt,B.id),de=hm(N,Be,B.id);if([...A].some(Kt=>le.has(d.bul(Ki(Kt)))||de.has(d.bul(Ki(Kt)))))continue;let ie=[d.bul("k:5V"),d.bul("k:3V3"),...a.map(Kt=>d.bul(Ki(Kt)))],be=[d.bul("k:GND"),...a.map(Kt=>d.bul(Ki(Kt)))],ke=ie.some(Kt=>le.has(Kt)),Ye=be.some(Kt=>de.has(Kt)),fe;!ke&&!Ye?fe=`${lt} devreye ba\u011Fl\u0131 de\u011Fil: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a, katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fmal\u0131.`:ke?Ye?fe=`${lt} yanacak kadar elektrik alm\u0131yor: devrenin yolunu kontrol et.`:fe=`${lt}: katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fm\u0131yor. Direnci ya da kabloyu GND'ye giden eksi raya ba\u011Fla.`:fe=`${lt}: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a ula\u015Fm\u0131yor.`,f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${fe}`,{parcalar:[B.id]})}l.length||f("tamamlanmamis","bilgi","Devrede LED yok: panelden bir LED se\xE7ip breadboard'a yerle\u015Ftir.");let X=null,j=null;if(i.tur==="buton"&&N&&U){let B=m.bul(Ki(o)),lt=d.bul(Ki(o));X=id(U,B),j=id(N,lt);let ct=`${o}. pin`,$t=`${o}. pine`,qt=c.map(Qt=>Qt.id);c.length?w.has(o)?X.bosta&&j.bosta?f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca da ${ct} hi\xE7bir yere ba\u011Flanm\u0131yor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${$t} ba\u011Flanmal\u0131.`,{pin:o,parcalar:qt}):X.bosta?f("cekme-yok","uyari",`${ct} bo\u015Fta kal\u0131yor: butona bas\u0131lmad\u0131\u011F\u0131nda pin ne HIGH ne LOW okur, LED kendi kendine yan\u0131p s\xF6ner. ${ct} ile GND aras\u0131na 10 k\u03A9 \xE7ekme direnci ekle.`,{pin:o,parcalar:qt}):(j.bosta||j.deger===X.deger)&&f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca ${ct} de\u011Fi\u015Fmiyor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${$t} ba\u011Flanmal\u0131.`,{pin:o,parcalar:qt}):f("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${ct} (giri\u015F) devreye ba\u011Fl\u0131 de\u011Fil: butonun baca\u011F\u0131ndan ${$t} kablo \xE7ek.`,{pin:o}):f("tamamlanmamis","uyari","Devre tamamlanmam\u0131\u015F. Devrede buton yok: panelden butonu se\xE7ip kanal\u0131n \xFCst\xFCne yerle\u015Ftir.")}h.sort((B,lt)=>dm[B.seviye]-dm[lt.seviye]);let $=h.some(B=>B.seviye!=="bilgi"),Q=null;return!$&&O.length&&(i.tur==="blink"&&(Q=`Devre do\u011Fru: ${i.pin}. pin LED'i yak\u0131p s\xF6nd\xFCr\xFCyor.`),i.tur==="elle"&&(Q="Devre do\u011Fru: HIGH yapt\u0131\u011F\u0131n pinlerdeki LED'ler yan\u0131yor."),i.tur==="buton"&&X&&j&&X.deger!==j.deger&&(Q=X.deger==="LOW"?"Devre do\u011Fru: butona bas\u0131nca LED yan\u0131yor, b\u0131rak\u0131nca s\xF6n\xFCyor.":"Devre do\u011Fru: \xE7ekme direnci 5V'a ba\u011Fl\u0131; buton b\u0131rak\u0131l\u0131nca LED yan\u0131yor, bas\u0131nca s\xF6n\xFCyor.")),{calisiyor:P,durdu:s?y.length?"kisa-devre":M?"reset":null:"kapali",ledler:I,cikislar:Object.fromEntries(Object.entries(x).map(([B,lt])=>[B,lt>0?"HIGH":"LOW"])),giris:i.tur==="buton"?{pin:Number(o),...E||{deger:"LOW",bosta:!1,gerilim:0},basiliOkur:j?.deger??null,birakikOkur:X?.deger??null}:null,l13:P&&x[13]===5,uyarilar:h,tamam:Q,program:i}}function fm(n){let t=i=>n.includes(i),e=n.filter(i=>!["GND","5V","3V3"].includes(i));return t("5V")&&t("GND")?"5V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor. Ger\xE7ek kartta koruma sigortas\u0131 devreyi keser ve kart kapan\u0131r.":t("3V3")&&t("GND")?"3,3V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor.":t("5V")&&t("3V3")?"5V ile 3,3V do\u011Frudan birbirine ba\u011Fl\u0131: iki farkl\u0131 gerilim \xE7ak\u0131\u015F\u0131yor.":e.length>=2?`${e[0]}. ve ${e[1]}. pin do\u011Frudan birbirine ba\u011Fl\u0131: biri HIGH, \xF6teki LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:t("GND")?`${e[0]}. pin do\u011Frudan GND'ye ba\u011Fl\u0131: pin HIGH olunca elektrik hi\xE7bir par\xE7aya u\u011Framadan akar ve pin bozulabilir.`:t("5V")?`${e[0]}. pin do\u011Frudan 5V'a ba\u011Fl\u0131: pin LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:`${e[0]}. pin do\u011Frudan 3,3V'a ba\u011Fl\u0131: pin HIGH ya da LOW olunca k\u0131sa devre olur.`}function iS(n,t){if(n==="VIN")return"Vin pini, kart USB ile \xE7al\u0131\u015F\u0131rken g\xFC\xE7 vermez. G\xFC\xE7 i\xE7in 5V pinini kullan.";if(n==="NC")return"Bu pin kartta hi\xE7bir yere ba\u011Fl\u0131 de\u011Fil (NC). Kabloyu ba\u015Fka bir pine ta\u015F\u0131.";if(n==="0"||n==="1")return`${ra(n)} bilgisayarla haberle\u015Fmede kullan\u0131l\u0131r; bu programda kullan\u0131lm\u0131yor. 2-13 aras\u0131ndan bir pin se\xE7.`;if(/^\d+$/.test(n)){if(t.tur==="blink")return`${n}. pine kablo ba\u011Fl\u0131 ama program ${t.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor. Kabloyu ${t.pin}. pine ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden ${n}. pini se\xE7.`;if(t.tur==="buton")return`${n}. pin programda kullan\u0131lm\u0131yor: giri\u015F ${t.giris}. pin, \xE7\u0131k\u0131\u015F ${t.cikis}. pin. Kabloyu ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden pini de\u011Fi\u015Ftir.`}return`${ra(n)} pini bu programda kullan\u0131lm\u0131yor. Kabloyu 2-13 aras\u0131ndaki bir pine ta\u015F\u0131.`}var xm={1e3:["1000 milisaniye, yani 1 saniye bekle.","1 saniye daha bekle."],500:["500 milisaniye, yani yar\u0131m saniye bekle.","Yar\u0131m saniye daha bekle."],200:["200 milisaniye, yani 0,2 saniye bekle.","0,2 saniye daha bekle."]};function ym(n,t=[]){let e=[],i=(r,a="")=>(e.push({k:r,t:a}),e.length),s={yuksek:[],dusuk:[]};if(n.tur==="buton"){let r=n.giris,a=n.cikis;i(`const int buton = ${r};`,`Butonun ba\u011Fl\u0131 oldu\u011Fu pine ad verelim: buton = ${r} (const, bu de\u011Fer de\u011Fi\u015Fmez demek).`),i(`const int led = ${a};`,`LED'in ba\u011Fl\u0131 oldu\u011Fu pine de ad verelim: led = ${a}.`),i(""),i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r."),i("pinMode(buton, INPUT);",`Buton pinini (${r}) giri\u015F yap: bu pin bilgi okuyacak.`),i("pinMode(led, OUTPUT);",`LED pinini (${a}) \xE7\u0131k\u0131\u015F yap: bu pin elektrik verecek.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: durmadan d\xF6ner.");let o=i("if (digitalRead(buton) == HIGH) {","E\u011Fer buton pini HIGH okunuyorsa, yani butona bas\u0131l\u0131ysa:"),l=i("digitalWrite(led, HIGH);","LED'i yak."),c=i("} else {","De\u011Filse, yani butona bas\u0131l\u0131 de\u011Filse:"),h=i("digitalWrite(led, LOW);","LED'i s\xF6nd\xFCr.");i("}","Karar b\xF6l\xFCm\xFC bitti."),i("}","Tekrar b\xF6l\xFCm\xFC bitti; ba\u015Fa d\xF6n ve butonu yeniden oku."),s.yuksek=[o,l],s.dusuk=[o,c,h]}else if(n.tur==="elle"){let r=tr(t),a=Ji.filter(o=>r.has(String(o))||n.seviyeler?.[o]).reverse();i("void setup() {",a.length?"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r.":"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: hen\xFCz kablo tak\u0131l\u0131 ya da HIGH yap\u0131lm\u0131\u015F pin yok.");for(let o of a){i(`pinMode(${o}, OUTPUT);`,`${o} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap.`);let l=n.seviyeler?.[o],c=i(`digitalWrite(${o}, ${l?"HIGH":"LOW"});`,l?`${o}. pine elektrik ver (5 volt).`:`${o}. pinin elektri\u011Fini kes (0 volt).`);s.yuksek.push(c),s.dusuk.push(c)}i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: burada komut yok, pinler haz\u0131rl\u0131kta ayarland\u0131\u011F\u0131 gibi kal\u0131r."),i("}","Tekrar b\xF6l\xFCm\xFC bitti.")}else{let r=n.pin,[a,o]=xm[n.bekleme]||xm[1e3];i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar kart a\xE7\u0131l\u0131nca yaln\u0131z bir kez \xE7al\u0131\u015F\u0131r."),i(`pinMode(${r}, OUTPUT);`,`${r} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap: bu pin art\u0131k elektrik verebilir.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar s\u0131rayla \xE7al\u0131\u015F\u0131r, bitince en ba\u015Fa d\xF6ner."),s.yuksek.push(i(`digitalWrite(${r}, HIGH);`,`${r}. pine elektrik ver (5 volt): LED yanar.`)),s.yuksek.push(i(`delay(${n.bekleme});`,a)),s.dusuk.push(i(`digitalWrite(${r}, LOW);`,`${r}. pinin elektri\u011Fini kes (0 volt): LED s\xF6ner.`)),s.dusuk.push(i(`delay(${n.bekleme});`,o)),i("}","Tekrar b\xF6l\xFCm\xFC bitti; en ba\u015Fa d\xF6n ve yeniden ba\u015Fla.")}return{satirlar:e,vurgu:s}}function vm(n){let t=0;return n.map(({k:e})=>{let i=e.trim();i.startsWith("}")&&(t=Math.max(0,t-1));let s="  ".repeat(t)+i;return i.endsWith("{")&&t++,s})}var bm="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";function Sm(n){if(!n)return;let t=()=>{n.classList.toggle("ayar-acik",!!n.querySelector(".ayarlar:not([hidden])")),n.classList.toggle("erisim-acik",!!n.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function Mm(n){if(!(!n||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;n.classList.toggle("dar-640",e<=640),n.classList.toggle("dar-380",e<=380)}).observe(n)}}function wm(n,t){if(!n)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){n.hidden=!0;return}n.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}var oe=document.documentElement,ot=(n,t=document)=>t.querySelector(n),dn=(n,t=document)=>[...t.querySelectorAll(n)],ei=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},yi=n=>{try{return localStorage.getItem(n)}catch{return null}},Em=0,Ve=n=>{let t=ot("#duyuru");t&&(clearTimeout(Em),t.textContent="",Em=setTimeout(()=>{t.textContent=n},40))},jn=(n="")=>String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),sS=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1),_d=(n,t=1)=>n.toFixed(t).replace(".",","),zn=(()=>{try{return JSON.parse(ot("#ozgur-ikon")?.textContent||"{}")}catch{return{}}})(),pu={hata:"Hata",uyari:"Uyar\u0131",bilgi:"Bilgi"};oe.dataset.js="1";var Jt=null,uu=null,nr=null,Am=["5","6","7","8"],hu=ot("#sinif-penceresi");function rS(n,t=!0){oe.dataset.sinif=n,t&&ei("bote-3d-sinif",n);let e=new URL(location.href);e.searchParams.set("sinif",n),history.replaceState(null,"",e);for(let i of dn("[data-sinif-yaz]"))i.textContent=`${n}. s\u0131n\u0131f`;for(let i of dn("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===n));da(!0)}{let n=new URLSearchParams(location.search).get("sinif"),t=yi("bote-3d-sinif"),e=Am.includes(n)?n:Am.includes(t)?t:null;if(e){oe.dataset.sinif=e;for(let i of dn("[data-sinif-yaz]"))i.textContent=`${e}. s\u0131n\u0131f`;for(let i of dn("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===e))}}document.addEventListener("click",n=>{let t=n.target.closest("[data-sinif-sec]");t&&(rS(t.dataset.sinifSec),hu?.open&&(hu.close(),ot("#sinif-dugme")?.focus()),Ve(`${t.dataset.sinifSec}. s\u0131n\u0131f se\xE7ildi`))});ot("#sinif-dugme")?.addEventListener("click",()=>hu?.showModal?.());var Um=new URLSearchParams(location.search).get("mod")||yi("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),Fm=window.matchMedia(bm),Om=Um;function Ad(n,t){Om=n,oe.dataset.mod=n==="tahta"&&Fm.matches?"normal":n,ot("#tahta-dugme")?.setAttribute("aria-pressed",String(oe.dataset.mod==="tahta")),t&&ei("bote-3d-mod",n),Bd()}Ad(Um,!1);Fm.addEventListener?.("change",()=>Ad(Om,!1));ot("#tahta-dugme")?.addEventListener("click",()=>Ad(oe.dataset.mod==="tahta"?"normal":"tahta",!0));var Bm=()=>oe.dataset.theme==="dark"?"#17121f":"#e9e5f1";ot("#tema-dugme")?.addEventListener("click",()=>{let n=oe.dataset.theme!=="dark";n?oe.dataset.theme="dark":delete oe.dataset.theme,ei("bote-theme",n?"dark":"light"),Jt?.arkaPlan(Bm())});wm(ot("#tam-ekran"),oe);var mu=ot("#ogretmen-dugme");function Td(n){oe.dataset.ek=n?"acik":"",mu?.setAttribute("aria-expanded",String(n)),n&&ot("#ogretmen")?.focus()}mu?.addEventListener("click",()=>Td(oe.dataset.ek!=="acik"));ot("#ogretmen-kapat")?.addEventListener("click",()=>{Td(!1),mu?.focus()});var ni=ot(".ders"),sr=ot(".kart-alani"),Ps=ot(".panel-kenar"),xd=ot("#panel-dugme");Sm(sr);Mm(ot(".sahne-arac"));var Dn=window.matchMedia("(orientation: portrait), (max-width: 820px)");function Po(n,t=!0){oe.dataset.panel=n?"acik":"kapali",xd?.setAttribute("aria-expanded",String(n)),xd?.setAttribute("aria-label",n?"Paneli kapat":"Paneli a\xE7"),sr.inert=!n&&!Dn.matches,t&&(ei("bote-3d-panel",n?"acik":"kapali"),Ve(n?"Panel a\xE7\u0131ld\u0131":"Panel kapand\u0131"))}Po(yi("bote-3d-panel")!=="kapali",!1);xd?.addEventListener("click",()=>Po(oe.dataset.panel!=="acik"));var Lo=n=>{n?ni.style.setProperty("--panel-w",`${Math.round(n)}px`):ni.style.removeProperty("--panel-w")},yd=n=>Math.max(300,Math.min(ni.clientWidth*.62,n));Lo(Number(yi("bote-3d-panel-w"))||0);var zm=()=>ei("bote-3d-panel-w",String(parseInt(ni.style.getPropertyValue("--panel-w"),10)||"")),ir=null;Ps?.addEventListener("pointerdown",n=>{n.target.closest("#panel-dugme")||oe.dataset.panel!=="acik"||Dn.matches||(Ps.setPointerCapture(n.pointerId),ir={x:n.clientX,w:sr.getBoundingClientRect().width,once:ni.style.getPropertyValue("--panel-w")},oe.dataset.suruklenen="1")});var aS=110;Ps?.addEventListener("pointermove",n=>{if(!ir)return;let t=ir.w+(oe.dataset.panelYan==="sol"?1:-1)*(n.clientX-ir.x);t<yd(0)-aS?oe.dataset.kapanacak="1":delete oe.dataset.kapanacak,Lo(yd(t))});var Vm=n=>{if(!ir)return;let t=ir;if(ir=null,delete oe.dataset.suruklenen,oe.dataset.kapanacak&&(delete oe.dataset.kapanacak,t.once?ni.style.setProperty("--panel-w",t.once):ni.style.removeProperty("--panel-w"),n?.type==="pointerup")){Po(!1);return}zm()};Ps?.addEventListener("pointerup",Vm);Ps?.addEventListener("pointercancel",Vm);Ps?.addEventListener("dblclick",n=>{n.target.closest("#panel-dugme")||(Lo(0),ei("bote-3d-panel-w",""))});Ps?.addEventListener("keydown",n=>{if(n.target!==Ps||!["ArrowLeft","ArrowRight"].includes(n.key))return;n.preventDefault(),n.stopPropagation();let t=n.key==="ArrowLeft"==(oe.dataset.panelYan!=="sol");Lo(yd(sr.getBoundingClientRect().width+(t?40:-40))),zm()});function Gm(n,t){oe.dataset.panelYan=n;for(let e of dn("[data-yan]"))e.setAttribute("aria-pressed",String(e.dataset.yan===n));t&&ei("bote-3d-panel-yan",n)}Gm(yi("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);var Io=ot("#ayarlar"),Hm=ot("#ayar-dugme"),Wm=n=>{Io.hidden=!n,Hm.setAttribute("aria-expanded",String(n)),n&&Io.querySelector("button")?.focus()};Hm?.addEventListener("click",n=>{n.stopPropagation(),Wm(Io.hidden)});document.addEventListener("click",n=>{Io&&!Io.hidden&&!n.target.closest("#ayarlar, #ayar-dugme")&&Wm(!1)});function Xm(n,t){oe.dataset.panelBoyut=n;for(let e of dn("[data-panel-boyut]:not(html)"))e.setAttribute("aria-pressed",String(e.dataset.panelBoyut===n));t&&(Lo(0),ei("bote-3d-panel-w",""),ei("bote-3d-panel-boyut",n))}Xm(["dar","orta","genis"].includes(yi("bote-3d-panel-boyut"))?yi("bote-3d-panel-boyut"):"orta",!1);var Ao=[.9,1,1.15,1.3,1.5],ha=Math.max(0,Ao.indexOf(Number(yi("bote-3d-yazi"))||1));function Ym(n,t){ha=Math.max(0,Math.min(Ao.length-1,n)),oe.style.setProperty("--yazi",String(Ao[ha]));let e=ot("#yazi-deger");e&&(e.textContent=`%${Math.round(Ao[ha]*100)}`),t&&ei("bote-3d-yazi",String(Ao[ha]))}Ym(ha,!1);document.addEventListener("click",n=>{let t=n.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");t&&(t.dataset.panelBoyut&&Xm(t.dataset.panelBoyut,!0),t.dataset.yazi&&Ym(ha+Number(t.dataset.yazi),!0),t.dataset.yan&&Gm(t.dataset.yan,!0))});var Qn={kisa:()=>(ot(".tutamac")?.offsetHeight||0)+(ot(".kart-ust")?.offsetHeight||0)+(ot(".kart-alt")?.offsetHeight||0)+2,yarim:()=>ni.clientHeight*.5,tam:()=>ni.clientHeight*.92},$m=88,qm=()=>Qn.yarim()-Qn.kisa()+2>=$m,oS=n=>n==="yarim"&&!qm()?"kisa":n,ii=["kisa","yarim","tam"].includes(yi("bote-3d-sayfa"))?yi("bote-3d-sayfa"):"yarim";function Oi(n,t=!0,e=!1){if(!Dn.matches){delete oe.dataset.sayfa,ni.style.removeProperty("--sayfa-h"),Jt?.gorunurAlan(0,!0),Po(oe.dataset.panel!=="kapali",!1);return}ii=n;let i=oS(n);oe.dataset.sayfa=i,sr.inert=!1;let s=Math.round(Qn[i]());e&&(oe.dataset.suruklenen="1"),ni.style.setProperty("--sayfa-h",`${s}px`),e&&requestAnimationFrame(()=>delete oe.dataset.suruklenen),Jt?.gorunurAlan(s,e),t&&ei("bote-3d-sayfa",n)}var Jn=null;for(let n of[ot(".tutamac"),ot(".kart-ust")].filter(Boolean)){n.addEventListener("pointerdown",e=>{if(!Dn.matches||e.target.closest("button"))return;n.setPointerCapture(e.pointerId);let i=performance.now();Jn={y:e.clientY,h:sr.getBoundingClientRect().height,sonY:e.clientY,sonT:i,hiz:0},oe.dataset.suruklenen="1"}),n.addEventListener("pointermove",e=>{if(!Jn)return;let i=performance.now();ni.style.setProperty("--sayfa-h",`${Math.round(Math.max(Qn.kisa(),Math.min(Qn.tam(),Jn.h+(Jn.y-e.clientY))))}px`),Jn.hiz=(Jn.sonY-e.clientY)/Math.max(1,i-Jn.sonT),Jn.sonY=e.clientY,Jn.sonT=i});let t=e=>{if(!Jn)return;let i=Jn;Jn=null,delete oe.dataset.suruklenen;let s=sr.getBoundingClientRect().height,r=Math.abs(e.clientY-i.y)>6,a=qm(),o=a?"yarim":"tam",l;r?i.hiz>.45?l=s<Qn.yarim()?o:"tam":i.hiz<-.45?l=a&&s>Qn.yarim()?"yarim":"kisa":l=(a?["kisa","yarim","tam"]:["kisa","tam"]).sort((c,h)=>Math.abs(Qn[c]()-s)-Math.abs(Qn[h]()-s))[0]:l=oe.dataset.sayfa==="kisa"?o:"kisa",Oi(l),Ve({kisa:"Panel k\xFC\xE7\xFCld\xFC",yarim:"Panel yar\u0131m ekran",tam:"Panel tam ekran"}[l])};n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t)}Dn.addEventListener?.("change",()=>Oi(ii,!1,!0));var Tm=0;window.addEventListener("resize",()=>{clearTimeout(Tm),Tm=setTimeout(()=>{Dn.matches&&Oi(ii,!1,!0)},120)});Oi(ii,!1,!0);var ou=null,lS=()=>{Dn.matches&&ii!=="kisa"&&(ou=ii,Oi("kisa",!1))},Zm=()=>{ou&&Dn.matches&&Oi(ou,!1),ou=null},ua=["kur","program","durum"];function cS(){if(!Dn.matches)return;let n=Qn.yarim()-Qn.kisa()+2>=$m?"yarim":"tam";(ii==="kisa"||ii==="yarim"&&n==="tam")&&Oi(n,n==="yarim")}function Rd(n,t=!1){for(let e of ua){let i=ot(`#sekme-${e}`),s=ot(`#bolum-${e}`),r=e===n;i.setAttribute("aria-selected",String(r)),i.tabIndex=r?0:-1,s.hidden=!r}t&&ot(`#sekme-${n}`).focus(),ot(".kart-govde")?.scrollTo(0,0),cS()}ot(".sekmeler").addEventListener("click",n=>{let t=n.target.closest("[role=tab]");t&&Rd(t.id.slice(6))});ot(".sekmeler").addEventListener("keydown",n=>{let t=ua.indexOf(document.activeElement?.id?.slice(6));if(t<0)return;let e={ArrowRight:t+1,ArrowLeft:t-1,Home:0,End:ua.length-1}[n.key];e!==void 0&&(n.preventDefault(),n.stopPropagation(),Rd(ua[(e+ua.length)%ua.length],!0))});var Km="bote-3d-ozgur-devre",rr="turuncu";function uS(){try{let n=JSON.parse(yi(Km)||"null");if(n&&n.surum===1)return tu[n.kabloRengi]&&(rr=n.kabloRengi),la(n)}catch{}return la(md["ders-2"])}var zt=uS(),si=!1,Ro=!0,Jm=!1,ve=null,Qi=null,Ls=new Set,Tt=null,Ui=null,gu=[],er=[],Cd=()=>JSON.stringify({parcalar:zt.parcalar,program:zt.program}),Rm=0;function Id(){clearTimeout(Rm),Rm=setTimeout(()=>{let n=Tt?.tasinan?JSON.parse(Tt.onceki):zt;ei(Km,JSON.stringify({surum:1,parcalar:n.parcalar,program:n.program,kabloRengi:rr}))},300)}function pa(n=Cd()){er[er.length-1]!==n&&(er.push(n),er.length>60&&er.shift(),ot("#geri-al").disabled=!1)}function jm(){Tt&&ar(!0);let n=er.pop();ot("#geri-al").disabled=!er.length,n&&(zt=la(JSON.parse(n)),ns(!1),Ds(),Ve("Son de\u011Fi\u015Fiklik geri al\u0131nd\u0131"))}var or=n=>zt.parcalar.find(t=>t.id===n);function hS(n){let t={led:"led",direnc:"r",buton:"buton",kablo:"k"}[n],e=new Set(zt.parcalar.map(s=>s.id)),i=1;for(;e.has(`${t}-${i}`);)i++;return`${t}-${i}`}var Ln=ot("#sahne"),lu=ot(".sahne-alani"),_i=new Map,Qm=[],xi=null,Ni=null,ts=null,Is=null,du=2.54,an=(n,t)=>{let e=Je(n);return e?e.tur==="delik"?js(e.sutun,e.satir,t):e.tur==="ray"?Hp(e.ray.slice(0,-1),e.ray.slice(-1),e.sutun,t):Zh(e.pin):null},wo=n=>(Je(n)?.tur==="pin"?gi:Ke)+.09,dS=jc.map(n=>({id:`p:${n}`,v:Zh(n)})),iu=n=>So.map(t=>`r:${n}:${t}`),fS=n=>Array.from({length:30},(t,e)=>`h:${e+1}:${n}`),cu=[iu("uzak+"),iu("uzak-"),...[..."jihgf",..."edcba"].map(fS),iu("yakin-"),iu("yakin+")],To=[...cu,cd.map(n=>`p:${n}`),[...ud,...hd].map(n=>`p:${n}`)],pS=n=>{let t=Je(n[0]);return t.tur==="ray"?`${t.ray.startsWith("yakin")?"alt":"\xFCst"} ${t.ray.endsWith("+")?"+":"\u2212"}`:t.satir};function mS(){if(Jt=Op(Ln,{arkaPlan:Bm(),olay:n=>{n==="baglam-kaybi"&&lu.classList.add("baglam-kaybi"),n==="baglam-geri"&&lu.classList.remove("baglam-kaybi")}}),!Jt){oe.dataset.webgl="yok";for(let n of dn("[data-arac]"))n.disabled=!0;fa(!0);return}Kp(Jt.renderer.capabilities.getMaxAnisotropy()),uu=Xp(Jt.hedefler),Jt.scene.add(uu.grup),nr=Yp(Jt.hedefler),Jt.scene.add(nr.grup);for(let n=0;n<3;n++){let t=new ys(16777215,0,42,2);Jt.scene.add(t),Qm.push(t)}gS(),tg(),_S(),Dn.matches&&Jt.gorunurAlan(Math.round(Qn[ii]()),!0),Jt.kameraGit(Wc.genel,!0),wS(),Fi(),es(),requestAnimationFrame(()=>lu.classList.add("hazir")),dg&&Jt.kareGuncelleyici(()=>(sg++,!1))}ot("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function gS(){let n=e=>(e.rotateX(-Math.PI/2),e),t=(e,i=.96)=>new yn({color:e,transparent:!0,opacity:i,depthWrite:!1});xi=new Ot(n(new Hr(1.2,1.9,32)),t(9133302)),xi.renderOrder=4,xi.visible=!1,Ni=new Ot(n(new Ws(1.15,24)),t(8141549)),Ni.renderOrder=4,Ni.visible=!1,ts=new Ai(new Fe(2.1,.05,2.1),t(1483594,.9),4),ts.count=0,ts.frustumCulled=!1,Is=new Ai(n(new Hr(.95,1.55,24)),t(8141549),24),Is.count=0,Is.frustumCulled=!1,Is.renderOrder=4,Jt.scene.add(xi,Ni,ts,Is)}function _S(){let n=Qh("kirmizi",new C(-150,Ke,60),new C(-147.46,Ke,60));n.userData.ac(1),Jt.scene.add(n);let t=[xi,Ni].map(e=>e.visible);xi.visible=Ni.visible=!0;try{Jt.renderer.compile(Jt.scene,Jt.camera)}catch{}Jt.scene.remove(n),Xc(n),[xi.visible,Ni.visible]=t}var xS=n=>JSON.stringify([n.tur,n.renk,n.deger,n.anot,n.katot,n.a,n.b,n.sutun,n.bas,n.son]);function yS(n){if(n.tur==="led")return Qh(n.renk,an(n.anot),an(n.katot));if(n.tur==="direnc")return nm(n.deger,an(n.a),an(n.b));if(n.tur==="buton"){let t=js(n.sutun,"e"),e=js(n.sutun+2,"e");return im(new C((t.x+e.x)/2,Ke,Pt.z))}return sm(an(n.bas),an(n.son),n.renk)}function tg(){if(!Jt)return;let n=new Set,t=!1;for(let e of zt.parcalar){n.add(e.id);let i=xS(e),s=_i.get(e.id);if(s&&s.anahtar===i)continue;s&&(Jt.scene.remove(s.nesne),Xc(s.nesne));let r=yS(e);r.userData.parcaId=e.id,r.updateMatrixWorld(!0),Jt.scene.add(r),_i.set(e.id,{nesne:r,anahtar:i}),t=!0}for(let[e,i]of _i)n.has(e)||(Jt.scene.remove(i.nesne),Xc(i.nesne),_i.delete(e),t=!0);for(let e of Ls)_i.get(e)?.nesne.userData.bas?.(!0);t&&Jt.golgeYenile()}function eg(n){let t=_i.get(n),e=or(n);return!t||!e?null:e.tur==="kablo"?t.nesne.userData.egri.getPoint(.5).add(new C(0,2.5,0)):t.nesne.localToWorld((t.nesne.userData.tepe||new C(0,6,0)).clone().add(new C(0,2,0)))}var fu=new Ys,Cm=new at,su=new wn(new C(0,1,0),0),Eo=new C;function ng(n,t){let e=Ln.getBoundingClientRect();Cm.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),fu.setFromCamera(Cm,Jt.camera)}function Co(n){let t=n.clone().project(Jt.camera),e=Ln.getBoundingClientRect();return{x:e.left+(t.x+1)/2*e.width,y:e.top+(1-t.y)/2*e.height}}function ig(n){let t=Co(n),e=Co(n.clone().add(new C(du,0,0))),i=Co(n.clone().add(new C(0,0,du)));return Math.min(Math.hypot(e.x-t.x,e.y-t.y),Math.hypot(i.x-t.x,i.y-t.y))}var vS=js(1,"a").x,bS=[...Object.entries(od).map(([n,t])=>({tur:"satir",r:n,z:t})),...Object.entries(ld).map(([n,t])=>({tur:"ray",r:n,z:t}))];function SS(n){let t=(n.x-vS)/du+1,e=(n.z-Pt.z)/du,i=null,s=.55;for(let a of bS){let o=Math.abs(e-a.z);o<s&&(s=o,i=a)}if(!i)return null;let r=Math.round(t);return Math.abs(t-r)>.55?null:i.tur==="satir"?r>=1&&r<=30?`h:${r}:${i.r}`:null:So.includes(r)?`r:${i.r}:${r}`:null}function vd(n,t){if(ng(n,t),su.constant=-gi,fu.ray.intersectPlane(su,Eo)){let e=null,i=1.9;for(let s of dS){let r=Math.hypot(s.v.x-Eo.x,s.v.z-Eo.z);r<i&&(i=r,e=s.id)}if(e)return e}return su.constant=-Ke,fu.ray.intersectPlane(su,Eo)?SS(Eo):null}function MS(n,t){ng(n,t);let e=[];for(let r of _i.values())r.nesne.userData.hedef&&e.push(r.nesne.userData.hedef);let s=fu.intersectObjects(e,!1)[0]?.object;for(;s&&!s.userData.parcaId;)s=s.parent;return s?or(s.userData.parcaId):null}var De=null,ti=null,sg=0;function wS(){let n=new Set,t=!1,e=null,i=null,s=0;Ln.addEventListener("pointerdown",a=>{n.size||(t=!1),n.add(a.pointerId),n.size>1&&(t=!0),e={x:a.clientX,y:a.clientY,t:performance.now(),tur:a.pointerType}});let r=a=>{if(n.delete(a.pointerId),!e||t){n.size||(e=null);return}let o=e;e=null,!(a.type!=="pointerup"||Math.hypot(a.clientX-o.x,a.clientY-o.y)>9||performance.now()-o.t>600)&&ES(a.clientX,a.clientY,o.tur)};Ln.addEventListener("pointerup",r),Ln.addEventListener("pointercancel",r),Ln.addEventListener("pointermove",a=>{a.pointerType==="mouse"&&(i={x:a.clientX,y:a.clientY,tus:a.buttons},s||(s=requestAnimationFrame(()=>{s=0,i&&!i.tus&&Vn(vd(i.x,i.y),"fare")})))}),Ln.addEventListener("pointerleave",()=>{i=null,ti==="fare"&&Vn(null,null)}),Ln.addEventListener("focus",()=>{(!De||ti!=="klavye")&&Vn(De||"h:15:e","klavye",!0)}),Ln.addEventListener("blur",()=>{ti==="klavye"&&Vn(null,null)}),Ln.addEventListener("keydown",AS)}function ES(n,t,e){if(!Jt)return;if(cr(),Tt){let r=vd(n,t);if(!r){rg("Burada delik yok: breadboard'daki bir deli\u011Fe ya da Arduino'nun bir pinine dokun");return}if(ig(an(r))<(e==="mouse"?7:26)){CS(r);return}Vn(r,e==="mouse"?"fare":"dokunma"),Dd(r);return}let i=MS(n,t);if(i){if(i.tur==="buton"&&si&&zt.program.tur==="buton"){LS(i.id);return}ma(i.id);return}ns();let s=vd(n,t);Vn(s,s?"dokunma":null),s&&Ve(`${He(s,!0)}: ${oa(s)} birbirine ba\u011Fl\u0131`)}function Vn(n,t,e=!1){n===De&&t===ti&&!e||(De=n,ti=n?t:null,Ln&&(Ln.style.cursor=n?"pointer":Tt?"crosshair":""),es())}function AS(n){if(!Jt)return;let t=n.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(t)){n.preventDefault();let e=De||"h:15:e",i=To.findIndex(o=>o.includes(e));i<0&&(i=8);let s=To[i],r=s.indexOf(e),a=e;if(t==="ArrowLeft"&&(a=s[Math.max(0,r-1)]),t==="ArrowRight"&&(a=s[Math.min(s.length-1,r+1)]),t==="Home"&&(a=s[0]),t==="End"&&(a=s[s.length-1]),t==="ArrowUp"||t==="ArrowDown"){let o=To[Math.max(0,Math.min(To.length-1,i+(t==="ArrowUp"?-1:1)))],l=an(e).x;a=o.reduce((c,h)=>Math.abs(an(h).x-l)<Math.abs(an(c).x-l)?h:c,o[0])}Vn(a,"klavye"),Ve(TS(a));return}if(t==="Enter"||t===" "){n.preventDefault();let e=De||"h:15:e";if(Tt){Dd(e);return}let i=nu(zt.parcalar).get(e);if(i){ma(i);return}Vn(e,"klavye",!0),Ve(`${He(e,!0)}: ${oa(e)} birbirine ba\u011Fl\u0131`);return}(t==="Delete"||t==="Backspace")&&Ui&&!Tt&&(n.preventDefault(),kd(Ui))}function TS(n){let t=He(n,!0),e=nu(zt.parcalar).get(n);if(e&&(t+=`, burada ${ki(or(e))}`),Tt){let i=Mo(zt.parcalar,Tt.tur,Tt.ilk,n);i.gecerli||(t+=`. Olmaz: ${i.neden}`)}return t}document.addEventListener("keydown",n=>{if(!(n.target.closest?.("input[type=text], textarea")||hu?.open)){if((n.ctrlKey||n.metaKey)&&!n.shiftKey&&!n.altKey&&(n.key==="z"||n.key==="Z")){n.preventDefault(),jm();return}if(n.key==="Escape"){if(oe.dataset.ek==="acik"){Td(!1),mu?.focus();return}if(!ot("#secici").hidden){cr(),Ln.focus({preventScroll:!0});return}if(Tt){ar(!0);return}Ui&&ns()}}});var ru=new me,gd=Object.assign(document.createElement("div"),{className:"imlec-etiket"}),Im=Object.assign(document.createElement("div"),{className:"imlec-etiket ilk"}),bd=new Map;function es(){if(!Jt)return;let n=[],t=!0,e="";if(De){if(Tt){let o=Mo(zt.parcalar,Tt.tur,Tt.ilk,De);t=o.gecerli,e=o.neden||""}xi.position.copy(an(De)).setY(wo(De)),xi.material.color.setHex(t?9133302:14427686),xi.visible=!0;let r=gm(De);if(Je(De).tur==="pin"){nr.grupGoster([]);let o=r.filter(l=>l!==De).slice(0,4);ts.count=o.length,o.forEach((l,c)=>{let h=an(l);ru.makeTranslation(h.x,gi+.06,h.z),ts.setMatrixAt(c,ru)}),ts.instanceMatrix.needsUpdate=!0}else ts.count=0,nr.grupGoster(r.map(o=>an(o)));let a;Tt?a=t?He(De,!0):`${He(De)}: ${e}`:a=Je(De).tur==="delik"?`${He(De)} \xB7 ${oa(De)}`:oa(De),gd.textContent=a,gd.classList.toggle("gecersiz",!t),n.push({nokta:an(De).setY(wo(De)),el:gd})}else xi.visible=!1,ts.count=0,nr.grupGoster([]);Tt?.ilk?(Ni.position.copy(an(Tt.ilk)).setY(wo(Tt.ilk)+.01),Ni.visible=!0,Im.textContent=`${Tt.tur==="led"?"Anot":"1. u\xE7"}: ${He(Tt.ilk)}`,Tt.ilk!==De&&n.push({nokta:an(Tt.ilk).setY(wo(Tt.ilk)),el:Im})):Ni.visible=!1;let s=[...new Set([Ui,...gu].filter(Boolean))].map(or).filter(Boolean).flatMap(r=>Qs(r)).slice(0,24);Is.count=s.length,s.forEach((r,a)=>{let o=an(r);ru.makeTranslation(o.x,wo(r)+.02,o.z),Is.setMatrixAt(a,ru)}),Is.instanceMatrix.needsUpdate=!0;for(let[r,a]of bd){let o=eg(r);o&&n.push({nokta:o,el:a})}Jt.isaretKoy(n)}function Sd(){let n=new Map;for(let e of ve.uyarilar)if(e.seviye!=="bilgi")for(let i of e.parcalar)(!n.has(i)||e.seviye==="hata"&&n.get(i).seviye!=="hata")&&n.set(i,e);let t=JSON.stringify([...n].map(([e,i])=>[e,i.seviye,i.metin]));if(t===Sd.imza)return!1;Sd.imza=t,bd.clear();for(let[e,i]of n){let s=document.createElement("button");s.type="button",s.tabIndex=-1,s.className=`rozet-isaret ${i.seviye}`,s.innerHTML=`<span>${zn[i.seviye]||""}</span>`,s.setAttribute("aria-label",`${pu[i.seviye]}: ${i.metin}`),s.title=i.metin,s.addEventListener("click",r=>{r.stopPropagation(),ma(e),hg()}),bd.set(e,s)}return!0}var RS=n=>n.tur==="led"?`${sS(aa[n.renk].ad)} LED`:n.tur==="direnc"?`${Qc[n.deger]} diren\xE7`:n.tur==="buton"?"Buton":`${tu[n.renk]} kablo`;function Pd(){if(!Tt)return"";let n=Tt.tasinan?`${ki(Tt.tasinan.parca)} ta\u015F\u0131n\u0131yor. `:`${RS(Tt)}: `;return Tt.tur==="buton"?`${n}orta kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131nda bir deli\u011Fe dokun; buton kanal\u0131n \xFCst\xFCne oturur.`:Tt.tur==="led"?Tt.ilk?"\u015Eimdi k\u0131sa baca\u011F\u0131n (katot, eksi) deli\u011Fine dokun: anottan en \xE7ok 4 ad\u0131m \xF6tede.":`${n}\xF6nce uzun baca\u011F\u0131n (anot, art\u0131) deli\u011Fine dokun.`:Tt.tur==="direnc"?Tt.ilk?"\u015Eimdi ikinci baca\u011F\u0131n deli\u011Fine dokun: ilk bacaktan 2 ile 6 ad\u0131m \xF6tede.":`${n}birinci baca\u011F\u0131n deli\u011Fine dokun.`:Tt.ilk?"\u015Eimdi kablonun \xF6b\xFCr ucunun tak\u0131laca\u011F\u0131 pine ya da deli\u011Fe dokun.":`${n}kablonun ba\u015Flayaca\u011F\u0131 pine ya da deli\u011Fe dokun.`}var Pm=0;function lr(n=""){let t=ot("#yonerge");t.hidden=!Tt,Tt&&(clearTimeout(Pm),t.classList.toggle("gecersiz",!!n),ot("#yonerge-ikon").innerHTML=n?zn.hata||"":zn.sec||"",ot("#yonerge-metin").textContent=n?`Olmaz: ${n}`:Pd(),n&&(Pm=setTimeout(()=>lr(),3200)))}function rg(n){lr(n),Ve(`Olmaz: ${n}`)}function ag(n,t={}){Jt&&(Tt&&ar(!0),ns(!1),cr(),Tt={tur:n,renk:t.renk,deger:t.deger,ilk:null,tasinan:t.tasinan||null,onceki:t.onceki||Cd()},Ld(),lS(),lr(),Vn(ti==="fare"||ti==="klavye"?De:null,ti,!0),Ve(Pd()))}function ar(n){if(!Tt)return;let t=Tt.tasinan;n&&t&&(zt.parcalar.splice(Math.min(t.indeks,zt.parcalar.length),0,t.parca),Ds(!1)),Tt=null,cr(),Ld(),lr(),Zm(),Vn(ti==="dokunma"?null:De,ti,!0),n&&Ve(t?"Ta\u015F\u0131ma iptal edildi; par\xE7a eski yerinde":"Yerle\u015Ftirme iptal edildi")}function Ld(){for(let n of dn("[data-arac]")){let t=n.dataset.deger||"",e=Tt&&!Tt.tasinan&&n.dataset.arac===Tt.tur&&(Tt.tur==="led"?t===Tt.renk:Tt.tur==="direnc"?Number(t)===Tt.deger:!0);n.setAttribute("aria-pressed",String(!!e))}}function Dd(n){if(!Tt)return;let t=Mo(zt.parcalar,Tt.tur,Tt.ilk,n);if(!t.gecerli){rg(t.neden),es();return}if(Tt.tur==="buton"){Lm({tur:"buton",sutun:t.sutun});return}if(!Tt.ilk){Tt.ilk=n,lr(),es(),Ve(`${He(n,!0)} se\xE7ildi. ${Pd()}`);return}let e=Tt;Lm(e.tur==="led"?{tur:"led",renk:e.renk,anot:e.ilk,katot:n}:e.tur==="direnc"?{tur:"direnc",deger:e.deger,a:e.ilk,b:n}:{tur:"kablo",renk:e.renk,bas:e.ilk,son:n})}function Lm(n){let t=Tt.tasinan,e=Tt.onceki,i={id:t?t.parca.id:hS(n.tur),...n};t?zt.parcalar.splice(Math.min(t.indeks,zt.parcalar.length),0,i):zt.parcalar.push(i),pa(e),Tt=null,cr(),Ld(),lr(),Zm(),Vn(ti==="dokunma"?null:De,ti,!0),Ds();let s=ve.uyarilar.find(r=>r.seviye!=="bilgi"&&r.parcalar.includes(i.id));Ve(`${ki(i)} ${t?"ta\u015F\u0131nd\u0131":"tak\u0131ld\u0131"}.${s?` ${pu[s.seviye]}: ${s.metin}`:""}`)}function CS(n){let t=Je(n),e=ot("#secici-izgara"),i=(r,a)=>{let o=Mo(zt.parcalar,Tt.tur,Tt.ilk,r),l=Je(r),c=o.gecerli?"":/dolu|kablo var/.test(o.neden)?"dolu":/aynı yere/.test(o.neden)?"ayn\u0131":o.mesafe!==void 0?o.mesafe<2?"yak\u0131n":"uzak":"olmaz",h=l.tur==="pin"?ra(l.pin).replace(". pin","").replace(" (RX)","").replace(" (TX)","").replace("bo\u015F pin (NC)","NC"):l.tur==="delik"?`${l.sutun}${l.satir}`:String(l.sutun);return`<button type="button" data-secici="${r}"${o.gecerli?"":" disabled"}${a?' class="yakin-hedef"':""} aria-label="${jn(He(r,!0)+(o.gecerli?"":`: ${o.neden}`))}">${jn(h)}${c?`<small>${c}</small>`:""}</button>`},s="";if(t.tur==="pin"){let r=To.find(l=>l.includes(n)),a=r.indexOf(n),o=Math.max(0,Math.min(r.length-5,a-2));e.style.gridTemplateColumns="repeat(5,minmax(0,1fr))",s=r.slice(o,o+5).map(l=>i(l,l===n)).join(""),ot("#secici-baslik").textContent="Hangi pin? Dokundu\u011Fun yerin \xE7evresi"}else{let r=cu.findIndex(l=>l.includes(n)),a=Math.max(0,Math.min(cu.length-3,r-1)),o=Math.max(1,Math.min(26,t.sutun-2));e.style.gridTemplateColumns="52px repeat(5,minmax(0,1fr))",s='<span class="bas"></span>'+[0,1,2,3,4].map(l=>`<span class="bas">${o+l}</span>`).join("");for(let l of cu.slice(a,a+3)){s+=`<span class="bas">${pS(l)}</span>`;for(let c=0;c<5;c++){let h=l.find(f=>Je(f).sutun===o+c);s+=h?i(h,h===n):'<span class="bosluk" aria-hidden="true"></span>'}}ot("#secici-baslik").textContent="Hangi delik? Dokundu\u011Fun yerin \xE7evresi"}e.innerHTML=s,ot("#secici").hidden=!1,Vn(n,"dokunma"),(e.querySelector(".yakin-hedef:not(:disabled)")||e.querySelector("button:not(:disabled)")||ot("#secici-kapat")).focus({preventScroll:!0}),Ve(`Dokundu\u011Fun yerin \xE7evresi a\xE7\u0131ld\u0131: ${t.tur==="pin"?"pini":"deli\u011Fi"} listeden se\xE7`)}function cr(){let n=ot("#secici");n&&!n.hidden&&(n.hidden=!0,ot("#secici-izgara").innerHTML="")}ot("#secici-izgara").addEventListener("click",n=>{let t=n.target.closest("[data-secici]");if(!t||t.disabled)return;let e=t.dataset.secici;cr(),Vn(e,"dokunma"),Dd(e)});ot("#secici-kapat").addEventListener("click",()=>{cr(),es()});ot("#yonerge-iptal").addEventListener("click",()=>ar(!0));var Md=null;document.addEventListener("pointerdown",n=>{Md=n.target},!0);document.addEventListener("click",n=>{if(n.detail===0)return;let t=n.target.closest?.("#secici, #secim-kart, .rozet-isaret");t&&!(Md&&t.contains(Md))&&(n.stopPropagation(),n.preventDefault())},!0);function ma(n){let t=or(n);if(!t){ns();return}Ui=n,gu=[],ot("#secim-ad").textContent=ki(t),ot("#secim-acik").textContent=eu(t),ot('[data-secim="ters"]').hidden=t.tur!=="led",ot("#secim-kart").hidden=!1,Nd(),es(),Ve(`${ki(t)} se\xE7ildi. ${eu(t)}.`)}function ns(n=!0){Ui=null,gu=[];let t=ot("#secim-kart");t&&(t.hidden=!0),Nd(),n&&es()}function og(n){let t=zt.parcalar.findIndex(s=>s.id===n);if(t<0||!Jt)return;let e=Cd(),i=zt.parcalar[t];zt.parcalar.splice(t,1),Ds(!1),ag(i.tur,{renk:i.renk,deger:i.deger,tasinan:{parca:i,indeks:t},onceki:e})}function lg(n){let t=or(n);!t||t.tur!=="led"||(pa(),[t.anot,t.katot]=[t.katot,t.anot],Ds(),ma(n),Ve(`LED ters \xE7evrildi: anot (uzun bacak) art\u0131k ${He(t.anot)}, katot ${He(t.katot)}`))}function kd(n){let t=or(n);t&&(pa(),zt.parcalar=zt.parcalar.filter(e=>e.id!==n),Ls.delete(n),ns(!1),Ds(),Ve(`${ki(t)} kald\u0131r\u0131ld\u0131. Geri al ile geri getirebilirsin.`))}ot("#secim-kart").addEventListener("click",n=>{let t=n.target.closest("[data-secim]");if(!t||!Ui)return;let e=Ui,i=t.dataset.secim;i==="tasi"&&og(e),i==="ters"&&lg(e),i==="sil"&&kd(e),i==="kapat"&&ns()});document.addEventListener("click",n=>{let t=n.target.closest("[data-hazir]");if(t){let s=md[t.dataset.hazir];Tt&&ar(!0),pa(),zt=la(s),ns(!1),Ds(),Jt?.kameraGit(Wc.genel),Ve(`${s.ad} devresi y\xFCklendi. Geri al ile \xF6nceki devrene d\xF6nebilirsin.`);return}let e=n.target.closest("[data-arac]");if(e&&!e.disabled){if(e.getAttribute("aria-pressed")==="true"){ar(!0);return}let s=e.dataset.arac,r=e.dataset.deger;ag(s,s==="led"?{renk:r}:s==="direnc"?{deger:Number(r)}:s==="kablo"?{renk:rr}:{});return}let i=n.target.closest("[data-liste]");if(i){let s=i.dataset.id,r=i.dataset.liste;r==="sec"&&(ma(s),Dn.matches&&ii!=="kisa"&&Oi("kisa")),r==="tasi"&&og(s),r==="ters"&&lg(s),r==="sil"&&kd(s)}});function cg(){for(let t of dn('input[name="kablo-renk"]'))t.checked=t.value===rr;let n=ot('[data-arac="kablo"]');n&&n.style.setProperty("--kablo",td[rr])}function fa(n=!1){let t=new Map;for(let o of ve?.uyarilar||[])if(o.seviye!=="bilgi")for(let l of o.parcalar)t.get(l)!=="hata"&&t.set(l,o.seviye);let e=!Jt,i=JSON.stringify([zt.parcalar,[...t],e]);if(!n&&i===fa.imza)return;fa.imza=i;let s=ot("#parca-listesi");ot("#parca-sayi").textContent=`(${zt.parcalar.length})`;let r=document.activeElement?.closest?.("[data-liste]"),a=r&&s.contains(r)?[r.dataset.liste,r.dataset.id]:null;zt.parcalar.length?s.innerHTML=zt.parcalar.map(o=>{let l=jn(ki(o)),c=t.get(o.id);return`<li data-id="${o.id}">${am(o)}<span class="parca-ad">${l}${c?`<span class="parca-sorun ${c}">${zn[c]||""}${pu[c]}</span>`:""}</span><span class="parca-acik">${jn(eu(o))}</span><div class="parca-dugmeler"><button type="button" class="dugme kucuk" data-liste="sec" data-id="${o.id}" aria-label="Se\xE7: ${l}">Se\xE7</button>`+(e?"":`<button type="button" class="dugme kucuk" data-liste="tasi" data-id="${o.id}" aria-label="Ta\u015F\u0131: ${l}">${zn.tasi||""}Ta\u015F\u0131</button>`)+(o.tur==="led"?`<button type="button" class="dugme kucuk" data-liste="ters" data-id="${o.id}" aria-label="Ters \xE7evir: ${l}">${zn.ters||""}Ters \xE7evir</button>`:"")+`<button type="button" class="dugme kucuk" data-liste="sil" data-id="${o.id}" aria-label="Sil: ${l}">${zn.sil||""}Sil</button></div></li>`}).join(""):s.innerHTML='<li class="bos-mesaj">Breadboard bo\u015F. Haz\u0131r devre y\xFCkle ya da yukar\u0131dan bir par\xE7a se\xE7.</li>',Nd(),a&&(s.querySelector(`[data-liste="${a[0]}"][data-id="${a[1]}"]`)||s.querySelector("[data-liste]")||ot("#sekme-kur"))?.focus({preventScroll:!0})}function Nd(){for(let n of dn("#parca-listesi li[data-id]"))n.dataset.id===Ui?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")}function Ud(){let n=zt.program,t=tr(zt.parcalar);for(let i of dn('input[name="program"]'))i.checked=i.value===n.tur;for(let i of dn("[data-program-ayar]"))i.hidden=i.dataset.programAyar!==n.tur;let e=(i,s,r)=>{for(let a of dn(`input[name="${i}"]`))a.checked=Number(a.value)===s,a.disabled=Number(a.value)===r};n.tur==="blink"&&(e("blink-pin",n.pin),e("bekleme",n.bekleme)),n.tur==="buton"&&(e("buton-giris",n.giris,n.cikis),e("buton-cikis",n.cikis,n.giris));for(let i of dn("[data-elle]")){let s=Number(i.dataset.elle),r=!!(n.tur==="elle"&&n.seviyeler[s]),a=t.has(String(s));i.setAttribute("aria-pressed",String(r)),i.querySelector("span").textContent=r?"HIGH":"LOW",i.classList.toggle("kablolu",a),i.setAttribute("aria-label",`${s}. pin: ${r?"HIGH":"LOW"}${a?", kablo tak\u0131l\u0131":""}`)}}function ji(n,t){pa(),zt.program=pd(n),Ud(),Fd(),Od(!0),Fi(),Id(),t&&Ve(t)}document.addEventListener("change",n=>{let t=n.target,e=zt.program;if(t.name==="program"){let i=e.tur==="blink"?e.pin:e.tur==="buton"?e.cikis:13;t.value==="blink"&&ji({tur:"blink",pin:i,bekleme:1e3},`Program: yan\u0131p s\xF6nen LED, ${i}. pin`),t.value==="buton"&&ji({tur:"buton",giris:i===2?3:2,cikis:i},"Program: butonla LED"),t.value==="elle"&&ji({tur:"elle",seviyeler:{}},"Program: elle; pinleri HIGH ya da LOW yap")}t.name==="blink-pin"&&ji({...e,pin:Number(t.value)},`LED pini ${t.value}`),t.name==="bekleme"&&ji({...e,bekleme:Number(t.value)},`Bekleme ${_d(Number(t.value)/1e3,Number(t.value)%1e3?1:0)} saniye`),t.name==="buton-giris"&&ji({...e,giris:Number(t.value)},`Giri\u015F pini ${t.value}`),t.name==="buton-cikis"&&ji({...e,cikis:Number(t.value)},`\xC7\u0131k\u0131\u015F pini ${t.value}`),t.name==="kablo-renk"&&(rr=t.value,cg(),Id(),Tt?.tur==="kablo"&&!Tt.tasinan&&(Tt.renk=rr,lr()))});document.addEventListener("click",n=>{let t=n.target.closest("[data-elle]");if(!t||zt.program.tur!=="elle")return;let e=Number(t.dataset.elle),i={...zt.program.seviyeler};i[e]?delete i[e]:i[e]=!0,ji({tur:"elle",seviyeler:i},`${e}. pin ${i[e]?"HIGH":"LOW"}`)});function Fd(){Qi=ym(zt.program,zt.parcalar);let n=vm(Qi.satirlar);ot("#kod-satirlar").innerHTML=Qi.satirlar.map((t,e)=>`<li class="kod-satir${t.k.trim()?"":" bos"}" data-no="${e+1}"><code>${jn(n[e])}</code><span class="tr">${jn(t.t)}</span></li>`).join(""),ug()}function ug(){let n=[];if(si&&ve?.calisiyor&&Qi){let e=zt.program;e.tur==="blink"?n=Ro?Qi.vurgu.yuksek:Qi.vurgu.dusuk:e.tur==="buton"?n=ve.cikislar[e.cikis]==="HIGH"?Qi.vurgu.yuksek:Qi.vurgu.dusuk:n=Qi.vurgu.yuksek}let t=new Set(n);for(let e of dn("#kod-satirlar .kod-satir"))e.classList.toggle("calisiyor",t.has(Number(e.dataset.no)))}var au=0,Dm="",ca=0;function Od(n=!1){let t=zt.program,e=si&&t.tur==="blink"?`b${t.bekleme}:${t.pin}`:"";if(e===Dm&&!n||(Dm=e,clearTimeout(au),au=0,Ro=!0,!e))return;let i=()=>{Ro=!Ro,Fi(),au=setTimeout(i,zt.program.bekleme)};au=setTimeout(i,t.bekleme)}function IS(){let n=si&&ve?.calisiyor&&ve.giris?.deger==="KARARSIZ";n&&!ca&&(ca=setTimeout(function(){Jm=Math.random()<.5,ca=0,Fi()},90+Math.random()*380)),!n&&ca&&(clearTimeout(ca),ca=0)}function PS(n){si=n;let t=ot("#calistir");t.toggleAttribute("data-calisiyor",n),t.innerHTML=`${n?zn.dur||"":zn.oynat||""}<span>${n?"Durdur":"\xC7al\u0131\u015Ft\u0131r"}</span>`,Od(!0),Fi(),Ve(n?ve.durdu==="kisa-devre"?"K\u0131sa devre var: devre \xE7al\u0131\u015Fm\u0131yor. Durum b\xF6l\xFCm\xFCne bak.":ve.durdu==="reset"?"RESET pini GND'ye ba\u011Fl\u0131: program \xE7al\u0131\u015Fm\u0131yor":`Program \xE7al\u0131\u015F\u0131yor. ${ve.tamam||""}`:"Program durdu")}ot("#calistir").addEventListener("click",()=>PS(!si));ot("#geri-al").addEventListener("click",jm);ot("#sifirla").addEventListener("click",()=>{if(Tt&&ar(!0),!zt.parcalar.length){Ve("Breadboard zaten bo\u015F");return}pa(),zt.parcalar=[],Ls.clear(),ns(!1),Ds(),Ve("Breadboard bo\u015Falt\u0131ld\u0131. Geri al ile geri d\xF6nebilirsin.")});var vi=ot("#buton-bas");function _u(n){Ls.clear();for(let t of zt.parcalar)t.tur==="buton"&&(n&&Ls.add(t.id),_i.get(t.id)?.nesne.userData.bas?.(n));vi.toggleAttribute("data-basili",n),Fi(),n&&!si&&Ve("Program \xE7al\u0131\u015Fm\u0131yor: \xF6nce \xC7al\u0131\u015Ft\u0131r'a bas")}function LS(n){Ls.add(n),_i.get(n)?.nesne.userData.bas?.(!0),Fi(),setTimeout(()=>{Ls.delete(n),_i.get(n)?.nesne.userData.bas?.(!1),Fi()},700)}vi.addEventListener("pointerdown",n=>{vi.setPointerCapture?.(n.pointerId),_u(!0)});for(let n of["pointerup","pointercancel","lostpointercapture"])vi.addEventListener(n,()=>{vi.hasAttribute("data-basili")&&_u(!1)});vi.addEventListener("keydown",n=>{(n.key===" "||n.key==="Enter")&&!n.repeat&&(n.preventDefault(),_u(!0))});vi.addEventListener("keyup",n=>{(n.key===" "||n.key==="Enter")&&_u(!1)});vi.addEventListener("contextmenu",n=>n.preventDefault());function Ds(n=!0){tg(),Ud(),Fd(),Od(),Fi(),fa();let t=!zt.parcalar.some(e=>e.tur==="buton");vi.hidden!==t&&(vi.hidden=t,Bd()),n&&Id()}function Fi(){if(ve=_m(zt,{calisiyor:si,faz:Ro,basili:[...Ls],kararsiz:Jm}),Jt){let t=[];for(let e of zt.parcalar){if(e.tur!=="led")continue;let i=_i.get(e.id),s=ve.ledler[e.id],r=s?.yanik?s.parlaklik:0;i?.nesne.userData.ac(r),i&&r>0&&t.push([i.nesne,r])}t.sort((e,i)=>i[1]-e[1]),Qm.forEach((e,i)=>{let s=t[i];if(!s){e.intensity=0;return}e.color.copy(s[0].userData.renk),e.position.set(s[0].position.x,s[0].position.y+s[0].userData.lambaY,s[0].position.z),e.intensity=380*s[1]}),uu.ledOn(si&&ve.durdu!=="kisa-devre"),uu.ledL(!!ve.l13)}ug(),da();let n=Jt?Sd():!1;fa(),IS(),n&&es(),Jt?.iste()}function DS(){let n=ve.uyarilar,t=n.filter(r=>r.seviye==="hata").length,e=n.filter(r=>r.seviye==="uyari").length,i=t+e,s=t?"hata":e?"uyari":null;return si?ve.durdu==="kisa-devre"?{sinif:"hata",ikon:"hata",kisa:"K\u0131sa devre: devre durdu",uzun:"K\u0131sa devre var: devre durdu. A\u015Fa\u011F\u0131daki uyar\u0131y\u0131 d\xFCzelt; d\xFCzelince devre kendili\u011Finden yeniden \xE7al\u0131\u015F\u0131r."}:ve.durdu==="reset"?{sinif:"hata",ikon:"hata",kisa:"RESET: program durdu",uzun:"RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fm\u0131yor."}:i?{sinif:s,ikon:s,kisa:`\xC7al\u0131\u015F\u0131yor \xB7 ${i} sorun`,uzun:`Devre \xE7al\u0131\u015F\u0131yor ama ${i} sorun var.`}:ve.tamam?{sinif:"tamam",ikon:"tamam",kisa:"Devre do\u011Fru, \xE7al\u0131\u015F\u0131yor",uzun:ve.tamam}:{sinif:"bekliyor",ikon:"oynat",kisa:"\xC7al\u0131\u015F\u0131yor",uzun:"Devre \xE7al\u0131\u015F\u0131yor."}:{sinif:s||"bekliyor",ikon:s||"bekliyor",kisa:i?`Durdu \xB7 ${i} sorun`:"Durdu: \xC7al\u0131\u015Ft\u0131r'a bas",uzun:`Devre durdu. \xC7al\u0131\u015Ft\u0131r'a bas\u0131nca program \xE7al\u0131\u015F\u0131r.${i?` \xC7al\u0131\u015Ft\u0131rmadan \xF6nce a\u015Fa\u011F\u0131daki ${i} soruna bak.`:""}`}}function da(n=!1){if(!ve)return;let t=DS(),e=ve.uyarilar,i=oe.dataset.sinif||"6",s=e.filter(y=>y.seviye!=="bilgi"),r=s.some(y=>y.seviye==="hata"),a=JSON.stringify([t,e.map(y=>[y.seviye,y.metin,y.eylem?.metin,y.parcalar.length]),i,ve.ledler,ve.cikislar,ve.giris,zt.program,si]);if(!n&&a===da.imza)return;da.imza=a;let o=ot("#durum-cip");o.className=`durum-cip ${t.sinif}`,o.innerHTML=`${zn[t.ikon]||""}<span>${jn(t.kisa)}</span>`,o.setAttribute("aria-label",`Devre durumu: ${t.uzun} Ayr\u0131nt\u0131 i\xE7in dokun.`);let l=ot("#durum-rozet");l.textContent=s.length?String(s.length):"",l.className=`rozet${r?"":" uyari"}`,ot("#sekme-durum").setAttribute("aria-label",s.length?`Durum: ${s.length} sorun`:"Durum"),ot("#durum-ozet").className=`ozet-kutu ${t.sinif}`,ot("#durum-ozet").innerHTML=`${zn[t.ikon]||""}<span>${jn(t.uzun)}</span>`;let c=JSON.stringify(e.map(y=>[y.seviye,y.metin,y.eylem?.metin,y.parcalar]));(n||c!==da.ui)&&(da.ui=c,ot("#uyarilar").innerHTML=e.length?e.map((y,g)=>`<li class="${y.seviye}">${zn[y.seviye]||""}<div><span class="seviye-ad">${pu[y.seviye]}</span><p class="uyari-metin">${jn(y.metin)}</p></div>${y.parcalar.length||y.eylem?`<div class="uyari-dugmeler">${y.parcalar.length&&Jt?`<button type="button" class="dugme kucuk" data-goster="${g}">Sahnede g\xF6ster</button>`:""}${y.eylem?`<button type="button" class="dugme kucuk birincil" data-uyari-eylem="${g}">${jn(y.eylem.metin)}</button>`:""}</div>`:""}</li>`).join(""):`<li class="bilgi">${zn.tamam||""}<div><span class="seviye-ad">Tamam</span><p class="uyari-metin">Uyar\u0131 yok.</p></div></li>`);let h=zt.program,f=[];if(h.tur==="blink"&&f.push([h.pin,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),h.tur==="buton"&&f.push([h.giris,"Giri\u015F (INPUT)"],[h.cikis,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),h.tur==="elle"){let y=tr(zt.parcalar);for(let g of Ji.slice().reverse())(y.has(String(g))||h.seviyeler[g])&&f.push([g,"\xC7\u0131k\u0131\u015F (OUTPUT)"])}let u=i==="7"||i==="8",d=(y,g)=>{if(!ve.calisiyor)return"Program \xE7al\u0131\u015Fm\u0131yor";if(g.startsWith("Giri\u015F")){let p=ve.giris;return p?p.deger==="KARARSIZ"?"Bo\u015Fta: ne HIGH ne LOW okuyor":`${p.deger} okuyor${u&&Number.isFinite(p.gerilim)?` (${_d(p.gerilim)} V)`:""}`:""}return ve.cikislar[y]==="HIGH"?"HIGH (5 V)":"LOW (0 V)"};ot("#pin-tablo tbody").innerHTML=f.length?f.map(([y,g])=>`<tr><td>${y}. pin</td><td>${g}</td><td>${jn(d(y,g))}</td></tr>`).join(""):'<tr><td colspan="3">Programda kullan\u0131lan pin yok.</td></tr>';let m=zt.parcalar.filter(y=>y.tur==="led");ot("#led-liste").innerHTML=m.length?m.map(y=>{let g=ve.ledler[y.id]||{},p=g.yanik?g.parlaklik<.3?"\xC7ok s\xF6n\xFCk yan\u0131yor":"Yan\u0131yor":"Yanm\u0131yor",S=u&&g.yanik?` \xB7 ${_d(g.akim)} mA`:"";return`<li><span class="led-nokta" style="background:${Yc[y.renk]}" aria-hidden="true"></span><span>${jn(ki(y))}</span><span class="durum-yazi">${p}${S}</span></li>`}).join(""):"<li>Devrede LED yok.</li>"}function hg(){Rd("durum"),!Dn.matches&&oe.dataset.panel==="kapali"&&Po(!0),Dn.matches&&ii==="kisa"&&Oi("yarim")}ot("#durum-cip").addEventListener("click",()=>{hg(),ot("#sekme-durum").focus({preventScroll:!0})});ot("#uyarilar").addEventListener("click",n=>{let t=n.target.closest("[data-goster]"),e=n.target.closest("[data-uyari-eylem]");if(t){let i=ve.uyarilar[Number(t.dataset.goster)];if(!i)return;ma(i.parcalar[0]),gu=i.parcalar.slice(1),es(),Dn.matches&&ii!=="kisa"&&Oi("kisa")}if(e){let i=ve.uyarilar[Number(e.dataset.uyariEylem)];i?.eylem?.tur==="blink-pin"&&ji({...zt.program,pin:i.eylem.pin},`Program art\u0131k ${i.eylem.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor`)}});var km={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06]};for(let n of dn(".gorunum button"))n.addEventListener("click",()=>{let t=n.dataset.gorunum,e=Wc.genel;Jt?.kameraGit(km[t]?{...e,yon:km[t],yaricap:e.yaricap*(t==="ustten"?1:1.08)}:e);for(let i of dn(".gorunum button"))i.setAttribute("aria-pressed",String(i===n))});ot("#yakinlas")?.addEventListener("click",()=>Jt?.yakinlas(.8));ot("#uzaklas")?.addEventListener("click",()=>Jt?.yakinlas(1.25));ot("#rontgen-dugme").addEventListener("click",n=>{if(!nr)return;let t=n.currentTarget.getAttribute("aria-pressed")!=="true";n.currentTarget.setAttribute("aria-pressed",String(t)),nr.rontgen(t),Jt.golgeYenile(),Ve(t?"R\xF6ntgen a\xE7\u0131k: breadboard'un i\xE7indeki metal \u015Feritler g\xF6r\xFCn\xFCyor":"R\xF6ntgen kapal\u0131")});var wd=ot(".ust-bant");function Nm(){let n=t=>{let e=ot(t);return!!e&&!e.hidden};wd.classList.toggle("dolu",n("#yonerge")||n("#secim-kart")||n("#secici")),wd.classList.toggle("secici-acik",n("#secici"))}if(wd&&"MutationObserver"in window){let n=new MutationObserver(Nm);for(let t of["#yonerge","#secim-kart","#secici"]){let e=ot(t);e&&n.observe(e,{attributes:!0,attributeFilter:["hidden"]})}Nm()}function Bd(){let n=ot(".sahne-alani"),t=ot(".sahne-arac");!n||!t||(n.classList.remove("dar"),t.scrollWidth>t.clientWidth+1&&n.classList.add("dar"))}"ResizeObserver"in window&&new ResizeObserver(()=>Bd()).observe(lu);var dg=new URLSearchParams(location.search).has("test");cg();Ud();Fd();Fi();fa(!0);vi.hidden=!zt.parcalar.some(n=>n.tur==="buton");requestAnimationFrame(()=>setTimeout(mS,20));dg&&(window.ozgurTest={ekran(n){if(!Jt)return null;if(n.startsWith("parca:")){let e=eg(n.slice(6));return e?Co(e.sub(new C(0,3.5,0))):null}let t=an(n,n.startsWith("p:")?gi:Ke);return t?Co(t):null},adimPiksel:n=>Jt?ig(an(n)):null,durum:()=>JSON.parse(JSON.stringify({parcalar:zt.parcalar,program:zt.program,calisiyor:si,sonuc:ve,arac:Tt&&{tur:Tt.tur,ilk:Tt.ilk},secici:!ot("#secici").hidden,secili:Ui,imlec:De,kare:sg,kalite:Jt?.kalite()}))});
