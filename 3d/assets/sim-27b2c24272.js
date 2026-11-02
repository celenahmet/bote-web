var gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,yu=1,Md=2;var Va=1,El=2,Nr=3,xs=0,mn=1,mi=2,Li=0,Ur=1,zn=2,vu=3,bu=4,Sd=5;var Us=100,wd=101,Ad=102,Ed=103,Td=104,Rd=200,Cd=201,Id=202,Pd=203,Mu=204,Su=205,kd=206,Ld=207,Dd=208,Nd=209,Ud=210,Fd=211,Od=212,Bd=213,zd=214,Ho=0,Wo=1,Xo=2,gr=3,Yo=4,qo=5,Ko=6,Zo=7,Tl=0,Vd=1,Gd=2,gi=0,wu=1,Au=2,Eu=3,Tu=4,Ru=5,Cu=6,Ga=7;var Iu=300,ys=301,Fs=302,Rl=303,Cl=304,Ha=306,_r=1e3,Ci=1001,$o=1002,fn=1003,Hd=1004;var Wa=1005;var rn=1006,Il=1007;var Di=1008;var In=1009,Pu=1010,ku=1011,Fr=1012,Pl=1013,_i=1014,$n=1015,xi=1016,kl=1017,Ll=1018,Or=1020,Lu=35902,Du=35899,Nu=1021,Uu=1022,Jn=1023,Pi=1026,vs=1027,Dl=1028,Nl=1029,bs=1030,Ul=1031;var Fl=1033,Xa=33776,Ya=33777,qa=33778,Ka=33779,Ol=35840,Bl=35841,zl=35842,Vl=35843,Gl=36196,Hl=37492,Wl=37496,Xl=37488,Yl=37489,Za=37490,ql=37491,Kl=37808,Zl=37809,$l=37810,Jl=37811,jl=37812,Ql=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,ac=37820,oc=37821,lc=36492,cc=36494,uc=36495,hc=36283,dc=36284,$a=36285,fc=36286;var la=2300,Jo=2301,Vo=2302,ou=2303,lu=2400,cu=2401,uu=2402;var Wd=3200;var Ja=0,Xd=1,yi="",sn="srgb",ca="srgb-linear",ua="linear",De="srgb";var Go=7680;var Yd=519,qd=512,Kd=513,Zd=514,pc=515,$d=516,Jd=517,mc=518,jd=519,Fu=35044;var Ou="300 es",ci=2e3,xr=2001;function Gp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){let i=ha("canvas");return i.style.display="block",i}var Fh={},yr=null;function da(...i){let t="THREE."+i.shift();yr?yr("log",t,...i):console.log(t,...i)}function tf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=tf(i);let t="THREE."+i.shift();if(yr)yr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=tf(i);let t="THREE."+i.shift();if(yr)yr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Is(...i){let t=i.join(" ");t in Fh||(Fh[t]=!0,ae(...i))}function ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nf={[Ho]:Wo,[Xo]:Ko,[Yo]:Zo,[gr]:qo,[Wo]:Ho,[Ko]:Xo,[Zo]:Yo,[qo]:gr},ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,pr=Math.PI/180,vr=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Bu(i,t){return(i%t+t)%t}function Wp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xp(i,t,e){return i!==t?(e-i)/(t-i):0}function ra(i,t,e){return(1-e)*i+e*t}function Yp(i,t,e,n){return ra(i,t,1-Math.exp(-e*n))}function qp(i,t=1){return t-Math.abs(Bu(i,t*2)-t)}function Kp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $p(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jp(i,t){return i+Math.random()*(t-i)}function jp(i){return i*(.5-Math.random())}function Qp(i){i!==void 0&&(Oh=i);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(i){return i*pr}function em(i){return i*vr}function nm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*d,o*u,o*c);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zu={DEG2RAD:pr,RAD2DEG:vr,generateUUID:Ii,clamp:xe,euclideanModulo:Bu,mapLinear:Wp,inverseLerp:Xp,lerp:ra,damp:Yp,pingpong:qp,smoothstep:Kp,smootherstep:Zp,randInt:$p,randFloat:Jp,randFloatSpread:jp,seededRandom:Qp,degToRad:tm,radToDeg:em,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:sm,setQuaternionFromProperEuler:rm,normalize:Ne,denormalize:li},Yu=class Yu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yu.prototype.isVector2=!0;var rt=Yu,Rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(f!==_||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*_;g<0&&(h=-h,d=-d,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),S=Math.sin(b);p=Math.sin(p*b)/S,o=Math.sin(o*b)/S,l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+_*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+_*o;let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+u*f+l*d-c*h,t[e+1]=l*m+u*h+c*f-o*d,t[e+2]=c*m+u*d+o*h-l*f,t[e+3]=u*m-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qu=class qu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qu.prototype.isVector3=!0;var C=qu,Dc=new C,Bh=new Rn,Ku=class Ku{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],b=s[1],S=s[4],M=s[7],E=s[2],x=s[5],T=s[8];return r[0]=a*_+o*b+l*E,r[3]=a*g+o*S+l*x,r[6]=a*p+o*M+l*T,r[1]=c*_+u*b+f*E,r[4]=c*g+u*S+f*x,r[7]=c*p+u*M+f*T,r[2]=h*_+d*b+m*E,r[5]=h*g+d*S+m*x,r[8]=h*p+d*M+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,m=e*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ku.prototype.isMatrix3=!0;var ge=Ku,Nc=new ge,zh=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let i={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===De&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ca]:{primaries:t,whitePoint:n,transfer:ua,toXYZ:zh,fromXYZ:Vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:De,toXYZ:zh,fromXYZ:Vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var Ee=am();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$s===void 0&&($s=ha("canvas")),$s.width=t.width,$s.height=t.height;let s=$s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ha("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},om=0,br=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uc(s[a].image)):r.push(Uc(s[a]))}else r=Uc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var lm=0,Fc=new C,An=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=rn,a=Di,o=Jn,l=In,c=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Ii(),this.name="",this.source=new br(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Iu;An.DEFAULT_ANISOTROPY=1;var Zu=class Zu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,M=(d+1)/2,E=(p+1)/2,x=(u+h)/4,T=(f+_)/4,v=(m+g)/4;return S>M&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=x/n,r=T/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=x/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=v/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zu.prototype.isVector4=!0;var Ye=Zu,Qo=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new An(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new br(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fa=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tl=class extends An{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Al=class Al{constructor(t,e,n,s,r,a,o,l,c,u,f,h,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,d,m,_,g)}set(t,e,n,s,r,a,o,l,c,u,f,h,d,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Al().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Js.setFromMatrixColumn(t,0).length(),r=1/Js.setFromMatrixColumn(t,1).length(),a=1/Js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*f,m=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,m=c*u,_=c*f;e[0]=h+_*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,m=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,d=a*f,m=o*u,_=o*f;e[0]=l*u,e[4]=m*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=m*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+m,e[10]=h-_*f}else if(t.order==="XZY"){let h=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,um)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),es.crossVectors(n,Ln),es.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),es.crossVectors(n,Ln)),es.normalize(),uo.crossVectors(Ln,es),s[0]=es.x,s[4]=uo.x,s[8]=Ln.x,s[1]=es.y,s[5]=uo.y,s[9]=Ln.y,s[2]=es.z,s[6]=uo.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],S=n[7],M=n[11],E=n[15],x=s[0],T=s[4],v=s[8],A=s[12],k=s[1],N=s[5],z=s[9],O=s[13],P=s[2],U=s[6],Z=s[10],K=s[14],ct=s[3],$=s[7],ot=s[11],at=s[15];return r[0]=a*x+o*k+l*P+c*ct,r[4]=a*T+o*N+l*U+c*$,r[8]=a*v+o*z+l*Z+c*ot,r[12]=a*A+o*O+l*K+c*at,r[1]=u*x+f*k+h*P+d*ct,r[5]=u*T+f*N+h*U+d*$,r[9]=u*v+f*z+h*Z+d*ot,r[13]=u*A+f*O+h*K+d*at,r[2]=m*x+_*k+g*P+p*ct,r[6]=m*T+_*N+g*U+p*$,r[10]=m*v+_*z+g*Z+p*ot,r[14]=m*A+_*O+g*K+p*at,r[3]=b*x+S*k+M*P+E*ct,r[7]=b*T+S*N+M*U+E*$,r[11]=b*v+S*z+M*Z+E*ot,r[15]=b*A+S*O+M*K+E*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],b=l*d-c*h,S=o*d-c*f,M=o*h-l*f,E=a*d-c*u,x=a*h-l*u,T=a*f-o*u;return e*(_*b-g*S+p*M)-n*(m*b-g*E+p*x)+s*(m*S-_*E+p*T)-r*(m*M-_*x+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],b=e*o-n*a,S=e*l-s*a,M=e*c-r*a,E=n*l-s*o,x=n*c-r*o,T=s*c-r*l,v=u*_-f*m,A=u*g-h*m,k=u*p-d*m,N=f*g-h*_,z=f*p-d*_,O=h*p-d*g,P=b*O-S*z+M*N+E*k-x*A+T*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return t[0]=(o*O-l*z+c*N)*U,t[1]=(s*z-n*O-r*N)*U,t[2]=(_*T-g*x+p*E)*U,t[3]=(h*x-f*T-d*E)*U,t[4]=(l*k-a*O-c*A)*U,t[5]=(e*O-s*k+r*A)*U,t[6]=(g*M-m*T-p*S)*U,t[7]=(u*T-h*M+d*S)*U,t[8]=(a*z-o*k+c*v)*U,t[9]=(n*k-e*z-r*v)*U,t[10]=(m*x-_*M+p*b)*U,t[11]=(f*M-u*x-d*b)*U,t[12]=(o*A-a*N-l*v)*U,t[13]=(e*N-n*A+s*v)*U,t[14]=(_*S-m*E-g*b)*U,t[15]=(u*E-f*S+h*b)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,m=r*f,_=a*u,g=a*f,p=o*f,b=l*c,S=l*u,M=l*f,E=n.x,x=n.y,T=n.z;return s[0]=(1-(_+p))*E,s[1]=(d+M)*E,s[2]=(m-S)*E,s[3]=0,s[4]=(d-M)*x,s[5]=(1-(h+p))*x,s[6]=(g+b)*x,s[7]=0,s[8]=(m+S)*T,s[9]=(g-b)*T,s[10]=(1-(h+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Js.set(s[0],s[1],s[2]).length(),o=Js.set(s[4],s[5],s[6]).length(),l=Js.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ri.copy(this);let c=1/a,u=1/o,f=1/l;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,e.setFromRotationMatrix(ri),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ci,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===ci)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===xr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ci,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===ci)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===xr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Al.prototype.isMatrix4=!0;var Ce=Al,Js=new C,ri=new Ce,cm=new C(0,0,0),um=new C(1,1,1),es=new C,uo=new C,Ln=new C,Gh=new Ce,Hh=new Rn,hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hm=0,Wh=new C,js=new Rn,Bi=new Ce,ho=new C,Kr=new C,dm=new C,fm=new Rn,Xh=new C(1,0,0),Yh=new C(0,1,0),qh=new C(0,0,1),Kh={type:"added"},pm={type:"removed"},Qs={type:"childadded",child:null},Oc={type:"childremoved",child:null},qe=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new hi,n=new Rn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ge}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Wh.copy(t).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Kr,ho,this.up):Bi.lookAt(ho,Kr,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Bi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.DEFAULT_UP=new C(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=Bu(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bc(a,r,t+1/3),this.g=Bc(a,r,t),this.b=Bc(a,r,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Ee.workingToColorSpace(vn.copy(this),t),Math.round(xe(vn.r*255,0,255))*65536+Math.round(xe(vn.g*255,0,255))*256+Math.round(xe(vn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=sn){Ee.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(fo);let n=ra(ns.h,fo.h,e),s=ra(ns.s,fo.s,e),r=ra(ns.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Zt;Zt.NAMES=sf;var Ps=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ai=new C,zi=new C,zc=new C,Vi=new C,tr=new C,er=new C,Zh=new C,Vc=new C,Gc=new C,Hc=new C,Wc=new Ye,Xc=new Ye,Yc=new Ye,Ri=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ai.subVectors(s,e),zi.subVectors(n,e),zc.subVectors(t,e);let a=ai.dot(ai),o=ai.dot(zi),l=ai.dot(zc),c=zi.dot(zi),u=zi.dot(zc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wc.setScalar(0),Xc.setScalar(0),Yc.setScalar(0),Wc.fromBufferAttribute(t,e),Xc.fromBufferAttribute(t,n),Yc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wc,r.x),a.addScaledVector(Xc,r.y),a.addScaledVector(Yc,r.z),a}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),zi.subVectors(t,e),ai.cross(zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ai.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;tr.subVectors(s,n),er.subVectors(r,n),Vc.subVectors(t,n);let l=tr.dot(Vc),c=er.dot(Vc);if(l<=0&&c<=0)return e.copy(n);Gc.subVectors(t,s);let u=tr.dot(Gc),f=er.dot(Gc);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(tr,a);Hc.subVectors(t,r);let d=tr.dot(Hc),m=er.dot(Hc);if(m>=0&&d<=m)return e.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(er,o);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Zh.subVectors(r,s),o=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(Zh,o);let p=1/(g+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(tr,a).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},En=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),mo.subVectors(this.max,Zr),nr.subVectors(t.a,Zr),ir.subVectors(t.b,Zr),sr.subVectors(t.c,Zr),is.subVectors(ir,nr),ss.subVectors(sr,ir),As.subVectors(nr,sr);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-As.z,As.y,is.z,0,-is.x,ss.z,0,-ss.x,As.z,0,-As.x,-is.y,is.x,0,-ss.y,ss.x,0,-As.y,As.x,0];return!qc(e,nr,ir,sr,mo)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,nr,ir,sr,mo))?!1:(go.crossVectors(is,ss),e=[go.x,go.y,go.z],qc(e,nr,ir,sr,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new C,new C,new C,new C,new C,new C,new C,new C],oi=new C,po=new En,nr=new C,ir=new C,sr=new C,is=new C,ss=new C,As=new C,Zr=new C,mo=new C,go=new C,Es=new C;function qc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Es.fromArray(i,r);let o=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),u=n.dot(Es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var en=new C,_o=new rt,gm=0,bn=class extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pa=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ma=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},_m=new En,$r=new C,Kc=new C,Xi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_m.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(Kc)),this.expandByPoint($r.copy(t.center).sub(Kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xm=0,Kn=new Ce,Zc=new qe,rr=new C,Dn=new En,Jr=new En,dn=new C,$e=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?ma:pa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ge().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Dn.min,Jr.min),Dn.expandByPoint(dn),dn.addVectors(Dn.max,Jr.max),Dn.expandByPoint(dn)):(Dn.expandByPoint(Jr.min),Dn.expandByPoint(Jr.max))}Dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(dn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dn.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(t,c),dn.add(rr)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new C,l[v]=new C;let c=new C,u=new C,f=new C,h=new rt,d=new rt,m=new rt,_=new C,g=new C;function p(v,A,k){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,k),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,k),u.sub(c),f.sub(c),d.sub(h),m.sub(h);let N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(N),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(N),o[v].add(_),o[A].add(_),o[k].add(_),l[v].add(g),l[A].add(g),l[k].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,A=b.length;v<A;++v){let k=b[v],N=k.start,z=k.count;for(let O=N,P=N+z;O<P;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let S=new C,M=new C,E=new C,x=new C;function T(v){E.fromBufferAttribute(s,v),x.copy(E);let A=o[v];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),M.crossVectors(x,A);let N=M.dot(l[v])<0?-1:1;a.setXYZW(v,S.x,S.y,S.z,N)}for(let v=0,A=b.length;v<A;++v){let k=b[v],N=k.start,z=k.count;for(let O=N,P=N+z;O<P;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,f=new C;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new bn(h,u,f)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ga=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new C,wr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=li(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=li(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=li(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=li(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new bn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$c=new C,ym=new C,vm=new ge,Nn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$c.subVectors(n,e).cross(ym.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vm.getNormalMatrix(t),s=this.coplanarPoint($c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bm=0,Zn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Ur,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=Su,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ks=class extends Zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ar,jr=new C,or=new C,lr=new C,cr=new rt,Qr=new rt,rf=new Ce,xo=new C,ta=new C,yo=new C,$h=new rt,Jc=new rt,Jh=new rt,Ar=class extends qe{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new $e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ga(e,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new wr(n,3,0,!1)),ar.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=ar,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;vo(xo.set(-.5,-.5,0),lr,a,or,s,r),vo(ta.set(.5,-.5,0),lr,a,or,s,r),vo(yo.set(.5,.5,0),lr,a,or,s,r),$h.set(0,0),Jc.set(1,0),Jh.set(1,1);let o=t.ray.intersectTriangle(xo,ta,yo,!1,jr);if(o===null&&(vo(ta.set(-.5,.5,0),lr,a,or,s,r),Jc.set(0,1),o=t.ray.intersectTriangle(xo,yo,ta,!1,jr),o===null))return;let l=t.ray.origin.distanceTo(jr);l<t.near||l>t.far||e.push({distance:l,point:jr.clone(),uv:Ri.getInterpolation(jr,xo,ta,yo,$h,Jc,Jh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function vo(i,t,e,n,s,r){cr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Qr.x=r*cr.x-s*cr.y,Qr.y=s*cr.x+r*cr.y):Qr.copy(cr),i.copy(t),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(rf)}var Hi=new C,jc=new C,bo=new C,Mo=new C,as=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jc.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Mo.copy(this.origin).sub(jc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(bo),o=Mo.dot(this.direction),l=-Mo.dot(bo),c=Mo.lengthSq(),u=Math.abs(1-a*a),f,h,d,m;if(u>0)if(f=a*l-o,h=a*o-l,m=r*u,f>=0)if(h>=-m)if(h<=m){let _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(jc).addScaledVector(bo,h),d}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,m=e.x-a.x,_=e.y-a.y,g=e.z-a.z,p=n.x-a.x,b=n.y-a.y,S=n.z-a.z,M=Math.abs(l),E=Math.abs(c),x=Math.abs(u),T,v,A,k,N,z,O,P,U,Z,K,ct;if(M>=E&&M>=x?(A=l,z=f,U=m,ct=p,l>=0?(T=c,v=u,k=h,N=d,O=_,P=g,Z=b,K=S):(T=u,v=c,k=d,N=h,O=g,P=_,Z=S,K=b)):E>=x?(A=c,z=h,U=_,ct=b,c>=0?(T=u,v=l,k=d,N=f,O=g,P=m,Z=S,K=p):(T=l,v=u,k=f,N=d,O=m,P=g,Z=p,K=S)):(A=u,z=d,U=g,ct=S,u>=0?(T=l,v=c,k=f,N=h,O=m,P=_,Z=p,K=b):(T=c,v=l,k=h,N=f,O=_,P=m,Z=b,K=p)),A===0)return null;let $=T/A,ot=v/A,at=1/A,Yt=k-$*z,Lt=N-ot*z,_e=O-$*U,pe=P-ot*U,re=Z-$*ct,et=K-ot*ct,it=re*pe-et*_e,vt=Yt*et-Lt*re,Kt=_e*Lt-pe*Yt;if(s){if(it<0||vt<0||Kt<0)return null}else if((it<0||vt<0||Kt<0)&&(it>0||vt>0||Kt>0))return null;let At=it+vt+Kt;if(At===0)return null;let Ot=at*(it*z+vt*U+Kt*ct);return(At>0?Ot<0:Ot>0)?null:this.at(Ot/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jh=new Ce,Ts=new as,So=new Xi,Qh=new C,wo=new C,Ao=new C,Eo=new C,Qc=new C,To=new C,td=new C,Ro=new C,Ut=class extends qe{constructor(t=new $e,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Qc.fromBufferAttribute(f,t),a?To.addScaledVector(Qc,u):To.addScaledVector(Qc.sub(e),u))}e.add(To)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(So.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(So,Qh)===null||Ts.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(jh.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=a[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=b,E=S;M<E;M+=3){let x=o.getX(M),T=o.getX(M+1),v=o.getX(M+2);s=Co(this,p,t,n,c,u,f,x,T,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let b=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);s=Co(this,a,t,n,c,u,f,b,S,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=a[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=b,E=S;M<E;M+=3){let x=M,T=M+1,v=M+2;s=Co(this,p,t,n,c,u,f,x,T,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let b=g,S=g+1,M=g+2;s=Co(this,a,t,n,c,u,f,b,S,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Mm(i,t,e,n,s,r,a,o){let l;if(t.side===mn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===xs,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:i}}function Co(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wo),i.getVertexPosition(l,Ao),i.getVertexPosition(c,Eo);let u=Mm(i,t,e,n,wo,Ao,Eo,td);if(u){let f=new C;Ri.getBarycoord(td,wo,Ao,Eo,f),s&&(u.uv=Ri.getInterpolatedAttribute(s,o,l,c,f,new rt)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,f,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new C,materialIndex:0};Ri.getNormal(wo,Ao,Eo,h.normal),u.face=h,u.barycoord=f}return u}var _a=class extends An{constructor(t=null,e=1,n=1,s,r,a,o,l,c=fn,u=fn,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ur=new Ce,ed=new Ce,Io=[],nd=new En,Sm=new Ce,ea=new Ut,na=new Xi,di=class extends Ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),nd.copy(t.boundingBox).applyMatrix4(ur),this.boundingBox.union(nd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),na.copy(t.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),t.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ur),ed.multiplyMatrices(n,ur),ea.matrixWorld=ed,ea.raycast(t,Io);for(let a=0,o=Io.length;a<o;a++){let l=Io[a];l.instanceId=r,l.object=this,e.push(l)}Io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _a(new Float32Array(s*this.count),s,this.count,Dl,$n));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new Xi,wm=new rt(.5,.5),Po=new C,Tr=class{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],b=r[12],S=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,d-u,p-m,E-b).normalize(),s[1].setComponents(c+a,d+u,p+m,E+b).normalize(),s[2].setComponents(c+o,d+f,p+_,E+S).normalize(),s[3].setComponents(c-o,d-f,p-_,E-S).normalize(),n)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,d-h,p-g,E-M).normalize();else if(s[4].setComponents(c-l,d-h,p-g,E-M).normalize(),e===ci)s[5].setComponents(c+l,d+h,p+g,E+M).normalize();else if(e===xr)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);let e=wm.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rr=class extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},el=new C,nl=new C,id=new Ce,ia=new as,ko=new Xi,tu=new C,sd=new C,il=class extends qe{constructor(t=new $e,e=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)el.fromBufferAttribute(e,s-1),nl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=el.distanceTo(nl);t.setAttribute("lineDistance",new Te(n,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;id.copy(s).invert(),ia.copy(t.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){let p=u.getX(_),b=u.getX(_+1),S=Lo(this,t,ia,l,p,b,_);S&&e.push(S)}if(this.isLineLoop){let _=u.getX(m-1),g=u.getX(d),p=Lo(this,t,ia,l,_,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m-1;_<g;_+=c){let p=Lo(this,t,ia,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Lo(this,t,ia,l,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(el.fromBufferAttribute(o,s),nl.fromBufferAttribute(o,r),e.distanceSqToSegment(el,nl,tu,sd)>n)return;tu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tu);if(!(c<t.near||c>t.far))return{distance:c,point:sd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var rd=new C,ad=new C,xa=class extends il{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)rd.fromBufferAttribute(e,s),ad.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rd.distanceTo(ad);t.setAttribute("lineDistance",new Te(n,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ya=class extends An{constructor(t=[],e=ys,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},os=class extends An{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends An{constructor(t,e,n=_i,s,r,a,o=fn,l=fn,c,u=Pi,f=1){if(u!==Pi&&u!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new br(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sl=class extends ls{constructor(t,e=_i,n=ys,s,r,a=fn,o=fn,l,c=Pi){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},va=class extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ye=class i extends $e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function m(_,g,p,b,S,M,E,x,T,v,A){let k=M/T,N=E/v,z=M/2,O=E/2,P=x/2,U=T+1,Z=v+1,K=0,ct=0,$=new C;for(let ot=0;ot<Z;ot++){let at=ot*N-O;for(let Yt=0;Yt<U;Yt++){let Lt=Yt*k-z;$[_]=Lt*b,$[g]=at*S,$[p]=P,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[p]=x>0?1:-1,u.push($.x,$.y,$.z),f.push(Yt/T),f.push(1-ot/v),K+=1}}for(let ot=0;ot<v;ot++)for(let at=0;at<T;at++){let Yt=h+at+U*ot,Lt=h+at+U*(ot+1),_e=h+(at+1)+U*(ot+1),pe=h+(at+1)+U*ot;l.push(Yt,Lt,pe),l.push(Lt,_e,pe),ct+=6}o.addGroup(d,ct,A),d+=ct,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ls=class i extends $e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,u=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},an=class i extends $e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],m=0,_=[],g=n/2,p=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function b(){let M=new C,E=new C,x=0,T=(e-t)/n;for(let v=0;v<=r;v++){let A=[],k=v/r,N=k*(e-t)+t;for(let z=0;z<=s;z++){let O=z/s,P=O*l+o,U=Math.sin(P),Z=Math.cos(P);E.x=N*U,E.y=-k*n+g,E.z=N*Z,f.push(E.x,E.y,E.z),M.set(U,T,Z).normalize(),h.push(M.x,M.y,M.z),d.push(O,1-k),A.push(m++)}_.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let k=_[A][v],N=_[A+1][v],z=_[A+1][v+1],O=_[A][v+1];(t>0||A!==0)&&(u.push(k,N,O),x+=3),(e>0||A!==r-1)&&(u.push(N,z,O),x+=3)}c.addGroup(p,x,0),p+=x}function S(M){let E=m,x=new rt,T=new C,v=0,A=M===!0?t:e,k=M===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,g*k,0),h.push(0,k,0),d.push(.5,.5),m++;let N=m;for(let z=0;z<=s;z++){let P=z/s*l+o,U=Math.cos(P),Z=Math.sin(P);T.x=A*Z,T.y=g*k,T.z=A*U,f.push(T.x,T.y,T.z),h.push(0,k,0),x.x=U*.5+.5,x.y=Z*.5*k+.5,d.push(x.x,x.y),m++}for(let z=0;z<s;z++){let O=E+z,P=N+z;M===!0?u.push(P,P+1,O):u.push(P+1,P,O),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Do=new C,No=new C,eu=new C,Uo=new Ri,ba=class extends $e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(pr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:g,c:p}=Uo;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Uo.getNormal(eu),f[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){let S=(b+1)%3,M=f[b],E=f[S],x=Uo[u[b]],T=Uo[u[S]],v=`${M}_${E}`,A=`${E}_${M}`;A in h&&h[A]?(eu.dot(h[A].normal)<=r&&(d.push(x.x,x.y,x.z),d.push(T.x,T.y,T.z)),h[A]=null):v in h||(h[v]={index0:c[b],index1:c[S],normal:eu.clone()})}}for(let m in h)if(h[m]){let{index0:_,index1:g}=h[m];Do.fromBufferAttribute(o,_),No.fromBufferAttribute(o,g),d.push(Do.x,Do.y,Do.z),d.push(No.x,No.y,No.z)}this.setAttribute("position",new Te(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new Ce;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rl=class extends Cr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var od=new C,ld=new C,nu=new Vu,iu=new Vu,su=new Vu,Ir=class extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ld.subVectors(s[0],s[1]).add(s[0]),c=ld);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(od.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=od),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),nu.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,_,g),iu.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,_,g),su.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(nu.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),iu.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),su.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(nu.calc(l),iu.calc(l),su.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Am(i,t){let e=1-i;return e*e*t}function Em(i,t){return 2*(1-i)*i*t}function Tm(i,t){return i*i*t}function aa(i,t,e,n){return Am(i,t)+Em(i,e)+Tm(i,n)}function Rm(i,t){let e=1-i;return e*e*e*t}function Cm(i,t){let e=1-i;return 3*e*e*i*t}function Im(i,t){return 3*(1-i)*i*i*t}function Pm(i,t){return i*i*i*t}function oa(i,t,e,n,s){return Rm(i,t)+Cm(i,e)+Im(i,n)+Pm(i,s)}var Ma=class extends Fn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(oa(t,s.x,r.x,a.x,o.x),oa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends Fn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(oa(t,s.x,r.x,a.x,o.x),oa(t,s.y,r.y,a.y,o.y),oa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sa=class extends Fn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Fn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends Fn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(aa(t,s.x,r.x,a.x),aa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Fn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(aa(t,s.x,r.x,a.x),aa(t,s.y,r.y,a.y),aa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(cd(o,l.x,c.x,u.x,f.x),cd(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},ll=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:Ir,CubicBezierCurve:Ma,CubicBezierCurve3:al,EllipseCurve:Cr,LineCurve:Sa,LineCurve3:ol,QuadraticBezierCurve:wa,QuadraticBezierCurve3:Aa,SplineCurve:Ea}),cl=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ll[s.type]().fromJSON(s))}return this}},cs=class extends cl{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Sa(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new wa(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ma(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Cr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},fi=class extends cs{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new cs().fromJSON(s))}return this}};function km(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=af(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Fm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){let d=i[h],m=i[h+1];d<o&&(o=d),m<l&&(l=m),d>u&&(u=d),m>f&&(f=m)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ta(r,a,e,o,l,c,0),a}function af(i,t,e,n,s){let r;if(s===Km(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ud(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ud(a/n|0,i[a],i[a+1],r);return r&&Pr(r,r.next)&&(Ca(r),r=r.next),r}function Ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||Ke(e.prev,e,e.next)===0)){if(Ca(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ta(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Dm(i,n,s,r):Lm(i)){t.push(l.i,i.i,c.i),Ca(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Nm(Ds(i),t),Ta(i,t,e,n,s,r,2)):a===2&&Um(i,t,e,n,s,r):Ta(Ds(i),t,e,n,s,r,1);break}}}function Lm(i){let t=i.prev,e=i,n=i.next;if(Ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&sa(s,o,r,l,a,c,m.x,m.y)&&Ke(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Dm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ke(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),m=Math.min(u,f,h),_=Math.max(o,l,c),g=Math.max(u,f,h),p=hu(d,m,t,e,n),b=hu(_,g,t,e,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=p&&M&&M.z<=b;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&sa(o,u,l,f,c,h,S.x,S.y)&&Ke(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&sa(o,u,l,f,c,h,M.x,M.y)&&Ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==a&&sa(o,u,l,f,c,h,S.x,S.y)&&Ke(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&sa(o,u,l,f,c,h,M.x,M.y)&&Ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Pr(n,s)&&lf(n,e,e.next,s)&&Ra(n,s)&&Ra(s,n)&&(t.push(n.i,e.i,s.i),Ca(e),Ca(e.next),e=i=s),e=e.next}while(e!==i);return Ds(e)}function Um(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xm(a,o)){let l=cf(a,o);a=Ds(a,a.next),l=Ds(l,l.next),Ta(a,t,e,n,s,r,0),Ta(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Fm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=af(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Wm(c))}s.sort(Om);for(let r=0;r<s.length;r++)e=Bm(s[r],e);return e}function Om(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Bm(i,t){let e=zm(i,t);if(!e)return t;let n=cf(e,i);return Ds(n,n.next),Ds(e,e.next)}function zm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Pr(i,e))return e;do{if(Pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&of(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Ra(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&Vm(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function Vm(i,t){return Ke(i.prev,i,t.prev)<0&&Ke(t.next,i,i.next)<0}function Gm(i,t,e,n){let s=i;do s.z===0&&(s.z=hu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function hu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function of(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function sa(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&of(i,t,e,n,s,r,a,o)}function Xm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ym(i,t)&&(Ra(i,t)&&Ra(t,i)&&qm(i,t)&&(Ke(i.prev,i,t.prev)||Ke(i,t.prev,t))||Pr(i,t)&&Ke(i.prev,i,i.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pr(i,t){return i.x===t.x&&i.y===t.y}function lf(i,t,e,n){let s=Oo(Ke(i,t,e)),r=Oo(Ke(i,t,n)),a=Oo(Ke(e,n,i)),o=Oo(Ke(e,n,t));return!!(s!==r&&a!==o||s===0&&Fo(i,e,t)||r===0&&Fo(i,n,t)||a===0&&Fo(e,i,n)||o===0&&Fo(e,t,n))}function Fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oo(i){return i>0?1:i<0?-1:0}function Ym(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ra(i,t){return Ke(i.prev,i,i.next)<0?Ke(i,t,i.next)>=0&&Ke(i,i.prev,t)>=0:Ke(i,t,i.prev)<0||Ke(i,i.next,t)<0}function qm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cf(i,t){let e=du(i.i,i.x,i.y),n=du(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ud(i,t,e,n){let s=du(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function du(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Km(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var fu=class{static triangulate(t,e,n=2){return km(t,e,n)}},Cs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hd(t),dd(n,t);let a=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,dd(n,e[l]);let o=fu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var us=class i extends $e{constructor(t=new fi([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Zm,S,M=!1,E,x,T,v;if(p){S=p.getSpacedPoints(u),M=!0,h=!1;let X=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,X),x=new C,T=new C,v=new C}h||(g=0,d=0,m=0,_=0);let A=o.extractPoints(c),k=A.shape,N=A.holes;if(!Cs.isClockWise(k)){k=k.reverse();for(let X=0,tt=N.length;X<tt;X++){let J=N[X];Cs.isClockWise(J)&&(N[X]=J.reverse())}}function O(X){let J=10000000000000001e-36,lt=X[0];for(let mt=1;mt<=X.length;mt++){let Et=mt%X.length,zt=X[Et],Qt=zt.x-lt.x,Bt=zt.y-lt.y,L=Qt*Qt+Bt*Bt,me=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(lt.x),Math.abs(lt.y)),se=J*me*me;if(L<=se){X.splice(Et,1),mt--;continue}lt=zt}}O(k),N.forEach(O);let P=N.length,U=k;for(let X=0;X<P;X++){let tt=N[X];k=k.concat(tt)}function Z(X,tt,J){return tt||ce("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(tt,J)}let K=k.length;function ct(X,tt,J){let lt,mt,Et,zt=X.x-tt.x,Qt=X.y-tt.y,Bt=J.x-X.x,L=J.y-X.y,me=zt*zt+Qt*Qt,se=zt*L-Qt*Bt;if(Math.abs(se)>Number.EPSILON){let R=Math.sqrt(me),y=Math.sqrt(Bt*Bt+L*L),V=tt.x-Qt/R,H=tt.y+zt/R,Q=J.x-L/y,_t=J.y+Bt/y,yt=((Q-V)*L-(_t-H)*Bt)/(zt*L-Qt*Bt);lt=V+zt*yt-X.x,mt=H+Qt*yt-X.y;let nt=lt*lt+mt*mt;if(nt<=2)return new rt(lt,mt);Et=Math.sqrt(nt/2)}else{let R=!1;zt>Number.EPSILON?Bt>Number.EPSILON&&(R=!0):zt<-Number.EPSILON?Bt<-Number.EPSILON&&(R=!0):Math.sign(Qt)===Math.sign(L)&&(R=!0),R?(lt=-Qt,mt=zt,Et=Math.sqrt(me)):(lt=zt,mt=Qt,Et=Math.sqrt(me/2))}return new rt(lt/Et,mt/Et)}let $=[];for(let X=0,tt=U.length,J=tt-1,lt=X+1;X<tt;X++,J++,lt++)J===tt&&(J=0),lt===tt&&(lt=0),$[X]=ct(U[X],U[J],U[lt]);let ot=[],at,Yt=$.concat();for(let X=0,tt=P;X<tt;X++){let J=N[X];at=[];for(let lt=0,mt=J.length,Et=mt-1,zt=lt+1;lt<mt;lt++,Et++,zt++)Et===mt&&(Et=0),zt===mt&&(zt=0),at[lt]=ct(J[lt],J[Et],J[zt]);ot.push(at),Yt=Yt.concat(at)}let Lt;if(g===0)Lt=Cs.triangulateShape(U,N);else{let X=[],tt=[];for(let J=0;J<g;J++){let lt=J/g,mt=d*Math.cos(lt*Math.PI/2),Et=m*Math.sin(lt*Math.PI/2)+_;for(let zt=0,Qt=U.length;zt<Qt;zt++){let Bt=Z(U[zt],$[zt],Et);vt(Bt.x,Bt.y,-mt),lt===0&&X.push(Bt)}for(let zt=0,Qt=P;zt<Qt;zt++){let Bt=N[zt];at=ot[zt];let L=[];for(let me=0,se=Bt.length;me<se;me++){let R=Z(Bt[me],at[me],Et);vt(R.x,R.y,-mt),lt===0&&L.push(R)}lt===0&&tt.push(L)}}Lt=Cs.triangulateShape(X,tt)}let _e=Lt.length,pe=m+_;for(let X=0;X<K;X++){let tt=h?Z(k[X],Yt[X],pe):k[X];M?(T.copy(E.normals[0]).multiplyScalar(tt.x),x.copy(E.binormals[0]).multiplyScalar(tt.y),v.copy(S[0]).add(T).add(x),vt(v.x,v.y,v.z)):vt(tt.x,tt.y,0)}for(let X=1;X<=u;X++)for(let tt=0;tt<K;tt++){let J=h?Z(k[tt],Yt[tt],pe):k[tt];M?(T.copy(E.normals[X]).multiplyScalar(J.x),x.copy(E.binormals[X]).multiplyScalar(J.y),v.copy(S[X]).add(T).add(x),vt(v.x,v.y,v.z)):vt(J.x,J.y,f/u*X)}for(let X=g-1;X>=0;X--){let tt=X/g,J=d*Math.cos(tt*Math.PI/2),lt=m*Math.sin(tt*Math.PI/2)+_;for(let mt=0,Et=U.length;mt<Et;mt++){let zt=Z(U[mt],$[mt],lt);vt(zt.x,zt.y,f+J)}for(let mt=0,Et=N.length;mt<Et;mt++){let zt=N[mt];at=ot[mt];for(let Qt=0,Bt=zt.length;Qt<Bt;Qt++){let L=Z(zt[Qt],at[Qt],lt);M?vt(L.x,L.y+S[u-1].y,S[u-1].x+J):vt(L.x,L.y,f+J)}}}re(),et();function re(){let X=s.length/3;if(h){let tt=0,J=K*tt;for(let lt=0;lt<_e;lt++){let mt=Lt[lt];Kt(mt[2]+J,mt[1]+J,mt[0]+J)}tt=u+g*2,J=K*tt;for(let lt=0;lt<_e;lt++){let mt=Lt[lt];Kt(mt[0]+J,mt[1]+J,mt[2]+J)}}else{for(let tt=0;tt<_e;tt++){let J=Lt[tt];Kt(J[2],J[1],J[0])}for(let tt=0;tt<_e;tt++){let J=Lt[tt];Kt(J[0]+K*u,J[1]+K*u,J[2]+K*u)}}n.addGroup(X,s.length/3-X,0)}function et(){let X=s.length/3,tt=0;it(U,tt),tt+=U.length;for(let J=0,lt=N.length;J<lt;J++){let mt=N[J];it(mt,tt),tt+=mt.length}n.addGroup(X,s.length/3-X,1)}function it(X,tt){let J=X.length;for(;--J>=0;){let lt=J,mt=J-1;mt<0&&(mt=X.length-1);for(let Et=0,zt=u+g*2;Et<zt;Et++){let Qt=K*Et,Bt=K*(Et+1),L=tt+lt+Qt,me=tt+mt+Qt,se=tt+mt+Bt,R=tt+lt+Bt;At(L,me,se,R)}}}function vt(X,tt,J){l.push(X),l.push(tt),l.push(J)}function Kt(X,tt,J){Ot(X),Ot(tt),Ot(J);let lt=s.length/3,mt=b.generateTopUV(n,s,lt-3,lt-2,lt-1);we(mt[0]),we(mt[1]),we(mt[2])}function At(X,tt,J,lt){Ot(X),Ot(tt),Ot(lt),Ot(tt),Ot(J),Ot(lt);let mt=s.length/3,Et=b.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);we(Et[0]),we(Et[1]),we(Et[3]),we(Et[1]),we(Et[2]),we(Et[3])}function Ot(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function we(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $m(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ll[s.type]().fromJSON(s)),new i(n,t.options)}},Zm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-f),new rt(h,1-m),new rt(_,1-p)]:[new rt(o,1-l),new rt(u,1-f),new rt(d,1-m),new rt(g,1-p)]}};function $m(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ki=class i extends $e{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=xe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,f=new C,h=new rt,d=new C,m=new C,_=new C,g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let b=0;b<=e;b++){let S=n+b*u*s,M=Math.sin(S),E=Math.cos(S);for(let x=0;x<=t.length-1;x++){f.x=t[x].x*M,f.y=t[x].y,f.z=t[x].x*E,a.push(f.x,f.y,f.z),h.x=b/e,h.y=x/(t.length-1),o.push(h.x,h.y);let T=l[3*x+0]*M,v=l[3*x+1],A=l[3*x+0]*E;c.push(T,v,A)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){let M=S+b*t.length,E=M,x=M+t.length,T=M+t.length+1,v=M+1;r.push(E,x,v),r.push(T,v,x)}this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var pi=class i extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let b=p*h-a;for(let S=0;S<c;S++){let M=S*f-r;m.push(M,-b,0),_.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let S=b+c*p,M=b+c*(p+1),E=b+1+c*(p+1),x=b+1+c*p;d.push(S,M,x),d.push(M,E,x)}this.setIndex(d),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var hs=class i extends $e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new C,h=new C,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let b=[],S=p/n,M=a+S*o,E=t*Math.cos(M),x=Math.sqrt(t*t-E*E),T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let v=0;v<=e;v++){let A=v/e,k=s+A*r;f.x=-x*Math.cos(k),f.y=E,f.z=x*Math.sin(k),m.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(A+T,1-S),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let S=u[p][b+1],M=u[p][b],E=u[p+1][b],x=u[p+1][b+1];(p!==0||a>0)&&d.push(S,M,x),(p!==n-1||l<Math.PI)&&d.push(M,E,x)}this.setIndex(d),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ia=class i extends $e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new C,d=new C,m=new C;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=s;p++){let b=p/s*r;d.x=(t+e*Math.cos(g))*Math.cos(b),d.y=(t+e*Math.cos(g))*Math.sin(b),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,b=(s+1)*(_-1)+g-1,S=(s+1)*(_-1)+g,M=(s+1)*_+g;l.push(p,b,M),l.push(b,S,M)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ds=class i extends $e{constructor(t=new Aa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new rt,u=new C,f=[],h=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function _(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),b(),p()}function g(S){u=t.getPointAt(S/e,u);let M=a.normals[S],E=a.binormals[S];for(let x=0;x<=s;x++){let T=x/s*Math.PI*2,v=Math.sin(T),A=-Math.cos(T);l.x=A*M.x+v*E.x,l.y=A*M.y+v*E.y,l.z=A*M.z+v*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let M=1;M<=s;M++){let E=(s+1)*(S-1)+(M-1),x=(s+1)*S+(M-1),T=(s+1)*S+M,v=(s+1)*(S-1)+M;m.push(E,x,v),m.push(x,T,v)}}function b(){for(let S=0;S<=e;S++)for(let M=0;M<=s;M++)c.x=S/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ll[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Pa=class extends Zn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Zt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fd(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Mn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function fd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var uf={clone:Os,merge:Mn},jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Qm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ul=class extends On{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Me=class extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ka=class extends Me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var La=class extends Zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hl=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ru(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cu:r=t,o=2*e-n;break;case uu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:a=t,l=2*n-e;break;case uu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,b=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,S=(-1-d)*g+(1.5+d)*_+.5*m,M=d*g-d*_;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+b*a[c+E]+S*a[l+E]+M*a[f+E];return r}},pl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},ml=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends fs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(s-e),_=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*m;return r}let h=o*2,d=t-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],p=d*h+m*2,b=f[p],S=f[p+1],M=t*h+m*2,E=u[M],x=u[M+1],T=eg(n,e,b,E,s);r[m]=hf(T,_,S,x,g)}return r}};function hf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function tg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function eg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=hf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=tg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hr(e,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hr(t.times,Array),values:hr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ru(t.settings)&&(n.settings={inTangents:hr(t.settings.inTangents,Array),outTangents:hr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case la:e=this.InterpolantFactoryMethodDiscrete;break;case Jo:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break;case ou:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ae("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return ou}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ru(this.settings)&&(pd(this.settings.inTangents,t),pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let _=e[f+m];if(_!==e[h+m]||_!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ru(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Jo;var ps=class extends Bn{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=la;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};_l.prototype.ValueTypeName="color";var xl=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};xl.prototype.ValueTypeName="number";var yl=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Rn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Da=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Bn{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=la;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};vl.prototype.ValueTypeName="vector";var bl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},df=new bl,Ml=class{constructor(t){this.manager=t!==void 0?t:df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Na=class extends kr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},au=new Ce,md=new C,gd=new C,Ua=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(au,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(au)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bo=new C,zo=new Rn,Ti=new C,Fa=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bo,zo,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bo,zo,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new C,_d=new rt,xd=new rt,pn=class extends Fa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,_d,xd),e.subVectors(xd,_d)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var pu=class extends Ua{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},Ns=class extends kr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Lr=class extends Fa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mu=class extends Ua{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oa=class extends kr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new mu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var dr=-90,fr=1,Sl=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(dr,fr,t,e);s.layers=this.layers,this.add(s);let r=new pn(dr,fr,t,e);r.layers=this.layers,this.add(r);let a=new pn(dr,fr,t,e);a.layers=this.layers,this.add(a);let o=new pn(dr,fr,t,e);o.layers=this.layers,this.add(o);let l=new pn(dr,fr,t,e);l.layers=this.layers,this.add(l);let c=new pn(dr,fr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wl=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Hu="\\[\\]\\.:\\/",ng=new RegExp("["+Hu+"]","g"),Wu="[^"+Hu+"]",ig="[^"+Hu.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",Wu),rg=/(WCOD+)?/.source.replace("WCOD",ig),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wu),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wu),lg=new RegExp("^"+sg+rg+ag+og+"$"),cg=["material","materials","bones","map"],gu=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(t){let e=lg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=gu;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jv=new Float32Array(1);var yd=new Ce,Ba=class{constructor(t,e,n=0,s=1/0){this.ray=new as(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yd),this}intersectObject(t,e=!0,n=[]){return _u(t,this,n,e),n.sort(vd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_u(t[s],this,n,e);return n.sort(vd),n}};function vd(i,t){return i.distance-t.distance}function _u(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)_u(r[a],t,e,!0)}}var Dr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $u=class $u{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};$u.prototype.isMatrix2=!0;var xu=$u;var za=class extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Xu(i,t,e,n){let s=ug(n);switch(e){case Nu:return i*t;case Dl:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case bs:return i*t*2/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case Uu:return i*t*3/s.components*s.byteLength;case Jn:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case Xa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Vl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case zl:return Math.max(i,8)*Math.max(t,8)/2;case Gl:case Hl:case Xl:case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wl:case Za:case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lc:case cc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(i){switch(i){case In:case Pu:return{byteLength:1,components:1};case Fr:case ku:case xi:return{byteLength:2,components:1};case kl:case Ll:return{byteLength:2,components:4};case _i:case Pl:case $n:return{byteLength:4,components:1};case Lu:case Du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Df(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mg(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mg=`#ifdef USE_AOMAP
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
#endif`,Sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
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
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bg=`#define PI 3.141592653589793
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
} // validated`,zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vg=`vec3 transformedNormal = objectNormal;
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
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
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
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
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
#endif`,p0=`uniform sampler2D dfgLUT;
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
}`,m0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E0=`#if defined( USE_POINTS_UV )
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
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,__=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,L_=`#define LAMBERT
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
}`,D_=`#define MATCAP
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
}`,N_=`#define MATCAP
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
}`,U_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,O_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,V_=`#define STANDARD
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
}`,G_=`#define TOON
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
}`,H_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,X_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,q_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:gg,alphahash_pars_fragment:_g,alphamap_fragment:xg,alphamap_pars_fragment:yg,alphatest_fragment:vg,alphatest_pars_fragment:bg,aomap_fragment:Mg,aomap_pars_fragment:Sg,batching_pars_vertex:wg,batching_vertex:Ag,begin_vertex:Eg,beginnormal_vertex:Tg,bsdfs:Rg,iridescence_fragment:Cg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:kg,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Dg,color_fragment:Ng,color_pars_fragment:Ug,color_pars_vertex:Fg,color_vertex:Og,common:Bg,cube_uv_reflection_fragment:zg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Hg,emissivemap_fragment:Wg,emissivemap_pars_fragment:Xg,colorspace_fragment:Yg,colorspace_pars_fragment:qg,envmap_fragment:Kg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:$g,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:l0,envmap_vertex:jg,fog_vertex:Qg,fog_pars_vertex:t0,fog_fragment:e0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:s0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:a0,lights_pars_begin:o0,lights_toon_fragment:c0,lights_toon_pars_fragment:u0,lights_phong_fragment:h0,lights_phong_pars_fragment:d0,lights_physical_fragment:f0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:_0,lightprobes_pars_fragment:x0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:M0,map_fragment:S0,map_pars_fragment:w0,map_particle_fragment:A0,map_particle_pars_fragment:E0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:I0,morphnormal_vertex:P0,morphtarget_pars_vertex:k0,morphtarget_vertex:L0,normal_fragment_begin:D0,normal_fragment_maps:N0,normal_pars_fragment:U0,normal_pars_vertex:F0,normal_vertex:O0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:H0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:Y0,project_vertex:q0,dithering_fragment:K0,dithering_pars_fragment:Z0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Q0,shadowmap_vertex:t_,shadowmask_pars_fragment:e_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:a_,specularmap_pars_fragment:o_,tonemapping_fragment:l_,tonemapping_pars_fragment:c_,transmission_fragment:u_,transmission_pars_fragment:h_,uv_pars_fragment:d_,uv_pars_vertex:f_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:__,backgroundCube_vert:x_,backgroundCube_frag:y_,cube_vert:v_,cube_frag:b_,depth_vert:M_,depth_frag:S_,distance_vert:w_,distance_frag:A_,equirect_vert:E_,equirect_frag:T_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:I_,meshbasic_frag:P_,meshlambert_vert:k_,meshlambert_frag:L_,meshmatcap_vert:D_,meshmatcap_frag:N_,meshnormal_vert:U_,meshnormal_frag:F_,meshphong_vert:O_,meshphong_frag:B_,meshphysical_vert:z_,meshphysical_frag:V_,meshtoon_vert:G_,meshtoon_frag:H_,points_vert:W_,points_frag:X_,shadow_vert:Y_,shadow_frag:q_,sprite_vert:K_,sprite_frag:Z_},Ft={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ui={basic:{uniforms:Mn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Mn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Mn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Mn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Mn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Zt(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Mn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Mn([Ft.points,Ft.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Mn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Mn([Ft.common,Ft.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Mn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Mn([Ft.sprite,Ft.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:Mn([Ft.common,Ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:Mn([Ft.lights,Ft.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Ui.physical={uniforms:Mn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};var gc={r:0,b:0,g:0},$_=new Ce,Nf=new ge;Nf.set(-1,0,0,0,1,0,0,0,1);function J_(i,t,e,n,s,r){let a=new Zt(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let M=b.backgroundBlurriness>0;S=t.get(S,M)}return S}function m(b){let S=!1,M=d(b);M===null?g(a,o):M&&M.isColor&&(g(M,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){let M=d(S);M&&(M.isCubeTexture||M.mapping===Ha)?(c===void 0&&(c=new Ut(new ye(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Os(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,x,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($_.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nf),c.material.toneMapped=Ee.getTransfer(M.colorSpace)!==De,(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ut(new pi(2,2),new On({name:"BackgroundMaterial",uniforms:Os(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ee.getTransfer(M.colorSpace)!==De,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,S){b.getRGB(gc,Gu(i)),e.buffers.color.setClear(gc.r,gc.g,gc.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:_,dispose:p}}function j_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,z,O,P,U){let Z=!1,K=f(N,P,O,z);r!==K&&(r=K,c(r.object)),Z=d(N,P,O,U),Z&&m(N,P,O,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(N,z,O,P),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function f(N,z,O,P){let U=P.wireframe===!0,Z=n[z.id];Z===void 0&&(Z={},n[z.id]=Z);let K=N.isInstancedMesh===!0?N.id:0,ct=Z[K];ct===void 0&&(ct={},Z[K]=ct);let $=ct[O.id];$===void 0&&($={},ct[O.id]=$);let ot=$[U];return ot===void 0&&(ot=h(l()),$[U]=ot),ot}function h(N){let z=[],O=[],P=[];for(let U=0;U<e;U++)z[U]=0,O[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:P,object:N,attributes:{},index:null}}function d(N,z,O,P){let U=r.attributes,Z=z.attributes,K=0,ct=O.getAttributes();for(let $ in ct)if(ct[$].location>=0){let at=U[$],Yt=Z[$];if(Yt===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Yt=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Yt=N.instanceColor)),at===void 0||at.attribute!==Yt||Yt&&at.data!==Yt.data)return!0;K++}return r.attributesNum!==K||r.index!==P}function m(N,z,O,P){let U={},Z=z.attributes,K=0,ct=O.getAttributes();for(let $ in ct)if(ct[$].location>=0){let at=Z[$];at===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(at=N.instanceColor));let Yt={};Yt.attribute=at,at&&at.data&&(Yt.data=at.data),U[$]=Yt,K++}r.attributes=U,r.attributesNum=K,r.index=P}function _(){let N=r.newAttributes;for(let z=0,O=N.length;z<O;z++)N[z]=0}function g(N){p(N,0)}function p(N,z){let O=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;O[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),U[N]!==z&&(i.vertexAttribDivisor(N,z),U[N]=z)}function b(){let N=r.newAttributes,z=r.enabledAttributes;for(let O=0,P=z.length;O<P;O++)z[O]!==N[O]&&(i.disableVertexAttribArray(O),z[O]=0)}function S(N,z,O,P,U,Z,K){K===!0?i.vertexAttribIPointer(N,z,O,U,Z):i.vertexAttribPointer(N,z,O,P,U,Z)}function M(N,z,O,P){_();let U=P.attributes,Z=O.getAttributes(),K=z.defaultAttributeValues;for(let ct in Z){let $=Z[ct];if($.location>=0){let ot=U[ct];if(ot===void 0&&(ct==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),ct==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),ot!==void 0){let at=ot.normalized,Yt=ot.itemSize,Lt=t.get(ot);if(Lt===void 0)continue;let _e=Lt.buffer,pe=Lt.type,re=Lt.bytesPerElement,et=pe===i.INT||pe===i.UNSIGNED_INT||ot.gpuType===Pl;if(ot.isInterleavedBufferAttribute){let it=ot.data,vt=it.stride,Kt=ot.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<$.locationSize;At++)p($.location+At,it.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<$.locationSize;At++)g($.location+At);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let At=0;At<$.locationSize;At++)S($.location+At,Yt/$.locationSize,pe,at,vt*re,(Kt+Yt/$.locationSize*At)*re,et)}else{if(ot.isInstancedBufferAttribute){for(let it=0;it<$.locationSize;it++)p($.location+it,ot.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let it=0;it<$.locationSize;it++)g($.location+it);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let it=0;it<$.locationSize;it++)S($.location+it,Yt/$.locationSize,pe,at,Yt*re,Yt/$.locationSize*it*re,et)}}else if(K!==void 0){let at=K[ct];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv($.location,at);break;case 3:i.vertexAttrib3fv($.location,at);break;case 4:i.vertexAttrib4fv($.location,at);break;default:i.vertexAttrib1fv($.location,at)}}}}b()}function E(){A();for(let N in n){let z=n[N];for(let O in z){let P=z[O];for(let U in P){let Z=P[U];for(let K in Z)u(Z[K].object),delete Z[K];delete P[U]}}delete n[N]}}function x(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let O in z){let P=z[O];for(let U in P){let Z=P[U];for(let K in Z)u(Z[K].object),delete Z[K];delete P[U]}}delete n[N.id]}function T(N){for(let z in n){let O=n[z];for(let P in O){let U=O[P];if(U[N.id]===void 0)continue;let Z=U[N.id];for(let K in Z)u(Z[K].object),delete Z[K];delete U[N.id]}}}function v(N){for(let z in n){let O=n[z],P=N.isInstancedMesh===!0?N.id:0,U=O[P];if(U!==void 0){for(let Z in U){let K=U[Z];for(let ct in K)u(K[ct].object),delete K[ct];delete U[Z]}delete O[P],Object.keys(O).length===0&&delete n[z]}}}function A(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:x,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Q_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function tx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let v=T===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==In&&T!==$n&&!v&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(ae("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,maxSamples:E,samples:x}}function ex(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Nn,o=new ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,S=b*4,M=p.clippingState||null;l.value=M,M=u(m,h,S,d);for(let E=0;E!==S;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=d+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,M=d;S!==_;++S,M+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var zr=4,nx=6,ix=20,sx=256,ja=new Lr,ff=new Zt,Ju=null,ju=0,Qu=0,th=!1,rx=new C,Bs=new C,Gr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=rx}=r;Ju=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ju,ju,Qu),this._renderer.xr.enabled=th,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ju=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:xi,format:Jn,colorSpace:ca,depthBuffer:!1},s=pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ax(r)),this._blurMaterial=lx(r,t,e),this._ggxMaterial=ox(r,t,e)}return s}_compileMaterial(t){let e=new Ut(new $e,t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s,r){let l=new pn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ff),f.toneMapping=gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new ye,new Un({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,p=!0):(g.color.copy(ff),p=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let E=this._cubeSize;Br(s,M*E,S>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-zr?n-m+zr:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Br(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(o,ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Br(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(o,ja)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-zr?s-this._lodMax+zr:0),h=4*(this._cubeSize-u);Br(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(l,ja)}};function ax(i){let t=[],e=[],n=i,s=i-zr+1+nx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,m=new Float32Array(d*h*f),_=new Float32Array(d*h*f);for(let p=0;p<f;p++){let b=p%3*2/3-1,S=p>2?0:-1,M=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];m.set(M,d*h*p);for(let E=0;E<h;E++){let x=u[E*2]*2-1,T=u[E*2+1]*2-1;p===0?Bs.set(1,T,x):p===1?Bs.set(-x,1,-T):p===2?Bs.set(-x,T,1):p===3?Bs.set(-1,T,-x):p===4?Bs.set(-x,-1,T):Bs.set(x,T,-1),Bs.toArray(_,(p*h+E)*d)}}let g=new $e;g.setAttribute("position",new bn(m,d)),g.setAttribute("outputDirection",new bn(_,d)),e.push(new Ut(g,null)),n>zr&&n--}return{lodMeshes:e,sizeLods:t}}function pf(i,t,e){let n=new Cn(i,t,e);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ox(i,t,e){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function lx(i,t,e){return new On({name:"SphericalGaussianBlur",defines:{SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function mf(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function gf(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ye(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Li});r.uniforms.tEquirect.value=e;let a=new Ut(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=rn),new Sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function cx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Rl||d===Cl)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new xc(m.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,m=d===Rl||d===Cl,_=d===ys||d===Fs;if(m||_){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Gr(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let b=h.image;return m&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Gr(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Rl?h.mapping=ys:d===Cl&&(h.mapping=Fs),h}function l(h){let d=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&d++;return d===m}function c(h){let d=h.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function ux(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function hx(i,t,e,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,m=f.attributes.position,_=0;if(m===void 0)return;if(d!==null){let b=d.array;_=d.version;for(let S=0,M=b.length;S<M;S+=3){let E=b[S+0],x=b[S+1],T=b[S+2];h.push(E,x,x,T,T,E)}}else{let b=m.array;_=m.version;for(let S=0,M=b.length/3-1;S<M;S+=3){let E=S+0,x=S+1,T=S+2;h.push(E,x,x,T,T,E)}}let g=new(m.count>=65535?ma:pa)(h,1);g.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,g)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function dx(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function fx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function px(i,t,e){let n=new WeakMap,s=new Ye;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let A=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let M=o.attributes.position.count*S,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let x=new Float32Array(M*E*4*f),T=new fa(x,M,E,f);T.type=$n,T.needsUpdate=!0;let v=S*4;for(let k=0;k<f;k++){let N=g[k],z=p[k],O=b[k],P=M*E*4*k;for(let U=0;U<N.count;U++){let Z=U*v;d===!0&&(s.fromBufferAttribute(N,U),x[P+Z+0]=s.x,x[P+Z+1]=s.y,x[P+Z+2]=s.z,x[P+Z+3]=0),m===!0&&(s.fromBufferAttribute(z,U),x[P+Z+4]=s.x,x[P+Z+5]=s.y,x[P+Z+6]=s.z,x[P+Z+7]=0),_===!0&&(s.fromBufferAttribute(O,U),x[P+Z+8]=s.x,x[P+Z+9]=s.y,x[P+Z+10]=s.z,x[P+Z+11]=O.itemSize===4?s.w:1)}}h={count:f,texture:T,size:new rt(M,E)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function mx(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var gx={[wu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[Eu]:"CINEON_TONE_MAPPING",[Tu]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function _x(i,t,e,n,s,r){let a=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new $e;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));let u=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(c,u),h=new Lr(-1,1,1,-1,0,1),d=null,m=null,_=!1,g,p=null,b=[],S=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let x=0;x<b.length;x++){let T=b[x];T.setSize&&T.setSize(M,E)}},this.setEffects=function(M){b=M,S=b.length>0&&b[0].isRenderPass===!0;let E=a.width,x=a.height;b.length>0&&o===null&&(o=new Cn(E,x,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(E,x,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let v=b[T];v.setSize&&v.setSize(E,x)}},this.begin=function(M,E){if(_||M.toneMapping===gi&&b.length===0)return!1;if(p=E,E!==null){let x=E.width,T=E.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return S===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=gi,!0},this.hasRenderPass=function(){return S},this.end=function(M,E){M.toneMapping=g,_=!0;let x=a,T=o;for(let v=0;v<b.length;v++){let A=b[v];A.enabled!==!1&&(A.render(M,T,x,E),A.needsSwap!==!1&&(x=T,T=T===o?l:o))}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,u.defines={},Ee.getTransfer(d)===De&&(u.defines.SRGB_TRANSFER="");let v=gx[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(p),M.render(f,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Uf=new An,ih=new ls(1,1),Ff=new fa,Of=new tl,Bf=new ya,_f=[],xf=[],yf=new Float32Array(16),vf=new Float32Array(9),bf=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_f[s];if(r===void 0&&(r=new Float32Array(s),_f[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bc(i,t){let e=xf[t];e===void 0&&(e=new Int32Array(t),xf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function Mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),ln(e,n)}}function Sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;vf.set(n),i.uniformMatrix3fv(this.addr,!1,vf),ln(e,n)}}function wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;yf.set(n),i.uniformMatrix4fv(this.addr,!1,yf),ln(e,n)}}function Ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function Cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function Lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ih.compareFunction=e.isReversedDepthBuffer()?mc:pc,r=ih):r=Uf,e.setTexture2D(t||r,s)}function Dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Of,s)}function Nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bf,s)}function Ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ff,s)}function Fx(i){switch(i){case 5126:return xx;case 35664:return yx;case 35665:return vx;case 35666:return bx;case 35674:return Mx;case 35675:return Sx;case 35676:return wx;case 5124:case 35670:return Ax;case 35667:case 35671:return Ex;case 35668:case 35672:return Tx;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Ix;case 36295:return Px;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Ox(i,t){i.uniform1fv(this.addr,t)}function Bx(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function zx(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function Vx(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Gx(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hx(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wx(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xx(i,t){i.uniform1iv(this.addr,t)}function Yx(i,t){i.uniform2iv(this.addr,t)}function qx(i,t){i.uniform3iv(this.addr,t)}function Kx(i,t){i.uniform4iv(this.addr,t)}function Zx(i,t){i.uniform1uiv(this.addr,t)}function $x(i,t){i.uniform2uiv(this.addr,t)}function Jx(i,t){i.uniform3uiv(this.addr,t)}function jx(i,t){i.uniform4uiv(this.addr,t)}function Qx(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ih:a=Uf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ty(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Of,r[a])}function ey(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bf,r[a])}function ny(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ff,r[a])}function iy(i){switch(i){case 5126:return Ox;case 35664:return Bx;case 35665:return zx;case 35666:return Vx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return Yx;case 35668:case 35672:return qx;case 35669:case 35673:return Kx;case 5125:return Zx;case 36294:return $x;case 36295:return Jx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ny}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fx(e.type)}},rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iy(e.type)}},ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},eh=/(\w+)(\])?(\[|\.)?/g;function Mf(i,t){i.seq.push(t),i.map[t.id]=t}function sy(i,t,e){let n=i.name,s=n.length;for(eh.lastIndex=0;;){let r=eh.exec(n),a=eh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mf(e,c===void 0?new sh(o,i,t):new rh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ah(o),Mf(e,f)),e=f}}}var Vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);sy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Sf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ry=37297,ay=0;function oy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var wf=new ge;function ly(i){Ee._getMatrix(wf,Ee.workingColorSpace,i);let t=`mat3( ${wf.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case ua:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Af(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+oy(i.getShaderSource(t),o)}else return r}function cy(i,t){let e=ly(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var uy={[wu]:"Linear",[Au]:"Reinhard",[Eu]:"Cineon",[Tu]:"ACESFilmic",[Cu]:"AgX",[Ga]:"Neutral",[Ru]:"Custom"};function hy(i,t){let e=uy[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _c=new C;function dy(){Ee.getLuminanceCoefficients(_c);let i=_c.x.toFixed(4),t=_c.y.toFixed(4),e=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function py(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function my(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function to(i){return i!==""}function Ef(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(gy,xy)}var _y=new Map;function xy(i,t){let e=be[t];if(e===void 0){let n=_y.get(t);if(n!==void 0)e=be[n],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return oh(e)}var yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(i){return i.replace(yy,vy)}function vy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var by={[Va]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function My(i){return by[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sy={[ys]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};function wy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ay={[Fs]:"ENVMAP_MODE_REFRACTION"};function Ey(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ty={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function Ry(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[i.combine]||"ENVMAP_BLENDING_NONE"}function Cy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Iy(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=My(e),c=wy(e),u=Ey(e),f=Ry(e),h=Cy(e),d=fy(e),m=py(r),_=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(to).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(to).join(`
`),p.length>0&&(p+=`
`)):(g=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?be.tonemapping_pars_fragment:"",e.toneMapping!==gi?hy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,cy("linearToOutputTexel",e.outputColorSpace),dy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),a=oh(a),a=Ef(a,e),a=Tf(a,e),o=oh(o),o=Ef(o,e),o=Tf(o,e),a=Rf(a),o=Rf(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+g+a,M=b+p+o,E=Sf(s,s.VERTEX_SHADER,S),x=Sf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,E),s.attachShader(_,x),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(x)||"",U=z.trim(),Z=O.trim(),K=P.trim(),ct=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,x);else{let ot=Af(s,E,"vertex"),at=Af(s,x,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+ot+`
`+at)}else U!==""?ae("WebGLProgram: Program Info Log:",U):(Z===""||K==="")&&($=!1);$&&(N.diagnostics={runnable:ct,programLog:U,vertexShader:{log:Z,prefix:g},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(x),v=new Vr(s,_),A=my(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(_,ry)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ay++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=x,this}var Py=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ch(t),e.set(t,n)),n}},ch=class{constructor(t){this.id=Py++,this.code=t,this.usedTimes=0}};function ky(i){return i===bs||i===Za||i===$a}function Ly(i,t,e,n,s,r){let a=new Mr,o=new lh,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,A,k,N,z,O){let P=N.fog,U=z.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ct=t.get(v.envMap||Z,K),$=ct&&ct.mapping===Ha?ct.image.height:null,ot=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&ae("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let at=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Yt=at!==void 0?at.length:0,Lt=0;U.morphAttributes.position!==void 0&&(Lt=1),U.morphAttributes.normal!==void 0&&(Lt=2),U.morphAttributes.color!==void 0&&(Lt=3);let _e,pe,re,et;if(ot){let ke=Ui[ot];_e=ke.vertexShader,pe=ke.fragmentShader}else{_e=v.vertexShader,pe=v.fragmentShader;let ke=o.getVertexShaderStage(v),Y=o.getFragmentShaderStage(v);o.update(v,ke,Y),re=ke.id,et=Y.id}let it=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Kt=z.isInstancedMesh===!0,At=z.isBatchedMesh===!0,Ot=!!v.map,we=!!v.matcap,X=!!ct,tt=!!v.aoMap,J=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,mt=!!v.normalMap,Et=!!v.displacementMap,zt=!!v.emissiveMap,Qt=!!v.metalnessMap,Bt=!!v.roughnessMap,L=v.anisotropy>0,me=v.clearcoat>0,se=v.dispersion>0,R=v.retroreflectivity>0,y=v.iridescence>0,V=v.sheen>0,H=v.transmission>0,Q=L&&!!v.anisotropyMap,_t=me&&!!v.clearcoatMap,yt=me&&!!v.clearcoatNormalMap,nt=me&&!!v.clearcoatRoughnessMap,ft=y&&!!v.iridescenceMap,Ct=y&&!!v.iridescenceThicknessMap,Xt=V&&!!v.sheenColorMap,Tt=V&&!!v.sheenRoughnessMap,bt=!!v.specularMap,$t=!!v.specularColorMap,ie=!!v.specularIntensityMap,he=H&&!!v.transmissionMap,B=H&&!!v.thicknessMap,Mt=!!v.gradientMap,ht=!!v.alphaMap,St=v.alphaTest>0,It=!!v.alphaHash,pt=!!v.extensions,Jt=gi;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let Gt={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:_e,fragmentShader:pe,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:At,batchingColor:At&&z._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&z.instanceColor!==null,instancingMorph:Kt&&z.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ot,matcap:we,envMap:X,envMapMode:X&&ct.mapping,envMapCubeUVHeight:$,aoMap:tt,lightMap:J,bumpMap:lt,normalMap:mt,displacementMap:Et,emissiveMap:zt,normalMapObjectSpace:mt&&v.normalMapType===Xd,normalMapTangentSpace:mt&&v.normalMapType===Ja,packedNormalMap:mt&&v.normalMapType===Ja&&ky(v.normalMap.format),metalnessMap:Qt,roughnessMap:Bt,anisotropy:L,anisotropyMap:Q,clearcoat:me,clearcoatMap:_t,clearcoatNormalMap:yt,clearcoatRoughnessMap:nt,dispersion:se,retroreflection:R,iridescence:y,iridescenceMap:ft,iridescenceThicknessMap:Ct,sheen:V,sheenColorMap:Xt,sheenRoughnessMap:Tt,specularMap:bt,specularColorMap:$t,specularIntensityMap:ie,transmission:H,transmissionMap:he,thicknessMap:B,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===Ur&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:St,alphaHash:It,combine:v.combine,mapUv:Ot&&m(v.map.channel),aoMapUv:tt&&m(v.aoMap.channel),lightMapUv:J&&m(v.lightMap.channel),bumpMapUv:lt&&m(v.bumpMap.channel),normalMapUv:mt&&m(v.normalMap.channel),displacementMapUv:Et&&m(v.displacementMap.channel),emissiveMapUv:zt&&m(v.emissiveMap.channel),metalnessMapUv:Qt&&m(v.metalnessMap.channel),roughnessMapUv:Bt&&m(v.roughnessMap.channel),anisotropyMapUv:Q&&m(v.anisotropyMap.channel),clearcoatMapUv:_t&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:yt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&m(v.sheenRoughnessMap.channel),specularMapUv:bt&&m(v.specularMap.channel),specularColorMapUv:$t&&m(v.specularColorMap.channel),specularIntensityMapUv:ie&&m(v.specularIntensityMap.channel),transmissionMapUv:he&&m(v.transmissionMap.channel),thicknessMapUv:B&&m(v.thicknessMap.channel),alphaMapUv:ht&&m(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(mt||L),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(Ot||ht),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:Lt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Ot&&v.map.isVideoTexture===!0&&Ee.getTransfer(v.map.colorSpace)===De,decodeVideoTextureEmissive:zt&&v.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(v.emissiveMap.colorSpace)===De,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===mn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&v.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)A.push(k),A.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(p(A,v),b(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function b(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){let A=d[v.type],k;if(A){let N=Ui[A];k=uf.clone(N.uniforms)}else k=v.uniforms;return k}function M(v,A){let k=u.get(A);return k!==void 0?++k.usedTimes:(k=new Iy(i,A,v,s),c.push(k),u.set(A,k)),k}function E(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function x(v){o.remove(v)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:M,releaseProgram:E,releaseShaderCache:x,programs:c,dispose:T}}function Dy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ny(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function If(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,_,g,p){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[t]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=m,b.materialVariant=a(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=g,b.group=p),t++,b}function l(h,d,m,_,g,p,b){b.reversedDepth===!0&&(g=-g);let S=o(h,d,m,_,g,p);m.transmission>0?n.push(S):m.transparent===!0?s.push(S):e.push(S)}function c(h,d,m,_,g,p){let b=o(h,d,m,_,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function u(h,d){e.length>1&&e.sort(h||Ny),n.length>1&&n.sort(d||If),s.length>1&&s.sort(d||If)}function f(){for(let h=t,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Uy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pf,i.set(n,[a])):s>=r.length?(a=new Pf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Zt};break;case"SpotLight":e={position:new C,direction:new C,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var By=0;function zy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vy(i){let t=new Fy,e=Oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Ce,a=new Ce;function o(c){let u=0,f=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,b=0,S=0,M=0,E=0,x=0,T=0,v=0,A=0,k=0;c.sort(zy);for(let z=0,O=c.length;z<O;z++){let P=c[z],U=P.color,Z=P.intensity,K=P.distance,ct=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===bs?ct=P.shadow.map.texture:ct=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*Z,f+=U.g*Z,h+=U.b*Z;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],Z);k++}else if(P.isSunLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ot=P.shadow,at=e.get(P);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[m]=at,n.sunShadowMap[m]=ct;let Yt=ot.getViewportCount();for(let Lt=0;Lt<Yt;Lt++)n.sunShadowMatrix[_+Lt]=ot.getMatrix(Lt),n.sunShadowCascade[_+Lt]=ot._cascadeData[Lt];_+=Yt,m++}n.sun[d]=$,d++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ot=P.shadow,at=e.get(P);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,n.directionalShadow[g]=at,n.directionalShadowMap[g]=ct,n.directionalShadowMatrix[g]=P.shadow.matrix,E++}n.directional[g]=$,g++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(U).multiplyScalar(Z),$.distance=K,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[b]=$;let ot=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,ot.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[b]=ot.matrix,P.castShadow){let at=e.get(P);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,n.spotShadow[b]=at,n.spotShadowMap[b]=ct,T++}b++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(U).multiplyScalar(Z),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=$,S++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let ot=P.shadow,at=e.get(P);at.shadowIntensity=ot.intensity,at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,at.shadowCameraNear=ot.camera.near,at.shadowCameraFar=ot.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=ct,n.pointShadowMatrix[p]=P.shadow.matrix,x++}n.point[p]=$,p++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(Z),$.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[M]=$,M++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let N=n.hash;(N.sunLength!==d||N.directionalLength!==g||N.pointLength!==p||N.spotLength!==b||N.rectAreaLength!==S||N.hemiLength!==M||N.numSunShadows!==m||N.numDirectionalShadows!==E||N.numPointShadows!==x||N.numSpotShadows!==T||N.numSpotMaps!==v||N.numLightProbes!==k)&&(n.sun.length=d,n.directional.length=g,n.spot.length=b,n.rectArea.length=S,n.point.length=p,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=k,N.sunLength=d,N.directionalLength=g,N.pointLength=p,N.spotLength=b,N.rectAreaLength=S,N.hemiLength=M,N.numSunShadows=m,N.numDirectionalShadows=E,N.numPointShadows=x,N.numSpotShadows=T,N.numSpotMaps=v,N.numLightProbes=k,n.version=By++)}function l(c,u){let f=0,h=0,d=0,m=0,_=0,g=0,p=u.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let M=c[b];if(M.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function kf(i){let t=new Vy(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new kf(i),t.set(s,[o])):r>=a.length?(o=new kf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`,Xy=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Yy=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Lf=new Ce,Qa=new C,nh=new C;function qy(i,t,e){let n=new Tr,s=new rt,r=new rt,a=new Ye,o=new hl,l=new dl,c={},u=e.maxTextureSize,f={[xs]:mn,[mn]:xs,[mi]:mi},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Hy,fragmentShader:Wy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new $e;m.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let p=this.type;this.render=function(x,T,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;this.type===El&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Va);let A=i.getRenderTarget(),k=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Li),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=p!==this.type;O&&T.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=x.length;P<U;P++){let Z=x[P],K=Z.shadow;if(K===void 0){ae("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ct=K.getFrameExtents();s.multiply(ct),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,K.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=$,K.map===null||O===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Nr){if(Z.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Cn(s.x,s.y,{format:bs,type:xi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new ls(s.x,s.y,$n),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=Pi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=fn,K.map.depthTexture.magFilter=fn}else Z.isPointLight?(K.map=new xc(s.x),K.map.depthTexture=new sl(s.x,_i)):(K.map=new Cn(s.x,s.y),K.map.depthTexture=new ls(s.x,s.y,_i)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=Pi,this.type===Va?(K.map.depthTexture.compareFunction=$?mc:pc,K.map.depthTexture.minFilter=rn,K.map.depthTexture.magFilter=rn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=fn,K.map.depthTexture.magFilter=fn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let ot=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Z.isPointLight!==!0&&K.updateMatrices(Z,v);for(let at=0;at<ot;at++){let Yt=K.getCamera(at);if(Z.isPointLight){let Lt=K.camera,_e=K.matrix,pe=Z.distance||Lt.far;pe!==Lt.far&&(Lt.far=pe,Lt.updateProjectionMatrix()),Qa.setFromMatrixPosition(Z.matrixWorld),Lt.position.copy(Qa),nh.copy(Lt.position),nh.add(Xy[at]),Lt.up.copy(Yy[at]),Lt.lookAt(nh),Lt.updateMatrixWorld(),_e.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Lf.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Lf,Lt.coordinateSystem,Lt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,at),i.clear();else{at===0&&(i.setRenderTarget(K.map),i.clear());let Lt=K.getViewport(at);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),z.viewport(a)}n=K.getFrustum(at),M(T,v,Yt,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Nr&&b(K,v),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,k,N)};function b(x,T){let v=t.update(_);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null?x.mapPass=new Cn(s.x,s.y,{format:bs,type:xi}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),h.uniforms.shadow_pass.value=x.map.depthTexture,h.uniforms.resolution.value.set(x.map.width,x.map.height),h.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(T,null,v,h,_,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(T,null,v,d,_,null)}function S(x,T,v,A){let k=null,N=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(N!==void 0)k=N;else if(k=v.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let z=k.uuid,O=T.uuid,P=c[z];P===void 0&&(P={},c[z]=P);let U=P[O];U===void 0&&(U=k.clone(),P[O]=U,T.addEventListener("dispose",E)),k=U}if(k.visible=T.visible,k.wireframe=T.wireframe,A===Nr?k.side=T.shadowSide!==null?T.shadowSide:T.side:k.side=T.shadowSide!==null?T.shadowSide:f[T.side],k.alphaMap=T.alphaMap,k.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,k.map=T.map,k.clipShadows=T.clipShadows,k.clippingPlanes=T.clippingPlanes,k.clipIntersection=T.clipIntersection,k.displacementMap=T.displacementMap,k.displacementScale=T.displacementScale,k.displacementBias=T.displacementBias,k.wireframeLinewidth=T.wireframeLinewidth,k.linewidth=T.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let z=i.properties.get(k);z.light=v}return k}function M(x,T,v,A,k){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&k===Nr)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);let O=t.update(x),P=x.material;if(Array.isArray(P)){let U=O.groups;for(let Z=0,K=U.length;Z<K;Z++){let ct=U[Z],$=P[ct.materialIndex];if($&&$.visible){let ot=S(x,$,A,k);x.onBeforeShadow(i,x,T,v,O,ot,ct),i.renderBufferDirect(v,null,O,ot,x,ct),x.onAfterShadow(i,x,T,v,O,ot,ct)}}}else if(P.visible){let U=S(x,P,A,k);x.onBeforeShadow(i,x,T,v,O,U,null),i.renderBufferDirect(v,null,O,U,x,null),x.onAfterShadow(i,x,T,v,O,U,null)}}let z=x.children;for(let O=0,P=z.length;O<P;O++)M(z[O],T,v,A,k)}function E(x){x.target.removeEventListener("dispose",E);for(let v in c){let A=c[v],k=x.target.uuid;k in A&&(A[k].dispose(),delete A[k])}}}function Ky(i,t){function e(){let B=!1,Mt=new Ye,ht=null,St=new Ye(0,0,0,0);return{setMask:function(It){ht!==It&&!B&&(i.colorMask(It,It,It,It),ht=It)},setLocked:function(It){B=It},setClear:function(It,pt,Jt,Gt,ke){ke===!0&&(It*=Gt,pt*=Gt,Jt*=Gt),Mt.set(It,pt,Jt,Gt),St.equals(Mt)===!1&&(i.clearColor(It,pt,Jt,Gt),St.copy(Mt))},reset:function(){B=!1,ht=null,St.set(-1,0,0,0)}}}function n(){let B=!1,Mt=!1,ht=null,St=null,It=null;return{setReversed:function(pt){if(Mt!==pt){let Jt=t.get("EXT_clip_control");pt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Mt=pt;let Gt=It;It=null,this.setClear(Gt)}},getReversed:function(){return Mt},setTest:function(pt){pt?it(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(pt){ht!==pt&&!B&&(i.depthMask(pt),ht=pt)},setFunc:function(pt){if(Mt&&(pt=nf[pt]),St!==pt){switch(pt){case Ho:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=pt}},setLocked:function(pt){B=pt},setClear:function(pt){It!==pt&&(It=pt,Mt&&(pt=1-pt),i.clearDepth(pt))},reset:function(){B=!1,ht=null,St=null,It=null,Mt=!1}}}function s(){let B=!1,Mt=null,ht=null,St=null,It=null,pt=null,Jt=null,Gt=null,ke=null;return{setTest:function(Y){B||(Y?it(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Y){Mt!==Y&&!B&&(i.stencilMask(Y),Mt=Y)},setFunc:function(Y,gt,wt){(ht!==Y||St!==gt||It!==wt)&&(i.stencilFunc(Y,gt,wt),ht=Y,St=gt,It=wt)},setOp:function(Y,gt,wt){(pt!==Y||Jt!==gt||Gt!==wt)&&(i.stencilOp(Y,gt,wt),pt=Y,Jt=gt,Gt=wt)},setLocked:function(Y){B=Y},setClear:function(Y){ke!==Y&&(i.clearStencil(Y),ke=Y)},reset:function(){B=!1,Mt=null,ht=null,St=null,It=null,pt=null,Jt=null,Gt=null,ke=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,b=null,S=null,M=null,E=null,x=null,T=null,v=new Zt(0,0,0),A=0,k=!1,N=null,z=null,O=null,P=null,U=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ct=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec($)[1]),K=ct>=1):$.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=ct>=2);let ot=null,at={},Yt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),_e=new Ye().fromArray(Yt),pe=new Ye().fromArray(Lt);function re(B,Mt,ht,St){let It=new Uint8Array(4),pt=i.createTexture();i.bindTexture(B,pt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<ht;Jt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Mt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return pt}let et={};et[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(gr),lt(!1),mt(yu),it(i.CULL_FACE),tt(Li);function it(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function vt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Kt(B,Mt){return h[B]!==Mt?(i.bindFramebuffer(B,Mt),h[B]=Mt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function At(B,Mt){let ht=m,St=!1;if(B){ht=d.get(Mt),ht===void 0&&(ht=[],d.set(Mt,ht));let It=B.textures;if(ht.length!==It.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Jt=It.length;pt<Jt;pt++)ht[pt]=i.COLOR_ATTACHMENT0+pt;ht.length=It.length,St=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,St=!0);St&&i.drawBuffers(ht)}function Ot(B){return _!==B?(i.useProgram(B),_=B,!0):!1}let we={[Us]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};we[Ed]=i.MIN,we[Td]=i.MAX;let X={[Rd]:i.ZERO,[Cd]:i.ONE,[Id]:i.SRC_COLOR,[Mu]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Dd]:i.DST_COLOR,[kd]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[Su]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(B,Mt,ht,St,It,pt,Jt,Gt,ke,Y){if(B===Li){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(it(i.BLEND),g=!0),B!==Sd){if(B!==p||Y!==k){if((b!==Us||E!==Us)&&(i.blendEquation(i.FUNC_ADD),b=Us,E=Us),Y)switch(B){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",B);break}else switch(B){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vu:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",B);break}S=null,M=null,x=null,T=null,v.set(0,0,0),A=0,p=B,k=Y}return}It=It||Mt,pt=pt||ht,Jt=Jt||St,(Mt!==b||It!==E)&&(i.blendEquationSeparate(we[Mt],we[It]),b=Mt,E=It),(ht!==S||St!==M||pt!==x||Jt!==T)&&(i.blendFuncSeparate(X[ht],X[St],X[pt],X[Jt]),S=ht,M=St,x=pt,T=Jt),(Gt.equals(v)===!1||ke!==A)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ke),v.copy(Gt),A=ke),p=B,k=!1}function J(B,Mt){B.side===mi?vt(i.CULL_FACE):it(i.CULL_FACE);let ht=B.side===mn;Mt&&(ht=!ht),lt(ht),B.blending===Ur&&B.transparent===!1?tt(Li):tt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let St=B.stencilWrite;o.setTest(St),St&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){N!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),N=B)}function mt(B){B!==bd?(it(i.CULL_FACE),B!==z&&(B===yu?i.cullFace(i.BACK):B===Md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),z=B}function Et(B){B!==O&&(K&&i.lineWidth(B),O=B)}function zt(B,Mt,ht){B?(it(i.POLYGON_OFFSET_FILL),(P!==Mt||U!==ht)&&(P=Mt,U=ht,a.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,ht))):vt(i.POLYGON_OFFSET_FILL)}function Qt(B){B?it(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Bt(B){B===void 0&&(B=i.TEXTURE0+Z-1),ot!==B&&(i.activeTexture(B),ot=B)}function L(B,Mt,ht){ht===void 0&&(ot===null?ht=i.TEXTURE0+Z-1:ht=ot);let St=at[ht];St===void 0&&(St={type:void 0,texture:void 0},at[ht]=St),(St.type!==B||St.texture!==Mt)&&(ot!==ht&&(i.activeTexture(ht),ot=ht),i.bindTexture(B,Mt||et[B]),St.type=B,St.texture=Mt)}function me(){let B=at[ot];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function y(){try{i.texSubImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function V(){try{i.texSubImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function _t(){try{i.texStorage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function yt(){try{i.texStorage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function nt(){try{i.texImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function ft(){try{i.texImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function Ct(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function Xt(B,Mt){f[B]!==Mt&&(i.pixelStorei(B,Mt),f[B]=Mt)}function Tt(B){_e.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),_e.copy(B))}function bt(B){pe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),pe.copy(B))}function $t(B,Mt){let ht=c.get(Mt);ht===void 0&&(ht=new WeakMap,c.set(Mt,ht));let St=ht.get(B);St===void 0&&(St=i.getUniformBlockIndex(Mt,B.name),ht.set(B,St))}function ie(B,Mt){let St=c.get(Mt).get(B);l.get(Mt)!==St&&(i.uniformBlockBinding(Mt,St,B.__bindingPointIndex),l.set(Mt,St))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ot=null,at={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,b=null,S=null,M=null,E=null,x=null,T=null,v=new Zt(0,0,0),A=0,k=!1,N=null,z=null,O=null,P=null,U=null,_e.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:vt,bindFramebuffer:Kt,drawBuffers:At,useProgram:Ot,setBlending:tt,setMaterial:J,setFlipSided:lt,setCullFace:mt,setLineWidth:Et,setPolygonOffset:zt,setScissorTest:Qt,activeTexture:Bt,bindTexture:L,unbindTexture:me,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:nt,texImage3D:ft,pixelStorei:Xt,getParameter:Ct,updateUBOMapping:$t,uniformBlockBinding:ie,texStorage2D:_t,texStorage3D:yt,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:Q,scissor:Tt,viewport:bt,reset:he}}function Zy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return m?new OffscreenCanvas(R,y):ha("canvas")}function g(R,y,V){let H=1,Q=se(R);if((Q.width>V||Q.height>V)&&(H=V/Math.max(Q.width,Q.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let _t=Math.floor(H*Q.width),yt=Math.floor(H*Q.height);h===void 0&&(h=_(_t,yt));let nt=y?_(_t,yt):h;return nt.width=_t,nt.height=yt,nt.getContext("2d").drawImage(R,0,0,_t,yt),ae("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+_t+"x"+yt+")."),nt}else return"data"in R&&ae("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,y,V,H,Q,_t=!1){if(R!==null){if(i[R]!==void 0)return i[R];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let yt;H&&(yt=t.get("EXT_texture_norm16"),yt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=y;if(y===i.RED&&(V===i.FLOAT&&(nt=i.R32F),V===i.HALF_FLOAT&&(nt=i.R16F),V===i.UNSIGNED_BYTE&&(nt=i.R8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.R16_EXT),V===i.SHORT&&yt&&(nt=yt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.R8UI),V===i.UNSIGNED_SHORT&&(nt=i.R16UI),V===i.UNSIGNED_INT&&(nt=i.R32UI),V===i.BYTE&&(nt=i.R8I),V===i.SHORT&&(nt=i.R16I),V===i.INT&&(nt=i.R32I)),y===i.RG&&(V===i.FLOAT&&(nt=i.RG32F),V===i.HALF_FLOAT&&(nt=i.RG16F),V===i.UNSIGNED_BYTE&&(nt=i.RG8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RG16_EXT),V===i.SHORT&&yt&&(nt=yt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RG8UI),V===i.UNSIGNED_SHORT&&(nt=i.RG16UI),V===i.UNSIGNED_INT&&(nt=i.RG32UI),V===i.BYTE&&(nt=i.RG8I),V===i.SHORT&&(nt=i.RG16I),V===i.INT&&(nt=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),V===i.UNSIGNED_INT&&(nt=i.RGB32UI),V===i.BYTE&&(nt=i.RGB8I),V===i.SHORT&&(nt=i.RGB16I),V===i.INT&&(nt=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),V===i.UNSIGNED_INT&&(nt=i.RGBA32UI),V===i.BYTE&&(nt=i.RGBA8I),V===i.SHORT&&(nt=i.RGBA16I),V===i.INT&&(nt=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGB16_EXT),V===i.SHORT&&yt&&(nt=yt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),y===i.RGBA){let ft=_t?ua:Ee.getTransfer(Q);V===i.FLOAT&&(nt=i.RGBA32F),V===i.HALF_FLOAT&&(nt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(nt=ft===De?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGBA16_EXT),V===i.SHORT&&yt&&(nt=yt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function E(R,y){let V;return R?y===null||y===_i||y===Or?V=i.DEPTH24_STENCIL8:y===$n?V=i.DEPTH32F_STENCIL8:y===Fr&&(V=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_i||y===Or?V=i.DEPTH_COMPONENT24:y===$n?V=i.DEPTH_COMPONENT32F:y===Fr&&(V=i.DEPTH_COMPONENT16),V}function x(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){let y=R.target;y.removeEventListener("dispose",T),A(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function v(R){let y=R.target;y.removeEventListener("dispose",v),N(y)}function A(R){let y=n.get(R);if(y.__webglInit===void 0)return;let V=R.source,H=d.get(V);if(H){let Q=H[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&k(R),Object.keys(H).length===0&&d.delete(V)}n.remove(R)}function k(R){let y=n.get(R);i.deleteTexture(y.__webglTexture);let V=R.source,H=d.get(V);delete H[y.__cacheKey],a.memory.textures--}function N(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let Q=0;Q<y.__webglFramebuffer[H].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[H][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)i.deleteFramebuffer(y.__webglFramebuffer[H]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=R.textures;for(let H=0,Q=V.length;H<Q;H++){let _t=n.get(V[H]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(V[H])}n.remove(R)}let z=0;function O(){z=0}function P(){return z}function U(R){z=R}function Z(){let R=z;return R>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function K(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function ct(R,y){let V=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let H=R.image;if(H===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(V,R,y);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function $(R,y){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){vt(V,R,y);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function ot(R,y){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){vt(V,R,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function at(R,y){let V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Kt(V,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}let Yt={[_r]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},Lt={[fn]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[Wa]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Il]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},_e={[qd]:i.NEVER,[jd]:i.ALWAYS,[Kd]:i.LESS,[pc]:i.LEQUAL,[Zd]:i.EQUAL,[mc]:i.GEQUAL,[$d]:i.GREATER,[Jd]:i.NOTEQUAL};function pe(R,y){if(y.type===$n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===Il||y.magFilter===Wa||y.magFilter===Di||y.minFilter===rn||y.minFilter===Il||y.minFilter===Wa||y.minFilter===Di)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Yt[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Yt[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Yt[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Lt[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Lt[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===fn||y.minFilter!==Wa&&y.minFilter!==Di||y.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function re(R,y){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",T));let H=y.source,Q=d.get(H);Q===void 0&&(Q={},d.set(H,Q));let _t=K(y);if(_t!==R.__cacheKey){Q[_t]===void 0&&(Q[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[_t].usedTimes++;let yt=Q[R.__cacheKey];yt!==void 0&&(Q[R.__cacheKey].usedTimes--,yt.usedTimes===0&&k(y)),R.__cacheKey=_t,R.__webglTexture=Q[_t].texture}return V}function et(R,y,V){return Math.floor(Math.floor(R/V)/y)}function it(R,y,V,H){let _t=R.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,H,y.data);else{_t.sort((Xt,Tt)=>Xt.start-Tt.start);let yt=0;for(let Xt=1;Xt<_t.length;Xt++){let Tt=_t[yt],bt=_t[Xt],$t=Tt.start+Tt.count,ie=et(bt.start,y.width,4),he=et(Tt.start,y.width,4);bt.start<=$t+1&&ie===he&&et(bt.start+bt.count-1,y.width,4)===ie?Tt.count=Math.max(Tt.count,bt.start+bt.count-Tt.start):(++yt,_t[yt]=bt)}_t.length=yt+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Xt=0,Tt=_t.length;Xt<Tt;Xt++){let bt=_t[Xt],$t=Math.floor(bt.start/4),ie=Math.ceil(bt.count/4),he=$t%y.width,B=Math.floor($t/y.width),Mt=ie,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,he),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,he,B,Mt,ht,V,H,y.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function vt(R,y,V){let H=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=i.TEXTURE_3D);let Q=re(R,y),_t=y.source;e.bindTexture(H,R.__webglTexture,i.TEXTURE0+V);let yt=n.get(_t);if(_t.version!==yt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ht=Ee.getPrimaries(Ee.workingColorSpace),St=y.colorSpace===yi?null:Ee.getPrimaries(y.colorSpace),It=y.colorSpace===yi||ht===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ft=g(y.image,!1,s.maxTextureSize);ft=me(y,ft);let Ct=r.convert(y.format,y.colorSpace),Xt=r.convert(y.type),Tt=M(y.internalFormat,Ct,Xt,y.normalized,y.colorSpace,y.isVideoTexture);pe(H,y);let bt,$t=y.mipmaps,ie=y.isVideoTexture!==!0,he=yt.__version===void 0||Q===!0,B=_t.dataReady,Mt=x(y,ft);if(y.isDepthTexture)Tt=E(y.format===vs,y.type),he&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Tt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Tt,ft.width,ft.height,0,Ct,Xt,null));else if(y.isDataTexture)if($t.length>0){ie&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,Tt,$t[0].width,$t[0].height);for(let ht=0,St=$t.length;ht<St;ht++)bt=$t[ht],ie?B&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,Ct,Xt,bt.data):e.texImage2D(i.TEXTURE_2D,ht,Tt,bt.width,bt.height,0,Ct,Xt,bt.data);y.generateMipmaps=!1}else ie?(he&&e.texStorage2D(i.TEXTURE_2D,Mt,Tt,ft.width,ft.height),B&&it(y,ft,Ct,Xt)):e.texImage2D(i.TEXTURE_2D,0,Tt,ft.width,ft.height,0,Ct,Xt,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ie&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Tt,$t[0].width,$t[0].height,ft.depth);for(let ht=0,St=$t.length;ht<St;ht++)if(bt=$t[ht],y.format!==Jn)if(Ct!==null)if(ie){if(B)if(y.layerUpdates.size>0){let It=Xu(bt.width,bt.height,y.format,y.type);for(let pt of y.layerUpdates){let Jt=bt.data.subarray(pt*It/bt.data.BYTES_PER_ELEMENT,(pt+1)*It/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,pt,bt.width,bt.height,1,Ct,Jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,ft.depth,Ct,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Tt,bt.width,bt.height,ft.depth,0,bt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,ft.depth,Ct,Xt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Tt,bt.width,bt.height,ft.depth,0,Ct,Xt,bt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ie&&he&&e.texStorage2D(i.TEXTURE_2D,Mt,Tt,$t[0].width,$t[0].height);for(let ht=0,St=$t.length;ht<St;ht++)bt=$t[ht],y.format!==Jn?Ct!==null?ie?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,Ct,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Tt,bt.width,bt.height,0,bt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?B&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,bt.width,bt.height,Ct,Xt,bt.data):e.texImage2D(i.TEXTURE_2D,ht,Tt,bt.width,bt.height,0,Ct,Xt,bt.data)}else if(y.isDataArrayTexture)if(ie){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Tt,ft.width,ft.height,ft.depth),B)if(y.layerUpdates.size>0){let ht=Xu(ft.width,ft.height,y.format,y.type);for(let St of y.layerUpdates){let It=ft.data.subarray(St*ht/ft.data.BYTES_PER_ELEMENT,(St+1)*ht/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,ft.width,ft.height,1,Ct,Xt,It)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Xt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,ft.width,ft.height,ft.depth,0,Ct,Xt,ft.data);else if(y.isData3DTexture)ie?(he&&e.texStorage3D(i.TEXTURE_3D,Mt,Tt,ft.width,ft.height,ft.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Xt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,ft.width,ft.height,ft.depth,0,Ct,Xt,ft.data);else if(y.isFramebufferTexture){if(he)if(ie)e.texStorage2D(i.TEXTURE_2D,Mt,Tt,ft.width,ft.height);else{let ht=ft.width,St=ft.height;for(let It=0;It<Mt;It++)e.texImage2D(i.TEXTURE_2D,It,Tt,ht,St,0,Ct,Xt,null),ht>>=1,St>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ft.parentNode!==ht){ht.appendChild(ft),f.add(y),ht.onpaint=St=>{let It=St.changedElements;for(let pt of f)It.includes(pt.image)&&(pt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let It=i.RGBA,pt=i.RGBA,Jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,pt,Jt,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($t.length>0){if(ie&&he){let ht=se($t[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Tt,ht.width,ht.height)}for(let ht=0,St=$t.length;ht<St;ht++)bt=$t[ht],ie?B&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Ct,Xt,bt):e.texImage2D(i.TEXTURE_2D,ht,Tt,Ct,Xt,bt);y.generateMipmaps=!1}else if(ie){if(he){let ht=se(ft);e.texStorage2D(i.TEXTURE_2D,Mt,Tt,ht.width,ht.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Xt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Tt,Ct,Xt,ft);p(y)&&b(H),yt.__version=_t.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Kt(R,y,V){if(y.image.length!==6)return;let H=re(R,y),Q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let _t=n.get(Q);if(Q.version!==_t.__version||H===!0){e.activeTexture(i.TEXTURE0+V);let yt=Ee.getPrimaries(Ee.workingColorSpace),nt=y.colorSpace===yi?null:Ee.getPrimaries(y.colorSpace),ft=y.colorSpace===yi||yt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,Xt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let pt=0;pt<6;pt++)!Ct&&!Xt?Tt[pt]=g(y.image[pt],!0,s.maxCubemapSize):Tt[pt]=Xt?y.image[pt].image:y.image[pt],Tt[pt]=me(y,Tt[pt]);let bt=Tt[0],$t=r.convert(y.format,y.colorSpace),ie=r.convert(y.type),he=M(y.internalFormat,$t,ie,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,Mt=_t.__version===void 0||H===!0,ht=Q.dataReady,St=x(y,bt);pe(i.TEXTURE_CUBE_MAP,y);let It;if(Ct){B&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,he,bt.width,bt.height);for(let pt=0;pt<6;pt++){It=Tt[pt].mipmaps;for(let Jt=0;Jt<It.length;Jt++){let Gt=It[Jt];y.format!==Jn?$t!==null?B?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,0,0,Gt.width,Gt.height,$t,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,he,Gt.width,Gt.height,0,Gt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,0,0,Gt.width,Gt.height,$t,ie,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt,he,Gt.width,Gt.height,0,$t,ie,Gt.data)}}}else{if(It=y.mipmaps,B&&Mt){It.length>0&&St++;let pt=se(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,he,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Xt){B?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Tt[pt].width,Tt[pt].height,$t,ie,Tt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,he,Tt[pt].width,Tt[pt].height,0,$t,ie,Tt[pt].data);for(let Jt=0;Jt<It.length;Jt++){let ke=It[Jt].image[pt].image;B?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,0,0,ke.width,ke.height,$t,ie,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,he,ke.width,ke.height,0,$t,ie,ke.data)}}else{B?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$t,ie,Tt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,he,$t,ie,Tt[pt]);for(let Jt=0;Jt<It.length;Jt++){let Gt=It[Jt];B?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,0,0,$t,ie,Gt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Jt+1,he,$t,ie,Gt.image[pt])}}}p(y)&&b(i.TEXTURE_CUBE_MAP),_t.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function At(R,y,V,H,Q,_t){let yt=r.convert(V.format,V.colorSpace),nt=r.convert(V.type),ft=M(V.internalFormat,yt,nt,V.normalized,V.colorSpace),Ct=n.get(y),Xt=n.get(V);if(Xt.__renderTarget=y,!Ct.__hasExternalTextures){let Tt=Math.max(1,y.width>>_t),bt=Math.max(1,y.height>>_t);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,_t,ft,Tt,bt,y.depth,0,yt,nt,null):e.texImage2D(Q,_t,ft,Tt,bt,0,yt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Bt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Q,Xt.__webglTexture,0,Qt(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Q,Xt.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){let H=y.depthTexture,Q=H&&H.isDepthTexture?H.type:null,_t=E(y.stencilBuffer,Q),yt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(y),_t,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(y),_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,R)}else{let H=y.textures;for(let Q=0;Q<H.length;Q++){let _t=H[Q],yt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),ft=M(_t.internalFormat,yt,nt,_t.normalized,_t.colorSpace);Bt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(y),ft,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(y),ft,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ft,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(R,y,V){let H=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),pe(i.TEXTURE_CUBE_MAP,y.depthTexture);let Ct=r.convert(y.depthTexture.format),Xt=r.convert(y.depthTexture.type),Tt;y.depthTexture.format===Pi?Tt=i.DEPTH_COMPONENT24:y.depthTexture.format===vs&&(Tt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Tt,y.width,y.height,0,Ct,Xt,null)}}else ct(y.depthTexture,0);let _t=Q.__webglTexture,yt=Qt(y),nt=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ft=y.depthTexture.format===vs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pi)Bt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,nt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ft,nt,_t,0);else if(y.depthTexture.format===vs)Bt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,nt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ft,nt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X(R){let y=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",Q)};H.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=H}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let H=0;H<6;H++)we(y.__webglFramebuffer[H],R,H);else{let H=R.texture.mipmaps;H&&H.length>0?we(y.__webglFramebuffer[0],R,0):we(y.__webglFramebuffer,R,0)}else if(V){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=i.createRenderbuffer(),Ot(y.__webglDepthbuffer[H],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,_t)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ot(y.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,y,V){let H=n.get(R);y!==void 0&&At(H.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&X(R)}function J(R){let y=R.texture,V=n.get(R),H=n.get(y);R.addEventListener("dispose",v);let Q=R.textures,_t=R.isWebGLCubeRenderTarget===!0,yt=Q.length>1;if(yt||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=y.version,a.memory.textures++),_t){V.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[nt]=[];for(let ft=0;ft<y.mipmaps.length;ft++)V.__webglFramebuffer[nt][ft]=i.createFramebuffer()}else V.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)V.__webglFramebuffer[nt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let nt=0,ft=Q.length;nt<ft;nt++){let Ct=n.get(Q[nt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Bt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let nt=0;nt<Q.length;nt++){let ft=Q[nt];V.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[nt]);let Ct=r.convert(ft.format,ft.colorSpace),Xt=r.convert(ft.type),Tt=M(ft.internalFormat,Ct,Xt,ft.normalized,ft.colorSpace,R.isXRRenderTarget===!0),bt=Qt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,V.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),pe(i.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)At(V.__webglFramebuffer[nt][ft],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft);else At(V.__webglFramebuffer[nt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(y)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let nt=0,ft=Q.length;nt<ft;nt++){let Ct=Q[nt],Xt=n.get(Ct),Tt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Tt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Xt.__webglTexture),pe(Tt,Ct),At(V.__webglFramebuffer,R,Ct,i.COLOR_ATTACHMENT0+nt,Tt,0),p(Ct)&&b(Tt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,H.__webglTexture),pe(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)At(V.__webglFramebuffer[ft],R,y,i.COLOR_ATTACHMENT0,nt,ft);else At(V.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,nt,0);p(y)&&b(nt),e.unbindTexture()}R.depthBuffer&&X(R)}function lt(R){let y=R.textures;for(let V=0,H=y.length;V<H;V++){let Q=y[V];if(p(Q)){let _t=S(R),yt=n.get(Q).__webglTexture;e.bindTexture(_t,yt),b(_t),e.unbindTexture()}}}let mt=[],Et=[];function zt(R){if(R.samples>0){if(Bt(R)===!1){let y=R.textures,V=R.width,H=R.height,Q=i.COLOR_BUFFER_BIT,_t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(R),nt=y.length>1;if(nt)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let ft=R.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);let Xt=n.get(y[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,V,H,0,0,V,H,Q,i.NEAREST),l===!0&&(mt.length=0,Et.length=0,mt.push(i.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(mt.push(_t),Et.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);let Xt=n.get(y[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Qt(R){return Math.min(s.maxSamples,R.samples)}function Bt(R){let y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(R){let y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function me(R,y){let V=R.colorSpace,H=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ca&&V!==yi&&(Ee.getTransfer(V)===De?(H!==Jn||Q!==In)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",V)),y}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=ct,this.setTexture2DArray=$,this.setTexture3D=ot,this.setTextureCube=at,this.rebindTextures=tt,this.setupRenderTarget=J,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $y(i,t){function e(n,s=yi){let r,a=Ee.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return i.BYTE;if(n===ku)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Pl)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Uu)return i.RGB;if(n===Jn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Xa||n===Ya||n===qa||n===Ka)if(a===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===zl||n===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Hl||n===Wl||n===Xl||n===Yl||n===Za||n===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Hl)return a===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xl)return r.COMPRESSED_R11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Zl||n===$l||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===cc||n===uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return a===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===dc||n===$a||n===fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jy=`
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

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new va(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:Jy,fragmentShader:jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hh=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new uh,p={},b=e.getContextAttributes(),S=null,M=null,E=[],x=[],T=new rt,v=null,A=null,k=new pn;k.viewport=new Ye;let N=new pn;N.viewport=new Ye;let z=[k,N],O=new wl,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let it=E[et];return it===void 0&&(it=new Sr,E[et]=it),it.getTargetRaySpace()},this.getControllerGrip=function(et){let it=E[et];return it===void 0&&(it=new Sr,E[et]=it),it.getGripSpace()},this.getHand=function(et){let it=E[et];return it===void 0&&(it=new Sr,E[et]=it),it.getHandSpace()};function Z(et){let it=x.indexOf(et.inputSource);if(it===-1)return;let vt=E[it];vt!==void 0&&(vt.update(et.inputSource,et.frame,c||a),vt.dispatchEvent({type:et.type,data:et.inputSource}))}function K(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ct);for(let et=0;et<E.length;et++){let it=x[et];it!==null&&(x[et]=null,E[et].disconnect(it))}P=null,U=null,g.reset();for(let et in p)delete p[et];if(t.setRenderTarget(S),d=null,h=null,f=null,s=null,M=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(T.width,T.height,!1),A!==null){let et=A.camera;et.fov=A.fov,et.zoom=A.zoom,et.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ct),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Kt=null,At=null;b.depth&&(At=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=b.stencil?vs:Pi,Kt=b.stencil?Or:_i);let Ot={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Cn(h.textureWidth,h.textureHeight,{format:Jn,type:In,depthTexture:new ls(h.textureWidth,h.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Cn(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ct(et){for(let it=0;it<et.removed.length;it++){let vt=et.removed[it],Kt=x.indexOf(vt);Kt>=0&&(x[Kt]=null,E[Kt].disconnect(vt))}for(let it=0;it<et.added.length;it++){let vt=et.added[it],Kt=x.indexOf(vt);if(Kt===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=x.length){x.push(vt),Kt=Ot;break}else if(x[Ot]===null){x[Ot]=vt,Kt=Ot;break}if(Kt===-1)break}let At=E[Kt];At&&At.connect(vt)}}let $=new C,ot=new C;function at(et,it,vt){$.setFromMatrixPosition(it.matrixWorld),ot.setFromMatrixPosition(vt.matrixWorld);let Kt=$.distanceTo(ot),At=it.projectionMatrix.elements,Ot=vt.projectionMatrix.elements,we=At[14]/(At[10]-1),X=At[14]/(At[10]+1),tt=(At[9]+1)/At[5],J=(At[9]-1)/At[5],lt=(At[8]-1)/At[0],mt=(Ot[8]+1)/Ot[0],Et=we*lt,zt=we*mt,Qt=Kt/(-lt+mt),Bt=Qt*-lt;if(it.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Bt),et.translateZ(Qt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),At[10]===-1)et.projectionMatrix.copy(it.projectionMatrix),et.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let L=we+Qt,me=X+Qt,se=Et-Bt,R=zt+(Kt-Bt),y=tt*X/me*L,V=J*X/me*L;et.projectionMatrix.makePerspective(se,R,y,V,L,me),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Yt(et,it){it===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(it.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let it=et.near,vt=et.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),O.near=N.near=k.near=it,O.far=N.far=k.far=vt,(P!==O.near||U!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,U=O.far),O.layers.mask=et.layers.mask|6,k.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let Kt=et.parent,At=O.cameras;Yt(O,Kt);for(let Ot=0;Ot<At.length;Ot++)Yt(At[Ot],Kt);At.length===2?at(O,k,N):O.projectionMatrix.copy(k.projectionMatrix),A===null&&et.isPerspectiveCamera&&(A={camera:et,fov:et.fov,zoom:et.zoom}),Lt(et,O,Kt)};function Lt(et,it,vt){vt===null?et.matrix.copy(it.matrixWorld):(et.matrix.copy(vt.matrixWorld),et.matrix.invert(),et.matrix.multiply(it.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(it.projectionMatrix),et.projectionMatrixInverse.copy(it.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=vr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(et){l=et,h!==null&&(h.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(et){return p[et]};let _e=null;function pe(et,it){if(u=it.getViewerPose(c||a),m=it,u!==null){let vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Kt=!1;vt.length!==O.cameras.length&&(O.cameras.length=0,Kt=!0);for(let X=0;X<vt.length;X++){let tt=vt[X],J=null;if(d!==null)J=d.getViewport(tt);else{let mt=f.getViewSubImage(h,tt);J=mt.viewport,X===0&&(t.setRenderTargetTextures(M,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(M))}let lt=z[X];lt===void 0&&(lt=new pn,lt.layers.enable(X),lt.viewport=new Ye,z[X]=lt),lt.matrix.fromArray(tt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(tt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(J.x,J.y,J.width,J.height),X===0&&(O.matrix.copy(lt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Kt===!0&&O.cameras.push(lt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let X=f.getDepthInformation(vt[0]);X&&X.isValid&&X.texture&&g.init(X,s.renderState)}if(At&&At.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let X=0;X<vt.length;X++){let tt=vt[X].camera;if(tt){let J=p[tt];J||(J=new va,p[tt]=J);let lt=f.getCameraImage(tt);J.sourceTexture=lt}}}}for(let vt=0;vt<E.length;vt++){let Kt=x[vt],At=E[vt];Kt!==null&&At!==void 0&&At.update(Kt,it,c||a)}_e&&_e(et,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let re=new Df;re.setAnimationLoop(pe),this.setAnimationLoop=function(et){_e=et},this.dispose=function(){}}},Qy=new Ce,zf=new ge;zf.set(-1,0,0,0,1,0,0,0,1);function tv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,S,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),S=b.envMap,M=b.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ev(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let x=E.program;n.uniformBlockBinding(M,x)}function c(M,E){let x=s[M.id];x===void 0&&(g(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",b));let T=E.program;n.updateUBOMapping(M,T);let v=t.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){let E=f();M.__bindingPointIndex=E;let x=i.createBuffer(),T=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let E=s[M.id],x=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,A=x.length;v<A;v++){let k=x[v];if(Array.isArray(k))for(let N=0,z=k.length;N<z;N++)d(k[N],v,N,T);else d(k,v,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,E,x,T){if(_(M,E,x,T)===!0){let v=M.__offset,A=M.value;if(Array.isArray(A)){let k=0;for(let N=0;N<A.length;N++){let z=A[N],O=p(z);m(z,M.__data,k),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(k+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function m(M,E,x){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,x)}function _(M,E,x,T){let v=M.value,A=E+"_"+x;if(T[A]===void 0)return typeof v=="number"||typeof v=="boolean"?T[A]=v:ArrayBuffer.isView(v)?T[A]=v.slice():T[A]=v.clone(),!0;{let k=T[A];if(typeof v=="number"||typeof v=="boolean"){if(k!==v)return T[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(k.equals(v)===!1)return k.copy(v),!0}}return!1}function g(M){let E=M.uniforms,x=0,T=16;for(let A=0,k=E.length;A<k;A++){let N=Array.isArray(E[A])?E[A]:[E[A]];for(let z=0,O=N.length;z<O;z++){let P=N[z],U=Array.isArray(P.value)?P.value:[P.value];for(let Z=0,K=U.length;Z<K;Z++){let ct=U[Z],$=p(ct),ot=x%T,at=ot%$.boundary,Yt=ot+at;x+=at,Yt!==0&&T-Yt<$.storage&&(x+=T-Yt),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=$.storage}}}let v=x%T;return v>0&&(x+=T-v),M.__size=x,M.__cache={},this}function p(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",M),E}function b(M){let E=M.target;E.removeEventListener("dispose",b);let x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function S(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function iv(){return Ni===null&&(Ni=new _a(nv,16,16,bs,xi),Ni.name="DFG_LUT",Ni.minFilter=rn,Ni.magFilter=rn,Ni.wrapS=Ci,Ni.wrapT=Ci,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var yc=class{constructor(t={}){let{canvas:e=Qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=In}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=d,g=new Set([Fl,Ul,Nl]),p=new Set([In,_i,Fr,Or,kl,Ll]),b=new Uint32Array(4),S=new Int32Array(4),M=new C,E=null,x=null,T=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,N=!1,z=null,O=null,P=null,U=null;this._outputColorSpace=sn;let Z=0,K=0,ct=null,$=-1,ot=null,at=new Ye,Yt=new Ye,Lt=null,_e=new Zt(0),pe=0,re=e.width,et=e.height,it=1,vt=null,Kt=null,At=new Ye(0,0,re,et),Ot=new Ye(0,0,re,et),we=!1,X=new Tr,tt=!1,J=!1,lt=new Ce,mt=new C,Et=new Ye,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function Bt(){return ct===null?it:1}let L=n;function me(w,F){return e.getContext(w,F)}let se,R,y,V,H,Q,_t,yt,nt,ft,Ct,Xt,Tt,bt,$t,ie,he,B,Mt,ht,St,It,pt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){let F="webgl2";if(L=me(F,w),L===null)throw me(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(w){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),ce("WebGLRenderer: "+w.message),w}function Jt(){se=new ux(L),se.init(),St=new $y(L,se),R=new tx(L,se,t,St),y=new Ky(L,se),R.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),O=L.createFramebuffer(),P=L.createFramebuffer(),U=L.createFramebuffer(),V=new fx(L),H=new Dy,Q=new Zy(L,se,y,H,R,St,V),_t=new cx(k),yt=new mg(L),It=new j_(L,yt),nt=new hx(L,yt,V,It),ft=new mx(L,nt,yt,It,V),B=new px(L,R,Q),$t=new ex(H),Ct=new Ly(k,_t,se,R,It,$t),Xt=new tv(k,H),Tt=new Uy,bt=new Gy(se),he=new J_(k,_t,y,ft,m,l),ie=new qy(k,ft,R),pt=new ev(L,V,R,y),Mt=new Q_(L,se,V),ht=new dx(L,se,V),V.programs=Ct.programs,k.capabilities=R,k.extensions=se,k.properties=H,k.renderLists=Tt,k.shadowMap=ie,k.state=y,k.info=V}_!==In&&(A=new _x(_,e.width,e.height,o,s,r));let Gt=new hh(k,L);this.xr=Gt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(re,et,!1))},this.getSize=function(w){return w.set(re,et)},this.setSize=function(w,F,j=!0){if(Gt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,et=F,e.width=Math.floor(w*it),e.height=Math.floor(F*it),j===!0&&(e.style.width=w+"px",e.style.height=F+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(re*it,et*it).floor()},this.setDrawingBufferSize=function(w,F,j){re=w,et=F,it=j,e.width=Math.floor(w*j),e.height=Math.floor(F*j),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(_===In){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(at)},this.getViewport=function(w){return w.copy(At)},this.setViewport=function(w,F,j,q){w.isVector4?At.set(w.x,w.y,w.z,w.w):At.set(w,F,j,q),y.viewport(at.copy(At).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(Ot)},this.setScissor=function(w,F,j,q){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,F,j,q),y.scissor(Yt.copy(Ot).multiplyScalar(it).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){y.setScissorTest(we=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){Kt=w},this.getClearColor=function(w){return w.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,j=!0){let q=0;if(w){let W=!1;if(ct!==null){let Pt=ct.texture.format;W=g.has(Pt)}if(W){let Pt=ct.texture.type,Vt=p.has(Pt),kt=he.getClearColor(),Ht=he.getClearAlpha(),ne=kt.r,ve=kt.g,Se=kt.b;Vt?(b[0]=ne,b[1]=ve,b[2]=Se,b[3]=Ht,L.clearBufferuiv(L.COLOR,0,b)):(S[0]=ne,S[1]=ve,S[2]=Se,S[3]=Ht,L.clearBufferiv(L.COLOR,0,S))}else q|=L.COLOR_BUFFER_BIT}F&&(q|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),he.dispose(),Tt.dispose(),bt.dispose(),H.dispose(),_t.dispose(),ft.dispose(),It.dispose(),pt.dispose(),Ct.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",D),Gt.removeEventListener("sessionend",G),ut.stop()};function ke(w){w.preventDefault(),da("WebGLRenderer: Context Lost."),N=!0}function Y(){da("WebGLRenderer: Context Restored."),N=!1;let w=V.autoReset,F=ie.enabled,j=ie.autoUpdate,q=ie.needsUpdate,W=ie.type;Jt(),V.autoReset=w,ie.enabled=F,ie.autoUpdate=j,ie.needsUpdate=q,ie.type=W}function gt(w){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function wt(w){let F=w.target;F.removeEventListener("dispose",wt),te(F)}function te(w){jt(w),H.remove(w)}function jt(w){let F=H.get(w).programs;F!==void 0&&(F.forEach(function(j){Ct.releaseProgram(j)}),w.isShaderMaterial&&Ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,j,q,W,Pt){F===null&&(F=zt);let Vt=W.isMesh&&W.matrixWorld.determinantAffine()<0,kt=ws(w,F,j,q,W);y.setMaterial(q,Vt);let Ht=j.index,ne=1;if(q.wireframe===!0){if(Ht=nt.getWireframeAttribute(j),Ht===void 0)return;ne=2}let ve=j.drawRange,Se=j.attributes.position,ee=ve.start*ne,Le=(ve.start+ve.count)*ne;Pt!==null&&(ee=Math.max(ee,Pt.start*ne),Le=Math.min(Le,(Pt.start+Pt.count)*ne)),Ht!==null?(ee=Math.max(ee,0),Le=Math.min(Le,Ht.count)):Se!=null&&(ee=Math.max(ee,0),Le=Math.min(Le,Se.count));let tn=Le-ee;if(tn<0||tn===1/0)return;It.setup(W,q,kt,j,Ht);let He,ze=Mt;if(Ht!==null&&(He=yt.get(Ht),ze=ht,ze.setIndex(He)),W.isMesh)q.wireframe===!0?(y.setLineWidth(q.wireframeLinewidth*Bt()),ze.setMode(L.LINES)):ze.setMode(L.TRIANGLES);else if(W.isLine){let xn=q.linewidth;xn===void 0&&(xn=1),y.setLineWidth(xn*Bt()),W.isLineSegments?ze.setMode(L.LINES):W.isLineLoop?ze.setMode(L.LINE_LOOP):ze.setMode(L.LINE_STRIP)}else W.isPoints?ze.setMode(L.POINTS):W.isSprite&&ze.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(se.get("WEBGL_multi_draw"))ze.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let xn=W._multiDrawStarts,Wt=W._multiDrawCounts,Sn=W._multiDrawCount,Pe=Ht?yt.get(Ht).bytesPerElement:1,qn=H.get(q).currentProgram.getUniforms();for(let Ei=0;Ei<Sn;Ei++)qn.setValue(L,"_gl_DrawID",Ei),ze.render(xn[Ei]/Pe,Wt[Ei])}else if(W.isInstancedMesh)ze.renderInstances(ee,tn,W.count);else if(j.isInstancedBufferGeometry){let xn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Wt=Math.min(j.instanceCount,xn);ze.renderInstances(ee,tn,Wt)}else ze.render(ee,tn)};function fe(w,F,j,q){z!==null&&w.isNodeMaterial&&z.setObject(q,w),tt===!0&&$t.setState(w,j,!1),w.transparent===!0&&w.side===mi&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,Re(w,F,q),w.side=xs,w.needsUpdate=!0,Re(w,F,q),w.side=mi):Re(w,F,q)}this.compile=function(w,F,j=null){j===null&&(j=w),z!==null&&z.renderStart(w,F,j),x=bt.get(j),x.init(F),v.push(x),j.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),w!==j&&w.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights(),z!==null&&z.updateLights(x.state.lightsArray),J=this.localClippingEnabled,tt=$t.init(this.clippingPlanes,J),tt===!0&&$t.setGlobalState(this.clippingPlanes,F),z!==null&&ie.render(x.state.shadowsArray,j,F);let q=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Pt=W.material;if(Pt)if(Array.isArray(Pt))for(let Vt=0;Vt<Pt.length;Vt++){let kt=Pt[Vt];fe(kt,j,F,W),q.add(kt)}else fe(Pt,j,F,W),q.add(Pt)}),x=v.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(w,F,j=null){let q=this.compile(w,F,j);return new Promise(W=>{function Pt(){if(q.forEach(function(Vt){let Ht=H.get(Vt).currentProgram;(Ht===void 0||Ht.isReady())&&q.delete(Vt)}),q.size===0){W(w);return}setTimeout(Pt,10)}se.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let qt=null;function I(w){qt&&qt(w)}function D(){ut.stop()}function G(){ut.start()}let ut=new Df;ut.setAnimationLoop(I),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(w){qt=w,Gt.setAnimationLoop(w),w===null?ut.stop():ut.start()},Gt.addEventListener("sessionstart",D),Gt.addEventListener("sessionend",G),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(w,F);let j=Gt.enabled===!0&&Gt.isPresenting===!0,q=A!==null&&(ct===null||j)&&A.begin(k,ct);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(F),F=Gt.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,F,ct),x=bt.get(w,v.length),x.init(F),x.state.textureUnits=Q.getTextureUnits(),v.push(x),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(lt,ci,F.reversedDepth),J=this.localClippingEnabled,tt=$t.init(this.clippingPlanes,J),E=Tt.get(w,T.length),E.init(),T.push(E),Gt.enabled===!0&&Gt.isPresenting===!0){let Vt=k.xr.getDepthSensingMesh();Vt!==null&&dt(Vt,F,-1/0,k.sortObjects)}dt(w,F,0,k.sortObjects),E.finish(),z!==null&&z.updateLights(x.state.lightsArray),k.sortObjects===!0&&E.sort(vt,Kt),Qt=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Qt&&he.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&$t.beginShadows();let W=x.state.shadowsArray;if(ie.render(W,w,F),tt===!0&&$t.endShadows(),(q&&A.hasRenderPass())===!1){let Vt=E.opaque,kt=E.transmissive;if(x.setupLights(),F.isArrayCamera){let Ht=F.cameras;if(kt.length>0)for(let ne=0,ve=Ht.length;ne<ve;ne++){let Se=Ht[ne];Dt(Vt,kt,w,Se)}Qt&&he.render(w);for(let ne=0,ve=Ht.length;ne<ve;ne++){let Se=Ht[ne];st(E,w,Se,Se.viewport)}}else kt.length>0&&Dt(Vt,kt,w,F),Qt&&he.render(w),st(E,w,F)}ct!==null&&K===0&&(Q.updateMultisampleRenderTarget(ct),Q.updateRenderTargetMipmap(ct)),q&&A.end(k),w.isScene===!0&&w.onAfterRender(k,w,F),It.resetDefaultState(),$=-1,ot=null,v.pop(),v.length>0?(x=v[v.length-1],Q.setTextureUnits(x.state.textureUnits),tt===!0&&$t.setGlobalState(k.clippingPlanes,x.state.camera)):x=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,z!==null&&z.renderEnd()};function dt(w,F,j,q){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)x.pushLightProbeGrid(w);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(X)){q&&Et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);let Vt=ft.update(w),kt=w.material;kt.visible&&E.push(w,Vt,kt,j,Et.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(X))){let Vt=ft.update(w),kt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Et.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Et.copy(Vt.boundingSphere.center)),Et.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(kt)){let Ht=Vt.groups;for(let ne=0,ve=Ht.length;ne<ve;ne++){let Se=Ht[ne],ee=kt[Se.materialIndex];ee&&ee.visible&&E.push(w,Vt,ee,j,Et.z,Se,F)}}else kt.visible&&E.push(w,Vt,kt,j,Et.z,null,F)}}let Pt=w.children;for(let Vt=0,kt=Pt.length;Vt<kt;Vt++)dt(Pt[Vt],F,j,q)}function st(w,F,j,q){let{opaque:W,transmissive:Pt,transparent:Vt}=w;x.setupLightsView(j),tt===!0&&$t.setGlobalState(k.clippingPlanes,j),q&&y.viewport(at.copy(q)),W.length>0&&de(W,F,j),Pt.length>0&&de(Pt,F,j),Vt.length>0&&de(Vt,F,j),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Dt(w,F,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[q.id]===void 0){let ee=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[q.id]=new Cn(1,1,{generateMipmaps:!0,type:ee?xi:In,minFilter:Di,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let Pt=x.state.transmissionRenderTarget[q.id],Vt=q.viewport||at;Pt.setSize(Vt.z*k.transmissionResolutionScale,Vt.w*k.transmissionResolutionScale);let kt=k.getRenderTarget(),Ht=k.getActiveCubeFace(),ne=k.getActiveMipmapLevel();k.setRenderTarget(Pt),k.getClearColor(_e),pe=k.getClearAlpha(),pe<1&&k.setClearColor(16777215,.5),k.clear(),Qt&&he.render(j);let ve=k.toneMapping;k.toneMapping=gi;let Se=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),x.setupLightsView(q),tt===!0&&$t.setGlobalState(k.clippingPlanes,q),de(w,j,q),Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Le=0,tn=F.length;Le<tn;Le++){let He=F[Le],{object:ze,geometry:xn,material:Wt,group:Sn}=He;if(Wt.side===mi&&ze.layers.test(q.layers)){let Pe=Wt.side;Wt.side=mn,Wt.needsUpdate=!0,Ae(ze,j,q,xn,Wt,Sn),Wt.side=Pe,Wt.needsUpdate=!0,ee=!0}}ee===!0&&(Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt))}k.setRenderTarget(kt,Ht,ne),k.setClearColor(_e,pe),Se!==void 0&&(q.viewport=Se),k.toneMapping=ve}function de(w,F,j){let q=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Pt=w.length;W<Pt;W++){let Vt=w[W],{object:kt,geometry:Ht,group:ne}=Vt,ve=Vt.material;ve.allowOverride===!0&&q!==null&&(ve=q),kt.layers.test(j.layers)&&Ae(kt,F,j,Ht,ve,ne)}}function Ae(w,F,j,q,W,Pt){z!==null&&W.isNodeMaterial&&z.setObject(w,W),w.onBeforeRender(k,F,j,q,W,Pt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(k,F,j,q,w,Pt),W.transparent===!0&&W.side===mi&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,k.renderBufferDirect(j,F,q,W,w,Pt),W.side=xs,W.needsUpdate=!0,k.renderBufferDirect(j,F,q,W,w,Pt),W.side=mi):k.renderBufferDirect(j,F,q,W,w,Pt),w.onAfterRender(k,F,j,q,W,Pt)}function Re(w,F,j){F.isScene!==!0&&(F=zt);let q=H.get(w),W=x.state.lights,Pt=x.state.shadowsArray,Vt=W.state.version,kt=Ct.getParameters(w,W.state,Pt,F,j,x.state.lightProbeGridArray),Ht=Ct.getProgramCacheKey(kt),ne=q.programs;q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;let ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;q.envMap=_t.get(w.envMap||q.environment,ve),q.envMapRotation=q.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,ne===void 0&&(w.addEventListener("dispose",wt),ne=new Map,q.programs=ne);let Se=ne.get(Ht);if(Se!==void 0){if(q.currentProgram===Se&&q.lightsStateVersion===Vt)return Tn(w,kt),Se}else kt.uniforms=Ct.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,j,kt),w.onBeforeCompile(kt,k),Se=Ct.acquireProgram(kt,Ht),ne.set(Ht,Se),q.uniforms=kt.uniforms;let ee=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ee.clippingPlanes=$t.uniform),Tn(w,kt),q.needsLights=nn(w),q.lightsStateVersion=Vt,q.needsLights&&(ee.ambientLightColor.value=W.state.ambient,ee.lightProbe.value=W.state.probe,ee.sunLights.value=W.state.sun,ee.sunLightShadows.value=W.state.sunShadow,ee.directionalLights.value=W.state.directional,ee.directionalLightShadows.value=W.state.directionalShadow,ee.spotLights.value=W.state.spot,ee.spotLightShadows.value=W.state.spotShadow,ee.rectAreaLights.value=W.state.rectArea,ee.ltc_1.value=W.state.rectAreaLTC1,ee.ltc_2.value=W.state.rectAreaLTC2,ee.pointLights.value=W.state.point,ee.pointLightShadows.value=W.state.pointShadow,ee.hemisphereLights.value=W.state.hemi,ee.sunShadowMatrix.value=W.state.sunShadowMatrix,ee.sunShadowCascade.value=W.state.sunShadowCascade,ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ee.spotLightMatrix.value=W.state.spotLightMatrix,ee.spotLightMap.value=W.state.spotLightMap,ee.pointShadowMatrix.value=W.state.pointShadowMatrix),q.lightProbeGrid=x.state.lightProbeGridArray.length>0,q.currentProgram=Se,q.uniformsList=null,Se}function Be(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Vr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Tn(w,F){let j=H.get(w);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function si(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let j=0,q=w.length;j<q;j++){let W=w[j];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function ws(w,F,j,q,W){F.isScene!==!0&&(F=zt),Q.resetTextureUnits();let Pt=F.fog,Vt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,kt=ct===null?k.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ee.workingColorSpace,Ht=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,ne=_t.get(q.envMap||Vt,Ht),ve=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Se=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ee=!!j.morphAttributes.position,Le=!!j.morphAttributes.normal,tn=!!j.morphAttributes.color,He=gi;q.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(He=k.toneMapping);let ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xn=ze!==void 0?ze.length:0,Wt=H.get(q),Sn=x.state.lights;if(tt===!0&&(J===!0||w!==ot)){let Ge=w===ot&&q.id===$;$t.setState(q,w,Ge)}let Pe=!1;q.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Sn.state.version||Wt.outputColorSpace!==kt||W.isBatchedMesh&&Wt.batching===!1||!W.isBatchedMesh&&Wt.batching===!0||W.isBatchedMesh&&Wt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Wt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Wt.instancing===!1||!W.isInstancedMesh&&Wt.instancing===!0||W.isSkinnedMesh&&Wt.skinning===!1||!W.isSkinnedMesh&&Wt.skinning===!0||W.isInstancedMesh&&Wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Wt.instancingMorph===!1&&W.morphTexture!==null||Wt.envMap!==ne||q.fog===!0&&Wt.fog!==Pt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==$t.numPlanes||Wt.numIntersection!==$t.numIntersection)||Wt.vertexAlphas!==ve||Wt.vertexTangents!==Se||Wt.morphTargets!==ee||Wt.morphNormals!==Le||Wt.morphColors!==tn||Wt.toneMapping!==He||Wt.morphTargetsCount!==xn||!!Wt.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,Wt.__version=q.version);let qn=Wt.currentProgram;Pe===!0&&(qn=Re(q,F,W),z&&q.isNodeMaterial&&z.onUpdateProgram(q,qn,Wt));let Ei=!1,ji=!1,Ks=!1,Fe=qn.getUniforms(),Qe=Wt.uniforms;if(y.useProgram(qn.program)&&(Ei=!0,ji=!0,Ks=!0),q.id!==$&&($=q.id,ji=!0),Wt.needsLights){let Ge=si(x.state.lightProbeGridArray,W);Wt.lightProbeGrid!==Ge&&(Wt.lightProbeGrid=Ge,ji=!0)}if(Ei||ot!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Fe.setValue(L,"projectionMatrix",w.projectionMatrix),Fe.setValue(L,"viewMatrix",w.matrixWorldInverse);let ts=Fe.map.cameraPosition;ts!==void 0&&ts.setValue(L,mt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Fe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Fe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),ot!==w&&(ot=w,ji=!0,Ks=!0)}if(Wt.needsLights&&(Sn.state.sunShadowMap.length>0&&Fe.setValue(L,"sunShadowMap",Sn.state.sunShadowMap,Q),Sn.state.directionalShadowMap.length>0&&Fe.setValue(L,"directionalShadowMap",Sn.state.directionalShadowMap,Q),Sn.state.spotShadowMap.length>0&&Fe.setValue(L,"spotShadowMap",Sn.state.spotShadowMap,Q),Sn.state.pointShadowMap.length>0&&Fe.setValue(L,"pointShadowMap",Sn.state.pointShadowMap,Q)),W.isSkinnedMesh){Fe.setOptional(L,W,"bindMatrix"),Fe.setOptional(L,W,"bindMatrixInverse");let Ge=W.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Fe.setValue(L,"boneTexture",Ge.boneTexture,Q))}W.isBatchedMesh&&(Fe.setOptional(L,W,"batchingTexture"),Fe.setValue(L,"batchingTexture",W._matricesTexture,Q),Fe.setOptional(L,W,"batchingIdTexture"),Fe.setValue(L,"batchingIdTexture",W._indirectTexture,Q),Fe.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&Fe.setValue(L,"batchingColorTexture",W._colorsTexture,Q));let Qi=j.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&B.update(W,j,qn),(ji||Wt.receiveShadow!==W.receiveShadow)&&(Wt.receiveShadow=W.receiveShadow,Fe.setValue(L,"receiveShadow",W.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(Qe.envMapIntensity.value=F.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=iv()),ji){if(Fe.setValue(L,"toneMappingExposure",k.toneMappingExposure),Wt.needsLights&&co(Qe,Ks),Pt&&q.fog===!0&&Xt.refreshFogUniforms(Qe,Pt),Xt.refreshMaterialUniforms(Qe,q,it,et,x.state.transmissionRenderTarget[w.id]),Wt.needsLights&&Wt.lightProbeGrid){let Ge=Wt.lightProbeGrid;Qe.probesSH.value=Ge.texture,Qe.probesMin.value.copy(Ge.boundingBox.min),Qe.probesMax.value.copy(Ge.boundingBox.max),Qe.probesResolution.value.copy(Ge.resolution)}Vr.upload(L,Be(Wt),Qe,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vr.upload(L,Be(Wt),Qe,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Fe.setValue(L,"center",W.center),Fe.setValue(L,"modelViewMatrix",W.modelViewMatrix),Fe.setValue(L,"normalMatrix",W.normalMatrix),Fe.setValue(L,"modelMatrix",W.matrixWorld),q.uniformsGroups!==void 0){let Ge=q.uniformsGroups;for(let ts=0,Zs=Ge.length;ts<Zs;ts++){let Uh=Ge[ts];pt.update(Uh,qn),pt.bind(Uh,qn)}}return qn}function co(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(w,F,j){let q=H.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=F,H.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let j=H.get(w);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,j=0){ct=w,Z=F,K=j;let q=null,W=!1,Pt=!1;if(w){let kt=H.get(w);if(kt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,kt.__webglFramebuffer),at.copy(w.viewport),Yt.copy(w.scissor),Lt=w.scissorTest,y.viewport(at),y.scissor(Yt),y.setScissorTest(Lt),$=-1;return}else if(kt.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(kt.__hasExternalTextures)Q.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ve=w.depthTexture;if(kt.__boundDepthTexture!==ve){if(ve!==null&&H.has(ve)&&(w.width!==ve.image.width||w.height!==ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Pt=!0);let ne=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[F])?q=ne[F][j]:q=ne[F],W=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?q=H.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?q=ne[j]:q=ne,at.copy(w.viewport),Yt.copy(w.scissor),Lt=w.scissorTest}else at.copy(At).multiplyScalar(it).floor(),Yt.copy(Ot).multiplyScalar(it).floor(),Lt=we;if(j!==0&&(q=O),y.bindFramebuffer(L.FRAMEBUFFER,q)&&y.drawBuffers(w,q),y.viewport(at),y.scissor(Yt),y.setScissorTest(Lt),W){let kt=H.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,kt.__webglTexture,j)}else if(Pt){let kt=F;for(let Ht=0;Ht<w.textures.length;Ht++){let ne=H.get(w.textures[Ht]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ht,ne.__webglTexture,j,kt)}}else if(w!==null&&j!==0){let kt=H.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,j)}$=-1};function Yn(w){let F=H.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=R.textureFormatReadable(w.format),F.__typeReadable=R.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,j,q,W,Pt,Vt,kt=0){if(!(w&&w.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ht=Ht[Vt]),Ht){y.bindFramebuffer(L.FRAMEBUFFER,Ht);try{let ne=w.textures[kt],ve=ne.format,Se=ne.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+kt);let ee=Yn(ne);if(ee.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-q&&j>=0&&j<=w.height-W&&L.readPixels(F,j,q,W,St.convert(ve),St.convert(Se),Pt)}finally{let ne=ct!==null?H.get(ct).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(w,F,j,q,W,Pt,Vt,kt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ht=Ht[Vt]),Ht)if(F>=0&&F<=w.width-q&&j>=0&&j<=w.height-W){y.bindFramebuffer(L.FRAMEBUFFER,Ht);let ne=w.textures[kt],ve=ne.format,Se=ne.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+kt);let ee=Yn(ne);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.bufferData(L.PIXEL_PACK_BUFFER,Pt.byteLength,L.STREAM_READ),L.readPixels(F,j,q,W,St.convert(ve),St.convert(Se),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let tn=ct!==null?H.get(ct).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,tn);let He=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ef(L,He,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Pt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Le),L.deleteSync(He),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,j=0){let q=Math.pow(2,-j),W=Math.floor(w.image.width*q),Pt=Math.floor(w.image.height*q),Vt=F!==null?F.x:0,kt=F!==null?F.y:0;Q.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Vt,kt,W,Pt),y.unbindTexture()},this.copyTextureToTexture=function(w,F,j=null,q=null,W=0,Pt=0){let Vt,kt,Ht,ne,ve,Se,ee,Le,tn,He=w.isCompressedTexture?w.mipmaps[Pt]:w.image;if(j!==null)Vt=j.max.x-j.min.x,kt=j.max.y-j.min.y,Ht=j.isBox3?j.max.z-j.min.z:1,ne=j.min.x,ve=j.min.y,Se=j.isBox3?j.min.z:0;else{let Qe=Math.pow(2,-W);Vt=Math.floor(He.width*Qe),kt=Math.floor(He.height*Qe),w.isDataArrayTexture?Ht=He.depth:w.isData3DTexture?Ht=Math.floor(He.depth*Qe):Ht=1,ne=0,ve=0,Se=0}q!==null?(ee=q.x,Le=q.y,tn=q.z):(ee=0,Le=0,tn=0);let ze=St.convert(F.format),xn=St.convert(F.type),Wt;F.isData3DTexture?(Q.setTexture3D(F,0),Wt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),Wt=L.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),Wt=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let Sn=y.getParameter(L.UNPACK_ROW_LENGTH),Pe=y.getParameter(L.UNPACK_IMAGE_HEIGHT),qn=y.getParameter(L.UNPACK_SKIP_PIXELS),Ei=y.getParameter(L.UNPACK_SKIP_ROWS),ji=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,He.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,He.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,ne),y.pixelStorei(L.UNPACK_SKIP_ROWS,ve),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Se);let Ks=w.isDataArrayTexture||w.isData3DTexture,Fe=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Qe=H.get(w),Qi=H.get(F),Ge=H.get(Qe.__renderTarget),ts=H.get(Qi.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,Ge.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Zs=0;Zs<Ht;Zs++)Ks&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(w).__webglTexture,W,Se+Zs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Pt,tn+Zs)),L.blitFramebuffer(ne,ve,Vt,kt,ee,Le,Vt,kt,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||H.has(w)){let Qe=H.get(w),Qi=H.get(F);y.bindFramebuffer(L.READ_FRAMEBUFFER,P),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,U);for(let Ge=0;Ge<Ht;Ge++)Ks?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qe.__webglTexture,W,Se+Ge):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qe.__webglTexture,W),Fe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qi.__webglTexture,Pt,tn+Ge):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qi.__webglTexture,Pt),W!==0?L.blitFramebuffer(ne,ve,Vt,kt,ee,Le,Vt,kt,L.COLOR_BUFFER_BIT,L.NEAREST):Fe?L.copyTexSubImage3D(Wt,Pt,ee,Le,tn+Ge,ne,ve,Vt,kt):L.copyTexSubImage2D(Wt,Pt,ee,Le,ne,ve,Vt,kt);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Fe?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Wt,Pt,ee,Le,tn,Vt,kt,Ht,ze,xn,He.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Wt,Pt,ee,Le,tn,Vt,kt,Ht,ze,He.data):L.texSubImage3D(Wt,Pt,ee,Le,tn,Vt,kt,Ht,ze,xn,He):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Pt,ee,Le,Vt,kt,ze,xn,He.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Pt,ee,Le,He.width,He.height,ze,He.data):L.texSubImage2D(L.TEXTURE_2D,Pt,ee,Le,Vt,kt,ze,xn,He);y.pixelStorei(L.UNPACK_ROW_LENGTH,Sn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe),y.pixelStorei(L.UNPACK_SKIP_PIXELS,qn),y.pixelStorei(L.UNPACK_SKIP_ROWS,Ei),y.pixelStorei(L.UNPACK_SKIP_IMAGES,ji),Pt===0&&F.generateMipmaps&&L.generateMipmap(Wt),y.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){Z=0,K=0,ct=null,y.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var Vf={type:"change"},fh={type:"start"},Hf={type:"end"},Mc=new as,Gf=new Nn,sv=Math.cos(70*zu.DEG2RAD),cn=new C,Pn=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6,Sc=class extends za{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Rn,this._lastTargetPosition=new C,this._quat=new Rn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new C,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new C,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=av.bind(this),this._onPointerDown=rv.bind(this),this._onPointerUp=ov.bind(this),this._onContextMenu=pv.bind(this),this._onMouseWheel=uv.bind(this),this._onKeyDown=hv.bind(this),this._onTouchStart=dv.bind(this),this._onTouchMove=fv.bind(this),this._onMouseDown=lv.bind(this),this._onMouseMove=cv.bind(this),this._interceptControlDown=mv.bind(this),this._interceptControlUp=gv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vf),this.update(),this.state=Ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;cn.copy(e).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),e.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=cn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Mc.origin.copy(this.object.position),Mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mc.direction))<sv?this.object.lookAt(this.target):(Gf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mc.intersectPlane(Gf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(Vf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){cn.setFromMatrixColumn(e,0),cn.multiplyScalar(-t),this._panOffset.add(cn)}_panUp(t,e){this.screenSpacePanning===!0?cn.setFromMatrixColumn(e,1):(cn.setFromMatrixColumn(e,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(t),this._panOffset.add(cn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;cn.copy(s).sub(this.target);let r=cn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function rv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function av(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ov(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hf),this.state=Ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ue.DOLLY;break;case gs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}break;case gs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(fh)}function cv(i){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function uv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(i.preventDefault(),this.dispatchEvent(fh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hf))}function hv(i){this.enabled!==!1&&this._handleKeyDown(i)}function dv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ue.TOUCH_ROTATE;break;case _s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case _s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ue.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(fh)}function fv(i){switch(this._trackPointer(i),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ue.NONE}}function pv(i){this.enabled!==!1&&i.preventDefault()}function mv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var wc=class extends Ps{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ye;t.deleteAttribute("uv");let e=new Me({side:mn}),n=new Me,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new di(t,n,6),o=new qe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ut(t,Wr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ut(t,Wr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ut(t,Wr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Ut(t,Wr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new Ut(t,Wr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new Ut(t,Wr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Wr(i){return new La({color:0,emissive:16777215,emissiveIntensity:i})}var _v=42e5,ph=[1,.8,.65,.5],Wf=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),xv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Xf(i,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:n=null}={}){let s=window.devicePixelRatio||1,r;try{r=new yc({canvas:i,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=sn,r.toneMapping=Ga,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=El,r.shadowMap.autoUpdate=!1,r.setClearColor(new Zt(t),1);let a=new Ps,o=new Gr(r);a.environment=o.fromScene(new wc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new pn(32,1,4,1500);l.position.set(0,160,150),a.add(new Na(16777215,13616860,.35));let c=new Oa(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new Ut(new pi(900,900),new Pa({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let f=new Sc(l,i);f.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),f.dampingFactor=.14,f.rotateSpeed=.75,f.zoomSpeed=.9,f.panSpeed=.8,f.screenSpacePanning=!0,f.minDistance=9,f.maxDistance=1200,f.minPolarAngle=.06,f.maxPolarAngle=1.32,f.zoomToCursor=!0,f.cursor.set(0,6,-3),f.maxTargetRadius=85,f.target.set(0,4,0);function h(){let Y=l.position.distanceTo(f.target),gt=Math.min(4,Math.max(.4,Y*.04));Math.abs(gt-l.near)>gt*.08&&(l.near=gt,l.far=Math.max(900,Y*6),l.updateProjectionMatrix())}let d=0,m=0,_=!1,g=!0,p=new Set,b=new Set,S=[],M=new Set,E=1,x=0,T=0,v=0,A=0,k=[],N=0,z=0,O=0;function P(){!d&&!m&&(d=requestAnimationFrame(K))}function U(){!d&&!m&&(m=setTimeout(()=>{m=0,P()},33))}function Z(Y){Math.abs(Y-T)<.01||(T=Y,r.setPixelRatio(Y),r.setSize(i.clientWidth||1,i.clientHeight||1,!1))}function K(Y){d=0;let gt=f.update();for(let jt of M){let fe=Math.min(1,(Y-(jt.bas??=Y))/jt.sure);jt.adim(xv(fe)),jt.golge&&(g=!0),fe>=1?(M.delete(jt),jt.bitti?.()):gt=!0}for(let jt of p)jt(Y)&&(gt=!0);let wt=!1;for(let jt of b)jt(Y,A?Math.min(100,Y-A):33)&&(wt=!0);A=wt?Y:0;let te=gt||wt;clearTimeout(O),h(),Z(E*ph[x]),g&&(r.shadowMap.needsUpdate=!0,g=!1),r.render(a,l),Xt(),gt?ct(Y):(v=0,k=[]),gt?P():wt&&U(),!te&&x>0&&(O=setTimeout(()=>{Z(E),r.render(a,l),Xt()},300))}function ct(Y){if(v&&k.push(Y-v),v=Y,k.length<24)return;let gt=k.reduce((wt,te)=>wt+te,0)/k.length;k=[],!(Y-z<500)&&(gt>26&&x<ph.length-1?(x++,N=0,z=Y,e("kalite",x)):gt<19&&x>0&&++N>=3&&(x--,N=0,z=Y))}function $(){let Y=i.clientWidth||1,gt=i.clientHeight||1;E=Math.max(.5,Math.min(s,2,Math.sqrt(_v/(Y*gt)))),T=0,Z(E*ph[x]),l.aspect=Y/gt,_e();for(let wt of S)wt.w=0;se=0,R=null,!_&&re&&J(re,!0),P()}let ot=0,at=0;new ResizeObserver(()=>{clearTimeout(ot);let Y=performance.now();if(document.documentElement.dataset.suruklenen&&Y-at>125){at=Y,$();return}ot=setTimeout(()=>{at=performance.now(),$()},110)}).observe(i),window.addEventListener("bote-erisim",()=>{f.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let Y of S)Y.w=0;P()});let Lt=0;function _e(){let Y=i.clientWidth||1,gt=i.clientHeight||1;Lt>0?l.setViewOffset(Y,gt,0,Math.min(Lt,gt*.9)/2,Y,gt):l.clearViewOffset(),l.updateProjectionMatrix()}function pe(Y,gt=!1){Lt=Math.max(0,Y||0),R=null,_e(),!_&&re?J(re,gt):P()}f.addEventListener("change",P),f.addEventListener("start",()=>{_=!0,e("kamera-elle")});let re=null,et=new C(0,1,0),it=new C,vt=new C,Kt=new C,At=new C,Ot=new C,we=Y=>Y.isBox3?Y:new En(new C(Y[0],Y[1],Y[2]),new C(Y[3],Y[4],Y[5]));function X(Y,gt){let wt=n?.()||{},te=Math.min(Lt,gt*.9),jt=wt.sol??16,fe=Y-(wt.sag??16),qt=wt.ust??16,I=gt-Math.max(wt.alt??16,te+12);if(fe-jt<80){let D=Y/2;jt=D-40,fe=D+40}if(I-qt<80){let D=(Math.max(0,qt)+Math.max(qt+80,I))/2;qt=D-40,I=D+40}return{x0:jt,y0:qt,x1:fe,y1:I,engel:wt.engel||[]}}function tt(Y,gt){let wt=i.clientWidth||1,te=i.clientHeight||1,jt=we(Y),fe=new C(...gt).normalize();it.crossVectors(et,fe).normalize(),vt.crossVectors(fe,it),Kt.copy(fe).negate();let qt=R=X(wt,te),I=Math.tan(l.fov*Math.PI/360),D=I*(wt/te),G=Math.min(Lt,te*.9)/te,ut=(qt.x0/wt*2-1)*D,dt=(qt.x1/wt*2-1)*D,st=(1-qt.y0/te*2-G)*I,Dt=(1-qt.y1/te*2-G)*I;jt.getCenter(At);let de=[],Ae=[],Re=[];for(let nn=0;nn<8;nn++)Ot.set(nn&1?jt.max.x:jt.min.x,nn&2?jt.max.y:jt.min.y,nn&4?jt.max.z:jt.min.z).sub(At),de.push(Ot.dot(it)),Ae.push(Ot.dot(vt)),Re.push(Ot.dot(Kt));let Be=0;for(let nn=0;nn<8;nn++){Be=Math.max(Be,2-Re[nn]);for(let Yn=0;Yn<8;Yn++)Be=Math.max(Be,(de[nn]-de[Yn]-dt*Re[nn]+ut*Re[Yn])/(dt-ut),(Ae[nn]-Ae[Yn]-st*Re[nn]+Dt*Re[Yn])/(st-Dt))}Be=Math.min(f.maxDistance,Math.max(f.minDistance,Be));let Tn=(nn,Yn,w)=>{let F=-1/0,j=1/0;for(let W=0;W<8;W++)F=Math.max(F,nn[W]-w*(Re[W]+Be)),j=Math.min(j,nn[W]-Yn*(Re[W]+Be));if(!(j>F))return(F+j)/2;let q=W=>{let Pt=-1/0,Vt=1/0;for(let kt=0;kt<8;kt++){let Ht=(nn[kt]-W)/(Re[kt]+Be);Ht>Pt&&(Pt=Ht),Ht<Vt&&(Vt=Ht)}return w-Pt-(Vt-Yn)};for(let W=0;W<32;W++){let Pt=(F+j)/2;q(Pt)>0?j=Pt:F=Pt}return(F+j)/2},si=Tn(de,ut,dt),ws=Tn(Ae,Dt,st),co=At.clone().addScaledVector(it,si).addScaledVector(vt,ws);return{merkez:co,konum:co.clone().addScaledVector(fe,Be)}}function J(Y,gt=!1){re=Y,_=!1;let{merkez:wt,konum:te}=tt(Y.kutu,Y.yon);if(gt||Wf())return l.position.copy(te),f.target.copy(wt),f.update(),P(),Promise.resolve();let jt=l.position.clone(),fe=f.target.clone();return f.enabled=!1,mt(650,qt=>{l.position.lerpVectors(jt,te,qt),f.target.lerpVectors(fe,wt,qt),l.lookAt(f.target)}).then(()=>{f.enabled=!0,f.update()})}function lt(){if(!re)return null;l.updateMatrixWorld();let Y=i.clientWidth||1,gt=i.clientHeight||1,wt=we(re.kutu),te=1/0,jt=-1/0,fe=1/0,qt=-1/0;for(let I=0;I<8;I++){Ot.set(I&1?wt.max.x:wt.min.x,I&2?wt.max.y:wt.min.y,I&4?wt.max.z:wt.min.z).project(l);let D=(Ot.x+1)/2*Y,G=(1-Ot.y)/2*gt;te=Math.min(te,D),jt=Math.max(jt,D),fe=Math.min(fe,G),qt=Math.max(qt,G)}return{kutu:{x0:te,y0:fe,x1:jt,y1:qt},guvenli:X(Y,gt),w:Y,h:gt}}function mt(Y,gt,wt=!1){return Wf()?(gt(1),wt&&(g=!0),P(),Promise.resolve()):new Promise(te=>{M.add({sure:Y,adim:gt,bitti:te,golge:wt}),P()})}let Et=i.parentElement.querySelector(".etiketler"),zt=i.parentElement.querySelector(".isaretler")||Et,Qt="http://www.w3.org/2000/svg",Bt=document.createElementNS(Qt,"svg");Bt.setAttribute("class","cizgiler"),Bt.setAttribute("aria-hidden","true"),Et.appendChild(Bt);let L=[],me=[],se=0,R=null,y=new C,V=new C,H=new C,Q=Y=>{for(let gt=Y;gt;gt=gt.parent)if(!gt.visible)return!1;return!0};function _t(Y){for(let gt of S)gt.el.remove(),gt.cizgi.remove(),gt.nokt.remove();S.length=0;for(let{nokta:gt,metin:wt,tur:te}of Y){let jt=document.createElement("div");jt.className="etiket"+(te?` etiket-${te}`:""),jt.textContent=wt,Et.appendChild(jt);let fe=document.createElementNS(Qt,"line"),qt=document.createElementNS(Qt,"circle");qt.setAttribute("r","4.5"),Bt.append(fe,qt),S.push({el:jt,nokta:gt,cizgi:fe,nokt:qt,w:0,h:0})}P()}function yt(Y){for(let gt of L)gt.el.remove();L.length=0;for(let gt of Y)gt.el.hidden=!0,zt.appendChild(gt.el),L.push({...gt,acik:!1});me=L.map((gt,wt)=>[gt,wt]).sort((gt,wt)=>(wt[0].oncelik??1)-(gt[0].oncelik??1)||gt[1]-wt[1]).map(([gt])=>gt),se=0,R=null,P()}function nt(Y,gt){for(let wt=L.length-1;wt>=0;wt--){let te=L[wt].el;if(te.hidden)continue;let jt=te.getBoundingClientRect(),fe=jt.width/2;if(fe&&Math.hypot(Y-jt.left-fe,gt-jt.top-jt.height/2)<=fe+2)return te}return null}function ft(Y,gt){if(!L.length)return;se||(se=parseFloat(getComputedStyle(zt).getPropertyValue("--isaret"))||44);let wt=R||(R=X(Y,gt)),te=se+4,jt=[],fe=document.activeElement,qt=Math.tan(l.fov*Math.PI/360),I=L.some(D=>D.el===fe)?[...me].sort((D,G)=>(G.el===fe)-(D.el===fe)):me;for(let D of I){let G=!1,ut=0,dt=0;(!D.nesne||Q(D.nesne))&&(D.nesne?V.copy(D.yerel).applyMatrix4(D.nesne.matrixWorld):V.copy(D.nokta),H.copy(V).applyMatrix4(l.matrixWorldInverse),H.z<-l.near&&(y.copy(V).project(l),ut=(y.x+1)/2*Y,dt=(1-y.y)/2*gt,G=ut>=wt.x0&&ut<=wt.x1&&dt>=wt.y0&&dt<=wt.y1&&!wt.engel.some(st=>ut>st.x0-te/2&&ut<st.x1+te/2&&dt>st.y0-te/2&&dt<st.y1+te/2),G&&D.adim&&(G=D.adim*gt/(2*-H.z*qt)>=se),G&&D.el!==fe&&(G=!jt.some(st=>Math.abs(st.x-ut)<te&&Math.abs(st.y-dt)<te)))),G&&(jt.push({x:ut,y:dt}),D.el.style.transform=`translate3d(${Math.round(ut)}px,${Math.round(dt)}px,0)`),D.acik!==G&&(D.acik=G,D.el.hidden=!G)}}let Ct=(Y,gt,wt)=>(y.copy(Y).project(l),{x:(y.x+1)/2*gt,y:(1-y.y)/2*wt,gor:y.z<1&&Math.abs(y.x)<1.05&&Math.abs(y.y)<1.05});function Xt(){let Y=i.clientWidth,gt=i.clientHeight;if(ft(Y,gt),!S.length)return;Bt.setAttribute("width",Y),Bt.setAttribute("height",gt);let wt=[],te=8,jt=30,fe=S.map(qt=>({e:qt,p:Ct(qt.nokta,Y,gt)})).sort((qt,I)=>I.p.y-qt.p.y);for(let{e:qt,p:I}of fe){qt.w||(qt.w=qt.el.offsetWidth,qt.h=qt.el.offsetHeight);let D=Math.min(Math.max(I.x-qt.w/2,6),Y-qt.w-6),G=I.y-jt-qt.h,ut=!1;for(let st=0;st<6;st++){let Dt=wt.find(de=>D<de.x+de.w+te&&D+qt.w+te>de.x&&G<de.y+de.h+te&&G+qt.h+te>de.y);if(!Dt)break;if(G=Dt.y-qt.h-te,G<4){G=I.y+jt,ut=!0,D=Math.min(Math.max(Dt.x+Dt.w+te,6),Y-qt.w-6);break}}wt.push({x:D,y:G,w:qt.w,h:qt.h});let dt=I.gor?"1":"0";qt.el.style.opacity=dt,qt.cizgi.style.opacity=dt,qt.nokt.style.opacity=dt,qt.el.style.transform=`translate3d(${Math.round(D)}px,${Math.round(G)}px,0)`,qt.cizgi.setAttribute("x1",I.x.toFixed(1)),qt.cizgi.setAttribute("y1",I.y.toFixed(1)),qt.cizgi.setAttribute("x2",(D+qt.w/2).toFixed(1)),qt.cizgi.setAttribute("y2",(ut?G:G+qt.h).toFixed(1)),qt.nokt.setAttribute("cx",I.x.toFixed(1)),qt.nokt.setAttribute("cy",I.y.toFixed(1))}}let Tt=new Ba,bt=new rt,$t=[],ie=new Set,he=new C,B=new C,Mt=new C,ht=Y=>!Y.isMesh||Y.isInstancedMesh||Y===u||!Q(Y)?!1:(Array.isArray(Y.material)?Y.material:[Y.material]).some(wt=>wt&&wt.visible!==!1&&wt.blending!==zn&&!(wt.transparent&&wt.opacity<.2));function St(Y,gt,wt=1){bt.set(Y,gt),Tt.setFromCamera(bt,l);let te=Tt.intersectObjects(a.children,!0).find(dt=>ht(dt.object)),jt=te?te.point:null,fe=te?te.distance:1/0,qt=i.clientHeight||1,I=Math.tan(l.fov*Math.PI/360),D=null,G=1/0,ut=1/0;for(let dt of $t){let st=dt.userData;if(st.etkin===!1||!Q(dt))continue;let Dt=!1;if(jt&&st.yari){he.copy(jt),dt.worldToLocal(he),B.setFromMatrixScale(dt.matrixWorld);let[Re,Be,Tn]=st.yari,si=.25;Dt=Math.abs(he.x)<=Re+si/B.x&&Math.abs(he.y)<=Be+si/B.y&&Math.abs(he.z)<=Tn+si/B.z}if(!Dt&&st.ince&&dt.isMesh){let Re=Tt.intersectObject(dt,!1)[0];Dt=!!Re&&Re.distance<=fe+.5}if(!Dt||(Mt.setFromMatrixPosition(dt.matrixWorld),st.minPx&&st.minAdim&&(H.copy(Mt).applyMatrix4(l.matrixWorldInverse),st.minAdim*qt/(2*Math.max(.01,-H.z)*I)<st.minPx*wt)))continue;let de=st.hacim??1/0,Ae=jt?Mt.distanceToSquared(jt):0;(de<G*.99||de<=G*1.01&&Ae<ut)&&(D=dt,G=de,ut=Ae)}return{vekil:D,nokta:jt?jt.clone():D?new C().setFromMatrixPosition(D.matrixWorld):null}}let It=new Set,pt=null,Jt=!1;i.addEventListener("pointerdown",Y=>{if(It.add(Y.pointerId),It.size>1){Jt=!0,pt=null;return}pt=Jt?null:{x:Y.clientX,y:Y.clientY,t:performance.now(),id:Y.pointerId}}),i.addEventListener("pointerup",Y=>{let gt=pt;if(It.delete(Y.pointerId),It.size||(Jt=!1),!gt||gt.id!==Y.pointerId||(pt=null,Math.hypot(Y.clientX-gt.x,Y.clientY-gt.y)>9||performance.now()-gt.t>600))return;let wt=L.length?nt(Y.clientX,Y.clientY):null;if(wt){wt.click();return}let te=i.getBoundingClientRect(),jt=Y.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,fe=St((Y.clientX-te.left)/te.width*2-1,-((Y.clientY-te.top)/te.height)*2+1,jt);for(let qt of ie)qt(fe.vekil?fe.vekil.userData:null,fe.nokta,fe.vekil)}),i.addEventListener("pointercancel",Y=>{It.delete(Y.pointerId),It.size||(Jt=!1),pt=null});let Gt=null,ke=Y=>{Y!==Gt&&(Gt?.classList.remove("ustunde"),Y?.classList.add("ustunde"),Gt=Y,i.style.cursor=Y?"pointer":"")};return i.addEventListener("pointermove",Y=>{Y.pointerType==="mouse"&&!Y.buttons&&ke(L.length?nt(Y.clientX,Y.clientY):null)}),i.addEventListener("pointerleave",()=>ke(null)),i.addEventListener("contextmenu",Y=>Y.preventDefault()),i.addEventListener("webglcontextlost",Y=>{Y.preventDefault(),e("baglam-kaybi")}),i.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),g=!0,P()}),$(),{renderer:r,scene:a,camera:l,controls:f,hedefler:$t,iste:P,kameraGit:J,tween:mt,etiketKoy:_t,isaretKoy:yt,gorunurAlan:pe,golgeYenile:()=>{g=!0,P()},kareGuncelleyici:Y=>(p.add(Y),P(),()=>p.delete(Y)),yavasGuncelleyici:Y=>(b.add(Y),P(),()=>b.delete(Y)),dokunmaDinle:Y=>ie.add(Y),sec:St,kadrajOlc:lt,guvenliYenile:()=>{R=null,se=0,P()},yakinlas:Y=>{let gt=l.position.clone().sub(f.target),wt=Math.min(f.maxDistance,Math.max(f.minDistance,gt.length()*Y)),te=l.position.clone(),jt=f.target.clone().addScaledVector(gt.normalize(),wt);return _=!0,mt(260,fe=>l.position.lerpVectors(te,jt,fe))},arkaPlan:Y=>{r.setClearColor(new Zt(Y),1),P()},sonHedef:()=>re,kalite:()=>({kademe:x,piksel:Math.round(T*100)/100,tam:Math.round(E*100)/100})}}function Vn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new $e,c=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(let u in r){let f=Yf(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let _=0;_<a[u].length;++_)d.push(a[u][_][h]);let m=Yf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}}return l}function Yf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new bn(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let f=l/e;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<e;m++){let _=u.getComponent(h,m);o.setComponent(h+f,m,_)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var eo=new C;function jn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;eo.copy(t),eo[n]=0,eo.normalize();let c=.5*a/(a+o),u=1-eo.angleTo(i)/l;return Math.sign(eo[e])===1?u*c:o/(a+o)+c+c*(1-u)}var gn=class i extends ye{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,u=new C(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,_=new C,g=.5/a;for(let p=0,b=0;p<f.length;p+=3,b+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=u.x*Math.sign(l.x)+c.x*r,f[p+1]=u.y*Math.sign(l.y)+c.y*r,f[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[b+0]=jn(_,c,"z","y",r,n),d[b+1]=1-jn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[b+0]=1-jn(_,c,"z","y",r,n),d[b+1]=1-jn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[b+0]=1-jn(_,c,"x","z",r,t),d[b+1]=jn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[b+0]=1-jn(_,c,"x","z",r,t),d[b+1]=1-jn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[b+0]=1-jn(_,c,"x","y",r,t),d[b+1]=1-jn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[b+0]=jn(_,c,"x","y",r,t),d[b+1]=1-jn(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Oe={x:0,z:32,w:68.58,d:53.34},Rt={x:0,z:-38,w:82.5,d:54.5,h:8.5},xt=4,Ss=xt+8.5,Je=Rt.h,Hn=2.54,yv=i=>Oe.x-Oe.w/2+i,vv=i=>Oe.z-Oe.d/2+i,oe=(i,t,e=xt)=>new C(yv(i),e,vv(t)),bi={SCL:21.336,SDA:23.876,AREF:26.416,"GND-D":28.956,13:31.496,12:34.036,11:36.576,10:39.116,9:41.656,8:44.196,7:48.26,6:50.8,5:53.34,4:55.88,3:58.42,2:60.96,1:63.5,0:66.04},Yi={NC:26.416,IOREF:28.956,RESET:31.496,"3.3V":34.036,"5V":36.576,GND1:39.116,GND2:41.656,VIN:44.196},qi={A0:49.276,A1:51.816,A2:54.356,A3:56.896,A4:59.436,A5:61.976},Ms=2.54,vi=50.8;function Mi(i){let t=String(i);if(t in bi)return oe(bi[t],Ms,Ss);if(t in Yi)return oe(Yi[t],vi,Ss);if(t in qi)return oe(qi[t],vi,Ss);throw new Error("bilinmeyen pin "+i)}var Kf=["3","5","6","9","10","11"];function bv(i){let t=String(i);return t==="13"?"pin-13":t==="0"||t==="1"?"pin-rx-tx":Kf.includes(t)?"pin-pwm":/^\d+$/.test(t)?"pin-dijital":t.startsWith("GND")?"pin-gnd":{"5V":"pin-5v","3.3V":"pin-3v3",VIN:"pin-vin",AREF:"pin-aref",IOREF:"pin-ioref",RESET:"pin-reset",SDA:"pin-sda-scl",SCL:"pin-sda-scl"}[t]||(/^A\d$/.test(t)?"pin-analog":null)}function qf(i){let t=String(i);return t==="0"?"0. pin (RX)":t==="1"?"1. pin (TX)":Kf.includes(t)?`${t}. pin (~${t})`:/^\d+$/.test(t)?`${t}. pin`:t.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[t]||t}function Gs(i,t,e,n,s=0,r=0,a=0){let o=new qe;return o.position.set(s,r,a),o.userData={...i,yari:[t/2,e/2,n/2],hacim:i.hacim??t*e*n},o.updateMatrixWorld(),o}var Hs={a:13.97,b:11.43,c:8.89,d:6.35,e:3.81,f:-3.81,g:-6.35,h:-8.89,i:-11.43,j:-13.97},_n=i=>Rt.x-36.83+(i-1)*Hn,je=(i,t,e=Je)=>new C(_n(i),e,Rt.z+Hs[t]),kn={"yakin-":19.05,"yakin+":21.59,"uzak-":-19.05,"uzak+":-21.59},Vs=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];function Qn(i,t,e,n=Je){let s=Vs.reduce((r,a)=>Math.abs(a-e)<Math.abs(r-e)?a:r,Vs[0]);return new C(_n(s),n,Rt.z+kn[i+t])}function Gn(i,t,e,n,s,r){let a=new ye(i,t,e);return a.translate(n,s,r),a}function no(i,t,e,n,s,r,a){let o=new gn(i,t,e,2,n);return o.translate(s,r,a),o}function Xr(i){i.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}function Ac(i,t,e,n,s,r=16){let a=new an(i,i,t,r);return a.translate(e,n,s),a}function zs(i,t){let e=new Ut(Vn(i.map(n=>n.index?n.toNonIndexed():n),!1),t);return e.matrixAutoUpdate=!1,e}function io(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}var Zf=1;function Ec(i){let t=new os(i);return t.colorSpace=sn,t.anisotropy=Zf,t}var mh=(()=>{let i=null;return()=>{if(i)return i;let[t,e]=io(64,64),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),i=new os(t),i}})(),Ie={};function Ws(){return Ie.hazir||Object.assign(Ie,{hazir:!0,pcbKenar:new Me({color:679785,roughness:.45}),siyah:new Me({color:2500140,roughness:.55}),koyu:new Un({color:789519}),metal:new Me({color:14014686,metalness:1,roughness:.28}),altin:new Me({color:14858588,metalness:1,roughness:.32}),cip:new Me({color:1776416,roughness:.72}),ayak:new Me({color:3816e3,roughness:.9}),bbYan:new Me({color:15657955,roughness:.78}),bbDelik:new Un({color:3421242}),serit:new Me({color:13225170,metalness:.9,roughness:.35}),vurgu:new Un({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new Rr({color:6962672}),secim:new Un({color:1483594,transparent:!0,opacity:.85,depthWrite:!1}),gorunmez:new Un({visible:!1})}),Ie}function Mv(){let t=Math.round(2048*Oe.d/Oe.w),e=2048/Oe.w,[n,s]=io(2048,t);s.fillStyle="#0d7783",s.fillRect(0,0,2048,t),s.strokeStyle="rgba(160,235,235,0.16)",s.lineWidth=.32*e,s.lineCap="round";let r=h=>{s.beginPath(),h.forEach(([d,m],_)=>_?s.lineTo(d*e,m*e):s.moveTo(d*e,m*e)),s.stroke()};for(let h=0;h<14;h++){let d=31.5+h*2.54>46?33+h*2.54:31.5+h*2.54;r([[d,4.5],[d,9+h%4],[30+h*2.2,30],[30+h*2.2,33]])}for(let h=0;h<6;h++)r([[49.3+h*2.54,48.5],[49.3+h*2.54,44],[46+h*2.6,40.6]]);r([[12,15],[18,15],[20,17]]),r([[12,18],[17,22],[21,24]]),r([[8,44],[14,44],[16,47]]),r([[36.5,48.5],[36.5,44],[24,40],[14,40]]),r([[39,48.5],[39,45],[28,45]]);let a="#f2f7f7";s.strokeStyle=a,s.fillStyle=a,s.lineWidth=.22*e;let o=(h,d,m,_)=>s.strokeRect(h*e,d*e,(m-h)*e,(_-d)*e);o(20,1.2,45.5,3.9),o(47,1.2,67.3,3.9),o(25.1,49.5,45.5,52.1),o(48,49.5,63.3,52.1);let l=(h,d,m,_,{don:g=0,hiza:p="center",kalin:b=!0}={})=>{s.save(),s.translate(d*e,m*e),s.rotate(g),s.font=`${b?700:500} ${_*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign=p,s.textBaseline="middle",s.fillText(h,0,0),s.restore()},c=-Math.PI/2,u={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX 1",0:"RX 0"};for(let[h,d]of Object.entries(u))l(d,bi[h],4.4,1.25,{don:c,hiza:"right"});l("DIGITAL (PWM~)",46,10.6,1.5);let f={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[h,d]of Object.entries(f))l(d,Yi[h],48.3,1.2,{don:c,hiza:"left"});for(let[h,d]of Object.entries(qi))l(h,d,48.3,1.25,{don:c,hiza:"left"});l("POWER",35.3,42,1.5),l("ANALOG IN",55.6,42,1.5),l("L",26.6,10.6,1.2),l("TX",25.9,13.3,1),l("RX",25.9,15.4,1),l("ON",64.4,10.6,1.2),l("RESET",7.4,10.3,1.1),l("ICSP",64.9,21.9,1.1);for(let[h,d]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])s.fillStyle="#d9b75f",s.beginPath(),s.arc(h*e,d*e,1.75*e,0,Math.PI*2),s.fill(),s.fillStyle="#16191b",s.beginPath(),s.arc(h*e,d*e,1.15*e,0,Math.PI*2),s.fill();return Ec(n)}function Sv(){let[i,t]=io(512,108);return t.fillStyle="#1c1c21",t.fillRect(0,0,512,108),t.fillStyle="#9da2aa",t.font='600 34px "DejaVu Sans", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("ATMEGA328P",270,56),t.beginPath(),t.arc(22,54,12,-Math.PI/2,Math.PI/2),t.fillStyle="#0e0e11",t.fill(),Ec(i)}function $f(i){Ws();let t=new Xe;t.name="kart";let e=new Me({map:Mv(),roughness:.4}),n=new Ut(new gn(Oe.w,1.6,Oe.d,2,.5),[Ie.pcbKenar,Ie.pcbKenar,e,Ie.pcbKenar,Ie.pcbKenar,Ie.pcbKenar]);n.position.set(Oe.x,xt-.8,Oe.z),t.add(n);let s=[],r=[],a=[],o=[],l=[];for(let[O,P]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]]){let U=oe(O,P,1.2);l.push(Ac(1.6,2.4,U.x,U.y,U.z,10))}let c=(O,P,U)=>{let Z=O.map(ot=>P[ot]),K=Math.min(...Z)-1.27,ct=Math.max(...Z)+1.27,$=oe((K+ct)/2,U,xt+4.25);s.push(no(ct-K,8.5,2.54,.35,$.x,$.y,$.z));for(let ot of Z){let at=oe(ot,U,Ss+.02);r.push(Gn(1,.04,1,at.x,at.y,at.z))}return{x1:K,x2:ct,bz:U}},u=c(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],bi,Ms),f=c(["7","6","5","4","3","2","1","0"],bi,Ms),h=c(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],Yi,vi),d=c(["A0","A1","A2","A3","A4","A5"],qi,vi),m=oe(1.65,15.24,xt+5.45);a.push(no(16,10.9,12,.6,m.x,m.y,m.z)),m=oe(-6.37,15.24,xt+5.3),r.push(Gn(.04,7.2,8.2,m.x,m.y,m.z)),m=oe(5.2,44.9,xt+5.5),s.push(no(14,11,9,1,m.x,m.y,m.z));let _=new Ls(3.1,20);_.rotateY(-Math.PI/2),m=oe(-1.83,44.9,xt+5.8),_.translate(m.x,m.y,m.z),r.push((_.toNonIndexed,_)),m=oe(44.5,36.8,xt+1.3),s.push(no(37.5,2.6,9.2,.4,m.x,m.y,m.z));for(let O=0;O<14;O++)for(let P of[-1,1]){let U=oe(27.99+O*2.54,36.8+P*3.85,xt+3.2);a.push(Gn(.55,1.6,.35,U.x,U.y,U.z))}let g=new Ut(new gn(35.56,3.3,7.4,2,.4),[Ie.cip,Ie.cip,new Me({map:Sv(),roughness:.72}),Ie.cip,Ie.cip,Ie.cip]);g.position.copy(oe(44.5,36.8,xt+2.6+1.65)),t.add(g),m=oe(20,17.5,xt+.45),s.push(Gn(5,.9,5,m.x,m.y,m.z)),m=oe(21,27,xt+1.8),a.push(Gn(10.5,3.5,4.4,m.x,m.y,m.z)),m=oe(15,47.5,xt+.8),s.push(Gn(6.5,1.6,3.5,m.x,m.y,m.z)),m=oe(15,44.6,xt+.2),a.push(Gn(3.2,.3,3,m.x,m.y,m.z));for(let[O,P]of[[13,31.5],[19.5,37.5]]){let U=oe(O,P,xt+2.75);s.push(Ac(3.15,5.5,U.x,U.y,U.z,18)),a.push(Ac(3,.2,U.x,xt+5.55,U.z,18))}m=oe(7.4,5.2,xt+1.6),s.push(no(6,3.2,6,.5,m.x,m.y,m.z)),a.push(Gn(6.1,.3,6.1,m.x,xt+3.35,m.z));let p=Ac(1.7,1.3,m.x,xt+4.1,m.z,18);m=oe(64.87,26.67,xt+1.25),s.push(Gn(5.08,2.5,7.62,m.x,m.y,m.z));for(let O of[63.6,66.14])for(let P of[24.13,26.67,29.21]){let U=oe(O,P,xt+5.5);o.push(Gn(.64,6,.64,U.x,U.y,U.z))}t.add(zs(l,Ie.ayak),zs(s,Ie.siyah),zs(r,Ie.koyu),zs(a,Ie.metal),zs(o,Ie.altin));let b=new Ut(p,new Me({color:14207392,roughness:.5}));t.add(b);let S=(O,P,U)=>{let Z=new Me({color:new Zt(U).multiplyScalar(.45),emissive:U,emissiveIntensity:0,roughness:.3}),K=new Ut(new ye(1.6,.6,.85),Z);K.position.copy(oe(O,P,xt+.3)),t.add(K);let ct=new Ar(new ks({map:mh(),color:U,blending:zn,depthWrite:!1,transparent:!0}));return ct.scale.set(6,6,1),ct.position.copy(K.position).add(new C(0,.8,0)),ct.visible=!1,t.add(ct),$=>{Z.emissiveIntensity=$?1:0,Z.color.set($?U:new Zt(U).multiplyScalar(.45)),ct.visible=$}},M=S(28.5,10.6,16754470),E=S(61.5,10.6,4448378);S(28.5,13.3,16766287),S(28.5,15.4,16766287),Xr(t);let x=(O,P,U,Z,K,ct)=>{let $=oe(O,P,U);return[$.x,$.y,$.z,Z,K,ct]},T={kart:[Oe.x,7,Oe.z,Oe.w,14,Oe.d],usb:x(1.65,15.24,xt+5.45,17,11.6,12.8),"guc-girisi":x(5.2,44.9,xt+5.5,15,11.8,9.8),mikrodenetleyici:x(44.5,36.8,xt+3,38.5,6.2,10.2),"dijital-pinler":x((u.x1+f.x2)/2,Ms,xt+4.3,f.x2-u.x1+1.2,9.4,3.6),"analog-pinler":x((d.x1+d.x2)/2,vi,xt+4.3,d.x2-d.x1+1.2,9.4,3.6),"guc-pinleri":x((h.x1+h.x2)/2,vi,xt+4.3,h.x2-h.x1+1.2,9.4,3.6),reset:x(7.4,5.2,xt+2.4,7,5,7)},v=[],A=(O,P)=>{let[U,Z,K,ct,$,ot]=P,at=Gs({parca:O.kesif,...O},ct,$,ot,U,Z,K);v.push(at),i.push(at)};A({kesif:"kart",parca:"kart"},T.kart);for(let O of["usb","guc-girisi","mikrodenetleyici","dijital-pinler","analog-pinler","guc-pinleri","reset"])A({kesif:O},T[O]);A({kesif:"usb-cipi"},x(20,17.5,xt+1.1,7,2.6,7)),A({kesif:"kristal"},x(21,27,xt+1.9,11.5,4.2,5.4)),A({kesif:"regulator"},x(15,46.2,xt+1.1,7.4,2.6,6.8));for(let[O,P]of[[13,31.5],[19.5,37.5]])A({kesif:"kondansator"},x(O,P,xt+2.9,7.2,6.2,7.2));A({kesif:"icsp"},x(64.87,26.67,xt+4.4,6.4,9.2,9)),A({kesif:"led-l"},x(27.6,10.6,xt+.8,4.6,1.8,2.3)),A({kesif:"led-txrx"},x(27.3,14.35,xt+.8,4.8,1.8,4.4)),A({kesif:"led-on"},x(62.9,10.6,xt+.8,5.4,1.8,2.3));for(let[O,P]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])A({kesif:"montaj-deligi"},x(O,P,xt+.3,4.4,1.6,4.4));let k=[];for(let[O,P]of[[bi,Ms],[Yi,vi],[qi,vi]])for(let[U,Z]of Object.entries(O)){let K=bv(U);if(!K)continue;let ct=Ss+1.2-xt;A({kesif:K,parca:"pin",pin:U,ozel:qf(U),minAdim:Hn,minPx:12},x(Z,P,xt+ct/2,2.5,ct,2.6)),k.push({ad:U,kesif:K,ozel:qf(U),nokta:oe(Z,P,Ss+.6)})}let N=(O,P,U)=>oe(O,P,U),z=[{id:"usb",nokta:N(1.65,15.24,xt+12)},{id:"guc-girisi",nokta:N(5.2,44.9,xt+12.2)},{id:"mikrodenetleyici",nokta:N(44.5,36.8,xt+6.6)},{id:"usb-cipi",nokta:N(20,17.5,xt+1.6)},{id:"kristal",nokta:N(21,27,xt+4.3)},{id:"regulator",nokta:N(15,46.5,xt+2.4)},{id:"kondansator",nokta:N(13,31.5,xt+6.2)},{id:"reset",nokta:N(7.4,5.2,xt+5.4)},{id:"icsp",nokta:N(64.87,26.67,xt+9.4)},{id:"led-l",nokta:N(28.5,10.6,xt+1)},{id:"led-txrx",nokta:N(28.5,14.35,xt+1)},{id:"led-on",nokta:N(61.5,10.6,xt+1)},{id:"dijital-pinler",nokta:N(46,10.6,xt+.8)},{id:"analog-pinler",nokta:N(55.6,42,xt+.8)},{id:"guc-pinleri",nokta:N(35.3,42,xt+.8)},{id:"montaj-deligi",nokta:N(66.04,17.78,xt+.8)}];return{grup:t,alanlar:T,ledL:M,ledOn:E,vekiller:v,pinler:k,kesifNoktalari:z}}function wv(){let t=Math.round(2048*Rt.d/Rt.w),e=2048/Rt.w,[n,s]=io(2048,t),r=o=>(o+Rt.w/2)*e,a=o=>(o+Rt.d/2)*e;s.fillStyle="#f4f2ec",s.fillRect(0,0,2048,t),s.fillStyle="#dcd8cf",s.fillRect(0,a(-1.5),2048,3*e),s.fillStyle="#cfcac0",s.fillRect(0,a(-.35),2048,.7*e);for(let o of[1,-1])s.fillStyle="#d23b3b",s.fillRect(r(-37),a(o*23.6)-.3*e,r(37)-r(-37),.6*e),s.fillStyle="#2f62c9",s.fillRect(r(-37),a(o*16.9)-.3*e,r(37)-r(-37),.6*e);s.font=`700 ${2.1*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";for(let o of[1,-1])for(let l of[-39.4,39.4])s.fillStyle="#d23b3b",s.fillText("+",r(l),a(o*kn["yakin+"])),s.fillStyle="#2f62c9",s.fillText("\u2212",r(l),a(o*kn["yakin-"]));s.fillStyle="#8a8478",s.font=`600 ${1.45*e}px "DejaVu Sans", Arial, sans-serif`;for(let[o,l]of Object.entries(Hs))for(let c of[-39.3,39.3])s.fillText(o,r(c),a(l));for(let o of[1,5,10,15,20,25,30])for(let l of[1,-1])s.fillText(String(o),r(-36.83+(o-1)*Hn),a(l*15.45));return Ec(n)}function Jf(i){Ws();let t=new Xe;t.name="breadboard";let e=new Me({map:wv(),roughness:.78}),n=Ie.bbYan.clone(),s=[n,n,e,n,n,n],r=new Ut(new gn(Rt.w,Rt.h,Rt.d,3,1.1),s);r.position.set(Rt.x,Rt.h/2,Rt.z),t.add(r);let a=[],o=x=>a.push(Gn(1.15,.04,1.15,x.x,Je+.02,x.z));for(let x=1;x<=30;x++)for(let T of Object.keys(Hs))o(je(x,T));for(let x of Object.keys(kn))for(let T of Vs)o(new C(_n(T),0,Rt.z+kn[x]));t.add(zs(a,Ie.bbDelik));let l=[];for(let x=1;x<=30;x++)for(let T of[1,-1])l.push(Gn(1.5,1.1,11.4,_n(x),Je-2.3,Rt.z+T*8.89));for(let x of Object.values(kn))l.push(Gn(_n(30)-_n(2)+1.6,1.1,1.5,Rt.x,Je-2.3,Rt.z+x));let c=zs(l,Ie.serit);c.visible=!1,t.add(c),Xr(t);let u=new ye(1.7,.06,1.7),f=new di(u,Ie.secim,25);f.count=0,f.frustumCulled=!1,t.add(f);let h=new Ce;function d(x){f.count=x.length,x.forEach((T,v)=>{h.makeTranslation(T.x,Je+.06,T.z),f.setMatrixAt(v,h)}),f.instanceMatrix.needsUpdate=!0}function m(x){let T=x.x-Rt.x,v=x.z-Rt.z,A=Math.round((T+36.83)/Hn)+1,k=null,N=1.6;for(let[z,O]of Object.entries(Hs)){let P=Math.hypot(T-(-36.83+(A-1)*Hn),v-O);A>=1&&A<=30&&P<N&&(N=P,k={tur:"sutun",sutun:A,satir:z})}for(let[z,O]of Object.entries(kn))Math.abs(v-O)<1.3&&Vs.some(P=>Math.abs(T-(-36.83+(P-1)*Hn))<1.3)&&(k={tur:"ray",ray:z});if(!k)return null;if(k.tur==="sutun"){let z="abcde".includes(k.satir)?"abcde":"fghij";return{...k,delikler:[...z].map(O=>je(k.sutun,O)),ad:`${k.sutun}. s\xFCtun, ${z[0]}-${z[4]} sat\u0131rlar\u0131`}}return{...k,delikler:Vs.map(z=>new C(_n(z),0,Rt.z+kn[k.ray])),ad:k.ray.endsWith("+")?"Art\u0131 (+) ray\u0131":"Eksi (\u2212) ray\u0131"}}let _={breadboard:[Rt.x,Rt.h/2,Rt.z,Rt.w,Rt.h+1,Rt.d],"bb-yakin-raylar":[Rt.x,Je,Rt.z+20.32,76,1.4,5.6],"bb-satirlar":[Rt.x,Je,Rt.z,77,1.4,31],"bb-kanal":[Rt.x,Je,Rt.z,80,1.2,3.2]},g=[],p=(x,T,v,A,k,N,z)=>{let O=Gs({parca:x.kesif,bb:!0,...x},T,v,A,k,N,z);g.push(O),i.push(O)},b=Je-.1,S=.8;p({kesif:"breadboard"},Rt.w,Rt.h+1,Rt.d,Rt.x,Rt.h/2,Rt.z);for(let x=1;x<=30;x++)for(let[T,v]of[[1,"a-e"],[-1,"f-j"]])p({kesif:"serit",ozel:`${x}. s\xFCtun, ${v} sat\u0131rlar\u0131`,minAdim:Hn,minPx:12},2.5,S,12.7,_n(x),b,Rt.z+T*8.89);for(let x of[1,-1]){let T=x>0?"karta yak\u0131n taraf":"uzak taraf";p({kesif:"arti-ray",ozel:T,minAdim:Hn,minPx:8},81.2,S,4.08,Rt.x,b,Rt.z+x*22.36),p({kesif:"eksi-ray",ozel:T,minAdim:Hn,minPx:8},81.2,S,4.02,Rt.x,b,Rt.z+x*18.31),p({kesif:"koordinat",ozel:"s\xFCtun numaralar\u0131",minAdim:1.06,minPx:6},76.2,S,1.06,Rt.x,b,Rt.z+x*15.77),p({kesif:"koordinat",ozel:"sat\u0131r harfleri",minAdim:Hn,minPx:8},2.4,S,30.5,Rt.x+x*39.3,b,Rt.z)}p({kesif:"orta-kanal"},76.2,S,5,Rt.x,b,Rt.z);let M=(x,T,v=Je+1)=>new C(x,v,T),E=[{id:"breadboard",nokta:M(_n(6),Rt.z-8.89)},{id:"serit",nokta:M(_n(20),Rt.z-8.89),ozel:"20. s\xFCtun, f-j sat\u0131rlar\u0131"},{id:"orta-kanal",nokta:M(_n(27),Rt.z,Je+.6)},{id:"koordinat",nokta:M(Rt.x-39.3,Rt.z+8.89)},{id:"arti-ray",nokta:M(_n(28),Rt.z+21.59),ozel:"karta yak\u0131n taraf"},{id:"eksi-ray",nokta:M(_n(4),Rt.z+19.05),ozel:"karta yak\u0131n taraf"}];return{grup:t,alanlar:_,grupBul:m,grupGoster:d,vekiller:g,kesifNoktalari:E,rontgen(x){c.visible=x;for(let T of new Set(s))T.transparent=x,T.opacity=x?.3:1,T.depthWrite=!x,T.needsUpdate=!0;r.castShadow=!x}}}function jf(i,t){Ws();let[e,n,s,r,a,o]=t,l=new Xe,c=new ye(r+1.2,a+1.2,o+1.2),u=new Ut(c,Ie.vurgu);u.renderOrder=2;let f=new xa(new ba(c),Ie.vurguCizgi);return l.add(u,f),l.position.set(e,n,s),i.add(l),l}var Tc={kirmizi:15022389,sari:16498733,yesil:3126084};function Qf(i="kirmizi"){Ws();let t=new Zt(Tc[i]),e=t.clone().lerp(new Zt(3813430),.45),n=new Xe;n.name="led";let s=[[0,0],[2.95,0],[2.95,1],[2.5,1],[2.5,5.6]];for(let b=1;b<=8;b++){let S=b/8*(Math.PI/2);s.push([2.5*Math.cos(S),5.6+2.5*Math.sin(S)])}let r=new Me({color:e,emissive:t,emissiveIntensity:0,roughness:.14,metalness:0}),a=new Ut(new ki(s.map(([b,S])=>new rt(b,S)),20),r),o=4.2;a.position.y=o,n.add(a);let l=new Ut(new ye(.5,1,.5),Ie.metal),c=new Ut(new ye(.5,1,.5),Ie.metal);l.position.x=-1.27,c.position.x=1.27;let u=(b,S)=>{let M=new Ut(new ye(2.2,1,2.2),Ie.gorunmez);return M.position.x=b,M.userData={kesif:S,ince:!0,yari:[1.1,.5,1.1],hacim:60},M},f=u(-1.27,"anot"),h=u(1.27,"katot"),d=b=>{let S=22+(o+5-22)*b,M=17+(o+5-17)*b;l.scale.y=S,l.position.y=o-S/2,c.scale.y=M,c.position.y=o-M/2,f.scale.y=S,f.position.y=l.position.y,h.scale.y=M,h.position.y=c.position.y};d(1),n.add(l,c,f,h);let m=Gs({kesif:"led"},6.6,8.8,6.6,0,o+4.1,0);n.add(m);let _=new Ar(new ks({map:mh(),color:t,blending:zn,depthWrite:!1,transparent:!0}));_.scale.set(20,20,1),_.position.y=o+5.5,_.visible=!1,n.add(_);let g=new Ut(new pi(30,30),new Un({map:mh(),color:t,blending:zn,depthWrite:!1,transparent:!0,opacity:.6}));g.rotation.x=-Math.PI/2,g.position.y=.12,g.visible=!1,n.add(g);let p=new Ns(t,0,42,2);return p.position.y=o+6,n.add(p),Xr(n),n.userData={ac(b){let S=typeof b=="number"?b:b?1:0;n.userData.yanik=S>0,r.emissiveIntensity=1.05*S,r.color.copy(e).lerp(t,S),_.visible=g.visible=S>.02,_.material.opacity=Math.min(1,S*1.15),g.material.opacity=.6*S,p.intensity=380*S},bacak:d,tepe:new C(0,o+8.2,0),havuz:g,vekiller:[m,f,h],kesifYerleri:b=>[["led",new C(0,o+11.2,0)],["anot",new C(-1.27,b<.5?o-15:o-2,0)],["katot",new C(1.27,b<.5?o-6:o-2,0)]]},n}var gh={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"};function tp(i,t){Ws();let e=new Xe;e.name="direnc";let[n,s]=io(8,256);s.fillStyle="#d8c69c",s.fillRect(0,0,8,256);let r=[.18,.33,.48,.8];i.forEach((h,d)=>{s.fillStyle=gh[h],s.fillRect(0,(1-r[d])*256-12,8,24)});let a=new an(1.1,1.1,4.6,16);a.rotateZ(Math.PI/2);let o=new Ut(a,new Me({map:Ec(n),roughness:.55})),l=new Me({color:14206620,roughness:.55}),c=3.4;o.position.y=c,e.add(o);for(let h of[-1,1]){let d=new Ut(new hs(1.32,14,10),l);d.scale.set(.75,1,1),d.position.set(h*2.45,c,0),e.add(d);let m=new Ut(new ye(t/2-2.9,.5,.5),Ie.metal);m.position.set(h*((t/2+2.9)/2),c,0);let _=new Ut(new ye(.5,c+7,.5),Ie.metal);_.position.set(h*t/2,(c-7)/2,0),e.add(m,_)}Xr(e);let u=Gs({kesif:"direnc"},t+1.4,c+9,3.2,0,(c+1.8-7.2)/2,0),f=Gs({kesif:"renk-bantlari"},3.6,2.8,2.8,0,c,0);return e.add(u,f),e.userData={tepe:new C(0,c+1.4,0),uclar:[new C(-t/2,0,0),new C(t/2,0,0)],H:c,vekiller:[u,f],kesifYerleri:()=>[["direnc",new C(t/2-1.2,c+2.6,0)],["renk-bantlari",new C(-.6,c+2.2,0)]]},e}function ep(i,t,e){i.position.set((t.x+e.x)/2,Je,(t.z+e.z)/2),i.rotation.set(0,-Math.atan2(e.z-t.z,e.x-t.x),0)}function np(){Ws();let i=new Xe;i.name="buton";let t=new Ut(new gn(6,3.4,6,2,.45),Ie.siyah);t.position.y=1.7;let e=new Ut(new ye(6.2,.3,6.2),Ie.metal);e.position.y=3.55;let n=new Ut(new an(1.8,1.8,1.7,24),new Me({color:14172995,roughness:.42}));n.position.y=4.55,i.add(t,e,n);for(let r of[-2.54,2.54])for(let a of[-3.81,3.81]){let o=new Ut(new ye(.6,7,.35),Ie.metal);o.position.set(r,-3.2,a),i.add(o)}Xr(i);let s=Gs({kesif:"buton"},7.6,12.9,8.4,0,-.45,0);return i.add(s),i.userData={bas(r){n.position.y=r?3.95:4.55},tepe:new C(0,5.6,0),vekiller:[s],kesifYerleri:()=>[["buton",new C(0,8.6,0)]]},i}var _h={turuncu:16088064,siyah:2829104,kirmizi:13840175,sari:15909376,yesil:3054920,mavi:1994713,mor:8280002};function ip(i,t,e){Ws();let n=new Xe;n.name="kablo";let s=_h[e]??e,r=(b,S)=>b.clone().add(new C(0,S,0)),a=r(i,6.2),o=r(t,6.2),l=a.distanceTo(o),c=new C((a.x+o.x)/2,Math.max(a.y,o.y)+7+l*.16,(a.z+o.z)/2),u=new Ir([a,r(a,4),c,r(o,4),o],!1,"centripetal"),f=56,h=6,d=new Ut(new ds(u,f,.62,h,!1),new Me({color:s,roughness:.45}));n.add(d);let m=[];for(let b of[i,t]){let S=new Ut(new gn(2.5,6,2.5,2,.3),new Me({color:2763312,roughness:.5}));S.position.copy(b).add(new C(0,3.1,0));let M=new Ut(new ye(.6,6,.6),Ie.metal);M.position.copy(b).add(new C(0,-2.9,0)),n.add(S,M),m.push(S,M)}Xr(n);let _=new Ut(new ds(u,24,1.9,6,!1),Ie.gorunmez);_.userData={kesif:"kablo",ince:!0,hacim:120},n.add(_);let g=[_];for(let b of[i,t]){let S=Gs({kesif:"kablo"},3.4,6.6,3.4,b.x,b.y+3.1,b.z);n.add(S),g.push(S)}let p=d.geometry.index.count;return n.userData={egri:u,vekiller:g,kesifYerleri:()=>[["kablo",u.getPoint(.5)]],buyut(b){d.geometry.setDrawRange(0,Math.floor(b*f)*h*6),m[2].visible=m[3].visible=b>=1,b>=1&&d.geometry.setDrawRange(0,p)},yol:u.getSpacedPoints(40)},n}function sp(i,t,e=30){let n=[0];for(let u=1;u<t.length;u++)n.push(n[u-1]+t[u].distanceTo(t[u-1]));let s=n[n.length-1],r=new di(new hs(.85,8,6),new Un({color:16764723}),e);r.frustumCulled=!1,r.renderOrder=3,i.add(r);let a=new Ce,o=new C,l=0,c=()=>{for(let u=0;u<e;u++){let f=(l+u*s/e)%s,h=1;for(;h<n.length-1&&n[h]<f;)h++;let d=(f-n[h-1])/Math.max(1e-6,n[h]-n[h-1]);o.lerpVectors(t[h-1],t[h],Math.min(1,Math.max(0,d))),r.setMatrixAt(u,a.makeTranslation(o.x,o.y,o.z))}r.instanceMatrix.needsUpdate=!0};return c(),{nesne:r,ilerlet(u,f=28){l=(l+u/1e3*f)%s,c()},gorunur(u){r.visible=u},sil(){i.remove(r),r.geometry.dispose(),r.material.dispose()}}}function rp(i){Zf=Math.max(1,Math.min(8,i))}var ro=["kirmizi","kirmizi","kahve","altin"],op=["kahve","siyah","turuncu","altin"],xh=26,yh={kirmizi:"K\u0131rm\u0131z\u0131",sari:"Sar\u0131",yesil:"Ye\u015Fil",turuncu:"Turuncu",siyah:"Siyah",mavi:"Mavi",mor:"Mor",kahve:"Kahverengi",altin:"Alt\u0131n"},ap={[ro.join()]:"220 \u03A9 diren\xE7",[op.join()]:"10 k\u03A9 diren\xE7"};function Av(i,t,e,n={}){for(let s of i.nesne.userData.vekiller||[])s.userData.parca=t,n[s.userData.kesif]&&(s.userData.ozel=n[s.userData.kesif]),e.push(s)}function Rc(i,t,e="e"){let n=Qf(i);n.userData.renk=i;let s=je(t,e),r=je(t+1,e),a=new C((s.x+r.x)/2,Je,s.z);n.position.copy(a);let o={led:`${yh[i]} LED`,anot:"uzun bacak",katot:"k\u0131sa bacak"};return{nesne:n,tur:"led",kavram:"led",anotSutun:t,satir:e,ozel:o,pozlar:{takili:a,havada:a.clone().add(new C(0,xh,0))}}}function so(i,t,e,n="direnc"){let s=tp(i,t.distanceTo(e));s.userData.bantlar=i,ep(s,t,e);let r=s.position.clone(),a={direnc:ap[i.join()],"renk-bantlari":`${i.map(o=>yh[o].toLocaleLowerCase("tr")).join(", ")}: ${ap[i.join()].replace(" diren\xE7","")}`};return{nesne:s,tur:"direnc",kavram:n,a:t,b:e,ozel:a,pozlar:{takili:r,havada:r.clone().add(new C(0,xh*.75,0))}}}function Ki(i,t,e,n=""){return{nesne:ip(i,t,e),tur:"kablo",kavram:"kablo",bas:i,son:t,ozel:{kablo:`${yh[e]} kablo${n?`, ${n}`:""}`}}}function lp(i,t){let e={};if((i==="led"||i==="buton")&&(e.led1=Rc("kirmizi",15),e.r1=so(ro,je(16,"c"),Qn("yakin","-",16)),e.k13=Ki(Mi(13),je(15,"a"),"turuncu","13. pin ile 15a deli\u011Fi aras\u0131nda"),e.kgnd=Ki(Mi("GND-D"),Qn("yakin","-",14),"siyah","GND pini ile eksi (\u2212) ray\u0131 aras\u0131nda")),i==="buton"){let n=np(),s=new C((je(20,"e").x+je(22,"e").x)/2,Je,Rt.z);n.position.copy(s),e.buton={nesne:n,tur:"buton",kavram:"buton",pozlar:{takili:s,havada:s.clone().add(new C(0,xh,0))}},e.r2=so(op,je(22,"c"),Qn("yakin","-",22)),e.k5v=Ki(Mi("5V"),Qn("yakin","+",24),"kirmizi","5V pini ile art\u0131 (+) ray\u0131 aras\u0131nda"),e.kplus=Ki(Qn("yakin","+",20),je(20,"a"),"kirmizi","art\u0131 (+) ray\u0131 ile 20a deli\u011Fi aras\u0131nda"),e.k2=Ki(Mi(2),je(22,"d"),"sari","2. pin ile 22d deli\u011Fi aras\u0131nda")}i==="trafik"&&(e.ledK=Rc("kirmizi",8),e.ledS=Rc("sari",15),e.ledY=Rc("yesil",22),e.rK=so(ro,je(9,"c"),Qn("yakin","-",9)),e.rS=so(ro,je(16,"c"),Qn("yakin","-",16)),e.rY=so(ro,je(23,"c"),Qn("yakin","-",23)),e.kK=Ki(Mi(10),je(8,"a"),"kirmizi","10. pin ile 8a deli\u011Fi aras\u0131nda"),e.kS=Ki(Mi(9),je(15,"a"),"sari","9. pin ile 15a deli\u011Fi aras\u0131nda"),e.kY=Ki(Mi(8),je(22,"a"),"yesil","8. pin ile 22a deli\u011Fi aras\u0131nda"),e.kgnd=Ki(Mi("GND-D"),Qn("yakin","-",14),"siyah","GND pini ile eksi (\u2212) ray\u0131 aras\u0131nda"));for(let[n,s]of Object.entries(e))Av(s,n,t,s.ozel);return e}function cp(i,t,e,n){let s=Je+.8,r=Je+6.2,a=Je+e.nesne.userData.H,o=[i.bas.clone().setY(i.bas.y+.4),...i.nesne.userData.yol],l=je(t.anotSutun,t.satir,s),c=je(t.anotSutun+1,t.satir,s);return o.push(i.son.clone().setY(s),l,l.clone().setY(r),c.clone().setY(r),c),o.push(e.a.clone().setY(s),e.a.clone().setY(a),e.b.clone().setY(a),e.b.clone().setY(s),n.son.clone().setY(s)),o.push(...[...n.nesne.userData.yol].reverse(),n.bas.clone().setY(n.bas.y+.4)),o}var Ev=[.1,.84,.54],vh={genel:{kutu:[-41.3,0,-65.3,41.3,15,58.7],yon:Ev},kart:{kutu:[-40.7,0,5.3,34.3,15,58.7],yon:[.08,.86,.5]},usb:{kutu:[-41.2,3.5,13,-22,15.3,28],yon:[-.78,.48,.42]},"guc-girisi":{kutu:[-37,3.5,44,-20,15.5,57],yon:[-.7,.5,.52]},cip:{kutu:[-10,3.5,35.5,30.5,10.5,48.5],yon:[.05,.86,.5]},dijital:{kutu:[-15,3.6,4,33.8,13,15],yon:[.04,.72,.69]},analog:{kutu:[12.5,3.6,49,30.2,13,58.7],yon:[.08,.7,.71]},guc:{kutu:[-10.5,3.6,49,12.5,13,58.7],yon:[0,.62,.78]},bb:{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[.06,.86,.5]},"bb-ust":{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[0,.96,.27]},raylar:{kutu:[-41.3,0,-34,41.3,8.6,-10.7],yon:[.04,.8,.6]},devre:{kutu:[-14,0,-44,22,22,-14],yon:[.12,.8,.58]},"devre-genis":{kutu:[-41.3,0,-65.3,41.3,22,12],yon:[.07,.9,.43],kablolar:!0},"buton-yakin":{kutu:[5,0,-46,23,18,-16],yon:[.15,.72,.67]},trafik:{kutu:[-26,0,-44,26,22,-14],yon:[.05,.78,.62]}},ao=["led1","r1","k13","kgnd"],Xs=["led1","r1","k13","kgnd","buton","r2","k5v","kplus","k2"],Ys=["ledK","ledS","ledY","rK","rS","rY","kK","kS","kY","kgnd"],up={"arduino-ve-breadboard":{no:1,devre:null,adimlar:{merak:{kamera:"genel"},arduino:{kamera:"kart",vurgu:["kart"],dokun:!0},usb:{kamera:"usb",vurgu:["usb"],etiket:[["alan:usb","USB giri\u015Fi"]]},"guc-girisi":{kamera:"guc-girisi",vurgu:["guc-girisi"],etiket:[["alan:guc-girisi","G\xFC\xE7 giri\u015Fi"]]},mikrodenetleyici:{kamera:"cip",vurgu:["mikrodenetleyici"],etiket:[["alan:mikrodenetleyici","Mikrodenetleyici"]]},"dijital-pinler":{kamera:"dijital",vurgu:["dijital-pinler"],etiket:[["pin:13","13"],["pin:0","0"],["pin:3","~3"]]},"analog-pinler":{kamera:"analog",vurgu:["analog-pinler"],etiket:[["pin:A0","A0"],["pin:A5","A5"]]},"guc-pinleri":{kamera:"guc",vurgu:["guc-pinleri"],etiket:[["pin:5V","5V","arti"],["pin:3.3V","3,3V","arti"],["pin:GND1","GND","eksi"]]},breadboard:{kamera:"bb",vurgu:["breadboard"]},"breadboard-baglanti":{kamera:"bb-ust",kontrol:["delik","rontgen"]},raylar:{kamera:"raylar",vurgu:["bb-yakin-raylar"],kontrol:["delik","rontgen"],etiket:[["ray:yakin+","Art\u0131 (+) ray\u0131","arti"],["ray:yakin-","Eksi (\u2212) ray\u0131","eksi"]]},ozet:{kamera:"genel",dokun:!0}}},"arduino-led-yakma":{no:2,devre:"led",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"devre",parca:["led1","r1"],poz:{led1:"havada",r1:"havada"},etiket:[["parca:led1","LED"],["parca:r1","220 \u03A9 diren\xE7"]]},led:{kamera:{parca:"led1",poz:"havada",yon:[.18,.22,.96],pay:3},parca:["led1"],poz:{led1:"havada"},etiket:[["led1:anot","Anot (+): uzun bacak","arti"],["led1:katot","Katot (\u2212): k\u0131sa bacak","eksi"]]},direnc:{kamera:{parca:"r1",poz:"havada",yon:[.6,.55,.58],pay:2.5},parca:["r1"],poz:{r1:"havada"},etiket:[["parca:r1","K\u0131rm\u0131z\u0131, k\u0131rm\u0131z\u0131, kahverengi: 220 \u03A9"]]},"kurulum-led":{kamera:"devre",parca:["led1"],etiket:[["delik:15:e","15"],["delik:16:e","16"]]},"kurulum-direnc":{kamera:"devre",parca:["led1","r1"],etiket:[["ray:yakin-","Eksi (\u2212) ray\u0131","eksi"]]},"kurulum-kablo":{kamera:"devre-genis",parca:ao,etiket:[["pin:13","13. pin"],["pin:GND-D","GND","eksi"]]},kod:{kamera:"devre-genis",parca:ao,kod:!0},calistir:{kamera:"devre-genis",parca:ao,program:"blink",kontrol:["akim","hiz"],kod:!0},"tahmin-ters":{kamera:"devre",parca:ao,program:"blink",kontrol:["ters"]},ozet:{kamera:"devre-genis",parca:ao,program:"blink"}}},"arduino-buton-led":{no:3,devre:"buton",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"devre",parca:["buton","r2","led1","r1"],poz:{buton:"havada",r2:"havada",led1:"havada",r1:"havada"},etiket:[["parca:buton","Buton"],["parca:r2","10 k\u03A9"],["parca:r1","220 \u03A9"]]},buton:{kamera:{parca:"buton",poz:"havada",yon:[.3,.55,.78],pay:2.5},parca:["buton"],poz:{buton:"havada"},kontrol:["buton"]},"giris-cikis":{kamera:"devre-genis",parca:Xs,etiket:[["pin:2","2: giri\u015F"],["pin:13","13: \xE7\u0131k\u0131\u015F"]]},kurulum:{kamera:"devre-genis",parca:Xs,etiket:[["pin:5V","5V","arti"],["pin:GND-D","GND","eksi"],["parca:buton","Buton"]]},"pull-down":{kamera:"buton-yakin",parca:Xs,etiket:[["parca:r2","10 k\u03A9"]]},kod:{kamera:"devre-genis",parca:Xs,kod:!0},dene:{kamera:"devre",parca:Xs,program:"buton",kontrol:["buton","akim"],kod:!0},tahmin:{kamera:"devre",parca:Xs,program:"buton",kontrol:["buton","direnc-cikar"]},ozet:{kamera:"devre-genis",parca:Xs,program:"buton",kontrol:["buton"]}}},"arduino-trafik-isigi":{no:4,devre:"trafik",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"trafik",parca:["ledK","ledS","ledY","rK","rS","rY"],poz:{ledK:"havada",ledS:"havada",ledY:"havada",rK:"havada",rS:"havada",rY:"havada"}},sira:{kamera:"trafik",parca:["ledK","ledS","ledY"],program:"trafik"},kurulum:{kamera:"devre-genis",parca:Ys,etiket:[["pin:10","10"],["pin:9","9"],["pin:8","8"]]},kod:{kamera:"devre-genis",parca:Ys,kod:!0},calistir:{kamera:"devre-genis",parca:Ys,program:"trafik",kontrol:["akim","sure"],kod:!0},algoritma:{kamera:"trafik",parca:Ys,program:"trafik",kod:!0},tahmin:{kamera:"trafik",parca:Ys,program:"trafik",kontrol:["delaysiz"]},ileri:{kamera:"devre-genis",parca:Ys,program:"trafik"},ozet:{kamera:"devre-genis",parca:Ys,program:"trafik"}}}};var lo={guc:{ad:"G\xFC\xE7",renk:"#d32f2f",ikon:"zap"},islem:{ad:"\u0130\u015Flem",renk:"#7c4dff",ikon:"cpu"},pin:{ad:"Pinler",renk:"#1e6fd9",ikon:"plug"},isik:{ad:"I\u015F\u0131klar",renk:"#e0a100",ikon:"lightbulb",koyu:!0},breadboard:{ad:"Breadboard",renk:"#2e9d48",ikon:"grid-3x3"},parca:{ad:"Par\xE7alar",renk:"#f57c00",ikon:"component",koyu:!0},kontrol:{ad:"Kontrol",renk:"#6b7280",ikon:"rotate-ccw"}},ti=3,Zi=2,$i=1,Wn=0,oo={kart:{kat:null,ad:"Arduino UNO kart\u0131",kavram:"arduino",oncelik:ti,kisa:"Mikrodenetleyiciyi ve onu kullanmay\u0131 kolayla\u015Ft\u0131ran giri\u015Fleri, pinleri ta\u015F\u0131yan geli\u015Ftirme kart\u0131."},usb:{kat:"guc",ad:"USB giri\u015Fi",oncelik:ti,kisa:"Kart bilgisayara buradan ba\u011Flan\u0131r: kod bu kabloyla y\xFCklenir, kart da bu kablodan elektrik alabilir."},"guc-girisi":{kat:"guc",ad:"G\xFC\xE7 giri\u015Fi",oncelik:ti,kisa:"Pil ya da adapt\xF6r buraya tak\u0131l\u0131r; b\xF6ylece kart bilgisayar olmadan da \xE7al\u0131\u015F\u0131r."},regulator:{kat:"guc",ad:"Voltaj reg\xFClat\xF6r\xFC",oncelik:Zi,kisa:"G\xFC\xE7 giri\u015Finden gelen daha y\xFCksek gerilimi kart\u0131n kulland\u0131\u011F\u0131 5 volta d\xFC\u015F\xFCr\xFCr ve sabit tutar."},kondansator:{kat:"guc",ad:"Kondansat\xF6r",oncelik:Zi,kisa:"Elektri\u011Fi k\u0131sa s\xFCre depolay\u0131p geri verir; gerilimdeki ani dalgalanmalar\u0131 yumu\u015Fatarak kart\u0131n kararl\u0131 \xE7al\u0131\u015Fmas\u0131na yard\u0131m eder."},"guc-pinleri":{kat:"guc",ad:"G\xFC\xE7 pinleri",kavram:"gerilim",oncelik:ti,kisa:"Devredeki par\xE7alara elektrik veren pinler: 5V, 3,3V, GND ve Vin."},mikrodenetleyici:{kat:"islem",ad:"Mikrodenetleyici",oncelik:ti,kisa:"Kart\u0131n beyni: y\xFCklenen kodu sat\u0131r sat\u0131r \xE7al\u0131\u015Ft\u0131r\u0131r, pinleri okur ve y\xF6netir."},"usb-cipi":{kat:"islem",ad:"USB \xE7ipi",oncelik:Zi,kisa:"Bilgisayardan USB ile gelen veriyi mikrodenetleyicinin anlayaca\u011F\u0131 seri veriye \xE7evirir."},kristal:{kat:"islem",ad:"Kristal (16 MHz)",oncelik:Zi,kisa:"Kart\u0131n saati gibidir: saniyede 16 milyon kez titre\u015Ferek i\u015Flemlerin s\u0131rayla yap\u0131laca\u011F\u0131 d\xFCzenli bir ritim verir."},"dijital-pinler":{kat:"pin",ad:"Dijital pinler",kavram:"dijital",oncelik:ti,kisa:"0 ile 13 aras\u0131 numaral\u0131 pinler. Her biri a\xE7\u0131k (HIGH) ya da kapal\u0131 (LOW) olur; LED yakmak, buton okumak i\xE7in kullan\u0131l\u0131r."},"analog-pinler":{kat:"pin",ad:"Analog giri\u015F pinleri",kavram:"analog",oncelik:ti,kisa:"A0 ile A5 aras\u0131 pinler. A\xE7\u0131k ya da kapal\u0131n\u0131n yan\u0131nda aradaki de\u011Ferleri de \xF6l\xE7er; \u0131\u015F\u0131k ve s\u0131cakl\u0131k alg\u0131lay\u0131c\u0131lar\u0131 burada okunur."},icsp:{kat:"pin",ad:"ICSP pinleri",oncelik:Zi,kisa:"Mikrodenetleyiciye USB olmadan, \xF6zel bir programlay\u0131c\u0131yla do\u011Frudan kod y\xFCklemek i\xE7in kullan\u0131lan alt\u0131 pinlik ba\u015Fl\u0131k."},"led-l":{kat:"isik",ad:"L \u0131\u015F\u0131\u011F\u0131",oncelik:$i,kisa:"13. pine ba\u011Fl\u0131 k\xFC\xE7\xFCk \u0131\u015F\u0131k. 13. pine HIGH verilince yanar; ek par\xE7a takmadan kodu denemeye yarar."},"led-on":{kat:"isik",ad:"ON \u0131\u015F\u0131\u011F\u0131",oncelik:$i,kisa:"Karta elektrik gelince yanar. Yanm\u0131yorsa kart g\xFC\xE7 alm\u0131yordur."},"led-txrx":{kat:"isik",ad:"TX ve RX \u0131\u015F\u0131klar\u0131",oncelik:$i,kisa:"Kart bilgisayarla veri al\u0131\u015Fveri\u015Fi yaparken yan\u0131p s\xF6ner: TX veri g\xF6nderirken, RX veri al\u0131rken yanar."},reset:{kat:"kontrol",ad:"Reset d\xFC\u011Fmesi",oncelik:ti,kisa:"Bas\u0131nca kart y\xFCkl\xFC kodu en ba\u015Ftan \xE7al\u0131\u015Ft\u0131r\u0131r. Kod silinmez."},"montaj-deligi":{kat:"kontrol",ad:"Montaj deli\u011Fi",oncelik:$i,kisa:"Kart\u0131 vidayla bir kutuya ya da tabana sabitlemek i\xE7in a\xE7\u0131lm\u0131\u015F delik."},"pin-dijital":{kat:"pin",ad:"Dijital pin",kavram:"dijital",oncelik:Wn,kisa:"HIGH (5 volt) ya da LOW (0 volt) de\u011Ferini verir veya okur."},"pin-pwm":{kat:"pin",ad:"PWM pini (~)",kavram:"pwm",oncelik:Wn,kisa:"Yan\u0131nda ~ i\u015Fareti olan pin. \xC7ok h\u0131zl\u0131 a\xE7\u0131l\u0131p kapanarak LED'i yar\u0131 parlakl\u0131kta yakmak gibi ara de\u011Ferler \xFCretebilir."},"pin-rx-tx":{kat:"pin",ad:"RX ve TX pinleri",oncelik:Wn,kisa:"Seri haberle\u015Fme pinleri: 0 (RX) veri al\u0131r, 1 (TX) veri g\xF6nderir. Kod y\xFCklenirken de kullan\u0131ld\u0131klar\u0131 i\xE7in devrede bo\u015F b\u0131rak\u0131lmalar\u0131 \xF6nerilir."},"pin-13":{kat:"pin",ad:"13. pin",oncelik:Wn,kisa:"Karttaki L \u0131\u015F\u0131\u011F\u0131na ba\u011Fl\u0131d\u0131r: 13. pine HIGH verilince hem buraya ba\u011Fl\u0131 LED hem L \u0131\u015F\u0131\u011F\u0131 yanar."},"pin-gnd":{kat:"pin",ad:"GND pini",kavram:"gnd",oncelik:Wn,kisa:"Toprak, yani eksi u\xE7. Ak\u0131m devreyi dola\u015F\u0131p buradan karta d\xF6ner; devrenin 0 volt noktas\u0131d\u0131r."},"pin-5v":{kat:"guc",ad:"5V pini",oncelik:Wn,kisa:"Devredeki par\xE7alara 5 volt verir."},"pin-3v3":{kat:"guc",ad:"3,3V pini",oncelik:Wn,kisa:"Daha d\xFC\u015F\xFCk gerilimle \xE7al\u0131\u015Fan par\xE7alara 3,3 volt verir."},"pin-vin":{kat:"guc",ad:"Vin pini",oncelik:Wn,kisa:"G\xFC\xE7 giri\u015Fine tak\u0131lan adapt\xF6r\xFCn gerilimine bu pinden ula\u015F\u0131l\u0131r; karta bu pinden de g\xFC\xE7 verilebilir."},"pin-aref":{kat:"pin",ad:"AREF pini",oncelik:Wn,kisa:"Analog \xF6l\xE7\xFCmlerde kar\u015F\u0131la\u015Ft\u0131rma i\xE7in kullan\u0131lan ba\u015Fvuru (referans) gerilimi bu pine verilebilir."},"pin-ioref":{kat:"pin",ad:"IOREF pini",oncelik:Wn,kisa:"Kart\u0131n pinlerinin hangi gerilimle \xE7al\u0131\u015Ft\u0131\u011F\u0131n\u0131 (UNO'da 5 volt) \xFCst\xFCne tak\u0131lan ek kartlara bildirir."},"pin-reset":{kat:"pin",ad:"RESET pini",oncelik:Wn,kisa:"Bu pin GND'ye ba\u011Flan\u0131rsa kart, reset d\xFC\u011Fmesine bas\u0131lm\u0131\u015F gibi kodu ba\u015Ftan ba\u015Flat\u0131r."},"pin-sda-scl":{kat:"pin",ad:"SDA ve SCL pinleri",oncelik:Wn,kisa:"I2C haberle\u015Fmesinde kullan\u0131l\u0131r: SDA veriyi, SCL saat sinyalini ta\u015F\u0131r. UNO'da A4 ve A5 ile ayn\u0131 hatlara ba\u011Fl\u0131d\u0131r."},"pin-analog":{kat:"pin",ad:"Analog giri\u015F pini",kavram:"analog",oncelik:Wn,kisa:"0 ile 5 volt aras\u0131ndaki gerilimi \xF6l\xE7er ve 0 ile 1023 aras\u0131nda bir say\u0131ya \xE7evirir."},breadboard:{kat:"breadboard",ad:"Breadboard",oncelik:ti,kisa:"Lehim yapmadan devre kurmaya yarayan delikli tahta; deliklerin bir k\u0131sm\u0131 i\xE7eriden birbirine ba\u011Fl\u0131d\u0131r."},serit:{kat:"breadboard",ad:"\u015Eerit (5'li delik grubu)",oncelik:$i,kisa:"Ayn\u0131 s\xFCtundaki be\u015F delik i\xE7eriden bir metal \u015Feritle ba\u011Fl\u0131d\u0131r; bu deliklere tak\u0131lan bacaklar birbirine ba\u011Flanm\u0131\u015F olur."},"arti-ray":{kat:"breadboard",ad:"Art\u0131 (+) ray\u0131",oncelik:Zi,kisa:"K\u0131rm\u0131z\u0131 \xE7izgi boyunca uzanan s\u0131ra boydan boya ba\u011Fl\u0131d\u0131r; genellikle 5V buraya ba\u011Flan\u0131r."},"eksi-ray":{kat:"breadboard",ad:"Eksi (\u2212) ray\u0131",oncelik:Zi,kisa:"Mavi \xE7izgi boyunca uzanan s\u0131ra boydan boya ba\u011Fl\u0131d\u0131r; genellikle GND buraya ba\u011Flan\u0131r."},"orta-kanal":{kat:"breadboard",ad:"Orta kanal",oncelik:Zi,kisa:"Breadboard'u iki yar\u0131ya ay\u0131r\u0131r: iki yar\u0131daki delikler birbirine ba\u011Fl\u0131 de\u011Fildir. Buton gibi par\xE7alar bu kanal\u0131n \xFCst\xFCne tak\u0131l\u0131r."},koordinat:{kat:"breadboard",ad:"Koordinatlar",oncelik:$i,kisa:"Harfler sat\u0131rlar\u0131 (a-j), say\u0131lar s\xFCtunlar\u0131 (1-30) g\xF6sterir. 15e gibi bir adres, deli\u011Fin yerini tam s\xF6yler."},led:{kat:"isik",ad:"LED",oncelik:ti,kisa:"Elektrik do\u011Fru y\xF6nde ge\xE7ince \u0131\u015F\u0131k veren par\xE7a."},anot:{kat:"parca",ad:"Anot (+)",oncelik:$i,kisa:"LED'in uzun baca\u011F\u0131; art\u0131 uca ba\u011Flan\u0131r."},katot:{kat:"parca",ad:"Katot (\u2212)",oncelik:$i,kisa:"LED'in k\u0131sa baca\u011F\u0131; eksi uca (GND) ba\u011Flan\u0131r."},direnc:{kat:"parca",ad:"Diren\xE7",oncelik:ti,kisa:"Ak\u0131m\u0131 s\u0131n\u0131rlar; LED'i fazla ak\u0131mdan korur."},"renk-bantlari":{kat:"parca",ad:"Renk bantlar\u0131",oncelik:$i,kisa:"Direncin de\u011Feri renklerle yaz\u0131l\u0131r: ilk iki bant rakamlar\u0131, \xFC\xE7\xFCnc\xFCs\xFC eklenecek s\u0131f\u0131r say\u0131s\u0131n\u0131, sonuncusu hata pay\u0131n\u0131 g\xF6sterir."},buton:{kat:"parca",ad:"Buton",oncelik:ti,kisa:"Bas\u0131l\u0131nca iki ucunu birbirine ba\u011Flar, b\u0131rak\u0131nca ay\u0131r\u0131r."},kablo:{kat:"parca",ad:"Atlama kablosu",oncelik:Zi,kisa:"Ucundaki i\u011Fnelerle karttaki pinleri breadboard'daki deliklere ba\u011Flar; elektrik kablonun i\xE7inden ge\xE7er."}},bh=i=>lo[oo[i]?.kat]?oo[i].kat:null;var hp="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";var Mh=document.documentElement,wh="bote-3d-gorunum",dp=(i,t)=>{try{localStorage.setItem(i,t)}catch{}},Tv=i=>{try{return localStorage.getItem(i)}catch{return null}},Sh=i=>{let t=document.querySelector("#duyuru");t&&(t.textContent=i)},fp=["sanal","fiziksel"];function pp(){let i=new URLSearchParams(location.search).get("gorunum");return fp.includes(i)?i:Tv(wh)==="fiziksel"?"fiziksel":"sanal"}var Rv=[".gorunum-gecis{display:inline-flex;flex:none;align-items:stretch;border:1px solid var(--line);border-radius:12px;background:var(--surface);overflow:hidden}",".gorunum-gecis button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:var(--btn);min-width:var(--btn);padding:0 13px;border:0;border-radius:0;background:transparent;color:var(--muted);font-weight:700;white-space:nowrap;cursor:pointer;touch-action:manipulation;user-select:none}",".gorunum-gecis button+button{border-left:1px solid var(--line)}",".gorunum-gecis button[aria-pressed=true]{background:var(--violet-soft);color:var(--violet);box-shadow:inset 0 -3px 0 var(--violet)}",".gorunum-gecis button[aria-busy=true]{cursor:progress}",".gorunum-gecis button:focus-visible{outline-offset:-4px}","@media (hover:hover) and (pointer:fine){.gorunum-gecis button:not([aria-pressed=true]):hover{background:var(--raised);color:var(--ink)}}","@media (max-width:900px){.gorunum-gecis .gg-yazi{display:none}.gorunum-gecis button{padding:0}}",":root[data-mod=tahta] .gorunum-gecis button[aria-pressed=false]{display:none}",":root[data-mod=tahta] .gorunum-gecis button{border-left:0}",".gorunum-gecis .gg-degis{display:none;width:.95em;height:.95em;opacity:.7}",":root[data-mod=tahta] .gorunum-gecis .gg-degis{display:inline-block}",":root[data-mod=tahta] .gorunum-gecis:has([aria-busy=true]) button{cursor:progress;opacity:.75}"].join(`
`),mp='<svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">',Cv={sanal:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',fiziksel:'<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'},Iv=mp.replace('class="ico"','class="ico gg-degis"')+'<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>';function gp(i){let t="sanal",e="sanal",n=document.createElement("style");n.textContent=Rv,document.head.appendChild(n);let s=document.createElement("div");s.className="gorunum-gecis",s.setAttribute("role","group"),s.setAttribute("aria-label","G\xF6r\xFCn\xFCm");for(let[c,u,f]of[["sanal","Sanal","Sanal g\xF6r\xFCn\xFCm: sade 3D \xE7izim"],["fiziksel","Fiziksel","Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi"]]){let h=document.createElement("button");h.type="button",h.dataset.gorunumSec=c,h.title=f,h.setAttribute("aria-label",`${u} g\xF6r\xFCn\xFCm`),h.setAttribute("aria-pressed",String(c==="sanal")),h.innerHTML=`${mp}${Cv[c]}</svg><span class="gg-yazi">${u}</span>${Iv}`,s.append(h)}let r=document.querySelector("#gorunum-yuva");r?r.append(s):document.querySelector(".ust-sag")?.prepend(s);let a=[...s.querySelectorAll("button")],o=()=>{for(let c of a)c.setAttribute("aria-pressed",String(c.dataset.gorunumSec===t))};async function l(c,{kaydet:u=!0,sessiz:f=!1}={}){if(!fp.includes(c))return;if(e=c,c===t){o();return}let h=a.find(m=>m.dataset.gorunumSec===c);h?.setAttribute("aria-busy","true"),c==="fiziksel"&&!f&&Sh("Fiziksel g\xF6r\xFCn\xFCm haz\u0131rlan\u0131yor");let d=!0;try{await i(c)}catch(m){d=!1,console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131",m)}if(h?.removeAttribute("aria-busy"),e===c){if(!d){t="sanal",dp(wh,"sanal"),o(),Sh("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor");return}if(t=c,Mh.dataset.gorunumKip=c,o(),f||Sh(c==="fiziksel"?"Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi":"Sanal g\xF6r\xFCn\xFCm"),document.dispatchEvent(new CustomEvent("3d:gorunum",{detail:{ad:c}})),u){dp(wh,c);let m=new URL(location.href);c==="fiziksel"?m.searchParams.set("gorunum","fiziksel"):m.searchParams.delete("gorunum"),history.replaceState(null,"",m)}}}return s.addEventListener("click",c=>{let u=c.target.closest("[data-gorunum-sec]");if(u){if(Mh.dataset.mod==="tahta"){s.querySelector("[aria-busy=true]")||l(t==="sanal"?"fiziksel":"sanal");return}l(u.dataset.gorunumSec)}}),Mh.dataset.gorunumKip="sanal",{ayarla:l,simdiki:()=>t,gecis:s,onIsit:c=>{for(let u of["pointerenter","focusin"])a[1].addEventListener(u,c,{once:!0})}}}var Cc={x:45.2,z:21.6,a:6,arduinoZ:28,unoX:57.4,unoZ:21.9};function _p(i,t,e){let{x:n,z:s,a:r}=Cc;i.save(),i.strokeStyle=e,i.fillStyle=e,i.lineCap="round",i.lineJoin="round",i.lineWidth=1.05*t,i.beginPath();for(let u=0;u<=160;u++){let f=u/160*Math.PI*2,h=n+r*Math.cos(f),d=s+r*.62*Math.sin(2*f)*.92;u?i.lineTo(h*t,d*t):i.moveTo(h*t,d*t)}i.closePath(),i.stroke();let a=r*.2,o=.8*t,l=n-r*.52,c=n+r*.52;i.lineWidth=o,i.lineCap="butt",i.beginPath(),i.moveTo((l-a)*t,s*t),i.lineTo((l+a)*t,s*t),i.stroke(),i.beginPath(),i.moveTo((c-a)*t,s*t),i.lineTo((c+a)*t,s*t),i.moveTo(c*t,(s-a)*t),i.lineTo(c*t,(s+a)*t),i.stroke(),i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(n*t,Cc.arduinoZ*t),i.scale(.92,1),i.font=`800 ${2.5*t}px "Arial Black", "Arial", Helvetica, sans-serif`,i.fillText("ARDUINO",0,0),i.restore(),i.save(),i.translate(Cc.unoX*t,Cc.unoZ*t),i.scale(.9,1),i.font=`800 ${4.6*t}px "Arial Black", "Arial", Helvetica, sans-serif`,i.fillText("UNO",0,0),i.restore(),i.restore()}function Pc(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ei(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d",{willReadFrequently:!1})]}var Th={dusuk:{pcb:1536,pcbN:0,bb:1536,bbN:0,aniz:4},orta:{pcb:2048,pcbN:1024,bb:2048,bbN:1024,aniz:8},yuksek:{pcb:4096,pcbN:2048,bb:3072,bbN:1536,aniz:16}};function Ic(i,t,e,n,s,r){let a=Pc(n),o=Math.max(2,Math.round(t/s)),l=Math.max(2,Math.round(e/s)),[c,u]=ei(o,l),f=u.createImageData(o,l);for(let h=0;h<o*l;h++){let d=a()<.5?0:255;f.data[h*4]=f.data[h*4+1]=f.data[h*4+2]=d,f.data[h*4+3]=Math.round(a()*255*r)}u.putImageData(f,0,0),i.save(),i.imageSmoothingEnabled=!0,i.drawImage(c,0,0,t,e),i.restore()}function Rh(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,[r,a]=ei(e,n),o=a.createImageData(e,n),l=o.data,c=(u,f)=>s[(Math.min(n-1,Math.max(0,f))*e+Math.min(e-1,Math.max(0,u)))*4];for(let u=0;u<n;u++)for(let f=0;f<e;f++){let h=(c(f-1,u)-c(f+1,u))*t/255,d=(c(f,u+1)-c(f,u-1))*t/255,m=1,_=Math.hypot(h,d,m);h/=_,d/=_,m/=_;let g=(u*e+f)*4;l[g]=(h*.5+.5)*255,l[g+1]=(d*.5+.5)*255,l[g+2]=(m*.5+.5)*255,l[g+3]=255}return a.putImageData(o,0,0),r}function Fi(i,t,e,n=!1){let s=new os(i);return s.colorSpace=t?sn:yi,s.minFilter=Di,s.magFilter=rn,s.anisotropy=e,n&&(s.wrapS=s.wrapT=_r),s}var Ah={albedo:{maske:"#0d7783",iz:"#3fb0bb",ped:"#cfd3d8",altin:"#d9b04f",delik:"#101214",ipek:"#f2f7f7",izAlfa:.32},orm:{maske:"rgb(255,117,0)",iz:"rgb(255,105,0)",ped:"rgb(255,77,255)",altin:"rgb(255,70,255)",delik:"rgb(255,200,0)",ipek:"rgb(255,158,0)",izAlfa:1},yuk:{maske:"rgb(128,128,128)",iz:"rgb(150,150,150)",ped:"rgb(112,112,112)",altin:"rgb(110,110,110)",delik:"rgb(60,60,60)",ipek:"rgb(146,146,146)",izAlfa:1}},bp=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],Pv=[{k:[10.5,24.5,9.5,22.5],n:18},{k:[12,30,22.5,30.5],n:8},{k:[3,17,1.5,14],n:8},{k:[2,22,41,52],n:14},{k:[24,64,29,33],n:10},{k:[24,64,41.5,48],n:10},{k:[20,66,5,9.5],n:10}],kv=[[20.07,45.47,1.27,3.81],[46.99,67.31,1.27,3.81],[25.15,45.47,49.53,52.07],[48.01,63.25,49.53,52.07],[-6.35,9.65,9.24,21.24],[-1.8,12.2,40.4,49.4],[25.75,63.25,32.2,41.4],[17.5,22.5,15,20],[15.75,26.25,24.8,29.2],[11.75,18.25,43.1,49.25],[9.85,16.15,28.35,34.65],[16.35,22.65,34.35,40.65],[4.4,10.4,2.2,8.2],[62.33,67.41,22.86,30.48],[27,30,9.6,16.4],[60,63,9.6,11.6],[37,53.5,16.5,29.6],[53.5,61.5,18.5,25.5],[30,62,9.4,11.8],[24,47,40.6,43.4],[47,64,40.6,43.4]];function Mp(i=1){let t=[],e=(n,s,r,a,o)=>kv.some(([l,c,u,f])=>s+o>l&&n-o<c&&a+o>u&&r-o<f)||bp.some(([l,c])=>Math.hypot((n+s)/2-l,(r+a)/2-c)<3.6)||t.some(l=>s+.4>l.x-l.w/2&&n-.4<l.x+l.w/2&&a+.4>l.z-l.d/2&&r-.4<l.z+l.d/2);return Pv.forEach((n,s)=>{let r=Pc(6221056+s),a=Math.round(n.n*i),o=0;for(let l=0;l<400&&o<a;l++){let c=r()<.62?"direnc":"kond",u=c==="direnc"?1.6:2,f=c==="direnc"?.8:1.25,h=r()<.5,d=h?u:f,m=h?f:u,_=Math.round((n.k[0]+r()*(n.k[1]-n.k[0]))/.8)*.8,g=Math.round((n.k[2]+r()*(n.k[3]-n.k[2]))/.8)*.8;_-d/2<n.k[0]||_+d/2>n.k[1]||g-m/2<n.k[2]||g+m/2>n.k[3]||e(_-d/2,_+d/2,g-m/2,g+m/2,.6)||(t.push({x:_,z:g,w:d,d:m,yatay:h,tur:c,ad:`${c==="direnc"?"R":"C"}${t.length+1}`}),o++)}}),t}function Eh(i,t,e,n,{smd:s,logo:r,sus:a}){let o=t/Oe.w;i.fillStyle=n.maske,i.fillRect(0,0,t,e),i.save(),i.globalAlpha=n.izAlfa,i.strokeStyle=n.iz,i.lineWidth=.25*o,i.lineCap="round",i.lineJoin="round";let l=p=>{i.beginPath(),p.forEach(([b,S],M)=>M?i.lineTo(b*o,S*o):i.moveTo(b*o,S*o)),i.stroke()};for(let p=0;p<14;p++){let b=31.5+p*2.54>46?33+p*2.54:31.5+p*2.54,S=7+p%4*.8;l([[b,4.6],[b,S],[b-2.2,S+2.2],[b-2.2,30.5]])}for(let p=0;p<6;p++){let b=49.3+p*2.54;l([[b,48.4],[b,45.2-p*.3],[b-2.4,42.8-p*.3],[b-2.4,41.6]])}l([[10.5,13.5],[16,13.5],[18.5,16]]),l([[10.5,17.6],[15,17.6],[17.8,20.4],[21,20.4]]),l([[8,44],[13,44],[15.5,46.5]]),l([[36.5,48.4],[36.5,45.5],[33,42],[16,42]]),l([[39,48.4],[39,45.4],[29,45.4]]),l([[23,17.5],[26,17.5],[28.5,20],[28.5,30.5]]),l([[24.5,27],[27,27],[29.5,29.5]]),l([[3,30],[8,30],[10.5,27.5],[10.5,22]]),l([[57,28.5],[60,28.5],[62.4,26.1]]),i.restore(),i.fillStyle=n.ped;for(let p of s){let b=p.yatay?p.w*.3:p.w*1.08,S=p.yatay?p.d*1.08:p.d*.3;for(let M of[-1,1]){let E=p.x+(p.yatay?M*(p.w/2-b/2+.1):0),x=p.z+(p.yatay?0:M*(p.d/2-S/2+.1));i.fillRect((E-b/2)*o,(x-S/2)*o,b*o,S*o)}}for(let[p,b]of bp)i.fillStyle=n.altin,i.beginPath(),i.arc(p*o,b*o,2.8*o,0,Math.PI*2),i.fill(),i.fillStyle=n.delik,i.beginPath(),i.arc(p*o,b*o,1.6*o,0,Math.PI*2),i.fill();let c=n.ipek;i.strokeStyle=c,i.fillStyle=c,i.lineWidth=.2*o;let u=(p,b,S,M)=>i.strokeRect(p*o,b*o,(S-p)*o,(M-b)*o);u(20,1.2,45.5,3.9),u(47,1.2,67.3,3.9),u(25.1,49.5,45.5,52.1),u(48,49.5,63.3,52.1);let f='"Arial Narrow", "Roboto Condensed", "Liberation Sans Narrow", Arial, Helvetica, sans-serif',h=(p,b,S,M,{don:E=0,hiza:x="center",kalin:T=700,dar:v=.84}={})=>{i.save(),i.translate(b*o,S*o),i.rotate(E),i.scale(v,1),i.font=`${T} ${M*o}px ${f}`,i.textAlign=x,i.textBaseline="middle",i.fillText(p,0,0),i.restore()},d=-Math.PI/2,m={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX\u21921",0:"RX\u21900"};for(let[p,b]of Object.entries(m))h(b,bi[p],4.4,1.25,{don:d,hiza:"right"});h("DIGITAL (PWM~)",46,10.6,1.5);let _={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[p,b]of Object.entries(_))h(b,Yi[p],48.3,1.2,{don:d,hiza:"left"});for(let[p,b]of Object.entries(qi))h(p,b,48.3,1.25,{don:d,hiza:"left"});h("POWER",35.3,42,1.5),h("ANALOG IN",55.6,42,1.5),h("L",26.6,10.6,1.2),h("TX",25.9,13.3,1),h("RX",25.9,15.4,1),h("ON",64.4,10.6,1.2),h("RESET",7.4,10.3,1.1),h("ICSP",64.9,21.9,1.1);let g=(p,b,S)=>{i.beginPath(),i.arc(p*o,b*o,S*o,0,Math.PI*2),i.fill()};g(62,24.1,.35),g(25.4,34.6,.35);for(let[p,b]of[[13,31.5],[19.5,37.5]])i.beginPath(),i.arc(p*o,b*o,3.5*o,0,Math.PI*2),i.stroke(),h("+",p+3.9,b-2.4,1.3);if(i.strokeRect((44.5-18.9)*o,(36.8-4.75)*o,37.8*o,9.5*o),a){h("C1",9.2,31.5,.8,{kalin:600}),h("C2",23.2,37.5,.8,{kalin:600}),h("Y1",21,29.9,.8,{kalin:600}),h("U1",44.5,43.6,.8,{kalin:600}),h("U3",20,21.2,.8,{kalin:600}),h("X1",5.2,38.6,.8,{kalin:600});for(let p of s.slice(0,26))p.x>4&&p.x<64&&h(p.ad,p.x,p.z+(p.yatay?1.15:1.55),.62,{kalin:600})}r&&_p(i,o,c)}function Sp(i,{smd:t,logo:e}){let n=Th[i],s=n.pcb,r=Math.round(s*Oe.d/Oe.w),[a,o]=ei(s,r);Eh(o,s,r,Ah.albedo,{smd:t,logo:e,sus:i!=="dusuk"}),Ic(o,s,r,45223,s/110,.05),Ic(o,s,r,45224,s/420,.04);let l={albedo:Fi(a,!0,n.aniz)};if(n.pcbN){let c=n.pcbN,u=Math.round(c*Oe.d/Oe.w),[f,h]=ei(c,u);Eh(h,c,u,Ah.yuk,{smd:t,logo:e,sus:!0}),l.normal=Fi(Rh(f,i==="yuksek"?2.2:1.6),!1,n.aniz);let[d,m]=ei(c,u);Eh(m,c,u,Ah.orm,{smd:t,logo:e,sus:!0}),l.orm=Fi(d,!1,n.aniz)}return l}var xp={albedo:{govde:"#f1eee6",kanal:"#d9d4c9",kanalCizgi:"#c9c3b7",halka:"#dcd7cb",halkaKoyu:"#c7c1b4",delik:"#232327",kirmizi:"#d23b3b",mavi:"#2f62c9",yazi:"#8a8478"},yuk:{govde:"rgb(128,128,128)",kanal:"rgb(96,96,96)",kanalCizgi:"rgb(88,88,88)",halka:"rgb(104,104,104)",halkaKoyu:"rgb(92,92,92)",delik:"rgb(24,24,24)",kirmizi:"rgb(128,128,128)",mavi:"rgb(128,128,128)",yazi:"rgb(122,122,122)"}},yp=i=>Rt.x-36.83+(i-1)*Hn;function vp(i,t,e,n){let s=t/Rt.w,r=c=>(c-Rt.x+Rt.w/2)*s,a=c=>(c+Rt.d/2)*s;i.fillStyle=n.govde,i.fillRect(0,0,t,e),i.fillStyle=n.kanal,i.fillRect(0,a(-1.5),t,3*s),i.fillStyle=n.kanalCizgi,i.fillRect(0,a(-1.5),t,.25*s),i.fillRect(0,a(1.25),t,.25*s);let o=(c,u)=>{let f=r(c),h=a(u),d=1.55*s,m=1*s;i.fillStyle=n.halkaKoyu,i.fillRect(f-d/2,h-d/2,d,d),i.fillStyle=n.halka,i.fillRect(f-d/2+.22*s,h-d/2+.22*s,d-.22*s,d-.22*s),i.fillStyle=n.delik,i.fillRect(f-m/2,h-m/2,m,m)};for(let c=1;c<=30;c++)for(let u of Object.values(Hs))o(yp(c)-Rt.x,u);for(let c of Object.values(kn))for(let u of Vs)o(yp(u)-Rt.x,c);for(let c of[1,-1])i.fillStyle=n.kirmizi,i.fillRect(r(-37),a(c*23.6)-.3*s,r(37)-r(-37),.6*s),i.fillStyle=n.mavi,i.fillRect(r(-37),a(c*16.9)-.3*s,r(37)-r(-37),.6*s);let l='"Arial Narrow", "Roboto Condensed", Arial, Helvetica, sans-serif';i.textAlign="center",i.textBaseline="middle",i.font=`700 ${2.1*s}px ${l}`;for(let c of[1,-1])for(let u of[-39.4,39.4])i.fillStyle=n.kirmizi,i.fillText("+",r(u),a(c*kn["yakin+"])),i.fillStyle=n.mavi,i.fillText("\u2212",r(u),a(c*kn["yakin-"]));i.fillStyle=n.yazi,i.font=`700 ${1.45*s}px ${l}`;for(let[c,u]of Object.entries(Hs))for(let f of[-39.3,39.3])i.fillText(c,r(f),a(u));for(let c of[1,5,10,15,20,25,30])for(let u of[1,-1])i.fillText(String(c),r(-36.83+(c-1)*Hn),a(u*15.45))}function wp(i){let t=Th[i],e=t.bb,n=Math.round(e*Rt.d/Rt.w),[s,r]=ei(e,n);vp(r,e,n,xp.albedo),Ic(r,e,n,47873,e/90,.035);let a={albedo:Fi(s,!0,t.aniz)};if(t.bbN){let o=t.bbN,l=Math.round(o*Rt.d/Rt.w),[c,u]=ei(o,l);vp(u,o,l,xp.yuk),a.normal=Fi(Rh(c,2.4),!1,t.aniz)}return a}function Lv(i){let[t,e]=ei(1024,216);return e.fillStyle="#17171a",e.fillRect(0,0,1024,216),Ic(e,1024,216,3103,6,.06),e.fillStyle="#0b0b0d",e.beginPath(),e.arc(0,108,30,-Math.PI/2,Math.PI/2),e.fill(),e.strokeStyle="#26262b",e.lineWidth=3,e.beginPath(),e.arc(70,170,16,0,Math.PI*2),e.stroke(),e.fillStyle="#9ea2a9",e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(540,84),e.scale(.9,1),e.font='700 64px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("ATMEGA328P-PU",0,0),e.restore(),e.save(),e.translate(540,150),e.scale(.9,1),e.font='600 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillStyle="#80848b",e.fillText("AVR",0,0),e.restore(),Fi(t,!0,i)}function Dv(i){let[t,e]=ei(256,96);return e.fillStyle="#c9ccd2",e.fillRect(0,0,256,96),e.fillStyle="#2a2a2e",e.textAlign="center",e.textBaseline="middle",e.font='700 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("16.000",128,50),Fi(t,!0,i)}function Nv(i){let[t,e]=ei(256,64);e.fillStyle="#1c1d22",e.fillRect(0,0,256,64),e.fillStyle="#b9bdc4",e.fillRect(150,0,56,64),e.fillStyle="#1c1d22";for(let n of[12,30,48])e.fillRect(166,n-2,24,5);return Fi(t,!0,i)}function Ap(i,t,e,n){let[r,a]=ei(16,512);a.fillStyle="#d8c69c",a.fillRect(0,0,16,512);let o=Pc(3358);for(let c=0;c<90;c++)a.fillStyle=o()<.5?"rgba(120,90,40,0.06)":"rgba(255,255,255,0.06)",a.fillRect(0,o()*512,16,2+o()*6);let l=4.6*24/256;return i.forEach((c,u)=>{let h=(1-(t[u]+e/2)/e)*512;a.fillStyle=gh[c],a.fillRect(0,h-l/e*512/2,16,l/e*512)}),Fi(r,!0,n)}function Uv(){let[i,t]=ei(128,128),e=Pc(3868);t.fillStyle="rgb(128,128,128)",t.fillRect(0,0,128,128);for(let s=0;s<260;s++){let r=110+Math.round(e()*36);t.fillStyle=`rgb(${r},${r},${r})`,t.fillRect(0,Math.floor(e()*128),128,1)}let n=Fi(Rh(i,.8),!1,4,!0);return n.repeat.set(2,2),n}function Ep(i,t){let e=Th[i],n=Math.min(e.aniz,t||1),s=new Map,r=[],a=d=>(d&&r.push(d),d),o=d=>new Me(d),l={baslikPlastik:()=>o({color:1973794,roughness:.55}),baslikIc:()=>o({color:526346,roughness:.9}),metalCelik:()=>o({color:13619928,metalness:1,roughness:.32}),metalFirca:()=>o({color:13093584,metalness:1,roughness:.38,normalMap:i==="dusuk"?null:a(Uv()),normalScale:new rt(.35,.35)}),kalay:()=>o({color:12896462,metalness:1,roughness:.3}),altin:()=>o({color:14266447,metalness:1,roughness:.28}),kapAlu:()=>o({map:a(Nv(n)),metalness:.55,roughness:.42}),kapUst:()=>o({color:12041154,metalness:.9,roughness:.35}),cipGovde:()=>o({color:1513242,roughness:.62}),cipUst:()=>o({map:a(Lv(n)),roughness:.62}),kristal:()=>o({map:a(Dv(n)),metalness:.95,roughness:.3}),kristalYan:()=>o({color:13225170,metalness:.95,roughness:.3}),resetTaban:()=>o({color:1710622,roughness:.55}),resetDugme:()=>o({color:14207392,roughness:.5}),ayak:()=>o({color:3487034,roughness:.85}),pcbKenar:()=>o({color:10723188,roughness:.7}),jak:()=>o({color:1579035,roughness:.5}),koyu:()=>o({color:657932,roughness:.95}),smdDirenc:()=>o({color:1776413,roughness:.5}),smdKond:()=>o({color:11045722,roughness:.55}),bbYan:()=>o({color:15526111,roughness:.62}),klips:()=>o({color:12094026,metalness:1,roughness:.38}),dupont:()=>o({color:2763312,roughness:.55}),butonKapak:()=>o({color:14172995,roughness:.42})};function c(d){if(!s.has(d)){let m=l[d];if(!m)throw new Error("bilinmeyen malzeme "+d);s.set(d,m())}return s.get(d)}function u(d){let m={color:new Zt(d).lerp(new Zt(16777215),.35),emissive:new Zt(d),emissiveIntensity:0,roughness:.16,metalness:0,transparent:i!=="dusuk",opacity:i==="dusuk"?1:.8,depthWrite:!0};return h(i==="yuksek"?new ka({...m,clearcoat:1,clearcoatRoughness:.08}):o(m))}let f=[],h=d=>(f.push(d),d);return{duzey:i,aniz:n,mat:c,ledKubbe:u,kayit:a,kayitMat:h,ek:d=>({smd:i!=="dusuk",soket:i!=="dusuk",ledIc:i!=="dusuk"})[d]??!1,dispose(){for(let d of s.values())d.dispose();for(let d of f)d.dispose();for(let d of r)d.dispose()}}}var Fv="uyumlu",Ov={uyumlu:[[0,0],[66.38,0],[67.9,1.52],[67.9,14.3],[68.58,14.98],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],gercek:[[0,0],[64.52,0],[66.04,1.52],[66.04,12.95],[68.58,15.49],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],dikdortgen:[[0,0],[68.58,0],[68.58,53.34],[0,53.34]]},Ch=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],un=(i,t,e,n,s,r)=>{let a=new ye(i,t,e);return a.translate(n,s,r),a},Yr=(i,t,e,n,s,r,a)=>{let o=new gn(i,t,e,2,n);return o.translate(s,r,a),o},Ih=(i,t,e,n,s,r=16,a=i)=>{let o=new an(a,i,t,r);return o.translate(e,n,s),o},Bv=i=>i.index?i.toNonIndexed():i;function hn(i,t,e=!0){let n=new Ut(Vn(i.map(Bv),!1),t);return n.castShadow=n.receiveShadow=e,n}function Ph(i,t,e,n=16){let s=new us(i,{depth:t,bevelEnabled:!1,curveSegments:n});return s.rotateX(Math.PI/2),s.translate(0,e,0),s}var zv=(i,t,e,n=24)=>{let s=new cs;return s.absarc(i,t,e,0,Math.PI*2,!0),s.curves.length&&(s.autoClose=!0),s};function Tp(i,{logo:t=!0}={}){let e=new Xe;e.name="kart-fiziksel";let n=i.duzey,s=n!=="dusuk",r={dusuk:16,orta:24,yuksek:32}[n],a=i.ek("smd")?Mp(n==="yuksek"?1.45:1):[],o=Sp(n,{smd:a,logo:t});for(let X of Object.values(o))i.kayit(X);let l=Oe.x-Oe.w/2,c=Oe.z-Oe.d/2,u=new fi(Ov[Fv].map(([X,tt])=>new rt(X,tt)));for(let[X,tt]of Ch)u.holes.push(zv(X,tt,1.6,r));let f=Ph(u,1.6,0,r),h=f.attributes.position,d=f.attributes.uv;for(let X=0;X<h.count;X++)d.setXY(X,h.getX(X)/Oe.w,1-h.getZ(X)/Oe.d);f.translate(l,xt,c);let m=new Me({map:o.albedo,roughness:o.orm?1:.45,metalness:o.orm?1:0});o.normal&&(m.normalMap=o.normal,m.normalScale=new rt(n==="yuksek"?.8:.6,n==="yuksek"?.8:.6)),o.orm&&(m.roughnessMap=o.orm,m.metalnessMap=o.orm),i.kayitMat(m);let _=new Ut(f,[m,i.mat("pcbKenar")]);_.castShadow=_.receiveShadow=!0,e.add(_);let g=[];for(let[X,tt]of Ch){let J=oe(X,tt,xt-.8),lt=new an(1.6,1.6,1.6,r,1,!0);lt.translate(J.x,J.y,J.z),g.push(lt)}e.add(hn(g,i.mat("altin"))),e.add(hn(Ch.map(([X,tt])=>{let J=oe(X,tt,1.2);return Ih(1.6,2.4,J.x,J.y,J.z,14)}),i.mat("ayak")));let p=[],b=[],S=[],M=(X,tt,J)=>{let lt=X.map(y=>tt[y]),mt=Math.min(...lt)-1.27,Et=Math.max(...lt)+1.27,zt=J-1.27,Qt=J+1.27,Bt=7.1,L=oe((mt+Et)/2,J,xt+Bt/2);p.push(Yr(Et-mt,Bt,2.54,.25,L.x,L.y,L.z));let me=oe((mt+Et)/2,J,xt+Bt+.02);b.push(un(Et-mt-.5,.04,2,me.x,me.y,me.z));let se=new fi([new rt(mt,zt),new rt(Et,zt),new rt(Et,Qt),new rt(mt,Qt)]);for(let y of lt){let H=new cs([new rt(y-.53,J-.53),new rt(y-.53,J+.53),new rt(y+.53,J+.53),new rt(y+.53,J-.53)]);if(se.holes.push(H),s){let Q=oe(y,J,xt+Bt+.25);S.push(un(.42,.4,.22,Q.x,Q.y,Q.z-.3))}}let R=Ph(se,1.4,Ss,4);R.translate(l,0,c),p.push(R)};M(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],bi,Ms),M(["7","6","5","4","3","2","1","0"],bi,Ms),M(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],Yi,vi),M(["A0","A1","A2","A3","A4","A5"],qi,vi);let E=[],x=oe(64.87,26.67,xt+1.25);p.push(Yr(5.08,2.5,7.62,.2,x.x,x.y,x.z));for(let X of[63.6,66.14])for(let tt of[24.13,26.67,29.21]){let J=oe(X,tt,xt+5.25);E.push(un(.64,5.5,.64,J.x,J.y,J.z));let lt=new an(.06,.45,.5,4);lt.rotateY(Math.PI/4),lt.translate(J.x,xt+8.25,J.z),E.push(lt)}let T=[],v=[],A=[];x=oe(1.65,15.24,xt+5.45),T.push(Yr(16,10.9,12,.5,x.x,x.y,x.z));let k=new fi([new rt(-4.2,-3.9),new rt(4.2,-3.9),new rt(4.2,2.6),new rt(3,3.9),new rt(-3,3.9),new rt(-4.2,2.6)]),N=new us(k,{depth:.3,bevelEnabled:!1});N.rotateY(-Math.PI/2),x=oe(-6.36,15.24,xt+5.45),N.translate(x.x+.25,x.y,x.z),v.push(N);let z=new ye(.14,3,5.2);x=oe(-6.42,15.24,xt+5),z.translate(x.x,x.y,x.z);for(let X of[-6.2,6.2]){let tt=oe(4.5,15.24+X,xt-.4);T.push(un(1.2,1.4,.3,tt.x,tt.y,tt.z))}x=oe(5.2,44.9,xt+5.5),A.push(Yr(14,11,9,.8,x.x,x.y,x.z));let O=new Ia(3.2,.32,8,28);O.rotateY(Math.PI/2),x=oe(-1.84,44.9,xt+5.8),O.translate(x.x,x.y,x.z),A.push(O);let P=new Ls(3.15,28);P.rotateY(-Math.PI/2),P.translate(x.x-.03,x.y,x.z),v.push(P);let U=new an(1,1,1.2,16);U.rotateZ(Math.PI/2),U.translate(x.x+.4,x.y,x.z),T.push(U);let Z=[],K=[],ct=[[0,0],[3.1,0],[3.12,1],[2.95,1.2],[3.12,1.4],[3.15,4.9],[3.05,5.35],[2.85,5.5],[0,5.5]].map(([X,tt])=>new rt(X,tt)),$=[];for(let[X,tt]of[[13,31.5],[19.5,37.5]]){let J=oe(X,tt,xt),lt=new ki(ct,s?32:20);lt.rotateY(Math.PI*.8),lt.translate(J.x,J.y+.35,J.z),$.push(lt);let mt=new an(2.75,2.75,.06,28);mt.translate(J.x,J.y+5.87,J.z),Z.push(mt);for(let Et of[0,Math.PI/2]){let zt=new ye(4.2,.1,.32);zt.rotateY(Et+.3),zt.translate(J.x,J.y+5.9,J.z),v.push(zt)}K.push(un(6.3,.35,6.3,J.x,J.y+.175,J.z))}x=oe(21,27,xt);let ot=new fi;ot.absarc(-3.05,0,2.2,Math.PI/2,Math.PI*1.5,!1),ot.absarc(3.05,0,2.2,-Math.PI/2,Math.PI/2,!1);let at=Ph(ot,3.4,3.5,12);at.translate(x.x,x.y,x.z);let Yt=new pi(6,2.25);if(Yt.rotateX(-Math.PI/2),Yt.translate(x.x,x.y+3.54,x.z),v.push(un(9.6,.15,3.6,x.x,x.y+.075,x.z)),x=oe(44.5,36.8,xt+1.3),p.push(Yr(37.5,2.6,9.2,.3,x.x,x.y,x.z)),s)for(let X=0;X<14;X++)for(let tt of[-1,1]){let J=oe(27.99+X*2.54,36.8+tt*4.35,xt+2.62);v.push(un(1,.04,.5,J.x,J.y,J.z))}let Lt=[];for(let X=0;X<14;X++)for(let tt of[-1,1]){let J=27.99+X*2.54,lt=oe(J,36.8+tt*3.95,xt+4.1);Lt.push(un(.5,.3,.6,lt.x,lt.y,lt.z));let mt=oe(J,36.8+tt*4.15,xt+3.3);Lt.push(un(.5,1.6,.26,mt.x,mt.y,mt.z));let Et=oe(J,36.8+tt*4.15,xt+2.62);Lt.push(un(.28,.4,.26,Et.x,Et.y,Et.z))}let _e=i.mat("cipGovde"),pe=i.mat("cipUst"),re=new Ut(new gn(35.56,3.3,7.4,2,.3),[_e,_e,pe,_e,_e,_e]);re.position.copy(oe(44.5,36.8,xt+2.6+1.65)),re.castShadow=re.receiveShadow=!0,e.add(re);let et=[],it=[];x=oe(20,17.5,xt+.45),et.push(un(5,.9,5,x.x,x.y,x.z));for(let[X,tt,J,lt]of[[-2.6,0,.25,4.2],[2.6,0,.25,4.2],[0,-2.6,4.2,.25],[0,2.6,4.2,.25]])it.push(un(J,.2,lt,x.x+X,xt+.1,x.z+tt));x=oe(15,47.5,xt+.8),et.push(un(6.5,1.6,3.5,x.x,x.y,x.z));for(let X of[-2.3,0,2.3])it.push(un(.7,.3,1.4,x.x+X,xt+.15,x.z+2.2));x=oe(15,44.6,xt+.2),it.push(un(3.2,.3,3,x.x,x.y,x.z)),x=oe(7.4,5.2,xt+1.6);let vt=[Yr(6,3.2,6,.45,x.x,x.y,x.z)];T.push(un(6.1,.3,6.1,x.x,xt+3.35,x.z));for(let X of[-2.4,2.4])for(let tt of[-2.4,2.4])v.push(Ih(.32,.06,x.x+X,xt+3.53,x.z+tt,10));for(let X of[-3.3,3.3])for(let tt of[-2.25,2.25])T.push(un(.5,1.6,.7,x.x+X,xt+.8,x.z+tt));let Kt=new Ut(Ih(1.7,1.3,x.x,xt+4.1,x.z,24),i.mat("resetDugme"));if(Kt.castShadow=Kt.receiveShadow=!0,e.add(hn(p,i.mat("baslikPlastik")),hn(b,i.mat("baslikIc")),hn(E,i.mat("altin")),hn(T,i.mat("metalFirca")),hn(v,i.mat("koyu")),hn(A,i.mat("jak")),hn($,i.mat("kapAlu")),hn(Z,i.mat("kapUst")),hn(K,i.mat("baslikPlastik")),hn([at],i.mat("kristalYan")),hn([Yt],i.mat("kristal"),!1),hn(Lt,i.mat("metalCelik")),hn(et,_e),hn(it,i.mat("kalay")),hn(vt,i.mat("resetTaban")),hn([z],i.mat("baslikPlastik")),Kt),S.length&&e.add(hn(S,i.mat("altin"),!1)),a.length){let X=new ye(1,1,1),tt=new ye(1,1,1),J=new Me({color:16777215,roughness:.5});i.kayitMat(J);let lt=new di(X,J,a.length),mt=new di(tt,i.mat("kalay"),a.length*2),Et=new qe,zt=new Zt(1776413),Qt=new Zt(11045722);a.forEach((Bt,L)=>{let me=Bt.tur==="direnc"?.45:.7,se=oe(Bt.x,Bt.z,xt+me/2),R=Bt.yatay?Bt.w:Bt.d,y=Bt.yatay?Bt.d:Bt.w,V=R*.18;Et.position.copy(se),Et.rotation.set(0,Bt.yatay?0:Math.PI/2,0),Et.scale.set(R-2*V+.02,me,y),Et.updateMatrix(),lt.setMatrixAt(L,Et.matrix),lt.setColorAt(L,Bt.tur==="direnc"?zt:Qt);for(let H of[-1,1])Et.position.set(se.x+(Bt.yatay?H*(R/2-V/2):0),se.y,se.z+(Bt.yatay?0:H*(R/2-V/2))),Et.scale.set(V,me+.02,y+.02),Et.updateMatrix(),mt.setMatrixAt(L*2+(H>0?1:0),Et.matrix)}),e.add(lt,mt)}let At=(X,tt,J)=>{let lt=new Me({color:new Zt(J).multiplyScalar(.55),emissive:J,emissiveIntensity:0,roughness:.25,transparent:!1});i.kayitMat(lt);let mt=oe(X,tt,xt+.25),Et=new Ut(new ye(1,.5,.8),lt);Et.position.copy(mt),e.add(Et);let zt=new Ut(Vn([un(.32,.42,.82,mt.x-.66,mt.y-.04,mt.z),un(.32,.42,.82,mt.x+.66,mt.y-.04,mt.z)]),i.mat("kalay"));return e.add(zt),Qt=>{lt.emissiveIntensity=Qt?1.1:0,lt.color.set(Qt?J:new Zt(J).multiplyScalar(.55))}},Ot=At(28.5,10.6,16754470),we=At(61.5,10.6,4448378);return At(28.5,13.3,16766287),At(28.5,15.4,16766287),{grup:e,kanca:{ledL:Ot,ledOn:we}}}var Rp=(i,t,e,n,s,r)=>{let a=new ye(i,t,e);return a.translate(n,s,r),a};function Cp(i){let t=new Xe;t.name="breadboard-fiziksel";let e=wp(i.duzey);for(let c of Object.values(e))i.kayit(c);let n=new Me({map:e.albedo,roughness:.58});e.normal&&(n.normalMap=e.normal,n.normalScale=new rt(.9,.9));let s=new Me({color:15526111,roughness:.62});i.kayitMat(n),i.kayitMat(s);let r=[s,s,n,s,s,s],a=new Ut(new gn(Rt.w,Rt.h,Rt.d,3,1.1),r);a.position.set(Rt.x,Rt.h/2,Rt.z),a.castShadow=a.receiveShadow=!0,t.add(a);let o=[];for(let c=1;c<=30;c++)for(let u of[1,-1])o.push(Rp(1.5,1.1,11.4,_n(c),Je-2.3,Rt.z+u*8.89));for(let c of Object.values(kn))o.push(Rp(_n(30)-_n(2)+1.6,1.1,1.5,Rt.x,Je-2.3,Rt.z+c));let l=new Ut(Vn(o.map(c=>c.toNonIndexed())),i.mat("klips"));return l.visible=!1,t.add(l),{grup:t,kanca:{rontgen(c){l.visible=c;for(let u of[n,s])u.transparent=c,u.opacity=c?.3:1,u.depthWrite=!c,u.needsUpdate=!0;a.castShadow=!c}}}}var Xn=(i,t=!0)=>(i.castShadow=i.receiveShadow=t,i),Oi=i=>i.index?i.toNonIndexed():i;function Vv(i,t){let e=new Xe;e.name="led-fiziksel";let n=new Zt(Tc[t.userData.renk]??Tc.kirmizi),s=4.2,r=i.ledKubbe(n),a=r.color.clone(),o=[[0,1],[2.5,1],[2.5,5.6]];for(let p=1;p<=12;p++){let b=p/12*(Math.PI/2);o.push([2.5*Math.cos(b),5.6+2.5*Math.sin(b)])}let l=new ki(o.map(([p,b])=>new rt(p,b)),i.duzey==="yuksek"?40:32),c=Math.acos(2.55/2.95),u=new fi;u.absarc(0,0,2.95,c,Math.PI*2-c,!1),u.lineTo(2.55,2.95*Math.sin(c));let f=new us(u,{depth:1,bevelEnabled:!1,curveSegments:28});f.rotateX(Math.PI/2),f.translate(0,1,0);let h=new Ut(Vn([Oi(l),Oi(f)]),r);if(h.position.y=s,h.renderOrder=-1,h.castShadow=!1,h.receiveShadow=!1,e.add(h),i.ek("ledIc")){let p=Vn([Oi((()=>{let b=new ye(1.5,3.4,.45);return b.translate(.95,s+1.7,0),b})()),Oi((()=>{let b=new ye(.5,2.9,.45);return b.translate(-1.27,s+1.45,0),b})()),Oi((()=>{let b=new ye(2,.12,.12);return b.translate(-.2,s+3.5,0),b})())]);e.add(Xn(new Ut(p,i.mat("metalCelik")),!1))}let d=Xn(new Ut(new ye(.5,1,.5),i.mat("kalay"))),m=Xn(new Ut(new ye(.5,1,.5),i.mat("kalay")));d.position.x=-1.27,m.position.x=1.27,e.add(d,m);let _=p=>{let b=22+(s+5-22)*p,S=17+(s+5-17)*p;d.scale.y=b,d.position.y=s-b/2,m.scale.y=S,m.position.y=s-S/2};return _(1),{grup:e,kanca:{ac:p=>{let b=typeof p=="number"?p:p?1:0;r.color.copy(a).lerp(n,b),r.emissiveIntensity=1.05*b,r.transparent&&(r.opacity=.8+.15*b)},bacak:_}}}function Gv(i,t){let e=new Xe;e.name="direnc-fiziksel";let n=t.userData,s=n.H??3.4,r=n.uclar?n.uclar[1].x-n.uclar[0].x:10,a=n.bantlar||["kirmizi","kirmizi","kahve","altin"],o=6.88,l=46,c=[];for(let _=0;_<l;_++){let g=-o/2+_/(l-1)*o,p=Math.abs(g),b=1.3*Math.sqrt(Math.max(0,1-((p-2.45)/.99)**2)),S=_===0||_===l-1?0:Math.max(p<2.45?1.02:0,b);c.push(new rt(S,g))}let u=new ki(c,i.duzey==="dusuk"?16:24);u.rotateZ(-Math.PI/2);let f=[.18,.33,.48,.8].map(_=>2.3-4.6*_),h=new Me({map:i.kayit(Ap(a,f,o,i.aniz)),roughness:.45});i.kayitMat(h);let d=Xn(new Ut(u,h));d.position.y=s,e.add(d);let m=[];for(let _ of[-1,1]){let g=r/2-2.9;if(g>.05){let S=new an(.27,.27,g,10);S.rotateZ(Math.PI/2),S.translate(_*((r/2+2.9)/2),s,0),m.push(Oi(S))}let p=new an(.27,.27,s+7,10);p.translate(_*r/2,(s-7)/2,0),m.push(Oi(p));let b=new hs(.27,10,8);b.translate(_*r/2,s,0),m.push(Oi(b))}return e.add(Xn(new Ut(Vn(m),i.mat("kalay")))),{grup:e,kanca:{}}}function Hv(i){let t=new Xe;t.name="buton-fiziksel";let e=Xn(new Ut(new gn(6,3.4,6,2,.45),i.mat("resetTaban")));e.position.y=1.7;let n=Xn(new Ut(new ye(6.2,.3,6.2),i.mat("metalFirca")));n.position.y=3.55;let s=Xn(new Ut(new an(1.65,1.8,1.7,28),i.mat("butonKapak")));s.position.y=4.55,t.add(e,n,s);let r=[];for(let o of[-2.54,2.54])for(let l of[-3.81,3.81]){let c=new ye(.6,7,.35);c.translate(o,-3.2,l),r.push(Oi(c))}let a=[];for(let o of[-2.5,2.5])for(let l of[-2.5,2.5]){let c=new an(.3,.3,.06,10);c.translate(o,3.73,l),a.push(Oi(c))}return t.add(Xn(new Ut(Vn(r),i.mat("kalay"))),new Ut(Vn(a),i.mat("koyu"))),{grup:t,kanca:{bas(o){s.position.y=o?3.95:4.55}}}}function Wv(i,t){let e=new Xe;e.name="kablo-fiziksel";let n=t.userData,s=n.egri;if(!s)return null;let r=t.children.find(g=>g.isMesh&&g.geometry?.type==="TubeGeometry"&&g.material.visible!==!1),a=r?r.material.color.getHex():_h.turuncu,o=56,l={dusuk:6,orta:8,yuksek:10}[i.duzey],c=new Me({color:a,roughness:.36});i.kayitMat(c);let u=Xn(new Ut(new ds(s,o,.62,l,!1),c));e.add(u);let f=u.geometry.index.count,h=s.points[0],d=s.points[s.points.length-1],m=[];for(let g of[h,d]){let p=new C(g.x,g.y-6.2,g.z),b=Xn(new Ut(new gn(2.5,5.6,2.5,2,.25),i.mat("dupont")));b.position.set(p.x,p.y+2.9,p.z);let S=Xn(new Ut(new an(.72,1.12,.8,14),i.mat("dupont")));S.position.set(p.x,p.y+6.05,p.z);let M=Xn(new Ut(new ye(.62,5.6,.62),i.mat("kalay")));M.position.set(p.x,p.y-2.7,p.z),e.add(b,S,M),m.push([b,S,M])}return{grup:e,kanca:{buyut:g=>{u.geometry.setDrawRange(0,Math.floor(g*o)*l*6);for(let p of m[1])p.visible=g>=1;g>=1&&u.geometry.setDrawRange(0,f)}}}}function Ip(i,t,e){return t==="led"?Vv(i,e):t==="direnc"?Gv(i,e):t==="buton"?Hv(i,e):t==="kablo"?Wv(i,e):null}var Xv=!0,Yv=2,qv={yuksek:{env:1,hemi:.28,gunes:2.1,zemin:.26},orta:{env:.95,hemi:.3,gunes:2.2,zemin:.24},dusuk:{env:.85,hemi:.35,gunes:2.4,zemin:.2}},Pp=Symbol("gercekci"),Kv=i=>{try{return localStorage.getItem(i)}catch{return null}},kh=["dusuk","orta","yuksek"];function kc(i,t,e){let n=i?.[t];if(typeof n!="function"||n[Pp])return;let s=function(...r){let a=n.apply(this,r);return e(...r),a};s[Pp]=!0,i[t]=s}function Zv(i,t){let e=new URLSearchParams(location.search).get("fizduzey");if(kh.includes(e))return{duzey:e,neden:["adres"]};let n=2,s=[],r=(f,h)=>{f<n&&(n=f,s.push(h))},a=kh.indexOf(Kv("bote-3d-fizduzey"));a>=0&&r(a,"kayit");let o="";try{let f=i.getContext(),h=f.getExtension("WEBGL_debug_renderer_info");o=h?String(f.getParameter(h.UNMASKED_RENDERER_WEBGL)):""}catch{}let l=/nvidia|geforce|rtx|gtx|radeon rx|radeon pro|apple (m\d|gpu)|adreno.*(6[4-9]\d|[7-9]\d\d)|mali-g[789]|intel.*(arc|iris xe)/i.test(o);/swiftshader|llvmpipe|softpipe|software|basic render/i.test(o)&&r(0,"yazilim"),/intel.*(hd|uhd) graphics|gma|radeon (r[2-5]|hd)|mali-(4|t)|adreno.*[2-5]\d\d|vivante|powervr/i.test(o)&&r(1,"zayif");let c=i.capabilities.maxTextureSize||4096;c<4096?r(0,"doku-siniri"):c<8192&&r(1,"doku-siniri");let u=navigator.deviceMemory;return u&&u<=2?r(0,"bellek"):u&&u<=4&&r(1,"bellek"),(navigator.hardwareConcurrency||8)<=2&&r(1,"cekirdek"),innerWidth*innerHeight*(devicePixelRatio||1)**2>=6e6&&!l&&r(0,"4k"),(/iP(hone|ad|od)/.test(navigator.userAgent)||/Mac/.test(navigator.platform)&&navigator.maxTouchPoints>1)&&r(1,"ios"),o||r(1,"cizici-gizli"),t.kalite().kademe>0&&r(Math.max(0,n-1),"kademe"),n===2&&!(l&&c>=16384&&(!u||u>=8))&&r(1,"yuksek-sarti"),{duzey:kh[n],neden:s,cizici:o}}function kp({S:i,kart:t,bb:e,parcalar:n}){let s={kart:{},bb:{},parca:{}},r={duzey:null,neden:[],gorunum:"sanal",hazir:!1,istatistik:{}},a=null,o=null,l=null,c=[],u=(_,g,p)=>{let b=_?.kanca?.[g];b&&b(p)};kc(t,"ledL",_=>{s.kart.ledL=_,a&&u(a.kart,"ledL",_)}),kc(t,"ledOn",_=>{s.kart.ledOn=_,a&&u(a.kart,"ledOn",_)}),kc(e,"rontgen",_=>{s.bb.rontgen=_,a&&u(a.bb,"rontgen",_)});for(let[_,g]of Object.entries(n)){s.parca[_]={};for(let p of["ac","bacak","bas","buyut"])kc(g.nesne.userData,p,b=>{s.parca[_][p]=b,a&&u(a.parca[_],p,b)})}function f(){if(a)return a;let _=performance.now(),g=Zv(i.renderer,i),p=Ep(g.duzey,i.renderer.capabilities.getMaxAnisotropy()),b=T=>(T&&(T.grup.visible=!1),T),S;try{S={sag:p,kart:b(Tp(p,{logo:Xv})),bb:b(Cp(p)),parca:{},gruplar:[]};for(let[T,v]of Object.entries(n)){let A=b(Ip(p,v.tur,v.nesne));A&&(S.parca[T]=A)}}catch(T){try{p.dispose()}catch{}throw T}let M=[],E=T=>T.traverse(v=>{if(!v.isMesh||v.isInstancedMesh)return;let A=v.material;!Array.isArray(A)&&(A.visible===!1||A.blending===zn)||M.push({o:v,mask:v.layers.mask})});E(t.grup),E(e.grup);for(let T of Object.values(n))E(T.nesne);t.grup.add(S.kart.grup),e.grup.add(S.bb.grup),S.gruplar.push(S.kart.grup,S.bb.grup);for(let[T,v]of Object.entries(S.parca))n[T].nesne.add(v.grup),S.gruplar.push(v.grup);c.push(...M),r.duzey=g.duzey,r.neden=g.neden,a=S,"ledL"in s.kart&&u(S.kart,"ledL",s.kart.ledL),"ledOn"in s.kart&&u(S.kart,"ledOn",s.kart.ledOn),"rontgen"in s.bb&&u(S.bb,"rontgen",s.bb.rontgen);for(let[T,v]of Object.entries(s.parca))for(let[A,k]of Object.entries(v))u(S.parca[T],A,k);l={},i.scene.traverse(T=>{T.isHemisphereLight?l.hemi=T:T.isDirectionalLight?l.gunes=T:T.isMesh&&T.material?.isShadowMaterial&&(l.zemin=T)});let x=0;for(let T of S.gruplar)T.traverse(v=>{v.isMesh&&v.geometry&&(x+=(v.geometry.index?v.geometry.index.count:v.geometry.attributes.position.count)/3*(v.isInstancedMesh?v.count:1))});r.istatistik={kurmaMs:Math.round(performance.now()-_),ucgen:Math.round(x),park:c.length};try{i.renderer.compile(i.scene,i.camera);for(let T of S.gruplar)T.traverse(v=>{if(v.isMesh)for(let A of[].concat(v.material))for(let k of Object.values(A||{}))k?.isTexture&&i.renderer.initTexture(k)})}catch(T){console.warn("Fiziksel \u0131s\u0131nma atland\u0131",T)}return r.hazir=!0,new URLSearchParams(location.search).has("olcum")&&console.info("Fiziksel g\xF6r\xFCn\xFCm",r),S}function h(_){if(!l)return;o||(o={env:i.scene.environmentIntensity,hemi:l.hemi?.intensity,gunes:l.gunes?.intensity,zemin:l.zemin?.material.opacity});let g=_?qv[r.duzey]:o;i.scene.environmentIntensity=g.env,l.hemi&&(l.hemi.intensity=g.hemi),l.gunes&&(l.gunes.intensity=g.gunes),l.zemin&&(l.zemin.material.opacity=g.zemin)}function d(_){let g=_==="fiziksel";if(g&&f(),!!a){for(let{o:p,mask:b}of c)g?p.layers.set(Yv):p.layers.mask=b;for(let p of a.gruplar)p.visible=g;h(g),r.gorunum=_,i.golgeYenile(),i.iste()}}let m=gp(async _=>{_==="fiziksel"&&!a&&await new Promise(g=>setTimeout(g,30)),d(_)});if(pp()==="fiziksel")try{d("fiziksel"),m.ayarla("fiziksel",{kaydet:!1,sessiz:!0})}catch(_){console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor",_),m.ayarla("sanal",{kaydet:!0,sessiz:!0})}return{durum:()=>({...r}),gorunum:_=>m.ayarla(_),kipUygula:d}}var le=document.documentElement,Nt=(i,t=document)=>t.querySelector(i),Ze=(i,t=document)=>[...t.querySelectorAll(i)],ii=(i,t)=>{try{localStorage.setItem(i,t)}catch{}},wi=i=>{try{return localStorage.getItem(i)}catch{return null}},Ai=i=>{let t=Nt("#duyuru");t&&(t.textContent=i)},Lp=Nt("#ders-veri"),Ji=Lp?JSON.parse(Lp.textContent):null;le.dataset.js="1";var ue=null,Si=null,ni=null,Ve={},qr=null,Up=null,Dp=["5","6","7","8"];function Fp(i,t=!0){le.dataset.sinif=i,le.dataset.sinifSecili="1",t&&ii("bote-3d-sinif",i);let e=new URL(location.href);e.searchParams.set("sinif",i),history.replaceState(null,"",e);for(let n of Ze("[data-sinif-yaz]"))n.textContent=`${i}. s\u0131n\u0131f`;for(let n of Ze("a[data-ders-baglanti]")){let s=new URL(n.href,location.href);s.searchParams.set("sinif",i),n.href=s.pathname+s.search}for(let n of Ze("[data-sinif-sec]"))n.setAttribute("aria-pressed",String(n.dataset.sinifSec===i));qr&&Up?.()}var qs=Nt("#sinif-penceresi"),Np=new URLSearchParams(location.search).get("sinif");if(Dp.includes(Np))Fp(Np);else{let i=wi("bote-3d-sinif");if(Dp.includes(i)){le.dataset.sinif=i,le.dataset.sinifSecili="1";for(let t of Ze("[data-sinif-yaz]"))t.textContent=`${i}. s\u0131n\u0131f`;for(let t of Ze("[data-sinif-sec]"))t.setAttribute("aria-pressed",String(t.dataset.sinifSec===i))}qs&&Ji&&qs.showModal?.()}document.addEventListener("click",i=>{let t=i.target.closest("[data-sinif-sec]");t&&(Fp(t.dataset.sinifSec),qs?.open&&(qs.close(),Nt(".adim.etkin h2")?.focus({preventScroll:!0})),Ji?Ai(`${t.dataset.sinifSec}. s\u0131n\u0131f anlat\u0131m\u0131 se\xE7ildi`):$v())});function $v(){let i=Nt("#dersler");if(!i)return;let t=i.getBoundingClientRect();(t.top<0||t.top>window.innerHeight*.55)&&i.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),Ai(`${le.dataset.sinif}. s\u0131n\u0131f se\xE7ildi. \u015Eimdi dersi se\xE7in.`)}Nt("#sinif-dugme")?.addEventListener("click",()=>qs?.showModal?.());var Op=new URLSearchParams(location.search).get("mod")||wi("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),Bp=window.matchMedia(hp),zp=Op;function Dh(i,t){zp=i,le.dataset.mod=i==="tahta"&&Bp.matches?"normal":i,Nt("#tahta-dugme")?.setAttribute("aria-pressed",String(le.dataset.mod==="tahta")),t&&(ii("bote-3d-mod",i),ue?.guvenliYenile())}Dh(Op,!1);Bp.addEventListener?.("change",()=>{let i=le.dataset.mod;Dh(zp,!1),le.dataset.mod!==i&&ue?.guvenliYenile()});Nt("#tahta-dugme")?.addEventListener("click",()=>Dh(le.dataset.mod==="tahta"?"normal":"tahta",!0));var Vp=()=>le.dataset.theme==="dark"?"#17121f":"#e9e5f1";Nt("#tema-dugme")?.addEventListener("click",()=>{let i=le.dataset.theme!=="dark";i?le.dataset.theme="dark":delete le.dataset.theme,ii("bote-theme",i?"dark":"light"),ue?.arkaPlan(Vp())});var Lh=Nt("#tam-ekran");Lh&&!document.fullscreenEnabled&&(Lh.hidden=!0);Lh?.addEventListener("click",()=>document.fullscreenElement?document.exitFullscreen():le.requestFullscreen?.().catch(()=>{}));var Lc=Nt("#ogretmen-dugme");function Nh(i){le.dataset.ek=i?"acik":"",Lc?.setAttribute("aria-expanded",String(i)),i&&Nt("#ogretmen")?.focus()}Lc?.addEventListener("click",()=>Nh(le.dataset.ek!=="acik"));Nt("#ogretmen-kapat")?.addEventListener("click",()=>{Nh(!1),Lc?.focus()});document.addEventListener("keydown",i=>{i.key==="Escape"&&le.dataset.ek==="acik"&&!qs?.open&&(Nh(!1),Lc?.focus())});document.addEventListener("click",i=>{let t=i.target.closest("[data-secenek]");if(!t)return;let e=t.closest(".soru");if(!e||e.dataset.cevaplandi)return;e.dataset.cevaplandi="1";let n=t.hasAttribute("data-dogru");t.classList.add(n?"dogru":"yanlis"),e.querySelector("[data-dogru]")?.classList.add("dogru");let s=e.querySelector(".aciklama");s&&(s.hidden=!1);let r=e.closest(".sinav"),a=Ze(".soru[data-cevaplandi]",r),o=a.filter(c=>c.querySelector(".dogru[data-dogru]")&&!c.querySelector(".yanlis")),l=Nt(".sinav-sonuc",r);l&&a.length===Ze(".soru",r).length&&(l.textContent=`${a.length} sorudan ${o.length} do\u011Fru.`),Ai(n?"Do\u011Fru cevap":"Yanl\u0131\u015F cevap; do\u011Fru se\xE7enek i\u015Faretlendi")});Ji&&Jv();function Jv(){let i=up[Ji.slug],t=Ze(".adim"),e=0,n={bekleme:1e3,ters:!1,akim:!1,basili:!1,direncCikti:!1,sureCarpan:1,delaysiz:!1},s=null,r=null,a=null,o=null,l=null,c=[],u={};function f(I,D=!1){e=Math.max(0,Math.min(t.length-1,I)),t.forEach((st,Dt)=>st.classList.toggle("etkin",Dt===e));let G=t[e];Nt("#adim-sayac").textContent=`${e+1} / ${t.length}`,Nt("#ilerleme").style.width=`${(e+1)/t.length*100}%`,Nt("#geri").disabled=e===0,Nt("#ileri").disabled=e===t.length-1;let ut=Nt("h2",G).textContent;for(let[st,Dt]of[["#mini-sayac",`${e+1}/${t.length}`],["#mini-baslik",ut],["#kisa-baslik",ut]]){let de=Nt(st);de&&(de.textContent=Dt)}for(let[st,Dt]of[["#mini-geri",e===0],["#mini-ileri",e===t.length-1]]){let de=Nt(st);de&&(de.disabled=Dt)}let dt=new URL(location.href);dt.hash=G.id,history.replaceState(null,"",dt),Nt(".kart-govde")?.scrollTo(0,0),D||Ai(`Ad\u0131m ${e+1}: ${Nt("h2",G).textContent}`),fe(),ue&&V(G.dataset.id)}Nt("#geri").addEventListener("click",()=>f(e-1)),Nt("#ileri").addEventListener("click",()=>f(e+1)),document.addEventListener("keydown",I=>{I.target.closest("input, textarea, select")||qs?.open||I.altKey||I.ctrlKey||I.metaKey||(["ArrowRight","PageDown"].includes(I.key)&&(I.preventDefault(),f(e+1)),["ArrowLeft","PageUp"].includes(I.key)&&(I.preventDefault(),f(e-1)))});let h=null;Nt(".kart-alani").addEventListener("touchstart",I=>{let D=I.touches[0];h={x:D.clientX,y:D.clientY}},{passive:!0}),Nt(".kart-alani").addEventListener("touchend",I=>{if(!h)return;let D=I.changedTouches[0],G=D.clientX-h.x,ut=D.clientY-h.y;h=null,Math.abs(G)>70&&Math.abs(ut)<40&&f(e+(G<0?1:-1))},{passive:!0});let d=Nt(".ders"),m=Nt(".kart-alani"),_=Nt(".panel-kenar"),g=Nt("#panel-dugme"),p=window.matchMedia("(orientation: portrait), (max-width: 820px)");function b(I,D=!0){le.dataset.panel=I?"acik":"kapali",g?.setAttribute("aria-expanded",String(I)),g?.setAttribute("aria-label",I?"Anlat\u0131m panelini kapat":"Anlat\u0131m panelini a\xE7"),m.inert=!I&&!p.matches,D&&(ii("bote-3d-panel",I?"acik":"kapali"),Ai(I?"Anlat\u0131m paneli a\xE7\u0131ld\u0131":"Anlat\u0131m paneli kapand\u0131; ad\u0131mlar alttaki \xE7ubuktan ge\xE7ilir"))}b(wi("bote-3d-panel")!=="kapali",!1),g?.addEventListener("click",()=>b(le.dataset.panel!=="acik")),Nt("#mini-ac")?.addEventListener("click",()=>b(!0)),Nt("#mini-geri")?.addEventListener("click",()=>f(e-1)),Nt("#mini-ileri")?.addEventListener("click",()=>f(e+1));let S=I=>{I?d.style.setProperty("--panel-w",`${Math.round(I)}px`):d.style.removeProperty("--panel-w")},M=I=>Math.max(300,Math.min(d.clientWidth*.62,I));S(Number(wi("bote-3d-panel-w"))||0);let E=()=>ii("bote-3d-panel-w",String(parseInt(d.style.getPropertyValue("--panel-w"),10)||"")),x=null,T=110;_?.addEventListener("pointerdown",I=>{I.target.closest("#panel-dugme")||le.dataset.panel!=="acik"||p.matches||(_.setPointerCapture(I.pointerId),x={x:I.clientX,w:m.getBoundingClientRect().width,once:d.style.getPropertyValue("--panel-w")},le.dataset.suruklenen="1")}),_?.addEventListener("pointermove",I=>{if(!x)return;let D=I.clientX-x.x,G=x.w+(le.dataset.panelYan==="sol"?D:-D);G<M(0)-T?le.dataset.kapanacak="1":delete le.dataset.kapanacak,S(M(G))});let v=I=>{if(!x)return;let D=x;if(x=null,delete le.dataset.suruklenen,le.dataset.kapanacak&&(delete le.dataset.kapanacak,D.once?d.style.setProperty("--panel-w",D.once):d.style.removeProperty("--panel-w"),I?.type==="pointerup")){b(!1);return}E()};_?.addEventListener("pointerup",v),_?.addEventListener("pointercancel",v),_?.addEventListener("dblclick",I=>{I.target.closest("#panel-dugme")||(S(0),ii("bote-3d-panel-w",""))}),_?.addEventListener("keydown",I=>{if(I.target!==_||!["ArrowLeft","ArrowRight"].includes(I.key))return;I.preventDefault(),I.stopPropagation();let D=I.key==="ArrowLeft"==(le.dataset.panelYan!=="sol");S(M(m.getBoundingClientRect().width+(D?40:-40))),E()});function A(I,D){le.dataset.panelYan=I;for(let G of Ze("[data-yan]"))G.setAttribute("aria-pressed",String(G.dataset.yan===I));D&&ii("bote-3d-panel-yan",I)}A(wi("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);let k=Nt("#ayarlar"),N=Nt("#ayar-dugme"),z=Nt("#ayar-perde");function O(I,D=!1){k&&(k.hidden=!I,z&&(z.hidden=!I),N.setAttribute("aria-expanded",String(I)),I?(Yt(),[...k.querySelectorAll("input, button")].find(G=>G.id!=="ayar-kapat"&&G.offsetParent!==null)?.focus()):D&&N.focus())}N?.addEventListener("click",I=>{I.stopPropagation(),O(k.hidden)}),Nt("#ayar-kapat")?.addEventListener("click",()=>O(!1,!0)),document.addEventListener("click",I=>{k&&!k.hidden&&!I.target.closest("#ayarlar, #ayar-dugme")&&O(!1)}),document.addEventListener("keydown",I=>{I.key==="Escape"&&k&&!k.hidden&&O(!1,!0)});let P=Nt("#panel-genislik"),U=Nt("#genislik-deger"),Z={dar:"Dar",orta:"Orta",genis:"Geni\u015F"},K={dar:0,orta:50,genis:100};function ct(){let I=window.innerWidth,D=(G,ut,dt)=>M(Math.max(G,Math.min(ut*I,dt)));return le.dataset.mod==="tahta"?{dar:D(380,.29,1100),orta:D(440,.37,1500),genis:D(560,.5,1900)}:{dar:D(290,.26,440),orta:D(330,.34,560),genis:D(420,.46,900)}}function $(I){let D=ct();return I<=50?D.dar+(D.orta-D.dar)*I/50:D.orta+(D.genis-D.orta)*(I-50)/50}function ot(I){let D=ct();return I<=D.orta?D.orta>D.dar?Math.max(0,(I-D.dar)/(D.orta-D.dar)*50):0:D.genis>D.orta?Math.min(100,50+(I-D.orta)/(D.genis-D.orta)*50):100}function at(){if(!P)return;let I=Number(P.value),D=$(I),G=Object.keys(K).find(dt=>Math.abs(K[dt]-I)<=3)||"",ut=Math.round(D/Math.max(1,d.clientWidth)*100);U&&(U.textContent=G?`${Z[G]} \xB7 %${ut}`:`%${ut}`),P.setAttribute("aria-valuetext",`${G?`${Z[G]}, `:""}ekran\u0131n y\xFCzde ${ut} kadar\u0131`),P.style.setProperty("--dolu",`${I}%`);for(let dt of Ze("[data-panel-boyut]:not(html)"))dt.setAttribute("aria-pressed",String(dt.dataset.panelBoyut===G))}function Yt(){P&&(P.value=String(Math.round(ot(m.getBoundingClientRect().width||ct().orta))),at())}let Lt=()=>{le.dataset.suruklenen&&!x&&!Ot&&delete le.dataset.suruklenen};P?.addEventListener("pointerdown",()=>{le.dataset.suruklenen="1"}),P?.addEventListener("pointerup",Lt),P?.addEventListener("input",()=>{le.dataset.suruklenen="1",S($(Number(P.value))),at()}),P?.addEventListener("change",()=>{Lt(),E()});function _e(I,D){le.dataset.panelBoyut=I,D&&(S(0),ii("bote-3d-panel-w",""),ii("bote-3d-panel-boyut",I)),P&&(P.value=String(K[I]),at())}_e(["dar","orta","genis"].includes(wi("bote-3d-panel-boyut"))?wi("bote-3d-panel-boyut"):"orta",!1);let pe=[.9,1,1.15,1.3,1.5],re=Math.max(0,pe.indexOf(Number(wi("bote-3d-yazi"))||1));function et(I,D){re=Math.max(0,Math.min(pe.length-1,I)),le.style.setProperty("--yazi",String(pe[re]));let G=Nt("#yazi-deger");G&&(G.textContent=`%${Math.round(pe[re]*100)}`),D&&ii("bote-3d-yazi",String(pe[re]))}et(re,!1),document.addEventListener("click",I=>{let D=I.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");D&&(D.dataset.panelBoyut&&_e(D.dataset.panelBoyut,!0),D.dataset.yazi&&et(re+Number(D.dataset.yazi),!0),D.dataset.yan&&A(D.dataset.yan,!0))});let it=Nt("#tahmin-ayar");it&&(it.checked=wi("bote-3d-tahmin")!=="hayir",it.addEventListener("change",()=>ii("bote-3d-tahmin",it.checked?"evet":"hayir")));let vt={kisa:()=>(Nt(".tutamac")?.offsetHeight||0)+(Nt(".kart-ust")?.offsetHeight||0)+(Nt(".kart-alt")?.offsetHeight||0)+2,yarim:()=>d.clientHeight*.5,tam:()=>d.clientHeight*.92},Kt=["kisa","yarim","tam"].includes(wi("bote-3d-sayfa"))?wi("bote-3d-sayfa"):"yarim";function At(I,D=!0,G=!1){if(!p.matches){delete le.dataset.sayfa,d.style.removeProperty("--sayfa-h"),ue?.gorunurAlan(0,!0),b(le.dataset.panel!=="kapali",!1);return}Kt=I,le.dataset.sayfa=I,m.inert=!1;let ut=Math.round(vt[I]());G&&(le.dataset.suruklenen="1"),d.style.setProperty("--sayfa-h",`${ut}px`),G&&requestAnimationFrame(()=>delete le.dataset.suruklenen),ue?.gorunurAlan(ut,G),D&&ii("bote-3d-sayfa",I)}let Ot=null;for(let I of[Nt(".tutamac"),Nt(".kart-ust")].filter(Boolean)){I.addEventListener("pointerdown",G=>{if(!p.matches||G.target.closest("button"))return;I.setPointerCapture(G.pointerId);let ut=performance.now();Ot={y:G.clientY,h:m.getBoundingClientRect().height,sonY:G.clientY,sonT:ut,hiz:0},le.dataset.suruklenen="1"}),I.addEventListener("pointermove",G=>{if(!Ot)return;let ut=performance.now(),dt=Math.max(vt.kisa(),Math.min(vt.tam(),Ot.h+(Ot.y-G.clientY)));d.style.setProperty("--sayfa-h",`${Math.round(dt)}px`),Ot.hiz=(Ot.sonY-G.clientY)/Math.max(1,ut-Ot.sonT),Ot.sonY=G.clientY,Ot.sonT=ut});let D=G=>{if(!Ot)return;let ut=Ot;Ot=null,delete le.dataset.suruklenen;let dt=m.getBoundingClientRect().height,st=Math.abs(G.clientY-ut.y)>6,Dt;st?ut.hiz>.45?Dt=dt<vt.yarim()?"yarim":"tam":ut.hiz<-.45?Dt=dt>vt.yarim()?"yarim":"kisa":Dt=["kisa","yarim","tam"].sort((de,Ae)=>Math.abs(vt[de]()-dt)-Math.abs(vt[Ae]()-dt))[0]:Dt=Kt==="kisa"?"yarim":"kisa",At(Dt),Ai({kisa:"Kartlar k\xFC\xE7\xFCld\xFC",yarim:"Kartlar yar\u0131m ekran",tam:"Kartlar tam ekran"}[Dt])};I.addEventListener("pointerup",D),I.addEventListener("pointercancel",D)}let we=()=>At(Kt,!1,!0);p.addEventListener?.("change",we);let X=0;window.addEventListener("resize",()=>{clearTimeout(X),X=setTimeout(()=>{p.matches&&At(Kt,!1,!0)},120)}),At(Kt,!1,!0),window.addEventListener("hashchange",()=>{let I=t.findIndex(D=>`#${D.id}`===location.hash);I>=0&&I!==e&&f(I)});let tt=t.findIndex(I=>`#${I.id}`===location.hash);f(tt>0?tt:0,!0),document.addEventListener("click",I=>{let D=I.target.closest("[data-eylem]");if(!D||!ue)return;let G=D.dataset.eylem,ut=st=>D.setAttribute("aria-pressed",String(st));if(G==="akim"&&(Mt(!n.akim),ut(n.akim)),G==="hiz"){n.bekleme=Number(D.dataset.deger);for(let st of Ze('[data-eylem="hiz"]',D.parentElement))st.setAttribute("aria-pressed",String(st===D));l==="blink"&&Xt("blink")}if(G==="sure"){n.sureCarpan=Number(D.dataset.deger);for(let st of Ze('[data-eylem="sure"]',D.parentElement))st.setAttribute("aria-pressed",String(st===D));l==="trafik"&&Xt("trafik")}if(G==="ters"&&(n.ters=!n.ters,ut(n.ters),Ve.led1.nesne.rotation.y=n.ters?Math.PI:0,ue.golgeYenile(),ue.etiketKoy(n.ters?[{nokta:y("parca:led1"),metin:"Uzun bacak art\u0131k 16. s\xFCtunda"}]:[]),Xt(l)),G==="rontgen"){let st=D.getAttribute("aria-pressed")!=="true";ut(st),ni.rontgen(st),ue.iste(),Ai(st?"R\xF6ntgen a\xE7\u0131k: i\xE7teki metal \u015Feritler g\xF6r\xFCn\xFCyor":"R\xF6ntgen kapal\u0131")}G==="direnc-cikar"&&(n.direncCikti=!n.direncCikti,ut(n.direncCikti),Ve.r2.nesne.visible=!n.direncCikti,ue.golgeYenile(),bt()),G==="delaysiz"&&(n.delaysiz=!n.delaysiz,ut(n.delaysiz),Xt("trafik"));let dt=I.target.closest("[data-gorunum]");dt&&R(dt.dataset.gorunum)});let J=I=>{l!=="buton"&&!n.butonDene||(n.basili=I,bt())};document.addEventListener("pointerdown",I=>{let D=I.target.closest('[data-eylem="buton"]');D&&(D.setPointerCapture?.(I.pointerId),J(!0))});for(let I of["pointerup","pointercancel","lostpointercapture"])document.addEventListener(I,D=>{D.target.closest?.('[data-eylem="buton"]')&&n.basili&&J(!1)});document.addEventListener("keydown",I=>{(I.key===" "||I.key==="Enter")&&I.target.closest?.('[data-eylem="buton"]')&&!I.repeat&&(I.preventDefault(),J(!0))}),document.addEventListener("keyup",I=>{(I.key===" "||I.key==="Enter")&&I.target.closest?.('[data-eylem="buton"]')&&J(!1)}),Ze(".gorunum button").forEach(I=>I.addEventListener("click",()=>R(I.dataset.gorunum))),Nt("#yakinlas")?.addEventListener("click",()=>ue?.yakinlas(.8)),Nt("#uzaklas")?.addEventListener("click",()=>ue?.yakinlas(1.25));let lt=Nt(".sahne-alani");requestAnimationFrame(()=>setTimeout(mt,20));function mt(){if(ue=Xf(Nt("#sahne"),{arkaPlan:Vp(),olay:zt,guvenliAlan:Et}),!ue){le.dataset.webgl="yok";return}rp(ue.renderer.capabilities.getMaxAnisotropy()),Si=$f(ue.hedefler),ue.scene.add(Si.grup),ni=Jf(ue.hedefler),ue.scene.add(ni.grup),Ve=i.devre?lp(i.devre,ue.hedefler):{};for(let D of Object.values(Ve))D.nesne.visible=!1,ue.scene.add(D.nesne),D.kutular=Bt(D);ue.dokunmaDinle(Y);let I=kp({S:ue,kart:Si,bb:ni,parcalar:Ve,html:le});p.matches&&ue.gorunurAlan(Math.round(vt[Kt]()),!0),V(t[e].dataset.id,!0),requestAnimationFrame(()=>lt.classList.add("hazir")),new URLSearchParams(location.search).has("olcum")&&(qt(),window.__3d={S:ue,kart:Si,bb:ni,parcalar:Ve,adimaGit:f,kameraBul:me,gorunumSec:R,adim:()=>t[e].dataset.id,gercekci:I})}function Et(){let I=Nt("#sahne").getBoundingClientRect(),D=le.dataset.mod==="tahta"?24:14,G=D,ut=D,dt=Ze(".ipucu",lt).find(Ae=>Ae.offsetParent!==null);dt&&(G=Math.max(G,dt.getBoundingClientRect().bottom-I.top+8));let st=Nt(".sahne-arac",lt);st&&getComputedStyle(st).opacity!=="0"&&(ut=Math.max(ut,I.bottom-st.getBoundingClientRect().top+8));let Dt=[],de=Nt("#lejant");if(de&&de.offsetParent!==null){let Ae=de.getBoundingClientRect();Dt.push({x0:Ae.left-I.left,y0:Ae.top-I.top,x1:Ae.right-I.left,y1:Ae.bottom-I.top})}return{ust:G,alt:ut,sol:D,sag:D,engel:Dt}}function zt(I){I==="baglam-kaybi"&&lt.classList.add("baglam-kaybi"),I==="baglam-geri"&&lt.classList.remove("baglam-kaybi")}Nt("#yeniden-yukle")?.addEventListener("click",()=>location.reload());let Qt=new Ce;function Bt(I){let D=I.nesne,G={};for(let[ut,dt]of I.pozlar?[["takili",1],["havada",0]]:[["takili",1]]){D.userData.bacak?.(dt);let st=new En;for(let Dt of D.children)!Dt.isMesh||!Dt.material||Dt.material.visible===!1||Dt.material.blending===zn||(Dt.updateMatrix(),Dt.geometry.boundingBox||Dt.geometry.computeBoundingBox(),st.union(Dt.geometry.boundingBox.clone().applyMatrix4(Dt.matrix)));G[ut]=st}return D.userData.bacak?.(1),G}function L(I,D="takili"){let G=I.nesne,ut=I.pozlar?.[D]||I.pozlar?.takili||G.position;return(I.kutular[D]||I.kutular.takili).clone().applyMatrix4(Qt.compose(ut,G.quaternion,G.scale))}function me(I,D={}){if(typeof I!="string"){let dt=Ve[I.parca];return{kutu:L(dt,I.poz||"takili").expandByScalar(I.pay??3),yon:I.yon}}let G=vh[I]||vh.genel,ut=new En(new C(G.kutu[0],G.kutu[1],G.kutu[2]),new C(G.kutu[3],G.kutu[4],G.kutu[5]));for(let dt of D.parca||[]){let st=Ve[dt];if(!st)continue;let Dt=D.poz&&D.poz[dt]||"takili";(st.tur==="kablo"?G.kablolar:Dt!=="takili")&&ut.union(L(st,Dt))}return{kutu:ut,yon:G.yon}}let se={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06]};function R(I){let D=i.adimlar[t[e].dataset.id]||{},G=me(D.kamera||"genel",D);ue.kameraGit(se[I]?{...G,yon:se[I]}:G);for(let ut of Ze(".gorunum button"))ut.setAttribute("aria-pressed",String(ut.dataset.gorunum===I))}function y(I){let[D,G,ut]=I.split(":");if(D==="alan"){let Dt=Si.alanlar[G]||ni.alanlar[G];return new C(Dt[0],Dt[1]+Dt[4]/2+1.5,Dt[2])}if(D==="pin")return Mi(G).add(new C(0,2.4,0));if(D==="delik")return je(Number(G),ut).add(new C(0,1,0));if(D==="ray")return Qn(G.slice(0,-1),G.slice(-1),G.endsWith("+")?4:28).add(new C(0,1,0));if(D==="parca"){let Dt=Ve[G],de=(i.adimlar[t[e].dataset.id]?.poz||{})[G]||"takili";return(Dt.pozlar?Dt.pozlar[de].clone():Dt.nesne.position.clone()).add(Dt.nesne.userData.tepe||new C(0,6,0))}let dt=Ve[D],st=(i.adimlar[t[e].dataset.id]?.poz||{})[D]||"takili";return dt.pozlar[st].clone().add(new C(G==="anot"?-1.27:1.27,G==="anot"?-16.6:-11.6,0))}function V(I,D=!1){let G=i.adimlar[I]||{};ft(),Mt(!1),Object.assign(n,{ters:!1,basili:!1,direncCikti:!1,delaysiz:!1,bekleme:1e3,sureCarpan:1});for(let dt of Ze("[data-eylem]"))dt.setAttribute("aria-pressed",String(["1000","1"].includes(dt.dataset.deger)));for(let dt of Ze(".gorunum button"))dt.setAttribute("aria-pressed",String(dt.dataset.gorunum==="egik"));Ve.led1&&(Ve.led1.nesne.rotation.y=0),ni.rontgen(!1),ni.grupGoster([]),Ct(),Si.ledOn(!!G.program);let ut=new Set(G.parca||[]);for(let[dt,st]of Object.entries(Ve)){if(!ut.has(dt)){st.nesne.visible=!1,st.kutu&&(st.kutu.userData.etkin=!1);continue}if(st.kutu&&(st.kutu.userData.etkin=!0),st.tur==="kablo"){st.nesne.visible||(st.nesne.visible=!0,st.nesne.userData.buyut(D?1:0),D||ue.tween(700,Re=>st.nesne.userData.buyut(Re),!0));continue}let Dt=G.poz&&G.poz[dt]||"takili",de=st.pozlar[Dt],Ae=Dt==="takili"?1:0;if(st.nesne.visible||(st.nesne.visible=!0,st.nesne.position.copy(de).add(new C(0,D?0:14,0)),st.tk=Ae,st.nesne.userData.bacak?.(Ae)),!st.nesne.position.equals(de)){let Re=st.nesne.position.clone(),Be=st.tk??Ae;st.tk=Ae,ue.tween(650,Tn=>{st.nesne.position.lerpVectors(Re,de,Tn),st.nesne.userData.bacak?.(Be+(Ae-Be)*Tn)},!0)}}Ve.r2&&ut.has("r2")&&(Ve.r2.nesne.visible=!0),ue.golgeYenile();for(let dt of c)ue.scene.remove(dt);c=(G.vurgu||[]).map(dt=>jf(ue.scene,Si.alanlar[dt]||ni.alanlar[dt])),ue.etiketKoy((G.etiket||[]).map(([dt,st,Dt])=>({nokta:y(dt),metin:st,tur:Dt}))),lt.dataset.ipucu=(G.kontrol||[]).includes("delik")?"delik":G.dokun?"dokun":"",ue.kameraGit(me(G.kamera||"genel",G),D),l=null,G.program&&Xt(G.program),le.dataset.kesif==="acik"&&Gt(),ue.iste()}let H=Ji.kod||[];function Q(){let I=H.findIndex(ut=>ut.startsWith("void loop")),D=[],G=[];for(let ut=I+1;ut<H.length;ut++)H[ut].trim()&&G.push(ut+1),H[ut].includes("delay(")&&(D.push(G),G=[]);return D}let _t=Q();function yt(I){for(let D of Ze(".kod-satir.calisiyor"))D.classList.remove("calisiyor");for(let D of I||[])for(let G of Ze(`.adim.etkin .kod-satir[data-no="${D}"]`))G.classList.add("calisiyor")}function nt(I,D=0){return H.findIndex((ut,dt)=>dt>=D&&ut.includes(I))+1}function ft(){clearTimeout(s),s=null,clearTimeout(r),r=null,yt([])}function Ct(){for(let I of Object.values(Ve))I.tur==="led"&&I.nesne.userData.ac(!1);Si.ledL(!1);for(let I of Object.values(u))I.yanik=!1}function Xt(I){if(ft(),l=I,I==="blink"){let D=G=>{Tt(G),yt(_t[G?0:1]),s=setTimeout(()=>D(!G),n.bekleme)};D(!0)}I==="buton"&&bt(),I==="trafik"&&ie(0)}function Tt(I){Si.ledL(I);let D=I&&!n.ters;Ve.led1?.nesne.userData.ac(D),B("led1",D),ue.iste()}function bt(){if(!Ve.buton)return;Ve.buton.nesne.userData.bas(n.basili),clearTimeout(r),r=null;let I=nt("digitalRead"),D=nt("HIGH",I),G=nt("else"),ut=nt("LOW",G-1);if(n.direncCikti&&!n.basili){let dt=()=>{let st=Math.random()<.5;Tt(st),yt(st?[I,D]:[I,G,ut]),r=setTimeout(dt,90+Math.random()*380)};dt()}else Tt(n.basili),yt(n.basili?[I,D]:[I,G,ut]);ue.iste()}let $t={kirmizi:"ledK",sari:"ledS",yesil:"ledY"};function ie(I){let D=Ji.trafikSirasi?.length?Ji.trafikSirasi:[{isiklar:["kirmizi"],sure:3e3},{isiklar:["yesil"],sure:3e3},{isiklar:["sari"],sure:1e3}];if(n.delaysiz){for(let[ut,dt]of Object.entries($t))Ve[dt].nesne.userData.ac(.35),B(dt,!0);yt(_t.flat()),ue.iste();return}let G=D[I%D.length];for(let[ut,dt]of Object.entries($t)){let st=G.isiklar.includes(ut);Ve[dt].nesne.userData.ac(st),B(dt,st)}yt(_t[I%D.length]),ue.iste(),s=setTimeout(()=>ie(I+1),G.sure*n.sureCarpan)}function he(){if(Object.keys(u).length)return;let I=(D,G,ut,dt)=>{u[D]={akim:sp(ue.scene,cp(Ve[G],Ve[ut],Ve[dt],Ve.kgnd)),yanik:!1}};(i.devre==="led"||i.devre==="buton")&&I("led1","k13","led1","r1"),i.devre==="trafik"&&(I("ledK","kK","ledK","rK"),I("ledS","kS","ledS","rS"),I("ledY","kY","ledY","rY"))}function B(I,D){let G=u[I];G&&(G.yanik=D,G.akim.gorunur(n.akim&&D))}function Mt(I){n.akim=I,clearTimeout(o),I?(he(),(i.devre==="led"||i.devre==="buton")&&(u.led1.yanik=Ve.led1.nesne.userData.yanik??u.led1.yanik),a??=ue.yavasGuncelleyici((D,G)=>{if(!n.akim)return!1;let ut=!1;for(let dt of Object.values(u))dt.yanik&&(dt.akim.ilerlet(G),ut=!0);return ut}),o=setTimeout(()=>{Mt(!1);for(let D of Ze('[data-eylem="akim"]'))D.setAttribute("aria-pressed","false")},45e3)):a&&(a(),a=null);for(let D of Object.values(u))D.akim.gorunur(I&&D.yanik);ue?.iste()}let ht=Nt("#kesif-sablon"),St=Nt("#lejant");St&&window.matchMedia("(min-width: 700px) and (min-height: 600px)").matches&&(St.open=!0),St?.addEventListener("toggle",()=>ue?.guvenliYenile());let It=(I,D)=>{let G=ht?.content.querySelector(`[data-kat="${D}"] svg`);I&&G&&I.replaceChildren(G.cloneNode(!0))},pt=I=>/^\d+$/.test(I)?["3","5","6","9","10","11"].includes(I)?`~${I}`:I:I.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[I]||I;function Jt(I,D,G,ut){let dt=bh(I);if(!dt)return null;let st=document.createElement("button");st.type="button",st.className=ut?"kesif-isaret pin-isaret":"kesif-isaret",st.dataset.kat=dt,st.dataset.id=I;let Dt=document.createElement("span");Dt.className="ki-daire",It(Dt,dt);let de=document.createElement("span");return de.className="ki-no",de.textContent=ut||String(D),de.setAttribute("aria-hidden","true"),st.append(Dt,de),st.setAttribute("aria-label",ut?`${G}, ${lo[dt].ad} grubu`:`${D}. ke\u015Fif noktas\u0131, ${lo[dt].ad} grubu`),st.addEventListener("click",Ae=>{Ae.stopPropagation();for(let Re of Ze(".kesif-isaret[aria-current]"))Re.removeAttribute("aria-current");st.setAttribute("aria-current","true"),jt(I,it?it.checked:!0,G)}),{el:st,kat:dt}}function Gt(){if(!ue)return;let I=i.adimlar[t[e].dataset.id]||{},D=[],G=new Set,ut=0,dt=(st,Dt,de,Ae,Re=0)=>{let Be=Jt(st,ut+1,de,Ae);Be&&(Ae||ut++,G.add(Be.kat),D.push({el:Be.el,oncelik:oo[st].oncelik,adim:Re,...Dt}))};for(let st of Si.kesifNoktalari)dt(st.id,{nokta:st.nokta},st.ozel);for(let st of ni.kesifNoktalari)dt(st.id,{nokta:st.nokta},st.ozel);for(let[st,Dt]of Object.entries(Ve)){if(!(I.parca||[]).includes(st))continue;let de=((I.poz||{})[st]||"takili")==="takili"?1:0;for(let[Ae,Re]of Dt.nesne.userData.kesifYerleri?.(de)||[])dt(Ae,{nesne:Dt.nesne,yerel:Re},Dt.ozel?.[Ae])}for(let st of Si.pinler)dt(st.kesif,{nokta:st.nokta},st.ozel,pt(st.ad),2.54);ue.isaretKoy(D);for(let st of Ze("li[data-kat]",St||document.createElement("i")))st.hidden=!G.has(st.dataset.kat)}let ke=Nt("#kesif-dugme");ke?.addEventListener("click",()=>{let I=le.dataset.kesif!=="acik";le.dataset.kesif=I?"acik":"",ke.setAttribute("aria-pressed",String(I)),ue?.guvenliYenile(),I?(Gt(),Ai("Ke\u015Fif modu a\xE7\u0131k: i\u015Faretli par\xE7alara dokun. \u0130\u015Faretin rengi ve simgesi par\xE7an\u0131n grubunu g\xF6sterir.")):(ue?.isaretKoy([]),fe(),Ai("Ke\u015Fif modu kapand\u0131"))});function Y(I,D){if(!I){fe();return}let G=i.adimlar[t[e].dataset.id]||{};if(I.bb&&D&&(G.kontrol||[]).includes("delik")){let ut=ni.grupBul(D);if(ut){ni.grupGoster(ut.delikler),ue.etiketKoy([{nokta:ut.delikler[0].clone().add(new C(0,1.5,0)),metin:`${ut.ad}: ba\u011Fl\u0131`,tur:"yesil"}]),Ai(`${ut.ad} birbirine ba\u011Fl\u0131`),ue.iste();return}}if(I.parca==="buton"&&l==="buton"){n.basili=!0,bt(),setTimeout(()=>{n.basili=!1,bt()},700);return}I.kesif&&jt(I.kesif,le.dataset.kesif==="acik"&&(it?it.checked:!0),I.ozel)}function gt(I){let D=Ji.kavramlar||{},G=Ji.kesifIcerik||{},ut=oo[I];return D[I]?{...D[I],ad:ut?.ad||D[I].ad}:G[I]?{...G[I],ad:G[I].ad||ut?.ad||I}:ut?.kavram&&D[ut.kavram]?{...D[ut.kavram],ad:ut.ad}:ut?{ad:ut.ad,yalin:ut.kisa}:null}let wt=!1,te="";function jt(I,D=!1,G=""){let ut=Nt("#bilgi"),dt=I?gt(I):null;if(!ut||!dt)return;let st=le.dataset.sinif||"6",Dt=I!==qr||ut.hidden;D!=="koru"&&(wt=!!D,te=G||"");let de=Nt("#kesif-soru"),Ae=Nt("#bilgi-cevap");de&&(de.hidden=!wt),Ae&&(Ae.hidden=wt);let Re=bh(I),Be=Nt("#bilgi-kat");Be&&(Be.hidden=!Re,Re&&(Be.dataset.kat=Re,Nt("#bilgi-kat-ad").textContent=lo[Re].ad,It(Nt(".ki-daire",Be),Re))),Nt("#bilgi-baslik").textContent=dt.ad;let Tn=Nt("#bilgi-ozel");if(Tn&&(Tn.textContent=te,Tn.hidden=!te||te===dt.ad),dt.yalin?(Nt("#bilgi-teknik").textContent=dt.yalin,Nt("#bilgi-sosyal").textContent="",ut.classList.add("yalin")):(Nt("#bilgi-teknik").innerHTML=dt.teknik?.[st]||dt.teknik?.["6"]||"",Nt("#bilgi-sosyal").innerHTML=dt.sosyal?.[st]||"",ut.classList.toggle("yalin",!dt.sosyal?.[st])),Dt){let si=Nt("#bilgi-gorsel");if(si){si.hidden=!0;let ws=Nt("img",si);ws&&(ws.removeAttribute("src"),ws.alt="")}}qr=I,ut.hidden=!1,p.matches&&Kt==="tam"&&At("yarim"),Ai(wt?"Sence bu nedir? Cevab\u0131 g\xF6r d\xFC\u011Fmesine bas":[dt.ad,te].filter(Boolean).join(", ")),Dt&&document.dispatchEvent(new CustomEvent("3d:bilgi",{detail:{id:I}}))}Up=()=>jt(qr,"koru"),document.addEventListener("3d:kesif-ac",I=>{let D=I.detail?.id;D&&jt(D,it?it.checked:!0,I.detail.ozel)}),Nt("#kesif-gor")?.addEventListener("click",()=>{wt=!1,jt(qr,"koru"),Nt("#bilgi-baslik")?.focus?.()});function fe(){let I=Nt("#bilgi");I&&(I.hidden=!0),qr=null;for(let D of Ze(".kesif-isaret[aria-current]"))D.removeAttribute("aria-current")}Nt("#bilgi-kapat")?.addEventListener("click",fe);function qt(){let I=document.createElement("div");I.className="olcum",lt.appendChild(I);let D=0,G=performance.now(),ut=G,dt=0;ue.kareGuncelleyici(st=>(D++,dt=Math.max(dt,st-ut),ut=st,!1)),setInterval(()=>{let st=performance.now(),Dt=ue.kalite();I.textContent=`${Math.round(D*1e3/(st-G))} kare/sn \xB7 en uzun ${Math.round(dt)} ms \xB7 \xF6l\xE7ek ${Dt.piksel} (tam ${Dt.tam}, kademe ${Dt.kademe})`,D=0,G=st,dt=0},1e3)}}
