var Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tp=0,vh=1,ep=2;var Ao=1,cc=2,oa=3,ks=0,gn=1,yi=2,Ni=0,la=1,Ui=2,bh=3,Mh=4,np=5;var ir=100,ip=101,sp=102,rp=103,ap=104,op=200,lp=201,cp=202,up=203,Sh=204,wh=205,hp=206,dp=207,fp=208,pp=209,mp=210,gp=211,_p=212,yp=213,xp=214,Cl=0,Il=1,Pl=2,Gr=3,kl=4,Ll=5,Dl=6,Nl=7,uc=0,vp=1,bp=2,xi=0,Ah=1,Eh=2,Th=3,Rh=4,Ch=5,Ih=6,Eo=7;var Ph=300,Ls=301,sr=302,hc=303,dc=304,To=306,Hr=1e3,Pi=1001,Ul=1002,fn=1003,Mp=1004;var Ro=1005;var sn=1006,fc=1007;var Oi=1008;var Ln=1009,kh=1010,Lh=1011,ca=1012,pc=1013,vi=1014,Qn=1015,bi=1016,mc=1017,gc=1018,ua=1020,Dh=35902,Nh=35899,Uh=1021,Oh=1022,ti=1023,Li=1026,Ds=1027,_c=1028,yc=1029,Ns=1030,xc=1031;var vc=1033,Co=33776,Io=33777,Po=33778,ko=33779,bc=35840,Mc=35841,Sc=35842,wc=35843,Ac=36196,Ec=37492,Tc=37496,Rc=37488,Cc=37489,Lo=37490,Ic=37491,Pc=37808,kc=37809,Lc=37810,Dc=37811,Nc=37812,Uc=37813,Oc=37814,Fc=37815,Bc=37816,zc=37817,Vc=37818,Gc=37819,Hc=37820,Wc=37821,Xc=36492,Yc=36494,$c=36495,qc=36283,Zc=36284,Do=36285,Kc=36286;var $a=2300,Ol=2301,Tl=2302,lh=2303,ch=2400,uh=2401,hh=2402;var Sp=3200;var No=0,wp=1,Mi="",$e="srgb",qa="srgb-linear",Za="linear",Ce="srgb";var Rl=7680;var Ap=519,Ep=512,Tp=513,Rp=514,Jc=515,Cp=516,Ip=517,jc=518,Pp=519,Fh=35044;var Bh="300 es",mi=2e3,Wr=2001;function o0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function l0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kp(){let n=Ka("canvas");return n.style.display="block",n}var vf={},Xr=null;function Ja(...n){let t="THREE."+n.shift();Xr?Xr("log",t,...n):console.log(t,...n)}function Lp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function se(...n){n=Lp(n);let t="THREE."+n.shift();if(Xr)Xr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=Lp(n);let t="THREE."+n.shift();if(Xr)Xr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Zs(...n){let t=n.join(" ");t in vf||(vf[t]=!0,se(...n))}function Dp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Np={[Cl]:Il,[Pl]:Dl,[kl]:Nl,[Gr]:Ll,[Il]:Cl,[Dl]:Pl,[Nl]:kl,[Ll]:Gr},gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=1234567,Ha=Math.PI/180,Yr=180/Math.PI;function ki(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[e&63|128]+vn[e>>8&255]+"-"+vn[e>>16&255]+vn[e>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function he(n,t,e){return Math.max(t,Math.min(e,n))}function zh(n,t){return(n%t+t)%t}function c0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function u0(n,t,e){return n!==t?(e-n)/(t-n):0}function Wa(n,t,e){return(1-e)*n+e*t}function h0(n,t,e,i){return Wa(n,t,1-Math.exp(-e*i))}function d0(n,t=1){return t-Math.abs(zh(n,t*2)-t)}function f0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function p0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function m0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function g0(n,t){return n+Math.random()*(t-n)}function _0(n){return n*(.5-Math.random())}function y0(n){n!==void 0&&(bf=n);let t=bf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function x0(n){return n*Ha}function v0(n){return n*Yr}function b0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function M0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function S0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function w0(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),m=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*m,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*m,o*c);break;case"ZYZ":n.set(l*m,l*f,o*u,o*c);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vh={DEG2RAD:Ha,RAD2DEG:Yr,generateUUID:ki,clamp:he,euclideanModulo:zh,mapLinear:c0,inverseLerp:u0,lerp:Wa,damp:h0,pingpong:d0,smoothstep:f0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:_0,seededRandom:y0,degToRad:x0,radToDeg:v0,isPowerOfTwo:b0,ceilPowerOfTwo:M0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:w0,normalize:Pe,denormalize:pi},$h=class $h{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;var et=$h,In=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(h!==x||l!==d||c!==f||u!==m){let g=l*d+c*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,l=l*p+d*o,c=c*p+f*o,u=u*p+m*o,h=h*p+x*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+m*o,h=h*p+x*o;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-o*f,t[e+2]=c*m+u*f+o*d-l*h,t[e+3]=u*m-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qh=class qh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ou.copy(this).projectOnVector(t),this.sub(Ou)}reflect(t){return this.sub(Ou.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;var C=qh,Ou=new C,Mf=new In,Zh=class Zh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],x=s[0],g=s[3],p=s[6],b=s[1],w=s[4],M=s[7],A=s[2],y=s[5],E=s[8];return r[0]=a*x+o*b+l*A,r[3]=a*g+o*w+l*y,r[6]=a*p+o*M+l*E,r[1]=c*x+u*b+h*A,r[4]=c*g+u*w+h*y,r[7]=c*p+u*M+h*E,r[2]=d*x+f*b+m*A,r[5]=d*g+f*w+m*y,r[8]=d*p+f*M+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=e*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*c-u*i)*x,t[2]=(o*i-s*a)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fu.makeScale(t,e)),this}rotate(t){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fu.makeRotation(-t)),this}translate(t,e){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zh.prototype.isMatrix3=!0;var ce=Zh,Fu=new ce,Sf=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wf=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){let n={enabled:!0,workingColorSpace:qa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ce&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ce&&(s.r=Vr(s.r),s.g=Vr(s.g),s.b=Vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qa]:{primaries:t,whitePoint:i,transfer:Za,toXYZ:Sf,fromXYZ:wf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:Ce,toXYZ:Sf,fromXYZ:wf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}var _e=A0();function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sr,Fl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Sr===void 0&&(Sr=Ka("canvas")),Sr.width=t.width,Sr.height=t.height;let s=Sr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Sr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ka("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qi(e[i]/255)*255):e[i]=Qi(e[i]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},E0=0,$r=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bu(s[a].image)):r.push(Bu(s[a]))}else r=Bu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var T0=0,zu=new C,Cn=class n extends gi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Pi,s=Pi,r=sn,a=Oi,o=ti,l=Ln,c=n.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=ki(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Ph;Cn.DEFAULT_ANISOTROPY=1;var Kh=class Kh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,M=(f+1)/2,A=(p+1)/2,y=(u+d)/4,E=(h+x)/4,v=(m+g)/4;return w>M&&w>A?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=y/i,r=E/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=y/s,r=v/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=v/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;var Ve=Kh,Bl=class extends gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Cn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $r(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Bl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ja=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zl=class extends Cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var lc=class lc{constructor(t,e,i,s,r,a,o,l,c,u,h,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,d,f,m,x,g)}set(t,e,i,s,r,a,o,l,c,u,h,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/wr.setFromMatrixColumn(t,0).length(),r=1/wr.setFromMatrixColumn(t,1).length(),a=1/wr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*h,m=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,x=c*h;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,x=c*h;e[0]=d-x*o,e[4]=-a*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*h,m=o*u,x=o*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=x-d*h,e[8]=m*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-x*h}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=a*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,C0)}lookAt(t,e,i){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ms.crossVectors(i,Fn),ms.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ms.crossVectors(i,Fn)),ms.normalize(),nl.crossVectors(Fn,ms),s[0]=ms.x,s[4]=nl.x,s[8]=Fn.x,s[1]=ms.y,s[5]=nl.y,s[9]=Fn.y,s[2]=ms.z,s[6]=nl.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],x=i[6],g=i[10],p=i[14],b=i[3],w=i[7],M=i[11],A=i[15],y=s[0],E=s[4],v=s[8],T=s[12],I=s[1],L=s[5],N=s[9],B=s[13],k=s[2],z=s[6],Z=s[10],q=s[14],ot=s[3],K=s[7],nt=s[11],O=s[15];return r[0]=a*y+o*I+l*k+c*ot,r[4]=a*E+o*L+l*z+c*K,r[8]=a*v+o*N+l*Z+c*nt,r[12]=a*T+o*B+l*q+c*O,r[1]=u*y+h*I+d*k+f*ot,r[5]=u*E+h*L+d*z+f*K,r[9]=u*v+h*N+d*Z+f*nt,r[13]=u*T+h*B+d*q+f*O,r[2]=m*y+x*I+g*k+p*ot,r[6]=m*E+x*L+g*z+p*K,r[10]=m*v+x*N+g*Z+p*nt,r[14]=m*T+x*B+g*q+p*O,r[3]=b*y+w*I+M*k+A*ot,r[7]=b*E+w*L+M*z+A*K,r[11]=b*v+w*N+M*Z+A*nt,r[15]=b*T+w*B+M*q+A*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],b=l*f-c*d,w=o*f-c*h,M=o*d-l*h,A=a*f-c*u,y=a*d-l*u,E=a*h-o*u;return e*(x*b-g*w+p*M)-i*(m*b-g*A+p*y)+s*(m*w-x*A+p*E)-r*(m*M-x*y+g*E)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],b=e*o-i*a,w=e*l-s*a,M=e*c-r*a,A=i*l-s*o,y=i*c-r*o,E=s*c-r*l,v=u*x-h*m,T=u*g-d*m,I=u*p-f*m,L=h*g-d*x,N=h*p-f*x,B=d*p-f*g,k=b*B-w*N+M*L+A*I-y*T+E*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/k;return t[0]=(o*B-l*N+c*L)*z,t[1]=(s*N-i*B-r*L)*z,t[2]=(x*E-g*y+p*A)*z,t[3]=(d*y-h*E-f*A)*z,t[4]=(l*I-a*B-c*T)*z,t[5]=(e*B-s*I+r*T)*z,t[6]=(g*M-m*E-p*w)*z,t[7]=(u*E-d*M+f*w)*z,t[8]=(a*N-o*I+c*v)*z,t[9]=(i*I-e*N-r*v)*z,t[10]=(m*y-x*M+p*b)*z,t[11]=(h*M-u*y-f*b)*z,t[12]=(o*T-a*L-l*v)*z,t[13]=(e*L-i*T+s*v)*z,t[14]=(x*w-m*A-g*b)*z,t[15]=(u*A-h*w+d*b)*z,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,x=a*u,g=a*h,p=o*h,b=l*c,w=l*u,M=l*h,A=i.x,y=i.y,E=i.z;return s[0]=(1-(x+p))*A,s[1]=(f+M)*A,s[2]=(m-w)*A,s[3]=0,s[4]=(f-M)*y,s[5]=(1-(d+p))*y,s[6]=(g+b)*y,s[7]=0,s[8]=(m+w)*E,s[9]=(g-b)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=wr.set(s[0],s[1],s[2]).length(),o=wr.set(s[4],s[5],s[6]).length(),l=wr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hi.copy(this);let c=1/a,u=1/o,h=1/l;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,e.setFromRotationMatrix(hi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=mi,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===mi)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Wr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=mi,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===mi)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Wr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};lc.prototype.isMatrix4=!0;var Me=lc,wr=new C,hi=new Me,R0=new C(0,0,0),C0=new C(1,1,1),ms=new C,nl=new C,Fn=new C,Af=new Me,Ef=new In,_i=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Af.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Af,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ef.setFromEuler(this),this.setFromQuaternion(Ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},I0=0,Tf=new C,Ar=new In,$i=new Me,il=new C,La=new C,P0=new C,k0=new In,Rf=new C(1,0,0),Cf=new C(0,1,0),If=new C(0,0,1),Pf={type:"added"},L0={type:"removed"},Er={type:"childadded",child:null},Vu={type:"childremoved",child:null},We=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new _i,i=new In,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ce}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(Rf,t)}rotateY(t){return this.rotateOnAxis(Cf,t)}rotateZ(t){return this.rotateOnAxis(If,t)}translateOnAxis(t,e){return Tf.copy(t).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rf,t)}translateY(t){return this.translateOnAxis(Cf,t)}translateZ(t){return this.translateOnAxis(If,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?il.copy(t):il.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(La,il,this.up):$i.lookAt(il,La,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix($i),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pf),Er.child=t,this.dispatchEvent(Er),Er.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(L0),Vu.child=t,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pf),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,t,P0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,k0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new C(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},D0={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new dn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Gu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=zh(t,1),e=he(e,0,1),i=he(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Gu(a,r,t+1/3),this.g=Gu(a,r,t),this.b=Gu(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let i=Up[t.toLowerCase()];return i!==void 0?this.setHex(i,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return _e.workingToColorSpace(bn.copy(this),t),Math.round(he(bn.r*255,0,255))*65536+Math.round(he(bn.g*255,0,255))*256+Math.round(he(bn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(bn.copy(this),e);let i=bn.r,s=bn.g,r=bn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=$e){_e.workingToColorSpace(bn.copy(this),t);let e=bn.r,i=bn.g,s=bn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+e,gs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gs),t.getHSL(sl);let i=Wa(gs.h,sl.h,e),s=Wa(gs.s,sl.s,e),r=Wa(gs.l,sl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Gt;Gt.NAMES=Up;var Ks=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new C,qi=new C,Hu=new C,Zi=new C,Tr=new C,Rr=new C,kf=new C,Wu=new C,Xu=new C,Yu=new C,$u=new Ve,qu=new Ve,Zu=new Ve,ji=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),di.subVectors(t,e),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){di.subVectors(s,e),qi.subVectors(i,e),Hu.subVectors(t,e);let a=di.dot(di),o=di.dot(qi),l=di.dot(Hu),c=qi.dot(qi),u=qi.dot(Hu),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return $u.setScalar(0),qu.setScalar(0),Zu.setScalar(0),$u.fromBufferAttribute(t,e),qu.fromBufferAttribute(t,i),Zu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($u,r.x),a.addScaledVector(qu,r.y),a.addScaledVector(Zu,r.z),a}static isFrontFacing(t,e,i,s){return di.subVectors(i,e),qi.subVectors(t,e),di.cross(qi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Tr.subVectors(s,i),Rr.subVectors(r,i),Wu.subVectors(t,i);let l=Tr.dot(Wu),c=Rr.dot(Wu);if(l<=0&&c<=0)return e.copy(i);Xu.subVectors(t,s);let u=Tr.dot(Xu),h=Rr.dot(Xu);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Tr,a);Yu.subVectors(t,r);let f=Tr.dot(Yu),m=Rr.dot(Yu);if(m>=0&&f<=m)return e.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Rr,o);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return kf.subVectors(r,s),o=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(kf,o);let p=1/(g+x+d);return a=x*p,o=d*p,e.copy(i).addScaledVector(Tr,a).addScaledVector(Rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(t.matrixWorld),this.union(rl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Da),al.subVectors(this.max,Da),Cr.subVectors(t.a,Da),Ir.subVectors(t.b,Da),Pr.subVectors(t.c,Da),_s.subVectors(Ir,Cr),ys.subVectors(Pr,Ir),Ws.subVectors(Cr,Pr);let e=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-Ws.z,Ws.y,_s.z,0,-_s.x,ys.z,0,-ys.x,Ws.z,0,-Ws.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-Ws.y,Ws.x,0];return!Ku(e,Cr,Ir,Pr,al)||(e=[1,0,0,0,1,0,0,0,1],!Ku(e,Cr,Ir,Pr,al))?!1:(ol.crossVectors(_s,ys),e=[ol.x,ol.y,ol.z],Ku(e,Cr,Ir,Pr,al))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new C,new C,new C,new C,new C,new C,new C,new C],fi=new C,rl=new Kn,Cr=new C,Ir=new C,Pr=new C,_s=new C,ys=new C,Ws=new C,Da=new C,al=new C,ol=new C,Xs=new C;function Ku(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Xs.fromArray(n,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),l=t.dot(Xs),c=e.dot(Xs),u=i.dot(Xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var je=new C,ll=new et,N0=0,Mn=class extends gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fh,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ll.fromBufferAttribute(this,e),ll.applyMatrix3(t),this.setXY(e,ll.x,ll.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qa=class extends Mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var to=class extends Mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ye=class extends Mn{constructor(t,e,i){super(new Float32Array(t),e,i)}},U0=new Kn,Na=new C,Ju=new C,vs=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):U0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Na.subVectors(t,this.center);let e=Na.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Na,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Na.copy(t.center).add(Ju)),this.expandByPoint(Na.copy(t.center).sub(Ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},O0=0,Zn=new Me,ju=new We,kr=new C,Bn=new Kn,Ua=new Kn,hn=new C,qe=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(o0(t)?to:Qa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,i){return Zn.makeTranslation(t,e,i),this.applyMatrix4(Zn),this}scale(t,e,i){return Zn.makeScale(t,e,i),this.applyMatrix4(Zn),this}lookAt(t){return ju.lookAt(t),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ua.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Bn.min,Ua.min),Bn.expandByPoint(hn),hn.addVectors(Bn.max,Ua.max),Bn.expandByPoint(hn)):(Bn.expandByPoint(Ua.min),Bn.expandByPoint(Ua.max))}Bn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(hn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(t,c),hn.add(kr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new C,l[v]=new C;let c=new C,u=new C,h=new C,d=new et,f=new et,m=new et,x=new C,g=new C;function p(v,T,I){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,I),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,I),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(L),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(L),o[v].add(x),o[T].add(x),o[I].add(x),l[v].add(g),l[T].add(g),l[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,T=b.length;v<T;++v){let I=b[v],L=I.start,N=I.count;for(let B=L,k=L+N;B<k;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let w=new C,M=new C,A=new C,y=new C;function E(v){A.fromBufferAttribute(s,v),y.copy(A);let T=o[v];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),M.crossVectors(y,T);let L=M.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,L)}for(let v=0,T=b.length;v<T;++v){let I=b[v],L=I.start,N=I.count;for(let B=L,k=L+N;B<k;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new Mn(d,u,h)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fh,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Tn=new C,Kr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qu=new C,F0=new C,B0=new ce,Rn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Qu.subVectors(i,e).cross(F0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Qu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||B0.getNormalMatrix(t),s=this.coplanarPoint(Qu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},z0=0,Jn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=la,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=wh,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rl,this.stencilZFail=Rl,this.stencilZPass=Rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Rn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bs=class extends Jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lr,Oa=new C,Dr=new C,Nr=new C,Ur=new et,Fa=new et,Op=new Me,cl=new C,Ba=new C,ul=new C,Lf=new et,th=new et,Df=new et,Js=class extends We{constructor(t=new bs){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new eo(e,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new Kr(i,3,0,!1)),Lr.setAttribute("uv",new Kr(i,2,3,!1))}this.geometry=Lr,this.material=t,this.center=new et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),Op.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;hl(cl.set(-.5,-.5,0),Nr,a,Dr,s,r),hl(Ba.set(.5,-.5,0),Nr,a,Dr,s,r),hl(ul.set(.5,.5,0),Nr,a,Dr,s,r),Lf.set(0,0),th.set(1,0),Df.set(1,1);let o=t.ray.intersectTriangle(cl,Ba,ul,!1,Oa);if(o===null&&(hl(Ba.set(-.5,.5,0),Nr,a,Dr,s,r),th.set(0,1),o=t.ray.intersectTriangle(cl,ul,Ba,!1,Oa),o===null))return;let l=t.ray.origin.distanceTo(Oa);l<t.near||l>t.far||e.push({distance:l,point:Oa.clone(),uv:ji.getInterpolation(Oa,cl,Ba,ul,Lf,th,Df,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function hl(n,t,e,i,s,r){Ur.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Fa.x=r*Ur.x-s*Ur.y,Fa.y=s*Ur.x+r*Ur.y):Fa.copy(Ur),n.copy(t),n.x+=Fa.x,n.y+=Fa.y,n.applyMatrix4(Op)}var Ji=new C,eh=new C,dl=new C,fl=new C,js=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){eh.copy(t).add(e).multiplyScalar(.5),dl.copy(e).sub(t).normalize(),fl.copy(this.origin).sub(eh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(dl),o=fl.dot(this.direction),l=-fl.dot(dl),c=fl.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(eh).addScaledVector(dl,d),f}intersectSphere(t,e){if(t.radius<0)return null;Ji.subVectors(t.center,this.origin);let i=Ji.dot(this.direction),s=Ji.dot(Ji)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,x=e.y-a.y,g=e.z-a.z,p=i.x-a.x,b=i.y-a.y,w=i.z-a.z,M=Math.abs(l),A=Math.abs(c),y=Math.abs(u),E,v,T,I,L,N,B,k,z,Z,q,ot;if(M>=A&&M>=y?(T=l,N=h,z=m,ot=p,l>=0?(E=c,v=u,I=d,L=f,B=x,k=g,Z=b,q=w):(E=u,v=c,I=f,L=d,B=g,k=x,Z=w,q=b)):A>=y?(T=c,N=d,z=x,ot=b,c>=0?(E=u,v=l,I=f,L=h,B=g,k=m,Z=w,q=p):(E=l,v=u,I=h,L=f,B=m,k=g,Z=p,q=w)):(T=u,N=f,z=g,ot=w,u>=0?(E=l,v=c,I=h,L=d,B=m,k=x,Z=p,q=b):(E=c,v=l,I=d,L=h,B=x,k=m,Z=b,q=p)),T===0)return null;let K=E/T,nt=v/T,O=1/T,dt=I-K*N,ht=L-nt*N,qt=B-K*z,ee=k-nt*z,ne=Z-K*ot,Q=q-nt*ot,it=ne*ee-Q*qt,gt=dt*Q-ht*ne,Ht=qt*ht-ee*dt;if(s){if(it<0||gt<0||Ht<0)return null}else if((it<0||gt<0||Ht<0)&&(it>0||gt>0||Ht>0))return null;let St=it+gt+Ht;if(St===0)return null;let Wt=O*(it*N+gt*z+Ht*ot);return(St>0?Wt<0:Wt>0)?null:this.at(Wt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nf=new Me,Ys=new js,pl=new vs,Uf=new C,ml=new C,gl=new C,_l=new C,nh=new C,yl=new C,Of=new C,xl=new C,Kt=class extends We{constructor(t=new qe,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(nh.fromBufferAttribute(h,t),a?yl.addScaledVector(nh,u):yl.addScaledVector(nh.sub(e),u))}e.add(yl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),Ys.copy(t.ray).recast(t.near),!(pl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(pl,Uf)===null||Ys.origin.distanceToSquared(Uf)>(t.far-t.near)**2))&&(Nf.copy(r).invert(),Ys.copy(t.ray).applyMatrix4(Nf),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ys)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,A=w;M<A;M+=3){let y=o.getX(M),E=o.getX(M+1),v=o.getX(M+2);s=vl(this,p,t,i,c,u,h,y,E,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=o.getX(g),w=o.getX(g+1),M=o.getX(g+2);s=vl(this,a,t,i,c,u,h,b,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,A=w;M<A;M+=3){let y=M,E=M+1,v=M+2;s=vl(this,p,t,i,c,u,h,y,E,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=g,w=g+1,M=g+2;s=vl(this,a,t,i,c,u,h,b,w,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function V0(n,t,e,i,s,r,a,o){let l;if(t.side===gn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ks,o),l===null)return null;xl.copy(o),xl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(xl);return c<e.near||c>e.far?null:{distance:c,point:xl.clone(),object:n}}function vl(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,ml),n.getVertexPosition(l,gl),n.getVertexPosition(c,_l);let u=V0(n,t,e,i,ml,gl,_l,Of);if(u){let h=new C;ji.getBarycoord(Of,ml,gl,_l,h),s&&(u.uv=ji.getInterpolatedAttribute(s,o,l,c,h,new et)),r&&(u.uv1=ji.getInterpolatedAttribute(r,o,l,c,h,new et)),a&&(u.normal=ji.getInterpolatedAttribute(a,o,l,c,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};ji.getNormal(ml,gl,_l,d.normal),u.face=d,u.barycoord=h}return u}var no=class extends Cn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=fn,u=fn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends Mn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Or=new Me,Ff=new Me,bl=[],Bf=new Kn,G0=new Me,za=new Kt,Va=new vs,zn=class extends Kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,G0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),Bf.copy(t.boundingBox).applyMatrix4(Or),this.boundingBox.union(Bf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Or),Va.copy(t.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Va)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(za.geometry=this.geometry,za.material=this.material,za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(i),t.ray.intersectsSphere(Va)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),Ff.multiplyMatrices(i,Or),za.matrixWorld=Ff,za.raycast(t,bl);for(let a=0,o=bl.length;a<o;a++){let l=bl[a];l.instanceId=r,l.object=this,e.push(l)}bl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new no(new Float32Array(s*this.count),s,this.count,_c,Qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$s=new vs,H0=new et(.5,.5),Ml=new C,jr=class{constructor(t=new Rn,e=new Rn,i=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],b=r[12],w=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,p-m,A-b).normalize(),s[1].setComponents(c+a,f+u,p+m,A+b).normalize(),s[2].setComponents(c+o,f+h,p+x,A+w).normalize(),s[3].setComponents(c-o,f-h,p-x,A-w).normalize(),i)s[4].setComponents(l,d,g,M).normalize(),s[5].setComponents(c-l,f-d,p-g,A-M).normalize();else if(s[4].setComponents(c-l,f-d,p-g,A-M).normalize(),e===mi)s[5].setComponents(c+l,f+d,p+g,A+M).normalize();else if(e===Wr)s[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);let e=H0.distanceTo(t.center);return $s.radius=.7071067811865476+e,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ml.x=s.normal.x>0?t.max.x:t.min.x,Ml.y=s.normal.y>0?t.max.y:t.min.y,Ml.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var io=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};var so=class extends Cn{constructor(t=[],e=Ls,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Di=class extends Cn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ms=class extends Cn{constructor(t,e,i=vi,s,r,a,o=fn,l=fn,c,u=Li,h=1){if(u!==Li&&u!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $r(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vl=class extends Ms{constructor(t,e=vi,i=Ls,s,r,a=fn,o=fn,l,c=Li){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ro=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ee=class n extends qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(h,2));function m(x,g,p,b,w,M,A,y,E,v,T){let I=M/E,L=A/v,N=M/2,B=A/2,k=y/2,z=E+1,Z=v+1,q=0,ot=0,K=new C;for(let nt=0;nt<Z;nt++){let O=nt*L-B;for(let dt=0;dt<z;dt++){let ht=dt*I-N;K[x]=ht*b,K[g]=O*w,K[p]=k,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[p]=y>0?1:-1,u.push(K.x,K.y,K.z),h.push(dt/E),h.push(1-nt/v),q+=1}}for(let nt=0;nt<v;nt++)for(let O=0;O<E;O++){let dt=d+O+z*nt,ht=d+O+z*(nt+1),qt=d+(O+1)+z*(nt+1),ee=d+(O+1)+z*nt;l.push(dt,ht,ee),l.push(ht,qt,ee),ot+=6}o.addGroup(f,ot,T),f+=ot,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qs=class n extends qe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,u=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=i+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},kn=class n extends qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=i/2,p=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function b(){let M=new C,A=new C,y=0,E=(e-t)/i;for(let v=0;v<=r;v++){let T=[],I=v/r,L=I*(e-t)+t;for(let N=0;N<=s;N++){let B=N/s,k=B*l+o,z=Math.sin(k),Z=Math.cos(k);A.x=L*z,A.y=-I*i+g,A.z=L*Z,h.push(A.x,A.y,A.z),M.set(z,E,Z).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-I),T.push(m++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let I=x[T][v],L=x[T+1][v],N=x[T+1][v+1],B=x[T][v+1];(t>0||T!==0)&&(u.push(I,L,B),y+=3),(e>0||T!==r-1)&&(u.push(L,N,B),y+=3)}c.addGroup(p,y,0),p+=y}function w(M){let A=m,y=new et,E=new C,v=0,T=M===!0?t:e,I=M===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),m++;let L=m;for(let N=0;N<=s;N++){let k=N/s*l+o,z=Math.cos(k),Z=Math.sin(k);E.x=T*Z,E.y=g*I,E.z=T*z,h.push(E.x,E.y,E.z),d.push(0,I,0),y.x=z*.5+.5,y.y=Z*.5*I+.5,f.push(y.x,y.y),m++}for(let N=0;N<s;N++){let B=A+N,k=L+N;M===!0?u.push(k,k+1,B):u.push(k+1,k,B),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new et:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new Me;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qr=class extends Vn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gl=class extends Qr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var zf=new C,Vf=new C,ih=new Gh,sh=new Gh,rh=new Gh,ta=class extends Vn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Vf.subVectors(s[0],s[1]).add(s[0]),c=Vf);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ih.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,g),sh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,g),rh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),sh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),rh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ih.calc(l),sh.calc(l),rh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gf(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function W0(n,t){let e=1-n;return e*e*t}function X0(n,t){return 2*(1-n)*n*t}function Y0(n,t){return n*n*t}function Xa(n,t,e,i){return W0(n,t)+X0(n,e)+Y0(n,i)}function $0(n,t){let e=1-n;return e*e*e*t}function q0(n,t){let e=1-n;return 3*e*e*n*t}function Z0(n,t){return 3*(1-n)*n*n*t}function K0(n,t){return n*n*n*t}function Ya(n,t,e,i,s){return $0(n,t)+q0(n,e)+Z0(n,i)+K0(n,s)}var ao=class extends Vn{constructor(t=new et,e=new et,i=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new et){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ya(t,s.x,r.x,a.x,o.x),Ya(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hl=class extends Vn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ya(t,s.x,r.x,a.x,o.x),Ya(t,s.y,r.y,a.y,o.y),Ya(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends Vn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wl=class extends Vn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends Vn{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Xa(t,s.x,r.x,a.x),Xa(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends Vn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Xa(t,s.x,r.x,a.x),Xa(t,s.y,r.y,a.y),Xa(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Gf(o,l.x,c.x,u.x,h.x),Gf(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},Xl=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:ta,CubicBezierCurve:ao,CubicBezierCurve3:Hl,EllipseCurve:Qr,LineCurve:oo,LineCurve3:Wl,QuadraticBezierCurve:lo,QuadraticBezierCurve3:co,SplineCurve:uo}),Yl=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Xl[s.type]().fromJSON(s))}return this}},Ss=class extends Yl{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new oo(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new lo(this.currentPoint.clone(),new et(t,e),new et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new ao(this.currentPoint.clone(),new et(t,e),new et(i,s),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new uo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Qr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ts=class extends Ss{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ss().fromJSON(s))}return this}};function J0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Fp(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=n_(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,h=l;for(let d=e;d<s;d+=e){let f=n[d],m=n[d+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>h&&(h=m)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return ho(r,a,e,o,l,c,0),a}function Fp(n,t,e,i,s){let r;if(s===f_(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Hf(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Hf(a/i|0,n[a],n[a+1],r);return r&&ea(r,r.next)&&(po(r),r=r.next),r}function tr(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ea(e,e.next)||He(e.prev,e,e.next)===0)){if(po(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ho(n,t,e,i,s,r,a){if(!n)return;!a&&r&&o_(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Q0(n,i,s,r):j0(n)){t.push(l.i,n.i,c.i),po(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=t_(tr(n),t),ho(n,t,e,i,s,r,2)):a===2&&e_(n,t,e,i,s,r):ho(tr(n),t,e,i,s,r,1);break}}}function j0(n){let t=n.prev,e=n,i=n.next;if(He(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Ga(s,o,r,l,a,c,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Q0(n,t,e,i){let s=n.prev,r=n,a=n.next;if(He(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(u,h,d),x=Math.max(o,l,c),g=Math.max(u,h,d),p=dh(f,m,t,e,i),b=dh(x,g,t,e,i),w=n.prevZ,M=n.nextZ;for(;w&&w.z>=p&&M&&M.z<=b;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&Ga(o,u,l,h,c,d,w.x,w.y)&&He(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Ga(o,u,l,h,c,d,M.x,M.y)&&He(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&Ga(o,u,l,h,c,d,w.x,w.y)&&He(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=b;){if(M.x>=f&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Ga(o,u,l,h,c,d,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function t_(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ea(i,s)&&zp(i,e,e.next,s)&&fo(i,s)&&fo(s,i)&&(t.push(i.i,e.i,s.i),po(e),po(e.next),e=n=s),e=e.next}while(e!==n);return tr(e)}function e_(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u_(a,o)){let l=Vp(a,o);a=tr(a,a.next),l=tr(l,l.next),ho(a,t,e,i,s,r,0),ho(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function n_(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Fp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(c_(c))}s.sort(i_);for(let r=0;r<s.length;r++)e=s_(s[r],e);return e}function i_(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function s_(n,t){let e=r_(n,t);if(!e)return t;let i=Vp(e,n);return tr(i,i.next),tr(e,e.next)}function r_(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(ea(n,e))return e;do{if(ea(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,a=e.x<e.next.x?e:e.next,h===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Bp(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let h=Math.abs(s-e.y)/(i-e.x);fo(e,n)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&a_(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function a_(n,t){return He(n.prev,n,t.prev)<0&&He(t.next,n,n.next)<0}function o_(n,t,e,i){let s=n;do s.z===0&&(s.z=dh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,l_(s)}function l_(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function dh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function c_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bp(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ga(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Bp(n,t,e,i,s,r,a,o)}function u_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!h_(n,t)&&(fo(n,t)&&fo(t,n)&&d_(n,t)&&(He(n.prev,n,t.prev)||He(n,t.prev,t))||ea(n,t)&&He(n.prev,n,n.next)>0&&He(t.prev,t,t.next)>0)}function He(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ea(n,t){return n.x===t.x&&n.y===t.y}function zp(n,t,e,i){let s=wl(He(n,t,e)),r=wl(He(n,t,i)),a=wl(He(e,i,n)),o=wl(He(e,i,t));return!!(s!==r&&a!==o||s===0&&Sl(n,e,t)||r===0&&Sl(n,i,t)||a===0&&Sl(e,n,i)||o===0&&Sl(e,t,i))}function Sl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function wl(n){return n>0?1:n<0?-1:0}function h_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&zp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function fo(n,t){return He(n.prev,n,n.next)<0?He(n,t,n.next)>=0&&He(n,n.prev,t)>=0:He(n,t,n.prev)<0||He(n,n.next,t)<0}function d_(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Vp(n,t){let e=fh(n.i,n.x,n.y),i=fh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Hf(n,t,e,i){let s=fh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function f_(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var ph=class{static triangulate(t,e,i=2){return J0(t,e,i)}},qs=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Wf(t),Xf(i,t);let a=t.length;e.forEach(Wf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Xf(i,e[l]);let o=ph.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Wf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Xf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var na=class n extends qe{constructor(t=new ts([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:p_,w,M=!1,A,y,E,v;if(p){w=p.getSpacedPoints(u),M=!0,d=!1;let H=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,H),y=new C,E=new C,v=new C}d||(g=0,f=0,m=0,x=0);let T=o.extractPoints(c),I=T.shape,L=T.holes;if(!qs.isClockWise(I)){I=I.reverse();for(let H=0,j=L.length;H<j;H++){let Y=L[H];qs.isClockWise(Y)&&(L[H]=Y.reverse())}}function B(H){let Y=10000000000000001e-36,st=H[0];for(let lt=1;lt<=H.length;lt++){let _t=lt%H.length,Pt=H[_t],Ot=Pt.x-st.x,ft=Pt.y-st.y,P=Ot*Ot+ft*ft,le=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(st.x),Math.abs(st.y)),jt=Y*le*le;if(P<=jt){H.splice(_t,1),lt--;continue}st=Pt}}B(I),L.forEach(B);let k=L.length,z=I;for(let H=0;H<k;H++){let j=L[H];I=I.concat(j)}function Z(H,j,Y){return j||ie("ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(j,Y)}let q=I.length;function ot(H,j,Y){let st,lt,_t,Pt=H.x-j.x,Ot=H.y-j.y,ft=Y.x-H.x,P=Y.y-H.y,le=Pt*Pt+Ot*Ot,jt=Pt*P-Ot*ft;if(Math.abs(jt)>Number.EPSILON){let R=Math.sqrt(le),_=Math.sqrt(ft*ft+P*P),F=j.x-Ot/R,G=j.y+Pt/R,J=Y.x-P/_,pt=Y.y+ft/_,yt=((J-F)*P-(pt-G)*ft)/(Pt*P-Ot*ft);st=F+Pt*yt-H.x,lt=G+Ot*yt-H.y;let tt=st*st+lt*lt;if(tt<=2)return new et(st,lt);_t=Math.sqrt(tt/2)}else{let R=!1;Pt>Number.EPSILON?ft>Number.EPSILON&&(R=!0):Pt<-Number.EPSILON?ft<-Number.EPSILON&&(R=!0):Math.sign(Ot)===Math.sign(P)&&(R=!0),R?(st=-Ot,lt=Pt,_t=Math.sqrt(le)):(st=Pt,lt=Ot,_t=Math.sqrt(le/2))}return new et(st/_t,lt/_t)}let K=[];for(let H=0,j=z.length,Y=j-1,st=H+1;H<j;H++,Y++,st++)Y===j&&(Y=0),st===j&&(st=0),K[H]=ot(z[H],z[Y],z[st]);let nt=[],O,dt=K.concat();for(let H=0,j=k;H<j;H++){let Y=L[H];O=[];for(let st=0,lt=Y.length,_t=lt-1,Pt=st+1;st<lt;st++,_t++,Pt++)_t===lt&&(_t=0),Pt===lt&&(Pt=0),O[st]=ot(Y[st],Y[_t],Y[Pt]);nt.push(O),dt=dt.concat(O)}let ht;if(g===0)ht=qs.triangulateShape(z,L);else{let H=[],j=[];for(let Y=0;Y<g;Y++){let st=Y/g,lt=f*Math.cos(st*Math.PI/2),_t=m*Math.sin(st*Math.PI/2)+x;for(let Pt=0,Ot=z.length;Pt<Ot;Pt++){let ft=Z(z[Pt],K[Pt],_t);gt(ft.x,ft.y,-lt),st===0&&H.push(ft)}for(let Pt=0,Ot=k;Pt<Ot;Pt++){let ft=L[Pt];O=nt[Pt];let P=[];for(let le=0,jt=ft.length;le<jt;le++){let R=Z(ft[le],O[le],_t);gt(R.x,R.y,-lt),st===0&&P.push(R)}st===0&&j.push(P)}}ht=qs.triangulateShape(H,j)}let qt=ht.length,ee=m+x;for(let H=0;H<q;H++){let j=d?Z(I[H],dt[H],ee):I[H];M?(E.copy(A.normals[0]).multiplyScalar(j.x),y.copy(A.binormals[0]).multiplyScalar(j.y),v.copy(w[0]).add(E).add(y),gt(v.x,v.y,v.z)):gt(j.x,j.y,0)}for(let H=1;H<=u;H++)for(let j=0;j<q;j++){let Y=d?Z(I[j],dt[j],ee):I[j];M?(E.copy(A.normals[H]).multiplyScalar(Y.x),y.copy(A.binormals[H]).multiplyScalar(Y.y),v.copy(w[H]).add(E).add(y),gt(v.x,v.y,v.z)):gt(Y.x,Y.y,h/u*H)}for(let H=g-1;H>=0;H--){let j=H/g,Y=f*Math.cos(j*Math.PI/2),st=m*Math.sin(j*Math.PI/2)+x;for(let lt=0,_t=z.length;lt<_t;lt++){let Pt=Z(z[lt],K[lt],st);gt(Pt.x,Pt.y,h+Y)}for(let lt=0,_t=L.length;lt<_t;lt++){let Pt=L[lt];O=nt[lt];for(let Ot=0,ft=Pt.length;Ot<ft;Ot++){let P=Z(Pt[Ot],O[Ot],st);M?gt(P.x,P.y+w[u-1].y,w[u-1].x+Y):gt(P.x,P.y,h+Y)}}}ne(),Q();function ne(){let H=s.length/3;if(d){let j=0,Y=q*j;for(let st=0;st<qt;st++){let lt=ht[st];Ht(lt[2]+Y,lt[1]+Y,lt[0]+Y)}j=u+g*2,Y=q*j;for(let st=0;st<qt;st++){let lt=ht[st];Ht(lt[0]+Y,lt[1]+Y,lt[2]+Y)}}else{for(let j=0;j<qt;j++){let Y=ht[j];Ht(Y[2],Y[1],Y[0])}for(let j=0;j<qt;j++){let Y=ht[j];Ht(Y[0]+q*u,Y[1]+q*u,Y[2]+q*u)}}i.addGroup(H,s.length/3-H,0)}function Q(){let H=s.length/3,j=0;it(z,j),j+=z.length;for(let Y=0,st=L.length;Y<st;Y++){let lt=L[Y];it(lt,j),j+=lt.length}i.addGroup(H,s.length/3-H,1)}function it(H,j){let Y=H.length;for(;--Y>=0;){let st=Y,lt=Y-1;lt<0&&(lt=H.length-1);for(let _t=0,Pt=u+g*2;_t<Pt;_t++){let Ot=q*_t,ft=q*(_t+1),P=j+st+Ot,le=j+lt+Ot,jt=j+lt+ft,R=j+st+ft;St(P,le,jt,R)}}}function gt(H,j,Y){l.push(H),l.push(j),l.push(Y)}function Ht(H,j,Y){Wt(H),Wt(j),Wt(Y);let st=s.length/3,lt=b.generateTopUV(i,s,st-3,st-2,st-1);ge(lt[0]),ge(lt[1]),ge(lt[2])}function St(H,j,Y,st){Wt(H),Wt(j),Wt(st),Wt(j),Wt(Y),Wt(st);let lt=s.length/3,_t=b.generateSideWallUV(i,s,lt-6,lt-3,lt-2,lt-1);ge(_t[0]),ge(_t[1]),ge(_t[3]),ge(_t[1]),ge(_t[2]),ge(_t[3])}function Wt(H){s.push(l[H*3+0]),s.push(l[H*3+1]),s.push(l[H*3+2])}function ge(H){r.push(H.x),r.push(H.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return m_(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xl[s.type]().fromJSON(s)),new n(i,t.options)}},p_={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new et(r,a),new et(o,l),new et(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-h),new et(d,1-m),new et(x,1-p)]:[new et(o,1-l),new et(u,1-h),new et(f,1-m),new et(g,1-p)]}};function m_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ws=class n extends qe{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=he(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,h=new C,d=new et,f=new C,m=new C,x=new C,g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let b=0;b<=e;b++){let w=i+b*u*s,M=Math.sin(w),A=Math.cos(w);for(let y=0;y<=t.length-1;y++){h.x=t[y].x*M,h.y=t[y].y,h.z=t[y].x*A,a.push(h.x,h.y,h.z),d.x=b/e,d.y=y/(t.length-1),o.push(d.x,d.y);let E=l[3*y+0]*M,v=l[3*y+1],T=l[3*y+0]*A;c.push(E,v,T)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let M=w+b*t.length,A=M,y=M+t.length,E=M+t.length+1,v=M+1;r.push(A,y,v),r.push(E,v,y)}this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("uv",new ye(o,2)),this.setAttribute("normal",new ye(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var jn=class n extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let b=p*d-a;for(let w=0;w<c;w++){let M=w*h-r;m.push(M,-b,0),x.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let w=b+c*p,M=b+c*(p+1),A=b+1+c*(p+1),y=b+1+c*p;f.push(w,M,y),f.push(M,A,y)}this.setIndex(f),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ia=class n extends qe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=t,d=(e-t)/s,f=new C,m=new et;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let p=r+g/i*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<s;x++){let g=x*(i+1);for(let p=0;p<i;p++){let b=p+g,w=b,M=b+i+1,A=b+i+2,y=b+1;o.push(w,M,y),o.push(M,A,y)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var er=class n extends qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new C,d=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){let b=[],w=p/i,M=a+w*o,A=t*Math.cos(M),y=Math.sqrt(t*t-A*A),E=0;p===0&&a===0?E=.5/e:p===i&&l===Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){let T=v/e,I=s+T*r;h.x=-y*Math.cos(I),h.y=A,h.z=y*Math.sin(I),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(T+E,1-w),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let w=u[p][b+1],M=u[p][b],A=u[p+1][b],y=u[p+1][b+1];(p!==0||a>0)&&f.push(w,M,y),(p!==i-1||l<Math.PI)&&f.push(M,A,y)}this.setIndex(f),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mo=class n extends qe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new C,f=new C,m=new C;for(let x=0;x<=i;x++){let g=a+x/i*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(b),f.y=(t+e*Math.cos(g))*Math.sin(b),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,b=(s+1)*(x-1)+g-1,w=(s+1)*(x-1)+g,M=(s+1)*x+g;l.push(p,b,M),l.push(b,w,M)}this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var As=class n extends qe{constructor(t=new co(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new et,u=new C,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function x(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),b(),p()}function g(w){u=t.getPointAt(w/e,u);let M=a.normals[w],A=a.binormals[w];for(let y=0;y<=s;y++){let E=y/s*Math.PI*2,v=Math.sin(E),T=-Math.cos(E);l.x=T*M.x+v*A.x,l.y=T*M.y+v*A.y,l.z=T*M.z+v*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let M=1;M<=s;M++){let A=(s+1)*(w-1)+(M-1),y=(s+1)*w+(M-1),E=(s+1)*w+M,v=(s+1)*(w-1)+M;m.push(A,y,v),m.push(y,E,v)}}function b(){for(let w=0;w<=e;w++)for(let M=0;M<=s;M++)c.x=w/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Xl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var go=class extends Jn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function rr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Yf(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Yf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function wn(n){let t={};for(let e=0;e<n.length;e++){let i=rr(n[e]);for(let s in i)t[s]=i[s]}return t}function Yf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function g_(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Gp={clone:rr,merge:wn},__=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=g_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new et().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$l=class extends Gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Se=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_o=class extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var yo=class extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=uc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ql=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Fr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ah(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Es=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends Es{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uh:r=t,o=2*e-i;break;case hh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:a=t,l=2*i-e;break;case hh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,w=(-1-f)*g+(1.5+f)*x+.5*m,M=f*g-f*x;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+b*a[c+A]+w*a[l+A]+M*a[h+A];return r}},Jl=class extends Es{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},jl=class extends Es{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ql=class extends Es{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-e)/(s-e),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=f*d+m*2,b=h[p],w=h[p+1],M=t*d+m*2,A=u[M],y=u[M+1],E=v_(i,e,b,A,s);r[m]=Hp(E,x,w,y,g)}return r}};function Hp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function x_(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function v_(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Hp(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=x_(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ah(t.settings)&&(i.settings={inTangents:Fr(t.settings.inTangents,Array),outTangents:Fr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ql(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $a:e=this.InterpolantFactoryMethodDiscrete;break;case Ol:e=this.InterpolantFactoryMethodLinear;break;case Tl:e=this.InterpolantFactoryMethodSmooth;break;case lh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return se("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Tl;case this.InterpolantFactoryMethodBezier:return lh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ah(this.settings)&&($f(this.settings.inTangents,t),$f(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ie("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ie("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&l0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ie("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Tl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*i,d=h-i,f=h+i;for(let m=0;m!==i;++m){let x=e[h+m];if(x!==e[d+m]||x!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[h+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ah(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $f(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Ol;var Ts=class extends Hn{constructor(t,e,i){super(t,e,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=$a;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};tc.prototype.ValueTypeName="color";var ec=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};ec.prototype.ValueTypeName="number";var nc=class extends Es{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},xo=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}};xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends Hn{constructor(t,e,i){super(t,e,i)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=$a;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};ic.prototype.ValueTypeName="vector";var sc=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wp=new sc,rc=class{constructor(t){this.manager=t!==void 0?t:Wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};rc.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},vo=class extends sa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},oh=new Me,qf=new C,Zf=new C,bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qf.setFromMatrixPosition(t.matrixWorld),e.position.copy(qf),Zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(oh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Wr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Al=new C,El=new In,Ii=new C,Mo=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Al,El,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,El,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Al,El,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,El,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new C,Kf=new et,Jf=new et,mn=class extends Mo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,e){return this.getViewBounds(t,Kf,Jf),e.subVectors(Jf,Kf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var mh=class extends bo{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},Cs=class extends sa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ra=class extends Mo{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gh=class extends bo{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},So=class extends sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new gh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Br=-90,zr=1,ac=class extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Br,zr,t,e);s.layers=this.layers,this.add(s);let r=new mn(Br,zr,t,e);r.layers=this.layers,this.add(r);let a=new mn(Br,zr,t,e);a.layers=this.layers,this.add(a);let o=new mn(Br,zr,t,e);o.layers=this.layers,this.add(o);let l=new mn(Br,zr,t,e);l.layers=this.layers,this.add(l);let c=new mn(Br,zr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},oc=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wh="\\[\\]\\.:\\/",b_=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",M_="[^"+Wh.replace("\\.","")+"]",S_=/((?:WC+[\/:])*)/.source.replace("WC",Xh),w_=/(WCOD+)?/.source.replace("WCOD",M_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),E_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),T_=new RegExp("^"+S_+w_+A_+E_+"$"),R_=["material","materials","bones","map"],_h=class{constructor(t,e,i){let s=i||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ze=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(b_,"")}static parseTrackName(t){let e=T_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);R_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=_h;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QS=new Float32Array(1);var jf=new Me,nr=class{constructor(t,e,i=0,s=1/0){this.ray=new js(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jf),this}intersectObject(t,e=!0,i=[]){return yh(t,this,i,e),i.sort(Qf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)yh(t[s],this,i,e);return i.sort(Qf),i}};function Qf(n,t){return n.distance-t.distance}function yh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)yh(r[a],t,e,!0)}}var aa=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(he(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Jh=class Jh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Jh.prototype.isMatrix2=!0;var xh=Jh;var wo=class extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Yh(n,t,e,i){let s=C_(i);switch(e){case Uh:return n*t;case _c:return n*t/s.components*s.byteLength;case yc:return n*t/s.components*s.byteLength;case Ns:return n*t*2/s.components*s.byteLength;case xc:return n*t*2/s.components*s.byteLength;case Oh:return n*t*3/s.components*s.byteLength;case ti:return n*t*4/s.components*s.byteLength;case vc:return n*t*4/s.components*s.byteLength;case Co:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Po:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:case wc:return Math.max(n,16)*Math.max(t,8)/4;case bc:case Sc:return Math.max(n,8)*Math.max(t,8)/2;case Ac:case Ec:case Rc:case Cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Tc:case Lo:case Ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xc:case Yc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qc:case Zc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Do:case Kc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C_(n){switch(n){case Ln:case kh:return{byteLength:1,components:1};case ca:case Lh:case bi:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case vi:case pc:case Qn:return{byteLength:4,components:1};case Dh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function dm(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function U_(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var O_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F_=`#ifdef USE_ALPHAHASH
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
#endif`,B_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H_=`#ifdef USE_AOMAP
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
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`#ifdef USE_BATCHING
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
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K_=`#ifdef USE_IRIDESCENCE
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
#endif`,J_=`#ifdef USE_BUMPMAP
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
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ay=`#define PI 3.141592653589793
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
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ly=`vec3 transformedNormal = objectNormal;
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
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
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
#endif`,vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wy=`#ifdef USE_GRADIENTMAP
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
}`,Ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ry=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
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
#endif`,Ny=`uniform sampler2D dfgLUT;
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
}`,Uy=`
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$y=`#if defined( USE_POINTS_UV )
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
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,av=`#define PHONG
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
}`,ov=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,uv=`#define TOON
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
}`,hv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:O_,alphahash_pars_fragment:F_,alphamap_fragment:B_,alphamap_pars_fragment:z_,alphatest_fragment:V_,alphatest_pars_fragment:G_,aomap_fragment:H_,aomap_pars_fragment:W_,batching_pars_vertex:X_,batching_vertex:Y_,begin_vertex:$_,beginnormal_vertex:q_,bsdfs:Z_,iridescence_fragment:K_,bumpmap_pars_fragment:J_,clipping_planes_fragment:j_,clipping_planes_pars_fragment:Q_,clipping_planes_pars_vertex:ty,clipping_planes_vertex:ey,color_fragment:ny,color_pars_fragment:iy,color_pars_vertex:sy,color_vertex:ry,common:ay,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ly,displacementmap_pars_vertex:cy,displacementmap_vertex:uy,emissivemap_fragment:hy,emissivemap_pars_fragment:dy,colorspace_fragment:fy,colorspace_pars_fragment:py,envmap_fragment:my,envmap_common_pars_fragment:gy,envmap_pars_fragment:_y,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Cy,envmap_vertex:xy,fog_vertex:vy,fog_pars_vertex:by,fog_fragment:My,fog_pars_fragment:Sy,gradientmap_pars_fragment:wy,lightmap_pars_fragment:Ay,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:Ty,lights_pars_begin:Ry,lights_toon_fragment:Iy,lights_toon_pars_fragment:Py,lights_phong_fragment:ky,lights_phong_pars_fragment:Ly,lights_physical_fragment:Dy,lights_physical_pars_fragment:Ny,lights_fragment_begin:Uy,lights_fragment_maps:Oy,lights_fragment_end:Fy,lightprobes_pars_fragment:By,logdepthbuf_fragment:zy,logdepthbuf_pars_fragment:Vy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Hy,map_fragment:Wy,map_pars_fragment:Xy,map_particle_fragment:Yy,map_particle_pars_fragment:$y,metalnessmap_fragment:qy,metalnessmap_pars_fragment:Zy,morphinstance_vertex:Ky,morphcolor_vertex:Jy,morphnormal_vertex:jy,morphtarget_pars_vertex:Qy,morphtarget_vertex:tx,normal_fragment_begin:ex,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:ox,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:cx,iridescence_pars_fragment:ux,opaque_fragment:hx,packing:dx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:vx,shadowmap_vertex:bx,shadowmask_pars_fragment:Mx,skinbase_vertex:Sx,skinning_pars_vertex:wx,skinning_vertex:Ax,skinnormal_vertex:Ex,specularmap_fragment:Tx,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Ix,transmission_fragment:Px,transmission_pars_fragment:kx,uv_pars_fragment:Lx,uv_pars_vertex:Dx,uv_vertex:Nx,worldpos_vertex:Ux,background_vert:Ox,background_frag:Fx,backgroundCube_vert:Bx,backgroundCube_frag:zx,cube_vert:Vx,cube_frag:Gx,depth_vert:Hx,depth_frag:Wx,distance_vert:Xx,distance_frag:Yx,equirect_vert:$x,equirect_frag:qx,linedashed_vert:Zx,linedashed_frag:Kx,meshbasic_vert:Jx,meshbasic_frag:jx,meshlambert_vert:Qx,meshlambert_frag:tv,meshmatcap_vert:ev,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:av,meshphysical_vert:ov,meshphysical_frag:lv,meshtoon_vert:cv,meshtoon_frag:uv,points_vert:hv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},Ct={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Bi={basic:{uniforms:wn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:wn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:wn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:wn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:wn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Gt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:wn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:wn([Ct.points,Ct.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:wn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:wn([Ct.common,Ct.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:wn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:wn([Ct.sprite,Ct.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:wn([Ct.common,Ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:wn([Ct.lights,Ct.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:wn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Qc={r:0,b:0,g:0},_v=new Me,fm=new ce;fm.set(-1,0,0,0,1,0,0,0,1);function yv(n,t,e,i,s,r){let a=new Gt(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let M=b.backgroundBlurriness>0;w=t.get(w,M)}return w}function m(b){let w=!1,M=f(b);M===null?g(a,o):M&&M.isColor&&(g(M,1),w=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,w){let M=f(w);M&&(M.isCubeTexture||M.mapping===To)?(c===void 0&&(c=new Kt(new Ee(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:rr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_v.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fm),c.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ce,(u!==M||h!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Kt(new jn(2,2),new Gn({name:"BackgroundMaterial",uniforms:rr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,w){b.getRGB(Qc,Hh(n)),e.buffers.color.setClear(Qc.r,Qc.g,Qc.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:x,dispose:p}}function xv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(L,N,B,k,z){let Z=!1,q=h(L,k,B,N);r!==q&&(r=q,c(r.object)),Z=f(L,k,B,z),Z&&m(L,k,B,z),z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(L,N,B,k),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function h(L,N,B,k){let z=k.wireframe===!0,Z=i[N.id];Z===void 0&&(Z={},i[N.id]=Z);let q=L.isInstancedMesh===!0?L.id:0,ot=Z[q];ot===void 0&&(ot={},Z[q]=ot);let K=ot[B.id];K===void 0&&(K={},ot[B.id]=K);let nt=K[z];return nt===void 0&&(nt=d(l()),K[z]=nt),nt}function d(L){let N=[],B=[],k=[];for(let z=0;z<e;z++)N[z]=0,B[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:k,object:L,attributes:{},index:null}}function f(L,N,B,k){let z=r.attributes,Z=N.attributes,q=0,ot=B.getAttributes();for(let K in ot)if(ot[K].location>=0){let O=z[K],dt=Z[K];if(dt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor)),O===void 0||O.attribute!==dt||dt&&O.data!==dt.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function m(L,N,B,k){let z={},Z=N.attributes,q=0,ot=B.getAttributes();for(let K in ot)if(ot[K].location>=0){let O=Z[K];O===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));let dt={};dt.attribute=O,O&&O.data&&(dt.data=O.data),z[K]=dt,q++}r.attributes=z,r.attributesNum=q,r.index=k}function x(){let L=r.newAttributes;for(let N=0,B=L.length;N<B;N++)L[N]=0}function g(L){p(L,0)}function p(L,N){let B=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;B[L]=1,k[L]===0&&(n.enableVertexAttribArray(L),k[L]=1),z[L]!==N&&(n.vertexAttribDivisor(L,N),z[L]=N)}function b(){let L=r.newAttributes,N=r.enabledAttributes;for(let B=0,k=N.length;B<k;B++)N[B]!==L[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function w(L,N,B,k,z,Z,q){q===!0?n.vertexAttribIPointer(L,N,B,z,Z):n.vertexAttribPointer(L,N,B,k,z,Z)}function M(L,N,B,k){x();let z=k.attributes,Z=B.getAttributes(),q=N.defaultAttributeValues;for(let ot in Z){let K=Z[ot];if(K.location>=0){let nt=z[ot];if(nt===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor)),nt!==void 0){let O=nt.normalized,dt=nt.itemSize,ht=t.get(nt);if(ht===void 0)continue;let qt=ht.buffer,ee=ht.type,ne=ht.bytesPerElement,Q=ee===n.INT||ee===n.UNSIGNED_INT||nt.gpuType===pc;if(nt.isInterleavedBufferAttribute){let it=nt.data,gt=it.stride,Ht=nt.offset;if(it.isInstancedInterleavedBuffer){for(let St=0;St<K.locationSize;St++)p(K.location+St,it.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let St=0;St<K.locationSize;St++)g(K.location+St);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let St=0;St<K.locationSize;St++)w(K.location+St,dt/K.locationSize,ee,O,gt*ne,(Ht+dt/K.locationSize*St)*ne,Q)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)p(K.location+it,nt.meshPerAttribute);L.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<K.locationSize;it++)g(K.location+it);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let it=0;it<K.locationSize;it++)w(K.location+it,dt/K.locationSize,ee,O,dt*ne,dt/K.locationSize*it*ne,Q)}}else if(q!==void 0){let O=q[ot];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(K.location,O);break;case 3:n.vertexAttrib3fv(K.location,O);break;case 4:n.vertexAttrib4fv(K.location,O);break;default:n.vertexAttrib1fv(K.location,O)}}}}b()}function A(){T();for(let L in i){let N=i[L];for(let B in N){let k=N[B];for(let z in k){let Z=k[z];for(let q in Z)u(Z[q].object),delete Z[q];delete k[z]}}delete i[L]}}function y(L){if(i[L.id]===void 0)return;let N=i[L.id];for(let B in N){let k=N[B];for(let z in k){let Z=k[z];for(let q in Z)u(Z[q].object),delete Z[q];delete k[z]}}delete i[L.id]}function E(L){for(let N in i){let B=i[N];for(let k in B){let z=B[k];if(z[L.id]===void 0)continue;let Z=z[L.id];for(let q in Z)u(Z[q].object),delete Z[q];delete z[L.id]}}}function v(L){for(let N in i){let B=i[N],k=L.isInstancedMesh===!0?L.id:0,z=B[k];if(z!==void 0){for(let Z in z){let q=z[Z];for(let ot in q)u(q[ot].object),delete q[ot];delete z[Z]}delete B[k],Object.keys(B).length===0&&delete i[N]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function vv(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function bv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==ti&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let v=E===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ln&&E!==Qn&&!v&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(se("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:y}}function Mv(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Rn,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let b=r?0:i,w=b*4,M=p.clippingState||null;l.value=M,M=u(m,d,w,f);for(let A=0;A!==w;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,M=f;w!==x;++w,M+=4)a.copy(h[w]).applyMatrix4(b,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var da=4,Sv=6,wv=20,Av=256,Uo=new ra,Xp=new Gt,jh=null,Qh=0,td=0,ed=!1,Ev=new C,ar=new C,pa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Ev}=r;jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,Qh,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:bi,format:ti,colorSpace:qa,depthBuffer:!1},s=Yp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Tv(r)),this._blurMaterial=Cv(r,t,e),this._ggxMaterial=Rv(r,t,e)}return s}_compileMaterial(t){let e=new Kt(new qe,t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,i,s,r){let l=new mn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Xp),h.toneMapping=xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new Ee,new Sn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,p=!0):(g.color.copy(Xp),p=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let A=this._cubeSize;ha(s,M*A,w>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(x,l),h.render(t,l)}h.toneMapping=f,h.autoClear=d,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ls||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ha(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Uo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-da?i-m+da:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,ha(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Uo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,ha(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(o,Uo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-da?s-this._lodMax+da:0),d=4*(this._cubeSize-u);ha(e,h,d,3*u,2*u),a.setRenderTarget(e),a.render(l,Uo)}};function Tv(n){let t=[],e=[],i=n,s=n-da+1+Sv;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,m=new Float32Array(f*d*h),x=new Float32Array(f*d*h);for(let p=0;p<h;p++){let b=p%3*2/3-1,w=p>2?0:-1,M=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];m.set(M,f*d*p);for(let A=0;A<d;A++){let y=u[A*2]*2-1,E=u[A*2+1]*2-1;p===0?ar.set(1,E,y):p===1?ar.set(-y,1,-E):p===2?ar.set(-y,E,1):p===3?ar.set(-1,E,-y):p===4?ar.set(-y,-1,E):ar.set(y,E,-1),ar.toArray(x,(p*d+A)*f)}}let g=new qe;g.setAttribute("position",new Mn(m,f)),g.setAttribute("outputDirection",new Mn(x,f)),e.push(new Kt(g,null)),i>da&&i--}return{lodMeshes:e,sizeLods:t}}function Yp(n,t,e){let i=new Pn(n,t,e);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Rv(n,t,e){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Cv(n,t,e){return new Gn({name:"SphericalGaussianBlur",defines:{SAMPLES:wv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function $p(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function qp(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eu=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new so(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ni});r.uniforms.tEquirect.value=e;let a=new Kt(s,r),o=e.minFilter;return e.minFilter===Oi&&(e.minFilter=sn),new ac(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function Iv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===hc||f===dc)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new eu(m.height);return x.fromEquirectangularTexture(n,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===hc||f===dc,x=f===Ls||f===sr;if(m||x){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new pa(n)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return m&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new pa(n)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,f){return f===hc?d.mapping=Ls:f===dc&&(d.mapping=sr),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Pv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Zs("WebGLRenderer: "+i+" extension not supported."),s}}}function kv(n,t,e,i){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(f!==null){let b=f.array;x=f.version;for(let w=0,M=b.length;w<M;w+=3){let A=b[w+0],y=b[w+1],E=b[w+2];d.push(A,y,y,E,E,A)}}else{let b=m.array;x=m.version;for(let w=0,M=b.length/3-1;w<M;w+=3){let A=w+0,y=w+1,E=w+2;d.push(A,y,y,E,E,A)}}let g=new(m.count>=65535?to:Qa)(d,1);g.version=x;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Lv(n,t,e){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*a),e.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),e.update(d,i,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Dv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Nv(n,t,e){let i=new WeakMap,s=new Ve;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let T=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let M=o.attributes.position.count*w,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let y=new Float32Array(M*A*4*h),E=new ja(y,M,A,h);E.type=Qn,E.needsUpdate=!0;let v=w*4;for(let I=0;I<h;I++){let L=g[I],N=p[I],B=b[I],k=M*A*4*I;for(let z=0;z<L.count;z++){let Z=z*v;f===!0&&(s.fromBufferAttribute(L,z),y[k+Z+0]=s.x,y[k+Z+1]=s.y,y[k+Z+2]=s.z,y[k+Z+3]=0),m===!0&&(s.fromBufferAttribute(N,z),y[k+Z+4]=s.x,y[k+Z+5]=s.y,y[k+Z+6]=s.z,y[k+Z+7]=0),x===!0&&(s.fromBufferAttribute(B,z),y[k+Z+8]=s.x,y[k+Z+9]=s.y,y[k+Z+10]=s.z,y[k+Z+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new et(M,A)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Uv(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Ov={[Ah]:"LINEAR_TONE_MAPPING",[Eh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[Ih]:"AGX_TONE_MAPPING",[Eo]:"NEUTRAL_TONE_MAPPING",[Ch]:"CUSTOM_TONE_MAPPING"};function Fv(n,t,e,i,s,r){let a=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new qe;c.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ye([0,2,0,0,2,0],2));let u=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Kt(c,u),d=new ra(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,b=[],w=!1;this.setSize=function(M,A){a.setSize(M,A),o!==null&&o.setSize(M,A),l!==null&&l.setSize(M,A);for(let y=0;y<b.length;y++){let E=b[y];E.setSize&&E.setSize(M,A)}},this.setEffects=function(M){b=M,w=b.length>0&&b[0].isRenderPass===!0;let A=a.width,y=a.height;b.length>0&&o===null&&(o=new Pn(A,y,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(A,y,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<b.length;E++){let v=b[E];v.setSize&&v.setSize(A,y)}},this.begin=function(M,A){if(x||M.toneMapping===xi&&b.length===0)return!1;if(p=A,A!==null){let y=A.width,E=A.height;(a.width!==y||a.height!==E)&&this.setSize(y,E)}return w===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=xi,!0},this.hasRenderPass=function(){return w},this.end=function(M,A){M.toneMapping=g,x=!0;let y=a,E=o;for(let v=0;v<b.length;v++){let T=b[v];T.enabled!==!1&&(T.render(M,E,y,A),T.needsSwap!==!1&&(y=E,E=E===o?l:o))}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,u.defines={},_e.getTransfer(f)===Ce&&(u.defines.SRGB_TRANSFER="");let v=Ov[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(p),M.render(h,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var pm=new Cn,sd=new Ms(1,1),mm=new ja,gm=new zl,_m=new so,Zp=[],Kp=[],Jp=new Float32Array(16),jp=new Float32Array(9),Qp=new Float32Array(4);function ma(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zp[s];if(r===void 0&&(r=new Float32Array(s),Zp[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function an(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function su(n,t){let e=Kp[t];e===void 0&&(e=new Int32Array(t),Kp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Bv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2fv(this.addr,t),an(e,t)}}function Vv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;n.uniform3fv(this.addr,t),an(e,t)}}function Gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4fv(this.addr,t),an(e,t)}}function Hv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,i))return;Qp.set(i),n.uniformMatrix2fv(this.addr,!1,Qp),an(e,i)}}function Wv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,i))return;jp.set(i),n.uniformMatrix3fv(this.addr,!1,jp),an(e,i)}}function Xv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,i))return;Jp.set(i),n.uniformMatrix4fv(this.addr,!1,Jp),an(e,i)}}function Yv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2iv(this.addr,t),an(e,t)}}function qv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3iv(this.addr,t),an(e,t)}}function Zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4iv(this.addr,t),an(e,t)}}function Kv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Jv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;n.uniform2uiv(this.addr,t),an(e,t)}}function jv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;n.uniform3uiv(this.addr,t),an(e,t)}}function Qv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;n.uniform4uiv(this.addr,t),an(e,t)}}function tb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sd.compareFunction=e.isReversedDepthBuffer()?jc:Jc,r=sd):r=pm,e.setTexture2D(t||r,s)}function eb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gm,s)}function nb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_m,s)}function ib(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mm,s)}function sb(n){switch(n){case 5126:return Bv;case 35664:return zv;case 35665:return Vv;case 35666:return Gv;case 35674:return Hv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return Yv;case 35667:case 35671:return $v;case 35668:case 35672:return qv;case 35669:case 35673:return Zv;case 5125:return Kv;case 36294:return Jv;case 36295:return jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function rb(n,t){n.uniform1fv(this.addr,t)}function ab(n,t){let e=ma(t,this.size,2);n.uniform2fv(this.addr,e)}function ob(n,t){let e=ma(t,this.size,3);n.uniform3fv(this.addr,e)}function lb(n,t){let e=ma(t,this.size,4);n.uniform4fv(this.addr,e)}function cb(n,t){let e=ma(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ub(n,t){let e=ma(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hb(n,t){let e=ma(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function db(n,t){n.uniform1iv(this.addr,t)}function fb(n,t){n.uniform2iv(this.addr,t)}function pb(n,t){n.uniform3iv(this.addr,t)}function mb(n,t){n.uniform4iv(this.addr,t)}function gb(n,t){n.uniform1uiv(this.addr,t)}function _b(n,t){n.uniform2uiv(this.addr,t)}function yb(n,t){n.uniform3uiv(this.addr,t)}function xb(n,t){n.uniform4uiv(this.addr,t)}function vb(n,t,e){let i=this.cache,s=t.length,r=su(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),an(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=sd:a=pm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function bb(n,t,e){let i=this.cache,s=t.length,r=su(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gm,r[a])}function Mb(n,t,e){let i=this.cache,s=t.length,r=su(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||_m,r[a])}function Sb(n,t,e){let i=this.cache,s=t.length,r=su(e,s);rn(i,r)||(n.uniform1iv(this.addr,r),an(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mm,r[a])}function wb(n){switch(n){case 5126:return rb;case 35664:return ab;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return fb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return yb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Sb}}var rd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sb(e.type)}},ad=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wb(e.type)}},od=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},nd=/(\w+)(\])?(\[|\.)?/g;function tm(n,t){n.seq.push(t),n.map[t.id]=t}function Ab(n,t,e){let i=n.name,s=i.length;for(nd.lastIndex=0;;){let r=nd.exec(i),a=nd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){tm(e,c===void 0?new rd(o,n,t):new ad(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new od(o),tm(e,h)),e=h}}}var fa=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ab(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function em(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Eb=37297,Tb=0;function Rb(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var nm=new ce;function Cb(n){_e._getMatrix(nm,_e.workingColorSpace,n);let t=`mat3( ${nm.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(n)){case Za:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function im(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rb(n.getShaderSource(t),o)}else return r}function Ib(n,t){let e=Cb(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Pb={[Ah]:"Linear",[Eh]:"Reinhard",[Th]:"Cineon",[Rh]:"ACESFilmic",[Ih]:"AgX",[Eo]:"Neutral",[Ch]:"Custom"};function kb(n,t){let e=Pb[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tu=new C;function Lb(){_e.getLuminanceCoefficients(tu);let n=tu.x.toFixed(4),t=tu.y.toFixed(4),e=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function Nb(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ub(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Fo(n){return n!==""}function sm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(n){return n.replace(Ob,Bb)}var Fb=new Map;function Bb(n,t){let e=fe[t];if(e===void 0){let i=Fb.get(t);if(i!==void 0)e=fe[i],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ld(e)}var zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function am(n){return n.replace(zb,Vb)}function Vb(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function om(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var Gb={[Ao]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function Hb(n){return Gb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wb={[Ls]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function Xb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Wb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yb={[sr]:"ENVMAP_MODE_REFRACTION"};function $b(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qb={[uc]:"ENVMAP_BLENDING_MULTIPLY",[vp]:"ENVMAP_BLENDING_MIX",[bp]:"ENVMAP_BLENDING_ADD"};function Zb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qb[n.combine]||"ENVMAP_BLENDING_NONE"}function Kb(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Jb(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Hb(e),c=Xb(e),u=$b(e),h=Zb(e),d=Kb(e),f=Db(e),m=Nb(r),x=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Fo).join(`
`),p.length>0&&(p+=`
`)):(g=[om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),p=[om(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?fe.tonemapping_pars_fragment:"",e.toneMapping!==xi?kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Ib("linearToOutputTexel",e.outputColorSpace),Lb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),a=ld(a),a=sm(a,e),a=rm(a,e),o=ld(o),o=sm(o,e),o=rm(o,e),a=am(a),o=am(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+g+a,M=b+p+o,A=em(s,s.VERTEX_SHADER,w),y=em(s,s.FRAGMENT_SHADER,M);s.attachShader(x,A),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(L){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(y)||"",z=N.trim(),Z=B.trim(),q=k.trim(),ot=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,y);else{let nt=im(s,A,"vertex"),O=im(s,y,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+nt+`
`+O)}else z!==""?se("WebGLProgram: Program Info Log:",z):(Z===""||q==="")&&(K=!1);K&&(L.diagnostics={runnable:ot,programLog:z,vertexShader:{log:Z,prefix:g},fragmentShader:{log:q,prefix:p}})}s.deleteShader(A),s.deleteShader(y),v=new fa(s,x),T=Ub(s,x)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,Eb)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=y,this}var jb=0,cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ud(t),e.set(t,i)),i}},ud=class{constructor(t){this.id=jb++,this.code=t,this.usedTimes=0}};function Qb(n){return n===Ns||n===Lo||n===Do}function tM(n,t,e,i,s,r){let a=new qr,o=new cd,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,I,L,N,B){let k=L.fog,z=N.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ot=t.get(v.envMap||Z,q),K=ot&&ot.mapping===To?ot.image.height:null,nt=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&se("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let O=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=O!==void 0?O.length:0,ht=0;z.morphAttributes.position!==void 0&&(ht=1),z.morphAttributes.normal!==void 0&&(ht=2),z.morphAttributes.color!==void 0&&(ht=3);let qt,ee,ne,Q;if(nt){let Ie=Bi[nt];qt=Ie.vertexShader,ee=Ie.fragmentShader}else{qt=v.vertexShader,ee=v.fragmentShader;let Ie=o.getVertexShaderStage(v),X=o.getFragmentShaderStage(v);o.update(v,Ie,X),ne=Ie.id,Q=X.id}let it=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Ht=N.isInstancedMesh===!0,St=N.isBatchedMesh===!0,Wt=!!v.map,ge=!!v.matcap,H=!!ot,j=!!v.aoMap,Y=!!v.lightMap,st=!!v.bumpMap&&v.wireframe===!1,lt=!!v.normalMap,_t=!!v.displacementMap,Pt=!!v.emissiveMap,Ot=!!v.metalnessMap,ft=!!v.roughnessMap,P=v.anisotropy>0,le=v.clearcoat>0,jt=v.dispersion>0,R=v.retroreflectivity>0,_=v.iridescence>0,F=v.sheen>0,G=v.transmission>0,J=P&&!!v.anisotropyMap,pt=le&&!!v.clearcoatMap,yt=le&&!!v.clearcoatNormalMap,tt=le&&!!v.clearcoatRoughnessMap,at=_&&!!v.iridescenceMap,wt=_&&!!v.iridescenceThicknessMap,Xt=F&&!!v.sheenColorMap,At=F&&!!v.sheenRoughnessMap,bt=!!v.specularMap,Yt=!!v.specularColorMap,Qt=!!v.specularIntensityMap,re=G&&!!v.transmissionMap,U=G&&!!v.thicknessMap,xt=!!v.gradientMap,rt=!!v.alphaMap,Mt=v.alphaTest>0,Rt=!!v.alphaHash,ct=!!v.extensions,Vt=xi;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Vt=n.toneMapping);let Ft={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:qt,fragmentShader:ee,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:St,batchingColor:St&&N._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&N.instanceColor!==null,instancingMorph:Ht&&N.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Wt,matcap:ge,envMap:H,envMapMode:H&&ot.mapping,envMapCubeUVHeight:K,aoMap:j,lightMap:Y,bumpMap:st,normalMap:lt,displacementMap:_t,emissiveMap:Pt,normalMapObjectSpace:lt&&v.normalMapType===wp,normalMapTangentSpace:lt&&v.normalMapType===No,packedNormalMap:lt&&v.normalMapType===No&&Qb(v.normalMap.format),metalnessMap:Ot,roughnessMap:ft,anisotropy:P,anisotropyMap:J,clearcoat:le,clearcoatMap:pt,clearcoatNormalMap:yt,clearcoatRoughnessMap:tt,dispersion:jt,retroreflection:R,iridescence:_,iridescenceMap:at,iridescenceThicknessMap:wt,sheen:F,sheenColorMap:Xt,sheenRoughnessMap:At,specularMap:bt,specularColorMap:Yt,specularIntensityMap:Qt,transmission:G,transmissionMap:re,thicknessMap:U,gradientMap:xt,opaque:v.transparent===!1&&v.blending===la&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:Mt,alphaHash:Rt,combine:v.combine,mapUv:Wt&&m(v.map.channel),aoMapUv:j&&m(v.aoMap.channel),lightMapUv:Y&&m(v.lightMap.channel),bumpMapUv:st&&m(v.bumpMap.channel),normalMapUv:lt&&m(v.normalMap.channel),displacementMapUv:_t&&m(v.displacementMap.channel),emissiveMapUv:Pt&&m(v.emissiveMap.channel),metalnessMapUv:Ot&&m(v.metalnessMap.channel),roughnessMapUv:ft&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:pt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:yt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:At&&m(v.sheenRoughnessMap.channel),specularMapUv:bt&&m(v.specularMap.channel),specularColorMapUv:Yt&&m(v.specularColorMap.channel),specularIntensityMapUv:Qt&&m(v.specularIntensityMap.channel),transmissionMapUv:re&&m(v.transmissionMap.channel),thicknessMapUv:U&&m(v.thicknessMap.channel),alphaMapUv:rt&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(lt||P),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Wt||rt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:ht,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Wt&&v.map.isVideoTexture===!0&&_e.getTransfer(v.map.colorSpace)===Ce,decodeVideoTextureEmissive:Pt&&v.emissiveMap.isVideoTexture===!0&&_e.getTransfer(v.emissiveMap.colorSpace)===Ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yi,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(T,v),b(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){let T=f[v.type],I;if(T){let L=Bi[T];I=Gp.clone(L.uniforms)}else I=v.uniforms;return I}function M(v,T){let I=u.get(T);return I!==void 0?++I.usedTimes:(I=new Jb(n,T,v,s),c.push(I),u.set(T,I)),I}function A(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function y(v){o.remove(v)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:M,releaseProgram:A,releaseShaderCache:y,programs:c,dispose:E}}function eM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function nM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function lm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},n[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=a(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=g,b.group=p),t++,b}function l(d,f,m,x,g,p,b){b.reversedDepth===!0&&(g=-g);let w=o(d,f,m,x,g,p);m.transmission>0?i.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(d,f,m,x,g,p){let b=o(d,f,m,x,g,p);m.transmission>0?i.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function u(d,f){e.length>1&&e.sort(d||nM),i.length>1&&i.sort(f||lm),s.length>1&&s.sort(f||lm)}function h(){for(let d=t,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function iM(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new cm,n.set(i,[a])):s>=r.length?(a=new cm,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function sM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Gt};break;case"SpotLight":e={position:new C,direction:new C,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function rM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var aM=0;function oM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function lM(n){let t=new sM,e=rM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new Me,a=new Me;function o(c){let u=0,h=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,w=0,M=0,A=0,y=0,E=0,v=0,T=0,I=0;c.sort(oM);for(let N=0,B=c.length;N<B;N++){let k=c[N],z=k.color,Z=k.intensity,q=k.distance,ot=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ns?ot=k.shadow.map.texture:ot=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=z.r*Z,h+=z.g*Z,d+=z.b*Z;else if(k.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(k.sh.coefficients[K],Z);I++}else if(k.isSunLight){let K=t.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let nt=k.shadow,O=e.get(k);O.shadowIntensity=nt.intensity,O.shadowBias=nt.bias,O.shadowNormalBias=nt.normalBias,O.shadowRadius=nt.radius,O.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[m]=O,i.sunShadowMap[m]=ot;let dt=nt.getViewportCount();for(let ht=0;ht<dt;ht++)i.sunShadowMatrix[x+ht]=nt.getMatrix(ht),i.sunShadowCascade[x+ht]=nt._cascadeData[ht];x+=dt,m++}i.sun[f]=K,f++}else if(k.isDirectionalLight){let K=t.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let nt=k.shadow,O=e.get(k);O.shadowIntensity=nt.intensity,O.shadowBias=nt.bias,O.shadowNormalBias=nt.normalBias,O.shadowRadius=nt.radius,O.shadowMapSize=nt.mapSize,i.directionalShadow[g]=O,i.directionalShadowMap[g]=ot,i.directionalShadowMatrix[g]=k.shadow.matrix,A++}i.directional[g]=K,g++}else if(k.isSpotLight){let K=t.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(z).multiplyScalar(Z),K.distance=q,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,i.spot[b]=K;let nt=k.shadow;if(k.map&&(i.spotLightMap[v]=k.map,v++,nt.updateMatrices(k),k.castShadow&&T++),i.spotLightMatrix[b]=nt.matrix,k.castShadow){let O=e.get(k);O.shadowIntensity=nt.intensity,O.shadowBias=nt.bias,O.shadowNormalBias=nt.normalBias,O.shadowRadius=nt.radius,O.shadowMapSize=nt.mapSize,i.spotShadow[b]=O,i.spotShadowMap[b]=ot,E++}b++}else if(k.isRectAreaLight){let K=t.get(k);K.color.copy(z).multiplyScalar(Z),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),i.rectArea[w]=K,w++}else if(k.isPointLight){let K=t.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){let nt=k.shadow,O=e.get(k);O.shadowIntensity=nt.intensity,O.shadowBias=nt.bias,O.shadowNormalBias=nt.normalBias,O.shadowRadius=nt.radius,O.shadowMapSize=nt.mapSize,O.shadowCameraNear=nt.camera.near,O.shadowCameraFar=nt.camera.far,i.pointShadow[p]=O,i.pointShadowMap[p]=ot,i.pointShadowMatrix[p]=k.shadow.matrix,y++}i.point[p]=K,p++}else if(k.isHemisphereLight){let K=t.get(k);K.skyColor.copy(k.color).multiplyScalar(Z),K.groundColor.copy(k.groundColor).multiplyScalar(Z),i.hemi[M]=K,M++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let L=i.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==b||L.rectAreaLength!==w||L.hemiLength!==M||L.numSunShadows!==m||L.numDirectionalShadows!==A||L.numPointShadows!==y||L.numSpotShadows!==E||L.numSpotMaps!==v||L.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=g,i.spot.length=b,i.rectArea.length=w,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=b,L.rectAreaLength=w,L.hemiLength=M,L.numSunShadows=m,L.numDirectionalShadows=A,L.numPointShadows=y,L.numSpotShadows=E,L.numSpotMaps=v,L.numLightProbes=I,i.version=aM++)}function l(c,u){let h=0,d=0,f=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let M=c[b];if(M.isSunLight){let A=i.sun[h];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),h++}else if(M.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(M.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function um(n){let t=new lM(n),e=[],i=[],s=[];function r(d){h.camera=d,e.length=0,i.length=0,s.length=0}function a(d){e.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cM(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new um(n),t.set(s,[o])):r>=a.length?(o=new um(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`,dM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],fM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],hm=new Me,Oo=new C,id=new C;function pM(n,t,e){let i=new jr,s=new et,r=new et,a=new Ve,o=new ql,l=new Zl,c={},u=e.maxTextureSize,h={[ks]:gn,[gn]:ks,[yi]:yi},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:uM,fragmentShader:hM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new qe;m.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let p=this.type;this.render=function(y,E,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===cc&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ni),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==this.type;B&&E.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,z=y.length;k<z;k++){let Z=y[k],q=Z.shadow;if(q===void 0){se("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ot=q.getFrameExtents();s.multiply(ot),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===oa){if(Z.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Pn(s.x,s.y,{format:Ns,type:bi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Ms(s.x,s.y,Qn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Li,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=fn,q.map.depthTexture.magFilter=fn}else Z.isPointLight?(q.map=new eu(s.x),q.map.depthTexture=new Vl(s.x,vi)):(q.map=new Pn(s.x,s.y),q.map.depthTexture=new Ms(s.x,s.y,vi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Li,this.type===Ao?(q.map.depthTexture.compareFunction=K?jc:Jc,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=fn,q.map.depthTexture.magFilter=fn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let nt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,v);for(let O=0;O<nt;O++){let dt=q.getCamera(O);if(Z.isPointLight){let ht=q.camera,qt=q.matrix,ee=Z.distance||ht.far;ee!==ht.far&&(ht.far=ee,ht.updateProjectionMatrix()),Oo.setFromMatrixPosition(Z.matrixWorld),ht.position.copy(Oo),id.copy(ht.position),id.add(dM[O]),ht.up.copy(fM[O]),ht.lookAt(id),ht.updateMatrixWorld(),qt.makeTranslation(-Oo.x,-Oo.y,-Oo.z),hm.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),q._frustum.setFromProjectionMatrix(hm,ht.coordinateSystem,ht.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,O),n.clear();else{O===0&&(n.setRenderTarget(q.map),n.clear());let ht=q.getViewport(O);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),N.viewport(a)}i=q.getFrustum(O),M(E,v,dt,Z,this.type)}q.isPointLightShadow!==!0&&this.type===oa&&b(q,v),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,I,L)};function b(y,E){let v=t.update(x);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new Pn(s.x,s.y,{format:Ns,type:bi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,v,d,x,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,v,f,x,null)}function w(y,E,v,T){let I=null,L=v.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)I=L;else if(I=v.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let N=I.uuid,B=E.uuid,k=c[N];k===void 0&&(k={},c[N]=k);let z=k[B];z===void 0&&(z=I.clone(),k[B]=z,E.addEventListener("dispose",A)),I=z}if(I.visible=E.visible,I.wireframe=E.wireframe,T===oa?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:h[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=n.properties.get(I);N.light=v}return I}function M(y,E,v,T,I){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&I===oa)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld);let B=t.update(y),k=y.material;if(Array.isArray(k)){let z=B.groups;for(let Z=0,q=z.length;Z<q;Z++){let ot=z[Z],K=k[ot.materialIndex];if(K&&K.visible){let nt=w(y,K,T,I);y.onBeforeShadow(n,y,E,v,B,nt,ot),n.renderBufferDirect(v,null,B,nt,y,ot),y.onAfterShadow(n,y,E,v,B,nt,ot)}}}else if(k.visible){let z=w(y,k,T,I);y.onBeforeShadow(n,y,E,v,B,z,null),n.renderBufferDirect(v,null,B,z,y,null),y.onAfterShadow(n,y,E,v,B,z,null)}}let N=y.children;for(let B=0,k=N.length;B<k;B++)M(N[B],E,v,T,I)}function A(y){y.target.removeEventListener("dispose",A);for(let v in c){let T=c[v],I=y.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function mM(n,t){function e(){let U=!1,xt=new Ve,rt=null,Mt=new Ve(0,0,0,0);return{setMask:function(Rt){rt!==Rt&&!U&&(n.colorMask(Rt,Rt,Rt,Rt),rt=Rt)},setLocked:function(Rt){U=Rt},setClear:function(Rt,ct,Vt,Ft,Ie){Ie===!0&&(Rt*=Ft,ct*=Ft,Vt*=Ft),xt.set(Rt,ct,Vt,Ft),Mt.equals(xt)===!1&&(n.clearColor(Rt,ct,Vt,Ft),Mt.copy(xt))},reset:function(){U=!1,rt=null,Mt.set(-1,0,0,0)}}}function i(){let U=!1,xt=!1,rt=null,Mt=null,Rt=null;return{setReversed:function(ct){if(xt!==ct){let Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),xt=ct;let Ft=Rt;Rt=null,this.setClear(Ft)}},getReversed:function(){return xt},setTest:function(ct){ct?it(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!U&&(n.depthMask(ct),rt=ct)},setFunc:function(ct){if(xt&&(ct=Np[ct]),Mt!==ct){switch(ct){case Cl:n.depthFunc(n.NEVER);break;case Il:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case Gr:n.depthFunc(n.LEQUAL);break;case kl:n.depthFunc(n.EQUAL);break;case Ll:n.depthFunc(n.GEQUAL);break;case Dl:n.depthFunc(n.GREATER);break;case Nl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=ct}},setLocked:function(ct){U=ct},setClear:function(ct){Rt!==ct&&(Rt=ct,xt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){U=!1,rt=null,Mt=null,Rt=null,xt=!1}}}function s(){let U=!1,xt=null,rt=null,Mt=null,Rt=null,ct=null,Vt=null,Ft=null,Ie=null;return{setTest:function(X){U||(X?it(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(X){xt!==X&&!U&&(n.stencilMask(X),xt=X)},setFunc:function(X,ut,Et){(rt!==X||Mt!==ut||Rt!==Et)&&(n.stencilFunc(X,ut,Et),rt=X,Mt=ut,Rt=Et)},setOp:function(X,ut,Et){(ct!==X||Vt!==ut||Ft!==Et)&&(n.stencilOp(X,ut,Et),ct=X,Vt=ut,Ft=Et)},setLocked:function(X){U=X},setClear:function(X){Ie!==X&&(n.clearStencil(X),Ie=X)},reset:function(){U=!1,xt=null,rt=null,Mt=null,Rt=null,ct=null,Vt=null,Ft=null,Ie=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,w=null,M=null,A=null,y=null,E=null,v=new Gt(0,0,0),T=0,I=!1,L=null,N=null,B=null,k=null,z=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ot=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=ot>=1):K.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=ot>=2);let nt=null,O={},dt=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),qt=new Ve().fromArray(dt),ee=new Ve().fromArray(ht);function ne(U,xt,rt,Mt){let Rt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(U,ct),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<rt;Vt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(xt+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return ct}let Q={};Q[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(n.DEPTH_TEST),a.setFunc(Gr),st(!1),lt(vh),it(n.CULL_FACE),j(Ni);function it(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function gt(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ht(U,xt){return d[U]!==xt?(n.bindFramebuffer(U,xt),d[U]=xt,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xt),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function St(U,xt){let rt=m,Mt=!1;if(U){rt=f.get(xt),rt===void 0&&(rt=[],f.set(xt,rt));let Rt=U.textures;if(rt.length!==Rt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Vt=Rt.length;ct<Vt;ct++)rt[ct]=n.COLOR_ATTACHMENT0+ct;rt.length=Rt.length,Mt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(rt)}function Wt(U){return x!==U?(n.useProgram(U),x=U,!0):!1}let ge={[ir]:n.FUNC_ADD,[ip]:n.FUNC_SUBTRACT,[sp]:n.FUNC_REVERSE_SUBTRACT};ge[rp]=n.MIN,ge[ap]=n.MAX;let H={[op]:n.ZERO,[lp]:n.ONE,[cp]:n.SRC_COLOR,[Sh]:n.SRC_ALPHA,[mp]:n.SRC_ALPHA_SATURATE,[fp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[up]:n.ONE_MINUS_SRC_COLOR,[wh]:n.ONE_MINUS_SRC_ALPHA,[pp]:n.ONE_MINUS_DST_COLOR,[dp]:n.ONE_MINUS_DST_ALPHA,[gp]:n.CONSTANT_COLOR,[_p]:n.ONE_MINUS_CONSTANT_COLOR,[yp]:n.CONSTANT_ALPHA,[xp]:n.ONE_MINUS_CONSTANT_ALPHA};function j(U,xt,rt,Mt,Rt,ct,Vt,Ft,Ie,X){if(U===Ni){g===!0&&(gt(n.BLEND),g=!1);return}if(g===!1&&(it(n.BLEND),g=!0),U!==np){if(U!==p||X!==I){if((b!==ir||A!==ir)&&(n.blendEquation(n.FUNC_ADD),b=ir,A=ir),X)switch(U){case la:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFunc(n.ONE,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",U);break}else switch(U){case la:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bh:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",U);break}w=null,M=null,y=null,E=null,v.set(0,0,0),T=0,p=U,I=X}return}Rt=Rt||xt,ct=ct||rt,Vt=Vt||Mt,(xt!==b||Rt!==A)&&(n.blendEquationSeparate(ge[xt],ge[Rt]),b=xt,A=Rt),(rt!==w||Mt!==M||ct!==y||Vt!==E)&&(n.blendFuncSeparate(H[rt],H[Mt],H[ct],H[Vt]),w=rt,M=Mt,y=ct,E=Vt),(Ft.equals(v)===!1||Ie!==T)&&(n.blendColor(Ft.r,Ft.g,Ft.b,Ie),v.copy(Ft),T=Ie),p=U,I=!1}function Y(U,xt){U.side===yi?gt(n.CULL_FACE):it(n.CULL_FACE);let rt=U.side===gn;xt&&(rt=!rt),st(rt),U.blending===la&&U.transparent===!1?j(Ni):j(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Mt=U.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){L!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),L=U)}function lt(U){U!==tp?(it(n.CULL_FACE),U!==N&&(U===vh?n.cullFace(n.BACK):U===ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),N=U}function _t(U){U!==B&&(q&&n.lineWidth(U),B=U)}function Pt(U,xt,rt){U?(it(n.POLYGON_OFFSET_FILL),(k!==xt||z!==rt)&&(k=xt,z=rt,a.getReversed()&&(xt=-xt),n.polygonOffset(xt,rt))):gt(n.POLYGON_OFFSET_FILL)}function Ot(U){U?it(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function ft(U){U===void 0&&(U=n.TEXTURE0+Z-1),nt!==U&&(n.activeTexture(U),nt=U)}function P(U,xt,rt){rt===void 0&&(nt===null?rt=n.TEXTURE0+Z-1:rt=nt);let Mt=O[rt];Mt===void 0&&(Mt={type:void 0,texture:void 0},O[rt]=Mt),(Mt.type!==U||Mt.texture!==xt)&&(nt!==rt&&(n.activeTexture(rt),nt=rt),n.bindTexture(U,xt||Q[U]),Mt.type=U,Mt.texture=xt)}function le(){let U=O[nt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function jt(){try{n.compressedTexImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function _(){try{n.texSubImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function F(){try{n.texSubImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function pt(){try{n.texStorage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function yt(){try{n.texStorage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function tt(){try{n.texImage2D(...arguments)}catch(U){ie("WebGLState:",U)}}function at(){try{n.texImage3D(...arguments)}catch(U){ie("WebGLState:",U)}}function wt(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function Xt(U,xt){h[U]!==xt&&(n.pixelStorei(U,xt),h[U]=xt)}function At(U){qt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),qt.copy(U))}function bt(U){ee.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Yt(U,xt){let rt=c.get(xt);rt===void 0&&(rt=new WeakMap,c.set(xt,rt));let Mt=rt.get(U);Mt===void 0&&(Mt=n.getUniformBlockIndex(xt,U.name),rt.set(U,Mt))}function Qt(U,xt){let Mt=c.get(xt).get(U);l.get(xt)!==Mt&&(n.uniformBlockBinding(xt,Mt,U.__bindingPointIndex),l.set(xt,Mt))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},nt=null,O={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,w=null,M=null,A=null,y=null,E=null,v=new Gt(0,0,0),T=0,I=!1,L=null,N=null,B=null,k=null,z=null,qt.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:gt,bindFramebuffer:Ht,drawBuffers:St,useProgram:Wt,setBlending:j,setMaterial:Y,setFlipSided:st,setCullFace:lt,setLineWidth:_t,setPolygonOffset:Pt,setScissorTest:Ot,activeTexture:ft,bindTexture:P,unbindTexture:le,compressedTexImage2D:jt,compressedTexImage3D:R,texImage2D:tt,texImage3D:at,pixelStorei:Xt,getParameter:wt,updateUBOMapping:Yt,uniformBlockBinding:Qt,texStorage2D:pt,texStorage3D:yt,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:At,viewport:bt,reset:re}}function gM(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return m?new OffscreenCanvas(R,_):Ka("canvas")}function g(R,_,F){let G=1,J=jt(R);if((J.width>F||J.height>F)&&(G=F/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pt=Math.floor(G*J.width),yt=Math.floor(G*J.height);d===void 0&&(d=x(pt,yt));let tt=_?x(pt,yt):d;return tt.width=pt,tt.height=yt,tt.getContext("2d").drawImage(R,0,0,pt,yt),se("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+pt+"x"+yt+")."),tt}else return"data"in R&&se("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,_,F,G,J,pt=!1){if(R!==null){if(n[R]!==void 0)return n[R];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let yt;G&&(yt=t.get("EXT_texture_norm16"),yt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=_;if(_===n.RED&&(F===n.FLOAT&&(tt=n.R32F),F===n.HALF_FLOAT&&(tt=n.R16F),F===n.UNSIGNED_BYTE&&(tt=n.R8),F===n.UNSIGNED_SHORT&&yt&&(tt=yt.R16_EXT),F===n.SHORT&&yt&&(tt=yt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.R8UI),F===n.UNSIGNED_SHORT&&(tt=n.R16UI),F===n.UNSIGNED_INT&&(tt=n.R32UI),F===n.BYTE&&(tt=n.R8I),F===n.SHORT&&(tt=n.R16I),F===n.INT&&(tt=n.R32I)),_===n.RG&&(F===n.FLOAT&&(tt=n.RG32F),F===n.HALF_FLOAT&&(tt=n.RG16F),F===n.UNSIGNED_BYTE&&(tt=n.RG8),F===n.UNSIGNED_SHORT&&yt&&(tt=yt.RG16_EXT),F===n.SHORT&&yt&&(tt=yt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.RG8UI),F===n.UNSIGNED_SHORT&&(tt=n.RG16UI),F===n.UNSIGNED_INT&&(tt=n.RG32UI),F===n.BYTE&&(tt=n.RG8I),F===n.SHORT&&(tt=n.RG16I),F===n.INT&&(tt=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),F===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),F===n.UNSIGNED_INT&&(tt=n.RGB32UI),F===n.BYTE&&(tt=n.RGB8I),F===n.SHORT&&(tt=n.RGB16I),F===n.INT&&(tt=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),F===n.UNSIGNED_INT&&(tt=n.RGBA32UI),F===n.BYTE&&(tt=n.RGBA8I),F===n.SHORT&&(tt=n.RGBA16I),F===n.INT&&(tt=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_SHORT&&yt&&(tt=yt.RGB16_EXT),F===n.SHORT&&yt&&(tt=yt.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),_===n.RGBA){let at=pt?Za:_e.getTransfer(J);F===n.FLOAT&&(tt=n.RGBA32F),F===n.HALF_FLOAT&&(tt=n.RGBA16F),F===n.UNSIGNED_BYTE&&(tt=at===Ce?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&yt&&(tt=yt.RGBA16_EXT),F===n.SHORT&&yt&&(tt=yt.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(R,_){let F;return R?_===null||_===vi||_===ua?F=n.DEPTH24_STENCIL8:_===Qn?F=n.DEPTH32F_STENCIL8:_===ca&&(F=n.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vi||_===ua?F=n.DEPTH_COMPONENT24:_===Qn?F=n.DEPTH_COMPONENT32F:_===ca&&(F=n.DEPTH_COMPONENT16),F}function y(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function E(R){let _=R.target;_.removeEventListener("dispose",E),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&h.delete(_)}function v(R){let _=R.target;_.removeEventListener("dispose",v),L(_)}function T(R){let _=i.get(R);if(_.__webglInit===void 0)return;let F=R.source,G=f.get(F);if(G){let J=G[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(R),Object.keys(G).length===0&&f.delete(F)}i.remove(R)}function I(R){let _=i.get(R);n.deleteTexture(_.__webglTexture);let F=R.source,G=f.get(F);delete G[_.__cacheKey],a.memory.textures--}function L(R){let _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let J=0;J<_.__webglFramebuffer[G].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[G][J]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=R.textures;for(let G=0,J=F.length;G<J;G++){let pt=i.get(F[G]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),a.memory.textures--),i.remove(F[G])}i.remove(R)}let N=0;function B(){N=0}function k(){return N}function z(R){N=R}function Z(){let R=N;return R>=s.maxTextures&&se("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function q(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function ot(R,_){let F=i.get(R);if(R.isVideoTexture&&P(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){let G=R.image;if(G===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(F,R,_);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function K(R,_){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){gt(F,R,_);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function nt(R,_){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){gt(F,R,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function O(R,_){let F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){Ht(F,R,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let dt={[Hr]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Ul]:n.MIRRORED_REPEAT},ht={[fn]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[Ro]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[fc]:n.LINEAR_MIPMAP_NEAREST,[Oi]:n.LINEAR_MIPMAP_LINEAR},qt={[Ep]:n.NEVER,[Pp]:n.ALWAYS,[Tp]:n.LESS,[Jc]:n.LEQUAL,[Rp]:n.EQUAL,[jc]:n.GEQUAL,[Cp]:n.GREATER,[Ip]:n.NOTEQUAL};function ee(R,_){if(_.type===Qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===fc||_.magFilter===Ro||_.magFilter===Oi||_.minFilter===sn||_.minFilter===fc||_.minFilter===Ro||_.minFilter===Oi)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,dt[_.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,dt[_.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,dt[_.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ht[_.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,qt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fn||_.minFilter!==Ro&&_.minFilter!==Oi||_.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ne(R,_){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",E));let G=_.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let pt=q(_);if(pt!==R.__cacheKey){J[pt]===void 0&&(J[pt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[pt].usedTimes++;let yt=J[R.__cacheKey];yt!==void 0&&(J[R.__cacheKey].usedTimes--,yt.usedTimes===0&&I(_)),R.__cacheKey=pt,R.__webglTexture=J[pt].texture}return F}function Q(R,_,F){return Math.floor(Math.floor(R/F)/_)}function it(R,_,F,G){let pt=R.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{pt.sort((Xt,At)=>Xt.start-At.start);let yt=0;for(let Xt=1;Xt<pt.length;Xt++){let At=pt[yt],bt=pt[Xt],Yt=At.start+At.count,Qt=Q(bt.start,_.width,4),re=Q(At.start,_.width,4);bt.start<=Yt+1&&Qt===re&&Q(bt.start+bt.count-1,_.width,4)===Qt?At.count=Math.max(At.count,bt.start+bt.count-At.start):(++yt,pt[yt]=bt)}pt.length=yt+1;let tt=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),wt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Xt=0,At=pt.length;Xt<At;Xt++){let bt=pt[Xt],Yt=Math.floor(bt.start/4),Qt=Math.ceil(bt.count/4),re=Yt%_.width,U=Math.floor(Yt/_.width),xt=Qt,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,re),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,re,U,xt,rt,F,G,_.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,tt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function gt(R,_,F){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let J=ne(R,_),pt=_.source;e.bindTexture(G,R.__webglTexture,n.TEXTURE0+F);let yt=i.get(pt);if(pt.version!==yt.__version||J===!0){if(e.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let rt=_e.getPrimaries(_e.workingColorSpace),Mt=_.colorSpace===Mi?null:_e.getPrimaries(_.colorSpace),Rt=_.colorSpace===Mi||rt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let at=g(_.image,!1,s.maxTextureSize);at=le(_,at);let wt=r.convert(_.format,_.colorSpace),Xt=r.convert(_.type),At=M(_.internalFormat,wt,Xt,_.normalized,_.colorSpace,_.isVideoTexture);ee(G,_);let bt,Yt=_.mipmaps,Qt=_.isVideoTexture!==!0,re=yt.__version===void 0||J===!0,U=pt.dataReady,xt=y(_,at);if(_.isDepthTexture)At=A(_.format===Ds,_.type),re&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,At,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,At,at.width,at.height,0,wt,Xt,null));else if(_.isDataTexture)if(Yt.length>0){Qt&&re&&e.texStorage2D(n.TEXTURE_2D,xt,At,Yt[0].width,Yt[0].height);for(let rt=0,Mt=Yt.length;rt<Mt;rt++)bt=Yt[rt],Qt?U&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,bt.width,bt.height,wt,Xt,bt.data):e.texImage2D(n.TEXTURE_2D,rt,At,bt.width,bt.height,0,wt,Xt,bt.data);_.generateMipmaps=!1}else Qt?(re&&e.texStorage2D(n.TEXTURE_2D,xt,At,at.width,at.height),U&&it(_,at,wt,Xt)):e.texImage2D(n.TEXTURE_2D,0,At,at.width,at.height,0,wt,Xt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Qt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,At,Yt[0].width,Yt[0].height,at.depth);for(let rt=0,Mt=Yt.length;rt<Mt;rt++)if(bt=Yt[rt],_.format!==ti)if(wt!==null)if(Qt){if(U)if(_.layerUpdates.size>0){let Rt=Yh(bt.width,bt.height,_.format,_.type);for(let ct of _.layerUpdates){let Vt=bt.data.subarray(ct*Rt/bt.data.BYTES_PER_ELEMENT,(ct+1)*Rt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,ct,bt.width,bt.height,1,wt,Vt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,bt.width,bt.height,at.depth,wt,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,At,bt.width,bt.height,at.depth,0,bt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,bt.width,bt.height,at.depth,wt,Xt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,At,bt.width,bt.height,at.depth,0,wt,Xt,bt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Qt&&re&&e.texStorage2D(n.TEXTURE_2D,xt,At,Yt[0].width,Yt[0].height);for(let rt=0,Mt=Yt.length;rt<Mt;rt++)bt=Yt[rt],_.format!==ti?wt!==null?Qt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,At,bt.width,bt.height,0,bt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?U&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,bt.width,bt.height,wt,Xt,bt.data):e.texImage2D(n.TEXTURE_2D,rt,At,bt.width,bt.height,0,wt,Xt,bt.data)}else if(_.isDataArrayTexture)if(Qt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,At,at.width,at.height,at.depth),U)if(_.layerUpdates.size>0){let rt=Yh(at.width,at.height,_.format,_.type);for(let Mt of _.layerUpdates){let Rt=at.data.subarray(Mt*rt/at.data.BYTES_PER_ELEMENT,(Mt+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,at.width,at.height,1,wt,Xt,Rt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,Xt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,at.width,at.height,at.depth,0,wt,Xt,at.data);else if(_.isData3DTexture)Qt?(re&&e.texStorage3D(n.TEXTURE_3D,xt,At,at.width,at.height,at.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,Xt,at.data)):e.texImage3D(n.TEXTURE_3D,0,At,at.width,at.height,at.depth,0,wt,Xt,at.data);else if(_.isFramebufferTexture){if(re)if(Qt)e.texStorage2D(n.TEXTURE_2D,xt,At,at.width,at.height);else{let rt=at.width,Mt=at.height;for(let Rt=0;Rt<xt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,At,rt,Mt,0,wt,Xt,null),rt>>=1,Mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),at.parentNode!==rt){rt.appendChild(at),h.add(_),rt.onpaint=Mt=>{let Rt=Mt.changedElements;for(let ct of h)Rt.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let Rt=n.RGBA,ct=n.RGBA,Vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,ct,Vt,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Qt&&re){let rt=jt(Yt[0]);e.texStorage2D(n.TEXTURE_2D,xt,At,rt.width,rt.height)}for(let rt=0,Mt=Yt.length;rt<Mt;rt++)bt=Yt[rt],Qt?U&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,wt,Xt,bt):e.texImage2D(n.TEXTURE_2D,rt,At,wt,Xt,bt);_.generateMipmaps=!1}else if(Qt){if(re){let rt=jt(at);e.texStorage2D(n.TEXTURE_2D,xt,At,rt.width,rt.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Xt,at)}else e.texImage2D(n.TEXTURE_2D,0,At,wt,Xt,at);p(_)&&b(G),yt.__version=pt.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ht(R,_,F){if(_.image.length!==6)return;let G=ne(R,_),J=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);let pt=i.get(J);if(J.version!==pt.__version||G===!0){e.activeTexture(n.TEXTURE0+F);let yt=_e.getPrimaries(_e.workingColorSpace),tt=_.colorSpace===Mi?null:_e.getPrimaries(_.colorSpace),at=_.colorSpace===Mi||yt===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let wt=_.isCompressedTexture||_.image[0].isCompressedTexture,Xt=_.image[0]&&_.image[0].isDataTexture,At=[];for(let ct=0;ct<6;ct++)!wt&&!Xt?At[ct]=g(_.image[ct],!0,s.maxCubemapSize):At[ct]=Xt?_.image[ct].image:_.image[ct],At[ct]=le(_,At[ct]);let bt=At[0],Yt=r.convert(_.format,_.colorSpace),Qt=r.convert(_.type),re=M(_.internalFormat,Yt,Qt,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,xt=pt.__version===void 0||G===!0,rt=J.dataReady,Mt=y(_,bt);ee(n.TEXTURE_CUBE_MAP,_);let Rt;if(wt){U&&xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,re,bt.width,bt.height);for(let ct=0;ct<6;ct++){Rt=At[ct].mipmaps;for(let Vt=0;Vt<Rt.length;Vt++){let Ft=Rt[Vt];_.format!==ti?Yt!==null?U?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Ft.width,Ft.height,Yt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,re,Ft.width,Ft.height,0,Ft.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,0,0,Ft.width,Ft.height,Yt,Qt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt,re,Ft.width,Ft.height,0,Yt,Qt,Ft.data)}}}else{if(Rt=_.mipmaps,U&&xt){Rt.length>0&&Mt++;let ct=jt(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,re,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Xt){U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,At[ct].width,At[ct].height,Yt,Qt,At[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,re,At[ct].width,At[ct].height,0,Yt,Qt,At[ct].data);for(let Vt=0;Vt<Rt.length;Vt++){let Ie=Rt[Vt].image[ct].image;U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Ie.width,Ie.height,Yt,Qt,Ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,re,Ie.width,Ie.height,0,Yt,Qt,Ie.data)}}else{U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Yt,Qt,At[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,re,Yt,Qt,At[ct]);for(let Vt=0;Vt<Rt.length;Vt++){let Ft=Rt[Vt];U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,0,0,Yt,Qt,Ft.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Vt+1,re,Yt,Qt,Ft.image[ct])}}}p(_)&&b(n.TEXTURE_CUBE_MAP),pt.__version=J.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function St(R,_,F,G,J,pt){let yt=r.convert(F.format,F.colorSpace),tt=r.convert(F.type),at=M(F.internalFormat,yt,tt,F.normalized,F.colorSpace),wt=i.get(_),Xt=i.get(F);if(Xt.__renderTarget=_,!wt.__hasExternalTextures){let At=Math.max(1,_.width>>pt),bt=Math.max(1,_.height>>pt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,pt,at,At,bt,_.depth,0,yt,tt,null):e.texImage2D(J,pt,at,At,bt,0,yt,tt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ft(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,J,Xt.__webglTexture,0,Ot(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,J,Xt.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(R,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),_.depthBuffer){let G=_.depthTexture,J=G&&G.isDepthTexture?G.type:null,pt=A(_.stencilBuffer,J),yt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot(_),pt,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot(_),pt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,R)}else{let G=_.textures;for(let J=0;J<G.length;J++){let pt=G[J],yt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),at=M(pt.internalFormat,yt,tt,pt.normalized,pt.colorSpace);ft(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot(_),at,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot(_),at,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,at,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(R,_,F){let G=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ee(n.TEXTURE_CUBE_MAP,_.depthTexture);let wt=r.convert(_.depthTexture.format),Xt=r.convert(_.depthTexture.type),At;_.depthTexture.format===Li?At=n.DEPTH_COMPONENT24:_.depthTexture.format===Ds&&(At=n.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,At,_.width,_.height,0,wt,Xt,null)}}else ot(_.depthTexture,0);let pt=J.__webglTexture,yt=Ot(_),tt=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,at=_.depthTexture.format===Ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Li)ft(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,tt,pt,0,yt):n.framebufferTexture2D(n.FRAMEBUFFER,at,tt,pt,0);else if(_.depthTexture.format===Ds)ft(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,tt,pt,0,yt):n.framebufferTexture2D(n.FRAMEBUFFER,at,tt,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(R){let _=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=G}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)ge(_.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?ge(_.__webglFramebuffer[0],R,0):ge(_.__webglFramebuffer,R,0)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Wt(_.__webglDepthbuffer[G],R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,pt)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Wt(_.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,pt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(R,_,F){let G=i.get(R);_!==void 0&&St(G.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&H(R)}function Y(R){let _=R.texture,F=i.get(R),G=i.get(_);R.addEventListener("dispose",v);let J=R.textures,pt=R.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),pt){F.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[tt]=[];for(let at=0;at<_.mipmaps.length;at++)F.__webglFramebuffer[tt][at]=n.createFramebuffer()}else F.__webglFramebuffer[tt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)F.__webglFramebuffer[tt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(yt)for(let tt=0,at=J.length;tt<at;tt++){let wt=i.get(J[tt]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ft(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let tt=0;tt<J.length;tt++){let at=J[tt];F.__webglColorRenderbuffer[tt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[tt]);let wt=r.convert(at.format,at.colorSpace),Xt=r.convert(at.type),At=M(at.internalFormat,wt,Xt,at.normalized,at.colorSpace,R.isXRRenderTarget===!0),bt=Ot(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,At,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,F.__webglColorRenderbuffer[tt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(F.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ee(n.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)St(F.__webglFramebuffer[tt][at],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at);else St(F.__webglFramebuffer[tt],R,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(_)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let tt=0,at=J.length;tt<at;tt++){let wt=J[tt],Xt=i.get(wt),At=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(At=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,Xt.__webglTexture),ee(At,wt),St(F.__webglFramebuffer,R,wt,n.COLOR_ATTACHMENT0+tt,At,0),p(wt)&&b(At)}e.unbindTexture()}else{let tt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(tt,G.__webglTexture),ee(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)St(F.__webglFramebuffer[at],R,_,n.COLOR_ATTACHMENT0,tt,at);else St(F.__webglFramebuffer,R,_,n.COLOR_ATTACHMENT0,tt,0);p(_)&&b(tt),e.unbindTexture()}R.depthBuffer&&H(R)}function st(R){let _=R.textures;for(let F=0,G=_.length;F<G;F++){let J=_[F];if(p(J)){let pt=w(R),yt=i.get(J).__webglTexture;e.bindTexture(pt,yt),b(pt),e.unbindTexture()}}}let lt=[],_t=[];function Pt(R){if(R.samples>0){if(ft(R)===!1){let _=R.textures,F=R.width,G=R.height,J=n.COLOR_BUFFER_BIT,pt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(R),tt=_.length>1;if(tt)for(let wt=0;wt<_.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let at=R.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let wt=0;wt<_.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),tt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[wt]);let Xt=i.get(_[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,J,n.NEAREST),l===!0&&(lt.length=0,_t.length=0,lt.push(n.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(lt.push(pt),_t.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),tt)for(let wt=0;wt<_.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[wt]);let Xt=i.get(_[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Ot(R){return Math.min(s.maxSamples,R.samples)}function ft(R){let _=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(R){let _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function le(R,_){let F=R.colorSpace,G=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==qa&&F!==Mi&&(_e.getTransfer(F)===Ce?(G!==ti||J!==Ln)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",F)),_}function jt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=z,this.setTexture2D=ot,this.setTexture2DArray=K,this.setTexture3D=nt,this.setTextureCube=O,this.rebindTextures=j,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _M(n,t){function e(i,s=Mi){let r,a=_e.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===mc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===Lh)return n.SHORT;if(i===ca)return n.UNSIGNED_SHORT;if(i===pc)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===Uh)return n.ALPHA;if(i===Oh)return n.RGB;if(i===ti)return n.RGBA;if(i===Li)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===_c)return n.RED;if(i===yc)return n.RED_INTEGER;if(i===Ns)return n.RG;if(i===xc)return n.RG_INTEGER;if(i===vc)return n.RGBA_INTEGER;if(i===Co||i===Io||i===Po||i===ko)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===Mc||i===Sc||i===wc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Ec||i===Tc||i===Rc||i===Cc||i===Lo||i===Ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ac||i===Ec)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rc)return r.COMPRESSED_R11_EAC;if(i===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Lo)return r.COMPRESSED_RG11_EAC;if(i===Ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pc||i===kc||i===Lc||i===Dc||i===Nc||i===Uc||i===Oc||i===Fc||i===Bc||i===zc||i===Vc||i===Gc||i===Hc||i===Wc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xc||i===Yc||i===$c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xc)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Zc||i===Do||i===Kc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===qc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
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

}`,hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Gn({vertexShader:yM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dd=class extends gi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new hd,p={},b=e.getContextAttributes(),w=null,M=null,A=[],y=[],E=new et,v=null,T=null,I=new mn;I.viewport=new Ve;let L=new mn;L.viewport=new Ve;let N=[I,L],B=new oc,k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let it=A[Q];return it===void 0&&(it=new Zr,A[Q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Q){let it=A[Q];return it===void 0&&(it=new Zr,A[Q]=it),it.getGripSpace()},this.getHand=function(Q){let it=A[Q];return it===void 0&&(it=new Zr,A[Q]=it),it.getHandSpace()};function Z(Q){let it=y.indexOf(Q.inputSource);if(it===-1)return;let gt=A[it];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,c||a),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ot);for(let Q=0;Q<A.length;Q++){let it=y[Q];it!==null&&(y[Q]=null,A[Q].disconnect(it))}k=null,z=null,g.reset();for(let Q in p)delete p[Q];if(t.setRenderTarget(w),f=null,d=null,h=null,s=null,M=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ot),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ht=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=b.stencil?Ds:Li,Ht=b.stencil?ua:vi);let Wt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Pn(d.textureWidth,d.textureHeight,{format:ti,type:Ln,depthTexture:new Ms(d.textureWidth,d.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let gt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Pn(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ot(Q){for(let it=0;it<Q.removed.length;it++){let gt=Q.removed[it],Ht=y.indexOf(gt);Ht>=0&&(y[Ht]=null,A[Ht].disconnect(gt))}for(let it=0;it<Q.added.length;it++){let gt=Q.added[it],Ht=y.indexOf(gt);if(Ht===-1){for(let Wt=0;Wt<A.length;Wt++)if(Wt>=y.length){y.push(gt),Ht=Wt;break}else if(y[Wt]===null){y[Wt]=gt,Ht=Wt;break}if(Ht===-1)break}let St=A[Ht];St&&St.connect(gt)}}let K=new C,nt=new C;function O(Q,it,gt){K.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(gt.matrixWorld);let Ht=K.distanceTo(nt),St=it.projectionMatrix.elements,Wt=gt.projectionMatrix.elements,ge=St[14]/(St[10]-1),H=St[14]/(St[10]+1),j=(St[9]+1)/St[5],Y=(St[9]-1)/St[5],st=(St[8]-1)/St[0],lt=(Wt[8]+1)/Wt[0],_t=ge*st,Pt=ge*lt,Ot=Ht/(-st+lt),ft=Ot*-st;if(it.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ft),Q.translateZ(Ot),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let P=ge+Ot,le=H+Ot,jt=_t-ft,R=Pt+(Ht-ft),_=j*H/le*P,F=Y*H/le*P;Q.projectionMatrix.makePerspective(jt,R,_,F,P,le),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,it){it===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(it.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let it=Q.near,gt=Q.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),B.near=L.near=I.near=it,B.far=L.far=I.far=gt,(k!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,z=B.far),B.layers.mask=Q.layers.mask|6,I.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let Ht=Q.parent,St=B.cameras;dt(B,Ht);for(let Wt=0;Wt<St.length;Wt++)dt(St[Wt],Ht);St.length===2?O(B,I,L):B.projectionMatrix.copy(I.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),ht(Q,B,Ht)};function ht(Q,it,gt){gt===null?Q.matrix.copy(it.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(it.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Q){return p[Q]};let qt=null;function ee(Q,it){if(u=it.getViewerPose(c||a),m=it,u!==null){let gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ht=!1;gt.length!==B.cameras.length&&(B.cameras.length=0,Ht=!0);for(let H=0;H<gt.length;H++){let j=gt[H],Y=null;if(f!==null)Y=f.getViewport(j);else{let lt=h.getViewSubImage(d,j);Y=lt.viewport,H===0&&(t.setRenderTargetTextures(M,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(M))}let st=N[H];st===void 0&&(st=new mn,st.layers.enable(H),st.viewport=new Ve,N[H]=st),st.matrix.fromArray(j.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(j.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Y.x,Y.y,Y.width,Y.height),H===0&&(B.matrix.copy(st.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ht===!0&&B.cameras.push(st)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let H=h.getDepthInformation(gt[0]);H&&H.isValid&&H.texture&&g.init(H,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),h=i.getBinding();for(let H=0;H<gt.length;H++){let j=gt[H].camera;if(j){let Y=p[j];Y||(Y=new ro,p[j]=Y);let st=h.getCameraImage(j);Y.sourceTexture=st}}}}for(let gt=0;gt<A.length;gt++){let Ht=y[gt],St=A[gt];Ht!==null&&St!==void 0&&St.update(Ht,it,c||a)}qt&&qt(Q,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),m=null}let ne=new dm;ne.setAnimationLoop(ee),this.setAnimationLoop=function(Q){qt=Q},this.dispose=function(){}}},vM=new Me,ym=new ce;ym.set(-1,0,0,0,1,0,0,0,1);function bM(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Hh(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===gn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===gn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),w=b.envMap,M=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ym),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function MM(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){let y=A.program;i.uniformBlockBinding(M,y)}function c(M,A){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",b));let E=A.program;i.updateUBOMapping(M,E);let v=t.render.frame;r[M.id]!==v&&(d(M),r[M.id]=v)}function u(M){let A=h();M.__bindingPointIndex=A;let y=n.createBuffer(),E=M.__size,v=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let A=s[M.id],y=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let v=0,T=y.length;v<T;v++){let I=y[v];if(Array.isArray(I))for(let L=0,N=I.length;L<N;L++)f(I[L],v,L,E);else f(I,v,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,A,y,E){if(x(M,A,y,E)===!0){let v=M.__offset,T=M.value;if(Array.isArray(T)){let I=0;for(let L=0;L<T.length;L++){let N=T[L],B=p(N);m(N,M.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,M.__data)}}function m(M,A,y){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,y)}function x(M,A,y,E){let v=M.value,T=A+"_"+y;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{let I=E[T];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(M){let A=M.uniforms,y=0,E=16;for(let T=0,I=A.length;T<I;T++){let L=Array.isArray(A[T])?A[T]:[A[T]];for(let N=0,B=L.length;N<B;N++){let k=L[N],z=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,q=z.length;Z<q;Z++){let ot=z[Z],K=p(ot),nt=y%E,O=nt%K.boundary,dt=nt+O;y+=O,dt!==0&&E-dt<K.storage&&(y+=E-dt),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=K.storage}}}let v=y%E;return v>0&&(y+=E-v),M.__size=y,M.__cache={},this}function p(M){let A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):se("WebGLRenderer: Unsupported uniform value type.",M),A}function b(M){let A=M.target;A.removeEventListener("dispose",b);let y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function w(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var SM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function wM(){return Fi===null&&(Fi=new no(SM,16,16,Ns,bi),Fi.name="DFG_LUT",Fi.minFilter=sn,Fi.magFilter=sn,Fi.wrapS=Pi,Fi.wrapT=Pi,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var nu=class{constructor(t={}){let{canvas:e=kp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ln}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let x=f,g=new Set([vc,xc,yc]),p=new Set([Ln,vi,ca,ua,mc,gc]),b=new Uint32Array(4),w=new Int32Array(4),M=new C,A=null,y=null,E=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,N=null,B=null,k=null,z=null;this._outputColorSpace=$e;let Z=0,q=0,ot=null,K=-1,nt=null,O=new Ve,dt=new Ve,ht=null,qt=new Gt(0),ee=0,ne=e.width,Q=e.height,it=1,gt=null,Ht=null,St=new Ve(0,0,ne,Q),Wt=new Ve(0,0,ne,Q),ge=!1,H=new jr,j=!1,Y=!1,st=new Me,lt=new C,_t=new Ve,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ot=!1;function ft(){return ot===null?it:1}let P=i;function le(S,D){return e.getContext(S,D)}let jt,R,_,F,G,J,pt,yt,tt,at,wt,Xt,At,bt,Yt,Qt,re,U,xt,rt,Mt,Rt,ct;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",ut,!1),P===null){let D="webgl2";if(P=le(D,S),P===null)throw le(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(S){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ie("WebGLRenderer: "+S.message),S}function Vt(){jt=new Pv(P),jt.init(),Mt=new _M(P,jt),R=new bv(P,jt,t,Mt),_=new mM(P,jt),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),B=P.createFramebuffer(),k=P.createFramebuffer(),z=P.createFramebuffer(),F=new Dv(P),G=new eM,J=new gM(P,jt,_,G,R,Mt,F),pt=new Iv(I),yt=new U_(P),Rt=new xv(P,yt),tt=new kv(P,yt,F,Rt),at=new Uv(P,tt,yt,Rt,F),U=new Nv(P,R,J),Yt=new Mv(G),wt=new tM(I,pt,jt,R,Rt,Yt),Xt=new bM(I,G),At=new iM,bt=new cM(jt),re=new yv(I,pt,_,at,m,l),Qt=new pM(I,at,R),ct=new MM(P,F,R,_),xt=new vv(P,jt,F),rt=new Lv(P,jt,F),F.programs=wt.programs,I.capabilities=R,I.extensions=jt,I.properties=G,I.renderLists=At,I.shadowMap=Qt,I.state=_,I.info=F}x!==Ln&&(T=new Fv(x,e.width,e.height,o,s,r));let Ft=new dd(I,P);this.xr=Ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(ne,Q,!1))},this.getSize=function(S){return S.set(ne,Q)},this.setSize=function(S,D,$=!0){if(Ft.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,Q=D,e.width=Math.floor(S*it),e.height=Math.floor(D*it),$===!0&&(e.style.width=S+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(ne*it,Q*it).floor()},this.setDrawingBufferSize=function(S,D,$){ne=S,Q=D,it=$,e.width=Math.floor(S*$),e.height=Math.floor(D*$),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(x===Ln){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,D,$,W){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,D,$,W),_.viewport(O.copy(St).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(Wt)},this.setScissor=function(S,D,$,W){S.isVector4?Wt.set(S.x,S.y,S.z,S.w):Wt.set(S,D,$,W),_.scissor(dt.copy(Wt).multiplyScalar(it).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(S){_.setScissorTest(ge=S)},this.setOpaqueSort=function(S){gt=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,$=!0){let W=0;if(S){let V=!1;if(ot!==null){let vt=ot.texture.format;V=g.has(vt)}if(V){let vt=ot.texture.type,kt=p.has(vt),Tt=re.getClearColor(),Dt=re.getClearAlpha(),Zt=Tt.r,de=Tt.g,me=Tt.b;kt?(b[0]=Zt,b[1]=de,b[2]=me,b[3]=Dt,P.clearBufferuiv(P.COLOR,0,b)):(w[0]=Zt,w[1]=de,w[2]=me,w[3]=Dt,P.clearBufferiv(P.COLOR,0,w))}else W|=P.COLOR_BUFFER_BIT}D&&(W|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),re.dispose(),At.dispose(),bt.dispose(),G.dispose(),pt.dispose(),at.dispose(),Rt.dispose(),ct.dispose(),wt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",ue),Ft.removeEventListener("sessionend",ve),Ue.stop()};function Ie(S){S.preventDefault(),Ja("WebGLRenderer: Context Lost."),L=!0}function X(){Ja("WebGLRenderer: Context Restored."),L=!1;let S=F.autoReset,D=Qt.enabled,$=Qt.autoUpdate,W=Qt.needsUpdate,V=Qt.type;Vt(),F.autoReset=S,Qt.enabled=D,Qt.autoUpdate=$,Qt.needsUpdate=W,Qt.type=V}function ut(S){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Et(S){let D=S.target;D.removeEventListener("dispose",Et),Jt(D)}function Jt(S){$t(S),G.remove(S)}function $t(S){let D=G.get(S).programs;D!==void 0&&(D.forEach(function($){wt.releaseProgram($)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,$,W,V,vt){D===null&&(D=Pt);let kt=V.isMesh&&V.matrixWorld.determinantAffine()<0,Tt=Uu(S,D,$,W,V);_.setMaterial(W,kt);let Dt=$.index,Zt=1;if(W.wireframe===!0){if(Dt=tt.getWireframeAttribute($),Dt===void 0)return;Zt=2}let de=$.drawRange,me=$.attributes.position,Bt=de.start*Zt,Re=(de.start+de.count)*Zt;vt!==null&&(Bt=Math.max(Bt,vt.start*Zt),Re=Math.min(Re,(vt.start+vt.count)*Zt)),Dt!==null?(Bt=Math.max(Bt,0),Re=Math.min(Re,Dt.count)):me!=null&&(Bt=Math.max(Bt,0),Re=Math.min(Re,me.count));let Je=Re-Bt;if(Je<0||Je===1/0)return;Rt.setup(V,W,Tt,$,Dt);let Be,Ne=xt;if(Dt!==null&&(Be=yt.get(Dt),Ne=rt,Ne.setIndex(Be)),V.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*ft()),Ne.setMode(P.LINES)):Ne.setMode(P.TRIANGLES);else if(V.isLine){let xn=W.linewidth;xn===void 0&&(xn=1),_.setLineWidth(xn*ft()),V.isLineSegments?Ne.setMode(P.LINES):V.isLineLoop?Ne.setMode(P.LINE_LOOP):Ne.setMode(P.LINE_STRIP)}else V.isPoints?Ne.setMode(P.POINTS):V.isSprite&&Ne.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let xn=V._multiDrawStarts,Nt=V._multiDrawCounts,En=V._multiDrawCount,be=Dt?yt.get(Dt).bytesPerElement:1,qn=G.get(W).currentProgram.getUniforms();for(let Ci=0;Ci<En;Ci++)qn.setValue(P,"_gl_DrawID",Ci),Ne.render(xn[Ci]/be,Nt[Ci])}else if(V.isInstancedMesh)Ne.renderInstances(Bt,Je,V.count);else if($.isInstancedBufferGeometry){let xn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Nt=Math.min($.instanceCount,xn);Ne.renderInstances(Bt,Je,Nt)}else Ne.render(Bt,Je)};function ae(S,D,$,W){N!==null&&S.isNodeMaterial&&N.setObject(W,S),j===!0&&Yt.setState(S,$,!1),S.transparent===!0&&S.side===yi&&S.forceSinglePass===!1?(S.side=gn,S.needsUpdate=!0,en(S,D,W),S.side=ks,S.needsUpdate=!0,en(S,D,W),S.side=yi):en(S,D,W)}this.compile=function(S,D,$=null){$===null&&($=S),N!==null&&N.renderStart(S,D,$),y=bt.get($),y.init(D),v.push(y),$.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),S!==$&&S.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights(),N!==null&&N.updateLights(y.state.lightsArray),Y=this.localClippingEnabled,j=Yt.init(this.clippingPlanes,Y),j===!0&&Yt.setGlobalState(this.clippingPlanes,D),N!==null&&Qt.render(y.state.shadowsArray,$,D);let W=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let vt=V.material;if(vt)if(Array.isArray(vt))for(let kt=0;kt<vt.length;kt++){let Tt=vt[kt];ae(Tt,$,D,V),W.add(Tt)}else ae(vt,$,D,V),W.add(vt)}),y=v.pop(),N!==null&&N.renderEnd(),W},this.compileAsync=function(S,D,$=null){let W=this.compile(S,D,$);return new Promise(V=>{function vt(){if(W.forEach(function(kt){let Dt=G.get(kt).currentProgram;(Dt===void 0||Dt.isReady())&&W.delete(kt)}),W.size===0){V(S);return}setTimeout(vt,10)}jt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Lt=null;function we(S){Lt&&Lt(S)}function ue(){Ue.stop()}function ve(){Ue.start()}let Ue=new dm;Ue.setAnimationLoop(we),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(S){Lt=S,Ft.setAnimationLoop(S),S===null?Ue.stop():Ue.start()},Ft.addEventListener("sessionstart",ue),Ft.addEventListener("sessionend",ve),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(S,D);let $=Ft.enabled===!0&&Ft.isPresenting===!0,W=T!==null&&(ot===null||$)&&T.begin(I,ot);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(D),D=Ft.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,D,ot),y=bt.get(S,v.length),y.init(D),y.state.textureUnits=J.getTextureUnits(),v.push(y),st.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(st,mi,D.reversedDepth),Y=this.localClippingEnabled,j=Yt.init(this.clippingPlanes,Y),A=At.get(S,E.length),A.init(),E.push(A),Ft.enabled===!0&&Ft.isPresenting===!0){let kt=I.xr.getDepthSensingMesh();kt!==null&&Ae(kt,D,-1/0,I.sortObjects)}Ae(S,D,0,I.sortObjects),A.finish(),N!==null&&N.updateLights(y.state.lightsArray),I.sortObjects===!0&&A.sort(gt,Ht),Ot=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Ot&&re.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&Yt.beginShadows();let V=y.state.shadowsArray;if(Qt.render(V,S,D),j===!0&&Yt.endShadows(),(W&&T.hasRenderPass())===!1){let kt=A.opaque,Tt=A.transmissive;if(y.setupLights(),D.isArrayCamera){let Dt=D.cameras;if(Tt.length>0)for(let Zt=0,de=Dt.length;Zt<de;Zt++){let me=Dt[Zt];yn(kt,Tt,S,me)}Ot&&re.render(S);for(let Zt=0,de=Dt.length;Zt<de;Zt++){let me=Dt[Zt];De(A,S,me,me.viewport)}}else Tt.length>0&&yn(kt,Tt,S,D),Ot&&re.render(S),De(A,S,D)}ot!==null&&q===0&&(J.updateMultisampleRenderTarget(ot),J.updateRenderTargetMipmap(ot)),W&&T.end(I),S.isScene===!0&&S.onAfterRender(I,S,D),Rt.resetDefaultState(),K=-1,nt=null,v.pop(),v.length>0?(y=v[v.length-1],J.setTextureUnits(y.state.textureUnits),j===!0&&Yt.setGlobalState(I.clippingPlanes,y.state.camera)):y=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,N!==null&&N.renderEnd()};function Ae(S,D,$,W){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(H)){W&&_t.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);let kt=at.update(S),Tt=S.material;Tt.visible&&A.push(S,kt,Tt,$,_t.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(H))){let kt=at.update(S),Tt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),_t.copy(S.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),_t.copy(kt.boundingSphere.center)),_t.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(Tt)){let Dt=kt.groups;for(let Zt=0,de=Dt.length;Zt<de;Zt++){let me=Dt[Zt],Bt=Tt[me.materialIndex];Bt&&Bt.visible&&A.push(S,kt,Bt,$,_t.z,me,D)}}else Tt.visible&&A.push(S,kt,Tt,$,_t.z,null,D)}}let vt=S.children;for(let kt=0,Tt=vt.length;kt<Tt;kt++)Ae(vt[kt],D,$,W)}function De(S,D,$,W){let{opaque:V,transmissive:vt,transparent:kt}=S;y.setupLightsView($),j===!0&&Yt.setGlobalState(I.clippingPlanes,$),W&&_.viewport(O.copy(W)),V.length>0&&Ke(V,D,$),vt.length>0&&Ke(vt,D,$),kt.length>0&&Ke(kt,D,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function yn(S,D,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[W.id]===void 0){let Bt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[W.id]=new Pn(1,1,{generateMipmaps:!0,type:Bt?bi:Ln,minFilter:Oi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let vt=y.state.transmissionRenderTarget[W.id],kt=W.viewport||O;vt.setSize(kt.z*I.transmissionResolutionScale,kt.w*I.transmissionResolutionScale);let Tt=I.getRenderTarget(),Dt=I.getActiveCubeFace(),Zt=I.getActiveMipmapLevel();I.setRenderTarget(vt),I.getClearColor(qt),ee=I.getClearAlpha(),ee<1&&I.setClearColor(16777215,.5),I.clear(),Ot&&re.render($);let de=I.toneMapping;I.toneMapping=xi;let me=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),j===!0&&Yt.setGlobalState(I.clippingPlanes,W),Ke(S,$,W),J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Re=0,Je=D.length;Re<Je;Re++){let Be=D[Re],{object:Ne,geometry:xn,material:Nt,group:En}=Be;if(Nt.side===yi&&Ne.layers.test(W.layers)){let be=Nt.side;Nt.side=gn,Nt.needsUpdate=!0,Ri(Ne,$,W,xn,Nt,En),Nt.side=be,Nt.needsUpdate=!0,Bt=!0}}Bt===!0&&(J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt))}I.setRenderTarget(Tt,Dt,Zt),I.setClearColor(qt,ee),me!==void 0&&(W.viewport=me),I.toneMapping=de}function Ke(S,D,$){let W=D.isScene===!0?D.overrideMaterial:null;for(let V=0,vt=S.length;V<vt;V++){let kt=S[V],{object:Tt,geometry:Dt,group:Zt}=kt,de=kt.material;de.allowOverride===!0&&W!==null&&(de=W),Tt.layers.test($.layers)&&Ri(Tt,D,$,Dt,de,Zt)}}function Ri(S,D,$,W,V,vt){N!==null&&V.isNodeMaterial&&N.setObject(S,V),S.onBeforeRender(I,D,$,W,V,vt),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(I,D,$,W,S,vt),V.transparent===!0&&V.side===yi&&V.forceSinglePass===!1?(V.side=gn,V.needsUpdate=!0,I.renderBufferDirect($,D,W,V,S,vt),V.side=ks,V.needsUpdate=!0,I.renderBufferDirect($,D,W,V,S,vt),V.side=yi):I.renderBufferDirect($,D,W,V,S,vt),S.onAfterRender(I,D,$,W,V,vt)}function en(S,D,$){D.isScene!==!0&&(D=Pt);let W=G.get(S),V=y.state.lights,vt=y.state.shadowsArray,kt=V.state.version,Tt=wt.getParameters(S,V.state,vt,D,$,y.state.lightProbeGridArray),Dt=wt.getProgramCacheKey(Tt),Zt=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,W.fog=D.fog;let de=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=pt.get(S.envMap||W.environment,de),W.envMapRotation=W.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Zt===void 0&&(S.addEventListener("dispose",Et),Zt=new Map,W.programs=Zt);let me=Zt.get(Dt);if(me!==void 0){if(W.currentProgram===me&&W.lightsStateVersion===kt)return Gs(S,Tt),me}else Tt.uniforms=wt.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,$,Tt),S.onBeforeCompile(Tt,I),me=wt.acquireProgram(Tt,Dt),Zt.set(Dt,me),W.uniforms=Tt.uniforms;let Bt=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=Yt.uniform),Gs(S,Tt),W.needsLights=nn(S),W.lightsStateVersion=kt,W.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.sunLights.value=V.state.sun,Bt.sunLightShadows.value=V.state.sunShadow,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.sunShadowMatrix.value=V.state.sunShadowMatrix,Bt.sunShadowCascade.value=V.state.sunShadowCascade,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=y.state.lightProbeGridArray.length>0,W.currentProgram=me,W.uniformsList=null,me}function An(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=fa.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Gs(S,D){let $=G.get(S);$.outputColorSpace=D.outputColorSpace,$.batching=D.batching,$.batchingColor=D.batchingColor,$.instancing=D.instancing,$.instancingColor=D.instancingColor,$.instancingMorph=D.instancingMorph,$.skinning=D.skinning,$.morphTargets=D.morphTargets,$.morphNormals=D.morphNormals,$.morphColors=D.morphColors,$.morphTargetsCount=D.morphTargetsCount,$.numClippingPlanes=D.numClippingPlanes,$.numIntersection=D.numClipIntersection,$.vertexAlphas=D.vertexAlphas,$.vertexTangents=D.vertexTangents,$.toneMapping=D.toneMapping}function Hs(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let $=0,W=S.length;$<W;$++){let V=S[$];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function Uu(S,D,$,W,V){D.isScene!==!0&&(D=Pt),J.resetTextureUnits();let vt=D.fog,kt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?D.environment:null,Tt=ot===null?I.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:_e.workingColorSpace,Dt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Zt=pt.get(W.envMap||kt,Dt),de=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,me=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!$.morphAttributes.position,Re=!!$.morphAttributes.normal,Je=!!$.morphAttributes.color,Be=xi;W.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Be=I.toneMapping);let Ne=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xn=Ne!==void 0?Ne.length:0,Nt=G.get(W),En=y.state.lights;if(j===!0&&(Y===!0||S!==nt)){let Oe=S===nt&&W.id===K;Yt.setState(W,S,Oe)}let be=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==En.state.version||Nt.outputColorSpace!==Tt||V.isBatchedMesh&&Nt.batching===!1||!V.isBatchedMesh&&Nt.batching===!0||V.isBatchedMesh&&Nt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Nt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Nt.instancing===!1||!V.isInstancedMesh&&Nt.instancing===!0||V.isSkinnedMesh&&Nt.skinning===!1||!V.isSkinnedMesh&&Nt.skinning===!0||V.isInstancedMesh&&Nt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Nt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Nt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Nt.instancingMorph===!1&&V.morphTexture!==null||Nt.envMap!==Zt||W.fog===!0&&Nt.fog!==vt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Yt.numPlanes||Nt.numIntersection!==Yt.numIntersection)||Nt.vertexAlphas!==de||Nt.vertexTangents!==me||Nt.morphTargets!==Bt||Nt.morphNormals!==Re||Nt.morphColors!==Je||Nt.toneMapping!==Be||Nt.morphTargetsCount!==xn||!!Nt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Nt.__version=W.version);let qn=Nt.currentProgram;be===!0&&(qn=en(W,D,V),N&&W.isNodeMaterial&&N.onUpdateProgram(W,qn,Nt));let Ci=!1,ds=!1,br=!1,Le=qn.getUniforms(),Ye=Nt.uniforms;if(_.useProgram(qn.program)&&(Ci=!0,ds=!0,br=!0),W.id!==K&&(K=W.id,ds=!0),Nt.needsLights){let Oe=Hs(y.state.lightProbeGridArray,V);Nt.lightProbeGrid!==Oe&&(Nt.lightProbeGrid=Oe,ds=!0)}if(Ci||nt!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Le.setValue(P,"projectionMatrix",S.projectionMatrix),Le.setValue(P,"viewMatrix",S.matrixWorldInverse);let ps=Le.map.cameraPosition;ps!==void 0&&ps.setValue(P,lt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&Le.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Le.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),nt!==S&&(nt=S,ds=!0,br=!0)}if(Nt.needsLights&&(En.state.sunShadowMap.length>0&&Le.setValue(P,"sunShadowMap",En.state.sunShadowMap,J),En.state.directionalShadowMap.length>0&&Le.setValue(P,"directionalShadowMap",En.state.directionalShadowMap,J),En.state.spotShadowMap.length>0&&Le.setValue(P,"spotShadowMap",En.state.spotShadowMap,J),En.state.pointShadowMap.length>0&&Le.setValue(P,"pointShadowMap",En.state.pointShadowMap,J)),V.isSkinnedMesh){Le.setOptional(P,V,"bindMatrix"),Le.setOptional(P,V,"bindMatrixInverse");let Oe=V.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Le.setValue(P,"boneTexture",Oe.boneTexture,J))}V.isBatchedMesh&&(Le.setOptional(P,V,"batchingTexture"),Le.setValue(P,"batchingTexture",V._matricesTexture,J),Le.setOptional(P,V,"batchingIdTexture"),Le.setValue(P,"batchingIdTexture",V._indirectTexture,J),Le.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&Le.setValue(P,"batchingColorTexture",V._colorsTexture,J));let fs=$.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&U.update(V,$,qn),(ds||Nt.receiveShadow!==V.receiveShadow)&&(Nt.receiveShadow=V.receiveShadow,Le.setValue(P,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&D.environment!==null&&(Ye.envMapIntensity.value=D.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=wM()),ds){if(Le.setValue(P,"toneMappingExposure",I.toneMappingExposure),Nt.needsLights&&el(Ye,br),vt&&W.fog===!0&&Xt.refreshFogUniforms(Ye,vt),Xt.refreshMaterialUniforms(Ye,W,it,Q,y.state.transmissionRenderTarget[S.id]),Nt.needsLights&&Nt.lightProbeGrid){let Oe=Nt.lightProbeGrid;Ye.probesSH.value=Oe.texture,Ye.probesMin.value.copy(Oe.boundingBox.min),Ye.probesMax.value.copy(Oe.boundingBox.max),Ye.probesResolution.value.copy(Oe.resolution)}fa.upload(P,An(Nt),Ye,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fa.upload(P,An(Nt),Ye,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Le.setValue(P,"center",V.center),Le.setValue(P,"modelViewMatrix",V.modelViewMatrix),Le.setValue(P,"normalMatrix",V.normalMatrix),Le.setValue(P,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){let Oe=W.uniformsGroups;for(let ps=0,Mr=Oe.length;ps<Mr;ps++){let xf=Oe[ps];ct.update(xf,qn),ct.bind(xf,qn)}}return qn}function el(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function nn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(S,D,$){let W=G.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=D,G.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let $=G.get(S);$.__webglFramebuffer=D,$.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,$=0){ot=S,Z=D,q=$;let W=null,V=!1,vt=!1;if(S){let Tt=G.get(S);if(Tt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Tt.__webglFramebuffer),O.copy(S.viewport),dt.copy(S.scissor),ht=S.scissorTest,_.viewport(O),_.scissor(dt),_.setScissorTest(ht),K=-1;return}else if(Tt.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(Tt.__hasExternalTextures)J.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let de=S.depthTexture;if(Tt.__boundDepthTexture!==de){if(de!==null&&G.has(de)&&(S.width!==de.image.width||S.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}let Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(vt=!0);let Zt=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Zt[D])?W=Zt[D][$]:W=Zt[D],V=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?W=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Zt)?W=Zt[$]:W=Zt,O.copy(S.viewport),dt.copy(S.scissor),ht=S.scissorTest}else O.copy(St).multiplyScalar(it).floor(),dt.copy(Wt).multiplyScalar(it).floor(),ht=ge;if($!==0&&(W=B),_.bindFramebuffer(P.FRAMEBUFFER,W)&&_.drawBuffers(S,W),_.viewport(O),_.scissor(dt),_.setScissorTest(ht),V){let Tt=G.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,$)}else if(vt){let Tt=D;for(let Dt=0;Dt<S.textures.length;Dt++){let Zt=G.get(S.textures[Dt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Dt,Zt.__webglTexture,$,Tt)}}else if(S!==null&&$!==0){let Tt=G.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tt.__webglTexture,$)}K=-1};function $n(S){let D=G.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=R.textureFormatReadable(S.format),D.__typeReadable=R.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,$,W,V,vt,kt,Tt=0){if(!(S&&S.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt]),Dt){_.bindFramebuffer(P.FRAMEBUFFER,Dt);try{let Zt=S.textures[Tt],de=Zt.format,me=Zt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Tt);let Bt=$n(Zt);if(Bt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-W&&$>=0&&$<=S.height-V&&P.readPixels(D,$,W,V,Mt.convert(de),Mt.convert(me),vt)}finally{let Zt=ot!==null?G.get(ot).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(S,D,$,W,V,vt,kt,Tt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt]),Dt)if(D>=0&&D<=S.width-W&&$>=0&&$<=S.height-V){_.bindFramebuffer(P.FRAMEBUFFER,Dt);let Zt=S.textures[Tt],de=Zt.format,me=Zt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Tt);let Bt=$n(Zt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,vt.byteLength,P.STREAM_READ),P.readPixels(D,$,W,V,Mt.convert(de),Mt.convert(me),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Je=ot!==null?G.get(ot).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Je);let Be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Dp(P,Be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,vt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Re),P.deleteSync(Be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,$=0){let W=Math.pow(2,-$),V=Math.floor(S.image.width*W),vt=Math.floor(S.image.height*W),kt=D!==null?D.x:0,Tt=D!==null?D.y:0;J.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,kt,Tt,V,vt),_.unbindTexture()},this.copyTextureToTexture=function(S,D,$=null,W=null,V=0,vt=0){let kt,Tt,Dt,Zt,de,me,Bt,Re,Je,Be=S.isCompressedTexture?S.mipmaps[vt]:S.image;if($!==null)kt=$.max.x-$.min.x,Tt=$.max.y-$.min.y,Dt=$.isBox3?$.max.z-$.min.z:1,Zt=$.min.x,de=$.min.y,me=$.isBox3?$.min.z:0;else{let Ye=Math.pow(2,-V);kt=Math.floor(Be.width*Ye),Tt=Math.floor(Be.height*Ye),S.isDataArrayTexture?Dt=Be.depth:S.isData3DTexture?Dt=Math.floor(Be.depth*Ye):Dt=1,Zt=0,de=0,me=0}W!==null?(Bt=W.x,Re=W.y,Je=W.z):(Bt=0,Re=0,Je=0);let Ne=Mt.convert(D.format),xn=Mt.convert(D.type),Nt;D.isData3DTexture?(J.setTexture3D(D,0),Nt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(J.setTexture2DArray(D,0),Nt=P.TEXTURE_2D_ARRAY):(J.setTexture2D(D,0),Nt=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let En=_.getParameter(P.UNPACK_ROW_LENGTH),be=_.getParameter(P.UNPACK_IMAGE_HEIGHT),qn=_.getParameter(P.UNPACK_SKIP_PIXELS),Ci=_.getParameter(P.UNPACK_SKIP_ROWS),ds=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,Be.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Be.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Zt),_.pixelStorei(P.UNPACK_SKIP_ROWS,de),_.pixelStorei(P.UNPACK_SKIP_IMAGES,me);let br=S.isDataArrayTexture||S.isData3DTexture,Le=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let Ye=G.get(S),fs=G.get(D),Oe=G.get(Ye.__renderTarget),ps=G.get(fs.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,Oe.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let Mr=0;Mr<Dt;Mr++)br&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(S).__webglTexture,V,me+Mr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(D).__webglTexture,vt,Je+Mr)),P.blitFramebuffer(Zt,de,kt,Tt,Bt,Re,kt,Tt,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||G.has(S)){let Ye=G.get(S),fs=G.get(D);_.bindFramebuffer(P.READ_FRAMEBUFFER,k),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,z);for(let Oe=0;Oe<Dt;Oe++)br?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ye.__webglTexture,V,me+Oe):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ye.__webglTexture,V),Le?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fs.__webglTexture,vt,Je+Oe):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fs.__webglTexture,vt),V!==0?P.blitFramebuffer(Zt,de,kt,Tt,Bt,Re,kt,Tt,P.COLOR_BUFFER_BIT,P.NEAREST):Le?P.copyTexSubImage3D(Nt,vt,Bt,Re,Je+Oe,Zt,de,kt,Tt):P.copyTexSubImage2D(Nt,vt,Bt,Re,Zt,de,kt,Tt);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Le?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Nt,vt,Bt,Re,Je,kt,Tt,Dt,Ne,xn,Be.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Nt,vt,Bt,Re,Je,kt,Tt,Dt,Ne,Be.data):P.texSubImage3D(Nt,vt,Bt,Re,Je,kt,Tt,Dt,Ne,xn,Be):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,vt,Bt,Re,kt,Tt,Ne,xn,Be.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,vt,Bt,Re,Be.width,Be.height,Ne,Be.data):P.texSubImage2D(P.TEXTURE_2D,vt,Bt,Re,kt,Tt,Ne,xn,Be);_.pixelStorei(P.UNPACK_ROW_LENGTH,En),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be),_.pixelStorei(P.UNPACK_SKIP_PIXELS,qn),_.pixelStorei(P.UNPACK_SKIP_ROWS,Ci),_.pixelStorei(P.UNPACK_SKIP_IMAGES,ds),vt===0&&D.generateMipmaps&&P.generateMipmap(Nt),_.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Z=0,q=0,ot=null,_.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var xm={type:"change"},pd={type:"start"},bm={type:"end"},ru=new js,vm=new Rn,AM=Math.cos(70*Vh.DEG2RAD),on=new C,Dn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fd=1e-6,au=class extends wo{constructor(t,e=null){super(t,e),this.state=ke.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new In,this._lastTargetPosition=new C,this._quat=new In().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new aa,this._sphericalDelta=new aa,this._scale=1,this._panOffset=new C,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new C,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TM.bind(this),this._onPointerDown=EM.bind(this),this._onPointerUp=RM.bind(this),this._onContextMenu=NM.bind(this),this._onMouseWheel=PM.bind(this),this._onKeyDown=kM.bind(this),this._onTouchStart=LM.bind(this),this._onTouchMove=DM.bind(this),this._onMouseDown=CM.bind(this),this._onMouseMove=IM.bind(this),this._interceptControlDown=UM.bind(this),this._interceptControlUp=OM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xm),this.update(),this.state=ke.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;on.copy(e).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),e.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=on.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ru.origin.copy(this.object.position),ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ru.direction))<AM?this.object.lookAt(this.target):(vm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ru.intersectPlane(vm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fd||this._lastTargetPosition.distanceToSquared(this.target)>fd?(this.dispatchEvent(xm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){on.setFromMatrixColumn(e,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,e){this.screenSpacePanning===!0?on.setFromMatrixColumn(e,1):(on.setFromMatrixColumn(e,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function EM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function TM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function RM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bm),this.state=ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function CM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ke.DOLLY;break;case Is.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ke.ROTATE}break;case Is.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(pd)}function IM(n){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function PM(n){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(n.preventDefault(),this.dispatchEvent(pd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bm))}function kM(n){this.enabled!==!1&&this._handleKeyDown(n)}function LM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ke.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ke.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(pd)}function DM(n){switch(this._trackPointer(n),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ke.NONE}}function NM(n){this.enabled!==!1&&n.preventDefault()}function UM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ou=class extends Ks{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ee;t.deleteAttribute("uv");let e=new Se({side:gn}),i=new Se,s=new Cs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new zn(t,i,6),o=new We;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Kt(t,ga(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Kt(t,ga(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Kt(t,ga(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Kt(t,ga(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Kt(t,ga(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Kt(t,ga(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ga(n){return new yo({color:0,emissive:16777215,emissiveIntensity:n})}var FM=42e5,md=[1,.8,.65,.5],Mm=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),BM=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Sm(n,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:i=null}={}){let s=window.devicePixelRatio||1,r;try{r=new nu({canvas:n,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=$e,r.toneMapping=Eo,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=cc,r.shadowMap.autoUpdate=!1,r.setClearColor(new Gt(t),1);let a=new Ks,o=new pa(r);a.environment=o.fromScene(new ou,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new mn(32,1,4,1500);l.position.set(0,160,150),a.add(new vo(16777215,13616860,.35));let c=new So(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new Kt(new jn(900,900),new go({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let h=new au(l,n);h.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),h.dampingFactor=.14,h.rotateSpeed=.75,h.zoomSpeed=.9,h.panSpeed=.8,h.screenSpacePanning=!0,h.minDistance=9,h.maxDistance=1200,h.minPolarAngle=.06,h.maxPolarAngle=1.32,h.zoomToCursor=!0,h.cursor.set(0,6,-3),h.maxTargetRadius=85,h.target.set(0,4,0);function d(){let X=l.position.distanceTo(h.target),ut=Math.min(4,Math.max(.4,X*.04));Math.abs(ut-l.near)>ut*.08&&(l.near=ut,l.far=Math.max(900,X*6),l.updateProjectionMatrix())}let f=0,m=0,x=!1,g=!0,p=new Set,b=new Set,w=[],M=new Set,A=1,y=0,E=0,v=0,T=0,I=[],L=0,N=0,B=0;function k(){!f&&!m&&(f=requestAnimationFrame(q))}function z(){!f&&!m&&(m=setTimeout(()=>{m=0,k()},33))}function Z(X){Math.abs(X-E)<.01||(E=X,r.setPixelRatio(X),r.setSize(n.clientWidth||1,n.clientHeight||1,!1))}function q(X){f=0;let ut=h.update();for(let $t of M){let ae=Math.min(1,(X-($t.bas??=X))/$t.sure);$t.adim(BM(ae)),$t.golge&&(g=!0),ae>=1?(M.delete($t),$t.bitti?.()):ut=!0}for(let $t of p)$t(X)&&(ut=!0);let Et=!1;for(let $t of b)$t(X,T?Math.min(100,X-T):33)&&(Et=!0);T=Et?X:0;let Jt=ut||Et;clearTimeout(B),d(),Z(A*md[y]),g&&(r.shadowMap.needsUpdate=!0,g=!1),r.render(a,l),Xt(),ut?ot(X):(v=0,I=[]),ut?k():Et&&z(),!Jt&&y>0&&(B=setTimeout(()=>{Z(A),r.render(a,l),Xt()},300))}function ot(X){v&&I.push(X-v),v=X;let ut=I.length,Et=I.reduce((ae,Lt)=>ae+Lt,0),Jt=ut>=6&&ut<24&&Et>=450&&[...I].sort((ae,Lt)=>ae-Lt)[ut>>1]>50;if(ut<24&&!Jt)return;let $t=Et/ut;I=[],!(X-N<(Jt?300:500))&&($t>26&&y<md.length-1?(y++,L=0,N=X,e("kalite",y)):$t<19&&y>0&&++L>=3&&(y--,L=0,N=X))}function K(){let X=n.clientWidth||1,ut=n.clientHeight||1;A=Math.max(.5,Math.min(s,2,Math.sqrt(FM/(X*ut)))),E=0,Z(A*md[y]),l.aspect=X/ut,qt();for(let Et of w)Et.w=0;jt=0,R=null,!x&&ne&&Y(ne,!0),k()}let nt=0,O=0;new ResizeObserver(()=>{clearTimeout(nt);let X=performance.now();if(document.documentElement.dataset.suruklenen&&X-O>125){O=X,K();return}nt=setTimeout(()=>{O=performance.now(),K()},110)}).observe(n),window.addEventListener("bote-erisim",()=>{h.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let X of w)X.w=0;k()});let ht=0;function qt(){let X=n.clientWidth||1,ut=n.clientHeight||1;ht>0?l.setViewOffset(X,ut,0,Math.min(ht,ut*.9)/2,X,ut):l.clearViewOffset(),l.updateProjectionMatrix()}function ee(X,ut=!1){ht=Math.max(0,X||0),R=null,qt(),!x&&ne?Y(ne,ut):k()}h.addEventListener("change",k),h.addEventListener("start",()=>{x=!0,e("kamera-elle")});let ne=null,Q=new C(0,1,0),it=new C,gt=new C,Ht=new C,St=new C,Wt=new C,ge=X=>X.isBox3?X:new Kn(new C(X[0],X[1],X[2]),new C(X[3],X[4],X[5]));function H(X,ut){let Et=i?.()||{},Jt=Math.min(ht,ut*.9),$t=Et.sol??16,ae=X-(Et.sag??16),Lt=Et.ust??16,we=ut-Math.max(Et.alt??16,Jt+12);if(ae-$t<80){let ue=X/2;$t=ue-40,ae=ue+40}if(we-Lt<80){let ue=(Math.max(0,Lt)+Math.max(Lt+80,we))/2;Lt=ue-40,we=ue+40}return{x0:$t,y0:Lt,x1:ae,y1:we,engel:Et.engel||[]}}function j(X,ut){let Et=n.clientWidth||1,Jt=n.clientHeight||1,$t=ge(X),ae=new C(...ut).normalize();it.crossVectors(Q,ae).normalize(),gt.crossVectors(ae,it),Ht.copy(ae).negate();let Lt=R=H(Et,Jt),we=Math.tan(l.fov*Math.PI/360),ue=we*(Et/Jt),ve=Math.min(ht,Jt*.9)/Jt,Ue=(Lt.x0/Et*2-1)*ue,Ae=(Lt.x1/Et*2-1)*ue,De=(1-Lt.y0/Jt*2-ve)*we,yn=(1-Lt.y1/Jt*2-ve)*we;$t.getCenter(St);let Ke=[],Ri=[],en=[];for(let nn=0;nn<8;nn++)Wt.set(nn&1?$t.max.x:$t.min.x,nn&2?$t.max.y:$t.min.y,nn&4?$t.max.z:$t.min.z).sub(St),Ke.push(Wt.dot(it)),Ri.push(Wt.dot(gt)),en.push(Wt.dot(Ht));let An=0;for(let nn=0;nn<8;nn++){An=Math.max(An,2-en[nn]);for(let $n=0;$n<8;$n++)An=Math.max(An,(Ke[nn]-Ke[$n]-Ae*en[nn]+Ue*en[$n])/(Ae-Ue),(Ri[nn]-Ri[$n]-De*en[nn]+yn*en[$n])/(De-yn))}An=Math.min(h.maxDistance,Math.max(h.minDistance,An));let Gs=(nn,$n,S)=>{let D=-1/0,$=1/0;for(let V=0;V<8;V++)D=Math.max(D,nn[V]-S*(en[V]+An)),$=Math.min($,nn[V]-$n*(en[V]+An));if(!($>D))return(D+$)/2;let W=V=>{let vt=-1/0,kt=1/0;for(let Tt=0;Tt<8;Tt++){let Dt=(nn[Tt]-V)/(en[Tt]+An);Dt>vt&&(vt=Dt),Dt<kt&&(kt=Dt)}return S-vt-(kt-$n)};for(let V=0;V<32;V++){let vt=(D+$)/2;W(vt)>0?$=vt:D=vt}return(D+$)/2},Hs=Gs(Ke,Ue,Ae),Uu=Gs(Ri,yn,De),el=St.clone().addScaledVector(it,Hs).addScaledVector(gt,Uu);return{merkez:el,konum:el.clone().addScaledVector(ae,An)}}function Y(X,ut=!1){ne=X,x=!1;let{merkez:Et,konum:Jt}=j(X.kutu,X.yon);if(ut||Mm())return l.position.copy(Jt),h.target.copy(Et),h.update(),k(),Promise.resolve();let $t=l.position.clone(),ae=h.target.clone();return h.enabled=!1,lt(650,Lt=>{l.position.lerpVectors($t,Jt,Lt),h.target.lerpVectors(ae,Et,Lt),l.lookAt(h.target)}).then(()=>{h.enabled=!0,h.update()})}function st(){if(!ne)return null;l.updateMatrixWorld();let X=n.clientWidth||1,ut=n.clientHeight||1,Et=ge(ne.kutu),Jt=1/0,$t=-1/0,ae=1/0,Lt=-1/0;for(let we=0;we<8;we++){Wt.set(we&1?Et.max.x:Et.min.x,we&2?Et.max.y:Et.min.y,we&4?Et.max.z:Et.min.z).project(l);let ue=(Wt.x+1)/2*X,ve=(1-Wt.y)/2*ut;Jt=Math.min(Jt,ue),$t=Math.max($t,ue),ae=Math.min(ae,ve),Lt=Math.max(Lt,ve)}return{kutu:{x0:Jt,y0:ae,x1:$t,y1:Lt},guvenli:H(X,ut),w:X,h:ut}}function lt(X,ut,Et=!1){return Mm()?(ut(1),Et&&(g=!0),k(),Promise.resolve()):new Promise(Jt=>{M.add({sure:X,adim:ut,bitti:Jt,golge:Et}),k()})}let _t=n.parentElement.querySelector(".etiketler"),Pt=n.parentElement.querySelector(".isaretler")||_t,Ot="http://www.w3.org/2000/svg",ft=document.createElementNS(Ot,"svg");ft.setAttribute("class","cizgiler"),ft.setAttribute("aria-hidden","true"),_t.appendChild(ft);let P=[],le=[],jt=0,R=null,_=new C,F=new C,G=new C,J=X=>{for(let ut=X;ut;ut=ut.parent)if(!ut.visible)return!1;return!0};function pt(X){for(let ut of w)ut.el.remove(),ut.cizgi.remove(),ut.nokt.remove();w.length=0;for(let{nokta:ut,metin:Et,tur:Jt}of X){let $t=document.createElement("div");$t.className="etiket"+(Jt?` etiket-${Jt}`:""),$t.textContent=Et,_t.appendChild($t);let ae=document.createElementNS(Ot,"line"),Lt=document.createElementNS(Ot,"circle");Lt.setAttribute("r","4.5"),ft.append(ae,Lt),w.push({el:$t,nokta:ut,cizgi:ae,nokt:Lt,w:0,h:0})}k()}function yt(X){for(let ut of P)ut.el.remove();P.length=0;for(let ut of X)ut.el.hidden=!0,Pt.appendChild(ut.el),P.push({...ut,acik:!1});le=P.map((ut,Et)=>[ut,Et]).sort((ut,Et)=>(Et[0].oncelik??1)-(ut[0].oncelik??1)||ut[1]-Et[1]).map(([ut])=>ut),jt=0,R=null,k()}function tt(X,ut){for(let Et=P.length-1;Et>=0;Et--){let Jt=P[Et].el;if(Jt.hidden)continue;let $t=Jt.getBoundingClientRect(),ae=$t.width/2;if(ae&&Math.hypot(X-$t.left-ae,ut-$t.top-$t.height/2)<=ae+2)return Jt}return null}function at(X,ut){if(!P.length)return;jt||(jt=parseFloat(getComputedStyle(Pt).getPropertyValue("--isaret"))||44);let Et=R||(R=H(X,ut)),Jt=jt+4,$t=[],ae=document.activeElement,Lt=Math.tan(l.fov*Math.PI/360),we=P.some(ue=>ue.el===ae)?[...le].sort((ue,ve)=>(ve.el===ae)-(ue.el===ae)):le;for(let ue of we){let ve=!1,Ue=0,Ae=0;(!ue.nesne||J(ue.nesne))&&(ue.nesne?F.copy(ue.yerel).applyMatrix4(ue.nesne.matrixWorld):F.copy(ue.nokta),G.copy(F).applyMatrix4(l.matrixWorldInverse),G.z<-l.near&&(_.copy(F).project(l),Ue=(_.x+1)/2*X,Ae=(1-_.y)/2*ut,ve=Ue>=Et.x0&&Ue<=Et.x1&&Ae>=Et.y0&&Ae<=Et.y1&&!Et.engel.some(De=>Ue>De.x0-Jt/2&&Ue<De.x1+Jt/2&&Ae>De.y0-Jt/2&&Ae<De.y1+Jt/2),ve&&ue.adim&&(ve=ue.adim*ut/(2*-G.z*Lt)>=jt),ve&&ue.el!==ae&&(ve=!$t.some(De=>Math.abs(De.x-Ue)<Jt&&Math.abs(De.y-Ae)<Jt)))),ve&&($t.push({x:Ue,y:Ae}),ue.el.style.transform=`translate3d(${Math.round(Ue)}px,${Math.round(Ae)}px,0)`),ue.acik!==ve&&(ue.acik=ve,ue.el.hidden=!ve)}}let wt=(X,ut,Et)=>(_.copy(X).project(l),{x:(_.x+1)/2*ut,y:(1-_.y)/2*Et,gor:_.z<1&&Math.abs(_.x)<1.05&&Math.abs(_.y)<1.05});function Xt(){let X=n.clientWidth,ut=n.clientHeight;if(at(X,ut),!w.length)return;ft.setAttribute("width",X),ft.setAttribute("height",ut);let Et=[],Jt=8,$t=30,ae=w.map(Lt=>({e:Lt,p:wt(Lt.nokta,X,ut)})).sort((Lt,we)=>we.p.y-Lt.p.y);for(let{e:Lt,p:we}of ae){Lt.w||(Lt.w=Lt.el.offsetWidth,Lt.h=Lt.el.offsetHeight);let ue=Math.min(Math.max(we.x-Lt.w/2,6),X-Lt.w-6),ve=we.y-$t-Lt.h,Ue=!1;for(let De=0;De<6;De++){let yn=Et.find(Ke=>ue<Ke.x+Ke.w+Jt&&ue+Lt.w+Jt>Ke.x&&ve<Ke.y+Ke.h+Jt&&ve+Lt.h+Jt>Ke.y);if(!yn)break;if(ve=yn.y-Lt.h-Jt,ve<4){ve=we.y+$t,Ue=!0,ue=Math.min(Math.max(yn.x+yn.w+Jt,6),X-Lt.w-6);break}}Et.push({x:ue,y:ve,w:Lt.w,h:Lt.h});let Ae=we.gor?"1":"0";Lt.el.style.opacity=Ae,Lt.cizgi.style.opacity=Ae,Lt.nokt.style.opacity=Ae,Lt.el.style.transform=`translate3d(${Math.round(ue)}px,${Math.round(ve)}px,0)`,Lt.cizgi.setAttribute("x1",we.x.toFixed(1)),Lt.cizgi.setAttribute("y1",we.y.toFixed(1)),Lt.cizgi.setAttribute("x2",(ue+Lt.w/2).toFixed(1)),Lt.cizgi.setAttribute("y2",(Ue?ve:ve+Lt.h).toFixed(1)),Lt.nokt.setAttribute("cx",we.x.toFixed(1)),Lt.nokt.setAttribute("cy",we.y.toFixed(1))}}let At=new nr,bt=new et,Yt=[],Qt=new Set,re=new C,U=new C,xt=new C,rt=X=>!X.isMesh||X.isInstancedMesh||X===u||!J(X)?!1:(Array.isArray(X.material)?X.material:[X.material]).some(Et=>Et&&Et.visible!==!1&&Et.blending!==Ui&&!(Et.transparent&&Et.opacity<.2));function Mt(X,ut,Et=1){bt.set(X,ut),At.setFromCamera(bt,l);let Jt=At.intersectObjects(a.children,!0).find(Ae=>rt(Ae.object)),$t=Jt?Jt.point:null,ae=Jt?Jt.distance:1/0,Lt=n.clientHeight||1,we=Math.tan(l.fov*Math.PI/360),ue=null,ve=1/0,Ue=1/0;for(let Ae of Yt){let De=Ae.userData;if(De.etkin===!1||!J(Ae))continue;let yn=!1;if($t&&De.yari){re.copy($t),Ae.worldToLocal(re),U.setFromMatrixScale(Ae.matrixWorld);let[en,An,Gs]=De.yari,Hs=.25;yn=Math.abs(re.x)<=en+Hs/U.x&&Math.abs(re.y)<=An+Hs/U.y&&Math.abs(re.z)<=Gs+Hs/U.z}if(!yn&&De.ince&&Ae.isMesh){let en=At.intersectObject(Ae,!1)[0];yn=!!en&&en.distance<=ae+.5}if(!yn||(xt.setFromMatrixPosition(Ae.matrixWorld),De.minPx&&De.minAdim&&(G.copy(xt).applyMatrix4(l.matrixWorldInverse),De.minAdim*Lt/(2*Math.max(.01,-G.z)*we)<De.minPx*Et)))continue;let Ke=De.hacim??1/0,Ri=$t?xt.distanceToSquared($t):0;(Ke<ve*.99||Ke<=ve*1.01&&Ri<Ue)&&(ue=Ae,ve=Ke,Ue=Ri)}return{vekil:ue,nokta:$t?$t.clone():ue?new C().setFromMatrixPosition(ue.matrixWorld):null}}let Rt=new Set,ct=null,Vt=!1;n.addEventListener("pointerdown",X=>{if(Rt.add(X.pointerId),Rt.size>1){Vt=!0,ct=null;return}ct=Vt?null:{x:X.clientX,y:X.clientY,t:performance.now(),id:X.pointerId}}),n.addEventListener("pointerup",X=>{let ut=ct;if(Rt.delete(X.pointerId),Rt.size||(Vt=!1),!ut||ut.id!==X.pointerId||(ct=null,Math.hypot(X.clientX-ut.x,X.clientY-ut.y)>9||performance.now()-ut.t>600))return;let Et=P.length?tt(X.clientX,X.clientY):null;if(Et){Et.click();return}let Jt=n.getBoundingClientRect(),$t=X.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,ae=Mt((X.clientX-Jt.left)/Jt.width*2-1,-((X.clientY-Jt.top)/Jt.height)*2+1,$t);for(let Lt of Qt)Lt(ae.vekil?ae.vekil.userData:null,ae.nokta,ae.vekil)}),n.addEventListener("pointercancel",X=>{Rt.delete(X.pointerId),Rt.size||(Vt=!1),ct=null});let Ft=null,Ie=X=>{X!==Ft&&(Ft?.classList.remove("ustunde"),X?.classList.add("ustunde"),Ft=X,n.style.cursor=X?"pointer":"")};return n.addEventListener("pointermove",X=>{X.pointerType==="mouse"&&!X.buttons&&Ie(P.length?tt(X.clientX,X.clientY):null)}),n.addEventListener("pointerleave",()=>Ie(null)),n.addEventListener("contextmenu",X=>X.preventDefault()),n.addEventListener("webglcontextlost",X=>{X.preventDefault(),e("baglam-kaybi")}),n.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),g=!0,k()}),K(),{renderer:r,scene:a,camera:l,controls:h,hedefler:Yt,iste:k,kameraGit:Y,tween:lt,etiketKoy:pt,isaretKoy:yt,gorunurAlan:ee,golgeYenile:()=>{g=!0,k()},kareGuncelleyici:X=>(p.add(X),k(),()=>p.delete(X)),yavasGuncelleyici:X=>(b.add(X),k(),()=>b.delete(X)),dokunmaDinle:X=>Qt.add(X),sec:Mt,kadrajOlc:st,guvenliYenile:()=>{R=null,jt=0,k()},yakinlas:X=>{let ut=l.position.clone().sub(h.target),Et=Math.min(h.maxDistance,Math.max(h.minDistance,ut.length()*X)),Jt=l.position.clone(),$t=h.target.clone().addScaledVector(ut.normalize(),Et);return x=!0,lt(260,ae=>l.position.lerpVectors(Jt,$t,ae))},arkaPlan:X=>{r.setClearColor(new Gt(X),1),k()},sonHedef:()=>ne,kalite:()=>({kademe:y,piksel:Math.round(E*100)/100,tam:Math.round(A*100)/100})}}function Bo(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new qe,c=0;for(let u=0;u<n.length;++u){let h=n[u],d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,h=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=wm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let m=wm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function wm(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Mn(a,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<e;m++){let x=u.getComponent(d,m);o.setComponent(d+h,m,x)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var zo=new C;function ei(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;zo.copy(t),zo[i]=0,zo.normalize();let c=.5*a/(a+o),u=1-zo.angleTo(n)/l;return Math.sign(zo[e])===1?u*c:o/(a+o)+c+c*(1-u)}var es=class n extends Ee{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,u=new C(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,x=new C,g=.5/a;for(let p=0,b=0;p<h.length;p+=3,b+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[b+0]=ei(x,c,"z","y",r,i),f[b+1]=1-ei(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[b+0]=1-ei(x,c,"z","y",r,i),f[b+1]=1-ei(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[b+0]=1-ei(x,c,"x","z",r,t),f[b+1]=ei(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[b+0]=1-ei(x,c,"x","z",r,t),f[b+1]=1-ei(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[b+0]=1-ei(x,c,"x","y",r,t),f[b+1]=1-ei(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[b+0]=ei(x,c,"x","y",r,t),f[b+1]=1-ei(x,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var lu={x:45.2,z:21.6,a:6,arduinoZ:28,unoX:57.4,unoZ:21.9};function Am(n,t,e){let{x:i,z:s,a:r}=lu;n.save(),n.strokeStyle=e,n.fillStyle=e,n.lineCap="round",n.lineJoin="round",n.lineWidth=1.05*t,n.beginPath();for(let u=0;u<=160;u++){let h=u/160*Math.PI*2,d=i+r*Math.cos(h),f=s+r*.62*Math.sin(2*h)*.92;u?n.lineTo(d*t,f*t):n.moveTo(d*t,f*t)}n.closePath(),n.stroke();let a=r*.2,o=.8*t,l=i-r*.52,c=i+r*.52;n.lineWidth=o,n.lineCap="butt",n.beginPath(),n.moveTo((l-a)*t,s*t),n.lineTo((l+a)*t,s*t),n.stroke(),n.beginPath(),n.moveTo((c-a)*t,s*t),n.lineTo((c+a)*t,s*t),n.moveTo(c*t,(s-a)*t),n.lineTo(c*t,(s+a)*t),n.stroke(),n.textAlign="center",n.textBaseline="middle",n.save(),n.translate(i*t,lu.arduinoZ*t),n.scale(.92,1),n.font=`800 ${2.5*t}px "Arial Black", "Arial", Helvetica, sans-serif`,n.fillText("ARDUINO",0,0),n.restore(),n.save(),n.translate(lu.unoX*t,lu.unoZ*t),n.scale(.9,1),n.font=`800 ${4.6*t}px "Arial Black", "Arial", Helvetica, sans-serif`,n.fillText("UNO",0,0),n.restore(),n.restore()}function xd(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ns(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d",{willReadFrequently:!1})]}var Em={sade:{pcb:2048,pcbN:0,bb:1536,bbN:0,aniz:8},dusuk:{pcb:1536,pcbN:0,bb:1536,bbN:0,aniz:4},orta:{pcb:2048,pcbN:1024,bb:2048,bbN:1024,aniz:8},yuksek:{pcb:4096,pcbN:2048,bb:3072,bbN:1536,aniz:16}};function yd(n,t,e,i,s,r){let a=xd(i),o=Math.max(2,Math.round(t/s)),l=Math.max(2,Math.round(e/s)),[c,u]=ns(o,l),h=u.createImageData(o,l);for(let d=0;d<o*l;d++){let f=a()<.5?0:255;h.data[d*4]=h.data[d*4+1]=h.data[d*4+2]=f,h.data[d*4+3]=Math.round(a()*255*r)}u.putImageData(h,0,0),n.save(),n.imageSmoothingEnabled=!0,n.drawImage(c,0,0,t,e),n.restore()}function Tm(n,t){let e=n.width,i=n.height,s=n.getContext("2d").getImageData(0,0,e,i).data,[r,a]=ns(e,i),o=a.createImageData(e,i),l=o.data,c=(u,h)=>s[(Math.min(i-1,Math.max(0,h))*e+Math.min(e-1,Math.max(0,u)))*4];for(let u=0;u<i;u++)for(let h=0;h<e;h++){let d=(c(h-1,u)-c(h+1,u))*t/255,f=(c(h,u+1)-c(h,u-1))*t/255,m=1,x=Math.hypot(d,f,m);d/=x,f/=x,m/=x;let g=(u*e+h)*4;l[g]=(d*.5+.5)*255,l[g+1]=(f*.5+.5)*255,l[g+2]=(m*.5+.5)*255,l[g+3]=255}return a.putImageData(o,0,0),r}function or(n,t,e,i=!1){let s=new Di(n);return s.colorSpace=t?$e:Mi,s.minFilter=Oi,s.magFilter=sn,s.anisotropy=e,i&&(s.wrapS=s.wrapT=Hr),s}var gd={albedo:{maske:"#0d7783",iz:"#3fb0bb",ped:"#cfd3d8",altin:"#d9b04f",delik:"#101214",ipek:"#f2f7f7",izAlfa:.32},orm:{maske:"rgb(255,117,0)",iz:"rgb(255,105,0)",ped:"rgb(255,77,255)",altin:"rgb(255,70,255)",delik:"rgb(255,200,0)",ipek:"rgb(255,158,0)",izAlfa:1},yuk:{maske:"rgb(128,128,128)",iz:"rgb(150,150,150)",ped:"rgb(112,112,112)",altin:"rgb(110,110,110)",delik:"rgb(60,60,60)",ipek:"rgb(146,146,146)",izAlfa:1}},Rm=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],zM=[{k:[10.5,24.5,9.5,22.5],n:18},{k:[12,30,22.5,30.5],n:8},{k:[3,17,1.5,14],n:8},{k:[2,22,41,52],n:14},{k:[24,64,29,33],n:10},{k:[24,64,41.5,48],n:10},{k:[20,66,5,9.5],n:10}],VM=[[20.07,45.47,1.27,3.81],[46.99,67.31,1.27,3.81],[25.15,45.47,49.53,52.07],[48.01,63.25,49.53,52.07],[-6.35,9.65,9.24,21.24],[-1.8,12.2,40.4,49.4],[25.75,63.25,32.2,41.4],[17.5,22.5,15,20],[15.75,26.25,24.8,29.2],[11.75,18.25,43.1,49.25],[9.85,16.15,28.35,34.65],[16.35,22.65,34.35,40.65],[4.4,10.4,2.2,8.2],[62.33,67.41,22.86,30.48],[27,30,9.6,16.4],[60,63,9.6,11.6],[37,53.5,16.5,29.6],[53.5,61.5,18.5,25.5],[30,62,9.4,11.8],[24,47,40.6,43.4],[47,64,40.6,43.4]];function Cm(n=1){let t=[],e=(i,s,r,a,o)=>VM.some(([l,c,u,h])=>s+o>l&&i-o<c&&a+o>u&&r-o<h)||Rm.some(([l,c])=>Math.hypot((i+s)/2-l,(r+a)/2-c)<3.6)||t.some(l=>s+.4>l.x-l.w/2&&i-.4<l.x+l.w/2&&a+.4>l.z-l.d/2&&r-.4<l.z+l.d/2);return zM.forEach((i,s)=>{let r=xd(6221056+s),a=Math.round(i.n*n),o=0;for(let l=0;l<400&&o<a;l++){let c=r()<.62?"direnc":"kond",u=c==="direnc"?1.6:2,h=c==="direnc"?.8:1.25,d=r()<.5,f=d?u:h,m=d?h:u,x=Math.round((i.k[0]+r()*(i.k[1]-i.k[0]))/.8)*.8,g=Math.round((i.k[2]+r()*(i.k[3]-i.k[2]))/.8)*.8;x-f/2<i.k[0]||x+f/2>i.k[1]||g-m/2<i.k[2]||g+m/2>i.k[3]||e(x-f/2,x+f/2,g-m/2,g+m/2,.6)||(t.push({x,z:g,w:f,d:m,yatay:d,tur:c,ad:`${c==="direnc"?"R":"C"}${t.length+1}`}),o++)}}),t}function _d(n,t,e,i,{smd:s,logo:r,sus:a}){let o=t/Ze.w;n.fillStyle=i.maske,n.fillRect(0,0,t,e),n.save(),n.globalAlpha=i.izAlfa,n.strokeStyle=i.iz,n.lineWidth=.25*o,n.lineCap="round",n.lineJoin="round";let l=p=>{n.beginPath(),p.forEach(([b,w],M)=>M?n.lineTo(b*o,w*o):n.moveTo(b*o,w*o)),n.stroke()};for(let p=0;p<14;p++){let b=31.5+p*2.54>46?33+p*2.54:31.5+p*2.54,w=7+p%4*.8;l([[b,4.6],[b,w],[b-2.2,w+2.2],[b-2.2,30.5]])}for(let p=0;p<6;p++){let b=49.3+p*2.54;l([[b,48.4],[b,45.2-p*.3],[b-2.4,42.8-p*.3],[b-2.4,41.6]])}l([[10.5,13.5],[16,13.5],[18.5,16]]),l([[10.5,17.6],[15,17.6],[17.8,20.4],[21,20.4]]),l([[8,44],[13,44],[15.5,46.5]]),l([[36.5,48.4],[36.5,45.5],[33,42],[16,42]]),l([[39,48.4],[39,45.4],[29,45.4]]),l([[23,17.5],[26,17.5],[28.5,20],[28.5,30.5]]),l([[24.5,27],[27,27],[29.5,29.5]]),l([[3,30],[8,30],[10.5,27.5],[10.5,22]]),l([[57,28.5],[60,28.5],[62.4,26.1]]),n.restore(),n.fillStyle=i.ped;for(let p of s){let b=p.yatay?p.w*.3:p.w*1.08,w=p.yatay?p.d*1.08:p.d*.3;for(let M of[-1,1]){let A=p.x+(p.yatay?M*(p.w/2-b/2+.1):0),y=p.z+(p.yatay?0:M*(p.d/2-w/2+.1));n.fillRect((A-b/2)*o,(y-w/2)*o,b*o,w*o)}}for(let[p,b]of Rm)n.fillStyle=i.altin,n.beginPath(),n.arc(p*o,b*o,2.8*o,0,Math.PI*2),n.fill(),n.fillStyle=i.delik,n.beginPath(),n.arc(p*o,b*o,1.6*o,0,Math.PI*2),n.fill();let c=i.ipek;n.strokeStyle=c,n.fillStyle=c,n.lineWidth=.2*o;let u=(p,b,w,M)=>n.strokeRect(p*o,b*o,(w-p)*o,(M-b)*o);u(20,1.2,45.5,3.9),u(47,1.2,67.3,3.9),u(25.1,49.5,45.5,52.1),u(48,49.5,63.3,52.1);let h='"Arial Narrow", "Roboto Condensed", "Liberation Sans Narrow", Arial, Helvetica, sans-serif',d=(p,b,w,M,{don:A=0,hiza:y="center",kalin:E=700,dar:v=.84}={})=>{n.save(),n.translate(b*o,w*o),n.rotate(A),n.scale(v,1),n.font=`${E} ${M*o}px ${h}`,n.textAlign=y,n.textBaseline="middle",n.fillText(p,0,0),n.restore()},f=-Math.PI/2,m={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX\u21921",0:"RX\u21900"};for(let[p,b]of Object.entries(m))d(b,zi[p],4.4,1.25,{don:f,hiza:"right"});d("DIGITAL (PWM~)",46,10.6,1.5);let x={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[p,b]of Object.entries(x))d(b,Us[p],48.3,1.2,{don:f,hiza:"left"});for(let[p,b]of Object.entries(Os))d(p,b,48.3,1.25,{don:f,hiza:"left"});d("POWER",35.3,42,1.5),d("ANALOG IN",55.6,42,1.5),d("L",26.6,10.6,1.2),d("TX",25.9,13.3,1),d("RX",25.9,15.4,1),d("ON",64.4,10.6,1.2),d("RESET",7.4,10.3,1.1),d("ICSP",64.9,21.9,1.1);let g=(p,b,w)=>{n.beginPath(),n.arc(p*o,b*o,w*o,0,Math.PI*2),n.fill()};g(62,24.1,.35),g(25.4,34.6,.35);for(let[p,b]of[[13,31.5],[19.5,37.5]])n.beginPath(),n.arc(p*o,b*o,3.5*o,0,Math.PI*2),n.stroke(),d("+",p+3.9,b-2.4,1.3);if(n.strokeRect((44.5-18.9)*o,(36.8-4.75)*o,37.8*o,9.5*o),a){d("C1",9.2,31.5,.8,{kalin:600}),d("C2",23.2,37.5,.8,{kalin:600}),d("Y1",21,29.9,.8,{kalin:600}),d("U1",44.5,43.6,.8,{kalin:600}),d("U3",20,21.2,.8,{kalin:600}),d("X1",5.2,38.6,.8,{kalin:600});for(let p of s.slice(0,26))p.x>4&&p.x<64&&d(p.ad,p.x,p.z+(p.yatay?1.15:1.55),.62,{kalin:600})}r&&Am(n,o,c)}function Im(n,{smd:t,logo:e}){let i=Em[n],s=i.pcb,r=Math.round(s*Ze.d/Ze.w),[a,o]=ns(s,r);_d(o,s,r,gd.albedo,{smd:t,logo:e,sus:!0}),n!=="sade"&&(yd(o,s,r,45223,s/110,.05),yd(o,s,r,45224,s/420,.04));let l={albedo:or(a,!0,i.aniz)};if(i.pcbN){let c=i.pcbN,u=Math.round(c*Ze.d/Ze.w),[h,d]=ns(c,u);_d(d,c,u,gd.yuk,{smd:t,logo:e,sus:!0}),l.normal=or(Tm(h,n==="yuksek"?2.2:1.6),!1,i.aniz);let[f,m]=ns(c,u);_d(m,c,u,gd.orm,{smd:t,logo:e,sus:!0}),l.orm=or(f,!1,i.aniz)}return l}function GM(n){let[t,e]=ns(1024,216);return e.fillStyle="#17171a",e.fillRect(0,0,1024,216),yd(e,1024,216,3103,6,.06),e.fillStyle="#0b0b0d",e.beginPath(),e.arc(0,108,30,-Math.PI/2,Math.PI/2),e.fill(),e.strokeStyle="#26262b",e.lineWidth=3,e.beginPath(),e.arc(70,170,16,0,Math.PI*2),e.stroke(),e.fillStyle="#9ea2a9",e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(540,84),e.scale(.9,1),e.font='700 64px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("ATMEGA328P-PU",0,0),e.restore(),e.save(),e.translate(540,150),e.scale(.9,1),e.font='600 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillStyle="#80848b",e.fillText("AVR",0,0),e.restore(),or(t,!0,n)}function HM(n){let[t,e]=ns(256,96);return e.fillStyle="#c9ccd2",e.fillRect(0,0,256,96),e.fillStyle="#2a2a2e",e.textAlign="center",e.textBaseline="middle",e.font='700 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("16.000",128,50),or(t,!0,n)}function WM(n){let[t,e]=ns(256,64);e.fillStyle="#1c1d22",e.fillRect(0,0,256,64),e.fillStyle="#b9bdc4",e.fillRect(150,0,56,64),e.fillStyle="#1c1d22";for(let i of[12,30,48])e.fillRect(166,i-2,24,5);return or(t,!0,n)}function XM(){let[n,t]=ns(128,128),e=xd(3868);t.fillStyle="rgb(128,128,128)",t.fillRect(0,0,128,128);for(let s=0;s<260;s++){let r=110+Math.round(e()*36);t.fillStyle=`rgb(${r},${r},${r})`,t.fillRect(0,Math.floor(e()*128),128,1)}let i=or(Tm(n,.8),!1,4,!0);return i.repeat.set(2,2),i}function Pm(n,t){let e=Em[n],i=Math.min(e.aniz,t||1),s=n==="dusuk"||n==="sade",r=new Map,a=[],o=m=>(m&&a.push(m),m),l=m=>new Se(m),c={baslikPlastik:()=>l({color:1973794,roughness:.55}),baslikIc:()=>l({color:526346,roughness:.9}),metalCelik:()=>l({color:13619928,metalness:1,roughness:.32}),metalFirca:()=>l({color:13093584,metalness:1,roughness:.38,normalMap:s?null:o(XM()),normalScale:new et(.35,.35)}),kalay:()=>l({color:12896462,metalness:1,roughness:.3}),altin:()=>l({color:14266447,metalness:1,roughness:.28}),kapAlu:()=>l({map:o(WM(i)),metalness:.55,roughness:.42}),kapUst:()=>l({color:12041154,metalness:.9,roughness:.35}),cipGovde:()=>l({color:1513242,roughness:.62}),cipUst:()=>l({map:o(GM(i)),roughness:.62}),kristal:()=>l({map:o(HM(i)),metalness:.95,roughness:.3}),kristalYan:()=>l({color:13225170,metalness:.95,roughness:.3}),resetTaban:()=>l({color:1710622,roughness:.55}),resetDugme:()=>l({color:14207392,roughness:.5}),ayak:()=>l({color:3487034,roughness:.85}),pcbKenar:()=>l({color:10723188,roughness:.7}),jak:()=>l({color:1579035,roughness:.5}),koyu:()=>l({color:657932,roughness:.95}),smdDirenc:()=>l({color:1776413,roughness:.5}),smdKond:()=>l({color:11045722,roughness:.55}),bbYan:()=>l({color:15526111,roughness:.62}),klips:()=>l({color:12094026,metalness:1,roughness:.38}),dupont:()=>l({color:2763312,roughness:.55}),butonKapak:()=>l({color:14172995,roughness:.42})};function u(m){if(!r.has(m)){let x=c[m];if(!x)throw new Error("bilinmeyen malzeme "+m);r.set(m,x())}return r.get(m)}function h(m){let x={color:new Gt(m).lerp(new Gt(16777215),.35),emissive:new Gt(m),emissiveIntensity:0,roughness:.16,metalness:0,transparent:!s,opacity:s?1:.8,depthWrite:!0};return f(n==="yuksek"?new _o({...x,clearcoat:1,clearcoatRoughness:.08}):l(x))}let d=[],f=m=>(d.push(m),m);return{duzey:n,aniz:i,mat:u,ledKubbe:h,kayit:o,kayitMat:f,ek:m=>(n==="sade"?{smd:!0}:{smd:!0,soket:n!=="dusuk",ledIc:n!=="dusuk"})[m]??!1,dispose(){for(let m of r.values())m.dispose();for(let m of d)m.dispose();for(let m of a)m.dispose()}}}var YM="uyumlu",$M={uyumlu:[[0,0],[66.38,0],[67.9,1.52],[67.9,14.3],[68.58,14.98],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],gercek:[[0,0],[64.52,0],[66.04,1.52],[66.04,12.95],[68.58,15.49],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],dikdortgen:[[0,0],[68.58,0],[68.58,53.34],[0,53.34]]},vd=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],ln=(n,t,e,i,s,r)=>{let a=new Ee(n,t,e);return a.translate(i,s,r),a},ya=(n,t,e,i,s,r,a)=>{let o=new es(n,t,e,2,i);return o.translate(s,r,a),o},bd=(n,t,e,i,s,r=16,a=n)=>{let o=new kn(a,n,t,r);return o.translate(e,i,s),o},qM=n=>n.index?n.toNonIndexed():n;function cn(n,t,e=!0){let i=new Kt(Bo(n.map(qM),!1),t);return i.castShadow=i.receiveShadow=e,i}function Md(n,t,e,i=16){let s=new na(n,{depth:t,bevelEnabled:!1,curveSegments:i});return s.rotateX(Math.PI/2),s.translate(0,e,0),s}var ZM=(n,t,e,i=24)=>{let s=new Ss;return s.absarc(n,t,e,0,Math.PI*2,!0),s.curves.length&&(s.autoClose=!0),s};function Lm(n,{logo:t=!0}={}){let e=new dn;e.name="kart-fiziksel";let i=n.duzey,s=i!=="dusuk",r={sade:16,dusuk:16,orta:24,yuksek:32}[i],a=n.ek("smd")?Cm(i==="yuksek"?1.45:1):[],o=Im(i,{smd:a,logo:t});for(let H of Object.values(o))n.kayit(H);let l=Ze.x-Ze.w/2,c=Ze.z-Ze.d/2,u=new ts($M[YM].map(([H,j])=>new et(H,j)));for(let[H,j]of vd)u.holes.push(ZM(H,j,1.6,r));let h=Md(u,1.6,0,r),d=h.attributes.position,f=h.attributes.uv;for(let H=0;H<d.count;H++)f.setXY(H,d.getX(H)/Ze.w,1-d.getZ(H)/Ze.d);h.translate(l,It,c);let m=new Se({map:o.albedo,roughness:o.orm?1:.45,metalness:o.orm?1:0});o.normal&&(m.normalMap=o.normal,m.normalScale=new et(i==="yuksek"?.8:.6,i==="yuksek"?.8:.6)),o.orm&&(m.roughnessMap=o.orm,m.metalnessMap=o.orm),n.kayitMat(m);let x=new Kt(h,[m,n.mat("pcbKenar")]);x.castShadow=x.receiveShadow=!0,e.add(x);let g=[];for(let[H,j]of vd){let Y=xe(H,j,It-.8),st=new kn(1.6,1.6,1.6,r,1,!0);st.translate(Y.x,Y.y,Y.z),g.push(st)}e.add(cn(g,n.mat("altin"))),e.add(cn(vd.map(([H,j])=>{let Y=xe(H,j,1.2);return bd(1.6,2.4,Y.x,Y.y,Y.z,14)}),n.mat("ayak")));let p=[],b=[],w=[],M=(H,j,Y)=>{let st=H.map(_=>j[_]),lt=Math.min(...st)-1.27,_t=Math.max(...st)+1.27,Pt=Y-1.27,Ot=Y+1.27,ft=7.1,P=xe((lt+_t)/2,Y,It+ft/2);p.push(ya(_t-lt,ft,2.54,.25,P.x,P.y,P.z));let le=xe((lt+_t)/2,Y,It+ft+.02);b.push(ln(_t-lt-.5,.04,2,le.x,le.y,le.z));let jt=new ts([new et(lt,Pt),new et(_t,Pt),new et(_t,Ot),new et(lt,Ot)]);for(let _ of st){let G=new Ss([new et(_-.53,Y-.53),new et(_-.53,Y+.53),new et(_+.53,Y+.53),new et(_+.53,Y-.53)]);if(jt.holes.push(G),s){let J=xe(_,Y,It+ft+.25);w.push(ln(.42,.4,.22,J.x,J.y,J.z-.3))}}let R=Md(jt,1.4,ni,4);R.translate(l,0,c),p.push(R)};M(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],zi,xa),M(["7","6","5","4","3","2","1","0"],zi,xa),M(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],Us,ss),M(["A0","A1","A2","A3","A4","A5"],Os,ss);let A=[],y=xe(64.87,26.67,It+1.25);p.push(ya(5.08,2.5,7.62,.2,y.x,y.y,y.z));for(let H of[63.6,66.14])for(let j of[24.13,26.67,29.21]){let Y=xe(H,j,It+5.25);A.push(ln(.64,5.5,.64,Y.x,Y.y,Y.z));let st=new kn(.06,.45,.5,4);st.rotateY(Math.PI/4),st.translate(Y.x,It+8.25,Y.z),A.push(st)}let E=[],v=[],T=[];y=xe(1.65,15.24,It+5.45),E.push(ya(16,10.9,12,.5,y.x,y.y,y.z));let I=new ts([new et(-4.2,-3.9),new et(4.2,-3.9),new et(4.2,2.6),new et(3,3.9),new et(-3,3.9),new et(-4.2,2.6)]),L=new na(I,{depth:.3,bevelEnabled:!1});L.rotateY(-Math.PI/2),y=xe(-6.36,15.24,It+5.45),L.translate(y.x+.25,y.y,y.z),v.push(L);let N=new Ee(.14,3,5.2);y=xe(-6.42,15.24,It+5),N.translate(y.x,y.y,y.z);for(let H of[-6.2,6.2]){let j=xe(4.5,15.24+H,It-.4);E.push(ln(1.2,1.4,.3,j.x,j.y,j.z))}y=xe(5.2,44.9,It+5.5),T.push(ya(14,11,9,.8,y.x,y.y,y.z));let B=new mo(3.2,.32,8,28);B.rotateY(Math.PI/2),y=xe(-1.84,44.9,It+5.8),B.translate(y.x,y.y,y.z),T.push(B);let k=new Qs(3.15,28);k.rotateY(-Math.PI/2),k.translate(y.x-.03,y.y,y.z),v.push(k);let z=new kn(1,1,1.2,16);z.rotateZ(Math.PI/2),z.translate(y.x+.4,y.y,y.z),E.push(z);let Z=[],q=[],ot=[[0,0],[3.1,0],[3.12,1],[2.95,1.2],[3.12,1.4],[3.15,4.9],[3.05,5.35],[2.85,5.5],[0,5.5]].map(([H,j])=>new et(H,j)),K=[];for(let[H,j]of[[13,31.5],[19.5,37.5]]){let Y=xe(H,j,It),st=new ws(ot,s?32:20);st.rotateY(Math.PI*.8),st.translate(Y.x,Y.y+.35,Y.z),K.push(st);let lt=new kn(2.75,2.75,.06,28);lt.translate(Y.x,Y.y+5.87,Y.z),Z.push(lt);for(let _t of[0,Math.PI/2]){let Pt=new Ee(4.2,.1,.32);Pt.rotateY(_t+.3),Pt.translate(Y.x,Y.y+5.9,Y.z),v.push(Pt)}q.push(ln(6.3,.35,6.3,Y.x,Y.y+.175,Y.z))}y=xe(21,27,It);let nt=new ts;nt.absarc(-3.05,0,2.2,Math.PI/2,Math.PI*1.5,!1),nt.absarc(3.05,0,2.2,-Math.PI/2,Math.PI/2,!1);let O=Md(nt,3.4,3.5,12);O.translate(y.x,y.y,y.z);let dt=new jn(6,2.25);if(dt.rotateX(-Math.PI/2),dt.translate(y.x,y.y+3.54,y.z),v.push(ln(9.6,.15,3.6,y.x,y.y+.075,y.z)),y=xe(44.5,36.8,It+1.3),p.push(ya(37.5,2.6,9.2,.3,y.x,y.y,y.z)),s)for(let H=0;H<14;H++)for(let j of[-1,1]){let Y=xe(27.99+H*2.54,36.8+j*4.35,It+2.62);v.push(ln(1,.04,.5,Y.x,Y.y,Y.z))}let ht=[];for(let H=0;H<14;H++)for(let j of[-1,1]){let Y=27.99+H*2.54,st=xe(Y,36.8+j*3.95,It+4.1);ht.push(ln(.5,.3,.6,st.x,st.y,st.z));let lt=xe(Y,36.8+j*4.15,It+3.3);ht.push(ln(.5,1.6,.26,lt.x,lt.y,lt.z));let _t=xe(Y,36.8+j*4.15,It+2.62);ht.push(ln(.28,.4,.26,_t.x,_t.y,_t.z))}let qt=n.mat("cipGovde"),ee=n.mat("cipUst"),ne=new Kt(new es(35.56,3.3,7.4,2,.3),[qt,qt,ee,qt,qt,qt]);ne.position.copy(xe(44.5,36.8,It+2.6+1.65)),ne.castShadow=ne.receiveShadow=!0,e.add(ne);let Q=[],it=[];y=xe(20,17.5,It+.45),Q.push(ln(5,.9,5,y.x,y.y,y.z));for(let[H,j,Y,st]of[[-2.6,0,.25,4.2],[2.6,0,.25,4.2],[0,-2.6,4.2,.25],[0,2.6,4.2,.25]])it.push(ln(Y,.2,st,y.x+H,It+.1,y.z+j));y=xe(15,47.5,It+.8),Q.push(ln(6.5,1.6,3.5,y.x,y.y,y.z));for(let H of[-2.3,0,2.3])it.push(ln(.7,.3,1.4,y.x+H,It+.15,y.z+2.2));y=xe(15,44.6,It+.2),it.push(ln(3.2,.3,3,y.x,y.y,y.z)),y=xe(7.4,5.2,It+1.6);let gt=[ya(6,3.2,6,.45,y.x,y.y,y.z)];E.push(ln(6.1,.3,6.1,y.x,It+3.35,y.z));for(let H of[-2.4,2.4])for(let j of[-2.4,2.4])v.push(bd(.32,.06,y.x+H,It+3.53,y.z+j,10));for(let H of[-3.3,3.3])for(let j of[-2.25,2.25])E.push(ln(.5,1.6,.7,y.x+H,It+.8,y.z+j));let Ht=new Kt(bd(1.7,1.3,y.x,It+4.1,y.z,24),n.mat("resetDugme"));if(Ht.castShadow=Ht.receiveShadow=!0,e.add(cn(p,n.mat("baslikPlastik")),cn(b,n.mat("baslikIc")),cn(A,n.mat("altin")),cn(E,n.mat("metalFirca")),cn(v,n.mat("koyu")),cn(T,n.mat("jak")),cn(K,n.mat("kapAlu")),cn(Z,n.mat("kapUst")),cn(q,n.mat("baslikPlastik")),cn([O],n.mat("kristalYan")),cn([dt],n.mat("kristal"),!1),cn(ht,n.mat("metalCelik")),cn(Q,qt),cn(it,n.mat("kalay")),cn(gt,n.mat("resetTaban")),cn([N],n.mat("baslikPlastik")),Ht),w.length&&e.add(cn(w,n.mat("altin"),!1)),a.length){let H=new Ee(1,1,1),j=new Ee(1,1,1),Y=new Se({color:16777215,roughness:.5});n.kayitMat(Y);let st=new zn(H,Y,a.length),lt=new zn(j,n.mat("kalay"),a.length*2),_t=new We,Pt=new Gt(1776413),Ot=new Gt(11045722);a.forEach((ft,P)=>{let le=ft.tur==="direnc"?.45:.7,jt=xe(ft.x,ft.z,It+le/2),R=ft.yatay?ft.w:ft.d,_=ft.yatay?ft.d:ft.w,F=R*.18;_t.position.copy(jt),_t.rotation.set(0,ft.yatay?0:Math.PI/2,0),_t.scale.set(R-2*F+.02,le,_),_t.updateMatrix(),st.setMatrixAt(P,_t.matrix),st.setColorAt(P,ft.tur==="direnc"?Pt:Ot);for(let G of[-1,1])_t.position.set(jt.x+(ft.yatay?G*(R/2-F/2):0),jt.y,jt.z+(ft.yatay?0:G*(R/2-F/2))),_t.scale.set(F,le+.02,_+.02),_t.updateMatrix(),lt.setMatrixAt(P*2+(G>0?1:0),_t.matrix)}),e.add(st,lt)}let St=(H,j,Y)=>{let st=new Se({color:new Gt(Y).multiplyScalar(.55),emissive:Y,emissiveIntensity:0,roughness:.25,transparent:!1});n.kayitMat(st);let lt=xe(H,j,It+.25),_t=new Kt(new Ee(1,.5,.8),st);_t.position.copy(lt),e.add(_t);let Pt=new Kt(Bo([ln(.32,.42,.82,lt.x-.66,lt.y-.04,lt.z),ln(.32,.42,.82,lt.x+.66,lt.y-.04,lt.z)]),n.mat("kalay"));return e.add(Pt),Ot=>{st.emissiveIntensity=Ot?1.1:0,st.color.set(Ot?Y:new Gt(Y).multiplyScalar(.55))}},Wt=St(28.5,10.6,16754470),ge=St(61.5,10.6,4448378);return St(28.5,13.3,16766287),St(28.5,15.4,16766287),{grup:e,kanca:{ledL:Wt,ledOn:ge}}}var Ze={x:0,z:32,w:68.58,d:53.34},zt={x:0,z:-38,w:82.5,d:54.5,h:8.5},It=4,ni=It+8.5,Qe=zt.h,Si=2.54,KM=n=>Ze.x-Ze.w/2+n,JM=n=>Ze.z-Ze.d/2+n,xe=(n,t,e=It)=>new C(KM(n),e,JM(t)),zi={SCL:21.336,SDA:23.876,AREF:26.416,"GND-D":28.956,13:31.496,12:34.036,11:36.576,10:39.116,9:41.656,8:44.196,7:48.26,6:50.8,5:53.34,4:55.88,3:58.42,2:60.96,1:63.5,0:66.04},Us={NC:26.416,IOREF:28.956,RESET:31.496,"3.3V":34.036,"5V":36.576,GND1:39.116,GND2:41.656,VIN:44.196},Os={A0:49.276,A1:51.816,A2:54.356,A3:56.896,A4:59.436,A5:61.976},xa=2.54,ss=50.8;function wd(n){let t=String(n);if(t in zi)return xe(zi[t],xa,ni);if(t in Us)return xe(Us[t],ss,ni);if(t in Os)return xe(Os[t],ss,ni);throw new Error("bilinmeyen pin "+n)}var Um=["3","5","6","9","10","11"];function jM(n){let t=String(n);return t==="13"?"pin-13":t==="0"||t==="1"?"pin-rx-tx":Um.includes(t)?"pin-pwm":/^\d+$/.test(t)?"pin-dijital":t.startsWith("GND")?"pin-gnd":{"5V":"pin-5v","3.3V":"pin-3v3",VIN:"pin-vin",AREF:"pin-aref",IOREF:"pin-ioref",RESET:"pin-reset",SDA:"pin-sda-scl",SCL:"pin-sda-scl"}[t]||(/^A\d$/.test(t)?"pin-analog":null)}function Dm(n){let t=String(n);return t==="0"?"0. pin (RX)":t==="1"?"1. pin (TX)":Um.includes(t)?`${t}. pin (~${t})`:/^\d+$/.test(t)?`${t}. pin`:t.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[t]||t}function va(n,t,e,i,s=0,r=0,a=0){let o=new We;return o.position.set(s,r,a),o.userData={...n,yari:[t/2,e/2,i/2],hacim:n.hacim??t*e*i},o.updateMatrixWorld(),o}var Vo={a:13.97,b:11.43,c:8.89,d:6.35,e:3.81,f:-3.81,g:-6.35,h:-8.89,i:-11.43,j:-13.97},Wn=n=>zt.x-36.83+(n-1)*Si,lr=(n,t,e=Qe)=>new C(Wn(n),e,zt.z+Vo[t]),is={"yakin-":19.05,"yakin+":21.59,"uzak-":-19.05,"uzak+":-21.59},_a=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];function Om(n,t,e,i=Qe){let s=_a.reduce((r,a)=>Math.abs(a-e)<Math.abs(r-e)?a:r,_a[0]);return new C(Wn(s),i,zt.z+is[n+t])}function Sd(n,t,e,i,s,r){let a=new Ee(n,t,e);return a.translate(i,s,r),a}function cr(n){n.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}function Nm(n,t){let e=new Kt(Bo(n.map(i=>i.index?i.toNonIndexed():i),!1),t);return e.matrixAutoUpdate=!1,e}function Ad(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var Ed=1;function Fm(n){let t=new Di(n);return t.colorSpace=$e,t.anisotropy=Ed,t}var Go=(()=>{let n=null;return()=>{if(n)return n;let[t,e]=Ad(64,64),i=e.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),n=new Di(t),n}})(),pn={};function Ho(){return pn.hazir||Object.assign(pn,{hazir:!0,pcbKenar:new Se({color:679785,roughness:.45}),siyah:new Se({color:2500140,roughness:.55}),koyu:new Sn({color:789519}),metal:new Se({color:14014686,metalness:1,roughness:.28}),altin:new Se({color:14858588,metalness:1,roughness:.32}),cip:new Se({color:1776416,roughness:.72}),ayak:new Se({color:3816e3,roughness:.9}),bbYan:new Se({color:15657955,roughness:.78}),bbDelik:new Sn({color:3421242}),serit:new Se({color:13225170,metalness:.9,roughness:.35}),vurgu:new Sn({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new io({color:6962672}),secim:new Sn({color:1483594,transparent:!0,opacity:.85,depthWrite:!1}),gorunmez:new Sn({visible:!1})}),pn}function Bm(n){Ho();let t=new dn;t.name="kart";let e=Lm(Pm("sade",Ed),{logo:!0});e.grup.traverse(b=>{b.isInstancedMesh&&(b.userData.park=!0)}),t.add(e.grup);let i=(b,w)=>{let M=b.map(A=>w[A]);return{x1:Math.min(...M)-1.27,x2:Math.max(...M)+1.27}},s=i(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],zi),r=i(["7","6","5","4","3","2","1","0"],zi),a=i(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],Us),o=i(["A0","A1","A2","A3","A4","A5"],Os),l=(b,w,M,A)=>{let y=new Js(new bs({map:Go(),color:M,blending:Ui,depthWrite:!1,transparent:!0}));return y.scale.set(6,6,1),y.position.copy(xe(b,w,It+1.1)),y.visible=!1,t.add(y),E=>{A(E),y.visible=E}},c=l(28.5,10.6,16754470,e.kanca.ledL),u=l(61.5,10.6,4448378,e.kanca.ledOn),h=(b,w,M,A,y,E)=>{let v=xe(b,w,M);return[v.x,v.y,v.z,A,y,E]},d={kart:[Ze.x,7,Ze.z,Ze.w,14,Ze.d],usb:h(1.65,15.24,It+5.45,17,11.6,12.8),"guc-girisi":h(5.2,44.9,It+5.5,15,11.8,9.8),mikrodenetleyici:h(44.5,36.8,It+3,38.5,6.2,10.2),"dijital-pinler":h((s.x1+r.x2)/2,xa,It+4.3,r.x2-s.x1+1.2,9.4,3.6),"analog-pinler":h((o.x1+o.x2)/2,ss,It+4.3,o.x2-o.x1+1.2,9.4,3.6),"guc-pinleri":h((a.x1+a.x2)/2,ss,It+4.3,a.x2-a.x1+1.2,9.4,3.6),reset:h(7.4,5.2,It+2.4,7,5,7)},f=[],m=(b,w)=>{let[M,A,y,E,v,T]=w,I=va({parca:b.kesif,...b},E,v,T,M,A,y);f.push(I),n.push(I)};m({kesif:"kart",parca:"kart"},d.kart);for(let b of["usb","guc-girisi","mikrodenetleyici","dijital-pinler","analog-pinler","guc-pinleri","reset"])m({kesif:b},d[b]);m({kesif:"usb-cipi"},h(20,17.5,It+1.1,7,2.6,7)),m({kesif:"kristal"},h(21,27,It+1.9,11.5,4.2,5.4)),m({kesif:"regulator"},h(15,46.2,It+1.1,7.4,2.6,6.8));for(let[b,w]of[[13,31.5],[19.5,37.5]])m({kesif:"kondansator"},h(b,w,It+2.9,7.2,6.2,7.2));m({kesif:"icsp"},h(64.87,26.67,It+4.4,6.4,9.2,9)),m({kesif:"led-l"},h(27.6,10.6,It+.8,4.6,1.8,2.3)),m({kesif:"led-txrx"},h(27.3,14.35,It+.8,4.8,1.8,4.4)),m({kesif:"led-on"},h(62.9,10.6,It+.8,5.4,1.8,2.3));for(let[b,w]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])m({kesif:"montaj-deligi"},h(b,w,It+.3,4.4,1.6,4.4));let x=[];for(let[b,w]of[[zi,xa],[Us,ss],[Os,ss]])for(let[M,A]of Object.entries(b)){let y=jM(M);if(!y)continue;let E=ni+1.2-It;m({kesif:y,parca:"pin",pin:M,ozel:Dm(M),minAdim:Si,minPx:12},h(A,w,It+E/2,2.5,E,2.6)),x.push({ad:M,kesif:y,ozel:Dm(M),nokta:xe(A,w,ni+.6)})}let g=(b,w,M)=>xe(b,w,M),p=[{id:"usb",nokta:g(1.65,15.24,It+12)},{id:"guc-girisi",nokta:g(5.2,44.9,It+12.2)},{id:"mikrodenetleyici",nokta:g(44.5,36.8,It+6.6)},{id:"usb-cipi",nokta:g(20,17.5,It+1.6)},{id:"kristal",nokta:g(21,27,It+4.3)},{id:"regulator",nokta:g(15,46.5,It+2.4)},{id:"kondansator",nokta:g(13,31.5,It+6.2)},{id:"reset",nokta:g(7.4,5.2,It+5.4)},{id:"icsp",nokta:g(64.87,26.67,It+9.4)},{id:"led-l",nokta:g(28.5,10.6,It+1)},{id:"led-txrx",nokta:g(28.5,14.35,It+1)},{id:"led-on",nokta:g(61.5,10.6,It+1)},{id:"dijital-pinler",nokta:g(46,10.6,It+.8)},{id:"analog-pinler",nokta:g(55.6,42,It+.8)},{id:"guc-pinleri",nokta:g(35.3,42,It+.8)},{id:"montaj-deligi",nokta:g(66.04,17.78,It+.8)}];return{grup:t,alanlar:d,ledL:c,ledOn:u,vekiller:f,pinler:x,kesifNoktalari:p}}function QM(){let t=Math.round(2048*zt.d/zt.w),e=2048/zt.w,[i,s]=Ad(2048,t),r=o=>(o+zt.w/2)*e,a=o=>(o+zt.d/2)*e;s.fillStyle="#f4f2ec",s.fillRect(0,0,2048,t),s.fillStyle="#dcd8cf",s.fillRect(0,a(-1.5),2048,3*e),s.fillStyle="#cfcac0",s.fillRect(0,a(-.35),2048,.7*e);for(let o of[1,-1])s.fillStyle="#d23b3b",s.fillRect(r(-37),a(o*23.6)-.3*e,r(37)-r(-37),.6*e),s.fillStyle="#2f62c9",s.fillRect(r(-37),a(o*16.9)-.3*e,r(37)-r(-37),.6*e);s.font=`700 ${2.1*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";for(let o of[1,-1])for(let l of[-39.4,39.4])s.fillStyle="#d23b3b",s.fillText("+",r(l),a(o*is["yakin+"])),s.fillStyle="#2f62c9",s.fillText("\u2212",r(l),a(o*is["yakin-"]));s.fillStyle="#8a8478",s.font=`600 ${1.45*e}px "DejaVu Sans", Arial, sans-serif`;for(let[o,l]of Object.entries(Vo))for(let c of[-39.3,39.3])s.fillText(o,r(c),a(l));for(let o of[1,5,10,15,20,25,30])for(let l of[1,-1])s.fillText(String(o),r(-36.83+(o-1)*Si),a(l*15.45));return Fm(i)}function zm(n){Ho();let t=new dn;t.name="breadboard";let e=new Se({map:QM(),roughness:.78}),i=pn.bbYan.clone(),s=[i,i,e,i,i,i],r=new Kt(new es(zt.w,zt.h,zt.d,3,1.1),s);r.position.set(zt.x,zt.h/2,zt.z),t.add(r);let a=[],o=y=>a.push(Sd(1.15,.04,1.15,y.x,Qe+.02,y.z));for(let y=1;y<=30;y++)for(let E of Object.keys(Vo))o(lr(y,E));for(let y of Object.keys(is))for(let E of _a)o(new C(Wn(E),0,zt.z+is[y]));t.add(Nm(a,pn.bbDelik));let l=[];for(let y=1;y<=30;y++)for(let E of[1,-1])l.push(Sd(1.5,1.1,11.4,Wn(y),Qe-2.3,zt.z+E*8.89));for(let y of Object.values(is))l.push(Sd(Wn(30)-Wn(2)+1.6,1.1,1.5,zt.x,Qe-2.3,zt.z+y));let c=Nm(l,pn.serit);c.visible=!1,t.add(c),cr(t);let u=new Ee(1.7,.06,1.7),h=new zn(u,pn.secim,25);h.count=0,h.frustumCulled=!1,t.add(h);let d=new Me;function f(y){h.count=y.length,y.forEach((E,v)=>{d.makeTranslation(E.x,Qe+.06,E.z),h.setMatrixAt(v,d)}),h.instanceMatrix.needsUpdate=!0}function m(y){let E=y.x-zt.x,v=y.z-zt.z,T=Math.round((E+36.83)/Si)+1,I=null,L=1.6;for(let[N,B]of Object.entries(Vo)){let k=Math.hypot(E-(-36.83+(T-1)*Si),v-B);T>=1&&T<=30&&k<L&&(L=k,I={tur:"sutun",sutun:T,satir:N})}for(let[N,B]of Object.entries(is))Math.abs(v-B)<1.3&&_a.some(k=>Math.abs(E-(-36.83+(k-1)*Si))<1.3)&&(I={tur:"ray",ray:N});if(!I)return null;if(I.tur==="sutun"){let N="abcde".includes(I.satir)?"abcde":"fghij";return{...I,delikler:[...N].map(B=>lr(I.sutun,B)),ad:`${I.sutun}. s\xFCtun, ${N[0]}-${N[4]} sat\u0131rlar\u0131`}}return{...I,delikler:_a.map(N=>new C(Wn(N),0,zt.z+is[I.ray])),ad:I.ray.endsWith("+")?"Art\u0131 (+) ray\u0131":"Eksi (\u2212) ray\u0131"}}let x={breadboard:[zt.x,zt.h/2,zt.z,zt.w,zt.h+1,zt.d],"bb-yakin-raylar":[zt.x,Qe,zt.z+20.32,76,1.4,5.6],"bb-satirlar":[zt.x,Qe,zt.z,77,1.4,31],"bb-kanal":[zt.x,Qe,zt.z,80,1.2,3.2]},g=[],p=(y,E,v,T,I,L,N)=>{let B=va({parca:y.kesif,bb:!0,...y},E,v,T,I,L,N);g.push(B),n.push(B)},b=Qe-.1,w=.8;p({kesif:"breadboard"},zt.w,zt.h+1,zt.d,zt.x,zt.h/2,zt.z);for(let y=1;y<=30;y++)for(let[E,v]of[[1,"a-e"],[-1,"f-j"]])p({kesif:"serit",ozel:`${y}. s\xFCtun, ${v} sat\u0131rlar\u0131`,minAdim:Si,minPx:12},2.5,w,12.7,Wn(y),b,zt.z+E*8.89);for(let y of[1,-1]){let E=y>0?"karta yak\u0131n taraf":"uzak taraf";p({kesif:"arti-ray",ozel:E,minAdim:Si,minPx:8},81.2,w,4.08,zt.x,b,zt.z+y*22.36),p({kesif:"eksi-ray",ozel:E,minAdim:Si,minPx:8},81.2,w,4.02,zt.x,b,zt.z+y*18.31),p({kesif:"koordinat",ozel:"s\xFCtun numaralar\u0131",minAdim:1.06,minPx:6},76.2,w,1.06,zt.x,b,zt.z+y*15.77),p({kesif:"koordinat",ozel:"sat\u0131r harfleri",minAdim:Si,minPx:8},2.4,w,30.5,zt.x+y*39.3,b,zt.z)}p({kesif:"orta-kanal"},76.2,w,5,zt.x,b,zt.z);let M=(y,E,v=Qe+1)=>new C(y,v,E),A=[{id:"breadboard",nokta:M(Wn(6),zt.z-8.89)},{id:"serit",nokta:M(Wn(20),zt.z-8.89),ozel:"20. s\xFCtun, f-j sat\u0131rlar\u0131"},{id:"orta-kanal",nokta:M(Wn(27),zt.z,Qe+.6)},{id:"koordinat",nokta:M(zt.x-39.3,zt.z+8.89)},{id:"arti-ray",nokta:M(Wn(28),zt.z+21.59),ozel:"karta yak\u0131n taraf"},{id:"eksi-ray",nokta:M(Wn(4),zt.z+19.05),ozel:"karta yak\u0131n taraf"}];return{grup:t,alanlar:x,grupBul:m,grupGoster:f,vekiller:g,kesifNoktalari:A,rontgen(y){c.visible=y;for(let E of new Set(s))E.transparent=y,E.opacity=y?.3:1,E.depthWrite=!y,E.needsUpdate=!0;r.castShadow=!y}}}var km={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"};function Vm(n,t){Ho();let e=new dn;e.name="direnc";let[i,s]=Ad(8,256);s.fillStyle="#d8c69c",s.fillRect(0,0,8,256);let r=[.18,.33,.48,.8];n.forEach((d,f)=>{s.fillStyle=km[d],s.fillRect(0,(1-r[f])*256-12,8,24)});let a=new kn(1.1,1.1,4.6,16);a.rotateZ(Math.PI/2);let o=new Kt(a,new Se({map:Fm(i),roughness:.55})),l=new Se({color:14206620,roughness:.55}),c=3.4;o.position.y=c,e.add(o);for(let d of[-1,1]){let f=new Kt(new er(1.32,14,10),l);f.scale.set(.75,1,1),f.position.set(d*2.45,c,0),e.add(f);let m=new Kt(new Ee(t/2-2.9,.5,.5),pn.metal);m.position.set(d*((t/2+2.9)/2),c,0);let x=new Kt(new Ee(.5,c+7,.5),pn.metal);x.position.set(d*t/2,(c-7)/2,0),e.add(m,x)}cr(e);let u=va({kesif:"direnc"},t+1.4,c+9,3.2,0,(c+1.8-7.2)/2,0),h=va({kesif:"renk-bantlari"},3.6,2.8,2.8,0,c,0);return e.add(u,h),e.userData={tepe:new C(0,c+1.4,0),uclar:[new C(-t/2,0,0),new C(t/2,0,0)],H:c,vekiller:[u,h],kesifYerleri:()=>[["direnc",new C(t/2-1.2,c+2.6,0)],["renk-bantlari",new C(-.6,c+2.2,0)]]},e}function Td(n,t,e){n.position.set((t.x+e.x)/2,Qe,(t.z+e.z)/2),n.rotation.set(0,-Math.atan2(e.z-t.z,e.x-t.x),0)}function Gm(){Ho();let n=new dn;n.name="buton";let t=new Kt(new es(6,3.4,6,2,.45),pn.siyah);t.position.y=1.7;let e=new Kt(new Ee(6.2,.3,6.2),pn.metal);e.position.y=3.55;let i=new Kt(new kn(1.8,1.8,1.7,24),new Se({color:14172995,roughness:.42}));i.position.y=4.55,n.add(t,e,i);for(let r of[-2.54,2.54])for(let a of[-3.81,3.81]){let o=new Kt(new Ee(.6,7,.35),pn.metal);o.position.set(r,-3.2,a),n.add(o)}cr(n);let s=va({kesif:"buton"},7.6,12.9,8.4,0,-.45,0);return n.add(s),n.userData={bas(r){i.position.y=r?3.95:4.55},tepe:new C(0,5.6,0),vekiller:[s],kesifYerleri:()=>[["buton",new C(0,8.6,0)]]},n}var tS={turuncu:16088064,siyah:2829104,kirmizi:13840175,sari:15909376,yesil:3054920,mavi:1994713,mor:8280002};function Hm(n,t,e){Ho();let i=new dn;i.name="kablo";let s=tS[e]??e,r=(b,w)=>b.clone().add(new C(0,w,0)),a=r(n,6.2),o=r(t,6.2),l=a.distanceTo(o),c=new C((a.x+o.x)/2,Math.max(a.y,o.y)+7+l*.16,(a.z+o.z)/2),u=new ta([a,r(a,4),c,r(o,4),o],!1,"centripetal"),h=56,d=6,f=new Kt(new As(u,h,.62,d,!1),new Se({color:s,roughness:.45}));i.add(f);let m=[];for(let b of[n,t]){let w=new Kt(new es(2.5,6,2.5,2,.3),new Se({color:2763312,roughness:.5}));w.position.copy(b).add(new C(0,3.1,0));let M=new Kt(new Ee(.6,6,.6),pn.metal);M.position.copy(b).add(new C(0,-2.9,0)),i.add(w,M),m.push(w,M)}cr(i);let x=new Kt(new As(u,24,1.9,6,!1),pn.gorunmez);x.userData={kesif:"kablo",ince:!0,hacim:120},i.add(x);let g=[x];for(let b of[n,t]){let w=va({kesif:"kablo"},3.4,6.6,3.4,b.x,b.y+3.1,b.z);i.add(w),g.push(w)}let p=f.geometry.index.count;return i.userData={egri:u,vekiller:g,kesifYerleri:()=>[["kablo",u.getPoint(.5)]],buyut(b){f.geometry.setDrawRange(0,Math.floor(b*h)*d*6),m[2].visible=m[3].visible=b>=1,b>=1&&f.geometry.setDrawRange(0,p)},yol:u.getSpacedPoints(40)},i}function Wm(n){Ed=Math.max(1,Math.min(8,n))}var eS=[.1,.84,.54],cu={genel:{kutu:[-41.3,0,-65.3,41.3,15,58.7],yon:eS},kart:{kutu:[-40.7,0,5.3,34.3,15,58.7],yon:[.08,.86,.5]},usb:{kutu:[-41.2,3.5,13,-22,15.3,28],yon:[-.78,.48,.42]},"guc-girisi":{kutu:[-37,3.5,44,-20,15.5,57],yon:[-.7,.5,.52]},cip:{kutu:[-10,3.5,35.5,30.5,10.5,48.5],yon:[.05,.86,.5]},dijital:{kutu:[-15,3.6,4,33.8,13,15],yon:[.04,.72,.69]},analog:{kutu:[12.5,3.6,49,30.2,13,58.7],yon:[.08,.7,.71]},guc:{kutu:[-10.5,3.6,49,12.5,13,58.7],yon:[0,.62,.78]},bb:{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[.06,.86,.5]},"bb-ust":{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[0,.96,.27]},raylar:{kutu:[-41.3,0,-34,41.3,8.6,-10.7],yon:[.04,.8,.6]},devre:{kutu:[-14,0,-44,22,22,-14],yon:[.12,.8,.58]},"devre-genis":{kutu:[-41.3,0,-65.3,41.3,22,12],yon:[.07,.9,.43],kablolar:!0},"buton-yakin":{kutu:[5,0,-46,23,18,-16],yon:[.15,.72,.67]},trafik:{kutu:[-26,0,-44,26,22,-14],yon:[.05,.78,.62]}};var Xm={kirmizi:15022389,sari:16498733,yesil:3126084},nS={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"},Ym={220:["kirmizi","kirmizi","kahve","altin"],1e4:["kahve","siyah","turuncu","altin"]},Vi=4.2,Rd=new Sn({visible:!1}),$m=null,qm=()=>pn.metal||($m??=new Se({color:14014686,metalness:1,roughness:.28}));function Cd(n,t,e,i,s,r,a){let o=new Kt(new Ee(t,e,i),Rd);return o.position.set(s,r,a),n.add(o),n.userData.hedef=o,o}var Zm=(n,t)=>Math.hypot(t.x-n.x,t.z-n.z);function Id(n,t,e){let i=new Gt(Xm[n]??Xm.kirmizi),s=i.clone().lerp(new Gt(3813430),.45),r=new dn;r.name="led";let a=[[0,0],[2.95,0],[2.95,1],[2.5,1],[2.5,5.6]];for(let f=1;f<=8;f++){let m=f/8*(Math.PI/2);a.push([2.5*Math.cos(m),5.6+2.5*Math.sin(m)])}let o=new Se({color:s,emissive:i,emissiveIntensity:0,roughness:.14,metalness:0}),l=new Kt(new ws(a.map(([f,m])=>new et(f,m)),20),o);l.position.y=Vi,r.add(l);let c=Math.max(1.27,Zm(t,e)/2),u=1.3;for(let f of[-1,1]){let m=f*1.27,x=f*c,g=(p,b,w,M)=>{let A=new Kt(new Ee(p,b,.5),qm());A.position.set(w,M,0),r.add(A)};if(x===m){g(.5,Vi+5,m,Vi-(Vi+5)/2);continue}g(.5,Vi-u,m,(Vi+u)/2),g(Math.abs(x-m)+.5,.5,(m+x)/2,u),g(.5,u+5,x,(u-5)/2)}let h=new Js(new bs({map:Go(),color:i,blending:Ui,depthWrite:!1,transparent:!0}));h.scale.set(20,20,1),h.position.y=Vi+5.5,h.visible=!1,r.add(h);let d=new Kt(new jn(30,30),new Sn({map:Go(),color:i,blending:Ui,depthWrite:!1,transparent:!0,opacity:.6}));return d.rotation.x=-Math.PI/2,d.position.y=.12,d.visible=!1,r.add(d),cr(r),Cd(r,Math.max(7,c*2+1.5),12,7,0,Vi+3.5,0),Object.assign(r.userData,{ac(f){let m=typeof f=="number"?f:f?1:0;r.userData.yanik=m>0,o.emissiveIntensity=1.05*m,o.color.copy(s).lerp(i,m),h.visible=d.visible=m>.02,h.material.opacity=Math.min(1,m*1.15),d.material.opacity=.6*m},renk:i,lambaY:Vi+6,tepe:new C(0,Vi+8.2,0)}),Td(r,t,e),r}function Km(n,t,e){let i=Ym[n]||Ym[220],s=Zm(t,e),r=s>=7?Vm(i,s):iS(i,s),a=r.userData.H;return Cd(r,Math.max(7.5,s+2),a+3,4.5,0,a/2+.5,0),Td(r,t,e),r}function iS(n,t){let e=new dn;e.name="direnc";let i=document.createElement("canvas");i.width=8,i.height=256;let s=i.getContext("2d");s.fillStyle="#d8c69c",s.fillRect(0,0,8,256),[.18,.33,.48,.8].forEach((f,m)=>{s.fillStyle=nS[n[m]],s.fillRect(0,(1-f)*256-12,8,24)});let r=new Di(i);r.colorSpace=$e;let a=-t/2,o=1.5,l=4.6,c=o+l+2.3,u=new Kt(new kn(1.1,1.1,l,16),new Se({map:r,roughness:.55}));u.position.set(a,o+l/2,0),e.add(u);let h=new Se({color:14206620,roughness:.55});for(let f of[o,o+l]){let m=new Kt(new er(1.32,14,10),h);m.scale.set(1,.75,1),m.position.set(a,f,0),e.add(m)}let d=(f,m,x,g)=>{let p=new Kt(new Ee(f,m,.5),qm());p.position.set(x,g,0),e.add(p)};return d(.5,o+5,a,(o-5)/2),d(.5,c-o-l,a,(o+l+c)/2),d(t+.5,.5,0,c),d(.5,c+5,-a,(c-5)/2),cr(e),e.userData={tepe:new C(0,c+1.4,0),H:c},e}function Jm(n){let t=Gm();return t.position.copy(n),Cd(t,9,8,10,0,2.5,0),t}function jm(n,t,e){let i=Hm(n,t,e),s=new Kt(new As(i.userData.egri,24,2.3,6,!1),Rd);return i.add(s),i.userData.hedef=s,i}function uu(n){let t=new Set(Object.values(pn)),e=Go();n.traverse(i=>{i.geometry?.dispose();let s=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(let r of s)t.has(r)||r===Rd||r===$m||(r.map&&r.map!==e&&r.map.dispose(),r.dispose())})}var hu={kirmizi:"#e53935",sari:"#fbc02d",yesil:"#2fb344"},Pd={turuncu:"#f57c00",kirmizi:"#d32f2f",siyah:"#2b2b30",sari:"#f2c200",yesil:"#2e9d48",mavi:"#1e6fd9",mor:"#7e57c2"},Qm={220:["#d32f2f","#d32f2f","#7a4a24","#c9a33a"],1e4:["#7a4a24","#1d1d1d","#f57c00","#c9a33a"]},du='<svg class="parca-ikon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">',kd='stroke="#8a8f99" stroke-width="1.6" stroke-linecap="round" fill="none"';function sS(n){let t=hu[n]||hu.kirmizi;return`${du}<path d="M13 23v7M19 23v5" ${kd}/><path d="M10 15a6 6 0 0 1 12 0v6H10z" fill="${t}" stroke="#0006"/><rect x="8.5" y="20.5" width="15" height="2.8" rx="1" fill="${t}" stroke="#0006"/></svg>`}function rS(n){let t=Qm[n]||Qm[220];return`${du}<path d="M1 16h6M25 16h6" ${kd}/><rect x="7" y="11" width="18" height="10" rx="4" fill="#d8c69c" stroke="#0005"/>${t.map((e,i)=>`<rect x="${[10,13.2,16.4,21][i]}" y="11" width="2" height="10" fill="${e}"/>`).join("")}</svg>`}var aS=()=>`${du}<path d="M10 25v5M22 25v5M10 7V2M22 7V2" ${kd}/><rect x="6" y="7" width="20" height="18" rx="3" fill="#2b2b30"/><circle cx="16" cy="16" r="5" fill="#d84343"/></svg>`;function oS(n){let t=Pd[n]||"var(--kablo,#f57c00)";return`${du}<path d="M6 27C7 9 25 9 26 27" fill="none" style="stroke:${t}" stroke-width="3.2" stroke-linecap="round"/><rect x="3.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/><rect x="23.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/></svg>`}function tg(n){return n.tur==="led"?sS(n.renk):n.tur==="direnc"?rS(n.deger):n.tur==="buton"?aS():oS(n.renk)}var gu="abcde",lS="fghij",cS=["uzak+","uzak-","yakin-","yakin+"],Wo=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30],Fd={a:5.5,b:4.5,c:3.5,d:2.5,e:1.5,f:-1.5,g:-2.5,h:-3.5,i:-4.5,j:-5.5},Bd={"yakin-":7.5,"yakin+":8.5,"uzak-":-7.5,"uzak+":-8.5},zd=["SCL","SDA","AREF","GND-D","13","12","11","10","9","8","7","6","5","4","3","2","1","0"],Vd=["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],Gd=["A0","A1","A2","A3","A4","A5"],_u=[...zd,...Vd,...Gd],as=[2,3,4,5,6,7,8,9,10,11,12,13],uS=[1e3,500,200],Ma={kirmizi:{ad:"k\u0131rm\u0131z\u0131",esik:2},sari:{ad:"sar\u0131",esik:2.05},yesil:{ad:"ye\u015Fil",esik:2.1}},yu={220:"220 \u03A9",1e4:"10 k\u03A9"},xu={turuncu:"Turuncu",kirmizi:"K\u0131rm\u0131z\u0131",siyah:"Siyah",sari:"Sar\u0131",yesil:"Ye\u015Fil",mavi:"Mavi",mor:"Mor"},lg=[1,4],cg=[2,6],hS=5,eg=2,dS=1e-9,fu=1e-4,fS=.002,ng=.03,pS=.013,mS=3,gS=1.5,Hd={"GND-D":"GND",GND1:"GND",GND2:"GND","5V":"5V",IOREF:"5V","3.3V":"3V3",SDA:"A4",A4:"A4",SCL:"A5",A5:"A5"},_S=new Set(["GND-D","GND1","GND2","5V","3.3V","IOREF"]),Wd=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1);function tn(n){let[t,e,i,s]=String(n??"").split(":");if(s!==void 0)return null;if(t==="h"){let r=Number(e);if(Number.isInteger(r)&&r>=1&&r<=30&&typeof i=="string"&&i.length===1&&"abcdefghij".includes(i))return{tur:"delik",sutun:r,satir:i}}if(t==="r"){let r=Number(i);if(cS.includes(e)&&Wo.includes(r))return{tur:"ray",ray:e,sutun:r}}return t==="p"&&i===void 0&&_u.includes(e)?{tur:"pin",pin:e}:null}var pu=n=>{let t=tn(n);return!!(t&&t.tur!=="pin")};function ig(n){let t=tn(n);return!t||t.tur==="pin"?null:[t.sutun,t.tur==="delik"?Fd[t.satir]:Bd[t.ray]]}function Nd(n,t){let e=ig(n),i=ig(t);return e&&i?Math.hypot(e[0]-i[0],e[1]-i[1]):1/0}function Nn(n){let t=tn(n);return t?t.tur==="delik"?`s:${t.sutun}:${gu.includes(t.satir)?"y":"u"}`:t.tur==="ray"?`r:${t.ray}`:`k:${Hd[t.pin]||t.pin}`:null}function ug(n){let t=tn(n);if(!t)return[];if(t.tur==="delik")return[...gu.includes(t.satir)?gu:lS].map(i=>`h:${t.sutun}:${i}`);if(t.tur==="ray")return Wo.map(i=>`r:${t.ray}:${i}`);let e=Nn(n);return _u.filter(i=>Nn(`p:${i}`)===e).map(i=>`p:${i}`)}function ba(n){return/^\d+$/.test(n)?n==="0"?"0. pin (RX)":n==="1"?"1. pin (TX)":`${n}. pin`:{"GND-D":"GND",GND1:"GND",GND2:"GND","3.3V":"3,3V",VIN:"Vin",NC:"bo\u015F pin (NC)"}[n]||n}function Ud(n){return`${n.startsWith("yakin")?"alt":"\xFCst"} ${n.endsWith("+")?"+":"\u2212"} ray\u0131`}function Xe(n,t=!1){let e=tn(n);return e?e.tur==="delik"?`${e.sutun}${e.satir}`:e.tur==="ray"?t?`${Ud(e.ray)}, ${e.sutun}. s\xFCtun`:Ud(e.ray):ba(e.pin):""}function Sa(n){let t=tn(n);if(!t)return"";if(t.tur==="delik"){let i=gu.includes(t.satir)?"a-e":"f-j";return`${t.sutun}. s\xFCtun, ${i} sat\u0131rlar\u0131`}return t.tur==="ray"?Wd(Ud(t.ray)):Hd[t.pin]==="GND"?"GND pinleri (kart i\xE7inde birbirine ba\u011Fl\u0131)":ba(t.pin)}function ur(n){return n?n.tur==="led"?[n.anot,n.katot]:n.tur==="direnc"?[n.a,n.b]:n.tur==="kablo"?[n.bas,n.son]:n.tur==="buton"?[`h:${n.sutun}:e`,`h:${n.sutun+2}:e`,`h:${n.sutun}:f`,`h:${n.sutun+2}:f`]:[]:[]}function Gi(n){return n.tur==="led"?`${Wd(Ma[n.renk]?.ad||"")} LED (${Xe(n.anot)})`:n.tur==="direnc"?`${yu[n.deger]||""} diren\xE7 (${Xe(n.a)})`:n.tur==="buton"?`Buton (${n.sutun}. ve ${n.sutun+2}. s\xFCtun)`:n.tur==="kablo"?`Kablo (${Xe(n.bas)} \u2192 ${Xe(n.son)})`:""}function vu(n){return n.tur==="led"?`Anot (uzun bacak) ${Xe(n.anot,!0)}, katot (k\u0131sa bacak) ${Xe(n.katot,!0)}`:n.tur==="direnc"?`Bacaklar ${Xe(n.a,!0)} ve ${Xe(n.b,!0)}`:n.tur==="buton"?`Bacaklar ${n.sutun}e, ${n.sutun+2}e, ${n.sutun}f, ${n.sutun+2}f (kanal\u0131n \xFCst\xFCnde)`:n.tur==="kablo"?`${Wd(Xe(n.bas,!0))} ile ${Xe(n.son,!0)} aras\u0131nda`:""}function yS(n){return!n||typeof n!="object"||typeof n.id!="string"||!n.id?!1:n.tur==="led"?!!Ma[n.renk]&&pu(n.anot)&&pu(n.katot)&&n.anot!==n.katot:n.tur==="direnc"?!!yu[n.deger]&&pu(n.a)&&pu(n.b)&&n.a!==n.b:n.tur==="buton"?Number.isInteger(n.sutun)&&n.sutun>=1&&n.sutun<=28:n.tur==="kablo"?!!xu[n.renk]&&!!tn(n.bas)&&!!tn(n.son)&&n.bas!==n.son:!1}function Xd(n){let t=(e,i)=>as.includes(Number(e))?Number(e):i;if(n?.tur==="buton"){let e=t(n.giris,2),i=t(n.cikis,13);return i===e&&(i=e===13?12:13),{tur:"buton",giris:e,cikis:i}}if(n?.tur==="elle"){let e={};for(let i of as)n.seviyeler?.[i]&&(e[i]=!0);return{tur:"elle",seviyeler:e}}return{tur:"blink",pin:t(n?.pin,13),bekleme:uS.includes(Number(n?.bekleme))?Number(n.bekleme):1e3}}function wa(n){let t=new Set,e=new Set,i=[];for(let s of Array.isArray(n?.parcalar)?n.parcalar:[]){if(!yS(s)||e.has(s.id))continue;let r=ur(s);if(r.some(o=>t.has(o))||s.tur==="led"&&!Od(Nd(s.anot,s.katot),lg)||s.tur==="direnc"&&!Od(Nd(s.a,s.b),cg))continue;r.forEach(o=>t.add(o)),e.add(s.id);let a={id:s.id,tur:s.tur};for(let o of["renk","anot","katot","deger","a","b","sutun","bas","son"])s[o]!==void 0&&(a[o]=s[o]);i.push(a)}return{parcalar:i,program:Xd(n?.program)}}var Od=(n,[t,e])=>n>=t-.01&&n<=e+.01;function bu(n,t=null){let e=new Map;for(let i of n)if(i.id!==t)for(let s of ur(i))e.set(s,i.id);return e}function xS(n){let t=tn(n);return!t||t.tur!=="delik"||!"ef".includes(t.satir)?null:t.sutun+2<=30?t.sutun:t.sutun-2}function Xo(n,t,e,i,s=null){let r=tn(i);if(!r)return{gecerli:!1,neden:"Burada delik yok"};let a=bu(n,s),o={led:"LED",direnc:"Diren\xE7",buton:"Buton"}[t];if(t!=="kablo"&&r.tur==="pin")return{gecerli:!1,neden:`${o} breadboard'a tak\u0131l\u0131r: bir delik se\xE7`};if(t==="buton"){let d=xS(i);return d==null?{gecerli:!1,neden:"Butonu kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131na koy"}:ur({tur:"buton",sutun:d}).some(m=>a.has(m))?{gecerli:!1,neden:"Butonun bacaklar\u0131 dolu deliklere geliyor"}:{gecerli:!0,sutun:d}}if(a.has(i))return{gecerli:!1,neden:r.tur==="pin"?"Bu pinde zaten kablo var":"Bu delik dolu"};if(!e)return{gecerli:!0};if(e===i)return{gecerli:!1,neden:"\u0130ki u\xE7 ayn\u0131 yere tak\u0131lamaz"};if(t==="kablo")return{gecerli:!0};let l=Nd(e,i),c=t==="led"?lg:cg,u=Math.round(l*10)/10,h=String(u).replace(".",",");return Od(l,c)?{gecerli:!0,mesafe:l}:{gecerli:!1,mesafe:l,neden:`${h} ad\u0131m: ${o} bacaklar\u0131 en az ${c[0]}, en \xE7ok ${c[1]} ad\u0131m arayla tak\u0131l\u0131r`}}var Yd={"ders-2":{ad:"Ders 2: LED Yakal\u0131m",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"blink",pin:13,bekleme:1e3}},"ders-3":{ad:"Ders 3: Butonla LED",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"},{id:"buton",tur:"buton",sutun:20},{id:"r2",tur:"direnc",deger:1e4,a:"h:22:c",b:"r:yakin-:22"},{id:"k5v",tur:"kablo",renk:"kirmizi",bas:"p:5V",son:"r:yakin+:24"},{id:"kplus",tur:"kablo",renk:"kirmizi",bas:"r:yakin+:20",son:"h:20:a"},{id:"k2",tur:"kablo",renk:"sari",bas:"p:2",son:"h:22:d"}],program:{tur:"buton",giris:2,cikis:13}},"ders-4":{ad:"Ders 4: Trafik I\u015F\u0131\u011F\u0131",parcalar:[{id:"ledK",tur:"led",renk:"kirmizi",anot:"h:8:e",katot:"h:9:e"},{id:"ledS",tur:"led",renk:"sari",anot:"h:15:e",katot:"h:16:e"},{id:"ledY",tur:"led",renk:"yesil",anot:"h:22:e",katot:"h:23:e"},{id:"rK",tur:"direnc",deger:220,a:"h:9:c",b:"r:yakin-:9"},{id:"rS",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"rY",tur:"direnc",deger:220,a:"h:23:c",b:"r:yakin-:23"},{id:"kK",tur:"kablo",renk:"kirmizi",bas:"p:10",son:"h:8:a"},{id:"kS",tur:"kablo",renk:"sari",bas:"p:9",son:"h:15:a"},{id:"kY",tur:"kablo",renk:"yesil",bas:"p:8",son:"h:22:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"elle",seviyeler:{10:!0}}}};function Ld(n,t){let e=new Map,i=r=>{if(!e.has(r))return e.set(r,r),r;let a=r;for(;e.get(a)!==a;)a=e.get(a);let o=r;for(;e.get(o)!==a;){let l=e.get(o);e.set(o,a),o=l}return a},s=(r,a)=>{let o=i(r),l=i(a);o!==l&&e.set(o,l)};for(let r of n){let a=ur(r).map(Nn);a.forEach(i),r.tur==="kablo"&&s(a[0],a[1]),r.tur==="buton"&&(s(a[0],a[2]),s(a[1],a[3]),(t===!0||t?.has?.(r.id))&&s(a[0],a[1]))}return{bul:i}}var rs=n=>`k:${Hd[n]||n}`;function sg(n,t){let e=new Map,i=(s,r)=>{let a=n.bul(s);e.has(a)||e.set(a,[]),e.get(a).push(r)};i("k:GND","GND"),i("k:5V","5V"),i("k:3V3","3V3");for(let s of t)i(rs(String(s)),String(s));return[...e.entries()].filter(([,s])=>s.length>1).map(([s,r])=>({kok:s,suruculer:r}))}function mu(n,t,e){let i=new Map([[t.bul("k:GND"),0],[t.bul("k:5V"),5],[t.bul("k:3V3"),3.3]]),s=[],r=[],a=[];for(let b of n){if(b.tur==="direnc"){let w=t.bul(Nn(b.a)),M=t.bul(Nn(b.b));w!==M&&s.push({a:w,b:M,G:1/b.deger})}if(b.tur==="led"){let w=t.bul(Nn(b.anot)),M=t.bul(Nn(b.katot));w!==M&&r.push({id:b.id,a:w,k:M,vf:Ma[b.renk].esik})}}for(let[b,w]of Object.entries(e)){let M=t.bul(rs(b)),A=`v:${b}`;i.set(A,w),a.push({a:M,b:A,G:1/hS})}let o=new Map,l=b=>{!i.has(b)&&!o.has(b)&&o.set(b,o.size)};for(let b of[...s,...r.map(w=>({a:w.a,b:w.k})),...a])l(b.a),l(b.b);let c=o.size,u=new Map(r.map(b=>[b.id,!1])),h=new Float64Array(c),d=b=>i.has(b)?i.get(b):o.has(b)?h[o.get(b)]:0;for(let b=0;b<40;b++){let w=Array.from({length:c},()=>new Float64Array(c)),M=new Float64Array(c);for(let E=0;E<c;E++)w[E][E]=dS;let A=(E,v,T,I)=>{let L=o.get(E),N=o.get(v);L!==void 0&&(w[L][L]+=T,M[L]+=T*I,N!==void 0?w[L][N]-=T:M[L]+=T*i.get(v)),N!==void 0&&(w[N][N]+=T,M[N]-=T*I,L!==void 0?w[N][L]-=T:M[N]+=T*i.get(E))};for(let E of s)A(E.a,E.b,E.G,0);for(let E of a)A(E.a,E.b,E.G,0);for(let E of r)u.get(E.id)&&A(E.a,E.k,1/eg,E.vf);h=vS(w,M);let y=!1;for(let E of r){let v=d(E.a)-d(E.k);!u.get(E.id)&&v>E.vf+1e-9?(u.set(E.id,!0),y=!0):u.get(E.id)&&v<E.vf-1e-9&&(u.set(E.id,!1),y=!0)}if(!y)break}let f=new Map(r.map(b=>[b.id,u.get(b.id)?Math.max(0,(d(b.a)-d(b.k)-b.vf)/eg):0])),m=new Map,x=(b,w)=>{m.has(b)||m.set(b,[]),m.get(b).push(w)};for(let b of[...s,...a])x(b.a,b.b),x(b.b,b.a);let g=new Set(i.keys()),p=[...g];for(;p.length;)for(let b of m.get(p.shift())||[])g.has(b)||(g.add(b),p.push(b));return{V:d,akim:f,tanimli:g,ledler:r,direncler:s}}function vS(n,t){let e=t.length;for(let s=0;s<e;s++){let r=s;for(let o=s+1;o<e;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);r!==s&&([n[r],n[s]]=[n[s],n[r]],[t[r],t[s]]=[t[s],t[r]]);let a=n[s][s]||1e-30;for(let o=s+1;o<e;o++){let l=n[o][s]/a;if(l){for(let c=s;c<e;c++)n[o][c]-=l*n[s][c];t[o]-=l*t[s]}}}let i=new Float64Array(e);for(let s=e-1;s>=0;s--){let r=t[s];for(let a=s+1;a<e;a++)r-=n[s][a]*i[a];i[s]=r/(n[s][s]||1e-30)}return i}function Dd(n,t){if(!n.tanimli.has(t))return{deger:"KARARSIZ",bosta:!0,gerilim:null};let e=n.V(t);return{deger:e>=mS?"HIGH":e<=gS?"LOW":"KARARSIZ",bosta:!1,gerilim:e}}function rg(n,t,e){let i=new Map,s=(o,l)=>{i.has(o)||i.set(o,[]),i.get(o).push(l)};for(let o of n.direncler)s(o.a,o.b),s(o.b,o.a);for(let o of n.ledler)o.id!==e&&(s(o.a,o.k),s(o.k,o.a));let r=new Set([t]),a=[t];for(;a.length;)for(let o of i.get(a.shift())||[])r.has(o)||(r.add(o),a.push(o));return r}function hr(n){let t=new Set;for(let e of n)if(e.tur==="kablo")for(let i of[e.bas,e.son]){let s=tn(i);s?.tur==="pin"&&t.add(s.pin)}return t}function bS(n,t){if(n.tur==="blink")return{cikislar:[String(n.pin)],giris:null};if(n.tur==="buton")return{cikislar:[String(n.cikis)],giris:String(n.giris)};let e=hr(t);return{cikislar:as.map(String).filter(i=>e.has(i)||n.seviyeler[i]),giris:null}}var ag={hata:0,uyari:1,bilgi:2};function hg(n,t={}){let{parcalar:e,program:i}=wa(n),s=t.calisiyor!==!1,r=new Set(t.basili||[]),{cikislar:a,giris:o}=bS(i,e),l=e.filter(O=>O.tur==="led"),c=e.filter(O=>O.tur==="buton"),u=[],h=(O,dt,ht,qt={})=>u.push({tur:O,seviye:dt,metin:ht,parcalar:[],...qt}),d=Ld(e,r),f=Ld(e,!0),m=Ld(e,null),x=sg(d,a),g=sg(f,a),p=(O,dt,ht=!1)=>e.filter(qt=>qt.tur==="kablo"&&!ht||qt.tur==="buton").filter(qt=>ur(qt).some(ee=>O.bul(Nn(ee))===dt)).map(qt=>qt.id);for(let O of x)h("kisa-devre","hata",`${og(O.suruculer)} K\u0131sa devre giderilene kadar devre \xE7al\u0131\u015Fmaz.`,{parcalar:p(d,O.kok)});let b=new Set(x.map(O=>O.suruculer.slice().sort().join("+")));for(let O of g)b.has(O.suruculer.slice().sort().join("+"))||h("kisa-devre","hata",`Butona bas\u0131l\u0131nca k\u0131sa devre olur. ${og(O.suruculer)}`,{parcalar:p(f,O.kok,!0)});let w=O=>e.filter(dt=>dt.tur==="kablo"&&(dt.bas===`p:${O}`||dt.son===`p:${O}`)).map(dt=>dt.id),M=d.bul("k:RESET")===d.bul("k:GND");M&&h("reset","hata","RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fmaz. Kabloyu RESET pininden \xE7\u0131kar.",{parcalar:w("RESET")});let A=hr(e),y=new Set([...a,...o?[o]:[]]);i.tur==="elle"&&as.forEach(O=>y.add(String(O)));let E=new Set;for(let O of A){if(_S.has(O)||y.has(O)||O==="RESET")continue;E.add(O);let dt=i.tur==="blink"&&as.includes(Number(O))?{tur:"blink-pin",pin:Number(O),metin:`Programda ${O}. pini se\xE7`}:null;h("pin-kullanilmiyor","uyari",MS(O,i),{parcalar:w(O),pin:O,eylem:dt})}let v={},T=null,I=s&&!x.length&&!M,L=null;if(I){if(i.tur==="blink"&&(v[i.pin]=t.faz===!1?0:5),i.tur==="elle")for(let O of a)v[O]=i.seviyeler[O]?5:0;if(i.tur==="buton"){let O=mu(e,d,{[i.cikis]:0});T=Dd(O,d.bul(rs(o)));let dt=T.deger==="HIGH"||T.deger==="KARARSIZ"&&!!t.kararsiz;v[i.cikis]=dt?5:0}L=mu(e,d,v)}let N=g.length?null:mu(e,f,Object.fromEntries(a.map(O=>[O,5]))),B=g.length?null:mu(e,m,Object.fromEntries(a.map(O=>[O,0]))),k={},z=[],Z=0;for(let O of l){let dt=Gi(O),ht=L?.akim.get(O.id)??0,qt=N?.akim.get(O.id)??0,ee=B?.akim.get(O.id)??0,ne=Math.max(ht,qt,ee)>ng,Q=L?ht>fu&&ht<=ng:!1;if(k[O.id]={yanik:Q,parlaklik:Q?Math.max(.12,Math.min(1,Math.sqrt(ht/pS))):0,akim:ht*1e3,enCok:Math.max(qt,ee,ht)*1e3},!N)continue;if(f.bul(Nn(O.anot))===f.bul(Nn(O.katot))){h("tamamlanmamis","uyari",`${dt}: iki bacak ayn\u0131 ba\u011Flant\u0131 grubunda (${Sa(O.anot)}). Elektrik LED'e u\u011Framadan ge\xE7er; bacaklar\u0131 farkl\u0131 s\xFCtunlara tak.`,{parcalar:[O.id]});continue}if(ne){h("direncsiz","hata",`${dt}: diren\xE7 yok. Ger\xE7ek devrede a\u015F\u0131r\u0131 ak\u0131m LED'i ya da pini bozar; sim\xFClasyon bu LED'i yakm\u0131yor. LED ile GND aras\u0131na 220 \u03A9 diren\xE7 ekle.`,{parcalar:[O.id]});continue}let gt=qt>fu,Ht=ee>fu,St=ht>fu;if(gt||Ht||St){Z++,gt!==Ht&&z.push(O.id),gt&&Ht&&a.length&&h("sabit","bilgi",`${dt} programdan ba\u011F\u0131ms\u0131z, hep yan\u0131yor: anot taraf\u0131 do\u011Frudan 5V'a ba\u011Fl\u0131. Programla yan\u0131p s\xF6nmesi i\xE7in anot taraf\u0131n\u0131 bir \xE7\u0131k\u0131\u015F pinine ba\u011Fla.`,{parcalar:[O.id]});let ft=Math.max(qt,ee,ht);ft<fS&&h("sonuk","bilgi",`${dt} \xE7ok s\xF6n\xFCk yan\u0131yor: b\xFCy\xFCk diren\xE7 ak\u0131m\u0131 \xE7ok azalt\u0131yor. LED i\xE7in 220 \u03A9 diren\xE7 kullan.`,{parcalar:[O.id],akim:ft*1e3});continue}let Wt=f.bul(Nn(O.anot)),ge=f.bul(Nn(O.katot));if([[N,f],[B,m]].some(([ft,P])=>{let le=P.bul(Nn(O.anot)),jt=P.bul(Nn(O.katot));return ft.tanimli.has(le)&&ft.tanimli.has(jt)&&ft.V(jt)-ft.V(le)>Ma[O.renk].esik-.05})){h("led-ters","uyari",`${dt} ters tak\u0131l\u0131: uzun bacak (anot) art\u0131 tarafa, k\u0131sa bacak (katot) GND taraf\u0131na gelmeli. LED'e dokunup Ters \xE7evir'i se\xE7.`,{parcalar:[O.id]});continue}let j=rg(N,Wt,O.id),Y=rg(N,ge,O.id);if([...E].some(ft=>j.has(f.bul(rs(ft)))||Y.has(f.bul(rs(ft)))))continue;let st=[f.bul("k:5V"),f.bul("k:3V3"),...a.map(ft=>f.bul(rs(ft)))],lt=[f.bul("k:GND"),...a.map(ft=>f.bul(rs(ft)))],_t=st.some(ft=>j.has(ft)),Pt=lt.some(ft=>Y.has(ft)),Ot;!_t&&!Pt?Ot=`${dt} devreye ba\u011Fl\u0131 de\u011Fil: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a, katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fmal\u0131.`:_t?Pt?Ot=`${dt} yanacak kadar elektrik alm\u0131yor: devrenin yolunu kontrol et.`:Ot=`${dt}: katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fm\u0131yor. Direnci ya da kabloyu GND'ye giden eksi raya ba\u011Fla.`:Ot=`${dt}: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a ula\u015Fm\u0131yor.`,h("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${Ot}`,{parcalar:[O.id]})}l.length||h("tamamlanmamis","bilgi","Devrede LED yok: panelden bir LED se\xE7ip breadboard'a yerle\u015Ftir.");let q=null,ot=null;if(i.tur==="buton"&&N&&B){let O=m.bul(rs(o)),dt=f.bul(rs(o));q=Dd(B,O),ot=Dd(N,dt);let ht=`${o}. pin`,qt=`${o}. pine`,ee=c.map(ne=>ne.id);c.length?A.has(o)?q.bosta&&ot.bosta?h("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca da ${ht} hi\xE7bir yere ba\u011Flanm\u0131yor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${qt} ba\u011Flanmal\u0131.`,{pin:o,parcalar:ee}):q.bosta?h("cekme-yok","uyari",`${ht} bo\u015Fta kal\u0131yor: butona bas\u0131lmad\u0131\u011F\u0131nda pin ne HIGH ne LOW okur, LED kendi kendine yan\u0131p s\xF6ner. ${ht} ile GND aras\u0131na 10 k\u03A9 \xE7ekme direnci ekle.`,{pin:o,parcalar:ee}):(ot.bosta||ot.deger===q.deger)&&h("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca ${ht} de\u011Fi\u015Fmiyor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${qt} ba\u011Flanmal\u0131.`,{pin:o,parcalar:ee}):h("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${ht} (giri\u015F) devreye ba\u011Fl\u0131 de\u011Fil: butonun baca\u011F\u0131ndan ${qt} kablo \xE7ek.`,{pin:o}):h("tamamlanmamis","uyari","Devre tamamlanmam\u0131\u015F. Devrede buton yok: panelden butonu se\xE7ip kanal\u0131n \xFCst\xFCne yerle\u015Ftir.")}u.sort((O,dt)=>ag[O.seviye]-ag[dt.seviye]);let K=u.some(O=>O.seviye!=="bilgi"),nt=null;return!K&&z.length&&(i.tur==="blink"&&(nt=`Devre do\u011Fru: ${i.pin}. pin LED'i yak\u0131p s\xF6nd\xFCr\xFCyor.`),i.tur==="elle"&&(nt="Devre do\u011Fru: HIGH yapt\u0131\u011F\u0131n pinlerdeki LED'ler yan\u0131yor."),i.tur==="buton"&&q&&ot&&q.deger!==ot.deger&&(nt=q.deger==="LOW"?"Devre do\u011Fru: butona bas\u0131nca LED yan\u0131yor, b\u0131rak\u0131nca s\xF6n\xFCyor.":"Devre do\u011Fru: \xE7ekme direnci 5V'a ba\u011Fl\u0131; buton b\u0131rak\u0131l\u0131nca LED yan\u0131yor, bas\u0131nca s\xF6n\xFCyor.")),{calisiyor:I,durdu:s?x.length?"kisa-devre":M?"reset":null:"kapali",ledler:k,cikislar:Object.fromEntries(Object.entries(v).map(([O,dt])=>[O,dt>0?"HIGH":"LOW"])),giris:i.tur==="buton"?{pin:Number(o),...T||{deger:"LOW",bosta:!1,gerilim:0},basiliOkur:ot?.deger??null,birakikOkur:q?.deger??null}:null,l13:I&&v[13]===5,uyarilar:u,tamam:nt,program:i}}function og(n){let t=i=>n.includes(i),e=n.filter(i=>!["GND","5V","3V3"].includes(i));return t("5V")&&t("GND")?"5V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor. Ger\xE7ek kartta koruma sigortas\u0131 devreyi keser ve kart kapan\u0131r.":t("3V3")&&t("GND")?"3,3V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor.":t("5V")&&t("3V3")?"5V ile 3,3V do\u011Frudan birbirine ba\u011Fl\u0131: iki farkl\u0131 gerilim \xE7ak\u0131\u015F\u0131yor.":e.length>=2?`${e[0]}. ve ${e[1]}. pin do\u011Frudan birbirine ba\u011Fl\u0131: biri HIGH, \xF6teki LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:t("GND")?`${e[0]}. pin do\u011Frudan GND'ye ba\u011Fl\u0131: pin HIGH olunca elektrik hi\xE7bir par\xE7aya u\u011Framadan akar ve pin bozulabilir.`:t("5V")?`${e[0]}. pin do\u011Frudan 5V'a ba\u011Fl\u0131: pin LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:`${e[0]}. pin do\u011Frudan 3,3V'a ba\u011Fl\u0131: pin HIGH ya da LOW olunca k\u0131sa devre olur.`}function MS(n,t){if(n==="VIN")return"Vin pini, kart USB ile \xE7al\u0131\u015F\u0131rken g\xFC\xE7 vermez. G\xFC\xE7 i\xE7in 5V pinini kullan.";if(n==="NC")return"Bu pin kartta hi\xE7bir yere ba\u011Fl\u0131 de\u011Fil (NC). Kabloyu ba\u015Fka bir pine ta\u015F\u0131.";if(n==="0"||n==="1")return`${ba(n)} bilgisayarla haberle\u015Fmede kullan\u0131l\u0131r; bu programda kullan\u0131lm\u0131yor. 2-13 aras\u0131ndan bir pin se\xE7.`;if(/^\d+$/.test(n)){if(t.tur==="blink")return`${n}. pine kablo ba\u011Fl\u0131 ama program ${t.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor. Kabloyu ${t.pin}. pine ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden ${n}. pini se\xE7.`;if(t.tur==="buton")return`${n}. pin programda kullan\u0131lm\u0131yor: giri\u015F ${t.giris}. pin, \xE7\u0131k\u0131\u015F ${t.cikis}. pin. Kabloyu ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden pini de\u011Fi\u015Ftir.`}return`${ba(n)} pini bu programda kullan\u0131lm\u0131yor. Kabloyu 2-13 aras\u0131ndaki bir pine ta\u015F\u0131.`}var dg={1e3:["1000 milisaniye, yani 1 saniye bekle.","1 saniye daha bekle."],500:["500 milisaniye, yani yar\u0131m saniye bekle.","Yar\u0131m saniye daha bekle."],200:["200 milisaniye, yani 0,2 saniye bekle.","0,2 saniye daha bekle."]};function fg(n,t=[]){let e=[],i=(r,a="")=>(e.push({k:r,t:a}),e.length),s={yuksek:[],dusuk:[]};if(n.tur==="buton"){let r=n.giris,a=n.cikis;i(`const int buton = ${r};`,`Butonun ba\u011Fl\u0131 oldu\u011Fu pine ad verelim: buton = ${r} (const, bu de\u011Fer de\u011Fi\u015Fmez demek).`),i(`const int led = ${a};`,`LED'in ba\u011Fl\u0131 oldu\u011Fu pine de ad verelim: led = ${a}.`),i(""),i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r."),i("pinMode(buton, INPUT);",`Buton pinini (${r}) giri\u015F yap: bu pin bilgi okuyacak.`),i("pinMode(led, OUTPUT);",`LED pinini (${a}) \xE7\u0131k\u0131\u015F yap: bu pin elektrik verecek.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: durmadan d\xF6ner.");let o=i("if (digitalRead(buton) == HIGH) {","E\u011Fer buton pini HIGH okunuyorsa, yani butona bas\u0131l\u0131ysa:"),l=i("digitalWrite(led, HIGH);","LED'i yak."),c=i("} else {","De\u011Filse, yani butona bas\u0131l\u0131 de\u011Filse:"),u=i("digitalWrite(led, LOW);","LED'i s\xF6nd\xFCr.");i("}","Karar b\xF6l\xFCm\xFC bitti."),i("}","Tekrar b\xF6l\xFCm\xFC bitti; ba\u015Fa d\xF6n ve butonu yeniden oku."),s.yuksek=[o,l],s.dusuk=[o,c,u]}else if(n.tur==="elle"){let r=hr(t),a=as.filter(o=>r.has(String(o))||n.seviyeler?.[o]).reverse();i("void setup() {",a.length?"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r.":"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: hen\xFCz kablo tak\u0131l\u0131 ya da HIGH yap\u0131lm\u0131\u015F pin yok.");for(let o of a){i(`pinMode(${o}, OUTPUT);`,`${o} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap.`);let l=n.seviyeler?.[o],c=i(`digitalWrite(${o}, ${l?"HIGH":"LOW"});`,l?`${o}. pine elektrik ver (5 volt).`:`${o}. pinin elektri\u011Fini kes (0 volt).`);s.yuksek.push(c),s.dusuk.push(c)}i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: burada komut yok, pinler haz\u0131rl\u0131kta ayarland\u0131\u011F\u0131 gibi kal\u0131r."),i("}","Tekrar b\xF6l\xFCm\xFC bitti.")}else{let r=n.pin,[a,o]=dg[n.bekleme]||dg[1e3];i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar kart a\xE7\u0131l\u0131nca yaln\u0131z bir kez \xE7al\u0131\u015F\u0131r."),i(`pinMode(${r}, OUTPUT);`,`${r} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap: bu pin art\u0131k elektrik verebilir.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar s\u0131rayla \xE7al\u0131\u015F\u0131r, bitince en ba\u015Fa d\xF6ner."),s.yuksek.push(i(`digitalWrite(${r}, HIGH);`,`${r}. pine elektrik ver (5 volt): LED yanar.`)),s.yuksek.push(i(`delay(${n.bekleme});`,a)),s.dusuk.push(i(`digitalWrite(${r}, LOW);`,`${r}. pinin elektri\u011Fini kes (0 volt): LED s\xF6ner.`)),s.dusuk.push(i(`delay(${n.bekleme});`,o)),i("}","Tekrar b\xF6l\xFCm\xFC bitti; en ba\u015Fa d\xF6n ve yeniden ba\u015Fla.")}return{satirlar:e,vurgu:s}}function pg(n){let t=0;return n.map(({k:e})=>{let i=e.trim();i.startsWith("}")&&(t=Math.max(0,t-1));let s="  ".repeat(t)+i;return i.endsWith("{")&&t++,s})}var mg="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";function gg(n){if(!n)return;let t=()=>{n.classList.toggle("ayar-acik",!!n.querySelector(".ayarlar:not([hidden])")),n.classList.toggle("erisim-acik",!!n.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function _g(n){if(!(!n||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;n.classList.toggle("dar-640",e<=640),n.classList.toggle("dar-380",e<=380)}).observe(n)}}function yg(n,t){if(!n)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){n.hidden=!0;return}n.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}var pe=document.documentElement,mt=(n,t=document)=>t.querySelector(n),_n=(n,t=document)=>[...t.querySelectorAll(n)],oi=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},Ei=n=>{try{return localStorage.getItem(n)}catch{return null}},xg=0,Ge=n=>{let t=mt("#duyuru");t&&(clearTimeout(xg),t.textContent="",xg=setTimeout(()=>{t.textContent=n},40))},si=(n="")=>String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),SS=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1),qd=(n,t=1)=>n.toFixed(t).replace(".",","),Xn=(()=>{try{return JSON.parse(mt("#ozgur-ikon")?.textContent||"{}")}catch{return{}}})(),ku={hata:"Hata",uyari:"Uyar\u0131",bilgi:"Bilgi"};pe.dataset.js="1";var oe=null,Ru=null,fr=null,vg=["5","6","7","8"],Cu=mt("#sinif-penceresi");function wS(n,t=!0){pe.dataset.sinif=n,t&&oi("bote-3d-sinif",n);let e=new URL(location.href);e.searchParams.set("sinif",n),history.replaceState(null,"",e);for(let i of _n("[data-sinif-yaz]"))i.textContent=`${n}. s\u0131n\u0131f`;for(let i of _n("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===n));Ra(!0)}{let n=new URLSearchParams(location.search).get("sinif"),t=Ei("bote-3d-sinif"),e=vg.includes(n)?n:vg.includes(t)?t:null;if(e){pe.dataset.sinif=e;for(let i of _n("[data-sinif-yaz]"))i.textContent=`${e}. s\u0131n\u0131f`;for(let i of _n("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===e))}}document.addEventListener("click",n=>{let t=n.target.closest("[data-sinif-sec]");t&&(wS(t.dataset.sinifSec),Cu?.open&&(Cu.close(),mt("#sinif-dugme")?.focus()),Ge(`${t.dataset.sinifSec}. s\u0131n\u0131f se\xE7ildi`))});mt("#sinif-dugme")?.addEventListener("click",()=>Cu?.showModal?.());var Ig=new URLSearchParams(location.search).get("mod")||Ei("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),Pg=window.matchMedia(mg),kg=Ig;function sf(n,t){kg=n,pe.dataset.mod=n==="tahta"&&Pg.matches?"normal":n,mt("#tahta-dugme")?.setAttribute("aria-pressed",String(pe.dataset.mod==="tahta")),t&&oi("bote-3d-mod",n),yf()}sf(Ig,!1);Pg.addEventListener?.("change",()=>sf(kg,!1));mt("#tahta-dugme")?.addEventListener("click",()=>sf(pe.dataset.mod==="tahta"?"normal":"tahta",!0));var Lg=()=>pe.dataset.theme==="dark"?"#17121f":"#e9e5f1";mt("#tema-dugme")?.addEventListener("click",()=>{let n=pe.dataset.theme!=="dark";n?pe.dataset.theme="dark":delete pe.dataset.theme,oi("bote-theme",n?"dark":"light"),oe?.arkaPlan(Lg())});yg(mt("#tam-ekran"),pe);var Lu=mt("#ogretmen-dugme");function rf(n){pe.dataset.ek=n?"acik":"",Lu?.setAttribute("aria-expanded",String(n)),n&&mt("#ogretmen")?.focus()}Lu?.addEventListener("click",()=>rf(pe.dataset.ek!=="acik"));mt("#ogretmen-kapat")?.addEventListener("click",()=>{rf(!1),Lu?.focus()});var li=mt(".ders"),mr=mt(".kart-alani"),Bs=mt(".panel-kenar"),Zd=mt("#panel-dugme");gg(mr);_g(mt(".sahne-arac"));var On=window.matchMedia("(orientation: portrait), (max-width: 820px)");function Qo(n,t=!0){pe.dataset.panel=n?"acik":"kapali",Zd?.setAttribute("aria-expanded",String(n)),Zd?.setAttribute("aria-label",n?"Paneli kapat":"Paneli a\xE7"),mr.inert=!n&&!On.matches,t&&(oi("bote-3d-panel",n?"acik":"kapali"),Ge(n?"Panel a\xE7\u0131ld\u0131":"Panel kapand\u0131"))}Qo(Ei("bote-3d-panel")!=="kapali",!1);Zd?.addEventListener("click",()=>Qo(pe.dataset.panel!=="acik"));var tl=n=>{n?li.style.setProperty("--panel-w",`${Math.round(n)}px`):li.style.removeProperty("--panel-w")},Kd=n=>Math.max(300,Math.min(li.clientWidth*.62,n));tl(Number(Ei("bote-3d-panel-w"))||0);var Dg=()=>oi("bote-3d-panel-w",String(parseInt(li.style.getPropertyValue("--panel-w"),10)||"")),pr=null;Bs?.addEventListener("pointerdown",n=>{n.target.closest("#panel-dugme")||pe.dataset.panel!=="acik"||On.matches||(Bs.setPointerCapture(n.pointerId),pr={x:n.clientX,w:mr.getBoundingClientRect().width,once:li.style.getPropertyValue("--panel-w")},pe.dataset.suruklenen="1")});var AS=110;Bs?.addEventListener("pointermove",n=>{if(!pr)return;let t=pr.w+(pe.dataset.panelYan==="sol"?1:-1)*(n.clientX-pr.x);t<Kd(0)-AS?pe.dataset.kapanacak="1":delete pe.dataset.kapanacak,tl(Kd(t))});var Ng=n=>{if(!pr)return;let t=pr;if(pr=null,delete pe.dataset.suruklenen,pe.dataset.kapanacak&&(delete pe.dataset.kapanacak,t.once?li.style.setProperty("--panel-w",t.once):li.style.removeProperty("--panel-w"),n?.type==="pointerup")){Qo(!1);return}Dg()};Bs?.addEventListener("pointerup",Ng);Bs?.addEventListener("pointercancel",Ng);Bs?.addEventListener("dblclick",n=>{n.target.closest("#panel-dugme")||(tl(0),oi("bote-3d-panel-w",""))});Bs?.addEventListener("keydown",n=>{if(n.target!==Bs||!["ArrowLeft","ArrowRight"].includes(n.key))return;n.preventDefault(),n.stopPropagation();let t=n.key==="ArrowLeft"==(pe.dataset.panelYan!=="sol");tl(Kd(mr.getBoundingClientRect().width+(t?40:-40))),Dg()});function Ug(n,t){pe.dataset.panelYan=n;for(let e of _n("[data-yan]"))e.setAttribute("aria-pressed",String(e.dataset.yan===n));t&&oi("bote-3d-panel-yan",n)}Ug(Ei("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);var jo=mt("#ayarlar"),Og=mt("#ayar-dugme"),Fg=n=>{jo.hidden=!n,Og.setAttribute("aria-expanded",String(n)),n&&jo.querySelector("button")?.focus()};Og?.addEventListener("click",n=>{n.stopPropagation(),Fg(jo.hidden)});document.addEventListener("click",n=>{jo&&!jo.hidden&&!n.target.closest("#ayarlar, #ayar-dugme")&&Fg(!1)});function Bg(n,t){pe.dataset.panelBoyut=n;for(let e of _n("[data-panel-boyut]:not(html)"))e.setAttribute("aria-pressed",String(e.dataset.panelBoyut===n));t&&(tl(0),oi("bote-3d-panel-w",""),oi("bote-3d-panel-boyut",n))}Bg(["dar","orta","genis"].includes(Ei("bote-3d-panel-boyut"))?Ei("bote-3d-panel-boyut"):"orta",!1);var qo=[.9,1,1.15,1.3,1.5],Ta=Math.max(0,qo.indexOf(Number(Ei("bote-3d-yazi"))||1));function zg(n,t){Ta=Math.max(0,Math.min(qo.length-1,n)),pe.style.setProperty("--yazi",String(qo[Ta]));let e=mt("#yazi-deger");e&&(e.textContent=`%${Math.round(qo[Ta]*100)}`),t&&oi("bote-3d-yazi",String(qo[Ta]))}zg(Ta,!1);document.addEventListener("click",n=>{let t=n.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");t&&(t.dataset.panelBoyut&&Bg(t.dataset.panelBoyut,!0),t.dataset.yazi&&zg(Ta+Number(t.dataset.yazi),!0),t.dataset.yan&&Ug(t.dataset.yan,!0))});var ri={kisa:()=>{let n=mt(".tutamac"),t=mt(".kart-ust"),e=mt(".kart-alt"),i=!!(e&&t&&e.offsetTop<t.offsetTop+t.offsetHeight);return(n?.offsetHeight||0)+Math.max(t?.offsetHeight||0,i?e.offsetHeight:0)+(i?0:e?.offsetHeight||0)+2},yarim:()=>li.clientHeight*.5,tam:()=>li.clientHeight*.92},Vg=88,af=()=>ri.yarim()-ri.kisa()+2>=Vg,Gg=n=>n==="yarim"&&!af()?"kisa":n,ci=["kisa","yarim","tam"].includes(Ei("bote-3d-sayfa"))?Ei("bote-3d-sayfa"):"yarim";function Yi(n,t=!0,e=!1){if(!On.matches){delete pe.dataset.sayfa,li.style.removeProperty("--sayfa-h"),oe?.gorunurAlan(0,!0),Qo(pe.dataset.panel!=="kapali",!1);return}ci=n;let i=Gg(n);pe.dataset.sayfa=i,mr.inert=!1;let s=Math.round(ri[i]());e&&(pe.dataset.suruklenen="1"),li.style.setProperty("--sayfa-h",`${s}px`),e&&requestAnimationFrame(()=>delete pe.dataset.suruklenen),oe?.gorunurAlan(s,e),t&&oi("bote-3d-sayfa",n)}var ii=null;for(let n of[mt(".tutamac"),mt(".kart-ust")].filter(Boolean)){n.addEventListener("pointerdown",e=>{if(!On.matches||e.target.closest("button"))return;n.setPointerCapture(e.pointerId);let i=performance.now();ii={y:e.clientY,h:mr.getBoundingClientRect().height,sonY:e.clientY,sonT:i,hiz:0},pe.dataset.suruklenen="1"}),n.addEventListener("pointermove",e=>{if(!ii)return;let i=performance.now();li.style.setProperty("--sayfa-h",`${Math.round(Math.max(ri.kisa(),Math.min(ri.tam(),ii.h+(ii.y-e.clientY))))}px`),ii.hiz=(ii.sonY-e.clientY)/Math.max(1,i-ii.sonT),ii.sonY=e.clientY,ii.sonT=i});let t=e=>{if(!ii)return;let i=ii;ii=null,delete pe.dataset.suruklenen;let s=mr.getBoundingClientRect().height,r=Math.abs(e.clientY-i.y)>6,a=af(),o=a?"yarim":"tam",l;r?i.hiz>.45?l=s<ri.yarim()?o:"tam":i.hiz<-.45?l=a&&s>ri.yarim()?"yarim":"kisa":l=(a?["kisa","yarim","tam"]:["kisa","tam"]).sort((c,u)=>Math.abs(ri[c]()-s)-Math.abs(ri[u]()-s))[0]:l=pe.dataset.sayfa==="kisa"?o:"kisa",Yi(l),Ge({kisa:"Panel k\xFC\xE7\xFCld\xFC",yarim:"Panel yar\u0131m ekran",tam:"Panel tam ekran"}[l])};n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t)}On.addEventListener?.("change",()=>Yi(ci,!1,!0));var bg=0;window.addEventListener("resize",()=>{clearTimeout(bg),bg=setTimeout(()=>{On.matches&&Yi(ci,!1,!0)},120)});Yi(ci,!1,!0);var Ca=null,ES=()=>{On.matches&&ci!=="kisa"&&(Ca=ci,Yi("kisa",!1))},Hg=()=>{Ca&&On.matches&&Yi(Ca,!1),Ca=null},TS=()=>{Ca==="tam"&&(Ca=af()?"yarim":"kisa"),Hg()},Ea=["kur","program","durum"];function RS(){if(!On.matches)return;let n=ri.yarim()-ri.kisa()+2>=Vg?"yarim":"tam";(ci==="kisa"||ci==="yarim"&&n==="tam")&&Yi(n,n==="yarim")}function of(n,t=!1){for(let e of Ea){let i=mt(`#sekme-${e}`),s=mt(`#bolum-${e}`),r=e===n;i.setAttribute("aria-selected",String(r)),i.tabIndex=r?0:-1,s.hidden=!r}t&&mt(`#sekme-${n}`).focus(),mt(".kart-govde")?.scrollTo(0,0),RS()}mt(".sekmeler").addEventListener("click",n=>{let t=n.target.closest("[role=tab]");t&&of(t.id.slice(6))});mt(".sekmeler").addEventListener("keydown",n=>{let t=Ea.indexOf(document.activeElement?.id?.slice(6));if(t<0)return;let e={ArrowRight:t+1,ArrowLeft:t-1,Home:0,End:Ea.length-1}[n.key];e!==void 0&&(n.preventDefault(),n.stopPropagation(),of(Ea[(e+Ea.length)%Ea.length],!0))});var Wg="bote-3d-ozgur-devre",gr="turuncu";function CS(){try{let n=JSON.parse(Ei(Wg)||"null");if(n&&n.surum===1)return xu[n.kabloRengi]&&(gr=n.kabloRengi),wa(n)}catch{}return wa(Yd["ders-2"])}var te=CS(),ui=!1,Ko=!0,Xg=!1,Te=null,ls=null,zs=new Set,Ut=null,Wi=null,Du=[],dr=[],lf=()=>JSON.stringify({parcalar:te.parcalar,program:te.program}),Mg=0;function cf(){clearTimeout(Mg),Mg=setTimeout(()=>{let n=Ut?.tasinan?JSON.parse(Ut.onceki):te;oi(Wg,JSON.stringify({surum:1,parcalar:n.parcalar,program:n.program,kabloRengi:gr}))},300)}function Pa(n=lf()){dr[dr.length-1]!==n&&(dr.push(n),dr.length>60&&dr.shift(),mt("#geri-al").disabled=!1)}function Yg(){Ut&&_r(!0);let n=dr.pop();mt("#geri-al").disabled=!dr.length,n&&(te=wa(JSON.parse(n)),hs(!1),Vs(),Ge("Son de\u011Fi\u015Fiklik geri al\u0131nd\u0131"))}var yr=n=>te.parcalar.find(t=>t.id===n);function IS(n){let t={led:"led",direnc:"r",buton:"buton",kablo:"k"}[n],e=new Set(te.parcalar.map(s=>s.id)),i=1;for(;e.has(`${t}-${i}`);)i++;return`${t}-${i}`}var Un=mt("#sahne"),Eu=mt(".sahne-alani"),wi=new Map,$g=[],Ai=null,Hi=null,cs=null,Fs=null,Iu=2.54,un=(n,t)=>{let e=tn(n);return e?e.tur==="delik"?lr(e.sutun,e.satir,t):e.tur==="ray"?Om(e.ray.slice(0,-1),e.ray.slice(-1),e.sutun,t):wd(e.pin):null},Yo=n=>(tn(n)?.tur==="pin"?ni:Qe)+.09,PS=_u.map(n=>({id:`p:${n}`,v:wd(n)})),Mu=n=>Wo.map(t=>`r:${n}:${t}`),kS=n=>Array.from({length:30},(t,e)=>`h:${e+1}:${n}`),Tu=[Mu("uzak+"),Mu("uzak-"),...[..."jihgf",..."edcba"].map(kS),Mu("yakin-"),Mu("yakin+")],Zo=[...Tu,zd.map(n=>`p:${n}`),[...Vd,...Gd].map(n=>`p:${n}`)],LS=n=>{let t=tn(n[0]);return t.tur==="ray"?`${t.ray.startsWith("yakin")?"alt":"\xFCst"} ${t.ray.endsWith("+")?"+":"\u2212"}`:t.satir};function DS(){if(oe=Sm(Un,{arkaPlan:Lg(),olay:n=>{n==="baglam-kaybi"&&Eu.classList.add("baglam-kaybi"),n==="baglam-geri"&&Eu.classList.remove("baglam-kaybi")}}),!oe){pe.dataset.webgl="yok";for(let n of _n("[data-arac]"))n.disabled=!0;Ia(!0);return}Wm(oe.renderer.capabilities.getMaxAnisotropy()),Ru=Bm(oe.hedefler),oe.scene.add(Ru.grup),fr=zm(oe.hedefler),oe.scene.add(fr.grup);for(let n=0;n<3;n++){let t=new Cs(16777215,0,42,2);oe.scene.add(t),$g.push(t)}NS(),qg(),US(),On.matches&&oe.gorunurAlan(Math.round(ri[Gg(ci)]()),!0),oe.kameraGit(cu.genel,!0),HS(),Xi(),us(),requestAnimationFrame(()=>Eu.classList.add("hazir")),a0&&oe.kareGuncelleyici(()=>(jg++,!1))}mt("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function NS(){let n=e=>(e.rotateX(-Math.PI/2),e),t=(e,i=.96)=>new Sn({color:e,transparent:!0,opacity:i,depthWrite:!1});Ai=new Kt(n(new ia(1.2,1.9,32)),t(9133302)),Ai.renderOrder=4,Ai.visible=!1,Hi=new Kt(n(new Qs(1.15,24)),t(8141549)),Hi.renderOrder=4,Hi.visible=!1,cs=new zn(new Ee(2.1,.05,2.1),t(1483594,.9),4),cs.count=0,cs.frustumCulled=!1,Fs=new zn(n(new ia(.95,1.55,24)),t(8141549),24),Fs.count=0,Fs.frustumCulled=!1,Fs.renderOrder=4,oe.scene.add(Ai,Hi,cs,Fs)}function US(){let n=Id("kirmizi",new C(-150,Qe,60),new C(-147.46,Qe,60));n.userData.ac(1),oe.scene.add(n);let t=[Ai,Hi].map(e=>e.visible);Ai.visible=Hi.visible=!0;try{oe.renderer.compile(oe.scene,oe.camera)}catch{}oe.scene.remove(n),uu(n),[Ai.visible,Hi.visible]=t}var OS=n=>JSON.stringify([n.tur,n.renk,n.deger,n.anot,n.katot,n.a,n.b,n.sutun,n.bas,n.son]);function FS(n){if(n.tur==="led")return Id(n.renk,un(n.anot),un(n.katot));if(n.tur==="direnc")return Km(n.deger,un(n.a),un(n.b));if(n.tur==="buton"){let t=lr(n.sutun,"e"),e=lr(n.sutun+2,"e");return Jm(new C((t.x+e.x)/2,Qe,zt.z))}return jm(un(n.bas),un(n.son),n.renk)}function qg(){if(!oe)return;let n=new Set,t=!1;for(let e of te.parcalar){n.add(e.id);let i=OS(e),s=wi.get(e.id);if(s&&s.anahtar===i)continue;s&&(oe.scene.remove(s.nesne),uu(s.nesne));let r=FS(e);r.userData.parcaId=e.id,r.updateMatrixWorld(!0),oe.scene.add(r),wi.set(e.id,{nesne:r,anahtar:i}),t=!0}for(let[e,i]of wi)n.has(e)||(oe.scene.remove(i.nesne),uu(i.nesne),wi.delete(e),t=!0);for(let e of zs)wi.get(e)?.nesne.userData.bas?.(!0);t&&oe.golgeYenile()}function Zg(n){let t=wi.get(n),e=yr(n);return!t||!e?null:e.tur==="kablo"?t.nesne.userData.egri.getPoint(.5).add(new C(0,2.5,0)):t.nesne.localToWorld((t.nesne.userData.tepe||new C(0,6,0)).clone().add(new C(0,2,0)))}var Pu=new nr,Sg=new et,Su=new Rn(new C(0,1,0),0),$o=new C;function Kg(n,t){let e=Un.getBoundingClientRect();Sg.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),Pu.setFromCamera(Sg,oe.camera)}function Jo(n){let t=n.clone().project(oe.camera),e=Un.getBoundingClientRect();return{x:e.left+(t.x+1)/2*e.width,y:e.top+(1-t.y)/2*e.height}}function Jg(n){let t=Jo(n),e=Jo(n.clone().add(new C(Iu,0,0))),i=Jo(n.clone().add(new C(0,0,Iu)));return Math.min(Math.hypot(e.x-t.x,e.y-t.y),Math.hypot(i.x-t.x,i.y-t.y))}var BS=lr(1,"a").x,zS=[...Object.entries(Fd).map(([n,t])=>({tur:"satir",r:n,z:t})),...Object.entries(Bd).map(([n,t])=>({tur:"ray",r:n,z:t}))];function VS(n){let t=(n.x-BS)/Iu+1,e=(n.z-zt.z)/Iu,i=null,s=.55;for(let a of zS){let o=Math.abs(e-a.z);o<s&&(s=o,i=a)}if(!i)return null;let r=Math.round(t);return Math.abs(t-r)>.55?null:i.tur==="satir"?r>=1&&r<=30?`h:${r}:${i.r}`:null:Wo.includes(r)?`r:${i.r}:${r}`:null}function Jd(n,t){if(Kg(n,t),Su.constant=-ni,Pu.ray.intersectPlane(Su,$o)){let e=null,i=1.9;for(let s of PS){let r=Math.hypot(s.v.x-$o.x,s.v.z-$o.z);r<i&&(i=r,e=s.id)}if(e)return e}return Su.constant=-Qe,Pu.ray.intersectPlane(Su,$o)?VS($o):null}function GS(n,t){Kg(n,t);let e=[];for(let r of wi.values())r.nesne.userData.hedef&&e.push(r.nesne.userData.hedef);let s=Pu.intersectObjects(e,!1)[0]?.object;for(;s&&!s.userData.parcaId;)s=s.parent;return s?yr(s.userData.parcaId):null}var Fe=null,ai=null,jg=0;function HS(){let n=new Set,t=!1,e=null,i=null,s=0;Un.addEventListener("pointerdown",a=>{n.size||(t=!1),n.add(a.pointerId),n.size>1&&(t=!0),e={x:a.clientX,y:a.clientY,t:performance.now(),tur:a.pointerType}});let r=a=>{if(n.delete(a.pointerId),!e||t){n.size||(e=null);return}let o=e;e=null,!(a.type!=="pointerup"||Math.hypot(a.clientX-o.x,a.clientY-o.y)>9||performance.now()-o.t>600)&&WS(a.clientX,a.clientY,o.tur)};Un.addEventListener("pointerup",r),Un.addEventListener("pointercancel",r),Un.addEventListener("pointermove",a=>{a.pointerType==="mouse"&&(i={x:a.clientX,y:a.clientY,tus:a.buttons},s||(s=requestAnimationFrame(()=>{s=0,i&&!i.tus&&Yn(Jd(i.x,i.y),"fare")})))}),Un.addEventListener("pointerleave",()=>{i=null,ai==="fare"&&Yn(null,null)}),Un.addEventListener("focus",()=>{(!Fe||ai!=="klavye")&&Yn(Fe||"h:15:e","klavye",!0)}),Un.addEventListener("blur",()=>{ai==="klavye"&&Yn(null,null)}),Un.addEventListener("keydown",XS)}function WS(n,t,e){if(!oe)return;if(vr(),Ut){let r=Jd(n,t);if(!r){Qg("Burada delik yok: breadboard'daki bir deli\u011Fe ya da Arduino'nun bir pinine dokun");return}if(Jg(un(r))<(e==="mouse"?7:26)){qS(r);return}Yn(r,e==="mouse"?"fare":"dokunma"),df(r);return}let i=GS(n,t);if(i){if(i.tur==="buton"&&ui&&te.program.tur==="buton"){JS(i.id);return}ka(i.id);return}hs();let s=Jd(n,t);Yn(s,s?"dokunma":null),s&&Ge(`${Xe(s,!0)}: ${Sa(s)} birbirine ba\u011Fl\u0131`)}function Yn(n,t,e=!1){n===Fe&&t===ai&&!e||(Fe=n,ai=n?t:null,Un&&(Un.style.cursor=n?"pointer":Ut?"crosshair":""),us())}function XS(n){if(!oe)return;let t=n.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(t)){n.preventDefault();let e=Fe||"h:15:e",i=Zo.findIndex(o=>o.includes(e));i<0&&(i=8);let s=Zo[i],r=s.indexOf(e),a=e;if(t==="ArrowLeft"&&(a=s[Math.max(0,r-1)]),t==="ArrowRight"&&(a=s[Math.min(s.length-1,r+1)]),t==="Home"&&(a=s[0]),t==="End"&&(a=s[s.length-1]),t==="ArrowUp"||t==="ArrowDown"){let o=Zo[Math.max(0,Math.min(Zo.length-1,i+(t==="ArrowUp"?-1:1)))],l=un(e).x;a=o.reduce((c,u)=>Math.abs(un(u).x-l)<Math.abs(un(c).x-l)?u:c,o[0])}Yn(a,"klavye"),Ge(YS(a));return}if(t==="Enter"||t===" "){n.preventDefault();let e=Fe||"h:15:e";if(Ut){df(e);return}let i=bu(te.parcalar).get(e);if(i){ka(i);return}Yn(e,"klavye",!0),Ge(`${Xe(e,!0)}: ${Sa(e)} birbirine ba\u011Fl\u0131`);return}(t==="Delete"||t==="Backspace")&&Wi&&!Ut&&(n.preventDefault(),ff(Wi))}function YS(n){let t=Xe(n,!0),e=bu(te.parcalar).get(n);if(e&&(t+=`, burada ${Gi(yr(e))}`),Ut){let i=Xo(te.parcalar,Ut.tur,Ut.ilk,n);i.gecerli||(t+=`. Olmaz: ${i.neden}`)}return t}document.addEventListener("keydown",n=>{if(!(n.target.closest?.("input[type=text], textarea")||Cu?.open)){if((n.ctrlKey||n.metaKey)&&!n.shiftKey&&!n.altKey&&(n.key==="z"||n.key==="Z")){n.preventDefault(),Yg();return}if(n.key==="Escape"){if(pe.dataset.ek==="acik"){rf(!1),Lu?.focus();return}if(!mt("#secici").hidden){vr(),Un.focus({preventScroll:!0});return}if(Ut){_r(!0);return}Wi&&hs()}}});var wu=new Me,$d=Object.assign(document.createElement("div"),{className:"imlec-etiket"}),wg=Object.assign(document.createElement("div"),{className:"imlec-etiket ilk"}),jd=new Map;function us(){if(!oe)return;let n=[],t=!0,e="";if(Fe){if(Ut){let o=Xo(te.parcalar,Ut.tur,Ut.ilk,Fe);t=o.gecerli,e=o.neden||""}Ai.position.copy(un(Fe)).setY(Yo(Fe)),Ai.material.color.setHex(t?9133302:14427686),Ai.visible=!0;let r=ug(Fe);if(tn(Fe).tur==="pin"){fr.grupGoster([]);let o=r.filter(l=>l!==Fe).slice(0,4);cs.count=o.length,o.forEach((l,c)=>{let u=un(l);wu.makeTranslation(u.x,ni+.06,u.z),cs.setMatrixAt(c,wu)}),cs.instanceMatrix.needsUpdate=!0}else cs.count=0,fr.grupGoster(r.map(o=>un(o)));let a;Ut?a=t?Xe(Fe,!0):`${Xe(Fe)}: ${e}`:a=tn(Fe).tur==="delik"?`${Xe(Fe)} \xB7 ${Sa(Fe)}`:Sa(Fe),$d.textContent=a,$d.classList.toggle("gecersiz",!t),n.push({nokta:un(Fe).setY(Yo(Fe)),el:$d})}else Ai.visible=!1,cs.count=0,fr.grupGoster([]);Ut?.ilk?(Hi.position.copy(un(Ut.ilk)).setY(Yo(Ut.ilk)+.01),Hi.visible=!0,wg.textContent=`${Ut.tur==="led"?"Anot":"1. u\xE7"}: ${Xe(Ut.ilk)}`,Ut.ilk!==Fe&&n.push({nokta:un(Ut.ilk).setY(Yo(Ut.ilk)),el:wg})):Hi.visible=!1;let s=[...new Set([Wi,...Du].filter(Boolean))].map(yr).filter(Boolean).flatMap(r=>ur(r)).slice(0,24);Fs.count=s.length,s.forEach((r,a)=>{let o=un(r);wu.makeTranslation(o.x,Yo(r)+.02,o.z),Fs.setMatrixAt(a,wu)}),Fs.instanceMatrix.needsUpdate=!0;for(let[r,a]of jd){let o=Zg(r);o&&n.push({nokta:o,el:a})}oe.isaretKoy(n)}function Qd(){let n=new Map;for(let e of Te.uyarilar)if(e.seviye!=="bilgi")for(let i of e.parcalar)(!n.has(i)||e.seviye==="hata"&&n.get(i).seviye!=="hata")&&n.set(i,e);let t=JSON.stringify([...n].map(([e,i])=>[e,i.seviye,i.metin]));if(t===Qd.imza)return!1;Qd.imza=t,jd.clear();for(let[e,i]of n){let s=document.createElement("button");s.type="button",s.tabIndex=-1,s.className=`rozet-isaret ${i.seviye}`,s.innerHTML=`<span>${Xn[i.seviye]||""}</span>`,s.setAttribute("aria-label",`${ku[i.seviye]}: ${i.metin}`),s.title=i.metin,s.addEventListener("click",r=>{r.stopPropagation(),ka(e),r0()}),jd.set(e,s)}return!0}var $S=n=>n.tur==="led"?`${SS(Ma[n.renk].ad)} LED`:n.tur==="direnc"?`${yu[n.deger]} diren\xE7`:n.tur==="buton"?"Buton":`${xu[n.renk]} kablo`;function uf(){if(!Ut)return"";let n=Ut.tasinan?`${Gi(Ut.tasinan.parca)} ta\u015F\u0131n\u0131yor. `:`${$S(Ut)}: `;return Ut.tur==="buton"?`${n}orta kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131nda bir deli\u011Fe dokun; buton kanal\u0131n \xFCst\xFCne oturur.`:Ut.tur==="led"?Ut.ilk?"\u015Eimdi k\u0131sa baca\u011F\u0131n (katot, eksi) deli\u011Fine dokun: anottan en \xE7ok 4 ad\u0131m \xF6tede.":`${n}\xF6nce uzun baca\u011F\u0131n (anot, art\u0131) deli\u011Fine dokun.`:Ut.tur==="direnc"?Ut.ilk?"\u015Eimdi ikinci baca\u011F\u0131n deli\u011Fine dokun: ilk bacaktan 2 ile 6 ad\u0131m \xF6tede.":`${n}birinci baca\u011F\u0131n deli\u011Fine dokun.`:Ut.ilk?"\u015Eimdi kablonun \xF6b\xFCr ucunun tak\u0131laca\u011F\u0131 pine ya da deli\u011Fe dokun.":`${n}kablonun ba\u015Flayaca\u011F\u0131 pine ya da deli\u011Fe dokun.`}var Ag=0;function xr(n=""){let t=mt("#yonerge");t.hidden=!Ut,Ut&&(clearTimeout(Ag),t.classList.toggle("gecersiz",!!n),mt("#yonerge-ikon").innerHTML=n?Xn.hata||"":Xn.sec||"",mt("#yonerge-metin").textContent=n?`Olmaz: ${n}`:uf(),n&&(Ag=setTimeout(()=>xr(),3200)))}function Qg(n){xr(n),Ge(`Olmaz: ${n}`)}function t0(n,t={}){oe&&(Ut&&_r(!0),hs(!1),vr(),Ut={tur:n,renk:t.renk,deger:t.deger,ilk:null,tasinan:t.tasinan||null,onceki:t.onceki||lf()},hf(),ES(),xr(),Yn(ai==="fare"||ai==="klavye"?Fe:null,ai,!0),Ge(uf()))}function _r(n){if(!Ut)return;let t=Ut.tasinan;n&&t&&(te.parcalar.splice(Math.min(t.indeks,te.parcalar.length),0,t.parca),Vs(!1)),Ut=null,vr(),hf(),xr(),Hg(),Yn(ai==="dokunma"?null:Fe,ai,!0),n&&Ge(t?"Ta\u015F\u0131ma iptal edildi; par\xE7a eski yerinde":"Yerle\u015Ftirme iptal edildi")}function hf(){for(let n of _n("[data-arac]")){let t=n.dataset.deger||"",e=Ut&&!Ut.tasinan&&n.dataset.arac===Ut.tur&&(Ut.tur==="led"?t===Ut.renk:Ut.tur==="direnc"?Number(t)===Ut.deger:!0);n.setAttribute("aria-pressed",String(!!e))}}function df(n){if(!Ut)return;let t=Xo(te.parcalar,Ut.tur,Ut.ilk,n);if(!t.gecerli){Qg(t.neden),us();return}if(Ut.tur==="buton"){Eg({tur:"buton",sutun:t.sutun});return}if(!Ut.ilk){Ut.ilk=n,xr(),us(),Ge(`${Xe(n,!0)} se\xE7ildi. ${uf()}`);return}let e=Ut;Eg(e.tur==="led"?{tur:"led",renk:e.renk,anot:e.ilk,katot:n}:e.tur==="direnc"?{tur:"direnc",deger:e.deger,a:e.ilk,b:n}:{tur:"kablo",renk:e.renk,bas:e.ilk,son:n})}function Eg(n){let t=Ut.tasinan,e=Ut.onceki,i={id:t?t.parca.id:IS(n.tur),...n};t?te.parcalar.splice(Math.min(t.indeks,te.parcalar.length),0,i):te.parcalar.push(i),Pa(e),Ut=null,vr(),hf(),xr(),TS(),Yn(ai==="dokunma"?null:Fe,ai,!0),Vs();let s=Te.uyarilar.find(r=>r.seviye!=="bilgi"&&r.parcalar.includes(i.id));Ge(`${Gi(i)} ${t?"ta\u015F\u0131nd\u0131":"tak\u0131ld\u0131"}.${s?` ${ku[s.seviye]}: ${s.metin}`:""}`)}function qS(n){let t=tn(n),e=mt("#secici-izgara"),i=(r,a)=>{let o=Xo(te.parcalar,Ut.tur,Ut.ilk,r),l=tn(r),c=o.gecerli?"":/dolu|kablo var/.test(o.neden)?"dolu":/aynı yere/.test(o.neden)?"ayn\u0131":o.mesafe!==void 0?o.mesafe<2?"yak\u0131n":"uzak":"olmaz",u=l.tur==="pin"?ba(l.pin).replace(". pin","").replace(" (RX)","").replace(" (TX)","").replace("bo\u015F pin (NC)","NC"):l.tur==="delik"?`${l.sutun}${l.satir}`:String(l.sutun);return`<button type="button" data-secici="${r}"${o.gecerli?"":" disabled"}${a?' class="yakin-hedef"':""} aria-label="${si(Xe(r,!0)+(o.gecerli?"":`: ${o.neden}`))}">${si(u)}${c?`<small>${c}</small>`:""}</button>`},s="";if(t.tur==="pin"){let r=Zo.find(l=>l.includes(n)),a=r.indexOf(n),o=Math.max(0,Math.min(r.length-5,a-2));e.style.gridTemplateColumns="repeat(5,minmax(0,1fr))",s=r.slice(o,o+5).map(l=>i(l,l===n)).join(""),mt("#secici-baslik").textContent="Hangi pin? Dokundu\u011Fun yerin \xE7evresi"}else{let r=Tu.findIndex(l=>l.includes(n)),a=Math.max(0,Math.min(Tu.length-3,r-1)),o=Math.max(1,Math.min(26,t.sutun-2));e.style.gridTemplateColumns="var(--secici-bas,52px) repeat(5,minmax(0,1fr))",s='<span class="bas"></span>'+[0,1,2,3,4].map(l=>`<span class="bas">${o+l}</span>`).join("");for(let l of Tu.slice(a,a+3)){s+=`<span class="bas">${LS(l)}</span>`;for(let c=0;c<5;c++){let u=l.find(h=>tn(h).sutun===o+c);s+=u?i(u,u===n):'<span class="bosluk" aria-hidden="true"></span>'}}mt("#secici-baslik").textContent="Hangi delik? Dokundu\u011Fun yerin \xE7evresi"}e.innerHTML=s,mt("#secici").hidden=!1,Yn(n,"dokunma"),(e.querySelector(".yakin-hedef:not(:disabled)")||e.querySelector("button:not(:disabled)")||mt("#secici-kapat")).focus({preventScroll:!0}),Ge(`Dokundu\u011Fun yerin \xE7evresi a\xE7\u0131ld\u0131: ${t.tur==="pin"?"pini":"deli\u011Fi"} listeden se\xE7`)}function vr(){let n=mt("#secici");n&&!n.hidden&&(n.hidden=!0,mt("#secici-izgara").innerHTML="")}mt("#secici-izgara").addEventListener("click",n=>{let t=n.target.closest("[data-secici]");if(!t||t.disabled)return;let e=t.dataset.secici;vr(),Yn(e,"dokunma"),df(e)});mt("#secici-kapat").addEventListener("click",()=>{vr(),us()});mt("#yonerge-iptal").addEventListener("click",()=>_r(!0));var tf=null;document.addEventListener("pointerdown",n=>{tf=n.target},!0);document.addEventListener("click",n=>{if(n.detail===0)return;let t=n.target.closest?.("#secici, #secim-kart, .rozet-isaret");t&&!(tf&&t.contains(tf))&&(n.stopPropagation(),n.preventDefault())},!0);function ka(n){let t=yr(n);if(!t){hs();return}Wi=n,Du=[],mt("#secim-ad").textContent=Gi(t),mt("#secim-acik").textContent=vu(t),mt('[data-secim="ters"]').hidden=t.tur!=="led",mt("#secim-kart").hidden=!1,pf(),us(),Ge(`${Gi(t)} se\xE7ildi. ${vu(t)}.`)}function hs(n=!0){Wi=null,Du=[];let t=mt("#secim-kart");t&&(t.hidden=!0),pf(),n&&us()}function e0(n){let t=te.parcalar.findIndex(s=>s.id===n);if(t<0||!oe)return;let e=lf(),i=te.parcalar[t];te.parcalar.splice(t,1),Vs(!1),t0(i.tur,{renk:i.renk,deger:i.deger,tasinan:{parca:i,indeks:t},onceki:e})}function n0(n){let t=yr(n);!t||t.tur!=="led"||(Pa(),[t.anot,t.katot]=[t.katot,t.anot],Vs(),ka(n),Ge(`LED ters \xE7evrildi: anot (uzun bacak) art\u0131k ${Xe(t.anot)}, katot ${Xe(t.katot)}`))}function ff(n){let t=yr(n);t&&(Pa(),te.parcalar=te.parcalar.filter(e=>e.id!==n),zs.delete(n),hs(!1),Vs(),Ge(`${Gi(t)} kald\u0131r\u0131ld\u0131. Geri al ile geri getirebilirsin.`))}mt("#secim-kart").addEventListener("click",n=>{let t=n.target.closest("[data-secim]");if(!t||!Wi)return;let e=Wi,i=t.dataset.secim;i==="tasi"&&e0(e),i==="ters"&&n0(e),i==="sil"&&ff(e),i==="kapat"&&hs()});document.addEventListener("click",n=>{let t=n.target.closest("[data-hazir]");if(t){let s=Yd[t.dataset.hazir];Ut&&_r(!0),Pa(),te=wa(s),hs(!1),Vs(),oe?.kameraGit(cu.genel),Ge(`${s.ad} devresi y\xFCklendi. Geri al ile \xF6nceki devrene d\xF6nebilirsin.`);return}let e=n.target.closest("[data-arac]");if(e&&!e.disabled){if(e.getAttribute("aria-pressed")==="true"){_r(!0);return}let s=e.dataset.arac,r=e.dataset.deger;t0(s,s==="led"?{renk:r}:s==="direnc"?{deger:Number(r)}:s==="kablo"?{renk:gr}:{});return}let i=n.target.closest("[data-liste]");if(i){let s=i.dataset.id,r=i.dataset.liste;r==="sec"&&(ka(s),On.matches&&ci!=="kisa"&&Yi("kisa")),r==="tasi"&&e0(s),r==="ters"&&n0(s),r==="sil"&&ff(s)}});function i0(){for(let t of _n('input[name="kablo-renk"]'))t.checked=t.value===gr;let n=mt('[data-arac="kablo"]');n&&n.style.setProperty("--kablo",Pd[gr])}function Ia(n=!1){let t=new Map;for(let o of Te?.uyarilar||[])if(o.seviye!=="bilgi")for(let l of o.parcalar)t.get(l)!=="hata"&&t.set(l,o.seviye);let e=!oe,i=JSON.stringify([te.parcalar,[...t],e]);if(!n&&i===Ia.imza)return;Ia.imza=i;let s=mt("#parca-listesi");mt("#parca-sayi").textContent=`(${te.parcalar.length})`;let r=document.activeElement?.closest?.("[data-liste]"),a=r&&s.contains(r)?[r.dataset.liste,r.dataset.id]:null;te.parcalar.length?s.innerHTML=te.parcalar.map(o=>{let l=si(Gi(o)),c=t.get(o.id);return`<li data-id="${o.id}">${tg(o)}<span class="parca-ad">${l}${c?`<span class="parca-sorun ${c}">${Xn[c]||""}${ku[c]}</span>`:""}</span><span class="parca-acik">${si(vu(o))}</span><div class="parca-dugmeler"><button type="button" class="dugme kucuk" data-liste="sec" data-id="${o.id}" aria-label="Se\xE7: ${l}">Se\xE7</button>`+(e?"":`<button type="button" class="dugme kucuk" data-liste="tasi" data-id="${o.id}" aria-label="Ta\u015F\u0131: ${l}">${Xn.tasi||""}Ta\u015F\u0131</button>`)+(o.tur==="led"?`<button type="button" class="dugme kucuk" data-liste="ters" data-id="${o.id}" aria-label="Ters \xE7evir: ${l}">${Xn.ters||""}Ters \xE7evir</button>`:"")+`<button type="button" class="dugme kucuk" data-liste="sil" data-id="${o.id}" aria-label="Sil: ${l}">${Xn.sil||""}Sil</button></div></li>`}).join(""):s.innerHTML='<li class="bos-mesaj">Breadboard bo\u015F. Haz\u0131r devre y\xFCkle ya da yukar\u0131dan bir par\xE7a se\xE7.</li>',pf(),a&&(s.querySelector(`[data-liste="${a[0]}"][data-id="${a[1]}"]`)||s.querySelector("[data-liste]")||mt("#sekme-kur"))?.focus({preventScroll:!0})}function pf(){for(let n of _n("#parca-listesi li[data-id]"))n.dataset.id===Wi?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")}function mf(){let n=te.program,t=hr(te.parcalar);for(let i of _n('input[name="program"]'))i.checked=i.value===n.tur;for(let i of _n("[data-program-ayar]"))i.hidden=i.dataset.programAyar!==n.tur;let e=(i,s,r)=>{for(let a of _n(`input[name="${i}"]`))a.checked=Number(a.value)===s,a.disabled=Number(a.value)===r};n.tur==="blink"&&(e("blink-pin",n.pin),e("bekleme",n.bekleme)),n.tur==="buton"&&(e("buton-giris",n.giris,n.cikis),e("buton-cikis",n.cikis,n.giris));for(let i of _n("[data-elle]")){let s=Number(i.dataset.elle),r=!!(n.tur==="elle"&&n.seviyeler[s]),a=t.has(String(s));i.setAttribute("aria-pressed",String(r)),i.querySelector("span").textContent=r?"HIGH":"LOW",i.classList.toggle("kablolu",a),i.setAttribute("aria-label",`${s}. pin: ${r?"HIGH":"LOW"}${a?", kablo tak\u0131l\u0131":""}`)}}function os(n,t){Pa(),te.program=Xd(n),mf(),gf(),_f(!0),Xi(),cf(),t&&Ge(t)}document.addEventListener("change",n=>{let t=n.target,e=te.program;if(t.name==="program"){let i=e.tur==="blink"?e.pin:e.tur==="buton"?e.cikis:13;t.value==="blink"&&os({tur:"blink",pin:i,bekleme:1e3},`Program: yan\u0131p s\xF6nen LED, ${i}. pin`),t.value==="buton"&&os({tur:"buton",giris:i===2?3:2,cikis:i},"Program: butonla LED"),t.value==="elle"&&os({tur:"elle",seviyeler:{}},"Program: elle; pinleri HIGH ya da LOW yap")}t.name==="blink-pin"&&os({...e,pin:Number(t.value)},`LED pini ${t.value}`),t.name==="bekleme"&&os({...e,bekleme:Number(t.value)},`Bekleme ${qd(Number(t.value)/1e3,Number(t.value)%1e3?1:0)} saniye`),t.name==="buton-giris"&&os({...e,giris:Number(t.value)},`Giri\u015F pini ${t.value}`),t.name==="buton-cikis"&&os({...e,cikis:Number(t.value)},`\xC7\u0131k\u0131\u015F pini ${t.value}`),t.name==="kablo-renk"&&(gr=t.value,i0(),cf(),Ut?.tur==="kablo"&&!Ut.tasinan&&(Ut.renk=gr,xr()))});document.addEventListener("click",n=>{let t=n.target.closest("[data-elle]");if(!t||te.program.tur!=="elle")return;let e=Number(t.dataset.elle),i={...te.program.seviyeler};i[e]?delete i[e]:i[e]=!0,os({tur:"elle",seviyeler:i},`${e}. pin ${i[e]?"HIGH":"LOW"}`)});function gf(){ls=fg(te.program,te.parcalar);let n=pg(ls.satirlar);mt("#kod-satirlar").innerHTML=ls.satirlar.map((t,e)=>`<li class="kod-satir${t.k.trim()?"":" bos"}" data-no="${e+1}"><code>${si(n[e])}</code><span class="tr">${si(t.t)}</span></li>`).join(""),s0()}function s0(){let n=[];if(ui&&Te?.calisiyor&&ls){let e=te.program;e.tur==="blink"?n=Ko?ls.vurgu.yuksek:ls.vurgu.dusuk:e.tur==="buton"?n=Te.cikislar[e.cikis]==="HIGH"?ls.vurgu.yuksek:ls.vurgu.dusuk:n=ls.vurgu.yuksek}let t=new Set(n);for(let e of _n("#kod-satirlar .kod-satir"))e.classList.toggle("calisiyor",t.has(Number(e.dataset.no)))}var Au=0,Tg="",Aa=0;function _f(n=!1){let t=te.program,e=ui&&t.tur==="blink"?`b${t.bekleme}:${t.pin}`:"";if(e===Tg&&!n||(Tg=e,clearTimeout(Au),Au=0,Ko=!0,!e))return;let i=()=>{Ko=!Ko,Xi(),Au=setTimeout(i,te.program.bekleme)};Au=setTimeout(i,t.bekleme)}function ZS(){let n=ui&&Te?.calisiyor&&Te.giris?.deger==="KARARSIZ";n&&!Aa&&(Aa=setTimeout(function(){Xg=Math.random()<.5,Aa=0,Xi()},90+Math.random()*380)),!n&&Aa&&(clearTimeout(Aa),Aa=0)}function KS(n){ui=n;let t=mt("#calistir");t.toggleAttribute("data-calisiyor",n),t.innerHTML=`${n?Xn.dur||"":Xn.oynat||""}<span>${n?"Durdur":"\xC7al\u0131\u015Ft\u0131r"}</span>`,_f(!0),Xi(),Ge(n?Te.durdu==="kisa-devre"?"K\u0131sa devre var: devre \xE7al\u0131\u015Fm\u0131yor. Durum b\xF6l\xFCm\xFCne bak.":Te.durdu==="reset"?"RESET pini GND'ye ba\u011Fl\u0131: program \xE7al\u0131\u015Fm\u0131yor":`Program \xE7al\u0131\u015F\u0131yor. ${Te.tamam||""}`:"Program durdu")}mt("#calistir").addEventListener("click",()=>KS(!ui));mt("#geri-al").addEventListener("click",Yg);mt("#sifirla").addEventListener("click",()=>{if(Ut&&_r(!0),!te.parcalar.length){Ge("Breadboard zaten bo\u015F");return}Pa(),te.parcalar=[],zs.clear(),hs(!1),Vs(),Ge("Breadboard bo\u015Falt\u0131ld\u0131. Geri al ile geri d\xF6nebilirsin.")});var Ti=mt("#buton-bas");function Nu(n){zs.clear();for(let t of te.parcalar)t.tur==="buton"&&(n&&zs.add(t.id),wi.get(t.id)?.nesne.userData.bas?.(n));Ti.toggleAttribute("data-basili",n),Xi(),n&&!ui&&Ge("Program \xE7al\u0131\u015Fm\u0131yor: \xF6nce \xC7al\u0131\u015Ft\u0131r'a bas")}function JS(n){zs.add(n),wi.get(n)?.nesne.userData.bas?.(!0),Xi(),setTimeout(()=>{zs.delete(n),wi.get(n)?.nesne.userData.bas?.(!1),Xi()},700)}Ti.addEventListener("pointerdown",n=>{Ti.setPointerCapture?.(n.pointerId),Nu(!0)});for(let n of["pointerup","pointercancel","lostpointercapture"])Ti.addEventListener(n,()=>{Ti.hasAttribute("data-basili")&&Nu(!1)});Ti.addEventListener("keydown",n=>{(n.key===" "||n.key==="Enter")&&!n.repeat&&(n.preventDefault(),Nu(!0))});Ti.addEventListener("keyup",n=>{(n.key===" "||n.key==="Enter")&&Nu(!1)});Ti.addEventListener("contextmenu",n=>n.preventDefault());function Vs(n=!0){qg(),mf(),gf(),_f(),Xi(),Ia();let t=!te.parcalar.some(e=>e.tur==="buton");Ti.hidden!==t&&(Ti.hidden=t,yf()),n&&cf()}function Xi(){if(Te=hg(te,{calisiyor:ui,faz:Ko,basili:[...zs],kararsiz:Xg}),oe){let t=[];for(let e of te.parcalar){if(e.tur!=="led")continue;let i=wi.get(e.id),s=Te.ledler[e.id],r=s?.yanik?s.parlaklik:0;i?.nesne.userData.ac(r),i&&r>0&&t.push([i.nesne,r])}t.sort((e,i)=>i[1]-e[1]),$g.forEach((e,i)=>{let s=t[i];if(!s){e.intensity=0;return}e.color.copy(s[0].userData.renk),e.position.set(s[0].position.x,s[0].position.y+s[0].userData.lambaY,s[0].position.z),e.intensity=380*s[1]}),Ru.ledOn(ui&&Te.durdu!=="kisa-devre"),Ru.ledL(!!Te.l13)}s0(),Ra();let n=oe?Qd():!1;Ia(),ZS(),n&&us(),oe?.iste()}function jS(){let n=Te.uyarilar,t=n.filter(r=>r.seviye==="hata").length,e=n.filter(r=>r.seviye==="uyari").length,i=t+e,s=t?"hata":e?"uyari":null;return ui?Te.durdu==="kisa-devre"?{sinif:"hata",ikon:"hata",kisa:"K\u0131sa devre: devre durdu",uzun:"K\u0131sa devre var: devre durdu. A\u015Fa\u011F\u0131daki uyar\u0131y\u0131 d\xFCzelt; d\xFCzelince devre kendili\u011Finden yeniden \xE7al\u0131\u015F\u0131r."}:Te.durdu==="reset"?{sinif:"hata",ikon:"hata",kisa:"RESET: program durdu",uzun:"RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fm\u0131yor."}:i?{sinif:s,ikon:s,kisa:`\xC7al\u0131\u015F\u0131yor \xB7 ${i} sorun`,uzun:`Devre \xE7al\u0131\u015F\u0131yor ama ${i} sorun var.`}:Te.tamam?{sinif:"tamam",ikon:"tamam",kisa:"Devre do\u011Fru, \xE7al\u0131\u015F\u0131yor",uzun:Te.tamam}:{sinif:"bekliyor",ikon:"oynat",kisa:"\xC7al\u0131\u015F\u0131yor",uzun:"Devre \xE7al\u0131\u015F\u0131yor."}:{sinif:s||"bekliyor",ikon:s||"bekliyor",kisa:i?`Durdu \xB7 ${i} sorun`:"Durdu: \xC7al\u0131\u015Ft\u0131r'a bas",uzun:`Devre durdu. \xC7al\u0131\u015Ft\u0131r'a bas\u0131nca program \xE7al\u0131\u015F\u0131r.${i?` \xC7al\u0131\u015Ft\u0131rmadan \xF6nce a\u015Fa\u011F\u0131daki ${i} soruna bak.`:""}`}}function Ra(n=!1){if(!Te)return;let t=jS(),e=Te.uyarilar,i=pe.dataset.sinif||"6",s=e.filter(x=>x.seviye!=="bilgi"),r=s.some(x=>x.seviye==="hata"),a=JSON.stringify([t,e.map(x=>[x.seviye,x.metin,x.eylem?.metin,x.parcalar.length]),i,Te.ledler,Te.cikislar,Te.giris,te.program,ui]);if(!n&&a===Ra.imza)return;Ra.imza=a;let o=mt("#durum-cip");o.className=`durum-cip ${t.sinif}`,o.innerHTML=`${Xn[t.ikon]||""}<span>${si(t.kisa)}</span>`,o.setAttribute("aria-label",`Devre durumu: ${t.uzun} Ayr\u0131nt\u0131 i\xE7in dokun.`);let l=mt("#durum-rozet");l.textContent=s.length?String(s.length):"",l.className=`rozet${r?"":" uyari"}`,mt("#sekme-durum").setAttribute("aria-label",s.length?`Durum: ${s.length} sorun`:"Durum"),mt("#durum-ozet").className=`ozet-kutu ${t.sinif}`,mt("#durum-ozet").innerHTML=`${Xn[t.ikon]||""}<span>${si(t.uzun)}</span>`;let c=JSON.stringify(e.map(x=>[x.seviye,x.metin,x.eylem?.metin,x.parcalar]));(n||c!==Ra.ui)&&(Ra.ui=c,mt("#uyarilar").innerHTML=e.length?e.map((x,g)=>`<li class="${x.seviye}">${Xn[x.seviye]||""}<div><span class="seviye-ad">${ku[x.seviye]}</span><p class="uyari-metin">${si(x.metin)}</p></div>${x.parcalar.length||x.eylem?`<div class="uyari-dugmeler">${x.parcalar.length&&oe?`<button type="button" class="dugme kucuk" data-goster="${g}">Sahnede g\xF6ster</button>`:""}${x.eylem?`<button type="button" class="dugme kucuk birincil" data-uyari-eylem="${g}">${si(x.eylem.metin)}</button>`:""}</div>`:""}</li>`).join(""):`<li class="bilgi">${Xn.tamam||""}<div><span class="seviye-ad">Tamam</span><p class="uyari-metin">Uyar\u0131 yok.</p></div></li>`);let u=te.program,h=[];if(u.tur==="blink"&&h.push([u.pin,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),u.tur==="buton"&&h.push([u.giris,"Giri\u015F (INPUT)"],[u.cikis,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),u.tur==="elle"){let x=hr(te.parcalar);for(let g of as.slice().reverse())(x.has(String(g))||u.seviyeler[g])&&h.push([g,"\xC7\u0131k\u0131\u015F (OUTPUT)"])}let d=i==="7"||i==="8",f=(x,g)=>{if(!Te.calisiyor)return"Program \xE7al\u0131\u015Fm\u0131yor";if(g.startsWith("Giri\u015F")){let p=Te.giris;return p?p.deger==="KARARSIZ"?"Bo\u015Fta: ne HIGH ne LOW okuyor":`${p.deger} okuyor${d&&Number.isFinite(p.gerilim)?` (${qd(p.gerilim)} V)`:""}`:""}return Te.cikislar[x]==="HIGH"?"HIGH (5 V)":"LOW (0 V)"};mt("#pin-tablo tbody").innerHTML=h.length?h.map(([x,g])=>`<tr><td>${x}. pin</td><td>${g}</td><td>${si(f(x,g))}</td></tr>`).join(""):'<tr><td colspan="3">Programda kullan\u0131lan pin yok.</td></tr>';let m=te.parcalar.filter(x=>x.tur==="led");mt("#led-liste").innerHTML=m.length?m.map(x=>{let g=Te.ledler[x.id]||{},p=g.yanik?g.parlaklik<.3?"\xC7ok s\xF6n\xFCk yan\u0131yor":"Yan\u0131yor":"Yanm\u0131yor",b=d&&g.yanik?` \xB7 ${qd(g.akim)} mA`:"";return`<li><span class="led-nokta" style="background:${hu[x.renk]}" aria-hidden="true"></span><span>${si(Gi(x))}</span><span class="durum-yazi">${p}${b}</span></li>`}).join(""):"<li>Devrede LED yok.</li>"}function r0(){of("durum"),!On.matches&&pe.dataset.panel==="kapali"&&Qo(!0),On.matches&&ci==="kisa"&&Yi("yarim")}mt("#durum-cip").addEventListener("click",()=>{r0(),mt("#sekme-durum").focus({preventScroll:!0})});mt("#uyarilar").addEventListener("click",n=>{let t=n.target.closest("[data-goster]"),e=n.target.closest("[data-uyari-eylem]");if(t){let i=Te.uyarilar[Number(t.dataset.goster)];if(!i)return;ka(i.parcalar[0]),Du=i.parcalar.slice(1),us(),On.matches&&ci!=="kisa"&&Yi("kisa")}if(e){let i=Te.uyarilar[Number(e.dataset.uyariEylem)];i?.eylem?.tur==="blink-pin"&&os({...te.program,pin:i.eylem.pin},`Program art\u0131k ${i.eylem.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor`)}});var Rg={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06]};for(let n of _n(".gorunum button"))n.addEventListener("click",()=>{let t=n.dataset.gorunum,e=cu.genel;oe?.kameraGit(Rg[t]?{...e,yon:Rg[t],yaricap:e.yaricap*(t==="ustten"?1:1.08)}:e);for(let i of _n(".gorunum button"))i.setAttribute("aria-pressed",String(i===n))});mt("#yakinlas")?.addEventListener("click",()=>oe?.yakinlas(.8));mt("#uzaklas")?.addEventListener("click",()=>oe?.yakinlas(1.25));mt("#rontgen-dugme").addEventListener("click",n=>{if(!fr)return;let t=n.currentTarget.getAttribute("aria-pressed")!=="true";n.currentTarget.setAttribute("aria-pressed",String(t)),fr.rontgen(t),oe.golgeYenile(),Ge(t?"R\xF6ntgen a\xE7\u0131k: breadboard'un i\xE7indeki metal \u015Feritler g\xF6r\xFCn\xFCyor":"R\xF6ntgen kapal\u0131")});var ef=mt(".ust-bant");function Cg(){let n=t=>{let e=mt(t);return!!e&&!e.hidden};ef.classList.toggle("dolu",n("#yonerge")||n("#secim-kart")||n("#secici")),ef.classList.toggle("secici-acik",n("#secici"))}if(ef&&"MutationObserver"in window){let n=new MutationObserver(Cg);for(let t of["#yonerge","#secim-kart","#secici"]){let e=mt(t);e&&n.observe(e,{attributes:!0,attributeFilter:["hidden"]})}Cg()}function yf(){let n=mt(".sahne-alani"),t=mt(".sahne-arac");!n||!t||(n.classList.remove("dar"),t.scrollWidth>t.clientWidth+1&&n.classList.add("dar"))}"ResizeObserver"in window&&new ResizeObserver(()=>yf()).observe(Eu);var a0=new URLSearchParams(location.search).has("test");i0();mf();gf();Xi();Ia(!0);Ti.hidden=!te.parcalar.some(n=>n.tur==="buton");requestAnimationFrame(()=>setTimeout(DS,20));a0&&(window.ozgurTest={ekran(n,t=3.5){if(!oe)return null;if(n.startsWith("parca:")){let i=Zg(n.slice(6));return i?Jo(i.sub(new C(0,t,0))):null}let e=un(n,n.startsWith("p:")?ni:Qe);return e?Jo(e):null},adimPiksel:n=>oe?Jg(un(n)):null,durum:()=>JSON.parse(JSON.stringify({parcalar:te.parcalar,program:te.program,calisiyor:ui,sonuc:Te,arac:Ut&&{tur:Ut.tur,ilk:Ut.ilk},secici:!mt("#secici").hidden,secili:Wi,imlec:Fe,kare:jg,kalite:oe?.kalite()}))});
