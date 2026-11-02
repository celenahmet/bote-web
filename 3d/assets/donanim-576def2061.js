var as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rd=0,nh=1,ad=2;var Ia=1,ol=2,Ar=3,ls=0,gn=1,fn=2,Ci=0,Er=1,Pa=2,ih=3,sh=4,od=5;var ks=100,ld=101,cd=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,rh=204,ah=205,gd=206,_d=207,xd=208,yd=209,vd=210,Md=211,Sd=212,bd=213,wd=214,Eo=0,To=1,Co=2,sr=3,Ro=4,Io=5,Po=6,ko=7,ll=0,Ad=1,Ed=2,fi=0,oh=1,lh=2,ch=3,hh=4,uh=5,dh=6,ka=7;var fh=300,cs=301,Ls=302,cl=303,hl=304,La=306,Ai=1e3,wi=1001,Lo=1002,dn=1003,Td=1004;var Da=1005;var an=1006,ul=1007;var Ri=1008;var Un=1009,ph=1010,mh=1011,Tr=1012,dl=1013,pi=1014,Qn=1015,mi=1016,fl=1017,pl=1018,Cr=1020,gh=35902,_h=35899,xh=1021,yh=1022,ti=1023,Ei=1026,hs=1027,ml=1028,gl=1029,us=1030,_l=1031;var xl=1033,Na=33776,Ua=33777,Fa=33778,Oa=33779,yl=35840,vl=35841,Ml=35842,Sl=35843,bl=36196,wl=37492,Al=37496,El=37488,Tl=37489,Ba=37490,Cl=37491,Rl=37808,Il=37809,Pl=37810,kl=37811,Ll=37812,Dl=37813,Nl=37814,Ul=37815,Fl=37816,Ol=37817,Bl=37818,zl=37819,Vl=37820,Gl=37821,Hl=36492,Wl=36494,Xl=36495,Yl=36283,ql=36284,za=36285,Kl=36286;var ta=2300,Do=2301,wo=2302,Wc=2303,Xc=2400,Yc=2401,qc=2402;var Cd=3200;var Va=0,Rd=1,gi="",rn="srgb",ea="srgb-linear",na="linear",Se="srgb";var Ao=7680;var Id=519,Pd=512,kd=513,Ld=514,Zl=515,Dd=516,Nd=517,Jl=518,Ud=519,Fd=35044;var vh="300 es",hi=2e3,rr=2001;function _p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=ia("canvas");return i.style.display="block",i}var bu={},ar=null;function Mh(...i){let t="THREE."+i.shift();ar?ar("log",t,...i):console.log(t,...i)}function Bd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=Bd(i);let t="THREE."+i.shift();if(ar)ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=Bd(i);let t="THREE."+i.shift();if(ar)ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bs(...i){let t=i.join(" ");t in bu||(bu[t]=!0,Qt(...i))}function zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vd={[Eo]:To,[Co]:Po,[Ro]:ko,[sr]:Io,[To]:Eo,[Po]:Co,[ko]:Ro,[Io]:sr},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=1234567,nr=Math.PI/180,or=180/Math.PI;function Ds(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Sh(i,t){return(i%t+t)%t}function yp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vp(i,t,e){return i!==t?(e-i)/(t-i):0}function $r(i,t,e){return(1-e)*i+e*t}function Mp(i,t,e,n){return $r(i,t,1-Math.exp(-e*n))}function Sp(i,t=1){return t-Math.abs(Sh(i,t*2)-t)}function bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ap(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ep(i,t){return i+Math.random()*(t-i)}function Tp(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(wu=i);let t=wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rp(i){return i*nr}function Ip(i){return i*or}function Pp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bh={DEG2RAD:nr,RAD2DEG:or,generateUUID:Ds,clamp:ce,euclideanModulo:Sh,mapLinear:yp,inverseLerp:vp,lerp:$r,damp:Mp,pingpong:Sp,smoothstep:bp,smootherstep:wp,randInt:Ap,randFloat:Ep,randFloatSpread:Tp,seededRandom:Cp,degToRad:Rp,radToDeg:Ip,isPowerOfTwo:Pp,ceilPowerOfTwo:kp,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Dp,normalize:Cn,denormalize:er},Rh=class Rh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;var ft=Rh,Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(u!==M||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*M;m<0&&(d=-d,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+M*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+M*o;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Au.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xc.copy(this).projectOnVector(t),this.sub(xc)}reflect(t){return this.sub(xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var I=Ih,xc=new I,Au=new Hn,Ph=class Ph{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],b=s[1],T=s[4],v=s[7],w=s[2],x=s[5],R=s[8];return r[0]=a*M+o*b+l*w,r[3]=a*m+o*T+l*x,r[6]=a*p+o*v+l*R,r[1]=c*M+h*b+u*w,r[4]=c*m+h*T+u*x,r[7]=c*p+h*v+u*R,r[2]=d*M+f*b+g*w,r[5]=d*m+f*T+g*x,r[8]=d*p+f*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(t,e)),this}rotate(t){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-t)),this}translate(t,e){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;var ae=Ph,yc=new ae,Eu=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Np(){let i={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ea]:{primaries:t,whitePoint:n,transfer:na,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Eu,fromXYZ:Tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var fe=Np();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,No=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vs===void 0&&(Vs=ia("canvas")),Vs.width=t.width,Vs.height=t.height;let s=Vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ia("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Up=0,lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vc(s[a].image)):r.push(vc(s[a]))}else r=vc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var Fp=0,Mc=new I,Rn=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,s=wi,r=an,a=Ri,o=ti,l=Un,c=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ds(),this.name="",this.source=new lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=fh;Rn.DEFAULT_ANISOTROPY=1;var kh=class kh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(f+1)/2,w=(p+1)/2,x=(h+d)/4,R=(u+M)/4,y=(g+m)/4;return T>v&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=x/n,r=R/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=x/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=y/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-M)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kh.prototype.isVector4=!0;var ze=kh,Uo=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sa=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fo=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var al=class al{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,M,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new al().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),a=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d-M*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,M=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-M*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Bp)}lookAt(t,e,n){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Ji.crossVectors(n,zn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Ji.crossVectors(n,zn)),Ji.normalize(),Ja.crossVectors(zn,Ji),s[0]=Ji.x,s[4]=Ja.x,s[8]=zn.x,s[1]=Ji.y,s[5]=Ja.y,s[9]=zn.y,s[2]=Ji.z,s[6]=Ja.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],b=n[3],T=n[7],v=n[11],w=n[15],x=s[0],R=s[4],y=s[8],A=s[12],P=s[1],D=s[5],U=s[9],G=s[13],k=s[2],B=s[6],Z=s[10],J=s[14],st=s[3],F=s[7],Y=s[11],$=s[15];return r[0]=a*x+o*P+l*k+c*st,r[4]=a*R+o*D+l*B+c*F,r[8]=a*y+o*U+l*Z+c*Y,r[12]=a*A+o*G+l*J+c*$,r[1]=h*x+u*P+d*k+f*st,r[5]=h*R+u*D+d*B+f*F,r[9]=h*y+u*U+d*Z+f*Y,r[13]=h*A+u*G+d*J+f*$,r[2]=g*x+M*P+m*k+p*st,r[6]=g*R+M*D+m*B+p*F,r[10]=g*y+M*U+m*Z+p*Y,r[14]=g*A+M*G+m*J+p*$,r[3]=b*x+T*P+v*k+w*st,r[7]=b*R+T*D+v*B+w*F,r[11]=b*y+T*U+v*Z+w*Y,r[15]=b*A+T*G+v*J+w*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],b=l*f-c*d,T=o*f-c*u,v=o*d-l*u,w=a*f-c*h,x=a*d-l*h,R=a*u-o*h;return e*(M*b-m*T+p*v)-n*(g*b-m*w+p*x)+s*(g*T-M*w+p*R)-r*(g*v-M*x+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],b=e*o-n*a,T=e*l-s*a,v=e*c-r*a,w=n*l-s*o,x=n*c-r*o,R=s*c-r*l,y=h*M-u*g,A=h*m-d*g,P=h*p-f*g,D=u*m-d*M,U=u*p-f*M,G=d*p-f*m,k=b*G-T*U+v*D+w*P-x*A+R*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/k;return t[0]=(o*G-l*U+c*D)*B,t[1]=(s*U-n*G-r*D)*B,t[2]=(M*R-m*x+p*w)*B,t[3]=(d*x-u*R-f*w)*B,t[4]=(l*P-a*G-c*A)*B,t[5]=(e*G-s*P+r*A)*B,t[6]=(m*v-g*R-p*T)*B,t[7]=(h*R-d*v+f*T)*B,t[8]=(a*U-o*P+c*y)*B,t[9]=(n*P-e*U-r*y)*B,t[10]=(g*x-M*v+p*b)*B,t[11]=(u*v-h*x-f*b)*B,t[12]=(o*A-a*D-l*y)*B,t[13]=(e*D-n*A+s*y)*B,t[14]=(M*T-g*w-m*b)*B,t[15]=(h*w-u*T+d*b)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,M=a*h,m=a*u,p=o*u,b=l*c,T=l*h,v=l*u,w=n.x,x=n.y,R=n.z;return s[0]=(1-(M+p))*w,s[1]=(f+v)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(f-v)*x,s[5]=(1-(d+p))*x,s[6]=(m+b)*x,s[7]=0,s[8]=(g+T)*R,s[9]=(m-b)*R,s[10]=(1-(d+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gs.set(s[0],s[1],s[2]).length(),o=Gs.set(s[4],s[5],s[6]).length(),l=Gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,h=1/o,u=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=hi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===hi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===rr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===hi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===rr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};al.prototype.isMatrix4=!0;var ve=al,Gs=new I,oi=new ve,Op=new I(0,0,0),Bp=new I(1,1,1),Ji=new I,Ja=new I,zn=new I,Cu=new ve,Ru=new Hn,Ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,Iu=new I,Hs=new Hn,Di=new ve,$a=new I,Hr=new I,Vp=new I,Gp=new Hn,Pu=new I(1,0,0),ku=new I(0,1,0),Lu=new I(0,0,1),Du={type:"added"},Hp={type:"removed"},Ws={type:"childadded",child:null},Sc={type:"childremoved",child:null},Ye=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Ti,n=new Hn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new ae}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Iu.copy(t).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$a.copy(t):$a.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Hr,$a,this.up):Di.lookAt($a,Hr,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Di),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Du),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hp),Sc.child=t,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Du),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,Vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new I(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wp={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},ja={h:0,s:0,l:0};function bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Sh(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bc(a,r,t+1/3),this.g=bc(a,r,t),this.b=bc(a,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=Gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return fe.workingToColorSpace(Sn.copy(this),t),Math.round(ce(Sn.r*255,0,255))*65536+Math.round(ce(Sn.g*255,0,255))*256+Math.round(ce(Sn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=rn){fe.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,s=Sn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(ja);let n=$r($i.h,ja.h,e),s=$r($i.s,ja.s,e),r=$r($i.l,ja.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new ee;ee.NAMES=Gd;var ws=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new I,Ni=new I,wc=new I,Ui=new I,Xs=new I,Ys=new I,Nu=new I,Ac=new I,Ec=new I,Tc=new I,Cc=new ze,Rc=new ze,Ic=new ze,Bi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){li.subVectors(s,e),Ni.subVectors(n,e),wc.subVectors(t,e);let a=li.dot(li),o=li.dot(Ni),l=li.dot(wc),c=Ni.dot(Ni),h=Ni.dot(wc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Cc.setScalar(0),Rc.setScalar(0),Ic.setScalar(0),Cc.fromBufferAttribute(t,e),Rc.fromBufferAttribute(t,n),Ic.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Cc,r.x),a.addScaledVector(Rc,r.y),a.addScaledVector(Ic,r.z),a}static isFrontFacing(t,e,n,s){return li.subVectors(n,e),Ni.subVectors(t,e),li.cross(Ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Xs.subVectors(s,n),Ys.subVectors(r,n),Ac.subVectors(t,n);let l=Xs.dot(Ac),c=Ys.dot(Ac);if(l<=0&&c<=0)return e.copy(n);Ec.subVectors(t,s);let h=Xs.dot(Ec),u=Ys.dot(Ec);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xs,a);Tc.subVectors(t,r);let f=Xs.dot(Tc),g=Ys.dot(Tc);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ys,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Nu,o);let p=1/(m+M+d);return a=M*p,o=d*p,e.copy(n).addScaledVector(Xs,a).addScaledVector(Ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(t.matrixWorld),this.union(Qa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wr),to.subVectors(this.max,Wr),qs.subVectors(t.a,Wr),Ks.subVectors(t.b,Wr),Zs.subVectors(t.c,Wr),ji.subVectors(Ks,qs),Qi.subVectors(Zs,Ks),xs.subVectors(qs,Zs);let e=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-xs.z,xs.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,xs.z,0,-xs.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-xs.y,xs.x,0];return!Pc(e,qs,Ks,Zs,to)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,qs,Ks,Zs,to))?!1:(eo.crossVectors(ji,Qi),e=[eo.x,eo.y,eo.z],Pc(e,qs,Ks,Zs,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new I,new I,new I,new I,new I,new I,new I,new I],ci=new I,Qa=new bn,qs=new I,Ks=new I,Zs=new I,ji=new I,Qi=new I,xs=new I,Wr=new I,to=new I,eo=new I,ys=new I;function Pc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ys.fromArray(i,r);let o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=t.dot(ys),c=e.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qe=new I,no=new ft,Xp=0,Xe=class extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fd,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),s=Cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),s=Cn(s,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ra=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var aa=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yp=new bn,Xr=new I,kc=new I,Vi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);let e=Xr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(kc)),this.expandByPoint(Xr.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qp=0,$n=new ve,Lc=new Ye,Js=new I,Vn=new bn,Yr=new bn,un=new I,qe=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_p(t)?aa:ra)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Vn.min,Yr.min),Vn.expandByPoint(un),un.addVectors(Vn.max,Yr.max),Vn.expandByPoint(un)):(Vn.expandByPoint(Yr.min),Vn.expandByPoint(Yr.max))}Vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(t,c),un.add(Js)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new I,l[y]=new I;let c=new I,h=new I,u=new I,d=new ft,f=new ft,g=new ft,M=new I,m=new I;function p(y,A,P){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[y].add(M),o[A].add(M),o[P].add(M),l[y].add(m),l[A].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,A=b.length;y<A;++y){let P=b[y],D=P.start,U=P.count;for(let G=D,k=D+U;G<k;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let T=new I,v=new I,w=new I,x=new I;function R(y){w.fromBufferAttribute(s,y),x.copy(w);let A=o[y];T.copy(A),T.sub(w.multiplyScalar(w.dot(A))).normalize(),v.crossVectors(x,A);let D=v.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,D)}for(let y=0,A=b.length;y<A;++y){let P=b[y],D=P.start,U=P.count;for(let G=D,k=D+U;G<k;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Xe(d,h,u)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Dc=new I,Kp=new I,Zp=new ae,Gn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Dc.subVectors(n,e).cross(Kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zp.getNormalMatrix(t),s=this.coplanarPoint(Dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Jp=0,di=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Er,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=ah,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Oi=new I,Nc=new I,io=new I,so=new I,es=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Nc.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),so.copy(this.origin).sub(Nc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(io),o=so.dot(this.direction),l=-so.dot(io),c=so.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nc).addScaledVector(io,d),f}intersectSphere(t,e){if(t.radius<0)return null;Oi.subVectors(t.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,T=n.z-a.z,v=Math.abs(l),w=Math.abs(c),x=Math.abs(h),R,y,A,P,D,U,G,k,B,Z,J,st;if(v>=w&&v>=x?(A=l,U=u,B=g,st=p,l>=0?(R=c,y=h,P=d,D=f,G=M,k=m,Z=b,J=T):(R=h,y=c,P=f,D=d,G=m,k=M,Z=T,J=b)):w>=x?(A=c,U=d,B=M,st=b,c>=0?(R=h,y=l,P=f,D=u,G=m,k=g,Z=T,J=p):(R=l,y=h,P=u,D=f,G=g,k=m,Z=p,J=T)):(A=h,U=f,B=m,st=T,h>=0?(R=l,y=c,P=u,D=d,G=g,k=M,Z=p,J=b):(R=c,y=l,P=d,D=u,G=M,k=g,Z=b,J=p)),A===0)return null;let F=R/A,Y=y/A,$=1/A,Ct=P-F*U,ct=D-Y*U,zt=G-F*B,te=k-Y*B,kt=Z-F*st,j=J-Y*st,it=kt*te-j*zt,Mt=Ct*j-ct*kt,Lt=zt*ct-te*Ct;if(s){if(it<0||Mt<0||Lt<0)return null}else if((it<0||Mt<0||Lt<0)&&(it>0||Mt>0||Lt>0))return null;let xt=it+Mt+Lt;if(xt===0)return null;let yt=$*(it*U+Mt*B+Lt*st);return(xt>0?yt<0:yt>0)?null:this.at(yt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uu=new ve,vs=new es,ro=new Vi,Fu=new I,ao=new I,oo=new I,lo=new I,Uc=new I,co=new I,Ou=new I,ho=new I,_t=class extends Ye{constructor(t=new qe,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Uc.fromBufferAttribute(u,t),a?co.addScaledVector(Uc,h):co.addScaledVector(Uc.sub(e),h))}e.add(co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(ro.containsPoint(vs.origin)===!1&&(vs.intersectSphere(ro,Fu)===null||vs.origin.distanceToSquared(Fu)>(t.far-t.near)**2))&&(Uu.copy(r).invert(),vs.copy(t.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,w=T;v<w;v+=3){let x=o.getX(v),R=o.getX(v+1),y=o.getX(v+2);s=uo(this,p,t,n,c,h,u,x,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let b=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=uo(this,a,t,n,c,h,u,b,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,w=T;v<w;v+=3){let x=v,R=v+1,y=v+2;s=uo(this,p,t,n,c,h,u,x,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let b=m,T=m+1,v=m+2;s=uo(this,a,t,n,c,h,u,b,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function $p(i,t,e,n,s,r,a,o){let l;if(t.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ls,o),l===null)return null;ho.copy(o),ho.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ao),i.getVertexPosition(l,oo),i.getVertexPosition(c,lo);let h=$p(i,t,e,n,ao,oo,lo,Ou);if(h){let u=new I;Bi.getBarycoord(Ou,ao,oo,lo,u),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,l,c,u,new ft)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,l,c,u,new ft)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Bi.getNormal(ao,oo,lo,d.normal),h.face=d,h.barycoord=u}return h}var oa=class extends Rn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=dn,h=dn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new ve,Bu=new ve,fo=[],zu=new bn,jp=new ve,qr=new _t,Kr=new Vi,dr=class extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),zu.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(zu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Kr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),t.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Bu.multiplyMatrices(n,$s),qr.matrixWorld=Bu,qr.raycast(t,fo);for(let a=0,o=fo.length;a<o;a++){let l=fo[a];l.instanceId=r,l.object=this,e.push(l)}fo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oa(new Float32Array(s*this.count),s,this.count,ml,Qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new Vi,Qp=new ft(.5,.5),po=new I,fr=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],b=r[12],T=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,p-g,w-b).normalize(),s[1].setComponents(c+a,f+h,p+g,w+b).normalize(),s[2].setComponents(c+o,f+u,p+M,w+T).normalize(),s[3].setComponents(c-o,f-u,p-M,w-T).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,w-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,w-v).normalize(),e===hi)s[5].setComponents(c+l,f+d,p+m,w+v).normalize();else if(e===rr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);let e=Qp.distanceTo(t.center);return Ms.radius=.7071067811865476+e,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pr=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Oo=new I,Bo=new I,Vu=new ve,Zr=new es,mo=new Vi,Fc=new I,Gu=new I,zo=class extends Ye{constructor(t=new qe,e=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Oo.fromBufferAttribute(e,s-1),Bo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Oo.distanceTo(Bo);t.setAttribute("lineDistance",new ge(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;Vu.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(Vu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=h.getX(M),b=h.getX(M+1),T=go(this,t,Zr,l,p,b,M);T&&e.push(T)}if(this.isLineLoop){let M=h.getX(g-1),m=h.getX(f),p=go(this,t,Zr,l,M,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=go(this,t,Zr,l,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){let M=go(this,t,Zr,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function go(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Oo.fromBufferAttribute(o,s),Bo.fromBufferAttribute(o,r),e.distanceSqToSegment(Oo,Bo,Fc,Gu)>n)return;Fc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Fc);if(!(c<t.near||c>t.far))return{distance:c,point:Gu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Hu=new I,Wu=new I,la=class extends zo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Hu.fromBufferAttribute(e,s),Wu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hu.distanceTo(Wu);t.setAttribute("lineDistance",new ge(n,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ca=class extends Rn{constructor(t=[],e=cs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},As=class extends Rn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends Rn{constructor(t,e,n=pi,s,r,a,o=dn,l=dn,c,h=Ei,u=1){if(h!==Ei&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vo=class extends ns{constructor(t,e=pi,n=cs,s,r,a=dn,o=dn,l,c=Ei){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ha=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},tn=class i extends qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(M,m,p,b,T,v,w,x,R,y,A){let P=v/R,D=w/y,U=v/2,G=w/2,k=x/2,B=R+1,Z=y+1,J=0,st=0,F=new I;for(let Y=0;Y<Z;Y++){let $=Y*D-G;for(let Ct=0;Ct<B;Ct++){let ct=Ct*P-U;F[M]=ct*b,F[m]=$*T,F[p]=k,c.push(F.x,F.y,F.z),F[M]=0,F[m]=0,F[p]=x>0?1:-1,h.push(F.x,F.y,F.z),u.push(Ct/R),u.push(1-Y/y),J+=1}}for(let Y=0;Y<y;Y++)for(let $=0;$<R;$++){let Ct=d+$+B*Y,ct=d+$+B*(Y+1),zt=d+($+1)+B*(Y+1),te=d+($+1)+B*Y;l.push(Ct,ct,te),l.push(ct,zt,te),st+=6}o.addGroup(f,st,A),f+=st,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},mr=class i extends qe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,M=s+1,m=new I,p=new I;for(let b=0;b<=g;b++){let T=0,v=0,w=0,x=0;if(b<=n){let A=b/n,P=A*Math.PI/2;v=-h-t*Math.cos(P),w=t*Math.sin(P),x=-t*Math.cos(P),T=A*u}else if(b<=n+r){let A=(b-n)/r;v=-h+A*e,w=t,x=0,T=u+A*d}else{let A=(b-n-r)/n,P=A*Math.PI/2;v=h+t*Math.sin(P),w=t*Math.cos(P),x=t*Math.sin(P),T=u+d+A*u}let R=Math.max(0,Math.min(1,T/f)),y=0;b===0?y=.5/s:b===g&&(y=-.5/s);for(let A=0;A<=s;A++){let P=A/s,D=P*Math.PI*2,U=Math.sin(D),G=Math.cos(D);p.x=-w*G,p.y=v,p.z=w*U,o.push(p.x,p.y,p.z),m.set(-w*G,x,w*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+y,R)}if(b>0){let A=(b-1)*M;for(let P=0;P<s;P++){let D=A+P,U=A+P+1,G=b*M+P,k=b*M+P+1;a.push(D,U,G),a.push(U,k,G)}}}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var ua=class i extends qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,M=[],m=n/2,p=0;b(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function b(){let v=new I,w=new I,x=0,R=(e-t)/n;for(let y=0;y<=r;y++){let A=[],P=y/r,D=P*(e-t)+t;for(let U=0;U<=s;U++){let G=U/s,k=G*l+o,B=Math.sin(k),Z=Math.cos(k);w.x=D*B,w.y=-P*n+m,w.z=D*Z,u.push(w.x,w.y,w.z),v.set(B,R,Z).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-P),A.push(g++)}M.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){let P=M[A][y],D=M[A+1][y],U=M[A+1][y+1],G=M[A][y+1];(t>0||A!==0)&&(h.push(P,D,G),x+=3),(e>0||A!==r-1)&&(h.push(D,U,G),x+=3)}c.addGroup(p,x,0),p+=x}function T(v){let w=g,x=new ft,R=new I,y=0,A=v===!0?t:e,P=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;let D=g;for(let U=0;U<=s;U++){let k=U/s*l+o,B=Math.cos(k),Z=Math.sin(k);R.x=A*Z,R.y=m*P,R.z=A*B,u.push(R.x,R.y,R.z),d.push(0,P,0),x.x=B*.5+.5,x.y=Z*.5*P+.5,f.push(x.x,x.y),g++}for(let U=0;U<s;U++){let G=w+U,k=D+U;v===!0?h.push(k,k+1,G):h.push(k+1,k,G),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _o=new I,xo=new I,Oc=new I,yo=new Bi,da=class extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(nr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:M,b:m,c:p}=yo;if(M.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),yo.getNormal(Oc),u[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let T=(b+1)%3,v=u[b],w=u[T],x=yo[h[b]],R=yo[h[T]],y=`${v}_${w}`,A=`${w}_${v}`;A in d&&d[A]?(Oc.dot(d[A].normal)<=r&&(f.push(x.x,x.y,x.z),f.push(R.x,R.y,R.z)),d[A]=null):y in d||(d[y]={index0:c[b],index1:c[T],normal:Oc.clone()})}}for(let g in d)if(d[g]){let{index0:M,index1:m}=d[g];_o.fromBufferAttribute(o,M),xo.fromBufferAttribute(o,m),f.push(_o.x,_o.y,_o.z),f.push(xo.x,xo.y,xo.z)}this.setAttribute("position",new ge(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ft:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ve;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},gr=class extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Go=class extends gr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Xu=new I,Yu=new I,Bc=new wh,zc=new wh,Vc=new wh,_r=class extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Yu.subVectors(s[0],s[1]).add(s[0]),c=Yu);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Bc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,m),zc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,m),Vc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Bc.calc(l),zc.calc(l),Vc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function tm(i,t){let e=1-i;return e*e*t}function em(i,t){return 2*(1-i)*i*t}function nm(i,t){return i*i*t}function jr(i,t,e,n){return tm(i,t)+em(i,e)+nm(i,n)}function im(i,t){let e=1-i;return e*e*e*t}function sm(i,t){let e=1-i;return 3*e*e*i*t}function rm(i,t){return 3*(1-i)*i*i*t}function am(i,t){return i*i*i*t}function Qr(i,t,e,n,s){return im(i,t)+sm(i,e)+rm(i,n)+am(i,s)}var fa=class extends Wn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qr(t,s.x,r.x,a.x,o.x),Qr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Wn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qr(t,s.x,r.x,a.x,o.x),Qr(t,s.y,r.y,a.y,o.y),Qr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pa=class extends Wn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Es=class extends Wn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends Wn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(jr(t,s.x,r.x,a.x),jr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ts=class extends Wn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(jr(t,s.x,r.x,a.x),jr(t,s.y,r.y,a.y),jr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(qu(o,l.x,c.x,h.x,u.x),qu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},Wo=Object.freeze({__proto__:null,ArcCurve:Go,CatmullRomCurve3:_r,CubicBezierCurve:fa,CubicBezierCurve3:Ho,EllipseCurve:gr,LineCurve:pa,LineCurve3:Es,QuadraticBezierCurve:ma,QuadraticBezierCurve3:Ts,SplineCurve:ga}),xr=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wo[s.type]().fromJSON(s))}return this}},yr=class extends xr{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new pa(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ma(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new fa(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new gr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cs=class extends yr{constructor(t){super(t),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new yr().fromJSON(s))}return this}};function om(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=dm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return _a(r,a,e,o,l,c,0),a}function Hd(i,t,e,n,s){let r;if(s===bm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ku(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ku(a/n|0,i[a],i[a+1],r);return r&&vr(r,r.next)&&(ya(r),r=r.next),r}function Rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vr(e,e.next)||We(e.prev,e,e.next)===0)){if(ya(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _a(i,t,e,n,s,r,a){if(!i)return;!a&&r&&_m(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?cm(i,n,s,r):lm(i)){t.push(l.i,i.i,c.i),ya(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=hm(Rs(i),t),_a(i,t,e,n,s,r,2)):a===2&&um(i,t,e,n,s,r):_a(Rs(i),t,e,n,s,r,1);break}}}function lm(i){let t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Jr(s,o,r,l,a,c,g.x,g.y)&&We(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(We(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),M=Math.max(o,l,c),m=Math.max(h,u,d),p=Kc(f,g,t,e,n),b=Kc(M,m,t,e,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=p&&v&&v.z<=b;){if(T.x>=f&&T.x<=M&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Jr(o,h,l,u,c,d,T.x,T.y)&&We(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Jr(o,h,l,u,c,d,v.x,v.y)&&We(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=M&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Jr(o,h,l,u,c,d,T.x,T.y)&&We(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Jr(o,h,l,u,c,d,v.x,v.y)&&We(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!vr(n,s)&&Xd(n,e,e.next,s)&&xa(n,s)&&xa(s,n)&&(t.push(n.i,e.i,s.i),ya(e),ya(e.next),e=i=s),e=e.next}while(e!==i);return Rs(e)}function um(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vm(a,o)){let l=Yd(a,o);a=Rs(a,a.next),l=Rs(l,l.next),_a(a,t,e,n,s,r,0),_a(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function dm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Hd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ym(c))}s.sort(fm);for(let r=0;r<s.length;r++)e=pm(s[r],e);return e}function fm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function pm(i,t){let e=mm(i,t);if(!e)return t;let n=Yd(e,i);return Rs(n,n.next),Rs(e,e.next)}function mm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(vr(i,e))return e;do{if(vr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);xa(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&gm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function gm(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function _m(i,t,e,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xm(s)}function xm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Kc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Jr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Wd(i,t,e,n,s,r,a,o)}function vm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mm(i,t)&&(xa(i,t)&&xa(t,i)&&Sm(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||vr(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vr(i,t){return i.x===t.x&&i.y===t.y}function Xd(i,t,e,n){let s=Mo(We(i,t,e)),r=Mo(We(i,t,n)),a=Mo(We(e,n,i)),o=Mo(We(e,n,t));return!!(s!==r&&a!==o||s===0&&vo(i,e,t)||r===0&&vo(i,n,t)||a===0&&vo(e,i,n)||o===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mo(i){return i>0?1:i<0?-1:0}function Mm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xa(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function Sm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yd(i,t){let e=Zc(i.i,i.x,i.y),n=Zc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ku(i,t,e,n){let s=Zc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Jc=class{static triangulate(t,e,n=2){return om(t,e,n)}},Ss=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Zu(t),Ju(n,t);let a=t.length;e.forEach(Zu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ju(n,e[l]);let o=Jc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Zu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ju(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mr=class i extends qe{constructor(t=new Cs([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:wm,T,v=!1,w,x,R,y;if(p){T=p.getSpacedPoints(h),v=!0,d=!1;let et=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,et),x=new I,R=new I,y=new I}d||(m=0,f=0,g=0,M=0);let A=o.extractPoints(c),P=A.shape,D=A.holes;if(!Ss.isClockWise(P)){P=P.reverse();for(let et=0,lt=D.length;et<lt;et++){let ht=D[et];Ss.isClockWise(ht)&&(D[et]=ht.reverse())}}function G(et){let ht=10000000000000001e-36,ut=et[0];for(let pt=1;pt<=et.length;pt++){let Wt=pt%et.length,Vt=et[Wt],$t=Vt.x-ut.x,jt=Vt.y-ut.y,L=$t*$t+jt*jt,de=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(ut.x),Math.abs(ut.y)),ie=ht*de*de;if(L<=ie){et.splice(Wt,1),pt--;continue}ut=Vt}}G(P),D.forEach(G);let k=D.length,B=P;for(let et=0;et<k;et++){let lt=D[et];P=P.concat(lt)}function Z(et,lt,ht){return lt||ne("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(lt,ht)}let J=P.length;function st(et,lt,ht){let ut,pt,Wt,Vt=et.x-lt.x,$t=et.y-lt.y,jt=ht.x-et.x,L=ht.y-et.y,de=Vt*Vt+$t*$t,ie=Vt*L-$t*jt;if(Math.abs(ie)>Number.EPSILON){let C=Math.sqrt(de),_=Math.sqrt(jt*jt+L*L),O=lt.x-$t/C,H=lt.y+Vt/C,Q=ht.x-L/_,gt=ht.y+jt/_,vt=((Q-O)*L-(gt-H)*jt)/(Vt*L-$t*jt);ut=O+Vt*vt-et.x,pt=H+$t*vt-et.y;let tt=ut*ut+pt*pt;if(tt<=2)return new ft(ut,pt);Wt=Math.sqrt(tt/2)}else{let C=!1;Vt>Number.EPSILON?jt>Number.EPSILON&&(C=!0):Vt<-Number.EPSILON?jt<-Number.EPSILON&&(C=!0):Math.sign($t)===Math.sign(L)&&(C=!0),C?(ut=-$t,pt=Vt,Wt=Math.sqrt(de)):(ut=Vt,pt=$t,Wt=Math.sqrt(de/2))}return new ft(ut/Wt,pt/Wt)}let F=[];for(let et=0,lt=B.length,ht=lt-1,ut=et+1;et<lt;et++,ht++,ut++)ht===lt&&(ht=0),ut===lt&&(ut=0),F[et]=st(B[et],B[ht],B[ut]);let Y=[],$,Ct=F.concat();for(let et=0,lt=k;et<lt;et++){let ht=D[et];$=[];for(let ut=0,pt=ht.length,Wt=pt-1,Vt=ut+1;ut<pt;ut++,Wt++,Vt++)Wt===pt&&(Wt=0),Vt===pt&&(Vt=0),$[ut]=st(ht[ut],ht[Wt],ht[Vt]);Y.push($),Ct=Ct.concat($)}let ct;if(m===0)ct=Ss.triangulateShape(B,D);else{let et=[],lt=[];for(let ht=0;ht<m;ht++){let ut=ht/m,pt=f*Math.cos(ut*Math.PI/2),Wt=g*Math.sin(ut*Math.PI/2)+M;for(let Vt=0,$t=B.length;Vt<$t;Vt++){let jt=Z(B[Vt],F[Vt],Wt);Mt(jt.x,jt.y,-pt),ut===0&&et.push(jt)}for(let Vt=0,$t=k;Vt<$t;Vt++){let jt=D[Vt];$=Y[Vt];let L=[];for(let de=0,ie=jt.length;de<ie;de++){let C=Z(jt[de],$[de],Wt);Mt(C.x,C.y,-pt),ut===0&&L.push(C)}ut===0&&lt.push(L)}}ct=Ss.triangulateShape(et,lt)}let zt=ct.length,te=g+M;for(let et=0;et<J;et++){let lt=d?Z(P[et],Ct[et],te):P[et];v?(R.copy(w.normals[0]).multiplyScalar(lt.x),x.copy(w.binormals[0]).multiplyScalar(lt.y),y.copy(T[0]).add(R).add(x),Mt(y.x,y.y,y.z)):Mt(lt.x,lt.y,0)}for(let et=1;et<=h;et++)for(let lt=0;lt<J;lt++){let ht=d?Z(P[lt],Ct[lt],te):P[lt];v?(R.copy(w.normals[et]).multiplyScalar(ht.x),x.copy(w.binormals[et]).multiplyScalar(ht.y),y.copy(T[et]).add(R).add(x),Mt(y.x,y.y,y.z)):Mt(ht.x,ht.y,u/h*et)}for(let et=m-1;et>=0;et--){let lt=et/m,ht=f*Math.cos(lt*Math.PI/2),ut=g*Math.sin(lt*Math.PI/2)+M;for(let pt=0,Wt=B.length;pt<Wt;pt++){let Vt=Z(B[pt],F[pt],ut);Mt(Vt.x,Vt.y,u+ht)}for(let pt=0,Wt=D.length;pt<Wt;pt++){let Vt=D[pt];$=Y[pt];for(let $t=0,jt=Vt.length;$t<jt;$t++){let L=Z(Vt[$t],$[$t],ut);v?Mt(L.x,L.y+T[h-1].y,T[h-1].x+ht):Mt(L.x,L.y,u+ht)}}}kt(),j();function kt(){let et=s.length/3;if(d){let lt=0,ht=J*lt;for(let ut=0;ut<zt;ut++){let pt=ct[ut];Lt(pt[2]+ht,pt[1]+ht,pt[0]+ht)}lt=h+m*2,ht=J*lt;for(let ut=0;ut<zt;ut++){let pt=ct[ut];Lt(pt[0]+ht,pt[1]+ht,pt[2]+ht)}}else{for(let lt=0;lt<zt;lt++){let ht=ct[lt];Lt(ht[2],ht[1],ht[0])}for(let lt=0;lt<zt;lt++){let ht=ct[lt];Lt(ht[0]+J*h,ht[1]+J*h,ht[2]+J*h)}}n.addGroup(et,s.length/3-et,0)}function j(){let et=s.length/3,lt=0;it(B,lt),lt+=B.length;for(let ht=0,ut=D.length;ht<ut;ht++){let pt=D[ht];it(pt,lt),lt+=pt.length}n.addGroup(et,s.length/3-et,1)}function it(et,lt){let ht=et.length;for(;--ht>=0;){let ut=ht,pt=ht-1;pt<0&&(pt=et.length-1);for(let Wt=0,Vt=h+m*2;Wt<Vt;Wt++){let $t=J*Wt,jt=J*(Wt+1),L=lt+ut+$t,de=lt+pt+$t,ie=lt+pt+jt,C=lt+ut+jt;xt(L,de,ie,C)}}}function Mt(et,lt,ht){l.push(et),l.push(lt),l.push(ht)}function Lt(et,lt,ht){yt(et),yt(lt),yt(ht);let ut=s.length/3,pt=b.generateTopUV(n,s,ut-3,ut-2,ut-1);Jt(pt[0]),Jt(pt[1]),Jt(pt[2])}function xt(et,lt,ht,ut){yt(et),yt(lt),yt(ut),yt(lt),yt(ht),yt(ut);let pt=s.length/3,Wt=b.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);Jt(Wt[0]),Jt(Wt[1]),Jt(Wt[3]),Jt(Wt[1]),Jt(Wt[2]),Jt(Wt[3])}function yt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function Jt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Am(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wo[s.type]().fromJSON(s)),new i(n,t.options)}},wm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ft(r,a),new ft(o,l),new ft(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ft(a,1-l),new ft(c,1-u),new ft(d,1-g),new ft(M,1-p)]:[new ft(o,1-l),new ft(h,1-u),new ft(f,1-g),new ft(m,1-p)]}};function Am(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mn=class i extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let T=0;T<c;T++){let v=T*u-r;g.push(v,-b,0),M.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let T=b+c*p,v=b+c*(p+1),w=b+1+c*(p+1),x=b+1+c*p;f.push(T,v,x),f.push(v,w,x)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(M,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Is=class i extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new I,g=new ft;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let M=0;M<s;M++){let m=M*(n+1);for(let p=0;p<n;p++){let b=p+m,T=b,v=b+n+1,w=b+n+2,x=b+1;o.push(T,v,x),o.push(v,w,x)}}this.setIndex(o),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var jn=class i extends qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new I,f=new I,g=new I;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(b),d.y=t*Math.sin(b),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,b=(s+1)*(M-1)+m-1,T=(s+1)*(M-1)+m,v=(s+1)*M+m;l.push(p,b,v),l.push(b,T,v)}this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ps=class i extends qe{constructor(t=new Ts(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new ft,h=new I,u=[],d=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function M(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),b(),p()}function m(T){h=t.getPointAt(T/e,h);let v=a.normals[T],w=a.binormals[T];for(let x=0;x<=s;x++){let R=x/s*Math.PI*2,y=Math.sin(R),A=-Math.cos(R);l.x=A*v.x+y*w.x,l.y=A*v.y+y*w.y,l.z=A*v.z+y*w.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let v=1;v<=s;v++){let w=(s+1)*(T-1)+(v-1),x=(s+1)*T+(v-1),R=(s+1)*T+v,y=(s+1)*(T-1)+v;g.push(w,x,y),g.push(x,R,y)}}function b(){for(let T=0;T<=e;T++)for(let v=0;v<=s;v++)c.x=T/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var va=class extends di{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ee(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if($u(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($u(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function wn(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function $u(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Em(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var qd={clone:Ns,merge:wn},Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xo=class extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ce=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ma=class extends di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=ll,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Yo=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ko=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yc:r=t,o=2*e-n;break;case qc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:a=t,l=2*n-e;break;case qc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-d*m+2*d*M-d*g,b=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*M+.5*g,v=f*m-f*M;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+b*a[c+w]+T*a[l+w]+v*a[u+w];return r}},Zo=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Jo=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$o=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*d+g*2,b=u[p],T=u[p+1],v=t*d+g*2,w=h[v],x=h[v+1],R=Im(n,e,b,w,s);r[g]=Kd(R,M,T,x,m)}return r}};function Kd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Rm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Im(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Kd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Rm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Gc(t.settings)&&(n.settings={inTangents:js(t.settings.inTangents,Array),outTangents:js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $o(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case Do:e=this.InterpolantFactoryMethodLinear;break;case wo:e=this.InterpolantFactoryMethodSmooth;break;case Wc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return wo;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Gc(this.settings)&&(ju(this.settings.inTangents,t),ju(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ne("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&xp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let M=e[u+g];if(M!==e[d+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Gc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ju(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Do;var ss=class extends Yn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ta;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};jo.prototype.ValueTypeName="color";var Qo=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};Qo.prototype.ValueTypeName="number";var tl=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sa=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Yn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ta;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};el.prototype.ValueTypeName="vector";var nl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zd=new nl,il=class{constructor(t){this.manager=t!==void 0?t:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ba=class extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Hc=new ve,Qu=new I,td=new I,wa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(td),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Hc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===rr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},So=new I,bo=new Hn,bi=new I,Aa=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(So,bo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,bo,bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(So,bo,bi),bi.x===1&&bi.y===1&&bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,bo,bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new I,ed=new ft,nd=new ft,pn=class extends Aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,ed,nd),e.subVectors(nd,ed)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $c=class extends wa{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},Ea=class extends Sr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},br=class extends Aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jc=class extends wa{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Qs=-90,tr=1,sl=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Qs,tr,t,e);s.layers=this.layers,this.add(s);let r=new pn(Qs,tr,t,e);r.layers=this.layers,this.add(r);let a=new pn(Qs,tr,t,e);a.layers=this.layers,this.add(a);let o=new pn(Qs,tr,t,e);o.layers=this.layers,this.add(o);let l=new pn(Qs,tr,t,e);l.layers=this.layers,this.add(l);let c=new pn(Qs,tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},rl=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Eh="\\[\\]\\.:\\/",Pm=new RegExp("["+Eh+"]","g"),Th="[^"+Eh+"]",km="[^"+Eh.replace("\\.","")+"]",Lm=/((?:WC+[\/:])*)/.source.replace("WC",Th),Dm=/(WCOD+)?/.source.replace("WCOD",km),Nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Fm=new RegExp("^"+Lm+Dm+Nm+Um+"$"),Om=["material","materials","bones","map"],Qc=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pm,"")}static parseTrackName(t){let e=Fm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Qc;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kv=new Float32Array(1);var id=new ve,Ca=class{constructor(t,e,n=0,s=1/0){this.ray=new es(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return id.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(t,e=!0,n=[]){return th(t,this,n,e),n.sort(sd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)th(t[s],this,n,e);return n.sort(sd),n}};function sd(i,t){return i.distance-t.distance}function th(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)th(r[a],t,e,!0)}}var wr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lh=class Lh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Lh.prototype.isMatrix2=!0;var eh=Lh;var Ra=class extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ch(i,t,e,n){let s=Bm(n);switch(e){case xh:return i*t;case ml:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case us:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case ti:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case Na:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:case Sl:return Math.max(i,16)*Math.max(t,8)/4;case yl:case Ml:return Math.max(i,8)*Math.max(t,8)/2;case bl:case wl:case El:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:case Ba:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hl:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bm(i){switch(i){case Un:case ph:return{byteLength:1,components:1};case Tr:case mh:case mi:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case pi:case dl:case Qn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let M=u[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
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
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ng=`#ifdef USE_BATCHING
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
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,lg=`#ifdef USE_BUMPMAP
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_g=`#define PI 3.141592653589793
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
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yg=`vec3 transformedNormal = objectNormal;
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ng=`#ifdef USE_GRADIENTMAP
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
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xg=`PhysicalMaterial material;
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
#endif`,Yg=`uniform sampler2D dfgLUT;
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
}`,qg=`
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
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
}`,e_=`#if DEPTH_PACKING == 3200
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
}`,n_=`#define DISTANCE
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
}`,i_=`#define DISTANCE
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 diffuse;
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define LAMBERT
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
}`,d_=`#define MATCAP
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
}`,f_=`#define MATCAP
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
}`,p_=`#define NORMAL
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
}`,m_=`#define NORMAL
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
}`,g_=`#define PHONG
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
}`,__=`#define PHONG
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
}`,x_=`#define STANDARD
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
}`,y_=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,M_=`#define TOON
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
}`,S_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,A_=`uniform vec3 color;
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
}`,E_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Km,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:$m,alphatest_fragment:jm,alphatest_pars_fragment:Qm,aomap_fragment:tg,aomap_pars_fragment:eg,batching_pars_vertex:ng,batching_vertex:ig,begin_vertex:sg,beginnormal_vertex:rg,bsdfs:ag,iridescence_fragment:og,bumpmap_pars_fragment:lg,clipping_planes_fragment:cg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:dg,color_fragment:fg,color_pars_fragment:pg,color_pars_vertex:mg,color_vertex:gg,common:_g,cube_uv_reflection_fragment:xg,defaultnormal_vertex:yg,displacementmap_pars_vertex:vg,displacementmap_vertex:Mg,emissivemap_fragment:Sg,emissivemap_pars_fragment:bg,colorspace_fragment:wg,colorspace_pars_fragment:Ag,envmap_fragment:Eg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:Cg,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:zg,envmap_vertex:Ig,fog_vertex:Pg,fog_pars_vertex:kg,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ng,lightmap_pars_fragment:Ug,lights_lambert_fragment:Fg,lights_lambert_pars_fragment:Og,lights_pars_begin:Bg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Gg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Wg,lights_physical_fragment:Xg,lights_physical_pars_fragment:Yg,lights_fragment_begin:qg,lights_fragment_maps:Kg,lights_fragment_end:Zg,lightprobes_pars_fragment:Jg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:t0,map_fragment:e0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:h0,morphtarget_vertex:u0,normal_fragment_begin:d0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:b0,premultiplied_alpha_fragment:w0,project_vertex:A0,dithering_fragment:E0,dithering_pars_fragment:T0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:P0,shadowmap_vertex:k0,shadowmask_pars_fragment:L0,skinbase_vertex:D0,skinning_pars_vertex:N0,skinning_vertex:U0,skinnormal_vertex:F0,specularmap_fragment:O0,specularmap_pars_fragment:B0,tonemapping_fragment:z0,tonemapping_pars_fragment:V0,transmission_fragment:G0,transmission_pars_fragment:H0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:Y0,worldpos_vertex:q0,background_vert:K0,background_frag:Z0,backgroundCube_vert:J0,backgroundCube_frag:$0,cube_vert:j0,cube_frag:Q0,depth_vert:t_,depth_frag:e_,distance_vert:n_,distance_frag:i_,equirect_vert:s_,equirect_frag:r_,linedashed_vert:a_,linedashed_frag:o_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:h_,meshlambert_frag:u_,meshmatcap_vert:d_,meshmatcap_frag:f_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:__,meshphysical_vert:x_,meshphysical_frag:y_,meshtoon_vert:v_,meshtoon_frag:M_,points_vert:S_,points_frag:b_,shadow_vert:w_,shadow_frag:A_,sprite_vert:E_,sprite_frag:T_},Rt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Pi={basic:{uniforms:wn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:wn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:wn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:wn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:wn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ee(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:wn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:wn([Rt.points,Rt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:wn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:wn([Rt.common,Rt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:wn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:wn([Rt.sprite,Rt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:wn([Rt.common,Rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:wn([Rt.lights,Rt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Pi.physical={uniforms:wn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var $l={r:0,b:0,g:0},C_=new ve,yf=new ae;yf.set(-1,0,0,0,1,0,0,0,1);function R_(i,t,e,n,s,r){let a=new ee(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let v=b.backgroundBlurriness>0;T=t.get(T,v)}return T}function g(b){let T=!1,v=f(b);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===La)?(c===void 0&&(c=new _t(new tn(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ns(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,x,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=fe.getTransfer(v.colorSpace)!==Se,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _t(new mn(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ns(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=fe.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,T){b.getRGB($l,Ah(i)),e.buffers.color.setClear($l.r,$l.g,$l.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:M,dispose:p}}function I_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,U,G,k,B){let Z=!1,J=u(D,k,G,U);r!==J&&(r=J,c(r.object)),Z=f(D,k,G,B),Z&&g(D,k,G,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(D,U,G,k),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,U,G,k){let B=k.wireframe===!0,Z=n[U.id];Z===void 0&&(Z={},n[U.id]=Z);let J=D.isInstancedMesh===!0?D.id:0,st=Z[J];st===void 0&&(st={},Z[J]=st);let F=st[G.id];F===void 0&&(F={},st[G.id]=F);let Y=F[B];return Y===void 0&&(Y=d(l()),F[B]=Y),Y}function d(D){let U=[],G=[],k=[];for(let B=0;B<e;B++)U[B]=0,G[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:k,object:D,attributes:{},index:null}}function f(D,U,G,k){let B=r.attributes,Z=U.attributes,J=0,st=G.getAttributes();for(let F in st)if(st[F].location>=0){let $=B[F],Ct=Z[F];if(Ct===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&(Ct=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&(Ct=D.instanceColor)),$===void 0||$.attribute!==Ct||Ct&&$.data!==Ct.data)return!0;J++}return r.attributesNum!==J||r.index!==k}function g(D,U,G,k){let B={},Z=U.attributes,J=0,st=G.getAttributes();for(let F in st)if(st[F].location>=0){let $=Z[F];$===void 0&&(F==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),F==="instanceColor"&&D.instanceColor&&($=D.instanceColor));let Ct={};Ct.attribute=$,$&&$.data&&(Ct.data=$.data),B[F]=Ct,J++}r.attributes=B,r.attributesNum=J,r.index=k}function M(){let D=r.newAttributes;for(let U=0,G=D.length;U<G;U++)D[U]=0}function m(D){p(D,0)}function p(D,U){let G=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;G[D]=1,k[D]===0&&(i.enableVertexAttribArray(D),k[D]=1),B[D]!==U&&(i.vertexAttribDivisor(D,U),B[D]=U)}function b(){let D=r.newAttributes,U=r.enabledAttributes;for(let G=0,k=U.length;G<k;G++)U[G]!==D[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function T(D,U,G,k,B,Z,J){J===!0?i.vertexAttribIPointer(D,U,G,B,Z):i.vertexAttribPointer(D,U,G,k,B,Z)}function v(D,U,G,k){M();let B=k.attributes,Z=G.getAttributes(),J=U.defaultAttributeValues;for(let st in Z){let F=Z[st];if(F.location>=0){let Y=B[st];if(Y===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let $=Y.normalized,Ct=Y.itemSize,ct=t.get(Y);if(ct===void 0)continue;let zt=ct.buffer,te=ct.type,kt=ct.bytesPerElement,j=te===i.INT||te===i.UNSIGNED_INT||Y.gpuType===dl;if(Y.isInterleavedBufferAttribute){let it=Y.data,Mt=it.stride,Lt=Y.offset;if(it.isInstancedInterleavedBuffer){for(let xt=0;xt<F.locationSize;xt++)p(F.location+xt,it.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let xt=0;xt<F.locationSize;xt++)m(F.location+xt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let xt=0;xt<F.locationSize;xt++)T(F.location+xt,Ct/F.locationSize,te,$,Mt*kt,(Lt+Ct/F.locationSize*xt)*kt,j)}else{if(Y.isInstancedBufferAttribute){for(let it=0;it<F.locationSize;it++)p(F.location+it,Y.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let it=0;it<F.locationSize;it++)m(F.location+it);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let it=0;it<F.locationSize;it++)T(F.location+it,Ct/F.locationSize,te,$,Ct*kt,Ct/F.locationSize*it*kt,j)}}else if(J!==void 0){let $=J[st];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(F.location,$);break;case 3:i.vertexAttrib3fv(F.location,$);break;case 4:i.vertexAttrib4fv(F.location,$);break;default:i.vertexAttrib1fv(F.location,$)}}}}b()}function w(){A();for(let D in n){let U=n[D];for(let G in U){let k=U[G];for(let B in k){let Z=k[B];for(let J in Z)h(Z[J].object),delete Z[J];delete k[B]}}delete n[D]}}function x(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let G in U){let k=U[G];for(let B in k){let Z=k[B];for(let J in Z)h(Z[J].object),delete Z[J];delete k[B]}}delete n[D.id]}function R(D){for(let U in n){let G=n[U];for(let k in G){let B=G[k];if(B[D.id]===void 0)continue;let Z=B[D.id];for(let J in Z)h(Z[J].object),delete Z[J];delete B[D.id]}}}function y(D){for(let U in n){let G=n[U],k=D.isInstancedMesh===!0?D.id:0,B=G[k];if(B!==void 0){for(let Z in B){let J=B[Z];for(let st in J)h(J[st].object),delete J[st];delete B[Z]}delete G[k],Object.keys(G).length===0&&delete n[U]}}}function A(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:x,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function P_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function k_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Un&&R!==Qn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:v,maxSamples:w,samples:x}}function L_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Gn,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,T=b*4,v=p.clippingState||null;l.value=v,v=h(g,d,T,f);for(let w=0;w!==T;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==M;++T,v+=4)a.copy(u[T]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Ir=4,D_=6,N_=20,U_=256,Ga=new br,Jd=new ee,Dh=null,Nh=0,Uh=0,Fh=!1,F_=new I,Us=new I,kr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=F_}=r;Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dh,Nh,Uh),this._renderer.xr.enabled=Fh,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:mi,format:ti,colorSpace:ea,depthBuffer:!1},s=$d(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=O_(r)),this._blurMaterial=z_(r,t,e),this._ggxMaterial=B_(r,t,e)}return s}_compileMaterial(t){let e=new _t(new qe,t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,n,s,r){let l=new pn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jd),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new tn,new Ze({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(Jd),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;Rr(s,v*w,T>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(M,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cs||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ga)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Ir?n-g+Ir:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Rr(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,Ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Rr(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,Ga)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ir?s-this._lodMax+Ir:0),d=4*(this._cubeSize-h);Rr(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,Ga)}};function O_(i){let t=[],e=[],n=i,s=i-Ir+1+D_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),M=new Float32Array(f*d*u);for(let p=0;p<u;p++){let b=p%3*2/3-1,T=p>2?0:-1,v=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];g.set(v,f*d*p);for(let w=0;w<d;w++){let x=h[w*2]*2-1,R=h[w*2+1]*2-1;p===0?Us.set(1,R,x):p===1?Us.set(-x,1,-R):p===2?Us.set(-x,R,1):p===3?Us.set(-1,R,-x):p===4?Us.set(-x,-1,R):Us.set(x,R,-1),Us.toArray(M,(p*d+w)*f)}}let m=new qe;m.setAttribute("position",new Xe(g,f)),m.setAttribute("outputDirection",new Xe(M,f)),e.push(new _t(m,null)),n>Ir&&n--}return{lodMeshes:e,sizeLods:t}}function $d(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function B_(i,t,e){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function z_(i,t,e){return new Xn({name:"SphericalGaussianBlur",defines:{SAMPLES:N_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function jd(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Qd(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ql=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ca(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ci});r.uniforms.tEquirect.value=e;let a=new _t(s,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=an),new sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function V_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===cl||f===hl)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new Ql(g.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===cl||f===hl,M=f===cs||f===Ls;if(g||M){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new kr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return g&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new kr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===cl?d.mapping=cs:f===hl&&(d.mapping=Ls),d}function l(d){let f=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function G_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function H_(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,M=0;if(g===void 0)return;if(f!==null){let b=f.array;M=f.version;for(let T=0,v=b.length;T<v;T+=3){let w=b[T+0],x=b[T+1],R=b[T+2];d.push(w,x,x,R,R,w)}}else{let b=g.array;M=g.version;for(let T=0,v=b.length/3-1;T<v;T+=3){let w=T+0,x=T+1,R=T+2;d.push(w,x,x,R,R,w)}}let m=new(g.count>=65535?aa:ra)(d,1);m.version=M;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function W_(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let M=0;for(let m=0;m<f;m++)M+=d[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function X_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Y_(i,t,e){let n=new WeakMap,s=new ze;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let A=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),M===!0&&(T=3);let v=o.attributes.position.count*T,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let x=new Float32Array(v*w*4*u),R=new sa(x,v,w,u);R.type=Qn,R.needsUpdate=!0;let y=T*4;for(let P=0;P<u;P++){let D=m[P],U=p[P],G=b[P],k=v*w*4*P;for(let B=0;B<D.count;B++){let Z=B*y;f===!0&&(s.fromBufferAttribute(D,B),x[k+Z+0]=s.x,x[k+Z+1]=s.y,x[k+Z+2]=s.z,x[k+Z+3]=0),g===!0&&(s.fromBufferAttribute(U,B),x[k+Z+4]=s.x,x[k+Z+5]=s.y,x[k+Z+6]=s.z,x[k+Z+7]=0),M===!0&&(s.fromBufferAttribute(G,B),x[k+Z+8]=s.x,x[k+Z+9]=s.y,x[k+Z+10]=s.z,x[k+Z+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ft(v,w)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function q_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var K_={[oh]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[hh]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[ka]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function Z_(i,t,e,n,s,r){let a=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new qe;c.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ge([0,2,0,0,2,0],2));let h=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _t(c,h),d=new br(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,b=[],T=!1;this.setSize=function(v,w){a.setSize(v,w),o!==null&&o.setSize(v,w),l!==null&&l.setSize(v,w);for(let x=0;x<b.length;x++){let R=b[x];R.setSize&&R.setSize(v,w)}},this.setEffects=function(v){b=v,T=b.length>0&&b[0].isRenderPass===!0;let w=a.width,x=a.height;b.length>0&&o===null&&(o=new Nn(w,x,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(w,x,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let y=b[R];y.setSize&&y.setSize(w,x)}},this.begin=function(v,w){if(M||v.toneMapping===fi&&b.length===0)return!1;if(p=w,w!==null){let x=w.width,R=w.height;(a.width!==x||a.height!==R)&&this.setSize(x,R)}return T===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=fi,!0},this.hasRenderPass=function(){return T},this.end=function(v,w){v.toneMapping=m,M=!0;let x=a,R=o;for(let y=0;y<b.length;y++){let A=b[y];A.enabled!==!1&&(A.render(v,R,x,w),A.needsSwap!==!1&&(x=R,R=R===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},fe.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let y=K_[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(p),v.render(u,d),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var vf=new Rn,zh=new ns(1,1),Mf=new sa,Sf=new Fo,bf=new ca,tf=[],ef=[],nf=new Float32Array(16),sf=new Float32Array(9),rf=new Float32Array(4);function Lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nc(i,t){let e=ef[t];e===void 0&&(e=new Int32Array(t),ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),ln(e,n)}}function ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;sf.set(n),i.uniformMatrix3fv(this.addr,!1,sf),ln(e,n)}}function nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),ln(e,n)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zh.compareFunction=e.isReversedDepthBuffer()?Jl:Zl,r=zh):r=vf,e.setTexture2D(t||r,s)}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sf,s)}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bf,s)}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mf,s)}function mx(i){switch(i){case 5126:return J_;case 35664:return $_;case 35665:return j_;case 35666:return Q_;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,t){i.uniform1fv(this.addr,t)}function _x(i,t){let e=Lr(t,this.size,2);i.uniform2fv(this.addr,e)}function xx(i,t){let e=Lr(t,this.size,3);i.uniform3fv(this.addr,e)}function yx(i,t){let e=Lr(t,this.size,4);i.uniform4fv(this.addr,e)}function vx(i,t){let e=Lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mx(i,t){let e=Lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sx(i,t){let e=Lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bx(i,t){i.uniform1iv(this.addr,t)}function wx(i,t){i.uniform2iv(this.addr,t)}function Ax(i,t){i.uniform3iv(this.addr,t)}function Ex(i,t){i.uniform4iv(this.addr,t)}function Tx(i,t){i.uniform1uiv(this.addr,t)}function Cx(i,t){i.uniform2uiv(this.addr,t)}function Rx(i,t){i.uniform3uiv(this.addr,t)}function Ix(i,t){i.uniform4uiv(this.addr,t)}function Px(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=zh:a=vf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function kx(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sf,r[a])}function Lx(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bf,r[a])}function Dx(i,t,e){let n=this.cache,s=t.length,r=nc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mf,r[a])}function Nx(i){switch(i){case 5126:return gx;case 35664:return _x;case 35665:return xx;case 35666:return yx;case 35674:return vx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Ax;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return Cx;case 36295:return Rx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}var Vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mx(e.type)}},Gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nx(e.type)}},Hh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function af(i,t){i.seq.push(t),i.map[t.id]=t}function Ux(i,t,e){let n=i.name,s=n.length;for(Oh.lastIndex=0;;){let r=Oh.exec(n),a=Oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){af(e,c===void 0?new Vh(o,i,t):new Gh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Hh(o),af(e,u)),e=u}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ux(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function of(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fx=37297,Ox=0;function Bx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var lf=new ae;function zx(i){fe._getMatrix(lf,fe.workingColorSpace,i);let t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case na:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Bx(i.getShaderSource(t),o)}else return r}function Vx(i,t){let e=zx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Gx={[oh]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[hh]:"ACESFilmic",[dh]:"AgX",[ka]:"Neutral",[uh]:"Custom"};function Hx(i,t){let e=Gx[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jl=new I;function Wx(){fe.getLuminanceCoefficients(jl);let i=jl.x.toFixed(4),t=jl.y.toFixed(4),e=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function Yx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wa(i){return i!==""}function hf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(i){return i.replace(Kx,Jx)}var Zx=new Map;function Jx(i,t){let e=he[t];if(e===void 0){let n=Zx.get(t);if(n!==void 0)e=he[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wh(e)}var $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace($x,jx)}function jx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Qx={[Ia]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function ty(i){return Qx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ey={[cs]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function ny(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ey[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var iy={[Ls]:"ENVMAP_MODE_REFRACTION"};function sy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":iy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ry={[ll]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Ed]:"ENVMAP_BLENDING_ADD"};function ay(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ry[i.combine]||"ENVMAP_BLENDING_NONE"}function oy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ly(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ty(e),c=ny(e),h=sy(e),u=ay(e),d=oy(e),f=Xx(e),g=Yx(r),M=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wa).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),p=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?he.tonemapping_pars_fragment:"",e.toneMapping!==fi?Hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Vx("linearToOutputTexel",e.outputColorSpace),Wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Wh(a),a=hf(a,e),a=uf(a,e),o=Wh(o),o=hf(o,e),o=uf(o,e),a=df(a),o=df(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=b+m+a,v=b+p+o,w=of(s,s.VERTEX_SHADER,T),x=of(s,s.FRAGMENT_SHADER,v);s.attachShader(M,w),s.attachShader(M,x),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(w)||"",k=s.getShaderInfoLog(x)||"",B=U.trim(),Z=G.trim(),J=k.trim(),st=!0,F=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,w,x);else{let Y=cf(s,w,"vertex"),$=cf(s,x,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Y+`
`+$)}else B!==""?Qt("WebGLProgram: Program Info Log:",B):(Z===""||J==="")&&(F=!1);F&&(D.diagnostics={runnable:st,programLog:B,vertexShader:{log:Z,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(w),s.deleteShader(x),y=new Pr(s,M),A=qx(s,M)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,Fx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ox++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=x,this}var cy=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yh(t),e.set(t,n)),n}},Yh=class{constructor(t){this.id=cy++,this.code=t,this.usedTimes=0}};function hy(i){return i===us||i===Ba||i===za}function uy(i,t,e,n,s,r){let a=new cr,o=new Xh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,A,P,D,U,G){let k=D.fog,B=U.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,st=t.get(y.envMap||Z,J),F=st&&st.mapping===La?st.image.height:null,Y=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Qt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ct=$!==void 0?$.length:0,ct=0;B.morphAttributes.position!==void 0&&(ct=1),B.morphAttributes.normal!==void 0&&(ct=2),B.morphAttributes.color!==void 0&&(ct=3);let zt,te,kt,j;if(Y){let we=Pi[Y];zt=we.vertexShader,te=we.fragmentShader}else{zt=y.vertexShader,te=y.fragmentShader;let we=o.getVertexShaderStage(y),X=o.getFragmentShaderStage(y);o.update(y,we,X),kt=we.id,j=X.id}let it=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,xt=U.isBatchedMesh===!0,yt=!!y.map,Jt=!!y.matcap,et=!!st,lt=!!y.aoMap,ht=!!y.lightMap,ut=!!y.bumpMap&&y.wireframe===!1,pt=!!y.normalMap,Wt=!!y.displacementMap,Vt=!!y.emissiveMap,$t=!!y.metalnessMap,jt=!!y.roughnessMap,L=y.anisotropy>0,de=y.clearcoat>0,ie=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,O=y.sheen>0,H=y.transmission>0,Q=L&&!!y.anisotropyMap,gt=de&&!!y.clearcoatMap,vt=de&&!!y.clearcoatNormalMap,tt=de&&!!y.clearcoatRoughnessMap,rt=_&&!!y.iridescenceMap,St=_&&!!y.iridescenceThicknessMap,Gt=O&&!!y.sheenColorMap,wt=O&&!!y.sheenRoughnessMap,bt=!!y.specularMap,Bt=!!y.specularColorMap,Zt=!!y.specularIntensityMap,z=H&&!!y.transmissionMap,E=H&&!!y.thicknessMap,nt=!!y.gradientMap,K=!!y.alphaMap,ot=y.alphaTest>0,mt=!!y.alphaHash,at=!!y.extensions,Pt=fi;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Ot={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:te,defines:y.defines,customVertexShaderID:kt,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:xt,batchingColor:xt&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:yt,matcap:Jt,envMap:et,envMapMode:et&&st.mapping,envMapCubeUVHeight:F,aoMap:lt,lightMap:ht,bumpMap:ut,normalMap:pt,displacementMap:Wt,emissiveMap:Vt,normalMapObjectSpace:pt&&y.normalMapType===Rd,normalMapTangentSpace:pt&&y.normalMapType===Va,packedNormalMap:pt&&y.normalMapType===Va&&hy(y.normalMap.format),metalnessMap:$t,roughnessMap:jt,anisotropy:L,anisotropyMap:Q,clearcoat:de,clearcoatMap:gt,clearcoatNormalMap:vt,clearcoatRoughnessMap:tt,dispersion:ie,retroreflection:C,iridescence:_,iridescenceMap:rt,iridescenceThicknessMap:St,sheen:O,sheenColorMap:Gt,sheenRoughnessMap:wt,specularMap:bt,specularColorMap:Bt,specularIntensityMap:Zt,transmission:H,transmissionMap:z,thicknessMap:E,gradientMap:nt,opaque:y.transparent===!1&&y.blending===Er&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:ot,alphaHash:mt,combine:y.combine,mapUv:yt&&g(y.map.channel),aoMapUv:lt&&g(y.aoMap.channel),lightMapUv:ht&&g(y.lightMap.channel),bumpMapUv:ut&&g(y.bumpMap.channel),normalMapUv:pt&&g(y.normalMap.channel),displacementMapUv:Wt&&g(y.displacementMap.channel),emissiveMapUv:Vt&&g(y.emissiveMap.channel),metalnessMapUv:$t&&g(y.metalnessMap.channel),roughnessMapUv:jt&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:gt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:vt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(y.sheenRoughnessMap.channel),specularMapUv:bt&&g(y.specularMap.channel),specularColorMapUv:Bt&&g(y.specularColorMap.channel),specularIntensityMapUv:Zt&&g(y.specularIntensityMap.channel),transmissionMapUv:z&&g(y.transmissionMap.channel),thicknessMapUv:E&&g(y.thicknessMap.channel),alphaMapUv:K&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||L),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(yt||K),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:ct,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)A.push(P),A.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(A,y),b(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function b(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let A=f[y.type],P;if(A){let D=Pi[A];P=qd.clone(D.uniforms)}else P=y.uniforms;return P}function v(y,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new ly(i,A,y,s),c.push(P),h.set(A,P)),P}function w(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function x(y){o.remove(y)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:T,acquireProgram:v,releaseProgram:w,releaseShaderCache:x,programs:c,dispose:R}}function dy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,M,m,p){let b=i[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:p},i[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=g,b.materialVariant=a(d),b.groupOrder=M,b.renderOrder=d.renderOrder,b.z=m,b.group=p),t++,b}function l(d,f,g,M,m,p,b){b.reversedDepth===!0&&(m=-m);let T=o(d,f,g,M,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(d,f,g,M,m,p){let b=o(d,f,g,M,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,f){e.length>1&&e.sort(d||fy),n.length>1&&n.sort(f||pf),s.length>1&&s.sort(f||pf)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function py(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new mf,i.set(n,[a])):s>=r.length?(a=new mf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function my(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new ee};break;case"SpotLight":e={position:new I,direction:new I,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function gy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _y=0;function xy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yy(i){let t=new my,e=gy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ve,a=new ve;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,b=0,T=0,v=0,w=0,x=0,R=0,y=0,A=0,P=0;c.sort(xy);for(let U=0,G=c.length;U<G;U++){let k=c[U],B=k.color,Z=k.intensity,J=k.distance,st=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===us?st=k.shadow.map.texture:st=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=B.r*Z,u+=B.g*Z,d+=B.b*Z;else if(k.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(k.sh.coefficients[F],Z);P++}else if(k.isSunLight){let F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let Y=k.shadow,$=e.get(k);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=st;let Ct=Y.getViewportCount();for(let ct=0;ct<Ct;ct++)n.sunShadowMatrix[M+ct]=Y.getMatrix(ct),n.sunShadowCascade[M+ct]=Y._cascadeData[ct];M+=Ct,g++}n.sun[f]=F,f++}else if(k.isDirectionalLight){let F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let Y=k.shadow,$=e.get(k);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=k.shadow.matrix,w++}n.directional[m]=F,m++}else if(k.isSpotLight){let F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(B).multiplyScalar(Z),F.distance=J,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,n.spot[b]=F;let Y=k.shadow;if(k.map&&(n.spotLightMap[y]=k.map,y++,Y.updateMatrices(k),k.castShadow&&A++),n.spotLightMatrix[b]=Y.matrix,k.castShadow){let $=e.get(k);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[b]=$,n.spotShadowMap[b]=st,R++}b++}else if(k.isRectAreaLight){let F=t.get(k);F.color.copy(B).multiplyScalar(Z),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),n.rectArea[T]=F,T++}else if(k.isPointLight){let F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){let Y=k.shadow,$=e.get(k);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=k.shadow.matrix,x++}n.point[p]=F,p++}else if(k.isHemisphereLight){let F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(Z),F.groundColor.copy(k.groundColor).multiplyScalar(Z),n.hemi[v]=F,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==b||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==x||D.numSpotShadows!==R||D.numSpotMaps!==y||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=b,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=x,D.numSpotShadows=R,D.numSpotMaps=y,D.numLightProbes=P,n.version=_y++)}function l(c,h){let u=0,d=0,f=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let v=c[b];if(v.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(v.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function gf(i){let t=new yy(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new gf(i),t.set(s,[o])):r>=a.length?(o=new gf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var My=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
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
}`,by=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],wy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],_f=new ve,Ha=new I,Bh=new I;function Ay(i,t,e){let n=new fr,s=new ft,r=new ft,a=new ze,o=new Yo,l=new qo,c={},h=e.maxTextureSize,u={[ls]:gn,[gn]:ls,[fn]:fn},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:My,fragmentShader:Sy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let p=this.type;this.render=function(x,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;this.type===ol&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ia);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ci),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;G&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(B=>B.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,B=x.length;k<B;k++){let Z=x[k],J=Z.shadow;if(J===void 0){Qt("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let st=J.getFrameExtents();s.multiply(st),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,J.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=F,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ar){if(Z.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Nn(s.x,s.y,{format:us,type:mi,minFilter:an,magFilter:an,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new ns(s.x,s.y,Qn),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=Ei,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=dn,J.map.depthTexture.magFilter=dn}else Z.isPointLight?(J.map=new Ql(s.x),J.map.depthTexture=new Vo(s.x,pi)):(J.map=new Nn(s.x,s.y),J.map.depthTexture=new ns(s.x,s.y,pi)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=Ei,this.type===Ia?(J.map.depthTexture.compareFunction=F?Jl:Zl,J.map.depthTexture.minFilter=an,J.map.depthTexture.magFilter=an):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=dn,J.map.depthTexture.magFilter=dn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let Y=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Z.isPointLight!==!0&&J.updateMatrices(Z,y);for(let $=0;$<Y;$++){let Ct=J.getCamera($);if(Z.isPointLight){let ct=J.camera,zt=J.matrix,te=Z.distance||ct.far;te!==ct.far&&(ct.far=te,ct.updateProjectionMatrix()),Ha.setFromMatrixPosition(Z.matrixWorld),ct.position.copy(Ha),Bh.copy(ct.position),Bh.add(by[$]),ct.up.copy(wy[$]),ct.lookAt(Bh),ct.updateMatrixWorld(),zt.makeTranslation(-Ha.x,-Ha.y,-Ha.z),_f.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),J._frustum.setFromProjectionMatrix(_f,ct.coordinateSystem,ct.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,$),i.clear();else{$===0&&(i.setRenderTarget(J.map),i.clear());let ct=J.getViewport($);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),U.viewport(a)}n=J.getFrustum($),v(R,y,Ct,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Ar&&b(J,y),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,D)};function b(x,R){let y=t.update(M);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new Nn(s.x,s.y,{format:us,type:mi}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(R,null,y,d,M,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(R,null,y,f,M,null)}function T(x,R,y,A){let P=null,D=y.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(D!==void 0)P=D;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=P.uuid,G=R.uuid,k=c[U];k===void 0&&(k={},c[U]=k);let B=k[G];B===void 0&&(B=P.clone(),k[G]=B,R.addEventListener("dispose",w)),P=B}if(P.visible=R.visible,P.wireframe=R.wireframe,A===Ar?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=y}return P}function v(x,R,y,A,P){if(x.visible===!1)return;if(x.layers.test(R.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===Ar)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,x.matrixWorld);let G=t.update(x),k=x.material;if(Array.isArray(k)){let B=G.groups;for(let Z=0,J=B.length;Z<J;Z++){let st=B[Z],F=k[st.materialIndex];if(F&&F.visible){let Y=T(x,F,A,P);x.onBeforeShadow(i,x,R,y,G,Y,st),i.renderBufferDirect(y,null,G,Y,x,st),x.onAfterShadow(i,x,R,y,G,Y,st)}}}else if(k.visible){let B=T(x,k,A,P);x.onBeforeShadow(i,x,R,y,G,B,null),i.renderBufferDirect(y,null,G,B,x,null),x.onAfterShadow(i,x,R,y,G,B,null)}}let U=x.children;for(let G=0,k=U.length;G<k;G++)v(U[G],R,y,A,P)}function w(x){x.target.removeEventListener("dispose",w);for(let y in c){let A=c[y],P=x.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Ey(i,t){function e(){let E=!1,nt=new ze,K=null,ot=new ze(0,0,0,0);return{setMask:function(mt){K!==mt&&!E&&(i.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){E=mt},setClear:function(mt,at,Pt,Ot,we){we===!0&&(mt*=Ot,at*=Ot,Pt*=Ot),nt.set(mt,at,Pt,Ot),ot.equals(nt)===!1&&(i.clearColor(mt,at,Pt,Ot),ot.copy(nt))},reset:function(){E=!1,K=null,ot.set(-1,0,0,0)}}}function n(){let E=!1,nt=!1,K=null,ot=null,mt=null;return{setReversed:function(at){if(nt!==at){let Pt=t.get("EXT_clip_control");at?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),nt=at;let Ot=mt;mt=null,this.setClear(Ot)}},getReversed:function(){return nt},setTest:function(at){at?it(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(at){K!==at&&!E&&(i.depthMask(at),K=at)},setFunc:function(at){if(nt&&(at=Vd[at]),ot!==at){switch(at){case Eo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=at}},setLocked:function(at){E=at},setClear:function(at){mt!==at&&(mt=at,nt&&(at=1-at),i.clearDepth(at))},reset:function(){E=!1,K=null,ot=null,mt=null,nt=!1}}}function s(){let E=!1,nt=null,K=null,ot=null,mt=null,at=null,Pt=null,Ot=null,we=null;return{setTest:function(X){E||(X?it(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(X){nt!==X&&!E&&(i.stencilMask(X),nt=X)},setFunc:function(X,dt,Et){(K!==X||ot!==dt||mt!==Et)&&(i.stencilFunc(X,dt,Et),K=X,ot=dt,mt=Et)},setOp:function(X,dt,Et){(at!==X||Pt!==dt||Ot!==Et)&&(i.stencilOp(X,dt,Et),at=X,Pt=dt,Ot=Et)},setLocked:function(X){E=X},setClear:function(X){we!==X&&(i.clearStencil(X),we=X)},reset:function(){E=!1,nt=null,K=null,ot=null,mt=null,at=null,Pt=null,Ot=null,we=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],M=null,m=!1,p=null,b=null,T=null,v=null,w=null,x=null,R=null,y=new ee(0,0,0),A=0,P=!1,D=null,U=null,G=null,k=null,B=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,st=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=st>=1):F.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=st>=2);let Y=null,$={},Ct=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),zt=new ze().fromArray(Ct),te=new ze().fromArray(ct);function kt(E,nt,K,ot){let mt=new Uint8Array(4),at=i.createTexture();i.bindTexture(E,at),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<K;Pt++)E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(nt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return at}let j={};j[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(sr),ut(!1),pt(nh),it(i.CULL_FACE),lt(Ci);function it(E){h[E]!==!0&&(i.enable(E),h[E]=!0)}function Mt(E){h[E]!==!1&&(i.disable(E),h[E]=!1)}function Lt(E,nt){return d[E]!==nt?(i.bindFramebuffer(E,nt),d[E]=nt,E===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=nt),E===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function xt(E,nt){let K=g,ot=!1;if(E){K=f.get(nt),K===void 0&&(K=[],f.set(nt,K));let mt=E.textures;if(K.length!==mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Pt=mt.length;at<Pt;at++)K[at]=i.COLOR_ATTACHMENT0+at;K.length=mt.length,ot=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ot=!0);ot&&i.drawBuffers(K)}function yt(E){return M!==E?(i.useProgram(E),M=E,!0):!1}let Jt={[ks]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};Jt[hd]=i.MIN,Jt[ud]=i.MAX;let et={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[ah]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[bd]:i.CONSTANT_ALPHA,[wd]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(E,nt,K,ot,mt,at,Pt,Ot,we,X){if(E===Ci){m===!0&&(Mt(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),E!==od){if(E!==p||X!==P){if((b!==ks||w!==ks)&&(i.blendEquation(i.FUNC_ADD),b=ks,w=ks),X)switch(E){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",E);break}else switch(E){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",E);break}T=null,v=null,x=null,R=null,y.set(0,0,0),A=0,p=E,P=X}return}mt=mt||nt,at=at||K,Pt=Pt||ot,(nt!==b||mt!==w)&&(i.blendEquationSeparate(Jt[nt],Jt[mt]),b=nt,w=mt),(K!==T||ot!==v||at!==x||Pt!==R)&&(i.blendFuncSeparate(et[K],et[ot],et[at],et[Pt]),T=K,v=ot,x=at,R=Pt),(Ot.equals(y)===!1||we!==A)&&(i.blendColor(Ot.r,Ot.g,Ot.b,we),y.copy(Ot),A=we),p=E,P=!1}function ht(E,nt){E.side===fn?Mt(i.CULL_FACE):it(i.CULL_FACE);let K=E.side===gn;nt&&(K=!K),ut(K),E.blending===Er&&E.transparent===!1?lt(Ci):lt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),r.setMask(E.colorWrite);let ot=E.stencilWrite;o.setTest(ot),ot&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Vt(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(E){D!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),D=E)}function pt(E){E!==rd?(it(i.CULL_FACE),E!==U&&(E===nh?i.cullFace(i.BACK):E===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),U=E}function Wt(E){E!==G&&(J&&i.lineWidth(E),G=E)}function Vt(E,nt,K){E?(it(i.POLYGON_OFFSET_FILL),(k!==nt||B!==K)&&(k=nt,B=K,a.getReversed()&&(nt=-nt),i.polygonOffset(nt,K))):Mt(i.POLYGON_OFFSET_FILL)}function $t(E){E?it(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function jt(E){E===void 0&&(E=i.TEXTURE0+Z-1),Y!==E&&(i.activeTexture(E),Y=E)}function L(E,nt,K){K===void 0&&(Y===null?K=i.TEXTURE0+Z-1:K=Y);let ot=$[K];ot===void 0&&(ot={type:void 0,texture:void 0},$[K]=ot),(ot.type!==E||ot.texture!==nt)&&(Y!==K&&(i.activeTexture(K),Y=K),i.bindTexture(E,nt||j[E]),ot.type=E,ot.texture=nt)}function de(){let E=$[Y];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(E){ne("WebGLState:",E)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(E){ne("WebGLState:",E)}}function _(){try{i.texSubImage2D(...arguments)}catch(E){ne("WebGLState:",E)}}function O(){try{i.texSubImage3D(...arguments)}catch(E){ne("WebGLState:",E)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(E){ne("WebGLState:",E)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(E){ne("WebGLState:",E)}}function gt(){try{i.texStorage2D(...arguments)}catch(E){ne("WebGLState:",E)}}function vt(){try{i.texStorage3D(...arguments)}catch(E){ne("WebGLState:",E)}}function tt(){try{i.texImage2D(...arguments)}catch(E){ne("WebGLState:",E)}}function rt(){try{i.texImage3D(...arguments)}catch(E){ne("WebGLState:",E)}}function St(E){return u[E]!==void 0?u[E]:i.getParameter(E)}function Gt(E,nt){u[E]!==nt&&(i.pixelStorei(E,nt),u[E]=nt)}function wt(E){zt.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),zt.copy(E))}function bt(E){te.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),te.copy(E))}function Bt(E,nt){let K=c.get(nt);K===void 0&&(K=new WeakMap,c.set(nt,K));let ot=K.get(E);ot===void 0&&(ot=i.getUniformBlockIndex(nt,E.name),K.set(E,ot))}function Zt(E,nt){let ot=c.get(nt).get(E);l.get(nt)!==ot&&(i.uniformBlockBinding(nt,ot,E.__bindingPointIndex),l.set(nt,ot))}function z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,$={},d={},f=new WeakMap,g=[],M=null,m=!1,p=null,b=null,T=null,v=null,w=null,x=null,R=null,y=new ee(0,0,0),A=0,P=!1,D=null,U=null,G=null,k=null,B=null,zt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:Mt,bindFramebuffer:Lt,drawBuffers:xt,useProgram:yt,setBlending:lt,setMaterial:ht,setFlipSided:ut,setCullFace:pt,setLineWidth:Wt,setPolygonOffset:Vt,setScissorTest:$t,activeTexture:jt,bindTexture:L,unbindTexture:de,compressedTexImage2D:ie,compressedTexImage3D:C,texImage2D:tt,texImage3D:rt,pixelStorei:Gt,getParameter:St,updateUBOMapping:Bt,uniformBlockBinding:Zt,texStorage2D:gt,texStorage3D:vt,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:Q,scissor:wt,viewport:bt,reset:z}}function Ty(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,_){return g?new OffscreenCanvas(C,_):ia("canvas")}function m(C,_,O){let H=1,Q=ie(C);if((Q.width>O||Q.height>O)&&(H=O/Math.max(Q.width,Q.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let gt=Math.floor(H*Q.width),vt=Math.floor(H*Q.height);d===void 0&&(d=M(gt,vt));let tt=_?M(gt,vt):d;return tt.width=gt,tt.height=vt,tt.getContext("2d").drawImage(C,0,0,gt,vt),Qt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+gt+"x"+vt+")."),tt}else return"data"in C&&Qt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,_,O,H,Q,gt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let vt;H&&(vt=t.get("EXT_texture_norm16"),vt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=_;if(_===i.RED&&(O===i.FLOAT&&(tt=i.R32F),O===i.HALF_FLOAT&&(tt=i.R16F),O===i.UNSIGNED_BYTE&&(tt=i.R8),O===i.UNSIGNED_SHORT&&vt&&(tt=vt.R16_EXT),O===i.SHORT&&vt&&(tt=vt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.R8UI),O===i.UNSIGNED_SHORT&&(tt=i.R16UI),O===i.UNSIGNED_INT&&(tt=i.R32UI),O===i.BYTE&&(tt=i.R8I),O===i.SHORT&&(tt=i.R16I),O===i.INT&&(tt=i.R32I)),_===i.RG&&(O===i.FLOAT&&(tt=i.RG32F),O===i.HALF_FLOAT&&(tt=i.RG16F),O===i.UNSIGNED_BYTE&&(tt=i.RG8),O===i.UNSIGNED_SHORT&&vt&&(tt=vt.RG16_EXT),O===i.SHORT&&vt&&(tt=vt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RG8UI),O===i.UNSIGNED_SHORT&&(tt=i.RG16UI),O===i.UNSIGNED_INT&&(tt=i.RG32UI),O===i.BYTE&&(tt=i.RG8I),O===i.SHORT&&(tt=i.RG16I),O===i.INT&&(tt=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),O===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),O===i.UNSIGNED_INT&&(tt=i.RGB32UI),O===i.BYTE&&(tt=i.RGB8I),O===i.SHORT&&(tt=i.RGB16I),O===i.INT&&(tt=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),O===i.UNSIGNED_INT&&(tt=i.RGBA32UI),O===i.BYTE&&(tt=i.RGBA8I),O===i.SHORT&&(tt=i.RGBA16I),O===i.INT&&(tt=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&vt&&(tt=vt.RGB16_EXT),O===i.SHORT&&vt&&(tt=vt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),_===i.RGBA){let rt=gt?na:fe.getTransfer(Q);O===i.FLOAT&&(tt=i.RGBA32F),O===i.HALF_FLOAT&&(tt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(tt=rt===Se?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&vt&&(tt=vt.RGBA16_EXT),O===i.SHORT&&vt&&(tt=vt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function w(C,_){let O;return C?_===null||_===pi||_===Cr?O=i.DEPTH24_STENCIL8:_===Qn?O=i.DEPTH32F_STENCIL8:_===Tr&&(O=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===Cr?O=i.DEPTH_COMPONENT24:_===Qn?O=i.DEPTH_COMPONENT32F:_===Tr&&(O=i.DEPTH_COMPONENT16),O}function x(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){let _=C.target;_.removeEventListener("dispose",R),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function y(C){let _=C.target;_.removeEventListener("dispose",y),D(_)}function A(C){let _=n.get(C);if(_.__webglInit===void 0)return;let O=C.source,H=f.get(O);if(H){let Q=H[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(C),Object.keys(H).length===0&&f.delete(O)}n.remove(C)}function P(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let O=C.source,H=f.get(O);delete H[_.__cacheKey],a.memory.textures--}function D(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Q=0;Q<_.__webglFramebuffer[H].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[H][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=C.textures;for(let H=0,Q=O.length;H<Q;H++){let gt=n.get(O[H]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(O[H])}n.remove(C)}let U=0;function G(){U=0}function k(){return U}function B(C){U=C}function Z(){let C=U;return C>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function J(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function st(C,_){let O=n.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let H=C.image;if(H===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function F(C,_){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Mt(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Y(C,_){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Mt(O,C,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function $(C,_){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Lt(O,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let Ct={[Ai]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},ct={[dn]:i.NEAREST,[Td]:i.NEAREST_MIPMAP_NEAREST,[Da]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ul]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},zt={[Pd]:i.NEVER,[Ud]:i.ALWAYS,[kd]:i.LESS,[Zl]:i.LEQUAL,[Ld]:i.EQUAL,[Jl]:i.GEQUAL,[Dd]:i.GREATER,[Nd]:i.NOTEQUAL};function te(C,_){if(_.type===Qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===ul||_.magFilter===Da||_.magFilter===Ri||_.minFilter===an||_.minFilter===ul||_.minFilter===Da||_.minFilter===Ri)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ct[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ct[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ct[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ct[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==Da&&_.minFilter!==Ri||_.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function kt(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));let H=_.source,Q=f.get(H);Q===void 0&&(Q={},f.set(H,Q));let gt=J(_);if(gt!==C.__cacheKey){Q[gt]===void 0&&(Q[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[gt].usedTimes++;let vt=Q[C.__cacheKey];vt!==void 0&&(Q[C.__cacheKey].usedTimes--,vt.usedTimes===0&&P(_)),C.__cacheKey=gt,C.__webglTexture=Q[gt].texture}return O}function j(C,_,O){return Math.floor(Math.floor(C/O)/_)}function it(C,_,O,H){let gt=C.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,H,_.data);else{gt.sort((Gt,wt)=>Gt.start-wt.start);let vt=0;for(let Gt=1;Gt<gt.length;Gt++){let wt=gt[vt],bt=gt[Gt],Bt=wt.start+wt.count,Zt=j(bt.start,_.width,4),z=j(wt.start,_.width,4);bt.start<=Bt+1&&Zt===z&&j(bt.start+bt.count-1,_.width,4)===Zt?wt.count=Math.max(wt.count,bt.start+bt.count-wt.start):(++vt,gt[vt]=bt)}gt.length=vt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Gt=0,wt=gt.length;Gt<wt;Gt++){let bt=gt[Gt],Bt=Math.floor(bt.start/4),Zt=Math.ceil(bt.count/4),z=Bt%_.width,E=Math.floor(Bt/_.width),nt=Zt,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,z),e.pixelStorei(i.UNPACK_SKIP_ROWS,E),e.texSubImage2D(i.TEXTURE_2D,0,z,E,nt,K,O,H,_.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function Mt(C,_,O){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let Q=kt(C,_),gt=_.source;e.bindTexture(H,C.__webglTexture,i.TEXTURE0+O);let vt=n.get(gt);if(gt.version!==vt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let K=fe.getPrimaries(fe.workingColorSpace),ot=_.colorSpace===gi?null:fe.getPrimaries(_.colorSpace),mt=_.colorSpace===gi||K===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let rt=m(_.image,!1,s.maxTextureSize);rt=de(_,rt);let St=r.convert(_.format,_.colorSpace),Gt=r.convert(_.type),wt=v(_.internalFormat,St,Gt,_.normalized,_.colorSpace,_.isVideoTexture);te(H,_);let bt,Bt=_.mipmaps,Zt=_.isVideoTexture!==!0,z=vt.__version===void 0||Q===!0,E=gt.dataReady,nt=x(_,rt);if(_.isDepthTexture)wt=w(_.format===hs,_.type),z&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,wt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,St,Gt,null));else if(_.isDataTexture)if(Bt.length>0){Zt&&z&&e.texStorage2D(i.TEXTURE_2D,nt,wt,Bt[0].width,Bt[0].height);for(let K=0,ot=Bt.length;K<ot;K++)bt=Bt[K],Zt?E&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,bt.width,bt.height,St,Gt,bt.data):e.texImage2D(i.TEXTURE_2D,K,wt,bt.width,bt.height,0,St,Gt,bt.data);_.generateMipmaps=!1}else Zt?(z&&e.texStorage2D(i.TEXTURE_2D,nt,wt,rt.width,rt.height),E&&it(_,rt,St,Gt)):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,St,Gt,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Zt&&z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,wt,Bt[0].width,Bt[0].height,rt.depth);for(let K=0,ot=Bt.length;K<ot;K++)if(bt=Bt[K],_.format!==ti)if(St!==null)if(Zt){if(E)if(_.layerUpdates.size>0){let mt=Ch(bt.width,bt.height,_.format,_.type);for(let at of _.layerUpdates){let Pt=bt.data.subarray(at*mt/bt.data.BYTES_PER_ELEMENT,(at+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,at,bt.width,bt.height,1,St,Pt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,rt.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,wt,bt.width,bt.height,rt.depth,0,bt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?E&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,bt.width,bt.height,rt.depth,St,Gt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,wt,bt.width,bt.height,rt.depth,0,St,Gt,bt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Zt&&z&&e.texStorage2D(i.TEXTURE_2D,nt,wt,Bt[0].width,Bt[0].height);for(let K=0,ot=Bt.length;K<ot;K++)bt=Bt[K],_.format!==ti?St!==null?Zt?E&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,wt,bt.width,bt.height,0,bt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?E&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,bt.width,bt.height,St,Gt,bt.data):e.texImage2D(i.TEXTURE_2D,K,wt,bt.width,bt.height,0,St,Gt,bt.data)}else if(_.isDataArrayTexture)if(Zt){if(z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,wt,rt.width,rt.height,rt.depth),E)if(_.layerUpdates.size>0){let K=Ch(rt.width,rt.height,_.format,_.type);for(let ot of _.layerUpdates){let mt=rt.data.subarray(ot*K/rt.data.BYTES_PER_ELEMENT,(ot+1)*K/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,rt.width,rt.height,1,St,Gt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Gt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,rt.width,rt.height,rt.depth,0,St,Gt,rt.data);else if(_.isData3DTexture)Zt?(z&&e.texStorage3D(i.TEXTURE_3D,nt,wt,rt.width,rt.height,rt.depth),E&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Gt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,rt.width,rt.height,rt.depth,0,St,Gt,rt.data);else if(_.isFramebufferTexture){if(z)if(Zt)e.texStorage2D(i.TEXTURE_2D,nt,wt,rt.width,rt.height);else{let K=rt.width,ot=rt.height;for(let mt=0;mt<nt;mt++)e.texImage2D(i.TEXTURE_2D,mt,wt,K,ot,0,St,Gt,null),K>>=1,ot>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),rt.parentNode!==K){K.appendChild(rt),u.add(_),K.onpaint=ot=>{let mt=ot.changedElements;for(let at of u)mt.includes(at.image)&&(at.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let mt=i.RGBA,at=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,at,Pt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Zt&&z){let K=ie(Bt[0]);e.texStorage2D(i.TEXTURE_2D,nt,wt,K.width,K.height)}for(let K=0,ot=Bt.length;K<ot;K++)bt=Bt[K],Zt?E&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,St,Gt,bt):e.texImage2D(i.TEXTURE_2D,K,wt,St,Gt,bt);_.generateMipmaps=!1}else if(Zt){if(z){let K=ie(rt);e.texStorage2D(i.TEXTURE_2D,nt,wt,K.width,K.height)}E&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Gt,rt)}else e.texImage2D(i.TEXTURE_2D,0,wt,St,Gt,rt);p(_)&&b(H),vt.__version=gt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Lt(C,_,O){if(_.image.length!==6)return;let H=kt(C,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let gt=n.get(Q);if(Q.version!==gt.__version||H===!0){e.activeTexture(i.TEXTURE0+O);let vt=fe.getPrimaries(fe.workingColorSpace),tt=_.colorSpace===gi?null:fe.getPrimaries(_.colorSpace),rt=_.colorSpace===gi||vt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let St=_.isCompressedTexture||_.image[0].isCompressedTexture,Gt=_.image[0]&&_.image[0].isDataTexture,wt=[];for(let at=0;at<6;at++)!St&&!Gt?wt[at]=m(_.image[at],!0,s.maxCubemapSize):wt[at]=Gt?_.image[at].image:_.image[at],wt[at]=de(_,wt[at]);let bt=wt[0],Bt=r.convert(_.format,_.colorSpace),Zt=r.convert(_.type),z=v(_.internalFormat,Bt,Zt,_.normalized,_.colorSpace),E=_.isVideoTexture!==!0,nt=gt.__version===void 0||H===!0,K=Q.dataReady,ot=x(_,bt);te(i.TEXTURE_CUBE_MAP,_);let mt;if(St){E&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,z,bt.width,bt.height);for(let at=0;at<6;at++){mt=wt[at].mipmaps;for(let Pt=0;Pt<mt.length;Pt++){let Ot=mt[Pt];_.format!==ti?Bt!==null?E?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,0,0,Ot.width,Ot.height,Bt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,z,Ot.width,Ot.height,0,Ot.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,0,0,Ot.width,Ot.height,Bt,Zt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,z,Ot.width,Ot.height,0,Bt,Zt,Ot.data)}}}else{if(mt=_.mipmaps,E&&nt){mt.length>0&&ot++;let at=ie(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,z,at.width,at.height)}for(let at=0;at<6;at++)if(Gt){E?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,wt[at].width,wt[at].height,Bt,Zt,wt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,z,wt[at].width,wt[at].height,0,Bt,Zt,wt[at].data);for(let Pt=0;Pt<mt.length;Pt++){let we=mt[Pt].image[at].image;E?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,0,0,we.width,we.height,Bt,Zt,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,z,we.width,we.height,0,Bt,Zt,we.data)}}else{E?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Zt,wt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,z,Bt,Zt,wt[at]);for(let Pt=0;Pt<mt.length;Pt++){let Ot=mt[Pt];E?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,0,0,Bt,Zt,Ot.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,z,Bt,Zt,Ot.image[at])}}}p(_)&&b(i.TEXTURE_CUBE_MAP),gt.__version=Q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function xt(C,_,O,H,Q,gt){let vt=r.convert(O.format,O.colorSpace),tt=r.convert(O.type),rt=v(O.internalFormat,vt,tt,O.normalized,O.colorSpace),St=n.get(_),Gt=n.get(O);if(Gt.__renderTarget=_,!St.__hasExternalTextures){let wt=Math.max(1,_.width>>gt),bt=Math.max(1,_.height>>gt);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,gt,rt,wt,bt,_.depth,0,vt,tt,null):e.texImage2D(Q,gt,rt,wt,bt,0,vt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Q,Gt.__webglTexture,0,$t(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Q,Gt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let H=_.depthTexture,Q=H&&H.isDepthTexture?H.type:null,gt=w(_.stencilBuffer,Q),vt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(_),gt,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(_),gt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,gt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,C)}else{let H=_.textures;for(let Q=0;Q<H.length;Q++){let gt=H[Q],vt=r.convert(gt.format,gt.colorSpace),tt=r.convert(gt.type),rt=v(gt.internalFormat,vt,tt,gt.normalized,gt.colorSpace);jt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(_),rt,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(_),rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(C,_,O){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),te(i.TEXTURE_CUBE_MAP,_.depthTexture);let St=r.convert(_.depthTexture.format),Gt=r.convert(_.depthTexture.type),wt;_.depthTexture.format===Ei?wt=i.DEPTH_COMPONENT24:_.depthTexture.format===hs&&(wt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,wt,_.width,_.height,0,St,Gt,null)}}else st(_.depthTexture,0);let gt=Q.__webglTexture,vt=$t(_),tt=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,rt=_.depthTexture.format===hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ei)jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,gt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,gt,0);else if(_.depthTexture.format===hs)jt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,gt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(C){let _=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Q)};H.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=H}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)Jt(_.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?Jt(_.__webglFramebuffer[0],C,0):Jt(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),yt(_.__webglDepthbuffer[H],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,gt)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),yt(_.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(C,_,O){let H=n.get(C);_!==void 0&&xt(H.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&et(C)}function ht(C){let _=C.texture,O=n.get(C),H=n.get(_);C.addEventListener("dispose",y);let Q=C.textures,gt=C.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),gt){O.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[tt]=[];for(let rt=0;rt<_.mipmaps.length;rt++)O.__webglFramebuffer[tt][rt]=i.createFramebuffer()}else O.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)O.__webglFramebuffer[tt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let tt=0,rt=Q.length;tt<rt;tt++){let St=n.get(Q[tt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&jt(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let rt=Q[tt];O.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[tt]);let St=r.convert(rt.format,rt.colorSpace),Gt=r.convert(rt.type),wt=v(rt.internalFormat,St,Gt,rt.normalized,rt.colorSpace,C.isXRRenderTarget===!0),bt=$t(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,wt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,O.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),te(i.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)xt(O.__webglFramebuffer[tt][rt],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else xt(O.__webglFramebuffer[tt],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let tt=0,rt=Q.length;tt<rt;tt++){let St=Q[tt],Gt=n.get(St),wt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Gt.__webglTexture),te(wt,St),xt(O.__webglFramebuffer,C,St,i.COLOR_ATTACHMENT0+tt,wt,0),p(St)&&b(wt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,H.__webglTexture),te(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)xt(O.__webglFramebuffer[rt],C,_,i.COLOR_ATTACHMENT0,tt,rt);else xt(O.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,tt,0);p(_)&&b(tt),e.unbindTexture()}C.depthBuffer&&et(C)}function ut(C){let _=C.textures;for(let O=0,H=_.length;O<H;O++){let Q=_[O];if(p(Q)){let gt=T(C),vt=n.get(Q).__webglTexture;e.bindTexture(gt,vt),b(gt),e.unbindTexture()}}}let pt=[],Wt=[];function Vt(C){if(C.samples>0){if(jt(C)===!1){let _=C.textures,O=C.width,H=C.height,Q=i.COLOR_BUFFER_BIT,gt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(C),tt=_.length>1;if(tt)for(let St=0;St<_.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let rt=C.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let St=0;St<_.length;St++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Gt=n.get(_[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,H,0,0,O,H,Q,i.NEAREST),l===!0&&(pt.length=0,Wt.length=0,pt.push(i.COLOR_ATTACHMENT0+St),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(pt.push(gt),Wt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let St=0;St<_.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,vt.__webglColorRenderbuffer[St]);let Gt=n.get(_[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function $t(C){return Math.min(s.maxSamples,C.samples)}function jt(C){let _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function de(C,_){let O=C.colorSpace,H=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ea&&O!==gi&&(fe.getTransfer(O)===Se?(H!==ti||Q!==Un)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",O)),_}function ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=G,this.getTextureUnits=k,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Cy(i,t){function e(n,s=gi){let r,a=fe.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===yh)return i.RGB;if(n===ti)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===us)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Na||n===Ua||n===Fa||n===Oa)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yl||n===vl||n===Ml||n===Sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===wl||n===Al||n===El||n===Tl||n===Ba||n===Cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===wl)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Al)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===El)return r.COMPRESSED_R11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ba)return r.COMPRESSED_RG11_EAC;if(n===Cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Il||n===Pl||n===kl||n===Ll||n===Dl||n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===Vl||n===Gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Wl||n===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hl)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===ql||n===za||n===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iy=`
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

}`,qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ha(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xn({vertexShader:Ry,fragmentShader:Iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kh=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new qh,p={},b=e.getContextAttributes(),T=null,v=null,w=[],x=[],R=new ft,y=null,A=null,P=new pn;P.viewport=new ze;let D=new pn;D.viewport=new ze;let U=[P,D],G=new rl,k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=w[j];return it===void 0&&(it=new hr,w[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=w[j];return it===void 0&&(it=new hr,w[j]=it),it.getGripSpace()},this.getHand=function(j){let it=w[j];return it===void 0&&(it=new hr,w[j]=it),it.getHandSpace()};function Z(j){let it=x.indexOf(j.inputSource);if(it===-1)return;let Mt=w[it];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,c||a),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",st);for(let j=0;j<w.length;j++){let it=x[j];it!==null&&(x[j]=null,w[j].disconnect(it))}k=null,B=null,m.reset();for(let j in p)delete p[j];if(t.setRenderTarget(T),f=null,d=null,u=null,s=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",J),s.addEventListener("inputsourceschange",st),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Lt=null,xt=null;b.depth&&(xt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=b.stencil?hs:Ei,Lt=b.stencil?Cr:pi);let yt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Nn(d.textureWidth,d.textureHeight,{format:ti,type:Un,depthTexture:new ns(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Nn(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(j){for(let it=0;it<j.removed.length;it++){let Mt=j.removed[it],Lt=x.indexOf(Mt);Lt>=0&&(x[Lt]=null,w[Lt].disconnect(Mt))}for(let it=0;it<j.added.length;it++){let Mt=j.added[it],Lt=x.indexOf(Mt);if(Lt===-1){for(let yt=0;yt<w.length;yt++)if(yt>=x.length){x.push(Mt),Lt=yt;break}else if(x[yt]===null){x[yt]=Mt,Lt=yt;break}if(Lt===-1)break}let xt=w[Lt];xt&&xt.connect(Mt)}}let F=new I,Y=new I;function $(j,it,Mt){F.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);let Lt=F.distanceTo(Y),xt=it.projectionMatrix.elements,yt=Mt.projectionMatrix.elements,Jt=xt[14]/(xt[10]-1),et=xt[14]/(xt[10]+1),lt=(xt[9]+1)/xt[5],ht=(xt[9]-1)/xt[5],ut=(xt[8]-1)/xt[0],pt=(yt[8]+1)/yt[0],Wt=Jt*ut,Vt=Jt*pt,$t=Lt/(-ut+pt),jt=$t*-ut;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(jt),j.translateZ($t),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let L=Jt+$t,de=et+$t,ie=Wt-jt,C=Vt+(Lt-jt),_=lt*et/de*L,O=ht*et/de*L;j.projectionMatrix.makePerspective(ie,C,_,O,L,de),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ct(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let it=j.near,Mt=j.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),G.near=D.near=P.near=it,G.far=D.far=P.far=Mt,(k!==G.near||B!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,B=G.far),G.layers.mask=j.layers.mask|6,P.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Lt=j.parent,xt=G.cameras;Ct(G,Lt);for(let yt=0;yt<xt.length;yt++)Ct(xt[yt],Lt);xt.length===2?$(G,P,D):G.projectionMatrix.copy(P.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),ct(j,G,Lt)};function ct(j,it,Mt){Mt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=or*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(j){return p[j]};let zt=null;function te(j,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Lt=!1;Mt.length!==G.cameras.length&&(G.cameras.length=0,Lt=!0);for(let et=0;et<Mt.length;et++){let lt=Mt[et],ht=null;if(f!==null)ht=f.getViewport(lt);else{let pt=u.getViewSubImage(d,lt);ht=pt.viewport,et===0&&(t.setRenderTargetTextures(v,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(v))}let ut=U[et];ut===void 0&&(ut=new pn,ut.layers.enable(et),ut.viewport=new ze,U[et]=ut),ut.matrix.fromArray(lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),et===0&&(G.matrix.copy(ut.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Lt===!0&&G.cameras.push(ut)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let et=u.getDepthInformation(Mt[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(xt&&xt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let et=0;et<Mt.length;et++){let lt=Mt[et].camera;if(lt){let ht=p[lt];ht||(ht=new ha,p[lt]=ht);let ut=u.getCameraImage(lt);ht.sourceTexture=ut}}}}for(let Mt=0;Mt<w.length;Mt++){let Lt=x[Mt],xt=w[Mt];Lt!==null&&xt!==void 0&&xt.update(Lt,it,c||a)}zt&&zt(j,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let kt=new xf;kt.setAnimationLoop(te),this.setAnimationLoop=function(j){zt=j},this.dispose=function(){}}},Py=new ve,wf=new ae;wf.set(-1,0,0,0,1,0,0,0,1);function ky(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),T=b.envMap,v=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ly(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){let x=w.program;n.uniformBlockBinding(v,x)}function c(v,w){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",b));let R=w.program;n.updateUBOMapping(v,R);let y=t.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function h(v){let w=u();v.__bindingPointIndex=w;let x=i.createBuffer(),R=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let w=s[v.id],x=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,A=x.length;y<A;y++){let P=x[y];if(Array.isArray(P))for(let D=0,U=P.length;D<U;D++)f(P[D],y,D,R);else f(P,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,w,x,R){if(M(v,w,x,R)===!0){let y=v.__offset,A=v.value;if(Array.isArray(A)){let P=0;for(let D=0;D<A.length;D++){let U=A[D],G=p(U);g(U,v.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,w,x){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,x)}function M(v,w,x,R){let y=v.value,A=w+"_"+x;if(R[A]===void 0)return typeof y=="number"||typeof y=="boolean"?R[A]=y:ArrayBuffer.isView(y)?R[A]=y.slice():R[A]=y.clone(),!0;{let P=R[A];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(v){let w=v.uniforms,x=0,R=16;for(let A=0,P=w.length;A<P;A++){let D=Array.isArray(w[A])?w[A]:[w[A]];for(let U=0,G=D.length;U<G;U++){let k=D[U],B=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,J=B.length;Z<J;Z++){let st=B[Z],F=p(st),Y=x%R,$=Y%F.boundary,Ct=Y+$;x+=$,Ct!==0&&R-Ct<F.storage&&(x+=R-Ct),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=F.storage}}}let y=x%R;return y>0&&(x+=R-y),v.__size=x,v.__cache={},this}function p(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),w}function b(v){let w=v.target;w.removeEventListener("dispose",b);let x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function Ny(){return Ii===null&&(Ii=new oa(Dy,16,16,us,mi),Ii.name="DFG_LUT",Ii.minFilter=an,Ii.magFilter=an,Ii.wrapS=wi,Ii.wrapT=wi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var tc=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,m=new Set([xl,_l,gl]),p=new Set([Un,pi,Tr,Cr,fl,pl]),b=new Uint32Array(4),T=new Int32Array(4),v=new I,w=null,x=null,R=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,U=null,G=null,k=null,B=null;this._outputColorSpace=rn;let Z=0,J=0,st=null,F=-1,Y=null,$=new ze,Ct=new ze,ct=null,zt=new ee(0),te=0,kt=e.width,j=e.height,it=1,Mt=null,Lt=null,xt=new ze(0,0,kt,j),yt=new ze(0,0,kt,j),Jt=!1,et=new fr,lt=!1,ht=!1,ut=new ve,pt=new I,Wt=new ze,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function jt(){return st===null?it:1}let L=n;function de(S,N){return e.getContext(S,N)}let ie,C,_,O,H,Q,gt,vt,tt,rt,St,Gt,wt,bt,Bt,Zt,z,E,nt,K,ot,mt,at;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){let N="webgl2";if(L=de(N,S),L===null)throw de(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(S){throw e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ne("WebGLRenderer: "+S.message),S}function Pt(){ie=new G_(L),ie.init(),ot=new Cy(L,ie),C=new k_(L,ie,t,ot),_=new Ey(L,ie),C.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),G=L.createFramebuffer(),k=L.createFramebuffer(),B=L.createFramebuffer(),O=new X_(L),H=new dy,Q=new Ty(L,ie,_,H,C,ot,O),gt=new V_(P),vt=new qm(L),mt=new I_(L,vt),tt=new H_(L,vt,O,mt),rt=new q_(L,tt,vt,mt,O),E=new Y_(L,C,Q),Bt=new L_(H),St=new uy(P,gt,ie,C,mt,Bt),Gt=new ky(P,H),wt=new py,bt=new vy(ie),z=new R_(P,gt,_,rt,g,l),Zt=new Ay(P,rt,C),at=new Ly(L,O,C,_),nt=new P_(L,ie,O),K=new W_(L,ie,O),O.programs=St.programs,P.capabilities=C,P.extensions=ie,P.properties=H,P.renderLists=wt,P.shadowMap=Zt,P.state=_,P.info=O}M!==Un&&(A=new Z_(M,e.width,e.height,o,s,r));let Ot=new Kh(P,L);this.xr=Ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(kt,j,!1))},this.getSize=function(S){return S.set(kt,j)},this.setSize=function(S,N,q=!0){if(Ot.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=S,j=N,e.width=Math.floor(S*it),e.height=Math.floor(N*it),q===!0&&(e.style.width=S+"px",e.style.height=N+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(kt*it,j*it).floor()},this.setDrawingBufferSize=function(S,N,q){kt=S,j=N,it=q,e.width=Math.floor(S*q),e.height=Math.floor(N*q),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(M===Un){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,N,q,W){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,N,q,W),_.viewport($.copy(xt).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(yt)},this.setScissor=function(S,N,q,W){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,N,q,W),_.scissor(Ct.copy(yt).multiplyScalar(it).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(S){_.setScissorTest(Jt=S)},this.setOpaqueSort=function(S){Mt=S},this.setTransparentSort=function(S){Lt=S},this.getClearColor=function(S){return S.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,q=!0){let W=0;if(S){let V=!1;if(st!==null){let At=st.texture.format;V=m.has(At)}if(V){let At=st.texture.type,It=p.has(At),Tt=z.getClearColor(),Nt=z.getClearAlpha(),Yt=Tt.r,le=Tt.g,ue=Tt.b;It?(b[0]=Yt,b[1]=le,b[2]=ue,b[3]=Nt,L.clearBufferuiv(L.COLOR,0,b)):(T[0]=Yt,T[1]=le,T[2]=ue,T[3]=Nt,L.clearBufferiv(L.COLOR,0,T))}else W|=L.COLOR_BUFFER_BIT}N&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),z.dispose(),wt.dispose(),bt.dispose(),H.dispose(),gt.dispose(),rt.dispose(),mt.dispose(),at.dispose(),St.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",oe),Ot.removeEventListener("sessionend",pe),Le.stop()};function we(S){S.preventDefault(),Mh("WebGLRenderer: Context Lost."),D=!0}function X(){Mh("WebGLRenderer: Context Restored."),D=!1;let S=O.autoReset,N=Zt.enabled,q=Zt.autoUpdate,W=Zt.needsUpdate,V=Zt.type;Pt(),O.autoReset=S,Zt.enabled=N,Zt.autoUpdate=q,Zt.needsUpdate=W,Zt.type=V}function dt(S){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Et(S){let N=S.target;N.removeEventListener("dispose",Et),Kt(N)}function Kt(S){Xt(S),H.remove(S)}function Xt(S){let N=H.get(S).programs;N!==void 0&&(N.forEach(function(q){St.releaseProgram(q)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,q,W,V,At){N===null&&(N=Vt);let It=V.isMesh&&V.matrixWorld.determinantAffine()<0,Tt=_c(S,N,q,W,V);_.setMaterial(W,It);let Nt=q.index,Yt=1;if(W.wireframe===!0){if(Nt=tt.getWireframeAttribute(q),Nt===void 0)return;Yt=2}let le=q.drawRange,ue=q.attributes.position,Ht=le.start*Yt,Me=(le.start+le.count)*Yt;At!==null&&(Ht=Math.max(Ht,At.start*Yt),Me=Math.min(Me,(At.start+At.count)*Yt)),Nt!==null?(Ht=Math.max(Ht,0),Me=Math.min(Me,Nt.count)):ue!=null&&(Ht=Math.max(Ht,0),Me=Math.min(Me,ue.count));let je=Me-Ht;if(je<0||je===1/0)return;mt.setup(V,W,Tt,q,Nt);let Fe,Pe=nt;if(Nt!==null&&(Fe=vt.get(Nt),Pe=K,Pe.setIndex(Fe)),V.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*jt()),Pe.setMode(L.LINES)):Pe.setMode(L.TRIANGLES);else if(V.isLine){let vn=W.linewidth;vn===void 0&&(vn=1),_.setLineWidth(vn*jt()),V.isLineSegments?Pe.setMode(L.LINES):V.isLineLoop?Pe.setMode(L.LINE_LOOP):Pe.setMode(L.LINE_STRIP)}else V.isPoints?Pe.setMode(L.POINTS):V.isSprite&&Pe.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))Pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let vn=V._multiDrawStarts,Ut=V._multiDrawCounts,Tn=V._multiDrawCount,me=Nt?vt.get(Nt).bytesPerElement:1,Jn=H.get(W).currentProgram.getUniforms();for(let Si=0;Si<Tn;Si++)Jn.setValue(L,"_gl_DrawID",Si),Pe.render(vn[Si]/me,Ut[Si])}else if(V.isInstancedMesh)Pe.renderInstances(Ht,je,V.count);else if(q.isInstancedBufferGeometry){let vn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ut=Math.min(q.instanceCount,vn);Pe.renderInstances(Ht,je,Ut)}else Pe.render(Ht,je)};function se(S,N,q,W){U!==null&&S.isNodeMaterial&&U.setObject(W,S),lt===!0&&Bt.setState(S,q,!1),S.transparent===!0&&S.side===fn&&S.forceSinglePass===!1?(S.side=gn,S.needsUpdate=!0,nn(S,N,W),S.side=ls,S.needsUpdate=!0,nn(S,N,W),S.side=fn):nn(S,N,W)}this.compile=function(S,N,q=null){q===null&&(q=S),U!==null&&U.renderStart(S,N,q),x=bt.get(q),x.init(N),y.push(x),q.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(x.pushLight(V),V.castShadow&&x.pushShadow(V))}),S!==q&&S.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(x.pushLight(V),V.castShadow&&x.pushShadow(V))}),x.setupLights(),U!==null&&U.updateLights(x.state.lightsArray),ht=this.localClippingEnabled,lt=Bt.init(this.clippingPlanes,ht),lt===!0&&Bt.setGlobalState(this.clippingPlanes,N),U!==null&&Zt.render(x.state.shadowsArray,q,N);let W=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let At=V.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let Tt=At[It];se(Tt,q,N,V),W.add(Tt)}else se(At,q,N,V),W.add(At)}),x=y.pop(),U!==null&&U.renderEnd(),W},this.compileAsync=function(S,N,q=null){let W=this.compile(S,N,q);return new Promise(V=>{function At(){if(W.forEach(function(It){let Nt=H.get(It).currentProgram;(Nt===void 0||Nt.isReady())&&W.delete(It)}),W.size===0){V(S);return}setTimeout(At,10)}ie.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Dt=null;function xe(S){Dt&&Dt(S)}function oe(){Le.stop()}function pe(){Le.start()}let Le=new xf;Le.setAnimationLoop(xe),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(S){Dt=S,Ot.setAnimationLoop(S),S===null?Le.stop():Le.start()},Ot.addEventListener("sessionstart",oe),Ot.addEventListener("sessionend",pe),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(S,N);let q=Ot.enabled===!0&&Ot.isPresenting===!0,W=A!==null&&(st===null||q)&&A.begin(P,st);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(N),N=Ot.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,N,st),x=bt.get(S,y.length),x.init(N),x.state.textureUnits=Q.getTextureUnits(),y.push(x),ut.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(ut,hi,N.reversedDepth),ht=this.localClippingEnabled,lt=Bt.init(this.clippingPlanes,ht),w=wt.get(S,R.length),w.init(),R.push(w),Ot.enabled===!0&&Ot.isPresenting===!0){let It=P.xr.getDepthSensingMesh();It!==null&&ye(It,N,-1/0,P.sortObjects)}ye(S,N,0,P.sortObjects),w.finish(),U!==null&&U.updateLights(x.state.lightsArray),P.sortObjects===!0&&w.sort(Mt,Lt),$t=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,$t&&z.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Bt.beginShadows();let V=x.state.shadowsArray;if(Zt.render(V,S,N),lt===!0&&Bt.endShadows(),(W&&A.hasRenderPass())===!1){let It=w.opaque,Tt=w.transmissive;if(x.setupLights(),N.isArrayCamera){let Nt=N.cameras;if(Tt.length>0)for(let Yt=0,le=Nt.length;Yt<le;Yt++){let ue=Nt[Yt];yn(It,Tt,S,ue)}$t&&z.render(S);for(let Yt=0,le=Nt.length;Yt<le;Yt++){let ue=Nt[Yt];Ie(w,S,ue,ue.viewport)}}else Tt.length>0&&yn(It,Tt,S,N),$t&&z.render(S),Ie(w,S,N)}st!==null&&J===0&&(Q.updateMultisampleRenderTarget(st),Q.updateRenderTargetMipmap(st)),W&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,N),mt.resetDefaultState(),F=-1,Y=null,y.pop(),y.length>0?(x=y[y.length-1],Q.setTextureUnits(x.state.textureUnits),lt===!0&&Bt.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,U!==null&&U.renderEnd()};function ye(S,N,q,W){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)x.pushLightProbeGrid(S);else if(S.isLight)x.pushLight(S),S.castShadow&&x.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(et)){W&&Wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ut);let It=rt.update(S),Tt=S.material;Tt.visible&&w.push(S,It,Tt,q,Wt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(et))){let It=rt.update(S),Tt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Wt.copy(S.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Wt.copy(It.boundingSphere.center)),Wt.applyMatrix4(S.matrixWorld).applyMatrix4(ut)),Array.isArray(Tt)){let Nt=It.groups;for(let Yt=0,le=Nt.length;Yt<le;Yt++){let ue=Nt[Yt],Ht=Tt[ue.materialIndex];Ht&&Ht.visible&&w.push(S,It,Ht,q,Wt.z,ue,N)}}else Tt.visible&&w.push(S,It,Tt,q,Wt.z,null,N)}}let At=S.children;for(let It=0,Tt=At.length;It<Tt;It++)ye(At[It],N,q,W)}function Ie(S,N,q,W){let{opaque:V,transmissive:At,transparent:It}=S;x.setupLightsView(q),lt===!0&&Bt.setGlobalState(P.clippingPlanes,q),W&&_.viewport($.copy(W)),V.length>0&&$e(V,N,q),At.length>0&&$e(At,N,q),It.length>0&&$e(It,N,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function yn(S,N,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[W.id]===void 0){let Ht=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[W.id]=new Nn(1,1,{generateMipmaps:!0,type:Ht?mi:Un,minFilter:Ri,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let At=x.state.transmissionRenderTarget[W.id],It=W.viewport||$;At.setSize(It.z*P.transmissionResolutionScale,It.w*P.transmissionResolutionScale);let Tt=P.getRenderTarget(),Nt=P.getActiveCubeFace(),Yt=P.getActiveMipmapLevel();P.setRenderTarget(At),P.getClearColor(zt),te=P.getClearAlpha(),te<1&&P.setClearColor(16777215,.5),P.clear(),$t&&z.render(q);let le=P.toneMapping;P.toneMapping=fi;let ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),x.setupLightsView(W),lt===!0&&Bt.setGlobalState(P.clippingPlanes,W),$e(S,q,W),Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Me=0,je=N.length;Me<je;Me++){let Fe=N[Me],{object:Pe,geometry:vn,material:Ut,group:Tn}=Fe;if(Ut.side===fn&&Pe.layers.test(W.layers)){let me=Ut.side;Ut.side=gn,Ut.needsUpdate=!0,Mi(Pe,q,W,vn,Ut,Tn),Ut.side=me,Ut.needsUpdate=!0,Ht=!0}}Ht===!0&&(Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At))}P.setRenderTarget(Tt,Nt,Yt),P.setClearColor(zt,te),ue!==void 0&&(W.viewport=ue),P.toneMapping=le}function $e(S,N,q){let W=N.isScene===!0?N.overrideMaterial:null;for(let V=0,At=S.length;V<At;V++){let It=S[V],{object:Tt,geometry:Nt,group:Yt}=It,le=It.material;le.allowOverride===!0&&W!==null&&(le=W),Tt.layers.test(q.layers)&&Mi(Tt,N,q,Nt,le,Yt)}}function Mi(S,N,q,W,V,At){U!==null&&V.isNodeMaterial&&U.setObject(S,V),S.onBeforeRender(P,N,q,W,V,At),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(P,N,q,W,S,At),V.transparent===!0&&V.side===fn&&V.forceSinglePass===!1?(V.side=gn,V.needsUpdate=!0,P.renderBufferDirect(q,N,W,V,S,At),V.side=ls,V.needsUpdate=!0,P.renderBufferDirect(q,N,W,V,S,At),V.side=fn):P.renderBufferDirect(q,N,W,V,S,At),S.onAfterRender(P,N,q,W,V,At)}function nn(S,N,q){N.isScene!==!0&&(N=Vt);let W=H.get(S),V=x.state.lights,At=x.state.shadowsArray,It=V.state.version,Tt=St.getParameters(S,V.state,At,N,q,x.state.lightProbeGridArray),Nt=St.getProgramCacheKey(Tt),Yt=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,W.fog=N.fog;let le=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=gt.get(S.envMap||W.environment,le),W.envMapRotation=W.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Yt===void 0&&(S.addEventListener("dispose",Et),Yt=new Map,W.programs=Yt);let ue=Yt.get(Nt);if(ue!==void 0){if(W.currentProgram===ue&&W.lightsStateVersion===It)return gs(S,Tt),ue}else Tt.uniforms=St.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,q,Tt),S.onBeforeCompile(Tt,P),ue=St.acquireProgram(Tt,Nt),Yt.set(Nt,ue),W.uniforms=Tt.uniforms;let Ht=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ht.clippingPlanes=Bt.uniform),gs(S,Tt),W.needsLights=sn(S),W.lightsStateVersion=It,W.needsLights&&(Ht.ambientLightColor.value=V.state.ambient,Ht.lightProbe.value=V.state.probe,Ht.sunLights.value=V.state.sun,Ht.sunLightShadows.value=V.state.sunShadow,Ht.directionalLights.value=V.state.directional,Ht.directionalLightShadows.value=V.state.directionalShadow,Ht.spotLights.value=V.state.spot,Ht.spotLightShadows.value=V.state.spotShadow,Ht.rectAreaLights.value=V.state.rectArea,Ht.ltc_1.value=V.state.rectAreaLTC1,Ht.ltc_2.value=V.state.rectAreaLTC2,Ht.pointLights.value=V.state.point,Ht.pointLightShadows.value=V.state.pointShadow,Ht.hemisphereLights.value=V.state.hemi,Ht.sunShadowMatrix.value=V.state.sunShadowMatrix,Ht.sunShadowCascade.value=V.state.sunShadowCascade,Ht.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ht.spotLightMatrix.value=V.state.spotLightMatrix,Ht.spotLightMap.value=V.state.spotLightMap,Ht.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=x.state.lightProbeGridArray.length>0,W.currentProgram=ue,W.uniformsList=null,ue}function En(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Pr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function gs(S,N){let q=H.get(S);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function _s(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let q=0,W=S.length;q<W;q++){let V=S[q];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function _c(S,N,q,W,V){N.isScene!==!0&&(N=Vt),Q.resetTextureUnits();let At=N.fog,It=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?N.environment:null,Tt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:fe.workingColorSpace,Nt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Yt=gt.get(W.envMap||It,Nt),le=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ue=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!q.morphAttributes.position,Me=!!q.morphAttributes.normal,je=!!q.morphAttributes.color,Fe=fi;W.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Fe=P.toneMapping);let Pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vn=Pe!==void 0?Pe.length:0,Ut=H.get(W),Tn=x.state.lights;if(lt===!0&&(ht===!0||S!==Y)){let De=S===Y&&W.id===F;Bt.setState(W,S,De)}let me=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Tn.state.version||Ut.outputColorSpace!==Tt||V.isBatchedMesh&&Ut.batching===!1||!V.isBatchedMesh&&Ut.batching===!0||V.isBatchedMesh&&Ut.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ut.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ut.instancing===!1||!V.isInstancedMesh&&Ut.instancing===!0||V.isSkinnedMesh&&Ut.skinning===!1||!V.isSkinnedMesh&&Ut.skinning===!0||V.isInstancedMesh&&Ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ut.instancingMorph===!1&&V.morphTexture!==null||Ut.envMap!==Yt||W.fog===!0&&Ut.fog!==At||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Bt.numPlanes||Ut.numIntersection!==Bt.numIntersection)||Ut.vertexAlphas!==le||Ut.vertexTangents!==ue||Ut.morphTargets!==Ht||Ut.morphNormals!==Me||Ut.morphColors!==je||Ut.toneMapping!==Fe||Ut.morphTargetsCount!==vn||!!Ut.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Ut.__version=W.version);let Jn=Ut.currentProgram;me===!0&&(Jn=nn(W,N,V),U&&W.isNodeMaterial&&U.onUpdateProgram(W,Jn,Ut));let Si=!1,qi=!1,Bs=!1,Ee=Jn.getUniforms(),Ke=Ut.uniforms;if(_.useProgram(Jn.program)&&(Si=!0,qi=!0,Bs=!0),W.id!==F&&(F=W.id,qi=!0),Ut.needsLights){let De=_s(x.state.lightProbeGridArray,V);Ut.lightProbeGrid!==De&&(Ut.lightProbeGrid=De,qi=!0)}if(Si||Y!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ee.setValue(L,"projectionMatrix",S.projectionMatrix),Ee.setValue(L,"viewMatrix",S.matrixWorldInverse);let Zi=Ee.map.cameraPosition;Zi!==void 0&&Zi.setValue(L,pt.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&Ee.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ee.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,qi=!0,Bs=!0)}if(Ut.needsLights&&(Tn.state.sunShadowMap.length>0&&Ee.setValue(L,"sunShadowMap",Tn.state.sunShadowMap,Q),Tn.state.directionalShadowMap.length>0&&Ee.setValue(L,"directionalShadowMap",Tn.state.directionalShadowMap,Q),Tn.state.spotShadowMap.length>0&&Ee.setValue(L,"spotShadowMap",Tn.state.spotShadowMap,Q),Tn.state.pointShadowMap.length>0&&Ee.setValue(L,"pointShadowMap",Tn.state.pointShadowMap,Q)),V.isSkinnedMesh){Ee.setOptional(L,V,"bindMatrix"),Ee.setOptional(L,V,"bindMatrixInverse");let De=V.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Ee.setValue(L,"boneTexture",De.boneTexture,Q))}V.isBatchedMesh&&(Ee.setOptional(L,V,"batchingTexture"),Ee.setValue(L,"batchingTexture",V._matricesTexture,Q),Ee.setOptional(L,V,"batchingIdTexture"),Ee.setValue(L,"batchingIdTexture",V._indirectTexture,Q),Ee.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Ee.setValue(L,"batchingColorTexture",V._colorsTexture,Q));let Ki=q.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&E.update(V,q,Jn),(qi||Ut.receiveShadow!==V.receiveShadow)&&(Ut.receiveShadow=V.receiveShadow,Ee.setValue(L,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&N.environment!==null&&(Ke.envMapIntensity.value=N.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=Ny()),qi){if(Ee.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ut.needsLights&&Za(Ke,Bs),At&&W.fog===!0&&Gt.refreshFogUniforms(Ke,At),Gt.refreshMaterialUniforms(Ke,W,it,j,x.state.transmissionRenderTarget[S.id]),Ut.needsLights&&Ut.lightProbeGrid){let De=Ut.lightProbeGrid;Ke.probesSH.value=De.texture,Ke.probesMin.value.copy(De.boundingBox.min),Ke.probesMax.value.copy(De.boundingBox.max),Ke.probesResolution.value.copy(De.resolution)}Pr.upload(L,En(Ut),Ke,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pr.upload(L,En(Ut),Ke,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ee.setValue(L,"center",V.center),Ee.setValue(L,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(L,"normalMatrix",V.normalMatrix),Ee.setValue(L,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){let De=W.uniformsGroups;for(let Zi=0,zs=De.length;Zi<zs;Zi++){let Su=De[Zi];at.update(Su,Jn),at.bind(Su,Jn)}}return Jn}function Za(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function sn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(S,N,q){let W=H.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=N,H.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:q,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let q=H.get(S);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,q=0){st=S,Z=N,J=q;let W=null,V=!1,At=!1;if(S){let Tt=H.get(S);if(Tt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,Tt.__webglFramebuffer),$.copy(S.viewport),Ct.copy(S.scissor),ct=S.scissorTest,_.viewport($),_.scissor(Ct),_.setScissorTest(ct),F=-1;return}else if(Tt.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(Tt.__hasExternalTextures)Q.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let le=S.depthTexture;if(Tt.__boundDepthTexture!==le){if(le!==null&&H.has(le)&&(S.width!==le.image.width||S.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}let Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let Yt=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Yt[N])?W=Yt[N][q]:W=Yt[N],V=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?W=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Yt)?W=Yt[q]:W=Yt,$.copy(S.viewport),Ct.copy(S.scissor),ct=S.scissorTest}else $.copy(xt).multiplyScalar(it).floor(),Ct.copy(yt).multiplyScalar(it).floor(),ct=Jt;if(q!==0&&(W=G),_.bindFramebuffer(L.FRAMEBUFFER,W)&&_.drawBuffers(S,W),_.viewport($),_.scissor(Ct),_.setScissorTest(ct),V){let Tt=H.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Tt.__webglTexture,q)}else if(At){let Tt=N;for(let Nt=0;Nt<S.textures.length;Nt++){let Yt=H.get(S.textures[Nt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Nt,Yt.__webglTexture,q,Tt)}}else if(S!==null&&q!==0){let Tt=H.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,q)}F=-1};function Zn(S){let N=H.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=C.textureFormatReadable(S.format),N.__typeReadable=C.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,q,W,V,At,It,Tt=0){if(!(S&&S.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){_.bindFramebuffer(L.FRAMEBUFFER,Nt);try{let Yt=S.textures[Tt],le=Yt.format,ue=Yt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Tt);let Ht=Zn(Yt);if(Ht.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-W&&q>=0&&q<=S.height-V&&L.readPixels(N,q,W,V,ot.convert(le),ot.convert(ue),At)}finally{let Yt=st!==null?H.get(st).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(S,N,q,W,V,At,It,Tt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt)if(N>=0&&N<=S.width-W&&q>=0&&q<=S.height-V){_.bindFramebuffer(L.FRAMEBUFFER,Nt);let Yt=S.textures[Tt],le=Yt.format,ue=Yt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Tt);let Ht=Zn(Yt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,At.byteLength,L.STREAM_READ),L.readPixels(N,q,W,V,ot.convert(le),ot.convert(ue),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let je=st!==null?H.get(st).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,je);let Fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zd(L,Fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,At),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Me),L.deleteSync(Fe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,q=0){let W=Math.pow(2,-q),V=Math.floor(S.image.width*W),At=Math.floor(S.image.height*W),It=N!==null?N.x:0,Tt=N!==null?N.y:0;Q.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,It,Tt,V,At),_.unbindTexture()},this.copyTextureToTexture=function(S,N,q=null,W=null,V=0,At=0){let It,Tt,Nt,Yt,le,ue,Ht,Me,je,Fe=S.isCompressedTexture?S.mipmaps[At]:S.image;if(q!==null)It=q.max.x-q.min.x,Tt=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Yt=q.min.x,le=q.min.y,ue=q.isBox3?q.min.z:0;else{let Ke=Math.pow(2,-V);It=Math.floor(Fe.width*Ke),Tt=Math.floor(Fe.height*Ke),S.isDataArrayTexture?Nt=Fe.depth:S.isData3DTexture?Nt=Math.floor(Fe.depth*Ke):Nt=1,Yt=0,le=0,ue=0}W!==null?(Ht=W.x,Me=W.y,je=W.z):(Ht=0,Me=0,je=0);let Pe=ot.convert(N.format),vn=ot.convert(N.type),Ut;N.isData3DTexture?(Q.setTexture3D(N,0),Ut=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Q.setTexture2DArray(N,0),Ut=L.TEXTURE_2D_ARRAY):(Q.setTexture2D(N,0),Ut=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Tn=_.getParameter(L.UNPACK_ROW_LENGTH),me=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Jn=_.getParameter(L.UNPACK_SKIP_PIXELS),Si=_.getParameter(L.UNPACK_SKIP_ROWS),qi=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Fe.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Fe.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Yt),_.pixelStorei(L.UNPACK_SKIP_ROWS,le),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ue);let Bs=S.isDataArrayTexture||S.isData3DTexture,Ee=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Ke=H.get(S),Ki=H.get(N),De=H.get(Ke.__renderTarget),Zi=H.get(Ki.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,De.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let zs=0;zs<Nt;zs++)Bs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(S).__webglTexture,V,ue+zs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(N).__webglTexture,At,je+zs)),L.blitFramebuffer(Yt,le,It,Tt,Ht,Me,It,Tt,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||H.has(S)){let Ke=H.get(S),Ki=H.get(N);_.bindFramebuffer(L.READ_FRAMEBUFFER,k),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let De=0;De<Nt;De++)Bs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ke.__webglTexture,V,ue+De):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ke.__webglTexture,V),Ee?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ki.__webglTexture,At,je+De):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ki.__webglTexture,At),V!==0?L.blitFramebuffer(Yt,le,It,Tt,Ht,Me,It,Tt,L.COLOR_BUFFER_BIT,L.NEAREST):Ee?L.copyTexSubImage3D(Ut,At,Ht,Me,je+De,Yt,le,It,Tt):L.copyTexSubImage2D(Ut,At,Ht,Me,Yt,le,It,Tt);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ee?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ut,At,Ht,Me,je,It,Tt,Nt,Pe,vn,Fe.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,At,Ht,Me,je,It,Tt,Nt,Pe,Fe.data):L.texSubImage3D(Ut,At,Ht,Me,je,It,Tt,Nt,Pe,vn,Fe):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,At,Ht,Me,It,Tt,Pe,vn,Fe.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,At,Ht,Me,Fe.width,Fe.height,Pe,Fe.data):L.texSubImage2D(L.TEXTURE_2D,At,Ht,Me,It,Tt,Pe,vn,Fe);_.pixelStorei(L.UNPACK_ROW_LENGTH,Tn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Jn),_.pixelStorei(L.UNPACK_SKIP_ROWS,Si),_.pixelStorei(L.UNPACK_SKIP_IMAGES,qi),At===0&&N.generateMipmaps&&L.generateMipmap(Ut),_.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Z=0,J=0,st=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var Af={type:"change"},Jh={type:"start"},Tf={type:"end"},ic=new es,Ef=new Gn,Uy=Math.cos(70*bh.DEG2RAD),cn=new I,Fn=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6,sc=class extends Ra{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Hn,this._lastTargetPosition=new I,this._quat=new Hn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wr,this._sphericalDelta=new wr,this._scale=1,this._panOffset=new I,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new I,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Oy.bind(this),this._onPointerDown=Fy.bind(this),this._onPointerUp=By.bind(this),this._onContextMenu=Yy.bind(this),this._onMouseWheel=Gy.bind(this),this._onKeyDown=Hy.bind(this),this._onTouchStart=Wy.bind(this),this._onTouchMove=Xy.bind(this),this._onMouseDown=zy.bind(this),this._onMouseMove=Vy.bind(this),this._interceptControlDown=qy.bind(this),this._interceptControlUp=Ky.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ae.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Af),this.update(),this.state=Ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;cn.copy(e).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fn:n>Math.PI&&(n-=Fn),s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),e.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=cn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<Uy?this.object.lookAt(this.target):(Ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(Ef,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(Af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){cn.setFromMatrixColumn(e,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,e){this.screenSpacePanning===!0?cn.setFromMatrixColumn(e,1):(cn.setFromMatrixColumn(e,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;cn.copy(s).sub(this.target);let r=cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Fy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Oy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function By(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tf),this.state=Ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ae.DOLLY;break;case as.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}break;case as.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Jh)}function Vy(i){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gy(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(i.preventDefault(),this.dispatchEvent(Jh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tf))}function Hy(i){this.enabled!==!1&&this._handleKeyDown(i)}function Wy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ae.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ae.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Jh)}function Xy(i){switch(this._trackPointer(i),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ae.NONE}}function Yy(i){this.enabled!==!1&&i.preventDefault()}function qy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ky(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rc=class extends ws{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new tn;t.deleteAttribute("uv");let e=new Ce({side:gn}),n=new Ce,s=new Ea(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new _t(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new dr(t,n,6),o=new Ye;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new _t(t,Dr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new _t(t,Dr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new _t(t,Dr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new _t(t,Dr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new _t(t,Dr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new _t(t,Dr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Dr(i){return new Ma({color:0,emissive:16777215,emissiveIntensity:i})}var Zy=42e5,$h=[1,.8,.65,.5],Cf=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),Jy=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Rf(i,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:n=null}={}){let s=window.devicePixelRatio||1,r;try{r=new tc({canvas:i,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=rn,r.toneMapping=ka,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=ol,r.shadowMap.autoUpdate=!1,r.setClearColor(new ee(t),1);let a=new ws,o=new kr(r);a.environment=o.fromScene(new rc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new pn(32,1,4,1500);l.position.set(0,160,150),a.add(new ba(16777215,13616860,.35));let c=new Ta(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let h=new _t(new mn(900,900),new va({opacity:.2}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,a.add(h);let u=new sc(l,i);u.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),u.dampingFactor=.14,u.rotateSpeed=.75,u.zoomSpeed=.9,u.panSpeed=.8,u.screenSpacePanning=!0,u.minDistance=9,u.maxDistance=1200,u.minPolarAngle=.06,u.maxPolarAngle=1.32,u.zoomToCursor=!0,u.cursor.set(0,6,-3),u.maxTargetRadius=85,u.target.set(0,4,0);function d(){let X=l.position.distanceTo(u.target),dt=Math.min(4,Math.max(.4,X*.04));Math.abs(dt-l.near)>dt*.08&&(l.near=dt,l.far=Math.max(900,X*6),l.updateProjectionMatrix())}let f=0,g=0,M=!1,m=!0,p=new Set,b=new Set,T=[],v=new Set,w=1,x=0,R=0,y=0,A=0,P=[],D=0,U=0,G=0;function k(){!f&&!g&&(f=requestAnimationFrame(J))}function B(){!f&&!g&&(g=setTimeout(()=>{g=0,k()},33))}function Z(X){Math.abs(X-R)<.01||(R=X,r.setPixelRatio(X),r.setSize(i.clientWidth||1,i.clientHeight||1,!1))}function J(X){f=0;let dt=u.update();for(let Xt of v){let se=Math.min(1,(X-(Xt.bas??=X))/Xt.sure);Xt.adim(Jy(se)),Xt.golge&&(m=!0),se>=1?(v.delete(Xt),Xt.bitti?.()):dt=!0}for(let Xt of p)Xt(X)&&(dt=!0);let Et=!1;for(let Xt of b)Xt(X,A?Math.min(100,X-A):33)&&(Et=!0);A=Et?X:0;let Kt=dt||Et;clearTimeout(G),d(),Z(w*$h[x]),m&&(r.shadowMap.needsUpdate=!0,m=!1),r.render(a,l),Gt(),dt?st(X):(y=0,P=[]),dt?k():Et&&B(),!Kt&&x>0&&(G=setTimeout(()=>{Z(w),r.render(a,l),Gt()},300))}function st(X){y&&P.push(X-y),y=X;let dt=P.length,Et=P.reduce((se,Dt)=>se+Dt,0),Kt=dt>=6&&dt<24&&Et>=450&&[...P].sort((se,Dt)=>se-Dt)[dt>>1]>50;if(dt<24&&!Kt)return;let Xt=Et/dt;P=[],!(X-U<(Kt?300:500))&&(Xt>26&&x<$h.length-1?(x++,D=0,U=X,e("kalite",x)):Xt<19&&x>0&&++D>=3&&(x--,D=0,U=X))}function F(){let X=i.clientWidth||1,dt=i.clientHeight||1;w=Math.max(.5,Math.min(s,2,Math.sqrt(Zy/(X*dt)))),R=0,Z(w*$h[x]),l.aspect=X/dt,zt();for(let Et of T)Et.w=0;ie=0,C=null,!M&&kt&&ht(kt,!0),k()}let Y=0,$=0;new ResizeObserver(()=>{clearTimeout(Y);let X=performance.now();if(document.documentElement.dataset.suruklenen&&X-$>125){$=X,F();return}Y=setTimeout(()=>{$=performance.now(),F()},110)}).observe(i),window.addEventListener("bote-erisim",()=>{u.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let X of T)X.w=0;k()});let ct=0;function zt(){let X=i.clientWidth||1,dt=i.clientHeight||1;ct>0?l.setViewOffset(X,dt,0,Math.min(ct,dt*.9)/2,X,dt):l.clearViewOffset(),l.updateProjectionMatrix()}function te(X,dt=!1){ct=Math.max(0,X||0),C=null,zt(),!M&&kt?ht(kt,dt):k()}u.addEventListener("change",k),u.addEventListener("start",()=>{M=!0,e("kamera-elle")});let kt=null,j=new I(0,1,0),it=new I,Mt=new I,Lt=new I,xt=new I,yt=new I,Jt=X=>X.isBox3?X:new bn(new I(X[0],X[1],X[2]),new I(X[3],X[4],X[5]));function et(X,dt){let Et=n?.()||{},Kt=Math.min(ct,dt*.9),Xt=Et.sol??16,se=X-(Et.sag??16),Dt=Et.ust??16,xe=dt-Math.max(Et.alt??16,Kt+12);if(se-Xt<80){let oe=X/2;Xt=oe-40,se=oe+40}if(xe-Dt<80){let oe=(Math.max(0,Dt)+Math.max(Dt+80,xe))/2;Dt=oe-40,xe=oe+40}return{x0:Xt,y0:Dt,x1:se,y1:xe,engel:Et.engel||[]}}function lt(X,dt){let Et=i.clientWidth||1,Kt=i.clientHeight||1,Xt=Jt(X),se=new I(...dt).normalize();it.crossVectors(j,se).normalize(),Mt.crossVectors(se,it),Lt.copy(se).negate();let Dt=C=et(Et,Kt),xe=Math.tan(l.fov*Math.PI/360),oe=xe*(Et/Kt),pe=Math.min(ct,Kt*.9)/Kt,Le=(Dt.x0/Et*2-1)*oe,ye=(Dt.x1/Et*2-1)*oe,Ie=(1-Dt.y0/Kt*2-pe)*xe,yn=(1-Dt.y1/Kt*2-pe)*xe;Xt.getCenter(xt);let $e=[],Mi=[],nn=[];for(let sn=0;sn<8;sn++)yt.set(sn&1?Xt.max.x:Xt.min.x,sn&2?Xt.max.y:Xt.min.y,sn&4?Xt.max.z:Xt.min.z).sub(xt),$e.push(yt.dot(it)),Mi.push(yt.dot(Mt)),nn.push(yt.dot(Lt));let En=0;for(let sn=0;sn<8;sn++){En=Math.max(En,2-nn[sn]);for(let Zn=0;Zn<8;Zn++)En=Math.max(En,($e[sn]-$e[Zn]-ye*nn[sn]+Le*nn[Zn])/(ye-Le),(Mi[sn]-Mi[Zn]-Ie*nn[sn]+yn*nn[Zn])/(Ie-yn))}En=Math.min(u.maxDistance,Math.max(u.minDistance,En));let gs=(sn,Zn,S)=>{let N=-1/0,q=1/0;for(let V=0;V<8;V++)N=Math.max(N,sn[V]-S*(nn[V]+En)),q=Math.min(q,sn[V]-Zn*(nn[V]+En));if(!(q>N))return(N+q)/2;let W=V=>{let At=-1/0,It=1/0;for(let Tt=0;Tt<8;Tt++){let Nt=(sn[Tt]-V)/(nn[Tt]+En);Nt>At&&(At=Nt),Nt<It&&(It=Nt)}return S-At-(It-Zn)};for(let V=0;V<32;V++){let At=(N+q)/2;W(At)>0?q=At:N=At}return(N+q)/2},_s=gs($e,Le,ye),_c=gs(Mi,yn,Ie),Za=xt.clone().addScaledVector(it,_s).addScaledVector(Mt,_c);return{merkez:Za,konum:Za.clone().addScaledVector(se,En)}}function ht(X,dt=!1){kt=X,M=!1;let{merkez:Et,konum:Kt}=lt(X.kutu,X.yon);if(dt||Cf())return l.position.copy(Kt),u.target.copy(Et),u.update(),k(),Promise.resolve();let Xt=l.position.clone(),se=u.target.clone();return u.enabled=!1,pt(650,Dt=>{l.position.lerpVectors(Xt,Kt,Dt),u.target.lerpVectors(se,Et,Dt),l.lookAt(u.target)}).then(()=>{u.enabled=!0,u.update()})}function ut(){if(!kt)return null;l.updateMatrixWorld();let X=i.clientWidth||1,dt=i.clientHeight||1,Et=Jt(kt.kutu),Kt=1/0,Xt=-1/0,se=1/0,Dt=-1/0;for(let xe=0;xe<8;xe++){yt.set(xe&1?Et.max.x:Et.min.x,xe&2?Et.max.y:Et.min.y,xe&4?Et.max.z:Et.min.z).project(l);let oe=(yt.x+1)/2*X,pe=(1-yt.y)/2*dt;Kt=Math.min(Kt,oe),Xt=Math.max(Xt,oe),se=Math.min(se,pe),Dt=Math.max(Dt,pe)}return{kutu:{x0:Kt,y0:se,x1:Xt,y1:Dt},guvenli:et(X,dt),w:X,h:dt}}function pt(X,dt,Et=!1){return Cf()?(dt(1),Et&&(m=!0),k(),Promise.resolve()):new Promise(Kt=>{v.add({sure:X,adim:dt,bitti:Kt,golge:Et}),k()})}let Wt=i.parentElement.querySelector(".etiketler"),Vt=i.parentElement.querySelector(".isaretler")||Wt,$t="http://www.w3.org/2000/svg",jt=document.createElementNS($t,"svg");jt.setAttribute("class","cizgiler"),jt.setAttribute("aria-hidden","true"),Wt.appendChild(jt);let L=[],de=[],ie=0,C=null,_=new I,O=new I,H=new I,Q=X=>{for(let dt=X;dt;dt=dt.parent)if(!dt.visible)return!1;return!0};function gt(X){for(let dt of T)dt.el.remove(),dt.cizgi.remove(),dt.nokt.remove();T.length=0;for(let{nokta:dt,metin:Et,tur:Kt}of X){let Xt=document.createElement("div");Xt.className="etiket"+(Kt?` etiket-${Kt}`:""),Xt.textContent=Et,Wt.appendChild(Xt);let se=document.createElementNS($t,"line"),Dt=document.createElementNS($t,"circle");Dt.setAttribute("r","4.5"),jt.append(se,Dt),T.push({el:Xt,nokta:dt,cizgi:se,nokt:Dt,w:0,h:0})}k()}function vt(X){for(let dt of L)dt.el.remove();L.length=0;for(let dt of X)dt.el.hidden=!0,Vt.appendChild(dt.el),L.push({...dt,acik:!1});de=L.map((dt,Et)=>[dt,Et]).sort((dt,Et)=>(Et[0].oncelik??1)-(dt[0].oncelik??1)||dt[1]-Et[1]).map(([dt])=>dt),ie=0,C=null,k()}function tt(X,dt){for(let Et=L.length-1;Et>=0;Et--){let Kt=L[Et].el;if(Kt.hidden)continue;let Xt=Kt.getBoundingClientRect(),se=Xt.width/2;if(se&&Math.hypot(X-Xt.left-se,dt-Xt.top-Xt.height/2)<=se+2)return Kt}return null}function rt(X,dt){if(!L.length)return;ie||(ie=parseFloat(getComputedStyle(Vt).getPropertyValue("--isaret"))||44);let Et=C||(C=et(X,dt)),Kt=ie+4,Xt=[],se=document.activeElement,Dt=Math.tan(l.fov*Math.PI/360),xe=L.some(oe=>oe.el===se)?[...de].sort((oe,pe)=>(pe.el===se)-(oe.el===se)):de;for(let oe of xe){let pe=!1,Le=0,ye=0;(!oe.nesne||Q(oe.nesne))&&(oe.nesne?O.copy(oe.yerel).applyMatrix4(oe.nesne.matrixWorld):O.copy(oe.nokta),H.copy(O).applyMatrix4(l.matrixWorldInverse),H.z<-l.near&&(_.copy(O).project(l),Le=(_.x+1)/2*X,ye=(1-_.y)/2*dt,pe=Le>=Et.x0&&Le<=Et.x1&&ye>=Et.y0&&ye<=Et.y1&&!Et.engel.some(Ie=>Le>Ie.x0-Kt/2&&Le<Ie.x1+Kt/2&&ye>Ie.y0-Kt/2&&ye<Ie.y1+Kt/2),pe&&oe.adim&&(pe=oe.adim*dt/(2*-H.z*Dt)>=ie),pe&&oe.el!==se&&(pe=!Xt.some(Ie=>Math.abs(Ie.x-Le)<Kt&&Math.abs(Ie.y-ye)<Kt)))),pe&&(Xt.push({x:Le,y:ye}),oe.el.style.transform=`translate3d(${Math.round(Le)}px,${Math.round(ye)}px,0)`),oe.acik!==pe&&(oe.acik=pe,oe.el.hidden=!pe)}}let St=(X,dt,Et)=>(_.copy(X).project(l),{x:(_.x+1)/2*dt,y:(1-_.y)/2*Et,gor:_.z<1&&Math.abs(_.x)<1.05&&Math.abs(_.y)<1.05});function Gt(){let X=i.clientWidth,dt=i.clientHeight;if(rt(X,dt),!T.length)return;jt.setAttribute("width",X),jt.setAttribute("height",dt);let Et=[],Kt=8,Xt=30,se=T.map(Dt=>({e:Dt,p:St(Dt.nokta,X,dt)})).sort((Dt,xe)=>xe.p.y-Dt.p.y);for(let{e:Dt,p:xe}of se){Dt.w||(Dt.w=Dt.el.offsetWidth,Dt.h=Dt.el.offsetHeight);let oe=Math.min(Math.max(xe.x-Dt.w/2,6),X-Dt.w-6),pe=xe.y-Xt-Dt.h,Le=!1;for(let Ie=0;Ie<6;Ie++){let yn=Et.find($e=>oe<$e.x+$e.w+Kt&&oe+Dt.w+Kt>$e.x&&pe<$e.y+$e.h+Kt&&pe+Dt.h+Kt>$e.y);if(!yn)break;if(pe=yn.y-Dt.h-Kt,pe<4){pe=xe.y+Xt,Le=!0,oe=Math.min(Math.max(yn.x+yn.w+Kt,6),X-Dt.w-6);break}}Et.push({x:oe,y:pe,w:Dt.w,h:Dt.h});let ye=xe.gor?"1":"0";Dt.el.style.opacity=ye,Dt.cizgi.style.opacity=ye,Dt.nokt.style.opacity=ye,Dt.el.style.transform=`translate3d(${Math.round(oe)}px,${Math.round(pe)}px,0)`,Dt.cizgi.setAttribute("x1",xe.x.toFixed(1)),Dt.cizgi.setAttribute("y1",xe.y.toFixed(1)),Dt.cizgi.setAttribute("x2",(oe+Dt.w/2).toFixed(1)),Dt.cizgi.setAttribute("y2",(Le?pe:pe+Dt.h).toFixed(1)),Dt.nokt.setAttribute("cx",xe.x.toFixed(1)),Dt.nokt.setAttribute("cy",xe.y.toFixed(1))}}let wt=new Ca,bt=new ft,Bt=[],Zt=new Set,z=new I,E=new I,nt=new I,K=X=>!X.isMesh||X.isInstancedMesh||X===h||!Q(X)?!1:(Array.isArray(X.material)?X.material:[X.material]).some(Et=>Et&&Et.visible!==!1&&Et.blending!==Pa&&!(Et.transparent&&Et.opacity<.2));function ot(X,dt,Et=1){bt.set(X,dt),wt.setFromCamera(bt,l);let Kt=wt.intersectObjects(a.children,!0).find(ye=>K(ye.object)),Xt=Kt?Kt.point:null,se=Kt?Kt.distance:1/0,Dt=i.clientHeight||1,xe=Math.tan(l.fov*Math.PI/360),oe=null,pe=1/0,Le=1/0;for(let ye of Bt){let Ie=ye.userData;if(Ie.etkin===!1||!Q(ye))continue;let yn=!1;if(Xt&&Ie.yari){z.copy(Xt),ye.worldToLocal(z),E.setFromMatrixScale(ye.matrixWorld);let[nn,En,gs]=Ie.yari,_s=.25;yn=Math.abs(z.x)<=nn+_s/E.x&&Math.abs(z.y)<=En+_s/E.y&&Math.abs(z.z)<=gs+_s/E.z}if(!yn&&Ie.ince&&ye.isMesh){let nn=wt.intersectObject(ye,!1)[0];yn=!!nn&&nn.distance<=se+.5}if(!yn||(nt.setFromMatrixPosition(ye.matrixWorld),Ie.minPx&&Ie.minAdim&&(H.copy(nt).applyMatrix4(l.matrixWorldInverse),Ie.minAdim*Dt/(2*Math.max(.01,-H.z)*xe)<Ie.minPx*Et)))continue;let $e=Ie.hacim??1/0,Mi=Xt?nt.distanceToSquared(Xt):0;($e<pe*.99||$e<=pe*1.01&&Mi<Le)&&(oe=ye,pe=$e,Le=Mi)}return{vekil:oe,nokta:Xt?Xt.clone():oe?new I().setFromMatrixPosition(oe.matrixWorld):null}}let mt=new Set,at=null,Pt=!1;i.addEventListener("pointerdown",X=>{if(mt.add(X.pointerId),mt.size>1){Pt=!0,at=null;return}at=Pt?null:{x:X.clientX,y:X.clientY,t:performance.now(),id:X.pointerId}}),i.addEventListener("pointerup",X=>{let dt=at;if(mt.delete(X.pointerId),mt.size||(Pt=!1),!dt||dt.id!==X.pointerId||(at=null,Math.hypot(X.clientX-dt.x,X.clientY-dt.y)>9||performance.now()-dt.t>600))return;let Et=L.length?tt(X.clientX,X.clientY):null;if(Et){Et.click();return}let Kt=i.getBoundingClientRect(),Xt=X.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,se=ot((X.clientX-Kt.left)/Kt.width*2-1,-((X.clientY-Kt.top)/Kt.height)*2+1,Xt);for(let Dt of Zt)Dt(se.vekil?se.vekil.userData:null,se.nokta,se.vekil)}),i.addEventListener("pointercancel",X=>{mt.delete(X.pointerId),mt.size||(Pt=!1),at=null});let Ot=null,we=X=>{X!==Ot&&(Ot?.classList.remove("ustunde"),X?.classList.add("ustunde"),Ot=X,i.style.cursor=X?"pointer":"")};return i.addEventListener("pointermove",X=>{X.pointerType==="mouse"&&!X.buttons&&we(L.length?tt(X.clientX,X.clientY):null)}),i.addEventListener("pointerleave",()=>we(null)),i.addEventListener("contextmenu",X=>X.preventDefault()),i.addEventListener("webglcontextlost",X=>{X.preventDefault(),e("baglam-kaybi")}),i.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),m=!0,k()}),F(),{renderer:r,scene:a,camera:l,controls:u,hedefler:Bt,iste:k,kameraGit:ht,tween:pt,etiketKoy:gt,isaretKoy:vt,gorunurAlan:te,golgeYenile:()=>{m=!0,k()},kareGuncelleyici:X=>(p.add(X),k(),()=>p.delete(X)),yavasGuncelleyici:X=>(b.add(X),k(),()=>b.delete(X)),dokunmaDinle:X=>Zt.add(X),sec:ot,kadrajOlc:ut,guvenliYenile:()=>{C=null,ie=0,k()},yakinlas:X=>{let dt=l.position.clone().sub(u.target),Et=Math.min(u.maxDistance,Math.max(u.minDistance,dt.length()*X)),Kt=l.position.clone(),Xt=u.target.clone().addScaledVector(dt.normalize(),Et);return M=!0,pt(260,se=>l.position.lerpVectors(Kt,Xt,se))},arkaPlan:X=>{r.setClearColor(new ee(X),1),k()},sonHedef:()=>kt,kalite:()=>({kademe:x,piksel:Math.round(R*100)/100,tam:Math.round(w*100)/100})}}function ac(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new qe,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=If(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][d]);let g=If(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function If(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Xe(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let M=h.getComponent(d,g);o.setComponent(d+u,g,M)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Xa=new I;function ei(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Xa.copy(t),Xa[n]=0,Xa.normalize();let c=.5*a/(a+o),h=1-Xa.angleTo(i)/l;return Math.sign(Xa[e])===1?h*c:o/(a+o)+c+c*(1-h)}var oc=class i extends tn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,M=new I,m=.5/a;for(let p=0,b=0;p<u.length;p+=3,b+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:M.set(1,0,0),f[b+0]=ei(M,c,"z","y",r,n),f[b+1]=1-ei(M,c,"y","z",r,e);break;case 1:M.set(-1,0,0),f[b+0]=1-ei(M,c,"z","y",r,n),f[b+1]=1-ei(M,c,"y","z",r,e);break;case 2:M.set(0,1,0),f[b+0]=1-ei(M,c,"x","z",r,t),f[b+1]=ei(M,c,"z","x",r,n);break;case 3:M.set(0,-1,0),f[b+0]=1-ei(M,c,"x","z",r,t),f[b+1]=1-ei(M,c,"z","x",r,n);break;case 4:M.set(0,0,1),f[b+0]=1-ei(M,c,"x","y",r,t),f[b+1]=1-ei(M,c,"y","x",r,e);break;case 5:M.set(0,0,-1),f[b+0]=ei(M,c,"x","y",r,t),f[b+1]=1-ei(M,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var be=(i,t,e,n=0,s=0,r=0)=>{let a=new tn(i,t,e);return a.translate(n,s,r),a};function Ne(i,t,e,n,s=0,r=0,a=0,o=2){let l=new oc(i,t,e,o,Math.max(.05,Math.min(n,i/2-.01,t/2-.01,e/2-.01)));return l.translate(s,r,a),l}function Ue(i,t,e=0,n=0,s=0,{seg:r=20,eksen:a="y",rUst:o=i,acik:l=!1}={}){let c=new ua(o,i,t,r,1,l);return a==="x"?c.rotateZ(-Math.PI/2):a==="z"&&c.rotateX(Math.PI/2),c.translate(e,n,s),c}function _i(i,t){let e=new _t(ac(i.map(n=>n.index?n.toNonIndexed():n),!1),t);return e.matrixAutoUpdate=!1,e}function Re(i,t){let e=new ee(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Xe(s,3)),i}function Pf(i,t=.22,e=10,n=6){let s=new _r(i.map(r=>r.isVector3?r:new I(...r)),!1,"catmullrom",.35);return new Ps(s,Math.max(6,Math.round(s.getLength()*e/10)),t,n,!1)}function In(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}var $y=4;function ni(i,{tekrar:t=!1,aniso:e=!0}={}){let n=new As(i);return n.colorSpace=rn,e&&(n.anisotropy=$y),t&&(n.wrapS=n.wrapT=Ai),n}var ds='"DejaVu Sans", "Segoe UI", Helvetica, Arial, sans-serif',Be=(i,t=.6,e=0,n={})=>new Ce({color:i,roughness:t,metalness:e,...n}),Ft={};function en(){return Ft.hazir||Object.assign(Ft,{hazir:!0,kasa:Be(2961463,.5,.35),kasaIc:Be(1842723,.7,.2),plastik:Be(2237739,.55),plastikAcik:Be(7041144,.55),plastikBeyaz:Be(15330286,.5),alumin:Be(11975878,.38,.9),aluminKoyu:Be(4870234,.42,.85),celik:Be(13028049,.3,1),bakir:Be(13203258,.32,1),altin:Be(14726734,.3,1),cip:Be(1316122,.6),kagit:Be(16185074,.92),klavyeGovde:Be(4540754,.55),renkli:Be(16777215,.5,.3,{vertexColors:!0}),kablo:Be(1513500,.65),kabloKirmizi:Be(12858667,.6),kabloSari:Be(14262811,.6),kabloYesil:Be(3120727,.6),kabloMavi:Be(2909129,.6),fanKanat:Be(3159100,.55,0,{side:fn}),fanCerceve:Be(1908773,.6),cam:Be(724242,.08,.2),lensCam:Be(1053468,.05,.6),pcbKenar:Be(1002036,.5),soket:Be(2764083,.5),ledYesil:new Ze({color:3264619}),ledKirmizi:new Ze({color:16729144}),ledMavi:new Ze({color:5088255}),ledKapali:new Ze({color:2764342}),vurgu:new Ze({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new pr({color:6962672}),gorunmez:new Ze({visible:!1})}),Ft}function kf(i){i.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}var Xb=new ve;function ke(i,t,e,n,s=0,r=0,a=0){let o=new Ye;return o.position.set(s,r,a),o.userData={...i,yari:[t/2,e/2,n/2],hacim:i.hacim??t*e*n},o.updateMatrixWorld(),o}function fs(i,t,e,n,s,r=null){let a=new Ye;return a.position.set(e,n,s),a.name="kesif-"+t,r&&(a.userData.yon=new I(...r).normalize()),i.add(a),{id:t,nesne:a,yerel:new I}}function Lf(i,t){en();let[e,n,s,r,a,o]=t,l=new Te,c=new tn(r+1.2,a+1.2,o+1.2),h=new _t(c,Ft.vurgu);return h.renderOrder=2,l.add(h,new la(new da(c),Ft.vurguCizgi)),l.position.set(e,n,s),i.add(l),l}var ii={x0:-108,x1:108,z0:-76,z1:56,ust:-.2,kalin:5},_e={x:-86,z:-23,w:40,h:90,d:86},Ve={x:4,z:-46},Pn=[{x:-53,z:-46},{x:61,z:-46}],qn={x:0,z:22},kn={x:58,z:22},Kn={x:88,z:-43},Ln={x:-55,z:34},hn={x:90,z:34},xi={x:-33,z:47,don:.5},si={x:4,y:66.6,z:-46};var On=1024,Dn=576,jy=[[43,24],[85,48],[256,144],[On,Dn]],Df=[[80,45],[160,90],[480,270],[1920,1080]];function yi(i,t,e,n,s,r,a,o){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath(),a&&(i.fillStyle=a,i.fill()),o&&(i.strokeStyle=o,i.lineWidth=2,i.stroke())}var Qh=(i,t)=>{i.beginPath(),t.forEach(([e,n],s)=>s?i.lineTo(e,n):i.moveTo(e,n)),i.closePath(),i.fill()},Gi=(i,t,e,n,s,r,{kalin:a=!1,hiza:o="left"}={})=>{i.font=`${a?700:500} ${s}px ${ds}`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(t,e,n)};function Ya(i,t,e,n,s,r){i.save(),i.shadowColor="rgba(20,24,40,.25)",i.shadowBlur=22,i.shadowOffsetY=6,yi(i,t,e,n,s,10,"#ffffff"),i.restore(),yi(i,t,e,n,38,10,"#e7ebf2"),i.fillStyle="#e7ebf2",i.fillRect(t,e+24,n,14),Gi(i,r,t+16,e+20,19,"#2b3342",{kalin:!0});for(let a=0;a<3;a++)i.fillStyle=["#b8c0cf","#b8c0cf","#e5654f"][a],i.beginPath(),i.arc(t+n-24-a*26,e+19,8,0,Math.PI*2),i.fill()}function jh(i,t,e,n,s){n==="bilgisayar"&&(yi(i,t+6,e+6,44,30,4,"#2b3342"),yi(i,t+10,e+10,36,22,2,"#7fb4f5"),i.fillStyle="#2b3342",i.fillRect(t+22,e+36,12,6),i.fillRect(t+14,e+42,28,4)),n==="klasor"&&(yi(i,t+6,e+14,44,30,4,"#f2b53e"),yi(i,t+6,e+8,20,10,3,"#e29f25")),n==="cop"&&(i.fillStyle="#9aa4b6",Qh(i,[[t+14,e+14],[t+42,e+14],[t+38,e+46],[t+18,e+46]]),i.fillStyle="#7e889b",i.fillRect(t+10,e+8,36,6)),Gi(i,s,t+28,e+62,15,"#1d2433",{kalin:!0,hiza:"center"})}function Qy(i,t){if(t.mod==="kapali"){i.fillStyle="#0a0b0e",i.fillRect(0,0,On,Dn);return}if(t.mod==="acilis"){i.fillStyle="#0c1018",i.fillRect(0,0,On,Dn),i.strokeStyle="#7c8aa8",i.lineWidth=10,i.lineCap="round",i.beginPath(),i.arc(On/2,Dn/2-20,46,-1.2,3.2),i.stroke(),Gi(i,"Ba\u015Flat\u0131l\u0131yor",On/2,Dn/2+70,26,"#aab4c8",{hiza:"center"});return}i.fillStyle="#d5e6fb",i.fillRect(0,0,On,Dn),i.fillStyle="#a2c8f3",Qh(i,[[0,410],[170,320],[350,390],[560,290],[770,380],[1024,310],[1024,576],[0,576]]),i.fillStyle="#6ea4e8",Qh(i,[[0,470],[230,410],[430,460],[650,400],[870,460],[1024,420],[1024,576],[0,576]]),jh(i,28,24,"bilgisayar","Bilgisayar"),jh(i,28,120,"klasor","Belgeler"),jh(i,28,216,"cop","\xC7\xF6p"),Ya(i,150,56,470,340,"Yaz\u0131 Defteri"),i.fillStyle="#2b3342",i.font=`500 26px ${ds}`,i.textAlign="left",i.textBaseline="alphabetic";let e=t.yazi||"",n=[],s="";for(let l of e){if(l===`
`){n.push(s),s="";continue}i.measureText(s+l).width>420&&(n.push(s),s=""),s+=l}n.push(s);let r=n.slice(-7);r.forEach((l,c)=>i.fillText(l,174,130+c*40)),e||(i.fillStyle="#9aa4b6",i.fillText("Bir tu\u015Fa bas",174,130));let a=130+(r.length-1)*40;if(i.fillStyle="#7c4dff",i.fillRect(174+i.measureText(r[r.length-1]).width+3,a-24,3,32),t.kamera&&(Ya(i,650,70,330,270,"Kamera"),i.fillStyle="#26324a",i.fillRect(662,118,306,210),i.fillStyle="#8ea6d6",i.beginPath(),i.arc(815,205,40,0,Math.PI*2),i.fill(),i.fillStyle="#5f7fc2",i.beginPath(),i.ellipse(815,330,86,70,0,Math.PI,0),i.fill(),i.strokeStyle="#e5654f",i.lineWidth=4,i.strokeRect(670,126,290,194),i.fillStyle="#e5654f",i.beginPath(),i.arc(692,146,7,0,Math.PI*2),i.fill(),Gi(i,"Kay\u0131t",708,147,15,"#ffffff",{kalin:!0})),t.ses!=null){Ya(i,650,360,330,150,"Ses Kayd\u0131");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*1.7+t.ses*9)*Math.cos(l*.6+t.ses*5))*66;i.fillStyle="#7c4dff",i.fillRect(668+l*10,450-c/2-8,6,c)}Gi(i,"Dinleniyor",668,492,15,"#5b6579",{kalin:!0})}if(t.cal!=null){Ya(i,650,360,330,150,"M\xFCzik");for(let l=0;l<30;l++){let c=8+Math.abs(Math.sin(l*.9+t.cal*7)*Math.cos(l*.4+t.cal*3))*66;i.fillStyle="#7c4dff",i.fillRect(668+l*10,450-c/2-8,6,c)}Gi(i,"\xC7al\u0131yor",668,492,15,"#5b6579",{kalin:!0})}t.yazdir!=null&&(Ya(i,250,200,380,160,"Yazd\u0131r"),Gi(i,t.yazdir>=1?"Yazd\u0131r\u0131ld\u0131":"Yaz\u0131c\u0131ya g\xF6nderiliyor",274,262,20,"#2b3342",{kalin:!0}),yi(i,274,296,332,22,11,"#e1e6ef"),t.yazdir>0&&yi(i,274,296,Math.max(22,332*Math.min(1,t.yazdir)),22,11,"#7c4dff")),i.fillStyle="#1f2533",i.fillRect(0,Dn-44,On,44),yi(i,12,Dn-38,32,32,7,"#7c4dff");for(let l=0;l<3;l++)yi(i,62+l*46,Dn-36,36,28,6,l===0?"#3a4560":"#2d3548");if(Gi(i,"10:24",On-22,Dn-22,19,"#dfe5f1",{kalin:!0,hiza:"right"}),t.menu){let l=Math.min(t.imlec.x+6,On-170),c=Math.min(t.imlec.y+26,Dn-150);i.save(),i.shadowColor="rgba(20,24,40,.3)",i.shadowBlur=16,i.shadowOffsetY=4,yi(i,l,c,160,104,8,"#ffffff"),i.restore(),["Kes","Kopyala","Yap\u0131\u015Ft\u0131r"].forEach((h,u)=>Gi(i,h,l+16,c+22+u*30,19,"#2b3342",{kalin:u===1}))}let o=t.imlec||{x:760,y:220};t.tik&&(i.strokeStyle="#7c4dff",i.lineWidth=4,i.beginPath(),i.arc(o.x,o.y,18+(t.tik-1)*20,0,Math.PI*2),i.stroke()),i.fillStyle="#ffffff",i.strokeStyle="#111827",i.lineWidth=2.5,i.beginPath(),i.moveTo(o.x,o.y),i.lineTo(o.x,o.y+30),i.lineTo(o.x+8,o.y+23),i.lineTo(o.x+14,o.y+36),i.lineTo(o.x+20,o.y+33),i.lineTo(o.x+14,o.y+21),i.lineTo(o.x+24,o.y+21),i.closePath(),i.fill(),i.stroke()}function Nf(){let[i,t]=In(On,Dn),[e,n]=In(On,Dn),[s,r]=In(On,Dn),a=ni(e,{aniso:!1}),o={mod:"masaustu",yazi:"",imlec:{x:760,y:230},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3};function l(){Qy(t,o);let[c,h]=jy[o.kademe];c>=On?(n.imageSmoothingEnabled=!0,n.drawImage(i,0,0)):(s.width=c,s.height=h,r.imageSmoothingEnabled=!0,r.drawImage(i,0,0,c,h),n.imageSmoothingEnabled=!1,n.drawImage(s,0,0,c,h,0,0,On,Dn)),a.needsUpdate=!0}return l(),{tex:a,durum:o,guncelle:l}}function Of(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Bf=(i,t)=>{let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]},tu=i=>i<0?0:i>255?255:i,Uf=i=>i*i*(3-2*i),hc={},lc=(i,t)=>{let e=performance.now(),n=t();return hc[i]=Math.round((performance.now()-e)*10)/10,n};function tv(i,t,e,n,s){let r=Of(s),a=new Float32Array(e*n),o=new Float32Array(i*t);for(let u=0;u<a.length;u++)a[u]=r();let l=new Int32Array(i),c=new Int32Array(i),h=new Float32Array(i);for(let u=0;u<i;u++){let d=u*e/i,f=Math.floor(d);l[u]=f%e,c[u]=(f+1)%e,h[u]=Uf(d-f)}for(let u=0;u<t;u++){let d=u*n/t,f=Math.floor(d),g=f%n*e,M=(f+1)%n*e,m=Uf(d-f),p=u*i;for(let b=0;b<i;b++){let T=a[g+l[b]],v=a[g+c[b]],w=a[M+l[b]],x=a[M+c[b]],R=h[b];o[p+b]=(T+(v-T)*R)*(1-m)+(w+(x-w)*R)*m}}return o}function cc(i,t,e,n){let s=new Float32Array(i*t),r=0;e.forEach(([a,o,l],c)=>{let h=tv(i,t,a,o,n+c*7919);for(let u=0;u<s.length;u++)s[u]+=h[u]*l;r+=l});for(let a=0;a<s.length;a++)s[a]/=r;return s}function eu(i,t,e,n,s=!0){let[r,a]=Bf(t,e),o=a.createImageData(t,e),l=o.data,c=(h,u)=>(s?(h=(h+t)%t,u=(u+e)%e):(h=h<0?0:h>=t?t-1:h,u=u<0?0:u>=e?e-1:u),i[u*t+h]);for(let h=0;h<e;h++)for(let u=0;u<t;u++){let d=(c(u-1,h)-c(u+1,h))*n,f=(c(u,h+1)-c(u,h-1))*n,g=1,M=Math.hypot(d,f,g);d/=M,f/=M,g/=M;let m=(h*t+u)*4;l[m]=(d*.5+.5)*255,l[m+1]=(f*.5+.5)*255,l[m+2]=(g*.5+.5)*255,l[m+3]=255}return a.putImageData(o,0,0),r}var Hi=4;function Nr(i,t,e=!1,n=Hi){let s=new As(i);return s.colorSpace=t?rn:gi,s.minFilter=Ri,s.magFilter=an,s.anisotropy=n,e&&(s.wrapS=s.wrapT=Ai),s}var ev=i=>new ft(i,i);function nv(i,t,e,n,s,r,a,o,l="0,0,0"){i.save(),i.shadowColor=`rgba(${l},${o})`,i.shadowBlur=a,i.shadowOffsetX=t+100,i.shadowOffsetY=0,i.fillStyle="#000",i.fillRect(e-s/2-t-100,n-r/2,s,r),i.restore()}function iv({x0:i,x1:t,z0:e,z1:n},s=[],r=Hi){let c=lc("ahsap-damar",()=>{let d=cc(1024,640,[[2,11,1],[4,23,.45]],2645),f=cc(1024,640,[[28,220,1],[14,420,.7]],2746),g=cc(1024,640,[[2,3,1],[6,9,.35]],2847),M=new Float32Array(1024*640),m=new Float32Array(1024*640);for(let p=0;p<M.length;p++){let b=.5+.5*Math.sin(d[p]*40+f[p]*1.6),T=Math.pow(b,1.8);m[p]=Math.min(1,Math.max(0,T*.5+f[p]*.3)),M[p]=.55*m[p]+.45*f[p]}return{ton:m,yuk:M,renk:g}}),h=lc("ahsap-albedo",()=>{let[d,f]=Bf(1024,640),g=f.createImageData(1024,640),M=g.data,m=[203,172,131],p=[165,127,88];for(let v=0;v<1024*640;v++){let w=c.ton[v],x=(c.renk[v]-.5)*20,R=v*4;M[R]=tu(m[0]+(p[0]-m[0])*w+x),M[R+1]=tu(m[1]+(p[1]-m[1])*w+x*.85),M[R+2]=tu(m[2]+(p[2]-m[2])*w+x*.6),M[R+3]=255}f.putImageData(g,0,0);let b=v=>(v-i)/(t-i)*1024,T=v=>(v-e)/(n-e)*640;for(let v of s)nv(f,1024,b(v.x),T(v.z),v.w/(t-i)*1024,v.d/(n-e)*640,v.bulanik??22,v.alfa??.34,"52,34,18");return d}),u=lc("ahsap-normal",()=>eu(c.yuk,1024,640,3.2,!1));return{map:Nr(h,!0,!1,r),normalMap:Nr(u,!1,!1,r),normalScale:ev(.55)}}function Ff(i,t,e,n,s=Hi){let r=lc("mikro-"+n,()=>cc(i,i,t,n)),a=eu(r,i,i,e,!0);return Nr(a,!1,!0,s)}function sv(i=Hi){let e=new Float32Array(16384),n=Of(3868);for(let s=0;s<128;s++){let r=.35+n()*.65;for(let a=0;a<128;a++)e[s*128+a]=r}return Nr(eu(e,128,128,.9,!0),!1,!0,i)}var qa=null;function zf({aniz:i=4,izler:t=[],masa:e}){if(qa)return qa;Hi=Math.max(1,Math.min(8,i));let n=performance.now(),s={masa:iv(e,t,Hi),tozBoya:Ff(256,[[64,64,1],[128,128,.7]],1.1,31489,Hi),plastik:Ff(256,[[32,32,1],[96,96,.6]],.8,31490,Hi),firca:sv(Hi)};return hc.toplam=Math.round((performance.now()-n)*10)/10,qa=s,s}function uc(){if(!qa)throw new Error("dokuKur \xE7a\u011Fr\u0131lmad\u0131");return qa}var ki=fs;function Vf(){en();let i=uc().masa,t=new Ce({map:i.map,normalMap:i.normalMap,normalScale:i.normalScale,roughness:.62}),e=new _t(Ne(ii.x1-ii.x0,ii.kalin,ii.z1-ii.z0,1,0,ii.ust-ii.kalin/2,(ii.z0+ii.z1)/2,3),t);return e.name="masa",e.receiveShadow=!1,e.castShadow=!1,e}function Gf(){en();let i=new Te;i.name="monitor",i.position.set(Ve.x,0,Ve.z),i.add(_i([Ne(95,55,3.2,.9,0,39,0,3),Ne(64,38,3.6,1.8,0,40,-3.1,3)],Ft.plastik)),i.add(_i([Ne(34,1.2,22,.5,0,.6,3,3),Ne(7.5,12.8,2.4,.5,0,7.6,-3.8,3),Ne(12,3.4,6.4,.9,0,12.6,-3.6,3)],Ft.alumin)),i.add(_i([be(7,3.6,.5,14,24,-4.9),be(5.4,1.8,.5,-16,21.5,-4.9),be(2.4,1.3,.4,-16,22.1,-5.2)],Ft.cip));let t=Nf(),e=new _t(new mn(92,51.8),new Ze({map:t.tex,toneMapped:!1}));e.position.set(0,39.4,1.62),i.add(e);let n=new _t(new tn(.9,.35,.2),Ft.ledYesil);n.position.set(40.5,12.8,1.66),i.add(n);let s=ke({kesif:"monitor",parca:"monitor"},95,66,24,0,33,1),r=ke({kesif:"ekran",parca:"monitor"},92,51.8,1.2,0,39.4,1.7,0);return i.add(s,r),{grup:i,ekran:t,led:n,kesif:[ki(i,"monitor",30,56,3,[0,.3,1]),ki(i,"ekran",-8,44,2.4,[0,0,1])],ledAyarla:a=>{n.material=a?Ft.ledYesil:Ft.ledKapali},arka:new I(Ve.x-14,14.5,Ve.z-4.9)}}function Hf(){en();let i=new Te;i.name="kamera",i.position.set(si.x,si.y,si.z),i.add(_i([Ne(4.2,1.2,3.2,.4,0,.6,-.4),Ne(8.4,3.4,3.4,1.3,0,2.9,.4,3)],Ft.plastik));let t=new _t(Ue(.95,.5,0,2.9,2.2,{eksen:"z",seg:20}),Ft.lensCam);i.add(t);let e=new _t(new jn(1.05,.14,8,24),Ft.alumin);e.position.set(0,2.9,2.18),i.add(e);let n=new _t(new tn(.5,.3,.15),Ft.ledKapali);return n.position.set(2.6,3.7,2.15),i.add(n),i.add(ke({kesif:"web-kamerasi",parca:"kamera"},9,5,5,0,2.4,.3)),{grup:i,led:n,kesif:[ki(i,"web-kamerasi",0,5.2,1,[0,.3,1])],ledAyarla:s=>{n.material=s?Ft.ledYesil:Ft.ledKapali},ucu:new I(si.x,si.y+1,si.z-1.6)}}function Ur(i,t,e,n){let s=[];for(let r=0;r<i.length;r++){let a=i[r],o=i[(r+1)%i.length],l=t*a[0]+e*a[1]-n,c=t*o[0]+e*o[1]-n;if(l<=0&&s.push(a),l<0&&c>0||l>0&&c<0){let h=l/(l-c);s.push([a[0]+(o[0]-a[0])*h,a[1]+(o[1]-a[1])*h])}}return s}function nu(i,t,e){let n=new Cs;i.forEach(([r,a],o)=>o?n.lineTo(r,a):n.moveTo(r,a)),n.closePath();let s=new Mr(n,{depth:t,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});return s.rotateX(-Math.PI/2),s.translate(0,e,0),s}function Wf(){en();let i=new Te;i.name="fare",i.position.set(kn.x,0,kn.z);let t=5,e=9.6,n=2.7,s=[];for(let d=0;d<48;d++){let f=d/48*Math.PI*2,g=Math.cos(f),M=Math.sin(f);s.push([t*Math.sign(g)*Math.pow(Math.abs(g),2/n),e*Math.sign(M)*Math.pow(Math.abs(M),2/n)*(Math.sign(M)>0?.92:1)])}let r=new _t(nu(s,1.6,.9),new Ce({color:15133166,roughness:.45}));i.add(r);let a=Ur(Ur(Ur(s,1,0,-.1),0,-1,-1.2),0,1,9.99),o=Ur(Ur(Ur(s,-1,0,-.1),0,-1,-1.2),0,1,9.99),l=new Ce({color:15988216,roughness:.4}),c=new _t(nu(a.map(([d,f])=>[d*.97-.12,f*.97-.05]),.2,.85),l);c.position.y=.55;let h=new _t(nu(o.map(([d,f])=>[d*.97+.12,f*.97-.05]),.2,.85),l);h.position.y=.55,i.add(c,h);let u=new _t(Ue(.85,1,0,3.55,-4.4,{eksen:"x",seg:16}),Ft.fanCerceve);return i.add(u),i.rotation.y=0,i.add(ke({kesif:"fare",parca:"fare"},12.2,4.2,20,0,2,0)),i.add(ke({kesif:"fare-tekerlek",parca:"fare",tekerlek:!0},2.2,2.4,3.2,0,3.6,-4.4)),{grup:i,dSol:c,dSag:h,tekerlek:u,kesif:[ki(i,"fare",0,5.4,4),ki(i,"fare-tekerlek",0,4.8,-4.4)],tikla:d=>{(d?c:h).position.y=.3},birak:()=>{c.position.y=.55,h.position.y=.55},arka:new I(kn.x,1.2,kn.z-7.4)}}function Xf(){en();let i=new Te;i.name="hoparlorler";let t=[],e=[],n=new Is(.92,1,48),s=new Ce({color:2830134,roughness:.7}),r=new Ce({color:3488322,roughness:.55});return Pn.forEach((a,o)=>{let l=new Te;l.position.set(a.x,0,a.z),l.name="hoparlor"+(o+1),l.add(new _t(Ne(13,26,15,1.2,0,13.4,0,3),r)),l.add(_i([Ue(4.4,.7,0,8.5,7.5,{eksen:"z",seg:28,rUst:3.4}),Ue(1.7,.6,0,19.5,7.5,{eksen:"z",seg:20,rUst:1.5}),Ue(1.4,.8,0,8.5,7.9,{eksen:"z",seg:14,rUst:.9})],s));let c=(u,d,f)=>{let g=new _t(new jn(u,d,8,32),Ft.alumin);return g.position.set(0,f,7.5),g};if(l.add(c(4.6,.22,8.5),c(1.95,.16,19.5)),o===0){let u=new _t(new tn(.7,.35,.2),Ft.ledYesil);u.position.set(4,2.2,7.55),l.add(u),l.add(new _t(Ue(.9,.7,-4,2.2,7.7,{eksen:"z",seg:14}),Ft.alumin))}l.add(ke({kesif:"hoparlor",parca:"hoparlor"},13.2,26.4,15.4,0,13.4,0)),i.add(l),t.push(l);let h=[];for(let u=0;u<3;u++){let d=new _t(n,new Ze({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:fn}));d.visible=!1,d.raycast=()=>{},d.position.set(a.x,8.5,a.z+8),i.add(d),h.push(d)}e.push(h)}),{grup:i,tek:t,halkalar:e,kesif:Pn.map((a,o)=>ki(t[o],"hoparlor",0,28.4,0)),arka:Pn.map(a=>new I(a.x,3,a.z-7.2))}}function Yf(){en();let i=new Te;i.name="mikrofon",i.position.set(Ln.x,0,Ln.z);let[t,e]=In(128,128);e.fillStyle="#4a4f59",e.fillRect(0,0,128,128),e.fillStyle="#1b1d22";for(let o=0;o<128;o+=8)for(let l=0;l<128;l+=8)e.beginPath(),e.arc(o+4,l+4,2.1,0,Math.PI*2),e.fill();let n=ni(t,{tekrar:!0});n.repeat.set(6,4),i.add(_i([Ue(4.6,.9,0,.45,0,{seg:32,rUst:4.2}),Ue(.55,12,0,6.8,0)],Ft.aluminKoyu));let s=new Te;s.position.set(0,14.6,0),s.rotation.x=.35,s.add(new _t(new mr(2.3,5.4,6,20),new Ce({map:n,roughness:.45,metalness:.5})));let r=new _t(new jn(2.36,.26,8,28),Ft.alumin);r.rotation.x=Math.PI/2,s.add(r),i.add(s);let a=new _t(new tn(.8,.3,.3),Ft.ledKapali);return a.position.set(0,.9,4.3),i.add(a),i.add(ke({kesif:"mikrofon",parca:"mikrofon"},10,20,10,0,10,0)),{grup:i,led:a,kesif:[ki(i,"mikrofon",0,21.5,0)],ledAyarla:o=>{a.material=o?Ft.ledKirmizi:Ft.ledKapali},ucu:new I(Ln.x,.5,Ln.z-3.8),kafa:new I(Ln.x,15.6,Ln.z+1)}}function qf(){en();let i=new Te;i.name="kulaklik",i.position.set(hn.x,0,hn.z);let t=new _t(new jn(7.6,.85,10,32,Math.PI),Ft.plastik);t.position.y=4.2,i.add(t);let e=new _t(new tn(6,.5,1.6),Ft.plastikAcik);e.position.y=11.5,e.scale.set(1,1,1),i.add(e);let n=new Ce({color:2237739,roughness:.55,emissive:8146431,emissiveIntensity:0}),s=new Ce({color:2829878,roughness:.9,emissive:16088064,emissiveIntensity:0});for(let o of[-1,1]){i.add(new _t(Ue(3.9,2.8,o*8.2,4.2,0,{eksen:"x",seg:28}),n));let l=new _t(new jn(3.3,.95,8,28),new Ce({color:3817031,roughness:.9}));l.rotation.y=Math.PI/2,l.position.set(o*6.6,4.2,0),i.add(l),i.add(new _t(Ue(1.9,.4,o*9.7,4.2,0,{eksen:"x",seg:20}),Ft.alumin))}let r=new _t(Pf([[-9.7,3.4,.4],[-10.6,2.2,2.6],[-9,1.2,6.2],[-5.6,1.5,8.4]],.28),Ft.kablo);i.add(r);let a=new _t(new mr(.85,1.4,4,12),s);return a.rotation.z=Math.PI/2,a.rotation.y=.4,a.position.set(-4.7,1.6,8.6),i.add(a),i.add(ke({kesif:"kulaklik",parca:"kulaklik"},22,14,7,0,7,0)),i.add(ke({kesif:"kulaklik-mikrofon",parca:"kulaklik"},4,2.4,3,-4.7,1.7,8.6)),{grup:i,kupMal:n,ucMal:s,kesif:[ki(i,"kulaklik",0,15,0),ki(i,"kulaklik-mikrofon",-4.7,4,8.6)],ucu:new I(hn.x+9.7,4.2,hn.z)}}function Kf(){en();let i=new Te;i.name="usb-bellek";let t=new Ce({color:3107824,roughness:.4});i.add(new _t(Ne(3.7,1.7,9,.6,0,0,3.4+4.5,2),t)),i.add(new _t(be(2.6,.8,3.6,0,0,1.8),Ft.celik));let e=new _t(new tn(.7,.18,.7),Ft.ledKapali);return e.position.set(0,.88,10.2),i.add(e),i.add(ke({kesif:"usb-bellek",parca:"usb-bellek",minAdim:4,minPx:14},5.4,3.6,13,0,0,6.6)),{grup:i,led:e,kesif:[ki(i,"usb-bellek",0,3.4,8)],ledAyarla:n=>{e.material=n?Ft.ledYesil:Ft.ledKapali}}}var Fr=fs,_n=3.81,dc=1.9,Or=2.2,rv=Or+.15,Zf=.07;function av(){let i=[],t=(e,n,s,r=1,a=1,o="harf")=>i.push({ad:e,x:n,y:s,w:r,h:a,tur:o});return t("Esc",0,0,1,1,"ozel"),[2,3,4,5].forEach((e,n)=>t("F"+(n+1),e,0,1,1,"islev")),[6.5,7.5,8.5,9.5].forEach((e,n)=>t("F"+(n+5),e,0,1,1,"islev")),[11,12,13,14].forEach((e,n)=>t("F"+(n+9),e,0,1,1,"islev")),["PrtSc","ScrLk","Pause"].forEach((e,n)=>t(e,15.25+n,0,1,1,"islev")),['"',"1","2","3","4","5","6","7","8","9","0","*","-"].forEach((e,n)=>t(e,n,1.5,1,1,n===0||n>10?"harf":"rakam")),t("Geri",13,1.5,2,1,"ozel"),t("Tab",0,2.5,1.5,1,"ozel"),"QWERTYUIOP\u011E\xDC".split("").forEach((e,n)=>t(e,1.5+n,2.5)),t(",",13.5,2.5,1.5,1),t("Caps",0,3.5,1.75,1,"ozel"),"ASDFGHJKL\u015E\u0130".split("").forEach((e,n)=>t(e,1.75+n,3.5)),t("Enter",12.75,3.5,2.25,1,"ozel"),t("Shift",0,4.5,2.25,1,"ozel"),"ZXCVBNM\xD6\xC7.".split("").forEach((e,n)=>t(e,2.25+n,4.5)),t("Shift",12.25,4.5,2.75,1,"ozel"),t("Ctrl",0,5.5,1.25,1,"ozel"),t("",1.25,5.5,1.25,1,"ozel"),t("Alt",2.5,5.5,1.25,1,"ozel"),t(" ",3.75,5.5,6.25,1,"bosluk"),t("Alt",10,5.5,1.25,1,"ozel"),t("",11.25,5.5,1.25,1,"ozel"),t("Men\xFC",12.5,5.5,1.25,1,"ozel"),t("Ctrl",13.75,5.5,1.25,1,"ozel"),["Ins","Home","PgUp"].forEach((e,n)=>t(e,15.25+n,1.5,1,1,"ozel")),["Del","End","PgDn"].forEach((e,n)=>t(e,15.25+n,2.5,1,1,"ozel")),t("yukari",16.25,4.5,1,1,"ok"),t("sol",15.25,5.5,1,1,"ok"),t("asagi",16.25,5.5,1,1,"ok"),t("sag",17.25,5.5,1,1,"ok"),["Num","/","*","-"].forEach((e,n)=>t(e,18.5+n,1.5,1,1,n?"rakam":"ozel")),["7","8","9"].forEach((e,n)=>t(e,18.5+n,2.5,1,1,"rakam")),t("+",21.5,2.5,1,2,"rakam"),["4","5","6"].forEach((e,n)=>t(e,18.5+n,3.5,1,1,"rakam")),["1","2","3"].forEach((e,n)=>t(e,18.5+n,4.5,1,1,"rakam")),t("Enter",21.5,4.5,1,2,"ozel"),t("0",18.5,5.5,2,1,"rakam"),t(".",20.5,5.5,1,1,"rakam"),i}var ov={Esc:"tus-esc",Shift:"tus-shift",Ctrl:"tus-ctrl",Enter:"tus-enter"," ":"tus-bosluk"},lv=i=>ov[i.ad]||(i.tur==="harf"||i.tur==="rakam"?"tus-harf":"tus-ozel"),iu=i=>i.tur==="harf"||i.tur==="rakam"||i.tur==="bosluk",su=3,Li=4*su;function Jf(i,t,e){e=Math.max(.05,Math.min(e,i/2-.01,t/2-.01));let n=i/2-e,s=t/2-e,r=[];for(let[a,o,l]of[[n,s,0],[-n,s,90],[-n,-s,180],[n,-s,270]])for(let c=0;c<su;c++){let h=(l+c/(su-1)*90)*Math.PI/180;r.push([a+e*Math.cos(h),o+e*Math.sin(h)])}return r}var Fs=[{y:-.3,ic:0,r:.55,ao:.72},{y:dc*.66,ic:.1,r:.62,ao:.9},{y:dc-.32,ic:.4,r:.78,ao:1},{y:dc,ic:.6,r:.92,ao:1}],ps=Li*Fs.length+Li+1,$f=(3*Li*2+Li)*3;function jf(){en();let i=22.5*_n,t=6.5*_n,e=-i/2,n=-t/2,s=new Te;s.name="klavye",s.position.set(qn.x,(t+3)/2*Math.sin(Zf),qn.z),s.rotation.x=Zf,s.add(new _t(Ne(i+3,Or,t+3,.9,0,Or/2,0,3),Ft.klavyeGovde));for(let F=0;F<3;F++)s.add(new _t(be(1.3,.3,.5,e+(19+F)*_n,Or+.1,n+.5*_n),F===0?Ft.ledYesil:Ft.ledKapali));let r=av(),a=2048,o=Math.round(a*t/i),l=a/i,[c,h]=In(a,o);h.fillStyle="#ffffff",h.fillRect(0,0,a,o),h.textAlign="center",h.textBaseline="middle",r.forEach(F=>{let Y=(F.x+F.w/2)*_n*l,$=(F.y+F.h/2)*_n*l;if(h.fillStyle="#20242c",h.strokeStyle="#20242c",F.tur==="ok"){let ct=.95*l;h.beginPath();let zt={yukari:[0,-1],asagi:[0,1],sol:[-1,0],sag:[1,0]}[F.ad],te=-zt[1],kt=zt[0];h.moveTo(Y+zt[0]*ct,$+zt[1]*ct),h.lineTo(Y-zt[0]*ct*.7+te*ct,$-zt[1]*ct*.7+kt*ct),h.lineTo(Y-zt[0]*ct*.7-te*ct,$-zt[1]*ct*.7-kt*ct),h.closePath(),h.fill();return}if(F.ad==="Geri"){h.lineWidth=.32*l,h.lineCap="round",h.beginPath(),h.moveTo(Y+1.6*l,$),h.lineTo(Y-1.6*l,$),h.moveTo(Y-1.6*l,$),h.lineTo(Y-.6*l,$-.9*l),h.moveTo(Y-1.6*l,$),h.lineTo(Y-.6*l,$+.9*l),h.stroke();return}if(!F.ad.trim())return;let Ct=F.ad.length>2;h.font=`${iu(F)?700:600} ${(Ct?1.05:1.55)*l}px ${ds}`,h.fillText(F.ad,Y,$+.05*l)});let u=Nr(c,!0,!1),d=r.length,f=new Float32Array(d*ps*3),g=new Float32Array(d*ps*3),M=new Float32Array(d*ps*2),m=new Float32Array(d*ps*3),p=new Uint16Array(d*$f),b=new Float32Array(d*ps),T=new Int32Array(d),v=new ee(15658991),w=new ee(11777724),x=new ee(8146431);r.forEach((F,Y)=>{let $=F.w*_n-.3,Ct=F.h*_n-.3,ct=e+(F.x+F.w/2)*_n,zt=n+(F.y+F.h/2)*_n,te=iu(F)?v:w,kt=Y*ps,j=[],it=(yt,Jt,et,lt)=>{f[kt*3]=ct+yt,f[kt*3+1]=rv+et,f[kt*3+2]=zt+Jt,M[kt*2]=(ct+yt-e)/i,M[kt*2+1]=1-(zt+Jt-n)/t,b[kt]=lt,m[kt*3]=te.r*lt,m[kt*3+1]=te.g*lt,m[kt*3+2]=te.b*lt,kt++};for(let yt of Fs){j.push(kt);for(let[Jt,et]of Jf($-2*yt.ic,Ct-2*yt.ic,yt.r))it(Jt,et,yt.y,yt.ao)}let Mt=kt;for(let[yt,Jt]of Jf($-2*Fs[3].ic,Ct-2*Fs[3].ic,Fs[3].r))it(yt,Jt,Fs[3].y,1);let Lt=kt;it(0,0,Fs[3].y,1);let xt=Y*$f;for(let yt=0;yt<3;yt++)for(let Jt=0;Jt<Li;Jt++){let et=j[yt]+Jt,lt=j[yt]+(Jt+1)%Li,ht=j[yt+1]+Jt,ut=j[yt+1]+(Jt+1)%Li;p[xt++]=et,p[xt++]=ht,p[xt++]=lt,p[xt++]=lt,p[xt++]=ht,p[xt++]=ut}for(let yt=0;yt<Li;yt++)p[xt++]=Lt,p[xt++]=Mt+(yt+1)%Li,p[xt++]=Mt+yt;T[Y]=j[3]});let R=new qe,y=new Xe(f,3),A=new Xe(m,3);R.setAttribute("position",y),R.setAttribute("normal",new Xe(g,3)),R.setAttribute("uv",new Xe(M,2)),R.setAttribute("color",A),R.setIndex(new Xe(p,1)),R.computeVertexNormals();let P=R.attributes.normal;r.forEach((F,Y)=>{for(let $=0;$<Li;$++){let Ct=T[Y]+$,ct=P.getX(Ct),zt=P.getY(Ct)+.9,te=P.getZ(Ct),kt=Math.hypot(ct,zt,te);P.setXYZ(Ct,ct/kt,zt/kt,te/kt)}});let D=f.slice(),U=uc().plastik.clone();U.wrapS=U.wrapT=Ai,U.repeat.set(14,4),U.needsUpdate=!0;let G=new Ce({map:u,vertexColors:!0,roughness:.46,normalMap:U,normalScale:new ft(.35,.35)}),k=new _t(R,G);k.name="tuslar",k.userData.dinamik=!0,s.add(k),r.forEach((F,Y)=>{s.add(ke({kesif:lv(F),parca:"klavye",tus:F.ad,tusNo:Y,tusTur:F.tur},F.w*_n-.3,2.4,F.h*_n-.3,e+(F.x+F.w/2)*_n,Or+1.1,n+(F.y+F.h/2)*_n))}),s.add(ke({kesif:"klavye",parca:"klavye"},i+3,5,t+3,0,2,0));let B=(F,Y)=>{let $=F*ps,Ct=$+ps,ct=Y?x:iu(r[F])?v:w;for(let zt=$;zt<Ct;zt++)f[zt*3+1]=D[zt*3+1]-(Y?.6:0),m[zt*3]=ct.r*b[zt],m[zt*3+1]=ct.g*b[zt],m[zt*3+2]=ct.b*b[zt];y.needsUpdate=!0,A.needsUpdate=!0},Z=F=>r.findIndex(Y=>Y.ad===F),J=F=>{let Y=r[F];return new I(e+(Y.x+Y.w/2)*_n,Or+dc+1.2,n+(Y.y+Y.h/2)*_n)},st=F=>{let Y=Z(F);return Y<0?new I:J(Y)};return{grup:s,tuslar:r,tusBas:B,ara:Z,nokta:st,noktaI:J,kesif:[Fr(s,"klavye",0,7,12.5),Fr(s,"tus-esc",...st("Esc").toArray()),Fr(s,"tus-shift",...st("Shift").toArray()),Fr(s,"tus-ctrl",...st("Ctrl").toArray()),Fr(s,"tus-enter",e+13.9*_n,6,st("Enter").z),Fr(s,"tus-bosluk",0,6,st(" ").z)],arka:new I(qn.x-8,3,qn.z-t/2-1.6)}}var cv=fs,hv=2.7,Br=65*Math.PI/180;function uv(){let[i,t]=In(192,96);return t.fillStyle="#17315f",t.fillRect(0,0,192,96),t.fillStyle="#8fb8ff",t.font=`700 38px ${ds}`,t.textAlign="left",t.textBaseline="middle",t.fillText("Haz\u0131r",18,48),t.fillStyle="#8fb8ff",t.fillRect(142,28,30,40),t.fillStyle="#17315f",t.fillRect(147,33,20,30),t.fillStyle="#8fb8ff",t.fillRect(151,41,12,3),t.fillRect(151,49,12,3),ni(i)}function dv(){let[i,t]=In(512,700);t.fillStyle="#ffffff",t.fillRect(0,0,512,700),t.fillStyle="#7c4dff",t.fillRect(50,56,412,10),t.fillStyle="#20242c",t.font=`700 58px ${ds}`,t.textAlign="left",t.textBaseline="alphabetic",t.fillText("Merhaba!",50,148),t.fillStyle="#6b7384";for(let e=0;e<6;e++)t.fillRect(50,200+e*38,e===5?220:412,12);return t.fillStyle="#a2c8f3",t.fillRect(50,450,412,190),t.fillStyle="#6ea4e8",t.beginPath(),t.moveTo(50,640),t.lineTo(200,540),t.lineTo(320,600),t.lineTo(400,530),t.lineTo(462,580),t.lineTo(462,640),t.closePath(),t.fill(),ni(i)}function Qf(){en();let i=new Te;i.name="yazici",i.position.set(Kn.x,0,Kn.z);let t=.6;for(let[f,g]of[[-14,-10],[14,-10],[-14,10],[14,10]])i.add(new _t(Ue(1.2,t+.1,f,(t+.1)/2,g,{seg:12}),Ft.plastik));i.add(new _t(Ne(36,9,28,1.6,0,t+4.5,0,3),Ft.plastikBeyaz)),i.add(new _t(Ne(35.4,4.4,27.4,1.4,0,11.6,0,3),Ft.plastikBeyaz)),i.add(new _t(be(28,1.6,.3,0,3.2,14.02),Ft.cip)),i.add(new _t(Ne(27,.6,12,.25,0,2.2,19.2,2),Ft.plastikBeyaz));for(let f of[-1,1])i.add(new _t(Ne(.6,1.2,10.4,.2,f*13.6,2.75,19.8,2),Ft.plastikBeyaz));i.add(new _t(Ue(.75,22,0,13.55,-13.1,{eksen:"x",seg:12}),Ft.plastikBeyaz));let e=13,n=new I(0,Math.sin(Br),-Math.cos(Br)),r=new I(0,13.4,-13).clone().addScaledVector(n,e/2),a=new _t(Ne(24,.5,e,.2,0,0,0,2),Ft.plastikBeyaz);a.position.copy(r),a.rotation.x=Br,i.add(a);let o=new I(0,Math.cos(Br),Math.sin(Br)),l=new _t(be(21,.35,e-1.5),Ft.kagit);l.position.copy(r).addScaledVector(o,.45),l.rotation.x=Br,i.add(l),i.add(new _t(be(2.6,1.7,.4,-10,4.2,-14.05),Ft.cip));let c=new Te;c.position.set(8.5,13.95,8.4),c.rotation.x=-.18,c.add(new _t(Ne(13,.6,6.2,.3,0,0,0,2),Ft.plastik));let h=new _t(new mn(6.2,3.1),new Ze({map:uv(),toneMapped:!1}));h.rotation.x=-Math.PI/2,h.position.set(-2.4,.34,0),c.add(h);let u=new _t(be(.6,.12,.6),Ft.ledKapali);u.position.set(4.2,.34,-1.2),u.userData.dinamik=!0,c.add(u);for(let f=0;f<2;f++)c.add(new _t(Ue(.6,.14,3.2+f*1.6,.34,1.2,{seg:14}),Ft.alumin));i.add(c);let d=new _t(new mn(25,34.5),new Ce({map:dv(),roughness:.9,side:fn}));return d.rotation.x=-Math.PI/2,d.position.set(0,hv,-3.75),d.visible=!1,d.userData.dinamik=!0,i.add(d),i.add(ke({kesif:"yazici",parca:"yazici"},37,26,45,0,13,3.5)),{grup:i,kagit:d,led:u,kesif:[cv(i,"yazici",0,15.5,2)],ledAyarla:f=>{u.material=f?Ft.ledYesil:Ft.ledKapali},arka:new I(Kn.x-10,4.2,Kn.z-13)}}var ms=fs,vi=_e.d/2,fv=-_e.d/2,re={hdmi:{x:15.4,y:74.55},usb:[{x:11,y:75.35},{x:11,y:73.75},{x:7.4,y:75.35},{x:7.4,y:73.75},{x:3.8,y:75.35},{x:3.8,y:73.75}],ag:{x:-.7,y:74.55},mavi:{x:-4.8,y:74.55},pembe:{x:-7.6,y:74.55},yesil:{x:-10.4,y:74.55},guc:{x:5.5,y:10.4}},An=80.4,Ge={guc:-12.5,usb1:-5,usb2:-.2,usbc:5,kulaklik:10.2,mikrofon:14};function tp(i,t,e,n,s,r){let[a,o]=In(i,t);o.fillStyle=s,o.fillRect(0,0,i,t),o.fillStyle=r;for(let l=0;l*e*.866<t+e;l++)for(let c=0;c<i/e+1;c++)o.beginPath(),o.arc((c+(l%2?.5:0))*e,l*e*.866,e*n,0,Math.PI*2),o.fill();return a}function pv(){let[i,t]=In(512,64),e=512/34,n=a=>(a+17)*e;t.strokeStyle="rgba(222,226,234,0.92)",t.fillStyle="rgba(222,226,234,0.92)",t.lineWidth=2.4,t.lineCap="round",t.lineJoin="round";let s=n(Ge.guc),r=30;t.beginPath(),t.arc(s,r,11,-Math.PI/2+.6,-Math.PI/2-.6+Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(s,r-15),t.lineTo(s,r-2),t.stroke();for(let a of[Ge.usb1,Ge.usb2,Ge.usbc])s=n(a),t.beginPath(),t.moveTo(s-9,30),t.lineTo(s+9,30),t.stroke(),t.beginPath(),t.arc(s-11,30,3.2,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(s+9,30),t.lineTo(s+5,26.5),t.lineTo(s+5,33.5),t.closePath(),t.fill(),t.beginPath(),t.moveTo(s-3,30),t.lineTo(s,23),t.lineTo(s+3,23),t.stroke(),t.fillRect(s+2,20.5,4.4,4.4),t.beginPath(),t.moveTo(s-1,30),t.lineTo(s+2,37),t.lineTo(s+4.5,37),t.stroke(),t.beginPath(),t.arc(s+6.2,37,2.2,0,Math.PI*2),t.fill();return s=n(Ge.kulaklik),t.beginPath(),t.arc(s,34,10,Math.PI,0),t.stroke(),t.fillRect(s-12.5,33,5,11),t.fillRect(s+7.5,33,5,11),s=n(Ge.mikrofon),t.beginPath(),t.arc(s,20,4,Math.PI,0),t.arc(s,29,4,0,Math.PI),t.closePath(),t.fill(),t.beginPath(),t.arc(s,32,8,.15,Math.PI-.15),t.stroke(),t.beginPath(),t.moveTo(s,40),t.lineTo(s,47),t.moveTo(s-5,47),t.lineTo(s+5,47),t.stroke(),i}function ep(){en();let i=_e.w,t=_e.h,e=_e.d,n=1.6,s=new Te;s.name="kasa",s.position.set(_e.x,0,_e.z);let r=new Ce({color:2961463,roughness:.46,metalness:.4});s.add(new _t(Ne(i,t-n,e,1.1,0,n+(t-n)/2,0,3),r)),s.add(_i([[-15.5,-35.5],[15.5,-35.5],[-15.5,35.5],[15.5,35.5]].map(([T,v])=>Ue(2.3,n+.2,T,(n+.2)/2,v,{seg:14})),Ft.plastik));let a=new _t(new mn(36.4,62),new Ce({map:ni(tp(512,874,19.7,.3,"#2c2f37","#08090c"),{aniso:!0}),roughness:.55,metalness:.35}));a.position.set(0,38.5,vi+.05),s.add(a),s.add(new _t(Ne(34,6.4,1.2,.5,0,An,vi+.1,2),Ft.plastik));let o=vi+.7,l=[];l.push(Re(Ue(2.15,.7,Ge.guc,An,o+.35,{eksen:"z",seg:24}),12173e3)),l.push(Re(Ue(1.6,.9,Ge.guc,An,o+.45,{eksen:"z",seg:24}),15527666));for(let T of[Ge.usb1,Ge.usb2])l.push(Re(be(3.2,1.5,.9,T,An,o+.3),1382171)),l.push(Re(be(2.3,.45,.5,T,An-.15,o+.5),3107824));l.push(Re(Ne(2.3,.95,.9,.35,Ge.usbc,An,o+.3,2),1382171));for(let T of[Ge.kulaklik,Ge.mikrofon])l.push(Re(Ue(1.05,.6,T,An,o+.3,{eksen:"z",seg:18}),12173e3)),l.push(Re(Ue(.55,.7,T,An,o+.35,{eksen:"z",seg:14}),723983));s.add(_i(l,Ft.renkli));let c=new _t(new jn(1.85,.11,6,28),Ft.ledMavi);c.position.set(Ge.guc,An,o+.8),s.add(c);let h=new _t(new mn(34,4.25),new Ze({map:ni(pv()),transparent:!0,depthWrite:!1}));h.position.set(0,An-4.6,vi+.08),s.add(h);let u=fv;s.add(new _t(Ne(31,9.3,.9,.25,2.9,74.55,u-.15,2),Ft.alumin));let d=[],f=(T,v,w,x,R=1316378,y=null,A=.45)=>{d.push(Re(be(w,x,.5,T,v,u-.55),R)),y!=null&&d.push(Re(be(w-.5,A,.4,T,v-x/2+A/2+.12,u-.8),y))};f(re.hdmi.x,re.hdmi.y,3,1.05,1053206),re.usb.forEach((T,v)=>f(T.x,T.y,2.6,1.2,921620,v<2?3107824:10133674)),d.push(Re(be(3.4,2.9,.6,re.ag.x,re.ag.y,u-.6),11449535)),d.push(Re(be(2.6,1.9,.4,re.ag.x,re.ag.y-.1,u-.9),855826));for(let[T,v]of[["mavi",3832032],["pembe",14708890],["yesil",3781991]])d.push(Re(Ue(1.05,.7,re[T].x,re[T].y,u-.8,{eksen:"z",seg:18}),v)),d.push(Re(Ue(.5,.8,re[T].x,re[T].y,u-.85,{eksen:"z",seg:12}),723983));s.add(new _t(Ne(30,17.2,.9,.3,-3.5,10.4,u-.15,2),Ft.aluminKoyu)),d.push(Re(be(3.9,2.8,.7,re.guc.x,re.guc.y,u-.65),1184535)),d.push(Re(be(2.5,.9,.5,re.guc.x,re.guc.y+.2,u-1),2764083)),d.push(Re(be(2,3,.7,9.4,14.2,u-.65),1382171)),d.push(Re(be(1.5,1.4,.5,9.4,14.8,u-1),14278116)),s.add(_i(d,Ft.renkli));let g=(()=>{let[T,v]=In(256,305);v.fillStyle="#20232a",v.fillRect(0,0,256,305);for(let w=0;w<7;w++){let x=w*43.57142857142857+3;v.fillStyle="#8f96a2",v.fillRect(4,x,248,305/7-6),v.fillStyle="#2a2d34";for(let R=0;R<17;R++)for(let y=0;y<2;y++)v.beginPath(),v.arc(22+R*13.4,x+12+y*14,3.1,0,Math.PI*2),v.fill();v.fillStyle="#c3c8d1",v.fillRect(4,x,248,2)}return T})(),M=new _t(new mn(24,28.5),new Ce({map:ni(g),roughness:.55,metalness:.5}));M.rotation.y=Math.PI,M.position.set(7,55.65,u-.62),s.add(M);let m=tp(256,256,11,.3,"#3a3f49","#0a0b0e"),p=new _t(new mn(19.4,14.2),new Ce({map:ni(m),roughness:.6,metalness:.4}));p.rotation.y=Math.PI,p.position.set(-8.6,10.4,u-.62),s.add(p);let b={minAdim:4,minPx:14};return s.add(ke({kesif:"kasa",parca:"kasa"},i,t,e,0,t/2,0)),s.add(ke({kesif:"guc-dugmesi",parca:"kasa",...b},5,5,2.4,Ge.guc,An,vi+.9)),s.add(ke({kesif:"usb-girisi",parca:"kasa",...b},9.2,3.4,2.4,(Ge.usb1+Ge.usb2)/2,An,vi+.9)),s.add(ke({kesif:"ses-jaklari",parca:"kasa",...b},8.6,3.2,2.4,(Ge.kulaklik+Ge.mikrofon)/2,An,vi+.9)),s.add(ke({kesif:"hdmi-girisi",parca:"kasa",...b},3.6,1.8,2.6,re.hdmi.x,re.hdmi.y,u-.9)),s.add(ke({kesif:"usb-girisi",parca:"kasa",arka:!0,...b},11.2,3.6,2.6,7.4,74.55,u-.9)),s.add(ke({kesif:"ag-girisi",parca:"kasa",...b},3.8,3.2,2.6,re.ag.x,re.ag.y,u-.9)),s.add(ke({kesif:"ses-jaklari",parca:"kasa",arka:!0,...b},8.8,2.6,2.6,-7.6,74.55,u-.9)),s.add(ke({kesif:"guc-girisi",parca:"kasa",...b},4.6,3.4,2.6,re.guc.x,re.guc.y,u-1)),s.add(ke({kesif:"guc-kaynagi",parca:"kasa"},30,17.2,2.6,-3.5,10.4,u-.5)),{grup:s,halka:c,kesif:[ms(s,"kasa",0,62,vi+1,[0,.2,1]),ms(s,"guc-dugmesi",Ge.guc,An,vi+1,[0,.15,1]),ms(s,"usb-girisi",(Ge.usb1+Ge.usb2)/2,An,vi+1,[0,.15,1]),ms(s,"ses-jaklari",(Ge.kulaklik+Ge.mikrofon)/2,An,vi+1,[0,.15,1]),ms(s,"hdmi-girisi",re.hdmi.x,re.hdmi.y,u-1,[0,.15,-1]),ms(s,"ag-girisi",re.ag.x,re.ag.y,u-1,[0,.15,-1]),ms(s,"guc-girisi",re.guc.x,re.guc.y,u-1.1,[0,.15,-1]),ms(s,"guc-kaynagi",-10.5,5,u-1,[0,.15,-1])]}}var ip=_e.z-_e.d/2,mv=i=>_e.x+i,np=1776673,gv=8146431,ru=12896463,au=1513500,_v=i=>-70.4-.65*i,qt=(i,t,e)=>new I(i,t,e);function ou(i,t){let e=i.map(r=>r.isVector3?r.clone():new I(...r)),n=new xr,s=e[0];for(let r=1;r<e.length-1;r++){let a=e[r-1],o=e[r],l=e[r+1],c=Math.min(t,a.distanceTo(o)/2,o.distanceTo(l)/2),h=o.clone().addScaledVector(a.clone().sub(o).normalize(),c),u=o.clone().addScaledVector(l.clone().sub(o).normalize(),c);s.distanceTo(h)>1e-4&&n.add(new Es(s,h)),n.add(new Ts(h,o,u)),s=u}return n.add(new Es(s,e[e.length-1])),n}var ri=ip-1,Wi={usb:(i,t)=>({parcalar:[Re(be(2.4,.95,1.1,i,t,ri-.55),ru),Re(be(2.9,1.45,1.1,i,t,ri-1.65),au)],uc:ri-2.2}),hdmi:(i,t)=>({parcalar:[Re(be(2.8,.85,1.2,i,t,ri-.6),ru),Re(be(3.3,1.35,1.4,i,t,ri-1.9),au)],uc:ri-2.6}),jak:(i,t,e)=>({parcalar:[Re(Ue(.5,1,i,t,ri-.5,{eksen:"z",seg:10}),ru),Re(Ue(.8,1.5,i,t,ri-1.75,{eksen:"z",seg:12}),e)],uc:ri-2.5}),guc:(i,t)=>({parcalar:[Re(be(3.6,2.5,2.6,i,t,ri-1.5),au),Re(be(2.2,1.2,.5,i,t,ri-.3),3816773)],uc:ri-2.8})};function sp({klavye:i,fare:t,kamera:e,kulaklik:n,yazici:s,mikrofon:r,hoparlor:a,monitor:o}){en();let l=x=>mv(x),c=x=>_v(x),h=[],u=(x,R,y,A,P,D,U,G=.27,k=2.2)=>{let B=[...P,...D,...U,qt(A.x,A.y,A.uc)];h.push({id:x,ad:R,hedef:y,fis:A.parcalar,yol:ou(B,k),r:G})},d=(x,R)=>qt(x,R,ip);{let x=re.usb[3],R=Wi.usb(l(x.x),x.y);u("kulaklik","Kulakl\u0131k kablosu",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[n.ucu.clone(),qt(n.ucu.x+1.8,.35,n.ucu.z+4)],[qt(96,.35,48),qt(-64,.35,48),qt(-64,.35,c(0)),qt(l(x.x),.35,c(0))],[qt(l(x.x),x.y,c(0))],.27)}{let x=re.pembe,R=Wi.jak(l(x.x),x.y,14708890);u("mikrofon","Mikrofon kablosu",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[r.ucu.clone(),qt(r.ucu.x,.35,r.ucu.z-3)],[qt(-58,.35,24),qt(-63.1,.35,24),qt(-63.1,.35,c(1)),qt(l(x.x),.35,c(1))],[qt(l(x.x),x.y,c(1))],.24)}{let x=re.usb[0],R=Wi.usb(l(x.x),x.y);u("klavye","Klavye kablosu",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[i.arka.clone(),qt(i.arka.x-3,.35,i.arka.z-4)],[qt(-30,.35,2),qt(-62.2,.35,2),qt(-62.2,.35,c(2)),qt(l(x.x),.35,c(2))],[qt(l(x.x),x.y,c(2))],.27)}{let x=re.usb[1],R=Wi.usb(l(x.x),x.y);u("fare","Fare kablosu",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[t.arka.clone(),qt(t.arka.x,.35,t.arka.z-3)],[qt(58,.35,-6),qt(-61.3,.35,-6),qt(-61.3,.35,c(3)),qt(l(x.x),.35,c(3))],[qt(l(x.x),x.y,c(3))],.25)}{let x=re.yesil,R=Wi.jak(l(x.x),x.y,3781991);u("hoparlor","Hoparl\xF6r kablosu",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[a.arka[0].clone().add(qt(-2,0,0)),qt(-55,.35,-58.5)],[qt(-55,.35,c(4)),qt(l(x.x),.35,c(4))],[qt(l(x.x),x.y,c(4))],.27)}{let x=re.hdmi,R=Wi.hdmi(l(x.x),x.y);u("monitor","Ekran kablosu (HDMI)",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[o.arka.clone(),qt(o.arka.x,9,Ve.z-10),qt(o.arka.x,.35,Ve.z-13)],[qt(o.arka.x-1,.35,c(5)),qt(l(x.x),.35,c(5))],[qt(l(x.x),x.y,c(5))],.3)}{let x=re.usb[2],R=Wi.usb(l(x.x),x.y);u("kamera","Kamera kablosu",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[e.ucu.clone(),qt(6.5,66.2,Ve.z-6),qt(6.5,30,Ve.z-6.3),qt(6.5,2.4,Ve.z-6.3),qt(6.5,.35,Ve.z-10)],[qt(6.5,.35,c(6)),qt(l(x.x),.35,c(6))],[qt(l(x.x),x.y,c(6))],.22)}{let x=re.usb[4],R=Wi.usb(l(x.x),x.y);u("yazici","Yaz\u0131c\u0131 kablosu",d(l(x.x),x.y),{...R,x:l(x.x),y:x.y},[s.arka.clone(),qt(s.arka.x-1,.35,s.arka.z-3)],[qt(76,.35,c(7)),qt(l(x.x),.35,c(7))],[qt(l(x.x),x.y,c(7))],.27)}{let x=Wi.guc(l(re.guc.x),re.guc.y);h.push({id:"guc",ad:"G\xFC\xE7 kablosu (prize)",hedef:d(l(re.guc.x),re.guc.y),fis:x.parcalar,r:.45,yol:ou([qt(l(re.guc.x),re.guc.y,x.uc),qt(l(re.guc.x),re.guc.y,-75.2),qt(l(re.guc.x),re.guc.y-3,-77.4),qt(l(re.guc.x),-12,-77.6)],2.6)})}{let x=a.arka[0].clone().add(qt(2.2,0,0)),R=a.arka[1].clone();h.push({id:"hoparlor-arasi",ad:"Hoparl\xF6rler aras\u0131 kablo",hedef:x,fis:[],r:.22,yol:ou([x,qt(x.x,.35,-57.2),qt(0,.35,-57.2),qt(3,1.5,-57.2),qt(10,1.5,-57.2),qt(13,.35,-57.2),qt(R.x,.35,-57.2),R],2.2)})}let f=[],g={},M=0;for(let x of h){let R=Math.max(24,Math.round(x.yol.getLength()*.6)),y=Re(new Ps(x.yol,R,x.r,6,!1).toNonIndexed(),np),A=M;M+=y.attributes.position.count,g[x.id]=[A,M],f.push(y);for(let P of x.fis){let D=P.index?P.toNonIndexed():P;f.push(D),M+=D.attributes.position.count}}let m=new _t(ac(f,!1),Ft.renkli);m.name="kablolar",m.matrixAutoUpdate=!1;let p=m.geometry.attributes.color,b=new ee,T=(x,R)=>{let y=g[x];if(y){b.set(R);for(let A=y[0];A<y[1];A++)p.setXYZ(A,b.r,b.g,b.b);p.needsUpdate=!0}},v=null,w=x=>{v&&T(v,np),v=x,x&&T(x,gv)};return{mesh:m,kablolar:h.map(x=>({id:x.id,ad:x.ad,hedef:x.hedef})),izle:w,izlenen:()=>v}}var xv=[{x:_e.x,z:_e.z,w:_e.w+4,d:_e.d+4,bulanik:18,alfa:.55},{x:Ve.x,z:Ve.z+3,w:36,d:24,bulanik:10,alfa:.5},...Pn.map(i=>({x:i.x,z:i.z,w:15,d:17,bulanik:9,alfa:.5})),{x:qn.x,z:qn.z,w:88,d:27,bulanik:16,alfa:.32},{x:kn.x,z:kn.z,w:12.5,d:21,bulanik:8,alfa:.4},{x:Kn.x,z:Kn.z,w:38,d:29,bulanik:14,alfa:.45},{x:Ln.x,z:Ln.z,w:10.5,d:10.5,bulanik:6,alfa:.5},{x:hn.x,z:hn.z,w:22,d:14,bulanik:8,alfa:.28},{x:xi.x,z:xi.z,w:6,d:15,bulanik:4,alfa:.35}];function rp(i,{aniz:t=4}={}){zf({aniz:t,izler:xv,masa:ii}),en();let e={};e.masa=Vf(),e.kasa=ep(),e.monitor=Gf(),e.kamera=Hf(),e.klavye=jf(),e.fare=Wf(),e.hoparlor=Xf(),e.mikrofon=Yf(),e.kulaklik=qf(),e.yazici=Qf(),e.usb=Kf(),e.usb.grup.position.set(xi.x,.65,xi.z),e.usb.grup.rotation.y=xi.don,e.kablo=sp({klavye:e.klavye,fare:e.fare,kamera:e.kamera,kulaklik:e.kulaklik,yazici:e.yazici,mikrofon:e.mikrofon,hoparlor:e.hoparlor,monitor:e.monitor});let n=new Te;return n.name="donanim",n.add(e.masa,e.kasa.grup,e.monitor.grup,e.kamera.grup,e.klavye.grup,e.fare.grup,e.hoparlor.grup,e.mikrofon.grup,e.kulaklik.grup,e.yazici.grup,e.usb.grup,e.kablo.mesh),kf(n),e.masa.castShadow=!1,e.masa.receiveShadow=!1,i.add(n),n.updateMatrixWorld(!0),{kok:n,p:e}}var He=(i,t,e)=>new I(i,t,e),yv={I:"\u0131",\u0130:"i",\u015E:"\u015F",\u011E:"\u011F",\u00DC:"\xFC",\u00D6:"\xF6",\u00C7:"\xE7"},vv=i=>yv[i]||i.toLowerCase(),lu=["M","E","R","H","A","B","A"," ","D","\xDC","N","Y","A"],cu=[{x:760,y:230},{x:70,y:150},{x:330,y:86},{x:420,y:250},{x:800,y:430},{x:600,y:190}],hu=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),uu=i=>i*i*(3-2*i),du=["klavye","fare","mikrofon","kulaklik","hoparlor","monitor","kamera","yazici","guc"],Mv={klavye:["parca:klavye","Klavye: USB giri\u015Fine ba\u011Fl\u0131"],fare:["parca:fare","Fare: USB giri\u015Fine ba\u011Fl\u0131"],mikrofon:["parca:mikrofon","Mikrofon: pembe ses giri\u015Fine ba\u011Fl\u0131"],kulaklik:["parca:kulaklik","Kulakl\u0131k: USB giri\u015Fine ba\u011Fl\u0131"],hoparlor:["parca:hoparlor1","Hoparl\xF6r: ye\u015Fil ses giri\u015Fine ba\u011Fl\u0131"],monitor:["parca:monitor","Monit\xF6r: HDMI giri\u015Fine ba\u011Fl\u0131"],kamera:["parca:kamera","Web kameras\u0131: USB giri\u015Fine ba\u011Fl\u0131"],yazici:["parca:yazici","Yaz\u0131c\u0131: USB giri\u015Fine ba\u011Fl\u0131"],guc:["kesif:guc-girisi","G\xFC\xE7 kablosu: prize gider"]},fu={klavye:"klavye",fare:"fare",mikrofon:"mikrofon",kulaklik:"kulaklik",hoparlor:"hoparlor",monitor:"monitor",kamera:"kamera",yazici:"yazici"};function ap(i,{olay:t=()=>{}}={}){let{kok:e,p:n}=rp(i.scene,{aniz:i.renderer.capabilities.getMaxAnisotropy()}),s=n.monitor.ekran,r=s.durum,a=n.klavye,o=n.fare,l=n.hoparlor,c=n.mikrofon,h=n.kulaklik,u=n.yazici,d=n.kamera,f=n.kablo,g=z=>{try{t("duyur",z)}catch{}};e.traverse(z=>{z.userData&&z.userData.yari&&i.hedefler.push(z)}),i.controls.cursor.set(0,20,-10),i.controls.maxTargetRadius=170;let M=[],m=new Set;for(let z of[n.monitor,n.kamera,n.klavye,n.fare,n.hoparlor,n.mikrofon,n.kulaklik,n.yazici,n.usb,n.kasa])for(let E of z.kesif)m.has(E.id)||(m.add(E.id),M.push(E));let p=new Map(M.map(z=>[z.id,z])),b=_e.z+_e.d/2,T=_e.z-_e.d/2,v={monitor:[Ve.x,34,Ve.z-1,97,68,22],ekran:[Ve.x,39.4,Ve.z+1.7,92,52,1.5],klavye:[qn.x,3,qn.z,89,6.6,28],fare:[kn.x,2.4,kn.z,11.5,5,20.5],hoparlor1:[Pn[0].x,13.4,Pn[0].z,14,27,16],hoparlor2:[Pn[1].x,13.4,Pn[1].z,14,27,16],mikrofon:[Ln.x,11.5,Ln.z,10,23.5,12],kamera:[si.x,69.2,si.z,9.4,5.6,5],kulaklik:[hn.x,7.5,hn.z,22.6,15.2,12],yazici:[Kn.x,12,Kn.z+3.5,37,25,45],"usb-bellek":[xi.x,1.4,xi.z,13,3.2,13],kasa:[_e.x,_e.h/2,_e.z,_e.w,_e.h,_e.d],"kasa-on-seridi":[_e.x,80.4,b+.6,34,6.6,2],"kasa-arka-paneli":[_e.x+2.9,74.55,T-.5,31,9.4,2],"guc-kaynagi":[_e.x-3.5,10.4,T-.5,30,17.2,2]},w=z=>{let E=v[z];return E?new bn(He(E[0]-E[3]/2,E[1]-E[4]/2,E[2]-E[5]/2),He(E[0]+E[3]/2,E[1]+E[4]/2,E[2]+E[5]/2)):null},x={monitor:()=>He(Ve.x,68.8,Ve.z),ekran:()=>He(Ve.x+20,41,Ve.z+1.9),klavye:()=>He(qn.x,6.6,qn.z+3),fare:()=>He(o.grup.position.x,5.4,o.grup.position.z),hoparlor1:()=>He(Pn[0].x,27.8,Pn[0].z),hoparlor2:()=>He(Pn[1].x,27.8,Pn[1].z),mikrofon:()=>He(Ln.x,23,Ln.z+1),kamera:()=>He(si.x,72.6,si.z),kulaklik:()=>He(hn.x,13,hn.z),yazici:()=>He(Kn.x,16.2,Kn.z),"usb-bellek":()=>He(xi.x,3.2,xi.z),kasa:()=>He(_e.x,91.5,_e.z+6),"fare-sol":()=>He(o.grup.position.x-2.6,3.8,o.grup.position.z-4.4),"fare-sag":()=>He(o.grup.position.x+2.6,3.8,o.grup.position.z-4.4),"fare-tekerlek":()=>He(o.grup.position.x,5,o.grup.position.z-4.4),"kulaklik-mikrofon":()=>He(hn.x-4.7,3.8,hn.z+8.6),"kulaklik-kup":()=>He(hn.x-8.4,8.8,hn.z)};function R(z){let E=z.indexOf(":"),nt=z.slice(0,E),K=z.slice(E+1);if(nt==="alan"){let ot=v[K];return ot?He(ot[0],ot[1]+ot[4]/2+1.5,ot[2]):null}if(nt==="parca")return x[K]?x[K]():null;if(nt==="tus"){let ot=a.ara(K==="Bosluk"?" ":K);return ot<0?null:a.noktaI(ot).applyMatrix4(a.grup.matrixWorld)}if(nt==="kesif"){let ot=p.get(K);return ot?ot.yerel.clone().applyMatrix4(ot.nesne.matrixWorld):null}return null}let y=[],A=He(0,0,0),P=He(0,0,0);e.traverse(z=>{z.userData&&z.userData.yon&&y.push(z)}),i.kareGuncelleyici(()=>{let z=i.camera.position;for(let E of y)A.setFromMatrixPosition(E.matrixWorld),P.copy(z).sub(A).normalize(),E.visible=P.dot(E.userData.yon)>.12;return!1});let D=[],U=[],G=()=>i.etiketKoy([...D,...U]),k=z=>{U=z.filter(E=>E.nokta),G()},B=new Map,Z=new Set,J=()=>document.documentElement.hasAttribute("data-e-hareketsiz")||window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.yavasGuncelleyici(()=>{let z=!1;for(let[E,nt]of B){let K=!1;try{K=nt(performance.now())}catch(ot){console.error(ot)}K?z=!0:B.delete(E)}return z});let st=(z,E)=>{B.set(z,E),i.iste()};function F(z,E,nt,K=null){if(J())return K==null?(E(1),nt&&nt()):(E(K),Y(2400,()=>{nt&&nt(),i.iste()})),i.iste(),()=>!1;let ot=null;return mt=>{ot??=mt;let at=Math.min(1,(mt-ot)/z);return E(at,mt),at>=1?(nt&&nt(),!1):!0}}let Y=(z,E)=>{let nt=setTimeout(()=>{Z.delete(nt),E()},z);Z.add(nt)},$=0,Ct=(z=0,E=!1)=>{!E&&z-$<70||($=z,s.guncelle())},ct=()=>{s.guncelle(),i.iste()},zt=new Is(.92,1,48),te=[0,1,2].map(()=>{let z=new _t(zt,new Ze({color:8146431,transparent:!0,opacity:0,depthWrite:!1,side:fn}));return z.visible=!1,z.renderOrder=3,z.raycast=()=>{},e.add(z),z}),kt=()=>{for(let z of te)z.visible=!1};function j(z,E,nt,K){te.forEach((ot,mt)=>{let at=(K+mt/3)%1,Pt=9.5-at*6.5;ot.visible=!0,ot.position.set(z,E,nt+4+(1-at)*15),ot.scale.set(Pt,Pt,1),ot.material.opacity=Math.sin(Math.PI*at)*.55})}function it(z){l.halkalar.forEach(E=>E.forEach((nt,K)=>{let ot=(z+K/3)%1;nt.visible=!0,nt.scale.set(3.2+ot*13,3.2+ot*13,1),nt.material.opacity=Math.pow(1-ot,1.4)*.5}))}let Mt=()=>l.halkalar.forEach(z=>z.forEach(E=>{E.visible=!1})),Lt=null;function xt(){try{let z=window.AudioContext||window.webkitAudioContext;if(!z)return;Lt=Lt||new z,Lt.state==="suspended"&&Lt.resume();let E=Lt.currentTime+.03;[[523.25,0],[659.25,.3],[783.99,.6]].forEach(([nt,K])=>{let ot=Lt.createOscillator(),mt=Lt.createGain();ot.type="sine",ot.frequency.value=nt,mt.gain.setValueAtTime(1e-4,E+K),mt.gain.exponentialRampToValueAtTime(.07,E+K+.04),mt.gain.exponentialRampToValueAtTime(1e-4,E+K+.55),ot.connect(mt),mt.connect(Lt.destination),ot.start(E+K),ot.stop(E+K+.6)})}catch{}}let yt=null,Jt="",et=!1,lt=0,ht=0,ut=3,pt=!1,Wt=-1,Vt=new Set;function $t(){B.clear();for(let z of Z)clearTimeout(z);Z.clear();for(let z of Vt)a.tusBas(z,!1);Vt.clear(),f.izle(null),Wt=-1,o.grup.position.set(kn.x,0,kn.z),o.birak(),o.tekerlek.rotation.x=0,c.ledAyarla(!1),d.ledAyarla(!1),u.ledAyarla(!1),n.monitor.ledAyarla(!0),u.kagit.visible=!1,u.kagit.position.z=-3.75,kt(),Mt(),h.kupMal.emissiveIntensity=0,h.ucMal.emissiveIntensity=0,Jt="",et=!1,lt=0,ht=0,ut=3,pt=!1,Object.assign(r,{mod:"masaustu",yazi:"",imlec:{...cu[0]},tik:0,menu:!1,kamera:!1,ses:null,cal:null,yazdir:null,kademe:3})}function jt(z){a.tusBas(z,!0),Vt.add(z),st("tus"+z,F(170,()=>{},()=>{a.tusBas(z,!1),Vt.delete(z)}))}function L(z){let E=a.tuslar[z];if(!E||(jt(z),yt!=="yaz"))return!1;let nt=!0;if(E.ad==="Geri")Jt=Jt.slice(0,-1);else if(E.ad==="Enter")Jt+=`
`;else if(E.tur==="bosluk")Jt+=" ";else{if(E.ad==="Shift")return et=!0,k([{nokta:a.noktaI(z).applyMatrix4(a.grup.matrixWorld),metin:"Shift: s\u0131radaki harf b\xFCy\xFCk"}]),g("Shift bas\u0131ld\u0131, s\u0131radaki harf b\xFCy\xFCk yaz\u0131lacak"),!0;E.tur==="harf"||E.tur==="rakam"?(Jt+=et?E.ad:vv(E.ad),et=!1):nt=!1}if(nt)if(r.yazi=Jt,ct(),E.ad==="Enter"||E.ad==="Geri"||E.tur==="bosluk"){let K=E.ad==="Enter"?"Enter: yeni sat\u0131r":E.ad==="Geri"?"Geri: son harfi siler":"Bo\u015Fluk";k([{nokta:a.noktaI(z).applyMatrix4(a.grup.matrixWorld),metin:K}])}else U.length&&k([]);return nt}function de(z){let E={...r.imlec},nt=o.grup.position.x,K=o.grup.position.z,ot=kn.x+(z.x-512)/512*1.2,mt=kn.z+(z.y-288)/288*1.2;st("fare-gez",F(520,at=>{let Pt=uu(at);r.imlec.x=E.x+(z.x-E.x)*Pt,r.imlec.y=E.y+(z.y-E.y)*Pt,o.grup.position.x=nt+(ot-nt)*Pt,o.grup.position.z=K+(mt-K)*Pt,Ct(performance.now())},()=>{ct(),i.golgeYenile()}))}let ie=()=>{ht=(ht+1)%cu.length,de(cu[ht]),g("Fare hareket etti, imle\xE7 ekranda yer de\u011Fi\u015Ftirdi")};function C(z){o.tikla(z),r.menu=z?!1:!r.menu,st("fare-tik",F(460,E=>{r.tik=1+E*2.2,E>.35&&o.birak(),Ct(performance.now())},()=>{r.tik=0,o.birak(),ct()})),g(z?"Sol t\u0131k yap\u0131ld\u0131":r.menu?"Sa\u011F t\u0131k men\xFCs\xFC a\xE7\u0131ld\u0131":"Sa\u011F t\u0131k men\xFCs\xFC kapand\u0131")}function _(){let z=o.tekerlek.rotation.x;st("tekerlek",F(260,E=>{o.tekerlek.rotation.x=z+uu(E)*1.4})),k([{nokta:R("parca:fare-tekerlek"),metin:"Tekerlek: sayfay\u0131 kayd\u0131r\u0131r"}])}function O(){c.ledAyarla(!0),r.ses=0,ct();let z=c.kafa;st("konus",F(3600,(E,nt)=>{r.ses=E*3,j(z.x,z.y,z.z,E*3.6/1.1%1),Ct(nt)},()=>{c.ledAyarla(!1),r.ses=null,kt(),ct()},.3)),g("Mikrofon sesi al\u0131yor, ekranda ses \xE7ubuklar\u0131 hareket ediyor")}function H(){return pt=!pt,r.kamera=pt,d.ledAyarla(pt),ct(),g(pt?"Web kameras\u0131 a\xE7\u0131ld\u0131, g\xF6r\xFCnt\xFC ekranda":"Web kameras\u0131 kapand\u0131"),pt}function Q(){ut=ut===3?0:ut+1,r.kademe=ut,ct();let[z,E]=Df[ut];k([{nokta:R("parca:ekran"),metin:`${hu(z)} \xD7 ${hu(E)} = ${hu(z*E)} piksel`}]),g(`\xC7\xF6z\xFCn\xFCrl\xFCk ${z} \xE7arp\u0131 ${E}, toplam ${z*E} piksel`)}function gt(){r.cal=0,ct(),xt(),st("ses",F(3400,(z,E)=>{r.cal=z*3,it(z*3.4/1%1),Ct(E)},()=>{r.cal=null,Mt(),ct()},.3)),g("Hoparl\xF6rden ses \xE7\u0131k\u0131yor")}function vt(){let z=u.kagit;z.visible=!0,z.position.z=-3.75,u.ledAyarla(!0),r.yazdir=0,ct(),st("yazdir",F(3600,(E,nt)=>{r.yazdir=E,z.position.z=-3.75+13.5*uu(Math.min(1,Math.max(0,(E-.2)/.8))),Ct(nt)},()=>{u.ledAyarla(!1),r.yazdir=1,ct(),i.golgeYenile(),Y(1600,()=>{r.yazdir=null,ct()})})),g("Yaz\u0131c\u0131 k\xE2\u011F\u0131da yazd\u0131r\u0131yor")}function tt(){st("kulak",F(2600,z=>{h.kupMal.emissiveIntensity=Math.max(0,Math.sin(z*Math.PI*5))*.85},()=>{h.kupMal.emissiveIntensity=0},.1)),xt(),g("Ses kulakl\u0131ktan geliyor")}function rt(){let z=He(hn.x-4.7,3.2,hn.z+8.6);st("kulak-konus",F(3e3,E=>{h.ucMal.emissiveIntensity=Math.max(0,Math.sin(E*Math.PI*5))*.9,j(z.x,z.y,z.z,E*3/1.1%1)},()=>{h.ucMal.emissiveIntensity=0,kt()},.1)),g("Kulakl\u0131\u011F\u0131n mikrofonu sesi al\u0131yor")}function St(z){if(f.izle(z),i.iste(),!z){k([]);return}let[E,nt]=Mv[z];k([{nokta:R(E),metin:nt}]),g(nt)}function Gt(){Wt=(Wt+1)%du.length,St(du[Wt])}function wt(z,E){if(!z)return!1;if(yt==="kablo"&&fu[z.parca])return Wt=du.indexOf(fu[z.parca]),St(fu[z.parca]),!0;if(z.parca==="klavye"&&z.tusNo!=null)return L(z.tusNo);if(yt==="fare"&&z.parca==="fare"){if(z.tekerlek)return _(),!0;let nt=o.grup.worldToLocal(E?E.clone():He(0,0,0));return E&&nt.z<-1.2?(C(nt.x<0),!0):(ie(),!0)}return yt==="ekran"&&z.kesif==="ekran"?(Q(),!0):!1}function bt(z){switch(z){case"tus-bas":{let E=lu[lt%lu.length];lt%lu.length===0&&(Jt="",r.yazi=""),lt++,L(a.ara(E));return}case"fare-oynat":ie();return;case"fare-tikla":C(!0);return;case"fare-sag":C(!1);return;case"konus":O();return;case"kamera":return H();case"cozunurluk":Q();return;case"ses":gt();return;case"yazdir":vt();return;case"kulak-dinle":tt();return;case"kulak-konus":rt();return;case"kablo-sonraki":Gt();return;default:}}function Bt(z,E={}){$t(),yt=E.mod||null,r.yazi=E.yazi!=null?E.yazi:"Merhaba!",D=(E.etiket||[]).map(([nt,K,ot])=>({nokta:R(nt),metin:K,tur:ot})).filter(nt=>nt.nokta),U=[],G(),ct(),i.golgeYenile()}function Zt(){B.clear();for(let z of Z)clearTimeout(z);Z.clear();try{Lt&&Lt.state!=="closed"&&Lt.close()}catch{}Lt=null}return Bt("merak",{}),i.golgeYenile(),i.iste(),{kesifNoktalari:M,alanlar:v,noktaBul:R,kutuBul:w,adimUygula:Bt,eylem:bt,durdur:Zt,dokunuldu:wt,parcalar:n,durum:r}}var Sv=[.04,.58,.81],pu={genel:{kutu:[-108,0,-76,108,91,56],yon:Sv},giris:{kutu:[-64,0,-52,74,76,38],yon:[0,.64,.77]},klavye:{kutu:[-48,0,-50,48,66,36],yon:[0,.62,.78]},fare:{kutu:[-12,0,-50,80,64,34],yon:[0,.62,.78]},"mik-kam":{kutu:[-70,0,-52,26,78,44],yon:[0,.6,.8]},cikis:{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},ekran:{kutu:[-44,10,-50,52,68,-38],yon:[0,.2,.98]},"hop-yaz":{kutu:[-66,0,-64,110,72,-16],yon:[0,.5,.87]},kulaklik:{kutu:[68,0,22,112,18,46],yon:[-.1,.52,.85]},kablolar:{kutu:[-108,0,-78,26,92,12],yon:[.12,.46,-.88]}},mu={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06],arkadan:[0,.3,-.96]},op=[["egik","E\u011Fik","E\u011Fik"],["ustten","\xDCstten","\xDCst"],["onden","\xD6nden","\xD6n"],["yandan","Yandan","Yan"],["arkadan","Arkadan","Arka"]],gu={"tus-bas":{yazi:"Tu\u015Fa bas",ikon:"keyboard",tur:"dugme"},"fare-oynat":{yazi:"Fareyi oynat",ikon:"mouse",tur:"dugme"},"fare-tikla":{yazi:"Sol t\u0131kla",ikon:"pointer",tur:"dugme"},"fare-sag":{yazi:"Sa\u011F t\u0131kla",ikon:"mouse",tur:"dugme"},konus:{yazi:"Konu\u015F",ikon:"mic",tur:"dugme"},kamera:{yazi:"Kameray\u0131 a\xE7",ikon:"webcam",tur:"basili"},cozunurluk:{yazi:"\xC7\xF6z\xFCn\xFCrl\xFC\u011F\xFC de\u011Fi\u015Ftir",ikon:"monitor",tur:"dugme"},ses:{yazi:"Ses ver",ikon:"speaker",tur:"dugme"},yazdir:{yazi:"Yazd\u0131r",ikon:"printer",tur:"dugme"},"kulak-dinle":{yazi:"Sesi dinle",ikon:"headphones",tur:"dugme"},"kulak-konus":{yazi:"Mikrofona konu\u015F",ikon:"mic",tur:"dugme"},"kablo-sonraki":{yazi:"S\u0131radaki kablo",ikon:"cable",tur:"dugme"}},z1=Object.fromEntries(Object.entries(gu).map(([i,t])=>[i,t.yazi])),fc={"girdi-cikti-birimleri":{no:1,devre:null,adimlar:{merak:{kamera:"genel",dokun:!0},donanim:{kamera:"genel",etiket:[["parca:kasa","Donan\u0131m","eksi"],["parca:klavye","Donan\u0131m","eksi"],["parca:monitor","Donan\u0131m","eksi"],["parca:ekran","Yaz\u0131l\u0131m","yesil"]]},giris:{kamera:"giris",vurgu:["klavye","fare","mikrofon","kamera"],etiket:[["parca:klavye","Klavye","eksi"],["parca:fare","Fare","eksi"],["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},klavye:{kamera:"klavye",mod:"yaz",yazi:"",kontrol:["tus-bas"],dokun:!0,etiket:[["tus:Esc","Esc"],["tus:Ctrl","Ctrl"],["tus:Shift","Shift"],["tus:Enter","Enter"],["tus:Bosluk","Bo\u015Fluk"]]},fare:{kamera:"fare",mod:"fare",kontrol:["fare-oynat","fare-tikla","fare-sag"],dokun:!0,etiket:[["parca:fare-sol","Sol d\xFC\u011Fme"],["parca:fare-sag","Sa\u011F d\xFC\u011Fme"],["parca:fare-tekerlek","Tekerlek"]]},"mikrofon-kamera":{kamera:"mik-kam",mod:"ses",kontrol:["konus","kamera"],etiket:[["parca:mikrofon","Mikrofon","eksi"],["parca:kamera","Web kameras\u0131","eksi"]]},cikis:{kamera:"cikis",vurgu:["monitor","hoparlor1","hoparlor2","yazici"],etiket:[["parca:monitor","Monit\xF6r","arti"],["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:hoparlor2","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},ekran:{kamera:"ekran",mod:"ekran",kontrol:["cozunurluk"],dokun:!0},"hoparlor-yazici":{kamera:"hop-yaz",kontrol:["ses","yazdir"],etiket:[["parca:hoparlor1","Hoparl\xF6r","arti"],["parca:yazici","Yaz\u0131c\u0131","arti"]]},"ikisi-de":{kamera:"kulaklik",kontrol:["kulak-dinle","kulak-konus"],vurgu:["kulaklik"],etiket:[["parca:kulaklik-mikrofon","Mikrofon: girdi","eksi"],["parca:kulaklik-kup","Kulakl\u0131k: \xE7\u0131kt\u0131","arti"]]},kablolar:{kamera:"kablolar",mod:"kablo",kontrol:["kablo-sonraki"],dokun:!0,etiket:[["parca:arka-hdmi","HDMI"],["parca:arka-usb","USB"],["parca:arka-ses","Ses giri\u015Fleri"],["parca:arka-ag","A\u011F giri\u015Fi"],["parca:arka-guc","G\xFC\xE7 giri\u015Fi"]]},ozet:{kamera:"genel",etiket:[["parca:klavye","Girdi","eksi"],["parca:fare","Girdi","eksi"],["parca:mikrofon","Girdi","eksi"],["parca:kamera","Girdi","eksi"],["parca:monitor","\xC7\u0131kt\u0131","arti"],["parca:hoparlor1","\xC7\u0131kt\u0131","arti"],["parca:hoparlor2","\xC7\u0131kt\u0131","arti"],["parca:yazici","\xC7\u0131kt\u0131","arti"],["parca:kulaklik","Girdi ve \xE7\u0131kt\u0131","yesil"],["parca:usb-bellek","Depolama"]]}}}};var _u={girdi:{ad:"Girdi birimleri",renk:"#1e6fd9",ikon:"keyboard"},cikti:{ad:"\xC7\u0131kt\u0131 birimleri",renk:"#f57c00",ikon:"monitor",koyu:!0},ikisi:{ad:"Hem girdi hem \xE7\u0131kt\u0131",renk:"#7c4dff",ikon:"headphones"},depolama:{ad:"Depolama",renk:"#00897b",ikon:"hard-drive"},kasa:{ad:"Kasa ve ba\u011Flant\u0131lar",renk:"#6b7280",ikon:"plug"}},Xi=3,ai=2,zr=1,pc={klavye:{kat:"girdi",ad:"Klavye",oncelik:Xi,kisa:"Harf, rakam ve komut tu\u015Flar\u0131yla bilgisayara yaz\u0131 yazd\u0131r\u0131r. Girdi birimidir."},"tus-harf":{kat:"girdi",ad:"Harf ve rakam tu\u015Flar\u0131",oncelik:zr,kisa:"Bas\u0131nca ekranda o harf, rakam ya da i\u015Faret belirir."},"tus-ozel":{kat:"girdi",ad:"\xD6zel tu\u015Flar",oncelik:zr,kisa:"Yaz\u0131 yazmak yerine bir i\u015F yapt\u0131ran tu\u015Flar: Tab, Caps Lock, Alt, ok tu\u015Flar\u0131, Delete ve F tu\u015Flar\u0131."},"tus-esc":{kat:"girdi",ad:"Esc tu\u015Fu",oncelik:zr,kisa:"Yap\u0131lan i\u015Ften vazge\xE7meyi ya da a\xE7\u0131k pencereyi kapatmay\u0131 sa\u011Flar."},"tus-shift":{kat:"girdi",ad:"Shift tu\u015Fu",oncelik:ai,kisa:"Bas\u0131l\u0131 tutulurken harfler b\xFCy\xFCk \xE7\u0131kar, rakam tu\u015Flar\u0131n\u0131n \xFCst\xFCndeki i\u015Faretler yaz\u0131l\u0131r."},"tus-ctrl":{kat:"girdi",ad:"Ctrl tu\u015Fu",oncelik:ai,kisa:"Ba\u015Fka bir tu\u015Fla birlikte bas\u0131l\u0131nca k\u0131sayol komutu verir. \xD6rne\u011Fin Ctrl ile C se\xE7ileni kopyalar."},"tus-enter":{kat:"girdi",ad:"Enter tu\u015Fu",oncelik:ai,kisa:"Yazd\u0131\u011F\u0131m\u0131z\u0131 onaylar ya da imleci yeni sat\u0131ra ge\xE7irir."},"tus-bosluk":{kat:"girdi",ad:"Bo\u015Fluk tu\u015Fu",oncelik:ai,kisa:"Kelimeler aras\u0131nda bo\u015Fluk b\u0131rak\u0131r. Klavyenin en uzun tu\u015Fudur."},fare:{kat:"girdi",ad:"Fare",oncelik:Xi,kisa:"Ekrandaki imleci hareket ettirir; sol ve sa\u011F d\xFC\u011Fmeyle se\xE7me, a\xE7ma gibi komutlar verir. Girdi birimidir."},"fare-tekerlek":{kat:"girdi",ad:"Fare tekerle\u011Fi",oncelik:zr,kisa:"Sayfay\u0131 yukar\u0131 a\u015Fa\u011F\u0131 kayd\u0131r\u0131r. Bas\u0131l\u0131nca \xFC\xE7\xFCnc\xFC bir d\xFC\u011Fme gibi de \xE7al\u0131\u015Fabilir."},mikrofon:{kat:"girdi",ad:"Mikrofon",oncelik:Xi,kisa:"Sesi elektrik sinyaline \xE7evirerek bilgisayara aktar\u0131r. Girdi birimidir."},"web-kamerasi":{kat:"girdi",ad:"Web kameras\u0131",oncelik:Xi,kisa:"G\xF6r\xFCnt\xFCy\xFC al\u0131p bilgisayara aktar\u0131r; g\xF6r\xFCnt\xFCl\xFC g\xF6r\xFC\u015Fmede ve foto\u011Fraf \xE7ekmede kullan\u0131l\u0131r. Girdi birimidir."},monitor:{kat:"cikti",ad:"Monit\xF6r",oncelik:Xi,kisa:"Bilgisayar\u0131n \xFCretti\u011Fi g\xF6r\xFCnt\xFCy\xFC g\xF6sterir. \xC7\u0131kt\u0131 birimidir."},ekran:{kat:"cikti",ad:"Ekran ve pikseller",oncelik:ai,kisa:"G\xF6r\xFCnt\xFC, piksel denen \xE7ok k\xFC\xE7\xFCk renkli noktalardan olu\u015Fur. Nokta say\u0131s\u0131 artt\u0131k\xE7a g\xF6r\xFCnt\xFC keskinle\u015Fir."},hoparlor:{kat:"cikti",ad:"Hoparl\xF6r",oncelik:Xi,kisa:"Bilgisayardaki sesi duyulabilir hale getirir. \xC7\u0131kt\u0131 birimidir."},yazici:{kat:"cikti",ad:"Yaz\u0131c\u0131",oncelik:Xi,kisa:"Bilgisayardaki yaz\u0131 ve resmi k\xE2\u011F\u0131da basar. \xC7\u0131kt\u0131 birimidir."},kulaklik:{kat:"ikisi",ad:"Mikrofonlu kulakl\u0131k",oncelik:Xi,kisa:"Sesi kula\u011Fa verir (\xE7\u0131kt\u0131), kolundaki mikrofon sesinizi bilgisayara iletir (girdi)."},"kulaklik-mikrofon":{kat:"ikisi",ad:"Kulakl\u0131\u011F\u0131n mikrofonu",oncelik:zr,kisa:"Kulakl\u0131\u011F\u0131n ucundaki k\xFC\xE7\xFCk mikrofon sesinizi bilgisayara ta\u015F\u0131r. Buras\u0131 girdi taraf\u0131d\u0131r."},"usb-bellek":{kat:"depolama",ad:"USB bellek",oncelik:ai,kisa:"Dosyalar\u0131 saklayan, tak\u0131l\u0131p \xE7\u0131kar\u0131labilen k\xFC\xE7\xFCk depolama birimidir."},kasa:{kat:"kasa",ad:"Kasa",oncelik:Xi,kisa:"Bilgisayar\u0131n ana par\xE7alar\u0131n\u0131 i\xE7inde ta\u015F\u0131yan ve koruyan kutudur. Bu derste kapal\u0131 kal\u0131r."},"guc-dugmesi":{kat:"kasa",ad:"G\xFC\xE7 d\xFC\u011Fmesi",oncelik:ai,kisa:"Bilgisayar\u0131 a\xE7ar ve kapat\u0131r."},"usb-girisi":{kat:"kasa",ad:"USB giri\u015Fi",oncelik:ai,kisa:"Klavye, fare, yaz\u0131c\u0131 ve USB bellek gibi cihazlar\u0131n tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ses-jaklari":{kat:"kasa",ad:"Ses giri\u015Fleri",oncelik:ai,kisa:"Kulakl\u0131k, mikrofon ve hoparl\xF6r kablolar\u0131n\u0131n tak\u0131ld\u0131\u011F\u0131 yuvalar. Yanlar\u0131ndaki simge ve renk hangisinin nereye tak\u0131laca\u011F\u0131n\u0131 g\xF6sterir."},"hdmi-girisi":{kat:"kasa",ad:"HDMI giri\u015Fi",oncelik:ai,kisa:"G\xF6r\xFCnt\xFCy\xFC monit\xF6re ta\u015F\u0131yan kablonun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"ag-girisi":{kat:"kasa",ad:"A\u011F giri\u015Fi",oncelik:zr,kisa:"\u0130nternet kablosunun tak\u0131ld\u0131\u011F\u0131 giri\u015Ftir."},"guc-girisi":{kat:"kasa",ad:"G\xFC\xE7 kablosu giri\u015Fi",oncelik:ai,kisa:"Prizden gelen elektri\u011Fin kasaya girdi\u011Fi yerdir."},"guc-kaynagi":{kat:"kasa",ad:"G\xFC\xE7 kayna\u011F\u0131",oncelik:ai,kisa:"Prizdeki elektri\u011Fi bilgisayar par\xE7alar\u0131n\u0131n kullanabilece\u011Fi d\xFC\u015F\xFCk gerilime \xE7evirir."}};var Je=(i,t=document)=>t.querySelector(i),Ka=new URLSearchParams(location.search),mc=document.documentElement,bv=Ka.has("olcum"),Gr=[];window.addEventListener("error",i=>Gr.push(`${i.message} (${i.filename}:${i.lineno})`));window.addEventListener("unhandledrejection",i=>Gr.push(`s\xF6z: ${i.reason&&i.reason.message?i.reason.message:i.reason}`));var wv=fc[Ka.get("ders")]?Ka.get("ders"):Object.keys(fc)[0],vu=fc[wv],Bn=Object.keys(vu.adimlar),xn=null,Os=null,Yi=Math.max(0,Bn.indexOf(Ka.get("adim")||"merak")),lp=[],dp="egik",cp=null,hp=null,Av=Je("#pv-alt"),Ev=Je("#pv-ust"),up=Je("#sahne-alani"),Tv=()=>({ust:Ev.offsetHeight+8,alt:Av.offsetHeight+14,sol:8,sag:8});function Mu(i){let t=pu[i]||pu.genel;return{kutu:new bn(new I(t.kutu[0],t.kutu[1],t.kutu[2]),new I(t.kutu[3],t.kutu[4],t.kutu[5])),yon:t.yon}}function yu(i){let t=Je("#pv-duyuru");t&&(t.textContent=i)}function Cv(i,t){let e=pc[i];if(!e)return null;let n=_u[e.kat],s=document.createElement("button");s.type="button",s.className="kesif-isaret",s.dataset.kat=e.kat,s.dataset.id=i;let r=document.createElement("span");r.className="ki-daire",r.style.setProperty("--k",n.renk),n.koyu&&r.style.setProperty("--ki","#1b1426");let a=document.createElement("span");return a.className="ki-no",a.textContent=String(t),a.setAttribute("aria-hidden","true"),s.append(r,a),s.setAttribute("aria-label",`${t}. ke\u015Fif noktas\u0131, ${n.ad} grubu`),s.addEventListener("click",o=>{o.stopPropagation();for(let l of document.querySelectorAll(".kesif-isaret[aria-current]"))l.removeAttribute("aria-current");s.setAttribute("aria-current","true"),pp(i)}),s}function fp(){let i=[],t=0;for(let e of Os.kesifNoktalari){let n=Cv(e.id,t+1);n&&(t++,i.push({el:n,nesne:e.nesne,yerel:e.yerel,oncelik:pc[e.id].oncelik}))}xn.isaretKoy(i)}function pp(i){let t=pc[i];t&&(Je("#pv-bilgi-baslik").textContent=t.ad,Je("#pv-bilgi-metin").textContent=t.kisa,Je("#pv-bilgi-kat").textContent=_u[t.kat].ad,Je("#pv-bilgi").hidden=!1,yu(t.ad))}function gc(){Je("#pv-bilgi").hidden=!0;for(let i of document.querySelectorAll(".kesif-isaret[aria-current]"))i.removeAttribute("aria-current")}function xu(i){mc.dataset.kesif=i?"acik":"",Je("#pv-kesif").setAttribute("aria-pressed",String(i)),xn.guvenliYenile(),i?fp():(xn.isaretKoy([]),gc())}function Rv(i){let t=Je("#pv-kontrol");t.replaceChildren();for(let e of i){let n=gu[e];if(!n){Gr.push(`kontrol tan\u0131m\u0131 yok: ${e}`);continue}let s=document.createElement("button");s.type="button",s.className="dugme",s.dataset.eylem=e,s.textContent=n.yazi,n.tur==="basili"&&s.setAttribute("aria-pressed","false"),s.addEventListener("click",()=>{let r=Os.eylem(e);n.tur==="basili"&&typeof r=="boolean"&&s.setAttribute("aria-pressed",String(r)),xn.iste()}),t.appendChild(s)}}function Iv(){let i=Je("#pv-gorunum");for(let[t,e,n]of op){let s=document.createElement("button");s.type="button",s.dataset.gorunum=t,s.setAttribute("aria-pressed",String(t==="egik")),s.innerHTML=`<span class="uzun">${e}</span><span class="kisa">${n}</span>`,s.addEventListener("click",()=>mp(t)),i.appendChild(s)}}function mp(i){dp=i;let t=vu.adimlar[Bn[Yi]]||{},e=Mu(t.kamera||"genel");xn.kameraGit(mu[i]?{...e,yon:mu[i]}:e);for(let n of document.querySelectorAll("#pv-gorunum button"))n.setAttribute("aria-pressed",String(n.dataset.gorunum===i))}function gp(i,t=!1){let e=vu.adimlar[i]||{};dp="egik";for(let n of document.querySelectorAll("#pv-gorunum button"))n.setAttribute("aria-pressed",String(n.dataset.gorunum==="egik"));Os.adimUygula(i,e);for(let n of lp)xn.scene.remove(n);lp=(e.vurgu||[]).map(n=>{let s=Os.alanlar[n];return s?Lf(xn.scene,s):(Gr.push(`alan yok: ${n}`),null)}).filter(Boolean),Rv(e.kontrol||[]),xn.kameraGit(Mu(e.kamera||"genel"),t),mc.dataset.kesif==="acik"&&fp(),Je("#pv-adim").value=i,Je("#pv-sira").textContent=`${Yi+1} / ${Bn.length}`,gc(),xn.iste()}function Vr(i,t=!1){let e=Bn.indexOf(i);if(e<0)throw new Error("ad\u0131m yok: "+i);Yi=e,gp(i,t)}function Pv(){let i=performance.now();if(xn=Rf(Je("#sahne"),{arkaPlan:"#e9e5f1",olay:(n,...s)=>{n==="duyur"&&yu(s[0])},guvenliAlan:Tv}),!xn){mc.dataset.webgl="yok",Gr.push("WebGL yok");return}let t=performance.now();Os=ap(xn,{olay:(n,s)=>{n==="duyur"&&yu(s)}}),cp=Math.round(performance.now()-t),xn.dokunmaDinle((n,s)=>{if(!n){gc();return}if(Os.dokunuldu(n,s)){xn.iste();return}n.kesif&&pp(n.kesif)});let e=Je("#pv-adim");for(let n of Bn){let s=document.createElement("option");s.value=n,s.textContent=n,e.appendChild(s)}if(e.addEventListener("change",()=>Vr(e.value)),Je("#pv-geri").addEventListener("click",()=>Vr(Bn[Math.max(0,Yi-1)])),Je("#pv-ileri").addEventListener("click",()=>Vr(Bn[Math.min(Bn.length-1,Yi+1)])),Je("#pv-kesif").addEventListener("click",()=>xu(mc.dataset.kesif!=="acik")),Je("#pv-bilgi-kapat").addEventListener("click",gc),Iv(),addEventListener("keydown",n=>{n.target&&/^(INPUT|SELECT|TEXTAREA)$/.test(n.target.tagName)||(n.key==="ArrowRight"&&Vr(Bn[Math.min(Bn.length-1,Yi+1)]),n.key==="ArrowLeft"&&Vr(Bn[Math.max(0,Yi-1)]))}),Ka.has("kesif")&&xu(!0),gp(Bn[Yi],!0),requestAnimationFrame(()=>requestAnimationFrame(()=>{hp=Math.round(performance.now()-i),up.classList.add("hazir"),window.__hazir=!0})),window.__donanim={S:xn,sahne:Os,adimaGit:Vr,gorunumSec:mp,kesifDegistir:xu,adim:()=>Bn[Yi],adimlar:Bn,hatalar:Gr,kameraBul:Mu,olcum:()=>({kurulumMs:cp,ilkKareMs:hp,sahneKurMs:Math.round(t-i),dokuSure:hc})},bv){let n=document.createElement("div");n.className="olcum",up.appendChild(n),setInterval(()=>{let s=xn.renderer.info,r=xn.kalite();n.textContent=`\xE7a\u011Fr\u0131 ${s.render.calls} \xB7 \xFC\xE7gen ${s.render.triangles} \xB7 doku ${s.memory.textures} \xB7 geo ${s.memory.geometries} \xB7 \xF6l\xE7ek ${r.piksel}`},500)}}if(!Je("#sahne"))throw new Error("\xF6nizleme kabu\u011Fu eksik");requestAnimationFrame(()=>setTimeout(Pv,20));
