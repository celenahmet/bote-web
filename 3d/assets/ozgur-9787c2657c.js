var Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vp=0,Ih=1,bp=2;var Io=1,pc=2,da=3,Fs=0,_n=1,Ci=2,Yi=0,fa=1,ri=2,kh=3,Ph=4,Mp=5;var cr=100,Sp=101,wp=102,Ap=103,Ep=104,Tp=200,Rp=201,Cp=202,Ip=203,Lh=204,Dh=205,kp=206,Pp=207,Lp=208,Dp=209,Np=210,Up=211,Op=212,Fp=213,Bp=214,Dl=0,Nl=1,Ul=2,qr=3,Ol=4,Fl=5,Bl=6,zl=7,mc=0,zp=1,Gp=2,Ii=0,Nh=1,Uh=2,Oh=3,Fh=4,Bh=5,zh=6,ko=7;var Gh=300,Bs=301,ur=302,gc=303,_c=304,Po=306,Zr=1e3,zi=1001,Gl=1002,pn=1003,Vp=1004;var Lo=1005;var an=1006,yc=1007;var $i=1008;var Un=1009,Vh=1010,Hh=1011,pa=1012,xc=1013,ki=1014,ai=1015,Pi=1016,vc=1017,bc=1018,ma=1020,Wh=35902,Xh=35899,Yh=1021,$h=1022,oi=1023,Vi=1026,zs=1027,Mc=1028,Sc=1029,Gs=1030,wc=1031;var Ac=1033,Do=33776,No=33777,Uo=33778,Oo=33779,Ec=35840,Tc=35841,Rc=35842,Cc=35843,Ic=36196,kc=37492,Pc=37496,Lc=37488,Dc=37489,Fo=37490,Nc=37491,Uc=37808,Oc=37809,Fc=37810,Bc=37811,zc=37812,Gc=37813,Vc=37814,Hc=37815,Wc=37816,Xc=37817,Yc=37818,$c=37819,qc=37820,Zc=37821,Kc=36492,Jc=36494,jc=36495,Qc=36283,tu=36284,Bo=36285,eu=36286;var ja=2300,Vl=2301,Pl=2302,yh=2303,xh=2400,vh=2401,bh=2402;var Hp=3200;var zo=0,Wp=1,Li="",Ke="srgb",Qa="srgb-linear",to="linear",Ce="srgb";var Ll=7680;var Xp=519,Yp=512,$p=513,qp=514,nu=515,Zp=516,Kp=517,iu=518,Jp=519,qh=35044;var Zh="300 es",wi=2e3,Kr=2001;function D0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function N0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jp(){let n=eo("canvas");return n.style.display="block",n}var zf={},Jr=null;function no(...n){let t="THREE."+n.shift();Jr?Jr("log",t,...n):console.log(t,...n)}function Qp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function se(...n){n=Qp(n);let t="THREE."+n.shift();if(Jr)Jr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=Qp(n);let t="THREE."+n.shift();if(Jr)Jr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function nr(...n){let t=n.join(" ");t in zf||(zf[t]=!0,se(...n))}function tm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var em={[Dl]:Nl,[Ul]:Bl,[Ol]:zl,[qr]:Fl,[Nl]:Dl,[Bl]:Ul,[zl]:Ol,[Fl]:qr},Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=1234567,qa=Math.PI/180,jr=180/Math.PI;function Gi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function Kh(n,t){return(n%t+t)%t}function U0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function O0(n,t,e){return n!==t?(e-n)/(t-n):0}function Za(n,t,e){return(1-e)*n+e*t}function F0(n,t,e,i){return Za(n,t,1-Math.exp(-e*i))}function B0(n,t=1){return t-Math.abs(Kh(n,t*2)-t)}function z0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function G0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function V0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function H0(n,t){return n+Math.random()*(t-n)}function W0(n){return n*(.5-Math.random())}function X0(n){n!==void 0&&(Gf=n);let t=Gf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Y0(n){return n*qa}function $0(n){return n*jr}function q0(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Z0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function K0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function J0(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jh={DEG2RAD:qa,RAD2DEG:jr,generateUUID:Gi,clamp:de,euclideanModulo:Kh,mapLinear:U0,inverseLerp:O0,lerp:Za,damp:F0,pingpong:B0,smoothstep:z0,smootherstep:G0,randInt:V0,randFloat:H0,randFloatSpread:W0,seededRandom:X0,degToRad:Y0,radToDeg:$0,isPowerOfTwo:q0,ceilPowerOfTwo:Z0,floorPowerOfTwo:K0,setQuaternionFromProperEuler:J0,normalize:ke,denormalize:Si},id=class id{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};id.prototype.isVector2=!0;var tt=id,Dn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+v*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+v*o;let y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sd=class sd{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $u.copy(this).projectOnVector(t),this.sub($u)}reflect(t){return this.sub($u.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sd.prototype.isVector3=!0;var I=sd,$u=new I,Vf=new Dn,rd=class rd{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],y=s[1],S=s[4],x=s[7],E=s[2],M=s[5],T=s[8];return r[0]=a*v+o*y+l*E,r[3]=a*m+o*S+l*M,r[6]=a*p+o*x+l*T,r[1]=c*v+u*y+d*E,r[4]=c*m+u*S+d*M,r[7]=c*p+u*x+d*T,r[2]=h*v+f*y+g*E,r[5]=h*m+f*S+g*M,r[8]=h*p+f*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(t,e)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-t)),this}translate(t,e){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rd.prototype.isMatrix3=!0;var ce=rd,qu=new ce,Hf=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wf=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){let n={enabled:!0,workingColorSpace:Qa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ce&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ce&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?to:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qa]:{primaries:t,whitePoint:i,transfer:to,toXYZ:Hf,fromXYZ:Wf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:Ce,toXYZ:Hf,fromXYZ:Wf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}var xe=j0();function us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cr,Hl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cr===void 0&&(Cr=eo("canvas")),Cr.width=t.width,Cr.height=t.height;let s=Cr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=us(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(us(e[i]/255)*255):e[i]=us(e[i]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Q0=0,Qr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zu(s[a].image)):r.push(Zu(s[a]))}else r=Zu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Zu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var t_=0,Ku=new I,Pn=class n extends Ai{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=zi,s=zi,r=an,a=$i,o=oi,l=Un,c=n.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Gi(),this.name="",this.source=new Qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Gh;Pn.DEFAULT_ANISOTROPY=1;var ad=class ad{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(f+1)/2,E=(p+1)/2,M=(u+h)/4,T=(d+v)/4,_=(g+m)/4;return S>x&&S>E?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=M/i,r=T/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=M/s,r=_/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=T/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ad.prototype.isVector4=!0;var He=ad,Wl=class extends Ai{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Pn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Wl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},io=class extends Pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends Pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fc=class fc{constructor(t,e,i,s,r,a,o,l,c,u,d,h,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,v,m)}set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ir.setFromMatrixColumn(t,0).length(),r=1/Ir.setFromMatrixColumn(t,1).length(),a=1/Ir.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;e[0]=h+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=v+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;e[0]=h-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=v-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,v=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+v,e[1]=l*d,e[5]=v*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+v,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(e_,t,n_)}lookAt(t,e,i){let s=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ms.crossVectors(i,Wn),Ms.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ms.crossVectors(i,Wn)),Ms.normalize(),ol.crossVectors(Wn,Ms),s[0]=Ms.x,s[4]=ol.x,s[8]=Wn.x,s[1]=Ms.y,s[5]=ol.y,s[9]=Wn.y,s[2]=Ms.z,s[6]=ol.z,s[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],S=i[7],x=i[11],E=i[15],M=s[0],T=s[4],_=s[8],A=s[12],C=s[1],k=s[5],L=s[9],F=s[13],P=s[2],N=s[6],H=s[10],Y=s[14],ot=s[3],K=s[7],nt=s[11],B=s[15];return r[0]=a*M+o*C+l*P+c*ot,r[4]=a*T+o*k+l*N+c*K,r[8]=a*_+o*L+l*H+c*nt,r[12]=a*A+o*F+l*Y+c*B,r[1]=u*M+d*C+h*P+f*ot,r[5]=u*T+d*k+h*N+f*K,r[9]=u*_+d*L+h*H+f*nt,r[13]=u*A+d*F+h*Y+f*B,r[2]=g*M+v*C+m*P+p*ot,r[6]=g*T+v*k+m*N+p*K,r[10]=g*_+v*L+m*H+p*nt,r[14]=g*A+v*F+m*Y+p*B,r[3]=y*M+S*C+x*P+E*ot,r[7]=y*T+S*k+x*N+E*K,r[11]=y*_+S*L+x*H+E*nt,r[15]=y*A+S*F+x*Y+E*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],y=l*f-c*h,S=o*f-c*d,x=o*h-l*d,E=a*f-c*u,M=a*h-l*u,T=a*d-o*u;return e*(v*y-m*S+p*x)-i*(g*y-m*E+p*M)+s*(g*S-v*E+p*T)-r*(g*x-v*M+m*T)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=e*o-i*a,S=e*l-s*a,x=e*c-r*a,E=i*l-s*o,M=i*c-r*o,T=s*c-r*l,_=u*v-d*g,A=u*m-h*g,C=u*p-f*g,k=d*m-h*v,L=d*p-f*v,F=h*p-f*m,P=y*F-S*L+x*k+E*C-M*A+T*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return t[0]=(o*F-l*L+c*k)*N,t[1]=(s*L-i*F-r*k)*N,t[2]=(v*T-m*M+p*E)*N,t[3]=(h*M-d*T-f*E)*N,t[4]=(l*C-a*F-c*A)*N,t[5]=(e*F-s*C+r*A)*N,t[6]=(m*x-g*T-p*S)*N,t[7]=(u*T-h*x+f*S)*N,t[8]=(a*L-o*C+c*_)*N,t[9]=(i*C-e*L-r*_)*N,t[10]=(g*M-v*x+p*y)*N,t[11]=(d*x-u*M-f*y)*N,t[12]=(o*A-a*k-l*_)*N,t[13]=(e*k-i*A+s*_)*N,t[14]=(v*S-g*E-m*y)*N,t[15]=(u*E-d*S+h*y)*N,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,v=a*u,m=a*d,p=o*d,y=l*c,S=l*u,x=l*d,E=i.x,M=i.y,T=i.z;return s[0]=(1-(v+p))*E,s[1]=(f+x)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(h+p))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(g+S)*T,s[9]=(m-y)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ir.set(s[0],s[1],s[2]).length(),o=Ir.set(s[4],s[5],s[6]).length(),l=Ir.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vi.copy(this);let c=1/a,u=1/o,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,e.setFromRotationMatrix(vi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=wi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===wi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Kr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=wi,l=!1){let c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===wi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Kr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fc.prototype.isMatrix4=!0;var we=fc,Ir=new I,vi=new we,e_=new I(0,0,0),n_=new I(1,1,1),Ms=new I,ol=new I,Wn=new I,Xf=new we,Yf=new Dn,Ei=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},i_=0,$f=new I,kr=new Dn,ss=new we,ll=new I,Fa=new I,s_=new I,r_=new Dn,qf=new I(1,0,0),Zf=new I(0,1,0),Kf=new I(0,0,1),Jf={type:"added"},a_={type:"removed"},Pr={type:"childadded",child:null},Ju={type:"childremoved",child:null},Ye=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Ei,i=new Dn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new ce}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,e){return kr.setFromAxisAngle(t,e),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(qf,t)}rotateY(t){return this.rotateOnAxis(Zf,t)}rotateZ(t){return this.rotateOnAxis(Kf,t)}translateOnAxis(t,e){return $f.copy(t).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qf,t)}translateY(t){return this.translateOnAxis(Zf,t)}translateZ(t){return this.translateOnAxis(Kf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ll.copy(t):ll.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(Fa,ll,this.up):ss.lookAt(ll,Fa,this.up),this.quaternion.setFromRotationMatrix(ss),s&&(ss.extractRotation(s.matrixWorld),kr.setFromRotationMatrix(ss),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jf),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(a_),Ju.child=t,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(ss),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jf),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,t,s_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,r_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new I(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},o_={type:"move"},ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},cl={h:0,s:0,l:0};function ju(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=Kh(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ju(a,r,t+1/3),this.g=ju(a,r,t),this.b=ju(a,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=nm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return xe.workingToColorSpace(Sn.copy(this),t),Math.round(de(Sn.r*255,0,255))*65536+Math.round(de(Sn.g*255,0,255))*256+Math.round(de(Sn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(Sn.copy(this),e);let i=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Ke){xe.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,i=Sn.g,s=Sn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ss),this.setHSL(Ss.h+t,Ss.s+e,Ss.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ss),t.getHSL(cl);let i=Za(Ss.h,cl.h,e),s=Za(Ss.s,cl.s,e),r=Za(Ss.l,cl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Gt;Gt.NAMES=nm;var ir=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bi=new I,rs=new I,Qu=new I,as=new I,Lr=new I,Dr=new I,jf=new I,th=new I,eh=new I,nh=new I,ih=new He,sh=new He,rh=new He,cs=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bi.subVectors(t,e),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bi.subVectors(s,e),rs.subVectors(i,e),Qu.subVectors(t,e);let a=bi.dot(bi),o=bi.dot(rs),l=bi.dot(Qu),c=rs.dot(rs),u=rs.dot(Qu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(a,as.y),l.addScaledVector(o,as.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(t,e),sh.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ih,r.x),a.addScaledVector(sh,r.y),a.addScaledVector(rh,r.z),a}static isFrontFacing(t,e,i,s){return bi.subVectors(i,e),rs.subVectors(t,e),bi.cross(rs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),bi.cross(rs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Lr.subVectors(s,i),Dr.subVectors(r,i),th.subVectors(t,i);let l=Lr.dot(th),c=Dr.dot(th);if(l<=0&&c<=0)return e.copy(i);eh.subVectors(t,s);let u=Lr.dot(eh),d=Dr.dot(eh);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Lr,a);nh.subVectors(t,r);let f=Lr.dot(nh),g=Dr.dot(nh);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Dr,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return jf.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(jf,o);let p=1/(m+v+h);return a=v*p,o=h*p,e.copy(i).addScaledVector(Lr,a).addScaledVector(Dr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ni=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ul.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(t.matrixWorld),this.union(ul)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ba),hl.subVectors(this.max,Ba),Nr.subVectors(t.a,Ba),Ur.subVectors(t.b,Ba),Or.subVectors(t.c,Ba),ws.subVectors(Ur,Nr),As.subVectors(Or,Ur),Js.subVectors(Nr,Or);let e=[0,-ws.z,ws.y,0,-As.z,As.y,0,-Js.z,Js.y,ws.z,0,-ws.x,As.z,0,-As.x,Js.z,0,-Js.x,-ws.y,ws.x,0,-As.y,As.x,0,-Js.y,Js.x,0];return!ah(e,Nr,Ur,Or,hl)||(e=[1,0,0,0,1,0,0,0,1],!ah(e,Nr,Ur,Or,hl))?!1:(dl.crossVectors(ws,As),e=[dl.x,dl.y,dl.z],ah(e,Nr,Ur,Or,hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},os=[new I,new I,new I,new I,new I,new I,new I,new I],Mi=new I,ul=new ni,Nr=new I,Ur=new I,Or=new I,ws=new I,As=new I,Js=new I,Ba=new I,hl=new I,dl=new I,js=new I;function ah(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){js.fromArray(n,r);let o=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=t.dot(js),c=e.dot(js),u=i.dot(js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var en=new I,fl=new tt,l_=0,wn=class extends Ai{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fl.fromBufferAttribute(this,e),fl.applyMatrix3(t),this.setXY(e,fl.x,fl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Si(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Si(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Si(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var so=class extends wn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ro=class extends wn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ve=class extends wn{constructor(t,e,i){super(new Float32Array(t),e,i)}},c_=new ni,za=new I,oh=new I,Ts=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):c_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;za.subVectors(t,this.center);let e=za.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(za,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(za.copy(t.center).add(oh)),this.expandByPoint(za.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},u_=0,ei=new we,lh=new Ye,Fr=new I,Xn=new ni,Ga=new ni,fn=new I,Je=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(D0(t)?ro:so)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ve(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ga.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Xn.min,Ga.min),Xn.expandByPoint(fn),fn.addVectors(Xn.max,Ga.max),Xn.expandByPoint(fn)):(Xn.expandByPoint(Ga.min),Xn.expandByPoint(Ga.max))}Xn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)fn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(fn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fn.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(t,c),fn.add(Fr)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new wn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new I,l[_]=new I;let c=new I,u=new I,d=new I,h=new tt,f=new tt,g=new tt,v=new I,m=new I;function p(_,A,C){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,C),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,C),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(k),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(k),o[_].add(v),o[A].add(v),o[C].add(v),l[_].add(m),l[A].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,A=y.length;_<A;++_){let C=y[_],k=C.start,L=C.count;for(let F=k,P=k+L;F<P;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new I,x=new I,E=new I,M=new I;function T(_){E.fromBufferAttribute(s,_),M.copy(E);let A=o[_];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),x.crossVectors(M,A);let k=x.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,k)}for(let _=0,A=y.length;_<A;++_){let C=y[_],k=C.start,L=C.count;for(let F=k,P=k+L;F<P;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new wn(h,u,d)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},In=new I,na=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ch=new I,h_=new I,d_=new ce,kn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ch.subVectors(i,e).cross(h_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ch),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||d_.getNormalMatrix(t),s=this.coplanarPoint(ch).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},f_=0,ii=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=fa,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new kn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Rs=class extends ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Br,Va=new I,zr=new I,Gr=new I,Vr=new tt,Ha=new tt,im=new we,pl=new I,Wa=new I,ml=new I,Qf=new tt,uh=new tt,tp=new tt,sr=class extends Ye{constructor(t=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ao(e,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new na(i,3,0,!1)),Br.setAttribute("uv",new na(i,2,3,!1))}this.geometry=Br,this.material=t,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),im.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Gr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;gl(pl.set(-.5,-.5,0),Gr,a,zr,s,r),gl(Wa.set(.5,-.5,0),Gr,a,zr,s,r),gl(ml.set(.5,.5,0),Gr,a,zr,s,r),Qf.set(0,0),uh.set(1,0),tp.set(1,1);let o=t.ray.intersectTriangle(pl,Wa,ml,!1,Va);if(o===null&&(gl(Wa.set(-.5,.5,0),Gr,a,zr,s,r),uh.set(0,1),o=t.ray.intersectTriangle(pl,ml,Wa,!1,Va),o===null))return;let l=t.ray.origin.distanceTo(Va);l<t.near||l>t.far||e.push({distance:l,point:Va.clone(),uv:cs.getInterpolation(Va,pl,Wa,ml,Qf,uh,tp,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function gl(n,t,e,i,s,r){Vr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ha.x=r*Vr.x-s*Vr.y,Ha.y=s*Vr.x+r*Vr.y):Ha.copy(Vr),n.copy(t),n.x+=Ha.x,n.y+=Ha.y,n.applyMatrix4(im)}var ls=new I,hh=new I,_l=new I,yl=new I,rr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ls)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ls.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ls.copy(this.origin).addScaledVector(this.direction,e),ls.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){hh.copy(t).add(e).multiplyScalar(.5),_l.copy(e).sub(t).normalize(),yl.copy(this.origin).sub(hh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_l),o=yl.dot(this.direction),l=-yl.dot(_l),c=yl.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hh).addScaledVector(_l,h),f}intersectSphere(t,e){if(t.radius<0)return null;ls.subVectors(t.center,this.origin);let i=ls.dot(this.direction),s=ls.dot(ls)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ls)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,y=i.y-a.y,S=i.z-a.z,x=Math.abs(l),E=Math.abs(c),M=Math.abs(u),T,_,A,C,k,L,F,P,N,H,Y,ot;if(x>=E&&x>=M?(A=l,L=d,N=g,ot=p,l>=0?(T=c,_=u,C=h,k=f,F=v,P=m,H=y,Y=S):(T=u,_=c,C=f,k=h,F=m,P=v,H=S,Y=y)):E>=M?(A=c,L=h,N=v,ot=y,c>=0?(T=u,_=l,C=f,k=d,F=m,P=g,H=S,Y=p):(T=l,_=u,C=d,k=f,F=g,P=m,H=p,Y=S)):(A=u,L=f,N=m,ot=S,u>=0?(T=l,_=c,C=d,k=h,F=g,P=v,H=p,Y=y):(T=c,_=l,C=h,k=d,F=v,P=g,H=y,Y=p)),A===0)return null;let K=T/A,nt=_/A,B=1/A,dt=C-K*L,ht=k-nt*L,Zt=F-K*N,ee=P-nt*N,ne=H-K*ot,Q=Y-nt*ot,it=ne*ee-Q*Zt,gt=dt*Q-ht*ne,Wt=Zt*ht-ee*dt;if(s){if(it<0||gt<0||Wt<0)return null}else if((it<0||gt<0||Wt<0)&&(it>0||gt>0||Wt>0))return null;let At=it+gt+Wt;if(At===0)return null;let Xt=B*(it*L+gt*N+Wt*ot);return(At>0?Xt<0:Xt>0)?null:this.at(Xt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ep=new we,Qs=new rr,xl=new Ts,np=new I,vl=new I,bl=new I,Ml=new I,dh=new I,Sl=new I,ip=new I,wl=new I,wt=class extends Ye{constructor(t=new Je,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(dh.fromBufferAttribute(d,t),a?Sl.addScaledVector(dh,u):Sl.addScaledVector(dh.sub(e),u))}e.add(Sl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),Qs.copy(t.ray).recast(t.near),!(xl.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(xl,np)===null||Qs.origin.distanceToSquared(np)>(t.far-t.near)**2))&&(ep.copy(r).invert(),Qs.copy(t.ray).applyMatrix4(ep),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qs)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=S;x<E;x+=3){let M=o.getX(x),T=o.getX(x+1),_=o.getX(x+2);s=Al(this,p,t,i,c,u,d,M,T,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=Al(this,a,t,i,c,u,d,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=S;x<E;x+=3){let M=x,T=x+1,_=x+2;s=Al(this,p,t,i,c,u,d,M,T,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=m,S=m+1,x=m+2;s=Al(this,a,t,i,c,u,d,y,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function p_(n,t,e,i,s,r,a,o){let l;if(t.side===_n?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Fs,o),l===null)return null;wl.copy(o),wl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(wl);return c<e.near||c>e.far?null:{distance:c,point:wl.clone(),object:n}}function Al(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,vl),n.getVertexPosition(l,bl),n.getVertexPosition(c,Ml);let u=p_(n,t,e,i,vl,bl,Ml,ip);if(u){let d=new I;cs.getBarycoord(ip,vl,bl,Ml,d),s&&(u.uv=cs.getInterpolatedAttribute(s,o,l,c,d,new tt)),r&&(u.uv1=cs.getInterpolatedAttribute(r,o,l,c,d,new tt)),a&&(u.normal=cs.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};cs.getNormal(vl,bl,Ml,h.normal),u.face=h,u.barycoord=d}return u}var oo=class extends Pn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=pn,u=pn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ia=class extends wn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hr=new we,sp=new we,El=[],rp=new ni,m_=new we,Xa=new wt,Ya=new Ts,Yn=class extends wt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,m_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hr),rp.copy(t.boundingBox).applyMatrix4(Hr),this.boundingBox.union(rp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ts),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hr),Ya.copy(t.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Ya)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(i),t.ray.intersectsSphere(Ya)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hr),sp.multiplyMatrices(i,Hr),Xa.matrixWorld=sp,Xa.raycast(t,El);for(let a=0,o=El.length;a<o;a++){let l=El[a];l.instanceId=r,l.object=this,e.push(l)}El.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new oo(new Float32Array(s*this.count),s,this.count,Mc,ai));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tr=new Ts,g_=new tt(.5,.5),Tl=new I,sa=class{constructor(t=new kn,e=new kn,i=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],y=r[12],S=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,p-g,E-y).normalize(),s[1].setComponents(c+a,f+u,p+g,E+y).normalize(),s[2].setComponents(c+o,f+d,p+v,E+S).normalize(),s[3].setComponents(c-o,f-d,p-v,E-S).normalize(),i)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,f-h,p-m,E-x).normalize();else if(s[4].setComponents(c-l,f-h,p-m,E-x).normalize(),e===wi)s[5].setComponents(c+l,f+h,p+m,E+x).normalize();else if(e===Kr)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);let e=g_.distanceTo(t.center);return tr.radius=.7071067811865476+e,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Tl.x=s.normal.x>0?t.max.x:t.min.x,Tl.y=s.normal.y>0?t.max.y:t.min.y,Tl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lo=class extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};var co=class extends Pn{constructor(t=[],e=Bs,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hi=class extends Pn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Cs=class extends Pn{constructor(t,e,i=ki,s,r,a,o=pn,l=pn,c,u=Vi,d=1){if(u!==Vi&&u!==zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Yl=class extends Cs{constructor(t,e=ki,i=Bs,s,r,a=pn,o=pn,l,c=Vi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},uo=class extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},he=class n extends Je{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2));function g(v,m,p,y,S,x,E,M,T,_,A){let C=x/T,k=E/_,L=x/2,F=E/2,P=M/2,N=T+1,H=_+1,Y=0,ot=0,K=new I;for(let nt=0;nt<H;nt++){let B=nt*k-F;for(let dt=0;dt<N;dt++){let ht=dt*C-L;K[v]=ht*y,K[m]=B*S,K[p]=P,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=M>0?1:-1,u.push(K.x,K.y,K.z),d.push(dt/T),d.push(1-nt/_),Y+=1}}for(let nt=0;nt<_;nt++)for(let B=0;B<T;B++){let dt=h+B+N*nt,ht=h+B+N*(nt+1),Zt=h+(B+1)+N*(nt+1),ee=h+(B+1)+N*nt;l.push(dt,ht,ee),l.push(ht,Zt,ee),ot+=6}o.addGroup(f,ot,A),f+=ot,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ar=class n extends Je{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,u=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$e=class n extends Je{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,v=[],m=i/2,p=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(f,2));function y(){let x=new I,E=new I,M=0,T=(e-t)/i;for(let _=0;_<=r;_++){let A=[],C=_/r,k=C*(e-t)+t;for(let L=0;L<=s;L++){let F=L/s,P=F*l+o,N=Math.sin(P),H=Math.cos(P);E.x=k*N,E.y=-C*i+m,E.z=k*H,d.push(E.x,E.y,E.z),x.set(N,T,H).normalize(),h.push(x.x,x.y,x.z),f.push(F,1-C),A.push(g++)}v.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let C=v[A][_],k=v[A+1][_],L=v[A+1][_+1],F=v[A][_+1];(t>0||A!==0)&&(u.push(C,k,F),M+=3),(e>0||A!==r-1)&&(u.push(k,L,F),M+=3)}c.addGroup(p,M,0),p+=M}function S(x){let E=g,M=new tt,T=new I,_=0,A=x===!0?t:e,C=x===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),g++;let k=g;for(let L=0;L<=s;L++){let P=L/s*l+o,N=Math.cos(P),H=Math.sin(P);T.x=A*H,T.y=m*C,T.z=A*N,d.push(T.x,T.y,T.z),h.push(0,C,0),M.x=N*.5+.5,M.y=H*.5*C+.5,f.push(M.x,M.y),g++}for(let L=0;L<s;L++){let F=E+L,P=k+L;x===!0?u.push(P,P+1,F):u.push(P+1,P,F),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new tt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new we;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(de(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(de(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ra=class extends $n{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new tt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$l=class extends ra{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var ap=new I,op=new I,fh=new jh,ph=new jh,mh=new jh,aa=class extends $n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(op.subVectors(s[0],s[1]).add(s[0]),c=op);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ap.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ap),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,m),ph.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,m),mh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(fh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ph.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),mh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(fh.calc(l),ph.calc(l),mh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lp(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function __(n,t){let e=1-n;return e*e*t}function y_(n,t){return 2*(1-n)*n*t}function x_(n,t){return n*n*t}function Ka(n,t,e,i){return __(n,t)+y_(n,e)+x_(n,i)}function v_(n,t){let e=1-n;return e*e*e*t}function b_(n,t){let e=1-n;return 3*e*e*n*t}function M_(n,t){return 3*(1-n)*n*n*t}function S_(n,t){return n*n*n*t}function Ja(n,t,e,i,s){return v_(n,t)+b_(n,e)+M_(n,i)+S_(n,s)}var ho=class extends $n{constructor(t=new tt,e=new tt,i=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ja(t,s.x,r.x,a.x,o.x),Ja(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ql=class extends $n{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ja(t,s.x,r.x,a.x,o.x),Ja(t,s.y,r.y,a.y,o.y),Ja(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fo=class extends $n{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends $n{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends $n{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ka(t,s.x,r.x,a.x),Ka(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends $n{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ka(t,s.x,r.x,a.x),Ka(t,s.y,r.y,a.y),Ka(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(lp(o,l.x,c.x,u.x,d.x),lp(o,l.y,c.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},Kl=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:aa,CubicBezierCurve:ho,CubicBezierCurve3:ql,EllipseCurve:ra,LineCurve:fo,LineCurve3:Zl,QuadraticBezierCurve:po,QuadraticBezierCurve3:mo,SplineCurve:go}),Jl=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}},Is=class extends Jl{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new fo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new po(this.currentPoint.clone(),new tt(t,e),new tt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new ho(this.currentPoint.clone(),new tt(t,e),new tt(i,s),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new go(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new ra(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ti=class extends Is{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Is().fromJSON(s))}return this}};function w_(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=sm(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=C_(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=n[h],g=n[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return _o(r,a,e,o,l,c,0),a}function sm(n,t,e,i,s){let r;if(s===z_(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=cp(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=cp(a/i|0,n[a],n[a+1],r);return r&&oa(r,r.next)&&(xo(r),r=r.next),r}function or(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(oa(e,e.next)||Xe(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _o(n,t,e,i,s,r,a){if(!n)return;!a&&r&&D_(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?E_(n,i,s,r):A_(n)){t.push(l.i,n.i,c.i),xo(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=T_(or(n),t),_o(n,t,e,i,s,r,2)):a===2&&R_(n,t,e,i,s,r):_o(or(n),t,e,i,s,r,1);break}}}function A_(n){let t=n.prev,e=n,i=n.next;if(Xe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&$a(s,o,r,l,a,c,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function E_(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Xe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),v=Math.max(o,l,c),m=Math.max(u,d,h),p=Mh(f,g,t,e,i),y=Mh(v,m,t,e,i),S=n.prevZ,x=n.nextZ;for(;S&&S.z>=p&&x&&x.z<=y;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&$a(o,u,l,d,c,h,S.x,S.y)&&Xe(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&$a(o,u,l,d,c,h,x.x,x.y)&&Xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&$a(o,u,l,d,c,h,S.x,S.y)&&Xe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&$a(o,u,l,d,c,h,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function T_(n,t){let e=n;do{let i=e.prev,s=e.next.next;!oa(i,s)&&am(i,e,e.next,s)&&yo(i,s)&&yo(s,i)&&(t.push(i.i,e.i,s.i),xo(e),xo(e.next),e=n=s),e=e.next}while(e!==n);return or(e)}function R_(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O_(a,o)){let l=om(a,o);a=or(a,a.next),l=or(l,l.next),_o(a,t,e,i,s,r,0),_o(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function C_(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=sm(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(U_(c))}s.sort(I_);for(let r=0;r<s.length;r++)e=k_(s[r],e);return e}function I_(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function k_(n,t){let e=P_(n,t);if(!e)return t;let i=om(e,n);return or(i,i.next),or(e,e.next)}function P_(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(oa(n,e))return e;do{if(oa(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&rm(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);yo(e,n)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&L_(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function L_(n,t){return Xe(n.prev,n,t.prev)<0&&Xe(t.next,n,n.next)<0}function D_(n,t,e,i){let s=n;do s.z===0&&(s.z=Mh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,N_(s)}function N_(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Mh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function U_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function rm(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function $a(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&rm(n,t,e,i,s,r,a,o)}function O_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!F_(n,t)&&(yo(n,t)&&yo(t,n)&&B_(n,t)&&(Xe(n.prev,n,t.prev)||Xe(n,t.prev,t))||oa(n,t)&&Xe(n.prev,n,n.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function oa(n,t){return n.x===t.x&&n.y===t.y}function am(n,t,e,i){let s=Cl(Xe(n,t,e)),r=Cl(Xe(n,t,i)),a=Cl(Xe(e,i,n)),o=Cl(Xe(e,i,t));return!!(s!==r&&a!==o||s===0&&Rl(n,e,t)||r===0&&Rl(n,i,t)||a===0&&Rl(e,n,i)||o===0&&Rl(e,t,i))}function Rl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Cl(n){return n>0?1:n<0?-1:0}function F_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&am(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function yo(n,t){return Xe(n.prev,n,n.next)<0?Xe(n,t,n.next)>=0&&Xe(n,n.prev,t)>=0:Xe(n,t,n.prev)<0||Xe(n,n.next,t)<0}function B_(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function om(n,t){let e=Sh(n.i,n.x,n.y),i=Sh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function cp(n,t,e,i){let s=Sh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z_(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var wh=class{static triangulate(t,e,i=2){return w_(t,e,i)}},er=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];up(t),hp(i,t);let a=t.length;e.forEach(up);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,hp(i,e[l]);let o=wh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function up(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function hp(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ks=class n extends Je{constructor(t=new Ti([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:G_,S,x=!1,E,M,T,_;if(p){S=p.getSpacedPoints(u),x=!0,h=!1;let W=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,W),M=new I,T=new I,_=new I}h||(m=0,f=0,g=0,v=0);let A=o.extractPoints(c),C=A.shape,k=A.holes;if(!er.isClockWise(C)){C=C.reverse();for(let W=0,j=k.length;W<j;W++){let q=k[W];er.isClockWise(q)&&(k[W]=q.reverse())}}function F(W){let q=10000000000000001e-36,st=W[0];for(let lt=1;lt<=W.length;lt++){let _t=lt%W.length,Lt=W[_t],Bt=Lt.x-st.x,ft=Lt.y-st.y,D=Bt*Bt+ft*ft,le=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(st.x),Math.abs(st.y)),jt=q*le*le;if(D<=jt){W.splice(_t,1),lt--;continue}st=Lt}}F(C),k.forEach(F);let P=k.length,N=C;for(let W=0;W<P;W++){let j=k[W];C=C.concat(j)}function H(W,j,q){return j||ie("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(j,q)}let Y=C.length;function ot(W,j,q){let st,lt,_t,Lt=W.x-j.x,Bt=W.y-j.y,ft=q.x-W.x,D=q.y-W.y,le=Lt*Lt+Bt*Bt,jt=Lt*D-Bt*ft;if(Math.abs(jt)>Number.EPSILON){let R=Math.sqrt(le),b=Math.sqrt(ft*ft+D*D),z=j.x-Bt/R,V=j.y+Lt/R,J=q.x-D/b,pt=q.y+ft/b,yt=((J-z)*D-(pt-V)*ft)/(Lt*D-Bt*ft);st=z+Lt*yt-W.x,lt=V+Bt*yt-W.y;let et=st*st+lt*lt;if(et<=2)return new tt(st,lt);_t=Math.sqrt(et/2)}else{let R=!1;Lt>Number.EPSILON?ft>Number.EPSILON&&(R=!0):Lt<-Number.EPSILON?ft<-Number.EPSILON&&(R=!0):Math.sign(Bt)===Math.sign(D)&&(R=!0),R?(st=-Bt,lt=Lt,_t=Math.sqrt(le)):(st=Lt,lt=Bt,_t=Math.sqrt(le/2))}return new tt(st/_t,lt/_t)}let K=[];for(let W=0,j=N.length,q=j-1,st=W+1;W<j;W++,q++,st++)q===j&&(q=0),st===j&&(st=0),K[W]=ot(N[W],N[q],N[st]);let nt=[],B,dt=K.concat();for(let W=0,j=P;W<j;W++){let q=k[W];B=[];for(let st=0,lt=q.length,_t=lt-1,Lt=st+1;st<lt;st++,_t++,Lt++)_t===lt&&(_t=0),Lt===lt&&(Lt=0),B[st]=ot(q[st],q[_t],q[Lt]);nt.push(B),dt=dt.concat(B)}let ht;if(m===0)ht=er.triangulateShape(N,k);else{let W=[],j=[];for(let q=0;q<m;q++){let st=q/m,lt=f*Math.cos(st*Math.PI/2),_t=g*Math.sin(st*Math.PI/2)+v;for(let Lt=0,Bt=N.length;Lt<Bt;Lt++){let ft=H(N[Lt],K[Lt],_t);gt(ft.x,ft.y,-lt),st===0&&W.push(ft)}for(let Lt=0,Bt=P;Lt<Bt;Lt++){let ft=k[Lt];B=nt[Lt];let D=[];for(let le=0,jt=ft.length;le<jt;le++){let R=H(ft[le],B[le],_t);gt(R.x,R.y,-lt),st===0&&D.push(R)}st===0&&j.push(D)}}ht=er.triangulateShape(W,j)}let Zt=ht.length,ee=g+v;for(let W=0;W<Y;W++){let j=h?H(C[W],dt[W],ee):C[W];x?(T.copy(E.normals[0]).multiplyScalar(j.x),M.copy(E.binormals[0]).multiplyScalar(j.y),_.copy(S[0]).add(T).add(M),gt(_.x,_.y,_.z)):gt(j.x,j.y,0)}for(let W=1;W<=u;W++)for(let j=0;j<Y;j++){let q=h?H(C[j],dt[j],ee):C[j];x?(T.copy(E.normals[W]).multiplyScalar(q.x),M.copy(E.binormals[W]).multiplyScalar(q.y),_.copy(S[W]).add(T).add(M),gt(_.x,_.y,_.z)):gt(q.x,q.y,d/u*W)}for(let W=m-1;W>=0;W--){let j=W/m,q=f*Math.cos(j*Math.PI/2),st=g*Math.sin(j*Math.PI/2)+v;for(let lt=0,_t=N.length;lt<_t;lt++){let Lt=H(N[lt],K[lt],st);gt(Lt.x,Lt.y,d+q)}for(let lt=0,_t=k.length;lt<_t;lt++){let Lt=k[lt];B=nt[lt];for(let Bt=0,ft=Lt.length;Bt<ft;Bt++){let D=H(Lt[Bt],B[Bt],st);x?gt(D.x,D.y+S[u-1].y,S[u-1].x+q):gt(D.x,D.y,d+q)}}}ne(),Q();function ne(){let W=s.length/3;if(h){let j=0,q=Y*j;for(let st=0;st<Zt;st++){let lt=ht[st];Wt(lt[2]+q,lt[1]+q,lt[0]+q)}j=u+m*2,q=Y*j;for(let st=0;st<Zt;st++){let lt=ht[st];Wt(lt[0]+q,lt[1]+q,lt[2]+q)}}else{for(let j=0;j<Zt;j++){let q=ht[j];Wt(q[2],q[1],q[0])}for(let j=0;j<Zt;j++){let q=ht[j];Wt(q[0]+Y*u,q[1]+Y*u,q[2]+Y*u)}}i.addGroup(W,s.length/3-W,0)}function Q(){let W=s.length/3,j=0;it(N,j),j+=N.length;for(let q=0,st=k.length;q<st;q++){let lt=k[q];it(lt,j),j+=lt.length}i.addGroup(W,s.length/3-W,1)}function it(W,j){let q=W.length;for(;--q>=0;){let st=q,lt=q-1;lt<0&&(lt=W.length-1);for(let _t=0,Lt=u+m*2;_t<Lt;_t++){let Bt=Y*_t,ft=Y*(_t+1),D=j+st+Bt,le=j+lt+Bt,jt=j+lt+ft,R=j+st+ft;At(D,le,jt,R)}}}function gt(W,j,q){l.push(W),l.push(j),l.push(q)}function Wt(W,j,q){Xt(W),Xt(j),Xt(q);let st=s.length/3,lt=y.generateTopUV(i,s,st-3,st-2,st-1);ye(lt[0]),ye(lt[1]),ye(lt[2])}function At(W,j,q,st){Xt(W),Xt(j),Xt(st),Xt(j),Xt(q),Xt(st);let lt=s.length/3,_t=y.generateSideWallUV(i,s,lt-6,lt-3,lt-2,lt-1);ye(_t[0]),ye(_t[1]),ye(_t[3]),ye(_t[1]),ye(_t[2]),ye(_t[3])}function Xt(W){s.push(l[W*3+0]),s.push(l[W*3+1]),s.push(l[W*3+2])}function ye(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return V_(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Kl[s.type]().fromJSON(s)),new n(i,t.options)}},G_={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new tt(r,a),new tt(o,l),new tt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new tt(a,1-l),new tt(c,1-d),new tt(h,1-g),new tt(v,1-p)]:[new tt(o,1-l),new tt(u,1-d),new tt(f,1-g),new tt(m,1-p)]}};function V_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ri=class n extends Je{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new I,h=new tt,f=new I,g=new I,v=new I,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){let S=i+y*u*s,x=Math.sin(S),E=Math.cos(S);for(let M=0;M<=t.length-1;M++){d.x=t[M].x*x,d.y=t[M].y,d.z=t[M].x*E,a.push(d.x,d.y,d.z),h.x=y/e,h.y=M/(t.length-1),o.push(h.x,h.y);let T=l[3*M+0]*x,_=l[3*M+1],A=l[3*M+0]*E;c.push(T,_,A)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let x=S+y*t.length,E=x,M=x+t.length,T=x+t.length+1,_=x+1;r.push(E,M,_),r.push(T,_,M)}this.setIndex(r),this.setAttribute("position",new ve(a,3)),this.setAttribute("uv",new ve(o,2)),this.setAttribute("normal",new ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var si=class n extends Je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let y=p*h-a;for(let S=0;S<c;S++){let x=S*d-r;g.push(x,-y,0),v.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+c*p,x=y+c*(p+1),E=y+1+c*(p+1),M=y+1+c*p;f.push(S,x,M),f.push(x,E,M)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},la=class n extends Je{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=t,h=(e-t)/s,f=new I,g=new tt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let y=p+m,S=y,x=y+i+1,E=y+i+2,M=y+1;o.push(S,x,M),o.push(x,E,M)}}this.setIndex(o),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Wi=class n extends Je{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,h=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let y=[],S=p/i,x=a+S*o,E=t*Math.cos(x),M=Math.sqrt(t*t-E*E),T=0;p===0&&a===0?T=.5/e:p===i&&l===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){let A=_/e,C=s+A*r;d.x=-M*Math.cos(C),d.y=E,d.z=M*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+T,1-S),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let S=u[p][y+1],x=u[p][y],E=u[p+1][y],M=u[p+1][y+1];(p!==0||a>0)&&f.push(S,x,M),(p!==i-1||l<Math.PI)&&f.push(x,E,M)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vo=class n extends Je{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,f=new I,g=new I;for(let v=0;v<=i;v++){let m=a+v/i*o;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,S=(s+1)*(v-1)+m,x=(s+1)*v+m;l.push(p,y,x),l.push(y,S,x)}this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Xi=class n extends Je{constructor(t=new mo(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new tt,u=new I,d=[],h=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(f,2));function v(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),y(),p()}function m(S){u=t.getPointAt(S/e,u);let x=a.normals[S],E=a.binormals[S];for(let M=0;M<=s;M++){let T=M/s*Math.PI*2,_=Math.sin(T),A=-Math.cos(T);l.x=A*x.x+_*E.x,l.y=A*x.y+_*E.y,l.z=A*x.z+_*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let x=1;x<=s;x++){let E=(s+1)*(S-1)+(x-1),M=(s+1)*S+(x-1),T=(s+1)*S+x,_=(s+1)*(S-1)+x;g.push(E,M,_),g.push(M,T,_)}}function y(){for(let S=0;S<=e;S++)for(let x=0;x<=s;x++)c.x=S/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Kl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var bo=class extends ii{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function hr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(dp(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(dp(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function En(n){let t={};for(let e=0;e<n.length;e++){let i=hr(n[e]);for(let s in i)t[s]=i[s]}return t}function dp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function H_(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var lm={clone:hr,merge:En},W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=H_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new He().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[i].value=new we().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jl=class extends qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pe=class extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Mo=class extends pe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var So=class extends ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ql=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function gh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ps=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends Ps{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vh:r=t,o=2*e-i;break;case bh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:a=t,l=2*i-e;break;case bh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,y=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,S=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+y*a[c+E]+S*a[l+E]+x*a[d+E];return r}},nc=class extends Ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ic=class extends Ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},sc=class extends Ps{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*h+g*2,y=d[p],S=d[p+1],x=t*h+g*2,E=u[x],M=u[x+1],T=$_(i,e,y,E,s);r[g]=cm(T,v,S,M,m)}return r}};function cm(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Y_(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function $_(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=cm(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Y_(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wr(e,this.TimeBufferType),this.values=Wr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Wr(t.times,Array),values:Wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),gh(t.settings)&&(i.settings={inTangents:Wr(t.settings.inTangents,Array),outTangents:Wr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new sc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ja:e=this.InterpolantFactoryMethodDiscrete;break;case Vl:e=this.InterpolantFactoryMethodLinear;break;case Pl:e=this.InterpolantFactoryMethodSmooth;break;case yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return se("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ja;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Pl;case this.InterpolantFactoryMethodBezier:return yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;gh(this.settings)&&(fp(this.settings.inTangents,t),fp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ie("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ie("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&N0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ie("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let v=e[d+g];if(v!==e[h+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,gh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Vl;var Ls=class extends Zn{constructor(t,e,i){super(t,e,i)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=ja;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Zn{constructor(t,e,i,s){super(t,e,i,s)}};rc.prototype.ValueTypeName="color";var ac=class extends Zn{constructor(t,e,i,s){super(t,e,i,s)}};ac.prototype.ValueTypeName="number";var oc=class extends Ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},wo=class extends Zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends Zn{constructor(t,e,i){super(t,e,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ja;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Zn{constructor(t,e,i,s){super(t,e,i,s)}};lc.prototype.ValueTypeName="vector";var cc=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},um=new cc,uc=class{constructor(t){this.manager=t!==void 0?t:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ca=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ao=class extends ca{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_h=new we,pp=new I,mp=new I,Eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pp.setFromMatrixPosition(t.matrixWorld),e.position.copy(pp),mp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){_h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(_h,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Kr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Il=new I,kl=new Dn,Bi=new I,To=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Il,kl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,kl,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Il,kl,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,kl,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Es=new I,gp=new tt,_p=new tt,gn=class extends To{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,e){return this.getViewBounds(t,gp,_p),e.subVectors(_p,gp)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ah=class extends Eo{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}},Ns=class extends ca{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ua=class extends To{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eh=class extends Eo{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends ca{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xr=-90,Yr=1,hc=class extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(Xr,Yr,t,e);s.layers=this.layers,this.add(s);let r=new gn(Xr,Yr,t,e);r.layers=this.layers,this.add(r);let a=new gn(Xr,Yr,t,e);a.layers=this.layers,this.add(a);let o=new gn(Xr,Yr,t,e);o.layers=this.layers,this.add(o);let l=new gn(Xr,Yr,t,e);l.layers=this.layers,this.add(l);let c=new gn(Xr,Yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},dc=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var td="\\[\\]\\.:\\/",q_=new RegExp("["+td+"]","g"),ed="[^"+td+"]",Z_="[^"+td.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",ed),J_=/(WCOD+)?/.source.replace("WCOD",Z_),j_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),ty=new RegExp("^"+K_+J_+j_+Q_+"$"),ey=["material","materials","bones","map"],Th=class{constructor(t,e,i){let s=i||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ge=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(t){let e=ty.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ey.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Th;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B1=new Float32Array(1);var yp=new we,lr=class{constructor(t,e,i=0,s=1/0){this.ray=new rr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yp),this}intersectObject(t,e=!0,i=[]){return Rh(t,this,i,e),i.sort(xp),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Rh(t[s],this,i,e);return i.sort(xp),i}};function xp(n,t){return n.distance-t.distance}function Rh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Rh(r[a],t,e,!0)}}var ha=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var od=class od{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};od.prototype.isMatrix2=!0;var Ch=od;var Co=class extends Ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function nd(n,t,e,i){let s=ny(i);switch(e){case Yh:return n*t;case Mc:return n*t/s.components*s.byteLength;case Sc:return n*t/s.components*s.byteLength;case Gs:return n*t*2/s.components*s.byteLength;case wc:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case oi:return n*t*4/s.components*s.byteLength;case Ac:return n*t*4/s.components*s.byteLength;case Do:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Uo:case Oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Cc:return Math.max(n,16)*Math.max(t,8)/4;case Ec:case Rc:return Math.max(n,8)*Math.max(t,8)/2;case Ic:case kc:case Lc:case Dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pc:case Fo:case Nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kc:case Jc:case jc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Qc:case tu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bo:case eu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ny(n){switch(n){case Un:case Vh:return{byteLength:1,components:1};case pa:case Hh:case Pi:return{byteLength:2,components:1};case vc:case bc:return{byteLength:2,components:4};case ki:case xc:case ai:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pm(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cy(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
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
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
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
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
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
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sy=`#ifdef USE_IRIDESCENCE
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
#endif`,wy=`#ifdef USE_BUMPMAP
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ly=`#define PI 3.141592653589793
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
} // validated`,Dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ny=`vec3 transformedNormal = objectNormal;
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
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
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
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ex=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,lx=`uniform sampler2D dfgLUT;
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
}`,cx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
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
}`,_v=`#if DEPTH_PACKING == 3200
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
}`,yv=`#define DISTANCE
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
}`,xv=`#define DISTANCE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,Ev=`#define LAMBERT
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
}`,Tv=`#define LAMBERT
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
}`,Rv=`#define MATCAP
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
}`,Cv=`#define MATCAP
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
}`,Iv=`#define NORMAL
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
}`,kv=`#define NORMAL
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
}`,Pv=`#define PHONG
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
}`,Lv=`#define PHONG
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
}`,Dv=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
}`,Uv=`#define TOON
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
}`,Ov=`#define TOON
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
}`,Fv=`uniform float size;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Gv=`uniform vec3 color;
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
}`,Vv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:uy,alphahash_pars_fragment:hy,alphamap_fragment:dy,alphamap_pars_fragment:fy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:_y,batching_pars_vertex:yy,batching_vertex:xy,begin_vertex:vy,beginnormal_vertex:by,bsdfs:My,iridescence_fragment:Sy,bumpmap_pars_fragment:wy,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:Ry,color_fragment:Cy,color_pars_fragment:Iy,color_pars_vertex:ky,color_vertex:Py,common:Ly,cube_uv_reflection_fragment:Dy,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Uy,displacementmap_vertex:Oy,emissivemap_fragment:Fy,emissivemap_pars_fragment:By,colorspace_fragment:zy,colorspace_pars_fragment:Gy,envmap_fragment:Vy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:nx,envmap_vertex:Yy,fog_vertex:$y,fog_pars_vertex:qy,fog_fragment:Zy,fog_pars_fragment:Ky,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:jy,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:tx,lights_pars_begin:ex,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ax,lights_physical_fragment:ox,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:ux,lights_fragment_end:hx,lightprobes_pars_fragment:dx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:_x,map_pars_fragment:yx,map_particle_fragment:xx,map_particle_pars_fragment:vx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Sx,morphcolor_vertex:wx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Ex,morphtarget_vertex:Tx,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Ix,normal_pars_vertex:kx,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Nx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Ox,opaque_fragment:Fx,packing:Bx,premultiplied_alpha_fragment:zx,project_vertex:Gx,dithering_fragment:Vx,dithering_pars_fragment:Hx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:$x,shadowmap_vertex:qx,shadowmask_pars_fragment:Zx,skinbase_vertex:Kx,skinning_pars_vertex:Jx,skinning_vertex:jx,skinnormal_vertex:Qx,specularmap_fragment:tv,specularmap_pars_fragment:ev,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:sv,transmission_pars_fragment:rv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:cv,background_vert:uv,background_frag:hv,backgroundCube_vert:dv,backgroundCube_frag:fv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:_v,distance_vert:yv,distance_frag:xv,equirect_vert:vv,equirect_frag:bv,linedashed_vert:Mv,linedashed_frag:Sv,meshbasic_vert:wv,meshbasic_frag:Av,meshlambert_vert:Ev,meshlambert_frag:Tv,meshmatcap_vert:Rv,meshmatcap_frag:Cv,meshnormal_vert:Iv,meshnormal_frag:kv,meshphong_vert:Pv,meshphong_frag:Lv,meshphysical_vert:Dv,meshphysical_frag:Nv,meshtoon_vert:Uv,meshtoon_frag:Ov,points_vert:Fv,points_frag:Bv,shadow_vert:zv,shadow_frag:Gv,sprite_vert:Vv,sprite_frag:Hv},kt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Zi={basic:{uniforms:En([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:En([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:En([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:En([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:En([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:En([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:En([kt.points,kt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:En([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:En([kt.common,kt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:En([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:En([kt.sprite,kt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:En([kt.common,kt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:En([kt.lights,kt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Zi.physical={uniforms:En([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var su={r:0,b:0,g:0},Wv=new we,Lm=new ce;Lm.set(-1,0,0,0,1,0,0,0,1);function Xv(n,t,e,i,s,r){let a=new Gt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let x=y.backgroundBlurriness>0;S=t.get(S,x)}return S}function g(y){let S=!1,x=f(y);x===null?m(a,o):x&&x.isColor&&(m(x,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,S){let x=f(S);x&&(x.isCubeTexture||x.mapping===Po)?(c===void 0&&(c=new wt(new he(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:hr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lm),c.material.toneMapped=xe.getTransfer(x.colorSpace)!==Ce,(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new wt(new si(2,2),new qn({name:"BackgroundMaterial",uniforms:hr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=xe.getTransfer(x.colorSpace)!==Ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(su,Qh(n)),e.buffers.color.setClear(su.r,su.g,su.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Yv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(k,L,F,P,N){let H=!1,Y=d(k,P,F,L);r!==Y&&(r=Y,c(r.object)),H=f(k,P,F,N),H&&g(k,P,F,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(k,L,F,P),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(k){return n.bindVertexArray(k)}function u(k){return n.deleteVertexArray(k)}function d(k,L,F,P){let N=P.wireframe===!0,H=i[L.id];H===void 0&&(H={},i[L.id]=H);let Y=k.isInstancedMesh===!0?k.id:0,ot=H[Y];ot===void 0&&(ot={},H[Y]=ot);let K=ot[F.id];K===void 0&&(K={},ot[F.id]=K);let nt=K[N];return nt===void 0&&(nt=h(l()),K[N]=nt),nt}function h(k){let L=[],F=[],P=[];for(let N=0;N<e;N++)L[N]=0,F[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:P,object:k,attributes:{},index:null}}function f(k,L,F,P){let N=r.attributes,H=L.attributes,Y=0,ot=F.getAttributes();for(let K in ot)if(ot[K].location>=0){let B=N[K],dt=H[K];if(dt===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(dt=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(dt=k.instanceColor)),B===void 0||B.attribute!==dt||dt&&B.data!==dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==P}function g(k,L,F,P){let N={},H=L.attributes,Y=0,ot=F.getAttributes();for(let K in ot)if(ot[K].location>=0){let B=H[K];B===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(B=k.instanceColor));let dt={};dt.attribute=B,B&&B.data&&(dt.data=B.data),N[K]=dt,Y++}r.attributes=N,r.attributesNum=Y,r.index=P}function v(){let k=r.newAttributes;for(let L=0,F=k.length;L<F;L++)k[L]=0}function m(k){p(k,0)}function p(k,L){let F=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;F[k]=1,P[k]===0&&(n.enableVertexAttribArray(k),P[k]=1),N[k]!==L&&(n.vertexAttribDivisor(k,L),N[k]=L)}function y(){let k=r.newAttributes,L=r.enabledAttributes;for(let F=0,P=L.length;F<P;F++)L[F]!==k[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function S(k,L,F,P,N,H,Y){Y===!0?n.vertexAttribIPointer(k,L,F,N,H):n.vertexAttribPointer(k,L,F,P,N,H)}function x(k,L,F,P){v();let N=P.attributes,H=F.getAttributes(),Y=L.defaultAttributeValues;for(let ot in H){let K=H[ot];if(K.location>=0){let nt=N[ot];if(nt===void 0&&(ot==="instanceMatrix"&&k.instanceMatrix&&(nt=k.instanceMatrix),ot==="instanceColor"&&k.instanceColor&&(nt=k.instanceColor)),nt!==void 0){let B=nt.normalized,dt=nt.itemSize,ht=t.get(nt);if(ht===void 0)continue;let Zt=ht.buffer,ee=ht.type,ne=ht.bytesPerElement,Q=ee===n.INT||ee===n.UNSIGNED_INT||nt.gpuType===xc;if(nt.isInterleavedBufferAttribute){let it=nt.data,gt=it.stride,Wt=nt.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<K.locationSize;At++)p(K.location+At,it.meshPerAttribute);k.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<K.locationSize;At++)m(K.location+At);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let At=0;At<K.locationSize;At++)S(K.location+At,dt/K.locationSize,ee,B,gt*ne,(Wt+dt/K.locationSize*At)*ne,Q)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)p(K.location+it,nt.meshPerAttribute);k.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<K.locationSize;it++)m(K.location+it);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let it=0;it<K.locationSize;it++)S(K.location+it,dt/K.locationSize,ee,B,dt*ne,dt/K.locationSize*it*ne,Q)}}else if(Y!==void 0){let B=Y[ot];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(K.location,B);break;case 3:n.vertexAttrib3fv(K.location,B);break;case 4:n.vertexAttrib4fv(K.location,B);break;default:n.vertexAttrib1fv(K.location,B)}}}}y()}function E(){A();for(let k in i){let L=i[k];for(let F in L){let P=L[F];for(let N in P){let H=P[N];for(let Y in H)u(H[Y].object),delete H[Y];delete P[N]}}delete i[k]}}function M(k){if(i[k.id]===void 0)return;let L=i[k.id];for(let F in L){let P=L[F];for(let N in P){let H=P[N];for(let Y in H)u(H[Y].object),delete H[Y];delete P[N]}}delete i[k.id]}function T(k){for(let L in i){let F=i[L];for(let P in F){let N=F[P];if(N[k.id]===void 0)continue;let H=N[k.id];for(let Y in H)u(H[Y].object),delete H[Y];delete N[k.id]}}}function _(k){for(let L in i){let F=i[L],P=k.isInstancedMesh===!0?k.id:0,N=F[P];if(N!==void 0){for(let H in N){let Y=N[H];for(let ot in Y)u(Y[ot].object),delete Y[ot];delete N[H]}delete F[P],Object.keys(F).length===0&&delete i[L]}}}function A(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function $v(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==oi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Un&&T!==ai&&!_&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(se("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:x,maxSamples:E,samples:M}}function Zv(n){let t=this,e=null,i=0,s=!1,r=!1,a=new kn,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:i,S=y*4,x=p.clippingState||null;l.value=x,x=u(g,h,S,f);for(let E=0;E!==S;++E)x[E]=e[E];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==v;++S,x+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var _a=4,Kv=6,Jv=20,jv=256,Go=new ua,hm=new Gt,ld=null,cd=0,ud=0,hd=!1,Qv=new I,dr=new I,xa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Qv}=r;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ld,cd,ud),this._renderer.xr.enabled=hd,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Pi,format:oi,colorSpace:Qa,depthBuffer:!1},s=dm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tb(r)),this._blurMaterial=nb(r,t,e),this._ggxMaterial=eb(r,t,e)}return s}_compileMaterial(t){let e=new wt(new Je,t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,i,s,r){let l=new gn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(hm),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new he,new An({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(hm),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let E=this._cubeSize;ga(s,x*E,S>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Bs||t.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ga(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Go)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-_a?i-g+_a:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ga(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Go),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ga(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Go)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-_a?s-this._lodMax+_a:0),h=4*(this._cubeSize-u);ga(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Go)}};function tb(n){let t=[],e=[],i=n,s=n-_a+1+Kv;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let p=0;p<d;p++){let y=p%3*2/3-1,S=p>2?0:-1,x=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];g.set(x,f*h*p);for(let E=0;E<h;E++){let M=u[E*2]*2-1,T=u[E*2+1]*2-1;p===0?dr.set(1,T,M):p===1?dr.set(-M,1,-T):p===2?dr.set(-M,T,1):p===3?dr.set(-1,T,-M):p===4?dr.set(-M,-1,T):dr.set(M,T,-1),dr.toArray(v,(p*h+E)*f)}}let m=new Je;m.setAttribute("position",new wn(g,f)),m.setAttribute("outputDirection",new wn(v,f)),e.push(new wt(m,null)),i>_a&&i--}return{lodMeshes:e,sizeLods:t}}function dm(n,t,e){let i=new Nn(n,t,e);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function eb(n,t,e){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function nb(n,t,e){return new qn({name:"SphericalGaussianBlur",defines:{SAMPLES:Jv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function fm(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function pm(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var au=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new co(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Yi});r.uniforms.tEquirect.value=e;let a=new wt(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=an),new hc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function ib(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===gc||f===_c)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new au(g.height);return v.fromEquirectangularTexture(n,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===gc||f===_c,v=f===Bs||f===ur;if(g||v){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new xa(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return g&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new xa(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===gc?h.mapping=Bs:f===_c&&(h.mapping=ur),h}function l(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sb(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&nr("WebGLRenderer: "+i+" extension not supported."),s}}}function rb(n,t,e,i){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let y=f.array;v=f.version;for(let S=0,x=y.length;S<x;S+=3){let E=y[S+0],M=y[S+1],T=y[S+2];h.push(E,M,M,T,T,E)}}else{let y=g.array;v=g.version;for(let S=0,x=y.length/3-1;S<x;S+=3){let E=S+0,M=S+1,T=S+2;h.push(E,M,M,T,T,E)}}let m=new(g.count>=65535?ro:so)(h,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ab(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ob(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lb(n,t,e){let i=new WeakMap,s=new He;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let A=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let x=o.attributes.position.count*S,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*E*4*d),T=new io(M,x,E,d);T.type=ai,T.needsUpdate=!0;let _=S*4;for(let C=0;C<d;C++){let k=m[C],L=p[C],F=y[C],P=x*E*4*C;for(let N=0;N<k.count;N++){let H=N*_;f===!0&&(s.fromBufferAttribute(k,N),M[P+H+0]=s.x,M[P+H+1]=s.y,M[P+H+2]=s.z,M[P+H+3]=0),g===!0&&(s.fromBufferAttribute(L,N),M[P+H+4]=s.x,M[P+H+5]=s.y,M[P+H+6]=s.z,M[P+H+7]=0),v===!0&&(s.fromBufferAttribute(F,N),M[P+H+8]=s.x,M[P+H+9]=s.y,M[P+H+10]=s.z,M[P+H+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new tt(x,E)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function cb(n,t,e,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var ub={[Nh]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Oh]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};function hb(n,t,e,i,s,r){let a=new Nn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Je;c.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ve([0,2,0,0,2,0],2));let u=new jl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new wt(c,u),h=new ua(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,y=[],S=!1;this.setSize=function(x,E){a.setSize(x,E),o!==null&&o.setSize(x,E),l!==null&&l.setSize(x,E);for(let M=0;M<y.length;M++){let T=y[M];T.setSize&&T.setSize(x,E)}},this.setEffects=function(x){y=x,S=y.length>0&&y[0].isRenderPass===!0;let E=a.width,M=a.height;y.length>0&&o===null&&(o=new Nn(E,M,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(E,M,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let _=y[T];_.setSize&&_.setSize(E,M)}},this.begin=function(x,E){if(v||x.toneMapping===Ii&&y.length===0)return!1;if(p=E,E!==null){let M=E.width,T=E.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return S===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Ii,!0},this.hasRenderPass=function(){return S},this.end=function(x,E){x.toneMapping=m,v=!0;let M=a,T=o;for(let _=0;_<y.length;_++){let A=y[_];A.enabled!==!1&&(A.render(x,T,M,E),A.needsSwap!==!1&&(M=T,T=T===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},xe.getTransfer(f)===Ce&&(u.defines.SRGB_TRANSFER="");let _=ub[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(p),x.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Dm=new Pn,pd=new Cs(1,1),Nm=new io,Um=new Xl,Om=new co,mm=[],gm=[],_m=new Float32Array(16),ym=new Float32Array(9),xm=new Float32Array(4);function va(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=mm[s];if(r===void 0&&(r=new Float32Array(s),mm[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function on(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ln(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cu(n,t){let e=gm[t];e===void 0&&(e=new Int32Array(t),gm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function db(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2fv(this.addr,t),ln(e,t)}}function pb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;n.uniform3fv(this.addr,t),ln(e,t)}}function mb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4fv(this.addr,t),ln(e,t)}}function gb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,i))return;xm.set(i),n.uniformMatrix2fv(this.addr,!1,xm),ln(e,i)}}function _b(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,i))return;ym.set(i),n.uniformMatrix3fv(this.addr,!1,ym),ln(e,i)}}function yb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(on(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,i))return;_m.set(i),n.uniformMatrix4fv(this.addr,!1,_m),ln(e,i)}}function xb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function vb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2iv(this.addr,t),ln(e,t)}}function bb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3iv(this.addr,t),ln(e,t)}}function Mb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4iv(this.addr,t),ln(e,t)}}function Sb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;n.uniform2uiv(this.addr,t),ln(e,t)}}function Ab(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;n.uniform3uiv(this.addr,t),ln(e,t)}}function Eb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;n.uniform4uiv(this.addr,t),ln(e,t)}}function Tb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pd.compareFunction=e.isReversedDepthBuffer()?iu:nu,r=pd):r=Dm,e.setTexture2D(t||r,s)}function Rb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Um,s)}function Cb(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Om,s)}function Ib(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Nm,s)}function kb(n){switch(n){case 5126:return db;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return yb;case 5124:case 35670:return xb;case 35667:case 35671:return vb;case 35668:case 35672:return bb;case 35669:case 35673:return Mb;case 5125:return Sb;case 36294:return wb;case 36295:return Ab;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Pb(n,t){n.uniform1fv(this.addr,t)}function Lb(n,t){let e=va(t,this.size,2);n.uniform2fv(this.addr,e)}function Db(n,t){let e=va(t,this.size,3);n.uniform3fv(this.addr,e)}function Nb(n,t){let e=va(t,this.size,4);n.uniform4fv(this.addr,e)}function Ub(n,t){let e=va(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ob(n,t){let e=va(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Fb(n,t){let e=va(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bb(n,t){n.uniform1iv(this.addr,t)}function zb(n,t){n.uniform2iv(this.addr,t)}function Gb(n,t){n.uniform3iv(this.addr,t)}function Vb(n,t){n.uniform4iv(this.addr,t)}function Hb(n,t){n.uniform1uiv(this.addr,t)}function Wb(n,t){n.uniform2uiv(this.addr,t)}function Xb(n,t){n.uniform3uiv(this.addr,t)}function Yb(n,t){n.uniform4uiv(this.addr,t)}function $b(n,t,e){let i=this.cache,s=t.length,r=cu(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=pd:a=Dm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function qb(n,t,e){let i=this.cache,s=t.length,r=cu(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Um,r[a])}function Zb(n,t,e){let i=this.cache,s=t.length,r=cu(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Om,r[a])}function Kb(n,t,e){let i=this.cache,s=t.length,r=cu(e,s);on(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nm,r[a])}function Jb(n){switch(n){case 5126:return Pb;case 35664:return Lb;case 35665:return Db;case 35666:return Nb;case 35674:return Ub;case 35675:return Ob;case 35676:return Fb;case 5124:case 35670:return Bb;case 35667:case 35671:return zb;case 35668:case 35672:return Gb;case 35669:case 35673:return Vb;case 5125:return Hb;case 36294:return Wb;case 36295:return Xb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Kb}}var md=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kb(e.type)}},gd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jb(e.type)}},_d=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},dd=/(\w+)(\])?(\[|\.)?/g;function vm(n,t){n.seq.push(t),n.map[t.id]=t}function jb(n,t,e){let i=n.name,s=i.length;for(dd.lastIndex=0;;){let r=dd.exec(i),a=dd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vm(e,c===void 0?new md(o,n,t):new gd(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new _d(o),vm(e,d)),e=d}}}var ya=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);jb(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function bm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Qb=37297,tM=0;function eM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Mm=new ce;function nM(n){xe._getMatrix(Mm,xe.workingColorSpace,n);let t=`mat3( ${Mm.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case to:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+eM(n.getShaderSource(t),o)}else return r}function iM(n,t){let e=nM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var sM={[Nh]:"Linear",[Uh]:"Reinhard",[Oh]:"Cineon",[Fh]:"ACESFilmic",[zh]:"AgX",[ko]:"Neutral",[Bh]:"Custom"};function rM(n,t){let e=sM[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ru=new I;function aM(){xe.getLuminanceCoefficients(ru);let n=ru.x.toFixed(4),t=ru.y.toFixed(4),e=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function lM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ho(n){return n!==""}function wm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Am(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(n){return n.replace(uM,dM)}var hM=new Map;function dM(n,t){let e=me[t];if(e===void 0){let i=hM.get(t);if(i!==void 0)e=me[i],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yd(e)}var fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(n){return n.replace(fM,pM)}function pM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var mM={[Io]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function gM(n){return mM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _M={[Bs]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function yM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_M[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var xM={[ur]:"ENVMAP_MODE_REFRACTION"};function vM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bM={[mc]:"ENVMAP_BLENDING_MULTIPLY",[zp]:"ENVMAP_BLENDING_MIX",[Gp]:"ENVMAP_BLENDING_ADD"};function MM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bM[n.combine]||"ENVMAP_BLENDING_NONE"}function SM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function wM(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=gM(e),c=yM(e),u=vM(e),d=MM(e),h=SM(e),f=oM(e),g=lM(r),v=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Tm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[Tm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?me.tonemapping_pars_fragment:"",e.toneMapping!==Ii?rM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,iM("linearToOutputTexel",e.outputColorSpace),aM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),a=yd(a),a=wm(a,e),a=Am(a,e),o=yd(o),o=wm(o,e),o=Am(o,e),a=Em(a),o=Em(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+m+a,x=y+p+o,E=bm(s,s.VERTEX_SHADER,S),M=bm(s,s.FRAGMENT_SHADER,x);s.attachShader(v,E),s.attachShader(v,M),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(k){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",F=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(M)||"",N=L.trim(),H=F.trim(),Y=P.trim(),ot=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,E,M);else{let nt=Sm(s,E,"vertex"),B=Sm(s,M,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+N+`
`+nt+`
`+B)}else N!==""?se("WebGLProgram: Program Info Log:",N):(H===""||Y==="")&&(K=!1);K&&(k.diagnostics={runnable:ot,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(E),s.deleteShader(M),_=new ya(s,v),A=cM(s,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,Qb)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=M,this}var AM=0,xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vd(t),e.set(t,i)),i}},vd=class{constructor(t){this.id=AM++,this.code=t,this.usedTimes=0}};function EM(n){return n===Gs||n===Fo||n===Bo}function TM(n,t,e,i,s,r){let a=new ta,o=new xd,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,C,k,L,F){let P=k.fog,N=L.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ot=t.get(_.envMap||H,Y),K=ot&&ot.mapping===Po?ot.image.height:null,nt=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&se("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let B=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=B!==void 0?B.length:0,ht=0;N.morphAttributes.position!==void 0&&(ht=1),N.morphAttributes.normal!==void 0&&(ht=2),N.morphAttributes.color!==void 0&&(ht=3);let Zt,ee,ne,Q;if(nt){let Ie=Zi[nt];Zt=Ie.vertexShader,ee=Ie.fragmentShader}else{Zt=_.vertexShader,ee=_.fragmentShader;let Ie=o.getVertexShaderStage(_),$=o.getFragmentShaderStage(_);o.update(_,Ie,$),ne=Ie.id,Q=$.id}let it=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Wt=L.isInstancedMesh===!0,At=L.isBatchedMesh===!0,Xt=!!_.map,ye=!!_.matcap,W=!!ot,j=!!_.aoMap,q=!!_.lightMap,st=!!_.bumpMap&&_.wireframe===!1,lt=!!_.normalMap,_t=!!_.displacementMap,Lt=!!_.emissiveMap,Bt=!!_.metalnessMap,ft=!!_.roughnessMap,D=_.anisotropy>0,le=_.clearcoat>0,jt=_.dispersion>0,R=_.retroreflectivity>0,b=_.iridescence>0,z=_.sheen>0,V=_.transmission>0,J=D&&!!_.anisotropyMap,pt=le&&!!_.clearcoatMap,yt=le&&!!_.clearcoatNormalMap,et=le&&!!_.clearcoatRoughnessMap,at=b&&!!_.iridescenceMap,Et=b&&!!_.iridescenceThicknessMap,Yt=z&&!!_.sheenColorMap,Tt=z&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,$t=!!_.specularColorMap,Qt=!!_.specularIntensityMap,re=V&&!!_.transmissionMap,O=V&&!!_.thicknessMap,vt=!!_.gradientMap,rt=!!_.alphaMap,St=_.alphaTest>0,It=!!_.alphaHash,ct=!!_.extensions,Ht=Ii;_.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let zt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Zt,fragmentShader:ee,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:At,batchingColor:At&&L._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&L.instanceColor!==null,instancingMorph:Wt&&L.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:ye,envMap:W,envMapMode:W&&ot.mapping,envMapCubeUVHeight:K,aoMap:j,lightMap:q,bumpMap:st,normalMap:lt,displacementMap:_t,emissiveMap:Lt,normalMapObjectSpace:lt&&_.normalMapType===Wp,normalMapTangentSpace:lt&&_.normalMapType===zo,packedNormalMap:lt&&_.normalMapType===zo&&EM(_.normalMap.format),metalnessMap:Bt,roughnessMap:ft,anisotropy:D,anisotropyMap:J,clearcoat:le,clearcoatMap:pt,clearcoatNormalMap:yt,clearcoatRoughnessMap:et,dispersion:jt,retroreflection:R,iridescence:b,iridescenceMap:at,iridescenceThicknessMap:Et,sheen:z,sheenColorMap:Yt,sheenRoughnessMap:Tt,specularMap:Mt,specularColorMap:$t,specularIntensityMap:Qt,transmission:V,transmissionMap:re,thicknessMap:O,gradientMap:vt,opaque:_.transparent===!1&&_.blending===fa&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:St,alphaHash:It,combine:_.combine,mapUv:Xt&&g(_.map.channel),aoMapUv:j&&g(_.aoMap.channel),lightMapUv:q&&g(_.lightMap.channel),bumpMapUv:st&&g(_.bumpMap.channel),normalMapUv:lt&&g(_.normalMap.channel),displacementMapUv:_t&&g(_.displacementMap.channel),emissiveMapUv:Lt&&g(_.emissiveMap.channel),metalnessMapUv:Bt&&g(_.metalnessMap.channel),roughnessMapUv:ft&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:pt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(_.sheenRoughnessMap.channel),specularMapUv:Mt&&g(_.specularMap.channel),specularColorMapUv:$t&&g(_.specularColorMap.channel),specularIntensityMapUv:Qt&&g(_.specularIntensityMap.channel),transmissionMapUv:re&&g(_.transmissionMap.channel),thicknessMapUv:O&&g(_.thicknessMap.channel),alphaMapUv:rt&&g(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(lt||D),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Xt||rt),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:ht,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&xe.getTransfer(_.map.colorSpace)===Ce,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&xe.getTransfer(_.emissiveMap.colorSpace)===Ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ci,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(A,_),y(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function y(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let A=f[_.type],C;if(A){let k=Zi[A];C=lm.clone(k.uniforms)}else C=_.uniforms;return C}function x(_,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new wM(n,A,_,s),c.push(C),u.set(A,C)),C}function E(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:T}}function RM(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function CM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Rm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,v,m,p){let y=n[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=a(h),y.groupOrder=v,y.renderOrder=h.renderOrder,y.z=m,y.group=p),t++,y}function l(h,f,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);let S=o(h,f,g,v,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):e.push(S)}function c(h,f,g,v,m,p){let y=o(h,f,g,v,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||CM),i.length>1&&i.sort(f||Rm),s.length>1&&s.sort(f||Rm)}function d(){for(let h=t,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function IM(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Cm,n.set(i,[a])):s>=r.length?(a=new Cm,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function kM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function PM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var LM=0;function DM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function NM(n){let t=new kM,e=PM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new we,a=new we;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,S=0,x=0,E=0,M=0,T=0,_=0,A=0,C=0;c.sort(DM);for(let L=0,F=c.length;L<F;L++){let P=c[L],N=P.color,H=P.intensity,Y=P.distance,ot=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Gs?ot=P.shadow.map.texture:ot=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=N.r*H,d+=N.g*H,h+=N.b*H;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],H);C++}else if(P.isSunLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,B=e.get(P);B.shadowIntensity=nt.intensity,B.shadowBias=nt.bias,B.shadowNormalBias=nt.normalBias,B.shadowRadius=nt.radius,B.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[g]=B,i.sunShadowMap[g]=ot;let dt=nt.getViewportCount();for(let ht=0;ht<dt;ht++)i.sunShadowMatrix[v+ht]=nt.getMatrix(ht),i.sunShadowCascade[v+ht]=nt._cascadeData[ht];v+=dt,g++}i.sun[f]=K,f++}else if(P.isDirectionalLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,B=e.get(P);B.shadowIntensity=nt.intensity,B.shadowBias=nt.bias,B.shadowNormalBias=nt.normalBias,B.shadowRadius=nt.radius,B.shadowMapSize=nt.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=ot,i.directionalShadowMatrix[m]=P.shadow.matrix,E++}i.directional[m]=K,m++}else if(P.isSpotLight){let K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(N).multiplyScalar(H),K.distance=Y,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[y]=K;let nt=P.shadow;if(P.map&&(i.spotLightMap[_]=P.map,_++,nt.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=nt.matrix,P.castShadow){let B=e.get(P);B.shadowIntensity=nt.intensity,B.shadowBias=nt.bias,B.shadowNormalBias=nt.normalBias,B.shadowRadius=nt.radius,B.shadowMapSize=nt.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=ot,T++}y++}else if(P.isRectAreaLight){let K=t.get(P);K.color.copy(N).multiplyScalar(H),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=K,S++}else if(P.isPointLight){let K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){let nt=P.shadow,B=e.get(P);B.shadowIntensity=nt.intensity,B.shadowBias=nt.bias,B.shadowNormalBias=nt.normalBias,B.shadowRadius=nt.radius,B.shadowMapSize=nt.mapSize,B.shadowCameraNear=nt.camera.near,B.shadowCameraFar=nt.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=ot,i.pointShadowMatrix[p]=P.shadow.matrix,M++}i.point[p]=K,p++}else if(P.isHemisphereLight){let K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(H),K.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[x]=K,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=kt.LTC_FLOAT_1,i.rectAreaLTC2=kt.LTC_FLOAT_2):(i.rectAreaLTC1=kt.LTC_HALF_1,i.rectAreaLTC2=kt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let k=i.hash;(k.sunLength!==f||k.directionalLength!==m||k.pointLength!==p||k.spotLength!==y||k.rectAreaLength!==S||k.hemiLength!==x||k.numSunShadows!==g||k.numDirectionalShadows!==E||k.numPointShadows!==M||k.numSpotShadows!==T||k.numSpotMaps!==_||k.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.spotLightMatrix.length=T+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,k.sunLength=f,k.directionalLength=m,k.pointLength=p,k.spotLength=y,k.rectAreaLength=S,k.hemiLength=x,k.numSunShadows=g,k.numDirectionalShadows=E,k.numPointShadows=M,k.numSpotShadows=T,k.numSpotMaps=_,k.numLightProbes=C,i.version=LM++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let x=c[y];if(x.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let E=i.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(x.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Im(n){let t=new NM(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function UM(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Im(n),t.set(s,[o])):r>=a.length?(o=new Im(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`,BM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],zM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],km=new we,Vo=new I,fd=new I;function GM(n,t,e){let i=new sa,s=new tt,r=new tt,a=new He,o=new Ql,l=new tc,c={},u=e.maxTextureSize,d={[Fs]:_n,[_n]:Fs,[Ci]:Ci},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:OM,fragmentShader:FM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new wt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let p=this.type;this.render=function(M,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===pc&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);let A=n.getRenderTarget(),C=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Yi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==this.type;F&&T.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=M.length;P<N;P++){let H=M[P],Y=H.shadow;if(Y===void 0){se("WebGLShadowMap:",H,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ot=Y.getFrameExtents();s.multiply(ot),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,Y.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=K,Y.map===null||F===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===da){if(H.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Nn(s.x,s.y,{format:Gs,type:Pi,minFilter:an,magFilter:an,generateMipmaps:!1}),Y.map.texture.name=H.name+".shadowMap",Y.map.depthTexture=new Cs(s.x,s.y,ai),Y.map.depthTexture.name=H.name+".shadowMapDepth",Y.map.depthTexture.format=Vi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn}else H.isPointLight?(Y.map=new au(s.x),Y.map.depthTexture=new Yl(s.x,ki)):(Y.map=new Nn(s.x,s.y),Y.map.depthTexture=new Cs(s.x,s.y,ki)),Y.map.depthTexture.name=H.name+".shadowMap",Y.map.depthTexture.format=Vi,this.type===Io?(Y.map.depthTexture.compareFunction=K?iu:nu,Y.map.depthTexture.minFilter=an,Y.map.depthTexture.magFilter=an):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let nt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();H.isPointLight!==!0&&Y.updateMatrices(H,_);for(let B=0;B<nt;B++){let dt=Y.getCamera(B);if(H.isPointLight){let ht=Y.camera,Zt=Y.matrix,ee=H.distance||ht.far;ee!==ht.far&&(ht.far=ee,ht.updateProjectionMatrix()),Vo.setFromMatrixPosition(H.matrixWorld),ht.position.copy(Vo),fd.copy(ht.position),fd.add(BM[B]),ht.up.copy(zM[B]),ht.lookAt(fd),ht.updateMatrixWorld(),Zt.makeTranslation(-Vo.x,-Vo.y,-Vo.z),km.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(km,ht.coordinateSystem,ht.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,B),n.clear();else{B===0&&(n.setRenderTarget(Y.map),n.clear());let ht=Y.getViewport(B);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),L.viewport(a)}i=Y.getFrustum(B),x(T,_,dt,H,this.type)}Y.isPointLightShadow!==!0&&this.type===da&&y(Y,_),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,C,k)};function y(M,T){let _=t.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Nn(s.x,s.y,{format:Gs,type:Pi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,_,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,_,f,v,null)}function S(M,T,_,A){let C=null,k=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(k!==void 0)C=k;else if(C=_.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=C.uuid,F=T.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let N=P[F];N===void 0&&(N=C.clone(),P[F]=N,T.addEventListener("dispose",E)),C=N}if(C.visible=T.visible,C.wireframe=T.wireframe,A===da?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:d[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=n.properties.get(C);L.light=_}return C}function x(M,T,_,A,C){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===da)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let F=t.update(M),P=M.material;if(Array.isArray(P)){let N=F.groups;for(let H=0,Y=N.length;H<Y;H++){let ot=N[H],K=P[ot.materialIndex];if(K&&K.visible){let nt=S(M,K,A,C);M.onBeforeShadow(n,M,T,_,F,nt,ot),n.renderBufferDirect(_,null,F,nt,M,ot),M.onAfterShadow(n,M,T,_,F,nt,ot)}}}else if(P.visible){let N=S(M,P,A,C);M.onBeforeShadow(n,M,T,_,F,N,null),n.renderBufferDirect(_,null,F,N,M,null),M.onAfterShadow(n,M,T,_,F,N,null)}}let L=M.children;for(let F=0,P=L.length;F<P;F++)x(L[F],T,_,A,C)}function E(M){M.target.removeEventListener("dispose",E);for(let _ in c){let A=c[_],C=M.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function VM(n,t){function e(){let O=!1,vt=new He,rt=null,St=new He(0,0,0,0);return{setMask:function(It){rt!==It&&!O&&(n.colorMask(It,It,It,It),rt=It)},setLocked:function(It){O=It},setClear:function(It,ct,Ht,zt,Ie){Ie===!0&&(It*=zt,ct*=zt,Ht*=zt),vt.set(It,ct,Ht,zt),St.equals(vt)===!1&&(n.clearColor(It,ct,Ht,zt),St.copy(vt))},reset:function(){O=!1,rt=null,St.set(-1,0,0,0)}}}function i(){let O=!1,vt=!1,rt=null,St=null,It=null;return{setReversed:function(ct){if(vt!==ct){let Ht=t.get("EXT_clip_control");ct?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),vt=ct;let zt=It;It=null,this.setClear(zt)}},getReversed:function(){return vt},setTest:function(ct){ct?it(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!O&&(n.depthMask(ct),rt=ct)},setFunc:function(ct){if(vt&&(ct=em[ct]),St!==ct){switch(ct){case Dl:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case qr:n.depthFunc(n.LEQUAL);break;case Ol:n.depthFunc(n.EQUAL);break;case Fl:n.depthFunc(n.GEQUAL);break;case Bl:n.depthFunc(n.GREATER);break;case zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=ct}},setLocked:function(ct){O=ct},setClear:function(ct){It!==ct&&(It=ct,vt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){O=!1,rt=null,St=null,It=null,vt=!1}}}function s(){let O=!1,vt=null,rt=null,St=null,It=null,ct=null,Ht=null,zt=null,Ie=null;return{setTest:function($){O||($?it(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function($){vt!==$&&!O&&(n.stencilMask($),vt=$)},setFunc:function($,ut,Rt){(rt!==$||St!==ut||It!==Rt)&&(n.stencilFunc($,ut,Rt),rt=$,St=ut,It=Rt)},setOp:function($,ut,Rt){(ct!==$||Ht!==ut||zt!==Rt)&&(n.stencilOp($,ut,Rt),ct=$,Ht=ut,zt=Rt)},setLocked:function($){O=$},setClear:function($){Ie!==$&&(n.clearStencil($),Ie=$)},reset:function(){O=!1,vt=null,rt=null,St=null,It=null,ct=null,Ht=null,zt=null,Ie=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,S=null,x=null,E=null,M=null,T=null,_=new Gt(0,0,0),A=0,C=!1,k=null,L=null,F=null,P=null,N=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ot=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=ot>=1):K.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=ot>=2);let nt=null,B={},dt=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),Zt=new He().fromArray(dt),ee=new He().fromArray(ht);function ne(O,vt,rt,St){let It=new Uint8Array(4),ct=n.createTexture();n.bindTexture(O,ct),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<rt;Ht++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(vt+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return ct}let Q={};Q[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(n.DEPTH_TEST),a.setFunc(qr),st(!1),lt(Ih),it(n.CULL_FACE),j(Yi);function it(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function gt(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Wt(O,vt){return h[O]!==vt?(n.bindFramebuffer(O,vt),h[O]=vt,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function At(O,vt){let rt=g,St=!1;if(O){rt=f.get(vt),rt===void 0&&(rt=[],f.set(vt,rt));let It=O.textures;if(rt.length!==It.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Ht=It.length;ct<Ht;ct++)rt[ct]=n.COLOR_ATTACHMENT0+ct;rt.length=It.length,St=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,St=!0);St&&n.drawBuffers(rt)}function Xt(O){return v!==O?(n.useProgram(O),v=O,!0):!1}let ye={[cr]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[wp]:n.FUNC_REVERSE_SUBTRACT};ye[Ap]=n.MIN,ye[Ep]=n.MAX;let W={[Tp]:n.ZERO,[Rp]:n.ONE,[Cp]:n.SRC_COLOR,[Lh]:n.SRC_ALPHA,[Np]:n.SRC_ALPHA_SATURATE,[Lp]:n.DST_COLOR,[kp]:n.DST_ALPHA,[Ip]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[Dp]:n.ONE_MINUS_DST_COLOR,[Pp]:n.ONE_MINUS_DST_ALPHA,[Up]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Bp]:n.ONE_MINUS_CONSTANT_ALPHA};function j(O,vt,rt,St,It,ct,Ht,zt,Ie,$){if(O===Yi){m===!0&&(gt(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),O!==Mp){if(O!==p||$!==C){if((y!==cr||E!==cr)&&(n.blendEquation(n.FUNC_ADD),y=cr,E=cr),$)switch(O){case fa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFunc(n.ONE,n.ONE);break;case kh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",O);break}else switch(O){case fa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kh:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",O);break}S=null,x=null,M=null,T=null,_.set(0,0,0),A=0,p=O,C=$}return}It=It||vt,ct=ct||rt,Ht=Ht||St,(vt!==y||It!==E)&&(n.blendEquationSeparate(ye[vt],ye[It]),y=vt,E=It),(rt!==S||St!==x||ct!==M||Ht!==T)&&(n.blendFuncSeparate(W[rt],W[St],W[ct],W[Ht]),S=rt,x=St,M=ct,T=Ht),(zt.equals(_)===!1||Ie!==A)&&(n.blendColor(zt.r,zt.g,zt.b,Ie),_.copy(zt),A=Ie),p=O,C=!1}function q(O,vt){O.side===Ci?gt(n.CULL_FACE):it(n.CULL_FACE);let rt=O.side===_n;vt&&(rt=!rt),st(rt),O.blending===fa&&O.transparent===!1?j(Yi):j(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let St=O.stencilWrite;o.setTest(St),St&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){k!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),k=O)}function lt(O){O!==vp?(it(n.CULL_FACE),O!==L&&(O===Ih?n.cullFace(n.BACK):O===bp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),L=O}function _t(O){O!==F&&(Y&&n.lineWidth(O),F=O)}function Lt(O,vt,rt){O?(it(n.POLYGON_OFFSET_FILL),(P!==vt||N!==rt)&&(P=vt,N=rt,a.getReversed()&&(vt=-vt),n.polygonOffset(vt,rt))):gt(n.POLYGON_OFFSET_FILL)}function Bt(O){O?it(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function ft(O){O===void 0&&(O=n.TEXTURE0+H-1),nt!==O&&(n.activeTexture(O),nt=O)}function D(O,vt,rt){rt===void 0&&(nt===null?rt=n.TEXTURE0+H-1:rt=nt);let St=B[rt];St===void 0&&(St={type:void 0,texture:void 0},B[rt]=St),(St.type!==O||St.texture!==vt)&&(nt!==rt&&(n.activeTexture(rt),nt=rt),n.bindTexture(O,vt||Q[O]),St.type=O,St.texture=vt)}function le(){let O=B[nt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function jt(){try{n.compressedTexImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function b(){try{n.texSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function z(){try{n.texSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function pt(){try{n.texStorage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function yt(){try{n.texStorage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function et(){try{n.texImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function at(){try{n.texImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function Et(O){return d[O]!==void 0?d[O]:n.getParameter(O)}function Yt(O,vt){d[O]!==vt&&(n.pixelStorei(O,vt),d[O]=vt)}function Tt(O){Zt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Zt.copy(O))}function Mt(O){ee.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function $t(O,vt){let rt=c.get(vt);rt===void 0&&(rt=new WeakMap,c.set(vt,rt));let St=rt.get(O);St===void 0&&(St=n.getUniformBlockIndex(vt,O.name),rt.set(O,St))}function Qt(O,vt){let St=c.get(vt).get(O);l.get(vt)!==St&&(n.uniformBlockBinding(vt,St,O.__bindingPointIndex),l.set(vt,St))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},nt=null,B={},h={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,S=null,x=null,E=null,M=null,T=null,_=new Gt(0,0,0),A=0,C=!1,k=null,L=null,F=null,P=null,N=null,Zt.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:gt,bindFramebuffer:Wt,drawBuffers:At,useProgram:Xt,setBlending:j,setMaterial:q,setFlipSided:st,setCullFace:lt,setLineWidth:_t,setPolygonOffset:Lt,setScissorTest:Bt,activeTexture:ft,bindTexture:D,unbindTexture:le,compressedTexImage2D:jt,compressedTexImage3D:R,texImage2D:et,texImage3D:at,pixelStorei:Yt,getParameter:Et,updateUBOMapping:$t,uniformBlockBinding:Qt,texStorage2D:pt,texStorage3D:yt,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:Tt,viewport:Mt,reset:re}}function HM(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return g?new OffscreenCanvas(R,b):eo("canvas")}function m(R,b,z){let V=1,J=jt(R);if((J.width>z||J.height>z)&&(V=z/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pt=Math.floor(V*J.width),yt=Math.floor(V*J.height);h===void 0&&(h=v(pt,yt));let et=b?v(pt,yt):h;return et.width=pt,et.height=yt,et.getContext("2d").drawImage(R,0,0,pt,yt),se("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+pt+"x"+yt+")."),et}else return"data"in R&&se("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function y(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,b,z,V,J,pt=!1){if(R!==null){if(n[R]!==void 0)return n[R];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let yt;V&&(yt=t.get("EXT_texture_norm16"),yt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=b;if(b===n.RED&&(z===n.FLOAT&&(et=n.R32F),z===n.HALF_FLOAT&&(et=n.R16F),z===n.UNSIGNED_BYTE&&(et=n.R8),z===n.UNSIGNED_SHORT&&yt&&(et=yt.R16_EXT),z===n.SHORT&&yt&&(et=yt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(et=n.R8UI),z===n.UNSIGNED_SHORT&&(et=n.R16UI),z===n.UNSIGNED_INT&&(et=n.R32UI),z===n.BYTE&&(et=n.R8I),z===n.SHORT&&(et=n.R16I),z===n.INT&&(et=n.R32I)),b===n.RG&&(z===n.FLOAT&&(et=n.RG32F),z===n.HALF_FLOAT&&(et=n.RG16F),z===n.UNSIGNED_BYTE&&(et=n.RG8),z===n.UNSIGNED_SHORT&&yt&&(et=yt.RG16_EXT),z===n.SHORT&&yt&&(et=yt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(et=n.RG8UI),z===n.UNSIGNED_SHORT&&(et=n.RG16UI),z===n.UNSIGNED_INT&&(et=n.RG32UI),z===n.BYTE&&(et=n.RG8I),z===n.SHORT&&(et=n.RG16I),z===n.INT&&(et=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(et=n.RGB8UI),z===n.UNSIGNED_SHORT&&(et=n.RGB16UI),z===n.UNSIGNED_INT&&(et=n.RGB32UI),z===n.BYTE&&(et=n.RGB8I),z===n.SHORT&&(et=n.RGB16I),z===n.INT&&(et=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),z===n.UNSIGNED_INT&&(et=n.RGBA32UI),z===n.BYTE&&(et=n.RGBA8I),z===n.SHORT&&(et=n.RGBA16I),z===n.INT&&(et=n.RGBA32I)),b===n.RGB&&(z===n.UNSIGNED_SHORT&&yt&&(et=yt.RGB16_EXT),z===n.SHORT&&yt&&(et=yt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),b===n.RGBA){let at=pt?to:xe.getTransfer(J);z===n.FLOAT&&(et=n.RGBA32F),z===n.HALF_FLOAT&&(et=n.RGBA16F),z===n.UNSIGNED_BYTE&&(et=at===Ce?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&yt&&(et=yt.RGBA16_EXT),z===n.SHORT&&yt&&(et=yt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function E(R,b){let z;return R?b===null||b===ki||b===ma?z=n.DEPTH24_STENCIL8:b===ai?z=n.DEPTH32F_STENCIL8:b===pa&&(z=n.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===ma?z=n.DEPTH_COMPONENT24:b===ai?z=n.DEPTH_COMPONENT32F:b===pa&&(z=n.DEPTH_COMPONENT16),z}function M(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){let b=R.target;b.removeEventListener("dispose",T),A(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function _(R){let b=R.target;b.removeEventListener("dispose",_),k(b)}function A(R){let b=i.get(R);if(b.__webglInit===void 0)return;let z=R.source,V=f.get(z);if(V){let J=V[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys(V).length===0&&f.delete(z)}i.remove(R)}function C(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let z=R.source,V=f.get(z);delete V[b.__cacheKey],a.memory.textures--}function k(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(b.__webglFramebuffer[V]))for(let J=0;J<b.__webglFramebuffer[V].length;J++)n.deleteFramebuffer(b.__webglFramebuffer[V][J]);else n.deleteFramebuffer(b.__webglFramebuffer[V]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[V])}else{if(Array.isArray(b.__webglFramebuffer))for(let V=0;V<b.__webglFramebuffer.length;V++)n.deleteFramebuffer(b.__webglFramebuffer[V]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let V=0;V<b.__webglColorRenderbuffer.length;V++)b.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[V]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let V=0,J=z.length;V<J;V++){let pt=i.get(z[V]);pt.__webglTexture&&(n.deleteTexture(pt.__webglTexture),a.memory.textures--),i.remove(z[V])}i.remove(R)}let L=0;function F(){L=0}function P(){return L}function N(R){L=R}function H(){let R=L;return R>=s.maxTextures&&se("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function Y(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function ot(R,b){let z=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let V=R.image;if(V===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(z,R,b);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function K(R,b){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){gt(z,R,b);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function nt(R,b){let z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){gt(z,R,b);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function B(R,b){let z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Wt(z,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}let dt={[Zr]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Gl]:n.MIRRORED_REPEAT},ht={[pn]:n.NEAREST,[Vp]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[yc]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Zt={[Yp]:n.NEVER,[Jp]:n.ALWAYS,[$p]:n.LESS,[nu]:n.LEQUAL,[qp]:n.EQUAL,[iu]:n.GEQUAL,[Zp]:n.GREATER,[Kp]:n.NOTEQUAL};function ee(R,b){if(b.type===ai&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===yc||b.magFilter===Lo||b.magFilter===$i||b.minFilter===an||b.minFilter===yc||b.minFilter===Lo||b.minFilter===$i)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,dt[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,dt[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,dt[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ht[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pn||b.minFilter!==Lo&&b.minFilter!==$i||b.type===ai&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ne(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));let V=b.source,J=f.get(V);J===void 0&&(J={},f.set(V,J));let pt=Y(b);if(pt!==R.__cacheKey){J[pt]===void 0&&(J[pt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[pt].usedTimes++;let yt=J[R.__cacheKey];yt!==void 0&&(J[R.__cacheKey].usedTimes--,yt.usedTimes===0&&C(b)),R.__cacheKey=pt,R.__webglTexture=J[pt].texture}return z}function Q(R,b,z){return Math.floor(Math.floor(R/z)/b)}function it(R,b,z,V){let pt=R.updateRanges;if(pt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,z,V,b.data);else{pt.sort((Yt,Tt)=>Yt.start-Tt.start);let yt=0;for(let Yt=1;Yt<pt.length;Yt++){let Tt=pt[yt],Mt=pt[Yt],$t=Tt.start+Tt.count,Qt=Q(Mt.start,b.width,4),re=Q(Tt.start,b.width,4);Mt.start<=$t+1&&Qt===re&&Q(Mt.start+Mt.count-1,b.width,4)===Qt?Tt.count=Math.max(Tt.count,Mt.start+Mt.count-Tt.start):(++yt,pt[yt]=Mt)}pt.length=yt+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),Et=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Yt=0,Tt=pt.length;Yt<Tt;Yt++){let Mt=pt[Yt],$t=Math.floor(Mt.start/4),Qt=Math.ceil(Mt.count/4),re=$t%b.width,O=Math.floor($t/b.width),vt=Qt,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,re),e.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,re,O,vt,rt,z,V,b.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function gt(R,b,z){let V=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(V=n.TEXTURE_3D);let J=ne(R,b),pt=b.source;e.bindTexture(V,R.__webglTexture,n.TEXTURE0+z);let yt=i.get(pt);if(pt.version!==yt.__version||J===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=xe.getPrimaries(xe.workingColorSpace),St=b.colorSpace===Li?null:xe.getPrimaries(b.colorSpace),It=b.colorSpace===Li||rt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let at=m(b.image,!1,s.maxTextureSize);at=le(b,at);let Et=r.convert(b.format,b.colorSpace),Yt=r.convert(b.type),Tt=x(b.internalFormat,Et,Yt,b.normalized,b.colorSpace,b.isVideoTexture);ee(V,b);let Mt,$t=b.mipmaps,Qt=b.isVideoTexture!==!0,re=yt.__version===void 0||J===!0,O=pt.dataReady,vt=M(b,at);if(b.isDepthTexture)Tt=E(b.format===zs,b.type),re&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,Tt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Tt,at.width,at.height,0,Et,Yt,null));else if(b.isDataTexture)if($t.length>0){Qt&&re&&e.texStorage2D(n.TEXTURE_2D,vt,Tt,$t[0].width,$t[0].height);for(let rt=0,St=$t.length;rt<St;rt++)Mt=$t[rt],Qt?O&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Et,Yt,Mt.data):e.texImage2D(n.TEXTURE_2D,rt,Tt,Mt.width,Mt.height,0,Et,Yt,Mt.data);b.generateMipmaps=!1}else Qt?(re&&e.texStorage2D(n.TEXTURE_2D,vt,Tt,at.width,at.height),O&&it(b,at,Et,Yt)):e.texImage2D(n.TEXTURE_2D,0,Tt,at.width,at.height,0,Et,Yt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Tt,$t[0].width,$t[0].height,at.depth);for(let rt=0,St=$t.length;rt<St;rt++)if(Mt=$t[rt],b.format!==oi)if(Et!==null)if(Qt){if(O)if(b.layerUpdates.size>0){let It=nd(Mt.width,Mt.height,b.format,b.type);for(let ct of b.layerUpdates){let Ht=Mt.data.subarray(ct*It/Mt.data.BYTES_PER_ELEMENT,(ct+1)*It/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,ct,Mt.width,Mt.height,1,Et,Ht)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,at.depth,Et,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Tt,Mt.width,Mt.height,at.depth,0,Mt.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,at.depth,Et,Yt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Tt,Mt.width,Mt.height,at.depth,0,Et,Yt,Mt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Qt&&re&&e.texStorage2D(n.TEXTURE_2D,vt,Tt,$t[0].width,$t[0].height);for(let rt=0,St=$t.length;rt<St;rt++)Mt=$t[rt],b.format!==oi?Et!==null?Qt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Tt,Mt.width,Mt.height,0,Mt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?O&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,Et,Yt,Mt.data):e.texImage2D(n.TEXTURE_2D,rt,Tt,Mt.width,Mt.height,0,Et,Yt,Mt.data)}else if(b.isDataArrayTexture)if(Qt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Tt,at.width,at.height,at.depth),O)if(b.layerUpdates.size>0){let rt=nd(at.width,at.height,b.format,b.type);for(let St of b.layerUpdates){let It=at.data.subarray(St*rt/at.data.BYTES_PER_ELEMENT,(St+1)*rt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,at.width,at.height,1,Et,Yt,It)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Yt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,at.width,at.height,at.depth,0,Et,Yt,at.data);else if(b.isData3DTexture)Qt?(re&&e.texStorage3D(n.TEXTURE_3D,vt,Tt,at.width,at.height,at.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Yt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,at.width,at.height,at.depth,0,Et,Yt,at.data);else if(b.isFramebufferTexture){if(re)if(Qt)e.texStorage2D(n.TEXTURE_2D,vt,Tt,at.width,at.height);else{let rt=at.width,St=at.height;for(let It=0;It<vt;It++)e.texImage2D(n.TEXTURE_2D,It,Tt,rt,St,0,Et,Yt,null),rt>>=1,St>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),at.parentNode!==rt){rt.appendChild(at),d.add(b),rt.onpaint=St=>{let It=St.changedElements;for(let ct of d)It.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let It=n.RGBA,ct=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,It,ct,Ht,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($t.length>0){if(Qt&&re){let rt=jt($t[0]);e.texStorage2D(n.TEXTURE_2D,vt,Tt,rt.width,rt.height)}for(let rt=0,St=$t.length;rt<St;rt++)Mt=$t[rt],Qt?O&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Et,Yt,Mt):e.texImage2D(n.TEXTURE_2D,rt,Tt,Et,Yt,Mt);b.generateMipmaps=!1}else if(Qt){if(re){let rt=jt(at);e.texStorage2D(n.TEXTURE_2D,vt,Tt,rt.width,rt.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Yt,at)}else e.texImage2D(n.TEXTURE_2D,0,Tt,Et,Yt,at);p(b)&&y(V),yt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Wt(R,b,z){if(b.image.length!==6)return;let V=ne(R,b),J=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);let pt=i.get(J);if(J.version!==pt.__version||V===!0){e.activeTexture(n.TEXTURE0+z);let yt=xe.getPrimaries(xe.workingColorSpace),et=b.colorSpace===Li?null:xe.getPrimaries(b.colorSpace),at=b.colorSpace===Li||yt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Et=b.isCompressedTexture||b.image[0].isCompressedTexture,Yt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let ct=0;ct<6;ct++)!Et&&!Yt?Tt[ct]=m(b.image[ct],!0,s.maxCubemapSize):Tt[ct]=Yt?b.image[ct].image:b.image[ct],Tt[ct]=le(b,Tt[ct]);let Mt=Tt[0],$t=r.convert(b.format,b.colorSpace),Qt=r.convert(b.type),re=x(b.internalFormat,$t,Qt,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,vt=pt.__version===void 0||V===!0,rt=J.dataReady,St=M(b,Mt);ee(n.TEXTURE_CUBE_MAP,b);let It;if(Et){O&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,re,Mt.width,Mt.height);for(let ct=0;ct<6;ct++){It=Tt[ct].mipmaps;for(let Ht=0;Ht<It.length;Ht++){let zt=It[Ht];b.format!==oi?$t!==null?O?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,zt.width,zt.height,$t,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,re,zt.width,zt.height,0,zt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,0,0,zt.width,zt.height,$t,Qt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht,re,zt.width,zt.height,0,$t,Qt,zt.data)}}}else{if(It=b.mipmaps,O&&vt){It.length>0&&St++;let ct=jt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,re,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Yt){O?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Tt[ct].width,Tt[ct].height,$t,Qt,Tt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,re,Tt[ct].width,Tt[ct].height,0,$t,Qt,Tt[ct].data);for(let Ht=0;Ht<It.length;Ht++){let Ie=It[Ht].image[ct].image;O?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,Ie.width,Ie.height,$t,Qt,Ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,re,Ie.width,Ie.height,0,$t,Qt,Ie.data)}}else{O?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,$t,Qt,Tt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,re,$t,Qt,Tt[ct]);for(let Ht=0;Ht<It.length;Ht++){let zt=It[Ht];O?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,0,0,$t,Qt,zt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ht+1,re,$t,Qt,zt.image[ct])}}}p(b)&&y(n.TEXTURE_CUBE_MAP),pt.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function At(R,b,z,V,J,pt){let yt=r.convert(z.format,z.colorSpace),et=r.convert(z.type),at=x(z.internalFormat,yt,et,z.normalized,z.colorSpace),Et=i.get(b),Yt=i.get(z);if(Yt.__renderTarget=b,!Et.__hasExternalTextures){let Tt=Math.max(1,b.width>>pt),Mt=Math.max(1,b.height>>pt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,pt,at,Tt,Mt,b.depth,0,yt,et,null):e.texImage2D(J,pt,at,Tt,Mt,0,yt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),ft(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,J,Yt.__webglTexture,0,Bt(b)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,J,Yt.__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(R,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let V=b.depthTexture,J=V&&V.isDepthTexture?V.type:null,pt=E(b.stencilBuffer,J),yt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(b),pt,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(b),pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,R)}else{let V=b.textures;for(let J=0;J<V.length;J++){let pt=V[J],yt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),at=x(pt.internalFormat,yt,et,pt.normalized,pt.colorSpace);ft(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(b),at,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(b),at,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,at,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(R,b,z){let V=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(b.depthTexture);if(J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ee(n.TEXTURE_CUBE_MAP,b.depthTexture);let Et=r.convert(b.depthTexture.format),Yt=r.convert(b.depthTexture.type),Tt;b.depthTexture.format===Vi?Tt=n.DEPTH_COMPONENT24:b.depthTexture.format===zs&&(Tt=n.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Tt,b.width,b.height,0,Et,Yt,null)}}else ot(b.depthTexture,0);let pt=J.__webglTexture,yt=Bt(b),et=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,at=b.depthTexture.format===zs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Vi)ft(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,et,pt,0,yt):n.framebufferTexture2D(n.FRAMEBUFFER,at,et,pt,0);else if(b.depthTexture.format===zs)ft(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,et,pt,0,yt):n.framebufferTexture2D(n.FRAMEBUFFER,at,et,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W(R){let b=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let V=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),V){let J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=V}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)ye(b.__webglFramebuffer[V],R,V);else{let V=R.texture.mipmaps;V&&V.length>0?ye(b.__webglFramebuffer[0],R,0):ye(b.__webglFramebuffer,R,0)}else if(z){b.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[V]),b.__webglDepthbuffer[V]===void 0)b.__webglDepthbuffer[V]=n.createRenderbuffer(),Xt(b.__webglDepthbuffer[V],R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,pt)}}else{let V=R.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Xt(b.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,pt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(R,b,z){let V=i.get(R);b!==void 0&&At(V.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&W(R)}function q(R){let b=R.texture,z=i.get(R),V=i.get(b);R.addEventListener("dispose",_);let J=R.textures,pt=R.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=b.version,a.memory.textures++),pt){z.__webglFramebuffer=[];for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[et]=[];for(let at=0;at<b.mipmaps.length;at++)z.__webglFramebuffer[et][at]=n.createFramebuffer()}else z.__webglFramebuffer[et]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let et=0;et<b.mipmaps.length;et++)z.__webglFramebuffer[et]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(yt)for(let et=0,at=J.length;et<at;et++){let Et=i.get(J[et]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ft(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let et=0;et<J.length;et++){let at=J[et];z.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[et]);let Et=r.convert(at.format,at.colorSpace),Yt=r.convert(at.type),Tt=x(at.internalFormat,Et,Yt,at.normalized,at.colorSpace,R.isXRRenderTarget===!0),Mt=Bt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,Tt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,z.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pt){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ee(n.TEXTURE_CUBE_MAP,b);for(let et=0;et<6;et++)if(b.mipmaps&&b.mipmaps.length>0)for(let at=0;at<b.mipmaps.length;at++)At(z.__webglFramebuffer[et][at],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,at);else At(z.__webglFramebuffer[et],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(b)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let et=0,at=J.length;et<at;et++){let Et=J[et],Yt=i.get(Et),Tt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Tt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Yt.__webglTexture),ee(Tt,Et),At(z.__webglFramebuffer,R,Et,n.COLOR_ATTACHMENT0+et,Tt,0),p(Et)&&y(Tt)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,V.__webglTexture),ee(et,b),b.mipmaps&&b.mipmaps.length>0)for(let at=0;at<b.mipmaps.length;at++)At(z.__webglFramebuffer[at],R,b,n.COLOR_ATTACHMENT0,et,at);else At(z.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,et,0);p(b)&&y(et),e.unbindTexture()}R.depthBuffer&&W(R)}function st(R){let b=R.textures;for(let z=0,V=b.length;z<V;z++){let J=b[z];if(p(J)){let pt=S(R),yt=i.get(J).__webglTexture;e.bindTexture(pt,yt),y(pt),e.unbindTexture()}}}let lt=[],_t=[];function Lt(R){if(R.samples>0){if(ft(R)===!1){let b=R.textures,z=R.width,V=R.height,J=n.COLOR_BUFFER_BIT,pt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(R),et=b.length>1;if(et)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let at=R.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Et]);let Yt=i.get(b[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,z,V,0,0,z,V,J,n.NEAREST),l===!0&&(lt.length=0,_t.length=0,lt.push(n.COLOR_ATTACHMENT0+Et),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(lt.push(pt),_t.push(pt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Et]);let Yt=i.get(b[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Bt(R){return Math.min(s.maxSamples,R.samples)}function ft(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function D(R){let b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function le(R,b){let z=R.colorSpace,V=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Qa&&z!==Li&&(xe.getTransfer(z)===Ce?(V!==oi||J!==Un)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",z)),b}function jt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=ot,this.setTexture2DArray=K,this.setTexture3D=nt,this.setTextureCube=B,this.rebindTextures=j,this.setupRenderTarget=q,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function WM(n,t){function e(i,s=Li){let r,a=xe.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vh)return n.BYTE;if(i===Hh)return n.SHORT;if(i===pa)return n.UNSIGNED_SHORT;if(i===xc)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===$h)return n.RGB;if(i===oi)return n.RGBA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===Mc)return n.RED;if(i===Sc)return n.RED_INTEGER;if(i===Gs)return n.RG;if(i===wc)return n.RG_INTEGER;if(i===Ac)return n.RGBA_INTEGER;if(i===Do||i===No||i===Uo||i===Oo)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===Tc||i===Rc||i===Cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===kc||i===Pc||i===Lc||i===Dc||i===Fo||i===Nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ic||i===kc)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lc)return r.COMPRESSED_R11_EAC;if(i===Dc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fo)return r.COMPRESSED_RG11_EAC;if(i===Nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uc||i===Oc||i===Fc||i===Bc||i===zc||i===Gc||i===Vc||i===Hc||i===Wc||i===Xc||i===Yc||i===$c||i===qc||i===Zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$c)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kc||i===Jc||i===jc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kc)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qc||i===tu||i===Bo||i===eu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var XM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
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

}`,bd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new qn({vertexShader:XM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Md=class extends Ai{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new bd,p={},y=e.getContextAttributes(),S=null,x=null,E=[],M=[],T=new tt,_=null,A=null,C=new gn;C.viewport=new He;let k=new gn;k.viewport=new He;let L=[C,k],F=new dc,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let it=E[Q];return it===void 0&&(it=new ea,E[Q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Q){let it=E[Q];return it===void 0&&(it=new ea,E[Q]=it),it.getGripSpace()},this.getHand=function(Q){let it=E[Q];return it===void 0&&(it=new ea,E[Q]=it),it.getHandSpace()};function H(Q){let it=M.indexOf(Q.inputSource);if(it===-1)return;let gt=E[it];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,c||a),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ot);for(let Q=0;Q<E.length;Q++){let it=M[Q];it!==null&&(M[Q]=null,E[Q].disconnect(it))}P=null,N=null,m.reset();for(let Q in p)delete p[Q];if(t.setRenderTarget(S),f=null,h=null,d=null,s=null,x=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),A!==null){let Q=A.camera;Q.fov=A.fov,Q.zoom=A.zoom,Q.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ot),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Wt=null,At=null;y.depth&&(At=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=y.stencil?zs:Vi,Wt=y.stencil?ma:ki);let Xt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Xt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Nn(h.textureWidth,h.textureHeight,{format:oi,type:Un,depthTexture:new Cs(h.textureWidth,h.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Nn(f.framebufferWidth,f.framebufferHeight,{format:oi,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(Q){for(let it=0;it<Q.removed.length;it++){let gt=Q.removed[it],Wt=M.indexOf(gt);Wt>=0&&(M[Wt]=null,E[Wt].disconnect(gt))}for(let it=0;it<Q.added.length;it++){let gt=Q.added[it],Wt=M.indexOf(gt);if(Wt===-1){for(let Xt=0;Xt<E.length;Xt++)if(Xt>=M.length){M.push(gt),Wt=Xt;break}else if(M[Xt]===null){M[Xt]=gt,Wt=Xt;break}if(Wt===-1)break}let At=E[Wt];At&&At.connect(gt)}}let K=new I,nt=new I;function B(Q,it,gt){K.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(gt.matrixWorld);let Wt=K.distanceTo(nt),At=it.projectionMatrix.elements,Xt=gt.projectionMatrix.elements,ye=At[14]/(At[10]-1),W=At[14]/(At[10]+1),j=(At[9]+1)/At[5],q=(At[9]-1)/At[5],st=(At[8]-1)/At[0],lt=(Xt[8]+1)/Xt[0],_t=ye*st,Lt=ye*lt,Bt=Wt/(-st+lt),ft=Bt*-st;if(it.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ft),Q.translateZ(Bt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),At[10]===-1)Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let D=ye+Bt,le=W+Bt,jt=_t-ft,R=Lt+(Wt-ft),b=j*W/le*D,z=q*W/le*D;Q.projectionMatrix.makePerspective(jt,R,b,z,D,le),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,it){it===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(it.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let it=Q.near,gt=Q.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),F.near=k.near=C.near=it,F.far=k.far=C.far=gt,(P!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,N=F.far),F.layers.mask=Q.layers.mask|6,C.layers.mask=F.layers.mask&-5,k.layers.mask=F.layers.mask&-3;let Wt=Q.parent,At=F.cameras;dt(F,Wt);for(let Xt=0;Xt<At.length;Xt++)dt(At[Xt],Wt);At.length===2?B(F,C,k):F.projectionMatrix.copy(C.projectionMatrix),A===null&&Q.isPerspectiveCamera&&(A={camera:Q,fov:Q.fov,zoom:Q.zoom}),ht(Q,F,Wt)};function ht(Q,it,gt){gt===null?Q.matrix.copy(it.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(it.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=jr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let Zt=null;function ee(Q,it){if(u=it.getViewerPose(c||a),g=it,u!==null){let gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Wt=!1;gt.length!==F.cameras.length&&(F.cameras.length=0,Wt=!0);for(let W=0;W<gt.length;W++){let j=gt[W],q=null;if(f!==null)q=f.getViewport(j);else{let lt=d.getViewSubImage(h,j);q=lt.viewport,W===0&&(t.setRenderTargetTextures(x,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(x))}let st=L[W];st===void 0&&(st=new gn,st.layers.enable(W),st.viewport=new He,L[W]=st),st.matrix.fromArray(j.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(j.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(q.x,q.y,q.width,q.height),W===0&&(F.matrix.copy(st.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Wt===!0&&F.cameras.push(st)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let W=d.getDepthInformation(gt[0]);W&&W.isValid&&W.texture&&m.init(W,s.renderState)}if(At&&At.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let W=0;W<gt.length;W++){let j=gt[W].camera;if(j){let q=p[j];q||(q=new uo,p[j]=q);let st=d.getCameraImage(j);q.sourceTexture=st}}}}for(let gt=0;gt<E.length;gt++){let Wt=M[gt],At=E[gt];Wt!==null&&At!==void 0&&At.update(Wt,it,c||a)}Zt&&Zt(Q,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let ne=new Pm;ne.setAnimationLoop(ee),this.setAnimationLoop=function(Q){Zt=Q},this.dispose=function(){}}},$M=new we,Fm=new ce;Fm.set(-1,0,0,0,1,0,0,0,1);function qM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),S=y.envMap,x=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4($M.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZM(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){let M=E.program;i.uniformBlockBinding(x,M)}function c(x,E){let M=s[x.id];M===void 0&&(m(x),M=u(x),s[x.id]=M,x.addEventListener("dispose",y));let T=E.program;i.updateUBOMapping(x,T);let _=t.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function u(x){let E=d();x.__bindingPointIndex=E;let M=n.createBuffer(),T=x.__size,_=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let E=s[x.id],M=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let _=0,A=M.length;_<A;_++){let C=M[_];if(Array.isArray(C))for(let k=0,L=C.length;k<L;k++)f(C[k],_,k,T);else f(C,_,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,E,M,T){if(v(x,E,M,T)===!0){let _=x.__offset,A=x.value;if(Array.isArray(A)){let C=0;for(let k=0;k<A.length;k++){let L=A[k],F=p(L);g(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,x.__data)}}function g(x,E,M){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,M)}function v(x,E,M,T){let _=x.value,A=E+"_"+M;if(T[A]===void 0)return typeof _=="number"||typeof _=="boolean"?T[A]=_:ArrayBuffer.isView(_)?T[A]=_.slice():T[A]=_.clone(),!0;{let C=T[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return T[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(x){let E=x.uniforms,M=0,T=16;for(let A=0,C=E.length;A<C;A++){let k=Array.isArray(E[A])?E[A]:[E[A]];for(let L=0,F=k.length;L<F;L++){let P=k[L],N=Array.isArray(P.value)?P.value:[P.value];for(let H=0,Y=N.length;H<Y;H++){let ot=N[H],K=p(ot),nt=M%T,B=nt%K.boundary,dt=nt+B;M+=B,dt!==0&&T-dt<K.storage&&(M+=T-dt),P.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=K.storage}}}let _=M%T;return _>0&&(M+=T-_),x.__size=M,x.__cache={},this}function p(x){let E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):se("WebGLRenderer: Unsupported uniform value type.",x),E}function y(x){let E=x.target;E.removeEventListener("dispose",y);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function S(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var KM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function JM(){return qi===null&&(qi=new oo(KM,16,16,Gs,Pi),qi.name="DFG_LUT",qi.minFilter=an,qi.magFilter=an,qi.wrapS=zi,qi.wrapT=zi,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var ou=class{constructor(t={}){let{canvas:e=jp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Un}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Ac,wc,Sc]),p=new Set([Un,ki,pa,ma,vc,bc]),y=new Uint32Array(4),S=new Int32Array(4),x=new I,E=null,M=null,T=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,k=!1,L=null,F=null,P=null,N=null;this._outputColorSpace=Ke;let H=0,Y=0,ot=null,K=-1,nt=null,B=new He,dt=new He,ht=null,Zt=new Gt(0),ee=0,ne=e.width,Q=e.height,it=1,gt=null,Wt=null,At=new He(0,0,ne,Q),Xt=new He(0,0,ne,Q),ye=!1,W=new sa,j=!1,q=!1,st=new we,lt=new I,_t=new He,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function ft(){return ot===null?it:1}let D=i;function le(w,U){return e.getContext(w,U)}let jt,R,b,z,V,J,pt,yt,et,at,Et,Yt,Tt,Mt,$t,Qt,re,O,vt,rt,St,It,ct;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",$,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){let U="webgl2";if(D=le(U,w),D===null)throw le(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(w){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),ie("WebGLRenderer: "+w.message),w}function Ht(){jt=new sb(D),jt.init(),St=new WM(D,jt),R=new qv(D,jt,t,St),b=new VM(D,jt),R.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),F=D.createFramebuffer(),P=D.createFramebuffer(),N=D.createFramebuffer(),z=new ob(D),V=new RM,J=new HM(D,jt,b,V,R,St,z),pt=new ib(C),yt=new cy(D),It=new Yv(D,yt),et=new rb(D,yt,z,It),at=new cb(D,et,yt,It,z),O=new lb(D,R,J),$t=new Zv(V),Et=new TM(C,pt,jt,R,It,$t),Yt=new qM(C,V),Tt=new IM,Mt=new UM(jt),re=new Xv(C,pt,b,at,g,l),Qt=new GM(C,at,R),ct=new ZM(D,z,R,b),vt=new $v(D,jt,z),rt=new ab(D,jt,z),z.programs=Et.programs,C.capabilities=R,C.extensions=jt,C.properties=V,C.renderLists=Tt,C.shadowMap=Qt,C.state=b,C.info=z}v!==Un&&(A=new hb(v,e.width,e.height,o,s,r));let zt=new Md(C,D);this.xr=zt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=jt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=jt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(ne,Q,!1))},this.getSize=function(w){return w.set(ne,Q)},this.setSize=function(w,U,Z=!0){if(zt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,Q=U,e.width=Math.floor(w*it),e.height=Math.floor(U*it),Z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(ne*it,Q*it).floor()},this.setDrawingBufferSize=function(w,U,Z){ne=w,Q=U,it=Z,e.width=Math.floor(w*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(v===Un){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(At)},this.setViewport=function(w,U,Z,X){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,U,Z,X),b.viewport(B.copy(At).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(Xt)},this.setScissor=function(w,U,Z,X){w.isVector4?Xt.set(w.x,w.y,w.z,w.w):Xt.set(w,U,Z,X),b.scissor(dt.copy(Xt).multiplyScalar(it).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){b.setScissorTest(ye=w)},this.setOpaqueSort=function(w){gt=w},this.setTransparentSort=function(w){Wt=w},this.getClearColor=function(w){return w.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Z=!0){let X=0;if(w){let G=!1;if(ot!==null){let bt=ot.texture.format;G=m.has(bt)}if(G){let bt=ot.texture.type,Dt=p.has(bt),Ct=re.getClearColor(),Ut=re.getClearAlpha(),Kt=Ct.r,fe=Ct.g,_e=Ct.b;Dt?(y[0]=Kt,y[1]=fe,y[2]=_e,y[3]=Ut,D.clearBufferuiv(D.COLOR,0,y)):(S[0]=Kt,S[1]=fe,S[2]=_e,S[3]=Ut,D.clearBufferiv(D.COLOR,0,S))}else X|=D.COLOR_BUFFER_BIT}U&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",$,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),re.dispose(),Tt.dispose(),Mt.dispose(),V.dispose(),pt.dispose(),at.dispose(),It.dispose(),ct.dispose(),Et.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",ue),zt.removeEventListener("sessionend",Me),Ue.stop()};function Ie(w){w.preventDefault(),no("WebGLRenderer: Context Lost."),k=!0}function $(){no("WebGLRenderer: Context Restored."),k=!1;let w=z.autoReset,U=Qt.enabled,Z=Qt.autoUpdate,X=Qt.needsUpdate,G=Qt.type;Ht(),z.autoReset=w,Qt.enabled=U,Qt.autoUpdate=Z,Qt.needsUpdate=X,Qt.type=G}function ut(w){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rt(w){let U=w.target;U.removeEventListener("dispose",Rt),Jt(U)}function Jt(w){qt(w),V.remove(w)}function qt(w){let U=V.get(w).programs;U!==void 0&&(U.forEach(function(Z){Et.releaseProgram(Z)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Z,X,G,bt){U===null&&(U=Lt);let Dt=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ct=Yu(w,U,Z,X,G);b.setMaterial(X,Dt);let Ut=Z.index,Kt=1;if(X.wireframe===!0){if(Ut=et.getWireframeAttribute(Z),Ut===void 0)return;Kt=2}let fe=Z.drawRange,_e=Z.attributes.position,Vt=fe.start*Kt,Re=(fe.start+fe.count)*Kt;bt!==null&&(Vt=Math.max(Vt,bt.start*Kt),Re=Math.min(Re,(bt.start+bt.count)*Kt)),Ut!==null?(Vt=Math.max(Vt,0),Re=Math.min(Re,Ut.count)):_e!=null&&(Vt=Math.max(Vt,0),Re=Math.min(Re,_e.count));let tn=Re-Vt;if(tn<0||tn===1/0)return;It.setup(G,X,Ct,Z,Ut);let ze,Ne=vt;if(Ut!==null&&(ze=yt.get(Ut),Ne=rt,Ne.setIndex(ze)),G.isMesh)X.wireframe===!0?(b.setLineWidth(X.wireframeLinewidth*ft()),Ne.setMode(D.LINES)):Ne.setMode(D.TRIANGLES);else if(G.isLine){let bn=X.linewidth;bn===void 0&&(bn=1),b.setLineWidth(bn*ft()),G.isLineSegments?Ne.setMode(D.LINES):G.isLineLoop?Ne.setMode(D.LINE_LOOP):Ne.setMode(D.LINE_STRIP)}else G.isPoints?Ne.setMode(D.POINTS):G.isSprite&&Ne.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Ne.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let bn=G._multiDrawStarts,Ot=G._multiDrawCounts,Cn=G._multiDrawCount,Se=Ut?yt.get(Ut).bytesPerElement:1,ti=V.get(X).currentProgram.getUniforms();for(let Fi=0;Fi<Cn;Fi++)ti.setValue(D,"_gl_DrawID",Fi),Ne.render(bn[Fi]/Se,Ot[Fi])}else if(G.isInstancedMesh)Ne.renderInstances(Vt,tn,G.count);else if(Z.isInstancedBufferGeometry){let bn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ot=Math.min(Z.instanceCount,bn);Ne.renderInstances(Vt,tn,Ot)}else Ne.render(Vt,tn)};function ae(w,U,Z,X){L!==null&&w.isNodeMaterial&&L.setObject(X,w),j===!0&&$t.setState(w,Z,!1),w.transparent===!0&&w.side===Ci&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,sn(w,U,X),w.side=Fs,w.needsUpdate=!0,sn(w,U,X),w.side=Ci):sn(w,U,X)}this.compile=function(w,U,Z=null){Z===null&&(Z=w),L!==null&&L.renderStart(w,U,Z),M=Mt.get(Z),M.init(U),_.push(M),Z.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),w!==Z&&w.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),q=this.localClippingEnabled,j=$t.init(this.clippingPlanes,q),j===!0&&$t.setGlobalState(this.clippingPlanes,U),L!==null&&Qt.render(M.state.shadowsArray,Z,U);let X=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){let Ct=bt[Dt];ae(Ct,Z,U,G),X.add(Ct)}else ae(bt,Z,U,G),X.add(bt)}),M=_.pop(),L!==null&&L.renderEnd(),X},this.compileAsync=function(w,U,Z=null){let X=this.compile(w,U,Z);return new Promise(G=>{function bt(){if(X.forEach(function(Dt){let Ut=V.get(Dt).currentProgram;(Ut===void 0||Ut.isReady())&&X.delete(Dt)}),X.size===0){G(w);return}setTimeout(bt,10)}jt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Nt=null;function Ae(w){Nt&&Nt(w)}function ue(){Ue.stop()}function Me(){Ue.start()}let Ue=new Pm;Ue.setAnimationLoop(Ae),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(w){Nt=w,zt.setAnimationLoop(w),w===null?Ue.stop():Ue.start()},zt.addEventListener("sessionstart",ue),zt.addEventListener("sessionend",Me),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;L!==null&&L.renderStart(w,U);let Z=zt.enabled===!0&&zt.isPresenting===!0,X=A!==null&&(ot===null||Z)&&A.begin(C,ot);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(U),U=zt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,U,ot),M=Mt.get(w,_.length),M.init(U),M.state.textureUnits=J.getTextureUnits(),_.push(M),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(st,wi,U.reversedDepth),q=this.localClippingEnabled,j=$t.init(this.clippingPlanes,q),E=Tt.get(w,T.length),E.init(),T.push(E),zt.enabled===!0&&zt.isPresenting===!0){let Dt=C.xr.getDepthSensingMesh();Dt!==null&&Ee(Dt,U,-1/0,C.sortObjects)}Ee(w,U,0,C.sortObjects),E.finish(),L!==null&&L.updateLights(M.state.lightsArray),C.sortObjects===!0&&E.sort(gt,Wt),Bt=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Bt&&re.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&$t.beginShadows();let G=M.state.shadowsArray;if(Qt.render(G,w,U),j===!0&&$t.endShadows(),(X&&A.hasRenderPass())===!1){let Dt=E.opaque,Ct=E.transmissive;if(M.setupLights(),U.isArrayCamera){let Ut=U.cameras;if(Ct.length>0)for(let Kt=0,fe=Ut.length;Kt<fe;Kt++){let _e=Ut[Kt];vn(Dt,Ct,w,_e)}Bt&&re.render(w);for(let Kt=0,fe=Ut.length;Kt<fe;Kt++){let _e=Ut[Kt];De(E,w,_e,_e.viewport)}}else Ct.length>0&&vn(Dt,Ct,w,U),Bt&&re.render(w),De(E,w,U)}ot!==null&&Y===0&&(J.updateMultisampleRenderTarget(ot),J.updateRenderTargetMipmap(ot)),X&&A.end(C),w.isScene===!0&&w.onAfterRender(C,w,U),It.resetDefaultState(),K=-1,nt=null,_.pop(),_.length>0?(M=_[_.length-1],J.setTextureUnits(M.state.textureUnits),j===!0&&$t.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,L!==null&&L.renderEnd()};function Ee(w,U,Z,X){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(W)){X&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(st);let Dt=at.update(w),Ct=w.material;Ct.visible&&E.push(w,Dt,Ct,Z,_t.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(W))){let Dt=at.update(w),Ct=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),_t.copy(Dt.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(st)),Array.isArray(Ct)){let Ut=Dt.groups;for(let Kt=0,fe=Ut.length;Kt<fe;Kt++){let _e=Ut[Kt],Vt=Ct[_e.materialIndex];Vt&&Vt.visible&&E.push(w,Dt,Vt,Z,_t.z,_e,U)}}else Ct.visible&&E.push(w,Dt,Ct,Z,_t.z,null,U)}}let bt=w.children;for(let Dt=0,Ct=bt.length;Dt<Ct;Dt++)Ee(bt[Dt],U,Z,X)}function De(w,U,Z,X){let{opaque:G,transmissive:bt,transparent:Dt}=w;M.setupLightsView(Z),j===!0&&$t.setGlobalState(C.clippingPlanes,Z),X&&b.viewport(B.copy(X)),G.length>0&&Qe(G,U,Z),bt.length>0&&Qe(bt,U,Z),Dt.length>0&&Qe(Dt,U,Z),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function vn(w,U,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let Vt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new Nn(1,1,{generateMipmaps:!0,type:Vt?Pi:Un,minFilter:$i,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let bt=M.state.transmissionRenderTarget[X.id],Dt=X.viewport||B;bt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);let Ct=C.getRenderTarget(),Ut=C.getActiveCubeFace(),Kt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(Zt),ee=C.getClearAlpha(),ee<1&&C.setClearColor(16777215,.5),C.clear(),Bt&&re.render(Z);let fe=C.toneMapping;C.toneMapping=Ii;let _e=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),j===!0&&$t.setGlobalState(C.clippingPlanes,X),Qe(w,Z,X),J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Re=0,tn=U.length;Re<tn;Re++){let ze=U[Re],{object:Ne,geometry:bn,material:Ot,group:Cn}=ze;if(Ot.side===Ci&&Ne.layers.test(X.layers)){let Se=Ot.side;Ot.side=_n,Ot.needsUpdate=!0,Oi(Ne,Z,X,bn,Ot,Cn),Ot.side=Se,Ot.needsUpdate=!0,Vt=!0}}Vt===!0&&(J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt))}C.setRenderTarget(Ct,Ut,Kt),C.setClearColor(Zt,ee),_e!==void 0&&(X.viewport=_e),C.toneMapping=fe}function Qe(w,U,Z){let X=U.isScene===!0?U.overrideMaterial:null;for(let G=0,bt=w.length;G<bt;G++){let Dt=w[G],{object:Ct,geometry:Ut,group:Kt}=Dt,fe=Dt.material;fe.allowOverride===!0&&X!==null&&(fe=X),Ct.layers.test(Z.layers)&&Oi(Ct,U,Z,Ut,fe,Kt)}}function Oi(w,U,Z,X,G,bt){L!==null&&G.isNodeMaterial&&L.setObject(w,G),w.onBeforeRender(C,U,Z,X,G,bt),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(C,U,Z,X,w,bt),G.transparent===!0&&G.side===Ci&&G.forceSinglePass===!1?(G.side=_n,G.needsUpdate=!0,C.renderBufferDirect(Z,U,X,G,w,bt),G.side=Fs,G.needsUpdate=!0,C.renderBufferDirect(Z,U,X,G,w,bt),G.side=Ci):C.renderBufferDirect(Z,U,X,G,w,bt),w.onAfterRender(C,U,Z,X,G,bt)}function sn(w,U,Z){U.isScene!==!0&&(U=Lt);let X=V.get(w),G=M.state.lights,bt=M.state.shadowsArray,Dt=G.state.version,Ct=Et.getParameters(w,G.state,bt,U,Z,M.state.lightProbeGridArray),Ut=Et.getProgramCacheKey(Ct),Kt=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=pt.get(w.envMap||X.environment,fe),X.envMapRotation=X.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Rt),Kt=new Map,X.programs=Kt);let _e=Kt.get(Ut);if(_e!==void 0){if(X.currentProgram===_e&&X.lightsStateVersion===Dt)return Zs(w,Ct),_e}else Ct.uniforms=Et.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,Z,Ct),w.onBeforeCompile(Ct,C),_e=Et.acquireProgram(Ct,Ut),Kt.set(Ut,_e),X.uniforms=Ct.uniforms;let Vt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=$t.uniform),Zs(w,Ct),X.needsLights=rn(w),X.lightsStateVersion=Dt,X.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.sunLights.value=G.state.sun,Vt.sunLightShadows.value=G.state.sunShadow,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.sunShadowMatrix.value=G.state.sunShadowMatrix,Vt.sunShadowCascade.value=G.state.sunShadowCascade,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=_e,X.uniformsList=null,_e}function Rn(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=ya.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Zs(w,U){let Z=V.get(w);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Ks(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let Z=0,X=w.length;Z<X;Z++){let G=w[Z];if(G.texture!==null&&G.boundingBox.containsPoint(x))return G}return null}function Yu(w,U,Z,X,G){U.isScene!==!0&&(U=Lt),J.resetTextureUnits();let bt=U.fog,Dt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,Ct=ot===null?C.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:xe.workingColorSpace,Ut=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Kt=pt.get(X.envMap||Dt,Ut),fe=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,_e=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Vt=!!Z.morphAttributes.position,Re=!!Z.morphAttributes.normal,tn=!!Z.morphAttributes.color,ze=Ii;X.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ze=C.toneMapping);let Ne=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bn=Ne!==void 0?Ne.length:0,Ot=V.get(X),Cn=M.state.lights;if(j===!0&&(q===!0||w!==nt)){let Oe=w===nt&&X.id===K;$t.setState(X,w,Oe)}let Se=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Cn.state.version||Ot.outputColorSpace!==Ct||G.isBatchedMesh&&Ot.batching===!1||!G.isBatchedMesh&&Ot.batching===!0||G.isBatchedMesh&&Ot.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ot.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ot.instancing===!1||!G.isInstancedMesh&&Ot.instancing===!0||G.isSkinnedMesh&&Ot.skinning===!1||!G.isSkinnedMesh&&Ot.skinning===!0||G.isInstancedMesh&&Ot.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ot.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ot.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ot.instancingMorph===!1&&G.morphTexture!==null||Ot.envMap!==Kt||X.fog===!0&&Ot.fog!==bt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==$t.numPlanes||Ot.numIntersection!==$t.numIntersection)||Ot.vertexAlphas!==fe||Ot.vertexTangents!==_e||Ot.morphTargets!==Vt||Ot.morphNormals!==Re||Ot.morphColors!==tn||Ot.toneMapping!==ze||Ot.morphTargetsCount!==bn||!!Ot.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Ot.__version=X.version);let ti=Ot.currentProgram;Se===!0&&(ti=sn(X,U,G),L&&X.isNodeMaterial&&L.onUpdateProgram(X,ti,Ot));let Fi=!1,xs=!1,Tr=!1,Le=ti.getUniforms(),Ze=Ot.uniforms;if(b.useProgram(ti.program)&&(Fi=!0,xs=!0,Tr=!0),X.id!==K&&(K=X.id,xs=!0),Ot.needsLights){let Oe=Ks(M.state.lightProbeGridArray,G);Ot.lightProbeGrid!==Oe&&(Ot.lightProbeGrid=Oe,xs=!0)}if(Fi||nt!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Le.setValue(D,"projectionMatrix",w.projectionMatrix),Le.setValue(D,"viewMatrix",w.matrixWorldInverse);let bs=Le.map.cameraPosition;bs!==void 0&&bs.setValue(D,lt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Le.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Le.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),nt!==w&&(nt=w,xs=!0,Tr=!0)}if(Ot.needsLights&&(Cn.state.sunShadowMap.length>0&&Le.setValue(D,"sunShadowMap",Cn.state.sunShadowMap,J),Cn.state.directionalShadowMap.length>0&&Le.setValue(D,"directionalShadowMap",Cn.state.directionalShadowMap,J),Cn.state.spotShadowMap.length>0&&Le.setValue(D,"spotShadowMap",Cn.state.spotShadowMap,J),Cn.state.pointShadowMap.length>0&&Le.setValue(D,"pointShadowMap",Cn.state.pointShadowMap,J)),G.isSkinnedMesh){Le.setOptional(D,G,"bindMatrix"),Le.setOptional(D,G,"bindMatrixInverse");let Oe=G.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Le.setValue(D,"boneTexture",Oe.boneTexture,J))}G.isBatchedMesh&&(Le.setOptional(D,G,"batchingTexture"),Le.setValue(D,"batchingTexture",G._matricesTexture,J),Le.setOptional(D,G,"batchingIdTexture"),Le.setValue(D,"batchingIdTexture",G._indirectTexture,J),Le.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Le.setValue(D,"batchingColorTexture",G._colorsTexture,J));let vs=Z.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&O.update(G,Z,ti),(xs||Ot.receiveShadow!==G.receiveShadow)&&(Ot.receiveShadow=G.receiveShadow,Le.setValue(D,"receiveShadow",G.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(Ze.envMapIntensity.value=U.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=JM()),xs){if(Le.setValue(D,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&al(Ze,Tr),bt&&X.fog===!0&&Yt.refreshFogUniforms(Ze,bt),Yt.refreshMaterialUniforms(Ze,X,it,Q,M.state.transmissionRenderTarget[w.id]),Ot.needsLights&&Ot.lightProbeGrid){let Oe=Ot.lightProbeGrid;Ze.probesSH.value=Oe.texture,Ze.probesMin.value.copy(Oe.boundingBox.min),Ze.probesMax.value.copy(Oe.boundingBox.max),Ze.probesResolution.value.copy(Oe.resolution)}ya.upload(D,Rn(Ot),Ze,J)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ya.upload(D,Rn(Ot),Ze,J),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Le.setValue(D,"center",G.center),Le.setValue(D,"modelViewMatrix",G.modelViewMatrix),Le.setValue(D,"normalMatrix",G.normalMatrix),Le.setValue(D,"modelMatrix",G.matrixWorld),X.uniformsGroups!==void 0){let Oe=X.uniformsGroups;for(let bs=0,Rr=Oe.length;bs<Rr;bs++){let Bf=Oe[bs];ct.update(Bf,ti),ct.bind(Bf,ti)}}return ti}function al(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function rn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(w,U,Z){let X=V.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=U,V.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let Z=V.get(w);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,Z=0){ot=w,H=U,Y=Z;let X=null,G=!1,bt=!1;if(w){let Ct=V.get(w);if(Ct.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(D.FRAMEBUFFER,Ct.__webglFramebuffer),B.copy(w.viewport),dt.copy(w.scissor),ht=w.scissorTest,b.viewport(B),b.scissor(dt),b.setScissorTest(ht),K=-1;return}else if(Ct.__webglFramebuffer===void 0)J.setupRenderTarget(w);else if(Ct.__hasExternalTextures)J.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let fe=w.depthTexture;if(Ct.__boundDepthTexture!==fe){if(fe!==null&&V.has(fe)&&(w.width!==fe.image.width||w.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(w)}}let Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(bt=!0);let Kt=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[U])?X=Kt[U][Z]:X=Kt[U],G=!0):w.samples>0&&J.useMultisampledRTT(w)===!1?X=V.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?X=Kt[Z]:X=Kt,B.copy(w.viewport),dt.copy(w.scissor),ht=w.scissorTest}else B.copy(At).multiplyScalar(it).floor(),dt.copy(Xt).multiplyScalar(it).floor(),ht=ye;if(Z!==0&&(X=F),b.bindFramebuffer(D.FRAMEBUFFER,X)&&b.drawBuffers(w,X),b.viewport(B),b.scissor(dt),b.setScissorTest(ht),G){let Ct=V.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,Z)}else if(bt){let Ct=U;for(let Ut=0;Ut<w.textures.length;Ut++){let Kt=V.get(w.textures[Ut]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ut,Kt.__webglTexture,Z,Ct)}}else if(w!==null&&Z!==0){let Ct=V.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,Z)}K=-1};function Qn(w){let U=V.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=R.textureFormatReadable(w.format),U.__typeReadable=R.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,Z,X,G,bt,Dt,Ct=0){if(!(w&&w.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){b.bindFramebuffer(D.FRAMEBUFFER,Ut);try{let Kt=w.textures[Ct],fe=Kt.format,_e=Kt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ct);let Vt=Qn(Kt);if(Vt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-X&&Z>=0&&Z<=w.height-G&&D.readPixels(U,Z,X,G,St.convert(fe),St.convert(_e),bt)}finally{let Kt=ot!==null?V.get(ot).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,U,Z,X,G,bt,Dt,Ct=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut)if(U>=0&&U<=w.width-X&&Z>=0&&Z<=w.height-G){b.bindFramebuffer(D.FRAMEBUFFER,Ut);let Kt=w.textures[Ct],fe=Kt.format,_e=Kt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ct);let Vt=Qn(Kt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,bt.byteLength,D.STREAM_READ),D.readPixels(U,Z,X,G,St.convert(fe),St.convert(_e),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let tn=ot!==null?V.get(ot).__webglFramebuffer:null;b.bindFramebuffer(D.FRAMEBUFFER,tn);let ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await tm(D,ze,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,bt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Re),D.deleteSync(ze),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Z=0){let X=Math.pow(2,-Z),G=Math.floor(w.image.width*X),bt=Math.floor(w.image.height*X),Dt=U!==null?U.x:0,Ct=U!==null?U.y:0;J.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Dt,Ct,G,bt),b.unbindTexture()},this.copyTextureToTexture=function(w,U,Z=null,X=null,G=0,bt=0){let Dt,Ct,Ut,Kt,fe,_e,Vt,Re,tn,ze=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(Z!==null)Dt=Z.max.x-Z.min.x,Ct=Z.max.y-Z.min.y,Ut=Z.isBox3?Z.max.z-Z.min.z:1,Kt=Z.min.x,fe=Z.min.y,_e=Z.isBox3?Z.min.z:0;else{let Ze=Math.pow(2,-G);Dt=Math.floor(ze.width*Ze),Ct=Math.floor(ze.height*Ze),w.isDataArrayTexture?Ut=ze.depth:w.isData3DTexture?Ut=Math.floor(ze.depth*Ze):Ut=1,Kt=0,fe=0,_e=0}X!==null?(Vt=X.x,Re=X.y,tn=X.z):(Vt=0,Re=0,tn=0);let Ne=St.convert(U.format),bn=St.convert(U.type),Ot;U.isData3DTexture?(J.setTexture3D(U,0),Ot=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Ot=D.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Ot=D.TEXTURE_2D),b.activeTexture(D.TEXTURE0),b.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Cn=b.getParameter(D.UNPACK_ROW_LENGTH),Se=b.getParameter(D.UNPACK_IMAGE_HEIGHT),ti=b.getParameter(D.UNPACK_SKIP_PIXELS),Fi=b.getParameter(D.UNPACK_SKIP_ROWS),xs=b.getParameter(D.UNPACK_SKIP_IMAGES);b.pixelStorei(D.UNPACK_ROW_LENGTH,ze.width),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ze.height),b.pixelStorei(D.UNPACK_SKIP_PIXELS,Kt),b.pixelStorei(D.UNPACK_SKIP_ROWS,fe),b.pixelStorei(D.UNPACK_SKIP_IMAGES,_e);let Tr=w.isDataArrayTexture||w.isData3DTexture,Le=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let Ze=V.get(w),vs=V.get(U),Oe=V.get(Ze.__renderTarget),bs=V.get(vs.__renderTarget);b.bindFramebuffer(D.READ_FRAMEBUFFER,Oe.__webglFramebuffer),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Rr=0;Rr<Ut;Rr++)Tr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(w).__webglTexture,G,_e+Rr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(U).__webglTexture,bt,tn+Rr)),D.blitFramebuffer(Kt,fe,Dt,Ct,Vt,Re,Dt,Ct,D.DEPTH_BUFFER_BIT,D.NEAREST);b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||V.has(w)){let Ze=V.get(w),vs=V.get(U);b.bindFramebuffer(D.READ_FRAMEBUFFER,P),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,N);for(let Oe=0;Oe<Ut;Oe++)Tr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,G,_e+Oe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ze.__webglTexture,G),Le?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vs.__webglTexture,bt,tn+Oe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vs.__webglTexture,bt),G!==0?D.blitFramebuffer(Kt,fe,Dt,Ct,Vt,Re,Dt,Ct,D.COLOR_BUFFER_BIT,D.NEAREST):Le?D.copyTexSubImage3D(Ot,bt,Vt,Re,tn+Oe,Kt,fe,Dt,Ct):D.copyTexSubImage2D(Ot,bt,Vt,Re,Kt,fe,Dt,Ct);b.bindFramebuffer(D.READ_FRAMEBUFFER,null),b.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Le?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ot,bt,Vt,Re,tn,Dt,Ct,Ut,Ne,bn,ze.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,bt,Vt,Re,tn,Dt,Ct,Ut,Ne,ze.data):D.texSubImage3D(Ot,bt,Vt,Re,tn,Dt,Ct,Ut,Ne,bn,ze):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,bt,Vt,Re,Dt,Ct,Ne,bn,ze.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,bt,Vt,Re,ze.width,ze.height,Ne,ze.data):D.texSubImage2D(D.TEXTURE_2D,bt,Vt,Re,Dt,Ct,Ne,bn,ze);b.pixelStorei(D.UNPACK_ROW_LENGTH,Cn),b.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se),b.pixelStorei(D.UNPACK_SKIP_PIXELS,ti),b.pixelStorei(D.UNPACK_SKIP_ROWS,Fi),b.pixelStorei(D.UNPACK_SKIP_IMAGES,xs),bt===0&&U.generateMipmaps&&D.generateMipmap(Ot),b.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&J.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?J.setTextureCube(w,0):w.isData3DTexture?J.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?J.setTexture2DArray(w,0):J.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){H=0,Y=0,ot=null,b.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var Bm={type:"change"},wd={type:"start"},Gm={type:"end"},uu=new rr,zm=new kn,jM=Math.cos(70*Jh.DEG2RAD),cn=new I,On=2*Math.PI,Pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6,hu=class extends Co{constructor(t,e=null){super(t,e),this.state=Pe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Dn,this._lastTargetPosition=new I,this._quat=new Dn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ha,this._sphericalDelta=new ha,this._scale=1,this._panOffset=new I,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new I,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tS.bind(this),this._onPointerDown=QM.bind(this),this._onPointerUp=eS.bind(this),this._onContextMenu=lS.bind(this),this._onMouseWheel=sS.bind(this),this._onKeyDown=rS.bind(this),this._onTouchStart=aS.bind(this),this._onTouchMove=oS.bind(this),this._onMouseDown=nS.bind(this),this._onMouseMove=iS.bind(this),this._interceptControlDown=cS.bind(this),this._interceptControlUp=uS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bm),this.update(),this.state=Pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;cn.copy(e).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),e.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=cn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(uu.origin.copy(this.object.position),uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uu.direction))<jM?this.object.lookAt(this.target):(zm.setFromNormalAndCoplanarPoint(this.object.up,this.target),uu.intersectPlane(zm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(Bm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?On/60*this.autoRotateSpeed*t:On/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){cn.setFromMatrixColumn(e,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,e){this.screenSpacePanning===!0?cn.setFromMatrixColumn(e,1):(cn.setFromMatrixColumn(e,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;cn.copy(s).sub(this.target);let r=cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function QM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function eS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gm),this.state=Pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function nS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Pe.DOLLY;break;case Us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pe.ROTATE}break;case Us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pe.PAN}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(wd)}function iS(n){switch(this.state){case Pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sS(n){this.enabled===!1||this.enableZoom===!1||this.state!==Pe.NONE||(n.preventDefault(),this.dispatchEvent(wd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Gm))}function rS(n){this.enabled!==!1&&this._handleKeyDown(n)}function aS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Pe.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Pe.TOUCH_PAN;break;default:this.state=Pe.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Pe.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Pe.TOUCH_DOLLY_ROTATE;break;default:this.state=Pe.NONE}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(wd)}function oS(n){switch(this._trackPointer(n),this.state){case Pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Pe.NONE}}function lS(n){this.enabled!==!1&&n.preventDefault()}function cS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var du=class extends ir{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new he;t.deleteAttribute("uv");let e=new pe({side:_n}),i=new pe,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new wt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Yn(t,i,6),o=new Ye;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new wt(t,ba(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new wt(t,ba(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new wt(t,ba(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new wt(t,ba(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new wt(t,ba(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new wt(t,ba(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ba(n){return new So({color:0,emissive:16777215,emissiveIntensity:n})}var hS=42e5,Ad=[1,.8,.65,.5],Vm=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),dS=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Hm(n,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:i=null}={}){let s=window.devicePixelRatio||1,r;try{r=new ou({canvas:n,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=Ke,r.toneMapping=ko,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=pc,r.shadowMap.autoUpdate=!1,r.setClearColor(new Gt(t),1);let a=new ir,o=new xa(r);a.environment=o.fromScene(new du,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new gn(32,1,4,1500);l.position.set(0,160,150),a.add(new Ao(16777215,13616860,.35));let c=new Ro(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new wt(new si(900,900),new bo({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let d=new hu(l,n);d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),d.dampingFactor=.14,d.rotateSpeed=.75,d.zoomSpeed=.9,d.panSpeed=.8,d.screenSpacePanning=!0,d.minDistance=9,d.maxDistance=1200,d.minPolarAngle=.06,d.maxPolarAngle=1.32,d.zoomToCursor=!0,d.cursor.set(0,6,-3),d.maxTargetRadius=85,d.target.set(0,4,0);function h(){let $=l.position.distanceTo(d.target),ut=Math.min(4,Math.max(.4,$*.04));Math.abs(ut-l.near)>ut*.08&&(l.near=ut,l.far=Math.max(900,$*6),l.updateProjectionMatrix())}let f=0,g=0,v=!1,m=!0,p=new Set,y=new Set,S=[],x=new Set,E=1,M=0,T=0,_=0,A=0,C=[],k=0,L=0,F=0;function P(){!f&&!g&&(f=requestAnimationFrame(Y))}function N(){!f&&!g&&(g=setTimeout(()=>{g=0,P()},33))}function H($){Math.abs($-T)<.01||(T=$,r.setPixelRatio($),r.setSize(n.clientWidth||1,n.clientHeight||1,!1))}function Y($){f=0;let ut=d.update();for(let qt of x){let ae=Math.min(1,($-(qt.bas??=$))/qt.sure);qt.adim(dS(ae)),qt.golge&&(m=!0),ae>=1?(x.delete(qt),qt.bitti?.()):ut=!0}for(let qt of p)qt($)&&(ut=!0);let Rt=!1;for(let qt of y)qt($,A?Math.min(100,$-A):33)&&(Rt=!0);A=Rt?$:0;let Jt=ut||Rt;clearTimeout(F),h(),H(E*Ad[M]),m&&(r.shadowMap.needsUpdate=!0,m=!1),r.render(a,l),Yt(),ut?ot($):(_=0,C=[]),ut?P():Rt&&N(),!Jt&&M>0&&(F=setTimeout(()=>{H(E),r.render(a,l),Yt()},300))}function ot($){_&&C.push($-_),_=$;let ut=C.length,Rt=C.reduce((ae,Nt)=>ae+Nt,0),Jt=ut>=6&&ut<24&&Rt>=450&&[...C].sort((ae,Nt)=>ae-Nt)[ut>>1]>50;if(ut<24&&!Jt)return;let qt=Rt/ut;C=[],!($-L<(Jt?300:500))&&(qt>26&&M<Ad.length-1?(M++,k=0,L=$,e("kalite",M)):qt<19&&M>0&&++k>=3&&(M--,k=0,L=$))}function K(){let $=n.clientWidth||1,ut=n.clientHeight||1;E=Math.max(.5,Math.min(s,2,Math.sqrt(hS/($*ut)))),T=0,H(E*Ad[M]),l.aspect=$/ut,Zt();for(let Rt of S)Rt.w=0;jt=0,R=null,!v&&ne&&q(ne,!0),P()}let nt=0,B=0;new ResizeObserver(()=>{clearTimeout(nt);let $=performance.now();if(document.documentElement.dataset.suruklenen&&$-B>125){B=$,K();return}nt=setTimeout(()=>{B=performance.now(),K()},110)}).observe(n),window.addEventListener("bote-erisim",()=>{d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let $ of S)$.w=0;P()});let ht=0;function Zt(){let $=n.clientWidth||1,ut=n.clientHeight||1;ht>0?l.setViewOffset($,ut,0,Math.min(ht,ut*.9)/2,$,ut):l.clearViewOffset(),l.updateProjectionMatrix()}function ee($,ut=!1){ht=Math.max(0,$||0),R=null,Zt(),!v&&ne?q(ne,ut):P()}d.addEventListener("change",P),d.addEventListener("start",()=>{v=!0,e("kamera-elle")});let ne=null,Q=new I(0,1,0),it=new I,gt=new I,Wt=new I,At=new I,Xt=new I,ye=$=>$.isBox3?$:new ni(new I($[0],$[1],$[2]),new I($[3],$[4],$[5]));function W($,ut){let Rt=i?.()||{},Jt=Math.min(ht,ut*.9),qt=Rt.sol??16,ae=$-(Rt.sag??16),Nt=Rt.ust??16,Ae=ut-Math.max(Rt.alt??16,Jt+12);if(ae-qt<80){let ue=$/2;qt=ue-40,ae=ue+40}if(Ae-Nt<80){let ue=(Math.max(0,Nt)+Math.max(Nt+80,Ae))/2;Nt=ue-40,Ae=ue+40}return{x0:qt,y0:Nt,x1:ae,y1:Ae,engel:Rt.engel||[]}}function j($,ut){let Rt=n.clientWidth||1,Jt=n.clientHeight||1,qt=ye($),ae=new I(...ut).normalize();it.crossVectors(Q,ae).normalize(),gt.crossVectors(ae,it),Wt.copy(ae).negate();let Nt=R=W(Rt,Jt),Ae=Math.tan(l.fov*Math.PI/360),ue=Ae*(Rt/Jt),Me=Math.min(ht,Jt*.9)/Jt,Ue=(Nt.x0/Rt*2-1)*ue,Ee=(Nt.x1/Rt*2-1)*ue,De=(1-Nt.y0/Jt*2-Me)*Ae,vn=(1-Nt.y1/Jt*2-Me)*Ae;qt.getCenter(At);let Qe=[],Oi=[],sn=[];for(let rn=0;rn<8;rn++)Xt.set(rn&1?qt.max.x:qt.min.x,rn&2?qt.max.y:qt.min.y,rn&4?qt.max.z:qt.min.z).sub(At),Qe.push(Xt.dot(it)),Oi.push(Xt.dot(gt)),sn.push(Xt.dot(Wt));let Rn=0;for(let rn=0;rn<8;rn++){Rn=Math.max(Rn,2-sn[rn]);for(let Qn=0;Qn<8;Qn++)Rn=Math.max(Rn,(Qe[rn]-Qe[Qn]-Ee*sn[rn]+Ue*sn[Qn])/(Ee-Ue),(Oi[rn]-Oi[Qn]-De*sn[rn]+vn*sn[Qn])/(De-vn))}Rn=Math.min(d.maxDistance,Math.max(d.minDistance,Rn));let Zs=(rn,Qn,w)=>{let U=-1/0,Z=1/0;for(let G=0;G<8;G++)U=Math.max(U,rn[G]-w*(sn[G]+Rn)),Z=Math.min(Z,rn[G]-Qn*(sn[G]+Rn));if(!(Z>U))return(U+Z)/2;let X=G=>{let bt=-1/0,Dt=1/0;for(let Ct=0;Ct<8;Ct++){let Ut=(rn[Ct]-G)/(sn[Ct]+Rn);Ut>bt&&(bt=Ut),Ut<Dt&&(Dt=Ut)}return w-bt-(Dt-Qn)};for(let G=0;G<32;G++){let bt=(U+Z)/2;X(bt)>0?Z=bt:U=bt}return(U+Z)/2},Ks=Zs(Qe,Ue,Ee),Yu=Zs(Oi,vn,De),al=At.clone().addScaledVector(it,Ks).addScaledVector(gt,Yu);return{merkez:al,konum:al.clone().addScaledVector(ae,Rn)}}function q($,ut=!1){ne=$,v=!1;let{merkez:Rt,konum:Jt}=j($.kutu,$.yon);if(ut||Vm())return l.position.copy(Jt),d.target.copy(Rt),d.update(),P(),Promise.resolve();let qt=l.position.clone(),ae=d.target.clone();return d.enabled=!1,lt(650,Nt=>{l.position.lerpVectors(qt,Jt,Nt),d.target.lerpVectors(ae,Rt,Nt),l.lookAt(d.target)}).then(()=>{d.enabled=!0,d.update()})}function st(){if(!ne)return null;l.updateMatrixWorld();let $=n.clientWidth||1,ut=n.clientHeight||1,Rt=ye(ne.kutu),Jt=1/0,qt=-1/0,ae=1/0,Nt=-1/0;for(let Ae=0;Ae<8;Ae++){Xt.set(Ae&1?Rt.max.x:Rt.min.x,Ae&2?Rt.max.y:Rt.min.y,Ae&4?Rt.max.z:Rt.min.z).project(l);let ue=(Xt.x+1)/2*$,Me=(1-Xt.y)/2*ut;Jt=Math.min(Jt,ue),qt=Math.max(qt,ue),ae=Math.min(ae,Me),Nt=Math.max(Nt,Me)}return{kutu:{x0:Jt,y0:ae,x1:qt,y1:Nt},guvenli:W($,ut),w:$,h:ut}}function lt($,ut,Rt=!1){return Vm()?(ut(1),Rt&&(m=!0),P(),Promise.resolve()):new Promise(Jt=>{x.add({sure:$,adim:ut,bitti:Jt,golge:Rt}),P()})}let _t=n.parentElement.querySelector(".etiketler"),Lt=n.parentElement.querySelector(".isaretler")||_t,Bt="http://www.w3.org/2000/svg",ft=document.createElementNS(Bt,"svg");ft.setAttribute("class","cizgiler"),ft.setAttribute("aria-hidden","true"),_t.appendChild(ft);let D=[],le=[],jt=0,R=null,b=new I,z=new I,V=new I,J=$=>{for(let ut=$;ut;ut=ut.parent)if(!ut.visible)return!1;return!0};function pt($){for(let ut of S)ut.el.remove(),ut.cizgi.remove(),ut.nokt.remove();S.length=0;for(let{nokta:ut,metin:Rt,tur:Jt}of $){let qt=document.createElement("div");qt.className="etiket"+(Jt?` etiket-${Jt}`:""),qt.textContent=Rt,_t.appendChild(qt);let ae=document.createElementNS(Bt,"line"),Nt=document.createElementNS(Bt,"circle");Nt.setAttribute("r","4.5"),ft.append(ae,Nt),S.push({el:qt,nokta:ut,cizgi:ae,nokt:Nt,w:0,h:0})}P()}function yt($){for(let ut of D)ut.el.remove();D.length=0;for(let ut of $)ut.el.hidden=!0,Lt.appendChild(ut.el),D.push({...ut,acik:!1});le=D.map((ut,Rt)=>[ut,Rt]).sort((ut,Rt)=>(Rt[0].oncelik??1)-(ut[0].oncelik??1)||ut[1]-Rt[1]).map(([ut])=>ut),jt=0,R=null,P()}function et($,ut){for(let Rt=D.length-1;Rt>=0;Rt--){let Jt=D[Rt].el;if(Jt.hidden)continue;let qt=Jt.getBoundingClientRect(),ae=qt.width/2;if(ae&&Math.hypot($-qt.left-ae,ut-qt.top-qt.height/2)<=ae+2)return Jt}return null}function at($,ut){if(!D.length)return;jt||(jt=parseFloat(getComputedStyle(Lt).getPropertyValue("--isaret"))||44);let Rt=R||(R=W($,ut)),Jt=jt+4,qt=[],ae=document.activeElement,Nt=Math.tan(l.fov*Math.PI/360),Ae=D.some(ue=>ue.el===ae)?[...le].sort((ue,Me)=>(Me.el===ae)-(ue.el===ae)):le;for(let ue of Ae){let Me=!1,Ue=0,Ee=0;(!ue.nesne||J(ue.nesne))&&(ue.nesne?z.copy(ue.yerel).applyMatrix4(ue.nesne.matrixWorld):z.copy(ue.nokta),V.copy(z).applyMatrix4(l.matrixWorldInverse),V.z<-l.near&&(b.copy(z).project(l),Ue=(b.x+1)/2*$,Ee=(1-b.y)/2*ut,Me=Ue>=Rt.x0&&Ue<=Rt.x1&&Ee>=Rt.y0&&Ee<=Rt.y1&&!Rt.engel.some(De=>Ue>De.x0-Jt/2&&Ue<De.x1+Jt/2&&Ee>De.y0-Jt/2&&Ee<De.y1+Jt/2),Me&&ue.adim&&(Me=ue.adim*ut/(2*-V.z*Nt)>=jt),Me&&ue.el!==ae&&(Me=!qt.some(De=>Math.abs(De.x-Ue)<Jt&&Math.abs(De.y-Ee)<Jt)))),Me&&(qt.push({x:Ue,y:Ee}),ue.el.style.transform=`translate3d(${Math.round(Ue)}px,${Math.round(Ee)}px,0)`),ue.acik!==Me&&(ue.acik=Me,ue.el.hidden=!Me)}}let Et=($,ut,Rt)=>(b.copy($).project(l),{x:(b.x+1)/2*ut,y:(1-b.y)/2*Rt,gor:b.z<1&&Math.abs(b.x)<1.05&&Math.abs(b.y)<1.05});function Yt(){let $=n.clientWidth,ut=n.clientHeight;if(at($,ut),!S.length)return;ft.setAttribute("width",$),ft.setAttribute("height",ut);let Rt=[],Jt=8,qt=30,ae=S.map(Nt=>({e:Nt,p:Et(Nt.nokta,$,ut)})).sort((Nt,Ae)=>Ae.p.y-Nt.p.y);for(let{e:Nt,p:Ae}of ae){Nt.w||(Nt.w=Nt.el.offsetWidth,Nt.h=Nt.el.offsetHeight);let ue=Math.min(Math.max(Ae.x-Nt.w/2,6),$-Nt.w-6),Me=Ae.y-qt-Nt.h,Ue=!1;for(let De=0;De<6;De++){let vn=Rt.find(Qe=>ue<Qe.x+Qe.w+Jt&&ue+Nt.w+Jt>Qe.x&&Me<Qe.y+Qe.h+Jt&&Me+Nt.h+Jt>Qe.y);if(!vn)break;if(Me=vn.y-Nt.h-Jt,Me<4){Me=Ae.y+qt,Ue=!0,ue=Math.min(Math.max(vn.x+vn.w+Jt,6),$-Nt.w-6);break}}Rt.push({x:ue,y:Me,w:Nt.w,h:Nt.h});let Ee=Ae.gor?"1":"0";Nt.el.style.opacity=Ee,Nt.cizgi.style.opacity=Ee,Nt.nokt.style.opacity=Ee,Nt.el.style.transform=`translate3d(${Math.round(ue)}px,${Math.round(Me)}px,0)`,Nt.cizgi.setAttribute("x1",Ae.x.toFixed(1)),Nt.cizgi.setAttribute("y1",Ae.y.toFixed(1)),Nt.cizgi.setAttribute("x2",(ue+Nt.w/2).toFixed(1)),Nt.cizgi.setAttribute("y2",(Ue?Me:Me+Nt.h).toFixed(1)),Nt.nokt.setAttribute("cx",Ae.x.toFixed(1)),Nt.nokt.setAttribute("cy",Ae.y.toFixed(1))}}let Tt=new lr,Mt=new tt,$t=[],Qt=new Set,re=new I,O=new I,vt=new I,rt=$=>!$.isMesh||$.isInstancedMesh||$===u||!J($)?!1:(Array.isArray($.material)?$.material:[$.material]).some(Rt=>Rt&&Rt.visible!==!1&&Rt.blending!==ri&&!(Rt.transparent&&Rt.opacity<.2));function St($,ut,Rt=1){Mt.set($,ut),Tt.setFromCamera(Mt,l);let Jt=Tt.intersectObjects(a.children,!0).find(Ee=>rt(Ee.object)),qt=Jt?Jt.point:null,ae=Jt?Jt.distance:1/0,Nt=n.clientHeight||1,Ae=Math.tan(l.fov*Math.PI/360),ue=null,Me=1/0,Ue=1/0;for(let Ee of $t){let De=Ee.userData;if(De.etkin===!1||!J(Ee))continue;let vn=!1;if(qt&&De.yari){re.copy(qt),Ee.worldToLocal(re),O.setFromMatrixScale(Ee.matrixWorld);let[sn,Rn,Zs]=De.yari,Ks=.25;vn=Math.abs(re.x)<=sn+Ks/O.x&&Math.abs(re.y)<=Rn+Ks/O.y&&Math.abs(re.z)<=Zs+Ks/O.z}if(!vn&&De.ince&&Ee.isMesh){let sn=Tt.intersectObject(Ee,!1)[0];vn=!!sn&&sn.distance<=ae+.5}if(!vn||(vt.setFromMatrixPosition(Ee.matrixWorld),De.minPx&&De.minAdim&&(V.copy(vt).applyMatrix4(l.matrixWorldInverse),De.minAdim*Nt/(2*Math.max(.01,-V.z)*Ae)<De.minPx*Rt)))continue;let Qe=De.hacim??1/0,Oi=qt?vt.distanceToSquared(qt):0;(Qe<Me*.99||Qe<=Me*1.01&&Oi<Ue)&&(ue=Ee,Me=Qe,Ue=Oi)}return{vekil:ue,nokta:qt?qt.clone():ue?new I().setFromMatrixPosition(ue.matrixWorld):null}}let It=new Set,ct=null,Ht=!1;n.addEventListener("pointerdown",$=>{if(It.add($.pointerId),It.size>1){Ht=!0,ct=null;return}ct=Ht?null:{x:$.clientX,y:$.clientY,t:performance.now(),id:$.pointerId}}),n.addEventListener("pointerup",$=>{let ut=ct;if(It.delete($.pointerId),It.size||(Ht=!1),!ut||ut.id!==$.pointerId||(ct=null,Math.hypot($.clientX-ut.x,$.clientY-ut.y)>9||performance.now()-ut.t>600))return;let Rt=D.length?et($.clientX,$.clientY):null;if(Rt){Rt.click();return}let Jt=n.getBoundingClientRect(),qt=$.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,ae=St(($.clientX-Jt.left)/Jt.width*2-1,-(($.clientY-Jt.top)/Jt.height)*2+1,qt);for(let Nt of Qt)Nt(ae.vekil?ae.vekil.userData:null,ae.nokta,ae.vekil)}),n.addEventListener("pointercancel",$=>{It.delete($.pointerId),It.size||(Ht=!1),ct=null});let zt=null,Ie=$=>{$!==zt&&(zt?.classList.remove("ustunde"),$?.classList.add("ustunde"),zt=$,n.style.cursor=$?"pointer":"")};return n.addEventListener("pointermove",$=>{$.pointerType==="mouse"&&!$.buttons&&Ie(D.length?et($.clientX,$.clientY):null)}),n.addEventListener("pointerleave",()=>Ie(null)),n.addEventListener("contextmenu",$=>$.preventDefault()),n.addEventListener("webglcontextlost",$=>{$.preventDefault(),e("baglam-kaybi")}),n.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),m=!0,P()}),K(),{renderer:r,scene:a,camera:l,controls:d,hedefler:$t,iste:P,kameraGit:q,tween:lt,etiketKoy:pt,isaretKoy:yt,gorunurAlan:ee,golgeYenile:()=>{m=!0,P()},kareGuncelleyici:$=>(p.add($),P(),()=>p.delete($)),yavasGuncelleyici:$=>(y.add($),P(),()=>y.delete($)),dokunmaDinle:$=>Qt.add($),sec:St,kadrajOlc:st,guvenliYenile:()=>{R=null,jt=0,P()},yakinlas:$=>{let ut=l.position.clone().sub(d.target),Rt=Math.min(d.maxDistance,Math.max(d.minDistance,ut.length()*$)),Jt=l.position.clone(),qt=d.target.clone().addScaledVector(ut.normalize(),Rt);return v=!0,lt(260,ae=>l.position.lerpVectors(Jt,qt,ae))},arkaPlan:$=>{r.setClearColor(new Gt($),1),P()},sonHedef:()=>ne,kalite:()=>({kademe:M,piksel:Math.round(T*100)/100,tam:Math.round(E*100)/100})}}function Ln(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Je,c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Wm(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][h]);let g=Wm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Wm(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new wn(a,e,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let v=u.getComponent(h,g);o.setComponent(h+d,g,v)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Wo=new I;function li(n,t,e,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Wo.copy(t),Wo[i]=0,Wo.normalize();let c=.5*a/(a+o),u=1-Wo.angleTo(n)/l;return Math.sign(Wo[e])===1?u*c:o/(a+o)+c+c*(1-u)}var Fn=class n extends he{constructor(t=1,e=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,u=new I(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,v=new I,m=.5/a;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[y+0]=li(v,c,"z","y",r,i),f[y+1]=1-li(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[y+0]=1-li(v,c,"z","y",r,i),f[y+1]=1-li(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[y+0]=1-li(v,c,"x","z",r,t),f[y+1]=li(v,c,"z","x",r,i);break;case 3:v.set(0,-1,0),f[y+0]=1-li(v,c,"x","z",r,t),f[y+1]=1-li(v,c,"z","x",r,i);break;case 4:v.set(0,0,1),f[y+0]=1-li(v,c,"x","y",r,t),f[y+1]=1-li(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[y+0]=li(v,c,"x","y",r,t),f[y+1]=1-li(v,c,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var fu={x:45.2,z:21.6,a:6,arduinoZ:28,unoX:57.4,unoZ:21.9};function Xm(n,t,e){let{x:i,z:s,a:r}=fu;n.save(),n.strokeStyle=e,n.fillStyle=e,n.lineCap="round",n.lineJoin="round",n.lineWidth=1.05*t,n.beginPath();for(let u=0;u<=160;u++){let d=u/160*Math.PI*2,h=i+r*Math.cos(d),f=s+r*.62*Math.sin(2*d)*.92;u?n.lineTo(h*t,f*t):n.moveTo(h*t,f*t)}n.closePath(),n.stroke();let a=r*.2,o=.8*t,l=i-r*.52,c=i+r*.52;n.lineWidth=o,n.lineCap="butt",n.beginPath(),n.moveTo((l-a)*t,s*t),n.lineTo((l+a)*t,s*t),n.stroke(),n.beginPath(),n.moveTo((c-a)*t,s*t),n.lineTo((c+a)*t,s*t),n.moveTo(c*t,(s-a)*t),n.lineTo(c*t,(s+a)*t),n.stroke(),n.textAlign="center",n.textBaseline="middle",n.save(),n.translate(i*t,fu.arduinoZ*t),n.scale(.92,1),n.font=`800 ${2.5*t}px "Arial Black", "Arial", Helvetica, sans-serif`,n.fillText("ARDUINO",0,0),n.restore(),n.save(),n.translate(fu.unoX*t,fu.unoZ*t),n.scale(.9,1),n.font=`800 ${4.6*t}px "Arial Black", "Arial", Helvetica, sans-serif`,n.fillText("UNO",0,0),n.restore(),n.restore()}function mu(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ci(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d",{willReadFrequently:!1})]}var Rd={sade:{pcb:2048,pcbN:0,bb:1536,bbN:0,aniz:8},dusuk:{pcb:1536,pcbN:0,bb:1536,bbN:0,aniz:4},orta:{pcb:2048,pcbN:1024,bb:2048,bbN:1024,aniz:8},yuksek:{pcb:4096,pcbN:2048,bb:3072,bbN:1536,aniz:16}};function pu(n,t,e,i,s,r){let a=mu(i),o=Math.max(2,Math.round(t/s)),l=Math.max(2,Math.round(e/s)),[c,u]=ci(o,l),d=u.createImageData(o,l);for(let h=0;h<o*l;h++){let f=a()<.5?0:255;d.data[h*4]=d.data[h*4+1]=d.data[h*4+2]=f,d.data[h*4+3]=Math.round(a()*255*r)}u.putImageData(d,0,0),n.save(),n.imageSmoothingEnabled=!0,n.drawImage(c,0,0,t,e),n.restore()}function Cd(n,t){let e=n.width,i=n.height,s=n.getContext("2d").getImageData(0,0,e,i).data,[r,a]=ci(e,i),o=a.createImageData(e,i),l=o.data,c=(u,d)=>s[(Math.min(i-1,Math.max(0,d))*e+Math.min(e-1,Math.max(0,u)))*4];for(let u=0;u<i;u++)for(let d=0;d<e;d++){let h=(c(d-1,u)-c(d+1,u))*t/255,f=(c(d,u+1)-c(d,u-1))*t/255,g=1,v=Math.hypot(h,f,g);h/=v,f/=v,g/=v;let m=(u*e+d)*4;l[m]=(h*.5+.5)*255,l[m+1]=(f*.5+.5)*255,l[m+2]=(g*.5+.5)*255,l[m+3]=255}return a.putImageData(o,0,0),r}function Ki(n,t,e,i=!1){let s=new Hi(n);return s.colorSpace=t?Ke:Li,s.minFilter=$i,s.magFilter=an,s.anisotropy=e,i&&(s.wrapS=s.wrapT=Zr),s}var Ed={albedo:{maske:"#0d7783",iz:"#3fb0bb",ped:"#cfd3d8",altin:"#d9b04f",delik:"#101214",ipek:"#f2f7f7",izAlfa:.32},orm:{maske:"rgb(255,117,0)",iz:"rgb(255,105,0)",ped:"rgb(255,77,255)",altin:"rgb(255,70,255)",delik:"rgb(255,200,0)",ipek:"rgb(255,158,0)",izAlfa:1},yuk:{maske:"rgb(128,128,128)",iz:"rgb(150,150,150)",ped:"rgb(112,112,112)",altin:"rgb(110,110,110)",delik:"rgb(60,60,60)",ipek:"rgb(146,146,146)",izAlfa:1}},Zm=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],fS=[{k:[10.5,24.5,9.5,22.5],n:18},{k:[12,30,22.5,30.5],n:8},{k:[3,17,1.5,14],n:8},{k:[2,22,41,52],n:14},{k:[24,64,29,33],n:10},{k:[24,64,41.5,48],n:10},{k:[20,66,5,9.5],n:10}],pS=[[20.07,45.47,1.27,3.81],[46.99,67.31,1.27,3.81],[25.15,45.47,49.53,52.07],[48.01,63.25,49.53,52.07],[-6.35,9.65,9.24,21.24],[-1.8,12.2,40.4,49.4],[25.75,63.25,32.2,41.4],[17.5,22.5,15,20],[15.75,26.25,24.8,29.2],[11.75,18.25,43.1,49.25],[9.85,16.15,28.35,34.65],[16.35,22.65,34.35,40.65],[4.4,10.4,2.2,8.2],[62.33,67.41,22.86,30.48],[27,30,9.6,16.4],[60,63,9.6,11.6],[37,53.5,16.5,29.6],[53.5,61.5,18.5,25.5],[30,62,9.4,11.8],[24,47,40.6,43.4],[47,64,40.6,43.4]];function Km(n=1){let t=[],e=(i,s,r,a,o)=>pS.some(([l,c,u,d])=>s+o>l&&i-o<c&&a+o>u&&r-o<d)||Zm.some(([l,c])=>Math.hypot((i+s)/2-l,(r+a)/2-c)<3.6)||t.some(l=>s+.4>l.x-l.w/2&&i-.4<l.x+l.w/2&&a+.4>l.z-l.d/2&&r-.4<l.z+l.d/2);return fS.forEach((i,s)=>{let r=mu(6221056+s),a=Math.round(i.n*n),o=0;for(let l=0;l<400&&o<a;l++){let c=r()<.62?"direnc":"kond",u=c==="direnc"?1.6:2,d=c==="direnc"?.8:1.25,h=r()<.5,f=h?u:d,g=h?d:u,v=Math.round((i.k[0]+r()*(i.k[1]-i.k[0]))/.8)*.8,m=Math.round((i.k[2]+r()*(i.k[3]-i.k[2]))/.8)*.8;v-f/2<i.k[0]||v+f/2>i.k[1]||m-g/2<i.k[2]||m+g/2>i.k[3]||e(v-f/2,v+f/2,m-g/2,m+g/2,.6)||(t.push({x:v,z:m,w:f,d:g,yatay:h,tur:c,ad:`${c==="direnc"?"R":"C"}${t.length+1}`}),o++)}}),t}function Td(n,t,e,i,{smd:s,logo:r,sus:a}){let o=t/je.w;n.fillStyle=i.maske,n.fillRect(0,0,t,e),n.save(),n.globalAlpha=i.izAlfa,n.strokeStyle=i.iz,n.lineWidth=.25*o,n.lineCap="round",n.lineJoin="round";let l=p=>{n.beginPath(),p.forEach(([y,S],x)=>x?n.lineTo(y*o,S*o):n.moveTo(y*o,S*o)),n.stroke()};for(let p=0;p<14;p++){let y=31.5+p*2.54>46?33+p*2.54:31.5+p*2.54,S=7+p%4*.8;l([[y,4.6],[y,S],[y-2.2,S+2.2],[y-2.2,30.5]])}for(let p=0;p<6;p++){let y=49.3+p*2.54;l([[y,48.4],[y,45.2-p*.3],[y-2.4,42.8-p*.3],[y-2.4,41.6]])}l([[10.5,13.5],[16,13.5],[18.5,16]]),l([[10.5,17.6],[15,17.6],[17.8,20.4],[21,20.4]]),l([[8,44],[13,44],[15.5,46.5]]),l([[36.5,48.4],[36.5,45.5],[33,42],[16,42]]),l([[39,48.4],[39,45.4],[29,45.4]]),l([[23,17.5],[26,17.5],[28.5,20],[28.5,30.5]]),l([[24.5,27],[27,27],[29.5,29.5]]),l([[3,30],[8,30],[10.5,27.5],[10.5,22]]),l([[57,28.5],[60,28.5],[62.4,26.1]]),n.restore(),n.fillStyle=i.ped;for(let p of s){let y=p.yatay?p.w*.3:p.w*1.08,S=p.yatay?p.d*1.08:p.d*.3;for(let x of[-1,1]){let E=p.x+(p.yatay?x*(p.w/2-y/2+.1):0),M=p.z+(p.yatay?0:x*(p.d/2-S/2+.1));n.fillRect((E-y/2)*o,(M-S/2)*o,y*o,S*o)}}for(let[p,y]of Zm)n.fillStyle=i.altin,n.beginPath(),n.arc(p*o,y*o,2.8*o,0,Math.PI*2),n.fill(),n.fillStyle=i.delik,n.beginPath(),n.arc(p*o,y*o,1.6*o,0,Math.PI*2),n.fill();let c=i.ipek;n.strokeStyle=c,n.fillStyle=c,n.lineWidth=.2*o;let u=(p,y,S,x)=>n.strokeRect(p*o,y*o,(S-p)*o,(x-y)*o);u(20,1.2,45.5,3.9),u(47,1.2,67.3,3.9),u(25.1,49.5,45.5,52.1),u(48,49.5,63.3,52.1);let d='"Arial Narrow", "Roboto Condensed", "Liberation Sans Narrow", Arial, Helvetica, sans-serif',h=(p,y,S,x,{don:E=0,hiza:M="center",kalin:T=700,dar:_=.84}={})=>{n.save(),n.translate(y*o,S*o),n.rotate(E),n.scale(_,1),n.font=`${T} ${x*o}px ${d}`,n.textAlign=M,n.textBaseline="middle",n.fillText(p,0,0),n.restore()},f=-Math.PI/2,g={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX\u21921",0:"RX\u21900"};for(let[p,y]of Object.entries(g))h(y,Ji[p],4.4,1.25,{don:f,hiza:"right"});h("DIGITAL (PWM~)",46,10.6,1.5);let v={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[p,y]of Object.entries(v))h(y,Vs[p],48.3,1.2,{don:f,hiza:"left"});for(let[p,y]of Object.entries(Hs))h(p,y,48.3,1.25,{don:f,hiza:"left"});h("POWER",35.3,42,1.5),h("ANALOG IN",55.6,42,1.5),h("L",26.6,10.6,1.2),h("TX",25.9,13.3,1),h("RX",25.9,15.4,1),h("ON",64.4,10.6,1.2),h("RESET",7.4,10.3,1.1),h("ICSP",64.9,21.9,1.1);let m=(p,y,S)=>{n.beginPath(),n.arc(p*o,y*o,S*o,0,Math.PI*2),n.fill()};m(62,24.1,.35),m(25.4,34.6,.35);for(let[p,y]of[[13,31.5],[19.5,37.5]])n.beginPath(),n.arc(p*o,y*o,3.5*o,0,Math.PI*2),n.stroke(),h("+",p+3.9,y-2.4,1.3);if(n.strokeRect((44.5-18.9)*o,(36.8-4.75)*o,37.8*o,9.5*o),a){h("C1",9.2,31.5,.8,{kalin:600}),h("C2",23.2,37.5,.8,{kalin:600}),h("Y1",21,29.9,.8,{kalin:600}),h("U1",44.5,43.6,.8,{kalin:600}),h("U3",20,21.2,.8,{kalin:600}),h("X1",5.2,38.6,.8,{kalin:600});for(let p of s.slice(0,26))p.x>4&&p.x<64&&h(p.ad,p.x,p.z+(p.yatay?1.15:1.55),.62,{kalin:600})}r&&Xm(n,o,c)}function Jm(n,{smd:t,logo:e}){let i=Rd[n],s=i.pcb,r=Math.round(s*je.d/je.w),[a,o]=ci(s,r);Td(o,s,r,Ed.albedo,{smd:t,logo:e,sus:!0}),n!=="sade"&&(pu(o,s,r,45223,s/110,.05),pu(o,s,r,45224,s/420,.04));let l={albedo:Ki(a,!0,i.aniz)};if(i.pcbN){let c=i.pcbN,u=Math.round(c*je.d/je.w),[d,h]=ci(c,u);Td(h,c,u,Ed.yuk,{smd:t,logo:e,sus:!0}),l.normal=Ki(Cd(d,n==="yuksek"?2.2:1.6),!1,i.aniz);let[f,g]=ci(c,u);Td(g,c,u,Ed.orm,{smd:t,logo:e,sus:!0}),l.orm=Ki(f,!1,i.aniz)}return l}var Ym={albedo:{govde:"#f1eee6",kanal:"#d9d4c9",kanalCizgi:"#c9c3b7",halka:"#dcd7cb",halkaKoyu:"#c7c1b4",delik:"#232327",kirmizi:"#d23b3b",mavi:"#2f62c9",yazi:"#8a8478"},yuk:{govde:"rgb(128,128,128)",kanal:"rgb(96,96,96)",kanalCizgi:"rgb(88,88,88)",halka:"rgb(104,104,104)",halkaKoyu:"rgb(92,92,92)",delik:"rgb(24,24,24)",kirmizi:"rgb(128,128,128)",mavi:"rgb(128,128,128)",yazi:"rgb(122,122,122)"}},$m=n=>xt.x-36.83+(n-1)*Kn;function qm(n,t,e,i){let s=t/xt.w,r=c=>(c-xt.x+xt.w/2)*s,a=c=>(c+xt.d/2)*s;n.fillStyle=i.govde,n.fillRect(0,0,t,e),n.fillStyle=i.kanal,n.fillRect(0,a(-1.5),t,3*s),n.fillStyle=i.kanalCizgi,n.fillRect(0,a(-1.5),t,.25*s),n.fillRect(0,a(1.25),t,.25*s);let o=(c,u)=>{let d=r(c),h=a(u),f=1.55*s,g=1*s;n.fillStyle=i.halkaKoyu,n.fillRect(d-f/2,h-f/2,f,f),n.fillStyle=i.halka,n.fillRect(d-f/2+.22*s,h-f/2+.22*s,f-.22*s,f-.22*s),n.fillStyle=i.delik,n.fillRect(d-g/2,h-g/2,g,g)};for(let c=1;c<=30;c++)for(let u of Object.values(fr))o($m(c)-xt.x,u);for(let c of Object.values(Bn))for(let u of pr)o($m(u)-xt.x,c);for(let c of[1,-1])n.fillStyle=i.kirmizi,n.fillRect(r(-37),a(c*23.6)-.3*s,r(37)-r(-37),.6*s),n.fillStyle=i.mavi,n.fillRect(r(-37),a(c*16.9)-.3*s,r(37)-r(-37),.6*s);let l='"Arial Narrow", "Roboto Condensed", Arial, Helvetica, sans-serif';n.textAlign="center",n.textBaseline="middle",n.font=`700 ${2.1*s}px ${l}`;for(let c of[1,-1])for(let u of[-39.4,39.4])n.fillStyle=i.kirmizi,n.fillText("+",r(u),a(c*Bn["yakin+"])),n.fillStyle=i.mavi,n.fillText("\u2212",r(u),a(c*Bn["yakin-"]));n.fillStyle=i.yazi,n.font=`700 ${1.45*s}px ${l}`;for(let[c,u]of Object.entries(fr))for(let d of[-39.3,39.3])n.fillText(c,r(d),a(u));for(let c of[1,5,10,15,20,25,30])for(let u of[1,-1])n.fillText(String(c),r(-36.83+(c-1)*Kn),a(u*15.45))}function jm(n){let t=Rd[n],e=t.bb,i=Math.round(e*xt.d/xt.w),[s,r]=ci(e,i);qm(r,e,i,Ym.albedo),pu(r,e,i,47873,e/90,.035);let a={albedo:Ki(s,!0,t.aniz)};if(t.bbN){let o=t.bbN,l=Math.round(o*xt.d/xt.w),[c,u]=ci(o,l);qm(u,o,l,Ym.yuk),a.normal=Ki(Cd(c,2.4),!1,t.aniz)}return a}function mS(n){let[t,e]=ci(1024,216);return e.fillStyle="#17171a",e.fillRect(0,0,1024,216),pu(e,1024,216,3103,6,.06),e.fillStyle="#0b0b0d",e.beginPath(),e.arc(0,108,30,-Math.PI/2,Math.PI/2),e.fill(),e.strokeStyle="#26262b",e.lineWidth=3,e.beginPath(),e.arc(70,170,16,0,Math.PI*2),e.stroke(),e.fillStyle="#9ea2a9",e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(540,84),e.scale(.9,1),e.font='700 64px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("ATMEGA328P-PU",0,0),e.restore(),e.save(),e.translate(540,150),e.scale(.9,1),e.font='600 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillStyle="#80848b",e.fillText("AVR",0,0),e.restore(),Ki(t,!0,n)}function gS(n){let[t,e]=ci(256,96);return e.fillStyle="#c9ccd2",e.fillRect(0,0,256,96),e.fillStyle="#2a2a2e",e.textAlign="center",e.textBaseline="middle",e.font='700 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("16.000",128,50),Ki(t,!0,n)}function _S(n){let[t,e]=ci(256,64);e.fillStyle="#1c1d22",e.fillRect(0,0,256,64),e.fillStyle="#b9bdc4",e.fillRect(150,0,56,64),e.fillStyle="#1c1d22";for(let i of[12,30,48])e.fillRect(166,i-2,24,5);return Ki(t,!0,n)}function Id(n,t,e,i){let[r,a]=ci(16,512);a.fillStyle="#d8c69c",a.fillRect(0,0,16,512);let o=mu(3358);for(let c=0;c<90;c++)a.fillStyle=o()<.5?"rgba(120,90,40,0.06)":"rgba(255,255,255,0.06)",a.fillRect(0,o()*512,16,2+o()*6);let l=4.6*24/256;return n.forEach((c,u)=>{let h=(1-(t[u]+e/2)/e)*512;a.fillStyle=kd[c],a.fillRect(0,h-l/e*512/2,16,l/e*512)}),Ki(r,!0,i)}function yS(){let[n,t]=ci(128,128),e=mu(3868);t.fillStyle="rgb(128,128,128)",t.fillRect(0,0,128,128);for(let s=0;s<260;s++){let r=110+Math.round(e()*36);t.fillStyle=`rgb(${r},${r},${r})`,t.fillRect(0,Math.floor(e()*128),128,1)}let i=Ki(Cd(n,.8),!1,4,!0);return i.repeat.set(2,2),i}function gu(n,t){let e=Rd[n],i=Math.min(e.aniz,t||1),s=n==="dusuk"||n==="sade",r=new Map,a=[],o=g=>(g&&a.push(g),g),l=g=>new pe(g),c={baslikPlastik:()=>l({color:1973794,roughness:.55}),baslikIc:()=>l({color:526346,roughness:.9}),metalCelik:()=>l({color:13619928,metalness:1,roughness:.32}),metalFirca:()=>l({color:13093584,metalness:1,roughness:.38,normalMap:s?null:o(yS()),normalScale:new tt(.35,.35)}),kalay:()=>l({color:12896462,metalness:1,roughness:.3}),altin:()=>l({color:14266447,metalness:1,roughness:.28}),kapAlu:()=>l({map:o(_S(i)),metalness:.55,roughness:.42}),kapUst:()=>l({color:12041154,metalness:.9,roughness:.35}),cipGovde:()=>l({color:1513242,roughness:.62}),cipUst:()=>l({map:o(mS(i)),roughness:.62}),kristal:()=>l({map:o(gS(i)),metalness:.95,roughness:.3}),kristalYan:()=>l({color:13225170,metalness:.95,roughness:.3}),resetTaban:()=>l({color:1710622,roughness:.55}),resetDugme:()=>l({color:14207392,roughness:.5}),ayak:()=>l({color:3487034,roughness:.85}),pcbKenar:()=>l({color:10723188,roughness:.7}),jak:()=>l({color:1579035,roughness:.5}),koyu:()=>l({color:657932,roughness:.95}),smdDirenc:()=>l({color:1776413,roughness:.5}),smdKond:()=>l({color:11045722,roughness:.55}),bbYan:()=>l({color:15526111,roughness:.62}),klips:()=>l({color:12094026,metalness:1,roughness:.38}),dupont:()=>l({color:2763312,roughness:.55}),butonKapak:()=>l({color:14172995,roughness:.42})};function u(g){if(!r.has(g)){let v=c[g];if(!v)throw new Error("bilinmeyen malzeme "+g);r.set(g,v())}return r.get(g)}function d(g){let v={color:new Gt(g).lerp(new Gt(16777215),.35),emissive:new Gt(g),emissiveIntensity:0,roughness:.16,metalness:0,transparent:!s,opacity:s?1:.8,depthWrite:!0};return f(n==="yuksek"?new Mo({...v,clearcoat:1,clearcoatRoughness:.08}):l(v))}let h=[],f=g=>(h.push(g),g);return{duzey:n,aniz:i,mat:u,ledKubbe:d,kayit:o,kayitMat:f,ek:g=>(n==="sade"?{smd:!0}:{smd:!0,soket:n!=="dusuk",ledIc:n!=="dusuk"})[g]??!1,dispose(){for(let g of r.values())g.dispose();for(let g of h)g.dispose();for(let g of a)g.dispose()},birak(g){let v=new Set(r.values()),m=new Set;for(let y of v)for(let S of Object.values(y))S?.isTexture&&m.add(S);let p=(y,S)=>{let x=y.indexOf(S);x>=0&&y.splice(x,1)};g.traverse(y=>{y.geometry?.dispose();for(let S of[].concat(y.material||[]))if(!v.has(S)){for(let x of Object.values(S))x?.isTexture&&!m.has(x)&&(x.dispose(),p(a,x));S.dispose(),p(h,S)}})}}}var xS="uyumlu",vS={uyumlu:[[0,0],[66.38,0],[67.9,1.52],[67.9,14.3],[68.58,14.98],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],gercek:[[0,0],[64.52,0],[66.04,1.52],[66.04,12.95],[68.58,15.49],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],dikdortgen:[[0,0],[68.58,0],[68.58,53.34],[0,53.34]]},Pd=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],un=(n,t,e,i,s,r)=>{let a=new he(n,t,e);return a.translate(i,s,r),a},Ma=(n,t,e,i,s,r,a)=>{let o=new Fn(n,t,e,2,i);return o.translate(s,r,a),o},Ld=(n,t,e,i,s,r=16,a=n)=>{let o=new $e(a,n,t,r);return o.translate(e,i,s),o},bS=n=>n.index?n.toNonIndexed():n;function hn(n,t,e=!0){let i=new wt(Ln(n.map(bS),!1),t);return i.castShadow=i.receiveShadow=e,i}function Dd(n,t,e,i=16){let s=new ks(n,{depth:t,bevelEnabled:!1,curveSegments:i});return s.rotateX(Math.PI/2),s.translate(0,e,0),s}var MS=(n,t,e,i=24)=>{let s=new Is;return s.absarc(n,t,e,0,Math.PI*2,!0),s.curves.length&&(s.autoClose=!0),s};function _u(n,{logo:t=!0}={}){let e=new Fe;e.name="kart-fiziksel";let i=n.duzey,s=i!=="dusuk",r={sade:16,dusuk:16,orta:24,yuksek:32}[i],a=n.ek("smd")?Km(i==="yuksek"?1.45:1):[],o=Jm(i,{smd:a,logo:t});for(let W of Object.values(o))n.kayit(W);let l=je.x-je.w/2,c=je.z-je.d/2,u=new Ti(vS[xS].map(([W,j])=>new tt(W,j)));for(let[W,j]of Pd)u.holes.push(MS(W,j,1.6,r));let d=Dd(u,1.6,0,r),h=d.attributes.position,f=d.attributes.uv;for(let W=0;W<h.count;W++)f.setXY(W,h.getX(W)/je.w,1-h.getZ(W)/je.d);d.translate(l,Pt,c);let g=new pe({map:o.albedo,roughness:o.orm?1:.45,metalness:o.orm?1:0});o.normal&&(g.normalMap=o.normal,g.normalScale=new tt(i==="yuksek"?.8:.6,i==="yuksek"?.8:.6)),o.orm&&(g.roughnessMap=o.orm,g.metalnessMap=o.orm),n.kayitMat(g);let v=new wt(d,[g,n.mat("pcbKenar")]);v.castShadow=v.receiveShadow=!0,e.add(v);let m=[];for(let[W,j]of Pd){let q=be(W,j,Pt-.8),st=new $e(1.6,1.6,1.6,r,1,!0);st.translate(q.x,q.y,q.z),m.push(st)}e.add(hn(m,n.mat("altin"))),e.add(hn(Pd.map(([W,j])=>{let q=be(W,j,1.2);return Ld(1.6,2.4,q.x,q.y,q.z,14)}),n.mat("ayak")));let p=[],y=[],S=[],x=(W,j,q)=>{let st=W.map(b=>j[b]),lt=Math.min(...st)-1.27,_t=Math.max(...st)+1.27,Lt=q-1.27,Bt=q+1.27,ft=7.1,D=be((lt+_t)/2,q,Pt+ft/2);p.push(Ma(_t-lt,ft,2.54,.25,D.x,D.y,D.z));let le=be((lt+_t)/2,q,Pt+ft+.02);y.push(un(_t-lt-.5,.04,2,le.x,le.y,le.z));let jt=new Ti([new tt(lt,Lt),new tt(_t,Lt),new tt(_t,Bt),new tt(lt,Bt)]);for(let b of st){let V=new Is([new tt(b-.53,q-.53),new tt(b-.53,q+.53),new tt(b+.53,q+.53),new tt(b+.53,q-.53)]);if(jt.holes.push(V),s){let J=be(b,q,Pt+ft+.25);S.push(un(.42,.4,.22,J.x,J.y,J.z-.3))}}let R=Dd(jt,1.4,ui,4);R.translate(l,0,c),p.push(R)};x(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],Ji,Sa),x(["7","6","5","4","3","2","1","0"],Ji,Sa),x(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],Vs,hs),x(["A0","A1","A2","A3","A4","A5"],Hs,hs);let E=[],M=be(64.87,26.67,Pt+1.25);p.push(Ma(5.08,2.5,7.62,.2,M.x,M.y,M.z));for(let W of[63.6,66.14])for(let j of[24.13,26.67,29.21]){let q=be(W,j,Pt+5.25);E.push(un(.64,5.5,.64,q.x,q.y,q.z));let st=new $e(.06,.45,.5,4);st.rotateY(Math.PI/4),st.translate(q.x,Pt+8.25,q.z),E.push(st)}let T=[],_=[],A=[];M=be(1.65,15.24,Pt+5.45),T.push(Ma(16,10.9,12,.5,M.x,M.y,M.z));let C=new Ti([new tt(-4.2,-3.9),new tt(4.2,-3.9),new tt(4.2,2.6),new tt(3,3.9),new tt(-3,3.9),new tt(-4.2,2.6)]),k=new ks(C,{depth:.3,bevelEnabled:!1});k.rotateY(-Math.PI/2),M=be(-6.36,15.24,Pt+5.45),k.translate(M.x+.25,M.y,M.z),_.push(k);let L=new he(.14,3,5.2);M=be(-6.42,15.24,Pt+5),L.translate(M.x,M.y,M.z);for(let W of[-6.2,6.2]){let j=be(4.5,15.24+W,Pt-.4);T.push(un(1.2,1.4,.3,j.x,j.y,j.z))}M=be(5.2,44.9,Pt+5.5),A.push(Ma(14,11,9,.8,M.x,M.y,M.z));let F=new vo(3.2,.32,8,28);F.rotateY(Math.PI/2),M=be(-1.84,44.9,Pt+5.8),F.translate(M.x,M.y,M.z),A.push(F);let P=new ar(3.15,28);P.rotateY(-Math.PI/2),P.translate(M.x-.03,M.y,M.z),_.push(P);let N=new $e(1,1,1.2,16);N.rotateZ(Math.PI/2),N.translate(M.x+.4,M.y,M.z),T.push(N);let H=[],Y=[],ot=[[0,0],[3.1,0],[3.12,1],[2.95,1.2],[3.12,1.4],[3.15,4.9],[3.05,5.35],[2.85,5.5],[0,5.5]].map(([W,j])=>new tt(W,j)),K=[];for(let[W,j]of[[13,31.5],[19.5,37.5]]){let q=be(W,j,Pt),st=new Ri(ot,s?32:20);st.rotateY(Math.PI*.8),st.translate(q.x,q.y+.35,q.z),K.push(st);let lt=new $e(2.75,2.75,.06,28);lt.translate(q.x,q.y+5.87,q.z),H.push(lt);for(let _t of[0,Math.PI/2]){let Lt=new he(4.2,.1,.32);Lt.rotateY(_t+.3),Lt.translate(q.x,q.y+5.9,q.z),_.push(Lt)}Y.push(un(6.3,.35,6.3,q.x,q.y+.175,q.z))}M=be(21,27,Pt);let nt=new Ti;nt.absarc(-3.05,0,2.2,Math.PI/2,Math.PI*1.5,!1),nt.absarc(3.05,0,2.2,-Math.PI/2,Math.PI/2,!1);let B=Dd(nt,3.4,3.5,12);B.translate(M.x,M.y,M.z);let dt=new si(6,2.25);if(dt.rotateX(-Math.PI/2),dt.translate(M.x,M.y+3.54,M.z),_.push(un(9.6,.15,3.6,M.x,M.y+.075,M.z)),M=be(44.5,36.8,Pt+1.3),p.push(Ma(37.5,2.6,9.2,.3,M.x,M.y,M.z)),s)for(let W=0;W<14;W++)for(let j of[-1,1]){let q=be(27.99+W*2.54,36.8+j*4.35,Pt+2.62);_.push(un(1,.04,.5,q.x,q.y,q.z))}let ht=[];for(let W=0;W<14;W++)for(let j of[-1,1]){let q=27.99+W*2.54,st=be(q,36.8+j*3.95,Pt+4.1);ht.push(un(.5,.3,.6,st.x,st.y,st.z));let lt=be(q,36.8+j*4.15,Pt+3.3);ht.push(un(.5,1.6,.26,lt.x,lt.y,lt.z));let _t=be(q,36.8+j*4.15,Pt+2.62);ht.push(un(.28,.4,.26,_t.x,_t.y,_t.z))}let Zt=n.mat("cipGovde"),ee=n.mat("cipUst"),ne=new wt(new Fn(35.56,3.3,7.4,2,.3),[Zt,Zt,ee,Zt,Zt,Zt]);ne.position.copy(be(44.5,36.8,Pt+2.6+1.65)),ne.castShadow=ne.receiveShadow=!0,e.add(ne);let Q=[],it=[];M=be(20,17.5,Pt+.45),Q.push(un(5,.9,5,M.x,M.y,M.z));for(let[W,j,q,st]of[[-2.6,0,.25,4.2],[2.6,0,.25,4.2],[0,-2.6,4.2,.25],[0,2.6,4.2,.25]])it.push(un(q,.2,st,M.x+W,Pt+.1,M.z+j));M=be(15,47.5,Pt+.8),Q.push(un(6.5,1.6,3.5,M.x,M.y,M.z));for(let W of[-2.3,0,2.3])it.push(un(.7,.3,1.4,M.x+W,Pt+.15,M.z+2.2));M=be(15,44.6,Pt+.2),it.push(un(3.2,.3,3,M.x,M.y,M.z)),M=be(7.4,5.2,Pt+1.6);let gt=[Ma(6,3.2,6,.45,M.x,M.y,M.z)];T.push(un(6.1,.3,6.1,M.x,Pt+3.35,M.z));for(let W of[-2.4,2.4])for(let j of[-2.4,2.4])_.push(Ld(.32,.06,M.x+W,Pt+3.53,M.z+j,10));for(let W of[-3.3,3.3])for(let j of[-2.25,2.25])T.push(un(.5,1.6,.7,M.x+W,Pt+.8,M.z+j));let Wt=new wt(Ld(1.7,1.3,M.x,Pt+4.1,M.z,24),n.mat("resetDugme"));if(Wt.castShadow=Wt.receiveShadow=!0,e.add(hn(p,n.mat("baslikPlastik")),hn(y,n.mat("baslikIc")),hn(E,n.mat("altin")),hn(T,n.mat("metalFirca")),hn(_,n.mat("koyu")),hn(A,n.mat("jak")),hn(K,n.mat("kapAlu")),hn(H,n.mat("kapUst")),hn(Y,n.mat("baslikPlastik")),hn([B],n.mat("kristalYan")),hn([dt],n.mat("kristal"),!1),hn(ht,n.mat("metalCelik")),hn(Q,Zt),hn(it,n.mat("kalay")),hn(gt,n.mat("resetTaban")),hn([L],n.mat("baslikPlastik")),Wt),S.length&&e.add(hn(S,n.mat("altin"),!1)),a.length){let W=new he(1,1,1),j=new he(1,1,1),q=new pe({color:16777215,roughness:.5});n.kayitMat(q);let st=new Yn(W,q,a.length),lt=new Yn(j,n.mat("kalay"),a.length*2),_t=new Ye,Lt=new Gt(1776413),Bt=new Gt(11045722);a.forEach((ft,D)=>{let le=ft.tur==="direnc"?.45:.7,jt=be(ft.x,ft.z,Pt+le/2),R=ft.yatay?ft.w:ft.d,b=ft.yatay?ft.d:ft.w,z=R*.18;_t.position.copy(jt),_t.rotation.set(0,ft.yatay?0:Math.PI/2,0),_t.scale.set(R-2*z+.02,le,b),_t.updateMatrix(),st.setMatrixAt(D,_t.matrix),st.setColorAt(D,ft.tur==="direnc"?Lt:Bt);for(let V of[-1,1])_t.position.set(jt.x+(ft.yatay?V*(R/2-z/2):0),jt.y,jt.z+(ft.yatay?0:V*(R/2-z/2))),_t.scale.set(z,le+.02,b+.02),_t.updateMatrix(),lt.setMatrixAt(D*2+(V>0?1:0),_t.matrix)}),e.add(st,lt)}let At=(W,j,q)=>{let st=new pe({color:new Gt(q).multiplyScalar(.55),emissive:q,emissiveIntensity:0,roughness:.25,transparent:!1});n.kayitMat(st);let lt=be(W,j,Pt+.25),_t=new wt(new he(1,.5,.8),st);_t.position.copy(lt),e.add(_t);let Lt=new wt(Ln([un(.32,.42,.82,lt.x-.66,lt.y-.04,lt.z),un(.32,.42,.82,lt.x+.66,lt.y-.04,lt.z)]),n.mat("kalay"));return e.add(Lt),Bt=>{st.emissiveIntensity=Bt?1.1:0,st.color.set(Bt?q:new Gt(q).multiplyScalar(.55))}},Xt=At(28.5,10.6,16754470),ye=At(61.5,10.6,4448378);return At(28.5,13.3,16766287),At(28.5,15.4,16766287),{grup:e,kanca:{ledL:Xt,ledOn:ye}}}var je={x:0,z:32,w:68.58,d:53.34},xt={x:0,z:-38,w:82.5,d:54.5,h:8.5},Pt=4,ui=Pt+8.5,Ve=xt.h,Kn=2.54,SS=n=>je.x-je.w/2+n,wS=n=>je.z-je.d/2+n,be=(n,t,e=Pt)=>new I(SS(n),e,wS(t)),Ji={SCL:21.336,SDA:23.876,AREF:26.416,"GND-D":28.956,13:31.496,12:34.036,11:36.576,10:39.116,9:41.656,8:44.196,7:48.26,6:50.8,5:53.34,4:55.88,3:58.42,2:60.96,1:63.5,0:66.04},Vs={NC:26.416,IOREF:28.956,RESET:31.496,"3.3V":34.036,"5V":36.576,GND1:39.116,GND2:41.656,VIN:44.196},Hs={A0:49.276,A1:51.816,A2:54.356,A3:56.896,A4:59.436,A5:61.976},Sa=2.54,hs=50.8;function Ud(n){let t=String(n);if(t in Ji)return be(Ji[t],Sa,ui);if(t in Vs)return be(Vs[t],hs,ui);if(t in Hs)return be(Hs[t],hs,ui);throw new Error("bilinmeyen pin "+n)}var eg=["3","5","6","9","10","11"];function AS(n){let t=String(n);return t==="13"?"pin-13":t==="0"||t==="1"?"pin-rx-tx":eg.includes(t)?"pin-pwm":/^\d+$/.test(t)?"pin-dijital":t.startsWith("GND")?"pin-gnd":{"5V":"pin-5v","3.3V":"pin-3v3",VIN:"pin-vin",AREF:"pin-aref",IOREF:"pin-ioref",RESET:"pin-reset",SDA:"pin-sda-scl",SCL:"pin-sda-scl"}[t]||(/^A\d$/.test(t)?"pin-analog":null)}function Qm(n){let t=String(n);return t==="0"?"0. pin (RX)":t==="1"?"1. pin (TX)":eg.includes(t)?`${t}. pin (~${t})`:/^\d+$/.test(t)?`${t}. pin`:t.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[t]||t}function wa(n,t,e,i,s=0,r=0,a=0){let o=new Ye;return o.position.set(s,r,a),o.userData={...n,yari:[t/2,e/2,i/2],hacim:n.hacim??t*e*i},o.updateMatrixWorld(),o}var fr={a:13.97,b:11.43,c:8.89,d:6.35,e:3.81,f:-3.81,g:-6.35,h:-8.89,i:-11.43,j:-13.97},yn=n=>xt.x-36.83+(n-1)*Kn,mr=(n,t,e=Ve)=>new I(yn(n),e,xt.z+fr[t]),Bn={"yakin-":19.05,"yakin+":21.59,"uzak-":-19.05,"uzak+":-21.59},pr=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];function ng(n,t,e,i=Ve){let s=pr.reduce((r,a)=>Math.abs(a-e)<Math.abs(r-e)?a:r,pr[0]);return new I(yn(s),i,xt.z+Bn[n+t])}function Nd(n,t,e,i,s,r){let a=new he(n,t,e);return a.translate(i,s,r),a}function gr(n){n.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}function tg(n,t){let e=new wt(Ln(n.map(i=>i.index?i.toNonIndexed():i),!1),t);return e.matrixAutoUpdate=!1,e}function Od(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var Fd=1;function ig(n){let t=new Hi(n);return t.colorSpace=Ke,t.anisotropy=Fd,t}var Xo=(()=>{let n=null;return()=>{if(n)return n;let[t,e]=Od(64,64),i=e.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),n=new Hi(t),n}})(),mn={};function Yo(){return mn.hazir||Object.assign(mn,{hazir:!0,pcbKenar:new pe({color:679785,roughness:.45}),siyah:new pe({color:2500140,roughness:.55}),koyu:new An({color:789519}),metal:new pe({color:14014686,metalness:1,roughness:.28}),altin:new pe({color:14858588,metalness:1,roughness:.32}),cip:new pe({color:1776416,roughness:.72}),ayak:new pe({color:3816e3,roughness:.9}),bbYan:new pe({color:15657955,roughness:.78}),bbDelik:new An({color:3421242}),serit:new pe({color:13225170,metalness:.9,roughness:.35}),vurgu:new An({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new lo({color:6962672}),secim:new An({color:1483594,transparent:!0,opacity:.85,depthWrite:!1}),gorunmez:new An({visible:!1})}),mn}function sg(n){Yo();let t=new Fe;t.name="kart";let e=_u(gu("sade",Fd),{logo:!0});e.grup.traverse(y=>{y.isInstancedMesh&&(y.userData.park=!0)}),t.add(e.grup);let i=(y,S)=>{let x=y.map(E=>S[E]);return{x1:Math.min(...x)-1.27,x2:Math.max(...x)+1.27}},s=i(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],Ji),r=i(["7","6","5","4","3","2","1","0"],Ji),a=i(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],Vs),o=i(["A0","A1","A2","A3","A4","A5"],Hs),l=(y,S,x,E)=>{let M=new sr(new Rs({map:Xo(),color:x,blending:ri,depthWrite:!1,transparent:!0}));return M.scale.set(6,6,1),M.position.copy(be(y,S,Pt+1.1)),M.visible=!1,t.add(M),T=>{E(T),M.visible=T}},c=l(28.5,10.6,16754470,e.kanca.ledL),u=l(61.5,10.6,4448378,e.kanca.ledOn),d=(y,S,x,E,M,T)=>{let _=be(y,S,x);return[_.x,_.y,_.z,E,M,T]},h={kart:[je.x,7,je.z,je.w,14,je.d],usb:d(1.65,15.24,Pt+5.45,17,11.6,12.8),"guc-girisi":d(5.2,44.9,Pt+5.5,15,11.8,9.8),mikrodenetleyici:d(44.5,36.8,Pt+3,38.5,6.2,10.2),"dijital-pinler":d((s.x1+r.x2)/2,Sa,Pt+4.3,r.x2-s.x1+1.2,9.4,3.6),"analog-pinler":d((o.x1+o.x2)/2,hs,Pt+4.3,o.x2-o.x1+1.2,9.4,3.6),"guc-pinleri":d((a.x1+a.x2)/2,hs,Pt+4.3,a.x2-a.x1+1.2,9.4,3.6),reset:d(7.4,5.2,Pt+2.4,7,5,7)},f=[],g=(y,S)=>{let[x,E,M,T,_,A]=S,C=wa({parca:y.kesif,...y},T,_,A,x,E,M);f.push(C),n.push(C)};g({kesif:"kart",parca:"kart"},h.kart);for(let y of["usb","guc-girisi","mikrodenetleyici","dijital-pinler","analog-pinler","guc-pinleri","reset"])g({kesif:y},h[y]);g({kesif:"usb-cipi"},d(20,17.5,Pt+1.1,7,2.6,7)),g({kesif:"kristal"},d(21,27,Pt+1.9,11.5,4.2,5.4)),g({kesif:"regulator"},d(15,46.2,Pt+1.1,7.4,2.6,6.8));for(let[y,S]of[[13,31.5],[19.5,37.5]])g({kesif:"kondansator"},d(y,S,Pt+2.9,7.2,6.2,7.2));g({kesif:"icsp"},d(64.87,26.67,Pt+4.4,6.4,9.2,9)),g({kesif:"led-l"},d(27.6,10.6,Pt+.8,4.6,1.8,2.3)),g({kesif:"led-txrx"},d(27.3,14.35,Pt+.8,4.8,1.8,4.4)),g({kesif:"led-on"},d(62.9,10.6,Pt+.8,5.4,1.8,2.3));for(let[y,S]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])g({kesif:"montaj-deligi"},d(y,S,Pt+.3,4.4,1.6,4.4));let v=[];for(let[y,S]of[[Ji,Sa],[Vs,hs],[Hs,hs]])for(let[x,E]of Object.entries(y)){let M=AS(x);if(!M)continue;let T=ui+1.2-Pt;g({kesif:M,parca:"pin",pin:x,ozel:Qm(x),minAdim:Kn,minPx:12},d(E,S,Pt+T/2,2.5,T,2.6)),v.push({ad:x,kesif:M,ozel:Qm(x),nokta:be(E,S,ui+.6)})}let m=(y,S,x)=>be(y,S,x),p=[{id:"usb",nokta:m(1.65,15.24,Pt+12)},{id:"guc-girisi",nokta:m(5.2,44.9,Pt+12.2)},{id:"mikrodenetleyici",nokta:m(44.5,36.8,Pt+6.6)},{id:"usb-cipi",nokta:m(20,17.5,Pt+1.6)},{id:"kristal",nokta:m(21,27,Pt+4.3)},{id:"regulator",nokta:m(15,46.5,Pt+2.4)},{id:"kondansator",nokta:m(13,31.5,Pt+6.2)},{id:"reset",nokta:m(7.4,5.2,Pt+5.4)},{id:"icsp",nokta:m(64.87,26.67,Pt+9.4)},{id:"led-l",nokta:m(28.5,10.6,Pt+1)},{id:"led-txrx",nokta:m(28.5,14.35,Pt+1)},{id:"led-on",nokta:m(61.5,10.6,Pt+1)},{id:"dijital-pinler",nokta:m(46,10.6,Pt+.8)},{id:"analog-pinler",nokta:m(55.6,42,Pt+.8)},{id:"guc-pinleri",nokta:m(35.3,42,Pt+.8)},{id:"montaj-deligi",nokta:m(66.04,17.78,Pt+.8)}];return{grup:t,alanlar:h,ledL:c,ledOn:u,vekiller:f,pinler:v,kesifNoktalari:p}}function ES(){let t=Math.round(2048*xt.d/xt.w),e=2048/xt.w,[i,s]=Od(2048,t),r=o=>(o+xt.w/2)*e,a=o=>(o+xt.d/2)*e;s.fillStyle="#f4f2ec",s.fillRect(0,0,2048,t),s.fillStyle="#dcd8cf",s.fillRect(0,a(-1.5),2048,3*e),s.fillStyle="#cfcac0",s.fillRect(0,a(-.35),2048,.7*e);for(let o of[1,-1])s.fillStyle="#d23b3b",s.fillRect(r(-37),a(o*23.6)-.3*e,r(37)-r(-37),.6*e),s.fillStyle="#2f62c9",s.fillRect(r(-37),a(o*16.9)-.3*e,r(37)-r(-37),.6*e);s.font=`700 ${2.1*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";for(let o of[1,-1])for(let l of[-39.4,39.4])s.fillStyle="#d23b3b",s.fillText("+",r(l),a(o*Bn["yakin+"])),s.fillStyle="#2f62c9",s.fillText("\u2212",r(l),a(o*Bn["yakin-"]));s.fillStyle="#8a8478",s.font=`600 ${1.45*e}px "DejaVu Sans", Arial, sans-serif`;for(let[o,l]of Object.entries(fr))for(let c of[-39.3,39.3])s.fillText(o,r(c),a(l));for(let o of[1,5,10,15,20,25,30])for(let l of[1,-1])s.fillText(String(o),r(-36.83+(o-1)*Kn),a(l*15.45));return ig(i)}function rg(n){Yo();let t=new Fe;t.name="breadboard";let e=new pe({map:ES(),roughness:.78}),i=mn.bbYan.clone(),s=[i,i,e,i,i,i],r=new wt(new Fn(xt.w,xt.h,xt.d,3,1.1),s);r.position.set(xt.x,xt.h/2,xt.z),t.add(r);let a=[],o=M=>a.push(Nd(1.15,.04,1.15,M.x,Ve+.02,M.z));for(let M=1;M<=30;M++)for(let T of Object.keys(fr))o(mr(M,T));for(let M of Object.keys(Bn))for(let T of pr)o(new I(yn(T),0,xt.z+Bn[M]));t.add(tg(a,mn.bbDelik));let l=[];for(let M=1;M<=30;M++)for(let T of[1,-1])l.push(Nd(1.5,1.1,11.4,yn(M),Ve-2.3,xt.z+T*8.89));for(let M of Object.values(Bn))l.push(Nd(yn(30)-yn(2)+1.6,1.1,1.5,xt.x,Ve-2.3,xt.z+M));let c=tg(l,mn.serit);c.visible=!1,t.add(c),gr(t);let u=new he(1.7,.06,1.7),d=new Yn(u,mn.secim,25);d.count=0,d.frustumCulled=!1,t.add(d);let h=new we;function f(M){d.count=M.length,M.forEach((T,_)=>{h.makeTranslation(T.x,Ve+.06,T.z),d.setMatrixAt(_,h)}),d.instanceMatrix.needsUpdate=!0}function g(M){let T=M.x-xt.x,_=M.z-xt.z,A=Math.round((T+36.83)/Kn)+1,C=null,k=1.6;for(let[L,F]of Object.entries(fr)){let P=Math.hypot(T-(-36.83+(A-1)*Kn),_-F);A>=1&&A<=30&&P<k&&(k=P,C={tur:"sutun",sutun:A,satir:L})}for(let[L,F]of Object.entries(Bn))Math.abs(_-F)<1.3&&pr.some(P=>Math.abs(T-(-36.83+(P-1)*Kn))<1.3)&&(C={tur:"ray",ray:L});if(!C)return null;if(C.tur==="sutun"){let L="abcde".includes(C.satir)?"abcde":"fghij";return{...C,delikler:[...L].map(F=>mr(C.sutun,F)),ad:`${C.sutun}. s\xFCtun, ${L[0]}-${L[4]} sat\u0131rlar\u0131`}}return{...C,delikler:pr.map(L=>new I(yn(L),0,xt.z+Bn[C.ray])),ad:C.ray.endsWith("+")?"Art\u0131 (+) ray\u0131":"Eksi (\u2212) ray\u0131"}}let v={breadboard:[xt.x,xt.h/2,xt.z,xt.w,xt.h+1,xt.d],"bb-yakin-raylar":[xt.x,Ve,xt.z+20.32,76,1.4,5.6],"bb-satirlar":[xt.x,Ve,xt.z,77,1.4,31],"bb-kanal":[xt.x,Ve,xt.z,80,1.2,3.2]},m=[],p=(M,T,_,A,C,k,L)=>{let F=wa({parca:M.kesif,bb:!0,...M},T,_,A,C,k,L);m.push(F),n.push(F)},y=Ve-.1,S=.8;p({kesif:"breadboard"},xt.w,xt.h+1,xt.d,xt.x,xt.h/2,xt.z);for(let M=1;M<=30;M++)for(let[T,_]of[[1,"a-e"],[-1,"f-j"]])p({kesif:"serit",ozel:`${M}. s\xFCtun, ${_} sat\u0131rlar\u0131`,minAdim:Kn,minPx:12},2.5,S,12.7,yn(M),y,xt.z+T*8.89);for(let M of[1,-1]){let T=M>0?"karta yak\u0131n taraf":"uzak taraf";p({kesif:"arti-ray",ozel:T,minAdim:Kn,minPx:8},81.2,S,4.08,xt.x,y,xt.z+M*22.36),p({kesif:"eksi-ray",ozel:T,minAdim:Kn,minPx:8},81.2,S,4.02,xt.x,y,xt.z+M*18.31),p({kesif:"koordinat",ozel:"s\xFCtun numaralar\u0131",minAdim:1.06,minPx:6},76.2,S,1.06,xt.x,y,xt.z+M*15.77),p({kesif:"koordinat",ozel:"sat\u0131r harfleri",minAdim:Kn,minPx:8},2.4,S,30.5,xt.x+M*39.3,y,xt.z)}p({kesif:"orta-kanal"},76.2,S,5,xt.x,y,xt.z);let x=(M,T,_=Ve+1)=>new I(M,_,T),E=[{id:"breadboard",nokta:x(yn(6),xt.z-8.89)},{id:"serit",nokta:x(yn(20),xt.z-8.89),ozel:"20. s\xFCtun, f-j sat\u0131rlar\u0131"},{id:"orta-kanal",nokta:x(yn(27),xt.z,Ve+.6)},{id:"koordinat",nokta:x(xt.x-39.3,xt.z+8.89)},{id:"arti-ray",nokta:x(yn(28),xt.z+21.59),ozel:"karta yak\u0131n taraf"},{id:"eksi-ray",nokta:x(yn(4),xt.z+19.05),ozel:"karta yak\u0131n taraf"}];return{grup:t,alanlar:v,grupBul:g,grupGoster:f,vekiller:m,kesifNoktalari:E,rontgen(M){c.visible=M;for(let T of new Set(s))T.transparent=M,T.opacity=M?.3:1,T.depthWrite=!M,T.needsUpdate=!0;r.castShadow=!M}}}var Bd={kirmizi:15022389,sari:16498733,yesil:3126084};var kd={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"};function ag(n,t){Yo();let e=new Fe;e.name="direnc";let[i,s]=Od(8,256);s.fillStyle="#d8c69c",s.fillRect(0,0,8,256);let r=[.18,.33,.48,.8];n.forEach((h,f)=>{s.fillStyle=kd[h],s.fillRect(0,(1-r[f])*256-12,8,24)});let a=new $e(1.1,1.1,4.6,16);a.rotateZ(Math.PI/2);let o=new wt(a,new pe({map:ig(i),roughness:.55})),l=new pe({color:14206620,roughness:.55}),c=3.4;o.position.y=c,e.add(o);for(let h of[-1,1]){let f=new wt(new Wi(1.32,14,10),l);f.scale.set(.75,1,1),f.position.set(h*2.45,c,0),e.add(f);let g=new wt(new he(t/2-2.9,.5,.5),mn.metal);g.position.set(h*((t/2+2.9)/2),c,0);let v=new wt(new he(.5,c+7,.5),mn.metal);v.position.set(h*t/2,(c-7)/2,0),e.add(g,v)}gr(e);let u=wa({kesif:"direnc"},t+1.4,c+9,3.2,0,(c+1.8-7.2)/2,0),d=wa({kesif:"renk-bantlari"},3.6,2.8,2.8,0,c,0);return e.add(u,d),e.userData={tepe:new I(0,c+1.4,0),uclar:[new I(-t/2,0,0),new I(t/2,0,0)],H:c,vekiller:[u,d],kesifYerleri:()=>[["direnc",new I(t/2-1.2,c+2.6,0)],["renk-bantlari",new I(-.6,c+2.2,0)]]},e}function zd(n,t,e){n.position.set((t.x+e.x)/2,Ve,(t.z+e.z)/2),n.rotation.set(0,-Math.atan2(e.z-t.z,e.x-t.x),0)}function og(){Yo();let n=new Fe;n.name="buton";let t=new wt(new Fn(6,3.4,6,2,.45),mn.siyah);t.position.y=1.7;let e=new wt(new he(6.2,.3,6.2),mn.metal);e.position.y=3.55;let i=new wt(new $e(1.8,1.8,1.7,24),new pe({color:14172995,roughness:.42}));i.position.y=4.55,n.add(t,e,i);for(let r of[-2.54,2.54])for(let a of[-3.81,3.81]){let o=new wt(new he(.6,7,.35),mn.metal);o.position.set(r,-3.2,a),n.add(o)}gr(n);let s=wa({kesif:"buton"},7.6,12.9,8.4,0,-.45,0);return n.add(s),n.userData={bas(r){i.position.y=r?3.95:4.55},tepe:new I(0,5.6,0),vekiller:[s],kesifYerleri:()=>[["buton",new I(0,8.6,0)]]},n}var Gd={turuncu:16088064,siyah:2829104,kirmizi:13840175,sari:15909376,yesil:3054920,mavi:1994713,mor:8280002};function lg(n,t,e){Yo();let i=new Fe;i.name="kablo";let s=Gd[e]??e,r=(y,S)=>y.clone().add(new I(0,S,0)),a=r(n,6.2),o=r(t,6.2),l=a.distanceTo(o),c=new I((a.x+o.x)/2,Math.max(a.y,o.y)+7+l*.16,(a.z+o.z)/2),u=new aa([a,r(a,4),c,r(o,4),o],!1,"centripetal"),d=56,h=6,f=new wt(new Xi(u,d,.62,h,!1),new pe({color:s,roughness:.45}));i.add(f);let g=[];for(let y of[n,t]){let S=new wt(new Fn(2.5,6,2.5,2,.3),new pe({color:2763312,roughness:.5}));S.position.copy(y).add(new I(0,3.1,0));let x=new wt(new he(.6,6,.6),mn.metal);x.position.copy(y).add(new I(0,-2.9,0)),i.add(S,x),g.push(S,x)}gr(i);let v=new wt(new Xi(u,24,1.9,6,!1),mn.gorunmez);v.userData={kesif:"kablo",ince:!0,hacim:120},i.add(v);let m=[v];for(let y of[n,t]){let S=wa({kesif:"kablo"},3.4,6.6,3.4,y.x,y.y+3.1,y.z);i.add(S),m.push(S)}let p=f.geometry.index.count;return i.userData={egri:u,vekiller:m,kesifYerleri:()=>[["kablo",u.getPoint(.5)]],buyut(y){f.geometry.setDrawRange(0,Math.floor(y*d)*h*6),g[2].visible=g[3].visible=y>=1,y>=1&&f.geometry.setDrawRange(0,p)},yol:u.getSpacedPoints(40)},i}function cg(n){Fd=Math.max(1,Math.min(8,n))}var TS=[.1,.84,.54],yu={genel:{kutu:[-41.3,0,-65.3,41.3,15,58.7],yon:TS},kart:{kutu:[-40.7,0,5.3,34.3,15,58.7],yon:[.08,.86,.5]},usb:{kutu:[-41.2,3.5,13,-22,15.3,28],yon:[-.78,.48,.42]},"guc-girisi":{kutu:[-37,3.5,44,-20,15.5,57],yon:[-.7,.5,.52]},cip:{kutu:[-10,3.5,35.5,30.5,10.5,48.5],yon:[.05,.86,.5]},dijital:{kutu:[-15,3.6,4,33.8,13,15],yon:[.04,.72,.69]},analog:{kutu:[12.5,3.6,49,30.2,13,58.7],yon:[.08,.7,.71]},guc:{kutu:[-10.5,3.6,49,12.5,13,58.7],yon:[0,.62,.78]},bb:{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[.06,.86,.5]},"bb-ust":{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[0,.96,.27]},raylar:{kutu:[-41.3,0,-34,41.3,8.6,-10.7],yon:[.04,.8,.6]},devre:{kutu:[-14,0,-44,22,22,-14],yon:[.12,.8,.58]},"devre-genis":{kutu:[-41.3,0,-65.3,41.3,22,12],yon:[.07,.9,.43],kablolar:!0},"buton-yakin":{kutu:[5,0,-46,23,18,-16],yon:[.15,.72,.67]},trafik:{kutu:[-26,0,-44,26,22,-14],yon:[.05,.78,.62]}};var ug={kirmizi:15022389,sari:16498733,yesil:3126084},RS={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"},hg={220:["kirmizi","kirmizi","kahve","altin"],1e4:["kahve","siyah","turuncu","altin"]},ji=4.2,Vd=new An({visible:!1}),dg=null,fg=()=>mn.metal||(dg??=new pe({color:14014686,metalness:1,roughness:.28}));function Hd(n,t,e,i,s,r,a){let o=new wt(new he(t,e,i),Vd);return o.position.set(s,r,a),n.add(o),n.userData.hedef=o,o}var pg=(n,t)=>Math.hypot(t.x-n.x,t.z-n.z);function xu(n,t,e){let i=new Gt(ug[n]??ug.kirmizi),s=i.clone().lerp(new Gt(3813430),.45),r=new Fe;r.name="led";let a=[[0,0],[2.95,0],[2.95,1],[2.5,1],[2.5,5.6]];for(let f=1;f<=8;f++){let g=f/8*(Math.PI/2);a.push([2.5*Math.cos(g),5.6+2.5*Math.sin(g)])}let o=new pe({color:s,emissive:i,emissiveIntensity:0,roughness:.14,metalness:0}),l=new wt(new Ri(a.map(([f,g])=>new tt(f,g)),20),o);l.position.y=ji,r.add(l);let c=Math.max(1.27,pg(t,e)/2),u=1.3;for(let f of[-1,1]){let g=f*1.27,v=f*c,m=(p,y,S,x)=>{let E=new wt(new he(p,y,.5),fg());E.position.set(S,x,0),r.add(E)};if(v===g){m(.5,ji+5,g,ji-(ji+5)/2);continue}m(.5,ji-u,g,(ji+u)/2),m(Math.abs(v-g)+.5,.5,(g+v)/2,u),m(.5,u+5,v,(u-5)/2)}let d=new sr(new Rs({map:Xo(),color:i,blending:ri,depthWrite:!1,transparent:!0}));d.scale.set(20,20,1),d.position.y=ji+5.5,d.visible=!1,r.add(d);let h=new wt(new si(30,30),new An({map:Xo(),color:i,blending:ri,depthWrite:!1,transparent:!0,opacity:.6}));return h.rotation.x=-Math.PI/2,h.position.y=.12,h.visible=!1,r.add(h),gr(r),Hd(r,Math.max(7,c*2+1.5),12,7,0,ji+3.5,0),Object.assign(r.userData,{ac(f){let g=typeof f=="number"?f:f?1:0;r.userData.yanik=g>0,o.emissiveIntensity=1.05*g,o.color.copy(s).lerp(i,g),d.visible=h.visible=g>.02,d.material.opacity=Math.min(1,g*1.15),h.material.opacity=.6*g},renk:i,lambaY:ji+6,tepe:new I(0,ji+8.2,0),renkAdi:n,bacakYari:c}),zd(r,t,e),r}function Wd(n,t,e){let i=hg[n]||hg[220],s=pg(t,e),r=s>=7?ag(i,s):CS(i,s);r.userData.bantlar=i;let a=r.userData.H;return Hd(r,Math.max(7.5,s+2),a+3,4.5,0,a/2+.5,0),zd(r,t,e),r}function CS(n,t){let e=new Fe;e.name="direnc";let i=document.createElement("canvas");i.width=8,i.height=256;let s=i.getContext("2d");s.fillStyle="#d8c69c",s.fillRect(0,0,8,256),[.18,.33,.48,.8].forEach((f,g)=>{s.fillStyle=RS[n[g]],s.fillRect(0,(1-f)*256-12,8,24)});let r=new Hi(i);r.colorSpace=Ke;let a=-t/2,o=1.5,l=4.6,c=o+l+2.3,u=new wt(new $e(1.1,1.1,l,16),new pe({map:r,roughness:.55}));u.position.set(a,o+l/2,0),e.add(u);let d=new pe({color:14206620,roughness:.55});for(let f of[o,o+l]){let g=new wt(new Wi(1.32,14,10),d);g.scale.set(1,.75,1),g.position.set(a,f,0),e.add(g)}let h=(f,g,v,m)=>{let p=new wt(new he(f,g,.5),fg());p.position.set(v,m,0),e.add(p)};return h(.5,o+5,a,(o-5)/2),h(.5,c-o-l,a,(o+l+c)/2),h(t+.5,.5,0,c),h(.5,c+5,-a,(c-5)/2),gr(e),e.userData={tepe:new I(0,c+1.4,0),H:c,dik:!0,aralik:t},e}function Xd(n){let t=og();return t.position.copy(n),Hd(t,9,8,10,0,2.5,0),t}function Yd(n,t,e){let i=lg(n,t,e),s=new wt(new Xi(i.userData.egri,24,2.3,6,!1),Vd);return i.add(s),i.userData.hedef=s,i}function $o(n){let t=new Set(Object.values(mn)),e=Xo();n.traverse(i=>{i.geometry?.dispose();let s=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(let r of s)t.has(r)||r===Vd||r===dg||(r.map&&r.map!==e&&r.map.dispose(),r.dispose())})}var vu={kirmizi:"#e53935",sari:"#fbc02d",yesil:"#2fb344"},$d={turuncu:"#f57c00",kirmizi:"#d32f2f",siyah:"#2b2b30",sari:"#f2c200",yesil:"#2e9d48",mavi:"#1e6fd9",mor:"#7e57c2"},mg={220:["#d32f2f","#d32f2f","#7a4a24","#c9a33a"],1e4:["#7a4a24","#1d1d1d","#f57c00","#c9a33a"]},bu='<svg class="parca-ikon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">',qd='stroke="#8a8f99" stroke-width="1.6" stroke-linecap="round" fill="none"';function IS(n){let t=vu[n]||vu.kirmizi;return`${bu}<path d="M13 23v7M19 23v5" ${qd}/><path d="M10 15a6 6 0 0 1 12 0v6H10z" fill="${t}" stroke="#0006"/><rect x="8.5" y="20.5" width="15" height="2.8" rx="1" fill="${t}" stroke="#0006"/></svg>`}function kS(n){let t=mg[n]||mg[220];return`${bu}<path d="M1 16h6M25 16h6" ${qd}/><rect x="7" y="11" width="18" height="10" rx="4" fill="#d8c69c" stroke="#0005"/>${t.map((e,i)=>`<rect x="${[10,13.2,16.4,21][i]}" y="11" width="2" height="10" fill="${e}"/>`).join("")}</svg>`}var PS=()=>`${bu}<path d="M10 25v5M22 25v5M10 7V2M22 7V2" ${qd}/><rect x="6" y="7" width="20" height="18" rx="3" fill="#2b2b30"/><circle cx="16" cy="16" r="5" fill="#d84343"/></svg>`;function LS(n){let t=$d[n]||"var(--kablo,#f57c00)";return`${bu}<path d="M6 27C7 9 25 9 26 27" fill="none" style="stroke:${t}" stroke-width="3.2" stroke-linecap="round"/><rect x="3.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/><rect x="23.6" y="24" width="4.8" height="6" rx="1" fill="#2a2a30"/></svg>`}function gg(n){return n.tur==="led"?IS(n.renk):n.tur==="direnc"?kS(n.deger):n.tur==="buton"?PS():LS(n.renk)}var Au="abcde",DS="fghij",NS=["uzak+","uzak-","yakin-","yakin+"],qo=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30],tf={a:5.5,b:4.5,c:3.5,d:2.5,e:1.5,f:-1.5,g:-2.5,h:-3.5,i:-4.5,j:-5.5},ef={"yakin-":7.5,"yakin+":8.5,"uzak-":-7.5,"uzak+":-8.5},nf=["SCL","SDA","AREF","GND-D","13","12","11","10","9","8","7","6","5","4","3","2","1","0"],sf=["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],rf=["A0","A1","A2","A3","A4","A5"],Eu=[...nf,...sf,...rf],fs=[2,3,4,5,6,7,8,9,10,11,12,13],US=[1e3,500,200],Ea={kirmizi:{ad:"k\u0131rm\u0131z\u0131",esik:2},sari:{ad:"sar\u0131",esik:2.05},yesil:{ad:"ye\u015Fil",esik:2.1}},Tu={220:"220 \u03A9",1e4:"10 k\u03A9"},Ru={turuncu:"Turuncu",kirmizi:"K\u0131rm\u0131z\u0131",siyah:"Siyah",sari:"Sar\u0131",yesil:"Ye\u015Fil",mavi:"Mavi",mor:"Mor"},wg=[1,4],Ag=[2,6],OS=5,_g=2,FS=1e-9,Mu=1e-4,BS=.002,yg=.03,zS=.013,GS=3,VS=1.5,af={"GND-D":"GND",GND1:"GND",GND2:"GND","5V":"5V",IOREF:"5V","3.3V":"3V3",SDA:"A4",A4:"A4",SCL:"A5",A5:"A5"},HS=new Set(["GND-D","GND1","GND2","5V","3.3V","IOREF"]),of=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1);function nn(n){let[t,e,i,s]=String(n??"").split(":");if(s!==void 0)return null;if(t==="h"){let r=Number(e);if(Number.isInteger(r)&&r>=1&&r<=30&&typeof i=="string"&&i.length===1&&"abcdefghij".includes(i))return{tur:"delik",sutun:r,satir:i}}if(t==="r"){let r=Number(i);if(NS.includes(e)&&qo.includes(r))return{tur:"ray",ray:e,sutun:r}}return t==="p"&&i===void 0&&Eu.includes(e)?{tur:"pin",pin:e}:null}var Su=n=>{let t=nn(n);return!!(t&&t.tur!=="pin")};function xg(n){let t=nn(n);return!t||t.tur==="pin"?null:[t.sutun,t.tur==="delik"?tf[t.satir]:ef[t.ray]]}function Jd(n,t){let e=xg(n),i=xg(t);return e&&i?Math.hypot(e[0]-i[0],e[1]-i[1]):1/0}function zn(n){let t=nn(n);return t?t.tur==="delik"?`s:${t.sutun}:${Au.includes(t.satir)?"y":"u"}`:t.tur==="ray"?`r:${t.ray}`:`k:${af[t.pin]||t.pin}`:null}function Eg(n){let t=nn(n);if(!t)return[];if(t.tur==="delik")return[...Au.includes(t.satir)?Au:DS].map(i=>`h:${t.sutun}:${i}`);if(t.tur==="ray")return qo.map(i=>`r:${t.ray}:${i}`);let e=zn(n);return Eu.filter(i=>zn(`p:${i}`)===e).map(i=>`p:${i}`)}function Aa(n){return/^\d+$/.test(n)?n==="0"?"0. pin (RX)":n==="1"?"1. pin (TX)":`${n}. pin`:{"GND-D":"GND",GND1:"GND",GND2:"GND","3.3V":"3,3V",VIN:"Vin",NC:"bo\u015F pin (NC)"}[n]||n}function jd(n){return`${n.startsWith("yakin")?"alt":"\xFCst"} ${n.endsWith("+")?"+":"\u2212"} ray\u0131`}function qe(n,t=!1){let e=nn(n);return e?e.tur==="delik"?`${e.sutun}${e.satir}`:e.tur==="ray"?t?`${jd(e.ray)}, ${e.sutun}. s\xFCtun`:jd(e.ray):Aa(e.pin):""}function Ta(n){let t=nn(n);if(!t)return"";if(t.tur==="delik"){let i=Au.includes(t.satir)?"a-e":"f-j";return`${t.sutun}. s\xFCtun, ${i} sat\u0131rlar\u0131`}return t.tur==="ray"?of(jd(t.ray)):af[t.pin]==="GND"?"GND pinleri (kart i\xE7inde birbirine ba\u011Fl\u0131)":Aa(t.pin)}function _r(n){return n?n.tur==="led"?[n.anot,n.katot]:n.tur==="direnc"?[n.a,n.b]:n.tur==="kablo"?[n.bas,n.son]:n.tur==="buton"?[`h:${n.sutun}:e`,`h:${n.sutun+2}:e`,`h:${n.sutun}:f`,`h:${n.sutun+2}:f`]:[]:[]}function Qi(n){return n.tur==="led"?`${of(Ea[n.renk]?.ad||"")} LED (${qe(n.anot)})`:n.tur==="direnc"?`${Tu[n.deger]||""} diren\xE7 (${qe(n.a)})`:n.tur==="buton"?`Buton (${n.sutun}. ve ${n.sutun+2}. s\xFCtun)`:n.tur==="kablo"?`Kablo (${qe(n.bas)} \u2192 ${qe(n.son)})`:""}function Cu(n){return n.tur==="led"?`Anot (uzun bacak) ${qe(n.anot,!0)}, katot (k\u0131sa bacak) ${qe(n.katot,!0)}`:n.tur==="direnc"?`Bacaklar ${qe(n.a,!0)} ve ${qe(n.b,!0)}`:n.tur==="buton"?`Bacaklar ${n.sutun}e, ${n.sutun+2}e, ${n.sutun}f, ${n.sutun+2}f (kanal\u0131n \xFCst\xFCnde)`:n.tur==="kablo"?`${of(qe(n.bas,!0))} ile ${qe(n.son,!0)} aras\u0131nda`:""}function WS(n){return!n||typeof n!="object"||typeof n.id!="string"||!n.id?!1:n.tur==="led"?!!Ea[n.renk]&&Su(n.anot)&&Su(n.katot)&&n.anot!==n.katot:n.tur==="direnc"?!!Tu[n.deger]&&Su(n.a)&&Su(n.b)&&n.a!==n.b:n.tur==="buton"?Number.isInteger(n.sutun)&&n.sutun>=1&&n.sutun<=28:n.tur==="kablo"?!!Ru[n.renk]&&!!nn(n.bas)&&!!nn(n.son)&&n.bas!==n.son:!1}function lf(n){let t=(e,i)=>fs.includes(Number(e))?Number(e):i;if(n?.tur==="buton"){let e=t(n.giris,2),i=t(n.cikis,13);return i===e&&(i=e===13?12:13),{tur:"buton",giris:e,cikis:i}}if(n?.tur==="elle"){let e={};for(let i of fs)n.seviyeler?.[i]&&(e[i]=!0);return{tur:"elle",seviyeler:e}}return{tur:"blink",pin:t(n?.pin,13),bekleme:US.includes(Number(n?.bekleme))?Number(n.bekleme):1e3}}function Ra(n){let t=new Set,e=new Set,i=[];for(let s of Array.isArray(n?.parcalar)?n.parcalar:[]){if(!WS(s)||e.has(s.id))continue;let r=_r(s);if(r.some(o=>t.has(o))||s.tur==="led"&&!Qd(Jd(s.anot,s.katot),wg)||s.tur==="direnc"&&!Qd(Jd(s.a,s.b),Ag))continue;r.forEach(o=>t.add(o)),e.add(s.id);let a={id:s.id,tur:s.tur};for(let o of["renk","anot","katot","deger","a","b","sutun","bas","son"])s[o]!==void 0&&(a[o]=s[o]);i.push(a)}return{parcalar:i,program:lf(n?.program)}}var Qd=(n,[t,e])=>n>=t-.01&&n<=e+.01;function Iu(n,t=null){let e=new Map;for(let i of n)if(i.id!==t)for(let s of _r(i))e.set(s,i.id);return e}function XS(n){let t=nn(n);return!t||t.tur!=="delik"||!"ef".includes(t.satir)?null:t.sutun+2<=30?t.sutun:t.sutun-2}function Zo(n,t,e,i,s=null){let r=nn(i);if(!r)return{gecerli:!1,neden:"Burada delik yok"};let a=Iu(n,s),o={led:"LED",direnc:"Diren\xE7",buton:"Buton"}[t];if(t!=="kablo"&&r.tur==="pin")return{gecerli:!1,neden:`${o} breadboard'a tak\u0131l\u0131r: bir delik se\xE7`};if(t==="buton"){let h=XS(i);return h==null?{gecerli:!1,neden:"Butonu kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131na koy"}:_r({tur:"buton",sutun:h}).some(g=>a.has(g))?{gecerli:!1,neden:"Butonun bacaklar\u0131 dolu deliklere geliyor"}:{gecerli:!0,sutun:h}}if(a.has(i))return{gecerli:!1,neden:r.tur==="pin"?"Bu pinde zaten kablo var":"Bu delik dolu"};if(!e)return{gecerli:!0};if(e===i)return{gecerli:!1,neden:"\u0130ki u\xE7 ayn\u0131 yere tak\u0131lamaz"};if(t==="kablo")return{gecerli:!0};let l=Jd(e,i),c=t==="led"?wg:Ag,u=Math.round(l*10)/10,d=String(u).replace(".",",");return Qd(l,c)?{gecerli:!0,mesafe:l}:{gecerli:!1,mesafe:l,neden:`${d} ad\u0131m: ${o} bacaklar\u0131 en az ${c[0]}, en \xE7ok ${c[1]} ad\u0131m arayla tak\u0131l\u0131r`}}var cf={"ders-2":{ad:"Ders 2: LED Yakal\u0131m",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"blink",pin:13,bekleme:1e3}},"ders-3":{ad:"Ders 3: Butonla LED",parcalar:[{id:"led1",tur:"led",renk:"kirmizi",anot:"h:15:e",katot:"h:16:e"},{id:"r1",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"k13",tur:"kablo",renk:"turuncu",bas:"p:13",son:"h:15:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"},{id:"buton",tur:"buton",sutun:20},{id:"r2",tur:"direnc",deger:1e4,a:"h:22:c",b:"r:yakin-:22"},{id:"k5v",tur:"kablo",renk:"kirmizi",bas:"p:5V",son:"r:yakin+:24"},{id:"kplus",tur:"kablo",renk:"kirmizi",bas:"r:yakin+:20",son:"h:20:a"},{id:"k2",tur:"kablo",renk:"sari",bas:"p:2",son:"h:22:d"}],program:{tur:"buton",giris:2,cikis:13}},"ders-4":{ad:"Ders 4: Trafik I\u015F\u0131\u011F\u0131",parcalar:[{id:"ledK",tur:"led",renk:"kirmizi",anot:"h:8:e",katot:"h:9:e"},{id:"ledS",tur:"led",renk:"sari",anot:"h:15:e",katot:"h:16:e"},{id:"ledY",tur:"led",renk:"yesil",anot:"h:22:e",katot:"h:23:e"},{id:"rK",tur:"direnc",deger:220,a:"h:9:c",b:"r:yakin-:9"},{id:"rS",tur:"direnc",deger:220,a:"h:16:c",b:"r:yakin-:16"},{id:"rY",tur:"direnc",deger:220,a:"h:23:c",b:"r:yakin-:23"},{id:"kK",tur:"kablo",renk:"kirmizi",bas:"p:10",son:"h:8:a"},{id:"kS",tur:"kablo",renk:"sari",bas:"p:9",son:"h:15:a"},{id:"kY",tur:"kablo",renk:"yesil",bas:"p:8",son:"h:22:a"},{id:"kgnd",tur:"kablo",renk:"siyah",bas:"p:GND-D",son:"r:yakin-:14"}],program:{tur:"elle",seviyeler:{10:!0}}}};function Zd(n,t){let e=new Map,i=r=>{if(!e.has(r))return e.set(r,r),r;let a=r;for(;e.get(a)!==a;)a=e.get(a);let o=r;for(;e.get(o)!==a;){let l=e.get(o);e.set(o,a),o=l}return a},s=(r,a)=>{let o=i(r),l=i(a);o!==l&&e.set(o,l)};for(let r of n){let a=_r(r).map(zn);a.forEach(i),r.tur==="kablo"&&s(a[0],a[1]),r.tur==="buton"&&(s(a[0],a[2]),s(a[1],a[3]),(t===!0||t?.has?.(r.id))&&s(a[0],a[1]))}return{bul:i}}var ds=n=>`k:${af[n]||n}`;function vg(n,t){let e=new Map,i=(s,r)=>{let a=n.bul(s);e.has(a)||e.set(a,[]),e.get(a).push(r)};i("k:GND","GND"),i("k:5V","5V"),i("k:3V3","3V3");for(let s of t)i(ds(String(s)),String(s));return[...e.entries()].filter(([,s])=>s.length>1).map(([s,r])=>({kok:s,suruculer:r}))}function wu(n,t,e){let i=new Map([[t.bul("k:GND"),0],[t.bul("k:5V"),5],[t.bul("k:3V3"),3.3]]),s=[],r=[],a=[];for(let y of n){if(y.tur==="direnc"){let S=t.bul(zn(y.a)),x=t.bul(zn(y.b));S!==x&&s.push({a:S,b:x,G:1/y.deger})}if(y.tur==="led"){let S=t.bul(zn(y.anot)),x=t.bul(zn(y.katot));S!==x&&r.push({id:y.id,a:S,k:x,vf:Ea[y.renk].esik})}}for(let[y,S]of Object.entries(e)){let x=t.bul(ds(y)),E=`v:${y}`;i.set(E,S),a.push({a:x,b:E,G:1/OS})}let o=new Map,l=y=>{!i.has(y)&&!o.has(y)&&o.set(y,o.size)};for(let y of[...s,...r.map(S=>({a:S.a,b:S.k})),...a])l(y.a),l(y.b);let c=o.size,u=new Map(r.map(y=>[y.id,!1])),d=new Float64Array(c),h=y=>i.has(y)?i.get(y):o.has(y)?d[o.get(y)]:0;for(let y=0;y<40;y++){let S=Array.from({length:c},()=>new Float64Array(c)),x=new Float64Array(c);for(let T=0;T<c;T++)S[T][T]=FS;let E=(T,_,A,C)=>{let k=o.get(T),L=o.get(_);k!==void 0&&(S[k][k]+=A,x[k]+=A*C,L!==void 0?S[k][L]-=A:x[k]+=A*i.get(_)),L!==void 0&&(S[L][L]+=A,x[L]-=A*C,k!==void 0?S[L][k]-=A:x[L]+=A*i.get(T))};for(let T of s)E(T.a,T.b,T.G,0);for(let T of a)E(T.a,T.b,T.G,0);for(let T of r)u.get(T.id)&&E(T.a,T.k,1/_g,T.vf);d=YS(S,x);let M=!1;for(let T of r){let _=h(T.a)-h(T.k);!u.get(T.id)&&_>T.vf+1e-9?(u.set(T.id,!0),M=!0):u.get(T.id)&&_<T.vf-1e-9&&(u.set(T.id,!1),M=!0)}if(!M)break}let f=new Map(r.map(y=>[y.id,u.get(y.id)?Math.max(0,(h(y.a)-h(y.k)-y.vf)/_g):0])),g=new Map,v=(y,S)=>{g.has(y)||g.set(y,[]),g.get(y).push(S)};for(let y of[...s,...a])v(y.a,y.b),v(y.b,y.a);let m=new Set(i.keys()),p=[...m];for(;p.length;)for(let y of g.get(p.shift())||[])m.has(y)||(m.add(y),p.push(y));return{V:h,akim:f,tanimli:m,ledler:r,direncler:s}}function YS(n,t){let e=t.length;for(let s=0;s<e;s++){let r=s;for(let o=s+1;o<e;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);r!==s&&([n[r],n[s]]=[n[s],n[r]],[t[r],t[s]]=[t[s],t[r]]);let a=n[s][s]||1e-30;for(let o=s+1;o<e;o++){let l=n[o][s]/a;if(l){for(let c=s;c<e;c++)n[o][c]-=l*n[s][c];t[o]-=l*t[s]}}}let i=new Float64Array(e);for(let s=e-1;s>=0;s--){let r=t[s];for(let a=s+1;a<e;a++)r-=n[s][a]*i[a];i[s]=r/(n[s][s]||1e-30)}return i}function Kd(n,t){if(!n.tanimli.has(t))return{deger:"KARARSIZ",bosta:!0,gerilim:null};let e=n.V(t);return{deger:e>=GS?"HIGH":e<=VS?"LOW":"KARARSIZ",bosta:!1,gerilim:e}}function bg(n,t,e){let i=new Map,s=(o,l)=>{i.has(o)||i.set(o,[]),i.get(o).push(l)};for(let o of n.direncler)s(o.a,o.b),s(o.b,o.a);for(let o of n.ledler)o.id!==e&&(s(o.a,o.k),s(o.k,o.a));let r=new Set([t]),a=[t];for(;a.length;)for(let o of i.get(a.shift())||[])r.has(o)||(r.add(o),a.push(o));return r}function yr(n){let t=new Set;for(let e of n)if(e.tur==="kablo")for(let i of[e.bas,e.son]){let s=nn(i);s?.tur==="pin"&&t.add(s.pin)}return t}function $S(n,t){if(n.tur==="blink")return{cikislar:[String(n.pin)],giris:null};if(n.tur==="buton")return{cikislar:[String(n.cikis)],giris:String(n.giris)};let e=yr(t);return{cikislar:fs.map(String).filter(i=>e.has(i)||n.seviyeler[i]),giris:null}}var Mg={hata:0,uyari:1,bilgi:2};function Tg(n,t={}){let{parcalar:e,program:i}=Ra(n),s=t.calisiyor!==!1,r=new Set(t.basili||[]),{cikislar:a,giris:o}=$S(i,e),l=e.filter(B=>B.tur==="led"),c=e.filter(B=>B.tur==="buton"),u=[],d=(B,dt,ht,Zt={})=>u.push({tur:B,seviye:dt,metin:ht,parcalar:[],...Zt}),h=Zd(e,r),f=Zd(e,!0),g=Zd(e,null),v=vg(h,a),m=vg(f,a),p=(B,dt,ht=!1)=>e.filter(Zt=>Zt.tur==="kablo"&&!ht||Zt.tur==="buton").filter(Zt=>_r(Zt).some(ee=>B.bul(zn(ee))===dt)).map(Zt=>Zt.id);for(let B of v)d("kisa-devre","hata",`${Sg(B.suruculer)} K\u0131sa devre giderilene kadar devre \xE7al\u0131\u015Fmaz.`,{parcalar:p(h,B.kok)});let y=new Set(v.map(B=>B.suruculer.slice().sort().join("+")));for(let B of m)y.has(B.suruculer.slice().sort().join("+"))||d("kisa-devre","hata",`Butona bas\u0131l\u0131nca k\u0131sa devre olur. ${Sg(B.suruculer)}`,{parcalar:p(f,B.kok,!0)});let S=B=>e.filter(dt=>dt.tur==="kablo"&&(dt.bas===`p:${B}`||dt.son===`p:${B}`)).map(dt=>dt.id),x=h.bul("k:RESET")===h.bul("k:GND");x&&d("reset","hata","RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fmaz. Kabloyu RESET pininden \xE7\u0131kar.",{parcalar:S("RESET")});let E=yr(e),M=new Set([...a,...o?[o]:[]]);i.tur==="elle"&&fs.forEach(B=>M.add(String(B)));let T=new Set;for(let B of E){if(HS.has(B)||M.has(B)||B==="RESET")continue;T.add(B);let dt=i.tur==="blink"&&fs.includes(Number(B))?{tur:"blink-pin",pin:Number(B),metin:`Programda ${B}. pini se\xE7`}:null;d("pin-kullanilmiyor","uyari",qS(B,i),{parcalar:S(B),pin:B,eylem:dt})}let _={},A=null,C=s&&!v.length&&!x,k=null;if(C){if(i.tur==="blink"&&(_[i.pin]=t.faz===!1?0:5),i.tur==="elle")for(let B of a)_[B]=i.seviyeler[B]?5:0;if(i.tur==="buton"){let B=wu(e,h,{[i.cikis]:0});A=Kd(B,h.bul(ds(o)));let dt=A.deger==="HIGH"||A.deger==="KARARSIZ"&&!!t.kararsiz;_[i.cikis]=dt?5:0}k=wu(e,h,_)}let L=m.length?null:wu(e,f,Object.fromEntries(a.map(B=>[B,5]))),F=m.length?null:wu(e,g,Object.fromEntries(a.map(B=>[B,0]))),P={},N=[],H=0;for(let B of l){let dt=Qi(B),ht=k?.akim.get(B.id)??0,Zt=L?.akim.get(B.id)??0,ee=F?.akim.get(B.id)??0,ne=Math.max(ht,Zt,ee)>yg,Q=k?ht>Mu&&ht<=yg:!1;if(P[B.id]={yanik:Q,parlaklik:Q?Math.max(.12,Math.min(1,Math.sqrt(ht/zS))):0,akim:ht*1e3,enCok:Math.max(Zt,ee,ht)*1e3},!L)continue;if(f.bul(zn(B.anot))===f.bul(zn(B.katot))){d("tamamlanmamis","uyari",`${dt}: iki bacak ayn\u0131 ba\u011Flant\u0131 grubunda (${Ta(B.anot)}). Elektrik LED'e u\u011Framadan ge\xE7er; bacaklar\u0131 farkl\u0131 s\xFCtunlara tak.`,{parcalar:[B.id]});continue}if(ne){d("direncsiz","hata",`${dt}: diren\xE7 yok. Ger\xE7ek devrede a\u015F\u0131r\u0131 ak\u0131m LED'i ya da pini bozar; sim\xFClasyon bu LED'i yakm\u0131yor. LED ile GND aras\u0131na 220 \u03A9 diren\xE7 ekle.`,{parcalar:[B.id]});continue}let gt=Zt>Mu,Wt=ee>Mu,At=ht>Mu;if(gt||Wt||At){H++,gt!==Wt&&N.push(B.id),gt&&Wt&&a.length&&d("sabit","bilgi",`${dt} programdan ba\u011F\u0131ms\u0131z, hep yan\u0131yor: anot taraf\u0131 do\u011Frudan 5V'a ba\u011Fl\u0131. Programla yan\u0131p s\xF6nmesi i\xE7in anot taraf\u0131n\u0131 bir \xE7\u0131k\u0131\u015F pinine ba\u011Fla.`,{parcalar:[B.id]});let ft=Math.max(Zt,ee,ht);ft<BS&&d("sonuk","bilgi",`${dt} \xE7ok s\xF6n\xFCk yan\u0131yor: b\xFCy\xFCk diren\xE7 ak\u0131m\u0131 \xE7ok azalt\u0131yor. LED i\xE7in 220 \u03A9 diren\xE7 kullan.`,{parcalar:[B.id],akim:ft*1e3});continue}let Xt=f.bul(zn(B.anot)),ye=f.bul(zn(B.katot));if([[L,f],[F,g]].some(([ft,D])=>{let le=D.bul(zn(B.anot)),jt=D.bul(zn(B.katot));return ft.tanimli.has(le)&&ft.tanimli.has(jt)&&ft.V(jt)-ft.V(le)>Ea[B.renk].esik-.05})){d("led-ters","uyari",`${dt} ters tak\u0131l\u0131: uzun bacak (anot) art\u0131 tarafa, k\u0131sa bacak (katot) GND taraf\u0131na gelmeli. LED'e dokunup Ters \xE7evir'i se\xE7.`,{parcalar:[B.id]});continue}let j=bg(L,Xt,B.id),q=bg(L,ye,B.id);if([...T].some(ft=>j.has(f.bul(ds(ft)))||q.has(f.bul(ds(ft)))))continue;let st=[f.bul("k:5V"),f.bul("k:3V3"),...a.map(ft=>f.bul(ds(ft)))],lt=[f.bul("k:GND"),...a.map(ft=>f.bul(ds(ft)))],_t=st.some(ft=>j.has(ft)),Lt=lt.some(ft=>q.has(ft)),Bt;!_t&&!Lt?Bt=`${dt} devreye ba\u011Fl\u0131 de\u011Fil: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a, katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fmal\u0131.`:_t?Lt?Bt=`${dt} yanacak kadar elektrik alm\u0131yor: devrenin yolunu kontrol et.`:Bt=`${dt}: katot (k\u0131sa bacak) taraf\u0131 GND'ye ula\u015Fm\u0131yor. Direnci ya da kabloyu GND'ye giden eksi raya ba\u011Fla.`:Bt=`${dt}: anot (uzun bacak) taraf\u0131 bir \xE7\u0131k\u0131\u015F pinine ya da 5V'a ula\u015Fm\u0131yor.`,d("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${Bt}`,{parcalar:[B.id]})}l.length||d("tamamlanmamis","bilgi","Devrede LED yok: panelden bir LED se\xE7ip breadboard'a yerle\u015Ftir.");let Y=null,ot=null;if(i.tur==="buton"&&L&&F){let B=g.bul(ds(o)),dt=f.bul(ds(o));Y=Kd(F,B),ot=Kd(L,dt);let ht=`${o}. pin`,Zt=`${o}. pine`,ee=c.map(ne=>ne.id);c.length?E.has(o)?Y.bosta&&ot.bosta?d("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca da ${ht} hi\xE7bir yere ba\u011Flanm\u0131yor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${Zt} ba\u011Flanmal\u0131.`,{pin:o,parcalar:ee}):Y.bosta?d("cekme-yok","uyari",`${ht} bo\u015Fta kal\u0131yor: butona bas\u0131lmad\u0131\u011F\u0131nda pin ne HIGH ne LOW okur, LED kendi kendine yan\u0131p s\xF6ner. ${ht} ile GND aras\u0131na 10 k\u03A9 \xE7ekme direnci ekle.`,{pin:o,parcalar:ee}):(ot.bosta||ot.deger===Y.deger)&&d("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. Butona bas\u0131nca ${ht} de\u011Fi\u015Fmiyor: butonun bir baca\u011F\u0131 5V'a, kar\u015F\u0131 baca\u011F\u0131 ${Zt} ba\u011Flanmal\u0131.`,{pin:o,parcalar:ee}):d("tamamlanmamis","uyari",`Devre tamamlanmam\u0131\u015F. ${ht} (giri\u015F) devreye ba\u011Fl\u0131 de\u011Fil: butonun baca\u011F\u0131ndan ${Zt} kablo \xE7ek.`,{pin:o}):d("tamamlanmamis","uyari","Devre tamamlanmam\u0131\u015F. Devrede buton yok: panelden butonu se\xE7ip kanal\u0131n \xFCst\xFCne yerle\u015Ftir.")}u.sort((B,dt)=>Mg[B.seviye]-Mg[dt.seviye]);let K=u.some(B=>B.seviye!=="bilgi"),nt=null;return!K&&N.length&&(i.tur==="blink"&&(nt=`Devre do\u011Fru: ${i.pin}. pin LED'i yak\u0131p s\xF6nd\xFCr\xFCyor.`),i.tur==="elle"&&(nt="Devre do\u011Fru: HIGH yapt\u0131\u011F\u0131n pinlerdeki LED'ler yan\u0131yor."),i.tur==="buton"&&Y&&ot&&Y.deger!==ot.deger&&(nt=Y.deger==="LOW"?"Devre do\u011Fru: butona bas\u0131nca LED yan\u0131yor, b\u0131rak\u0131nca s\xF6n\xFCyor.":"Devre do\u011Fru: \xE7ekme direnci 5V'a ba\u011Fl\u0131; buton b\u0131rak\u0131l\u0131nca LED yan\u0131yor, bas\u0131nca s\xF6n\xFCyor.")),{calisiyor:C,durdu:s?v.length?"kisa-devre":x?"reset":null:"kapali",ledler:P,cikislar:Object.fromEntries(Object.entries(_).map(([B,dt])=>[B,dt>0?"HIGH":"LOW"])),giris:i.tur==="buton"?{pin:Number(o),...A||{deger:"LOW",bosta:!1,gerilim:0},basiliOkur:ot?.deger??null,birakikOkur:Y?.deger??null}:null,l13:C&&_[13]===5,uyarilar:u,tamam:nt,program:i}}function Sg(n){let t=i=>n.includes(i),e=n.filter(i=>!["GND","5V","3V3"].includes(i));return t("5V")&&t("GND")?"5V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor. Ger\xE7ek kartta koruma sigortas\u0131 devreyi keser ve kart kapan\u0131r.":t("3V3")&&t("GND")?"3,3V do\u011Frudan GND'ye ba\u011Fl\u0131: elektrik hi\xE7bir par\xE7aya u\u011Framadan geri d\xF6n\xFCyor.":t("5V")&&t("3V3")?"5V ile 3,3V do\u011Frudan birbirine ba\u011Fl\u0131: iki farkl\u0131 gerilim \xE7ak\u0131\u015F\u0131yor.":e.length>=2?`${e[0]}. ve ${e[1]}. pin do\u011Frudan birbirine ba\u011Fl\u0131: biri HIGH, \xF6teki LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:t("GND")?`${e[0]}. pin do\u011Frudan GND'ye ba\u011Fl\u0131: pin HIGH olunca elektrik hi\xE7bir par\xE7aya u\u011Framadan akar ve pin bozulabilir.`:t("5V")?`${e[0]}. pin do\u011Frudan 5V'a ba\u011Fl\u0131: pin LOW olunca k\u0131sa devre olur ve pin bozulabilir.`:`${e[0]}. pin do\u011Frudan 3,3V'a ba\u011Fl\u0131: pin HIGH ya da LOW olunca k\u0131sa devre olur.`}function qS(n,t){if(n==="VIN")return"Vin pini, kart USB ile \xE7al\u0131\u015F\u0131rken g\xFC\xE7 vermez. G\xFC\xE7 i\xE7in 5V pinini kullan.";if(n==="NC")return"Bu pin kartta hi\xE7bir yere ba\u011Fl\u0131 de\u011Fil (NC). Kabloyu ba\u015Fka bir pine ta\u015F\u0131.";if(n==="0"||n==="1")return`${Aa(n)} bilgisayarla haberle\u015Fmede kullan\u0131l\u0131r; bu programda kullan\u0131lm\u0131yor. 2-13 aras\u0131ndan bir pin se\xE7.`;if(/^\d+$/.test(n)){if(t.tur==="blink")return`${n}. pine kablo ba\u011Fl\u0131 ama program ${t.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor. Kabloyu ${t.pin}. pine ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden ${n}. pini se\xE7.`;if(t.tur==="buton")return`${n}. pin programda kullan\u0131lm\u0131yor: giri\u015F ${t.giris}. pin, \xE7\u0131k\u0131\u015F ${t.cikis}. pin. Kabloyu ta\u015F\u0131 ya da Program b\xF6l\xFCm\xFCnden pini de\u011Fi\u015Ftir.`}return`${Aa(n)} pini bu programda kullan\u0131lm\u0131yor. Kabloyu 2-13 aras\u0131ndaki bir pine ta\u015F\u0131.`}var Rg={1e3:["1000 milisaniye, yani 1 saniye bekle.","1 saniye daha bekle."],500:["500 milisaniye, yani yar\u0131m saniye bekle.","Yar\u0131m saniye daha bekle."],200:["200 milisaniye, yani 0,2 saniye bekle.","0,2 saniye daha bekle."]};function Cg(n,t=[]){let e=[],i=(r,a="")=>(e.push({k:r,t:a}),e.length),s={yuksek:[],dusuk:[]};if(n.tur==="buton"){let r=n.giris,a=n.cikis;i(`const int buton = ${r};`,`Butonun ba\u011Fl\u0131 oldu\u011Fu pine ad verelim: buton = ${r} (const, bu de\u011Fer de\u011Fi\u015Fmez demek).`),i(`const int led = ${a};`,`LED'in ba\u011Fl\u0131 oldu\u011Fu pine de ad verelim: led = ${a}.`),i(""),i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r."),i("pinMode(buton, INPUT);",`Buton pinini (${r}) giri\u015F yap: bu pin bilgi okuyacak.`),i("pinMode(led, OUTPUT);",`LED pinini (${a}) \xE7\u0131k\u0131\u015F yap: bu pin elektrik verecek.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: durmadan d\xF6ner.");let o=i("if (digitalRead(buton) == HIGH) {","E\u011Fer buton pini HIGH okunuyorsa, yani butona bas\u0131l\u0131ysa:"),l=i("digitalWrite(led, HIGH);","LED'i yak."),c=i("} else {","De\u011Filse, yani butona bas\u0131l\u0131 de\u011Filse:"),u=i("digitalWrite(led, LOW);","LED'i s\xF6nd\xFCr.");i("}","Karar b\xF6l\xFCm\xFC bitti."),i("}","Tekrar b\xF6l\xFCm\xFC bitti; ba\u015Fa d\xF6n ve butonu yeniden oku."),s.yuksek=[o,l],s.dusuk=[o,c,u]}else if(n.tur==="elle"){let r=yr(t),a=fs.filter(o=>r.has(String(o))||n.seviyeler?.[o]).reverse();i("void setup() {",a.length?"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: kart a\xE7\u0131l\u0131nca bir kez \xE7al\u0131\u015F\u0131r.":"Haz\u0131rl\u0131k b\xF6l\xFCm\xFC: hen\xFCz kablo tak\u0131l\u0131 ya da HIGH yap\u0131lm\u0131\u015F pin yok.");for(let o of a){i(`pinMode(${o}, OUTPUT);`,`${o} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap.`);let l=n.seviyeler?.[o],c=i(`digitalWrite(${o}, ${l?"HIGH":"LOW"});`,l?`${o}. pine elektrik ver (5 volt).`:`${o}. pinin elektri\u011Fini kes (0 volt).`);s.yuksek.push(c),s.dusuk.push(c)}i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC: burada komut yok, pinler haz\u0131rl\u0131kta ayarland\u0131\u011F\u0131 gibi kal\u0131r."),i("}","Tekrar b\xF6l\xFCm\xFC bitti.")}else{let r=n.pin,[a,o]=Rg[n.bekleme]||Rg[1e3];i("void setup() {","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar kart a\xE7\u0131l\u0131nca yaln\u0131z bir kez \xE7al\u0131\u015F\u0131r."),i(`pinMode(${r}, OUTPUT);`,`${r} numaral\u0131 pini \xE7\u0131k\u0131\u015F yap: bu pin art\u0131k elektrik verebilir.`),i("}","Haz\u0131rl\u0131k b\xF6l\xFCm\xFC bitti."),i(""),i("void loop() {","Tekrar b\xF6l\xFCm\xFC ba\u015Fl\u0131yor. Buradaki komutlar s\u0131rayla \xE7al\u0131\u015F\u0131r, bitince en ba\u015Fa d\xF6ner."),s.yuksek.push(i(`digitalWrite(${r}, HIGH);`,`${r}. pine elektrik ver (5 volt): LED yanar.`)),s.yuksek.push(i(`delay(${n.bekleme});`,a)),s.dusuk.push(i(`digitalWrite(${r}, LOW);`,`${r}. pinin elektri\u011Fini kes (0 volt): LED s\xF6ner.`)),s.dusuk.push(i(`delay(${n.bekleme});`,o)),i("}","Tekrar b\xF6l\xFCm\xFC bitti; en ba\u015Fa d\xF6n ve yeniden ba\u015Fla.")}return{satirlar:e,vurgu:s}}function Ig(n){let t=0;return n.map(({k:e})=>{let i=e.trim();i.startsWith("}")&&(t=Math.max(0,t-1));let s="  ".repeat(t)+i;return i.endsWith("{")&&t++,s})}var kg="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";function Pg(n){if(!n)return;let t=()=>{n.classList.toggle("ayar-acik",!!n.querySelector(".ayarlar:not([hidden])")),n.classList.toggle("erisim-acik",!!n.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(n,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function Lg(n){if(!(!n||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;n.classList.toggle("dar-640",e<=640),n.classList.toggle("dar-380",e<=380)}).observe(n)}}function Dg(n,t){if(!n)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){n.hidden=!0;return}n.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}var uf=document.documentElement,df="bote-3d-gorunum",Ng=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},ZS=n=>{try{return localStorage.getItem(n)}catch{return null}},hf=n=>{let t=document.querySelector("#duyuru");t&&(t.textContent=n)},Ug=["sanal","fiziksel"];function Og(){let n=new URLSearchParams(location.search).get("gorunum");return Ug.includes(n)?n:ZS(df)==="fiziksel"?"fiziksel":"sanal"}var KS=[".gorunum-gecis{display:inline-flex;flex:none;align-items:stretch;border:1px solid var(--line);border-radius:12px;background:var(--surface);overflow:hidden}",".gorunum-gecis button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:var(--btn);min-width:var(--btn);padding:0 13px;border:0;border-radius:0;background:transparent;color:var(--muted);font-weight:700;white-space:nowrap;cursor:pointer;touch-action:manipulation;user-select:none}",".gorunum-gecis button+button{border-left:1px solid var(--line)}",".gorunum-gecis button[aria-pressed=true]{background:var(--violet-soft);color:var(--violet);box-shadow:inset 0 -3px 0 var(--violet)}",".gorunum-gecis button[aria-busy=true]{cursor:progress}",".gorunum-gecis button:focus-visible{outline-offset:-4px}","@media (hover:hover) and (pointer:fine){.gorunum-gecis button:not([aria-pressed=true]):hover{background:var(--raised);color:var(--ink)}}","@media (max-width:900px){.gorunum-gecis .gg-yazi{display:none}.gorunum-gecis button{padding:0}}",":root[data-mod=tahta] .gorunum-gecis button[aria-pressed=false]{display:none}",":root[data-mod=tahta] .gorunum-gecis button{border-left:0}",".gorunum-gecis .gg-degis{display:none;width:.95em;height:.95em;opacity:.7}",":root[data-mod=tahta] .gorunum-gecis .gg-degis{display:inline-block}",":root[data-mod=tahta] .gorunum-gecis.gg-mesgul button{cursor:progress;opacity:.75}"].join(`
`),Fg='<svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">',JS={sanal:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',fiziksel:'<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'},jS=Fg.replace('class="ico"','class="ico gg-degis"')+'<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>';function Bg(n){let t="sanal",e="sanal",i=document.createElement("style");i.textContent=KS,document.head.appendChild(i);let s=document.createElement("div");s.className="gorunum-gecis",s.setAttribute("role","group"),s.setAttribute("aria-label","G\xF6r\xFCn\xFCm");for(let[c,u,d]of[["sanal","Sanal","Sanal g\xF6r\xFCn\xFCm: sade 3D \xE7izim"],["fiziksel","Fiziksel","Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi"]]){let h=document.createElement("button");h.type="button",h.dataset.gorunumSec=c,h.title=d,h.setAttribute("aria-label",`${u} g\xF6r\xFCn\xFCm`),h.setAttribute("aria-pressed",String(c==="sanal")),h.innerHTML=`${Fg}${JS[c]}</svg><span class="gg-yazi">${u}</span>${jS}`,s.append(h)}let r=document.querySelector("#gorunum-yuva");r?r.append(s):document.querySelector(".ust-sag")?.prepend(s);let a=[...s.querySelectorAll("button")],o=()=>{for(let c of a)c.setAttribute("aria-pressed",String(c.dataset.gorunumSec===t))};async function l(c,{kaydet:u=!0,sessiz:d=!1}={}){if(!Ug.includes(c))return;if(e=c,c===t){o();return}let h=a.find(g=>g.dataset.gorunumSec===c);h?.setAttribute("aria-busy","true"),s.classList.add("gg-mesgul"),c==="fiziksel"&&!d&&hf("Fiziksel g\xF6r\xFCn\xFCm haz\u0131rlan\u0131yor");let f=!0;try{await n(c)}catch(g){f=!1,console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131",g)}if(h?.removeAttribute("aria-busy"),s.classList.toggle("gg-mesgul",!!s.querySelector("[aria-busy=true]")),e===c){if(!f){t="sanal",Ng(df,"sanal"),o(),hf("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor");return}if(t=c,uf.dataset.gorunumKip=c,o(),d||hf(c==="fiziksel"?"Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi":"Sanal g\xF6r\xFCn\xFCm"),document.dispatchEvent(new CustomEvent("3d:gorunum",{detail:{ad:c}})),u){Ng(df,c);let g=new URL(location.href);c==="fiziksel"?g.searchParams.set("gorunum","fiziksel"):g.searchParams.delete("gorunum"),history.replaceState(null,"",g)}}}return s.addEventListener("click",c=>{let u=c.target.closest("[data-gorunum-sec]");if(!u)return;if(uf.dataset.mod==="tahta"||a.some(h=>!h.getClientRects().length)){s.querySelector("[aria-busy=true]")||l(t==="sanal"?"fiziksel":"sanal");return}l(u.dataset.gorunumSec)}),uf.dataset.gorunumKip="sanal",{ayarla:l,simdiki:()=>t,gecis:s,onIsit:c=>{for(let u of["pointerenter","focusin"])a[1].addEventListener(u,c,{once:!0})}}}var zg=(n,t,e,i,s,r)=>{let a=new he(n,t,e);return a.translate(i,s,r),a};function Gg(n){let t=new Fe;t.name="breadboard-fiziksel";let e=jm(n.duzey);for(let c of Object.values(e))n.kayit(c);let i=new pe({map:e.albedo,roughness:.58});e.normal&&(i.normalMap=e.normal,i.normalScale=new tt(.9,.9));let s=new pe({color:15526111,roughness:.62});n.kayitMat(i),n.kayitMat(s);let r=[s,s,i,s,s,s],a=new wt(new Fn(xt.w,xt.h,xt.d,3,1.1),r);a.position.set(xt.x,xt.h/2,xt.z),a.castShadow=a.receiveShadow=!0,t.add(a);let o=[];for(let c=1;c<=30;c++)for(let u of[1,-1])o.push(zg(1.5,1.1,11.4,yn(c),Ve-2.3,xt.z+u*8.89));for(let c of Object.values(Bn))o.push(zg(yn(30)-yn(2)+1.6,1.1,1.5,xt.x,Ve-2.3,xt.z+c));let l=new wt(Ln(o.map(c=>c.toNonIndexed())),n.mat("klips"));return l.visible=!1,t.add(l),{grup:t,kanca:{rontgen(c){l.visible=c;for(let u of[i,s])u.transparent=c,u.opacity=c?.3:1,u.depthWrite=!c,u.needsUpdate=!0;a.castShadow=!c}}}}var Tn=(n,t=!0)=>(n.castShadow=n.receiveShadow=t,n),Gn=n=>n.index?n.toNonIndexed():n;function QS(n,t){let e=new Fe;e.name="led-fiziksel";let i=new Gt(Bd[t.userData.renkAdi??t.userData.renk]??Bd.kirmizi),s=4.2,r=n.ledKubbe(i),a=r.color.clone(),o=[[0,1],[2.5,1],[2.5,5.6]];for(let m=1;m<=12;m++){let p=m/12*(Math.PI/2);o.push([2.5*Math.cos(p),5.6+2.5*Math.sin(p)])}let l=new Ri(o.map(([m,p])=>new tt(m,p)),n.duzey==="yuksek"?40:32),c=Math.acos(2.55/2.95),u=new Ti;u.absarc(0,0,2.95,c,Math.PI*2-c,!1),u.lineTo(2.55,2.95*Math.sin(c));let d=new ks(u,{depth:1,bevelEnabled:!1,curveSegments:28});d.rotateX(Math.PI/2),d.translate(0,1,0);let h=new wt(Ln([Gn(l),Gn(d)]),r);if(h.position.y=s,h.renderOrder=-1,h.castShadow=!1,h.receiveShadow=!1,e.add(h),n.ek("ledIc")){let m=Ln([Gn((()=>{let p=new he(1.5,3.4,.45);return p.translate(.95,s+1.7,0),p})()),Gn((()=>{let p=new he(.5,2.9,.45);return p.translate(-1.27,s+1.45,0),p})()),Gn((()=>{let p=new he(2,.12,.12);return p.translate(-.2,s+3.5,0),p})())]);e.add(Tn(new wt(m,n.mat("metalCelik")),!1))}let f=()=>{},g=t.userData.bacakYari??1.27;if(g>1.28){let p=[],y=(S,x,E,M)=>{let T=new he(S,x,.5);T.translate(E,M,0),p.push(Gn(T))};for(let S of[-1,1]){let x=S*1.27,E=S*g;y(.5,s-1.3,x,(s+1.3)/2),y(Math.abs(E-x)+.5,.5,(x+E)/2,1.3),y(.5,1.3+5,E,(1.3-5)/2)}e.add(Tn(new wt(Ln(p),n.mat("kalay"))))}else{let m=Tn(new wt(new he(.5,1,.5),n.mat("kalay"))),p=Tn(new wt(new he(.5,1,.5),n.mat("kalay")));m.position.x=-1.27,p.position.x=1.27,e.add(m,p),f=y=>{let S=22+(s+5-22)*y,x=17+(s+5-17)*y;m.scale.y=S,m.position.y=s-S/2,p.scale.y=x,p.position.y=s-x/2},f(1)}return{grup:e,kanca:{ac:m=>{let p=typeof m=="number"?m:m?1:0;r.color.copy(a).lerp(i,p),r.emissiveIntensity=1.05*p,r.transparent&&(r.opacity=.8+.15*p)},bacak:f}}}function Vg(n,t=6.88,e=46){let i=[];for(let s=0;s<e;s++){let r=-t/2+s/(e-1)*t,a=Math.abs(r),o=1.3*Math.sqrt(Math.max(0,1-((a-2.45)/.99)**2)),l=s===0||s===e-1?0:Math.max(a<2.45?1.02:0,o);i.push(new tt(l,r))}return new Ri(i,n.duzey==="dusuk"?16:24)}function t1(n,t){let e=new Fe;e.name="direnc-fiziksel";let i=t.userData,s=i.H??3.4,r=i.uclar?i.uclar[1].x-i.uclar[0].x:10,a=i.bantlar||["kirmizi","kirmizi","kahve","altin"],o=6.88,l=Vg(n,o);l.rotateZ(-Math.PI/2);let c=[.18,.33,.48,.8].map(f=>2.3-4.6*f),u=new pe({map:n.kayit(Id(a,c,o,n.aniz)),roughness:.45});n.kayitMat(u);let d=Tn(new wt(l,u));d.position.y=s,e.add(d);let h=[];for(let f of[-1,1]){let g=r/2-2.9;if(g>.05){let p=new $e(.27,.27,g,10);p.rotateZ(Math.PI/2),p.translate(f*((r/2+2.9)/2),s,0),h.push(Gn(p))}let v=new $e(.27,.27,s+7,10);v.translate(f*r/2,(s-7)/2,0),h.push(Gn(v));let m=new Wi(.27,10,8);m.translate(f*r/2,s,0),h.push(Gn(m))}return e.add(Tn(new wt(Ln(h),n.mat("kalay")))),{grup:e,kanca:{}}}function e1(n,t){let e=new Fe;e.name="direnc-fiziksel";let i=t.userData,s=i.aralik,r=-s/2,a=1.5,o=4.6,l=i.H,c=6.88,u=i.bantlar||["kirmizi","kirmizi","kahve","altin"],d=[.18,.33,.48,.8].map(y=>o*y-o/2),h=new pe({map:n.kayit(Id(u,d,c,n.aniz)),roughness:.45});n.kayitMat(h);let f=Tn(new wt(Vg(n,c),h));f.position.set(r,a+o/2,0),e.add(f);let g=[],v=(y,S,x)=>{let E=new $e(.27,.27,x-S,10);E.translate(y,(S+x)/2,0),g.push(Gn(E))},m=(y,S)=>{let x=new Wi(.27,10,8);x.translate(y,S,0),g.push(Gn(x))};v(r,-5,a+.4),v(r,a+o-.4,l);let p=new $e(.27,.27,s,10);return p.rotateZ(Math.PI/2),p.translate(0,l,0),g.push(Gn(p)),m(r,l),m(-r,l),v(-r,-5,l),e.add(Tn(new wt(Ln(g),n.mat("kalay")))),{grup:e,kanca:{}}}function n1(n){let t=new Fe;t.name="buton-fiziksel";let e=Tn(new wt(new Fn(6,3.4,6,2,.45),n.mat("resetTaban")));e.position.y=1.7;let i=Tn(new wt(new he(6.2,.3,6.2),n.mat("metalFirca")));i.position.y=3.55;let s=Tn(new wt(new $e(1.65,1.8,1.7,28),n.mat("butonKapak")));s.position.y=4.55,t.add(e,i,s);let r=[];for(let o of[-2.54,2.54])for(let l of[-3.81,3.81]){let c=new he(.6,7,.35);c.translate(o,-3.2,l),r.push(Gn(c))}let a=[];for(let o of[-2.5,2.5])for(let l of[-2.5,2.5]){let c=new $e(.3,.3,.06,10);c.translate(o,3.73,l),a.push(Gn(c))}return t.add(Tn(new wt(Ln(r),n.mat("kalay"))),new wt(Ln(a),n.mat("koyu"))),{grup:t,kanca:{bas(o){s.position.y=o?3.95:4.55}}}}function i1(n,t){let e=new Fe;e.name="kablo-fiziksel";let i=t.userData,s=i.egri;if(!s)return null;let r=t.children.find(m=>m.isMesh&&m.geometry?.type==="TubeGeometry"&&m.material.visible!==!1),a=r?r.material.color.getHex():Gd.turuncu,o=56,l={dusuk:6,orta:8,yuksek:10}[n.duzey],c=new pe({color:a,roughness:.36});n.kayitMat(c);let u=Tn(new wt(new Xi(s,o,.62,l,!1),c));e.add(u);let d=u.geometry.index.count,h=s.points[0],f=s.points[s.points.length-1],g=[];for(let m of[h,f]){let p=new I(m.x,m.y-6.2,m.z),y=Tn(new wt(new Fn(2.5,5.6,2.5,2,.25),n.mat("dupont")));y.position.set(p.x,p.y+2.9,p.z);let S=Tn(new wt(new $e(.72,1.12,.8,14),n.mat("dupont")));S.position.set(p.x,p.y+6.05,p.z);let x=Tn(new wt(new he(.62,5.6,.62),n.mat("kalay")));x.position.set(p.x,p.y-2.7,p.z),e.add(y,S,x),g.push([y,S,x])}return{grup:e,kanca:{buyut:m=>{u.geometry.setDrawRange(0,Math.floor(m*o)*l*6);for(let p of g[1])p.visible=m>=1;m>=1&&u.geometry.setDrawRange(0,d)}}}}function ku(n,t,e){return t==="led"?QS(n,e):t==="direnc"?e.userData.dik?e1(n,e):t1(n,e):t==="buton"?n1(n,e):t==="kablo"?i1(n,e):null}var s1=!0,Hg=2,r1={yuksek:{env:1,hemi:.28,gunes:2.1,zemin:.26},orta:{env:.95,hemi:.3,gunes:2.2,zemin:.24},dusuk:{env:.85,hemi:.35,gunes:2.4,zemin:.2}},Wg=Symbol("gercekci"),a1=n=>{try{return localStorage.getItem(n)}catch{return null}},ff=["dusuk","orta","yuksek"];function Pu(n,t,e){let i=n?.[t];if(typeof i!="function"||i[Wg])return;let s=function(...r){let a=i.apply(this,r);return e(...r),a};s[Wg]=!0,n[t]=s}function o1(n,t){let e=new URLSearchParams(location.search).get("fizduzey");if(ff.includes(e))return{duzey:e,neden:["adres"]};let i=2,s=[],r=(d,h)=>{d<i&&(i=d,s.push(h))},a=ff.indexOf(a1("bote-3d-fizduzey"));a>=0&&r(a,"kayit");let o="";try{let d=n.getContext(),h=d.getExtension("WEBGL_debug_renderer_info");o=h?String(d.getParameter(h.UNMASKED_RENDERER_WEBGL)):""}catch{}let l=/nvidia|geforce|rtx|gtx|radeon rx|radeon pro|apple (m\d|gpu)|adreno.*(6[4-9]\d|[7-9]\d\d)|mali-g[789]|intel.*(arc|iris xe)/i.test(o);/swiftshader|llvmpipe|softpipe|software|basic render/i.test(o)&&r(0,"yazilim"),/intel.*(hd|uhd) graphics|gma|radeon (r[2-5]|hd)|mali-(4|t)|adreno.*[2-5]\d\d|vivante|powervr/i.test(o)&&r(1,"zayif");let c=n.capabilities.maxTextureSize||4096;c<4096?r(0,"doku-siniri"):c<8192&&r(1,"doku-siniri");let u=navigator.deviceMemory;return u&&u<=2?r(0,"bellek"):u&&u<=4&&r(1,"bellek"),(navigator.hardwareConcurrency||8)<=2&&r(1,"cekirdek"),innerWidth*innerHeight*(devicePixelRatio||1)**2>=6e6&&!l&&r(0,"4k"),(/iP(hone|ad|od)/.test(navigator.userAgent)||/Mac/.test(navigator.platform)&&navigator.maxTouchPoints>1)&&r(1,"ios"),o||r(1,"cizici-gizli"),t.kalite().kademe>0&&r(Math.max(0,i-1),"kademe"),i===2&&!(l&&c>=16384&&(!u||u>=8))&&r(1,"yuksek-sarti"),{duzey:ff[i],neden:s,cizici:o}}function Xg({S:n,kart:t,bb:e,parcalar:i,ornekler:s=null}){let r={kart:{},bb:{},parca:{}},a={duzey:null,neden:[],gorunum:"sanal",hazir:!1,istatistik:{}},o=null,l=null,c=null,u=[],d=new Map,h=new Set,f=(_,A,C)=>{let k=_?.kanca?.[A];k&&k(C)};Pu(t,"ledL",_=>{r.kart.ledL=_,o&&f(o.kart,"ledL",_)}),Pu(t,"ledOn",_=>{r.kart.ledOn=_,o&&f(o.kart,"ledOn",_)}),Pu(e,"rontgen",_=>{r.bb.rontgen=_,o&&f(o.bb,"rontgen",_)});function g(_,A){let C=r.parca[_]={};for(let k of["ac","bacak","bas","buyut"])Pu(A.nesne.userData,k,L=>{C[k]=L,o&&i[_]===A&&f(o.parca[_],k,L)})}for(let[_,A]of Object.entries(i))g(_,A);let v=(_,A)=>_.traverse(C=>{if(!C.isMesh||C.isInstancedMesh&&!C.userData.park)return;let k=C.material;!Array.isArray(k)&&(k.visible===!1||k.blending===ri)||A.push({o:C,mask:C.layers.mask})}),m=_=>_.traverse(A=>{if(A.isMesh)for(let C of[].concat(A.material))for(let k of Object.values(C||{}))k?.isTexture&&n.renderer.initTexture(k)});function p(){if(o)return o;let _=performance.now(),A=o1(n.renderer,n),C=gu(A.duzey,n.renderer.capabilities.getMaxAnisotropy()),k=N=>(N&&(N.grup.visible=!1),N),L;try{L={sag:C,kart:k(_u(C,{logo:s1})),bb:k(Gg(C)),parca:{},gruplar:[]};for(let[N,H]of Object.entries(i)){let Y=k(ku(C,H.tur,H.nesne));Y&&(L.parca[N]=Y)}}catch(N){try{C.dispose()}catch{}throw N}let F=[];v(t.grup,F),v(e.grup,F);for(let[N,H]of Object.entries(i)){let Y=[];v(H.nesne,Y),d.set(N,Y),F.push(...Y)}h.clear(),t.grup.add(L.kart.grup),e.grup.add(L.bb.grup),L.gruplar.push(L.kart.grup,L.bb.grup);for(let[N,H]of Object.entries(L.parca))i[N].nesne.add(H.grup),L.gruplar.push(H.grup);u.push(...F),a.duzey=A.duzey,a.neden=A.neden,o=L,"ledL"in r.kart&&f(L.kart,"ledL",r.kart.ledL),"ledOn"in r.kart&&f(L.kart,"ledOn",r.kart.ledOn),"rontgen"in r.bb&&f(L.bb,"rontgen",r.bb.rontgen);for(let[N,H]of Object.entries(r.parca))for(let[Y,ot]of Object.entries(H))f(L.parca[N],Y,ot);c={},n.scene.traverse(N=>{N.isHemisphereLight?c.hemi=N:N.isDirectionalLight?c.gunes=N:N.isMesh&&N.material?.isShadowMaterial&&(c.zemin=N)});let P=0;for(let N of L.gruplar)N.traverse(H=>{H.isMesh&&H.geometry&&(P+=(H.geometry.index?H.geometry.index.count:H.geometry.attributes.position.count)/3*(H.isInstancedMesh?H.count:1))});a.istatistik={kurmaMs:Math.round(performance.now()-_),ucgen:Math.round(P),park:u.length};try{n.renderer.compile(n.scene,n.camera);for(let N of L.gruplar)m(N)}catch(N){console.warn("Fiziksel \u0131s\u0131nma atland\u0131",N)}if(s)try{for(let N of s())try{let H=ku(C,N.tur,N.nesne);H&&(n.renderer.compile(H.grup,n.camera,n.scene),m(H.grup),H.grup.traverse(Y=>Y.geometry?.dispose()))}finally{N.at?.()}}catch(N){console.warn("Fiziksel par\xE7a \u0131s\u0131nmas\u0131 atland\u0131",N)}return a.hazir=!0,new URLSearchParams(location.search).has("olcum")&&console.info("Fiziksel g\xF6r\xFCn\xFCm",a),L}function y(_){h.delete(_);let A=i[_];if(!A||!o||o.parca[_])return;let C=null;try{C=ku(o.sag,A.tur,A.nesne)}catch(F){console.warn("Fiziksel par\xE7a kurulamad\u0131",_,F);return}if(!C)return;let k=a.gorunum==="fiziksel",L=[];if(v(A.nesne,L),d.set(_,L),u.push(...L),k)for(let{o:F}of L)F.layers.set(Hg);C.grup.visible=k,A.nesne.add(C.grup),o.gruplar.push(C.grup),o.parca[_]=C;for(let[F,P]of Object.entries(r.parca[_]||{}))f(C,F,P);try{n.renderer.compile(C.grup,n.camera,n.scene),m(C.grup)}catch{}}function S(_,A){i[_]&&x(_),i[_]=A,g(_,A),o&&(a.gorunum==="fiziksel"?(y(_),n.iste()):h.add(_))}function x(_){if(!i[_])return;delete i[_],delete r.parca[_],h.delete(_);let A=d.get(_);if(A){d.delete(_);let L=new Set(A);for(let{o:F,mask:P}of A)F.layers.mask=P;for(let F=u.length-1;F>=0;F--)L.has(u[F])&&u.splice(F,1)}let C=o?.parca[_];if(!C)return;delete o.parca[_],C.grup.removeFromParent();let k=o.gruplar.indexOf(C.grup);k>=0&&o.gruplar.splice(k,1),o.sag.birak(C.grup)}function E(_){if(!c)return;l||(l={env:n.scene.environmentIntensity,hemi:c.hemi?.intensity,gunes:c.gunes?.intensity,zemin:c.zemin?.material.opacity});let A=_?r1[a.duzey]:l;n.scene.environmentIntensity=A.env,c.hemi&&(c.hemi.intensity=A.hemi),c.gunes&&(c.gunes.intensity=A.gunes),c.zemin&&(c.zemin.material.opacity=A.zemin)}function M(_){let A=_==="fiziksel";if(A){p();for(let C of[...h])y(C)}if(o){for(let{o:C,mask:k}of u)A?C.layers.set(Hg):C.layers.mask=k;for(let C of o.gruplar)C.visible=A;E(A),a.gorunum=_,n.golgeYenile(),n.iste()}}let T=Bg(async _=>{_==="fiziksel"&&!o&&await new Promise(A=>setTimeout(A,30)),M(_)});if(Og()==="fiziksel")try{M("fiziksel"),T.ayarla("fiziksel",{kaydet:!1,sessiz:!0})}catch(_){console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor",_),T.ayarla("sanal",{kaydet:!0,sessiz:!0})}return{durum:()=>({...a,deriParca:o?Object.keys(o.parca).length:0,park:u.length}),gorunum:_=>T.ayarla(_),kipUygula:M,parcaEkle:S,parcaCikar:x}}var ge=document.documentElement,mt=(n,t=document)=>t.querySelector(n),xn=(n,t=document)=>[...t.querySelectorAll(n)],gi=(n,t)=>{try{localStorage.setItem(n,t)}catch{}},Ni=n=>{try{return localStorage.getItem(n)}catch{return null}},Yg=0,We=n=>{let t=mt("#duyuru");t&&(clearTimeout(Yg),t.textContent="",Yg=setTimeout(()=>{t.textContent=n},40))},di=(n="")=>String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),l1=n=>n&&n.charAt(0).toLocaleUpperCase("tr-TR")+n.slice(1),mf=(n,t=1)=>n.toFixed(t).replace(".",","),Jn=(()=>{try{return JSON.parse(mt("#ozgur-ikon")?.textContent||"{}")}catch{return{}}})(),Vu={hata:"Hata",uyari:"Uyar\u0131",bilgi:"Bilgi"};ge.dataset.js="1";var oe=null,tl=null,Xs=null,La=null,$g=["5","6","7","8"],Bu=mt("#sinif-penceresi");function c1(n,t=!0){ge.dataset.sinif=n,t&&gi("bote-3d-sinif",n);let e=new URL(location.href);e.searchParams.set("sinif",n),history.replaceState(null,"",e);for(let i of xn("[data-sinif-yaz]"))i.textContent=`${n}. s\u0131n\u0131f`;for(let i of xn("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===n));Pa(!0)}{let n=new URLSearchParams(location.search).get("sinif"),t=Ni("bote-3d-sinif"),e=$g.includes(n)?n:$g.includes(t)?t:null;if(e){ge.dataset.sinif=e;for(let i of xn("[data-sinif-yaz]"))i.textContent=`${e}. s\u0131n\u0131f`;for(let i of xn("[data-sinif-sec]"))i.setAttribute("aria-pressed",String(i.dataset.sinifSec===e))}}document.addEventListener("click",n=>{let t=n.target.closest("[data-sinif-sec]");t&&(c1(t.dataset.sinifSec),Bu?.open&&(Bu.close(),mt("#sinif-dugme")?.focus()),We(`${t.dataset.sinifSec}. s\u0131n\u0131f se\xE7ildi`))});mt("#sinif-dugme")?.addEventListener("click",()=>Bu?.showModal?.());var i0=new URLSearchParams(location.search).get("mod")||Ni("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),s0=window.matchMedia(kg),r0=i0;function wf(n,t){r0=n,ge.dataset.mod=n==="tahta"&&s0.matches?"normal":n,mt("#tahta-dugme")?.setAttribute("aria-pressed",String(ge.dataset.mod==="tahta")),t&&gi("bote-3d-mod",n),Ff()}wf(i0,!1);s0.addEventListener?.("change",()=>wf(r0,!1));mt("#tahta-dugme")?.addEventListener("click",()=>wf(ge.dataset.mod==="tahta"?"normal":"tahta",!0));var a0=()=>ge.dataset.theme==="dark"?"#17121f":"#e9e5f1";mt("#tema-dugme")?.addEventListener("click",()=>{let n=ge.dataset.theme!=="dark";n?ge.dataset.theme="dark":delete ge.dataset.theme,gi("bote-theme",n?"dark":"light"),oe?.arkaPlan(a0())});Dg(mt("#tam-ekran"),ge);var Hu=mt("#ogretmen-dugme");function Af(n){ge.dataset.ek=n?"acik":"",Hu?.setAttribute("aria-expanded",String(n)),n&&mt("#ogretmen")?.focus()}Hu?.addEventListener("click",()=>Af(ge.dataset.ek!=="acik"));mt("#ogretmen-kapat")?.addEventListener("click",()=>{Af(!1),Hu?.focus()});var _i=mt(".ders"),br=mt(".kart-alani"),Ys=mt(".panel-kenar"),gf=mt("#panel-dugme");Pg(br);Lg(mt(".sahne-arac"));var Hn=window.matchMedia("(orientation: portrait), (max-width: 820px)");function sl(n,t=!0){ge.dataset.panel=n?"acik":"kapali",gf?.setAttribute("aria-expanded",String(n)),gf?.setAttribute("aria-label",n?"Paneli kapat":"Paneli a\xE7"),br.inert=!n&&!Hn.matches,t&&(gi("bote-3d-panel",n?"acik":"kapali"),We(n?"Panel a\xE7\u0131ld\u0131":"Panel kapand\u0131"))}sl(Ni("bote-3d-panel")!=="kapali",!1);gf?.addEventListener("click",()=>sl(ge.dataset.panel!=="acik"));var rl=n=>{n?_i.style.setProperty("--panel-w",`${Math.round(n)}px`):_i.style.removeProperty("--panel-w")},_f=n=>Math.max(300,Math.min(_i.clientWidth*.62,n));rl(Number(Ni("bote-3d-panel-w"))||0);var o0=()=>gi("bote-3d-panel-w",String(parseInt(_i.style.getPropertyValue("--panel-w"),10)||"")),vr=null;Ys?.addEventListener("pointerdown",n=>{n.target.closest("#panel-dugme")||ge.dataset.panel!=="acik"||Hn.matches||(Ys.setPointerCapture(n.pointerId),vr={x:n.clientX,w:br.getBoundingClientRect().width,once:_i.style.getPropertyValue("--panel-w")},ge.dataset.suruklenen="1")});var u1=110;Ys?.addEventListener("pointermove",n=>{if(!vr)return;let t=vr.w+(ge.dataset.panelYan==="sol"?1:-1)*(n.clientX-vr.x);t<_f(0)-u1?ge.dataset.kapanacak="1":delete ge.dataset.kapanacak,rl(_f(t))});var l0=n=>{if(!vr)return;let t=vr;if(vr=null,delete ge.dataset.suruklenen,ge.dataset.kapanacak&&(delete ge.dataset.kapanacak,t.once?_i.style.setProperty("--panel-w",t.once):_i.style.removeProperty("--panel-w"),n?.type==="pointerup")){sl(!1);return}o0()};Ys?.addEventListener("pointerup",l0);Ys?.addEventListener("pointercancel",l0);Ys?.addEventListener("dblclick",n=>{n.target.closest("#panel-dugme")||(rl(0),gi("bote-3d-panel-w",""))});Ys?.addEventListener("keydown",n=>{if(n.target!==Ys||!["ArrowLeft","ArrowRight"].includes(n.key))return;n.preventDefault(),n.stopPropagation();let t=n.key==="ArrowLeft"==(ge.dataset.panelYan!=="sol");rl(_f(br.getBoundingClientRect().width+(t?40:-40))),o0()});function c0(n,t){ge.dataset.panelYan=n;for(let e of xn("[data-yan]"))e.setAttribute("aria-pressed",String(e.dataset.yan===n));t&&gi("bote-3d-panel-yan",n)}c0(Ni("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);var il=mt("#ayarlar"),u0=mt("#ayar-dugme"),h0=n=>{il.hidden=!n,u0.setAttribute("aria-expanded",String(n)),n&&il.querySelector("button")?.focus()};u0?.addEventListener("click",n=>{n.stopPropagation(),h0(il.hidden)});document.addEventListener("click",n=>{il&&!il.hidden&&!n.target.closest("#ayarlar, #ayar-dugme")&&h0(!1)});function d0(n,t){ge.dataset.panelBoyut=n;for(let e of xn("[data-panel-boyut]:not(html)"))e.setAttribute("aria-pressed",String(e.dataset.panelBoyut===n));t&&(rl(0),gi("bote-3d-panel-w",""),gi("bote-3d-panel-boyut",n))}d0(["dar","orta","genis"].includes(Ni("bote-3d-panel-boyut"))?Ni("bote-3d-panel-boyut"):"orta",!1);var jo=[.9,1,1.15,1.3,1.5],ka=Math.max(0,jo.indexOf(Number(Ni("bote-3d-yazi"))||1));function f0(n,t){ka=Math.max(0,Math.min(jo.length-1,n)),ge.style.setProperty("--yazi",String(jo[ka]));let e=mt("#yazi-deger");e&&(e.textContent=`%${Math.round(jo[ka]*100)}`),t&&gi("bote-3d-yazi",String(jo[ka]))}f0(ka,!1);document.addEventListener("click",n=>{let t=n.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");t&&(t.dataset.panelBoyut&&d0(t.dataset.panelBoyut,!0),t.dataset.yazi&&f0(ka+Number(t.dataset.yazi),!0),t.dataset.yan&&c0(t.dataset.yan,!0))});var fi={kisa:()=>{let n=mt(".tutamac"),t=mt(".kart-ust"),e=mt(".kart-alt"),i=!!(e&&t&&e.offsetTop<t.offsetTop+t.offsetHeight);return(n?.offsetHeight||0)+Math.max(t?.offsetHeight||0,i?e.offsetHeight:0)+(i?0:e?.offsetHeight||0)+2},yarim:()=>_i.clientHeight*.5,tam:()=>_i.clientHeight*.92},p0=88,Ef=()=>fi.yarim()-fi.kisa()+2>=p0,m0=n=>n==="yarim"&&!Ef()?"kisa":n,yi=["kisa","yarim","tam"].includes(Ni("bote-3d-sayfa"))?Ni("bote-3d-sayfa"):"yarim";function is(n,t=!0,e=!1){if(!Hn.matches){delete ge.dataset.sayfa,_i.style.removeProperty("--sayfa-h"),oe?.gorunurAlan(0,!0),sl(ge.dataset.panel!=="kapali",!1);return}yi=n;let i=m0(n);ge.dataset.sayfa=i,br.inert=!1;let s=Math.round(fi[i]());e&&(ge.dataset.suruklenen="1"),_i.style.setProperty("--sayfa-h",`${s}px`),e&&requestAnimationFrame(()=>delete ge.dataset.suruklenen),oe?.gorunurAlan(s,e),t&&gi("bote-3d-sayfa",n)}var hi=null;for(let n of[mt(".tutamac"),mt(".kart-ust")].filter(Boolean)){n.addEventListener("pointerdown",e=>{if(!Hn.matches||e.target.closest("button"))return;n.setPointerCapture(e.pointerId);let i=performance.now();hi={y:e.clientY,h:br.getBoundingClientRect().height,sonY:e.clientY,sonT:i,hiz:0},ge.dataset.suruklenen="1"}),n.addEventListener("pointermove",e=>{if(!hi)return;let i=performance.now();_i.style.setProperty("--sayfa-h",`${Math.round(Math.max(fi.kisa(),Math.min(fi.tam(),hi.h+(hi.y-e.clientY))))}px`),hi.hiz=(hi.sonY-e.clientY)/Math.max(1,i-hi.sonT),hi.sonY=e.clientY,hi.sonT=i});let t=e=>{if(!hi)return;let i=hi;hi=null,delete ge.dataset.suruklenen;let s=br.getBoundingClientRect().height,r=Math.abs(e.clientY-i.y)>6,a=Ef(),o=a?"yarim":"tam",l;r?i.hiz>.45?l=s<fi.yarim()?o:"tam":i.hiz<-.45?l=a&&s>fi.yarim()?"yarim":"kisa":l=(a?["kisa","yarim","tam"]:["kisa","tam"]).sort((c,u)=>Math.abs(fi[c]()-s)-Math.abs(fi[u]()-s))[0]:l=ge.dataset.sayfa==="kisa"?o:"kisa",is(l),We({kisa:"Panel k\xFC\xE7\xFCld\xFC",yarim:"Panel yar\u0131m ekran",tam:"Panel tam ekran"}[l])};n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t)}Hn.addEventListener?.("change",()=>is(yi,!1,!0));var qg=0;window.addEventListener("resize",()=>{clearTimeout(qg),qg=setTimeout(()=>{Hn.matches&&is(yi,!1,!0)},120)});is(yi,!1,!0);var Da=null,h1=()=>{Hn.matches&&yi!=="kisa"&&(Da=yi,is("kisa",!1))},g0=()=>{Da&&Hn.matches&&is(Da,!1),Da=null},d1=()=>{Da==="tam"&&(Da=Ef()?"yarim":"kisa"),g0()},Ia=["kur","program","durum"];function f1(){if(!Hn.matches)return;let n=fi.yarim()-fi.kisa()+2>=p0?"yarim":"tam";(yi==="kisa"||yi==="yarim"&&n==="tam")&&is(n,n==="yarim")}function Tf(n,t=!1){for(let e of Ia){let i=mt(`#sekme-${e}`),s=mt(`#bolum-${e}`),r=e===n;i.setAttribute("aria-selected",String(r)),i.tabIndex=r?0:-1,s.hidden=!r}t&&mt(`#sekme-${n}`).focus(),mt(".kart-govde")?.scrollTo(0,0),f1()}mt(".sekmeler").addEventListener("click",n=>{let t=n.target.closest("[role=tab]");t&&Tf(t.id.slice(6))});mt(".sekmeler").addEventListener("keydown",n=>{let t=Ia.indexOf(document.activeElement?.id?.slice(6));if(t<0)return;let e={ArrowRight:t+1,ArrowLeft:t-1,Home:0,End:Ia.length-1}[n.key];e!==void 0&&(n.preventDefault(),n.stopPropagation(),Tf(Ia[(e+Ia.length)%Ia.length],!0))});var _0="bote-3d-ozgur-devre",Mr="turuncu";function p1(){try{let n=JSON.parse(Ni(_0)||"null");if(n&&n.surum===1)return Ru[n.kabloRengi]&&(Mr=n.kabloRengi),Ra(n)}catch{}return Ra(cf["ders-2"])}var te=p1(),xi=!1,el=!0,y0=!1,Te=null,ms=null,$s=new Set,Ft=null,es=null,Wu=[],xr=[],Rf=()=>JSON.stringify({parcalar:te.parcalar,program:te.program}),Zg=0;function Cf(){clearTimeout(Zg),Zg=setTimeout(()=>{let n=Ft?.tasinan?JSON.parse(Ft.onceki):te;gi(_0,JSON.stringify({surum:1,parcalar:n.parcalar,program:n.program,kabloRengi:Mr}))},300)}function Ua(n=Rf()){xr[xr.length-1]!==n&&(xr.push(n),xr.length>60&&xr.shift(),mt("#geri-al").disabled=!1)}function x0(){Ft&&Sr(!0);let n=xr.pop();mt("#geri-al").disabled=!xr.length,n&&(te=Ra(JSON.parse(n)),ys(!1),qs(),We("Son de\u011Fi\u015Fiklik geri al\u0131nd\u0131"))}var wr=n=>te.parcalar.find(t=>t.id===n);function m1(n){let t={led:"led",direnc:"r",buton:"buton",kablo:"k"}[n],e=new Set(te.parcalar.map(s=>s.id)),i=1;for(;e.has(`${t}-${i}`);)i++;return`${t}-${i}`}var Vn=mt("#sahne"),Ou=mt(".sahne-alani"),pi=new Map,v0=[],Di=null,ts=null,gs=null,Ws=null,zu=2.54,dn=(n,t)=>{let e=nn(n);return e?e.tur==="delik"?mr(e.sutun,e.satir,t):e.tur==="ray"?ng(e.ray.slice(0,-1),e.ray.slice(-1),e.sutun,t):Ud(e.pin):null},Ko=n=>(nn(n)?.tur==="pin"?ui:Ve)+.09,g1=Eu.map(n=>({id:`p:${n}`,v:Ud(n)})),Lu=n=>qo.map(t=>`r:${n}:${t}`),_1=n=>Array.from({length:30},(t,e)=>`h:${e+1}:${n}`),Fu=[Lu("uzak+"),Lu("uzak-"),...[..."jihgf",..."edcba"].map(_1),Lu("yakin-"),Lu("yakin+")],Qo=[...Fu,nf.map(n=>`p:${n}`),[...sf,...rf].map(n=>`p:${n}`)],y1=n=>{let t=nn(n[0]);return t.tur==="ray"?`${t.ray.startsWith("yakin")?"alt":"\xFCst"} ${t.ray.endsWith("+")?"+":"\u2212"}`:t.satir};function x1(){if(oe=Hm(Vn,{arkaPlan:a0(),olay:t=>{t==="baglam-kaybi"&&Ou.classList.add("baglam-kaybi"),t==="baglam-geri"&&Ou.classList.remove("baglam-kaybi")}}),!oe){ge.dataset.webgl="yok";for(let t of xn("[data-arac]"))t.disabled=!0;Na(!0);return}cg(oe.renderer.capabilities.getMaxAnisotropy()),tl=sg(oe.hedefler),oe.scene.add(tl.grup),Xs=rg(oe.hedefler),oe.scene.add(Xs.grup);for(let t=0;t<3;t++){let e=new Ns(16777215,0,42,2);oe.scene.add(e),v0.push(e)}v1(),b0(),b1();let n={};for(let[t,e]of pi)n[t]={tur:e.tur,nesne:e.nesne};La=Xg({S:oe,kart:tl,bb:Xs,parcalar:n,ornekler:M1}),Hn.matches&&oe.gorunurAlan(Math.round(fi[m0(yi)]()),!0),oe.kameraGit(yu.genel,!0),C1(),ns(),_s(),requestAnimationFrame(()=>Ou.classList.add("hazir")),L0&&oe.kareGuncelleyici(()=>(A0++,!1))}mt("#yeniden-yukle")?.addEventListener("click",()=>location.reload());function v1(){let n=e=>(e.rotateX(-Math.PI/2),e),t=(e,i=.96)=>new An({color:e,transparent:!0,opacity:i,depthWrite:!1});Di=new wt(n(new la(1.2,1.9,32)),t(9133302)),Di.renderOrder=4,Di.visible=!1,ts=new wt(n(new ar(1.15,24)),t(8141549)),ts.renderOrder=4,ts.visible=!1,gs=new Yn(new he(2.1,.05,2.1),t(1483594,.9),4),gs.count=0,gs.frustumCulled=!1,Ws=new Yn(n(new la(.95,1.55,24)),t(8141549),24),Ws.count=0,Ws.frustumCulled=!1,Ws.renderOrder=4,oe.scene.add(Di,ts,gs,Ws)}function b1(){let n=xu("kirmizi",new I(-150,Ve,60),new I(-147.46,Ve,60));n.userData.ac(1),oe.scene.add(n);let t=[Di,ts].map(e=>e.visible);Di.visible=ts.visible=!0;try{oe.renderer.compile(oe.scene,oe.camera)}catch{}oe.scene.remove(n),$o(n),[Di.visible,ts.visible]=t}function M1(){let n=new I(-150,Ve,60),t=new I(-142.38,Ve,60);return[xu("kirmizi",n,t),Wd(220,n,t),Xd(n),Yd(n,t,"turuncu")].map((e,i)=>({tur:["led","direnc","buton","kablo"][i],nesne:e,at:()=>$o(e)}))}var S1=n=>JSON.stringify([n.tur,n.renk,n.deger,n.anot,n.katot,n.a,n.b,n.sutun,n.bas,n.son]);function w1(n){if(n.tur==="led")return xu(n.renk,dn(n.anot),dn(n.katot));if(n.tur==="direnc")return Wd(n.deger,dn(n.a),dn(n.b));if(n.tur==="buton"){let t=mr(n.sutun,"e"),e=mr(n.sutun+2,"e");return Xd(new I((t.x+e.x)/2,Ve,xt.z))}return Yd(dn(n.bas),dn(n.son),n.renk)}function b0(){if(!oe)return;let n=new Set,t=!1;for(let e of te.parcalar){n.add(e.id);let i=S1(e),s=pi.get(e.id);if(s&&s.anahtar===i)continue;s&&(La?.parcaCikar(e.id),oe.scene.remove(s.nesne),$o(s.nesne));let r=w1(e);r.userData.parcaId=e.id,r.updateMatrixWorld(!0),oe.scene.add(r),pi.set(e.id,{nesne:r,anahtar:i,tur:e.tur}),La?.parcaEkle(e.id,{tur:e.tur,nesne:r}),t=!0}for(let[e,i]of pi)n.has(e)||(La?.parcaCikar(e),oe.scene.remove(i.nesne),$o(i.nesne),pi.delete(e),t=!0);for(let e of $s)pi.get(e)?.nesne.userData.bas?.(!0);t&&oe.golgeYenile()}function M0(n){let t=pi.get(n),e=wr(n);return!t||!e?null:e.tur==="kablo"?t.nesne.userData.egri.getPoint(.5).add(new I(0,2.5,0)):t.nesne.localToWorld((t.nesne.userData.tepe||new I(0,6,0)).clone().add(new I(0,2,0)))}var Gu=new lr,Kg=new tt,Du=new kn(new I(0,1,0),0),Jo=new I;function S0(n,t){let e=Vn.getBoundingClientRect();Kg.set((n-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1),Gu.setFromCamera(Kg,oe.camera)}function nl(n){let t=n.clone().project(oe.camera),e=Vn.getBoundingClientRect();return{x:e.left+(t.x+1)/2*e.width,y:e.top+(1-t.y)/2*e.height}}function w0(n){let t=nl(n),e=nl(n.clone().add(new I(zu,0,0))),i=nl(n.clone().add(new I(0,0,zu)));return Math.min(Math.hypot(e.x-t.x,e.y-t.y),Math.hypot(i.x-t.x,i.y-t.y))}var A1=mr(1,"a").x,E1=[...Object.entries(tf).map(([n,t])=>({tur:"satir",r:n,z:t})),...Object.entries(ef).map(([n,t])=>({tur:"ray",r:n,z:t}))];function T1(n){let t=(n.x-A1)/zu+1,e=(n.z-xt.z)/zu,i=null,s=.55;for(let a of E1){let o=Math.abs(e-a.z);o<s&&(s=o,i=a)}if(!i)return null;let r=Math.round(t);return Math.abs(t-r)>.55?null:i.tur==="satir"?r>=1&&r<=30?`h:${r}:${i.r}`:null:qo.includes(r)?`r:${i.r}:${r}`:null}function yf(n,t){if(S0(n,t),Du.constant=-ui,Gu.ray.intersectPlane(Du,Jo)){let e=null,i=1.9;for(let s of g1){let r=Math.hypot(s.v.x-Jo.x,s.v.z-Jo.z);r<i&&(i=r,e=s.id)}if(e)return e}return Du.constant=-Ve,Gu.ray.intersectPlane(Du,Jo)?T1(Jo):null}function R1(n,t){S0(n,t);let e=[];for(let r of pi.values())r.nesne.userData.hedef&&e.push(r.nesne.userData.hedef);let s=Gu.intersectObjects(e,!1)[0]?.object;for(;s&&!s.userData.parcaId;)s=s.parent;return s?wr(s.userData.parcaId):null}var Be=null,mi=null,A0=0;function C1(){let n=new Set,t=!1,e=null,i=null,s=0;Vn.addEventListener("pointerdown",a=>{n.size||(t=!1),n.add(a.pointerId),n.size>1&&(t=!0),e={x:a.clientX,y:a.clientY,t:performance.now(),tur:a.pointerType}});let r=a=>{if(n.delete(a.pointerId),!e||t){n.size||(e=null);return}let o=e;e=null,!(a.type!=="pointerup"||Math.hypot(a.clientX-o.x,a.clientY-o.y)>9||performance.now()-o.t>600)&&I1(a.clientX,a.clientY,o.tur)};Vn.addEventListener("pointerup",r),Vn.addEventListener("pointercancel",r),Vn.addEventListener("pointermove",a=>{a.pointerType==="mouse"&&(i={x:a.clientX,y:a.clientY,tus:a.buttons},s||(s=requestAnimationFrame(()=>{s=0,i&&!i.tus&&jn(yf(i.x,i.y),"fare")})))}),Vn.addEventListener("pointerleave",()=>{i=null,mi==="fare"&&jn(null,null)}),Vn.addEventListener("focus",()=>{(!Be||mi!=="klavye")&&jn(Be||"h:15:e","klavye",!0)}),Vn.addEventListener("blur",()=>{mi==="klavye"&&jn(null,null)}),Vn.addEventListener("keydown",k1)}function I1(n,t,e){if(!oe)return;if(Er(),Ft){let r=yf(n,t);if(!r){E0("Burada delik yok: breadboard'daki bir deli\u011Fe ya da Arduino'nun bir pinine dokun");return}if(w0(dn(r))<(e==="mouse"?7:26)){D1(r);return}jn(r,e==="mouse"?"fare":"dokunma"),Pf(r);return}let i=R1(n,t);if(i){if(i.tur==="buton"&&xi&&te.program.tur==="buton"){O1(i.id);return}Oa(i.id);return}ys();let s=yf(n,t);jn(s,s?"dokunma":null),s&&We(`${qe(s,!0)}: ${Ta(s)} birbirine ba\u011Fl\u0131`)}function jn(n,t,e=!1){n===Be&&t===mi&&!e||(Be=n,mi=n?t:null,Vn&&(Vn.style.cursor=n?"pointer":Ft?"crosshair":""),_s())}function k1(n){if(!oe)return;let t=n.key;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(t)){n.preventDefault();let e=Be||"h:15:e",i=Qo.findIndex(o=>o.includes(e));i<0&&(i=8);let s=Qo[i],r=s.indexOf(e),a=e;if(t==="ArrowLeft"&&(a=s[Math.max(0,r-1)]),t==="ArrowRight"&&(a=s[Math.min(s.length-1,r+1)]),t==="Home"&&(a=s[0]),t==="End"&&(a=s[s.length-1]),t==="ArrowUp"||t==="ArrowDown"){let o=Qo[Math.max(0,Math.min(Qo.length-1,i+(t==="ArrowUp"?-1:1)))],l=dn(e).x;a=o.reduce((c,u)=>Math.abs(dn(u).x-l)<Math.abs(dn(c).x-l)?u:c,o[0])}jn(a,"klavye"),We(P1(a));return}if(t==="Enter"||t===" "){n.preventDefault();let e=Be||"h:15:e";if(Ft){Pf(e);return}let i=Iu(te.parcalar).get(e);if(i){Oa(i);return}jn(e,"klavye",!0),We(`${qe(e,!0)}: ${Ta(e)} birbirine ba\u011Fl\u0131`);return}(t==="Delete"||t==="Backspace")&&es&&!Ft&&(n.preventDefault(),Lf(es))}function P1(n){let t=qe(n,!0),e=Iu(te.parcalar).get(n);if(e&&(t+=`, burada ${Qi(wr(e))}`),Ft){let i=Zo(te.parcalar,Ft.tur,Ft.ilk,n);i.gecerli||(t+=`. Olmaz: ${i.neden}`)}return t}document.addEventListener("keydown",n=>{if(!(n.target.closest?.("input[type=text], textarea")||Bu?.open)){if((n.ctrlKey||n.metaKey)&&!n.shiftKey&&!n.altKey&&(n.key==="z"||n.key==="Z")){n.preventDefault(),x0();return}if(n.key==="Escape"){if(ge.dataset.ek==="acik"){Af(!1),Hu?.focus();return}if(!mt("#secici").hidden){Er(),Vn.focus({preventScroll:!0});return}if(Ft){Sr(!0);return}es&&ys()}}});var Nu=new we,pf=Object.assign(document.createElement("div"),{className:"imlec-etiket"}),Jg=Object.assign(document.createElement("div"),{className:"imlec-etiket ilk"}),xf=new Map;function _s(){if(!oe)return;let n=[],t=!0,e="";if(Be){if(Ft){let o=Zo(te.parcalar,Ft.tur,Ft.ilk,Be);t=o.gecerli,e=o.neden||""}Di.position.copy(dn(Be)).setY(Ko(Be)),Di.material.color.setHex(t?9133302:14427686),Di.visible=!0;let r=Eg(Be);if(nn(Be).tur==="pin"){Xs.grupGoster([]);let o=r.filter(l=>l!==Be).slice(0,4);gs.count=o.length,o.forEach((l,c)=>{let u=dn(l);Nu.makeTranslation(u.x,ui+.06,u.z),gs.setMatrixAt(c,Nu)}),gs.instanceMatrix.needsUpdate=!0}else gs.count=0,Xs.grupGoster(r.map(o=>dn(o)));let a;Ft?a=t?qe(Be,!0):`${qe(Be)}: ${e}`:a=nn(Be).tur==="delik"?`${qe(Be)} \xB7 ${Ta(Be)}`:Ta(Be),pf.textContent=a,pf.classList.toggle("gecersiz",!t),n.push({nokta:dn(Be).setY(Ko(Be)),el:pf})}else Di.visible=!1,gs.count=0,Xs.grupGoster([]);Ft?.ilk?(ts.position.copy(dn(Ft.ilk)).setY(Ko(Ft.ilk)+.01),ts.visible=!0,Jg.textContent=`${Ft.tur==="led"?"Anot":"1. u\xE7"}: ${qe(Ft.ilk)}`,Ft.ilk!==Be&&n.push({nokta:dn(Ft.ilk).setY(Ko(Ft.ilk)),el:Jg})):ts.visible=!1;let s=[...new Set([es,...Wu].filter(Boolean))].map(wr).filter(Boolean).flatMap(r=>_r(r)).slice(0,24);Ws.count=s.length,s.forEach((r,a)=>{let o=dn(r);Nu.makeTranslation(o.x,Ko(r)+.02,o.z),Ws.setMatrixAt(a,Nu)}),Ws.instanceMatrix.needsUpdate=!0;for(let[r,a]of xf){let o=M0(r);o&&n.push({nokta:o,el:a})}oe.isaretKoy(n)}function vf(){let n=new Map;for(let e of Te.uyarilar)if(e.seviye!=="bilgi")for(let i of e.parcalar)(!n.has(i)||e.seviye==="hata"&&n.get(i).seviye!=="hata")&&n.set(i,e);let t=JSON.stringify([...n].map(([e,i])=>[e,i.seviye,i.metin]));if(t===vf.imza)return!1;vf.imza=t,xf.clear();for(let[e,i]of n){let s=document.createElement("button");s.type="button",s.tabIndex=-1,s.className=`rozet-isaret ${i.seviye}`,s.innerHTML=`<span>${Jn[i.seviye]||""}</span>`,s.setAttribute("aria-label",`${Vu[i.seviye]}: ${i.metin}`),s.title=i.metin,s.addEventListener("click",r=>{r.stopPropagation(),Oa(e),P0()}),xf.set(e,s)}return!0}var L1=n=>n.tur==="led"?`${l1(Ea[n.renk].ad)} LED`:n.tur==="direnc"?`${Tu[n.deger]} diren\xE7`:n.tur==="buton"?"Buton":`${Ru[n.renk]} kablo`;function If(){if(!Ft)return"";let n=Ft.tasinan?`${Qi(Ft.tasinan.parca)} ta\u015F\u0131n\u0131yor. `:`${L1(Ft)}: `;return Ft.tur==="buton"?`${n}orta kanal\u0131n kenar\u0131ndaki e ya da f sat\u0131r\u0131nda bir deli\u011Fe dokun; buton kanal\u0131n \xFCst\xFCne oturur.`:Ft.tur==="led"?Ft.ilk?"\u015Eimdi k\u0131sa baca\u011F\u0131n (katot, eksi) deli\u011Fine dokun: anottan en \xE7ok 4 ad\u0131m \xF6tede.":`${n}\xF6nce uzun baca\u011F\u0131n (anot, art\u0131) deli\u011Fine dokun.`:Ft.tur==="direnc"?Ft.ilk?"\u015Eimdi ikinci baca\u011F\u0131n deli\u011Fine dokun: ilk bacaktan 2 ile 6 ad\u0131m \xF6tede.":`${n}birinci baca\u011F\u0131n deli\u011Fine dokun.`:Ft.ilk?"\u015Eimdi kablonun \xF6b\xFCr ucunun tak\u0131laca\u011F\u0131 pine ya da deli\u011Fe dokun.":`${n}kablonun ba\u015Flayaca\u011F\u0131 pine ya da deli\u011Fe dokun.`}var jg=0;function Ar(n=""){let t=mt("#yonerge");t.hidden=!Ft,Ft&&(clearTimeout(jg),t.classList.toggle("gecersiz",!!n),mt("#yonerge-ikon").innerHTML=n?Jn.hata||"":Jn.sec||"",mt("#yonerge-metin").textContent=n?`Olmaz: ${n}`:If(),n&&(jg=setTimeout(()=>Ar(),3200)))}function E0(n){Ar(n),We(`Olmaz: ${n}`)}function T0(n,t={}){oe&&(Ft&&Sr(!0),ys(!1),Er(),Ft={tur:n,renk:t.renk,deger:t.deger,ilk:null,tasinan:t.tasinan||null,onceki:t.onceki||Rf()},kf(),h1(),Ar(),jn(mi==="fare"||mi==="klavye"?Be:null,mi,!0),We(If()))}function Sr(n){if(!Ft)return;let t=Ft.tasinan;n&&t&&(te.parcalar.splice(Math.min(t.indeks,te.parcalar.length),0,t.parca),qs(!1)),Ft=null,Er(),kf(),Ar(),g0(),jn(mi==="dokunma"?null:Be,mi,!0),n&&We(t?"Ta\u015F\u0131ma iptal edildi; par\xE7a eski yerinde":"Yerle\u015Ftirme iptal edildi")}function kf(){for(let n of xn("[data-arac]")){let t=n.dataset.deger||"",e=Ft&&!Ft.tasinan&&n.dataset.arac===Ft.tur&&(Ft.tur==="led"?t===Ft.renk:Ft.tur==="direnc"?Number(t)===Ft.deger:!0);n.setAttribute("aria-pressed",String(!!e))}}function Pf(n){if(!Ft)return;let t=Zo(te.parcalar,Ft.tur,Ft.ilk,n);if(!t.gecerli){E0(t.neden),_s();return}if(Ft.tur==="buton"){Qg({tur:"buton",sutun:t.sutun});return}if(!Ft.ilk){Ft.ilk=n,Ar(),_s(),We(`${qe(n,!0)} se\xE7ildi. ${If()}`);return}let e=Ft;Qg(e.tur==="led"?{tur:"led",renk:e.renk,anot:e.ilk,katot:n}:e.tur==="direnc"?{tur:"direnc",deger:e.deger,a:e.ilk,b:n}:{tur:"kablo",renk:e.renk,bas:e.ilk,son:n})}function Qg(n){let t=Ft.tasinan,e=Ft.onceki,i={id:t?t.parca.id:m1(n.tur),...n};t?te.parcalar.splice(Math.min(t.indeks,te.parcalar.length),0,i):te.parcalar.push(i),Ua(e),Ft=null,Er(),kf(),Ar(),d1(),jn(mi==="dokunma"?null:Be,mi,!0),qs();let s=Te.uyarilar.find(r=>r.seviye!=="bilgi"&&r.parcalar.includes(i.id));We(`${Qi(i)} ${t?"ta\u015F\u0131nd\u0131":"tak\u0131ld\u0131"}.${s?` ${Vu[s.seviye]}: ${s.metin}`:""}`)}function D1(n){let t=nn(n),e=mt("#secici-izgara"),i=(r,a)=>{let o=Zo(te.parcalar,Ft.tur,Ft.ilk,r),l=nn(r),c=o.gecerli?"":/dolu|kablo var/.test(o.neden)?"dolu":/aynı yere/.test(o.neden)?"ayn\u0131":o.mesafe!==void 0?o.mesafe<2?"yak\u0131n":"uzak":"olmaz",u=l.tur==="pin"?Aa(l.pin).replace(". pin","").replace(" (RX)","").replace(" (TX)","").replace("bo\u015F pin (NC)","NC"):l.tur==="delik"?`${l.sutun}${l.satir}`:String(l.sutun);return`<button type="button" data-secici="${r}"${o.gecerli?"":" disabled"}${a?' class="yakin-hedef"':""} aria-label="${di(qe(r,!0)+(o.gecerli?"":`: ${o.neden}`))}">${di(u)}${c?`<small>${c}</small>`:""}</button>`},s="";if(t.tur==="pin"){let r=Qo.find(l=>l.includes(n)),a=r.indexOf(n),o=Math.max(0,Math.min(r.length-5,a-2));e.style.gridTemplateColumns="repeat(5,minmax(0,1fr))",s=r.slice(o,o+5).map(l=>i(l,l===n)).join(""),mt("#secici-baslik").textContent="Hangi pin? Dokundu\u011Fun yerin \xE7evresi"}else{let r=Fu.findIndex(l=>l.includes(n)),a=Math.max(0,Math.min(Fu.length-3,r-1)),o=Math.max(1,Math.min(26,t.sutun-2));e.style.gridTemplateColumns="var(--secici-bas,52px) repeat(5,minmax(0,1fr))",s='<span class="bas"></span>'+[0,1,2,3,4].map(l=>`<span class="bas">${o+l}</span>`).join("");for(let l of Fu.slice(a,a+3)){s+=`<span class="bas">${y1(l)}</span>`;for(let c=0;c<5;c++){let u=l.find(d=>nn(d).sutun===o+c);s+=u?i(u,u===n):'<span class="bosluk" aria-hidden="true"></span>'}}mt("#secici-baslik").textContent="Hangi delik? Dokundu\u011Fun yerin \xE7evresi"}e.innerHTML=s,mt("#secici").hidden=!1,jn(n,"dokunma"),(e.querySelector(".yakin-hedef:not(:disabled)")||e.querySelector("button:not(:disabled)")||mt("#secici-kapat")).focus({preventScroll:!0}),We(`Dokundu\u011Fun yerin \xE7evresi a\xE7\u0131ld\u0131: ${t.tur==="pin"?"pini":"deli\u011Fi"} listeden se\xE7`)}function Er(){let n=mt("#secici");n&&!n.hidden&&(n.hidden=!0,mt("#secici-izgara").innerHTML="")}mt("#secici-izgara").addEventListener("click",n=>{let t=n.target.closest("[data-secici]");if(!t||t.disabled)return;let e=t.dataset.secici;Er(),jn(e,"dokunma"),Pf(e)});mt("#secici-kapat").addEventListener("click",()=>{Er(),_s()});mt("#yonerge-iptal").addEventListener("click",()=>Sr(!0));var bf=null;document.addEventListener("pointerdown",n=>{bf=n.target},!0);document.addEventListener("click",n=>{if(n.detail===0)return;let t=n.target.closest?.("#secici, #secim-kart, .rozet-isaret");t&&!(bf&&t.contains(bf))&&(n.stopPropagation(),n.preventDefault())},!0);function Oa(n){let t=wr(n);if(!t){ys();return}es=n,Wu=[],mt("#secim-ad").textContent=Qi(t),mt("#secim-acik").textContent=Cu(t),mt('[data-secim="ters"]').hidden=t.tur!=="led",mt("#secim-kart").hidden=!1,Df(),_s(),We(`${Qi(t)} se\xE7ildi. ${Cu(t)}.`)}function ys(n=!0){es=null,Wu=[];let t=mt("#secim-kart");t&&(t.hidden=!0),Df(),n&&_s()}function R0(n){let t=te.parcalar.findIndex(s=>s.id===n);if(t<0||!oe)return;let e=Rf(),i=te.parcalar[t];te.parcalar.splice(t,1),qs(!1),T0(i.tur,{renk:i.renk,deger:i.deger,tasinan:{parca:i,indeks:t},onceki:e})}function C0(n){let t=wr(n);!t||t.tur!=="led"||(Ua(),[t.anot,t.katot]=[t.katot,t.anot],qs(),Oa(n),We(`LED ters \xE7evrildi: anot (uzun bacak) art\u0131k ${qe(t.anot)}, katot ${qe(t.katot)}`))}function Lf(n){let t=wr(n);t&&(Ua(),te.parcalar=te.parcalar.filter(e=>e.id!==n),$s.delete(n),ys(!1),qs(),We(`${Qi(t)} kald\u0131r\u0131ld\u0131. Geri al ile geri getirebilirsin.`))}mt("#secim-kart").addEventListener("click",n=>{let t=n.target.closest("[data-secim]");if(!t||!es)return;let e=es,i=t.dataset.secim;i==="tasi"&&R0(e),i==="ters"&&C0(e),i==="sil"&&Lf(e),i==="kapat"&&ys()});document.addEventListener("click",n=>{let t=n.target.closest("[data-hazir]");if(t){let s=cf[t.dataset.hazir];Ft&&Sr(!0),Ua(),te=Ra(s),ys(!1),qs(),oe?.kameraGit(yu.genel),We(`${s.ad} devresi y\xFCklendi. Geri al ile \xF6nceki devrene d\xF6nebilirsin.`);return}let e=n.target.closest("[data-arac]");if(e&&!e.disabled){if(e.getAttribute("aria-pressed")==="true"){Sr(!0);return}let s=e.dataset.arac,r=e.dataset.deger;T0(s,s==="led"?{renk:r}:s==="direnc"?{deger:Number(r)}:s==="kablo"?{renk:Mr}:{});return}let i=n.target.closest("[data-liste]");if(i){let s=i.dataset.id,r=i.dataset.liste;r==="sec"&&(Oa(s),Hn.matches&&yi!=="kisa"&&is("kisa")),r==="tasi"&&R0(s),r==="ters"&&C0(s),r==="sil"&&Lf(s)}});function I0(){for(let t of xn('input[name="kablo-renk"]'))t.checked=t.value===Mr;let n=mt('[data-arac="kablo"]');n&&n.style.setProperty("--kablo",$d[Mr])}function Na(n=!1){let t=new Map;for(let o of Te?.uyarilar||[])if(o.seviye!=="bilgi")for(let l of o.parcalar)t.get(l)!=="hata"&&t.set(l,o.seviye);let e=!oe,i=JSON.stringify([te.parcalar,[...t],e]);if(!n&&i===Na.imza)return;Na.imza=i;let s=mt("#parca-listesi");mt("#parca-sayi").textContent=`(${te.parcalar.length})`;let r=document.activeElement?.closest?.("[data-liste]"),a=r&&s.contains(r)?[r.dataset.liste,r.dataset.id]:null;te.parcalar.length?s.innerHTML=te.parcalar.map(o=>{let l=di(Qi(o)),c=t.get(o.id);return`<li data-id="${o.id}">${gg(o)}<span class="parca-ad">${l}${c?`<span class="parca-sorun ${c}">${Jn[c]||""}${Vu[c]}</span>`:""}</span><span class="parca-acik">${di(Cu(o))}</span><div class="parca-dugmeler"><button type="button" class="dugme kucuk" data-liste="sec" data-id="${o.id}" aria-label="Se\xE7: ${l}">Se\xE7</button>`+(e?"":`<button type="button" class="dugme kucuk" data-liste="tasi" data-id="${o.id}" aria-label="Ta\u015F\u0131: ${l}">${Jn.tasi||""}Ta\u015F\u0131</button>`)+(o.tur==="led"?`<button type="button" class="dugme kucuk" data-liste="ters" data-id="${o.id}" aria-label="Ters \xE7evir: ${l}">${Jn.ters||""}Ters \xE7evir</button>`:"")+`<button type="button" class="dugme kucuk" data-liste="sil" data-id="${o.id}" aria-label="Sil: ${l}">${Jn.sil||""}Sil</button></div></li>`}).join(""):s.innerHTML='<li class="bos-mesaj">Breadboard bo\u015F. Haz\u0131r devre y\xFCkle ya da yukar\u0131dan bir par\xE7a se\xE7.</li>',Df(),a&&(s.querySelector(`[data-liste="${a[0]}"][data-id="${a[1]}"]`)||s.querySelector("[data-liste]")||mt("#sekme-kur"))?.focus({preventScroll:!0})}function Df(){for(let n of xn("#parca-listesi li[data-id]"))n.dataset.id===es?n.setAttribute("aria-current","true"):n.removeAttribute("aria-current")}function Nf(){let n=te.program,t=yr(te.parcalar);for(let i of xn('input[name="program"]'))i.checked=i.value===n.tur;for(let i of xn("[data-program-ayar]"))i.hidden=i.dataset.programAyar!==n.tur;let e=(i,s,r)=>{for(let a of xn(`input[name="${i}"]`))a.checked=Number(a.value)===s,a.disabled=Number(a.value)===r};n.tur==="blink"&&(e("blink-pin",n.pin),e("bekleme",n.bekleme)),n.tur==="buton"&&(e("buton-giris",n.giris,n.cikis),e("buton-cikis",n.cikis,n.giris));for(let i of xn("[data-elle]")){let s=Number(i.dataset.elle),r=!!(n.tur==="elle"&&n.seviyeler[s]),a=t.has(String(s));i.setAttribute("aria-pressed",String(r)),i.querySelector("span").textContent=r?"HIGH":"LOW",i.classList.toggle("kablolu",a),i.setAttribute("aria-label",`${s}. pin: ${r?"HIGH":"LOW"}${a?", kablo tak\u0131l\u0131":""}`)}}function ps(n,t){Ua(),te.program=lf(n),Nf(),Uf(),Of(!0),ns(),Cf(),t&&We(t)}document.addEventListener("change",n=>{let t=n.target,e=te.program;if(t.name==="program"){let i=e.tur==="blink"?e.pin:e.tur==="buton"?e.cikis:13;t.value==="blink"&&ps({tur:"blink",pin:i,bekleme:1e3},`Program: yan\u0131p s\xF6nen LED, ${i}. pin`),t.value==="buton"&&ps({tur:"buton",giris:i===2?3:2,cikis:i},"Program: butonla LED"),t.value==="elle"&&ps({tur:"elle",seviyeler:{}},"Program: elle; pinleri HIGH ya da LOW yap")}t.name==="blink-pin"&&ps({...e,pin:Number(t.value)},`LED pini ${t.value}`),t.name==="bekleme"&&ps({...e,bekleme:Number(t.value)},`Bekleme ${mf(Number(t.value)/1e3,Number(t.value)%1e3?1:0)} saniye`),t.name==="buton-giris"&&ps({...e,giris:Number(t.value)},`Giri\u015F pini ${t.value}`),t.name==="buton-cikis"&&ps({...e,cikis:Number(t.value)},`\xC7\u0131k\u0131\u015F pini ${t.value}`),t.name==="kablo-renk"&&(Mr=t.value,I0(),Cf(),Ft?.tur==="kablo"&&!Ft.tasinan&&(Ft.renk=Mr,Ar()))});document.addEventListener("click",n=>{let t=n.target.closest("[data-elle]");if(!t||te.program.tur!=="elle")return;let e=Number(t.dataset.elle),i={...te.program.seviyeler};i[e]?delete i[e]:i[e]=!0,ps({tur:"elle",seviyeler:i},`${e}. pin ${i[e]?"HIGH":"LOW"}`)});function Uf(){ms=Cg(te.program,te.parcalar);let n=Ig(ms.satirlar);mt("#kod-satirlar").innerHTML=ms.satirlar.map((t,e)=>`<li class="kod-satir${t.k.trim()?"":" bos"}" data-no="${e+1}"><code>${di(n[e])}</code><span class="tr">${di(t.t)}</span></li>`).join(""),k0()}function k0(){let n=[];if(xi&&Te?.calisiyor&&ms){let e=te.program;e.tur==="blink"?n=el?ms.vurgu.yuksek:ms.vurgu.dusuk:e.tur==="buton"?n=Te.cikislar[e.cikis]==="HIGH"?ms.vurgu.yuksek:ms.vurgu.dusuk:n=ms.vurgu.yuksek}let t=new Set(n);for(let e of xn("#kod-satirlar .kod-satir"))e.classList.toggle("calisiyor",t.has(Number(e.dataset.no)))}var Uu=0,t0="",Ca=0;function Of(n=!1){let t=te.program,e=xi&&t.tur==="blink"?`b${t.bekleme}:${t.pin}`:"";if(e===t0&&!n||(t0=e,clearTimeout(Uu),Uu=0,el=!0,!e))return;let i=()=>{el=!el,ns(),Uu=setTimeout(i,te.program.bekleme)};Uu=setTimeout(i,t.bekleme)}function N1(){let n=xi&&Te?.calisiyor&&Te.giris?.deger==="KARARSIZ";n&&!Ca&&(Ca=setTimeout(function(){y0=Math.random()<.5,Ca=0,ns()},90+Math.random()*380)),!n&&Ca&&(clearTimeout(Ca),Ca=0)}function U1(n){xi=n;let t=mt("#calistir");t.toggleAttribute("data-calisiyor",n),t.innerHTML=`${n?Jn.dur||"":Jn.oynat||""}<span>${n?"Durdur":"\xC7al\u0131\u015Ft\u0131r"}</span>`,Of(!0),ns(),We(n?Te.durdu==="kisa-devre"?"K\u0131sa devre var: devre \xE7al\u0131\u015Fm\u0131yor. Durum b\xF6l\xFCm\xFCne bak.":Te.durdu==="reset"?"RESET pini GND'ye ba\u011Fl\u0131: program \xE7al\u0131\u015Fm\u0131yor":`Program \xE7al\u0131\u015F\u0131yor. ${Te.tamam||""}`:"Program durdu")}mt("#calistir").addEventListener("click",()=>U1(!xi));mt("#geri-al").addEventListener("click",x0);mt("#sifirla").addEventListener("click",()=>{if(Ft&&Sr(!0),!te.parcalar.length){We("Breadboard zaten bo\u015F");return}Ua(),te.parcalar=[],$s.clear(),ys(!1),qs(),We("Breadboard bo\u015Falt\u0131ld\u0131. Geri al ile geri d\xF6nebilirsin.")});var Ui=mt("#buton-bas");function Xu(n){$s.clear();for(let t of te.parcalar)t.tur==="buton"&&(n&&$s.add(t.id),pi.get(t.id)?.nesne.userData.bas?.(n));Ui.toggleAttribute("data-basili",n),ns(),n&&!xi&&We("Program \xE7al\u0131\u015Fm\u0131yor: \xF6nce \xC7al\u0131\u015Ft\u0131r'a bas")}function O1(n){$s.add(n),pi.get(n)?.nesne.userData.bas?.(!0),ns(),setTimeout(()=>{$s.delete(n),pi.get(n)?.nesne.userData.bas?.(!1),ns()},700)}Ui.addEventListener("pointerdown",n=>{Ui.setPointerCapture?.(n.pointerId),Xu(!0)});for(let n of["pointerup","pointercancel","lostpointercapture"])Ui.addEventListener(n,()=>{Ui.hasAttribute("data-basili")&&Xu(!1)});Ui.addEventListener("keydown",n=>{(n.key===" "||n.key==="Enter")&&!n.repeat&&(n.preventDefault(),Xu(!0))});Ui.addEventListener("keyup",n=>{(n.key===" "||n.key==="Enter")&&Xu(!1)});Ui.addEventListener("contextmenu",n=>n.preventDefault());function qs(n=!0){b0(),Nf(),Uf(),Of(),ns(),Na();let t=!te.parcalar.some(e=>e.tur==="buton");Ui.hidden!==t&&(Ui.hidden=t,Ff()),n&&Cf()}function ns(){if(Te=Tg(te,{calisiyor:xi,faz:el,basili:[...$s],kararsiz:y0}),oe){let t=[];for(let e of te.parcalar){if(e.tur!=="led")continue;let i=pi.get(e.id),s=Te.ledler[e.id],r=s?.yanik?s.parlaklik:0;i?.nesne.userData.ac(r),i&&r>0&&t.push([i.nesne,r])}t.sort((e,i)=>i[1]-e[1]),v0.forEach((e,i)=>{let s=t[i];if(!s){e.intensity=0;return}e.color.copy(s[0].userData.renk),e.position.set(s[0].position.x,s[0].position.y+s[0].userData.lambaY,s[0].position.z),e.intensity=380*s[1]}),tl.ledOn(xi&&Te.durdu!=="kisa-devre"),tl.ledL(!!Te.l13)}k0(),Pa();let n=oe?vf():!1;Na(),N1(),n&&_s(),oe?.iste()}function F1(){let n=Te.uyarilar,t=n.filter(r=>r.seviye==="hata").length,e=n.filter(r=>r.seviye==="uyari").length,i=t+e,s=t?"hata":e?"uyari":null;return xi?Te.durdu==="kisa-devre"?{sinif:"hata",ikon:"hata",kisa:"K\u0131sa devre: devre durdu",uzun:"K\u0131sa devre var: devre durdu. A\u015Fa\u011F\u0131daki uyar\u0131y\u0131 d\xFCzelt; d\xFCzelince devre kendili\u011Finden yeniden \xE7al\u0131\u015F\u0131r."}:Te.durdu==="reset"?{sinif:"hata",ikon:"hata",kisa:"RESET: program durdu",uzun:"RESET pini GND'ye ba\u011Fl\u0131: kart s\xFCrekli ba\u015Ftan ba\u015Fl\u0131yor, program \xE7al\u0131\u015Fm\u0131yor."}:i?{sinif:s,ikon:s,kisa:`\xC7al\u0131\u015F\u0131yor \xB7 ${i} sorun`,uzun:`Devre \xE7al\u0131\u015F\u0131yor ama ${i} sorun var.`}:Te.tamam?{sinif:"tamam",ikon:"tamam",kisa:"Devre do\u011Fru, \xE7al\u0131\u015F\u0131yor",uzun:Te.tamam}:{sinif:"bekliyor",ikon:"oynat",kisa:"\xC7al\u0131\u015F\u0131yor",uzun:"Devre \xE7al\u0131\u015F\u0131yor."}:{sinif:s||"bekliyor",ikon:s||"bekliyor",kisa:i?`Durdu \xB7 ${i} sorun`:"Durdu: \xC7al\u0131\u015Ft\u0131r'a bas",uzun:`Devre durdu. \xC7al\u0131\u015Ft\u0131r'a bas\u0131nca program \xE7al\u0131\u015F\u0131r.${i?` \xC7al\u0131\u015Ft\u0131rmadan \xF6nce a\u015Fa\u011F\u0131daki ${i} soruna bak.`:""}`}}function Pa(n=!1){if(!Te)return;let t=F1(),e=Te.uyarilar,i=ge.dataset.sinif||"6",s=e.filter(v=>v.seviye!=="bilgi"),r=s.some(v=>v.seviye==="hata"),a=JSON.stringify([t,e.map(v=>[v.seviye,v.metin,v.eylem?.metin,v.parcalar.length]),i,Te.ledler,Te.cikislar,Te.giris,te.program,xi]);if(!n&&a===Pa.imza)return;Pa.imza=a;let o=mt("#durum-cip");o.className=`durum-cip ${t.sinif}`,o.innerHTML=`${Jn[t.ikon]||""}<span>${di(t.kisa)}</span>`,o.setAttribute("aria-label",`Devre durumu: ${t.uzun} Ayr\u0131nt\u0131 i\xE7in dokun.`);let l=mt("#durum-rozet");l.textContent=s.length?String(s.length):"",l.className=`rozet${r?"":" uyari"}`,mt("#sekme-durum").setAttribute("aria-label",s.length?`Durum: ${s.length} sorun`:"Durum"),mt("#durum-ozet").className=`ozet-kutu ${t.sinif}`,mt("#durum-ozet").innerHTML=`${Jn[t.ikon]||""}<span>${di(t.uzun)}</span>`;let c=JSON.stringify(e.map(v=>[v.seviye,v.metin,v.eylem?.metin,v.parcalar]));(n||c!==Pa.ui)&&(Pa.ui=c,mt("#uyarilar").innerHTML=e.length?e.map((v,m)=>`<li class="${v.seviye}">${Jn[v.seviye]||""}<div><span class="seviye-ad">${Vu[v.seviye]}</span><p class="uyari-metin">${di(v.metin)}</p></div>${v.parcalar.length||v.eylem?`<div class="uyari-dugmeler">${v.parcalar.length&&oe?`<button type="button" class="dugme kucuk" data-goster="${m}">Sahnede g\xF6ster</button>`:""}${v.eylem?`<button type="button" class="dugme kucuk birincil" data-uyari-eylem="${m}">${di(v.eylem.metin)}</button>`:""}</div>`:""}</li>`).join(""):`<li class="bilgi">${Jn.tamam||""}<div><span class="seviye-ad">Tamam</span><p class="uyari-metin">Uyar\u0131 yok.</p></div></li>`);let u=te.program,d=[];if(u.tur==="blink"&&d.push([u.pin,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),u.tur==="buton"&&d.push([u.giris,"Giri\u015F (INPUT)"],[u.cikis,"\xC7\u0131k\u0131\u015F (OUTPUT)"]),u.tur==="elle"){let v=yr(te.parcalar);for(let m of fs.slice().reverse())(v.has(String(m))||u.seviyeler[m])&&d.push([m,"\xC7\u0131k\u0131\u015F (OUTPUT)"])}let h=i==="7"||i==="8",f=(v,m)=>{if(!Te.calisiyor)return"Program \xE7al\u0131\u015Fm\u0131yor";if(m.startsWith("Giri\u015F")){let p=Te.giris;return p?p.deger==="KARARSIZ"?"Bo\u015Fta: ne HIGH ne LOW okuyor":`${p.deger} okuyor${h&&Number.isFinite(p.gerilim)?` (${mf(p.gerilim)} V)`:""}`:""}return Te.cikislar[v]==="HIGH"?"HIGH (5 V)":"LOW (0 V)"};mt("#pin-tablo tbody").innerHTML=d.length?d.map(([v,m])=>`<tr><td>${v}. pin</td><td>${m}</td><td>${di(f(v,m))}</td></tr>`).join(""):'<tr><td colspan="3">Programda kullan\u0131lan pin yok.</td></tr>';let g=te.parcalar.filter(v=>v.tur==="led");mt("#led-liste").innerHTML=g.length?g.map(v=>{let m=Te.ledler[v.id]||{},p=m.yanik?m.parlaklik<.3?"\xC7ok s\xF6n\xFCk yan\u0131yor":"Yan\u0131yor":"Yanm\u0131yor",y=h&&m.yanik?` \xB7 ${mf(m.akim)} mA`:"";return`<li><span class="led-nokta" style="background:${vu[v.renk]}" aria-hidden="true"></span><span>${di(Qi(v))}</span><span class="durum-yazi">${p}${y}</span></li>`}).join(""):"<li>Devrede LED yok.</li>"}function P0(){Tf("durum"),!Hn.matches&&ge.dataset.panel==="kapali"&&sl(!0),Hn.matches&&yi==="kisa"&&is("yarim")}mt("#durum-cip").addEventListener("click",()=>{P0(),mt("#sekme-durum").focus({preventScroll:!0})});mt("#uyarilar").addEventListener("click",n=>{let t=n.target.closest("[data-goster]"),e=n.target.closest("[data-uyari-eylem]");if(t){let i=Te.uyarilar[Number(t.dataset.goster)];if(!i)return;Oa(i.parcalar[0]),Wu=i.parcalar.slice(1),_s(),Hn.matches&&yi!=="kisa"&&is("kisa")}if(e){let i=Te.uyarilar[Number(e.dataset.uyariEylem)];i?.eylem?.tur==="blink-pin"&&ps({...te.program,pin:i.eylem.pin},`Program art\u0131k ${i.eylem.pin}. pini yak\u0131p s\xF6nd\xFCr\xFCyor`)}});var e0={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06]};for(let n of xn(".gorunum button"))n.addEventListener("click",()=>{let t=n.dataset.gorunum,e=yu.genel;oe?.kameraGit(e0[t]?{...e,yon:e0[t],yaricap:e.yaricap*(t==="ustten"?1:1.08)}:e);for(let i of xn(".gorunum button"))i.setAttribute("aria-pressed",String(i===n))});mt("#yakinlas")?.addEventListener("click",()=>oe?.yakinlas(.8));mt("#uzaklas")?.addEventListener("click",()=>oe?.yakinlas(1.25));mt("#rontgen-dugme").addEventListener("click",n=>{if(!Xs)return;let t=n.currentTarget.getAttribute("aria-pressed")!=="true";n.currentTarget.setAttribute("aria-pressed",String(t)),Xs.rontgen(t),oe.golgeYenile(),We(t?"R\xF6ntgen a\xE7\u0131k: breadboard'un i\xE7indeki metal \u015Feritler g\xF6r\xFCn\xFCyor":"R\xF6ntgen kapal\u0131")});var Mf=mt(".ust-bant");function n0(){let n=t=>{let e=mt(t);return!!e&&!e.hidden};Mf.classList.toggle("dolu",n("#yonerge")||n("#secim-kart")||n("#secici")),Mf.classList.toggle("secici-acik",n("#secici"))}if(Mf&&"MutationObserver"in window){let n=new MutationObserver(n0);for(let t of["#yonerge","#secim-kart","#secici"]){let e=mt(t);e&&n.observe(e,{attributes:!0,attributeFilter:["hidden"]})}n0()}function Ff(){let n=mt(".sahne-alani"),t=mt(".sahne-arac");!n||!t||(n.classList.remove("dar"),t.scrollWidth>t.clientWidth+1&&n.classList.add("dar"))}"ResizeObserver"in window&&new ResizeObserver(()=>Ff()).observe(Ou);var L0=new URLSearchParams(location.search).has("test");I0();Nf();Uf();ns();Na(!0);Ui.hidden=!te.parcalar.some(n=>n.tur==="buton");requestAnimationFrame(()=>setTimeout(x1,20));L0&&(window.ozgurTest={ekran(n,t=3.5){if(!oe)return null;if(n.startsWith("parca:")){let i=M0(n.slice(6));return i?nl(i.sub(new I(0,t,0))):null}let e=dn(n,n.startsWith("p:")?ui:Ve);return e?nl(e):null},adimPiksel:n=>oe?w0(dn(n)):null,durum:()=>JSON.parse(JSON.stringify({parcalar:te.parcalar,program:te.program,calisiyor:xi,sonuc:Te,arac:Ft&&{tur:Ft.tur,ilk:Ft.ilk},secici:!mt("#secici").hidden,secili:es,imlec:Be,kare:A0,kalite:oe?.kalite(),gercekci:La?.durum()})),gorunum:n=>La?.gorunum(n)});
